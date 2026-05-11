import * as THREE from 'three';
import { getLevelConfig as getTowerLevelConfig } from './Tower.js';

const GameState = {
	IDLE: 'IDLE',
	PLAYING: 'PLAYING',
	PAUSED: 'PAUSED',
	DEAD: 'DEAD',
	WIN: 'WIN',
	FINAL_WIN: 'FINAL_WIN'
};

function getLevelConfig(levelNumber) {
	return getTowerLevelConfig(levelNumber);
}

class GameManager {
	static instance = null;

	constructor(ball, tower, pole, hud, audio, particles) {
		this.ball = ball;
		this.tower = tower;
		this.pole = pole;
		this.hud = hud;
		this.audio = audio;
		this.audioManager = audio;
		this.particles = particles;

		this.state = GameState.IDLE;
		this.score = 0;
		this.level = 1;
		this.totalLevels = 10;
		this.renderer = null;
		this._comboCount = 0;
		this._comboMultiplier = 1;
		this._lastSoftHitAt = 0;
		this._comboTimeoutMs = 1850;
		this._maxCombo = 0;

		this._levelStartedAt = 0;
		this._levelStats = this._freshLevelStats();
		this._lastHardHitAt = 0;

		this._sequenceRunning = false;
		this._sequenceCancelled = false;
		this._sequenceMeshes = [];
		this._sequenceRafs = new Set();

		// Fail budget — research: ref ships one-hit-fail. Compromise for web:
		// 3 hits on early levels (forgiving onboarding), 1 hit at level 4+.
		this._hardHitsThisLevel = 0;
		this._maxHardHitsBeforeFail = 3;

		this.tower.particleSystem = this.particles;
		GameManager.instance = this;
	}

	_freshLevelStats() {
		return { broken: 0, perfectSoft: 0, hardHits: 0, ms: 0, maxCombo: 0 };
	}

	start() {
		this.state = GameState.PLAYING;
		this._comboCount = 0;
		this._comboMultiplier = 1;
		this._lastSoftHitAt = 0;
		this._maxCombo = 0;
		this._hardHitsThisLevel = 0;
		// Level-scaled fail budget: 3 hits L1-3 (gentle), 1 hit L4+ (industry standard).
		this._maxHardHitsBeforeFail = this.level <= 3 ? 3 : 1;
		this._levelStartedAt = performance.now();
		this._levelStats = this._freshLevelStats();
		// Apply per-level sky/ground theme to the 3D background dome.
		const theme = this.tower?.currentTheme;
		if (theme && this.renderer?.setSkyTheme) {
			this.renderer.setSkyTheme(theme.sky, theme.ground);
		}
		this.hud.showPlayingUI(this.score, this.level, this.tower.totalSlabs);
		this.hud.updateCombo?.(0, 1, 0);
	}

	// Per-frame tick from the main loop. Decays stale combo so the HUD never lies.
	tick(now = performance.now()) {
		if (this.state !== GameState.PLAYING) return;
		if (this._comboCount > 0 && now - this._lastSoftHitAt > this._comboTimeoutMs) {
			this._comboCount = 0;
			this._comboMultiplier = 1;
			this.hud.updateCombo?.(0, 1, 0);
		}
	}

	notifyLandingType(type) {
		if (this.state !== GameState.PLAYING) return;
		this.hud.showLandingHint?.(type);
	}

	onSoftHit(slabUserData) {
		if (this.state !== GameState.PLAYING) return;
		const broken = this.tower.onSoftHit(slabUserData);
		if (broken) {
			const now = performance.now();
			if (now - this._lastSoftHitAt <= this._comboTimeoutMs) {
				this._comboCount += 1;
			} else {
				this._comboCount = 1;
			}
			this._lastSoftHitAt = now;

			this._comboMultiplier = Math.min(4, 1 + Math.floor(Math.max(0, this._comboCount - 1) / 4));
			const gainedPoints = 3 * this._comboMultiplier;

			this.score += gainedPoints;
			this._levelStats.broken += 1;
			this._levelStats.perfectSoft += 1;
			if (this._comboCount > this._maxCombo) {
				this._maxCombo = this._comboCount;
				this._levelStats.maxCombo = this._maxCombo;
			}
			this.hud.updateProgress(this.tower.slabsBroken, this.tower.totalSlabs, this.score);
			this.hud.updateCombo?.(this._comboCount, this._comboMultiplier, gainedPoints);

			const vel = THREE.MathUtils.clamp(Math.abs(this.ball.body.velocity.y) / 12, 0.7, 1.5);
			this.audioManager?.play('break', vel);
			if (this.tower.allDone()) this._levelComplete();
		}
	}

	onHardHit(slabUserData) {
		if (this.state !== GameState.PLAYING) return;
		void slabUserData;

		// Throttle — stuck-state recovery can fire 3 hard hits in <200ms,
		// stacking shakes into an earthquake. One feedback event per 180ms max.
		const now = performance.now();
		if (now - (this._lastHardHitAt || 0) < 180) return;
		this._lastHardHitAt = now;

		this._comboCount = 0;
		this._comboMultiplier = 1;
		this._lastSoftHitAt = 0;
		this._levelStats.hardHits += 1;
		this._hardHitsThisLevel += 1;
		this.audioManager?.play('bounce');
		// Tiny nudge — primary feedback is now hud.flashDanger() (the pink pulse).
		this.renderer?.triggerShake?.(0.05);
		this.hud.flashDanger?.();
		this.score = Math.max(0, this.score - 3);
		this.hud.updateProgress(this.tower.slabsBroken, this.tower.totalSlabs, this.score);
		this.hud.updateCombo?.(0, 1, 0);

		if (this._hardHitsThisLevel >= this._maxHardHitsBeforeFail) {
			this._failLevel();
		}
	}

	_failLevel() {
		if (this.state === GameState.DEAD) return;
		this.state = GameState.DEAD;
		// Duck BGM so the death SFX and game-over modal read clearly.
		this.audioManager?.duckBGM?.(0.35, 400, 1200);
		this.audioManager?.play('death');
		this.renderer?.triggerShake?.(0.10);  // capped — modal + duck carry the moment
		this.ball.die?.();
		this.hud.showGameOver?.(this.score);
	}

	togglePause() {
		if (this.state === GameState.PLAYING) {
			this.state = GameState.PAUSED;
			this.hud.showPauseScreen?.();
			return true;
		}
		if (this.state === GameState.PAUSED) {
			this.state = GameState.PLAYING;
			this.hud.hidePauseScreen?.();
			return false;
		}
		return null;
	}

	restart() {
		this._cancelCompletionSequence();
		this._cleanupAllSlabs();
		this._comboCount = 0;
		this._comboMultiplier = 1;
		this._lastSoftHitAt = 0;
		this.ball.reset(this.level);
		this.tower.buildLevel(getLevelConfig(this.level));
		this.start();
	}

	nextLevel() {
		this._cancelCompletionSequence();
		this._cleanupAllSlabs();
		this._comboCount = 0;
		this._comboMultiplier = 1;
		this._lastSoftHitAt = 0;

		if (this.level >= this.totalLevels) {
			this.state = GameState.FINAL_WIN;
			this.hud.showFinalVictory?.(this.score, this.totalLevels);
			return;
		}

		this.level += 1;
		this.ball.reset(this.level);
		this.tower.buildLevel(getLevelConfig(this.level));
		this.start();
	}

	_cleanupAllSlabs() {
		for (const slab of this.tower.slabs) {
			for (const d of slab.debris) {
				this.tower.scene.remove(d.mesh);
				d.mesh.geometry?.dispose();
				d.mesh.material?.dispose();
			}
			slab.debris = [];
		}
	}

	async _levelComplete() {
		if (this._sequenceRunning) return;
		this.state = GameState.WIN;
		this._levelStats.ms = performance.now() - this._levelStartedAt;
		// Brief BGM duck so the celebratory 'win' arpeggio sits forward in the mix.
		this.audioManager?.duckBGM?.(0.55, 250, 1500);
		this.audioManager?.play('win');
		this._sequenceRunning = true;
		this._sequenceCancelled = false;

		try {
			await this._runLevelCompleteSequence();
		} catch (error) {
			console.error('Error in level complete sequence:', error);
			if (!this._sequenceCancelled) {
				this.hud.showLevelComplete(this.score, this.level, this.totalLevels, 1, this._levelStats);
			}
		} finally {
			this._sequenceRunning = false;
		}
	}

	_isCancelled() {
		return this._sequenceCancelled;
	}

	async _runLevelCompleteSequence() {
		const scene = this.tower.scene;
		if (!scene) {
			this.hud.showLevelComplete(this.score, this.level, this.totalLevels, 1, this._levelStats);
			return;
		}

		const towerBottomY = -(this.tower.totalSlabs * 0.62) - 0.4;
		const platformY = towerBottomY - 0.8;
		const wheelY = platformY - 1.8;
		const cupY = wheelY - 2.4;

		this._spawnConfettiBurst(scene, this.ball.mesh.position.y + 0.2);
		if (this._isCancelled()) return;

		const platform = this._createCheckeredPlatform();
		platform.position.set(0, platformY, 0);
		scene.add(platform);
		this._sequenceMeshes.push(platform);

		const wheel = this._createMultiplierWheel();
		wheel.group.position.set(0, wheelY, 0);
		scene.add(wheel.group);
		this._sequenceMeshes.push(wheel.group);

		// Fixed pointer mesh — fixes BUG-3 (player can now SEE which wedge wins).
		const pointer = this._createWheelPointer();
		pointer.position.set(0, wheelY + 0.36, wheel.radius + 0.1);
		scene.add(pointer);
		this._sequenceMeshes.push(pointer);

		await this._spinWheel(wheel.group, 2000);
		if (this._isCancelled()) return;

		await this._animateBallToY(wheelY + 0.75, 900);
		if (this._isCancelled()) return;

		// Wedge under the pointer at world +Z.
		const wedgeIndex = this._getWedgeUnderPointer(wheel.group.rotation.y, wheel.multipliers.length);
		const multiplier = wheel.multipliers[wedgeIndex] || 1;
		this.score += multiplier;
		this.hud.updateProgress(this.tower.slabsBroken, this.tower.totalSlabs, this.score);

		const cup = this._createCup();
		cup.position.set(0, cupY, 0);
		scene.add(cup);
		this._sequenceMeshes.push(cup);

		await this._animateBallToY(cupY + 0.45, 900);
		if (this._isCancelled()) return;
		this._spawnConfettiBurst(scene, cupY + 0.8);

		this.hud.showLevelComplete(this.score, this.level, this.totalLevels, multiplier, this._levelStats);
	}

	_spawnConfettiBurst(scene, centerY) {
		const confettiColors = [0xfecf6a, 0x7fd4c6, 0x87c8f8, 0xffb7a1, 0xd2b6ff, 0xffffff, 0xff8db3];
		const confetti = [];
		for (let i = 0; i < 60; i++) {
			const mesh = new THREE.Mesh(
				new THREE.BoxGeometry(0.09, 0.03, 0.05),
				new THREE.MeshBasicMaterial({ color: confettiColors[i % confettiColors.length], transparent: true, opacity: 1 })
			);
			mesh.position.set((Math.random() - 0.5) * 3.2, centerY + Math.random() * 0.6, (Math.random() - 0.5) * 3.2);
			scene.add(mesh);
			this._sequenceMeshes.push(mesh);
			confetti.push({
				mesh,
				vx: (Math.random() - 0.5) * 2.2,
				vy: 3 + Math.random() * 3,
				vz: (Math.random() - 0.5) * 2.2,
				life: 1.6 + Math.random() * 0.6
			});
		}

		let prev = performance.now();
		let rafId = 0;
		const tick = (now) => {
			if (this._sequenceCancelled) {
				this._sequenceRafs.delete(rafId);
				return;
			}
			const dt = Math.min((now - prev) / 1000, 0.033);
			prev = now;
			let anyAlive = false;
			for (const c of confetti) {
				if (c.life <= 0 || !c.mesh.parent) continue;
				anyAlive = true;
				c.life -= dt;
				c.vy -= 8 * dt;
				c.mesh.position.x += c.vx * dt;
				c.mesh.position.y += c.vy * dt;
				c.mesh.position.z += c.vz * dt;
				c.mesh.rotation.x += dt * 7;
				c.mesh.rotation.z += dt * 5;
				c.mesh.material.opacity = Math.max(0, c.life / 1.2);
			}
			if (anyAlive) {
				rafId = requestAnimationFrame(tick);
				this._sequenceRafs.add(rafId);
			} else {
				this._sequenceRafs.delete(rafId);
			}
		};
		rafId = requestAnimationFrame(tick);
		this._sequenceRafs.add(rafId);
	}

	_createCheckeredPlatform() {
		const size = 128;
		const canvas = document.createElement('canvas');
		canvas.width = size;
		canvas.height = size;
		const ctx = canvas.getContext('2d');
		const cell = size / 8;
		for (let y = 0; y < 8; y++) {
			for (let x = 0; x < 8; x++) {
				ctx.fillStyle = (x + y) % 2 === 0 ? '#FFEEF3' : '#FFC4D6';
				ctx.fillRect(x * cell, y * cell, cell, cell);
			}
		}
		const tex = new THREE.CanvasTexture(canvas);
		tex.wrapS = THREE.RepeatWrapping;
		tex.wrapT = THREE.RepeatWrapping;
		tex.repeat.set(2, 2);

		const platform = new THREE.Mesh(
			new THREE.CylinderGeometry(2.35, 2.35, 0.24, 36),
			new THREE.MeshStandardMaterial({ map: tex, color: 0xffffff, roughness: 0.5, metalness: 0.05 })
		);

		const marker = this._makeTextSprite('!', '#C44569', 128, 'bold 84px "Bricolage Grotesque", Arial');
		marker.position.set(0, 0.22, 0);
		platform.add(marker);
		return platform;
	}

	_createMultiplierWheel() {
		const group = new THREE.Group();
		const radius = 2.0;
		const wedges = 8;
		const multipliers = [1, 2, 3, 4, 5, 6, 4, 3];
		const colors = [0xFFB3BA, 0xBAE1FF, 0xFFDFBA, 0xBAFFC9, 0xE7BAFF, 0xFFBAF3, 0xFFFFBA, 0xFFC4D6];

		const base = new THREE.Mesh(
			new THREE.CylinderGeometry(radius + 0.16, radius + 0.16, 0.22, 40),
			new THREE.MeshStandardMaterial({ color: 0xC44569, roughness: 0.45, metalness: 0.18 })
		);
		group.add(base);

		for (let i = 0; i < wedges; i++) {
			const start = (i / wedges) * Math.PI * 2;
			const arc = (Math.PI * 2) / wedges;
			const wedge = new THREE.Mesh(
				new THREE.CircleGeometry(radius, 28, start, arc),
				new THREE.MeshStandardMaterial({
					color: colors[i],
					side: THREE.DoubleSide,
					roughness: 0.35,
					metalness: 0.05,
					emissive: new THREE.Color(colors[i]).multiplyScalar(0.15)
				})
			);
			wedge.rotation.x = -Math.PI / 2;
			wedge.position.y = 0.12;
			group.add(wedge);

			const labelAngle = start + arc * 0.5;
			const label = this._makeTextSprite(`x${multipliers[i]}`, '#3A2C3A', 160, 'bold 56px "Bricolage Grotesque", Arial');
			label.position.set(Math.cos(labelAngle) * 1.2, 0.24, Math.sin(labelAngle) * 1.2);
			group.add(label);
		}

		return { group, multipliers, radius };
	}

	_createWheelPointer() {
		const group = new THREE.Group();
		const tri = new THREE.Mesh(
			new THREE.ConeGeometry(0.22, 0.5, 4),
			new THREE.MeshStandardMaterial({ color: 0xFF6B9D, emissive: 0xFF6B9D, emissiveIntensity: 0.45, roughness: 0.4 })
		);
		tri.rotation.x = Math.PI; // tip points down to the wheel
		tri.rotation.y = Math.PI / 4;
		group.add(tri);
		return group;
	}

	_makeTextSprite(text, color = '#ffffff', size = 256, font = 'bold 64px Arial') {
		const canvas = document.createElement('canvas');
		canvas.width = size;
		canvas.height = size;
		const ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, size, size);
		ctx.font = font;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'alphabetic';
		ctx.fillStyle = color;

		const lines = String(text).split('\n');
		const lineHeight = Math.round(size * 0.24);
		const blockHeight = lineHeight * lines.length;
		let y = size * 0.5 - blockHeight * 0.5 + lineHeight * 0.78;
		for (const line of lines) {
			ctx.fillText(line, size / 2, y);
			y += lineHeight;
		}

		const texture = new THREE.CanvasTexture(canvas);
		const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
		const sprite = new THREE.Sprite(material);
		sprite.scale.set(0.8, 0.8, 0.8);
		return sprite;
	}

	_spinWheel(wheelGroup, durationMs = 2000) {
		return new Promise((resolve) => {
			const start = performance.now();
			let prev = start;
			let animId;
			let isDone = false;
			const step = (now) => {
				if (this._sequenceCancelled) {
					isDone = true;
					this._sequenceRafs.delete(animId);
					resolve();
					return;
				}
				if (isDone) return;
				const t = Math.min((now - start) / durationMs, 1);
				const dt = Math.min((now - prev) / 1000, 0.033);
				prev = now;
				const speed = THREE.MathUtils.lerp(12, 0.6, t);
				wheelGroup.rotation.y += speed * dt;
				if (t < 1) {
					animId = requestAnimationFrame(step);
					this._sequenceRafs.add(animId);
				} else {
					isDone = true;
					this._sequenceRafs.delete(animId);
					resolve();
				}
			};
			animId = requestAnimationFrame(step);
			this._sequenceRafs.add(animId);

			setTimeout(() => {
				if (isDone) return;
				isDone = true;
				cancelAnimationFrame(animId);
				this._sequenceRafs.delete(animId);
				resolve();
			}, durationMs + 1500);
		});
	}

	// Wedges are built in XY-plane at start angle i*arc covering [start, start+arc],
	// then `wedge.rotation.x = -π/2` lays the disc flat. That rotation flips the
	// angular direction around the Y axis: a vertex originally at XY angle θ ends
	// up at world angle -θ around Y. So the world-space center of wedge i is
	// `-(i+0.5)*arc + group.rotation.y`. The pointer mesh sits at world +Z
	// (angle = π/2). We pick the wedge whose centre is closest to π/2.
	_getWedgeUnderPointer(rotationY, wedgeCount) {
		const TAU = Math.PI * 2;
		const arc = TAU / wedgeCount;
		const target = Math.PI / 2;
		let bestIdx = 0;
		let bestDelta = Infinity;
		for (let i = 0; i < wedgeCount; i++) {
			// Wedge local angle is -(i+0.5)*arc due to wedge.rotation.x = -π/2 flip.
			// World angle = local - rotation.y.
			const c = ((-((i + 0.5) * arc) - rotationY) % TAU + TAU) % TAU;
			let d = Math.abs(c - target);
			if (d > Math.PI) d = TAU - d;
			if (d < bestDelta) { bestDelta = d; bestIdx = i; }
		}
		return bestIdx;
	}

	_animateBallToY(targetY, durationMs = 900) {
		return new Promise((resolve) => {
			const startY = this.ball.body.position.y;
			const start = performance.now();
			let animId;
			let isDone = false;
			const step = (now) => {
				if (this._sequenceCancelled) {
					isDone = true;
					this._sequenceRafs.delete(animId);
					resolve();
					return;
				}
				if (isDone) return;
				const t = Math.min((now - start) / durationMs, 1);
				const eased = 1 - Math.pow(1 - t, 3);
				const y = THREE.MathUtils.lerp(startY, targetY, eased);
				this.ball.body.position.set(0, y, 0);
				this.ball.body.velocity.set(0, 0, 0);
				this.ball.mesh.position.set(0, y, 0);
				if (t < 1) {
					animId = requestAnimationFrame(step);
					this._sequenceRafs.add(animId);
				} else {
					isDone = true;
					this._sequenceRafs.delete(animId);
					resolve();
				}
			};
			animId = requestAnimationFrame(step);
			this._sequenceRafs.add(animId);

			setTimeout(() => {
				if (isDone) return;
				isDone = true;
				cancelAnimationFrame(animId);
				this._sequenceRafs.delete(animId);
				this.ball.body.position.set(0, targetY, 0);
				this.ball.body.velocity.set(0, 0, 0);
				this.ball.mesh.position.set(0, targetY, 0);
				resolve();
			}, durationMs + 1500);
		});
	}

	_createCup() {
		const group = new THREE.Group();
		const cup = new THREE.Mesh(
			new THREE.CylinderGeometry(0.55, 0.92, 2.2, 24, 1, true),
			new THREE.MeshStandardMaterial({ color: 0xFF6B9D, side: THREE.DoubleSide, roughness: 0.4, metalness: 0.18, emissive: 0xC44569, emissiveIntensity: 0.18 })
		);
		group.add(cup);

		const label = this._makeTextSprite(`${this.level}\n/${this.totalLevels}`, '#ffffff', 256, 'bold 58px "Bricolage Grotesque", Arial');
		label.position.set(0, 0.2, 0.95);
		group.add(label);
		return group;
	}

	_cancelCompletionSequence() {
		this._sequenceCancelled = true;
		for (const rafId of this._sequenceRafs) {
			cancelAnimationFrame(rafId);
		}
		this._sequenceRafs.clear();
		this._clearCompletionSequence();
	}

	_clearCompletionSequence() {
		const scene = this.tower.scene;
		const disposeMaterial = (mat) => {
			if (!mat) return;
			// Sprite/text-sprite textures live on material.map — dispose to plug a leak.
			if (mat.map?.dispose) mat.map.dispose();
			if (mat.dispose) mat.dispose();
		};
		for (const obj of this._sequenceMeshes) {
			if (obj?.parent) {
				obj.parent.remove(obj);
			}
			obj?.traverse?.((child) => {
				if (child.geometry?.dispose) child.geometry.dispose();
				if (Array.isArray(child.material)) {
					child.material.forEach(disposeMaterial);
				} else {
					disposeMaterial(child.material);
				}
			});
		}
		this._sequenceMeshes = [];
		if (scene) {
			this.ball.mesh.position.x = 0;
			this.ball.mesh.position.z = 0;
		}
	}
}

export { GameManager, GameState, getLevelConfig };
export default GameManager;

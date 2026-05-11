import * as THREE from 'three';
import * as CANNON from 'cannon-es';

const BALL_RADIUS = 0.40;
const BALL_START_Y = 0.55;
// Research-cap bounce energy so the ball stays in low rhythmic arcs (ref shows
// short hops between layers, not big punts).
const BOUNCE_MAX_HEIGHT = 1.4;
const BOUNCE_MIN_SPEED = 5.0;
const BOUNCE_MAX_SPEED = 8.5;

const HIT_DEDUPE_MS = 180;          // unified dedupe window for any hit type
const HARD_LOCK_MS = 220;           // hard contact disables soft-break briefly
const STUCK_BOUNCE_GUARD_MS = 200;  // resolver won't fire if a bounce just queued

class Ball {
	constructor(scene, physics, level = 1) {
		this.scene = scene;
		this._scene = scene;
		this.physics = physics;
		void level;

		this._visualZOffset = 0;
		this._baseScale = 1.0;

		// Research-recommended cobalt ball + glossier clearcoat (was sky-blue).
		const ballGeo = new THREE.SphereGeometry(BALL_RADIUS, 32, 24);
		const ballMat = new THREE.MeshPhysicalMaterial({
			color: 0x1E5BD8,
			roughness: 0.42,
			metalness: 0.0,
			emissive: 0x0B2080,
			emissiveIntensity: 0.06,
			envMapIntensity: 0.22,
			clearcoat: 0.85,
			clearcoatRoughness: 0.08
		});
		this.mesh = new THREE.Mesh(ballGeo, ballMat);
		this.mesh.castShadow = true;
		this.mesh.receiveShadow = false;
		this.mesh.position.set(0, BALL_START_Y, 0);
		this.mesh.scale.setScalar(this._baseScale);
		this._visualY = BALL_START_Y;
		this._smoothedVelY = 0;
		this._baseSpriteColor = new THREE.Color(0x1E5BD8);
		this._landingTintColor = this._baseSpriteColor.clone();
		this._landingTintTimer = 0;
		scene.add(this.mesh);

		// Soft radial-gradient contact shadow (replaces flat black coin).
		const shadowTex = this._createShadowTexture();
		const shadowGeo = new THREE.PlaneGeometry(BALL_RADIUS * 2.4, BALL_RADIUS * 2.4);
		const shadowMat = new THREE.MeshBasicMaterial({
			map: shadowTex,
			color: 0x101418,
			transparent: true,
			opacity: 0.32,
			depthWrite: false,
			depthTest: true
		});
		this._shadow = new THREE.Mesh(shadowGeo, shadowMat);
		this._shadow.rotation.x = -Math.PI / 2;
		this._shadow.renderOrder = 998;
		scene.add(this._shadow);

		this.body = this.physics.createBallBody(BALL_RADIUS, { x: 0, y: BALL_START_Y, z: 0 });

		this.isAlive = true;
		this._dieAnimId = null;
		this._lastVelY = 0;
		this._preImpactVelY = 0;       // captured at the start of a contact event
		this._lastContactY = BALL_START_Y;
		this._fallHeight = 0;

		this._state = 'idle';
		this._stateTimer = 0;
		this._squashTimer = 0;
		this._fallSpeed = 0;
		this._BALL_RADIUS = BALL_RADIUS;
		this._lastTrail = 0;
		this._hardContactLockUntil = 0;
		this._lastBounceAt = 0;
		this._lastLandingType = '';
		this._lastLandingHintAt = 0;
		this._lastContactResolveAt = 0;
		this._idlePhase = Math.random() * Math.PI * 2;
		this._isBreakInputActive = () => false;

		// Dedupe by slab identity *and* body id — see QA BUG-1.
		this._recentHits = new Map();        // key: id or slab-uid → expiresAt(ms)
		this._stuckLow = false;              // hysteresis flag for resolver

		this._onCollide = (event) => {
			const now = performance.now();
			const other = event.body;
			const ud = other.userData;
			if (!ud || !ud.type) return;
			if (ud.type !== 'soft_slab' && ud.type !== 'hard_slab') return;

			// Authoritative pre-impact speed from cannon-es contact equation.
			// Returns negative (in m/s) when bodies are approaching along the contact
			// normal — exactly what we want for a downward impact on a slab.
			let impactNormalVel = 0;
			try {
				impactNormalVel = event.contact?.getImpactVelocityAlongNormal?.() ?? 0;
			} catch {
				impactNormalVel = this._lastVelY || 0;
			}
			// Fall back to last frame's velocity if contact data missing.
			this._preImpactVelY = impactNormalVel < 0 ? impactNormalVel : (this._lastVelY || 0);

			this._emitLandingHint(ud.type === 'soft_slab' ? 'soft' : 'hard');

			// Dedupe: same physics body or same logical slab within window.
			const slabKey = ud.slab ? `slab:${ud.slab.uid}` : null;
			if (this._isRecent(`body:${other.id}`) || (slabKey && this._isRecent(slabKey))) {
				return;
			}

			this._lastContactY = this.body.position.y;
			this._fallHeight = 0;

			if (ud.type === 'soft_slab') {
				const isFallingOrNeutral = this.body.velocity.y <= 1;
				// Per-event callback: this collision is soft-only. Concurrent hard
				// contact (mixed edge case) is handled by the resolver via
				// _getActiveSlabContacts(). Trust user input here.
				const userIsBreaking = !!this._isBreakInputActive?.();
				if (isFallingOrNeutral && userIsBreaking) {
					this._markRecent(`body:${other.id}`, HIT_DEDUPE_MS);
					if (slabKey) this._markRecent(slabKey, HIT_DEDUPE_MS);
					this._pendingBounce = false;
					this._pendingBounceSpeed = 0;
					this._squashTimer = 0.08;
					import('./GameManager.js').then((m) => {
						m.GameManager.instance?.onSoftHit(ud);
					});
				} else {
					this._markRecent(`body:${other.id}`, HIT_DEDUPE_MS);
					this._queueBounce(this._computeBounceSpeed(this.body.position.y, this._preImpactVelY, false));
					this._squashTimer = 0.10;
				}
			} else if (ud.type === 'hard_slab') {
				this._markRecent(`body:${other.id}`, HIT_DEDUPE_MS);
				if (slabKey) this._markRecent(slabKey, HIT_DEDUPE_MS);
				this._hardContactLockUntil = now + HARD_LOCK_MS;
				this._queueBounce(this._computeBounceSpeed(this.body.position.y, this._preImpactVelY, true));
				this._squashTimer = 0.12;
				import('./GameManager.js').then((m) => {
					m.GameManager.instance?.onHardHit(ud);
				});
			}
		};

		this.body.addEventListener('collide', this._onCollide);
		this._pendingBounce = false;
		this._pendingBounceSpeed = 0;

		if (this._postStepHandler) {
			this.physics.world.removeEventListener('postStep', this._postStepHandler);
		}

		this._postStepHandler = () => {
			this.body.position.x = 0;
			this.body.position.z = 0;
			this.body.velocity.x = 0;
			this.body.velocity.z = 0;
			this.body.angularVelocity.set(0, 0, 0);

			if (this._pendingBounce) {
				// Apply the queued bounce: overwrite (post-impact velocity is
				// negative or near-zero, so a Math.max would be a no-op).
				this.body.velocity.y = this._pendingBounceSpeed;
				this.body.position.y += 0.022;
				this._pendingBounce = false;
				this._lastBounceAt = performance.now();
			}

			// Hard ceiling clamp — predictable, matches baseline. Soft spring
			// felt mushy and let the ball overshoot during back-to-back bounces.
			if (this.body.position.y > 4.0) {
				this.body.position.y = 4.0;
				if (this.body.velocity.y > 0) this.body.velocity.y = 0;
			}
		};
		this.physics.world.addEventListener('postStep', this._postStepHandler);
	}

	_createBallSpriteTexture() {
		const size = 256;
		const canvas = document.createElement('canvas');
		canvas.width = size;
		canvas.height = size;
		const ctx = canvas.getContext('2d');
		const cx = size * 0.5;
		const cy = size * 0.5;
		const r = size * 0.45;

		ctx.clearRect(0, 0, size, size);

		// Palette-matched gradient: white → primary-light → accent
		const base = ctx.createRadialGradient(cx - r * 0.28, cy - r * 0.25, r * 0.12, cx, cy, r);
		base.addColorStop(0.0, '#FFFFFF');
		base.addColorStop(0.55, '#FF8DB3');
		base.addColorStop(1.0, '#C44569');
		ctx.fillStyle = base;
		ctx.beginPath();
		ctx.arc(cx, cy, r, 0, Math.PI * 2);
		ctx.fill();

		// Outer rim glow
		ctx.strokeStyle = 'rgba(255,224,236,0.28)';
		ctx.lineWidth = r * 0.10;
		ctx.beginPath();
		ctx.arc(cx, cy, r * 0.92, Math.PI * 0.10, Math.PI * 0.95);
		ctx.stroke();

		// Soft cheek highlight
		ctx.fillStyle = 'rgba(255,255,255,0.55)';
		ctx.beginPath();
		ctx.ellipse(cx - r * 0.28, cy - r * 0.22, r * 0.20, r * 0.17, -0.35, 0, Math.PI * 2);
		ctx.fill();

		// Specular dot
		ctx.fillStyle = 'rgba(255,255,255,0.95)';
		ctx.beginPath();
		ctx.ellipse(cx - r * 0.03, cy - r * 0.35, r * 0.16, r * 0.11, 0, 0, Math.PI * 2);
		ctx.fill();

		const texture = new THREE.CanvasTexture(canvas);
		texture.needsUpdate = true;
		texture.minFilter = THREE.LinearFilter;
		texture.magFilter = THREE.LinearFilter;
		return texture;
	}

	_createShadowTexture() {
		const size = 128;
		const canvas = document.createElement('canvas');
		canvas.width = size;
		canvas.height = size;
		const ctx = canvas.getContext('2d');
		const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
		grad.addColorStop(0.0, 'rgba(0,0,0,0.85)');
		grad.addColorStop(0.55, 'rgba(0,0,0,0.35)');
		grad.addColorStop(1.0, 'rgba(0,0,0,0)');
		ctx.fillStyle = grad;
		ctx.fillRect(0, 0, size, size);
		const tex = new THREE.CanvasTexture(canvas);
		tex.minFilter = THREE.LinearFilter;
		tex.magFilter = THREE.LinearFilter;
		return tex;
	}

	_applyScale(scaleXZ, scaleY) {
		// 3D mesh — scale all 3 axes (X & Z together for the squash/stretch).
		this.mesh.scale.set(this._baseScale * scaleXZ, this._baseScale * scaleY, this._baseScale * scaleXZ);
	}

	_emitLandingHint(type) {
		const now = performance.now();
		if (type === this._lastLandingType && now - this._lastLandingHintAt < 140) {
			return;
		}

		this._lastLandingType = type;
		this._lastLandingHintAt = now;

		import('./GameManager.js').then((m) => {
			m.GameManager.instance?.notifyLandingType?.(type);
		});

		this._landingTintColor.setHex(type === 'soft' ? 0x9fffd0 : 0xffd29a);
		this._landingTintTimer = 0.22;
	}

	// Returns a playable bounce speed for ANY rebound (soft-no-break or hard).
	// Gentle floor (~0.55 of MIN) so slow drops don't snap back violently;
	// vCeil prevents the ball from clipping the camera headroom.
	_computeBounceSpeed(contactY, preImpactVelY, isHard) {
		const gravityY = Math.abs(this.physics?.world?.gravity?.y ?? 22);
		const headRoom = Math.max(0.6, 3.4 - contactY);
		const targetHeight = Math.min(BOUNCE_MAX_HEIGHT, headRoom);
		const vCeil = Math.sqrt(2 * gravityY * targetHeight);

		const vIn = Math.max(0, -Math.min(0, preImpactVelY || 0));
		const e = isHard
			? THREE.MathUtils.lerp(0.55, 0.38, THREE.MathUtils.clamp(vIn / 14, 0, 1))
			: THREE.MathUtils.lerp(0.50, 0.40, THREE.MathUtils.clamp(vIn / 14, 0, 1));
		const vOutPhys = e * vIn;
		// Lower floor (was 0.78 → 0.55) so the ball doesn't pinball off slow drops.
		const vOutFloor = BOUNCE_MIN_SPEED * 0.55;
		const vOut = Math.min(vCeil, Math.max(vOutPhys, vOutFloor));
		return THREE.MathUtils.clamp(vOut, BOUNCE_MIN_SPEED * 0.50, BOUNCE_MAX_SPEED);
	}

	_queueBounce(speed) {
		const now = performance.now();
		if (now - this._lastBounceAt < 90) {
			this._pendingBounce = true;
			this._pendingBounceSpeed = Math.max(this._pendingBounceSpeed * 0.92, speed * 0.9);
			return;
		}

		this._pendingBounce = true;
		this._pendingBounceSpeed = speed;
		this._lastBounceAt = now;
	}

	_isRecent(key) {
		const now = performance.now();
		const exp = this._recentHits.get(key);
		if (!exp) return false;
		if (exp <= now) {
			this._recentHits.delete(key);
			return false;
		}
		return true;
	}

	_markRecent(key, ms = HIT_DEDUPE_MS) {
		this._recentHits.set(key, performance.now() + ms);
	}

	_getActiveSlabContacts() {
		const equations = this.physics?.world?.narrowphase?.contactEquations;
		const info = {
			hasSoft: false,
			hasHard: false,
			softUserData: null,
			hardUserData: null
		};

		if (!equations || equations.length === 0) return info;

		for (const eq of equations) {
			const bi = eq.bi;
			const bj = eq.bj;
			if (bi !== this.body && bj !== this.body) continue;

			const other = bi === this.body ? bj : bi;
			if (other?.userData?.type === 'soft_slab') {
				info.hasSoft = true;
				if (!info.softUserData) info.softUserData = other.userData;
			}
			if (other?.userData?.type === 'hard_slab') {
				info.hasHard = true;
				if (!info.hardUserData) info.hardUserData = other.userData;
			}
		}

		return info;
	}

	setBreakInputSource(isActiveFn) {
		this._isBreakInputActive = typeof isActiveFn === 'function' ? isActiveFn : () => false;
	}

	_canBreakSoftSlab(hasHardContact = false) {
		const userWantsToBreak = !!this._isBreakInputActive?.();
		if (userWantsToBreak && !hasHardContact) return true;
		if (performance.now() < this._hardContactLockUntil) return false;
		return false;
	}

	_resolveStuckContact() {
		const now = performance.now();
		if (now - this._lastContactResolveAt < 130) return;
		if (now - this._lastBounceAt < STUCK_BOUNCE_GUARD_MS) return;

		const contact = this._getActiveSlabContacts();
		if (!contact.hasSoft && !contact.hasHard) {
			this._stuckLow = false;
			return;
		}

		// Hysteresis: enter "stuck" only at very low speed; exit at higher.
		const absV = Math.abs(this.body.velocity.y);
		if (!this._stuckLow && absV < 0.14) this._stuckLow = true;
		if (this._stuckLow && absV > 0.32) this._stuckLow = false;
		if (!this._stuckLow) return;

		if (contact.hasHard) {
			this._hardContactLockUntil = Math.max(this._hardContactLockUntil, now + HARD_LOCK_MS);
		}

		// Soft override only if there's no concurrent hard contact.
		const canBreakSoft = contact.hasSoft && this._canBreakSoftSlab(contact.hasHard);
		if (canBreakSoft) {
			this._pendingBounce = false;
			this._pendingBounceSpeed = 0;
			this._squashTimer = 0.08;
			this._lastContactResolveAt = now;
			import('./GameManager.js').then((m) => {
				m.GameManager.instance?.onSoftHit(contact.softUserData);
			});
			return;
		}

		this._queueBounce(this._computeBounceSpeed(this.body.position.y, -2.5, true));
		// Don't keep extending the squash timer here — that caused the ball to
		// stay visibly squashed when stuck against the danger column. Initial
		// impact handlers in _onCollide already set squash for one-shot bounces.
		this._lastContactResolveAt = now;
	}

	update(dt) {
		// Lock ball to pole axis — never drifts sideways
		this.body.position.x = 0;
		this.body.position.z = 0;
		this.body.velocity.x = 0;
		this.body.velocity.z = 0;
		this.body.angularVelocity.set(0, 0, 0);

		// Sync mesh to physics body (no Z-offset now that ball is a real 3D mesh).
		this.mesh.position.x = 0;
		this.mesh.position.z = 0;

		this._resolveStuckContact();

		const smoothT = THREE.MathUtils.clamp(dt * 14, 0, 1);
		this._visualY = THREE.MathUtils.lerp(this._visualY, this.body.position.y, smoothT);
		this.mesh.position.y = this._visualY;
		this._fallHeight = Math.max(0, this._lastContactY - this.body.position.y);

		this._shadow.position.set(
			this.body.position.x,
			this.body.position.y - BALL_RADIUS - 0.04,
			this.body.position.z
		);
		const fallNorm = THREE.MathUtils.clamp((this._fallHeight || 0) / 4.0, 0, 1);
		const shadowScale = THREE.MathUtils.lerp(1.0, 0.55, fallNorm);
		const shadowOpacity = THREE.MathUtils.lerp(0.42, 0.10, fallNorm);
		this._shadow.scale.setScalar(shadowScale);
		this._shadow.material.opacity = shadowOpacity;

		this._updateAnimation(dt);

		if (this._landingTintTimer > 0) {
			this._landingTintTimer -= dt;
			const t = Math.max(0, this._landingTintTimer / 0.22);
			this.mesh.material.color.copy(this._baseSpriteColor).lerp(this._landingTintColor, t * 0.6);
		} else {
			this.mesh.material.color.copy(this._baseSpriteColor);
		}

		this._lastVelY = this.body.velocity.y;
		this._smoothedVelY = THREE.MathUtils.lerp(this._smoothedVelY, this.body.velocity.y, 0.22);
	}

	_updateAnimation(dt) {
		this._stateTimer += dt;
		// Subtle continuous Y-rotation — the only "alive" animation. No idle pulse,
		// no velocity-stretch, no falling-streak: the reference ball stays a clean
		// sphere at all times.
		const velY = this._smoothedVelY;
		this.mesh.rotation.y += dt * (0.95 + Math.min(8, Math.abs(velY)) * 0.08);

		// One-shot squash on impact only. Brief and gentle — 0.18 max wide, 0.15 max short.
		if (this._squashTimer > 0) {
			this._squashTimer -= dt;
			const t = 1.0 - (this._squashTimer / 0.12);
			const ease = Math.sin(Math.max(0, Math.min(1, t)) * Math.PI);
			const scaleXZ = 1 + 0.18 * ease;
			const scaleY = 1 - 0.15 * ease;
			this._applyScale(scaleXZ, scaleY);
			this.mesh.position.y = this._visualY;
			this._state = 'squash';
			return;
		}

		// Default: perfect sphere, no bob. Matches reference frame-by-frame.
		this._applyScale(1, 1);
		this.mesh.position.y = this._visualY;
		this._state = 'idle';
	}

	_spawnTrailParticle() {
		const now = performance.now();
		// Trail rate slowed (30 → 90 ms) for a calmer look and 3× fewer allocations.
		if (now - (this._lastTrail || 0) < 90) return;
		this._lastTrail = now;

		const size = 0.05 + Math.random() * 0.06;
		const geo = new THREE.SphereGeometry(size, 6, 6);
		const colors = [0xffffff, 0xb6d0ff, 0x6f9cff, 0x3a78ff];
		const color = colors[Math.floor(Math.random() * colors.length)];

		// Normal blending (was Additive) — additive blew the trail out at low light
		// levels, fighting the pastel cohesion the rest of the scene now follows.
		const mat = new THREE.MeshBasicMaterial({
			color,
			transparent: true,
			opacity: 0.55,
			depthWrite: false,
			blending: THREE.NormalBlending
		});
		const spark = new THREE.Mesh(geo, mat);

		const offsetY = this._BALL_RADIUS + 0.1 + Math.random() * 0.3;
		spark.position.set(
			this.mesh.position.x + (Math.random() - 0.5) * 0.15,
			this.mesh.position.y + offsetY,
			this.mesh.position.z + (Math.random() - 0.5) * 0.15
		);
		this._scene.add(spark);

		const startTime = now;
		const duration = 140 + Math.random() * 80;
		const startY = spark.position.y;

		const animate = () => {
			const elapsed = performance.now() - startTime;
			if (elapsed >= duration) {
				this._scene.remove(spark);
				geo.dispose();
				mat.dispose();
				return;
			}
			const t = elapsed / duration;
			spark.position.y = startY + t * 0.4;
			spark.material.opacity = 0.55 * (1 - t);
			spark.scale.setScalar(1 - t * 0.5);
			requestAnimationFrame(animate);
		};
		requestAnimationFrame(animate);
	}

	die() {
		if (!this.isAlive) return;

		this.isAlive = false;
		this.body.velocity.set(0, 0, 0);
		this.body.angularVelocity.set(0, 0, 0);
		this.body.type = CANNON.Body.STATIC;
		this.body.updateMassProperties();

		const duration = 250;
		const start = performance.now();

		if (this._dieAnimId) {
			cancelAnimationFrame(this._dieAnimId);
		}

		const step = (now) => {
			const t = Math.min(1, (now - start) / duration);
			const k = Math.max(0, 1 - t);
			this._applyScale(k, k);

			if (t < 1) {
				this._dieAnimId = requestAnimationFrame(step);
			} else {
				this._dieAnimId = null;
			}
		};

		this._dieAnimId = requestAnimationFrame(step);
	}

	reset(levelNumber) {
		void levelNumber;

		this.body.position.set(0, BALL_START_Y, 0);
		this.body.velocity.set(0, 0, 0);
		this.body.angularVelocity.set(0, 0, 0);
		this.body.type = CANNON.Body.DYNAMIC;
		this.body.updateMassProperties();
		this.body.wakeUp();

		if (this._dieAnimId) {
			cancelAnimationFrame(this._dieAnimId);
			this._dieAnimId = null;
		}

		this.mesh.position.set(0, BALL_START_Y, 0);
		this.mesh.rotation.set(0, 0, 0);
		this._applyScale(1, 1);
		this._shadow.position.set(0, BALL_START_Y - BALL_RADIUS - 0.04, 0);
		this._shadow.scale.setScalar(1);
		this._shadow.material.opacity = 0.32;

		this.isAlive = true;
		this._state = 'idle';
		this._stateTimer = 0;
		this._squashTimer = 0;
		this._fallSpeed = 0;
		this._fallHeight = 0;
		this._lastContactY = BALL_START_Y;
		this._visualY = BALL_START_Y;
		this._smoothedVelY = 0;
		this._lastVelY = 0;
		this._preImpactVelY = 0;
		this._pendingBounce = false;
		this._pendingBounceSpeed = 0;
		this._hardContactLockUntil = 0;
		this._lastBounceAt = 0;
		this._lastLandingType = '';
		this._lastLandingHintAt = 0;
		this._lastContactResolveAt = 0;
		this._idlePhase = Math.random() * Math.PI * 2;
		this._landingTintTimer = 0;
		this._stuckLow = false;
		this._recentHits.clear();
		this.mesh.material.color.copy(this._baseSpriteColor);
	}

	dispose(scene, world) {
		if (this._dieAnimId) {
			cancelAnimationFrame(this._dieAnimId);
			this._dieAnimId = null;
		}

		this.body.removeEventListener('collide', this._onCollide);
		scene.remove(this.mesh);
		scene.remove(this._shadow);

		if (world && this.body) world.removeBody(this.body);
		if (this._postStepHandler) {
			world?.removeEventListener?.('postStep', this._postStepHandler);
		}

		if (this.mesh.geometry?.dispose) this.mesh.geometry.dispose();
		if (this.mesh.material.map) this.mesh.material.map.dispose();
		this.mesh.material.dispose();
		this._shadow.geometry.dispose();
		if (this._shadow.material.map) this._shadow.material.map.dispose();
		this._shadow.material.dispose();
	}
}

export { BALL_RADIUS };
export { Ball };
export default Ball;

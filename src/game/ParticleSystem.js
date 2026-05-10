import * as THREE from 'three';

const MAX_PARTICLES = 1500;

function makeSoftParticleTexture() {
	const size = 64;
	const canvas = document.createElement('canvas');
	canvas.width = size;
	canvas.height = size;
	const ctx = canvas.getContext('2d');
	const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
	grad.addColorStop(0.0, 'rgba(255,255,255,1)');
	grad.addColorStop(0.45, 'rgba(255,255,255,0.5)');
	grad.addColorStop(1.0, 'rgba(255,255,255,0)');
	ctx.fillStyle = grad;
	ctx.fillRect(0, 0, size, size);
	const tex = new THREE.CanvasTexture(canvas);
	tex.minFilter = THREE.LinearFilter;
	tex.magFilter = THREE.LinearFilter;
	return tex;
}

class ParticleSystem {
	constructor(scene) {
		this.scene = scene;
		this.positions = new Float32Array(MAX_PARTICLES * 3);
		this.colors = new Float32Array(MAX_PARTICLES * 3);
		this.velocities = new Float32Array(MAX_PARTICLES * 3);
		this.life = new Float32Array(MAX_PARTICLES);
		this.active = new Uint8Array(MAX_PARTICLES);

		this._freeStack = new Int32Array(MAX_PARTICLES);
		this._freeStackTop = MAX_PARTICLES;
		for (let i = 0; i < MAX_PARTICLES; i += 1) {
			this._freeStack[i] = MAX_PARTICLES - 1 - i;
		}

		this.geometry = new THREE.BufferGeometry();
		this.positionAttr = new THREE.BufferAttribute(this.positions, 3);
		this.colorAttr = new THREE.BufferAttribute(this.colors, 3);
		this.geometry.setAttribute('position', this.positionAttr);
		this.geometry.setAttribute('color', this.colorAttr);
		this.geometry.setDrawRange(0, MAX_PARTICLES);

		this._softTexture = makeSoftParticleTexture();

		this.material = new THREE.PointsMaterial({
			size: 0.18,
			map: this._softTexture,
			vertexColors: true,
			transparent: true,
			opacity: 0.95,
			depthWrite: false,
			sizeAttenuation: true,
			blending: THREE.AdditiveBlending
		});

		this.points = new THREE.Points(this.geometry, this.material);
		this.scene.add(this.points);
	}

	_findFreeIndex() {
		if (this._freeStackTop <= 0) return -1;
		this._freeStackTop -= 1;
		return this._freeStack[this._freeStackTop];
	}

	_releaseIndex(idx) {
		if (this._freeStackTop >= MAX_PARTICLES) return;
		this._freeStack[this._freeStackTop] = idx;
		this._freeStackTop += 1;
	}

	burst(position, color, count = 20, explosive = false) {
		const c = new THREE.Color(color);
		const spread = explosive ? 1.9 : 0.85;
		const speedBase = explosive ? 8.0 : 3.6;
		const upwardBoost = explosive ? 4.5 : 2.2;

		for (let i = 0; i < count; i += 1) {
			const idx = this._findFreeIndex();
			if (idx === -1) {
				break;
			}

			this.active[idx] = 1;
			this.life[idx] = explosive ? 0.9 + Math.random() * 0.35 : 0.45 + Math.random() * 0.3;

			const base = idx * 3;
			this.positions[base] = position.x + (Math.random() - 0.5) * 0.18;
			this.positions[base + 1] = position.y + 0.05;
			this.positions[base + 2] = position.z + (Math.random() - 0.5) * 0.18;

			const theta = Math.random() * Math.PI * 2;
			const phi = Math.acos(2 * Math.random() - 1);
			const vx = Math.sin(phi) * Math.cos(theta);
			const vy = Math.abs(Math.cos(phi));
			const vz = Math.sin(phi) * Math.sin(theta);
			const speed = speedBase + Math.random() * (explosive ? 4.2 : 2.4);

			this.velocities[base] = vx * speed * spread;
			this.velocities[base + 1] = vy * speed + upwardBoost;
			this.velocities[base + 2] = vz * speed * spread;

			this.colors[base] = c.r;
			this.colors[base + 1] = c.g;
			this.colors[base + 2] = c.b;
		}

		this.positionAttr.needsUpdate = true;
		this.colorAttr.needsUpdate = true;
	}

	update(dt) {
		const drag = 0.985;
		for (let i = 0; i < MAX_PARTICLES; i += 1) {
			if (!this.active[i]) {
				continue;
			}

			this.life[i] -= dt;
			const base = i * 3;

			if (this.life[i] <= 0) {
				this.active[i] = 0;
				this.positions[base + 1] = -9999;
				this._releaseIndex(i);
				continue;
			}

			this.velocities[base] *= drag;
			this.velocities[base + 1] = this.velocities[base + 1] * drag - 13.5 * dt;
			this.velocities[base + 2] *= drag;

			this.positions[base] += this.velocities[base] * dt;
			this.positions[base + 1] += this.velocities[base + 1] * dt;
			this.positions[base + 2] += this.velocities[base + 2] * dt;
		}

		this.positionAttr.needsUpdate = true;
	}

	dispose() {
		this.scene.remove(this.points);
		this.geometry.dispose();
		this.material.dispose();
	}
}

export { ParticleSystem };
export default ParticleSystem;

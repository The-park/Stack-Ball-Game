import * as THREE from 'three';

const POLE_BASE_HEIGHT = 10;  // Visual length unit; we'll scale this dynamically.

class Pole {
	constructor(scene, _physics) {
		void _physics;
		this.scene = scene;
		const poleRadius = 0.16;  // Slimmer pole to match smaller tower scale

		// Short cylinder — height is dynamically rescaled to track the ball so
		// the pole only ever appears ABOVE the ball (no visible stub below ball).
		const geometry = new THREE.CylinderGeometry(poleRadius, poleRadius, POLE_BASE_HEIGHT, 24);
		const material = new THREE.MeshStandardMaterial({
			color: 0xffffff,
			roughness: 0.40,
			metalness: 0.0,
			emissive: 0x000000,
			emissiveIntensity: 0
		});
		material.fog = true;

		this.mesh = new THREE.Mesh(geometry, material);
		this.mesh.castShadow = false;
		this.mesh.receiveShadow = false;
		// Default placement at game start (ball at ~0.55) — extends from ~0.55 up.
		this.mesh.position.set(0, 0.55 + POLE_BASE_HEIGHT * 0.5, 0);
		this.scene.add(this.mesh);

		// Halo removed — reference pole has none, and the additive pink ring was
		// the last source of off-brand tint near the gameplay axis.
		this.halo = null;
		this._haloTargetY = 0;
	}

	update(ballY, _dt = 0.016) {
		// Pole extends from the BALL upward only (matches reference's "stick poking
		// out of the top" look). Ball-bottom is the lower clip; pole reaches +10
		// units above ball-top.
		void _dt;
		if (!this.mesh) return;
		const bottom = ballY - 0.4;            // bottom of ball (radius 0.40)
		const top = ballY + POLE_BASE_HEIGHT;  // visual extent above ball
		this.mesh.position.y = (top + bottom) * 0.5;
		this.mesh.scale.y = (top - bottom) / POLE_BASE_HEIGHT;
	}
}

export { Pole };
export default Pole;

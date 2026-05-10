import * as THREE from 'three';
import Slab, { getLevelTheme } from './Slab.js';

const SLAB_SPACING = 0.55;  // Slabs are 0.42 thick — leaves a 0.13 gap so layers read as discrete.

export function getLevelConfig(levelNumber) {
  const level = Math.max(1, Math.min(levelNumber, 10));
  // Danger-column width grows with level — early levels are forgiving (~25% hard arc),
  // later levels narrow the safe arc (~50% hard).
  const dangerWidth = Math.min(11, 5 + Math.floor(level * 0.6));

  return {
    // Tighter spacing (0.50) means we need more slabs/level for the tower to
    // fill the frame; reference shows ~16-22 slabs/level across difficulty.
    slabCount: 18 + level * 2,
    rotationSpeed: 0,
    spotsPerSide: 4,
    dangerWidth,
    poleRadius: 0.22,
    poleGap: 0.18,
    levelTheme: getLevelTheme(level),
  };
}

export default class Tower {
  constructor(scene, world, physics) {
    this.scene = scene;
    this.world = world;
    this.physics = physics;
    this.towerGroup = new THREE.Group();
    scene.add(this.towerGroup);
    this.slabs = [];
    this.slabsBroken = 0;
    this.totalSlabs = 0;
    this.autoRotationSpeed = 0;
    this.particleSystem = null; // set by GameManager after creation
  }

  buildLevel(config) {
    // Dispose old slabs
    for (const s of this.slabs) s.dispose();
    this.slabs = [];
    this.slabsBroken = 0;
    this.totalSlabs = config.slabCount;
    // Reference Stack Ball / Helix Jump titles ship with NO auto-drift — the
    // tower is rock-still until the player drags. Cycle-5 matches that.
    this.autoRotationSpeed = 0;

    // Pick ONE rotation offset and ONE danger-column start that all slabs of
    // this level share. This gives the level a coherent vertical hard band
    // the player rotates the tower to dodge.
    const totalSpots = (config.spotsPerSide ?? 4) * 5;
    const dangerWidth = Math.max(2, Math.min(totalSpots - 4, (config.dangerWidth ?? 6) | 0));
    const sharedConfig = {
      ...config,
      levelRotationOffset: 0,
      dangerStart: Math.floor(Math.random() * totalSpots),
    };

    for (let i = 0; i < config.slabCount; i++) {
      const yPos = -(i * SLAB_SPACING);  // stack downward from Y=0

      const slab = new Slab(
        this.scene,
        this.world,
        this.physics,
        yPos,
        i,
        sharedConfig,
        this.towerGroup
      );
      this.slabs.push(slab);
    }

    // Background re-skin: tell the renderer about the per-level sky/ground tones.
    this.currentTheme = config.levelTheme;

    // Rotate the WHOLE tower so the danger arc's center faces the BACK
    // (-Z direction, away from camera). Player sees the safe arc on first paint;
    // they can still rotate freely to align subsequent layers.
    // Spot i center angle (in tower-local frame, with rotationOffset=0) =
    //   -π/2 + (2i+1) * π / (2*totalSpots)
    // Want danger-center spot's WORLD angle = -π/2 (back of tower).
    const dangerCenterIdx = sharedConfig.dangerStart + (dangerWidth - 1) / 2;
    const spotAngleStep = (2 * Math.PI) / totalSpots;
    const dangerCenterTowerAngle = -Math.PI / 2 + (dangerCenterIdx + 0.5) * spotAngleStep;
    this.towerGroup.rotation.y = -Math.PI / 2 - dangerCenterTowerAngle;

    // Force initial alignment of physics bodies to the (possibly rotated) tower.
    this.towerGroup.updateMatrixWorld(true);
    for (const slab of this.slabs) slab.syncBodiesToTower();
  }

  update(dt, inputRotationDelta, ballY = 0) {
    const rotDelta = (inputRotationDelta || 0) + this.autoRotationSpeed * dt;
    this.towerGroup.rotation.y += rotDelta;

    // Skip the expensive world-transform sync if the tower didn't actually rotate this frame.
    const needsSync = Math.abs(rotDelta) > 1e-6;
    this.towerGroup.updateMatrixWorld(true);

    // Only sync slabs the ball can plausibly collide with this frame
    // (window: 4 m above ball, 2 m below — covers max bounce + falling slabs).
    const SYNC_AHEAD = 4.0;
    const SYNC_BEHIND = 2.0;

    for (const slab of this.slabs) {
      if (needsSync) {
        const dy = slab.yPosition - ballY;
        if (dy >= -SYNC_AHEAD && dy <= SYNC_BEHIND) {
          slab.syncBodiesToTower();
        }
      }
      slab.animateDebris(dt);
    }
  }

  // Called by GameManager when ball hits a soft body
  onSoftHit(slabUserData) {
    const slab = slabUserData.slab;
    if (!slab || slab.isBroken) return false;
    slab.breakWholeSlab(this.particleSystem);
    this.slabsBroken++;
    return true; // signal score increase
  }

  allDone() {
    return this.slabsBroken >= this.totalSlabs;
  }

  dispose() {
    for (const s of this.slabs) s.dispose();
    this.slabs = [];
    this.scene.remove(this.towerGroup);
  }
}
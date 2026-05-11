import * as THREE from 'three';
import Slab, { getLevelTheme } from './Slab.js';

const SLAB_SPACING = 0.22;  // Reference-research recommended — denser thin-disc stack.

export function getLevelConfig(levelNumber) {
  const level = Math.max(1, Math.min(levelNumber, 10));
  const dangerWidth = Math.min(11, 5 + Math.floor(level * 0.6));
  // Spiral shift per level — research note: ref shows corkscrew pattern, not vertical.
  const spiralShift = Math.min(3, 1 + Math.floor((level - 1) * 0.3));

  return {
    // Many more thin slabs (research §slabs): 40 + level*3 (was 28 + level*2).
    slabCount: 40 + level * 3,
    // Gentle auto-rotation per industry research. Tuned slower than initial estimate
    // (0.12 + L*0.04 was punishing — combined with spiral + 3-strike fail it gave
    // real players no time to react). Now: 0.06 rad/s at L1, 0.20 rad/s at L10.
    rotationSpeed: 0.06 + level * 0.015,
    spotsPerSide: 4,
    dangerWidth,
    spiralShift,
    poleRadius: 0.28,
    poleGap: 0.02,
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
    // Industry research: ref does auto-drift slowly (visible in ref_05/10/12). Was 0.
    this.autoRotationSpeed = (Math.random() < 0.5 ? -1 : 1) * (config.rotationSpeed ?? 0.15);

    // Per-slab dangerStart — produces a CORKSCREW pattern down the tower (ref §2).
    // Each slab's safe arc is shifted from the one above by `spiralShift` spots,
    // with a deterministic jitter so the pattern doesn't read as a rigid helix.
    const totalSpots = (config.spotsPerSide ?? 4) * 5;
    const dangerWidth = Math.max(2, Math.min(totalSpots - 4, (config.dangerWidth ?? 6) | 0));
    const spiralShift = Math.max(0, (config.spiralShift ?? 1) | 0);
    const baseDangerStart = Math.floor(Math.random() * totalSpots);
    const spiralDir = Math.random() < 0.5 ? 1 : -1;

    for (let i = 0; i < config.slabCount; i++) {
      const yPos = -(i * SLAB_SPACING);

      const jitter = ((i * 7 + 3) % 5) - 2;  // deterministic -2..+2 per slab
      const slabDangerStart =
        ((baseDangerStart + spiralDir * i * spiralShift + jitter) % totalSpots + totalSpots) % totalSpots;

      const slabConfig = {
        ...config,
        levelRotationOffset: 0,
        dangerStart: slabDangerStart,
      };

      const slab = new Slab(
        this.scene,
        this.world,
        this.physics,
        yPos,
        i,
        slabConfig,
        this.towerGroup
      );
      this.slabs.push(slab);
    }

    // Background re-skin: tell the renderer about the per-level sky/ground tones.
    this.currentTheme = config.levelTheme;

    // Initial rotation: align the TOP slab's danger arc to BACK (world -π/2).
    // Subsequent slabs spiral away — player must rotate to track the safe arc.
    // Cycle 19 fix: matches the corrected picker formula. A spot with shape
    // angle a sits at world XZ angle -a - θ_y (geo.rotateX(-π/2) flips the
    // sign), so to place the danger centre at world -π/2 we need
    // θ_y = π/2 - dangerCenterTowerAngle, not +dangerCenterTowerAngle + π/2.
    const topDangerCenterIdx = baseDangerStart + (dangerWidth - 1) / 2;
    const spotAngleStep = (2 * Math.PI) / totalSpots;
    const dangerCenterTowerAngle = -Math.PI / 2 + (topDangerCenterIdx + 0.5) * spotAngleStep;
    this.towerGroup.rotation.y = -dangerCenterTowerAngle + Math.PI / 2;

    // Force initial alignment of physics bodies + active-spot mask BEFORE the
    // first physics step (otherwise all 20 spots collide on frame 1, ball can
    // hit a hard spot purely by chance and rack up multiple penalties).
    this.towerGroup.updateMatrixWorld(true);
    for (const slab of this.slabs) {
      slab.syncBodiesToTower();
      slab.updateActiveSpot?.(this.towerGroup.rotation.y);
    }
  }

  update(dt, inputRotationDelta, ballY = 0) {
    // Hold-suspends-drift: when the player is actively pressing (hold-to-break
    // mode), the tower stops auto-rotating so the player can commit to a target
    // soft tile without the world flipping it to hard under them. The break-input
    // signal is exposed via this.breakInputActive (set by main.js per frame).
    const autoSpeed = this.breakInputActive ? 0 : this.autoRotationSpeed;
    const rotDelta = (inputRotationDelta || 0) + autoSpeed * dt;
    this.towerGroup.rotation.y += rotDelta;

    // Skip the expensive world-transform sync if the tower didn't actually rotate this frame.
    const needsSync = Math.abs(rotDelta) > 1e-6;
    this.towerGroup.updateMatrixWorld(true);

    // Only sync slabs the ball can plausibly collide with this frame
    // (window: 4 m above ball, 2 m below — covers max bounce + falling slabs).
    const SYNC_AHEAD = 4.0;
    const SYNC_BEHIND = 2.0;

    const groupRotY = this.towerGroup.rotation.y;

    // SINGLE-CONTACT-SLAB FILTER: ball radius 0.40 + slab half-height 0.09 = 0.49,
    // but slab spacing is 0.22 → ball can be simultaneously inside the y-range of
    // 3-4 adjacent slabs. Without this filter, each slab's `updateActiveSpot`
    // independently enables ONE body — so multiple body-mask=-1 contacts can fire
    // in one physics step (one SOFT from slab N, one HARD from slab N+1), and the
    // HUD pill flips while score AND hard-hit counter both accumulate. The fix:
    // pick the SINGLE slab the ball is closest to and only enable its active
    // spot; all other slabs get all spots disabled.
    let contactSlab = null;
    let contactDy = Infinity;
    for (const slab of this.slabs) {
      if (slab.isBroken) continue;
      const dy = Math.abs(slab.yPosition - ballY);
      if (dy < contactDy) {
        contactDy = dy;
        contactSlab = slab;
      }
    }

    for (const slab of this.slabs) {
      if (needsSync) {
        const dy = slab.yPosition - ballY;
        if (dy >= -SYNC_AHEAD && dy <= SYNC_BEHIND) {
          slab.syncBodiesToTower();
        }
      }
      if (slab === contactSlab) {
        slab.updateActiveSpot?.(groupRotY);
      } else {
        slab.disableAllSpots?.();
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
import * as THREE from 'three';
import * as CANNON from 'cannon-es';

// Per-level themes — saturated single-hue palettes, swap per level so each level
// has its own visual identity (yellow → red → blue → green ...) like the
// commercial reference. Each theme has a primary and a slightly-shifted secondary
// so adjacent slabs alternate for layered depth.
const LEVEL_THEMES = [
  { primary: 0xFFD200, secondary: 0xFFB800, sky: 0x3A1F6F, ground: 0xD55A3A },  // 1 — yellow on purple→orange (research §6)
  { primary: 0xFF5C5C, secondary: 0xFF3838, sky: 0xFFD27F, ground: 0xFFE9C9 },  // 2 — red on amber
  { primary: 0x4FC3F7, secondary: 0x29B6F6, sky: 0xFFB199, ground: 0xFFE0D2 },  // 3 — sky-blue on coral
  { primary: 0x66BB6A, secondary: 0x4CAF50, sky: 0xC4A4FF, ground: 0xEFE3FF },  // 4 — green on lavender
  { primary: 0xFF8A65, secondary: 0xFF7043, sky: 0x9FE5FF, ground: 0xD8F2FF },  // 5 — orange on cyan
  { primary: 0xBA68C8, secondary: 0xAB47BC, sky: 0xFFE082, ground: 0xFFF1C2 },  // 6 — purple on gold
  { primary: 0x26C6DA, secondary: 0x00BCD4, sky: 0xFFB6B9, ground: 0xFFD9DA },  // 7 — cyan on pink
  { primary: 0xEC407A, secondary: 0xD81B60, sky: 0xB7E1FF, ground: 0xDCEFFF },  // 8 — magenta on blue
  { primary: 0xFFC832, secondary: 0xFFB300, sky: 0x9FFFD2, ground: 0xCDFFEB },  // 9 — gold on mint
  { primary: 0x4DD0E1, secondary: 0x26C6DA, sky: 0xFFA6C8, ground: 0xFFCFE0 },  // 10 — teal on pink
];

export function getLevelTheme(levelNumber) {
  const idx = Math.max(0, Math.min(LEVEL_THEMES.length - 1, (levelNumber | 0) - 1));
  return LEVEL_THEMES[idx];
}

const HARD_COLOR = 0x0A0A0A;  // True black — research-recommended max contrast vs theme color
const PENTAGON_SIDES = 5;
const THICKNESS = 0.18;
const OUTER_R = 1.70;

function createPentagonVertices(radius, rotationOffset) {
  const verts = [];
  for (let i = 0; i < PENTAGON_SIDES; i++) {
    const a = rotationOffset + (i / PENTAGON_SIDES) * Math.PI * 2 - Math.PI / 2;
    verts.push(new THREE.Vector2(Math.cos(a) * radius, Math.sin(a) * radius));
  }
  return verts;
}

function lerp2(a, b, t) {
  return new THREE.Vector2(
    THREE.MathUtils.lerp(a.x, b.x, t),
    THREE.MathUtils.lerp(a.y, b.y, t)
  );
}

function buildSpotMesh(oA, oB, iB, iA, color) {
  const h = THICKNESS * 0.5;
  const vertices = [
    [oA.x, h, oA.y],
    [oB.x, h, oB.y],
    [iB.x, h, iB.y],
    [iA.x, h, iA.y],
    [oA.x, -h, oA.y],
    [oB.x, -h, oB.y],
    [iB.x, -h, iB.y],
    [iA.x, -h, iA.y],
  ];

  const positions = [];
  for (const v of vertices) positions.push(v[0], v[1], v[2]);

  const indices = [
    // top
    0, 1, 2,
    0, 2, 3,
    // bottom
    4, 6, 5,
    4, 7, 6,
    // sides
    0, 4, 5,
    0, 5, 1,
    1, 5, 6,
    1, 6, 2,
    2, 6, 7,
    2, 7, 3,
    3, 7, 4,
    3, 4, 0,
  ];

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();

  const isHard = color === HARD_COLOR;
  const colorObj = new THREE.Color(color);
  const mat = new THREE.MeshStandardMaterial({
    color,
    roughness: isHard ? 0.55 : 0.50,
    metalness: isHard ? 0.0 : 0.02,
    emissive: isHard ? 0x000000 : colorObj.clone().multiplyScalar(0.06),
    emissiveIntensity: isHard ? 0.0 : 0.05,
    envMapIntensity: 0.45,
    flatShading: true,
  });

  return new THREE.Mesh(geo, mat);
}

// Soft mask = one contiguous arc of soft tabs (~70% of circumference) and ONE
// fixed danger wedge (~30%). Danger position is shared across all slabs in a
// level so the player sees a coherent vertical hard column.
function createSoftMask(totalSpots, dangerStart, dangerWidth) {
  const mask = new Array(totalSpots).fill(true);
  const ds = ((dangerStart | 0) % totalSpots + totalSpots) % totalSpots;
  const dw = Math.max(1, Math.min(totalSpots - 2, dangerWidth | 0));
  for (let j = 0; j < dw; j++) {
    mask[(ds + j) % totalSpots] = false; // false = hard
  }
  return mask;
}

let _slabUidCounter = 0;

export default class Slab {
  constructor(scene, world, physics, yPosition, colorIndex, config, towerGroup) {
    this.scene = scene;
    this.world = world;
    this.physics = physics;
    this.yPosition = yPosition;
    this.towerGroup = towerGroup;
    this.uid = ++_slabUidCounter;

    this.isBroken = false;
    this.debris = [];
    this.pieces = [];

    // Two soft shades alternate per spot for layered visual depth.
    const theme = config?.levelTheme;
    this.softPrimary = theme?.primary ?? 0xFFD93D;
    this.softSecondary = theme?.secondary ?? 0xFFC107;
    // Backwards-compat: GameManager._levelComplete reads `softColor` for confetti tint.
    this.softColor = this.softPrimary;

    const spotsPerSide = Math.max(3, config?.spotsPerSide ?? 4);
    const poleRadius = Math.max(0.05, config?.poleRadius ?? 0.22);
    const poleGap = Math.max(0.08, config?.poleGap ?? 0.18);
    // Inner radius back to small gap (ball is at axis, needs to reach slab inner edge).
    const innerRadius = Math.max(0.30, poleRadius + poleGap);
    const totalSpots = PENTAGON_SIDES * spotsPerSide;

    // Persistent per-level danger column (passed down from Tower).
    const dangerStart = (config?.dangerStart ?? 0) | 0;
    const dangerWidth = Math.max(2, Math.min(totalSpots - 4, (config?.dangerWidth ?? 6) | 0));

    const softMask = createSoftMask(totalSpots, dangerStart, dangerWidth);
    // Shared rotationOffset (per-level) so the hard column lines up vertically
    // through every slab — crucial for the "vertical danger band" gameplay read.
    const rotationOffset = config?.levelRotationOffset ?? 0;

    const outerVerts = createPentagonVertices(OUTER_R, rotationOffset);
    const innerVerts = createPentagonVertices(innerRadius, rotationOffset);

    let spotIndex = 0;
    for (let side = 0; side < PENTAGON_SIDES; side++) {
      const next = (side + 1) % PENTAGON_SIDES;
      const oA = outerVerts[side];
      const oB = outerVerts[next];
      const iA = innerVerts[side];
      const iB = innerVerts[next];

      for (let s = 0; s < spotsPerSide; s++) {
        const t0 = s / spotsPerSide;
        const t1 = (s + 1) / spotsPerSide;

        const soA = lerp2(oA, oB, t0);
        const soB = lerp2(oA, oB, t1);
        const siA = lerp2(iA, iB, t0);
        const siB = lerp2(iA, iB, t1);

        const isSoft = softMask[spotIndex];
        // Alternate primary/secondary so adjacent slabs read as layered.
        const softShade = ((colorIndex + spotIndex) & 1) === 0 ? this.softPrimary : this.softSecondary;
        const color = isSoft ? softShade : HARD_COLOR;
        const material = isSoft ? this.physics.softSlabMaterial : this.physics.hardSlabMaterial;

        const mesh = buildSpotMesh(soA, soB, siB, siA, color);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.position.y = yPosition;
        this.towerGroup.add(mesh);

        const body = this._buildSpotBody(soA, soB, siA, siB, material);
        body.userData = {
          type: isSoft ? 'soft_slab' : 'hard_slab',
          slab: this,
          yPosition,
          spotIndex,
        };
        // Each spot's local angle (in the slab's pre-rotation frame). Used by
        // update() to enable ONLY the spot currently at world +Z (camera front)
        // for collision — fixes the multi-spot-collide-at-axis bug.
        const spotLocalAngle =
          rotationOffset - Math.PI / 2 + (2 * spotIndex + 1) * Math.PI / (2 * totalSpots);

        this.world.addBody(body);

        this.pieces.push({ mesh, body, color, spotLocalAngle });
        spotIndex++;
      }
    }
  }

  // Per-frame: of all 20 spots, only the one whose world-angle is closest to
  // the camera-front (world +Z = π/2) gets collisionFilterMask = -1 (collidable).
  // All others get mask 0 (non-collidable). The ball at the axis only ever
  // contacts ONE spot at a time → unambiguous soft-vs-hard read for each layer.
  updateActiveSpot(towerWorldRotationY) {
    if (this.isBroken) return;
    const TAU = Math.PI * 2;
    const target = Math.PI / 2;
    let bestIdx = 0;
    let bestDelta = Infinity;
    const deltas = new Array(this.pieces.length);
    for (let i = 0; i < this.pieces.length; i++) {
      const p = this.pieces[i];
      const worldAngle = ((p.spotLocalAngle - towerWorldRotationY) % TAU + TAU) % TAU;
      let delta = Math.abs(worldAngle - target);
      if (delta > Math.PI) delta = TAU - delta;
      deltas[i] = delta;
      if (delta < bestDelta) {
        bestDelta = delta;
        bestIdx = i;
      }
    }

    // HYSTERESIS: don't flip the active spot unless the new candidate beats
    // the CURRENT active spot by a margin (1/3 of a spot's angular width).
    // Without this, floating-point jitter at the boundary swaps soft/hard
    // back-and-forth under a resting ball, causing false hard-hits.
    const lastIdx = this._lastActiveIdx;
    if (lastIdx !== undefined && lastIdx !== bestIdx && deltas[lastIdx] !== undefined) {
      const spotAngle = TAU / this.pieces.length;
      const HYSTERESIS = spotAngle * 0.34;
      if (deltas[lastIdx] - bestDelta < HYSTERESIS) {
        bestIdx = lastIdx;  // keep the previous active spot
      }
    }
    this._lastActiveIdx = bestIdx;

    for (let i = 0; i < this.pieces.length; i++) {
      const p = this.pieces[i];
      if (!p.body) continue;
      p.body.collisionFilterMask = i === bestIdx ? -1 : 0;
    }
  }

  _buildSpotBody(outerA, outerB, innerA, innerB, material) {
    const outerMid = lerp2(outerA, outerB, 0.5);
    const innerMid = lerp2(innerA, innerB, 0.5);
    const center = lerp2(outerMid, innerMid, 0.5);

    const tangent = outerB.clone().sub(outerA);
    const segLen = tangent.length();
    tangent.normalize();

    const radialDepth = outerMid.distanceTo(innerMid);

    const body = new CANNON.Body({ mass: 0, material });
    const halfLen = Math.max(0.05, segLen * 0.43);
    const halfHeight = THICKNESS * 0.5;
    const halfDepth = Math.max(0.05, radialDepth * 0.44);
    const shape = new CANNON.Box(
      new CANNON.Vec3(
        halfLen,
        halfHeight,
        halfDepth
      )
    );
    body.addShape(shape);

    body.position.set(center.x, this.yPosition, center.y);
    const yaw = Math.atan2(tangent.y, tangent.x);
    body.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), yaw);
    return body;
  }

  syncBodiesToTower() {
    if (this.isBroken) return;
    if (!this._tmpVec3) {
      this._tmpVec3 = new THREE.Vector3();
      this._tmpQuat = new THREE.Quaternion();
    }
    const wp = this._tmpVec3;
    const wq = this._tmpQuat;
    for (const p of this.pieces) {
      if (!p.body || !p.mesh) continue;
      p.mesh.getWorldPosition(wp);
      p.mesh.getWorldQuaternion(wq);
      p.body.position.set(wp.x, wp.y, wp.z);
      p.body.quaternion.set(wq.x, wq.y, wq.z, wq.w);
      p.body.aabbNeedsUpdate = true;
    }
  }

  breakWholeSlab(particleSystem) {
    if (this.isBroken) return;
    this.isBroken = true;

    for (const p of this.pieces) {
      if (p.body) {
        this.world.removeBody(p.body);
        p.body = null;
      }
    }

    for (const p of this.pieces) {
      if (!p.mesh) continue;

      const worldPos = new THREE.Vector3();
      p.mesh.getWorldPosition(worldPos);

      if (Math.random() < 0.9) {
        const geo = new THREE.BoxGeometry(
          0.36 + Math.random() * 0.24,
          THICKNESS,
          0.22 + Math.random() * 0.18
        );
        const mat = new THREE.MeshPhongMaterial({ color: p.color, flatShading: true });
        const debrisMesh = new THREE.Mesh(geo, mat);
        debrisMesh.position.copy(worldPos);
        debrisMesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
        this.scene.add(debrisMesh);

        const a = Math.atan2(worldPos.z, worldPos.x) + (Math.random() - 0.5) * 0.4;
        const speed = 4 + Math.random() * 4;
        this.debris.push({
          mesh: debrisMesh,
          vx: Math.cos(a) * speed,
          vy: 1.6 + Math.random() * 2.8,
          vz: Math.sin(a) * speed,
          rotX: (Math.random() - 0.5) * 10,
          rotZ: (Math.random() - 0.5) * 10,
          life: 0.8 + Math.random() * 0.5,
        });
      }

      this.towerGroup.remove(p.mesh);
      p.mesh.geometry.dispose();
      p.mesh.material.dispose();
      p.mesh = null;
    }

    if (particleSystem) {
      const burstPos = new THREE.Vector3(0, this.yPosition, 0);
      particleSystem.burst(burstPos, new THREE.Color(this.softColor), 8);
    }
  }

  animateDebris(dt) {
    for (let i = this.debris.length - 1; i >= 0; i--) {
      const d = this.debris[i];
      d.mesh.position.x += d.vx * dt;
      d.mesh.position.y += d.vy * dt;
      d.mesh.position.z += d.vz * dt;
      d.vy -= 20 * dt;
      d.mesh.rotation.x += d.rotX * dt;
      d.mesh.rotation.z += d.rotZ * dt;
      d.life -= dt;

      if (d.life < 0.3) {
        d.mesh.material.opacity = d.life / 0.3;
        d.mesh.material.transparent = true;
      }

      if (d.life <= 0) {
        this.scene.remove(d.mesh);
        d.mesh.geometry.dispose();
        d.mesh.material.dispose();
        this.debris.splice(i, 1);
      }
    }
  }

  dispose() {
    for (const p of this.pieces) {
      if (p.body) this.world.removeBody(p.body);
      if (p.mesh) {
        this.towerGroup.remove(p.mesh);
        p.mesh.geometry.dispose();
        p.mesh.material.dispose();
      }
    }
    this.pieces = [];

    for (const d of this.debris) {
      this.scene.remove(d.mesh);
      d.mesh.geometry.dispose();
      d.mesh.material.dispose();
    }
    this.debris = [];
  }
}

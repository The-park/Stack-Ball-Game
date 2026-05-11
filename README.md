# Stack Ball Pro 🎮

Stack Ball Pro is an interactive, browser-based 3D physics game where players navigate a bouncing ball through a rotating helix tower. The objective is to smash through soft platforms while avoiding hard, lethal obstacles. 

## 🚀 Play or Develop Locally

### Prerequisites
- Node.js (v18+ recommended)

### Quick Start
1. **Install Dependencies:**
   ```bash
   npm install
   ```
2. **Run Development Server:**
   ```bash
   npm run dev
   ```
3. **Build for Production:**
   ```bash
   npm run build
   ```
4. **Preview Production Build:**
   ```bash
   npm run preview
   ```

## 🛠 Tech Stack

- **3D Graphics:** [Three.js](https://threejs.org/) (Handles scenes, lighting, cameras, materials, and particle systems).
- **Physics Engine:** [Cannon-es](https://pmndrs.github.io/cannon-es/) (Manages rigid body dynamics, collision detection, and bouncing mechanics).
- **Audio:** [Howler.js](https://howlerjs.com/) (Spatial web audio API for BGM and rich SFX).
- **Tooling:** [Vite](https://vitejs.dev/) (Rapid local development and optimized build bundling).

## 📁 Codebase Architecture

The project is heavily modularized, cleanly separating rendering, physics, game logic, UI, and audio.

```plaintext
src/
├── audio/
│   └── AudioManager.js    # Wraps Howler.js for BGM, bounce, smash, and fail SFX. Manages mute state.
├── engine/
│   ├── InputManager.js    # Normalizes pointer/touch/mouse inputs and tracks rotation state.
│   ├── Physics.js         # Cannon-es world setup, materials, friction, and dt stepping.
│   └── Renderer.js        # Three.js setup: Scene, WebGLRenderer, Camera, and Lighting.
├── game/
│   ├── Ball.js            # The player entity. Syncs Three.js mesh with Cannon.js body.
│   ├── GameManager.js     # State machine (IDLE, PLAYING, WIN, DEAD) and Level orchestration.
│   ├── ParticleSystem.js  # Visual polish for block breaking/smashing.
│   ├── Pole.js            # Central axis visual styling and dimensions.
│   ├── Slab.js            # Individual slices of a tower layer (soft/hard blocks).
│   └── Tower.js           # Generates, rotates, and manages level structures using LevelConfig.
├── ui/
│   └── HUD.js             # HTML DOM overlays (Start screen, Score, Menus, Mute Toggles).
└── main.js                # Core Game Loop (requestAnimationFrame), Init, and Event wiring.
```

## ⚙️ Core Mechanics

### The Game Loop (`main.js`)
The `loop()` function executes on `requestAnimationFrame` and drives the core synchronization:
1. **Input Evaluation:** Captures active touch/mouse holds and drag distance.
2. **State Updates:** 
   - Before `physics.step()`, `Tower.js` updates rotations and syncs body positions. This **CRITICAL ORDER** ensures precise active-spot collision reporting without soft/hard mismatch anomalies.
3. **Physics Simulation:** Advances `Cannon-es` simulation by `dt`. 
4. **Rendering Prep:** Updates `Ball` physics coordinates to rendering meshes.
5. **Draw Call:** `Renderer` processes the updated Scene.

### Physics-to-Render Synchronization
A defining architectural pattern in this project is mapping `Cannon.js` invisible rigid bodies directly to `Three.js` visual meshes each tick. Collision events trigger game state changes via `GameManager`, removing platform layers and emitting particles on success, or halting with a `DEAD` sequence upon hitting hard layers.

### Extensibility (Level Data)
`GameManager.js` handles `getLevelConfig()`, allowing generation of increasingly difficult levels by manipulating parameters like rotation speed, number of slices, and the distribution map of "hard" (indestructible) slabs versus "soft" (smashable) slabs.

## 📝 Research & Assets
The `/Tracking the app/` directory contains Python scripts for gameplay frame capture (used for ML tracking, testing, and debugging visual/physics misalignment) alongside an extensive library of markdown docs auditing design, physics, and UX polish. 

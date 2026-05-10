import * as THREE from 'three';
import { Renderer } from './engine/Renderer.js';
import { Physics } from './engine/Physics.js';
import { InputManager } from './engine/InputManager.js';
import { Ball } from './game/Ball.js';
import Tower from './game/Tower.js';
import { Pole } from './game/Pole.js';
import { GameManager, GameState, getLevelConfig } from './game/GameManager.js';
import { ParticleSystem } from './game/ParticleSystem.js';
import { HUD } from './ui/HUD.js';
import { AudioManager } from './audio/AudioManager.js';

console.log('%c✨ STACK BALL PRO v5.0 — MULTI-AGENT POLISH ✨', 'color: #FF6B9D; font-weight: bold; font-size: 18px;');
console.log('%c🎯 Physics, design, audio, UX, QA passes applied', 'color: #C44569; font-weight: bold;');

function ensurePerformanceMarksApi() {
	const perf = globalThis?.performance;
	if (!perf) return;

	const noOp = () => {};
	const fallbacks = ['mark', 'measure', 'clearMarks', 'clearMeasures'];
	for (const name of fallbacks) {
		if (typeof perf[name] === 'function') continue;
		try {
			Object.defineProperty(perf, name, {
				value: noOp,
				writable: true,
				configurable: true
			});
		} catch {
			try { perf[name] = noOp; } catch { /* noop */ }
		}
	}

	const maybeUgt = globalThis?.ugt;
	if (maybeUgt && typeof maybeUgt === 'object' && typeof maybeUgt.clearMarks !== 'function') {
		try { maybeUgt.clearMarks = noOp; } catch { /* noop */ }
	}
}

async function init() {
	ensurePerformanceMarksApi();

	const appDiv = document.getElementById('app');
	const uiDiv = document.getElementById('ui');

	const renderer = new Renderer(appDiv);
	const physics = new Physics();
	const input = new InputManager(renderer.renderer.domElement);

	const audio = new AudioManager();
	const particles = new ParticleSystem(renderer.scene3D);
	const pole = new Pole(renderer.scene3D, physics);
	const tower = new Tower(renderer.scene3D, physics.world, physics);
	const ball = new Ball(renderer.scene3D, physics, 1);
	const hud = new HUD(uiDiv);
	tower.particleSystem = particles;

	tower.buildLevel(getLevelConfig(1));

	const gm = new GameManager(ball, tower, pole, hud, audio, particles);
	window.__gm = gm;
	ball.setBreakInputSource(() => gm.state === GameState.PLAYING && input.isPressing);

	gm.renderer = renderer;

	// Reflect persisted mute state in HUD button on boot.
	if (audio.isMuted?.()) hud.setMuteState?.(true);

	renderer.setupCamera(ball.mesh);

	window.addEventListener('game:restart', () => gm.restart());
	window.addEventListener('game:next', () => gm.nextLevel());
	window.addEventListener('game:final-restart', () => {
		gm.level = 1;
		gm.score = 0;
		gm.restart();
	});
	window.addEventListener('game:pause-toggle', () => gm.togglePause());
	window.addEventListener('game:mute-toggle', () => {
		const muted = audio.toggleMute();
		hud.setMuteState?.(muted);
	});

	window.addEventListener('keydown', (e) => {
		if (e.key === 'p' || e.key === 'P' || e.key === 'Escape') {
			if (gm.state === GameState.PLAYING || gm.state === GameState.PAUSED) {
				gm.togglePause();
			}
		}
		if (e.key === 'm' || e.key === 'M') {
			const muted = audio.toggleMute();
			hud.setMuteState?.(muted);
		}
	});

	hud.showStartScreen();

	const startTargets = [renderer.renderer.domElement, window];
	const startEvents = ['pointerup', 'mouseup', 'touchend'];
	const startOnce = (e) => {
		// Ignore taps that originated from a HUD button (pause/mute control pill).
		const target = e?.target;
		if (target && target.closest && target.closest('.sbp-control-pill')) return;
		if (gm.state === GameState.IDLE) {
			gm.start();
			input.cancelPress?.();
			audio.startBGM();
			for (const t of startTargets) {
				for (const eventName of startEvents) {
					t.removeEventListener(eventName, startOnce);
				}
			}
		}
	};
	for (const t of startTargets) {
		for (const eventName of startEvents) {
			t.addEventListener(eventName, startOnce);
		}
	}

	const clock = new THREE.Clock();
	function loop() {
		requestAnimationFrame(loop);
		const dt = Math.min(clock.getDelta(), 0.05);

		input.update();
		hud.setBreakMode?.(gm.state === GameState.PLAYING && input.isPressing);

		if (gm.state === GameState.PLAYING) {
			physics.step(dt);
			ball.update(dt);
			tower.update(dt, input.rotation, ball.body.position.y);
			gm.tick?.();
		} else if (gm.state === GameState.WIN) {
			tower.update(dt, 0, ball.body.position.y);
		}
		// PAUSED, IDLE, DEAD, FINAL_WIN: nothing simulates.

		pole.update?.(ball.mesh.position.y, dt);
		hud.setControlsVisible?.(gm.state === GameState.PLAYING || gm.state === GameState.PAUSED);

		particles.update(dt);
		renderer.updateCamera(dt);
		renderer.render();
	}
	loop();
}

init().catch(console.error);

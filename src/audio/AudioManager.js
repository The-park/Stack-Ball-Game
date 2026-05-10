import { Howl, Howler } from 'howler';

Howler.autoUnlock = true;

const MUTE_KEY = 'stackball:muted';

class AudioManager {
	constructor() {
		this.sounds = {};
		this._bgmStarted = false;
		this._unlocked = false;

		// Restore persisted mute preference.
		let persistedMute = false;
		try { persistedMute = window.localStorage?.getItem(MUTE_KEY) === '1'; } catch { /* noop */ }
		this._muted = persistedMute;

		this._ctx = null;
		this._masterGain = null;
		this._bgmGain = null;
		this._bgmNodes = [];
		this._bgmActive = false;
		this._bgmDuckTimer = null;

		// Probe each asset with HEAD before instantiating Howler. This eliminates
		// the 5×404 console-spam when sounds aren't shipped, while keeping the
		// asset-based path available the moment the user drops mp3s into /public/sounds/.
		this._loadIfPresent('break', '/sounds/break.mp3', { volume: 0.5 });
		this._loadIfPresent('bounce', '/sounds/bounce.mp3', { volume: 0.45 });
		this._loadIfPresent('death', '/sounds/death.mp3', { volume: 0.65 });
		this._loadIfPresent('win', '/sounds/win.mp3', { volume: 0.55 });
		this._loadIfPresent('bgm', '/sounds/bgm.mp3', { loop: true, volume: 0.25 });

		this._unlockAudio = this._unlockAudio.bind(this);
		const opts = { once: true, passive: true };
		window.addEventListener('touchstart', this._unlockAudio, opts);
		window.addEventListener('pointerdown', this._unlockAudio, opts);
		window.addEventListener('keydown', this._unlockAudio, { once: true });
	}

	async _loadIfPresent(name, src, opts = {}) {
		this.sounds[name] = undefined; // pending
		try {
			const res = await fetch(src, { method: 'HEAD' });
			if (!res.ok) {
				this.sounds[name] = null;
				return;
			}
		} catch {
			this.sounds[name] = null;
			return;
		}
		this._loadSound(name, src, opts);
	}

	_loadSound(name, src, opts = {}) {
		try {
			const sound = new Howl({
				src: [src],
				preload: true,
				onloaderror: () => { this.sounds[name] = null; },
				onplayerror: () => { this.sounds[name] = null; },
				...opts
			});
			this.sounds[name] = sound;
		} catch {
			this.sounds[name] = null;
		}
	}

	_ensureCtx() {
		if (this._ctx) return this._ctx;
		const Ctor = window.AudioContext || window.webkitAudioContext;
		if (!Ctor) return null;
		try {
			this._ctx = new Ctor();
			this._masterGain = this._ctx.createGain();
			this._masterGain.gain.value = this._muted ? 0 : 1;
			this._masterGain.connect(this._ctx.destination);
		} catch {
			this._ctx = null;
		}
		return this._ctx;
	}

	_unlockAudio() {
		if (this._unlocked) return;
		this._unlocked = true;
		const ctx = this._ensureCtx();
		if (ctx && ctx.state === 'suspended') {
			ctx.resume().catch(() => {});
		}
	}

	play(name, velocity = 1) {
		const sound = this.sounds[name];
		if (sound) {
			try {
				const id = sound.play();
				if (id !== undefined && velocity !== 1) {
					const rate = Math.max(0.7, Math.min(1.5, velocity));
					sound.rate?.(rate, id);
				}
				return;
			} catch {
				// fall through to synth fallback
			}
		}
		this._synthFallback(name, velocity);
	}

	_synthFallback(name, velocity = 1) {
		const ctx = this._ensureCtx();
		if (!ctx || !this._masterGain) return;
		if (ctx.state === 'suspended') ctx.resume().catch(() => {});

		const dest = this._masterGain;
		const v = Math.max(0.6, Math.min(2, velocity));

		switch (name) {
			case 'break': return this._synthBreak(ctx, dest, v);
			case 'bounce': return this._synthBounce(ctx, dest, v);
			case 'death': return this._synthDeath(ctx, dest);
			case 'win': return this._synthWin(ctx, dest);
			default: return;
		}
	}

	_synthBreak(ctx, dest, v) {
		const dur = 0.14;
		const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * dur), ctx.sampleRate);
		const data = buf.getChannelData(0);
		for (let i = 0; i < data.length; i += 1) {
			data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
		}
		const src = ctx.createBufferSource();
		src.buffer = buf;
		const lp = ctx.createBiquadFilter();
		lp.type = 'lowpass';
		const t = ctx.currentTime;
		lp.frequency.setValueAtTime(1700 * v, t);
		lp.frequency.exponentialRampToValueAtTime(220, t + 0.1);
		const g = ctx.createGain();
		g.gain.setValueAtTime(0.55, t);
		g.gain.exponentialRampToValueAtTime(0.001, t + dur);
		src.connect(lp).connect(g).connect(dest);
		src.start(t);
		src.stop(t + dur + 0.02);
	}

	_synthBounce(ctx, dest, v) {
		const t = ctx.currentTime;
		const o = ctx.createOscillator();
		o.type = 'sine';
		const base = 220 * v;
		o.frequency.setValueAtTime(base, t);
		o.frequency.exponentialRampToValueAtTime(base * 1.9, t + 0.06);
		const g = ctx.createGain();
		g.gain.setValueAtTime(0.4, t);
		g.gain.exponentialRampToValueAtTime(0.001, t + 0.07);
		o.connect(g).connect(dest);
		o.start(t);
		o.stop(t + 0.08);
	}

	_synthDeath(ctx, dest) {
		const t = ctx.currentTime;
		const o = ctx.createOscillator();
		o.type = 'square';
		o.frequency.setValueAtTime(330, t);
		o.frequency.exponentialRampToValueAtTime(80, t + 0.35);
		const g = ctx.createGain();
		g.gain.setValueAtTime(0.32, t);
		g.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
		o.connect(g).connect(dest);
		o.start(t);
		o.stop(t + 0.42);
	}

	_synthWin(ctx, dest) {
		const t0 = ctx.currentTime;
		const notes = [523.25, 659.25, 783.99, 1046.5];
		notes.forEach((f, i) => {
			const t = t0 + i * 0.085;
			const o = ctx.createOscillator();
			o.type = 'triangle';
			o.frequency.value = f;
			const g = ctx.createGain();
			g.gain.setValueAtTime(0.0001, t);
			g.gain.exponentialRampToValueAtTime(0.32, t + 0.012);
			g.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
			o.connect(g).connect(dest);
			o.start(t);
			o.stop(t + 0.24);
		});
	}

	startBGM() {
		if (this._bgmStarted) return;
		this._bgmStarted = true;

		const bgm = this.sounds.bgm;
		if (bgm) {
			try {
				bgm.play();
				return;
			} catch {
				// fall through
			}
		}
		this._startSynthBGM();
	}

	_startSynthBGM() {
		if (this._bgmActive) return;
		const ctx = this._ensureCtx();
		if (!ctx || !this._masterGain) return;

		// Dedicated BGM gain so death/win can duck it without affecting SFX.
		const out = ctx.createGain();
		out.gain.value = 0.0;
		out.gain.linearRampToValueAtTime(0.10, ctx.currentTime + 1.6);
		out.connect(this._masterGain);
		this._bgmGain = out;

		const lp = ctx.createBiquadFilter();
		lp.type = 'lowpass';
		lp.frequency.value = 600;
		lp.Q.value = 4;

		const lfo = ctx.createOscillator();
		lfo.frequency.value = 0.07;
		const lfoGain = ctx.createGain();
		lfoGain.gain.value = 380;
		lfo.connect(lfoGain).connect(lp.frequency);
		lfo.start();

		const oscs = [];
		[110, 110.4, 165, 220.8].forEach((f) => {
			const o = ctx.createOscillator();
			o.type = 'sawtooth';
			o.frequency.value = f;
			const og = ctx.createGain();
			og.gain.value = f < 200 ? 0.55 : 0.18;
			o.connect(og).connect(lp);
			o.start();
			oscs.push(o, og);
		});
		lp.connect(out);

		this._bgmNodes = [...oscs, lfo, lfoGain, lp, out];
		this._bgmActive = true;
	}

	stopBGM() {
		const bgm = this.sounds.bgm;
		if (bgm) {
			try {
				bgm.stop();
			} catch {
				// ignore
			}
		}
		if (this._bgmActive) {
			for (const node of this._bgmNodes) {
				try { node.stop?.(); } catch { /* noop */ }
				try { node.disconnect?.(); } catch { /* noop */ }
			}
			this._bgmNodes = [];
			this._bgmActive = false;
		}
		this._bgmGain = null;
		this._bgmStarted = false;
	}

	// Smoothly duck BGM volume to a fraction (0..1) of normal for a fixed window,
	// then restore. Affects both the asset (Howler) path and the synth path.
	// Used on death/level-complete so SFX and dialogues read cleanly.
	duckBGM(target = 0.35, durationMs = 400, holdMs = 800) {
		const ms = durationMs + holdMs;
		// Asset (Howler) BGM
		const bgm = this.sounds.bgm;
		if (bgm && this._bgmStarted) {
			try {
				const baseVol = 0.25;
				bgm.volume(baseVol * target);
				if (this._bgmDuckTimer) clearTimeout(this._bgmDuckTimer);
				this._bgmDuckTimer = setTimeout(() => {
					try { bgm.volume(baseVol); } catch { /* noop */ }
				}, ms);
			} catch { /* noop */ }
		}
		// Synth BGM
		if (this._bgmGain && this._ctx) {
			const t = this._ctx.currentTime;
			const g = this._bgmGain.gain;
			const cur = g.value;
			try {
				g.cancelScheduledValues(t);
				g.setValueAtTime(cur, t);
				g.linearRampToValueAtTime(0.10 * target, t + durationMs / 1000);
				g.linearRampToValueAtTime(0.10, t + ms / 1000);
			} catch { /* noop */ }
		}
	}

	setMuted(muted) {
		this._muted = !!muted;
		try { Howler.mute(this._muted); } catch { /* noop */ }
		if (this._masterGain) {
			this._masterGain.gain.value = this._muted ? 0 : 1;
		}
		try { window.localStorage?.setItem(MUTE_KEY, this._muted ? '1' : '0'); } catch { /* noop */ }
	}

	toggleMute() {
		this.setMuted(!this._muted);
		return this._muted;
	}

	isMuted() {
		return !!this._muted;
	}
}

export { AudioManager };
export default AudioManager;

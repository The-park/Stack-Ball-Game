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
		// Pleasant "ting" — two-osc layered triangle bell tone.
		// Velocity scales pitch in 0.85–1.25x range so consecutive breaks feel musical.
		const t = ctx.currentTime;
		const pitch = Math.max(0.85, Math.min(1.25, v));

		// Master envelope for this hit — short attack, exp decay.
		const out = ctx.createGain();
		out.gain.setValueAtTime(0.0, t);
		out.gain.linearRampToValueAtTime(0.30, t + 0.005);
		out.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
		out.connect(dest);

		// Body — bright triangle, slight downward pitch glide.
		const o1 = ctx.createOscillator();
		o1.type = 'triangle';
		o1.frequency.setValueAtTime(880 * pitch, t);
		o1.frequency.exponentialRampToValueAtTime(660 * pitch, t + 0.15);
		const g1 = ctx.createGain();
		g1.gain.value = 0.65;
		o1.connect(g1).connect(out);
		o1.start(t);
		o1.stop(t + 0.20);

		// Air — a gentle higher partial gives the "sparkle".
		const o2 = ctx.createOscillator();
		o2.type = 'sine';
		o2.frequency.value = 1760 * pitch;
		const g2 = ctx.createGain();
		g2.gain.setValueAtTime(0.0, t);
		g2.gain.linearRampToValueAtTime(0.18, t + 0.004);
		g2.gain.exponentialRampToValueAtTime(0.001, t + 0.10);
		o2.connect(g2).connect(out);
		o2.start(t);
		o2.stop(t + 0.12);
	}

	_synthBounce(ctx, dest, v) {
		// Soft "thud" for hard-slab hits — low sine with a tiny noise click.
		// Quick attack, no chirp, fast decay so it doesn't feel like an alarm.
		void v;
		const t = ctx.currentTime;

		const out = ctx.createGain();
		out.gain.setValueAtTime(0.0, t);
		out.gain.linearRampToValueAtTime(0.42, t + 0.004);
		out.gain.exponentialRampToValueAtTime(0.001, t + 0.13);
		out.connect(dest);

		const o = ctx.createOscillator();
		o.type = 'sine';
		o.frequency.setValueAtTime(110, t);
		o.frequency.exponentialRampToValueAtTime(80, t + 0.10);
		o.connect(out);
		o.start(t);
		o.stop(t + 0.14);

		// Tiny noise click for "thud" texture — 12 ms, lowpassed.
		const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.012), ctx.sampleRate);
		const data = buf.getChannelData(0);
		for (let i = 0; i < data.length; i += 1) data[i] = (Math.random() * 2 - 1);
		const src = ctx.createBufferSource();
		src.buffer = buf;
		const lp = ctx.createBiquadFilter();
		lp.type = 'lowpass';
		lp.frequency.value = 320;
		const ng = ctx.createGain();
		ng.gain.value = 0.18;
		src.connect(lp).connect(ng).connect(out);
		src.start(t);
		src.stop(t + 0.014);
	}

	_synthDeath(ctx, dest) {
		// Sad-but-soft descending triangle (replaces square buzzer that was harsh).
		const t = ctx.currentTime;

		const out = ctx.createGain();
		out.gain.setValueAtTime(0.0, t);
		out.gain.linearRampToValueAtTime(0.30, t + 0.04);
		out.gain.exponentialRampToValueAtTime(0.001, t + 0.55);
		out.connect(dest);

		const o = ctx.createOscillator();
		o.type = 'triangle';
		o.frequency.setValueAtTime(440, t);
		o.frequency.exponentialRampToValueAtTime(220, t + 0.20);
		o.frequency.exponentialRampToValueAtTime(110, t + 0.50);
		o.connect(out);
		o.start(t);
		o.stop(t + 0.55);

		// Sub-octave layer for warmth.
		const o2 = ctx.createOscillator();
		o2.type = 'sine';
		o2.frequency.setValueAtTime(220, t);
		o2.frequency.exponentialRampToValueAtTime(55, t + 0.50);
		const g2 = ctx.createGain();
		g2.gain.value = 0.45;
		o2.connect(g2).connect(out);
		o2.start(t);
		o2.stop(t + 0.55);
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

		// Gentle ambient pad — replaces the sawtooth drone the user complained about.
		// Soft sines (no harmonics), warm triad, very heavy lowpass, low volume.
		const out = ctx.createGain();
		out.gain.value = 0.0;
		out.gain.linearRampToValueAtTime(0.045, ctx.currentTime + 2.0);  // was 0.10 — quieter
		out.connect(this._masterGain);
		this._bgmGain = out;

		const lp = ctx.createBiquadFilter();
		lp.type = 'lowpass';
		lp.frequency.value = 380;     // tighter cutoff — no high-freq buzzing
		lp.Q.value = 0.7;             // gentle slope, no resonance peak

		// Slow filter sweep for breathing motion.
		const lfo = ctx.createOscillator();
		lfo.frequency.value = 0.05;   // ~20s cycle
		const lfoGain = ctx.createGain();
		lfoGain.gain.value = 120;     // small sweep range
		lfo.connect(lfoGain).connect(lp.frequency);
		lfo.start();

		// Warm consonant chord (root + fifth + octave) on PURE SINES.
		const oscs = [];
		[131, 196, 262, 392].forEach((f, idx) => {
			const o = ctx.createOscillator();
			o.type = 'sine';
			o.frequency.value = f;
			const og = ctx.createGain();
			// Bass louder, top very quiet — natural acoustic balance.
			og.gain.value = idx === 0 ? 0.55 : (idx === 3 ? 0.10 : 0.22);
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
			// Base volume matches the new gentle pad (0.045, was 0.10).
			const base = 0.045;
			try {
				g.cancelScheduledValues(t);
				g.setValueAtTime(cur, t);
				g.linearRampToValueAtTime(base * target, t + durationMs / 1000);
				g.linearRampToValueAtTime(base, t + ms / 1000);
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

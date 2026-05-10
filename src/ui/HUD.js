class HUD {
	constructor(uiLayer) {
		this.uiLayer = uiLayer;
		this.root = uiLayer;
		this._injectStyles();

		this.root.innerHTML = `
  <div class="sbp-control-pill" id="sbp-controls">
    <button id="sbp-pause" class="sbp-ctrl-btn" aria-label="Pause" title="Pause">
      <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
        <rect x="3" y="2" width="3.5" height="12" rx="1" fill="currentColor"/>
        <rect x="9.5" y="2" width="3.5" height="12" rx="1" fill="currentColor"/>
      </svg>
    </button>
    <button id="sbp-mute" class="sbp-ctrl-btn" aria-label="Mute" title="Mute">
      <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
        <path d="M2 6h2.5l4-3v10l-4-3H2z" fill="currentColor"/>
        <path d="M11 5.5c1 1 1 4 0 5" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      </svg>
    </button>
  </div>

  <div id="sbp-bar-wrap" class="sbp-bar-wrap">
    <div id="sbp-lv-left" class="sbp-level-pill">1</div>
    <div class="sbp-progress-shell"><div id="sbp-bar" class="sbp-progress-fill"></div></div>
    <div id="sbp-lv-right" class="sbp-level-pill">2</div>
  </div>

  <div id="sbp-landing-hint" class="sbp-landing-hint">SAFE LANDING</div>
  <div id="sbp-break-mode" class="sbp-break-mode">PRESS &amp; HOLD</div>

  <div id="sbp-combo-wrap" class="sbp-combo-wrap" data-tier="idle">
    <div class="sbp-combo-label">COMBO</div>
    <div id="sbp-combo-value" class="sbp-combo-value">x1</div>
  </div>

  <div id="sbp-combo-toast" class="sbp-combo-toast">+3</div>

  <div id="sbp-score-wrap" class="sbp-score-wrap">
    <div class="sbp-score-caption">SCORE</div>
    <div id="sbp-score" class="sbp-score-value">0</div>
  </div>

  <div id="sbp-overlay" class="sbp-overlay"></div>
`;

		this._lvLeft = document.getElementById('sbp-lv-left');
		this._lvRight = document.getElementById('sbp-lv-right');
		this._bar = document.getElementById('sbp-bar');
		this._score = document.getElementById('sbp-score');
		this._scoreWrap = document.getElementById('sbp-score-wrap');
		this._overlay = document.getElementById('sbp-overlay');
		this._landingHint = document.getElementById('sbp-landing-hint');
		this._breakMode = document.getElementById('sbp-break-mode');
		this._comboWrap = document.getElementById('sbp-combo-wrap');
		this._comboValue = document.getElementById('sbp-combo-value');
		this._comboToast = document.getElementById('sbp-combo-toast');
		this._pauseBtn = document.getElementById('sbp-pause');
		this._muteBtn = document.getElementById('sbp-mute');
		this._landingHintTimer = null;
		this._comboTimer = null;
		this._comboToastTimer = null;
		this._lastTier = 'idle';

		this._pauseBtn.addEventListener('click', () => {
			window.dispatchEvent(new CustomEvent('game:pause-toggle'));
		});
		this._muteBtn.addEventListener('click', (e) => {
			e.currentTarget.classList.toggle('is-on');
			window.dispatchEvent(new CustomEvent('game:mute-toggle'));
		});
	}

	_injectStyles() {
		if (document.getElementById('sbp-hud-style')) return;

		const style = document.createElement('style');
		style.id = 'sbp-hud-style';
		style.textContent = `
      :root {
        --sbp-glass-bg: rgba(255,255,255,0.92);
        --sbp-glass-border: rgba(255,255,255,0.7);
        --sbp-shadow-soft: rgba(15,20,35,0.18);
        --sbp-primary: #3A78FF;
        --sbp-primary-light: #6F9CFF;
        --sbp-secondary: #FFD93D;
        --sbp-accent: #1F2733;
      }

      .sbp-control-pill{
        position:absolute;
        bottom:max(18px,env(safe-area-inset-bottom,0px));
        left:max(14px,env(safe-area-inset-left,0px));
        display:flex;
        gap:4px;
        background:rgba(255,255,255,0.85);
        backdrop-filter:blur(12px);
        -webkit-backdrop-filter:blur(12px);
        border:none;
        border-radius:999px;
        padding:4px;
        box-shadow:0 4px 12px rgba(15,20,35,0.15);
        pointer-events:none;
        opacity:0;
        z-index:21;
        transition:opacity 0.25s ease;
      }
      .sbp-ctrl-btn{
        width:30px;height:30px;
        border:none;border-radius:50%;
        background:transparent;color:var(--sbp-accent);
        cursor:pointer;
        display:flex;align-items:center;justify-content:center;
        transition:all 0.18s ease;
      }
      .sbp-ctrl-btn:hover{transform:scale(1.08);}
      .sbp-ctrl-btn.is-on{
        background:linear-gradient(135deg,var(--sbp-primary),var(--sbp-primary-light));
        color:#fff;
        box-shadow:0 4px 10px rgba(58,120,255,0.35);
      }

      .sbp-bar-wrap{
        position:absolute;
        top:max(18px,env(safe-area-inset-top,0px));
        left:50%;
        transform:translateX(-50%);
        display:flex;
        align-items:center;
        gap:10px;
        pointer-events:none;
        z-index:20;
        padding:0;
        border-radius:0;
        border:none;
        background:transparent;
        box-shadow:none;
        backdrop-filter:none;
        -webkit-backdrop-filter:none;
      }

      .sbp-level-pill{
        width:32px;height:32px;
        border-radius:50%;
        background:#3A78FF;
        color:#FFFFFF;
        display:flex;align-items:center;justify-content:center;
        font-size:14px;font-weight:800;letter-spacing:0.3px;
        box-shadow:0 2px 6px rgba(0,0,0,0.18);
      }

      .sbp-progress-shell{
        width:180px;height:6px;
        border-radius:999px;overflow:hidden;
        background:rgba(255,255,255,0.45);
      }
      .sbp-progress-fill{
        width:0%;height:100%;border-radius:999px;
        background:#3A78FF;
        transition:width 0.4s cubic-bezier(0.4,0,0.2,1);
      }
      .sbp-progress-fill::after{display:none;}
      @keyframes sbpShimmer{0%{transform:translateX(-100%);}100%{transform:translateX(100%);}}

      .sbp-score-wrap{
        position:absolute;
        left:50%;
        top:calc(max(18px,env(safe-area-inset-top,0px)) + 56px);
        transform:translateX(-50%);
        display:flex;flex-direction:column;align-items:center;
        pointer-events:none;z-index:12;
        transition:opacity 0.3s ease;
      }
      .sbp-score-wrap.is-dim{opacity:0.85;}

      .sbp-score-caption{display:none;}
      .sbp-score-value{
        color:#FFFFFF;
        font-family:"Bricolage Grotesque","Outfit",sans-serif;
        font-size:clamp(40px,9vw,76px);
        font-weight:900;letter-spacing:-1px;line-height:0.9;
        -webkit-text-stroke:3px #2A2D34;
        paint-order:stroke fill;
        text-shadow:0 4px 10px rgba(0,0,0,0.30), 0 0 2px rgba(0,0,0,0.55);
        transition:transform 0.12s ease-out;
      }

      .sbp-landing-hint{display:none;}
      .sbp-landing-hint.is-soft{
        background:linear-gradient(130deg,rgba(186,255,201,0.85),rgba(186,225,255,0.7));
        border-color:rgba(126,246,225,0.85);
        color:#1f5c3f;
      }
      .sbp-landing-hint.is-hard{
        background:linear-gradient(130deg,rgba(255,107,157,0.85),rgba(254,194,96,0.75));
        border-color:rgba(255,107,157,0.85);
        color:#ffffff;
      }

      .sbp-break-mode{display:none;}
      .sbp-break-mode.is-active{
        opacity:1;
        transform:translateX(-50%) scale(1.04);
        background:linear-gradient(135deg,rgba(255,141,179,0.92),rgba(254,194,96,0.85));
        color:#ffffff;
        border-color:rgba(255,255,255,0.8);
        box-shadow:0 6px 18px rgba(255,107,157,0.35);
      }

      .sbp-combo-wrap{
        position:absolute;
        right:max(14px,env(safe-area-inset-right,0px));
        top:calc(max(18px,env(safe-area-inset-top,0px)) + 38px);
        width:auto;
        border-radius:14px;
        border:none;
        background:transparent;
        backdrop-filter:none;
        box-shadow:none;
        padding:0;
        pointer-events:none;
        z-index:20;
        opacity:0;
        transition:opacity 0.25s ease, transform 0.25s ease;
      }
      /* Show only when active (count > 1) */
      .sbp-combo-wrap[data-tier="pink"],
      .sbp-combo-wrap[data-tier="amber"],
      .sbp-combo-wrap[data-tier="gold"]{ opacity: 1; }
      .sbp-combo-wrap[data-tier="pink"]{box-shadow:0 8px 26px rgba(255,107,157,0.45);}
      .sbp-combo-wrap[data-tier="amber"]{box-shadow:0 8px 26px rgba(254,194,96,0.55);border-color:rgba(254,194,96,0.85);}
      .sbp-combo-wrap[data-tier="gold"]{box-shadow:0 8px 30px rgba(255,215,0,0.7);border-color:rgba(255,215,0,0.9);}
      .sbp-combo-wrap.sbp-bloom{animation:sbpBloom 380ms cubic-bezier(.2,.8,.2,1);}
      @keyframes sbpBloom{0%{transform:scale(1)}40%{transform:scale(1.18)}100%{transform:scale(1)}}

      .sbp-combo-label{display:none;}
      .sbp-combo-value{
        color:rgba(255,255,255,0.96);
        font-family:"Bricolage Grotesque","Outfit",sans-serif;
        font-size:32px;font-weight:900;line-height:1;text-align:right;
        -webkit-text-stroke:1.5px rgba(0,0,0,0.55);
        text-shadow:0 3px 8px rgba(0,0,0,0.2);
        transition:transform 0.15s cubic-bezier(0.4,0,0.2,1);
      }
      .sbp-combo-wrap[data-tier="amber"] .sbp-combo-value{color:#E07B00;}
      .sbp-combo-wrap[data-tier="gold"]  .sbp-combo-value{color:#B8860B;}

      .sbp-combo-toast{
        position:absolute;top:34%;left:50%;
        transform:translate(-50%,-82%) scale(0.92);
        padding:10px 18px;border-radius:999px;
        border:2px solid rgba(255,215,0,0.7);
        background:linear-gradient(135deg,rgba(255,107,157,0.95),rgba(254,194,96,0.95));
        color:#FFFFFF;
        font-size:18px;font-weight:900;letter-spacing:1.2px;
        opacity:0;pointer-events:none;z-index:21;
        box-shadow:0 8px 28px rgba(255,107,157,0.4), 0 0 20px rgba(255,215,0,0.3);
        transition:opacity 0.2s ease, transform 0.2s ease;
      }

      .sbp-overlay{
        position:absolute;inset:0;
        display:flex;align-items:center;justify-content:center;
        pointer-events:none;z-index:25;
        background:rgba(15,20,30,0.42);
        backdrop-filter:blur(6px);
        opacity:0;transition:opacity 0.4s ease;
      }
      .sbp-overlay.show{opacity:1;}

      .sbp-card{
        position:relative;
        width:min(88vw,460px);
        border-radius:28px;
        border:3px solid rgba(255,255,255,0.85);
        background:rgba(255,255,255,0.96);
        box-shadow:0 20px 60px rgba(196,69,105,0.25), 0 8px 32px rgba(255,107,157,0.18);
        backdrop-filter:blur(12px);
        padding:24px 24px 22px;
        color:#3A2C3A;
        text-align:center;
        animation:sbpFloatIn 320ms cubic-bezier(.2,.8,.2,1);
        overflow:hidden;
      }
      .sbp-card::after{
        content:'';position:absolute;inset:0;border-radius:inherit;
        background:linear-gradient(115deg,transparent 35%,rgba(255,255,255,0.55) 50%,transparent 65%);
        transform:translateX(-130%);
        animation:sbpRibbon 980ms 280ms ease-out forwards;
        pointer-events:none;
      }
      @keyframes sbpRibbon{to{transform:translateX(130%);}}
      @keyframes sbpFloatIn{
        0%{opacity:0; transform:translateY(14px) scale(0.98);}
        100%{opacity:1; transform:translateY(0) scale(1);}
      }

      .sbp-title{
        font-family:"Bricolage Grotesque","Space Grotesk","Segoe UI",sans-serif;
        font-weight:800;letter-spacing:1.2px;
        background:linear-gradient(135deg,var(--sbp-primary),var(--sbp-accent));
        -webkit-background-clip:text;background-clip:text;
        -webkit-text-fill-color:transparent;color:var(--sbp-accent);
      }

      .sbp-stats{
        margin-top:14px;
        display:grid;grid-template-columns:repeat(2,minmax(0,1fr));
        gap:8px 14px;
        font-size:13px;font-weight:700;
      }
      .sbp-stat-row{
        display:flex;justify-content:space-between;
        padding:8px 12px;
        border-radius:14px;
        background:rgba(255,196,214,0.18);
        border:1px solid rgba(255,141,179,0.25);
      }
      .sbp-stat-row span:first-child{color:rgba(58,44,58,0.6);letter-spacing:0.6px;text-transform:uppercase;font-size:11px;}
      .sbp-stat-row span:last-child{color:var(--sbp-accent);font-weight:800;}

      .sbp-chip-row{
        margin-top:16px;display:flex;justify-content:center;gap:10px;flex-wrap:wrap;
      }
      .sbp-chip{
        padding:8px 14px;border-radius:999px;
        border:1px solid rgba(255,141,179,0.4);
        background:rgba(255,255,255,0.7);
        color:var(--sbp-accent);
        font-size:12px;font-weight:800;letter-spacing:0.8px;
      }

      .sbp-primary-btn{
        margin-top:18px;border:none;border-radius:999px;
        padding:13px 26px;cursor:pointer;
        color:#fff;font-size:15px;font-weight:800;letter-spacing:1px;
        background:linear-gradient(135deg,var(--sbp-primary),var(--sbp-primary-light));
        box-shadow:0 10px 22px rgba(255,107,157,0.4);
        transition:transform 0.18s ease, box-shadow 0.18s ease;
      }
      .sbp-primary-btn:hover{transform:translateY(-2px);box-shadow:0 14px 28px rgba(255,107,157,0.5);}

      .sbp-tap-pulse{
        margin-top:14px;font-size:13px;letter-spacing:2.6px;
        color:rgba(196,69,105,0.78);font-weight:800;
        animation:sbpTapPulse 1.4s ease-in-out infinite;
      }
      @keyframes sbpTapPulse{
        0%,100%{opacity:0.55;transform:translateY(0);}
        50%{opacity:1;transform:translateY(-2px);}
      }

      @media (max-width:640px){
        .sbp-bar-wrap{padding:6px 10px; gap:8px;}
        .sbp-level-pill{width:30px; height:30px; font-size:13px;}
        .sbp-progress-shell{width:150px;}
        .sbp-landing-hint{top:calc(max(12px,env(safe-area-inset-top,0px)) + 56px); font-size:11px; padding:7px 14px;}
        .sbp-break-mode{bottom:calc(max(20px,env(safe-area-inset-bottom,0px)) + 14px); font-size:10px; padding:6px 13px;}
        .sbp-combo-wrap{padding:0;}
        .sbp-combo-value{font-size:26px;}
        .sbp-card{width:min(92vw,420px); border-radius:20px; padding:20px 16px 18px;}
        .sbp-ctrl-btn{width:28px;height:28px;}
        .sbp-stats{grid-template-columns:1fr 1fr;}
        /* Score-bar top position scales with safe-area; smaller font on small screens. */
        .sbp-score-wrap{
          top:calc(max(14px,env(safe-area-inset-top,0px)) + 46px);
          transform:translateX(-50%);
        }
        .sbp-score-value{font-size:clamp(34px,8vw,64px); -webkit-text-stroke:2.5px #2A2D34;}
      }
    `;

		document.head.appendChild(style);
	}

	showPlayingUI(score, level, total) {
		void total;
		this._lvLeft.textContent = level;
		this._lvRight.textContent = level + 1;
		this._bar.style.width = '0%';
		this._score.textContent = score;
		this.updateCombo(0, 1, 0);
		this.setBreakMode(false);
		if (this._landingHint) {
			this._landingHint.style.opacity = '0';
			this._landingHint.style.transform = 'translateX(-50%) scale(0.92)';
			this._landingHint.classList.remove('is-soft', 'is-hard');
		}
		this._overlay.innerHTML = '';
		this._overlay.style.background = 'transparent';
		this._overlay.style.pointerEvents = 'none';
		this._overlay.classList.remove('show');
	}

	showLandingHint(type) {
		if (!this._landingHint) return;

		const isSoft = type === 'soft';
		this._landingHint.textContent = isSoft ? 'SAFE LANDING' : 'DANGER';
		this._landingHint.classList.toggle('is-soft', isSoft);
		this._landingHint.classList.toggle('is-hard', !isSoft);
		this._landingHint.style.opacity = '1';
		this._landingHint.style.transform = 'translateX(-50%) scale(1)';

		if (this._landingHintTimer) {
			clearTimeout(this._landingHintTimer);
		}
		this._landingHintTimer = setTimeout(() => {
			this._landingHint.style.opacity = '0';
			this._landingHint.style.transform = 'translateX(-50%) scale(0.94)';
		}, 900);
	}

	setBreakMode(isActive) {
		if (!this._breakMode) return;
		this._breakMode.classList.toggle('is-active', !!isActive);
	}

	setControlsVisible(visible) {
		const pill = document.getElementById('sbp-controls');
		if (!pill) return;
		const v = !!visible;
		if (this._lastControlsVisible === v) return;
		this._lastControlsVisible = v;
		pill.style.opacity = v ? '1' : '0';
		pill.style.pointerEvents = v ? 'auto' : 'none';
		pill.style.transform = v ? 'translateY(0)' : 'translateY(-6px)';
	}

	setMuteState(isMuted) {
		if (!this._muteBtn) return;
		this._muteBtn.classList.toggle('is-on', !!isMuted);
	}

	updateCombo(count, multiplier = 1, gainedPoints = 0) {
		if (!this._comboWrap || !this._comboValue) return;

		const nextCount = Math.max(0, count | 0);
		const nextMultiplier = Math.max(1, multiplier | 0);
		const active = nextCount > 1;

		const tier = nextMultiplier >= 4 ? 'gold'
			: nextMultiplier >= 3 ? 'amber'
			: nextMultiplier >= 2 ? 'pink'
			: 'idle';
		this._comboWrap.dataset.tier = tier;
		if (tier !== this._lastTier) {
			this._comboWrap.classList.remove('sbp-bloom');
			void this._comboWrap.offsetWidth; // force reflow to restart animation
			this._comboWrap.classList.add('sbp-bloom');
		}
		this._lastTier = tier;

		// Don't override opacity here — CSS [data-tier] rules handle visibility,
		// so the widget stays fully hidden at idle (was previously stuck at 0.84).
		this._comboValue.textContent = `x${nextMultiplier}`;
		this._comboValue.style.transform = active ? 'scale(1.08)' : 'scale(1)';

		if (this._scoreWrap) {
			this._scoreWrap.classList.toggle('is-dim', active);
		}

		if (this._comboTimer) clearTimeout(this._comboTimer);
		this._comboTimer = setTimeout(() => {
			this._comboValue.style.transform = 'scale(1)';
		}, 140);

		if (gainedPoints > 0 && this._comboToast) {
			this._comboToast.textContent = `+${gainedPoints}`;
			this._comboToast.style.opacity = '1';
			this._comboToast.style.transform = 'translate(-50%,-96%) scale(1)';
			if (this._comboToastTimer) clearTimeout(this._comboToastTimer);
			this._comboToastTimer = setTimeout(() => {
				this._comboToast.style.opacity = '0';
				this._comboToast.style.transform = 'translate(-50%,-82%) scale(0.92)';
			}, 340);
		}
	}

	updateProgress(broken, total, score) {
		const pct = total > 0 ? (broken / total) * 100 : 0;
		this._bar.style.width = pct + '%';
		this._score.textContent = score;
		this._score.style.transform = 'scale(1.08)';
		setTimeout(() => {
			this._score.style.transform = 'scale(1)';
		}, 120);
	}

	_overlayShow() {
		this._overlay.style.pointerEvents = 'auto';
		this._overlay.classList.add('show');
	}

	showGameOver(score) {
		this._overlayShow();
		this._overlay.style.background = 'rgba(255,107,157,0.18)';
		this._overlay.innerHTML = `
      <div class="sbp-card">
        <div class="sbp-title" style="font-size:38px;">Level Failed</div>
        <div style="margin-top:10px;font-size:14px;letter-spacing:2.5px;color:#888;">SCORE</div>
        <div style="font-size:54px;font-weight:900;line-height:1;margin-top:4px;color:#3A2C3A;">${score}</div>
        <button id="sbp-retry-btn" class="sbp-primary-btn">Try Again</button>
      </div>`;

		const retryBtn = this._overlay.querySelector('#sbp-retry-btn');
		retryBtn?.addEventListener('click', () => {
			window.dispatchEvent(new CustomEvent('game:restart'));
		});
	}

	showLevelComplete(score, level, totalLevels, multiplier = 1, stats = {}) {
		this._overlayShow();
		this._overlay.style.background = 'rgba(255,107,157,0.16)';
		const broken = Math.max(0, stats.broken | 0);
		const maxCombo = Math.max(0, stats.maxCombo | 0);
		const hardHits = Math.max(0, stats.hardHits | 0);
		const seconds = Math.max(0, ((stats.ms || 0) / 1000)).toFixed(1);

		this._overlay.innerHTML = `
      <div class="sbp-card">
        <div class="sbp-title" style="font-size:42px;">Level Complete</div>
        <div style="margin-top:6px;font-size:18px;font-weight:800;color:#FF6B9D;letter-spacing:1px;">x${multiplier} BONUS</div>
        <div style="margin-top:10px;font-size:14px;letter-spacing:2.5px;color:#888;">SCORE</div>
        <div style="font-size:48px;font-weight:900;line-height:1;color:#3A2C3A;">${score}</div>
        <div class="sbp-stats">
          <div class="sbp-stat-row"><span>Broken</span><span>${broken}</span></div>
          <div class="sbp-stat-row"><span>Best Combo</span><span>x${maxCombo}</span></div>
          <div class="sbp-stat-row"><span>Time</span><span>${seconds}s</span></div>
          <div class="sbp-stat-row"><span>Mistakes</span><span>${hardHits}</span></div>
        </div>
        <div style="margin-top:16px;font-size:18px;font-weight:800;color:#3A2C3A;">${level}/${totalLevels}</div>
        <div class="sbp-tap-pulse">TAP TO CONTINUE</div>
      </div>`;

		const continueOnce = () => {
			window.dispatchEvent(new CustomEvent('game:next'));
			this._overlay.removeEventListener('pointerdown', continueOnce);
		};
		this._overlay.addEventListener('pointerdown', continueOnce);
	}

	showFinalVictory(score, totalLevels) {
		this._overlayShow();
		this._overlay.style.background = 'linear-gradient(180deg, rgba(255,196,214,0.55), rgba(254,194,96,0.4))';
		this._overlay.innerHTML = `
      <div class="sbp-card">
        <div class="sbp-title" style="font-size:46px;">You Win!</div>
        <div style="margin-top:6px;font-size:14px;letter-spacing:2.5px;color:#888;">${totalLevels}/${totalLevels} CLEARED</div>
        <div style="margin-top:14px;font-size:14px;letter-spacing:2.5px;color:#888;">FINAL SCORE</div>
        <div style="font-size:64px;font-weight:900;line-height:1;color:#3A2C3A;">${score}</div>
        <button id="sbp-final-btn" class="sbp-primary-btn">Play Again</button>
      </div>`;

		const btn = this._overlay.querySelector('#sbp-final-btn');
		btn?.addEventListener('click', () => {
			window.dispatchEvent(new CustomEvent('game:final-restart'));
		});
	}

	showStartScreen() {
		this._overlayShow();
		this._overlay.style.background = 'rgba(255,196,214,0.32)';
		this._overlay.innerHTML = `
      <div class="sbp-card">
        <div class="sbp-title" style="font-size:54px;line-height:0.92;">Stack Ball</div>
        <div style="margin-top:10px;font-size:14px;letter-spacing:3px;color:#888;font-weight:700;">SOFT FLOW · FAST DROP</div>
        <div class="sbp-chip-row">
          <div class="sbp-chip">DRAG TO ROTATE</div>
          <div class="sbp-chip">HOLD TO BREAK</div>
          <div class="sbp-chip">BUILD COMBO</div>
        </div>
        <div class="sbp-tap-pulse">TAP ANYWHERE TO PLAY</div>
      </div>`;
	}

	showPauseScreen() {
		this._overlayShow();
		this._overlay.style.background = 'rgba(255,196,214,0.42)';
		this._overlay.innerHTML = `
      <div class="sbp-card">
        <div class="sbp-title" style="font-size:42px;">Paused</div>
        <button id="sbp-resume-btn" class="sbp-primary-btn">Resume</button>
      </div>`;
		const btn = this._overlay.querySelector('#sbp-resume-btn');
		btn?.addEventListener('click', () => {
			window.dispatchEvent(new CustomEvent('game:pause-toggle'));
		});
	}

	hidePauseScreen() {
		this._overlay.innerHTML = '';
		this._overlay.style.background = 'transparent';
		this._overlay.style.pointerEvents = 'none';
		this._overlay.classList.remove('show');
	}

	flashDanger() {
		const flash = document.createElement('div');
		flash.style.cssText = `
      position:absolute;inset:0;
      background:radial-gradient(circle at 50% 60%, rgba(255,107,157,0.35), rgba(254,194,96,0.0));
      pointer-events:none;opacity:1;
      transition:opacity 0.45s ease-out;z-index:30;
    `;
		this.root.appendChild(flash);
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				flash.style.opacity = '0';
			});
		});
		setTimeout(() => flash.remove(), 500);
	}
}

export { HUD };
export default HUD;

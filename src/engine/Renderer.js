import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const VignetteShader = {
	uniforms: {
		tDiffuse: { value: null },
		offset: { value: 1.05 },
		darkness: { value: 0.55 }
	},
	vertexShader: `
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}
	`,
	fragmentShader: `
		uniform float offset;
		uniform float darkness;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;
		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			vec2 uv = ( vUv - vec2( 0.5 ) ) * vec2( offset );
			float vig = 1.0 - smoothstep( 0.55, 1.05, dot( uv, uv ) * 0.85 );
			vec3 col = mix( texel.rgb * vec3( 1.02, 0.98, 0.99 ), texel.rgb, vig );
			col = mix( col, col * vec3( 0.92, 0.85, 0.88 ), ( 1.0 - vig ) * darkness );
			gl_FragColor = vec4( col, texel.a );
		}
	`
};

class Renderer {
	constructor(mountEl) {
		this.scene = new THREE.Scene();
		// 3D background dome — receives per-level sky/ground tones via setSkyTheme().
		// Initial neutral white-blue so first paint isn't pink.
		this._skyDome = this._createSkyDome(0xB892FF, 0xF5E1FF);
		this.scene.add(this._skyDome);
		this.scene.fog = new THREE.Fog(0xE8E2F2, 12, 38);

		const aspect = window.innerWidth / window.innerHeight;
		// Pull camera back (z 6.3 → 10) and lower lookAt (0 → -1.5) so MORE of the
		// tower extends below the ball — matches reference's tall-column composition.
		// Pitch ≈ atan(2.5+1.5/10) = ~22° downward (still slanted; user can see top face).
		this.camera = new THREE.PerspectiveCamera(34, aspect, 0.1, 300);
		this.camera.position.set(0, 2.5, 10);
		this.camera.lookAt(0, -1.5, 0);

		this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.renderer.setClearColor(0x000000, 0);
		this.renderer.outputColorSpace = THREE.SRGBColorSpace;
		// Linear output — saturated theme colors should pop, not be muddied by ACES.
		this.renderer.toneMapping = THREE.NoToneMapping;
		this.renderer.toneMappingExposure = 1.0;
		this.renderer.shadowMap.enabled = true;
		this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

		const app = mountEl || document.getElementById('app') || document.body;
		app.appendChild(this.renderer.domElement);

		this._ballMesh = null;
		this._lookY = 0;
		this.shakeIntensity = 0;
		this._cameraBaseX = 0;
		this._cameraBaseY = 2.5;

		this._setupLights();
		this._setupEnvironment();
		this._setupComposer();

		this._onResize = this._onResize.bind(this);
		window.addEventListener('resize', this._onResize);
	}

	_setupLights() {
		// Neutral white key + cool sky fill. Material color now drives the look,
		// not the lighting. This is what shipped Stack Ball / Helix Jump do.
		const ambient = new THREE.AmbientLight(0xffffff, 0.42);
		this.scene.add(ambient);

		const directional = new THREE.DirectionalLight(0xffffff, 1.05);
		directional.position.set(7, 20, 8);
		directional.castShadow = true;
		directional.shadow.mapSize.set(2048, 2048);
		directional.shadow.camera.left = -12;
		directional.shadow.camera.right = 12;
		directional.shadow.camera.top = 12;
		directional.shadow.camera.bottom = -12;
		directional.shadow.normalBias = 0.025;
		directional.shadow.bias = -0.0002;
		this.scene.add(directional);

		// Cool sky fill, warm ground bounce — gives volumetric form without tinting.
		const hemisphere = new THREE.HemisphereLight(0xb6cbff, 0x2c2520, 0.32);
		this.scene.add(hemisphere);

		const rim = new THREE.DirectionalLight(0xa8c4ff, 0.22);
		rim.position.set(-9, 8, -7);
		this.scene.add(rim);
	}

	_createSkyDome(skyColor, groundColor) {
		const geo = new THREE.SphereGeometry(80, 32, 24);
		const mat = new THREE.ShaderMaterial({
			side: THREE.BackSide,
			depthWrite: false,
			uniforms: {
				uSky: { value: new THREE.Color(skyColor) },
				uGround: { value: new THREE.Color(groundColor) },
				uHorizon: { value: new THREE.Color(0xffffff) }
			},
			vertexShader: `
				varying float vElev;
				void main() {
					vec4 wp = modelMatrix * vec4(position, 1.0);
					vElev = clamp(wp.y / 60.0 + 0.5, 0.0, 1.0);
					gl_Position = projectionMatrix * viewMatrix * wp;
				}
			`,
			fragmentShader: `
				uniform vec3 uSky;
				uniform vec3 uGround;
				uniform vec3 uHorizon;
				varying float vElev;
				void main() {
					float t = smoothstep(0.0, 1.0, vElev);
					vec3 lower = mix(uGround, uHorizon, smoothstep(0.0, 0.5, t));
					vec3 upper = mix(uHorizon, uSky, smoothstep(0.5, 1.0, t));
					vec3 col = mix(lower, upper, step(0.5, t));
					gl_FragColor = vec4(col, 1.0);
				}
			`
		});
		const dome = new THREE.Mesh(geo, mat);
		dome.frustumCulled = false;
		return dome;
	}

	setSkyTheme(skyHex, groundHex) {
		if (!this._skyDome) return;
		const mat = this._skyDome.material;
		mat.uniforms.uSky.value.setHex(skyHex);
		mat.uniforms.uGround.value.setHex(groundHex);
		// Fog now follows the level's GROUND color so the horizon dissolves smoothly
		// (was hardcoded lavender — clashed with red/orange/green levels).
		if (this.scene.fog) {
			this.scene.fog.color.setHex(groundHex);
		}
	}

	_setupEnvironment() {
		// Image-based lighting from a procedural pastel room — gives standard materials
		// real specular highlights without shipping any HDR asset.
		const pmrem = new THREE.PMREMGenerator(this.renderer);
		const room = new RoomEnvironment(this.renderer);
		const envTex = pmrem.fromScene(room, 0.04).texture;
		this.scene.environment = envTex;
		this._envTexture = envTex;
		pmrem.dispose();
	}

	_setupComposer() {
		const w = window.innerWidth;
		const h = window.innerHeight;
		this.composer = new EffectComposer(this.renderer);
		this.composer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		this.composer.setSize(w, h);

		this._renderPass = new RenderPass(this.scene, this.camera);
		this.composer.addPass(this._renderPass);

		this._bloomPass = new UnrealBloomPass(
			new THREE.Vector2(w, h),
			0.0,  // strength 0 — reference Stack Ball ships without bloom; crisper render
			0.85,
			0.95
		);
		this.composer.addPass(this._bloomPass);

		this._fxaaPass = new ShaderPass(FXAAShader);
		this._fxaaPass.uniforms.resolution.value.set(1 / w, 1 / h);
		this.composer.addPass(this._fxaaPass);

		this._vignettePass = new ShaderPass(VignetteShader);
		this._vignettePass.uniforms.offset.value = 1.05;
		this._vignettePass.uniforms.darkness.value = 0.06;
		this.composer.addPass(this._vignettePass);

		this._outputPass = new OutputPass();
		this.composer.addPass(this._outputPass);
	}

	setupCamera(ballMesh) {
		this._ballMesh = ballMesh;
		this.camera.position.set(0, 2.5, 10);
		this.camera.lookAt(0, -1.5, 0);
	}

	updateCamera(dt) {
		if (!this._ballMesh) {
			return;
		}

		// camera follows ball: y +2.5 above, looks at y -1.5 below.
		// Pitch atan((2.5-(-1.5))/10) ≈ 22° down — slab top still visible,
		// but tower extends ~5 units below ball (~12 slabs at 0.40 spacing).
		const targetY = this._ballMesh.position.y + 2.5;
		const lookY = this._ballMesh.position.y - 1.5;

		this._cameraBaseY += (targetY - this._cameraBaseY) * 0.08;
		this._cameraBaseX = 0;
		this.camera.position.x = this._cameraBaseX;
		this.camera.position.y = this._cameraBaseY;
		this.camera.position.z = 10;

		this._lookY = this._lookY ?? 0;
		this._lookY += (lookY - this._lookY) * 0.075;
		this.camera.lookAt(0, this._lookY, 0);
	}

	triggerShake(intensity) {
		// Hard-capped at 0.10 — anything more reads as earthquake on phone screens.
		// Reference Stack Ball uses ZERO shake; this is a tiny nudge only.
		this.shakeIntensity = Math.min(0.10, Math.max(this.shakeIntensity, intensity));
	}

	render() {
		if (this.shakeIntensity > 0.0001) {
			const amount = this.shakeIntensity;
			const offsetX = (Math.random() - 0.5) * amount;
			const offsetY = (Math.random() - 0.5) * amount;
			this.camera.position.x = this._cameraBaseX + offsetX;
			this.camera.position.y = this._cameraBaseY + offsetY;
			this.shakeIntensity *= 0.72;  // faster fade — shake clears in ~8 frames, not 25
		} else {
			this.shakeIntensity = 0;
			this.camera.position.x = this._cameraBaseX;
			this.camera.position.y = this._cameraBaseY;
		}

		if (this.composer) {
			this.composer.render();
		} else {
			this.renderer.render(this.scene, this.camera);
		}
	}

	_onResize() {
		const w = window.innerWidth;
		const h = window.innerHeight;
		const dpr = Math.min(window.devicePixelRatio, 2);
		this.camera.aspect = w / h;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(w, h);
		this.renderer.setPixelRatio(dpr);
		if (this.composer) {
			this.composer.setSize(w, h);
			this.composer.setPixelRatio(dpr);
		}
		if (this._fxaaPass) {
			this._fxaaPass.uniforms.resolution.value.set(1 / w, 1 / h);
		}
		if (this._bloomPass) {
			this._bloomPass.setSize?.(w, h);
		}
	}

	get scene3D() {
		return this.scene;
	}

	get cam() {
		return this.camera;
	}
}

export { Renderer };
export default Renderer;

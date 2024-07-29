import{E as I,v as G,F as q,w as O,C as R,V as x,d as D,H,f as _,e as P,q as M,x as j,i as K,S as J,P as Z,W as $,A as X,a as Y,M as S,B as F,b as B,L as ee}from"./three.module-B_E_UEtZ.js";import{s as te,R as re}from"./threeApi-CUz88pwB.js";import{P as se,F as ie,C as oe,a as le,E as ae}from"./EffectComposer-CZj5rSvA.js";import{d as ne,r as V,o as ue,a as he,c as de,b as U,f as m,w as c,g as v,e as p,F as me,l as L,_ as fe}from"./index-Dq1wBEHm.js";class ce extends I{constructor(e,r={}){const s=r.font;if(s===void 0)super();else{const l=s.generateShapes(e,r.size);r.depth===void 0&&r.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),r.depth=r.depth!==void 0?r.depth:r.height!==void 0?r.height:50,r.bevelThickness===void 0&&(r.bevelThickness=10),r.bevelSize===void 0&&(r.bevelSize=8),r.bevelEnabled===void 0&&(r.bevelEnabled=!1),super(l,r)}this.type="TextGeometry"}}class ve extends G{constructor(e){super(e)}load(e,r,s,l){const i=this,a=new q(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(n){const t=i.parse(JSON.parse(n));r&&r(t)},s,l)}parse(e){return new pe(e)}}class pe{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,r=100){const s=[],l=ge(e,r,this.data);for(let i=0,a=l.length;i<a;i++)s.push(...l[i].toShapes());return s}}function ge(T,e,r){const s=Array.from(T),l=e/r.resolution,i=(r.boundingBox.yMax-r.boundingBox.yMin+r.underlineThickness)*l,a=[];let n=0,t=0;for(let f=0;f<s.length;f++){const o=s[f];if(o===`
`)n=0,t-=i;else{const u=be(o,l,n,t,r);n+=u.offsetX,a.push(u.path)}}return a}function be(T,e,r,s,l){const i=l.glyphs[T]||l.glyphs["?"];if(!i){console.error('THREE.Font: character "'+T+'" does not exists in font family '+l.familyName+".");return}const a=new O;let n,t,f,o,u,g,b,C;if(i.o){const h=i._cachedOutline||(i._cachedOutline=i.o.split(" "));for(let d=0,z=h.length;d<z;)switch(h[d++]){case"m":n=h[d++]*e+r,t=h[d++]*e+s,a.moveTo(n,t);break;case"l":n=h[d++]*e+r,t=h[d++]*e+s,a.lineTo(n,t);break;case"q":f=h[d++]*e+r,o=h[d++]*e+s,u=h[d++]*e+r,g=h[d++]*e+s,a.quadraticCurveTo(u,g,f,o);break;case"b":f=h[d++]*e+r,o=h[d++]*e+s,u=h[d++]*e+r,g=h[d++]*e+s,b=h[d++]*e+r,C=h[d++]*e+s,a.bezierCurveTo(u,g,b,C,f,o);break}}return{offsetX:i.ha*e,path:a}}const xe={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new R(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class y extends se{constructor(e,r,s,l){super(),this.strength=r!==void 0?r:1,this.radius=s,this.threshold=l,this.resolution=e!==void 0?new x(e.x,e.y):new x(256,256),this.clearColor=new R(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new D(i,a,{type:H}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const g=new D(i,a,{type:H});g.texture.name="UnrealBloomPass.h"+u,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const b=new D(i,a,{type:H});b.texture.name="UnrealBloomPass.v"+u,b.texture.generateMipmaps=!1,this.renderTargetsVertical.push(b),i=Math.round(i/2),a=Math.round(a/2)}const n=xe;this.highPassUniforms=_.clone(n.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new P({uniforms:this.highPassUniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader}),this.separableBlurMaterials=[];const t=[3,5,7,9,11];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(t[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new x(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=r,this.compositeMaterial.uniforms.bloomRadius.value=.1;const f=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=f,this.bloomTintColors=[new M(1,1,1),new M(1,1,1),new M(1,1,1),new M(1,1,1),new M(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const o=oe;this.copyUniforms=_.clone(o.uniforms),this.blendMaterial=new P({uniforms:this.copyUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,blending:j,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new R,this.oldClearAlpha=1,this.basic=new K,this.fsQuad=new ie(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,r){let s=Math.round(e/2),l=Math.round(r/2);this.renderTargetBright.setSize(s,l);for(let i=0;i<this.nMips;i++)this.renderTargetsHorizontal[i].setSize(s,l),this.renderTargetsVertical[i].setSize(s,l),this.separableBlurMaterials[i].uniforms.invSize.value=new x(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(e,r,s,l,i){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),i&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=s.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let n=this.renderTargetBright;for(let t=0;t<this.nMips;t++)this.fsQuad.material=this.separableBlurMaterials[t],this.separableBlurMaterials[t].uniforms.colorTexture.value=n.texture,this.separableBlurMaterials[t].uniforms.direction.value=y.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[t]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[t].uniforms.colorTexture.value=this.renderTargetsHorizontal[t].texture,this.separableBlurMaterials[t].uniforms.direction.value=y.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[t]),e.clear(),this.fsQuad.render(e),n=this.renderTargetsVertical[t];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,i&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(s),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const r=[];for(let s=0;s<e;s++)r.push(.39894*Math.exp(-.5*s*s/(e*e))/e);return new P({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new x(.5,.5)},direction:{value:new x(.5,.5)},gaussianCoefficients:{value:r}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new P({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}y.BlurDirectionX=new x(1,0);y.BlurDirectionY=new x(0,1);const Te={class:"btn"},Ce=ne({__name:"Layer",setup(T){const e=V();V(!0);const r=V(0);let s,l,i;ue(()=>{let n=a(e.value);s=n.camera,l=n.box,i=n.light});function a(n){const t=new J,f=new Z(50,n.clientWidth/n.clientHeight,.1,1e5);f.position.set(0,0,10),t.add(f);const o=new $({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});o.setSize(n.clientWidth,n.clientHeight),o.setPixelRatio(window.devicePixelRatio*2),o.setClearColor(0),n.appendChild(o.domElement),o.autoClear=!1,te(f,o);const u=new X(5500);t.add(u);const g=new Y(16777215,1);t.add(g);const b=new S(new F(1,1,1),new B({color:"yellow"}));t.add(b);const C=new S(new F(1,1,1),new B({color:"Cyan"}));C.position.set(0,2,0),C.layers.set(1),t.add(C);const h=new S(new F(1,1,1),new B({color:"blue"}));h.position.set(2,0,0),h.layers.set(2),t.add(h);const d=new S(new F(1,1,1),new B({color:"red"}));d.position.set(0,0,2),d.layers.set(3),t.add(d);const z=new ve;let w;z.load("/font.json",function(W){const N=new ce("Layers",{font:W,size:1,height:.2,curveSegments:12,bevelEnabled:!0,bevelThickness:0,bevelSize:0,bevelSegments:5});w=new S(N,new B({color:"pink"})),w.position.set(0,-2,0),t.add(w)});const Q=new re(t,f);var A=new y(new x(window.innerWidth,window.innerHeight),1.5,0,0);A.renderToScreen=!0,new ee().set(1),new le;const k=new ae(o);k.addPass(Q),k.addPass(A),E();function E(){console.log(w),k.render(),e.value&&requestAnimationFrame(E)}return{camera:f,box:b,light:g}}return(n,t)=>{const f=L("el-input"),o=L("el-button");return he(),de(me,null,[U("div",Te,[m(f,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=u=>r.value=u)},null,8,["modelValue"]),U("div",null,[m(o,{onClick:t[1]||(t[1]=()=>p(s).layers.enable(r.value))},{default:c(()=>[v("camera 增加与此图层联系")]),_:1}),m(o,{onClick:t[2]||(t[2]=()=>p(s).layers.disable(r.value))},{default:c(()=>[v(" camera 取消与此图层联系")]),_:1}),m(o,{onClick:t[3]||(t[3]=()=>p(s).layers.toggle(r.value))},{default:c(()=>[v("camera 切换与此图层的联系 有/无")]),_:1}),m(o,{onClick:t[4]||(t[4]=()=>p(s).layers.set(r.value))},{default:c(()=>[v(" camera 只与此图层联系")]),_:1}),m(o,{onClick:t[5]||(t[5]=()=>p(s).layers.enableAll())},{default:c(()=>[v(" camera 与所有图层联系")]),_:1}),m(o,{onClick:t[6]||(t[6]=()=>p(s).layers.disableAll())},{default:c(()=>[v(" camera 取消所有图层联系")]),_:1})]),U("div",null,[m(o,{onClick:t[7]||(t[7]=()=>p(l).layers.enable(r.value))},{default:c(()=>[v("box 增加与此图层联系")]),_:1}),m(o,{onClick:t[8]||(t[8]=()=>p(l).layers.disable(r.value))},{default:c(()=>[v(" box 取消与此图层联系")]),_:1}),m(o,{onClick:t[9]||(t[9]=()=>p(l).layers.toggle(r.value))},{default:c(()=>[v("box 切换与此图层的联系 有/无")]),_:1}),m(o,{onClick:t[10]||(t[10]=()=>p(l).layers.set(r.value))},{default:c(()=>[v(" box 只与此图层联系")]),_:1}),m(o,{onClick:t[11]||(t[11]=()=>p(l).layers.enableAll())},{default:c(()=>[v(" box 与所有图层联系")]),_:1}),m(o,{onClick:t[12]||(t[12]=()=>p(l).layers.disableAll())},{default:c(()=>[v(" box 取消所有图层联系")]),_:1})]),U("div",null,[m(o,{onClick:t[13]||(t[13]=()=>p(i).layers.enable(r.value))},{default:c(()=>[v("light 增加与此图层联系")]),_:1}),m(o,{onClick:t[14]||(t[14]=()=>p(i).layers.disable(r.value))},{default:c(()=>[v(" light 取消与此图层联系")]),_:1}),m(o,{onClick:t[15]||(t[15]=()=>p(i).layers.toggle(r.value))},{default:c(()=>[v("light 切换与此图层的联系 有/无")]),_:1}),m(o,{onClick:t[16]||(t[16]=()=>p(i).layers.set(r.value))},{default:c(()=>[v(" light 只与此图层联系")]),_:1}),m(o,{onClick:t[17]||(t[17]=()=>p(i).layers.enableAll())},{default:c(()=>[v(" light 与所有图层联系")]),_:1}),m(o,{onClick:t[18]||(t[18]=()=>p(i).layers.disableAll())},{default:c(()=>[v(" light 取消所有图层联系")]),_:1})])]),U("div",{class:"threeBox",ref_key:"threeBox",ref:e},null,512)],64)}}}),Ue=fe(Ce,[["__scopeId","data-v-a8040995"]]);export{Ue as default};

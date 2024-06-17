import{V as U,c as P,C as D,D as k,U as F,N as o,d as v,H as y,e as p,f as g,g as l,h as z,i as C,j as E,O as N,k as _,l as T,P as O,S as V,M as A,m as j,b as I,a as L,n as Z,W}from"./three.module-B_E_UEtZ.js";import{P as B,C as b,F as H,O as q,E as X}from"./EffectComposer-CZj5rSvA.js";import{d as G,l as Q,m as K,o as Y,c as J,k as $}from"./index-Bu-AkPZM.js";const c={name:"SSRShader",defines:{MAX_STEP:0,PERSPECTIVE_CAMERA:!0,DISTANCE_ATTENUATION:!0,FRESNEL:!0,INFINITE_THICK:!1,SELECTIVE:!1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tMetalness:{value:null},tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new U},cameraProjectionMatrix:{value:new P},cameraInverseProjectionMatrix:{value:new P},opacity:{value:.5},maxDistance:{value:180},cameraRange:{value:0},thickness:{value:.018}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}

	`,fragmentShader:`
		// precision highp float;
		precision highp sampler2D;
		varying vec2 vUv;
		uniform sampler2D tDepth;
		uniform sampler2D tNormal;
		uniform sampler2D tMetalness;
		uniform sampler2D tDiffuse;
		uniform float cameraRange;
		uniform vec2 resolution;
		uniform float opacity;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform float maxDistance;
		uniform float thickness;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;
		#include <packing>
		float pointToLineDistance(vec3 x0, vec3 x1, vec3 x2) {
			//x0: point, x1: linePointA, x2: linePointB
			//https://mathworld.wolfram.com/Point-LineDistance3-Dimensional.html
			return length(cross(x0-x1,x0-x2))/length(x2-x1);
		}
		float pointPlaneDistance(vec3 point,vec3 planePoint,vec3 planeNormal){
			// https://mathworld.wolfram.com/Point-PlaneDistance.html
			//// https://en.wikipedia.org/wiki/Plane_(geometry)
			//// http://paulbourke.net/geometry/pointlineplane/
			float a=planeNormal.x,b=planeNormal.y,c=planeNormal.z;
			float x0=point.x,y0=point.y,z0=point.z;
			float x=planePoint.x,y=planePoint.y,z=planePoint.z;
			float d=-(a*x+b*y+c*z);
			float distance=(a*x0+b*y0+c*z0+d)/sqrt(a*a+b*b+c*c);
			return distance;
		}
		float getDepth( const in vec2 uv ) {
			return texture2D( tDepth, uv ).x;
		}
		float getViewZ( const in float depth ) {
			#ifdef PERSPECTIVE_CAMERA
				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
			#else
				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
			#endif
		}
		vec3 getViewPosition( const in vec2 uv, const in float depth/*clip space*/, const in float clipW ) {
			vec4 clipPosition = vec4( ( vec3( uv, depth ) - 0.5 ) * 2.0, 1.0 );//ndc
			clipPosition *= clipW; //clip
			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;//view
		}
		vec3 getViewNormal( const in vec2 uv ) {
			return unpackRGBToNormal( texture2D( tNormal, uv ).xyz );
		}
		vec2 viewPositionToXY(vec3 viewPosition){
			vec2 xy;
			vec4 clip=cameraProjectionMatrix*vec4(viewPosition,1);
			xy=clip.xy;//clip
			float clipW=clip.w;
			xy/=clipW;//NDC
			xy=(xy+1.)/2.;//uv
			xy*=resolution;//screen
			return xy;
		}
		void main(){
			#ifdef SELECTIVE
				float metalness=texture2D(tMetalness,vUv).r;
				if(metalness==0.) return;
			#endif

			float depth = getDepth( vUv );
			float viewZ = getViewZ( depth );
			if(-viewZ>=cameraFar) return;

			float clipW = cameraProjectionMatrix[2][3] * viewZ+cameraProjectionMatrix[3][3];
			vec3 viewPosition=getViewPosition( vUv, depth, clipW );

			vec2 d0=gl_FragCoord.xy;
			vec2 d1;

			vec3 viewNormal=getViewNormal( vUv );

			#ifdef PERSPECTIVE_CAMERA
				vec3 viewIncidentDir=normalize(viewPosition);
				vec3 viewReflectDir=reflect(viewIncidentDir,viewNormal);
			#else
				vec3 viewIncidentDir=vec3(0,0,-1);
				vec3 viewReflectDir=reflect(viewIncidentDir,viewNormal);
			#endif

			float maxReflectRayLen=maxDistance/dot(-viewIncidentDir,viewNormal);
			// dot(a,b)==length(a)*length(b)*cos(theta) // https://www.mathsisfun.com/algebra/vectors-dot-product.html
			// if(a.isNormalized&&b.isNormalized) dot(a,b)==cos(theta)
			// maxDistance/maxReflectRayLen=cos(theta)
			// maxDistance/maxReflectRayLen==dot(a,b)
			// maxReflectRayLen==maxDistance/dot(a,b)

			vec3 d1viewPosition=viewPosition+viewReflectDir*maxReflectRayLen;
			#ifdef PERSPECTIVE_CAMERA
				if(d1viewPosition.z>-cameraNear){
					//https://tutorial.math.lamar.edu/Classes/CalcIII/EqnsOfLines.aspx
					float t=(-cameraNear-viewPosition.z)/viewReflectDir.z;
					d1viewPosition=viewPosition+viewReflectDir*t;
				}
			#endif
			d1=viewPositionToXY(d1viewPosition);

			float totalLen=length(d1-d0);
			float xLen=d1.x-d0.x;
			float yLen=d1.y-d0.y;
			float totalStep=max(abs(xLen),abs(yLen));
			float xSpan=xLen/totalStep;
			float ySpan=yLen/totalStep;
			for(float i=0.;i<float(MAX_STEP);i++){
				if(i>=totalStep) break;
				vec2 xy=vec2(d0.x+i*xSpan,d0.y+i*ySpan);
				if(xy.x<0.||xy.x>resolution.x||xy.y<0.||xy.y>resolution.y) break;
				float s=length(xy-d0)/totalLen;
				vec2 uv=xy/resolution;

				float d = getDepth(uv);
				float vZ = getViewZ( d );
				if(-vZ>=cameraFar) continue;
				float cW = cameraProjectionMatrix[2][3] * vZ+cameraProjectionMatrix[3][3];
				vec3 vP=getViewPosition( uv, d, cW );

				#ifdef PERSPECTIVE_CAMERA
					// https://comp.nus.edu.sg/~lowkl/publications/lowk_persp_interp_techrep.pdf
					float recipVPZ=1./viewPosition.z;
					float viewReflectRayZ=1./(recipVPZ+s*(1./d1viewPosition.z-recipVPZ));
				#else
					float viewReflectRayZ=viewPosition.z+s*(d1viewPosition.z-viewPosition.z);
				#endif

				// if(viewReflectRayZ>vZ) continue; // will cause "npm run make-screenshot webgl_postprocessing_ssr" high probability hang.
				// https://github.com/mrdoob/three.js/pull/21539#issuecomment-821061164
				if(viewReflectRayZ<=vZ){

					bool hit;
					#ifdef INFINITE_THICK
						hit=true;
					#else
						float away=pointToLineDistance(vP,viewPosition,d1viewPosition);

						float minThickness;
						vec2 xyNeighbor=xy;
						xyNeighbor.x+=1.;
						vec2 uvNeighbor=xyNeighbor/resolution;
						vec3 vPNeighbor=getViewPosition(uvNeighbor,d,cW);
						minThickness=vPNeighbor.x-vP.x;
						minThickness*=3.;
						float tk=max(minThickness,thickness);

						hit=away<=tk;
					#endif

					if(hit){
						vec3 vN=getViewNormal( uv );
						if(dot(viewReflectDir,vN)>=0.) continue;
						float distance=pointPlaneDistance(vP,viewPosition,viewNormal);
						if(distance>maxDistance) break;
						float op=opacity;
						#ifdef DISTANCE_ATTENUATION
							float ratio=1.-(distance/maxDistance);
							float attenuation=ratio*ratio;
							op=opacity*attenuation;
						#endif
						#ifdef FRESNEL
							float fresnelCoe=(dot(viewIncidentDir,viewReflectDir)+1.)/2.;
							op*=fresnelCoe;
						#endif
						vec4 reflectColor=texture2D(tDiffuse,uv);
						gl_FragColor.xyz=reflectColor.xyz;
						gl_FragColor.a=op;
						break;
					}
				}
			}
		}
	`},x={name:"SSRDepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}

	`,fragmentShader:`

		uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 uv ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, uv ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, uv ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			float d = 1.0 - depth;
			// d=(d-.999)*1000.;
			gl_FragColor = vec4( vec3( d ), 1.0 );

		}

	`},m={name:"SSRBlurShader",uniforms:{tDiffuse:{value:null},resolution:{value:new U},opacity:{value:.5}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}

	`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;
		void main() {
			//reverse engineering from PhotoShop blur filter, then change coefficient

			vec2 texelSize = ( 1.0 / resolution );

			vec4 c=texture2D(tDiffuse,vUv);

			vec2 offset;

			offset=(vec2(-1,0))*texelSize;
			vec4 cl=texture2D(tDiffuse,vUv+offset);

			offset=(vec2(1,0))*texelSize;
			vec4 cr=texture2D(tDiffuse,vUv+offset);

			offset=(vec2(0,-1))*texelSize;
			vec4 cb=texture2D(tDiffuse,vUv+offset);

			offset=(vec2(0,1))*texelSize;
			vec4 ct=texture2D(tDiffuse,vUv+offset);

			// float coeCenter=.5;
			// float coeSide=.125;
			float coeCenter=.2;
			float coeSide=.2;
			float a=c.a*coeCenter+cl.a*coeSide+cr.a*coeSide+cb.a*coeSide+ct.a*coeSide;
			vec3 rgb=(c.rgb*c.a*coeCenter+cl.rgb*cl.a*coeSide+cr.rgb*cr.a*coeSide+cb.rgb*cb.a*coeSide+ct.rgb*ct.a*coeSide)/a;
			gl_FragColor=vec4(rgb,a);

		}
	`};class f extends B{constructor({renderer:e,scene:t,camera:h,width:i,height:s,selects:r,bouncing:u=!1,groundReflector:n}){super(),this.width=i!==void 0?i:512,this.height=s!==void 0?s:512,this.clear=!0,this.renderer=e,this.scene=t,this.camera=h,this.groundReflector=n,this.opacity=c.uniforms.opacity.value,this.output=0,this.maxDistance=c.uniforms.maxDistance.value,this.thickness=c.uniforms.thickness.value,this.tempColor=new D,this._selects=r,this.selective=Array.isArray(this._selects),Object.defineProperty(this,"selects",{get(){return this._selects},set(a){this._selects!==a&&(this._selects=a,Array.isArray(a)?(this.selective=!0,this.ssrMaterial.defines.SELECTIVE=!0,this.ssrMaterial.needsUpdate=!0):(this.selective=!1,this.ssrMaterial.defines.SELECTIVE=!1,this.ssrMaterial.needsUpdate=!0))}}),this._bouncing=u,Object.defineProperty(this,"bouncing",{get(){return this._bouncing},set(a){this._bouncing!==a&&(this._bouncing=a,a?this.ssrMaterial.uniforms.tDiffuse.value=this.prevRenderTarget.texture:this.ssrMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture)}}),this.blur=!0,this._distanceAttenuation=c.defines.DISTANCE_ATTENUATION,Object.defineProperty(this,"distanceAttenuation",{get(){return this._distanceAttenuation},set(a){this._distanceAttenuation!==a&&(this._distanceAttenuation=a,this.ssrMaterial.defines.DISTANCE_ATTENUATION=a,this.ssrMaterial.needsUpdate=!0)}}),this._fresnel=c.defines.FRESNEL,Object.defineProperty(this,"fresnel",{get(){return this._fresnel},set(a){this._fresnel!==a&&(this._fresnel=a,this.ssrMaterial.defines.FRESNEL=a,this.ssrMaterial.needsUpdate=!0)}}),this._infiniteThick=c.defines.INFINITE_THICK,Object.defineProperty(this,"infiniteThick",{get(){return this._infiniteThick},set(a){this._infiniteThick!==a&&(this._infiniteThick=a,this.ssrMaterial.defines.INFINITE_THICK=a,this.ssrMaterial.needsUpdate=!0)}});const d=new k;d.type=F,d.minFilter=o,d.magFilter=o,this.beautyRenderTarget=new v(this.width,this.height,{minFilter:o,magFilter:o,type:y,depthTexture:d,depthBuffer:!0}),this.prevRenderTarget=new v(this.width,this.height,{minFilter:o,magFilter:o}),this.normalRenderTarget=new v(this.width,this.height,{minFilter:o,magFilter:o,type:y}),this.metalnessRenderTarget=new v(this.width,this.height,{minFilter:o,magFilter:o,type:y}),this.ssrRenderTarget=new v(this.width,this.height,{minFilter:o,magFilter:o}),this.blurRenderTarget=this.ssrRenderTarget.clone(),this.blurRenderTarget2=this.ssrRenderTarget.clone(),this.ssrMaterial=new p({defines:Object.assign({},c.defines,{MAX_STEP:Math.sqrt(this.width*this.width+this.height*this.height)}),uniforms:g.clone(c.uniforms),vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:l}),this.ssrMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.ssrMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssrMaterial.defines.SELECTIVE=this.selective,this.ssrMaterial.needsUpdate=!0,this.ssrMaterial.uniforms.tMetalness.value=this.metalnessRenderTarget.texture,this.ssrMaterial.uniforms.tDepth.value=this.beautyRenderTarget.depthTexture,this.ssrMaterial.uniforms.cameraNear.value=this.camera.near,this.ssrMaterial.uniforms.cameraFar.value=this.camera.far,this.ssrMaterial.uniforms.thickness.value=this.thickness,this.ssrMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssrMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssrMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new z,this.normalMaterial.blending=l,this.metalnessOnMaterial=new C({color:"white"}),this.metalnessOffMaterial=new C({color:"black"}),this.blurMaterial=new p({defines:Object.assign({},m.defines),uniforms:g.clone(m.uniforms),vertexShader:m.vertexShader,fragmentShader:m.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.blurMaterial2=new p({defines:Object.assign({},m.defines),uniforms:g.clone(m.uniforms),vertexShader:m.vertexShader,fragmentShader:m.fragmentShader}),this.blurMaterial2.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.blurMaterial2.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new p({defines:Object.assign({},x.defines),uniforms:g.clone(x.uniforms),vertexShader:x.vertexShader,fragmentShader:x.fragmentShader,blending:l}),this.depthRenderMaterial.uniforms.tDepth.value=this.beautyRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new p({uniforms:g.clone(b.uniforms),vertexShader:b.vertexShader,fragmentShader:b.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:E,blendDst:N,blendEquation:_,blendSrcAlpha:E,blendDstAlpha:N,blendEquationAlpha:_}),this.fsQuad=new H(null),this.originalClearColor=new D}dispose(){this.beautyRenderTarget.dispose(),this.prevRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.metalnessRenderTarget.dispose(),this.ssrRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.blurRenderTarget2.dispose(),this.normalMaterial.dispose(),this.metalnessOnMaterial.dispose(),this.metalnessOffMaterial.dispose(),this.blurMaterial.dispose(),this.blurMaterial2.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t){switch(e.setRenderTarget(this.beautyRenderTarget),e.clear(),this.groundReflector&&(this.groundReflector.visible=!1,this.groundReflector.doRender(this.renderer,this.scene,this.camera),this.groundReflector.visible=!0),e.render(this.scene,this.camera),this.groundReflector&&(this.groundReflector.visible=!1),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,0,0),this.selective&&this.renderMetalness(e,this.metalnessOnMaterial,this.metalnessRenderTarget,0,0),this.ssrMaterial.uniforms.opacity.value=this.opacity,this.ssrMaterial.uniforms.maxDistance.value=this.maxDistance,this.ssrMaterial.uniforms.thickness.value=this.thickness,this.renderPass(e,this.ssrMaterial,this.ssrRenderTarget),this.blur&&(this.renderPass(e,this.blurMaterial,this.blurRenderTarget),this.renderPass(e,this.blurMaterial2,this.blurRenderTarget2)),this.output){case f.OUTPUT.Default:this.bouncing?(this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=l,this.renderPass(e,this.copyMaterial,this.prevRenderTarget),this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=T,this.renderPass(e,this.copyMaterial,this.prevRenderTarget),this.copyMaterial.uniforms.tDiffuse.value=this.prevRenderTarget.texture,this.copyMaterial.blending=l,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t)):(this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=l,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=T,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t));break;case f.OUTPUT.SSR:this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=l,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.bouncing&&(this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=l,this.renderPass(e,this.copyMaterial,this.prevRenderTarget),this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=T,this.renderPass(e,this.copyMaterial,this.prevRenderTarget));break;case f.OUTPUT.Beauty:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=l,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case f.OUTPUT.Depth:this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case f.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=l,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case f.OUTPUT.Metalness:this.copyMaterial.uniforms.tDiffuse.value=this.metalnessRenderTarget.texture,this.copyMaterial.blending=l,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.SSRPass: Unknown output type.")}}renderPass(e,t,h,i,s){this.originalClearColor.copy(e.getClearColor(this.tempColor));const r=e.getClearAlpha(this.tempColor),u=e.autoClear;e.setRenderTarget(h),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=u,e.setClearColor(this.originalClearColor),e.setClearAlpha(r)}renderOverride(e,t,h,i,s){this.originalClearColor.copy(e.getClearColor(this.tempColor));const r=e.getClearAlpha(this.tempColor),u=e.autoClear;e.setRenderTarget(h),e.autoClear=!1,i=t.clearColor||i,s=t.clearAlpha||s,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=u,e.setClearColor(this.originalClearColor),e.setClearAlpha(r)}renderMetalness(e,t,h,i,s){this.originalClearColor.copy(e.getClearColor(this.tempColor));const r=e.getClearAlpha(this.tempColor),u=e.autoClear;e.setRenderTarget(h),e.autoClear=!1,i=t.clearColor||i,s=t.clearAlpha||s,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.scene.traverseVisible(n=>{n._SSRPassBackupMaterial=n.material,this._selects.includes(n)?n.material=this.metalnessOnMaterial:n.material=this.metalnessOffMaterial}),e.render(this.scene,this.camera),this.scene.traverseVisible(n=>{n.material=n._SSRPassBackupMaterial}),e.autoClear=u,e.setClearColor(this.originalClearColor),e.setClearAlpha(r)}setSize(e,t){this.width=e,this.height=t,this.ssrMaterial.defines.MAX_STEP=Math.sqrt(e*e+t*t),this.ssrMaterial.needsUpdate=!0,this.beautyRenderTarget.setSize(e,t),this.prevRenderTarget.setSize(e,t),this.ssrRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.metalnessRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.blurRenderTarget2.setSize(e,t),this.ssrMaterial.uniforms.resolution.value.set(e,t),this.ssrMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssrMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t),this.blurMaterial2.uniforms.resolution.value.set(e,t)}}f.OUTPUT={Default:0,SSR:1,Beauty:3,Depth:4,Normal:5,Metalness:7};const ee=G({__name:"SsrPass",setup(te){const e=Q();K(()=>{u(e.value)});let t,h,i,s,r;function u(n){i=new O(50,window.innerWidth/window.innerHeight,.1,10000005),i.position.set(.13271600513224902,.3489546826045913,.43921296427927076),s=new V;const d=new A(new j(80,80),new I({color:13355979}));d.rotation.x=-Math.PI/2,s.add(d);const a=new L(16777215,3);s.add(a);let R,w,M;R=new Z(.025,.05,64),w=new I({color:"yellow"}),M=new A(R,w),M.position.set(-.05,.025,-.055),s.add(M),r=new W({antialias:!0}),r.setSize(window.innerWidth,window.innerHeight),n.appendChild(r.domElement),new q(i,r.domElement),t=new X(r),h=new f({renderer:r,scene:s,camera:i,width:innerWidth,height:innerHeight}),t.addPass(h),S();function S(){requestAnimationFrame(S),t.render()}}return(n,d)=>(Y(),J("div",{class:"threeBox",ref_key:"threeBox",ref:e},null,512))}}),re=$(ee,[["__scopeId","data-v-7808ba7d"]]);export{re as default};

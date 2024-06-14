import{S as f,P as u,W as p,A as h,a as x,M as w,B as _,b as y,L as C}from"./three.module-uvJlERpA.js";import{s as P,R as g}from"./threeApi-VrTM92mv.js";import{S,E as B}from"./EffectComposer-OkofIPs6.js";import{d as b,l as k,m as R,c as U,o as L,k as A}from"./index-TD9Aadbh.js";const E=b({__name:"CustomPass",setup(M){const s=k();R(()=>{c(s.value)});function c(a){const t=new f,o=new u(50,a.clientWidth/a.clientHeight,.1,1e5);o.position.set(0,0,10),t.add(o);const e=new p({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});e.setSize(a.clientWidth,a.clientHeight),e.setPixelRatio(window.devicePixelRatio*2),e.setClearColor(16777215),a.appendChild(e.domElement),e.autoClear=!1,P(o,e);const d=new h(5500);t.add(d);const n=new x(16777215,1);t.add(n);const i=new w(new _(1,1,1),new y({color:"yellow"}));t.add(i);const m=new g(t,o);var v=new S({name:"ScreenBlackMaskShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float opacity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;
		void main() {
        float R = 0.2;
        // 阴影颜色
        vec3 maskColor = vec3(0.5, 0.5, 0.5);
                vec4 texel = texture2D( tDiffuse, vUv );
        // 距离中心的距离
        float dist = sqrt((vUv.x-0.5)*(vUv.x-0.5)+(vUv.y-0.5)*(vUv.y-0.5));
        // 渐变, sr 是开始黑色参数
        float sr = 1.2;
        float rr = (sr - smoothstep(R, R + 0.5, dist));
        // 叠加黑色
        texel *= vec4(maskColor * rr, 1.0);
        gl_FragColor = opacity * texel;
		}`});new C().set(1);const r=new B(e);r.addPass(m),r.addPass(v),l();function l(){r.render(),s.value&&requestAnimationFrame(l)}return{camera:o,box:i,light:n}}return(a,t)=>(L(),U("div",{class:"threeBox",ref_key:"threeBox",ref:s},null,512))}}),G=A(E,[["__scopeId","data-v-360902df"]]);export{G as default};

import{S as _,P as g,W as v,A as B,T as x}from"./three.module-B_E_UEtZ.js";import{s as w,j as C,l as E,g as F}from"./threeApi-CUz88pwB.js";import{c as P}from"./GUI-B53Psxen.js";import{d as k,r as u,o as y,n as A,p as H,q as R,y as W,a as X,c as G,z as I,_ as S}from"./index-Dq1wBEHm.js";import"./EffectComposer-CZj5rSvA.js";const U=k({__name:"FBX",setup(b){const c=u(),l=u(!0);y(()=>p(c.value));function p(t){const a=new _,e=new g(50,t.clientWidth/t.clientHeight,.1,1e5);e.position.set(0,0,1e3),a.add(e);const o=new v({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});o.setSize(t.clientWidth,t.clientHeight),o.setPixelRatio(window.devicePixelRatio*2),o.setClearColor(0),t.appendChild(o.domElement);const f=w(e,o),h=new B(5500);a.add(h);const s=P(x,a,e,f);A(()=>s.domElement.hidden=!1),H(()=>s.domElement.hidden=!0),R(()=>s.destroy());const d=C();d.onProgress=(r,i,n)=>i/n===1?l.value=!1:console.log(i/n),E("http://guangfu/resource/chuankuayue.FBX",r=>{a.add(r),F(r).map(n=>n.onBeforeCompile=q=>{})},d),m();function m(){o.render(a,e),requestAnimationFrame(m)}}return(t,a)=>{const e=I("loading");return W((X(),G("div",{class:"threeBox",ref_key:"threeBox",ref:c},null,512)),[[e,l.value]])}}}),J=S(U,[["__scopeId","data-v-134bd701"]]);export{J as default};
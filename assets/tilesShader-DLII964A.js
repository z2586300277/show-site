import{S as g,P as w,W as C,A as E,T as B}from"./three.module-B_E_UEtZ.js";import{s as P,b as S,c as G,h as L,i as R,d as T}from"./threeApi-CUz88pwB.js";import{c as W}from"./GUI-B53Psxen.js";import{l as j,T as A}from"./tilesApi-CBkrWBls.js";import{d as H,l as u,m as I,n as U,p as F,q,o as y,c as z,k as J}from"./index-Bu-AkPZM.js";import"./EffectComposer-CZj5rSvA.js";const K=H({__name:"tilesShader",setup(N){const o=u();u(!0),I(()=>p(o.value));function p(e){const t=new g,s=new w(50,e.clientWidth/e.clientHeight,.1,1e5);t.add(s);const n=new C({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});n.setSize(e.clientWidth,e.clientHeight),n.setPixelRatio(window.devicePixelRatio),e.appendChild(n.domElement);const f=P(s,n),h=new E(5500);t.add(h);const a=W(B,t,s,f);U(()=>a.domElement.hidden=!1),F(()=>a.domElement.hidden=!0),q(()=>a.destroy());const c=j(s,n,"http://guangfu/resource/光伏站/tileset.json",r=>t.add(r),e),{Composer:_,outlinePass:i}=S(t,s,n,e),d=G(),x=T(50);l(),e.addEventListener("dblclick",v);function v(r){const b=L(r),m=R(b,s,t);if(m){const{object:k,face:Q}=m;i.selectedObjects=[k];return}}function l(){x(()=>{d&&d.update(),c&&A(c),n.render(t,s),i.selectedObjects.length>0?_.render():n.render(t,s)}),o.value&&requestAnimationFrame(l)}}return(e,t)=>(y(),z("div",{class:"threeBox",ref_key:"threeBox",ref:o},null,512))}}),O=J(K,[["__scopeId","data-v-f56791ae"]]);export{O as default};
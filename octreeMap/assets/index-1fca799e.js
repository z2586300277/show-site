var Bp=Object.defineProperty;var kp=(i,e,t)=>e in i?Bp(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var de=(i,e,t)=>(kp(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Xl(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const it={},Ar=[],dn=()=>{},Hp=()=>!1,Xo=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),ql=i=>i.startsWith("onUpdate:"),_t=Object.assign,jl=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},zp=Object.prototype.hasOwnProperty,Ze=(i,e)=>zp.call(i,e),Ue=Array.isArray,wr=i=>qo(i)==="[object Map]",ff=i=>qo(i)==="[object Set]",Be=i=>typeof i=="function",vt=i=>typeof i=="string",vi=i=>typeof i=="symbol",at=i=>i!==null&&typeof i=="object",df=i=>(at(i)||Be(i))&&Be(i.then)&&Be(i.catch),pf=Object.prototype.toString,qo=i=>pf.call(i),Vp=i=>qo(i).slice(8,-1),mf=i=>qo(i)==="[object Object]",Yl=i=>vt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,ds=Xl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jo=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Gp=/-(\w)/g,mi=jo(i=>i.replace(Gp,(e,t)=>t?t.toUpperCase():"")),Wp=/\B([A-Z])/g,Zi=jo(i=>i.replace(Wp,"-$1").toLowerCase()),gf=jo(i=>i.charAt(0).toUpperCase()+i.slice(1)),ha=jo(i=>i?`on${gf(i)}`:""),fi=(i,e)=>!Object.is(i,e),fa=(i,...e)=>{for(let t=0;t<i.length;t++)i[t](...e)},_f=(i,e,t,n=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:n,value:t})},Xp=i=>{const e=parseFloat(i);return isNaN(e)?i:e},qp=i=>{const e=vt(i)?Number(i):NaN;return isNaN(e)?i:e};let Hc;const Yo=()=>Hc||(Hc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kl(i){if(Ue(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=vt(n)?$p(n):Kl(n);if(r)for(const s in r)e[s]=r[s]}return e}else if(vt(i)||at(i))return i}const jp=/;(?![^(]*\))/g,Yp=/:([^]+)/,Kp=/\/\*[^]*?\*\//g;function $p(i){const e={};return i.replace(Kp,"").split(jp).forEach(t=>{if(t){const n=t.split(Yp);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function $l(i){let e="";if(vt(i))e=i;else if(Ue(i))for(let t=0;t<i.length;t++){const n=$l(i[t]);n&&(e+=n+" ")}else if(at(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Jp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zp=Xl(Jp);function vf(i){return!!i||i===""}const xf=i=>!!(i&&i.__v_isRef===!0),yf=i=>vt(i)?i:i==null?"":Ue(i)||at(i)&&(i.toString===pf||!Be(i.toString))?xf(i)?yf(i.value):JSON.stringify(i,Sf,2):String(i),Sf=(i,e)=>xf(e)?Sf(i,e.value):wr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r],s)=>(t[da(n,s)+" =>"]=r,t),{})}:ff(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>da(t))}:vi(e)?da(e):at(e)&&!Ue(e)&&!mf(e)?String(e):e,da=(i,e="")=>{var t;return vi(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yt;class Qp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Yt,!e&&Yt&&(this.index=(Yt.scopes||(Yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Yt;try{return Yt=this,e()}finally{Yt=t}}}on(){Yt=this}off(){Yt=this.parent}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function em(){return Yt}let st;const pa=new WeakSet;class Mf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Yt&&Yt.active&&Yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,pa.has(this)&&(pa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ef(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,zc(this),bf(this);const e=st,t=pn;st=this,pn=!0;try{return this.fn()}finally{Af(this),st=e,pn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ql(e);this.deps=this.depsTail=void 0,zc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?pa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ml(this)&&this.run()}get dirty(){return ml(this)}}let Tf=0,ps,ms;function Ef(i,e=!1){if(i.flags|=8,e){i.next=ms,ms=i;return}i.next=ps,ps=i}function Jl(){Tf++}function Zl(){if(--Tf>0)return;if(ms){let e=ms;for(ms=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let i;for(;ps;){let e=ps;for(ps=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){i||(i=n)}e=t}}if(i)throw i}function bf(i){for(let e=i.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Af(i){let e,t=i.depsTail,n=t;for(;n;){const r=n.prevDep;n.version===-1?(n===t&&(t=r),Ql(n),tm(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}i.deps=e,i.depsTail=t}function ml(i){for(let e=i.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(wf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!i._dirty}function wf(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===bs))return;i.globalVersion=bs;const e=i.dep;if(i.flags|=2,e.version>0&&!i.isSSR&&i.deps&&!ml(i)){i.flags&=-3;return}const t=st,n=pn;st=i,pn=!0;try{bf(i);const r=i.fn(i._value);(e.version===0||fi(r,i._value))&&(i._value=r,e.version++)}catch(r){throw e.version++,r}finally{st=t,pn=n,Af(i),i.flags&=-3}}function Ql(i,e=!1){const{dep:t,prevSub:n,nextSub:r}=i;if(n&&(n.nextSub=r,i.prevSub=void 0),r&&(r.prevSub=n,i.nextSub=void 0),t.subs===i&&(t.subs=n,!n&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Ql(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function tm(i){const{prevDep:e,nextDep:t}=i;e&&(e.nextDep=t,i.prevDep=void 0),t&&(t.prevDep=e,i.nextDep=void 0)}let pn=!0;const Rf=[];function xi(){Rf.push(pn),pn=!1}function yi(){const i=Rf.pop();pn=i===void 0?!0:i}function zc(i){const{cleanup:e}=i;if(i.cleanup=void 0,e){const t=st;st=void 0;try{e()}finally{st=t}}}let bs=0;class nm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ec{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!st||!pn||st===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==st)t=this.activeLink=new nm(st,this),st.deps?(t.prevDep=st.depsTail,st.depsTail.nextDep=t,st.depsTail=t):st.deps=st.depsTail=t,Cf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const n=t.nextDep;n.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=n),t.prevDep=st.depsTail,t.nextDep=void 0,st.depsTail.nextDep=t,st.depsTail=t,st.deps===t&&(st.deps=n)}return t}trigger(e){this.version++,bs++,this.notify(e)}notify(e){Jl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Zl()}}}function Cf(i){if(i.dep.sc++,i.sub.flags&4){const e=i.dep.computed;if(e&&!i.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)Cf(n)}const t=i.dep.subs;t!==i&&(i.prevSub=t,t&&(t.nextSub=i)),i.dep.subs=i}}const gl=new WeakMap,Gi=Symbol(""),_l=Symbol(""),As=Symbol("");function Rt(i,e,t){if(pn&&st){let n=gl.get(i);n||gl.set(i,n=new Map);let r=n.get(t);r||(n.set(t,r=new ec),r.map=n,r.key=t),r.track()}}function Wn(i,e,t,n,r,s){const o=gl.get(i);if(!o){bs++;return}const a=c=>{c&&c.trigger()};if(Jl(),e==="clear")o.forEach(a);else{const c=Ue(i),u=c&&Yl(t);if(c&&t==="length"){const f=Number(n);o.forEach((l,h)=>{(h==="length"||h===As||!vi(h)&&h>=f)&&a(l)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(As)),e){case"add":c?u&&a(o.get("length")):(a(o.get(Gi)),wr(i)&&a(o.get(_l)));break;case"delete":c||(a(o.get(Gi)),wr(i)&&a(o.get(_l)));break;case"set":wr(i)&&a(o.get(Gi));break}}Zl()}function Qi(i){const e=Je(i);return e===i?e:(Rt(e,"iterate",As),mn(i)?e:e.map(Ot))}function tc(i){return Rt(i=Je(i),"iterate",As),i}const im={__proto__:null,[Symbol.iterator](){return ma(this,Symbol.iterator,Ot)},concat(...i){return Qi(this).concat(...i.map(e=>Ue(e)?Qi(e):e))},entries(){return ma(this,"entries",i=>(i[1]=Ot(i[1]),i))},every(i,e){return Nn(this,"every",i,e,void 0,arguments)},filter(i,e){return Nn(this,"filter",i,e,t=>t.map(Ot),arguments)},find(i,e){return Nn(this,"find",i,e,Ot,arguments)},findIndex(i,e){return Nn(this,"findIndex",i,e,void 0,arguments)},findLast(i,e){return Nn(this,"findLast",i,e,Ot,arguments)},findLastIndex(i,e){return Nn(this,"findLastIndex",i,e,void 0,arguments)},forEach(i,e){return Nn(this,"forEach",i,e,void 0,arguments)},includes(...i){return ga(this,"includes",i)},indexOf(...i){return ga(this,"indexOf",i)},join(i){return Qi(this).join(i)},lastIndexOf(...i){return ga(this,"lastIndexOf",i)},map(i,e){return Nn(this,"map",i,e,void 0,arguments)},pop(){return Jr(this,"pop")},push(...i){return Jr(this,"push",i)},reduce(i,...e){return Vc(this,"reduce",i,e)},reduceRight(i,...e){return Vc(this,"reduceRight",i,e)},shift(){return Jr(this,"shift")},some(i,e){return Nn(this,"some",i,e,void 0,arguments)},splice(...i){return Jr(this,"splice",i)},toReversed(){return Qi(this).toReversed()},toSorted(i){return Qi(this).toSorted(i)},toSpliced(...i){return Qi(this).toSpliced(...i)},unshift(...i){return Jr(this,"unshift",i)},values(){return ma(this,"values",Ot)}};function ma(i,e,t){const n=tc(i),r=n[e]();return n!==i&&!mn(i)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const rm=Array.prototype;function Nn(i,e,t,n,r,s){const o=tc(i),a=o!==i&&!mn(i),c=o[e];if(c!==rm[e]){const l=c.apply(i,s);return a?Ot(l):l}let u=t;o!==i&&(a?u=function(l,h){return t.call(this,Ot(l),h,i)}:t.length>2&&(u=function(l,h){return t.call(this,l,h,i)}));const f=c.call(o,u,n);return a&&r?r(f):f}function Vc(i,e,t,n){const r=tc(i);let s=t;return r!==i&&(mn(i)?t.length>3&&(s=function(o,a,c){return t.call(this,o,a,c,i)}):s=function(o,a,c){return t.call(this,o,Ot(a),c,i)}),r[e](s,...n)}function ga(i,e,t){const n=Je(i);Rt(n,"iterate",As);const r=n[e](...t);return(r===-1||r===!1)&&sc(t[0])?(t[0]=Je(t[0]),n[e](...t)):r}function Jr(i,e,t=[]){xi(),Jl();const n=Je(i)[e].apply(i,t);return Zl(),yi(),n}const sm=Xl("__proto__,__v_isRef,__isVue"),Lf=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(vi));function om(i){vi(i)||(i=String(i));const e=Je(this);return Rt(e,"has",i),e.hasOwnProperty(i)}class Pf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return n===(r?s?gm:Uf:s?Nf:Df).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=Ue(e);if(!r){let c;if(o&&(c=im[t]))return c;if(t==="hasOwnProperty")return om}const a=Reflect.get(e,t,Lt(e)?e:n);return(vi(t)?Lf.has(t):sm(t))||(r||Rt(e,"get",t),s)?a:Lt(a)?o&&Yl(t)?a:a.value:at(a)?r?Of(a):ic(a):a}}class If extends Pf{constructor(e=!1){super(!1,e)}set(e,t,n,r){let s=e[t];if(!this._isShallow){const c=Yi(s);if(!mn(n)&&!Yi(n)&&(s=Je(s),n=Je(n)),!Ue(e)&&Lt(s)&&!Lt(n))return c?!1:(s.value=n,!0)}const o=Ue(e)&&Yl(t)?Number(t)<e.length:Ze(e,t),a=Reflect.set(e,t,n,Lt(e)?e:r);return e===Je(r)&&(o?fi(n,s)&&Wn(e,"set",t,n):Wn(e,"add",t,n)),a}deleteProperty(e,t){const n=Ze(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Wn(e,"delete",t,void 0),r}has(e,t){const n=Reflect.has(e,t);return(!vi(t)||!Lf.has(t))&&Rt(e,"has",t),n}ownKeys(e){return Rt(e,"iterate",Ue(e)?"length":Gi),Reflect.ownKeys(e)}}class am extends Pf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const lm=new If,cm=new am,um=new If(!0);const vl=i=>i,Xs=i=>Reflect.getPrototypeOf(i);function hm(i,e,t){return function(...n){const r=this.__v_raw,s=Je(r),o=wr(s),a=i==="entries"||i===Symbol.iterator&&o,c=i==="keys"&&o,u=r[i](...n),f=t?vl:e?xl:Ot;return!e&&Rt(s,"iterate",c?_l:Gi),{next(){const{value:l,done:h}=u.next();return h?{value:l,done:h}:{value:a?[f(l[0]),f(l[1])]:f(l),done:h}},[Symbol.iterator](){return this}}}}function qs(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function fm(i,e){const t={get(r){const s=this.__v_raw,o=Je(s),a=Je(r);i||(fi(r,a)&&Rt(o,"get",r),Rt(o,"get",a));const{has:c}=Xs(o),u=e?vl:i?xl:Ot;if(c.call(o,r))return u(s.get(r));if(c.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!i&&Rt(Je(r),"iterate",Gi),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=Je(s),a=Je(r);return i||(fi(r,a)&&Rt(o,"has",r),Rt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,c=Je(a),u=e?vl:i?xl:Ot;return!i&&Rt(c,"iterate",Gi),a.forEach((f,l)=>r.call(s,u(f),u(l),o))}};return _t(t,i?{add:qs("add"),set:qs("set"),delete:qs("delete"),clear:qs("clear")}:{add(r){!e&&!mn(r)&&!Yi(r)&&(r=Je(r));const s=Je(this);return Xs(s).has.call(s,r)||(s.add(r),Wn(s,"add",r,r)),this},set(r,s){!e&&!mn(s)&&!Yi(s)&&(s=Je(s));const o=Je(this),{has:a,get:c}=Xs(o);let u=a.call(o,r);u||(r=Je(r),u=a.call(o,r));const f=c.call(o,r);return o.set(r,s),u?fi(s,f)&&Wn(o,"set",r,s):Wn(o,"add",r,s),this},delete(r){const s=Je(this),{has:o,get:a}=Xs(s);let c=o.call(s,r);c||(r=Je(r),c=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return c&&Wn(s,"delete",r,void 0),u},clear(){const r=Je(this),s=r.size!==0,o=r.clear();return s&&Wn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=hm(r,i,e)}),t}function nc(i,e){const t=fm(i,e);return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(Ze(t,r)&&r in n?t:n,r,s)}const dm={get:nc(!1,!1)},pm={get:nc(!1,!0)},mm={get:nc(!0,!1)};const Df=new WeakMap,Nf=new WeakMap,Uf=new WeakMap,gm=new WeakMap;function _m(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vm(i){return i.__v_skip||!Object.isExtensible(i)?0:_m(Vp(i))}function ic(i){return Yi(i)?i:rc(i,!1,lm,dm,Df)}function xm(i){return rc(i,!1,um,pm,Nf)}function Of(i){return rc(i,!0,cm,mm,Uf)}function rc(i,e,t,n,r){if(!at(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=vm(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function gs(i){return Yi(i)?gs(i.__v_raw):!!(i&&i.__v_isReactive)}function Yi(i){return!!(i&&i.__v_isReadonly)}function mn(i){return!!(i&&i.__v_isShallow)}function sc(i){return i?!!i.__v_raw:!1}function Je(i){const e=i&&i.__v_raw;return e?Je(e):i}function ym(i){return!Ze(i,"__v_skip")&&Object.isExtensible(i)&&_f(i,"__v_skip",!0),i}const Ot=i=>at(i)?ic(i):i,xl=i=>at(i)?Of(i):i;function Lt(i){return i?i.__v_isRef===!0:!1}function Hi(i){return Sm(i,!1)}function Sm(i,e){return Lt(i)?i:new Mm(i,e)}class Mm{constructor(e,t){this.dep=new ec,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Je(e),this._value=t?e:Ot(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this.__v_isShallow||mn(e)||Yi(e);e=n?e:Je(e),fi(e,t)&&(this._rawValue=e,this._value=n?e:Ot(e),this.dep.trigger())}}function Tm(i){return Lt(i)?i.value:i}const Em={get:(i,e,t)=>e==="__v_raw"?i:Tm(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return Lt(r)&&!Lt(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function Ff(i){return gs(i)?i:new Proxy(i,Em)}class bm{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ec(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=bs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&st!==this)return Ef(this,!0),!0}get value(){const e=this.dep.track();return wf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Am(i,e,t=!1){let n,r;return Be(i)?n=i:(n=i.get,r=i.set),new bm(n,r,t)}const js={},Po=new WeakMap;let Oi;function wm(i,e=!1,t=Oi){if(t){let n=Po.get(t);n||Po.set(t,n=[]),n.push(i)}}function Rm(i,e,t=it){const{immediate:n,deep:r,once:s,scheduler:o,augmentJob:a,call:c}=t,u=M=>r?M:mn(M)||r===!1||r===0?Xn(M,1):Xn(M);let f,l,h,d,m=!1,_=!1;if(Lt(i)?(l=()=>i.value,m=mn(i)):gs(i)?(l=()=>u(i),m=!0):Ue(i)?(_=!0,m=i.some(M=>gs(M)||mn(M)),l=()=>i.map(M=>{if(Lt(M))return M.value;if(gs(M))return u(M);if(Be(M))return c?c(M,2):M()})):Be(i)?e?l=c?()=>c(i,2):i:l=()=>{if(h){xi();try{h()}finally{yi()}}const M=Oi;Oi=f;try{return c?c(i,3,[d]):i(d)}finally{Oi=M}}:l=dn,e&&r){const M=l,b=r===!0?1/0:r;l=()=>Xn(M(),b)}const g=em(),p=()=>{f.stop(),g&&g.active&&jl(g.effects,f)};if(s&&e){const M=e;e=(...b)=>{M(...b),p()}}let y=_?new Array(i.length).fill(js):js;const v=M=>{if(!(!(f.flags&1)||!f.dirty&&!M))if(e){const b=f.run();if(r||m||(_?b.some((w,I)=>fi(w,y[I])):fi(b,y))){h&&h();const w=Oi;Oi=f;try{const I=[b,y===js?void 0:_&&y[0]===js?[]:y,d];c?c(e,3,I):e(...I),y=b}finally{Oi=w}}}else f.run()};return a&&a(v),f=new Mf(l),f.scheduler=o?()=>o(v,!1):v,d=M=>wm(M,!1,f),h=f.onStop=()=>{const M=Po.get(f);if(M){if(c)c(M,4);else for(const b of M)b();Po.delete(f)}},e?n?v(!0):y=f.run():o?o(v.bind(null,!0),!0):f.run(),p.pause=f.pause.bind(f),p.resume=f.resume.bind(f),p.stop=p,p}function Xn(i,e=1/0,t){if(e<=0||!at(i)||i.__v_skip||(t=t||new Set,t.has(i)))return i;if(t.add(i),e--,Lt(i))Xn(i.value,e,t);else if(Ue(i))for(let n=0;n<i.length;n++)Xn(i[n],e,t);else if(ff(i)||wr(i))i.forEach(n=>{Xn(n,e,t)});else if(mf(i)){for(const n in i)Xn(i[n],e,t);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&Xn(i[n],e,t)}return i}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bs(i,e,t,n){try{return n?i(...n):i()}catch(r){Ko(r,e,t)}}function xn(i,e,t,n){if(Be(i)){const r=Bs(i,e,t,n);return r&&df(r)&&r.catch(s=>{Ko(s,e,t)}),r}if(Ue(i)){const r=[];for(let s=0;s<i.length;s++)r.push(xn(i[s],e,t,n));return r}}function Ko(i,e,t,n=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||it;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const f=a.ec;if(f){for(let l=0;l<f.length;l++)if(f[l](i,c,u)===!1)return}a=a.parent}if(s){xi(),Bs(s,null,10,[i,c,u]),yi();return}}Cm(i,t,r,n,o)}function Cm(i,e,t,n=!0,r=!1){if(r)throw i;console.error(i)}const Ft=[];let An=-1;const Rr=[];let si=null,yr=0;const Bf=Promise.resolve();let Io=null;function Lm(i){const e=Io||Bf;return i?e.then(this?i.bind(this):i):e}function Pm(i){let e=An+1,t=Ft.length;for(;e<t;){const n=e+t>>>1,r=Ft[n],s=ws(r);s<i||s===i&&r.flags&2?e=n+1:t=n}return e}function oc(i){if(!(i.flags&1)){const e=ws(i),t=Ft[Ft.length-1];!t||!(i.flags&2)&&e>=ws(t)?Ft.push(i):Ft.splice(Pm(e),0,i),i.flags|=1,kf()}}function kf(){Io||(Io=Bf.then(zf))}function Im(i){Ue(i)?Rr.push(...i):si&&i.id===-1?si.splice(yr+1,0,i):i.flags&1||(Rr.push(i),i.flags|=1),kf()}function Gc(i,e,t=An+1){for(;t<Ft.length;t++){const n=Ft[t];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;Ft.splice(t,1),t--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Hf(i){if(Rr.length){const e=[...new Set(Rr)].sort((t,n)=>ws(t)-ws(n));if(Rr.length=0,si){si.push(...e);return}for(si=e,yr=0;yr<si.length;yr++){const t=si[yr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}si=null,yr=0}}const ws=i=>i.id==null?i.flags&2?-1:1/0:i.id;function zf(i){const e=dn;try{for(An=0;An<Ft.length;An++){const t=Ft[An];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Bs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;An<Ft.length;An++){const t=Ft[An];t&&(t.flags&=-2)}An=-1,Ft.length=0,Hf(),Io=null,(Ft.length||Rr.length)&&zf()}}let Kt=null,Vf=null;function Do(i){const e=Kt;return Kt=i,Vf=i&&i.type.__scopeId||null,e}function Eo(i,e=Kt,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&Zc(-1);const s=Do(e);let o;try{o=i(...r)}finally{Do(s),n._d&&Zc(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Cr(i,e){if(Kt===null)return i;const t=ta(Kt),n=i.dirs||(i.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,c=it]=e[r];s&&(Be(s)&&(s={mounted:s,updated:s}),s.deep&&Xn(o),n.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:c}))}return i}function wi(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let c=a.dir[n];c&&(xi(),xn(c,t,8,[i.el,a,i,e]),yi())}}const Dm=Symbol("_vte"),Gf=i=>i.__isTeleport,oi=Symbol("_leaveCb"),Ys=Symbol("_enterCb");function Nm(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Zo(()=>{i.isMounted=!0}),Zf(()=>{i.isUnmounting=!0}),i}const Jt=[Function,Array],Wf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Jt,onEnter:Jt,onAfterEnter:Jt,onEnterCancelled:Jt,onBeforeLeave:Jt,onLeave:Jt,onAfterLeave:Jt,onLeaveCancelled:Jt,onBeforeAppear:Jt,onAppear:Jt,onAfterAppear:Jt,onAppearCancelled:Jt},Xf=i=>{const e=i.subTree;return e.component?Xf(e.component):e},Um={name:"BaseTransition",props:Wf,setup(i,{slots:e}){const t=Dg(),n=Nm();return()=>{const r=e.default&&Yf(e.default(),!0);if(!r||!r.length)return;const s=qf(r),o=Je(i),{mode:a}=o;if(n.isLeaving)return _a(s);const c=Wc(s);if(!c)return _a(s);let u=yl(c,o,n,t,l=>u=l);c.type!==tn&&Rs(c,u);let f=t.subTree&&Wc(t.subTree);if(f&&f.type!==tn&&!Bi(c,f)&&Xf(t).type!==tn){let l=yl(f,o,n,t);if(Rs(f,l),a==="out-in"&&c.type!==tn)return n.isLeaving=!0,l.afterLeave=()=>{n.isLeaving=!1,t.job.flags&8||t.update(),delete l.afterLeave,f=void 0},_a(s);a==="in-out"&&c.type!==tn?l.delayLeave=(h,d,m)=>{const _=jf(n,f);_[String(f.key)]=f,h[oi]=()=>{d(),h[oi]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{m(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return s}}};function qf(i){let e=i[0];if(i.length>1){for(const t of i)if(t.type!==tn){e=t;break}}return e}const Om=Um;function jf(i,e){const{leavingVNodes:t}=i;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function yl(i,e,t,n,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:f,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:g,onAppear:p,onAfterAppear:y,onAppearCancelled:v}=e,M=String(i.key),b=jf(t,i),w=(S,A)=>{S&&xn(S,n,9,A)},I=(S,A)=>{const Y=A[1];w(S,A),Ue(S)?S.every(z=>z.length<=1)&&Y():S.length<=1&&Y()},U={mode:o,persisted:a,beforeEnter(S){let A=c;if(!t.isMounted)if(s)A=g||c;else return;S[oi]&&S[oi](!0);const Y=b[M];Y&&Bi(i,Y)&&Y.el[oi]&&Y.el[oi](),w(A,[S])},enter(S){let A=u,Y=f,z=l;if(!t.isMounted)if(s)A=p||u,Y=y||f,z=v||l;else return;let H=!1;const q=S[Ys]=O=>{H||(H=!0,O?w(z,[S]):w(Y,[S]),U.delayedLeave&&U.delayedLeave(),S[Ys]=void 0)};A?I(A,[S,q]):q()},leave(S,A){const Y=String(i.key);if(S[Ys]&&S[Ys](!0),t.isUnmounting)return A();w(h,[S]);let z=!1;const H=S[oi]=q=>{z||(z=!0,A(),q?w(_,[S]):w(m,[S]),S[oi]=void 0,b[Y]===i&&delete b[Y])};b[Y]=i,d?I(d,[S,H]):H()},clone(S){const A=yl(S,e,t,n,r);return r&&r(A),A}};return U}function _a(i){if($o(i))return i=gi(i),i.children=null,i}function Wc(i){if(!$o(i))return Gf(i.type)&&i.children?qf(i.children):i;const{shapeFlag:e,children:t}=i;if(t){if(e&16)return t[0];if(e&32&&Be(t.default))return t.default()}}function Rs(i,e){i.shapeFlag&6&&i.component?(i.transition=e,Rs(i.component.subTree,e)):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function Yf(i,e=!1,t){let n=[],r=0;for(let s=0;s<i.length;s++){let o=i[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===fn?(o.patchFlag&128&&r++,n=n.concat(Yf(o.children,e,a))):(e||o.type!==tn)&&n.push(a!=null?gi(o,{key:a}):o)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}/*! #__NO_SIDE_EFFECTS__ */function Kf(i,e){return Be(i)?(()=>_t({name:i.name},e,{setup:i}))():i}function $f(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function No(i,e,t,n,r=!1){if(Ue(i)){i.forEach((m,_)=>No(m,e&&(Ue(e)?e[_]:e),t,n,r));return}if(_s(n)&&!r){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&No(i,e,t,n.component.subTree);return}const s=n.shapeFlag&4?ta(n.component):n.el,o=r?null:s,{i:a,r:c}=i,u=e&&e.r,f=a.refs===it?a.refs={}:a.refs,l=a.setupState,h=Je(l),d=l===it?()=>!1:m=>Ze(h,m);if(u!=null&&u!==c&&(vt(u)?(f[u]=null,d(u)&&(l[u]=null)):Lt(u)&&(u.value=null)),Be(c))Bs(c,a,12,[o,f]);else{const m=vt(c),_=Lt(c);if(m||_){const g=()=>{if(i.f){const p=m?d(c)?l[c]:f[c]:c.value;r?Ue(p)&&jl(p,s):Ue(p)?p.includes(s)||p.push(s):m?(f[c]=[s],d(c)&&(l[c]=f[c])):(c.value=[s],i.k&&(f[i.k]=c.value))}else m?(f[c]=o,d(c)&&(l[c]=o)):_&&(c.value=o,i.k&&(f[i.k]=o))};o?(g.id=-1,jt(g,t)):g()}}}Yo().requestIdleCallback;Yo().cancelIdleCallback;const _s=i=>!!i.type.__asyncLoader,$o=i=>i.type.__isKeepAlive;function Fm(i,e){Jf(i,"a",e)}function Bm(i,e){Jf(i,"da",e)}function Jf(i,e,t=Ct){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(Jo(e,n,t),t){let r=t.parent;for(;r&&r.parent;)$o(r.parent.vnode)&&km(n,e,t,r),r=r.parent}}function km(i,e,t,n){const r=Jo(e,i,n,!0);Qf(()=>{jl(n[e],r)},t)}function Jo(i,e,t=Ct,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{xi();const a=ks(t),c=xn(e,t,i,o);return a(),yi(),c});return n?r.unshift(s):r.push(s),s}}const Jn=i=>(e,t=Ct)=>{(!Ls||i==="sp")&&Jo(i,(...n)=>e(...n),t)},Hm=Jn("bm"),Zo=Jn("m"),zm=Jn("bu"),Vm=Jn("u"),Zf=Jn("bum"),Qf=Jn("um"),Gm=Jn("sp"),Wm=Jn("rtg"),Xm=Jn("rtc");function qm(i,e=Ct){Jo("ec",i,e)}const jm=Symbol.for("v-ndc"),Sl=i=>i?yd(i)?ta(i):Sl(i.parent):null,vs=_t(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Sl(i.parent),$root:i=>Sl(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>ac(i),$forceUpdate:i=>i.f||(i.f=()=>{oc(i.update)}),$nextTick:i=>i.n||(i.n=Lm.bind(i.proxy)),$watch:i=>mg.bind(i)}),va=(i,e)=>i!==it&&!i.__isScriptSetup&&Ze(i,e),Ym={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:c}=i;let u;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(va(n,e))return o[e]=1,n[e];if(r!==it&&Ze(r,e))return o[e]=2,r[e];if((u=i.propsOptions[0])&&Ze(u,e))return o[e]=3,s[e];if(t!==it&&Ze(t,e))return o[e]=4,t[e];Ml&&(o[e]=0)}}const f=vs[e];let l,h;if(f)return e==="$attrs"&&Rt(i.attrs,"get",""),f(i);if((l=a.__cssModules)&&(l=l[e]))return l;if(t!==it&&Ze(t,e))return o[e]=4,t[e];if(h=c.config.globalProperties,Ze(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return va(r,e)?(r[e]=t,!0):n!==it&&Ze(n,e)?(n[e]=t,!0):Ze(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==it&&Ze(i,o)||va(e,o)||(a=s[0])&&Ze(a,o)||Ze(n,o)||Ze(vs,o)||Ze(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Ze(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function Xc(i){return Ue(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let Ml=!0;function Km(i){const e=ac(i),t=i.proxy,n=i.ctx;Ml=!1,e.beforeCreate&&qc(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:c,inject:u,created:f,beforeMount:l,mounted:h,beforeUpdate:d,updated:m,activated:_,deactivated:g,beforeDestroy:p,beforeUnmount:y,destroyed:v,unmounted:M,render:b,renderTracked:w,renderTriggered:I,errorCaptured:U,serverPrefetch:S,expose:A,inheritAttrs:Y,components:z,directives:H,filters:q}=e;if(u&&$m(u,n,null),o)for(const k in o){const B=o[k];Be(B)&&(n[k]=B.bind(t))}if(r){const k=r.call(t,t);at(k)&&(i.data=ic(k))}if(Ml=!0,s)for(const k in s){const B=s[k],oe=Be(B)?B.bind(t,t):Be(B.get)?B.get.bind(t,t):dn,P=!Be(B)&&Be(B.set)?B.set.bind(t):dn,Se=kg({get:oe,set:P});Object.defineProperty(n,k,{enumerable:!0,configurable:!0,get:()=>Se.value,set:D=>Se.value=D})}if(a)for(const k in a)ed(a[k],n,t,k);if(c){const k=Be(c)?c.call(t):c;Reflect.ownKeys(k).forEach(B=>{ng(B,k[B])})}f&&qc(f,i,"c");function G(k,B){Ue(B)?B.forEach(oe=>k(oe.bind(t))):B&&k(B.bind(t))}if(G(Hm,l),G(Zo,h),G(zm,d),G(Vm,m),G(Fm,_),G(Bm,g),G(qm,U),G(Xm,w),G(Wm,I),G(Zf,y),G(Qf,M),G(Gm,S),Ue(A))if(A.length){const k=i.exposed||(i.exposed={});A.forEach(B=>{Object.defineProperty(k,B,{get:()=>t[B],set:oe=>t[B]=oe})})}else i.exposed||(i.exposed={});b&&i.render===dn&&(i.render=b),Y!=null&&(i.inheritAttrs=Y),z&&(i.components=z),H&&(i.directives=H),S&&$f(i)}function $m(i,e,t=dn){Ue(i)&&(i=Tl(i));for(const n in i){const r=i[n];let s;at(r)?"default"in r?s=bo(r.from||n,r.default,!0):s=bo(r.from||n):s=bo(r),Lt(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[n]=s}}function qc(i,e,t){xn(Ue(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function ed(i,e,t,n){let r=n.includes(".")?pd(t,n):()=>t[n];if(vt(i)){const s=e[i];Be(s)&&ya(r,s)}else if(Be(i))ya(r,i.bind(t));else if(at(i))if(Ue(i))i.forEach(s=>ed(s,e,t,n));else{const s=Be(i.handler)?i.handler.bind(t):e[i.handler];Be(s)&&ya(r,s,i)}}function ac(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let c;return a?c=a:!r.length&&!t&&!n?c=e:(c={},r.length&&r.forEach(u=>Uo(c,u,o,!0)),Uo(c,e,o)),at(e)&&s.set(e,c),c}function Uo(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&Uo(i,s,t,!0),r&&r.forEach(o=>Uo(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=Jm[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const Jm={data:jc,props:Yc,emits:Yc,methods:hs,computed:hs,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:hs,directives:hs,watch:Qm,provide:jc,inject:Zm};function jc(i,e){return e?i?function(){return _t(Be(i)?i.call(this,this):i,Be(e)?e.call(this,this):e)}:e:i}function Zm(i,e){return hs(Tl(i),Tl(e))}function Tl(i){if(Ue(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Nt(i,e){return i?[...new Set([].concat(i,e))]:e}function hs(i,e){return i?_t(Object.create(null),i,e):e}function Yc(i,e){return i?Ue(i)&&Ue(e)?[...new Set([...i,...e])]:_t(Object.create(null),Xc(i),Xc(e??{})):e}function Qm(i,e){if(!i)return e;if(!e)return i;const t=_t(Object.create(null),i);for(const n in e)t[n]=Nt(i[n],e[n]);return t}function td(){return{app:null,config:{isNativeTag:Hp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let eg=0;function tg(i,e){return function(n,r=null){Be(n)||(n=_t({},n)),r!=null&&!at(r)&&(r=null);const s=td(),o=new WeakSet,a=[];let c=!1;const u=s.app={_uid:eg++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:zg,get config(){return s.config},set config(f){},use(f,...l){return o.has(f)||(f&&Be(f.install)?(o.add(f),f.install(u,...l)):Be(f)&&(o.add(f),f(u,...l))),u},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),u},component(f,l){return l?(s.components[f]=l,u):s.components[f]},directive(f,l){return l?(s.directives[f]=l,u):s.directives[f]},mount(f,l,h){if(!c){const d=u._ceVNode||kt(n,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),l&&e?e(d,f):i(d,f,h),c=!0,u._container=f,f.__vue_app__=u,ta(d.component)}},onUnmount(f){a.push(f)},unmount(){c&&(xn(a,u._instance,16),i(null,u._container),delete u._container.__vue_app__)},provide(f,l){return s.provides[f]=l,u},runWithContext(f){const l=Lr;Lr=u;try{return f()}finally{Lr=l}}};return u}}let Lr=null;function ng(i,e){if(Ct){let t=Ct.provides;const n=Ct.parent&&Ct.parent.provides;n===t&&(t=Ct.provides=Object.create(n)),t[i]=e}}function bo(i,e,t=!1){const n=Ct||Kt;if(n||Lr){const r=Lr?Lr._context.provides:n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&i in r)return r[i];if(arguments.length>1)return t&&Be(e)?e.call(n&&n.proxy):e}}const nd={},id=()=>Object.create(nd),rd=i=>Object.getPrototypeOf(i)===nd;function ig(i,e,t,n=!1){const r={},s=id();i.propsDefaults=Object.create(null),sd(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:xm(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function rg(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=Je(r),[c]=i.propsOptions;let u=!1;if((n||o>0)&&!(o&16)){if(o&8){const f=i.vnode.dynamicProps;for(let l=0;l<f.length;l++){let h=f[l];if(Qo(i.emitsOptions,h))continue;const d=e[h];if(c)if(Ze(s,h))d!==s[h]&&(s[h]=d,u=!0);else{const m=mi(h);r[m]=El(c,a,m,d,i,!1)}else d!==s[h]&&(s[h]=d,u=!0)}}}else{sd(i,e,r,s)&&(u=!0);let f;for(const l in a)(!e||!Ze(e,l)&&((f=Zi(l))===l||!Ze(e,f)))&&(c?t&&(t[l]!==void 0||t[f]!==void 0)&&(r[l]=El(c,a,l,void 0,i,!0)):delete r[l]);if(s!==a)for(const l in s)(!e||!Ze(e,l))&&(delete s[l],u=!0)}u&&Wn(i.attrs,"set","")}function sd(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let c in e){if(ds(c))continue;const u=e[c];let f;r&&Ze(r,f=mi(c))?!s||!s.includes(f)?t[f]=u:(a||(a={}))[f]=u:Qo(i.emitsOptions,c)||(!(c in n)||u!==n[c])&&(n[c]=u,o=!0)}if(s){const c=Je(t),u=a||it;for(let f=0;f<s.length;f++){const l=s[f];t[l]=El(r,c,l,u[l],i,!Ze(u,l))}}return o}function El(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=Ze(o,"default");if(a&&n===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Be(c)){const{propsDefaults:u}=r;if(t in u)n=u[t];else{const f=ks(r);n=u[t]=c.call(null,e),f()}}else n=c;r.ce&&r.ce._setProp(t,n)}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===Zi(t))&&(n=!0))}return n}const sg=new WeakMap;function od(i,e,t=!1){const n=t?sg:e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let c=!1;if(!Be(i)){const f=l=>{c=!0;const[h,d]=od(l,e,!0);_t(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(f),i.extends&&f(i.extends),i.mixins&&i.mixins.forEach(f)}if(!s&&!c)return at(i)&&n.set(i,Ar),Ar;if(Ue(s))for(let f=0;f<s.length;f++){const l=mi(s[f]);Kc(l)&&(o[l]=it)}else if(s)for(const f in s){const l=mi(f);if(Kc(l)){const h=s[f],d=o[l]=Ue(h)||Be(h)?{type:h}:_t({},h),m=d.type;let _=!1,g=!0;if(Ue(m))for(let p=0;p<m.length;++p){const y=m[p],v=Be(y)&&y.name;if(v==="Boolean"){_=!0;break}else v==="String"&&(g=!1)}else _=Be(m)&&m.name==="Boolean";d[0]=_,d[1]=g,(_||Ze(d,"default"))&&a.push(l)}}const u=[o,a];return at(i)&&n.set(i,u),u}function Kc(i){return i[0]!=="$"&&!ds(i)}const ad=i=>i[0]==="_"||i==="$stable",lc=i=>Ue(i)?i.map(Rn):[Rn(i)],og=(i,e,t)=>{if(e._n)return e;const n=Eo((...r)=>lc(e(...r)),t);return n._c=!1,n},ld=(i,e,t)=>{const n=i._ctx;for(const r in i){if(ad(r))continue;const s=i[r];if(Be(s))e[r]=og(r,s,n);else if(s!=null){const o=lc(s);e[r]=()=>o}}},cd=(i,e)=>{const t=lc(e);i.slots.default=()=>t},ud=(i,e,t)=>{for(const n in e)(t||n!=="_")&&(i[n]=e[n])},ag=(i,e,t)=>{const n=i.slots=id();if(i.vnode.shapeFlag&32){const r=e._;r?(ud(n,e,t),t&&_f(n,"_",r,!0)):ld(e,n)}else e&&cd(i,e)},lg=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=it;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:ud(r,e,t):(s=!e.$stable,ld(e,r)),o=e}else e&&(cd(i,e),o={default:1});if(s)for(const a in r)!ad(a)&&o[a]==null&&delete r[a]},jt=Mg;function cg(i){return ug(i)}function ug(i,e){const t=Yo();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:f,parentNode:l,nextSibling:h,setScopeId:d=dn,insertStaticContent:m}=i,_=(R,C,V,K=null,ee=null,J=null,se=void 0,ce=null,he=!!C.dynamicChildren)=>{if(R===C)return;R&&!Bi(R,C)&&(K=Te(R),D(R,ee,J,!0),R=null),C.patchFlag===-2&&(he=!1,C.dynamicChildren=null);const{type:ae,ref:T,shapeFlag:x}=C;switch(ae){case ea:g(R,C,V,K);break;case tn:p(R,C,V,K);break;case Ma:R==null&&y(C,V,K,se);break;case fn:z(R,C,V,K,ee,J,se,ce,he);break;default:x&1?b(R,C,V,K,ee,J,se,ce,he):x&6?H(R,C,V,K,ee,J,se,ce,he):(x&64||x&128)&&ae.process(R,C,V,K,ee,J,se,ce,he,$e)}T!=null&&ee&&No(T,R&&R.ref,J,C||R,!C)},g=(R,C,V,K)=>{if(R==null)n(C.el=a(C.children),V,K);else{const ee=C.el=R.el;C.children!==R.children&&u(ee,C.children)}},p=(R,C,V,K)=>{R==null?n(C.el=c(C.children||""),V,K):C.el=R.el},y=(R,C,V,K)=>{[R.el,R.anchor]=m(R.children,C,V,K,R.el,R.anchor)},v=({el:R,anchor:C},V,K)=>{let ee;for(;R&&R!==C;)ee=h(R),n(R,V,K),R=ee;n(C,V,K)},M=({el:R,anchor:C})=>{let V;for(;R&&R!==C;)V=h(R),r(R),R=V;r(C)},b=(R,C,V,K,ee,J,se,ce,he)=>{C.type==="svg"?se="svg":C.type==="math"&&(se="mathml"),R==null?w(C,V,K,ee,J,se,ce,he):S(R,C,ee,J,se,ce,he)},w=(R,C,V,K,ee,J,se,ce)=>{let he,ae;const{props:T,shapeFlag:x,transition:F,dirs:Z}=R;if(he=R.el=o(R.type,J,T&&T.is,T),x&8?f(he,R.children):x&16&&U(R.children,he,null,K,ee,xa(R,J),se,ce),Z&&wi(R,null,K,"created"),I(he,R,R.scopeId,se,K),T){for(const ue in T)ue!=="value"&&!ds(ue)&&s(he,ue,null,T[ue],J,K);"value"in T&&s(he,"value",null,T.value,J),(ae=T.onVnodeBeforeMount)&&En(ae,K,R)}Z&&wi(R,null,K,"beforeMount");const ie=hg(ee,F);ie&&F.beforeEnter(he),n(he,C,V),((ae=T&&T.onVnodeMounted)||ie||Z)&&jt(()=>{ae&&En(ae,K,R),ie&&F.enter(he),Z&&wi(R,null,K,"mounted")},ee)},I=(R,C,V,K,ee)=>{if(V&&d(R,V),K)for(let J=0;J<K.length;J++)d(R,K[J]);if(ee){let J=ee.subTree;if(C===J||gd(J.type)&&(J.ssContent===C||J.ssFallback===C)){const se=ee.vnode;I(R,se,se.scopeId,se.slotScopeIds,ee.parent)}}},U=(R,C,V,K,ee,J,se,ce,he=0)=>{for(let ae=he;ae<R.length;ae++){const T=R[ae]=ce?ai(R[ae]):Rn(R[ae]);_(null,T,C,V,K,ee,J,se,ce)}},S=(R,C,V,K,ee,J,se)=>{const ce=C.el=R.el;let{patchFlag:he,dynamicChildren:ae,dirs:T}=C;he|=R.patchFlag&16;const x=R.props||it,F=C.props||it;let Z;if(V&&Ri(V,!1),(Z=F.onVnodeBeforeUpdate)&&En(Z,V,C,R),T&&wi(C,R,V,"beforeUpdate"),V&&Ri(V,!0),(x.innerHTML&&F.innerHTML==null||x.textContent&&F.textContent==null)&&f(ce,""),ae?A(R.dynamicChildren,ae,ce,V,K,xa(C,ee),J):se||B(R,C,ce,null,V,K,xa(C,ee),J,!1),he>0){if(he&16)Y(ce,x,F,V,ee);else if(he&2&&x.class!==F.class&&s(ce,"class",null,F.class,ee),he&4&&s(ce,"style",x.style,F.style,ee),he&8){const ie=C.dynamicProps;for(let ue=0;ue<ie.length;ue++){const pe=ie[ue],me=x[pe],Q=F[pe];(Q!==me||pe==="value")&&s(ce,pe,me,Q,ee,V)}}he&1&&R.children!==C.children&&f(ce,C.children)}else!se&&ae==null&&Y(ce,x,F,V,ee);((Z=F.onVnodeUpdated)||T)&&jt(()=>{Z&&En(Z,V,C,R),T&&wi(C,R,V,"updated")},K)},A=(R,C,V,K,ee,J,se)=>{for(let ce=0;ce<C.length;ce++){const he=R[ce],ae=C[ce],T=he.el&&(he.type===fn||!Bi(he,ae)||he.shapeFlag&70)?l(he.el):V;_(he,ae,T,null,K,ee,J,se,!0)}},Y=(R,C,V,K,ee)=>{if(C!==V){if(C!==it)for(const J in C)!ds(J)&&!(J in V)&&s(R,J,C[J],null,ee,K);for(const J in V){if(ds(J))continue;const se=V[J],ce=C[J];se!==ce&&J!=="value"&&s(R,J,ce,se,ee,K)}"value"in V&&s(R,"value",C.value,V.value,ee)}},z=(R,C,V,K,ee,J,se,ce,he)=>{const ae=C.el=R?R.el:a(""),T=C.anchor=R?R.anchor:a("");let{patchFlag:x,dynamicChildren:F,slotScopeIds:Z}=C;Z&&(ce=ce?ce.concat(Z):Z),R==null?(n(ae,V,K),n(T,V,K),U(C.children||[],V,T,ee,J,se,ce,he)):x>0&&x&64&&F&&R.dynamicChildren?(A(R.dynamicChildren,F,V,ee,J,se,ce),(C.key!=null||ee&&C===ee.subTree)&&hd(R,C,!0)):B(R,C,V,T,ee,J,se,ce,he)},H=(R,C,V,K,ee,J,se,ce,he)=>{C.slotScopeIds=ce,R==null?C.shapeFlag&512?ee.ctx.activate(C,V,K,se,he):q(C,V,K,ee,J,se,he):O(R,C,he)},q=(R,C,V,K,ee,J,se)=>{const ce=R.component=Ig(R,K,ee);if($o(R)&&(ce.ctx.renderer=$e),Ng(ce,!1,se),ce.asyncDep){if(ee&&ee.registerDep(ce,G,se),!R.el){const he=ce.subTree=kt(tn);p(null,he,C,V)}}else G(ce,R,C,V,ee,J,se)},O=(R,C,V)=>{const K=C.component=R.component;if(yg(R,C,V))if(K.asyncDep&&!K.asyncResolved){k(K,C,V);return}else K.next=C,K.update();else C.el=R.el,K.vnode=C},G=(R,C,V,K,ee,J,se)=>{const ce=()=>{if(R.isMounted){let{next:x,bu:F,u:Z,parent:ie,vnode:ue}=R;{const Ee=fd(R);if(Ee){x&&(x.el=ue.el,k(R,x,se)),Ee.asyncDep.then(()=>{R.isUnmounted||ce()});return}}let pe=x,me;Ri(R,!1),x?(x.el=ue.el,k(R,x,se)):x=ue,F&&fa(F),(me=x.props&&x.props.onVnodeBeforeUpdate)&&En(me,ie,x,ue),Ri(R,!0);const Q=Sa(R),Re=R.subTree;R.subTree=Q,_(Re,Q,l(Re.el),Te(Re),R,ee,J),x.el=Q.el,pe===null&&Sg(R,Q.el),Z&&jt(Z,ee),(me=x.props&&x.props.onVnodeUpdated)&&jt(()=>En(me,ie,x,ue),ee)}else{let x;const{el:F,props:Z}=C,{bm:ie,m:ue,parent:pe,root:me,type:Q}=R,Re=_s(C);if(Ri(R,!1),ie&&fa(ie),!Re&&(x=Z&&Z.onVnodeBeforeMount)&&En(x,pe,C),Ri(R,!0),F&&W){const Ee=()=>{R.subTree=Sa(R),W(F,R.subTree,R,ee,null)};Re&&Q.__asyncHydrate?Q.__asyncHydrate(F,R,Ee):Ee()}else{me.ce&&me.ce._injectChildStyle(Q);const Ee=R.subTree=Sa(R);_(null,Ee,V,K,R,ee,J),C.el=Ee.el}if(ue&&jt(ue,ee),!Re&&(x=Z&&Z.onVnodeMounted)){const Ee=C;jt(()=>En(x,pe,Ee),ee)}(C.shapeFlag&256||pe&&_s(pe.vnode)&&pe.vnode.shapeFlag&256)&&R.a&&jt(R.a,ee),R.isMounted=!0,C=V=K=null}};R.scope.on();const he=R.effect=new Mf(ce);R.scope.off();const ae=R.update=he.run.bind(he),T=R.job=he.runIfDirty.bind(he);T.i=R,T.id=R.uid,he.scheduler=()=>oc(T),Ri(R,!0),ae()},k=(R,C,V)=>{C.component=R;const K=R.vnode.props;R.vnode=C,R.next=null,rg(R,C.props,K,V),lg(R,C.children,V),xi(),Gc(R),yi()},B=(R,C,V,K,ee,J,se,ce,he=!1)=>{const ae=R&&R.children,T=R?R.shapeFlag:0,x=C.children,{patchFlag:F,shapeFlag:Z}=C;if(F>0){if(F&128){P(ae,x,V,K,ee,J,se,ce,he);return}else if(F&256){oe(ae,x,V,K,ee,J,se,ce,he);return}}Z&8?(T&16&&fe(ae,ee,J),x!==ae&&f(V,x)):T&16?Z&16?P(ae,x,V,K,ee,J,se,ce,he):fe(ae,ee,J,!0):(T&8&&f(V,""),Z&16&&U(x,V,K,ee,J,se,ce,he))},oe=(R,C,V,K,ee,J,se,ce,he)=>{R=R||Ar,C=C||Ar;const ae=R.length,T=C.length,x=Math.min(ae,T);let F;for(F=0;F<x;F++){const Z=C[F]=he?ai(C[F]):Rn(C[F]);_(R[F],Z,V,null,ee,J,se,ce,he)}ae>T?fe(R,ee,J,!0,!1,x):U(C,V,K,ee,J,se,ce,he,x)},P=(R,C,V,K,ee,J,se,ce,he)=>{let ae=0;const T=C.length;let x=R.length-1,F=T-1;for(;ae<=x&&ae<=F;){const Z=R[ae],ie=C[ae]=he?ai(C[ae]):Rn(C[ae]);if(Bi(Z,ie))_(Z,ie,V,null,ee,J,se,ce,he);else break;ae++}for(;ae<=x&&ae<=F;){const Z=R[x],ie=C[F]=he?ai(C[F]):Rn(C[F]);if(Bi(Z,ie))_(Z,ie,V,null,ee,J,se,ce,he);else break;x--,F--}if(ae>x){if(ae<=F){const Z=F+1,ie=Z<T?C[Z].el:K;for(;ae<=F;)_(null,C[ae]=he?ai(C[ae]):Rn(C[ae]),V,ie,ee,J,se,ce,he),ae++}}else if(ae>F)for(;ae<=x;)D(R[ae],ee,J,!0),ae++;else{const Z=ae,ie=ae,ue=new Map;for(ae=ie;ae<=F;ae++){const xe=C[ae]=he?ai(C[ae]):Rn(C[ae]);xe.key!=null&&ue.set(xe.key,ae)}let pe,me=0;const Q=F-ie+1;let Re=!1,Ee=0;const Ce=new Array(Q);for(ae=0;ae<Q;ae++)Ce[ae]=0;for(ae=Z;ae<=x;ae++){const xe=R[ae];if(me>=Q){D(xe,ee,J,!0);continue}let De;if(xe.key!=null)De=ue.get(xe.key);else for(pe=ie;pe<=F;pe++)if(Ce[pe-ie]===0&&Bi(xe,C[pe])){De=pe;break}De===void 0?D(xe,ee,J,!0):(Ce[De-ie]=ae+1,De>=Ee?Ee=De:Re=!0,_(xe,C[De],V,null,ee,J,se,ce,he),me++)}const Ae=Re?fg(Ce):Ar;for(pe=Ae.length-1,ae=Q-1;ae>=0;ae--){const xe=ie+ae,De=C[xe],et=xe+1<T?C[xe+1].el:K;Ce[ae]===0?_(null,De,V,et,ee,J,se,ce,he):Re&&(pe<0||ae!==Ae[pe]?Se(De,V,et,2):pe--)}}},Se=(R,C,V,K,ee=null)=>{const{el:J,type:se,transition:ce,children:he,shapeFlag:ae}=R;if(ae&6){Se(R.component.subTree,C,V,K);return}if(ae&128){R.suspense.move(C,V,K);return}if(ae&64){se.move(R,C,V,$e);return}if(se===fn){n(J,C,V);for(let x=0;x<he.length;x++)Se(he[x],C,V,K);n(R.anchor,C,V);return}if(se===Ma){v(R,C,V);return}if(K!==2&&ae&1&&ce)if(K===0)ce.beforeEnter(J),n(J,C,V),jt(()=>ce.enter(J),ee);else{const{leave:x,delayLeave:F,afterLeave:Z}=ce,ie=()=>n(J,C,V),ue=()=>{x(J,()=>{ie(),Z&&Z()})};F?F(J,ie,ue):ue()}else n(J,C,V)},D=(R,C,V,K=!1,ee=!1)=>{const{type:J,props:se,ref:ce,children:he,dynamicChildren:ae,shapeFlag:T,patchFlag:x,dirs:F,cacheIndex:Z}=R;if(x===-2&&(ee=!1),ce!=null&&No(ce,null,V,R,!0),Z!=null&&(C.renderCache[Z]=void 0),T&256){C.ctx.deactivate(R);return}const ie=T&1&&F,ue=!_s(R);let pe;if(ue&&(pe=se&&se.onVnodeBeforeUnmount)&&En(pe,C,R),T&6)ge(R.component,V,K);else{if(T&128){R.suspense.unmount(V,K);return}ie&&wi(R,null,C,"beforeUnmount"),T&64?R.type.remove(R,C,V,$e,K):ae&&!ae.hasOnce&&(J!==fn||x>0&&x&64)?fe(ae,C,V,!1,!0):(J===fn&&x&384||!ee&&T&16)&&fe(he,C,V),K&&ne(R)}(ue&&(pe=se&&se.onVnodeUnmounted)||ie)&&jt(()=>{pe&&En(pe,C,R),ie&&wi(R,null,C,"unmounted")},V)},ne=R=>{const{type:C,el:V,anchor:K,transition:ee}=R;if(C===fn){le(V,K);return}if(C===Ma){M(R);return}const J=()=>{r(V),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(R.shapeFlag&1&&ee&&!ee.persisted){const{leave:se,delayLeave:ce}=ee,he=()=>se(V,J);ce?ce(R.el,J,he):he()}else J()},le=(R,C)=>{let V;for(;R!==C;)V=h(R),r(R),R=V;r(C)},ge=(R,C,V)=>{const{bum:K,scope:ee,job:J,subTree:se,um:ce,m:he,a:ae}=R;$c(he),$c(ae),K&&fa(K),ee.stop(),J&&(J.flags|=8,D(se,R,C,V)),ce&&jt(ce,C),jt(()=>{R.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},fe=(R,C,V,K=!1,ee=!1,J=0)=>{for(let se=J;se<R.length;se++)D(R[se],C,V,K,ee)},Te=R=>{if(R.shapeFlag&6)return Te(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const C=h(R.anchor||R.el),V=C&&C[Dm];return V?h(V):C};let Ie=!1;const Le=(R,C,V)=>{R==null?C._vnode&&D(C._vnode,null,null,!0):_(C._vnode||null,R,C,null,null,null,V),C._vnode=R,Ie||(Ie=!0,Gc(),Hf(),Ie=!1)},$e={p:_,um:D,m:Se,r:ne,mt:q,mc:U,pc:B,pbc:A,n:Te,o:i};let ze,W;return e&&([ze,W]=e($e)),{render:Le,hydrate:ze,createApp:tg(Le,ze)}}function xa({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ri({effect:i,job:e},t){t?(i.flags|=32,e.flags|=4):(i.flags&=-33,e.flags&=-5)}function hg(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function hd(i,e,t=!1){const n=i.children,r=e.children;if(Ue(n)&&Ue(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ai(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&hd(o,a)),a.type===ea&&(a.el=o.el)}}function fg(i){const e=i.slice(),t=[0];let n,r,s,o,a;const c=i.length;for(n=0;n<c;n++){const u=i[n];if(u!==0){if(r=t[t.length-1],i[r]<u){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<u?s=a+1:o=a;u<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function fd(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:fd(e)}function $c(i){if(i)for(let e=0;e<i.length;e++)i[e].flags|=8}const dg=Symbol.for("v-scx"),pg=()=>bo(dg);function ya(i,e,t){return dd(i,e,t)}function dd(i,e,t=it){const{immediate:n,deep:r,flush:s,once:o}=t,a=_t({},t),c=e&&n||!e&&s!=="post";let u;if(Ls){if(s==="sync"){const d=pg();u=d.__watcherHandles||(d.__watcherHandles=[])}else if(!c){const d=()=>{};return d.stop=dn,d.resume=dn,d.pause=dn,d}}const f=Ct;a.call=(d,m,_)=>xn(d,f,m,_);let l=!1;s==="post"?a.scheduler=d=>{jt(d,f&&f.suspense)}:s!=="sync"&&(l=!0,a.scheduler=(d,m)=>{m?d():oc(d)}),a.augmentJob=d=>{e&&(d.flags|=4),l&&(d.flags|=2,f&&(d.id=f.uid,d.i=f))};const h=Rm(i,e,a);return Ls&&(u?u.push(h):c&&h()),h}function mg(i,e,t){const n=this.proxy,r=vt(i)?i.includes(".")?pd(n,i):()=>n[i]:i.bind(n,n);let s;Be(e)?s=e:(s=e.handler,t=e);const o=ks(this),a=dd(r,s.bind(n),t);return o(),a}function pd(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}const gg=(i,e)=>e==="modelValue"||e==="model-value"?i.modelModifiers:i[`${e}Modifiers`]||i[`${mi(e)}Modifiers`]||i[`${Zi(e)}Modifiers`];function _g(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||it;let r=t;const s=e.startsWith("update:"),o=s&&gg(n,e.slice(7));o&&(o.trim&&(r=t.map(f=>vt(f)?f.trim():f)),o.number&&(r=t.map(Xp)));let a,c=n[a=ha(e)]||n[a=ha(mi(e))];!c&&s&&(c=n[a=ha(Zi(e))]),c&&xn(c,i,6,r);const u=n[a+"Once"];if(u){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,xn(u,i,6,r)}}function md(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!Be(i)){const c=u=>{const f=md(u,e,!0);f&&(a=!0,_t(o,f))};!t&&e.mixins.length&&e.mixins.forEach(c),i.extends&&c(i.extends),i.mixins&&i.mixins.forEach(c)}return!s&&!a?(at(i)&&n.set(i,null),null):(Ue(s)?s.forEach(c=>o[c]=null):_t(o,s),at(i)&&n.set(i,o),o)}function Qo(i,e){return!i||!Xo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ze(i,e[0].toLowerCase()+e.slice(1))||Ze(i,Zi(e))||Ze(i,e))}function Sa(i){const{type:e,vnode:t,proxy:n,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:c,render:u,renderCache:f,props:l,data:h,setupState:d,ctx:m,inheritAttrs:_}=i,g=Do(i);let p,y;try{if(t.shapeFlag&4){const M=r||n,b=M;p=Rn(u.call(b,M,f,l,d,h,m)),y=a}else{const M=e;p=Rn(M.length>1?M(l,{attrs:a,slots:o,emit:c}):M(l,null)),y=e.props?a:vg(a)}}catch(M){xs.length=0,Ko(M,i,1),p=kt(tn)}let v=p;if(y&&_!==!1){const M=Object.keys(y),{shapeFlag:b}=v;M.length&&b&7&&(s&&M.some(ql)&&(y=xg(y,s)),v=gi(v,y,!1,!0))}return t.dirs&&(v=gi(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&Rs(v,t.transition),p=v,Do(g),p}const vg=i=>{let e;for(const t in i)(t==="class"||t==="style"||Xo(t))&&((e||(e={}))[t]=i[t]);return e},xg=(i,e)=>{const t={};for(const n in i)(!ql(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function yg(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return n?Jc(n,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let l=0;l<f.length;l++){const h=f[l];if(o[h]!==n[h]&&!Qo(u,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Jc(n,o,u):!0:!!o;return!1}function Jc(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!Qo(t,s))return!0}return!1}function Sg({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const gd=i=>i.__isSuspense;function Mg(i,e){e&&e.pendingBranch?Ue(i)?e.effects.push(...i):e.effects.push(i):Im(i)}const fn=Symbol.for("v-fgt"),ea=Symbol.for("v-txt"),tn=Symbol.for("v-cmt"),Ma=Symbol.for("v-stc"),xs=[];let $t=null;function _d(i=!1){xs.push($t=i?null:[])}function Tg(){xs.pop(),$t=xs[xs.length-1]||null}let Cs=1;function Zc(i,e=!1){Cs+=i,i<0&&$t&&e&&($t.hasOnce=!0)}function vd(i){return i.dynamicChildren=Cs>0?$t||Ar:null,Tg(),Cs>0&&$t&&$t.push(i),i}function Eg(i,e,t,n,r,s){return vd(ht(i,e,t,n,r,s,!0))}function bg(i,e,t,n,r){return vd(kt(i,e,t,n,r,!0))}function Oo(i){return i?i.__v_isVNode===!0:!1}function Bi(i,e){return i.type===e.type&&i.key===e.key}const xd=({key:i})=>i??null,Ao=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?vt(i)||Lt(i)||Be(i)?{i:Kt,r:i,k:e,f:!!t}:i:null);function ht(i,e=null,t=null,n=0,r=null,s=i===fn?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&xd(e),ref:e&&Ao(e),scopeId:Vf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Kt};return a?(cc(c,t),s&128&&i.normalize(c)):t&&(c.shapeFlag|=vt(t)?8:16),Cs>0&&!o&&$t&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&$t.push(c),c}const kt=Ag;function Ag(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===jm)&&(i=tn),Oo(i)){const a=gi(i,e,!0);return t&&cc(a,t),Cs>0&&!s&&$t&&(a.shapeFlag&6?$t[$t.indexOf(i)]=a:$t.push(a)),a.patchFlag=-2,a}if(Bg(i)&&(i=i.__vccOpts),e){e=wg(e);let{class:a,style:c}=e;a&&!vt(a)&&(e.class=$l(a)),at(c)&&(sc(c)&&!Ue(c)&&(c=_t({},c)),e.style=Kl(c))}const o=vt(i)?1:gd(i)?128:Gf(i)?64:at(i)?4:Be(i)?2:0;return ht(i,e,t,n,r,o,s,!0)}function wg(i){return i?sc(i)||rd(i)?_t({},i):i:null}function gi(i,e,t=!1,n=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:c}=i,u=e?Cg(r||{},e):r,f={__v_isVNode:!0,__v_skip:!0,type:i.type,props:u,key:u&&xd(u),ref:e&&e.ref?t&&s?Ue(s)?s.concat(Ao(e)):[s,Ao(e)]:Ao(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==fn?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:c,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&gi(i.ssContent),ssFallback:i.ssFallback&&gi(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return c&&n&&Rs(f,c.clone(f)),f}function Rg(i=" ",e=0){return kt(ea,null,i,e)}function Rn(i){return i==null||typeof i=="boolean"?kt(tn):Ue(i)?kt(fn,null,i.slice()):Oo(i)?ai(i):kt(ea,null,String(i))}function ai(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:gi(i)}function cc(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Ue(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),cc(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!rd(e)?e._ctx=Kt:r===3&&Kt&&(Kt.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Be(e)?(e={default:e,_ctx:Kt},t=32):(e=String(e),n&64?(t=16,e=[Rg(e)]):t=8);i.children=e,i.shapeFlag|=t}function Cg(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=$l([e.class,n.class]));else if(r==="style")e.style=Kl([e.style,n.style]);else if(Xo(r)){const s=e[r],o=n[r];o&&s!==o&&!(Ue(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function En(i,e,t,n=null){xn(i,e,7,[t,n])}const Lg=td();let Pg=0;function Ig(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||Lg,s={uid:Pg++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:od(n,r),emitsOptions:md(n,r),emit:null,emitted:null,propsDefaults:it,inheritAttrs:n.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=_g.bind(null,s),i.ce&&i.ce(s),s}let Ct=null;const Dg=()=>Ct||Kt;let Fo,bl;{const i=Yo(),e=(t,n)=>{let r;return(r=i[t])||(r=i[t]=[]),r.push(n),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Fo=e("__VUE_INSTANCE_SETTERS__",t=>Ct=t),bl=e("__VUE_SSR_SETTERS__",t=>Ls=t)}const ks=i=>{const e=Ct;return Fo(i),i.scope.on(),()=>{i.scope.off(),Fo(e)}},Qc=()=>{Ct&&Ct.scope.off(),Fo(null)};function yd(i){return i.vnode.shapeFlag&4}let Ls=!1;function Ng(i,e=!1,t=!1){e&&bl(e);const{props:n,children:r}=i.vnode,s=yd(i);ig(i,n,s,e),ag(i,r,t);const o=s?Ug(i,e):void 0;return e&&bl(!1),o}function Ug(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,Ym);const{setup:n}=t;if(n){xi();const r=i.setupContext=n.length>1?Fg(i):null,s=ks(i),o=Bs(n,i,0,[i.props,r]),a=df(o);if(yi(),s(),(a||i.sp)&&!_s(i)&&$f(i),a){if(o.then(Qc,Qc),e)return o.then(c=>{eu(i,c,e)}).catch(c=>{Ko(c,i,0)});i.asyncDep=o}else eu(i,o,e)}else Sd(i,e)}function eu(i,e,t){Be(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:at(e)&&(i.setupState=Ff(e)),Sd(i,t)}let tu;function Sd(i,e,t){const n=i.type;if(!i.render){if(!e&&tu&&!n.render){const r=n.template||ac(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:c}=n,u=_t(_t({isCustomElement:s,delimiters:a},o),c);n.render=tu(r,u)}}i.render=n.render||dn}{const r=ks(i);xi();try{Km(i)}finally{yi(),r()}}}const Og={get(i,e){return Rt(i,"get",""),i[e]}};function Fg(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,Og),slots:i.slots,emit:i.emit,expose:e}}function ta(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(Ff(ym(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in vs)return vs[t](i)},has(e,t){return t in e||t in vs}})):i.proxy}function Bg(i){return Be(i)&&"__vccOpts"in i}const kg=(i,e)=>Am(i,e,Ls);function Hg(i,e,t){const n=arguments.length;return n===2?at(e)&&!Ue(e)?Oo(e)?kt(i,null,[e]):kt(i,e):kt(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&Oo(t)&&(t=[t]),kt(i,e,t))}const zg="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Al;const nu=typeof window<"u"&&window.trustedTypes;if(nu)try{Al=nu.createPolicy("vue",{createHTML:i=>i})}catch{}const Md=Al?i=>Al.createHTML(i):i=>i,Vg="http://www.w3.org/2000/svg",Gg="http://www.w3.org/1998/Math/MathML",Gn=typeof document<"u"?document:null,iu=Gn&&Gn.createElement("template"),Wg={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e==="svg"?Gn.createElementNS(Vg,i):e==="mathml"?Gn.createElementNS(Gg,i):t?Gn.createElement(i,{is:t}):Gn.createElement(i);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>Gn.createTextNode(i),createComment:i=>Gn.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Gn.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{iu.innerHTML=Md(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const a=iu.content;if(n==="svg"||n==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Zn="transition",Zr="animation",Ps=Symbol("_vtc"),Td={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Xg=_t({},Wf,Td),qg=i=>(i.displayName="Transition",i.props=Xg,i),Ta=qg((i,{slots:e})=>Hg(Om,jg(i),e)),Ci=(i,e=[])=>{Ue(i)?i.forEach(t=>t(...e)):i&&i(...e)},ru=i=>i?Ue(i)?i.some(e=>e.length>1):i.length>1:!1;function jg(i){const e={};for(const z in i)z in Td||(e[z]=i[z]);if(i.css===!1)return e;const{name:t="v",type:n,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:c=s,appearActiveClass:u=o,appearToClass:f=a,leaveFromClass:l=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=i,m=Yg(r),_=m&&m[0],g=m&&m[1],{onBeforeEnter:p,onEnter:y,onEnterCancelled:v,onLeave:M,onLeaveCancelled:b,onBeforeAppear:w=p,onAppear:I=y,onAppearCancelled:U=v}=e,S=(z,H,q,O)=>{z._enterCancelled=O,Li(z,H?f:a),Li(z,H?u:o),q&&q()},A=(z,H)=>{z._isLeaving=!1,Li(z,l),Li(z,d),Li(z,h),H&&H()},Y=z=>(H,q)=>{const O=z?I:y,G=()=>S(H,z,q);Ci(O,[H,G]),su(()=>{Li(H,z?c:s),Un(H,z?f:a),ru(O)||ou(H,n,_,G)})};return _t(e,{onBeforeEnter(z){Ci(p,[z]),Un(z,s),Un(z,o)},onBeforeAppear(z){Ci(w,[z]),Un(z,c),Un(z,u)},onEnter:Y(!1),onAppear:Y(!0),onLeave(z,H){z._isLeaving=!0;const q=()=>A(z,H);Un(z,l),z._enterCancelled?(Un(z,h),cu()):(cu(),Un(z,h)),su(()=>{z._isLeaving&&(Li(z,l),Un(z,d),ru(M)||ou(z,n,g,q))}),Ci(M,[z,q])},onEnterCancelled(z){S(z,!1,void 0,!0),Ci(v,[z])},onAppearCancelled(z){S(z,!0,void 0,!0),Ci(U,[z])},onLeaveCancelled(z){A(z),Ci(b,[z])}})}function Yg(i){if(i==null)return null;if(at(i))return[Ea(i.enter),Ea(i.leave)];{const e=Ea(i);return[e,e]}}function Ea(i){return qp(i)}function Un(i,e){e.split(/\s+/).forEach(t=>t&&i.classList.add(t)),(i[Ps]||(i[Ps]=new Set)).add(e)}function Li(i,e){e.split(/\s+/).forEach(n=>n&&i.classList.remove(n));const t=i[Ps];t&&(t.delete(e),t.size||(i[Ps]=void 0))}function su(i){requestAnimationFrame(()=>{requestAnimationFrame(i)})}let Kg=0;function ou(i,e,t,n){const r=i._endId=++Kg,s=()=>{r===i._endId&&n()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:c}=$g(i,e);if(!o)return n();const u=o+"end";let f=0;const l=()=>{i.removeEventListener(u,h),s()},h=d=>{d.target===i&&++f>=c&&l()};setTimeout(()=>{f<c&&l()},a+1),i.addEventListener(u,h)}function $g(i,e){const t=window.getComputedStyle(i),n=m=>(t[m]||"").split(", "),r=n(`${Zn}Delay`),s=n(`${Zn}Duration`),o=au(r,s),a=n(`${Zr}Delay`),c=n(`${Zr}Duration`),u=au(a,c);let f=null,l=0,h=0;e===Zn?o>0&&(f=Zn,l=o,h=s.length):e===Zr?u>0&&(f=Zr,l=u,h=c.length):(l=Math.max(o,u),f=l>0?o>u?Zn:Zr:null,h=f?f===Zn?s.length:c.length:0);const d=f===Zn&&/\b(transform|all)(,|$)/.test(n(`${Zn}Property`).toString());return{type:f,timeout:l,propCount:h,hasTransform:d}}function au(i,e){for(;i.length<e.length;)i=i.concat(i);return Math.max(...e.map((t,n)=>lu(t)+lu(i[n])))}function lu(i){return i==="auto"?0:Number(i.slice(0,-1).replace(",","."))*1e3}function cu(){return document.body.offsetHeight}function Jg(i,e,t){const n=i[Ps];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const Bo=Symbol("_vod"),Ed=Symbol("_vsh"),Pr={beforeMount(i,{value:e},{transition:t}){i[Bo]=i.style.display==="none"?"":i.style.display,t&&e?t.beforeEnter(i):Qr(i,e)},mounted(i,{value:e},{transition:t}){t&&e&&t.enter(i)},updated(i,{value:e,oldValue:t},{transition:n}){!e!=!t&&(n?e?(n.beforeEnter(i),Qr(i,!0),n.enter(i)):n.leave(i,()=>{Qr(i,!1)}):Qr(i,e))},beforeUnmount(i,{value:e}){Qr(i,e)}};function Qr(i,e){i.style.display=e?i[Bo]:"none",i[Ed]=!e}const Zg=Symbol(""),Qg=/(^|;)\s*display\s*:/;function e_(i,e,t){const n=i.style,r=vt(t);let s=!1;if(t&&!r){if(e)if(vt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&wo(n,a,"")}else for(const o in e)t[o]==null&&wo(n,o,"");for(const o in t)o==="display"&&(s=!0),wo(n,o,t[o])}else if(r){if(e!==t){const o=n[Zg];o&&(t+=";"+o),n.cssText=t,s=Qg.test(t)}}else e&&i.removeAttribute("style");Bo in i&&(i[Bo]=s?n.display:"",i[Ed]&&(n.display="none"))}const uu=/\s*!important$/;function wo(i,e,t){if(Ue(t))t.forEach(n=>wo(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=t_(i,e);uu.test(t)?i.setProperty(Zi(n),t.replace(uu,""),"important"):i[n]=t}}const hu=["Webkit","Moz","ms"],ba={};function t_(i,e){const t=ba[e];if(t)return t;let n=mi(e);if(n!=="filter"&&n in i)return ba[e]=n;n=gf(n);for(let r=0;r<hu.length;r++){const s=hu[r]+n;if(s in i)return ba[e]=s}return e}const fu="http://www.w3.org/1999/xlink";function du(i,e,t,n,r,s=Zp(e)){n&&e.startsWith("xlink:")?t==null?i.removeAttributeNS(fu,e.slice(6,e.length)):i.setAttributeNS(fu,e,t):t==null||s&&!vf(t)?i.removeAttribute(e):i.setAttribute(e,s?"":vi(t)?String(t):t)}function pu(i,e,t,n,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(i[e]=e==="innerHTML"?Md(t):t);return}const s=i.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?i.getAttribute("value")||"":i.value,c=t==null?i.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in i))&&(i.value=c),t==null&&i.removeAttribute(e),i._value=t;return}let o=!1;if(t===""||t==null){const a=typeof i[e];a==="boolean"?t=vf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{i[e]=t}catch{}o&&i.removeAttribute(r||e)}function n_(i,e,t,n){i.addEventListener(e,t,n)}function i_(i,e,t,n){i.removeEventListener(e,t,n)}const mu=Symbol("_vei");function r_(i,e,t,n,r=null){const s=i[mu]||(i[mu]={}),o=s[e];if(n&&o)o.value=n;else{const[a,c]=s_(e);if(n){const u=s[e]=l_(n,r);n_(i,a,u,c)}else o&&(i_(i,a,o,c),s[e]=void 0)}}const gu=/(?:Once|Passive|Capture)$/;function s_(i){let e;if(gu.test(i)){e={};let n;for(;n=i.match(gu);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Zi(i.slice(2)),e]}let Aa=0;const o_=Promise.resolve(),a_=()=>Aa||(o_.then(()=>Aa=0),Aa=Date.now());function l_(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;xn(c_(n,t.value),e,5,[n])};return t.value=i,t.attached=a_(),t}function c_(i,e){if(Ue(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const _u=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,u_=(i,e,t,n,r,s)=>{const o=r==="svg";e==="class"?Jg(i,n,o):e==="style"?e_(i,t,n):Xo(e)?ql(e)||r_(i,e,t,n,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):h_(i,e,n,o))?(pu(i,e,n),!i.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&du(i,e,n,o,s,e!=="value")):i._isVueCE&&(/[A-Z]/.test(e)||!vt(n))?pu(i,mi(e),n,s,e):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),du(i,e,n,o))};function h_(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&_u(e)&&Be(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=i.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return _u(e)&&vt(t)?!1:e in i}const f_=_t({patchProp:u_},Wg);let vu;function d_(){return vu||(vu=cg(f_))}const p_=(...i)=>{const e=d_().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=g_(n);if(!r)return;const s=e._component;!Be(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,m_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function m_(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function g_(i){return vt(i)?document.querySelector(i):i}const __=""+new URL("skull-e8baa1f8.png",import.meta.url).href;var Sr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bd(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var uc={exports:{}},Ir=typeof Reflect=="object"?Reflect:null,xu=Ir&&typeof Ir.apply=="function"?Ir.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)},Ro;Ir&&typeof Ir.ownKeys=="function"?Ro=Ir.ownKeys:Object.getOwnPropertySymbols?Ro=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Ro=function(e){return Object.getOwnPropertyNames(e)};function v_(i){console&&console.warn&&console.warn(i)}var Ad=Number.isNaN||function(e){return e!==e};function tt(){tt.init.call(this)}uc.exports=tt;uc.exports.once=M_;tt.EventEmitter=tt;tt.prototype._events=void 0;tt.prototype._eventsCount=0;tt.prototype._maxListeners=void 0;var yu=10;function na(i){if(typeof i!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof i)}Object.defineProperty(tt,"defaultMaxListeners",{enumerable:!0,get:function(){return yu},set:function(i){if(typeof i!="number"||i<0||Ad(i))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+i+".");yu=i}});tt.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};tt.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||Ad(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function wd(i){return i._maxListeners===void 0?tt.defaultMaxListeners:i._maxListeners}tt.prototype.getMaxListeners=function(){return wd(this)};tt.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r=e==="error",s=this._events;if(s!==void 0)r=r&&s.error===void 0;else if(!r)return!1;if(r){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var c=s[e];if(c===void 0)return!1;if(typeof c=="function")xu(c,this,t);else for(var u=c.length,f=Id(c,u),n=0;n<u;++n)xu(f[n],this,t);return!0};function Rd(i,e,t,n){var r,s,o;if(na(t),s=i._events,s===void 0?(s=i._events=Object.create(null),i._eventsCount=0):(s.newListener!==void 0&&(i.emit("newListener",e,t.listener?t.listener:t),s=i._events),o=s[e]),o===void 0)o=s[e]=t,++i._eventsCount;else if(typeof o=="function"?o=s[e]=n?[t,o]:[o,t]:n?o.unshift(t):o.push(t),r=wd(i),r>0&&o.length>r&&!o.warned){o.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=i,a.type=e,a.count=o.length,v_(a)}return i}tt.prototype.addListener=function(e,t){return Rd(this,e,t,!1)};tt.prototype.on=tt.prototype.addListener;tt.prototype.prependListener=function(e,t){return Rd(this,e,t,!0)};function x_(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Cd(i,e,t){var n={fired:!1,wrapFn:void 0,target:i,type:e,listener:t},r=x_.bind(n);return r.listener=t,n.wrapFn=r,r}tt.prototype.once=function(e,t){return na(t),this.on(e,Cd(this,e,t)),this};tt.prototype.prependOnceListener=function(e,t){return na(t),this.prependListener(e,Cd(this,e,t)),this};tt.prototype.removeListener=function(e,t){var n,r,s,o,a;if(na(t),r=this._events,r===void 0)return this;if(n=r[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if(typeof n!="function"){for(s=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){a=n[o].listener,s=o;break}if(s<0)return this;s===0?n.shift():y_(n,s),n.length===1&&(r[e]=n[0]),r.removeListener!==void 0&&this.emit("removeListener",e,a||t)}return this};tt.prototype.off=tt.prototype.removeListener;tt.prototype.removeAllListeners=function(e){var t,n,r;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var s=Object.keys(n),o;for(r=0;r<s.length;++r)o=s[r],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this};function Ld(i,e,t){var n=i._events;if(n===void 0)return[];var r=n[e];return r===void 0?[]:typeof r=="function"?t?[r.listener||r]:[r]:t?S_(r):Id(r,r.length)}tt.prototype.listeners=function(e){return Ld(this,e,!0)};tt.prototype.rawListeners=function(e){return Ld(this,e,!1)};tt.listenerCount=function(i,e){return typeof i.listenerCount=="function"?i.listenerCount(e):Pd.call(i,e)};tt.prototype.listenerCount=Pd;function Pd(i){var e=this._events;if(e!==void 0){var t=e[i];if(typeof t=="function")return 1;if(t!==void 0)return t.length}return 0}tt.prototype.eventNames=function(){return this._eventsCount>0?Ro(this._events):[]};function Id(i,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=i[n];return t}function y_(i,e){for(;e+1<i.length;e++)i[e]=i[e+1];i.pop()}function S_(i){for(var e=new Array(i.length),t=0;t<e.length;++t)e[t]=i[t].listener||i[t];return e}function M_(i,e){return new Promise(function(t,n){function r(o){i.removeListener(e,s),n(o)}function s(){typeof i.removeListener=="function"&&i.removeListener("error",r),t([].slice.call(arguments))}Dd(i,e,s,{once:!0}),e!=="error"&&T_(i,r,{once:!0})})}function T_(i,e,t){typeof i.on=="function"&&Dd(i,"error",e,t)}function Dd(i,e,t,n){if(typeof i.on=="function")n.once?i.once(e,t):i.on(e,t);else if(typeof i.addEventListener=="function")i.addEventListener(e,function r(s){n.once&&i.removeEventListener(e,r),t(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof i)}var Si=uc.exports;const Wr=bd(Si);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hc="153",E_=0,Su=1,b_=2,Nd=1,A_=2,wn=3,$n=0,Ht=1,Ln=2,di=0,Dr=1,Mu=2,Tu=3,Eu=4,w_=5,Mr=100,R_=101,C_=102,bu=103,Au=104,L_=200,P_=201,I_=202,D_=203,Ud=204,Od=205,N_=206,U_=207,O_=208,F_=209,B_=210,k_=0,H_=1,z_=2,wl=3,V_=4,G_=5,W_=6,X_=7,Fd=0,q_=1,j_=2,Kn=0,Y_=1,K_=2,$_=3,Bd=4,J_=5,kd=300,Or=301,Fr=302,Rl=303,Cl=304,ia=306,Br=1e3,nn=1001,ko=1002,Tt=1003,Ll=1004,Co=1005,Vt=1006,Hd=1007,Ki=1008,pi=1009,Z_=1010,Q_=1011,fc=1012,zd=1013,hi=1014,qn=1015,Is=1016,Vd=1017,Gd=1018,Wi=1020,ev=1021,rn=1023,tv=1024,nv=1025,Xi=1026,kr=1027,iv=1028,Wd=1029,rv=1030,Xd=1031,qd=1033,wa=33776,Ra=33777,Ca=33778,La=33779,wu=35840,Ru=35841,Cu=35842,Lu=35843,sv=36196,Pu=37492,Iu=37496,Du=37808,Nu=37809,Uu=37810,Ou=37811,Fu=37812,Bu=37813,ku=37814,Hu=37815,zu=37816,Vu=37817,Gu=37818,Wu=37819,Xu=37820,qu=37821,Pa=36492,ov=36283,ju=36284,Yu=36285,Ku=36286,av=2200,lv=2201,cv=2202,Ds=2300,Hr=2301,Ia=2302,Tr=2400,Er=2401,Ho=2402,dc=2500,uv=2501,hv=0,jd=1,Pl=2,Yd=3e3,qi=3001,fv=3200,dv=3201,pc=0,pv=1,ji="",Ne="srgb",yn="srgb-linear",Kd="display-p3",Da=7680,mv=519,gv=512,_v=513,vv=514,xv=515,yv=516,Sv=517,Mv=518,Tv=519,Il=35044,$u="300 es",Dl=1035,jn=2e3,zo=2001;class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ju=1234567;const ys=Math.PI/180,zr=180/Math.PI;function gn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function mc(i,e){return(i%e+e)%e}function Ev(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function bv(i,e,t){return i!==e?(t-i)/(e-i):0}function Ss(i,e,t){return(1-t)*i+t*e}function Av(i,e,t,n){return Ss(i,e,1-Math.exp(-t*n))}function wv(i,e=1){return e-Math.abs(mc(i,e*2)-e)}function Rv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Cv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Lv(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Pv(i,e){return i+Math.random()*(e-i)}function Iv(i){return i*(.5-Math.random())}function Dv(i){i!==void 0&&(Ju=i);let e=Ju+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nv(i){return i*ys}function Uv(i){return i*zr}function Nl(i){return(i&i-1)===0&&i!==0}function $d(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ov(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),u=s((e+n)/2),f=o((e+n)/2),l=s((e-n)/2),h=o((e-n)/2),d=s((n-e)/2),m=o((n-e)/2);switch(r){case"XYX":i.set(a*f,c*l,c*h,a*u);break;case"YZY":i.set(c*h,a*f,c*l,a*u);break;case"ZXZ":i.set(c*l,c*h,a*f,a*u);break;case"XZX":i.set(a*f,c*m,c*d,a*u);break;case"YXY":i.set(c*d,a*f,c*m,a*u);break;case"ZYZ":i.set(c*m,c*d,a*f,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ul={DEG2RAD:ys,RAD2DEG:zr,generateUUID:gn,clamp:gt,euclideanModulo:mc,mapLinear:Ev,inverseLerp:bv,lerp:Ss,damp:Av,pingpong:wv,smoothstep:Rv,smootherstep:Cv,randInt:Lv,randFloat:Pv,randFloatSpread:Iv,seededRandom:Dv,degToRad:Nv,radToDeg:Uv,isPowerOfTwo:Nl,ceilPowerOfTwo:$d,floorPowerOfTwo:Vo,setQuaternionFromProperEuler:Ov,normalize:nt,denormalize:Yn};class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,r,s,o,a,c,u){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,u)}set(e,t,n,r,s,o,a,c,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=t,f[4]=s,f[5]=c,f[6]=n,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],f=n[4],l=n[7],h=n[2],d=n[5],m=n[8],_=r[0],g=r[3],p=r[6],y=r[1],v=r[4],M=r[7],b=r[2],w=r[5],I=r[8];return s[0]=o*_+a*y+c*b,s[3]=o*g+a*v+c*w,s[6]=o*p+a*M+c*I,s[1]=u*_+f*y+l*b,s[4]=u*g+f*v+l*w,s[7]=u*p+f*M+l*I,s[2]=h*_+d*y+m*b,s[5]=h*g+d*v+m*w,s[8]=h*p+d*M+m*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],u=e[7],f=e[8];return t*o*f-t*a*u-n*s*f+n*a*c+r*s*u-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],u=e[7],f=e[8],l=f*o-a*u,h=a*c-f*s,d=u*s-o*c,m=t*l+n*h+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=l*_,e[1]=(r*u-f*n)*_,e[2]=(a*n-r*o)*_,e[3]=h*_,e[4]=(f*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(n*c-u*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*o+u*a)+o+e,-r*u,r*c,-r*(-u*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Na.makeScale(e,t)),this}rotate(e){return this.premultiply(Na.makeRotation(-e)),this}translate(e,t){return this.premultiply(Na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Na=new Xe;function Jd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ns(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const Zu={};function Ms(i){i in Zu||(Zu[i]=!0,console.warn(i))}function Nr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ua(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Fv=new Xe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Bv=new Xe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function kv(i){return i.convertSRGBToLinear().applyMatrix3(Bv)}function Hv(i){return i.applyMatrix3(Fv).convertLinearToSRGB()}const zv={[yn]:i=>i,[Ne]:i=>i.convertSRGBToLinear(),[Kd]:kv},Vv={[yn]:i=>i,[Ne]:i=>i.convertLinearToSRGB(),[Kd]:Hv},ln={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return yn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=zv[e],r=Vv[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let er;class Zd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{er===void 0&&(er=Ns("canvas")),er.width=e.width,er.height=e.height;const n=er.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ns("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Nr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Nr(t[n]/255)*255):t[n]=Nr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gv=0;class Qd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=gn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Oa(r[o].image)):s.push(Oa(r[o]))}else s=Oa(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Oa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wv=0;class Et extends Mi{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=nn,r=nn,s=Vt,o=Ki,a=rn,c=pi,u=Et.DEFAULT_ANISOTROPY,f=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=gn(),this.name="",this.source=new Qd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===qi?Ne:ji),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Br:e.x=e.x-Math.floor(e.x);break;case nn:e.x=e.x<0?0:1;break;case ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Br:e.y=e.y-Math.floor(e.y);break;case nn:e.y=e.y<0?0:1;break;case ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ne?qi:Yd}set encoding(e){Ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===qi?Ne:ji}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=kd;Et.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,r=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,u=c[0],f=c[4],l=c[8],h=c[1],d=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(f-h)<.01&&Math.abs(l-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(l+_)<.1&&Math.abs(m+g)<.1&&Math.abs(u+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,M=(d+1)/2,b=(p+1)/2,w=(f+h)/4,I=(l+_)/4,U=(m+g)/4;return v>M&&v>b?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=w/n,s=I/n):M>b?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=w/r,s=U/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=I/s,r=U/s),this.set(n,r,s,t),this}let y=Math.sqrt((g-m)*(g-m)+(l-_)*(l-_)+(h-f)*(h-f));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(l-_)/y,this.z=(h-f)/y,this.w=Math.acos((u+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $i extends Mi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Ms("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===qi?Ne:ji),this.texture=new Et(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Vt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ep extends Et{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xv extends Et{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],u=n[r+1],f=n[r+2],l=n[r+3];const h=s[o+0],d=s[o+1],m=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=u,e[t+2]=f,e[t+3]=l;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(l!==_||c!==h||u!==d||f!==m){let g=1-a;const p=c*h+u*d+f*m+l*_,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const b=Math.sqrt(v),w=Math.atan2(b,p*y);g=Math.sin(g*w)/b,a=Math.sin(a*w)/b}const M=a*y;if(c=c*g+h*M,u=u*g+d*M,f=f*g+m*M,l=l*g+_*M,g===1-a){const b=1/Math.sqrt(c*c+u*u+f*f+l*l);c*=b,u*=b,f*=b,l*=b}}e[t]=c,e[t+1]=u,e[t+2]=f,e[t+3]=l}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],u=n[r+2],f=n[r+3],l=s[o],h=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+f*l+c*d-u*h,e[t+1]=c*m+f*h+u*l-a*d,e[t+2]=u*m+f*d+a*h-c*l,e[t+3]=f*m-a*l-c*h-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,u=a(n/2),f=a(r/2),l=a(s/2),h=c(n/2),d=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=h*f*l+u*d*m,this._y=u*d*l-h*f*m,this._z=u*f*m+h*d*l,this._w=u*f*l-h*d*m;break;case"YXZ":this._x=h*f*l+u*d*m,this._y=u*d*l-h*f*m,this._z=u*f*m-h*d*l,this._w=u*f*l+h*d*m;break;case"ZXY":this._x=h*f*l-u*d*m,this._y=u*d*l+h*f*m,this._z=u*f*m+h*d*l,this._w=u*f*l-h*d*m;break;case"ZYX":this._x=h*f*l-u*d*m,this._y=u*d*l+h*f*m,this._z=u*f*m-h*d*l,this._w=u*f*l+h*d*m;break;case"YZX":this._x=h*f*l+u*d*m,this._y=u*d*l+h*f*m,this._z=u*f*m-h*d*l,this._w=u*f*l-h*d*m;break;case"XZY":this._x=h*f*l-u*d*m,this._y=u*d*l-h*f*m,this._z=u*f*m+h*d*l,this._w=u*f*l+h*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],u=t[2],f=t[6],l=t[10],h=n+a+l;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(f-c)*d,this._y=(s-u)*d,this._z=(o-r)*d}else if(n>a&&n>l){const d=2*Math.sqrt(1+n-a-l);this._w=(f-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+u)/d}else if(a>l){const d=2*Math.sqrt(1+a-n-l);this._w=(s-u)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+f)/d}else{const d=2*Math.sqrt(1+l-n-a);this._w=(o-r)/d,this._x=(s+u)/d,this._y=(c+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,u=t._z,f=t._w;return this._x=n*f+o*a+r*u-s*c,this._y=r*f+o*c+s*a-n*u,this._z=s*f+o*u+n*c-r*a,this._w=o*f-n*a-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(c),f=Math.atan2(u,a),l=Math.sin((1-t)*f)/u,h=Math.sin(t*f)/u;return this._w=o*l+this._w*h,this._x=n*l+this._x*h,this._y=r*l+this._y*h,this._z=s*l+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,u=c*t+o*r-a*n,f=c*n+a*t-s*r,l=c*r+s*n-o*t,h=-s*t-o*n-a*r;return this.x=u*c+h*-s+f*-a-l*-o,this.y=f*c+h*-o+l*-s-u*-a,this.z=l*c+h*-a+u*-o-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fa.copy(this).projectOnVector(e),this.sub(Fa)}reflect(e){return this.sub(Fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fa=new L,Qu=new _n;class Sn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),tr.copy(e.boundingBox),tr.applyMatrix4(e.matrixWorld),this.union(tr);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Fn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Fn)}else r.boundingBox===null&&r.computeBoundingBox(),tr.copy(r.boundingBox),tr.applyMatrix4(e.matrixWorld),this.union(tr)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(es),Ks.subVectors(this.max,es),nr.subVectors(e.a,es),ir.subVectors(e.b,es),rr.subVectors(e.c,es),Qn.subVectors(ir,nr),ei.subVectors(rr,ir),Pi.subVectors(nr,rr);let t=[0,-Qn.z,Qn.y,0,-ei.z,ei.y,0,-Pi.z,Pi.y,Qn.z,0,-Qn.x,ei.z,0,-ei.x,Pi.z,0,-Pi.x,-Qn.y,Qn.x,0,-ei.y,ei.x,0,-Pi.y,Pi.x,0];return!Ba(t,nr,ir,rr,Ks)||(t=[1,0,0,0,1,0,0,0,1],!Ba(t,nr,ir,rr,Ks))?!1:($s.crossVectors(Qn,ei),t=[$s.x,$s.y,$s.z],Ba(t,nr,ir,rr,Ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const On=[new L,new L,new L,new L,new L,new L,new L,new L],Fn=new L,tr=new Sn,nr=new L,ir=new L,rr=new L,Qn=new L,ei=new L,Pi=new L,es=new L,Ks=new L,$s=new L,Ii=new L;function Ba(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ii.fromArray(i,s);const a=r.x*Math.abs(Ii.x)+r.y*Math.abs(Ii.y)+r.z*Math.abs(Ii.z),c=e.dot(Ii),u=t.dot(Ii),f=n.dot(Ii);if(Math.max(-Math.max(c,u,f),Math.min(c,u,f))>a)return!1}return!0}const qv=new Sn,ts=new L,ka=new L;class Mn{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):qv.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ts.subVectors(e,this.center);const t=ts.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ts,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ts.copy(e.center).add(ka)),this.expandByPoint(ts.copy(e.center).sub(ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new L,Ha=new L,Js=new L,ti=new L,za=new L,Zs=new L,Va=new L;class Hs{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ha.copy(e).add(t).multiplyScalar(.5),Js.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(Ha);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Js),a=ti.dot(this.direction),c=-ti.dot(Js),u=ti.lengthSq(),f=Math.abs(1-o*o);let l,h,d,m;if(f>0)if(l=o*c-a,h=o*a-c,m=s*f,l>=0)if(h>=-m)if(h<=m){const _=1/f;l*=_,h*=_,d=l*(l+o*h+2*a)+h*(o*l+h+2*c)+u}else h=s,l=Math.max(0,-(o*h+a)),d=-l*l+h*(h+2*c)+u;else h=-s,l=Math.max(0,-(o*h+a)),d=-l*l+h*(h+2*c)+u;else h<=-m?(l=Math.max(0,-(-o*s+a)),h=l>0?-s:Math.min(Math.max(-s,-c),s),d=-l*l+h*(h+2*c)+u):h<=m?(l=0,h=Math.min(Math.max(-s,-c),s),d=h*(h+2*c)+u):(l=Math.max(0,-(o*s+a)),h=l>0?s:Math.min(Math.max(-s,-c),s),d=-l*l+h*(h+2*c)+u);else h=o>0?-s:s,l=Math.max(0,-(o*h+a)),d=-l*l+h*(h+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,l),r&&r.copy(Ha).addScaledVector(Js,h),d}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const n=Bn.dot(this.direction),r=Bn.dot(Bn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const u=1/this.direction.x,f=1/this.direction.y,l=1/this.direction.z,h=this.origin;return u>=0?(n=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(n=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),l>=0?(a=(e.min.z-h.z)*l,c=(e.max.z-h.z)*l):(a=(e.max.z-h.z)*l,c=(e.min.z-h.z)*l),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,r,s){za.subVectors(t,e),Zs.subVectors(n,e),Va.crossVectors(za,Zs);let o=this.direction.dot(Va),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ti.subVectors(this.origin,e);const c=a*this.direction.dot(Zs.crossVectors(ti,Zs));if(c<0)return null;const u=a*this.direction.dot(za.cross(ti));if(u<0||c+u>o)return null;const f=-a*ti.dot(Va);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(e,t,n,r,s,o,a,c,u,f,l,h,d,m,_,g){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,u,f,l,h,d,m,_,g)}set(e,t,n,r,s,o,a,c,u,f,l,h,d,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=u,p[6]=f,p[10]=l,p[14]=h,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/sr.setFromMatrixColumn(e,0).length(),s=1/sr.setFromMatrixColumn(e,1).length(),o=1/sr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),u=Math.sin(r),f=Math.cos(s),l=Math.sin(s);if(e.order==="XYZ"){const h=o*f,d=o*l,m=a*f,_=a*l;t[0]=c*f,t[4]=-c*l,t[8]=u,t[1]=d+m*u,t[5]=h-_*u,t[9]=-a*c,t[2]=_-h*u,t[6]=m+d*u,t[10]=o*c}else if(e.order==="YXZ"){const h=c*f,d=c*l,m=u*f,_=u*l;t[0]=h+_*a,t[4]=m*a-d,t[8]=o*u,t[1]=o*l,t[5]=o*f,t[9]=-a,t[2]=d*a-m,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*f,d=c*l,m=u*f,_=u*l;t[0]=h-_*a,t[4]=-o*l,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*f,t[9]=_-h*a,t[2]=-o*u,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*f,d=o*l,m=a*f,_=a*l;t[0]=c*f,t[4]=m*u-d,t[8]=h*u+_,t[1]=c*l,t[5]=_*u+h,t[9]=d*u-m,t[2]=-u,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,d=o*u,m=a*c,_=a*u;t[0]=c*f,t[4]=_-h*l,t[8]=m*l+d,t[1]=l,t[5]=o*f,t[9]=-a*f,t[2]=-u*f,t[6]=d*l+m,t[10]=h-_*l}else if(e.order==="XZY"){const h=o*c,d=o*u,m=a*c,_=a*u;t[0]=c*f,t[4]=-l,t[8]=u*f,t[1]=h*l+_,t[5]=o*f,t[9]=d*l-m,t[2]=m*l-d,t[6]=a*f,t[10]=_*l+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jv,e,Yv)}lookAt(e,t,n){const r=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),ni.crossVectors(n,Xt),ni.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),ni.crossVectors(n,Xt)),ni.normalize(),Qs.crossVectors(Xt,ni),r[0]=ni.x,r[4]=Qs.x,r[8]=Xt.x,r[1]=ni.y,r[5]=Qs.y,r[9]=Xt.y,r[2]=ni.z,r[6]=Qs.z,r[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],f=n[1],l=n[5],h=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],y=n[3],v=n[7],M=n[11],b=n[15],w=r[0],I=r[4],U=r[8],S=r[12],A=r[1],Y=r[5],z=r[9],H=r[13],q=r[2],O=r[6],G=r[10],k=r[14],B=r[3],oe=r[7],P=r[11],Se=r[15];return s[0]=o*w+a*A+c*q+u*B,s[4]=o*I+a*Y+c*O+u*oe,s[8]=o*U+a*z+c*G+u*P,s[12]=o*S+a*H+c*k+u*Se,s[1]=f*w+l*A+h*q+d*B,s[5]=f*I+l*Y+h*O+d*oe,s[9]=f*U+l*z+h*G+d*P,s[13]=f*S+l*H+h*k+d*Se,s[2]=m*w+_*A+g*q+p*B,s[6]=m*I+_*Y+g*O+p*oe,s[10]=m*U+_*z+g*G+p*P,s[14]=m*S+_*H+g*k+p*Se,s[3]=y*w+v*A+M*q+b*B,s[7]=y*I+v*Y+M*O+b*oe,s[11]=y*U+v*z+M*G+b*P,s[15]=y*S+v*H+M*k+b*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],u=e[13],f=e[2],l=e[6],h=e[10],d=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+s*c*l-r*u*l-s*a*h+n*u*h+r*a*d-n*c*d)+_*(+t*c*d-t*u*h+s*o*h-r*o*d+r*u*f-s*c*f)+g*(+t*u*l-t*a*d-s*o*l+n*o*d+s*a*f-n*u*f)+p*(-r*a*f-t*c*l+t*a*h+r*o*l-n*o*h+n*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],u=e[7],f=e[8],l=e[9],h=e[10],d=e[11],m=e[12],_=e[13],g=e[14],p=e[15],y=l*g*u-_*h*u+_*c*d-a*g*d-l*c*p+a*h*p,v=m*h*u-f*g*u-m*c*d+o*g*d+f*c*p-o*h*p,M=f*_*u-m*l*u+m*a*d-o*_*d-f*a*p+o*l*p,b=m*l*c-f*_*c-m*a*h+o*_*h+f*a*g-o*l*g,w=t*y+n*v+r*M+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/w;return e[0]=y*I,e[1]=(_*h*s-l*g*s-_*r*d+n*g*d+l*r*p-n*h*p)*I,e[2]=(a*g*s-_*c*s+_*r*u-n*g*u-a*r*p+n*c*p)*I,e[3]=(l*c*s-a*h*s-l*r*u+n*h*u+a*r*d-n*c*d)*I,e[4]=v*I,e[5]=(f*g*s-m*h*s+m*r*d-t*g*d-f*r*p+t*h*p)*I,e[6]=(m*c*s-o*g*s-m*r*u+t*g*u+o*r*p-t*c*p)*I,e[7]=(o*h*s-f*c*s+f*r*u-t*h*u-o*r*d+t*c*d)*I,e[8]=M*I,e[9]=(m*l*s-f*_*s-m*n*d+t*_*d+f*n*p-t*l*p)*I,e[10]=(o*_*s-m*a*s+m*n*u-t*_*u-o*n*p+t*a*p)*I,e[11]=(f*a*s-o*l*s-f*n*u+t*l*u+o*n*d-t*a*d)*I,e[12]=b*I,e[13]=(f*_*r-m*l*r+m*n*h-t*_*h-f*n*g+t*l*g)*I,e[14]=(m*a*r-o*_*r-m*n*c+t*_*c+o*n*g-t*a*g)*I,e[15]=(o*l*r-f*a*r+f*n*c-t*l*c-o*n*h+t*a*h)*I,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,u=s*o,f=s*a;return this.set(u*o+n,u*a-r*c,u*c+r*a,0,u*a+r*c,f*a+n,f*c-r*o,0,u*c-r*a,f*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,u=s+s,f=o+o,l=a+a,h=s*u,d=s*f,m=s*l,_=o*f,g=o*l,p=a*l,y=c*u,v=c*f,M=c*l,b=n.x,w=n.y,I=n.z;return r[0]=(1-(_+p))*b,r[1]=(d+M)*b,r[2]=(m-v)*b,r[3]=0,r[4]=(d-M)*w,r[5]=(1-(h+p))*w,r[6]=(g+y)*w,r[7]=0,r[8]=(m+v)*I,r[9]=(g-y)*I,r[10]=(1-(h+_))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=sr.set(r[0],r[1],r[2]).length();const o=sr.set(r[4],r[5],r[6]).length(),a=sr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],cn.copy(this);const u=1/s,f=1/o,l=1/a;return cn.elements[0]*=u,cn.elements[1]*=u,cn.elements[2]*=u,cn.elements[4]*=f,cn.elements[5]*=f,cn.elements[6]*=f,cn.elements[8]*=l,cn.elements[9]*=l,cn.elements[10]*=l,t.setFromRotationMatrix(cn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=jn){const c=this.elements,u=2*s/(t-e),f=2*s/(n-r),l=(t+e)/(t-e),h=(n+r)/(n-r);let d,m;if(a===jn)d=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===zo)d=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=jn){const c=this.elements,u=1/(t-e),f=1/(n-r),l=1/(o-s),h=(t+e)*u,d=(n+r)*f;let m,_;if(a===jn)m=(o+s)*l,_=-2*l;else if(a===zo)m=s*l,_=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const sr=new L,cn=new We,jv=new L(0,0,0),Yv=new L(1,1,1),ni=new L,Qs=new L,Xt=new L,eh=new We,th=new _n;class zs{constructor(e=0,t=0,n=0,r=zs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],u=r[5],f=r[9],l=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-l,s),this._z=0);break;case"ZXY":this._x=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-l,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-l,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return eh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return th.setFromEuler(this),this.setFromQuaternion(th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zs.DEFAULT_ORDER="XYZ";class gc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kv=0;const nh=new L,or=new _n,kn=new We,eo=new L,ns=new L,$v=new L,Jv=new _n,ih=new L(1,0,0),rh=new L(0,1,0),sh=new L(0,0,1),Zv={type:"added"},oh={type:"removed"};class lt extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=lt.DEFAULT_UP.clone();const e=new L,t=new zs,n=new _n,r=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new We},normalMatrix:{value:new Xe}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(ih,e)}rotateY(e){return this.rotateOnAxis(rh,e)}rotateZ(e){return this.rotateOnAxis(sh,e)}translateOnAxis(e,t){return nh.copy(e).applyQuaternion(this.quaternion),this.position.add(nh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ih,e)}translateY(e){return this.translateOnAxis(rh,e)}translateZ(e){return this.translateOnAxis(sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?eo.copy(e):eo.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(ns,eo,this.up):kn.lookAt(eo,ns,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),or.setFromRotationMatrix(kn),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Zv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(oh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,e,$v),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,Jv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){const l=c[u];s(e.shapes,l)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),u=o(e.textures),f=o(e.images),l=o(e.shapes),h=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),l.length>0&&(n.shapes=l),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(a){const c=[];for(const u in a){const f=a[u];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}lt.DEFAULT_UP=new L(0,1,0);lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new L,Hn=new L,Ga=new L,zn=new L,ar=new L,lr=new L,ah=new L,Wa=new L,Xa=new L,qa=new L;let to=!1;class en{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),un.subVectors(e,t),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){un.subVectors(r,t),Hn.subVectors(n,t),Ga.subVectors(e,t);const o=un.dot(un),a=un.dot(Hn),c=un.dot(Ga),u=Hn.dot(Hn),f=Hn.dot(Ga),l=o*u-a*a;if(l===0)return s.set(-2,-1,-1);const h=1/l,d=(u*c-a*f)*h,m=(o*f-a*c)*h;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,zn),zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getUV(e,t,n,r,s,o,a,c){return to===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),to=!0),this.getInterpolation(e,t,n,r,s,o,a,c)}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,zn),c.setScalar(0),c.addScaledVector(s,zn.x),c.addScaledVector(o,zn.y),c.addScaledVector(a,zn.z),c}static isFrontFacing(e,t,n,r){return un.subVectors(n,t),Hn.subVectors(e,t),un.cross(Hn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),un.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return to===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),to=!0),en.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return en.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;ar.subVectors(r,n),lr.subVectors(s,n),Wa.subVectors(e,n);const c=ar.dot(Wa),u=lr.dot(Wa);if(c<=0&&u<=0)return t.copy(n);Xa.subVectors(e,r);const f=ar.dot(Xa),l=lr.dot(Xa);if(f>=0&&l<=f)return t.copy(r);const h=c*l-f*u;if(h<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(ar,o);qa.subVectors(e,s);const d=ar.dot(qa),m=lr.dot(qa);if(m>=0&&d<=m)return t.copy(s);const _=d*u-c*m;if(_<=0&&u>=0&&m<=0)return a=u/(u-m),t.copy(n).addScaledVector(lr,a);const g=f*m-d*l;if(g<=0&&l-f>=0&&d-m>=0)return ah.subVectors(s,r),a=(l-f)/(l-f+(d-m)),t.copy(r).addScaledVector(ah,a);const p=1/(g+_+h);return o=_*p,a=h*p,t.copy(n).addScaledVector(ar,o).addScaledVector(lr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Qv=0;class vn extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=gn(),this.name="",this.type="Material",this.blending=Dr,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ud,this.blendDst=Od,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=wl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Da,this.stencilZFail=Da,this.stencilZPass=Da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const tp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},no={h:0,s:0,l:0};function ja(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ne){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ln.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ln.workingColorSpace){return this.r=e,this.g=t,this.b=n,ln.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ln.workingColorSpace){if(e=mc(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ja(o,s,e+1/3),this.g=ja(o,s,e),this.b=ja(o,s,e-1/3)}return ln.toWorkingColorSpace(this,r),this}setStyle(e,t=Ne){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ne){const n=tp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}copyLinearToSRGB(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ne){return ln.fromWorkingColorSpace(wt.copy(this),e),Math.round(gt(wt.r*255,0,255))*65536+Math.round(gt(wt.g*255,0,255))*256+Math.round(gt(wt.b*255,0,255))}getHexString(e=Ne){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ln.workingColorSpace){ln.fromWorkingColorSpace(wt.copy(this),t);const n=wt.r,r=wt.g,s=wt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,u;const f=(a+o)/2;if(a===o)c=0,u=0;else{const l=o-a;switch(u=f<=.5?l/(o+a):l/(2-o-a),o){case n:c=(r-s)/l+(r<s?6:0);break;case r:c=(s-n)/l+2;break;case s:c=(n-r)/l+4;break}c/=6}return e.h=c,e.s=u,e.l=f,e}getRGB(e,t=ln.workingColorSpace){return ln.fromWorkingColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=Ne){ln.fromWorkingColorSpace(wt.copy(this),e);const t=wt.r,n=wt.g,r=wt.b;return e!==Ne?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(hn),hn.h+=e,hn.s+=t,hn.l+=n,this.setHSL(hn.h,hn.s,hn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hn),e.getHSL(no);const n=Ss(hn.h,no.h,t),r=Ss(hn.s,no.s,t),s=Ss(hn.l,no.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new He;He.NAMES=tp;class zi extends vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new L,io=new be;class bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Il,this.updateRange={offset:0,count:-1},this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)io.fromBufferAttribute(this,t),io.applyMatrix3(e),this.setXY(t,io.x,io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Il&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class np extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ip extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class sn extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let e0=0;const Zt=new We,Ya=new lt,cr=new L,qt=new Sn,is=new Sn,Mt=new L;class on extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jd(e)?ip:np)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return Ya.lookAt(e),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];is.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(qt.min,is.min),qt.expandByPoint(Mt),Mt.addVectors(qt.max,is.max),qt.expandByPoint(Mt)):(qt.expandByPoint(is.min),qt.expandByPoint(is.max))}qt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Mt.fromBufferAttribute(a,u),c&&(cr.fromBufferAttribute(e,u),Mt.add(cr)),r=Math.max(r,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,u=[],f=[];for(let A=0;A<a;A++)u[A]=new L,f[A]=new L;const l=new L,h=new L,d=new L,m=new be,_=new be,g=new be,p=new L,y=new L;function v(A,Y,z){l.fromArray(r,A*3),h.fromArray(r,Y*3),d.fromArray(r,z*3),m.fromArray(o,A*2),_.fromArray(o,Y*2),g.fromArray(o,z*2),h.sub(l),d.sub(l),_.sub(m),g.sub(m);const H=1/(_.x*g.y-g.x*_.y);isFinite(H)&&(p.copy(h).multiplyScalar(g.y).addScaledVector(d,-_.y).multiplyScalar(H),y.copy(d).multiplyScalar(_.x).addScaledVector(h,-g.x).multiplyScalar(H),u[A].add(p),u[Y].add(p),u[z].add(p),f[A].add(y),f[Y].add(y),f[z].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let A=0,Y=M.length;A<Y;++A){const z=M[A],H=z.start,q=z.count;for(let O=H,G=H+q;O<G;O+=3)v(n[O+0],n[O+1],n[O+2])}const b=new L,w=new L,I=new L,U=new L;function S(A){I.fromArray(s,A*3),U.copy(I);const Y=u[A];b.copy(Y),b.sub(I.multiplyScalar(I.dot(Y))).normalize(),w.crossVectors(U,Y);const H=w.dot(f[A])<0?-1:1;c[A*4]=b.x,c[A*4+1]=b.y,c[A*4+2]=b.z,c[A*4+3]=H}for(let A=0,Y=M.length;A<Y;++A){const z=M[A],H=z.start,q=z.count;for(let O=H,G=H+q;O<G;O+=3)S(n[O+0]),S(n[O+1]),S(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new L,s=new L,o=new L,a=new L,c=new L,u=new L,f=new L,l=new L;if(e)for(let h=0,d=e.count;h<d;h+=3){const m=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),f.subVectors(o,s),l.subVectors(r,s),f.cross(l),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,g),a.add(f),c.add(f),u.add(f),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),f.subVectors(o,s),l.subVectors(r,s),f.cross(l),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,c){const u=a.array,f=a.itemSize,l=a.normalized,h=new u.constructor(c.length*f);let d=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*f;for(let p=0;p<f;p++)h[m++]=u[d++]}return new bt(h,f,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],u=e(c,n);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const c=[],u=s[a];for(let f=0,l=u.length;f<l;f++){const h=u[f],d=e(h,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],f=[];for(let l=0,h=u.length;l<h;l++){const d=u[l];f.push(d.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(t))}const s=e.morphAttributes;for(const u in s){const f=[],l=s[u];for(let h=0,d=l.length;h<d;h++)f.push(l[h].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const l=o[u];this.addGroup(l.start,l.count,l.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lh=new We,Di=new Hs,ro=new Mn,ch=new L,ur=new L,hr=new L,fr=new L,Ka=new L,so=new L,oo=new be,ao=new be,lo=new be,uh=new L,hh=new L,fh=new L,co=new L,uo=new L;class Gt extends lt{constructor(e=new on,t=new zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){so.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const f=a[c],l=s[c];f!==0&&(Ka.fromBufferAttribute(l,e),o?so.addScaledVector(Ka,f):so.addScaledVector(Ka.sub(t),f))}t.add(so)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(s),Di.copy(e.ray).recast(e.near),!(ro.containsPoint(Di.origin)===!1&&(Di.intersectSphere(ro,ch)===null||Di.origin.distanceToSquared(ch)>(e.far-e.near)**2))&&(lh.copy(s).invert(),Di.copy(e.ray).applyMatrix4(lh),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,l=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const g=h[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let M=y,b=v;M<b;M+=3){const w=a.getX(M),I=a.getX(M+1),U=a.getX(M+2);r=ho(this,p,e,n,u,f,l,w,I,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const y=a.getX(g),v=a.getX(g+1),M=a.getX(g+2);r=ho(this,o,e,n,u,f,l,y,v,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const g=h[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),v=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let M=y,b=v;M<b;M+=3){const w=M,I=M+1,U=M+2;r=ho(this,p,e,n,u,f,l,w,I,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const y=g,v=g+1,M=g+2;r=ho(this,o,e,n,u,f,l,y,v,M),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function t0(i,e,t,n,r,s,o,a){let c;if(e.side===Ht?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===$n,a),c===null)return null;uo.copy(a),uo.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(uo);return u<t.near||u>t.far?null:{distance:u,point:uo.clone(),object:i}}function ho(i,e,t,n,r,s,o,a,c,u){i.getVertexPosition(a,ur),i.getVertexPosition(c,hr),i.getVertexPosition(u,fr);const f=t0(i,e,t,n,ur,hr,fr,co);if(f){r&&(oo.fromBufferAttribute(r,a),ao.fromBufferAttribute(r,c),lo.fromBufferAttribute(r,u),f.uv=en.getInterpolation(co,ur,hr,fr,oo,ao,lo,new be)),s&&(oo.fromBufferAttribute(s,a),ao.fromBufferAttribute(s,c),lo.fromBufferAttribute(s,u),f.uv1=en.getInterpolation(co,ur,hr,fr,oo,ao,lo,new be),f.uv2=f.uv1),o&&(uh.fromBufferAttribute(o,a),hh.fromBufferAttribute(o,c),fh.fromBufferAttribute(o,u),f.normal=en.getInterpolation(co,ur,hr,fr,uh,hh,fh,new L),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const l={a,b:c,c:u,normal:new L,materialIndex:0};en.getNormal(ur,hr,fr,l.normal),f.face=l}return f}class Xr extends on{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],u=[],f=[],l=[];let h=0,d=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,r,o,2),m("x","z","y",1,-1,e,n,-t,r,o,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new sn(u,3)),this.setAttribute("normal",new sn(f,3)),this.setAttribute("uv",new sn(l,2));function m(_,g,p,y,v,M,b,w,I,U,S){const A=M/I,Y=b/U,z=M/2,H=b/2,q=w/2,O=I+1,G=U+1;let k=0,B=0;const oe=new L;for(let P=0;P<G;P++){const Se=P*Y-H;for(let D=0;D<O;D++){const ne=D*A-z;oe[_]=ne*y,oe[g]=Se*v,oe[p]=q,u.push(oe.x,oe.y,oe.z),oe[_]=0,oe[g]=0,oe[p]=w>0?1:-1,f.push(oe.x,oe.y,oe.z),l.push(D/I),l.push(1-P/U),k+=1}}for(let P=0;P<U;P++)for(let Se=0;Se<I;Se++){const D=h+Se+O*P,ne=h+Se+O*(P+1),le=h+(Se+1)+O*(P+1),ge=h+(Se+1)+O*P;c.push(D,ne,ge),c.push(ne,le,ge),B+=6}a.addGroup(d,B,S),d+=B,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ut(i){const e={};for(let t=0;t<i.length;t++){const n=Vr(i[t]);for(const r in n)e[r]=n[r]}return e}function n0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function rp(i){return i.getRenderTarget()===null?i.outputColorSpace:yn}const sp={clone:Vr,merge:Ut};var i0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i0,this.fragmentShader=r0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vr(e.uniforms),this.uniformsGroups=n0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class op extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Bt extends op{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ys*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/u,r*=o.width/c,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const dr=-90,pr=1;class s0 extends lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new Bt(dr,pr,e,t);r.layers=this.layers,this.add(r);const s=new Bt(dr,pr,e,t);s.layers=this.layers,this.add(s);const o=new Bt(dr,pr,e,t);o.layers=this.layers,this.add(o);const a=new Bt(dr,pr,e,t);a.layers=this.layers,this.add(a);const c=new Bt(dr,pr,e,t);c.layers=this.layers,this.add(c);const u=new Bt(dr,pr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const u of t)this.remove(u);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,c,u]=this.children,f=e.getRenderTarget(),l=e.toneMapping,h=e.xr.enabled;e.toneMapping=Kn,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(f),e.toneMapping=l,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class ap extends Et{constructor(e,t,n,r,s,o,a,c,u,f){e=e!==void 0?e:[],t=t!==void 0?t:Or,super(e,t,n,r,s,o,a,c,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class o0 extends $i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Ms("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===qi?Ne:ji),this.texture=new ap(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xr(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:Vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:di});s.uniforms.tEquirect.value=t;const o=new Gt(r,s),a=t.minFilter;return t.minFilter===Ki&&(t.minFilter=Vt),new s0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const $a=new L,a0=new L,l0=new Xe;class li{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=$a.subVectors(n,t).cross(a0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta($a),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||l0.getNormalMatrix(e),r=this.coplanarPoint($a).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Mn,fo=new L;class _c{constructor(e=new li,t=new li,n=new li,r=new li,s=new li,o=new li){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],u=r[4],f=r[5],l=r[6],h=r[7],d=r[8],m=r[9],_=r[10],g=r[11],p=r[12],y=r[13],v=r[14],M=r[15];if(n[0].setComponents(c-s,h-u,g-d,M-p).normalize(),n[1].setComponents(c+s,h+u,g+d,M+p).normalize(),n[2].setComponents(c+o,h+f,g+m,M+y).normalize(),n[3].setComponents(c-o,h-f,g-m,M-y).normalize(),n[4].setComponents(c-a,h-l,g-_,M-v).normalize(),t===jn)n[5].setComponents(c+a,h+l,g+_,M+v).normalize();else if(t===zo)n[5].setComponents(a,l,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(fo.x=r.normal.x>0?e.max.x:e.min.x,fo.y=r.normal.y>0?e.max.y:e.min.y,fo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lp(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function c0(i,e){const t=e.isWebGL2,n=new WeakMap;function r(u,f){const l=u.array,h=u.usage,d=i.createBuffer();i.bindBuffer(f,d),i.bufferData(f,l,h),u.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)m=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:u.version}}function s(u,f,l){const h=f.array,d=f.updateRange;i.bindBuffer(l,u),d.count===-1?i.bufferSubData(l,0,h):(t?i.bufferSubData(l,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):i.bufferSubData(l,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=n.get(u);f&&(i.deleteBuffer(f.buffer),n.delete(u))}function c(u,f){if(u.isGLBufferAttribute){const h=n.get(u);(!h||h.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const l=n.get(u);l===void 0?n.set(u,r(u,f)):l.version<u.version&&(s(l.buffer,u,f),l.version=u.version)}return{get:o,remove:a,update:c}}class vc extends on{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),u=a+1,f=c+1,l=e/a,h=t/c,d=[],m=[],_=[],g=[];for(let p=0;p<f;p++){const y=p*h-o;for(let v=0;v<u;v++){const M=v*l-s;m.push(M,-y,0),_.push(0,0,1),g.push(v/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const v=y+u*p,M=y+u*(p+1),b=y+1+u*(p+1),w=y+1+u*p;d.push(v,M,w),d.push(M,b,w)}this.setIndex(d),this.setAttribute("position",new sn(m,3)),this.setAttribute("normal",new sn(_,3)),this.setAttribute("uv",new sn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.width,e.height,e.widthSegments,e.heightSegments)}}var u0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,d0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,m0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g0="vec3 transformed = vec3( position );",_0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,x0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,y0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,C0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,L0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,P0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,I0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,U0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O0="gl_FragColor = linearToOutputTexel( gl_FragColor );",F0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,B0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,H0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,G0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Y0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,K0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Z0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Q0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ex=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ix=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,sx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ox=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ax=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,cx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ux=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dx=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,px=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_x=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Sx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Mx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Tx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Ex=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Lx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Px=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ix=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ux=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ox=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,jx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$x=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ey=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ty=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ny=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iy=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ry=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ly=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hy=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,dy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,py=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_y=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xy=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,My=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ty=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ey=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,by=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ay=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ry=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ly=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Py=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ny=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uy=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Oy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,By=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ge={alphamap_fragment:u0,alphamap_pars_fragment:h0,alphatest_fragment:f0,alphatest_pars_fragment:d0,aomap_fragment:p0,aomap_pars_fragment:m0,begin_vertex:g0,beginnormal_vertex:_0,bsdfs:v0,iridescence_fragment:x0,bumpmap_pars_fragment:y0,clipping_planes_fragment:S0,clipping_planes_pars_fragment:M0,clipping_planes_pars_vertex:T0,clipping_planes_vertex:E0,color_fragment:b0,color_pars_fragment:A0,color_pars_vertex:w0,color_vertex:R0,common:C0,cube_uv_reflection_fragment:L0,defaultnormal_vertex:P0,displacementmap_pars_vertex:I0,displacementmap_vertex:D0,emissivemap_fragment:N0,emissivemap_pars_fragment:U0,encodings_fragment:O0,encodings_pars_fragment:F0,envmap_fragment:B0,envmap_common_pars_fragment:k0,envmap_pars_fragment:H0,envmap_pars_vertex:z0,envmap_physical_pars_fragment:Q0,envmap_vertex:V0,fog_vertex:G0,fog_pars_vertex:W0,fog_fragment:X0,fog_pars_fragment:q0,gradientmap_pars_fragment:j0,lightmap_fragment:Y0,lightmap_pars_fragment:K0,lights_lambert_fragment:$0,lights_lambert_pars_fragment:J0,lights_pars_begin:Z0,lights_toon_fragment:ex,lights_toon_pars_fragment:tx,lights_phong_fragment:nx,lights_phong_pars_fragment:ix,lights_physical_fragment:rx,lights_physical_pars_fragment:sx,lights_fragment_begin:ox,lights_fragment_maps:ax,lights_fragment_end:lx,logdepthbuf_fragment:cx,logdepthbuf_pars_fragment:ux,logdepthbuf_pars_vertex:hx,logdepthbuf_vertex:fx,map_fragment:dx,map_pars_fragment:px,map_particle_fragment:mx,map_particle_pars_fragment:gx,metalnessmap_fragment:_x,metalnessmap_pars_fragment:vx,morphcolor_vertex:xx,morphnormal_vertex:yx,morphtarget_pars_vertex:Sx,morphtarget_vertex:Mx,normal_fragment_begin:Tx,normal_fragment_maps:Ex,normal_pars_fragment:bx,normal_pars_vertex:Ax,normal_vertex:wx,normalmap_pars_fragment:Rx,clearcoat_normal_fragment_begin:Cx,clearcoat_normal_fragment_maps:Lx,clearcoat_pars_fragment:Px,iridescence_pars_fragment:Ix,output_fragment:Dx,packing:Nx,premultiplied_alpha_fragment:Ux,project_vertex:Ox,dithering_fragment:Fx,dithering_pars_fragment:Bx,roughnessmap_fragment:kx,roughnessmap_pars_fragment:Hx,shadowmap_pars_fragment:zx,shadowmap_pars_vertex:Vx,shadowmap_vertex:Gx,shadowmask_pars_fragment:Wx,skinbase_vertex:Xx,skinning_pars_vertex:qx,skinning_vertex:jx,skinnormal_vertex:Yx,specularmap_fragment:Kx,specularmap_pars_fragment:$x,tonemapping_fragment:Jx,tonemapping_pars_fragment:Zx,transmission_fragment:Qx,transmission_pars_fragment:ey,uv_pars_fragment:ty,uv_pars_vertex:ny,uv_vertex:iy,worldpos_vertex:ry,background_vert:sy,background_frag:oy,backgroundCube_vert:ay,backgroundCube_frag:ly,cube_vert:cy,cube_frag:uy,depth_vert:hy,depth_frag:fy,distanceRGBA_vert:dy,distanceRGBA_frag:py,equirect_vert:my,equirect_frag:gy,linedashed_vert:_y,linedashed_frag:vy,meshbasic_vert:xy,meshbasic_frag:yy,meshlambert_vert:Sy,meshlambert_frag:My,meshmatcap_vert:Ty,meshmatcap_frag:Ey,meshnormal_vert:by,meshnormal_frag:Ay,meshphong_vert:wy,meshphong_frag:Ry,meshphysical_vert:Cy,meshphysical_frag:Ly,meshtoon_vert:Py,meshtoon_frag:Iy,points_vert:Dy,points_frag:Ny,shadow_vert:Uy,shadow_frag:Oy,sprite_vert:Fy,sprite_frag:By},ve={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Cn={basic:{uniforms:Ut([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ut([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new He(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ut([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ut([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ut([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new He(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ut([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ut([ve.points,ve.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ut([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ut([ve.common,ve.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ut([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ut([ve.sprite,ve.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Ut([ve.common,ve.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Ut([ve.lights,ve.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Cn.physical={uniforms:Ut([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const po={r:0,b:0,g:0};function ky(i,e,t,n,r,s,o){const a=new He(0);let c=s===!0?0:1,u,f,l=null,h=0,d=null;function m(g,p){let y=!1,v=p.isScene===!0?p.background:null;switch(v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,c):v&&v.isColor&&(_(v,1),y=!0),i.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),y=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),y=!0;break}(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ia)?(f===void 0&&(f=new Gt(new Xr(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Vr(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(w,I,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,f.material.toneMapped=v.colorSpace!==Ne,(l!==v||h!==v.version||d!==i.toneMapping)&&(f.material.needsUpdate=!0,l=v,h=v.version,d=i.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new Gt(new vc(2,2),new _i({name:"BackgroundMaterial",uniforms:Vr(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=v.colorSpace!==Ne,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(l!==v||h!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,l=v,h=v.version,d=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function _(g,p){g.getRGB(po,rp(i)),n.buffers.color.setClear(po.r,po.g,po.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,_(a,c)},render:m}}function Hy(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=g(null);let u=c,f=!1;function l(q,O,G,k,B){let oe=!1;if(o){const P=_(k,G,O);u!==P&&(u=P,d(u.object)),oe=p(q,k,G,B),oe&&y(q,k,G,B)}else{const P=O.wireframe===!0;(u.geometry!==k.id||u.program!==G.id||u.wireframe!==P)&&(u.geometry=k.id,u.program=G.id,u.wireframe=P,oe=!0)}B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(oe||f)&&(f=!1,U(q,O,G,k),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(q){return n.isWebGL2?i.bindVertexArray(q):s.bindVertexArrayOES(q)}function m(q){return n.isWebGL2?i.deleteVertexArray(q):s.deleteVertexArrayOES(q)}function _(q,O,G){const k=G.wireframe===!0;let B=a[q.id];B===void 0&&(B={},a[q.id]=B);let oe=B[O.id];oe===void 0&&(oe={},B[O.id]=oe);let P=oe[k];return P===void 0&&(P=g(h()),oe[k]=P),P}function g(q){const O=[],G=[],k=[];for(let B=0;B<r;B++)O[B]=0,G[B]=0,k[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:k,object:q,attributes:{},index:null}}function p(q,O,G,k){const B=u.attributes,oe=O.attributes;let P=0;const Se=G.getAttributes();for(const D in Se)if(Se[D].location>=0){const le=B[D];let ge=oe[D];if(ge===void 0&&(D==="instanceMatrix"&&q.instanceMatrix&&(ge=q.instanceMatrix),D==="instanceColor"&&q.instanceColor&&(ge=q.instanceColor)),le===void 0||le.attribute!==ge||ge&&le.data!==ge.data)return!0;P++}return u.attributesNum!==P||u.index!==k}function y(q,O,G,k){const B={},oe=O.attributes;let P=0;const Se=G.getAttributes();for(const D in Se)if(Se[D].location>=0){let le=oe[D];le===void 0&&(D==="instanceMatrix"&&q.instanceMatrix&&(le=q.instanceMatrix),D==="instanceColor"&&q.instanceColor&&(le=q.instanceColor));const ge={};ge.attribute=le,le&&le.data&&(ge.data=le.data),B[D]=ge,P++}u.attributes=B,u.attributesNum=P,u.index=k}function v(){const q=u.newAttributes;for(let O=0,G=q.length;O<G;O++)q[O]=0}function M(q){b(q,0)}function b(q,O){const G=u.newAttributes,k=u.enabledAttributes,B=u.attributeDivisors;G[q]=1,k[q]===0&&(i.enableVertexAttribArray(q),k[q]=1),B[q]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](q,O),B[q]=O)}function w(){const q=u.newAttributes,O=u.enabledAttributes;for(let G=0,k=O.length;G<k;G++)O[G]!==q[G]&&(i.disableVertexAttribArray(G),O[G]=0)}function I(q,O,G,k,B,oe,P){P===!0?i.vertexAttribIPointer(q,O,G,B,oe):i.vertexAttribPointer(q,O,G,k,B,oe)}function U(q,O,G,k){if(n.isWebGL2===!1&&(q.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const B=k.attributes,oe=G.getAttributes(),P=O.defaultAttributeValues;for(const Se in oe){const D=oe[Se];if(D.location>=0){let ne=B[Se];if(ne===void 0&&(Se==="instanceMatrix"&&q.instanceMatrix&&(ne=q.instanceMatrix),Se==="instanceColor"&&q.instanceColor&&(ne=q.instanceColor)),ne!==void 0){const le=ne.normalized,ge=ne.itemSize,fe=t.get(ne);if(fe===void 0)continue;const Te=fe.buffer,Ie=fe.type,Le=fe.bytesPerElement,$e=n.isWebGL2===!0&&(Ie===i.INT||Ie===i.UNSIGNED_INT||ne.gpuType===zd);if(ne.isInterleavedBufferAttribute){const ze=ne.data,W=ze.stride,R=ne.offset;if(ze.isInstancedInterleavedBuffer){for(let C=0;C<D.locationSize;C++)b(D.location+C,ze.meshPerAttribute);q.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let C=0;C<D.locationSize;C++)M(D.location+C);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let C=0;C<D.locationSize;C++)I(D.location+C,ge/D.locationSize,Ie,le,W*Le,(R+ge/D.locationSize*C)*Le,$e)}else{if(ne.isInstancedBufferAttribute){for(let ze=0;ze<D.locationSize;ze++)b(D.location+ze,ne.meshPerAttribute);q.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ze=0;ze<D.locationSize;ze++)M(D.location+ze);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let ze=0;ze<D.locationSize;ze++)I(D.location+ze,ge/D.locationSize,Ie,le,ge*Le,ge/D.locationSize*ze*Le,$e)}}else if(P!==void 0){const le=P[Se];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(D.location,le);break;case 3:i.vertexAttrib3fv(D.location,le);break;case 4:i.vertexAttrib4fv(D.location,le);break;default:i.vertexAttrib1fv(D.location,le)}}}}w()}function S(){z();for(const q in a){const O=a[q];for(const G in O){const k=O[G];for(const B in k)m(k[B].object),delete k[B];delete O[G]}delete a[q]}}function A(q){if(a[q.id]===void 0)return;const O=a[q.id];for(const G in O){const k=O[G];for(const B in k)m(k[B].object),delete k[B];delete O[G]}delete a[q.id]}function Y(q){for(const O in a){const G=a[O];if(G[q.id]===void 0)continue;const k=G[q.id];for(const B in k)m(k[B].object),delete k[B];delete G[q.id]}}function z(){H(),f=!0,u!==c&&(u=c,d(u.object))}function H(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:l,reset:z,resetDefaultState:H,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:Y,initAttributes:v,enableAttribute:M,disableUnusedAttributes:w}}function zy(i,e,t,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,f){i.drawArrays(s,u,f),t.update(f,s,1)}function c(u,f,l){if(l===0)return;let h,d;if(r)h=i,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,u,f,l),t.update(f,s,l)}this.setMode=o,this.render=a,this.renderInstances=c}function Vy(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const u=o||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,l=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,M=o||e.has("OES_texture_float"),b=v&&M,w=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:l,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:b,maxSamples:w}}function Gy(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new li,a=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,h){const d=l.length!==0||h||n!==0||r;return r=h,n=l.length,d},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(l,h){t=f(l,h,0)},this.setState=function(l,h,d){const m=l.clippingPlanes,_=l.clipIntersection,g=l.clipShadows,p=i.get(l);if(!r||m===null||m.length===0||s&&!g)s?f(null):u();else{const y=s?0:n,v=y*4;let M=p.clippingState||null;c.value=M,M=f(m,h,v,d);for(let b=0;b!==v;++b)M[b]=t[b];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(l,h,d,m){const _=l!==null?l.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=d+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,M=d;v!==_;++v,M+=4)o.copy(l[v]).applyMatrix4(y,a),o.normal.toArray(g,M),g[M+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Wy(i){let e=new WeakMap;function t(o,a){return a===Rl?o.mapping=Or:a===Cl&&(o.mapping=Fr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Rl||a===Cl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new o0(c.height/2);return u.fromEquirectangularTexture(i,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class xc extends op{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const br=4,dh=[.125,.215,.35,.446,.526,.582],ki=20,Ja=new xc,ph=new He;let Za=null;const Fi=(1+Math.sqrt(5))/2,mr=1/Fi,mh=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Fi,mr),new L(0,Fi,-mr),new L(mr,0,Fi),new L(-mr,0,Fi),new L(Fi,mr,0),new L(-Fi,mr,0)];class gh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Za=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Za),e.scissorTest=!1,mo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Or||e.mapping===Fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Za=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Is,format:rn,colorSpace:yn,depthBuffer:!1},r=_h(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_h(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xy(s)),this._blurMaterial=qy(s,e,t)}return r}_compileMaterial(e){const t=new Gt(this._lodPlanes[0],e);this._renderer.compile(t,Ja)}_sceneToCubeUV(e,t,n,r){const a=new Bt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,l=f.autoClear,h=f.toneMapping;f.getClearColor(ph),f.toneMapping=Kn,f.autoClear=!1;const d=new zi({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),m=new Gt(new Xr,d);let _=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,_=!0):(d.color.copy(ph),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(u[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,u[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,u[p]));const v=this._cubeSize;mo(r,y*v,p>2?v:0,v,v),f.setRenderTarget(r),_&&f.render(m,a),f.render(e,a)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=h,f.autoClear=l,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Or||e.mapping===Fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Gt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;mo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ja)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=mh[(r-1)%mh.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,l=new Gt(this._lodPlanes[r],u),h=u.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ki-1),_=s/m,g=isFinite(s)?1+Math.floor(f*_):ki;g>ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ki}`);const p=[];let y=0;for(let I=0;I<ki;++I){const U=I/_,S=Math.exp(-U*U/2);p.push(S),I===0?y+=S:I<g&&(y+=2*S)}for(let I=0;I<p.length;I++)p[I]=p[I]/y;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=m,h.mipInt.value=v-n;const M=this._sizeLods[r],b=3*M*(r>v-br?r-v+br:0),w=4*(this._cubeSize-M);mo(t,b,w,3*M,2*M),c.setRenderTarget(t),c.render(l,Ja)}}function Xy(i){const e=[],t=[],n=[];let r=i;const s=i-br+1+dh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-br?c=dh[o-i+br-1]:o===0&&(c=0),n.push(c);const u=1/(a-2),f=-u,l=1+u,h=[f,f,l,f,l,l,f,f,l,l,f,l],d=6,m=6,_=3,g=2,p=1,y=new Float32Array(_*m*d),v=new Float32Array(g*m*d),M=new Float32Array(p*m*d);for(let w=0;w<d;w++){const I=w%3*2/3-1,U=w>2?0:-1,S=[I,U,0,I+2/3,U,0,I+2/3,U+1,0,I,U,0,I+2/3,U+1,0,I,U+1,0];y.set(S,_*m*w),v.set(h,g*m*w);const A=[w,w,w,w,w,w];M.set(A,p*m*w)}const b=new on;b.setAttribute("position",new bt(y,_)),b.setAttribute("uv",new bt(v,g)),b.setAttribute("faceIndex",new bt(M,p)),e.push(b),r>br&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _h(i,e,t){const n=new $i(i,e,t);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function qy(i,e,t){const n=new Float32Array(ki),r=new L(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function vh(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function xh(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function yc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jy(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,u=c===Rl||c===Cl,f=c===Or||c===Fr;if(u||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let l=e.get(a);return t===null&&(t=new gh(i)),l=u?t.fromEquirectangular(a,l):t.fromCubemap(a,l),e.set(a,l),l.texture}else{if(e.has(a))return e.get(a).texture;{const l=a.image;if(u&&l&&l.height>0||f&&l&&r(l)){t===null&&(t=new gh(i));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let c=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&c++;return c===u}function s(a){const c=a.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Yy(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Ky(i,e,t,n){const r={},s=new WeakMap;function o(l){const h=l.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);for(const m in h.morphAttributes){const _=h.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(l,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(l){const h=l.attributes;for(const m in h)e.update(h[m],i.ARRAY_BUFFER);const d=l.morphAttributes;for(const m in d){const _=d[m];for(let g=0,p=_.length;g<p;g++)e.update(_[g],i.ARRAY_BUFFER)}}function u(l){const h=[],d=l.index,m=l.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let v=0,M=y.length;v<M;v+=3){const b=y[v+0],w=y[v+1],I=y[v+2];h.push(b,w,w,I,I,b)}}else{const y=m.array;_=m.version;for(let v=0,M=y.length/3-1;v<M;v+=3){const b=v+0,w=v+1,I=v+2;h.push(b,w,w,I,I,b)}}const g=new(Jd(h)?ip:np)(h,1);g.version=_;const p=s.get(l);p&&e.remove(p),s.set(l,g)}function f(l){const h=s.get(l);if(h){const d=l.index;d!==null&&h.version<d.version&&u(l)}else u(l);return s.get(l)}return{get:a,update:c,getWireframeAttribute:f}}function $y(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}let a,c;function u(h){a=h.type,c=h.bytesPerElement}function f(h,d){i.drawElements(s,d,a,h*c),t.update(d,s,1)}function l(h,d,m){if(m===0)return;let _,g;if(r)_=i,g="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[g](s,d,a,h*c,m),t.update(d,s,m)}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=l}function Jy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Zy(i,e){return i[0]-e[0]}function Qy(i,e){return Math.abs(e[1])-Math.abs(i[1])}function eS(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new rt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function c(u,f,l){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const d=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,m=d!==void 0?d.length:0;let _=s.get(f);if(_===void 0||_.count!==m){let q=function(){z.dispose(),s.delete(f),f.removeEventListener("dispose",q)};_!==void 0&&_.texture.dispose();const y=f.morphAttributes.position!==void 0,v=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,b=f.morphAttributes.position||[],w=f.morphAttributes.normal||[],I=f.morphAttributes.color||[];let U=0;y===!0&&(U=1),v===!0&&(U=2),M===!0&&(U=3);let S=f.attributes.position.count*U,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const Y=new Float32Array(S*A*4*m),z=new ep(Y,S,A,m);z.type=qn,z.needsUpdate=!0;const H=U*4;for(let O=0;O<m;O++){const G=b[O],k=w[O],B=I[O],oe=S*A*4*O;for(let P=0;P<G.count;P++){const Se=P*H;y===!0&&(o.fromBufferAttribute(G,P),Y[oe+Se+0]=o.x,Y[oe+Se+1]=o.y,Y[oe+Se+2]=o.z,Y[oe+Se+3]=0),v===!0&&(o.fromBufferAttribute(k,P),Y[oe+Se+4]=o.x,Y[oe+Se+5]=o.y,Y[oe+Se+6]=o.z,Y[oe+Se+7]=0),M===!0&&(o.fromBufferAttribute(B,P),Y[oe+Se+8]=o.x,Y[oe+Se+9]=o.y,Y[oe+Se+10]=o.z,Y[oe+Se+11]=B.itemSize===4?o.w:1)}}_={count:m,texture:z,size:new be(S,A)},s.set(f,_),f.addEventListener("dispose",q)}let g=0;for(let y=0;y<h.length;y++)g+=h[y];const p=f.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",h),l.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const d=h===void 0?0:h.length;let m=n[f.id];if(m===void 0||m.length!==d){m=[];for(let v=0;v<d;v++)m[v]=[v,0];n[f.id]=m}for(let v=0;v<d;v++){const M=m[v];M[0]=v,M[1]=h[v]}m.sort(Qy);for(let v=0;v<8;v++)v<d&&m[v][1]?(a[v][0]=m[v][0],a[v][1]=m[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Zy);const _=f.morphAttributes.position,g=f.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const M=a[v],b=M[0],w=M[1];b!==Number.MAX_SAFE_INTEGER&&w?(_&&f.getAttribute("morphTarget"+v)!==_[b]&&f.setAttribute("morphTarget"+v,_[b]),g&&f.getAttribute("morphNormal"+v)!==g[b]&&f.setAttribute("morphNormal"+v,g[b]),r[v]=w,p+=w):(_&&f.hasAttribute("morphTarget"+v)===!0&&f.deleteAttribute("morphTarget"+v),g&&f.hasAttribute("morphNormal"+v)===!0&&f.deleteAttribute("morphNormal"+v),r[v]=0)}const y=f.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function tS(i,e,t,n){let r=new WeakMap;function s(c){const u=n.render.frame,f=c.geometry,l=e.get(c,f);return r.get(l)!==u&&(e.update(l),r.set(l,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER)),l}function o(){r=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const cp=new Et,up=new ep,hp=new Xv,fp=new ap,yh=[],Sh=[],Mh=new Float32Array(16),Th=new Float32Array(9),Eh=new Float32Array(4);function qr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=yh[r];if(s===void 0&&(s=new Float32Array(r),yh[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ra(i,e){let t=Sh[e];t===void 0&&(t=new Int32Array(e),Sh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function nS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function iS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),yt(t,e)}}function rS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),yt(t,e)}}function sS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),yt(t,e)}}function oS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;Eh.set(n),i.uniformMatrix2fv(this.addr,!1,Eh),yt(t,n)}}function aS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;Th.set(n),i.uniformMatrix3fv(this.addr,!1,Th),yt(t,n)}}function lS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;Mh.set(n),i.uniformMatrix4fv(this.addr,!1,Mh),yt(t,n)}}function cS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function uS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),yt(t,e)}}function hS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),yt(t,e)}}function fS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),yt(t,e)}}function dS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function pS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),yt(t,e)}}function mS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),yt(t,e)}}function gS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),yt(t,e)}}function _S(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||cp,r)}function vS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||hp,r)}function xS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||fp,r)}function yS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||up,r)}function SS(i){switch(i){case 5126:return nS;case 35664:return iS;case 35665:return rS;case 35666:return sS;case 35674:return oS;case 35675:return aS;case 35676:return lS;case 5124:case 35670:return cS;case 35667:case 35671:return uS;case 35668:case 35672:return hS;case 35669:case 35673:return fS;case 5125:return dS;case 36294:return pS;case 36295:return mS;case 36296:return gS;case 35678:case 36198:case 36298:case 36306:case 35682:return _S;case 35679:case 36299:case 36307:return vS;case 35680:case 36300:case 36308:case 36293:return xS;case 36289:case 36303:case 36311:case 36292:return yS}}function MS(i,e){i.uniform1fv(this.addr,e)}function TS(i,e){const t=qr(e,this.size,2);i.uniform2fv(this.addr,t)}function ES(i,e){const t=qr(e,this.size,3);i.uniform3fv(this.addr,t)}function bS(i,e){const t=qr(e,this.size,4);i.uniform4fv(this.addr,t)}function AS(i,e){const t=qr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function wS(i,e){const t=qr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function RS(i,e){const t=qr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function CS(i,e){i.uniform1iv(this.addr,e)}function LS(i,e){i.uniform2iv(this.addr,e)}function PS(i,e){i.uniform3iv(this.addr,e)}function IS(i,e){i.uniform4iv(this.addr,e)}function DS(i,e){i.uniform1uiv(this.addr,e)}function NS(i,e){i.uniform2uiv(this.addr,e)}function US(i,e){i.uniform3uiv(this.addr,e)}function OS(i,e){i.uniform4uiv(this.addr,e)}function FS(i,e,t){const n=this.cache,r=e.length,s=ra(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||cp,s[o])}function BS(i,e,t){const n=this.cache,r=e.length,s=ra(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||hp,s[o])}function kS(i,e,t){const n=this.cache,r=e.length,s=ra(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||fp,s[o])}function HS(i,e,t){const n=this.cache,r=e.length,s=ra(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||up,s[o])}function zS(i){switch(i){case 5126:return MS;case 35664:return TS;case 35665:return ES;case 35666:return bS;case 35674:return AS;case 35675:return wS;case 35676:return RS;case 5124:case 35670:return CS;case 35667:case 35671:return LS;case 35668:case 35672:return PS;case 35669:case 35673:return IS;case 5125:return DS;case 36294:return NS;case 36295:return US;case 36296:return OS;case 35678:case 36198:case 36298:case 36306:case 35682:return FS;case 35679:case 36299:case 36307:return BS;case 35680:case 36300:case 36308:case 36293:return kS;case 36289:case 36303:case 36311:case 36292:return HS}}class VS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=SS(t.type)}}class GS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=zS(t.type)}}class WS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Qa=/(\w+)(\])?(\[|\.)?/g;function bh(i,e){i.seq.push(e),i.map[e.id]=e}function XS(i,e,t){const n=i.name,r=n.length;for(Qa.lastIndex=0;;){const s=Qa.exec(n),o=Qa.lastIndex;let a=s[1];const c=s[2]==="]",u=s[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===r){bh(t,u===void 0?new VS(a,i,e):new GS(a,i,e));break}else{let l=t.map[a];l===void 0&&(l=new WS(a),bh(t,l)),t=l}}}class Lo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);XS(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Ah(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let qS=0;function jS(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function YS(i){switch(i){case yn:return["Linear","( value )"];case Ne:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function wh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+jS(i.getShaderSource(e),o)}else return r}function KS(i,e){const t=YS(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function $S(i,e){let t;switch(e){case Y_:t="Linear";break;case K_:t="Reinhard";break;case $_:t="OptimizedCineon";break;case Bd:t="ACESFilmic";break;case J_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function JS(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fs).join(`
`)}function ZS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function QS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function fs(i){return i!==""}function Rh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ch(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(i){return i.replace(eM,tM)}function tM(i,e){const t=Ge[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ol(t)}const nM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lh(i){return i.replace(nM,iM)}function iM(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ph(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===A_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wn&&(e="SHADOWMAP_TYPE_VSM"),e}function sM(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Or:case Fr:e="ENVMAP_TYPE_CUBE";break;case ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Fr:e="ENVMAP_MODE_REFRACTION";break}return e}function aM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fd:e="ENVMAP_BLENDING_MULTIPLY";break;case q_:e="ENVMAP_BLENDING_MIX";break;case j_:e="ENVMAP_BLENDING_ADD";break}return e}function lM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function cM(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=rM(t),u=sM(t),f=oM(t),l=aM(t),h=lM(t),d=t.isWebGL2?"":JS(t),m=ZS(s),_=r.createProgram();let g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(fs).join(`
`),g.length>0&&(g+=`
`),p=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(fs).join(`
`),p.length>0&&(p+=`
`)):(g=[Ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),p=[d,Ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+l:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Kn?$S("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.encodings_pars_fragment,KS("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fs).join(`
`)),o=Ol(o),o=Rh(o,t),o=Ch(o,t),a=Ol(a),a=Rh(a,t),a=Ch(a,t),o=Lh(o),a=Lh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===$u?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+g+o,M=y+p+a,b=Ah(r,r.VERTEX_SHADER,v),w=Ah(r,r.FRAGMENT_SHADER,M);if(r.attachShader(_,b),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),i.debug.checkShaderErrors){const S=r.getProgramInfoLog(_).trim(),A=r.getShaderInfoLog(b).trim(),Y=r.getShaderInfoLog(w).trim();let z=!0,H=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,b,w);else{const q=wh(r,b,"vertex"),O=wh(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+q+`
`+O)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(A===""||Y==="")&&(H=!1);H&&(this.diagnostics={runnable:z,programLog:S,vertexShader:{log:A,prefix:g},fragmentShader:{log:Y,prefix:p}})}r.deleteShader(b),r.deleteShader(w);let I;this.getUniforms=function(){return I===void 0&&(I=new Lo(r,_)),I};let U;return this.getAttributes=function(){return U===void 0&&(U=QS(r,_)),U},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=w,this}let uM=0;class hM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new fM(e),t.set(e,n)),n}}class fM{constructor(e){this.id=uM++,this.code=e,this.usedTimes=0}}function dM(i,e,t,n,r,s,o){const a=new gc,c=new hM,u=[],f=r.isWebGL2,l=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function g(S,A,Y,z,H){const q=z.fog,O=H.geometry,G=S.isMeshStandardMaterial?z.environment:null,k=(S.isMeshStandardMaterial?t:e).get(S.envMap||G),B=k&&k.mapping===ia?k.image.height:null,oe=m[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const P=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Se=P!==void 0?P.length:0;let D=0;O.morphAttributes.position!==void 0&&(D=1),O.morphAttributes.normal!==void 0&&(D=2),O.morphAttributes.color!==void 0&&(D=3);let ne,le,ge,fe;if(oe){const dt=Cn[oe];ne=dt.vertexShader,le=dt.fragmentShader}else ne=S.vertexShader,le=S.fragmentShader,c.update(S),ge=c.getVertexShaderID(S),fe=c.getFragmentShaderID(S);const Te=i.getRenderTarget(),Ie=H.isInstancedMesh===!0,Le=!!S.map,$e=!!S.matcap,ze=!!k,W=!!S.aoMap,R=!!S.lightMap,C=!!S.bumpMap,V=!!S.normalMap,K=!!S.displacementMap,ee=!!S.emissiveMap,J=!!S.metalnessMap,se=!!S.roughnessMap,ce=S.anisotropy>0,he=S.clearcoat>0,ae=S.iridescence>0,T=S.sheen>0,x=S.transmission>0,F=ce&&!!S.anisotropyMap,Z=he&&!!S.clearcoatMap,ie=he&&!!S.clearcoatNormalMap,ue=he&&!!S.clearcoatRoughnessMap,pe=ae&&!!S.iridescenceMap,me=ae&&!!S.iridescenceThicknessMap,Q=T&&!!S.sheenColorMap,Re=T&&!!S.sheenRoughnessMap,Ee=!!S.specularMap,Ce=!!S.specularColorMap,Ae=!!S.specularIntensityMap,xe=x&&!!S.transmissionMap,De=x&&!!S.thicknessMap,et=!!S.gradientMap,N=!!S.alphaMap,ye=S.alphaTest>0,$=!!S.extensions,_e=!!O.attributes.uv1,Me=!!O.attributes.uv2,Ke=!!O.attributes.uv3;return{isWebGL2:f,shaderID:oe,shaderType:S.type,shaderName:S.name,vertexShader:ne,fragmentShader:le,defines:S.defines,customVertexShaderID:ge,customFragmentShaderID:fe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,instancing:Ie,instancingColor:Ie&&H.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Te===null?i.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:yn,map:Le,matcap:$e,envMap:ze,envMapMode:ze&&k.mapping,envMapCubeUVHeight:B,aoMap:W,lightMap:R,bumpMap:C,normalMap:V,displacementMap:h&&K,emissiveMap:ee,normalMapObjectSpace:V&&S.normalMapType===pv,normalMapTangentSpace:V&&S.normalMapType===pc,metalnessMap:J,roughnessMap:se,anisotropy:ce,anisotropyMap:F,clearcoat:he,clearcoatMap:Z,clearcoatNormalMap:ie,clearcoatRoughnessMap:ue,iridescence:ae,iridescenceMap:pe,iridescenceThicknessMap:me,sheen:T,sheenColorMap:Q,sheenRoughnessMap:Re,specularMap:Ee,specularColorMap:Ce,specularIntensityMap:Ae,transmission:x,transmissionMap:xe,thicknessMap:De,gradientMap:et,opaque:S.transparent===!1&&S.blending===Dr,alphaMap:N,alphaTest:ye,combine:S.combine,mapUv:Le&&_(S.map.channel),aoMapUv:W&&_(S.aoMap.channel),lightMapUv:R&&_(S.lightMap.channel),bumpMapUv:C&&_(S.bumpMap.channel),normalMapUv:V&&_(S.normalMap.channel),displacementMapUv:K&&_(S.displacementMap.channel),emissiveMapUv:ee&&_(S.emissiveMap.channel),metalnessMapUv:J&&_(S.metalnessMap.channel),roughnessMapUv:se&&_(S.roughnessMap.channel),anisotropyMapUv:F&&_(S.anisotropyMap.channel),clearcoatMapUv:Z&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:me&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(S.sheenRoughnessMap.channel),specularMapUv:Ee&&_(S.specularMap.channel),specularColorMapUv:Ce&&_(S.specularColorMap.channel),specularIntensityMapUv:Ae&&_(S.specularIntensityMap.channel),transmissionMapUv:xe&&_(S.transmissionMap.channel),thicknessMapUv:De&&_(S.thicknessMap.channel),alphaMapUv:N&&_(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(V||ce),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:_e,vertexUv2s:Me,vertexUv3s:Ke,pointsUvs:H.isPoints===!0&&!!O.attributes.uv&&(Le||N),fog:!!q,useFog:S.fog===!0,fogExp2:q&&q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:l,skinning:H.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:D,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&Y.length>0,shadowMapType:i.shadowMap.type,toneMapping:S.toneMapped?i.toneMapping:Kn,useLegacyLights:i.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ln,flipSided:S.side===Ht,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:$&&S.extensions.derivatives===!0,extensionFragDepth:$&&S.extensions.fragDepth===!0,extensionDrawBuffers:$&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:$&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const Y in S.defines)A.push(Y),A.push(S.defines[Y]);return S.isRawShaderMaterial===!1&&(y(A,S),v(A,S),A.push(i.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function y(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function v(S,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),S.push(a.mask)}function M(S){const A=m[S.type];let Y;if(A){const z=Cn[A];Y=sp.clone(z.uniforms)}else Y=S.uniforms;return Y}function b(S,A){let Y;for(let z=0,H=u.length;z<H;z++){const q=u[z];if(q.cacheKey===A){Y=q,++Y.usedTimes;break}}return Y===void 0&&(Y=new cM(i,A,S,s),u.push(Y)),Y}function w(S){if(--S.usedTimes===0){const A=u.indexOf(S);u[A]=u[u.length-1],u.pop(),S.destroy()}}function I(S){c.remove(S)}function U(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:M,acquireProgram:b,releaseProgram:w,releaseShaderCache:I,programs:u,dispose:U}}function pM(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function mM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ih(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Dh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(l,h,d,m,_,g){let p=i[e];return p===void 0?(p={id:l.id,object:l,geometry:h,material:d,groupOrder:m,renderOrder:l.renderOrder,z:_,group:g},i[e]=p):(p.id=l.id,p.object=l,p.geometry=h,p.material=d,p.groupOrder=m,p.renderOrder=l.renderOrder,p.z=_,p.group=g),e++,p}function a(l,h,d,m,_,g){const p=o(l,h,d,m,_,g);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function c(l,h,d,m,_,g){const p=o(l,h,d,m,_,g);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function u(l,h){t.length>1&&t.sort(l||mM),n.length>1&&n.sort(h||Ih),r.length>1&&r.sort(h||Ih)}function f(){for(let l=e,h=i.length;l<h;l++){const d=i[l];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:f,sort:u}}function gM(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Dh,i.set(n,[o])):r>=s.length?(o=new Dh,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function _M(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new He};break;case"SpotLight":t={position:new L,direction:new L,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function vM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let xM=0;function yM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function SM(i,e){const t=new _M,n=vM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)r.probe.push(new L);const s=new L,o=new We,a=new We;function c(f,l){let h=0,d=0,m=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let _=0,g=0,p=0,y=0,v=0,M=0,b=0,w=0,I=0,U=0;f.sort(yM);const S=l===!0?Math.PI:1;for(let Y=0,z=f.length;Y<z;Y++){const H=f[Y],q=H.color,O=H.intensity,G=H.distance,k=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)h+=q.r*O*S,d+=q.g*O*S,m+=q.b*O*S;else if(H.isLightProbe)for(let B=0;B<9;B++)r.probe[B].addScaledVector(H.sh.coefficients[B],O);else if(H.isDirectionalLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity*S),H.castShadow){const oe=H.shadow,P=n.get(H);P.shadowBias=oe.bias,P.shadowNormalBias=oe.normalBias,P.shadowRadius=oe.radius,P.shadowMapSize=oe.mapSize,r.directionalShadow[_]=P,r.directionalShadowMap[_]=k,r.directionalShadowMatrix[_]=H.shadow.matrix,M++}r.directional[_]=B,_++}else if(H.isSpotLight){const B=t.get(H);B.position.setFromMatrixPosition(H.matrixWorld),B.color.copy(q).multiplyScalar(O*S),B.distance=G,B.coneCos=Math.cos(H.angle),B.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),B.decay=H.decay,r.spot[p]=B;const oe=H.shadow;if(H.map&&(r.spotLightMap[I]=H.map,I++,oe.updateMatrices(H),H.castShadow&&U++),r.spotLightMatrix[p]=oe.matrix,H.castShadow){const P=n.get(H);P.shadowBias=oe.bias,P.shadowNormalBias=oe.normalBias,P.shadowRadius=oe.radius,P.shadowMapSize=oe.mapSize,r.spotShadow[p]=P,r.spotShadowMap[p]=k,w++}p++}else if(H.isRectAreaLight){const B=t.get(H);B.color.copy(q).multiplyScalar(O),B.halfWidth.set(H.width*.5,0,0),B.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=B,y++}else if(H.isPointLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity*S),B.distance=H.distance,B.decay=H.decay,H.castShadow){const oe=H.shadow,P=n.get(H);P.shadowBias=oe.bias,P.shadowNormalBias=oe.normalBias,P.shadowRadius=oe.radius,P.shadowMapSize=oe.mapSize,P.shadowCameraNear=oe.camera.near,P.shadowCameraFar=oe.camera.far,r.pointShadow[g]=P,r.pointShadowMap[g]=k,r.pointShadowMatrix[g]=H.shadow.matrix,b++}r.point[g]=B,g++}else if(H.isHemisphereLight){const B=t.get(H);B.skyColor.copy(H.color).multiplyScalar(O*S),B.groundColor.copy(H.groundColor).multiplyScalar(O*S),r.hemi[v]=B,v++}}y>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=m;const A=r.hash;(A.directionalLength!==_||A.pointLength!==g||A.spotLength!==p||A.rectAreaLength!==y||A.hemiLength!==v||A.numDirectionalShadows!==M||A.numPointShadows!==b||A.numSpotShadows!==w||A.numSpotMaps!==I)&&(r.directional.length=_,r.spot.length=p,r.rectArea.length=y,r.point.length=g,r.hemi.length=v,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=w+I-U,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=U,A.directionalLength=_,A.pointLength=g,A.spotLength=p,A.rectAreaLength=y,A.hemiLength=v,A.numDirectionalShadows=M,A.numPointShadows=b,A.numSpotShadows=w,A.numSpotMaps=I,r.version=xM++)}function u(f,l){let h=0,d=0,m=0,_=0,g=0;const p=l.matrixWorldInverse;for(let y=0,v=f.length;y<v;y++){const M=f[y];if(M.isDirectionalLight){const b=r.directional[h];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),h++}else if(M.isSpotLight){const b=r.spot[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const b=r.rectArea[_];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const b=r.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const b=r.hemi[g];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),g++}}}return{setup:c,setupView:u,state:r}}function Nh(i,e){const t=new SM(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(l){n.push(l)}function a(l){r.push(l)}function c(l){t.setup(n,l)}function u(l){t.setupView(n,l)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a}}function MM(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new Nh(i,e),t.set(s,[c])):o>=a.length?(c=new Nh(i,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class TM extends vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class EM extends vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wM(i,e,t){let n=new _c;const r=new be,s=new be,o=new rt,a=new TM({depthPacking:dv}),c=new EM,u={},f=t.maxTextureSize,l={[$n]:Ht,[Ht]:$n,[Ln]:Ln},h=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:bM,fragmentShader:AM}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new on;m.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Gt(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nd;let p=this.type;this.render=function(b,w,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const U=i.getRenderTarget(),S=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(di),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const z=p!==wn&&this.type===wn,H=p===wn&&this.type!==wn;for(let q=0,O=b.length;q<O;q++){const G=b[q],k=G.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const B=k.getFrameExtents();if(r.multiply(B),s.copy(k.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/B.x),r.x=s.x*B.x,k.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/B.y),r.y=s.y*B.y,k.mapSize.y=s.y)),k.map===null||z===!0||H===!0){const P=this.type!==wn?{minFilter:Tt,magFilter:Tt}:{};k.map!==null&&k.map.dispose(),k.map=new $i(r.x,r.y,P),k.map.texture.name=G.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const oe=k.getViewportCount();for(let P=0;P<oe;P++){const Se=k.getViewport(P);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),Y.viewport(o),k.updateMatrices(G,P),n=k.getFrustum(),M(w,I,k.camera,G,this.type)}k.isPointLightShadow!==!0&&this.type===wn&&y(k,I),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(U,S,A)};function y(b,w){const I=e.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new $i(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,I,h,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,I,d,_,null)}function v(b,w,I,U){let S=null;const A=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)S=A;else if(S=I.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Y=S.uuid,z=w.uuid;let H=u[Y];H===void 0&&(H={},u[Y]=H);let q=H[z];q===void 0&&(q=S.clone(),H[z]=q),S=q}if(S.visible=w.visible,S.wireframe=w.wireframe,U===wn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:l[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const Y=i.properties.get(S);Y.light=I}return S}function M(b,w,I,U,S){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===wn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);const z=e.update(b),H=b.material;if(Array.isArray(H)){const q=z.groups;for(let O=0,G=q.length;O<G;O++){const k=q[O],B=H[k.materialIndex];if(B&&B.visible){const oe=v(b,B,U,S);i.renderBufferDirect(I,null,z,oe,b,k)}}}else if(H.visible){const q=v(b,H,U,S);i.renderBufferDirect(I,null,z,q,b,null)}}const Y=b.children;for(let z=0,H=Y.length;z<H;z++)M(Y[z],w,I,U,S)}}function RM(i,e,t){const n=t.isWebGL2;function r(){let N=!1;const ye=new rt;let $=null;const _e=new rt(0,0,0,0);return{setMask:function(Me){$!==Me&&!N&&(i.colorMask(Me,Me,Me,Me),$=Me)},setLocked:function(Me){N=Me},setClear:function(Me,Ke,ct,dt,Ei){Ei===!0&&(Me*=dt,Ke*=dt,ct*=dt),ye.set(Me,Ke,ct,dt),_e.equals(ye)===!1&&(i.clearColor(Me,Ke,ct,dt),_e.copy(ye))},reset:function(){N=!1,$=null,_e.set(-1,0,0,0)}}}function s(){let N=!1,ye=null,$=null,_e=null;return{setTest:function(Me){Me?Te(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(Me){ye!==Me&&!N&&(i.depthMask(Me),ye=Me)},setFunc:function(Me){if($!==Me){switch(Me){case k_:i.depthFunc(i.NEVER);break;case H_:i.depthFunc(i.ALWAYS);break;case z_:i.depthFunc(i.LESS);break;case wl:i.depthFunc(i.LEQUAL);break;case V_:i.depthFunc(i.EQUAL);break;case G_:i.depthFunc(i.GEQUAL);break;case W_:i.depthFunc(i.GREATER);break;case X_:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=Me}},setLocked:function(Me){N=Me},setClear:function(Me){_e!==Me&&(i.clearDepth(Me),_e=Me)},reset:function(){N=!1,ye=null,$=null,_e=null}}}function o(){let N=!1,ye=null,$=null,_e=null,Me=null,Ke=null,ct=null,dt=null,Ei=null;return{setTest:function(ut){N||(ut?Te(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(ut){ye!==ut&&!N&&(i.stencilMask(ut),ye=ut)},setFunc:function(ut,Tn,Pt){($!==ut||_e!==Tn||Me!==Pt)&&(i.stencilFunc(ut,Tn,Pt),$=ut,_e=Tn,Me=Pt)},setOp:function(ut,Tn,Pt){(Ke!==ut||ct!==Tn||dt!==Pt)&&(i.stencilOp(ut,Tn,Pt),Ke=ut,ct=Tn,dt=Pt)},setLocked:function(ut){N=ut},setClear:function(ut){Ei!==ut&&(i.clearStencil(ut),Ei=ut)},reset:function(){N=!1,ye=null,$=null,_e=null,Me=null,Ke=null,ct=null,dt=null,Ei=null}}}const a=new r,c=new s,u=new o,f=new WeakMap,l=new WeakMap;let h={},d={},m=new WeakMap,_=[],g=null,p=!1,y=null,v=null,M=null,b=null,w=null,I=null,U=null,S=!1,A=null,Y=null,z=null,H=null,q=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,k=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=k>=1):B.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=k>=2);let oe=null,P={};const Se=i.getParameter(i.SCISSOR_BOX),D=i.getParameter(i.VIEWPORT),ne=new rt().fromArray(Se),le=new rt().fromArray(D);function ge(N,ye,$,_e){const Me=new Uint8Array(4),Ke=i.createTexture();i.bindTexture(N,Ke),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ct=0;ct<$;ct++)n&&(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)?i.texImage3D(ye,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(ye+ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return Ke}const fe={};fe[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(fe[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Te(i.DEPTH_TEST),c.setFunc(wl),K(!1),ee(Su),Te(i.CULL_FACE),C(di);function Te(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Ie(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Le(N,ye){return d[N]!==ye?(i.bindFramebuffer(N,ye),d[N]=ye,n&&(N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ye),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ye)),!0):!1}function $e(N,ye){let $=_,_e=!1;if(N)if($=m.get(ye),$===void 0&&($=[],m.set(ye,$)),N.isWebGLMultipleRenderTargets){const Me=N.texture;if($.length!==Me.length||$[0]!==i.COLOR_ATTACHMENT0){for(let Ke=0,ct=Me.length;Ke<ct;Ke++)$[Ke]=i.COLOR_ATTACHMENT0+Ke;$.length=Me.length,_e=!0}}else $[0]!==i.COLOR_ATTACHMENT0&&($[0]=i.COLOR_ATTACHMENT0,_e=!0);else $[0]!==i.BACK&&($[0]=i.BACK,_e=!0);_e&&(t.isWebGL2?i.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function ze(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const W={[Mr]:i.FUNC_ADD,[R_]:i.FUNC_SUBTRACT,[C_]:i.FUNC_REVERSE_SUBTRACT};if(n)W[bu]=i.MIN,W[Au]=i.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(W[bu]=N.MIN_EXT,W[Au]=N.MAX_EXT)}const R={[L_]:i.ZERO,[P_]:i.ONE,[I_]:i.SRC_COLOR,[Ud]:i.SRC_ALPHA,[B_]:i.SRC_ALPHA_SATURATE,[O_]:i.DST_COLOR,[N_]:i.DST_ALPHA,[D_]:i.ONE_MINUS_SRC_COLOR,[Od]:i.ONE_MINUS_SRC_ALPHA,[F_]:i.ONE_MINUS_DST_COLOR,[U_]:i.ONE_MINUS_DST_ALPHA};function C(N,ye,$,_e,Me,Ke,ct,dt){if(N===di){p===!0&&(Ie(i.BLEND),p=!1);return}if(p===!1&&(Te(i.BLEND),p=!0),N!==w_){if(N!==y||dt!==S){if((v!==Mr||w!==Mr)&&(i.blendEquation(i.FUNC_ADD),v=Mr,w=Mr),dt)switch(N){case Dr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mu:i.blendFunc(i.ONE,i.ONE);break;case Tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Eu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Dr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Eu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,b=null,I=null,U=null,y=N,S=dt}return}Me=Me||ye,Ke=Ke||$,ct=ct||_e,(ye!==v||Me!==w)&&(i.blendEquationSeparate(W[ye],W[Me]),v=ye,w=Me),($!==M||_e!==b||Ke!==I||ct!==U)&&(i.blendFuncSeparate(R[$],R[_e],R[Ke],R[ct]),M=$,b=_e,I=Ke,U=ct),y=N,S=!1}function V(N,ye){N.side===Ln?Ie(i.CULL_FACE):Te(i.CULL_FACE);let $=N.side===Ht;ye&&($=!$),K($),N.blending===Dr&&N.transparent===!1?C(di):C(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),a.setMask(N.colorWrite);const _e=N.stencilWrite;u.setTest(_e),_e&&(u.setMask(N.stencilWriteMask),u.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),u.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),se(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Te(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(N){A!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),A=N)}function ee(N){N!==E_?(Te(i.CULL_FACE),N!==Y&&(N===Su?i.cullFace(i.BACK):N===b_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),Y=N}function J(N){N!==z&&(G&&i.lineWidth(N),z=N)}function se(N,ye,$){N?(Te(i.POLYGON_OFFSET_FILL),(H!==ye||q!==$)&&(i.polygonOffset(ye,$),H=ye,q=$)):Ie(i.POLYGON_OFFSET_FILL)}function ce(N){N?Te(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function he(N){N===void 0&&(N=i.TEXTURE0+O-1),oe!==N&&(i.activeTexture(N),oe=N)}function ae(N,ye,$){$===void 0&&(oe===null?$=i.TEXTURE0+O-1:$=oe);let _e=P[$];_e===void 0&&(_e={type:void 0,texture:void 0},P[$]=_e),(_e.type!==N||_e.texture!==ye)&&(oe!==$&&(i.activeTexture($),oe=$),i.bindTexture(N,ye||fe[N]),_e.type=N,_e.texture=ye)}function T(){const N=P[oe];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function x(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function F(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(N){ne.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ne.copy(N))}function Ae(N){le.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),le.copy(N))}function xe(N,ye){let $=l.get(ye);$===void 0&&($=new WeakMap,l.set(ye,$));let _e=$.get(N);_e===void 0&&(_e=i.getUniformBlockIndex(ye,N.name),$.set(N,_e))}function De(N,ye){const _e=l.get(ye).get(N);f.get(ye)!==_e&&(i.uniformBlockBinding(ye,_e,N.__bindingPointIndex),f.set(ye,_e))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},oe=null,P={},d={},m=new WeakMap,_=[],g=null,p=!1,y=null,v=null,M=null,b=null,w=null,I=null,U=null,S=!1,A=null,Y=null,z=null,H=null,q=null,ne.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:Te,disable:Ie,bindFramebuffer:Le,drawBuffers:$e,useProgram:ze,setBlending:C,setMaterial:V,setFlipSided:K,setCullFace:ee,setLineWidth:J,setPolygonOffset:se,setScissorTest:ce,activeTexture:he,bindTexture:ae,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:Re,texImage3D:Ee,updateUBOMapping:xe,uniformBlockBinding:De,texStorage2D:me,texStorage3D:Q,texSubImage2D:Z,texSubImage3D:ie,compressedTexSubImage2D:ue,compressedTexSubImage3D:pe,scissor:Ce,viewport:Ae,reset:et}}function CM(i,e,t,n,r,s,o){const a=r.isWebGL2,c=r.maxTextures,u=r.maxCubemapSize,f=r.maxTextureSize,l=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let _;const g=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,x){return p?new OffscreenCanvas(T,x):Ns("canvas")}function v(T,x,F,Z){let ie=1;if((T.width>Z||T.height>Z)&&(ie=Z/Math.max(T.width,T.height)),ie<1||x===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ue=x?Vo:Math.floor,pe=ue(ie*T.width),me=ue(ie*T.height);_===void 0&&(_=y(pe,me));const Q=F?y(pe,me):_;return Q.width=pe,Q.height=me,Q.getContext("2d").drawImage(T,0,0,pe,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+pe+"x"+me+")."),Q}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function M(T){return Nl(T.width)&&Nl(T.height)}function b(T){return a?!1:T.wrapS!==nn||T.wrapT!==nn||T.minFilter!==Tt&&T.minFilter!==Vt}function w(T,x){return T.generateMipmaps&&x&&T.minFilter!==Tt&&T.minFilter!==Vt}function I(T){i.generateMipmap(T)}function U(T,x,F,Z,ie=!1){if(a===!1)return x;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ue=x;return x===i.RED&&(F===i.FLOAT&&(ue=i.R32F),F===i.HALF_FLOAT&&(ue=i.R16F),F===i.UNSIGNED_BYTE&&(ue=i.R8)),x===i.RG&&(F===i.FLOAT&&(ue=i.RG32F),F===i.HALF_FLOAT&&(ue=i.RG16F),F===i.UNSIGNED_BYTE&&(ue=i.RG8)),x===i.RGBA&&(F===i.FLOAT&&(ue=i.RGBA32F),F===i.HALF_FLOAT&&(ue=i.RGBA16F),F===i.UNSIGNED_BYTE&&(ue=Z===Ne&&ie===!1?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(ue=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(ue=i.RGB5_A1)),(ue===i.R16F||ue===i.R32F||ue===i.RG16F||ue===i.RG32F||ue===i.RGBA16F||ue===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function S(T,x,F){return w(T,F)===!0||T.isFramebufferTexture&&T.minFilter!==Tt&&T.minFilter!==Vt?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function A(T){return T===Tt||T===Ll||T===Co?i.NEAREST:i.LINEAR}function Y(T){const x=T.target;x.removeEventListener("dispose",Y),H(x),x.isVideoTexture&&m.delete(x)}function z(T){const x=T.target;x.removeEventListener("dispose",z),O(x)}function H(T){const x=n.get(T);if(x.__webglInit===void 0)return;const F=T.source,Z=g.get(F);if(Z){const ie=Z[x.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&q(T),Object.keys(Z).length===0&&g.delete(F)}n.remove(T)}function q(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const F=T.source,Z=g.get(F);delete Z[x.__cacheKey],o.memory.textures--}function O(T){const x=T.texture,F=n.get(T),Z=n.get(x);if(Z.__webglTexture!==void 0&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)i.deleteFramebuffer(F.__webglFramebuffer[ie]),F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[ie]);else{if(i.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ie=0;ie<F.__webglColorRenderbuffer.length;ie++)F.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[ie]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ie=0,ue=x.length;ie<ue;ie++){const pe=n.get(x[ie]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(x[ie])}n.remove(x),n.remove(T)}let G=0;function k(){G=0}function B(){const T=G;return T>=c&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+c),G+=1,T}function oe(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function P(T,x){const F=n.get(T);if(T.isVideoTexture&&he(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(F,T,x);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function Se(T,x){const F=n.get(T);if(T.version>0&&F.__version!==T.version){Le(F,T,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function D(T,x){const F=n.get(T);if(T.version>0&&F.__version!==T.version){Le(F,T,x);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function ne(T,x){const F=n.get(T);if(T.version>0&&F.__version!==T.version){$e(F,T,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}const le={[Br]:i.REPEAT,[nn]:i.CLAMP_TO_EDGE,[ko]:i.MIRRORED_REPEAT},ge={[Tt]:i.NEAREST,[Ll]:i.NEAREST_MIPMAP_NEAREST,[Co]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[Hd]:i.LINEAR_MIPMAP_NEAREST,[Ki]:i.LINEAR_MIPMAP_LINEAR},fe={[gv]:i.NEVER,[Tv]:i.ALWAYS,[_v]:i.LESS,[xv]:i.LEQUAL,[vv]:i.EQUAL,[Mv]:i.GEQUAL,[yv]:i.GREATER,[Sv]:i.NOTEQUAL};function Te(T,x,F){if(F?(i.texParameteri(T,i.TEXTURE_WRAP_S,le[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,le[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,le[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ge[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ge[x.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==nn||x.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,A(x.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,A(x.minFilter)),x.minFilter!==Tt&&x.minFilter!==Vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,fe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Tt||x.minFilter!==Co&&x.minFilter!==Ki||x.type===qn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Is&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(T,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Ie(T,x){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",Y));const Z=x.source;let ie=g.get(Z);ie===void 0&&(ie={},g.set(Z,ie));const ue=oe(x);if(ue!==T.__cacheKey){ie[ue]===void 0&&(ie[ue]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ie[ue].usedTimes++;const pe=ie[T.__cacheKey];pe!==void 0&&(ie[T.__cacheKey].usedTimes--,pe.usedTimes===0&&q(x)),T.__cacheKey=ue,T.__webglTexture=ie[ue].texture}return F}function Le(T,x,F){let Z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=i.TEXTURE_3D);const ie=Ie(T,x),ue=x.source;t.bindTexture(Z,T.__webglTexture,i.TEXTURE0+F);const pe=n.get(ue);if(ue.version!==pe.__version||ie===!0){t.activeTexture(i.TEXTURE0+F),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const me=b(x)&&M(x.image)===!1;let Q=v(x.image,me,!1,f);Q=ae(x,Q);const Re=M(Q)||a,Ee=s.convert(x.format,x.colorSpace);let Ce=s.convert(x.type),Ae=U(x.internalFormat,Ee,Ce,x.colorSpace);Te(Z,x,Re);let xe;const De=x.mipmaps,et=a&&x.isVideoTexture!==!0,N=pe.__version===void 0||ie===!0,ye=S(x,Q,Re);if(x.isDepthTexture)Ae=i.DEPTH_COMPONENT,a?x.type===qn?Ae=i.DEPTH_COMPONENT32F:x.type===hi?Ae=i.DEPTH_COMPONENT24:x.type===Wi?Ae=i.DEPTH24_STENCIL8:Ae=i.DEPTH_COMPONENT16:x.type===qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Xi&&Ae===i.DEPTH_COMPONENT&&x.type!==fc&&x.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=hi,Ce=s.convert(x.type)),x.format===kr&&Ae===i.DEPTH_COMPONENT&&(Ae=i.DEPTH_STENCIL,x.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Wi,Ce=s.convert(x.type))),N&&(et?t.texStorage2D(i.TEXTURE_2D,1,Ae,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Ae,Q.width,Q.height,0,Ee,Ce,null));else if(x.isDataTexture)if(De.length>0&&Re){et&&N&&t.texStorage2D(i.TEXTURE_2D,ye,Ae,De[0].width,De[0].height);for(let $=0,_e=De.length;$<_e;$++)xe=De[$],et?t.texSubImage2D(i.TEXTURE_2D,$,0,0,xe.width,xe.height,Ee,Ce,xe.data):t.texImage2D(i.TEXTURE_2D,$,Ae,xe.width,xe.height,0,Ee,Ce,xe.data);x.generateMipmaps=!1}else et?(N&&t.texStorage2D(i.TEXTURE_2D,ye,Ae,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,Ee,Ce,Q.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,Q.width,Q.height,0,Ee,Ce,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){et&&N&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Ae,De[0].width,De[0].height,Q.depth);for(let $=0,_e=De.length;$<_e;$++)xe=De[$],x.format!==rn?Ee!==null?et?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,xe.width,xe.height,Q.depth,Ee,xe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Ae,xe.width,xe.height,Q.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,xe.width,xe.height,Q.depth,Ee,Ce,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,Ae,xe.width,xe.height,Q.depth,0,Ee,Ce,xe.data)}else{et&&N&&t.texStorage2D(i.TEXTURE_2D,ye,Ae,De[0].width,De[0].height);for(let $=0,_e=De.length;$<_e;$++)xe=De[$],x.format!==rn?Ee!==null?et?t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,xe.width,xe.height,Ee,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,$,Ae,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage2D(i.TEXTURE_2D,$,0,0,xe.width,xe.height,Ee,Ce,xe.data):t.texImage2D(i.TEXTURE_2D,$,Ae,xe.width,xe.height,0,Ee,Ce,xe.data)}else if(x.isDataArrayTexture)et?(N&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Ae,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Ee,Ce,Q.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,Q.width,Q.height,Q.depth,0,Ee,Ce,Q.data);else if(x.isData3DTexture)et?(N&&t.texStorage3D(i.TEXTURE_3D,ye,Ae,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Ee,Ce,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,Q.width,Q.height,Q.depth,0,Ee,Ce,Q.data);else if(x.isFramebufferTexture){if(N)if(et)t.texStorage2D(i.TEXTURE_2D,ye,Ae,Q.width,Q.height);else{let $=Q.width,_e=Q.height;for(let Me=0;Me<ye;Me++)t.texImage2D(i.TEXTURE_2D,Me,Ae,$,_e,0,Ee,Ce,null),$>>=1,_e>>=1}}else if(De.length>0&&Re){et&&N&&t.texStorage2D(i.TEXTURE_2D,ye,Ae,De[0].width,De[0].height);for(let $=0,_e=De.length;$<_e;$++)xe=De[$],et?t.texSubImage2D(i.TEXTURE_2D,$,0,0,Ee,Ce,xe):t.texImage2D(i.TEXTURE_2D,$,Ae,Ee,Ce,xe);x.generateMipmaps=!1}else et?(N&&t.texStorage2D(i.TEXTURE_2D,ye,Ae,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Ce,Q)):t.texImage2D(i.TEXTURE_2D,0,Ae,Ee,Ce,Q);w(x,Re)&&I(Z),pe.__version=ue.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function $e(T,x,F){if(x.image.length!==6)return;const Z=Ie(T,x),ie=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);const ue=n.get(ie);if(ie.version!==ue.__version||Z===!0){t.activeTexture(i.TEXTURE0+F),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const pe=x.isCompressedTexture||x.image[0].isCompressedTexture,me=x.image[0]&&x.image[0].isDataTexture,Q=[];for(let $=0;$<6;$++)!pe&&!me?Q[$]=v(x.image[$],!1,!0,u):Q[$]=me?x.image[$].image:x.image[$],Q[$]=ae(x,Q[$]);const Re=Q[0],Ee=M(Re)||a,Ce=s.convert(x.format,x.colorSpace),Ae=s.convert(x.type),xe=U(x.internalFormat,Ce,Ae,x.colorSpace),De=a&&x.isVideoTexture!==!0,et=ue.__version===void 0||Z===!0;let N=S(x,Re,Ee);Te(i.TEXTURE_CUBE_MAP,x,Ee);let ye;if(pe){De&&et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,N,xe,Re.width,Re.height);for(let $=0;$<6;$++){ye=Q[$].mipmaps;for(let _e=0;_e<ye.length;_e++){const Me=ye[_e];x.format!==rn?Ce!==null?De?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,0,0,Me.width,Me.height,Ce,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,xe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,0,0,Me.width,Me.height,Ce,Ae,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,xe,Me.width,Me.height,0,Ce,Ae,Me.data)}}}else{ye=x.mipmaps,De&&et&&(ye.length>0&&N++,t.texStorage2D(i.TEXTURE_CUBE_MAP,N,xe,Q[0].width,Q[0].height));for(let $=0;$<6;$++)if(me){De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Q[$].width,Q[$].height,Ce,Ae,Q[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,xe,Q[$].width,Q[$].height,0,Ce,Ae,Q[$].data);for(let _e=0;_e<ye.length;_e++){const Ke=ye[_e].image[$].image;De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,0,0,Ke.width,Ke.height,Ce,Ae,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,xe,Ke.width,Ke.height,0,Ce,Ae,Ke.data)}}else{De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ce,Ae,Q[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,xe,Ce,Ae,Q[$]);for(let _e=0;_e<ye.length;_e++){const Me=ye[_e];De?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,0,0,Ce,Ae,Me.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,xe,Ce,Ae,Me.image[$])}}}w(x,Ee)&&I(i.TEXTURE_CUBE_MAP),ue.__version=ie.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ze(T,x,F,Z,ie){const ue=s.convert(F.format,F.colorSpace),pe=s.convert(F.type),me=U(F.internalFormat,ue,pe,F.colorSpace);n.get(x).__hasExternalTextures||(ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,me,x.width,x.height,x.depth,0,ue,pe,null):t.texImage2D(ie,0,me,x.width,x.height,0,ue,pe,null)),t.bindFramebuffer(i.FRAMEBUFFER,T),ce(x)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ie,n.get(F).__webglTexture,0,se(x)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ie,n.get(F).__webglTexture,0),t.bindFramebuffer(i.FRAMEBUFFER,null)}function W(T,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer&&!x.stencilBuffer){let Z=i.DEPTH_COMPONENT16;if(F||ce(x)){const ie=x.depthTexture;ie&&ie.isDepthTexture&&(ie.type===qn?Z=i.DEPTH_COMPONENT32F:ie.type===hi&&(Z=i.DEPTH_COMPONENT24));const ue=se(x);ce(x)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,Z,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,Z,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,Z,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(x.depthBuffer&&x.stencilBuffer){const Z=se(x);F&&ce(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,i.DEPTH24_STENCIL8,x.width,x.height):ce(x)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{const Z=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ie=0;ie<Z.length;ie++){const ue=Z[ie],pe=s.convert(ue.format,ue.colorSpace),me=s.convert(ue.type),Q=U(ue.internalFormat,pe,me,ue.colorSpace),Re=se(x);F&&ce(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,Q,x.width,x.height):ce(x)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,Q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function R(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),P(x.depthTexture,0);const Z=n.get(x.depthTexture).__webglTexture,ie=se(x);if(x.depthTexture.format===Xi)ce(x)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(x.depthTexture.format===kr)ce(x)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function C(T){const x=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");R(x.__webglFramebuffer,T)}else if(F){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]=i.createRenderbuffer(),W(x.__webglDepthbuffer[Z],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),W(x.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function V(T,x,F){const Z=n.get(T);x!==void 0&&ze(Z.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),F!==void 0&&C(T)}function K(T){const x=T.texture,F=n.get(T),Z=n.get(x);T.addEventListener("dispose",z),T.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=x.version,o.memory.textures++);const ie=T.isWebGLCubeRenderTarget===!0,ue=T.isWebGLMultipleRenderTargets===!0,pe=M(T)||a;if(ie){F.__webglFramebuffer=[];for(let me=0;me<6;me++)F.__webglFramebuffer[me]=i.createFramebuffer()}else{if(F.__webglFramebuffer=i.createFramebuffer(),ue)if(r.drawBuffers){const me=T.texture;for(let Q=0,Re=me.length;Q<Re;Q++){const Ee=n.get(me[Q]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&ce(T)===!1){const me=ue?x:[x];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Q=0;Q<me.length;Q++){const Re=me[Q];F.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[Q]);const Ee=s.convert(Re.format,Re.colorSpace),Ce=s.convert(Re.type),Ae=U(Re.internalFormat,Ee,Ce,Re.colorSpace,T.isXRRenderTarget===!0),xe=se(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,Ae,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,F.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),W(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Te(i.TEXTURE_CUBE_MAP,x,pe);for(let me=0;me<6;me++)ze(F.__webglFramebuffer[me],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me);w(x,pe)&&I(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){const me=T.texture;for(let Q=0,Re=me.length;Q<Re;Q++){const Ee=me[Q],Ce=n.get(Ee);t.bindTexture(i.TEXTURE_2D,Ce.__webglTexture),Te(i.TEXTURE_2D,Ee,pe),ze(F.__webglFramebuffer,T,Ee,i.COLOR_ATTACHMENT0+Q,i.TEXTURE_2D),w(Ee,pe)&&I(i.TEXTURE_2D)}t.unbindTexture()}else{let me=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?me=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,Z.__webglTexture),Te(me,x,pe),ze(F.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,me),w(x,pe)&&I(me),t.unbindTexture()}T.depthBuffer&&C(T)}function ee(T){const x=M(T)||a,F=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Z=0,ie=F.length;Z<ie;Z++){const ue=F[Z];if(w(ue,x)){const pe=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,me=n.get(ue).__webglTexture;t.bindTexture(pe,me),I(pe),t.unbindTexture()}}}function J(T){if(a&&T.samples>0&&ce(T)===!1){const x=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],F=T.width,Z=T.height;let ie=i.COLOR_BUFFER_BIT;const ue=[],pe=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(T),Q=T.isWebGLMultipleRenderTargets===!0;if(Q)for(let Re=0;Re<x.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Re=0;Re<x.length;Re++){ue.push(i.COLOR_ATTACHMENT0+Re),T.depthBuffer&&ue.push(pe);const Ee=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(Ee===!1&&(T.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),Q&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[Re]),Ee===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[pe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[pe])),Q){const Ce=n.get(x[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ce,0)}i.blitFramebuffer(0,0,F,Z,0,0,F,Z,ie,i.NEAREST),d&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let Re=0;Re<x.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,me.__webglColorRenderbuffer[Re]);const Ee=n.get(x[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function se(T){return Math.min(l,T.samples)}function ce(T){const x=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function he(T){const x=o.render.frame;m.get(T)!==x&&(m.set(T,x),T.update())}function ae(T,x){const F=T.colorSpace,Z=T.format,ie=T.type;return T.isCompressedTexture===!0||T.format===Dl||F!==yn&&F!==ji&&(F===Ne?a===!1?e.has("EXT_sRGB")===!0&&Z===rn?(T.format=Dl,T.minFilter=Vt,T.generateMipmaps=!1):x=Zd.sRGBToLinear(x):(Z!==rn||ie!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.setTexture2D=P,this.setTexture2DArray=Se,this.setTexture3D=D,this.setTextureCube=ne,this.rebindTextures=V,this.setupRenderTarget=K,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=C,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=ce}function LM(i,e,t){const n=t.isWebGL2;function r(s,o=ji){let a;if(s===pi)return i.UNSIGNED_BYTE;if(s===Vd)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Gd)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Z_)return i.BYTE;if(s===Q_)return i.SHORT;if(s===fc)return i.UNSIGNED_SHORT;if(s===zd)return i.INT;if(s===hi)return i.UNSIGNED_INT;if(s===qn)return i.FLOAT;if(s===Is)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ev)return i.ALPHA;if(s===rn)return i.RGBA;if(s===tv)return i.LUMINANCE;if(s===nv)return i.LUMINANCE_ALPHA;if(s===Xi)return i.DEPTH_COMPONENT;if(s===kr)return i.DEPTH_STENCIL;if(s===Dl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===iv)return i.RED;if(s===Wd)return i.RED_INTEGER;if(s===rv)return i.RG;if(s===Xd)return i.RG_INTEGER;if(s===qd)return i.RGBA_INTEGER;if(s===wa||s===Ra||s===Ca||s===La)if(o===Ne)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===wa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ra)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===La)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===wa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ra)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ca)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===La)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===wu||s===Ru||s===Cu||s===Lu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===wu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ru)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Lu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Pu||s===Iu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Pu)return o===Ne?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Iu)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Du||s===Nu||s===Uu||s===Ou||s===Fu||s===Bu||s===ku||s===Hu||s===zu||s===Vu||s===Gu||s===Wu||s===Xu||s===qu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Du)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Nu)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Uu)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ou)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Fu)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bu)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ku)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Hu)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zu)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Vu)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Gu)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wu)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xu)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===qu)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Pa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Pa)return o===Ne?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===ov||s===ju||s===Yu||s===Ku)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Pa)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ju)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Yu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ku)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Wi?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class PM extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vi extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IM={type:"move"};class el{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(u,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const f=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],h=f.position.distanceTo(l.position),d=.02,m=.005;u.inputState.pinching&&h>d+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=d-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(IM)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class DM extends Et{constructor(e,t,n,r,s,o,a,c,u,f){if(f=f!==void 0?f:Xi,f!==Xi&&f!==kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Xi&&(n=hi),n===void 0&&f===kr&&(n=Wi),super(null,r,s,o,a,c,f,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Tt,this.minFilter=c!==void 0?c:Tt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class NM extends Mi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,u=null,f=null,l=null,h=null,d=null,m=null;const _=t.getContextAttributes();let g=null,p=null;const y=[],v=[];let M=null;const b=new Bt;b.layers.enable(1),b.viewport=new rt;const w=new Bt;w.layers.enable(2),w.viewport=new rt;const I=[b,w],U=new PM;U.layers.enable(1),U.layers.enable(2);let S=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(D){M=D},this.getController=function(D){let ne=y[D];return ne===void 0&&(ne=new el,y[D]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(D){let ne=y[D];return ne===void 0&&(ne=new el,y[D]=ne),ne.getGripSpace()},this.getHand=function(D){let ne=y[D];return ne===void 0&&(ne=new el,y[D]=ne),ne.getHandSpace()};function Y(D){const ne=v.indexOf(D.inputSource);if(ne===-1)return;const le=y[ne];le!==void 0&&(le.update(D.inputSource,D.frame,u||o),le.dispatchEvent({type:D.type,data:D.inputSource}))}function z(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",H);for(let D=0;D<y.length;D++){const ne=v[D];ne!==null&&(v[D]=null,y[D].disconnect(ne))}S=null,A=null,e.setRenderTarget(g),d=null,h=null,l=null,r=null,p=null,Se.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(D){u=D},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return l},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",z),r.addEventListener("inputsourceschange",H),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ne={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:d}),p=new $i(d.framebufferWidth,d.framebufferHeight,{format:rn,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ne=null,le=null,ge=null;_.depth&&(ge=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=_.stencil?kr:Xi,le=_.stencil?Wi:hi);const fe={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};l=new XRWebGLBinding(r,t),h=l.createProjectionLayer(fe),r.updateRenderState({layers:[h]}),p=new $i(h.textureWidth,h.textureHeight,{format:rn,type:pi,depthTexture:new DM(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Te=e.properties.get(p);Te.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await r.requestReferenceSpace(a),Se.setContext(r),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function H(D){for(let ne=0;ne<D.removed.length;ne++){const le=D.removed[ne],ge=v.indexOf(le);ge>=0&&(v[ge]=null,y[ge].disconnect(le))}for(let ne=0;ne<D.added.length;ne++){const le=D.added[ne];let ge=v.indexOf(le);if(ge===-1){for(let Te=0;Te<y.length;Te++)if(Te>=v.length){v.push(le),ge=Te;break}else if(v[Te]===null){v[Te]=le,ge=Te;break}if(ge===-1)break}const fe=y[ge];fe&&fe.connect(le)}}const q=new L,O=new L;function G(D,ne,le){q.setFromMatrixPosition(ne.matrixWorld),O.setFromMatrixPosition(le.matrixWorld);const ge=q.distanceTo(O),fe=ne.projectionMatrix.elements,Te=le.projectionMatrix.elements,Ie=fe[14]/(fe[10]-1),Le=fe[14]/(fe[10]+1),$e=(fe[9]+1)/fe[5],ze=(fe[9]-1)/fe[5],W=(fe[8]-1)/fe[0],R=(Te[8]+1)/Te[0],C=Ie*W,V=Ie*R,K=ge/(-W+R),ee=K*-W;ne.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(ee),D.translateZ(K),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const J=Ie+K,se=Le+K,ce=C-ee,he=V+(ge-ee),ae=$e*Le/se*J,T=ze*Le/se*J;D.projectionMatrix.makePerspective(ce,he,ae,T,J,se),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function k(D,ne){ne===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(ne.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCameraXR=function(D){if(r===null)return D;M&&(D=M),U.near=w.near=b.near=D.near,U.far=w.far=b.far=D.far,(S!==U.near||A!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),S=U.near,A=U.far);const ne=D.parent,le=U.cameras;k(U,ne);for(let ge=0;ge<le.length;ge++)k(le[ge],ne);return le.length===2?G(U,b,w):U.projectionMatrix.copy(b.projectionMatrix),M&&B(U,ne),U};function B(D,ne){const le=M;ne===null?le.matrix.copy(D.matrixWorld):(le.matrix.copy(ne.matrixWorld),le.matrix.invert(),le.matrix.multiply(D.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0);const ge=le.children;for(let fe=0,Te=ge.length;fe<Te;fe++)ge[fe].updateMatrixWorld(!0);le.projectionMatrix.copy(D.projectionMatrix),le.projectionMatrixInverse.copy(D.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=zr*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(D){c=D,h!==null&&(h.fixedFoveation=D),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=D)};let oe=null;function P(D,ne){if(f=ne.getViewerPose(u||o),m=ne,f!==null){const le=f.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let ge=!1;le.length!==U.cameras.length&&(U.cameras.length=0,ge=!0);for(let fe=0;fe<le.length;fe++){const Te=le[fe];let Ie=null;if(d!==null)Ie=d.getViewport(Te);else{const $e=l.getViewSubImage(h,Te);Ie=$e.viewport,fe===0&&(e.setRenderTargetTextures(p,$e.colorTexture,h.ignoreDepthValues?void 0:$e.depthStencilTexture),e.setRenderTarget(p))}let Le=I[fe];Le===void 0&&(Le=new Bt,Le.layers.enable(fe),Le.viewport=new rt,I[fe]=Le),Le.matrix.fromArray(Te.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(Te.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),fe===0&&(U.matrix.copy(Le.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ge===!0&&U.cameras.push(Le)}}for(let le=0;le<y.length;le++){const ge=v[le],fe=y[le];ge!==null&&fe!==void 0&&fe.update(ge,ne,u||o)}oe&&oe(D,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),m=null}const Se=new lp;Se.setAnimationLoop(P),this.setAnimationLoop=function(D){oe=D},this.dispose=function(){}}}function UM(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,rp(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,y,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),l(g,p)):p.isMeshPhongMaterial?(s(g,p),f(g,p)):p.isMeshStandardMaterial?(s(g,p),h(g,p),p.isMeshPhysicalMaterial&&d(g,p,M)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,y,v):p.isSpriteMaterial?u(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ht&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ht&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=e.get(p).envMap;if(y&&(g.envMap.value=y,g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const v=i.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function f(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function l(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function OM(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,v){const M=v.program;n.uniformBlockBinding(y,M)}function u(y,v){let M=r[y.id];M===void 0&&(m(y),M=f(y),r[y.id]=M,y.addEventListener("dispose",g));const b=v.program;n.updateUBOMapping(y,b);const w=e.render.frame;s[y.id]!==w&&(h(y),s[y.id]=w)}function f(y){const v=l();y.__bindingPointIndex=v;const M=i.createBuffer(),b=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,b,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,M),M}function l(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const v=r[y.id],M=y.uniforms,b=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,I=M.length;w<I;w++){const U=M[w];if(d(U,w,b)===!0){const S=U.__offset,A=Array.isArray(U.value)?U.value:[U.value];let Y=0;for(let z=0;z<A.length;z++){const H=A[z],q=_(H);typeof H=="number"?(U.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,S+Y,U.__data)):H.isMatrix3?(U.__data[0]=H.elements[0],U.__data[1]=H.elements[1],U.__data[2]=H.elements[2],U.__data[3]=H.elements[0],U.__data[4]=H.elements[3],U.__data[5]=H.elements[4],U.__data[6]=H.elements[5],U.__data[7]=H.elements[0],U.__data[8]=H.elements[6],U.__data[9]=H.elements[7],U.__data[10]=H.elements[8],U.__data[11]=H.elements[0]):(H.toArray(U.__data,Y),Y+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,S,U.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,v,M){const b=y.value;if(M[v]===void 0){if(typeof b=="number")M[v]=b;else{const w=Array.isArray(b)?b:[b],I=[];for(let U=0;U<w.length;U++)I.push(w[U].clone());M[v]=I}return!0}else if(typeof b=="number"){if(M[v]!==b)return M[v]=b,!0}else{const w=Array.isArray(M[v])?M[v]:[M[v]],I=Array.isArray(b)?b:[b];for(let U=0;U<w.length;U++){const S=w[U];if(S.equals(I[U])===!1)return S.copy(I[U]),!0}}return!1}function m(y){const v=y.uniforms;let M=0;const b=16;let w=0;for(let I=0,U=v.length;I<U;I++){const S=v[I],A={boundary:0,storage:0},Y=Array.isArray(S.value)?S.value:[S.value];for(let z=0,H=Y.length;z<H;z++){const q=Y[z],O=_(q);A.boundary+=O.boundary,A.storage+=O.storage}if(S.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=M,I>0){w=M%b;const z=b-w;w!==0&&z-A.boundary<0&&(M+=b-w,S.__offset=M)}M+=A.storage}return w=M%b,w>0&&(M+=b-w),y.__size=M,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function g(y){const v=y.target;v.removeEventListener("dispose",g);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:u,dispose:p}}function FM(){const i=Ns("canvas");return i.style.display="block",i}class Fl{constructor(e={}){const{canvas:t=FM(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:l=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const d=new Uint32Array(4),m=new Int32Array(4);let _=null,g=null;const p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ne,this.useLegacyLights=!0,this.toneMapping=Kn,this.toneMappingExposure=1;const v=this;let M=!1,b=0,w=0,I=null,U=-1,S=null;const A=new rt,Y=new rt;let z=null;const H=new He(0);let q=0,O=t.width,G=t.height,k=1,B=null,oe=null;const P=new rt(0,0,O,G),Se=new rt(0,0,O,G);let D=!1;const ne=new _c;let le=!1,ge=!1,fe=null;const Te=new We,Ie=new be,Le=new L,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return I===null?k:1}let W=n;function R(E,j){for(let te=0;te<E.length;te++){const X=E[te],re=t.getContext(X,j);if(re!==null)return re}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hc}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",_e,!1),W===null){const j=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&j.shift(),W=R(j,E),W===null)throw R(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let C,V,K,ee,J,se,ce,he,ae,T,x,F,Z,ie,ue,pe,me,Q,Re,Ee,Ce,Ae,xe,De;function et(){C=new Yy(W),V=new Vy(W,C,e),C.init(V),Ae=new LM(W,C,V),K=new RM(W,C,V),ee=new Jy(W),J=new pM,se=new CM(W,C,K,J,V,Ae,ee),ce=new Wy(v),he=new jy(v),ae=new c0(W,V),xe=new Hy(W,C,ae,V),T=new Ky(W,ae,ee,xe),x=new tS(W,T,ae,ee),Re=new eS(W,V,se),pe=new Gy(J),F=new dM(v,ce,he,C,V,xe,pe),Z=new UM(v,J),ie=new gM,ue=new MM(C,V),Q=new ky(v,ce,he,K,x,h,c),me=new wM(v,x,V),De=new OM(W,ee,V,K),Ee=new zy(W,C,ee,V),Ce=new $y(W,C,ee,V),ee.programs=F.programs,v.capabilities=V,v.extensions=C,v.properties=J,v.renderLists=ie,v.shadowMap=me,v.state=K,v.info=ee}et();const N=new NM(v,W);this.xr=N,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const E=C.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=C.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(E){E!==void 0&&(k=E,this.setSize(O,G,!1))},this.getSize=function(E){return E.set(O,G)},this.setSize=function(E,j,te=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=E,G=j,t.width=Math.floor(E*k),t.height=Math.floor(j*k),te===!0&&(t.style.width=E+"px",t.style.height=j+"px"),this.setViewport(0,0,E,j)},this.getDrawingBufferSize=function(E){return E.set(O*k,G*k).floor()},this.setDrawingBufferSize=function(E,j,te){O=E,G=j,k=te,t.width=Math.floor(E*te),t.height=Math.floor(j*te),this.setViewport(0,0,E,j)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(P)},this.setViewport=function(E,j,te,X){E.isVector4?P.set(E.x,E.y,E.z,E.w):P.set(E,j,te,X),K.viewport(A.copy(P).multiplyScalar(k).floor())},this.getScissor=function(E){return E.copy(Se)},this.setScissor=function(E,j,te,X){E.isVector4?Se.set(E.x,E.y,E.z,E.w):Se.set(E,j,te,X),K.scissor(Y.copy(Se).multiplyScalar(k).floor())},this.getScissorTest=function(){return D},this.setScissorTest=function(E){K.setScissorTest(D=E)},this.setOpaqueSort=function(E){B=E},this.setTransparentSort=function(E){oe=E},this.getClearColor=function(E){return E.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(E=!0,j=!0,te=!0){let X=0;if(E){let re=!1;if(I!==null){const we=I.texture.format;re=we===qd||we===Xd||we===Wd}if(re){const we=I.texture.type,Pe=we===pi||we===hi||we===fc||we===Wi||we===Vd||we===Gd,Oe=Q.getClearColor(),Fe=Q.getClearAlpha(),qe=Oe.r,ke=Oe.g,Ve=Oe.b,ot=J.get(I).__webglFramebuffer;Pe?(d[0]=qe,d[1]=ke,d[2]=Ve,d[3]=Fe,W.clearBufferuiv(W.COLOR,ot,d)):(m[0]=qe,m[1]=ke,m[2]=Ve,m[3]=Fe,W.clearBufferiv(W.COLOR,ot,m))}else X|=W.COLOR_BUFFER_BIT}j&&(X|=W.DEPTH_BUFFER_BIT),te&&(X|=W.STENCIL_BUFFER_BIT),W.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),ie.dispose(),ue.dispose(),J.dispose(),ce.dispose(),he.dispose(),x.dispose(),xe.dispose(),De.dispose(),F.dispose(),N.dispose(),N.removeEventListener("sessionstart",ut),N.removeEventListener("sessionend",Tn),fe&&(fe.dispose(),fe=null),Pt.stop()};function ye(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=ee.autoReset,j=me.enabled,te=me.autoUpdate,X=me.needsUpdate,re=me.type;et(),ee.autoReset=E,me.enabled=j,me.autoUpdate=te,me.needsUpdate=X,me.type=re}function _e(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Me(E){const j=E.target;j.removeEventListener("dispose",Me),Ke(j)}function Ke(E){ct(E),J.remove(E)}function ct(E){const j=J.get(E).programs;j!==void 0&&(j.forEach(function(te){F.releaseProgram(te)}),E.isShaderMaterial&&F.releaseShaderCache(E))}this.renderBufferDirect=function(E,j,te,X,re,we){j===null&&(j=$e);const Pe=re.isMesh&&re.matrixWorld.determinant()<0,Oe=Np(E,j,te,X,re);K.setMaterial(X,Pe);let Fe=te.index,qe=1;X.wireframe===!0&&(Fe=T.getWireframeAttribute(te),qe=2);const ke=te.drawRange,Ve=te.attributes.position;let ot=ke.start*qe,ft=(ke.start+ke.count)*qe;we!==null&&(ot=Math.max(ot,we.start*qe),ft=Math.min(ft,(we.start+we.count)*qe)),Fe!==null?(ot=Math.max(ot,0),ft=Math.min(ft,Fe.count)):Ve!=null&&(ot=Math.max(ot,0),ft=Math.min(ft,Ve.count));const an=ft-ot;if(an<0||an===1/0)return;xe.setup(re,X,Oe,te,Fe);let Dn,pt=Ee;if(Fe!==null&&(Dn=ae.get(Fe),pt=Ce,pt.setIndex(Dn)),re.isMesh)X.wireframe===!0?(K.setLineWidth(X.wireframeLinewidth*ze()),pt.setMode(W.LINES)):pt.setMode(W.TRIANGLES);else if(re.isLine){let Ye=X.linewidth;Ye===void 0&&(Ye=1),K.setLineWidth(Ye*ze()),re.isLineSegments?pt.setMode(W.LINES):re.isLineLoop?pt.setMode(W.LINE_LOOP):pt.setMode(W.LINE_STRIP)}else re.isPoints?pt.setMode(W.POINTS):re.isSprite&&pt.setMode(W.TRIANGLES);if(re.isInstancedMesh)pt.renderInstances(ot,an,re.count);else if(te.isInstancedBufferGeometry){const Ye=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,aa=Math.min(te.instanceCount,Ye);pt.renderInstances(ot,an,aa)}else pt.render(ot,an)},this.compile=function(E,j){function te(X,re,we){X.transparent===!0&&X.side===Ln&&X.forceSinglePass===!1?(X.side=Ht,X.needsUpdate=!0,Ws(X,re,we),X.side=$n,X.needsUpdate=!0,Ws(X,re,we),X.side=Ln):Ws(X,re,we)}g=ue.get(E),g.init(),y.push(g),E.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights(v.useLegacyLights),E.traverse(function(X){const re=X.material;if(re)if(Array.isArray(re))for(let we=0;we<re.length;we++){const Pe=re[we];te(Pe,E,X)}else te(re,E,X)}),y.pop(),g=null};let dt=null;function Ei(E){dt&&dt(E)}function ut(){Pt.stop()}function Tn(){Pt.start()}const Pt=new lp;Pt.setAnimationLoop(Ei),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(E){dt=E,N.setAnimationLoop(E),E===null?Pt.stop():Pt.start()},N.addEventListener("sessionstart",ut),N.addEventListener("sessionend",Tn),this.render=function(E,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(j=N.updateCameraXR(j)),E.isScene===!0&&E.onBeforeRender(v,E,j,I),g=ue.get(E,y.length),g.init(),y.push(g),Te.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ne.setFromProjectionMatrix(Te),ge=this.localClippingEnabled,le=pe.init(this.clippingPlanes,ge),_=ie.get(E,p.length),_.init(),p.push(_),Nc(E,j,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(B,oe),le===!0&&pe.beginShadows();const te=g.state.shadowsArray;if(me.render(te,E,j),le===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,Q.render(_,E),g.setupLights(v.useLegacyLights),j.isArrayCamera){const X=j.cameras;for(let re=0,we=X.length;re<we;re++){const Pe=X[re];Uc(_,E,Pe,Pe.viewport)}}else Uc(_,E,j);I!==null&&(se.updateMultisampleRenderTarget(I),se.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(v,E,j),xe.resetDefaultState(),U=-1,S=null,y.pop(),y.length>0?g=y[y.length-1]:g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Nc(E,j,te,X){if(E.visible===!1)return;if(E.layers.test(j.layers)){if(E.isGroup)te=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(j);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ne.intersectsSprite(E)){X&&Le.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Te);const Pe=x.update(E),Oe=E.material;Oe.visible&&_.push(E,Pe,Oe,te,Le.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ne.intersectsObject(E))){E.isSkinnedMesh&&E.skeleton.frame!==ee.render.frame&&(E.skeleton.update(),E.skeleton.frame=ee.render.frame);const Pe=x.update(E),Oe=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Le.copy(E.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Le.copy(Pe.boundingSphere.center)),Le.applyMatrix4(E.matrixWorld).applyMatrix4(Te)),Array.isArray(Oe)){const Fe=Pe.groups;for(let qe=0,ke=Fe.length;qe<ke;qe++){const Ve=Fe[qe],ot=Oe[Ve.materialIndex];ot&&ot.visible&&_.push(E,Pe,ot,te,Le.z,Ve)}}else Oe.visible&&_.push(E,Pe,Oe,te,Le.z,null)}}const we=E.children;for(let Pe=0,Oe=we.length;Pe<Oe;Pe++)Nc(we[Pe],j,te,X)}function Uc(E,j,te,X){const re=E.opaque,we=E.transmissive,Pe=E.transparent;g.setupLightsView(te),le===!0&&pe.setGlobalState(v.clippingPlanes,te),we.length>0&&Dp(re,we,j,te),X&&K.viewport(A.copy(X)),re.length>0&&Gs(re,j,te),we.length>0&&Gs(we,j,te),Pe.length>0&&Gs(Pe,j,te),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Dp(E,j,te,X){const re=V.isWebGL2;fe===null&&(fe=new $i(1,1,{generateMipmaps:!0,type:C.has("EXT_color_buffer_half_float")?Is:pi,minFilter:Ki,samples:re&&a===!0?4:0})),v.getDrawingBufferSize(Ie),re?fe.setSize(Ie.x,Ie.y):fe.setSize(Vo(Ie.x),Vo(Ie.y));const we=v.getRenderTarget();v.setRenderTarget(fe),v.getClearColor(H),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear();const Pe=v.toneMapping;v.toneMapping=Kn,Gs(E,te,X),se.updateMultisampleRenderTarget(fe),se.updateRenderTargetMipmap(fe);let Oe=!1;for(let Fe=0,qe=j.length;Fe<qe;Fe++){const ke=j[Fe],Ve=ke.object,ot=ke.geometry,ft=ke.material,an=ke.group;if(ft.side===Ln&&Ve.layers.test(X.layers)){const Dn=ft.side;ft.side=Ht,ft.needsUpdate=!0,Oc(Ve,te,X,ot,ft,an),ft.side=Dn,ft.needsUpdate=!0,Oe=!0}}Oe===!0&&(se.updateMultisampleRenderTarget(fe),se.updateRenderTargetMipmap(fe)),v.setRenderTarget(we),v.setClearColor(H,q),v.toneMapping=Pe}function Gs(E,j,te){const X=j.isScene===!0?j.overrideMaterial:null;for(let re=0,we=E.length;re<we;re++){const Pe=E[re],Oe=Pe.object,Fe=Pe.geometry,qe=X===null?Pe.material:X,ke=Pe.group;Oe.layers.test(te.layers)&&Oc(Oe,j,te,Fe,qe,ke)}}function Oc(E,j,te,X,re,we){E.onBeforeRender(v,j,te,X,re,we),E.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),re.onBeforeRender(v,j,te,X,E,we),re.transparent===!0&&re.side===Ln&&re.forceSinglePass===!1?(re.side=Ht,re.needsUpdate=!0,v.renderBufferDirect(te,j,X,re,E,we),re.side=$n,re.needsUpdate=!0,v.renderBufferDirect(te,j,X,re,E,we),re.side=Ln):v.renderBufferDirect(te,j,X,re,E,we),E.onAfterRender(v,j,te,X,re,we)}function Ws(E,j,te){j.isScene!==!0&&(j=$e);const X=J.get(E),re=g.state.lights,we=g.state.shadowsArray,Pe=re.state.version,Oe=F.getParameters(E,re.state,we,j,te),Fe=F.getProgramCacheKey(Oe);let qe=X.programs;X.environment=E.isMeshStandardMaterial?j.environment:null,X.fog=j.fog,X.envMap=(E.isMeshStandardMaterial?he:ce).get(E.envMap||X.environment),qe===void 0&&(E.addEventListener("dispose",Me),qe=new Map,X.programs=qe);let ke=qe.get(Fe);if(ke!==void 0){if(X.currentProgram===ke&&X.lightsStateVersion===Pe)return Fc(E,Oe),ke}else Oe.uniforms=F.getUniforms(E),E.onBuild(te,Oe,v),E.onBeforeCompile(Oe,v),ke=F.acquireProgram(Oe,Fe),qe.set(Fe,ke),X.uniforms=Oe.uniforms;const Ve=X.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ve.clippingPlanes=pe.uniform),Fc(E,Oe),X.needsLights=Op(E),X.lightsStateVersion=Pe,X.needsLights&&(Ve.ambientLightColor.value=re.state.ambient,Ve.lightProbe.value=re.state.probe,Ve.directionalLights.value=re.state.directional,Ve.directionalLightShadows.value=re.state.directionalShadow,Ve.spotLights.value=re.state.spot,Ve.spotLightShadows.value=re.state.spotShadow,Ve.rectAreaLights.value=re.state.rectArea,Ve.ltc_1.value=re.state.rectAreaLTC1,Ve.ltc_2.value=re.state.rectAreaLTC2,Ve.pointLights.value=re.state.point,Ve.pointLightShadows.value=re.state.pointShadow,Ve.hemisphereLights.value=re.state.hemi,Ve.directionalShadowMap.value=re.state.directionalShadowMap,Ve.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Ve.spotShadowMap.value=re.state.spotShadowMap,Ve.spotLightMatrix.value=re.state.spotLightMatrix,Ve.spotLightMap.value=re.state.spotLightMap,Ve.pointShadowMap.value=re.state.pointShadowMap,Ve.pointShadowMatrix.value=re.state.pointShadowMatrix);const ot=ke.getUniforms(),ft=Lo.seqWithValue(ot.seq,Ve);return X.currentProgram=ke,X.uniformsList=ft,ke}function Fc(E,j){const te=J.get(E);te.outputColorSpace=j.outputColorSpace,te.instancing=j.instancing,te.skinning=j.skinning,te.morphTargets=j.morphTargets,te.morphNormals=j.morphNormals,te.morphColors=j.morphColors,te.morphTargetsCount=j.morphTargetsCount,te.numClippingPlanes=j.numClippingPlanes,te.numIntersection=j.numClipIntersection,te.vertexAlphas=j.vertexAlphas,te.vertexTangents=j.vertexTangents,te.toneMapping=j.toneMapping}function Np(E,j,te,X,re){j.isScene!==!0&&(j=$e),se.resetTextureUnits();const we=j.fog,Pe=X.isMeshStandardMaterial?j.environment:null,Oe=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:yn,Fe=(X.isMeshStandardMaterial?he:ce).get(X.envMap||Pe),qe=X.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ke=!!te.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ve=!!te.morphAttributes.position,ot=!!te.morphAttributes.normal,ft=!!te.morphAttributes.color,an=X.toneMapped?v.toneMapping:Kn,Dn=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,pt=Dn!==void 0?Dn.length:0,Ye=J.get(X),aa=g.state.lights;if(le===!0&&(ge===!0||E!==S)){const Wt=E===S&&X.id===U;pe.setState(X,E,Wt)}let St=!1;X.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==aa.state.version||Ye.outputColorSpace!==Oe||re.isInstancedMesh&&Ye.instancing===!1||!re.isInstancedMesh&&Ye.instancing===!0||re.isSkinnedMesh&&Ye.skinning===!1||!re.isSkinnedMesh&&Ye.skinning===!0||Ye.envMap!==Fe||X.fog===!0&&Ye.fog!==we||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==pe.numPlanes||Ye.numIntersection!==pe.numIntersection)||Ye.vertexAlphas!==qe||Ye.vertexTangents!==ke||Ye.morphTargets!==Ve||Ye.morphNormals!==ot||Ye.morphColors!==ft||Ye.toneMapping!==an||V.isWebGL2===!0&&Ye.morphTargetsCount!==pt)&&(St=!0):(St=!0,Ye.__version=X.version);let bi=Ye.currentProgram;St===!0&&(bi=Ws(X,j,re));let Bc=!1,$r=!1,la=!1;const It=bi.getUniforms(),Ai=Ye.uniforms;if(K.useProgram(bi.program)&&(Bc=!0,$r=!0,la=!0),X.id!==U&&(U=X.id,$r=!0),Bc||S!==E){if(It.setValue(W,"projectionMatrix",E.projectionMatrix),V.logarithmicDepthBuffer&&It.setValue(W,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),S!==E&&(S=E,$r=!0,la=!0),X.isShaderMaterial||X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshStandardMaterial||X.envMap){const Wt=It.map.cameraPosition;Wt!==void 0&&Wt.setValue(W,Le.setFromMatrixPosition(E.matrixWorld))}(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&It.setValue(W,"isOrthographic",E.isOrthographicCamera===!0),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial||X.isShadowMaterial||re.isSkinnedMesh)&&It.setValue(W,"viewMatrix",E.matrixWorldInverse)}if(re.isSkinnedMesh){It.setOptional(W,re,"bindMatrix"),It.setOptional(W,re,"bindMatrixInverse");const Wt=re.skeleton;Wt&&(V.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),It.setValue(W,"boneTexture",Wt.boneTexture,se),It.setValue(W,"boneTextureSize",Wt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ca=te.morphAttributes;if((ca.position!==void 0||ca.normal!==void 0||ca.color!==void 0&&V.isWebGL2===!0)&&Re.update(re,te,bi),($r||Ye.receiveShadow!==re.receiveShadow)&&(Ye.receiveShadow=re.receiveShadow,It.setValue(W,"receiveShadow",re.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ai.envMap.value=Fe,Ai.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),$r&&(It.setValue(W,"toneMappingExposure",v.toneMappingExposure),Ye.needsLights&&Up(Ai,la),we&&X.fog===!0&&Z.refreshFogUniforms(Ai,we),Z.refreshMaterialUniforms(Ai,X,k,G,fe),Lo.upload(W,Ye.uniformsList,Ai,se)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Lo.upload(W,Ye.uniformsList,Ai,se),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&It.setValue(W,"center",re.center),It.setValue(W,"modelViewMatrix",re.modelViewMatrix),It.setValue(W,"normalMatrix",re.normalMatrix),It.setValue(W,"modelMatrix",re.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Wt=X.uniformsGroups;for(let ua=0,Fp=Wt.length;ua<Fp;ua++)if(V.isWebGL2){const kc=Wt[ua];De.update(kc,bi),De.bind(kc,bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bi}function Up(E,j){E.ambientLightColor.needsUpdate=j,E.lightProbe.needsUpdate=j,E.directionalLights.needsUpdate=j,E.directionalLightShadows.needsUpdate=j,E.pointLights.needsUpdate=j,E.pointLightShadows.needsUpdate=j,E.spotLights.needsUpdate=j,E.spotLightShadows.needsUpdate=j,E.rectAreaLights.needsUpdate=j,E.hemisphereLights.needsUpdate=j}function Op(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,j,te){J.get(E.texture).__webglTexture=j,J.get(E.depthTexture).__webglTexture=te;const X=J.get(E);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=te===void 0,X.__autoAllocateDepthBuffer||C.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,j){const te=J.get(E);te.__webglFramebuffer=j,te.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(E,j=0,te=0){I=E,b=j,w=te;let X=!0,re=null,we=!1,Pe=!1;if(E){const Fe=J.get(E);Fe.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(W.FRAMEBUFFER,null),X=!1):Fe.__webglFramebuffer===void 0?se.setupRenderTarget(E):Fe.__hasExternalTextures&&se.rebindTextures(E,J.get(E.texture).__webglTexture,J.get(E.depthTexture).__webglTexture);const qe=E.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Pe=!0);const ke=J.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(re=ke[j],we=!0):V.isWebGL2&&E.samples>0&&se.useMultisampledRTT(E)===!1?re=J.get(E).__webglMultisampledFramebuffer:re=ke,A.copy(E.viewport),Y.copy(E.scissor),z=E.scissorTest}else A.copy(P).multiplyScalar(k).floor(),Y.copy(Se).multiplyScalar(k).floor(),z=D;if(K.bindFramebuffer(W.FRAMEBUFFER,re)&&V.drawBuffers&&X&&K.drawBuffers(E,re),K.viewport(A),K.scissor(Y),K.setScissorTest(z),we){const Fe=J.get(E.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+j,Fe.__webglTexture,te)}else if(Pe){const Fe=J.get(E.texture),qe=j||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Fe.__webglTexture,te||0,qe)}U=-1},this.readRenderTargetPixels=function(E,j,te,X,re,we,Pe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=J.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(Oe=Oe[Pe]),Oe){K.bindFramebuffer(W.FRAMEBUFFER,Oe);try{const Fe=E.texture,qe=Fe.format,ke=Fe.type;if(qe!==rn&&Ae.convert(qe)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=ke===Is&&(C.has("EXT_color_buffer_half_float")||V.isWebGL2&&C.has("EXT_color_buffer_float"));if(ke!==pi&&Ae.convert(ke)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===qn&&(V.isWebGL2||C.has("OES_texture_float")||C.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=E.width-X&&te>=0&&te<=E.height-re&&W.readPixels(j,te,X,re,Ae.convert(qe),Ae.convert(ke),we)}finally{const Fe=I!==null?J.get(I).__webglFramebuffer:null;K.bindFramebuffer(W.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(E,j,te=0){const X=Math.pow(2,-te),re=Math.floor(j.image.width*X),we=Math.floor(j.image.height*X);se.setTexture2D(j,0),W.copyTexSubImage2D(W.TEXTURE_2D,te,0,0,E.x,E.y,re,we),K.unbindTexture()},this.copyTextureToTexture=function(E,j,te,X=0){const re=j.image.width,we=j.image.height,Pe=Ae.convert(te.format),Oe=Ae.convert(te.type);se.setTexture2D(te,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,te.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,te.unpackAlignment),j.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,X,E.x,E.y,re,we,Pe,Oe,j.image.data):j.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,X,E.x,E.y,j.mipmaps[0].width,j.mipmaps[0].height,Pe,j.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,X,E.x,E.y,Pe,Oe,j.image),X===0&&te.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),K.unbindTexture()},this.copyTextureToTexture3D=function(E,j,te,X,re=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=E.max.x-E.min.x+1,Pe=E.max.y-E.min.y+1,Oe=E.max.z-E.min.z+1,Fe=Ae.convert(X.format),qe=Ae.convert(X.type);let ke;if(X.isData3DTexture)se.setTexture3D(X,0),ke=W.TEXTURE_3D;else if(X.isDataArrayTexture)se.setTexture2DArray(X,0),ke=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,X.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,X.unpackAlignment);const Ve=W.getParameter(W.UNPACK_ROW_LENGTH),ot=W.getParameter(W.UNPACK_IMAGE_HEIGHT),ft=W.getParameter(W.UNPACK_SKIP_PIXELS),an=W.getParameter(W.UNPACK_SKIP_ROWS),Dn=W.getParameter(W.UNPACK_SKIP_IMAGES),pt=te.isCompressedTexture?te.mipmaps[0]:te.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,pt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,pt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,E.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,E.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,E.min.z),te.isDataTexture||te.isData3DTexture?W.texSubImage3D(ke,re,j.x,j.y,j.z,we,Pe,Oe,Fe,qe,pt.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(ke,re,j.x,j.y,j.z,we,Pe,Oe,Fe,pt.data)):W.texSubImage3D(ke,re,j.x,j.y,j.z,we,Pe,Oe,Fe,qe,pt),W.pixelStorei(W.UNPACK_ROW_LENGTH,Ve),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ot),W.pixelStorei(W.UNPACK_SKIP_PIXELS,ft),W.pixelStorei(W.UNPACK_SKIP_ROWS,an),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Dn),re===0&&X.generateMipmaps&&W.generateMipmap(ke),K.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?se.setTextureCube(E,0):E.isData3DTexture?se.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?se.setTexture2DArray(E,0):se.setTexture2D(E,0),K.unbindTexture()},this.resetState=function(){b=0,w=0,I=null,K.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ne?qi:Yd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===qi?Ne:yn}}class BM extends Fl{}BM.prototype.isWebGL1Renderer=!0;class kM extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class HM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Il,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dt=new L;class Sc{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Sc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Uh=new L,Oh=new rt,Fh=new rt,zM=new L,Bh=new We,gr=new L,tl=new Mn,kh=new We,nl=new Hs;class VM extends Gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Sn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)gr.fromBufferAttribute(t,n),this.applyBoneTransform(n,gr),this.boundingBox.expandByPoint(gr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)gr.fromBufferAttribute(t,n),this.applyBoneTransform(n,gr),this.boundingSphere.expandByPoint(gr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tl.copy(this.boundingSphere),tl.applyMatrix4(r),e.ray.intersectsSphere(tl)!==!1&&(kh.copy(r).invert(),nl.copy(e.ray).applyMatrix4(kh),!(this.boundingBox!==null&&nl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,nl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Oh.fromBufferAttribute(r.attributes.skinIndex,e),Fh.fromBufferAttribute(r.attributes.skinWeight,e),Uh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Fh.getComponent(s);if(o!==0){const a=Oh.getComponent(s);Bh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(zM.copy(Uh).applyMatrix4(Bh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class dp extends lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class GM extends Et{constructor(e=null,t=1,n=1,r,s,o,a,c,u=Tt,f=Tt,l,h){super(null,o,a,c,u,f,r,s,l,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hh=new We,WM=new We;class Mc{constructor(e=[],t=[]){this.uuid=gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:WM;Hh.multiplyMatrices(a,t[s]),Hh.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Mc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=$d(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new GM(t,e,e,rn,qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new dp),this.bones.push(o),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class zh extends bt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _r=new We,Vh=new We,go=[],Gh=new Sn,XM=new We,rs=new Gt,ss=new Mn;class qM extends Gt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zh(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,XM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_r),Gh.copy(e.boundingBox).applyMatrix4(_r),this.boundingBox.union(Gh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_r),ss.copy(e.boundingSphere).applyMatrix4(_r),this.boundingSphere.union(ss)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(rs.geometry=this.geometry,rs.material=this.material,rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ss.copy(this.boundingSphere),ss.applyMatrix4(n),e.ray.intersectsSphere(ss)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,_r),Vh.multiplyMatrices(n,_r),rs.matrixWorld=Vh,rs.raycast(e,go);for(let o=0,a=go.length;o<a;o++){const c=go[o];c.instanceId=s,c.object=this,t.push(c)}go.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zh(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class pp extends vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wh=new L,Xh=new L,qh=new We,il=new Hs,_o=new Mn;class Tc extends lt{constructor(e=new on,t=new pp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Wh.fromBufferAttribute(t,r-1),Xh.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Wh.distanceTo(Xh);e.setAttribute("lineDistance",new sn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(r),_o.radius+=s,e.ray.intersectsSphere(_o)===!1)return;qh.copy(r).invert(),il.copy(e.ray).applyMatrix4(qh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=new L,f=new L,l=new L,h=new L,d=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){const p=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let v=p,M=y-1;v<M;v+=d){const b=m.getX(v),w=m.getX(v+1);if(u.fromBufferAttribute(g,b),f.fromBufferAttribute(g,w),il.distanceSqToSegment(u,f,h,l)>c)continue;h.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(h);U<e.near||U>e.far||t.push({distance:U,point:l.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let v=p,M=y-1;v<M;v+=d){if(u.fromBufferAttribute(g,v),f.fromBufferAttribute(g,v+1),il.distanceSqToSegment(u,f,h,l)>c)continue;h.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(h);w<e.near||w>e.far||t.push({distance:w,point:l.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const jh=new L,Yh=new L;class jM extends Tc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)jh.fromBufferAttribute(t,r),Yh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+jh.distanceTo(Yh);e.setAttribute("lineDistance",new sn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class YM extends Tc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class mp extends vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kh=new We,Bl=new Hs,vo=new Mn,xo=new L;class KM extends lt{constructor(e=new on,t=new mp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(r),vo.radius+=s,e.ray.intersectsSphere(vo)===!1)return;Kh.copy(r).invert(),Bl.copy(e.ray).applyMatrix4(Kh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=n.index,l=n.attributes.position;if(u!==null){const h=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=h,_=d;m<_;m++){const g=u.getX(m);xo.fromBufferAttribute(l,g),$h(xo,g,c,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=h,_=d;m<_;m++)xo.fromBufferAttribute(l,m),$h(xo,m,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function $h(i,e,t,n,r,s,o){const a=Bl.distanceSqToPoint(i);if(a<t){const c=new L;Bl.closestPointToPoint(i,c),c.applyMatrix4(n);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class Pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,c=s-1,u;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),u=n[r]-o,u<0)a=r+1;else if(u>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);const f=n[r],h=n[r+1]-f,d=(o-f)/h;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new be:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,r=[],s=[],o=[],a=new L,c=new We;for(let d=0;d<=e;d++){const m=d/e;r[d]=this.getTangentAt(m,new L)}s[0]=new L,o[0]=new L;let u=Number.MAX_VALUE;const f=Math.abs(r[0].x),l=Math.abs(r[0].y),h=Math.abs(r[0].z);f<=u&&(u=f,n.set(1,0,0)),l<=u&&(u=l,n.set(0,1,0)),h<=u&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(gt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(gt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(r[m],d*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ec extends Pn{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const n=t||new be,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),l=Math.sin(this.aRotation),h=c-this.aX,d=u-this.aY;c=h*f-d*l+this.aX,u=h*l+d*f+this.aY}return n.set(c,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $M extends Ec{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function bc(){let i=0,e=0,t=0,n=0;function r(s,o,a,c){i=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,u){r(o,a,u*(a-s),u*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,u,f,l){let h=(o-s)/u-(a-s)/(u+f)+(a-o)/f,d=(a-o)/f-(c-o)/(f+l)+(c-a)/l;h*=f,d*=f,r(o,a,h,d)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const yo=new L,rl=new bc,sl=new bc,ol=new bc;class JM extends Pn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new L){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let u,f;this.closed||a>0?u=r[(a-1)%s]:(yo.subVectors(r[0],r[1]).add(r[0]),u=yo);const l=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(yo.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=yo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(u.distanceToSquared(l),d),_=Math.pow(l.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),rl.initNonuniformCatmullRom(u.x,l.x,h.x,f.x,m,_,g),sl.initNonuniformCatmullRom(u.y,l.y,h.y,f.y,m,_,g),ol.initNonuniformCatmullRom(u.z,l.z,h.z,f.z,m,_,g)}else this.curveType==="catmullrom"&&(rl.initCatmullRom(u.x,l.x,h.x,f.x,this.tension),sl.initCatmullRom(u.y,l.y,h.y,f.y,this.tension),ol.initCatmullRom(u.z,l.z,h.z,f.z,this.tension));return n.set(rl.calc(c),sl.calc(c),ol.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Jh(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,c=i*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*i+t}function ZM(i,e){const t=1-i;return t*t*e}function QM(i,e){return 2*(1-i)*i*e}function eT(i,e){return i*i*e}function Ts(i,e,t,n){return ZM(i,e)+QM(i,t)+eT(i,n)}function tT(i,e){const t=1-i;return t*t*t*e}function nT(i,e){const t=1-i;return 3*t*t*i*e}function iT(i,e){return 3*(1-i)*i*i*e}function rT(i,e){return i*i*i*e}function Es(i,e,t,n,r){return tT(i,e)+nT(i,t)+iT(i,n)+rT(i,r)}class gp extends Pn{constructor(e=new be,t=new be,n=new be,r=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new be){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Es(e,r.x,s.x,o.x,a.x),Es(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sT extends Pn{constructor(e=new L,t=new L,n=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new L){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Es(e,r.x,s.x,o.x,a.x),Es(e,r.y,s.y,o.y,a.y),Es(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ac extends Pn{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class oT extends Pn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _p extends Pn{constructor(e=new be,t=new be,n=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new be){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Ts(e,r.x,s.x,o.x),Ts(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class aT extends Pn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Ts(e,r.x,s.x,o.x),Ts(e,r.y,s.y,o.y),Ts(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vp extends Pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],u=r[o],f=r[o>r.length-2?r.length-1:o+1],l=r[o>r.length-3?r.length-1:o+2];return n.set(Jh(a,c.x,u.x,f.x,l.x),Jh(a,c.y,u.y,f.y,l.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new be().fromArray(r))}return this}}var lT=Object.freeze({__proto__:null,ArcCurve:$M,CatmullRomCurve3:JM,CubicBezierCurve:gp,CubicBezierCurve3:sT,EllipseCurve:Ec,LineCurve:Ac,LineCurve3:oT,QuadraticBezierCurve:_p,QuadraticBezierCurve3:aT,SplineCurve:vp});class cT extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ac(t,e))}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],c=a.getLength(),u=c===0?0:1-o/c;return a.getPointAt(u,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let u=0;u<c.length;u++){const f=c[u];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new lT[r.type]().fromJSON(r))}return this}}class uT extends cT{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ac(this.currentPoint.clone(),new be(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new _p(this.currentPoint.clone(),new be(e,t),new be(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new gp(this.currentPoint.clone(),new be(e,t),new be(n,r),new be(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new vp(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,c){const u=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+u,t+f,n,r,s,o,a,c),this}absellipse(e,t,n,r,s,o,a,c){const u=new Ec(e,t,n,r,s,o,a,c);if(this.curves.length>0){const l=u.getPoint(0);l.equals(this.currentPoint)||this.lineTo(l.x,l.y)}this.curves.push(u);const f=u.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class wc extends on{constructor(e=[new be(0,-.5),new be(.5,0),new be(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=gt(r,0,Math.PI*2);const s=[],o=[],a=[],c=[],u=[],f=1/t,l=new L,h=new be,d=new L,m=new L,_=new L;let g=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-g,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(m)}for(let y=0;y<=t;y++){const v=n+y*f*r,M=Math.sin(v),b=Math.cos(v);for(let w=0;w<=e.length-1;w++){l.x=e[w].x*M,l.y=e[w].y,l.z=e[w].x*b,o.push(l.x,l.y,l.z),h.x=y/t,h.y=w/(e.length-1),a.push(h.x,h.y);const I=c[3*w+0]*M,U=c[3*w+1],S=c[3*w+0]*b;u.push(I,U,S)}}for(let y=0;y<t;y++)for(let v=0;v<e.length-1;v++){const M=v+y*e.length,b=M,w=M+e.length,I=M+e.length+1,U=M+1;s.push(b,w,U),s.push(I,U,w)}this.setIndex(s),this.setAttribute("position",new sn(o,3)),this.setAttribute("uv",new sn(a,2)),this.setAttribute("normal",new sn(u,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.points,e.segments,e.phiStart,e.phiLength)}}class Rc extends wc{constructor(e=1,t=1,n=4,r=8){const s=new uT;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new Rc(e.radius,e.length,e.capSegments,e.radialSegments)}}class Cc extends vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pc,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ti extends Cc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class hT extends vn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pc,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}function ii(i,e,t){return xp(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function So(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function xp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function fT(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Zh(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=i[a+c]}return r}function yp(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class Vs{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class dT extends Vs{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tr,endingEnd:Tr}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Er:s=e,a=2*t-n;break;case Ho:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Er:o=e,c=2*n-t;break;case Ho:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}const u=(n-t)*.5,f=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(c-n),this._offsetPrev=s*f,this._offsetNext=o*f}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,f=this._offsetPrev,l=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(n-t)/(r-t),_=m*m,g=_*m,p=-h*g+2*h*_-h*m,y=(1+h)*g+(-1.5-2*h)*_+(-.5+h)*m+1,v=(-1-d)*g+(1.5+d)*_+.5*m,M=d*g-d*_;for(let b=0;b!==a;++b)s[b]=p*o[f+b]+y*o[u+b]+v*o[c+b]+M*o[l+b];return s}}class Sp extends Vs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,f=(n-t)/(r-t),l=1-f;for(let h=0;h!==a;++h)s[h]=o[u+h]*l+o[c+h]*f;return s}}class pT extends Vs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class In{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=So(t,this.TimeBufferType),this.values=So(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:So(e.times,Array),values:So(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pT(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dT(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ds:t=this.InterpolantFactoryMethodDiscrete;break;case Hr:t=this.InterpolantFactoryMethodLinear;break;case Ia:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ds;case this.InterpolantFactoryMethodLinear:return Hr;case this.InterpolantFactoryMethodSmooth:return Ia}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=ii(n,s,o),this.values=ii(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&xp(r))for(let a=0,c=r.length;a!==c;++a){const u=r[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=ii(this.times),t=ii(this.values),n=this.getValueSize(),r=this.getInterpolation()===Ia,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const u=e[a],f=e[a+1];if(u!==f&&(a!==1||u!==e[0]))if(r)c=!0;else{const l=a*n,h=l-n,d=l+n;for(let m=0;m!==n;++m){const _=t[l+m];if(_!==t[h+m]||_!==t[d+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const l=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[l+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,u=0;u!==n;++u)t[c+u]=t[a+u];++o}return o!==e.length?(this.times=ii(e,0,o),this.values=ii(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=ii(this.times,0),t=ii(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=Hr;class jr extends In{}jr.prototype.ValueTypeName="bool";jr.prototype.ValueBufferType=Array;jr.prototype.DefaultInterpolation=Ds;jr.prototype.InterpolantFactoryMethodLinear=void 0;jr.prototype.InterpolantFactoryMethodSmooth=void 0;class Mp extends In{}Mp.prototype.ValueTypeName="color";class Us extends In{}Us.prototype.ValueTypeName="number";class mT extends Vs{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t);let u=e*a;for(let f=u+a;u!==f;u+=4)_n.slerpFlat(s,0,o,u-a,o,u,c);return s}}class Ji extends In{InterpolantFactoryMethodLinear(e){return new mT(this.times,this.values,this.getValueSize(),e)}}Ji.prototype.ValueTypeName="quaternion";Ji.prototype.DefaultInterpolation=Hr;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;class Yr extends In{}Yr.prototype.ValueTypeName="string";Yr.prototype.ValueBufferType=Array;Yr.prototype.DefaultInterpolation=Ds;Yr.prototype.InterpolantFactoryMethodLinear=void 0;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;class Os extends In{}Os.prototype.ValueTypeName="vector";class kl{constructor(e,t=-1,n,r=dc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=gn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(_T(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(In.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],u=[];c.push((a+s-1)%s,a,(a+1)%s),u.push(0,1,0);const f=fT(c);c=Zh(c,1,f),u=Zh(u,1,f),!r&&c[0]===0&&(c.push(s),u.push(u[0])),o.push(new Us(".morphTargetInfluences["+t[a].name+"]",c,u).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const u=e[a],f=u.name.match(s);if(f&&f.length>1){const l=f[1];let h=r[l];h||(r[l]=h=[]),h.push(u)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(l,h,d,m,_){if(d.length!==0){const g=[],p=[];yp(d,g,p,m),g.length!==0&&_.push(new l(h,g,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const u=e.hierarchy||[];for(let l=0;l<u.length;l++){const h=u[l].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let m;for(m=0;m<h.length;m++)if(h[m].morphTargets)for(let _=0;_<h[m].morphTargets.length;_++)d[h[m].morphTargets[_]]=-1;for(const _ in d){const g=[],p=[];for(let y=0;y!==h[m].morphTargets.length;++y){const v=h[m];g.push(v.time),p.push(v.morphTarget===_?1:0)}r.push(new Us(".morphTargetInfluence["+_+"]",g,p))}c=d.length*o}else{const d=".bones["+t[l].name+"]";n(Os,d+".position",h,"pos",r),n(Ji,d+".quaternion",h,"rot",r),n(Os,d+".scale",h,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function gT(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Us;case"vector":case"vector2":case"vector3":case"vector4":return Os;case"color":return Mp;case"quaternion":return Ji;case"bool":case"boolean":return jr;case"string":return Yr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function _T(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=gT(i.type);if(i.times===void 0){const t=[],n=[];yp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Gr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Tp{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,l){return u.push(f,l),this},this.removeHandler=function(f){const l=u.indexOf(f);return l!==-1&&u.splice(l,2),this},this.getHandler=function(f){for(let l=0,h=u.length;l<h;l+=2){const d=u[l],m=u[l+1];if(d.global&&(d.lastIndex=0),d.test(f))return m}return null}}}const vT=new Tp;class Kr{constructor(e){this.manager=e!==void 0?e:vT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Vn={};class xT extends Error{constructor(e,t){super(e),this.response=t}}class Go extends Kr{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Gr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Vn[e]!==void 0){Vn[e].push({onLoad:t,onProgress:n,onError:r});return}Vn[e]=[],Vn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const f=Vn[e],l=u.body.getReader(),h=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),d=h?parseInt(h):0,m=d!==0;let _=0;const g=new ReadableStream({start(p){y();function y(){l.read().then(({done:v,value:M})=>{if(v)p.close();else{_+=M.byteLength;const b=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let w=0,I=f.length;w<I;w++){const U=f[w];U.onProgress&&U.onProgress(b)}p.enqueue(M),y()}})}}});return new Response(g)}else throw new xT(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(f=>new DOMParser().parseFromString(f,a));case"json":return u.json();default:if(a===void 0)return u.text();{const l=/charset="?([^;"\s]*)"?/i.exec(a),h=l&&l[1]?l[1].toLowerCase():void 0,d=new TextDecoder(h);return u.arrayBuffer().then(m=>d.decode(m))}}}).then(u=>{Gr.add(e,u);const f=Vn[e];delete Vn[e];for(let l=0,h=f.length;l<h;l++){const d=f[l];d.onLoad&&d.onLoad(u)}}).catch(u=>{const f=Vn[e];if(f===void 0)throw this.manager.itemError(e),u;delete Vn[e];for(let l=0,h=f.length;l<h;l++){const d=f[l];d.onError&&d.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class yT extends Kr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Gr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ns("img");function c(){f(),Gr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(l){f(),r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){a.removeEventListener("load",c,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Ep extends Kr{constructor(e){super(e)}load(e,t,n,r){const s=new Et,o=new yT(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class sa extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const al=new We,Qh=new L,ef=new L;class Lc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _c,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Qh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qh),ef.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ef),t.updateMatrixWorld(),al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(al),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ST extends Lc{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=zr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class MT extends sa{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new ST}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const tf=new We,os=new L,ll=new L;class TT extends Lc{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),os.setFromMatrixPosition(e.matrixWorld),n.position.copy(os),ll.copy(n.position),ll.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ll),n.updateMatrixWorld(),r.makeTranslation(-os.x,-os.y,-os.z),tf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tf)}}class ET extends sa{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new TT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class bT extends Lc{constructor(){super(new xc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bp extends sa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.shadow=new bT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class AT extends sa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hl{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class wT extends Kr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Gr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){Gr.add(e,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){r&&r(c),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class RT{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,r=this.valueSize,s=e*r+r;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,r,c,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let c=t,u=t+t;c!==u;++c)if(n[c]!==n[c+t]){a.setValue(n,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,o=r;s!==o;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,r){_n.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){const o=this._workIndex*s;_n.multiplyQuaternionsFlat(e,o,e,t,e,n),_n.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,n,r,s){const o=1-r;for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*r}}_lerpAdditive(e,t,n,r,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*r}}}const Pc="\\[\\]\\.:\\/",CT=new RegExp("["+Pc+"]","g"),Ic="[^"+Pc+"]",LT="[^"+Pc.replace("\\.","")+"]",PT=/((?:WC+[\/:])*)/.source.replace("WC",Ic),IT=/(WCOD+)?/.source.replace("WCOD",LT),DT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ic),NT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ic),UT=new RegExp("^"+PT+IT+DT+NT+"$"),OT=["material","materials","bones","map"];class FT{constructor(e,t,n){const r=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qe{constructor(e,t,n){this.path=t,this.parsedPath=n||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,n):new Qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(CT,"")}static parseTrackName(e){const t=UT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);OT.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===u){u=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[r];if(o===void 0){const u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=FT;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class BT{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;const s=t.tracks,o=s.length,a=new Array(o),c={endingStart:Tr,endingEnd:Tr};for(let u=0;u!==o;++u){const f=s[u].createInterpolant(null);a[u]=f,f.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=lv,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,u=a.sampleValues;return c[0]=s,c[1]=s+n,u[0]=e/o,u[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,u=this._propertyBindings;switch(this.blendMode){case uv:for(let f=0,l=c.length;f!==l;++f)c[f].evaluate(o),u[f].accumulateAdditive(a);break;case dc:default:for(let f=0,l=c.length;f!==l;++f)c[f].evaluate(o),u[f].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let r=this.time+e,s=this._loopCount;const o=n===cv;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(n===av){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){const a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const u=e<0;this._setEndings(u,!u,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){const r=this._interpolantSettings;n?(r.endingStart=Er,r.endingEnd=Er):(e?r.endingStart=this.zeroSlopeAtStart?Er:Tr:r.endingStart=Ho,t?r.endingEnd=this.zeroSlopeAtEnd?Er:Tr:r.endingEnd=Ho)}_scheduleFading(e,t,n){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=n,this}}const kT=new Float32Array(1);class HT extends Mi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,u=this._bindingsByRootAndName;let f=u[c];f===void 0&&(f={},u[c]=f);for(let l=0;l!==s;++l){const h=r[l],d=h.name;let m=f[d];if(m!==void 0)++m.referenceCount,o[l]=m;else{if(m=o[l],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,d));continue}const _=t&&t._propertyBindings[l].binding.parsedPath;m=new RT(Qe.create(n,d,_),h.ValueTypeName,h.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,d),o[l]=m}a[l].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const r=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,u=c[c.length-1],f=e._byClipCacheIndex;u._byClipCacheIndex=f,c[f]=u,c.pop(),e._byClipCacheIndex=null;const l=a.actionByRoot,h=(e._localRoot||this._root).uuid;delete l[h],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const r=this._bindingsByRootAndName,s=this._bindings;let o=r[t];o===void 0&&(o={},r[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[r],c=t[t.length-1],u=e._cacheIndex;c._cacheIndex=u,t[u]=c,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Sp(new Float32Array(2),new Float32Array(2),1,kT),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const r=t||this._root,s=r.uuid;let o=typeof e=="string"?kl.findByName(r,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let u=null;if(n===void 0&&(o!==null?n=o.blendMode:n=dc),c!==void 0){const l=c.actionByRoot[s];if(l!==void 0&&l.blendMode===n)return l;u=c.knownActions[0],o===null&&(o=u._clip)}if(o===null)return null;const f=new BT(this,o,t,n);return this._bindAction(f,u),this._addInactiveAction(f,a,s),f}existingAction(e,t){const n=t||this._root,r=n.uuid,s=typeof e=="string"?kl.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let u=0;u!==n;++u)t[u]._update(r,e,s,o);const a=this._bindings,c=this._nActiveBindings;for(let u=0;u!==c;++u)a[u].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const u=o[a];this._deactivateAction(u);const f=u._cacheIndex,l=t[t.length-1];u._cacheIndex=null,u._byClipCacheIndex=null,l._cacheIndex=f,t[f]=l,t.pop(),this._removeInactiveBindingsForAction(u)}delete r[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class zT{constructor(e,t,n=0,r=1/0){this.ray=new Hs(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new gc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return zl(e,this,n,t),n.sort(nf),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)zl(e[r],this,n,t);return n.sort(nf),n}}function nf(i,e){return i.distance-e.distance}function zl(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)zl(r[s],e,t,!0)}}const rf=new L,Mo=new L;class Ap{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){rf.subVectors(e,this.start),Mo.subVectors(this.end,this.start);const n=Mo.dot(Mo);let s=Mo.dot(rf)/n;return t&&(s=gt(s,0,1)),s}closestPointToPoint(e,t,n){const r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hc);class VT extends Wr{constructor(){super();de(this,"scene");this.scene=new kM,this.scene.background=new He(2188647)}update(){}}class GT extends Wr{constructor(t){super();de(this,"camera");de(this,"game");de(this,"config",{fov:75,aspect:0,near:.1,far:1e3,position:new L(0,1,5)});this.game=zt.getInstance(),t&&Object.assign(this.config,t),this.config.aspect=this.game.aspect;const{fov:n,aspect:r,near:s,far:o}=this.config;this.camera=new Bt(n,r,s,o),this.camera.rotation.order="YXZ",this.camera.position.copy(this.config.position),this.camera.lookAt(0,0,0),this.game.gameScene.scene.add(this.camera)}update(){}onResize(){this.camera.aspect=this.game.aspect,this.camera.updateProjectionMatrix()}}const Wo=class Wo extends Wr{constructor(t){super();de(this,"renderer");de(this,"element");de(this,"game");this.element=t,this.game=zt.getInstance();const n={antialias:!0,alpha:!0};this.element.tagName===Wo.CANVAS_TAG_NAME?this.renderer=new Fl({canvas:this.element,...n}):(this.renderer=new Fl({...n}),this.element.appendChild(this.renderer.domElement)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=wn,this.renderer.toneMapping=Bd,this.renderer.useLegacyLights=!1,this.renderer.setPixelRatio(window.devicePixelRatio),this.onResize(),this.update()}update(){const{gameScene:{scene:t},gameCamera:{camera:n}}=this.game;this.renderer.render(t,n)}onResize(){this.renderer.setSize(this.game.width,this.game.height)}};de(Wo,"CANVAS_TAG_NAME","CANVAS");let Vl=Wo;const vr=new zs(0,0,0,"YXZ"),xr=new L,WT={type:"change"},XT={type:"lock"},qT={type:"unlock"},sf=Math.PI/2;class jT extends Mi{constructor(e,t){super(),this.camera=e,this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=YT.bind(this),this._onPointerlockChange=KT.bind(this),this._onPointerlockError=$T.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(e){const t=this.camera;xr.setFromMatrixColumn(t.matrix,0),xr.crossVectors(t.up,xr),t.position.addScaledVector(xr,e)}moveRight(e){const t=this.camera;xr.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(xr,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function YT(i){if(this.isLocked===!1)return;const e=i.movementX||i.mozMovementX||i.webkitMovementX||0,t=i.movementY||i.mozMovementY||i.webkitMovementY||0,n=this.camera;vr.setFromQuaternion(n.quaternion),vr.y-=e*.002*this.pointerSpeed,vr.x-=t*.002*this.pointerSpeed,vr.x=Math.max(sf-this.maxPolarAngle,Math.min(sf-this.minPolarAngle,vr.x)),n.quaternion.setFromEuler(vr),this.dispatchEvent(WT)}function KT(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(XT),this.isLocked=!0):(this.dispatchEvent(qT),this.isLocked=!1)}function $T(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}class JT extends Si.EventEmitter{constructor(){super();de(this,"game");de(this,"controls");de(this,"radian",0);de(this,"lastRadian",0);de(this,"dis",0);de(this,"type",1);this.game=zt.getInstance(),this.controls=new jT(this.game.gameCamera.camera,this.game.gameRenderer.renderer.domElement),this.init()}init(){document.querySelector(".agree-btn").addEventListener("mouseup",()=>{this.controls.lock(),document.addEventListener("mouseup",()=>{this.game.ready&&!this.controls.isLocked&&this.controls.lock()})}),document.addEventListener("keydown",n=>{n.key==="q"&&(this.type=this.type===1?2:1)})}update(){const t=this.game.gameWorld.player,n=t.mesh.position.clone(),r=t.direction.clone(),s=new L;this.type===1?s.copy(n):this.type===2&&(s.copy(n.sub(r.multiplyScalar(-1))),s.y+=1),this.controls.camera.position.copy(s)}}const ZT=new L,QT=new L,eE=new L,tE=1e-10;class Fs{constructor(e=new L(0,0,0),t=new L(0,1,0),n=1){this.start=e,this.end=t,this.radius=n}clone(){return new Fs(this.start.clone(),this.end.clone(),this.radius)}set(e,t,n){this.start.copy(e),this.end.copy(t),this.radius=n}copy(e){this.start.copy(e.start),this.end.copy(e.end),this.radius=e.radius}getCenter(e){return e.copy(this.end).add(this.start).multiplyScalar(.5)}translate(e){this.start.add(e),this.end.add(e)}checkAABBAxis(e,t,n,r,s,o,a,c,u){return(s-e<u||s-n<u)&&(e-o<u||n-o<u)&&(a-t<u||a-r<u)&&(t-c<u||r-c<u)}intersectsBox(e){return this.checkAABBAxis(this.start.x,this.start.y,this.end.x,this.end.y,e.min.x,e.max.x,e.min.y,e.max.y,this.radius)&&this.checkAABBAxis(this.start.x,this.start.z,this.end.x,this.end.z,e.min.x,e.max.x,e.min.z,e.max.z,this.radius)&&this.checkAABBAxis(this.start.y,this.start.z,this.end.y,this.end.z,e.min.y,e.max.y,e.min.z,e.max.z,this.radius)}lineLineMinimumPoints(e,t){const n=ZT.copy(e.end).sub(e.start),r=QT.copy(t.end).sub(t.start),s=eE.copy(t.start).sub(e.start),o=n.dot(r),a=n.dot(n),c=r.dot(r),u=r.dot(s),f=n.dot(s);let l,h;const d=a*c-o*o;if(Math.abs(d)<tE){const g=-u/c,p=(o-u)/c;Math.abs(g-.5)<Math.abs(p-.5)?(l=0,h=g):(l=1,h=p)}else l=(u*o+f*c)/d,h=(l*o-u)/c;h=Math.max(0,Math.min(1,h)),l=Math.max(0,Math.min(1,l));const m=n.multiplyScalar(l).add(e.start),_=r.multiplyScalar(h).add(t.start);return[m,_]}}const as=new L,ls=new L,bn=new li,cl=new Ap,nE=new Ap,To=new Mn,cs=new Fs;class Dc{constructor(e){this.triangles=[],this.box=e,this.subTrees=[]}addTriangle(e){return this.bounds||(this.bounds=new Sn),this.bounds.min.x=Math.min(this.bounds.min.x,e.a.x,e.b.x,e.c.x),this.bounds.min.y=Math.min(this.bounds.min.y,e.a.y,e.b.y,e.c.y),this.bounds.min.z=Math.min(this.bounds.min.z,e.a.z,e.b.z,e.c.z),this.bounds.max.x=Math.max(this.bounds.max.x,e.a.x,e.b.x,e.c.x),this.bounds.max.y=Math.max(this.bounds.max.y,e.a.y,e.b.y,e.c.y),this.bounds.max.z=Math.max(this.bounds.max.z,e.a.z,e.b.z,e.c.z),this.triangles.push(e),this}calcBox(){return this.box=this.bounds.clone(),this.box.min.x-=.01,this.box.min.y-=.01,this.box.min.z-=.01,this}split(e){if(!this.box)return;const t=[],n=ls.copy(this.box.max).sub(this.box.min).multiplyScalar(.5);for(let s=0;s<2;s++)for(let o=0;o<2;o++)for(let a=0;a<2;a++){const c=new Sn,u=as.set(s,o,a);c.min.copy(this.box.min).add(u.multiply(n)),c.max.copy(c.min).add(n),t.push(new Dc(c))}let r;for(;r=this.triangles.pop();)for(let s=0;s<t.length;s++)t[s].box.intersectsTriangle(r)&&t[s].triangles.push(r);for(let s=0;s<t.length;s++){const o=t[s].triangles.length;o>8&&e<16&&t[s].split(e+1),o!==0&&this.subTrees.push(t[s])}return this}build(){return this.calcBox(),this.split(0),this}getRayTriangles(e,t){for(let n=0;n<this.subTrees.length;n++){const r=this.subTrees[n];if(e.intersectsBox(r.box))if(r.triangles.length>0)for(let s=0;s<r.triangles.length;s++)t.indexOf(r.triangles[s])===-1&&t.push(r.triangles[s]);else r.getRayTriangles(e,t)}return t}triangleCapsuleIntersect(e,t){t.getPlane(bn);const n=bn.distanceToPoint(e.start)-e.radius,r=bn.distanceToPoint(e.end)-e.radius;if(n>0&&r>0||n<-e.radius&&r<-e.radius)return!1;const s=Math.abs(n/(Math.abs(n)+Math.abs(r))),o=as.copy(e.start).lerp(e.end,s);if(t.containsPoint(o))return{normal:bn.normal.clone(),point:o.clone(),depth:Math.abs(Math.min(n,r))};const a=e.radius*e.radius,c=cl.set(e.start,e.end),u=[[t.a,t.b],[t.b,t.c],[t.c,t.a]];for(let f=0;f<u.length;f++){const l=nE.set(u[f][0],u[f][1]),[h,d]=e.lineLineMinimumPoints(c,l);if(h.distanceToSquared(d)<a)return{normal:h.clone().sub(d).normalize(),point:d.clone(),depth:e.radius-h.distanceTo(d)}}return!1}triangleSphereIntersect(e,t){if(t.getPlane(bn),!e.intersectsPlane(bn))return!1;const n=Math.abs(bn.distanceToSphere(e)),r=e.radius*e.radius-n*n,s=bn.projectPoint(e.center,as);if(t.containsPoint(e.center))return{normal:bn.normal.clone(),point:s.clone(),depth:Math.abs(bn.distanceToSphere(e))};const o=[[t.a,t.b],[t.b,t.c],[t.c,t.a]];for(let a=0;a<o.length;a++){cl.set(o[a][0],o[a][1]),cl.closestPointToPoint(s,!0,ls);const c=ls.distanceToSquared(e.center);if(c<r)return{normal:e.center.clone().sub(ls).normalize(),point:ls.clone(),depth:e.radius-Math.sqrt(c)}}return!1}getSphereTriangles(e,t){for(let n=0;n<this.subTrees.length;n++){const r=this.subTrees[n];if(e.intersectsBox(r.box))if(r.triangles.length>0)for(let s=0;s<r.triangles.length;s++)t.indexOf(r.triangles[s])===-1&&t.push(r.triangles[s]);else r.getSphereTriangles(e,t)}}getCapsuleTriangles(e,t){for(let n=0;n<this.subTrees.length;n++){const r=this.subTrees[n];if(e.intersectsBox(r.box))if(r.triangles.length>0)for(let s=0;s<r.triangles.length;s++)t.indexOf(r.triangles[s])===-1&&t.push(r.triangles[s]);else r.getCapsuleTriangles(e,t)}}sphereIntersect(e){To.copy(e);const t=[];let n,r=!1;this.getSphereTriangles(e,t);for(let s=0;s<t.length;s++)(n=this.triangleSphereIntersect(To,t[s]))&&(r=!0,To.center.add(n.normal.multiplyScalar(n.depth)));if(r){const s=To.center.clone().sub(e.center),o=s.length();return{normal:s.normalize(),depth:o}}return!1}capsuleIntersect(e){cs.copy(e);const t=[];let n,r=!1;this.getCapsuleTriangles(cs,t);for(let s=0;s<t.length;s++)(n=this.triangleCapsuleIntersect(cs,t[s]))&&(r=!0,cs.translate(n.normal.multiplyScalar(n.depth)));if(r){const s=cs.getCenter(new L).sub(e.getCenter(as)),o=s.length();return{normal:s.normalize(),depth:o}}return!1}rayIntersect(e){if(e.direction.length()===0)return;const t=[];let n,r,s=1e100;this.getRayTriangles(e,t);for(let o=0;o<t.length;o++){const a=e.intersectTriangle(t[o].a,t[o].b,t[o].c,!0,as);if(a){const c=a.sub(e.origin).length();s>c&&(r=a.clone().add(e.origin),s=c,n=t[o])}}return s<1e100?{distance:s,triangle:n,position:r}:!1}fromGraphNode(e){return e.updateWorldMatrix(!0,!0),e.traverse(t=>{if(t.isMesh===!0){let n,r=!1;t.geometry.index!==null?(r=!0,n=t.geometry.toNonIndexed()):n=t.geometry;const s=n.getAttribute("position");for(let o=0;o<s.count;o+=3){const a=new L().fromBufferAttribute(s,o),c=new L().fromBufferAttribute(s,o+1),u=new L().fromBufferAttribute(s,o+2);a.applyMatrix4(t.matrixWorld),c.applyMatrix4(t.matrixWorld),u.applyMatrix4(t.matrixWorld),this.addTriangle(new en(a,c,u))}r&&n.dispose()}}),this.build(),this}}class iE extends Si.EventEmitter{constructor(){super();de(this,"game");de(this,"scene");de(this,"resource");de(this,"model");de(this,"octree");this.game=zt.getInstance(),this.resource=this.game.resource,this.scene=this.game.gameScene.scene,this.octree=new Dc,this.init()}init(){const t=this.resource.models.find(n=>n.userData.name==="modular_dungeon");this.octree.fromGraphNode(t.scene),this.scene.add(t.scene)}update(){}}class rE extends Si.EventEmitter{constructor(){super();de(this,"game");de(this,"scene");de(this,"height",1);de(this,"radius",.25);de(this,"capsule");de(this,"mesh");de(this,"speed",.005);de(this,"forwardSpeed",0);de(this,"translateSpeed",0);de(this,"pressKey",{w:!1,s:!1,d:!1,a:!1});de(this,"direction",new L(0,0,-1));de(this,"translateDirection",new L(0,0,0));de(this,"speedVec",new L(0,0,0));de(this,"speedVel",new L(0,0,0));de(this,"onFloor");de(this,"time");this.game=zt.getInstance(),this.scene=this.game.gameScene.scene,this.init()}init(){this.capsule=new Fs(new L(0,this.radius,0),new L(0,this.height+this.radius,0),this.radius),this.mesh=new Gt(new Rc(this.radius,this.height),new hT),this.mesh.rotation.order="YXZ",this.onFloor=!0,this.scene.add(this.mesh),this.sync(),this.handleMoveEvent()}sync(){const t=this.capsule.end.clone();t.y-=this.radius,this.mesh.position.copy(t)}handleMoveEvent(){document.addEventListener("keydown",t=>{const n=this.speed;switch(t.key){case"w":this.forwardSpeed=-n;break;case"s":this.forwardSpeed=n;break;case"a":this.translateSpeed=-n;break;case"d":this.translateSpeed=n;break;case" ":this.speedVel.y=.1,this.time=0;break}}),document.addEventListener("keyup",t=>{const n=t.key;["w","s"].includes(n)&&(this.forwardSpeed=0),["a","d"].includes(n)&&(this.translateSpeed=0)})}handleMove(t){const r=this.direction.clone().multiplyScalar(this.forwardSpeed*t),s=this.translateDirection.multiplyScalar(this.translateSpeed*t),o=r.add(s);this.speedVel.x=o.x,this.speedVel.z=o.z,this.onFloor||(this.speedVel.y-=this.game.gameWorld.gravity*this.time*.01,this.time+=t*.003),this.capsule.translate(this.speedVel),this.handleCollider(),this.sync(),this.check()}check(){this.mesh.position.y<-100&&(this.capsule=new Fs(new L(0,this.radius,0),new L(0,this.height+this.radius,0),this.radius),this.speedVel.set(0,0,0),this.sync())}handleCollider(){const n=this.game.gameWorld.hall.octree.capsuleIntersect(this.capsule);if(this.onFloor=!1,n){const{normal:r,depth:s}=n;this.onFloor=r.y>0,this.onFloor?(this.time=0,this.speedVel.y=0):this.speedVel.addScaledVector(n.normal,-n.normal.dot(this.speedVel)),this.capsule.translate(r.multiplyScalar(s))}}handleDirection(){const n=this.game.gameCamera.camera.rotation.y;this.direction.x=Math.sin(n),this.direction.z=Math.cos(n),this.translateDirection.x=Math.sin(n+Math.PI*.5),this.translateDirection.z=Math.cos(n+Math.PI*.5)}update(){const t=this.game.time.delta;this.game.ready&&(this.handleDirection(),this.handleMove(t))}}class sE extends Si.EventEmitter{constructor(){super();de(this,"game");de(this,"scene");de(this,"model");this.game=zt.getInstance(),this.scene=this.game.gameScene.scene,this.init()}init(){this.model=this.game.resource.getModel("skull_downloadable"),this.model.scene.position.set(-3.8,1.5,-3.7),this.model.scene.name="skull",this.model.scene.userData.name="skull",this.scene.add(this.model.scene)}update(){}}class oE extends Si.EventEmitter{constructor(){super();de(this,"game");de(this,"scene");de(this,"model");de(this,"mixer");de(this,"radius",500);this.game=zt.getInstance(),this.scene=this.game.gameScene.scene,this.init()}init(){this.model=this.game.resource.getModel("phoenix_bird"),this.mixer=new HT(this.model.scene);const t=this.mixer.clipAction(this.model.animations[0]);t.timeScale=.001,t.play(),this.model.scene.position.set(0,0,70);const n=.5;this.model.scene.rotation.y=Math.PI*.5,this.model.scene.scale.set(n,n,n),this.model.scene.name="bird",this.model.scene.userData.name="bird",this.scene.add(this.model.scene)}update(){const n=this.game.time.delta,s=this.game.time.elapsed*.001,o=this.radius*Math.sin(s),a=this.radius*Math.cos(s);this.model.scene.position.set(o,0,a),this.model.scene.rotation.y=Math.PI*.5+s,this.mixer.update(n)}}class oa extends Gt{constructor(){const e=oa.SkyShader,t=new _i({name:"SkyShader",fragmentShader:e.fragmentShader,vertexShader:e.vertexShader,uniforms:sp.clone(e.uniforms),side:Ht,depthWrite:!1});super(new Xr(1,1,1),t),this.isSky=!0}}oa.SkyShader={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new L},up:{value:new L(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPos );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <encodings_fragment>

		}`};class aE extends Si.EventEmitter{constructor(){super();de(this,"game");de(this,"scene");de(this,"sky");de(this,"sun");this.game=zt.getInstance(),this.scene=this.game.gameScene.scene,this.init()}init(){const t={turbidity:10,rayleigh:3,mieCoefficient:.005,mieDirectionalG:.7,elevation:1,azimuth:180,exposure:this.game.gameRenderer.renderer.toneMappingExposure};this.sky=new oa,this.sky.scale.setScalar(500),this.scene.add(this.sky),this.sun=new L;const n=this.sky.material.uniforms;n.turbidity.value=t.turbidity,n.rayleigh.value=t.rayleigh,n.mieCoefficient.value=t.mieCoefficient,n.mieDirectionalG.value=t.mieDirectionalG;const r=Ul.degToRad(90-t.elevation),s=Ul.degToRad(t.azimuth);this.sun.setFromSphericalCoords(1,r,s),n.sunPosition.value.copy(this.sun)}update(){}}class lE extends Wr{constructor(){super();de(this,"game");de(this,"hall");de(this,"player");de(this,"gravity",.98);de(this,"skull");de(this,"bird");de(this,"middlePoint",new be(0,0));de(this,"raycaster");de(this,"objects",[]);de(this,"activeModel");this.game=zt.getInstance(),new aE,this.game.onReady(()=>{this.hall=new iE,this.bird=new oE,this.player=new rE,this.skull=new sE,this.objects.push(this.skull.model.scene),this.initRaycaster()}),document.addEventListener("mouseup",()=>{this.handleRaycaster()})}initRaycaster(){this.raycaster=new zT,this.raycaster.near=.1,this.raycaster.far=10}getFirstParentModel(t){let n;for(;t.parent&&t.parent.type!=="Scene";)n=t.parent,t=n;return n||t}handleRaycaster(){this.raycaster.setFromCamera(this.middlePoint,this.game.gameCamera.camera);const t=this.raycaster.intersectObjects(this.objects);t.length&&(this.activeModel=this.getFirstParentModel(t[0].object),this.activeModel.rotation.y=this.game.gameCamera.camera.rotation.y,this.emit("talk",this.activeModel.name))}update(){this.player&&this.player.update(),this.bird&&this.bird.update()}}class cE{constructor(){de(this,"elapsed");de(this,"current");de(this,"delta");this.current=Date.now(),this.elapsed=0,this.delta=16}update(){const e=Date.now();this.delta=e-this.current,this.delta=this.delta>100?16:this.delta,this.elapsed+=this.delta,this.current=e}}function of(i,e){if(e===hv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Pl||e===jd){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Pl)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class uE extends Kr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new mE(t)}),this.register(function(t){return new TE(t)}),this.register(function(t){return new EE(t)}),this.register(function(t){return new bE(t)}),this.register(function(t){return new _E(t)}),this.register(function(t){return new vE(t)}),this.register(function(t){return new xE(t)}),this.register(function(t){return new yE(t)}),this.register(function(t){return new pE(t)}),this.register(function(t){return new SE(t)}),this.register(function(t){return new gE(t)}),this.register(function(t){return new ME(t)}),this.register(function(t){return new fE(t)}),this.register(function(t){return new AE(t)}),this.register(function(t){return new wE(t)})}load(e,t,n,r){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Hl.extractUrlBase(e),this.manager.itemStart(e);const a=function(u){r?r(u):console.error(u),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Go(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{s.parse(u,o,function(f){t(f),s.manager.itemEnd(e)},a)}catch(f){a(f)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===wp){try{o[je.KHR_BINARY_GLTF]=new RE(e)}catch(l){r&&r(l);return}s=JSON.parse(o[je.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new zE(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){const l=this.pluginCallbacks[f](u);a[l.name]=l,o[l.name]=!0}if(s.extensionsUsed)for(let f=0;f<s.extensionsUsed.length;++f){const l=s.extensionsUsed[f],h=s.extensionsRequired||[];switch(l){case je.KHR_MATERIALS_UNLIT:o[l]=new dE;break;case je.KHR_DRACO_MESH_COMPRESSION:o[l]=new CE(s,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[l]=new LE;break;case je.KHR_MESH_QUANTIZATION:o[l]=new PE;break;default:h.indexOf(l)>=0&&a[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function hE(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class fE{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let u;const f=new He(16777215);c.color!==void 0&&f.fromArray(c.color);const l=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new bp(f),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new ET(f),u.distance=l;break;case"spot":u=new MT(f),u.distance=l,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),u.decay=2,ci(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(u),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class dE{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return zi}extendParams(e,t,n){const r=[];e.color=new He(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Ne))}return Promise.all(r)}}class pE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class mE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new be(a,a)}return Promise.all(s)}}class gE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class _E{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new He(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ne)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class vE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class xE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new He(a[0],a[1],a[2]),Promise.all(s)}}class yE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class SE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new He(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ne)),Promise.all(s)}}class ME{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class TE{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class EE{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let c=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class bE{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let c=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class AE{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=r.byteOffset||0,u=r.byteLength||0,f=r.count,l=r.byteStride,h=new Uint8Array(a,c,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(f,l,h,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(f*l);return o.decodeGltfBuffer(new Uint8Array(d),f,l,h,r.mode,r.filter),d})})}else return null}}class wE{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const u of r.primitives)if(u.mode!==Qt.TRIANGLES&&u.mode!==Qt.TRIANGLE_STRIP&&u.mode!==Qt.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(f=>(c[u]=f,c[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(u=>{const f=u.pop(),l=f.isGroup?f.children:[f],h=u[0].count,d=[];for(const m of l){const _=new We,g=new L,p=new _n,y=new L(1,1,1),v=new qM(m.geometry,m.material,h);for(let M=0;M<h;M++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,M),c.SCALE&&y.fromBufferAttribute(c.SCALE,M),v.setMatrixAt(M,_.compose(g,p,y));for(const M in c)M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&m.geometry.setAttribute(M,c[M]);lt.prototype.copy.call(v,m),this.parser.assignFinalMaterial(v),d.push(v)}return f.isGroup?(f.clear(),f.add(...d),f):d[0]}))}}const wp="glTF",us=12,af={JSON:1313821514,BIN:5130562};class RE{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,us),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==wp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-us,s=new DataView(e,us);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===af.JSON){const u=new Uint8Array(e,us+o,a);this.content=n.decode(u)}else if(c===af.BIN){const u=us+o;this.body=e.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class CE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},u={};for(const f in o){const l=Gl[f]||f.toLowerCase();a[l]=o[f]}for(const f in e.attributes){const l=Gl[f]||f.toLowerCase();if(o[f]!==void 0){const h=n.accessors[e.attributes[f]],d=Ur[h.componentType];u[l]=d.name,c[l]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(f){return new Promise(function(l){r.decodeDracoFile(f,function(h){for(const d in h.attributes){const m=h.attributes[d],_=c[d];_!==void 0&&(m.normalized=_)}l(h)},a,u)})})}}class LE{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class PE{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class Rp extends Vs{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,u=a*3,f=r-t,l=(n-t)/f,h=l*l,d=h*l,m=e*u,_=m-u,g=-2*d+3*h,p=d-h,y=1-g,v=p-h+l;for(let M=0;M!==a;M++){const b=o[_+M+a],w=o[_+M+c]*f,I=o[m+M+a],U=o[m+M]*f;s[M]=y*b+v*w+g*I+p*U}return s}}const IE=new _n;class DE extends Rp{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return IE.fromArray(s).normalize().toArray(s),s}}const Qt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ur={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},lf={9728:Tt,9729:Vt,9984:Ll,9985:Hd,9986:Co,9987:Ki},cf={33071:nn,33648:ko,10497:Br},ul={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Gl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},NE={CUBICSPLINE:void 0,LINEAR:Hr,STEP:Ds},hl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function UE(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Cc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$n})),i.DefaultMaterial}function Ui(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ci(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function OE(i,e,t){let n=!1,r=!1,s=!1;for(let u=0,f=e.length;u<f;u++){const l=e[u];if(l.POSITION!==void 0&&(n=!0),l.NORMAL!==void 0&&(r=!0),l.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],c=[];for(let u=0,f=e.length;u<f;u++){const l=e[u];if(n){const h=l.POSITION!==void 0?t.getDependency("accessor",l.POSITION):i.attributes.position;o.push(h)}if(r){const h=l.NORMAL!==void 0?t.getDependency("accessor",l.NORMAL):i.attributes.normal;a.push(h)}if(s){const h=l.COLOR_0!==void 0?t.getDependency("accessor",l.COLOR_0):i.attributes.color;c.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(u){const f=u[0],l=u[1],h=u[2];return n&&(i.morphAttributes.position=f),r&&(i.morphAttributes.normal=l),s&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function FE(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function BE(i){let e;const t=i.extensions&&i.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+fl(t.attributes):e=i.indices+":"+fl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+fl(i.targets[n]);return e}function fl(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Wl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function kE(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const HE=new We;class zE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new hE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&s<98?this.textureLoader=new Ep(this.options.manager):this.textureLoader=new wT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Go(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};Ui(s,a,r),ci(a,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[u,f]of o.children.entries())s(f,a.children[u])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(Hl.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=ul[r.type],a=Ur[r.componentType],c=r.normalized===!0,u=new a(r.count*o);return Promise.resolve(new bt(u,o,c))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=ul[r.type],u=Ur[r.componentType],f=u.BYTES_PER_ELEMENT,l=f*c,h=r.byteOffset||0,d=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,m=r.normalized===!0;let _,g;if(d&&d!==l){const p=Math.floor(h/d),y="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let v=t.cache.get(y);v||(_=new u(a,p*d,r.count*d/f),v=new HM(_,d/f),t.cache.add(y,v)),g=new Sc(v,c,h%d/f,m)}else a===null?_=new u(r.count*c):_=new u(a,h,r.count*c),g=new bt(_,c,m);if(r.sparse!==void 0){const p=ul.SCALAR,y=Ur[r.sparse.indices.componentType],v=r.sparse.indices.byteOffset||0,M=r.sparse.values.byteOffset||0,b=new y(o[1],v,r.sparse.count*p),w=new u(o[2],M,r.sparse.count*c);a!==null&&(g=new bt(g.array.slice(),g.itemSize,g.normalized));for(let I=0,U=b.length;I<U;I++){const S=b[I];if(g.setX(S,w[I*c]),c>=2&&g.setY(S,w[I*c+1]),c>=3&&g.setZ(S,w[I*c+2]),c>=4&&g.setW(S,w[I*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const u=this.loadImageSource(t,n).then(function(f){f.flipY=!1,f.name=o.name||a.name||"",f.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(f.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return f.magFilter=lf[h.magFilter]||Vt,f.minFilter=lf[h.minFilter]||Ki,f.wrapS=cf[h.wrapS]||Br,f.wrapT=cf[h.wrapT]||Br,r.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(l=>l.clone());const o=r.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",u=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(l){u=!0;const h=new Blob([l],{type:o.mimeType});return c=a.createObjectURL(h),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const f=Promise.resolve(c).then(function(l){return new Promise(function(h,d){let m=h;t.isImageBitmapLoader===!0&&(m=function(_){const g=new Et(_);g.needsUpdate=!0,h(g)}),t.load(Hl.resolveURL(l,s.path),m,void 0,d)})}).then(function(l){return u===!0&&a.revokeObjectURL(c),l.userData.mimeType=o.mimeType||kE(o.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),l});return this.sourceCache[e]=f,f}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new mp,vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new pp,vn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Cc}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},u=[];if(c[je.KHR_MATERIALS_UNLIT]){const l=r[je.KHR_MATERIALS_UNLIT];o=l.getMaterialType(),u.push(l.extendParams(a,s,t))}else{const l=s.pbrMetallicRoughness||{};if(a.color=new He(1,1,1),a.opacity=1,Array.isArray(l.baseColorFactor)){const h=l.baseColorFactor;a.color.fromArray(h),a.opacity=h[3]}l.baseColorTexture!==void 0&&u.push(t.assignTexture(a,"map",l.baseColorTexture,Ne)),a.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,a.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(a,"metalnessMap",l.metallicRoughnessTexture)),u.push(t.assignTexture(a,"roughnessMap",l.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Ln);const f=s.alphaMode||hl.OPAQUE;if(f===hl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,f===hl.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==zi&&(u.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new be(1,1),s.normalTexture.scale!==void 0)){const l=s.normalTexture.scale;a.normalScale.set(l,l)}return s.occlusionTexture!==void 0&&o!==zi&&(u.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==zi&&(a.emissive=new He().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==zi&&u.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ne)),Promise.all(u).then(function(){const l=new o(a);return s.name&&(l.name=s.name),ci(l,s),t.associations.set(l,{materials:e}),s.extensions&&Ui(r,l,s),l})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return uf(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const u=e[a],f=BE(u),l=r[f];if(l)o.push(l.promise);else{let h;u.extensions&&u.extensions[je.KHR_DRACO_MESH_COMPRESSION]?h=s(u):h=uf(new on,u,t),r[f]={primitive:u,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,u=o.length;c<u;c++){const f=o[c].material===void 0?UE(this.cache):this.getDependency("material",o[c].material);a.push(f)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const u=c.slice(0,c.length-1),f=c[c.length-1],l=[];for(let d=0,m=f.length;d<m;d++){const _=f[d],g=o[d];let p;const y=u[d];if(g.mode===Qt.TRIANGLES||g.mode===Qt.TRIANGLE_STRIP||g.mode===Qt.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new VM(_,y):new Gt(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Qt.TRIANGLE_STRIP?p.geometry=of(p.geometry,jd):g.mode===Qt.TRIANGLE_FAN&&(p.geometry=of(p.geometry,Pl));else if(g.mode===Qt.LINES)p=new jM(_,y);else if(g.mode===Qt.LINE_STRIP)p=new Tc(_,y);else if(g.mode===Qt.LINE_LOOP)p=new YM(_,y);else if(g.mode===Qt.POINTS)p=new KM(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&FE(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),ci(p,s),g.extensions&&Ui(r,p,g),t.assignFinalMaterial(p),l.push(p)}for(let d=0,m=l.length;d<m;d++)t.associations.set(l[d],{meshes:e,primitives:d});if(l.length===1)return s.extensions&&Ui(r,l[0],s),l[0];const h=new Vi;s.extensions&&Ui(r,h,s),t.associations.set(h,{meshes:e});for(let d=0,m=l.length;d<m;d++)h.add(l[d]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(Ul.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new xc(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ci(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],c=[];for(let u=0,f=o.length;u<f;u++){const l=o[u];if(l){a.push(l);const h=new We;s!==null&&h.fromArray(s.array,u*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new Mc(a,c)})}loadAnimation(e){const n=this.json.animations[e],r=n.name?n.name:"animation_"+e,s=[],o=[],a=[],c=[],u=[];for(let f=0,l=n.channels.length;f<l;f++){const h=n.channels[f],d=n.samplers[h.sampler],m=h.target,_=m.node,g=n.parameters!==void 0?n.parameters[d.input]:d.input,p=n.parameters!==void 0?n.parameters[d.output]:d.output;m.node!==void 0&&(s.push(this.getDependency("node",_)),o.push(this.getDependency("accessor",g)),a.push(this.getDependency("accessor",p)),c.push(d),u.push(m))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(u)]).then(function(f){const l=f[0],h=f[1],d=f[2],m=f[3],_=f[4],g=[];for(let p=0,y=l.length;p<y;p++){const v=l[p],M=h[p],b=d[p],w=m[p],I=_[p];if(v===void 0)continue;v.updateMatrix();let U;switch(ri[I.path]){case ri.weights:U=Us;break;case ri.rotation:U=Ji;break;case ri.position:case ri.scale:default:U=Os;break}const S=v.name?v.name:v.uuid,A=w.interpolation!==void 0?NE[w.interpolation]:Hr,Y=[];ri[I.path]===ri.weights?v.traverse(function(H){H.morphTargetInfluences&&Y.push(H.name?H.name:H.uuid)}):Y.push(S);let z=b.array;if(b.normalized){const H=Wl(z.constructor),q=new Float32Array(z.length);for(let O=0,G=z.length;O<G;O++)q[O]=z[O]*H;z=q}for(let H=0,q=Y.length;H<q;H++){const O=new U(Y[H]+"."+ri[I.path],M.array,z,A);w.interpolation==="CUBICSPLINE"&&(O.createInterpolant=function(k){const B=this instanceof Ji?DE:Rp;return new B(this.times,this.values,this.getValueSize()/3,k)},O.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),g.push(O)}}return new kl(r,void 0,g)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,u=r.weights.length;c<u;c++)a.morphTargetInfluences[c]=r.weights[c]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let u=0,f=a.length;u<f;u++)o.push(n.getDependency("node",a[u]));const c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),c]).then(function(u){const f=u[0],l=u[1],h=u[2];h!==null&&f.traverse(function(d){d.isSkinnedMesh&&d.bind(h,HE)});for(let d=0,m=l.length;d<m;d++)f.add(l[d]);return f})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],c=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(u){return r._getNodeRef(r.cameraCache,s.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){a.push(u)}),this.nodeCache[e]=Promise.all(a).then(function(u){let f;if(s.isBone===!0?f=new dp:u.length>1?f=new Vi:u.length===1?f=u[0]:f=new lt,f!==u[0])for(let l=0,h=u.length;l<h;l++)f.add(u[l]);if(s.name&&(f.userData.name=s.name,f.name=o),ci(f,s),s.extensions&&Ui(n,f,s),s.matrix!==void 0){const l=new We;l.fromArray(s.matrix),f.applyMatrix4(l)}else s.translation!==void 0&&f.position.fromArray(s.translation),s.rotation!==void 0&&f.quaternion.fromArray(s.rotation),s.scale!==void 0&&f.scale.fromArray(s.scale);return r.associations.has(f)||r.associations.set(f,{}),r.associations.get(f).nodes=e,f}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new Vi;n.name&&(s.name=r.createUniqueName(n.name)),ci(s,n),n.extensions&&Ui(t,s,n);const o=n.nodes||[],a=[];for(let c=0,u=o.length;c<u;c++)a.push(r.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let f=0,l=c.length;f<l;f++)s.add(c[f]);const u=f=>{const l=new Map;for(const[h,d]of r.associations)(h instanceof vn||h instanceof Et)&&l.set(h,d);return f.traverse(h=>{const d=r.associations.get(h);d!=null&&l.set(h,d)}),l};return r.associations=u(s),s})}}function VE(i,e,t){const n=e.attributes,r=new Sn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,u=a.max;if(c!==void 0&&u!==void 0){if(r.set(new L(c[0],c[1],c[2]),new L(u[0],u[1],u[2])),a.normalized){const f=Wl(Ur[a.componentType]);r.min.multiplyScalar(f),r.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new L,c=new L;for(let u=0,f=s.length;u<f;u++){const l=s[u];if(l.POSITION!==void 0){const h=t.json.accessors[l.POSITION],d=h.min,m=h.max;if(d!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),h.normalized){const _=Wl(Ur[h.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new Mn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function uf(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=Gl[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return ci(i,e),VE(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?OE(i,e.targets,t):i})}const dl=new WeakMap;class GE extends Kr{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,r){const s=new Go(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,r)},n,r)}parse(e,t,n){this.decodeDracoFile(e,t,null,null,Ne).catch(n)}decodeDracoFile(e,t,n,r,s=yn){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:r||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,o).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(dl.has(e)){const c=dl.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let r;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(c=>(r=c,new Promise((u,f)=>{r._callbacks[s]={resolve:u,reject:f},r.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{r&&s&&this._releaseTask(r,s)}),dl.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new on;e.index&&t.setIndex(new bt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const r=e.attributes[n],s=r.name,o=r.array,a=r.itemSize,c=new bt(o,a);s==="color"&&(this._assignVertexColorSpace(c,r.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(s,c)}return t}_assignVertexColorSpace(e,t){if(t!==Ne)return;const n=new He;for(let r=0,s=e.count;r<s;r++)n.fromBufferAttribute(e,r).convertSRGBToLinear(),e.setXYZ(r,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Go(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((r,s)=>{n.load(e,r,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const r=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=WE.toString(),o=["/* draco decoder */",r,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const r=new Worker(this.workerSourceURL);r._callbacks={},r._taskCosts={},r._taskLoad=0,r.postMessage({type:"init",decoderConfig:this.decoderConfig}),r.onmessage=function(s){const o=s.data;switch(o.type){case"decode":r._callbacks[o.id].resolve(o);break;case"error":r._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(r)}else this.workerPool.sort(function(r,s){return r._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function WE(){let i,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(f){i.onModuleLoaded=function(l){f({draco:l})},DracoDecoderModule(i)});break;case"decode":const c=a.buffer,u=a.taskConfig;e.then(f=>{const l=f.draco,h=new l.Decoder;try{const d=t(l,h,new Int8Array(c),u),m=d.attributes.map(_=>_.array.buffer);d.index&&m.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},m)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{l.destroy(h)}});break}};function t(o,a,c,u){const f=u.attributeIDs,l=u.attributeTypes;let h,d;const m=a.GetEncodedGeometryType(c);if(m===o.TRIANGULAR_MESH)h=new o.Mesh,d=a.DecodeArrayToMesh(c,c.byteLength,h);else if(m===o.POINT_CLOUD)h=new o.PointCloud,d=a.DecodeArrayToPointCloud(c,c.byteLength,h);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||h.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const _={index:null,attributes:[]};for(const g in f){const p=self[l[g]];let y,v;if(u.useUniqueIDs)v=f[g],y=a.GetAttributeByUniqueId(h,v);else{if(v=a.GetAttributeId(h,o[f[g]]),v===-1)continue;y=a.GetAttribute(h,v)}const M=r(o,a,h,g,p,y);g==="color"&&(M.vertexColorSpace=u.vertexColorSpace),_.attributes.push(M)}return m===o.TRIANGULAR_MESH&&(_.index=n(o,a,h)),o.destroy(h),_}function n(o,a,c){const f=c.num_faces()*3,l=f*4,h=o._malloc(l);a.GetTrianglesUInt32Array(c,l,h);const d=new Uint32Array(o.HEAPF32.buffer,h,f).slice();return o._free(h),{array:d,itemSize:1}}function r(o,a,c,u,f,l){const h=l.num_components(),m=c.num_points()*h,_=m*f.BYTES_PER_ELEMENT,g=s(o,f),p=o._malloc(_);a.GetAttributeDataArrayForAllPoints(c,l,g,_,p);const y=new f(o.HEAPF32.buffer,p,m).slice();return o._free(p),{name:u,array:y,itemSize:h}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}class XE extends Wr{constructor(){super();de(this,"textureLoader");de(this,"gltfLoader");de(this,"glbLoader");de(this,"loadingManager");this.loadingManager=new Tp,this.loadingManager.onStart=(t,n,r)=>{this.emit("start",t,n,r)},this.loadingManager.onProgress=(t,n,r)=>{this.emit("progress",t,n,r)},this.loadingManager.onLoad=()=>{this.emit("loaded")}}getTextureLoader(){return this.textureLoader?this.textureLoader:(this.textureLoader=new Ep(this.loadingManager).setPath(zt.BASE_DIR),this.textureLoader)}getGLTFLoader(){return this.gltfLoader?this.gltfLoader:(this.gltfLoader=new uE(this.loadingManager).setPath(zt.BASE_DIR),this.gltfLoader)}getGLBLoader(){if(this.glbLoader)return this.glbLoader;this.gltfLoader||(this.gltfLoader=this.getGLTFLoader());const t=new GE;return t.setDecoderPath("/draco/"),this.gltfLoader.setDRACOLoader(t),this.gltfLoader}update(){}}class qE extends Wr{constructor(t){super();de(this,"loaders");de(this,"assets");de(this,"textures");de(this,"models");this.assets=t,this.textures=[],this.models=[],this.loaders=new XE,this.initAssets()}async initAssets(){await this.loadAssets(),this.emit("loaded")}async loadAssets(){this.emit("beforeLoad");for(const t of this.assets)await this.load(t),this.emit("itemLoaded")}async load(t){const{type:n,url:r,name:s}=t;switch(this.emit("itemProgress",r,0,1),n){case"texture":const o=await this.loaders.getTextureLoader().loadAsync(r,u=>{this.emit("itemProgress",r,u.loaded,u.total)});o.name=s,this.textures.push(o);break;case"gltf":const a=await this.loaders.getGLTFLoader().loadAsync(r,u=>{this.emit("itemProgress",r,u.loaded,u.total)});a.userData.name=s,this.models.push(a);break;case"glb":const c=await this.loaders.getGLBLoader().loadAsync(r,u=>{this.emit("itemProgress",r,u.loaded,u.total)});c.userData.name=s,this.models.push(c);break}}getTexture(t){return this.textures.find(n=>n.name===t)}getModel(t){return this.models.find(n=>n.userData.name===t)}update(){}}const jE="modulepreload",YE=function(i,e){return new URL(i,e).href},hf={},pl=function(e,t,n){if(!t||t.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=YE(s,n),s in hf)return;hf[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!n)for(let f=r.length-1;f>=0;f--){const l=r[f];if(l.href===s&&(!o||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":jE,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((f,l)=>{u.addEventListener("load",f),u.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},Cp=Object.assign({"/public/resources/model/modular_dungeon.glb":()=>pl(()=>import("./skull_downloadable-f30b205a.js").then(i=>i.m),[],import.meta.url),"/public/resources/model/phoenix_bird.glb":()=>pl(()=>import("./skull_downloadable-f30b205a.js").then(i=>i.p),[],import.meta.url),"/public/resources/model/skull_downloadable.glb":()=>pl(()=>import("./skull_downloadable-f30b205a.js").then(i=>i.s),[],import.meta.url)});console.log(Cp);const KE=Object.keys(Cp).map(i=>{const e=i.replace("/public/",""),[t,n]=e.split(".");let r="";["jpg","jpeg","png"].includes(n)?r="texture":n==="gltf"?r="gltf":n==="glb"&&(r="glb");const s=t.split("/").slice(-1)[0];return{type:r,name:s,url:e}});class $E extends Si.EventEmitter{constructor(){super();de(this,"game");de(this,"light",[]);this.game=zt.getInstance();const t=new AT(16777215,.8),n=new bp(16777215,2);n.position.set(30,30,30),n.castShadow=!0,n.shadow.radius=4,n.shadow.camera.left=-30,n.shadow.camera.right=30,n.shadow.camera.top=30,n.shadow.camera.bottom=-30,this.light.push(t,n),this.game.gameScene.scene.add(...this.light)}update(){}}const ui=class ui{constructor(e){de(this,"width");de(this,"height");de(this,"aspect");de(this,"selector");de(this,"element");de(this,"time");de(this,"resource");de(this,"gameScene");de(this,"gameCamera");de(this,"gameRenderer");de(this,"gameLight");de(this,"gameControls");de(this,"gameWorld");de(this,"started");de(this,"ready",!1);de(this,"preRun");if(ui.instance)return ui.instance;ui.instance=this,this.selector=e,this.initConfig(),this.initTime(),this.initResource(),this.initContainer(),this.initScene(),this.initCamera(),this.initRenderer(),this.initLight(),this.initControls(),this.initWorld(),this.update(),this.onResize(),this.preRun=!0,window.addEventListener("resize",this.onResize.bind(this))}static getInstance(){return ui.instance}initConfig(){this.width=window.innerWidth,this.height=window.innerHeight,this.aspect=this.width/this.height}initTime(){this.time=new cE}initResource(){this.resource=new qE(KE)}onReady(e){this.resource.on("loaded",()=>{this.ready=!0,e()})}initContainer(){const e=document.querySelector(this.selector);if(!e)throw new ReferenceError(`No element found for selector: ${this.selector}.`);this.element=e}initScene(){this.gameScene=new VT}initCamera(){this.gameCamera=new GT}initRenderer(){this.gameRenderer=new Vl(this.element),this.gameRenderer.renderer.render(this.gameScene.scene,this.gameCamera.camera)}initLight(){this.gameLight=new $E}initControls(){this.gameControls=new JT}initWorld(){this.gameWorld=new lE}start(){this.started=!0}update(){this.ready&&(this.started||!this.preRun)&&(this.gameScene&&this.gameScene.update(),this.gameCamera&&this.gameCamera.update(),this.gameRenderer&&this.gameRenderer.update(),this.gameControls&&this.gameControls.update(),this.gameWorld&&this.gameWorld.update(),this.time&&this.time.update()),window.requestAnimationFrame(()=>{this.update()})}onResize(){this.width=window.innerWidth,this.height=window.innerHeight,this.aspect=this.width/this.height,this.gameCamera&&this.gameCamera.onResize(),this.gameRenderer&&this.gameRenderer.onResize()}};de(ui,"instance"),de(ui,"BASE_DIR","./");let zt=ui;const JE={class:"loading"},ZE={class:"loading-box"},QE=["value"],eb={class:"loading-text"},tb=Kf({__name:"Preload",emits:["start"],setup(i,{emit:e}){const t=Hi(0),n=Hi("资源解析中..."),r=Hi(0),s=Hi(!1);let o=1,a=0,c=200,u=0,f;const l=e,h=()=>{r.value=2,setTimeout(()=>{s.value=!0,f.start(),l("start",f)})};return Zo(()=>{f=new zt("canvas.webgl"),f.resource.on("itemProgress",(d,m,_)=>{if(n.value=`资源数：${o}/${f.resource.assets.length}，加载${d}中...`,_===0){t.value=a/c;const g=u>0?m/u:0;u=m,a+=1+g,c+=1+g}else t.value=m/_}),f.resource.on("itemLoaded",()=>{o++,a=0,o<=f.resource.assets.length&&(t.value=0)}),f.resource.on("loaded",()=>{n.value="资源加载完成，场景载入中...",t.value=1,setTimeout(()=>{r.value=1},1e3)})}),(d,m)=>(_d(),bg(Ta,{name:"run"},{default:Eo(()=>[Cr(ht("div",JE,[kt(Ta,{name:"fade"},{default:Eo(()=>[Cr(ht("button",{id:"start-btn",class:"btn",onClick:h},"开始",512),[[Pr,r.value===1]])]),_:1}),kt(Ta,{name:"fade"},{default:Eo(()=>[Cr(ht("div",ZE,[ht("progress",{value:t.value},null,8,QE),ht("div",eb,yf(n.value),1)],512),[[Pr,r.value===0]])]),_:1})],512),[[Pr,!s.value]])]),_:1}))}});const Lp=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},nb=Lp(tb,[["__scopeId","data-v-76bd0fea"]]);var Pp={exports:{}};(function(i,e){(function(t,n){i.exports=n()})(typeof self<"u"?self:Sr,()=>(()=>{var t={3146:(o,a,c)=>{for(var u=c(3491),f=typeof window>"u"?c.g:window,l=["moz","webkit"],h="AnimationFrame",d=f["request"+h],m=f["cancel"+h]||f["cancelRequest"+h],_=0;!d&&_<l.length;_++)d=f[l[_]+"Request"+h],m=f[l[_]+"Cancel"+h]||f[l[_]+"CancelRequest"+h];if(!d||!m){var g=0,p=0,y=[],v=1e3/60;d=function(M){if(y.length===0){var b=u(),w=Math.max(0,v-(b-g));g=w+b,setTimeout(function(){var I=y.slice(0);y.length=0;for(var U=0;U<I.length;U++)if(!I[U].cancelled)try{I[U].callback(g)}catch(S){setTimeout(function(){throw S},0)}},Math.round(w))}return y.push({handle:++p,callback:M,cancelled:!1}),p},m=function(M){for(var b=0;b<y.length;b++)y[b].handle===M&&(y[b].cancelled=!0)}}o.exports=function(M){return d.call(f,M)},o.exports.cancel=function(){m.apply(f,arguments)},o.exports.polyfill=function(M){M||(M=f),M.requestAnimationFrame=d,M.cancelAnimationFrame=m}},3491:function(o){(function(){var a,c,u,f,l,h;typeof performance<"u"&&performance!==null&&performance.now?o.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(o.exports=function(){return(a()-l)/1e6},c=process.hrtime,f=(a=function(){var d;return 1e9*(d=c())[0]+d[1]})(),h=1e9*process.uptime(),l=f-h):Date.now?(o.exports=function(){return Date.now()-u},u=Date.now()):(o.exports=function(){return new Date().getTime()-u},u=new Date().getTime())}).call(this)}},n={};function r(o){var a=n[o];if(a!==void 0)return a.exports;var c=n[o]={exports:{}};return t[o].call(c.exports,c,c.exports,r),c.exports}r.n=o=>{var a=o&&o.__esModule?()=>o.default:()=>o;return r.d(a,{a}),a},r.d=(o,a)=>{for(var c in a)r.o(a,c)&&!r.o(o,c)&&Object.defineProperty(o,c,{enumerable:!0,get:a[c]})},r.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),r.o=(o,a)=>Object.prototype.hasOwnProperty.call(o,a);var s={};return(()=>{r.d(s,{default:()=>q});var o=r(3146),a=r.n(o);const c=function(O){return new RegExp(/<[a-z][\s\S]*>/i).test(O)},u=function(O,G){return Math.floor(Math.random()*(G-O+1))+O};var f="TYPE_CHARACTER",l="REMOVE_CHARACTER",h="REMOVE_ALL",d="REMOVE_LAST_VISIBLE_NODE",m="PAUSE_FOR",_="CALL_FUNCTION",g="ADD_HTML_TAG_ELEMENT",p="CHANGE_DELETE_SPEED",y="CHANGE_DELAY",v="CHANGE_CURSOR",M="PASTE_STRING",b="HTML_TAG";function w(O){return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(G){return typeof G}:function(G){return G&&typeof Symbol=="function"&&G.constructor===Symbol&&G!==Symbol.prototype?"symbol":typeof G},w(O)}function I(O,G){var k=Object.keys(O);if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(O);G&&(B=B.filter(function(oe){return Object.getOwnPropertyDescriptor(O,oe).enumerable})),k.push.apply(k,B)}return k}function U(O){for(var G=1;G<arguments.length;G++){var k=arguments[G]!=null?arguments[G]:{};G%2?I(Object(k),!0).forEach(function(B){z(O,B,k[B])}):Object.getOwnPropertyDescriptors?Object.defineProperties(O,Object.getOwnPropertyDescriptors(k)):I(Object(k)).forEach(function(B){Object.defineProperty(O,B,Object.getOwnPropertyDescriptor(k,B))})}return O}function S(O){return function(G){if(Array.isArray(G))return A(G)}(O)||function(G){if(typeof Symbol<"u"&&G[Symbol.iterator]!=null||G["@@iterator"]!=null)return Array.from(G)}(O)||function(G,k){if(G){if(typeof G=="string")return A(G,k);var B={}.toString.call(G).slice(8,-1);return B==="Object"&&G.constructor&&(B=G.constructor.name),B==="Map"||B==="Set"?Array.from(G):B==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(B)?A(G,k):void 0}}(O)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function A(O,G){(G==null||G>O.length)&&(G=O.length);for(var k=0,B=Array(G);k<G;k++)B[k]=O[k];return B}function Y(O,G){for(var k=0;k<G.length;k++){var B=G[k];B.enumerable=B.enumerable||!1,B.configurable=!0,"value"in B&&(B.writable=!0),Object.defineProperty(O,H(B.key),B)}}function z(O,G,k){return(G=H(G))in O?Object.defineProperty(O,G,{value:k,enumerable:!0,configurable:!0,writable:!0}):O[G]=k,O}function H(O){var G=function(k){if(w(k)!="object"||!k)return k;var B=k[Symbol.toPrimitive];if(B!==void 0){var oe=B.call(k,"string");if(w(oe)!="object")return oe;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(k)}(O);return w(G)=="symbol"?G:G+""}const q=function(){function O(B,oe){var P=this;if(function(D,ne){if(!(D instanceof ne))throw new TypeError("Cannot call a class as a function")}(this,O),z(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),z(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),z(this,"setupWrapperElement",function(){P.state.elements.container&&(P.state.elements.wrapper.className=P.options.wrapperClassName,P.state.elements.cursor.className=P.options.cursorClassName,P.state.elements.cursor.innerHTML=P.options.cursor,P.state.elements.container.innerHTML="",P.state.elements.container.appendChild(P.state.elements.wrapper),P.state.elements.container.appendChild(P.state.elements.cursor))}),z(this,"start",function(){return P.state.eventLoopPaused=!1,P.runEventLoop(),P}),z(this,"pause",function(){return P.state.eventLoopPaused=!0,P}),z(this,"stop",function(){return P.state.eventLoop&&((0,o.cancel)(P.state.eventLoop),P.state.eventLoop=null),P}),z(this,"pauseFor",function(D){return P.addEventToQueue(m,{ms:D}),P}),z(this,"typeOutAllStrings",function(){return typeof P.options.strings=="string"?(P.typeString(P.options.strings).pauseFor(P.options.pauseFor),P):(P.options.strings.forEach(function(D){P.typeString(D).pauseFor(P.options.pauseFor).deleteAll(P.options.deleteSpeed)}),P)}),z(this,"typeString",function(D){var ne=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(c(D))return P.typeOutHTMLString(D,ne);if(D){var le=(P.options||{}).stringSplitter,ge=typeof le=="function"?le(D):D.split("");P.typeCharacters(ge,ne)}return P}),z(this,"pasteString",function(D){var ne=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return c(D)?P.typeOutHTMLString(D,ne,!0):(D&&P.addEventToQueue(M,{character:D,node:ne}),P)}),z(this,"typeOutHTMLString",function(D){var ne=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,le=arguments.length>2?arguments[2]:void 0,ge=function(Le){var $e=document.createElement("div");return $e.innerHTML=Le,$e.childNodes}(D);if(ge.length>0)for(var fe=0;fe<ge.length;fe++){var Te=ge[fe],Ie=Te.innerHTML;Te&&Te.nodeType!==3?(Te.innerHTML="",P.addEventToQueue(g,{node:Te,parentNode:ne}),le?P.pasteString(Ie,Te):P.typeString(Ie,Te)):Te.textContent&&(le?P.pasteString(Te.textContent,ne):P.typeString(Te.textContent,ne))}return P}),z(this,"deleteAll",function(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return P.addEventToQueue(h,{speed:D}),P}),z(this,"changeDeleteSpeed",function(D){if(!D)throw new Error("Must provide new delete speed");return P.addEventToQueue(p,{speed:D}),P}),z(this,"changeDelay",function(D){if(!D)throw new Error("Must provide new delay");return P.addEventToQueue(y,{delay:D}),P}),z(this,"changeCursor",function(D){if(!D)throw new Error("Must provide new cursor");return P.addEventToQueue(v,{cursor:D}),P}),z(this,"deleteChars",function(D){if(!D)throw new Error("Must provide amount of characters to delete");for(var ne=0;ne<D;ne++)P.addEventToQueue(l);return P}),z(this,"callFunction",function(D,ne){if(!D||typeof D!="function")throw new Error("Callback must be a function");return P.addEventToQueue(_,{cb:D,thisArg:ne}),P}),z(this,"typeCharacters",function(D){var ne=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D||!Array.isArray(D))throw new Error("Characters must be an array");return D.forEach(function(le){P.addEventToQueue(f,{character:le,node:ne})}),P}),z(this,"removeCharacters",function(D){if(!D||!Array.isArray(D))throw new Error("Characters must be an array");return D.forEach(function(){P.addEventToQueue(l)}),P}),z(this,"addEventToQueue",function(D,ne){var le=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return P.addEventToStateProperty(D,ne,le,"eventQueue")}),z(this,"addReverseCalledEvent",function(D,ne){var le=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return P.options.loop?P.addEventToStateProperty(D,ne,le,"reverseCalledEvents"):P}),z(this,"addEventToStateProperty",function(D,ne){var le=arguments.length>2&&arguments[2]!==void 0&&arguments[2],ge=arguments.length>3?arguments[3]:void 0,fe={eventName:D,eventArgs:ne||{}};return P.state[ge]=le?[fe].concat(S(P.state[ge])):[].concat(S(P.state[ge]),[fe]),P}),z(this,"runEventLoop",function(){P.state.lastFrameTime||(P.state.lastFrameTime=Date.now());var D=Date.now(),ne=D-P.state.lastFrameTime;if(!P.state.eventQueue.length){if(!P.options.loop)return;P.state.eventQueue=S(P.state.calledEvents),P.state.calledEvents=[],P.options=U({},P.state.initialOptions)}if(P.state.eventLoop=a()(P.runEventLoop),!P.state.eventLoopPaused){if(P.state.pauseUntil){if(D<P.state.pauseUntil)return;P.state.pauseUntil=null}var le,ge=S(P.state.eventQueue),fe=ge.shift();if(!(ne<=(le=fe.eventName===d||fe.eventName===l?P.options.deleteSpeed==="natural"?u(40,80):P.options.deleteSpeed:P.options.delay==="natural"?u(120,160):P.options.delay))){var Te=fe.eventName,Ie=fe.eventArgs;switch(P.logInDevMode({currentEvent:fe,state:P.state,delay:le}),Te){case M:case f:var Le=Ie.character,$e=Ie.node,ze=document.createTextNode(Le),W=ze;P.options.onCreateTextNode&&typeof P.options.onCreateTextNode=="function"&&(W=P.options.onCreateTextNode(Le,ze)),W&&($e?$e.appendChild(W):P.state.elements.wrapper.appendChild(W)),P.state.visibleNodes=[].concat(S(P.state.visibleNodes),[{type:"TEXT_NODE",character:Le,node:W}]);break;case l:ge.unshift({eventName:d,eventArgs:{removingCharacterNode:!0}});break;case m:var R=fe.eventArgs.ms;P.state.pauseUntil=Date.now()+parseInt(R);break;case _:var C=fe.eventArgs,V=C.cb,K=C.thisArg;V.call(K,{elements:P.state.elements});break;case g:var ee=fe.eventArgs,J=ee.node,se=ee.parentNode;se?se.appendChild(J):P.state.elements.wrapper.appendChild(J),P.state.visibleNodes=[].concat(S(P.state.visibleNodes),[{type:b,node:J,parentNode:se||P.state.elements.wrapper}]);break;case h:var ce=P.state.visibleNodes,he=Ie.speed,ae=[];he&&ae.push({eventName:p,eventArgs:{speed:he,temp:!0}});for(var T=0,x=ce.length;T<x;T++)ae.push({eventName:d,eventArgs:{removingCharacterNode:!1}});he&&ae.push({eventName:p,eventArgs:{speed:P.options.deleteSpeed,temp:!0}}),ge.unshift.apply(ge,ae);break;case d:var F=fe.eventArgs.removingCharacterNode;if(P.state.visibleNodes.length){var Z=P.state.visibleNodes.pop(),ie=Z.type,ue=Z.node,pe=Z.character;P.options.onRemoveNode&&typeof P.options.onRemoveNode=="function"&&P.options.onRemoveNode({node:ue,character:pe}),ue&&ue.parentNode.removeChild(ue),ie===b&&F&&ge.unshift({eventName:d,eventArgs:{}})}break;case p:P.options.deleteSpeed=fe.eventArgs.speed;break;case y:P.options.delay=fe.eventArgs.delay;break;case v:P.options.cursor=fe.eventArgs.cursor,P.state.elements.cursor.innerHTML=fe.eventArgs.cursor}P.options.loop&&(fe.eventName===d||fe.eventArgs&&fe.eventArgs.temp||(P.state.calledEvents=[].concat(S(P.state.calledEvents),[fe]))),P.state.eventQueue=ge,P.state.lastFrameTime=D}}}),B)if(typeof B=="string"){var Se=document.querySelector(B);if(!Se)throw new Error("Could not find container element");this.state.elements.container=Se}else this.state.elements.container=B;oe&&(this.options=U(U({},this.options),oe)),this.state.initialOptions=U({},this.options),this.init()}var G,k;return G=O,(k=[{key:"init",value:function(){var B,oe;this.setupWrapperElement(),this.addEventToQueue(v,{cursor:this.options.cursor},!0),this.addEventToQueue(h,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(B=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(oe=document.createElement("style")).appendChild(document.createTextNode(B)),document.head.appendChild(oe),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(B){this.options.devMode&&console.log(B)}}])&&Y(G.prototype,k),Object.defineProperty(G,"prototype",{writable:!1}),O}()})(),s.default})())})(Pp);var ib=Pp.exports;const rb=bd(ib);var Ip={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(i){(function(){var e=function(){this.init()};e.prototype={init:function(){var l=this||t;return l._counter=1e3,l._html5AudioPool=[],l.html5PoolSize=10,l._codecs={},l._howls=[],l._muted=!1,l._volume=1,l._canPlayEvent="canplaythrough",l._navigator=typeof window<"u"&&window.navigator?window.navigator:null,l.masterGain=null,l.noAudio=!1,l.usingWebAudio=!0,l.autoSuspend=!0,l.ctx=null,l.autoUnlock=!0,l._setup(),l},volume:function(l){var h=this||t;if(l=parseFloat(l),h.ctx||f(),typeof l<"u"&&l>=0&&l<=1){if(h._volume=l,h._muted)return h;h.usingWebAudio&&h.masterGain.gain.setValueAtTime(l,t.ctx.currentTime);for(var d=0;d<h._howls.length;d++)if(!h._howls[d]._webAudio)for(var m=h._howls[d]._getSoundIds(),_=0;_<m.length;_++){var g=h._howls[d]._soundById(m[_]);g&&g._node&&(g._node.volume=g._volume*l)}return h}return h._volume},mute:function(l){var h=this||t;h.ctx||f(),h._muted=l,h.usingWebAudio&&h.masterGain.gain.setValueAtTime(l?0:h._volume,t.ctx.currentTime);for(var d=0;d<h._howls.length;d++)if(!h._howls[d]._webAudio)for(var m=h._howls[d]._getSoundIds(),_=0;_<m.length;_++){var g=h._howls[d]._soundById(m[_]);g&&g._node&&(g._node.muted=l?!0:g._muted)}return h},stop:function(){for(var l=this||t,h=0;h<l._howls.length;h++)l._howls[h].stop();return l},unload:function(){for(var l=this||t,h=l._howls.length-1;h>=0;h--)l._howls[h].unload();return l.usingWebAudio&&l.ctx&&typeof l.ctx.close<"u"&&(l.ctx.close(),l.ctx=null,f()),l},codecs:function(l){return(this||t)._codecs[l.replace(/^x-/,"")]},_setup:function(){var l=this||t;if(l.state=l.ctx&&l.ctx.state||"suspended",l._autoSuspend(),!l.usingWebAudio)if(typeof Audio<"u")try{var h=new Audio;typeof h.oncanplaythrough>"u"&&(l._canPlayEvent="canplay")}catch{l.noAudio=!0}else l.noAudio=!0;try{var h=new Audio;h.muted&&(l.noAudio=!0)}catch{}return l.noAudio||l._setupCodecs(),l},_setupCodecs:function(){var l=this||t,h=null;try{h=typeof Audio<"u"?new Audio:null}catch{return l}if(!h||typeof h.canPlayType!="function")return l;var d=h.canPlayType("audio/mpeg;").replace(/^no$/,""),m=l._navigator?l._navigator.userAgent:"",_=m.match(/OPR\/(\d+)/g),g=_&&parseInt(_[0].split("/")[1],10)<33,p=m.indexOf("Safari")!==-1&&m.indexOf("Chrome")===-1,y=m.match(/Version\/(.*?) /),v=p&&y&&parseInt(y[1],10)<15;return l._codecs={mp3:!!(!g&&(d||h.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!d,opus:!!h.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!h.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!h.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(h.canPlayType('audio/wav; codecs="1"')||h.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!h.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!h.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(h.canPlayType("audio/x-m4a;")||h.canPlayType("audio/m4a;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(h.canPlayType("audio/x-m4b;")||h.canPlayType("audio/m4b;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(h.canPlayType("audio/x-mp4;")||h.canPlayType("audio/mp4;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!v&&h.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!v&&h.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!h.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(h.canPlayType("audio/x-flac;")||h.canPlayType("audio/flac;")).replace(/^no$/,"")},l},_unlockAudio:function(){var l=this||t;if(!(l._audioUnlocked||!l.ctx)){l._audioUnlocked=!1,l.autoUnlock=!1,!l._mobileUnloaded&&l.ctx.sampleRate!==44100&&(l._mobileUnloaded=!0,l.unload()),l._scratchBuffer=l.ctx.createBuffer(1,1,22050);var h=function(d){for(;l._html5AudioPool.length<l.html5PoolSize;)try{var m=new Audio;m._unlocked=!0,l._releaseHtml5Audio(m)}catch{l.noAudio=!0;break}for(var _=0;_<l._howls.length;_++)if(!l._howls[_]._webAudio)for(var g=l._howls[_]._getSoundIds(),p=0;p<g.length;p++){var y=l._howls[_]._soundById(g[p]);y&&y._node&&!y._node._unlocked&&(y._node._unlocked=!0,y._node.load())}l._autoResume();var v=l.ctx.createBufferSource();v.buffer=l._scratchBuffer,v.connect(l.ctx.destination),typeof v.start>"u"?v.noteOn(0):v.start(0),typeof l.ctx.resume=="function"&&l.ctx.resume(),v.onended=function(){v.disconnect(0),l._audioUnlocked=!0,document.removeEventListener("touchstart",h,!0),document.removeEventListener("touchend",h,!0),document.removeEventListener("click",h,!0),document.removeEventListener("keydown",h,!0);for(var M=0;M<l._howls.length;M++)l._howls[M]._emit("unlock")}};return document.addEventListener("touchstart",h,!0),document.addEventListener("touchend",h,!0),document.addEventListener("click",h,!0),document.addEventListener("keydown",h,!0),l}},_obtainHtml5Audio:function(){var l=this||t;if(l._html5AudioPool.length)return l._html5AudioPool.pop();var h=new Audio().play();return h&&typeof Promise<"u"&&(h instanceof Promise||typeof h.then=="function")&&h.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(l){var h=this||t;return l._unlocked&&h._html5AudioPool.push(l),h},_autoSuspend:function(){var l=this;if(!(!l.autoSuspend||!l.ctx||typeof l.ctx.suspend>"u"||!t.usingWebAudio)){for(var h=0;h<l._howls.length;h++)if(l._howls[h]._webAudio){for(var d=0;d<l._howls[h]._sounds.length;d++)if(!l._howls[h]._sounds[d]._paused)return l}return l._suspendTimer&&clearTimeout(l._suspendTimer),l._suspendTimer=setTimeout(function(){if(l.autoSuspend){l._suspendTimer=null,l.state="suspending";var m=function(){l.state="suspended",l._resumeAfterSuspend&&(delete l._resumeAfterSuspend,l._autoResume())};l.ctx.suspend().then(m,m)}},3e4),l}},_autoResume:function(){var l=this;if(!(!l.ctx||typeof l.ctx.resume>"u"||!t.usingWebAudio))return l.state==="running"&&l.ctx.state!=="interrupted"&&l._suspendTimer?(clearTimeout(l._suspendTimer),l._suspendTimer=null):l.state==="suspended"||l.state==="running"&&l.ctx.state==="interrupted"?(l.ctx.resume().then(function(){l.state="running";for(var h=0;h<l._howls.length;h++)l._howls[h]._emit("resume")}),l._suspendTimer&&(clearTimeout(l._suspendTimer),l._suspendTimer=null)):l.state==="suspending"&&(l._resumeAfterSuspend=!0),l}};var t=new e,n=function(l){var h=this;if(!l.src||l.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}h.init(l)};n.prototype={init:function(l){var h=this;return t.ctx||f(),h._autoplay=l.autoplay||!1,h._format=typeof l.format!="string"?l.format:[l.format],h._html5=l.html5||!1,h._muted=l.mute||!1,h._loop=l.loop||!1,h._pool=l.pool||5,h._preload=typeof l.preload=="boolean"||l.preload==="metadata"?l.preload:!0,h._rate=l.rate||1,h._sprite=l.sprite||{},h._src=typeof l.src!="string"?l.src:[l.src],h._volume=l.volume!==void 0?l.volume:1,h._xhr={method:l.xhr&&l.xhr.method?l.xhr.method:"GET",headers:l.xhr&&l.xhr.headers?l.xhr.headers:null,withCredentials:l.xhr&&l.xhr.withCredentials?l.xhr.withCredentials:!1},h._duration=0,h._state="unloaded",h._sounds=[],h._endTimers={},h._queue=[],h._playLock=!1,h._onend=l.onend?[{fn:l.onend}]:[],h._onfade=l.onfade?[{fn:l.onfade}]:[],h._onload=l.onload?[{fn:l.onload}]:[],h._onloaderror=l.onloaderror?[{fn:l.onloaderror}]:[],h._onplayerror=l.onplayerror?[{fn:l.onplayerror}]:[],h._onpause=l.onpause?[{fn:l.onpause}]:[],h._onplay=l.onplay?[{fn:l.onplay}]:[],h._onstop=l.onstop?[{fn:l.onstop}]:[],h._onmute=l.onmute?[{fn:l.onmute}]:[],h._onvolume=l.onvolume?[{fn:l.onvolume}]:[],h._onrate=l.onrate?[{fn:l.onrate}]:[],h._onseek=l.onseek?[{fn:l.onseek}]:[],h._onunlock=l.onunlock?[{fn:l.onunlock}]:[],h._onresume=[],h._webAudio=t.usingWebAudio&&!h._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(h),h._autoplay&&h._queue.push({event:"play",action:function(){h.play()}}),h._preload&&h._preload!=="none"&&h.load(),h},load:function(){var l=this,h=null;if(t.noAudio){l._emit("loaderror",null,"No audio support.");return}typeof l._src=="string"&&(l._src=[l._src]);for(var d=0;d<l._src.length;d++){var m,_;if(l._format&&l._format[d])m=l._format[d];else{if(_=l._src[d],typeof _!="string"){l._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}m=/^data:audio\/([^;,]+);/i.exec(_),m||(m=/\.([^.]+)$/.exec(_.split("?",1)[0])),m&&(m=m[1].toLowerCase())}if(m||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),m&&t.codecs(m)){h=l._src[d];break}}if(!h){l._emit("loaderror",null,"No codec support for selected audio sources.");return}return l._src=h,l._state="loading",window.location.protocol==="https:"&&h.slice(0,5)==="http:"&&(l._html5=!0,l._webAudio=!1),new r(l),l._webAudio&&o(l),l},play:function(l,h){var d=this,m=null;if(typeof l=="number")m=l,l=null;else{if(typeof l=="string"&&d._state==="loaded"&&!d._sprite[l])return null;if(typeof l>"u"&&(l="__default",!d._playLock)){for(var _=0,g=0;g<d._sounds.length;g++)d._sounds[g]._paused&&!d._sounds[g]._ended&&(_++,m=d._sounds[g]._id);_===1?l=null:m=null}}var p=m?d._soundById(m):d._inactiveSound();if(!p)return null;if(m&&!l&&(l=p._sprite||"__default"),d._state!=="loaded"){p._sprite=l,p._ended=!1;var y=p._id;return d._queue.push({event:"play",action:function(){d.play(y)}}),y}if(m&&!p._paused)return h||d._loadQueue("play"),p._id;d._webAudio&&t._autoResume();var v=Math.max(0,p._seek>0?p._seek:d._sprite[l][0]/1e3),M=Math.max(0,(d._sprite[l][0]+d._sprite[l][1])/1e3-v),b=M*1e3/Math.abs(p._rate),w=d._sprite[l][0]/1e3,I=(d._sprite[l][0]+d._sprite[l][1])/1e3;p._sprite=l,p._ended=!1;var U=function(){p._paused=!1,p._seek=v,p._start=w,p._stop=I,p._loop=!!(p._loop||d._sprite[l][2])};if(v>=I){d._ended(p);return}var S=p._node;if(d._webAudio){var A=function(){d._playLock=!1,U(),d._refreshBuffer(p);var q=p._muted||d._muted?0:p._volume;S.gain.setValueAtTime(q,t.ctx.currentTime),p._playStart=t.ctx.currentTime,typeof S.bufferSource.start>"u"?p._loop?S.bufferSource.noteGrainOn(0,v,86400):S.bufferSource.noteGrainOn(0,v,M):p._loop?S.bufferSource.start(0,v,86400):S.bufferSource.start(0,v,M),b!==1/0&&(d._endTimers[p._id]=setTimeout(d._ended.bind(d,p),b)),h||setTimeout(function(){d._emit("play",p._id),d._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?A():(d._playLock=!0,d.once("resume",A),d._clearTimer(p._id))}else{var Y=function(){S.currentTime=v,S.muted=p._muted||d._muted||t._muted||S.muted,S.volume=p._volume*t.volume(),S.playbackRate=p._rate;try{var q=S.play();if(q&&typeof Promise<"u"&&(q instanceof Promise||typeof q.then=="function")?(d._playLock=!0,U(),q.then(function(){d._playLock=!1,S._unlocked=!0,h?d._loadQueue():d._emit("play",p._id)}).catch(function(){d._playLock=!1,d._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),p._ended=!0,p._paused=!0})):h||(d._playLock=!1,U(),d._emit("play",p._id)),S.playbackRate=p._rate,S.paused){d._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}l!=="__default"||p._loop?d._endTimers[p._id]=setTimeout(d._ended.bind(d,p),b):(d._endTimers[p._id]=function(){d._ended(p),S.removeEventListener("ended",d._endTimers[p._id],!1)},S.addEventListener("ended",d._endTimers[p._id],!1))}catch(O){d._emit("playerror",p._id,O)}};S.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(S.src=d._src,S.load());var z=window&&window.ejecta||!S.readyState&&t._navigator.isCocoonJS;if(S.readyState>=3||z)Y();else{d._playLock=!0,d._state="loading";var H=function(){d._state="loaded",Y(),S.removeEventListener(t._canPlayEvent,H,!1)};S.addEventListener(t._canPlayEvent,H,!1),d._clearTimer(p._id)}}return p._id},pause:function(l){var h=this;if(h._state!=="loaded"||h._playLock)return h._queue.push({event:"pause",action:function(){h.pause(l)}}),h;for(var d=h._getSoundIds(l),m=0;m<d.length;m++){h._clearTimer(d[m]);var _=h._soundById(d[m]);if(_&&!_._paused&&(_._seek=h.seek(d[m]),_._rateSeek=0,_._paused=!0,h._stopFade(d[m]),_._node))if(h._webAudio){if(!_._node.bufferSource)continue;typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),h._cleanBuffer(_._node)}else(!isNaN(_._node.duration)||_._node.duration===1/0)&&_._node.pause();arguments[1]||h._emit("pause",_?_._id:null)}return h},stop:function(l,h){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"stop",action:function(){d.stop(l)}}),d;for(var m=d._getSoundIds(l),_=0;_<m.length;_++){d._clearTimer(m[_]);var g=d._soundById(m[_]);g&&(g._seek=g._start||0,g._rateSeek=0,g._paused=!0,g._ended=!0,d._stopFade(m[_]),g._node&&(d._webAudio?g._node.bufferSource&&(typeof g._node.bufferSource.stop>"u"?g._node.bufferSource.noteOff(0):g._node.bufferSource.stop(0),d._cleanBuffer(g._node)):(!isNaN(g._node.duration)||g._node.duration===1/0)&&(g._node.currentTime=g._start||0,g._node.pause(),g._node.duration===1/0&&d._clearSound(g._node))),h||d._emit("stop",g._id))}return d},mute:function(l,h){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"mute",action:function(){d.mute(l,h)}}),d;if(typeof h>"u")if(typeof l=="boolean")d._muted=l;else return d._muted;for(var m=d._getSoundIds(h),_=0;_<m.length;_++){var g=d._soundById(m[_]);g&&(g._muted=l,g._interval&&d._stopFade(g._id),d._webAudio&&g._node?g._node.gain.setValueAtTime(l?0:g._volume,t.ctx.currentTime):g._node&&(g._node.muted=t._muted?!0:l),d._emit("mute",g._id))}return d},volume:function(){var l=this,h=arguments,d,m;if(h.length===0)return l._volume;if(h.length===1||h.length===2&&typeof h[1]>"u"){var _=l._getSoundIds(),g=_.indexOf(h[0]);g>=0?m=parseInt(h[0],10):d=parseFloat(h[0])}else h.length>=2&&(d=parseFloat(h[0]),m=parseInt(h[1],10));var p;if(typeof d<"u"&&d>=0&&d<=1){if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"volume",action:function(){l.volume.apply(l,h)}}),l;typeof m>"u"&&(l._volume=d),m=l._getSoundIds(m);for(var y=0;y<m.length;y++)p=l._soundById(m[y]),p&&(p._volume=d,h[2]||l._stopFade(m[y]),l._webAudio&&p._node&&!p._muted?p._node.gain.setValueAtTime(d,t.ctx.currentTime):p._node&&!p._muted&&(p._node.volume=d*t.volume()),l._emit("volume",p._id))}else return p=m?l._soundById(m):l._sounds[0],p?p._volume:0;return l},fade:function(l,h,d,m){var _=this;if(_._state!=="loaded"||_._playLock)return _._queue.push({event:"fade",action:function(){_.fade(l,h,d,m)}}),_;l=Math.min(Math.max(0,parseFloat(l)),1),h=Math.min(Math.max(0,parseFloat(h)),1),d=parseFloat(d),_.volume(l,m);for(var g=_._getSoundIds(m),p=0;p<g.length;p++){var y=_._soundById(g[p]);if(y){if(m||_._stopFade(g[p]),_._webAudio&&!y._muted){var v=t.ctx.currentTime,M=v+d/1e3;y._volume=l,y._node.gain.setValueAtTime(l,v),y._node.gain.linearRampToValueAtTime(h,M)}_._startFadeInterval(y,l,h,d,g[p],typeof m>"u")}}return _},_startFadeInterval:function(l,h,d,m,_,g){var p=this,y=h,v=d-h,M=Math.abs(v/.01),b=Math.max(4,M>0?m/M:m),w=Date.now();l._fadeTo=d,l._interval=setInterval(function(){var I=(Date.now()-w)/m;w=Date.now(),y+=v*I,y=Math.round(y*100)/100,v<0?y=Math.max(d,y):y=Math.min(d,y),p._webAudio?l._volume=y:p.volume(y,l._id,!0),g&&(p._volume=y),(d<h&&y<=d||d>h&&y>=d)&&(clearInterval(l._interval),l._interval=null,l._fadeTo=null,p.volume(d,l._id),p._emit("fade",l._id))},b)},_stopFade:function(l){var h=this,d=h._soundById(l);return d&&d._interval&&(h._webAudio&&d._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(d._interval),d._interval=null,h.volume(d._fadeTo,l),d._fadeTo=null,h._emit("fade",l)),h},loop:function(){var l=this,h=arguments,d,m,_;if(h.length===0)return l._loop;if(h.length===1)if(typeof h[0]=="boolean")d=h[0],l._loop=d;else return _=l._soundById(parseInt(h[0],10)),_?_._loop:!1;else h.length===2&&(d=h[0],m=parseInt(h[1],10));for(var g=l._getSoundIds(m),p=0;p<g.length;p++)_=l._soundById(g[p]),_&&(_._loop=d,l._webAudio&&_._node&&_._node.bufferSource&&(_._node.bufferSource.loop=d,d&&(_._node.bufferSource.loopStart=_._start||0,_._node.bufferSource.loopEnd=_._stop,l.playing(g[p])&&(l.pause(g[p],!0),l.play(g[p],!0)))));return l},rate:function(){var l=this,h=arguments,d,m;if(h.length===0)m=l._sounds[0]._id;else if(h.length===1){var _=l._getSoundIds(),g=_.indexOf(h[0]);g>=0?m=parseInt(h[0],10):d=parseFloat(h[0])}else h.length===2&&(d=parseFloat(h[0]),m=parseInt(h[1],10));var p;if(typeof d=="number"){if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"rate",action:function(){l.rate.apply(l,h)}}),l;typeof m>"u"&&(l._rate=d),m=l._getSoundIds(m);for(var y=0;y<m.length;y++)if(p=l._soundById(m[y]),p){l.playing(m[y])&&(p._rateSeek=l.seek(m[y]),p._playStart=l._webAudio?t.ctx.currentTime:p._playStart),p._rate=d,l._webAudio&&p._node&&p._node.bufferSource?p._node.bufferSource.playbackRate.setValueAtTime(d,t.ctx.currentTime):p._node&&(p._node.playbackRate=d);var v=l.seek(m[y]),M=(l._sprite[p._sprite][0]+l._sprite[p._sprite][1])/1e3-v,b=M*1e3/Math.abs(p._rate);(l._endTimers[m[y]]||!p._paused)&&(l._clearTimer(m[y]),l._endTimers[m[y]]=setTimeout(l._ended.bind(l,p),b)),l._emit("rate",p._id)}}else return p=l._soundById(m),p?p._rate:l._rate;return l},seek:function(){var l=this,h=arguments,d,m;if(h.length===0)l._sounds.length&&(m=l._sounds[0]._id);else if(h.length===1){var _=l._getSoundIds(),g=_.indexOf(h[0]);g>=0?m=parseInt(h[0],10):l._sounds.length&&(m=l._sounds[0]._id,d=parseFloat(h[0]))}else h.length===2&&(d=parseFloat(h[0]),m=parseInt(h[1],10));if(typeof m>"u")return 0;if(typeof d=="number"&&(l._state!=="loaded"||l._playLock))return l._queue.push({event:"seek",action:function(){l.seek.apply(l,h)}}),l;var p=l._soundById(m);if(p)if(typeof d=="number"&&d>=0){var y=l.playing(m);y&&l.pause(m,!0),p._seek=d,p._ended=!1,l._clearTimer(m),!l._webAudio&&p._node&&!isNaN(p._node.duration)&&(p._node.currentTime=d);var v=function(){y&&l.play(m,!0),l._emit("seek",m)};if(y&&!l._webAudio){var M=function(){l._playLock?setTimeout(M,0):v()};setTimeout(M,0)}else v()}else if(l._webAudio){var b=l.playing(m)?t.ctx.currentTime-p._playStart:0,w=p._rateSeek?p._rateSeek-p._seek:0;return p._seek+(w+b*Math.abs(p._rate))}else return p._node.currentTime;return l},playing:function(l){var h=this;if(typeof l=="number"){var d=h._soundById(l);return d?!d._paused:!1}for(var m=0;m<h._sounds.length;m++)if(!h._sounds[m]._paused)return!0;return!1},duration:function(l){var h=this,d=h._duration,m=h._soundById(l);return m&&(d=h._sprite[m._sprite][1]/1e3),d},state:function(){return this._state},unload:function(){for(var l=this,h=l._sounds,d=0;d<h.length;d++)h[d]._paused||l.stop(h[d]._id),l._webAudio||(l._clearSound(h[d]._node),h[d]._node.removeEventListener("error",h[d]._errorFn,!1),h[d]._node.removeEventListener(t._canPlayEvent,h[d]._loadFn,!1),h[d]._node.removeEventListener("ended",h[d]._endFn,!1),t._releaseHtml5Audio(h[d]._node)),delete h[d]._node,l._clearTimer(h[d]._id);var m=t._howls.indexOf(l);m>=0&&t._howls.splice(m,1);var _=!0;for(d=0;d<t._howls.length;d++)if(t._howls[d]._src===l._src||l._src.indexOf(t._howls[d]._src)>=0){_=!1;break}return s&&_&&delete s[l._src],t.noAudio=!1,l._state="unloaded",l._sounds=[],l=null,null},on:function(l,h,d,m){var _=this,g=_["_on"+l];return typeof h=="function"&&g.push(m?{id:d,fn:h,once:m}:{id:d,fn:h}),_},off:function(l,h,d){var m=this,_=m["_on"+l],g=0;if(typeof h=="number"&&(d=h,h=null),h||d)for(g=0;g<_.length;g++){var p=d===_[g].id;if(h===_[g].fn&&p||!h&&p){_.splice(g,1);break}}else if(l)m["_on"+l]=[];else{var y=Object.keys(m);for(g=0;g<y.length;g++)y[g].indexOf("_on")===0&&Array.isArray(m[y[g]])&&(m[y[g]]=[])}return m},once:function(l,h,d){var m=this;return m.on(l,h,d,1),m},_emit:function(l,h,d){for(var m=this,_=m["_on"+l],g=_.length-1;g>=0;g--)(!_[g].id||_[g].id===h||l==="load")&&(setTimeout((function(p){p.call(this,h,d)}).bind(m,_[g].fn),0),_[g].once&&m.off(l,_[g].fn,_[g].id));return m._loadQueue(l),m},_loadQueue:function(l){var h=this;if(h._queue.length>0){var d=h._queue[0];d.event===l&&(h._queue.shift(),h._loadQueue()),l||d.action()}return h},_ended:function(l){var h=this,d=l._sprite;if(!h._webAudio&&l._node&&!l._node.paused&&!l._node.ended&&l._node.currentTime<l._stop)return setTimeout(h._ended.bind(h,l),100),h;var m=!!(l._loop||h._sprite[d][2]);if(h._emit("end",l._id),!h._webAudio&&m&&h.stop(l._id,!0).play(l._id),h._webAudio&&m){h._emit("play",l._id),l._seek=l._start||0,l._rateSeek=0,l._playStart=t.ctx.currentTime;var _=(l._stop-l._start)*1e3/Math.abs(l._rate);h._endTimers[l._id]=setTimeout(h._ended.bind(h,l),_)}return h._webAudio&&!m&&(l._paused=!0,l._ended=!0,l._seek=l._start||0,l._rateSeek=0,h._clearTimer(l._id),h._cleanBuffer(l._node),t._autoSuspend()),!h._webAudio&&!m&&h.stop(l._id,!0),h},_clearTimer:function(l){var h=this;if(h._endTimers[l]){if(typeof h._endTimers[l]!="function")clearTimeout(h._endTimers[l]);else{var d=h._soundById(l);d&&d._node&&d._node.removeEventListener("ended",h._endTimers[l],!1)}delete h._endTimers[l]}return h},_soundById:function(l){for(var h=this,d=0;d<h._sounds.length;d++)if(l===h._sounds[d]._id)return h._sounds[d];return null},_inactiveSound:function(){var l=this;l._drain();for(var h=0;h<l._sounds.length;h++)if(l._sounds[h]._ended)return l._sounds[h].reset();return new r(l)},_drain:function(){var l=this,h=l._pool,d=0,m=0;if(!(l._sounds.length<h)){for(m=0;m<l._sounds.length;m++)l._sounds[m]._ended&&d++;for(m=l._sounds.length-1;m>=0;m--){if(d<=h)return;l._sounds[m]._ended&&(l._webAudio&&l._sounds[m]._node&&l._sounds[m]._node.disconnect(0),l._sounds.splice(m,1),d--)}}},_getSoundIds:function(l){var h=this;if(typeof l>"u"){for(var d=[],m=0;m<h._sounds.length;m++)d.push(h._sounds[m]._id);return d}else return[l]},_refreshBuffer:function(l){var h=this;return l._node.bufferSource=t.ctx.createBufferSource(),l._node.bufferSource.buffer=s[h._src],l._panner?l._node.bufferSource.connect(l._panner):l._node.bufferSource.connect(l._node),l._node.bufferSource.loop=l._loop,l._loop&&(l._node.bufferSource.loopStart=l._start||0,l._node.bufferSource.loopEnd=l._stop||0),l._node.bufferSource.playbackRate.setValueAtTime(l._rate,t.ctx.currentTime),h},_cleanBuffer:function(l){var h=this,d=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!l.bufferSource)return h;if(t._scratchBuffer&&l.bufferSource&&(l.bufferSource.onended=null,l.bufferSource.disconnect(0),d))try{l.bufferSource.buffer=t._scratchBuffer}catch{}return l.bufferSource=null,h},_clearSound:function(l){var h=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);h||(l.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var r=function(l){this._parent=l,this.init()};r.prototype={init:function(){var l=this,h=l._parent;return l._muted=h._muted,l._loop=h._loop,l._volume=h._volume,l._rate=h._rate,l._seek=0,l._paused=!0,l._ended=!0,l._sprite="__default",l._id=++t._counter,h._sounds.push(l),l.create(),l},create:function(){var l=this,h=l._parent,d=t._muted||l._muted||l._parent._muted?0:l._volume;return h._webAudio?(l._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),l._node.gain.setValueAtTime(d,t.ctx.currentTime),l._node.paused=!0,l._node.connect(t.masterGain)):t.noAudio||(l._node=t._obtainHtml5Audio(),l._errorFn=l._errorListener.bind(l),l._node.addEventListener("error",l._errorFn,!1),l._loadFn=l._loadListener.bind(l),l._node.addEventListener(t._canPlayEvent,l._loadFn,!1),l._endFn=l._endListener.bind(l),l._node.addEventListener("ended",l._endFn,!1),l._node.src=h._src,l._node.preload=h._preload===!0?"auto":h._preload,l._node.volume=d*t.volume(),l._node.load()),l},reset:function(){var l=this,h=l._parent;return l._muted=h._muted,l._loop=h._loop,l._volume=h._volume,l._rate=h._rate,l._seek=0,l._rateSeek=0,l._paused=!0,l._ended=!0,l._sprite="__default",l._id=++t._counter,l},_errorListener:function(){var l=this;l._parent._emit("loaderror",l._id,l._node.error?l._node.error.code:0),l._node.removeEventListener("error",l._errorFn,!1)},_loadListener:function(){var l=this,h=l._parent;h._duration=Math.ceil(l._node.duration*10)/10,Object.keys(h._sprite).length===0&&(h._sprite={__default:[0,h._duration*1e3]}),h._state!=="loaded"&&(h._state="loaded",h._emit("load"),h._loadQueue()),l._node.removeEventListener(t._canPlayEvent,l._loadFn,!1)},_endListener:function(){var l=this,h=l._parent;h._duration===1/0&&(h._duration=Math.ceil(l._node.duration*10)/10,h._sprite.__default[1]===1/0&&(h._sprite.__default[1]=h._duration*1e3),h._ended(l)),l._node.removeEventListener("ended",l._endFn,!1)}};var s={},o=function(l){var h=l._src;if(s[h]){l._duration=s[h].duration,u(l);return}if(/^data:[^;]+;base64,/.test(h)){for(var d=atob(h.split(",")[1]),m=new Uint8Array(d.length),_=0;_<d.length;++_)m[_]=d.charCodeAt(_);c(m.buffer,l)}else{var g=new XMLHttpRequest;g.open(l._xhr.method,h,!0),g.withCredentials=l._xhr.withCredentials,g.responseType="arraybuffer",l._xhr.headers&&Object.keys(l._xhr.headers).forEach(function(p){g.setRequestHeader(p,l._xhr.headers[p])}),g.onload=function(){var p=(g.status+"")[0];if(p!=="0"&&p!=="2"&&p!=="3"){l._emit("loaderror",null,"Failed loading audio file with status: "+g.status+".");return}c(g.response,l)},g.onerror=function(){l._webAudio&&(l._html5=!0,l._webAudio=!1,l._sounds=[],delete s[h],l.load())},a(g)}},a=function(l){try{l.send()}catch{l.onerror()}},c=function(l,h){var d=function(){h._emit("loaderror",null,"Decoding audio data failed.")},m=function(_){_&&h._sounds.length>0?(s[h._src]=_,u(h,_)):d()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(l).then(m).catch(d):t.ctx.decodeAudioData(l,m,d)},u=function(l,h){h&&!l._duration&&(l._duration=h.duration),Object.keys(l._sprite).length===0&&(l._sprite={__default:[0,l._duration*1e3]}),l._state!=="loaded"&&(l._state="loaded",l._emit("load"),l._loadQueue())},f=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var l=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),h=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=h?parseInt(h[1],10):null;if(l&&d&&d<9){var m=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!m&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};i.Howler=t,i.Howl=n,typeof Sr<"u"?(Sr.HowlerGlobal=e,Sr.Howler=t,Sr.Howl=n,Sr.Sound=r):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=r)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var r=n._howls.length-1;r>=0;r--)n._howls[r].stereo(t);return n},HowlerGlobal.prototype.pos=function(t,n,r){var s=this;if(!s.ctx||!s.ctx.listener)return s;if(n=typeof n!="number"?s._pos[1]:n,r=typeof r!="number"?s._pos[2]:r,typeof t=="number")s._pos=[t,n,r],typeof s.ctx.listener.positionX<"u"?(s.ctx.listener.positionX.setTargetAtTime(s._pos[0],Howler.ctx.currentTime,.1),s.ctx.listener.positionY.setTargetAtTime(s._pos[1],Howler.ctx.currentTime,.1),s.ctx.listener.positionZ.setTargetAtTime(s._pos[2],Howler.ctx.currentTime,.1)):s.ctx.listener.setPosition(s._pos[0],s._pos[1],s._pos[2]);else return s._pos;return s},HowlerGlobal.prototype.orientation=function(t,n,r,s,o,a){var c=this;if(!c.ctx||!c.ctx.listener)return c;var u=c._orientation;if(n=typeof n!="number"?u[1]:n,r=typeof r!="number"?u[2]:r,s=typeof s!="number"?u[3]:s,o=typeof o!="number"?u[4]:o,a=typeof a!="number"?u[5]:a,typeof t=="number")c._orientation=[t,n,r,s,o,a],typeof c.ctx.listener.forwardX<"u"?(c.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),c.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),c.ctx.listener.forwardZ.setTargetAtTime(r,Howler.ctx.currentTime,.1),c.ctx.listener.upX.setTargetAtTime(s,Howler.ctx.currentTime,.1),c.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),c.ctx.listener.upZ.setTargetAtTime(a,Howler.ctx.currentTime,.1)):c.ctx.listener.setOrientation(t,n,r,s,o,a);else return u;return c},Howl.prototype.init=function(t){return function(n){var r=this;return r._orientation=n.orientation||[1,0,0],r._stereo=n.stereo||null,r._pos=n.pos||null,r._pannerAttr={coneInnerAngle:typeof n.coneInnerAngle<"u"?n.coneInnerAngle:360,coneOuterAngle:typeof n.coneOuterAngle<"u"?n.coneOuterAngle:360,coneOuterGain:typeof n.coneOuterGain<"u"?n.coneOuterGain:0,distanceModel:typeof n.distanceModel<"u"?n.distanceModel:"inverse",maxDistance:typeof n.maxDistance<"u"?n.maxDistance:1e4,panningModel:typeof n.panningModel<"u"?n.panningModel:"HRTF",refDistance:typeof n.refDistance<"u"?n.refDistance:1,rolloffFactor:typeof n.rolloffFactor<"u"?n.rolloffFactor:1},r._onstereo=n.onstereo?[{fn:n.onstereo}]:[],r._onpos=n.onpos?[{fn:n.onpos}]:[],r._onorientation=n.onorientation?[{fn:n.onorientation}]:[],t.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,n){var r=this;if(!r._webAudio)return r;if(r._state!=="loaded")return r._queue.push({event:"stereo",action:function(){r.stereo(t,n)}}),r;var s=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof n>"u")if(typeof t=="number")r._stereo=t,r._pos=[t,0,0];else return r._stereo;for(var o=r._getSoundIds(n),a=0;a<o.length;a++){var c=r._soundById(o[a]);if(c)if(typeof t=="number")c._stereo=t,c._pos=[t,0,0],c._node&&(c._pannerAttr.panningModel="equalpower",(!c._panner||!c._panner.pan)&&e(c,s),s==="spatial"?typeof c._panner.positionX<"u"?(c._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),c._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),c._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):c._panner.setPosition(t,0,0):c._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),r._emit("stereo",c._id);else return c._stereo}return r},Howl.prototype.pos=function(t,n,r,s){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(t,n,r,s)}}),o;if(n=typeof n!="number"?0:n,r=typeof r!="number"?-.5:r,typeof s>"u")if(typeof t=="number")o._pos=[t,n,r];else return o._pos;for(var a=o._getSoundIds(s),c=0;c<a.length;c++){var u=o._soundById(a[c]);if(u)if(typeof t=="number")u._pos=[t,n,r],u._node&&((!u._panner||u._panner.pan)&&e(u,"spatial"),typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(r,Howler.ctx.currentTime)):u._panner.setPosition(t,n,r)),o._emit("pos",u._id);else return u._pos}return o},Howl.prototype.orientation=function(t,n,r,s){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(t,n,r,s)}}),o;if(n=typeof n!="number"?o._orientation[1]:n,r=typeof r!="number"?o._orientation[2]:r,typeof s>"u")if(typeof t=="number")o._orientation=[t,n,r];else return o._orientation;for(var a=o._getSoundIds(s),c=0;c<a.length;c++){var u=o._soundById(a[c]);if(u)if(typeof t=="number")u._orientation=[t,n,r],u._node&&(u._panner||(u._pos||(u._pos=o._pos||[0,0,-.5]),e(u,"spatial")),typeof u._panner.orientationX<"u"?(u._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),u._panner.orientationZ.setValueAtTime(r,Howler.ctx.currentTime)):u._panner.setOrientation(t,n,r)),o._emit("orientation",u._id);else return u._orientation}return o},Howl.prototype.pannerAttr=function(){var t=this,n=arguments,r,s,o;if(!t._webAudio)return t;if(n.length===0)return t._pannerAttr;if(n.length===1)if(typeof n[0]=="object")r=n[0],typeof s>"u"&&(r.pannerAttr||(r.pannerAttr={coneInnerAngle:r.coneInnerAngle,coneOuterAngle:r.coneOuterAngle,coneOuterGain:r.coneOuterGain,distanceModel:r.distanceModel,maxDistance:r.maxDistance,refDistance:r.refDistance,rolloffFactor:r.rolloffFactor,panningModel:r.panningModel}),t._pannerAttr={coneInnerAngle:typeof r.pannerAttr.coneInnerAngle<"u"?r.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof r.pannerAttr.coneOuterAngle<"u"?r.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof r.pannerAttr.coneOuterGain<"u"?r.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof r.pannerAttr.distanceModel<"u"?r.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof r.pannerAttr.maxDistance<"u"?r.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof r.pannerAttr.refDistance<"u"?r.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof r.pannerAttr.rolloffFactor<"u"?r.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof r.pannerAttr.panningModel<"u"?r.pannerAttr.panningModel:t._panningModel});else return o=t._soundById(parseInt(n[0],10)),o?o._pannerAttr:t._pannerAttr;else n.length===2&&(r=n[0],s=parseInt(n[1],10));for(var a=t._getSoundIds(s),c=0;c<a.length;c++)if(o=t._soundById(a[c]),o){var u=o._pannerAttr;u={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:u.coneInnerAngle,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:u.coneOuterAngle,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:u.coneOuterGain,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:u.distanceModel,maxDistance:typeof r.maxDistance<"u"?r.maxDistance:u.maxDistance,refDistance:typeof r.refDistance<"u"?r.refDistance:u.refDistance,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:u.rolloffFactor,panningModel:typeof r.panningModel<"u"?r.panningModel:u.panningModel};var f=o._panner;f||(o._pos||(o._pos=t._pos||[0,0,-.5]),e(o,"spatial"),f=o._panner),f.coneInnerAngle=u.coneInnerAngle,f.coneOuterAngle=u.coneOuterAngle,f.coneOuterGain=u.coneOuterGain,f.distanceModel=u.distanceModel,f.maxDistance=u.maxDistance,f.refDistance=u.refDistance,f.rolloffFactor=u.rolloffFactor,f.panningModel=u.panningModel}return t},Sound.prototype.init=function(t){return function(){var n=this,r=n._parent;n._orientation=r._orientation,n._stereo=r._stereo,n._pos=r._pos,n._pannerAttr=r._pannerAttr,t.call(this),n._stereo?r.stereo(n._stereo):n._pos&&r.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var n=this,r=n._parent;return n._orientation=r._orientation,n._stereo=r._stereo,n._pos=r._pos,n._pannerAttr=r._pannerAttr,n._stereo?r.stereo(n._stereo):n._pos?r.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,r._refreshBuffer(n)),t.call(this)}}(Sound.prototype.reset);var e=function(t,n){n=n||"spatial",n==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()})(Ip);class sb{constructor(e){de(this,"assets");de(this,"sounds",[]);this.assets=e,this.init()}init(){this.assets.forEach(e=>{const t=new Ip.Howl({src:["./audio/"+e],loop:!1});this.sounds.push({howl:t,name:e})})}getHowl(e){const t=this.sounds.find(n=>n.name===e);return t?t.howl:null}load(e){const t=this.getHowl(e);t&&t.load()}play(e){const t=this.getHowl(e);t&&t.play()}update(){}}const ob={class:"pointer"},ab={class:"greet"},lb={class:"knowledge"},cb=Kf({__name:"App",setup(i){const e=Hi(!1),t=Hi(!1),n=Hi(!1),r=new sb(["talk1.m4a"]);Zo(()=>{r.load("talk1.m4a")});const s=()=>{new rb(document.querySelector(".greet-content"),{loop:!1,delay:300}).typeString("啊~~~你好啊，进入地牢的人。好久没看见活生生的人了，原谅老朽的话多了不少...<br />").typeString("你能帮我出去看看嘛，外面的那只老鸟转来转去，烦死了。<br />").callFunction(()=>{setTimeout(()=>{e.value=!1})}).start(),r.play("talk1.m4a")},o=()=>{n.value=!1},a=c=>{t.value=!0,n.value=!0,c.gameWorld.on("talk",()=>{e.value=!0,setTimeout(()=>{s()},500)})};return(c,u)=>(_d(),Eg(fn,null,[ht("div",null,[u[1]||(u[1]=ht("canvas",{class:"webgl"},null,-1)),Cr(ht("div",ob,null,512),[[Pr,t.value]]),Cr(ht("div",ab,u[0]||(u[0]=[ht("img",{class:"avatar",src:__},null,-1),ht("div",{class:"greet-content"},null,-1)]),512),[[Pr,e.value]])]),Cr(ht("div",lb,[u[2]||(u[2]=ht("h2",null,"欢迎来到这里",-1)),u[3]||(u[3]=ht("div",{class:"content"},[ht("p",null,"在PC端通过w/a/s/d或者↑↓←→来移动，按q切换视角"),ht("p",null,"屏幕准心对着场景中的模型「左键」点击进行交互"),ht("p",null,[ht("strong",null,"PointerLockControls不支持移动端o(╥﹏╥)o"),ht("span",{style:{"font-size":"10px"}},"练习的demo就不继续捣鼓了")])],-1)),ht("div",{class:"btn agree-btn",onClick:o},"我知道了")],512),[[Pr,n.value]]),kt(nb,{onStart:a})],64))}});const ub=Lp(cb,[["__scopeId","data-v-230ea3b0"]]),hb=p_(ub);hb.mount("#app");

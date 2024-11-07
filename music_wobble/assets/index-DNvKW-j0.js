(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gl="166",$i={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},df=0,Xc=1,pf=2,rd=1,sd=2,Gn=3,$n=0,Yt=1,Sn=2,Kn=0,yr=1,Za=2,qc=3,Kc=4,ff=5,Oi=100,mf=101,gf=102,_f=103,vf=104,bf=200,xf=201,yf=202,wf=203,Ja=204,Qa=205,Mf=206,Ef=207,Sf=208,Tf=209,Af=210,Cf=211,Pf=212,Rf=213,Lf=214,If=0,Df=1,Nf=2,Po=3,Uf=4,Of=5,Ff=6,kf=7,od=0,Bf=1,Vf=2,yi=0,ad=1,ld=2,cd=3,Wl=4,zf=5,ud=6,hd=7,Yc="attached",Hf="detached",dd=300,Ar=301,Cr=302,Ro=303,el=304,Wo=306,Pr=1e3,An=1001,Lo=1002,Vt=1003,pd=1004,cs=1005,Pt=1006,xo=1007,Cn=1008,Zn=1009,fd=1010,md=1011,fs=1012,jl=1013,zi=1014,qt=1015,bn=1016,Xl=1017,ql=1018,Rr=1020,gd=35902,_d=1021,vd=1022,hn=1023,bd=1024,xd=1025,wr=1026,Lr=1027,Kl=1028,Yl=1029,yd=1030,$l=1031,Zl=1033,yo=33776,wo=33777,Mo=33778,Eo=33779,tl=35840,nl=35841,il=35842,rl=35843,sl=36196,ol=37492,al=37496,ll=37808,cl=37809,ul=37810,hl=37811,dl=37812,pl=37813,fl=37814,ml=37815,gl=37816,_l=37817,vl=37818,bl=37819,xl=37820,yl=37821,So=36492,wl=36494,Ml=36495,wd=36283,El=36284,Sl=36285,Tl=36286,ms=2300,gs=2301,ra=2302,$c=2400,Zc=2401,Jc=2402,Gf=2500,Wf=0,Md=1,Al=2,jf=3200,Ed=3201,Sd=0,Xf=1,vi="",Dt="srgb",xt="srgb-linear",Jl="display-p3",jo="display-p3-linear",Io="linear",at="srgb",Do="rec709",No="p3",Ji=7680,Qc=519,qf=512,Kf=513,Yf=514,Td=515,$f=516,Zf=517,Jf=518,Qf=519,Cl=35044,eu="300 es",Xn=2e3,Uo=2001;class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tu=1234567;const hs=Math.PI/180,Ir=180/Math.PI;function xn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Ct(i,e,t){return Math.max(e,Math.min(t,i))}function Ql(i,e){return(i%e+e)%e}function em(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function tm(i,e,t){return i!==e?(t-i)/(e-i):0}function ds(i,e,t){return(1-t)*i+t*e}function nm(i,e,t,n){return ds(i,e,1-Math.exp(-t*n))}function im(i,e=1){return e-Math.abs(Ql(i,e*2)-e)}function rm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function sm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function om(i,e){return i+Math.floor(Math.random()*(e-i+1))}function am(i,e){return i+Math.random()*(e-i)}function lm(i){return i*(.5-Math.random())}function cm(i){i!==void 0&&(tu=i);let e=tu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function um(i){return i*hs}function hm(i){return i*Ir}function dm(i){return(i&i-1)===0&&i!==0}function pm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mm(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),g=s((n-e)/2),v=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*v,l*g,a*c);break;case"YXY":i.set(l*g,a*u,l*v,a*c);break;case"ZYZ":i.set(l*v,l*g,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function it(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ec={DEG2RAD:hs,RAD2DEG:Ir,generateUUID:xn,clamp:Ct,euclideanModulo:Ql,mapLinear:em,inverseLerp:tm,lerp:ds,damp:nm,pingpong:im,smoothstep:rm,smootherstep:sm,randInt:om,randFloat:am,randFloatSpread:lm,seededRandom:cm,degToRad:um,radToDeg:hm,isPowerOfTwo:dm,ceilPowerOfTwo:pm,floorPowerOfTwo:fm,setQuaternionFromProperEuler:mm,normalize:it,denormalize:vn};class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],g=n[5],v=n[8],x=r[0],p=r[3],f=r[6],w=r[1],y=r[4],M=r[7],N=r[2],E=r[5],T=r[8];return s[0]=o*x+a*w+l*N,s[3]=o*p+a*y+l*E,s[6]=o*f+a*M+l*T,s[1]=c*x+u*w+h*N,s[4]=c*p+u*y+h*E,s[7]=c*f+u*M+h*T,s[2]=d*x+g*w+v*N,s[5]=d*p+g*y+v*E,s[8]=d*f+g*M+v*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,g=c*s-o*l,v=t*h+n*d+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=h*x,e[1]=(r*c-u*n)*x,e[2]=(a*n-r*o)*x,e[3]=d*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=g*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(sa.makeScale(e,t)),this}rotate(e){return this.premultiply(sa.makeRotation(-e)),this}translate(e,t){return this.premultiply(sa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sa=new We;function Ad(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gm(){const i=_s("canvas");return i.style.display="block",i}const nu={};function tc(i){i in nu||(nu[i]=!0,console.warn(i))}function _m(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const iu=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ru=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vs={[xt]:{transfer:Io,primaries:Do,toReference:i=>i,fromReference:i=>i},[Dt]:{transfer:at,primaries:Do,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[jo]:{transfer:Io,primaries:No,toReference:i=>i.applyMatrix3(ru),fromReference:i=>i.applyMatrix3(iu)},[Jl]:{transfer:at,primaries:No,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ru),fromReference:i=>i.applyMatrix3(iu).convertLinearToSRGB()}},vm=new Set([xt,jo]),Ze={enabled:!0,_workingColorSpace:xt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!vm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Vs[e].toReference,r=Vs[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Vs[i].primaries},getTransfer:function(i){return i===vi?Io:Vs[i].transfer}};function Mr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function oa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Qi;class bm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qi===void 0&&(Qi=_s("canvas")),Qi.width=e.width,Qi.height=e.height;const n=Qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_s("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Mr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mr(t[n]/255)*255):t[n]=Mr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xm=0;class Cd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=xn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(aa(r[o].image)):s.push(aa(r[o]))}else s=aa(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function aa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ym=0;class Rt extends ji{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=An,r=An,s=Pt,o=Cn,a=hn,l=Zn,c=Rt.DEFAULT_ANISOTROPY,u=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=xn(),this.name="",this.source=new Cd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pr:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case Lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pr:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case Lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=dd;Rt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],g=l[5],v=l[9],x=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(v+p)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,M=(g+1)/2,N=(f+1)/2,E=(u+d)/4,T=(h+x)/4,b=(v+p)/4;return y>M&&y>N?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=E/n,s=T/n):M>N?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=E/r,s=b/r):N<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),n=T/s,r=b/s),this.set(n,r,s,t),this}let w=Math.sqrt((p-v)*(p-v)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(p-v)/w,this.y=(h-x)/w,this.z=(d-u)/w,this.w=Math.acos((c+g+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wm extends ji{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Rt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Cd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends wm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Pd extends Rt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mm extends Rt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const d=s[o+0],g=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=g,e[t+2]=v,e[t+3]=x;return}if(h!==x||l!==d||c!==g||u!==v){let p=1-a;const f=l*d+c*g+u*v+h*x,w=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const N=Math.sqrt(y),E=Math.atan2(N,f*w);p=Math.sin(p*E)/N,a=Math.sin(a*E)/N}const M=a*w;if(l=l*p+d*M,c=c*p+g*M,u=u*p+v*M,h=h*p+x*M,p===1-a){const N=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=N,c*=N,u*=N,h*=N}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],d=s[o+1],g=s[o+2],v=s[o+3];return e[t]=a*v+u*h+l*g-c*d,e[t+1]=l*v+u*d+c*h-a*g,e[t+2]=c*v+u*g+a*d-l*h,e[t+3]=u*v-a*h-l*d-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),d=l(n/2),g=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*g*v,this._y=c*g*h-d*u*v,this._z=c*u*v+d*g*h,this._w=c*u*h-d*g*v;break;case"YXZ":this._x=d*u*h+c*g*v,this._y=c*g*h-d*u*v,this._z=c*u*v-d*g*h,this._w=c*u*h+d*g*v;break;case"ZXY":this._x=d*u*h-c*g*v,this._y=c*g*h+d*u*v,this._z=c*u*v+d*g*h,this._w=c*u*h-d*g*v;break;case"ZYX":this._x=d*u*h-c*g*v,this._y=c*g*h+d*u*v,this._z=c*u*v-d*g*h,this._w=c*u*h+d*g*v;break;case"YZX":this._x=d*u*h+c*g*v,this._y=c*g*h+d*u*v,this._z=c*u*v-d*g*h,this._w=c*u*h-d*g*v;break;case"XZY":this._x=d*u*h-c*g*v,this._y=c*g*h-d*u*v,this._z=c*u*v+d*g*h,this._w=c*u*h+d*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(n>a&&n>h){const g=2*Math.sqrt(1+n-a-h);this._w=(u-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>h){const g=2*Math.sqrt(1+a-n-h);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+h-n-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(su.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(su.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return la.copy(this).projectOnVector(e),this.sub(la)}reflect(e){return this.sub(la.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const la=new B,su=new wn;class ti{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fn):fn.fromBufferAttribute(s,o),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zs.copy(n.boundingBox)),zs.applyMatrix4(e.matrixWorld),this.union(zs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kr),Hs.subVectors(this.max,Kr),er.subVectors(e.a,Kr),tr.subVectors(e.b,Kr),nr.subVectors(e.c,Kr),oi.subVectors(tr,er),ai.subVectors(nr,tr),Si.subVectors(er,nr);let t=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Si.z,Si.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Si.z,0,-Si.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Si.y,Si.x,0];return!ca(t,er,tr,nr,Hs)||(t=[1,0,0,0,1,0,0,0,1],!ca(t,er,tr,nr,Hs))?!1:(Gs.crossVectors(oi,ai),t=[Gs.x,Gs.y,Gs.z],ca(t,er,tr,nr,Hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const On=[new B,new B,new B,new B,new B,new B,new B,new B],fn=new B,zs=new ti,er=new B,tr=new B,nr=new B,oi=new B,ai=new B,Si=new B,Kr=new B,Hs=new B,Gs=new B,Ti=new B;function ca(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ti.fromArray(i,s);const a=r.x*Math.abs(Ti.x)+r.y*Math.abs(Ti.y)+r.z*Math.abs(Ti.z),l=e.dot(Ti),c=t.dot(Ti),u=n.dot(Ti);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Em=new ti,Yr=new B,ua=new B;class Dn{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Em.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yr.subVectors(e,this.center);const t=Yr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Yr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yr.copy(e.center).add(ua)),this.expandByPoint(Yr.copy(e.center).sub(ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new B,ha=new B,Ws=new B,li=new B,da=new B,js=new B,pa=new B;class Es{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ha.copy(e).add(t).multiplyScalar(.5),Ws.copy(t).sub(e).normalize(),li.copy(this.origin).sub(ha);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ws),a=li.dot(this.direction),l=-li.dot(Ws),c=li.lengthSq(),u=Math.abs(1-o*o);let h,d,g,v;if(u>0)if(h=o*l-a,d=o*a-l,v=s*u,h>=0)if(d>=-v)if(d<=v){const x=1/u;h*=x,d*=x,g=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ha).addScaledVector(Ws,d),g}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const n=Fn.dot(this.direction),r=Fn.dot(Fn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,r,s){da.subVectors(t,e),js.subVectors(n,e),pa.crossVectors(da,js);let o=this.direction.dot(pa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,e);const l=a*this.direction.dot(js.crossVectors(li,js));if(l<0)return null;const c=a*this.direction.dot(da.cross(li));if(c<0||l+c>o)return null;const u=-a*li.dot(pa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,n,r,s,o,a,l,c,u,h,d,g,v,x,p){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,d,g,v,x,p)}set(e,t,n,r,s,o,a,l,c,u,h,d,g,v,x,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=g,f[7]=v,f[11]=x,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ir.setFromMatrixColumn(e,0).length(),s=1/ir.setFromMatrixColumn(e,1).length(),o=1/ir.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,g=o*h,v=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=g+v*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=v+g*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,g=l*h,v=c*u,x=c*h;t[0]=d+x*a,t[4]=v*a-g,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=g*a-v,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,g=l*h,v=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=v+g*a,t[1]=g+v*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,g=o*h,v=a*u,x=a*h;t[0]=l*u,t[4]=v*c-g,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=g*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,g=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=v*h+g,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=g*h+v,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,g=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=g*h-v,t[2]=v*h-g,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sm,e,Tm)}lookAt(e,t,n){const r=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),ci.crossVectors(n,en),ci.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ci.crossVectors(n,en)),ci.normalize(),Xs.crossVectors(en,ci),r[0]=ci.x,r[4]=Xs.x,r[8]=en.x,r[1]=ci.y,r[5]=Xs.y,r[9]=en.y,r[2]=ci.z,r[6]=Xs.z,r[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],g=n[13],v=n[2],x=n[6],p=n[10],f=n[14],w=n[3],y=n[7],M=n[11],N=n[15],E=r[0],T=r[4],b=r[8],_=r[12],m=r[1],A=r[5],I=r[9],F=r[13],V=r[2],H=r[6],O=r[10],j=r[14],q=r[3],se=r[7],te=r[11],fe=r[15];return s[0]=o*E+a*m+l*V+c*q,s[4]=o*T+a*A+l*H+c*se,s[8]=o*b+a*I+l*O+c*te,s[12]=o*_+a*F+l*j+c*fe,s[1]=u*E+h*m+d*V+g*q,s[5]=u*T+h*A+d*H+g*se,s[9]=u*b+h*I+d*O+g*te,s[13]=u*_+h*F+d*j+g*fe,s[2]=v*E+x*m+p*V+f*q,s[6]=v*T+x*A+p*H+f*se,s[10]=v*b+x*I+p*O+f*te,s[14]=v*_+x*F+p*j+f*fe,s[3]=w*E+y*m+M*V+N*q,s[7]=w*T+y*A+M*H+N*se,s[11]=w*b+y*I+M*O+N*te,s[15]=w*_+y*F+M*j+N*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],g=e[14],v=e[3],x=e[7],p=e[11],f=e[15];return v*(+s*l*h-r*c*h-s*a*d+n*c*d+r*a*g-n*l*g)+x*(+t*l*g-t*c*d+s*o*d-r*o*g+r*c*u-s*l*u)+p*(+t*c*h-t*a*g-s*o*h+n*o*g+s*a*u-n*c*u)+f*(-r*a*u-t*l*h+t*a*d+r*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],g=e[11],v=e[12],x=e[13],p=e[14],f=e[15],w=h*p*c-x*d*c+x*l*g-a*p*g-h*l*f+a*d*f,y=v*d*c-u*p*c-v*l*g+o*p*g+u*l*f-o*d*f,M=u*x*c-v*h*c+v*a*g-o*x*g-u*a*f+o*h*f,N=v*h*l-u*x*l-v*a*d+o*x*d+u*a*p-o*h*p,E=t*w+n*y+r*M+s*N;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=w*T,e[1]=(x*d*s-h*p*s-x*r*g+n*p*g+h*r*f-n*d*f)*T,e[2]=(a*p*s-x*l*s+x*r*c-n*p*c-a*r*f+n*l*f)*T,e[3]=(h*l*s-a*d*s-h*r*c+n*d*c+a*r*g-n*l*g)*T,e[4]=y*T,e[5]=(u*p*s-v*d*s+v*r*g-t*p*g-u*r*f+t*d*f)*T,e[6]=(v*l*s-o*p*s-v*r*c+t*p*c+o*r*f-t*l*f)*T,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*g+t*l*g)*T,e[8]=M*T,e[9]=(v*h*s-u*x*s-v*n*g+t*x*g+u*n*f-t*h*f)*T,e[10]=(o*x*s-v*a*s+v*n*c-t*x*c-o*n*f+t*a*f)*T,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*g-t*a*g)*T,e[12]=N*T,e[13]=(u*x*r-v*h*r+v*n*d-t*x*d-u*n*p+t*h*p)*T,e[14]=(v*a*r-o*x*r-v*n*l+t*x*l+o*n*p-t*a*p)*T,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,g=s*u,v=s*h,x=o*u,p=o*h,f=a*h,w=l*c,y=l*u,M=l*h,N=n.x,E=n.y,T=n.z;return r[0]=(1-(x+f))*N,r[1]=(g+M)*N,r[2]=(v-y)*N,r[3]=0,r[4]=(g-M)*E,r[5]=(1-(d+f))*E,r[6]=(p+w)*E,r[7]=0,r[8]=(v+y)*T,r[9]=(p-w)*T,r[10]=(1-(d+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ir.set(r[0],r[1],r[2]).length();const o=ir.set(r[4],r[5],r[6]).length(),a=ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],mn.copy(this);const c=1/s,u=1/o,h=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,t.setFromRotationMatrix(mn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Xn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let g,v;if(a===Xn)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Uo)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Xn){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-s),d=(t+e)*c,g=(n+r)*u;let v,x;if(a===Xn)v=(o+s)*h,x=-2*h;else if(a===Uo)v=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ir=new B,mn=new je,Sm=new B(0,0,0),Tm=new B(1,1,1),ci=new B,Xs=new B,en=new B,ou=new je,au=new wn;class Rn{constructor(e=0,t=0,n=0,r=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ou.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ou,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return au.setFromEuler(this),this.setFromQuaternion(au,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class Rd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Am=0;const lu=new B,rr=new wn,kn=new je,qs=new B,$r=new B,Cm=new B,Pm=new wn,cu=new B(1,0,0),uu=new B(0,1,0),hu=new B(0,0,1),du={type:"added"},Rm={type:"removed"},sr={type:"childadded",child:null},fa={type:"childremoved",child:null};class ct extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new B,t=new Rn,n=new wn,r=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new je},normalMatrix:{value:new We}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(cu,e)}rotateY(e){return this.rotateOnAxis(uu,e)}rotateZ(e){return this.rotateOnAxis(hu,e)}translateOnAxis(e,t){return lu.copy(e).applyQuaternion(this.quaternion),this.position.add(lu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cu,e)}translateY(e){return this.translateOnAxis(uu,e)}translateZ(e){return this.translateOnAxis(hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qs.copy(e):qs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt($r,qs,this.up):kn.lookAt(qs,$r,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),rr.setFromRotationMatrix(kn),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(du),sr.child=e,this.dispatchEvent(sr),sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rm),fa.child=e,this.dispatchEvent(fa),fa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(du),sr.child=e,this.dispatchEvent(sr),sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,Cm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,Pm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),g=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ct.DEFAULT_UP=new B(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new B,Bn=new B,ma=new B,Vn=new B,or=new B,ar=new B,pu=new B,ga=new B,_a=new B,va=new B;class Tn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),gn.subVectors(e,t),r.cross(gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){gn.subVectors(r,t),Bn.subVectors(n,t),ma.subVectors(e,t);const o=gn.dot(gn),a=gn.dot(Bn),l=gn.dot(ma),c=Bn.dot(Bn),u=Bn.dot(ma),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,g=(c*l-a*u)*d,v=(o*u-a*l)*d;return s.set(1-g-v,v,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vn.x),l.addScaledVector(o,Vn.y),l.addScaledVector(a,Vn.z),l)}static isFrontFacing(e,t,n,r){return gn.subVectors(n,t),Bn.subVectors(e,t),gn.cross(Bn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),gn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Tn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;or.subVectors(r,n),ar.subVectors(s,n),ga.subVectors(e,n);const l=or.dot(ga),c=ar.dot(ga);if(l<=0&&c<=0)return t.copy(n);_a.subVectors(e,r);const u=or.dot(_a),h=ar.dot(_a);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(or,o);va.subVectors(e,s);const g=or.dot(va),v=ar.dot(va);if(v>=0&&g<=v)return t.copy(s);const x=g*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(ar,a);const p=u*v-g*h;if(p<=0&&h-u>=0&&g-v>=0)return pu.subVectors(s,r),a=(h-u)/(h-u+(g-v)),t.copy(r).addScaledVector(pu,a);const f=1/(p+x+d);return o=x*f,a=d*f,t.copy(n).addScaledVector(or,o).addScaledVector(ar,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function ba(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ze.workingColorSpace){if(e=Ql(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ba(o,s,e+1/3),this.g=ba(o,s,e),this.b=ba(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=Dt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const n=Ld[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return Ze.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Ct(Ot.r*255,0,255))*65536+Math.round(Ct(Ot.g*255,0,255))*256+Math.round(Ct(Ot.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Ot.copy(this),t);const n=Ot.r,r=Ot.g,s=Ot.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Dt){Ze.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,r=Ot.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Ks);const n=ds(ui.h,Ks.h,t),r=ds(ui.s,Ks.s,t),s=ds(ui.l,Ks.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Ne;Ne.NAMES=Ld;let Lm=0;class yn extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=xn(),this.name="",this.type="Material",this.blending=yr,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ja,this.blendDst=Qa,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ja&&(n.blendSrc=this.blendSrc),this.blendDst!==Qa&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Po&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class ki extends yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jn=Im();function Im(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function Dm(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Ct(i,-65504,65504),jn.floatView[0]=i;const e=jn.uint32View[0],t=e>>23&511;return jn.baseTable[t]+((e&8388607)>>jn.shiftTable[t])}function Nm(i){const e=i>>10;return jn.uint32View[0]=jn.mantissaTable[jn.offsetTable[e]+(i&1023)]+jn.exponentTable[e],jn.floatView[0]}const Ys={toHalfFloat:Dm,fromHalfFloat:Nm},bt=new B,$s=new Pe;class Nt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return tc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$s.fromBufferAttribute(this,t),$s.applyMatrix3(e),this.setXY(t,$s.x,$s.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cl&&(e.usage=this.usage),e}}class Id extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Dd extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $t extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Um=0;const ln=new je,xa=new ct,lr=new B,tn=new ti,Zr=new ti,At=new B;class rn extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=xn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ad(e)?Dd:Id)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return xa.lookAt(e),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(tn.min,Zr.min),tn.expandByPoint(At),At.addVectors(tn.max,Zr.max),tn.expandByPoint(At)):(tn.expandByPoint(Zr.min),tn.expandByPoint(Zr.max))}tn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(At));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)At.fromBufferAttribute(a,c),l&&(lr.fromBufferAttribute(e,c),At.add(lr)),r=Math.max(r,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new B,l[b]=new B;const c=new B,u=new B,h=new B,d=new Pe,g=new Pe,v=new Pe,x=new B,p=new B;function f(b,_,m){c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,_),h.fromBufferAttribute(n,m),d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,_),v.fromBufferAttribute(s,m),u.sub(c),h.sub(c),g.sub(d),v.sub(d);const A=1/(g.x*v.y-v.x*g.y);isFinite(A)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(h,-g.y).multiplyScalar(A),p.copy(h).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(A),a[b].add(x),a[_].add(x),a[m].add(x),l[b].add(p),l[_].add(p),l[m].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let b=0,_=w.length;b<_;++b){const m=w[b],A=m.start,I=m.count;for(let F=A,V=A+I;F<V;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new B,M=new B,N=new B,E=new B;function T(b){N.fromBufferAttribute(r,b),E.copy(N);const _=a[b];y.copy(_),y.sub(N.multiplyScalar(N.dot(_))).normalize(),M.crossVectors(E,_);const A=M.dot(l[b])<0?-1:1;o.setXYZW(b,y.x,y.y,y.z,A)}for(let b=0,_=w.length;b<_;++b){const m=w[b],A=m.start,I=m.count;for(let F=A,V=A+I;F<V;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let d=0,g=e.count;d<g;d+=3){const v=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,g=t.count;d<g;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let g=0,v=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?g=l[x]*a.data.stride+a.offset:g=l[x]*u;for(let f=0;f<u;f++)d[v++]=c[g++]}return new Nt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],g=e(d,n);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const g=c[h];u.push(g.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,g=h.length;d<g;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fu=new je,Ai=new Es,Zs=new Dn,mu=new B,cr=new B,ur=new B,hr=new B,ya=new B,Js=new B,Qs=new Pe,eo=new Pe,to=new Pe,gu=new B,_u=new B,vu=new B,no=new B,io=new B;class zt extends ct{constructor(e=new rn,t=new ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Js.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(ya.fromBufferAttribute(h,e),o?Js.addScaledVector(ya,u):Js.addScaledVector(ya.sub(t),u))}t.add(Js)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(s),Ai.copy(e.ray).recast(e.near),!(Zs.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Zs,mu)===null||Ai.origin.distanceToSquared(mu)>(e.far-e.near)**2))&&(fu.copy(s).invert(),Ai.copy(e.ray).applyMatrix4(fu),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const p=d[v],f=o[p.materialIndex],w=Math.max(p.start,g.start),y=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let M=w,N=y;M<N;M+=3){const E=a.getX(M),T=a.getX(M+1),b=a.getX(M+2);r=ro(this,f,e,n,c,u,h,E,T,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),x=Math.min(a.count,g.start+g.count);for(let p=v,f=x;p<f;p+=3){const w=a.getX(p),y=a.getX(p+1),M=a.getX(p+2);r=ro(this,o,e,n,c,u,h,w,y,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const p=d[v],f=o[p.materialIndex],w=Math.max(p.start,g.start),y=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let M=w,N=y;M<N;M+=3){const E=M,T=M+1,b=M+2;r=ro(this,f,e,n,c,u,h,E,T,b),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let p=v,f=x;p<f;p+=3){const w=p,y=p+1,M=p+2;r=ro(this,o,e,n,c,u,h,w,y,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Om(i,e,t,n,r,s,o,a){let l;if(e.side===Yt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===$n,a),l===null)return null;io.copy(a),io.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(io);return c<t.near||c>t.far?null:{distance:c,point:io.clone(),object:i}}function ro(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,cr),i.getVertexPosition(l,ur),i.getVertexPosition(c,hr);const u=Om(i,e,t,n,cr,ur,hr,no);if(u){r&&(Qs.fromBufferAttribute(r,a),eo.fromBufferAttribute(r,l),to.fromBufferAttribute(r,c),u.uv=Tn.getInterpolation(no,cr,ur,hr,Qs,eo,to,new Pe)),s&&(Qs.fromBufferAttribute(s,a),eo.fromBufferAttribute(s,l),to.fromBufferAttribute(s,c),u.uv1=Tn.getInterpolation(no,cr,ur,hr,Qs,eo,to,new Pe)),o&&(gu.fromBufferAttribute(o,a),_u.fromBufferAttribute(o,l),vu.fromBufferAttribute(o,c),u.normal=Tn.getInterpolation(no,cr,ur,hr,gu,_u,vu,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new B,materialIndex:0};Tn.getNormal(cr,ur,hr,h.normal),u.face=h}return u}class Ss extends rn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,g=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,r,o,2),v("x","z","y",1,-1,e,n,-t,r,o,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(h,2));function v(x,p,f,w,y,M,N,E,T,b,_){const m=M/T,A=N/b,I=M/2,F=N/2,V=E/2,H=T+1,O=b+1;let j=0,q=0;const se=new B;for(let te=0;te<O;te++){const fe=te*A-F;for(let Le=0;Le<H;Le++){const Ue=Le*m-I;se[x]=Ue*w,se[p]=fe*y,se[f]=V,c.push(se.x,se.y,se.z),se[x]=0,se[p]=0,se[f]=E>0?1:-1,u.push(se.x,se.y,se.z),h.push(Le/T),h.push(1-te/b),j+=1}}for(let te=0;te<b;te++)for(let fe=0;fe<T;fe++){const Le=d+fe+H*te,Ue=d+fe+H*(te+1),J=d+(fe+1)+H*(te+1),le=d+(fe+1)+H*te;l.push(Le,Ue,le),l.push(Ue,J,le),q+=6}a.addGroup(g,q,_),g+=q,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Dr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function kt(i){const e={};for(let t=0;t<i.length;t++){const n=Dr(i[t]);for(const r in n)e[r]=n[r]}return e}function Fm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Ts={clone:Dr,merge:kt};var km=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=km,this.fragmentShader=Bm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=Fm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let Ud=class extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const hi=new B,bu=new Pe,xu=new Pe;class Bt extends Ud{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,bu,xu),t.subVectors(xu,bu)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const dr=-90,pr=1;class Vm extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bt(dr,pr,e,t);r.layers=this.layers,this.add(r);const s=new Bt(dr,pr,e,t);s.layers=this.layers,this.add(s);const o=new Bt(dr,pr,e,t);o.layers=this.layers,this.add(o);const a=new Bt(dr,pr,e,t);a.layers=this.layers,this.add(a);const l=new Bt(dr,pr,e,t);l.layers=this.layers,this.add(l);const c=new Bt(dr,pr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,g),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Od extends Rt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ar,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zm extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Od(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ss(5,5,5),s=new nn({name:"CubemapFromEquirect",uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:Kn});s.uniforms.tEquirect.value=t;const o=new zt(r,s),a=t.minFilter;return t.minFilter===Cn&&(t.minFilter=Pt),new Vm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const wa=new B,Hm=new B,Gm=new We;class _i{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=wa.subVectors(n,t).cross(Hm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(wa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Gm.getNormalMatrix(e),r=this.coplanarPoint(wa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Dn,so=new B;class nc{constructor(e=new _i,t=new _i,n=new _i,r=new _i,s=new _i,o=new _i){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],g=r[8],v=r[9],x=r[10],p=r[11],f=r[12],w=r[13],y=r[14],M=r[15];if(n[0].setComponents(l-s,d-c,p-g,M-f).normalize(),n[1].setComponents(l+s,d+c,p+g,M+f).normalize(),n[2].setComponents(l+o,d+u,p+v,M+w).normalize(),n[3].setComponents(l-o,d-u,p-v,M-w).normalize(),n[4].setComponents(l-a,d-h,p-x,M-y).normalize(),t===Xn)n[5].setComponents(l+a,d+h,p+x,M+y).normalize();else if(t===Uo)n[5].setComponents(a,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(so.x=r.normal.x>0?e.max.x:e.min.x,so.y=r.normal.y>0?e.max.y:e.min.y,so.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(so)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fd(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Wm(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,a),h.count===-1&&d.length===0&&i.bufferSubData(c,0,u),d.length!==0){for(let g=0,v=d.length;g<v;g++){const x=d[g];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Xo extends rn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,g=[],v=[],x=[],p=[];for(let f=0;f<u;f++){const w=f*d-o;for(let y=0;y<c;y++){const M=y*h-s;v.push(M,-w,0),x.push(0,0,1),p.push(y/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<a;w++){const y=w+c*f,M=w+c*(f+1),N=w+1+c*(f+1),E=w+1+c*f;g.push(y,M,E),g.push(M,N,E)}this.setIndex(g),this.setAttribute("position",new $t(v,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.widthSegments,e.heightSegments)}}var jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,eg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ng=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ig=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rg=`#ifdef USE_IRIDESCENCE
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
#endif`,sg=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fg=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,mg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,gg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_g=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",wg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Mg=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Eg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ag=`#ifdef USE_ENVMAP
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
#endif`,Cg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ig=`#ifdef USE_GRADIENTMAP
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
}`,Dg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ng=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ug=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Og=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Fg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,kg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Wg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e_=`#if defined( USE_POINTS_UV )
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
#endif`,t_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,a_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,c_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,u_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p_=`#ifdef USE_NORMALMAP
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
#endif`,f_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,__=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,x_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,A_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,C_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,P_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,R_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,I_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D_=`#ifdef USE_SKINNING
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
#endif`,N_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F_=`#ifndef saturate
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,k_=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,B_=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,V_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Z_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,J_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Q_=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nv=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iv=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rv=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,sv=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ov=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,av=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,cv=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,hv=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,pv=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,mv=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,_v=`#define TOON
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vv=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,bv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,yv=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wv=`uniform float rotation;
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
}`,Mv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:jm,alphahash_pars_fragment:Xm,alphamap_fragment:qm,alphamap_pars_fragment:Km,alphatest_fragment:Ym,alphatest_pars_fragment:$m,aomap_fragment:Zm,aomap_pars_fragment:Jm,batching_pars_vertex:Qm,batching_vertex:eg,begin_vertex:tg,beginnormal_vertex:ng,bsdfs:ig,iridescence_fragment:rg,bumpmap_pars_fragment:sg,clipping_planes_fragment:og,clipping_planes_pars_fragment:ag,clipping_planes_pars_vertex:lg,clipping_planes_vertex:cg,color_fragment:ug,color_pars_fragment:hg,color_pars_vertex:dg,color_vertex:pg,common:fg,cube_uv_reflection_fragment:mg,defaultnormal_vertex:gg,displacementmap_pars_vertex:_g,displacementmap_vertex:vg,emissivemap_fragment:bg,emissivemap_pars_fragment:xg,colorspace_fragment:yg,colorspace_pars_fragment:wg,envmap_fragment:Mg,envmap_common_pars_fragment:Eg,envmap_pars_fragment:Sg,envmap_pars_vertex:Tg,envmap_physical_pars_fragment:Fg,envmap_vertex:Ag,fog_vertex:Cg,fog_pars_vertex:Pg,fog_fragment:Rg,fog_pars_fragment:Lg,gradientmap_pars_fragment:Ig,lightmap_pars_fragment:Dg,lights_lambert_fragment:Ng,lights_lambert_pars_fragment:Ug,lights_pars_begin:Og,lights_toon_fragment:kg,lights_toon_pars_fragment:Bg,lights_phong_fragment:Vg,lights_phong_pars_fragment:zg,lights_physical_fragment:Hg,lights_physical_pars_fragment:Gg,lights_fragment_begin:Wg,lights_fragment_maps:jg,lights_fragment_end:Xg,logdepthbuf_fragment:qg,logdepthbuf_pars_fragment:Kg,logdepthbuf_pars_vertex:Yg,logdepthbuf_vertex:$g,map_fragment:Zg,map_pars_fragment:Jg,map_particle_fragment:Qg,map_particle_pars_fragment:e_,metalnessmap_fragment:t_,metalnessmap_pars_fragment:n_,morphinstance_vertex:i_,morphcolor_vertex:r_,morphnormal_vertex:s_,morphtarget_pars_vertex:o_,morphtarget_vertex:a_,normal_fragment_begin:l_,normal_fragment_maps:c_,normal_pars_fragment:u_,normal_pars_vertex:h_,normal_vertex:d_,normalmap_pars_fragment:p_,clearcoat_normal_fragment_begin:f_,clearcoat_normal_fragment_maps:m_,clearcoat_pars_fragment:g_,iridescence_pars_fragment:__,opaque_fragment:v_,packing:b_,premultiplied_alpha_fragment:x_,project_vertex:y_,dithering_fragment:w_,dithering_pars_fragment:M_,roughnessmap_fragment:E_,roughnessmap_pars_fragment:S_,shadowmap_pars_fragment:T_,shadowmap_pars_vertex:A_,shadowmap_vertex:C_,shadowmask_pars_fragment:P_,skinbase_vertex:R_,skinning_pars_vertex:L_,skinning_vertex:I_,skinnormal_vertex:D_,specularmap_fragment:N_,specularmap_pars_fragment:U_,tonemapping_fragment:O_,tonemapping_pars_fragment:F_,transmission_fragment:k_,transmission_pars_fragment:B_,uv_pars_fragment:V_,uv_pars_vertex:z_,uv_vertex:H_,worldpos_vertex:G_,background_vert:W_,background_frag:j_,backgroundCube_vert:X_,backgroundCube_frag:q_,cube_vert:K_,cube_frag:Y_,depth_vert:$_,depth_frag:Z_,distanceRGBA_vert:J_,distanceRGBA_frag:Q_,equirect_vert:ev,equirect_frag:tv,linedashed_vert:nv,linedashed_frag:iv,meshbasic_vert:rv,meshbasic_frag:sv,meshlambert_vert:ov,meshlambert_frag:av,meshmatcap_vert:lv,meshmatcap_frag:cv,meshnormal_vert:uv,meshnormal_frag:hv,meshphong_vert:dv,meshphong_frag:pv,meshphysical_vert:fv,meshphysical_frag:mv,meshtoon_vert:gv,meshtoon_frag:_v,points_vert:vv,points_frag:bv,shadow_vert:xv,shadow_frag:yv,sprite_vert:wv,sprite_frag:Mv},pe={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},En={basic:{uniforms:kt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:kt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:kt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:kt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:kt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:kt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:kt([pe.points,pe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:kt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:kt([pe.common,pe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:kt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:kt([pe.sprite,pe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:kt([pe.common,pe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:kt([pe.lights,pe.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};En.physical={uniforms:kt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const oo={r:0,b:0,g:0},Pi=new Rn,Ev=new je;function Sv(i,e,t,n,r,s,o){const a=new Ne(0);let l=s===!0?0:1,c,u,h=null,d=0,g=null;function v(w){let y=w.isScene===!0?w.background:null;return y&&y.isTexture&&(y=(w.backgroundBlurriness>0?t:e).get(y)),y}function x(w){let y=!1;const M=v(w);M===null?f(a,l):M&&M.isColor&&(f(M,1),y=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(w,y){const M=v(y);M&&(M.isCubeTexture||M.mapping===Wo)?(u===void 0&&(u=new zt(new Ss(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:Dr(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Pi.copy(y.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(Pi)),u.material.toneMapped=Ze.getTransfer(M.colorSpace)!==at,(h!==M||d!==M.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,g=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new zt(new Xo(2,2),new nn({name:"BackgroundMaterial",uniforms:Dr(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(M.colorSpace)!==at,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,g=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function f(w,y){w.getRGB(oo,Nd(i)),n.buffers.color.setClear(oo.r,oo.g,oo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(w,y=1){a.set(w),l=y,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,f(a,l)},render:x,addToRenderList:p}}function Tv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(m,A,I,F,V){let H=!1;const O=h(F,I,A);s!==O&&(s=O,c(s.object)),H=g(m,F,I,V),H&&v(m,F,I,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,M(m,A,I,F),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(m){return i.bindVertexArray(m)}function u(m){return i.deleteVertexArray(m)}function h(m,A,I){const F=I.wireframe===!0;let V=n[m.id];V===void 0&&(V={},n[m.id]=V);let H=V[A.id];H===void 0&&(H={},V[A.id]=H);let O=H[F];return O===void 0&&(O=d(l()),H[F]=O),O}function d(m){const A=[],I=[],F=[];for(let V=0;V<t;V++)A[V]=0,I[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:I,attributeDivisors:F,object:m,attributes:{},index:null}}function g(m,A,I,F){const V=s.attributes,H=A.attributes;let O=0;const j=I.getAttributes();for(const q in j)if(j[q].location>=0){const te=V[q];let fe=H[q];if(fe===void 0&&(q==="instanceMatrix"&&m.instanceMatrix&&(fe=m.instanceMatrix),q==="instanceColor"&&m.instanceColor&&(fe=m.instanceColor)),te===void 0||te.attribute!==fe||fe&&te.data!==fe.data)return!0;O++}return s.attributesNum!==O||s.index!==F}function v(m,A,I,F){const V={},H=A.attributes;let O=0;const j=I.getAttributes();for(const q in j)if(j[q].location>=0){let te=H[q];te===void 0&&(q==="instanceMatrix"&&m.instanceMatrix&&(te=m.instanceMatrix),q==="instanceColor"&&m.instanceColor&&(te=m.instanceColor));const fe={};fe.attribute=te,te&&te.data&&(fe.data=te.data),V[q]=fe,O++}s.attributes=V,s.attributesNum=O,s.index=F}function x(){const m=s.newAttributes;for(let A=0,I=m.length;A<I;A++)m[A]=0}function p(m){f(m,0)}function f(m,A){const I=s.newAttributes,F=s.enabledAttributes,V=s.attributeDivisors;I[m]=1,F[m]===0&&(i.enableVertexAttribArray(m),F[m]=1),V[m]!==A&&(i.vertexAttribDivisor(m,A),V[m]=A)}function w(){const m=s.newAttributes,A=s.enabledAttributes;for(let I=0,F=A.length;I<F;I++)A[I]!==m[I]&&(i.disableVertexAttribArray(I),A[I]=0)}function y(m,A,I,F,V,H,O){O===!0?i.vertexAttribIPointer(m,A,I,V,H):i.vertexAttribPointer(m,A,I,F,V,H)}function M(m,A,I,F){x();const V=F.attributes,H=I.getAttributes(),O=A.defaultAttributeValues;for(const j in H){const q=H[j];if(q.location>=0){let se=V[j];if(se===void 0&&(j==="instanceMatrix"&&m.instanceMatrix&&(se=m.instanceMatrix),j==="instanceColor"&&m.instanceColor&&(se=m.instanceColor)),se!==void 0){const te=se.normalized,fe=se.itemSize,Le=e.get(se);if(Le===void 0)continue;const Ue=Le.buffer,J=Le.type,le=Le.bytesPerElement,be=J===i.INT||J===i.UNSIGNED_INT||se.gpuType===jl;if(se.isInterleavedBufferAttribute){const me=se.data,Q=me.stride,P=se.offset;if(me.isInstancedInterleavedBuffer){for(let D=0;D<q.locationSize;D++)f(q.location+D,me.meshPerAttribute);m.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let D=0;D<q.locationSize;D++)p(q.location+D);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let D=0;D<q.locationSize;D++)y(q.location+D,fe/q.locationSize,J,te,Q*le,(P+fe/q.locationSize*D)*le,be)}else{if(se.isInstancedBufferAttribute){for(let me=0;me<q.locationSize;me++)f(q.location+me,se.meshPerAttribute);m.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let me=0;me<q.locationSize;me++)p(q.location+me);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let me=0;me<q.locationSize;me++)y(q.location+me,fe/q.locationSize,J,te,fe*le,fe/q.locationSize*me*le,be)}}else if(O!==void 0){const te=O[j];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(q.location,te);break;case 3:i.vertexAttrib3fv(q.location,te);break;case 4:i.vertexAttrib4fv(q.location,te);break;default:i.vertexAttrib1fv(q.location,te)}}}}w()}function N(){b();for(const m in n){const A=n[m];for(const I in A){const F=A[I];for(const V in F)u(F[V].object),delete F[V];delete A[I]}delete n[m]}}function E(m){if(n[m.id]===void 0)return;const A=n[m.id];for(const I in A){const F=A[I];for(const V in F)u(F[V].object),delete F[V];delete A[I]}delete n[m.id]}function T(m){for(const A in n){const I=n[A];if(I[m.id]===void 0)continue;const F=I[m.id];for(const V in F)u(F[V].object),delete F[V];delete I[m.id]}}function b(){_(),o=!0,s!==r&&(s=r,c(s.object))}function _(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:_,dispose:N,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:p,disableUnusedAttributes:w}}function Av(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v];t.update(g,n,1)}function l(c,u,h,d){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{g.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let v=0;for(let x=0;x<h;x++)v+=u[x];for(let x=0;x<d.length;x++)t.update(v,n,d[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Cv(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==hn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const T=E===bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Zn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==qt&&!T)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:f,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:M,maxSamples:N}}function Pv(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new _i,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const g=h.length!==0||d||n!==0||r;return r=d,n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,g){const v=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!r||v===null||v.length===0||s&&!p)s?u(null):c();else{const w=s?0:n,y=w*4;let M=f.clippingState||null;l.value=M,M=u(v,d,y,g);for(let N=0;N!==y;++N)M[N]=t[N];f.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,g,v){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=l.value,v!==!0||p===null){const f=g+x*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<f)&&(p=new Float32Array(f));for(let y=0,M=g;y!==x;++y,M+=4)o.copy(h[y]).applyMatrix4(w,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function Rv(i){let e=new WeakMap;function t(o,a){return a===Ro?o.mapping=Ar:a===el&&(o.mapping=Cr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ro||a===el)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zm(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class qo extends Ud{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xr=4,yu=[.125,.215,.35,.446,.526,.582],Fi=20,Ma=new qo,wu=new Ne;let Ea=null,Sa=0,Ta=0,Aa=!1;const Ui=(1+Math.sqrt(5))/2,fr=1/Ui,Mu=[new B(-Ui,fr,0),new B(Ui,fr,0),new B(-fr,0,Ui),new B(fr,0,Ui),new B(0,Ui,-fr),new B(0,Ui,fr),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class Eu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ea=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ea,Sa,Ta),this._renderer.xr.enabled=Aa,e.scissorTest=!1,ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ar||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ea=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:bn,format:hn,colorSpace:xt,depthBuffer:!1},r=Su(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Su(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lv(s)),this._blurMaterial=Iv(s,e,t)}return r}_compileMaterial(e){const t=new zt(this._lodPlanes[0],e);this._renderer.compile(t,Ma)}_sceneToCubeUV(e,t,n,r){const a=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(wu),u.toneMapping=yi,u.autoClear=!1;const g=new ki({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),v=new zt(new Ss,g);let x=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,x=!0):(g.color.copy(wu),x=!0);for(let f=0;f<6;f++){const w=f%3;w===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):w===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const y=this._cubeSize;ao(r,w*y,f>2?y:0,y,y),u.setRenderTarget(r),x&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ar||e.mapping===Cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new zt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ao(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ma)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Mu[(r-s-1)%Mu.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new zt(this._lodPlanes[r],c),d=c.uniforms,g=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Fi-1),x=s/v,p=isFinite(s)?1+Math.floor(u*x):Fi;p>Fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fi}`);const f=[];let w=0;for(let T=0;T<Fi;++T){const b=T/x,_=Math.exp(-b*b/2);f.push(_),T===0?w+=_:T<p&&(w+=2*_)}for(let T=0;T<f.length;T++)f[T]=f[T]/w;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=v,d.mipInt.value=y-n;const M=this._sizeLods[r],N=3*M*(r>y-xr?r-y+xr:0),E=4*(this._cubeSize-M);ao(t,N,E,3*M,2*M),l.setRenderTarget(t),l.render(h,Ma)}}function Lv(i){const e=[],t=[],n=[];let r=i;const s=i-xr+1+yu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-xr?l=yu[o-i+xr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],g=6,v=6,x=3,p=2,f=1,w=new Float32Array(x*v*g),y=new Float32Array(p*v*g),M=new Float32Array(f*v*g);for(let E=0;E<g;E++){const T=E%3*2/3-1,b=E>2?0:-1,_=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];w.set(_,x*v*E),y.set(d,p*v*E);const m=[E,E,E,E,E,E];M.set(m,f*v*E)}const N=new rn;N.setAttribute("position",new Nt(w,x)),N.setAttribute("uv",new Nt(y,p)),N.setAttribute("faceIndex",new Nt(M,f)),e.push(N),r>xr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Su(i,e,t){const n=new Jn(i,e,t);return n.texture.mapping=Wo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ao(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Iv(i,e,t){const n=new Float32Array(Fi),r=new B(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ic(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Tu(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Au(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function ic(){return`

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
	`}function Dv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ro||l===el,u=l===Ar||l===Cr;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Eu(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const g=a.image;return c&&g&&g.height>0||u&&g&&r(g)?(t===null&&(t=new Eu(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Nv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&tc("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Uv(i,e,t,n){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let p=0,f=x.length;p<f;p++)e.remove(x[p])}d.removeEventListener("dispose",o),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)e.update(d[v],i.ARRAY_BUFFER);const g=h.morphAttributes;for(const v in g){const x=g[v];for(let p=0,f=x.length;p<f;p++)e.update(x[p],i.ARRAY_BUFFER)}}function c(h){const d=[],g=h.index,v=h.attributes.position;let x=0;if(g!==null){const w=g.array;x=g.version;for(let y=0,M=w.length;y<M;y+=3){const N=w[y+0],E=w[y+1],T=w[y+2];d.push(N,E,E,T,T,N)}}else if(v!==void 0){const w=v.array;x=v.version;for(let y=0,M=w.length/3-1;y<M;y+=3){const N=y+0,E=y+1,T=y+2;d.push(N,E,E,T,T,N)}}else return;const p=new(Ad(d)?Dd:Id)(d,1);p.version=x;const f=s.get(h);f&&e.remove(f),s.set(h,p)}function u(h){const d=s.get(h);if(d){const g=h.index;g!==null&&d.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Ov(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,g){i.drawElements(n,g,s,d*o),t.update(g,n,1)}function c(d,g,v){v!==0&&(i.drawElementsInstanced(n,g,s,d*o,v),t.update(g,n,v))}function u(d,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,d,0,v);let p=0;for(let f=0;f<v;f++)p+=g[f];t.update(p,n,1)}function h(d,g,v,x){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/o,g[f],x[f]);else{p.multiDrawElementsInstancedWEBGL(n,g,0,s,d,0,x,0,v);let f=0;for(let w=0;w<v;w++)f+=g[w];for(let w=0;w<x.length;w++)t.update(f,n,x[w])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Fv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function kv(i,e,t){const n=new WeakMap,r=new ot;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let m=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",m)};var g=m;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;v===!0&&(M=1),x===!0&&(M=2),p===!0&&(M=3);let N=a.attributes.position.count*M,E=1;N>e.maxTextureSize&&(E=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const T=new Float32Array(N*E*4*h),b=new Pd(T,N,E,h);b.type=qt,b.needsUpdate=!0;const _=M*4;for(let A=0;A<h;A++){const I=f[A],F=w[A],V=y[A],H=N*E*4*A;for(let O=0;O<I.count;O++){const j=O*_;v===!0&&(r.fromBufferAttribute(I,O),T[H+j+0]=r.x,T[H+j+1]=r.y,T[H+j+2]=r.z,T[H+j+3]=0),x===!0&&(r.fromBufferAttribute(F,O),T[H+j+4]=r.x,T[H+j+5]=r.y,T[H+j+6]=r.z,T[H+j+7]=0),p===!0&&(r.fromBufferAttribute(V,O),T[H+j+8]=r.x,T[H+j+9]=r.y,T[H+j+10]=r.z,T[H+j+11]=V.itemSize===4?r.w:1)}}d={count:h,texture:b,size:new Pe(N,E)},n.set(a,d),a.addEventListener("dispose",m)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Bv(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class kd extends Rt{constructor(e,t,n,r,s,o,a,l,c,u=wr){if(u!==wr&&u!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===wr&&(n=zi),n===void 0&&u===Lr&&(n=Rr),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Bd=new Rt,Cu=new kd(1,1),Vd=new Pd,zd=new Mm,Hd=new Od,Pu=[],Ru=[],Lu=new Float32Array(16),Iu=new Float32Array(9),Du=new Float32Array(4);function Br(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Pu[r];if(s===void 0&&(s=new Float32Array(r),Pu[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function St(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ko(i,e){let t=Ru[e];t===void 0&&(t=new Int32Array(e),Ru[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function zv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function Hv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function Gv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function Wv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(St(t,n))return;Du.set(n),i.uniformMatrix2fv(this.addr,!1,Du),Tt(t,n)}}function jv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(St(t,n))return;Iu.set(n),i.uniformMatrix3fv(this.addr,!1,Iu),Tt(t,n)}}function Xv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(St(t,n))return;Lu.set(n),i.uniformMatrix4fv(this.addr,!1,Lu),Tt(t,n)}}function qv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Kv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function Yv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function $v(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function Zv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Jv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function Qv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function e0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function t0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Cu.compareFunction=Td,s=Cu):s=Bd,t.setTexture2D(e||s,r)}function n0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||zd,r)}function i0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Hd,r)}function r0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Vd,r)}function s0(i){switch(i){case 5126:return Vv;case 35664:return zv;case 35665:return Hv;case 35666:return Gv;case 35674:return Wv;case 35675:return jv;case 35676:return Xv;case 5124:case 35670:return qv;case 35667:case 35671:return Kv;case 35668:case 35672:return Yv;case 35669:case 35673:return $v;case 5125:return Zv;case 36294:return Jv;case 36295:return Qv;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return r0}}function o0(i,e){i.uniform1fv(this.addr,e)}function a0(i,e){const t=Br(e,this.size,2);i.uniform2fv(this.addr,t)}function l0(i,e){const t=Br(e,this.size,3);i.uniform3fv(this.addr,t)}function c0(i,e){const t=Br(e,this.size,4);i.uniform4fv(this.addr,t)}function u0(i,e){const t=Br(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function h0(i,e){const t=Br(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function d0(i,e){const t=Br(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function p0(i,e){i.uniform1iv(this.addr,e)}function f0(i,e){i.uniform2iv(this.addr,e)}function m0(i,e){i.uniform3iv(this.addr,e)}function g0(i,e){i.uniform4iv(this.addr,e)}function _0(i,e){i.uniform1uiv(this.addr,e)}function v0(i,e){i.uniform2uiv(this.addr,e)}function b0(i,e){i.uniform3uiv(this.addr,e)}function x0(i,e){i.uniform4uiv(this.addr,e)}function y0(i,e,t){const n=this.cache,r=e.length,s=Ko(t,r);St(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Bd,s[o])}function w0(i,e,t){const n=this.cache,r=e.length,s=Ko(t,r);St(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||zd,s[o])}function M0(i,e,t){const n=this.cache,r=e.length,s=Ko(t,r);St(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Hd,s[o])}function E0(i,e,t){const n=this.cache,r=e.length,s=Ko(t,r);St(n,s)||(i.uniform1iv(this.addr,s),Tt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Vd,s[o])}function S0(i){switch(i){case 5126:return o0;case 35664:return a0;case 35665:return l0;case 35666:return c0;case 35674:return u0;case 35675:return h0;case 35676:return d0;case 5124:case 35670:return p0;case 35667:case 35671:return f0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return _0;case 36294:return v0;case 36295:return b0;case 36296:return x0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return E0}}class T0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=s0(t.type)}}class A0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=S0(t.type)}}class C0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Ca=/(\w+)(\])?(\[|\.)?/g;function Nu(i,e){i.seq.push(e),i.map[e.id]=e}function P0(i,e,t){const n=i.name,r=n.length;for(Ca.lastIndex=0;;){const s=Ca.exec(n),o=Ca.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Nu(t,c===void 0?new T0(a,i,e):new A0(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new C0(a),Nu(t,h)),t=h}}}class To{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);P0(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Uu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const R0=37297;let L0=0;function I0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function D0(i){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(i);let n;switch(e===t?n="":e===No&&t===Do?n="LinearDisplayP3ToLinearSRGB":e===Do&&t===No&&(n="LinearSRGBToLinearDisplayP3"),i){case xt:case jo:return[n,"LinearTransferOETF"];case Dt:case Jl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ou(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+I0(i.getShaderSource(e),o)}else return r}function N0(i,e){const t=D0(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function U0(i,e){let t;switch(e){case ad:t="Linear";break;case ld:t="Reinhard";break;case cd:t="OptimizedCineon";break;case Wl:t="ACESFilmic";break;case ud:t="AgX";break;case hd:t="Neutral";break;case zf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function O0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(us).join(`
`)}function F0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function k0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function us(i){return i!==""}function Fu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ku(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const B0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pl(i){return i.replace(B0,z0)}const V0=new Map;function z0(i,e){let t=Ge[e];if(t===void 0){const n=V0.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Pl(t)}const H0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bu(i){return i.replace(H0,G0)}function G0(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function W0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===sd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gn&&(e="SHADOWMAP_TYPE_VSM"),e}function j0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ar:case Cr:e="ENVMAP_TYPE_CUBE";break;case Wo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function X0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Cr:e="ENVMAP_MODE_REFRACTION";break}return e}function q0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case od:e="ENVMAP_BLENDING_MULTIPLY";break;case Bf:e="ENVMAP_BLENDING_MIX";break;case Vf:e="ENVMAP_BLENDING_ADD";break}return e}function K0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Y0(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=W0(t),c=j0(t),u=X0(t),h=q0(t),d=K0(t),g=O0(t),v=F0(s),x=r.createProgram();let p,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(us).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(us).join(`
`),f.length>0&&(f+=`
`)):(p=[Vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),f=[Vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==yi?U0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,N0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(us).join(`
`)),o=Pl(o),o=Fu(o,t),o=ku(o,t),a=Pl(a),a=Fu(a,t),a=ku(a,t),o=Bu(o),a=Bu(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=w+p+o,M=w+f+a,N=Uu(r,r.VERTEX_SHADER,y),E=Uu(r,r.FRAGMENT_SHADER,M);r.attachShader(x,N),r.attachShader(x,E),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(A){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(x).trim(),F=r.getShaderInfoLog(N).trim(),V=r.getShaderInfoLog(E).trim();let H=!0,O=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,N,E);else{const j=Ou(r,N,"vertex"),q=Ou(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+j+`
`+q)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(F===""||V==="")&&(O=!1);O&&(A.diagnostics={runnable:H,programLog:I,vertexShader:{log:F,prefix:p},fragmentShader:{log:V,prefix:f}})}r.deleteShader(N),r.deleteShader(E),b=new To(r,x),_=k0(r,x)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let _;this.getAttributes=function(){return _===void 0&&T(this),_};let m=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return m===!1&&(m=r.getProgramParameter(x,R0)),m},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=L0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=N,this.fragmentShader=E,this}let $0=0;class Z0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new J0(e),t.set(e,n)),n}}class J0{constructor(e){this.id=$0++,this.code=e,this.usedTimes=0}}function Q0(i,e,t,n,r,s,o){const a=new Rd,l=new Z0,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function p(_,m,A,I,F){const V=I.fog,H=F.geometry,O=_.isMeshStandardMaterial?I.environment:null,j=(_.isMeshStandardMaterial?t:e).get(_.envMap||O),q=j&&j.mapping===Wo?j.image.height:null,se=v[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const te=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,fe=te!==void 0?te.length:0;let Le=0;H.morphAttributes.position!==void 0&&(Le=1),H.morphAttributes.normal!==void 0&&(Le=2),H.morphAttributes.color!==void 0&&(Le=3);let Ue,J,le,be;if(se){const Ye=En[se];Ue=Ye.vertexShader,J=Ye.fragmentShader}else Ue=_.vertexShader,J=_.fragmentShader,l.update(_),le=l.getVertexShaderID(_),be=l.getFragmentShaderID(_);const me=i.getRenderTarget(),Q=F.isInstancedMesh===!0,P=F.isBatchedMesh===!0,D=!!_.map,k=!!_.matcap,L=!!j,ee=!!_.aoMap,ne=!!_.lightMap,xe=!!_.bumpMap,he=!!_.normalMap,He=!!_.displacementMap,Se=!!_.emissiveMap,Ee=!!_.metalnessMap,U=!!_.roughnessMap,C=_.anisotropy>0,W=_.clearcoat>0,ie=_.dispersion>0,oe=_.iridescence>0,re=_.sheen>0,Ce=_.transmission>0,de=C&&!!_.anisotropyMap,_e=W&&!!_.clearcoatMap,ze=W&&!!_.clearcoatNormalMap,ce=W&&!!_.clearcoatRoughnessMap,ve=oe&&!!_.iridescenceMap,Ke=oe&&!!_.iridescenceThicknessMap,Ie=re&&!!_.sheenColorMap,ye=re&&!!_.sheenRoughnessMap,Oe=!!_.specularMap,Ve=!!_.specularColorMap,ut=!!_.specularIntensityMap,S=Ce&&!!_.transmissionMap,X=Ce&&!!_.thicknessMap,K=!!_.gradientMap,Z=!!_.alphaMap,ae=_.alphaTest>0,Te=!!_.alphaHash,Fe=!!_.extensions;let gt=yi;_.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(gt=i.toneMapping);const wt={shaderID:se,shaderType:_.type,shaderName:_.name,vertexShader:Ue,fragmentShader:J,defines:_.defines,customVertexShaderID:le,customFragmentShaderID:be,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:P,batchingColor:P&&F._colorsTexture!==null,instancing:Q,instancingColor:Q&&F.instanceColor!==null,instancingMorph:Q&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:xt,alphaToCoverage:!!_.alphaToCoverage,map:D,matcap:k,envMap:L,envMapMode:L&&j.mapping,envMapCubeUVHeight:q,aoMap:ee,lightMap:ne,bumpMap:xe,normalMap:he,displacementMap:d&&He,emissiveMap:Se,normalMapObjectSpace:he&&_.normalMapType===Xf,normalMapTangentSpace:he&&_.normalMapType===Sd,metalnessMap:Ee,roughnessMap:U,anisotropy:C,anisotropyMap:de,clearcoat:W,clearcoatMap:_e,clearcoatNormalMap:ze,clearcoatRoughnessMap:ce,dispersion:ie,iridescence:oe,iridescenceMap:ve,iridescenceThicknessMap:Ke,sheen:re,sheenColorMap:Ie,sheenRoughnessMap:ye,specularMap:Oe,specularColorMap:Ve,specularIntensityMap:ut,transmission:Ce,transmissionMap:S,thicknessMap:X,gradientMap:K,opaque:_.transparent===!1&&_.blending===yr&&_.alphaToCoverage===!1,alphaMap:Z,alphaTest:ae,alphaHash:Te,combine:_.combine,mapUv:D&&x(_.map.channel),aoMapUv:ee&&x(_.aoMap.channel),lightMapUv:ne&&x(_.lightMap.channel),bumpMapUv:xe&&x(_.bumpMap.channel),normalMapUv:he&&x(_.normalMap.channel),displacementMapUv:He&&x(_.displacementMap.channel),emissiveMapUv:Se&&x(_.emissiveMap.channel),metalnessMapUv:Ee&&x(_.metalnessMap.channel),roughnessMapUv:U&&x(_.roughnessMap.channel),anisotropyMapUv:de&&x(_.anisotropyMap.channel),clearcoatMapUv:_e&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:ze&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:ye&&x(_.sheenRoughnessMap.channel),specularMapUv:Oe&&x(_.specularMap.channel),specularColorMapUv:Ve&&x(_.specularColorMap.channel),specularIntensityMapUv:ut&&x(_.specularIntensityMap.channel),transmissionMapUv:S&&x(_.transmissionMap.channel),thicknessMapUv:X&&x(_.thicknessMap.channel),alphaMapUv:Z&&x(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(he||C),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(D||Z),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:F.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Le,numDirLights:m.directional.length,numPointLights:m.point.length,numSpotLights:m.spot.length,numSpotLightMaps:m.spotLightMap.length,numRectAreaLights:m.rectArea.length,numHemiLights:m.hemi.length,numDirLightShadows:m.directionalShadowMap.length,numPointLightShadows:m.pointShadowMap.length,numSpotLightShadows:m.spotShadowMap.length,numSpotLightShadowsWithMaps:m.numSpotLightShadowsWithMaps,numLightProbes:m.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,decodeVideoTexture:D&&_.map.isVideoTexture===!0&&Ze.getTransfer(_.map.colorSpace)===at,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Sn,flipSided:_.side===Yt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Fe&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&_.extensions.multiDraw===!0||P)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function f(_){const m=[];if(_.shaderID?m.push(_.shaderID):(m.push(_.customVertexShaderID),m.push(_.customFragmentShaderID)),_.defines!==void 0)for(const A in _.defines)m.push(A),m.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(w(m,_),y(m,_),m.push(i.outputColorSpace)),m.push(_.customProgramCacheKey),m.join()}function w(_,m){_.push(m.precision),_.push(m.outputColorSpace),_.push(m.envMapMode),_.push(m.envMapCubeUVHeight),_.push(m.mapUv),_.push(m.alphaMapUv),_.push(m.lightMapUv),_.push(m.aoMapUv),_.push(m.bumpMapUv),_.push(m.normalMapUv),_.push(m.displacementMapUv),_.push(m.emissiveMapUv),_.push(m.metalnessMapUv),_.push(m.roughnessMapUv),_.push(m.anisotropyMapUv),_.push(m.clearcoatMapUv),_.push(m.clearcoatNormalMapUv),_.push(m.clearcoatRoughnessMapUv),_.push(m.iridescenceMapUv),_.push(m.iridescenceThicknessMapUv),_.push(m.sheenColorMapUv),_.push(m.sheenRoughnessMapUv),_.push(m.specularMapUv),_.push(m.specularColorMapUv),_.push(m.specularIntensityMapUv),_.push(m.transmissionMapUv),_.push(m.thicknessMapUv),_.push(m.combine),_.push(m.fogExp2),_.push(m.sizeAttenuation),_.push(m.morphTargetsCount),_.push(m.morphAttributeCount),_.push(m.numDirLights),_.push(m.numPointLights),_.push(m.numSpotLights),_.push(m.numSpotLightMaps),_.push(m.numHemiLights),_.push(m.numRectAreaLights),_.push(m.numDirLightShadows),_.push(m.numPointLightShadows),_.push(m.numSpotLightShadows),_.push(m.numSpotLightShadowsWithMaps),_.push(m.numLightProbes),_.push(m.shadowMapType),_.push(m.toneMapping),_.push(m.numClippingPlanes),_.push(m.numClipIntersection),_.push(m.depthPacking)}function y(_,m){a.disableAll(),m.supportsVertexTextures&&a.enable(0),m.instancing&&a.enable(1),m.instancingColor&&a.enable(2),m.instancingMorph&&a.enable(3),m.matcap&&a.enable(4),m.envMap&&a.enable(5),m.normalMapObjectSpace&&a.enable(6),m.normalMapTangentSpace&&a.enable(7),m.clearcoat&&a.enable(8),m.iridescence&&a.enable(9),m.alphaTest&&a.enable(10),m.vertexColors&&a.enable(11),m.vertexAlphas&&a.enable(12),m.vertexUv1s&&a.enable(13),m.vertexUv2s&&a.enable(14),m.vertexUv3s&&a.enable(15),m.vertexTangents&&a.enable(16),m.anisotropy&&a.enable(17),m.alphaHash&&a.enable(18),m.batching&&a.enable(19),m.dispersion&&a.enable(20),m.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),m.fog&&a.enable(0),m.useFog&&a.enable(1),m.flatShading&&a.enable(2),m.logarithmicDepthBuffer&&a.enable(3),m.skinning&&a.enable(4),m.morphTargets&&a.enable(5),m.morphNormals&&a.enable(6),m.morphColors&&a.enable(7),m.premultipliedAlpha&&a.enable(8),m.shadowMapEnabled&&a.enable(9),m.doubleSided&&a.enable(10),m.flipSided&&a.enable(11),m.useDepthPacking&&a.enable(12),m.dithering&&a.enable(13),m.transmission&&a.enable(14),m.sheen&&a.enable(15),m.opaque&&a.enable(16),m.pointsUvs&&a.enable(17),m.decodeVideoTexture&&a.enable(18),m.alphaToCoverage&&a.enable(19),_.push(a.mask)}function M(_){const m=v[_.type];let A;if(m){const I=En[m];A=Ts.clone(I.uniforms)}else A=_.uniforms;return A}function N(_,m){let A;for(let I=0,F=u.length;I<F;I++){const V=u[I];if(V.cacheKey===m){A=V,++A.usedTimes;break}}return A===void 0&&(A=new Y0(i,m,_,s),u.push(A)),A}function E(_){if(--_.usedTimes===0){const m=u.indexOf(_);u[m]=u[u.length-1],u.pop(),_.destroy()}}function T(_){l.remove(_)}function b(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:N,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:b}}function eb(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function tb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function zu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Hu(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,d,g,v,x,p){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:g,groupOrder:v,renderOrder:h.renderOrder,z:x,group:p},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=g,f.groupOrder=v,f.renderOrder=h.renderOrder,f.z=x,f.group=p),e++,f}function a(h,d,g,v,x,p){const f=o(h,d,g,v,x,p);g.transmission>0?n.push(f):g.transparent===!0?r.push(f):t.push(f)}function l(h,d,g,v,x,p){const f=o(h,d,g,v,x,p);g.transmission>0?n.unshift(f):g.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||tb),n.length>1&&n.sort(d||zu),r.length>1&&r.sort(d||zu)}function u(){for(let h=e,d=i.length;h<d;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function nb(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Hu,i.set(n,[o])):r>=s.length?(o=new Hu,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ib(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ne};break;case"SpotLight":t={position:new B,direction:new B,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function rb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let sb=0;function ob(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ab(i){const e=new ib,t=rb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const r=new B,s=new je,o=new je;function a(c){let u=0,h=0,d=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let g=0,v=0,x=0,p=0,f=0,w=0,y=0,M=0,N=0,E=0,T=0;c.sort(ob);for(let _=0,m=c.length;_<m;_++){const A=c[_],I=A.color,F=A.intensity,V=A.distance,H=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=I.r*F,h+=I.g*F,d+=I.b*F;else if(A.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(A.sh.coefficients[O],F);T++}else if(A.isDirectionalLight){const O=e.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const j=A.shadow,q=t.get(A);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,n.directionalShadow[g]=q,n.directionalShadowMap[g]=H,n.directionalShadowMatrix[g]=A.shadow.matrix,w++}n.directional[g]=O,g++}else if(A.isSpotLight){const O=e.get(A);O.position.setFromMatrixPosition(A.matrixWorld),O.color.copy(I).multiplyScalar(F),O.distance=V,O.coneCos=Math.cos(A.angle),O.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),O.decay=A.decay,n.spot[x]=O;const j=A.shadow;if(A.map&&(n.spotLightMap[N]=A.map,N++,j.updateMatrices(A),A.castShadow&&E++),n.spotLightMatrix[x]=j.matrix,A.castShadow){const q=t.get(A);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=H,M++}x++}else if(A.isRectAreaLight){const O=e.get(A);O.color.copy(I).multiplyScalar(F),O.halfWidth.set(A.width*.5,0,0),O.halfHeight.set(0,A.height*.5,0),n.rectArea[p]=O,p++}else if(A.isPointLight){const O=e.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),O.distance=A.distance,O.decay=A.decay,A.castShadow){const j=A.shadow,q=t.get(A);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,q.shadowCameraNear=j.camera.near,q.shadowCameraFar=j.camera.far,n.pointShadow[v]=q,n.pointShadowMap[v]=H,n.pointShadowMatrix[v]=A.shadow.matrix,y++}n.point[v]=O,v++}else if(A.isHemisphereLight){const O=e.get(A);O.skyColor.copy(A.color).multiplyScalar(F),O.groundColor.copy(A.groundColor).multiplyScalar(F),n.hemi[f]=O,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const b=n.hash;(b.directionalLength!==g||b.pointLength!==v||b.spotLength!==x||b.rectAreaLength!==p||b.hemiLength!==f||b.numDirectionalShadows!==w||b.numPointShadows!==y||b.numSpotShadows!==M||b.numSpotMaps!==N||b.numLightProbes!==T)&&(n.directional.length=g,n.spot.length=x,n.rectArea.length=p,n.point.length=v,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+N-E,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,b.directionalLength=g,b.pointLength=v,b.spotLength=x,b.rectAreaLength=p,b.hemiLength=f,b.numDirectionalShadows=w,b.numPointShadows=y,b.numSpotShadows=M,b.numSpotMaps=N,b.numLightProbes=T,n.version=sb++)}function l(c,u){let h=0,d=0,g=0,v=0,x=0;const p=u.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){const y=c[f];if(y.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),h++}else if(y.isSpotLight){const M=n.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const M=n.rectArea[v];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(y.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:n}}function Gu(i){const e=new ab(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function lb(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Gu(i),e.set(r,[a])):s>=o.length?(a=new Gu(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Gd extends yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cb extends yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ub=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hb=`uniform sampler2D shadow_pass;
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
}`;function db(i,e,t){let n=new nc;const r=new Pe,s=new Pe,o=new ot,a=new Gd({depthPacking:Ed}),l=new cb,c={},u=t.maxTextureSize,h={[$n]:Yt,[Yt]:$n,[Sn]:Sn},d=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:ub,fragmentShader:hb}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const v=new rn;v.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new zt(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rd;let f=this.type;this.render=function(E,T,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const _=i.getRenderTarget(),m=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Kn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=f!==Gn&&this.type===Gn,V=f===Gn&&this.type!==Gn;for(let H=0,O=E.length;H<O;H++){const j=E[H],q=j.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const se=q.getFrameExtents();if(r.multiply(se),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,q.mapSize.y=s.y)),q.map===null||F===!0||V===!0){const fe=this.type!==Gn?{minFilter:Vt,magFilter:Vt}:{};q.map!==null&&q.map.dispose(),q.map=new Jn(r.x,r.y,fe),q.map.texture.name=j.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const te=q.getViewportCount();for(let fe=0;fe<te;fe++){const Le=q.getViewport(fe);o.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),I.viewport(o),q.updateMatrices(j,fe),n=q.getFrustum(),M(T,b,q.camera,j,this.type)}q.isPointLightShadow!==!0&&this.type===Gn&&w(q,b),q.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(_,m,A)};function w(E,T){const b=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,g.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Jn(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,b,d,x,null),g.uniforms.shadow_pass.value=E.mapPass.texture,g.uniforms.resolution.value=E.mapSize,g.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,b,g,x,null)}function y(E,T,b,_){let m=null;const A=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)m=A;else if(m=b.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=m.uuid,F=T.uuid;let V=c[I];V===void 0&&(V={},c[I]=V);let H=V[F];H===void 0&&(H=m.clone(),V[F]=H,T.addEventListener("dispose",N)),m=H}if(m.visible=T.visible,m.wireframe=T.wireframe,_===Gn?m.side=T.shadowSide!==null?T.shadowSide:T.side:m.side=T.shadowSide!==null?T.shadowSide:h[T.side],m.alphaMap=T.alphaMap,m.alphaTest=T.alphaTest,m.map=T.map,m.clipShadows=T.clipShadows,m.clippingPlanes=T.clippingPlanes,m.clipIntersection=T.clipIntersection,m.displacementMap=T.displacementMap,m.displacementScale=T.displacementScale,m.displacementBias=T.displacementBias,m.wireframeLinewidth=T.wireframeLinewidth,m.linewidth=T.linewidth,b.isPointLight===!0&&m.isMeshDistanceMaterial===!0){const I=i.properties.get(m);I.light=b}return m}function M(E,T,b,_,m){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&m===Gn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const F=e.update(E),V=E.material;if(Array.isArray(V)){const H=F.groups;for(let O=0,j=H.length;O<j;O++){const q=H[O],se=V[q.materialIndex];if(se&&se.visible){const te=y(E,se,_,m);E.onBeforeShadow(i,E,T,b,F,te,q),i.renderBufferDirect(b,null,F,te,E,q),E.onAfterShadow(i,E,T,b,F,te,q)}}}else if(V.visible){const H=y(E,V,_,m);E.onBeforeShadow(i,E,T,b,F,H,null),i.renderBufferDirect(b,null,F,H,E,null),E.onAfterShadow(i,E,T,b,F,H,null)}}const I=E.children;for(let F=0,V=I.length;F<V;F++)M(I[F],T,b,_,m)}function N(E){E.target.removeEventListener("dispose",N);for(const b in c){const _=c[b],m=E.target.uuid;m in _&&(_[m].dispose(),delete _[m])}}}function pb(i){function e(){let S=!1;const X=new ot;let K=null;const Z=new ot(0,0,0,0);return{setMask:function(ae){K!==ae&&!S&&(i.colorMask(ae,ae,ae,ae),K=ae)},setLocked:function(ae){S=ae},setClear:function(ae,Te,Fe,gt,wt){wt===!0&&(ae*=gt,Te*=gt,Fe*=gt),X.set(ae,Te,Fe,gt),Z.equals(X)===!1&&(i.clearColor(ae,Te,Fe,gt),Z.copy(X))},reset:function(){S=!1,K=null,Z.set(-1,0,0,0)}}}function t(){let S=!1,X=null,K=null,Z=null;return{setTest:function(ae){ae?be(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(ae){X!==ae&&!S&&(i.depthMask(ae),X=ae)},setFunc:function(ae){if(K!==ae){switch(ae){case If:i.depthFunc(i.NEVER);break;case Df:i.depthFunc(i.ALWAYS);break;case Nf:i.depthFunc(i.LESS);break;case Po:i.depthFunc(i.LEQUAL);break;case Uf:i.depthFunc(i.EQUAL);break;case Of:i.depthFunc(i.GEQUAL);break;case Ff:i.depthFunc(i.GREATER);break;case kf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ae}},setLocked:function(ae){S=ae},setClear:function(ae){Z!==ae&&(i.clearDepth(ae),Z=ae)},reset:function(){S=!1,X=null,K=null,Z=null}}}function n(){let S=!1,X=null,K=null,Z=null,ae=null,Te=null,Fe=null,gt=null,wt=null;return{setTest:function(Ye){S||(Ye?be(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(Ye){X!==Ye&&!S&&(i.stencilMask(Ye),X=Ye)},setFunc:function(Ye,Mt,_t){(K!==Ye||Z!==Mt||ae!==_t)&&(i.stencilFunc(Ye,Mt,_t),K=Ye,Z=Mt,ae=_t)},setOp:function(Ye,Mt,_t){(Te!==Ye||Fe!==Mt||gt!==_t)&&(i.stencilOp(Ye,Mt,_t),Te=Ye,Fe=Mt,gt=_t)},setLocked:function(Ye){S=Ye},setClear:function(Ye){wt!==Ye&&(i.clearStencil(Ye),wt=Ye)},reset:function(){S=!1,X=null,K=null,Z=null,ae=null,Te=null,Fe=null,gt=null,wt=null}}}const r=new e,s=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],g=null,v=!1,x=null,p=null,f=null,w=null,y=null,M=null,N=null,E=new Ne(0,0,0),T=0,b=!1,_=null,m=null,A=null,I=null,F=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,O=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(j)[1]),H=O>=1):j.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),H=O>=2);let q=null,se={};const te=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),Le=new ot().fromArray(te),Ue=new ot().fromArray(fe);function J(S,X,K,Z){const ae=new Uint8Array(4),Te=i.createTexture();i.bindTexture(S,Te),i.texParameteri(S,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(S,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<K;Fe++)S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY?i.texImage3D(X,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(X+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return Te}const le={};le[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),be(i.DEPTH_TEST),s.setFunc(Po),xe(!1),he(Xc),be(i.CULL_FACE),ee(Kn);function be(S){c[S]!==!0&&(i.enable(S),c[S]=!0)}function me(S){c[S]!==!1&&(i.disable(S),c[S]=!1)}function Q(S,X){return u[S]!==X?(i.bindFramebuffer(S,X),u[S]=X,S===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=X),S===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=X),!0):!1}function P(S,X){let K=d,Z=!1;if(S){K=h.get(X),K===void 0&&(K=[],h.set(X,K));const ae=S.textures;if(K.length!==ae.length||K[0]!==i.COLOR_ATTACHMENT0){for(let Te=0,Fe=ae.length;Te<Fe;Te++)K[Te]=i.COLOR_ATTACHMENT0+Te;K.length=ae.length,Z=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,Z=!0);Z&&i.drawBuffers(K)}function D(S){return g!==S?(i.useProgram(S),g=S,!0):!1}const k={[Oi]:i.FUNC_ADD,[mf]:i.FUNC_SUBTRACT,[gf]:i.FUNC_REVERSE_SUBTRACT};k[_f]=i.MIN,k[vf]=i.MAX;const L={[bf]:i.ZERO,[xf]:i.ONE,[yf]:i.SRC_COLOR,[Ja]:i.SRC_ALPHA,[Af]:i.SRC_ALPHA_SATURATE,[Sf]:i.DST_COLOR,[Mf]:i.DST_ALPHA,[wf]:i.ONE_MINUS_SRC_COLOR,[Qa]:i.ONE_MINUS_SRC_ALPHA,[Tf]:i.ONE_MINUS_DST_COLOR,[Ef]:i.ONE_MINUS_DST_ALPHA,[Cf]:i.CONSTANT_COLOR,[Pf]:i.ONE_MINUS_CONSTANT_COLOR,[Rf]:i.CONSTANT_ALPHA,[Lf]:i.ONE_MINUS_CONSTANT_ALPHA};function ee(S,X,K,Z,ae,Te,Fe,gt,wt,Ye){if(S===Kn){v===!0&&(me(i.BLEND),v=!1);return}if(v===!1&&(be(i.BLEND),v=!0),S!==ff){if(S!==x||Ye!==b){if((p!==Oi||y!==Oi)&&(i.blendEquation(i.FUNC_ADD),p=Oi,y=Oi),Ye)switch(S){case yr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Za:i.blendFunc(i.ONE,i.ONE);break;case qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case yr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Za:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}f=null,w=null,M=null,N=null,E.set(0,0,0),T=0,x=S,b=Ye}return}ae=ae||X,Te=Te||K,Fe=Fe||Z,(X!==p||ae!==y)&&(i.blendEquationSeparate(k[X],k[ae]),p=X,y=ae),(K!==f||Z!==w||Te!==M||Fe!==N)&&(i.blendFuncSeparate(L[K],L[Z],L[Te],L[Fe]),f=K,w=Z,M=Te,N=Fe),(gt.equals(E)===!1||wt!==T)&&(i.blendColor(gt.r,gt.g,gt.b,wt),E.copy(gt),T=wt),x=S,b=!1}function ne(S,X){S.side===Sn?me(i.CULL_FACE):be(i.CULL_FACE);let K=S.side===Yt;X&&(K=!K),xe(K),S.blending===yr&&S.transparent===!1?ee(Kn):ee(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),s.setFunc(S.depthFunc),s.setTest(S.depthTest),s.setMask(S.depthWrite),r.setMask(S.colorWrite);const Z=S.stencilWrite;o.setTest(Z),Z&&(o.setMask(S.stencilWriteMask),o.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),o.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),Se(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?be(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function xe(S){_!==S&&(S?i.frontFace(i.CW):i.frontFace(i.CCW),_=S)}function he(S){S!==df?(be(i.CULL_FACE),S!==m&&(S===Xc?i.cullFace(i.BACK):S===pf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),m=S}function He(S){S!==A&&(H&&i.lineWidth(S),A=S)}function Se(S,X,K){S?(be(i.POLYGON_OFFSET_FILL),(I!==X||F!==K)&&(i.polygonOffset(X,K),I=X,F=K)):me(i.POLYGON_OFFSET_FILL)}function Ee(S){S?be(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function U(S){S===void 0&&(S=i.TEXTURE0+V-1),q!==S&&(i.activeTexture(S),q=S)}function C(S,X,K){K===void 0&&(q===null?K=i.TEXTURE0+V-1:K=q);let Z=se[K];Z===void 0&&(Z={type:void 0,texture:void 0},se[K]=Z),(Z.type!==S||Z.texture!==X)&&(q!==K&&(i.activeTexture(K),q=K),i.bindTexture(S,X||le[S]),Z.type=S,Z.texture=X)}function W(){const S=se[q];S!==void 0&&S.type!==void 0&&(i.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function oe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ce(){try{i.texSubImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function _e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ze(){try{i.texStorage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ce(){try{i.texStorage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ke(){try{i.texImage3D.apply(i,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ie(S){Le.equals(S)===!1&&(i.scissor(S.x,S.y,S.z,S.w),Le.copy(S))}function ye(S){Ue.equals(S)===!1&&(i.viewport(S.x,S.y,S.z,S.w),Ue.copy(S))}function Oe(S,X){let K=l.get(X);K===void 0&&(K=new WeakMap,l.set(X,K));let Z=K.get(S);Z===void 0&&(Z=i.getUniformBlockIndex(X,S.name),K.set(S,Z))}function Ve(S,X){const Z=l.get(X).get(S);a.get(X)!==Z&&(i.uniformBlockBinding(X,Z,S.__bindingPointIndex),a.set(X,Z))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},q=null,se={},u={},h=new WeakMap,d=[],g=null,v=!1,x=null,p=null,f=null,w=null,y=null,M=null,N=null,E=new Ne(0,0,0),T=0,b=!1,_=null,m=null,A=null,I=null,F=null,Le.set(0,0,i.canvas.width,i.canvas.height),Ue.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:be,disable:me,bindFramebuffer:Q,drawBuffers:P,useProgram:D,setBlending:ee,setMaterial:ne,setFlipSided:xe,setCullFace:he,setLineWidth:He,setPolygonOffset:Se,setScissorTest:Ee,activeTexture:U,bindTexture:C,unbindTexture:W,compressedTexImage2D:ie,compressedTexImage3D:oe,texImage2D:ve,texImage3D:Ke,updateUBOMapping:Oe,uniformBlockBinding:Ve,texStorage2D:ze,texStorage3D:ce,texSubImage2D:re,texSubImage3D:Ce,compressedTexSubImage2D:de,compressedTexSubImage3D:_e,scissor:Ie,viewport:ye,reset:ut}}function Wu(i,e,t,n){const r=fb(n);switch(t){case _d:return i*e;case bd:return i*e;case xd:return i*e*2;case Kl:return i*e/r.components*r.byteLength;case Yl:return i*e/r.components*r.byteLength;case yd:return i*e*2/r.components*r.byteLength;case $l:return i*e*2/r.components*r.byteLength;case vd:return i*e*3/r.components*r.byteLength;case hn:return i*e*4/r.components*r.byteLength;case Zl:return i*e*4/r.components*r.byteLength;case yo:case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mo:case Eo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nl:case rl:return Math.max(i,16)*Math.max(e,8)/4;case tl:case il:return Math.max(i,8)*Math.max(e,8)/2;case sl:case ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ul:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case dl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ml:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case gl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case _l:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case vl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case bl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case xl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case So:case wl:case Ml:return Math.ceil(i/4)*Math.ceil(e/4)*16;case wd:case El:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Sl:case Tl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fb(i){switch(i){case Zn:case fd:return{byteLength:1,components:1};case fs:case md:case bn:return{byteLength:2,components:1};case Xl:case ql:return{byteLength:2,components:4};case zi:case jl:case qt:return{byteLength:4,components:1};case gd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function mb(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,u=new WeakMap;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(U,C){return g?new OffscreenCanvas(U,C):_s("canvas")}function x(U,C,W){let ie=1;const oe=Ee(U);if((oe.width>W||oe.height>W)&&(ie=W/Math.max(oe.width,oe.height)),ie<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const re=Math.floor(ie*oe.width),Ce=Math.floor(ie*oe.height);h===void 0&&(h=v(re,Ce));const de=C?v(re,Ce):h;return de.width=re,de.height=Ce,de.getContext("2d").drawImage(U,0,0,re,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+re+"x"+Ce+")."),de}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),U;return U}function p(U){return U.generateMipmaps&&U.minFilter!==Vt&&U.minFilter!==Pt}function f(U){i.generateMipmap(U)}function w(U,C,W,ie,oe=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let re=C;if(C===i.RED&&(W===i.FLOAT&&(re=i.R32F),W===i.HALF_FLOAT&&(re=i.R16F),W===i.UNSIGNED_BYTE&&(re=i.R8)),C===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(re=i.R8UI),W===i.UNSIGNED_SHORT&&(re=i.R16UI),W===i.UNSIGNED_INT&&(re=i.R32UI),W===i.BYTE&&(re=i.R8I),W===i.SHORT&&(re=i.R16I),W===i.INT&&(re=i.R32I)),C===i.RG&&(W===i.FLOAT&&(re=i.RG32F),W===i.HALF_FLOAT&&(re=i.RG16F),W===i.UNSIGNED_BYTE&&(re=i.RG8)),C===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(re=i.RG8UI),W===i.UNSIGNED_SHORT&&(re=i.RG16UI),W===i.UNSIGNED_INT&&(re=i.RG32UI),W===i.BYTE&&(re=i.RG8I),W===i.SHORT&&(re=i.RG16I),W===i.INT&&(re=i.RG32I)),C===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),C===i.RGBA){const Ce=oe?Io:Ze.getTransfer(ie);W===i.FLOAT&&(re=i.RGBA32F),W===i.HALF_FLOAT&&(re=i.RGBA16F),W===i.UNSIGNED_BYTE&&(re=Ce===at?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function y(U,C){let W;return U?C===null||C===zi||C===Rr?W=i.DEPTH24_STENCIL8:C===qt?W=i.DEPTH32F_STENCIL8:C===fs&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===zi||C===Rr?W=i.DEPTH_COMPONENT24:C===qt?W=i.DEPTH_COMPONENT32F:C===fs&&(W=i.DEPTH_COMPONENT16),W}function M(U,C){return p(U)===!0||U.isFramebufferTexture&&U.minFilter!==Vt&&U.minFilter!==Pt?Math.log2(Math.max(C.width,C.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?C.mipmaps.length:1}function N(U){const C=U.target;C.removeEventListener("dispose",N),T(C),C.isVideoTexture&&u.delete(C)}function E(U){const C=U.target;C.removeEventListener("dispose",E),_(C)}function T(U){const C=n.get(U);if(C.__webglInit===void 0)return;const W=U.source,ie=d.get(W);if(ie){const oe=ie[C.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&b(U),Object.keys(ie).length===0&&d.delete(W)}n.remove(U)}function b(U){const C=n.get(U);i.deleteTexture(C.__webglTexture);const W=U.source,ie=d.get(W);delete ie[C.__cacheKey],o.memory.textures--}function _(U){const C=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(C.__webglFramebuffer[ie]))for(let oe=0;oe<C.__webglFramebuffer[ie].length;oe++)i.deleteFramebuffer(C.__webglFramebuffer[ie][oe]);else i.deleteFramebuffer(C.__webglFramebuffer[ie]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[ie])}else{if(Array.isArray(C.__webglFramebuffer))for(let ie=0;ie<C.__webglFramebuffer.length;ie++)i.deleteFramebuffer(C.__webglFramebuffer[ie]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ie=0;ie<C.__webglColorRenderbuffer.length;ie++)C.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[ie]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const W=U.textures;for(let ie=0,oe=W.length;ie<oe;ie++){const re=n.get(W[ie]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),o.memory.textures--),n.remove(W[ie])}n.remove(U)}let m=0;function A(){m=0}function I(){const U=m;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),m+=1,U}function F(U){const C=[];return C.push(U.wrapS),C.push(U.wrapT),C.push(U.wrapR||0),C.push(U.magFilter),C.push(U.minFilter),C.push(U.anisotropy),C.push(U.internalFormat),C.push(U.format),C.push(U.type),C.push(U.generateMipmaps),C.push(U.premultiplyAlpha),C.push(U.flipY),C.push(U.unpackAlignment),C.push(U.colorSpace),C.join()}function V(U,C){const W=n.get(U);if(U.isVideoTexture&&He(U),U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){const ie=U.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(W,U,C);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+C)}function H(U,C){const W=n.get(U);if(U.version>0&&W.__version!==U.version){Ue(W,U,C);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+C)}function O(U,C){const W=n.get(U);if(U.version>0&&W.__version!==U.version){Ue(W,U,C);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+C)}function j(U,C){const W=n.get(U);if(U.version>0&&W.__version!==U.version){J(W,U,C);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+C)}const q={[Pr]:i.REPEAT,[An]:i.CLAMP_TO_EDGE,[Lo]:i.MIRRORED_REPEAT},se={[Vt]:i.NEAREST,[pd]:i.NEAREST_MIPMAP_NEAREST,[cs]:i.NEAREST_MIPMAP_LINEAR,[Pt]:i.LINEAR,[xo]:i.LINEAR_MIPMAP_NEAREST,[Cn]:i.LINEAR_MIPMAP_LINEAR},te={[qf]:i.NEVER,[Qf]:i.ALWAYS,[Kf]:i.LESS,[Td]:i.LEQUAL,[Yf]:i.EQUAL,[Jf]:i.GEQUAL,[$f]:i.GREATER,[Zf]:i.NOTEQUAL};function fe(U,C){if(C.type===qt&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Pt||C.magFilter===xo||C.magFilter===cs||C.magFilter===Cn||C.minFilter===Pt||C.minFilter===xo||C.minFilter===cs||C.minFilter===Cn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,q[C.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,q[C.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,q[C.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,se[C.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,se[C.minFilter]),C.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,te[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Vt||C.minFilter!==cs&&C.minFilter!==Cn||C.type===qt&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function Le(U,C){let W=!1;U.__webglInit===void 0&&(U.__webglInit=!0,C.addEventListener("dispose",N));const ie=C.source;let oe=d.get(ie);oe===void 0&&(oe={},d.set(ie,oe));const re=F(C);if(re!==U.__cacheKey){oe[re]===void 0&&(oe[re]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),oe[re].usedTimes++;const Ce=oe[U.__cacheKey];Ce!==void 0&&(oe[U.__cacheKey].usedTimes--,Ce.usedTimes===0&&b(C)),U.__cacheKey=re,U.__webglTexture=oe[re].texture}return W}function Ue(U,C,W){let ie=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ie=i.TEXTURE_3D);const oe=Le(U,C),re=C.source;t.bindTexture(ie,U.__webglTexture,i.TEXTURE0+W);const Ce=n.get(re);if(re.version!==Ce.__version||oe===!0){t.activeTexture(i.TEXTURE0+W);const de=Ze.getPrimaries(Ze.workingColorSpace),_e=C.colorSpace===vi?null:Ze.getPrimaries(C.colorSpace),ze=C.colorSpace===vi||de===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let ce=x(C.image,!1,r.maxTextureSize);ce=Se(C,ce);const ve=s.convert(C.format,C.colorSpace),Ke=s.convert(C.type);let Ie=w(C.internalFormat,ve,Ke,C.colorSpace,C.isVideoTexture);fe(ie,C);let ye;const Oe=C.mipmaps,Ve=C.isVideoTexture!==!0,ut=Ce.__version===void 0||oe===!0,S=re.dataReady,X=M(C,ce);if(C.isDepthTexture)Ie=y(C.format===Lr,C.type),ut&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,Ie,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,Ie,ce.width,ce.height,0,ve,Ke,null));else if(C.isDataTexture)if(Oe.length>0){Ve&&ut&&t.texStorage2D(i.TEXTURE_2D,X,Ie,Oe[0].width,Oe[0].height);for(let K=0,Z=Oe.length;K<Z;K++)ye=Oe[K],Ve?S&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ye.width,ye.height,ve,Ke,ye.data):t.texImage2D(i.TEXTURE_2D,K,Ie,ye.width,ye.height,0,ve,Ke,ye.data);C.generateMipmaps=!1}else Ve?(ut&&t.texStorage2D(i.TEXTURE_2D,X,Ie,ce.width,ce.height),S&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce.width,ce.height,ve,Ke,ce.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,ce.width,ce.height,0,ve,Ke,ce.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Ve&&ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,X,Ie,Oe[0].width,Oe[0].height,ce.depth);for(let K=0,Z=Oe.length;K<Z;K++)if(ye=Oe[K],C.format!==hn)if(ve!==null)if(Ve){if(S)if(C.layerUpdates.size>0){const ae=Wu(ye.width,ye.height,C.format,C.type);for(const Te of C.layerUpdates){const Fe=ye.data.subarray(Te*ae/ye.data.BYTES_PER_ELEMENT,(Te+1)*ae/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,Te,ye.width,ye.height,1,ve,Fe,0,0)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ye.width,ye.height,ce.depth,ve,ye.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Ie,ye.width,ye.height,ce.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?S&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ye.width,ye.height,ce.depth,ve,Ke,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,Ie,ye.width,ye.height,ce.depth,0,ve,Ke,ye.data)}else{Ve&&ut&&t.texStorage2D(i.TEXTURE_2D,X,Ie,Oe[0].width,Oe[0].height);for(let K=0,Z=Oe.length;K<Z;K++)ye=Oe[K],C.format!==hn?ve!==null?Ve?S&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,ye.width,ye.height,ve,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,K,Ie,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?S&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ye.width,ye.height,ve,Ke,ye.data):t.texImage2D(i.TEXTURE_2D,K,Ie,ye.width,ye.height,0,ve,Ke,ye.data)}else if(C.isDataArrayTexture)if(Ve){if(ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,X,Ie,ce.width,ce.height,ce.depth),S)if(C.layerUpdates.size>0){const K=Wu(ce.width,ce.height,C.format,C.type);for(const Z of C.layerUpdates){const ae=ce.data.subarray(Z*K/ce.data.BYTES_PER_ELEMENT,(Z+1)*K/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ce.width,ce.height,1,ve,Ke,ae)}C.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ve,Ke,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,ce.width,ce.height,ce.depth,0,ve,Ke,ce.data);else if(C.isData3DTexture)Ve?(ut&&t.texStorage3D(i.TEXTURE_3D,X,Ie,ce.width,ce.height,ce.depth),S&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ve,Ke,ce.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,ce.width,ce.height,ce.depth,0,ve,Ke,ce.data);else if(C.isFramebufferTexture){if(ut)if(Ve)t.texStorage2D(i.TEXTURE_2D,X,Ie,ce.width,ce.height);else{let K=ce.width,Z=ce.height;for(let ae=0;ae<X;ae++)t.texImage2D(i.TEXTURE_2D,ae,Ie,K,Z,0,ve,Ke,null),K>>=1,Z>>=1}}else if(Oe.length>0){if(Ve&&ut){const K=Ee(Oe[0]);t.texStorage2D(i.TEXTURE_2D,X,Ie,K.width,K.height)}for(let K=0,Z=Oe.length;K<Z;K++)ye=Oe[K],Ve?S&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ve,Ke,ye):t.texImage2D(i.TEXTURE_2D,K,Ie,ve,Ke,ye);C.generateMipmaps=!1}else if(Ve){if(ut){const K=Ee(ce);t.texStorage2D(i.TEXTURE_2D,X,Ie,K.width,K.height)}S&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Ke,ce)}else t.texImage2D(i.TEXTURE_2D,0,Ie,ve,Ke,ce);p(C)&&f(ie),Ce.__version=re.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version}function J(U,C,W){if(C.image.length!==6)return;const ie=Le(U,C),oe=C.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+W);const re=n.get(oe);if(oe.version!==re.__version||ie===!0){t.activeTexture(i.TEXTURE0+W);const Ce=Ze.getPrimaries(Ze.workingColorSpace),de=C.colorSpace===vi?null:Ze.getPrimaries(C.colorSpace),_e=C.colorSpace===vi||Ce===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const ze=C.isCompressedTexture||C.image[0].isCompressedTexture,ce=C.image[0]&&C.image[0].isDataTexture,ve=[];for(let Z=0;Z<6;Z++)!ze&&!ce?ve[Z]=x(C.image[Z],!0,r.maxCubemapSize):ve[Z]=ce?C.image[Z].image:C.image[Z],ve[Z]=Se(C,ve[Z]);const Ke=ve[0],Ie=s.convert(C.format,C.colorSpace),ye=s.convert(C.type),Oe=w(C.internalFormat,Ie,ye,C.colorSpace),Ve=C.isVideoTexture!==!0,ut=re.__version===void 0||ie===!0,S=oe.dataReady;let X=M(C,Ke);fe(i.TEXTURE_CUBE_MAP,C);let K;if(ze){Ve&&ut&&t.texStorage2D(i.TEXTURE_CUBE_MAP,X,Oe,Ke.width,Ke.height);for(let Z=0;Z<6;Z++){K=ve[Z].mipmaps;for(let ae=0;ae<K.length;ae++){const Te=K[ae];C.format!==hn?Ie!==null?Ve?S&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,0,0,Te.width,Te.height,Ie,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,Oe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?S&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,0,0,Te.width,Te.height,Ie,ye,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,Oe,Te.width,Te.height,0,Ie,ye,Te.data)}}}else{if(K=C.mipmaps,Ve&&ut){K.length>0&&X++;const Z=Ee(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,X,Oe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ce){Ve?S&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ve[Z].width,ve[Z].height,Ie,ye,ve[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Oe,ve[Z].width,ve[Z].height,0,Ie,ye,ve[Z].data);for(let ae=0;ae<K.length;ae++){const Fe=K[ae].image[Z].image;Ve?S&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,0,0,Fe.width,Fe.height,Ie,ye,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,Oe,Fe.width,Fe.height,0,Ie,ye,Fe.data)}}else{Ve?S&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ie,ye,ve[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Oe,Ie,ye,ve[Z]);for(let ae=0;ae<K.length;ae++){const Te=K[ae];Ve?S&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,0,0,Ie,ye,Te.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,Oe,Ie,ye,Te.image[Z])}}}p(C)&&f(i.TEXTURE_CUBE_MAP),re.__version=oe.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version}function le(U,C,W,ie,oe,re){const Ce=s.convert(W.format,W.colorSpace),de=s.convert(W.type),_e=w(W.internalFormat,Ce,de,W.colorSpace);if(!n.get(C).__hasExternalTextures){const ce=Math.max(1,C.width>>re),ve=Math.max(1,C.height>>re);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,re,_e,ce,ve,C.depth,0,Ce,de,null):t.texImage2D(oe,re,_e,ce,ve,0,Ce,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),he(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,oe,n.get(W).__webglTexture,0,xe(C)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,oe,n.get(W).__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(U,C,W){if(i.bindRenderbuffer(i.RENDERBUFFER,U),C.depthBuffer){const ie=C.depthTexture,oe=ie&&ie.isDepthTexture?ie.type:null,re=y(C.stencilBuffer,oe),Ce=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=xe(C);he(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,re,C.width,C.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,re,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,re,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,U)}else{const ie=C.textures;for(let oe=0;oe<ie.length;oe++){const re=ie[oe],Ce=s.convert(re.format,re.colorSpace),de=s.convert(re.type),_e=w(re.internalFormat,Ce,de,re.colorSpace),ze=xe(C);W&&he(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,_e,C.width,C.height):he(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze,_e,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,_e,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(U,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),V(C.depthTexture,0);const ie=n.get(C.depthTexture).__webglTexture,oe=xe(C);if(C.depthTexture.format===wr)he(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(C.depthTexture.format===Lr)he(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Q(U){const C=n.get(U),W=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!C.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");me(C.__webglFramebuffer,U)}else if(W){C.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[ie]),C.__webglDepthbuffer[ie]=i.createRenderbuffer(),be(C.__webglDepthbuffer[ie],U,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=i.createRenderbuffer(),be(C.__webglDepthbuffer,U,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function P(U,C,W){const ie=n.get(U);C!==void 0&&le(ie.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Q(U)}function D(U){const C=U.texture,W=n.get(U),ie=n.get(C);U.addEventListener("dispose",E);const oe=U.textures,re=U.isWebGLCubeRenderTarget===!0,Ce=oe.length>1;if(Ce||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=C.version,o.memory.textures++),re){W.__webglFramebuffer=[];for(let de=0;de<6;de++)if(C.mipmaps&&C.mipmaps.length>0){W.__webglFramebuffer[de]=[];for(let _e=0;_e<C.mipmaps.length;_e++)W.__webglFramebuffer[de][_e]=i.createFramebuffer()}else W.__webglFramebuffer[de]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){W.__webglFramebuffer=[];for(let de=0;de<C.mipmaps.length;de++)W.__webglFramebuffer[de]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let de=0,_e=oe.length;de<_e;de++){const ze=n.get(oe[de]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&he(U)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let de=0;de<oe.length;de++){const _e=oe[de];W.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[de]);const ze=s.convert(_e.format,_e.colorSpace),ce=s.convert(_e.type),ve=w(_e.internalFormat,ze,ce,_e.colorSpace,U.isXRRenderTarget===!0),Ke=xe(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,ve,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,W.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),be(W.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),fe(i.TEXTURE_CUBE_MAP,C);for(let de=0;de<6;de++)if(C.mipmaps&&C.mipmaps.length>0)for(let _e=0;_e<C.mipmaps.length;_e++)le(W.__webglFramebuffer[de][_e],U,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,_e);else le(W.__webglFramebuffer[de],U,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);p(C)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let de=0,_e=oe.length;de<_e;de++){const ze=oe[de],ce=n.get(ze);t.bindTexture(i.TEXTURE_2D,ce.__webglTexture),fe(i.TEXTURE_2D,ze),le(W.__webglFramebuffer,U,ze,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),p(ze)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(de=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,ie.__webglTexture),fe(de,C),C.mipmaps&&C.mipmaps.length>0)for(let _e=0;_e<C.mipmaps.length;_e++)le(W.__webglFramebuffer[_e],U,C,i.COLOR_ATTACHMENT0,de,_e);else le(W.__webglFramebuffer,U,C,i.COLOR_ATTACHMENT0,de,0);p(C)&&f(de),t.unbindTexture()}U.depthBuffer&&Q(U)}function k(U){const C=U.textures;for(let W=0,ie=C.length;W<ie;W++){const oe=C[W];if(p(oe)){const re=U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ce=n.get(oe).__webglTexture;t.bindTexture(re,Ce),f(re),t.unbindTexture()}}}const L=[],ee=[];function ne(U){if(U.samples>0){if(he(U)===!1){const C=U.textures,W=U.width,ie=U.height;let oe=i.COLOR_BUFFER_BIT;const re=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(U),de=C.length>1;if(de)for(let _e=0;_e<C.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let _e=0;_e<C.length;_e++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[_e]);const ze=n.get(C[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ze,0)}i.blitFramebuffer(0,0,W,ie,0,0,W,ie,oe,i.NEAREST),l===!0&&(L.length=0,ee.length=0,L.push(i.COLOR_ATTACHMENT0+_e),U.depthBuffer&&U.resolveDepthBuffer===!1&&(L.push(re),ee.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,L))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let _e=0;_e<C.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[_e]);const ze=n.get(C[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const C=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function xe(U){return Math.min(r.maxSamples,U.samples)}function he(U){const C=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function He(U){const C=o.render.frame;u.get(U)!==C&&(u.set(U,C),U.update())}function Se(U,C){const W=U.colorSpace,ie=U.format,oe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||W!==xt&&W!==vi&&(Ze.getTransfer(W)===at?(ie!==hn||oe!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),C}function Ee(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=A,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=O,this.setTextureCube=j,this.rebindTextures=P,this.setupRenderTarget=D,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=le,this.useMultisampledRTT=he}function gb(i,e){function t(n,r=vi){let s;const o=Ze.getTransfer(r);if(n===Zn)return i.UNSIGNED_BYTE;if(n===Xl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ql)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fd)return i.BYTE;if(n===md)return i.SHORT;if(n===fs)return i.UNSIGNED_SHORT;if(n===jl)return i.INT;if(n===zi)return i.UNSIGNED_INT;if(n===qt)return i.FLOAT;if(n===bn)return i.HALF_FLOAT;if(n===_d)return i.ALPHA;if(n===vd)return i.RGB;if(n===hn)return i.RGBA;if(n===bd)return i.LUMINANCE;if(n===xd)return i.LUMINANCE_ALPHA;if(n===wr)return i.DEPTH_COMPONENT;if(n===Lr)return i.DEPTH_STENCIL;if(n===Kl)return i.RED;if(n===Yl)return i.RED_INTEGER;if(n===yd)return i.RG;if(n===$l)return i.RG_INTEGER;if(n===Zl)return i.RGBA_INTEGER;if(n===yo||n===wo||n===Mo||n===Eo)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===yo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===yo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Eo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tl||n===nl||n===il||n===rl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===tl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===il)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sl||n===ol||n===al)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===sl||n===ol)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===al)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ll||n===cl||n===ul||n===hl||n===dl||n===pl||n===fl||n===ml||n===gl||n===_l||n===vl||n===bl||n===xl||n===yl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ll)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ul)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ml)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_l)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===So||n===wl||n===Ml)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===So)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ml)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wd||n===El||n===Sl||n===Tl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===So)return s.COMPRESSED_RED_RGTC1_EXT;if(n===El)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class _b extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bi extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vb={type:"move"};class Pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),f=this._getHandJoint(c,x);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),g=.02,v=.005;c.inputState.pinching&&d>g+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=g-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const bb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Rt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new nn({vertexShader:bb,fragmentShader:xb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zt(new Xo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wb extends ji{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,g=null,v=null;const x=new yb,p=t.getContextAttributes();let f=null,w=null;const y=[],M=[],N=new Pe;let E=null;const T=new Bt;T.layers.enable(1),T.viewport=new ot;const b=new Bt;b.layers.enable(2),b.viewport=new ot;const _=[T,b],m=new _b;m.layers.enable(1),m.layers.enable(2);let A=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let le=y[J];return le===void 0&&(le=new Pa,y[J]=le),le.getTargetRaySpace()},this.getControllerGrip=function(J){let le=y[J];return le===void 0&&(le=new Pa,y[J]=le),le.getGripSpace()},this.getHand=function(J){let le=y[J];return le===void 0&&(le=new Pa,y[J]=le),le.getHandSpace()};function F(J){const le=M.indexOf(J.inputSource);if(le===-1)return;const be=y[le];be!==void 0&&(be.update(J.inputSource,J.frame,c||o),be.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",H);for(let J=0;J<y.length;J++){const le=M[J];le!==null&&(M[J]=null,y[J].disconnect(le))}A=null,I=null,x.reset(),e.setRenderTarget(f),g=null,d=null,h=null,r=null,w=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",V),r.addEventListener("inputsourceschange",H),p.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(N),r.renderState.layers===void 0){const le={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),w=new Jn(g.framebufferWidth,g.framebufferHeight,{format:hn,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let le=null,be=null,me=null;p.depth&&(me=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=p.stencil?Lr:wr,be=p.stencil?Rr:zi);const Q={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Q),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Jn(d.textureWidth,d.textureHeight,{format:hn,type:Zn,depthTexture:new kd(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ue.setContext(r),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(J){for(let le=0;le<J.removed.length;le++){const be=J.removed[le],me=M.indexOf(be);me>=0&&(M[me]=null,y[me].disconnect(be))}for(let le=0;le<J.added.length;le++){const be=J.added[le];let me=M.indexOf(be);if(me===-1){for(let P=0;P<y.length;P++)if(P>=M.length){M.push(be),me=P;break}else if(M[P]===null){M[P]=be,me=P;break}if(me===-1)break}const Q=y[me];Q&&Q.connect(be)}}const O=new B,j=new B;function q(J,le,be){O.setFromMatrixPosition(le.matrixWorld),j.setFromMatrixPosition(be.matrixWorld);const me=O.distanceTo(j),Q=le.projectionMatrix.elements,P=be.projectionMatrix.elements,D=Q[14]/(Q[10]-1),k=Q[14]/(Q[10]+1),L=(Q[9]+1)/Q[5],ee=(Q[9]-1)/Q[5],ne=(Q[8]-1)/Q[0],xe=(P[8]+1)/P[0],he=D*ne,He=D*xe,Se=me/(-ne+xe),Ee=Se*-ne;le.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ee),J.translateZ(Se),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const U=D+Se,C=k+Se,W=he-Ee,ie=He+(me-Ee),oe=L*k/C*U,re=ee*k/C*U;J.projectionMatrix.makePerspective(W,ie,oe,re,U,C),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function se(J,le){le===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(le.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;x.texture!==null&&(J.near=x.depthNear,J.far=x.depthFar),m.near=b.near=T.near=J.near,m.far=b.far=T.far=J.far,(A!==m.near||I!==m.far)&&(r.updateRenderState({depthNear:m.near,depthFar:m.far}),A=m.near,I=m.far,T.near=A,T.far=I,b.near=A,b.far=I,T.updateProjectionMatrix(),b.updateProjectionMatrix(),J.updateProjectionMatrix());const le=J.parent,be=m.cameras;se(m,le);for(let me=0;me<be.length;me++)se(be[me],le);be.length===2?q(m,T,b):m.projectionMatrix.copy(T.projectionMatrix),te(J,m,le)};function te(J,le,be){be===null?J.matrix.copy(le.matrixWorld):(J.matrix.copy(be.matrixWorld),J.matrix.invert(),J.matrix.multiply(le.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(le.projectionMatrix),J.projectionMatrixInverse.copy(le.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ir*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return m},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(m)};let fe=null;function Le(J,le){if(u=le.getViewerPose(c||o),v=le,u!==null){const be=u.views;g!==null&&(e.setRenderTargetFramebuffer(w,g.framebuffer),e.setRenderTarget(w));let me=!1;be.length!==m.cameras.length&&(m.cameras.length=0,me=!0);for(let P=0;P<be.length;P++){const D=be[P];let k=null;if(g!==null)k=g.getViewport(D);else{const ee=h.getViewSubImage(d,D);k=ee.viewport,P===0&&(e.setRenderTargetTextures(w,ee.colorTexture,d.ignoreDepthValues?void 0:ee.depthStencilTexture),e.setRenderTarget(w))}let L=_[P];L===void 0&&(L=new Bt,L.layers.enable(P),L.viewport=new ot,_[P]=L),L.matrix.fromArray(D.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(D.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(k.x,k.y,k.width,k.height),P===0&&(m.matrix.copy(L.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale)),me===!0&&m.cameras.push(L)}const Q=r.enabledFeatures;if(Q&&Q.includes("depth-sensing")){const P=h.getDepthInformation(be[0]);P&&P.isValid&&P.texture&&x.init(e,P,r.renderState)}}for(let be=0;be<y.length;be++){const me=M[be],Q=y[be];me!==null&&Q!==void 0&&Q.update(me,le,c||o)}fe&&fe(J,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),v=null}const Ue=new Fd;Ue.setAnimationLoop(Le),this.setAnimationLoop=function(J){fe=J},this.dispose=function(){}}}const Ri=new Rn,Mb=new je;function Eb(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Nd(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,w,y,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),h(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&g(p,f,M)):f.isMeshMatcapMaterial?(s(p,f),v(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),x(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,w,y):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Yt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Yt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const w=e.get(f),y=w.envMap,M=w.envMapRotation;y&&(p.envMap.value=y,Ri.copy(M),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),p.envMapRotation.value.setFromMatrix4(Mb.makeRotationFromEuler(Ri)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,w,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*w,p.scale.value=y*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function g(p,f,w){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Yt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,f){f.matcap&&(p.matcap.value=f.matcap)}function x(p,f){const w=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Sb(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,y){const M=y.program;n.uniformBlockBinding(w,M)}function c(w,y){let M=r[w.id];M===void 0&&(v(w),M=u(w),r[w.id]=M,w.addEventListener("dispose",p));const N=y.program;n.updateUBOMapping(w,N);const E=e.render.frame;s[w.id]!==E&&(d(w),s[w.id]=E)}function u(w){const y=h();w.__bindingPointIndex=y;const M=i.createBuffer(),N=w.__size,E=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,N,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const y=r[w.id],M=w.uniforms,N=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,T=M.length;E<T;E++){const b=Array.isArray(M[E])?M[E]:[M[E]];for(let _=0,m=b.length;_<m;_++){const A=b[_];if(g(A,E,_,N)===!0){const I=A.__offset,F=Array.isArray(A.value)?A.value:[A.value];let V=0;for(let H=0;H<F.length;H++){const O=F[H],j=x(O);typeof O=="number"||typeof O=="boolean"?(A.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,I+V,A.__data)):O.isMatrix3?(A.__data[0]=O.elements[0],A.__data[1]=O.elements[1],A.__data[2]=O.elements[2],A.__data[3]=0,A.__data[4]=O.elements[3],A.__data[5]=O.elements[4],A.__data[6]=O.elements[5],A.__data[7]=0,A.__data[8]=O.elements[6],A.__data[9]=O.elements[7],A.__data[10]=O.elements[8],A.__data[11]=0):(O.toArray(A.__data,V),V+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(w,y,M,N){const E=w.value,T=y+"_"+M;if(N[T]===void 0)return typeof E=="number"||typeof E=="boolean"?N[T]=E:N[T]=E.clone(),!0;{const b=N[T];if(typeof E=="number"||typeof E=="boolean"){if(b!==E)return N[T]=E,!0}else if(b.equals(E)===!1)return b.copy(E),!0}return!1}function v(w){const y=w.uniforms;let M=0;const N=16;for(let T=0,b=y.length;T<b;T++){const _=Array.isArray(y[T])?y[T]:[y[T]];for(let m=0,A=_.length;m<A;m++){const I=_[m],F=Array.isArray(I.value)?I.value:[I.value];for(let V=0,H=F.length;V<H;V++){const O=F[V],j=x(O),q=M%N;q!==0&&N-q<j.boundary&&(M+=N-q),I.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=j.storage}}}const E=M%N;return E>0&&(M+=N-E),w.__size=M,w.__cache={},this}function x(w){const y={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function p(w){const y=w.target;y.removeEventListener("dispose",p);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const w in r)i.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Tb{constructor(e={}){const{canvas:t=gm(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),v=new Int32Array(4);let x=null,p=null;const f=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dt,this.toneMapping=yi,this.toneMappingExposure=1;const y=this;let M=!1,N=0,E=0,T=null,b=-1,_=null;const m=new ot,A=new ot;let I=null;const F=new Ne(0);let V=0,H=t.width,O=t.height,j=1,q=null,se=null;const te=new ot(0,0,H,O),fe=new ot(0,0,H,O);let Le=!1;const Ue=new nc;let J=!1,le=!1;const be=new je,me=new B,Q=new ot,P={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let D=!1;function k(){return T===null?j:1}let L=n;function ee(R,z){return t.getContext(R,z)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gl}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",ae,!1),L===null){const z="webgl2";if(L=ee(z,R),L===null)throw ee(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ne,xe,he,He,Se,Ee,U,C,W,ie,oe,re,Ce,de,_e,ze,ce,ve,Ke,Ie,ye,Oe,Ve,ut;function S(){ne=new Nv(L),ne.init(),Oe=new gb(L,ne),xe=new Cv(L,ne,e,Oe),he=new pb(L),He=new Fv(L),Se=new eb,Ee=new mb(L,ne,he,Se,xe,Oe,He),U=new Rv(y),C=new Dv(y),W=new Wm(L),Ve=new Tv(L,W),ie=new Uv(L,W,He,Ve),oe=new Bv(L,ie,W,He),Ke=new kv(L,xe,Ee),ze=new Pv(Se),re=new Q0(y,U,C,ne,xe,Ve,ze),Ce=new Eb(y,Se),de=new nb,_e=new lb(ne),ve=new Sv(y,U,C,he,oe,d,l),ce=new db(y,oe,xe),ut=new Sb(L,He,xe,he),Ie=new Av(L,ne,He),ye=new Ov(L,ne,He),He.programs=re.programs,y.capabilities=xe,y.extensions=ne,y.properties=Se,y.renderLists=de,y.shadowMap=ce,y.state=he,y.info=He}S();const X=new wb(y,L);this.xr=X,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const R=ne.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ne.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(H,O,!1))},this.getSize=function(R){return R.set(H,O)},this.setSize=function(R,z,Y=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=R,O=z,t.width=Math.floor(R*j),t.height=Math.floor(z*j),Y===!0&&(t.style.width=R+"px",t.style.height=z+"px"),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set(H*j,O*j).floor()},this.setDrawingBufferSize=function(R,z,Y){H=R,O=z,j=Y,t.width=Math.floor(R*Y),t.height=Math.floor(z*Y),this.setViewport(0,0,R,z)},this.getCurrentViewport=function(R){return R.copy(m)},this.getViewport=function(R){return R.copy(te)},this.setViewport=function(R,z,Y,$){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,z,Y,$),he.viewport(m.copy(te).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(fe)},this.setScissor=function(R,z,Y,$){R.isVector4?fe.set(R.x,R.y,R.z,R.w):fe.set(R,z,Y,$),he.scissor(A.copy(fe).multiplyScalar(j).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(R){he.setScissorTest(Le=R)},this.setOpaqueSort=function(R){q=R},this.setTransparentSort=function(R){se=R},this.getClearColor=function(R){return R.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(R=!0,z=!0,Y=!0){let $=0;if(R){let G=!1;if(T!==null){const ue=T.texture.format;G=ue===Zl||ue===$l||ue===Yl}if(G){const ue=T.texture.type,ge=ue===Zn||ue===zi||ue===fs||ue===Rr||ue===Xl||ue===ql,we=ve.getClearColor(),Me=ve.getClearAlpha(),De=we.r,ke=we.g,Re=we.b;ge?(g[0]=De,g[1]=ke,g[2]=Re,g[3]=Me,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=De,v[1]=ke,v[2]=Re,v[3]=Me,L.clearBufferiv(L.COLOR,0,v))}else $|=L.COLOR_BUFFER_BIT}z&&($|=L.DEPTH_BUFFER_BIT),Y&&($|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),de.dispose(),_e.dispose(),Se.dispose(),U.dispose(),C.dispose(),oe.dispose(),Ve.dispose(),ut.dispose(),re.dispose(),X.dispose(),X.removeEventListener("sessionstart",_t),X.removeEventListener("sessionend",ri),Lt.stop()};function K(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=He.autoReset,z=ce.enabled,Y=ce.autoUpdate,$=ce.needsUpdate,G=ce.type;S(),He.autoReset=R,ce.enabled=z,ce.autoUpdate=Y,ce.needsUpdate=$,ce.type=G}function ae(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Te(R){const z=R.target;z.removeEventListener("dispose",Te),Fe(z)}function Fe(R){gt(R),Se.remove(R)}function gt(R){const z=Se.get(R).programs;z!==void 0&&(z.forEach(function(Y){re.releaseProgram(Y)}),R.isShaderMaterial&&re.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,Y,$,G,ue){z===null&&(z=P);const ge=G.isMesh&&G.matrixWorld.determinant()<0,we=lf(R,z,Y,$,G);he.setMaterial($,ge);let Me=Y.index,De=1;if($.wireframe===!0){if(Me=ie.getWireframeAttribute(Y),Me===void 0)return;De=2}const ke=Y.drawRange,Re=Y.attributes.position;let Qe=ke.start*De,pt=(ke.start+ke.count)*De;ue!==null&&(Qe=Math.max(Qe,ue.start*De),pt=Math.min(pt,(ue.start+ue.count)*De)),Me!==null?(Qe=Math.max(Qe,0),pt=Math.min(pt,Me.count)):Re!=null&&(Qe=Math.max(Qe,0),pt=Math.min(pt,Re.count));const ft=pt-Qe;if(ft<0||ft===1/0)return;Ve.setup(G,$,we,Y,Me);let Jt,et=Ie;if(Me!==null&&(Jt=W.get(Me),et=ye,et.setIndex(Jt)),G.isMesh)$.wireframe===!0?(he.setLineWidth($.wireframeLinewidth*k()),et.setMode(L.LINES)):et.setMode(L.TRIANGLES);else if(G.isLine){let Ae=$.linewidth;Ae===void 0&&(Ae=1),he.setLineWidth(Ae*k()),G.isLineSegments?et.setMode(L.LINES):G.isLineLoop?et.setMode(L.LINE_LOOP):et.setMode(L.LINE_STRIP)}else G.isPoints?et.setMode(L.POINTS):G.isSprite&&et.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)et.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))et.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ae=G._multiDrawStarts,It=G._multiDrawCounts,tt=G._multiDrawCount,pn=Me?W.get(Me).bytesPerElement:1,Yi=Se.get($).currentProgram.getUniforms();for(let Qt=0;Qt<tt;Qt++)Yi.setValue(L,"_gl_DrawID",Qt),et.render(Ae[Qt]/pn,It[Qt])}else if(G.isInstancedMesh)et.renderInstances(Qe,ft,G.count);else if(Y.isInstancedBufferGeometry){const Ae=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,It=Math.min(Y.instanceCount,Ae);et.renderInstances(Qe,ft,It)}else et.render(Qe,ft)};function wt(R,z,Y){R.transparent===!0&&R.side===Sn&&R.forceSinglePass===!1?(R.side=Yt,R.needsUpdate=!0,Bs(R,z,Y),R.side=$n,R.needsUpdate=!0,Bs(R,z,Y),R.side=Sn):Bs(R,z,Y)}this.compile=function(R,z,Y=null){Y===null&&(Y=R),p=_e.get(Y),p.init(z),w.push(p),Y.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),R!==Y&&R.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const $=new Set;return R.traverse(function(G){const ue=G.material;if(ue)if(Array.isArray(ue))for(let ge=0;ge<ue.length;ge++){const we=ue[ge];wt(we,Y,G),$.add(we)}else wt(ue,Y,G),$.add(ue)}),w.pop(),p=null,$},this.compileAsync=function(R,z,Y=null){const $=this.compile(R,z,Y);return new Promise(G=>{function ue(){if($.forEach(function(ge){Se.get(ge).currentProgram.isReady()&&$.delete(ge)}),$.size===0){G(R);return}setTimeout(ue,10)}ne.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ye=null;function Mt(R){Ye&&Ye(R)}function _t(){Lt.stop()}function ri(){Lt.start()}const Lt=new Fd;Lt.setAnimationLoop(Mt),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(R){Ye=R,X.setAnimationLoop(R),R===null?Lt.stop():Lt.start()},X.addEventListener("sessionstart",_t),X.addEventListener("sessionend",ri),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(z),z=X.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,z,T),p=_e.get(R,w.length),p.init(z),w.push(p),be.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ue.setFromProjectionMatrix(be),le=this.localClippingEnabled,J=ze.init(this.clippingPlanes,le),x=de.get(R,f.length),x.init(),f.push(x),X.enabled===!0&&X.isPresenting===!0){const ue=y.xr.getDepthSensingMesh();ue!==null&&Un(ue,z,-1/0,y.sortObjects)}Un(R,z,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(q,se),D=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,D&&ve.addToRenderList(x,R),this.info.render.frame++,J===!0&&ze.beginShadows();const Y=p.state.shadowsArray;ce.render(Y,R,z),J===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=x.opaque,G=x.transmissive;if(p.setupLights(),z.isArrayCamera){const ue=z.cameras;if(G.length>0)for(let ge=0,we=ue.length;ge<we;ge++){const Me=ue[ge];qr($,G,R,Me)}D&&ve.render(R);for(let ge=0,we=ue.length;ge<we;ge++){const Me=ue[ge];Ei(x,R,Me,Me.viewport)}}else G.length>0&&qr($,G,R,z),D&&ve.render(R),Ei(x,R,z);T!==null&&(Ee.updateMultisampleRenderTarget(T),Ee.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(y,R,z),Ve.resetDefaultState(),b=-1,_=null,w.pop(),w.length>0?(p=w[w.length-1],J===!0&&ze.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function Un(R,z,Y,$){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)Y=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ue.intersectsSprite(R)){$&&Q.setFromMatrixPosition(R.matrixWorld).applyMatrix4(be);const ge=oe.update(R),we=R.material;we.visible&&x.push(R,ge,we,Y,Q.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ue.intersectsObject(R))){const ge=oe.update(R),we=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Q.copy(R.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Q.copy(ge.boundingSphere.center)),Q.applyMatrix4(R.matrixWorld).applyMatrix4(be)),Array.isArray(we)){const Me=ge.groups;for(let De=0,ke=Me.length;De<ke;De++){const Re=Me[De],Qe=we[Re.materialIndex];Qe&&Qe.visible&&x.push(R,ge,Qe,Y,Q.z,Re)}}else we.visible&&x.push(R,ge,we,Y,Q.z,null)}}const ue=R.children;for(let ge=0,we=ue.length;ge<we;ge++)Un(ue[ge],z,Y,$)}function Ei(R,z,Y,$){const G=R.opaque,ue=R.transmissive,ge=R.transparent;p.setupLightsView(Y),J===!0&&ze.setGlobalState(y.clippingPlanes,Y),$&&he.viewport(m.copy($)),G.length>0&&ks(G,z,Y),ue.length>0&&ks(ue,z,Y),ge.length>0&&ks(ge,z,Y),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function qr(R,z,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Jn(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?bn:Zn,minFilter:Cn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ue=p.state.transmissionRenderTarget[$.id],ge=$.viewport||m;ue.setSize(ge.z,ge.w);const we=y.getRenderTarget();y.setRenderTarget(ue),y.getClearColor(F),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),D?ve.render(Y):y.clear();const Me=y.toneMapping;y.toneMapping=yi;const De=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),J===!0&&ze.setGlobalState(y.clippingPlanes,$),ks(R,Y,$),Ee.updateMultisampleRenderTarget(ue),Ee.updateRenderTargetMipmap(ue),ne.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Re=0,Qe=z.length;Re<Qe;Re++){const pt=z[Re],ft=pt.object,Jt=pt.geometry,et=pt.material,Ae=pt.group;if(et.side===Sn&&ft.layers.test($.layers)){const It=et.side;et.side=Yt,et.needsUpdate=!0,Hc(ft,Y,$,Jt,et,Ae),et.side=It,et.needsUpdate=!0,ke=!0}}ke===!0&&(Ee.updateMultisampleRenderTarget(ue),Ee.updateRenderTargetMipmap(ue))}y.setRenderTarget(we),y.setClearColor(F,V),De!==void 0&&($.viewport=De),y.toneMapping=Me}function ks(R,z,Y){const $=z.isScene===!0?z.overrideMaterial:null;for(let G=0,ue=R.length;G<ue;G++){const ge=R[G],we=ge.object,Me=ge.geometry,De=$===null?ge.material:$,ke=ge.group;we.layers.test(Y.layers)&&Hc(we,z,Y,Me,De,ke)}}function Hc(R,z,Y,$,G,ue){R.onBeforeRender(y,z,Y,$,G,ue),R.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),G.transparent===!0&&G.side===Sn&&G.forceSinglePass===!1?(G.side=Yt,G.needsUpdate=!0,y.renderBufferDirect(Y,z,$,G,R,ue),G.side=$n,G.needsUpdate=!0,y.renderBufferDirect(Y,z,$,G,R,ue),G.side=Sn):y.renderBufferDirect(Y,z,$,G,R,ue),R.onAfterRender(y,z,Y,$,G,ue)}function Bs(R,z,Y){z.isScene!==!0&&(z=P);const $=Se.get(R),G=p.state.lights,ue=p.state.shadowsArray,ge=G.state.version,we=re.getParameters(R,G.state,ue,z,Y),Me=re.getProgramCacheKey(we);let De=$.programs;$.environment=R.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(R.isMeshStandardMaterial?C:U).get(R.envMap||$.environment),$.envMapRotation=$.environment!==null&&R.envMap===null?z.environmentRotation:R.envMapRotation,De===void 0&&(R.addEventListener("dispose",Te),De=new Map,$.programs=De);let ke=De.get(Me);if(ke!==void 0){if($.currentProgram===ke&&$.lightsStateVersion===ge)return Wc(R,we),ke}else we.uniforms=re.getUniforms(R),R.onBeforeCompile(we,y),ke=re.acquireProgram(we,Me),De.set(Me,ke),$.uniforms=we.uniforms;const Re=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Re.clippingPlanes=ze.uniform),Wc(R,we),$.needsLights=uf(R),$.lightsStateVersion=ge,$.needsLights&&(Re.ambientLightColor.value=G.state.ambient,Re.lightProbe.value=G.state.probe,Re.directionalLights.value=G.state.directional,Re.directionalLightShadows.value=G.state.directionalShadow,Re.spotLights.value=G.state.spot,Re.spotLightShadows.value=G.state.spotShadow,Re.rectAreaLights.value=G.state.rectArea,Re.ltc_1.value=G.state.rectAreaLTC1,Re.ltc_2.value=G.state.rectAreaLTC2,Re.pointLights.value=G.state.point,Re.pointLightShadows.value=G.state.pointShadow,Re.hemisphereLights.value=G.state.hemi,Re.directionalShadowMap.value=G.state.directionalShadowMap,Re.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Re.spotShadowMap.value=G.state.spotShadowMap,Re.spotLightMatrix.value=G.state.spotLightMatrix,Re.spotLightMap.value=G.state.spotLightMap,Re.pointShadowMap.value=G.state.pointShadowMap,Re.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=ke,$.uniformsList=null,ke}function Gc(R){if(R.uniformsList===null){const z=R.currentProgram.getUniforms();R.uniformsList=To.seqWithValue(z.seq,R.uniforms)}return R.uniformsList}function Wc(R,z){const Y=Se.get(R);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function lf(R,z,Y,$,G){z.isScene!==!0&&(z=P),Ee.resetTextureUnits();const ue=z.fog,ge=$.isMeshStandardMaterial?z.environment:null,we=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:xt,Me=($.isMeshStandardMaterial?C:U).get($.envMap||ge),De=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ke=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Re=!!Y.morphAttributes.position,Qe=!!Y.morphAttributes.normal,pt=!!Y.morphAttributes.color;let ft=yi;$.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ft=y.toneMapping);const Jt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,et=Jt!==void 0?Jt.length:0,Ae=Se.get($),It=p.state.lights;if(J===!0&&(le===!0||R!==_)){const an=R===_&&$.id===b;ze.setState($,R,an)}let tt=!1;$.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==It.state.version||Ae.outputColorSpace!==we||G.isBatchedMesh&&Ae.batching===!1||!G.isBatchedMesh&&Ae.batching===!0||G.isBatchedMesh&&Ae.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ae.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ae.instancing===!1||!G.isInstancedMesh&&Ae.instancing===!0||G.isSkinnedMesh&&Ae.skinning===!1||!G.isSkinnedMesh&&Ae.skinning===!0||G.isInstancedMesh&&Ae.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ae.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ae.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ae.instancingMorph===!1&&G.morphTexture!==null||Ae.envMap!==Me||$.fog===!0&&Ae.fog!==ue||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ze.numPlanes||Ae.numIntersection!==ze.numIntersection)||Ae.vertexAlphas!==De||Ae.vertexTangents!==ke||Ae.morphTargets!==Re||Ae.morphNormals!==Qe||Ae.morphColors!==pt||Ae.toneMapping!==ft||Ae.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Ae.__version=$.version);let pn=Ae.currentProgram;tt===!0&&(pn=Bs($,z,G));let Yi=!1,Qt=!1,ta=!1;const vt=pn.getUniforms(),si=Ae.uniforms;if(he.useProgram(pn.program)&&(Yi=!0,Qt=!0,ta=!0),$.id!==b&&(b=$.id,Qt=!0),Yi||_!==R){vt.setValue(L,"projectionMatrix",R.projectionMatrix),vt.setValue(L,"viewMatrix",R.matrixWorldInverse);const an=vt.map.cameraPosition;an!==void 0&&an.setValue(L,me.setFromMatrixPosition(R.matrixWorld)),xe.logarithmicDepthBuffer&&vt.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&vt.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),_!==R&&(_=R,Qt=!0,ta=!0)}if(G.isSkinnedMesh){vt.setOptional(L,G,"bindMatrix"),vt.setOptional(L,G,"bindMatrixInverse");const an=G.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),vt.setValue(L,"boneTexture",an.boneTexture,Ee))}G.isBatchedMesh&&(vt.setOptional(L,G,"batchingTexture"),vt.setValue(L,"batchingTexture",G._matricesTexture,Ee),vt.setOptional(L,G,"batchingIdTexture"),vt.setValue(L,"batchingIdTexture",G._indirectTexture,Ee),vt.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&vt.setValue(L,"batchingColorTexture",G._colorsTexture,Ee));const na=Y.morphAttributes;if((na.position!==void 0||na.normal!==void 0||na.color!==void 0)&&Ke.update(G,Y,pn),(Qt||Ae.receiveShadow!==G.receiveShadow)&&(Ae.receiveShadow=G.receiveShadow,vt.setValue(L,"receiveShadow",G.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(si.envMap.value=Me,si.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&z.environment!==null&&(si.envMapIntensity.value=z.environmentIntensity),Qt&&(vt.setValue(L,"toneMappingExposure",y.toneMappingExposure),Ae.needsLights&&cf(si,ta),ue&&$.fog===!0&&Ce.refreshFogUniforms(si,ue),Ce.refreshMaterialUniforms(si,$,j,O,p.state.transmissionRenderTarget[R.id]),To.upload(L,Gc(Ae),si,Ee)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(To.upload(L,Gc(Ae),si,Ee),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&vt.setValue(L,"center",G.center),vt.setValue(L,"modelViewMatrix",G.modelViewMatrix),vt.setValue(L,"normalMatrix",G.normalMatrix),vt.setValue(L,"modelMatrix",G.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const an=$.uniformsGroups;for(let ia=0,hf=an.length;ia<hf;ia++){const jc=an[ia];ut.update(jc,pn),ut.bind(jc,pn)}}return pn}function cf(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function uf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,z,Y){Se.get(R.texture).__webglTexture=z,Se.get(R.depthTexture).__webglTexture=Y;const $=Se.get(R);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Y===void 0,$.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,z){const Y=Se.get(R);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(R,z=0,Y=0){T=R,N=z,E=Y;let $=!0,G=null,ue=!1,ge=!1;if(R){const Me=Se.get(R);Me.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(L.FRAMEBUFFER,null),$=!1):Me.__webglFramebuffer===void 0?Ee.setupRenderTarget(R):Me.__hasExternalTextures&&Ee.rebindTextures(R,Se.get(R.texture).__webglTexture,Se.get(R.depthTexture).__webglTexture);const De=R.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ge=!0);const ke=Se.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ke[z])?G=ke[z][Y]:G=ke[z],ue=!0):R.samples>0&&Ee.useMultisampledRTT(R)===!1?G=Se.get(R).__webglMultisampledFramebuffer:Array.isArray(ke)?G=ke[Y]:G=ke,m.copy(R.viewport),A.copy(R.scissor),I=R.scissorTest}else m.copy(te).multiplyScalar(j).floor(),A.copy(fe).multiplyScalar(j).floor(),I=Le;if(he.bindFramebuffer(L.FRAMEBUFFER,G)&&$&&he.drawBuffers(R,G),he.viewport(m),he.scissor(A),he.setScissorTest(I),ue){const Me=Se.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,Me.__webglTexture,Y)}else if(ge){const Me=Se.get(R.texture),De=z||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.__webglTexture,Y||0,De)}b=-1},this.readRenderTargetPixels=function(R,z,Y,$,G,ue,ge){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Se.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){he.bindFramebuffer(L.FRAMEBUFFER,we);try{const Me=R.texture,De=Me.format,ke=Me.type;if(!xe.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-$&&Y>=0&&Y<=R.height-G&&L.readPixels(z,Y,$,G,Oe.convert(De),Oe.convert(ke),ue)}finally{const Me=T!==null?Se.get(T).__webglFramebuffer:null;he.bindFramebuffer(L.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(R,z,Y,$,G,ue,ge){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Se.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){he.bindFramebuffer(L.FRAMEBUFFER,we);try{const Me=R.texture,De=Me.format,ke=Me.type;if(!xe.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=R.width-$&&Y>=0&&Y<=R.height-G){const Re=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Re),L.bufferData(L.PIXEL_PACK_BUFFER,ue.byteLength,L.STREAM_READ),L.readPixels(z,Y,$,G,Oe.convert(De),Oe.convert(ke),0),L.flush();const Qe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await _m(L,Qe,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Re),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ue)}finally{L.deleteBuffer(Re),L.deleteSync(Qe)}return ue}}finally{const Me=T!==null?Se.get(T).__webglFramebuffer:null;he.bindFramebuffer(L.FRAMEBUFFER,Me)}}},this.copyFramebufferToTexture=function(R,z=null,Y=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,R=arguments[1]);const $=Math.pow(2,-Y),G=Math.floor(R.image.width*$),ue=Math.floor(R.image.height*$),ge=z!==null?z.x:0,we=z!==null?z.y:0;Ee.setTexture2D(R,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,ge,we,G,ue),he.unbindTexture()},this.copyTextureToTexture=function(R,z,Y=null,$=null,G=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,R=arguments[1],z=arguments[2],G=arguments[3]||0,Y=null);let ue,ge,we,Me,De,ke;Y!==null?(ue=Y.max.x-Y.min.x,ge=Y.max.y-Y.min.y,we=Y.min.x,Me=Y.min.y):(ue=R.image.width,ge=R.image.height,we=0,Me=0),$!==null?(De=$.x,ke=$.y):(De=0,ke=0);const Re=Oe.convert(z.format),Qe=Oe.convert(z.type);Ee.setTexture2D(z,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);const pt=L.getParameter(L.UNPACK_ROW_LENGTH),ft=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Jt=L.getParameter(L.UNPACK_SKIP_PIXELS),et=L.getParameter(L.UNPACK_SKIP_ROWS),Ae=L.getParameter(L.UNPACK_SKIP_IMAGES),It=R.isCompressedTexture?R.mipmaps[G]:R.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,It.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,It.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,we),L.pixelStorei(L.UNPACK_SKIP_ROWS,Me),R.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,G,De,ke,ue,ge,Re,Qe,It.data):R.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,G,De,ke,It.width,It.height,Re,It.data):L.texSubImage2D(L.TEXTURE_2D,G,De,ke,ue,ge,Re,Qe,It),L.pixelStorei(L.UNPACK_ROW_LENGTH,pt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Jt),L.pixelStorei(L.UNPACK_SKIP_ROWS,et),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ae),G===0&&z.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(R,z,Y=null,$=null,G=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,$=arguments[1]||null,R=arguments[2],z=arguments[3],G=arguments[4]||0);let ue,ge,we,Me,De,ke,Re,Qe,pt;const ft=R.isCompressedTexture?R.mipmaps[G]:R.image;Y!==null?(ue=Y.max.x-Y.min.x,ge=Y.max.y-Y.min.y,we=Y.max.z-Y.min.z,Me=Y.min.x,De=Y.min.y,ke=Y.min.z):(ue=ft.width,ge=ft.height,we=ft.depth,Me=0,De=0,ke=0),$!==null?(Re=$.x,Qe=$.y,pt=$.z):(Re=0,Qe=0,pt=0);const Jt=Oe.convert(z.format),et=Oe.convert(z.type);let Ae;if(z.isData3DTexture)Ee.setTexture3D(z,0),Ae=L.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)Ee.setTexture2DArray(z,0),Ae=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);const It=L.getParameter(L.UNPACK_ROW_LENGTH),tt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),pn=L.getParameter(L.UNPACK_SKIP_PIXELS),Yi=L.getParameter(L.UNPACK_SKIP_ROWS),Qt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ft.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Me),L.pixelStorei(L.UNPACK_SKIP_ROWS,De),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ke),R.isDataTexture||R.isData3DTexture?L.texSubImage3D(Ae,G,Re,Qe,pt,ue,ge,we,Jt,et,ft.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(Ae,G,Re,Qe,pt,ue,ge,we,Jt,ft.data):L.texSubImage3D(Ae,G,Re,Qe,pt,ue,ge,we,Jt,et,ft),L.pixelStorei(L.UNPACK_ROW_LENGTH,It),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,tt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,pn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Yi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Qt),G===0&&z.generateMipmaps&&L.generateMipmap(Ae),he.unbindTexture()},this.initRenderTarget=function(R){Se.get(R).__webglFramebuffer===void 0&&Ee.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Ee.setTextureCube(R,0):R.isData3DTexture?Ee.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ee.setTexture2DArray(R,0):Ee.setTexture2D(R,0),he.unbindTexture()},this.resetState=function(){N=0,E=0,T=null,he.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Jl?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===jo?"display-p3":"srgb"}}class Ab extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return tc("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ft=new B;class rc{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new rc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ju=new B,Xu=new ot,qu=new ot,Pb=new B,Ku=new je,lo=new B,Ra=new Dn,Yu=new je,La=new Es;class Rb extends zt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yc,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ti),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,lo),this.boundingBox.expandByPoint(lo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,lo),this.boundingSphere.expandByPoint(lo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ra.copy(this.boundingSphere),Ra.applyMatrix4(r),e.ray.intersectsSphere(Ra)!==!1&&(Yu.copy(r).invert(),La.copy(e.ray).applyMatrix4(Yu),!(this.boundingBox!==null&&La.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,La)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Yc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Hf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Xu.fromBufferAttribute(r.attributes.skinIndex,e),qu.fromBufferAttribute(r.attributes.skinWeight,e),ju.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=qu.getComponent(s);if(o!==0){const a=Xu.getComponent(s);Ku.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Pb.copy(ju).applyMatrix4(Ku),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Wd extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class sc extends Rt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Vt,u=Vt,h,d){super(null,o,a,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $u=new je,Lb=new je;class oc{constructor(e=[],t=[]){this.uuid=xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Lb;$u.multiplyMatrices(a,t[s]),$u.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new oc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new sc(t,e,e,hn,qt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Wd),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class Rl extends Nt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const mr=new je,Zu=new je,co=[],Ju=new ti,Ib=new je,Jr=new zt,Qr=new Dn;class Db extends zt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Ib)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),Ju.copy(e.boundingBox).applyMatrix4(mr),this.boundingBox.union(Ju)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mr),Qr.copy(e.boundingSphere).applyMatrix4(mr),this.boundingSphere.union(Qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Jr.geometry=this.geometry,Jr.material=this.material,Jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qr.copy(this.boundingSphere),Qr.applyMatrix4(n),e.ray.intersectsSphere(Qr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,mr),Zu.multiplyMatrices(n,mr),Jr.matrixWorld=Zu,Jr.raycast(e,co);for(let o=0,a=co.length;o<a;o++){const l=co[o];l.instanceId=s,l.object=this,t.push(l)}co.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new sc(new Float32Array(r*this.count),r,this.count,Kl,qt));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class jd extends yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Oo=new B,Fo=new B,Qu=new je,es=new Es,uo=new Dn,Ia=new B,eh=new B;class ac extends ct{constructor(e=new rn,t=new jd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Oo.fromBufferAttribute(t,r-1),Fo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Oo.distanceTo(Fo);e.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(r),uo.radius+=s,e.ray.intersectsSphere(uo)===!1)return;Qu.copy(r).invert(),es.copy(e.ray).applyMatrix4(Qu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const g=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let x=g,p=v-1;x<p;x+=c){const f=u.getX(x),w=u.getX(x+1),y=ho(this,e,es,l,f,w);y&&t.push(y)}if(this.isLineLoop){const x=u.getX(v-1),p=u.getX(g),f=ho(this,e,es,l,x,p);f&&t.push(f)}}else{const g=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let x=g,p=v-1;x<p;x+=c){const f=ho(this,e,es,l,x,x+1);f&&t.push(f)}if(this.isLineLoop){const x=ho(this,e,es,l,v-1,g);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ho(i,e,t,n,r,s){const o=i.geometry.attributes.position;if(Oo.fromBufferAttribute(o,r),Fo.fromBufferAttribute(o,s),t.distanceSqToSegment(Oo,Fo,Ia,eh)>n)return;Ia.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ia);if(!(l<e.near||l>e.far))return{distance:l,point:eh.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}const th=new B,nh=new B;class Nb extends ac{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)th.fromBufferAttribute(t,r),nh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+th.distanceTo(nh);e.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ub extends ac{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Xd extends yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ih=new je,Ll=new Es,po=new Dn,fo=new B;class Ob extends ct{constructor(e=new rn,t=new Xd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(r),po.radius+=s,e.ray.intersectsSphere(po)===!1)return;ih.copy(r).invert(),Ll.copy(e.ray).applyMatrix4(ih);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let v=d,x=g;v<x;v++){const p=c.getX(v);fo.fromBufferAttribute(h,p),rh(fo,p,l,r,e,t,this)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=d,x=g;v<x;v++)fo.fromBufferAttribute(h,v),rh(fo,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function rh(i,e,t,n,r,s,o){const a=Ll.distanceSqToPoint(i);if(a<t){const l=new B;Ll.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class lc extends rn{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),c(n),u(),this.setAttribute("position",new $t(s,3)),this.setAttribute("normal",new $t(s.slice(),3)),this.setAttribute("uv",new $t(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const y=new B,M=new B,N=new B;for(let E=0;E<t.length;E+=3)g(t[E+0],y),g(t[E+1],M),g(t[E+2],N),l(y,M,N,w)}function l(w,y,M,N){const E=N+1,T=[];for(let b=0;b<=E;b++){T[b]=[];const _=w.clone().lerp(M,b/E),m=y.clone().lerp(M,b/E),A=E-b;for(let I=0;I<=A;I++)I===0&&b===E?T[b][I]=_:T[b][I]=_.clone().lerp(m,I/A)}for(let b=0;b<E;b++)for(let _=0;_<2*(E-b)-1;_++){const m=Math.floor(_/2);_%2===0?(d(T[b][m+1]),d(T[b+1][m]),d(T[b][m])):(d(T[b][m+1]),d(T[b+1][m+1]),d(T[b+1][m]))}}function c(w){const y=new B;for(let M=0;M<s.length;M+=3)y.x=s[M+0],y.y=s[M+1],y.z=s[M+2],y.normalize().multiplyScalar(w),s[M+0]=y.x,s[M+1]=y.y,s[M+2]=y.z}function u(){const w=new B;for(let y=0;y<s.length;y+=3){w.x=s[y+0],w.y=s[y+1],w.z=s[y+2];const M=p(w)/2/Math.PI+.5,N=f(w)/Math.PI+.5;o.push(M,1-N)}v(),h()}function h(){for(let w=0;w<o.length;w+=6){const y=o[w+0],M=o[w+2],N=o[w+4],E=Math.max(y,M,N),T=Math.min(y,M,N);E>.9&&T<.1&&(y<.2&&(o[w+0]+=1),M<.2&&(o[w+2]+=1),N<.2&&(o[w+4]+=1))}}function d(w){s.push(w.x,w.y,w.z)}function g(w,y){const M=w*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function v(){const w=new B,y=new B,M=new B,N=new B,E=new Pe,T=new Pe,b=new Pe;for(let _=0,m=0;_<s.length;_+=9,m+=6){w.set(s[_+0],s[_+1],s[_+2]),y.set(s[_+3],s[_+4],s[_+5]),M.set(s[_+6],s[_+7],s[_+8]),E.set(o[m+0],o[m+1]),T.set(o[m+2],o[m+3]),b.set(o[m+4],o[m+5]),N.copy(w).add(y).add(M).divideScalar(3);const A=p(N);x(E,m+0,w,A),x(T,m+2,y,A),x(b,m+4,M,A)}}function x(w,y,M,N){N<0&&w.x===1&&(o[y]=w.x-1),M.x===0&&M.z===0&&(o[y]=N/2/Math.PI+.5)}function p(w){return Math.atan2(w.z,-w.x)}function f(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.vertices,e.indices,e.radius,e.details)}}class cc extends lc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new cc(e.radius,e.detail)}}class Fb extends nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class uc extends yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sd,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mn extends uc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function mo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function kb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Bb(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function sh(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function qd(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class As{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Vb extends As{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$c,endingEnd:$c}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zc:s=e,a=2*t-n;break;case Jc:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zc:o=e,l=2*n-t;break;case Jc:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,g=this._weightNext,v=(n-t)/(r-t),x=v*v,p=x*v,f=-d*p+2*d*x-d*v,w=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*v+1,y=(-1-g)*p+(1.5+g)*x+.5*v,M=g*p-g*x;for(let N=0;N!==a;++N)s[N]=f*o[u+N]+w*o[c+N]+y*o[l+N]+M*o[h+N];return s}}class zb extends As{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}}class Hb extends As{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Nn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=mo(t,this.TimeBufferType),this.values=mo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:mo(e.times,Array),values:mo(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ms:t=this.InterpolantFactoryMethodDiscrete;break;case gs:t=this.InterpolantFactoryMethodLinear;break;case ra:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ms;case this.InterpolantFactoryMethodLinear:return gs;case this.InterpolantFactoryMethodSmooth:return ra}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&kb(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ra,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*n,d=h-n,g=h+n;for(let v=0;v!==n;++v){const x=t[h+v];if(x!==t[d+v]||x!==t[g+v]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let g=0;g!==n;++g)t[d+g]=t[h+g]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=gs;class Vr extends Nn{constructor(e,t,n){super(e,t,n)}}Vr.prototype.ValueTypeName="bool";Vr.prototype.ValueBufferType=Array;Vr.prototype.DefaultInterpolation=ms;Vr.prototype.InterpolantFactoryMethodLinear=void 0;Vr.prototype.InterpolantFactoryMethodSmooth=void 0;class Kd extends Nn{}Kd.prototype.ValueTypeName="color";class Nr extends Nn{}Nr.prototype.ValueTypeName="number";class Gb extends As{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)wn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Ur extends Nn{InterpolantFactoryMethodLinear(e){return new Gb(this.times,this.values,this.getValueSize(),e)}}Ur.prototype.ValueTypeName="quaternion";Ur.prototype.InterpolantFactoryMethodSmooth=void 0;class zr extends Nn{constructor(e,t,n){super(e,t,n)}}zr.prototype.ValueTypeName="string";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=ms;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;class Or extends Nn{}Or.prototype.ValueTypeName="vector";class Wb{constructor(e="",t=-1,n=[],r=Gf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=xn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Xb(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Nn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Bb(l);l=sh(l,1,u),c=sh(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Nr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=r[h];d||(r[h]=d=[]),d.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,g,v,x){if(g.length!==0){const p=[],f=[];qd(g,p,f,v),p.length!==0&&x.push(new h(d,p,f))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const g={};let v;for(v=0;v<d.length;v++)if(d[v].morphTargets)for(let x=0;x<d[v].morphTargets.length;x++)g[d[v].morphTargets[x]]=-1;for(const x in g){const p=[],f=[];for(let w=0;w!==d[v].morphTargets.length;++w){const y=d[v];p.push(y.time),f.push(y.morphTarget===x?1:0)}r.push(new Nr(".morphTargetInfluence["+x+"]",p,f))}l=g.length*o}else{const g=".bones["+t[h].name+"]";n(Or,g+".position",d,"pos",r),n(Ur,g+".quaternion",d,"rot",r),n(Or,g+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function jb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Nr;case"vector":case"vector2":case"vector3":case"vector4":return Or;case"color":return Kd;case"quaternion":return Ur;case"bool":case"boolean":return Vr;case"string":return zr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Xb(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=jb(i.type);if(i.times===void 0){const t=[],n=[];qd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const bi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class qb{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const g=c[h],v=c[h+1];if(g.global&&(g.lastIndex=0),g.test(u))return v}return null}}}const Kb=new qb;class ni{constructor(e){this.manager=e!==void 0?e:Kb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ni.DEFAULT_MATERIAL_NAME="__DEFAULT";const zn={};class Yb extends Error{constructor(e,t){super(e),this.response=t}}class Fr extends ni{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=bi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(zn[e]!==void 0){zn[e].push({onLoad:t,onProgress:n,onError:r});return}zn[e]=[],zn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=zn[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),g=d?parseInt(d):0,v=g!==0;let x=0;const p=new ReadableStream({start(f){w();function w(){h.read().then(({done:y,value:M})=>{if(y)f.close();else{x+=M.byteLength;const N=new ProgressEvent("progress",{lengthComputable:v,loaded:x,total:g});for(let E=0,T=u.length;E<T;E++){const b=u[E];b.onProgress&&b.onProgress(N)}f.enqueue(M),w()}},y=>{f.error(y)})}}});return new Response(p)}else throw new Yb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,g=new TextDecoder(d);return c.arrayBuffer().then(v=>g.decode(v))}}}).then(c=>{bi.add(e,c);const u=zn[e];delete zn[e];for(let h=0,d=u.length;h<d;h++){const g=u[h];g.onLoad&&g.onLoad(c)}}).catch(c=>{const u=zn[e];if(u===void 0)throw this.manager.itemError(e),c;delete zn[e];for(let h=0,d=u.length;h<d;h++){const g=u[h];g.onError&&g.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class $b extends ni{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=bi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=_s("img");function l(){u(),bi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Zb extends ni{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new sc,a=new Fr(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:An,o.wrapT=c.wrapT!==void 0?c.wrapT:An,o.magFilter=c.magFilter!==void 0?c.magFilter:Pt,o.minFilter=c.minFilter!==void 0?c.minFilter:Pt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Cn),c.mipmapCount===1&&(o.minFilter=Pt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,r),o}}class Jb extends ni{constructor(e){super(e)}load(e,t,n,r){const s=new Rt,o=new $b(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class hc extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Da=new je,oh=new B,ah=new B;class dc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nc,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;oh.setFromMatrixPosition(e.matrixWorld),t.position.copy(oh),ah.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ah),t.updateMatrixWorld(),Da.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Da),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Da)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Qb extends dc{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ir*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ex extends hc{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Qb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const lh=new je,ts=new B,Na=new B;class tx extends dc{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ts.setFromMatrixPosition(e.matrixWorld),n.position.copy(ts),Na.copy(n.position),Na.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Na),n.updateMatrixWorld(),r.makeTranslation(-ts.x,-ts.y,-ts.z),lh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lh)}}class nx extends hc{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new tx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ix extends dc{constructor(){super(new qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yd extends hc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new ix}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ps{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class rx extends ni{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=bi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return bi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),bi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});bi.add(e,l),s.manager.itemStart(e)}}let go;class $d{static getContext(){return go===void 0&&(go=new(window.AudioContext||window.webkitAudioContext)),go}static setContext(e){go=e}}class sx extends ni{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new Fr(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{const c=l.slice(0);$d.getContext().decodeAudioData(c,function(h){t(h)}).catch(a)}catch(c){a(c)}},n,r);function a(l){r?r(l):console.error(l),s.manager.itemError(e)}}}class Zd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ch(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ch();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ch(){return(typeof performance>"u"?Date:performance).now()}const Li=new B,uh=new wn,ox=new B,Ii=new B;class ax extends ct{constructor(){super(),this.type="AudioListener",this.context=$d.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Zd}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Li,uh,ox),Ii.set(0,0,-1).applyQuaternion(uh),t.positionX){const r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Li.x,r),t.positionY.linearRampToValueAtTime(Li.y,r),t.positionZ.linearRampToValueAtTime(Li.z,r),t.forwardX.linearRampToValueAtTime(Ii.x,r),t.forwardY.linearRampToValueAtTime(Ii.y,r),t.forwardZ.linearRampToValueAtTime(Ii.z,r),t.upX.linearRampToValueAtTime(n.x,r),t.upY.linearRampToValueAtTime(n.y,r),t.upZ.linearRampToValueAtTime(n.z,r)}else t.setPosition(Li.x,Li.y,Li.z),t.setOrientation(Ii.x,Ii.y,Ii.z,n.x,n.y,n.z)}}class lx extends ct{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class cx{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}const pc="\\[\\]\\.:\\/",ux=new RegExp("["+pc+"]","g"),fc="[^"+pc+"]",hx="[^"+pc.replace("\\.","")+"]",dx=/((?:WC+[\/:])*)/.source.replace("WC",fc),px=/(WCOD+)?/.source.replace("WCOD",hx),fx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fc),mx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fc),gx=new RegExp("^"+dx+px+fx+mx+"$"),_x=["material","materials","bones","map"];class vx{constructor(e,t,n){const r=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class rt{constructor(e,t,n){this.path=t,this.parsedPath=n||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,n):new rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ux,"")}static parseTrackName(e){const t=gx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);_x.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=vx;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Xt{constructor(e){this.value=e}clone(){return new Xt(this.value.clone===void 0?this.value:this.value.clone())}}class hh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gl);/*! Tweakpane 4.0.5 (c) 2016 cocopon, licensed under the MIT license. */function lt(i){return i==null}function mc(i){return i!==null&&typeof i=="object"}function Il(i){return i!==null&&typeof i=="object"}function bx(i,e){if(i.length!==e.length)return!1;for(let t=0;t<i.length;t++)if(i[t]!==e[t])return!1;return!0}function Hi(i,e){return Array.from(new Set([...Object.keys(i),...Object.keys(e)])).reduce((n,r)=>{const s=i[r],o=e[r];return Il(s)&&Il(o)?Object.assign(Object.assign({},n),{[r]:Hi(s,o)}):Object.assign(Object.assign({},n),{[r]:r in e?o:s})},{})}function gc(i){return mc(i)?"target"in i:!1}const xx={alreadydisposed:()=>"View has been already disposed",invalidparams:i=>`Invalid parameters for '${i.name}'`,nomatchingcontroller:i=>`No matching controller for '${i.key}'`,nomatchingview:i=>`No matching view for '${JSON.stringify(i.params)}'`,notbindable:()=>"Value is not bindable",notcompatible:i=>`Not compatible with  plugin '${i.id}'`,propertynotfound:i=>`Property '${i.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class mt{static alreadyDisposed(){return new mt({type:"alreadydisposed"})}static notBindable(){return new mt({type:"notbindable"})}static notCompatible(e,t){return new mt({type:"notcompatible",context:{id:`${e}.${t}`}})}static propertyNotFound(e){return new mt({type:"propertynotfound",context:{name:e}})}static shouldNeverHappen(){return new mt({type:"shouldneverhappen"})}constructor(e){var t;this.message=(t=xx[e.type](e.context))!==null&&t!==void 0?t:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=e.type}toString(){return this.message}}class ko{constructor(e,t){this.obj_=e,this.key=t}static isBindable(e){return!(e===null||typeof e!="object"&&typeof e!="function")}read(){return this.obj_[this.key]}write(e){this.obj_[this.key]=e}writeProperty(e,t){const n=this.read();if(!ko.isBindable(n))throw mt.notBindable();if(!(e in n))throw mt.propertyNotFound(e);n[e]=t}}class yt{constructor(){this.observers_={}}on(e,t,n){var r;let s=this.observers_[e];return s||(s=this.observers_[e]=[]),s.push({handler:t,key:(r=n==null?void 0:n.key)!==null&&r!==void 0?r:t}),this}off(e,t){const n=this.observers_[e];return n&&(this.observers_[e]=n.filter(r=>r.key!==t)),this}emit(e,t){const n=this.observers_[e];n&&n.forEach(r=>{r.handler(t)})}}class yx{constructor(e,t){var n;this.constraint_=t==null?void 0:t.constraint,this.equals_=(n=t==null?void 0:t.equals)!==null&&n!==void 0?n:(r,s)=>r===s,this.emitter=new yt,this.rawValue_=e}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const n=t??{forceEmit:!1,last:!0},r=this.constraint_?this.constraint_.constrain(e):e,s=this.rawValue_;this.equals_(s,r)&&!n.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=r,this.emitter.emit("change",{options:n,previousRawValue:s,rawValue:r,sender:this}))}}class wx{constructor(e){this.emitter=new yt,this.value_=e}get rawValue(){return this.value_}set rawValue(e){this.setRawValue(e,{forceEmit:!1,last:!0})}setRawValue(e,t){const n=t??{forceEmit:!1,last:!0},r=this.value_;r===e&&!n.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=e,this.emitter.emit("change",{options:n,previousRawValue:r,rawValue:this.value_,sender:this}))}}class Mx{constructor(e){this.emitter=new yt,this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.value_=e,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_)}get rawValue(){return this.value_.rawValue}onValueBeforeChange_(e){this.emitter.emit("beforechange",Object.assign(Object.assign({},e),{sender:this}))}onValueChange_(e){this.emitter.emit("change",Object.assign(Object.assign({},e),{sender:this}))}}function ht(i,e){const t=e==null?void 0:e.constraint,n=e==null?void 0:e.equals;return!t&&!n?new wx(i):new yx(i,e)}function Ex(i){return[new Mx(i),(e,t)=>{i.setRawValue(e,t)}]}class Xe{constructor(e){this.emitter=new yt,this.valMap_=e;for(const t in this.valMap_)this.valMap_[t].emitter.on("change",()=>{this.emitter.emit("change",{key:t,sender:this})})}static createCore(e){return Object.keys(e).reduce((n,r)=>Object.assign(n,{[r]:ht(e[r])}),{})}static fromObject(e){const t=this.createCore(e);return new Xe(t)}get(e){return this.valMap_[e].rawValue}set(e,t){this.valMap_[e].rawValue=t}value(e){return this.valMap_[e]}}class Cs{constructor(e){this.values=Xe.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),n=this.values.get("min");return Math.min(Math.max(e,n),t)}}class Sx{constructor(e){this.values=Xe.fromObject({max:e.max,min:e.min})}constrain(e){const t=this.values.get("max"),n=this.values.get("min");let r=e;return lt(n)||(r=Math.max(r,n)),lt(t)||(r=Math.min(r,t)),r}}class Tx{constructor(e,t=0){this.step=e,this.origin=t}constrain(e){const t=this.origin%this.step,n=Math.round((e-t)/this.step);return t+n*this.step}}class Ax{constructor(e){this.text=e}evaluate(){return Number(this.text)}toString(){return this.text}}const Cx={"**":(i,e)=>Math.pow(i,e),"*":(i,e)=>i*e,"/":(i,e)=>i/e,"%":(i,e)=>i%e,"+":(i,e)=>i+e,"-":(i,e)=>i-e,"<<":(i,e)=>i<<e,">>":(i,e)=>i>>e,">>>":(i,e)=>i>>>e,"&":(i,e)=>i&e,"^":(i,e)=>i^e,"|":(i,e)=>i|e};class Px{constructor(e,t,n){this.left=t,this.operator=e,this.right=n}evaluate(){const e=Cx[this.operator];if(!e)throw new Error(`unexpected binary operator: '${this.operator}`);return e(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const Rx={"+":i=>i,"-":i=>-i,"~":i=>~i};class Lx{constructor(e,t){this.operator=e,this.expression=t}evaluate(){const e=Rx[this.operator];if(!e)throw new Error(`unexpected unary operator: '${this.operator}`);return e(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function _c(i){return(e,t)=>{for(let n=0;n<i.length;n++){const r=i[n](e,t);if(r!=="")return r}return""}}function vs(i,e){var t;const n=i.substr(e).match(/^\s+/);return(t=n&&n[0])!==null&&t!==void 0?t:""}function Ix(i,e){const t=i.substr(e,1);return t.match(/^[1-9]$/)?t:""}function bs(i,e){var t;const n=i.substr(e).match(/^[0-9]+/);return(t=n&&n[0])!==null&&t!==void 0?t:""}function Dx(i,e){const t=bs(i,e);if(t!=="")return t;const n=i.substr(e,1);if(e+=1,n!=="-"&&n!=="+")return"";const r=bs(i,e);return r===""?"":n+r}function vc(i,e){const t=i.substr(e,1);if(e+=1,t.toLowerCase()!=="e")return"";const n=Dx(i,e);return n===""?"":t+n}function Jd(i,e){const t=i.substr(e,1);if(t==="0")return t;const n=Ix(i,e);return e+=n.length,n===""?"":n+bs(i,e)}function Nx(i,e){const t=Jd(i,e);if(e+=t.length,t==="")return"";const n=i.substr(e,1);if(e+=n.length,n!==".")return"";const r=bs(i,e);return e+=r.length,t+n+r+vc(i,e)}function Ux(i,e){const t=i.substr(e,1);if(e+=t.length,t!==".")return"";const n=bs(i,e);return e+=n.length,n===""?"":t+n+vc(i,e)}function Ox(i,e){const t=Jd(i,e);return e+=t.length,t===""?"":t+vc(i,e)}const Fx=_c([Nx,Ux,Ox]);function kx(i,e){var t;const n=i.substr(e).match(/^[01]+/);return(t=n&&n[0])!==null&&t!==void 0?t:""}function Bx(i,e){const t=i.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0b")return"";const n=kx(i,e);return n===""?"":t+n}function Vx(i,e){var t;const n=i.substr(e).match(/^[0-7]+/);return(t=n&&n[0])!==null&&t!==void 0?t:""}function zx(i,e){const t=i.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0o")return"";const n=Vx(i,e);return n===""?"":t+n}function Hx(i,e){var t;const n=i.substr(e).match(/^[0-9a-f]+/i);return(t=n&&n[0])!==null&&t!==void 0?t:""}function Gx(i,e){const t=i.substr(e,2);if(e+=t.length,t.toLowerCase()!=="0x")return"";const n=Hx(i,e);return n===""?"":t+n}const Wx=_c([Bx,zx,Gx]),jx=_c([Wx,Fx]);function Xx(i,e){const t=jx(i,e);return e+=t.length,t===""?null:{evaluable:new Ax(t),cursor:e}}function qx(i,e){const t=i.substr(e,1);if(e+=t.length,t!=="(")return null;const n=ep(i,e);if(!n)return null;e=n.cursor,e+=vs(i,e).length;const r=i.substr(e,1);return e+=r.length,r!==")"?null:{evaluable:n.evaluable,cursor:e}}function Kx(i,e){var t;return(t=Xx(i,e))!==null&&t!==void 0?t:qx(i,e)}function Qd(i,e){const t=Kx(i,e);if(t)return t;const n=i.substr(e,1);if(e+=n.length,n!=="+"&&n!=="-"&&n!=="~")return null;const r=Qd(i,e);return r?(e=r.cursor,{cursor:e,evaluable:new Lx(n,r.evaluable)}):null}function Yx(i,e,t){t+=vs(e,t).length;const n=i.filter(r=>e.startsWith(r,t))[0];return n?(t+=n.length,t+=vs(e,t).length,{cursor:t,operator:n}):null}function $x(i,e){return(t,n)=>{const r=i(t,n);if(!r)return null;n=r.cursor;let s=r.evaluable;for(;;){const o=Yx(e,t,n);if(!o)break;n=o.cursor;const a=i(t,n);if(!a)return null;n=a.cursor,s=new Px(o.operator,s,a.evaluable)}return s?{cursor:n,evaluable:s}:null}}const Zx=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((i,e)=>$x(i,e),Qd);function ep(i,e){return e+=vs(i,e).length,Zx(i,e)}function Jx(i){const e=ep(i,0);return!e||e.cursor+vs(i,e.cursor).length!==i.length?null:e.evaluable}function Qn(i){var e;const t=Jx(i);return(e=t==null?void 0:t.evaluate())!==null&&e!==void 0?e:null}function tp(i){if(typeof i=="number")return i;if(typeof i=="string"){const e=Qn(i);if(!lt(e))return e}return 0}function Qx(i){return String(i)}function Zt(i){return e=>e.toFixed(Math.max(Math.min(i,20),0))}function nt(i,e,t,n,r){const s=(i-e)/(t-e);return n+s*(r-n)}function dh(i){return String(i.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function Et(i,e,t){return Math.min(Math.max(i,e),t)}function np(i,e){return(i%e+e)%e}function ey(i,e){return lt(i.step)?Math.max(dh(e),2):dh(i.step)}function ip(i){var e;return(e=i.step)!==null&&e!==void 0?e:1}function rp(i,e){var t;const n=Math.abs((t=i.step)!==null&&t!==void 0?t:e);return n===0?.1:Math.pow(10,Math.floor(Math.log10(n))-1)}function sp(i,e){return lt(i.step)?null:new Tx(i.step,e)}function op(i){return!lt(i.max)&&!lt(i.min)?new Cs({max:i.max,min:i.min}):!lt(i.max)||!lt(i.min)?new Sx({max:i.max,min:i.min}):null}function ap(i,e){var t,n,r;return{formatter:(t=i.format)!==null&&t!==void 0?t:Zt(ey(i,e)),keyScale:(n=i.keyScale)!==null&&n!==void 0?n:ip(i),pointerScale:(r=i.pointerScale)!==null&&r!==void 0?r:rp(i,e)}}function lp(i){return{format:i.optional.function,keyScale:i.optional.number,max:i.optional.number,min:i.optional.number,pointerScale:i.optional.number,step:i.optional.number}}function bc(i){return{constraint:i.constraint,textProps:Xe.fromObject(ap(i.params,i.initialValue))}}class Xi{constructor(e){this.controller=e}get element(){return this.controller.view.element}get disabled(){return this.controller.viewProps.get("disabled")}set disabled(e){this.controller.viewProps.set("disabled",e)}get hidden(){return this.controller.viewProps.get("hidden")}set hidden(e){this.controller.viewProps.set("hidden",e)}dispose(){this.controller.viewProps.set("disposed",!0)}importState(e){return this.controller.importState(e)}exportState(){return this.controller.exportState()}}class Yo{constructor(e){this.target=e}}class Ps extends Yo{constructor(e,t,n){super(e),this.value=t,this.last=n??!0}}class ty extends Yo{constructor(e,t){super(e),this.expanded=t}}class ny extends Yo{constructor(e,t){super(e),this.index=t}}class iy extends Yo{constructor(e,t){super(e),this.native=t}}class xs extends Xi{constructor(e){super(e),this.onValueChange_=this.onValueChange_.bind(this),this.emitter_=new yt,this.controller.value.emitter.on("change",this.onValueChange_)}get label(){return this.controller.labelController.props.get("label")}set label(e){this.controller.labelController.props.set("label",e)}get key(){return this.controller.value.binding.target.key}get tag(){return this.controller.tag}set tag(e){this.controller.tag=e}on(e,t){const n=t.bind(this);return this.emitter_.on(e,r=>{n(r)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}refresh(){this.controller.value.fetch()}onValueChange_(e){const t=this.controller.value;this.emitter_.emit("change",new Ps(this,t.binding.target.read(),e.options.last))}}class ry{constructor(e,t){this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=t,this.value_=e,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.emitter=new yt}get rawValue(){return this.value_.rawValue}set rawValue(e){this.value_.rawValue=e}setRawValue(e,t){this.value_.setRawValue(e,t)}fetch(){this.value_.rawValue=this.binding.read()}push(){this.binding.write(this.value_.rawValue)}onValueBeforeChange_(e){this.emitter.emit("beforechange",Object.assign(Object.assign({},e),{sender:this}))}onValueChange_(e){this.push(),this.emitter.emit("change",Object.assign(Object.assign({},e),{sender:this}))}}function sy(i){if(!("binding"in i))return!1;const e=i.binding;return gc(e)&&"read"in e&&"write"in e}function oy(i,e){const n=Object.keys(e).reduce((r,s)=>{if(r===void 0)return;const o=e[s],a=o(i[s]);return a.succeeded?Object.assign(Object.assign({},r),{[s]:a.value}):void 0},{});return n}function ay(i,e){return i.reduce((t,n)=>{if(t===void 0)return;const r=e(n);if(!(!r.succeeded||r.value===void 0))return[...t,r.value]},[])}function ly(i){return i===null?!1:typeof i=="object"}function Hn(i){return e=>t=>{if(!e&&t===void 0)return{succeeded:!1,value:void 0};if(e&&t===void 0)return{succeeded:!0,value:void 0};const n=i(t);return n!==void 0?{succeeded:!0,value:n}:{succeeded:!1,value:void 0}}}function ph(i){return{custom:e=>Hn(e)(i),boolean:Hn(e=>typeof e=="boolean"?e:void 0)(i),number:Hn(e=>typeof e=="number"?e:void 0)(i),string:Hn(e=>typeof e=="string"?e:void 0)(i),function:Hn(e=>typeof e=="function"?e:void 0)(i),constant:e=>Hn(t=>t===e?e:void 0)(i),raw:Hn(e=>e)(i),object:e=>Hn(t=>{if(ly(t))return oy(t,e)})(i),array:e=>Hn(t=>{if(Array.isArray(t))return ay(t,e)})(i)}}const Dl={optional:ph(!0),required:ph(!1)};function dt(i,e){const t=e(Dl),n=Dl.required.object(t)(i);return n.succeeded?n.value:void 0}function sn(i,e,t,n){if(e&&!e(i))return!1;const r=dt(i,t);return r?n(r):!1}function on(i,e){var t;return Hi((t=i==null?void 0:i())!==null&&t!==void 0?t:{},e)}function Vi(i){return"value"in i}function cp(i){if(!mc(i)||!("binding"in i))return!1;const e=i.binding;return gc(e)}const Pn="http://www.w3.org/2000/svg";function Bo(i){i.offsetHeight}function cy(i,e){const t=i.style.transition;i.style.transition="none",e(),i.style.transition=t}function xc(i){return i.ontouchstart!==void 0}function uy(){return globalThis}function hy(){return uy().document}function dy(i){const e=i.ownerDocument.defaultView;return e&&"document"in e?i.getContext("2d",{willReadFrequently:!0}):null}const py={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function $o(i,e){const t=i.createElementNS(Pn,"svg");return t.innerHTML=py[e],t}function up(i,e,t){i.insertBefore(e,i.children[t])}function yc(i){i.parentElement&&i.parentElement.removeChild(i)}function hp(i){for(;i.children.length>0;)i.removeChild(i.children[0])}function fy(i){for(;i.childNodes.length>0;)i.removeChild(i.childNodes[0])}function dp(i){return i.relatedTarget?i.relatedTarget:"explicitOriginalTarget"in i?i.explicitOriginalTarget:null}function Yn(i,e){i.emitter.on("change",t=>{e(t.rawValue)}),e(i.rawValue)}function Ln(i,e,t){Yn(i.value(e),t)}const my="tp";function $e(i){return(t,n)=>[my,"-",i,"v",t?`_${t}`:"",n?`-${n}`:""].join("")}const ns=$e("lbl");function gy(i,e){const t=i.createDocumentFragment();return e.split(`
`).map(r=>i.createTextNode(r)).forEach((r,s)=>{s>0&&t.appendChild(i.createElement("br")),t.appendChild(r)}),t}class pp{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(ns()),t.viewProps.bindClassModifiers(this.element);const n=e.createElement("div");n.classList.add(ns("l")),Ln(t.props,"label",s=>{lt(s)?this.element.classList.add(ns(void 0,"nol")):(this.element.classList.remove(ns(void 0,"nol")),fy(n),n.appendChild(gy(e,s)))}),this.element.appendChild(n),this.labelElement=n;const r=e.createElement("div");r.classList.add(ns("v")),this.element.appendChild(r),this.valueElement=r}}class fp{constructor(e,t){this.props=t.props,this.valueController=t.valueController,this.viewProps=t.valueController.viewProps,this.view=new pp(e,{props:t.props,viewProps:this.viewProps}),this.view.valueElement.appendChild(this.valueController.view.element)}importProps(e){return sn(e,null,t=>({label:t.optional.string}),t=>(this.props.set("label",t.label),!0))}exportProps(){return on(null,{label:this.props.get("label")})}}function _y(){return["veryfirst","first","last","verylast"]}const fh=$e(""),mh={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class Zo{constructor(e){this.parent_=null,this.blade=e.blade,this.view=e.view,this.viewProps=e.viewProps;const t=this.view.element;this.blade.value("positions").emitter.on("change",()=>{_y().forEach(n=>{t.classList.remove(fh(void 0,mh[n]))}),this.blade.get("positions").forEach(n=>{t.classList.add(fh(void 0,mh[n]))})}),this.viewProps.handleDispose(()=>{yc(t)})}get parent(){return this.parent_}set parent(e){this.parent_=e,this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}importState(e){return sn(e,null,t=>({disabled:t.required.boolean,hidden:t.required.boolean}),t=>(this.viewProps.importState(t),!0))}exportState(){return on(null,Object.assign({},this.viewProps.exportState()))}}class Gi extends Zo{constructor(e,t){if(t.value!==t.valueController.value)throw mt.shouldNeverHappen();const n=t.valueController.viewProps,r=new fp(e,{blade:t.blade,props:t.props,valueController:t.valueController});super(Object.assign(Object.assign({},t),{view:new pp(e,{props:t.props,viewProps:n}),viewProps:n})),this.labelController=r,this.value=t.value,this.valueController=t.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}importState(e){return sn(e,t=>{var n,r,s;return super.importState(t)&&this.labelController.importProps(t)&&((s=(r=(n=this.valueController).importProps)===null||r===void 0?void 0:r.call(n,e))!==null&&s!==void 0?s:!0)},t=>({value:t.optional.raw}),t=>(t.value&&(this.value.rawValue=t.value),!0))}exportState(){var e,t,n;return on(()=>super.exportState(),Object.assign(Object.assign({value:this.value.rawValue},this.labelController.exportProps()),(n=(t=(e=this.valueController).exportProps)===null||t===void 0?void 0:t.call(e))!==null&&n!==void 0?n:{}))}}function gh(i){const e=Object.assign({},i);return delete e.value,e}class mp extends Gi{constructor(e,t){super(e,t),this.tag=t.tag}importState(e){return sn(e,t=>super.importState(gh(e)),t=>({tag:t.optional.string}),t=>(this.tag=t.tag,!0))}exportState(){return on(()=>gh(super.exportState()),{binding:{key:this.value.binding.target.key,value:this.value.binding.target.read()},tag:this.tag})}}function vy(i){return Vi(i)&&cp(i.value)}class by extends mp{importState(e){return sn(e,t=>super.importState(t),t=>({binding:t.required.object({value:t.required.raw})}),t=>(this.value.binding.inject(t.binding.value),this.value.fetch(),!0))}}function xy(i){return Vi(i)&&sy(i.value)}function gp(i,e){for(;i.length<e;)i.push(void 0)}function yy(i){const e=[];return gp(e,i),e}function wy(i){const e=i.indexOf(void 0);return e<0?i:i.slice(0,e)}function My(i,e){const t=[...wy(i),e];return t.length>i.length?t.splice(0,t.length-i.length):gp(t,i.length),t}class Ey{constructor(e){this.emitter=new yt,this.onTick_=this.onTick_.bind(this),this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=e.binding,this.value_=ht(yy(e.bufferSize)),this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.ticker=e.ticker,this.ticker.emitter.on("tick",this.onTick_),this.fetch()}get rawValue(){return this.value_.rawValue}set rawValue(e){this.value_.rawValue=e}setRawValue(e,t){this.value_.setRawValue(e,t)}fetch(){this.value_.rawValue=My(this.value_.rawValue,this.binding.read())}onTick_(){this.fetch()}onValueBeforeChange_(e){this.emitter.emit("beforechange",Object.assign(Object.assign({},e),{sender:this}))}onValueChange_(e){this.emitter.emit("change",Object.assign(Object.assign({},e),{sender:this}))}}function Sy(i){if(!("binding"in i))return!1;const e=i.binding;return gc(e)&&"read"in e&&!("write"in e)}class Ty extends mp{exportState(){return on(()=>super.exportState(),{binding:{readonly:!0}})}}function Ay(i){return Vi(i)&&Sy(i.value)}class Cy extends Xi{get label(){return this.controller.labelController.props.get("label")}set label(e){this.controller.labelController.props.set("label",e)}get title(){var e;return(e=this.controller.buttonController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller.buttonController.props.set("title",e)}on(e,t){const n=t.bind(this);return this.controller.buttonController.emitter.on(e,s=>{n(new iy(this,s.nativeEvent))}),this}off(e,t){return this.controller.buttonController.emitter.off(e,t),this}}function Py(i,e,t){t?i.classList.add(e):i.classList.remove(e)}function Hr(i,e){return t=>{Py(i,e,t)}}function wc(i,e){Yn(i,t=>{e.textContent=t??""})}const Ua=$e("btn");class Ry{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ua()),t.viewProps.bindClassModifiers(this.element);const n=e.createElement("button");n.classList.add(Ua("b")),t.viewProps.bindDisabled(n),this.element.appendChild(n),this.buttonElement=n;const r=e.createElement("div");r.classList.add(Ua("t")),wc(t.props.value("title"),r),this.buttonElement.appendChild(r)}}class Ly{constructor(e,t){this.emitter=new yt,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Ry(e,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}importProps(e){return sn(e,null,t=>({title:t.optional.string}),t=>(this.props.set("title",t.title),!0))}exportProps(){return on(null,{title:this.props.get("title")})}onClick_(e){this.emitter.emit("click",{nativeEvent:e,sender:this})}}class _h extends Zo{constructor(e,t){const n=new Ly(e,{props:t.buttonProps,viewProps:t.viewProps}),r=new fp(e,{blade:t.blade,props:t.labelProps,valueController:n});super({blade:t.blade,view:r.view,viewProps:t.viewProps}),this.buttonController=n,this.labelController=r}importState(e){return sn(e,t=>super.importState(t)&&this.buttonController.importProps(t)&&this.labelController.importProps(t),()=>({}),()=>!0)}exportState(){return on(()=>super.exportState(),Object.assign(Object.assign({},this.buttonController.exportProps()),this.labelController.exportProps()))}}class _p{constructor(e){const[t,n]=e.split("-"),r=t.split(".");this.major=parseInt(r[0],10),this.minor=parseInt(r[1],10),this.patch=parseInt(r[2],10),this.prerelease=n??null}toString(){const e=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[e,this.prerelease].join("-"):e}}const Gr=new _p("2.0.5");function Gt(i){return Object.assign({core:Gr},i)}const Iy=Gt({id:"button",type:"blade",accept(i){const e=dt(i,t=>({title:t.required.string,view:t.required.constant("button"),label:t.optional.string}));return e?{params:e}:null},controller(i){return new _h(i.document,{blade:i.blade,buttonProps:Xe.fromObject({title:i.params.title}),labelProps:Xe.fromObject({label:i.params.label}),viewProps:i.viewProps})},api(i){return i.controller instanceof _h?new Cy(i.controller):null}});function Dy(i,e){return i.addBlade(Object.assign(Object.assign({},e),{view:"button"}))}function Ny(i,e){return i.addBlade(Object.assign(Object.assign({},e),{view:"folder"}))}function Uy(i,e){return i.addBlade(Object.assign(Object.assign({},e),{view:"tab"}))}function Oy(i){return mc(i)?"refresh"in i&&typeof i.refresh=="function":!1}function Fy(i,e){if(!ko.isBindable(i))throw mt.notBindable();return new ko(i,e)}class ky{constructor(e,t){this.onRackValueChange_=this.onRackValueChange_.bind(this),this.controller_=e,this.emitter_=new yt,this.pool_=t,this.controller_.rack.emitter.on("valuechange",this.onRackValueChange_)}get children(){return this.controller_.rack.children.map(e=>this.pool_.createApi(e))}addBinding(e,t,n){const r=n??{},s=this.controller_.element.ownerDocument,o=this.pool_.createBinding(s,Fy(e,t),r),a=this.pool_.createBindingApi(o);return this.add(a,r.index)}addFolder(e){return Ny(this,e)}addButton(e){return Dy(this,e)}addTab(e){return Uy(this,e)}add(e,t){const n=e.controller;return this.controller_.rack.add(n,t),e}remove(e){this.controller_.rack.remove(e.controller)}addBlade(e){const t=this.controller_.element.ownerDocument,n=this.pool_.createBlade(t,e),r=this.pool_.createApi(n);return this.add(r,e.index)}on(e,t){const n=t.bind(this);return this.emitter_.on(e,r=>{n(r)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}refresh(){this.children.forEach(e=>{Oy(e)&&e.refresh()})}onRackValueChange_(e){const t=e.bladeController,n=this.pool_.createApi(t),r=cp(t.value)?t.value.binding:null;this.emitter_.emit("change",new Ps(n,r?r.target.read():t.value.rawValue,e.options.last))}}class Mc extends Xi{constructor(e,t){super(e),this.rackApi_=new ky(e.rackController,t)}refresh(){this.rackApi_.refresh()}}class Ec extends Zo{constructor(e){super({blade:e.blade,view:e.view,viewProps:e.rackController.viewProps}),this.rackController=e.rackController}importState(e){return sn(e,t=>super.importState(t),t=>({children:t.required.array(t.required.raw)}),t=>this.rackController.rack.children.every((n,r)=>n.importState(t.children[r])))}exportState(){return on(()=>super.exportState(),{children:this.rackController.rack.children.map(e=>e.exportState())})}}function Nl(i){return"rackController"in i}class By{constructor(e){this.emitter=new yt,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=e}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(e){for(const t of this.allItems())if(e(t))return t;return null}includes(e){return this.cache_.has(e)}add(e,t){if(this.includes(e))throw mt.shouldNeverHappen();const n=t!==void 0?t:this.items_.length;this.items_.splice(n,0,e),this.cache_.add(e);const r=this.extract_(e);r&&(r.emitter.on("add",this.onSubListAdd_),r.emitter.on("remove",this.onSubListRemove_),r.allItems().forEach(s=>{this.cache_.add(s)})),this.emitter.emit("add",{index:n,item:e,root:this,target:this})}remove(e){const t=this.items_.indexOf(e);if(t<0)return;this.items_.splice(t,1),this.cache_.delete(e);const n=this.extract_(e);n&&(n.allItems().forEach(r=>{this.cache_.delete(r)}),n.emitter.off("add",this.onSubListAdd_),n.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:t,item:e,root:this,target:this})}onSubListAdd_(e){this.cache_.add(e.item),this.emitter.emit("add",{index:e.index,item:e.item,root:this,target:e.target})}onSubListRemove_(e){this.cache_.delete(e.item),this.emitter.emit("remove",{index:e.index,item:e.item,root:this,target:e.target})}}function Vy(i,e){for(let t=0;t<i.length;t++){const n=i[t];if(Vi(n)&&n.value===e)return n}return null}function zy(i){return Nl(i)?i.rackController.rack.bcSet_:null}class Hy{constructor(e){var t,n;this.emitter=new yt,this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onRackLayout_=this.onRackLayout_.bind(this),this.onRackValueChange_=this.onRackValueChange_.bind(this),this.blade_=(t=e.blade)!==null&&t!==void 0?t:null,(n=this.blade_)===null||n===void 0||n.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=e.viewProps,this.bcSet_=new By(zy),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(e,t){var n;(n=e.parent)===null||n===void 0||n.remove(e),e.parent=this,this.bcSet_.add(e,t)}remove(e){e.parent=null,this.bcSet_.remove(e)}find(e){return this.bcSet_.allItems().filter(e)}onSetAdd_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("add",{bladeController:e.item,index:e.index,root:t,sender:this}),!t)return;const n=e.item;if(n.viewProps.emitter.on("change",this.onChildViewPropsChange_),n.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),n.viewProps.handleDispose(this.onChildDispose_),Vi(n))n.value.emitter.on("change",this.onChildValueChange_);else if(Nl(n)){const r=n.rackController.rack;if(r){const s=r.emitter;s.on("layout",this.onRackLayout_),s.on("valuechange",this.onRackValueChange_)}}}onSetRemove_(e){this.updatePositions_();const t=e.target===e.root;if(this.emitter.emit("remove",{bladeController:e.item,root:t,sender:this}),!t)return;const n=e.item;if(Vi(n))n.value.emitter.off("change",this.onChildValueChange_);else if(Nl(n)){const r=n.rackController.rack;if(r){const s=r.emitter;s.off("layout",this.onRackLayout_),s.off("valuechange",this.onRackValueChange_)}}}updatePositions_(){const e=this.bcSet_.items.filter(r=>!r.viewProps.get("hidden")),t=e[0],n=e[e.length-1];this.bcSet_.items.forEach(r=>{const s=[];r===t&&(s.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&s.push("veryfirst")),r===n&&(s.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&s.push("verylast")),r.blade.set("positions",s)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(t=>t.viewProps.get("disposed")).forEach(t=>{this.bcSet_.remove(t)})}onChildValueChange_(e){const t=Vy(this.find(Vi),e.sender);if(!t)throw mt.alreadyDisposed();this.emitter.emit("valuechange",{bladeController:t,options:e.options,sender:this})}onRackLayout_(e){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onRackValueChange_(e){this.emitter.emit("valuechange",{bladeController:e.bladeController,options:e.options,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Sc{constructor(e){this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.element=e.element,this.viewProps=e.viewProps;const t=new Hy({blade:e.root?void 0:e.blade,viewProps:e.viewProps});t.emitter.on("add",this.onRackAdd_),t.emitter.on("remove",this.onRackRemove_),this.rack=t,this.viewProps.handleDispose(()=>{for(let n=this.rack.children.length-1;n>=0;n--)this.rack.children[n].viewProps.set("disposed",!0)})}onRackAdd_(e){e.root&&up(this.element,e.bladeController.view.element,e.index)}onRackRemove_(e){e.root&&yc(e.bladeController.view.element)}}function Wr(){return new Xe({positions:ht([],{equals:bx})})}class Rs extends Xe{constructor(e){super(e)}static create(e){const t={completed:!0,expanded:e,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},n=Xe.createCore(t);return new Rs(n)}get styleExpanded(){var e;return(e=this.get("temporaryExpanded"))!==null&&e!==void 0?e:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const e=this.get("expandedHeight");return this.get("shouldFixHeight")&&!lt(e)?`${e}px`:"auto"}bindExpandedClass(e,t){const n=()=>{this.styleExpanded?e.classList.add(t):e.classList.remove(t)};Ln(this,"expanded",n),Ln(this,"temporaryExpanded",n)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function Gy(i,e){let t=0;return cy(e,()=>{i.set("expandedHeight",null),i.set("temporaryExpanded",!0),Bo(e),t=e.clientHeight,i.set("temporaryExpanded",null),Bo(e)}),t}function vh(i,e){e.style.height=i.styleHeight}function Tc(i,e){i.value("expanded").emitter.on("beforechange",()=>{if(i.set("completed",!1),lt(i.get("expandedHeight"))){const t=Gy(i,e);t>0&&i.set("expandedHeight",t)}i.set("shouldFixHeight",!0),Bo(e)}),i.emitter.on("change",()=>{vh(i,e)}),vh(i,e),e.addEventListener("transitionend",t=>{t.propertyName==="height"&&i.cleanUpTransition()})}class vp extends Mc{constructor(e,t){super(e,t),this.emitter_=new yt,this.controller.foldable.value("expanded").emitter.on("change",n=>{this.emitter_.emit("fold",new ty(this,n.sender.rawValue))}),this.rackApi_.on("change",n=>{this.emitter_.emit("change",n)})}get expanded(){return this.controller.foldable.get("expanded")}set expanded(e){this.controller.foldable.set("expanded",e)}get title(){return this.controller.props.get("title")}set title(e){this.controller.props.set("title",e)}get children(){return this.rackApi_.children}addBinding(e,t,n){return this.rackApi_.addBinding(e,t,n)}addFolder(e){return this.rackApi_.addFolder(e)}addButton(e){return this.rackApi_.addButton(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){return this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBlade(e){return this.rackApi_.addBlade(e)}on(e,t){const n=t.bind(this);return this.emitter_.on(e,r=>{n(r)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}}const bp=$e("cnt");class Wy{constructor(e,t){var n;this.className_=$e((n=t.viewName)!==null&&n!==void 0?n:"fld"),this.element=e.createElement("div"),this.element.classList.add(this.className_(),bp()),t.viewProps.bindClassModifiers(this.element),this.foldable_=t.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),Ln(this.foldable_,"completed",Hr(this.element,this.className_(void 0,"cpl")));const r=e.createElement("button");r.classList.add(this.className_("b")),Ln(t.props,"title",c=>{lt(c)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const s=e.createElement("div");s.classList.add(this.className_("i")),this.element.appendChild(s);const o=e.createElement("div");o.classList.add(this.className_("t")),wc(t.props.value("title"),o),this.buttonElement.appendChild(o),this.titleElement=o;const a=e.createElement("div");a.classList.add(this.className_("m")),this.buttonElement.appendChild(a);const l=e.createElement("div");l.classList.add(this.className_("c")),this.element.appendChild(l),this.containerElement=l}}class Ul extends Ec{constructor(e,t){var n;const r=Rs.create((n=t.expanded)!==null&&n!==void 0?n:!0),s=new Wy(e,{foldable:r,props:t.props,viewName:t.root?"rot":void 0,viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:new Sc({blade:t.blade,element:s.containerElement,root:t.root,viewProps:t.viewProps}),view:s})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=t.props,this.foldable=r,Tc(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}importState(e){return sn(e,t=>super.importState(t),t=>({expanded:t.required.boolean,title:t.optional.string}),t=>(this.foldable.set("expanded",t.expanded),this.props.set("title",t.title),!0))}exportState(){return on(()=>super.exportState(),{expanded:this.foldable.get("expanded"),title:this.props.get("title")})}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const jy=Gt({id:"folder",type:"blade",accept(i){const e=dt(i,t=>({title:t.required.string,view:t.required.constant("folder"),expanded:t.optional.boolean}));return e?{params:e}:null},controller(i){return new Ul(i.document,{blade:i.blade,expanded:i.params.expanded,props:Xe.fromObject({title:i.params.title}),viewProps:i.viewProps})},api(i){return i.controller instanceof Ul?new vp(i.controller,i.pool):null}}),Xy=$e("");function bh(i,e){return Hr(i,Xy(void 0,e))}class ii extends Xe{constructor(e){var t;super(e),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=Ex(ht(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(e){var t,n,r;const s=e??{};return new ii(Xe.createCore({disabled:(t=s.disabled)!==null&&t!==void 0?t:!1,disposed:!1,hidden:(n=s.hidden)!==null&&n!==void 0?n:!1,parent:(r=s.parent)!==null&&r!==void 0?r:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(e){Yn(this.globalDisabled_,bh(e,"disabled")),Ln(this,"hidden",bh(e,"hidden"))}bindDisabled(e){Yn(this.globalDisabled_,t=>{e.disabled=t})}bindTabIndex(e){Yn(this.globalDisabled_,t=>{e.tabIndex=t?-1:0})}handleDispose(e){this.value("disposed").emitter.on("change",t=>{t&&e()})}importState(e){this.set("disabled",e.disabled),this.set("hidden",e.hidden)}exportState(){return{disabled:this.get("disabled"),hidden:this.get("hidden")}}getGlobalDisabled_(){const e=this.get("parent");return(e?e.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(e){var t;const n=e.previousRawValue;n==null||n.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(t=this.get("parent"))===null||t===void 0||t.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}const xh=$e("tbp");class qy{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(xh()),t.viewProps.bindClassModifiers(this.element);const n=e.createElement("div");n.classList.add(xh("c")),this.element.appendChild(n),this.containerElement=n}}const is=$e("tbi");class Ky{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(is()),t.viewProps.bindClassModifiers(this.element),Ln(t.props,"selected",s=>{s?this.element.classList.add(is(void 0,"sel")):this.element.classList.remove(is(void 0,"sel"))});const n=e.createElement("button");n.classList.add(is("b")),t.viewProps.bindDisabled(n),this.element.appendChild(n),this.buttonElement=n;const r=e.createElement("div");r.classList.add(is("t")),wc(t.props.value("title"),r),this.buttonElement.appendChild(r),this.titleElement=r}}class Yy{constructor(e,t){this.emitter=new yt,this.onClick_=this.onClick_.bind(this),this.props=t.props,this.viewProps=t.viewProps,this.view=new Ky(e,{props:t.props,viewProps:t.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Ol extends Ec{constructor(e,t){const n=new qy(e,{viewProps:t.viewProps});super(Object.assign(Object.assign({},t),{rackController:new Sc({blade:t.blade,element:n.containerElement,viewProps:t.viewProps}),view:n})),this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new Yy(e,{props:t.itemProps,viewProps:ii.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.props=t.props,Ln(this.props,"selected",r=>{this.itemController.props.set("selected",r),this.viewProps.set("hidden",!r)})}get itemController(){return this.ic_}importState(e){return sn(e,t=>super.importState(t),t=>({selected:t.required.boolean,title:t.required.string}),t=>(this.ic_.props.set("selected",t.selected),this.ic_.props.set("title",t.title),!0))}exportState(){return on(()=>super.exportState(),{selected:this.ic_.props.get("selected"),title:this.ic_.props.get("title")})}onItemClick_(){this.props.set("selected",!0)}}class $y extends Mc{constructor(e,t){super(e,t),this.emitter_=new yt,this.onSelect_=this.onSelect_.bind(this),this.pool_=t,this.rackApi_.on("change",n=>{this.emitter_.emit("change",n)}),this.controller.tab.selectedIndex.emitter.on("change",this.onSelect_)}get pages(){return this.rackApi_.children}addPage(e){const t=this.controller.view.element.ownerDocument,n=new Ol(t,{blade:Wr(),itemProps:Xe.fromObject({selected:!1,title:e.title}),props:Xe.fromObject({selected:!1}),viewProps:ii.create()}),r=this.pool_.createApi(n);return this.rackApi_.add(r,e.index)}removePage(e){this.rackApi_.remove(this.rackApi_.children[e])}on(e,t){const n=t.bind(this);return this.emitter_.on(e,r=>{n(r)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}onSelect_(e){this.emitter_.emit("select",new ny(this,e.rawValue))}}class Zy extends Mc{get title(){var e;return(e=this.controller.itemController.props.get("title"))!==null&&e!==void 0?e:""}set title(e){this.controller.itemController.props.set("title",e)}get selected(){return this.controller.props.get("selected")}set selected(e){this.controller.props.set("selected",e)}get children(){return this.rackApi_.children}addButton(e){return this.rackApi_.addButton(e)}addFolder(e){return this.rackApi_.addFolder(e)}addTab(e){return this.rackApi_.addTab(e)}add(e,t){this.rackApi_.add(e,t)}remove(e){this.rackApi_.remove(e)}addBinding(e,t,n){return this.rackApi_.addBinding(e,t,n)}addBlade(e){return this.rackApi_.addBlade(e)}}const yh=-1;class Jy{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=ht(!0),this.selectedIndex=ht(yh),this.items_=[]}add(e,t){const n=t??this.items_.length;this.items_.splice(n,0,e),e.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(e){const t=this.items_.indexOf(e);t<0||(this.items_.splice(t,1),e.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=yh,this.empty.rawValue=!0;return}const e=this.items_.findIndex(t=>t.rawValue);e<0?(this.items_.forEach((t,n)=>{t.rawValue=n===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((t,n)=>{t.rawValue=n===e}),this.selectedIndex.rawValue=e),this.empty.rawValue=!1}onItemSelectedChange_(e){if(e.rawValue){const t=this.items_.findIndex(n=>n===e.sender);this.items_.forEach((n,r)=>{n.rawValue=r===t}),this.selectedIndex.rawValue=t}else this.keepSelection_()}}const rs=$e("tab");class Qy{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(rs(),bp()),t.viewProps.bindClassModifiers(this.element),Yn(t.empty,Hr(this.element,rs(void 0,"nop")));const n=e.createElement("div");n.classList.add(rs("t")),this.element.appendChild(n),this.itemsElement=n;const r=e.createElement("div");r.classList.add(rs("i")),this.element.appendChild(r);const s=e.createElement("div");s.classList.add(rs("c")),this.element.appendChild(s),this.contentsElement=s}}class wh extends Ec{constructor(e,t){const n=new Jy,r=new Qy(e,{empty:n.empty,viewProps:t.viewProps});super({blade:t.blade,rackController:new Sc({blade:t.blade,element:r.contentsElement,viewProps:t.viewProps}),view:r}),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=this.rackController.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.tab=n}add(e,t){this.rackController.rack.add(e,t)}remove(e){this.rackController.rack.remove(this.rackController.rack.children[e])}onRackAdd_(e){if(!e.root)return;const t=e.bladeController;up(this.view.itemsElement,t.itemController.view.element,e.index),t.itemController.viewProps.set("parent",this.viewProps),this.tab.add(t.props.value("selected"))}onRackRemove_(e){if(!e.root)return;const t=e.bladeController;yc(t.itemController.view.element),t.itemController.viewProps.set("parent",null),this.tab.remove(t.props.value("selected"))}}const xp=Gt({id:"tab",type:"blade",accept(i){const e=dt(i,t=>({pages:t.required.array(t.required.object({title:t.required.string})),view:t.required.constant("tab")}));return!e||e.pages.length===0?null:{params:e}},controller(i){const e=new wh(i.document,{blade:i.blade,viewProps:i.viewProps});return i.params.pages.forEach(t=>{const n=new Ol(i.document,{blade:Wr(),itemProps:Xe.fromObject({selected:!1,title:t.title}),props:Xe.fromObject({selected:!1}),viewProps:ii.create()});e.add(n)}),e},api(i){return i.controller instanceof wh?new $y(i.controller,i.pool):i.controller instanceof Ol?new Zy(i.controller,i.pool):null}});function ew(i,e){const t=i.accept(e.params);if(!t)return null;const n=dt(e.params,r=>({disabled:r.optional.boolean,hidden:r.optional.boolean}));return i.controller({blade:Wr(),document:e.document,params:Object.assign(Object.assign({},t.params),{disabled:n==null?void 0:n.disabled,hidden:n==null?void 0:n.hidden}),viewProps:ii.create({disabled:n==null?void 0:n.disabled,hidden:n==null?void 0:n.hidden})})}class Ac extends xs{get options(){return this.controller.valueController.props.get("options")}set options(e){this.controller.valueController.props.set("options",e)}}class tw{constructor(){this.disabled=!1,this.emitter=new yt}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class nw{constructor(e,t){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=e,this.emitter=new yt,this.interval_=t,this.setTimer_()}get disabled(){return this.disabled_}set disabled(e){this.disabled_=e,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const e=this.doc_.defaultView;e&&e.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const e=this.doc_.defaultView;e&&(this.timerId_=e.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Ls{constructor(e){this.constraints=e}constrain(e){return this.constraints.reduce((t,n)=>n.constrain(t),e)}}function Vo(i,e){if(i instanceof e)return i;if(i instanceof Ls){const t=i.constraints.reduce((n,r)=>n||(r instanceof e?r:null),null);if(t)return t}return null}class Is{constructor(e){this.values=Xe.fromObject({options:e})}constrain(e){const t=this.values.get("options");return t.length===0||t.filter(r=>r.value===e).length>0?e:t[0].value}}function Ds(i){var e;const t=Dl;if(Array.isArray(i))return(e=dt({items:i},n=>({items:n.required.array(n.required.object({text:n.required.string,value:n.required.raw}))})))===null||e===void 0?void 0:e.items;if(typeof i=="object")return t.required.raw(i).value}function Cc(i){if(Array.isArray(i))return i;const e=[];return Object.keys(i).forEach(t=>{e.push({text:t,value:i[t]})}),e}function Pc(i){return lt(i)?null:new Is(Cc(i))}const Oa=$e("lst");class iw{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.element=e.createElement("div"),this.element.classList.add(Oa()),t.viewProps.bindClassModifiers(this.element);const n=e.createElement("select");n.classList.add(Oa("s")),t.viewProps.bindDisabled(n),this.element.appendChild(n),this.selectElement=n;const r=e.createElement("div");r.classList.add(Oa("m")),r.appendChild($o(e,"dropdown")),this.element.appendChild(r),t.value.emitter.on("change",this.onValueChange_),this.value_=t.value,Ln(this.props_,"options",s=>{hp(this.selectElement),s.forEach(o=>{const a=e.createElement("option");a.textContent=o.text,this.selectElement.appendChild(a)}),this.update_()})}update_(){const e=this.props_.get("options").map(t=>t.value);this.selectElement.selectedIndex=e.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class Mi{constructor(e,t){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new iw(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(e){const t=e.currentTarget;this.value.rawValue=this.props.get("options")[t.selectedIndex].value}importProps(e){return sn(e,null,t=>({options:t.required.custom(Ds)}),t=>(this.props.set("options",Cc(t.options)),!0))}exportProps(){return on(null,{options:this.props.get("options")})}}const Mh=$e("pop");class rw{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Mh()),t.viewProps.bindClassModifiers(this.element),Yn(t.shows,Hr(this.element,Mh(void 0,"v")))}}class yp{constructor(e,t){this.shows=ht(!1),this.viewProps=t.viewProps,this.view=new rw(e,{shows:this.shows,viewProps:this.viewProps})}}const Eh=$e("txt");class sw{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(Eh()),t.viewProps.bindClassModifiers(this.element),this.props_=t.props,this.props_.emitter.on("change",this.onChange_);const n=e.createElement("input");n.classList.add(Eh("i")),n.type="text",t.viewProps.bindDisabled(n),this.element.appendChild(n),this.inputElement=n,t.value.emitter.on("change",this.onChange_),this.value_=t.value,this.refresh()}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value_.rawValue)}onChange_(){this.refresh()}}class ys{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=t.parser,this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new sw(e,{props:t.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(e){const n=e.currentTarget.value,r=this.parser_(n);lt(r)||(this.value.rawValue=r),this.view.refresh()}}function ow(i){return String(i)}function wp(i){return i==="false"?!1:!!i}function Sh(i){return ow(i)}function aw(i){return e=>i.reduce((t,n)=>t!==null?t:n(e),null)}const lw=Zt(0);function zo(i){return lw(i)+"%"}function Mp(i){return String(i)}function Fl(i){return i}function jr({primary:i,secondary:e,forward:t,backward:n}){let r=!1;function s(o){r||(r=!0,o(),r=!1)}i.emitter.on("change",o=>{s(()=>{e.setRawValue(t(i.rawValue,e.rawValue),o.options)})}),e.emitter.on("change",o=>{s(()=>{i.setRawValue(n(i.rawValue,e.rawValue),o.options)}),s(()=>{e.setRawValue(t(i.rawValue,e.rawValue),o.options)})}),s(()=>{e.setRawValue(t(i.rawValue,e.rawValue),{forceEmit:!1,last:!0})})}function Kt(i,e){const t=i*(e.altKey?.1:1)*(e.shiftKey?10:1);return e.upKey?+t:e.downKey?-t:0}function ws(i){return{altKey:i.altKey,downKey:i.key==="ArrowDown",shiftKey:i.shiftKey,upKey:i.key==="ArrowUp"}}function ei(i){return{altKey:i.altKey,downKey:i.key==="ArrowLeft",shiftKey:i.shiftKey,upKey:i.key==="ArrowRight"}}function cw(i){return i==="ArrowUp"||i==="ArrowDown"}function Ep(i){return cw(i)||i==="ArrowLeft"||i==="ArrowRight"}function Fa(i,e){var t,n;const r=e.ownerDocument.defaultView,s=e.getBoundingClientRect();return{x:i.pageX-(((t=r&&r.scrollX)!==null&&t!==void 0?t:0)+s.left),y:i.pageY-(((n=r&&r.scrollY)!==null&&n!==void 0?n:0)+s.top)}}class qi{constructor(e){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=e,this.emitter=new yt,e.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),e.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),e.addEventListener("touchend",this.onTouchEnd_),e.addEventListener("mousedown",this.onMouseDown_)}computePosition_(e){const t=this.elem_.getBoundingClientRect();return{bounds:{width:t.width,height:t.height},point:e?{x:e.x,y:e.y}:null}}onMouseDown_(e){var t;e.preventDefault(),(t=e.currentTarget)===null||t===void 0||t.focus();const n=this.elem_.ownerDocument;n.addEventListener("mousemove",this.onDocumentMouseMove_),n.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(Fa(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseMove_(e){this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(Fa(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onDocumentMouseUp_(e){const t=this.elem_.ownerDocument;t.removeEventListener("mousemove",this.onDocumentMouseMove_),t.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(Fa(e,this.elem_)),sender:this,shiftKey:e.shiftKey})}onTouchStart_(e){e.preventDefault();const t=e.targetTouches.item(0),n=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-n.left,y:t.clientY-n.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchMove_(e){const t=e.targetTouches.item(0),n=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:e.altKey,data:this.computePosition_(t?{x:t.clientX-n.left,y:t.clientY-n.top}:void 0),sender:this,shiftKey:e.shiftKey}),this.lastTouch_=t}onTouchEnd_(e){var t;const n=(t=e.targetTouches.item(0))!==null&&t!==void 0?t:this.lastTouch_,r=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:e.altKey,data:this.computePosition_(n?{x:n.clientX-r.left,y:n.clientY-r.top}:void 0),sender:this,shiftKey:e.shiftKey})}}const cn=$e("txt");class uw{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(cn(),cn(void 0,"num")),t.arrayPosition&&this.element.classList.add(cn(void 0,t.arrayPosition)),t.viewProps.bindClassModifiers(this.element);const n=e.createElement("input");n.classList.add(cn("i")),n.type="text",t.viewProps.bindDisabled(n),this.element.appendChild(n),this.inputElement=n,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=t.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(cn()),this.inputElement.classList.add(cn("i"));const r=e.createElement("div");r.classList.add(cn("k")),this.element.appendChild(r),this.knobElement=r;const s=e.createElementNS(Pn,"svg");s.classList.add(cn("g")),this.knobElement.appendChild(s);const o=e.createElementNS(Pn,"path");o.classList.add(cn("gb")),s.appendChild(o),this.guideBodyElem_=o;const a=e.createElementNS(Pn,"path");a.classList.add(cn("gh")),s.appendChild(a),this.guideHeadElem_=a;const l=e.createElement("div");l.classList.add($e("tt")()),this.knobElement.appendChild(l),this.tooltipElem_=l,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.refresh()}onDraggingChange_(e){if(e.rawValue===null){this.element.classList.remove(cn(void 0,"drg"));return}this.element.classList.add(cn(void 0,"drg"));const t=e.rawValue/this.props_.get("pointerScale"),n=t+(t>0?-1:t<0?1:0),r=Et(-n,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${n+r},0 L${n},4 L${n+r},8`,`M ${t},-1 L${t},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${t},4`);const s=this.props_.get("formatter");this.tooltipElem_.textContent=s(this.value.rawValue),this.tooltipElem_.style.left=`${t}px`}refresh(){const e=this.props_.get("formatter");this.inputElement.value=e(this.value.rawValue)}onChange_(){this.refresh()}}class Ns{constructor(e,t){var n;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.parser_=t.parser,this.props=t.props,this.sliderProps_=(n=t.sliderProps)!==null&&n!==void 0?n:null,this.value=t.value,this.viewProps=t.viewProps,this.dragging_=ht(null),this.view=new uw(e,{arrayPosition:t.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const r=new qi(this.view.knobElement);r.emitter.on("down",this.onPointerDown_),r.emitter.on("move",this.onPointerMove_),r.emitter.on("up",this.onPointerUp_)}constrainValue_(e){var t,n;const r=(t=this.sliderProps_)===null||t===void 0?void 0:t.get("min"),s=(n=this.sliderProps_)===null||n===void 0?void 0:n.get("max");let o=e;return r!==void 0&&(o=Math.max(o,r)),s!==void 0&&(o=Math.min(o,s)),o}onInputChange_(e){const n=e.currentTarget.value,r=this.parser_(n);lt(r)||(this.value.rawValue=this.constrainValue_(r)),this.view.refresh()}onInputKeyDown_(e){const t=Kt(this.props.get("keyScale"),ws(e));t!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+t),{forceEmit:!1,last:!1})}onInputKeyUp_(e){Kt(this.props.get("keyScale"),ws(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(e){if(!e.point)return null;const t=e.point.x-e.bounds.width/2;return this.constrainValue_(this.originRawValue_+t*this.props.get("pointerScale"))}onPointerMove_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(e){const t=this.computeDraggingValue_(e.data);t!==null&&(this.value.setRawValue(t,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const ka=$e("sld");class hw{constructor(e,t){this.onChange_=this.onChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onChange_),this.element=e.createElement("div"),this.element.classList.add(ka()),t.viewProps.bindClassModifiers(this.element);const n=e.createElement("div");n.classList.add(ka("t")),t.viewProps.bindTabIndex(n),this.element.appendChild(n),this.trackElement=n;const r=e.createElement("div");r.classList.add(ka("k")),this.trackElement.appendChild(r),this.knobElement=r,t.value.emitter.on("change",this.onChange_),this.value=t.value,this.update_()}update_(){const e=Et(nt(this.value.rawValue,this.props_.get("min"),this.props_.get("max"),0,100),0,100);this.knobElement.style.width=`${e}%`}onChange_(){this.update_()}}class dw{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.props=t.props,this.view=new hw(e,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new qi(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){e.point&&this.value.setRawValue(nt(Et(e.point.x,0,e.bounds.width),0,e.bounds.width,this.props.get("min"),this.props.get("max")),t)}onPointerDownOrMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Kt(this.props.get("keyScale"),ei(e));t!==0&&this.value.setRawValue(this.value.rawValue+t,{forceEmit:!1,last:!1})}onKeyUp_(e){Kt(this.props.get("keyScale"),ei(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ba=$e("sldtxt");class pw{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Ba());const n=e.createElement("div");n.classList.add(Ba("s")),this.sliderView_=t.sliderView,n.appendChild(this.sliderView_.element),this.element.appendChild(n);const r=e.createElement("div");r.classList.add(Ba("t")),this.textView_=t.textView,r.appendChild(this.textView_.element),this.element.appendChild(r)}}class Ho{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.sliderC_=new dw(e,{props:t.sliderProps,value:t.value,viewProps:this.viewProps}),this.textC_=new Ns(e,{parser:t.parser,props:t.textProps,sliderProps:t.sliderProps,value:t.value,viewProps:t.viewProps}),this.view=new pw(e,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}importProps(e){return sn(e,null,t=>({max:t.required.number,min:t.required.number}),t=>{const n=this.sliderC_.props;return n.set("max",t.max),n.set("min",t.min),!0})}exportProps(){const e=this.sliderC_.props;return on(null,{max:e.get("max"),min:e.get("min")})}}function Sp(i){return{sliderProps:new Xe({keyScale:i.keyScale,max:i.max,min:i.min}),textProps:new Xe({formatter:ht(i.formatter),keyScale:i.keyScale,pointerScale:ht(i.pointerScale)})}}const fw={containerUnitSize:"cnt-usz"};function Tp(i){return`--${fw[i]}`}function Ms(i){return lp(i)}function xi(i){if(Il(i))return dt(i,Ms)}function qn(i,e){if(!i)return;const t=[],n=sp(i,e);n&&t.push(n);const r=op(i);return r&&t.push(r),new Ls(t)}function mw(i){return i?i.major===Gr.major:!1}function Ap(i){if(i==="inline"||i==="popup")return i}function Us(i,e){i.write(e)}const _o=$e("ckb");class gw{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.element=e.createElement("div"),this.element.classList.add(_o()),t.viewProps.bindClassModifiers(this.element);const n=e.createElement("label");n.classList.add(_o("l")),this.element.appendChild(n),this.labelElement=n;const r=e.createElement("input");r.classList.add(_o("i")),r.type="checkbox",this.labelElement.appendChild(r),this.inputElement=r,t.viewProps.bindDisabled(this.inputElement);const s=e.createElement("div");s.classList.add(_o("w")),this.labelElement.appendChild(s);const o=$o(e,"check");s.appendChild(o),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class _w{constructor(e,t){this.onInputChange_=this.onInputChange_.bind(this),this.onLabelMouseDown_=this.onLabelMouseDown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new gw(e,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.labelElement.addEventListener("mousedown",this.onLabelMouseDown_)}onInputChange_(e){const t=e.currentTarget;this.value.rawValue=t.checked,e.preventDefault(),e.stopPropagation()}onLabelMouseDown_(e){e.preventDefault()}}function vw(i){const e=[],t=Pc(i.options);return t&&e.push(t),new Ls(e)}const bw=Gt({id:"input-bool",type:"input",accept:(i,e)=>{if(typeof i!="boolean")return null;const t=dt(e,n=>({options:n.optional.custom(Ds),readonly:n.optional.constant(!1)}));return t?{initialValue:i,params:t}:null},binding:{reader:i=>wp,constraint:i=>vw(i.params),writer:i=>Us},controller:i=>{const e=i.document,t=i.value,n=i.constraint,r=n&&Vo(n,Is);return r?new Mi(e,{props:new Xe({options:r.values.value("options")}),value:t,viewProps:i.viewProps}):new _w(e,{value:t,viewProps:i.viewProps})},api(i){return typeof i.controller.value.rawValue!="boolean"?null:i.controller.valueController instanceof Mi?new Ac(i.controller):null}}),Di=$e("col");class xw{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Di()),t.foldable.bindExpandedClass(this.element,Di(void 0,"expanded")),Ln(t.foldable,"completed",Hr(this.element,Di(void 0,"cpl")));const n=e.createElement("div");n.classList.add(Di("h")),this.element.appendChild(n);const r=e.createElement("div");r.classList.add(Di("s")),n.appendChild(r),this.swatchElement=r;const s=e.createElement("div");if(s.classList.add(Di("t")),n.appendChild(s),this.textElement=s,t.pickerLayout==="inline"){const o=e.createElement("div");o.classList.add(Di("p")),this.element.appendChild(o),this.pickerElement=o}else this.pickerElement=null}}function yw(i,e,t){const n=Et(i/255,0,1),r=Et(e/255,0,1),s=Et(t/255,0,1),o=Math.max(n,r,s),a=Math.min(n,r,s),l=o-a;let c=0,u=0;const h=(a+o)/2;return l!==0&&(u=l/(1-Math.abs(o+a-1)),n===o?c=(r-s)/l:r===o?c=2+(s-n)/l:c=4+(n-r)/l,c=c/6+(c<0?1:0)),[c*360,u*100,h*100]}function ww(i,e,t){const n=(i%360+360)%360,r=Et(e/100,0,1),s=Et(t/100,0,1),o=(1-Math.abs(2*s-1))*r,a=o*(1-Math.abs(n/60%2-1)),l=s-o/2;let c,u,h;return n>=0&&n<60?[c,u,h]=[o,a,0]:n>=60&&n<120?[c,u,h]=[a,o,0]:n>=120&&n<180?[c,u,h]=[0,o,a]:n>=180&&n<240?[c,u,h]=[0,a,o]:n>=240&&n<300?[c,u,h]=[a,0,o]:[c,u,h]=[o,0,a],[(c+l)*255,(u+l)*255,(h+l)*255]}function Mw(i,e,t){const n=Et(i/255,0,1),r=Et(e/255,0,1),s=Et(t/255,0,1),o=Math.max(n,r,s),a=Math.min(n,r,s),l=o-a;let c;l===0?c=0:o===n?c=60*(((r-s)/l%6+6)%6):o===r?c=60*((s-n)/l+2):c=60*((n-r)/l+4);const u=o===0?0:l/o,h=o;return[c,u*100,h*100]}function Cp(i,e,t){const n=np(i,360),r=Et(e/100,0,1),s=Et(t/100,0,1),o=s*r,a=o*(1-Math.abs(n/60%2-1)),l=s-o;let c,u,h;return n>=0&&n<60?[c,u,h]=[o,a,0]:n>=60&&n<120?[c,u,h]=[a,o,0]:n>=120&&n<180?[c,u,h]=[0,o,a]:n>=180&&n<240?[c,u,h]=[0,a,o]:n>=240&&n<300?[c,u,h]=[a,0,o]:[c,u,h]=[o,0,a],[(c+l)*255,(u+l)*255,(h+l)*255]}function Ew(i,e,t){const n=t+e*(100-Math.abs(2*t-100))/200;return[i,n!==0?e*(100-Math.abs(2*t-100))/n:0,t+e*(100-Math.abs(2*t-100))/(2*100)]}function Sw(i,e,t){const n=100-Math.abs(t*(200-e)/100-100);return[i,n!==0?e*t/n:0,t*(200-e)/(2*100)]}function In(i){return[i[0],i[1],i[2]]}function Jo(i,e){return[i[0],i[1],i[2],e]}const Tw={hsl:{hsl:(i,e,t)=>[i,e,t],hsv:Ew,rgb:ww},hsv:{hsl:Sw,hsv:(i,e,t)=>[i,e,t],rgb:Cp},rgb:{hsl:yw,hsv:Mw,rgb:(i,e,t)=>[i,e,t]}};function kr(i,e){return[e==="float"?1:i==="rgb"?255:360,e==="float"?1:i==="rgb"?255:100,e==="float"?1:i==="rgb"?255:100]}function Aw(i,e){return i===e?e:np(i,e)}function Pp(i,e,t){var n;const r=kr(e,t);return[e==="rgb"?Et(i[0],0,r[0]):Aw(i[0],r[0]),Et(i[1],0,r[1]),Et(i[2],0,r[2]),Et((n=i[3])!==null&&n!==void 0?n:1,0,1)]}function Th(i,e,t,n){const r=kr(e,t),s=kr(e,n);return i.map((o,a)=>o/r[a]*s[a])}function Rp(i,e,t){const n=Th(i,e.mode,e.type,"int"),r=Tw[e.mode][t.mode](...n);return Th(r,t.mode,"int",t.type)}class Je{static black(){return new Je([0,0,0],"rgb")}constructor(e,t){this.type="int",this.mode=t,this.comps_=Pp(e,t,this.type)}getComponents(e){return Jo(Rp(In(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const e=this.getComponents("rgb");return{r:e[0],g:e[1],b:e[2],a:e[3]}}}const di=$e("colp");class Cw{constructor(e,t){this.alphaViews_=null,this.element=e.createElement("div"),this.element.classList.add(di()),t.viewProps.bindClassModifiers(this.element);const n=e.createElement("div");n.classList.add(di("hsv"));const r=e.createElement("div");r.classList.add(di("sv")),this.svPaletteView_=t.svPaletteView,r.appendChild(this.svPaletteView_.element),n.appendChild(r);const s=e.createElement("div");s.classList.add(di("h")),this.hPaletteView_=t.hPaletteView,s.appendChild(this.hPaletteView_.element),n.appendChild(s),this.element.appendChild(n);const o=e.createElement("div");if(o.classList.add(di("rgb")),this.textsView_=t.textsView,o.appendChild(this.textsView_.element),this.element.appendChild(o),t.alphaViews){this.alphaViews_={palette:t.alphaViews.palette,text:t.alphaViews.text};const a=e.createElement("div");a.classList.add(di("a"));const l=e.createElement("div");l.classList.add(di("ap")),l.appendChild(this.alphaViews_.palette.element),a.appendChild(l);const c=e.createElement("div");c.classList.add(di("at")),c.appendChild(this.alphaViews_.text.element),a.appendChild(c),this.element.appendChild(a)}}get allFocusableElements(){const e=[this.svPaletteView_.element,this.hPaletteView_.element,this.textsView_.modeSelectElement,...this.textsView_.inputViews.map(t=>t.inputElement)];return this.alphaViews_&&e.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),e}}function Pw(i){return i==="int"?"int":i==="float"?"float":void 0}function Rc(i){return dt(i,e=>({color:e.optional.object({alpha:e.optional.boolean,type:e.optional.custom(Pw)}),expanded:e.optional.boolean,picker:e.optional.custom(Ap),readonly:e.optional.constant(!1)}))}function Wi(i){return i?.1:1}function Lp(i){var e;return(e=i.color)===null||e===void 0?void 0:e.type}class Lc{constructor(e,t){this.type="float",this.mode=t,this.comps_=Pp(e,t,this.type)}getComponents(e){return Jo(Rp(In(this.comps_),{mode:this.mode,type:this.type},{mode:e??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const e=this.getComponents("rgb");return{r:e[0],g:e[1],b:e[2],a:e[3]}}}const Rw={int:(i,e)=>new Je(i,e),float:(i,e)=>new Lc(i,e)};function Ic(i,e,t){return Rw[t](i,e)}function Lw(i){return i.type==="float"}function Iw(i){return i.type==="int"}function Dw(i){const e=i.getComponents(),t=kr(i.mode,"int");return new Je([Math.round(nt(e[0],0,1,0,t[0])),Math.round(nt(e[1],0,1,0,t[1])),Math.round(nt(e[2],0,1,0,t[2])),e[3]],i.mode)}function Nw(i){const e=i.getComponents(),t=kr(i.mode,"int");return new Lc([nt(e[0],0,t[0],0,1),nt(e[1],0,t[1],0,1),nt(e[2],0,t[2],0,1),e[3]],i.mode)}function Ht(i,e){if(i.type===e)return i;if(Iw(i)&&e==="float")return Nw(i);if(Lw(i)&&e==="int")return Dw(i);throw mt.shouldNeverHappen()}function Uw(i,e){return i.alpha===e.alpha&&i.mode===e.mode&&i.notation===e.notation&&i.type===e.type}function dn(i,e){const t=i.match(/^(.+)%$/);return Math.min(t?parseFloat(t[1])*.01*e:parseFloat(i),e)}const Ow={deg:i=>i,grad:i=>i*360/400,rad:i=>i*360/(2*Math.PI),turn:i=>i*360};function Ip(i){const e=i.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!e)return parseFloat(i);const t=parseFloat(e[1]),n=e[2];return Ow[n](t)}function Dp(i){const e=i.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[dn(e[1],255),dn(e[2],255),dn(e[3],255)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Fw(i){const e=Dp(i);return e?new Je(e,"rgb"):null}function Np(i){const e=i.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[dn(e[1],255),dn(e[2],255),dn(e[3],255),dn(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function kw(i){const e=Np(i);return e?new Je(e,"rgb"):null}function Up(i){const e=i.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Ip(e[1]),dn(e[2],100),dn(e[3],100)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Bw(i){const e=Up(i);return e?new Je(e,"hsl"):null}function Op(i){const e=i.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!e)return null;const t=[Ip(e[1]),dn(e[2],100),dn(e[3],100),dn(e[4],1)];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Vw(i){const e=Op(i);return e?new Je(e,"hsl"):null}function Fp(i){const e=i.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)];const t=i.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function zw(i){const e=Fp(i);return e?new Je(e,"rgb"):null}function kp(i){const e=i.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(e)return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16),nt(parseInt(e[4]+e[4],16),0,255,0,1)];const t=i.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),nt(parseInt(t[4],16),0,255,0,1)]:null}function Hw(i){const e=kp(i);return e?new Je(e,"rgb"):null}function Bp(i){const e=i.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])?null:t}function Gw(i){return e=>{const t=Bp(e);return t?Ic(t,"rgb",i):null}}function Vp(i){const e=i.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!e)return null;const t=[parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4])];return isNaN(t[0])||isNaN(t[1])||isNaN(t[2])||isNaN(t[3])?null:t}function Ww(i){return e=>{const t=Vp(e);return t?Ic(t,"rgb",i):null}}const jw=[{parser:Fp,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:kp,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:Dp,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:Np,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:Up,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:Op,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:Bp,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Vp,result:{alpha:!0,mode:"rgb",notation:"object"}}];function Xw(i){return jw.reduce((e,{parser:t,result:n})=>e||(t(i)?n:null),null)}function qw(i,e="int"){const t=Xw(i);return t?t.notation==="hex"&&e!=="float"?Object.assign(Object.assign({},t),{type:"int"}):t.notation==="func"?Object.assign(Object.assign({},t),{type:e}):null:null}function Os(i){const e=[zw,Hw,Fw,kw,Bw,Vw];e.push(Gw("int"),Ww("int"));const t=aw(e);return n=>{const r=t(n);return r?Ht(r,i):null}}function Kw(i){const e=Os("int");if(typeof i!="string")return Je.black();const t=e(i);return t??Je.black()}function zp(i){const e=Et(Math.floor(i),0,255).toString(16);return e.length===1?`0${e}`:e}function Dc(i,e="#"){const t=In(i.getComponents("rgb")).map(zp).join("");return`${e}${t}`}function Nc(i,e="#"){const t=i.getComponents("rgb"),n=[t[0],t[1],t[2],t[3]*255].map(zp).join("");return`${e}${n}`}function Hp(i){const e=Zt(0),t=Ht(i,"int");return`rgb(${In(t.getComponents("rgb")).map(r=>e(r)).join(", ")})`}function Ao(i){const e=Zt(2),t=Zt(0);return`rgba(${Ht(i,"int").getComponents("rgb").map((s,o)=>(o===3?e:t)(s)).join(", ")})`}function Yw(i){const e=[Zt(0),zo,zo],t=Ht(i,"int");return`hsl(${In(t.getComponents("hsl")).map((r,s)=>e[s](r)).join(", ")})`}function $w(i){const e=[Zt(0),zo,zo,Zt(2)];return`hsla(${Ht(i,"int").getComponents("hsl").map((r,s)=>e[s](r)).join(", ")})`}function Gp(i,e){const t=Zt(e==="float"?2:0),n=["r","g","b"],r=Ht(i,e);return`{${In(r.getComponents("rgb")).map((o,a)=>`${n[a]}: ${t(o)}`).join(", ")}}`}function Zw(i){return e=>Gp(e,i)}function Wp(i,e){const t=Zt(2),n=Zt(e==="float"?2:0),r=["r","g","b","a"];return`{${Ht(i,e).getComponents("rgb").map((a,l)=>{const c=l===3?t:n;return`${r[l]}: ${c(a)}`}).join(", ")}}`}function Jw(i){return e=>Wp(e,i)}const Qw=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Dc},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Nc},{format:{alpha:!1,mode:"rgb",notation:"func",type:"int"},stringifier:Hp},{format:{alpha:!0,mode:"rgb",notation:"func",type:"int"},stringifier:Ao},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:Yw},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:$w},...["int","float"].reduce((i,e)=>[...i,{format:{alpha:!1,mode:"rgb",notation:"object",type:e},stringifier:Zw(e)},{format:{alpha:!0,mode:"rgb",notation:"object",type:e},stringifier:Jw(e)}],[])];function jp(i){return Qw.reduce((e,t)=>e||(Uw(t.format,i)?t.stringifier:null),null)}const ss=$e("apl");class eM{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(ss()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const n=e.createElement("div");n.classList.add(ss("b")),this.element.appendChild(n);const r=e.createElement("div");r.classList.add(ss("c")),n.appendChild(r),this.colorElem_=r;const s=e.createElement("div");s.classList.add(ss("m")),this.element.appendChild(s),this.markerElem_=s;const o=e.createElement("div");o.classList.add(ss("p")),this.markerElem_.appendChild(o),this.previewElem_=o,this.update_()}update_(){const e=this.value.rawValue,t=e.getComponents("rgb"),n=new Je([t[0],t[1],t[2],0],"rgb"),r=new Je([t[0],t[1],t[2],255],"rgb"),s=["to right",Ao(n),Ao(r)];this.colorElem_.style.background=`linear-gradient(${s.join(",")})`,this.previewElem_.style.backgroundColor=Ao(e);const o=nt(t[3],0,1,0,100);this.markerElem_.style.left=`${o}%`}onValueChange_(){this.update_()}}class tM{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new eM(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new qi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const n=e.point.x/e.bounds.width,r=this.value.rawValue,[s,o,a]=r.getComponents("hsv");this.value.setRawValue(new Je([s,o,a,n],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Kt(Wi(!0),ei(e));if(t===0)return;const n=this.value.rawValue,[r,s,o,a]=n.getComponents("hsv");this.value.setRawValue(new Je([r,s,o,a+t],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){Kt(Wi(!0),ei(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const gr=$e("coltxt");function nM(i){const e=i.createElement("select"),t=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"},{text:"HEX",value:"hex"}];return e.appendChild(t.reduce((n,r)=>{const s=i.createElement("option");return s.textContent=r.text,s.value=r.value,n.appendChild(s),n},i.createDocumentFragment())),e}class iM{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(gr()),t.viewProps.bindClassModifiers(this.element);const n=e.createElement("div");n.classList.add(gr("m")),this.modeElem_=nM(e),this.modeElem_.classList.add(gr("ms")),n.appendChild(this.modeSelectElement),t.viewProps.bindDisabled(this.modeElem_);const r=e.createElement("div");r.classList.add(gr("mm")),r.appendChild($o(e,"dropdown")),n.appendChild(r),this.element.appendChild(n);const s=e.createElement("div");s.classList.add(gr("w")),this.element.appendChild(s),this.inputsElem_=s,this.inputViews_=t.inputViews,this.applyInputViews_(),Yn(t.mode,o=>{this.modeElem_.value=o})}get modeSelectElement(){return this.modeElem_}get inputViews(){return this.inputViews_}set inputViews(e){this.inputViews_=e,this.applyInputViews_()}applyInputViews_(){hp(this.inputsElem_);const e=this.element.ownerDocument;this.inputViews_.forEach(t=>{const n=e.createElement("div");n.classList.add(gr("c")),n.appendChild(t.element),this.inputsElem_.appendChild(n)})}}function rM(i){return Zt(i==="float"?2:0)}function sM(i,e,t){const n=kr(i,e)[t];return new Cs({min:0,max:n})}function oM(i,e,t){return new Ns(i,{arrayPosition:t===0?"fst":t===2?"lst":"mid",parser:e.parser,props:Xe.fromObject({formatter:rM(e.colorType),keyScale:Wi(!1),pointerScale:e.colorType==="float"?.01:1}),value:ht(0,{constraint:sM(e.colorMode,e.colorType,t)}),viewProps:e.viewProps})}function aM(i,e){const t={colorMode:e.colorMode,colorType:e.colorType,parser:Qn,viewProps:e.viewProps};return[0,1,2].map(n=>{const r=oM(i,t,n);return jr({primary:e.value,secondary:r.value,forward(s){return Ht(s,e.colorType).getComponents(e.colorMode)[n]},backward(s,o){const a=e.colorMode,c=Ht(s,e.colorType).getComponents(a);c[n]=o;const u=Ic(Jo(In(c),c[3]),a,e.colorType);return Ht(u,"int")}}),r})}function lM(i,e){const t=new ys(i,{parser:Os("int"),props:Xe.fromObject({formatter:Dc}),value:ht(Je.black()),viewProps:e.viewProps});return jr({primary:e.value,secondary:t.value,forward:n=>new Je(In(n.getComponents()),n.mode),backward:(n,r)=>new Je(Jo(In(r.getComponents(n.mode)),n.getComponents()[3]),n.mode)}),[t]}function cM(i){return i!=="hex"}class uM{constructor(e,t){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=t.colorType,this.value=t.value,this.viewProps=t.viewProps,this.colorMode=ht(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(e),this.view=new iM(e,{mode:this.colorMode,inputViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(e){const t=this.colorMode.rawValue;return cM(t)?aM(e,{colorMode:t,colorType:this.colorType_,value:this.value,viewProps:this.viewProps}):lM(e,{value:this.value,viewProps:this.viewProps})}onModeSelectChange_(e){const t=e.currentTarget;this.colorMode.rawValue=t.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.inputViews=this.ccs_.map(n=>n.view)}}const Va=$e("hpl");class hM{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(Va()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const n=e.createElement("div");n.classList.add(Va("c")),this.element.appendChild(n);const r=e.createElement("div");r.classList.add(Va("m")),this.element.appendChild(r),this.markerElem_=r,this.update_()}update_(){const e=this.value.rawValue,[t]=e.getComponents("hsv");this.markerElem_.style.backgroundColor=Hp(new Je([t,100,100],"hsv"));const n=nt(t,0,360,0,100);this.markerElem_.style.left=`${n}%`}onValueChange_(){this.update_()}}class dM{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new hM(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new qi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const n=nt(Et(e.point.x,0,e.bounds.width),0,e.bounds.width,0,360),r=this.value.rawValue,[,s,o,a]=r.getComponents("hsv");this.value.setRawValue(new Je([n,s,o,a],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){const t=Kt(Wi(!1),ei(e));if(t===0)return;const n=this.value.rawValue,[r,s,o,a]=n.getComponents("hsv");this.value.setRawValue(new Je([r+t,s,o,a],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){Kt(Wi(!1),ei(e))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const za=$e("svp"),Ah=64;class pM{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),this.value=t.value,this.value.emitter.on("change",this.onValueChange_),this.element=e.createElement("div"),this.element.classList.add(za()),t.viewProps.bindClassModifiers(this.element),t.viewProps.bindTabIndex(this.element);const n=e.createElement("canvas");n.height=Ah,n.width=Ah,n.classList.add(za("c")),this.element.appendChild(n),this.canvasElement=n;const r=e.createElement("div");r.classList.add(za("m")),this.element.appendChild(r),this.markerElem_=r,this.update_()}update_(){const e=dy(this.canvasElement);if(!e)return;const n=this.value.rawValue.getComponents("hsv"),r=this.canvasElement.width,s=this.canvasElement.height,o=e.getImageData(0,0,r,s),a=o.data;for(let u=0;u<s;u++)for(let h=0;h<r;h++){const d=nt(h,0,r,0,100),g=nt(u,0,s,100,0),v=Cp(n[0],d,g),x=(u*r+h)*4;a[x]=v[0],a[x+1]=v[1],a[x+2]=v[2],a[x+3]=255}e.putImageData(o,0,0);const l=nt(n[1],0,100,0,100);this.markerElem_.style.left=`${l}%`;const c=nt(n[2],0,100,100,0);this.markerElem_.style.top=`${c}%`}onValueChange_(){this.update_()}}class fM{constructor(e,t){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.view=new pM(e,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new qi(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const n=nt(e.point.x,0,e.bounds.width,0,100),r=nt(e.point.y,0,e.bounds.height,100,0),[s,,,o]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Je([s,n,r,o],"hsv"),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onKeyDown_(e){Ep(e.key)&&e.preventDefault();const[t,n,r,s]=this.value.rawValue.getComponents("hsv"),o=Wi(!1),a=Kt(o,ei(e)),l=Kt(o,ws(e));a===0&&l===0||this.value.setRawValue(new Je([t,n+a,r+l,s],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(e){const t=Wi(!1),n=Kt(t,ei(e)),r=Kt(t,ws(e));n===0&&r===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class mM{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.hPaletteC_=new dM(e,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new fM(e,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=t.supportsAlpha?{palette:new tM(e,{value:this.value,viewProps:this.viewProps}),text:new Ns(e,{parser:Qn,props:Xe.fromObject({pointerScale:.01,keyScale:.1,formatter:Zt(2)}),value:ht(0,{constraint:new Cs({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&jr({primary:this.value,secondary:this.alphaIcs_.text.value,forward:n=>n.getComponents()[3],backward:(n,r)=>{const s=n.getComponents();return s[3]=r,new Je(s,n.mode)}}),this.textsC_=new uM(e,{colorType:t.colorType,value:this.value,viewProps:this.viewProps}),this.view=new Cw(e,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:t.supportsAlpha,svPaletteView:this.svPaletteC_.view,textsView:this.textsC_.view,viewProps:this.viewProps})}get textsController(){return this.textsC_}}const Ha=$e("colsw");class gM{constructor(e,t){this.onValueChange_=this.onValueChange_.bind(this),t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.element=e.createElement("div"),this.element.classList.add(Ha()),t.viewProps.bindClassModifiers(this.element);const n=e.createElement("div");n.classList.add(Ha("sw")),this.element.appendChild(n),this.swatchElem_=n;const r=e.createElement("button");r.classList.add(Ha("b")),t.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r,this.update_()}update_(){const e=this.value.rawValue;this.swatchElem_.style.backgroundColor=Nc(e)}onValueChange_(){this.update_()}}class _M{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new gM(e,{value:this.value,viewProps:this.viewProps})}}class Uc{constructor(e,t){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Rs.create(t.expanded),this.swatchC_=new _M(e,{value:this.value,viewProps:this.viewProps});const n=this.swatchC_.view.buttonElement;n.addEventListener("blur",this.onButtonBlur_),n.addEventListener("click",this.onButtonClick_),this.textC_=new ys(e,{parser:t.parser,props:Xe.fromObject({formatter:t.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new xw(e,{foldable:this.foldable_,pickerLayout:t.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=t.pickerLayout==="popup"?new yp(e,{viewProps:this.viewProps}):null;const r=new mM(e,{colorType:t.colorType,supportsAlpha:t.supportsAlpha,value:this.value,viewProps:this.viewProps});r.view.allFocusableElements.forEach(s=>{s.addEventListener("blur",this.onPopupChildBlur_),s.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=r,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(r.view.element),jr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:s=>s,backward:(s,o)=>o})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Tc(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,n=e.relatedTarget;(!n||!t.contains(n))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,n=dp(e);n&&t.contains(n)||n&&n===this.swatchC_.view.buttonElement&&!xc(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function vM(i){return In(i.getComponents("rgb")).reduce((e,t)=>e<<8|Math.floor(t)&255,0)}function bM(i){return i.getComponents("rgb").reduce((e,t,n)=>{const r=Math.floor(n===3?t*255:t)&255;return e<<8|r},0)>>>0}function xM(i){return new Je([i>>16&255,i>>8&255,i&255],"rgb")}function yM(i){return new Je([i>>24&255,i>>16&255,i>>8&255,nt(i&255,0,255,0,1)],"rgb")}function wM(i){return typeof i!="number"?Je.black():xM(i)}function MM(i){return typeof i!="number"?Je.black():yM(i)}function Co(i,e){return typeof i!="object"||lt(i)?!1:e in i&&typeof i[e]=="number"}function Xp(i){return Co(i,"r")&&Co(i,"g")&&Co(i,"b")}function qp(i){return Xp(i)&&Co(i,"a")}function Kp(i){return Xp(i)}function Oc(i,e){if(i.mode!==e.mode||i.type!==e.type)return!1;const t=i.getComponents(),n=e.getComponents();for(let r=0;r<t.length;r++)if(t[r]!==n[r])return!1;return!0}function Ch(i){return"a"in i?[i.r,i.g,i.b,i.a]:[i.r,i.g,i.b]}function EM(i){const e=jp(i);return e?(t,n)=>{Us(t,e(n))}:null}function SM(i){const e=i?bM:vM;return(t,n)=>{Us(t,e(n))}}function TM(i,e,t){const r=Ht(e,t).toRgbaObject();i.writeProperty("r",r.r),i.writeProperty("g",r.g),i.writeProperty("b",r.b),i.writeProperty("a",r.a)}function AM(i,e,t){const r=Ht(e,t).toRgbaObject();i.writeProperty("r",r.r),i.writeProperty("g",r.g),i.writeProperty("b",r.b)}function CM(i,e){return(t,n)=>{i?TM(t,n,e):AM(t,n,e)}}function PM(i){var e;return!!(!((e=i==null?void 0:i.color)===null||e===void 0)&&e.alpha)}function RM(i){return i?e=>Nc(e,"0x"):e=>Dc(e,"0x")}function LM(i){return"color"in i||i.view==="color"}const IM=Gt({id:"input-color-number",type:"input",accept:(i,e)=>{if(typeof i!="number"||!LM(e))return null;const t=Rc(e);return t?{initialValue:i,params:Object.assign(Object.assign({},t),{supportsAlpha:PM(e)})}:null},binding:{reader:i=>i.params.supportsAlpha?MM:wM,equals:Oc,writer:i=>SM(i.params.supportsAlpha)},controller:i=>{var e,t;return new Uc(i.document,{colorType:"int",expanded:(e=i.params.expanded)!==null&&e!==void 0?e:!1,formatter:RM(i.params.supportsAlpha),parser:Os("int"),pickerLayout:(t=i.params.picker)!==null&&t!==void 0?t:"popup",supportsAlpha:i.params.supportsAlpha,value:i.value,viewProps:i.viewProps})}});function DM(i,e){if(!Kp(i))return Ht(Je.black(),e);if(e==="int"){const t=Ch(i);return new Je(t,"rgb")}if(e==="float"){const t=Ch(i);return new Lc(t,"rgb")}return Ht(Je.black(),"int")}function NM(i){return qp(i)}function UM(i){return e=>{const t=DM(e,i);return Ht(t,"int")}}function OM(i,e){return t=>i?Wp(t,e):Gp(t,e)}const FM=Gt({id:"input-color-object",type:"input",accept:(i,e)=>{var t;if(!Kp(i))return null;const n=Rc(e);return n?{initialValue:i,params:Object.assign(Object.assign({},n),{colorType:(t=Lp(e))!==null&&t!==void 0?t:"int"})}:null},binding:{reader:i=>UM(i.params.colorType),equals:Oc,writer:i=>CM(NM(i.initialValue),i.params.colorType)},controller:i=>{var e,t;const n=qp(i.initialValue);return new Uc(i.document,{colorType:i.params.colorType,expanded:(e=i.params.expanded)!==null&&e!==void 0?e:!1,formatter:OM(n,i.params.colorType),parser:Os("int"),pickerLayout:(t=i.params.picker)!==null&&t!==void 0?t:"popup",supportsAlpha:n,value:i.value,viewProps:i.viewProps})}}),kM=Gt({id:"input-color-string",type:"input",accept:(i,e)=>{if(typeof i!="string"||e.view==="text")return null;const t=qw(i,Lp(e));if(!t)return null;const n=jp(t);if(!n)return null;const r=Rc(e);return r?{initialValue:i,params:Object.assign(Object.assign({},r),{format:t,stringifier:n})}:null},binding:{reader:()=>Kw,equals:Oc,writer:i=>{const e=EM(i.params.format);if(!e)throw mt.notBindable();return e}},controller:i=>{var e,t;return new Uc(i.document,{colorType:i.params.format.type,expanded:(e=i.params.expanded)!==null&&e!==void 0?e:!1,formatter:i.params.stringifier,parser:Os("int"),pickerLayout:(t=i.params.picker)!==null&&t!==void 0?t:"popup",supportsAlpha:i.params.format.alpha,value:i.value,viewProps:i.viewProps})}});class Fc{constructor(e){this.components=e.components,this.asm_=e.assembly}constrain(e){const t=this.asm_.toComponents(e).map((n,r)=>{var s,o;return(o=(s=this.components[r])===null||s===void 0?void 0:s.constrain(n))!==null&&o!==void 0?o:n});return this.asm_.fromComponents(t)}}const Ph=$e("pndtxt");class BM{constructor(e,t){this.textViews=t.textViews,this.element=e.createElement("div"),this.element.classList.add(Ph()),this.textViews.forEach(n=>{const r=e.createElement("div");r.classList.add(Ph("a")),r.appendChild(n.element),this.element.appendChild(r)})}}function VM(i,e,t){return new Ns(i,{arrayPosition:t===0?"fst":t===e.axes.length-1?"lst":"mid",parser:e.parser,props:e.axes[t].textProps,value:ht(0,{constraint:e.axes[t].constraint}),viewProps:e.viewProps})}class kc{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.acs_=t.axes.map((n,r)=>VM(e,t,r)),this.acs_.forEach((n,r)=>{jr({primary:this.value,secondary:n.value,forward:s=>t.assembly.toComponents(s)[r],backward:(s,o)=>{const a=t.assembly.toComponents(s);return a[r]=o,t.assembly.fromComponents(a)}})}),this.view=new BM(e,{textViews:this.acs_.map(n=>n.view)})}get textControllers(){return this.acs_}}class zM extends xs{get max(){return this.controller.valueController.sliderController.props.get("max")}set max(e){this.controller.valueController.sliderController.props.set("max",e)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(e){this.controller.valueController.sliderController.props.set("min",e)}}function HM(i,e){const t=[],n=sp(i,e);n&&t.push(n);const r=op(i);r&&t.push(r);const s=Pc(i.options);return s&&t.push(s),new Ls(t)}const GM=Gt({id:"input-number",type:"input",accept:(i,e)=>{if(typeof i!="number")return null;const t=dt(e,n=>Object.assign(Object.assign({},lp(n)),{options:n.optional.custom(Ds),readonly:n.optional.constant(!1)}));return t?{initialValue:i,params:t}:null},binding:{reader:i=>tp,constraint:i=>HM(i.params,i.initialValue),writer:i=>Us},controller:i=>{const e=i.value,t=i.constraint,n=t&&Vo(t,Is);if(n)return new Mi(i.document,{props:new Xe({options:n.values.value("options")}),value:e,viewProps:i.viewProps});const r=ap(i.params,e.rawValue),s=t&&Vo(t,Cs);return s?new Ho(i.document,Object.assign(Object.assign({},Sp(Object.assign(Object.assign({},r),{keyScale:ht(r.keyScale),max:s.values.value("max"),min:s.values.value("min")}))),{parser:Qn,value:e,viewProps:i.viewProps})):new Ns(i.document,{parser:Qn,props:Xe.fromObject(r),value:e,viewProps:i.viewProps})},api(i){return typeof i.controller.value.rawValue!="number"?null:i.controller.valueController instanceof Ho?new zM(i.controller):i.controller.valueController instanceof Mi?new Ac(i.controller):null}});class wi{constructor(e=0,t=0){this.x=e,this.y=t}getComponents(){return[this.x,this.y]}static isObject(e){if(lt(e))return!1;const t=e.x,n=e.y;return!(typeof t!="number"||typeof n!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y}toObject(){return{x:this.x,y:this.y}}}const Yp={toComponents:i=>i.getComponents(),fromComponents:i=>new wi(...i)},_r=$e("p2d");class WM{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(_r()),t.viewProps.bindClassModifiers(this.element),Yn(t.expanded,Hr(this.element,_r(void 0,"expanded")));const n=e.createElement("div");n.classList.add(_r("h")),this.element.appendChild(n);const r=e.createElement("button");r.classList.add(_r("b")),r.appendChild($o(e,"p2dpad")),t.viewProps.bindDisabled(r),n.appendChild(r),this.buttonElement=r;const s=e.createElement("div");if(s.classList.add(_r("t")),n.appendChild(s),this.textElement=s,t.pickerLayout==="inline"){const o=e.createElement("div");o.classList.add(_r("p")),this.element.appendChild(o),this.pickerElement=o}else this.pickerElement=null}}const pi=$e("p2dp");class jM{constructor(e,t){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onPropsChange_=this.onPropsChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.props_=t.props,this.props_.emitter.on("change",this.onPropsChange_),this.element=e.createElement("div"),this.element.classList.add(pi()),t.layout==="popup"&&this.element.classList.add(pi(void 0,"p")),t.viewProps.bindClassModifiers(this.element);const n=e.createElement("div");n.classList.add(pi("p")),t.viewProps.bindTabIndex(n),this.element.appendChild(n),this.padElement=n;const r=e.createElementNS(Pn,"svg");r.classList.add(pi("g")),this.padElement.appendChild(r),this.svgElem_=r;const s=e.createElementNS(Pn,"line");s.classList.add(pi("ax")),s.setAttributeNS(null,"x1","0"),s.setAttributeNS(null,"y1","50%"),s.setAttributeNS(null,"x2","100%"),s.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(s);const o=e.createElementNS(Pn,"line");o.classList.add(pi("ax")),o.setAttributeNS(null,"x1","50%"),o.setAttributeNS(null,"y1","0"),o.setAttributeNS(null,"x2","50%"),o.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(o);const a=e.createElementNS(Pn,"line");a.classList.add(pi("l")),a.setAttributeNS(null,"x1","50%"),a.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(a),this.lineElem_=a;const l=e.createElement("div");l.classList.add(pi("m")),this.padElement.appendChild(l),this.markerElem_=l,t.value.emitter.on("change",this.onValueChange_),this.value=t.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[e,t]=this.value.rawValue.getComponents(),n=this.props_.get("max"),r=nt(e,-n,+n,0,100),s=nt(t,-n,+n,0,100),o=this.props_.get("invertsY")?100-s:s;this.lineElem_.setAttributeNS(null,"x2",`${r}%`),this.lineElem_.setAttributeNS(null,"y2",`${o}%`),this.markerElem_.style.left=`${r}%`,this.markerElem_.style.top=`${o}%`}onValueChange_(){this.update_()}onPropsChange_(){this.update_()}onFoldableChange_(){this.update_()}}function Rh(i,e,t){return[Kt(e[0],ei(i)),Kt(e[1],ws(i))*(t?1:-1)]}class XM{constructor(e,t){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.view=new jM(e,{layout:t.layout,props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new qi(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(e,t){if(!e.point)return;const n=this.props.get("max"),r=nt(e.point.x,0,e.bounds.width,-n,+n),s=nt(this.props.get("invertsY")?e.bounds.height-e.point.y:e.point.y,0,e.bounds.height,-n,+n);this.value.setRawValue(new wi(r,s),t)}onPointerDown_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerMove_(e){this.handlePointerEvent_(e.data,{forceEmit:!1,last:!1})}onPointerUp_(e){this.handlePointerEvent_(e.data,{forceEmit:!0,last:!0})}onPadKeyDown_(e){Ep(e.key)&&e.preventDefault();const[t,n]=Rh(e,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));t===0&&n===0||this.value.setRawValue(new wi(this.value.rawValue.x+t,this.value.rawValue.y+n),{forceEmit:!1,last:!1})}onPadKeyUp_(e){const[t,n]=Rh(e,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));t===0&&n===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class qM{constructor(e,t){var n,r;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=t.value,this.viewProps=t.viewProps,this.foldable_=Rs.create(t.expanded),this.popC_=t.pickerLayout==="popup"?new yp(e,{viewProps:this.viewProps}):null;const s=new XM(e,{layout:t.pickerLayout,props:new Xe({invertsY:ht(t.invertsY),max:ht(t.max),xKeyScale:t.axes[0].textProps.value("keyScale"),yKeyScale:t.axes[1].textProps.value("keyScale")}),value:this.value,viewProps:this.viewProps});s.view.allFocusableElements.forEach(o=>{o.addEventListener("blur",this.onPopupChildBlur_),o.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=s,this.textC_=new kc(e,{assembly:Yp,axes:t.axes,parser:t.parser,value:this.value,viewProps:this.viewProps}),this.view=new WM(e,{expanded:this.foldable_.value("expanded"),pickerLayout:t.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(n=this.view.buttonElement)===null||n===void 0||n.addEventListener("blur",this.onPadButtonBlur_),(r=this.view.buttonElement)===null||r===void 0||r.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),jr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:o=>o,backward:(o,a)=>a})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Tc(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onPadButtonBlur_(e){if(!this.popC_)return;const t=this.view.element,n=e.relatedTarget;(!n||!t.contains(n))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(e){if(!this.popC_)return;const t=this.popC_.view.element,n=dp(e);n&&t.contains(n)||n&&n===this.view.buttonElement&&!xc(t.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(e){this.popC_?e.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&e.key==="Escape"&&this.view.buttonElement.focus()}}function KM(i){return wi.isObject(i)?new wi(i.x,i.y):new wi}function YM(i,e){i.writeProperty("x",e.x),i.writeProperty("y",e.y)}function $M(i,e){return new Fc({assembly:Yp,components:[qn(Object.assign(Object.assign({},i),i.x),e.x),qn(Object.assign(Object.assign({},i),i.y),e.y)]})}function Lh(i,e){var t,n;if(!lt(i.min)||!lt(i.max))return Math.max(Math.abs((t=i.min)!==null&&t!==void 0?t:0),Math.abs((n=i.max)!==null&&n!==void 0?n:0));const r=ip(i);return Math.max(Math.abs(r)*10,Math.abs(e)*10)}function ZM(i,e){var t,n;const r=Lh(Hi(i,(t=i.x)!==null&&t!==void 0?t:{}),e.x),s=Lh(Hi(i,(n=i.y)!==null&&n!==void 0?n:{}),e.y);return Math.max(r,s)}function JM(i){if(!("y"in i))return!1;const e=i.y;return e&&"inverted"in e?!!e.inverted:!1}const QM=Gt({id:"input-point2d",type:"input",accept:(i,e)=>{if(!wi.isObject(i))return null;const t=dt(e,n=>Object.assign(Object.assign({},Ms(n)),{expanded:n.optional.boolean,picker:n.optional.custom(Ap),readonly:n.optional.constant(!1),x:n.optional.custom(xi),y:n.optional.object(Object.assign(Object.assign({},Ms(n)),{inverted:n.optional.boolean}))}));return t?{initialValue:i,params:t}:null},binding:{reader:()=>KM,constraint:i=>$M(i.params,i.initialValue),equals:wi.equals,writer:()=>YM},controller:i=>{var e,t;const n=i.document,r=i.value,s=i.constraint,o=[i.params.x,i.params.y];return new qM(n,{axes:r.rawValue.getComponents().map((a,l)=>{var c;return bc({constraint:s.components[l],initialValue:a,params:Hi(i.params,(c=o[l])!==null&&c!==void 0?c:{})})}),expanded:(e=i.params.expanded)!==null&&e!==void 0?e:!1,invertsY:JM(i.params),max:ZM(i.params,r.rawValue),parser:Qn,pickerLayout:(t=i.params.picker)!==null&&t!==void 0?t:"popup",value:r,viewProps:i.viewProps})}});class Er{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}getComponents(){return[this.x,this.y,this.z]}static isObject(e){if(lt(e))return!1;const t=e.x,n=e.y,r=e.z;return!(typeof t!="number"||typeof n!="number"||typeof r!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const $p={toComponents:i=>i.getComponents(),fromComponents:i=>new Er(...i)};function eE(i){return Er.isObject(i)?new Er(i.x,i.y,i.z):new Er}function tE(i,e){i.writeProperty("x",e.x),i.writeProperty("y",e.y),i.writeProperty("z",e.z)}function nE(i,e){return new Fc({assembly:$p,components:[qn(Object.assign(Object.assign({},i),i.x),e.x),qn(Object.assign(Object.assign({},i),i.y),e.y),qn(Object.assign(Object.assign({},i),i.z),e.z)]})}const iE=Gt({id:"input-point3d",type:"input",accept:(i,e)=>{if(!Er.isObject(i))return null;const t=dt(e,n=>Object.assign(Object.assign({},Ms(n)),{readonly:n.optional.constant(!1),x:n.optional.custom(xi),y:n.optional.custom(xi),z:n.optional.custom(xi)}));return t?{initialValue:i,params:t}:null},binding:{reader:i=>eE,constraint:i=>nE(i.params,i.initialValue),equals:Er.equals,writer:i=>tE},controller:i=>{const e=i.value,t=i.constraint,n=[i.params.x,i.params.y,i.params.z];return new kc(i.document,{assembly:$p,axes:e.rawValue.getComponents().map((r,s)=>{var o;return bc({constraint:t.components[s],initialValue:r,params:Hi(i.params,(o=n[s])!==null&&o!==void 0?o:{})})}),parser:Qn,value:e,viewProps:i.viewProps})}});class Sr{constructor(e=0,t=0,n=0,r=0){this.x=e,this.y=t,this.z=n,this.w=r}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(e){if(lt(e))return!1;const t=e.x,n=e.y,r=e.z,s=e.w;return!(typeof t!="number"||typeof n!="number"||typeof r!="number"||typeof s!="number")}static equals(e,t){return e.x===t.x&&e.y===t.y&&e.z===t.z&&e.w===t.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Zp={toComponents:i=>i.getComponents(),fromComponents:i=>new Sr(...i)};function rE(i){return Sr.isObject(i)?new Sr(i.x,i.y,i.z,i.w):new Sr}function sE(i,e){i.writeProperty("x",e.x),i.writeProperty("y",e.y),i.writeProperty("z",e.z),i.writeProperty("w",e.w)}function oE(i,e){return new Fc({assembly:Zp,components:[qn(Object.assign(Object.assign({},i),i.x),e.x),qn(Object.assign(Object.assign({},i),i.y),e.y),qn(Object.assign(Object.assign({},i),i.z),e.z),qn(Object.assign(Object.assign({},i),i.w),e.w)]})}const aE=Gt({id:"input-point4d",type:"input",accept:(i,e)=>{if(!Sr.isObject(i))return null;const t=dt(e,n=>Object.assign(Object.assign({},Ms(n)),{readonly:n.optional.constant(!1),w:n.optional.custom(xi),x:n.optional.custom(xi),y:n.optional.custom(xi),z:n.optional.custom(xi)}));return t?{initialValue:i,params:t}:null},binding:{reader:i=>rE,constraint:i=>oE(i.params,i.initialValue),equals:Sr.equals,writer:i=>sE},controller:i=>{const e=i.value,t=i.constraint,n=[i.params.x,i.params.y,i.params.z,i.params.w];return new kc(i.document,{assembly:Zp,axes:e.rawValue.getComponents().map((r,s)=>{var o;return bc({constraint:t.components[s],initialValue:r,params:Hi(i.params,(o=n[s])!==null&&o!==void 0?o:{})})}),parser:Qn,value:e,viewProps:i.viewProps})}});function lE(i){const e=[],t=Pc(i.options);return t&&e.push(t),new Ls(e)}const cE=Gt({id:"input-string",type:"input",accept:(i,e)=>{if(typeof i!="string")return null;const t=dt(e,n=>({readonly:n.optional.constant(!1),options:n.optional.custom(Ds)}));return t?{initialValue:i,params:t}:null},binding:{reader:i=>Mp,constraint:i=>lE(i.params),writer:i=>Us},controller:i=>{const e=i.document,t=i.value,n=i.constraint,r=n&&Vo(n,Is);return r?new Mi(e,{props:new Xe({options:r.values.value("options")}),value:t,viewProps:i.viewProps}):new ys(e,{parser:s=>s,props:Xe.fromObject({formatter:Fl}),value:t,viewProps:i.viewProps})},api(i){return typeof i.controller.value.rawValue!="string"?null:i.controller.valueController instanceof Mi?new Ac(i.controller):null}}),Fs={monitor:{defaultInterval:200,defaultRows:3}},Ih=$e("mll");class uE{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Ih()),t.viewProps.bindClassModifiers(this.element);const n=e.createElement("textarea");n.classList.add(Ih("i")),n.style.height=`calc(var(${Tp("containerUnitSize")}) * ${t.rows})`,n.readOnly=!0,t.viewProps.bindDisabled(n),this.element.appendChild(n),this.textareaElem_=n,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.textareaElem_,t=e.scrollTop===e.scrollHeight-e.clientHeight,n=[];this.value.rawValue.forEach(r=>{r!==void 0&&n.push(this.formatter_(r))}),e.textContent=n.join(`
`),t&&(e.scrollTop=e.scrollHeight)}onValueUpdate_(){this.update_()}}class Bc{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new uE(e,{formatter:t.formatter,rows:t.rows,value:this.value,viewProps:this.viewProps})}}const Dh=$e("sgl");class hE{constructor(e,t){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=t.formatter,this.element=e.createElement("div"),this.element.classList.add(Dh()),t.viewProps.bindClassModifiers(this.element);const n=e.createElement("input");n.classList.add(Dh("i")),n.readOnly=!0,n.type="text",t.viewProps.bindDisabled(n),this.element.appendChild(n),this.inputElement=n,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}update_(){const e=this.value.rawValue,t=e[e.length-1];this.inputElement.value=t!==void 0?this.formatter_(t):""}onValueUpdate_(){this.update_()}}class Vc{constructor(e,t){this.value=t.value,this.viewProps=t.viewProps,this.view=new hE(e,{formatter:t.formatter,value:this.value,viewProps:this.viewProps})}}const dE=Gt({id:"monitor-bool",type:"monitor",accept:(i,e)=>{if(typeof i!="boolean")return null;const t=dt(e,n=>({readonly:n.required.constant(!0),rows:n.optional.number}));return t?{initialValue:i,params:t}:null},binding:{reader:i=>wp},controller:i=>{var e;return i.value.rawValue.length===1?new Vc(i.document,{formatter:Sh,value:i.value,viewProps:i.viewProps}):new Bc(i.document,{formatter:Sh,rows:(e=i.params.rows)!==null&&e!==void 0?e:Fs.monitor.defaultRows,value:i.value,viewProps:i.viewProps})}});class pE extends xs{get max(){return this.controller.valueController.props.get("max")}set max(e){this.controller.valueController.props.set("max",e)}get min(){return this.controller.valueController.props.get("min")}set min(e){this.controller.valueController.props.set("min",e)}}const fi=$e("grl");class fE{constructor(e,t){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=e.createElement("div"),this.element.classList.add(fi()),t.viewProps.bindClassModifiers(this.element),this.formatter_=t.formatter,this.props_=t.props,this.cursor_=t.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const n=e.createElementNS(Pn,"svg");n.classList.add(fi("g")),n.style.height=`calc(var(${Tp("containerUnitSize")}) * ${t.rows})`,this.element.appendChild(n),this.svgElem_=n;const r=e.createElementNS(Pn,"polyline");this.svgElem_.appendChild(r),this.lineElem_=r;const s=e.createElement("div");s.classList.add(fi("t"),$e("tt")()),this.element.appendChild(s),this.tooltipElem_=s,t.value.emitter.on("change",this.onValueUpdate_),this.value=t.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const{clientWidth:e,clientHeight:t}=this.element,n=this.value.rawValue.length-1,r=this.props_.get("min"),s=this.props_.get("max"),o=[];this.value.rawValue.forEach((h,d)=>{if(h===void 0)return;const g=nt(d,0,n,0,e),v=nt(h,r,s,t,0);o.push([g,v].join(","))}),this.lineElem_.setAttributeNS(null,"points",o.join(" "));const a=this.tooltipElem_,l=this.value.rawValue[this.cursor_.rawValue];if(l===void 0){a.classList.remove(fi("t","a"));return}const c=nt(this.cursor_.rawValue,0,n,0,e),u=nt(l,r,s,t,0);a.style.left=`${c}px`,a.style.top=`${u}px`,a.textContent=`${this.formatter_(l)}`,a.classList.contains(fi("t","a"))||(a.classList.add(fi("t","a"),fi("t","in")),Bo(a),a.classList.remove(fi("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Jp{constructor(e,t){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props=t.props,this.value=t.value,this.viewProps=t.viewProps,this.cursor_=ht(-1),this.view=new fE(e,{cursor:this.cursor_,formatter:t.formatter,rows:t.rows,props:this.props,value:this.value,viewProps:this.viewProps}),!xc(e))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const n=new qi(this.view.element);n.emitter.on("down",this.onGraphPointerDown_),n.emitter.on("move",this.onGraphPointerMove_),n.emitter.on("up",this.onGraphPointerUp_)}}importProps(e){return sn(e,null,t=>({max:t.required.number,min:t.required.number}),t=>(this.props.set("max",t.max),this.props.set("min",t.min),!0))}exportProps(){return on(null,{max:this.props.get("max"),min:this.props.get("min")})}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(e){const{clientWidth:t}=this.view.element;this.cursor_.rawValue=Math.floor(nt(e.offsetX,0,t,0,this.value.rawValue.length))}onGraphPointerDown_(e){this.onGraphPointerMove_(e)}onGraphPointerMove_(e){if(!e.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(nt(e.data.point.x,0,e.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function kl(i){return lt(i.format)?Zt(2):i.format}function mE(i){var e;return i.value.rawValue.length===1?new Vc(i.document,{formatter:kl(i.params),value:i.value,viewProps:i.viewProps}):new Bc(i.document,{formatter:kl(i.params),rows:(e=i.params.rows)!==null&&e!==void 0?e:Fs.monitor.defaultRows,value:i.value,viewProps:i.viewProps})}function gE(i){var e,t,n;return new Jp(i.document,{formatter:kl(i.params),rows:(e=i.params.rows)!==null&&e!==void 0?e:Fs.monitor.defaultRows,props:Xe.fromObject({max:(t=i.params.max)!==null&&t!==void 0?t:100,min:(n=i.params.min)!==null&&n!==void 0?n:0}),value:i.value,viewProps:i.viewProps})}function Nh(i){return i.view==="graph"}const _E=Gt({id:"monitor-number",type:"monitor",accept:(i,e)=>{if(typeof i!="number")return null;const t=dt(e,n=>({format:n.optional.function,max:n.optional.number,min:n.optional.number,readonly:n.required.constant(!0),rows:n.optional.number,view:n.optional.string}));return t?{initialValue:i,params:t}:null},binding:{defaultBufferSize:i=>Nh(i)?64:1,reader:i=>tp},controller:i=>Nh(i.params)?gE(i):mE(i),api:i=>i.controller.valueController instanceof Jp?new pE(i.controller):null}),vE=Gt({id:"monitor-string",type:"monitor",accept:(i,e)=>{if(typeof i!="string")return null;const t=dt(e,n=>({multiline:n.optional.boolean,readonly:n.required.constant(!0),rows:n.optional.number}));return t?{initialValue:i,params:t}:null},binding:{reader:i=>Mp},controller:i=>{var e;const t=i.value;return t.rawValue.length>1||i.params.multiline?new Bc(i.document,{formatter:Fl,rows:(e=i.params.rows)!==null&&e!==void 0?e:Fs.monitor.defaultRows,value:t,viewProps:i.viewProps}):new Vc(i.document,{formatter:Fl,value:t,viewProps:i.viewProps})}});class bE{constructor(){this.map_=new Map}get(e){var t;return(t=this.map_.get(e))!==null&&t!==void 0?t:null}has(e){return this.map_.has(e)}add(e,t){return this.map_.set(e,t),e.viewProps.handleDispose(()=>{this.map_.delete(e)}),t}}class xE{constructor(e){this.target=e.target,this.reader_=e.reader,this.writer_=e.writer}read(){return this.reader_(this.target.read())}write(e){this.writer_(this.target,e)}inject(e){this.write(this.reader_(e))}}function yE(i,e){var t;const n=i.accept(e.target.read(),e.params);if(lt(n))return null;const r={target:e.target,initialValue:n.initialValue,params:n.params},s=dt(e.params,h=>({disabled:h.optional.boolean,hidden:h.optional.boolean,label:h.optional.string,tag:h.optional.string})),o=i.binding.reader(r),a=i.binding.constraint?i.binding.constraint(r):void 0,l=new xE({reader:o,target:e.target,writer:i.binding.writer(r)}),c=new ry(ht(o(n.initialValue),{constraint:a,equals:i.binding.equals}),l),u=i.controller({constraint:a,document:e.document,initialValue:n.initialValue,params:n.params,value:c,viewProps:ii.create({disabled:s==null?void 0:s.disabled,hidden:s==null?void 0:s.hidden})});return new by(e.document,{blade:Wr(),props:Xe.fromObject({label:"label"in e.params?(t=s==null?void 0:s.label)!==null&&t!==void 0?t:null:e.target.key}),tag:s==null?void 0:s.tag,value:c,valueController:u})}class wE{constructor(e){this.target=e.target,this.reader_=e.reader}read(){return this.reader_(this.target.read())}}function ME(i,e){return e===0?new tw:new nw(i,e??Fs.monitor.defaultInterval)}function EE(i,e){var t,n,r;const s=i.accept(e.target.read(),e.params);if(lt(s))return null;const o={target:e.target,initialValue:s.initialValue,params:s.params},a=dt(e.params,d=>({bufferSize:d.optional.number,disabled:d.optional.boolean,hidden:d.optional.boolean,interval:d.optional.number,label:d.optional.string})),l=i.binding.reader(o),c=(n=(t=a==null?void 0:a.bufferSize)!==null&&t!==void 0?t:i.binding.defaultBufferSize&&i.binding.defaultBufferSize(s.params))!==null&&n!==void 0?n:1,u=new Ey({binding:new wE({reader:l,target:e.target}),bufferSize:c,ticker:ME(e.document,a==null?void 0:a.interval)}),h=i.controller({document:e.document,params:s.params,value:u,viewProps:ii.create({disabled:a==null?void 0:a.disabled,hidden:a==null?void 0:a.hidden})});return h.viewProps.bindDisabled(u.ticker),h.viewProps.handleDispose(()=>{u.ticker.dispose()}),new Ty(e.document,{blade:Wr(),props:Xe.fromObject({label:"label"in e.params?(r=a==null?void 0:a.label)!==null&&r!==void 0?r:null:e.target.key}),value:u,valueController:h})}class SE{constructor(e){this.pluginsMap_={blades:[],inputs:[],monitors:[]},this.apiCache_=e}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(e,t){if(!mw(t.core))throw mt.notCompatible(e,t.id);t.type==="blade"?this.pluginsMap_.blades.unshift(t):t.type==="input"?this.pluginsMap_.inputs.unshift(t):t.type==="monitor"&&this.pluginsMap_.monitors.unshift(t)}createInput_(e,t,n){return this.pluginsMap_.inputs.reduce((r,s)=>r??yE(s,{document:e,target:t,params:n}),null)}createMonitor_(e,t,n){return this.pluginsMap_.monitors.reduce((r,s)=>r??EE(s,{document:e,params:n,target:t}),null)}createBinding(e,t,n){const r=t.read();if(lt(r))throw new mt({context:{key:t.key},type:"nomatchingcontroller"});const s=this.createInput_(e,t,n);if(s)return s;const o=this.createMonitor_(e,t,n);if(o)return o;throw new mt({context:{key:t.key},type:"nomatchingcontroller"})}createBlade(e,t){const n=this.pluginsMap_.blades.reduce((r,s)=>r??ew(s,{document:e,params:t}),null);if(!n)throw new mt({type:"nomatchingview",context:{params:t}});return n}createInputBindingApi_(e){const t=this.pluginsMap_.inputs.reduce((n,r)=>{var s,o;return n||((o=(s=r.api)===null||s===void 0?void 0:s.call(r,{controller:e}))!==null&&o!==void 0?o:null)},null);return this.apiCache_.add(e,t??new xs(e))}createMonitorBindingApi_(e){const t=this.pluginsMap_.monitors.reduce((n,r)=>{var s,o;return n||((o=(s=r.api)===null||s===void 0?void 0:s.call(r,{controller:e}))!==null&&o!==void 0?o:null)},null);return this.apiCache_.add(e,t??new xs(e))}createBindingApi(e){if(this.apiCache_.has(e))return this.apiCache_.get(e);if(xy(e))return this.createInputBindingApi_(e);if(Ay(e))return this.createMonitorBindingApi_(e);throw mt.shouldNeverHappen()}createApi(e){if(this.apiCache_.has(e))return this.apiCache_.get(e);if(vy(e))return this.createBindingApi(e);const t=this.pluginsMap_.blades.reduce((n,r)=>n??r.api({controller:e,pool:this}),null);if(!t)throw mt.shouldNeverHappen();return this.apiCache_.add(e,t)}}const TE=new bE;function AE(){const i=new SE(TE);return[QM,iE,aE,cE,GM,kM,FM,IM,bw,dE,vE,_E,Iy,jy,xp].forEach(e=>{i.register("core",e)}),i}class CE extends Xi{constructor(e){super(e),this.emitter_=new yt,this.controller.value.emitter.on("change",t=>{this.emitter_.emit("change",new Ps(this,t.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(e){this.controller.labelController.props.set("label",e)}get options(){return this.controller.valueController.props.get("options")}set options(e){this.controller.valueController.props.set("options",e)}get value(){return this.controller.value.rawValue}set value(e){this.controller.value.rawValue=e}on(e,t){const n=t.bind(this);return this.emitter_.on(e,r=>{n(r)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}}class PE extends Xi{}class RE extends Xi{constructor(e){super(e),this.emitter_=new yt,this.controller.value.emitter.on("change",t=>{this.emitter_.emit("change",new Ps(this,t.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(e){this.controller.labelController.props.set("label",e)}get max(){return this.controller.valueController.sliderController.props.get("max")}set max(e){this.controller.valueController.sliderController.props.set("max",e)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(e){this.controller.valueController.sliderController.props.set("min",e)}get value(){return this.controller.value.rawValue}set value(e){this.controller.value.rawValue=e}on(e,t){const n=t.bind(this);return this.emitter_.on(e,r=>{n(r)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}}class LE extends Xi{constructor(e){super(e),this.emitter_=new yt,this.controller.value.emitter.on("change",t=>{this.emitter_.emit("change",new Ps(this,t.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(e){this.controller.labelController.props.set("label",e)}get formatter(){return this.controller.valueController.props.get("formatter")}set formatter(e){this.controller.valueController.props.set("formatter",e)}get value(){return this.controller.value.rawValue}set value(e){this.controller.value.rawValue=e}on(e,t){const n=t.bind(this);return this.emitter_.on(e,r=>{n(r)},{key:t}),this}off(e,t){return this.emitter_.off(e,t),this}}const IE=function(){return{id:"list",type:"blade",core:Gr,accept(i){const e=dt(i,t=>({options:t.required.custom(Ds),value:t.required.raw,view:t.required.constant("list"),label:t.optional.string}));return e?{params:e}:null},controller(i){const e=new Is(Cc(i.params.options)),t=ht(i.params.value,{constraint:e}),n=new Mi(i.document,{props:new Xe({options:e.values.value("options")}),value:t,viewProps:i.viewProps});return new Gi(i.document,{blade:i.blade,props:Xe.fromObject({label:i.params.label}),value:t,valueController:n})},api(i){return!(i.controller instanceof Gi)||!(i.controller.valueController instanceof Mi)?null:new CE(i.controller)}}}();class DE extends vp{constructor(e,t){super(e,t)}get element(){return this.controller.view.element}}class NE extends Ul{constructor(e,t){super(e,{expanded:t.expanded,blade:t.blade,props:t.props,root:!0,viewProps:t.viewProps})}}const Uh=$e("spr");class UE{constructor(e,t){this.element=e.createElement("div"),this.element.classList.add(Uh()),t.viewProps.bindClassModifiers(this.element);const n=e.createElement("hr");n.classList.add(Uh("r")),this.element.appendChild(n)}}class Oh extends Zo{constructor(e,t){super(Object.assign(Object.assign({},t),{view:new UE(e,{viewProps:t.viewProps})}))}}const OE={id:"separator",type:"blade",core:Gr,accept(i){const e=dt(i,t=>({view:t.required.constant("separator")}));return e?{params:e}:null},controller(i){return new Oh(i.document,{blade:i.blade,viewProps:i.viewProps})},api(i){return i.controller instanceof Oh?new PE(i.controller):null}},FE={id:"slider",type:"blade",core:Gr,accept(i){const e=dt(i,t=>({max:t.required.number,min:t.required.number,view:t.required.constant("slider"),format:t.optional.function,label:t.optional.string,value:t.optional.number}));return e?{params:e}:null},controller(i){var e,t;const n=(e=i.params.value)!==null&&e!==void 0?e:0,r=new Cs({max:i.params.max,min:i.params.min}),s=ht(n,{constraint:r}),o=new Ho(i.document,Object.assign(Object.assign({},Sp({formatter:(t=i.params.format)!==null&&t!==void 0?t:Qx,keyScale:ht(1),max:r.values.value("max"),min:r.values.value("min"),pointerScale:rp(i.params,n)})),{parser:Qn,value:s,viewProps:i.viewProps}));return new Gi(i.document,{blade:i.blade,props:Xe.fromObject({label:i.params.label}),value:s,valueController:o})},api(i){return!(i.controller instanceof Gi)||!(i.controller.valueController instanceof Ho)?null:new RE(i.controller)}},kE=function(){return{id:"text",type:"blade",core:Gr,accept(i){const e=dt(i,t=>({parse:t.required.function,value:t.required.raw,view:t.required.constant("text"),format:t.optional.function,label:t.optional.string}));return e?{params:e}:null},controller(i){var e;const t=ht(i.params.value),n=new ys(i.document,{parser:i.params.parse,props:Xe.fromObject({formatter:(e=i.params.format)!==null&&e!==void 0?e:r=>String(r)}),value:t,viewProps:i.viewProps});return new Gi(i.document,{blade:i.blade,props:Xe.fromObject({label:i.params.label}),value:t,valueController:n})},api(i){return!(i.controller instanceof Gi)||!(i.controller.valueController instanceof ys)?null:new LE(i.controller)}}}();function BE(i){const e=i.createElement("div");return e.classList.add($e("dfw")()),i.body&&i.body.appendChild(e),e}function VE(i,e,t){if(i.querySelector(`style[data-tp-style=${e}]`))return;const n=i.createElement("style");n.dataset.tpStyle=e,n.textContent=t,i.head.appendChild(n)}class zE extends DE{constructor(e){var t,n;const r=e??{},s=(t=r.document)!==null&&t!==void 0?t:hy(),o=AE(),a=new NE(s,{expanded:r.expanded,blade:Wr(),props:Xe.fromObject({title:r.title}),viewProps:ii.create()});super(a,o),this.pool_=o,this.containerElem_=(n=r.container)!==null&&n!==void 0?n:BE(s),this.containerElem_.appendChild(this.element),this.doc_=s,this.usesDefaultWrapper_=!r.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw mt.alreadyDisposed();return this.doc_}dispose(){const e=this.containerElem_;if(!e)throw mt.alreadyDisposed();if(this.usesDefaultWrapper_){const t=e.parentElement;t&&t.removeChild(e)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(e){e.css&&VE(this.document,`plugin-${e.id}`,e.css),("plugin"in e?[e.plugin]:"plugins"in e?e.plugins:[]).forEach(n=>{this.pool_.register(e.id,n)})}setUpDefaultPlugins_(){this.registerPlugin({id:"default",css:'.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{display:block;height:16px;inset:0;margin:auto;opacity:0;position:absolute;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{inset:0;position:absolute}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;inset:0;position:absolute}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);content:"";display:block;inset:0;position:absolute}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin:auto;position:absolute}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin-bottom:auto;margin-top:auto;position:absolute}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);content:"";inset:0 0 2px;pointer-events:none;position:absolute}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}',plugins:[IE,OE,FE,xp,kE]})}}new _p("4.0.5");class HE{constructor(){this.active=window.location.hash==="#debug",this.active&&(this.ui=new zE({title:"Tweaks"}))}}class zc{constructor(){this.callbacks={},this.callbacks.base={}}on(e,t){return typeof e>"u"||e===""?(console.warn("wrong names"),!1):typeof t>"u"?(console.warn("wrong callback"),!1):(this.resolveNames(e).forEach(r=>{const s=this.resolveName(r);this.callbacks[s.namespace]instanceof Object||(this.callbacks[s.namespace]={}),this.callbacks[s.namespace][s.value]instanceof Array||(this.callbacks[s.namespace][s.value]=[]),this.callbacks[s.namespace][s.value].push(t)}),this)}off(e){return typeof e>"u"||e===""?(console.warn("wrong name"),!1):(this.resolveNames(e).forEach(n=>{const r=this.resolveName(n);if(r.namespace!=="base"&&r.value==="")delete this.callbacks[r.namespace];else if(r.namespace==="base")for(const s in this.callbacks)this.callbacks[s]instanceof Object&&this.callbacks[s][r.value]instanceof Array&&(delete this.callbacks[s][r.value],Object.keys(this.callbacks[s]).length===0&&delete this.callbacks[s]);else this.callbacks[r.namespace]instanceof Object&&this.callbacks[r.namespace][r.value]instanceof Array&&(delete this.callbacks[r.namespace][r.value],Object.keys(this.callbacks[r.namespace]).length===0&&delete this.callbacks[r.namespace])}),this)}trigger(e,t){if(typeof e>"u"||e==="")return console.warn("wrong name"),!1;let n=null;const r=t instanceof Array?t:[];let s=this.resolveNames(e);if(s=this.resolveName(s[0]),s.namespace==="base")for(const o in this.callbacks)this.callbacks[o]instanceof Object&&this.callbacks[o][s.value]instanceof Array&&this.callbacks[o][s.value].forEach(function(a){a.apply(this,r)});else if(this.callbacks[s.namespace]instanceof Object){if(s.value==="")return console.warn("wrong name"),this;this.callbacks[s.namespace][s.value].forEach(function(o){o.apply(this,r)})}return n}resolveNames(e){let t=e;return t=t.replace(/[^a-zA-Z0-9 ,/.]/g,""),t=t.replace(/[,/]+/g," "),t=t.split(" "),t}resolveName(e){const t={},n=e.split(".");return t.original=e,t.value=n[0],t.namespace="base",n.length>1&&n[1]!==""&&(t.namespace=n[1]),t}}class GE extends zc{constructor(){super(),this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.trigger("resize")})}}class WE extends zc{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,window.requestAnimationFrame(()=>{this.tick()})}tick(){const e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.trigger("tick"),window.requestAnimationFrame(()=>{this.tick()})}}const jE=[{name:"environmentTexture",type:"hdri",path:"https://z2586300277.github.io/3d-file-server/files/hdr/1k.hdr"}];class XE extends Zb{constructor(e){super(e),this.type=bn}parse(e){const o=function(b,_){switch(b){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(_||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(_||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(_||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(_||""))}},u=`
`,h=function(b,_,m){_=_||1024;let I=b.pos,F=-1,V=0,H="",O=String.fromCharCode.apply(null,new Uint16Array(b.subarray(I,I+128)));for(;0>(F=O.indexOf(u))&&V<_&&I<b.byteLength;)H+=O,V+=O.length,I+=128,O+=String.fromCharCode.apply(null,new Uint16Array(b.subarray(I,I+128)));return-1<F?(b.pos+=V+F+1,H+O.slice(0,F)):!1},d=function(b){const _=/^#\?(\S+)/,m=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,A=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*FORMAT=(\S+)\s*$/,F=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,V={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let H,O;for((b.pos>=b.byteLength||!(H=h(b)))&&o(1,"no header found"),(O=H.match(_))||o(3,"bad initial token"),V.valid|=1,V.programtype=O[1],V.string+=H+`
`;H=h(b),H!==!1;){if(V.string+=H+`
`,H.charAt(0)==="#"){V.comments+=H+`
`;continue}if((O=H.match(m))&&(V.gamma=parseFloat(O[1])),(O=H.match(A))&&(V.exposure=parseFloat(O[1])),(O=H.match(I))&&(V.valid|=2,V.format=O[1]),(O=H.match(F))&&(V.valid|=4,V.height=parseInt(O[1],10),V.width=parseInt(O[2],10)),V.valid&2&&V.valid&4)break}return V.valid&2||o(3,"missing format specifier"),V.valid&4||o(3,"missing image size specifier"),V},g=function(b,_,m){const A=_;if(A<8||A>32767||b[0]!==2||b[1]!==2||b[2]&128)return new Uint8Array(b);A!==(b[2]<<8|b[3])&&o(3,"wrong scanline width");const I=new Uint8Array(4*_*m);I.length||o(4,"unable to allocate buffer space");let F=0,V=0;const H=4*A,O=new Uint8Array(4),j=new Uint8Array(H);let q=m;for(;q>0&&V<b.byteLength;){V+4>b.byteLength&&o(1),O[0]=b[V++],O[1]=b[V++],O[2]=b[V++],O[3]=b[V++],(O[0]!=2||O[1]!=2||(O[2]<<8|O[3])!=A)&&o(3,"bad rgbe scanline format");let se=0,te;for(;se<H&&V<b.byteLength;){te=b[V++];const Le=te>128;if(Le&&(te-=128),(te===0||se+te>H)&&o(3,"bad scanline data"),Le){const Ue=b[V++];for(let J=0;J<te;J++)j[se++]=Ue}else j.set(b.subarray(V,V+te),se),se+=te,V+=te}const fe=A;for(let Le=0;Le<fe;Le++){let Ue=0;I[F]=j[Le+Ue],Ue+=A,I[F+1]=j[Le+Ue],Ue+=A,I[F+2]=j[Le+Ue],Ue+=A,I[F+3]=j[Le+Ue],F+=4}q--}return I},v=function(b,_,m,A){const I=b[_+3],F=Math.pow(2,I-128)/255;m[A+0]=b[_+0]*F,m[A+1]=b[_+1]*F,m[A+2]=b[_+2]*F,m[A+3]=1},x=function(b,_,m,A){const I=b[_+3],F=Math.pow(2,I-128)/255;m[A+0]=Ys.toHalfFloat(Math.min(b[_+0]*F,65504)),m[A+1]=Ys.toHalfFloat(Math.min(b[_+1]*F,65504)),m[A+2]=Ys.toHalfFloat(Math.min(b[_+2]*F,65504)),m[A+3]=Ys.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;const f=d(p),w=f.width,y=f.height,M=g(p.subarray(p.pos),w,y);let N,E,T;switch(this.type){case qt:T=M.length/4;const b=new Float32Array(T*4);for(let m=0;m<T;m++)v(M,m*4,b,m*4);N=b,E=qt;break;case bn:T=M.length/4;const _=new Uint16Array(T*4);for(let m=0;m<T;m++)x(M,m*4,_,m*4);N=_,E=bn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:w,height:y,data:N,header:f.string,gamma:f.gamma,exposure:f.exposure,type:E}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(o,a){switch(o.type){case qt:case bn:o.colorSpace=xt,o.minFilter=Pt,o.magFilter=Pt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,n,r)}}const Ga=new WeakMap;class qE extends ni{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,r){const s=new Fr(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,r)},n,r)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Dt,n).catch(n)}decodeDracoFile(e,t,n,r,s=xt,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:r||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Ga.has(e)){const l=Ga.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let r;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(l=>(r=l,new Promise((c,u)=>{r._callbacks[s]={resolve:c,reject:u},r.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{r&&s&&this._releaseTask(r,s)}),Ga.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new rn;e.index&&t.setIndex(new Nt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const r=e.attributes[n],s=r.name,o=r.array,a=r.itemSize,l=new Nt(o,a);s==="color"&&(this._assignVertexColorSpace(l,r.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==Dt)return;const n=new Ne;for(let r=0,s=e.count;r<s;r++)n.fromBufferAttribute(e,r).convertSRGBToLinear(),e.setXYZ(r,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Fr(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((r,s)=>{n.load(e,r,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const r=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=KE.toString(),o=["/* draco decoder */",r,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const r=new Worker(this.workerSourceURL);r._callbacks={},r._taskCosts={},r._taskLoad=0,r.postMessage({type:"init",decoderConfig:this.decoderConfig}),r.onmessage=function(s){const o=s.data;switch(o.type){case"decode":r._callbacks[o.id].resolve(o);break;case"error":r._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(r)}else this.workerPool.sort(function(r,s){return r._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function KE(){let i,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(u){i.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(i)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const h=u.draco,d=new h.Decoder;try{const g=t(h,d,new Int8Array(l),c),v=g.attributes.map(x=>x.array.buffer);g.index&&v.push(g.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:g},v)}catch(g){console.error(g),self.postMessage({type:"error",id:a.id,error:g.message})}finally{h.destroy(d)}});break}};function t(o,a,l,c){const u=c.attributeIDs,h=c.attributeTypes;let d,g;const v=a.GetEncodedGeometryType(l);if(v===o.TRIANGULAR_MESH)d=new o.Mesh,g=a.DecodeArrayToMesh(l,l.byteLength,d);else if(v===o.POINT_CLOUD)d=new o.PointCloud,g=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!g.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+g.error_msg());const x={index:null,attributes:[]};for(const p in u){const f=self[h[p]];let w,y;if(c.useUniqueIDs)y=u[p],w=a.GetAttributeByUniqueId(d,y);else{if(y=a.GetAttributeId(d,o[u[p]]),y===-1)continue;w=a.GetAttribute(d,y)}const M=r(o,a,d,p,f,w);p==="color"&&(M.vertexColorSpace=c.vertexColorSpace),x.attributes.push(M)}return v===o.TRIANGULAR_MESH&&(x.index=n(o,a,d)),o.destroy(d),x}function n(o,a,l){const u=l.num_faces()*3,h=u*4,d=o._malloc(h);a.GetTrianglesUInt32Array(l,h,d);const g=new Uint32Array(o.HEAPF32.buffer,d,u).slice();return o._free(d),{array:g,itemSize:1}}function r(o,a,l,c,u,h){const d=h.num_components(),v=l.num_points()*d,x=v*u.BYTES_PER_ELEMENT,p=s(o,u),f=o._malloc(x);a.GetAttributeDataArrayForAllPoints(l,h,p,x,f);const w=new u(o.HEAPF32.buffer,f,v).slice();return o._free(f),{name:c,array:w,itemSize:d}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function YE(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),r=i.getAttribute("position"),s=n?n.count:r.count;let o=0;const a=Object.keys(i.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let w=0,y=a.length;w<y;w++){const M=a[w],N=i.attributes[M];l[M]=new N.constructor(new N.array.constructor(N.count*N.itemSize),N.itemSize,N.normalized);const E=i.morphAttributes[M];E&&(c[M]||(c[M]=[]),E.forEach((T,b)=>{const _=new T.array.constructor(T.count*T.itemSize);c[M][b]=new T.constructor(_,T.itemSize,T.normalized)}))}const g=e*.5,v=Math.log10(1/e),x=Math.pow(10,v),p=g*x;for(let w=0;w<s;w++){const y=n?n.getX(w):w;let M="";for(let N=0,E=a.length;N<E;N++){const T=a[N],b=i.getAttribute(T),_=b.itemSize;for(let m=0;m<_;m++)M+=`${~~(b[h[m]](y)*x+p)},`}if(M in t)u.push(t[M]);else{for(let N=0,E=a.length;N<E;N++){const T=a[N],b=i.getAttribute(T),_=i.morphAttributes[T],m=b.itemSize,A=l[T],I=c[T];for(let F=0;F<m;F++){const V=h[F],H=d[F];if(A[H](o,b[V](y)),_)for(let O=0,j=_.length;O<j;O++)I[O][H](o,_[O][V](y))}}t[M]=o,u.push(o),o++}}const f=i.clone();for(const w in i.attributes){const y=l[w];if(f.setAttribute(w,new y.constructor(y.array.slice(0,o*y.itemSize),y.itemSize,y.normalized)),w in c)for(let M=0;M<c[w].length;M++){const N=c[w][M];f.morphAttributes[w][M]=new N.constructor(N.array.slice(0,o*N.itemSize),N.itemSize,N.normalized)}}return f.setIndex(u),f}function Fh(i,e){if(e===Wf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Al||e===Md){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Al)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class $E extends ni{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new tS(t)}),this.register(function(t){return new nS(t)}),this.register(function(t){return new hS(t)}),this.register(function(t){return new dS(t)}),this.register(function(t){return new pS(t)}),this.register(function(t){return new rS(t)}),this.register(function(t){return new sS(t)}),this.register(function(t){return new oS(t)}),this.register(function(t){return new aS(t)}),this.register(function(t){return new eS(t)}),this.register(function(t){return new lS(t)}),this.register(function(t){return new iS(t)}),this.register(function(t){return new uS(t)}),this.register(function(t){return new cS(t)}),this.register(function(t){return new JE(t)}),this.register(function(t){return new fS(t)}),this.register(function(t){return new mS(t)})}load(e,t,n,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ps.extractUrlBase(e);o=ps.resolveURL(c,this.path)}else o=ps.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Fr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Qp){try{o[qe.KHR_BINARY_GLTF]=new gS(e)}catch(h){r&&r(h);return}s=JSON.parse(o[qe.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new PS(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case qe.KHR_MATERIALS_UNLIT:o[h]=new QE;break;case qe.KHR_DRACO_MESH_COMPRESSION:o[h]=new _S(s,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:o[h]=new vS;break;case qe.KHR_MESH_QUANTIZATION:o[h]=new bS;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function ZE(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class JE{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ne(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],xt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Yd(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new nx(u),c.distance=h;break;case"spot":c=new ex(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Wn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class QE{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return ki}extendParams(e,t,n){const r=[];e.color=new Ne(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],xt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Dt))}return Promise.all(r)}}class eS{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class tS{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Pe(a,a)}return Promise.all(s)}}class nS{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class iS{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class rS{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],xt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Dt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class sS{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class oS{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(a[0],a[1],a[2],xt),Promise.all(s)}}class aS{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class lS{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(a[0],a[1],a[2],xt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Dt)),Promise.all(s)}}class cS{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class uS{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class hS{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class dS{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class pS{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class fS{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,r.mode,r.filter).then(function(g){return g.buffer}):o.ready.then(function(){const g=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(g),u,h,d,r.mode,r.filter),g})})}else return null}}class mS{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==un.TRIANGLES&&c.mode!==un.TRIANGLE_STRIP&&c.mode!==un.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,g=[];for(const v of h){const x=new je,p=new B,f=new wn,w=new B(1,1,1),y=new Db(v.geometry,v.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,M),l.SCALE&&w.fromBufferAttribute(l.SCALE,M),y.setMatrixAt(M,x.compose(p,f,w));for(const M in l)if(M==="_COLOR_0"){const N=l[M];y.instanceColor=new Rl(N.array,N.itemSize,N.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&v.geometry.setAttribute(M,l[M]);ct.prototype.copy.call(y,v),this.parser.assignFinalMaterial(y),g.push(y)}return u.isGroup?(u.clear(),u.add(...g),u):g[0]}))}}const Qp="glTF",os=12,kh={JSON:1313821514,BIN:5130562};class gS{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,os),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Qp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-os,s=new DataView(e,os);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===kh.JSON){const c=new Uint8Array(e,os+o,a);this.content=n.decode(c)}else if(l===kh.BIN){const c=os+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class _S{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Bl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Bl[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],g=Tr[d.componentType];c[h]=g.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){r.decodeDracoFile(u,function(g){for(const v in g.attributes){const x=g.attributes[v],p=l[v];p!==void 0&&(x.normalized=p)}h(g)},a,c,xt,d)})})}}class vS{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class bS{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class ef extends As{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,h=(n-t)/u,d=h*h,g=d*h,v=e*c,x=v-c,p=-2*g+3*d,f=g-d,w=1-p,y=f-d+h;for(let M=0;M!==a;M++){const N=o[x+M+a],E=o[x+M+l]*u,T=o[v+M+a],b=o[v+M]*u;s[M]=w*N+y*E+p*T+f*b}return s}}const xS=new wn;class yS extends ef{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return xS.fromArray(s).normalize().toArray(s),s}}const un={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Tr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bh={9728:Vt,9729:Pt,9984:pd,9985:xo,9986:cs,9987:Cn},Vh={33071:An,33648:Lo,10497:Pr},Wa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},mi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wS={CUBICSPLINE:void 0,LINEAR:gs,STEP:ms},ja={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function MS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new uc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$n})),i.DefaultMaterial}function Ni(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Wn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ES(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(r){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function SS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function TS(i){let e;const t=i.extensions&&i.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xa(t.attributes):e=i.indices+":"+Xa(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Xa(i.targets[n]);return e}function Xa(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Vl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function AS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const CS=new je;class PS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ZE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&o<98?this.textureLoader=new Jb(this.options.manager):this.textureLoader=new rx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Fr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return Ni(s,a,r),Wn(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(ps.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Wa[r.type],a=Tr[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new Nt(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Wa[r.type],c=Tr[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=r.byteOffset||0,g=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,v=r.normalized===!0;let x,p;if(g&&g!==h){const f=Math.floor(d/g),w="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+f+":"+r.count;let y=t.cache.get(w);y||(x=new c(a,f*g,r.count*g/u),y=new Cb(x,g/u),t.cache.add(w,y)),p=new rc(y,l,d%g/u,v)}else a===null?x=new c(r.count*l):x=new c(a,d,r.count*l),p=new Nt(x,l,v);if(r.sparse!==void 0){const f=Wa.SCALAR,w=Tr[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,M=r.sparse.values.byteOffset||0,N=new w(o[1],y,r.sparse.count*f),E=new c(o[2],M,r.sparse.count*l);a!==null&&(p=new Nt(p.array.slice(),p.itemSize,p.normalized));for(let T=0,b=N.length;T<b;T++){const _=N[T];if(p.setX(_,E[T*l]),l>=2&&p.setY(_,E[T*l+1]),l>=3&&p.setZ(_,E[T*l+2]),l>=4&&p.setW(_,E[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=Bh[d.magFilter]||Pt,u.minFilter=Bh[d.minFilter]||Cn,u.wrapS=Vh[d.wrapS]||Pr,u.wrapT=Vh[d.wrapT]||Pr,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,g){let v=d;t.isImageBitmapLoader===!0&&(v=function(x){const p=new Rt(x);p.needsUpdate=!0,d(p)}),t.load(ps.resolveURL(h,s.path),v,void 0,g)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Wn(h,o),h.userData.mimeType=o.mimeType||AS(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Xd,yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new jd,yn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return uc}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[qe.KHR_MATERIALS_UNLIT]){const h=r[qe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Ne(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],xt),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Dt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Sn);const u=s.alphaMode||ja.OPAQUE;if(u===ja.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ja.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ki&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Pe(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==ki&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ki){const h=s.emissiveFactor;a.emissive=new Ne().setRGB(h[0],h[1],h[2],xt)}return s.emissiveTexture!==void 0&&o!==ki&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Dt)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),Wn(h,s),t.associations.set(h,{materials:e}),s.extensions&&Ni(r,h,s),h})}createUniqueName(e){const t=rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return zh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=TS(c),h=r[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=zh(new rn,c,t),r[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?MS(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let g=0,v=u.length;g<v;g++){const x=u[g],p=o[g];let f;const w=c[g];if(p.mode===un.TRIANGLES||p.mode===un.TRIANGLE_STRIP||p.mode===un.TRIANGLE_FAN||p.mode===void 0)f=s.isSkinnedMesh===!0?new Rb(x,w):new zt(x,w),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),p.mode===un.TRIANGLE_STRIP?f.geometry=Fh(f.geometry,Md):p.mode===un.TRIANGLE_FAN&&(f.geometry=Fh(f.geometry,Al));else if(p.mode===un.LINES)f=new Nb(x,w);else if(p.mode===un.LINE_STRIP)f=new ac(x,w);else if(p.mode===un.LINE_LOOP)f=new Ub(x,w);else if(p.mode===un.POINTS)f=new Ob(x,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(f.geometry.morphAttributes).length>0&&SS(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),Wn(f,s),p.extensions&&Ni(r,f,p),t.assignFinalMaterial(f),h.push(f)}for(let g=0,v=h.length;g<v;g++)t.associations.set(h[g],{meshes:e,primitives:g});if(h.length===1)return s.extensions&&Ni(r,h[0],s),h[0];const d=new Bi;s.extensions&&Ni(r,d,s),t.associations.set(d,{meshes:e});for(let g=0,v=h.length;g<v;g++)d.add(h[g]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(ec.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new qo(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Wn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new je;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new oc(a,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=r.channels.length;h<d;h++){const g=r.channels[h],v=r.samplers[g.sampler],x=g.target,p=x.node,f=r.parameters!==void 0?r.parameters[v.input]:v.input,w=r.parameters!==void 0?r.parameters[v.output]:v.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",w)),c.push(v),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],g=h[1],v=h[2],x=h[3],p=h[4],f=[];for(let w=0,y=d.length;w<y;w++){const M=d[w],N=g[w],E=v[w],T=x[w],b=p[w];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const _=n._createAnimationTracks(M,N,E,T,b);if(_)for(let m=0;m<_.length;m++)f.push(_[m])}return new Wb(s,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(g){g.isSkinnedMesh&&g.bind(d,CS)});for(let g=0,v=h.length;g<v;g++)u.add(h[g]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Wd:c.length>1?u=new Bi:c.length===1?u=c[0]:u=new ct,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Wn(u,s),s.extensions&&Ni(n,u,s),s.matrix!==void 0){const h=new je;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new Bi;n.name&&(s.name=r.createUniqueName(n.name)),Wn(s,n),n.extensions&&Ni(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[d,g]of r.associations)(d instanceof yn||d instanceof Rt)&&h.set(d,g);return u.traverse(d=>{const g=r.associations.get(d);g!=null&&h.set(d,g)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];mi[s.path]===mi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(mi[s.path]){case mi.weights:c=Nr;break;case mi.rotation:c=Ur;break;case mi.position:case mi.scale:c=Or;break;default:switch(n.itemSize){case 1:c=Nr;break;case 2:case 3:default:c=Or;break}break}const u=r.interpolation!==void 0?wS[r.interpolation]:gs,h=this._getArrayFromAccessor(n);for(let d=0,g=l.length;d<g;d++){const v=new c(l[d]+"."+mi[s.path],t.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Vl(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof Ur?yS:ef;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function RS(i,e,t){const n=e.attributes,r=new ti;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),a.normalized){const u=Vl(Tr[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new B,l=new B;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],g=d.min,v=d.max;if(g!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(g[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(g[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(g[2]),Math.abs(v[2]))),d.normalized){const x=Vl(Tr[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new Dn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function zh(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Bl[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return Ze.workingColorSpace!==xt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Wn(i,e),RS(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?ES(i,e.targets,t):i})}class LS extends zc{constructor(e){super(),this.sources=e,this.items={},this.toLoad=this.sources.length,this.loaded=0,this.setLoaders(),this.startLoading()}setLoaders(){this.loaders={},this.loaders.rgbeLoader=new XE,this.loaders.dracoLoader=new qE,this.loaders.dracoLoader.setDecoderPath("./draco/"),this.loaders.gltfLoader=new $E,this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader)}startLoading(){for(const e of this.sources)e.type==="hdri"?this.loaders.rgbeLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="gltfModel"&&this.loaders.gltfLoader.load(e.path,t=>{this.sourceLoaded(e,t)})}sourceLoaded(e,t){this.items[e.name]=t,this.loaded++,this.loaded===this.toLoad&&this.trigger("ready")}}class IS{constructor(){this.experience=new Ki,this.scene=this.experience.scene,this.resources=this.experience.resources,this.environmentMap=this.resources.items.environmentTexture,this.environmentMap.mapping=Ro,this.scene.environment=this.environmentMap}}class DS{constructor(){this.experience=new Ki,this.scene=this.experience.scene,this.debug=this.experience.debug,this.debug.active&&(this.tweaks=this.debug.ui.addFolder({title:"Light Tweaks",expanded:!1})),this.debugObject={},this.setDirectionalLight()}setDirectionalLight(){this.debugObject.color="#7affe9",this.directionalLight=new Yd(this.debugObject.color,3),this.directionalLight.castShadow=!0,this.directionalLight.shadow.mapSize.set(1024,1024),this.directionalLight.shadow.camera.far=15,this.directionalLight.shadow.normalBias=.05,this.directionalLight.position.set(-10,-7,-1),this.scene.add(this.directionalLight),this.debug.active&&(this.tweaks.addBinding(this.debugObject,"color").on("change",()=>{this.directionalLight.color.set(this.debugObject.color)}),this.tweaks.addBinding(this.directionalLight,"intensity",{min:0,max:10,step:.001}),this.tweaks.addBinding(this.directionalLight.position,"x",{label:"xPosition",min:-10,max:10,step:.001}),this.tweaks.addBinding(this.directionalLight.position,"y",{label:"yPosition",min:-10,max:10,step:.001}),this.tweaks.addBinding(this.directionalLight.position,"z",{label:"zPosition",min:-10,max:10,step:.001}))}}function Qo(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function vo(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var tf={exports:{}};(function(i,e){(function(t){i.exports=t()})(function(){return function t(n,r,s){function o(c,u){if(!r[c]){if(!n[c]){var h=typeof vo=="function"&&vo;if(!u&&h)return h(c,!0);if(a)return a(c,!0);throw new Error("Cannot find module '"+c+"'")}u=r[c]={exports:{}},n[c][0].call(u.exports,function(d){var g=n[c][1][d];return o(g||d)},u,u.exports,t,n,r,s)}return r[c].exports}for(var a=typeof vo=="function"&&vo,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(t,n,r){(function(s,o,a,l,c,u,h,d,g){var v=t("crypto");function x(E,T){T=w(E,T);var b;return(b=T.algorithm!=="passthrough"?v.createHash(T.algorithm):new N).write===void 0&&(b.write=b.update,b.end=b.update),M(T,b).dispatch(E),b.update||b.end(""),b.digest?b.digest(T.encoding==="buffer"?void 0:T.encoding):(E=b.read(),T.encoding!=="buffer"?E.toString(T.encoding):E)}(r=n.exports=x).sha1=function(E){return x(E)},r.keys=function(E){return x(E,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},r.MD5=function(E){return x(E,{algorithm:"md5",encoding:"hex"})},r.keysMD5=function(E){return x(E,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var p=v.getHashes?v.getHashes().slice():["sha1","md5"],f=(p.push("passthrough"),["buffer","hex","binary","base64"]);function w(E,T){var b={};if(b.algorithm=(T=T||{}).algorithm||"sha1",b.encoding=T.encoding||"hex",b.excludeValues=!!T.excludeValues,b.algorithm=b.algorithm.toLowerCase(),b.encoding=b.encoding.toLowerCase(),b.ignoreUnknown=T.ignoreUnknown===!0,b.respectType=T.respectType!==!1,b.respectFunctionNames=T.respectFunctionNames!==!1,b.respectFunctionProperties=T.respectFunctionProperties!==!1,b.unorderedArrays=T.unorderedArrays===!0,b.unorderedSets=T.unorderedSets!==!1,b.unorderedObjects=T.unorderedObjects!==!1,b.replacer=T.replacer||void 0,b.excludeKeys=T.excludeKeys||void 0,E===void 0)throw new Error("Object argument required.");for(var _=0;_<p.length;++_)p[_].toLowerCase()===b.algorithm.toLowerCase()&&(b.algorithm=p[_]);if(p.indexOf(b.algorithm)===-1)throw new Error('Algorithm "'+b.algorithm+'"  not supported. supported values: '+p.join(", "));if(f.indexOf(b.encoding)===-1&&b.algorithm!=="passthrough")throw new Error('Encoding "'+b.encoding+'"  not supported. supported values: '+f.join(", "));return b}function y(E){if(typeof E=="function")return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(E))!=null}function M(E,T,b){b=b||[];function _(m){return T.update?T.update(m,"utf8"):T.write(m,"utf8")}return{dispatch:function(m){return this["_"+((m=E.replacer?E.replacer(m):m)===null?"null":typeof m)](m)},_object:function(m){var A,I=Object.prototype.toString.call(m),F=/\[object (.*)\]/i.exec(I);if(F=(F=F?F[1]:"unknown:["+I+"]").toLowerCase(),0<=(I=b.indexOf(m)))return this.dispatch("[CIRCULAR:"+I+"]");if(b.push(m),a!==void 0&&a.isBuffer&&a.isBuffer(m))return _("buffer:"),_(m);if(F==="object"||F==="function"||F==="asyncfunction")return I=Object.keys(m),E.unorderedObjects&&(I=I.sort()),E.respectType===!1||y(m)||I.splice(0,0,"prototype","__proto__","constructor"),E.excludeKeys&&(I=I.filter(function(V){return!E.excludeKeys(V)})),_("object:"+I.length+":"),A=this,I.forEach(function(V){A.dispatch(V),_(":"),E.excludeValues||A.dispatch(m[V]),_(",")});if(!this["_"+F]){if(E.ignoreUnknown)return _("["+F+"]");throw new Error('Unknown object type "'+F+'"')}this["_"+F](m)},_array:function(m,V){V=V!==void 0?V:E.unorderedArrays!==!1;var I=this;if(_("array:"+m.length+":"),!V||m.length<=1)return m.forEach(function(H){return I.dispatch(H)});var F=[],V=m.map(function(H){var O=new N,j=b.slice();return M(E,O,j).dispatch(H),F=F.concat(j.slice(b.length)),O.read().toString()});return b=b.concat(F),V.sort(),this._array(V,!1)},_date:function(m){return _("date:"+m.toJSON())},_symbol:function(m){return _("symbol:"+m.toString())},_error:function(m){return _("error:"+m.toString())},_boolean:function(m){return _("bool:"+m.toString())},_string:function(m){_("string:"+m.length+":"),_(m.toString())},_function:function(m){_("fn:"),y(m)?this.dispatch("[native]"):this.dispatch(m.toString()),E.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(m.name)),E.respectFunctionProperties&&this._object(m)},_number:function(m){return _("number:"+m.toString())},_xml:function(m){return _("xml:"+m.toString())},_null:function(){return _("Null")},_undefined:function(){return _("Undefined")},_regexp:function(m){return _("regex:"+m.toString())},_uint8array:function(m){return _("uint8array:"),this.dispatch(Array.prototype.slice.call(m))},_uint8clampedarray:function(m){return _("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(m))},_int8array:function(m){return _("int8array:"),this.dispatch(Array.prototype.slice.call(m))},_uint16array:function(m){return _("uint16array:"),this.dispatch(Array.prototype.slice.call(m))},_int16array:function(m){return _("int16array:"),this.dispatch(Array.prototype.slice.call(m))},_uint32array:function(m){return _("uint32array:"),this.dispatch(Array.prototype.slice.call(m))},_int32array:function(m){return _("int32array:"),this.dispatch(Array.prototype.slice.call(m))},_float32array:function(m){return _("float32array:"),this.dispatch(Array.prototype.slice.call(m))},_float64array:function(m){return _("float64array:"),this.dispatch(Array.prototype.slice.call(m))},_arraybuffer:function(m){return _("arraybuffer:"),this.dispatch(new Uint8Array(m))},_url:function(m){return _("url:"+m.toString())},_map:function(m){return _("map:"),m=Array.from(m),this._array(m,E.unorderedSets!==!1)},_set:function(m){return _("set:"),m=Array.from(m),this._array(m,E.unorderedSets!==!1)},_file:function(m){return _("file:"),this.dispatch([m.name,m.size,m.type,m.lastModfied])},_blob:function(){if(E.ignoreUnknown)return _("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return _("domwindow")},_bigint:function(m){return _("bigint:"+m.toString())},_process:function(){return _("process")},_timer:function(){return _("timer")},_pipe:function(){return _("pipe")},_tcp:function(){return _("tcp")},_udp:function(){return _("udp")},_tty:function(){return _("tty")},_statwatcher:function(){return _("statwatcher")},_securecontext:function(){return _("securecontext")},_connection:function(){return _("connection")},_zlib:function(){return _("zlib")},_context:function(){return _("context")},_nodescript:function(){return _("nodescript")},_httpparser:function(){return _("httpparser")},_dataview:function(){return _("dataview")},_signal:function(){return _("signal")},_fsevent:function(){return _("fsevent")},_tlswrap:function(){return _("tlswrap")}}}function N(){return{buf:"",write:function(E){this.buf+=E},end:function(E){this.buf+=E},read:function(){return this.buf}}}r.writeToStream=function(E,T,b){return b===void 0&&(b=T,T={}),M(T=w(E,T),b).dispatch(E)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(t,n,r){(function(s,o,a,l,c,u,h,d,g){(function(v){var x=typeof Uint8Array<"u"?Uint8Array:Array,p=43,f=47,w=48,y=97,M=65,N=45,E=95;function T(b){return b=b.charCodeAt(0),b===p||b===N?62:b===f||b===E?63:b<w?-1:b<w+10?b-w+26+26:b<M+26?b-M:b<y+26?b-y+26:void 0}v.toByteArray=function(b){var _,m;if(0<b.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var A=b.length,A=b.charAt(A-2)==="="?2:b.charAt(A-1)==="="?1:0,I=new x(3*b.length/4-A),F=0<A?b.length-4:b.length,V=0;function H(O){I[V++]=O}for(_=0;_<F;_+=4,0)H((16711680&(m=T(b.charAt(_))<<18|T(b.charAt(_+1))<<12|T(b.charAt(_+2))<<6|T(b.charAt(_+3))))>>16),H((65280&m)>>8),H(255&m);return A==2?H(255&(m=T(b.charAt(_))<<2|T(b.charAt(_+1))>>4)):A==1&&(H((m=T(b.charAt(_))<<10|T(b.charAt(_+1))<<4|T(b.charAt(_+2))>>2)>>8&255),H(255&m)),I},v.fromByteArray=function(b){var _,m,A,I,F=b.length%3,V="";function H(O){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(O)}for(_=0,A=b.length-F;_<A;_+=3)m=(b[_]<<16)+(b[_+1]<<8)+b[_+2],V+=H((I=m)>>18&63)+H(I>>12&63)+H(I>>6&63)+H(63&I);switch(F){case 1:V=(V+=H((m=b[b.length-1])>>2))+H(m<<4&63)+"==";break;case 2:V=(V=(V+=H((m=(b[b.length-2]<<8)+b[b.length-1])>>10))+H(m>>4&63))+H(m<<2&63)+"="}return V}})(r===void 0?this.base64js={}:r)}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(t,n,r){(function(s,o,p,l,c,u,h,d,g){var v=t("base64-js"),x=t("ieee754");function p(P,D,k){if(!(this instanceof p))return new p(P,D,k);var L,ee,ne,xe,he=typeof P;if(D==="base64"&&he=="string")for(P=(xe=P).trim?xe.trim():xe.replace(/^\s+|\s+$/g,"");P.length%4!=0;)P+="=";if(he=="number")L=q(P);else if(he=="string")L=p.byteLength(P,D);else{if(he!="object")throw new Error("First argument needs to be a number, array or string.");L=q(P.length)}if(p._useTypedArrays?ee=p._augment(new Uint8Array(L)):((ee=this).length=L,ee._isBuffer=!0),p._useTypedArrays&&typeof P.byteLength=="number")ee._set(P);else if(se(xe=P)||p.isBuffer(xe)||xe&&typeof xe=="object"&&typeof xe.length=="number")for(ne=0;ne<L;ne++)p.isBuffer(P)?ee[ne]=P.readUInt8(ne):ee[ne]=P[ne];else if(he=="string")ee.write(P,0,D);else if(he=="number"&&!p._useTypedArrays&&!k)for(ne=0;ne<L;ne++)ee[ne]=0;return ee}function f(P,D,k,L){return p._charsWritten=Ue(function(ee){for(var ne=[],xe=0;xe<ee.length;xe++)ne.push(255&ee.charCodeAt(xe));return ne}(D),P,k,L)}function w(P,D,k,L){return p._charsWritten=Ue(function(ee){for(var ne,xe,he=[],He=0;He<ee.length;He++)xe=ee.charCodeAt(He),ne=xe>>8,xe=xe%256,he.push(xe),he.push(ne);return he}(D),P,k,L)}function y(P,D,k){var L="";k=Math.min(P.length,k);for(var ee=D;ee<k;ee++)L+=String.fromCharCode(P[ee]);return L}function M(P,D,k,ne){ne||(Q(typeof k=="boolean","missing or invalid endian"),Q(D!=null,"missing offset"),Q(D+1<P.length,"Trying to read beyond buffer length"));var ee,ne=P.length;if(!(ne<=D))return k?(ee=P[D],D+1<ne&&(ee|=P[D+1]<<8)):(ee=P[D]<<8,D+1<ne&&(ee|=P[D+1])),ee}function N(P,D,k,ne){ne||(Q(typeof k=="boolean","missing or invalid endian"),Q(D!=null,"missing offset"),Q(D+3<P.length,"Trying to read beyond buffer length"));var ee,ne=P.length;if(!(ne<=D))return k?(D+2<ne&&(ee=P[D+2]<<16),D+1<ne&&(ee|=P[D+1]<<8),ee|=P[D],D+3<ne&&(ee+=P[D+3]<<24>>>0)):(D+1<ne&&(ee=P[D+1]<<16),D+2<ne&&(ee|=P[D+2]<<8),D+3<ne&&(ee|=P[D+3]),ee+=P[D]<<24>>>0),ee}function E(P,D,k,L){if(L||(Q(typeof k=="boolean","missing or invalid endian"),Q(D!=null,"missing offset"),Q(D+1<P.length,"Trying to read beyond buffer length")),!(P.length<=D))return L=M(P,D,k,!0),32768&L?-1*(65535-L+1):L}function T(P,D,k,L){if(L||(Q(typeof k=="boolean","missing or invalid endian"),Q(D!=null,"missing offset"),Q(D+3<P.length,"Trying to read beyond buffer length")),!(P.length<=D))return L=N(P,D,k,!0),2147483648&L?-1*(4294967295-L+1):L}function b(P,D,k,L){return L||(Q(typeof k=="boolean","missing or invalid endian"),Q(D+3<P.length,"Trying to read beyond buffer length")),x.read(P,D,k,23,4)}function _(P,D,k,L){return L||(Q(typeof k=="boolean","missing or invalid endian"),Q(D+7<P.length,"Trying to read beyond buffer length")),x.read(P,D,k,52,8)}function m(P,D,k,L,ee){if(ee||(Q(D!=null,"missing value"),Q(typeof L=="boolean","missing or invalid endian"),Q(k!=null,"missing offset"),Q(k+1<P.length,"trying to write beyond buffer length"),le(D,65535)),ee=P.length,!(ee<=k))for(var ne=0,xe=Math.min(ee-k,2);ne<xe;ne++)P[k+ne]=(D&255<<8*(L?ne:1-ne))>>>8*(L?ne:1-ne)}function A(P,D,k,L,ee){if(ee||(Q(D!=null,"missing value"),Q(typeof L=="boolean","missing or invalid endian"),Q(k!=null,"missing offset"),Q(k+3<P.length,"trying to write beyond buffer length"),le(D,4294967295)),ee=P.length,!(ee<=k))for(var ne=0,xe=Math.min(ee-k,4);ne<xe;ne++)P[k+ne]=D>>>8*(L?ne:3-ne)&255}function I(P,D,k,L,ee){ee||(Q(D!=null,"missing value"),Q(typeof L=="boolean","missing or invalid endian"),Q(k!=null,"missing offset"),Q(k+1<P.length,"Trying to write beyond buffer length"),be(D,32767,-32768)),P.length<=k||m(P,0<=D?D:65535+D+1,k,L,ee)}function F(P,D,k,L,ee){ee||(Q(D!=null,"missing value"),Q(typeof L=="boolean","missing or invalid endian"),Q(k!=null,"missing offset"),Q(k+3<P.length,"Trying to write beyond buffer length"),be(D,2147483647,-2147483648)),P.length<=k||A(P,0<=D?D:4294967295+D+1,k,L,ee)}function V(P,D,k,L,ee){ee||(Q(D!=null,"missing value"),Q(typeof L=="boolean","missing or invalid endian"),Q(k!=null,"missing offset"),Q(k+3<P.length,"Trying to write beyond buffer length"),me(D,34028234663852886e22,-34028234663852886e22)),P.length<=k||x.write(P,D,k,L,23,4)}function H(P,D,k,L,ee){ee||(Q(D!=null,"missing value"),Q(typeof L=="boolean","missing or invalid endian"),Q(k!=null,"missing offset"),Q(k+7<P.length,"Trying to write beyond buffer length"),me(D,17976931348623157e292,-17976931348623157e292)),P.length<=k||x.write(P,D,k,L,52,8)}r.Buffer=p,r.SlowBuffer=p,r.INSPECT_MAX_BYTES=50,p.poolSize=8192,p._useTypedArrays=function(){try{var P=new ArrayBuffer(0),D=new Uint8Array(P);return D.foo=function(){return 42},D.foo()===42&&typeof D.subarray=="function"}catch{return!1}}(),p.isEncoding=function(P){switch(String(P).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},p.isBuffer=function(P){return!(P==null||!P._isBuffer)},p.byteLength=function(P,D){var k;switch(P+="",D||"utf8"){case"hex":k=P.length/2;break;case"utf8":case"utf-8":k=fe(P).length;break;case"ascii":case"binary":case"raw":k=P.length;break;case"base64":k=Le(P).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":k=2*P.length;break;default:throw new Error("Unknown encoding")}return k},p.concat=function(P,D){if(Q(se(P),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),P.length===0)return new p(0);if(P.length===1)return P[0];if(typeof D!="number")for(ee=D=0;ee<P.length;ee++)D+=P[ee].length;for(var k=new p(D),L=0,ee=0;ee<P.length;ee++){var ne=P[ee];ne.copy(k,L),L+=ne.length}return k},p.prototype.write=function(P,D,k,L){isFinite(D)?isFinite(k)||(L=k,k=void 0):(He=L,L=D,D=k,k=He),D=Number(D)||0;var ee,ne,xe,he,He=this.length-D;switch((!k||He<(k=Number(k)))&&(k=He),L=String(L||"utf8").toLowerCase()){case"hex":ee=function(Se,Ee,U,C){U=Number(U)||0;var W=Se.length-U;(!C||W<(C=Number(C)))&&(C=W),Q((W=Ee.length)%2==0,"Invalid hex string"),W/2<C&&(C=W/2);for(var ie=0;ie<C;ie++){var oe=parseInt(Ee.substr(2*ie,2),16);Q(!isNaN(oe),"Invalid hex string"),Se[U+ie]=oe}return p._charsWritten=2*ie,ie}(this,P,D,k);break;case"utf8":case"utf-8":ne=this,xe=D,he=k,ee=p._charsWritten=Ue(fe(P),ne,xe,he);break;case"ascii":case"binary":ee=f(this,P,D,k);break;case"base64":ne=this,xe=D,he=k,ee=p._charsWritten=Ue(Le(P),ne,xe,he);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":ee=w(this,P,D,k);break;default:throw new Error("Unknown encoding")}return ee},p.prototype.toString=function(P,D,k){var L,ee,ne,xe,he=this;if(P=String(P||"utf8").toLowerCase(),D=Number(D)||0,(k=k!==void 0?Number(k):he.length)===D)return"";switch(P){case"hex":L=function(He,Se,Ee){var U=He.length;(!Se||Se<0)&&(Se=0),(!Ee||Ee<0||U<Ee)&&(Ee=U);for(var C="",W=Se;W<Ee;W++)C+=te(He[W]);return C}(he,D,k);break;case"utf8":case"utf-8":L=function(He,Se,Ee){var U="",C="";Ee=Math.min(He.length,Ee);for(var W=Se;W<Ee;W++)He[W]<=127?(U+=J(C)+String.fromCharCode(He[W]),C=""):C+="%"+He[W].toString(16);return U+J(C)}(he,D,k);break;case"ascii":case"binary":L=y(he,D,k);break;case"base64":ee=he,xe=k,L=(ne=D)===0&&xe===ee.length?v.fromByteArray(ee):v.fromByteArray(ee.slice(ne,xe));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":L=function(He,Se,Ee){for(var U=He.slice(Se,Ee),C="",W=0;W<U.length;W+=2)C+=String.fromCharCode(U[W]+256*U[W+1]);return C}(he,D,k);break;default:throw new Error("Unknown encoding")}return L},p.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},p.prototype.copy=function(P,D,k,L){if(D=D||0,(L=L||L===0?L:this.length)!==(k=k||0)&&P.length!==0&&this.length!==0){Q(k<=L,"sourceEnd < sourceStart"),Q(0<=D&&D<P.length,"targetStart out of bounds"),Q(0<=k&&k<this.length,"sourceStart out of bounds"),Q(0<=L&&L<=this.length,"sourceEnd out of bounds"),L>this.length&&(L=this.length);var ee=(L=P.length-D<L-k?P.length-D+k:L)-k;if(ee<100||!p._useTypedArrays)for(var ne=0;ne<ee;ne++)P[ne+D]=this[ne+k];else P._set(this.subarray(k,k+ee),D)}},p.prototype.slice=function(P,D){var k=this.length;if(P=j(P,k,0),D=j(D,k,k),p._useTypedArrays)return p._augment(this.subarray(P,D));for(var L=D-P,ee=new p(L,void 0,!0),ne=0;ne<L;ne++)ee[ne]=this[ne+P];return ee},p.prototype.get=function(P){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(P)},p.prototype.set=function(P,D){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(P,D)},p.prototype.readUInt8=function(P,D){if(D||(Q(P!=null,"missing offset"),Q(P<this.length,"Trying to read beyond buffer length")),!(P>=this.length))return this[P]},p.prototype.readUInt16LE=function(P,D){return M(this,P,!0,D)},p.prototype.readUInt16BE=function(P,D){return M(this,P,!1,D)},p.prototype.readUInt32LE=function(P,D){return N(this,P,!0,D)},p.prototype.readUInt32BE=function(P,D){return N(this,P,!1,D)},p.prototype.readInt8=function(P,D){if(D||(Q(P!=null,"missing offset"),Q(P<this.length,"Trying to read beyond buffer length")),!(P>=this.length))return 128&this[P]?-1*(255-this[P]+1):this[P]},p.prototype.readInt16LE=function(P,D){return E(this,P,!0,D)},p.prototype.readInt16BE=function(P,D){return E(this,P,!1,D)},p.prototype.readInt32LE=function(P,D){return T(this,P,!0,D)},p.prototype.readInt32BE=function(P,D){return T(this,P,!1,D)},p.prototype.readFloatLE=function(P,D){return b(this,P,!0,D)},p.prototype.readFloatBE=function(P,D){return b(this,P,!1,D)},p.prototype.readDoubleLE=function(P,D){return _(this,P,!0,D)},p.prototype.readDoubleBE=function(P,D){return _(this,P,!1,D)},p.prototype.writeUInt8=function(P,D,k){k||(Q(P!=null,"missing value"),Q(D!=null,"missing offset"),Q(D<this.length,"trying to write beyond buffer length"),le(P,255)),D>=this.length||(this[D]=P)},p.prototype.writeUInt16LE=function(P,D,k){m(this,P,D,!0,k)},p.prototype.writeUInt16BE=function(P,D,k){m(this,P,D,!1,k)},p.prototype.writeUInt32LE=function(P,D,k){A(this,P,D,!0,k)},p.prototype.writeUInt32BE=function(P,D,k){A(this,P,D,!1,k)},p.prototype.writeInt8=function(P,D,k){k||(Q(P!=null,"missing value"),Q(D!=null,"missing offset"),Q(D<this.length,"Trying to write beyond buffer length"),be(P,127,-128)),D>=this.length||(0<=P?this.writeUInt8(P,D,k):this.writeUInt8(255+P+1,D,k))},p.prototype.writeInt16LE=function(P,D,k){I(this,P,D,!0,k)},p.prototype.writeInt16BE=function(P,D,k){I(this,P,D,!1,k)},p.prototype.writeInt32LE=function(P,D,k){F(this,P,D,!0,k)},p.prototype.writeInt32BE=function(P,D,k){F(this,P,D,!1,k)},p.prototype.writeFloatLE=function(P,D,k){V(this,P,D,!0,k)},p.prototype.writeFloatBE=function(P,D,k){V(this,P,D,!1,k)},p.prototype.writeDoubleLE=function(P,D,k){H(this,P,D,!0,k)},p.prototype.writeDoubleBE=function(P,D,k){H(this,P,D,!1,k)},p.prototype.fill=function(P,D,k){if(D=D||0,k=k||this.length,Q(typeof(P=typeof(P=P||0)=="string"?P.charCodeAt(0):P)=="number"&&!isNaN(P),"value is not a number"),Q(D<=k,"end < start"),k!==D&&this.length!==0){Q(0<=D&&D<this.length,"start out of bounds"),Q(0<=k&&k<=this.length,"end out of bounds");for(var L=D;L<k;L++)this[L]=P}},p.prototype.inspect=function(){for(var P=[],D=this.length,k=0;k<D;k++)if(P[k]=te(this[k]),k===r.INSPECT_MAX_BYTES){P[k+1]="...";break}return"<Buffer "+P.join(" ")+">"},p.prototype.toArrayBuffer=function(){if(typeof Uint8Array>"u")throw new Error("Buffer.toArrayBuffer not supported in this browser");if(p._useTypedArrays)return new p(this).buffer;for(var P=new Uint8Array(this.length),D=0,k=P.length;D<k;D+=1)P[D]=this[D];return P.buffer};var O=p.prototype;function j(P,D,k){return typeof P!="number"?k:D<=(P=~~P)?D:0<=P||0<=(P+=D)?P:0}function q(P){return(P=~~Math.ceil(+P))<0?0:P}function se(P){return(Array.isArray||function(D){return Object.prototype.toString.call(D)==="[object Array]"})(P)}function te(P){return P<16?"0"+P.toString(16):P.toString(16)}function fe(P){for(var D=[],k=0;k<P.length;k++){var L=P.charCodeAt(k);if(L<=127)D.push(P.charCodeAt(k));else for(var ee=k,ne=(55296<=L&&L<=57343&&k++,encodeURIComponent(P.slice(ee,k+1)).substr(1).split("%")),xe=0;xe<ne.length;xe++)D.push(parseInt(ne[xe],16))}return D}function Le(P){return v.toByteArray(P)}function Ue(P,D,k,L){for(var ee=0;ee<L&&!(ee+k>=D.length||ee>=P.length);ee++)D[ee+k]=P[ee];return ee}function J(P){try{return decodeURIComponent(P)}catch{return"�"}}function le(P,D){Q(typeof P=="number","cannot write a non-number as a number"),Q(0<=P,"specified a negative value for writing an unsigned value"),Q(P<=D,"value is larger than maximum value for type"),Q(Math.floor(P)===P,"value has a fractional component")}function be(P,D,k){Q(typeof P=="number","cannot write a non-number as a number"),Q(P<=D,"value larger than maximum allowed value"),Q(k<=P,"value smaller than minimum allowed value"),Q(Math.floor(P)===P,"value has a fractional component")}function me(P,D,k){Q(typeof P=="number","cannot write a non-number as a number"),Q(P<=D,"value larger than maximum allowed value"),Q(k<=P,"value smaller than minimum allowed value")}function Q(P,D){if(!P)throw new Error(D||"Failed assertion")}p._augment=function(P){return P._isBuffer=!0,P._get=P.get,P._set=P.set,P.get=O.get,P.set=O.set,P.write=O.write,P.toString=O.toString,P.toLocaleString=O.toString,P.toJSON=O.toJSON,P.copy=O.copy,P.slice=O.slice,P.readUInt8=O.readUInt8,P.readUInt16LE=O.readUInt16LE,P.readUInt16BE=O.readUInt16BE,P.readUInt32LE=O.readUInt32LE,P.readUInt32BE=O.readUInt32BE,P.readInt8=O.readInt8,P.readInt16LE=O.readInt16LE,P.readInt16BE=O.readInt16BE,P.readInt32LE=O.readInt32LE,P.readInt32BE=O.readInt32BE,P.readFloatLE=O.readFloatLE,P.readFloatBE=O.readFloatBE,P.readDoubleLE=O.readDoubleLE,P.readDoubleBE=O.readDoubleBE,P.writeUInt8=O.writeUInt8,P.writeUInt16LE=O.writeUInt16LE,P.writeUInt16BE=O.writeUInt16BE,P.writeUInt32LE=O.writeUInt32LE,P.writeUInt32BE=O.writeUInt32BE,P.writeInt8=O.writeInt8,P.writeInt16LE=O.writeInt16LE,P.writeInt16BE=O.writeInt16BE,P.writeInt32LE=O.writeInt32LE,P.writeInt32BE=O.writeInt32BE,P.writeFloatLE=O.writeFloatLE,P.writeFloatBE=O.writeFloatBE,P.writeDoubleLE=O.writeDoubleLE,P.writeDoubleBE=O.writeDoubleBE,P.fill=O.fill,P.inspect=O.inspect,P.toArrayBuffer=O.toArrayBuffer,P}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(t,n,r){(function(s,o,v,l,c,u,h,d,g){var v=t("buffer").Buffer,x=4,p=new v(x);p.fill(0),n.exports={hash:function(f,w,y,M){for(var N=w(function(m,A){m.length%x!=0&&(I=m.length+(x-m.length%x),m=v.concat([m,p],I));for(var I,F=[],V=A?m.readInt32BE:m.readInt32LE,H=0;H<m.length;H+=x)F.push(V.call(m,H));return F}(f=v.isBuffer(f)?f:new v(f),M),8*f.length),w=M,E=new v(y),T=w?E.writeInt32BE:E.writeInt32LE,b=0;b<N.length;b++)T.call(E,N[b],4*b,!0);return E}}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(t,n,r){(function(s,o,v,l,c,u,h,d,g){var v=t("buffer").Buffer,x=t("./sha"),p=t("./sha256"),f=t("./rng"),w={sha1:x,sha256:p,md5:t("./md5")},y=64,M=new v(y);function N(m,A){var I=w[m=m||"sha1"],F=[];return I||E("algorithm:",m,"is not yet supported"),{update:function(V){return v.isBuffer(V)||(V=new v(V)),F.push(V),V.length,this},digest:function(V){var H=v.concat(F),H=A?function(O,j,q){v.isBuffer(j)||(j=new v(j)),v.isBuffer(q)||(q=new v(q)),j.length>y?j=O(j):j.length<y&&(j=v.concat([j,M],y));for(var se=new v(y),te=new v(y),fe=0;fe<y;fe++)se[fe]=54^j[fe],te[fe]=92^j[fe];return q=O(v.concat([se,q])),O(v.concat([te,q]))}(I,A,H):I(H);return F=null,V?H.toString(V):H}}}function E(){var m=[].slice.call(arguments).join(" ");throw new Error([m,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join(`
`))}M.fill(0),r.createHash=function(m){return N(m)},r.createHmac=N,r.randomBytes=function(m,A){if(!A||!A.call)return new v(f(m));try{A.call(this,void 0,new v(f(m)))}catch(I){A(I)}};var T,b=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],_=function(m){r[m]=function(){E("sorry,",m,"is not implemented yet")}};for(T in b)_(b[T])}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(t,n,r){(function(s,o,a,l,c,u,h,d,g){var v=t("./helpers");function x(E,T){E[T>>5]|=128<<T%32,E[14+(T+64>>>9<<4)]=T;for(var b=1732584193,_=-271733879,m=-1732584194,A=271733878,I=0;I<E.length;I+=16){var F=b,V=_,H=m,O=A,b=f(b,_,m,A,E[I+0],7,-680876936),A=f(A,b,_,m,E[I+1],12,-389564586),m=f(m,A,b,_,E[I+2],17,606105819),_=f(_,m,A,b,E[I+3],22,-1044525330);b=f(b,_,m,A,E[I+4],7,-176418897),A=f(A,b,_,m,E[I+5],12,1200080426),m=f(m,A,b,_,E[I+6],17,-1473231341),_=f(_,m,A,b,E[I+7],22,-45705983),b=f(b,_,m,A,E[I+8],7,1770035416),A=f(A,b,_,m,E[I+9],12,-1958414417),m=f(m,A,b,_,E[I+10],17,-42063),_=f(_,m,A,b,E[I+11],22,-1990404162),b=f(b,_,m,A,E[I+12],7,1804603682),A=f(A,b,_,m,E[I+13],12,-40341101),m=f(m,A,b,_,E[I+14],17,-1502002290),b=w(b,_=f(_,m,A,b,E[I+15],22,1236535329),m,A,E[I+1],5,-165796510),A=w(A,b,_,m,E[I+6],9,-1069501632),m=w(m,A,b,_,E[I+11],14,643717713),_=w(_,m,A,b,E[I+0],20,-373897302),b=w(b,_,m,A,E[I+5],5,-701558691),A=w(A,b,_,m,E[I+10],9,38016083),m=w(m,A,b,_,E[I+15],14,-660478335),_=w(_,m,A,b,E[I+4],20,-405537848),b=w(b,_,m,A,E[I+9],5,568446438),A=w(A,b,_,m,E[I+14],9,-1019803690),m=w(m,A,b,_,E[I+3],14,-187363961),_=w(_,m,A,b,E[I+8],20,1163531501),b=w(b,_,m,A,E[I+13],5,-1444681467),A=w(A,b,_,m,E[I+2],9,-51403784),m=w(m,A,b,_,E[I+7],14,1735328473),b=y(b,_=w(_,m,A,b,E[I+12],20,-1926607734),m,A,E[I+5],4,-378558),A=y(A,b,_,m,E[I+8],11,-2022574463),m=y(m,A,b,_,E[I+11],16,1839030562),_=y(_,m,A,b,E[I+14],23,-35309556),b=y(b,_,m,A,E[I+1],4,-1530992060),A=y(A,b,_,m,E[I+4],11,1272893353),m=y(m,A,b,_,E[I+7],16,-155497632),_=y(_,m,A,b,E[I+10],23,-1094730640),b=y(b,_,m,A,E[I+13],4,681279174),A=y(A,b,_,m,E[I+0],11,-358537222),m=y(m,A,b,_,E[I+3],16,-722521979),_=y(_,m,A,b,E[I+6],23,76029189),b=y(b,_,m,A,E[I+9],4,-640364487),A=y(A,b,_,m,E[I+12],11,-421815835),m=y(m,A,b,_,E[I+15],16,530742520),b=M(b,_=y(_,m,A,b,E[I+2],23,-995338651),m,A,E[I+0],6,-198630844),A=M(A,b,_,m,E[I+7],10,1126891415),m=M(m,A,b,_,E[I+14],15,-1416354905),_=M(_,m,A,b,E[I+5],21,-57434055),b=M(b,_,m,A,E[I+12],6,1700485571),A=M(A,b,_,m,E[I+3],10,-1894986606),m=M(m,A,b,_,E[I+10],15,-1051523),_=M(_,m,A,b,E[I+1],21,-2054922799),b=M(b,_,m,A,E[I+8],6,1873313359),A=M(A,b,_,m,E[I+15],10,-30611744),m=M(m,A,b,_,E[I+6],15,-1560198380),_=M(_,m,A,b,E[I+13],21,1309151649),b=M(b,_,m,A,E[I+4],6,-145523070),A=M(A,b,_,m,E[I+11],10,-1120210379),m=M(m,A,b,_,E[I+2],15,718787259),_=M(_,m,A,b,E[I+9],21,-343485551),b=N(b,F),_=N(_,V),m=N(m,H),A=N(A,O)}return Array(b,_,m,A)}function p(E,T,b,_,m,A){return N((T=N(N(T,E),N(_,A)))<<m|T>>>32-m,b)}function f(E,T,b,_,m,A,I){return p(T&b|~T&_,E,T,m,A,I)}function w(E,T,b,_,m,A,I){return p(T&_|b&~_,E,T,m,A,I)}function y(E,T,b,_,m,A,I){return p(T^b^_,E,T,m,A,I)}function M(E,T,b,_,m,A,I){return p(b^(T|~_),E,T,m,A,I)}function N(E,T){var b=(65535&E)+(65535&T);return(E>>16)+(T>>16)+(b>>16)<<16|65535&b}n.exports=function(E){return v.hash(E,x,16)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(t,n,r){(function(s,o,a,l,c,u,h,d,g){n.exports=function(v){for(var x,p=new Array(v),f=0;f<v;f++)!(3&f)&&(x=4294967296*Math.random()),p[f]=x>>>((3&f)<<3)&255;return p}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(t,n,r){(function(s,o,a,l,c,u,h,d,g){var v=t("./helpers");function x(w,y){w[y>>5]|=128<<24-y%32,w[15+(y+64>>9<<4)]=y;for(var M,N,E,T=Array(80),b=1732584193,_=-271733879,m=-1732584194,A=271733878,I=-1009589776,F=0;F<w.length;F+=16){for(var V=b,H=_,O=m,j=A,q=I,se=0;se<80;se++){T[se]=se<16?w[F+se]:f(T[se-3]^T[se-8]^T[se-14]^T[se-16],1);var te=p(p(f(b,5),(te=_,N=m,E=A,(M=se)<20?te&N|~te&E:!(M<40)&&M<60?te&N|te&E|N&E:te^N^E)),p(p(I,T[se]),(M=se)<20?1518500249:M<40?1859775393:M<60?-1894007588:-899497514)),I=A,A=m,m=f(_,30),_=b,b=te}b=p(b,V),_=p(_,H),m=p(m,O),A=p(A,j),I=p(I,q)}return Array(b,_,m,A,I)}function p(w,y){var M=(65535&w)+(65535&y);return(w>>16)+(y>>16)+(M>>16)<<16|65535&M}function f(w,y){return w<<y|w>>>32-y}n.exports=function(w){return v.hash(w,x,20,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(t,n,r){(function(s,o,a,l,c,u,h,d,g){function v(y,M){var N=(65535&y)+(65535&M);return(y>>16)+(M>>16)+(N>>16)<<16|65535&N}function x(y,M){var N,E=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),T=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),b=new Array(64);y[M>>5]|=128<<24-M%32,y[15+(M+64>>9<<4)]=M;for(var _,m,A=0;A<y.length;A+=16){for(var I=T[0],F=T[1],V=T[2],H=T[3],O=T[4],j=T[5],q=T[6],se=T[7],te=0;te<64;te++)b[te]=te<16?y[te+A]:v(v(v((m=b[te-2],f(m,17)^f(m,19)^w(m,10)),b[te-7]),(m=b[te-15],f(m,7)^f(m,18)^w(m,3))),b[te-16]),N=v(v(v(v(se,f(m=O,6)^f(m,11)^f(m,25)),O&j^~O&q),E[te]),b[te]),_=v(f(_=I,2)^f(_,13)^f(_,22),I&F^I&V^F&V),se=q,q=j,j=O,O=v(H,N),H=V,V=F,F=I,I=v(N,_);T[0]=v(I,T[0]),T[1]=v(F,T[1]),T[2]=v(V,T[2]),T[3]=v(H,T[3]),T[4]=v(O,T[4]),T[5]=v(j,T[5]),T[6]=v(q,T[6]),T[7]=v(se,T[7])}return T}var p=t("./helpers"),f=function(y,M){return y>>>M|y<<32-M},w=function(y,M){return y>>>M};n.exports=function(y){return p.hash(y,x,32,!0)}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(t,n,r){(function(s,o,a,l,c,u,h,d,g){r.read=function(v,x,p,f,A){var y,M,N=8*A-f-1,E=(1<<N)-1,T=E>>1,b=-7,_=p?A-1:0,m=p?-1:1,A=v[x+_];for(_+=m,y=A&(1<<-b)-1,A>>=-b,b+=N;0<b;y=256*y+v[x+_],_+=m,b-=8);for(M=y&(1<<-b)-1,y>>=-b,b+=f;0<b;M=256*M+v[x+_],_+=m,b-=8);if(y===0)y=1-T;else{if(y===E)return M?NaN:1/0*(A?-1:1);M+=Math.pow(2,f),y-=T}return(A?-1:1)*M*Math.pow(2,y-f)},r.write=function(v,x,p,f,w,I){var M,N,E=8*I-w-1,T=(1<<E)-1,b=T>>1,_=w===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=f?0:I-1,A=f?1:-1,I=x<0||x===0&&1/x<0?1:0;for(x=Math.abs(x),isNaN(x)||x===1/0?(N=isNaN(x)?1:0,M=T):(M=Math.floor(Math.log(x)/Math.LN2),x*(f=Math.pow(2,-M))<1&&(M--,f*=2),2<=(x+=1<=M+b?_/f:_*Math.pow(2,1-b))*f&&(M++,f/=2),T<=M+b?(N=0,M=T):1<=M+b?(N=(x*f-1)*Math.pow(2,w),M+=b):(N=x*Math.pow(2,b-1)*Math.pow(2,w),M=0));8<=w;v[p+m]=255&N,m+=A,N/=256,w-=8);for(M=M<<w|N,E+=w;0<E;v[p+m]=255&M,m+=A,M/=256,E-=8);v[p+m-A]|=128*I}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(t,n,r){(function(s,o,a,l,c,u,h,d,g){var v,x,p;function f(){}(s=n.exports={}).nextTick=(x=typeof window<"u"&&window.setImmediate,p=typeof window<"u"&&window.postMessage&&window.addEventListener,x?function(w){return window.setImmediate(w)}:p?(v=[],window.addEventListener("message",function(w){var y=w.source;y!==window&&y!==null||w.data!=="process-tick"||(w.stopPropagation(),0<v.length&&v.shift()())},!0),function(w){v.push(w),window.postMessage("process-tick","*")}):function(w){setTimeout(w,0)}),s.title="browser",s.browser=!0,s.env={},s.argv=[],s.on=f,s.addListener=f,s.once=f,s.off=f,s.removeListener=f,s.removeAllListeners=f,s.emit=f,s.binding=function(w){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(w){throw new Error("process.chdir is not supported")}}).call(this,t("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},t("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)})})(tf);var NS=tf.exports;const US=Qo(NS);var nf=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","uint","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"],OS=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"],rf=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"],FS=nf,kS=FS.slice().concat(["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray"]),zl=rf;zl=zl.slice().filter(function(i){return!/^(gl\_|texture)/.test(i)});var BS=zl.concat(["gl_VertexID","gl_InstanceID","gl_Position","gl_PointSize","gl_FragCoord","gl_FrontFacing","gl_FragDepth","gl_PointCoord","gl_MaxVertexAttribs","gl_MaxVertexUniformVectors","gl_MaxVertexOutputVectors","gl_MaxFragmentInputVectors","gl_MaxVertexTextureImageUnits","gl_MaxCombinedTextureImageUnits","gl_MaxTextureImageUnits","gl_MaxFragmentUniformVectors","gl_MaxDrawBuffers","gl_MinProgramTexelOffset","gl_MaxProgramTexelOffset","gl_DepthRangeParameters","gl_DepthRange","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"]),VS=$S,zS=nf,Hh=OS,HS=rf,GS=kS,WS=BS,_n=999,Gh=9999,qa=0,Ka=1,Wh=2,jh=3,Xh=4,as=5,jS=6,XS=7,qS=8,qh=9,KS=10,Kh=11,YS=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function $S(i){var e=0,t=0,n=_n,r,s,o=[],a=[],l=1,c=0,u=0,h=!1,d=!1,g="",v;i=i||{};var x=HS,p=zS;i.version==="300 es"&&(x=WS,p=GS);for(var f={},w={},e=0;e<x.length;e++)f[x[e]]=!0;for(var e=0;e<p.length;e++)w[p[e]]=!0;return function(j){return a=[],j!==null?M(j):N()};function y(j){j.length&&a.push({type:YS[n],data:j,position:u,line:l,column:c})}function M(j){e=0,j.toString&&(j=j.toString()),g+=j.replace(/\r\n/g,`
`),v=g.length;for(var q;r=g[e],e<v;){switch(q=e,n){case qa:e=m();break;case Ka:e=_();break;case Wh:e=b();break;case jh:e=A();break;case Xh:e=V();break;case Kh:e=F();break;case as:e=H();break;case Gh:e=O();break;case qh:e=T();break;case _n:e=E();break}if(q!==e)switch(g[q]){case`
`:c=0,++l;break;default:++c;break}}return t+=e,g=g.slice(e),a}function N(j){return o.length&&y(o.join("")),n=KS,y("(eof)"),a}function E(){return o=o.length?[]:o,s==="/"&&r==="*"?(u=t+e-1,n=qa,s=r,e+1):s==="/"&&r==="/"?(u=t+e-1,n=Ka,s=r,e+1):r==="#"?(n=Wh,u=t+e,e):/\s/.test(r)?(n=qh,u=t+e,e):(h=/\d/.test(r),d=/[^\w_]/.test(r),u=t+e,n=h?Xh:d?jh:Gh,e)}function T(){return/[^\s]/g.test(r)?(y(o.join("")),n=_n,e):(o.push(r),s=r,e+1)}function b(){return(r==="\r"||r===`
`)&&s!=="\\"?(y(o.join("")),n=_n,e):(o.push(r),s=r,e+1)}function _(){return b()}function m(){return r==="/"&&s==="*"?(o.push(r),y(o.join("")),n=_n,e+1):(o.push(r),s=r,e+1)}function A(){if(s==="."&&/\d/.test(r))return n=as,e;if(s==="/"&&r==="*")return n=qa,e;if(s==="/"&&r==="/")return n=Ka,e;if(r==="."&&o.length){for(;I(o););return n=as,e}if(r===";"||r===")"||r==="("){if(o.length)for(;I(o););return y(r),n=_n,e+1}var j=o.length===2&&r!=="=";if(/[\w_\d\s]/.test(r)||j){for(;I(o););return n=_n,e}return o.push(r),s=r,e+1}function I(j){var q=0,se,te;do{if(se=Hh.indexOf(j.slice(0,j.length+q).join("")),te=Hh[se],se===-1){if(q--+j.length>0)continue;te=j.slice(0,1).join("")}return y(te),u+=te.length,o=o.slice(te.length),o.length}while(!0)}function F(){return/[^a-fA-F0-9]/.test(r)?(y(o.join("")),n=_n,e):(o.push(r),s=r,e+1)}function V(){return r==="."||/[eE]/.test(r)?(o.push(r),n=as,s=r,e+1):r==="x"&&o.length===1&&o[0]==="0"?(n=Kh,o.push(r),s=r,e+1):/[^\d]/.test(r)?(y(o.join("")),n=_n,e):(o.push(r),s=r,e+1)}function H(){return r==="f"&&(o.push(r),s=r,e+=1),/[eE]/.test(r)||(r==="-"||r==="+")&&/[eE]/.test(s)?(o.push(r),s=r,e+1):/[^\d]/.test(r)?(y(o.join("")),n=_n,e):(o.push(r),s=r,e+1)}function O(){if(/[^\d\w_]/.test(r)){var j=o.join("");return w[j]?n=qS:f[j]?n=XS:n=jS,y(o.join("")),n=_n,e}return o.push(r),s=r,e+1}}var ZS=VS,JS=QS;function QS(i,e){var t=ZS(e),n=[];return n=n.concat(t(i)),n=n.concat(t(null)),n}const eT=Qo(JS);var tT=nT;function nT(i){for(var e=[],t=0;t<i.length;t++)i[t].type!=="eof"&&e.push(i[t].data);return e.join("")}const Yh=Qo(tT);var iT=rT;function rT(i){var e=null,t=null,n=0,r=0,s=0,o=0,a=0,l=[],c,u,h;for(c=0,u;c<i.length;c++)if(h=i[c],h.data==="{"){if(n&&n++||(u=g(c,gi(")"),gi()),u<0)||(o=u,u=g(u,gi("("),gi(")")),u<0)||(a=u,u=g(u,ls),u<0)||i[u].type!=="ident"||(t=i[u].data,u=g(u,ls),u<0))continue;n=1,r=c,e=i[u].data,s=u;var d=g(u,ls);switch(i[d]&&i[d].data){case"lowp":case"highp":case"mediump":s=d}}else if(n&&h.data==="}"){if(--n)continue;l.push({name:t,type:e,body:[r+1,c],args:[a,o+1],outer:[s,c+1]})}for(c=0;c<i.length;c++)if(h=i[c],h.data===";"){if(u=g(c,gi(")"),gi()),u<0||(o=u,u=g(u,gi("("),gi(")")),u<0)||(a=u,u=g(u,ls),u<0)||i[u].type!=="ident"||(t=i[u].data,u=g(u,ls),u<0)||i[u].type==="operator"||i[u].data==="return")continue;e=i[u].data,l.push({name:t,type:e,body:!1,args:[a,o+1],outer:[u,c+1]})}return l.sort(function(v,x){return v.outer[0]-x.outer[0]});function g(v,x,p){for(var f=v-1;f>=0;f--){if(x(i[f]))return f;if(p&&p(i[f]))return-1}return-1}}function gi(i){return function(e){return e.type==="operator"&&(!i||e.data===i)}}function ls(i){return i.type!=="whitespace"}const sT=Qo(iT);function oT(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function sf(i){var e=oT(i,"string");return typeof e=="symbol"?e:String(e)}function st(i,e,t){return e=sf(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function $h(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function vr(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?$h(Object(t),!0).forEach(function(n){st(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):$h(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function aT(i,e){if(i==null)return{};var t={},n=Object.keys(i),r,s;for(s=0;s<n.length;s++)r=n[s],!(e.indexOf(r)>=0)&&(t[r]=i[r]);return t}function lT(i,e){if(i==null)return{};var t=aT(i,e),n,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);for(r=0;r<s.length;r++)n=s[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(i,n)&&(t[n]=i[n])}return t}function cT(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function uT(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,sf(n.key),n)}}function hT(i,e,t){return e&&uT(i.prototype,e),Object.defineProperty(i,"prototype",{writable:!1}),i}function of(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Hl(i,e){return Hl=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Hl(i,e)}function dT(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),e&&Hl(i,e)}function Go(i){return Go=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Go(i)}function pT(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function fT(i,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return of(i)}function mT(i){var e=pT();return function(){var n=Go(i),r;if(e){var s=Go(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return fT(this,r)}}var Be={position:"csm_Position",positionRaw:"csm_PositionRaw",pointSize:"csm_PointSize",fragColor:"csm_FragColor",diffuseColor:"csm_DiffuseColor",normal:"csm_Normal",roughness:"csm_Roughness",metalness:"csm_Metalness",emissive:"csm_Emissive",ao:"csm_AO",bump:"csm_Bump",depthAlpha:"csm_DepthAlpha"},Wt,br,gT=(Wt={},st(Wt,"".concat(Be.normal),{"#include <beginnormal_vertex>":`
    vec3 objectNormal = `.concat(Be.normal,`;
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `)}),st(Wt,"".concat(Be.position),{"#include <begin_vertex>":`
    vec3 transformed = `.concat(Be.position,`;
  `)}),st(Wt,"".concat(Be.positionRaw),{"#include <begin_vertex>":`
    vec4 csm_internal_positionUnprojected = `.concat(Be.positionRaw,`;
    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;
    #endif
    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;
    vec3 transformed = csm_internal_positionUnprojected.xyz;
  `)}),st(Wt,"".concat(Be.pointSize),{"gl_PointSize = size;":`
    gl_PointSize = `.concat(Be.pointSize,`;
    `)}),st(Wt,"".concat(Be.diffuseColor),{"#include <color_fragment>":`
    #include <color_fragment>
    diffuseColor = `.concat(Be.diffuseColor,`;
  `)}),st(Wt,"".concat(Be.fragColor),{"#include <dithering_fragment>":`
    #include <dithering_fragment>
    gl_FragColor  = `.concat(Be.fragColor,`;
  `)}),st(Wt,"".concat(Be.emissive),{"vec3 totalEmissiveRadiance = emissive;":`
    vec3 totalEmissiveRadiance = `.concat(Be.emissive,`;
    `)}),st(Wt,"".concat(Be.roughness),{"#include <roughnessmap_fragment>":`
    #include <roughnessmap_fragment>
    roughnessFactor = `.concat(Be.roughness,`;
    `)}),st(Wt,"".concat(Be.metalness),{"#include <metalnessmap_fragment>":`
    #include <metalnessmap_fragment>
    metalnessFactor = `.concat(Be.metalness,`;
    `)}),st(Wt,"".concat(Be.ao),{"#include <aomap_fragment>":`
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - `.concat(Be.ao,`;
    `)}),st(Wt,"".concat(Be.bump),{"#include <normal_fragment_maps>":`
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = `.concat(Be.bump," - (dot(").concat(Be.bump,`, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `)}),st(Wt,"".concat(Be.depthAlpha),{"gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );":`
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * `.concat(Be.depthAlpha,` );
    `),"gl_FragColor = packDepthToRGBA( fragCoordZ );":`
      gl_FragColor = packDepthToRGBA( fragCoordZ );
      gl_FragColor.a *= `.concat(Be.depthAlpha,`;
    `)}),Wt),_T=(br={},st(br,"".concat(Be.position),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = projectionMatrix * modelViewMatrix * vec4( `.concat(Be.position,`, 1.0 );
  `)}),st(br,"".concat(Be.positionRaw),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = `.concat(Be.position,`;
  `)}),st(br,"".concat(Be.diffuseColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(Be.diffuseColor,`;
  `)}),st(br,"".concat(Be.fragColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(Be.fragColor,`;
  `)}),br),vT=`

#ifdef IS_VERTEX
    // csm_Position & csm_PositionRaw
    #ifdef IS_UNKNOWN
        vec3 csm_Position = vec3(0.0);
        vec4 csm_PositionRaw = vec4(0.0);
        vec3 csm_Normal = vec3(0.0);
    #else
        vec3 csm_Position = position;
        vec4 csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        vec3 csm_Normal = normal;
    #endif

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        float csm_PointSize = size;
    #endif
#else
    // csm_DiffuseColor & csm_FragColor
    #if defined IS_UNKNOWN || defined IS_SHADERMATERIAL || defined IS_MESHDEPTHMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_SHADOWMATERIAL
        vec4 csm_DiffuseColor = vec4(1.0, 0.0, 1.0, 1.0);
        vec4 csm_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    #else
        #ifdef USE_MAP
            vec4 _csm_sampledDiffuseColor = texture2D(map, vMapUv);

            #ifdef DECODE_VIDEO_TEXTURE
            // inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)
            _csm_sampledDiffuseColor = vec4(mix(pow(_csm_sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), _csm_sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(_csm_sampledDiffuseColor.rgb, vec3(0.04045)))), _csm_sampledDiffuseColor.w);
            #endif

            vec4 csm_DiffuseColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
            vec4 csm_FragColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
        #else
            vec4 csm_DiffuseColor = vec4(diffuse, opacity);
            vec4 csm_FragColor = vec4(diffuse, opacity);
        #endif
    #endif

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        vec3 csm_Emissive = emissive;
        float csm_Roughness = roughness;
        float csm_Metalness = metalness;
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        float csm_AO = 0.0;
    #endif

    // csm_Bump
    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL 
        vec3 csm_Bump = vec3(0.0);
    #endif

    float csm_DepthAlpha = 1.0;
#endif
`,bT=`
    varying mat4 csm_internal_vModelViewMatrix;
`,xT=`
    csm_internal_vModelViewMatrix = modelViewMatrix;
`,yT=`
    varying mat4 csm_internal_vModelViewMatrix;
`,wT=`
    
`,jt,MT=(jt={},st(jt,"".concat(Be.position),"*"),st(jt,"".concat(Be.positionRaw),"*"),st(jt,"".concat(Be.normal),"*"),st(jt,"".concat(Be.pointSize),["PointsMaterial"]),st(jt,"".concat(Be.diffuseColor),"*"),st(jt,"".concat(Be.fragColor),"*"),st(jt,"".concat(Be.emissive),["MeshStandardMaterial","MeshPhysicalMaterial"]),st(jt,"".concat(Be.roughness),["MeshStandardMaterial","MeshPhysicalMaterial"]),st(jt,"".concat(Be.metalness),["MeshStandardMaterial","MeshPhysicalMaterial"]),st(jt,"".concat(Be.ao),["MeshStandardMaterial","MeshPhysicalMaterial","MeshBasicMaterial","MeshLambertMaterial","MeshPhongMaterial","MeshToonMaterial"]),st(jt,"".concat(Be.bump),["MeshLambertMaterial","MeshMatcapMaterial","MeshNormalMaterial","MeshPhongMaterial","MeshPhysicalMaterial","MeshStandardMaterial","MeshToonMaterial","ShadowMaterial"]),st(jt,"".concat(Be.depthAlpha),"*"),jt),ET=["baseMaterial","fragmentShader","vertexShader","uniforms","patchMap","cacheKey","silent"],ST=function(e,t,n){return e.split(t).join(n)},TT=function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},AT=function(e,t){return new RegExp("\\b".concat(TT(t),"\\b")).test(e)};function CT(i){try{new i}catch(e){if(e.message.indexOf("is not a constructor")>=0)return!1}return!0}function PT(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;Object.assign(i,e);var n=Object.getPrototypeOf(e);Object.entries(Object.getOwnPropertyDescriptors(n)).filter(function(r){var s=typeof r[1].get=="function",o=typeof r[1].set=="function",a=typeof r[1].value=="function",l=r[0]==="constructor";return(s||o||a)&&!l}).forEach(function(r){if(typeof i[r[0]]=="function"){t||console.warn("Function ".concat(r[0]," already exists on CSM, renaming to base_").concat(r[0]));var s="base_".concat(r[0]);i[s]=r[1].value.bind(i);return}Object.defineProperty(i,r[0],r[1])})}function RT(i){var e=i.toString().trim(),t=e.substring(e.indexOf("{")+1,e.lastIndexOf("}"));return t.trim().length===0}function Zh(i){return i.replace(/\s/g,"")}function LT(i,e,t){var n=i.lastIndexOf(e);return n===-1?i:i.substring(0,n)+t+i.substring(n+e.length)}var Jh=function(i){dT(t,i);var e=mT(t);function t(n){var r,s=n.baseMaterial,o=n.fragmentShader,a=n.vertexShader,l=n.uniforms,c=n.patchMap,u=n.cacheKey,h=n.silent,d=lT(n,ET);cT(this,t);var g;if(CT(s)?g=new s(d):(g=s,Object.assign(g,d)),g.type==="RawShaderMaterial")throw new Error("CustomShaderMaterial does not support RawShaderMaterial");r=e.call(this),PT(of(r),g,h),r.__csm={patchMap:c||{},fragmentShader:o||"",vertexShader:a||"",cacheKey:u,baseMaterial:s,instanceID:ec.generateUUID(),type:g.type,isAlreadyExtended:!RT(g.onBeforeCompile),cacheHash:"",silent:h},r.uniforms=vr(vr({},r.uniforms||{}),l||{});{var v=r.__csm,x=v.fragmentShader,p=v.vertexShader,f=r.uniforms;r.__csm.cacheHash=r.getCacheHash(),r.generateMaterial(x,p,f)}return r}return hT(t,[{key:"update",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.uniforms=r.uniforms||this.uniforms,Object.assign(this.__csm,r);var s=this.__csm,o=s.fragmentShader,a=s.vertexShader,l=this.uniforms,c=this.getCacheHash();this.__csm.cacheHash=c,this.generateMaterial(o,a,l)}},{key:"clone",value:function(){var r={baseMaterial:this.__csm.baseMaterial,fragmentShader:this.__csm.fragmentShader,vertexShader:this.__csm.vertexShader,uniforms:this.uniforms,silent:this.__csm.silent,patchMap:this.__csm.patchMap,cacheKey:this.__csm.cacheKey},s=new this.constructor(r);return Object.assign(this,s),s}},{key:"getCacheHash",value:function(){var r=this.__csm,s=r.fragmentShader,o=r.vertexShader,a=this.uniforms,l=Object.values(a).reduce(function(u,h){var d=h.value;return u+JSON.stringify(d)},""),c=Zh(s)+Zh(o)+l;return c.trim().length>0?US(c):this.customProgramCacheKey()}},{key:"generateMaterial",value:function(r,s,o){var a=this,l=this.parseShader(r),c=this.parseShader(s);this.uniforms=o||{},this.customProgramCacheKey=function(){return a.__csm.cacheHash};var u=function(g){try{if(l){var v=a.patchShader(l,g.fragmentShader,!0);g.fragmentShader=a.getMaterialDefine()+v}if(c){var x=a.patchShader(c,g.vertexShader);g.vertexShader=`#define IS_VERTEX;
`+x,g.vertexShader=a.getMaterialDefine()+g.vertexShader}g.uniforms=vr(vr({},g.uniforms),a.uniforms),a.uniforms=g.uniforms}catch(p){console.error(p)}};if(this.__csm.isAlreadyExtended){var h=this.onBeforeCompile;this.onBeforeCompile=function(d,g){h(d,g),u(d)}}else this.onBeforeCompile=u;this.needsUpdate=!0}},{key:"patchShader",value:function(r,s,o){var a=this,l=s,c=vr(vr({},this.getPatchMapForMaterial()),this.__csm.patchMap);Object.keys(c).forEach(function(d){Object.keys(c[d]).forEach(function(g){var v=MT[d],x=a.__csm.type;if(d==="*"||AT(r.main,d))if(!v||Array.isArray(v)&&v.includes(x)||v==="*")l=ST(l,g,c[d][g]);else throw new Error("CSM: ".concat(d," is not available in ").concat(x,". Shader cannot compile."))})}),l=l.replace("void main() {",`
        #ifndef CSM_IS_HEAD_DEFAULTS_DEFINED
          `.concat(o?yT:bT,`
          #define CSM_IS_HEAD_DEFAULTS_DEFINED 1
        #endif

        `).concat(r.header,`
        
        void main() {
          #ifndef CSM_IS_DEFAULTS_DEFINED
            `).concat(vT,`
            #define CSM_IS_DEFAULTS_DEFINED 1
          #endif
          
          #ifndef CSM_IS_MAIN_DEFAULTS_DEFINED
            `).concat(o?wT:xT,`
            #define CSM_IS_MAIN_DEFAULTS_DEFINED 1
          #endif

          // CSM_START
      `));var u=this.__csm.isAlreadyExtended,h=l.includes("// CSM_END");return u&&h?l=LT(l,"// CSM_END",`
          // CSM_END
          `.concat(r.main,`
          // CSM_END
        `)):l=l.replace("// CSM_START",`
        // CSM_START
        `.concat(r.main,`
        // CSM_END
          `)),l=r.defines+l,l}},{key:"parseShader",value:function(r){if(r){var s=r.replace(/\/\*\*(.*?)\*\/|\/\/(.*?)\n/gm,""),o=eT(s),a=sT(o),l=a.map(function(h){return h.name}).indexOf("main"),c=Yh(o.slice(0,l>=0?a[l].outer[0]:void 0)),u=l>=0?this.getShaderFromIndex(o,a[l].body):"";return{defines:"",header:c,main:u}}}},{key:"getMaterialDefine",value:function(){var r=this.__csm.type;return r?"#define IS_".concat(r.toUpperCase(),`;
`):`#define IS_UNKNOWN;
`}},{key:"getPatchMapForMaterial",value:function(){switch(this.__csm.type){case"ShaderMaterial":return _T;default:return gT}}},{key:"getShaderFromIndex",value:function(r,s){return Yh(r.slice(s[0],s[1]))}}]),t}(yn),Qh=`uniform float uTime;
uniform float uPositionFrequency;
uniform float uTimeFrequncy;
uniform float uStrength;
uniform float uWarpPositionFrequency;
uniform float uWarpTimeFrequncy;
uniform float uWarpStrength;
uniform float uAudioFrequncy;
uniform float uAudioMultiplier;

attribute vec4 tangent;

varying float vWobble;

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
float permute(float x){return floor(mod(((x*34.0)+1.0)*x, 289.0));}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
float taylorInvSqrt(float r){return 1.79284291400159 - 0.85373472095314 * r;}

vec4 grad4(float j, vec4 ip){
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
  vec4 p,s;

  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
  s = vec4(lessThan(p, vec4(0.0)));
  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www; 

  return p;
}

float simplexNoise4d(vec4 v){
  const vec2  C = vec2( 0.138196601125010504,  
                        0.309016994374947451); 

  vec4 i  = floor(v + dot(v, C.yyyy) );
  vec4 x0 = v -   i + dot(i, C.xxxx);

  vec4 i0;

  vec3 isX = step( x0.yzw, x0.xxx );
  vec3 isYZ = step( x0.zww, x0.yyz );

  i0.x = isX.x + isX.y + isX.z;
  i0.yzw = 1.0 - isX;

  i0.y += isYZ.x + isYZ.y;
  i0.zw += 1.0 - isYZ.xy;

  i0.z += isYZ.z;
  i0.w += 1.0 - isYZ.z;

  
  vec4 i3 = clamp( i0, 0.0, 1.0 );
  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

  
  vec4 x1 = x0 - i1 + 1.0 * C.xxxx;
  vec4 x2 = x0 - i2 + 2.0 * C.xxxx;
  vec4 x3 = x0 - i3 + 3.0 * C.xxxx;
  vec4 x4 = x0 - 1.0 + 4.0 * C.xxxx;

  i = mod(i, 289.0); 
  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
  vec4 j1 = permute( permute( permute( permute (
             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));

  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

  vec4 p0 = grad4(j0,   ip);
  vec4 p1 = grad4(j1.x, ip);
  vec4 p2 = grad4(j1.y, ip);
  vec4 p3 = grad4(j1.z, ip);
  vec4 p4 = grad4(j1.w, ip);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  p4 *= taylorInvSqrt(dot(p4,p4));

  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
  m0 = m0 * m0;
  m1 = m1 * m1;
  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;

}

float getWobble(vec3 position)
{
    float audioStrength = pow((uAudioFrequncy) / 100.0, 5.0);

    vec3 warpedPosition = position;
    warpedPosition += simplexNoise4d(vec4(
        position * uWarpPositionFrequency,
        uTime * uWarpTimeFrequncy
    )) * uWarpStrength;

    return simplexNoise4d(vec4(
        warpedPosition * uPositionFrequency, 
        uTime * uTimeFrequncy                
    )) * uStrength * (1.0 + audioStrength * uAudioMultiplier);
}

void main()
{
    
    vec3 biTangent = cross(normal, tangent.xyz);

    
    float shift  = 0.01;
    vec3 positionA = csm_Position + tangent.xyz * shift;
    vec3 positionB = csm_Position + biTangent * shift;

    
    float wobble = getWobble(csm_Position);
    csm_Position += wobble * normal;
    positionA += getWobble(positionA) * normal;
    positionB += getWobble(positionB) * normal;

    
    vec3 toA = normalize(positionA - csm_Position);
    vec3 toB = normalize(positionB - csm_Position);
    csm_Normal = cross(toA, toB);

    
    vWobble = wobble / uStrength;
}`,IT=`uniform vec3 uColor0;
uniform vec3 uColor1;
uniform float uMixStrength;

varying float vWobble;

void main()
{
    float colorMix = smoothstep(-1.0, 1.0, vWobble * uMixStrength);

    
    vec3 mixedColor = mix(uColor0, uColor1, colorMix);

    
    csm_DiffuseColor.rgb = mixedColor;

    
    
    

    
    csm_Roughness = 1.0 - colorMix;
}`;class DT{constructor(){this.experience=new Ki,this.time=this.experience.time,this.debug=this.experience.debug,this.scene=this.experience.scene,this.resources=this.experience.resources,this.camera=this.experience.camera,this.debug.active&&(this.tweaks=this.debug.ui.addFolder({title:"Wobble Tweaks"})),this.debugObject={},this.setAudio(),this.loadModels(),this.setGeometry(),this.setMaterial(),this.setMesh()}setAudio(){this.debugObject.volume=.5,this.listner=new ax,this.camera.instance.add(this.listner),this.sound=new lx(this.listner),this.audioLoader=new sx,this.audioLoader.load("https://z2586300277.github.io/3d-file-server/files/audio/YMCA.mp3",e=>{this.sound.setBuffer(e),this.sound.setLoop(!1),this.sound.setVolume(this.debugObject.volume);const t=document.createElement("button");t.textContent="播放",t.style.position="absolute",t.style.top="80px",t.style.left="50vw",document.body.appendChild(t),t.onclick=()=>{this.sound.play()}}),this.analyzer=new cx(this.sound,128)}loadModels(){this.model=this.resources.items.suzanneModel}setGeometry(){this.geometry=new cc(2.5,80),this.geometry=YE(this.geometry),this.geometry.computeTangents()}setMaterial(){if(this.debugObject.color0="#009d83",this.debugObject.color1="#9d2200",this.uniforms={uTime:new Xt(0),uPositionFrequency:new Xt(.5),uTimeFrequncy:new Xt(.4),uStrength:new Xt(.3),uWarpPositionFrequency:new Xt(.38),uWarpTimeFrequncy:new Xt(.12),uWarpStrength:new Xt(1.7),uColor0:new Xt(new Ne(this.debugObject.color0)),uColor1:new Xt(new Ne(this.debugObject.color1)),uMixStrength:new Xt(1),uAudioFrequncy:new Xt(0),uAudioMultiplier:new Xt(.55)},this.material=new Jh({baseMaterial:Mn,vertexShader:Qh,fragmentShader:IT,uniforms:this.uniforms,silent:!0,metalness:1,roughness:.5,transmission:0,ior:1.5,thickness:1.5,transparent:!0,wireframe:!1}),this.depthMaterial=new Jh({baseMaterial:Gd,vertexShader:Qh,uniforms:this.uniforms,silent:!0,depthPacking:Ed}),this.debug.active){const e=this.tweaks.addFolder({title:"Base Tweaks",expanded:!1});e.addBinding(this.uniforms.uPositionFrequency,"value",{min:0,max:2,step:.001,label:"uPosition Frequency"}),e.addBinding(this.uniforms.uTimeFrequncy,"value",{min:0,max:2,step:.001,label:"uTime Frequncy"}),e.addBinding(this.uniforms.uStrength,"value",{min:0,max:2,step:.001,label:"uStrength"});const t=this.tweaks.addFolder({title:"Warp Tweaks",expanded:!1});t.addBinding(this.uniforms.uWarpPositionFrequency,"value",{min:0,max:2,step:.001,label:"uWarp Position Frequency"}),t.addBinding(this.uniforms.uWarpTimeFrequncy,"value",{min:0,max:2,step:.001,label:"uWarp Time Frequncy"}),t.addBinding(this.uniforms.uWarpStrength,"value",{min:0,max:5,step:.001,label:"uWarp Strength"});const n=this.tweaks.addFolder({title:"Material Tweaks"});n.addBinding(this.debugObject,"color0").on("change",()=>{this.uniforms.uColor0.value.set(this.debugObject.color0)}),n.addBinding(this.debugObject,"color1").on("change",()=>{this.uniforms.uColor1.value.set(this.debugObject.color1)}),n.addBinding(this.uniforms.uMixStrength,"value",{min:0,max:10,step:.001,label:"uMix Strength"}),n.addBinding(this.material,"metalness",{min:0,max:1,step:.001}),n.addBinding(this.material,"roughness",{min:0,max:1,step:.001}),n.addBinding(this.material,"transmission",{min:0,max:1,step:.001}),n.addBinding(this.material,"ior",{min:0,max:10,step:.001}),n.addBinding(this.material,"thickness",{min:0,max:10,step:.001});const r=this.tweaks.addFolder({title:"Audio Tweaks"});r.addButton({title:"Play"}).on("click",()=>{this.sound.isPlaying||(this.sound.context.state==="suspended"?this.sound.context.resume().then(()=>{this.sound.play()}):this.sound.play())}),r.addButton({title:"Pause"}).on("click",()=>{this.sound.isPlaying&&(this.sound.context.state==="suspended"?this.sound.context.resume().then(()=>{this.sound.pause()}):this.sound.pause())}),r.addButton({title:"Stop"}).on("click",()=>{this.sound.context.state==="suspended"?this.sound.context.resume().then(()=>{this.sound.stop()}):this.sound.stop()}),r.addBinding(this.uniforms.uAudioMultiplier,"value",{min:0,max:2,step:.001,label:"uAudio Multiplier"}),r.addBinding(this.debugObject,"volume",{min:0,max:1,step:.001}).on("change",()=>{this.sound.setVolume(this.debugObject.volume)})}}setMesh(){this.wobble=new zt(this.geometry,this.material),this.wobble.customDepthMaterial=this.depthMaterial,this.wobble.receiveShadow=!0,this.wobble.castShadow=!0,this.scene.add(this.wobble)}update(){this.uniforms.uTime.value=this.time.elapsed*.001,this.uniforms.uAudioFrequncy.value=this.analyzer.getAverageFrequency(),this.wobble.rotation.y=this.time.elapsed*.001*.2,this.wobble.rotation.z=this.time.elapsed*.001*.1}}class NT{constructor(){this.experience=new Ki,this.resources=this.experience.resources,this.resources.on("ready",()=>{this.environment=new IS,this.wobble=new DT,this.lights=new DS})}update(){this.wobble&&this.wobble.update()}}const ed={type:"change"},Ya={type:"start"},td={type:"end"},bo=new Es,nd=new _i,UT=Math.cos(70*ec.DEG2RAD);class OT extends ji{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$i.ROTATE,MIDDLE:$i.DOLLY,RIGHT:$i.PAN},this.touches={ONE:Zi.ROTATE,TWO:Zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(S){S.addEventListener("keydown",_e),this._domElementKeyEvents=S},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_e),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ed),n.update(),s=r.NONE},this.update=function(){const S=new B,X=new wn().setFromUnitVectors(e.up,new B(0,1,0)),K=X.clone().invert(),Z=new B,ae=new wn,Te=new B,Fe=2*Math.PI;return function(wt=null){const Ye=n.object.position;S.copy(Ye).sub(n.target),S.applyQuaternion(X),a.setFromVector3(S),n.autoRotate&&s===r.NONE&&I(m(wt)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Mt=n.minAzimuthAngle,_t=n.maxAzimuthAngle;isFinite(Mt)&&isFinite(_t)&&(Mt<-Math.PI?Mt+=Fe:Mt>Math.PI&&(Mt-=Fe),_t<-Math.PI?_t+=Fe:_t>Math.PI&&(_t-=Fe),Mt<=_t?a.theta=Math.max(Mt,Math.min(_t,a.theta)):a.theta=a.theta>(Mt+_t)/2?Math.max(Mt,a.theta):Math.min(_t,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let ri=!1;if(n.zoomToCursor&&E||n.object.isOrthographicCamera)a.radius=te(a.radius);else{const Lt=a.radius;a.radius=te(a.radius*c),ri=Lt!=a.radius}if(S.setFromSpherical(a),S.applyQuaternion(K),Ye.copy(n.target).add(S),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&E){let Lt=null;if(n.object.isPerspectiveCamera){const Un=S.length();Lt=te(Un*c);const Ei=Un-Lt;n.object.position.addScaledVector(M,Ei),n.object.updateMatrixWorld(),ri=!!Ei}else if(n.object.isOrthographicCamera){const Un=new B(N.x,N.y,0);Un.unproject(n.object);const Ei=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ri=Ei!==n.object.zoom;const qr=new B(N.x,N.y,0);qr.unproject(n.object),n.object.position.sub(qr).add(Un),n.object.updateMatrixWorld(),Lt=S.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Lt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Lt).add(n.object.position):(bo.origin.copy(n.object.position),bo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(bo.direction))<UT?e.lookAt(n.target):(nd.setFromNormalAndCoplanarPoint(n.object.up,n.target),bo.intersectPlane(nd,n.target))))}else if(n.object.isOrthographicCamera){const Lt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),Lt!==n.object.zoom&&(n.object.updateProjectionMatrix(),ri=!0)}return c=1,E=!1,ri||Z.distanceToSquared(n.object.position)>o||8*(1-ae.dot(n.object.quaternion))>o||Te.distanceToSquared(n.target)>o?(n.dispatchEvent(ed),Z.copy(n.object.position),ae.copy(n.object.quaternion),Te.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ve),n.domElement.removeEventListener("pointerdown",Ee),n.domElement.removeEventListener("pointercancel",C),n.domElement.removeEventListener("wheel",oe),n.domElement.removeEventListener("pointermove",U),n.domElement.removeEventListener("pointerup",C),n.domElement.getRootNode().removeEventListener("keydown",Ce,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",_e),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new hh,l=new hh;let c=1;const u=new B,h=new Pe,d=new Pe,g=new Pe,v=new Pe,x=new Pe,p=new Pe,f=new Pe,w=new Pe,y=new Pe,M=new B,N=new Pe;let E=!1;const T=[],b={};let _=!1;function m(S){return S!==null?2*Math.PI/60*n.autoRotateSpeed*S:2*Math.PI/60/60*n.autoRotateSpeed}function A(S){const X=Math.abs(S*.01);return Math.pow(.95,n.zoomSpeed*X)}function I(S){l.theta-=S}function F(S){l.phi-=S}const V=function(){const S=new B;return function(K,Z){S.setFromMatrixColumn(Z,0),S.multiplyScalar(-K),u.add(S)}}(),H=function(){const S=new B;return function(K,Z){n.screenSpacePanning===!0?S.setFromMatrixColumn(Z,1):(S.setFromMatrixColumn(Z,0),S.crossVectors(n.object.up,S)),S.multiplyScalar(K),u.add(S)}}(),O=function(){const S=new B;return function(K,Z){const ae=n.domElement;if(n.object.isPerspectiveCamera){const Te=n.object.position;S.copy(Te).sub(n.target);let Fe=S.length();Fe*=Math.tan(n.object.fov/2*Math.PI/180),V(2*K*Fe/ae.clientHeight,n.object.matrix),H(2*Z*Fe/ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(V(K*(n.object.right-n.object.left)/n.object.zoom/ae.clientWidth,n.object.matrix),H(Z*(n.object.top-n.object.bottom)/n.object.zoom/ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function j(S){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(S){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function se(S,X){if(!n.zoomToCursor)return;E=!0;const K=n.domElement.getBoundingClientRect(),Z=S-K.left,ae=X-K.top,Te=K.width,Fe=K.height;N.x=Z/Te*2-1,N.y=-(ae/Fe)*2+1,M.set(N.x,N.y,1).unproject(n.object).sub(n.object.position).normalize()}function te(S){return Math.max(n.minDistance,Math.min(n.maxDistance,S))}function fe(S){h.set(S.clientX,S.clientY)}function Le(S){se(S.clientX,S.clientX),f.set(S.clientX,S.clientY)}function Ue(S){v.set(S.clientX,S.clientY)}function J(S){d.set(S.clientX,S.clientY),g.subVectors(d,h).multiplyScalar(n.rotateSpeed);const X=n.domElement;I(2*Math.PI*g.x/X.clientHeight),F(2*Math.PI*g.y/X.clientHeight),h.copy(d),n.update()}function le(S){w.set(S.clientX,S.clientY),y.subVectors(w,f),y.y>0?j(A(y.y)):y.y<0&&q(A(y.y)),f.copy(w),n.update()}function be(S){x.set(S.clientX,S.clientY),p.subVectors(x,v).multiplyScalar(n.panSpeed),O(p.x,p.y),v.copy(x),n.update()}function me(S){se(S.clientX,S.clientY),S.deltaY<0?q(A(S.deltaY)):S.deltaY>0&&j(A(S.deltaY)),n.update()}function Q(S){let X=!1;switch(S.code){case n.keys.UP:S.ctrlKey||S.metaKey||S.shiftKey?F(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),X=!0;break;case n.keys.BOTTOM:S.ctrlKey||S.metaKey||S.shiftKey?F(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),X=!0;break;case n.keys.LEFT:S.ctrlKey||S.metaKey||S.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),X=!0;break;case n.keys.RIGHT:S.ctrlKey||S.metaKey||S.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),X=!0;break}X&&(S.preventDefault(),n.update())}function P(S){if(T.length===1)h.set(S.pageX,S.pageY);else{const X=Ve(S),K=.5*(S.pageX+X.x),Z=.5*(S.pageY+X.y);h.set(K,Z)}}function D(S){if(T.length===1)v.set(S.pageX,S.pageY);else{const X=Ve(S),K=.5*(S.pageX+X.x),Z=.5*(S.pageY+X.y);v.set(K,Z)}}function k(S){const X=Ve(S),K=S.pageX-X.x,Z=S.pageY-X.y,ae=Math.sqrt(K*K+Z*Z);f.set(0,ae)}function L(S){n.enableZoom&&k(S),n.enablePan&&D(S)}function ee(S){n.enableZoom&&k(S),n.enableRotate&&P(S)}function ne(S){if(T.length==1)d.set(S.pageX,S.pageY);else{const K=Ve(S),Z=.5*(S.pageX+K.x),ae=.5*(S.pageY+K.y);d.set(Z,ae)}g.subVectors(d,h).multiplyScalar(n.rotateSpeed);const X=n.domElement;I(2*Math.PI*g.x/X.clientHeight),F(2*Math.PI*g.y/X.clientHeight),h.copy(d)}function xe(S){if(T.length===1)x.set(S.pageX,S.pageY);else{const X=Ve(S),K=.5*(S.pageX+X.x),Z=.5*(S.pageY+X.y);x.set(K,Z)}p.subVectors(x,v).multiplyScalar(n.panSpeed),O(p.x,p.y),v.copy(x)}function he(S){const X=Ve(S),K=S.pageX-X.x,Z=S.pageY-X.y,ae=Math.sqrt(K*K+Z*Z);w.set(0,ae),y.set(0,Math.pow(w.y/f.y,n.zoomSpeed)),j(y.y),f.copy(w);const Te=(S.pageX+X.x)*.5,Fe=(S.pageY+X.y)*.5;se(Te,Fe)}function He(S){n.enableZoom&&he(S),n.enablePan&&xe(S)}function Se(S){n.enableZoom&&he(S),n.enableRotate&&ne(S)}function Ee(S){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(S.pointerId),n.domElement.addEventListener("pointermove",U),n.domElement.addEventListener("pointerup",C)),!ye(S)&&(Ke(S),S.pointerType==="touch"?ze(S):W(S)))}function U(S){n.enabled!==!1&&(S.pointerType==="touch"?ce(S):ie(S))}function C(S){switch(Ie(S),T.length){case 0:n.domElement.releasePointerCapture(S.pointerId),n.domElement.removeEventListener("pointermove",U),n.domElement.removeEventListener("pointerup",C),n.dispatchEvent(td),s=r.NONE;break;case 1:const X=T[0],K=b[X];ze({pointerId:X,pageX:K.x,pageY:K.y});break}}function W(S){let X;switch(S.button){case 0:X=n.mouseButtons.LEFT;break;case 1:X=n.mouseButtons.MIDDLE;break;case 2:X=n.mouseButtons.RIGHT;break;default:X=-1}switch(X){case $i.DOLLY:if(n.enableZoom===!1)return;Le(S),s=r.DOLLY;break;case $i.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(n.enablePan===!1)return;Ue(S),s=r.PAN}else{if(n.enableRotate===!1)return;fe(S),s=r.ROTATE}break;case $i.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(n.enableRotate===!1)return;fe(S),s=r.ROTATE}else{if(n.enablePan===!1)return;Ue(S),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ya)}function ie(S){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;J(S);break;case r.DOLLY:if(n.enableZoom===!1)return;le(S);break;case r.PAN:if(n.enablePan===!1)return;be(S);break}}function oe(S){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(S.preventDefault(),n.dispatchEvent(Ya),me(re(S)),n.dispatchEvent(td))}function re(S){const X=S.deltaMode,K={clientX:S.clientX,clientY:S.clientY,deltaY:S.deltaY};switch(X){case 1:K.deltaY*=16;break;case 2:K.deltaY*=100;break}return S.ctrlKey&&!_&&(K.deltaY*=10),K}function Ce(S){S.key==="Control"&&(_=!0,n.domElement.getRootNode().addEventListener("keyup",de,{passive:!0,capture:!0}))}function de(S){S.key==="Control"&&(_=!1,n.domElement.getRootNode().removeEventListener("keyup",de,{passive:!0,capture:!0}))}function _e(S){n.enabled===!1||n.enablePan===!1||Q(S)}function ze(S){switch(Oe(S),T.length){case 1:switch(n.touches.ONE){case Zi.ROTATE:if(n.enableRotate===!1)return;P(S),s=r.TOUCH_ROTATE;break;case Zi.PAN:if(n.enablePan===!1)return;D(S),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Zi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;L(S),s=r.TOUCH_DOLLY_PAN;break;case Zi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ee(S),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Ya)}function ce(S){switch(Oe(S),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ne(S),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;xe(S),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;He(S),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Se(S),n.update();break;default:s=r.NONE}}function ve(S){n.enabled!==!1&&S.preventDefault()}function Ke(S){T.push(S.pointerId)}function Ie(S){delete b[S.pointerId];for(let X=0;X<T.length;X++)if(T[X]==S.pointerId){T.splice(X,1);return}}function ye(S){for(let X=0;X<T.length;X++)if(T[X]==S.pointerId)return!0;return!1}function Oe(S){let X=b[S.pointerId];X===void 0&&(X=new Pe,b[S.pointerId]=X),X.set(S.pageX,S.pageY)}function Ve(S){const X=S.pointerId===T[0]?T[1]:T[0];return b[X]}n.domElement.addEventListener("contextmenu",ve),n.domElement.addEventListener("pointerdown",Ee),n.domElement.addEventListener("pointercancel",C),n.domElement.addEventListener("wheel",oe,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Ce,{passive:!0,capture:!0}),this.update()}}class FT{constructor(){this.experience=new Ki,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.setInstance(),this.setOrbitControls()}setInstance(){this.instance=new Bt(35,this.sizes.width/this.sizes.height,.1,100),this.instance.position.set(13,-3,-5),this.scene.add(this.instance)}setOrbitControls(){this.controls=new OT(this.instance,this.canvas),this.controls.maxDistance=20,this.controls.minDistance=10,this.controls.enablePan=!1,this.controls.enableDamping=!0}resize(){this.instance.aspect=this.sizes.width/this.sizes.height,this.instance.updateProjectionMatrix()}update(){this.controls.update()}}const af={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Xr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const kT=new qo(-1,1,1,-1,0,1);class BT extends rn{constructor(){super(),this.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $t([0,2,0,0,2,0],2))}}const VT=new BT;class ea{constructor(e){this._mesh=new zt(VT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,kT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class zT extends Xr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof nn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ts.clone(e.uniforms),this.material=new nn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ea(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class id extends Xr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class HT extends Xr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class GT{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Pe);this._width=n.width,this._height=n.height,t=new Jn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new zT(af),this.copyPass.material.blending=Kn,this.clock=new Zd}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}id!==void 0&&(o instanceof id?n=!0:o instanceof HT&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class WT extends Xr{constructor(e,t,n,r){super(),this.scene=e,this.camera=t,this.sampleLevel=4,this.unbiased=!0,this.clearColor=n!==void 0?n:0,this.clearAlpha=r!==void 0?r:0,this._oldClearColor=new Ne;const s=af;this.copyUniforms=Ts.clone(s.uniforms),this.copyMaterial=new nn({uniforms:this.copyUniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,premultipliedAlpha:!0,blending:Za}),this.fsQuad=new ea(this.copyMaterial)}dispose(){this.sampleRenderTarget&&(this.sampleRenderTarget.dispose(),this.sampleRenderTarget=null),this.copyMaterial.dispose(),this.fsQuad.dispose()}setSize(e,t){this.sampleRenderTarget&&this.sampleRenderTarget.setSize(e,t)}render(e,t,n){this.sampleRenderTarget||(this.sampleRenderTarget=new Jn(n.width,n.height,{type:bn}),this.sampleRenderTarget.texture.name="SSAARenderPass.sample");const r=jT[Math.max(0,Math.min(this.sampleLevel,5))],s=e.autoClear;e.autoClear=!1,e.getClearColor(this._oldClearColor);const o=e.getClearAlpha(),a=1/r.length,l=1/32;this.copyUniforms.tDiffuse.value=this.sampleRenderTarget.texture;const c={fullWidth:n.width,fullHeight:n.height,offsetX:0,offsetY:0,width:n.width,height:n.height},u=Object.assign({},this.camera.view);u.enabled&&Object.assign(c,u);for(let h=0;h<r.length;h++){const d=r[h];this.camera.setViewOffset&&this.camera.setViewOffset(c.fullWidth,c.fullHeight,c.offsetX+d[0]*.0625,c.offsetY+d[1]*.0625,c.width,c.height);let g=a;if(this.unbiased){const v=-.5+(h+.5)/r.length;g+=l*v}this.copyUniforms.opacity.value=g,e.setClearColor(this.clearColor,this.clearAlpha),e.setRenderTarget(this.sampleRenderTarget),e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(this.renderToScreen?null:t),h===0&&(e.setClearColor(0,0),e.clear()),this.fsQuad.render(e)}this.camera.setViewOffset&&u.enabled?this.camera.setViewOffset(u.fullWidth,u.fullHeight,u.offsetX,u.offsetY,u.width,u.height):this.camera.clearViewOffset&&this.camera.clearViewOffset(),e.autoClear=s,e.setClearColor(this._oldClearColor,o)}}const jT=[[[0,0]],[[4,4],[-4,-4]],[[-2,-6],[6,-2],[-6,2],[2,6]],[[1,-3],[-1,3],[5,1],[-3,-5],[-5,5],[-7,-1],[3,7],[7,-7]],[[1,1],[-1,-3],[-3,2],[4,-1],[-5,-2],[2,5],[5,3],[3,-5],[-2,6],[0,-7],[-4,-6],[-6,4],[-8,0],[7,-4],[6,7],[-7,-8]],[[-4,-7],[-7,-5],[-3,-5],[-5,-4],[-1,-4],[-2,-2],[-6,-1],[-4,0],[-7,1],[-1,2],[-6,3],[-3,3],[-7,6],[-3,6],[-5,7],[-1,7],[5,-7],[1,-6],[6,-5],[4,-4],[2,-3],[7,-2],[1,-1],[4,-1],[2,1],[6,2],[0,4],[4,4],[2,5],[7,5],[5,6],[3,7]]],XT={name:"FilmShader",uniforms:{tDiffuse:{value:null},time:{value:0},intensity:{value:.5},grayscale:{value:!1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		uniform float intensity;
		uniform bool grayscale;
		uniform float time;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 base = texture2D( tDiffuse, vUv );

			float noise = rand( fract( vUv + time ) );

			vec3 color = base.rgb + base.rgb * clamp( 0.1 + noise, 0.0, 1.0 );

			color = mix( base.rgb, color, intensity );

			if ( grayscale ) {

				color = vec3( luminance( color ) ); // assuming linear-srgb

			}

			gl_FragColor = vec4( color, base.a );

		}`};class qT extends Xr{constructor(e=.5,t=!1){super();const n=XT;this.uniforms=Ts.clone(n.uniforms),this.material=new nn({name:n.name,uniforms:this.uniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader}),this.uniforms.intensity.value=e,this.uniforms.grayscale.value=t,this.fsQuad=new ea(this.material)}render(e,t,n,r){this.uniforms.tDiffuse.value=n.texture,this.uniforms.time.value+=r,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const KT={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class YT extends Xr{constructor(){super();const e=KT;this.uniforms=Ts.clone(e.uniforms),this.material=new Fb({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ea(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===at&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ad?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ld?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===cd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Wl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ud?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===hd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class $T{constructor(){this.experience=new Ki,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.camera=this.experience.camera,this.canvas=this.experience.canvas,this.debug=this.experience.debug,this.debug.active&&(this.rendererTweaks=this.debug.ui.addFolder({title:"Renderer Tweaks",expanded:!1})),this.debugObject={},this.setIntance(),this.setPostProcessing()}setIntance(){this.debugObject.clearColor="#0f1c1a",this.instance=new Tb({canvas:this.canvas,antialias:!0}),this.instance.outputColorSpace=xt,this.instance.shadowMap.enabled=!0,this.instance.shadowMap.type=sd,this.instance.toneMapping=Wl,this.instance.toneMappingExposure=1,this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setClearColor(this.debugObject.clearColor),this.instance.setPixelRatio(this.sizes.pixelRatio),this.debug.active&&this.rendererTweaks.addBinding(this.debugObject,"clearColor").on("change",()=>{this.instance.setClearColor(this.debugObject.clearColor),this.sSAARenderPass.clearColor=this.debugObject.clearColor})}setPostProcessing(){this.composer=new GT(this.instance),this.sSAARenderPass=new WT(this.scene,this.camera.instance,this.debugObject.clearColor,1),this.composer.addPass(this.sSAARenderPass),this.filmPass=new qT(8,!1),this.composer.addPass(this.filmPass),this.outputPass=new YT,this.composer.addPass(this.outputPass)}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(this.sizes.pixelRatio),this.composer.setSize(this.sizes.width,this.sizes.height),this.composer.setPixelRatio(this.sizes.pixelRatio)}update(){this.composer.render()}}let $a=null;class Ki{constructor(e){if($a)return $a;$a=this,window.experience=this,this.canvas=e,this.debug=new HE,this.sizes=new GE,this.time=new WE,this.scene=new Ab,this.resources=new LS(jE),this.camera=new FT,this.renderer=new $T,this.world=new NT,this.sizes.on("resize",()=>{this.resize()}),this.time.on("tick",()=>{this.update()})}resize(){this.camera.resize(),this.renderer.resize()}update(){this.camera.update(),this.renderer.update(),this.world.update()}}new Ki(document.querySelector("canvas.webgl"));
//# sourceMappingURL=index-DNvKW-j0.js.map

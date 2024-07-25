var br=Object.defineProperty;var Sr=(e,t,n)=>t in e?br(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var he=(e,t,n)=>(Sr(e,typeof t!="symbol"?t+"":t,n),n);import{g as Zt,F as sn,C as Mr,b as Hn,h as cn,d as $n,k as Tt,l as Qe,m as Er,j as B,O as Cr,n as Ar,o as Pr,p as Ir}from"./r3f-CgQp5KGC.js";import{g as Mt,r as K,R as Oe}from"./react-CYolmezd.js";import{w as at,d as st,u as Dr,L as zr}from"./chunk-ijpvOTVi.js";import{j as kt,M as Tr,c as Ut,av as Lr,C as Ee,aT as Be,aG as Or,ag as He,s as Rr,J as Bt,P as Nr,V as De,Q as ln,aD as un,U as vt,aY as ct,a1 as fn,aZ as jr,aU as ye,T as Fr,H as kr,a5 as Ur,a_ as Br}from"./three-DvuAfGWb.js";import{E as Vr,B as Hr,a as $r}from"./pp-DqC3HAyg.js";import{u as yt,g as Ae}from"./gsap-BpGQC8RM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const u of i)if(u.type==="childList")for(const m of u.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function n(i){const u={};return i.integrity&&(u.integrity=i.integrity),i.referrerPolicy&&(u.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?u.credentials="include":i.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(i){if(i.ep)return;i.ep=!0;const u=n(i);fetch(i.href,u)}})();const je=(e,t=!1)=>{const n=window._hmt||[];t?n.push(["_trackEvent","event","tap",e,""]):n.push(["_trackPageview",e])},St=class St{constructor(){he(this,"url");he(this,"image");he(this,"title");he(this,"desc");he(this,"timelineTitle");this.url=location.origin+location.pathname,this.url.indexOf("/src/app")&&(this.url=this.url.replace("/src/app","")),this.title="",this.desc="",this.timelineTitle="",this.image=new Image().src=""}static get shared(){return this.__ins||(this.__ins=new St),this.__ins}init(){const t=navigator.userAgent.toLowerCase();t.indexOf("micromessenger")>-1&&this.initWechat(),t.indexOf("dingtalk")>-1&&this.initDingtalk()}initWechat(){const t=new FormData;t.append("type","signature"),t.append("url",window.location.href.split("#")[0]),t.append("weixinidx","1");const n="url"+Math.random();fetch(n,{method:"POST",body:t,cache:"no-cache"}).then(r=>{if(r.status==200)return r.json()}).then(r=>{at.config({debug:!1,appId:r.appid,timestamp:r.timestamp,nonceStr:r.nonceStr,signature:r.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone","hideMenuItems","showMenuItems","hideAllNonBaseMenuItem","showAllNonBaseMenuItem","translateVoice","startRecord","stopRecord","onVoiceRecordEnd","playVoice","onVoicePlayEnd","pauseVoice","stopVoice","uploadVoice","downloadVoice","chooseImage","previewImage","uploadImage","downloadImage","getNetworkType","openLocation","getLocation","hideOptionMenu","showOptionMenu","closeWindow","scanQRCode","chooseWXPay","openProductSpecificView","addCard","chooseCard","openCard"]})}).catch(r=>{}),at.ready(()=>{at.onMenuShareAppMessage({title:this.title,link:this.url,desc:this.desc,imgUrl:this.image,success:()=>{je("分享成功-wx",!0)},cancel:()=>{je("分享取消-wx",!0)}}),at.onMenuShareTimeline({title:this.timelineTitle,imgUrl:this.image,link:this.url,success:()=>{je("分享成功-pyq",!0)},cancel:()=>{je("分享取消-pyq",!0)}})})}initDingtalk(){st.ready(()=>{st.biz.navigation.setRight({show:!0,control:!0,text:"分享",onSuccess:()=>{st.biz.util.share({type:0,url:this.url,title:this.title,content:this.desc,image:this.image,onSuccess:()=>{je("分享成功-dd",!0)},onFail:()=>{je("分享取消-dd",!0)}})}})}),st.error(function(t){alert("dd error: "+JSON.stringify(t))})}};he(St,"__ins");let Vt=St;const fe=Zt(()=>({touch:!1,auto:!1,demand:!0,isMute:!1,audioAllowed:!1,browserHidden:!1,begin:!1,controlDom:document.createElement("div"),end:!1})),Yn=Zt(()=>({time:0,transfer:!1,bodyColor:"#26d6e9"})),Wn=Zt(()=>({ready:!1})),pn=(e,t="modelParts")=>e.map((i,u)=>`const ${i.name} = ${t}[${u}]-${i.type};`).join(`
`),dn=e=>{const t=[];return e.scene.traverse(n=>{t.push(n)}),t};function lt(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Gn={exports:{}};(function(e,t){(function(n){e.exports=n()})(function(){return function n(r,i,u){function m(S,w){if(!i[S]){if(!r[S]){var R=typeof lt=="function"&&lt;if(!w&&R)return R(S,!0);if(M)return M(S,!0);throw new Error("Cannot find module '"+S+"'")}w=i[S]={exports:{}},r[S][0].call(w.exports,function(z){var I=r[S][1][z];return m(I||z)},w,w.exports,n,r,i,u)}return i[S].exports}for(var M=typeof lt=="function"&&lt,b=0;b<u.length;b++)m(u[b]);return m}({1:[function(n,r,i){(function(u,m,M,b,S,w,R,z,I){var y=n("crypto");function A(p,f){f=C(p,f);var s;return(s=f.algorithm!=="passthrough"?y.createHash(f.algorithm):new L).write===void 0&&(s.write=s.update,s.end=s.update),E(f,s).dispatch(p),s.update||s.end(""),s.digest?s.digest(f.encoding==="buffer"?void 0:f.encoding):(p=s.read(),f.encoding!=="buffer"?p.toString(f.encoding):p)}(i=r.exports=A).sha1=function(p){return A(p)},i.keys=function(p){return A(p,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},i.MD5=function(p){return A(p,{algorithm:"md5",encoding:"hex"})},i.keysMD5=function(p){return A(p,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var h=y.getHashes?y.getHashes().slice():["sha1","md5"],_=(h.push("passthrough"),["buffer","hex","binary","base64"]);function C(p,f){var s={};if(s.algorithm=(f=f||{}).algorithm||"sha1",s.encoding=f.encoding||"hex",s.excludeValues=!!f.excludeValues,s.algorithm=s.algorithm.toLowerCase(),s.encoding=s.encoding.toLowerCase(),s.ignoreUnknown=f.ignoreUnknown===!0,s.respectType=f.respectType!==!1,s.respectFunctionNames=f.respectFunctionNames!==!1,s.respectFunctionProperties=f.respectFunctionProperties!==!1,s.unorderedArrays=f.unorderedArrays===!0,s.unorderedSets=f.unorderedSets!==!1,s.unorderedObjects=f.unorderedObjects!==!1,s.replacer=f.replacer||void 0,s.excludeKeys=f.excludeKeys||void 0,p===void 0)throw new Error("Object argument required.");for(var l=0;l<h.length;++l)h[l].toLowerCase()===s.algorithm.toLowerCase()&&(s.algorithm=h[l]);if(h.indexOf(s.algorithm)===-1)throw new Error('Algorithm "'+s.algorithm+'"  not supported. supported values: '+h.join(", "));if(_.indexOf(s.encoding)===-1&&s.algorithm!=="passthrough")throw new Error('Encoding "'+s.encoding+'"  not supported. supported values: '+_.join(", "));return s}function x(p){if(typeof p=="function")return/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(p))!=null}function E(p,f,s){s=s||[];function l(a){return f.update?f.update(a,"utf8"):f.write(a,"utf8")}return{dispatch:function(a){return this["_"+((a=p.replacer?p.replacer(a):a)===null?"null":typeof a)](a)},_object:function(a){var g,v=Object.prototype.toString.call(a),k=/\[object (.*)\]/i.exec(v);if(k=(k=k?k[1]:"unknown:["+v+"]").toLowerCase(),0<=(v=s.indexOf(a)))return this.dispatch("[CIRCULAR:"+v+"]");if(s.push(a),M!==void 0&&M.isBuffer&&M.isBuffer(a))return l("buffer:"),l(a);if(k==="object"||k==="function"||k==="asyncfunction")return v=Object.keys(a),p.unorderedObjects&&(v=v.sort()),p.respectType===!1||x(a)||v.splice(0,0,"prototype","__proto__","constructor"),p.excludeKeys&&(v=v.filter(function(j){return!p.excludeKeys(j)})),l("object:"+v.length+":"),g=this,v.forEach(function(j){g.dispatch(j),l(":"),p.excludeValues||g.dispatch(a[j]),l(",")});if(!this["_"+k]){if(p.ignoreUnknown)return l("["+k+"]");throw new Error('Unknown object type "'+k+'"')}this["_"+k](a)},_array:function(a,j){j=j!==void 0?j:p.unorderedArrays!==!1;var v=this;if(l("array:"+a.length+":"),!j||a.length<=1)return a.forEach(function(U){return v.dispatch(U)});var k=[],j=a.map(function(U){var N=new L,F=s.slice();return E(p,N,F).dispatch(U),k=k.concat(F.slice(s.length)),N.read().toString()});return s=s.concat(k),j.sort(),this._array(j,!1)},_date:function(a){return l("date:"+a.toJSON())},_symbol:function(a){return l("symbol:"+a.toString())},_error:function(a){return l("error:"+a.toString())},_boolean:function(a){return l("bool:"+a.toString())},_string:function(a){l("string:"+a.length+":"),l(a.toString())},_function:function(a){l("fn:"),x(a)?this.dispatch("[native]"):this.dispatch(a.toString()),p.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(a.name)),p.respectFunctionProperties&&this._object(a)},_number:function(a){return l("number:"+a.toString())},_xml:function(a){return l("xml:"+a.toString())},_null:function(){return l("Null")},_undefined:function(){return l("Undefined")},_regexp:function(a){return l("regex:"+a.toString())},_uint8array:function(a){return l("uint8array:"),this.dispatch(Array.prototype.slice.call(a))},_uint8clampedarray:function(a){return l("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(a))},_int8array:function(a){return l("int8array:"),this.dispatch(Array.prototype.slice.call(a))},_uint16array:function(a){return l("uint16array:"),this.dispatch(Array.prototype.slice.call(a))},_int16array:function(a){return l("int16array:"),this.dispatch(Array.prototype.slice.call(a))},_uint32array:function(a){return l("uint32array:"),this.dispatch(Array.prototype.slice.call(a))},_int32array:function(a){return l("int32array:"),this.dispatch(Array.prototype.slice.call(a))},_float32array:function(a){return l("float32array:"),this.dispatch(Array.prototype.slice.call(a))},_float64array:function(a){return l("float64array:"),this.dispatch(Array.prototype.slice.call(a))},_arraybuffer:function(a){return l("arraybuffer:"),this.dispatch(new Uint8Array(a))},_url:function(a){return l("url:"+a.toString())},_map:function(a){return l("map:"),a=Array.from(a),this._array(a,p.unorderedSets!==!1)},_set:function(a){return l("set:"),a=Array.from(a),this._array(a,p.unorderedSets!==!1)},_file:function(a){return l("file:"),this.dispatch([a.name,a.size,a.type,a.lastModfied])},_blob:function(){if(p.ignoreUnknown)return l("[blob]");throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow:function(){return l("domwindow")},_bigint:function(a){return l("bigint:"+a.toString())},_process:function(){return l("process")},_timer:function(){return l("timer")},_pipe:function(){return l("pipe")},_tcp:function(){return l("tcp")},_udp:function(){return l("udp")},_tty:function(){return l("tty")},_statwatcher:function(){return l("statwatcher")},_securecontext:function(){return l("securecontext")},_connection:function(){return l("connection")},_zlib:function(){return l("zlib")},_context:function(){return l("context")},_nodescript:function(){return l("nodescript")},_httpparser:function(){return l("httpparser")},_dataview:function(){return l("dataview")},_signal:function(){return l("signal")},_fsevent:function(){return l("fsevent")},_tlswrap:function(){return l("tlswrap")}}}function L(){return{buf:"",write:function(p){this.buf+=p},end:function(p){this.buf+=p},read:function(){return this.buf}}}i.writeToStream=function(p,f,s){return s===void 0&&(s=f,f={}),E(f=C(p,f),s).dispatch(p)}}).call(this,n("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},n("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(n,r,i){(function(u,m,M,b,S,w,R,z,I){(function(y){var A=typeof Uint8Array<"u"?Uint8Array:Array,h=43,_=47,C=48,x=97,E=65,L=45,p=95;function f(s){return s=s.charCodeAt(0),s===h||s===L?62:s===_||s===p?63:s<C?-1:s<C+10?s-C+26+26:s<E+26?s-E:s<x+26?s-x+26:void 0}y.toByteArray=function(s){var l,a;if(0<s.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var g=s.length,g=s.charAt(g-2)==="="?2:s.charAt(g-1)==="="?1:0,v=new A(3*s.length/4-g),k=0<g?s.length-4:s.length,j=0;function U(N){v[j++]=N}for(l=0;l<k;l+=4,0)U((16711680&(a=f(s.charAt(l))<<18|f(s.charAt(l+1))<<12|f(s.charAt(l+2))<<6|f(s.charAt(l+3))))>>16),U((65280&a)>>8),U(255&a);return g==2?U(255&(a=f(s.charAt(l))<<2|f(s.charAt(l+1))>>4)):g==1&&(U((a=f(s.charAt(l))<<10|f(s.charAt(l+1))<<4|f(s.charAt(l+2))>>2)>>8&255),U(255&a)),v},y.fromByteArray=function(s){var l,a,g,v,k=s.length%3,j="";function U(N){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(N)}for(l=0,g=s.length-k;l<g;l+=3)a=(s[l]<<16)+(s[l+1]<<8)+s[l+2],j+=U((v=a)>>18&63)+U(v>>12&63)+U(v>>6&63)+U(63&v);switch(k){case 1:j=(j+=U((a=s[s.length-1])>>2))+U(a<<4&63)+"==";break;case 2:j=(j=(j+=U((a=(s[s.length-2]<<8)+s[s.length-1])>>10))+U(a>>4&63))+U(a<<2&63)+"="}return j}})(i===void 0?this.base64js={}:i)}).call(this,n("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},n("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(n,r,i){(function(u,m,h,b,S,w,R,z,I){var y=n("base64-js"),A=n("ieee754");function h(o,c,d){if(!(this instanceof h))return new h(o,c,d);var P,D,O,W,Z=typeof o;if(c==="base64"&&Z=="string")for(o=(W=o).trim?W.trim():W.replace(/^\s+|\s+$/g,"");o.length%4!=0;)o+="=";if(Z=="number")P=G(o);else if(Z=="string")P=h.byteLength(o,c);else{if(Z!="object")throw new Error("First argument needs to be a number, array or string.");P=G(o.length)}if(h._useTypedArrays?D=h._augment(new Uint8Array(P)):((D=this).length=P,D._isBuffer=!0),h._useTypedArrays&&typeof o.byteLength=="number")D._set(o);else if($(W=o)||h.isBuffer(W)||W&&typeof W=="object"&&typeof W.length=="number")for(O=0;O<P;O++)h.isBuffer(o)?D[O]=o.readUInt8(O):D[O]=o[O];else if(Z=="string")D.write(o,0,c);else if(Z=="number"&&!h._useTypedArrays&&!d)for(O=0;O<P;O++)D[O]=0;return D}function _(o,c,d,P){return h._charsWritten=Pe(function(D){for(var O=[],W=0;W<D.length;W++)O.push(255&D.charCodeAt(W));return O}(c),o,d,P)}function C(o,c,d,P){return h._charsWritten=Pe(function(D){for(var O,W,Z=[],te=0;te<D.length;te++)W=D.charCodeAt(te),O=W>>8,W=W%256,Z.push(W),Z.push(O);return Z}(c),o,d,P)}function x(o,c,d){var P="";d=Math.min(o.length,d);for(var D=c;D<d;D++)P+=String.fromCharCode(o[D]);return P}function E(o,c,d,O){O||(T(typeof d=="boolean","missing or invalid endian"),T(c!=null,"missing offset"),T(c+1<o.length,"Trying to read beyond buffer length"));var D,O=o.length;if(!(O<=c))return d?(D=o[c],c+1<O&&(D|=o[c+1]<<8)):(D=o[c]<<8,c+1<O&&(D|=o[c+1])),D}function L(o,c,d,O){O||(T(typeof d=="boolean","missing or invalid endian"),T(c!=null,"missing offset"),T(c+3<o.length,"Trying to read beyond buffer length"));var D,O=o.length;if(!(O<=c))return d?(c+2<O&&(D=o[c+2]<<16),c+1<O&&(D|=o[c+1]<<8),D|=o[c],c+3<O&&(D+=o[c+3]<<24>>>0)):(c+1<O&&(D=o[c+1]<<16),c+2<O&&(D|=o[c+2]<<8),c+3<O&&(D|=o[c+3]),D+=o[c]<<24>>>0),D}function p(o,c,d,P){if(P||(T(typeof d=="boolean","missing or invalid endian"),T(c!=null,"missing offset"),T(c+1<o.length,"Trying to read beyond buffer length")),!(o.length<=c))return P=E(o,c,d,!0),32768&P?-1*(65535-P+1):P}function f(o,c,d,P){if(P||(T(typeof d=="boolean","missing or invalid endian"),T(c!=null,"missing offset"),T(c+3<o.length,"Trying to read beyond buffer length")),!(o.length<=c))return P=L(o,c,d,!0),2147483648&P?-1*(4294967295-P+1):P}function s(o,c,d,P){return P||(T(typeof d=="boolean","missing or invalid endian"),T(c+3<o.length,"Trying to read beyond buffer length")),A.read(o,c,d,23,4)}function l(o,c,d,P){return P||(T(typeof d=="boolean","missing or invalid endian"),T(c+7<o.length,"Trying to read beyond buffer length")),A.read(o,c,d,52,8)}function a(o,c,d,P,D){if(D||(T(c!=null,"missing value"),T(typeof P=="boolean","missing or invalid endian"),T(d!=null,"missing offset"),T(d+1<o.length,"trying to write beyond buffer length"),Se(c,65535)),D=o.length,!(D<=d))for(var O=0,W=Math.min(D-d,2);O<W;O++)o[d+O]=(c&255<<8*(P?O:1-O))>>>8*(P?O:1-O)}function g(o,c,d,P,D){if(D||(T(c!=null,"missing value"),T(typeof P=="boolean","missing or invalid endian"),T(d!=null,"missing offset"),T(d+3<o.length,"trying to write beyond buffer length"),Se(c,4294967295)),D=o.length,!(D<=d))for(var O=0,W=Math.min(D-d,4);O<W;O++)o[d+O]=c>>>8*(P?O:3-O)&255}function v(o,c,d,P,D){D||(T(c!=null,"missing value"),T(typeof P=="boolean","missing or invalid endian"),T(d!=null,"missing offset"),T(d+1<o.length,"Trying to write beyond buffer length"),_e(c,32767,-32768)),o.length<=d||a(o,0<=c?c:65535+c+1,d,P,D)}function k(o,c,d,P,D){D||(T(c!=null,"missing value"),T(typeof P=="boolean","missing or invalid endian"),T(d!=null,"missing offset"),T(d+3<o.length,"Trying to write beyond buffer length"),_e(c,2147483647,-2147483648)),o.length<=d||g(o,0<=c?c:4294967295+c+1,d,P,D)}function j(o,c,d,P,D){D||(T(c!=null,"missing value"),T(typeof P=="boolean","missing or invalid endian"),T(d!=null,"missing offset"),T(d+3<o.length,"Trying to write beyond buffer length"),Ie(c,34028234663852886e22,-34028234663852886e22)),o.length<=d||A.write(o,c,d,P,23,4)}function U(o,c,d,P,D){D||(T(c!=null,"missing value"),T(typeof P=="boolean","missing or invalid endian"),T(d!=null,"missing offset"),T(d+7<o.length,"Trying to write beyond buffer length"),Ie(c,17976931348623157e292,-17976931348623157e292)),o.length<=d||A.write(o,c,d,P,52,8)}i.Buffer=h,i.SlowBuffer=h,i.INSPECT_MAX_BYTES=50,h.poolSize=8192,h._useTypedArrays=function(){try{var o=new ArrayBuffer(0),c=new Uint8Array(o);return c.foo=function(){return 42},c.foo()===42&&typeof c.subarray=="function"}catch{return!1}}(),h.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.isBuffer=function(o){return!(o==null||!o._isBuffer)},h.byteLength=function(o,c){var d;switch(o+="",c||"utf8"){case"hex":d=o.length/2;break;case"utf8":case"utf-8":d=oe(o).length;break;case"ascii":case"binary":case"raw":d=o.length;break;case"base64":d=de(o).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":d=2*o.length;break;default:throw new Error("Unknown encoding")}return d},h.concat=function(o,c){if(T($(o),`Usage: Buffer.concat(list, [totalLength])
list should be an Array.`),o.length===0)return new h(0);if(o.length===1)return o[0];if(typeof c!="number")for(D=c=0;D<o.length;D++)c+=o[D].length;for(var d=new h(c),P=0,D=0;D<o.length;D++){var O=o[D];O.copy(d,P),P+=O.length}return d},h.prototype.write=function(o,c,d,P){isFinite(c)?isFinite(d)||(P=d,d=void 0):(te=P,P=c,c=d,d=te),c=Number(c)||0;var D,O,W,Z,te=this.length-c;switch((!d||te<(d=Number(d)))&&(d=te),P=String(P||"utf8").toLowerCase()){case"hex":D=function(me,ie,ae,ne){ae=Number(ae)||0;var J=me.length-ae;(!ne||J<(ne=Number(ne)))&&(ne=J),T((J=ie.length)%2==0,"Invalid hex string"),J/2<ne&&(ne=J/2);for(var Ne=0;Ne<ne;Ne++){var an=parseInt(ie.substr(2*Ne,2),16);T(!isNaN(an),"Invalid hex string"),me[ae+Ne]=an}return h._charsWritten=2*Ne,Ne}(this,o,c,d);break;case"utf8":case"utf-8":O=this,W=c,Z=d,D=h._charsWritten=Pe(oe(o),O,W,Z);break;case"ascii":case"binary":D=_(this,o,c,d);break;case"base64":O=this,W=c,Z=d,D=h._charsWritten=Pe(de(o),O,W,Z);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":D=C(this,o,c,d);break;default:throw new Error("Unknown encoding")}return D},h.prototype.toString=function(o,c,d){var P,D,O,W,Z=this;if(o=String(o||"utf8").toLowerCase(),c=Number(c)||0,(d=d!==void 0?Number(d):Z.length)===c)return"";switch(o){case"hex":P=function(te,me,ie){var ae=te.length;(!me||me<0)&&(me=0),(!ie||ie<0||ae<ie)&&(ie=ae);for(var ne="",J=me;J<ie;J++)ne+=Y(te[J]);return ne}(Z,c,d);break;case"utf8":case"utf-8":P=function(te,me,ie){var ae="",ne="";ie=Math.min(te.length,ie);for(var J=me;J<ie;J++)te[J]<=127?(ae+=Re(ne)+String.fromCharCode(te[J]),ne=""):ne+="%"+te[J].toString(16);return ae+Re(ne)}(Z,c,d);break;case"ascii":case"binary":P=x(Z,c,d);break;case"base64":D=Z,W=d,P=(O=c)===0&&W===D.length?y.fromByteArray(D):y.fromByteArray(D.slice(O,W));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":P=function(te,me,ie){for(var ae=te.slice(me,ie),ne="",J=0;J<ae.length;J+=2)ne+=String.fromCharCode(ae[J]+256*ae[J+1]);return ne}(Z,c,d);break;default:throw new Error("Unknown encoding")}return P},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},h.prototype.copy=function(o,c,d,P){if(c=c||0,(P=P||P===0?P:this.length)!==(d=d||0)&&o.length!==0&&this.length!==0){T(d<=P,"sourceEnd < sourceStart"),T(0<=c&&c<o.length,"targetStart out of bounds"),T(0<=d&&d<this.length,"sourceStart out of bounds"),T(0<=P&&P<=this.length,"sourceEnd out of bounds"),P>this.length&&(P=this.length);var D=(P=o.length-c<P-d?o.length-c+d:P)-d;if(D<100||!h._useTypedArrays)for(var O=0;O<D;O++)o[O+c]=this[O+d];else o._set(this.subarray(d,d+D),c)}},h.prototype.slice=function(o,c){var d=this.length;if(o=F(o,d,0),c=F(c,d,d),h._useTypedArrays)return h._augment(this.subarray(o,c));for(var P=c-o,D=new h(P,void 0,!0),O=0;O<P;O++)D[O]=this[O+o];return D},h.prototype.get=function(o){return this.readUInt8(o)},h.prototype.set=function(o,c){return this.writeUInt8(o,c)},h.prototype.readUInt8=function(o,c){if(c||(T(o!=null,"missing offset"),T(o<this.length,"Trying to read beyond buffer length")),!(o>=this.length))return this[o]},h.prototype.readUInt16LE=function(o,c){return E(this,o,!0,c)},h.prototype.readUInt16BE=function(o,c){return E(this,o,!1,c)},h.prototype.readUInt32LE=function(o,c){return L(this,o,!0,c)},h.prototype.readUInt32BE=function(o,c){return L(this,o,!1,c)},h.prototype.readInt8=function(o,c){if(c||(T(o!=null,"missing offset"),T(o<this.length,"Trying to read beyond buffer length")),!(o>=this.length))return 128&this[o]?-1*(255-this[o]+1):this[o]},h.prototype.readInt16LE=function(o,c){return p(this,o,!0,c)},h.prototype.readInt16BE=function(o,c){return p(this,o,!1,c)},h.prototype.readInt32LE=function(o,c){return f(this,o,!0,c)},h.prototype.readInt32BE=function(o,c){return f(this,o,!1,c)},h.prototype.readFloatLE=function(o,c){return s(this,o,!0,c)},h.prototype.readFloatBE=function(o,c){return s(this,o,!1,c)},h.prototype.readDoubleLE=function(o,c){return l(this,o,!0,c)},h.prototype.readDoubleBE=function(o,c){return l(this,o,!1,c)},h.prototype.writeUInt8=function(o,c,d){d||(T(o!=null,"missing value"),T(c!=null,"missing offset"),T(c<this.length,"trying to write beyond buffer length"),Se(o,255)),c>=this.length||(this[c]=o)},h.prototype.writeUInt16LE=function(o,c,d){a(this,o,c,!0,d)},h.prototype.writeUInt16BE=function(o,c,d){a(this,o,c,!1,d)},h.prototype.writeUInt32LE=function(o,c,d){g(this,o,c,!0,d)},h.prototype.writeUInt32BE=function(o,c,d){g(this,o,c,!1,d)},h.prototype.writeInt8=function(o,c,d){d||(T(o!=null,"missing value"),T(c!=null,"missing offset"),T(c<this.length,"Trying to write beyond buffer length"),_e(o,127,-128)),c>=this.length||(0<=o?this.writeUInt8(o,c,d):this.writeUInt8(255+o+1,c,d))},h.prototype.writeInt16LE=function(o,c,d){v(this,o,c,!0,d)},h.prototype.writeInt16BE=function(o,c,d){v(this,o,c,!1,d)},h.prototype.writeInt32LE=function(o,c,d){k(this,o,c,!0,d)},h.prototype.writeInt32BE=function(o,c,d){k(this,o,c,!1,d)},h.prototype.writeFloatLE=function(o,c,d){j(this,o,c,!0,d)},h.prototype.writeFloatBE=function(o,c,d){j(this,o,c,!1,d)},h.prototype.writeDoubleLE=function(o,c,d){U(this,o,c,!0,d)},h.prototype.writeDoubleBE=function(o,c,d){U(this,o,c,!1,d)},h.prototype.fill=function(o,c,d){if(c=c||0,d=d||this.length,T(typeof(o=typeof(o=o||0)=="string"?o.charCodeAt(0):o)=="number"&&!isNaN(o),"value is not a number"),T(c<=d,"end < start"),d!==c&&this.length!==0){T(0<=c&&c<this.length,"start out of bounds"),T(0<=d&&d<=this.length,"end out of bounds");for(var P=c;P<d;P++)this[P]=o}},h.prototype.inspect=function(){for(var o=[],c=this.length,d=0;d<c;d++)if(o[d]=Y(this[d]),d===i.INSPECT_MAX_BYTES){o[d+1]="...";break}return"<Buffer "+o.join(" ")+">"},h.prototype.toArrayBuffer=function(){if(typeof Uint8Array>"u")throw new Error("Buffer.toArrayBuffer not supported in this browser");if(h._useTypedArrays)return new h(this).buffer;for(var o=new Uint8Array(this.length),c=0,d=o.length;c<d;c+=1)o[c]=this[c];return o.buffer};var N=h.prototype;function F(o,c,d){return typeof o!="number"?d:c<=(o=~~o)?c:0<=o||0<=(o+=c)?o:0}function G(o){return(o=~~Math.ceil(+o))<0?0:o}function $(o){return(Array.isArray||function(c){return Object.prototype.toString.call(c)==="[object Array]"})(o)}function Y(o){return o<16?"0"+o.toString(16):o.toString(16)}function oe(o){for(var c=[],d=0;d<o.length;d++){var P=o.charCodeAt(d);if(P<=127)c.push(o.charCodeAt(d));else for(var D=d,O=(55296<=P&&P<=57343&&d++,encodeURIComponent(o.slice(D,d+1)).substr(1).split("%")),W=0;W<O.length;W++)c.push(parseInt(O[W],16))}return c}function de(o){return y.toByteArray(o)}function Pe(o,c,d,P){for(var D=0;D<P&&!(D+d>=c.length||D>=o.length);D++)c[D+d]=o[D];return D}function Re(o){try{return decodeURIComponent(o)}catch{return"�"}}function Se(o,c){T(typeof o=="number","cannot write a non-number as a number"),T(0<=o,"specified a negative value for writing an unsigned value"),T(o<=c,"value is larger than maximum value for type"),T(Math.floor(o)===o,"value has a fractional component")}function _e(o,c,d){T(typeof o=="number","cannot write a non-number as a number"),T(o<=c,"value larger than maximum allowed value"),T(d<=o,"value smaller than minimum allowed value"),T(Math.floor(o)===o,"value has a fractional component")}function Ie(o,c,d){T(typeof o=="number","cannot write a non-number as a number"),T(o<=c,"value larger than maximum allowed value"),T(d<=o,"value smaller than minimum allowed value")}function T(o,c){if(!o)throw new Error(c||"Failed assertion")}h._augment=function(o){return o._isBuffer=!0,o._get=o.get,o._set=o.set,o.get=N.get,o.set=N.set,o.write=N.write,o.toString=N.toString,o.toLocaleString=N.toString,o.toJSON=N.toJSON,o.copy=N.copy,o.slice=N.slice,o.readUInt8=N.readUInt8,o.readUInt16LE=N.readUInt16LE,o.readUInt16BE=N.readUInt16BE,o.readUInt32LE=N.readUInt32LE,o.readUInt32BE=N.readUInt32BE,o.readInt8=N.readInt8,o.readInt16LE=N.readInt16LE,o.readInt16BE=N.readInt16BE,o.readInt32LE=N.readInt32LE,o.readInt32BE=N.readInt32BE,o.readFloatLE=N.readFloatLE,o.readFloatBE=N.readFloatBE,o.readDoubleLE=N.readDoubleLE,o.readDoubleBE=N.readDoubleBE,o.writeUInt8=N.writeUInt8,o.writeUInt16LE=N.writeUInt16LE,o.writeUInt16BE=N.writeUInt16BE,o.writeUInt32LE=N.writeUInt32LE,o.writeUInt32BE=N.writeUInt32BE,o.writeInt8=N.writeInt8,o.writeInt16LE=N.writeInt16LE,o.writeInt16BE=N.writeInt16BE,o.writeInt32LE=N.writeInt32LE,o.writeInt32BE=N.writeInt32BE,o.writeFloatLE=N.writeFloatLE,o.writeFloatBE=N.writeFloatBE,o.writeDoubleLE=N.writeDoubleLE,o.writeDoubleBE=N.writeDoubleBE,o.fill=N.fill,o.inspect=N.inspect,o.toArrayBuffer=N.toArrayBuffer,o}}).call(this,n("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},n("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(n,r,i){(function(u,m,y,b,S,w,R,z,I){var y=n("buffer").Buffer,A=4,h=new y(A);h.fill(0),r.exports={hash:function(_,C,x,E){for(var L=C(function(a,g){a.length%A!=0&&(v=a.length+(A-a.length%A),a=y.concat([a,h],v));for(var v,k=[],j=g?a.readInt32BE:a.readInt32LE,U=0;U<a.length;U+=A)k.push(j.call(a,U));return k}(_=y.isBuffer(_)?_:new y(_),E),8*_.length),C=E,p=new y(x),f=C?p.writeInt32BE:p.writeInt32LE,s=0;s<L.length;s++)f.call(p,L[s],4*s,!0);return p}}}).call(this,n("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},n("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(n,r,i){(function(u,m,y,b,S,w,R,z,I){var y=n("buffer").Buffer,A=n("./sha"),h=n("./sha256"),_=n("./rng"),C={sha1:A,sha256:h,md5:n("./md5")},x=64,E=new y(x);function L(a,g){var v=C[a=a||"sha1"],k=[];return v||p("algorithm:",a,"is not yet supported"),{update:function(j){return y.isBuffer(j)||(j=new y(j)),k.push(j),j.length,this},digest:function(j){var U=y.concat(k),U=g?function(N,F,G){y.isBuffer(F)||(F=new y(F)),y.isBuffer(G)||(G=new y(G)),F.length>x?F=N(F):F.length<x&&(F=y.concat([F,E],x));for(var $=new y(x),Y=new y(x),oe=0;oe<x;oe++)$[oe]=54^F[oe],Y[oe]=92^F[oe];return G=N(y.concat([$,G])),N(y.concat([Y,G]))}(v,g,U):v(U);return k=null,j?U.toString(j):U}}}function p(){var a=[].slice.call(arguments).join(" ");throw new Error([a,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join(`
`))}E.fill(0),i.createHash=function(a){return L(a)},i.createHmac=L,i.randomBytes=function(a,g){if(!g||!g.call)return new y(_(a));try{g.call(this,void 0,new y(_(a)))}catch(v){g(v)}};var f,s=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],l=function(a){i[a]=function(){p("sorry,",a,"is not implemented yet")}};for(f in s)l(s[f])}).call(this,n("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},n("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(n,r,i){(function(u,m,M,b,S,w,R,z,I){var y=n("./helpers");function A(p,f){p[f>>5]|=128<<f%32,p[14+(f+64>>>9<<4)]=f;for(var s=1732584193,l=-271733879,a=-1732584194,g=271733878,v=0;v<p.length;v+=16){var k=s,j=l,U=a,N=g,s=_(s,l,a,g,p[v+0],7,-680876936),g=_(g,s,l,a,p[v+1],12,-389564586),a=_(a,g,s,l,p[v+2],17,606105819),l=_(l,a,g,s,p[v+3],22,-1044525330);s=_(s,l,a,g,p[v+4],7,-176418897),g=_(g,s,l,a,p[v+5],12,1200080426),a=_(a,g,s,l,p[v+6],17,-1473231341),l=_(l,a,g,s,p[v+7],22,-45705983),s=_(s,l,a,g,p[v+8],7,1770035416),g=_(g,s,l,a,p[v+9],12,-1958414417),a=_(a,g,s,l,p[v+10],17,-42063),l=_(l,a,g,s,p[v+11],22,-1990404162),s=_(s,l,a,g,p[v+12],7,1804603682),g=_(g,s,l,a,p[v+13],12,-40341101),a=_(a,g,s,l,p[v+14],17,-1502002290),s=C(s,l=_(l,a,g,s,p[v+15],22,1236535329),a,g,p[v+1],5,-165796510),g=C(g,s,l,a,p[v+6],9,-1069501632),a=C(a,g,s,l,p[v+11],14,643717713),l=C(l,a,g,s,p[v+0],20,-373897302),s=C(s,l,a,g,p[v+5],5,-701558691),g=C(g,s,l,a,p[v+10],9,38016083),a=C(a,g,s,l,p[v+15],14,-660478335),l=C(l,a,g,s,p[v+4],20,-405537848),s=C(s,l,a,g,p[v+9],5,568446438),g=C(g,s,l,a,p[v+14],9,-1019803690),a=C(a,g,s,l,p[v+3],14,-187363961),l=C(l,a,g,s,p[v+8],20,1163531501),s=C(s,l,a,g,p[v+13],5,-1444681467),g=C(g,s,l,a,p[v+2],9,-51403784),a=C(a,g,s,l,p[v+7],14,1735328473),s=x(s,l=C(l,a,g,s,p[v+12],20,-1926607734),a,g,p[v+5],4,-378558),g=x(g,s,l,a,p[v+8],11,-2022574463),a=x(a,g,s,l,p[v+11],16,1839030562),l=x(l,a,g,s,p[v+14],23,-35309556),s=x(s,l,a,g,p[v+1],4,-1530992060),g=x(g,s,l,a,p[v+4],11,1272893353),a=x(a,g,s,l,p[v+7],16,-155497632),l=x(l,a,g,s,p[v+10],23,-1094730640),s=x(s,l,a,g,p[v+13],4,681279174),g=x(g,s,l,a,p[v+0],11,-358537222),a=x(a,g,s,l,p[v+3],16,-722521979),l=x(l,a,g,s,p[v+6],23,76029189),s=x(s,l,a,g,p[v+9],4,-640364487),g=x(g,s,l,a,p[v+12],11,-421815835),a=x(a,g,s,l,p[v+15],16,530742520),s=E(s,l=x(l,a,g,s,p[v+2],23,-995338651),a,g,p[v+0],6,-198630844),g=E(g,s,l,a,p[v+7],10,1126891415),a=E(a,g,s,l,p[v+14],15,-1416354905),l=E(l,a,g,s,p[v+5],21,-57434055),s=E(s,l,a,g,p[v+12],6,1700485571),g=E(g,s,l,a,p[v+3],10,-1894986606),a=E(a,g,s,l,p[v+10],15,-1051523),l=E(l,a,g,s,p[v+1],21,-2054922799),s=E(s,l,a,g,p[v+8],6,1873313359),g=E(g,s,l,a,p[v+15],10,-30611744),a=E(a,g,s,l,p[v+6],15,-1560198380),l=E(l,a,g,s,p[v+13],21,1309151649),s=E(s,l,a,g,p[v+4],6,-145523070),g=E(g,s,l,a,p[v+11],10,-1120210379),a=E(a,g,s,l,p[v+2],15,718787259),l=E(l,a,g,s,p[v+9],21,-343485551),s=L(s,k),l=L(l,j),a=L(a,U),g=L(g,N)}return Array(s,l,a,g)}function h(p,f,s,l,a,g){return L((f=L(L(f,p),L(l,g)))<<a|f>>>32-a,s)}function _(p,f,s,l,a,g,v){return h(f&s|~f&l,p,f,a,g,v)}function C(p,f,s,l,a,g,v){return h(f&l|s&~l,p,f,a,g,v)}function x(p,f,s,l,a,g,v){return h(f^s^l,p,f,a,g,v)}function E(p,f,s,l,a,g,v){return h(s^(f|~l),p,f,a,g,v)}function L(p,f){var s=(65535&p)+(65535&f);return(p>>16)+(f>>16)+(s>>16)<<16|65535&s}r.exports=function(p){return y.hash(p,A,16)}}).call(this,n("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},n("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(n,r,i){(function(u,m,M,b,S,w,R,z,I){r.exports=function(y){for(var A,h=new Array(y),_=0;_<y;_++)!(3&_)&&(A=4294967296*Math.random()),h[_]=A>>>((3&_)<<3)&255;return h}}).call(this,n("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},n("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(n,r,i){(function(u,m,M,b,S,w,R,z,I){var y=n("./helpers");function A(C,x){C[x>>5]|=128<<24-x%32,C[15+(x+64>>9<<4)]=x;for(var E,L,p,f=Array(80),s=1732584193,l=-271733879,a=-1732584194,g=271733878,v=-1009589776,k=0;k<C.length;k+=16){for(var j=s,U=l,N=a,F=g,G=v,$=0;$<80;$++){f[$]=$<16?C[k+$]:_(f[$-3]^f[$-8]^f[$-14]^f[$-16],1);var Y=h(h(_(s,5),(Y=l,L=a,p=g,(E=$)<20?Y&L|~Y&p:!(E<40)&&E<60?Y&L|Y&p|L&p:Y^L^p)),h(h(v,f[$]),(E=$)<20?1518500249:E<40?1859775393:E<60?-1894007588:-899497514)),v=g,g=a,a=_(l,30),l=s,s=Y}s=h(s,j),l=h(l,U),a=h(a,N),g=h(g,F),v=h(v,G)}return Array(s,l,a,g,v)}function h(C,x){var E=(65535&C)+(65535&x);return(C>>16)+(x>>16)+(E>>16)<<16|65535&E}function _(C,x){return C<<x|C>>>32-x}r.exports=function(C){return y.hash(C,A,20,!0)}}).call(this,n("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},n("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(n,r,i){(function(u,m,M,b,S,w,R,z,I){function y(x,E){var L=(65535&x)+(65535&E);return(x>>16)+(E>>16)+(L>>16)<<16|65535&L}function A(x,E){var L,p=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),f=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),s=new Array(64);x[E>>5]|=128<<24-E%32,x[15+(E+64>>9<<4)]=E;for(var l,a,g=0;g<x.length;g+=16){for(var v=f[0],k=f[1],j=f[2],U=f[3],N=f[4],F=f[5],G=f[6],$=f[7],Y=0;Y<64;Y++)s[Y]=Y<16?x[Y+g]:y(y(y((a=s[Y-2],_(a,17)^_(a,19)^C(a,10)),s[Y-7]),(a=s[Y-15],_(a,7)^_(a,18)^C(a,3))),s[Y-16]),L=y(y(y(y($,_(a=N,6)^_(a,11)^_(a,25)),N&F^~N&G),p[Y]),s[Y]),l=y(_(l=v,2)^_(l,13)^_(l,22),v&k^v&j^k&j),$=G,G=F,F=N,N=y(U,L),U=j,j=k,k=v,v=y(L,l);f[0]=y(v,f[0]),f[1]=y(k,f[1]),f[2]=y(j,f[2]),f[3]=y(U,f[3]),f[4]=y(N,f[4]),f[5]=y(F,f[5]),f[6]=y(G,f[6]),f[7]=y($,f[7])}return f}var h=n("./helpers"),_=function(x,E){return x>>>E|x<<32-E},C=function(x,E){return x>>>E};r.exports=function(x){return h.hash(x,A,32,!0)}}).call(this,n("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},n("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(n,r,i){(function(u,m,M,b,S,w,R,z,I){i.read=function(y,A,h,_,g){var x,E,L=8*g-_-1,p=(1<<L)-1,f=p>>1,s=-7,l=h?g-1:0,a=h?-1:1,g=y[A+l];for(l+=a,x=g&(1<<-s)-1,g>>=-s,s+=L;0<s;x=256*x+y[A+l],l+=a,s-=8);for(E=x&(1<<-s)-1,x>>=-s,s+=_;0<s;E=256*E+y[A+l],l+=a,s-=8);if(x===0)x=1-f;else{if(x===p)return E?NaN:1/0*(g?-1:1);E+=Math.pow(2,_),x-=f}return(g?-1:1)*E*Math.pow(2,x-_)},i.write=function(y,A,h,_,C,v){var E,L,p=8*v-C-1,f=(1<<p)-1,s=f>>1,l=C===23?Math.pow(2,-24)-Math.pow(2,-77):0,a=_?0:v-1,g=_?1:-1,v=A<0||A===0&&1/A<0?1:0;for(A=Math.abs(A),isNaN(A)||A===1/0?(L=isNaN(A)?1:0,E=f):(E=Math.floor(Math.log(A)/Math.LN2),A*(_=Math.pow(2,-E))<1&&(E--,_*=2),2<=(A+=1<=E+s?l/_:l*Math.pow(2,1-s))*_&&(E++,_/=2),f<=E+s?(L=0,E=f):1<=E+s?(L=(A*_-1)*Math.pow(2,C),E+=s):(L=A*Math.pow(2,s-1)*Math.pow(2,C),E=0));8<=C;y[h+a]=255&L,a+=g,L/=256,C-=8);for(E=E<<C|L,p+=C;0<p;y[h+a]=255&E,a+=g,E/=256,p-=8);y[h+a-g]|=128*v}}).call(this,n("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},n("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(n,r,i){(function(u,m,M,b,S,w,R,z,I){var y,A,h;function _(){}(u=r.exports={}).nextTick=(A=typeof window<"u"&&window.setImmediate,h=typeof window<"u"&&window.postMessage&&window.addEventListener,A?function(C){return window.setImmediate(C)}:h?(y=[],window.addEventListener("message",function(C){var x=C.source;x!==window&&x!==null||C.data!=="process-tick"||(C.stopPropagation(),0<y.length&&y.shift()())},!0),function(C){y.push(C),window.postMessage("process-tick","*")}):function(C){setTimeout(C,0)}),u.title="browser",u.browser=!0,u.env={},u.argv=[],u.on=_,u.addListener=_,u.once=_,u.off=_,u.removeListener=_,u.removeAllListeners=_,u.emit=_,u.binding=function(C){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(C){throw new Error("process.chdir is not supported")}}).call(this,n("lYpoI2"),typeof self<"u"?self:typeof window<"u"?window:{},n("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)})})(Gn);var Yr=Gn.exports;const Wr=Mt(Yr);var Kn=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","uint","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"],Gr=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"],Xn=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"],Kr=Kn,Xr=Kr.slice().concat(["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray"]),Ht=Xn;Ht=Ht.slice().filter(function(e){return!/^(gl\_|texture)/.test(e)});var qr=Ht.concat(["gl_VertexID","gl_InstanceID","gl_Position","gl_PointSize","gl_FragCoord","gl_FrontFacing","gl_FragDepth","gl_PointCoord","gl_MaxVertexAttribs","gl_MaxVertexUniformVectors","gl_MaxVertexOutputVectors","gl_MaxFragmentInputVectors","gl_MaxVertexTextureImageUnits","gl_MaxCombinedTextureImageUnits","gl_MaxTextureImageUnits","gl_MaxFragmentUniformVectors","gl_MaxDrawBuffers","gl_MinProgramTexelOffset","gl_MaxProgramTexelOffset","gl_DepthRangeParameters","gl_DepthRange","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"]),Qr=so,Zr=Kn,mn=Gr,Jr=Xn,eo=Xr,to=qr,ge=999,hn=9999,Lt=0,Ot=1,gn=2,vn=3,yn=4,Ze=5,no=6,ro=7,oo=8,xn=9,io=10,wn=11,ao=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function so(e){var t=0,n=0,r=ge,i,u,m=[],M=[],b=1,S=0,w=0,R=!1,z=!1,I="",y;e=e||{};var A=Jr,h=Zr;e.version==="300 es"&&(A=to,h=eo);for(var _={},C={},t=0;t<A.length;t++)_[A[t]]=!0;for(var t=0;t<h.length;t++)C[h[t]]=!0;return function(F){return M=[],F!==null?E(F):L()};function x(F){F.length&&M.push({type:ao[r],data:F,position:w,line:b,column:S})}function E(F){t=0,F.toString&&(F=F.toString()),I+=F.replace(/\r\n/g,`
`),y=I.length;for(var G;i=I[t],t<y;){switch(G=t,r){case Lt:t=a();break;case Ot:t=l();break;case gn:t=s();break;case vn:t=g();break;case yn:t=j();break;case wn:t=k();break;case Ze:t=U();break;case hn:t=N();break;case xn:t=f();break;case ge:t=p();break}if(G!==t)switch(I[G]){case`
`:S=0,++b;break;default:++S;break}}return n+=t,I=I.slice(t),M}function L(F){return m.length&&x(m.join("")),r=io,x("(eof)"),M}function p(){return m=m.length?[]:m,u==="/"&&i==="*"?(w=n+t-1,r=Lt,u=i,t+1):u==="/"&&i==="/"?(w=n+t-1,r=Ot,u=i,t+1):i==="#"?(r=gn,w=n+t,t):/\s/.test(i)?(r=xn,w=n+t,t):(R=/\d/.test(i),z=/[^\w_]/.test(i),w=n+t,r=R?yn:z?vn:hn,t)}function f(){return/[^\s]/g.test(i)?(x(m.join("")),r=ge,t):(m.push(i),u=i,t+1)}function s(){return(i==="\r"||i===`
`)&&u!=="\\"?(x(m.join("")),r=ge,t):(m.push(i),u=i,t+1)}function l(){return s()}function a(){return i==="/"&&u==="*"?(m.push(i),x(m.join("")),r=ge,t+1):(m.push(i),u=i,t+1)}function g(){if(u==="."&&/\d/.test(i))return r=Ze,t;if(u==="/"&&i==="*")return r=Lt,t;if(u==="/"&&i==="/")return r=Ot,t;if(i==="."&&m.length){for(;v(m););return r=Ze,t}if(i===";"||i===")"||i==="("){if(m.length)for(;v(m););return x(i),r=ge,t+1}var F=m.length===2&&i!=="=";if(/[\w_\d\s]/.test(i)||F){for(;v(m););return r=ge,t}return m.push(i),u=i,t+1}function v(F){var G=0,$,Y;do{if($=mn.indexOf(F.slice(0,F.length+G).join("")),Y=mn[$],$===-1){if(G--+F.length>0)continue;Y=F.slice(0,1).join("")}return x(Y),w+=Y.length,m=m.slice(Y.length),m.length}while(!0)}function k(){return/[^a-fA-F0-9]/.test(i)?(x(m.join("")),r=ge,t):(m.push(i),u=i,t+1)}function j(){return i==="."||/[eE]/.test(i)?(m.push(i),r=Ze,u=i,t+1):i==="x"&&m.length===1&&m[0]==="0"?(r=wn,m.push(i),u=i,t+1):/[^\d]/.test(i)?(x(m.join("")),r=ge,t):(m.push(i),u=i,t+1)}function U(){return i==="f"&&(m.push(i),u=i,t+=1),/[eE]/.test(i)||(i==="-"||i==="+")&&/[eE]/.test(u)?(m.push(i),u=i,t+1):/[^\d]/.test(i)?(x(m.join("")),r=ge,t):(m.push(i),u=i,t+1)}function N(){if(/[^\d\w_]/.test(i)){var F=m.join("");return C[F]?r=oo:_[F]?r=ro:r=no,x(m.join("")),r=ge,t}return m.push(i),u=i,t+1}}var co=Qr,lo=uo;function uo(e,t){var n=co(t),r=[];return r=r.concat(n(e)),r=r.concat(n(null)),r}const fo=Mt(lo);var po=mo;function mo(e){for(var t=[],n=0;n<e.length;n++)e[n].type!=="eof"&&t.push(e[n].data);return t.join("")}const _n=Mt(po);var ho=go;function go(e){var t=null,n=null,r=0,i=0,u=0,m=0,M=0,b=[],S,w,R;for(S=0,w;S<e.length;S++)if(R=e[S],R.data==="{"){if(r&&r++||(w=I(S,Me(")"),Me()),w<0)||(m=w,w=I(w,Me("("),Me(")")),w<0)||(M=w,w=I(w,Je),w<0)||e[w].type!=="ident"||(n=e[w].data,w=I(w,Je),w<0))continue;r=1,i=S,t=e[w].data,u=w;var z=I(w,Je);switch(e[z]&&e[z].data){case"lowp":case"highp":case"mediump":u=z}}else if(r&&R.data==="}"){if(--r)continue;b.push({name:n,type:t,body:[i+1,S],args:[M,m+1],outer:[u,S+1]})}for(S=0;S<e.length;S++)if(R=e[S],R.data===";"){if(w=I(S,Me(")"),Me()),w<0||(m=w,w=I(w,Me("("),Me(")")),w<0)||(M=w,w=I(w,Je),w<0)||e[w].type!=="ident"||(n=e[w].data,w=I(w,Je),w<0)||e[w].type==="operator"||e[w].data==="return")continue;t=e[w].data,b.push({name:n,type:t,body:!1,args:[M,m+1],outer:[w,S+1]})}return b.sort(function(y,A){return y.outer[0]-A.outer[0]});function I(y,A,h){for(var _=y-1;_>=0;_--){if(A(e[_]))return _;if(h&&h(e[_]))return-1}return-1}}function Me(e){return function(t){return t.type==="operator"&&(!e||t.data===e)}}function Je(e){return e.type!=="whitespace"}const vo=Mt(ho);function yo(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function qn(e){var t=yo(e,"string");return typeof t=="symbol"?t:String(t)}function q(e,t,n){return t=qn(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Fe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bn(Object(n),!0).forEach(function(r){q(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bn(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function xo(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,u;for(u=0;u<r.length;u++)i=r[u],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function wo(e,t){if(e==null)return{};var n=xo(e,t),r,i;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(i=0;i<u.length;i++)r=u[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function _o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Sn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,qn(r.key),r)}}function bo(e,t,n){return t&&Sn(e.prototype,t),n&&Sn(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Qn(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $t(e,t){return $t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},$t(e,t)}function So(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$t(e,t)}function xt(e){return xt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},xt(e)}function Mo(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Eo(e,t){if(t&&(typeof t=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Qn(e)}function Co(e){var t=Mo();return function(){var r=xt(e),i;if(t){var u=xt(this).constructor;i=Reflect.construct(r,arguments,u)}else i=r.apply(this,arguments);return Eo(this,i)}}var V={position:"csm_Position",positionRaw:"csm_PositionRaw",pointSize:"csm_PointSize",fragColor:"csm_FragColor",diffuseColor:"csm_DiffuseColor",normal:"csm_Normal",roughness:"csm_Roughness",metalness:"csm_Metalness",emissive:"csm_Emissive",ao:"csm_AO",bump:"csm_Bump",depthAlpha:"csm_DepthAlpha"},se,ke,Ao=(se={},q(se,"".concat(V.normal),{"#include <beginnormal_vertex>":`
    vec3 objectNormal = `.concat(V.normal,`;
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `)}),q(se,"".concat(V.position),{"#include <begin_vertex>":`
    vec3 transformed = `.concat(V.position,`;
  `)}),q(se,"".concat(V.positionRaw),{"#include <begin_vertex>":`
    vec4 csm_internal_positionUnprojected = `.concat(V.positionRaw,`;
    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;
    #endif
    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;
    vec3 transformed = csm_internal_positionUnprojected.xyz;
  `)}),q(se,"".concat(V.pointSize),{"gl_PointSize = size;":`
    gl_PointSize = `.concat(V.pointSize,`;
    `)}),q(se,"".concat(V.diffuseColor),{"#include <color_fragment>":`
    #include <color_fragment>
    diffuseColor = `.concat(V.diffuseColor,`;
  `)}),q(se,"".concat(V.fragColor),{"#include <dithering_fragment>":`
    #include <dithering_fragment>
    gl_FragColor  = `.concat(V.fragColor,`;
  `)}),q(se,"".concat(V.emissive),{"vec3 totalEmissiveRadiance = emissive;":`
    vec3 totalEmissiveRadiance = `.concat(V.emissive,`;
    `)}),q(se,"".concat(V.roughness),{"#include <roughnessmap_fragment>":`
    #include <roughnessmap_fragment>
    roughnessFactor = `.concat(V.roughness,`;
    `)}),q(se,"".concat(V.metalness),{"#include <metalnessmap_fragment>":`
    #include <metalnessmap_fragment>
    metalnessFactor = `.concat(V.metalness,`;
    `)}),q(se,"".concat(V.ao),{"#include <aomap_fragment>":`
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - `.concat(V.ao,`;
    `)}),q(se,"".concat(V.bump),{"#include <normal_fragment_maps>":`
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = `.concat(V.bump," - (dot(").concat(V.bump,`, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `)}),q(se,"".concat(V.depthAlpha),{"gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );":`
      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * `.concat(V.depthAlpha,` );
    `),"gl_FragColor = packDepthToRGBA( fragCoordZ );":`
      gl_FragColor = packDepthToRGBA( fragCoordZ );
      gl_FragColor.a *= `.concat(V.depthAlpha,`;
    `)}),se),Po=(ke={},q(ke,"".concat(V.position),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = projectionMatrix * modelViewMatrix * vec4( `.concat(V.position,`, 1.0 );
  `)}),q(ke,"".concat(V.positionRaw),{"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":`
    gl_Position = `.concat(V.position,`;
  `)}),q(ke,"".concat(V.diffuseColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(V.diffuseColor,`;
  `)}),q(ke,"".concat(V.fragColor),{"gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":`
    gl_FragColor = `.concat(V.fragColor,`;
  `)}),ke),Io=`

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
`,Do=`
    varying mat4 csm_internal_vModelViewMatrix;
`,zo=`
    csm_internal_vModelViewMatrix = modelViewMatrix;
`,To=`
    varying mat4 csm_internal_vModelViewMatrix;
`,Lo=`
    
`,ce,Oo=(ce={},q(ce,"".concat(V.position),"*"),q(ce,"".concat(V.positionRaw),"*"),q(ce,"".concat(V.normal),"*"),q(ce,"".concat(V.pointSize),["PointsMaterial"]),q(ce,"".concat(V.diffuseColor),"*"),q(ce,"".concat(V.fragColor),"*"),q(ce,"".concat(V.emissive),["MeshStandardMaterial","MeshPhysicalMaterial"]),q(ce,"".concat(V.roughness),["MeshStandardMaterial","MeshPhysicalMaterial"]),q(ce,"".concat(V.metalness),["MeshStandardMaterial","MeshPhysicalMaterial"]),q(ce,"".concat(V.ao),["MeshStandardMaterial","MeshPhysicalMaterial","MeshBasicMaterial","MeshLambertMaterial","MeshPhongMaterial","MeshToonMaterial"]),q(ce,"".concat(V.bump),["MeshLambertMaterial","MeshMatcapMaterial","MeshNormalMaterial","MeshPhongMaterial","MeshPhysicalMaterial","MeshStandardMaterial","MeshToonMaterial","ShadowMaterial"]),q(ce,"".concat(V.depthAlpha),"*"),ce),Ro=["baseMaterial","fragmentShader","vertexShader","uniforms","patchMap","cacheKey","silent"],No=function(t,n,r){return t.split(n).join(r)},jo=function(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")},Fo=function(t,n){return new RegExp("\\b".concat(jo(n),"\\b")).test(t)};function ko(e){try{new e}catch(t){if(t.message.indexOf("is not a constructor")>=0)return!1}return!0}function Uo(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;Object.assign(e,t);var r=Object.getPrototypeOf(t);Object.entries(Object.getOwnPropertyDescriptors(r)).filter(function(i){var u=typeof i[1].get=="function",m=typeof i[1].set=="function",M=typeof i[1].value=="function",b=i[0]==="constructor";return(u||m||M)&&!b}).forEach(function(i){if(typeof e[i[0]]=="function"){var u="base_".concat(i[0]);e[u]=i[1].value.bind(e);return}Object.defineProperty(e,i[0],i[1])})}function Bo(e){var t=e.toString().trim(),n=t.substring(t.indexOf("{")+1,t.lastIndexOf("}"));return n.trim().length===0}function Mn(e){return e.replace(/\s/g,"")}function Vo(e,t,n){var r=e.lastIndexOf(t);return r===-1?e:e.substring(0,r)+n+e.substring(r+t.length)}var En=function(e){So(n,e);var t=Co(n);function n(r){var i,u=r.baseMaterial,m=r.fragmentShader,M=r.vertexShader,b=r.uniforms,S=r.patchMap,w=r.cacheKey,R=r.silent,z=wo(r,Ro);_o(this,n);var I;if(ko(u)?I=new u(z):(I=u,Object.assign(I,z)),I.type==="RawShaderMaterial")throw new Error("CustomShaderMaterial does not support RawShaderMaterial");i=t.call(this),Uo(Qn(i),I,R),i.__csm={patchMap:S||{},fragmentShader:m||"",vertexShader:M||"",cacheKey:w,baseMaterial:u,instanceID:kt.generateUUID(),type:I.type,isAlreadyExtended:!Bo(I.onBeforeCompile),cacheHash:"",silent:R},i.uniforms=Fe(Fe({},i.uniforms||{}),b||{});{var y=i.__csm,A=y.fragmentShader,h=y.vertexShader,_=i.uniforms;i.__csm.cacheHash=i.getCacheHash(),i.generateMaterial(A,h,_)}return i}return bo(n,[{key:"update",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.uniforms=i.uniforms||this.uniforms,Object.assign(this.__csm,i);var u=this.__csm,m=u.fragmentShader,M=u.vertexShader,b=this.uniforms,S=this.getCacheHash();this.__csm.cacheHash=S,this.generateMaterial(m,M,b)}},{key:"clone",value:function(){var i={baseMaterial:this.__csm.baseMaterial,fragmentShader:this.__csm.fragmentShader,vertexShader:this.__csm.vertexShader,uniforms:this.uniforms,silent:this.__csm.silent,patchMap:this.__csm.patchMap,cacheKey:this.__csm.cacheKey},u=new this.constructor(i);return Object.assign(this,u),u}},{key:"getCacheHash",value:function(){var i=this.__csm,u=i.fragmentShader,m=i.vertexShader,M=this.uniforms,b=Object.values(M).reduce(function(w,R){var z=R.value;return w+JSON.stringify(z)},""),S=Mn(u)+Mn(m)+b;return S.trim().length>0?Wr(S):this.customProgramCacheKey()}},{key:"generateMaterial",value:function(i,u,m){var M=this,b=this.parseShader(i),S=this.parseShader(u);this.uniforms=m||{},this.customProgramCacheKey=function(){return M.__csm.cacheHash};var w=function(I){try{if(b){var y=M.patchShader(b,I.fragmentShader,!0);I.fragmentShader=M.getMaterialDefine()+y}if(S){var A=M.patchShader(S,I.vertexShader);I.vertexShader=`#define IS_VERTEX;
`+A,I.vertexShader=M.getMaterialDefine()+I.vertexShader}I.uniforms=Fe(Fe({},I.uniforms),M.uniforms),M.uniforms=I.uniforms}catch{}};if(this.__csm.isAlreadyExtended){var R=this.onBeforeCompile;this.onBeforeCompile=function(z,I){R(z,I),w(z)}}else this.onBeforeCompile=w;this.needsUpdate=!0}},{key:"patchShader",value:function(i,u,m){var M=this,b=u,S=Fe(Fe({},this.getPatchMapForMaterial()),this.__csm.patchMap);Object.keys(S).forEach(function(z){Object.keys(S[z]).forEach(function(I){var y=Oo[z],A=M.__csm.type;if(z==="*"||Fo(i.main,z))if(!y||Array.isArray(y)&&y.includes(A)||y==="*")b=No(b,I,S[z][I]);else throw new Error("CSM: ".concat(z," is not available in ").concat(A,". Shader cannot compile."))})}),b=b.replace("void main() {",`
        #ifndef CSM_IS_HEAD_DEFAULTS_DEFINED
          `.concat(m?To:Do,`
          #define CSM_IS_HEAD_DEFAULTS_DEFINED 1
        #endif

        `).concat(i.header,`
        
        void main() {
          #ifndef CSM_IS_DEFAULTS_DEFINED
            `).concat(Io,`
            #define CSM_IS_DEFAULTS_DEFINED 1
          #endif
          
          #ifndef CSM_IS_MAIN_DEFAULTS_DEFINED
            `).concat(m?Lo:zo,`
            #define CSM_IS_MAIN_DEFAULTS_DEFINED 1
          #endif

          // CSM_START
      `));var w=this.__csm.isAlreadyExtended,R=b.includes("// CSM_END");return w&&R?b=Vo(b,"// CSM_END",`
          // CSM_END
          `.concat(i.main,`
          // CSM_END
        `)):b=b.replace("// CSM_START",`
        // CSM_START
        `.concat(i.main,`
        // CSM_END
          `)),b=i.defines+b,b}},{key:"parseShader",value:function(i){if(i){var u=i.replace(/\/\*\*(.*?)\*\/|\/\/(.*?)\n/gm,""),m=fo(u),M=vo(m),b=M.map(function(R){return R.name}).indexOf("main"),S=_n(m.slice(0,b>=0?M[b].outer[0]:void 0)),w=b>=0?this.getShaderFromIndex(m,M[b].body):"";return{defines:"",header:S,main:w}}}},{key:"getMaterialDefine",value:function(){var i=this.__csm.type;return i?"#define IS_".concat(i.toUpperCase(),`;
`):`#define IS_UNKNOWN;
`}},{key:"getPatchMapForMaterial",value:function(){switch(this.__csm.type){case"ShaderMaterial":return Po;default:return Ao}}},{key:"getShaderFromIndex",value:function(i,u){return _n(i.slice(u[0],u[1]))}}]),n}(Tr),Ho="varying vec2 vUv;void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);vUv=uv;}",$o=`#ifndef RANDOM_SCALE
#if defined(RANDOM_HIGHER_RANGE)
#define RANDOM_SCALE vec4(.1031, .1030, .0973, .1099)
#else
#define RANDOM_SCALE vec4(443.897, 441.423, .0973, .1099)
#endif
#endif
#ifndef FNC_RANDOM
#define FNC_RANDOM
float random(in float x){
#if defined(RANDOM_SINLESS)
return fract(sin(x)*43758.5453);
#else
x=fract(x*RANDOM_SCALE.x);x*=x+33.33;x*=x+x;return fract(x);
#endif
}float random(in vec2 st){
#if defined(RANDOM_SINLESS)
vec3 p3=fract(vec3(st.xyx)*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yzx+33.33);return fract((p3.x+p3.y)*p3.z);
#else
return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453);
#endif
}float random(in vec3 pos){
#if defined(RANDOM_SINLESS)
pos=fract(pos*RANDOM_SCALE.xyz);pos+=dot(pos,pos.zyx+31.32);return fract((pos.x+pos.y)*pos.z);
#else
return fract(sin(dot(pos.xyz,vec3(70.9898,78.233,32.4355)))*43758.5453123);
#endif
}float random(in vec4 pos){
#if defined(RANDOM_SINLESS)
pos=fract(pos*RANDOM_SCALE);pos+=dot(pos,pos.wzxy+33.33);return fract((pos.x+pos.y)*(pos.z+pos.w));
#else
float dot_product=dot(pos,vec4(12.9898,78.233,45.164,94.673));return fract(sin(dot_product)*43758.5453);
#endif
}vec2 random2(float p){vec3 p3=fract(vec3(p)*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yzx+19.19);return fract((p3.xx+p3.yz)*p3.zy);}vec2 random2(vec2 p){vec3 p3=fract(p.xyx*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yzx+19.19);return fract((p3.xx+p3.yz)*p3.zy);}vec2 random2(vec3 p3){p3=fract(p3*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yzx+19.19);return fract((p3.xx+p3.yz)*p3.zy);}vec3 random3(float p){vec3 p3=fract(vec3(p)*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yzx+19.19);return fract((p3.xxy+p3.yzz)*p3.zyx);}vec3 random3(vec2 p){vec3 p3=fract(vec3(p.xyx)*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yxz+19.19);return fract((p3.xxy+p3.yzz)*p3.zyx);}vec3 random3(vec3 p){p=fract(p*RANDOM_SCALE.xyz);p+=dot(p,p.yxz+19.19);return fract((p.xxy+p.yzz)*p.zyx);}vec4 random4(float p){vec4 p4=fract(p*RANDOM_SCALE);p4+=dot(p4,p4.wzxy+19.19);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec4 random4(vec2 p){vec4 p4=fract(p.xyxy*RANDOM_SCALE);p4+=dot(p4,p4.wzxy+19.19);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec4 random4(vec3 p){vec4 p4=fract(p.xyzx*RANDOM_SCALE);p4+=dot(p4,p4.wzxy+19.19);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec4 random4(vec4 p4){p4=fract(p4*RANDOM_SCALE);p4+=dot(p4,p4.wzxy+19.19);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}
#endif
#if !defined(FNC_SATURATE) && !defined(saturate)
#define FNC_SATURATE
#define saturate(x) clamp(x, 0.0, 1.0)
#endif
#ifndef FNC_MAP
#define FNC_MAP
float map(float value,float inMin,float inMax){return saturate((value-inMin)/(inMax-inMin));}vec2 map(vec2 value,vec2 inMin,vec2 inMax){return saturate((value-inMin)/(inMax-inMin));}vec3 map(vec3 value,vec3 inMin,vec3 inMax){return saturate((value-inMin)/(inMax-inMin));}vec4 map(vec4 value,vec4 inMin,vec4 inMax){return saturate((value-inMin)/(inMax-inMin));}float map(in float value,in float inMin,in float inMax,in float outMin,in float outMax){return outMin+(outMax-outMin)*(value-inMin)/(inMax-inMin);}vec2 map(in vec2 value,in vec2 inMin,in vec2 inMax,in vec2 outMin,in vec2 outMax){return outMin+(outMax-outMin)*(value-inMin)/(inMax-inMin);}vec3 map(in vec3 value,in vec3 inMin,in vec3 inMax,in vec3 outMin,in vec3 outMax){return outMin+(outMax-outMin)*(value-inMin)/(inMax-inMin);}vec4 map(in vec4 value,in vec4 inMin,in vec4 inMax,in vec4 outMin,in vec4 outMax){return outMin+(outMax-outMin)*(value-inMin)/(inMax-inMin);}
#endif
vec2 hash(vec2 p){p=vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3)));return-1.+2.*fract(sin(p)*43758.5453123);}float noise(in vec2 p){const float K1=.366025404;const float K2=.211324865;vec2 i=floor(p+(p.x+p.y)*K1);vec2 a=p-i+(i.x+i.y)*K2;float m=step(a.y,a.x);vec2 o=vec2(m,1.-m);vec2 b=a-o+K2;vec2 c=a-1.+2.*K2;vec3 h=max(.5-vec3(dot(a,a),dot(b,b),dot(c,c)),0.);vec3 n=h*h*h*h*vec3(dot(a,hash(i+0.)),dot(b,hash(i+o)),dot(c,hash(i+1.)));return dot(n,vec3(70.));}
#ifndef FNC_MOD289
#define FNC_MOD289
float mod289(const in float x){return x-floor(x*(1./289.))*289.;}vec2 mod289(const in vec2 x){return x-floor(x*(1./289.))*289.;}vec3 mod289(const in vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(const in vec4 x){return x-floor(x*(1./289.))*289.;}
#endif
#ifndef FNC_MOD289
#define FNC_MOD289
float mod289(const in float x){return x-floor(x*(1./289.))*289.;}vec2 mod289(const in vec2 x){return x-floor(x*(1./289.))*289.;}vec3 mod289(const in vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(const in vec4 x){return x-floor(x*(1./289.))*289.;}
#endif
#ifndef FNC_PERMUTE
#define FNC_PERMUTE
float permute(const in float x){return mod289(((x*34.0)+1.0)*x);}vec2 permute(const in vec2 x){return mod289(((x*34.0)+1.0)*x);}vec3 permute(const in vec3 x){return mod289(((x*34.0)+1.0)*x);}vec4 permute(const in vec4 x){return mod289(((x*34.0)+1.0)*x);}
#endif
#ifndef FNC_TAYLORINVSQRT
#define FNC_TAYLORINVSQRT
float taylorInvSqrt(in float r){return 1.79284291400159-0.85373472095314*r;}vec2 taylorInvSqrt(in vec2 r){return 1.79284291400159-0.85373472095314*r;}vec3 taylorInvSqrt(in vec3 r){return 1.79284291400159-0.85373472095314*r;}vec4 taylorInvSqrt(in vec4 r){return 1.79284291400159-0.85373472095314*r;}
#endif
#ifndef FNC_GRAD4
#define FNC_GRAD4
vec4 grad4(float j,vec4 ip){const vec4 ones=vec4(1.0,1.0,1.0,-1.0);vec4 p,s;p.xyz=floor(fract(vec3(j)*ip.xyz)*7.0)*ip.z-1.0;p.w=1.5-dot(abs(p.xyz),ones.xyz);s=vec4(lessThan(p,vec4(0.0)));p.xyz=p.xyz+(s.xyz*2.0-1.0)*s.www;return p;}
#endif
#ifndef FNC_SNOISE
#define FNC_SNOISE
float snoise(in vec2 v){const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);vec2 i=floor(v+dot(v,C.yy));vec2 x0=v-i+dot(i,C.xx);vec2 i1;i1=(x0.x>x0.y)? vec2(1.0,0.0): vec2(0.0,1.0);vec4 x12=x0.xyxy+C.xxzz;x12.xy-=i1;i=mod289(i);vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);m=m*m;m=m*m;vec3 x=2.0*fract(p*C.www)-1.0;vec3 h=abs(x)-0.5;vec3 ox=floor(x+0.5);vec3 a0=x-ox;m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);vec3 g;g.x=a0.x*x0.x+h.x*x0.y;g.yz=a0.yz*x12.xz+h.yz*x12.yw;return 130.0*dot(m,g);}float snoise(in vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}float snoise(in vec4 v){const vec4 C=vec4(0.138196601125011,0.276393202250021,0.414589803375032,-0.447213595499958);vec4 i=floor(v+dot(v,vec4(.309016994374947451)));vec4 x0=v-i+dot(i,C.xxxx);vec4 i0;vec3 isX=step(x0.yzw,x0.xxx);vec3 isYZ=step(x0.zww,x0.yyz);i0.x=isX.x+isX.y+isX.z;i0.yzw=1.0-isX;i0.y+=isYZ.x+isYZ.y;i0.zw+=1.0-isYZ.xy;i0.z+=isYZ.z;i0.w+=1.0-isYZ.z;vec4 i3=clamp(i0,0.0,1.0);vec4 i2=clamp(i0-1.0,0.0,1.0);vec4 i1=clamp(i0-2.0,0.0,1.0);vec4 x1=x0-i1+C.xxxx;vec4 x2=x0-i2+C.yyyy;vec4 x3=x0-i3+C.zzzz;vec4 x4=x0+C.wwww;i=mod289(i);float j0=permute(permute(permute(permute(i.w)+i.z)+i.y)+i.x);vec4 j1=permute(permute(permute(permute(i.w+vec4(i1.w,i2.w,i3.w,1.0))+i.z+vec4(i1.z,i2.z,i3.z,1.0))+i.y+vec4(i1.y,i2.y,i3.y,1.0))+i.x+vec4(i1.x,i2.x,i3.x,1.0));vec4 ip=vec4(1.0/294.0,1.0/49.0,1.0/7.0,0.0);vec4 p0=grad4(j0,ip);vec4 p1=grad4(j1.x,ip);vec4 p2=grad4(j1.y,ip);vec4 p3=grad4(j1.z,ip);vec4 p4=grad4(j1.w,ip);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;p4*=taylorInvSqrt(dot(p4,p4));vec3 m0=max(0.6-vec3(dot(x0,x0),dot(x1,x1),dot(x2,x2)),0.0);vec2 m1=max(0.6-vec2(dot(x3,x3),dot(x4,x4)),0.0);m0=m0*m0;m1=m1*m1;return 49.0*(dot(m0*m0,vec3(dot(p0,x0),dot(p1,x1),dot(p2,x2)))+dot(m1*m1,vec2(dot(p3,x3),dot(p4,x4))));}vec2 snoise2(vec2 x){float s=snoise(vec2(x));float s1=snoise(vec2(x.y-19.1,x.x+47.2));return vec2(s,s1);}vec3 snoise3(vec3 x){float s=snoise(vec3(x));float s1=snoise(vec3(x.y-19.1,x.z+33.4,x.x+47.2));float s2=snoise(vec3(x.z+74.2,x.x-124.5,x.y+99.4));return vec3(s,s1,s2);}vec3 snoise3(vec4 x){float s=snoise(vec4(x));float s1=snoise(vec4(x.y-19.1,x.z+33.4,x.x+47.2,x.w));float s2=snoise(vec4(x.z+74.2,x.x-124.5,x.y+99.4,x.w));return vec3(s,s1,s2);}
#endif
varying vec2 vUv;uniform float uTime;uniform float uSpeedFactor;vec3 getColor(vec2 uv){uv+=vec2(9.,0.);float r=random(uv+vec2(12.,2.));float g=random(uv+vec2(7.,5.));float b=random(uv);vec3 col=vec3(r,g,b);return col;}vec3 colorNoise(vec2 uv){vec2 newUV=floor(uv);vec2 size=vec2(1.);vec3 v1=getColor((newUV+vec2(0.))/size);vec3 v2=getColor((newUV+vec2(0.,1.))/size);vec3 v3=getColor((newUV+vec2(1.,0.))/size);vec3 v4=getColor((newUV+vec2(1.))/size);vec2 factor=smoothstep(0.,1.,fract(uv));vec3 v1Tov2=mix(v1,v2,factor.y);vec3 v3Tov4=mix(v3,v4,factor.y);vec3 mixColor=mix(v1Tov2,v3Tov4,factor.x);return mixColor;}void main(){vec2 newUV=vUv;newUV.x+=uTime*.5;float alpha=snoise(newUV*vec2(3.,100.));alpha=map(alpha,-1.,1.,0.,1.);alpha=pow(clamp(alpha-.05,0.,1.),20.);alpha=smoothstep(0.,.04,alpha);vec3 col=vec3(1.);col=colorNoise(newUV*vec2(10.,100.));col*=vec3(1.5,1.,400.);alpha*=smoothstep(.02,.5,vUv.x)*smoothstep(.02,.5,1.-vUv.x);alpha*=smoothstep(.01,.1,vUv.y)*smoothstep(.01,.1,1.-vUv.y);alpha*=smoothstep(0.,1.,uSpeedFactor)*5.;csm_FragColor=vec4(col,alpha);}`;const Yo=(e,t)=>{K.useLayoutEffect(()=>{e.scene.traverse(n=>{if(n.isMesh){const r=n;r.material=t}})},[])};function Wo(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[r,i]of e)if(!Object.is(i,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const r of e)if(!t.has(r))return!1;return!0}const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!Object.is(e[n[r]],t[n[r]]))return!1;return!0}const{useRef:Go}=Oe;function Ko(e){const t=Go();return n=>{const r=e(n);return Wo(t.current,r)?t.current:t.current=r}}const Xo=`

	// Without original size argument for power of two targets
	vec4 packedTexture2DLOD( sampler2D tex, vec2 uv, int level ) {

		// the fraction of the uv space used by the target mip
		float targetSubview = 1.0 / pow( 2.0, float( level ) );
		float widthRatio = 2.0 / 3.0;
		vec2 scaledDimensions = vec2( targetSubview * widthRatio, targetSubview );

		// all levels > 0 are on the right third of the texture
		// y is offset from the bottom
		vec2 offset = vec2(
			level > 0 ? widthRatio : 0.0,
			level > 0 ? targetSubview : 0.0
		);

		vec2 samplePoint = mix( offset, offset + scaledDimensions, uv );
		return texture2D( tex, samplePoint );

	}

	vec4 packedTexture2DLOD( sampler2D tex, vec2 uv, float level ) {

		float ratio = mod( level, 1.0 );
		int minLevel = int( floor( level ) );
		int maxLevel = int( ceil( level ) );

		vec4 minValue = packedTexture2DLOD( tex, uv, minLevel );
		vec4 maxValue = packedTexture2DLOD( tex, uv, maxLevel );

		return mix( minValue, maxValue, ratio );

	}

	// With original size argument
	vec4 packedTexture2DLOD( sampler2D tex, vec2 uv, int level, vec2 originalPixelSize ) {

		float floatLevel = float( level );
		vec2 atlasSize;
		atlasSize.x = floor( originalPixelSize.x * 1.5 );
		atlasSize.y = originalPixelSize.y;

		// we stop making mip maps when one dimension == 1
		float maxLevel = min( floor( log2( originalPixelSize.x ) ), floor( log2( originalPixelSize.y ) ) );
		floatLevel = min( floatLevel, maxLevel );

		// use inverse pow of 2 to simulate right bit shift operator
		vec2 currentPixelDimensions = floor( originalPixelSize / pow( 2.0, floatLevel ) );
		vec2 pixelOffset = vec2(
			floatLevel > 0.0 ? originalPixelSize.x : 0.0,
			floatLevel > 0.0 ? currentPixelDimensions.y : 0.0
		);

		// "minPixel / atlasSize" samples the top left piece of the first pixel
		// "maxPixel / atlasSize" samples the bottom right piece of the last pixel
		vec2 minPixel = pixelOffset;
		vec2 maxPixel = pixelOffset + currentPixelDimensions;
		vec2 samplePoint = mix( minPixel, maxPixel, uv );
		samplePoint /= atlasSize;

		vec2 halfPixelSize = 1.0 / ( 2.0 * atlasSize );
		samplePoint = min( samplePoint, maxPixel / atlasSize - halfPixelSize );
		samplePoint = max( samplePoint, minPixel / atlasSize + halfPixelSize );

		return texture2D( tex, samplePoint );

	}

	vec4 packedTexture2DLOD( sampler2D tex, vec2 uv, float level, vec2 originalPixelSize ) {

		float ratio = mod( level, 1.0 );
		int minLevel = int( floor( level ) );
		int maxLevel = int( ceil( level ) );

		vec4 minValue = packedTexture2DLOD( tex, uv, minLevel, originalPixelSize );
		vec4 maxValue = packedTexture2DLOD( tex, uv, maxLevel, originalPixelSize );

		return mix( minValue, maxValue, ratio );

	}

`;function et(e){const t={...e};return"defines"in e&&(t.defines={...e.defines}),"uniforms"in e&&(t.uniforms=Lr.clone(e.uniforms)),t}const qo={defines:{X_IS_EVEN:1,Y_IS_EVEN:1},uniforms:{map:{value:null},originalMapSize:{value:new Ut},parentMapSize:{value:new Ut},parentLevel:{value:0}},vertexShader:`
		varying vec2 vUv;
		void main() {

			#include <begin_vertex>
			#include <project_vertex>
			vUv = uv;

		}
	`,fragmentShader:`
		varying vec2 vUv;
		uniform sampler2D map;
		uniform int parentLevel;
		uniform vec2 parentMapSize;
		uniform vec2 originalMapSize;

		${Xo}

		#if X_IS_EVEN && Y_IS_EVEN

		#define SAMPLES 4
		#define WIDTH 2
		#define HEIGHT 2

		#elif X_IS_EVEN

		#define SAMPLES 6
		#define WIDTH 2
		#define HEIGHT 3

		#elif Y_IS_EVEN

		#define SAMPLES 6
		#define WIDTH 3
		#define HEIGHT 2

		#else

		#define SAMPLES 9
		#define WIDTH 3
		#define HEIGHT 3

		#endif

		vec4 sampleAt( vec2 uv ) {

			return packedTexture2DLOD( map, uv, parentLevel, originalMapSize );

		}

		void main() {

			vec2 childMapSize = parentMapSize / 2.0;
			// vec2 childPixelSize = 1.0 / childMapSize;
			// vec2 halfChildPixelSize = childPixelSize / 2.0;
			vec2 childPixelPos = floor( vUv * childMapSize );

			vec2 parentPixelSize = 1.0 / parentMapSize;
			vec2 halfParentPixelSize = parentPixelSize / 2.0;
			vec2 parentPixelPos = childPixelPos * 2.0;

			vec2 baseUv = ( parentPixelPos / parentMapSize ) + halfParentPixelSize;

			vec4 samples[ SAMPLES ];
			float weights[ SAMPLES ];

			#if X_IS_EVEN && Y_IS_EVEN

			samples[ 0 ] = sampleAt( baseUv );
			samples[ 1 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 0.0 ) );
			samples[ 2 ] = sampleAt( baseUv + vec2( 0.0, parentPixelSize.y ) );
			samples[ 3 ] = sampleAt( baseUv + vec2( parentPixelSize.x, parentPixelSize.y ) );

			weights[ 0 ] = 0.25;
			weights[ 1 ] = 0.25;
			weights[ 2 ] = 0.25;
			weights[ 3 ] = 0.25;

			#elif X_IS_EVEN

			float wx0 = 0.5;
			float wx1 = 0.5;

			float yden = 2.0 * parentMapSize.y + 1.0;
			float wy0 = ( parentMapSize.y - parentPixelPos.y ) / yden;
			float wy1 = ( parentMapSize.y ) / yden;
			float wy2 = ( parentPixelPos.y + 1.0 ) / yden;

			samples[ 0 ] = sampleAt( baseUv );
			samples[ 1 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 0.0 ) );

			samples[ 2 ] = sampleAt( baseUv + vec2( 0.0, parentPixelSize.y ) );
			samples[ 3 ] = sampleAt( baseUv + vec2( parentPixelSize.x, parentPixelSize.y ) );

			samples[ 4 ] = sampleAt( baseUv + vec2( 0.0, 2.0 * parentPixelSize.y ) );
			samples[ 5 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 2.0 * parentPixelSize.y ) );

			weights[ 0 ] = wx0 * wy0;
			weights[ 1 ] = wx1 * wy0;

			weights[ 2 ] = wx0 * wy1;
			weights[ 3 ] = wx1 * wy1;

			weights[ 4 ] = wx0 * wy2;
			weights[ 5 ] = wx1 * wy2;

			#elif Y_IS_EVEN

			float xden = 2.0 * parentMapSize.x + 1.0;
			float wx0 = ( parentMapSize.x - parentPixelPos.x ) / xden;
			float wx1 = ( parentMapSize.x ) / xden;
			float wx2 = ( parentPixelPos.x + 1.0 ) / xden;

			float wy0 = 0.5;
			float wy1 = 0.5;

			samples[ 0 ] = sampleAt( baseUv );
			samples[ 1 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 0.0 ) );
			samples[ 2 ] = sampleAt( baseUv + vec2( 2.0 * parentPixelSize.x, 0.0 ) );

			samples[ 3 ] = sampleAt( baseUv + vec2( 0.0, parentPixelSize.y ) );
			samples[ 4 ] = sampleAt( baseUv + vec2( parentPixelSize.x, parentPixelSize.y ) );
			samples[ 5 ] = sampleAt( baseUv + vec2( 2.0 * parentPixelSize.x, parentPixelSize.y ) );

			weights[ 0 ] = wx0 * wy0;
			weights[ 1 ] = wx1 * wy0;
			weights[ 2 ] = wx2 * wy0;

			weights[ 3 ] = wx0 * wy1;
			weights[ 4 ] = wx1 * wy1;
			weights[ 5 ] = wx2 * wy1;

			#else

			float xden = 2.0 * parentMapSize.x + 1.0;
			float wx0 = ( parentMapSize.x - parentPixelPos.x ) / xden;
			float wx1 = ( parentMapSize.x ) / xden;
			float wx2 = ( parentPixelPos.x + 1.0 ) / xden;

			float yden = 2.0 * parentMapSize.y + 1.0;
			float wy0 = ( parentMapSize.y - parentPixelPos.y ) / yden;
			float wy1 = ( parentMapSize.y ) / yden;
			float wy2 = ( parentPixelPos.y + 1.0 ) / yden;

			samples[ 0 ] = sampleAt( baseUv );
			samples[ 1 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 0.0 ) );
			samples[ 2 ] = sampleAt( baseUv + vec2( 2.0 * parentPixelSize.x, 0.0 ) );

			samples[ 3 ] = sampleAt( baseUv + vec2( 0.0, parentPixelSize.y ) );
			samples[ 4 ] = sampleAt( baseUv + vec2( parentPixelSize.x, parentPixelSize.y ) );
			samples[ 5 ] = sampleAt( baseUv + vec2( 2.0 * parentPixelSize.x, parentPixelSize.y ) );

			samples[ 6 ] = sampleAt( baseUv + vec2( 0.0, 2.0 * parentPixelSize.y ) );
			samples[ 7 ] = sampleAt( baseUv + vec2( parentPixelSize.x, 2.0 * parentPixelSize.y ) );
			samples[ 8 ] = sampleAt( baseUv + vec2( 2.0 * parentPixelSize.x, 2.0 * parentPixelSize.y ) );

			weights[ 0 ] = wx0 * wy0;
			weights[ 1 ] = wx1 * wy0;
			weights[ 2 ] = wx2 * wy0;

			weights[ 3 ] = wx0 * wy1;
			weights[ 4 ] = wx1 * wy1;
			weights[ 5 ] = wx2 * wy1;

			weights[ 6 ] = wx0 * wy2;
			weights[ 7 ] = wx1 * wy2;
			weights[ 8 ] = wx2 * wy2;

			#endif

			<mipmap_logic>

		}
	`},Cn=new Ee;class Qo{constructor(t){he(this,"_swapTarget");he(this,"_copyQuad");he(this,"_mipQuad");he(this,"_mipMaterials");t||(t=`

				#pragma unroll_loop
				for ( int i = 0; i < SAMPLES; i ++ ) {

					gl_FragColor += samples[ i ] * weights[ i ];

				}

			`);const n=et(qo);n.fragmentShader=n.fragmentShader.replace(/<mipmap_logic>/g,t);const r=new Array(4);r[0]=new Be(et(n)),r[0].defines.X_IS_EVEN=0,r[0].defines.Y_IS_EVEN=0,r[1]=new Be(et(n)),r[1].defines.X_IS_EVEN=1,r[1].defines.Y_IS_EVEN=0,r[2]=new Be(et(n)),r[2].defines.X_IS_EVEN=0,r[2].defines.Y_IS_EVEN=1,r[3]=new Be(et(n)),r[3].defines.X_IS_EVEN=1,r[3].defines.Y_IS_EVEN=1;const i=new Or;i.texture.minFilter=He,i.texture.magFilter=He,this._swapTarget=i,this._copyQuad=new sn(new Be(Mr)),this._mipQuad=new sn(null),this._mipMaterials=r}update(t,n,r,i=!1){t.isWebGLRenderTarget&&(t=t.texture);const u=r.autoClear,m=r.getClearAlpha(),M=r.getRenderTarget();r.getClearColor(Cn);const b=this._copyQuad,S=this._mipQuad,w=this._swapTarget,R=this._mipMaterials;let z,I;i?(z=kt.floorPowerOfTwo(t.image.width),I=kt.floorPowerOfTwo(t.image.height)):(z=Math.floor(t.image.width),I=Math.floor(t.image.height));const y=Math.floor(z*1.5),A=Math.floor(I);n.setSize(y,A),w.texture.type!==n.texture.type?(w.dispose(),w.copy(n),w.texture.image={...w.texture.image}):w.setSize(y,A),r.autoClear=!1,r.setClearColor(0),r.setClearAlpha(),b.material.uniforms.tDiffuse.value=t,b.camera.setViewOffset(z,I,0,0,y,A),r.setRenderTarget(n),r.clear(),b.render(r),r.setRenderTarget(w),r.clear(),b.render(r);let h=z,_=I,C=0;for(;h>1&&_>1;){const L=(h%2===0?1:0)|(_%2===0?2:0),p=R[L];p.uniforms.map.value=w.texture,p.uniforms.parentLevel.value=C,p.uniforms.parentMapSize.value.set(h,_),p.uniforms.originalMapSize.value.set(z,I),S.material=p,h=Math.floor(h/2),_=Math.floor(_/2);const f=A-2*_;r.setRenderTarget(n),S.camera.setViewOffset(h,_,-z,-f,y,A),S.render(r),r.setRenderTarget(w),p.uniforms.map.value=n.texture,S.render(r),C++}return r.setRenderTarget(M),r.setClearAlpha(m),r.setClearColor(Cn),r.autoClear=u,C+1}dispose(){this._swapTarget.dispose(),this._mipQuad.dispose(),this._copyQuad.dispose(),this._mipMaterials.forEach(t=>t.dispose())}}const Zo=(e,t={})=>{const{resolution:n=512,ignoreObjects:r=[]}=t,{baseCamera:i,renderer:u,scene:m}=Hn(Ko(y=>({baseCamera:y.camera,renderer:y.gl,scene:y.scene}))),M=K.useRef(new Rr),b=K.useRef(new Bt),S=K.useRef(new Nr),w=cn(n,n,{type:vt}),R=K.useMemo(()=>new Qo,[]),z=cn(n,n,{type:vt}),I=()=>{const y=M.current,A=b.current,h=S.current;y.set(new De(0,1,0),0),y.applyMatrix4(e.matrixWorld),h.copy(i);const _=new De(0,0,1).clone().negate(),C=i.getWorldPosition(new De);_.reflect(y.normal);const x=new De;y.projectPoint(C,x);const E=x.clone();E.sub(C),E.add(x),h.position.copy(E);const L=new De(0,0,-1);L.applyQuaternion(i.getWorldQuaternion(new ln)),L.add(C);const p=new De;e.getWorldPosition(p),p.sub(L),p.reflect(y.normal).negate(),p.add(e.getWorldPosition(new De)),h.up.set(0,1,0),h.applyQuaternion(i.getWorldQuaternion(new ln)),h.up.reflect(y.normal),h.lookAt(p),h.updateMatrixWorld();const f=new Bt;f.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),f.multiply(h.projectionMatrix),f.multiply(h.matrixWorldInverse),A.copy(f),y.applyMatrix4(h.matrixWorldInverse);const s=new un(y.normal.x,y.normal.y,y.normal.z,y.constant),l=h.projectionMatrix,a=new un;a.x=(Math.sign(s.x)+l.elements[8])/l.elements[0],a.y=(Math.sign(s.y)+l.elements[9])/l.elements[5],a.z=-1,a.w=(1+l.elements[10])/l.elements[14],s.multiplyScalar(2/s.dot(a)),l.elements[2]=s.x,l.elements[6]=s.y,l.elements[10]=s.z+1,l.elements[14]=s.w;const g=u.getRenderTarget();u.setRenderTarget(w),u.state.buffers.depth.setMask(!0),u.autoClear===!1&&u.clear(),r.forEach(v=>v.visible=!1),u.render(m,h),r.forEach(v=>v.visible=!0),u.setRenderTarget(g)};return $n(()=>{I(),R.update(w.texture,z,u)}),{matrix:b.current,renderTarget:z}};var Jo="varying vec2 vUv;varying vec4 vWorldPosition;void main(){vec3 p=position;csm_Position=p;vUv=uv;vWorldPosition=modelMatrix*vec4(p,1);}",ei=`#ifndef FNC_POW5
#define FNC_POW5
float pow5(const in float x){float x2=x*x;return x2*x2*x;}vec2 pow5(const in vec2 x){vec2 x2=x*x;return x2*x2*x;}vec3 pow5(const in vec3 x){vec3 x2=x*x;return x2*x2*x;}vec4 pow5(const in vec4 x){vec4 x2=x*x;return x2*x2*x;}
#endif
#ifndef FNC_SCHLICK
#define FNC_SCHLICK
vec3 schlick(const in vec3 f0,const in float f90,const in float VoH){float f=pow5(1.0-VoH);return f+f0*(f90-f);}vec3 schlick(const in vec3 f0,const in vec3 f90,const in float VoH){return f0+(f90-f0)*pow5(1.0-VoH);}float schlick(const in float f0,const in float f90,const in float VoH){return f0+(f90-f0)*pow5(1.0-VoH);}
#endif
#if !defined(FNC_SATURATE) && !defined(saturate)
#define FNC_SATURATE
#define saturate(x) clamp(x, 0.0, 1.0)
#endif
#ifndef FNC_FRESNEL
#define FNC_FRESNEL
vec3 fresnel(vec3 f0,vec3 normal,vec3 view){return schlick(f0,1.0,dot(view,normal));}vec3 fresnel(const in vec3 f0,const in float NoV){
#if defined(TARGET_MOBILE) || defined(PLATFORM_RPI)
return schlick(f0,1.0,NoV);
#else
float f90=saturate(dot(f0,vec3(50.0*0.33)));return schlick(f0,f90,NoV);
#endif
}float fresnel(const in float f0,const in float NoV){return schlick(f0,1.0,NoV);}
#endif
vec4 packedTexture2DLOD(sampler2D tex,vec2 uv,int level){float targetSubview=1.0/pow(2.0,float(level));float widthRatio=2.0/3.0;vec2 scaledDimensions=vec2(targetSubview*widthRatio,targetSubview);vec2 offset=vec2(level>0 ? widthRatio : 0.0,level>0 ? targetSubview : 0.0);vec2 samplePoint=mix(offset,offset+scaledDimensions,uv);return texture2D(tex,samplePoint);}vec4 packedTexture2DLOD(sampler2D tex,vec2 uv,float level){float ratio=mod(level,1.0);int minLevel=int(floor(level));int maxLevel=int(ceil(level));vec4 minValue=packedTexture2DLOD(tex,uv,minLevel);vec4 maxValue=packedTexture2DLOD(tex,uv,maxLevel);return mix(minValue,maxValue,ratio);}vec4 packedTexture2DLOD(sampler2D tex,vec2 uv,int level,vec2 originalPixelSize){float floatLevel=float(level);vec2 atlasSize;atlasSize.x=floor(originalPixelSize.x*1.5);atlasSize.y=originalPixelSize.y;float maxLevel=min(floor(log2(originalPixelSize.x)),floor(log2(originalPixelSize.y)));floatLevel=min(floatLevel,maxLevel);vec2 currentPixelDimensions=floor(originalPixelSize/pow(2.0,floatLevel));vec2 pixelOffset=vec2(floatLevel>0.0 ? originalPixelSize.x : 0.0,floatLevel>0.0 ? currentPixelDimensions.y : 0.0);vec2 minPixel=pixelOffset;vec2 maxPixel=pixelOffset+currentPixelDimensions;vec2 samplePoint=mix(minPixel,maxPixel,uv);samplePoint/=atlasSize;vec2 halfPixelSize=1.0/(2.0*atlasSize);samplePoint=min(samplePoint,maxPixel/atlasSize-halfPixelSize);samplePoint=max(samplePoint,minPixel/atlasSize+halfPixelSize);return texture2D(tex,samplePoint);}vec4 packedTexture2DLOD(sampler2D tex,vec2 uv,float level,vec2 originalPixelSize){float ratio=mod(level,1.0);int minLevel=int(floor(level));int maxLevel=int(ceil(level));vec4 minValue=packedTexture2DLOD(tex,uv,minLevel,originalPixelSize);vec4 maxValue=packedTexture2DLOD(tex,uv,maxLevel,originalPixelSize);return mix(minValue,maxValue,ratio);}varying vec2 vUv;varying vec4 vWorldPosition;uniform vec3 uColor;uniform mat4 uReflectMatrix;uniform sampler2D uReflectTexture;uniform float uReflectIntensity;uniform float uIntensity;uniform float uLevel;uniform vec2 uResolution;uniform float uTime;void main(){vec3 worldPos=vWorldPosition.xyz;worldPos.x-=uTime*0.1;vec3 surfaceNormal=texture2D(normalMap,worldPos.xz).xyz*2.0-1.0;surfaceNormal=surfaceNormal.rbg;surfaceNormal=normalize(surfaceNormal);vec3 viewDir=vViewPosition;float d=length(viewDir);viewDir=normalize(viewDir);vec2 distortion=surfaceNormal.xz*(0.001+1./d);vec4 reflectPoint=uReflectMatrix*vWorldPosition;reflectPoint=reflectPoint/reflectPoint.w;vec2 uv=reflectPoint.xy+distortion*uIntensity;vec3 reflectionSample=packedTexture2DLOD(uReflectTexture,uv,uLevel,uResolution).xyz;reflectionSample*=uReflectIntensity;vec3 strength=fresnel(vec3(0.),vNormal,viewDir);vec3 col=uColor;col=mix(col,reflectionSample,strength);csm_DiffuseColor=vec4(col,1.);}`;const ti=()=>{const e=Tt("/su7_demo/models/sm_car.gltf",!1,!0),t=Tt("/su7_demo/models/sm_startroom.raw.gltf",!1,!0),n=Tt("/su7_demo/models/sm_speedup.gltf",!1,!0),r=Qe("/su7_demo/textures/t_car_body_AO.raw.jpg"),i=Qe("/su7_demo/textures/t_startroom_light.raw.jpg"),u=Qe("/su7_demo/textures/t_startroom_ao.raw.jpg"),m=Qe("/su7_demo/textures/t_floor_roughness.webp"),M=Qe("/su7_demo/textures/t_floor_normal.webp"),b=fe(f=>f.touch),S=K.useRef({wheel:[],bodyMat:null,floor:null,lightMat:null}),w=K.useRef({speedFactor:0,initColor:new Ee("#fff"),speedupColor:new Ee("#000"),floorColor:new Ee("#fff"),floorNormalSpeed:0,bloomIntensity:1,bloomThreshold:.9,lightOpacity:1,floorEnvIntensity:0,wheelRoughness:1,wheelEnvIntensity:5});m.colorSpace=ct,m.wrapS=m.wrapT=fn,M.colorSpace=ct,M.wrapS=M.wrapT=fn,r.flipY=!1,r.colorSpace=ct,r.minFilter=He,r.magFilter=He,r.channel=1,u.flipY=!1,u.channel=1,u.flipY=!1,u.colorSpace=ct,i.channel=1,i.flipY=!1,i.colorSpace=jr;const R=fe(f=>f.controlDom),z=Hn(f=>f.scene),I=K.useRef(null),y=Yn(f=>f.bodyColor);yt(()=>{if(!S.current.bodyMat)return;const f={color:S.current.bodyMat.color,targetColor:new Ee(y)};Ae.to(f.color,{duration:.35,ease:"power1.out",r:f.targetColor.r,g:f.targetColor.g,b:f.targetColor.b,onUpdate:()=>{S.current.bodyMat.color.set(f.color)}})},{dependencies:[y]}),yt(()=>{var g;const f=w.current,s=S.current.lightMat,l=(g=S.current.floor)==null?void 0:g.material,a=S.current.wheel;if(Ae.killTweensOf(f),Ae.killTweensOf(h.uColor.value),b){const v=Ae.timeline();v.to(h.uColor.value,{duration:1.5,ease:"power1.in",r:f.speedupColor.r,g:f.speedupColor.g,b:f.speedupColor.b}),v.to(f,{duration:1.5,ease:"power1.in",lightOpacity:0,onUpdate:()=>{s&&(s.opacity=f.lightOpacity)}},0),v.to(f,{duration:1.5,ease:"power1.in",speedFactor:1,floorEnvIntensity:.5,bloomIntensity:2,bloomThreshold:.1,wheelRoughness:0,wheelEnvIntensity:20,floorNormalSpeed:1,onUpdate:()=>{A.uSpeedFactor.value=f.speedFactor,l&&(l.envMapIntensity=f.floorEnvIntensity),a.forEach(k=>{const j=k.material;j.roughness=f.wheelRoughness,j.envMapIntensity=f.wheelEnvIntensity}),I.current.intensity=f.bloomIntensity,I.current.luminanceThreshold=f.bloomThreshold}},1)}else{const v=Ae.timeline();v.to(f,{duration:1.5,ease:"power1.in",speedFactor:0,floorEnvIntensity:0,bloomIntensity:1,bloomThreshold:1,wheelRoughness:1,wheelEnvIntensity:5,floorNormalSpeed:0,onUpdate:()=>{A.uSpeedFactor.value=f.speedFactor,l&&(l.envMapIntensity=f.floorEnvIntensity),a.forEach(k=>{const j=k.material;j.roughness=f.wheelRoughness,j.envMapIntensity=f.wheelEnvIntensity}),I.current.intensity=f.bloomIntensity,I.current.luminanceThreshold=f.bloomThreshold}}),v.to(h.uColor.value,{duration:1.5,ease:"power1.in",r:f.initColor.r,g:f.initColor.g,b:f.initColor.b},"-=1"),v.to(f,{duration:1.5,ease:"power1.in",lightOpacity:1,onUpdate:()=>{s&&(s.opacity=f.lightOpacity)}},"-=1")}},{dependencies:[b]});const A=K.useMemo(()=>({uTime:new ye(0),uSpeedFactor:new ye(0)}),[]),h=K.useMemo(()=>({uColor:new ye(new Ee("white")),uReflectMatrix:new ye(new Bt),uReflectTexture:new ye(new Fr),uReflectIntensity:new ye(15),uIntensity:new ye(1),uLevel:new ye(0),uResolution:new ye(new Ut),uTime:new ye(0)}),[]);Dr("mimapLevel",{level:{min:0,max:10,value:2.5,onChange:f=>h.uLevel.value=f},lightOpacity:{value:1,min:0,max:1,onChange:f=>{S.current.lightMat.opacity=f}}});const _=()=>{const f=dn(e),s=dn(t);pn(f),pn(s);const a=f[2].material;a.envMapIntensity=5,a.color=new Ee("#26d6e9"),f.forEach(F=>{if(F.isMesh){const G=F.material;G.aoMap=r}}),f[35].children.forEach(F=>{const G=F,$=G.material;$.envMapIntensity=5,S.current.wheel.push(G)});const v=s[1],k=v.material;k.emissive=new Ee("white"),k.toneMapped=!1,k.transparent=!0,v.material=new kr({color:16777215,side:Ur,transparent:!0,alphaTest:.01});const j=s[2],U=j.material;U.roughnessMap=m,U.normalMap=M,U.aoMap=u,U.lightMap=i,U.envMapIntensity=0;const N=new En({baseMaterial:U,uniforms:h,vertexShader:Jo,fragmentShader:ei,silent:!0});j.material=N,h.uReflectTexture.value=p.texture,h.uReflectMatrix.value=L,S.current.bodyMat=a,S.current.floor=j,S.current.lightMat=v.material},C=K.useMemo(()=>new En({baseMaterial:Be,uniforms:A,vertexShader:Ho,fragmentShader:$o,silent:!0,transparent:!0,depthWrite:!1}),[]);Yo(n,C),K.useLayoutEffect(()=>{_(),h.uResolution.value.set(p.width,p.height),z.environment=x.texture},[]),K.useEffect(()=>{Wn.setState({ready:!0})},[]);const{fbo:x,camera:E}=Er({resolution:512});x.texture.type=vt,x.texture.generateMipmaps=!1,x.texture.minFilter=He,x.texture.magFilter=He;const{matrix:L,renderTarget:p}=Zo(S.current.floor,{resolution:256,ignoreObjects:[S.current.floor,n.scene,t.scene]});return $n((f,s)=>{A.uTime.value+=s,h.uTime.value+=s*w.current.floorNormalSpeed*20,e.scene.visible=!1,E.update(f.gl,z),e.scene.visible=!0,S.current.wheel.forEach(l=>{l.rotateZ(-s*30*w.current.speedFactor)})}),B.jsxs(B.Fragment,{children:[B.jsx(Cr,{domElement:R}),B.jsx("color",{attach:"background",args:["#000"]}),B.jsx("primitive",{object:n.scene}),B.jsx("primitive",{object:e.scene,"rotation-y":Math.PI}),B.jsx("primitive",{object:t.scene}),B.jsx(Vr,{disableNormalPass:!0,frameBufferType:vt,multisampling:2,children:B.jsx(Hr,{luminanceThreshold:.1,ref:I,blendFunction:$r.ADD,mipmapBlur:!0,radius:.2,opacity:.7})})]})};function ni(){const e=fe(t=>t.demand);return B.jsxs(B.Fragment,{children:[B.jsx(zr,{hidden:location.hash!=="#debug",collapsed:!0}),B.jsxs(Ar,{frameloop:e?"never":"always",className:"webgl",dpr:[1,2],camera:{fov:45,near:.1,position:[0,2,5],far:500},gl:{toneMapping:Br},children:[location.hash.includes("debug")&&B.jsx(Pr,{position:"top-left"}),B.jsx(K.Suspense,{fallback:null,children:B.jsx(ti,{})})]})]})}var le=function(){return le=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(t[u]=n[u])}return t},le.apply(this,arguments)};function wt(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,u;r<i;r++)(u||!(r in t))&&(u||(u=Array.prototype.slice.call(t,0,r)),u[r]=t[r]);return e.concat(u||Array.prototype.slice.call(t))}var Q="-ms-",rt="-moz-",X="-webkit-",Zn="comm",Et="rule",Jt="decl",ri="@import",Jn="@keyframes",oi="@layer",er=Math.abs,en=String.fromCharCode,Yt=Object.assign;function ii(e,t){return re(e,0)^45?(((t<<2^re(e,0))<<2^re(e,1))<<2^re(e,2))<<2^re(e,3):0}function tr(e){return e.trim()}function be(e,t){return(e=t.exec(e))?e[0]:e}function H(e,t,n){return e.replace(t,n)}function pt(e,t,n){return e.indexOf(t,n)}function re(e,t){return e.charCodeAt(t)|0}function Ye(e,t,n){return e.slice(t,n)}function we(e){return e.length}function nr(e){return e.length}function tt(e,t){return t.push(e),e}function ai(e,t){return e.map(t).join("")}function An(e,t){return e.filter(function(n){return!be(n,t)})}var Ct=1,We=1,rr=0,pe=0,ee=0,qe="";function At(e,t,n,r,i,u,m,M){return{value:e,root:t,parent:n,type:r,props:i,children:u,line:Ct,column:We,length:m,return:"",siblings:M}}function Ce(e,t){return Yt(At("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ue(e){for(;e.root;)e=Ce(e.root,{children:[e]});tt(e,e.siblings)}function si(){return ee}function ci(){return ee=pe>0?re(qe,--pe):0,We--,ee===10&&(We=1,Ct--),ee}function ve(){return ee=pe<rr?re(qe,pe++):0,We++,ee===10&&(We=1,Ct++),ee}function Te(){return re(qe,pe)}function dt(){return pe}function Pt(e,t){return Ye(qe,e,t)}function Wt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function li(e){return Ct=We=1,rr=we(qe=e),pe=0,[]}function ui(e){return qe="",e}function Rt(e){return tr(Pt(pe-1,Gt(e===91?e+2:e===40?e+1:e)))}function fi(e){for(;(ee=Te())&&ee<33;)ve();return Wt(e)>2||Wt(ee)>3?"":" "}function pi(e,t){for(;--t&&ve()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return Pt(e,dt()+(t<6&&Te()==32&&ve()==32))}function Gt(e){for(;ve();)switch(ee){case e:return pe;case 34:case 39:e!==34&&e!==39&&Gt(ee);break;case 40:e===41&&Gt(e);break;case 92:ve();break}return pe}function di(e,t){for(;ve()&&e+ee!==57;)if(e+ee===84&&Te()===47)break;return"/*"+Pt(t,pe-1)+"*"+en(e===47?e:ve())}function mi(e){for(;!Wt(Te());)ve();return Pt(e,pe)}function hi(e){return ui(mt("",null,null,null,[""],e=li(e),0,[0],e))}function mt(e,t,n,r,i,u,m,M,b){for(var S=0,w=0,R=m,z=0,I=0,y=0,A=1,h=1,_=1,C=0,x="",E=i,L=u,p=r,f=x;h;)switch(y=C,C=ve()){case 40:if(y!=108&&re(f,R-1)==58){pt(f+=H(Rt(C),"&","&\f"),"&\f",er(S?M[S-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:f+=Rt(C);break;case 9:case 10:case 13:case 32:f+=fi(y);break;case 92:f+=pi(dt()-1,7);continue;case 47:switch(Te()){case 42:case 47:tt(gi(di(ve(),dt()),t,n,b),b);break;default:f+="/"}break;case 123*A:M[S++]=we(f)*_;case 125*A:case 59:case 0:switch(C){case 0:case 125:h=0;case 59+w:_==-1&&(f=H(f,/\f/g,"")),I>0&&we(f)-R&&tt(I>32?In(f+";",r,n,R-1,b):In(H(f," ","")+";",r,n,R-2,b),b);break;case 59:f+=";";default:if(tt(p=Pn(f,t,n,S,w,i,M,x,E=[],L=[],R,u),u),C===123)if(w===0)mt(f,t,p,p,E,u,R,M,L);else switch(z===99&&re(f,3)===110?100:z){case 100:case 108:case 109:case 115:mt(e,p,p,r&&tt(Pn(e,p,p,0,0,i,M,x,i,E=[],R,L),L),i,L,R,M,r?E:L);break;default:mt(f,p,p,p,[""],L,0,M,L)}}S=w=I=0,A=_=1,x=f="",R=m;break;case 58:R=1+we(f),I=y;default:if(A<1){if(C==123)--A;else if(C==125&&A++==0&&ci()==125)continue}switch(f+=en(C),C*A){case 38:_=w>0?1:(f+="\f",-1);break;case 44:M[S++]=(we(f)-1)*_,_=1;break;case 64:Te()===45&&(f+=Rt(ve())),z=Te(),w=R=we(x=f+=mi(dt())),C++;break;case 45:y===45&&we(f)==2&&(A=0)}}return u}function Pn(e,t,n,r,i,u,m,M,b,S,w,R){for(var z=i-1,I=i===0?u:[""],y=nr(I),A=0,h=0,_=0;A<r;++A)for(var C=0,x=Ye(e,z+1,z=er(h=m[A])),E=e;C<y;++C)(E=tr(h>0?I[C]+" "+x:H(x,/&\f/g,I[C])))&&(b[_++]=E);return At(e,t,n,i===0?Et:M,b,S,w,R)}function gi(e,t,n,r){return At(e,t,n,Zn,en(si()),Ye(e,2,-2),0,r)}function In(e,t,n,r,i){return At(e,t,n,Jt,Ye(e,0,r),Ye(e,r+1,-1),r,i)}function or(e,t,n){switch(ii(e,t)){case 5103:return X+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return X+e+e;case 4789:return rt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return X+e+rt+e+Q+e+e;case 5936:switch(re(e,t+11)){case 114:return X+e+Q+H(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return X+e+Q+H(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return X+e+Q+H(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return X+e+Q+e+e;case 6165:return X+e+Q+"flex-"+e+e;case 5187:return X+e+H(e,/(\w+).+(:[^]+)/,X+"box-$1$2"+Q+"flex-$1$2")+e;case 5443:return X+e+Q+"flex-item-"+H(e,/flex-|-self/g,"")+(be(e,/flex-|baseline/)?"":Q+"grid-row-"+H(e,/flex-|-self/g,""))+e;case 4675:return X+e+Q+"flex-line-pack"+H(e,/align-content|flex-|-self/g,"")+e;case 5548:return X+e+Q+H(e,"shrink","negative")+e;case 5292:return X+e+Q+H(e,"basis","preferred-size")+e;case 6060:return X+"box-"+H(e,"-grow","")+X+e+Q+H(e,"grow","positive")+e;case 4554:return X+H(e,/([^-])(transform)/g,"$1"+X+"$2")+e;case 6187:return H(H(H(e,/(zoom-|grab)/,X+"$1"),/(image-set)/,X+"$1"),e,"")+e;case 5495:case 3959:return H(e,/(image-set\([^]*)/,X+"$1$`$1");case 4968:return H(H(e,/(.+:)(flex-)?(.*)/,X+"box-pack:$3"+Q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+X+e+e;case 4200:if(!be(e,/flex-|baseline/))return Q+"grid-column-align"+Ye(e,t)+e;break;case 2592:case 3360:return Q+H(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,be(r.props,/grid-\w+-end/)})?~pt(e+(n=n[t].value),"span",0)?e:Q+H(e,"-start","")+e+Q+"grid-row-span:"+(~pt(n,"span",0)?be(n,/\d+/):+be(n,/\d+/)-+be(e,/\d+/))+";":Q+H(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return be(r.props,/grid-\w+-start/)})?e:Q+H(H(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return H(e,/(.+)-inline(.+)/,X+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(we(e)-1-t>6)switch(re(e,t+1)){case 109:if(re(e,t+4)!==45)break;case 102:return H(e,/(.+:)(.+)-([^]+)/,"$1"+X+"$2-$3$1"+rt+(re(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~pt(e,"stretch",0)?or(H(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return H(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,u,m,M,b,S){return Q+i+":"+u+S+(m?Q+i+"-span:"+(M?b:+b-+u)+S:"")+e});case 4949:if(re(e,t+6)===121)return H(e,":",":"+X)+e;break;case 6444:switch(re(e,re(e,14)===45?18:11)){case 120:return H(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+X+(re(e,14)===45?"inline-":"")+"box$3$1"+X+"$2$3$1"+Q+"$2box$3")+e;case 100:return H(e,":",":"+Q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return H(e,"scroll-","scroll-snap-")+e}return e}function _t(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function vi(e,t,n,r){switch(e.type){case oi:if(e.children.length)break;case ri:case Jt:return e.return=e.return||e.value;case Zn:return"";case Jn:return e.return=e.value+"{"+_t(e.children,r)+"}";case Et:if(!we(e.value=e.props.join(",")))return""}return we(n=_t(e.children,r))?e.return=e.value+"{"+n+"}":""}function yi(e){var t=nr(e);return function(n,r,i,u){for(var m="",M=0;M<t;M++)m+=e[M](n,r,i,u)||"";return m}}function xi(e){return function(t){t.root||(t=t.return)&&e(t)}}function wi(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Jt:e.return=or(e.value,e.length,n);return;case Jn:return _t([Ce(e,{value:H(e.value,"@","@"+X)})],r);case Et:if(e.length)return ai(n=e.props,function(i){switch(be(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ue(Ce(e,{props:[H(i,/:(read-\w+)/,":"+rt+"$1")]})),Ue(Ce(e,{props:[i]})),Yt(e,{props:An(n,r)});break;case"::placeholder":Ue(Ce(e,{props:[H(i,/:(plac\w+)/,":"+X+"input-$1")]})),Ue(Ce(e,{props:[H(i,/:(plac\w+)/,":"+rt+"$1")]})),Ue(Ce(e,{props:[H(i,/:(plac\w+)/,Q+"input-$1")]})),Ue(Ce(e,{props:[i]})),Yt(e,{props:An(n,r)});break}return""})}}var _i={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ue={},Ge=typeof process<"u"&&ue!==void 0&&(ue.REACT_APP_SC_ATTR||ue.SC_ATTR)||"data-styled",ir="active",ar="data-styled-version",It="6.1.8",tn=`/*!sc*/
`,nn=typeof window<"u"&&"HTMLElement"in window,bi=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ue!==void 0&&ue.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ue.REACT_APP_SC_DISABLE_SPEEDY!==""?ue.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ue.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ue!==void 0&&ue.SC_DISABLE_SPEEDY!==void 0&&ue.SC_DISABLE_SPEEDY!==""&&ue.SC_DISABLE_SPEEDY!=="false"&&ue.SC_DISABLE_SPEEDY),Dt=Object.freeze([]),Ke=Object.freeze({});function Si(e,t,n){return n===void 0&&(n=Ke),e.theme!==n.theme&&e.theme||t||n.theme}var sr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Mi=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ei=/(^-|-$)/g;function Dn(e){return e.replace(Mi,"-").replace(Ei,"")}var Ci=/(a)(d)/gi,ut=52,zn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Kt(e){var t,n="";for(t=Math.abs(e);t>ut;t=t/ut|0)n=zn(t%ut)+n;return(zn(t%ut)+n).replace(Ci,"$1-$2")}var Nt,cr=5381,$e=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},lr=function(e){return $e(cr,e)};function Ai(e){return Kt(lr(e)>>>0)}function Pi(e){return e.displayName||e.name||"Component"}function jt(e){return typeof e=="string"&&!0}var ur=typeof Symbol=="function"&&Symbol.for,fr=ur?Symbol.for("react.memo"):60115,Ii=ur?Symbol.for("react.forward_ref"):60112,Di={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},zi={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ti=((Nt={})[Ii]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nt[fr]=pr,Nt);function Tn(e){return("type"in(t=e)&&t.type.$$typeof)===fr?pr:"$$typeof"in e?Ti[e.$$typeof]:Di;var t}var Li=Object.defineProperty,Oi=Object.getOwnPropertyNames,Ln=Object.getOwnPropertySymbols,Ri=Object.getOwnPropertyDescriptor,Ni=Object.getPrototypeOf,On=Object.prototype;function dr(e,t,n){if(typeof t!="string"){if(On){var r=Ni(t);r&&r!==On&&dr(e,r,n)}var i=Oi(t);Ln&&(i=i.concat(Ln(t)));for(var u=Tn(e),m=Tn(t),M=0;M<i.length;++M){var b=i[M];if(!(b in zi||n&&n[b]||m&&b in m||u&&b in u)){var S=Ri(t,b);try{Li(e,b,S)}catch{}}}}return e}function Xe(e){return typeof e=="function"}function rn(e){return typeof e=="object"&&"styledComponentId"in e}function ze(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Rn(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function ot(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Xt(e,t,n){if(n===void 0&&(n=!1),!n&&!ot(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Xt(e[r],t[r]);else if(ot(t))for(var r in t)e[r]=Xt(e[r],t[r]);return e}function on(e,t){Object.defineProperty(e,"toString",{value:t})}function it(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ji=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,u=i;t>=u;)if((u<<=1)<0)throw it(16,"".concat(t));this.groupSizes=new Uint32Array(u),this.groupSizes.set(r),this.length=u;for(var m=i;m<u;m++)this.groupSizes[m]=0}for(var M=this.indexOfGroup(t+1),b=(m=0,n.length);m<b;m++)this.tag.insertRule(M,n[m])&&(this.groupSizes[t]++,M++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var u=r;u<i;u++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),u=i+r,m=i;m<u;m++)n+="".concat(this.tag.getRule(m)).concat(tn);return n},e}(),ht=new Map,bt=new Map,gt=1,ft=function(e){if(ht.has(e))return ht.get(e);for(;bt.has(gt);)gt++;var t=gt++;return ht.set(e,t),bt.set(t,e),t},Fi=function(e,t){gt=t+1,ht.set(e,t),bt.set(t,e)},ki="style[".concat(Ge,"][").concat(ar,'="').concat(It,'"]'),Ui=new RegExp("^".concat(Ge,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Bi=function(e,t,n){for(var r,i=n.split(","),u=0,m=i.length;u<m;u++)(r=i[u])&&e.registerName(t,r)},Vi=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(tn),i=[],u=0,m=r.length;u<m;u++){var M=r[u].trim();if(M){var b=M.match(Ui);if(b){var S=0|parseInt(b[1],10),w=b[2];S!==0&&(Fi(w,S),Bi(e,w,b[3]),e.getTag().insertRules(S,i)),i.length=0}else i.push(M)}}};function Hi(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var mr=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(M){var b=Array.from(M.querySelectorAll("style[".concat(Ge,"]")));return b[b.length-1]}(n),u=i!==void 0?i.nextSibling:null;r.setAttribute(Ge,ir),r.setAttribute(ar,It);var m=Hi();return m&&r.setAttribute("nonce",m),n.insertBefore(r,u),r},$i=function(){function e(t){this.element=mr(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,u=r.length;i<u;i++){var m=r[i];if(m.ownerNode===n)return m}throw it(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Yi=function(){function e(t){this.element=mr(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Wi=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Nn=nn,Gi={isServer:!nn,useCSSOMInjection:!bi},hr=function(){function e(t,n,r){t===void 0&&(t=Ke),n===void 0&&(n={});var i=this;this.options=le(le({},Gi),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&nn&&Nn&&(Nn=!1,function(u){for(var m=document.querySelectorAll(ki),M=0,b=m.length;M<b;M++){var S=m[M];S&&S.getAttribute(Ge)!==ir&&(Vi(u,S),S.parentNode&&S.parentNode.removeChild(S))}}(this)),on(this,function(){return function(u){for(var m=u.getTag(),M=m.length,b="",S=function(R){var z=function(_){return bt.get(_)}(R);if(z===void 0)return"continue";var I=u.names.get(z),y=m.getGroup(R);if(I===void 0||y.length===0)return"continue";var A="".concat(Ge,".g").concat(R,'[id="').concat(z,'"]'),h="";I!==void 0&&I.forEach(function(_){_.length>0&&(h+="".concat(_,","))}),b+="".concat(y).concat(A,'{content:"').concat(h,'"}').concat(tn)},w=0;w<M;w++)S(w);return b}(i)})}return e.registerId=function(t){return ft(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(le(le({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Wi(i):r?new $i(i):new Yi(i)}(this.options),new ji(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ft(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ft(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ft(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ki=/&/g,Xi=/^\s*\/\/.*$/gm;function gr(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=gr(n.children,t)),n})}function qi(e){var t,n,r,i=e===void 0?Ke:e,u=i.options,m=u===void 0?Ke:u,M=i.plugins,b=M===void 0?Dt:M,S=function(z,I,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):z},w=b.slice();w.push(function(z){z.type===Et&&z.value.includes("&")&&(z.props[0]=z.props[0].replace(Ki,n).replace(r,S))}),m.prefix&&w.push(wi),w.push(vi);var R=function(z,I,y,A){I===void 0&&(I=""),y===void 0&&(y=""),A===void 0&&(A="&"),t=A,n=I,r=new RegExp("\\".concat(n,"\\b"),"g");var h=z.replace(Xi,""),_=hi(y||I?"".concat(y," ").concat(I," { ").concat(h," }"):h);m.namespace&&(_=gr(_,m.namespace));var C=[];return _t(_,yi(w.concat(xi(function(x){return C.push(x)})))),C};return R.hash=b.length?b.reduce(function(z,I){return I.name||it(15),$e(z,I.name)},cr).toString():"",R}var Qi=new hr,qt=qi(),vr=Oe.createContext({shouldForwardProp:void 0,styleSheet:Qi,stylis:qt});vr.Consumer;Oe.createContext(void 0);function jn(){return K.useContext(vr)}var Zi=function(){function e(t,n){var r=this;this.inject=function(i,u){u===void 0&&(u=qt);var m=r.name+u.hash;i.hasNameForId(r.id,m)||i.insertRules(r.id,m,u(r.rules,m,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,on(this,function(){throw it(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=qt),this.name+t.hash},e}(),Ji=function(e){return e>="A"&&e<="Z"};function Fn(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Ji(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var yr=function(e){return e==null||e===!1||e===""},xr=function(e){var t,n,r=[];for(var i in e){var u=e[i];e.hasOwnProperty(i)&&!yr(u)&&(Array.isArray(u)&&u.isCss||Xe(u)?r.push("".concat(Fn(i),":"),u,";"):ot(u)?r.push.apply(r,wt(wt(["".concat(i," {")],xr(u),!1),["}"],!1)):r.push("".concat(Fn(i),": ").concat((t=i,(n=u)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in _i||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Le(e,t,n,r){if(yr(e))return[];if(rn(e))return[".".concat(e.styledComponentId)];if(Xe(e)){if(!Xe(u=e)||u.prototype&&u.prototype.isReactComponent||!t)return[e];var i=e(t);return Le(i,t,n,r)}var u;return e instanceof Zi?n?(e.inject(n,r),[e.getName(r)]):[e]:ot(e)?xr(e):Array.isArray(e)?Array.prototype.concat.apply(Dt,e.map(function(m){return Le(m,t,n,r)})):[e.toString()]}function ea(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Xe(n)&&!rn(n))return!1}return!0}var ta=lr(It),na=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ea(t),this.componentId=n,this.baseHash=$e(ta,n),this.baseStyle=r,hr.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ze(i,this.staticRulesId);else{var u=Rn(Le(this.rules,t,n,r)),m=Kt($e(this.baseHash,u)>>>0);if(!n.hasNameForId(this.componentId,m)){var M=r(u,".".concat(m),void 0,this.componentId);n.insertRules(this.componentId,m,M)}i=ze(i,m),this.staticRulesId=m}else{for(var b=$e(this.baseHash,r.hash),S="",w=0;w<this.rules.length;w++){var R=this.rules[w];if(typeof R=="string")S+=R;else if(R){var z=Rn(Le(R,t,n,r));b=$e(b,z+w),S+=z}}if(S){var I=Kt(b>>>0);n.hasNameForId(this.componentId,I)||n.insertRules(this.componentId,I,r(S,".".concat(I),void 0,this.componentId)),i=ze(i,I)}}return i},e}(),wr=Oe.createContext(void 0);wr.Consumer;var Ft={};function ra(e,t,n){var r=rn(e),i=e,u=!jt(e),m=t.attrs,M=m===void 0?Dt:m,b=t.componentId,S=b===void 0?function(E,L){var p=typeof E!="string"?"sc":Dn(E);Ft[p]=(Ft[p]||0)+1;var f="".concat(p,"-").concat(Ai(It+p+Ft[p]));return L?"".concat(L,"-").concat(f):f}(t.displayName,t.parentComponentId):b,w=t.displayName,R=w===void 0?function(E){return jt(E)?"styled.".concat(E):"Styled(".concat(Pi(E),")")}(e):w,z=t.displayName&&t.componentId?"".concat(Dn(t.displayName),"-").concat(t.componentId):t.componentId||S,I=r&&i.attrs?i.attrs.concat(M).filter(Boolean):M,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var A=i.shouldForwardProp;if(t.shouldForwardProp){var h=t.shouldForwardProp;y=function(E,L){return A(E,L)&&h(E,L)}}else y=A}var _=new na(n,z,r?i.componentStyle:void 0);function C(E,L){return function(p,f,s){var l=p.attrs,a=p.componentStyle,g=p.defaultProps,v=p.foldedComponentIds,k=p.styledComponentId,j=p.target,U=Oe.useContext(wr),N=jn(),F=p.shouldForwardProp||N.shouldForwardProp,G=Si(f,U,g)||Ke,$=function(Se,_e,Ie){for(var T,o=le(le({},_e),{className:void 0,theme:Ie}),c=0;c<Se.length;c+=1){var d=Xe(T=Se[c])?T(o):T;for(var P in d)o[P]=P==="className"?ze(o[P],d[P]):P==="style"?le(le({},o[P]),d[P]):d[P]}return _e.className&&(o.className=ze(o.className,_e.className)),o}(l,f,G),Y=$.as||j,oe={};for(var de in $)$[de]===void 0||de[0]==="$"||de==="as"||de==="theme"&&$.theme===G||(de==="forwardedAs"?oe.as=$.forwardedAs:F&&!F(de,Y)||(oe[de]=$[de]));var Pe=function(Se,_e){var Ie=jn(),T=Se.generateAndInjectStyles(_e,Ie.styleSheet,Ie.stylis);return T}(a,$),Re=ze(v,k);return Pe&&(Re+=" "+Pe),$.className&&(Re+=" "+$.className),oe[jt(Y)&&!sr.has(Y)?"class":"className"]=Re,oe.ref=s,K.createElement(Y,oe)}(x,E,L)}C.displayName=R;var x=Oe.forwardRef(C);return x.attrs=I,x.componentStyle=_,x.displayName=R,x.shouldForwardProp=y,x.foldedComponentIds=r?ze(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=z,x.target=r?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=r?function(L){for(var p=[],f=1;f<arguments.length;f++)p[f-1]=arguments[f];for(var s=0,l=p;s<l.length;s++)Xt(L,l[s],!0);return L}({},i.defaultProps,E):E}}),on(x,function(){return".".concat(x.styledComponentId)}),u&&dr(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function kn(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Un=function(e){return Object.assign(e,{isCss:!0})};function oa(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Xe(e)||ot(e))return Un(Le(kn(Dt,wt([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Le(r):Un(Le(kn(r,t)))}function Qt(e,t,n){if(n===void 0&&(n=Ke),!t)throw it(1,t);var r=function(i){for(var u=[],m=1;m<arguments.length;m++)u[m-1]=arguments[m];return e(t,n,oa.apply(void 0,wt([i],u,!1)))};return r.attrs=function(i){return Qt(e,t,le(le({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Qt(e,t,le(le({},n),i))},r}var _r=function(e){return Qt(ra,e)},zt=_r;sr.forEach(function(e){zt[e]=_r(e)});const ia=zt.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    /* pointer-events: none; */
    .clickBtn {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
    }
`,aa=(e,t)=>{const{type:n,payload:r}=t;switch(n){case"show-load":return{...e,load:!0};case"hide-load":return{...e,load:!1};case"show-game":return{...e,game:!0};case"hide-game":return{...e,game:!1};default:return e}},sa={load:!0,game:!1},ca="/su7_demo/images/b1.webp",la="/su7_demo/images/b2.webp",ua="/su7_demo/images/b3.webp",fa="/su7_demo/images/b4.webp",pa="/su7_demo/images/b5.webp",da="/su7_demo/images/b6.webp",ma="/su7_demo/images/b7.webp",ha="/su7_demo/images/b8.webp",ga="/su7_demo/images/b9.webp",va=[{src:ca,color:"#26d6e9"},{src:la,color:"#444c3c"},{src:ua,color:"#5d5d5d"},{src:fa,color:"#8a8a8a"},{src:pa,color:"#3e3543"},{src:da,color:"#822817"},{src:ma,color:"#354860"},{src:ha,color:"#273647"},{src:ga,color:"#121117"}],ya=zt.div`
    width: 100%;
    height: 100%;

    .control{
        width:100%;
        height:100%
    }

   .container{
    position: absolute;
    left:50%;
    transform:translate(-50%);
    bottom:100px;
    background-color:#ccc3;
    border-radius: 30px;
    display: flex;
    align-items: center;
   }

   .color-item::after{
    content: "";
    display: block;
    position:relative;
    left:50%;
    top:50%;  
    transform:translate(-50%,-50%);  
    width:38px;
    height:38px;
    border-radius:50%;
    border:2px solid #fff;
   }
`,xa=()=>{const e=K.useRef(null),t=K.useRef(null),n=K.useRef(!1),[r,i]=K.useState(0);yt(()=>{Ae.set(t.current,{opacity:0}),Ae.to(t.current,{opacity:1,duration:.5,ease:"power2.in",onComplete:()=>{n.current=!0}})}),K.useEffect(()=>{fe.setState({controlDom:e.current})},[]);const u=(m,M)=>{fe.setState({touch:M})};return B.jsx(B.Fragment,{children:B.jsxs(ya,{className:"game",ref:t,children:[B.jsx("div",{className:"control",ref:e,onPointerDown:m=>u(m,!0),onPointerUp:m=>u(m,!1)}),B.jsx("div",{className:"container",children:va.map((m,M)=>B.jsx("div",{className:r===M?"color-item":"",style:{backgroundImage:`url(${m.src})`,width:"32px",height:"32px",borderRadius:"50%",margin:"8px",backgroundSize:"100% 100%",cursor:"pointer"},onClick:b=>{n.current&&(i(M),Yn.setState({bodyColor:`${m.color}`}))}},M))})]})})},wa=zt.div`
  width: 100%;
  height: 100%;

  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;

  .loadstr {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #35c4f0;
    font-family: Helvetica, Arial, sans-serif;
    z-index: 10;
    letter-spacing: 2px;
    font-size: 25px;
    /* font-weight: bold; */
  }

  .loading {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
    animation: loading 0.5s linear infinite;
  }

  .loading:before {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border-radius: 50%;
    background-color: #000;
    z-index: 1;
  }

  .loading span {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
  }

  .loading span:nth-child(1) {
    filter: blur(5px);
  }

  .loading span:nth-child(2) {
    filter: blur(10px);
  }

  .loading span:nth-child(3) {
    filter: blur(25px);
  }

  .loading span:nth-child(4) {
    filter: blur(50px);
  }

  @keyframes loading {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .loadstr > span {
    opacity: 1;
  }

  .loadstr > span:first-of-type {
    animation: letterFade 3s ease-in-out infinite;
    animation-delay: 0.1s;
  }

  .loadstr > span:nth-of-type(2) {
    animation: letterFade 3s ease-in-out infinite;
    animation-delay: 0.3s;
  }

  .loadstr > span:nth-of-type(3) {
    animation: letterFade 3s ease-in-out infinite;
    animation-delay: 0.5s;
  }

  .loadstr > span:nth-of-type(4) {
    animation: letterFade 3s ease-in-out infinite;
    animation-delay: 0.7s;
  }

  .loadstr > span:nth-of-type(5) {
    animation: letterFade 3s ease-in-out infinite;
    animation-delay: 0.7s;
  }

  .loadstr > span:nth-of-type(6) {
    animation: letterFade 3s ease-in-out infinite;
    animation-delay: 0.7s;
  }

  .loadstr > span:last-of-type {
    animation: letterFade 3s ease-in-out infinite;
    animation-delay: 0.9s;
  }

  @keyframes letterFade {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`,Bn={getSystem:()=>{const e=navigator.userAgent.toLowerCase();return/(iphone|ipad|ipod|ios)/i.test(e)||/android/i.test(e)||/adr/i.test(e)?"mobile":"pc"}},_a=K.memo(({emit:e})=>{const t=K.useRef(null),n=Wn(M=>M.ready),{contextSafe:r}=yt(),[i,u]=K.useState(Bn.getSystem);K.useEffect(()=>{const M=()=>{const b=Bn.getSystem()==="pc"?"pc":"mobile";u(b)};return window.addEventListener("resize",M),()=>{window.removeEventListener("resize",M)}},[]),K.useEffect(()=>{n&&m()},[n]);const m=r(()=>{fe.setState({demand:!1}),Ae.to(t.current,{opacity:0,duration:.35,delay:1,ease:"none",onComplete:()=>{fe.setState({audioAllowed:!0}),e("hide-load"),e("show-game")}}),fe.setState({begin:!0})});return B.jsxs(wa,{ref:t,children:[B.jsxs("div",{className:"loading",children:[B.jsx("span",{}),B.jsx("span",{}),B.jsx("span",{}),B.jsx("span",{})]}),B.jsxs("div",{className:"loadstr",children:[B.jsx("span",{children:"L"}),B.jsx("span",{children:"O"}),B.jsx("span",{children:"A"}),B.jsx("span",{children:"D"}),B.jsx("span",{children:"I"}),B.jsx("span",{children:"N"}),B.jsx("span",{children:"G"})]})]})});function ba(){const{isMute:e,audioAllowed:t,browserHidden:n}=fe(b=>({isMute:b.isMute,audioAllowed:b.audioAllowed,browserHidden:b.browserHidden})),[r,i]=K.useReducer(aa,sa),u=K.useRef(null);K.useEffect(()=>{},[t]);const m=K.useCallback((b,S)=>{i({type:b,payload:S})},[]),M=b=>{fe.setState({touch:!1})};return B.jsx(B.Fragment,{children:B.jsxs(ia,{id:"panel",ref:u,onPointerUp:M,children:[r.game&&B.jsx(xa,{}),r.load&&B.jsx(_a,{emit:m})]})})}const Ve=document;let nt="hidden";const xe=e=>{Ve[nt]||e.type=="focusout"||e.type=="blur"?fe.setState({browserHidden:!0}):fe.setState({browserHidden:!1})};let Vn=!1;const Sa={init:()=>{Vn||(Vn=!0,"hidden"in Ve?(nt="hidden",window.addEventListener("visibilitychange",xe)):"mozHidden"in Ve?(nt="mozHidden",window.addEventListener("mozvisibilitychange",xe)):"webkitHidden"in Ve?(nt="webkitHidden",window.addEventListener("webkitvisibilitychange",xe)):"msHidden"in Ve?(nt="msHidden",window.addEventListener("msvisibilitychange",xe)):"onfocusin"in Ve?(window.addEventListener("focusin",xe),window.addEventListener("focusout",xe)):(window.addEventListener("pageshow",xe),window.addEventListener("pagehide",xe),window.addEventListener("focus",xe),window.addEventListener("blur",xe)))}};function Ma(){return K.useEffect(()=>{Vt.shared.init(),Sa.init()},[]),B.jsxs(B.Fragment,{children:[B.jsx(ni,{}),B.jsx(ba,{})]})}const Ea=document.getElementById("root");Ir.createRoot(Ea).render(B.jsx(Oe.StrictMode,{children:B.jsx(Ma,{})}));

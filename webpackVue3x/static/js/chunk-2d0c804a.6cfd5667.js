(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c804a"],{"52a8":function(e,t,c){"use strict";c.r(t);var o=c("c553"),a=Object(o["defineComponent"])({__name:"watchEffect",setup(e){let t=Object(o["ref"])(0);const c=()=>{t.value++},a=Object(o["ref"])(""),n=()=>{a.value=(new Date).toLocaleString()},l=Object(o["watchEffect"])(async e=>{console.log(t.value),e(()=>{t.value+=8,console.log("ClearFirst"+t.value)})});return setTimeout(()=>l(),3e4),(e,l)=>{const r=Object(o["resolveComponent"])("el-button");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createTextVNode"])(" age:"+Object(o["toDisplayString"])(Object(o["unref"])(t))+" ",1),Object(o["createVNode"])(r,{onClick:c},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("增加")]),_:1}),Object(o["createTextVNode"])(" date:"+Object(o["toDisplayString"])(a.value)+" ",1),Object(o["createVNode"])(r,{onClick:n},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("增加")]),_:1})],64)}}});const n=a;t["default"]=n}}]);
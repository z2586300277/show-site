(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c9fb17c"],{"34b0":function(e,t,c){"use strict";c.r(t);var l=c("c553");const n=e=>(Object(l["pushScopeId"])("data-v-6d4992b9"),e=e(),Object(l["popScopeId"])(),e),a={class:"mapControl",draggable:"true"},o=n(()=>Object(l["createElementVNode"])("div",{class:"header"},"3dtiles模型",-1)),r=n(()=>Object(l["createElementVNode"])("div",{class:"title"},"右键选则物体:当前点击坐标为",-1)),d={class:"flex"},b={class:"flex"},s={class:"flex"},u={class:"flex"},m={class:"flex"},j={class:"gird"},O={class:"card"},i={class:"box"},p={ref:"cesiumDom"};var v=Object(l["defineComponent"])({__name:"TilesControls",props:["currentPoint"],emits:["controlsThree"],setup(e,{emit:t}){let c=Object(l["ref"])(2),n=Object(l["ref"])("/3dtiles/guangfu/tileset.json"),v=Object(l["ref"])(),V=Object(l["ref"])("精灵"),f=Object(l["ref"])(.18);const N=t,k=Object(l["ref"])([{name:"加载场景",event:"loadScene",url:n},{name:"销毁场景",event:"destroyScene"},{name:"打开GUI",event:"createGUI"},{name:"销毁GUI",event:"destroyGUI"},{name:"双击绘制",event:"dbClickDraw",textureMap:v},{name:"完成绘制",event:"completeDraw"},{name:"增加描边轮廓",event:"outLinePass"},{name:"随机立方体",event:"randomCube",cubeNum:c,textureMap:v},{name:"Gsap动画",event:"gsapFly"},{name:"tween动画",event:"tweenFly"},{name:"当前点增加精灵",event:"spriteLegend",spriteText:V,spriteSize:f},{name:"更新场景大小",event:"updateSize"},{name:"天空球",event:"sphereSky"},{name:"天空盒",event:"boxSky"},{name:"着色器天空",event:"shaderSky"},{name:"设置地面",event:"setFloor"},{name:"合并物体",event:"geometryMerage"}]);return(t,x)=>{const h=Object(l["resolveComponent"])("el-input"),E=Object(l["resolveComponent"])("el-button"),g=Object(l["resolveDirective"])("drag");return Object(l["openBlock"])(),Object(l["createElementBlock"])(l["Fragment"],null,[(Object(l["openBlock"])(),Object(l["createBlock"])(l["Teleport"],{to:"#app"},[Object(l["withDirectives"])((Object(l["openBlock"])(),Object(l["createElementBlock"])("div",a,[o,r,Object(l["createElementVNode"])("div",null,Object(l["toDisplayString"])(e.currentPoint),1),Object(l["createElementVNode"])("div",d,[Object(l["createTextVNode"])("模型地址:"),Object(l["createVNode"])(h,{modelValue:Object(l["unref"])(n),"onUpdate:modelValue":x[0]||(x[0]=e=>Object(l["isRef"])(n)?n.value=e:n=e),placeholder:"请输入内容"},null,8,["modelValue"])]),Object(l["createElementVNode"])("div",b,[Object(l["createTextVNode"])("贴图路径:"),Object(l["createVNode"])(h,{modelValue:Object(l["unref"])(v),"onUpdate:modelValue":x[1]||(x[1]=e=>Object(l["isRef"])(v)?v.value=e:v=e),placeholder:"请输入内容"},null,8,["modelValue"])]),Object(l["createElementVNode"])("div",s,[Object(l["createTextVNode"])("立方体数:"),Object(l["createVNode"])(h,{modelValue:Object(l["unref"])(c),"onUpdate:modelValue":x[2]||(x[2]=e=>Object(l["isRef"])(c)?c.value=e:c=e),type:"number",placeholder:"请输入内容"},null,8,["modelValue"])]),Object(l["createElementVNode"])("div",u,[Object(l["createTextVNode"])("精灵文字:"),Object(l["createVNode"])(h,{modelValue:Object(l["unref"])(V),"onUpdate:modelValue":x[3]||(x[3]=e=>Object(l["isRef"])(V)?V.value=e:V=e),placeholder:"请输入内容"},null,8,["modelValue"])]),Object(l["createElementVNode"])("div",m,[Object(l["createTextVNode"])("精灵大小:"),Object(l["createVNode"])(h,{modelValue:Object(l["unref"])(f),"onUpdate:modelValue":x[4]||(x[4]=e=>Object(l["isRef"])(f)?f.value=e:f=e),type:"number",placeholder:"请输入内容"},null,8,["modelValue"])]),Object(l["createElementVNode"])("div",j,[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(k.value,(e,t)=>(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",O,[Object(l["createVNode"])(E,{onClick:t=>N("controlsThree",e)},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.name),1)]),_:2},1032,["onClick"])]))),256))])])),[[g]])])),Object(l["createElementVNode"])("div",i,[Object(l["createElementVNode"])("div",p,null,512)])],64)}}}),V=(c("7d2c"),c("6b78")),f=c.n(V);const N=f()(v,[["__scopeId","data-v-6d4992b9"]]);t["default"]=N},"7d2c":function(e,t,c){"use strict";c("d22d")},d22d:function(e,t,c){}}]);
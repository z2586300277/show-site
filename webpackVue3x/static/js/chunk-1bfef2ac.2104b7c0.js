(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bfef2ac"],{"11a8":function(e,t,n){},"22e7":function(e,t,n){"use strict";n.r(t);n("2b12");var o=n("c553"),a=n("2745"),i=Object(o["defineComponent"])({__name:"ThreeL",setup(e){let t,n,i,d=Object(o["ref"])(null);window.innerWidth,window.innerHeight;const c=[];function r(e){const o=new a["PerspectiveCamera"](75,e.value.clientWidth/e.value.clientHeight,1,1e3);o.position.z=1e3,t=new a["Scene"],t.fog=new a["FogExp2"](0,8e-4),n=new a["WebGLRenderer"],n.setSize(e.value.clientWidth,e.value.clientHeight),n.render(t,o),e.value.appendChild(n.domElement);const d=new a["BufferGeometry"],r=[],f=new a["TextureLoader"],l=f.load("https://img0.baidu.com/it/u=1302187753,1022585962&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1700845200&t=1b8daee5e36b1f53be4bed86a1f2095d"),u=f.load("https://img0.baidu.com/it/u=1302187753,1022585962&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1700845200&t=1b8daee5e36b1f53be4bed86a1f2095d"),b=f.load("https://img0.baidu.com/it/u=1302187753,1022585962&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1700845200&t=1b8daee5e36b1f53be4bed86a1f2095d"),m=f.load("https://img0.baidu.com/it/u=1302187753,1022585962&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1700845200&t=1b8daee5e36b1f53be4bed86a1f2095d"),p=f.load("https://img0.baidu.com/it/u=1302187753,1022585962&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1700845200&t=1b8daee5e36b1f53be4bed86a1f2095d");for(let t=0;t<1e4;t++){const e=2e3*Math.random()-1e3,t=2e3*Math.random()-1e3,n=2e3*Math.random()-1e3;r.push(e,t,n)}d.setAttribute("position",new a["Float32BufferAttribute"](r,3)),i=[[[1,.2,.5],u,20],[[.95,.1,.5],b,15],[[.9,.05,.5],l,10],[[.85,0,.5],p,8],[[.8,0,.5],m,5]];for(let n=0;n<i.length;n++){const e=i[n][0],o=i[n][1],r=i[n][2];c[n]=new a["PointsMaterial"]({size:r,map:o,blending:a["AdditiveBlending"],depthTest:!1,transparent:!0}),c[n].color.setHSL(e[0],e[1],e[2]);const s=new a["Points"](d,c[n]);s.rotation.x=6*Math.random(),s.rotation.y=6*Math.random(),s.rotation.z=6*Math.random(),t.add(s)}s()}function s(){requestAnimationFrame(s),f()}function f(){const e=5e-5*Date.now();for(let n=0;n<t.children.length;n++){const o=t.children[n];o instanceof a["Points"]&&(o.rotation.y=e*(n<4?n+1:-(n+1)))}for(let t=0;t<c.length;t++){const n=i[t][0],o=360*(n[0]+e)%360/360;c[t].color.setHSL(o,n[1],n[2])}}return Object(o["onMounted"])(()=>r(d)),(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createTextVNode"])(" 粒子背景 "),Object(o["createElementVNode"])("div",{class:"lizi",ref_key:"threeDom",ref:d},null,512)],64))}}),d=(n("34ef"),n("6b78")),c=n.n(d);const r=c()(i,[["__scopeId","data-v-e260b146"]]);t["default"]=r},"34ef":function(e,t,n){"use strict";n("11a8")}}]);
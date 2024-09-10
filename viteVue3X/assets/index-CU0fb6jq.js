import{d as C,r as T,o as b,a as w,c as S,_ as R,e as H,f as O,g as ee,h as me,b as oe,i as x,w as y,j as _,F as ye,u as _e,s as we,k as se,l as Se,m as Ce,n as Te,E as be}from"./index-1scugG01.js";import{S as z,P as U,W as P,A as B,C as X,a as Re,b as F,D as K,M as W,c as te,V as p,d as ie,B as G,e as ze,T as N,f as $,U as V,g as k,h as ne,i as fe,j as Ue,H as Pe,k as pe,l as le,m as Ee,n as Be,o as Ie,p as Ae,q as D,r as Fe,F as ke,L as We,s as ce,t as de,R as He,u as Ne,v as Le,w as Ge,x as $e,y as Ve,z as qe,N as je,E as Qe}from"./three.module-CVsY17GA.js";import{s as I,l as q,a as j,b as Q,g as he,c as Z,d as J,e as re,f as Xe,h as Ye,i as Ke,R as Je}from"./threeApi-DOkTKUH7.js";import{c as L}from"./GUI-B53Psxen.js";import{O as Ze,P as ge,F as xe,E as Me}from"./EffectComposer-CXsZCJ3S.js";const De=C({__name:"point",setup(h){const n=T();b(()=>d());function d(){var o=n.value,i=o.getContext("webgl"),t="void main(){   gl_PointSize=200.0;   gl_Position =vec4(0.0,0.0,0.0,2.0);}",a="void main(){   gl_FragColor = vec4(1.0,0.0,0.0,1.0);}";e(i,t,a),i.drawArrays(i.POINTS,0,1)}function e(o,i,t){var a=o.createShader(o.VERTEX_SHADER),c=o.createShader(o.FRAGMENT_SHADER);o.shaderSource(a,i),o.shaderSource(c,t),o.compileShader(a),o.compileShader(c);var r=o.createProgram();return o.attachShader(r,a),o.attachShader(r,c),o.linkProgram(r),o.useProgram(r),r}return(o,i)=>(w(),S("canvas",{ref_key:"webglcanvas",ref:n,width:"500",height:"500",style:{"background-color":"black"}},null,512))}}),Oe=C({__name:"shaderSky",setup(h){const n=T();b(()=>d(n.value));function d(e){const o=new z,i=new U(50,e.clientWidth/e.clientHeight,.1,1e5);o.add(i);const t=new P({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});t.setSize(e.clientWidth,e.clientHeight),t.setPixelRatio(window.devicePixelRatio*2),t.setClearColor(0),e.appendChild(t.domElement),I(i,t);const a=new B(5500);o.add(a);const c=()=>{const s=`
    varying vec3 vWorldPosition;
    void main() {
      vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
      vWorldPosition = worldPosition.xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,v=`
    uniform vec3 topColor;
    uniform vec3 bottomColor;
    uniform float offset;
    uniform float exponent;
    varying vec3 vWorldPosition;
    void main() {
        float h = normalize( vWorldPosition + offset ).y;
        gl_FragColor = vec4( mix( bottomColor, topColor, max( pow( max( h, 0.0 ), exponent ), 0.0 ) ), 1.0 );
    }`,l={topColor:{value:new X(30719)},bottomColor:{value:new X("aliceblue")},offset:{value:400},exponent:{value:.6}},m=new Re(4e3,32,15),f=new F({uniforms:l,vertexShader:s,fragmentShader:v,side:K});return new W(m,f)};o.add(c()),r();function r(){t.render(o,i),n.value&&requestAnimationFrame(r)}}return(e,o)=>(w(),S("div",{class:"threeBox",ref_key:"threeBox",ref:n},null,512))}}),et=R(Oe,[["__scopeId","data-v-90ec3a12"]]),tt=C({__name:"shader1",setup(h){const n=T();b(()=>d(n.value));function d(e){const o=new z,i=new U(50,e.clientWidth/e.clientHeight,.1,1e5);o.add(i);const t=new P({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});t.setSize(e.clientWidth,e.clientHeight),t.setPixelRatio(window.devicePixelRatio*2),t.setClearColor(0),e.appendChild(t.domElement),I(i,t);const a=new B(5500);o.add(a);const c={u_time:{type:"f",value:1}};var r=new te(2,2),s=new F({uniforms:c,vertexShader:`
            void main() {
                gl_Position = vec4( position, 1.0 );
            }
        `,fragmentShader:`
            uniform float u_time;
            void main() {
                // 输出
                // 片元颜色
                gl_FragColor = vec4(abs(cos(u_time)),0.0,1.0,0.5);
            }
        `}),v=new W(r,s);o.add(v),l();function l(){c.u_time.value+=.005,t.render(o,i),n.value&&requestAnimationFrame(l)}}return(e,o)=>(w(),S("div",{class:"threeBox",ref_key:"threeBox",ref:n},null,512))}}),ot=R(tt,[["__scopeId","data-v-9497a276"]]),it=C({__name:"shader2",setup(h){const n=T();b(()=>d(n.value));function d(e){const o=new z,i=new U(50,e.clientWidth/e.clientHeight,.1,1e5);o.add(i);const t=new P({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});t.setSize(e.clientWidth,e.clientHeight),t.setPixelRatio(window.devicePixelRatio*2),t.setClearColor(0),e.appendChild(t.domElement),I(i,t);const a=new B(5500);o.add(a);const c={u_resolution:{type:"v2",value:new p(e.clientWidth,e.clientHeight)}};var r=new te(2,2),s=new F({uniforms:c,vertexShader:`
        void main() {
            gl_Position = vec4( position, 1.0 );
        }
        `,fragmentShader:`
        // 屏幕尺寸
        uniform vec2 u_resolution;

        void main() {
            // uv坐标
            vec2 uv = gl_FragCoord.xy/u_resolution;
            // 输出
            gl_FragColor = vec4(uv.x,uv.y,0.0,1.0);
        }
        `}),v=new W(r,s);o.add(v),window.onresize=()=>c.u_resolution.value=new p(e.clientWidth,e.clientHeight),l();function l(){t.render(o,i),n.value&&requestAnimationFrame(l)}}return(e,o)=>(w(),S("div",{class:"threeBox",ref_key:"threeBox",ref:n},null,512))}}),nt=R(it,[["__scopeId","data-v-19fe6b12"]]),rt=C({__name:"shader3",setup(h){const n=T();b(()=>d(n.value));function d(e){const o=new z,i=new U(50,e.clientWidth/e.clientHeight,.1,1e5);i.position.set(0,0,10),o.add(i);const t=new P({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});t.setSize(e.clientWidth,e.clientHeight),t.setPixelRatio(window.devicePixelRatio*1),t.setClearColor(16777215),e.appendChild(t.domElement),I(i,t);const a=new B(5500);o.add(a);const c=new ie(16777215,6);o.add(c),new te(2,2);const r={iResolution:{type:"v2",value:new p(e.clientWidth,e.clientHeight)},iTime:{type:"f",value:1}};let s=new F({uniforms:r,vertexShader:`
        void main() {
            gl_Position = vec4( position, 1.0 );
        }
        `,fragmentShader:`
        // 屏幕尺寸
        
        precision highp float;
        uniform vec2 iResolution;
        uniform float iTime;



        float gTime = 0.;
        const float REPEAT = 5.0;

        // 回転行列
        mat2 rot(float a) {
            float c = cos(a), s = sin(a);
            return mat2(c,s,-s,c);
        }

        float sdBox( vec3 p, vec3 b )
        {
            vec3 q = abs(p) - b;
            return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
        }

        float box(vec3 pos, float scale) {
            pos *= scale;
            float base = sdBox(pos, vec3(.4,.4,.1)) /1.5;
            pos.xy *= 5.;
            pos.y -= 3.5;
            pos.xy *= rot(.75);
            float result = -base;
            return result;
        }

        float box_set(vec3 pos, float iTime) {
            vec3 pos_origin = pos;
            pos = pos_origin;
            pos .y += sin(gTime * 0.4) * 2.5;
            pos.xy *=   rot(.8);
            float box1 = box(pos,2. - abs(sin(gTime * 0.4)) * 1.5);
            pos = pos_origin;
            pos .y -=sin(gTime * 0.4) * 2.5;
            pos.xy *=   rot(.8);
            float box2 = box(pos,2. - abs(sin(gTime * 0.4)) * 1.5);
            pos = pos_origin;
            pos .x +=sin(gTime * 0.4) * 2.5;
            pos.xy *=   rot(.8);
            float box3 = box(pos,2. - abs(sin(gTime * 0.4)) * 1.5);	
            pos = pos_origin;
            pos .x -=sin(gTime * 0.4) * 2.5;
            pos.xy *=   rot(.8);
            float box4 = box(pos,2. - abs(sin(gTime * 0.4)) * 1.5);	
            pos = pos_origin;
            pos.xy *=   rot(.8);
            float box5 = box(pos,.5) * 6.;	
            pos = pos_origin;
            float box6 = box(pos,.5) * 6.;	
            float result = max(max(max(max(max(box1,box2),box3),box4),box5),box6);
            return result;
        }

        float map(vec3 pos, float iTime) {
            vec3 pos_origin = pos;
            float box_set1 = box_set(pos, iTime);

            return box_set1;
        }
        
        void main() {
            vec2 p = (gl_FragCoord.xy * 1. - iResolution.xy) / min(iResolution.x, iResolution.y);
            vec3 ro = vec3(0., -0.2 ,iTime * 4.);
            vec3 ray = normalize(vec3(p, 1.5));
            ray.xy = ray.xy * rot(sin(iTime * .03) * 5.);
            ray.yz = ray.yz * rot(sin(iTime * .05) * .2);
            float t = 0.1;
            vec3 col = vec3(0.);
            float ac = 0.0;


            for (int i = 0; i < 99; i++){
                vec3 pos = ro + ray * t;
                pos = mod(pos-2., 4.) -2.;
                gTime = iTime -float(i) * 0.01;
                
                float d = map(pos, iTime);

                d = max(abs(d), 0.01);
                ac += exp(-d*23.);

                t += d* 0.55;
            }

            col = vec3(ac * 0.02);

            col +=vec3(0.,0.2 * abs(sin(iTime)),0.5 + sin(iTime) * 0.2);


            gl_FragColor = vec4(col ,1.0 - t * (0.02 + 0.02 * sin (iTime)));
        }
        `});q("http://guangfu/resource/aroundBuilding.FBX",f=>{f.traverse(u=>{if(u.isMesh){const E=new W(u.geometry,s);o.add(E)}}),o.add(f)}),window.onresize=()=>r.iResolution.value=new p(e.clientWidth,e.clientHeight);const v=j(),l=Q(140);m();function m(){l(()=>{v&&v.update(),r.iTime.value+=.05,t.render(o,i)}),n.value&&requestAnimationFrame(m)}}return(e,o)=>(w(),S("div",{class:"threeBox",ref_key:"threeBox",ref:n},null,512))}}),at=R(rt,[["__scopeId","data-v-345b0e99"]]),st=C({__name:"shaderWater",setup(h){const n=T();b(()=>d(n.value));function d(e){const o=new z,i=new U(50,e.clientWidth/e.clientHeight,.1,1e5);i.position.set(10,10,10),o.add(i);const t=new P({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});t.setSize(e.clientWidth,e.clientHeight),t.setPixelRatio(window.devicePixelRatio*2),t.setClearColor(0),e.appendChild(t.domElement),I(i,t);const a=new B(5500);o.add(a);const c={Mouse:{type:"v2",value:new p(0,0)},Resolution:{type:"v2",value:new p(e.clientWidth,e.clientHeight)},Time:{type:"f",value:1}};e.addEventListener("click",m=>c.Mouse.value=he(m));const r=new G(10,10,10);var s=new F({uniforms:c,vertexShader:`
        varying vec2 vUv;

        void main() {
            vUv = uv;
            vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
            gl_Position = projectionMatrix * mvPosition;
        }
        `,fragmentShader:`
       
        varying vec2 vUv;
        uniform vec2 Mouse;
        uniform vec2 Resolution;
        uniform float Time;

        const float DRAG_MULT = 0.048;
        const int ITERATIONS_RAYMARCH = 13;
        const int ITERATIONS_NORMAL = 48;


        vec2 wavedx(vec2 position, vec2 direction, float speed, float frequency, float timeshift) {
            float x = dot(direction, position) * frequency + timeshift * speed;
            float wave = exp(sin(x) - 1.0);
            float dx = wave * cos(x);
            return vec2(wave, -dx);
        }

        float getwaves(vec2 position, int iterations){
            float iter = 0.0;
            float phase = 6.0;
            float speed = 2.0;
            float weight = 1.0;
            float w = 0.0;
            float ws = 0.0;
            for(int i=0;i<iterations;i++){
                vec2 p = vec2(sin(iter), cos(iter));
                vec2 res = wavedx(position, p, speed, phase, Time);
                position += p * res.y * weight * DRAG_MULT;
                w += res.x * weight;
                iter += 12.0;
                ws += weight;
                weight = mix(weight, 0.0, 0.2);
                phase *= 1.18;
                speed *= 1.07;
            }
            return w / ws;
        }

        float raymarchwater(vec3 camera, vec3 start, vec3 end, float depth){
            vec3 pos = start;
            float h = 0.0;
            float hupper = depth;
            float hlower = 0.0;
            vec2 zer = vec2(0.0);
            vec3 dir = normalize(end - start);
            for(int i=0;i<318;i++){
                h = getwaves(pos.xz * 0.1, ITERATIONS_RAYMARCH) * depth - depth;
                if(h + 0.01 > pos.y) {
                    return distance(pos, camera);
                }
                pos += dir * (pos.y - h);
            }
            return -1.0;
        }

        float H = 0.0;
        vec3 normal(vec2 pos, float e, float depth){
            vec2 ex = vec2(e, 0);
            H = getwaves(pos.xy * 0.1, ITERATIONS_NORMAL) * depth;
            vec3 a = vec3(pos.x, H, pos.y);
            return normalize(cross((a-vec3(pos.x - e, getwaves(pos.xy * 0.1 - ex.xy * 0.1, ITERATIONS_NORMAL) * depth, pos.y)), 
                                (a-vec3(pos.x, getwaves(pos.xy * 0.1 + ex.yx * 0.1, ITERATIONS_NORMAL) * depth, pos.y + e))));
        }
        mat3 rotmat(vec3 axis, float angle)
        {
            float s = sin(angle);
            float c = cos(angle);
            float oc = 1.0 - c;
            return mat3(oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s, 
            oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s, 
            oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c);
        }

        vec3 getRay(vec2 uv){
            uv = (uv * 2.0 - 1.0) * vec2(Resolution.x / Resolution.y, 1.0);
            vec3 proj = normalize(vec3(uv.x, uv.y, 1.0) + vec3(uv.x, uv.y, -1.0) * pow(length(uv), 2.0) * 0.05);	
            if(Resolution.x < 600.0) return proj;
            vec3 ray = rotmat(vec3(0.0, -1.0, 0.0), 3.0 * ((Mouse.x + 0.5) * 2.0 - 1.0)) * rotmat(vec3(1.0, 0.0, 0.0), 0.5 + 1.5 * ((Mouse.y * 1.5) * 2.0 - 1.0)) * proj;
            return ray;
        }

        float intersectPlane(vec3 origin, vec3 direction, vec3 point, vec3 normal)
        { 
            return clamp(dot(point - origin, normal) / dot(direction, normal), -1.0, 9991999.0); 
        }

        vec3 extra_cheap_atmosphere(vec3 raydir, vec3 sundir){
            sundir.y = max(sundir.y, -0.07);
            float special_trick = 1.0 / (raydir.y * 1.0 + 0.1);
            float special_trick2 = 1.0 / (sundir.y * 11.0 + 1.0);
            float raysundt = pow(abs(dot(sundir, raydir)), 2.0);
            float sundt = pow(max(0.0, dot(sundir, raydir)), 8.0);
            float mymie = sundt * special_trick * 0.2;
            vec3 suncolor = mix(vec3(1.0), max(vec3(0.0), vec3(1.0) - vec3(5.5, 13.0, 22.4) / 22.4), special_trick2);
            vec3 bluesky= vec3(5.5, 13.0, 22.4) / 22.4 * suncolor;
            vec3 bluesky2 = max(vec3(0.0), bluesky - vec3(5.5, 13.0, 22.4) * 0.002 * (special_trick + -6.0 * sundir.y * sundir.y));
            bluesky2 *= special_trick * (0.24 + raysundt * 0.24);
            return bluesky2 * (1.0 + 1.0 * pow(1.0 - raydir.y, 3.0)) + mymie * suncolor;
        } 
        vec3 getatm(vec3 ray){
            return extra_cheap_atmosphere(ray, normalize(vec3(1.0))) * 0.5;
            
        }

        float sun(vec3 ray){
            vec3 sd = normalize(vec3(1.0));   
            return pow(max(0.0, dot(ray, sd)), 528.0) * 110.0;
        }
        vec3 aces_tonemap(vec3 color){	
            mat3 m1 = mat3(
                0.59719, 0.07600, 0.02840,
                0.35458, 0.90834, 0.13383,
                0.04823, 0.01566, 0.83777
            );
            mat3 m2 = mat3(
                1.60475, -0.10208, -0.00327,
                -0.53108,  1.10813, -0.07276,
                -0.07367, -0.00605,  1.07602
            );
            vec3 v = m1 * color;    
            vec3 a = v * (v + 0.0245786) - 0.000090537;
            vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;
            return pow(clamp(m2 * (a / b), 0.0, 1.0), vec3(1.0 / 2.2));	
        }
        void main()
        {
            vec2 uv = gl_FragCoord.xy / Resolution.xy * vUv;
            
            float waterdepth = 2.1;
            vec3 wfloor = vec3(0.0, -waterdepth, 0.0);
            vec3 wceil = vec3(0.0, 0.0, 0.0);
            vec3 orig = vec3(0.0, 2.0, 0.0);
            vec3 ray = getRay(uv);
            float hihit = intersectPlane(orig, ray, wceil, vec3(0.0, 1.0, 0.0));
            if(ray.y >= -0.01){
                vec3 C = getatm(ray) * 2.0 + sun(ray);
                //tonemapping
                C = aces_tonemap(C);
                gl_FragColor = vec4( C,1.0);   
                return;
            }
            float lohit = intersectPlane(orig, ray, wfloor, vec3(0.0, 1.0, 0.0));
            vec3 hipos = orig + ray * hihit;
            vec3 lopos = orig + ray * lohit;
            float dist = raymarchwater(orig, hipos, lopos, waterdepth);
            vec3 pos = orig + ray * dist;

            vec3 N = normal(pos.xz, 0.001, waterdepth);
            vec2 velocity = N.xz * (1.0 - N.y);
            N = mix(vec3(0.0, 1.0, 0.0), N, 1.0 / (dist * dist * 0.01 + 1.0));
            vec3 R = reflect(ray, N);
            float fresnel = (0.04 + (1.0-0.04)*(pow(1.0 - max(0.0, dot(-N, ray)), 5.0)));
            
            vec3 C = fresnel * getatm(R) * 2.0 + fresnel * sun(R) + vec3(0.0293, 0.0698, 0.1717);
            //tonemapping
            C = aces_tonemap(C);
            
            gl_FragColor = vec4(C,1.0);
        }
        `});s.side=K;var v=new W(r,s);o.add(v),window.onresize=()=>c.Resolution.value=new p(e.clientWidth,e.clientHeight),l();function l(){c.Time.value+=.03,t.render(o,i),n.value&&requestAnimationFrame(l)}}return(e,o)=>(w(),S("div",{class:"threeBox",ref_key:"threeBox",ref:n},null,512))}}),lt=R(st,[["__scopeId","data-v-8a58432b"]]),ct=C({__name:"shaderMountain",setup(h){const n=T();b(()=>d(n.value));function d(e){const o=new z,i=new U(50,e.clientWidth/e.clientHeight,.1,1e5);i.position.set(10,10,10),o.add(i);const t=new P({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});t.setSize(e.clientWidth,e.clientHeight),t.setPixelRatio(window.devicePixelRatio*2),t.setClearColor(0),e.appendChild(t.domElement),I(i,t);const a=new B(5500);o.add(a);const c={iResolution:{type:"v2",value:new p(e.clientWidth,e.clientHeight)},iTime:{type:"f",value:1},u:{type:"v2",value:new p(0,0)}},r=new G(10,10,10);var s=new F({uniforms:c,vertexShader:`
        varying vec2 vUv;
        
        void main() {
            vUv = uv;
            vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
            gl_Position = projectionMatrix * mvPosition;
        }
        `,fragmentShader:`
        varying vec2 vUv;

        precision highp float;
        uniform vec2 iResolution;
        uniform vec2 u;
        uniform float iTime;

        
        mat2 rot(float a) {
            return mat2(cos(a),sin(a),-sin(a),cos(a));	
        }

        const vec3 l = vec3(1.);
        const vec3 sundir = normalize( vec3(.3,.1,1.) );
        const vec3 suncol = vec3(1.,.8,.5);

        float cloud(in vec3 p) {
            float s=.5,e=(2.7-p.y)*(5.-p.y)+5.;
            p.xz *=.7;
            for(int i=0;i<7;i++)
                    p.xz*=rot(1.),
                    e-=abs(dot(sin(p*s+2.*cos(1.7*p.zxy*s)),l*.5))/s,
                    s*=1.7;
            return .5*e;
        }


        float ground(in vec3 p) {
            
            float s=2.,f;	
            for(f=p.y;s<1e3;s*=1.7)
                    p.xz*=rot(1.),            
                    f+=dot(sin(p.xz*s*.4+2.*cos(.7*p.zx*s*.4))/s,l.xz);    
            return f*.52;
        }

        vec3 sky( in vec3 ro, in vec3 rd ,in vec2 res)
        {
        
            // background sky : modified from IQ clouds        
            float sun = max( dot(sundir,rd), 0.0);    
            vec3 col = vec3(0.6,0.6,0.78) - abs(rd.y)*0.5*vec3(1.0,0.4,.05);    
            col += suncol*pow( sun+.001, 500.0 ); 
            // clouds        
            float k = res.x, c = res.y;
            if(c>.0)
            col *= 1.-.8*c,
            col += 3.*(.4+k)*c*suncol,
            col += 2.*vec3(0.2,0.08,0.04)*pow( sun, 3.0 )*k;    
            // Godrays
            float sh = 1., dt = 5., d;
            vec3 q = ro+40.*rd;
            for(int i=0; i<40; ++i)
            {
                d = cloud(q+sundir*dt);
                sh = min(sh,1./(1.+exp(-d)));
                dt += d;
                q += rd*.6;
            }
            col += 2.*pow((1.-sh)*sun,3.)*suncol;
            return col;
        }


        vec3 raycast( in vec3 ro, vec3 rd )
        {
            float t = 4.,e,e1,f,de=0.,df,d,c=1.,dt=.3,r=1.,a;
            vec3 col= vec3(0.),p,skycol;
            for( int i=0; i<100; i++ )
            {                
                p = ro+t*rd;
                if(p.y<0.)rd.y = -rd.y, ro = p, t = .2, r=.5;
                e = cloud(p), f=ground(p),             
                d = min(min(f,p.y+.1),max(e,.07));
                t += .7*d;
                if(e<.001)
                    e1 = cloud(p + dt*sundir),
                    de += max(e1-e,0.)/dt/(1.+ exp(-16.*e1));
                c *= 1./(1.+ exp(-16.*e));        	
            }
            skycol = r*sky(ro,rd,vec2(.1*de,(1.-c)*.2));        
            if(f>.5)return skycol;
            a = max(ground(p-.02)-f,.0)*15.;
            df = max(ground(p+.02*sundir)-f,.0)*50.+.5;
            f = .55-exp(-f*f);
            col = vec3(f, f*f,f*f*f)*(df+a);
            float maxd = 50.;    
            col = mix(col, skycol, smoothstep(.2, .99, min(t, maxd)/maxd));
            return r*col;
        }


        void main()
        {
            float t = iTime;
            vec2  R = iResolution.xy,
                q = ( u+u - R ) / R.y * vUv;   
            
            // camera
            
            vec3 ro = vec3(0.), rd = normalize(vec3(q,3.) );
            rd.yz*=rot(-.15); 
            rd.xz*=rot(0.1*t);
            ro.x -=t*.4;
            ro.y += 2.;

            // raymarch 
            
            vec3 col = raycast(ro,rd);
                
            // shade
            
            col = log(1.+col);
            col = clamp(col,0.,1.);
            gl_FragColor = vec4( col, 1.0 );

        }

        `}),v=new W(r,s);o.add(v),window.onresize=()=>c.iResolution.value=new p(e.clientWidth,e.clientHeight),l();function l(){c.iTime.value+=.03,t.render(o,i),n.value&&requestAnimationFrame(l)}}return(e,o)=>(w(),S("div",{class:"threeBox",ref_key:"threeBox",ref:n},null,512))}}),dt=R(ct,[["__scopeId","data-v-f0c3fe58"]]),vt=C({__name:"shaderTree",setup(h){const n=T();b(()=>d(n.value));function d(e){const o=new z,i=new U(50,e.clientWidth/e.clientHeight,.1,1e5);i.position.set(10,10,10),o.add(i);const t=new P({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});t.setSize(e.clientWidth,e.clientHeight),t.setPixelRatio(window.devicePixelRatio*2),e.appendChild(t.domElement),I(i,t);const a=new B(5500);o.add(a);const c={iResolution:{type:"v2",value:new p(e.clientWidth,e.clientHeight)},iTime:{type:"f",value:1},u:{type:"v2",value:new p(0,0)}},r=new G(10,10,10);var s=new F({uniforms:c,vertexShader:`
        varying vec2 vUv;
        
        void main() {
            vUv = uv;
            vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
            gl_Position = projectionMatrix * mvPosition;
        }
        `,fragmentShader:`
        varying vec2 vUv;

        precision highp float;
        uniform vec2 iResolution;
        uniform vec2 u;
        uniform float iTime;

        const float MAXDIST = 50.;

        struct Ray {
            vec3 ro;
            vec3 rd;
        };
        
        // from netgrind
        vec3 hue(vec3 color, float shift) {

            const vec3  kRGBToYPrime = vec3 (0.299, 0.587, 0.114);
            const vec3  kRGBToI     = vec3 (0.596, -0.275, -0.321);
            const vec3  kRGBToQ     = vec3 (0.212, -0.523, 0.311);

            const vec3  kYIQToR   = vec3 (1.0, 0.956, 0.621);
            const vec3  kYIQToG   = vec3 (1.0, -0.272, -0.647);
            const vec3  kYIQToB   = vec3 (1.0, -1.107, 1.704);

            // Convert to YIQ
            float   YPrime  = dot (color, kRGBToYPrime);
            float   I      = dot (color, kRGBToI);
            float   Q      = dot (color, kRGBToQ);

            // Calculate the hue and chroma
            float   hue     = atan (Q, I);
            float   chroma  = sqrt (I * I + Q * Q);

            // Make the user's adjustments
            hue += shift;

            // Convert back to YIQ
            Q = chroma * sin (hue);
            I = chroma * cos (hue);

            // Convert back to RGB
            vec3    yIQ   = vec3 (YPrime, I, Q);
            color.r = dot (yIQ, kYIQToR);
            color.g = dot (yIQ, kYIQToG);
            color.b = dot (yIQ, kYIQToB);

            return color;
        }

        // ------

        // by iq

        float opU( float d1, float d2 )
        {
            return min(d1,d2);
        }

        float smin( float a, float b, float k ){
            float h = clamp( 0.5+0.5*(b-a)/k, 0.0, 1.0 );
            return mix( b, a, h ) - k*h*(1.0-h);
        }

        float length6( vec3 p )
        {
            p = p*p*p; p = p*p;
            return pow( p.x + p.y + p.z, 1.0/6.0 );
        }

        // ------

        // from hg_sdf 

        float fPlane(vec3 p, vec3 n, float distanceFromOrigin) {
            return dot(p, n) + distanceFromOrigin;
        }

        void pR(inout vec2 p, float a) {
            p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
        }

        // -------


        float fractal(vec3 p)
        {
            const int iterations = 20;
            
            float d = iTime*5. - p.z;
            p=p.yxz;
            pR(p.yz, 1.570795);
            p.x += 6.5;

            p.yz = mod(abs(p.yz)-.0, 20.) - 10.;
            float scale = 1.25;
            
            p.xy /= (1.+d*d*0.0005);
            
            float l = 0.;
            
            for (int i=0; i<iterations; i++) {
                p.xy = abs(p.xy);
                p = p*scale + vec3(-3. + d*0.0095,-1.5,-.5);
                
                pR(p.xy,0.35-d*0.015);
                pR(p.yz,0.5+d*0.02);
                
                l =length6(p);
            }
            return l*pow(scale, -float(iterations))-.15;
        }

        vec2 map(vec3 pos) 
        {
            float dist = 10.; 
            dist = opU(dist, fractal(pos));
            dist = smin(dist, fPlane(pos,vec3(0.0,1.0,0.0),10.), 4.6);
            return vec2(dist, 0.);
        }

        vec3 vmarch(Ray ray, float dist)
        {   
            vec3 p = ray.ro;
            vec2 r = vec2(0.);
            vec3 sum = vec3(0);
            vec3 c = hue(vec3(0.,0.,1.),5.5);
            for( int i=0; i<20; i++ )
            {
                r = map(p);
                if (r.x > .01) break;
                p += ray.rd*.015;
                vec3 col = c;
                col.rgb *= smoothstep(.0,0.15,-r.x);
                sum += abs(col)*.5;
            }
            return sum;
        }

        vec2 march(Ray ray) 
        {
            const int steps = 50;
            const float prec = 0.001;
            vec2 res = vec2(0.);
            
            for (int i = 0; i < steps; i++) 
            {        
                vec2 s = map(ray.ro + ray.rd * res.x);
                
                if (res.x > MAXDIST || s.x < prec) 
                {
                    break;    
                }
                
                res.x += s.x;
                res.y = s.y;
                
            }
        
            return res;
        }

        vec3 calcNormal(vec3 pos) 
        {
            const vec3 eps = vec3(0.005, 0.0, 0.0);
                                
            return normalize(
                vec3(map(pos + eps).x - map(pos - eps).x,
                    map(pos + eps.yxz).x - map(pos - eps.yxz).x,
                    map(pos + eps.yzx).x - map(pos - eps.yzx).x ) 
            );
        }

        vec4 render(Ray ray) 
        {
            vec3 col = vec3(0.);
            vec2 res = march(ray);
        
            if (res.x > MAXDIST) 
            {
                return vec4(col, 50.);
            }
            
            vec3 pos = ray.ro+res.x*ray.rd;
            ray.ro = pos;
            col = vmarch(ray, res.x);
            
            col = mix(col, vec3(0.), clamp(res.x/50., 0., 1.));
            return vec4(col, res.x);
        }

        mat3 camera(in vec3 ro, in vec3 rd, float rot) 
        {
            vec3 forward = normalize(rd - ro);
            vec3 worldUp = vec3(sin(rot), cos(rot), 0.0);
            vec3 x = normalize(cross(forward, worldUp));
            vec3 y = normalize(cross(x, forward));
            return mat3(x, y, forward);
        }

        void main()
        {
            vec2 uv = gl_FragCoord.xy / iResolution.xy * vUv;
            uv = uv * 2.0 - 1.0;
            uv.x *= iResolution.x / iResolution.y;
            uv.y -= uv.x*uv.x*0.15;
            vec3 camPos = vec3(3., -1.5, iTime*5.);
            vec3 camDir = camPos+vec3(-1.25,0.1, 1.);
            mat3 cam = camera(camPos, camDir, 0.);
            vec3 rayDir = cam * normalize( vec3(uv, .8));
            
            Ray ray;
            ray.ro = camPos;
            ray.rd = rayDir;
            
            vec4 col = render(ray);
            
            gl_FragColor = vec4(1.-col.xyz,clamp(1.-col.w/MAXDIST, 0., 1.));
        }


        `}),v=new W(r,s);o.add(v),window.onresize=()=>c.iResolution.value=new p(e.clientWidth,e.clientHeight),l();function l(){c.iTime.value+=.03,t.render(o,i),n.value&&requestAnimationFrame(l)}}return(e,o)=>(w(),S("div",{class:"threeBox",ref_key:"threeBox",ref:n},null,512))}}),ut=R(vt,[["__scopeId","data-v-d68ea7b7"]]),mt=C({__name:"textureWithShader",setup(h){const n=T();b(()=>d(n.value));function d(e){const o=new z,i=new U(50,e.clientWidth/e.clientHeight,.1,1e5);i.position.set(10,10,10),o.add(i);const t=new P({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});t.setSize(e.clientWidth,e.clientHeight),t.setPixelRatio(window.devicePixelRatio*2),t.setClearColor(0),e.appendChild(t.domElement),I(i,t);const a=new B(5500);o.add(a);const c={iResolution:{type:"v2",value:new p(e.clientWidth,e.clientHeight)},iTime:{type:"f",value:1}},r=new G(10,10,10),s=new ze({map:Z("https://img2.baidu.com/it/u=1042245905,2107164082&fm=253&fmt=auto&app=138&f=JPEG?w=1333&h=500"),side:K});var v=new F({uniforms:c,side:K,vertexShader:`
        varying vec2 vUv;
        
        void main() {
            vUv = uv;
            vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
            gl_Position = projectionMatrix * mvPosition;
        }
        `,fragmentShader:`
        varying vec2 vUv;
        precision highp float;
        uniform vec2 iResolution;
        uniform float iTime;

        mat2 rot(float a) {
            float c = cos(a), s = sin(a);
            return mat2(c,s,-s,c);
        }

        const float pi = acos(-1.0);
        const float pi2 = pi*2.0;

        vec2 pmod(vec2 p, float r) {
            float a = atan(p.x, p.y) + pi/r;
            float n = pi2 / r;
            a = floor(a/n)*n;
            return p*rot(-a);
        }

        float box( vec3 p, vec3 b ) {
            vec3 d = abs(p) - b;
            return min(max(d.x,max(d.y,d.z)),0.0) + length(max(d,0.0));
        }

        float ifsBox(vec3 p) {
            for (int i=0; i<5; i++) {
                p = abs(p) - 1.0;
                p.xy *= rot(iTime*0.3);
                p.xz *= rot(iTime*0.1);
            }
            p.xz *= rot(iTime);
            return box(p, vec3(0.4,0.8,0.3));
        }

        float map(vec3 p, vec3 cPos) {
            vec3 p1 = p;
            p1.x = mod(p1.x-5., 10.) - 5.;
            p1.y = mod(p1.y-5., 10.) - 5.;
            p1.z = mod(p1.z, 16.)-8.;
            p1.xy = pmod(p1.xy, 5.0);
            return ifsBox(p1);
        }

        void main() {
            vec2 p = (gl_FragCoord.xy * 2.0 * vUv - iResolution.xy) / min(iResolution.x, iResolution.y);

            vec3 cPos = vec3(0.0,0.0, -3.0 * iTime);
            // vec3 cPos = vec3(0.3*sin(iTime*0.8), 0.4*cos(iTime*0.3), -6.0 * iTime);
            vec3 cDir = normalize(vec3(0.0, 0.0, -1.0));
            vec3 cUp  = vec3(sin(iTime), 1.0, 0.0);
            vec3 cSide = cross(cDir, cUp);

            vec3 ray = normalize(cSide * p.x + cUp * p.y + cDir);

            float acc = 0.0;
            float acc2 = 0.0;
            float t = 0.0;
            for (int i = 0; i < 99; i++) {
                vec3 pos = cPos + ray * t;
                float dist = map(pos, cPos);
                dist = max(abs(dist), 0.02);
                float a = exp(-dist*3.0);
                if (mod(length(pos)+24.0*iTime, 30.0) < 3.0) {
                    a *= 2.0;
                    acc2 += a;
                }
                acc += a;
                t += dist * 0.5;
            }

            vec3 col = vec3(acc * 0.01, acc * 0.011 + acc2*0.002, acc * 0.012+ acc2*0.005);
            gl_FragColor = vec4(col, 1.0 - t * 0.03);
        }
        `}),l=new W(r,[v,s,s,s,v,s,s]);o.add(l),window.onresize=()=>c.iResolution.value=new p(e.clientWidth,e.clientHeight),m();function m(){c.iTime.value+=.03,t.render(o,i),n.value&&requestAnimationFrame(m)}}return(e,o)=>(w(),S("div",{class:"threeBox",ref_key:"threeBox",ref:n},null,512))}}),ft=R(mt,[["__scopeId","data-v-7e8a6e4e"]]),pt=C({__name:"textureSpecialShader",setup(h){const n=T();b(()=>d(n.value));function d(e){const o=new z,i=new U(50,e.clientWidth/e.clientHeight,.1,1e5);i.position.set(10,10,10),o.add(i);const t=new P({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});t.setSize(e.clientWidth,e.clientHeight),t.setPixelRatio(window.devicePixelRatio*2),t.setClearColor(0),e.appendChild(t.domElement),I(i,t);const a=new B(5500);o.add(a);const c={r:{type:"v2",value:new p(e.clientWidth,e.clientHeight)},t:{type:"f",value:0},colorTexture:{value:Z("https://img2.baidu.com/it/u=1042245905,2107164082&fm=253&fmt=auto&app=138&f=JPEG?w=1333&h=500")}},r=new G(10,10,10);var s=new F({uniforms:c,vertexShader:`
        varying vec2 vUv;

        void main() {
            vUv = uv;
            vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
            gl_Position = projectionMatrix * mvPosition;
        }
        `,fragmentShader:`
        varying vec2 vUv;

        uniform vec2 r;
        uniform float t;
        uniform sampler2D colorTexture;

        void main(){
            vec3 c;
            float l,z=t;
            for(int i=0;i<3;i++) {
                vec2 uv,p=gl_FragCoord.xy/r/2.0;
                uv=p +  2.0 * vUv;
                p-=.5;
                p.x*=r.x/r.y;
                z+=.07;
                l=length(p);
                uv+=p/l*(sin(z)+1.)*abs(sin(l*9.-z-z));
                c[i]=.01/length(mod(uv,1.)-.5);
            }
            vec3 color = texture2D( colorTexture, vUv ).rgb;
            gl_FragColor=vec4(c/l * color * (4., 4.,4.),t);

        }

        `}),v=new W(r,s);o.add(v),window.onresize=()=>c.r.value=new p(e.clientWidth,e.clientHeight),l();function l(){c.t.value+=.03,t.render(o,i),n.value&&requestAnimationFrame(l)}}return(e,o)=>(w(),S("div",{class:"threeBox",ref_key:"threeBox",ref:n},null,512))}}),ht=R(pt,[["__scopeId","data-v-610666f8"]]),gt=C({__name:"lightMoveShader",setup(h){const n=T();b(()=>d(n.value));function d(e){const o=new z,i=new U(50,e.clientWidth/e.clientHeight,.1,1e5);o.add(i);const t=new P({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});t.setSize(e.clientWidth,e.clientHeight),t.setPixelRatio(window.devicePixelRatio*2),t.setClearColor(0),e.appendChild(t.domElement);const a=I(i,t),c=new B(5500);o.add(c);const r=L(N,o,i,a);H(()=>r.destroy());const s={innerCircleWidth:{value:0},circleWidth:{value:300},diff:{value:new X(.2,.2,.2)},color:{value:new X(0,0,1)},opacity:{value:.3},center:{value:new $(0,0,0)}};r.addColor({color:16777215},"color").onChange(A=>s.color.value=new X(A)).name("修改发光颜色"),r.addColor({color:16777215},"color").onChange(A=>s.diff.value=new X(A)).name("修改diffuse颜色");function v(){s.innerCircleWidth.value<1e3?s.innerCircleWidth.value+=10:s.innerCircleWidth.value=0}var l=new te(2e3,2e3),m=new F({uniforms:s,vertexShader:`
            varying vec2 vUv;
            varying vec3 v_position;
            void main() {
                vUv = uv;
                v_position = position;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
        varying vec2 vUv;
        varying vec3 v_position;

        uniform float innerCircleWidth;
        uniform float circleWidth;
        uniform float opacity;
        uniform vec3 center;
        
        uniform vec3 color;
        uniform vec3 diff;

        void main() {
            float dis = length(v_position - center);
            if(dis < (innerCircleWidth + circleWidth) && dis > innerCircleWidth) {
                float r = (dis - innerCircleWidth) / circleWidth;
               
                gl_FragColor = mix(vec4(diff, 0.1), vec4(color, opacity), r);
            }else {
                gl_FragColor = vec4(diff, 0.1);
            }

        }
            `});const f=new W(l,m);o.add(f),q("http://guangfu/resource/aroundBuilding.FBX",A=>{o.add(A),A.traverse(ae=>ae.material=m)});const u=j(),E=Q(140);g();function g(A){E(()=>{u&&u.update(),v(),t.render(o,i)}),n.value&&requestAnimationFrame(g)}}return(e,o)=>(w(),S("div",{class:"threeBox",ref_key:"threeBox",ref:n},null,512))}}),xt=R(gt,[["__scopeId","data-v-47b6aa23"]]),yt=C({__name:"modelShader",setup(h){const n=T();b(()=>d(n.value));function d(e){const o=new z,i=new U(50,e.clientWidth/e.clientHeight,.1,1e5);o.add(i);const t=new P({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});t.setSize(e.clientWidth,e.clientHeight),t.setPixelRatio(window.devicePixelRatio*2),t.setClearColor(0),e.appendChild(t.domElement);const a=I(i,t),c=new B(5500);o.add(c);const r=L(N,o,i,a);H(()=>r.destroy());const s={iResolution:{type:"v2",value:new p(e.clientWidth,e.clientHeight)},iTime:{type:"f",value:1}};q("http://guangfu/resource/aroundBuilding.FBX",f=>{o.add(f),J(f).map(E=>E.onBeforeCompile=(g,A)=>{g.uniforms.iResolution=s.iResolution,g.uniforms.iTime=s.iTime,g.vertexShader=`
               varying vec2 vUv;
                void main() {
                    vUv = uv;
                    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
                    gl_Position = projectionMatrix * mvPosition;
                }
                `,g.fragmentShader=`
                // 屏幕尺寸
                varying vec2 vUv;
                precision highp float;
                uniform vec2 iResolution;
                uniform float iTime;



                float gTime = 0.;
                const float REPEAT = 5.0;

                // 回転行列
                mat2 rot(float a) {
                    float c = cos(a), s = sin(a);
                    return mat2(c,s,-s,c);
                }

                float sdBox( vec3 p, vec3 b )
                {
                    vec3 q = abs(p) - b;
                    return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
                }

                float box(vec3 pos, float scale) {
                    pos *= scale;
                    float base = sdBox(pos, vec3(.4,.4,.1)) /1.5;
                    pos.xy *= 5.;
                    pos.y -= 3.5;
                    pos.xy *= rot(.75);
                    float result = -base;
                    return result;
                }

                float box_set(vec3 pos, float iTime) {
                    vec3 pos_origin = pos;
                    pos = pos_origin;
                    pos .y += sin(gTime * 0.4) * 2.5;
                    pos.xy *=   rot(.8);
                    float box1 = box(pos,2. - abs(sin(gTime * 0.4)) * 1.5);
                    pos = pos_origin;
                    pos .y -=sin(gTime * 0.4) * 2.5;
                    pos.xy *=   rot(.8);
                    float box2 = box(pos,2. - abs(sin(gTime * 0.4)) * 1.5);
                    pos = pos_origin;
                    pos .x +=sin(gTime * 0.4) * 2.5;
                    pos.xy *=   rot(.8);
                    float box3 = box(pos,2. - abs(sin(gTime * 0.4)) * 1.5);	
                    pos = pos_origin;
                    pos .x -=sin(gTime * 0.4) * 2.5;
                    pos.xy *=   rot(.8);
                    float box4 = box(pos,2. - abs(sin(gTime * 0.4)) * 1.5);	
                    pos = pos_origin;
                    pos.xy *=   rot(.8);
                    float box5 = box(pos,.5) * 6.;	
                    pos = pos_origin;
                    float box6 = box(pos,.5) * 6.;	
                    float result = max(max(max(max(max(box1,box2),box3),box4),box5),box6);
                    return result;
                }

                float map(vec3 pos, float iTime) {
                    vec3 pos_origin = pos;
                    float box_set1 = box_set(pos, iTime);

                    return box_set1;
                }
                
                void main() {
                    vec2 p = vUv* (gl_FragCoord.xy * 1. - iResolution.xy) / min(iResolution.x, iResolution.y);
                    vec3 ro = vec3(0., -0.2 ,iTime * 4.);
                    vec3 ray = normalize(vec3(p, 1.5));
                    ray.xy = ray.xy * rot(sin(iTime * .03) * 5.);
                    ray.yz = ray.yz * rot(sin(iTime * .05) * .2);
                    float t = 0.1;
                    vec3 col = vec3(0.);
                    float ac = 0.0;


                    for (int i = 0; i < 99; i++){
                        vec3 pos = ro + ray * t;
                        pos = mod(pos-2., 4.) -2.;
                        gTime = iTime -float(i) * 0.01;
                        
                        float d = map(pos, iTime);

                        d = max(abs(d), 0.01);
                        ac += exp(-d*23.);

                        t += d* 0.55;
                    }

                    col = vec3(ac * 0.02);

                    col +=vec3(0.,0.2 * abs(sin(iTime)),0.5 + sin(iTime) * 0.2);


                    gl_FragColor = vec4(col ,1.0 - t * (0.02 + 0.02 * sin (iTime)));
                }
                `})}),window.onresize=()=>s.iResolution.value=new p(e.clientWidth,e.clientHeight);const v=j(),l=Q(140);m();function m(){l(()=>{v&&v.update(),s.iTime.value+=.005,t.render(o,i)}),n.value&&requestAnimationFrame(m)}}return(e,o)=>(w(),S("div",{class:"threeBox",ref_key:"threeBox",ref:n},null,512))}}),_t=R(yt,[["__scopeId","data-v-16d4169d"]]),wt=C({__name:"modelShader2",setup(h){const n=T();b(()=>d(n.value));function d(e){const o=new z,i=new U(50,e.clientWidth/e.clientHeight,.1,1e5);o.add(i);const t=new P({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});t.setSize(e.clientWidth,e.clientHeight),t.setPixelRatio(window.devicePixelRatio*2),t.setClearColor(0),e.appendChild(t.domElement);const a=I(i,t),c=new B(5500);o.add(c);const r=L(N,o,i,a);H(()=>r.destroy());const s={iResolution:{type:"v2",value:new p(e.clientWidth,e.clientHeight)},iTime:{type:"f",value:1}};q("http://guangfu/resource/aroundBuilding.FBX",f=>{o.add(f),J(f).map(E=>E.onBeforeCompile=(g,A)=>{g.uniforms.iResolution=s.iResolution,g.uniforms.iTime=s.iTime,g.vertexShader=`
               varying vec2 vUv;
                void main() {
                    vUv = uv;
                    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
                    gl_Position = projectionMatrix * mvPosition;
                }
                `,g.fragmentShader=`
                // 屏幕尺寸
                varying vec2 vUv;
                precision highp float;
                uniform vec2 iResolution;
                uniform float iTime;
                const float TAU = 6.28318530718;
                const int MAX_ITER = 5;

                void main() 
                {
                    float time = iTime * .5+23.0;
                    // uv should be the 0-1 uv of texture...
                    vec2 uv = gl_FragCoord.xy / iResolution.xy * vUv;
                    
                #ifdef SHOW_TILING
                    vec2 p = mod(uv*TAU*2.0, TAU)-250.0;
                #else
                    vec2 p = mod(uv*TAU, TAU)-250.0;
                #endif
                    vec2 i = vec2(p);
                    float c = 1.0;
                    float inten = .005;

                    for (int n = 0; n < MAX_ITER; n++) 
                    {
                        float t = time * (1.0 - (3.5 / float(n+1)));
                        i = p + vec2(cos(t - i.x) + sin(t + i.y), sin(t - i.y) + cos(t + i.x));
                        c += 1.0/length(vec2(p.x / (sin(i.x+t)/inten),p.y / (cos(i.y+t)/inten)));
                    }
                    c /= float(MAX_ITER);
                    c = 1.17-pow(c, 1.4);
                    vec3 colour = vec3(pow(abs(c), 8.0));
                    colour = clamp(colour + vec3(0.0, 0.35, 0.5), 0.0, 1.0);

                    #ifdef SHOW_TILING
                    // Flash tile borders...
                    vec2 pixel = 2.0 / iResolution.xy;
                    uv *= 2.0;
                    float f = floor(mod(iTime*.5, 2.0)); 	// Flash value.
                    vec2 first = step(pixel, uv) * f;		   	// Rule out first screen pixels and flash.
                    uv  = step(fract(uv), pixel);				// Add one line of pixels per tile.
                    colour = mix(colour, vec3(1.0, 1.0, 0.0), (uv.x + uv.y) * first.x * first.y); // Yellow line
                    #endif
                    
                    gl_FragColor = vec4(colour, 1.0);
                }

                `})}),window.onresize=()=>s.iResolution.value=new p(e.clientWidth,e.clientHeight);const v=j(),l=Q(140);m();function m(){l(()=>{v&&v.update(),s.iTime.value+=.005,t.render(o,i)}),n.value&&requestAnimationFrame(m)}}return(e,o)=>(w(),S("div",{class:"threeBox",ref_key:"threeBox",ref:n},null,512))}}),St=R(wt,[["__scopeId","data-v-6b666170"]]),Ct=C({__name:"modelShader3",setup(h){const n=T();b(()=>d(n.value));function d(e){const o=new z,i=new U(50,e.clientWidth/e.clientHeight,.1,1e5);o.add(i);const t=new P({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});t.setSize(e.clientWidth,e.clientHeight),t.setPixelRatio(window.devicePixelRatio*2),t.setClearColor(0),e.appendChild(t.domElement);const a=I(i,t),c=new B(5500);o.add(c);const r=L(N,o,i,a);H(()=>r.destroy());const s={iResolution:{type:"v2",value:new p(e.clientWidth,e.clientHeight)},iTime:{type:"f",value:1}};q("http://guangfu/resource/tileset.FBX",f=>{o.add(f),J(f).map(E=>{E.onBeforeCompile=(g,A)=>{g.uniforms.iResolution=s.iResolution,g.uniforms.iTime=s.iTime,g.uniforms.colorOrMap={value:E.map?1:0},g.uniforms.materialColor={type:"v3",value:new $(E.color.r,E.color.g,E.color.b)},g.uniforms.colorTexture={value:E.map},g.vertexShader=`
                        varying vec2 vUv;
                            void main() {
                                vUv = uv;
                                vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
                                gl_Position = projectionMatrix * mvPosition;
                            }
                        `,g.fragmentShader=`
                        varying vec2 vUv;
                        precision lowp float;
                        uniform vec2 iResolution;
                        uniform float iTime;
                        uniform float colorOrMap;
                        uniform vec3 materialColor;
                        uniform sampler2D colorTexture;
                    
                                    
                        vec3 hsv2rgb( vec3 c ){
                            vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),
                                                    6.0)-3.0)-1.0,
                                            0.0,
                                            1.0 );
                            rgb = rgb*rgb*(3.0-2.0*rgb);
                            return c.z * mix(vec3(1.0), rgb, c.y);
                        }

                        float rand(vec2 v){
                            v = fract(v * vec2(70.26593, 1.6682));
                            v += dot(v, v+23.45);
                            return fract(v.x*v.y);
                        }

                        vec2 rand_2(vec2 v){
                            float n = rand(v);
                            return vec2(n, rand(v + n));
                        }

                        float dist_line(vec2 which, vec2 p1, vec2 p2){
                            float r = clamp(dot(which - p1, p2 - p1) / dot(p2 - p1, p2 - p1), .0, 1.);
                            return length((which - p1)-(p2 - p1)*r);
                        }

                        float drawline(vec2 which, vec2 p1, vec2 p2, float w){
                            float dis = dist_line(which, p1, p2);
                            return smoothstep(.015*w, .005*w, dis)*smoothstep(.8, .0, distance(p1, p2)-.25);
                        }

                        vec2 Getpos(vec2 v){
                            vec2 p = rand_2(v);
                            return vec2(.5)+.4*vec2(cos(p.x*(iTime+5.)), sin(p.y*(iTime+5.)));
                        }

                        vec3 layer(vec2 uv, float w){
                            float m=.0;
                            
                            
                            vec2 fl_uv = floor(uv);
                            vec2 fr_uv = fract(uv);
                            
                            vec2 id = Getpos(fl_uv);
                            m = smoothstep(.08*w, .01*w, distance(fr_uv, id))*abs(sin((iTime+id.x)*4.));
                            
                            vec2 p[9];
                            int num = 0;
                            for(float i=-1.; i<=1.; i++){
                                for(float j=-1.; j<=1.; j++){
                                    p[num++] = vec2(i,j)+Getpos(fl_uv + vec2(i,j));
                                }
                            }

                            for(int i=0; i<9; i++){
                            m += drawline(fr_uv, p[4], p[i], w);
                            }
                            m += drawline(fr_uv, p[1], p[3], w);
                            m += drawline(fr_uv, p[1], p[5], w);
                            m += drawline(fr_uv, p[3], p[7], w);
                            m += drawline(fr_uv, p[5], p[7], w);
                            return vec3(m);
                        }


                        void main()
                        {
                            vec2 uv = gl_FragCoord.xy / iResolution.xy;
                            float yy = uv.y;
                            uv -= .5;
                            uv.x *= iResolution.x / iResolution.y;
                            uv *= .5;
                            
                            float t = iTime*.1;
                            float rs = sin(2.*t);
                            float rc = cos(2.*t);
                            uv *= mat2(rc, -rs, rs, rc);
                            
                            float m = .0;
                            vec3 v3 = vec3(1.);
                            vec2 fl_uv = floor(uv);
                            vec2 fr_uv = fract(uv);
                            
                            vec2 id = Getpos(fl_uv);
                            vec3 col = vec3(.0);
                            
                            for(float i=.0; i<1.; i+=1./8.){
                                float z = fract(i+t);
                                float size = mix(10., .5, z);
                                float al = smoothstep(.0, .8, z) * smoothstep(1., .8, z);
                                v3 = 0.5 + 0.5*cos(-1.2*z+iTime+uv.xyx+vec3(0,2,4));
                            col += layer(uv*size + i*27.385, 1.)*al*v3;
                            col += layer(uv*size + i*27.385, .4)*pow(al, 2.);
                            }
                            
                            //col *= smoothstep(1., .7, yy)*smoothstep(.0, .3, yy);
                            v3 = 0.5 + 0.5*cos(iTime-1.2+uv.xyx+vec3(0,2,4));
                            col += vec3(.8*yy)*.3*v3;
                            col += vec3(.2*(1.-yy))*.3*v3;
                            
                            vec3 textureColor = texture2D( colorTexture, vUv ).rgb;
                            vec3 fragColor =  col * (10.,10.,10.);
                            if( colorOrMap > 0.5 ) fragColor = fragColor * textureColor;
                            else fragColor = fragColor * materialColor;
                            gl_FragColor = vec4(fragColor ,1.0);
                        }
                        `}})}),window.onresize=()=>s.iResolution.value=new p(e.clientWidth,e.clientHeight);const v=j(),l=Q(140);m();function m(){l(()=>{v&&v.update(),s.iTime.value+=.005,t.render(o,i)}),n.value&&requestAnimationFrame(m)}}return(e,o)=>(w(),S("div",{class:"threeBox",ref_key:"threeBox",ref:n},null,512))}}),Tt=R(Ct,[["__scopeId","data-v-a065067f"]]),bt=C({__name:"lightShader",setup(h){const n=T();b(()=>d(n.value));async function d(e){const o=new z,i=new U(50,e.clientWidth/e.clientHeight,.1,1e5);o.add(i);const t=new P({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});t.setSize(e.clientWidth,e.clientHeight),t.setPixelRatio(window.devicePixelRatio*2),t.setClearColor(0),e.appendChild(t.domElement);const a=I(i,t),c=new B(5500);o.add(c);const r=L(N,o,i,a);r.add({fn:()=>{l.uniforms.colorTexture.value=Z("https://img0.baidu.com/it/u=1409096983,2384906094&fm=253&fmt=auto&app=138&f=JPEG?w=867&h=500")}},"fn").name("切换网络材质"),O(()=>r.domElement.hidden=!1),ee(()=>r.domElement.hidden=!0),H(()=>r.destroy());const s=await re("https://img2.baidu.com/it/u=639935574,2199430260&fm=253&fmt=auto&app=138&f=JPEG?w=658&h=494"),v=new G(100,100,100),l={uniforms:V.merge([k.phong.uniforms,{r:{type:"v2",value:new p(e.clientWidth,e.clientHeight)},t:{type:"f",value:0},colorTexture:{value:s}}]),vertexShader:k.phong.vertexShader,fragmentShader:k.phong.fragmentShader};l.vertexShader=l.vertexShader.replace(/#include <common>/,`
        varying vec2 vUv;
        #include <common>    
    `),l.vertexShader=l.vertexShader.replace("void main() {",`
        void main() {
        vUv = uv; 
    `),l.fragmentShader=l.fragmentShader.replace(/#include <common>/,`
        varying vec2 vUv;
        uniform sampler2D colorTexture;
        #include <common>    
    `),l.fragmentShader=l.fragmentShader.replace("vec4 diffuseColor = vec4( diffuse, opacity );",`
      vec3 color = texture2D( colorTexture, vUv ).rgb;
      vec4 diffuseColor = vec4( diffuse * color, opacity );
    `);const m=new F(l);m.lights=!0;var f=new W(v,m);o.add(f),u();function u(){t.render(o,i),n.value&&requestAnimationFrame(u)}}return(e,o)=>(w(),S("div",{class:"threeBox",ref_key:"threeBox",ref:n},null,512))}}),Rt=R(bt,[["__scopeId","data-v-87662827"]]),zt=C({__name:"lightSpecialShader",setup(h){const n=T();b(()=>d(n.value));async function d(e){const o=new z,i=new U(50,e.clientWidth/e.clientHeight,.1,1e5);o.add(i);const t=new P({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});t.setSize(e.clientWidth,e.clientHeight),t.setPixelRatio(window.devicePixelRatio*2),t.setClearColor(0),e.appendChild(t.domElement);const a=I(i,t),c=new B(5500);o.add(c);const r=L(N,o,i,a);r.add({fn:()=>{l.uniforms.colorTexture.value=Z("https://img0.baidu.com/it/u=1409096983,2384906094&fm=253&fmt=auto&app=138&f=JPEG?w=867&h=500")}},"fn").name("切换网络材质"),O(()=>r.domElement.hidden=!1),ee(()=>r.domElement.hidden=!0),H(()=>r.destroy());const s=await re("https://img2.baidu.com/it/u=639935574,2199430260&fm=253&fmt=auto&app=138&f=JPEG?w=658&h=494"),v=new G(100,100,100),l={uniforms:V.merge([k.phong.uniforms,{r:{type:"v2",value:new p(e.clientWidth,e.clientHeight)},t:{type:"f",value:0},colorTexture:{value:s}}]),vertexShader:k.phong.vertexShader,fragmentShader:k.phong.fragmentShader};l.vertexShader=l.vertexShader.replace(/#include <common>/,`
        varying vec2 vUv;
        #include <common>    
    `),l.vertexShader=l.vertexShader.replace("void main() {",`
        void main() {
        vUv = uv; 
    `),l.fragmentShader=l.fragmentShader.replace(/#include <common>/,`
        varying vec2 vUv;
        uniform vec2 r;
        uniform float t;
        uniform sampler2D colorTexture;
        #include <common> 
    `),l.fragmentShader=l.fragmentShader.replace("vec4 diffuseColor = vec4( diffuse, opacity );",`
       vec3 c;
        float l,z=t;
        for(int i=0;i<3;i++) {
            vec2 uv,p=gl_FragCoord.xy/r/2.0;
            uv=p +  2.0 * vUv;
            p-=.5;
            p.x*=r.x/r.y;
            z+=.07;
            l=length(p);
            uv+=p/l*(sin(z)+1.)*abs(sin(l*9.-z-z));
            c[i]=.01/length(mod(uv,1.)-.5);
        }
      vec3 color = texture2D( colorTexture, vUv ).rgb;
      vec3 mixedColor =  mix(color, c, 0.3);
      vec4 diffuseColor = vec4( diffuse * mixedColor, opacity );
    `);const m=new F(l);m.lights=!0;var f=new W(v,m);o.add(f),u();function u(){l.uniforms.t.value+=.05,t.render(o,i),n.value&&requestAnimationFrame(u)}}return(e,o)=>(w(),S("div",{class:"threeBox",ref_key:"threeBox",ref:n},null,512))}}),Ut=R(zt,[["__scopeId","data-v-f9fc8033"]]),Pt=C({__name:"modelShaderLight",setup(h){const n=T();b(()=>d(n.value));function d(e){const o=new z,i=new U(50,e.clientWidth/e.clientHeight,.1,1e5);o.add(i);const t=new P({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});t.setSize(e.clientWidth,e.clientHeight),t.setPixelRatio(window.devicePixelRatio*2),t.setClearColor(0),e.appendChild(t.domElement);const a={iResolution:{type:"v2",value:new p(e.clientWidth,e.clientHeight)},iTime:{type:"f",value:1},offset:{type:"v3",value:new $(0,0,0)}},c=I(i,t);let r={x:0,y:0,z:0};c.addEventListener("change",()=>{const u=c.target;a.offset.value=new $(u.x-r.x,u.y-r.y,u.z-r.z),r={...c.target}});const s=new B(5500);o.add(s);const v=L(N,o,i,c);H(()=>v.destroy()),q("http://guangfu/resource/chuankuayue.FBX",u=>{o.add(u),J(u).map(g=>{g.onBeforeCompile=(A,ae)=>{A.uniforms.iResolution=a.iResolution,A.uniforms.iTime=a.iTime,A.uniforms.offset=a.offset,A.fragmentShader=A.fragmentShader.replace(/#include <common>/,`
                        uniform vec2 iResolution;
                        uniform float iTime;
                        uniform vec4 offset;
                        #include <common> 
                    `),A.fragmentShader=A.fragmentShader.replace("vec4 diffuseColor = vec4( diffuse, opacity );",`
                        vec3 c;
                        float l,z=iTime;
                        for(int i=0;i<3;i++) {
                            vec2 uv,p=gl_FragCoord.xy/iResolution/2.0;
                            uv=p +  2.0;
                            p-=.5;
                            p.x*=iResolution.x/iResolution.y;
                            z+=.07;
                            l=length(p);
                            uv+=p/l*(sin(z)+1.)*abs(sin(l*9.-z-z));
                            c[i]=.01/length(mod(uv,1.)-.5);
                        }
                            
                        vec4 diffuseColor = vec4( diffuse * c, opacity );
                    `)}})}),window.onresize=()=>a.iResolution.value=new p(e.clientWidth,e.clientHeight);const l=j(),m=Q(140);f();function f(){m(()=>{l&&l.update(),a.iTime.value+=.005,t.render(o,i)}),n.value&&requestAnimationFrame(f)}}return(e,o)=>(w(),S("div",{class:"threeBox",ref_key:"threeBox",ref:n},null,512))}}),Et=R(Pt,[["__scopeId","data-v-e06be849"]]),Bt=C({__name:"modelShaderLightUv",setup(h){const n=T();b(()=>d(n.value));function d(e){const o=new z,i=new U(50,e.clientWidth/e.clientHeight,.1,1e5);o.add(i);const t=new P({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});t.setSize(e.clientWidth,e.clientHeight),t.setPixelRatio(window.devicePixelRatio*2),t.setClearColor(0),e.appendChild(t.domElement);const a=I(i,t),c=new B(5500);o.add(c);const r=L(N,o,i,a);H(()=>r.destroy());const s={iResolution:{type:"v2",value:new p(e.clientWidth,e.clientHeight)},iTime:{type:"f",value:1}};q("http://guangfu/resource/tileset.FBX",f=>{o.add(f),J(f).map(E=>{E.onBeforeCompile=(g,A)=>{g.uniforms.iResolution=s.iResolution,g.uniforms.iTime=s.iTime,g.fragmentShader=g.fragmentShader.replace(/#include <common>/,`
                        uniform vec2 iResolution;
                        uniform float iTime;
                        #include <common> 
                    `),g.fragmentShader=g.fragmentShader.replace("vec4 diffuseColor = vec4( diffuse, opacity );",`
                        vec3 c;
                        float l,z=iTime;
                        for(int i=0;i<3;i++) {
                            vec2 uv,p=gl_FragCoord.xy/iResolution/2.0;
                            uv=p +  2.0;

                            #ifdef USE_UV
                             uv *= vUv;
                            #else
                             uv *= vec2(0.0);
                            #endif
                            
                            p-=.5;
                            p.x*=iResolution.x/iResolution.y;
                            z+=.07;
                            l=length(p);
                            uv+=p/l*(sin(z)+1.)*abs(sin(l*9.-z-z));
                            c[i]=.01/length(mod(uv,1.)-.5);
                        }
                            
                        vec4 diffuseColor = vec4( diffuse * c, opacity );
                    `)}})}),window.onresize=()=>s.iResolution.value=new p(e.clientWidth,e.clientHeight);const v=j(),l=Q(140);m();function m(){l(()=>{v&&v.update(),s.iTime.value+=.005,t.render(o,i)}),n.value&&requestAnimationFrame(m)}}return(e,o)=>(w(),S("div",{class:"threeBox",ref_key:"threeBox",ref:n},null,512))}}),It=R(Bt,[["__scopeId","data-v-b5fbb6f6"]]),At=C({__name:"modelShaderLightUvClick",setup(h){const n=T();let d={},e;b(()=>t(n.value));function o(a){const c=he(a),r=Xe(c,d.camera,d.scene);if(r){const{object:s,face:v,point:l}=r,m=J(s);s.material=m.map(u=>u.clone());const f=~~(Math.random()*100);e.iColorIntensity.value=new $(f,f,f),s.material.map(u=>{u.needsUpdate=!0,i(u)})}}function i(a){return a.onBeforeCompile=c=>{c.uniforms.iResolution=e.iResolution,c.uniforms.iTime=e.iTime,c.uniforms.iColorIntensity={...e.iColorIntensity},c.fragmentShader=c.fragmentShader.replace(/#include <common>/,`
            uniform vec2 iResolution;
            uniform float iTime;
            uniform vec3 iColorIntensity;
            #include <common> 
        `),c.fragmentShader=c.fragmentShader.replace("vec4 diffuseColor = vec4( diffuse, opacity );",`
            vec3 c;
            float l,z=iTime;
            for(int i=0;i<3;i++) {
                vec2 uv,p=gl_FragCoord.xy/iResolution/2.0;
                uv=p +  2.0;

                #ifdef USE_UV
                    uv *= vUv;
                #else
                    uv *= vec2(0.0);
                #endif
                
                p-=.5;
                p.x*=iResolution.x/iResolution.y;
                z+=.07;
                l=length(p);
                uv+=p/l*(sin(z)+1.)*abs(sin(l*9.-z-z));
                c[i]=.01/length(mod(uv,1.)-.5);
            }
                
            vec4 diffuseColor = vec4( diffuse * c * iColorIntensity, opacity );
        `)},a}function t(a){const c=new z,r=new U(50,a.clientWidth/a.clientHeight,.1,1e5);c.add(r);const s=new P({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});s.setSize(a.clientWidth,a.clientHeight),s.setPixelRatio(window.devicePixelRatio*2),s.setClearColor(0),a.appendChild(s.domElement);const v=I(r,s);d.camera=r,d.scene=c;const l=new B(5500);c.add(l);const m=L(N,c,r,v);H(()=>m.destroy()),e={iResolution:{type:"v2",value:new p(a.clientWidth,a.clientHeight)},iTime:{type:"f",value:1},iColorIntensity:{type:"v3",value:new $(1,1,1)}},q("http://guangfu/resource/tileset.FBX",g=>{c.add(g)}),window.onresize=()=>e.iResolution.value=new p(a.clientWidth,a.clientHeight);const f=j(),u=Q(140);E();function E(){u(()=>{f&&f.update(),e.iTime.value+=.005,s.render(c,r)}),n.value&&requestAnimationFrame(E)}}return(a,c)=>(w(),S("div",{class:"threeBox",ref_key:"threeBox",ref:n,onClick:o},null,512))}}),Ft=R(At,[["__scopeId","data-v-16ba76f6"]]),kt=C({__name:"customBlendShader",setup(h){const n=T();b(()=>d(n.value));async function d(e){const o=new z,i=new U(50,e.clientWidth/e.clientHeight,.1,1e5);o.add(i);const t=new P({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});t.setSize(e.clientWidth,e.clientHeight),t.setPixelRatio(window.devicePixelRatio*2),t.setClearColor(0),e.appendChild(t.domElement);const a=I(i,t),c=new B(5500);o.add(c);const r=L(N,o,i,a);r.add({fn:()=>{l.uniforms.colorTexture.value=Z("https://img0.baidu.com/it/u=1409096983,2384906094&fm=253&fmt=auto&app=138&f=JPEG?w=867&h=500")}},"fn").name("切换网络材质"),O(()=>r.domElement.hidden=!1),ee(()=>r.domElement.hidden=!0),H(()=>r.destroy());const s=await re("https://img2.baidu.com/it/u=721255996,2484096078&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=675"),v=new G(100,100,100),l={uniforms:V.merge([k.phong.uniforms,{r:{type:"v2",value:new p(e.clientWidth,e.clientHeight)},t:{type:"f",value:0},colorTexture:{value:s},calcType:{value:2}}]),vertexShader:k.phong.vertexShader,fragmentShader:k.phong.fragmentShader};r.add(l.uniforms.calcType,"value",[0,1,2,3,4,5,6,7,8,9]).name("混合类型"),l.vertexShader=l.vertexShader.replace(/#include <common>/,`
        varying vec2 vUv;
        #include <common>    
    `),l.vertexShader=l.vertexShader.replace("void main() {",`
        void main() {
        vUv = uv; 
    `),l.fragmentShader=l.fragmentShader.replace(/#include <common>/,`
        precision highp float;
        varying vec2 vUv;
        uniform vec2 r;
        uniform float t;
        uniform float calcType;
        uniform sampler2D colorTexture;
        #include <common> 
    `),l.fragmentShader=l.fragmentShader.replace("vec4 diffuseColor = vec4( diffuse, opacity );",`
       vec3 c;
        float l,z=t;
        for(int i=0;i<3;i++) {
            vec2 uv,p=gl_FragCoord.xy/r/2.0;
            uv=p +  2.0 * vUv;
            p-=.5;
            p.x*=r.x/r.y;
            z+=.07;
            l=length(p);
            uv+=p/l*(sin(z)+1.)*abs(sin(l*9.-z-z));
            c[i]=.01/length(mod(uv,1.)-.5);
        }
      vec3 color = texture2D( colorTexture, vUv ).rgb;
      vec3 mixedColor;
      if (calcType == 0.0)  mixedColor = max(color, c);
      else if(calcType == 1.0) mixedColor = min(color, c);
      else if(calcType == 2.0) mixedColor = mix(color, c, 0.5);
      else if(calcType == 3.0) mixedColor = mod(color, c);
      else if(calcType == 4.0) mixedColor = pow(color, c);
      else if(calcType == 5.0) mixedColor = step(color, c);
      else if(calcType == 6.0) mixedColor = color + c;
      else if(calcType == 7.0) mixedColor = color - c;
      else if(calcType == 8.0) mixedColor = c  - color;
      else if(calcType == 9.0) mixedColor = color + c - vec3(1.0) * c * color;
      else mixedColor = color;
      vec4 diffuseColor = vec4( diffuse * mixedColor, opacity );
    `);const m=new F(l);m.lights=!0;var f=new W(v,m);o.add(f),u();function u(){l.uniforms.t.value+=.05,t.render(o,i),n.value&&requestAnimationFrame(u)}}return(e,o)=>(w(),S("div",{class:"threeBox",ref_key:"threeBox",ref:n},null,512))}}),Wt=R(kt,[["__scopeId","data-v-645fdd3e"]]),Ht={style:{position:"absolute",bottom:"0"}},Nt=C({__name:"customBlendVideoShader",setup(h){const n=T();let d;b(()=>t(n.value));function e(){d.video.play()}function o(){d.video.pause()}function i(){d.video.muted=!d.video.muted}async function t(a){const c=new z,r=new U(50,a.clientWidth/a.clientHeight,.1,1e5);c.add(r);const s=new P({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});s.setSize(a.clientWidth,a.clientHeight),s.setPixelRatio(window.devicePixelRatio*2),s.setClearColor(0),a.appendChild(s.domElement);const v=I(r,s),l=new B(5500);c.add(l);const m=L(N,c,r,v);O(()=>m.domElement.hidden=!1),ee(()=>m.domElement.hidden=!0),H(()=>m.destroy()),d=await Ye("http://vjs.zencdn.net/v/oceans.mp4"),d.video.muted=!0,d.video.play();const f=new G(100,100,100),u={uniforms:V.merge([k.phong.uniforms,{r:{type:"v2",value:new p(a.clientWidth,a.clientHeight)},t:{type:"f",value:0},colorTexture:{value:d},calcType:{value:2}}]),vertexShader:k.phong.vertexShader,fragmentShader:k.phong.fragmentShader};m.add(u.uniforms.calcType,"value",[0,1,2,3,4,5,6,7,8,9]).name("混合类型"),u.vertexShader=u.vertexShader.replace(/#include <common>/,`
        varying vec2 vUv;
        #include <common>    
    `),u.vertexShader=u.vertexShader.replace("void main() {",`
        void main() {
        vUv = uv; 
    `),u.fragmentShader=u.fragmentShader.replace(/#include <common>/,`
        precision highp float;
        varying vec2 vUv;
        uniform vec2 r;
        uniform float t;
        uniform float calcType;
        uniform sampler2D colorTexture;
        #include <common> 
    `),u.fragmentShader=u.fragmentShader.replace("vec4 diffuseColor = vec4( diffuse, opacity );",`
       vec3 c;
        float l,z=t;
        for(int i=0;i<3;i++) {
            vec2 uv,p=gl_FragCoord.xy/r/2.0;
            uv=p +  2.0 * vUv;
            p-=.5;
            p.x*=r.x/r.y;
            z+=.07;
            l=length(p);
            uv+=p/l*(sin(z)+1.)*abs(sin(l*9.-z-z));
            c[i]=.01/length(mod(uv,1.)-.5);
        }
      vec3 color = texture2D( colorTexture, vUv ).rgb;
      vec3 mixedColor;
      if (calcType == 0.0)  mixedColor = max(color, c);
      else if(calcType == 1.0) mixedColor = min(color, c);
      else if(calcType == 2.0) mixedColor = mix(color, c, 0.5);
      else if(calcType == 3.0) mixedColor = mod(color, c);
      else if(calcType == 4.0) mixedColor = pow(color, c);
      else if(calcType == 5.0) mixedColor = step(color, c);
      else if(calcType == 6.0) mixedColor = color + c;
      else if(calcType == 7.0) mixedColor = color - c;
      else if(calcType == 8.0) mixedColor = c  - color;
      else if(calcType == 9.0) mixedColor = color + c - vec3(1.0) * c * color;
      else mixedColor = color;
      vec4 diffuseColor = vec4( diffuse * mixedColor, opacity );
    `);const E=new F(u);E.lights=!0;var g=new W(f,E);c.add(g),A();function A(){u.uniforms.t.value+=.05,s.render(c,r),n.value&&requestAnimationFrame(A)}}return(a,c)=>{const r=me("el-button");return w(),S(ye,null,[oe("div",{class:"threeBox",ref_key:"threeBox",ref:n},null,512),oe("div",Ht,[x(r,{onClick:e},{default:y(()=>[_("播放")]),_:1}),x(r,{onClick:o},{default:y(()=>[_("停止")]),_:1}),x(r,{onClick:i},{default:y(()=>[_("声音")]),_:1})])],64)}}}),Lt=R(Nt,[["__scopeId","data-v-3a9399d8"]]),Gt=`  varying vec2 vUv;
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    
  }`,ve=`
 
 uniform float time;
  uniform float opacity;
  uniform vec3 color;
  uniform float num;
  uniform float hiz;

  varying vec2 vUv;

  void main() {
    vec4 fragColor = vec4(0.);
    float sin = sin((vUv.y - time * hiz) * 10. * num);
    float high = 0.92;
    float medium = 0.4;
    if (sin > high) {
      fragColor = vec4(mix(vec3(.8, 1., 1.), color, (1. - sin) / (1. - high)), 1.);
    } else if(sin > medium) {
      fragColor = vec4(color, mix(1., 0., 1.-(sin - medium) / (high - medium)));
    } else {
      fragColor = vec4(color, 0.);
    }

    vec3 fade = mix(color, vec3(0., 0., 0.), vUv.y);
    fragColor = mix(fragColor, vec4(fade, 1.), 0.85);
    gl_FragColor = vec4(fragColor.rgb, fragColor.a * opacity * (1. - vUv.y));
  }
 `,$t={__name:"shaderFence",setup(h){console.log(ve);const n=new F({uniforms:{time:{type:"pv2",value:0},color:{type:"uvs",value:new X("#FF4127")},opacity:{type:"pv2",value:1},num:{type:"pv2",value:10},hiz:{type:"pv2",value:.03}},vertexShader:Gt,fragmentShader:ve,blending:ne,transparent:!0,depthWrite:!1,depthTest:!0,side:K});let d=T(null),e,o,i;b(()=>{a(),d.value.appendChild(e.domElement),t()});function t(){e.render(o,i),n&&(n.uniforms.time.value+=.015),requestAnimationFrame(t)}function a(){e=new P({antialias:!0}),e.physicallyCorrectLights=!0,e.toneMapping=fe,e.toneMappingExposure=.85,e.shadowMap.enabled=!0,e.shadowMap.type=Ue,e.setClearColor(0,0);let r=d.value.clientWidth,s=d.value.clientHeight;e.setPixelRatio(window.devicePixelRatio),e.setSize(r,s),o=new z,i=new U(30,r/s,1,4e4),i.up.set(0,0,1),new Ze(i,e.domElement),i.position.set(50,50,50),c(),o.add(new B(50));let v=new ie(16777215,.8);o.add(v);const l=new Pe(43775,16755200,.8);o.add(l)}function c(){let r=[0,0,10,0,10,10,0,10,0,0],s=[],v=[],l=10;for(let u=0;u<r.length-2;u+=2)s.push(r[u],r[u+1],0,r[u+2],r[u+3],0,r[u+2],r[u+3],l),s.push(r[u],r[u+1],0,r[u+2],r[u+3],l,r[u],r[u+1],l),v.push(0,0,1,0,1,1),v.push(0,0,1,1,0,1);const m=new pe;m.attributes.position=new le(new Float32Array(s),3),m.attributes.uv=new le(new Float32Array(v),2),m.computeVertexNormals(),new Ee({color:302836,side:K});let f=new W(m,n);o.add(f)}return(r,s)=>(w(),S("div",{ref_key:"test",ref:d,class:"test"},null,512))}},Vt=R($t,[["__scopeId","data-v-ed87c862"]]),qt=C({__name:"movingParticles",setup(h){const n=T();b(()=>d(n.value));function d(e){const o=new z,i=new U(50,e.clientWidth/e.clientHeight,.1,1e5);o.add(i),i.position.set(0,300,0);const t=new P({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});t.setSize(e.clientWidth,e.clientHeight),t.setPixelRatio(window.devicePixelRatio*2),e.appendChild(t.domElement),I(i,t);const{geometry:a,geometryRender:c}=Ke(1e5,0,1e3,.01),r=new Be({size:10,color:Math.random()*16777215,map:new Ie().load("/snow.png"),transparent:!0,sizeAttenuation:!0,alphaTest:.4,blending:ne,depthTest:!0});console.log(r);const s=new Ae(a,r);o.add(s);function v(){c(),t.render(o,i),requestAnimationFrame(v)}v()}return(e,o)=>(w(),S("div",{class:"threeBox",ref_key:"threeBox",ref:n},null,512))}}),jt=R(qt,[["__scopeId","data-v-edb93e52"]]);D.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new p(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};k.line={uniforms:V.merge([D.common,D.fog,D.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Qt extends F{constructor(n){super({type:"LineMaterial",uniforms:V.clone(k.line.uniforms),vertexShader:k.line.vertexShader,fragmentShader:k.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(n)}get color(){return this.uniforms.diffuse.value}set color(n){this.uniforms.diffuse.value=n}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(n){n===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(n){this.uniforms.linewidth&&(this.uniforms.linewidth.value=n)}get dashed(){return"USE_DASH"in this.defines}set dashed(n){n===!0!==this.dashed&&(this.needsUpdate=!0),n===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(n){this.uniforms.dashScale.value=n}get dashSize(){return this.uniforms.dashSize.value}set dashSize(n){this.uniforms.dashSize.value=n}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(n){this.uniforms.dashOffset.value=n}get gapSize(){return this.uniforms.gapSize.value}set gapSize(n){this.uniforms.gapSize.value=n}get opacity(){return this.uniforms.opacity.value}set opacity(n){this.uniforms&&(this.uniforms.opacity.value=n)}get resolution(){return this.uniforms.resolution.value}set resolution(n){this.uniforms.resolution.value.copy(n)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(n){this.defines&&(n===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),n===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Xt=C({__name:"flyLine",setup(h){const n=T();b(()=>d(n.value));function d(e){const o=new z,i=new U(50,e.clientWidth/e.clientHeight,.1,1e5);o.add(i);const t=new P({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});t.setSize(e.clientWidth,e.clientHeight),t.setPixelRatio(window.devicePixelRatio*2),t.setClearColor(0),e.appendChild(t.domElement),I(i,t);const a=new B(5500);o.add(a);for(var c=new Fe([new $(-4,0,0),new $(0,4,0),new $(4,0,0)]),r=c.getPoints(50),s=new pe().setFromPoints(r),v=[],l=0;l<r.length;l++)v.push(1,1,1);console.log(r),s.setFromPoints(r),s.setAttribute("color",new ke(v,3));var m=new Qt({linewidth:20}),f=new We(s,m);o.add(f),u();function u(){t.render(o,i),n.value&&requestAnimationFrame(u)}}return(e,o)=>(w(),S("div",{class:"threeBox",ref_key:"threeBox",ref:n},null,512))}}),Yt=R(Xt,[["__scopeId","data-v-9ffe4ceb"]]),ue={name:"ConvolutionShader",defines:{KERNEL_SIZE_FLOAT:"25.0",KERNEL_SIZE_INT:"25"},uniforms:{tDiffuse:{value:null},uImageIncrement:{value:new p(.001953125,0)},cKernel:{value:[]}},vertexShader:`

		uniform vec2 uImageIncrement;

		varying vec2 vUv;

		void main() {

			vUv = uv - ( ( KERNEL_SIZE_FLOAT - 1.0 ) / 2.0 ) * uImageIncrement;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float cKernel[ KERNEL_SIZE_INT ];

		uniform sampler2D tDiffuse;
		uniform vec2 uImageIncrement;

		varying vec2 vUv;

		void main() {

			vec2 imageCoord = vUv;
			vec4 sum = vec4( 0.0, 0.0, 0.0, 0.0 );

			for( int i = 0; i < KERNEL_SIZE_INT; i ++ ) {

				sum += texture2D( tDiffuse, imageCoord ) * cKernel[ i ];
				imageCoord += uImageIncrement;

			}

			gl_FragColor = sum;

		}`,buildKernel:function(h){let d=2*Math.ceil(h*3)+1;d>25&&(d=25);const e=(d-1)*.5,o=new Array(d);let i=0;for(let t=0;t<d;++t)o[t]=Kt(t-e,h),i+=o[t];for(let t=0;t<d;++t)o[t]/=i;return o}};function Kt(h,n){return Math.exp(-(h*h)/(2*n*n))}class Y extends ge{constructor(n=1,d=25,e=4){super(),this.renderTargetX=new ce(1,1,{type:de}),this.renderTargetX.texture.name="BloomPass.x",this.renderTargetY=new ce(1,1,{type:de}),this.renderTargetY.texture.name="BloomPass.y",this.combineUniforms=V.clone(M.uniforms),this.combineUniforms.strength.value=n,this.materialCombine=new F({name:M.name,uniforms:this.combineUniforms,vertexShader:M.vertexShader,fragmentShader:M.fragmentShader,blending:ne,transparent:!0});const o=ue;this.convolutionUniforms=V.clone(o.uniforms),this.convolutionUniforms.uImageIncrement.value=Y.blurX,this.convolutionUniforms.cKernel.value=ue.buildKernel(e),this.materialConvolution=new F({name:o.name,uniforms:this.convolutionUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,defines:{KERNEL_SIZE_FLOAT:d.toFixed(1),KERNEL_SIZE_INT:d.toFixed(0)}}),this.needsSwap=!1,this.fsQuad=new xe(null)}render(n,d,e,o,i){i&&n.state.buffers.stencil.setTest(!1),this.fsQuad.material=this.materialConvolution,this.convolutionUniforms.tDiffuse.value=e.texture,this.convolutionUniforms.uImageIncrement.value=Y.blurX,n.setRenderTarget(this.renderTargetX),n.clear(),this.fsQuad.render(n),this.convolutionUniforms.tDiffuse.value=this.renderTargetX.texture,this.convolutionUniforms.uImageIncrement.value=Y.blurY,n.setRenderTarget(this.renderTargetY),n.clear(),this.fsQuad.render(n),this.fsQuad.material=this.materialCombine,this.combineUniforms.tDiffuse.value=this.renderTargetY.texture,i&&n.state.buffers.stencil.setTest(!0),n.setRenderTarget(e),this.clear&&n.clear(),this.fsQuad.render(n)}setSize(n,d){this.renderTargetX.setSize(n,d),this.renderTargetY.setSize(n,d)}dispose(){this.renderTargetX.dispose(),this.renderTargetY.dispose(),this.materialCombine.dispose(),this.materialConvolution.dispose(),this.fsQuad.dispose()}}const M={name:"CombineShader",uniforms:{tDiffuse:{value:null},strength:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float strength;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = strength * texel;

		}`};Y.blurX=new p(.001953125,0);Y.blurY=new p(0,.001953125);const Jt={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Zt extends ge{constructor(){super();const n=Jt;this.uniforms=V.clone(n.uniforms),this.material=new He({name:n.name,uniforms:this.uniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader}),this.fsQuad=new xe(this.material),this._outputColorSpace=null,this._toneMapping=null}render(n,d,e){this.uniforms.tDiffuse.value=e.texture,this.uniforms.toneMappingExposure.value=n.toneMappingExposure,(this._outputColorSpace!==n.outputColorSpace||this._toneMapping!==n.toneMapping)&&(this._outputColorSpace=n.outputColorSpace,this._toneMapping=n.toneMapping,this.material.defines={},Ne.getTransfer(this._outputColorSpace)===Le&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ge?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$e?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ve?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===fe?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===qe?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===je&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(n.setRenderTarget(null),this.fsQuad.render(n)):(n.setRenderTarget(d),this.clear&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),this.fsQuad.render(n))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Mt=C({__name:"modelBloomShader",setup(h){const n=T();b(()=>{d(n.value)});function d(e){const o=new z,i=new U(50,e.clientWidth/e.clientHeight,.1,1e5);i.position.set(0,0,10),o.add(i);const t=new P({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0});t.setSize(e.clientWidth,e.clientHeight),t.setPixelRatio(window.devicePixelRatio*2),t.setClearColor(0),e.appendChild(t.domElement),I(i,t);const a=new B(5500);o.add(a);const c=new ie(16777215,1);o.add(c);const r=new W(new G(1,1,1),new Qe({color:"yellow"}));o.add(r);const s=new Y(1.25),v=new Me(t);v.addPass(new Je(o,i)),v.addPass(s),v.addPass(new Zt),l();function l(){v.render(),n.value&&requestAnimationFrame(l)}}return(e,o)=>(w(),S("div",{class:"threeBox",ref_key:"threeBox",ref:n},null,512))}}),Dt=R(Mt,[["__scopeId","data-v-acf85ea1"]]),Ot={class:"flex"},eo={key:0,class:"box"},to={class:"cmpt"},oo=C({__name:"index",setup(h){const n=_e();let d=we();const e=o=>{be(o),d.value={point:De,shaderSky:et,shader1:ot,shader2:nt,shader3:at,shaderWater:lt,shaderMountain:dt,shaderTree:ut,textureWithShader:ft,textureSpecialShader:ht,lightMoveShader:xt,modelShader:_t,modelShader2:St,modelShader3:Tt,lightShader:Rt,lightSpecialShader:Ut,modelShaderLight:Et,modelShaderLightUv:It,modelShaderLightUvClick:Ft,customBlendShader:Wt,customBlendVideoShader:Lt,shaderFence:Vt,movingParticles:jt,flyLine:Yt,modelBloomShader:Dt}[o],localStorage.setItem("glsl",o)};return e(localStorage.getItem("glsl")??"shaderWater"),(o,i)=>{const t=me("el-button");return w(),S("div",Ot,[se(n).$state.power?(w(),S("div",eo,[x(t,{plain:"",onClick:i[0]||(i[0]=a=>e("point"))},{default:y(()=>[_("原生webgl")]),_:1}),x(t,{plain:"",onClick:i[1]||(i[1]=a=>e("shaderSky"))},{default:y(()=>[_("shader天空")]),_:1}),x(t,{plain:"",onClick:i[2]||(i[2]=a=>e("shader1"))},{default:y(()=>[_("shader闪烁案例")]),_:1}),x(t,{plain:"",onClick:i[3]||(i[3]=a=>e("shader2"))},{default:y(()=>[_("shader色元")]),_:1}),x(t,{plain:"",onClick:i[4]||(i[4]=a=>e("shader3"))},{default:y(()=>[_("平面+四方波shader")]),_:1}),x(t,{plain:"",onClick:i[5]||(i[5]=a=>e("shaderWater"))},{default:y(()=>[_("正方体+UV+水shader")]),_:1}),x(t,{plain:"",onClick:i[6]||(i[6]=a=>e("shaderMountain"))},{default:y(()=>[_("正方体+UV+山shader")]),_:1}),x(t,{plain:"",onClick:i[7]||(i[7]=a=>e("shaderTree"))},{default:y(()=>[_("正方体+UV+树shader")]),_:1}),x(t,{plain:"",onClick:i[8]||(i[8]=a=>e("textureWithShader"))},{default:y(()=>[_("两面shader+4面贴图")]),_:1}),x(t,{plain:"",onClick:i[9]||(i[9]=a=>e("textureSpecialShader"))},{default:y(()=>[_("贴图和shaer特效融合")]),_:1}),x(t,{plain:"",onClick:i[10]||(i[10]=a=>e("lightMoveShader"))},{default:y(()=>[_("模型扫光")]),_:1}),x(t,{plain:"",onClick:i[11]||(i[11]=a=>e("modelShader"))},{default:y(()=>[_("模型+着色+非光照+UV案例1")]),_:1}),x(t,{plain:"",onClick:i[12]||(i[12]=a=>e("modelShader2"))},{default:y(()=>[_("模型+着色+非光照+UV案例2")]),_:1}),x(t,{plain:"",onClick:i[13]||(i[13]=a=>e("modelShader3"))},{default:y(()=>[_("模型贴图+着色+非光照+无UV")]),_:1}),x(t,{plain:"",onClick:i[14]||(i[14]=a=>e("lightShader"))},{default:y(()=>[_("光照+shader贴图")]),_:1}),x(t,{plain:"",onClick:i[15]||(i[15]=a=>e("lightSpecialShader"))},{default:y(()=>[_("光照+shader贴图+着色")]),_:1}),x(t,{plain:"",onClick:i[16]||(i[16]=a=>e("modelShaderLight"))},{default:y(()=>[_("模型贴图+着色+光照+无UV")]),_:1}),x(t,{plain:"",onClick:i[17]||(i[17]=a=>e("modelShaderLightUv"))},{default:y(()=>[_("模型贴图+着色+光照+UV")]),_:1}),x(t,{plain:"",onClick:i[18]||(i[18]=a=>e("modelShaderLightUvClick"))},{default:y(()=>[_("块+模型贴图+着色+光照+UV")]),_:1}),x(t,{plain:"",onClick:i[19]||(i[19]=a=>e("customBlendShader"))},{default:y(()=>[_("特效多种函数混合着色")]),_:1}),x(t,{plain:"",onClick:i[20]||(i[20]=a=>e("customBlendVideoShader"))},{default:y(()=>[_("特效视频混合着色")]),_:1}),x(t,{plain:"",onClick:i[21]||(i[21]=a=>e("shaderFence"))},{default:y(()=>[_("围栏效果")]),_:1}),x(t,{plain:"",onClick:i[22]||(i[22]=a=>e("movingParticles"))},{default:y(()=>[_("粒子")]),_:1}),x(t,{plain:"",onClick:i[23]||(i[23]=a=>e("flyLine"))},{default:y(()=>[_("飞线")]),_:1}),x(t,{plain:"",onClick:i[24]||(i[24]=a=>e("modelBloomShader"))},{default:y(()=>[_("模型bloomShader")]),_:1})])):Se("",!0),oe("div",to,[(w(),Ce(Te(se(d))))])])}}}),lo=R(oo,[["__scopeId","data-v-4fc94b1c"]]);export{lo as default};

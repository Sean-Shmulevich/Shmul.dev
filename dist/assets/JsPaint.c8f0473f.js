import{S as C,i as L,s as T,e as x,b as J,M as A,f as o,d as e,N as H,t as X,g as O,h as r,l as D,O as I,j as G,k as F,L as E,r as K,v as N,w as S,x as q,y as Q,A as R,B as U,C as V,D as P,G as Z,H as $,z as ee,J as te,K as ne}from"./index.86f4e5d9.js";function ie(n){let t,i,p,z,a,l,g,w,b,h,_,u,d,c,f,v,M,y,Y;return{c(){t=x("div"),i=x("div"),p=x("div"),p.innerHTML='<span class="filesBarText" style="display: block;transform: translateY(-4px);">JS Paint</span>',z=J(),a=x("div"),l=x("button"),g=J(),w=x("button"),b=J(),h=x("button"),_=J(),u=x("div"),d=x("div"),c=x("div"),f=x("iframe"),M=A(`;
                    https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css`),o(p,"class","title-bar-text"),e(p,"text-align","right"),e(p,"float","left"),e(p,"font-size","10px"),e(p,"margin-left","10px"),e(p,"margin-top","4px"),o(l,"class","minimize"),e(l,"min-width","15px"),o(l,"aria-label","Minimize"),o(w,"class","full"),e(w,"min-width","15px"),e(w,"margin-left","2px"),o(w,"aria-label","Maximize"),o(h,"class","close"),e(h,"min-width","15px"),o(h,"aria-label","Close"),o(a,"class","title-bar-controls"),e(a,"position","relative"),e(a,"float","right"),e(a,"margin-right","5px"),e(a,"padding-top","5px"),o(i,"id","jsBar"),o(i,"class","title-bar fileGridBar windowBar "),e(i,"width","unset"),o(f,"title","Javascript paint application"),H(f.src,v="https://jspaint.app")||o(f,"src",v),e(f,"width","100%"),e(f,"height","100%"),e(f,"pointer-events","none"),o(f,"class","svelte-qnj62q"),X(f,"mouseOn",n[0]===n[9].zIdx),o(c,"class","window-body"),e(c,"height","calc(100% - 35px)"),e(c,"margin","0px"),o(d,"class","window myWindow"),e(d,"max-height","625px"),e(d,"height","inherit"),e(d,"width","calc(100% - 14px)"),e(d,"background","white"),e(d,"margin-left","0px"),e(d,"border","4px solid #c0c0c0",1),e(d,"box-shadow","inset -1px -1px #000000, inset 1px 1px #0a0a0a, inset -2px -2px #808080, inset 2px 2px #dfdfdf"),e(u,"border","1px solid #000000"),e(u,"display","inline-block"),e(u,"width","100%"),e(u,"margin-top","-6px"),e(u,"height","inherit"),e(u,"max-height","625px"),o(t,"id","JSremBoxMobile"),o(t,"class","remBoxMobile svelte-qnj62q"),e(t,"position","fixed"),e(t,"left",n[1]+"px"),e(t,"top",n[2]+"px"),e(t,"--currX",n[1]+"px"),e(t,"--currY",n[2]+"px"),e(t,"--menuX",n[6]+"px"),e(t,"--menuY",n[7]+"px"),e(t,"z-index",n[0]),e(t,"resize","both"),e(t,"overflow","hidden"),e(t,"height","500px"),e(t,"width",n[4]+"px"),e(t,"max-height","625px"),e(t,"max-width","833px"),e(t,"min-width","200px"),e(t,"min-height","250px"),X(t,"classname",n[3])},m(B,m){O(B,t,m),r(t,i),r(i,p),r(i,z),r(i,a),r(a,l),r(a,g),r(a,w),r(a,b),r(a,h),r(t,_),r(t,u),r(u,d),r(d,c),r(c,f),r(c,M),n[15](t),y||(Y=[D(l,"mousedown",function(){I(n[8])&&n[8].apply(this,arguments)},!0),D(l,"touchstart",function(){I(n[8])&&n[8].apply(this,arguments)}),D(h,"mousedown",n[13]),D(h,"touchstart",n[13]),G(F.call(null,i,{relativeTo:document.body,onDragStart:n[10],onDragMove:n[11],onDragEnd:n[12],minX:0,minY:0})),D(t,"mousedown",n[14])],y=!0)},p(B,[m]){n=B,m&513&&X(f,"mouseOn",n[0]===n[9].zIdx),m&2&&e(t,"left",n[1]+"px"),m&4&&e(t,"top",n[2]+"px"),m&2&&e(t,"--currX",n[1]+"px"),m&4&&e(t,"--currY",n[2]+"px"),m&64&&e(t,"--menuX",n[6]+"px"),m&128&&e(t,"--menuY",n[7]+"px"),m&1&&e(t,"z-index",n[0]),m&16&&e(t,"width",n[4]+"px"),m&8&&X(t,"classname",n[3])},i:E,o:E,d(B){B&&K(t),n[15](null),y=!1,N(Y)}}}function se(n,t,i){let p,z;S(n,q,s=>i(9,p=s)),S(n,Q,s=>i(17,z=s));let{zIdx:a=0}=t,{BoxX:l=200,BoxY:g=100}=t,w=350,{hide:b=!1}=t,h,_,u,d,c;R(()=>{window.innerWidth<660&&(i(1,l=50),i(2,g=100)),window.innerWidth<465&&(i(1,l=20),i(2,g=100)),window.innerWidth<350&&i(4,w=window.innerWidth),i(8,c=()=>{i(3,[b,_,u]=U(z,V,b,"Js Paint","#minButtJsPaint","#JSremBoxMobile"),b,i(6,_),i(7,u))}),P&&document.getElementById("jsBar").addEventListener("touchstart",d=s=>{Z(s,c)})}),$(()=>{P&&document.getElementById("jsBar").removeEventListener("touchstart",d)});function f(){return{x:l,y:g}}function v(s,j,W,k){i(1,l=s),i(2,g=j)}function M(s,j,W,k){i(1,l=s),i(2,g=j)}const y=ee();function Y(s){y("close",s.detail)}function B(){b?i(0,a):i(0,a=te(a,p,q,"Js Paint"))}function m(s){ne[s?"unshift":"push"](()=>{h=s,i(5,h)})}return n.$$set=s=>{"zIdx"in s&&i(0,a=s.zIdx),"BoxX"in s&&i(1,l=s.BoxX),"BoxY"in s&&i(2,g=s.BoxY),"hide"in s&&i(3,b=s.hide)},[a,l,g,b,w,h,_,u,c,p,f,v,M,Y,B,m]}class oe extends C{constructor(t){super(),L(this,t,se,ie,T,{zIdx:0,BoxX:1,BoxY:2,hide:3})}}export{oe as default};

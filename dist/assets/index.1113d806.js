import{S as D,i as N,s as C,Q as I,g as k,R as w,q as _,T as $,o as a,r as h,c as P,u as T,m as B,n as L,e as v,d as Ie,f as z,U as we,V as G,W as J,X as $e,L as R,Y as S,Z as g,$ as b,a0 as y,M as _e,a1 as me,a2 as W,a3 as Pe,a4 as Te}from"./index.86f4e5d9.js";var Be=Object.defineProperty,Le=Object.defineProperties,Ce=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,De=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable,ee=(i,e,l)=>e in i?Be(i,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[e]=l,Me=(i,e)=>{for(var l in e||(e={}))De.call(e,l)&&ee(i,l,e[l]);if(x)for(var l of x(e))Ne.call(e,l)&&ee(i,l,e[l]);return i},Se=(i,e)=>Le(i,Ce(e));function j(i){return i._type==="span"&&"text"in i&&typeof i.text=="string"&&(typeof i.marks>"u"||Array.isArray(i.marks)&&i.marks.every(e=>typeof e=="string"))}function Z(i){return typeof i._type=="string"&&i._type[0]!=="@"&&(!("markDefs"in i)||Array.isArray(i.markDefs)&&i.markDefs.every(e=>typeof e._key=="string"))&&"children"in i&&Array.isArray(i.children)&&i.children.every(e=>typeof e=="object"&&"_type"in e)}function de(i){return Z(i)&&"listItem"in i&&typeof i.listItem=="string"&&(typeof i.level>"u"||typeof i.level=="number")}function pe(i){return i._type==="@list"}function ke(i){return i._type==="@span"}function he(i){return i._type==="@text"}const te=["strong","em","code","underline","strike-through"];function ve(i,e,l){if(!j(i)||!i.marks)return[];if(!i.marks.length)return[];const n=i.marks.slice(),t={};return n.forEach(o=>{t[o]=1;for(let r=e+1;r<l.length;r++){const s=l[r];if(s&&j(s)&&Array.isArray(s.marks)&&s.marks.indexOf(o)!==-1)t[o]++;else break}}),n.sort((o,r)=>Oe(t,o,r))}function Oe(i,e,l){const n=i[e],t=i[l];if(n!==t)return t-n;const o=te.indexOf(e),r=te.indexOf(l);return o!==r?o-r:e.localeCompare(l)}function U(i){var e;const{children:l,markDefs:n=[]}=i;if(!l||!l.length)return[];const t=l.map(ve),o={_type:"@span",children:[],markType:"<unknown>"};let r=[o];for(let s=0;s<l.length;s++){const f=l[s];if(!f)continue;const u=t[s]||[];let c=1;if(r.length>1)for(c;c<r.length;c++){const m=((e=r[c])==null?void 0:e.markKey)||"",p=u.indexOf(m);if(p===-1)break;u.splice(p,1)}r=r.slice(0,c);let d=r[r.length-1];if(!!d){for(const m of u){const p=n.find(ye=>ye._key===m),M=p?p._type:m,A={_type:"@span",_key:f._key,children:[],markDef:p,markType:M,markKey:m};d.children.push(A),r.push(A),d=A}if(j(f)){const m=f.text.split(`
`);for(let p=m.length;p-- >1;)m.splice(p,0,`
`);d.children=d.children.concat(m.map(p=>({_type:"@text",text:p})))}else d.children=d.children.concat(f)}}return o.children}function Ae(i,e){const l=[];let n;for(let t=0;t<i.length;t++){const o=i[t];if(!!o){if(!de(o)){l.push(o),n=void 0;continue}if(!n){n=q(o,t,e),l.push(n);continue}if(Re(o,n)){n.children.push(o);continue}if((o.level||1)>n.level){const r=q(o,t,e);if(e==="html"){const s=n.children[n.children.length-1],f=Se(Me({},s),{children:[...s.children,r]});n.children[n.children.length-1]=f}else n.children.push(r);n=r;continue}if((o.level||1)<n.level){const r=l[l.length-1],s=r&&Y(r,o);if(s){n=s,n.children.push(o);continue}n=q(o,t,e),l.push(n);continue}if(o.listItem!==n.listItem){const r=l[l.length-1],s=r&&Y(r,{level:o.level||1});if(s&&s.listItem===o.listItem){n=s,n.children.push(o);continue}else{n=q(o,t,e),l.push(n);continue}}console.warn("Unknown state encountered for block",o),l.push(o)}}return l}function Re(i,e){return(i.level||1)===e.level&&i.listItem===e.listItem}function q(i,e,l){return{_type:"@list",_key:`${i._key||`${e}`}-parent`,mode:l,level:i.level||1,listItem:i.listItem,children:[i]}}function Y(i,e){const l=e.level||1,n=e.listItem||"normal",t=typeof e.listItem=="string";if(pe(i)&&(i.level||1)===l&&t&&(i.listItem||"normal")===n)return i;if(!("children"in i))return;const o=i.children[i.children.length-1];return o&&!j(o)?Y(o,e):void 0}const He=/^\s/,Ke=/^\s/;function hn(i){const e=Array.isArray(i)?i:[i];let l="";return e.forEach((n,t)=>{if(!Z(n))return;let o=!1;n.children.forEach(r=>{j(r)?(l+=o&&l&&!Ke.test(l)&&!He.test(r.text)?" ":"",l+=r.text,o=!1):o=!0}),t!==e.length-1&&(l+=`

`)}),l}function ge(i){let e="";return i.children.forEach(l=>{he(l)?e+=l.text:ke(l)&&(e+=ge(l))}),e}const Ee="html";function be(){return Math.random().toFixed(5).split(".")[1]}function je(i){return{_key:i._key||be(),...i}}function Ve(i){return{_key:i._key||be(),...i,...i._type==="block"&&Array.isArray(i.children)?{children:i.children.map(je)}:{}}}function qe(i){let e;const l=i[3].default,n=P(l,i,i[2],null);return{c(){n&&n.c()},m(t,o){n&&n.m(t,o),e=!0},p(t,o){n&&n.p&&(!e||o&4)&&T(n,l,t,t[2],e?L(l,t[2],o,null):B(t[2]),null)},i(t){e||(a(n,t),e=!0)},o(t){_(n,t),e=!1},d(t){n&&n.d(t)}}}function Ue(i){let e,l;const n=i[3].default,t=P(n,i,i[2],null);return{c(){e=v("del"),t&&t.c()},m(o,r){k(o,e,r),t&&t.m(e,null),l=!0},p(o,r){t&&t.p&&(!l||r&4)&&T(t,n,o,o[2],l?L(n,o[2],r,null):B(o[2]),null)},i(o){l||(a(t,o),l=!0)},o(o){_(t,o),l=!1},d(o){o&&h(e),t&&t.d(o)}}}function We(i){let e,l;const n=i[3].default,t=P(n,i,i[2],null);return{c(){e=v("span"),t&&t.c(),Ie(e,"text-decoration","underline")},m(o,r){k(o,e,r),t&&t.m(e,null),l=!0},p(o,r){t&&t.p&&(!l||r&4)&&T(t,n,o,o[2],l?L(n,o[2],r,null):B(o[2]),null)},i(o){l||(a(t,o),l=!0)},o(o){_(t,o),l=!1},d(o){o&&h(e),t&&t.d(o)}}}function Fe(i){let e,l;const n=i[3].default,t=P(n,i,i[2],null);return{c(){e=v("code"),t&&t.c()},m(o,r){k(o,e,r),t&&t.m(e,null),l=!0},p(o,r){t&&t.p&&(!l||r&4)&&T(t,n,o,o[2],l?L(n,o[2],r,null):B(o[2]),null)},i(o){l||(a(t,o),l=!0)},o(o){_(t,o),l=!1},d(o){o&&h(e),t&&t.d(o)}}}function Qe(i){let e,l;const n=i[3].default,t=P(n,i,i[2],null);return{c(){e=v("em"),t&&t.c()},m(o,r){k(o,e,r),t&&t.m(e,null),l=!0},p(o,r){t&&t.p&&(!l||r&4)&&T(t,n,o,o[2],l?L(n,o[2],r,null):B(o[2]),null)},i(o){l||(a(t,o),l=!0)},o(o){_(t,o),l=!1},d(o){o&&h(e),t&&t.d(o)}}}function Xe(i){let e,l;const n=i[3].default,t=P(n,i,i[2],null);return{c(){e=v("strong"),t&&t.c()},m(o,r){k(o,e,r),t&&t.m(e,null),l=!0},p(o,r){t&&t.p&&(!l||r&4)&&T(t,n,o,o[2],l?L(n,o[2],r,null):B(o[2]),null)},i(o){l||(a(t,o),l=!0)},o(o){_(t,o),l=!1},d(o){o&&h(e),t&&t.d(o)}}}function Ye(i){let e,l,n,t;const o=[Xe,Qe,Fe,We,Ue,qe],r=[];function s(f,u){return f[0]==="strong"?0:f[0]==="em"?1:f[0]==="code"?2:f[0]==="underline"?3:f[0]==="strike-through"?4:5}return e=s(i),l=r[e]=o[e](i),{c(){l.c(),n=I()},m(f,u){r[e].m(f,u),k(f,n,u),t=!0},p(f,[u]){let c=e;e=s(f),e===c?r[e].p(f,u):(w(),_(r[c],1,1,()=>{r[c]=null}),$(),l=r[e],l?l.p(f,u):(l=r[e]=o[e](f),l.c()),a(l,1),l.m(n.parentNode,n))},i(f){t||(a(l),t=!0)},o(f){_(l),t=!1},d(f){r[e].d(f),f&&h(n)}}}function Ze(i,e,l){let n,{$$slots:t={},$$scope:o}=e,{portableText:r}=e;return i.$$set=s=>{"portableText"in s&&l(1,r=s.portableText),"$$scope"in s&&l(2,o=s.$$scope)},i.$$.update=()=>{i.$$.dirty&2&&l(0,{markType:n}=r,n)},[n,r,o,t]}class ze extends D{constructor(e){super(),N(this,e,Ze,Ye,C,{portableText:1})}}const H=ze;function Ge(i){let e;const l=i[4].default,n=P(l,i,i[3],null);return{c(){n&&n.c()},m(t,o){n&&n.m(t,o),e=!0},p(t,o){n&&n.p&&(!e||o&8)&&T(n,l,t,t[3],e?L(l,t[3],o,null):B(t[3]),null)},i(t){e||(a(n,t),e=!0)},o(t){_(n,t),e=!1},d(t){n&&n.d(t)}}}function Je(i){let e,l;const n=i[4].default,t=P(n,i,i[3],null);return{c(){e=v("a"),t&&t.c(),z(e,"href",i[0])},m(o,r){k(o,e,r),t&&t.m(e,null),l=!0},p(o,r){t&&t.p&&(!l||r&8)&&T(t,n,o,o[3],l?L(n,o[3],r,null):B(o[3]),null),(!l||r&1)&&z(e,"href",o[0])},i(o){l||(a(t,o),l=!0)},o(o){_(t,o),l=!1},d(o){o&&h(e),t&&t.d(o)}}}function xe(i){let e,l,n,t;const o=[Je,Ge],r=[];function s(f,u){return typeof f[0]=="string"?0:1}return e=s(i),l=r[e]=o[e](i),{c(){l.c(),n=I()},m(f,u){r[e].m(f,u),k(f,n,u),t=!0},p(f,[u]){let c=e;e=s(f),e===c?r[e].p(f,u):(w(),_(r[c],1,1,()=>{r[c]=null}),$(),l=r[e],l?l.p(f,u):(l=r[e]=o[e](f),l.c()),a(l,1),l.m(n.parentNode,n))},i(f){t||(a(l),t=!0)},o(f){_(l),t=!1},d(f){r[e].d(f),f&&h(n)}}}function et(i,e,l){let n,t,{$$slots:o={},$$scope:r}=e,{portableText:s}=e;return i.$$set=f=>{"portableText"in f&&l(1,s=f.portableText),"$$scope"in f&&l(3,r=f.$$scope)},i.$$.update=()=>{i.$$.dirty&2&&l(2,{value:n}=s,n),i.$$.dirty&4&&l(0,t=(n==null?void 0:n.href)||(n==null?void 0:n.url)||(n==null?void 0:n.link)||(n==null?void 0:n.value))},[t,s,n,r,o]}class tt extends D{constructor(e){super(),N(this,e,et,xe,C,{portableText:1})}}function nt(i){let e;const l=i[4].default,n=P(l,i,i[3],null);return{c(){n&&n.c()},m(t,o){n&&n.m(t,o),e=!0},p(t,o){n&&n.p&&(!e||o&8)&&T(n,l,t,t[3],e?L(l,t[3],o,null):B(t[3]),null)},i(t){e||(a(n,t),e=!0)},o(t){_(n,t),e=!1},d(t){n&&n.d(t)}}}function lt(i){let e,l;const n=i[4].default,t=P(n,i,i[3],null);return{c(){e=v("p"),t&&t.c()},m(o,r){k(o,e,r),t&&t.m(e,null),l=!0},p(o,r){t&&t.p&&(!l||r&8)&&T(t,n,o,o[3],l?L(n,o[3],r,null):B(o[3]),null)},i(o){l||(a(t,o),l=!0)},o(o){_(t,o),l=!1},d(o){o&&h(e),t&&t.d(o)}}}function rt(i){let e=i[0],l,n,t=i[0]&&F(i);return{c(){t&&t.c(),l=I()},m(o,r){t&&t.m(o,r),k(o,l,r),n=!0},p(o,r){o[0]?e?C(e,o[0])?(t.d(1),t=F(o),t.c(),t.m(l.parentNode,l)):t.p(o,r):(t=F(o),t.c(),t.m(l.parentNode,l)):e&&(t.d(1),t=null),e=o[0]},i(o){n||(a(t),n=!0)},o(o){_(t),n=!1},d(o){o&&h(l),t&&t.d(o)}}}function F(i){let e,l;const n=i[4].default,t=P(n,i,i[3],null);let o=[],r={};for(let s=0;s<o.length;s+=1)r=we(r,o[s]);return{c(){e=v(i[0]),t&&t.c(),/-/.test(i[0])?G(e,r):J(e,r)},m(s,f){k(s,e,f),t&&t.m(e,null),l=!0},p(s,f){t&&t.p&&(!l||f&8)&&T(t,n,s,s[3],l?L(n,s[3],f,null):B(s[3]),null),r=$e(o,[]),/-/.test(s[0])?G(e,r):J(e,r)},i(s){l||(a(t,s),l=!0)},o(s){_(t,s),l=!1},d(s){s&&h(e),t&&t.d(s)}}}function ot(i){let e,l,n,t,o;const r=[rt,lt,nt],s=[];function f(u,c){return c&1&&(e=null),e==null&&(e=!!["h1","h2","h3","h4","h5","h6","blockquote"].includes(u[0])),e?0:u[0]==="normal"?1:2}return l=f(i,-1),n=s[l]=r[l](i),{c(){n.c(),t=I()},m(u,c){s[l].m(u,c),k(u,t,c),o=!0},p(u,[c]){let d=l;l=f(u,c),l===d?s[l].p(u,c):(w(),_(s[d],1,1,()=>{s[d]=null}),$(),n=s[l],n?n.p(u,c):(n=s[l]=r[l](u),n.c()),a(n,1),n.m(t.parentNode,t))},i(u){o||(a(n),o=!0)},o(u){_(n),o=!1},d(u){s[l].d(u),u&&h(t)}}}function it(i,e,l){let n,t,{$$slots:o={},$$scope:r}=e,{portableText:s}=e;return i.$$set=f=>{"portableText"in f&&l(1,s=f.portableText),"$$scope"in f&&l(3,r=f.$$scope)},i.$$.update=()=>{i.$$.dirty&2&&l(2,{value:n}=s,n),i.$$.dirty&4&&l(0,t=n.style||"normal")},[t,s,n,r,o]}class ft extends D{constructor(e){super(),N(this,e,it,ot,C,{portableText:1})}}const O=ft;function st(i){let e,l;const n=i[4].default,t=P(n,i,i[3],null);return{c(){e=v("ul"),t&&t.c()},m(o,r){k(o,e,r),t&&t.m(e,null),l=!0},p(o,r){t&&t.p&&(!l||r&8)&&T(t,n,o,o[3],l?L(n,o[3],r,null):B(o[3]),null)},i(o){l||(a(t,o),l=!0)},o(o){_(t,o),l=!1},d(o){o&&h(e),t&&t.d(o)}}}function ut(i){let e,l;const n=i[4].default,t=P(n,i,i[3],null);return{c(){e=v("ol"),t&&t.c()},m(o,r){k(o,e,r),t&&t.m(e,null),l=!0},p(o,r){t&&t.p&&(!l||r&8)&&T(t,n,o,o[3],l?L(n,o[3],r,null):B(o[3]),null)},i(o){l||(a(t,o),l=!0)},o(o){_(t,o),l=!1},d(o){o&&h(e),t&&t.d(o)}}}function ct(i){let e,l,n,t;const o=[ut,st],r=[];function s(f,u){return f[0]==="number"?0:1}return e=s(i),l=r[e]=o[e](i),{c(){l.c(),n=I()},m(f,u){r[e].m(f,u),k(f,n,u),t=!0},p(f,[u]){let c=e;e=s(f),e===c?r[e].p(f,u):(w(),_(r[c],1,1,()=>{r[c]=null}),$(),l=r[e],l?l.p(f,u):(l=r[e]=o[e](f),l.c()),a(l,1),l.m(n.parentNode,n))},i(f){t||(a(l),t=!0)},o(f){_(l),t=!1},d(f){r[e].d(f),f&&h(n)}}}function at(i,e,l){let n,t,{$$slots:o={},$$scope:r}=e,{portableText:s}=e;return i.$$set=f=>{"portableText"in f&&l(1,s=f.portableText),"$$scope"in f&&l(3,r=f.$$scope)},i.$$.update=()=>{i.$$.dirty&2&&l(2,{value:n}=s,n),i.$$.dirty&4&&l(0,{listItem:t}=n,t)},[t,s,n,r,o]}class _t extends D{constructor(e){super(),N(this,e,at,ct,C,{portableText:1})}}const Q=_t;function mt(i){let e,l;const n=i[1].default,t=P(n,i,i[0],null);return{c(){e=v("li"),t&&t.c()},m(o,r){k(o,e,r),t&&t.m(e,null),l=!0},p(o,[r]){t&&t.p&&(!l||r&1)&&T(t,n,o,o[0],l?L(n,o[0],r,null):B(o[0]),null)},i(o){l||(a(t,o),l=!0)},o(o){_(t,o),l=!1},d(o){o&&h(e),t&&t.d(o)}}}function dt(i,e,l){let{$$slots:n={},$$scope:t}=e;return i.$$set=o=>{"$$scope"in o&&l(0,t=o.$$scope)},[t,n]}class pt extends D{constructor(e){super(),N(this,e,dt,mt,C,{})}}const X=pt;function kt(i){let e;return{c(){e=v("br")},m(l,n){k(l,e,n)},p:R,i:R,o:R,d(l){l&&h(e)}}}class ht extends D{constructor(e){super(),N(this,e,null,kt,C,{})}}function gt(i){let e;const l=i[1].default,n=P(l,i,i[0],null);return{c(){n&&n.c()},m(t,o){n&&n.m(t,o),e=!0},p(t,[o]){n&&n.p&&(!e||o&1)&&T(n,l,t,t[0],e?L(l,t[0],o,null):B(t[0]),null)},i(t){e||(a(n,t),e=!0)},o(t){_(n,t),e=!1},d(t){n&&n.d(t)}}}function bt(i,e,l){let{$$slots:n={},$$scope:t}=e;return i.$$set=o=>{"$$scope"in o&&l(0,t=o.$$scope)},[t,n]}class yt extends D{constructor(e){super(),N(this,e,bt,gt,C,{})}}const It={marks:{"strike-through":H,code:H,em:H,strong:H,underline:H,link:tt},block:{blockquote:O,h1:O,h2:O,h3:O,h4:O,h5:O,h6:O,normal:O},list:{bullet:Q,number:Q},listItem:{bullet:X,number:X},types:{},hardBreak:ht,unknownBlockStyle:O,unknownList:Q,unknownListItem:X,unknownMark:H,unknownType:yt};function wt(i,e={}){return{...i,...e,block:E(i,e,"block"),list:E(i,e,"list"),listItem:E(i,e,"listItem"),marks:E(i,e,"marks"),types:E(i,e,"types")}}function E(i,e,l){const n=e[l],t=i[l];return typeof n=="function"||n&&typeof t=="function"?n:n?{...t,...n}:t}function $t(i){let e;const l=i[7].default,n=P(l,i,i[8],null);return{c(){n&&n.c()},m(t,o){n&&n.m(t,o),e=!0},p(t,o){n&&n.p&&(!e||o&256)&&T(n,l,t,t[8],e?L(l,t[8],o,null):B(t[8]),null)},i(t){e||(a(n,t),e=!0)},o(t){_(n,t),e=!1},d(t){n&&n.d(t)}}}function Pt(i){let e,l,n;var t=i[0]||i[1].unknownBlockStyle;function o(r){return{props:{portableText:r[2],$$slots:{default:[$t]},$$scope:{ctx:r}}}}return t&&(e=S(t,o(i))),{c(){e&&g(e.$$.fragment),l=I()},m(r,s){e&&b(e,r,s),k(r,l,s),n=!0},p(r,[s]){const f={};if(s&4&&(f.portableText=r[2]),s&256&&(f.$$scope={dirty:s,ctx:r}),t!==(t=r[0]||r[1].unknownBlockStyle)){if(e){w();const u=e;_(u.$$.fragment,1,0,()=>{y(u,1)}),$()}t?(e=S(t,o(r)),g(e.$$.fragment),a(e.$$.fragment,1),b(e,l.parentNode,l)):e=null}else t&&e.$set(f)},i(r){n||(e&&a(e.$$.fragment,r),n=!0)},o(r){e&&_(e.$$.fragment,r),n=!1},d(r){r&&h(l),e&&y(e,r)}}}function Tt(i,e,l){let n,t,o,r,{$$slots:s={},$$scope:f}=e,{global:u}=e,{node:c}=e,{indexInParent:d}=e;return i.$$set=m=>{"global"in m&&l(3,u=m.global),"node"in m&&l(4,c=m.node),"indexInParent"in m&&l(5,d=m.indexInParent),"$$scope"in m&&l(8,f=m.$$scope)},i.$$.update=()=>{i.$$.dirty&8&&l(1,{components:n}=u,n),i.$$.dirty&16&&l(6,{style:t="normal"}=c,t),i.$$.dirty&66&&l(0,o=typeof n.block=="function"?n.block:n.block[t]),i.$$.dirty&73&&(o||u.missingComponentHandler(t,"blockStyle")),i.$$.dirty&56&&l(2,r=(()=>({global:u,indexInParent:d,value:c}))())},[o,n,r,u,c,d,t,s,f]}class Bt extends D{constructor(e){super(),N(this,e,Tt,Pt,C,{global:3,node:4,indexInParent:5})}}function Lt(i){let e,l,n;var t=i[0]||i[1].unknownType;function o(r){return{props:{portableText:r[2]}}}return t&&(e=S(t,o(i))),{c(){e&&g(e.$$.fragment),l=I()},m(r,s){e&&b(e,r,s),k(r,l,s),n=!0},p(r,[s]){const f={};if(s&4&&(f.portableText=r[2]),t!==(t=r[0]||r[1].unknownType)){if(e){w();const u=e;_(u.$$.fragment,1,0,()=>{y(u,1)}),$()}t?(e=S(t,o(r)),g(e.$$.fragment),a(e.$$.fragment,1),b(e,l.parentNode,l)):e=null}else t&&e.$set(f)},i(r){n||(e&&a(e.$$.fragment,r),n=!0)},o(r){e&&_(e.$$.fragment,r),n=!1},d(r){r&&h(l),e&&y(e,r)}}}function Ct(i,e,l){let n,t,o,r,{global:s}=e,{node:f}=e,{parentBlock:u}=e,{indexInParent:c}=e,{isInline:d=!1}=e;return i.$$set=m=>{"global"in m&&l(3,s=m.global),"node"in m&&l(4,f=m.node),"parentBlock"in m&&l(5,u=m.parentBlock),"indexInParent"in m&&l(6,c=m.indexInParent),"isInline"in m&&l(7,d=m.isInline)},i.$$.update=()=>{i.$$.dirty&8&&l(1,{components:n}=s,n),i.$$.dirty&16&&l(8,{_type:t}=f,t),i.$$.dirty&258&&l(0,o=n.types[t]),i.$$.dirty&265&&(o||s.missingComponentHandler(t,"block")),i.$$.dirty&248&&l(2,r=(()=>({global:s,value:f,indexInParent:c,parentBlock:u,isInline:d}))())},[o,n,r,s,f,u,c,d,t]}class Dt extends D{constructor(e){super(),N(this,e,Ct,Lt,C,{global:3,node:4,parentBlock:5,indexInParent:6,isInline:7})}}function Nt(i){let e;const l=i[8].default,n=P(l,i,i[9],null);return{c(){n&&n.c()},m(t,o){n&&n.m(t,o),e=!0},p(t,o){n&&n.p&&(!e||o&512)&&T(n,l,t,t[9],e?L(l,t[9],o,null):B(t[9]),null)},i(t){e||(a(n,t),e=!0)},o(t){_(n,t),e=!1},d(t){n&&n.d(t)}}}function Mt(i){let e,l,n;var t=i[0]||i[1].unknownList;function o(r){return{props:{portableText:r[2],$$slots:{default:[Nt]},$$scope:{ctx:r}}}}return t&&(e=S(t,o(i))),{c(){e&&g(e.$$.fragment),l=I()},m(r,s){e&&b(e,r,s),k(r,l,s),n=!0},p(r,[s]){const f={};if(s&4&&(f.portableText=r[2]),s&512&&(f.$$scope={dirty:s,ctx:r}),t!==(t=r[0]||r[1].unknownList)){if(e){w();const u=e;_(u.$$.fragment,1,0,()=>{y(u,1)}),$()}t?(e=S(t,o(r)),g(e.$$.fragment),a(e.$$.fragment,1),b(e,l.parentNode,l)):e=null}else t&&e.$set(f)},i(r){n||(e&&a(e.$$.fragment,r),n=!0)},o(r){e&&_(e.$$.fragment,r),n=!1},d(r){r&&h(l),e&&y(e,r)}}}function St(i,e,l){let n,t,o,r,s,{$$slots:f={},$$scope:u}=e,{global:c}=e,{indexInParent:d}=e,{node:m}=e;return i.$$set=p=>{"global"in p&&l(3,c=p.global),"indexInParent"in p&&l(4,d=p.indexInParent),"node"in p&&l(5,m=p.node),"$$scope"in p&&l(9,u=p.$$scope)},i.$$.update=()=>{i.$$.dirty&8&&l(1,{components:n}=c,n),i.$$.dirty&32&&l(6,{listItem:t}=m,t),i.$$.dirty&66&&l(7,o=typeof n.list=="function"?n.list:n.list[t]),i.$$.dirty&128&&l(0,r=o),i.$$.dirty&73&&(r||c.missingComponentHandler(t,"listStyle")),i.$$.dirty&56&&l(2,s=(()=>({global:c,value:m,indexInParent:d}))())},[r,n,s,c,d,m,t,o,f,u]}class vt extends D{constructor(e){super(),N(this,e,St,Mt,C,{global:3,indexInParent:4,node:5})}}function Ot(i){let e;const l=i[8].default,n=P(l,i,i[9],null);return{c(){n&&n.c()},m(t,o){n&&n.m(t,o),e=!0},p(t,o){n&&n.p&&(!e||o&512)&&T(n,l,t,t[9],e?L(l,t[9],o,null):B(t[9]),null)},i(t){e||(a(n,t),e=!0)},o(t){_(n,t),e=!1},d(t){n&&n.d(t)}}}function At(i){let e,l,n;var t=i[4];function o(r){return{props:{portableText:{...r[3],value:{...r[0],listItem:void 0}},$$slots:{default:[Rt]},$$scope:{ctx:r}}}}return t&&(e=S(t,o(i))),{c(){e&&g(e.$$.fragment),l=I()},m(r,s){e&&b(e,r,s),k(r,l,s),n=!0},p(r,s){const f={};if(s&9&&(f.portableText={...r[3],value:{...r[0],listItem:void 0}}),s&512&&(f.$$scope={dirty:s,ctx:r}),t!==(t=r[4])){if(e){w();const u=e;_(u.$$.fragment,1,0,()=>{y(u,1)}),$()}t?(e=S(t,o(r)),g(e.$$.fragment),a(e.$$.fragment,1),b(e,l.parentNode,l)):e=null}else t&&e.$set(f)},i(r){n||(e&&a(e.$$.fragment,r),n=!0)},o(r){e&&_(e.$$.fragment,r),n=!1},d(r){r&&h(l),e&&y(e,r)}}}function Rt(i){let e;const l=i[8].default,n=P(l,i,i[9],null);return{c(){n&&n.c()},m(t,o){n&&n.m(t,o),e=!0},p(t,o){n&&n.p&&(!e||o&512)&&T(n,l,t,t[9],e?L(l,t[9],o,null):B(t[9]),null)},i(t){e||(a(n,t),e=!0)},o(t){_(n,t),e=!1},d(t){n&&n.d(t)}}}function Ht(i){let e,l,n,t;const o=[At,Ot],r=[];function s(f,u){return f[4]?0:1}return e=s(i),l=r[e]=o[e](i),{c(){l.c(),n=I()},m(f,u){r[e].m(f,u),k(f,n,u),t=!0},p(f,u){let c=e;e=s(f),e===c?r[e].p(f,u):(w(),_(r[c],1,1,()=>{r[c]=null}),$(),l=r[e],l?l.p(f,u):(l=r[e]=o[e](f),l.c()),a(l,1),l.m(n.parentNode,n))},i(f){t||(a(l),t=!0)},o(f){_(l),t=!1},d(f){r[e].d(f),f&&h(n)}}}function Kt(i){let e,l,n;var t=i[2]||i[1].unknownListItem;function o(r){return{props:{portableText:r[3],$$slots:{default:[Ht]},$$scope:{ctx:r}}}}return t&&(e=S(t,o(i))),{c(){e&&g(e.$$.fragment),l=I()},m(r,s){e&&b(e,r,s),k(r,l,s),n=!0},p(r,[s]){const f={};if(s&8&&(f.portableText=r[3]),s&537&&(f.$$scope={dirty:s,ctx:r}),t!==(t=r[2]||r[1].unknownListItem)){if(e){w();const u=e;_(u.$$.fragment,1,0,()=>{y(u,1)}),$()}t?(e=S(t,o(r)),g(e.$$.fragment),a(e.$$.fragment,1),b(e,l.parentNode,l)):e=null}else t&&e.$set(f)},i(r){n||(e&&a(e.$$.fragment,r),n=!0)},o(r){e&&_(e.$$.fragment,r),n=!1},d(r){r&&h(l),e&&y(e,r)}}}function Et(i,e,l){let n,t,o,r,s,{$$slots:f={},$$scope:u}=e,{global:c}=e,{indexInParent:d}=e,{node:m}=e;return i.$$set=p=>{"global"in p&&l(5,c=p.global),"indexInParent"in p&&l(6,d=p.indexInParent),"node"in p&&l(0,m=p.node),"$$scope"in p&&l(9,u=p.$$scope)},i.$$.update=()=>{i.$$.dirty&32&&l(1,{components:n}=c,n),i.$$.dirty&1&&l(7,{style:t="normal"}=m,t),i.$$.dirty&130&&l(2,o=typeof n.listItem=="function"?n.listItem:n.listItem[t]),i.$$.dirty&164&&(o||c.missingComponentHandler(t,"listItemStyle")),i.$$.dirty&130&&l(4,r=t!=="normal"?n.block[t]:void 0),i.$$.dirty&97&&l(3,s=(()=>({global:c,value:m,indexInParent:d}))())},[m,n,o,s,r,c,d,t,f,u]}class jt extends D{constructor(e){super(),N(this,e,Et,Kt,C,{global:5,indexInParent:6,node:0})}}function Vt(i){let e;const l=i[7].default,n=P(l,i,i[8],null);return{c(){n&&n.c()},m(t,o){n&&n.m(t,o),e=!0},p(t,o){n&&n.p&&(!e||o&256)&&T(n,l,t,t[8],e?L(l,t[8],o,null):B(t[8]),null)},i(t){e||(a(n,t),e=!0)},o(t){_(n,t),e=!1},d(t){n&&n.d(t)}}}function qt(i){let e,l,n;var t=i[0]||i[1].unknownMark;function o(r){return{props:{portableText:r[2],$$slots:{default:[Vt]},$$scope:{ctx:r}}}}return t&&(e=S(t,o(i))),{c(){e&&g(e.$$.fragment),l=I()},m(r,s){e&&b(e,r,s),k(r,l,s),n=!0},p(r,[s]){const f={};if(s&4&&(f.portableText=r[2]),s&256&&(f.$$scope={dirty:s,ctx:r}),t!==(t=r[0]||r[1].unknownMark)){if(e){w();const u=e;_(u.$$.fragment,1,0,()=>{y(u,1)}),$()}t?(e=S(t,o(r)),g(e.$$.fragment),a(e.$$.fragment,1),b(e,l.parentNode,l)):e=null}else t&&e.$set(f)},i(r){n||(e&&a(e.$$.fragment,r),n=!0)},o(r){e&&_(e.$$.fragment,r),n=!1},d(r){r&&h(l),e&&y(e,r)}}}function Ut(i,e,l){let n,t,o,r,{$$slots:s={},$$scope:f}=e,{global:u}=e,{node:c}=e,{parentBlock:d}=e;return i.$$set=m=>{"global"in m&&l(3,u=m.global),"node"in m&&l(4,c=m.node),"parentBlock"in m&&l(5,d=m.parentBlock),"$$scope"in m&&l(8,f=m.$$scope)},i.$$.update=()=>{i.$$.dirty&8&&l(1,{components:n}=u,n),i.$$.dirty&16&&l(6,{markType:t}=c,t),i.$$.dirty&66&&l(0,o=n.marks[t]),i.$$.dirty&73&&(o||u.missingComponentHandler(t,"mark")),i.$$.dirty&120&&l(2,r=(()=>({global:u,parentBlock:d,markType:t,value:c.markDef,markKey:c.markKey,plainTextContent:ge(c)}))())},[o,n,r,u,c,d,t,s,f]}class Wt extends D{constructor(e){super(),N(this,e,Ut,qt,C,{global:3,node:4,parentBlock:5})}}function Ft(i){let e;return{c(){e=_e(i[0])},m(l,n){k(l,e,n)},p(l,n){n&1&&me(e,l[0])},i:R,o:R,d(l){l&&h(e)}}}function Qt(i){let e,l,n,t;const o=[Yt,Xt],r=[];function s(f,u){return typeof f[1].hardBreak=="function"?0:1}return e=s(i),l=r[e]=o[e](i),{c(){l.c(),n=I()},m(f,u){r[e].m(f,u),k(f,n,u),t=!0},p(f,u){let c=e;e=s(f),e===c?r[e].p(f,u):(w(),_(r[c],1,1,()=>{r[c]=null}),$(),l=r[e],l?l.p(f,u):(l=r[e]=o[e](f),l.c()),a(l,1),l.m(n.parentNode,n))},i(f){t||(a(l),t=!0)},o(f){_(l),t=!1},d(f){r[e].d(f),f&&h(n)}}}function Xt(i){let e;return{c(){e=_e(i[0])},m(l,n){k(l,e,n)},p(l,n){n&1&&me(e,l[0])},i:R,o:R,d(l){l&&h(e)}}}function Yt(i){let e,l,n;var t=i[1].hardBreak;function o(r){return{}}return t&&(e=S(t,o())),{c(){e&&g(e.$$.fragment),l=I()},m(r,s){e&&b(e,r,s),k(r,l,s),n=!0},p(r,s){if(t!==(t=r[1].hardBreak)){if(e){w();const f=e;_(f.$$.fragment,1,0,()=>{y(f,1)}),$()}t?(e=S(t,o()),g(e.$$.fragment),a(e.$$.fragment,1),b(e,l.parentNode,l)):e=null}},i(r){n||(e&&a(e.$$.fragment,r),n=!0)},o(r){e&&_(e.$$.fragment,r),n=!1},d(r){r&&h(l),e&&y(e,r)}}}function Zt(i){let e,l,n,t;const o=[Qt,Ft],r=[];function s(f,u){return f[0]===`
`?0:1}return e=s(i),l=r[e]=o[e](i),{c(){l.c(),n=I()},m(f,u){r[e].m(f,u),k(f,n,u),t=!0},p(f,[u]){let c=e;e=s(f),e===c?r[e].p(f,u):(w(),_(r[c],1,1,()=>{r[c]=null}),$(),l=r[e],l?l.p(f,u):(l=r[e]=o[e](f),l.c()),a(l,1),l.m(n.parentNode,n))},i(f){t||(a(l),t=!0)},o(f){_(l),t=!1},d(f){r[e].d(f),f&&h(n)}}}function zt(i,e,l){let n,t,{global:o}=e,{node:r}=e;return i.$$set=s=>{"global"in s&&l(2,o=s.global),"node"in s&&l(3,r=s.node)},i.$$.update=()=>{i.$$.dirty&4&&l(1,{components:n}=o,n),i.$$.dirty&8&&l(0,{text:t}=r,t)},[t,n,o,r]}class Gt extends D{constructor(e){super(),N(this,e,zt,Zt,C,{global:2,node:3})}}function ne(i,e,l){const n=i.slice();return n[6]=e[l],n[8]=l,n}function le(i,e,l){const n=i.slice();return n[6]=e[l],n[8]=l,n}function re(i,e,l){const n=i.slice();return n[6]=e[l],n[8]=l,n}function oe(i,e,l){const n=i.slice();return n[6]=e[l],n[8]=l,n}function Jt(i){let e,l;return e=new Dt({props:{node:i[4],parentBlock:i[2],indexInParent:i[3],isInline:i[1],global:i[0]}}),{c(){g(e.$$.fragment)},m(n,t){b(e,n,t),l=!0},p(n,t){const o={};t&16&&(o.node=n[4]),t&4&&(o.parentBlock=n[2]),t&8&&(o.indexInParent=n[3]),t&2&&(o.isInline=n[1]),t&1&&(o.global=n[0]),e.$set(o)},i(n){l||(a(e.$$.fragment,n),l=!0)},o(n){_(e.$$.fragment,n),l=!1},d(n){y(e,n)}}}function xt(i){let e,l;return e=new Gt({props:{node:i[4],global:i[0]}}),{c(){g(e.$$.fragment)},m(n,t){b(e,n,t),l=!0},p(n,t){const o={};t&16&&(o.node=n[4]),t&1&&(o.global=n[0]),e.$set(o)},i(n){l||(a(e.$$.fragment,n),l=!0)},o(n){_(e.$$.fragment,n),l=!1},d(n){y(e,n)}}}function en(i){let e,l;return e=new Bt({props:{node:i[4],indexInParent:i[3],global:i[0],$$slots:{default:[rn]},$$scope:{ctx:i}}}),{c(){g(e.$$.fragment)},m(n,t){b(e,n,t),l=!0},p(n,t){const o={};t&16&&(o.node=n[4]),t&8&&(o.indexInParent=n[3]),t&1&&(o.global=n[0]),t&4113&&(o.$$scope={dirty:t,ctx:n}),e.$set(o)},i(n){l||(a(e.$$.fragment,n),l=!0)},o(n){_(e.$$.fragment,n),l=!1},d(n){y(e,n)}}}function tn(i){let e,l;return e=new Wt({props:{node:i[4],parentBlock:i[2],global:i[0],$$slots:{default:[on]},$$scope:{ctx:i}}}),{c(){g(e.$$.fragment)},m(n,t){b(e,n,t),l=!0},p(n,t){const o={};t&16&&(o.node=n[4]),t&4&&(o.parentBlock=n[2]),t&1&&(o.global=n[0]),t&4117&&(o.$$scope={dirty:t,ctx:n}),e.$set(o)},i(n){l||(a(e.$$.fragment,n),l=!0)},o(n){_(e.$$.fragment,n),l=!1},d(n){y(e,n)}}}function nn(i){let e,l;return e=new jt({props:{node:i[4],indexInParent:i[3],global:i[0],$$slots:{default:[fn]},$$scope:{ctx:i}}}),{c(){g(e.$$.fragment)},m(n,t){b(e,n,t),l=!0},p(n,t){const o={};t&16&&(o.node=n[4]),t&8&&(o.indexInParent=n[3]),t&1&&(o.global=n[0]),t&4113&&(o.$$scope={dirty:t,ctx:n}),e.$set(o)},i(n){l||(a(e.$$.fragment,n),l=!0)},o(n){_(e.$$.fragment,n),l=!1},d(n){y(e,n)}}}function ln(i){let e,l;return e=new vt({props:{node:i[4],indexInParent:i[3],global:i[0],$$slots:{default:[sn]},$$scope:{ctx:i}}}),{c(){g(e.$$.fragment)},m(n,t){b(e,n,t),l=!0},p(n,t){const o={};t&16&&(o.node=n[4]),t&8&&(o.indexInParent=n[3]),t&1&&(o.global=n[0]),t&4113&&(o.$$scope={dirty:t,ctx:n}),e.$set(o)},i(n){l||(a(e.$$.fragment,n),l=!0)},o(n){_(e.$$.fragment,n),l=!1},d(n){y(e,n)}}}function ie(i){let e,l;return e=new V({props:{options:{parentBlock:i[4],node:i[6],isInline:!0,indexInParent:i[8]},global:i[0]}}),{c(){g(e.$$.fragment)},m(n,t){b(e,n,t),l=!0},p(n,t){const o={};t&16&&(o.options={parentBlock:n[4],node:n[6],isInline:!0,indexInParent:n[8]}),t&1&&(o.global=n[0]),e.$set(o)},i(n){l||(a(e.$$.fragment,n),l=!0)},o(n){_(e.$$.fragment,n),l=!1},d(n){y(e,n)}}}function rn(i){let e,l,n=U(i[4]),t=[];for(let r=0;r<n.length;r+=1)t[r]=ie(ne(i,n,r));const o=r=>_(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=I()},m(r,s){for(let f=0;f<t.length;f+=1)t[f].m(r,s);k(r,e,s),l=!0},p(r,s){if(s&17){n=U(r[4]);let f;for(f=0;f<n.length;f+=1){const u=ne(r,n,f);t[f]?(t[f].p(u,s),a(t[f],1)):(t[f]=ie(u),t[f].c(),a(t[f],1),t[f].m(e.parentNode,e))}for(w(),f=n.length;f<t.length;f+=1)o(f);$()}},i(r){if(!l){for(let s=0;s<n.length;s+=1)a(t[s]);l=!0}},o(r){t=t.filter(Boolean);for(let s=0;s<t.length;s+=1)_(t[s]);l=!1},d(r){W(t,r),r&&h(e)}}}function fe(i){let e,l;return e=new V({props:{options:{parentBlock:i[2],node:i[6],isInline:!0,indexInParent:i[8]},global:i[0]}}),{c(){g(e.$$.fragment)},m(n,t){b(e,n,t),l=!0},p(n,t){const o={};t&20&&(o.options={parentBlock:n[2],node:n[6],isInline:!0,indexInParent:n[8]}),t&1&&(o.global=n[0]),e.$set(o)},i(n){l||(a(e.$$.fragment,n),l=!0)},o(n){_(e.$$.fragment,n),l=!1},d(n){y(e,n)}}}function on(i){let e,l,n=i[4].children,t=[];for(let r=0;r<n.length;r+=1)t[r]=fe(le(i,n,r));const o=r=>_(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=I()},m(r,s){for(let f=0;f<t.length;f+=1)t[f].m(r,s);k(r,e,s),l=!0},p(r,s){if(s&21){n=r[4].children;let f;for(f=0;f<n.length;f+=1){const u=le(r,n,f);t[f]?(t[f].p(u,s),a(t[f],1)):(t[f]=fe(u),t[f].c(),a(t[f],1),t[f].m(e.parentNode,e))}for(w(),f=n.length;f<t.length;f+=1)o(f);$()}},i(r){if(!l){for(let s=0;s<n.length;s+=1)a(t[s]);l=!0}},o(r){t=t.filter(Boolean);for(let s=0;s<t.length;s+=1)_(t[s]);l=!1},d(r){W(t,r),r&&h(e)}}}function se(i){let e,l;return e=new V({props:{options:{parentBlock:i[4],node:i[6],isInline:!0,indexInParent:i[8]},global:i[0]}}),{c(){g(e.$$.fragment)},m(n,t){b(e,n,t),l=!0},p(n,t){const o={};t&16&&(o.options={parentBlock:n[4],node:n[6],isInline:!0,indexInParent:n[8]}),t&1&&(o.global=n[0]),e.$set(o)},i(n){l||(a(e.$$.fragment,n),l=!0)},o(n){_(e.$$.fragment,n),l=!1},d(n){y(e,n)}}}function fn(i){let e,l,n=U(i[4]),t=[];for(let r=0;r<n.length;r+=1)t[r]=se(re(i,n,r));const o=r=>_(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=I()},m(r,s){for(let f=0;f<t.length;f+=1)t[f].m(r,s);k(r,e,s),l=!0},p(r,s){if(s&17){n=U(r[4]);let f;for(f=0;f<n.length;f+=1){const u=re(r,n,f);t[f]?(t[f].p(u,s),a(t[f],1)):(t[f]=se(u),t[f].c(),a(t[f],1),t[f].m(e.parentNode,e))}for(w(),f=n.length;f<t.length;f+=1)o(f);$()}},i(r){if(!l){for(let s=0;s<n.length;s+=1)a(t[s]);l=!0}},o(r){t=t.filter(Boolean);for(let s=0;s<t.length;s+=1)_(t[s]);l=!1},d(r){W(t,r),r&&h(e)}}}function ue(i){let e,l;return e=new V({props:{options:{node:i[6],indexInParent:i[8],parentBlock:void 0,isInline:void 0},global:i[0]}}),{c(){g(e.$$.fragment)},m(n,t){b(e,n,t),l=!0},p(n,t){const o={};t&16&&(o.options={node:n[6],indexInParent:n[8],parentBlock:void 0,isInline:void 0}),t&1&&(o.global=n[0]),e.$set(o)},i(n){l||(a(e.$$.fragment,n),l=!0)},o(n){_(e.$$.fragment,n),l=!1},d(n){y(e,n)}}}function sn(i){let e,l,n=i[4].children,t=[];for(let r=0;r<n.length;r+=1)t[r]=ue(oe(i,n,r));const o=r=>_(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=I()},m(r,s){for(let f=0;f<t.length;f+=1)t[f].m(r,s);k(r,e,s),l=!0},p(r,s){if(s&17){n=r[4].children;let f;for(f=0;f<n.length;f+=1){const u=oe(r,n,f);t[f]?(t[f].p(u,s),a(t[f],1)):(t[f]=ue(u),t[f].c(),a(t[f],1),t[f].m(e.parentNode,e))}for(w(),f=n.length;f<t.length;f+=1)o(f);$()}},i(r){if(!l){for(let s=0;s<n.length;s+=1)a(t[s]);l=!0}},o(r){t=t.filter(Boolean);for(let s=0;s<t.length;s+=1)_(t[s]);l=!1},d(r){W(t,r),r&&h(e)}}}function un(i){let e,l,n,t,o,r,s,f,u;const c=[ln,nn,tn,en,xt,Jt],d=[];function m(p,M){return M&16&&(e=null),M&16&&(l=null),M&16&&(n=null),M&16&&(t=null),M&16&&(o=null),e==null&&(e=!!pe(p[4])),e?0:(l==null&&(l=!!de(p[4])),l?1:(n==null&&(n=!!ke(p[4])),n?2:(t==null&&(t=!!Z(p[4])),t?3:(o==null&&(o=!!he(p[4])),o?4:p[4]?5:-1))))}return~(r=m(i,-1))&&(s=d[r]=c[r](i)),{c(){s&&s.c(),f=I()},m(p,M){~r&&d[r].m(p,M),k(p,f,M),u=!0},p(p,[M]){let A=r;r=m(p,M),r===A?~r&&d[r].p(p,M):(s&&(w(),_(d[A],1,1,()=>{d[A]=null}),$()),~r?(s=d[r],s?s.p(p,M):(s=d[r]=c[r](p),s.c()),a(s,1),s.m(f.parentNode,f)):s=null)},i(p){u||(a(s),u=!0)},o(p){_(s),u=!1},d(p){~r&&d[r].d(p),p&&h(f)}}}function cn(i,e,l){let n,t,o,r,{global:s}=e,{options:f}=e;return i.$$set=u=>{"global"in u&&l(0,s=u.global),"options"in u&&l(5,f=u.options)},i.$$.update=()=>{i.$$.dirty&32&&l(4,{node:n,indexInParent:t,parentBlock:o,isInline:r}=f,n,(l(3,t),l(5,f)),(l(2,o),l(5,f)),(l(1,r),l(5,f)))},[s,r,o,t,n,f]}class V extends D{constructor(e){super(),N(this,e,cn,un,C,{global:0,options:5})}}const K=(i,e)=>`Unknown ${i}, specify a component for it in the \`components${e?".":""}${e}\` prop`,an=(i,e)=>{switch(e){case"block":return K(`block type "${i}"`,"types");case"blockStyle":return K(`block style "${i}"`,"block");case"listItemStyle":return K(`list item style "${i}"`,"listItem");case"listStyle":return K(`list style "${i}"`,"list");case"mark":return K(`mark type "${i}"`,"marks");default:return K("type")}};function _n(i){console.warn(i)}function ce(i,e,l){const n=i.slice();return n[8]=e[l],n[10]=l,n}function ae(i,e){let l,n,t;return n=new V({props:{global:{components:e[4],missingComponentHandler:e[2],context:e[1],ptBlocks:e[3],ptRawValue:e[0]},options:{node:e[8],isInline:!1,indexInParent:e[10]}}}),{key:i,first:null,c(){l=I(),g(n.$$.fragment),this.first=l},m(o,r){k(o,l,r),b(n,o,r),t=!0},p(o,r){e=o;const s={};r&31&&(s.global={components:e[4],missingComponentHandler:e[2],context:e[1],ptBlocks:e[3],ptRawValue:e[0]}),r&8&&(s.options={node:e[8],isInline:!1,indexInParent:e[10]}),n.$set(s)},i(o){t||(a(n.$$.fragment,o),t=!0)},o(o){_(n.$$.fragment,o),t=!1},d(o){o&&h(l),y(n,o)}}}function mn(i){let e=[],l=new Map,n,t,o=i[3];const r=s=>s[8]._key;for(let s=0;s<o.length;s+=1){let f=ce(i,o,s),u=r(f);l.set(u,e[s]=ae(u,f))}return{c(){for(let s=0;s<e.length;s+=1)e[s].c();n=I()},m(s,f){for(let u=0;u<e.length;u+=1)e[u].m(s,f);k(s,n,f),t=!0},p(s,[f]){f&31&&(o=s[3],w(),e=Pe(e,f,r,1,s,o,l,n.parentNode,Te,ae,n,ce),$())},i(s){if(!t){for(let f=0;f<o.length;f+=1)a(e[f]);t=!0}},o(s){for(let f=0;f<e.length;f+=1)_(e[f]);t=!1},d(s){for(let f=0;f<e.length;f+=1)e[f].d(s);s&&h(n)}}}function dn(i,e,l){let n,t,o,r,{value:s=[]}=e,{components:f=void 0}=e,{context:u={}}=e,{onMissingComponent:c=!0}=e;return i.$$set=d=>{"value"in d&&l(0,s=d.value),"components"in d&&l(5,f=d.components),"context"in d&&l(1,u=d.context),"onMissingComponent"in d&&l(6,c=d.onMissingComponent)},i.$$.update=()=>{i.$$.dirty&32&&l(4,n=wt(It,f)),i.$$.dirty&1&&l(7,t=(Array.isArray(s)?s:[s]).map(Ve)),i.$$.dirty&128&&l(3,o=Ae(t,Ee)),i.$$.dirty&64&&l(2,r=(d,m)=>{if(c===!1)return;const p=an(d,m);if(typeof c=="function"){c(p,{type:d,nodeType:m});return}_n(p)})},[s,u,r,o,n,f,c,t]}class pn extends D{constructor(e){super(),N(this,e,dn,mn,C,{value:0,components:5,context:1,onMissingComponent:6})}}const gn=pn;export{O as DefaultBlock,Q as DefaultList,X as DefaultListItem,H as DefaultMark,gn as PortableText,hn as toPlainText};

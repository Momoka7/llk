const __vite__fileDeps=["assets/browserAll-COmP5b--.js","assets/webworkerAll-DXxslKXB.js","assets/colorToUniform-B6a6e2ez.js","assets/getBatchSamplersUniformGroup-CqKwgCVc.js","assets/WebGPURenderer-Du412g6z.js","assets/SharedSystems-Dr97D_6Z.js","assets/WebGLRenderer-50GvPkEO.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const tu="modulepreload",nu=function(n){return"/"+n},Qi={},Mn=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.all(t.map(a=>{if(a=nu(a),a in Qi)return;Qi[a]=!0;const l=a.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${c}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":tu,l||(u.as="script",u.crossOrigin=""),u.href=a,o&&u.setAttribute("nonce",o),document.head.appendChild(u),l)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}return i.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var E=(n=>(n.Application="application",n.WebGLPipes="webgl-pipes",n.WebGLPipesAdaptor="webgl-pipes-adaptor",n.WebGLSystem="webgl-system",n.WebGPUPipes="webgpu-pipes",n.WebGPUPipesAdaptor="webgpu-pipes-adaptor",n.WebGPUSystem="webgpu-system",n.CanvasSystem="canvas-system",n.CanvasPipesAdaptor="canvas-pipes-adaptor",n.CanvasPipes="canvas-pipes",n.Asset="asset",n.LoadParser="load-parser",n.ResolveParser="resolve-parser",n.CacheParser="cache-parser",n.DetectionParser="detection-parser",n.MaskEffect="mask-effect",n.BlendMode="blend-mode",n.TextureSource="texture-source",n.Environment="environment",n.ShapeBuilder="shape-builder",n))(E||{});const Ur=n=>{if(typeof n=="function"||typeof n=="object"&&n.extension){if(!n.extension)throw new Error("Extension class must have an extension object");n={...typeof n.extension!="object"?{type:n.extension}:n.extension,ref:n}}if(typeof n=="object")n={...n};else throw new Error("Invalid extension type");return typeof n.type=="string"&&(n.type=[n.type]),n},nn=(n,e)=>Ur(n).priority??e,ce={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...n){return n.map(Ur).forEach(e=>{e.type.forEach(t=>{var r,i;return(i=(r=this._removeHandlers)[t])==null?void 0:i.call(r,e)})}),this},add(...n){return n.map(Ur).forEach(e=>{e.type.forEach(t=>{var s,o;const r=this._addHandlers,i=this._queue;r[t]?(o=r[t])==null||o.call(r,e):(i[t]=i[t]||[],(s=i[t])==null||s.push(e))})}),this},handle(n,e,t){var o;const r=this._addHandlers,i=this._removeHandlers;if(r[n]||i[n])throw new Error(`Extension type ${n} already has a handler`);r[n]=e,i[n]=t;const s=this._queue;return s[n]&&((o=s[n])==null||o.forEach(a=>e(a)),delete s[n]),this},handleByMap(n,e){return this.handle(n,t=>{t.name&&(e[t.name]=t.ref)},t=>{t.name&&delete e[t.name]})},handleByNamedList(n,e,t=-1){return this.handle(n,r=>{e.findIndex(s=>s.name===r.name)>=0||(e.push({name:r.name,value:r.ref}),e.sort((s,o)=>nn(o.value,t)-nn(s.value,t)))},r=>{const i=e.findIndex(s=>s.name===r.name);i!==-1&&e.splice(i,1)})},handleByList(n,e,t=-1){return this.handle(n,r=>{e.includes(r.ref)||(e.push(r.ref),e.sort((i,s)=>nn(s,t)-nn(i,t)))},r=>{const i=e.indexOf(r.ref);i!==-1&&e.splice(i,1)})}},ru={extension:{type:E.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await Mn(()=>import("./browserAll-COmP5b--.js"),__vite__mapDeps([0,1,2,3]))}},iu={extension:{type:E.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await Mn(()=>import("./webworkerAll-DXxslKXB.js"),__vite__mapDeps([1,2,3]))}};class ue{constructor(e,t,r){this._x=t||0,this._y=r||0,this._observer=e}clone(e){return new ue(e??this._observer,this._x,this._y)}set(e=0,t=e){return(this._x!==e||this._y!==t)&&(this._x=e,this._y=t,this._observer._onUpdate(this)),this}copyFrom(e){return(this._x!==e.x||this._y!==e.y)&&(this._x=e.x,this._y=e.y,this._observer._onUpdate(this)),this}copyTo(e){return e.set(this._x,this._y),e}equals(e){return e.x===this._x&&e.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(e){this._x!==e&&(this._x=e,this._observer._onUpdate(this))}get y(){return this._y}set y(e){this._y!==e&&(this._y=e,this._observer._onUpdate(this))}}var su=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ln(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var co={exports:{}};(function(n){var e=Object.prototype.hasOwnProperty,t="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(t=!1));function i(l,c,u){this.fn=l,this.context=c,this.once=u||!1}function s(l,c,u,h,f){if(typeof u!="function")throw new TypeError("The listener must be a function");var p=new i(u,h||l,f),m=t?t+c:c;return l._events[m]?l._events[m].fn?l._events[m]=[l._events[m],p]:l._events[m].push(p):(l._events[m]=p,l._eventsCount++),l}function o(l,c){--l._eventsCount===0?l._events=new r:delete l._events[c]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var c=[],u,h;if(this._eventsCount===0)return c;for(h in u=this._events)e.call(u,h)&&c.push(t?h.slice(1):h);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(u)):c},a.prototype.listeners=function(c){var u=t?t+c:c,h=this._events[u];if(!h)return[];if(h.fn)return[h.fn];for(var f=0,p=h.length,m=new Array(p);f<p;f++)m[f]=h[f].fn;return m},a.prototype.listenerCount=function(c){var u=t?t+c:c,h=this._events[u];return h?h.fn?1:h.length:0},a.prototype.emit=function(c,u,h,f,p,m){var g=t?t+c:c;if(!this._events[g])return!1;var d=this._events[g],v=arguments.length,x,y;if(d.fn){switch(d.once&&this.removeListener(c,d.fn,void 0,!0),v){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,u),!0;case 3:return d.fn.call(d.context,u,h),!0;case 4:return d.fn.call(d.context,u,h,f),!0;case 5:return d.fn.call(d.context,u,h,f,p),!0;case 6:return d.fn.call(d.context,u,h,f,p,m),!0}for(y=1,x=new Array(v-1);y<v;y++)x[y-1]=arguments[y];d.fn.apply(d.context,x)}else{var _=d.length,b;for(y=0;y<_;y++)switch(d[y].once&&this.removeListener(c,d[y].fn,void 0,!0),v){case 1:d[y].fn.call(d[y].context);break;case 2:d[y].fn.call(d[y].context,u);break;case 3:d[y].fn.call(d[y].context,u,h);break;case 4:d[y].fn.call(d[y].context,u,h,f);break;default:if(!x)for(b=1,x=new Array(v-1);b<v;b++)x[b-1]=arguments[b];d[y].fn.apply(d[y].context,x)}}return!0},a.prototype.on=function(c,u,h){return s(this,c,u,h,!1)},a.prototype.once=function(c,u,h){return s(this,c,u,h,!0)},a.prototype.removeListener=function(c,u,h,f){var p=t?t+c:c;if(!this._events[p])return this;if(!u)return o(this,p),this;var m=this._events[p];if(m.fn)m.fn===u&&(!f||m.once)&&(!h||m.context===h)&&o(this,p);else{for(var g=0,d=[],v=m.length;g<v;g++)(m[g].fn!==u||f&&!m[g].once||h&&m[g].context!==h)&&d.push(m[g]);d.length?this._events[p]=d.length===1?d[0]:d:o(this,p)}return this},a.prototype.removeAllListeners=function(c){var u;return c?(u=t?t+c:c,this._events[u]&&o(this,u)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=t,a.EventEmitter=a,n.exports=a})(co);var ou=co.exports;const we=Ln(ou),au=Math.PI*2,lu=180/Math.PI,xt=Math.PI/180;class le{constructor(e=0,t=0){this.x=0,this.y=0,this.x=e,this.y=t}clone(){return new le(this.x,this.y)}copyFrom(e){return this.set(e.x,e.y),this}copyTo(e){return e.set(this.x,this.y),e}equals(e){return e.x===this.x&&e.y===this.y}set(e=0,t=e){return this.x=e,this.y=t,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return Zn.x=0,Zn.y=0,Zn}}const Zn=new le;class j{constructor(e=1,t=0,r=0,i=1,s=0,o=0){this.array=null,this.a=e,this.b=t,this.c=r,this.d=i,this.tx=s,this.ty=o}fromArray(e){this.a=e[0],this.b=e[1],this.c=e[3],this.d=e[4],this.tx=e[2],this.ty=e[5]}set(e,t,r,i,s,o){return this.a=e,this.b=t,this.c=r,this.d=i,this.tx=s,this.ty=o,this}toArray(e,t){this.array||(this.array=new Float32Array(9));const r=t||this.array;return e?(r[0]=this.a,r[1]=this.b,r[2]=0,r[3]=this.c,r[4]=this.d,r[5]=0,r[6]=this.tx,r[7]=this.ty,r[8]=1):(r[0]=this.a,r[1]=this.c,r[2]=this.tx,r[3]=this.b,r[4]=this.d,r[5]=this.ty,r[6]=0,r[7]=0,r[8]=1),r}apply(e,t){t=t||new le;const r=e.x,i=e.y;return t.x=this.a*r+this.c*i+this.tx,t.y=this.b*r+this.d*i+this.ty,t}applyInverse(e,t){t=t||new le;const r=this.a,i=this.b,s=this.c,o=this.d,a=this.tx,l=this.ty,c=1/(r*o+s*-i),u=e.x,h=e.y;return t.x=o*c*u+-s*c*h+(l*s-a*o)*c,t.y=r*c*h+-i*c*u+(-l*r+a*i)*c,t}translate(e,t){return this.tx+=e,this.ty+=t,this}scale(e,t){return this.a*=e,this.d*=t,this.c*=e,this.b*=t,this.tx*=e,this.ty*=t,this}rotate(e){const t=Math.cos(e),r=Math.sin(e),i=this.a,s=this.c,o=this.tx;return this.a=i*t-this.b*r,this.b=i*r+this.b*t,this.c=s*t-this.d*r,this.d=s*r+this.d*t,this.tx=o*t-this.ty*r,this.ty=o*r+this.ty*t,this}append(e){const t=this.a,r=this.b,i=this.c,s=this.d;return this.a=e.a*t+e.b*i,this.b=e.a*r+e.b*s,this.c=e.c*t+e.d*i,this.d=e.c*r+e.d*s,this.tx=e.tx*t+e.ty*i+this.tx,this.ty=e.tx*r+e.ty*s+this.ty,this}appendFrom(e,t){const r=e.a,i=e.b,s=e.c,o=e.d,a=e.tx,l=e.ty,c=t.a,u=t.b,h=t.c,f=t.d;return this.a=r*c+i*h,this.b=r*u+i*f,this.c=s*c+o*h,this.d=s*u+o*f,this.tx=a*c+l*h+t.tx,this.ty=a*u+l*f+t.ty,this}setTransform(e,t,r,i,s,o,a,l,c){return this.a=Math.cos(a+c)*s,this.b=Math.sin(a+c)*s,this.c=-Math.sin(a-l)*o,this.d=Math.cos(a-l)*o,this.tx=e-(r*this.a+i*this.c),this.ty=t-(r*this.b+i*this.d),this}prepend(e){const t=this.tx;if(e.a!==1||e.b!==0||e.c!==0||e.d!==1){const r=this.a,i=this.c;this.a=r*e.a+this.b*e.c,this.b=r*e.b+this.b*e.d,this.c=i*e.a+this.d*e.c,this.d=i*e.b+this.d*e.d}return this.tx=t*e.a+this.ty*e.c+e.tx,this.ty=t*e.b+this.ty*e.d+e.ty,this}decompose(e){const t=this.a,r=this.b,i=this.c,s=this.d,o=e.pivot,a=-Math.atan2(-i,s),l=Math.atan2(r,t),c=Math.abs(a+l);return c<1e-5||Math.abs(au-c)<1e-5?(e.rotation=l,e.skew.x=e.skew.y=0):(e.rotation=0,e.skew.x=a,e.skew.y=l),e.scale.x=Math.sqrt(t*t+r*r),e.scale.y=Math.sqrt(i*i+s*s),e.position.x=this.tx+(o.x*t+o.y*i),e.position.y=this.ty+(o.x*r+o.y*s),e}invert(){const e=this.a,t=this.b,r=this.c,i=this.d,s=this.tx,o=e*i-t*r;return this.a=i/o,this.b=-t/o,this.c=-r/o,this.d=e/o,this.tx=(r*this.ty-i*s)/o,this.ty=-(e*this.ty-t*s)/o,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const e=new j;return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e}copyTo(e){return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e}copyFrom(e){return this.a=e.a,this.b=e.b,this.c=e.c,this.d=e.d,this.tx=e.tx,this.ty=e.ty,this}equals(e){return e.a===this.a&&e.b===this.b&&e.c===this.c&&e.d===this.d&&e.tx===this.tx&&e.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return cu.identity()}static get shared(){return uu.identity()}}const uu=new j,cu=new j,Ye=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],qe=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],Ke=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],Ze=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],Br=[],ho=[],rn=Math.sign;function hu(){for(let n=0;n<16;n++){const e=[];Br.push(e);for(let t=0;t<16;t++){const r=rn(Ye[n]*Ye[t]+Ke[n]*qe[t]),i=rn(qe[n]*Ye[t]+Ze[n]*qe[t]),s=rn(Ye[n]*Ke[t]+Ke[n]*Ze[t]),o=rn(qe[n]*Ke[t]+Ze[n]*Ze[t]);for(let a=0;a<16;a++)if(Ye[a]===r&&qe[a]===i&&Ke[a]===s&&Ze[a]===o){e.push(a);break}}}for(let n=0;n<16;n++){const e=new j;e.set(Ye[n],qe[n],Ke[n],Ze[n],0,0),ho.push(e)}}hu();const K={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:n=>Ye[n],uY:n=>qe[n],vX:n=>Ke[n],vY:n=>Ze[n],inv:n=>n&8?n&15:-n&7,add:(n,e)=>Br[n][e],sub:(n,e)=>Br[n][K.inv(e)],rotate180:n=>n^4,isVertical:n=>(n&3)===2,byDirection:(n,e)=>Math.abs(n)*2<=Math.abs(e)?e>=0?K.S:K.N:Math.abs(e)*2<=Math.abs(n)?n>0?K.E:K.W:e>0?n>0?K.SE:K.SW:n>0?K.NE:K.NW,matrixAppendRotationInv:(n,e,t=0,r=0)=>{const i=ho[K.inv(e)];i.tx=t,i.ty=r,n.append(i)}},sn=[new le,new le,new le,new le];class ne{constructor(e=0,t=0,r=0,i=0){this.type="rectangle",this.x=Number(e),this.y=Number(t),this.width=Number(r),this.height=Number(i)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new ne(0,0,0,0)}clone(){return new ne(this.x,this.y,this.width,this.height)}copyFromBounds(e){return this.x=e.minX,this.y=e.minY,this.width=e.maxX-e.minX,this.height=e.maxY-e.minY,this}copyFrom(e){return this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this}copyTo(e){return e.copyFrom(this),e}contains(e,t){return this.width<=0||this.height<=0?!1:e>=this.x&&e<this.x+this.width&&t>=this.y&&t<this.y+this.height}strokeContains(e,t,r){const{width:i,height:s}=this;if(i<=0||s<=0)return!1;const o=this.x,a=this.y,l=o-r/2,c=o+i+r/2,u=a-r/2,h=a+s+r/2,f=o+r/2,p=o+i-r/2,m=a+r/2,g=a+s-r/2;return e>=l&&e<=c&&t>=u&&t<=h&&!(e>f&&e<p&&t>m&&t<g)}intersects(e,t){if(!t){const T=this.x<e.x?e.x:this.x;if((this.right>e.right?e.right:this.right)<=T)return!1;const S=this.y<e.y?e.y:this.y;return(this.bottom>e.bottom?e.bottom:this.bottom)>S}const r=this.left,i=this.right,s=this.top,o=this.bottom;if(i<=r||o<=s)return!1;const a=sn[0].set(e.left,e.top),l=sn[1].set(e.left,e.bottom),c=sn[2].set(e.right,e.top),u=sn[3].set(e.right,e.bottom);if(c.x<=a.x||l.y<=a.y)return!1;const h=Math.sign(t.a*t.d-t.b*t.c);if(h===0||(t.apply(a,a),t.apply(l,l),t.apply(c,c),t.apply(u,u),Math.max(a.x,l.x,c.x,u.x)<=r||Math.min(a.x,l.x,c.x,u.x)>=i||Math.max(a.y,l.y,c.y,u.y)<=s||Math.min(a.y,l.y,c.y,u.y)>=o))return!1;const f=h*(l.y-a.y),p=h*(a.x-l.x),m=f*r+p*s,g=f*i+p*s,d=f*r+p*o,v=f*i+p*o;if(Math.max(m,g,d,v)<=f*a.x+p*a.y||Math.min(m,g,d,v)>=f*u.x+p*u.y)return!1;const x=h*(a.y-c.y),y=h*(c.x-a.x),_=x*r+y*s,b=x*i+y*s,C=x*r+y*o,A=x*i+y*o;return!(Math.max(_,b,C,A)<=x*a.x+y*a.y||Math.min(_,b,C,A)>=x*u.x+y*u.y)}pad(e=0,t=e){return this.x-=e,this.y-=t,this.width+=e*2,this.height+=t*2,this}fit(e){const t=Math.max(this.x,e.x),r=Math.min(this.x+this.width,e.x+e.width),i=Math.max(this.y,e.y),s=Math.min(this.y+this.height,e.y+e.height);return this.x=t,this.width=Math.max(r-t,0),this.y=i,this.height=Math.max(s-i,0),this}ceil(e=1,t=.001){const r=Math.ceil((this.x+this.width-t)*e)/e,i=Math.ceil((this.y+this.height-t)*e)/e;return this.x=Math.floor((this.x+t)*e)/e,this.y=Math.floor((this.y+t)*e)/e,this.width=r-this.x,this.height=i-this.y,this}enlarge(e){const t=Math.min(this.x,e.x),r=Math.max(this.x+this.width,e.x+e.width),i=Math.min(this.y,e.y),s=Math.max(this.y+this.height,e.y+e.height);return this.x=t,this.width=r-t,this.y=i,this.height=s-i,this}getBounds(e){return e=e||new ne,e.copyFrom(this),e}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const Qn={default:-1};function re(n="default"){return Qn[n]===void 0&&(Qn[n]=-1),++Qn[n]}const Ji={},X="8.0.0";function O(n,e,t=3){if(Ji[e])return;let r=new Error().stack;typeof r>"u"?console.warn("PixiJS Deprecation Warning: ",`${e}
Deprecated since v${n}`):(r=r.split(`
`).splice(t).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${e}
Deprecated since v${n}`),console.warn(r),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${e}
Deprecated since v${n}`),console.warn(r))),Ji[e]=!0}const fo=()=>{};function Fn(n){return n+=n===0?1:0,--n,n|=n>>>1,n|=n>>>2,n|=n>>>4,n|=n>>>8,n|=n>>>16,n+1}function es(n){return!(n&n-1)&&!!n}function fu(n){const e={};for(const t in n)n[t]!==void 0&&(e[t]=n[t]);return e}const ts=Object.create(null);function du(n){const e=ts[n];return e===void 0&&(ts[n]=re("resource")),e}const po=class mo extends we{constructor(e={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,e={...mo.defaultOptions,...e},this.addressMode=e.addressMode,this.addressModeU=e.addressModeU??this.addressModeU,this.addressModeV=e.addressModeV??this.addressModeV,this.addressModeW=e.addressModeW??this.addressModeW,this.scaleMode=e.scaleMode,this.magFilter=e.magFilter??this.magFilter,this.minFilter=e.minFilter??this.minFilter,this.mipmapFilter=e.mipmapFilter??this.mipmapFilter,this.lodMinClamp=e.lodMinClamp,this.lodMaxClamp=e.lodMaxClamp,this.compare=e.compare,this.maxAnisotropy=e.maxAnisotropy??1}set addressMode(e){this.addressModeU=e,this.addressModeV=e,this.addressModeW=e}get addressMode(){return this.addressModeU}set wrapMode(e){O(X,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=e}get wrapMode(){return this.addressMode}set scaleMode(e){this.magFilter=e,this.minFilter=e,this.mipmapFilter=e}get scaleMode(){return this.magFilter}set maxAnisotropy(e){this._maxAnisotropy=Math.min(e,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const e=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=du(e),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};po.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let pu=po;const go=class vo extends we{constructor(e={}){super(),this.options=e,this.uid=re("textureSource"),this._resourceType="textureSource",this._resourceId=re("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,e={...vo.defaultOptions,...e},this.label=e.label??"",this.resource=e.resource,this.autoGarbageCollect=e.autoGarbageCollect,this._resolution=e.resolution,e.width?this.pixelWidth=e.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,e.height?this.pixelHeight=e.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=e.format,this.dimension=e.dimensions,this.mipLevelCount=e.mipLevelCount,this.autoGenerateMipmaps=e.autoGenerateMipmaps,this.sampleCount=e.sampleCount,this.antialias=e.antialias,this.alphaMode=e.alphaMode,this.style=new pu(fu(e)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(e){var t,r;this.style!==e&&((t=this._style)==null||t.off("change",this._onStyleChange,this),this._style=e,(r=this._style)==null||r.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(e){this._style.addressMode=e}get repeatMode(){return this._style.addressMode}set repeatMode(e){this._style.addressMode=e}get magFilter(){return this._style.magFilter}set magFilter(e){this._style.magFilter=e}get minFilter(){return this._style.minFilter}set minFilter(e){this._style.minFilter=e}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(e){this._style.mipmapFilter=e}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(e){this._style.lodMinClamp=e}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(e){this._style.lodMaxClamp=e}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const e=this._resolution;if(this.resize(this.resourceWidth/e,this.resourceHeight/e))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=re("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:e}=this;return e.naturalWidth||e.videoWidth||e.displayWidth||e.width}get resourceHeight(){const{resource:e}=this;return e.naturalHeight||e.videoHeight||e.displayHeight||e.height}get resolution(){return this._resolution}set resolution(e){this._resolution!==e&&(this._resolution=e,this.width=this.pixelWidth/e,this.height=this.pixelHeight/e)}resize(e,t,r){r=r||this._resolution,e=e||this.width,t=t||this.height;const i=Math.round(e*r),s=Math.round(t*r);return this.width=i/r,this.height=s/r,this._resolution=r,this.pixelWidth===i&&this.pixelHeight===s?!1:(this._refreshPOT(),this.pixelWidth=i,this.pixelHeight=s,this.emit("resize",this),this._resourceId=re("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(e){this._style.wrapMode=e}get wrapMode(){return this._style.wrapMode}set scaleMode(e){this._style.scaleMode=e}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=es(this.pixelWidth)&&es(this.pixelHeight)}static test(e){throw new Error("Unimplemented")}};go.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let Ae=go;class vi extends Ae{constructor(e){const t=e.resource||new Float32Array(e.width*e.height*4);let r=e.format;r||(t instanceof Float32Array?r="rgba32float":t instanceof Int32Array||t instanceof Uint32Array?r="rgba32uint":t instanceof Int16Array||t instanceof Uint16Array?r="rgba16uint":(t instanceof Int8Array,r="bgra8unorm")),super({...e,resource:t,format:r}),this.uploadMethodId="buffer"}static test(e){return e instanceof Int8Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array}}vi.extension=E.TextureSource;const ns=new j;class mu{constructor(e,t){this.mapCoord=new j,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof t>"u"?this.clampMargin=e.width<10?0:.5:this.clampMargin=t,this.isSimple=!1,this.texture=e}get texture(){return this._texture}set texture(e){var t;this.texture!==e&&((t=this._texture)==null||t.removeListener("update",this.update,this),this._texture=e,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(e,t){t===void 0&&(t=e);const r=this.mapCoord;for(let i=0;i<e.length;i+=2){const s=e[i],o=e[i+1];t[i]=s*r.a+o*r.c+r.tx,t[i+1]=s*r.b+o*r.d+r.ty}return t}update(){const e=this._texture;this._updateID++;const t=e.uvs;this.mapCoord.set(t.x1-t.x0,t.y1-t.y0,t.x3-t.x0,t.y3-t.y0,t.x0,t.y0);const r=e.orig,i=e.trim;i&&(ns.set(r.width/i.width,0,0,r.height/i.height,-i.x/i.width,-i.y/i.height),this.mapCoord.append(ns));const s=e.source,o=this.uClampFrame,a=this.clampMargin/s._resolution,l=this.clampOffset;return o[0]=(e.frame.x+a+l)/s.width,o[1]=(e.frame.y+a+l)/s.height,o[2]=(e.frame.x+e.frame.width-a+l)/s.width,o[3]=(e.frame.y+e.frame.height-a+l)/s.height,this.uClampOffset[0]=l/s.pixelWidth,this.uClampOffset[1]=l/s.pixelHeight,this.isSimple=e.frame.width===s.width&&e.frame.height===s.height&&e.rotate===0,!0}}class U extends we{constructor({source:e,label:t,frame:r,orig:i,trim:s,defaultAnchor:o,defaultBorders:a,rotate:l,dynamic:c}={}){if(super(),this.uid=re("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new ne,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=t,this.source=(e==null?void 0:e.source)??new Ae,this.noFrame=!r,r)this.frame.copyFrom(r);else{const{width:u,height:h}=this._source;this.frame.width=u,this.frame.height=h}this.orig=i||this.frame,this.trim=s,this.rotate=l??0,this.defaultAnchor=o,this.defaultBorders=a,this.destroyed=!1,this.dynamic=c||!1,this.updateUvs()}set source(e){this._source&&this._source.off("resize",this.update,this),this._source=e,e.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new mu(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:e,frame:t}=this,{width:r,height:i}=this._source,s=t.x/r,o=t.y/i,a=t.width/r,l=t.height/i;let c=this.rotate;if(c){const u=a/2,h=l/2,f=s+u,p=o+h;c=K.add(c,K.NW),e.x0=f+u*K.uX(c),e.y0=p+h*K.uY(c),c=K.add(c,2),e.x1=f+u*K.uX(c),e.y1=p+h*K.uY(c),c=K.add(c,2),e.x2=f+u*K.uX(c),e.y2=p+h*K.uY(c),c=K.add(c,2),e.x3=f+u*K.uX(c),e.y3=p+h*K.uY(c)}else e.x0=s,e.y0=o,e.x1=s+a,e.y1=o,e.x2=s+a,e.y2=o+l,e.x3=s,e.y3=o+l}destroy(e=!1){this._source&&e&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return O(X,"Texture.baseTexture is now Texture.source"),this._source}}U.EMPTY=new U({label:"EMPTY",source:new Ae({label:"EMPTY"})});U.EMPTY.destroy=fo;U.WHITE=new U({source:new vi({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});U.WHITE.destroy=fo;function gu(n,e,t,r){const{width:i,height:s}=t.orig,o=t.trim;if(o){const a=o.width,l=o.height;n.minX=o.x-e._x*i-r,n.maxX=n.minX+a,n.minY=o.y-e._y*s-r,n.maxY=n.minY+l}else n.minX=-e._x*i-r,n.maxX=n.minX+i,n.minY=-e._y*s-r,n.maxY=n.minY+s}var vu={grad:.9,turn:360,rad:360/(2*Math.PI)},Ee=function(n){return typeof n=="string"?n.length>0:typeof n=="number"},oe=function(n,e,t){return e===void 0&&(e=0),t===void 0&&(t=Math.pow(10,e)),Math.round(t*n)/t+0},ve=function(n,e,t){return e===void 0&&(e=0),t===void 0&&(t=1),n>t?t:n>e?n:e},xo=function(n){return(n=isFinite(n)?n%360:0)>0?n:n+360},rs=function(n){return{r:ve(n.r,0,255),g:ve(n.g,0,255),b:ve(n.b,0,255),a:ve(n.a)}},Jn=function(n){return{r:oe(n.r),g:oe(n.g),b:oe(n.b),a:oe(n.a,3)}},xu=/^#([0-9a-f]{3,8})$/i,on=function(n){var e=n.toString(16);return e.length<2?"0"+e:e},yo=function(n){var e=n.r,t=n.g,r=n.b,i=n.a,s=Math.max(e,t,r),o=s-Math.min(e,t,r),a=o?s===e?(t-r)/o:s===t?2+(r-e)/o:4+(e-t)/o:0;return{h:60*(a<0?a+6:a),s:s?o/s*100:0,v:s/255*100,a:i}},_o=function(n){var e=n.h,t=n.s,r=n.v,i=n.a;e=e/360*6,t/=100,r/=100;var s=Math.floor(e),o=r*(1-t),a=r*(1-(e-s)*t),l=r*(1-(1-e+s)*t),c=s%6;return{r:255*[r,a,o,o,l,r][c],g:255*[l,r,r,a,o,o][c],b:255*[o,o,l,r,r,a][c],a:i}},is=function(n){return{h:xo(n.h),s:ve(n.s,0,100),l:ve(n.l,0,100),a:ve(n.a)}},ss=function(n){return{h:oe(n.h),s:oe(n.s),l:oe(n.l),a:oe(n.a,3)}},os=function(n){return _o((t=(e=n).s,{h:e.h,s:(t*=((r=e.l)<50?r:100-r)/100)>0?2*t/(r+t)*100:0,v:r+t,a:e.a}));var e,t,r},Gt=function(n){return{h:(e=yo(n)).h,s:(i=(200-(t=e.s))*(r=e.v)/100)>0&&i<200?t*r/100/(i<=100?i:200-i)*100:0,l:i/2,a:e.a};var e,t,r,i},yu=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,_u=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,bu=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Su=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Dr={string:[[function(n){var e=xu.exec(n);return e?(n=e[1]).length<=4?{r:parseInt(n[0]+n[0],16),g:parseInt(n[1]+n[1],16),b:parseInt(n[2]+n[2],16),a:n.length===4?oe(parseInt(n[3]+n[3],16)/255,2):1}:n.length===6||n.length===8?{r:parseInt(n.substr(0,2),16),g:parseInt(n.substr(2,2),16),b:parseInt(n.substr(4,2),16),a:n.length===8?oe(parseInt(n.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(n){var e=bu.exec(n)||Su.exec(n);return e?e[2]!==e[4]||e[4]!==e[6]?null:rs({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):null},"rgb"],[function(n){var e=yu.exec(n)||_u.exec(n);if(!e)return null;var t,r,i=is({h:(t=e[1],r=e[2],r===void 0&&(r="deg"),Number(t)*(vu[r]||1)),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)});return os(i)},"hsl"]],object:[[function(n){var e=n.r,t=n.g,r=n.b,i=n.a,s=i===void 0?1:i;return Ee(e)&&Ee(t)&&Ee(r)?rs({r:Number(e),g:Number(t),b:Number(r),a:Number(s)}):null},"rgb"],[function(n){var e=n.h,t=n.s,r=n.l,i=n.a,s=i===void 0?1:i;if(!Ee(e)||!Ee(t)||!Ee(r))return null;var o=is({h:Number(e),s:Number(t),l:Number(r),a:Number(s)});return os(o)},"hsl"],[function(n){var e=n.h,t=n.s,r=n.v,i=n.a,s=i===void 0?1:i;if(!Ee(e)||!Ee(t)||!Ee(r))return null;var o=function(a){return{h:xo(a.h),s:ve(a.s,0,100),v:ve(a.v,0,100),a:ve(a.a)}}({h:Number(e),s:Number(t),v:Number(r),a:Number(s)});return _o(o)},"hsv"]]},as=function(n,e){for(var t=0;t<e.length;t++){var r=e[t][0](n);if(r)return[r,e[t][1]]}return[null,void 0]},Cu=function(n){return typeof n=="string"?as(n.trim(),Dr.string):typeof n=="object"&&n!==null?as(n,Dr.object):[null,void 0]},er=function(n,e){var t=Gt(n);return{h:t.h,s:ve(t.s+100*e,0,100),l:t.l,a:t.a}},tr=function(n){return(299*n.r+587*n.g+114*n.b)/1e3/255},ls=function(n,e){var t=Gt(n);return{h:t.h,s:t.s,l:ve(t.l+100*e,0,100),a:t.a}},Lr=function(){function n(e){this.parsed=Cu(e)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return n.prototype.isValid=function(){return this.parsed!==null},n.prototype.brightness=function(){return oe(tr(this.rgba),2)},n.prototype.isDark=function(){return tr(this.rgba)<.5},n.prototype.isLight=function(){return tr(this.rgba)>=.5},n.prototype.toHex=function(){return e=Jn(this.rgba),t=e.r,r=e.g,i=e.b,o=(s=e.a)<1?on(oe(255*s)):"","#"+on(t)+on(r)+on(i)+o;var e,t,r,i,s,o},n.prototype.toRgb=function(){return Jn(this.rgba)},n.prototype.toRgbString=function(){return e=Jn(this.rgba),t=e.r,r=e.g,i=e.b,(s=e.a)<1?"rgba("+t+", "+r+", "+i+", "+s+")":"rgb("+t+", "+r+", "+i+")";var e,t,r,i,s},n.prototype.toHsl=function(){return ss(Gt(this.rgba))},n.prototype.toHslString=function(){return e=ss(Gt(this.rgba)),t=e.h,r=e.s,i=e.l,(s=e.a)<1?"hsla("+t+", "+r+"%, "+i+"%, "+s+")":"hsl("+t+", "+r+"%, "+i+"%)";var e,t,r,i,s},n.prototype.toHsv=function(){return e=yo(this.rgba),{h:oe(e.h),s:oe(e.s),v:oe(e.v),a:oe(e.a,3)};var e},n.prototype.invert=function(){return Pe({r:255-(e=this.rgba).r,g:255-e.g,b:255-e.b,a:e.a});var e},n.prototype.saturate=function(e){return e===void 0&&(e=.1),Pe(er(this.rgba,e))},n.prototype.desaturate=function(e){return e===void 0&&(e=.1),Pe(er(this.rgba,-e))},n.prototype.grayscale=function(){return Pe(er(this.rgba,-1))},n.prototype.lighten=function(e){return e===void 0&&(e=.1),Pe(ls(this.rgba,e))},n.prototype.darken=function(e){return e===void 0&&(e=.1),Pe(ls(this.rgba,-e))},n.prototype.rotate=function(e){return e===void 0&&(e=15),this.hue(this.hue()+e)},n.prototype.alpha=function(e){return typeof e=="number"?Pe({r:(t=this.rgba).r,g:t.g,b:t.b,a:e}):oe(this.rgba.a,3);var t},n.prototype.hue=function(e){var t=Gt(this.rgba);return typeof e=="number"?Pe({h:e,s:t.s,l:t.l,a:t.a}):oe(t.h)},n.prototype.isEqual=function(e){return this.toHex()===Pe(e).toHex()},n}(),Pe=function(n){return n instanceof Lr?n:new Lr(n)},us=[],wu=function(n){n.forEach(function(e){us.indexOf(e)<0&&(e(Lr,Dr),us.push(e))})};function Au(n,e){var t={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},r={};for(var i in t)r[t[i]]=i;var s={};n.prototype.toName=function(o){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var a,l,c=r[this.toHex()];if(c)return c;if(o!=null&&o.closest){var u=this.toRgb(),h=1/0,f="black";if(!s.length)for(var p in t)s[p]=new n(t[p]).toRgb();for(var m in t){var g=(a=u,l=s[m],Math.pow(a.r-l.r,2)+Math.pow(a.g-l.g,2)+Math.pow(a.b-l.b,2));g<h&&(h=g,f=m)}return f}},e.string.push([function(o){var a=o.toLowerCase(),l=a==="transparent"?"#0000":t[a];return l?new n(l).toRgb():null},"name"])}wu([Au]);const yt=class Ut{constructor(e=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=e}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(e){return this.value=e,this}set value(e){if(e instanceof Ut)this._value=this._cloneSource(e._value),this._int=e._int,this._components.set(e._components);else{if(e===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,e))&&(this._normalize(e),this._value=this._cloneSource(e))}}get value(){return this._value}_cloneSource(e){return typeof e=="string"||typeof e=="number"||e instanceof Number||e===null?e:Array.isArray(e)||ArrayBuffer.isView(e)?e.slice(0):typeof e=="object"&&e!==null?{...e}:e}_isSourceEqual(e,t){const r=typeof e;if(r!==typeof t)return!1;if(r==="number"||r==="string"||e instanceof Number)return e===t;if(Array.isArray(e)&&Array.isArray(t)||ArrayBuffer.isView(e)&&ArrayBuffer.isView(t))return e.length!==t.length?!1:e.every((s,o)=>s===t[o]);if(e!==null&&t!==null){const s=Object.keys(e),o=Object.keys(t);return s.length!==o.length?!1:s.every(a=>e[a]===t[a])}return e===t}toRgba(){const[e,t,r,i]=this._components;return{r:e,g:t,b:r,a:i}}toRgb(){const[e,t,r]=this._components;return{r:e,g:t,b:r}}toRgbaString(){const[e,t,r]=this.toUint8RgbArray();return`rgba(${e},${t},${r},${this.alpha})`}toUint8RgbArray(e){const[t,r,i]=this._components;return this._arrayRgb||(this._arrayRgb=[]),e=e||this._arrayRgb,e[0]=Math.round(t*255),e[1]=Math.round(r*255),e[2]=Math.round(i*255),e}toArray(e){this._arrayRgba||(this._arrayRgba=[]),e=e||this._arrayRgba;const[t,r,i,s]=this._components;return e[0]=t,e[1]=r,e[2]=i,e[3]=s,e}toRgbArray(e){this._arrayRgb||(this._arrayRgb=[]),e=e||this._arrayRgb;const[t,r,i]=this._components;return e[0]=t,e[1]=r,e[2]=i,e}toNumber(){return this._int}toBgrNumber(){const[e,t,r]=this.toUint8RgbArray();return(r<<16)+(t<<8)+e}toLittleEndianNumber(){const e=this._int;return(e>>16)+(e&65280)+((e&255)<<16)}multiply(e){const[t,r,i,s]=Ut._temp.setValue(e)._components;return this._components[0]*=t,this._components[1]*=r,this._components[2]*=i,this._components[3]*=s,this._refreshInt(),this._value=null,this}premultiply(e,t=!0){return t&&(this._components[0]*=e,this._components[1]*=e,this._components[2]*=e),this._components[3]=e,this._refreshInt(),this._value=null,this}toPremultiplied(e,t=!0){if(e===1)return(255<<24)+this._int;if(e===0)return t?0:this._int;let r=this._int>>16&255,i=this._int>>8&255,s=this._int&255;return t&&(r=r*e+.5|0,i=i*e+.5|0,s=s*e+.5|0),(e*255<<24)+(r<<16)+(i<<8)+s}toHex(){const e=this._int.toString(16);return`#${"000000".substring(0,6-e.length)+e}`}toHexa(){const t=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-t.length)+t}setAlpha(e){return this._components[3]=this._clamp(e),this}_normalize(e){let t,r,i,s;if((typeof e=="number"||e instanceof Number)&&e>=0&&e<=16777215){const o=e;t=(o>>16&255)/255,r=(o>>8&255)/255,i=(o&255)/255,s=1}else if((Array.isArray(e)||e instanceof Float32Array)&&e.length>=3&&e.length<=4)e=this._clamp(e),[t,r,i,s=1]=e;else if((e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&e.length>=3&&e.length<=4)e=this._clamp(e,0,255),[t,r,i,s=255]=e,t/=255,r/=255,i/=255,s/=255;else if(typeof e=="string"||typeof e=="object"){if(typeof e=="string"){const a=Ut.HEX_PATTERN.exec(e);a&&(e=`#${a[2]}`)}const o=Pe(e);o.isValid()&&({r:t,g:r,b:i,a:s}=o.rgba,t/=255,r/=255,i/=255)}if(t!==void 0)this._components[0]=t,this._components[1]=r,this._components[2]=i,this._components[3]=s,this._refreshInt();else throw new Error(`Unable to convert color ${e}`)}_refreshInt(){this._clamp(this._components);const[e,t,r]=this._components;this._int=(e*255<<16)+(t*255<<8)+(r*255|0)}_clamp(e,t=0,r=1){return typeof e=="number"?Math.min(Math.max(e,t),r):(e.forEach((i,s)=>{e[s]=Math.min(Math.max(i,t),r)}),e)}static isColorLike(e){return typeof e=="number"||typeof e=="string"||e instanceof Number||e instanceof Ut||Array.isArray(e)||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Float32Array||e.r!==void 0&&e.g!==void 0&&e.b!==void 0||e.r!==void 0&&e.g!==void 0&&e.b!==void 0&&e.a!==void 0||e.h!==void 0&&e.s!==void 0&&e.l!==void 0||e.h!==void 0&&e.s!==void 0&&e.l!==void 0&&e.a!==void 0||e.h!==void 0&&e.s!==void 0&&e.v!==void 0||e.h!==void 0&&e.s!==void 0&&e.v!==void 0&&e.a!==void 0}};yt.shared=new yt;yt._temp=new yt;yt.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let $=yt;const Tu={cullArea:null,cullable:!1,cullableChildren:!0};class xi{constructor(e,t){this._pool=[],this._count=0,this._index=0,this._classType=e,t&&this.prepopulate(t)}prepopulate(e){for(let t=0;t<e;t++)this._pool[this._index++]=new this._classType;this._count+=e}get(e){var r;let t;return this._index>0?t=this._pool[--this._index]:t=new this._classType,(r=t.init)==null||r.call(t,e),t}return(e){var t;(t=e.reset)==null||t.call(e),this._pool[this._index++]=e}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}}class Pu{constructor(){this._poolsByClass=new Map}prepopulate(e,t){this.getPool(e).prepopulate(t)}get(e,t){return this.getPool(e).get(t)}return(e){this.getPool(e.constructor).return(e)}getPool(e){return this._poolsByClass.has(e)||this._poolsByClass.set(e,new xi(e)),this._poolsByClass.get(e)}stats(){const e={};return this._poolsByClass.forEach(t=>{const r=e[t._classType.name]?t._classType.name+t._classType.ID:t._classType.name;e[r]={free:t.totalFree,used:t.totalUsed,size:t.totalSize}}),e}}const be=new Pu;function Mu(n,e,t){const r=n.length;let i;if(e>=r||t===0)return;t=e+t>r?r-e:t;const s=r-t;for(i=e;i<s;++i)n[i]=n[i+t];n.length=s}const Fu={allowChildren:!0,removeChildren(n=0,e){const t=e??this.children.length,r=t-n,i=[];if(r>0&&r<=t){for(let o=t-1;o>=n;o--){const a=this.children[o];a&&(i.push(a),a.parent=null)}Mu(this.children,n,t);const s=this.renderGroup||this.parentRenderGroup;s&&s.removeChildren(i);for(let o=0;o<i.length;++o)this.emit("childRemoved",i[o],this,o),i[o].emit("removed",this);return i}else if(r===0&&this.children.length===0)return i;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(n){const e=this.getChildAt(n);return this.removeChild(e)},getChildAt(n){if(n<0||n>=this.children.length)throw new Error(`getChildAt: Index (${n}) does not exist.`);return this.children[n]},setChildIndex(n,e){if(e<0||e>=this.children.length)throw new Error(`The index ${e} supplied is out of bounds ${this.children.length}`);this.getChildIndex(n),this.addChildAt(n,e)},getChildIndex(n){const e=this.children.indexOf(n);if(e===-1)throw new Error("The supplied Container must be a child of the caller");return e},addChildAt(n,e){this.allowChildren||O(X,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:t}=this;if(e<0||e>t.length)throw new Error(`${n}addChildAt: The index ${e} supplied is out of bounds ${t.length}`);if(n.parent){const i=n.parent.children.indexOf(n);if(n.parent===this&&i===e)return n;i!==-1&&n.parent.children.splice(i,1)}e===t.length?t.push(n):t.splice(e,0,n),n.parent=this,n.didChange=!0,n.didViewUpdate=!1,n._updateFlags=15;const r=this.renderGroup||this.parentRenderGroup;return r&&r.addChild(n),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",n,this,e),n.emit("added",this),n},swapChildren(n,e){if(n===e)return;const t=this.getChildIndex(n),r=this.getChildIndex(e);this.children[t]=e,this.children[r]=n;const i=this.renderGroup||this.parentRenderGroup;i&&(i.structureDidChange=!0),this._didChangeId++},removeFromParent(){var n;(n=this.parent)==null||n.removeChild(this)},reparentChild(...n){return n.length===1?this.reparentChildAt(n[0],this.children.length):(n.forEach(e=>this.reparentChildAt(e,this.children.length)),n[0])},reparentChildAt(n,e){if(n.parent===this)return this.setChildIndex(n,e),n;const t=n.worldTransform.clone();n.removeFromParent(),this.addChildAt(n,e);const r=this.worldTransform.clone();return r.invert(),t.prepend(r),n.setFromMatrix(t),n}};class cs{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let e=0;e<this.filters.length;e++)this.filters[e].destroy();this.filters=null,this.filterArea=null}}class Iu{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(e=>{this.add({test:e.test,maskClass:e})}))}add(e){this._tests.push(e)}getMaskEffect(e){this._initialized||this.init();for(let t=0;t<this._tests.length;t++){const r=this._tests[t];if(r.test(e))return be.get(r.maskClass,e)}return e}returnMaskEffect(e){be.return(e)}}const Nr=new Iu;ce.handleByList(E.MaskEffect,Nr._effectClasses);const zu={_maskEffect:null,_filterEffect:null,effects:[],addEffect(n){if(this.effects.indexOf(n)!==-1)return;this.effects.push(n),this.effects.sort((r,i)=>r.priority-i.priority);const t=this.renderGroup||this.parentRenderGroup;t&&(t.structureDidChange=!0),this._updateIsSimple()},removeEffect(n){const e=this.effects.indexOf(n);e!==-1&&(this.effects.splice(e,1),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateIsSimple())},set mask(n){const e=this._maskEffect;(e==null?void 0:e.mask)!==n&&(e&&(this.removeEffect(e),Nr.returnMaskEffect(e),this._maskEffect=null),n!=null&&(this._maskEffect=Nr.getMaskEffect(n),this.addEffect(this._maskEffect)))},get mask(){var n;return(n=this._maskEffect)==null?void 0:n.mask},set filters(n){var s;!Array.isArray(n)&&n&&(n=[n]);const e=this._filterEffect||(this._filterEffect=new cs);n=n;const t=(n==null?void 0:n.length)>0,r=((s=e.filters)==null?void 0:s.length)>0,i=t!==r;n=Array.isArray(n)?n.slice(0):n,e.filters=Object.freeze(n),i&&(t?this.addEffect(e):(this.removeEffect(e),e.filters=n??null))},get filters(){var n;return(n=this._filterEffect)==null?void 0:n.filters},set filterArea(n){this._filterEffect||(this._filterEffect=new cs),this._filterEffect.filterArea=n},get filterArea(){var n;return(n=this._filterEffect)==null?void 0:n.filterArea}},Ou={label:null,get name(){return O(X,"Container.name property has been removed, use Container.label instead"),this.label},set name(n){O(X,"Container.name property has been removed, use Container.label instead"),this.label=n},getChildByName(n,e=!1){return this.getChildByLabel(n,e)},getChildByLabel(n,e=!1){const t=this.children;for(let r=0;r<t.length;r++){const i=t[r];if(i.label===n||n instanceof RegExp&&n.test(i.label))return i}if(e)for(let r=0;r<t.length;r++){const s=t[r].getChildByLabel(n,!0);if(s)return s}return null},getChildrenByLabel(n,e=!1,t=[]){const r=this.children;for(let i=0;i<r.length;i++){const s=r[i];(s.label===n||n instanceof RegExp&&n.test(s.label))&&t.push(s)}if(e)for(let i=0;i<r.length;i++)r[i].getChildrenByLabel(n,!0,t);return t}},hs=new j;class Oe{constructor(e=1/0,t=1/0,r=-1/0,i=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=hs,this.minX=e,this.minY=t,this.maxX=r,this.maxY=i}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new ne);const e=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(e.x=0,e.y=0,e.width=0,e.height=0):e.copyFromBounds(this),e}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=hs,this}set(e,t,r,i){this.minX=e,this.minY=t,this.maxX=r,this.maxY=i}addFrame(e,t,r,i,s){s||(s=this.matrix);const o=s.a,a=s.b,l=s.c,c=s.d,u=s.tx,h=s.ty;let f=this.minX,p=this.minY,m=this.maxX,g=this.maxY,d=o*e+l*t+u,v=a*e+c*t+h;d<f&&(f=d),v<p&&(p=v),d>m&&(m=d),v>g&&(g=v),d=o*r+l*t+u,v=a*r+c*t+h,d<f&&(f=d),v<p&&(p=v),d>m&&(m=d),v>g&&(g=v),d=o*e+l*i+u,v=a*e+c*i+h,d<f&&(f=d),v<p&&(p=v),d>m&&(m=d),v>g&&(g=v),d=o*r+l*i+u,v=a*r+c*i+h,d<f&&(f=d),v<p&&(p=v),d>m&&(m=d),v>g&&(g=v),this.minX=f,this.minY=p,this.maxX=m,this.maxY=g}addRect(e,t){this.addFrame(e.x,e.y,e.x+e.width,e.y+e.height,t)}addBounds(e,t){this.addFrame(e.minX,e.minY,e.maxX,e.maxY,t)}addBoundsMask(e){this.minX=this.minX>e.minX?this.minX:e.minX,this.minY=this.minY>e.minY?this.minY:e.minY,this.maxX=this.maxX<e.maxX?this.maxX:e.maxX,this.maxY=this.maxY<e.maxY?this.maxY:e.maxY}applyMatrix(e){const t=this.minX,r=this.minY,i=this.maxX,s=this.maxY,{a:o,b:a,c:l,d:c,tx:u,ty:h}=e;let f=o*t+l*r+u,p=a*t+c*r+h;this.minX=f,this.minY=p,this.maxX=f,this.maxY=p,f=o*i+l*r+u,p=a*i+c*r+h,this.minX=f<this.minX?f:this.minX,this.minY=p<this.minY?p:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=p>this.maxY?p:this.maxY,f=o*t+l*s+u,p=a*t+c*s+h,this.minX=f<this.minX?f:this.minX,this.minY=p<this.minY?p:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=p>this.maxY?p:this.maxY,f=o*i+l*s+u,p=a*i+c*s+h,this.minX=f<this.minX?f:this.minX,this.minY=p<this.minY?p:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=p>this.maxY?p:this.maxY}fit(e){return this.minX<e.left&&(this.minX=e.left),this.maxX>e.right&&(this.maxX=e.right),this.minY<e.top&&(this.minY=e.top),this.maxY>e.bottom&&(this.maxY=e.bottom),this}fitBounds(e,t,r,i){return this.minX<e&&(this.minX=e),this.maxX>t&&(this.maxX=t),this.minY<r&&(this.minY=r),this.maxY>i&&(this.maxY=i),this}pad(e,t=e){return this.minX-=e,this.maxX+=e,this.minY-=t,this.maxY+=t,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new Oe(this.minX,this.minY,this.maxX,this.maxY)}scale(e,t=e){return this.minX*=e,this.minY*=t,this.maxX*=e,this.maxY*=t,this}get x(){return this.minX}set x(e){const t=this.maxX-this.minX;this.minX=e,this.maxX=e+t}get y(){return this.minY}set y(e){const t=this.maxY-this.minY;this.minY=e,this.maxY=e+t}get width(){return this.maxX-this.minX}set width(e){this.maxX=this.minX+e}get height(){return this.maxY-this.minY}set height(e){this.maxY=this.minY+e}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(e,t,r,i){let s=this.minX,o=this.minY,a=this.maxX,l=this.maxY;i||(i=this.matrix);const c=i.a,u=i.b,h=i.c,f=i.d,p=i.tx,m=i.ty;for(let g=t;g<r;g+=2){const d=e[g],v=e[g+1],x=c*d+h*v+p,y=u*d+f*v+m;s=x<s?x:s,o=y<o?y:o,a=x>a?x:a,l=y>l?y:l}this.minX=s,this.minY=o,this.maxX=a,this.maxY=l}containsPoint(e,t){return this.minX<=e&&this.minY<=t&&this.maxX>=e&&this.maxY>=t}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}}const Ue=new xi(j),_t=new xi(Oe);function bo(n,e,t){t.clear();let r,i;return n.parent?e?r=n.parent.worldTransform:(i=Ue.get().identity(),r=In(n,i)):r=j.IDENTITY,So(n,t,r,e),i&&Ue.return(i),t.isValid||t.set(0,0,0,0),t}function So(n,e,t,r){var a,l;if(!n.visible||!n.measurable)return;let i;r?i=n.worldTransform:(n.updateLocalTransform(),i=Ue.get(),i.appendFrom(n.localTransform,t));const s=e,o=!!n.effects.length;if(o&&(e=_t.get().clear()),n.boundsArea)e.addRect(n.boundsArea,i);else{n.addBounds&&(e.matrix=i,n.addBounds(e));for(let c=0;c<n.children.length;c++)So(n.children[c],e,i,r)}if(o){for(let c=0;c<n.effects.length;c++)(l=(a=n.effects[c]).addBounds)==null||l.call(a,e);s.addBounds(e,j.IDENTITY),_t.return(e)}r||Ue.return(i)}function In(n,e){const t=n.parent;return t&&(In(t,e),t.updateLocalTransform(),e.append(t.localTransform)),e}let nr=0;const fs=500;function ie(...n){nr!==fs&&(nr++,nr===fs?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...n))}function Co(n,e,t){return e.clear(),t||(t=j.IDENTITY),wo(n,e,t,n,!0),e.isValid||e.set(0,0,0,0),e}function wo(n,e,t,r,i){var l,c;let s;if(i)s=Ue.get(),s=t.copyTo(s);else{if(!n.visible||!n.measurable)return;n.updateLocalTransform();const u=n.localTransform;s=Ue.get(),s.appendFrom(u,t)}const o=e,a=!!n.effects.length;if(a&&(e=_t.get().clear()),n.boundsArea)e.addRect(n.boundsArea,s);else{n.renderPipeId&&(e.matrix=s,n.addBounds(e));const u=n.children;for(let h=0;h<u.length;h++)wo(u[h],e,s,r,!1)}if(a){for(let u=0;u<n.effects.length;u++)(c=(l=n.effects[u]).addLocalBounds)==null||c.call(l,e,r);o.addBounds(e,j.IDENTITY),_t.return(e)}Ue.return(s)}function Ao(n,e){const t=n.children;for(let r=0;r<t.length;r++){const i=t[r],s=(i.uid&255)<<24|i._didChangeId&16777215;e.data[e.index]!==s&&(e.data[e.index]=s,e.didChange=!0),e.index++,i.children.length&&Ao(i,e)}return e.didChange}const ku=new j,Eu={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(n,e){const t=Math.sign(this.scale.x)||1;e!==0?this.scale.x=n/e*t:this.scale.x=t},_setHeight(n,e){const t=Math.sign(this.scale.y)||1;e!==0?this.scale.y=n/e*t:this.scale.y=t},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new Oe});const n=this._localBoundsCacheData;return n.index=1,n.didChange=!1,n.data[0]!==this._didChangeId>>12&&(n.didChange=!0,n.data[0]=this._didChangeId>>12),Ao(this,n),n.didChange&&Co(this,n.localBounds,ku),n.localBounds},getBounds(n,e){return bo(this,n,e||new Oe)}},Ru={_onRender:null,set onRender(n){const e=this.renderGroup||this.parentRenderGroup;if(!n){this._onRender&&(e==null||e.removeOnRender(this)),this._onRender=null;return}this._onRender||e==null||e.addOnRender(this),this._onRender=n},get onRender(){return this._onRender}},Uu={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(n){this._zIndex!==n&&(this._zIndex=n,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(Bu))}};function Bu(n,e){return n._zIndex-e._zIndex}const Du={getGlobalPosition(n=new le,e=!1){return this.parent?this.parent.toGlobal(this._position,n,e):(n.x=this._position.x,n.y=this._position.y),n},toGlobal(n,e,t=!1){if(!t){this.updateLocalTransform();const r=In(this,new j);return r.append(this.localTransform),r.apply(n,e)}return this.worldTransform.apply(n,e)},toLocal(n,e,t,r){if(e&&(n=e.toGlobal(n,t,r)),!r){this.updateLocalTransform();const i=In(this,new j);return i.append(this.localTransform),i.applyInverse(n,t)}return this.worldTransform.applyInverse(n,t)}};class To{constructor(){this.uid=re("instructionSet"),this.instructions=[],this.instructionSize=0}reset(){this.instructionSize=0}add(e){this.instructions[this.instructionSize++]=e}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}class Lu{constructor(){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new j,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new To,this._onRenderContainers=[]}init(e){this.root=e,e._onRender&&this.addOnRender(e),e.didChange=!0;const t=e.children;for(let r=0;r<t.length;r++)this.addChild(t[r])}reset(){this.renderGroupChildren.length=0;for(const e in this.childrenToUpdate){const t=this.childrenToUpdate[e];t.list.fill(null),t.index=0}this.childrenRenderablesToUpdate.index=0,this.childrenRenderablesToUpdate.list.fill(null),this.root=null,this.updateTick=0,this.structureDidChange=!0,this._onRenderContainers.length=0,this.renderGroupParent=null}get localTransform(){return this.root.localTransform}addRenderGroupChild(e){e.renderGroupParent&&e.renderGroupParent._removeRenderGroupChild(e),e.renderGroupParent=this,this.renderGroupChildren.push(e)}_removeRenderGroupChild(e){const t=this.renderGroupChildren.indexOf(e);t>-1&&this.renderGroupChildren.splice(t,1),e.renderGroupParent=null}addChild(e){if(this.structureDidChange=!0,e.parentRenderGroup=this,e.updateTick=-1,e.parent===this.root?e.relativeRenderGroupDepth=1:e.relativeRenderGroupDepth=e.parent.relativeRenderGroupDepth+1,e.didChange=!0,this.onChildUpdate(e),e.renderGroup){this.addRenderGroupChild(e.renderGroup);return}e._onRender&&this.addOnRender(e);const t=e.children;for(let r=0;r<t.length;r++)this.addChild(t[r])}removeChild(e){if(this.structureDidChange=!0,e._onRender&&(e.renderGroup||this.removeOnRender(e)),e.parentRenderGroup=null,e.renderGroup){this._removeRenderGroupChild(e.renderGroup);return}const t=e.children;for(let r=0;r<t.length;r++)this.removeChild(t[r])}removeChildren(e){for(let t=0;t<e.length;t++)this.removeChild(e[t])}onChildUpdate(e){let t=this.childrenToUpdate[e.relativeRenderGroupDepth];t||(t=this.childrenToUpdate[e.relativeRenderGroupDepth]={index:0,list:[]}),t.list[t.index++]=e}updateRenderable(e){e.globalDisplayStatus<7||(e.didViewUpdate=!1,this.instructionSet.renderPipes[e.renderPipeId].updateRenderable(e))}onChildViewUpdate(e){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=e}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(e){this._onRenderContainers.push(e)}removeOnRender(e){this._onRenderContainers.splice(this._onRenderContainers.indexOf(e),1)}runOnRender(){for(let e=0;e<this._onRenderContainers.length;e++)this._onRenderContainers[e]._onRender()}destroy(){this.renderGroupParent=null,this.root=null,this.childrenRenderablesToUpdate=null,this.childrenToUpdate=null,this.renderGroupChildren=null,this._onRenderContainers=null,this.instructionSet=null}getChildren(e=[]){const t=this.root.children;for(let r=0;r<t.length;r++)this._getChildren(t[r],e);return e}_getChildren(e,t=[]){if(t.push(e),e.renderGroup)return t;const r=e.children;for(let i=0;i<r.length;i++)this._getChildren(r[i],t);return t}}function Nu(n,e,t={}){for(const r in e)!t[r]&&e[r]!==void 0&&(n[r]=e[r])}const rr=new ue(null),ir=new ue(null),sr=new ue(null,1,1),ds=1,Gu=2,or=4;class te extends we{constructor(e={}){var t,r;super(),this.uid=re("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new j,this.relativeGroupTransform=new j,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new ue(this,0,0),this._scale=sr,this._pivot=ir,this._skew=rr,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didChangeId=0,this._didLocalTransformChangeId=-1,Nu(this,e,{children:!0,parent:!0,effects:!0}),(t=e.children)==null||t.forEach(i=>this.addChild(i)),this.effects=[],(r=e.parent)==null||r.addChild(this)}static mixin(e){Object.defineProperties(te.prototype,Object.getOwnPropertyDescriptors(e))}addChild(...e){if(this.allowChildren||O(X,"addChild: Only Containers will be allowed to add children in v8.0.0"),e.length>1){for(let i=0;i<e.length;i++)this.addChild(e[i]);return e[0]}const t=e[0];if(t.parent===this)return this.children.splice(this.children.indexOf(t),1),this.children.push(t),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),t;t.parent&&t.parent.removeChild(t),this.children.push(t),this.sortableChildren&&(this.sortDirty=!0),t.parent=this,t.didChange=!0,t.didViewUpdate=!1,t._updateFlags=15;const r=this.renderGroup||this.parentRenderGroup;return r&&r.addChild(t),this.emit("childAdded",t,this,this.children.length-1),t.emit("added",this),this._didChangeId+=4096,t._zIndex!==0&&t.depthOfChildModified(),t}removeChild(...e){if(e.length>1){for(let i=0;i<e.length;i++)this.removeChild(e[i]);return e[0]}const t=e[0],r=this.children.indexOf(t);return r>-1&&(this._didChangeId+=4096,this.children.splice(r,1),this.renderGroup?this.renderGroup.removeChild(t):this.parentRenderGroup&&this.parentRenderGroup.removeChild(t),t.parent=null,this.emit("childRemoved",t,this,r),t.emit("removed",this)),t}_onUpdate(e){e&&e===this._skew&&this._updateSkew(),this._didChangeId++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(e){!!this.renderGroup!==e&&(e?this.enableRenderGroup():this.disableRenderGroup())}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const e=this.parentRenderGroup;e==null||e.removeChild(this),this.renderGroup=be.get(Lu,this),this.groupTransform=j.IDENTITY,e==null||e.addChild(this),this._updateIsSimple()}disableRenderGroup(){if(!this.renderGroup)return;const e=this.parentRenderGroup;e==null||e.removeChild(this),be.return(this.renderGroup),this.renderGroup=null,this.groupTransform=this.relativeGroupTransform,e==null||e.addChild(this),this._updateIsSimple()}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new j),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(e){this._position.x=e}get y(){return this._position.y}set y(e){this._position.y=e}get position(){return this._position}set position(e){this._position.copyFrom(e)}get rotation(){return this._rotation}set rotation(e){this._rotation!==e&&(this._rotation=e,this._onUpdate(this._skew))}get angle(){return this.rotation*lu}set angle(e){this.rotation=e*xt}get pivot(){return this._pivot===ir&&(this._pivot=new ue(this,0,0)),this._pivot}set pivot(e){this._pivot===ir&&(this._pivot=new ue(this,0,0)),typeof e=="number"?this._pivot.set(e):this._pivot.copyFrom(e)}get skew(){return this._skew===rr&&(this._skew=new ue(this,0,0)),this._skew}set skew(e){this._skew===rr&&(this._skew=new ue(this,0,0)),this._skew.copyFrom(e)}get scale(){return this._scale===sr&&(this._scale=new ue(this,1,1)),this._scale}set scale(e){this._scale===sr&&(this._scale=new ue(this,0,0)),typeof e=="number"?this._scale.set(e):this._scale.copyFrom(e)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(e){const t=this.getLocalBounds().width;this._setWidth(e,t)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(e){const t=this.getLocalBounds().height;this._setHeight(e,t)}getSize(e){e||(e={});const t=this.getLocalBounds();return e.width=Math.abs(this.scale.x*t.width),e.height=Math.abs(this.scale.y*t.height),e}setSize(e,t){const r=this.getLocalBounds();let i,s;typeof e!="object"?(i=e,s=t??e):(i=e.width,s=e.height??e.width),i!==void 0&&this._setWidth(i,r.width),s!==void 0&&this._setHeight(s,r.height)}_updateSkew(){const e=this._rotation,t=this._skew;this._cx=Math.cos(e+t._y),this._sx=Math.sin(e+t._y),this._cy=-Math.sin(e-t._x),this._sy=Math.cos(e-t._x)}updateTransform(e){return this.position.set(typeof e.x=="number"?e.x:this.position.x,typeof e.y=="number"?e.y:this.position.y),this.scale.set(typeof e.scaleX=="number"?e.scaleX||1:this.scale.x,typeof e.scaleY=="number"?e.scaleY||1:this.scale.y),this.rotation=typeof e.rotation=="number"?e.rotation:this.rotation,this.skew.set(typeof e.skewX=="number"?e.skewX:this.skew.x,typeof e.skewY=="number"?e.skewY:this.skew.y),this.pivot.set(typeof e.pivotX=="number"?e.pivotX:this.pivot.x,typeof e.pivotY=="number"?e.pivotY:this.pivot.y),this}setFromMatrix(e){e.decompose(this)}updateLocalTransform(){if((this._didLocalTransformChangeId&15)===this._didChangeId)return;this._didLocalTransformChangeId=this._didChangeId;const e=this.localTransform,t=this._scale,r=this._pivot,i=this._position,s=t._x,o=t._y,a=r._x,l=r._y;e.a=this._cx*s,e.b=this._sx*s,e.c=this._cy*o,e.d=this._sy*o,e.tx=i._x-(a*e.a+l*e.c),e.ty=i._y-(a*e.b+l*e.d)}set alpha(e){e!==this.localAlpha&&(this.localAlpha=e,this._updateFlags|=ds,this._onUpdate())}get alpha(){return this.localAlpha}set tint(e){const r=$.shared.setValue(e??16777215).toBgrNumber();r!==this.localColor&&(this.localColor=r,this._updateFlags|=ds,this._onUpdate())}get tint(){const e=this.localColor;return((e&255)<<16)+(e&65280)+(e>>16&255)}set blendMode(e){this.localBlendMode!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Gu,this.localBlendMode=e,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(e){const t=e?1:0;(this.localDisplayStatus&2)>>1!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=or,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(e){const t=e?1:0;(this.localDisplayStatus&4)>>2!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=or,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(e){const t=e?1:0;(this.localDisplayStatus&1)!==t&&(this._updateFlags|=or,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(e=!1){var i;if(this.destroyed)return;this.destroyed=!0;const t=this.removeChildren(0,this.children.length);if(this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),typeof e=="boolean"?e:e==null?void 0:e.children)for(let s=0;s<t.length;++s)t[s].destroy(e);(i=this.renderGroup)==null||i.destroy(),this.renderGroup=null}}te.mixin(Fu);te.mixin(Du);te.mixin(Ru);te.mixin(Eu);te.mixin(zu);te.mixin(Ou);te.mixin(Uu);te.mixin(Tu);class bt extends te{constructor(e=U.EMPTY){e instanceof U&&(e={texture:e});const{texture:t=U.EMPTY,anchor:r,roundPixels:i,width:s,height:o,...a}=e;super({label:"Sprite",...a}),this.renderPipeId="sprite",this.batched=!0,this._didSpriteUpdate=!1,this._bounds={minX:0,maxX:1,minY:0,maxY:0},this._sourceBounds={minX:0,maxX:1,minY:0,maxY:0},this._boundsDirty=!0,this._sourceBoundsDirty=!0,this._roundPixels=0,this._anchor=new ue({_onUpdate:()=>{this.onViewUpdate()}}),r?this.anchor=r:t.defaultAnchor&&(this.anchor=t.defaultAnchor),this.texture=t,this.allowChildren=!1,this.roundPixels=i??!1,s&&(this.width=s),o&&(this.height=o)}static from(e,t=!1){return e instanceof U?new bt(e):new bt(U.from(e,t))}set texture(e){e||(e=U.EMPTY);const t=this._texture;t!==e&&(t&&t.dynamic&&t.off("update",this.onViewUpdate,this),e.dynamic&&e.on("update",this.onViewUpdate,this),this._texture=e,this._width&&this._setWidth(this._width,this._texture.orig.width),this._height&&this._setHeight(this._height,this._texture.orig.height),this.onViewUpdate())}get texture(){return this._texture}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get sourceBounds(){return this._sourceBoundsDirty&&(this._updateSourceBounds(),this._sourceBoundsDirty=!1),this._sourceBounds}containsPoint(e){const t=this.sourceBounds;return e.x>=t.maxX&&e.x<=t.minX&&e.y>=t.maxY&&e.y<=t.minY}addBounds(e){const t=this._texture.trim?this.sourceBounds:this.bounds;e.addFrame(t.minX,t.minY,t.maxX,t.maxY)}onViewUpdate(){if(this._didChangeId+=4096,this._didSpriteUpdate=!0,this._sourceBoundsDirty=this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const e=this.renderGroup||this.parentRenderGroup;e&&e.onChildViewUpdate(this)}_updateBounds(){gu(this._bounds,this._anchor,this._texture,0)}_updateSourceBounds(){const e=this._anchor,t=this._texture,r=this._sourceBounds,{width:i,height:s}=t.orig;r.maxX=-e._x*i,r.minX=r.maxX+i,r.maxY=-e._y*s,r.minY=r.maxY+s}destroy(e=!1){if(super.destroy(e),typeof e=="boolean"?e:e==null?void 0:e.texture){const r=typeof e=="boolean"?e:e==null?void 0:e.textureSource;this._texture.destroy(r)}this._texture=null,this._bounds=null,this._sourceBounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}get roundPixels(){return!!this._roundPixels}set roundPixels(e){this._roundPixels=e?1:0}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(e){this._setWidth(e,this._texture.orig.width),this._width=e}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(e){this._setHeight(e,this._texture.orig.height),this._height=e}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this._texture.orig.width,e.height=Math.abs(this.scale.y)*this._texture.orig.height,e}setSize(e,t){let r,i;typeof e!="object"?(r=e,i=t??e):(r=e.width,i=e.height??e.width),r!==void 0&&this._setWidth(r,this._texture.orig.width),i!==void 0&&this._setHeight(i,this._texture.orig.height)}}const Wu=new Oe;function Po(n,e,t){const r=Wu;n.measurable=!0,bo(n,t,r),e.addBoundsMask(r),n.measurable=!1}function Mo(n,e,t){const r=_t.get();n.measurable=!0;const i=Ue.get().identity(),s=Fo(n,t,i);Co(n,r,s),n.measurable=!1,e.addBoundsMask(r),Ue.return(i),_t.return(r)}function Fo(n,e,t){return n?(n!==e&&(Fo(n.parent,e,t),n.updateLocalTransform(),t.append(n.localTransform)),t):(ie("Mask bounds, renderable is not inside the root container"),t)}class Io{constructor(e){this.priority=0,this.pipe="alphaMask",e!=null&&e.mask&&this.init(e.mask)}init(e){this.mask=e,this.renderMaskToTexture=!(e instanceof bt),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(e,t){Po(this.mask,e,t)}addLocalBounds(e,t){Mo(this.mask,e,t)}containsPoint(e,t){const r=this.mask;return t(r,e)}destroy(){this.reset()}static test(e){return e instanceof bt}}Io.extension=E.MaskEffect;class zo{constructor(e){this.priority=0,this.pipe="colorMask",e!=null&&e.mask&&this.init(e.mask)}init(e){this.mask=e}destroy(){}static test(e){return typeof e=="number"}}zo.extension=E.MaskEffect;class Oo{constructor(e){this.priority=0,this.pipe="stencilMask",e!=null&&e.mask&&this.init(e.mask)}init(e){this.mask=e,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(e,t){Po(this.mask,e,t)}addLocalBounds(e,t){Mo(this.mask,e,t)}containsPoint(e,t){const r=this.mask;return t(r,e)}destroy(){this.reset()}static test(e){return e instanceof te}}Oo.extension=E.MaskEffect;const $u={createCanvas:(n,e)=>{const t=document.createElement("canvas");return t.width=n,t.height=e,t},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(n,e)=>fetch(n,e),parseXML:n=>new DOMParser().parseFromString(n,"text/xml")};let ps=$u;const J={get(){return ps},set(n){ps=n}};class ko extends Ae{constructor(e){e.resource||(e.resource=J.get().createCanvas()),e.width||(e.width=e.resource.width,e.autoDensity||(e.width/=e.resolution)),e.height||(e.height=e.resource.height,e.autoDensity||(e.height/=e.resolution)),super(e),this.uploadMethodId="image",this.autoDensity=e.autoDensity;const t=e.resource;(this.pixelWidth!==t.width||this.pixelWidth!==t.height)&&this.resizeCanvas(),this.transparent=!!e.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(e=this.width,t=this.height,r=this._resolution){const i=super.resize(e,t,r);return i&&this.resizeCanvas(),i}static test(e){return globalThis.HTMLCanvasElement&&e instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&e instanceof OffscreenCanvas}}ko.extension=E.TextureSource;class st extends Ae{constructor(e){if(e.resource&&globalThis.HTMLImageElement&&e.resource instanceof HTMLImageElement){const t=J.get().createCanvas(e.resource.width,e.resource.height);t.getContext("2d").drawImage(e.resource,0,0),e.resource=t,ie("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(e),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(e){return globalThis.HTMLImageElement&&e instanceof HTMLImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap}}st.extension=E.TextureSource;var Gr=(n=>(n[n.INTERACTION=50]="INTERACTION",n[n.HIGH=25]="HIGH",n[n.NORMAL=0]="NORMAL",n[n.LOW=-25]="LOW",n[n.UTILITY=-50]="UTILITY",n))(Gr||{});class ar{constructor(e,t=null,r=0,i=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=e,this._context=t,this.priority=r,this._once=i}match(e,t=null){return this._fn===e&&this._context===t}emit(e){this._fn&&(this._context?this._fn.call(this._context,e):this._fn(e));const t=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),t}connect(e){this.previous=e,e.next&&(e.next.previous=this),this.next=e.next,e.next=this}destroy(e=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const t=this.next;return this.next=e?null:t,this.previous=null,t}}const Eo=class de{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new ar(null,null,1/0),this.deltaMS=1/de.targetFPMS,this.elapsedMS=1/de.targetFPMS,this._tick=e=>{this._requestId=null,this.started&&(this.update(e),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(e,t,r=Gr.NORMAL){return this._addListener(new ar(e,t,r))}addOnce(e,t,r=Gr.NORMAL){return this._addListener(new ar(e,t,r,!0))}_addListener(e){let t=this._head.next,r=this._head;if(!t)e.connect(r);else{for(;t;){if(e.priority>t.priority){e.connect(r);break}r=t,t=t.next}e.previous||e.connect(r)}return this._startIfPossible(),this}remove(e,t){let r=this._head.next;for(;r;)r.match(e,t)?r=r.destroy():r=r.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let e=0,t=this._head;for(;t=t.next;)e++;return e}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let e=this._head.next;for(;e;)e=e.destroy(!0);this._head.destroy(),this._head=null}}update(e=performance.now()){let t;if(e>this.lastTime){if(t=this.elapsedMS=e-this.lastTime,t>this._maxElapsedMS&&(t=this._maxElapsedMS),t*=this.speed,this._minElapsedMS){const s=e-this._lastFrame|0;if(s<this._minElapsedMS)return;this._lastFrame=e-s%this._minElapsedMS}this.deltaMS=t,this.deltaTime=this.deltaMS*de.targetFPMS;const r=this._head;let i=r.next;for(;i;)i=i.emit(this);r.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=e}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(e){const t=Math.min(this.maxFPS,e),r=Math.min(Math.max(0,t)/1e3,de.targetFPMS);this._maxElapsedMS=1/r}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(e){if(e===0)this._minElapsedMS=0;else{const t=Math.max(this.minFPS,e);this._minElapsedMS=1/(t/1e3)}}static get shared(){if(!de._shared){const e=de._shared=new de;e.autoStart=!0,e._protected=!0}return de._shared}static get system(){if(!de._system){const e=de._system=new de;e.autoStart=!0,e._protected=!0}return de._system}};Eo.targetFPMS=.06;let Bt=Eo,lr;async function Ro(){return lr??(lr=(async()=>{var o;const e=document.createElement("canvas").getContext("webgl");if(!e)return"premultiply-alpha-on-upload";const t=await new Promise(a=>{const l=document.createElement("video");l.onloadeddata=()=>a(l),l.onerror=()=>a(null),l.autoplay=!1,l.crossOrigin="anonymous",l.preload="auto",l.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",l.load()});if(!t)return"premultiply-alpha-on-upload";const r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r);const i=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t);const s=new Uint8Array(4);return e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,s),e.deleteFramebuffer(i),e.deleteTexture(r),(o=e.getExtension("WEBGL_lose_context"))==null||o.loseContext(),s[0]<=s[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),lr}const Nn=class Uo extends Ae{constructor(e){super(e),this.isReady=!1,this.uploadMethodId="video",e={...Uo.defaultOptions,...e},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=e.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=e.autoPlay!==!1,this.alphaMode=e.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),e.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const e=Bt.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-e)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const e=this.resource,t=this.options;return(e.readyState===e.HAVE_ENOUGH_DATA||e.readyState===e.HAVE_FUTURE_DATA)&&e.width&&e.height&&(e.complete=!0),e.addEventListener("play",this._onPlayStart),e.addEventListener("pause",this._onPlayStop),e.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(t.preload||e.addEventListener("canplay",this._onCanPlay),e.addEventListener("canplaythrough",this._onCanPlayThrough),e.addEventListener("error",this._onError,!0)),this.alphaMode=await Ro(),this._load=new Promise((r,i)=>{this.isValid?r(this):(this._resolve=r,this._reject=i,t.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${t.preloadTimeoutMs}ms`))})),e.load())}),this._load}_onError(e){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",e),this._reject&&(this._reject(e),this._reject=null,this._resolve=null)}_isSourcePlaying(){const e=this.resource;return!e.paused&&!e.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const e=this.resource;this.isValid&&(this.isReady=!0,this.resize(e.videoWidth,e.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const e=this.resource;e&&(e.removeEventListener("play",this._onPlayStart),e.removeEventListener("pause",this._onPlayStop),e.removeEventListener("seeked",this._onSeeked),e.removeEventListener("canplay",this._onCanPlay),e.removeEventListener("canplaythrough",this._onCanPlayThrough),e.removeEventListener("error",this._onError,!0),e.pause(),e.src="",e.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(e){e!==this._autoUpdate&&(this._autoUpdate=e,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(e){e!==this._updateFPS&&(this._updateFPS=e,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(Bt.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(Bt.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(Bt.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(e){return globalThis.HTMLVideoElement&&e instanceof HTMLVideoElement||globalThis.VideoFrame&&e instanceof VideoFrame}};Nn.extension=E.TextureSource;Nn.defaultOptions={...Ae.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};Nn.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let yn=Nn;const Se=(n,e,t=!1)=>(Array.isArray(n)||(n=[n]),e?n.map(r=>typeof r=="string"||t?e(r):r):n);class Vu{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(e){return this._cache.has(e)}get(e){const t=this._cache.get(e);return t||ie(`[Assets] Asset id ${e} was not found in the Cache`),t}set(e,t){const r=Se(e);let i;for(let l=0;l<this.parsers.length;l++){const c=this.parsers[l];if(c.test(t)){i=c.getCacheableAssets(r,t);break}}const s=new Map(Object.entries(i||{}));i||r.forEach(l=>{s.set(l,t)});const o=[...s.keys()],a={cacheKeys:o,keys:r};r.forEach(l=>{this._cacheMap.set(l,a)}),o.forEach(l=>{const c=i?i[l]:t;this._cache.has(l)&&this._cache.get(l)!==c&&ie("[Cache] already has key:",l),this._cache.set(l,s.get(l))})}remove(e){if(!this._cacheMap.has(e)){ie(`[Assets] Asset id ${e} was not found in the Cache`);return}const t=this._cacheMap.get(e);t.cacheKeys.forEach(i=>{this._cache.delete(i)}),t.keys.forEach(i=>{this._cacheMap.delete(i)})}get parsers(){return this._parsers}}const Z=new Vu,Wr=[];ce.handleByList(E.TextureSource,Wr);function Bo(n={}){const e=n&&n.resource,t=e?n.resource:n,r=e?n:{resource:n};for(let i=0;i<Wr.length;i++){const s=Wr[i];if(s.test(t))return new s(r)}throw new Error(`Could not find a source type for resource: ${r.resource}`)}function Hu(n={},e=!1){const t=n&&n.resource,r=t?n.resource:n,i=t?n:{resource:n};if(!e&&Z.has(r))return Z.get(r);const s=new U({source:Bo(i)});return s.on("destroy",()=>{Z.has(r)&&Z.remove(r)}),e||Z.set(r,s),s}function ju(n,e=!1){return typeof n=="string"?Z.get(n):n instanceof Ae?new U({source:n}):Hu(n,e)}U.from=ju;Ae.from=Bo;ce.add(Io,zo,Oo,yn,st,ko,vi);var Ne=(n=>(n[n.Low=0]="Low",n[n.Normal=1]="Normal",n[n.High=2]="High",n))(Ne||{});function _e(n){if(typeof n!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(n)}`)}function Ot(n){return n.split("?")[0].split("#")[0]}function Xu(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Yu(n,e,t){return n.replace(new RegExp(Xu(e),"g"),t)}function qu(n,e){let t="",r=0,i=-1,s=0,o=-1;for(let a=0;a<=n.length;++a){if(a<n.length)o=n.charCodeAt(a);else{if(o===47)break;o=47}if(o===47){if(!(i===a-1||s===1))if(i!==a-1&&s===2){if(t.length<2||r!==2||t.charCodeAt(t.length-1)!==46||t.charCodeAt(t.length-2)!==46){if(t.length>2){const l=t.lastIndexOf("/");if(l!==t.length-1){l===-1?(t="",r=0):(t=t.slice(0,l),r=t.length-1-t.lastIndexOf("/")),i=a,s=0;continue}}else if(t.length===2||t.length===1){t="",r=0,i=a,s=0;continue}}}else t.length>0?t+=`/${n.slice(i+1,a)}`:t=n.slice(i+1,a),r=a-i-1;i=a,s=0}else o===46&&s!==-1?++s:s=-1}return t}const pe={toPosix(n){return Yu(n,"\\","/")},isUrl(n){return/^https?:/.test(this.toPosix(n))},isDataUrl(n){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(n)},isBlobUrl(n){return n.startsWith("blob:")},hasProtocol(n){return/^[^/:]+:/.test(this.toPosix(n))},getProtocol(n){_e(n),n=this.toPosix(n);const e=/^file:\/\/\//.exec(n);if(e)return e[0];const t=/^[^/:]+:\/{0,2}/.exec(n);return t?t[0]:""},toAbsolute(n,e,t){if(_e(n),this.isDataUrl(n)||this.isBlobUrl(n))return n;const r=Ot(this.toPosix(e??J.get().getBaseUrl())),i=Ot(this.toPosix(t??this.rootname(r)));return n=this.toPosix(n),n.startsWith("/")?pe.join(i,n.slice(1)):this.isAbsolute(n)?n:this.join(r,n)},normalize(n){if(_e(n),n.length===0)return".";if(this.isDataUrl(n)||this.isBlobUrl(n))return n;n=this.toPosix(n);let e="";const t=n.startsWith("/");this.hasProtocol(n)&&(e=this.rootname(n),n=n.slice(e.length));const r=n.endsWith("/");return n=qu(n),n.length>0&&r&&(n+="/"),t?`/${n}`:e+n},isAbsolute(n){return _e(n),n=this.toPosix(n),this.hasProtocol(n)?!0:n.startsWith("/")},join(...n){if(n.length===0)return".";let e;for(let t=0;t<n.length;++t){const r=n[t];if(_e(r),r.length>0)if(e===void 0)e=r;else{const i=n[t-1]??"";this.joinExtensions.includes(this.extname(i).toLowerCase())?e+=`/../${r}`:e+=`/${r}`}}return e===void 0?".":this.normalize(e)},dirname(n){if(_e(n),n.length===0)return".";n=this.toPosix(n);let e=n.charCodeAt(0);const t=e===47;let r=-1,i=!0;const s=this.getProtocol(n),o=n;n=n.slice(s.length);for(let a=n.length-1;a>=1;--a)if(e=n.charCodeAt(a),e===47){if(!i){r=a;break}}else i=!1;return r===-1?t?"/":this.isUrl(o)?s+n:s:t&&r===1?"//":s+n.slice(0,r)},rootname(n){_e(n),n=this.toPosix(n);let e="";if(n.startsWith("/")?e="/":e=this.getProtocol(n),this.isUrl(n)){const t=n.indexOf("/",e.length);t!==-1?e=n.slice(0,t):e=n,e.endsWith("/")||(e+="/")}return e},basename(n,e){_e(n),e&&_e(e),n=Ot(this.toPosix(n));let t=0,r=-1,i=!0,s;if(e!==void 0&&e.length>0&&e.length<=n.length){if(e.length===n.length&&e===n)return"";let o=e.length-1,a=-1;for(s=n.length-1;s>=0;--s){const l=n.charCodeAt(s);if(l===47){if(!i){t=s+1;break}}else a===-1&&(i=!1,a=s+1),o>=0&&(l===e.charCodeAt(o)?--o===-1&&(r=s):(o=-1,r=a))}return t===r?r=a:r===-1&&(r=n.length),n.slice(t,r)}for(s=n.length-1;s>=0;--s)if(n.charCodeAt(s)===47){if(!i){t=s+1;break}}else r===-1&&(i=!1,r=s+1);return r===-1?"":n.slice(t,r)},extname(n){_e(n),n=Ot(this.toPosix(n));let e=-1,t=0,r=-1,i=!0,s=0;for(let o=n.length-1;o>=0;--o){const a=n.charCodeAt(o);if(a===47){if(!i){t=o+1;break}continue}r===-1&&(i=!1,r=o+1),a===46?e===-1?e=o:s!==1&&(s=1):e!==-1&&(s=-1)}return e===-1||r===-1||s===0||s===1&&e===r-1&&e===t+1?"":n.slice(e,r)},parse(n){_e(n);const e={root:"",dir:"",base:"",ext:"",name:""};if(n.length===0)return e;n=Ot(this.toPosix(n));let t=n.charCodeAt(0);const r=this.isAbsolute(n);let i;e.root=this.rootname(n),r||this.hasProtocol(n)?i=1:i=0;let s=-1,o=0,a=-1,l=!0,c=n.length-1,u=0;for(;c>=i;--c){if(t=n.charCodeAt(c),t===47){if(!l){o=c+1;break}continue}a===-1&&(l=!1,a=c+1),t===46?s===-1?s=c:u!==1&&(u=1):s!==-1&&(u=-1)}return s===-1||a===-1||u===0||u===1&&s===a-1&&s===o+1?a!==-1&&(o===0&&r?e.base=e.name=n.slice(1,a):e.base=e.name=n.slice(o,a)):(o===0&&r?(e.name=n.slice(1,s),e.base=n.slice(1,a)):(e.name=n.slice(o,s),e.base=n.slice(o,a)),e.ext=n.slice(s,a)),e.dir=this.dirname(n),e},sep:"/",delimiter:":",joinExtensions:[".html"]};function Do(n,e,t,r,i){const s=e[t];for(let o=0;o<s.length;o++){const a=s[o];t<e.length-1?Do(n.replace(r[t],a),e,t+1,r,i):i.push(n.replace(r[t],a))}}function Ku(n){const e=/\{(.*?)\}/g,t=n.match(e),r=[];if(t){const i=[];t.forEach(s=>{const o=s.substring(1,s.length-1).split(",");i.push(o)}),Do(n,i,0,t,r)}else r.push(n);return r}const zn=n=>!Array.isArray(n);class Mt{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(e,t)=>`${e}${this._bundleIdConnector}${t}`,extractAssetIdFromBundle:(e,t)=>t.replace(`${e}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(e){if(this._bundleIdConnector=e.connector??this._bundleIdConnector,this._createBundleAssetId=e.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=e.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...e){e.forEach(t=>{this._preferredOrder.push(t),t.priority||(t.priority=Object.keys(t.params))}),this._resolverHash={}}set basePath(e){this._basePath=e}get basePath(){return this._basePath}set rootPath(e){this._rootPath=e}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(e){if(typeof e=="string")this._defaultSearchParams=e;else{const t=e;this._defaultSearchParams=Object.keys(t).map(r=>`${encodeURIComponent(r)}=${encodeURIComponent(t[r])}`).join("&")}}getAlias(e){const{alias:t,src:r}=e;return Se(t||r,s=>typeof s=="string"?s:Array.isArray(s)?s.map(o=>(o==null?void 0:o.src)??o):s!=null&&s.src?s.src:s,!0)}addManifest(e){this._manifest&&ie("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=e,e.bundles.forEach(t=>{this.addBundle(t.name,t.assets)})}addBundle(e,t){const r=[];let i=t;Array.isArray(t)||(i=Object.entries(t).map(([s,o])=>typeof o=="string"||Array.isArray(o)?{alias:s,src:o}:{alias:s,...o})),i.forEach(s=>{const o=s.src,a=s.alias;let l;if(typeof a=="string"){const c=this._createBundleAssetId(e,a);r.push(c),l=[a,c]}else{const c=a.map(u=>this._createBundleAssetId(e,u));r.push(...c),l=[...a,...c]}this.add({...s,alias:l,src:o})}),this._bundles[e]=r}add(e){const t=[];Array.isArray(e)?t.push(...e):t.push(e);let r;r=s=>{this.hasKey(s)&&ie(`[Resolver] already has key: ${s} overwriting`)},Se(t).forEach(s=>{const{src:o}=s;let{data:a,format:l,loadParser:c}=s;const u=Se(o).map(p=>typeof p=="string"?Ku(p):Array.isArray(p)?p:[p]),h=this.getAlias(s);Array.isArray(h)?h.forEach(r):r(h);const f=[];u.forEach(p=>{p.forEach(m=>{let g={};if(typeof m!="object"){g.src=m;for(let d=0;d<this._parsers.length;d++){const v=this._parsers[d];if(v.test(m)){g=v.parse(m);break}}}else a=m.data??a,l=m.format??l,c=m.loadParser??c,g={...g,...m};if(!h)throw new Error(`[Resolver] alias is undefined for this asset: ${g.src}`);g=this._buildResolvedAsset(g,{aliases:h,data:a,format:l,loadParser:c}),f.push(g)})}),h.forEach(p=>{this._assetMap[p]=f})})}resolveBundle(e){const t=zn(e);e=Se(e);const r={};return e.forEach(i=>{const s=this._bundles[i];if(s){const o=this.resolve(s),a={};for(const l in o){const c=o[l];a[this._extractAssetIdFromBundle(i,l)]=c}r[i]=a}}),t?r[e[0]]:r}resolveUrl(e){const t=this.resolve(e);if(typeof e!="string"){const r={};for(const i in t)r[i]=t[i].src;return r}return t.src}resolve(e){const t=zn(e);e=Se(e);const r={};return e.forEach(i=>{if(!this._resolverHash[i])if(this._assetMap[i]){let s=this._assetMap[i];const o=this._getPreferredOrder(s);o==null||o.priority.forEach(a=>{o.params[a].forEach(l=>{const c=s.filter(u=>u[a]?u[a]===l:!1);c.length&&(s=c)})}),this._resolverHash[i]=s[0]}else this._resolverHash[i]=this._buildResolvedAsset({alias:[i],src:i},{});r[i]=this._resolverHash[i]}),t?r[e[0]]:r}hasKey(e){return!!this._assetMap[e]}hasBundle(e){return!!this._bundles[e]}_getPreferredOrder(e){for(let t=0;t<e.length;t++){const r=e[0],i=this._preferredOrder.find(s=>s.params.format.includes(r.format));if(i)return i}return this._preferredOrder[0]}_appendDefaultSearchParams(e){if(!this._defaultSearchParams)return e;const t=/\?/.test(e)?"&":"?";return`${e}${t}${this._defaultSearchParams}`}_buildResolvedAsset(e,t){const{aliases:r,data:i,loadParser:s,format:o}=t;return(this._basePath||this._rootPath)&&(e.src=pe.toAbsolute(e.src,this._basePath,this._rootPath)),e.alias=r??e.alias??[e.src],e.src=this._appendDefaultSearchParams(e.src),e.data={...i||{},...e.data},e.loadParser=s??e.loadParser,e.format=o??e.format??Zu(e.src),e}}Mt.RETINA_PREFIX=/@([0-9\.]+)x/;function Zu(n){return n.split(".").pop().split("?").shift().split("#").shift()}const $r=(n,e)=>{const t=e.split("?")[1];return t&&(n+=`?${t}`),n},Lo=class Dt{constructor(e,t){this.linkedSheets=[],this._texture=e instanceof U?e:null,this.textureSource=e.source,this.textures={},this.animations={},this.data=t;const r=parseFloat(t.meta.scale);r?(this.resolution=r,e.source.resolution=this.resolution):this.resolution=e.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(e=>{this._callback=e,this._batchIndex=0,this._frameKeys.length<=Dt.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(e){let t=e;const r=Dt.BATCH_SIZE;for(;t-e<r&&t<this._frameKeys.length;){const i=this._frameKeys[t],s=this._frames[i],o=s.frame;if(o){let a=null,l=null;const c=s.trimmed!==!1&&s.sourceSize?s.sourceSize:s.frame,u=new ne(0,0,Math.floor(c.w)/this.resolution,Math.floor(c.h)/this.resolution);s.rotated?a=new ne(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.h)/this.resolution,Math.floor(o.w)/this.resolution):a=new ne(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution),s.trimmed!==!1&&s.spriteSourceSize&&(l=new ne(Math.floor(s.spriteSourceSize.x)/this.resolution,Math.floor(s.spriteSourceSize.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution)),this.textures[i]=new U({source:this.textureSource,frame:a,orig:u,trim:l,rotate:s.rotated?2:0,defaultAnchor:s.anchor,defaultBorders:s.borders,label:i.toString()})}t++}}_processAnimations(){const e=this.data.animations||{};for(const t in e){this.animations[t]=[];for(let r=0;r<e[t].length;r++){const i=e[t][r];this.animations[t].push(this.textures[i])}}}_parseComplete(){const e=this._callback;this._callback=null,this._batchIndex=0,e.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*Dt.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*Dt.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(e=!1){var t;for(const r in this.textures)this.textures[r].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,e&&((t=this._texture)==null||t.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};Lo.BATCH_SIZE=1e3;let ms=Lo;const Qu=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function No(n,e,t){const r={};if(n.forEach(i=>{r[i]=e}),Object.keys(e.textures).forEach(i=>{r[i]=e.textures[i]}),!t){const i=pe.dirname(n[0]);e.linkedSheets.forEach((s,o)=>{const a=No([`${i}/${e.data.meta.related_multi_packs[o]}`],s,!0);Object.assign(r,a)})}return r}const Ju={extension:E.Asset,cache:{test:n=>n instanceof ms,getCacheableAssets:(n,e)=>No(n,e,!1)},resolver:{extension:{type:E.ResolveParser,name:"resolveSpritesheet"},test:n=>{const t=n.split("?")[0].split("."),r=t.pop(),i=t.pop();return r==="json"&&Qu.includes(i)},parse:n=>{var t;const e=n.split(".");return{resolution:parseFloat(((t=Mt.RETINA_PREFIX.exec(n))==null?void 0:t[1])??"1"),format:e[e.length-2],src:n}}},loader:{name:"spritesheetLoader",extension:{type:E.LoadParser,priority:Ne.Normal,name:"spritesheetLoader"},async testParse(n,e){return pe.extname(e.src).toLowerCase()===".json"&&!!n.frames},async parse(n,e,t){var c,u;const{texture:r,imageFilename:i}=(e==null?void 0:e.data)??{};let s=pe.dirname(e.src);s&&s.lastIndexOf("/")!==s.length-1&&(s+="/");let o;if(r instanceof U)o=r;else{const h=$r(s+(i??n.meta.image),e.src);o=(await t.load([h]))[h]}const a=new ms(o.source,n);await a.parse();const l=(c=n==null?void 0:n.meta)==null?void 0:c.related_multi_packs;if(Array.isArray(l)){const h=[];for(const p of l){if(typeof p!="string")continue;let m=s+p;(u=e.data)!=null&&u.ignoreMultiPack||(m=$r(m,e.src),h.push(t.load({src:m,data:{ignoreMultiPack:!0}})))}const f=await Promise.all(h);a.linkedSheets=f,f.forEach(p=>{p.linkedSheets=[a].concat(a.linkedSheets.filter(m=>m!==p))})}return a},async unload(n,e,t){await t.unload(n.textureSource._sourceOrigin),n.destroy(!1)}}};ce.add(Ju);const ur=Object.create(null),gs=Object.create(null);function yi(n,e){let t=gs[n];return t===void 0&&(ur[e]===void 0&&(ur[e]=1),gs[n]=t=ur[e]++),t}let at;function Go(){return(!at||at!=null&&at.isContextLost())&&(at=J.get().createCanvas().getContext("webgl",{})),at}let an;function ec(){if(!an){an="mediump";const n=Go();n&&n.getShaderPrecisionFormat&&(an=n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision?"highp":"mediump")}return an}function tc(n,e,t){return e?n:t?(n=n.replace("out vec4 finalColor;",""),`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${n}
        `):`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${n}
        `}function nc(n,e,t){const r=t?e.maxSupportedFragmentPrecision:e.maxSupportedVertexPrecision;if(n.substring(0,9)!=="precision"){let i=t?e.requestedFragmentPrecision:e.requestedVertexPrecision;return i==="highp"&&r!=="highp"&&(i="mediump"),`precision ${i} float;
${n}`}else if(r!=="highp"&&n.substring(0,15)==="precision highp")return n.replace("precision highp","precision mediump");return n}function rc(n,e){return e?`#version 300 es
${n}`:n}const ic={},sc={};function oc(n,{name:e="pixi-program"},t=!0){e=e.replace(/\s+/g,"-"),e+=t?"-fragment":"-vertex";const r=t?ic:sc;return r[e]?(r[e]++,e+=`-${r[e]}`):r[e]=1,n.indexOf("#define SHADER_NAME")!==-1?n:`${`#define SHADER_NAME ${e}`}
${n}`}function ac(n,e){return e?n.replace("#version 300 es",""):n}const cr={stripVersion:ac,ensurePrecision:nc,addProgramDefines:tc,setProgramName:oc,insertVersion:rc},hr=Object.create(null),Wo=class Vr{constructor(e){e={...Vr.defaultOptions,...e};const t=e.fragment.indexOf("#version 300 es")!==-1,r={stripVersion:t,ensurePrecision:{requestedFragmentPrecision:e.preferredFragmentPrecision,requestedVertexPrecision:e.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:ec()},setProgramName:{name:e.name},addProgramDefines:t,insertVersion:t};let i=e.fragment,s=e.vertex;Object.keys(cr).forEach(o=>{const a=r[o];i=cr[o](i,a,!0),s=cr[o](s,a,!1)}),this.fragment=i,this.vertex=s,this._key=yi(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(e){const t=`${e.vertex}:${e.fragment}`;return hr[t]||(hr[t]=new Vr(e)),hr[t]}};Wo.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let G=Wo;const vs={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function lc(n){return vs[n]??vs.float32}const uc={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function cc({source:n,entryPoint:e}){const t={},r=n.indexOf(`fn ${e}`);if(r!==-1){const i=n.indexOf("->",r);if(i!==-1){const s=n.substring(r,i),o=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let a;for(;(a=o.exec(s))!==null;){const l=uc[a[3]]??"float32";t[a[2]]={location:parseInt(a[1],10),format:l,stride:lc(l).stride,offset:0,instance:!1,start:0}}}}return t}function fr(n){var h,f;const e=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,t=/@group\((\d+)\)/,r=/@binding\((\d+)\)/,i=/var(<[^>]+>)? (\w+)/,s=/:\s*(\w+)/,o=/struct\s+(\w+)\s*{([^}]+)}/g,a=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,c=(h=n.match(e))==null?void 0:h.map(p=>({group:parseInt(p.match(t)[1],10),binding:parseInt(p.match(r)[1],10),name:p.match(i)[2],isUniform:p.match(i)[1]==="<uniform>",type:p.match(s)[1]}));if(!c)return{groups:[],structs:[]};const u=((f=n.match(o))==null?void 0:f.map(p=>{const m=p.match(l)[1],g=p.match(a).reduce((d,v)=>{const[x,y]=v.split(":");return d[x.trim()]=y.trim(),d},{});return g?{name:m,members:g}:null}).filter(({name:p})=>c.some(m=>m.type===p)))??[];return{groups:c,structs:u}}var Lt=(n=>(n[n.VERTEX=1]="VERTEX",n[n.FRAGMENT=2]="FRAGMENT",n[n.COMPUTE=4]="COMPUTE",n))(Lt||{});function hc({groups:n}){const e=[];for(let t=0;t<n.length;t++){const r=n[t];e[r.group]||(e[r.group]=[]),r.isUniform?e[r.group].push({binding:r.binding,visibility:Lt.VERTEX|Lt.FRAGMENT,buffer:{type:"uniform"}}):r.type==="sampler"?e[r.group].push({binding:r.binding,visibility:Lt.FRAGMENT,sampler:{type:"filtering"}}):r.type==="texture_2d"&&e[r.group].push({binding:r.binding,visibility:Lt.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return e}function fc({groups:n}){const e=[];for(let t=0;t<n.length;t++){const r=n[t];e[r.group]||(e[r.group]={}),e[r.group][r.name]=r.binding}return e}function dc(n,e){const t=new Set,r=new Set,i=[...n.structs,...e.structs].filter(o=>t.has(o.name)?!1:(t.add(o.name),!0)),s=[...n.groups,...e.groups].filter(o=>{const a=`${o.name}-${o.binding}`;return r.has(a)?!1:(r.add(a),!0)});return{structs:i,groups:s}}const dr=Object.create(null);class D{constructor(e){var a,l;this._layoutKey=0;const{fragment:t,vertex:r,layout:i,gpuLayout:s,name:o}=e;if(this.name=o,this.fragment=t,this.vertex=r,t.source===r.source){const c=fr(t.source);this.structsAndGroups=c}else{const c=fr(r.source),u=fr(t.source);this.structsAndGroups=dc(c,u)}this.layout=i??fc(this.structsAndGroups),this.gpuLayout=s??hc(this.structsAndGroups),this.autoAssignGlobalUniforms=((a=this.layout[0])==null?void 0:a.globalUniforms)!==void 0,this.autoAssignLocalUniforms=((l=this.layout[1])==null?void 0:l.localUniforms)!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:e,fragment:t}=this,r=e.source+t.source+e.entryPoint+t.entryPoint;this._layoutKey=yi(r,"program")}get attributeData(){return this._attributeData??(this._attributeData=cc(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(e){const t=`${e.vertex.source}:${e.fragment.source}:${e.fragment.entryPoint}:${e.vertex.entryPoint}`;return dr[t]||(dr[t]=new D(e)),dr[t]}}const $o=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>"],pc=$o.reduce((n,e)=>(n[e]=!0,n),{});function mc(n,e){switch(n){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*e);case"vec3<f32>":return new Float32Array(3*e);case"vec4<f32>":return new Float32Array(4*e);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const Vo=class Ho{constructor(e,t){this._touched=0,this.uid=re("uniform"),this._resourceType="uniformGroup",this._resourceId=re("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,t={...Ho.defaultOptions,...t},this.uniformStructures=e;const r={};for(const i in e){const s=e[i];if(s.name=i,s.size=s.size??1,!pc[s.type])throw new Error(`Uniform type ${s.type} is not supported. Supported uniform types are: ${$o.join(", ")}`);s.value??(s.value=mc(s.type,s.size)),r[i]=s.value}this.uniforms=r,this._dirtyId=1,this.ubo=t.ubo,this.isStatic=t.isStatic,this._signature=yi(Object.keys(r).map(i=>`${i}-${e[i].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};Vo.defaultOptions={ubo:!1,isStatic:!1};let jo=Vo;class _n{constructor(e){this.resources=Object.create(null),this._dirty=!0;let t=0;for(const r in e){const i=e[r];this.setResource(i,t++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const e=[];let t=0;for(const r in this.resources)e[t++]=this.resources[r]._resourceId;this._key=e.join("|")}setResource(e,t){var i,s;const r=this.resources[t];e!==r&&(r&&((i=e.off)==null||i.call(e,"change",this.onResourceChange,this)),(s=e.on)==null||s.call(e,"change",this.onResourceChange,this),this.resources[t]=e,this._dirty=!0)}getResource(e){return this.resources[e]}_touch(e){const t=this.resources;for(const r in t)t[r]._touched=e}destroy(){var t;const e=this.resources;for(const r in e){const i=e[r];(t=i.off)==null||t.call(i,"change",this.onResourceChange,this)}this.resources=null}onResourceChange(e){if(this._dirty=!0,e.destroyed){const t=this.resources;for(const r in t)t[r]===e&&(t[r]=null)}else this._updateKey()}}var On=(n=>(n[n.WEBGL=1]="WEBGL",n[n.WEBGPU=2]="WEBGPU",n[n.BOTH=3]="BOTH",n))(On||{});class _i extends we{constructor(e){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:t,glProgram:r,groups:i,resources:s,compatibleRenderers:o,groupMap:a}=e;this.gpuProgram=t,this.glProgram=r,o===void 0&&(o=0,t&&(o|=On.WEBGPU),r&&(o|=On.WEBGL)),this.compatibleRenderers=o;const l={};if(!s&&!i&&(s={}),s&&i)throw new Error("[Shader] Cannot have both resources and groups");if(!t&&i&&!a)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!t&&i&&a)for(const c in a)for(const u in a[c]){const h=a[c][u];l[h]={group:c,binding:u,name:h}}else if(t&&i&&!a){const c=t.structsAndGroups.groups;a={},c.forEach(u=>{a[u.group]=a[u.group]||{},a[u.group][u.binding]=u.name,l[u.name]=u})}else if(s){if(t){const c=t.structsAndGroups.groups;a={},c.forEach(u=>{a[u.group]=a[u.group]||{},a[u.group][u.binding]=u.name,l[u.name]=u})}else{a={},i={99:new _n},this._ownedBindGroups.push(i[99]);let c=0;for(const u in s)l[u]={group:99,binding:c,name:u},a[99]=a[99]||{},a[99][c]=u,c++}i={};for(const c in s){const u=c;let h=s[c];!h.source&&!h._resourceType&&(h=new jo(h));const f=l[u];f&&(i[f.group]||(i[f.group]=new _n,this._ownedBindGroups.push(i[f.group])),i[f.group].setResource(h,f.binding))}}this.groups=i,this._uniformBindMap=a,this.resources=this._buildResourceAccessor(i,l)}addResource(e,t,r){var i,s;(i=this._uniformBindMap)[t]||(i[t]={}),(s=this._uniformBindMap[t])[r]||(s[r]=e),this.groups[t]||(this.groups[t]=new _n,this._ownedBindGroups.push(this.groups[t]))}_buildResourceAccessor(e,t){const r={};for(const i in t){const s=t[i];Object.defineProperty(r,s.name,{get(){return e[s.group].getResource(s.binding)},set(o){e[s.group].setResource(o,s.binding)}})}return r}destroy(e=!1){var t,r;this.emit("destroy",this),e&&((t=this.gpuProgram)==null||t.destroy(),(r=this.glProgram)==null||r.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(i=>{i.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(e){const{gpu:t,gl:r,...i}=e;let s,o;return t&&(s=D.from(t)),r&&(o=G.from(r)),new _i({gpuProgram:s,glProgram:o,...i})}}const gc={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8},pr=0,mr=1,gr=2,vr=3,xr=4,yr=5,Hr=class Xo{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<pr)}set blend(e){!!(this.data&1<<pr)!==e&&(this.data^=1<<pr)}get offsets(){return!!(this.data&1<<mr)}set offsets(e){!!(this.data&1<<mr)!==e&&(this.data^=1<<mr)}set cullMode(e){if(e==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=e==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<gr)}set culling(e){!!(this.data&1<<gr)!==e&&(this.data^=1<<gr)}get depthTest(){return!!(this.data&1<<vr)}set depthTest(e){!!(this.data&1<<vr)!==e&&(this.data^=1<<vr)}get depthMask(){return!!(this.data&1<<yr)}set depthMask(e){!!(this.data&1<<yr)!==e&&(this.data^=1<<yr)}get clockwiseFrontFace(){return!!(this.data&1<<xr)}set clockwiseFrontFace(e){!!(this.data&1<<xr)!==e&&(this.data^=1<<xr)}get blendMode(){return this._blendMode}set blendMode(e){this.blend=e!=="none",this._blendMode=e,this._blendModeId=gc[e]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(e){this.offsets=!!e,this._polygonOffset=e}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const e=new Xo;return e.depthTest=!1,e.blend=!0,e}};Hr.default2d=Hr.for2d();let vc=Hr;const Yo=class jr extends _i{constructor(e){e={...jr.defaultOptions,...e},super(e),this.enabled=!0,this._state=vc.for2d(),this.padding=e.padding,typeof e.antialias=="boolean"?this.antialias=e.antialias?"on":"off":this.antialias=e.antialias,this.resolution=e.resolution,this.blendRequired=e.blendRequired,this.addResource("uTexture",0,1)}apply(e,t,r,i){e.applyFilter(this,t,r,i)}get blendMode(){return this._state.blendMode}set blendMode(e){this._state.blendMode=e}static from(e){const{gpu:t,gl:r,...i}=e;let s,o;return t&&(s=D.from(t)),r&&(o=G.from(r)),new jr({gpuProgram:s,glProgram:o,...i})}};Yo.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1};let W=Yo;const Xr=[];ce.handleByNamedList(E.Environment,Xr);async function xc(n){if(!n)for(let e=0;e<Xr.length;e++){const t=Xr[e];if(t.value.test()){await t.value.load();return}}}let kt;function yc(){if(typeof kt=="boolean")return kt;try{kt=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{kt=!1}return kt}var bi={exports:{}};bi.exports=Gn;bi.exports.default=Gn;function Gn(n,e,t){t=t||2;var r=e&&e.length,i=r?e[0]*t:n.length,s=qo(n,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;var a,l,c,u,h,f,p;if(r&&(s=wc(n,e,s,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(var m=t;m<i;m+=t)h=n[m],f=n[m+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Ht(s,o,t,a,l,p,0),o}function qo(n,e,t,r,i){var s,o;if(i===Kr(n,e,t,r)>0)for(s=e;s<t;s+=r)o=xs(s,n[s],n[s+1],o);else for(s=t-r;s>=e;s-=r)o=xs(s,n[s],n[s+1],o);return o&&Wn(o,o.next)&&(Xt(o),o=o.next),o}function rt(n,e){if(!n)return n;e||(e=n);var t=n,r;do if(r=!1,!t.steiner&&(Wn(t,t.next)||Q(t.prev,t,t.next)===0)){if(Xt(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function Ht(n,e,t,r,i,s,o){if(n){!o&&s&&Fc(n,r,i,s);for(var a=n,l,c;n.prev!==n.next;){if(l=n.prev,c=n.next,s?bc(n,r,i,s):_c(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Xt(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Sc(rt(n),e,t),Ht(n,e,t,r,i,s,2)):o===2&&Cc(n,e,t,r,i,s):Ht(rt(n),e,t,r,i,s,1);break}}}}function _c(n){var e=n.prev,t=n,r=n.next;if(Q(e,t,r)>=0)return!1;for(var i=e.x,s=t.x,o=r.x,a=e.y,l=t.y,c=r.y,u=i<s?i<o?i:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c,m=r.next;m!==e;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=p&&mt(i,a,s,l,o,c,m.x,m.y)&&Q(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function bc(n,e,t,r){var i=n.prev,s=n,o=n.next;if(Q(i,s,o)>=0)return!1;for(var a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,m=u<h?u<f?u:f:h<f?h:f,g=a>l?a>c?a:c:l>c?l:c,d=u>h?u>f?u:f:h>f?h:f,v=Yr(p,m,e,t,r),x=Yr(g,d,e,t,r),y=n.prevZ,_=n.nextZ;y&&y.z>=v&&_&&_.z<=x;){if(y.x>=p&&y.x<=g&&y.y>=m&&y.y<=d&&y!==i&&y!==o&&mt(a,u,l,h,c,f,y.x,y.y)&&Q(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=p&&_.x<=g&&_.y>=m&&_.y<=d&&_!==i&&_!==o&&mt(a,u,l,h,c,f,_.x,_.y)&&Q(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=v;){if(y.x>=p&&y.x<=g&&y.y>=m&&y.y<=d&&y!==i&&y!==o&&mt(a,u,l,h,c,f,y.x,y.y)&&Q(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=x;){if(_.x>=p&&_.x<=g&&_.y>=m&&_.y<=d&&_!==i&&_!==o&&mt(a,u,l,h,c,f,_.x,_.y)&&Q(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Sc(n,e,t){var r=n;do{var i=r.prev,s=r.next.next;!Wn(i,s)&&Ko(i,r,r.next,s)&&jt(i,s)&&jt(s,i)&&(e.push(i.i/t|0),e.push(r.i/t|0),e.push(s.i/t|0),Xt(r),Xt(r.next),r=n=s),r=r.next}while(r!==n);return rt(r)}function Cc(n,e,t,r,i,s){var o=n;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&Oc(o,a)){var l=Zo(o,a);o=rt(o,o.next),l=rt(l,l.next),Ht(o,e,t,r,i,s,0),Ht(l,e,t,r,i,s,0);return}a=a.next}o=o.next}while(o!==n)}function wc(n,e,t,r){var i=[],s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*r,l=s<o-1?e[s+1]*r:n.length,c=qo(n,a,l,r,!1),c===c.next&&(c.steiner=!0),i.push(zc(c));for(i.sort(Ac),s=0;s<i.length;s++)t=Tc(i[s],t);return t}function Ac(n,e){return n.x-e.x}function Tc(n,e){var t=Pc(n,e);if(!t)return e;var r=Zo(t,n);return rt(r,r.next),rt(t,t.next)}function Pc(n,e){var t=e,r=n.x,i=n.y,s=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var a=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(a<=r&&a>s&&(s=a,o=t.x<t.next.x?t:t.next,a===r))return o}t=t.next}while(t!==e);if(!o)return null;var l=o,c=o.x,u=o.y,h=1/0,f;t=o;do r>=t.x&&t.x>=c&&r!==t.x&&mt(i<u?r:s,i,c,u,i<u?s:r,i,t.x,t.y)&&(f=Math.abs(i-t.y)/(r-t.x),jt(t,n)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&Mc(o,t)))&&(o=t,h=f)),t=t.next;while(t!==l);return o}function Mc(n,e){return Q(n.prev,n,e.prev)<0&&Q(e.next,n,n.next)<0}function Fc(n,e,t,r){var i=n;do i.z===0&&(i.z=Yr(i.x,i.y,e,t,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==n);i.prevZ.nextZ=null,i.prevZ=null,Ic(i)}function Ic(n){var e,t,r,i,s,o,a,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,r=t,a=0,e=0;e<c&&(a++,r=r.nextZ,!!r);e++);for(l=c;a>0||l>0&&r;)a!==0&&(l===0||!r||t.z<=r.z)?(i=t,t=t.nextZ,a--):(i=r,r=r.nextZ,l--),s?s.nextZ=i:n=i,i.prevZ=s,s=i;t=r}s.nextZ=null,c*=2}while(o>1);return n}function Yr(n,e,t,r,i){return n=(n-t)*i|0,e=(e-r)*i|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function zc(n){var e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function mt(n,e,t,r,i,s,o,a){return(i-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(r-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(r-a)}function Oc(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!kc(n,e)&&(jt(n,e)&&jt(e,n)&&Ec(n,e)&&(Q(n.prev,n,e.prev)||Q(n,e.prev,e))||Wn(n,e)&&Q(n.prev,n,n.next)>0&&Q(e.prev,e,e.next)>0)}function Q(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Wn(n,e){return n.x===e.x&&n.y===e.y}function Ko(n,e,t,r){var i=un(Q(n,e,t)),s=un(Q(n,e,r)),o=un(Q(t,r,n)),a=un(Q(t,r,e));return!!(i!==s&&o!==a||i===0&&ln(n,t,e)||s===0&&ln(n,r,e)||o===0&&ln(t,n,r)||a===0&&ln(t,e,r))}function ln(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function un(n){return n>0?1:n<0?-1:0}function kc(n,e){var t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ko(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function jt(n,e){return Q(n.prev,n,n.next)<0?Q(n,e,n.next)>=0&&Q(n,n.prev,e)>=0:Q(n,e,n.prev)<0||Q(n,n.next,e)<0}function Ec(n,e){var t=n,r=!1,i=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==n);return r}function Zo(n,e){var t=new qr(n.i,n.x,n.y),r=new qr(e.i,e.x,e.y),i=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=i,i.prev=t,r.next=t,t.prev=r,s.next=r,r.prev=s,r}function xs(n,e,t,r){var i=new qr(n,e,t);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Xt(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function qr(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Gn.deviation=function(n,e,t,r){var i=e&&e.length,s=i?e[0]*t:n.length,o=Math.abs(Kr(n,0,s,t));if(i)for(var a=0,l=e.length;a<l;a++){var c=e[a]*t,u=a<l-1?e[a+1]*t:n.length;o-=Math.abs(Kr(n,c,u,t))}var h=0;for(a=0;a<r.length;a+=3){var f=r[a]*t,p=r[a+1]*t,m=r[a+2]*t;h+=Math.abs((n[f]-n[m])*(n[p+1]-n[f+1])-(n[f]-n[p])*(n[m+1]-n[f+1]))}return o===0&&h===0?0:Math.abs((h-o)/o)};function Kr(n,e,t,r){for(var i=0,s=e,o=t-r;s<t;s+=r)i+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return i}Gn.flatten=function(n){for(var e=n[0][0].length,t={vertices:[],holes:[],dimensions:e},r=0,i=0;i<n.length;i++){for(var s=0;s<n[i].length;s++)for(var o=0;o<e;o++)t.vertices.push(n[i][s][o]);i>0&&(r+=n[i-1].length,t.holes.push(r))}return t};var Rc=bi.exports;const Uc=Ln(Rc);var Qo=(n=>(n[n.NONE=0]="NONE",n[n.COLOR=16384]="COLOR",n[n.STENCIL=1024]="STENCIL",n[n.DEPTH=256]="DEPTH",n[n.COLOR_DEPTH=16640]="COLOR_DEPTH",n[n.COLOR_STENCIL=17408]="COLOR_STENCIL",n[n.DEPTH_STENCIL=1280]="DEPTH_STENCIL",n[n.ALL=17664]="ALL",n))(Qo||{});class Bc{constructor(e){this.items=[],this._name=e}emit(e,t,r,i,s,o,a,l){const{name:c,items:u}=this;for(let h=0,f=u.length;h<f;h++)u[h][c](e,t,r,i,s,o,a,l);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const t=this.items.indexOf(e);return t!==-1&&this.items.splice(t,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Dc=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],Jo=class ea extends we{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const t=[...Dc,...this.config.runners??[]];this._addRunners(...t),this._unsafeEvalCheck()}async init(e={}){const t=e.skipExtensionImports===!0?!0:e.manageImports===!1;await xc(t),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const r in this._systemsHash)e={...this._systemsHash[r].constructor.defaultOptions,...e};e={...ea.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let r=0;r<this.runners.init.items.length;r++)await this.runners.init.items[r].init(e);this._initOptions=e}render(e,t){let r=e;if(r instanceof te&&(r={container:r},t&&(O(X,"passing a second argument is deprecated, please use render options instead"),r.target=t.renderTexture)),r.target||(r.target=this.view.renderTarget),r.target===this.view.renderTarget&&(this._lastObjectRendered=r.container,r.clearColor=this.background.colorRgba),r.clearColor){const i=Array.isArray(r.clearColor)&&r.clearColor.length===4;r.clearColor=i?r.clearColor:$.shared.setValue(r.clearColor).toArray()}r.transform||(r.container.updateLocalTransform(),r.transform=r.container.localTransform),this.runners.prerender.emit(r),this.runners.renderStart.emit(r),this.runners.render.emit(r),this.runners.renderEnd.emit(r),this.runners.postrender.emit(r)}resize(e,t,r){this.view.resize(e,t,r),this.emit("resize",this.view.screen.width,this.view.screen.height)}clear(e={}){const t=this;e.target||(e.target=t.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Qo.ALL);const{clear:r,clearColor:i,target:s}=e;$.shared.setValue(i??this.background.colorRgba),t.renderTarget.clear(s,r,$.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(t=>{this.runners[t]=new Bc(t)})}_addSystems(e){let t;for(t in e){const r=e[t];this._addSystem(r.value,r.name)}}_addSystem(e,t){const r=new e(this);if(this[t])throw new Error(`Whoops! The name "${t}" is already in use`);this[t]=r,this._systemsHash[t]=r;for(const i in this.runners)this.runners[i].add(r);return this}_addPipes(e,t){const r=t.reduce((i,s)=>(i[s.name]=s.value,i),{});e.forEach(i=>{const s=i.value,o=i.name,a=r[o];this.renderPipes[o]=new s(this,a?new a:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(t=>{t.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!yc())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};Jo.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let ta=Jo,cn;function Lc(n){return cn!==void 0||(cn=(()=>{var t;const e={stencil:!0,failIfMajorPerformanceCaveat:n??ta.defaultOptions.failIfMajorPerformanceCaveat};try{if(!J.get().getWebGLRenderingContext())return!1;let i=J.get().createCanvas().getContext("webgl",e);const s=!!((t=i==null?void 0:i.getContextAttributes())!=null&&t.stencil);if(i){const o=i.getExtension("WEBGL_lose_context");o&&o.loseContext()}return i=null,s}catch{return!1}})()),cn}let hn;async function Nc(n={}){return hn!==void 0||(hn=await(async()=>{if(!J.get().getNavigator().gpu)return!1;try{return await(await navigator.gpu.requestAdapter(n)).requestDevice(),!0}catch{return!1}})()),hn}const ys=["webgl","webgpu","canvas"];async function Gc(n){let e=[];n.preference?(e.push(n.preference),ys.forEach(s=>{s!==n.preference&&e.push(s)})):e=ys.slice();let t,r={};for(let s=0;s<e.length;s++){const o=e[s];if(o==="webgpu"&&await Nc()){const{WebGPURenderer:a}=await Mn(async()=>{const{WebGPURenderer:l}=await import("./WebGPURenderer-Du412g6z.js");return{WebGPURenderer:l}},__vite__mapDeps([4,2,5]));t=a,r={...n,...n.webgpu};break}else if(o==="webgl"&&Lc(n.failIfMajorPerformanceCaveat??ta.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:a}=await Mn(async()=>{const{WebGLRenderer:l}=await import("./WebGLRenderer-50GvPkEO.js");return{WebGLRenderer:l}},__vite__mapDeps([6,2,3,5]));t=a,r={...n,...n.webgl};break}else if(o==="canvas")throw r={...n},new Error("CanvasRenderer is not yet implemented")}if(delete r.webgpu,delete r.webgl,!t)throw new Error("No available renderer for the current environment");const i=new t;return await i.init(r),i}class na{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this)}static destroy(){}}na.extension=E.Application;class Wc{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer)}destroy(){this._renderer=null}}Wc.extension={type:[E.WebGLSystem,E.WebGPUSystem],name:"initHook",priority:-10};const ra=class Zr{constructor(...e){this.stage=new te,e[0]!==void 0&&O(X,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Gc(e),Zr._plugins.forEach(t=>{t.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return O(X,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,t=!1){const r=Zr._plugins.slice(0);r.reverse(),r.forEach(i=>{i.destroy.call(this)}),this.stage.destroy(t),this.stage=null,this.renderer.destroy(e),this.renderer=null}};ra._plugins=[];let ia=ra;ce.handleByList(E.Application,ia._plugins);ce.add(na);class sa extends we{constructor(){super(...arguments),this.chars=Object.create(null),this.lineHeight=0,this.fontFamily="",this.fontMetrics={fontSize:0,ascent:0,descent:0},this.baseLineOffset=0,this.distanceField={type:"none",range:0},this.pages=[],this.applyFillAsTint=!0,this.baseMeasurementFontSize=100,this.baseRenderedFontSize=100}get font(){return O(X,"BitmapFont.font is deprecated, please use BitmapFont.fontFamily instead."),this.fontFamily}get pageTextures(){return O(X,"BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),this.pages}get size(){return O(X,"BitmapFont.size is deprecated, please use BitmapFont.fontMetrics.fontSize instead."),this.fontMetrics.fontSize}get distanceFieldRange(){return O(X,"BitmapFont.distanceFieldRange is deprecated, please use BitmapFont.distanceField.range instead."),this.distanceField.range}get distanceFieldType(){return O(X,"BitmapFont.distanceFieldType is deprecated, please use BitmapFont.distanceField.type instead."),this.distanceField.type}destroy(e=!1){var t;this.emit("destroy",this),this.removeAllListeners();for(const r in this.chars)(t=this.chars[r].texture)==null||t.destroy();this.chars=null,e&&(this.pages.forEach(r=>r.texture.destroy(!0)),this.pages=null)}}const oa=class Qr{constructor(e,t,r,i){this.uid=re("fillGradient"),this.type="linear",this.gradientStops=[],this._styleKey=null,this.x0=e,this.y0=t,this.x1=r,this.y1=i}addColorStop(e,t){return this.gradientStops.push({offset:e,color:$.shared.setValue(t).toHex()}),this._styleKey=null,this}buildLinearGradient(){const e=Qr.defaultTextureSize,{gradientStops:t}=this,r=J.get().createCanvas();r.width=e,r.height=e;const i=r.getContext("2d"),s=i.createLinearGradient(0,0,Qr.defaultTextureSize,1);for(let g=0;g<t.length;g++){const d=t[g];s.addColorStop(d.offset,d.color)}i.fillStyle=s,i.fillRect(0,0,e,e),this.texture=new U({source:new st({resource:r,addressModeU:"clamp-to-edge",addressModeV:"repeat"})});const{x0:o,y0:a,x1:l,y1:c}=this,u=new j,h=l-o,f=c-a,p=Math.sqrt(h*h+f*f),m=Math.atan2(f,h);u.translate(-o,-a),u.scale(1/e,1/e),u.rotate(-m),u.scale(256/p,1),this.transform=u,this._styleKey=null}get styleKey(){if(this._styleKey)return this._styleKey;const e=this.gradientStops.map(i=>`${i.offset}-${i.color}`).join("-"),t=this.texture.uid,r=this.transform.toArray().join("-");return`fill-gradient-${this.uid}-${e}-${t}-${r}-${this.x0}-${this.y0}-${this.x1}-${this.y1}`}};oa.defaultTextureSize=256;let Yt=oa;const _s={repeat:{addressModeU:"repeat",addressModeV:"repeat"},"repeat-x":{addressModeU:"repeat",addressModeV:"clamp-to-edge"},"repeat-y":{addressModeU:"clamp-to-edge",addressModeV:"repeat"},"no-repeat":{addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}};class $n{constructor(e,t){this.uid=re("fillPattern"),this.transform=new j,this._styleKey=null,this.texture=e,this.transform.scale(1/e.frame.width,1/e.frame.height),t&&(e.source.style.addressModeU=_s[t].addressModeU,e.source.style.addressModeV=_s[t].addressModeV)}setTransform(e){const t=this.texture;this.transform.copyFrom(e),this.transform.invert(),this.transform.scale(1/t.frame.width,1/t.frame.height),this._styleKey=null}get styleKey(){return this._styleKey?this._styleKey:(this._styleKey=`fill-pattern-${this.uid}-${this.texture.uid}-${this.transform.toArray().join("-")}`,this._styleKey)}}var $c=Hc,_r={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},Vc=/([astvzqmhlc])([^astvzqmhlc]*)/ig;function Hc(n){var e=[];return n.replace(Vc,function(t,r,i){var s=r.toLowerCase();for(i=Xc(i),s=="m"&&i.length>2&&(e.push([r].concat(i.splice(0,2))),s="l",r=r=="m"?"l":"L");;){if(i.length==_r[s])return i.unshift(r),e.push(i);if(i.length<_r[s])throw new Error("malformed path data");e.push([r].concat(i.splice(0,_r[s])))}}),e}var jc=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;function Xc(n){var e=n.match(jc);return e?e.map(Number):[]}const Yc=Ln($c);function qc(n,e){const t=Yc(n),r=[];let i=null,s=0,o=0;for(let a=0;a<t.length;a++){const l=t[a],c=l[0],u=l;switch(c){case"M":s=u[1],o=u[2],e.moveTo(s,o);break;case"m":s+=u[1],o+=u[2],e.moveTo(s,o);break;case"H":s=u[1],e.lineTo(s,o);break;case"h":s+=u[1],e.lineTo(s,o);break;case"V":o=u[1],e.lineTo(s,o);break;case"v":o+=u[1],e.lineTo(s,o);break;case"L":s=u[1],o=u[2],e.lineTo(s,o);break;case"l":s+=u[1],o+=u[2],e.lineTo(s,o);break;case"C":s=u[5],o=u[6],e.bezierCurveTo(u[1],u[2],u[3],u[4],s,o);break;case"c":e.bezierCurveTo(s+u[1],o+u[2],s+u[3],o+u[4],s+u[5],o+u[6]),s+=u[5],o+=u[6];break;case"S":s=u[3],o=u[4],e.bezierCurveToShort(u[1],u[2],s,o);break;case"s":e.bezierCurveToShort(s+u[1],o+u[2],s+u[3],o+u[4]),s+=u[3],o+=u[4];break;case"Q":s=u[3],o=u[4],e.quadraticCurveTo(u[1],u[2],s,o);break;case"q":e.quadraticCurveTo(s+u[1],o+u[2],s+u[3],o+u[4]),s+=u[3],o+=u[4];break;case"T":s=u[1],o=u[2],e.quadraticCurveToShort(s,o);break;case"t":s+=u[1],o+=u[2],e.quadraticCurveToShort(s,o);break;case"A":s=u[6],o=u[7],e.arcToSvg(u[1],u[2],u[3],u[4],u[5],s,o);break;case"a":s+=u[6],o+=u[7],e.arcToSvg(u[1],u[2],u[3],u[4],u[5],s,o);break;case"Z":case"z":e.closePath(),r.length>0&&(i=r.pop(),i?(s=i.startX,o=i.startY):(s=0,o=0)),i=null;break;default:ie(`Unknown SVG path command: ${c}`)}c!=="Z"&&c!=="z"&&i===null&&(i={startX:s,startY:o},r.push(i))}return e}class Si{constructor(e=0,t=0,r=0){this.type="circle",this.x=e,this.y=t,this.radius=r}clone(){return new Si(this.x,this.y,this.radius)}contains(e,t){if(this.radius<=0)return!1;const r=this.radius*this.radius;let i=this.x-e,s=this.y-t;return i*=i,s*=s,i+s<=r}strokeContains(e,t,r){if(this.radius===0)return!1;const i=this.x-e,s=this.y-t,o=this.radius,a=r/2,l=Math.sqrt(i*i+s*s);return l<o+a&&l>o-a}getBounds(e){return e=e||new ne,e.x=this.x-this.radius,e.y=this.y-this.radius,e.width=this.radius*2,e.height=this.radius*2,e}copyFrom(e){return this.x=e.x,this.y=e.y,this.radius=e.radius,this}copyTo(e){return e.copyFrom(this),e}toString(){return`[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`}}class Ci{constructor(e=0,t=0,r=0,i=0){this.type="ellipse",this.x=e,this.y=t,this.halfWidth=r,this.halfHeight=i}clone(){return new Ci(this.x,this.y,this.halfWidth,this.halfHeight)}contains(e,t){if(this.halfWidth<=0||this.halfHeight<=0)return!1;let r=(e-this.x)/this.halfWidth,i=(t-this.y)/this.halfHeight;return r*=r,i*=i,r+i<=1}strokeContains(e,t,r){const{halfWidth:i,halfHeight:s}=this;if(i<=0||s<=0)return!1;const o=r/2,a=i-o,l=s-o,c=i+o,u=s+o,h=e-this.x,f=t-this.y,p=h*h/(a*a)+f*f/(l*l),m=h*h/(c*c)+f*f/(u*u);return p>1&&m<=1}getBounds(){return new ne(this.x-this.halfWidth,this.y-this.halfHeight,this.halfWidth*2,this.halfHeight*2)}copyFrom(e){return this.x=e.x,this.y=e.y,this.halfWidth=e.halfWidth,this.halfHeight=e.halfHeight,this}copyTo(e){return e.copyFrom(this),e}toString(){return`[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`}}function Kc(n,e,t,r,i,s){const o=n-t,a=e-r,l=i-t,c=s-r,u=o*l+a*c,h=l*l+c*c;let f=-1;h!==0&&(f=u/h);let p,m;f<0?(p=t,m=r):f>1?(p=i,m=s):(p=t+f*l,m=r+f*c);const g=n-p,d=e-m;return g*g+d*d}class Wt{constructor(...e){this.type="polygon";let t=Array.isArray(e[0])?e[0]:e;if(typeof t[0]!="number"){const r=[];for(let i=0,s=t.length;i<s;i++)r.push(t[i].x,t[i].y);t=r}this.points=t,this.closePath=!0}clone(){const e=this.points.slice(),t=new Wt(e);return t.closePath=this.closePath,t}contains(e,t){let r=!1;const i=this.points.length/2;for(let s=0,o=i-1;s<i;o=s++){const a=this.points[s*2],l=this.points[s*2+1],c=this.points[o*2],u=this.points[o*2+1];l>t!=u>t&&e<(c-a)*((t-l)/(u-l))+a&&(r=!r)}return r}strokeContains(e,t,r){const i=r/2,s=i*i,{points:o}=this,a=o.length-(this.closePath?0:2);for(let l=0;l<a;l+=2){const c=o[l],u=o[l+1],h=o[(l+2)%o.length],f=o[(l+3)%o.length];if(Kc(e,t,c,u,h,f)<=s)return!0}return!1}getBounds(e){e=e||new ne;const t=this.points;let r=1/0,i=-1/0,s=1/0,o=-1/0;for(let a=0,l=t.length;a<l;a+=2){const c=t[a],u=t[a+1];r=c<r?c:r,i=c>i?c:i,s=u<s?u:s,o=u>o?u:o}return e.x=r,e.width=i-r,e.y=s,e.height=o-s,e}copyFrom(e){return this.points=e.points.slice(),this.closePath=e.closePath,this}copyTo(e){return e.copyFrom(this),e}toString(){return`[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((e,t)=>`${e}, ${t}`,"")}]`}get lastX(){return this.points[this.points.length-2]}get lastY(){return this.points[this.points.length-1]}get x(){return this.points[this.points.length-2]}get y(){return this.points[this.points.length-1]}}const fn=(n,e,t,r,i,s)=>{const o=n-t,a=e-r,l=Math.sqrt(o*o+a*a);return l>=i-s&&l<=i+s};class wi{constructor(e=0,t=0,r=0,i=0,s=20){this.type="roundedRectangle",this.x=e,this.y=t,this.width=r,this.height=i,this.radius=s}getBounds(e){return e=e||new ne,e.x=this.x,e.y=this.y,e.width=this.width,e.height=this.height,e}clone(){return new wi(this.x,this.y,this.width,this.height,this.radius)}copyFrom(e){return this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this}copyTo(e){return e.copyFrom(this),e}contains(e,t){if(this.width<=0||this.height<=0)return!1;if(e>=this.x&&e<=this.x+this.width&&t>=this.y&&t<=this.y+this.height){const r=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(t>=this.y+r&&t<=this.y+this.height-r||e>=this.x+r&&e<=this.x+this.width-r)return!0;let i=e-(this.x+r),s=t-(this.y+r);const o=r*r;if(i*i+s*s<=o||(i=e-(this.x+this.width-r),i*i+s*s<=o)||(s=t-(this.y+this.height-r),i*i+s*s<=o)||(i=e-(this.x+r),i*i+s*s<=o))return!0}return!1}strokeContains(e,t,r){const{x:i,y:s,width:o,height:a,radius:l}=this,c=r/2,u=i+l,h=s+l,f=o-l*2,p=a-l*2,m=i+o,g=s+a;return(e>=i-c&&e<=i+c||e>=m-c&&e<=m+c)&&t>=h&&t<=h+p||(t>=s-c&&t<=s+c||t>=g-c&&t<=g+c)&&e>=u&&e<=u+f?!0:e<u&&t<h&&fn(e,t,u,h,l,c)||e>m-l&&t<h&&fn(e,t,m-l,h,l,c)||e>m-l&&t>g-l&&fn(e,t,m-l,g-l,l,c)||e<u&&t>g-l&&fn(e,t,u,g-l,l,c)}toString(){return`[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`}}var fe=(n=>(n[n.MAP_READ=1]="MAP_READ",n[n.MAP_WRITE=2]="MAP_WRITE",n[n.COPY_SRC=4]="COPY_SRC",n[n.COPY_DST=8]="COPY_DST",n[n.INDEX=16]="INDEX",n[n.VERTEX=32]="VERTEX",n[n.UNIFORM=64]="UNIFORM",n[n.STORAGE=128]="STORAGE",n[n.INDIRECT=256]="INDIRECT",n[n.QUERY_RESOLVE=512]="QUERY_RESOLVE",n[n.STATIC=1024]="STATIC",n))(fe||{});class qt extends we{constructor(e){let{data:t,size:r}=e;const{usage:i,label:s,shrinkToFit:o}=e;super(),this.uid=re("buffer"),this._resourceType="buffer",this._resourceId=re("resource"),this._touched=0,this._updateID=1,this.shrinkToFit=!0,this.destroyed=!1,t instanceof Array&&(t=new Float32Array(t)),this._data=t,r=r??(t==null?void 0:t.byteLength);const a=!!t;this.descriptor={size:r,usage:i,mappedAtCreation:a,label:s},this.shrinkToFit=o??!0}get data(){return this._data}set data(e){this.setDataWithSize(e,e.length,!0)}get static(){return!!(this.descriptor.usage&fe.STATIC)}set static(e){e?this.descriptor.usage|=fe.STATIC:this.descriptor.usage&=~fe.STATIC}setDataWithSize(e,t,r){if(this._updateID++,this._updateSize=t*e.BYTES_PER_ELEMENT,this._data===e){r&&this.emit("update",this);return}const i=this._data;if(this._data=e,i.length!==e.length){!this.shrinkToFit&&e.byteLength<i.byteLength?r&&this.emit("update",this):(this.descriptor.size=e.byteLength,this._resourceId=re("resource"),this.emit("change",this));return}r&&this.emit("update",this)}update(e){this._updateSize=e??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function aa(n,e){if(!(n instanceof qt)){let t=e?fe.INDEX:fe.VERTEX;n instanceof Array&&(e?(n=new Uint32Array(n),t=fe.INDEX|fe.COPY_DST):(n=new Float32Array(n),t=fe.VERTEX|fe.COPY_DST)),n=new qt({data:n,label:e?"index-mesh-buffer":"vertex-mesh-buffer",usage:t})}return n}function Zc(n,e,t){const r=n.getAttribute(e);if(!r)return t.minX=0,t.minY=0,t.maxX=0,t.maxY=0,t;const i=r.buffer.data;let s=1/0,o=1/0,a=-1/0,l=-1/0;const c=i.BYTES_PER_ELEMENT,u=(r.offset||0)/c,h=(r.stride||2*4)/c;for(let f=u;f<i.length;f+=h){const p=i[f],m=i[f+1];p>a&&(a=p),m>l&&(l=m),p<s&&(s=p),m<o&&(o=m)}return t.minX=s,t.minY=o,t.maxX=a,t.maxY=l,t}function Qc(n){return(n instanceof qt||Array.isArray(n)||n.BYTES_PER_ELEMENT)&&(n={buffer:n}),n.buffer=aa(n.buffer,!1),n}class Jc extends we{constructor(e){const{attributes:t,indexBuffer:r,topology:i}=e;super(),this.uid=re("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new Oe,this._boundsDirty=!0,this.attributes=t,this.buffers=[],this.instanceCount=e.instanceCount||1;for(const s in t){const o=t[s]=Qc(t[s]);this.buffers.indexOf(o.buffer)===-1&&(this.buffers.push(o.buffer),o.buffer.on("update",this.onBufferUpdate,this),o.buffer.on("change",this.onBufferUpdate,this))}r&&(this.indexBuffer=aa(r,!0),this.buffers.push(this.indexBuffer)),this.topology=i||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(e){return this.attributes[e]}getIndex(){return this.indexBuffer}getBuffer(e){return this.getAttribute(e).buffer}getSize(){for(const e in this.attributes){const t=this.attributes[e];return t.buffer.data.length/(t.stride/4||t.size)}return 0}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,Zc(this,"aPosition",this._bounds)):this._bounds}destroy(e=!1){this.emit("destroy",this),this.removeAllListeners(),e&&this.buffers.forEach(t=>t.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}const eh=new Float32Array(1),th=new Uint32Array(1);class nh extends Jc{constructor(){const t=new qt({data:eh,label:"attribute-batch-buffer",usage:fe.VERTEX|fe.COPY_DST,shrinkToFit:!1}),r=new qt({data:th,label:"index-batch-buffer",usage:fe.INDEX|fe.COPY_DST,shrinkToFit:!1}),i=6*4;super({attributes:{aPosition:{buffer:t,format:"float32x2",stride:i,offset:0,location:1},aUV:{buffer:t,format:"float32x2",stride:i,offset:2*4,location:3},aColor:{buffer:t,format:"unorm8x4",stride:i,offset:4*4,location:0},aTextureIdAndRound:{buffer:t,format:"uint16x2",stride:i,offset:5*4,location:2}},indexBuffer:r})}}const rh=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function ih(n){let e="";for(let t=0;t<n;++t)t>0&&(e+=`
else `),t<n-1&&(e+=`if(test == ${t}.0){}`);return e}function sh(n,e){if(n===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");const t=e.createShader(e.FRAGMENT_SHADER);for(;;){const r=rh.replace(/%forloop%/gi,ih(n));if(e.shaderSource(t,r),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS))n=n/2|0;else break}return n}let lt=null;function la(){if(lt)return lt;const n=Go();return lt=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),lt=sh(lt,n),lt}const ua={};function oh(n,e){let t=0;for(let r=0;r<e;r++)t=t*31+n[r].uid>>>0;return ua[t]||ah(n,t)}let br=0;function ah(n,e){const t={};let r=0;br||(br=la());for(let s=0;s<br;s++){const o=s<n.length?n[s]:U.EMPTY.source;t[r++]=o.source,t[r++]=o.style}const i=new _n(t);return ua[e]=i,i}class bs{constructor(e){typeof e=="number"?this.rawBinaryData=new ArrayBuffer(e):e instanceof Uint8Array?this.rawBinaryData=e.buffer:this.rawBinaryData=e,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(e){return this[`${e}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(e){switch(e){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${e} isn't a valid view type`)}}}function Ss(n,e){const t=n.byteLength/8|0,r=new Float64Array(n,0,t);new Float64Array(e,0,t).set(r);const s=n.byteLength-t*8;if(s>0){const o=new Uint8Array(n,t*8,s);new Uint8Array(e,t*8,s).set(o)}}const lh={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var uh=(n=>(n[n.DISABLED=0]="DISABLED",n[n.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",n[n.MASK_ACTIVE=2]="MASK_ACTIVE",n[n.RENDERING_MASK_REMOVE=3]="RENDERING_MASK_REMOVE",n[n.NONE=4]="NONE",n))(uh||{});function Cs(n,e){return e.alphaMode==="no-premultiply-alpha"&&lh[n]||n}class ws{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let e=0;e<this.count;e++){const t=this.textures[e];this.textures[e]=null,this.ids[t.uid]=null}this.count=0}}class As{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.blendMode="normal",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null}}let Et=0;const ca=class ha{constructor(e={}){this.uid=re("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._vertexSize=6,this._elements=[],this._batchPool=[],this._batchPoolIndex=0,this._textureBatchPool=[],this._textureBatchPoolIndex=0,e={...ha.defaultOptions,...e};const{vertexSize:t,indexSize:r}=e;this.attributeBuffer=new bs(t*this._vertexSize*4),this.indexBuffer=new Uint16Array(r),this._maxTextures=la()}begin(){this.batchIndex=0,this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0,this._batchPoolIndex=0,this._textureBatchPoolIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(e){this._elements[this.elementSize++]=e,e.indexStart=this.indexSize,e.location=this.attributeSize,e.batcher=this,this.indexSize+=e.indexSize,this.attributeSize+=e.vertexSize*this._vertexSize}checkAndUpdateTexture(e,t){const r=e.batch.textures.ids[t._source.uid];return!r&&r!==0?!1:(e.textureId=r,e.texture=t,!0)}updateElement(e){this.dirty=!0,e.packAttributes(this.attributeBuffer.float32View,this.attributeBuffer.uint32View,e.location,e.textureId)}break(e){const t=this._elements;let r=this._textureBatchPool[this._textureBatchPoolIndex++]||new ws;if(r.clear(),!t[this.elementStart])return;const i=t[this.elementStart];let s=Cs(i.blendMode,i.texture._source);this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const o=this.attributeBuffer.float32View,a=this.attributeBuffer.uint32View,l=this.indexBuffer;let c=this._batchIndexSize,u=this._batchIndexStart,h="startBatch",f=this._batchPool[this._batchPoolIndex++]||new As;const p=this._maxTextures;for(let m=this.elementStart;m<this.elementSize;++m){const g=t[m];t[m]=null;const v=g.texture._source,x=Cs(g.blendMode,v),y=s!==x;if(v._batchTick===Et&&!y){g.textureId=v._textureBindLocation,c+=g.indexSize,g.packAttributes(o,a,g.location,g.textureId),g.packIndex(l,g.indexStart,g.location/this._vertexSize),g.batch=f;continue}v._batchTick=Et,(r.count>=p||y)&&(this._finishBatch(f,u,c-u,r,s,e,h),h="renderBatch",u=c,s=x,r=this._textureBatchPool[this._textureBatchPoolIndex++]||new ws,r.clear(),f=this._batchPool[this._batchPoolIndex++]||new As,++Et),g.textureId=v._textureBindLocation=r.count,r.ids[v.uid]=r.count,r.textures[r.count++]=v,g.batch=f,c+=g.indexSize,g.packAttributes(o,a,g.location,g.textureId),g.packIndex(l,g.indexStart,g.location/this._vertexSize)}r.count>0&&(this._finishBatch(f,u,c-u,r,s,e,h),u=c,++Et),this.elementStart=this.elementSize,this._batchIndexStart=u,this._batchIndexSize=c}_finishBatch(e,t,r,i,s,o,a){e.gpuBindGroup=null,e.action=a,e.batcher=this,e.textures=i,e.blendMode=s,e.start=t,e.size=r,++Et,o.add(e)}finish(e){this.break(e)}ensureAttributeBuffer(e){e*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(e*4)}ensureIndexBuffer(e){e<=this.indexBuffer.length||this._resizeIndexBuffer(e)}_resizeAttributeBuffer(e){const t=Math.max(e,this.attributeBuffer.size*2),r=new bs(t);Ss(this.attributeBuffer.rawBinaryData,r.rawBinaryData),this.attributeBuffer=r}_resizeIndexBuffer(e){const t=this.indexBuffer;let r=Math.max(e,t.length*1.5);r+=r%2;const i=r>65535?new Uint32Array(r):new Uint16Array(r);if(i.BYTES_PER_ELEMENT!==t.BYTES_PER_ELEMENT)for(let s=0;s<t.length;s++)i[s]=t[s];else Ss(t.buffer,i.buffer);this.indexBuffer=i}destroy(){for(let e=0;e<this.batches.length;e++)this.batches[e].destroy();this.batches=null;for(let e=0;e<this._elements.length;e++)this._elements[e].batch=null;this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}};ca.defaultOptions={vertexSize:4,indexSize:6};let ch=ca;function hh(n,e,t,r,i,s,o,a=null){let l=0;t*=e,i*=s;const c=a.a,u=a.b,h=a.c,f=a.d,p=a.tx,m=a.ty;for(;l<o;){const g=n[t],d=n[t+1];r[i]=c*g+h*d+p,r[i+1]=u*g+f*d+m,i+=s,t+=e,l++}}function fh(n,e,t,r){let i=0;for(e*=t;i<r;)n[e]=0,n[e+1]=0,e+=t,i++}function fa(n,e,t,r,i){const s=e.a,o=e.b,a=e.c,l=e.d,c=e.tx,u=e.ty;t=t||0,r=r||2,i=i||n.length/r-t;let h=t*r;for(let f=0;f<i;f++){const p=n[h],m=n[h+1];n[h]=s*p+a*m+c,n[h+1]=o*p+l*m+u,h+=r}}function dh(n,e){if(n===16777215||!e)return e;if(e===16777215||!n)return n;const t=n>>16&255,r=n>>8&255,i=n&255,s=e>>16&255,o=e>>8&255,a=e&255,l=t*s/255,c=r*o/255,u=i*a/255;return(l<<16)+(c<<8)+u}class da{constructor(){this.batcher=null,this.batch=null,this.applyTransform=!0,this.roundPixels=0}get blendMode(){return this.applyTransform?this.renderable.groupBlendMode:"normal"}packIndex(e,t,r){const i=this.geometryData.indices;for(let s=0;s<this.indexSize;s++)e[t++]=i[s+this.indexOffset]+r-this.vertexOffset}packAttributes(e,t,r,i){const s=this.geometryData,o=this.renderable,a=s.vertices,l=s.uvs,c=this.vertexOffset*2,u=(this.vertexOffset+this.vertexSize)*2,h=this.color,f=h>>16|h&65280|(h&255)<<16;if(this.applyTransform){const p=dh(f,o.groupColor)+(this.alpha*o.groupAlpha*255<<24),m=o.groupTransform,g=i<<16|this.roundPixels&65535,d=m.a,v=m.b,x=m.c,y=m.d,_=m.tx,b=m.ty;for(let C=c;C<u;C+=2){const A=a[C],T=a[C+1];e[r]=d*A+x*T+_,e[r+1]=v*A+y*T+b,e[r+2]=l[C],e[r+3]=l[C+1],t[r+4]=p,t[r+5]=g,r+=6}}else{const p=f+(this.alpha*255<<24);for(let m=c;m<u;m+=2)e[r]=a[m],e[r+1]=a[m+1],e[r+2]=l[m],e[r+3]=l[m+1],t[r+4]=p,t[r+5]=i<<16,r+=6}}get vertSize(){return this.vertexSize}copyTo(e){e.indexOffset=this.indexOffset,e.indexSize=this.indexSize,e.vertexOffset=this.vertexOffset,e.vertexSize=this.vertexSize,e.color=this.color,e.alpha=this.alpha,e.texture=this.texture,e.geometryData=this.geometryData}reset(){this.applyTransform=!0}}const Kt={extension:{type:E.ShapeBuilder,name:"circle"},build(n,e){let t,r,i,s,o,a;if(n.type==="circle"){const _=n;t=_.x,r=_.y,o=a=_.radius,i=s=0}else if(n.type==="ellipse"){const _=n;t=_.x,r=_.y,o=_.halfWidth,a=_.halfHeight,i=s=0}else{const _=n,b=_.width/2,C=_.height/2;t=_.x+b,r=_.y+C,o=a=Math.max(0,Math.min(_.radius,Math.min(b,C))),i=b-o,s=C-a}if(!(o>=0&&a>=0&&i>=0&&s>=0))return e;const l=Math.ceil(2.3*Math.sqrt(o+a)),c=l*8+(i?4:0)+(s?4:0);if(c===0)return e;if(l===0)return e[0]=e[6]=t+i,e[1]=e[3]=r+s,e[2]=e[4]=t-i,e[5]=e[7]=r-s,e;let u=0,h=l*4+(i?2:0)+2,f=h,p=c,m=i+o,g=s,d=t+m,v=t-m,x=r+g;if(e[u++]=d,e[u++]=x,e[--h]=x,e[--h]=v,s){const _=r-g;e[f++]=v,e[f++]=_,e[--p]=_,e[--p]=d}for(let _=1;_<l;_++){const b=Math.PI/2*(_/l),C=i+Math.cos(b)*o,A=s+Math.sin(b)*a,T=t+C,w=t-C,S=r+A,B=r-A;e[u++]=T,e[u++]=S,e[--h]=S,e[--h]=w,e[f++]=w,e[f++]=B,e[--p]=B,e[--p]=T}m=i,g=s+a,d=t+m,v=t-m,x=r+g;const y=r-g;return e[u++]=d,e[u++]=x,e[--p]=y,e[--p]=d,i&&(e[u++]=v,e[u++]=x,e[--p]=y,e[--p]=v),e},triangulate(n,e,t,r,i,s){if(n.length===0)return;let o=0,a=0;for(let u=0;u<n.length;u+=2)o+=n[u],a+=n[u+1];o/=n.length/2,a/=n.length/2;let l=r;e[l*t]=o,e[l*t+1]=a;const c=l++;for(let u=0;u<n.length;u+=2)e[l*t]=n[u],e[l*t+1]=n[u+1],u>0&&(i[s++]=l,i[s++]=c,i[s++]=l-1),l++;i[s++]=c+1,i[s++]=c,i[s++]=l-1}},ph={...Kt,extension:{...Kt.extension,name:"ellipse"}},mh={...Kt,extension:{...Kt.extension,name:"roundedRectangle"}},gh=1e-4,Ts=1e-4;function vh(n){const e=n.length;if(e<6)return 1;let t=0;for(let r=0,i=n[e-2],s=n[e-1];r<e;r+=2){const o=n[r],a=n[r+1];t+=(o-i)*(a+s),i=o,s=a}return t<0?-1:1}function Ps(n,e,t,r,i,s,o,a){const l=n-t*i,c=e-r*i,u=n+t*s,h=e+r*s;let f,p;o?(f=r,p=-t):(f=-r,p=t);const m=l+f,g=c+p,d=u+f,v=h+p;return a.push(m,g),a.push(d,v),2}function Xe(n,e,t,r,i,s,o,a){const l=t-n,c=r-e;let u=Math.atan2(l,c),h=Math.atan2(i-n,s-e);a&&u<h?u+=Math.PI*2:!a&&u>h&&(h+=Math.PI*2);let f=u;const p=h-u,m=Math.abs(p),g=Math.sqrt(l*l+c*c),d=(15*m*Math.sqrt(g)/Math.PI>>0)+1,v=p/d;if(f+=v,a){o.push(n,e),o.push(t,r);for(let x=1,y=f;x<d;x++,y+=v)o.push(n,e),o.push(n+Math.sin(y)*g,e+Math.cos(y)*g);o.push(n,e),o.push(i,s)}else{o.push(t,r),o.push(n,e);for(let x=1,y=f;x<d;x++,y+=v)o.push(n+Math.sin(y)*g,e+Math.cos(y)*g),o.push(n,e);o.push(i,s),o.push(n,e)}return d*2}function xh(n,e,t,r,i,s,o,a,l){const c=gh;if(n.length===0)return;const u=e;let h=u.alignment;if(e.alignment!==.5){let Y=vh(n);h=(h-.5)*Y+.5}const f=new le(n[0],n[1]),p=new le(n[n.length-2],n[n.length-1]),m=r,g=Math.abs(f.x-p.x)<c&&Math.abs(f.y-p.y)<c;if(m){n=n.slice(),g&&(n.pop(),n.pop(),p.set(n[n.length-2],n[n.length-1]));const Y=(f.x+p.x)*.5,he=(p.y+f.y)*.5;n.unshift(Y,he),n.push(Y,he)}const d=i,v=n.length/2;let x=n.length;const y=d.length/2,_=u.width/2,b=_*_,C=u.miterLimit*u.miterLimit;let A=n[0],T=n[1],w=n[2],S=n[3],B=0,ae=0,I=-(T-S),F=A-w,N=0,q=0,M=Math.sqrt(I*I+F*F);I/=M,F/=M,I*=_,F*=_;const L=h,P=(1-L)*2,R=L*2;m||(u.cap==="round"?x+=Xe(A-I*(P-R)*.5,T-F*(P-R)*.5,A-I*P,T-F*P,A+I*R,T+F*R,d,!0)+2:u.cap==="square"&&(x+=Ps(A,T,I,F,P,R,!0,d))),d.push(A-I*P,T-F*P),d.push(A+I*R,T+F*R);for(let Y=1;Y<v-1;++Y){A=n[(Y-1)*2],T=n[(Y-1)*2+1],w=n[Y*2],S=n[Y*2+1],B=n[(Y+1)*2],ae=n[(Y+1)*2+1],I=-(T-S),F=A-w,M=Math.sqrt(I*I+F*F),I/=M,F/=M,I*=_,F*=_,N=-(S-ae),q=w-B,M=Math.sqrt(N*N+q*q),N/=M,q/=M,N*=_,q*=_;const he=w-A,Le=T-S,ke=w-B,We=ae-S,Yi=he*ke+Le*We,Jt=Le*ke-We*he,zt=Jt<0;if(Math.abs(Jt)<.001*Math.abs(Yi)){d.push(w-I*P,S-F*P),d.push(w+I*R,S+F*R),Yi>=0&&(u.join==="round"?x+=Xe(w,S,w-I*P,S-F*P,w-N*P,S-q*P,d,!1)+4:x+=2,d.push(w-N*R,S-q*R),d.push(w+N*P,S+q*P));continue}const qi=(-I+A)*(-F+S)-(-I+w)*(-F+T),Ki=(-N+B)*(-q+S)-(-N+w)*(-q+ae),en=(he*Ki-ke*qi)/Jt,tn=(We*qi-Le*Ki)/Jt,Kn=(en-w)*(en-w)+(tn-S)*(tn-S),$e=w+(en-w)*P,Ve=S+(tn-S)*P,He=w-(en-w)*R,je=S-(tn-S)*R,Jl=Math.min(he*he+Le*Le,ke*ke+We*We),Zi=zt?P:R,eu=Jl+Zi*Zi*b;Kn<=eu?u.join==="bevel"||Kn/b>C?(zt?(d.push($e,Ve),d.push(w+I*R,S+F*R),d.push($e,Ve),d.push(w+N*R,S+q*R)):(d.push(w-I*P,S-F*P),d.push(He,je),d.push(w-N*P,S-q*P),d.push(He,je)),x+=2):u.join==="round"?zt?(d.push($e,Ve),d.push(w+I*R,S+F*R),x+=Xe(w,S,w+I*R,S+F*R,w+N*R,S+q*R,d,!0)+4,d.push($e,Ve),d.push(w+N*R,S+q*R)):(d.push(w-I*P,S-F*P),d.push(He,je),x+=Xe(w,S,w-I*P,S-F*P,w-N*P,S-q*P,d,!1)+4,d.push(w-N*P,S-q*P),d.push(He,je)):(d.push($e,Ve),d.push(He,je)):(d.push(w-I*P,S-F*P),d.push(w+I*R,S+F*R),u.join==="round"?zt?x+=Xe(w,S,w+I*R,S+F*R,w+N*R,S+q*R,d,!0)+2:x+=Xe(w,S,w-I*P,S-F*P,w-N*P,S-q*P,d,!1)+2:u.join==="miter"&&Kn/b<=C&&(zt?(d.push(He,je),d.push(He,je)):(d.push($e,Ve),d.push($e,Ve)),x+=2),d.push(w-N*P,S-q*P),d.push(w+N*R,S+q*R),x+=2)}A=n[(v-2)*2],T=n[(v-2)*2+1],w=n[(v-1)*2],S=n[(v-1)*2+1],I=-(T-S),F=A-w,M=Math.sqrt(I*I+F*F),I/=M,F/=M,I*=_,F*=_,d.push(w-I*P,S-F*P),d.push(w+I*R,S+F*R),m||(u.cap==="round"?x+=Xe(w-I*(P-R)*.5,S-F*(P-R)*.5,w-I*P,S-F*P,w+I*R,S+F*R,d,!1)+2:u.cap==="square"&&(x+=Ps(w,S,I,F,P,R,!1,d)));const Ge=Ts*Ts;for(let Y=y;Y<x+y-2;++Y)A=d[Y*2],T=d[Y*2+1],w=d[(Y+1)*2],S=d[(Y+1)*2+1],B=d[(Y+2)*2],ae=d[(Y+2)*2+1],!(Math.abs(A*(S-ae)+w*(ae-T)+B*(T-S))<Ge)&&a.push(Y,Y+1,Y+2)}function pa(n,e,t,r,i,s,o){const a=Uc(n,e,2);if(!a)return;for(let c=0;c<a.length;c+=3)s[o++]=a[c]+i,s[o++]=a[c+1]+i,s[o++]=a[c+2]+i;let l=i*r;for(let c=0;c<n.length;c+=2)t[l]=n[c],t[l+1]=n[c+1],l+=r}const yh=[],_h={extension:{type:E.ShapeBuilder,name:"polygon"},build(n,e){for(let t=0;t<n.points.length;t++)e[t]=n.points[t];return e},triangulate(n,e,t,r,i,s){pa(n,yh,e,t,r,i,s)}},bh={extension:{type:E.ShapeBuilder,name:"rectangle"},build(n,e){const t=n,r=t.x,i=t.y,s=t.width,o=t.height;return s>=0&&o>=0&&(e[0]=r,e[1]=i,e[2]=r+s,e[3]=i,e[4]=r+s,e[5]=i+o,e[6]=r,e[7]=i+o),e},triangulate(n,e,t,r,i,s){let o=0;r*=t,e[r+o]=n[0],e[r+o+1]=n[1],o+=t,e[r+o]=n[2],e[r+o+1]=n[3],o+=t,e[r+o]=n[6],e[r+o+1]=n[7],o+=t,e[r+o]=n[4],e[r+o+1]=n[5],o+=t;const a=r/t;i[s++]=a,i[s++]=a+1,i[s++]=a+2,i[s++]=a+1,i[s++]=a+3,i[s++]=a+2}},Sh={extension:{type:E.ShapeBuilder,name:"triangle"},build(n,e){return e[0]=n.x,e[1]=n.y,e[2]=n.x2,e[3]=n.y2,e[4]=n.x3,e[5]=n.y3,e},triangulate(n,e,t,r,i,s){let o=0;r*=t,e[r+o]=n[0],e[r+o+1]=n[1],o+=t,e[r+o]=n[2],e[r+o+1]=n[3],o+=t,e[r+o]=n[4],e[r+o+1]=n[5];const a=r/t;i[s++]=a,i[s++]=a+1,i[s++]=a+2}},Vn={};ce.handleByMap(E.ShapeBuilder,Vn);ce.add(bh,_h,Sh,Kt,ph,mh);const Ch=new ne;function wh(n,e){const{geometryData:t,batches:r}=e;r.length=0,t.indices.length=0,t.vertices.length=0,t.uvs.length=0;for(let i=0;i<n.instructions.length;i++){const s=n.instructions[i];if(s.action==="texture")Ah(s.data,r,t);else if(s.action==="fill"||s.action==="stroke"){const o=s.action==="stroke",a=s.data.path.shapePath,l=s.data.style,c=s.data.hole;o&&c&&Ms(c.shapePath,l,null,!0,r,t),Ms(a,l,c,o,r,t)}}}function Ah(n,e,t){const{vertices:r,uvs:i,indices:s}=t,o=s.length,a=r.length/2,l=[],c=Vn.rectangle,u=Ch,h=n.image;u.x=n.dx,u.y=n.dy,u.width=n.dw,u.height=n.dh;const f=n.transform;c.build(u,l),f&&fa(l,f),c.triangulate(l,r,2,a,s,o);const p=h.uvs;i.push(p.x0,p.y0,p.x1,p.y1,p.x3,p.y3,p.x2,p.y2);const m=be.get(da);m.indexOffset=o,m.indexSize=s.length-o,m.vertexOffset=a,m.vertexSize=r.length/2-a,m.color=n.style,m.alpha=n.alpha,m.texture=h,m.geometryData=t,e.push(m)}function Ms(n,e,t,r,i,s){const{vertices:o,uvs:a,indices:l}=s,c=n.shapePrimitives.length-1;n.shapePrimitives.forEach(({shape:u,transform:h},f)=>{const p=l.length,m=o.length/2,g=[],d=Vn[u.type];if(d.build(u,g),h&&fa(g,h),r){const _=u.closePath??!0;xh(g,e,!1,_,o,2,m,l)}else if(t&&c===f){c!==0&&console.warn("[Pixi Graphics] only the last shape have be cut out");const _=[],b=g.slice();Th(t.shapePath).forEach(A=>{_.push(b.length/2),b.push(...A)}),pa(b,_,o,2,m,l,p)}else d.triangulate(g,o,2,m,l,p);const v=a.length/2,x=e.texture;if(x!==U.WHITE){const _=e.matrix;_&&(h&&_.append(h.clone().invert()),hh(o,2,m,a,v,2,o.length/2-m,_))}else fh(a,v,2,o.length/2-m);const y=be.get(da);y.indexOffset=p,y.indexSize=l.length-p,y.vertexOffset=m,y.vertexSize=o.length/2-m,y.color=e.color,y.alpha=e.alpha,y.texture=x,y.geometryData=s,i.push(y)})}function Th(n){if(!n)return[];const e=n.shapePrimitives,t=[];for(let r=0;r<e.length;r++){const i=e[r].shape,s=[];Vn[i.type].build(i,s),t.push(s)}return t}class Ph{constructor(){this.batches=[],this.geometryData={vertices:[],uvs:[],indices:[]}}}class Mh{constructor(){this.geometry=new nh,this.instructions=new To}init(){this.instructions.reset()}}const Ai=class Jr{constructor(){this._activeBatchers=[],this._gpuContextHash={},this._graphicsDataContextHash=Object.create(null)}init(e){Jr.defaultOptions.bezierSmoothness=(e==null?void 0:e.bezierSmoothness)??Jr.defaultOptions.bezierSmoothness}prerender(){this._returnActiveBatchers()}getContextRenderData(e){return this._graphicsDataContextHash[e.uid]||this._initContextRenderData(e)}updateGpuContext(e){let t=this._gpuContextHash[e.uid]||this._initContext(e);if(e.dirty){t?this._cleanGraphicsContextData(e):t=this._initContext(e),wh(e,t);const r=e.batchMode;e.customShader||r==="no-batch"?t.isBatchable=!1:r==="auto"&&(t.isBatchable=t.geometryData.vertices.length<400),e.dirty=!1}return t}getGpuContext(e){return this._gpuContextHash[e.uid]||this._initContext(e)}_returnActiveBatchers(){for(let e=0;e<this._activeBatchers.length;e++)be.return(this._activeBatchers[e]);this._activeBatchers.length=0}_initContextRenderData(e){const t=be.get(Mh),{batches:r,geometryData:i}=this._gpuContextHash[e.uid],s=i.vertices.length,o=i.indices.length;for(let u=0;u<r.length;u++)r[u].applyTransform=!1;const a=be.get(ch);this._activeBatchers.push(a),a.ensureAttributeBuffer(s),a.ensureIndexBuffer(o),a.begin();for(let u=0;u<r.length;u++){const h=r[u];a.add(h)}a.finish(t.instructions);const l=t.geometry;l.indexBuffer.setDataWithSize(a.indexBuffer,a.indexSize,!0),l.buffers[0].setDataWithSize(a.attributeBuffer.float32View,a.attributeSize,!0);const c=a.batches;for(let u=0;u<c.length;u++){const h=c[u];h.bindGroup=oh(h.textures.textures,h.textures.count)}return this._graphicsDataContextHash[e.uid]=t,t}_initContext(e){const t=new Ph;return t.context=e,this._gpuContextHash[e.uid]=t,e.on("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[e.uid]}onGraphicsContextDestroy(e){this._cleanGraphicsContextData(e),e.off("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[e.uid]=null}_cleanGraphicsContextData(e){const t=this._gpuContextHash[e.uid];t.isBatchable||this._graphicsDataContextHash[e.uid]&&(be.return(this.getContextRenderData(e)),this._graphicsDataContextHash[e.uid]=null),t.batches&&t.batches.forEach(r=>{be.return(r)})}destroy(){for(const e in this._gpuContextHash)this._gpuContextHash[e]&&this.onGraphicsContextDestroy(this._gpuContextHash[e].context)}};Ai.extension={type:[E.WebGLSystem,E.WebGPUSystem,E.CanvasSystem],name:"graphicsContext"};Ai.defaultOptions={bezierSmoothness:.5};let ma=Ai;const Fh=8,dn=11920929e-14,Ih=1;function ga(n,e,t,r,i,s,o,a,l,c){const h=Math.min(.99,Math.max(0,c??ma.defaultOptions.bezierSmoothness));let f=(Ih-h)/1;return f*=f,zh(e,t,r,i,s,o,a,l,n,f),n}function zh(n,e,t,r,i,s,o,a,l,c){ei(n,e,t,r,i,s,o,a,l,c,0),l.push(o,a)}function ei(n,e,t,r,i,s,o,a,l,c,u){if(u>Fh)return;const h=(n+t)/2,f=(e+r)/2,p=(t+i)/2,m=(r+s)/2,g=(i+o)/2,d=(s+a)/2,v=(h+p)/2,x=(f+m)/2,y=(p+g)/2,_=(m+d)/2,b=(v+y)/2,C=(x+_)/2;if(u>0){let A=o-n,T=a-e;const w=Math.abs((t-o)*T-(r-a)*A),S=Math.abs((i-o)*T-(s-a)*A);if(w>dn&&S>dn){if((w+S)*(w+S)<=c*(A*A+T*T)){l.push(b,C);return}}else if(w>dn){if(w*w<=c*(A*A+T*T)){l.push(b,C);return}}else if(S>dn){if(S*S<=c*(A*A+T*T)){l.push(b,C);return}}else if(A=b-(n+o)/2,T=C-(e+a)/2,A*A+T*T<=c){l.push(b,C);return}}ei(n,e,h,f,v,x,b,C,l,c,u+1),ei(b,C,y,_,g,d,o,a,l,c,u+1)}const Oh=8,kh=11920929e-14,Eh=1;function Rh(n,e,t,r,i,s,o,a){const c=Math.min(.99,Math.max(0,a??ma.defaultOptions.bezierSmoothness));let u=(Eh-c)/1;return u*=u,Uh(e,t,r,i,s,o,n,u),n}function Uh(n,e,t,r,i,s,o,a){ti(o,n,e,t,r,i,s,a,0),o.push(i,s)}function ti(n,e,t,r,i,s,o,a,l){if(l>Oh)return;const c=(e+r)/2,u=(t+i)/2,h=(r+s)/2,f=(i+o)/2,p=(c+h)/2,m=(u+f)/2;let g=s-e,d=o-t;const v=Math.abs((r-s)*d-(i-o)*g);if(v>kh){if(v*v<=a*(g*g+d*d)){n.push(p,m);return}}else if(g=p-(e+s)/2,d=m-(t+o)/2,g*g+d*d<=a){n.push(p,m);return}ti(n,e,t,c,u,p,m,a,l+1),ti(n,p,m,h,f,s,o,a,l+1)}function va(n,e,t,r,i,s,o,a){let l=Math.abs(i-s);(!o&&i>s||o&&s>i)&&(l=2*Math.PI-l),a=a||Math.max(6,Math.floor(6*Math.pow(r,1/3)*(l/Math.PI))),a=Math.max(a,3);let c=l/a,u=i;c*=o?-1:1;for(let h=0;h<a+1;h++){const f=Math.cos(u),p=Math.sin(u),m=e+f*r,g=t+p*r;n.push(m,g),u+=c}}function Bh(n,e,t,r,i,s){const o=n[n.length-2],l=n[n.length-1]-t,c=o-e,u=i-t,h=r-e,f=Math.abs(l*h-c*u);if(f<1e-8||s===0){(n[n.length-2]!==e||n[n.length-1]!==t)&&n.push(e,t);return}const p=l*l+c*c,m=u*u+h*h,g=l*u+c*h,d=s*Math.sqrt(p)/f,v=s*Math.sqrt(m)/f,x=d*g/p,y=v*g/m,_=d*h+v*c,b=d*u+v*l,C=c*(v+x),A=l*(v+x),T=h*(d+y),w=u*(d+y),S=Math.atan2(A-b,C-_),B=Math.atan2(w-b,T-_);va(n,_+e,b+t,s,S,B,c*u>h*l)}const $t=Math.PI*2,Sr={centerX:0,centerY:0,ang1:0,ang2:0},Cr=({x:n,y:e},t,r,i,s,o,a,l)=>{n*=t,e*=r;const c=i*n-s*e,u=s*n+i*e;return l.x=c+o,l.y=u+a,l};function Dh(n,e){const t=e===-1.5707963267948966?-.551915024494:1.3333333333333333*Math.tan(e/4),r=e===1.5707963267948966?.551915024494:t,i=Math.cos(n),s=Math.sin(n),o=Math.cos(n+e),a=Math.sin(n+e);return[{x:i-s*r,y:s+i*r},{x:o+a*r,y:a-o*r},{x:o,y:a}]}const Fs=(n,e,t,r)=>{const i=n*r-e*t<0?-1:1;let s=n*t+e*r;return s>1&&(s=1),s<-1&&(s=-1),i*Math.acos(s)},Lh=(n,e,t,r,i,s,o,a,l,c,u,h,f)=>{const p=Math.pow(i,2),m=Math.pow(s,2),g=Math.pow(u,2),d=Math.pow(h,2);let v=p*m-p*d-m*g;v<0&&(v=0),v/=p*d+m*g,v=Math.sqrt(v)*(o===a?-1:1);const x=v*i/s*h,y=v*-s/i*u,_=c*x-l*y+(n+t)/2,b=l*x+c*y+(e+r)/2,C=(u-x)/i,A=(h-y)/s,T=(-u-x)/i,w=(-h-y)/s,S=Fs(1,0,C,A);let B=Fs(C,A,T,w);a===0&&B>0&&(B-=$t),a===1&&B<0&&(B+=$t),f.centerX=_,f.centerY=b,f.ang1=S,f.ang2=B};function Nh(n,e,t,r,i,s,o,a=0,l=0,c=0){if(s===0||o===0)return;const u=Math.sin(a*$t/360),h=Math.cos(a*$t/360),f=h*(e-r)/2+u*(t-i)/2,p=-u*(e-r)/2+h*(t-i)/2;if(f===0&&p===0)return;s=Math.abs(s),o=Math.abs(o);const m=Math.pow(f,2)/Math.pow(s,2)+Math.pow(p,2)/Math.pow(o,2);m>1&&(s*=Math.sqrt(m),o*=Math.sqrt(m)),Lh(e,t,r,i,s,o,l,c,u,h,f,p,Sr);let{ang1:g,ang2:d}=Sr;const{centerX:v,centerY:x}=Sr;let y=Math.abs(d)/($t/4);Math.abs(1-y)<1e-7&&(y=1);const _=Math.max(Math.ceil(y),1);d/=_;let b=n[n.length-2],C=n[n.length-1];const A={x:0,y:0};for(let T=0;T<_;T++){const w=Dh(g,d),{x:S,y:B}=Cr(w[0],s,o,h,u,v,x,A),{x:ae,y:I}=Cr(w[1],s,o,h,u,v,x,A),{x:F,y:N}=Cr(w[2],s,o,h,u,v,x,A);ga(n,b,C,S,B,ae,I,F,N),b=F,C=N,g+=d}}function Gh(n,e,t){const r=(o,a)=>{const l=a.x-o.x,c=a.y-o.y,u=Math.sqrt(l*l+c*c),h=l/u,f=c/u;return{len:u,nx:h,ny:f}},i=(o,a)=>{o===0?n.moveTo(a.x,a.y):n.lineTo(a.x,a.y)};let s=e[e.length-1];for(let o=0;o<e.length;o++){const a=e[o%e.length],l=a.radius??t;if(l<=0){i(o,a),s=a;continue}const c=e[(o+1)%e.length],u=r(a,s),h=r(a,c);if(u.len<1e-4||h.len<1e-4){i(o,a),s=a;continue}let f=Math.asin(u.nx*h.ny-u.ny*h.nx),p=1,m=!1;u.nx*h.nx-u.ny*-h.ny<0?f<0?f=Math.PI+f:(f=Math.PI-f,p=-1,m=!0):f>0&&(p=-1,m=!0);const g=f/2;let d,v=Math.abs(Math.cos(g)*l/Math.sin(g));v>Math.min(u.len/2,h.len/2)?(v=Math.min(u.len/2,h.len/2),d=Math.abs(v*Math.sin(g)/Math.cos(g))):d=l;const x=a.x+h.nx*v+-h.ny*d*p,y=a.y+h.ny*v+h.nx*d*p,_=Math.atan2(u.ny,u.nx)+Math.PI/2*p,b=Math.atan2(h.ny,h.nx)-Math.PI/2*p;o===0&&n.moveTo(x+Math.cos(_)*d,y+Math.sin(_)*d),n.arc(x,y,d,_,b,m),s=a}}function Wh(n,e,t,r){const i=(a,l)=>Math.sqrt((a.x-l.x)**2+(a.y-l.y)**2),s=(a,l,c)=>({x:a.x+(l.x-a.x)*c,y:a.y+(l.y-a.y)*c}),o=e.length;for(let a=0;a<o;a++){const l=e[(a+1)%o],c=l.radius??t;if(c<=0){a===0?n.moveTo(l.x,l.y):n.lineTo(l.x,l.y);continue}const u=e[a],h=e[(a+2)%o],f=i(u,l);let p;if(f<1e-4)p=l;else{const d=Math.min(f/2,c);p=s(l,u,d/f)}const m=i(h,l);let g;if(m<1e-4)g=l;else{const d=Math.min(m/2,c);g=s(l,h,d/m)}a===0?n.moveTo(p.x,p.y):n.lineTo(p.x,p.y),n.quadraticCurveTo(l.x,l.y,g.x,g.y,r)}}const $h=new ne;class Vh{constructor(e){this.shapePrimitives=[],this._currentPoly=null,this._bounds=new Oe,this._graphicsPath2D=e}moveTo(e,t){return this.startPoly(e,t),this}lineTo(e,t){this._ensurePoly();const r=this._currentPoly.points,i=r[r.length-2],s=r[r.length-1];return(i!==e||s!==t)&&r.push(e,t),this}arc(e,t,r,i,s,o){this._ensurePoly(!1);const a=this._currentPoly.points;return va(a,e,t,r,i,s,o),this}arcTo(e,t,r,i,s){this._ensurePoly();const o=this._currentPoly.points;return Bh(o,e,t,r,i,s),this}arcToSvg(e,t,r,i,s,o,a){const l=this._currentPoly.points;return Nh(l,this._currentPoly.lastX,this._currentPoly.lastY,o,a,e,t,r,i,s),this}bezierCurveTo(e,t,r,i,s,o,a){this._ensurePoly();const l=this._currentPoly;return ga(this._currentPoly.points,l.lastX,l.lastY,e,t,r,i,s,o,a),this}quadraticCurveTo(e,t,r,i,s){this._ensurePoly();const o=this._currentPoly;return Rh(this._currentPoly.points,o.lastX,o.lastY,e,t,r,i,s),this}closePath(){return this.endPoly(!0),this}addPath(e,t){this.endPoly(),t&&!t.isIdentity()&&(e=e.clone(!0),e.transform(t));for(let r=0;r<e.instructions.length;r++){const i=e.instructions[r];this[i.action](...i.data)}return this}finish(e=!1){this.endPoly(e)}rect(e,t,r,i,s){return this.drawShape(new ne(e,t,r,i),s),this}circle(e,t,r,i){return this.drawShape(new Si(e,t,r),i),this}poly(e,t,r){const i=new Wt(e);return i.closePath=t,this.drawShape(i,r),this}regularPoly(e,t,r,i,s=0,o){i=Math.max(i|0,3);const a=-1*Math.PI/2+s,l=Math.PI*2/i,c=[];for(let u=0;u<i;u++){const h=u*l+a;c.push(e+r*Math.cos(h),t+r*Math.sin(h))}return this.poly(c,!0,o),this}roundPoly(e,t,r,i,s,o=0,a){if(i=Math.max(i|0,3),s<=0)return this.regularPoly(e,t,r,i,o);const l=r*Math.sin(Math.PI/i)-.001;s=Math.min(s,l);const c=-1*Math.PI/2+o,u=Math.PI*2/i,h=(i-2)*Math.PI/i/2;for(let f=0;f<i;f++){const p=f*u+c,m=e+r*Math.cos(p),g=t+r*Math.sin(p),d=p+Math.PI+h,v=p-Math.PI-h,x=m+s*Math.cos(d),y=g+s*Math.sin(d),_=m+s*Math.cos(v),b=g+s*Math.sin(v);f===0?this.moveTo(x,y):this.lineTo(x,y),this.quadraticCurveTo(m,g,_,b,a)}return this.closePath()}roundShape(e,t,r=!1,i){return e.length<3?this:(r?Wh(this,e,t,i):Gh(this,e,t),this.closePath())}filletRect(e,t,r,i,s){if(s===0)return this.rect(e,t,r,i);const o=Math.min(r,i)/2,a=Math.min(o,Math.max(-o,s)),l=e+r,c=t+i,u=a<0?-a:0,h=Math.abs(a);return this.moveTo(e,t+h).arcTo(e+u,t+u,e+h,t,h).lineTo(l-h,t).arcTo(l-u,t+u,l,t+h,h).lineTo(l,c-h).arcTo(l-u,c-u,e+r-h,c,h).lineTo(e+h,c).arcTo(e+u,c-u,e,c-h,h).closePath()}chamferRect(e,t,r,i,s,o){if(s<=0)return this.rect(e,t,r,i);const a=Math.min(s,Math.min(r,i)/2),l=e+r,c=t+i,u=[e+a,t,l-a,t,l,t+a,l,c-a,l-a,c,e+a,c,e,c-a,e,t+a];for(let h=u.length-1;h>=2;h-=2)u[h]===u[h-2]&&u[h-1]===u[h-3]&&u.splice(h-1,2);return this.poly(u,!0,o)}ellipse(e,t,r,i,s){return this.drawShape(new Ci(e,t,r,i),s),this}roundRect(e,t,r,i,s,o){return this.drawShape(new wi(e,t,r,i,s),o),this}drawShape(e,t){return this.endPoly(),this.shapePrimitives.push({shape:e,transform:t}),this}startPoly(e,t){let r=this._currentPoly;return r&&this.endPoly(),r=new Wt,r.points.push(e,t),this._currentPoly=r,this}endPoly(e=!1){const t=this._currentPoly;return t&&t.points.length>2&&(t.closePath=e,this.shapePrimitives.push({shape:t})),this._currentPoly=null,this}_ensurePoly(e=!0){if(!this._currentPoly&&(this._currentPoly=new Wt,e)){const t=this.shapePrimitives[this.shapePrimitives.length-1];if(t){let r=t.shape.x,i=t.shape.y;if(!t.transform.isIdentity()){const s=t.transform,o=r;r=s.a*r+s.c*i+s.tx,i=s.b*o+s.d*i+s.ty}this._currentPoly.points.push(r,i)}else this._currentPoly.points.push(0,0)}}buildPath(){const e=this._graphicsPath2D;this.shapePrimitives.length=0,this._currentPoly=null;for(let t=0;t<e.instructions.length;t++){const r=e.instructions[t];this[r.action](...r.data)}this.finish()}get bounds(){const e=this._bounds;e.clear();const t=this.shapePrimitives;for(let r=0;r<t.length;r++){const i=t[r],s=i.shape.getBounds($h);i.transform?e.addRect(s,i.transform):e.addRect(s)}return e}}class St{constructor(e){this.instructions=[],this.uid=re("graphicsPath"),this._dirty=!0,typeof e=="string"?qc(e,this):this.instructions=(e==null?void 0:e.slice())??[]}get shapePath(){return this._shapePath||(this._shapePath=new Vh(this)),this._dirty&&(this._dirty=!1,this._shapePath.buildPath()),this._shapePath}addPath(e,t){return e=e.clone(),this.instructions.push({action:"addPath",data:[e,t]}),this._dirty=!0,this}arc(...e){return this.instructions.push({action:"arc",data:e}),this._dirty=!0,this}arcTo(...e){return this.instructions.push({action:"arcTo",data:e}),this._dirty=!0,this}arcToSvg(...e){return this.instructions.push({action:"arcToSvg",data:e}),this._dirty=!0,this}bezierCurveTo(...e){return this.instructions.push({action:"bezierCurveTo",data:e}),this._dirty=!0,this}bezierCurveToShort(e,t,r,i,s){const o=this.instructions[this.instructions.length-1],a=this.getLastPoint(le.shared);let l=0,c=0;if(!o||o.action!=="bezierCurveTo")l=a.x,c=a.y;else{l=o.data[2],c=o.data[3];const u=a.x,h=a.y;l=u+(u-l),c=h+(h-c)}return this.instructions.push({action:"bezierCurveTo",data:[l,c,e,t,r,i,s]}),this._dirty=!0,this}closePath(){return this.instructions.push({action:"closePath",data:[]}),this._dirty=!0,this}ellipse(...e){return this.instructions.push({action:"ellipse",data:e}),this._dirty=!0,this}lineTo(...e){return this.instructions.push({action:"lineTo",data:e}),this._dirty=!0,this}moveTo(...e){return this.instructions.push({action:"moveTo",data:e}),this}quadraticCurveTo(...e){return this.instructions.push({action:"quadraticCurveTo",data:e}),this._dirty=!0,this}quadraticCurveToShort(e,t,r){const i=this.instructions[this.instructions.length-1],s=this.getLastPoint(le.shared);let o=0,a=0;if(!i||i.action!=="quadraticCurveTo")o=s.x,a=s.y;else{o=i.data[0],a=i.data[1];const l=s.x,c=s.y;o=l+(l-o),a=c+(c-a)}return this.instructions.push({action:"quadraticCurveTo",data:[o,a,e,t,r]}),this._dirty=!0,this}rect(e,t,r,i,s){return this.instructions.push({action:"rect",data:[e,t,r,i,s]}),this._dirty=!0,this}circle(e,t,r,i){return this.instructions.push({action:"circle",data:[e,t,r,i]}),this._dirty=!0,this}roundRect(...e){return this.instructions.push({action:"roundRect",data:e}),this._dirty=!0,this}poly(...e){return this.instructions.push({action:"poly",data:e}),this._dirty=!0,this}regularPoly(...e){return this.instructions.push({action:"regularPoly",data:e}),this._dirty=!0,this}roundPoly(...e){return this.instructions.push({action:"roundPoly",data:e}),this._dirty=!0,this}roundShape(...e){return this.instructions.push({action:"roundShape",data:e}),this._dirty=!0,this}filletRect(...e){return this.instructions.push({action:"filletRect",data:e}),this._dirty=!0,this}chamferRect(...e){return this.instructions.push({action:"chamferRect",data:e}),this._dirty=!0,this}star(e,t,r,i,s,o,a){s=s||i/2;const l=-1*Math.PI/2+o,c=r*2,u=Math.PI*2/c,h=[];for(let f=0;f<c;f++){const p=f%2?s:i,m=f*u+l;h.push(e+p*Math.cos(m),t+p*Math.sin(m))}return this.poly(h,!0,a),this}clone(e=!1){const t=new St;if(!e)t.instructions=this.instructions.slice();else for(let r=0;r<this.instructions.length;r++){const i=this.instructions[r];t.instructions.push({action:i.action,data:i.data.slice()})}return t}clear(){return this.instructions.length=0,this._dirty=!0,this}transform(e){if(e.isIdentity())return this;const t=e.a,r=e.b,i=e.c,s=e.d,o=e.tx,a=e.ty;let l=0,c=0,u=0,h=0,f=0,p=0,m=0,g=0;for(let d=0;d<this.instructions.length;d++){const v=this.instructions[d],x=v.data;switch(v.action){case"moveTo":case"lineTo":l=x[0],c=x[1],x[0]=t*l+i*c+o,x[1]=r*l+s*c+a;break;case"bezierCurveTo":u=x[0],h=x[1],f=x[2],p=x[3],l=x[4],c=x[5],x[0]=t*u+i*h+o,x[1]=r*u+s*h+a,x[2]=t*f+i*p+o,x[3]=r*f+s*p+a,x[4]=t*l+i*c+o,x[5]=r*l+s*c+a;break;case"quadraticCurveTo":u=x[0],h=x[1],l=x[2],c=x[3],x[0]=t*u+i*h+o,x[1]=r*u+s*h+a,x[2]=t*l+i*c+o,x[3]=r*l+s*c+a;break;case"arcToSvg":l=x[5],c=x[6],m=x[0],g=x[1],x[0]=t*m+i*g,x[1]=r*m+s*g,x[5]=t*l+i*c+o,x[6]=r*l+s*c+a;break;case"circle":x[4]=Rt(x[3],e);break;case"rect":x[4]=Rt(x[4],e);break;case"ellipse":x[8]=Rt(x[8],e);break;case"roundRect":x[5]=Rt(x[5],e);break;case"addPath":x[0].transform(e);break;case"poly":x[2]=Rt(x[2],e);break;default:ie("unknown transform action",v.action);break}}return this._dirty=!0,this}get bounds(){return this.shapePath.bounds}getLastPoint(e){let t=this.instructions.length-1,r=this.instructions[t];if(!r)return e.x=0,e.y=0,e;for(;r.action==="closePath";){if(t--,t<0)return e.x=0,e.y=0,e;r=this.instructions[t]}switch(r.action){case"moveTo":case"lineTo":e.x=r.data[0],e.y=r.data[1];break;case"quadraticCurveTo":e.x=r.data[2],e.y=r.data[3];break;case"bezierCurveTo":e.x=r.data[4],e.y=r.data[5];break;case"arc":case"arcToSvg":e.x=r.data[5],e.y=r.data[6];break;case"addPath":r.data[0].getLastPoint(e);break}return e}}function Rt(n,e){return n?n.prepend(e):e.clone()}function Hh(n,e){if(typeof n=="string"){const r=document.createElement("div");r.innerHTML=n.trim(),n=r.querySelector("svg")}const t={context:e,path:new St};return xa(n,t,null,null),e}function xa(n,e,t,r){const i=n.children,{fillStyle:s,strokeStyle:o}=jh(n);s&&t?t={...t,...s}:s&&(t=s),o&&r?r={...r,...o}:o&&(r=o),e.context.fillStyle=t,e.context.strokeStyle=r;let a,l,c,u,h,f,p,m,g,d,v,x,y,_,b,C,A;switch(n.nodeName.toLowerCase()){case"path":_=n.getAttribute("d"),b=new St(_),e.context.path(b),t&&e.context.fill(),r&&e.context.stroke();break;case"circle":p=se(n,"cx",0),m=se(n,"cy",0),g=se(n,"r",0),e.context.ellipse(p,m,g,g),t&&e.context.fill(),r&&e.context.stroke();break;case"rect":a=se(n,"x",0),l=se(n,"y",0),C=se(n,"width",0),A=se(n,"height",0),d=se(n,"rx",0),v=se(n,"ry",0),d||v?e.context.roundRect(a,l,C,A,d||v):e.context.rect(a,l,C,A),t&&e.context.fill(),r&&e.context.stroke();break;case"ellipse":p=se(n,"cx",0),m=se(n,"cy",0),d=se(n,"rx",0),v=se(n,"ry",0),e.context.beginPath(),e.context.ellipse(p,m,d,v),t&&e.context.fill(),r&&e.context.stroke();break;case"line":c=se(n,"x1",0),u=se(n,"y1",0),h=se(n,"x2",0),f=se(n,"y2",0),e.context.beginPath(),e.context.moveTo(c,u),e.context.lineTo(h,f),r&&e.context.stroke();break;case"polygon":y=n.getAttribute("points"),x=y.match(/\d+/g).map(T=>parseInt(T,10)),e.context.poly(x,!0),t&&e.context.fill(),r&&e.context.stroke();break;case"polyline":y=n.getAttribute("points"),x=y.match(/\d+/g).map(T=>parseInt(T,10)),e.context.poly(x,!1),r&&e.context.stroke();break;case"g":case"svg":break;default:{console.info(`[SVG parser] <${n.nodeName}> elements unsupported`);break}}for(let T=0;T<i.length;T++)xa(i[T],e,t,r)}function se(n,e,t){const r=n.getAttribute(e);return r?Number(r):t}function jh(n){const e=n.getAttribute("style"),t={},r={};let i=!1,s=!1;if(e){const o=e.split(";");for(let a=0;a<o.length;a++){const l=o[a],[c,u]=l.split(":");switch(c){case"stroke":u!=="none"&&(t.color=$.shared.setValue(u).toNumber(),s=!0);break;case"stroke-width":t.width=Number(u);break;case"fill":u!=="none"&&(i=!0,r.color=$.shared.setValue(u).toNumber());break;case"fill-opacity":r.alpha=Number(u);break;case"stroke-opacity":t.alpha=Number(u);break;case"opacity":r.alpha=Number(u),t.alpha=Number(u);break}}}else{const o=n.getAttribute("stroke");o&&o!=="none"&&(s=!0,t.color=$.shared.setValue(o).toNumber(),t.width=se(n,"stroke-width",1));const a=n.getAttribute("fill");a&&a!=="none"&&(i=!0,r.color=$.shared.setValue(a).toNumber())}return{strokeStyle:s?t:null,fillStyle:i?r:null}}function Xh(n){return $.isColorLike(n)}function Is(n){return n instanceof $n}function zs(n){return n instanceof Yt}function Yh(n,e,t){const r=$.shared.setValue(e??0);return n.color=r.toNumber(),n.alpha=r.alpha===1?t.alpha:r.alpha,n.texture=U.WHITE,{...t,...n}}function Os(n,e,t){return n.fill=e,n.color=16777215,n.texture=e.texture,n.matrix=e.transform,{...t,...n}}function ks(n,e,t){return e.buildLinearGradient(),n.fill=e,n.color=16777215,n.texture=e.texture,n.matrix=e.transform,{...t,...n}}function qh(n,e){var i;const t={...e,...n};if(t.texture){if(t.texture!==U.WHITE){const o=((i=t.matrix)==null?void 0:i.invert())||new j;o.scale(1/t.texture.frame.width,1/t.texture.frame.height),t.matrix=o}const s=t.texture.source.style;s.addressMode==="clamp-to-edge"&&(s.addressMode="repeat",s.update())}const r=$.shared.setValue(t.color);return t.alpha*=r.alpha,t.color=r.toNumber(),t.matrix=t.matrix?t.matrix.clone():null,t}function et(n,e){if(n==null)return null;const t={},r=n;return Xh(n)?Yh(t,n,e):Is(n)?Os(t,n,e):zs(n)?ks(t,n,e):r.fill&&Is(r.fill)?Os(r,r.fill,e):r.fill&&zs(r.fill)?ks(r,r.fill,e):qh(r,e)}function kn(n,e){const{width:t,alignment:r,miterLimit:i,cap:s,join:o,...a}=e,l=et(n,a);return l?{width:t,alignment:r,miterLimit:i,cap:s,join:o,...l}:null}const Kh=new le,Es=new j,Ti=class Me extends we{constructor(){super(...arguments),this.uid=re("graphicsContext"),this.dirty=!0,this.batchMode="auto",this.instructions=[],this._activePath=new St,this._transform=new j,this._fillStyle={...Me.defaultFillStyle},this._strokeStyle={...Me.defaultStrokeStyle},this._stateStack=[],this._tick=0,this._bounds=new Oe,this._boundsDirty=!0}clone(){const e=new Me;return e.batchMode=this.batchMode,e.instructions=this.instructions.slice(),e._activePath=this._activePath.clone(),e._transform=this._transform.clone(),e._fillStyle={...this._fillStyle},e._strokeStyle={...this._strokeStyle},e._stateStack=this._stateStack.slice(),e._bounds=this._bounds.clone(),e._boundsDirty=!0,e}get fillStyle(){return this._fillStyle}set fillStyle(e){this._fillStyle=et(e,Me.defaultFillStyle)}get strokeStyle(){return this._strokeStyle}set strokeStyle(e){this._strokeStyle=kn(e,Me.defaultStrokeStyle)}setFillStyle(e){return this._fillStyle=et(e,Me.defaultFillStyle),this}setStrokeStyle(e){return this._strokeStyle=et(e,Me.defaultStrokeStyle),this}texture(e,t,r,i,s,o){return this.instructions.push({action:"texture",data:{image:e,dx:r||0,dy:i||0,dw:s||e.frame.width,dh:o||e.frame.height,transform:this._transform.clone(),alpha:this._fillStyle.alpha,style:t?$.shared.setValue(t).toNumber():16777215}}),this.onUpdate(),this}beginPath(){return this._activePath=new St,this}fill(e,t){let r;const i=this.instructions[this.instructions.length-1];return this._tick===0&&i&&i.action==="stroke"?r=i.data.path:r=this._activePath.clone(),r?(e!=null&&(t!==void 0&&typeof e=="number"&&(O(X,"GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"),e={color:e,alpha:t}),this._fillStyle=et(e,Me.defaultFillStyle)),this.instructions.push({action:"fill",data:{style:this.fillStyle,path:r}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}_initNextPathLocation(){const{x:e,y:t}=this._activePath.getLastPoint(le.shared);this._activePath.clear(),this._activePath.moveTo(e,t)}stroke(e){let t;const r=this.instructions[this.instructions.length-1];return this._tick===0&&r&&r.action==="fill"?t=r.data.path:t=this._activePath.clone(),t?(e!=null&&(this._strokeStyle=kn(e,Me.defaultStrokeStyle)),this.instructions.push({action:"stroke",data:{style:this.strokeStyle,path:t}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}cut(){for(let e=0;e<2;e++){const t=this.instructions[this.instructions.length-1-e],r=this._activePath.clone();if(t&&(t.action==="stroke"||t.action==="fill"))if(t.data.hole)t.data.hole.addPath(r);else{t.data.hole=r;break}}return this._initNextPathLocation(),this}arc(e,t,r,i,s,o){this._tick++;const a=this._transform;return this._activePath.arc(a.a*e+a.c*t+a.tx,a.b*e+a.d*t+a.ty,r,i,s,o),this}arcTo(e,t,r,i,s){this._tick++;const o=this._transform;return this._activePath.arcTo(o.a*e+o.c*t+o.tx,o.b*e+o.d*t+o.ty,o.a*r+o.c*i+o.tx,o.b*r+o.d*i+o.ty,s),this}arcToSvg(e,t,r,i,s,o,a){this._tick++;const l=this._transform;return this._activePath.arcToSvg(e,t,r,i,s,l.a*o+l.c*a+l.tx,l.b*o+l.d*a+l.ty),this}bezierCurveTo(e,t,r,i,s,o,a){this._tick++;const l=this._transform;return this._activePath.bezierCurveTo(l.a*e+l.c*t+l.tx,l.b*e+l.d*t+l.ty,l.a*r+l.c*i+l.tx,l.b*r+l.d*i+l.ty,l.a*s+l.c*o+l.tx,l.b*s+l.d*o+l.ty,a),this}closePath(){var e;return this._tick++,(e=this._activePath)==null||e.closePath(),this}ellipse(e,t,r,i){return this._tick++,this._activePath.ellipse(e,t,r,i,this._transform.clone()),this}circle(e,t,r){return this._tick++,this._activePath.circle(e,t,r,this._transform.clone()),this}path(e){return this._tick++,this._activePath.addPath(e,this._transform.clone()),this}lineTo(e,t){this._tick++;const r=this._transform;return this._activePath.lineTo(r.a*e+r.c*t+r.tx,r.b*e+r.d*t+r.ty),this}moveTo(e,t){this._tick++;const r=this._transform,i=this._activePath.instructions,s=r.a*e+r.c*t+r.tx,o=r.b*e+r.d*t+r.ty;return i.length===1&&i[0].action==="moveTo"?(i[0].data[0]=s,i[0].data[1]=o,this):(this._activePath.moveTo(s,o),this)}quadraticCurveTo(e,t,r,i,s){this._tick++;const o=this._transform;return this._activePath.quadraticCurveTo(o.a*e+o.c*t+o.tx,o.b*e+o.d*t+o.ty,o.a*r+o.c*i+o.tx,o.b*r+o.d*i+o.ty,s),this}rect(e,t,r,i){return this._tick++,this._activePath.rect(e,t,r,i,this._transform.clone()),this}roundRect(e,t,r,i,s){return this._tick++,this._activePath.roundRect(e,t,r,i,s,this._transform.clone()),this}poly(e,t){return this._tick++,this._activePath.poly(e,t,this._transform.clone()),this}regularPoly(e,t,r,i,s=0,o){return this._tick++,this._activePath.regularPoly(e,t,r,i,s,o),this}roundPoly(e,t,r,i,s,o){return this._tick++,this._activePath.roundPoly(e,t,r,i,s,o),this}roundShape(e,t,r,i){return this._tick++,this._activePath.roundShape(e,t,r,i),this}filletRect(e,t,r,i,s){return this._tick++,this._activePath.filletRect(e,t,r,i,s),this}chamferRect(e,t,r,i,s,o){return this._tick++,this._activePath.chamferRect(e,t,r,i,s,o),this}star(e,t,r,i,s=0,o=0){return this._tick++,this._activePath.star(e,t,r,i,s,o,this._transform.clone()),this}svg(e){return this._tick++,Hh(e,this),this}restore(){const e=this._stateStack.pop();return e&&(this._transform=e.transform,this._fillStyle=e.fillStyle,this._strokeStyle=e.strokeStyle),this}save(){return this._stateStack.push({transform:this._transform.clone(),fillStyle:{...this._fillStyle},strokeStyle:{...this._strokeStyle}}),this}getTransform(){return this._transform}resetTransform(){return this._transform.identity(),this}rotate(e){return this._transform.rotate(e),this}scale(e,t=e){return this._transform.scale(e,t),this}setTransform(e,t,r,i,s,o){return e instanceof j?(this._transform.set(e.a,e.b,e.c,e.d,e.tx,e.ty),this):(this._transform.set(e,t,r,i,s,o),this)}transform(e,t,r,i,s,o){return e instanceof j?(this._transform.append(e),this):(Es.set(e,t,r,i,s,o),this._transform.append(Es),this)}translate(e,t=e){return this._transform.translate(e,t),this}clear(){return this._activePath.clear(),this.instructions.length=0,this.resetTransform(),this.onUpdate(),this}onUpdate(){this.dirty||(this.emit("update",this,16),this.dirty=!0,this._boundsDirty=!0)}get bounds(){if(!this._boundsDirty)return this._bounds;const e=this._bounds;e.clear();for(let t=0;t<this.instructions.length;t++){const r=this.instructions[t],i=r.action;if(i==="fill"){const s=r.data;e.addBounds(s.path.bounds)}else if(i==="texture"){const s=r.data;e.addFrame(s.dx,s.dy,s.dx+s.dw,s.dy+s.dh,s.transform)}if(i==="stroke"){const s=r.data,o=s.style.width/2,a=s.path.bounds;e.addFrame(a.minX-o,a.minY-o,a.maxX+o,a.maxY+o)}}return e}containsPoint(e){var i;if(!this.bounds.containsPoint(e.x,e.y))return!1;const t=this.instructions;let r=!1;for(let s=0;s<t.length;s++){const o=t[s],a=o.data,l=a.path;if(!o.action||!l)continue;const c=a.style,u=l.shapePath.shapePrimitives;for(let h=0;h<u.length;h++){const f=u[h].shape;if(!c||!f)continue;const p=u[h].transform,m=p?p.applyInverse(e,Kh):e;o.action==="fill"?r=f.contains(m.x,m.y):r=f.strokeContains(m.x,m.y,c.width);const g=a.hole;if(g){const d=(i=g.shapePath)==null?void 0:i.shapePrimitives;if(d)for(let v=0;v<d.length;v++)d[v].shape.contains(m.x,m.y)&&(r=!1)}if(r)return!0}}return r}destroy(e=!1){if(this._stateStack.length=0,this._transform=null,this.emit("destroy",this),this.removeAllListeners(),typeof e=="boolean"?e:e==null?void 0:e.texture){const r=typeof e=="boolean"?e:e==null?void 0:e.textureSource;this._fillStyle.texture&&this._fillStyle.texture.destroy(r),this._strokeStyle.texture&&this._strokeStyle.texture.destroy(r)}this._fillStyle=null,this._strokeStyle=null,this.instructions=null,this._activePath=null,this._bounds=null,this._stateStack=null,this.customShader=null,this._transform=null}};Ti.defaultFillStyle={color:16777215,alpha:1,texture:U.WHITE,matrix:null,fill:null};Ti.defaultStrokeStyle={width:1,color:16777215,alpha:1,alignment:.5,miterLimit:10,cap:"butt",join:"miter",texture:U.WHITE,matrix:null,fill:null};let ge=Ti;const Rs=["align","breakWords","cssOverrides","fontVariant","fontWeight","leading","letterSpacing","lineHeight","padding","textBaseline","trim","whiteSpace","wordWrap","wordWrapWidth","fontFamily","fontStyle","fontSize"];function Zh(n){const e=[];let t=0;for(let r=0;r<Rs.length;r++){const i=`_${Rs[r]}`;e[t++]=n[i]}return t=ya(n._fill,e,t),t=Qh(n._stroke,e,t),t=Jh(n.dropShadow,e,t),e.join("-")}function ya(n,e,t){var r;return n&&(e[t++]=n.color,e[t++]=n.alpha,e[t++]=(r=n.fill)==null?void 0:r.styleKey),t}function Qh(n,e,t){return n&&(t=ya(n,e,t),e[t++]=n.width,e[t++]=n.alignment,e[t++]=n.cap,e[t++]=n.join,e[t++]=n.miterLimit),t}function Jh(n,e,t){return n&&(e[t++]=n.alpha,e[t++]=n.angle,e[t++]=n.blur,e[t++]=n.distance,e[t++]=$.shared.setValue(n.color).toNumber()),t}const Pi=class ct extends we{constructor(e={}){super(),ef(e);const t={...ct.defaultTextStyle,...e};for(const r in t){const i=r;this[i]=t[r]}this.update()}get align(){return this._align}set align(e){this._align=e,this.update()}get breakWords(){return this._breakWords}set breakWords(e){this._breakWords=e,this.update()}get dropShadow(){return this._dropShadow}set dropShadow(e){e!==null&&typeof e=="object"?this._dropShadow=this._createProxy({...ct.defaultDropShadow,...e}):this._dropShadow=e?this._createProxy({...ct.defaultDropShadow}):null,this.update()}get fontFamily(){return this._fontFamily}set fontFamily(e){this._fontFamily=e,this.update()}get fontSize(){return this._fontSize}set fontSize(e){typeof e=="string"?this._fontSize=parseInt(e,10):this._fontSize=e,this.update()}get fontStyle(){return this._fontStyle}set fontStyle(e){this._fontStyle=e,this.update()}get fontVariant(){return this._fontVariant}set fontVariant(e){this._fontVariant=e,this.update()}get fontWeight(){return this._fontWeight}set fontWeight(e){this._fontWeight=e,this.update()}get leading(){return this._leading}set leading(e){this._leading=e,this.update()}get letterSpacing(){return this._letterSpacing}set letterSpacing(e){this._letterSpacing=e,this.update()}get lineHeight(){return this._lineHeight}set lineHeight(e){this._lineHeight=e,this.update()}get padding(){return this._padding}set padding(e){this._padding=e,this.update()}get trim(){return this._trim}set trim(e){this._trim=e,this.update()}get textBaseline(){return this._textBaseline}set textBaseline(e){this._textBaseline=e,this.update()}get whiteSpace(){return this._whiteSpace}set whiteSpace(e){this._whiteSpace=e,this.update()}get wordWrap(){return this._wordWrap}set wordWrap(e){this._wordWrap=e,this.update()}get wordWrapWidth(){return this._wordWrapWidth}set wordWrapWidth(e){this._wordWrapWidth=e,this.update()}get fill(){return this._originalFill}set fill(e){e!==this._originalFill&&(this._originalFill=e,this._isFillStyle(e)&&(this._originalFill=this._createProxy({...ge.defaultFillStyle,...e},()=>{this._fill=et({...this._originalFill},ge.defaultFillStyle)})),this._fill=et(e===0?"black":e,ge.defaultFillStyle),this.update())}get stroke(){return this._originalStroke}set stroke(e){e!==this._originalStroke&&(this._originalStroke=e,this._isFillStyle(e)&&(this._originalStroke=this._createProxy({...ge.defaultStrokeStyle,...e},()=>{this._stroke=kn({...this._originalStroke},ge.defaultStrokeStyle)})),this._stroke=kn(e,ge.defaultStrokeStyle),this.update())}_generateKey(){return this._styleKey=Zh(this),this._styleKey}update(){this._styleKey=null,this.emit("update",this)}reset(){const e=ct.defaultTextStyle;for(const t in e)this[t]=e[t]}get styleKey(){return this._styleKey||this._generateKey()}clone(){return new ct({align:this.align,breakWords:this.breakWords,dropShadow:this._dropShadow?{...this._dropShadow}:null,fill:this._fill,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,leading:this.leading,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke,textBaseline:this.textBaseline,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth})}destroy(e=!1){var r,i,s,o;if(this.removeAllListeners(),typeof e=="boolean"?e:e==null?void 0:e.texture){const a=typeof e=="boolean"?e:e==null?void 0:e.textureSource;(r=this._fill)!=null&&r.texture&&this._fill.texture.destroy(a),(i=this._originalFill)!=null&&i.texture&&this._originalFill.texture.destroy(a),(s=this._stroke)!=null&&s.texture&&this._stroke.texture.destroy(a),(o=this._originalStroke)!=null&&o.texture&&this._originalStroke.texture.destroy(a)}this._fill=null,this._stroke=null,this.dropShadow=null,this._originalStroke=null,this._originalFill=null}_createProxy(e,t){return new Proxy(e,{set:(r,i,s)=>(r[i]=s,t==null||t(i,s),this.update(),!0)})}_isFillStyle(e){return(e??null)!==null&&!($.isColorLike(e)||e instanceof Yt||e instanceof $n)}};Pi.defaultDropShadow={alpha:1,angle:Math.PI/6,blur:0,color:"black",distance:5};Pi.defaultTextStyle={align:"left",breakWords:!1,dropShadow:null,fill:"black",fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",leading:0,letterSpacing:0,lineHeight:0,padding:0,stroke:null,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100};let Ct=Pi;function ef(n){const e=n;if(typeof e.dropShadow=="boolean"&&e.dropShadow){const t=Ct.defaultDropShadow;n.dropShadow={alpha:e.dropShadowAlpha??t.alpha,angle:e.dropShadowAngle??t.angle,blur:e.dropShadowBlur??t.blur,color:e.dropShadowColor??t.color,distance:e.dropShadowDistance??t.distance}}if(e.strokeThickness!==void 0){O(X,"strokeThickness is now a part of stroke");const t=e.stroke;let r={};if($.isColorLike(t))r.color=t;else if(t instanceof Yt||t instanceof $n)r.fill=t;else if(Object.hasOwnProperty.call(t,"color")||Object.hasOwnProperty.call(t,"fill"))r=t;else throw new Error("Invalid stroke value.");n.stroke={...r,width:e.strokeThickness}}if(Array.isArray(e.fillGradientStops)){O(X,"gradient fill is now a fill pattern: `new FillGradient(...)`");let t;n.fontSize==null?n.fontSize=Ct.defaultTextStyle.fontSize:typeof n.fontSize=="string"?t=parseInt(n.fontSize,10):t=n.fontSize;const r=new Yt(0,0,0,t*1.7),i=e.fillGradientStops.map(s=>$.shared.setValue(s).toNumber());i.forEach((s,o)=>{const a=o/(i.length-1);r.addColorStop(a,s)}),n.fill={fill:r}}}class tf{constructor(e){this._canvasPool=Object.create(null),this.canvasOptions=e||{},this.enableFullScreen=!1}_createCanvasAndContext(e,t){const r=J.get().createCanvas();r.width=e,r.height=t;const i=r.getContext("2d");return{canvas:r,context:i}}getOptimalCanvasAndContext(e,t,r=1){e=Math.ceil(e*r-1e-6),t=Math.ceil(t*r-1e-6),e=Fn(e),t=Fn(t);const i=(e<<17)+(t<<1);this._canvasPool[i]||(this._canvasPool[i]=[]);let s=this._canvasPool[i].pop();return s||(s=this._createCanvasAndContext(e,t)),s}returnCanvasAndContext(e){const t=e.canvas,{width:r,height:i}=t,s=(r<<17)+(i<<1);this._canvasPool[s].push(e)}clear(){this._canvasPool={}}}const Us=new tf,nf=["serif","sans-serif","monospace","cursive","fantasy","system-ui"];function ni(n){const e=typeof n.fontSize=="number"?`${n.fontSize}px`:n.fontSize;let t=n.fontFamily;Array.isArray(n.fontFamily)||(t=n.fontFamily.split(","));for(let r=t.length-1;r>=0;r--){let i=t[r].trim();!/([\"\'])[^\'\"]+\1/.test(i)&&!nf.includes(i)&&(i=`"${i}"`),t[r]=i}return`${n.fontStyle} ${n.fontVariant} ${n.fontWeight} ${e} ${t.join(",")}`}const wr={willReadFrequently:!0},Te=class z{static get experimentalLetterSpacingSupported(){let e=z._experimentalLetterSpacingSupported;if(e!==void 0){const t=J.get().getCanvasRenderingContext2D().prototype;e=z._experimentalLetterSpacingSupported="letterSpacing"in t||"textLetterSpacing"in t}return e}constructor(e,t,r,i,s,o,a,l,c){this.text=e,this.style=t,this.width=r,this.height=i,this.lines=s,this.lineWidths=o,this.lineHeight=a,this.maxLineWidth=l,this.fontProperties=c}static measureText(e=" ",t,r=z._canvas,i=t.wordWrap){var x;const s=`${e}:${t.styleKey}`;if(z._measurementCache[s])return z._measurementCache[s];const o=ni(t),a=z.measureFont(o);a.fontSize===0&&(a.fontSize=t.fontSize,a.ascent=t.fontSize);const l=z.__context;l.font=o;const u=(i?z._wordWrap(e,t,r):e).split(/(?:\r\n|\r|\n)/),h=new Array(u.length);let f=0;for(let y=0;y<u.length;y++){const _=z._measureText(u[y],t.letterSpacing,l);h[y]=_,f=Math.max(f,_)}const p=((x=t._stroke)==null?void 0:x.width)||0;let m=f+p;t.dropShadow&&(m+=t.dropShadow.distance);const g=t.lineHeight||a.fontSize;let d=Math.max(g,a.fontSize+p)+(u.length-1)*(g+t.leading);return t.dropShadow&&(d+=t.dropShadow.distance),new z(e,t,m,d,u,h,g+t.leading,f,a)}static _measureText(e,t,r){let i=!1;z.experimentalLetterSpacingSupported&&(z.experimentalLetterSpacing?(r.letterSpacing=`${t}px`,r.textLetterSpacing=`${t}px`,i=!0):(r.letterSpacing="0px",r.textLetterSpacing="0px"));let s=r.measureText(e).width;return s>0&&(i?s-=t:s+=(z.graphemeSegmenter(e).length-1)*t),s}static _wordWrap(e,t,r=z._canvas){const i=r.getContext("2d",wr);let s=0,o="",a="";const l=Object.create(null),{letterSpacing:c,whiteSpace:u}=t,h=z._collapseSpaces(u),f=z._collapseNewlines(u);let p=!h;const m=t.wordWrapWidth+c,g=z._tokenize(e);for(let d=0;d<g.length;d++){let v=g[d];if(z._isNewline(v)){if(!f){a+=z._addLine(o),p=!h,o="",s=0;continue}v=" "}if(h){const y=z.isBreakingSpace(v),_=z.isBreakingSpace(o[o.length-1]);if(y&&_)continue}const x=z._getFromCache(v,c,l,i);if(x>m)if(o!==""&&(a+=z._addLine(o),o="",s=0),z.canBreakWords(v,t.breakWords)){const y=z.wordWrapSplit(v);for(let _=0;_<y.length;_++){let b=y[_],C=b,A=1;for(;y[_+A];){const w=y[_+A];if(!z.canBreakChars(C,w,v,_,t.breakWords))b+=w;else break;C=w,A++}_+=A-1;const T=z._getFromCache(b,c,l,i);T+s>m&&(a+=z._addLine(o),p=!1,o="",s=0),o+=b,s+=T}}else{o.length>0&&(a+=z._addLine(o),o="",s=0);const y=d===g.length-1;a+=z._addLine(v,!y),p=!1,o="",s=0}else x+s>m&&(p=!1,a+=z._addLine(o),o="",s=0),(o.length>0||!z.isBreakingSpace(v)||p)&&(o+=v,s+=x)}return a+=z._addLine(o,!1),a}static _addLine(e,t=!0){return e=z._trimRight(e),e=t?`${e}
`:e,e}static _getFromCache(e,t,r,i){let s=r[e];return typeof s!="number"&&(s=z._measureText(e,t,i)+t,r[e]=s),s}static _collapseSpaces(e){return e==="normal"||e==="pre-line"}static _collapseNewlines(e){return e==="normal"}static _trimRight(e){if(typeof e!="string")return"";for(let t=e.length-1;t>=0;t--){const r=e[t];if(!z.isBreakingSpace(r))break;e=e.slice(0,-1)}return e}static _isNewline(e){return typeof e!="string"?!1:z._newlines.includes(e.charCodeAt(0))}static isBreakingSpace(e,t){return typeof e!="string"?!1:z._breakingSpaces.includes(e.charCodeAt(0))}static _tokenize(e){const t=[];let r="";if(typeof e!="string")return t;for(let i=0;i<e.length;i++){const s=e[i],o=e[i+1];if(z.isBreakingSpace(s,o)||z._isNewline(s)){r!==""&&(t.push(r),r=""),t.push(s);continue}r+=s}return r!==""&&t.push(r),t}static canBreakWords(e,t){return t}static canBreakChars(e,t,r,i,s){return!0}static wordWrapSplit(e){return z.graphemeSegmenter(e)}static measureFont(e){if(z._fonts[e])return z._fonts[e];const t=z._context;t.font=e;const r=t.measureText(z.METRICS_STRING+z.BASELINE_SYMBOL),i={ascent:r.actualBoundingBoxAscent,descent:r.actualBoundingBoxDescent,fontSize:r.actualBoundingBoxAscent+r.actualBoundingBoxDescent};return z._fonts[e]=i,i}static clearMetrics(e=""){e?delete z._fonts[e]:z._fonts={}}static get _canvas(){if(!z.__canvas){let e;try{const t=new OffscreenCanvas(0,0),r=t.getContext("2d",wr);if(r!=null&&r.measureText)return z.__canvas=t,t;e=J.get().createCanvas()}catch{e=J.get().createCanvas()}e.width=e.height=10,z.__canvas=e}return z.__canvas}static get _context(){return z.__context||(z.__context=z._canvas.getContext("2d",wr)),z.__context}};Te.METRICS_STRING="|ÉqÅ";Te.BASELINE_SYMBOL="M";Te.BASELINE_MULTIPLIER=1.4;Te.HEIGHT_MULTIPLIER=2;Te.graphemeSegmenter=(()=>{if(typeof(Intl==null?void 0:Intl.Segmenter)=="function"){const n=new Intl.Segmenter;return e=>[...n.segment(e)].map(t=>t.segment)}return n=>[...n]})();Te.experimentalLetterSpacing=!1;Te._fonts={};Te._newlines=[10,13];Te._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];Te._measurementCache={};let ri=Te;function Bs(n,e){if(n.texture===U.WHITE&&!n.fill)return $.shared.setValue(n.color).toHex();if(n.fill){if(n.fill instanceof $n){const t=n.fill,r=e.createPattern(t.texture.source.resource,"repeat"),i=t.transform.copyTo(j.shared);return i.scale(t.texture.frame.width,t.texture.frame.height),r.setTransform(i),r}else if(n.fill instanceof Yt){const t=n.fill;if(t.type==="linear"){const r=e.createLinearGradient(t.x0,t.y0,t.x1,t.y1);return t.gradientStops.forEach(i=>{r.addColorStop(i.offset,$.shared.setValue(i.color).toHex())}),r}}}else{const t=e.createPattern(n.texture.source.resource,"repeat"),r=n.matrix.copyTo(j.shared);return r.scale(n.texture.frame.width,n.texture.frame.height),t.setTransform(r),t}return ie("FillStyle not recognised",n),"red"}function _a(n){if(n==="")return[];typeof n=="string"&&(n=[n]);const e=[];for(let t=0,r=n.length;t<r;t++){const i=n[t];if(Array.isArray(i)){if(i.length!==2)throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${i.length}.`);if(i[0].length===0||i[1].length===0)throw new Error("[BitmapFont]: Invalid character delimiter.");const s=i[0].charCodeAt(0),o=i[1].charCodeAt(0);if(o<s)throw new Error("[BitmapFont]: Invalid character range.");for(let a=s,l=o;a<=l;a++)e.push(String.fromCharCode(a))}else e.push(...Array.from(i))}if(e.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return e}const ba=class Sa extends sa{constructor(e){super(),this.resolution=1,this.pages=[],this._padding=0,this._measureCache=Object.create(null),this._currentChars=[],this._currentX=0,this._currentY=0,this._currentPageIndex=-1,this._skipKerning=!1;const t={...Sa.defaultOptions,...e};this._textureSize=t.textureSize,this._mipmap=t.mipmap;const r=t.style.clone();t.overrideFill&&(r._fill.color=16777215,r._fill.alpha=1,r._fill.texture=U.WHITE,r._fill.fill=null),this.applyFillAsTint=t.overrideFill;const i=r.fontSize;r.fontSize=this.baseMeasurementFontSize;const s=ni(r);t.overrideSize?r._stroke&&(r._stroke.width*=this.baseRenderedFontSize/i):r.fontSize=this.baseRenderedFontSize=i,this._style=r,this._skipKerning=t.skipKerning??!1,this.resolution=t.resolution??1,this._padding=t.padding??4,this.fontMetrics=ri.measureFont(s),this.lineHeight=r.lineHeight||this.fontMetrics.fontSize||r.fontSize}ensureCharacters(e){var g,d;const t=_a(e).filter(v=>!this._currentChars.includes(v)).filter((v,x,y)=>y.indexOf(v)===x);if(!t.length)return;this._currentChars=[...this._currentChars,...t];let r;this._currentPageIndex===-1?r=this._nextPage():r=this.pages[this._currentPageIndex];let{canvas:i,context:s}=r.canvasAndContext,o=r.texture.source;const a=this._style;let l=this._currentX,c=this._currentY;const u=this.baseRenderedFontSize/this.baseMeasurementFontSize,h=this._padding*u,f=a.fontStyle==="italic"?2:1;let p=0,m=!1;for(let v=0;v<t.length;v++){const x=t[v],y=ri.measureText(x,a,i,!1);y.lineHeight=y.height;const _=f*y.width*u,b=y.height*u,C=_+h*2,A=b+h*2;if(m=!1,x!==`
`&&x!=="\r"&&x!=="	"&&x!==" "&&(m=!0,p=Math.ceil(Math.max(A,p))),l+C>this._textureSize&&(c+=p,p=A,l=0,c+p>this._textureSize)){o.update();const w=this._nextPage();i=w.canvasAndContext.canvas,s=w.canvasAndContext.context,o=w.texture.source,c=0}const T=_/u-(((g=a.dropShadow)==null?void 0:g.distance)??0)-(((d=a._stroke)==null?void 0:d.width)??0);if(this.chars[x]={id:x.codePointAt(0),xOffset:-this._padding,yOffset:-this._padding,xAdvance:T,kerning:{}},m){this._drawGlyph(s,y,l+h,c+h,u,a);const w=o.width*u,S=o.height*u,B=new ne(l/w*o.width,c/S*o.height,C/w*o.width,A/S*o.height);this.chars[x].texture=new U({source:o,frame:B}),l+=Math.ceil(C)}}o.update(),this._currentX=l,this._currentY=c,this._skipKerning&&this._applyKerning(t,s)}get pageTextures(){return O(X,"BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),this.pages}_applyKerning(e,t){const r=this._measureCache;for(let i=0;i<e.length;i++){const s=e[i];for(let o=0;o<this._currentChars.length;o++){const a=this._currentChars[o];let l=r[s];l||(l=r[s]=t.measureText(s).width);let c=r[a];c||(c=r[a]=t.measureText(a).width);let u=t.measureText(s+a).width,h=u-(l+c);h&&(this.chars[s].kerning[a]=h),u=t.measureText(s+a).width,h=u-(l+c),h&&(this.chars[a].kerning[s]=h)}}}_nextPage(){this._currentPageIndex++;const e=this.resolution,t=Us.getOptimalCanvasAndContext(this._textureSize,this._textureSize,e);this._setupContext(t.context,this._style,e);const r=e*(this.baseRenderedFontSize/this.baseMeasurementFontSize),i=new U({source:new st({resource:t.canvas,resolution:r,alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:this._mipmap})}),s={canvasAndContext:t,texture:i};return this.pages[this._currentPageIndex]=s,s}_setupContext(e,t,r){t.fontSize=this.baseRenderedFontSize,e.scale(r,r),e.font=ni(t),t.fontSize=this.baseMeasurementFontSize,e.textBaseline=t.textBaseline;const i=t._stroke,s=(i==null?void 0:i.width)??0;if(i&&(e.lineWidth=s,e.lineJoin=i.join,e.miterLimit=i.miterLimit,e.strokeStyle=Bs(i,e)),t._fill&&(e.fillStyle=Bs(t._fill,e)),t.dropShadow){const o=t.dropShadow,a=$.shared.setValue(o.color).toArray(),l=o.blur*r,c=o.distance*r;e.shadowColor=`rgba(${a[0]*255},${a[1]*255},${a[2]*255},${o.alpha})`,e.shadowBlur=l,e.shadowOffsetX=Math.cos(o.angle)*c,e.shadowOffsetY=Math.sin(o.angle)*c}else e.shadowColor="black",e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0}_drawGlyph(e,t,r,i,s,o){const a=t.text,l=t.fontProperties,c=o._stroke,u=((c==null?void 0:c.width)??0)*s,h=r+u/2,f=i-u/2,p=l.descent*s,m=t.lineHeight*s;o.stroke&&u&&e.strokeText(a,h,f+m-p),o._fill&&e.fillText(a,h,f+m-p)}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{canvasAndContext:t,texture:r}=this.pages[e];t.canvas.width=t.canvas.width,Us.returnCanvasAndContext(t),r.destroy(!0)}this.pages=null}};ba.defaultOptions={textureSize:512,style:new Ct,mipmap:!0};let Ds=ba;function rf(n,e,t){const r={width:0,height:0,offsetY:0,scale:e.fontSize/t.baseMeasurementFontSize,lines:[{width:0,charPositions:[],spaceWidth:0,spacesIndex:[],chars:[]}]};r.offsetY=t.baseLineOffset;let i=r.lines[0],s=null,o=!0;const a={spaceWord:!1,width:0,start:0,index:0,positions:[],chars:[]},l=p=>{const m=i.width;for(let g=0;g<a.index;g++){const d=p.positions[g];i.chars.push(p.chars[g]),i.charPositions.push(d+m)}i.width+=p.width,o=!1,a.width=0,a.index=0,a.chars.length=0},c=()=>{let p=i.chars.length-1,m=i.chars[p];for(;m===" ";)i.width-=t.chars[m].xAdvance,m=i.chars[--p];r.width=Math.max(r.width,i.width),i={width:0,charPositions:[],chars:[],spaceWidth:0,spacesIndex:[]},o=!0,r.lines.push(i),r.height+=t.lineHeight},u=t.baseMeasurementFontSize/e.fontSize,h=e.letterSpacing*u,f=e.wordWrapWidth*u;for(let p=0;p<n.length+1;p++){let m;const g=p===n.length;g||(m=n[p]);const d=t.chars[m]||t.chars[" "];if(/(?:\s)/.test(m)||m==="\r"||m===`
`||g){if(!o&&e.wordWrap&&i.width+a.width-h>f?(c(),l(a),g||i.charPositions.push(0)):(a.start=i.width,l(a),g||i.charPositions.push(0)),m==="\r"||m===`
`)i.width!==0&&c();else if(!g){const _=d.xAdvance+(d.kerning[s]||0)+h;i.width+=_,i.spaceWidth=_,i.spacesIndex.push(i.charPositions.length),i.chars.push(m)}}else{const y=d.kerning[s]||0,_=d.xAdvance+y+h;a.positions[a.index++]=a.width+y,a.chars.push(m),a.width+=_}s=m}return c(),e.align==="center"?sf(r):e.align==="right"?of(r):e.align==="justify"&&af(r),r}function sf(n){for(let e=0;e<n.lines.length;e++){const t=n.lines[e],r=n.width/2-t.width/2;for(let i=0;i<t.charPositions.length;i++)t.charPositions[i]+=r}}function of(n){for(let e=0;e<n.lines.length;e++){const t=n.lines[e],r=n.width-t.width;for(let i=0;i<t.charPositions.length;i++)t.charPositions[i]+=r}}function af(n){const e=n.width;for(let t=0;t<n.lines.length;t++){const r=n.lines[t];let i=0,s=r.spacesIndex[i++],o=0;const a=r.spacesIndex.length,c=(e-r.width)/a;for(let u=0;u<r.charPositions.length;u++)u===s&&(s=r.spacesIndex[i++],o+=c),r.charPositions[u]+=o}}let pn=0;class lf{constructor(){this.ALPHA=[["a","z"],["A","Z"]," "],this.NUMERIC=[["0","9"]],this.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],this.ASCII=[[" ","~"]],this.defaultOptions={chars:this.ALPHANUMERIC,resolution:1,padding:4,skipKerning:!1}}getFont(e,t){var o;let r=`${t.fontFamily}-bitmap`,i=!0;if(t._fill.fill&&!t._stroke)r+=t._fill.fill.styleKey,i=!1;else if(t._stroke||t.dropShadow){let a=t.styleKey;a=a.substring(0,a.lastIndexOf("-")),r=`${a}-bitmap`,i=!1}if(!Z.has(r)){const a=new Ds({style:t,overrideFill:i,overrideSize:!0,...this.defaultOptions});pn++,pn>50&&ie("BitmapText",`You have dynamically created ${pn} bitmap fonts, this can be inefficient. Try pre installing your font styles using \`BitmapFont.install({name:"style1", style})\``),a.once("destroy",()=>{pn--,Z.remove(r)}),Z.set(r,a)}const s=Z.get(r);return(o=s.ensureCharacters)==null||o.call(s,e),s}getLayout(e,t){const r=this.getFont(e,t);return rf([...e],t,r)}measureText(e,t){return this.getLayout(e,t)}install(...e){var c,u,h,f;let t=e[0];typeof t=="string"&&(t={name:t,style:e[1],chars:(c=e[2])==null?void 0:c.chars,resolution:(u=e[2])==null?void 0:u.resolution,padding:(h=e[2])==null?void 0:h.padding,skipKerning:(f=e[2])==null?void 0:f.skipKerning},O(X,"BitmapFontManager.install(name, style, options) is deprecated, use BitmapFontManager.install({name, style, ...options})"));const r=t==null?void 0:t.name;if(!r)throw new Error("[BitmapFontManager] Property `name` is required.");t={...this.defaultOptions,...t};const i=t.style,s=i instanceof Ct?i:new Ct(i),o=s._fill.fill!==null&&s._fill.fill!==void 0,a=new Ds({style:s,overrideFill:o,skipKerning:t.skipKerning,padding:t.padding,resolution:t.resolution,overrideSize:!1}),l=_a(t.chars);return a.ensureCharacters(l.join("")),Z.set(`${r}-bitmap`,a),a.once("destroy",()=>Z.remove(`${r}-bitmap`)),a}uninstall(e){const t=`${e}-bitmap`,r=Z.get(t);r&&(Z.remove(t),r.destroy())}}const Ls=new lf;class Ca extends sa{constructor(e,t){super();const{textures:r,data:i}=e;Object.keys(i.pages).forEach(s=>{const o=i.pages[parseInt(s,10)],a=r[o.id];this.pages.push({texture:a})}),Object.keys(i.chars).forEach(s=>{const o=i.chars[s],{frame:a,source:l}=r[o.page],c=new ne(o.x+a.x,o.y+a.y,o.width,o.height),u=new U({source:l,frame:c});this.chars[s]={id:s.codePointAt(0),xOffset:o.xOffset,yOffset:o.yOffset,xAdvance:o.xAdvance,kerning:o.kerning??{},texture:u}}),this.baseRenderedFontSize=i.fontSize,this.baseMeasurementFontSize=i.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:i.fontSize},this.baseLineOffset=i.baseLineOffset,this.lineHeight=i.lineHeight,this.fontFamily=i.fontFamily,this.distanceField=i.distanceField??{type:"none",range:0},this.url=t}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:t}=this.pages[e];t.destroy(!0)}this.pages=null}static install(e){Ls.install(e)}static uninstall(e){Ls.uninstall(e)}}const Ar={test(n){return typeof n=="string"&&n.startsWith("info face=")},parse(n){const e=n.match(/^[a-z]+\s+.+$/gm),t={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const h in e){const f=e[h].match(/^[a-z]+/gm)[0],p=e[h].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),m={};for(const g in p){const d=p[g].split("="),v=d[0],x=d[1].replace(/"/gm,""),y=parseFloat(x),_=isNaN(y)?x:y;m[v]=_}t[f].push(m)}const r={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[i]=t.info,[s]=t.common,[o]=t.distanceField??[];o&&(r.distanceField={range:parseInt(o.distanceRange,10),type:o.fieldType}),r.fontSize=parseInt(i.size,10),r.fontFamily=i.face,r.lineHeight=parseInt(s.lineHeight,10);const a=t.page;for(let h=0;h<a.length;h++)r.pages.push({id:parseInt(a[h].id,10)||0,file:a[h].file});const l={};r.baseLineOffset=r.lineHeight-parseInt(s.base,10);const c=t.char;for(let h=0;h<c.length;h++){const f=c[h],p=parseInt(f.id,10);let m=f.letter??f.char??String.fromCharCode(p);m==="space"&&(m=" "),l[p]=m,r.chars[m]={id:p,page:parseInt(f.page,10)||0,x:parseInt(f.x,10),y:parseInt(f.y,10),width:parseInt(f.width,10),height:parseInt(f.height,10),xOffset:parseInt(f.xoffset,10),yOffset:parseInt(f.yoffset,10),xAdvance:parseInt(f.xadvance,10),kerning:{}}}const u=t.kerning||[];for(let h=0;h<u.length;h++){const f=parseInt(u[h].first,10),p=parseInt(u[h].second,10),m=parseInt(u[h].amount,10);r.chars[l[p]].kerning[l[f]]=m}return r}},Ns={test(n){const e=n;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(n){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},t=n.getElementsByTagName("info")[0],r=n.getElementsByTagName("common")[0],i=n.getElementsByTagName("distanceField")[0];i&&(e.distanceField={type:i.getAttribute("fieldType"),range:parseInt(i.getAttribute("distanceRange"),10)});const s=n.getElementsByTagName("page"),o=n.getElementsByTagName("char"),a=n.getElementsByTagName("kerning");e.fontSize=parseInt(t.getAttribute("size"),10),e.fontFamily=t.getAttribute("face"),e.lineHeight=parseInt(r.getAttribute("lineHeight"),10);for(let c=0;c<s.length;c++)e.pages.push({id:parseInt(s[c].getAttribute("id"),10)||0,file:s[c].getAttribute("file")});const l={};e.baseLineOffset=e.lineHeight-parseInt(r.getAttribute("base"),10);for(let c=0;c<o.length;c++){const u=o[c],h=parseInt(u.getAttribute("id"),10);let f=u.getAttribute("letter")??u.getAttribute("char")??String.fromCharCode(h);f==="space"&&(f=" "),l[h]=f,e.chars[f]={id:h,page:parseInt(u.getAttribute("page"),10)||0,x:parseInt(u.getAttribute("x"),10),y:parseInt(u.getAttribute("y"),10),width:parseInt(u.getAttribute("width"),10),height:parseInt(u.getAttribute("height"),10),xOffset:parseInt(u.getAttribute("xoffset"),10),yOffset:parseInt(u.getAttribute("yoffset"),10),xAdvance:parseInt(u.getAttribute("xadvance"),10),kerning:{}}}for(let c=0;c<a.length;c++){const u=parseInt(a[c].getAttribute("first"),10),h=parseInt(a[c].getAttribute("second"),10),f=parseInt(a[c].getAttribute("amount"),10);e.chars[l[h]].kerning[l[u]]=f}return e}},Gs={test(n){return typeof n=="string"&&n.includes("<font>")?Ns.test(J.get().parseXML(n)):!1},parse(n){return Ns.parse(J.get().parseXML(n))}},uf=[".xml",".fnt"],cf={extension:{type:E.CacheParser,name:"cacheBitmapFont"},test:n=>n instanceof Ca,getCacheableAssets(n,e){const t={};return n.forEach(r=>{t[r]=e,t[`${r}-bitmap`]=e}),t[`${e.fontFamily}-bitmap`]=e,t}},hf={extension:{type:E.LoadParser,priority:Ne.Normal},name:"loadBitmapFont",test(n){return uf.includes(pe.extname(n).toLowerCase())},async testParse(n){return Ar.test(n)||Gs.test(n)},async parse(n,e,t){const r=Ar.test(n)?Ar.parse(n):Gs.parse(n),{src:i}=e,{pages:s}=r,o=[],a=r.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let h=0;h<s.length;++h){const f=s[h].file;let p=pe.join(pe.dirname(i),f);p=$r(p,i),o.push({src:p,data:a})}const l=await t.load(o),c=o.map(h=>l[h.src]);return new Ca({data:r,textures:c},i)},async load(n,e){return await(await J.get().fetch(n)).text()},async unload(n,e,t){await Promise.all(n.pages.map(r=>t.unload(r.texture.source._sourceOrigin))),n.destroy()}};class ff{constructor(e,t=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=t}add(e){e.forEach(t=>{this._assetList.push(t)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],t=Math.min(this._assetList.length,this._maxConcurrent);for(let r=0;r<t;r++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const df={extension:{type:E.CacheParser,name:"cacheTextureArray"},test:n=>Array.isArray(n)&&n.every(e=>e instanceof U),getCacheableAssets:(n,e)=>{const t={};return n.forEach(r=>{e.forEach((i,s)=>{t[r+(s===0?"":s+1)]=i})}),t}};async function wa(n){if("Image"in globalThis)return new Promise(e=>{const t=new Image;t.onload=()=>{e(!0)},t.onerror=()=>{e(!1)},t.src=n});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(n)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const pf={extension:{type:E.DetectionParser,priority:1},test:async()=>wa("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async n=>[...n,"avif"],remove:async n=>n.filter(e=>e!=="avif")},Ws=["png","jpg","jpeg"],mf={extension:{type:E.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async n=>[...n,...Ws],remove:async n=>n.filter(e=>!Ws.includes(e))},gf="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Mi(n){return gf?!1:document.createElement("video").canPlayType(n)!==""}const vf={extension:{type:E.DetectionParser,priority:0},test:async()=>Mi("video/mp4"),add:async n=>[...n,"mp4","m4v"],remove:async n=>n.filter(e=>e!=="mp4"&&e!=="m4v")},xf={extension:{type:E.DetectionParser,priority:0},test:async()=>Mi("video/ogg"),add:async n=>[...n,"ogv"],remove:async n=>n.filter(e=>e!=="ogv")},yf={extension:{type:E.DetectionParser,priority:0},test:async()=>Mi("video/webm"),add:async n=>[...n,"webm"],remove:async n=>n.filter(e=>e!=="webm")},_f={extension:{type:E.DetectionParser,priority:0},test:async()=>wa("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async n=>[...n,"webp"],remove:async n=>n.filter(e=>e!=="webp")};class bf{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,t,r)=>(this._parsersValidated=!1,e[t]=r,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,t){const r={promise:null,parser:null};return r.promise=(async()=>{var o,a;let i=null,s=null;if(t.loadParser&&(s=this._parserHash[t.loadParser],s||ie(`[Assets] specified load parser "${t.loadParser}" not found while loading ${e}`)),!s){for(let l=0;l<this.parsers.length;l++){const c=this.parsers[l];if(c.load&&((o=c.test)!=null&&o.call(c,e,t,this))){s=c;break}}if(!s)return ie(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}i=await s.load(e,t,this),r.parser=s;for(let l=0;l<this.parsers.length;l++){const c=this.parsers[l];c.parse&&c.parse&&await((a=c.testParse)==null?void 0:a.call(c,i,t,this))&&(i=await c.parse(i,t,this)||i,r.parser=c)}return i})(),r}async load(e,t){this._parsersValidated||this._validateParsers();let r=0;const i={},s=zn(e),o=Se(e,c=>({alias:[c],src:c})),a=o.length,l=o.map(async c=>{const u=pe.toAbsolute(c.src);if(!i[c.src])try{this.promiseCache[u]||(this.promiseCache[u]=this._getLoadPromiseAndParser(u,c)),i[c.src]=await this.promiseCache[u].promise,t&&t(++r/a)}catch(h){throw delete this.promiseCache[u],delete i[c.src],new Error(`[Loader.load] Failed to load ${u}.
${h}`)}});return await Promise.all(l),s?i[o[0].src]:i}async unload(e){const r=Se(e,i=>({alias:[i],src:i})).map(async i=>{var a,l;const s=pe.toAbsolute(i.src),o=this.promiseCache[s];if(o){const c=await o.promise;delete this.promiseCache[s],await((l=(a=o.parser)==null?void 0:a.unload)==null?void 0:l.call(a,c,i,this))}});await Promise.all(r)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,t)=>(t.name?e[t.name]&&ie(`[Assets] loadParser name conflict "${t.name}"`):ie("[Assets] loadParser should have a name"),{...e,[t.name]:t}),{})}}function Ft(n,e){if(Array.isArray(e)){for(const t of e)if(n.startsWith(`data:${t}`))return!0;return!1}return n.startsWith(`data:${e}`)}function It(n,e){const t=n.split("?")[0],r=pe.extname(t).toLowerCase();return Array.isArray(e)?e.includes(r):r===e}const Sf=".json",Cf="application/json",wf={extension:{type:E.LoadParser,priority:Ne.Low},name:"loadJson",test(n){return Ft(n,Cf)||It(n,Sf)},async load(n){return await(await J.get().fetch(n)).json()}},Af=".txt",Tf="text/plain",Pf={name:"loadTxt",extension:{type:E.LoadParser,priority:Ne.Low,name:"loadTxt"},test(n){return Ft(n,Tf)||It(n,Af)},async load(n){return await(await J.get().fetch(n)).text()}},Mf=["normal","bold","100","200","300","400","500","600","700","800","900"],Ff=[".ttf",".otf",".woff",".woff2"],If=["font/ttf","font/otf","font/woff","font/woff2"],zf=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Of(n){const e=pe.extname(n),i=pe.basename(n,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(a=>a.charAt(0).toUpperCase()+a.slice(1));let s=i.length>0;for(const a of i)if(!a.match(zf)){s=!1;break}let o=i.join(" ");return s||(o=`"${o.replace(/[\\"]/g,"\\$&")}"`),o}const kf=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function Ef(n){return kf.test(n)?n:encodeURI(n)}const Rf={extension:{type:E.LoadParser,priority:Ne.Low},name:"loadWebFont",test(n){return Ft(n,If)||It(n,Ff)},async load(n,e){var r,i,s;const t=J.get().getFontFaceSet();if(t){const o=[],a=((r=e.data)==null?void 0:r.family)??Of(n),l=((s=(i=e.data)==null?void 0:i.weights)==null?void 0:s.filter(u=>Mf.includes(u)))??["normal"],c=e.data??{};for(let u=0;u<l.length;u++){const h=l[u],f=new FontFace(a,`url(${Ef(n)})`,{...c,weight:h});await f.load(),t.add(f),o.push(f)}return Z.set(`${a}-and-url`,{url:n,fontFaces:o}),o.length===1?o[0]:o}return ie("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(n){(Array.isArray(n)?n:[n]).forEach(e=>{Z.remove(e.family),J.get().getFontFaceSet().delete(e)})}};function Fi(n,e=1){var r;const t=(r=Mt.RETINA_PREFIX)==null?void 0:r.exec(n);return t?parseFloat(t[1]):e}function Ii(n,e,t){n.label=t,n._sourceOrigin=t;const r=new U({source:n,label:t}),i=()=>{delete e.promiseCache[t],Z.has(t)&&Z.remove(t)};return r.source.once("destroy",()=>{e.promiseCache[t]&&(ie("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),i())}),r.once("destroy",()=>{n.destroyed||(ie("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),i())}),r}const Uf=".svg",Bf="image/svg+xml",Df={extension:{type:E.LoadParser,priority:Ne.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(n){return Ft(n,Bf)||It(n,Uf)},async load(n,e,t){return e.data.parseAsGraphicsContext??this.config.parseAsGraphicsContext?Nf(n):Lf(n,e,t,this.config.crossOrigin)},unload(n){n.destroy(!0)}};async function Lf(n,e,t,r){var d,v,x;const s=await(await J.get().fetch(n)).blob(),o=URL.createObjectURL(s),a=new Image;a.src=o,a.crossOrigin=r,await a.decode(),URL.revokeObjectURL(o);const l=document.createElement("canvas"),c=l.getContext("2d"),u=((d=e.data)==null?void 0:d.resolution)||Fi(n),h=((v=e.data)==null?void 0:v.width)??a.width,f=((x=e.data)==null?void 0:x.height)??a.height;l.width=h*u,l.height=f*u,c.drawImage(a,0,0,h*u,f*u);const{parseAsGraphicsContext:p,...m}=e.data,g=new st({resource:l,alphaMode:"premultiply-alpha-on-upload",resolution:u,...m});return Ii(g,t,n)}async function Nf(n){const t=await(await J.get().fetch(n)).text(),r=new ge;return r.svg(t),r}const Gf=`(function () {
    'use strict';

    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    async function checkImageBitmap() {
      try {
        if (typeof createImageBitmap !== "function")
          return false;
        const response = await fetch(WHITE_PNG);
        const imageBlob = await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);
        return imageBitmap.width === 1 && imageBitmap.height === 1;
      } catch (e) {
        return false;
      }
    }
    void checkImageBitmap().then((result) => {
      self.postMessage(result);
    });

})();
`;let gt=null,ii=class{constructor(){gt||(gt=URL.createObjectURL(new Blob([Gf],{type:"application/javascript"}))),this.worker=new Worker(gt)}};ii.revokeObjectURL=function(){gt&&(URL.revokeObjectURL(gt),gt=null)};const Wf=`(function () {
    'use strict';

    async function loadImageBitmap(url) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
      }
      const imageBlob = await response.blob();
      const imageBitmap = await createImageBitmap(imageBlob);
      return imageBitmap;
    }
    self.onmessage = async (event) => {
      try {
        const imageBitmap = await loadImageBitmap(event.data.data[0]);
        self.postMessage({
          data: imageBitmap,
          uuid: event.data.uuid,
          id: event.data.id
        }, [imageBitmap]);
      } catch (e) {
        self.postMessage({
          error: e,
          uuid: event.data.uuid,
          id: event.data.id
        });
      }
    };

})();
`;let vt=null;class Aa{constructor(){vt||(vt=URL.createObjectURL(new Blob([Wf],{type:"application/javascript"}))),this.worker=new Worker(vt)}}Aa.revokeObjectURL=function(){vt&&(URL.revokeObjectURL(vt),vt=null)};let $s=0,Tr;class $f{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:t}=new ii;t.addEventListener("message",r=>{t.terminate(),ii.revokeObjectURL(),e(r.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e){return this._run("loadImageBitmap",[e])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Tr===void 0&&(Tr=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Tr&&(this._createdWorkers++,e=new Aa().worker,e.addEventListener("message",t=>{this._complete(t.data),this._returnWorker(t.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,t){await this._initWorkers();const r=new Promise((i,s)=>{this._queue.push({id:e,arguments:t,resolve:i,reject:s})});return this._next(),r}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const t=this._queue.pop(),r=t.id;this._resolveHash[$s]={resolve:t.resolve,reject:t.reject},e.postMessage({data:t.arguments,uuid:$s++,id:r})}}const Vs=new $f,Vf=[".jpeg",".jpg",".png",".webp",".avif"],Hf=["image/jpeg","image/png","image/webp","image/avif"];async function jf(n){const e=await J.get().fetch(n);if(!e.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${n}: ${e.status} ${e.statusText}`);const t=await e.blob();return await createImageBitmap(t)}const Ta={name:"loadTextures",extension:{type:E.LoadParser,priority:Ne.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(n){return Ft(n,Hf)||It(n,Vf)},async load(n,e,t){var s;let r=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Vs.isImageBitmapSupported()?r=await Vs.loadImageBitmap(n):r=await jf(n):r=await new Promise(o=>{r=new Image,r.crossOrigin=this.config.crossOrigin,r.src=n,r.complete?o(r):r.onload=()=>{o(r)}});const i=new st({resource:r,alphaMode:"premultiply-alpha-on-upload",resolution:((s=e.data)==null?void 0:s.resolution)||Fi(n),...e.data});return Ii(i,t,n)},unload(n){n.destroy(!0)}},Pa=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Xf=Pa.map(n=>`video/${n.substring(1)}`);function Yf(n,e,t){t===void 0&&!e.startsWith("data:")?n.crossOrigin=Kf(e):t!==!1&&(n.crossOrigin=typeof t=="string"?t:"anonymous")}function qf(n){return new Promise((e,t)=>{n.addEventListener("canplaythrough",r),n.addEventListener("error",i),n.load();function r(){s(),e()}function i(o){s(),t(o)}function s(){n.removeEventListener("canplaythrough",r),n.removeEventListener("error",i)}})}function Kf(n,e=globalThis.location){if(n.startsWith("data:"))return"";e=e||globalThis.location;const t=new URL(n,document.baseURI);return t.hostname!==e.hostname||t.port!==e.port||t.protocol!==e.protocol?"anonymous":""}const Zf={name:"loadVideo",extension:{type:E.LoadParser,name:"loadVideo"},test(n){const e=Ft(n,Xf),t=It(n,Pa);return e||t},async load(n,e,t){var l,c;const r={...yn.defaultOptions,resolution:((l=e.data)==null?void 0:l.resolution)||Fi(n),alphaMode:((c=e.data)==null?void 0:c.alphaMode)||await Ro(),...e.data},i=document.createElement("video"),s={preload:r.autoLoad!==!1?"auto":void 0,"webkit-playsinline":r.playsinline!==!1?"":void 0,playsinline:r.playsinline!==!1?"":void 0,muted:r.muted===!0?"":void 0,loop:r.loop===!0?"":void 0,autoplay:r.autoPlay!==!1?"":void 0};Object.keys(s).forEach(u=>{const h=s[u];h!==void 0&&i.setAttribute(u,h)}),r.muted===!0&&(i.muted=!0),Yf(i,n,r.crossorigin);const o=document.createElement("source");let a;if(n.startsWith("data:"))a=n.slice(5,n.indexOf(";"));else if(!n.startsWith("blob:")){const u=n.split("?")[0].slice(n.lastIndexOf(".")+1).toLowerCase();a=yn.MIME_TYPES[u]||`video/${u}`}return o.src=n,a&&(o.type=a),new Promise(u=>{const h=async()=>{const f=new yn({...r,resource:i});i.removeEventListener("canplay",h),e.data.preload&&await qf(i),u(Ii(f,t,n))};i.addEventListener("canplay",h),i.appendChild(o)})},unload(n){n.destroy(!0)}},Ma={extension:{type:E.ResolveParser,name:"resolveTexture"},test:Ta.test,parse:n=>{var e;return{resolution:parseFloat(((e=Mt.RETINA_PREFIX.exec(n))==null?void 0:e[1])??"1"),format:n.split(".").pop(),src:n}}},Qf={extension:{type:E.ResolveParser,priority:-2,name:"resolveJson"},test:n=>Mt.RETINA_PREFIX.test(n)&&n.endsWith(".json"),parse:Ma.parse};class Jf{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Mt,this.loader=new bf,this.cache=Z,this._backgroundLoader=new ff(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var s,o;if(this._initialized){ie("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let a=e.manifest;typeof a=="string"&&(a=await this.load(a)),this.resolver.addManifest(a)}const t=((s=e.texturePreference)==null?void 0:s.resolution)??1,r=typeof t=="number"?[t]:t,i=await this._detectFormats({preferredFormats:(o=e.texturePreference)==null?void 0:o.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:i,resolution:r}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,t){this._initialized||await this.init();const r=zn(e),i=Se(e).map(a=>{if(typeof a!="string"){const l=this.resolver.getAlias(a);return l.some(c=>!this.resolver.hasKey(c))&&this.add(a),Array.isArray(l)?l[0]:l}return this.resolver.hasKey(a)||this.add({alias:a,src:a}),a}),s=this.resolver.resolve(i),o=await this._mapLoadToResolve(s,t);return r?o[i[0]]:o}addBundle(e,t){this.resolver.addBundle(e,t)}async loadBundle(e,t){this._initialized||await this.init();let r=!1;typeof e=="string"&&(r=!0,e=[e]);const i=this.resolver.resolveBundle(e),s={},o=Object.keys(i);let a=0,l=0;const c=()=>{t==null||t(++a/l)},u=o.map(h=>{const f=i[h];return l+=Object.keys(f).length,this._mapLoadToResolve(f,c).then(p=>{s[h]=p})});return await Promise.all(u),r?s[e[0]]:s}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const t=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(t))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const t=this.resolver.resolveBundle(e);Object.values(t).forEach(r=>{this._backgroundLoader.add(Object.values(r))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return Z.get(e);const t={};for(let r=0;r<e.length;r++)t[r]=Z.get(e[r]);return t}async _mapLoadToResolve(e,t){const r=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const i=await this.loader.load(r,t);this._backgroundLoader.active=!0;const s={};return r.forEach(o=>{const a=i[o.src],l=[o.src];o.alias&&l.push(...o.alias),l.forEach(c=>{s[c]=a}),Z.set(l,a)}),s}async unload(e){this._initialized||await this.init();const t=Se(e).map(i=>typeof i!="string"?i.src:i),r=this.resolver.resolve(t);await this._unloadFromResolved(r)}async unloadBundle(e){this._initialized||await this.init(),e=Se(e);const t=this.resolver.resolveBundle(e),r=Object.keys(t).map(i=>this._unloadFromResolved(t[i]));await Promise.all(r)}async _unloadFromResolved(e){const t=Object.values(e);t.forEach(r=>{Z.remove(r.src)}),await this.loader.unload(t)}async _detectFormats(e){let t=[];e.preferredFormats&&(t=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const r of e.detections)e.skipDetections||await r.test()?t=await r.add(t):e.skipDetections||(t=await r.remove(t));return t=t.filter((r,i)=>t.indexOf(r)===i),t}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(t=>{t.config&&Object.keys(t.config).filter(r=>r in e).forEach(r=>{t.config[r]=e[r]})})}}const Nt=new Jf;ce.handleByList(E.LoadParser,Nt.loader.parsers).handleByList(E.ResolveParser,Nt.resolver.parsers).handleByList(E.CacheParser,Nt.cache.parsers).handleByList(E.DetectionParser,Nt.detections);ce.add(df,mf,pf,_f,vf,xf,yf,wf,Pf,Rf,Df,Ta,Zf,hf,cf,Ma,Qf);const Hs={loader:E.LoadParser,resolver:E.ResolveParser,cache:E.CacheParser,detection:E.DetectionParser};ce.handle(E.Asset,n=>{const e=n.ref;Object.entries(Hs).filter(([t])=>!!e[t]).forEach(([t,r])=>ce.add(Object.assign(e[t],{extension:e[t].extension??r})))},n=>{const e=n.ref;Object.keys(Hs).filter(t=>!!e[t]).forEach(t=>ce.remove(e[t]))});var ed=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,td=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,js=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct AlphaUniforms {
  uAlpha:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> alphaUniforms : AlphaUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
 
    var sample = textureSample(uTexture, uSampler, uv);
    
    return sample * alphaUniforms.uAlpha;
}`;const Fa=class Ia extends W{constructor(e){e={...Ia.defaultOptions,...e};const t=D.from({vertex:{source:js,entryPoint:"mainVertex"},fragment:{source:js,entryPoint:"mainFragment"}}),r=G.from({vertex:ed,fragment:td,name:"alpha-filter"}),{alpha:i,...s}=e,o=new jo({uAlpha:{value:i,type:"f32"}});super({...s,gpuProgram:t,glProgram:r,resources:{alphaUniforms:o}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(e){this.resources.alphaUniforms.uniforms.uAlpha=e}};Fa.defaultOptions={alpha:1};let nd=Fa,rd=0;class id{constructor(e){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=e||{},this.enableFullScreen=!1}createTexture(e,t,r){const i=new Ae({...this.textureOptions,width:e,height:t,resolution:1,antialias:r,autoGarbageCollect:!0});return new U({source:i,label:`texturePool_${rd++}`})}getOptimalTexture(e,t,r=1,i){let s=Math.ceil(e*r-1e-6),o=Math.ceil(t*r-1e-6);s=Fn(s),o=Fn(o);const a=(s<<17)+(o<<1)+(i?1:0);this._texturePool[a]||(this._texturePool[a]=[]);let l=this._texturePool[a].pop();return l||(l=this.createTexture(s,o,i)),l.source._resolution=r,l.source.width=s/r,l.source.height=o/r,l.source.pixelWidth=s,l.source.pixelHeight=o,l.frame.x=0,l.frame.y=0,l.frame.width=e,l.frame.height=t,l.updateUvs(),this._poolKeyHash[l.uid]=a,l}getSameSizeTexture(e,t=!1){const r=e.source;return this.getOptimalTexture(e.width,e.height,r._resolution,t)}returnTexture(e){const t=this._poolKeyHash[e.uid];this._texturePool[t].push(e)}clear(e){if(e=e!==!1,e)for(const t in this._texturePool){const r=this._texturePool[t];if(r)for(let i=0;i<r.length;i++)r[i].destroy(!0)}this._texturePool={}}}const xe=new id,za={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},sd=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function od(n){const e=za[n],t=e.length;let r=sd,i="";const s="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";let o;for(let a=0;a<n;a++){let l=s.replace("%index%",a.toString());o=a,a>=t&&(o=n-a-1),l=l.replace("%value%",e[o].toString()),i+=l,i+=`
`}return r=r.replace("%blur%",i),r=r.replace("%size%",n.toString()),r}const ad=`
    in vec2 aPosition;

    uniform float uStrength;

    out vec2 vBlurTexCoords[%size%];

    uniform vec4 uInputSize;
    uniform vec4 uOutputFrame;
    uniform vec4 uOutputTexture;

    vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

    vec2 filterTextureCoord( void )
    {
        return aPosition * (uOutputFrame.zw * uInputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        float pixelStrength = uInputSize.%dimension% * uStrength;

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function ld(n,e){const t=Math.ceil(n/2);let r=ad,i="",s;e?s="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":s="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let o=0;o<n;o++){let a=s.replace("%index%",o.toString());a=a.replace("%sampleIndex%",`${o-(t-1)}.0`),i+=a,i+=`
`}return r=r.replace("%blur%",i),r=r.replace("%size%",n.toString()),r=r.replace("%dimension%",e?"z":"w"),r}function ud(n,e){const t=ld(e,n),r=od(e);return G.from({vertex:t,fragment:r,name:`blur-${n?"horizontal":"vertical"}-pass-filter`})}var cd=`

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlurUniforms {
  uStrength:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    %blur-struct%
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}


@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {

  let filteredCord = filterTextureCoord(aPosition);

  let strength = gfu.uInputSize.w * blurUniforms.uStrength;

  return VSOutput(
   filterVertexPosition(aPosition),
    %blur-vertex-out%
  );
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  %blur-fragment-in%
) -> @location(0) vec4<f32> {

    var   finalColor = vec4(0.0);

    %blur-sampling%

    return finalColor;
}`;function hd(n,e){const t=za[e],r=t.length,i=[],s=[],o=[];for(let h=0;h<e;h++){i[h]=`@location(${h}) offset${h}: vec2<f32>,`,n?s[h]=`filteredCord + vec2(${h-r+1} * strength, 0.0),`:s[h]=`filteredCord + vec2(0.0, ${h-r+1} * strength),`;const f=h<r?h:e-h-1,p=t[f].toString();o[h]=`finalColor += textureSample(uTexture, uSampler, offset${h}) * ${p};`}const a=i.join(`
`),l=s.join(`
`),c=o.join(`
`),u=cd.replace("%blur-struct%",a).replace("%blur-vertex-out%",l).replace("%blur-fragment-in%",a).replace("%blur-sampling%",c);return D.from({vertex:{source:u,entryPoint:"mainVertex"},fragment:{source:u,entryPoint:"mainFragment"}})}const Oa=class ka extends W{constructor(e){e={...ka.defaultOptions,...e};const t=ud(e.horizontal,e.kernelSize),r=hd(e.horizontal,e.kernelSize);super({glProgram:t,gpuProgram:r,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}},...e}),this.horizontal=e.horizontal,this._quality=0,this.quality=e.quality,this.blur=e.strength,this._uniforms=this.resources.blurUniforms.uniforms}apply(e,t,r,i){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)e.applyFilter(this,t,r,i);else{const s=xe.getSameSizeTexture(t);let o=t,a=s;this._state.blend=!1;for(let l=0;l<this.passes-1;l++){e.applyFilter(this,o,a,e.renderer.type===On.WEBGPU);const c=a;a=o,o=c}this._state.blend=!0,e.applyFilter(this,o,r,i),xe.returnTexture(s)}}get blur(){return this.strength}set blur(e){this.padding=1+Math.abs(e)*2,this.strength=e}get quality(){return this._quality}set quality(e){this._quality=e,this.passes=e}};Oa.defaultOptions={strength:8,quality:4,kernelSize:5};let Xs=Oa;class it extends te{constructor(e){e instanceof ge&&(e={context:e});const{context:t,roundPixels:r,...i}=e||{};super({label:"Graphics",...i}),this.canBundle=!0,this.renderPipeId="graphics",this._roundPixels=0,t?this._context=t:this._context=this._ownedContext=new ge,this._context.on("update",this.onViewUpdate,this),this.allowChildren=!1,this.roundPixels=r??!1}set context(e){e!==this._context&&(this._context.off("update",this.onViewUpdate,this),this._context=e,this._context.on("update",this.onViewUpdate,this),this.onViewUpdate())}get context(){return this._context}get bounds(){return this._context.bounds}addBounds(e){e.addBounds(this._context.bounds)}containsPoint(e){return this._context.containsPoint(e)}get roundPixels(){return!!this._roundPixels}set roundPixels(e){this._roundPixels=e?1:0}onViewUpdate(){if(this._didChangeId+=4096,this._didGraphicsUpdate=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const e=this.renderGroup||this.parentRenderGroup;e&&e.onChildViewUpdate(this)}destroy(e){this._ownedContext&&!e?this._ownedContext.destroy(e):(e===!0||(e==null?void 0:e.context)===!0)&&this._context.destroy(e),this._ownedContext=null,this._context=null,super.destroy(e)}_callContextMethod(e,t){return this.context[e](...t),this}setFillStyle(...e){return this._callContextMethod("setFillStyle",e)}setStrokeStyle(...e){return this._callContextMethod("setStrokeStyle",e)}fill(...e){return this._callContextMethod("fill",e)}stroke(...e){return this._callContextMethod("stroke",e)}texture(...e){return this._callContextMethod("texture",e)}beginPath(){return this._callContextMethod("beginPath",[])}cut(){return this._callContextMethod("cut",[])}arc(...e){return this._callContextMethod("arc",e)}arcTo(...e){return this._callContextMethod("arcTo",e)}arcToSvg(...e){return this._callContextMethod("arcToSvg",e)}bezierCurveTo(...e){return this._callContextMethod("bezierCurveTo",e)}closePath(){return this._callContextMethod("closePath",[])}ellipse(...e){return this._callContextMethod("ellipse",e)}circle(...e){return this._callContextMethod("circle",e)}path(...e){return this._callContextMethod("path",e)}lineTo(...e){return this._callContextMethod("lineTo",e)}moveTo(...e){return this._callContextMethod("moveTo",e)}quadraticCurveTo(...e){return this._callContextMethod("quadraticCurveTo",e)}rect(...e){return this._callContextMethod("rect",e)}roundRect(...e){return this._callContextMethod("roundRect",e)}poly(...e){return this._callContextMethod("poly",e)}regularPoly(...e){return this._callContextMethod("regularPoly",e)}roundPoly(...e){return this._callContextMethod("roundPoly",e)}roundShape(...e){return this._callContextMethod("roundShape",e)}filletRect(...e){return this._callContextMethod("filletRect",e)}chamferRect(...e){return this._callContextMethod("chamferRect",e)}star(...e){return this._callContextMethod("star",e)}svg(...e){return this._callContextMethod("svg",e)}restore(...e){return this._callContextMethod("restore",e)}save(){return this._callContextMethod("save",[])}getTransform(){return this.context.getTransform()}resetTransform(){return this._callContextMethod("resetTransform",[])}rotateTransform(...e){return this._callContextMethod("rotate",e)}scaleTransform(...e){return this._callContextMethod("scale",e)}setTransform(...e){return this._callContextMethod("setTransform",e)}transform(...e){return this._callContextMethod("transform",e)}translateTransform(...e){return this._callContextMethod("translate",e)}clear(){return this._callContextMethod("clear",[])}get fillStyle(){return this._context.fillStyle}set fillStyle(e){this._context.fillStyle=e}get strokeStyle(){return this._context.strokeStyle}set strokeStyle(e){this._context.strokeStyle=e}clone(e=!1){return e?new it(this._context.clone()):(this._ownedContext=null,new it(this._context))}lineStyle(e,t,r){O(X,"Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");const i={};return e&&(i.width=e),t&&(i.color=t),r&&(i.alpha=r),this.context.strokeStyle=i,this}beginFill(e,t){O(X,"Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");const r={};return e&&(r.color=e),t&&(r.alpha=t),this.context.fillStyle=r,this}endFill(){O(X,"Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."),this.context.fill();const e=this.context.strokeStyle;return(e.width!==ge.defaultStrokeStyle.width||e.color!==ge.defaultStrokeStyle.color||e.alpha!==ge.defaultStrokeStyle.alpha)&&this.context.stroke(),this}drawCircle(...e){return O(X,"Graphics#drawCircle has been renamed to Graphics#circle"),this._callContextMethod("circle",e)}drawEllipse(...e){return O(X,"Graphics#drawEllipse has been renamed to Graphics#ellipse"),this._callContextMethod("ellipse",e)}drawPolygon(...e){return O(X,"Graphics#drawPolygon has been renamed to Graphics#poly"),this._callContextMethod("poly",e)}drawRect(...e){return O(X,"Graphics#drawRect has been renamed to Graphics#rect"),this._callContextMethod("rect",e)}drawRoundedRect(...e){return O(X,"Graphics#drawRoundedRect has been renamed to Graphics#roundRect"),this._callContextMethod("roundRect",e)}drawStar(...e){return O(X,"Graphics#drawStar has been renamed to Graphics#star"),this._callContextMethod("star",e)}}class fd extends te{constructor(e,t){const{text:r,resolution:i,style:s,anchor:o,width:a,height:l,roundPixels:c,...u}=e;super({...u}),this.batched=!0,this._resolution=null,this._didTextUpdate=!0,this._roundPixels=0,this._bounds=new Oe,this._boundsDirty=!0,this._styleClass=t,this.text=r??"",this.style=s,this.resolution=i??null,this.allowChildren=!1,this._anchor=new ue({_onUpdate:()=>{this.onViewUpdate()}}),o&&(this.anchor=o),this.roundPixels=c??!1,a&&(this.width=a),l&&(this.height=l)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}get roundPixels(){return!!this._roundPixels}set roundPixels(e){this._roundPixels=e?1:0}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var t;e=e||{},(t=this._style)==null||t.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,t){let r,i;typeof e!="object"?(r=e,i=t??e):(r=e.width,i=e.height??e.width),r!==void 0&&this._setWidth(r,this.bounds.width),i!==void 0&&this._setHeight(i,this.bounds.height)}addBounds(e){const t=this.bounds;e.addFrame(t.minX,t.minY,t.maxX,t.maxY)}containsPoint(e){const t=this.bounds.width,r=this.bounds.height,i=-t*this.anchor.x;let s=0;return e.x>=i&&e.x<=i+t&&(s=-r*this.anchor.y,e.y>=s&&e.y<=s+r)}onViewUpdate(){if(this._didChangeId+=4096,this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0,this._didTextUpdate=!0;const e=this.renderGroup||this.parentRenderGroup;e&&e.onChildViewUpdate(this)}_getKey(){return`${this.text}:${this._style.styleKey}-${this.resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function dd(n,e){let t=n[0]??{};return(typeof t=="string"||n[1])&&(O(X,`use new ${e}({ text: "hi!", style }) instead`),t={text:t,style:n[1]}),t}class pd extends fd{constructor(...e){const t=dd(e,"Text");super(t,Ct),this.renderPipeId="text"}_updateBounds(){const e=this._bounds,t=this._style.padding,r=this._anchor,i=ri.measureText(this._text,this._style),{width:s,height:o}=i;e.minX=-r._x*s-t,e.maxX=e.minX+s+t*2,e.minY=-r._y*o-t,e.maxY=e.minY+o+t*2}}ce.add(ru,iu);var zi={exports:{}};zi.exports;(function(n){(function(){var e,t,r,i,s,o,a,l,c,u,h,f,p,m,g;r=Math.floor,u=Math.min,t=function(d,v){return d<v?-1:d>v?1:0},c=function(d,v,x,y,_){var b;if(x==null&&(x=0),_==null&&(_=t),x<0)throw new Error("lo must be non-negative");for(y==null&&(y=d.length);x<y;)b=r((x+y)/2),_(v,d[b])<0?y=b:x=b+1;return[].splice.apply(d,[x,x-x].concat(v)),v},o=function(d,v,x){return x==null&&(x=t),d.push(v),m(d,0,d.length-1,x)},s=function(d,v){var x,y;return v==null&&(v=t),x=d.pop(),d.length?(y=d[0],d[0]=x,g(d,0,v)):y=x,y},l=function(d,v,x){var y;return x==null&&(x=t),y=d[0],d[0]=v,g(d,0,x),y},a=function(d,v,x){var y;return x==null&&(x=t),d.length&&x(d[0],v)<0&&(y=[d[0],v],v=y[0],d[0]=y[1],g(d,0,x)),v},i=function(d,v){var x,y,_,b,C,A;for(v==null&&(v=t),b=(function(){A=[];for(var T=0,w=r(d.length/2);0<=w?T<w:T>w;0<=w?T++:T--)A.push(T);return A}).apply(this).reverse(),C=[],y=0,_=b.length;y<_;y++)x=b[y],C.push(g(d,x,v));return C},p=function(d,v,x){var y;if(x==null&&(x=t),y=d.indexOf(v),y!==-1)return m(d,0,y,x),g(d,y,x)},h=function(d,v,x){var y,_,b,C,A;if(x==null&&(x=t),_=d.slice(0,v),!_.length)return _;for(i(_,x),A=d.slice(v),b=0,C=A.length;b<C;b++)y=A[b],a(_,y,x);return _.sort(x).reverse()},f=function(d,v,x){var y,_,b,C,A,T,w,S,B;if(x==null&&(x=t),v*10<=d.length){if(b=d.slice(0,v).sort(x),!b.length)return b;for(_=b[b.length-1],w=d.slice(v),C=0,T=w.length;C<T;C++)y=w[C],x(y,_)<0&&(c(b,y,0,null,x),b.pop(),_=b[b.length-1]);return b}for(i(d,x),B=[],A=0,S=u(v,d.length);0<=S?A<S:A>S;0<=S?++A:--A)B.push(s(d,x));return B},m=function(d,v,x,y){var _,b,C;for(y==null&&(y=t),_=d[x];x>v;){if(C=x-1>>1,b=d[C],y(_,b)<0){d[x]=b,x=C;continue}break}return d[x]=_},g=function(d,v,x){var y,_,b,C,A;for(x==null&&(x=t),_=d.length,A=v,b=d[v],y=2*v+1;y<_;)C=y+1,C<_&&!(x(d[y],d[C])<0)&&(y=C),d[v]=d[y],v=y,y=2*v+1;return d[v]=b,m(d,A,v,x)},e=function(){d.push=o,d.pop=s,d.replace=l,d.pushpop=a,d.heapify=i,d.updateItem=p,d.nlargest=h,d.nsmallest=f;function d(v){this.cmp=v??t,this.nodes=[]}return d.prototype.push=function(v){return o(this.nodes,v,this.cmp)},d.prototype.pop=function(){return s(this.nodes,this.cmp)},d.prototype.peek=function(){return this.nodes[0]},d.prototype.contains=function(v){return this.nodes.indexOf(v)!==-1},d.prototype.replace=function(v){return l(this.nodes,v,this.cmp)},d.prototype.pushpop=function(v){return a(this.nodes,v,this.cmp)},d.prototype.heapify=function(){return i(this.nodes,this.cmp)},d.prototype.updateItem=function(v){return p(this.nodes,v,this.cmp)},d.prototype.clear=function(){return this.nodes=[]},d.prototype.empty=function(){return this.nodes.length===0},d.prototype.size=function(){return this.nodes.length},d.prototype.clone=function(){var v;return v=new d,v.nodes=this.nodes.slice(0),v},d.prototype.toArray=function(){return this.nodes.slice(0)},d.prototype.insert=d.prototype.push,d.prototype.top=d.prototype.peek,d.prototype.front=d.prototype.peek,d.prototype.has=d.prototype.contains,d.prototype.copy=d.prototype.clone,d}(),n!==null&&n.exports?n.exports=e:window.Heap=e}).call(su)})(zi);var md=zi.exports,Hn=md;function gd(n,e,t){this.x=n,this.y=e,this.walkable=t===void 0?!0:t}var Oi=gd,vd={Always:1,Never:2,IfAtMostOneObstacle:3,OnlyWhenNoObstacles:4},ye=vd,Ea=Oi,mn=ye;function De(n,e,t){var r;typeof n!="object"?r=n:(e=n.length,r=n[0].length,t=n),this.width=r,this.height=e,this.nodes=this._buildNodes(r,e,t)}De.prototype._buildNodes=function(n,e,t){var r,i,s=new Array(e);for(r=0;r<e;++r)for(s[r]=new Array(n),i=0;i<n;++i)s[r][i]=new Ea(i,r);if(t===void 0)return s;if(t.length!==e||t[0].length!==n)throw new Error("Matrix size does not fit");for(r=0;r<e;++r)for(i=0;i<n;++i)t[r][i]&&(s[r][i].walkable=!1);return s};De.prototype.getNodeAt=function(n,e){return this.nodes[e][n]};De.prototype.isWalkableAt=function(n,e){return this.isInside(n,e)&&this.nodes[e][n].walkable};De.prototype.isInside=function(n,e){return n>=0&&n<this.width&&e>=0&&e<this.height};De.prototype.setWalkableAt=function(n,e,t){this.nodes[e][n].walkable=t};De.prototype.getNeighbors=function(n,e){var t=n.x,r=n.y,i=[],s=!1,o=!1,a=!1,l=!1,c=!1,u=!1,h=!1,f=!1,p=this.nodes;if(this.isWalkableAt(t,r-1)&&(i.push(p[r-1][t]),s=!0),this.isWalkableAt(t+1,r)&&(i.push(p[r][t+1]),a=!0),this.isWalkableAt(t,r+1)&&(i.push(p[r+1][t]),c=!0),this.isWalkableAt(t-1,r)&&(i.push(p[r][t-1]),h=!0),e===mn.Never)return i;if(e===mn.OnlyWhenNoObstacles)o=h&&s,l=s&&a,u=a&&c,f=c&&h;else if(e===mn.IfAtMostOneObstacle)o=h||s,l=s||a,u=a||c,f=c||h;else if(e===mn.Always)o=!0,l=!0,u=!0,f=!0;else throw new Error("Incorrect value of diagonalMovement");return o&&this.isWalkableAt(t-1,r-1)&&i.push(p[r-1][t-1]),l&&this.isWalkableAt(t+1,r-1)&&i.push(p[r-1][t+1]),u&&this.isWalkableAt(t+1,r+1)&&i.push(p[r+1][t+1]),f&&this.isWalkableAt(t-1,r+1)&&i.push(p[r+1][t-1]),i};De.prototype.clone=function(){var n,e,t=this.width,r=this.height,i=this.nodes,s=new De(t,r),o=new Array(r);for(n=0;n<r;++n)for(o[n]=new Array(t),e=0;e<t;++e)o[n][e]=new Ea(e,n,i[n][e].walkable);return s.nodes=o,s};var xd=De,me={};function si(n){for(var e=[[n.x,n.y]];n.parent;)n=n.parent,e.push([n.x,n.y]);return e.reverse()}me.backtrace=si;function yd(n,e){var t=si(n),r=si(e);return t.concat(r.reverse())}me.biBacktrace=yd;function _d(n){var e,t=0,r,i,s,o;for(e=1;e<n.length;++e)r=n[e-1],i=n[e],s=r[0]-i[0],o=r[1]-i[1],t+=Math.sqrt(s*s+o*o);return t}me.pathLength=_d;function ki(n,e,t,r){var i=Math.abs,s=[],o,a,l,c,u,h;for(l=i(t-n),c=i(r-e),o=n<t?1:-1,a=e<r?1:-1,u=l-c;s.push([n,e]),!(n===t&&e===r);)h=2*u,h>-c&&(u=u-c,n=n+o),h<l&&(u=u+l,e=e+a);return s}me.interpolate=ki;function bd(n){var e=[],t=n.length,r,i,s,o,a,l;if(t<2)return e;for(a=0;a<t-1;++a)for(r=n[a],i=n[a+1],s=ki(r[0],r[1],i[0],i[1]),o=s.length,l=0;l<o-1;++l)e.push(s[l]);return e.push(n[t-1]),e}me.expandPath=bd;function Sd(n,e){var t=e.length,r=e[0][0],i=e[0][1],s=e[t-1][0],o=e[t-1][1],a,l,c,u,h,f,p,m,g,d,v;for(a=r,l=i,h=[[a,l]],f=2;f<t;++f){for(m=e[f],c=m[0],u=m[1],g=ki(a,l,c,u),v=!1,p=1;p<g.length;++p)if(d=g[p],!n.isWalkableAt(d[0],d[1])){v=!0;break}if(v){let x=e[f-1];h.push(x),a=x[0],l=x[1]}}return h.push([s,o]),h}me.smoothenPath=Sd;function Cd(n){if(n.length<3)return n;var e=[],t=n[0][0],r=n[0][1],i=n[1][0],s=n[1][1],o=i-t,a=s-r,l,c,u,h,f,p;for(f=Math.sqrt(o*o+a*a),o/=f,a/=f,e.push([t,r]),p=2;p<n.length;p++)l=i,c=s,u=o,h=a,i=n[p][0],s=n[p][1],o=i-l,a=s-c,f=Math.sqrt(o*o+a*a),o/=f,a/=f,(o!==u||a!==h)&&e.push([l,c]);return e.push([i,s]),e}me.compressPath=Cd;var Qt={manhattan:function(n,e){return n+e},euclidean:function(n,e){return Math.sqrt(n*n+e*e)},octile:function(n,e){var t=Math.SQRT2-1;return n<e?t*n+e:t*e+n},chebyshev:function(n,e){return Math.max(n,e)}},wd=Hn,Ad=me,Pr=Qt,gn=ye;function Ra(n){n=n||{},this.allowDiagonal=n.allowDiagonal,this.dontCrossCorners=n.dontCrossCorners,this.heuristic=n.heuristic||Pr.manhattan,this.weight=n.weight||1,this.diagonalMovement=n.diagonalMovement,this.diagonalMovement||(this.allowDiagonal?this.dontCrossCorners?this.diagonalMovement=gn.OnlyWhenNoObstacles:this.diagonalMovement=gn.IfAtMostOneObstacle:this.diagonalMovement=gn.Never),this.diagonalMovement===gn.Never?this.heuristic=n.heuristic||Pr.manhattan:this.heuristic=n.heuristic||Pr.octile}Ra.prototype.findPath=function(n,e,t,r,i){var s=new wd(function(b,C){return b.f-C.f}),o=i.getNodeAt(n,e),a=i.getNodeAt(t,r),l=this.heuristic,c=this.diagonalMovement,u=this.weight,h=Math.abs,f=Math.SQRT2,p,m,g,d,v,x,y,_;for(o.g=0,o.f=0,s.push(o),o.opened=!0;!s.empty();){if(p=s.pop(),p.closed=!0,p===a)return Ad.backtrace(a);for(m=i.getNeighbors(p,c),d=0,v=m.length;d<v;++d)g=m[d],!g.closed&&(x=g.x,y=g.y,_=p.g+(x-p.x===0||y-p.y===0?1:f),(!g.opened||_<g.g)&&(g.g=_,g.h=g.h||u*l(h(x-t),h(y-r)),g.f=g.g+g.h,g.parent=p,g.opened?s.updateItem(g):(s.push(g),g.opened=!0)))}return[]};var Ei=Ra,Ua=Ei;function En(n){Ua.call(this,n);var e=this.heuristic;this.heuristic=function(t,r){return e(t,r)*1e6}}En.prototype=new Ua;En.prototype.constructor=En;var Td=En,Pd=me,Mr=ye;function Ba(n){n=n||{},this.allowDiagonal=n.allowDiagonal,this.dontCrossCorners=n.dontCrossCorners,this.diagonalMovement=n.diagonalMovement,this.diagonalMovement||(this.allowDiagonal?this.dontCrossCorners?this.diagonalMovement=Mr.OnlyWhenNoObstacles:this.diagonalMovement=Mr.IfAtMostOneObstacle:this.diagonalMovement=Mr.Never)}Ba.prototype.findPath=function(n,e,t,r,i){var s=[],o=this.diagonalMovement,a=i.getNodeAt(n,e),l=i.getNodeAt(t,r),c,u,h,f,p;for(s.push(a),a.opened=!0;s.length;){if(h=s.shift(),h.closed=!0,h===l)return Pd.backtrace(l);for(c=i.getNeighbors(h,o),f=0,p=c.length;f<p;++f)u=c[f],!(u.closed||u.opened)&&(s.push(u),u.opened=!0,u.parent=h)}return[]};var Md=Ba,Da=Ei;function Rn(n){Da.call(this,n),this.heuristic=function(e,t){return 0}}Rn.prototype=new Da;Rn.prototype.constructor=Rn;var Fd=Rn,Ys=Hn,qs=me,Fr=Qt,vn=ye;function La(n){n=n||{},this.allowDiagonal=n.allowDiagonal,this.dontCrossCorners=n.dontCrossCorners,this.diagonalMovement=n.diagonalMovement,this.heuristic=n.heuristic||Fr.manhattan,this.weight=n.weight||1,this.diagonalMovement||(this.allowDiagonal?this.dontCrossCorners?this.diagonalMovement=vn.OnlyWhenNoObstacles:this.diagonalMovement=vn.IfAtMostOneObstacle:this.diagonalMovement=vn.Never),this.diagonalMovement===vn.Never?this.heuristic=n.heuristic||Fr.manhattan:this.heuristic=n.heuristic||Fr.octile}La.prototype.findPath=function(n,e,t,r,i){var s=function(w,S){return w.f-S.f},o=new Ys(s),a=new Ys(s),l=i.getNodeAt(n,e),c=i.getNodeAt(t,r),u=this.heuristic,h=this.diagonalMovement,f=this.weight,p=Math.abs,m=Math.SQRT2,g,d,v,x,y,_,b,C,A=1,T=2;for(l.g=0,l.f=0,o.push(l),l.opened=A,c.g=0,c.f=0,a.push(c),c.opened=T;!o.empty()&&!a.empty();){for(g=o.pop(),g.closed=!0,d=i.getNeighbors(g,h),x=0,y=d.length;x<y;++x)if(v=d[x],!v.closed){if(v.opened===T)return qs.biBacktrace(g,v);_=v.x,b=v.y,C=g.g+(_-g.x===0||b-g.y===0?1:m),(!v.opened||C<v.g)&&(v.g=C,v.h=v.h||f*u(p(_-t),p(b-r)),v.f=v.g+v.h,v.parent=g,v.opened?o.updateItem(v):(o.push(v),v.opened=A))}for(g=a.pop(),g.closed=!0,d=i.getNeighbors(g,h),x=0,y=d.length;x<y;++x)if(v=d[x],!v.closed){if(v.opened===A)return qs.biBacktrace(v,g);_=v.x,b=v.y,C=g.g+(_-g.x===0||b-g.y===0?1:m),(!v.opened||C<v.g)&&(v.g=C,v.h=v.h||f*u(p(_-n),p(b-e)),v.f=v.g+v.h,v.parent=g,v.opened?a.updateItem(v):(a.push(v),v.opened=T))}}return[]};var Ri=La,Na=Ri;function Un(n){Na.call(this,n);var e=this.heuristic;this.heuristic=function(t,r){return e(t,r)*1e6}}Un.prototype=new Na;Un.prototype.constructor=Un;var Id=Un,Ks=me,Ir=ye;function Ga(n){n=n||{},this.allowDiagonal=n.allowDiagonal,this.dontCrossCorners=n.dontCrossCorners,this.diagonalMovement=n.diagonalMovement,this.diagonalMovement||(this.allowDiagonal?this.dontCrossCorners?this.diagonalMovement=Ir.OnlyWhenNoObstacles:this.diagonalMovement=Ir.IfAtMostOneObstacle:this.diagonalMovement=Ir.Never)}Ga.prototype.findPath=function(n,e,t,r,i){var s=i.getNodeAt(n,e),o=i.getNodeAt(t,r),a=[],l=[],c,u,h,f=this.diagonalMovement,p=0,m=1,g,d;for(a.push(s),s.opened=!0,s.by=p,l.push(o),o.opened=!0,o.by=m;a.length&&l.length;){for(h=a.shift(),h.closed=!0,c=i.getNeighbors(h,f),g=0,d=c.length;g<d;++g)if(u=c[g],!u.closed){if(u.opened){if(u.by===m)return Ks.biBacktrace(h,u);continue}a.push(u),u.parent=h,u.opened=!0,u.by=p}for(h=l.shift(),h.closed=!0,c=i.getNeighbors(h,f),g=0,d=c.length;g<d;++g)if(u=c[g],!u.closed){if(u.opened){if(u.by===p)return Ks.biBacktrace(u,h);continue}l.push(u),u.parent=h,u.opened=!0,u.by=m}}return[]};var zd=Ga,Wa=Ri;function Bn(n){Wa.call(this,n),this.heuristic=function(e,t){return 0}}Bn.prototype=new Wa;Bn.prototype.constructor=Bn;var Od=Bn,zr=Qt,Zs=Oi,xn=ye;function $a(n){n=n||{},this.allowDiagonal=n.allowDiagonal,this.dontCrossCorners=n.dontCrossCorners,this.diagonalMovement=n.diagonalMovement,this.heuristic=n.heuristic||zr.manhattan,this.weight=n.weight||1,this.trackRecursion=n.trackRecursion||!1,this.timeLimit=n.timeLimit||1/0,this.diagonalMovement||(this.allowDiagonal?this.dontCrossCorners?this.diagonalMovement=xn.OnlyWhenNoObstacles:this.diagonalMovement=xn.IfAtMostOneObstacle:this.diagonalMovement=xn.Never),this.diagonalMovement===xn.Never?this.heuristic=n.heuristic||zr.manhattan:this.heuristic=n.heuristic||zr.octile}$a.prototype.findPath=function(n,e,t,r,i){var s=new Date().getTime(),o=(function(g,d){return this.heuristic(Math.abs(d.x-g.x),Math.abs(d.y-g.y))}).bind(this),a=function(g,d){return g.x===d.x||g.y===d.y?1:Math.SQRT2},l=(function(g,d,v,x,y){if(this.timeLimit>0&&new Date().getTime()-s>this.timeLimit*1e3)return 1/0;var _=d+o(g,u)*this.weight;if(_>v)return _;if(g==u)return x[y]=[g.x,g.y],g;var b,C,A,T,w=i.getNeighbors(g,this.diagonalMovement);for(A=0,b=1/0;T=w[A];++A){if(this.trackRecursion&&(T.retainCount=T.retainCount+1||1,T.tested!==!0&&(T.tested=!0)),C=l(T,d+a(g,T),v,x,y+1),C instanceof Zs)return x[y]=[g.x,g.y],C;this.trackRecursion&&--T.retainCount===0&&(T.tested=!1),C<b&&(b=C)}return b}).bind(this),c=i.getNodeAt(n,e),u=i.getNodeAt(t,r),h=o(c,u),f,p,m;for(f=0;;++f){if(p=[],m=l(c,0,h,p,0),m===1/0)return[];if(m instanceof Zs)return p;h=m}return[]};var kd=$a,Ed=Hn,Qs=me,Va=Qt;function Ui(n){n=n||{},this.heuristic=n.heuristic||Va.manhattan,this.trackJumpRecursion=n.trackJumpRecursion||!1}Ui.prototype.findPath=function(n,e,t,r,i){var s=this.openList=new Ed(function(c,u){return c.f-u.f}),o=this.startNode=i.getNodeAt(n,e),a=this.endNode=i.getNodeAt(t,r),l;for(this.grid=i,o.g=0,o.f=0,s.push(o),o.opened=!0;!s.empty();){if(l=s.pop(),l.closed=!0,l===a)return Qs.expandPath(Qs.backtrace(a));this._identifySuccessors(l)}return[]};Ui.prototype._identifySuccessors=function(n){var e=this.grid,t=this.heuristic,r=this.openList,i=this.endNode.x,s=this.endNode.y,o,a,l,c,u,h=n.x,f=n.y,p,m,g,d,v,x=Math.abs;for(o=this._findNeighbors(n),c=0,u=o.length;c<u;++c)if(a=o[c],l=this._jump(a[0],a[1],h,f),l){if(p=l[0],m=l[1],v=e.getNodeAt(p,m),v.closed)continue;g=Va.octile(x(p-h),x(m-f)),d=n.g+g,(!v.opened||d<v.g)&&(v.g=d,v.h=v.h||t(x(p-i),x(m-s)),v.f=v.g+v.h,v.parent=n,v.opened?r.updateItem(v):(r.push(v),v.opened=!0))}};var jn=Ui,Ha=jn,Rd=ye;function wt(n){Ha.call(this,n)}wt.prototype=new Ha;wt.prototype.constructor=wt;wt.prototype._jump=function(n,e,t,r){var i=this.grid,s=n-t,o=e-r;if(!i.isWalkableAt(n,e))return null;if(this.trackJumpRecursion===!0&&(i.getNodeAt(n,e).tested=!0),i.getNodeAt(n,e)===this.endNode)return[n,e];if(s!==0){if(i.isWalkableAt(n,e-1)&&!i.isWalkableAt(n-s,e-1)||i.isWalkableAt(n,e+1)&&!i.isWalkableAt(n-s,e+1))return[n,e]}else if(o!==0){if(i.isWalkableAt(n-1,e)&&!i.isWalkableAt(n-1,e-o)||i.isWalkableAt(n+1,e)&&!i.isWalkableAt(n+1,e-o))return[n,e];if(this._jump(n+1,e,n,e)||this._jump(n-1,e,n,e))return[n,e]}else throw new Error("Only horizontal and vertical movements are allowed");return this._jump(n+s,e+o,n,e)};wt.prototype._findNeighbors=function(n){var e=n.parent,t=n.x,r=n.y,i=this.grid,s,o,a,l,c=[],u,h,f,p;if(e)s=e.x,o=e.y,a=(t-s)/Math.max(Math.abs(t-s),1),l=(r-o)/Math.max(Math.abs(r-o),1),a!==0?(i.isWalkableAt(t,r-1)&&c.push([t,r-1]),i.isWalkableAt(t,r+1)&&c.push([t,r+1]),i.isWalkableAt(t+a,r)&&c.push([t+a,r])):l!==0&&(i.isWalkableAt(t-1,r)&&c.push([t-1,r]),i.isWalkableAt(t+1,r)&&c.push([t+1,r]),i.isWalkableAt(t,r+l)&&c.push([t,r+l]));else for(u=i.getNeighbors(n,Rd.Never),f=0,p=u.length;f<p;++f)h=u[f],c.push([h.x,h.y]);return c};var Ud=wt,ja=jn,Bd=ye;function At(n){ja.call(this,n)}At.prototype=new ja;At.prototype.constructor=At;At.prototype._jump=function(n,e,t,r){var i=this.grid,s=n-t,o=e-r;if(!i.isWalkableAt(n,e))return null;if(this.trackJumpRecursion===!0&&(i.getNodeAt(n,e).tested=!0),i.getNodeAt(n,e)===this.endNode)return[n,e];if(s!==0&&o!==0){if(i.isWalkableAt(n-s,e+o)&&!i.isWalkableAt(n-s,e)||i.isWalkableAt(n+s,e-o)&&!i.isWalkableAt(n,e-o))return[n,e];if(this._jump(n+s,e,n,e)||this._jump(n,e+o,n,e))return[n,e]}else if(s!==0){if(i.isWalkableAt(n+s,e+1)&&!i.isWalkableAt(n,e+1)||i.isWalkableAt(n+s,e-1)&&!i.isWalkableAt(n,e-1))return[n,e]}else if(i.isWalkableAt(n+1,e+o)&&!i.isWalkableAt(n+1,e)||i.isWalkableAt(n-1,e+o)&&!i.isWalkableAt(n-1,e))return[n,e];return this._jump(n+s,e+o,n,e)};At.prototype._findNeighbors=function(n){var e=n.parent,t=n.x,r=n.y,i=this.grid,s,o,a,l,c=[],u,h,f,p;if(e)s=e.x,o=e.y,a=(t-s)/Math.max(Math.abs(t-s),1),l=(r-o)/Math.max(Math.abs(r-o),1),a!==0&&l!==0?(i.isWalkableAt(t,r+l)&&c.push([t,r+l]),i.isWalkableAt(t+a,r)&&c.push([t+a,r]),i.isWalkableAt(t+a,r+l)&&c.push([t+a,r+l]),i.isWalkableAt(t-a,r)||c.push([t-a,r+l]),i.isWalkableAt(t,r-l)||c.push([t+a,r-l])):a===0?(i.isWalkableAt(t,r+l)&&c.push([t,r+l]),i.isWalkableAt(t+1,r)||c.push([t+1,r+l]),i.isWalkableAt(t-1,r)||c.push([t-1,r+l])):(i.isWalkableAt(t+a,r)&&c.push([t+a,r]),i.isWalkableAt(t,r+1)||c.push([t+a,r+1]),i.isWalkableAt(t,r-1)||c.push([t+a,r-1]));else for(u=i.getNeighbors(n,Bd.Always),f=0,p=u.length;f<p;++f)h=u[f],c.push([h.x,h.y]);return c};var Dd=At,Xa=jn,Ld=ye;function Tt(n){Xa.call(this,n)}Tt.prototype=new Xa;Tt.prototype.constructor=Tt;Tt.prototype._jump=function(n,e,t,r){var i=this.grid,s=n-t,o=e-r;if(!i.isWalkableAt(n,e))return null;if(this.trackJumpRecursion===!0&&(i.getNodeAt(n,e).tested=!0),i.getNodeAt(n,e)===this.endNode)return[n,e];if(s!==0&&o!==0){if(this._jump(n+s,e,n,e)||this._jump(n,e+o,n,e))return[n,e]}else if(s!==0){if(i.isWalkableAt(n,e-1)&&!i.isWalkableAt(n-s,e-1)||i.isWalkableAt(n,e+1)&&!i.isWalkableAt(n-s,e+1))return[n,e]}else if(o!==0&&(i.isWalkableAt(n-1,e)&&!i.isWalkableAt(n-1,e-o)||i.isWalkableAt(n+1,e)&&!i.isWalkableAt(n+1,e-o)))return[n,e];return i.isWalkableAt(n+s,e)&&i.isWalkableAt(n,e+o)?this._jump(n+s,e+o,n,e):null};Tt.prototype._findNeighbors=function(n){var e=n.parent,t=n.x,r=n.y,i=this.grid,s,o,a,l,c=[],u,h,f,p;if(e)if(s=e.x,o=e.y,a=(t-s)/Math.max(Math.abs(t-s),1),l=(r-o)/Math.max(Math.abs(r-o),1),a!==0&&l!==0)i.isWalkableAt(t,r+l)&&c.push([t,r+l]),i.isWalkableAt(t+a,r)&&c.push([t+a,r]),i.isWalkableAt(t,r+l)&&i.isWalkableAt(t+a,r)&&c.push([t+a,r+l]);else{var m;if(a!==0){m=i.isWalkableAt(t+a,r);var g=i.isWalkableAt(t,r+1),d=i.isWalkableAt(t,r-1);m&&(c.push([t+a,r]),g&&c.push([t+a,r+1]),d&&c.push([t+a,r-1])),g&&c.push([t,r+1]),d&&c.push([t,r-1])}else if(l!==0){m=i.isWalkableAt(t,r+l);var v=i.isWalkableAt(t+1,r),x=i.isWalkableAt(t-1,r);m&&(c.push([t,r+l]),v&&c.push([t+1,r+l]),x&&c.push([t-1,r+l])),v&&c.push([t+1,r]),x&&c.push([t-1,r])}}else for(u=i.getNeighbors(n,Ld.OnlyWhenNoObstacles),f=0,p=u.length;f<p;++f)h=u[f],c.push([h.x,h.y]);return c};var Nd=Tt,Ya=jn,Gd=ye;function Pt(n){Ya.call(this,n)}Pt.prototype=new Ya;Pt.prototype.constructor=Pt;Pt.prototype._jump=function(n,e,t,r){var i=this.grid,s=n-t,o=e-r;if(!i.isWalkableAt(n,e))return null;if(this.trackJumpRecursion===!0&&(i.getNodeAt(n,e).tested=!0),i.getNodeAt(n,e)===this.endNode)return[n,e];if(s!==0&&o!==0){if(i.isWalkableAt(n-s,e+o)&&!i.isWalkableAt(n-s,e)||i.isWalkableAt(n+s,e-o)&&!i.isWalkableAt(n,e-o))return[n,e];if(this._jump(n+s,e,n,e)||this._jump(n,e+o,n,e))return[n,e]}else if(s!==0){if(i.isWalkableAt(n+s,e+1)&&!i.isWalkableAt(n,e+1)||i.isWalkableAt(n+s,e-1)&&!i.isWalkableAt(n,e-1))return[n,e]}else if(i.isWalkableAt(n+1,e+o)&&!i.isWalkableAt(n+1,e)||i.isWalkableAt(n-1,e+o)&&!i.isWalkableAt(n-1,e))return[n,e];return i.isWalkableAt(n+s,e)||i.isWalkableAt(n,e+o)?this._jump(n+s,e+o,n,e):null};Pt.prototype._findNeighbors=function(n){var e=n.parent,t=n.x,r=n.y,i=this.grid,s,o,a,l,c=[],u,h,f,p;if(e)s=e.x,o=e.y,a=(t-s)/Math.max(Math.abs(t-s),1),l=(r-o)/Math.max(Math.abs(r-o),1),a!==0&&l!==0?(i.isWalkableAt(t,r+l)&&c.push([t,r+l]),i.isWalkableAt(t+a,r)&&c.push([t+a,r]),(i.isWalkableAt(t,r+l)||i.isWalkableAt(t+a,r))&&c.push([t+a,r+l]),!i.isWalkableAt(t-a,r)&&i.isWalkableAt(t,r+l)&&c.push([t-a,r+l]),!i.isWalkableAt(t,r-l)&&i.isWalkableAt(t+a,r)&&c.push([t+a,r-l])):a===0?i.isWalkableAt(t,r+l)&&(c.push([t,r+l]),i.isWalkableAt(t+1,r)||c.push([t+1,r+l]),i.isWalkableAt(t-1,r)||c.push([t-1,r+l])):i.isWalkableAt(t+a,r)&&(c.push([t+a,r]),i.isWalkableAt(t,r+1)||c.push([t+a,r+1]),i.isWalkableAt(t,r-1)||c.push([t+a,r-1]));else for(u=i.getNeighbors(n,Gd.IfAtMostOneObstacle),f=0,p=u.length;f<p;++f)h=u[f],c.push([h.x,h.y]);return c};var Wd=Pt,Or=ye,$d=Ud,Vd=Dd,Hd=Nd,jd=Wd;function Xd(n){return n=n||{},n.diagonalMovement===Or.Never?new $d(n):n.diagonalMovement===Or.Always?new Vd(n):n.diagonalMovement===Or.OnlyWhenNoObstacles?new Hd(n):new jd(n)}var Yd=Xd,qd={Heap:Hn,Node:Oi,Grid:xd,Util:me,DiagonalMovement:ye,Heuristic:Qt,AStarFinder:Ei,BestFirstFinder:Td,BreadthFirstFinder:Md,DijkstraFinder:Fd,BiAStarFinder:Ri,BiBestFirstFinder:Id,BiBreadthFirstFinder:zd,BiDijkstraFinder:Od,IDAStarFinder:kd,JumpPointFinder:Yd},Kd=qd;const Zd=Ln(Kd);function Qd(n){return n.flat()}function Jd(n,e,t){let r=[];for(let i=0;i<e;i++)r.push(n.slice(i*t,i*t+t));return r}function Js(n){const e=n.length,t=n[0].length;let r=Qd(n),i=ep(r);return Jd(i,e,t)}function ep(n){return n.sort(()=>Math.random()-.5)}function tp(n,e){let t=[];n.length+e*2;let r=n[0].length+e*2,i=new Array(r).fill(0);for(let s=0;s<e;s++)t.push(i.slice());for(let s=0;s<n.length;s++){let o=new Array(e).fill(0),a=[...o,...n[s],...o];t.push(a)}for(let s=0;s<e;s++)t.push(i.slice());return t}function np(n,e,t){let r=t.nodes.length,i=t.nodes[0].length;if(ip(n,e))return[n,e];for(var s=eo(n,r,i),o=eo(e,r,i),a=0,l=s.length;a<l;a++)if(t.isWalkableAt(s[a].x,s[a].y)&&kr(s[a],n,t)){for(var c=rp(o,s[a]),u=0,h=c.length;u<h;u++)if(t.isWalkableAt(c[u].x,c[u].y)&&kr(c[u],e,t)&&kr(s[a],c[u],t))return[s[a],c[u]]}return!1}function eo(n,e,t){for(var r=[],i=n.y;i<e;i++)r.push({x:n.x,y:i});for(var i=n.y;i>=0;i--)r.push({x:n.x,y:i});for(var i=n.x;i<t;i++)r.push({x:i,y:n.y});for(var i=n.x;i>=0;i--)r.push({x:i,y:n.y});return r}function rp(n,e){for(var t=new Array({x:0,y:0},{x:0,y:0}),r=0,i=n.length;r<i;r++)n[r].x==e.x&&(t[0]={x:n[r].x,y:n[r].y}),n[r].y==e.y&&(t[1]={x:n[r].x,y:n[r].y});return t}function kr(n,e,t){if(n.x==e.x){for(var r=n.y;n.y<e.y?r<e.y:r>e.y;n.y<e.y?r++:r--)if(!t.isWalkableAt(n.x,r))return!1}else for(var r=n.x;n.x<e.x?r<e.x:r>e.x;n.x<e.x?r++:r--)if(!t.isWalkableAt(r,n.y))return!1;return!0}function ip(n,e){for(var t=new Array(-1,1,1,-1),r=t.length,i=0;i<r;i++)if(n.x+t[i]==e.x&&n.y==e.y||n.y+t[i]==e.y&&n.x==e.x)return!0;return!1}class to{constructor(e,t,r){this.row=e,this.col=t,this.eleMatrix=[],this.numMatrix=[],this.numMatrixPadding=1,this.contentObj=r,this.initPuzzle()}initPuzzle(){for(let e=0;e<this.row;e++)this.eleMatrix[e]=new Array(this.col).fill(""),this.numMatrix[e]=new Array(this.col).fill(1);this.fillEleMatrix(),this.eleMatrix=Js(this.eleMatrix),this.numMatrix=tp(this.numMatrix,this.numMatrixPadding)}fillEleMatrix(){let e=Object.keys(this.contentObj.contents);for(let t=0;t<this.row;t++)for(let r=0;r<this.col/2;r++){let i=e[Math.floor(Math.random()*e.length)];this.eleMatrix[t][r*2]=i,this.eleMatrix[t][r*2+1]=i}}getLeftCount(){let e=0;for(let t=0;t<this.numMatrix.length;t++)for(let r=0;r<this.numMatrix[0].length;r++)this.numMatrix[t][r]==1&&e++;return e}checkPath(e,t){const r=new Zd.Grid(this.numMatrix),i=r.getNodeAt(e.x+this.numMatrixPadding,e.y+this.numMatrixPadding),s=r.getNodeAt(t.x+this.numMatrixPadding,t.y+this.numMatrixPadding);r.setWalkableAt(i.x,i.y,!0);const o=np(i,s,r);return o||r.setWalkableAt(i.x,i.y,!1),o&&this.unPaddedPath(o),o}unPaddedPath(e){e.forEach(t=>{t.x-=this.numMatrixPadding,t.y-=this.numMatrixPadding})}setNumMatrixAt(e,t,r){this.numMatrix[t+this.numMatrixPadding][e+this.numMatrixPadding]=r}clearEleMatrixAt(e,t){this.eleMatrix[t][e]=""}shuffleEle(){this.eleMatrix=Js(this.eleMatrix)}getEleMatrix(){return this.eleMatrix}getEleAt(e,t){return{key:this.eleMatrix[t][e],value:this.contentObj.contents[this.eleMatrix[t][e]]}}getNumMatrix(){return this.numMatrix}}var V=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,H=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}`,sp=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uGamma;
uniform float uContrast;
uniform float uSaturation;
uniform float uBrightness;
uniform vec4 uColor;

void main()
{
    vec4 c = texture(uTexture, vTextureCoord);

    if (c.a > 0.0) {
        c.rgb /= c.a;

        vec3 rgb = pow(c.rgb, vec3(1. / uGamma));
        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, uSaturation), uContrast);
        rgb.r *= uColor.r;
        rgb.g *= uColor.g;
        rgb.b *= uColor.b;
        c.rgb = rgb * uBrightness;

        c.rgb *= c.a;
    }

    finalColor = c * uColor.a;
}
`,op=`struct AdjustmentUniforms {
  uGamma: f32,
  uContrast: f32,
  uSaturation: f32,
  uBrightness: f32,
  uColor: vec4<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> adjustmentUniforms : AdjustmentUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  var sample = textureSample(uTexture, uSampler, uv);
  let color = adjustmentUniforms.uColor;

  if (sample.a > 0.0) 
  {
    sample = vec4<f32>(sample.rgb / sample.a, sample.a);
    var rgb: vec3<f32> = pow(sample.rgb, vec3<f32>(1. / adjustmentUniforms.uGamma));
    rgb = mix(vec3<f32>(.5), mix(vec3<f32>(dot(vec3<f32>(.2125, .7154, .0721), rgb)), rgb, adjustmentUniforms.uSaturation), adjustmentUniforms.uContrast);
    rgb.r *= color.r;
    rgb.g *= color.g;
    rgb.b *= color.b;
    sample = vec4<f32>(rgb.rgb * adjustmentUniforms.uBrightness, sample.a);
    sample = vec4<f32>(sample.rgb * sample.a, sample.a);
  }

  return sample * color.a;
}`,ap=Object.defineProperty,lp=(n,e,t)=>e in n?ap(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,qa=(n,e,t)=>(lp(n,typeof e!="symbol"?e+"":e,t),t);const up=class Ka extends W{constructor(e){e={...Ka.DEFAULT_OPTIONS,...e};const t=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:op,entryPoint:"mainFragment"}}),r=G.from({vertex:V,fragment:sp,name:"adjustment-filter"});super({gpuProgram:t,glProgram:r,resources:{adjustmentUniforms:{uGamma:{value:e.gamma,type:"f32"},uContrast:{value:e.contrast,type:"f32"},uSaturation:{value:e.saturation,type:"f32"},uBrightness:{value:e.brightness,type:"f32"},uColor:{value:[e.red,e.green,e.blue,e.alpha],type:"vec4<f32>"}}}}),qa(this,"uniforms"),this.uniforms=this.resources.adjustmentUniforms.uniforms}get gamma(){return this.uniforms.uGamma}set gamma(e){this.uniforms.uGamma=e}get contrast(){return this.uniforms.uContrast}set contrast(e){this.uniforms.uContrast=e}get saturation(){return this.uniforms.uSaturation}set saturation(e){this.uniforms.uSaturation=e}get brightness(){return this.uniforms.uBrightness}set brightness(e){this.uniforms.uBrightness=e}get red(){return this.uniforms.uColor[0]}set red(e){this.uniforms.uColor[0]=e}get green(){return this.uniforms.uColor[1]}set green(e){this.uniforms.uColor[1]=e}get blue(){return this.uniforms.uColor[2]}set blue(e){this.uniforms.uColor[2]=e}get alpha(){return this.uniforms.uColor[3]}set alpha(e){this.uniforms.uColor[3]=e}};qa(up,"DEFAULT_OPTIONS",{gamma:1,contrast:1,saturation:1,brightness:1,red:1,green:1,blue:1,alpha:1});var cp=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    finalColor = color;
}`,hp=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4<f32>(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y));
  // Average
  color *= 0.25;

  return color;
}`,fp=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

uniform vec4 uInputClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample top right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Average
    color *= 0.25;

    finalColor = color;
}
`,dp=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Average
  color *= 0.25;
    
  return color;
}`,pp=Object.defineProperty,mp=(n,e,t)=>e in n?pp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Qe=(n,e,t)=>(mp(n,typeof e!="symbol"?e+"":e,t),t);const Za=class Qa extends W{constructor(...e){let t=e[0]??{};(typeof t=="number"||Array.isArray(t))&&(O("6.0.0","KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }"),t={strength:t},e[1]!==void 0&&(t.quality=e[1]),e[2]!==void 0&&(t.clamp=e[2])),t={...Qa.DEFAULT_OPTIONS,...t};const r=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:t!=null&&t.clamp?dp:hp,entryPoint:"mainFragment"}}),i=G.from({vertex:V,fragment:t!=null&&t.clamp?fp:cp,name:"kawase-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{kawaseBlurUniforms:{uOffset:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Qe(this,"uniforms"),Qe(this,"_pixelSize",{x:0,y:0}),Qe(this,"_clamp"),Qe(this,"_kernels",[]),Qe(this,"_blur"),Qe(this,"_quality"),this.uniforms=this.resources.kawaseBlurUniforms.uniforms,this.pixelSize=t.pixelSize??{x:1,y:1},Array.isArray(t.strength)?this.kernels=t.strength:typeof t.strength=="number"&&(this._blur=t.strength,this.quality=t.quality??3),this._clamp=!!t.clamp}apply(e,t,r,i){const s=this.pixelSizeX/t.source.width,o=this.pixelSizeY/t.source.height;let a;if(this._quality===1||this._blur===0)a=this._kernels[0]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,e.applyFilter(this,t,r,i);else{const l=xe.getSameSizeTexture(t);let c=t,u=l,h;const f=this._quality-1;for(let p=0;p<f;p++)a=this._kernels[p]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,e.applyFilter(this,c,u,!0),h=c,c=u,u=h;a=this._kernels[f]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,e.applyFilter(this,c,r,i),xe.returnTexture(l)}}get strength(){return this._blur}set strength(e){this._blur=e,this._generateKernels()}get quality(){return this._quality}set quality(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()}get kernels(){return this._kernels}set kernels(e){Array.isArray(e)&&e.length>0?(this._kernels=e,this._quality=e.length,this._blur=Math.max(...e)):(this._kernels=[0],this._quality=1)}get pixelSize(){return this._pixelSize}set pixelSize(e){if(typeof e=="number"){this.pixelSizeX=this.pixelSizeY=e;return}if(Array.isArray(e)){this.pixelSizeX=e[0],this.pixelSizeY=e[1];return}this._pixelSize=e}get pixelSizeX(){return this.pixelSize.x}set pixelSizeX(e){this.pixelSize.x=e}get pixelSizeY(){return this.pixelSize.y}set pixelSizeY(e){this.pixelSize.y=e}get clamp(){return this._clamp}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((e,t)=>e+t+.5,0))}_generateKernels(){const e=this._blur,t=this._quality,r=[e];if(e>0){let i=e;const s=e/t;for(let o=1;o<t;o++)i-=s,r.push(i)}this._kernels=r,this._updatePadding()}};Qe(Za,"DEFAULT_OPTIONS",{strength:4,quality:3,clamp:!1,pixelSize:{x:1,y:1}});let Ja=Za;var gp=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uBloomScale;
uniform float uBrightness;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);
    color.rgb *= uBrightness;
    vec4 bloomColor = vec4(texture(uMapTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= uBloomScale;
    finalColor = color + bloomColor;
}
`,vp=`struct AdvancedBloomUniforms {
  uBloomScale: f32,
  uBrightness: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> advancedBloomUniforms : AdvancedBloomUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color = textureSample(uTexture, uSampler, uv);
  color = vec4<f32>(color.rgb * advancedBloomUniforms.uBrightness, color.a);

  var bloomColor = vec4<f32>(textureSample(uMapTexture, uSampler, uv).rgb, 0.0);
  bloomColor = vec4<f32>(bloomColor.rgb * advancedBloomUniforms.uBloomScale, bloomColor.a);
  
  return color + bloomColor;
}
`,xp=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uThreshold;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > uThreshold) {
        finalColor = color;
    } else {
        finalColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`,yp=`struct ExtractBrightnessUniforms {
  uThreshold: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> extractBrightnessUniforms : ExtractBrightnessUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // A simple & fast algorithm for getting brightness.
  // It's inaccurate, but good enough for this feature.
  let max: f32 = max(max(color.r, color.g), color.b);
  let min: f32 = min(min(color.r, color.g), color.b);
  let brightness: f32 = (max + min) * 0.5;

  return select(vec4<f32>(0.), color, brightness > extractBrightnessUniforms.uThreshold);
}
`,_p=Object.defineProperty,bp=(n,e,t)=>e in n?_p(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,el=(n,e,t)=>(bp(n,typeof e!="symbol"?e+"":e,t),t);const tl=class nl extends W{constructor(e){e={...nl.DEFAULT_OPTIONS,...e};const t=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:yp,entryPoint:"mainFragment"}}),r=G.from({vertex:V,fragment:xp,name:"extract-brightness-filter"});super({gpuProgram:t,glProgram:r,resources:{extractBrightnessUniforms:{uThreshold:{value:e.threshold,type:"f32"}}}}),el(this,"uniforms"),this.uniforms=this.resources.extractBrightnessUniforms.uniforms}get threshold(){return this.uniforms.uThreshold}set threshold(e){this.uniforms.uThreshold=e}};el(tl,"DEFAULT_OPTIONS",{threshold:.5});let Sp=tl;var Cp=Object.defineProperty,wp=(n,e,t)=>e in n?Cp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ht=(n,e,t)=>(wp(n,typeof e!="symbol"?e+"":e,t),t);const Ap=class rl extends W{constructor(e){e={...rl.DEFAULT_OPTIONS,...e};const t=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:vp,entryPoint:"mainFragment"}}),r=G.from({vertex:V,fragment:gp,name:"advanced-bloom-filter"});super({gpuProgram:t,glProgram:r,resources:{advancedBloomUniforms:{uBloomScale:{value:e.bloomScale,type:"f32"},uBrightness:{value:e.brightness,type:"f32"}},uMapTexture:U.WHITE}}),ht(this,"uniforms"),ht(this,"bloomScale",1),ht(this,"brightness",1),ht(this,"_extractFilter"),ht(this,"_blurFilter"),this.uniforms=this.resources.advancedBloomUniforms.uniforms,this._extractFilter=new Sp({threshold:e.threshold}),this._blurFilter=new Ja({strength:e.kernels??e.blur,quality:e.kernels?void 0:e.quality}),Object.assign(this,e)}apply(e,t,r,i){const s=xe.getSameSizeTexture(t);this._extractFilter.apply(e,t,s,!0);const o=xe.getSameSizeTexture(t);this._blurFilter.apply(e,s,o,!0),this.uniforms.uBloomScale=this.bloomScale,this.uniforms.uBrightness=this.brightness,this.resources.uMapTexture=o.source,e.applyFilter(this,t,r,i),xe.returnTexture(o),xe.returnTexture(s)}get threshold(){return this._extractFilter.threshold}set threshold(e){this._extractFilter.threshold=e}get kernels(){return this._blurFilter.kernels}set kernels(e){this._blurFilter.kernels=e}get blur(){return this._blurFilter.strength}set blur(e){this._blurFilter.strength=e}get quality(){return this._blurFilter.quality}set quality(e){this._blurFilter.quality=e}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(e){typeof e=="number"&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._blurFilter.pixelSize=e}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(e){this._blurFilter.pixelSizeX=e}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(e){this._blurFilter.pixelSizeY=e}};ht(Ap,"DEFAULT_OPTIONS",{threshold:.5,bloomScale:1,brightness:1,blur:8,quality:4,pixelSize:{x:1,y:1}});var Tp=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSize;
uniform vec3 uColor;
uniform float uReplaceColor;

uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
    return floor(coord / size) * size;
}

vec2 getMod(vec2 coord, vec2 size)
{
    return mod(coord, size) / size;
}

float character(float n, vec2 p)
{
    p = floor(p*vec2(4.0, 4.0) + 2.5);

    if (clamp(p.x, 0.0, 4.0) == p.x)
    {
        if (clamp(p.y, 0.0, 4.0) == p.y)
        {
            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;
        }
    }
    return 0.0;
}

void main()
{
    vec2 coord = mapCoord(vTextureCoord);

    // get the grid position
    vec2 pixCoord = pixelate(coord, vec2(uSize));
    pixCoord = unmapCoord(pixCoord);

    // sample the color at grid position
    vec4 color = texture(uTexture, pixCoord);

    // brightness of the color as it's perceived by the human eye
    float gray = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;

    // determine the character to use
    float n =  65536.0;             // .
    if (gray > 0.2) n = 65600.0;    // :
    if (gray > 0.3) n = 332772.0;   // *
    if (gray > 0.4) n = 15255086.0; // o
    if (gray > 0.5) n = 23385164.0; // &
    if (gray > 0.6) n = 15252014.0; // 8
    if (gray > 0.7) n = 13199452.0; // @
    if (gray > 0.8) n = 11512810.0; // #

    // get the mod..
    vec2 modd = getMod(coord, vec2(uSize));

    finalColor = (uReplaceColor > 0.5 ? vec4(uColor, 1.) : color) * character( n, vec2(-1.0) + modd * 2.0);
}
`,Pp=`struct AsciiUniforms {
    uSize: f32,
    uColor: vec3<f32>,
    uReplaceColor: f32,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> asciiUniforms : AsciiUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let pixelSize: f32 = asciiUniforms.uSize;
    let coord: vec2<f32> = mapCoord(uv);

    // get the rounded color..
    var pixCoord: vec2<f32> = pixelate(coord, vec2<f32>(pixelSize));
    pixCoord = unmapCoord(pixCoord);

    var color = textureSample(uTexture, uSampler, pixCoord);

    // determine the character to use
    let gray: f32 = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;
    
    var n: f32 = 65536.0; // .
    if (gray > 0.2) {
        n = 65600.0;    // :
    }
    if (gray > 0.3) {
        n = 332772.0;   // *
    }
    if (gray > 0.4) {
        n = 15255086.0; // o
    }
    if (gray > 0.5) {
        n = 23385164.0; // &
    }
    if (gray > 0.6) {
        n = 15252014.0; // 8
    }
    if (gray > 0.7) {
        n = 13199452.0; // @
    }
    if (gray > 0.8) {
        n = 11512810.0; // #
    }

    // get the mod..
    let modd: vec2<f32> = getMod(coord, vec2<f32>(pixelSize));
    return select(color, vec4<f32>(asciiUniforms.uColor, 1.), asciiUniforms.uReplaceColor > 0.5) * character(n, vec2<f32>(-1.0) + modd * 2.0);
}

fn pixelate(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return floor( coord / size ) * size;
}

fn getMod(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return moduloVec2( coord , size) / size;
}

fn character(n: f32, p: vec2<f32>) -> f32
{
    var q: vec2<f32> = floor(p*vec2<f32>(4.0, 4.0) + 2.5);

    if (clamp(q.x, 0.0, 4.0) == q.x)
    {
        if (clamp(q.y, 0.0, 4.0) == q.y)
        {
        if (i32(modulo(n/exp2(q.x + 5.0*q.y), 2.0)) == 1)
        {
            return 1.0;
        }
        }
    }

    return 0.0;
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn moduloVec2(x: vec2<f32>, y: vec2<f32>) -> vec2<f32>
{
  return x - y * floor(x/y);
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord *= gfu.uInputSize.xy;
    mappedCoord += gfu.uOutputFrame.xy;
    return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord -= gfu.uOutputFrame.xy;
    mappedCoord /= gfu.uInputSize.xy;
    return mappedCoord;
}`,Mp=Object.defineProperty,Fp=(n,e,t)=>e in n?Mp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,oi=(n,e,t)=>(Fp(n,typeof e!="symbol"?e+"":e,t),t);const Ip=class il extends W{constructor(...e){let t=e[0]??{};typeof t=="number"&&(O("6.0.0","AsciiFilter constructor params are now options object. See params: { size, color, replaceColor }"),t={size:t});const r=(t==null?void 0:t.color)&&t.replaceColor!==!1;t={...il.DEFAULT_OPTIONS,...t};const i=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:Pp,entryPoint:"mainFragment"}}),s=G.from({vertex:V,fragment:Tp,name:"ascii-filter"});super({gpuProgram:i,glProgram:s,resources:{asciiUniforms:{uSize:{value:t.size,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uReplaceColor:{value:Number(r),type:"f32"}}}}),oi(this,"uniforms"),oi(this,"_color"),this.uniforms=this.resources.asciiUniforms.uniforms,this._color=new $,this.color=t.color??16777215}get size(){return this.uniforms.uSize}set size(e){this.uniforms.uSize=e}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,r,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get replaceColor(){return this.uniforms.uReplaceColor>.5}set replaceColor(e){this.uniforms.uReplaceColor=e?1:0}};oi(Ip,"DEFAULT_OPTIONS",{size:8,color:16777215,replaceColor:!1});var zp=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTransform;
uniform vec3 uLightColor;
uniform float uLightAlpha;
uniform vec3 uShadowColor;
uniform float uShadowAlpha;

uniform vec4 uInputSize;

void main(void) {
    vec2 transform = vec2(1.0 / uInputSize) * vec2(uTransform.x, uTransform.y);
    vec4 color = texture(uTexture, vTextureCoord);
    float light = texture(uTexture, vTextureCoord - transform).a;
    float shadow = texture(uTexture, vTextureCoord + transform).a;

    color.rgb = mix(color.rgb, uLightColor, clamp((color.a - light) * uLightAlpha, 0.0, 1.0));
    color.rgb = mix(color.rgb, uShadowColor, clamp((color.a - shadow) * uShadowAlpha, 0.0, 1.0));
    finalColor = vec4(color.rgb * color.a, color.a);
}
`,Op=`struct BevelUniforms {
  uLightColor: vec3<f32>,
  uLightAlpha: f32,
  uShadowColor: vec3<f32>,
  uShadowAlpha: f32,
  uTransform: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bevelUniforms : BevelUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let transform = vec2<f32>(1.0 / gfu.uInputSize.xy) * vec2<f32>(bevelUniforms.uTransform.x, bevelUniforms.uTransform.y);
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightSample: f32 = textureSample(uTexture, uSampler, uv - transform).a;
  let shadowSample: f32 = textureSample(uTexture, uSampler, uv + transform).a;

  let light = vec4<f32>(bevelUniforms.uLightColor, bevelUniforms.uLightAlpha);
  let shadow = vec4<f32>(bevelUniforms.uShadowColor, bevelUniforms.uShadowAlpha);

  color = vec4<f32>(mix(color.rgb, light.rgb, clamp((color.a - lightSample) * light.a, 0.0, 1.0)), color.a);
  color = vec4<f32>(mix(color.rgb, shadow.rgb, clamp((color.a - shadowSample) * shadow.a, 0.0, 1.0)), color.a);
  
  return vec4<f32>(color.rgb * color.a, color.a);
}`,kp=Object.defineProperty,Ep=(n,e,t)=>e in n?kp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ft=(n,e,t)=>(Ep(n,typeof e!="symbol"?e+"":e,t),t);const Rp=class sl extends W{constructor(e){e={...sl.DEFAULT_OPTIONS,...e};const t=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:Op,entryPoint:"mainFragment"}}),r=G.from({vertex:V,fragment:zp,name:"bevel-filter"});super({gpuProgram:t,glProgram:r,resources:{bevelUniforms:{uLightColor:{value:new Float32Array(3),type:"vec3<f32>"},uLightAlpha:{value:e.lightAlpha,type:"f32"},uShadowColor:{value:new Float32Array(3),type:"vec3<f32>"},uShadowAlpha:{value:e.shadowAlpha,type:"f32"},uTransform:{value:new Float32Array(2),type:"vec2<f32>"}}},padding:1}),ft(this,"uniforms"),ft(this,"_thickness"),ft(this,"_rotation"),ft(this,"_lightColor"),ft(this,"_shadowColor"),this.uniforms=this.resources.bevelUniforms.uniforms,this._lightColor=new $,this._shadowColor=new $,this.lightColor=e.lightColor??16777215,this.shadowColor=e.shadowColor??0,Object.assign(this,e)}get rotation(){return this._rotation/xt}set rotation(e){this._rotation=e*xt,this._updateTransform()}get thickness(){return this._thickness}set thickness(e){this._thickness=e,this._updateTransform()}get lightColor(){return this._lightColor.value}set lightColor(e){this._lightColor.setValue(e);const[t,r,i]=this._lightColor.toArray();this.uniforms.uLightColor[0]=t,this.uniforms.uLightColor[1]=r,this.uniforms.uLightColor[2]=i}get lightAlpha(){return this.uniforms.uLightAlpha}set lightAlpha(e){this.uniforms.uLightAlpha=e}get shadowColor(){return this._shadowColor.value}set shadowColor(e){this._shadowColor.setValue(e);const[t,r,i]=this._shadowColor.toArray();this.uniforms.uShadowColor[0]=t,this.uniforms.uShadowColor[1]=r,this.uniforms.uShadowColor[2]=i}get shadowAlpha(){return this.uniforms.uShadowAlpha}set shadowAlpha(e){this.uniforms.uShadowAlpha=e}_updateTransform(){this.uniforms.uTransform[0]=this.thickness*Math.cos(this._rotation),this.uniforms.uTransform[1]=this.thickness*Math.sin(this._rotation)}};ft(Rp,"DEFAULT_OPTIONS",{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7});var Up=Object.defineProperty,Bp=(n,e,t)=>e in n?Up(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,bn=(n,e,t)=>(Bp(n,typeof e!="symbol"?e+"":e,t),t);const Dp=class ol extends nd{constructor(...e){let t=e[0]??{};if(typeof t=="number"||Array.isArray(t)||"x"in t&&"y"in t){O("6.0.0","BloomFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");let r=t;Array.isArray(r)&&(r={x:r[0],y:r[1]}),t={strength:r},e[1]!==void 0&&(t.quality=e[1]),e[2]!==void 0&&(t.resolution=e[2]),e[3]!==void 0&&(t.kernelSize=e[3])}t={...ol.DEFAULT_OPTIONS,...t},super(),bn(this,"_blurXFilter"),bn(this,"_blurYFilter"),bn(this,"_strength"),this._strength={x:2,y:2},t.strength&&(typeof t.strength=="number"?(this._strength.x=t.strength,this._strength.y=t.strength):(this._strength.x=t.strength.x,this._strength.y=t.strength.y)),this._blurXFilter=new Xs({...t,horizontal:!0,strength:this.strengthX}),this._blurYFilter=new Xs({...t,horizontal:!1,strength:this.strengthY}),this._blurYFilter.blendMode="screen",Object.assign(this,t)}apply(e,t,r,i){const s=xe.getSameSizeTexture(t);e.applyFilter(this,t,r,i),this._blurXFilter.apply(e,t,s,!0),this._blurYFilter.apply(e,s,r,!1),xe.returnTexture(s)}get strength(){return this._strength}set strength(e){this._strength=typeof e=="number"?{x:e,y:e}:e,this._updateStrength()}get strengthX(){return this.strength.x}set strengthX(e){this.strength.x=e,this._updateStrength()}get strengthY(){return this.strength.y}set strengthY(e){this.strength.y=e,this._updateStrength()}_updateStrength(){this._blurXFilter.blur=this.strengthX,this._blurYFilter.blur=this.strengthY}get blur(){return O("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strengthX}set blur(e){O("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strength=e}get blurX(){return O("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX}set blurX(e){O("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX=e}get blurY(){return O("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY}set blurY(e){O("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY=e}};bn(Dp,"DEFAULT_OPTIONS",{strength:{x:2,y:2},quality:4,resolution:1,kernelSize:5});var Lp=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform vec2 uCenter;
uniform float uRadius;
uniform float uStrength;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

void main()
{
    vec2 coord = vTextureCoord * uInputSize.xy;
    coord -= uCenter * uDimensions.xy;
    float distance = length(coord);

    if (distance < uRadius) {
        float percent = distance / uRadius;
        if (uStrength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, uRadius / distance, percent), uStrength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + uStrength * 0.75) * uRadius / distance, 1.0 - percent);
        }
    }

    coord += uCenter * uDimensions.xy;
    coord /= uInputSize.xy;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);

    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    finalColor = color;
}
`,Np=`struct BulgePinchUniforms {
  uDimensions: vec2<f32>,
  uCenter: vec2<f32>,
  uRadius: f32,
  uStrength: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bulgePinchUniforms : BulgePinchUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let dimensions: vec2<f32> = bulgePinchUniforms.uDimensions;
  let center: vec2<f32> = bulgePinchUniforms.uCenter;
  let radius: f32 = bulgePinchUniforms.uRadius;
  let strength: f32 = bulgePinchUniforms.uStrength;
  var coord: vec2<f32> = (uv * gfu.uInputSize.xy) - center * dimensions.xy;

  let distance: f32 = length(coord);

  if (distance < radius) {
      let percent: f32 = distance / radius;
      if (strength > 0.0) {
          coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
      } else {
          coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
      }
  }
    coord += (center * dimensions.xy);
    coord /= gfu.uInputSize.xy;

    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);
    var color: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    if (coord.x != clampedCoord.x && coord.y != clampedCoord.y) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    return color;
}

fn compareVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
  if (x.x == y.x && x.y == y.y)
  {
    return true;
  }

  return false;
}`,Gp=Object.defineProperty,Wp=(n,e,t)=>e in n?Gp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,al=(n,e,t)=>(Wp(n,typeof e!="symbol"?e+"":e,t),t);const $p=class ll extends W{constructor(e){e={...ll.DEFAULT_OPTIONS,...e};const t=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:Np,entryPoint:"mainFragment"}}),r=G.from({vertex:V,fragment:Lp,name:"bulge-pinch-filter"});super({gpuProgram:t,glProgram:r,resources:{bulgePinchUniforms:{uDimensions:{value:[0,0],type:"vec2<f32>"},uCenter:{value:e.center,type:"vec2<f32>"},uRadius:{value:e.radius,type:"f32"},uStrength:{value:e.strength,type:"f32"}}}}),al(this,"uniforms"),this.uniforms=this.resources.bulgePinchUniforms.uniforms,Object.assign(this,e)}apply(e,t,r,i){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,e.applyFilter(this,t,r,i)}get center(){return this.uniforms.uCenter}set center(e){typeof e=="number"&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.uniforms.uCenter.x}set centerX(e){this.uniforms.uCenter.x=e}get centerY(){return this.uniforms.uCenter.y}set centerY(e){this.uniforms.uCenter.y=e}get radius(){return this.uniforms.uRadius}set radius(e){this.uniforms.uRadius=e}get strength(){return this.uniforms.uStrength}set strength(e){this.uniforms.uStrength=e}};al($p,"DEFAULT_OPTIONS",{center:{x:.5,y:.5},radius:100,strength:1});var Vp=`precision highp float;
in vec2 vTextureCoord;
in vec2 vFilterCoord;
out vec4 finalColor;

const int TYPE_LINEAR = 0;
const int TYPE_RADIAL = 1;
const int TYPE_CONIC = 2;
const int MAX_STOPS = 32;

uniform sampler2D uTexture;
uniform vec4 uOptions;
uniform vec2 uCounts;
uniform vec3 uColors[MAX_STOPS];
uniform vec4 uStops[MAX_STOPS];

const float PI = 3.1415926538;
const float PI_2 = PI*2.;

struct ColorStop {
    float offset;
    vec3 color;
    float alpha;
};

mat2 rotate2d(float angle){
    return mat2(cos(angle), -sin(angle),
    sin(angle), cos(angle));
}

float projectLinearPosition(vec2 pos, float angle){
    vec2 center = vec2(0.5);
    vec2 result = pos - center;
    result = rotate2d(angle) * result;
    result = result + center;
    return clamp(result.x, 0., 1.);
}

float projectRadialPosition(vec2 pos) {
    float r = distance(pos, vec2(0.5));
    return clamp(2.*r, 0., 1.);
}

float projectAnglePosition(vec2 pos, float angle) {
    vec2 center = pos - vec2(0.5);
    float polarAngle=atan(-center.y, center.x);
    return mod(polarAngle + angle, PI_2) / PI_2;
}

float projectPosition(vec2 pos, int type, float angle) {
    if (type == TYPE_LINEAR) {
        return projectLinearPosition(pos, angle);
    } else if (type == TYPE_RADIAL) {
        return projectRadialPosition(pos);
    } else if (type == TYPE_CONIC) {
        return projectAnglePosition(pos, angle);
    }

    return pos.y;
}

void main(void) {
    int uType = int(uOptions[0]);
    float uAngle = uOptions[1];
    float uAlpha = uOptions[2];
    float uReplace = uOptions[3];

    int uNumStops = int(uCounts[0]);
    float uMaxColors = uCounts[1];

    // current/original color
    vec4 currentColor = texture(uTexture, vTextureCoord);

    // skip calculations if gradient alpha is 0
    if (0.0 == uAlpha) {
        finalColor = currentColor;
        return;
    }

    // project position
    float y = projectPosition(vFilterCoord, int(uType), radians(uAngle));

    // check gradient bounds
    float offsetMin = uStops[0][0];
    float offsetMax = 0.0;

    int numStops = int(uNumStops);

    for (int i = 0; i < MAX_STOPS; i++) {
        if (i == numStops-1){ // last index
            offsetMax = uStops[i][0];
        }
    }

    if (y  < offsetMin || y > offsetMax) {
        finalColor = currentColor;
        return;
    }

    // limit colors
    if (uMaxColors > 0.) {
        float stepSize = 1./uMaxColors;
        float stepNumber = float(floor(y/stepSize));
        y = stepSize * (stepNumber + 0.5);// offset by 0.5 to use color from middle of segment
    }

    // find color stops
    ColorStop from;
    ColorStop to;

    for (int i = 0; i < MAX_STOPS; i++) {
        if (y >= uStops[i][0]) {
            from = ColorStop(uStops[i][0], uColors[i], uStops[i][1]);
            to = ColorStop(uStops[i+1][0], uColors[i+1], uStops[i+1][1]);
        }

        if (i == numStops-1){ // last index
            break;
        }
    }

    // mix colors from stops
    vec4 colorFrom = vec4(from.color * from.alpha, from.alpha);
    vec4 colorTo = vec4(to.color * to.alpha, to.alpha);

    float segmentHeight = to.offset - from.offset;
    float relativePos = y - from.offset;// position from 0 to [segmentHeight]
    float relativePercent = relativePos / segmentHeight;// position in percent between [from.offset] and [to.offset].

    float gradientAlpha = uAlpha * currentColor.a;
    vec4 gradientColor = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

    if (uReplace < 0.5) {
        // mix resulting color with current color
        finalColor = gradientColor + currentColor*(1.-gradientColor.a);
    } else {
        // replace with gradient color
        finalColor = gradientColor;
    }
}
`,Hp=`in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 vFilterCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    vFilterCoord = vTextureCoord * uInputSize.xy / uOutputFrame.zw;
}
`,no=`struct BaseUniforms {
  uOptions: vec4<f32>,
  uCounts: vec2<f32>,
};

struct StopsUniforms {
  uColors: array<vec3<f32>, MAX_STOPS>,
  uStops: array<vec4<f32>, MAX_STOPS>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> baseUniforms : BaseUniforms;
@group(1) @binding(1) var<uniform> stopsUniforms : StopsUniforms;

struct VSOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn filterCoord( vTextureCoord:vec2<f32> ) -> vec2<f32>
{
    return vTextureCoord * gfu.uInputSize.xy / gfu.uOutputFrame.zw;
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  let vTextureCoord: vec2<f32> = filterTextureCoord(aPosition);
  return VSOutput(
   filterVertexPosition(aPosition),
   vTextureCoord,
   filterCoord(vTextureCoord),
  );
}

struct ColorStop {
  offset: f32,
  color: vec3<f32>,
  alpha: f32,
};

fn rotate2d(angle: f32) -> mat2x2<f32>{
  return mat2x2(cos(angle), -sin(angle),
  sin(angle), cos(angle));
}

fn projectLinearPosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = vec2<f32>(0.5);
  var result: vec2<f32> = pos - center;
  result = rotate2d(angle) * result;
  result = result + center;
  return clamp(result.x, 0.0, 1.0);
}

fn projectRadialPosition(pos: vec2<f32>) -> f32 {
  var r: f32 = distance(pos, vec2<f32>(0.5));
  return clamp(2.0 * r, 0.0, 1.0);
}

fn projectAnglePosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = pos - vec2<f32>(0.5, 0.5);
  var polarAngle: f32 = atan2(-center.y, center.x);
  return ((polarAngle + angle) % PI_2) / PI_2;
}

fn projectPosition(pos: vec2<f32>, gradientType: i32, angle: f32) -> f32 {
  if (gradientType == TYPE_LINEAR) {
      return projectLinearPosition(pos, angle);
  } else if (gradientType == TYPE_RADIAL) {
      return projectRadialPosition(pos);
  } else if (gradientType == TYPE_CONIC) {
      return projectAnglePosition(pos, angle);
  }

  return pos.y;
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
) -> @location(0) vec4<f32> {
  let uType: i32 = i32(baseUniforms.uOptions[0]);
  let uAngle: f32 = baseUniforms.uOptions[1];
  let uAlpha: f32 = baseUniforms.uOptions[2];
  let uReplace: f32 = baseUniforms.uOptions[3];

  let uNumStops: i32 = i32(baseUniforms.uCounts[0]);
  let uMaxColors: f32 = baseUniforms.uCounts[1];

  // current/original color
  var currentColor: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // skip calculations if gradient alpha is 0
  if (uAlpha == 0.0) { return currentColor; }

  // project position
  var y: f32 = projectPosition(coord, uType, radians(uAngle));

  // check gradient bounds
  var offsetMin: f32 = stopsUniforms.uStops[0][0];
  var offsetMax: f32 = 0.0;

  let numStops: i32 = uNumStops;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (i == numStops - 1) { // last index
          offsetMax = stopsUniforms.uStops[i][0];
      }
  }

  if (y  < offsetMin || y > offsetMax) { return currentColor; }

  // limit colors
  if (uMaxColors > 0.0) {
      var stepSize: f32 = 1.0 / uMaxColors;
      var stepNumber: f32 = floor(y / stepSize);
      y = stepSize * (stepNumber + 0.5); // offset by 0.5 to use color from middle of segment
  }

  // find color stops
  var stopFrom: ColorStop;
  var stopTo: ColorStop;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (y >= stopsUniforms.uStops[i][0]) {
          stopFrom = ColorStop(stopsUniforms.uStops[i][0], stopsUniforms.uColors[i], stopsUniforms.uStops[i][1]);
          stopTo = ColorStop(stopsUniforms.uStops[i + 1][0], stopsUniforms.uColors[i + 1], stopsUniforms.uStops[i + 1][1]);
      }

      if (i == numStops - 1) { // last index
          break;
      }
  }

  // mix colors from stops
  var colorFrom: vec4<f32> = vec4<f32>(stopFrom.color * stopFrom.alpha, stopFrom.alpha);
  var colorTo: vec4<f32> = vec4<f32>(stopTo.color * stopTo.alpha, stopTo.alpha);

  var segmentHeight: f32 = stopTo.offset - stopFrom.offset;
  var relativePos: f32 = y - stopFrom.offset; // position from 0 to [segmentHeight]
  var relativePercent: f32 = relativePos / segmentHeight; // position in percent between [from.offset] and [to.offset].

  var gradientAlpha: f32 = uAlpha * currentColor.a;
  var gradientColor: vec4<f32> = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

  if (uReplace < 0.5) {
      // mix resulting color with current color
      return gradientColor + currentColor * (1.0 - gradientColor.a);
  } else {
      // replace with gradient color
      return gradientColor;
  }
}

const PI: f32 = 3.14159265358979323846264;
const PI_2: f32 = PI * 2.0;

const TYPE_LINEAR: i32 = 0;
const TYPE_RADIAL: i32 = 1;
const TYPE_CONIC: i32 = 2;
const MAX_STOPS: i32 = 32;`,ot=ot||{};ot.stringify=function(){var n={"visit_linear-gradient":function(e){return n.visit_gradient(e)},"visit_repeating-linear-gradient":function(e){return n.visit_gradient(e)},"visit_radial-gradient":function(e){return n.visit_gradient(e)},"visit_repeating-radial-gradient":function(e){return n.visit_gradient(e)},visit_gradient:function(e){var t=n.visit(e.orientation);return t&&(t+=", "),e.type+"("+t+n.visit(e.colorStops)+")"},visit_shape:function(e){var t=e.value,r=n.visit(e.at),i=n.visit(e.style);return i&&(t+=" "+i),r&&(t+=" at "+r),t},"visit_default-radial":function(e){var t="",r=n.visit(e.at);return r&&(t+=r),t},"visit_extent-keyword":function(e){var t=e.value,r=n.visit(e.at);return r&&(t+=" at "+r),t},"visit_position-keyword":function(e){return e.value},visit_position:function(e){return n.visit(e.value.x)+" "+n.visit(e.value.y)},"visit_%":function(e){return e.value+"%"},visit_em:function(e){return e.value+"em"},visit_px:function(e){return e.value+"px"},visit_literal:function(e){return n.visit_color(e.value,e)},visit_hex:function(e){return n.visit_color("#"+e.value,e)},visit_rgb:function(e){return n.visit_color("rgb("+e.value.join(", ")+")",e)},visit_rgba:function(e){return n.visit_color("rgba("+e.value.join(", ")+")",e)},visit_color:function(e,t){var r=e,i=n.visit(t.length);return i&&(r+=" "+i),r},visit_angular:function(e){return e.value+"deg"},visit_directional:function(e){return"to "+e.value},visit_array:function(e){var t="",r=e.length;return e.forEach(function(i,s){t+=n.visit(i),s<r-1&&(t+=", ")}),t},visit:function(e){if(!e)return"";var t="";if(e instanceof Array)return n.visit_array(e,t);if(e.type){var r=n["visit_"+e.type];if(r)return r(e);throw Error("Missing visitor visit_"+e.type)}else throw Error("Invalid node.")}};return function(e){return n.visit(e)}}();var ot=ot||{};ot.parse=function(){var n={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},e="";function t(M){var L=new Error(e+": "+M);throw L.source=e,L}function r(){var M=i();return e.length>0&&t("Invalid input not EOF"),M}function i(){return y(s)}function s(){return o("linear-gradient",n.linearGradient,l)||o("repeating-linear-gradient",n.repeatingLinearGradient,l)||o("radial-gradient",n.radialGradient,h)||o("repeating-radial-gradient",n.repeatingRadialGradient,h)}function o(M,L,P){return a(L,function(R){var Ge=P();return Ge&&(N(n.comma)||t("Missing comma before color stops")),{type:M,orientation:Ge,colorStops:y(_)}})}function a(M,L){var P=N(M);if(P){N(n.startCall)||t("Missing (");var R=L(P);return N(n.endCall)||t("Missing )"),R}}function l(){return c()||u()}function c(){return F("directional",n.sideOrCorner,1)}function u(){return F("angular",n.angleValue,1)}function h(){var M,L=f(),P;return L&&(M=[],M.push(L),P=e,N(n.comma)&&(L=f(),L?M.push(L):e=P)),M}function f(){var M=p()||m();if(M)M.at=d();else{var L=g();if(L){M=L;var P=d();P&&(M.at=P)}else{var R=v();R&&(M={type:"default-radial",at:R})}}return M}function p(){var M=F("shape",/^(circle)/i,0);return M&&(M.style=I()||g()),M}function m(){var M=F("shape",/^(ellipse)/i,0);return M&&(M.style=B()||g()),M}function g(){return F("extent-keyword",n.extentKeywords,1)}function d(){if(F("position",/^at/,0)){var M=v();return M||t("Missing positioning value"),M}}function v(){var M=x();if(M.x||M.y)return{type:"position",value:M}}function x(){return{x:B(),y:B()}}function y(M){var L=M(),P=[];if(L)for(P.push(L);N(n.comma);)L=M(),L?P.push(L):t("One extra comma");return P}function _(){var M=b();return M||t("Expected color definition"),M.length=B(),M}function b(){return A()||w()||T()||C()}function C(){return F("literal",n.literalColor,0)}function A(){return F("hex",n.hexColor,1)}function T(){return a(n.rgbColor,function(){return{type:"rgb",value:y(S)}})}function w(){return a(n.rgbaColor,function(){return{type:"rgba",value:y(S)}})}function S(){return N(n.number)[1]}function B(){return F("%",n.percentageValue,1)||ae()||I()}function ae(){return F("position-keyword",n.positionKeywords,1)}function I(){return F("px",n.pixelValue,1)||F("em",n.emValue,1)}function F(M,L,P){var R=N(L);if(R)return{type:M,value:R[P]}}function N(M){var L,P;return P=/^[\n\r\t\s]+/.exec(e),P&&q(P[0].length),L=M.exec(e),L&&q(L[0].length),L}function q(M){e=e.substr(M)}return function(M){return e=M.toString(),r()}}();var jp=ot.parse;ot.stringify;function Xp(n){const e=jp(tm(n));if(e.length===0)throw new Error("Invalid CSS gradient.");if(e.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const t=e[0],r=Yp(t.type),i=qp(t.colorStops),s=Jp(t.orientation);return{type:r,stops:i,angle:s}}function Yp(n){const e={"linear-gradient":0,"radial-gradient":1};if(!(n in e))throw new Error(`Unsupported gradient type "${n}"`);return e[n]}function qp(n){const e=Zp(n),t=[],r=new $;for(let i=0;i<n.length;i++){const s=Kp(n[i]),o=r.setValue(s).toArray();t.push({offset:e[i],color:o.slice(0,3),alpha:o[3]})}return t}function Kp(n){switch(n.type){case"hex":return`#${n.value}`;case"literal":return n.value;default:return`${n.type}(${n.value.join(",")})`}}function Zp(n){const e=[];for(let s=0;s<n.length;s++){const o=n[s];let a=-1;o.type==="literal"&&o.length&&"type"in o.length&&o.length.type==="%"&&"value"in o.length&&(a=parseFloat(o.length.value)/100),e.push(a)}const r=s=>{for(let o=s;o<e.length;o++)if(e[o]!==-1)return{indexDelta:o-s,offset:e[o]};return{indexDelta:e.length-1-s,offset:1}};let i=0;for(let s=0;s<e.length;s++){const o=e[s];if(o!==-1)i=o;else if(s===0)e[s]=0;else if(s+1===e.length)e[s]=1;else{const a=r(s),c=(a.offset-i)/(1+a.indexDelta);for(let u=0;u<=a.indexDelta;u++)e[s+u]=i+(u+1)*c;s+=a.indexDelta,i=e[s]}}return e.map(Qp)}function Qp(n){return n.toString().length>6?parseFloat(n.toString().substring(0,6)):n}function Jp(n){if(typeof n>"u")return 0;if("type"in n&&"value"in n)switch(n.type){case"angular":return parseFloat(n.value);case"directional":return em(n.value)}return 0}function em(n){const e={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(n in e))throw new Error(`Unsupported directional value "${n}"`);return e[n]}function tm(n){let e=n.replace(/\s{2,}/gu," ");return e=e.replace(/;/g,""),e=e.replace(/ ,/g,","),e=e.replace(/\( /g,"("),e=e.replace(/ \)/g,")"),e.trim()}var nm=Object.defineProperty,rm=(n,e,t)=>e in n?nm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,nt=(n,e,t)=>(rm(n,typeof e!="symbol"?e+"":e,t),t);const Er=90;function im(n){return[...n].sort((e,t)=>e.offset-t.offset)}const Zt=class Sn extends W{constructor(e){if(e&&"css"in e?e={...Xp(e.css||""),alpha:e.alpha??Sn.defaults.alpha,maxColors:e.maxColors??Sn.defaults.maxColors}:e={...Sn.defaults,...e},!e.stops||e.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");const t=D.from({vertex:{source:no,entryPoint:"mainVertex"},fragment:{source:no,entryPoint:"mainFragment"}}),r=G.from({vertex:Hp,fragment:Vp,name:"color-gradient-filter"}),i=32;super({gpuProgram:t,glProgram:r,resources:{baseUniforms:{uOptions:{value:[e.type,e.angle??Er,e.alpha,e.replace?1:0],type:"vec4<f32>"},uCounts:{value:[e.stops.length,e.maxColors],type:"vec2<f32>"}},stopsUniforms:{uColors:{value:new Float32Array(i*3),type:"vec3<f32>",size:i},uStops:{value:new Float32Array(i*4),type:"vec4<f32>",size:i}}}}),nt(this,"baseUniforms"),nt(this,"stopsUniforms"),nt(this,"_stops",[]),this.baseUniforms=this.resources.baseUniforms.uniforms,this.stopsUniforms=this.resources.stopsUniforms.uniforms,Object.assign(this,e)}get stops(){return this._stops}set stops(e){const t=im(e),r=new $;let i,s,o;for(let a=0;a<t.length;a++){r.setValue(t[a].color);const l=a*3;[i,s,o]=r.toArray(),this.stopsUniforms.uColors[l]=i,this.stopsUniforms.uColors[l+1]=s,this.stopsUniforms.uColors[l+2]=o,this.stopsUniforms.uStops[a*4]=t[a].offset,this.stopsUniforms.uStops[a*4+1]=t[a].alpha}this.baseUniforms.uCounts[0]=t.length,this._stops=t}get type(){return this.baseUniforms.uOptions[0]}set type(e){this.baseUniforms.uOptions[0]=e}get angle(){return this.baseUniforms.uOptions[1]+Er}set angle(e){this.baseUniforms.uOptions[1]=e-Er}get alpha(){return this.baseUniforms.uOptions[2]}set alpha(e){this.baseUniforms.uOptions[2]=e}get maxColors(){return this.baseUniforms.uCounts[1]}set maxColors(e){this.baseUniforms.uCounts[1]=e}get replace(){return this.baseUniforms.uOptions[3]>.5}set replace(e){this.baseUniforms.uOptions[3]=e?1:0}};nt(Zt,"LINEAR",0);nt(Zt,"RADIAL",1);nt(Zt,"CONIC",2);nt(Zt,"defaults",{type:Zt.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0,replace:!1});var sm=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uMix;
uniform float uSize;
uniform float uSliceSize;
uniform float uSlicePixelSize;
uniform float uSliceInnerSize;

void main() {
    vec4 color = texture(uTexture, vTextureCoord.xy);
    vec4 adjusted;

    if (color.a > 0.0) {
        color.rgb /= color.a;
        float innerWidth = uSize - 1.0;
        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);
        float zSlice1 = min(zSlice0 + 1.0, innerWidth);
        float xOffset = uSlicePixelSize * 0.5 + color.r * uSliceInnerSize;
        float s0 = xOffset + (zSlice0 * uSliceSize);
        float s1 = xOffset + (zSlice1 * uSliceSize);
        float yOffset = uSliceSize * 0.5 + color.g * (1.0 - uSliceSize);
        vec4 slice0Color = texture(uMapTexture, vec2(s0,yOffset));
        vec4 slice1Color = texture(uMapTexture, vec2(s1,yOffset));
        float zOffset = fract(color.b * innerWidth);
        adjusted = mix(slice0Color, slice1Color, zOffset);

        color.rgb *= color.a;
    }

    finalColor = vec4(mix(color, adjusted, uMix).rgb, color.a);

}`,om=`struct ColorMapUniforms {
  uMix: f32,
  uSize: f32,
  uSliceSize: f32,
  uSlicePixelSize: f32,
  uSliceInnerSize: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorMapUniforms : ColorMapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color:vec4<f32> = textureSample(uTexture, uSampler, uv);

  var adjusted: vec4<f32>;

  var altColor: vec4<f32> = vec4<f32>(color.rgb / color.a, color.a);
  let innerWidth: f32 = colorMapUniforms.uSize - 1.0;
  let zSlice0: f32 = min(floor(color.b * innerWidth), innerWidth);
  let zSlice1: f32 = min(zSlice0 + 1.0, innerWidth);
  let xOffset: f32 = colorMapUniforms.uSlicePixelSize * 0.5 + color.r * colorMapUniforms.uSliceInnerSize;
  let s0: f32 = xOffset + (zSlice0 * colorMapUniforms.uSliceSize);
  let s1: f32 = xOffset + (zSlice1 * colorMapUniforms.uSliceSize);
  let yOffset: f32 = colorMapUniforms.uSliceSize * 0.5 + color.g * (1.0 - colorMapUniforms.uSliceSize);
  let slice0Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s0,yOffset));
  let slice1Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s1,yOffset));
  let zOffset: f32 = fract(color.b * innerWidth);
  adjusted = mix(slice0Color, slice1Color, zOffset);
  altColor = vec4<f32>(color.rgb * color.a, color.a);

  let realColor: vec4<f32> = select(color, altColor, color.a > 0.0);

  return vec4<f32>(mix(realColor, adjusted, colorMapUniforms.uMix).rgb, realColor.a);
}`,am=Object.defineProperty,lm=(n,e,t)=>e in n?am(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Re=(n,e,t)=>(lm(n,typeof e!="symbol"?e+"":e,t),t);const um=class ul extends W{constructor(...e){let t=e[0]??{};if((t instanceof U||t instanceof Ae)&&(O("6.0.0","ColorMapFilter constructor params are now options object. See params: { colorMap, nearest, mix }"),t={colorMap:t},e[1]!==void 0&&(t.nearest=e[1]),e[2]!==void 0&&(t.mix=e[2])),t={...ul.DEFAULT_OPTIONS,...t},!t.colorMap)throw Error("No color map texture source was provided to ColorMapFilter");const r=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:om,entryPoint:"mainFragment"}}),i=G.from({vertex:V,fragment:sm,name:"color-map-filter"});super({gpuProgram:r,glProgram:i,resources:{colorMapUniforms:{uMix:{value:t.mix,type:"f32"},uSize:{value:0,type:"f32"},uSliceSize:{value:0,type:"f32"},uSlicePixelSize:{value:0,type:"f32"},uSliceInnerSize:{value:0,type:"f32"}},uMapTexture:t.colorMap.source,uMapSampler:t.colorMap.source.style}}),Re(this,"uniforms"),Re(this,"_size",0),Re(this,"_sliceSize",0),Re(this,"_slicePixelSize",0),Re(this,"_sliceInnerSize",0),Re(this,"_nearest",!1),Re(this,"_scaleMode","linear"),Re(this,"_colorMap"),this.uniforms=this.resources.colorMapUniforms.uniforms,Object.assign(this,t)}get mix(){return this.uniforms.uMix}set mix(e){this.uniforms.uMix=e}get colorSize(){return this._size}get colorMap(){return this._colorMap}set colorMap(e){if(!e||e===this.colorMap)return;const t=e instanceof U?e.source:e;t.style.scaleMode=this._scaleMode,t.autoGenerateMipmaps=!1,this._size=t.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms.uSize=this._size,this.uniforms.uSliceSize=this._sliceSize,this.uniforms.uSlicePixelSize=this._slicePixelSize,this.uniforms.uSliceInnerSize=this._sliceInnerSize,this.resources.uMapTexture=t,this._colorMap=e}get nearest(){return this._nearest}set nearest(e){this._nearest=e,this._scaleMode=e?"nearest":"linear";const t=this._colorMap;t&&t.source&&(t.source.scaleMode=this._scaleMode,t.source.autoGenerateMipmaps=!1,t.source.style.update(),t.source.update())}updateColorMap(){const e=this._colorMap;e!=null&&e.source&&(e.source.update(),this.colorMap=e)}destroy(){var e;(e=this._colorMap)==null||e.destroy(),super.destroy()}};Re(um,"DEFAULT_OPTIONS",{colorMap:U.WHITE,nearest:!1,mix:1});var cm=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uColor;
uniform float uAlpha;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    finalColor = vec4(mix(c.rgb, uColor.rgb, c.a * uAlpha), c.a);
}
`,hm=`struct ColorOverlayUniforms {
    uColor: vec3<f32>,
    uAlpha: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorOverlayUniforms : ColorOverlayUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let c = textureSample(uTexture, uSampler, uv);
    return vec4<f32>(mix(c.rgb, colorOverlayUniforms.uColor.rgb, c.a * colorOverlayUniforms.uAlpha), c.a);
}
`,fm=Object.defineProperty,dm=(n,e,t)=>e in n?fm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ai=(n,e,t)=>(dm(n,typeof e!="symbol"?e+"":e,t),t);const pm=class cl extends W{constructor(...e){let t=e[0]??{};(typeof t=="number"||Array.isArray(t)||t instanceof Float32Array)&&(O("6.0.0","ColorOverlayFilter constructor params are now options object. See params: { color, alpha }"),t={color:t},e[1]!==void 0&&(t.alpha=e[1])),t={...cl.DEFAULT_OPTIONS,...t};const r=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:hm,entryPoint:"mainFragment"}}),i=G.from({vertex:V,fragment:cm,name:"color-overlay-filter"});super({gpuProgram:r,glProgram:i,resources:{colorOverlayUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"}}}}),ai(this,"uniforms"),ai(this,"_color"),this.uniforms=this.resources.colorOverlayUniforms.uniforms,this._color=new $,this.color=t.color??0}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,r,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}};ai(pm,"DEFAULT_OPTIONS",{color:0,alpha:1});var mm=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uOriginalColor;
uniform vec3 uTargetColor;
uniform float uTolerance;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    vec3 colorDiff = uOriginalColor - (c.rgb / max(c.a, 0.0000000001));
    float colorDistance = length(colorDiff);
    float doReplace = step(colorDistance, uTolerance);
    finalColor = vec4(mix(c.rgb, (uTargetColor + colorDiff) * c.a, doReplace), c.a);
}
`,gm=`struct ColorReplaceUniforms {
  uOriginalColor: vec3<f32>,
  uTargetColor: vec3<f32>,
  uTolerance: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorReplaceUniforms : ColorReplaceUniforms;

@fragment
fn mainFragment(
   @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sample: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let colorDiff: vec3<f32> = colorReplaceUniforms.uOriginalColor - (sample.rgb / max(sample.a, 0.0000000001));
  let colorDistance: f32 = length(colorDiff);
  let doReplace: f32 = step(colorDistance, colorReplaceUniforms.uTolerance);

  return vec4<f32>(mix(sample.rgb, (colorReplaceUniforms.uTargetColor + colorDiff) * sample.a, doReplace), sample.a);
}`,vm=Object.defineProperty,xm=(n,e,t)=>e in n?vm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Cn=(n,e,t)=>(xm(n,typeof e!="symbol"?e+"":e,t),t);const ym=class hl extends W{constructor(...e){let t=e[0]??{};(typeof t=="number"||Array.isArray(t)||t instanceof Float32Array)&&(O("6.0.0","ColorReplaceFilter constructor params are now options object. See params: { originalColor, targetColor, tolerance }"),t={originalColor:t},e[1]!==void 0&&(t.targetColor=e[1]),e[2]!==void 0&&(t.tolerance=e[2])),t={...hl.DEFAULT_OPTIONS,...t};const r=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:gm,entryPoint:"mainFragment"}}),i=G.from({vertex:V,fragment:mm,name:"color-replace-filter"});super({gpuProgram:r,glProgram:i,resources:{colorReplaceUniforms:{uOriginalColor:{value:new Float32Array(3),type:"vec3<f32>"},uTargetColor:{value:new Float32Array(3),type:"vec3<f32>"},uTolerance:{value:t.tolerance,type:"f32"}}}}),Cn(this,"uniforms"),Cn(this,"_originalColor"),Cn(this,"_targetColor"),this.uniforms=this.resources.colorReplaceUniforms.uniforms,this._originalColor=new $,this._targetColor=new $,this.originalColor=t.originalColor??16711680,this.targetColor=t.targetColor??0,Object.assign(this,t)}get originalColor(){return this._originalColor.value}set originalColor(e){this._originalColor.setValue(e);const[t,r,i]=this._originalColor.toArray();this.uniforms.uOriginalColor[0]=t,this.uniforms.uOriginalColor[1]=r,this.uniforms.uOriginalColor[2]=i}get targetColor(){return this._targetColor.value}set targetColor(e){this._targetColor.setValue(e);const[t,r,i]=this._targetColor.toArray();this.uniforms.uTargetColor[0]=t,this.uniforms.uTargetColor[1]=r,this.uniforms.uTargetColor[2]=i}get tolerance(){return this.uniforms.uTolerance}set tolerance(e){this.uniforms.uTolerance=e}set newColor(e){O("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor=e}get newColor(){return O("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor}set epsilon(e){O("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance=e}get epsilon(){return O("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance}};Cn(ym,"DEFAULT_OPTIONS",{originalColor:16711680,targetColor:0,tolerance:.4});var _m=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTexelSize;
uniform mat3 uMatrix;

void main(void)
{
    vec4 c11 = texture(uTexture, vTextureCoord - uTexelSize); // top left
    vec4 c12 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y - uTexelSize.y)); // top center
    vec4 c13 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y - uTexelSize.y)); // top right

    vec4 c21 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y)); // mid left
    vec4 c22 = texture(uTexture, vTextureCoord); // mid center
    vec4 c23 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y)); // mid right

    vec4 c31 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y + uTexelSize.y)); // bottom left
    vec4 c32 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y + uTexelSize.y)); // bottom center
    vec4 c33 = texture(uTexture, vTextureCoord + uTexelSize); // bottom right

    finalColor =
        c11 * uMatrix[0][0] + c12 * uMatrix[0][1] + c13 * uMatrix[0][2] +
        c21 * uMatrix[1][0] + c22 * uMatrix[1][1] + c23 * uMatrix[1][2] +
        c31 * uMatrix[2][0] + c32 * uMatrix[2][1] + c33 * uMatrix[2][2];

    finalColor.a = c22.a;
}`,bm=`struct ConvolutionUniforms {
    uMatrix: mat3x3<f32>,
    uTexelSize: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> convolutionUniforms : ConvolutionUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let texelSize = convolutionUniforms.uTexelSize;
    let matrix = convolutionUniforms.uMatrix;

    let c11: vec4<f32> = textureSample(uTexture, uSampler, uv - texelSize); // top left
    let c12: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y - texelSize.y)); // top center
    let c13: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y - texelSize.y)); // top right

    let c21: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y)); // mid left
    let c22: vec4<f32> = textureSample(uTexture, uSampler, uv); // mid center
    let c23: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y)); // mid right

    let c31: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y + texelSize.y)); // bottom left
    let c32: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y + texelSize.y)); // bottom center
    let c33: vec4<f32> = textureSample(uTexture, uSampler, uv + texelSize); // bottom right

    var finalColor: vec4<f32> = vec4<f32>(
        c11 * matrix[0][0] + c12 * matrix[0][1] + c13 * matrix[0][2] +
        c21 * matrix[1][0] + c22 * matrix[1][1] + c23 * matrix[1][2] +
        c31 * matrix[2][0] + c32 * matrix[2][1] + c33 * matrix[2][2]
    );

    finalColor.a = c22.a;

    return finalColor;
}`,Sm=Object.defineProperty,Cm=(n,e,t)=>e in n?Sm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,fl=(n,e,t)=>(Cm(n,typeof e!="symbol"?e+"":e,t),t);const wm=class dl extends W{constructor(...e){let t=e[0]??{};Array.isArray(t)&&(O("6.0.0","ConvolutionFilter constructor params are now options object. See params: { matrix, width, height }"),t={matrix:t},e[1]!==void 0&&(t.width=e[1]),e[2]!==void 0&&(t.height=e[2])),t={...dl.DEFAULT_OPTIONS,...t};const r=t.width??200,i=t.height??200,s=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:bm,entryPoint:"mainFragment"}}),o=G.from({vertex:V,fragment:_m,name:"convolution-filter"});super({gpuProgram:s,glProgram:o,resources:{convolutionUniforms:{uMatrix:{value:t.matrix,type:"mat3x3<f32>"},uTexelSize:{value:{x:1/r,y:1/i},type:"vec2<f32>"}}}}),fl(this,"uniforms"),this.uniforms=this.resources.convolutionUniforms.uniforms,this.width=r,this.height=i}get matrix(){return this.uniforms.uMatrix}set matrix(e){e.forEach((t,r)=>{this.uniforms.uMatrix[r]=t})}get width(){return 1/this.uniforms.uTexelSize.x}set width(e){this.uniforms.uTexelSize.x=1/e}get height(){return 1/this.uniforms.uTexelSize.y}set height(e){this.uniforms.uTexelSize.y=1/e}};fl(wm,"DEFAULT_OPTIONS",{matrix:new Float32Array(9),width:200,height:200});var Am=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uLine;
uniform vec2 uNoise;
uniform vec3 uVignette;
uniform float uSeed;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

float vignette(vec3 co, vec2 coord)
{
    float outter = SQRT_2 - uVignette[0] * SQRT_2;
    vec2 dir = vec2(0.5) - coord;
    dir.y *= uDimensions.y / uDimensions.x;
    float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
    return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

float noise(vec2 coord)
{
    vec2 pixelCoord = coord * uInputSize.xy;
    pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
    pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
    return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

vec3 interlaceLines(vec3 co, vec2 coord)
{
    vec3 color = co;

    float curvature = uLine[0];
    float lineWidth = uLine[1];
    float lineContrast = uLine[2];
    float verticalLine = uLine[3];

    vec2 dir = vec2(coord * uInputSize.xy / uDimensions - 0.5);

    float _c = curvature > 0. ? curvature : 1.;
    float k = curvature > 0. ? (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
    vec2 uv = dir * k;
    float v = verticalLine > 0.5 ? uv.x * uDimensions.x : uv.y * uDimensions.y;
    v *= min(1.0, 2.0 / lineWidth ) / _c;
    float j = 1. + cos(v * 1.2 - uTime) * 0.5 * lineContrast;
    color *= j;

    float segment = verticalLine > 0.5 ? mod((dir.x + .5) * uDimensions.x, 4.) : mod((dir.y + .5) * uDimensions.y, 4.);
    color *= 0.99 + ceil(segment) * 0.015;

    return color;
}

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);
    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
    {
        float n = noise(vTextureCoord);
        finalColor += vec4(n, n, n, finalColor.a);
    }

    if (uVignette[0] > 0.)
    {
        float v = vignette(finalColor.rgb, coord);
        finalColor *= vec4(v, v, v, finalColor.a);
    }

    if (uLine[1] > 0.0)
    {
        finalColor = vec4(interlaceLines(finalColor.rgb, vTextureCoord), finalColor.a);  
    }
}
`,Tm=`struct CRTUniforms {
    uLine: vec4<f32>,
    uNoise: vec2<f32>,
    uVignette: vec3<f32>,
    uSeed: f32,
    uTime: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> crtUniforms : CRTUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let coord: vec2<f32> = uv * gfu.uInputSize.xy / crtUniforms.uDimensions;

  let uNoise = crtUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  if (crtUniforms.uVignette[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  if (crtUniforms.uLine[1] > 0.0)
  {
    color = vec4<f32>(vec3<f32>(interlaceLines(color.rgb, uv)), color.a);  
  }

  return color;
}

const SQRT_2: f32 = 1.414213;

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignette = crtUniforms.uVignette;
  let uDimensions = crtUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignette[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(0.5) - coord;
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = crtUniforms.uNoise;
  let uSeed = crtUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

fn interlaceLines(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;

  let uDimensions = crtUniforms.uDimensions;

  let curvature: f32 = crtUniforms.uLine[0];
  let lineWidth: f32 = crtUniforms.uLine[1];
  let lineContrast: f32 = crtUniforms.uLine[2];
  let verticalLine: f32 = crtUniforms.uLine[3];

  let dir: vec2<f32> = vec2<f32>(coord * gfu.uInputSize.xy / uDimensions - 0.5);

  let _c: f32 = select(1., curvature, curvature > 0.);
  let k: f32 = select(1., (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c), curvature > 0.);
  let uv: vec2<f32> = dir * k;
  let v: f32 = select(uv.y * uDimensions.y, uv.x * uDimensions.x, verticalLine > 0.5) * min(1.0, 2.0 / lineWidth ) / _c;
  let j: f32 = 1. + cos(v * 1.2 - crtUniforms.uTime) * 0.5 * lineContrast;
  color *= j;

  let segment: f32 = select(modulo((dir.y + .5) * uDimensions.y, 4.), modulo((dir.x + .5) * uDimensions.x, 4.), verticalLine > 0.5);
  color *= 0.99 + ceil(segment) * 0.015;

  return color;
}`,Pm=Object.defineProperty,Mm=(n,e,t)=>e in n?Pm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,wn=(n,e,t)=>(Mm(n,typeof e!="symbol"?e+"":e,t),t);const Fm=class pl extends W{constructor(e){e={...pl.DEFAULT_OPTIONS,...e};const t=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:Tm,entryPoint:"mainFragment"}}),r=G.from({vertex:V,fragment:Am,name:"crt-filter"});super({gpuProgram:t,glProgram:r,resources:{crtUniforms:{uLine:{value:new Float32Array(4),type:"vec4<f32>"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uVignette:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:e.seed,type:"f32"},uTime:{value:e.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),wn(this,"uniforms"),wn(this,"seed"),wn(this,"time"),this.uniforms=this.resources.crtUniforms.uniforms,Object.assign(this,e)}apply(e,t,r,i){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,this.uniforms.uSeed=this.seed,this.uniforms.uTime=this.time,e.applyFilter(this,t,r,i)}get curvature(){return this.uniforms.uLine[0]}set curvature(e){this.uniforms.uLine[0]=e}get lineWidth(){return this.uniforms.uLine[1]}set lineWidth(e){this.uniforms.uLine[1]=e}get lineContrast(){return this.uniforms.uLine[2]}set lineContrast(e){this.uniforms.uLine[2]=e}get verticalLine(){return this.uniforms.uLine[3]>.5}set verticalLine(e){this.uniforms.uLine[3]=e?1:0}get noise(){return this.uniforms.uNoise[0]}set noise(e){this.uniforms.uNoise[0]=e}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(e){this.uniforms.uNoise[1]=e}get vignetting(){return this.uniforms.uVignette[0]}set vignetting(e){this.uniforms.uVignette[0]=e}get vignettingAlpha(){return this.uniforms.uVignette[1]}set vignettingAlpha(e){this.uniforms.uVignette[1]=e}get vignettingBlur(){return this.uniforms.uVignette[2]}set vignettingBlur(e){this.uniforms.uVignette[2]=e}};wn(Fm,"DEFAULT_OPTIONS",{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0,seed:0});var Im=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAngle;
uniform float uScale;
uniform bool uGrayScale;

uniform vec4 uInputSize;

float pattern()
{
    float s = sin(uAngle), c = cos(uAngle);
    vec2 tex = vTextureCoord * uInputSize.xy;
    vec2 point = vec2(
        c * tex.x - s * tex.y,
        s * tex.x + c * tex.y
    ) * uScale;
    return (sin(point.x) * sin(point.y)) * 4.0;
    }

    void main()
    {
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 colorRGB = vec3(color);

    if (uGrayScale)
    {
        colorRGB = vec3(color.r + color.g + color.b) / 3.0;
    }

    finalColor = vec4(colorRGB * 10.0 - 5.0 + pattern(), color.a);
}
`,zm=`struct DotUniforms {
  uScale:f32,
  uAngle:f32,
  uGrayScale:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dotUniforms : DotUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let gray: vec3<f32> = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)));
  // dotUniforms.uGrayScale == 1 doesn't ever pass so it is converted to a float and compared to 0.5 instead 
  let finalColor: vec3<f32> = select(color.rgb, gray, f32(dotUniforms.uGrayScale) >= 0.5);

  return vec4<f32>(finalColor * 10.0 - 5.0 + pattern(uv), color.a);
}

fn pattern(uv: vec2<f32>) -> f32
{
  let s: f32 = sin(dotUniforms.uAngle);
  let c: f32 = cos(dotUniforms.uAngle);
  
  let tex: vec2<f32> = uv * gfu.uInputSize.xy;
  
  let p: vec2<f32> = vec2<f32>(
      c * tex.x - s * tex.y,
      s * tex.x + c * tex.y
  ) * dotUniforms.uScale;

  return (sin(p.x) * sin(p.y)) * 4.0;
}`,Om=Object.defineProperty,km=(n,e,t)=>e in n?Om(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Em=(n,e,t)=>(km(n,e+"",t),t);const Rm=class ml extends W{constructor(...e){let t=e[0]??{};typeof t=="number"&&(O("6.0.0","DotFilter constructor params are now options object. See params: { scale, angle, grayscale }"),t={scale:t},e[1]!==void 0&&(t.angle=e[1]),e[2]!==void 0&&(t.grayscale=e[2])),t={...ml.DEFAULT_OPTIONS,...t};const r={uScale:{value:t.scale,type:"f32"},uAngle:{value:t.angle,type:"f32"},uGrayScale:{value:t.grayscale?1:0,type:"f32"}},i=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:zm,entryPoint:"mainFragment"}}),s=G.from({vertex:V,fragment:Im,name:"dot-filter"});super({gpuProgram:i,glProgram:s,resources:{dotUniforms:r}})}get scale(){return this.resources.dotUniforms.uniforms.uScale}set scale(e){this.resources.dotUniforms.uniforms.uScale=e}get angle(){return this.resources.dotUniforms.uniforms.uAngle}set angle(e){this.resources.dotUniforms.uniforms.uAngle=e}get grayscale(){return this.resources.dotUniforms.uniforms.uGrayScale===1}set grayscale(e){this.resources.dotUniforms.uniforms.uGrayScale=e?1:0}};Em(Rm,"DEFAULT_OPTIONS",{scale:1,angle:5,grayscale:!0});var Um=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAlpha;
uniform vec3 uColor;
uniform vec2 uOffset;

uniform vec4 uInputSize;

void main(void){
    vec4 sample = texture(uTexture, vTextureCoord - uOffset * uInputSize.zw);

    // Premultiply alpha
    sample.rgb = uColor.rgb * sample.a;

    // alpha user alpha
    sample *= uAlpha;

    finalColor = sample;
}`,Bm=`struct DropShadowUniforms {
  uAlpha: f32,
  uColor: vec3<f32>,
  uOffset: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dropShadowUniforms : DropShadowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv - dropShadowUniforms.uOffset * gfu.uInputSize.zw);

  // Premultiply alpha
  color = vec4<f32>(vec3<f32>(dropShadowUniforms.uColor.rgb * color.a), color.a);
  // alpha user alpha
  color *= dropShadowUniforms.uAlpha;

  return color;
}`,Dm=Object.defineProperty,Lm=(n,e,t)=>e in n?Dm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,dt=(n,e,t)=>(Lm(n,typeof e!="symbol"?e+"":e,t),t);const Nm=class gl extends W{constructor(e){e={...gl.DEFAULT_OPTIONS,...e};const t=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:Bm,entryPoint:"mainFragment"}}),r=G.from({vertex:V,fragment:Um,name:"drop-shadow-filter"});super({gpuProgram:t,glProgram:r,resources:{dropShadowUniforms:{uAlpha:{value:e.alpha,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uOffset:{value:e.offset,type:"vec2<f32>"}}},resolution:e.resolution}),dt(this,"uniforms"),dt(this,"shadowOnly",!1),dt(this,"_color"),dt(this,"_blurFilter"),dt(this,"_basePass"),this.uniforms=this.resources.dropShadowUniforms.uniforms,this._color=new $,this.color=e.color??0,this._blurFilter=new Ja({strength:e.kernels??e.blur,quality:e.kernels?void 0:e.quality}),this._basePass=new W({gpuProgram:D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:`
                    @group(0) @binding(1) var uTexture: texture_2d<f32>; 
                    @group(0) @binding(2) var uSampler: sampler;
                    @fragment
                    fn mainFragment(
                        @builtin(position) position: vec4<f32>,
                        @location(0) uv : vec2<f32>
                    ) -> @location(0) vec4<f32> {
                        return textureSample(uTexture, uSampler, uv);
                    }
                    `,entryPoint:"mainFragment"}}),glProgram:G.from({vertex:V,fragment:`
                in vec2 vTextureCoord;
                out vec4 finalColor;
                uniform sampler2D uTexture;

                void main(void){
                    finalColor = texture(uTexture, vTextureCoord);
                }
                `,name:"drop-shadow-filter"}),resources:{}}),Object.assign(this,e)}apply(e,t,r,i){const s=xe.getSameSizeTexture(t);e.applyFilter(this,t,s,!0),this._blurFilter.apply(e,s,r,i),this.shadowOnly||e.applyFilter(this._basePass,t,r,!1),xe.returnTexture(s)}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e,this._updatePadding()}get offsetX(){return this.offset.x}set offsetX(e){this.offset.x=e,this._updatePadding()}get offsetY(){return this.offset.y}set offsetY(e){this.offset.y=e,this._updatePadding()}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,r,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get blur(){return this._blurFilter.strength}set blur(e){this._blurFilter.strength=e,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(e){this._blurFilter.quality=e,this._updatePadding()}get kernels(){return this._blurFilter.kernels}set kernels(e){this._blurFilter.kernels=e}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(e){typeof e=="number"&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._blurFilter.pixelSize=e}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(e){this._blurFilter.pixelSizeX=e}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(e){this._blurFilter.pixelSizeY=e}_updatePadding(){const e=Math.max(Math.abs(this.offsetX),Math.abs(this.offsetY));this.padding=e+this.blur*2+this.quality*4}};dt(Nm,"DEFAULT_OPTIONS",{offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:void 0,blur:2,quality:3,pixelSize:{x:1,y:1},resolution:1});var Gm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uDisplacementMap;
uniform float uSeed;
uniform vec2 uDimensions;
uniform float uAspect;
uniform float uFillMode;
uniform float uOffset;
uniform float uDirection;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float sinDir = sin(uDirection);
    float cosDir = cos(uDirection);

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * uAspect;
    float ny = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture(uDisplacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * uAspect);

    int fillMode = int(uFillMode);

    if (fillMode == CLAMP) {
        coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
        if( coord.x > uInputClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = uInputClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < uInputClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -uInputClamp.z;
            }
        }

        if( coord.y > uInputClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = uInputClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < uInputClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -uInputClamp.w;
            }
        }
    }

    finalColor.r = texture(uTexture, coord + uRed * (1.0 - uSeed * 0.4) / uInputSize.xy).r;
    finalColor.g = texture(uTexture, coord + uGreen * (1.0 - uSeed * 0.3) / uInputSize.xy).g;
    finalColor.b = texture(uTexture, coord + uBlue * (1.0 - uSeed * 0.2) / uInputSize.xy).b;
    finalColor.a = texture(uTexture, coord).a;
}
`,Wm=`struct GlitchUniforms {
  uSeed: f32,
  uDimensions: vec2<f32>,
  uAspect: f32,
  uFillMode: f32,
  uOffset: f32,
  uDirection: f32,
  uRed: vec2<f32>,
  uGreen: vec2<f32>,
  uBlue: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glitchUniforms : GlitchUniforms;
@group(1) @binding(1) var uDisplacementMap: texture_2d<f32>; 
@group(1) @binding(2) var uDisplacementSampler: sampler; 

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uSeed: f32 = glitchUniforms.uSeed;
  let uDimensions: vec2<f32> = glitchUniforms.uDimensions;
  let uAspect: f32 = glitchUniforms.uAspect;
  let uOffset: f32 = glitchUniforms.uOffset;
  let uDirection: f32 = glitchUniforms.uDirection;
  let uRed: vec2<f32> = glitchUniforms.uRed;
  let uGreen: vec2<f32> = glitchUniforms.uGreen;
  let uBlue: vec2<f32> = glitchUniforms.uBlue;

  let uInputSize: vec4<f32> = gfu.uInputSize;
  let uInputClamp: vec4<f32> = gfu.uInputClamp;

  var discarded: bool = false;
  var coord: vec2<f32> = (uv * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
      discarded = true;
    }

    let sinDir: f32 = sin(uDirection);
    let cosDir: f32 = cos(uDirection);

    let cx: f32 = coord.x - 0.5;
    let cy: f32 = (coord.y - 0.5) * uAspect;
    var ny: f32 = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    ny = select(select(ny, -ny, ny < 0.0), 2.0 - ny, ny > 1.0);

    let dc: vec4<f32> = textureSample(uDisplacementMap, uDisplacementSampler, vec2<f32>(0.5, ny));

    let displacement: f32 = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = uv + vec2<f32>(cosDir * displacement, sinDir * displacement * uAspect);

    let fillMode: i32 = i32(glitchUniforms.uFillMode);

    if (fillMode == CLAMP) {
      coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
      if (coord.x > uInputClamp.z) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x - uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = uInputClamp.z * 2.0 - coord.x;
        }
      } else if (coord.x < uInputClamp.x) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x + uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = coord.x * -uInputClamp.z;
        }
      }

      if (coord.y > uInputClamp.w) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y - uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = uInputClamp.w * 2.0 - coord.y;
        }
      } else if (coord.y < uInputClamp.y) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y + uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = coord.y * -uInputClamp.w;
        }
      }
    }

    let seedR: f32 = 1.0 - uSeed * 0.4;
    let seedG: f32 = 1.0 - uSeed * 0.3;
    let seedB: f32 = 1.0 - uSeed * 0.2;

    let offsetR: vec2<f32> = vec2(uRed.x * seedR / uInputSize.x, uRed.y * seedR / uInputSize.y);
    let offsetG: vec2<f32> = vec2(uGreen.x * seedG / uInputSize.x, uGreen.y * seedG / uInputSize.y);
    let offsetB: vec2<f32> = vec2(uBlue.x * seedB / uInputSize.x, uBlue.y * seedB / uInputSize.y);

    let r = textureSample(uTexture, uSampler, coord + offsetR).r;
    let g = textureSample(uTexture, uSampler, coord + offsetG).g;
    let b = textureSample(uTexture, uSampler, coord + offsetB).b;
    let a = textureSample(uTexture, uSampler, coord).a;

    return select(vec4<f32>(r, g, b, a), vec4<f32>(0.0,0.0,0.0,0.0), discarded);
}

const TRANSPARENT: i32 = 0;
const ORIGINAL: i32 = 1;
const LOOP: i32 = 2;
const CLAMP: i32 = 3;
const MIRROR: i32 = 4;`,$m=Object.defineProperty,Vm=(n,e,t)=>e in n?$m(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Fe=(n,e,t)=>(Vm(n,typeof e!="symbol"?e+"":e,t),t);const Hm=class vl extends W{constructor(e){e={...vl.defaults,...e};const t=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:Wm,entryPoint:"mainFragment"}}),r=G.from({vertex:V,fragment:Gm,name:"glitch-filter"}),i=document.createElement("canvas");i.width=4,i.height=e.sampleSize??512;const s=new U({source:new st({resource:i})});super({gpuProgram:t,glProgram:r,resources:{glitchUniforms:{uSeed:{value:(e==null?void 0:e.seed)??0,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"},uAspect:{value:1,type:"f32"},uFillMode:{value:(e==null?void 0:e.fillMode)??0,type:"f32"},uOffset:{value:(e==null?void 0:e.offset)??100,type:"f32"},uDirection:{value:(e==null?void 0:e.direction)??0,type:"f32"},uRed:{value:e.red,type:"vec2<f32>"},uGreen:{value:e.green,type:"vec2<f32>"},uBlue:{value:e.blue,type:"vec2<f32>"}},uDisplacementMap:s.source,uDisplacementSampler:s.source.style}}),Fe(this,"uniforms"),Fe(this,"average",!1),Fe(this,"minSize",8),Fe(this,"sampleSize",512),Fe(this,"_canvas"),Fe(this,"texture"),Fe(this,"_slices",0),Fe(this,"_sizes",new Float32Array(1)),Fe(this,"_offsets",new Float32Array(1)),this.uniforms=this.resources.glitchUniforms.uniforms,this._canvas=i,this.texture=s,Object.assign(this,e)}apply(e,t,r,i){const{width:s,height:o}=t.frame;this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,e.applyFilter(this,t,r,i)}_randomizeSizes(){const e=this._sizes,t=this._slices-1,r=this.sampleSize,i=Math.min(this.minSize/r,.9/this._slices);if(this.average){const s=this._slices;let o=1;for(let a=0;a<t;a++){const l=o/(s-a),c=Math.max(l*(1-Math.random()*.6),i);e[a]=c,o-=c}e[t]=o}else{let s=1;const o=Math.sqrt(1/this._slices);for(let a=0;a<t;a++){const l=Math.max(o*s*Math.random(),i);e[a]=l,s-=l}e[t]=s}this.shuffle()}shuffle(){const e=this._sizes,t=this._slices-1;for(let r=t;r>0;r--){const i=Math.random()*r>>0,s=e[r];e[r]=e[i],e[i]=s}}_randomizeOffsets(){for(let e=0;e<this._slices;e++)this._offsets[e]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const e=this.sampleSize,t=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,e);let i,s=0;for(let o=0;o<this._slices;o++){i=Math.floor(this._offsets[o]*256);const a=this._sizes[o]*e,l=i>0?i:0,c=i<0?-i:0;r.fillStyle=`rgba(${l}, ${c}, 0, 1)`,r.fillRect(0,s>>0,e,a+1>>0),s+=a}t.source.update()}set sizes(e){const t=Math.min(this._slices,e.length);for(let r=0;r<t;r++)this._sizes[r]=e[r]}get sizes(){return this._sizes}set offsets(e){const t=Math.min(this._slices,e.length);for(let r=0;r<t;r++)this._offsets[r]=e[r]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(e){this._slices!==e&&(this._slices=e,this._sizes=new Float32Array(e),this._offsets=new Float32Array(e),this.refresh())}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e}get seed(){return this.uniforms.uSeed}set seed(e){this.uniforms.uSeed=e}get fillMode(){return this.uniforms.uFillMode}set fillMode(e){this.uniforms.uFillMode=e}get direction(){return this.uniforms.uDirection/xt}set direction(e){this.uniforms.uDirection=e*xt}get red(){return this.uniforms.uRed}set red(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uRed=e}get green(){return this.uniforms.uGreen}set green(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uGreen=e}get blue(){return this.uniforms.uBlue}set blue(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uBlue=e}destroy(){var e;(e=this.texture)==null||e.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};Fe(Hm,"defaults",{slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:{x:0,y:0},green:{x:0,y:0},blue:{x:0,y:0},minSize:8,sampleSize:512});var jm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uStrength;
uniform vec3 uColor;
uniform float uKnockout;
uniform float uAlpha;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159265358979323846264;

// Hard-assignment of DIST and ANGLE_STEP_SIZE instead of using uDistance and uQuality to allow them to be use on GLSL loop conditions
const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.);
const float ANGLE_STEP_NUM = ceil(PI * 2. / ANGLE_STEP_SIZE);
const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.) / 2.;

void main(void) {
    vec2 px = vec2(1.) / uInputSize.xy;

    float totalAlpha = 0.;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.; angle < PI * 2.; angle += ANGLE_STEP_SIZE) {
      direction = vec2(cos(angle), sin(angle)) * px;

      for (float curDistance = 0.; curDistance < DIST; curDistance++) {
          displaced = clamp(vTextureCoord + direction * (curDistance + 1.), uInputClamp.xy, uInputClamp.zw);
          curColor = texture(uTexture, displaced);
          totalAlpha += (DIST - curDistance) * curColor.a;
      }
    }
    
    curColor = texture(uTexture, vTextureCoord);

    vec4 glowColor = vec4(uColor, uAlpha);
    bool knockout = uKnockout > .5;
    float innerStrength = uStrength[0];
    float outerStrength = uStrength[1];

    float alphaRatio = totalAlpha / MAX_TOTAL_ALPHA;
    float innerGlowAlpha = (1. - alphaRatio) * innerStrength * curColor.a * uAlpha;
    float innerGlowStrength = min(1., innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);
    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a) * uAlpha;
    float outerGlowStrength = min(1. - innerColor.a, outerGlowAlpha);
    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;

    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      finalColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      finalColor = innerColor + outerGlowColor;
    }
}
`,Xm=`struct GlowUniforms {
  uDistance: f32,
  uStrength: vec2<f32>,
  uColor: vec3<f32>,
  uAlpha: f32,
  uQuality: f32,
  uKnockout: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glowUniforms : GlowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let quality = glowUniforms.uQuality;
  let distance = glowUniforms.uDistance;

  let dist: f32 = glowUniforms.uDistance;
  let angleStepSize: f32 = min(1. / quality / distance, PI * 2.0);
  let angleStepNum: f32 = ceil(PI * 2.0 / angleStepSize);

  let px: vec2<f32> = vec2<f32>(1.0 / gfu.uInputSize.xy);

  var totalAlpha: f32 = 0.0;

  var direction: vec2<f32>;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.0; angle < PI * 2.0; angle += angleStepSize) {
    direction = vec2<f32>(cos(angle), sin(angle)) * px;
    for (var curDistance = 0.0; curDistance < dist; curDistance+=1) {
      displaced = vec2<f32>(clamp(uv + direction * (curDistance + 1.0), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
      curColor = textureSample(uTexture, uSampler, displaced);
      totalAlpha += (dist - curDistance) * curColor.a;
    }
  }
    
  curColor = textureSample(uTexture, uSampler, uv);

  let glowColorRGB = glowUniforms.uColor;
  let glowAlpha = glowUniforms.uAlpha;
  let glowColor = vec4<f32>(glowColorRGB, glowAlpha);
  let knockout: bool = glowUniforms.uKnockout > 0.5;
  let innerStrength = glowUniforms.uStrength[0];
  let outerStrength = glowUniforms.uStrength[1];

  let alphaRatio: f32 = (totalAlpha / (angleStepNum * dist * (dist + 1.0) / 2.0));
  let innerGlowAlpha: f32 = (1.0 - alphaRatio) * innerStrength * curColor.a * glowAlpha;
  let innerGlowStrength: f32 = min(1.0, innerGlowAlpha);
  
  let innerColor: vec4<f32> = mix(curColor, glowColor, innerGlowStrength);
  let outerGlowAlpha: f32 = alphaRatio * outerStrength * (1. - curColor.a) * glowAlpha;
  let outerGlowStrength: f32 = min(1.0 - innerColor.a, outerGlowAlpha);
  let outerGlowColor: vec4<f32> = outerGlowStrength * glowColor.rgba;
  
  if (knockout) {
    let resultAlpha: f32 = outerGlowAlpha + innerGlowAlpha;
    return vec4<f32>(glowColor.rgb * resultAlpha, resultAlpha);
  }
  else {
    return innerColor + outerGlowColor;
  }
}

const PI: f32 = 3.14159265358979323846264;`,Ym=Object.defineProperty,qm=(n,e,t)=>e in n?Ym(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,li=(n,e,t)=>(qm(n,typeof e!="symbol"?e+"":e,t),t);const xl=class yl extends W{constructor(e){e={...yl.DEFAULT_OPTIONS,...e};const t=e.distance??10,r=e.quality??.1,i=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:Xm,entryPoint:"mainFragment"}}),s=G.from({vertex:V,fragment:jm.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/r/t).toFixed(7)}`).replace(/__DIST__/gi,`${t.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:i,glProgram:s,resources:{glowUniforms:{uDistance:{value:t,type:"f32"},uStrength:{value:[e.innerStrength,e.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"},uQuality:{value:r,type:"f32"},uKnockout:{value:(e==null?void 0:e.knockout)??!1?1:0,type:"f32"}}},padding:t}),li(this,"uniforms"),li(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new $,this.color=e.color??16777215}get distance(){return this.uniforms.uDistance}set distance(e){this.uniforms.uDistance=this.padding=e}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(e){this.uniforms.uStrength[0]=e}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(e){this.uniforms.uStrength[1]=e}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,r,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get quality(){return this.uniforms.uQuality}set quality(e){this.uniforms.uQuality=e}get knockout(){return this.uniforms.uKnockout===1}set knockout(e){this.uniforms.uKnockout=e?1:0}};li(xl,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});let Km=xl;var Zm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform float uParallel;
uniform vec2 uLight;
uniform float uAspect;
uniform float uTime;
uniform vec3 uRay;

uniform vec4 uInputSize;

\${PERLIN}

void main(void) {
    vec2 uDimensions = uDimensions;
    bool uParallel = uParallel > 0.5;
    vec2 uLight = uLight;
    float uAspect = uAspect;

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    float d;

    if (uParallel) {
        float _cos = uLight.x;
        float _sin = uLight.y;
        d = (_cos * coord.x) + (_sin * coord.y * uAspect);
    } else {
        float dx = coord.x - uLight.x / uDimensions.x;
        float dy = (coord.y - uLight.y / uDimensions.y) * uAspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    float uTime = uTime;
    vec3 uRay = uRay;

    float gain = uRay[0];
    float lacunarity = uRay[1];
    float alpha = uRay[2];

    vec3 dir = vec3(d, d, 0.0);
    float noise = turb(dir + vec3(uTime, 0.0, 62.1 + uTime) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(vec3(noise), 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    finalColor = texture(uTexture, vTextureCoord) + mist;
}
`,Qm=`struct GodrayUniforms {
  uLight: vec2<f32>,
  uParallel: f32,
  uAspect: f32,
  uTime: f32,
  uRay: vec3<f32>,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> godrayUniforms : GodrayUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = godrayUniforms.uDimensions;
  let uParallel: bool = godrayUniforms.uParallel > 0.5;
  let uLight: vec2<f32> = godrayUniforms.uLight;
  let uAspect: f32 = godrayUniforms.uAspect;

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / uDimensions;

  var d: f32;

  if (uParallel) {
    let _cos: f32 = uLight.x;
    let _sin: f32 = uLight.y;
    d = (_cos * coord.x) + (_sin * coord.y * uAspect);
  } else {
    let dx: f32 = coord.x - uLight.x / uDimensions.x;
    let dy: f32 = (coord.y - uLight.y / uDimensions.y) * uAspect;
    let dis: f32 = sqrt(dx * dx + dy * dy) + 0.00001;
    d = dy / dis;
  }

  let uTime: f32 = godrayUniforms.uTime;
  let uRay: vec3<f32> = godrayUniforms.uRay;
  
  let gain = uRay[0];
  let lacunarity = uRay[1];
  let alpha = uRay[2];

  let dir: vec3<f32> = vec3<f32>(d, d, 0.0);
  var noise: f32 = turb(dir + vec3<f32>(uTime, 0.0, 62.1 + uTime) * 0.05, vec3<f32>(480.0, 320.0, 480.0), lacunarity, gain);
  noise = mix(noise, 0.0, 0.3);
  //fade vertically.
  var mist: vec4<f32> = vec4<f32>(vec3<f32>(noise), 1.0) * (1.0 - coord.y);
  mist.a = 1.0;
  // apply user alpha
  mist *= alpha;
  return textureSample(uTexture, uSampler, uv) + mist;
}

\${PERLIN}`,Jm=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,eg=`// Taken from https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39

fn moduloVec3(x: vec3<f32>, y: vec3<f32>) -> vec3<f32>
{
  return x - y * floor(x/y);
}
fn mod289Vec3(x: vec3<f32>) -> vec3<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn mod289Vec4(x: vec4<f32>) -> vec4<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn permute4(x: vec4<f32>) -> vec4<f32>
{
    return mod289Vec4(((x * 34.0) + 1.0) * x);
}
fn taylorInvSqrt(r: vec4<f32>) -> vec4<f32>
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
fn fade3(t: vec3<f32>) -> vec3<f32>
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
fn fade2(t: vec2<f32>) -> vec2<f32> { return t * t * t * (t * (t * 6. - 15.) + 10.); }

fn perlinNoise2(P: vec2<f32>) -> f32 {
  var Pi: vec4<f32> = floor(P.xyxy) + vec4<f32>(0., 0., 1., 1.);
  let Pf = fract(P.xyxy) - vec4<f32>(0., 0., 1., 1.);
  Pi = Pi % vec4<f32>(289.); // To avoid truncation effects in permutation
  let ix = Pi.xzxz;
  let iy = Pi.yyww;
  let fx = Pf.xzxz;
  let fy = Pf.yyww;
  let i = permute4(permute4(ix) + iy);
  var gx: vec4<f32> = 2. * fract(i * 0.0243902439) - 1.; // 1/41 = 0.024...
  let gy = abs(gx) - 0.5;
  let tx = floor(gx + 0.5);
  gx = gx - tx;
  var g00: vec2<f32> = vec2<f32>(gx.x, gy.x);
  var g10: vec2<f32> = vec2<f32>(gx.y, gy.y);
  var g01: vec2<f32> = vec2<f32>(gx.z, gy.z);
  var g11: vec2<f32> = vec2<f32>(gx.w, gy.w);
  let norm = 1.79284291400159 - 0.85373472095314 *
      vec4<f32>(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
  g00 = g00 * norm.x;
  g01 = g01 * norm.y;
  g10 = g10 * norm.z;
  g11 = g11 * norm.w;
  let n00 = dot(g00, vec2<f32>(fx.x, fy.x));
  let n10 = dot(g10, vec2<f32>(fx.y, fy.y));
  let n01 = dot(g01, vec2<f32>(fx.z, fy.z));
  let n11 = dot(g11, vec2<f32>(fx.w, fy.w));
  let fade_xy = fade2(Pf.xy);
  let n_x = mix(vec2<f32>(n00, n01), vec2<f32>(n10, n11), vec2<f32>(fade_xy.x));
  let n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}

// Classic Perlin noise, periodic variant
fn perlinNoise3(P: vec3<f32>, rep: vec3<f32>) -> f32
{
    var Pi0: vec3<f32> = moduloVec3(floor(P), rep); // Integer part, modulo period
    var Pi1: vec3<f32> = moduloVec3(Pi0 + vec3<f32>(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289Vec3(Pi0);
    Pi1 = mod289Vec3(Pi1);
    let Pf0: vec3<f32> = fract(P); // Fractional part for interpolation
    let Pf1: vec3<f32> = Pf0 - vec3<f32>(1.0); // Fractional part - 1.0
    let ix: vec4<f32> = vec4<f32>(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    let iy: vec4<f32> = vec4<f32>(Pi0.yy, Pi1.yy);
    let iz0: vec4<f32> = Pi0.zzzz;
    let iz1: vec4<f32> = Pi1.zzzz;
    let ixy: vec4<f32> = permute4(permute4(ix) + iy);
    let ixy0: vec4<f32> = permute4(ixy + iz0);
    let ixy1: vec4<f32> = permute4(ixy + iz1);
    var gx0: vec4<f32> = ixy0 * (1.0 / 7.0);
    var gy0: vec4<f32> = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    let gz0: vec4<f32> = vec4<f32>(0.5) - abs(gx0) - abs(gy0);
    let sz0: vec4<f32> = step(gz0, vec4<f32>(0.0));
    gx0 -= sz0 * (step(vec4<f32>(0.0), gx0) - 0.5);
    gy0 -= sz0 * (step(vec4<f32>(0.0), gy0) - 0.5);
    var gx1: vec4<f32> = ixy1 * (1.0 / 7.0);
    var gy1: vec4<f32> = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    let gz1: vec4<f32> = vec4<f32>(0.5) - abs(gx1) - abs(gy1);
    let sz1: vec4<f32> = step(gz1, vec4<f32>(0.0));
    gx1 -= sz1 * (step(vec4<f32>(0.0), gx1) - 0.5);
    gy1 -= sz1 * (step(vec4<f32>(0.0), gy1) - 0.5);
    var g000: vec3<f32> = vec3<f32>(gx0.x, gy0.x, gz0.x);
    var g100: vec3<f32> = vec3<f32>(gx0.y, gy0.y, gz0.y);
    var g010: vec3<f32> = vec3<f32>(gx0.z, gy0.z, gz0.z);
    var g110: vec3<f32> = vec3<f32>(gx0.w, gy0.w, gz0.w);
    var g001: vec3<f32> = vec3<f32>(gx1.x, gy1.x, gz1.x);
    var g101: vec3<f32> = vec3<f32>(gx1.y, gy1.y, gz1.y);
    var g011: vec3<f32> = vec3<f32>(gx1.z, gy1.z, gz1.z);
    var g111: vec3<f32> = vec3<f32>(gx1.w, gy1.w, gz1.w);
    let norm0: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    let norm1: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    let n000: f32 = dot(g000, Pf0);
    let n100: f32 = dot(g100, vec3<f32>(Pf1.x, Pf0.yz));
    let n010: f32 = dot(g010, vec3<f32>(Pf0.x, Pf1.y, Pf0.z));
    let n110: f32 = dot(g110, vec3<f32>(Pf1.xy, Pf0.z));
    let n001: f32 = dot(g001, vec3<f32>(Pf0.xy, Pf1.z));
    let n101: f32 = dot(g101, vec3<f32>(Pf1.x, Pf0.y, Pf1.z));
    let n011: f32 = dot(g011, vec3<f32>(Pf0.x, Pf1.yz));
    let n111: f32 = dot(g111, Pf1);
    let fade_xyz: vec3<f32> = fade3(Pf0);
    let n_z: vec4<f32> = mix(vec4<f32>(n000, n100, n010, n110), vec4<f32>(n001, n101, n011, n111), fade_xyz.z);
    let n_yz: vec2<f32> = mix(n_z.xy, n_z.zw, fade_xyz.y);
    let n_xyz: f32 = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
fn turb(P: vec3<f32>, rep: vec3<f32>, lacunarity: f32, gain: f32) -> f32
{
    var sum: f32 = 0.0;
    var sc: f32 = 1.0;
    var totalgain: f32 = 1.0;
    for (var i = 0.0; i < 6.0; i += 1)
    {
        sum += totalgain * perlinNoise3(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}`,tg=Object.defineProperty,ng=(n,e,t)=>e in n?tg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,pt=(n,e,t)=>(ng(n,typeof e!="symbol"?e+"":e,t),t);const rg=class _l extends W{constructor(e){e={..._l.DEFAULT_OPTIONS,...e};const t=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:Qm.replace("${PERLIN}",eg),entryPoint:"mainFragment"}}),r=G.from({vertex:V,fragment:Zm.replace("${PERLIN}",Jm),name:"god-ray-filter"});super({gpuProgram:t,glProgram:r,resources:{godrayUniforms:{uLight:{value:new Float32Array(2),type:"vec2<f32>"},uParallel:{value:0,type:"f32"},uAspect:{value:0,type:"f32"},uTime:{value:e.time,type:"f32"},uRay:{value:new Float32Array(3),type:"vec3<f32>"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),pt(this,"uniforms"),pt(this,"time",0),pt(this,"_angleLight",[0,0]),pt(this,"_angle",0),pt(this,"_center"),this.uniforms=this.resources.godrayUniforms.uniforms,Object.assign(this,e)}apply(e,t,r,i){const s=t.frame.width,o=t.frame.height;this.uniforms.uLight[0]=this.parallel?this._angleLight[0]:this._center.x,this.uniforms.uLight[1]=this.parallel?this._angleLight[1]:this._center.y,this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,this.uniforms.uTime=this.time,e.applyFilter(this,t,r,i)}get angle(){return this._angle}set angle(e){this._angle=e;const t=e*xt;this._angleLight[0]=Math.cos(t),this._angleLight[1]=Math.sin(t)}get parallel(){return this.uniforms.uParallel>.5}set parallel(e){this.uniforms.uParallel=e?1:0}get center(){return this._center}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._center=e}get centerX(){return this.center.x}set centerX(e){this.center.x=e}get centerY(){return this.center.y}set centerY(e){this.center.y=e}get gain(){return this.uniforms.uRay[0]}set gain(e){this.uniforms.uRay[0]=e}get lacunarity(){return this.uniforms.uRay[1]}set lacunarity(e){this.uniforms.uRay[1]=e}get alpha(){return this.uniforms.uRay[2]}set alpha(e){this.uniforms.uRay[2]=e}};pt(rg,"DEFAULT_OPTIONS",{angle:30,gain:.5,lacunarity:2.5,parallel:!0,time:0,center:{x:0,y:0},alpha:1});var ig=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uHsl;
uniform float uAlpha;
uniform float uColorize;

// https://en.wikipedia.org/wiki/Luma_(video)
const vec3 weight = vec3(0.299, 0.587, 0.114);

float getWeightedAverage(vec3 rgb) {
    return rgb.r * weight.r + rgb.g * weight.g + rgb.b * weight.b;
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const vec3 k = vec3(0.57735, 0.57735, 0.57735);

vec3 hueShift(vec3 color, float angle) {
    float cosAngle = cos(angle);
    return vec3(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 resultRGB = color.rgb;

    float hue = uHsl[0];
    float saturation = uHsl[1];
    float lightness = uHsl[2];

    // colorize
    if (uColorize > 0.5) {
        resultRGB = vec3(getWeightedAverage(resultRGB), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    float average = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    finalColor = mix(color, vec4(resultRGB, color.a), uAlpha);
}
`,sg=`struct HslUniforms {
  uHsl:vec3<f32>,
  uColorize:f32,
  uAlpha:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> hslUniforms : HslUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
    var resultRGB: vec3<f32> = color.rgb;

    let hue: f32 = hslUniforms.uHsl[0];
    let saturation: f32 = hslUniforms.uHsl[1];
    let lightness: f32 = hslUniforms.uHsl[2];

    // colorize
    if (hslUniforms.uColorize > 0.5) {
        resultRGB = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    let average: f32 = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3<f32>(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    return mix(color, vec4<f32>(resultRGB, color.a), hslUniforms.uAlpha);
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const k: vec3<f32> = vec3(0.57735, 0.57735, 0.57735);

fn hueShift(color: vec3<f32>, angle: f32) -> vec3<f32> 
{
    let cosAngle: f32 = cos(angle);
    return vec3<f32>(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}`,og=Object.defineProperty,ag=(n,e,t)=>e in n?og(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ui=(n,e,t)=>(ag(n,typeof e!="symbol"?e+"":e,t),t);const lg=class bl extends W{constructor(e){e={...bl.DEFAULT_OPTIONS,...e};const t=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:sg,entryPoint:"mainFragment"}}),r=G.from({vertex:V,fragment:ig,name:"hsl-adjustment-filter"});super({gpuProgram:t,glProgram:r,resources:{hslUniforms:{uHsl:{value:new Float32Array(3),type:"vec3<f32>"},uColorize:{value:e.colorize?1:0,type:"f32"},uAlpha:{value:e.alpha,type:"f32"}}}}),ui(this,"uniforms"),ui(this,"_hue"),this.uniforms=this.resources.hslUniforms.uniforms,this.hue=e.hue}get hue(){return this._hue}set hue(e){this._hue=e,this.resources.hslUniforms.uniforms.uHsl[0]=e*(Math.PI/180)}get saturation(){return this.resources.hslUniforms.uniforms.uHsl[1]}set saturation(e){this.resources.hslUniforms.uniforms.uHsl[1]=e}get lightness(){return this.resources.hslUniforms.uniforms.uHsl[2]}set lightness(e){this.resources.hslUniforms.uniforms.uHsl[2]=e}get colorize(){return this.resources.hslUniforms.uniforms.uColorize===1}set colorize(e){this.resources.hslUniforms.uniforms.uColorize=e?1:0}get alpha(){return this.resources.hslUniforms.uniforms.uAlpha}set alpha(e){this.resources.hslUniforms.uniforms.uAlpha=e}};ui(lg,"DEFAULT_OPTIONS",{hue:0,saturation:0,lightness:0,colorize:!1,alpha:1});var ug=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uVelocity;
uniform int uKernelSize;
uniform float uOffset;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

// Notice:
// the perfect way:
//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);
// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.
// So use uKernelSize directly.

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    vec2 velocity = uVelocity / uInputSize.xy;
    float offset = -uOffset / length(uVelocity) - 0.5;
    int k = uKernelSize - 1;

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }
        vec2 bias = velocity * (float(i) / float(k) + offset);
        color += texture(uTexture, vTextureCoord + bias);
    }
    finalColor = color / float(uKernelSize);
}
`,cg=`struct MotionBlurUniforms {
  uVelocity: vec2<f32>,
  uKernelSize: f32,
  uOffset: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> motionBlurUniforms : MotionBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uVelocity = motionBlurUniforms.uVelocity;
  let uKernelSize = motionBlurUniforms.uKernelSize;
  let uOffset = motionBlurUniforms.uOffset;

  let velocity: vec2<f32> = uVelocity / gfu.uInputSize.xy;
  let offset: f32 = -uOffset / length(uVelocity) - 0.5;
  let k: i32 = i32(min(uKernelSize - 1, MAX_KERNEL_SIZE - 1));

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  for(var i: i32 = 0; i < k; i += 1) {
    let bias: vec2<f32> = velocity * (f32(i) / f32(k) + offset);
    color += textureSample(uTexture, uSampler, uv + bias);
  }
  
  return select(color / f32(uKernelSize), textureSample(uTexture, uSampler, uv), uKernelSize == 0);
}

const MAX_KERNEL_SIZE: f32 = 2048;`,hg=Object.defineProperty,fg=(n,e,t)=>e in n?hg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ci=(n,e,t)=>(fg(n,typeof e!="symbol"?e+"":e,t),t);const dg=class Sl extends W{constructor(...e){let t=e[0]??{};if(Array.isArray(t)||"x"in t&&"y"in t||t instanceof ue){O("6.0.0","MotionBlurFilter constructor params are now options object. See params: { velocity, kernelSize, offset }");const s="x"in t?t.x:t[0],o="y"in t?t.y:t[1];t={velocity:{x:s,y:o}},e[1]!==void 0&&(t.kernelSize=e[1]),e[2]!==void 0&&(t.offset=e[2])}t={...Sl.DEFAULT_OPTIONS,...t};const r=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:cg,entryPoint:"mainFragment"}}),i=G.from({vertex:V,fragment:ug,name:"motion-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{motionBlurUniforms:{uVelocity:{value:t.velocity,type:"vec2<f32>"},uKernelSize:{value:Math.trunc(t.kernelSize??5),type:"i32"},uOffset:{value:t.offset,type:"f32"}}}}),ci(this,"uniforms"),ci(this,"_kernelSize"),this.uniforms=this.resources.motionBlurUniforms.uniforms,Object.assign(this,t)}get velocity(){return this.uniforms.uVelocity}set velocity(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uVelocity=e,this._updateDirty()}get velocityX(){return this.velocity.x}set velocityX(e){this.velocity.x=e,this._updateDirty()}get velocityY(){return this.velocity.y}set velocityY(e){this.velocity.y=e,this._updateDirty()}get kernelSize(){return this._kernelSize}set kernelSize(e){this._kernelSize=e,this._updateDirty()}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e}_updateDirty(){this.padding=(Math.max(Math.abs(this.velocityX),Math.abs(this.velocityY))>>0)+1,this.uniforms.uKernelSize=this.velocityX!==0||this.velocityY!==0?this._kernelSize:0}};ci(dg,"DEFAULT_OPTIONS",{velocity:{x:0,y:0},kernelSize:5,offset:0});var pg=`in vec2 vTextureCoord;
out vec4 finalColor;

const int MAX_COLORS = \${MAX_COLORS};

uniform sampler2D uTexture;
uniform vec3 uOriginalColors[MAX_COLORS];
uniform vec3 uTargetColors[MAX_COLORS];
uniform float uTolerance;

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);

    float alpha = finalColor.a;
    if (alpha < 0.0001)
    {
      return;
    }

    vec3 color = finalColor.rgb / alpha;

    for(int i = 0; i < MAX_COLORS; i++)
    {
      vec3 origColor = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      vec3 colorDiff = origColor - color;
      if (length(colorDiff) < uTolerance)
      {
        vec3 targetColor = uTargetColors[i];
        finalColor = vec4((targetColor + colorDiff) * alpha, alpha);
        return;
      }
    }
}
`,mg=`struct MultiColorReplaceUniforms {
  uOriginalColors: array<vec3<f32>, MAX_COLORS>,
  uTargetColors: array<vec3<f32>, MAX_COLORS>,
  uTolerance:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> multiColorReplaceUniforms : MultiColorReplaceUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOriginalColors = multiColorReplaceUniforms.uOriginalColors;
  let uTargetColors = multiColorReplaceUniforms.uTargetColors;
  let uTolerance = multiColorReplaceUniforms.uTolerance;

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let alpha: f32 = color.a;

  if (alpha > 0.0001)
  {
    var modColor: vec3<f32> = vec3<f32>(color.rgb) / alpha;

    for(var i: i32 = 0; i < MAX_COLORS; i += 1)
    {
      let origColor: vec3<f32> = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      let colorDiff: vec3<f32> = origColor - modColor;
      
      if (length(colorDiff) < uTolerance)
      {
        let targetColor: vec3<f32> = uTargetColors[i];
        color = vec4((targetColor + colorDiff) * alpha, alpha);
        return color;
      }
    }
  }

  return color;
}

const MAX_COLORS: i32 = \${MAX_COLORS};`,gg=Object.defineProperty,vg=(n,e,t)=>e in n?gg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,An=(n,e,t)=>(vg(n,typeof e!="symbol"?e+"":e,t),t);const xg=class Cl extends W{constructor(...e){let t=e[0]??{};Array.isArray(t)&&(O("6.0.0","MultiColorReplaceFilter constructor params are now options object. See params: { replacements, tolerance, maxColors }"),t={replacements:t},e[1]&&(t.tolerance=e[1]),e[2]&&(t.maxColors=e[2])),t={...Cl.DEFAULT_OPTIONS,...t};const r=t.maxColors??t.replacements.length,i=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:mg.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),entryPoint:"mainFragment"}}),s=G.from({vertex:V,fragment:pg.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),name:"multi-color-replace-filter"});super({gpuProgram:i,glProgram:s,resources:{multiColorReplaceUniforms:{uOriginalColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTargetColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTolerance:{value:t.tolerance,type:"f32"}}}}),An(this,"uniforms"),An(this,"_replacements",[]),An(this,"_maxColors"),this._maxColors=r,this.uniforms=this.resources.multiColorReplaceUniforms.uniforms,this.replacements=t.replacements}set replacements(e){const t=this.uniforms.uOriginalColors,r=this.uniforms.uTargetColors,i=e.length,s=new $;if(i>this._maxColors)throw new Error(`Length of replacements (${i}) exceeds the maximum colors length (${this._maxColors})`);t[i*3]=-1;let o,a,l;for(let c=0;c<i;c++){const u=e[c];s.setValue(u[0]),[o,a,l]=s.toArray(),t[c*3]=o,t[c*3+1]=a,t[c*3+2]=l,s.setValue(u[1]),[o,a,l]=s.toArray(),r[c*3]=o,r[c*3+1]=a,r[c*3+2]=l}this._replacements=e}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}get tolerance(){return this.uniforms.uTolerance}set tolerance(e){this.uniforms.uTolerance=e}set epsilon(e){O("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance=e}get epsilon(){return O("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance}};An(xg,"DEFAULT_OPTIONS",{replacements:[[16711680,255]],tolerance:.05,maxColors:void 0});var yg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSepia;
uniform vec2 uNoise;
uniform vec3 uScratch;
uniform vec3 uVignetting;
uniform float uSeed;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    finalColor = texture(uTexture, vTextureCoord);
    vec3 color = finalColor.rgb;

    if (uSepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + uSepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions.xy;

    float vignette = uVignetting[0];
    float vignetteAlpha = uVignetting[1];
    float vignetteBlur = uVignetting[2];

    if (vignette > 0.0)
    {
        float outter = SQRT_2 - vignette * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= uDimensions.y / uDimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignetteBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignetteAlpha);
    }

    float scratch = uScratch[0];
    float scratchDensity = uScratch[1];
    float scratchWidth = uScratch[2];

    if (scratchDensity > uSeed && scratch != 0.0)
    {
        float phase = uSeed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(uSeed * dist, abs(s - uSeed * dist)));
        if (d < uSeed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / uDimensions.x * (0.75 + uSeed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    float noise = uNoise[0];
    float noiseSize = uNoise[1];

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + uSeed * 512.0, 1024.0 - uSeed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * uSeed) - 0.5;
        color += _noise * noise;
    }

    finalColor.rgb = color;
}`,_g=`struct OldFilmUniforms {
    uSepia: f32,
    uNoise: vec2<f32>,
    uScratch: vec3<f32>,
    uVignetting: vec3<f32>,
    uSeed: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> oldFilmUniforms : OldFilmUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  if (oldFilmUniforms.uSepia > 0.)
  {
    color = vec4<f32>(sepia(color.rgb), color.a);
  }

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / oldFilmUniforms.uDimensions;

  if (oldFilmUniforms.uVignetting[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  let uScratch = oldFilmUniforms.uScratch; 

  if (uScratch[1] > oldFilmUniforms.uSeed && uScratch[0] != 0.)
  {
    color = vec4<f32>(scratch(color.rgb, coord), color.a);
  }

  let uNoise = oldFilmUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  return color;
}

const SQRT_2: f32 = 1.414213;
const SEPIA_RGB: vec3<f32> = vec3<f32>(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn overlay(src: vec3<f32>, dst: vec3<f32>) -> vec3<f32>
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)

    return vec3<f32>(
      select((1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)), (2.0 * src.x * dst.x), (dst.x <= 0.5)), 
      select((1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)), (2.0 * src.y * dst.y), (dst.y <= 0.5)),
      select((1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)), (2.0 * src.z * dst.z), (dst.z <= 0.5))
    );
}

fn sepia(co: vec3<f32>) -> vec3<f32>
{
  let gray: f32 = (co.x + co.y + co.z) / 3.0;
  let grayscale: vec3<f32> = vec3<f32>(gray);
  let color = overlay(SEPIA_RGB, grayscale);
  return grayscale + oldFilmUniforms.uSepia * (color - grayscale);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignetting = oldFilmUniforms.uVignetting;
  let uDimensions = oldFilmUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignetting[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(vec2<f32>(0.5) - coord);
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignetting[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignetting[1]);
}

fn scratch(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;
  let uScratch = oldFilmUniforms.uScratch;
  let uSeed = oldFilmUniforms.uSeed;
  let uDimensions = oldFilmUniforms.uDimensions;

  let phase: f32 = uSeed * 256.0;
  let s: f32 = modulo(floor(phase), 2.0);
  let dist: f32 = 1.0 / uScratch[1];
  let d: f32 = distance(coord, vec2<f32>(uSeed * dist, abs(s - uSeed * dist)));

  if (d < uSeed * 0.6 + 0.4)
  {
    let period: f32 = uScratch[1] * 10.0;

    let xx: f32 = coord.x * period + phase;
    let aa: f32 = abs(modulo(xx, 0.5) * 4.0);
    let bb: f32 = modulo(floor(xx / 0.5), 2.0);
    let yy: f32 = (1.0 - bb) * aa + bb * (2.0 - aa);

    let kk: f32 = 2.0 * period;
    let dw: f32 = uScratch[2] / uDimensions.x * (0.75 + uSeed);
    let dh: f32 = dw * kk;

    var tine: f32 = (yy - (2.0 - dh));

    if (tine > 0.0) {
        let _sign: f32 = sign(uScratch[0]);

        tine = s * tine / period + uScratch[0] + 0.1;
        tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

        color *= tine;
    }
  }

  return color;
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = oldFilmUniforms.uNoise;
  let uSeed = oldFilmUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}`,bg=Object.defineProperty,Sg=(n,e,t)=>e in n?bg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,hi=(n,e,t)=>(Sg(n,typeof e!="symbol"?e+"":e,t),t);const Cg=class wl extends W{constructor(e){e={...wl.DEFAULT_OPTIONS,...e};const t=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:_g,entryPoint:"mainFragment"}}),r=G.from({vertex:V,fragment:yg,name:"old-film-filter"});super({gpuProgram:t,glProgram:r,resources:{oldFilmUniforms:{uSepia:{value:e.sepia,type:"f32"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uScratch:{value:new Float32Array(3),type:"vec3<f32>"},uVignetting:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:e.seed,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),hi(this,"uniforms"),hi(this,"seed"),this.uniforms=this.resources.oldFilmUniforms.uniforms,Object.assign(this,e)}apply(e,t,r,i){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,this.uniforms.uSeed=this.seed,e.applyFilter(this,t,r,i)}get sepia(){return this.uniforms.uSepia}set sepia(e){this.uniforms.uSepia=e}get noise(){return this.uniforms.uNoise[0]}set noise(e){this.uniforms.uNoise[0]=e}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(e){this.uniforms.uNoise[1]=e}get scratch(){return this.uniforms.uScratch[0]}set scratch(e){this.uniforms.uScratch[0]=e}get scratchDensity(){return this.uniforms.uScratch[1]}set scratchDensity(e){this.uniforms.uScratch[1]=e}get scratchWidth(){return this.uniforms.uScratch[2]}set scratchWidth(e){this.uniforms.uScratch[2]=e}get vignetting(){return this.uniforms.uVignetting[0]}set vignetting(e){this.uniforms.uVignetting[0]=e}get vignettingAlpha(){return this.uniforms.uVignetting[1]}set vignettingAlpha(e){this.uniforms.uVignetting[1]=e}get vignettingBlur(){return this.uniforms.uVignetting[2]}set vignettingBlur(e){this.uniforms.uVignetting[2]=e}};hi(Cg,"DEFAULT_OPTIONS",{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,seed:0});var wg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uThickness;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uKnockout;

uniform vec4 uInputClamp;

const float DOUBLE_PI = 2. * 3.14159265358979323846264;
const float ANGLE_STEP = \${ANGLE_STEP};

float outlineMaxAlphaAtPos(vec2 pos) {
    if (uThickness.x == 0. || uThickness.y == 0.) {
        return 0.;
    }

    vec4 displacedColor;
    vec2 displacedPos;
    float maxAlpha = 0.;

    for (float angle = 0.; angle <= DOUBLE_PI; angle += ANGLE_STEP) {
        displacedPos.x = vTextureCoord.x + uThickness.x * cos(angle);
        displacedPos.y = vTextureCoord.y + uThickness.y * sin(angle);
        displacedColor = texture(uTexture, clamp(displacedPos, uInputClamp.xy, uInputClamp.zw));
        maxAlpha = max(maxAlpha, displacedColor.a);
    }

    return maxAlpha;
}

void main(void) {
    vec4 sourceColor = texture(uTexture, vTextureCoord);
    vec4 contentColor = sourceColor * float(uKnockout < 0.5);
    float outlineAlpha = uAlpha * outlineMaxAlphaAtPos(vTextureCoord.xy) * (1.-sourceColor.a);
    vec4 outlineColor = vec4(vec3(uColor) * outlineAlpha, outlineAlpha);
    finalColor = contentColor + outlineColor;
}
`,Ag=`struct OutlineUniforms {
  uThickness:vec2<f32>,
  uColor:vec3<f32>,
  uAlpha:f32,
  uAngleStep:f32,
  uKnockout:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> outlineUniforms : OutlineUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sourceColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let contentColor: vec4<f32> = sourceColor * (1. - outlineUniforms.uKnockout);
  
  let outlineAlpha: f32 = outlineUniforms.uAlpha * outlineMaxAlphaAtPos(uv) * (1. - sourceColor.a);
  let outlineColor: vec4<f32> = vec4<f32>(vec3<f32>(outlineUniforms.uColor) * outlineAlpha, outlineAlpha);
  
  return contentColor + outlineColor;
}

fn outlineMaxAlphaAtPos(uv: vec2<f32>) -> f32 {
  let thickness = outlineUniforms.uThickness;

  if (thickness.x == 0. || thickness.y == 0.) {
    return 0.;
  }
  
  let angleStep = outlineUniforms.uAngleStep;

  var displacedColor: vec4<f32>;
  var displacedPos: vec2<f32>;

  var maxAlpha: f32 = 0.;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.; angle <= DOUBLE_PI; angle += angleStep)
  {
    displaced.x = uv.x + thickness.x * cos(angle);
    displaced.y = uv.y + thickness.y * sin(angle);
    curColor = textureSample(uTexture, uSampler, clamp(displaced, gfu.uInputClamp.xy, gfu.uInputClamp.zw));
    maxAlpha = max(maxAlpha, curColor.a);
  }

  return maxAlpha;
}

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`,Tg=Object.defineProperty,Pg=(n,e,t)=>e in n?Tg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,tt=(n,e,t)=>(Pg(n,typeof e!="symbol"?e+"":e,t),t);const Bi=class Je extends W{constructor(...e){let t=e[0]??{};typeof t=="number"&&(O("6.0.0","OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }"),t={thickness:t},e[1]!==void 0&&(t.color=e[1]),e[2]!==void 0&&(t.quality=e[2]),e[3]!==void 0&&(t.alpha=e[3]),e[4]!==void 0&&(t.knockout=e[4])),t={...Je.DEFAULT_OPTIONS,...t};const r=t.quality??.1,i=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:Ag,entryPoint:"mainFragment"}}),s=G.from({vertex:V,fragment:wg.replace(/\$\{ANGLE_STEP\}/,Je.getAngleStep(r).toFixed(7)),name:"outline-filter"});super({gpuProgram:i,glProgram:s,resources:{outlineUniforms:{uThickness:{value:new Float32Array(2),type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uAngleStep:{value:0,type:"f32"},uKnockout:{value:t.knockout?1:0,type:"f32"}}}}),tt(this,"uniforms"),tt(this,"_thickness"),tt(this,"_quality"),tt(this,"_color"),this.uniforms=this.resources.outlineUniforms.uniforms,this.uniforms.uAngleStep=Je.getAngleStep(r),this._color=new $,this.color=t.color??0,Object.assign(this,t)}apply(e,t,r,i){this.uniforms.uThickness[0]=this.thickness/t.source.width,this.uniforms.uThickness[1]=this.thickness/t.source.height,e.applyFilter(this,t,r,i)}static getAngleStep(e){return parseFloat((Math.PI*2/Math.max(e*Je.MAX_SAMPLES,Je.MIN_SAMPLES)).toFixed(7))}get thickness(){return this._thickness}set thickness(e){this._thickness=this.padding=e}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,r,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get quality(){return this._quality}set quality(e){this._quality=e,this.uniforms.uAngleStep=Je.getAngleStep(e)}get knockout(){return this.uniforms.uKnockout===1}set knockout(e){this.uniforms.uKnockout=e?1:0}};tt(Bi,"DEFAULT_OPTIONS",{thickness:1,color:0,alpha:1,quality:.1,knockout:!1});tt(Bi,"MIN_SAMPLES",1);tt(Bi,"MAX_SAMPLES",100);var Mg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uRadian;
uniform vec2 uCenter;
uniform float uRadius;
uniform int uKernelSize;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    float aspect = uInputSize.y / uInputSize.x;
    vec2 center = uCenter.xy / uInputSize.xy;
    float gradient = uRadius / uInputSize.x * 0.3;
    float radius = uRadius / uInputSize.x - gradient * 0.5;
    int k = uKernelSize - 1;

    vec2 coord = vTextureCoord;
    vec2 dir = vec2(center - coord);
    float dist = length(vec2(dir.x, dir.y * aspect));

    float radianStep = uRadian;
    if (radius >= 0.0 && dist > radius) {
        float delta = dist - radius;
        float gap = gradient;
        float scale = 1.0 - abs(delta / gap);
        if (scale <= 0.0) {
            finalColor = color;
            return;
        }
        radianStep *= scale;
    }
    radianStep /= float(k);

    float s = sin(radianStep);
    float c = cos(radianStep);
    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }

        coord -= center;
        coord.y *= aspect;
        coord = rotationMatrix * coord;
        coord.y /= aspect;
        coord += center;

        vec4 sample = texture(uTexture, coord);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample;
    }

    finalColor = color / float(uKernelSize);
}
`,Fg=`struct RadialBlurUniforms {
  uRadian: f32,
  uCenter: vec2<f32>,
  uKernelSize: f32,
  uRadius: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> radialBlurUniforms : RadialBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uRadian = radialBlurUniforms.uRadian;
  let uCenter = radialBlurUniforms.uCenter;
  let uKernelSize = radialBlurUniforms.uKernelSize;
  let uRadius = radialBlurUniforms.uRadius;
  
  var returnColorOnly = false;

  if (uKernelSize == 0)
  {
    returnColorOnly = true;
  }

  let aspect: f32 = gfu.uInputSize.y / gfu.uInputSize.x;
  let center: vec2<f32> = uCenter.xy / gfu.uInputSize.xy;
  let gradient: f32 = uRadius / gfu.uInputSize.x * 0.3;
  let radius: f32 = uRadius / gfu.uInputSize.x - gradient * 0.5;
  let k: i32 = i32(uKernelSize - 1);

  var coord: vec2<f32> = uv;
  let dir: vec2<f32> = vec2<f32>(center - coord);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * aspect));

  var radianStep: f32 = uRadian;
  
  if (radius >= 0.0 && dist > radius)
  {
    let delta: f32 = dist - radius;
    let gap: f32 = gradient;
    let scale: f32 = 1.0 - abs(delta / gap);
    if (scale <= 0.0) {
      returnColorOnly = true;
    }
    radianStep *= scale;
  }

  radianStep /= f32(k);

  let s: f32 = sin(radianStep);
  let c: f32 = cos(radianStep);
  let rotationMatrix: mat2x2<f32> = mat2x2<f32>(vec2<f32>(c, -s), vec2<f32>(s, c));
  
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let baseColor = vec4<f32>(color);

  let minK: i32 = min(i32(uKernelSize) - 1, MAX_KERNEL_SIZE - 1);

  for(var i: i32 = 0; i < minK; i += 1) 
  {
    coord -= center;
    coord.y *= aspect;
    coord = rotationMatrix * coord;
    coord.y /= aspect;
    coord += center;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, coord);
    // switch to pre-multiplied alpha to correctly blur transparent images
    // sample.rgb *= sample.a;
    color += sample;
  }

  return select(color / f32(uKernelSize), baseColor, returnColorOnly);
}

const MAX_KERNEL_SIZE: i32 = 2048;`,Ig=Object.defineProperty,zg=(n,e,t)=>e in n?Ig(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Tn=(n,e,t)=>(zg(n,typeof e!="symbol"?e+"":e,t),t);const Og=class Al extends W{constructor(...e){let t=e[0]??{};if(typeof t=="number"){if(O("6.0.0","RadialBlurFilter constructor params are now options object. See params: { angle, center, kernelSize, radius }"),t={angle:t},e[1]){const s="x"in e[1]?e[1].x:e[1][0],o="y"in e[1]?e[1].y:e[1][1];t.center={x:s,y:o}}e[2]&&(t.kernelSize=e[2]),e[3]&&(t.radius=e[3])}t={...Al.DEFAULT_OPTIONS,...t};const r=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:Fg,entryPoint:"mainFragment"}}),i=G.from({vertex:V,fragment:Mg,name:"radial-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{radialBlurUniforms:{uRadian:{value:0,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uKernelSize:{value:t.kernelSize,type:"i32"},uRadius:{value:t.radius,type:"f32"}}}}),Tn(this,"uniforms"),Tn(this,"_angle"),Tn(this,"_kernelSize"),this.uniforms=this.resources.radialBlurUniforms.uniforms,Object.assign(this,t)}_updateKernelSize(){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0}get angle(){return this._angle}set angle(e){this._angle=e,this.uniforms.uRadian=e*Math.PI/180,this._updateKernelSize()}get center(){return this.uniforms.uCenter}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.center.x}set centerX(e){this.center.x=e}get centerY(){return this.center.y}set centerY(e){this.center.y=e}get kernelSize(){return this._kernelSize}set kernelSize(e){this._kernelSize=e,this._updateKernelSize()}get radius(){return this.uniforms.uRadius}set radius(e){this.uniforms.uRadius=e<0||e===1/0?-1:e}};Tn(Og,"DEFAULT_OPTIONS",{angle:0,center:{x:0,y:0},kernelSize:5,radius:-1});var kg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uMirror;
uniform float uBoundary;
uniform vec2 uAmplitude;
uniform vec2 uWavelength;
uniform vec2 uAlpha;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
    vec2 coord = pixelCoord / uDimensions;

    if (coord.y < uBoundary) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    float k = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
    float areaY = uBoundary * uDimensions.y / uInputSize.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = uMirror > 0.5 ? v : vTextureCoord.y;

    float _amplitude = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / uInputSize.x;
    float _waveLength = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / uInputSize.y;
    float _alpha = (uAlpha.y - uAlpha.x) * k + uAlpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - uTime) * _amplitude;
    x = clamp(x, uInputClamp.x, uInputClamp.z);

    vec4 color = texture(uTexture, vec2(x, y));

    finalColor = color * _alpha;
}
`,Eg=`struct ReflectionUniforms {
  uMirror: f32,
  uBoundary: f32,
  uAmplitude: vec2<f32>,
  uWavelength: vec2<f32>,
  uAlpha: vec2<f32>,
  uTime: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> reflectionUniforms : ReflectionUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = reflectionUniforms.uDimensions;
  let uBoundary: f32 = reflectionUniforms.uBoundary;
  let uMirror: bool = reflectionUniforms.uMirror > 0.5;
  let uAmplitude: vec2<f32> = reflectionUniforms.uAmplitude;
  let uWavelength: vec2<f32> = reflectionUniforms.uWavelength;
  let uAlpha: vec2<f32> = reflectionUniforms.uAlpha;
  let uTime: f32 = reflectionUniforms.uTime;

  let pixelCoord: vec2<f32> = uv * gfu.uInputSize.xy;
  let coord: vec2<f32> = pixelCoord /uDimensions;
  var returnColorOnly: bool = false;

  if (coord.y < uBoundary) {
    returnColorOnly = true;
  }

  let k: f32 = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
  let areaY: f32 = uBoundary * uDimensions.y / gfu.uInputSize.y;
  let v: f32 = areaY + areaY - uv.y;
  let y: f32 = select(uv.y, v, uMirror);

  let amplitude: f32 = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / gfu.uInputSize.x;
  let waveLength: f32 = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / gfu.uInputSize.y;
  let alpha: f32 = select((uAlpha.y - uAlpha.x) * k + uAlpha.x, 1., returnColorOnly);

  var x: f32 = uv.x + cos(v * 6.28 / waveLength - uTime) * amplitude;
  x = clamp(x, gfu.uInputClamp.x, gfu.uInputClamp.z);
  
  return textureSample(uTexture, uSampler, select(vec2<f32>(x, y), uv, returnColorOnly)) * alpha;
}

fn rand(co: vec2<f32>) -> f32 
{
  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}`,Rg=Object.defineProperty,Ug=(n,e,t)=>e in n?Rg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,fi=(n,e,t)=>(Ug(n,typeof e!="symbol"?e+"":e,t),t);const Bg=class Tl extends W{constructor(e){e={...Tl.DEFAULT_OPTIONS,...e};const t=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:Eg,entryPoint:"mainFragment"}}),r=G.from({vertex:V,fragment:kg,name:"reflection-filter"});super({gpuProgram:t,glProgram:r,resources:{reflectionUniforms:{uMirror:{value:e.mirror?1:0,type:"f32"},uBoundary:{value:e.boundary,type:"f32"},uAmplitude:{value:e.amplitude,type:"vec2<f32>"},uWavelength:{value:e.waveLength,type:"vec2<f32>"},uAlpha:{value:e.alpha,type:"vec2<f32>"},uTime:{value:e.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),fi(this,"uniforms"),fi(this,"time",0),this.uniforms=this.resources.reflectionUniforms.uniforms,Object.assign(this,e)}apply(e,t,r,i){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,this.uniforms.uTime=this.time,e.applyFilter(this,t,r,i)}get mirror(){return this.uniforms.uMirror>.5}set mirror(e){this.uniforms.uMirror=e?1:0}get boundary(){return this.uniforms.uBoundary}set boundary(e){this.uniforms.uBoundary=e}get amplitude(){return Array.from(this.uniforms.uAmplitude)}set amplitude(e){this.uniforms.uAmplitude[0]=e[0],this.uniforms.uAmplitude[1]=e[1]}get amplitudeStart(){return this.uniforms.uAmplitude[0]}set amplitudeStart(e){this.uniforms.uAmplitude[0]=e}get amplitudeEnd(){return this.uniforms.uAmplitude[1]}set amplitudeEnd(e){this.uniforms.uAmplitude[1]=e}get waveLength(){return Array.from(this.uniforms.uWavelength)}set waveLength(e){this.uniforms.uWavelength[0]=e[0],this.uniforms.uWavelength[1]=e[1]}get wavelengthStart(){return this.uniforms.uWavelength[0]}set wavelengthStart(e){this.uniforms.uWavelength[0]=e}get wavelengthEnd(){return this.uniforms.uWavelength[1]}set wavelengthEnd(e){this.uniforms.uWavelength[1]=e}get alpha(){return Array.from(this.uniforms.uAlpha)}set alpha(e){this.uniforms.uAlpha[0]=e[0],this.uniforms.uAlpha[1]=e[1]}get alphaStart(){return this.uniforms.uAlpha[0]}set alphaStart(e){this.uniforms.uAlpha[0]=e}get alphaEnd(){return this.uniforms.uAlpha[1]}set alphaEnd(e){this.uniforms.uAlpha[1]=e}};fi(Bg,"DEFAULT_OPTIONS",{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0});var Dg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uInputSize;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

void main(void)
{
   float r = texture(uTexture, vTextureCoord + uRed/uInputSize.xy).r;
   float g = texture(uTexture, vTextureCoord + uGreen/uInputSize.xy).g;
   float b = texture(uTexture, vTextureCoord + uBlue/uInputSize.xy).b;
   float a = texture(uTexture, vTextureCoord).a;
   finalColor = vec4(r, g, b, a);
}
`,Lg=`struct RgbSplitUniforms {
    uRed: vec2<f32>,
    uGreen: vec2<f32>,
    uBlue: vec3<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> rgbSplitUniforms : RgbSplitUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let r = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uRed.x / gfu.uInputSize.x, rgbSplitUniforms.uRed.y / gfu.uInputSize.y)).r;
    let g = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uGreen.x / gfu.uInputSize.x, rgbSplitUniforms.uGreen.y / gfu.uInputSize.y)).g;
    let b = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uBlue.x / gfu.uInputSize.x, rgbSplitUniforms.uBlue.y / gfu.uInputSize.y)).b;
    let a = textureSample(uTexture, uSampler, uv).a;
    return vec4<f32>(r, g, b, a);
}
`,Ng=Object.defineProperty,Gg=(n,e,t)=>e in n?Ng(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Pl=(n,e,t)=>(Gg(n,typeof e!="symbol"?e+"":e,t),t);const Wg=class Ml extends W{constructor(...e){let t=e[0]??{};(Array.isArray(t)||"x"in t&&"y"in t)&&(O("6.0.0","RGBSplitFilter constructor params are now options object. See params: { red, green, blue }"),t={red:t},e[1]!==void 0&&(t.green=e[1]),e[2]!==void 0&&(t.blue=e[2])),t={...Ml.DEFAULT_OPTIONS,...t};const r=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:Lg,entryPoint:"mainFragment"}}),i=G.from({vertex:V,fragment:Dg,name:"rgb-split-filter"});super({gpuProgram:r,glProgram:i,resources:{rgbSplitUniforms:{uRed:{value:t.red,type:"vec2<f32>"},uGreen:{value:t.green,type:"vec2<f32>"},uBlue:{value:t.blue,type:"vec2<f32>"}}}}),Pl(this,"uniforms"),this.uniforms=this.resources.rgbSplitUniforms.uniforms,Object.assign(this,t)}get red(){return this.uniforms.uRed}set red(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uRed=e}get redX(){return this.red.x}set redX(e){this.red.x=e}get redY(){return this.red.y}set redY(e){this.red.y=e}get green(){return this.uniforms.uGreen}set green(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uGreen=e}get greenX(){return this.green.x}set greenX(e){this.green.x=e}get greenY(){return this.green.y}set greenY(e){this.green.y=e}get blue(){return this.uniforms.uBlue}set blue(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uBlue=e}get blueX(){return this.blue.x}set blueX(e){this.blue.x=e}get blueY(){return this.blue.y}set blueY(e){this.blue.y=e}};Pl(Wg,"DEFAULT_OPTIONS",{red:{x:-10,y:0},green:{x:0,y:10},blue:{x:0,y:0}});var $g=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uCenter;
uniform float uTime;
uniform float uSpeed;
uniform vec4 uWave;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159;

void main()
{
    float uAmplitude = uWave[0];
    float uWavelength = uWave[1];
    float uBrightness = uWave[2];
    float uRadius = uWave[3];

    float halfWavelength = uWavelength * 0.5 / uInputSize.x;
    float maxRadius = uRadius / uInputSize.x;
    float currentRadius = uTime * uSpeed / uInputSize.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            finalColor = texture(uTexture, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - uCenter / uInputSize.xy);
    dir.y *= uInputSize.y / uInputSize.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );

    vec2 offset = diffUV * powDiff / uInputSize.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // finalColor = texture(uTexture, vTextureCoord + offset);

    color.rgb *= 1.0 + (uBrightness - 1.0) * p * fade;

    finalColor = color;
}
`,Vg=`
struct ShockWaveUniforms {
    uTime: f32,
    uOffset: vec2<f32>,
    uSpeed: f32,
    uWave: vec4<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> shockwaveUniforms : ShockWaveUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {

    let uTime = shockwaveUniforms.uTime;
    let uOffset = shockwaveUniforms.uOffset;
    let uSpeed = shockwaveUniforms.uSpeed;
    let uAmplitude = shockwaveUniforms.uWave[0];
    let uWavelength = shockwaveUniforms.uWave[1];
    let uBrightness = shockwaveUniforms.uWave[2];
    let uRadius = shockwaveUniforms.uWave[3];
    let halfWavelength: f32 = uWavelength * 0.5 / gfu.uInputSize.x;
    let maxRadius: f32 = uRadius / gfu.uInputSize.x;
    let currentRadius: f32 = uTime * uSpeed / gfu.uInputSize.x;
    var fade: f32 = 1.0;
    var returnColorOnly: bool = false;
    
    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            returnColorOnly = true;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }
    var dir: vec2<f32> = vec2<f32>(uv - uOffset / gfu.uInputSize.xy);
    dir.y *= gfu.uInputSize.y / gfu.uInputSize.x;

    let dist:f32 = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        returnColorOnly = true;
    }

    let diffUV: vec2<f32> = normalize(dir);
    let diff: f32 = (dist - currentRadius) / halfWavelength;
    let p: f32 = 1.0 - pow(abs(diff), 2.0);
    let powDiff: f32 = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );
    let offset: vec2<f32> = diffUV * powDiff / gfu.uInputSize.xy;
    // Do clamp :
    let coord: vec2<f32> = uv + offset;
    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);

    var clampedColor: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    
    if (boolVec2(coord, clampedCoord)) 
    {
        clampedColor *= max(0.0, 1.0 - length(coord - clampedCoord));
    }
    // No clamp :
    var finalColor = clampedColor;

    return select(finalColor, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn boolVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
    if (x.x == y.x && x.y == y.y)
    {
        return true;
    }
    
    return false;
}

const PI: f32 = 3.14159265358979323846264;
`,Hg=Object.defineProperty,jg=(n,e,t)=>e in n?Hg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,di=(n,e,t)=>(jg(n,typeof e!="symbol"?e+"":e,t),t);const Xg=class Fl extends W{constructor(...e){let t=e[0]??{};(Array.isArray(t)||"x"in t&&"y"in t)&&(O("6.0.0","ShockwaveFilter constructor params are now options object. See params: { center, speed, amplitude, wavelength, brightness, radius, time }"),t={center:t,...e[1]},e[2]!==void 0&&(t.time=e[2])),t={...Fl.DEFAULT_OPTIONS,...t};const r=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:Vg,entryPoint:"mainFragment"}}),i=G.from({vertex:V,fragment:$g,name:"shockwave-filter"});super({gpuProgram:r,glProgram:i,resources:{shockwaveUniforms:{uTime:{value:t.time,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uSpeed:{value:t.speed,type:"f32"},uWave:{value:new Float32Array(4),type:"vec4<f32>"}}}}),di(this,"uniforms"),di(this,"time"),this.time=0,this.uniforms=this.resources.shockwaveUniforms.uniforms,Object.assign(this,t)}apply(e,t,r,i){this.uniforms.uTime=this.time,e.applyFilter(this,t,r,i)}get center(){return this.uniforms.uCenter}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.uniforms.uCenter.x}set centerX(e){this.uniforms.uCenter.x=e}get centerY(){return this.uniforms.uCenter.y}set centerY(e){this.uniforms.uCenter.y=e}get speed(){return this.uniforms.uSpeed}set speed(e){this.uniforms.uSpeed=e}get amplitude(){return this.uniforms.uWave[0]}set amplitude(e){this.uniforms.uWave[0]=e}get wavelength(){return this.uniforms.uWave[1]}set wavelength(e){this.uniforms.uWave[1]=e}get brightness(){return this.uniforms.uWave[2]}set brightness(e){this.uniforms.uWave[2]=e}get radius(){return this.uniforms.uWave[3]}set radius(e){this.uniforms.uWave[3]=e}};di(Xg,"DEFAULT_OPTIONS",{center:{x:0,y:0},speed:500,amplitude:30,wavelength:160,brightness:1,radius:-1});var Yg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform vec3 uColor;
uniform float uAlpha;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

void main() {
    vec4 diffuseColor = texture(uTexture, vTextureCoord);
    vec2 lightCoord = (vTextureCoord * uInputSize.xy) / uDimensions;
    vec4 light = texture(uMapTexture, lightCoord);
    vec3 ambient = uColor.rgb * uAlpha;
    vec3 intensity = ambient + light.rgb;
    vec3 color = diffuseColor.rgb * intensity;
    finalColor = vec4(color, diffuseColor.a);
}
`,qg=`struct SimpleLightmapUniforms {
  uColor: vec3<f32>,
  uAlpha: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> simpleLightmapUniforms : SimpleLightmapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
) -> @location(0) vec4<f32> {
  let uColor = simpleLightmapUniforms.uColor;
  let uAlpha = simpleLightmapUniforms.uAlpha;
  let uDimensions = simpleLightmapUniforms.uDimensions;

  let diffuseColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightCoord: vec2<f32> = (uv * gfu.uInputSize.xy) / simpleLightmapUniforms.uDimensions;
  let light: vec4<f32> = textureSample(uMapTexture, uMapSampler, lightCoord);
  let ambient: vec3<f32> = uColor * uAlpha;
  let intensity: vec3<f32> = ambient + light.rgb;
  let finalColor: vec3<f32> = diffuseColor.rgb * intensity;
  return vec4<f32>(finalColor, diffuseColor.a);
}`,Kg=Object.defineProperty,Zg=(n,e,t)=>e in n?Kg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Pn=(n,e,t)=>(Zg(n,typeof e!="symbol"?e+"":e,t),t);const Qg=class Il extends W{constructor(...e){let t=e[0]??{};if(t instanceof U&&(O("6.0.0","SimpleLightmapFilter constructor params are now options object. See params: { lightMap, color, alpha }"),t={lightMap:t},e[1]!==void 0&&(t.color=e[1]),e[2]!==void 0&&(t.alpha=e[2])),t={...Il.DEFAULT_OPTIONS,...t},!t.lightMap)throw Error("No light map texture source was provided to SimpleLightmapFilter");const r=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:qg,entryPoint:"mainFragment"}}),i=G.from({vertex:V,fragment:Yg,name:"simple-lightmap-filter"});super({gpuProgram:r,glProgram:i,resources:{simpleLightmapUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}},uMapTexture:t.lightMap.source,uMapSampler:t.lightMap.source.style}}),Pn(this,"uniforms"),Pn(this,"_color"),Pn(this,"_lightMap"),this.uniforms=this.resources.simpleLightmapUniforms.uniforms,this._color=new $,this.color=t.color??0,Object.assign(this,t)}apply(e,t,r,i){this.uniforms.uDimensions[0]=t.frame.width,this.uniforms.uDimensions[1]=t.frame.height,e.applyFilter(this,t,r,i)}get lightMap(){return this._lightMap}set lightMap(e){this._lightMap=e,this.resources.uMapTexture=e.source,this.resources.uMapSampler=e.source.style}get color(){return this._color.value}set color(e){this._color.setValue(e);const[t,r,i]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}};Pn(Qg,"DEFAULT_OPTIONS",{lightMap:U.WHITE,color:0,alpha:1});var Jg=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uBlur;
uniform vec2 uStart;
uniform vec2 uEnd;
uniform vec2 uDelta;
uniform vec2 uTexSize;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float blur = uBlur[0];
    float gradientBlur = uBlur[1];

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(uStart.y - uEnd.y, uEnd.x - uStart.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * uTexSize - uStart, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture(uTexture, vTextureCoord + uDelta / uTexSize * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    finalColor = color;
}
`,ev=`struct TiltShiftUniforms {
  uBlur: vec2<f32>,
  uStart: vec2<f32>,
  uEnd: vec2<f32>,
  uDelta: vec2<f32>,
  uTexSize: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> tiltShiftUniforms : TiltShiftUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uBlur = tiltShiftUniforms.uBlur[0];
  let uBlurGradient = tiltShiftUniforms.uBlur[1];
  let uStart = tiltShiftUniforms.uStart;
  let uEnd = tiltShiftUniforms.uEnd;
  let uDelta = tiltShiftUniforms.uDelta;
  let uTexSize = tiltShiftUniforms.uTexSize;

  var color: vec4<f32> = vec4<f32>(0.0);
  var total: f32 = 0.0;

  let offset: f32 = random(position, vec3<f32>(12.9898, 78.233, 151.7182), 0.0);
  let normal: vec2<f32> = normalize(vec2<f32>(uStart.y - uEnd.y, uEnd.x - uStart.x));
  let radius: f32 = smoothstep(0.0, 1.0, abs(dot(uv * uTexSize - uStart, normal)) / uBlurGradient) * uBlur;

  for (var t: f32 = -30.0; t <= 30.0; t += 1.0)
  {
    var percent: f32 = (t + offset - 0.5) / 30.0;
    var weight: f32 = 1.0 - abs(percent);
    var sample: vec4<f32> = textureSample(uTexture, uSampler, uv + uDelta / uTexSize * percent * radius);
    sample = vec4<f32>(sample.xyz * sample.a, sample.a); // multiply sample.rgb with sample.a
    color += sample * weight;
    total += weight;
  }

  color /= total;
  color = vec4<f32>(color.xyz / (color.a + 0.00001), color.a); // divide color.rgb by color.a + 0.00001

  return color;
}


fn random(position: vec4<f32>, scale: vec3<f32>, seed: f32) -> f32
{
  return fract(sin(dot(position.xyz + seed, scale)) * 43758.5453 + seed);
}`,tv=Object.defineProperty,nv=(n,e,t)=>e in n?tv(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,pi=(n,e,t)=>(nv(n,typeof e!="symbol"?e+"":e,t),t);const rv=class zl extends W{constructor(e){e={...zl.DEFAULT_OPTIONS,...e};const t=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:ev,entryPoint:"mainFragment"}}),r=G.from({vertex:V,fragment:Jg,name:"tilt-shift-axis-filter"});super({gpuProgram:t,glProgram:r,resources:{tiltShiftUniforms:{uBlur:{value:new Float32Array([e.blur??100,e.gradientBlur??600]),type:"vec2<f32>"},uStart:{value:e.start,type:"vec2<f32>"},uEnd:{value:e.end,type:"vec2<f32>"},uDelta:{value:new Float32Array([30,30]),type:"vec2<f32>"},uTexSize:{value:new Float32Array([window.innerWidth,window.innerHeight]),type:"vec2<f32>"}}}}),pi(this,"uniforms"),pi(this,"_tiltAxis"),this.uniforms=this.resources.tiltShiftUniforms.uniforms,this._tiltAxis=e.axis,this.updateDelta()}updateDelta(){if(this.uniforms.uDelta[0]=0,this.uniforms.uDelta[1]=0,this._tiltAxis===void 0)return;const e=this.uniforms.uEnd,t=this.uniforms.uStart,r=e.x-t.x,i=e.y-t.y,s=Math.sqrt(r*r+i*i),o=this._tiltAxis==="vertical";this.uniforms.uDelta[0]=o?-i/s:r/s,this.uniforms.uDelta[1]=o?r/s:i/s}};pi(rv,"DEFAULT_OPTIONS",{blur:100,gradientBlur:600,start:{x:0,y:window.innerHeight/2},end:{x:600,y:window.innerHeight/2}});var iv=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTwist;
uniform vec2 uOffset;
uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= uOffset;

    float dist = length(coord);
    float uRadius = uTwist[0];
    float uAngle = uTwist[1];

    if (dist < uRadius)
    {
        float ratioDist = (uRadius - dist) / uRadius;
        float angleMod = ratioDist * ratioDist * uAngle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += uOffset;

    return coord;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);
    coord = twist(coord);
    coord = unmapCoord(coord);
    finalColor = texture(uTexture, coord);
}
`,sv=`struct TwistUniforms {
  uTwist:vec2<f32>,
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> twistUniforms : TwistUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  return textureSample(uTexture, uSampler, unmapCoord(twist(mapCoord(uv))));
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord *= gfu.uInputSize.xy;
  mappedCoord += gfu.uOutputFrame.xy;
  return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord -= gfu.uOutputFrame.xy;
  mappedCoord /= gfu.uInputSize.xy;
  return mappedCoord;
}

fn twist(coord: vec2<f32>) -> vec2<f32>
{
  var twistedCoord: vec2<f32> = coord;
  let uRadius = twistUniforms.uTwist[0];
  let uAngle = twistUniforms.uTwist[1];
  let uOffset = twistUniforms.uOffset;

  twistedCoord -= uOffset;
  
  let dist = length(twistedCoord);

  if (dist < uRadius)
  {
    let ratioDist: f32 = (uRadius - dist) / uRadius;
    let angleMod: f32 = ratioDist * ratioDist * uAngle;
    let s: f32 = sin(angleMod);
    let c: f32 = cos(angleMod);
    twistedCoord = vec2<f32>(twistedCoord.x * c - twistedCoord.y * s, twistedCoord.x * s + twistedCoord.y * c);
  }

  twistedCoord += uOffset;
  return twistedCoord;
}
`,ov=Object.defineProperty,av=(n,e,t)=>e in n?ov(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ol=(n,e,t)=>(av(n,typeof e!="symbol"?e+"":e,t),t);const lv=class kl extends W{constructor(e){e={...kl.DEFAULT_OPTIONS,...e};const t=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:sv,entryPoint:"mainFragment"}}),r=G.from({vertex:V,fragment:iv,name:"twist-filter"});super({gpuProgram:t,glProgram:r,resources:{twistUniforms:{uTwist:{value:[e.radius??0,e.angle??0],type:"vec2<f32>"},uOffset:{value:e.offset,type:"vec2<f32>"}}},...e}),Ol(this,"uniforms"),this.uniforms=this.resources.twistUniforms.uniforms}get radius(){return this.uniforms.uTwist[0]}set radius(e){this.uniforms.uTwist[0]=e}get angle(){return this.uniforms.uTwist[1]}set angle(e){this.uniforms.uTwist[1]=e}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e}get offsetX(){return this.offset.x}set offsetX(e){this.offset.x=e}get offsetY(){return this.offset.y}set offsetY(e){this.offset.y=e}};Ol(lv,"DEFAULT_OPTIONS",{padding:20,radius:200,angle:4,offset:{x:0,y:0}});var uv=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uStrength;
uniform vec2 uCenter;
uniform vec2 uRadii;

uniform vec4 uInputSize;

const float MAX_KERNEL_SIZE = \${MAX_KERNEL_SIZE};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {
    float minGradient = uRadii[0] * 0.3;
    float innerRadius = (uRadii[0] + minGradient * 0.5) / uInputSize.x;

    float gradient = uRadii[1] * 0.3;
    float radius = (uRadii[1] - gradient * 0.5) / uInputSize.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / uInputSize.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * uInputSize.y / uInputSize.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / uInputSize.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture(uTexture, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture(uTexture, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,cv=`struct ZoomBlurUniforms {
    uStrength:f32,
    uCenter:vec2<f32>,
    uRadii:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> zoomBlurUniforms : ZoomBlurUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uStrength = zoomBlurUniforms.uStrength;
  let uCenter = zoomBlurUniforms.uCenter;
  let uRadii = zoomBlurUniforms.uRadii;

  let minGradient: f32 = uRadii[0] * 0.3;
  let innerRadius: f32 = (uRadii[0] + minGradient * 0.5) / gfu.uInputSize.x;

  let gradient: f32 = uRadii[1] * 0.3;
  let radius: f32 = (uRadii[1] - gradient * 0.5) / gfu.uInputSize.x;

  let MAX_KERNEL_SIZE: f32 = \${MAX_KERNEL_SIZE};

  var countLimit: f32 = MAX_KERNEL_SIZE;

  var dir: vec2<f32> = vec2<f32>(uCenter / gfu.uInputSize.xy - uv);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * gfu.uInputSize.y / gfu.uInputSize.x));

  var strength: f32 = uStrength;

  var delta: f32 = 0.0;
  var gap: f32;

  if (dist < innerRadius) {
      delta = innerRadius - dist;
      gap = minGradient;
  } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
      delta = dist - radius;
      gap = gradient;
  }

  var returnColorOnly: bool = false;

  if (delta > 0.0) {
    let normalCount: f32 = gap / gfu.uInputSize.x;
    delta = (normalCount - delta) / normalCount;
    countLimit *= delta;
    strength *= delta;
    
    if (countLimit < 1.0)
    {
      returnColorOnly = true;;
    }
  }

  // randomize the lookup values to hide the fixed number of samples
  let offset: f32 = rand(uv, 0.0);

  var total: f32 = 0.0;
  var color: vec4<f32> = vec4<f32>(0.);

  dir *= strength;

  for (var t = 0.0; t < MAX_KERNEL_SIZE; t += 1.0) {
    let percent: f32 = (t + offset) / MAX_KERNEL_SIZE;
    let weight: f32 = 4.0 * (percent - percent * percent);
    let p: vec2<f32> = uv + dir * percent;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, p);
    
    if (t < countLimit)
    {
      color += sample * weight;
      total += weight;
    }
  }

  color /= total;

  return select(color, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
fn rand(co: vec2<f32>, seed: f32) -> f32
{
  let a: f32 = 12.9898;
  let b: f32 = 78.233;
  let c: f32 = 43758.5453;
  let dt: f32 = dot(co + seed, vec2<f32>(a, b));
  let sn: f32 = modulo(dt, 3.14159);
  return fract(sin(sn) * c + seed);
}`,hv=Object.defineProperty,fv=(n,e,t)=>e in n?hv(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,El=(n,e,t)=>(fv(n,typeof e!="symbol"?e+"":e,t),t);const dv=class Rl extends W{constructor(e){e={...Rl.DEFAULT_OPTIONS,...e};const t=e.maxKernelSize??32,r=D.from({vertex:{source:H,entryPoint:"mainVertex"},fragment:{source:cv.replace("${MAX_KERNEL_SIZE}",t.toFixed(1)),entryPoint:"mainFragment"}}),i=G.from({vertex:V,fragment:uv.replace("${MAX_KERNEL_SIZE}",t.toFixed(1)),name:"zoom-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{zoomBlurUniforms:{uStrength:{value:e.strength,type:"f32"},uCenter:{value:e.center,type:"vec2<f32>"},uRadii:{value:new Float32Array(2),type:"vec2<f32>"}}}}),El(this,"uniforms"),this.uniforms=this.resources.zoomBlurUniforms.uniforms,Object.assign(this,e)}get strength(){return this.uniforms.uStrength}set strength(e){this.uniforms.uStrength=e}get center(){return this.uniforms.uCenter}set center(e){Array.isArray(e)&&(e={x:e[0],y:e[1]}),this.uniforms.uCenter=e}get centerX(){return this.uniforms.uCenter.x}set centerX(e){this.uniforms.uCenter.x=e}get centerY(){return this.uniforms.uCenter.y}set centerY(e){this.uniforms.uCenter.y=e}get innerRadius(){return this.uniforms.uRadii[0]}set innerRadius(e){this.uniforms.uRadii[0]=e}get radius(){return this.uniforms.uRadii[1]}set radius(e){this.uniforms.uRadii[1]=e<0||e===1/0?-1:e}};El(dv,"DEFAULT_OPTIONS",{strength:.1,center:{x:0,y:0},innerRadius:0,radius:-1,maxKernelSize:32});function ro(n,e){const t=new Km(e);!n.filters||n.filters.length==0?(n.filters=[t],n.glowFilter=t):n.glowFilter||(n.filters=[...n.filters,t])}class pv extends te{constructor(e,t){super(),this.tileWidth=e,this.tileHeight=t,this.eventMode="static",this.coordinate={x:0,y:0},this.isSelected=!1,this.initTemplate(),this.initEvents()}initTemplate(){const e=new it;e.roundRect(0,0,this.tileWidth,this.tileHeight),e.fill({color:16776971,alpha:.5}),this.template=e,this.addChild(e)}initEvents(){this.on("selected",()=>{ro(this,{outerStrength:3,color:7606872,distance:10}),this.isSelected=!0}),this.on("deselected",()=>{this.isSelected=!1,this.filters=[]})}onmouseover(){this.isSelected||ro(this,{outerStrength:3,color:7606872,distance:10})}onmouseleave(){this.isSelected||(this.filters=[])}setCoordinate(e,t){this.coordinate.x=e,this.coordinate.y=t}getCoordinate(){return this.coordinate}setContent(e,t=null){this.content=e,this.addChild(e),t&&this.setContentValue(t)}setContentValue(e){this.content.value=e}getContentValue(){return this.content.value}isContentEquals(e){return this.content.value==e.content.value}setContentCenter(e,t=null){this.content=e,e.position.set(this.width/2-e.contentWidth/2,this.height/2-e.contentHeight/2),t&&this.setContentValue(t),this.addChild(e)}getTemplate(){return this.template}}class mv extends te{constructor(e){super(),this.value=e,this.eventMode="static"}initContent(){}getValue(){return this.value}setValue(e){this.value=e}}class gv extends mv{constructor(e,t,r,i){super(t),this.contentWidth=r,this.contentHeight=i,this.loadTexture(e)}loadTexture(e){Nt.load(e).then(t=>{this.contentTexture=t,this.sprite=new bt(t),this.sprite.width=this.contentWidth,this.sprite.height=this.contentHeight,this.addChild(this.sprite)})}}function vv(n,e){let t=new it;t.moveTo(n[0].x,n[0].y);for(let r=1;r<n.length;r++)t.lineTo(n[r].x,n[r].y);return t.stroke({width:10,color:e}),t}var Ul={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Di={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},xv=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Dn={CSS:{},springs:{}};function Ie(n,e,t){return Math.min(Math.max(n,e),t)}function Vt(n,e){return n.indexOf(e)>-1}function Rr(n,e){return n.apply(null,e)}var k={arr:function(n){return Array.isArray(n)},obj:function(n){return Vt(Object.prototype.toString.call(n),"Object")},pth:function(n){return k.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||k.svg(n)},str:function(n){return typeof n=="string"},fnc:function(n){return typeof n=="function"},und:function(n){return typeof n>"u"},nil:function(n){return k.und(n)||n===null},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return k.hex(n)||k.rgb(n)||k.hsl(n)},key:function(n){return!Ul.hasOwnProperty(n)&&!Di.hasOwnProperty(n)&&n!=="targets"&&n!=="keyframes"}};function Bl(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map(function(t){return parseFloat(t)}):[]}function Dl(n,e){var t=Bl(n),r=Ie(k.und(t[0])?1:t[0],.1,100),i=Ie(k.und(t[1])?100:t[1],.1,100),s=Ie(k.und(t[2])?10:t[2],.1,100),o=Ie(k.und(t[3])?0:t[3],.1,100),a=Math.sqrt(i/r),l=s/(2*Math.sqrt(i*r)),c=l<1?a*Math.sqrt(1-l*l):0,u=1,h=l<1?(l*a+-o)/c:-o+a;function f(m){var g=e?e*m/1e3:m;return l<1?g=Math.exp(-g*l*a)*(u*Math.cos(c*g)+h*Math.sin(c*g)):g=(u+h*g)*Math.exp(-g*a),m===0||m===1?m:1-g}function p(){var m=Dn.springs[n];if(m)return m;for(var g=1/6,d=0,v=0;;)if(d+=g,f(d)===1){if(v++,v>=16)break}else v=0;var x=d*g*1e3;return Dn.springs[n]=x,x}return e?f:p}function yv(n){return n===void 0&&(n=10),function(e){return Math.ceil(Ie(e,1e-6,1)*n)*(1/n)}}var _v=function(){var n=11,e=1/(n-1);function t(u,h){return 1-3*h+3*u}function r(u,h){return 3*h-6*u}function i(u){return 3*u}function s(u,h,f){return((t(h,f)*u+r(h,f))*u+i(h))*u}function o(u,h,f){return 3*t(h,f)*u*u+2*r(h,f)*u+i(h)}function a(u,h,f,p,m){var g,d,v=0;do d=h+(f-h)/2,g=s(d,p,m)-u,g>0?f=d:h=d;while(Math.abs(g)>1e-7&&++v<10);return d}function l(u,h,f,p){for(var m=0;m<4;++m){var g=o(h,f,p);if(g===0)return h;var d=s(h,f,p)-u;h-=d/g}return h}function c(u,h,f,p){if(!(0<=u&&u<=1&&0<=f&&f<=1))return;var m=new Float32Array(n);if(u!==h||f!==p)for(var g=0;g<n;++g)m[g]=s(g*e,u,f);function d(v){for(var x=0,y=1,_=n-1;y!==_&&m[y]<=v;++y)x+=e;--y;var b=(v-m[y])/(m[y+1]-m[y]),C=x+b*e,A=o(C,u,f);return A>=.001?l(v,C,u,f):A===0?C:a(v,x,x+e,u,f)}return function(v){return u===h&&f===p||v===0||v===1?v:s(d(v),h,p)}}return c}(),Ll=function(){var n={linear:function(){return function(r){return r}}},e={Sine:function(){return function(r){return 1-Math.cos(r*Math.PI/2)}},Expo:function(){return function(r){return r?Math.pow(2,10*r-10):0}},Circ:function(){return function(r){return 1-Math.sqrt(1-r*r)}},Back:function(){return function(r){return r*r*(3*r-2)}},Bounce:function(){return function(r){for(var i,s=4;r<((i=Math.pow(2,--s))-1)/11;);return 1/Math.pow(4,3-s)-7.5625*Math.pow((i*3-2)/22-r,2)}},Elastic:function(r,i){r===void 0&&(r=1),i===void 0&&(i=.5);var s=Ie(r,1,10),o=Ie(i,.1,2);return function(a){return a===0||a===1?a:-s*Math.pow(2,10*(a-1))*Math.sin((a-1-o/(Math.PI*2)*Math.asin(1/s))*(Math.PI*2)/o)}}},t=["Quad","Cubic","Quart","Quint"];return t.forEach(function(r,i){e[r]=function(){return function(s){return Math.pow(s,i+2)}}}),Object.keys(e).forEach(function(r){var i=e[r];n["easeIn"+r]=i,n["easeOut"+r]=function(s,o){return function(a){return 1-i(s,o)(1-a)}},n["easeInOut"+r]=function(s,o){return function(a){return a<.5?i(s,o)(a*2)/2:1-i(s,o)(a*-2+2)/2}},n["easeOutIn"+r]=function(s,o){return function(a){return a<.5?(1-i(s,o)(1-a*2))/2:(i(s,o)(a*2-1)+1)/2}}}),n}();function Li(n,e){if(k.fnc(n))return n;var t=n.split("(")[0],r=Ll[t],i=Bl(n);switch(t){case"spring":return Dl(n,e);case"cubicBezier":return Rr(_v,i);case"steps":return Rr(yv,i);default:return Rr(r,i)}}function Nl(n){try{var e=document.querySelectorAll(n);return e}catch{return}}function Xn(n,e){for(var t=n.length,r=arguments.length>=2?arguments[1]:void 0,i=[],s=0;s<t;s++)if(s in n){var o=n[s];e.call(r,o,s,n)&&i.push(o)}return i}function Yn(n){return n.reduce(function(e,t){return e.concat(k.arr(t)?Yn(t):t)},[])}function io(n){return k.arr(n)?n:(k.str(n)&&(n=Nl(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function Ni(n,e){return n.some(function(t){return t===e})}function Gi(n){var e={};for(var t in n)e[t]=n[t];return e}function mi(n,e){var t=Gi(n);for(var r in n)t[r]=e.hasOwnProperty(r)?e[r]:n[r];return t}function qn(n,e){var t=Gi(n);for(var r in e)t[r]=k.und(n[r])?e[r]:n[r];return t}function bv(n){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);return e?"rgba("+e[1]+",1)":n}function Sv(n){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=n.replace(e,function(a,l,c,u){return l+l+c+c+u+u}),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),i=parseInt(r[1],16),s=parseInt(r[2],16),o=parseInt(r[3],16);return"rgba("+i+","+s+","+o+",1)"}function Cv(n){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),t=parseInt(e[1],10)/360,r=parseInt(e[2],10)/100,i=parseInt(e[3],10)/100,s=e[4]||1;function o(f,p,m){return m<0&&(m+=1),m>1&&(m-=1),m<1/6?f+(p-f)*6*m:m<1/2?p:m<2/3?f+(p-f)*(2/3-m)*6:f}var a,l,c;if(r==0)a=l=c=i;else{var u=i<.5?i*(1+r):i+r-i*r,h=2*i-u;a=o(h,u,t+1/3),l=o(h,u,t),c=o(h,u,t-1/3)}return"rgba("+a*255+","+l*255+","+c*255+","+s+")"}function wv(n){if(k.rgb(n))return bv(n);if(k.hex(n))return Sv(n);if(k.hsl(n))return Cv(n)}function Be(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function Av(n){if(Vt(n,"translate")||n==="perspective")return"px";if(Vt(n,"rotate")||Vt(n,"skew"))return"deg"}function gi(n,e){return k.fnc(n)?n(e.target,e.id,e.total):n}function ze(n,e){return n.getAttribute(e)}function Wi(n,e,t){var r=Be(e);if(Ni([t,"deg","rad","turn"],r))return e;var i=Dn.CSS[e+t];if(!k.und(i))return i;var s=100,o=document.createElement(n.tagName),a=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;a.appendChild(o),o.style.position="absolute",o.style.width=s+t;var l=s/o.offsetWidth;a.removeChild(o);var c=l*parseFloat(e);return Dn.CSS[e+t]=c,c}function Gl(n,e,t){if(e in n.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=n.style[e]||getComputedStyle(n).getPropertyValue(r)||"0";return t?Wi(n,i,t):i}}function $i(n,e){if(k.dom(n)&&!k.inp(n)&&(!k.nil(ze(n,e))||k.svg(n)&&n[e]))return"attribute";if(k.dom(n)&&Ni(xv,e))return"transform";if(k.dom(n)&&e!=="transform"&&Gl(n,e))return"css";if(n[e]!=null)return"object"}function Wl(n){if(k.dom(n)){for(var e=n.style.transform||"",t=/(\w+)\(([^)]*)\)/g,r=new Map,i;i=t.exec(e);)r.set(i[1],i[2]);return r}}function Tv(n,e,t,r){var i=Vt(e,"scale")?1:0+Av(e),s=Wl(n).get(e)||i;return t&&(t.transforms.list.set(e,s),t.transforms.last=e),r?Wi(n,s,r):s}function Vi(n,e,t,r){switch($i(n,e)){case"transform":return Tv(n,e,r,t);case"css":return Gl(n,e,t);case"attribute":return ze(n,e);default:return n[e]||0}}function Hi(n,e){var t=/^(\*=|\+=|-=)/.exec(n);if(!t)return n;var r=Be(n)||0,i=parseFloat(e),s=parseFloat(n.replace(t[0],""));switch(t[0][0]){case"+":return i+s+r;case"-":return i-s+r;case"*":return i*s+r}}function $l(n,e){if(k.col(n))return wv(n);if(/\s/g.test(n))return n;var t=Be(n),r=t?n.substr(0,n.length-t.length):n;return e?r+e:r}function ji(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function Pv(n){return Math.PI*2*ze(n,"r")}function Mv(n){return ze(n,"width")*2+ze(n,"height")*2}function Fv(n){return ji({x:ze(n,"x1"),y:ze(n,"y1")},{x:ze(n,"x2"),y:ze(n,"y2")})}function Vl(n){for(var e=n.points,t=0,r,i=0;i<e.numberOfItems;i++){var s=e.getItem(i);i>0&&(t+=ji(r,s)),r=s}return t}function Iv(n){var e=n.points;return Vl(n)+ji(e.getItem(e.numberOfItems-1),e.getItem(0))}function Hl(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return Pv(n);case"rect":return Mv(n);case"line":return Fv(n);case"polyline":return Vl(n);case"polygon":return Iv(n)}}function zv(n){var e=Hl(n);return n.setAttribute("stroke-dasharray",e),e}function Ov(n){for(var e=n.parentNode;k.svg(e)&&k.svg(e.parentNode);)e=e.parentNode;return e}function jl(n,e){var t=e||{},r=t.el||Ov(n),i=r.getBoundingClientRect(),s=ze(r,"viewBox"),o=i.width,a=i.height,l=t.viewBox||(s?s.split(" "):[0,0,o,a]);return{el:r,viewBox:l,x:l[0]/1,y:l[1]/1,w:o,h:a,vW:l[2],vH:l[3]}}function kv(n,e){var t=k.str(n)?Nl(n)[0]:n,r=e||100;return function(i){return{property:i,el:t,svg:jl(t),totalLength:Hl(t)*(r/100)}}}function Ev(n,e,t){function r(u){u===void 0&&(u=0);var h=e+u>=1?e+u:0;return n.el.getPointAtLength(h)}var i=jl(n.el,n.svg),s=r(),o=r(-1),a=r(1),l=t?1:i.w/i.vW,c=t?1:i.h/i.vH;switch(n.property){case"x":return(s.x-i.x)*l;case"y":return(s.y-i.y)*c;case"angle":return Math.atan2(a.y-o.y,a.x-o.x)*180/Math.PI}}function so(n,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=$l(k.pth(n)?n.totalLength:n,e)+"";return{original:r,numbers:r.match(t)?r.match(t).map(Number):[0],strings:k.str(n)||e?r.split(t):[]}}function Xi(n){var e=n?Yn(k.arr(n)?n.map(io):io(n)):[];return Xn(e,function(t,r,i){return i.indexOf(t)===r})}function Xl(n){var e=Xi(n);return e.map(function(t,r){return{target:t,id:r,total:e.length,transforms:{list:Wl(t)}}})}function Rv(n,e){var t=Gi(e);if(/^spring/.test(t.easing)&&(t.duration=Dl(t.easing)),k.arr(n)){var r=n.length,i=r===2&&!k.obj(n[0]);i?n={value:n}:k.fnc(e.duration)||(t.duration=e.duration/r)}var s=k.arr(n)?n:[n];return s.map(function(o,a){var l=k.obj(o)&&!k.pth(o)?o:{value:o};return k.und(l.delay)&&(l.delay=a?0:e.delay),k.und(l.endDelay)&&(l.endDelay=a===s.length-1?e.endDelay:0),l}).map(function(o){return qn(o,t)})}function Uv(n){for(var e=Xn(Yn(n.map(function(s){return Object.keys(s)})),function(s){return k.key(s)}).reduce(function(s,o){return s.indexOf(o)<0&&s.push(o),s},[]),t={},r=function(s){var o=e[s];t[o]=n.map(function(a){var l={};for(var c in a)k.key(c)?c==o&&(l.value=a[c]):l[c]=a[c];return l})},i=0;i<e.length;i++)r(i);return t}function Bv(n,e){var t=[],r=e.keyframes;r&&(e=qn(Uv(r),e));for(var i in e)k.key(i)&&t.push({name:i,tweens:Rv(e[i],n)});return t}function Dv(n,e){var t={};for(var r in n){var i=gi(n[r],e);k.arr(i)&&(i=i.map(function(s){return gi(s,e)}),i.length===1&&(i=i[0])),t[r]=i}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}function Lv(n,e){var t;return n.tweens.map(function(r){var i=Dv(r,e),s=i.value,o=k.arr(s)?s[1]:s,a=Be(o),l=Vi(e.target,n.name,a,e),c=t?t.to.original:l,u=k.arr(s)?s[0]:c,h=Be(u)||Be(l),f=a||h;return k.und(o)&&(o=c),i.from=so(u,f),i.to=so(Hi(o,u),f),i.start=t?t.end:0,i.end=i.start+i.delay+i.duration+i.endDelay,i.easing=Li(i.easing,i.duration),i.isPath=k.pth(s),i.isPathTargetInsideSVG=i.isPath&&k.svg(e.target),i.isColor=k.col(i.from.original),i.isColor&&(i.round=1),t=i,i})}var Yl={css:function(n,e,t){return n.style[e]=t},attribute:function(n,e,t){return n.setAttribute(e,t)},object:function(n,e,t){return n[e]=t},transform:function(n,e,t,r,i){if(r.list.set(e,t),e===r.last||i){var s="";r.list.forEach(function(o,a){s+=a+"("+o+") "}),n.style.transform=s}}};function ql(n,e){var t=Xl(n);t.forEach(function(r){for(var i in e){var s=gi(e[i],r),o=r.target,a=Be(s),l=Vi(o,i,a,r),c=a||Be(l),u=Hi($l(s,c),l),h=$i(o,i);Yl[h](o,i,u,r.transforms,!0)}})}function Nv(n,e){var t=$i(n.target,e.name);if(t){var r=Lv(e,n),i=r[r.length-1];return{type:t,property:e.name,animatable:n,tweens:r,duration:i.end,delay:r[0].delay,endDelay:i.endDelay}}}function Gv(n,e){return Xn(Yn(n.map(function(t){return e.map(function(r){return Nv(t,r)})})),function(t){return!k.und(t)})}function Kl(n,e){var t=n.length,r=function(s){return s.timelineOffset?s.timelineOffset:0},i={};return i.duration=t?Math.max.apply(Math,n.map(function(s){return r(s)+s.duration})):e.duration,i.delay=t?Math.min.apply(Math,n.map(function(s){return r(s)+s.delay})):e.delay,i.endDelay=t?i.duration-Math.max.apply(Math,n.map(function(s){return r(s)+s.duration-s.endDelay})):e.endDelay,i}var oo=0;function Wv(n){var e=mi(Ul,n),t=mi(Di,n),r=Bv(t,n),i=Xl(n.targets),s=Gv(i,r),o=Kl(s,t),a=oo;return oo++,qn(e,{id:a,children:[],animatables:i,animations:s,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}var Ce=[],Zl=function(){var n;function e(){!n&&(!ao()||!ee.suspendWhenDocumentHidden)&&Ce.length>0&&(n=requestAnimationFrame(t))}function t(i){for(var s=Ce.length,o=0;o<s;){var a=Ce[o];a.paused?(Ce.splice(o,1),s--):(a.tick(i),o++)}n=o>0?requestAnimationFrame(t):void 0}function r(){ee.suspendWhenDocumentHidden&&(ao()?n=cancelAnimationFrame(n):(Ce.forEach(function(i){return i._onDocumentVisibility()}),Zl()))}return typeof document<"u"&&document.addEventListener("visibilitychange",r),e}();function ao(){return!!document&&document.hidden}function ee(n){n===void 0&&(n={});var e=0,t=0,r=0,i,s=0,o=null;function a(x){var y=window.Promise&&new Promise(function(_){return o=_});return x.finished=y,y}var l=Wv(n);a(l);function c(){var x=l.direction;x!=="alternate"&&(l.direction=x!=="normal"?"normal":"reverse"),l.reversed=!l.reversed,i.forEach(function(y){return y.reversed=l.reversed})}function u(x){return l.reversed?l.duration-x:x}function h(){e=0,t=u(l.currentTime)*(1/ee.speed)}function f(x,y){y&&y.seek(x-y.timelineOffset)}function p(x){if(l.reversePlayback)for(var _=s;_--;)f(x,i[_]);else for(var y=0;y<s;y++)f(x,i[y])}function m(x){for(var y=0,_=l.animations,b=_.length;y<b;){var C=_[y],A=C.animatable,T=C.tweens,w=T.length-1,S=T[w];w&&(S=Xn(T,function(We){return x<We.end})[0]||S);for(var B=Ie(x-S.start-S.delay,0,S.duration)/S.duration,ae=isNaN(B)?1:S.easing(B),I=S.to.strings,F=S.round,N=[],q=S.to.numbers.length,M=void 0,L=0;L<q;L++){var P=void 0,R=S.to.numbers[L],Ge=S.from.numbers[L]||0;S.isPath?P=Ev(S.value,ae*R,S.isPathTargetInsideSVG):P=Ge+ae*(R-Ge),F&&(S.isColor&&L>2||(P=Math.round(P*F)/F)),N.push(P)}var Y=I.length;if(!Y)M=N[0];else{M=I[0];for(var he=0;he<Y;he++){I[he];var Le=I[he+1],ke=N[he];isNaN(ke)||(Le?M+=ke+Le:M+=ke+" ")}}Yl[C.type](A.target,C.property,M,A.transforms),C.currentValue=M,y++}}function g(x){l[x]&&!l.passThrough&&l[x](l)}function d(){l.remaining&&l.remaining!==!0&&l.remaining--}function v(x){var y=l.duration,_=l.delay,b=y-l.endDelay,C=u(x);l.progress=Ie(C/y*100,0,100),l.reversePlayback=C<l.currentTime,i&&p(C),!l.began&&l.currentTime>0&&(l.began=!0,g("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,g("loopBegin")),C<=_&&l.currentTime!==0&&m(0),(C>=b&&l.currentTime!==y||!y)&&m(y),C>_&&C<b?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,g("changeBegin")),g("change"),m(C)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,g("changeComplete")),l.currentTime=Ie(C,0,y),l.began&&g("update"),x>=y&&(t=0,d(),l.remaining?(e=r,g("loopComplete"),l.loopBegan=!1,l.direction==="alternate"&&c()):(l.paused=!0,l.completed||(l.completed=!0,g("loopComplete"),g("complete"),!l.passThrough&&"Promise"in window&&(o(),a(l)))))}return l.reset=function(){var x=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed=x==="reverse",l.remaining=l.loop,i=l.children,s=i.length;for(var y=s;y--;)l.children[y].reset();(l.reversed&&l.loop!==!0||x==="alternate"&&l.loop===1)&&l.remaining++,m(l.reversed?l.duration:0)},l._onDocumentVisibility=h,l.set=function(x,y){return ql(x,y),l},l.tick=function(x){r=x,e||(e=r),v((r+(t-e))*ee.speed)},l.seek=function(x){v(u(x))},l.pause=function(){l.paused=!0,h()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,Ce.push(l),h(),Zl())},l.reverse=function(){c(),l.completed=!l.reversed,h()},l.restart=function(){l.reset(),l.play()},l.remove=function(x){var y=Xi(x);Ql(y,l)},l.reset(),l.autoplay&&l.play(),l}function lo(n,e){for(var t=e.length;t--;)Ni(n,e[t].animatable.target)&&e.splice(t,1)}function Ql(n,e){var t=e.animations,r=e.children;lo(n,t);for(var i=r.length;i--;){var s=r[i],o=s.animations;lo(n,o),!o.length&&!s.children.length&&r.splice(i,1)}!t.length&&!r.length&&e.pause()}function $v(n){for(var e=Xi(n),t=Ce.length;t--;){var r=Ce[t];Ql(e,r)}}function Vv(n,e){e===void 0&&(e={});var t=e.direction||"normal",r=e.easing?Li(e.easing):null,i=e.grid,s=e.axis,o=e.from||0,a=o==="first",l=o==="center",c=o==="last",u=k.arr(n),h=parseFloat(u?n[0]:n),f=u?parseFloat(n[1]):0,p=Be(u?n[1]:n)||0,m=e.start||0+(u?h:0),g=[],d=0;return function(v,x,y){if(a&&(o=0),l&&(o=(y-1)/2),c&&(o=y-1),!g.length){for(var _=0;_<y;_++){if(!i)g.push(Math.abs(o-_));else{var b=l?(i[0]-1)/2:o%i[0],C=l?(i[1]-1)/2:Math.floor(o/i[0]),A=_%i[0],T=Math.floor(_/i[0]),w=b-A,S=C-T,B=Math.sqrt(w*w+S*S);s==="x"&&(B=-w),s==="y"&&(B=-S),g.push(B)}d=Math.max.apply(Math,g)}r&&(g=g.map(function(I){return r(I/d)*d})),t==="reverse"&&(g=g.map(function(I){return s?I<0?I*-1:-I:Math.abs(d-I)}))}var ae=u?(f-h)/d:h;return m+ae*(Math.round(g[x]*100)/100)+p}}function Hv(n){n===void 0&&(n={});var e=ee(n);return e.duration=0,e.add=function(t,r){var i=Ce.indexOf(e),s=e.children;i>-1&&Ce.splice(i,1);function o(f){f.passThrough=!0}for(var a=0;a<s.length;a++)o(s[a]);var l=qn(t,mi(Di,n));l.targets=l.targets||n.targets;var c=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=k.und(r)?c:Hi(r,c),o(e),e.seek(l.timelineOffset);var u=ee(l);o(u),s.push(u);var h=Kl(s,n);return e.delay=h.delay,e.endDelay=h.endDelay,e.duration=h.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}ee.version="3.2.1";ee.speed=1;ee.suspendWhenDocumentHidden=!0;ee.running=Ce;ee.remove=$v;ee.get=Vi;ee.set=ql;ee.convertPx=Wi;ee.path=kv;ee.setDashoffset=zv;ee.stagger=Vv;ee.timeline=Hv;ee.easing=Li;ee.penner=Ll;ee.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n};function jv(n){ee({targets:n,alpha:[0,1],duration:300,easing:"linear",autoplay:!0,direction:"alternate"})}class Xv extends te{constructor(e,t,r,i=100,s=100){super(),this.row=e,this.col=t,this.contentObj=r,this.tileWidth=i,this.tileHeight=s,this.puzzle=new to(e,t,r),this.eventMode="static",this.tileMatrix=[],this.selectedTiles=[],this.initEvents()}reloadPuzzle(){this.puzzle=new to(this.row,this.col,this.contentObj),this.tileMatrix=[],this.selectedTiles=[],this.initBoard(),this.clearSelectedTiles()}initBoard(){for(let e=0;e<this.row;e++){this.tileMatrix.push([]);for(let t=0;t<this.col;t++){const r=new pv(this.tileWidth,this.tileHeight),i=new this.contentObj.contentConstructor(this.puzzle.getEleAt(t,e).value,this.puzzle.getEleAt(t,e).key,this.tileWidth-this.contentObj.contentPadding*2,this.tileHeight-this.contentObj.contentPadding*2);r.setContentCenter(i,i.getValue()),this.addChild(r),this.tileMatrix[e].push(r),r.position.set(t*this.tileWidth,e*this.tileHeight),r.setCoordinate(t,e),this.setTileEvent(r)}}}initEvents(){this.on("tileClick",e=>{if(this.selectedTiles.length==0)this.pushSelectedTiles(e);else if(this.selectedTiles.length==1)if(this.selectedTiles[0].isContentEquals(e)&&this.selectedTiles[0]!=e){this.pushSelectedTiles(e),console.log("选择相同内容元素",this.selectedTiles);let t=this.checkSelected(this.selectedTiles[0].getCoordinate(),this.selectedTiles[1].getCoordinate());t?(console.log("可达"),t.unshift(this.selectedTiles[0].getCoordinate()),t.push(this.selectedTiles[1].getCoordinate()),this.drawPath(t),this.eliminateTiles(this.selectedTiles),this.onGameStateChange(),this.clearSelectedTiles()):(console.log("不可达"),this.changeSelectedTiles(e))}else this.selectedTiles[0]==e?(console.log("取消选择"),this.clearSelectedTiles()):(this.changeSelectedTiles(e),console.log("选择不同元素"))})}setEvent(e,t){this.on(e,t)}drawPath(e){console.log("绘制路径",e);let t=[];e.forEach(i=>{let s={x:i.x*this.tileWidth+this.tileWidth/2,y:i.y*this.tileHeight+this.tileHeight/2};t.push(s)});let r=vv(t,8514796);this.addChild(r),jv(r)}onGameStateChange(){let e=this.puzzle.getLeftCount();console.log("leftCount",e),e==0&&this.emit("gameover")}eliminateTiles(e){e.forEach(t=>{this.puzzle.setNumMatrixAt(t.getCoordinate().x,t.getCoordinate().y,0),this.puzzle.clearEleMatrixAt(t.getCoordinate().x,t.getCoordinate().y),this.tileMatrix[t.getCoordinate().y][t.getCoordinate().x]=null,this.removeChild(t),t.emit("deselected")}),this.emit("eliminate",e)}setTileEliminateEvent(e){this.on("eliminate",e)}getTileAt(e,t){return this.tileMatrix[t][e]}getTileContentAt(e,t){return this.tileMatrix[t][e].getContentValue()}clearSelectedTiles(){this.selectedTiles.forEach(e=>{e.emit("deselected")}),this.selectedTiles=[]}pushSelectedTiles(e){e.emit("selected"),this.selectedTiles.push(e)}changeSelectedTiles(e){this.clearSelectedTiles(),this.pushSelectedTiles(e)}dequeueSelectedTiles(){this.selectedTiles.shift().emit("deselected")}emitTilesSelected(e){e.forEach(t=>{t.emit("selected")})}emitTilesDeselected(e){e.forEach(t=>{t.emit("deselected")})}setTileEvent(e){e.onmousedown=t=>{t.stopPropagation(),this.emit("tileClick",e)}}setGameOverEvent(e){this.on("gameover",e)}getPuzzle(){return this.puzzle}checkSelected(e,t){return this.puzzle.checkPath(e,t)}}class Yv extends te{constructor(e,t,r,i){super(),this.maxTime=e,this.time=e,this.timerWidth=t,this.timerHeight=r,this.timerColor=i,this.isTimeUp=!1,this.initTimer(),this.initEvents()}setIsTimeUp(e){this.isTimeUp=e}setTime(e){this.time=e,this.time>=this.maxTime&&(this.time=this.maxTime,this.setIsTimeUp(!1)),this.time<=0&&(this.emit("timeUp"),this.timer.width=0,this.time=0),this.timer.width=this.time/this.maxTime*this.timerWidth}setTimeUpEvent(e){this.on("timeUp",()=>{this.isTimeUp||e(),this.setIsTimeUp(!0)})}addTimeBy(e){this.setTime(this.time+e)}minusTimeBy(e){this.setTime(this.time-e)}reset(){this.setTime(this.maxTime)}startTimer(){window.ticker.add(e=>{this.setTime(this.time-e.deltaMS)},this)}getTime(){return this.time}initTimer(){const e=new it;e.rect(0,0,this.timerWidth,this.timerHeight),e.fill({color:this.timerColor,alpha:1}),this.addChild(e),this.timer=e}initEvents(){this.on("update",e=>{this.setTime(e)})}}class uo extends te{constructor(e,t,r){super(),this.layoutWidth=e,this.layoutHeight=t,this.text=r,this.visible=!1,this.eventMode="static",this.initEvents(),this.initLayout()}show(){this.visible=!0}hide(){this.visible=!1}initLayout(){const e=new it;e.roundRect(0,0,this.layoutWidth,this.layoutHeight,10),e.fill({color:10778547,alpha:.5}),this.addChild(e);const t=new pd({text:this.text,style:{fontSize:24,fill:16777215}});t.position.set(this.layoutWidth/2-t.width/2,this.layoutHeight/2-t.height/2),this.addChild(t)}setClickEvent(e){this.on("click",()=>{e()})}initEvents(){this.on("click",()=>{this.hide()})}}const qv={contents:{tile1:"./tiles/冰伊布.png",tile2:"./tiles/代欧奇希斯.png",tile3:"./tiles/创世神.png",tile4:"./tiles/叶伊布.png",tile5:"./tiles/固拉多.png",tile6:"./tiles/基拉祈.png",tile7:"./tiles/大王燕.png",tile8:"./tiles/海皇牙.png",tile9:"./tiles/火焰鸡.png",tile10:"./tiles/裂空座.png"},contentConstructor:gv,contentPadding:10},ut=new ia;ut.init({width:window.innerWidth,height:window.innerHeight,antialias:!0,resolution:window.devicePixelRatio||2,backgroundColor:6591981,resizeTo:window}).then(()=>{window.ticker=Bt.shared;const n=new Xv(10,10,qv,80,80);n.initBoard(),ut.stage.addChild(n),n.pivot.set(n.width/2,n.height/2),console.log(n.width,n.height),n.position.set(window.innerWidth/2,window.innerHeight/2);const e=new Yv(2e4,300,40,7607682);e.startTimer(),e.position.set(200,0),ut.stage.addChild(e);const t=new uo(600,400,"time up");t.pivot.set(t.width/2,t.height/2),t.position.set(window.innerWidth/2,window.innerHeight/2),ut.stage.addChild(t);const r=new uo(600,400,"game over");r.pivot.set(t.width/2,t.height/2),r.position.set(window.innerWidth/2,window.innerHeight/2),ut.stage.addChild(r),e.setTimeUpEvent(()=>{console.log("time up"),t.show()}),t.setClickEvent(()=>{e.reset()}),n.setGameOverEvent(()=>{console.log("game over"),r.show()}),r.setClickEvent(()=>{e.reset(),n.reloadPuzzle()}),n.setTileEliminateEvent(i=>{e.addTimeBy(2e3)}),document.body.appendChild(ut.canvas)});export{Wc as $,ta as A,fe as B,te as C,J as D,E,W as F,D as G,cs as H,bt as I,lc as J,yc as K,re as L,j as M,ne as N,Bc as O,le as P,ds as Q,On as R,vc as S,Bt as T,jo as U,Gu as V,or as W,$ as X,Co as Y,O as Z,X as _,Gr as a,Jc as a0,_t as a1,Ct as a2,Zh as a3,ri as a4,da as a5,Cs as a6,Ls as a7,rf as a8,it as a9,Z as aa,gu as ab,ni as ac,Bs as ad,Fn as ae,ma as af,we as b,G as c,_i as d,ce as e,oh as f,la as g,Ss as h,uh as i,qt as j,_n as k,yi as l,Qo as m,ko as n,Ae as o,Us as p,U as q,Mu as r,mu as s,ch as t,nh as u,be as v,ie as w,bo as x,xe as y,Oe as z};

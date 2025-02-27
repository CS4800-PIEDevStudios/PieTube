import{r as se,j as p}from"./index-sn3DR0uk.js";import{u as tt,c as nt,B as rt}from"./Button-CTe1Atv_.js";function Pe(e,t){return function(){return e.apply(t,arguments)}}const{toString:st}=Object.prototype,{getPrototypeOf:fe}=Object,K=(e=>t=>{const n=st.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),C=e=>(e=e.toLowerCase(),t=>K(t)===e),G=e=>t=>typeof t===e,{isArray:U}=Array,I=G("undefined");function ot(e){return e!==null&&!I(e)&&e.constructor!==null&&!I(e.constructor)&&j(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const De=C("ArrayBuffer");function it(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&De(e.buffer),t}const at=G("string"),j=G("function"),Fe=G("number"),X=e=>e!==null&&typeof e=="object",ct=e=>e===!0||e===!1,z=e=>{if(K(e)!=="object")return!1;const t=fe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},lt=C("Date"),ut=C("File"),ft=C("Blob"),dt=C("FileList"),ht=e=>X(e)&&j(e.pipe),pt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||j(e.append)&&((t=K(e))==="formdata"||t==="object"&&j(e.toString)&&e.toString()==="[object FormData]"))},mt=C("URLSearchParams"),[yt,bt,wt,gt]=["ReadableStream","Request","Response","Headers"].map(C),Et=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function H(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),U(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function _e(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const _=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Le=e=>!I(e)&&e!==_;function oe(){const{caseless:e}=Le(this)&&this||{},t={},n=(r,s)=>{const o=e&&_e(t,s)||s;z(t[o])&&z(r)?t[o]=oe(t[o],r):z(r)?t[o]=oe({},r):U(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&H(arguments[r],n);return t}const Rt=(e,t,n,{allOwnKeys:r}={})=>(H(t,(s,o)=>{n&&j(s)?e[o]=Pe(s,n):e[o]=s},{allOwnKeys:r}),e),St=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),xt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Tt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&fe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ot=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},At=e=>{if(!e)return null;if(U(e))return e;let t=e.length;if(!Fe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},jt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&fe(Uint8Array)),Ct=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Nt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Pt=C("HTMLFormElement"),Dt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),me=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ft=C("RegExp"),Be=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};H(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},_t=e=>{Be(e,(t,n)=>{if(j(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(j(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Lt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return U(e)?r(e):r(String(e).split(t)),n},Bt=()=>{},Ut=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,ee="abcdefghijklmnopqrstuvwxyz",ye="0123456789",Ue={DIGIT:ye,ALPHA:ee,ALPHA_DIGIT:ee+ee.toUpperCase()+ye},kt=(e=16,t=Ue.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function qt(e){return!!(e&&j(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const It=e=>{const t=new Array(10),n=(r,s)=>{if(X(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=U(r)?[]:{};return H(r,(i,c)=>{const d=n(i,s+1);!I(d)&&(o[c]=d)}),t[s]=void 0,o}}return r};return n(e,0)},Ht=C("AsyncFunction"),Mt=e=>e&&(X(e)||j(e))&&j(e.then)&&j(e.catch),ke=((e,t)=>e?setImmediate:t?((n,r)=>(_.addEventListener("message",({source:s,data:o})=>{s===_&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),_.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",j(_.postMessage)),$t=typeof queueMicrotask<"u"?queueMicrotask.bind(_):typeof process<"u"&&process.nextTick||ke,a={isArray:U,isArrayBuffer:De,isBuffer:ot,isFormData:pt,isArrayBufferView:it,isString:at,isNumber:Fe,isBoolean:ct,isObject:X,isPlainObject:z,isReadableStream:yt,isRequest:bt,isResponse:wt,isHeaders:gt,isUndefined:I,isDate:lt,isFile:ut,isBlob:ft,isRegExp:Ft,isFunction:j,isStream:ht,isURLSearchParams:mt,isTypedArray:jt,isFileList:dt,forEach:H,merge:oe,extend:Rt,trim:Et,stripBOM:St,inherits:xt,toFlatObject:Tt,kindOf:K,kindOfTest:C,endsWith:Ot,toArray:At,forEachEntry:Ct,matchAll:Nt,isHTMLForm:Pt,hasOwnProperty:me,hasOwnProp:me,reduceDescriptors:Be,freezeMethods:_t,toObjectSet:Lt,toCamelCase:Dt,noop:Bt,toFiniteNumber:Ut,findKey:_e,global:_,isContextDefined:Le,ALPHABET:Ue,generateString:kt,isSpecCompliantForm:qt,toJSONObject:It,isAsyncFn:Ht,isThenable:Mt,setImmediate:ke,asap:$t};function y(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}});const qe=y.prototype,Ie={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ie[e]={value:e}});Object.defineProperties(y,Ie);Object.defineProperty(qe,"isAxiosError",{value:!0});y.from=(e,t,n,r,s,o)=>{const i=Object.create(qe);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},c=>c!=="isAxiosError"),y.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const zt=null;function ie(e){return a.isPlainObject(e)||a.isArray(e)}function He(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function be(e,t,n){return e?e.concat(t).map(function(s,o){return s=He(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Jt(e){return a.isArray(e)&&!e.some(ie)}const vt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Q(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,m){return!a.isUndefined(m[b])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(h){if(h===null)return"";if(a.isDate(h))return h.toISOString();if(!d&&a.isBlob(h))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(h)||a.isTypedArray(h)?d&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function u(h,b,m){let R=h;if(h&&!m&&typeof h=="object"){if(a.endsWith(b,"{}"))b=r?b:b.slice(0,-2),h=JSON.stringify(h);else if(a.isArray(h)&&Jt(h)||(a.isFileList(h)||a.endsWith(b,"[]"))&&(R=a.toArray(h)))return b=He(b),R.forEach(function(x,P){!(a.isUndefined(x)||x===null)&&t.append(i===!0?be([b],P,o):i===null?b:b+"[]",l(x))}),!1}return ie(h)?!0:(t.append(be(m,b,o),l(h)),!1)}const f=[],w=Object.assign(vt,{defaultVisitor:u,convertValue:l,isVisitable:ie});function g(h,b){if(!a.isUndefined(h)){if(f.indexOf(h)!==-1)throw Error("Circular reference detected in "+b.join("."));f.push(h),a.forEach(h,function(R,S){(!(a.isUndefined(R)||R===null)&&s.call(t,R,a.isString(S)?S.trim():S,b,w))===!0&&g(R,b?b.concat(S):[S])}),f.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return g(e),t}function we(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function de(e,t){this._pairs=[],e&&Q(e,this,t)}const Me=de.prototype;Me.append=function(t,n){this._pairs.push([t,n])};Me.toString=function(t){const n=t?function(r){return t.call(this,r,we)}:we;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Vt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function $e(e,t,n){if(!t)return e;const r=n&&n.encode||Vt;a.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new de(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class ge{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ze={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Wt=typeof URLSearchParams<"u"?URLSearchParams:de,Kt=typeof FormData<"u"?FormData:null,Gt=typeof Blob<"u"?Blob:null,Xt={isBrowser:!0,classes:{URLSearchParams:Wt,FormData:Kt,Blob:Gt},protocols:["http","https","file","blob","url","data"]},he=typeof window<"u"&&typeof document<"u",ae=typeof navigator=="object"&&navigator||void 0,Qt=he&&(!ae||["ReactNative","NativeScript","NS"].indexOf(ae.product)<0),Zt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Yt=he&&window.location.href||"http://localhost",en=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:he,hasStandardBrowserEnv:Qt,hasStandardBrowserWebWorkerEnv:Zt,navigator:ae,origin:Yt},Symbol.toStringTag,{value:"Module"})),T={...en,...Xt};function tn(e,t){return Q(e,new T.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return T.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function nn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function rn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Je(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=rn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(nn(r),s,n,0)}),n}return null}function sn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const M={transitional:ze,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Je(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return tn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Q(c?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),sn(t)):t}],transformResponse:[function(t){const n=this.transitional||M.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?y.from(c,y.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:T.classes.FormData,Blob:T.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{M.headers[e]={}});const on=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),an=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&on[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ee=Symbol("internals");function q(e){return e&&String(e).trim().toLowerCase()}function J(e){return e===!1||e==null?e:a.isArray(e)?e.map(J):String(e)}function cn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const ln=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function te(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function un(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function fn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}let A=class{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,d,l){const u=q(d);if(!u)throw new Error("header name must be a non-empty string");const f=a.findKey(s,u);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||d]=J(c))}const i=(c,d)=>a.forEach(c,(l,u)=>o(l,u,d));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!ln(t))i(an(t),n);else if(a.isHeaders(t))for(const[c,d]of t.entries())o(d,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=q(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return cn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=q(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||te(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=q(i),i){const c=a.findKey(r,i);c&&(!n||te(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||te(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=J(s),delete n[o];return}const c=t?un(o):String(o).trim();c!==o&&delete n[o],n[c]=J(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Ee]=this[Ee]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=q(i);r[c]||(fn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}};A.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(A.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(A);function ne(e,t){const n=this||M,r=t||n,s=A.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function ve(e){return!!(e&&e.__CANCEL__)}function k(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(k,y,{__CANCEL__:!0});function Ve(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function dn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function hn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const l=Date.now(),u=r[o];i||(i=l),n[s]=d,r[s]=l;let f=o,w=0;for(;f!==s;)w+=n[f++],f=f%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const g=u&&l-u;return g?Math.round(w*1e3/g):void 0}}function pn(e,t){let n=0,r=1e3/t,s,o;const i=(l,u=Date.now())=>{n=u,s=null,o&&(clearTimeout(o),o=null),e.apply(null,l)};return[(...l)=>{const u=Date.now(),f=u-n;f>=r?i(l,u):(s=l,o||(o=setTimeout(()=>{o=null,i(s)},r-f)))},()=>s&&i(s)]}const V=(e,t,n=3)=>{let r=0;const s=hn(50,250);return pn(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,d=i-r,l=s(d),u=i<=c;r=i;const f={loaded:i,total:c,progress:c?i/c:void 0,bytes:d,rate:l||void 0,estimated:l&&c&&u?(c-i)/l:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(f)},n)},Re=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Se=e=>(...t)=>a.asap(()=>e(...t)),mn=T.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,T.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(T.origin),T.navigator&&/(msie|trident)/i.test(T.navigator.userAgent)):()=>!0,yn=T.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function bn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function wn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function We(e,t){return e&&!bn(t)?wn(e,t):t}const xe=e=>e instanceof A?{...e}:e;function B(e,t){t=t||{};const n={};function r(l,u,f,w){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:w},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(l,u,f,w){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,f,w)}else return r(l,u,f,w)}function o(l,u){if(!a.isUndefined(u))return r(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,f){if(f in t)return r(l,u);if(f in e)return r(void 0,l)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u,f)=>s(xe(l),xe(u),f,!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const f=d[u]||s,w=f(e[u],t[u],u);a.isUndefined(w)&&f!==c||(n[u]=w)}),n}const Ke=e=>{const t=B({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=A.from(i),t.url=$e(We(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let d;if(a.isFormData(n)){if(T.hasStandardBrowserEnv||T.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((d=i.getContentType())!==!1){const[l,...u]=d?d.split(";").map(f=>f.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...u].join("; "))}}if(T.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&mn(t.url))){const l=s&&o&&yn.read(o);l&&i.set(s,l)}return t},gn=typeof XMLHttpRequest<"u",En=gn&&function(e){return new Promise(function(n,r){const s=Ke(e);let o=s.data;const i=A.from(s.headers).normalize();let{responseType:c,onUploadProgress:d,onDownloadProgress:l}=s,u,f,w,g,h;function b(){g&&g(),h&&h(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(s.method.toUpperCase(),s.url,!0),m.timeout=s.timeout;function R(){if(!m)return;const x=A.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),O={data:!c||c==="text"||c==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:x,config:e,request:m};Ve(function(F){n(F),b()},function(F){r(F),b()},O),m=null}"onloadend"in m?m.onloadend=R:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(R)},m.onabort=function(){m&&(r(new y("Request aborted",y.ECONNABORTED,e,m)),m=null)},m.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let P=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const O=s.transitional||ze;s.timeoutErrorMessage&&(P=s.timeoutErrorMessage),r(new y(P,O.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,m)),m=null},o===void 0&&i.setContentType(null),"setRequestHeader"in m&&a.forEach(i.toJSON(),function(P,O){m.setRequestHeader(O,P)}),a.isUndefined(s.withCredentials)||(m.withCredentials=!!s.withCredentials),c&&c!=="json"&&(m.responseType=s.responseType),l&&([w,h]=V(l,!0),m.addEventListener("progress",w)),d&&m.upload&&([f,g]=V(d),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",g)),(s.cancelToken||s.signal)&&(u=x=>{m&&(r(!x||x.type?new k(null,e,m):x),m.abort(),m=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const S=dn(s.url);if(S&&T.protocols.indexOf(S)===-1){r(new y("Unsupported protocol "+S+":",y.ERR_BAD_REQUEST,e));return}m.send(o||null)})},Rn=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const o=function(l){if(!s){s=!0,c();const u=l instanceof Error?l:this.reason;r.abort(u instanceof y?u:new k(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{i=null,o(new y(`timeout ${t} of ms exceeded`,y.ETIMEDOUT))},t);const c=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(o):l.removeEventListener("abort",o)}),e=null)};e.forEach(l=>l.addEventListener("abort",o));const{signal:d}=r;return d.unsubscribe=()=>a.asap(c),d}},Sn=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},xn=async function*(e,t){for await(const n of Tn(e))yield*Sn(n,t)},Tn=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Te=(e,t,n,r)=>{const s=xn(e,t);let o=0,i,c=d=>{i||(i=!0,r&&r(d))};return new ReadableStream({async pull(d){try{const{done:l,value:u}=await s.next();if(l){c(),d.close();return}let f=u.byteLength;if(n){let w=o+=f;n(w)}d.enqueue(new Uint8Array(u))}catch(l){throw c(l),l}},cancel(d){return c(d),s.return()}},{highWaterMark:2})},Z=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ge=Z&&typeof ReadableStream=="function",On=Z&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Xe=(e,...t)=>{try{return!!e(...t)}catch{return!1}},An=Ge&&Xe(()=>{let e=!1;const t=new Request(T.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Oe=64*1024,ce=Ge&&Xe(()=>a.isReadableStream(new Response("").body)),W={stream:ce&&(e=>e.body)};Z&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!W[t]&&(W[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new y(`Response type '${t}' is not supported`,y.ERR_NOT_SUPPORT,r)})})})(new Response);const jn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(T.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await On(e)).byteLength},Cn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??jn(t)},Nn=Z&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:d,responseType:l,headers:u,withCredentials:f="same-origin",fetchOptions:w}=Ke(e);l=l?(l+"").toLowerCase():"text";let g=Rn([s,o&&o.toAbortSignal()],i),h;const b=g&&g.unsubscribe&&(()=>{g.unsubscribe()});let m;try{if(d&&An&&n!=="get"&&n!=="head"&&(m=await Cn(u,r))!==0){let O=new Request(t,{method:"POST",body:r,duplex:"half"}),D;if(a.isFormData(r)&&(D=O.headers.get("content-type"))&&u.setContentType(D),O.body){const[F,$]=Re(m,V(Se(d)));r=Te(O.body,Oe,F,$)}}a.isString(f)||(f=f?"include":"omit");const R="credentials"in Request.prototype;h=new Request(t,{...w,signal:g,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:R?f:void 0});let S=await fetch(h);const x=ce&&(l==="stream"||l==="response");if(ce&&(c||x&&b)){const O={};["status","statusText","headers"].forEach(pe=>{O[pe]=S[pe]});const D=a.toFiniteNumber(S.headers.get("content-length")),[F,$]=c&&Re(D,V(Se(c),!0))||[];S=new Response(Te(S.body,Oe,F,()=>{$&&$(),b&&b()}),O)}l=l||"text";let P=await W[a.findKey(W,l)||"text"](S,e);return!x&&b&&b(),await new Promise((O,D)=>{Ve(O,D,{data:P,headers:A.from(S.headers),status:S.status,statusText:S.statusText,config:e,request:h})})}catch(R){throw b&&b(),R&&R.name==="TypeError"&&/fetch/i.test(R.message)?Object.assign(new y("Network Error",y.ERR_NETWORK,e,h),{cause:R.cause||R}):y.from(R,R&&R.code,e,h)}}),le={http:zt,xhr:En,fetch:Nn};a.forEach(le,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ae=e=>`- ${e}`,Pn=e=>a.isFunction(e)||e===null||e===!1,Qe={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Pn(n)&&(r=le[(i=String(n)).toLowerCase()],r===void 0))throw new y(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Ae).join(`
`):" "+Ae(o[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:le};function re(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new k(null,e)}function je(e){return re(e),e.headers=A.from(e.headers),e.data=ne.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Qe.getAdapter(e.adapter||M.adapter)(e).then(function(r){return re(e),r.data=ne.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return ve(r)||(re(e),r&&r.response&&(r.response.data=ne.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const Ze="1.7.9",Y={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Y[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ce={};Y.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Ze+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new y(s(i," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!Ce[i]&&(Ce[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};Y.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function Dn(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],d=c===void 0||i(c,o,e);if(d!==!0)throw new y("option "+o+" must be "+d,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+o,y.ERR_BAD_OPTION)}}const v={assertOptions:Dn,validators:Y},N=v.validators;let L=class{constructor(t){this.defaults=t,this.interceptors={request:new ge,response:new ge}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=B(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&v.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:v.assertOptions(s,{encode:N.function,serialize:N.function},!0)),v.assertOptions(n,{baseUrl:N.spelling("baseURL"),withXsrfToken:N.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],h=>{delete o[h]}),n.headers=A.concat(i,o);const c=[];let d=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(d=d&&b.synchronous,c.unshift(b.fulfilled,b.rejected))});const l=[];this.interceptors.response.forEach(function(b){l.push(b.fulfilled,b.rejected)});let u,f=0,w;if(!d){const h=[je.bind(this),void 0];for(h.unshift.apply(h,c),h.push.apply(h,l),w=h.length,u=Promise.resolve(n);f<w;)u=u.then(h[f++],h[f++]);return u}w=c.length;let g=n;for(f=0;f<w;){const h=c[f++],b=c[f++];try{g=h(g)}catch(m){b.call(this,m);break}}try{u=je.call(this,g)}catch(h){return Promise.reject(h)}for(f=0,w=l.length;f<w;)u=u.then(l[f++],l[f++]);return u}getUri(t){t=B(this.defaults,t);const n=We(t.baseURL,t.url);return $e(n,t.params,t.paramsSerializer)}};a.forEach(["delete","get","head","options"],function(t){L.prototype[t]=function(n,r){return this.request(B(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(B(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}L.prototype[t]=n(),L.prototype[t+"Form"]=n(!0)});let Fn=class Ye{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new k(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Ye(function(s){t=s}),cancel:t}}};function _n(e){return function(n){return e.apply(null,n)}}function Ln(e){return a.isObject(e)&&e.isAxiosError===!0}const ue={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ue).forEach(([e,t])=>{ue[t]=e});function et(e){const t=new L(e),n=Pe(L.prototype.request,t);return a.extend(n,L.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return et(B(e,s))},n}const E=et(M);E.Axios=L;E.CanceledError=k;E.CancelToken=Fn;E.isCancel=ve;E.VERSION=Ze;E.toFormData=Q;E.AxiosError=y;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=_n;E.isAxiosError=Ln;E.mergeConfig=B;E.AxiosHeaders=A;E.formToJSON=e=>Je(a.isHTMLForm(e)?new FormData(e):e);E.getAdapter=Qe.getAdapter;E.HttpStatusCode=ue;E.default=E;const{Axios:In,AxiosError:Hn,CanceledError:Mn,isCancel:$n,CancelToken:zn,VERSION:Jn,all:vn,Cancel:Vn,isAxiosError:Wn,spread:Kn,toFormData:Gn,AxiosHeaders:Xn,HttpStatusCode:Qn,formToJSON:Zn,getAdapter:Yn,mergeConfig:er}=E,Ne=se.forwardRef(({bsPrefix:e,className:t,striped:n,bordered:r,borderless:s,hover:o,size:i,variant:c,responsive:d,...l},u)=>{const f=tt(e,"table"),w=nt(t,f,c&&`${f}-${c}`,i&&`${f}-${i}`,n&&`${f}-${typeof n=="string"?`striped-${n}`:"striped"}`,r&&`${f}-bordered`,s&&`${f}-borderless`,o&&`${f}-hover`),g=p.jsx("table",{...l,className:w,ref:u});if(d){let h=`${f}-responsive`;return typeof d=="string"&&(h=`${h}-${d}`),p.jsx("div",{className:h,children:g})}return g}),tr=()=>{const[e,t]=se.useState([]),[n,r]=se.useState([]),s=()=>{console.log("fetching..."),E.get("https://23.20.205.143/api/get-movie-data").then(o=>{console.log(o.data),t(o.data)}).catch(o=>{console.error("There was an error!",o)}),E.get("https://23.20.205.143/api/get-user-data").then(o=>{console.log(o.data),r(o.data)}).catch(o=>{console.error("There was an error!",o)})};return p.jsxs("div",{children:[p.jsx("h1",{children:"Home Page"}),p.jsx("p",{children:"Welcome to the Home Page!"}),p.jsx(rt,{variant:"primary",onClick:s,children:"Fetch Data"}),p.jsx("h2",{children:"Movie Table"}),p.jsxs(Ne,{striped:!0,bordered:!0,hover:!0,children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"MovieID"}),p.jsx("th",{children:"DirectorID"}),p.jsx("th",{children:"GenreID"}),p.jsx("th",{children:"ActorID"}),p.jsx("th",{children:"Title"}),p.jsx("th",{children:"Age Rating"}),p.jsx("th",{children:"Duration"}),p.jsx("th",{children:"Language"}),p.jsx("th",{children:"Rating"}),p.jsx("th",{children:"Release Date"}),p.jsx("th",{children:"Subtitles"}),p.jsx("th",{children:"Summary"})]})}),p.jsx("tbody",{children:e.map((o,i)=>p.jsxs("tr",{children:[p.jsx("td",{children:o.MovieID}),p.jsx("td",{children:o.DirectorID}),p.jsx("td",{children:o.GenreID}),p.jsx("td",{children:o.ActorID}),p.jsx("td",{children:o.Title}),p.jsx("td",{children:o.AgeRating}),p.jsx("td",{children:o.Duration}),p.jsx("td",{children:o.Language}),p.jsx("td",{children:o.Rating}),p.jsx("td",{children:o.ReleaseDate}),p.jsx("td",{children:o.SubtitleAvailability}),p.jsx("td",{children:o.Summary})]},i))})]}),p.jsx("h2",{children:"User Table"}),p.jsxs(Ne,{striped:!0,bordered:!0,hover:!0,children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"UserID"}),p.jsx("th",{children:"Username"}),p.jsx("th",{children:"Email"}),p.jsx("th",{children:"Password Hash"}),p.jsx("th",{children:"First Name"}),p.jsx("th",{children:"Last Name"}),p.jsx("th",{children:"DOB"})]})}),p.jsx("tbody",{children:n.map((o,i)=>p.jsxs("tr",{children:[p.jsx("td",{children:o.UserID}),p.jsx("td",{children:o.Username}),p.jsx("td",{children:o.Email}),p.jsx("td",{children:o.PasswordHash}),p.jsx("td",{children:o.FirstName}),p.jsx("td",{children:o.LastName}),p.jsx("td",{children:o.DateOfBirth})]},i))})]})]})};export{tr as default};

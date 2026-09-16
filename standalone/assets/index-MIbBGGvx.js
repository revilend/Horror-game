var lh=Object.defineProperty;var hh=(s,t,e)=>t in s?lh(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var L=(s,t,e)=>hh(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ma="170",uh=0,Na=1,dh=2,vl=1,xl=2,Dn=3,ni=0,je=1,yn=2,ti=0,qi=1,Ao=2,Oa=3,Fa=4,fh=5,gi=100,ph=101,mh=102,gh=103,_h=104,vh=200,xh=201,Mh=202,yh=203,Ro=204,Co=205,Sh=206,wh=207,Eh=208,bh=209,Th=210,Ah=211,Rh=212,Ch=213,Ph=214,Po=0,Lo=1,Io=2,ji=3,Do=4,Uo=5,No=6,Oo=7,Ml=0,Lh=1,Ih=2,ei=0,Dh=1,Uh=2,Nh=3,yl=4,Oh=5,Fh=6,Bh=7,Sl=300,Zi=301,Ji=302,Ar=303,Fo=304,Or=306,Rs=1e3,vi=1001,Bo=1002,gn=1003,zh=1004,Fs=1005,Sn=1006,zr=1007,xi=1008,Bn=1009,wl=1010,El=1011,Cs=1012,ga=1013,yi=1014,Nn=1015,Ps=1016,_a=1017,va=1018,Qi=1020,bl=35902,Tl=1021,Al=1022,mn=1023,Rl=1024,Cl=1025,Xi=1026,ts=1027,Pl=1028,xa=1029,Ll=1030,Ma=1031,ya=1033,Mr=33776,yr=33777,Sr=33778,wr=33779,zo=35840,ko=35841,Go=35842,Ho=35843,Vo=36196,Wo=37492,qo=37496,Xo=37808,Yo=37809,$o=37810,Ko=37811,jo=37812,Zo=37813,Jo=37814,Qo=37815,ta=37816,ea=37817,na=37818,ia=37819,sa=37820,ra=37821,Er=36492,oa=36494,aa=36495,Il=36283,ca=36284,la=36285,ha=36286,kh=3200,Gh=3201,Dl=0,Hh=1,Qn="",Pe="srgb",ns="srgb-linear",Fr="linear",fe="srgb",Ti=7680,Ba=519,Vh=512,Wh=513,qh=514,Ul=515,Xh=516,Yh=517,$h=518,Kh=519,za=35044,ka="300 es",On=2e3,Rr=2001;class is{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kr=Math.PI/180,Cr=180/Math.PI;function Ls(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[s&255]+Fe[s>>8&255]+Fe[s>>16&255]+Fe[s>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function Oe(s,t,e){return Math.max(t,Math.min(e,s))}function jh(s,t){return(s%t+t)%t}function Gr(s,t,e){return(1-e)*s+e*t}function ls(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function qe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class St{constructor(t=0,e=0){St.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,n,i,r,o,a,c,l){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],w=i[1],E=i[4],y=i[7],F=i[2],R=i[5],T=i[8];return r[0]=o*_+a*w+c*F,r[3]=o*m+a*E+c*R,r[6]=o*p+a*y+c*T,r[1]=l*_+h*w+u*F,r[4]=l*m+h*E+u*R,r[7]=l*p+h*y+u*T,r[2]=f*_+d*w+g*F,r[5]=f*m+d*E+g*R,r[8]=f*p+d*y+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Hr.makeScale(t,e)),this}rotate(t){return this.premultiply(Hr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Hr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hr=new $t;function Nl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Pr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Zh(){const s=Pr("canvas");return s.style.display="block",s}const Ga={};function ws(s){s in Ga||(Ga[s]=!0,console.warn(s))}function Jh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Qh(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function tu(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const re={enabled:!0,workingColorSpace:ns,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===fe&&(s.r=Fn(s.r),s.g=Fn(s.g),s.b=Fn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===fe&&(s.r=Yi(s.r),s.g=Yi(s.g),s.b=Yi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qn?Fr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Fn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Yi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Ha=[.64,.33,.3,.6,.15,.06],Va=[.2126,.7152,.0722],Wa=[.3127,.329],qa=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xa=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);re.define({[ns]:{primaries:Ha,whitePoint:Wa,transfer:Fr,toXYZ:qa,fromXYZ:Xa,luminanceCoefficients:Va,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:Ha,whitePoint:Wa,transfer:fe,toXYZ:qa,fromXYZ:Xa,luminanceCoefficients:Va,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}});let Ai;class eu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ai===void 0&&(Ai=Pr("canvas")),Ai.width=t.width,Ai.height=t.height;const n=Ai.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Pr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Fn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fn(e[n]/255)*255):e[n]=Fn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nu=0;class Ol{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=Ls(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Vr(i[o].image)):r.push(Vr(i[o]))}else r=Vr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Vr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?eu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iu=0;class ke extends is{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=vi,i=vi,r=Sn,o=xi,a=mn,c=Bn,l=ke.DEFAULT_ANISOTROPY,h=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=Ls(),this.name="",this.source=new Ol(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rs:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case Bo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rs:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case Bo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Sl;ke.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,i=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,y=(d+1)/2,F=(p+1)/2,R=(h+f)/4,T=(u+_)/4,P=(g+m)/4;return E>y&&E>F?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=R/n,r=T/n):y>F?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=R/i,r=P/i):F<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(F),n=T/r,i=P/r),this.set(n,i,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-_)/w,this.z=(f-h)/w,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class su extends is{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ke(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ol(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends su{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Fl extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=gn,this.minFilter=gn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ru extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=gn,this.minFilter=gn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Is{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let m=1-a;const p=c*f+l*d+h*g+u*_,w=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const F=Math.sqrt(E),R=Math.atan2(F,p*w);m=Math.sin(m*R)/F,a=Math.sin(a*R)/F}const y=a*w;if(c=c*m+f*y,l=l*m+d*y,h=h*m+g*y,u=u*m+_*y,m===1-a){const F=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=F,l*=F,h*=F,u*=F}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ya.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ya.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wr.copy(this).projectOnVector(t),this.sub(Wr)}reflect(t){return this.sub(Wr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wr=new A,Ya=new Is;class Ds{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ln):ln.fromBufferAttribute(r,o),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(t.matrixWorld),this.union(Bs)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hs),zs.subVectors(this.max,hs),Ri.subVectors(t.a,hs),Ci.subVectors(t.b,hs),Pi.subVectors(t.c,hs),Gn.subVectors(Ci,Ri),Hn.subVectors(Pi,Ci),oi.subVectors(Ri,Pi);let e=[0,-Gn.z,Gn.y,0,-Hn.z,Hn.y,0,-oi.z,oi.y,Gn.z,0,-Gn.x,Hn.z,0,-Hn.x,oi.z,0,-oi.x,-Gn.y,Gn.x,0,-Hn.y,Hn.x,0,-oi.y,oi.x,0];return!qr(e,Ri,Ci,Pi,zs)||(e=[1,0,0,0,1,0,0,0,1],!qr(e,Ri,Ci,Pi,zs))?!1:(ks.crossVectors(Gn,Hn),e=[ks.x,ks.y,ks.z],qr(e,Ri,Ci,Pi,zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Tn=[new A,new A,new A,new A,new A,new A,new A,new A],ln=new A,Bs=new Ds,Ri=new A,Ci=new A,Pi=new A,Gn=new A,Hn=new A,oi=new A,hs=new A,zs=new A,ks=new A,ai=new A;function qr(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ai.fromArray(s,r);const a=i.x*Math.abs(ai.x)+i.y*Math.abs(ai.y)+i.z*Math.abs(ai.z),c=t.dot(ai),l=e.dot(ai),h=n.dot(ai);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const ou=new Ds,us=new A,Xr=new A;class Us{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ou.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;us.subVectors(t,this.center);const e=us.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(us,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(us.copy(t.center).add(Xr)),this.expandByPoint(us.copy(t.center).sub(Xr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new A,Yr=new A,Gs=new A,Vn=new A,$r=new A,Hs=new A,Kr=new A;class Sa{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Yr.copy(t).add(e).multiplyScalar(.5),Gs.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(Yr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Gs),a=Vn.dot(this.direction),c=-Vn.dot(Gs),l=Vn.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Yr).addScaledVector(Gs,f),d}intersectSphere(t,e){An.subVectors(t.center,this.origin);const n=An.dot(this.direction),i=An.dot(An)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,i,r){$r.subVectors(e,t),Hs.subVectors(n,t),Kr.crossVectors($r,Hs);let o=this.direction.dot(Kr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,t);const c=a*this.direction.dot(Hs.crossVectors(Vn,Hs));if(c<0)return null;const l=a*this.direction.dot($r.cross(Vn));if(l<0||c+l>o)return null;const h=-a*Vn.dot(Kr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,n,i,r,o,a,c,l,h,u,f,d,g,_,m){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,f,d,g,_,m)}set(t,e,n,i,r,o,a,c,l,h,u,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Li.setFromMatrixColumn(t,0).length(),r=1/Li.setFromMatrixColumn(t,1).length(),o=1/Li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(au,t,cu)}lookAt(t,e,n){const i=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),Wn.crossVectors(n,Qe),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),Wn.crossVectors(n,Qe)),Wn.normalize(),Vs.crossVectors(Qe,Wn),i[0]=Wn.x,i[4]=Vs.x,i[8]=Qe.x,i[1]=Wn.y,i[5]=Vs.y,i[9]=Qe.y,i[2]=Wn.z,i[6]=Vs.z,i[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],w=n[3],E=n[7],y=n[11],F=n[15],R=i[0],T=i[4],P=i[8],S=i[12],x=i[1],C=i[5],B=i[9],G=i[13],X=i[2],Z=i[6],q=i[10],et=i[14],z=i[3],tt=i[7],st=i[11],xt=i[15];return r[0]=o*R+a*x+c*X+l*z,r[4]=o*T+a*C+c*Z+l*tt,r[8]=o*P+a*B+c*q+l*st,r[12]=o*S+a*G+c*et+l*xt,r[1]=h*R+u*x+f*X+d*z,r[5]=h*T+u*C+f*Z+d*tt,r[9]=h*P+u*B+f*q+d*st,r[13]=h*S+u*G+f*et+d*xt,r[2]=g*R+_*x+m*X+p*z,r[6]=g*T+_*C+m*Z+p*tt,r[10]=g*P+_*B+m*q+p*st,r[14]=g*S+_*G+m*et+p*xt,r[3]=w*R+E*x+y*X+F*z,r[7]=w*T+E*C+y*Z+F*tt,r[11]=w*P+E*B+y*q+F*st,r[15]=w*S+E*G+y*et+F*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*d-n*c*d)+_*(+e*c*d-e*l*f+r*o*f-i*o*d+i*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*f+i*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],w=u*m*l-_*f*l+_*c*d-a*m*d-u*c*p+a*f*p,E=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,y=h*_*l-g*u*l+g*a*d-o*_*d-h*a*p+o*u*p,F=g*u*c-h*_*c-g*a*f+o*_*f+h*a*m-o*u*m,R=e*w+n*E+i*y+r*F;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return t[0]=w*T,t[1]=(_*f*r-u*m*r-_*i*d+n*m*d+u*i*p-n*f*p)*T,t[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*p+n*c*p)*T,t[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*d-n*c*d)*T,t[4]=E*T,t[5]=(h*m*r-g*f*r+g*i*d-e*m*d-h*i*p+e*f*p)*T,t[6]=(g*c*r-o*m*r-g*i*l+e*m*l+o*i*p-e*c*p)*T,t[7]=(o*f*r-h*c*r+h*i*l-e*f*l-o*i*d+e*c*d)*T,t[8]=y*T,t[9]=(g*u*r-h*_*r-g*n*d+e*_*d+h*n*p-e*u*p)*T,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*T,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*T,t[12]=F*T,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*m+e*u*m)*T,t[14]=(g*a*i-o*_*i-g*n*c+e*_*c+o*n*m-e*a*m)*T,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*f+e*a*f)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,w=c*l,E=c*h,y=c*u,F=n.x,R=n.y,T=n.z;return i[0]=(1-(_+p))*F,i[1]=(d+y)*F,i[2]=(g-E)*F,i[3]=0,i[4]=(d-y)*R,i[5]=(1-(f+p))*R,i[6]=(m+w)*R,i[7]=0,i[8]=(g+E)*T,i[9]=(m-w)*T,i[10]=(1-(f+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Li.set(i[0],i[1],i[2]).length();const o=Li.set(i[4],i[5],i[6]).length(),a=Li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],hn.copy(this);const l=1/r,h=1/o,u=1/a;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,e.setFromRotationMatrix(hn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=On){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let d,g;if(a===On)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Rr)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=On){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*l,d=(n+i)*h;let g,_;if(a===On)g=(o+r)*u,_=-2*u;else if(a===Rr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Li=new A,hn=new ve,au=new A(0,0,0),cu=new A(1,1,1),Wn=new A,Vs=new A,Qe=new A,$a=new ve,Ka=new Is;class wn{constructor(t=0,e=0,n=0,i=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $a.makeRotationFromQuaternion(t),this.setFromRotationMatrix($a,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ka.setFromEuler(this),this.setFromQuaternion(Ka,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class Bl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lu=0;const ja=new A,Ii=new Is,Rn=new ve,Ws=new A,ds=new A,hu=new A,uu=new Is,Za=new A(1,0,0),Ja=new A(0,1,0),Qa=new A(0,0,1),tc={type:"added"},du={type:"removed"},Di={type:"childadded",child:null},jr={type:"childremoved",child:null};class Le extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=Ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new A,e=new wn,n=new Is,i=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ve},normalMatrix:{value:new $t}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(Za,t)}rotateY(t){return this.rotateOnAxis(Ja,t)}rotateZ(t){return this.rotateOnAxis(Qa,t)}translateOnAxis(t,e){return ja.copy(t).applyQuaternion(this.quaternion),this.position.add(ja.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Za,t)}translateY(t){return this.translateOnAxis(Ja,t)}translateZ(t){return this.translateOnAxis(Qa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ws.copy(t):Ws.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(ds,Ws,this.up):Rn.lookAt(Ws,ds,this.up),this.quaternion.setFromRotationMatrix(Rn),i&&(Rn.extractRotation(i.matrixWorld),Ii.setFromRotationMatrix(Rn),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tc),Di.child=t,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(du),jr.child=t,this.dispatchEvent(jr),jr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tc),Di.child=t,this.dispatchEvent(Di),Di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,t,hu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,uu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Le.DEFAULT_UP=new A(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new A,Cn=new A,Zr=new A,Pn=new A,Ui=new A,Ni=new A,ec=new A,Jr=new A,Qr=new A,to=new A,eo=new pe,no=new pe,io=new pe;class pn{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),un.subVectors(t,e),i.cross(un);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){un.subVectors(i,e),Cn.subVectors(n,e),Zr.subVectors(t,e);const o=un.dot(un),a=un.dot(Cn),c=un.dot(Zr),l=Cn.dot(Cn),h=Cn.dot(Zr),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Pn.x),c.addScaledVector(o,Pn.y),c.addScaledVector(a,Pn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return eo.setScalar(0),no.setScalar(0),io.setScalar(0),eo.fromBufferAttribute(t,e),no.fromBufferAttribute(t,n),io.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(eo,r.x),o.addScaledVector(no,r.y),o.addScaledVector(io,r.z),o}static isFrontFacing(t,e,n,i){return un.subVectors(n,e),Cn.subVectors(t,e),un.cross(Cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),un.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return pn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Ui.subVectors(i,n),Ni.subVectors(r,n),Jr.subVectors(t,n);const c=Ui.dot(Jr),l=Ni.dot(Jr);if(c<=0&&l<=0)return e.copy(n);Qr.subVectors(t,i);const h=Ui.dot(Qr),u=Ni.dot(Qr);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ui,o);to.subVectors(t,r);const d=Ui.dot(to),g=Ni.dot(to);if(g>=0&&d<=g)return e.copy(r);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ni,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return ec.subVectors(r,i),a=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(ec,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(Ui,o).addScaledVector(Ni,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const zl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},qs={h:0,s:0,l:0};function so(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ne{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=re.workingColorSpace){if(t=jh(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=so(o,r,t+1/3),this.g=so(o,r,t),this.b=so(o,r,t-1/3)}return re.toWorkingColorSpace(this,i),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const n=zl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}copyLinearToSRGB(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return re.fromWorkingColorSpace(Be.copy(this),t),Math.round(Oe(Be.r*255,0,255))*65536+Math.round(Oe(Be.g*255,0,255))*256+Math.round(Oe(Be.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,i=Be.g,r=Be.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Pe){re.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,i=Be.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(qs);const n=Gr(qn.h,qs.h,e),i=Gr(qn.s,qs.s,e),r=Gr(qn.l,qs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new ne;ne.NAMES=zl;let fu=0;class wi extends is{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=Ls(),this.name="",this.blending=qi,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ro,this.blendDst=Co,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ba,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ro&&(n.blendSrc=this.blendSrc),this.blendDst!==Co&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ba&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class kl extends wi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new A,Xs=new St;class Ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=za,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xs.fromBufferAttribute(this,e),Xs.applyMatrix3(t),this.setXY(e,Xs.x,Xs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ls(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ls(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ls(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ls(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ls(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),i=qe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),i=qe(i,this.array),r=qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==za&&(t.usage=this.usage),t}}class Gl extends Ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Hl extends Ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class we extends Ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let pu=0;const on=new ve,ro=new Le,Oi=new A,tn=new Ds,fs=new Ds,Ce=new A;class Ie extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=Ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nl(t)?Hl:Gl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return ro.lookAt(t),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new we(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(tn.min,fs.min),tn.expandByPoint(Ce),Ce.addVectors(tn.max,fs.max),tn.expandByPoint(Ce)):(tn.expandByPoint(fs.min),tn.expandByPoint(fs.max))}tn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ce.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ce));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ce.fromBufferAttribute(a,l),c&&(Oi.fromBufferAttribute(t,l),Ce.add(Oi)),i=Math.max(i,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new A,c[P]=new A;const l=new A,h=new A,u=new A,f=new St,d=new St,g=new St,_=new A,m=new A;function p(P,S,x){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,x),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,x),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(C),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(C),a[P].add(_),a[S].add(_),a[x].add(_),c[P].add(m),c[S].add(m),c[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let P=0,S=w.length;P<S;++P){const x=w[P],C=x.start,B=x.count;for(let G=C,X=C+B;G<X;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const E=new A,y=new A,F=new A,R=new A;function T(P){F.fromBufferAttribute(i,P),R.copy(F);const S=a[P];E.copy(S),E.sub(F.multiplyScalar(F.dot(S))).normalize(),y.crossVectors(R,S);const C=y.dot(c[P])<0?-1:1;o.setXYZW(P,E.x,E.y,E.z,C)}for(let P=0,S=w.length;P<S;++P){const x=w[P],C=x.start,B=x.count;for(let G=C,X=C+B;G<X;G+=3)T(t.getX(G+0)),T(t.getX(G+1)),T(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new A,r=new A,o=new A,a=new A,c=new A,l=new A,h=new A,u=new A;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Ze(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ie,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nc=new ve,ci=new Sa,Ys=new Us,ic=new A,$s=new A,Ks=new A,js=new A,oo=new A,Zs=new A,sc=new A,Js=new A;class I extends Le{constructor(t=new Ie,e=new kl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Zs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(oo.fromBufferAttribute(u,t),o?Zs.addScaledVector(oo,h):Zs.addScaledVector(oo.sub(e),h))}e.add(Zs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(r),ci.copy(t.ray).recast(t.near),!(Ys.containsPoint(ci.origin)===!1&&(ci.intersectSphere(Ys,ic)===null||ci.origin.distanceToSquared(ic)>(t.far-t.near)**2))&&(nc.copy(r).invert(),ci.copy(t.ray).applyMatrix4(nc),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],w=Math.max(m.start,d.start),E=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=w,F=E;y<F;y+=3){const R=a.getX(y),T=a.getX(y+1),P=a.getX(y+2);i=Qs(this,p,t,n,l,h,u,R,T,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const w=a.getX(m),E=a.getX(m+1),y=a.getX(m+2);i=Qs(this,o,t,n,l,h,u,w,E,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],w=Math.max(m.start,d.start),E=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=w,F=E;y<F;y+=3){const R=y,T=y+1,P=y+2;i=Qs(this,p,t,n,l,h,u,R,T,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const w=m,E=m+1,y=m+2;i=Qs(this,o,t,n,l,h,u,w,E,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function mu(s,t,e,n,i,r,o,a){let c;if(t.side===je?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===ni,a),c===null)return null;Js.copy(a),Js.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Js);return l<e.near||l>e.far?null:{distance:l,point:Js.clone(),object:s}}function Qs(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,$s),s.getVertexPosition(c,Ks),s.getVertexPosition(l,js);const h=mu(s,t,e,n,$s,Ks,js,sc);if(h){const u=new A;pn.getBarycoord(sc,$s,Ks,js,u),i&&(h.uv=pn.getInterpolatedAttribute(i,a,c,l,u,new St)),r&&(h.uv1=pn.getInterpolatedAttribute(r,a,c,l,u,new St)),o&&(h.normal=pn.getInterpolatedAttribute(o,a,c,l,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new A,materialIndex:0};pn.getNormal($s,Ks,js,f.normal),h.face=f,h.barycoord=u}return h}class it extends Ie{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(u,2));function g(_,m,p,w,E,y,F,R,T,P,S){const x=y/T,C=F/P,B=y/2,G=F/2,X=R/2,Z=T+1,q=P+1;let et=0,z=0;const tt=new A;for(let st=0;st<q;st++){const xt=st*C-G;for(let Gt=0;Gt<Z;Gt++){const ie=Gt*x-B;tt[_]=ie*w,tt[m]=xt*E,tt[p]=X,l.push(tt.x,tt.y,tt.z),tt[_]=0,tt[m]=0,tt[p]=R>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(Gt/T),u.push(1-st/P),et+=1}}for(let st=0;st<P;st++)for(let xt=0;xt<T;xt++){const Gt=f+xt+Z*st,ie=f+xt+Z*(st+1),K=f+(xt+1)+Z*(st+1),at=f+(xt+1)+Z*st;c.push(Gt,ie,at),c.push(ie,K,at),z+=6}a.addGroup(d,z,S),d+=z,f+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new it(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function es(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ge(s){const t={};for(let e=0;e<s.length;e++){const n=es(s[e]);for(const i in n)t[i]=n[i]}return t}function gu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Vl(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const _u={clone:es,merge:Ge};var vu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends wi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vu,this.fragmentShader=xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=es(t.uniforms),this.uniformsGroups=gu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Wl extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=On}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new A,rc=new St,oc=new St;class $e extends Wl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,rc,oc),e.subVectors(oc,rc)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(kr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Fi=-90,Bi=1;class Mu extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $e(Fi,Bi,t,e);i.layers=this.layers,this.add(i);const r=new $e(Fi,Bi,t,e);r.layers=this.layers,this.add(r);const o=new $e(Fi,Bi,t,e);o.layers=this.layers,this.add(o);const a=new $e(Fi,Bi,t,e);a.layers=this.layers,this.add(a);const c=new $e(Fi,Bi,t,e);c.layers=this.layers,this.add(c);const l=new $e(Fi,Bi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ql extends ke{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Zi,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yu extends Si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ql(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new it(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:ti});r.uniforms.tEquirect.value=e;const o=new I(i,r),a=e.minFilter;return e.minFilter===xi&&(e.minFilter=Sn),new Mu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const ao=new A,Su=new A,wu=new $t;class pi{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ao.subVectors(n,e).cross(Su.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ao),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||wu.getNormalMatrix(t),i=this.coplanarPoint(ao).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new Us,tr=new A;class wa{constructor(t=new pi,e=new pi,n=new pi,i=new pi,r=new pi,o=new pi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],w=i[13],E=i[14],y=i[15];if(n[0].setComponents(c-r,f-l,m-d,y-p).normalize(),n[1].setComponents(c+r,f+l,m+d,y+p).normalize(),n[2].setComponents(c+o,f+h,m+g,y+w).normalize(),n[3].setComponents(c-o,f-h,m-g,y-w).normalize(),n[4].setComponents(c-a,f-u,m-_,y-E).normalize(),e===On)n[5].setComponents(c+a,f+u,m+_,y+E).normalize();else if(e===Rr)n[5].setComponents(a,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(tr.x=i.normal.x>0?t.max.x:t.min.x,tr.y=i.normal.y>0?t.max.y:t.min.y,tr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xl(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Eu(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class Ke extends Ie{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const w=p*f-o;for(let E=0;E<l;E++){const y=E*u-r;g.push(y,-w,0),_.push(0,0,1),m.push(E/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){const E=w+l*p,y=w+l*(p+1),F=w+1+l*(p+1),R=w+1+l*p;d.push(E,y,R),d.push(y,F,R)}this.setIndex(d),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(_,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.width,t.height,t.widthSegments,t.heightSegments)}}var bu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tu=`#ifdef USE_ALPHAHASH
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
#endif`,Au=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lu=`#ifdef USE_AOMAP
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
#endif`,Iu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Du=`#ifdef USE_BATCHING
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
#endif`,Uu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ou=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bu=`#ifdef USE_IRIDESCENCE
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
#endif`,zu=`#ifdef USE_BUMPMAP
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
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$u=`#define PI 3.141592653589793
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
} // validated`,Ku=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ju=`vec3 transformedNormal = objectNormal;
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
#endif`,Zu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ju=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,td=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ed="gl_FragColor = linearToOutputTexel( gl_FragColor );",nd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,id=`#ifdef USE_ENVMAP
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
#endif`,sd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rd=`#ifdef USE_ENVMAP
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
#endif`,od=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ad=`#ifdef USE_ENVMAP
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
#endif`,cd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ld=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dd=`#ifdef USE_GRADIENTMAP
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
}`,fd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gd=`uniform bool receiveShadow;
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
#endif`,_d=`#ifdef USE_ENVMAP
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
#endif`,vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Md=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sd=`PhysicalMaterial material;
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
#endif`,wd=`struct PhysicalMaterial {
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
}`,Ed=`
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
#endif`,bd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Td=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ad=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ld=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Id=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ud=`#if defined( USE_POINTS_UV )
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
#endif`,Nd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Od=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kd=`#ifdef USE_MORPHTARGETS
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
#endif`,Gd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yd=`#ifdef USE_NORMALMAP
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
#endif`,$d=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,tf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ef=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,of=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,af=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hf=`float getShadowMask() {
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
}`,uf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,df=`#ifdef USE_SKINNING
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
#endif`,ff=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pf=`#ifdef USE_SKINNING
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
#endif`,mf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_f=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vf=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xf=`#ifdef USE_TRANSMISSION
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
#endif`,Mf=`#ifdef USE_TRANSMISSION
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
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ef=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tf=`uniform sampler2D t2D;
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
}`,Af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`#include <common>
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
}`,If=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Df=`#define DISTANCE
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
}`,Uf=`#define DISTANCE
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
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Of=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`uniform float scale;
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
}`,Bf=`uniform vec3 diffuse;
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
}`,zf=`#include <common>
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
}`,kf=`uniform vec3 diffuse;
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
}`,Gf=`#define LAMBERT
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
}`,Hf=`#define LAMBERT
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
}`,Vf=`#define MATCAP
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
}`,Wf=`#define MATCAP
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
}`,qf=`#define NORMAL
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
}`,Xf=`#define NORMAL
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
}`,Yf=`#define PHONG
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
}`,$f=`#define PHONG
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
}`,Kf=`#define STANDARD
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
}`,jf=`#define STANDARD
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
}`,Zf=`#define TOON
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
}`,Jf=`#define TOON
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
}`,Qf=`uniform float size;
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
}`,tp=`uniform vec3 diffuse;
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
}`,ep=`#include <common>
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
}`,np=`uniform vec3 color;
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
}`,ip=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sp=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:bu,alphahash_pars_fragment:Tu,alphamap_fragment:Au,alphamap_pars_fragment:Ru,alphatest_fragment:Cu,alphatest_pars_fragment:Pu,aomap_fragment:Lu,aomap_pars_fragment:Iu,batching_pars_vertex:Du,batching_vertex:Uu,begin_vertex:Nu,beginnormal_vertex:Ou,bsdfs:Fu,iridescence_fragment:Bu,bumpmap_pars_fragment:zu,clipping_planes_fragment:ku,clipping_planes_pars_fragment:Gu,clipping_planes_pars_vertex:Hu,clipping_planes_vertex:Vu,color_fragment:Wu,color_pars_fragment:qu,color_pars_vertex:Xu,color_vertex:Yu,common:$u,cube_uv_reflection_fragment:Ku,defaultnormal_vertex:ju,displacementmap_pars_vertex:Zu,displacementmap_vertex:Ju,emissivemap_fragment:Qu,emissivemap_pars_fragment:td,colorspace_fragment:ed,colorspace_pars_fragment:nd,envmap_fragment:id,envmap_common_pars_fragment:sd,envmap_pars_fragment:rd,envmap_pars_vertex:od,envmap_physical_pars_fragment:_d,envmap_vertex:ad,fog_vertex:cd,fog_pars_vertex:ld,fog_fragment:hd,fog_pars_fragment:ud,gradientmap_pars_fragment:dd,lightmap_pars_fragment:fd,lights_lambert_fragment:pd,lights_lambert_pars_fragment:md,lights_pars_begin:gd,lights_toon_fragment:vd,lights_toon_pars_fragment:xd,lights_phong_fragment:Md,lights_phong_pars_fragment:yd,lights_physical_fragment:Sd,lights_physical_pars_fragment:wd,lights_fragment_begin:Ed,lights_fragment_maps:bd,lights_fragment_end:Td,logdepthbuf_fragment:Ad,logdepthbuf_pars_fragment:Rd,logdepthbuf_pars_vertex:Cd,logdepthbuf_vertex:Pd,map_fragment:Ld,map_pars_fragment:Id,map_particle_fragment:Dd,map_particle_pars_fragment:Ud,metalnessmap_fragment:Nd,metalnessmap_pars_fragment:Od,morphinstance_vertex:Fd,morphcolor_vertex:Bd,morphnormal_vertex:zd,morphtarget_pars_vertex:kd,morphtarget_vertex:Gd,normal_fragment_begin:Hd,normal_fragment_maps:Vd,normal_pars_fragment:Wd,normal_pars_vertex:qd,normal_vertex:Xd,normalmap_pars_fragment:Yd,clearcoat_normal_fragment_begin:$d,clearcoat_normal_fragment_maps:Kd,clearcoat_pars_fragment:jd,iridescence_pars_fragment:Zd,opaque_fragment:Jd,packing:Qd,premultiplied_alpha_fragment:tf,project_vertex:ef,dithering_fragment:nf,dithering_pars_fragment:sf,roughnessmap_fragment:rf,roughnessmap_pars_fragment:of,shadowmap_pars_fragment:af,shadowmap_pars_vertex:cf,shadowmap_vertex:lf,shadowmask_pars_fragment:hf,skinbase_vertex:uf,skinning_pars_vertex:df,skinning_vertex:ff,skinnormal_vertex:pf,specularmap_fragment:mf,specularmap_pars_fragment:gf,tonemapping_fragment:_f,tonemapping_pars_fragment:vf,transmission_fragment:xf,transmission_pars_fragment:Mf,uv_pars_fragment:yf,uv_pars_vertex:Sf,uv_vertex:wf,worldpos_vertex:Ef,background_vert:bf,background_frag:Tf,backgroundCube_vert:Af,backgroundCube_frag:Rf,cube_vert:Cf,cube_frag:Pf,depth_vert:Lf,depth_frag:If,distanceRGBA_vert:Df,distanceRGBA_frag:Uf,equirect_vert:Nf,equirect_frag:Of,linedashed_vert:Ff,linedashed_frag:Bf,meshbasic_vert:zf,meshbasic_frag:kf,meshlambert_vert:Gf,meshlambert_frag:Hf,meshmatcap_vert:Vf,meshmatcap_frag:Wf,meshnormal_vert:qf,meshnormal_frag:Xf,meshphong_vert:Yf,meshphong_frag:$f,meshphysical_vert:Kf,meshphysical_frag:jf,meshtoon_vert:Zf,meshtoon_frag:Jf,points_vert:Qf,points_frag:tp,shadow_vert:ep,shadow_frag:np,sprite_vert:ip,sprite_frag:sp},ut={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Mn={basic:{uniforms:Ge([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Ge([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new ne(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Ge([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Ge([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Ge([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new ne(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Ge([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Ge([ut.points,ut.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Ge([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Ge([ut.common,ut.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Ge([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Ge([ut.sprite,ut.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Ge([ut.common,ut.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Ge([ut.lights,ut.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Mn.physical={uniforms:Ge([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const er={r:0,b:0,g:0},hi=new wn,rp=new ve;function op(s,t,e,n,i,r,o){const a=new ne(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(w){let E=w.isScene===!0?w.background:null;return E&&E.isTexture&&(E=(w.backgroundBlurriness>0?e:t).get(E)),E}function _(w){let E=!1;const y=g(w);y===null?p(a,c):y&&y.isColor&&(p(y,1),E=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(w,E){const y=g(E);y&&(y.isCubeTexture||y.mapping===Or)?(h===void 0&&(h=new I(new it(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:es(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),hi.copy(E.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rp.makeRotationFromEuler(hi)),h.material.toneMapped=re.getTransfer(y.colorSpace)!==fe,(u!==y||f!==y.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new I(new Ke(2,2),new ii({name:"BackgroundMaterial",uniforms:es(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=re.getTransfer(y.colorSpace)!==fe,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,E){w.getRGB(er,Vl(s)),n.buffers.color.setClear(er.r,er.g,er.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(w,E=1){a.set(w),c=E,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(a,c)},render:_,addToRenderList:m}}function ap(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(x,C,B,G,X){let Z=!1;const q=u(G,B,C);r!==q&&(r=q,l(r.object)),Z=d(x,G,B,X),Z&&g(x,G,B,X),X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,y(x,C,B,G),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return s.createVertexArray()}function l(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,C,B){const G=B.wireframe===!0;let X=n[x.id];X===void 0&&(X={},n[x.id]=X);let Z=X[C.id];Z===void 0&&(Z={},X[C.id]=Z);let q=Z[G];return q===void 0&&(q=f(c()),Z[G]=q),q}function f(x){const C=[],B=[],G=[];for(let X=0;X<e;X++)C[X]=0,B[X]=0,G[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:B,attributeDivisors:G,object:x,attributes:{},index:null}}function d(x,C,B,G){const X=r.attributes,Z=C.attributes;let q=0;const et=B.getAttributes();for(const z in et)if(et[z].location>=0){const st=X[z];let xt=Z[z];if(xt===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(xt=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(xt=x.instanceColor)),st===void 0||st.attribute!==xt||xt&&st.data!==xt.data)return!0;q++}return r.attributesNum!==q||r.index!==G}function g(x,C,B,G){const X={},Z=C.attributes;let q=0;const et=B.getAttributes();for(const z in et)if(et[z].location>=0){let st=Z[z];st===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(st=x.instanceColor));const xt={};xt.attribute=st,st&&st.data&&(xt.data=st.data),X[z]=xt,q++}r.attributes=X,r.attributesNum=q,r.index=G}function _(){const x=r.newAttributes;for(let C=0,B=x.length;C<B;C++)x[C]=0}function m(x){p(x,0)}function p(x,C){const B=r.newAttributes,G=r.enabledAttributes,X=r.attributeDivisors;B[x]=1,G[x]===0&&(s.enableVertexAttribArray(x),G[x]=1),X[x]!==C&&(s.vertexAttribDivisor(x,C),X[x]=C)}function w(){const x=r.newAttributes,C=r.enabledAttributes;for(let B=0,G=C.length;B<G;B++)C[B]!==x[B]&&(s.disableVertexAttribArray(B),C[B]=0)}function E(x,C,B,G,X,Z,q){q===!0?s.vertexAttribIPointer(x,C,B,X,Z):s.vertexAttribPointer(x,C,B,G,X,Z)}function y(x,C,B,G){_();const X=G.attributes,Z=B.getAttributes(),q=C.defaultAttributeValues;for(const et in Z){const z=Z[et];if(z.location>=0){let tt=X[et];if(tt===void 0&&(et==="instanceMatrix"&&x.instanceMatrix&&(tt=x.instanceMatrix),et==="instanceColor"&&x.instanceColor&&(tt=x.instanceColor)),tt!==void 0){const st=tt.normalized,xt=tt.itemSize,Gt=t.get(tt);if(Gt===void 0)continue;const ie=Gt.buffer,K=Gt.type,at=Gt.bytesPerElement,wt=K===s.INT||K===s.UNSIGNED_INT||tt.gpuType===ga;if(tt.isInterleavedBufferAttribute){const pt=tt.data,Nt=pt.stride,Bt=tt.offset;if(pt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<z.locationSize;Kt++)p(z.location+Kt,pt.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Kt=0;Kt<z.locationSize;Kt++)m(z.location+Kt);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let Kt=0;Kt<z.locationSize;Kt++)E(z.location+Kt,xt/z.locationSize,K,st,Nt*at,(Bt+xt/z.locationSize*Kt)*at,wt)}else{if(tt.isInstancedBufferAttribute){for(let pt=0;pt<z.locationSize;pt++)p(z.location+pt,tt.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let pt=0;pt<z.locationSize;pt++)m(z.location+pt);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let pt=0;pt<z.locationSize;pt++)E(z.location+pt,xt/z.locationSize,K,st,xt*at,xt/z.locationSize*pt*at,wt)}}else if(q!==void 0){const st=q[et];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(z.location,st);break;case 3:s.vertexAttrib3fv(z.location,st);break;case 4:s.vertexAttrib4fv(z.location,st);break;default:s.vertexAttrib1fv(z.location,st)}}}}w()}function F(){P();for(const x in n){const C=n[x];for(const B in C){const G=C[B];for(const X in G)h(G[X].object),delete G[X];delete C[B]}delete n[x]}}function R(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const B in C){const G=C[B];for(const X in G)h(G[X].object),delete G[X];delete C[B]}delete n[x.id]}function T(x){for(const C in n){const B=n[C];if(B[x.id]===void 0)continue;const G=B[x.id];for(const X in G)h(G[X].object),delete G[X];delete B[x.id]}}function P(){S(),o=!0,r!==i&&(r=i,l(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:F,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function cp(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function lp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==mn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===Ps&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Bn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Nn&&!P)}function c(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:F,maxSamples:R}}function hp(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new pi,a=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const w=r?0:n,E=w*4;let y=p.clippingState||null;c.value=y,y=h(g,f,E,d);for(let F=0;F!==E;++F)y[F]=e[F];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,y=d;E!==_;++E,y+=4)o.copy(u[E]).applyMatrix4(w,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function up(s){let t=new WeakMap;function e(o,a){return a===Ar?o.mapping=Zi:a===Fo&&(o.mapping=Ji),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ar||a===Fo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new yu(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class dp extends Wl{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Wi=4,ac=[.125,.215,.35,.446,.526,.582],_i=20,co=new dp,cc=new ne;let lo=null,ho=0,uo=0,fo=!1;const mi=(1+Math.sqrt(5))/2,zi=1/mi,lc=[new A(-mi,zi,0),new A(mi,zi,0),new A(-zi,0,mi),new A(zi,0,mi),new A(0,mi,-zi),new A(0,mi,zi),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class hc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){lo=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lo,ho,uo),this._renderer.xr.enabled=fo,t.scissorTest=!1,nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zi||t.mapping===Ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lo=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Ps,format:mn,colorSpace:ns,depthBuffer:!1},i=uc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fp(r)),this._blurMaterial=pp(r,t,e)}return i}_compileMaterial(t){const e=new I(this._lodPlanes[0],t);this._renderer.compile(e,co)}_sceneToCubeUV(t,e,n,i){const a=new $e(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(cc),h.toneMapping=ei,h.autoClear=!1;const d=new kl({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new I(new it,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(cc),_=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):w===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const E=this._cubeSize;nr(i,w*E,p>2?E:0,E,E),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Zi||t.mapping===Ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new I(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;nr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,co)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=lc[(i-r-1)%lc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new I(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*_i-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):_i;m>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_i}`);const p=[];let w=0;for(let T=0;T<_i;++T){const P=T/_,S=Math.exp(-P*P/2);p.push(S),T===0?w+=S:T<m&&(w+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/w;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;const y=this._sizeLods[i],F=3*y*(i>E-Wi?i-E+Wi:0),R=4*(this._cubeSize-y);nr(e,F,R,3*y,2*y),c.setRenderTarget(e),c.render(u,co)}}function fp(s){const t=[],e=[],n=[];let i=s;const r=s-Wi+1+ac.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Wi?c=ac[o-s+Wi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*d),E=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let R=0;R<d;R++){const T=R%3*2/3-1,P=R>2?0:-1,S=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];w.set(S,_*g*R),E.set(f,m*g*R);const x=[R,R,R,R,R,R];y.set(x,p*g*R)}const F=new Ie;F.setAttribute("position",new Ze(w,_)),F.setAttribute("uv",new Ze(E,m)),F.setAttribute("faceIndex",new Ze(y,p)),t.push(F),i>Wi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function uc(s,t,e){const n=new Si(s,t,e);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function pp(s,t,e){const n=new Float32Array(_i),i=new A(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ea(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function dc(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ea(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function fc(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Ea(){return`

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
	`}function mp(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ar||c===Fo,h=c===Zi||c===Ji;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new hc(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new hc(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function gp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ws("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _p(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)t.update(f[g],s.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const w=d.array;_=d.version;for(let E=0,y=w.length;E<y;E+=3){const F=w[E+0],R=w[E+1],T=w[E+2];f.push(F,R,R,T,T,F)}}else if(g!==void 0){const w=g.array;_=g.version;for(let E=0,y=w.length/3-1;E<y;E+=3){const F=E+0,R=E+1,T=E+2;f.push(F,R,R,T,T,F)}}else return;const m=new(Nl(f)?Hl:Gl)(f,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function vp(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=d[w]*_[w];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function xp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Mp(s,t,e){const n=new WeakMap,i=new pe;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let x=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let F=a.attributes.position.count*y,R=1;F>t.maxTextureSize&&(R=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const T=new Float32Array(F*R*4*u),P=new Fl(T,F,R,u);P.type=Nn,P.needsUpdate=!0;const S=y*4;for(let C=0;C<u;C++){const B=p[C],G=w[C],X=E[C],Z=F*R*4*C;for(let q=0;q<B.count;q++){const et=q*S;g===!0&&(i.fromBufferAttribute(B,q),T[Z+et+0]=i.x,T[Z+et+1]=i.y,T[Z+et+2]=i.z,T[Z+et+3]=0),_===!0&&(i.fromBufferAttribute(G,q),T[Z+et+4]=i.x,T[Z+et+5]=i.y,T[Z+et+6]=i.z,T[Z+et+7]=0),m===!0&&(i.fromBufferAttribute(X,q),T[Z+et+8]=i.x,T[Z+et+9]=i.y,T[Z+et+10]=i.z,T[Z+et+11]=X.itemSize===4?i.w:1)}}f={count:u,texture:P,size:new St(F,R)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function yp(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Yl extends ke{constructor(t,e,n,i,r,o,a,c,l,h=Xi){if(h!==Xi&&h!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xi&&(n=yi),n===void 0&&h===ts&&(n=Qi),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:gn,this.minFilter=c!==void 0?c:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const $l=new ke,pc=new Yl(1,1),Kl=new Fl,jl=new ru,Zl=new ql,mc=[],gc=[],_c=new Float32Array(16),vc=new Float32Array(9),xc=new Float32Array(4);function ss(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=mc[i];if(r===void 0&&(r=new Float32Array(i),mc[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ae(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Re(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Br(s,t){let e=gc[t];e===void 0&&(e=new Int32Array(t),gc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Sp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function wp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2fv(this.addr,t),Re(e,t)}}function Ep(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;s.uniform3fv(this.addr,t),Re(e,t)}}function bp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4fv(this.addr,t),Re(e,t)}}function Tp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;xc.set(n),s.uniformMatrix2fv(this.addr,!1,xc),Re(e,n)}}function Ap(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;vc.set(n),s.uniformMatrix3fv(this.addr,!1,vc),Re(e,n)}}function Rp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ae(e,n))return;_c.set(n),s.uniformMatrix4fv(this.addr,!1,_c),Re(e,n)}}function Cp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Pp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2iv(this.addr,t),Re(e,t)}}function Lp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3iv(this.addr,t),Re(e,t)}}function Ip(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4iv(this.addr,t),Re(e,t)}}function Dp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Up(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2uiv(this.addr,t),Re(e,t)}}function Np(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3uiv(this.addr,t),Re(e,t)}}function Op(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4uiv(this.addr,t),Re(e,t)}}function Fp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(pc.compareFunction=Ul,r=pc):r=$l,e.setTexture2D(t||r,i)}function Bp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||jl,i)}function zp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Zl,i)}function kp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Kl,i)}function Gp(s){switch(s){case 5126:return Sp;case 35664:return wp;case 35665:return Ep;case 35666:return bp;case 35674:return Tp;case 35675:return Ap;case 35676:return Rp;case 5124:case 35670:return Cp;case 35667:case 35671:return Pp;case 35668:case 35672:return Lp;case 35669:case 35673:return Ip;case 5125:return Dp;case 36294:return Up;case 36295:return Np;case 36296:return Op;case 35678:case 36198:case 36298:case 36306:case 35682:return Fp;case 35679:case 36299:case 36307:return Bp;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return kp}}function Hp(s,t){s.uniform1fv(this.addr,t)}function Vp(s,t){const e=ss(t,this.size,2);s.uniform2fv(this.addr,e)}function Wp(s,t){const e=ss(t,this.size,3);s.uniform3fv(this.addr,e)}function qp(s,t){const e=ss(t,this.size,4);s.uniform4fv(this.addr,e)}function Xp(s,t){const e=ss(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Yp(s,t){const e=ss(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function $p(s,t){const e=ss(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Kp(s,t){s.uniform1iv(this.addr,t)}function jp(s,t){s.uniform2iv(this.addr,t)}function Zp(s,t){s.uniform3iv(this.addr,t)}function Jp(s,t){s.uniform4iv(this.addr,t)}function Qp(s,t){s.uniform1uiv(this.addr,t)}function tm(s,t){s.uniform2uiv(this.addr,t)}function em(s,t){s.uniform3uiv(this.addr,t)}function nm(s,t){s.uniform4uiv(this.addr,t)}function im(s,t,e){const n=this.cache,i=t.length,r=Br(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||$l,r[o])}function sm(s,t,e){const n=this.cache,i=t.length,r=Br(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||jl,r[o])}function rm(s,t,e){const n=this.cache,i=t.length,r=Br(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Zl,r[o])}function om(s,t,e){const n=this.cache,i=t.length,r=Br(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Kl,r[o])}function am(s){switch(s){case 5126:return Hp;case 35664:return Vp;case 35665:return Wp;case 35666:return qp;case 35674:return Xp;case 35675:return Yp;case 35676:return $p;case 5124:case 35670:return Kp;case 35667:case 35671:return jp;case 35668:case 35672:return Zp;case 35669:case 35673:return Jp;case 5125:return Qp;case 36294:return tm;case 36295:return em;case 36296:return nm;case 35678:case 36198:case 36298:case 36306:case 35682:return im;case 35679:case 36299:case 36307:return sm;case 35680:case 36300:case 36308:case 36293:return rm;case 36289:case 36303:case 36311:case 36292:return om}}class cm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Gp(e.type)}}class lm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=am(e.type)}}class hm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const po=/(\w+)(\])?(\[|\.)?/g;function Mc(s,t){s.seq.push(t),s.map[t.id]=t}function um(s,t,e){const n=s.name,i=n.length;for(po.lastIndex=0;;){const r=po.exec(n),o=po.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Mc(e,l===void 0?new cm(a,s,t):new lm(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new hm(a),Mc(e,u)),e=u}}}class br{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);um(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function yc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const dm=37297;let fm=0;function pm(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Sc=new $t;function mm(s){re._getMatrix(Sc,re.workingColorSpace,s);const t=`mat3( ${Sc.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(s)){case Fr:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function wc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+pm(s.getShaderSource(t),o)}else return i}function gm(s,t){const e=mm(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function _m(s,t){let e;switch(t){case Dh:e="Linear";break;case Uh:e="Reinhard";break;case Nh:e="Cineon";break;case yl:e="ACESFilmic";break;case Fh:e="AgX";break;case Bh:e="Neutral";break;case Oh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ir=new A;function vm(){re.getLuminanceCoefficients(ir);const s=ir.x.toFixed(4),t=ir.y.toFixed(4),e=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function Mm(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ym(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Es(s){return s!==""}function Ec(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ua(s){return s.replace(Sm,Em)}const wm=new Map;function Em(s,t){let e=Zt[t];if(e===void 0){const n=wm.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ua(e)}const bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tc(s){return s.replace(bm,Tm)}function Tm(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ac(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Am(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===vl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===xl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Dn&&(t="SHADOWMAP_TYPE_VSM"),t}function Rm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Zi:case Ji:t="ENVMAP_TYPE_CUBE";break;case Or:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ji:t="ENVMAP_MODE_REFRACTION";break}return t}function Pm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ml:t="ENVMAP_BLENDING_MULTIPLY";break;case Lh:t="ENVMAP_BLENDING_MIX";break;case Ih:t="ENVMAP_BLENDING_ADD";break}return t}function Lm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Im(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Am(e),l=Rm(e),h=Cm(e),u=Pm(e),f=Lm(e),d=xm(e),g=Mm(r),_=i.createProgram();let m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Es).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Es).join(`
`),p.length>0&&(p+=`
`)):(m=[Ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),p=[Ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?Zt.tonemapping_pars_fragment:"",e.toneMapping!==ei?_m("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,gm("linearToOutputTexel",e.outputColorSpace),vm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Es).join(`
`)),o=ua(o),o=Ec(o,e),o=bc(o,e),a=ua(a),a=Ec(a,e),a=bc(a,e),o=Tc(o),a=Tc(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ka?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ka?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=w+m+o,y=w+p+a,F=yc(i,i.VERTEX_SHADER,E),R=yc(i,i.FRAGMENT_SHADER,y);i.attachShader(_,F),i.attachShader(_,R),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(C){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(_).trim(),G=i.getShaderInfoLog(F).trim(),X=i.getShaderInfoLog(R).trim();let Z=!0,q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,F,R);else{const et=wc(i,F,"vertex"),z=wc(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+et+`
`+z)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(G===""||X==="")&&(q=!1);q&&(C.diagnostics={runnable:Z,programLog:B,vertexShader:{log:G,prefix:m},fragmentShader:{log:X,prefix:p}})}i.deleteShader(F),i.deleteShader(R),P=new br(i,_),S=ym(i,_)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,dm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=F,this.fragmentShader=R,this}let Dm=0;class Um{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Nm(t),e.set(t,n)),n}}class Nm{constructor(t){this.id=Dm++,this.code=t,this.usedTimes=0}}function Om(s,t,e,n,i,r,o){const a=new Bl,c=new Um,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,x,C,B,G){const X=B.fog,Z=G.geometry,q=S.isMeshStandardMaterial?B.environment:null,et=(S.isMeshStandardMaterial?e:t).get(S.envMap||q),z=et&&et.mapping===Or?et.image.height:null,tt=g[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const st=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,xt=st!==void 0?st.length:0;let Gt=0;Z.morphAttributes.position!==void 0&&(Gt=1),Z.morphAttributes.normal!==void 0&&(Gt=2),Z.morphAttributes.color!==void 0&&(Gt=3);let ie,K,at,wt;if(tt){const oe=Mn[tt];ie=oe.vertexShader,K=oe.fragmentShader}else ie=S.vertexShader,K=S.fragmentShader,c.update(S),at=c.getVertexShaderID(S),wt=c.getFragmentShaderID(S);const pt=s.getRenderTarget(),Nt=s.state.buffers.depth.getReversed(),Bt=G.isInstancedMesh===!0,Kt=G.isBatchedMesh===!0,Ot=!!S.map,Ht=!!S.matcap,ye=!!et,O=!!S.aoMap,De=!!S.lightMap,Jt=!!S.bumpMap,Qt=!!S.normalMap,Rt=!!S.displacementMap,ce=!!S.emissiveMap,It=!!S.metalnessMap,b=!!S.roughnessMap,v=S.anisotropy>0,k=S.clearcoat>0,J=S.dispersion>0,nt=S.iridescence>0,$=S.sheen>0,Et=S.transmission>0,lt=v&&!!S.anisotropyMap,gt=k&&!!S.clearcoatMap,ee=k&&!!S.clearcoatNormalMap,ot=k&&!!S.clearcoatRoughnessMap,Mt=nt&&!!S.iridescenceMap,Dt=nt&&!!S.iridescenceThicknessMap,Ft=$&&!!S.sheenColorMap,yt=$&&!!S.sheenRoughnessMap,te=!!S.specularMap,Wt=!!S.specularColorMap,ue=!!S.specularIntensityMap,D=Et&&!!S.transmissionMap,dt=Et&&!!S.thicknessMap,W=!!S.gradientMap,Q=!!S.alphaMap,mt=S.alphaTest>0,ft=!!S.alphaHash,zt=!!S.extensions;let ge=ei;S.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(ge=s.toneMapping);const Te={shaderID:tt,shaderType:S.type,shaderName:S.name,vertexShader:ie,fragmentShader:K,defines:S.defines,customVertexShaderID:at,customFragmentShaderID:wt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Kt,batchingColor:Kt&&G._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&G.instanceColor!==null,instancingMorph:Bt&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pt===null?s.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:ns,alphaToCoverage:!!S.alphaToCoverage,map:Ot,matcap:Ht,envMap:ye,envMapMode:ye&&et.mapping,envMapCubeUVHeight:z,aoMap:O,lightMap:De,bumpMap:Jt,normalMap:Qt,displacementMap:f&&Rt,emissiveMap:ce,normalMapObjectSpace:Qt&&S.normalMapType===Hh,normalMapTangentSpace:Qt&&S.normalMapType===Dl,metalnessMap:It,roughnessMap:b,anisotropy:v,anisotropyMap:lt,clearcoat:k,clearcoatMap:gt,clearcoatNormalMap:ee,clearcoatRoughnessMap:ot,dispersion:J,iridescence:nt,iridescenceMap:Mt,iridescenceThicknessMap:Dt,sheen:$,sheenColorMap:Ft,sheenRoughnessMap:yt,specularMap:te,specularColorMap:Wt,specularIntensityMap:ue,transmission:Et,transmissionMap:D,thicknessMap:dt,gradientMap:W,opaque:S.transparent===!1&&S.blending===qi&&S.alphaToCoverage===!1,alphaMap:Q,alphaTest:mt,alphaHash:ft,combine:S.combine,mapUv:Ot&&_(S.map.channel),aoMapUv:O&&_(S.aoMap.channel),lightMapUv:De&&_(S.lightMap.channel),bumpMapUv:Jt&&_(S.bumpMap.channel),normalMapUv:Qt&&_(S.normalMap.channel),displacementMapUv:Rt&&_(S.displacementMap.channel),emissiveMapUv:ce&&_(S.emissiveMap.channel),metalnessMapUv:It&&_(S.metalnessMap.channel),roughnessMapUv:b&&_(S.roughnessMap.channel),anisotropyMapUv:lt&&_(S.anisotropyMap.channel),clearcoatMapUv:gt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ee&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:yt&&_(S.sheenRoughnessMap.channel),specularMapUv:te&&_(S.specularMap.channel),specularColorMapUv:Wt&&_(S.specularColorMap.channel),specularIntensityMapUv:ue&&_(S.specularIntensityMap.channel),transmissionMapUv:D&&_(S.transmissionMap.channel),thicknessMapUv:dt&&_(S.thicknessMap.channel),alphaMapUv:Q&&_(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Qt||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Z.attributes.uv&&(Ot||Q),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Nt,skinning:G.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Gt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ge,decodeVideoTexture:Ot&&S.map.isVideoTexture===!0&&re.getTransfer(S.map.colorSpace)===fe,decodeVideoTextureEmissive:ce&&S.emissiveMap.isVideoTexture===!0&&re.getTransfer(S.emissiveMap.colorSpace)===fe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===yn,flipSided:S.side===je,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:zt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&S.extensions.multiDraw===!0||Kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function p(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)x.push(C),x.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(w(x,S),E(x,S),x.push(s.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function w(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function E(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const x=g[S.type];let C;if(x){const B=Mn[x];C=_u.clone(B.uniforms)}else C=S.uniforms;return C}function F(S,x){let C;for(let B=0,G=h.length;B<G;B++){const X=h[B];if(X.cacheKey===x){C=X,++C.usedTimes;break}}return C===void 0&&(C=new Im(s,x,S,r),h.push(C)),C}function R(S){if(--S.usedTimes===0){const x=h.indexOf(S);h[x]=h[h.length-1],h.pop(),S.destroy()}}function T(S){c.remove(S)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:F,releaseProgram:R,releaseShaderCache:T,programs:h,dispose:P}}function Fm(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Bm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Rc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Cc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function c(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||Bm),n.length>1&&n.sort(f||Rc),i.length>1&&i.sort(f||Rc)}function h(){for(let u=t,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function zm(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Cc,s.set(n,[o])):i>=r.length?(o=new Cc,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function km(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new ne};break;case"SpotLight":e={position:new A,direction:new A,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function Gm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Hm=0;function Vm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Wm(s){const t=new km,e=Gm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const i=new A,r=new ve,o=new ve;function a(l){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,w=0,E=0,y=0,F=0,R=0,T=0;l.sort(Vm);for(let S=0,x=l.length;S<x;S++){const C=l[S],B=C.color,G=C.intensity,X=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=B.r*G,u+=B.g*G,f+=B.b*G;else if(C.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(C.sh.coefficients[q],G);T++}else if(C.isDirectionalLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const et=C.shadow,z=e.get(C);z.shadowIntensity=et.intensity,z.shadowBias=et.bias,z.shadowNormalBias=et.normalBias,z.shadowRadius=et.radius,z.shadowMapSize=et.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=C.shadow.matrix,w++}n.directional[d]=q,d++}else if(C.isSpotLight){const q=t.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(B).multiplyScalar(G),q.distance=X,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,n.spot[_]=q;const et=C.shadow;if(C.map&&(n.spotLightMap[F]=C.map,F++,et.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[_]=et.matrix,C.castShadow){const z=e.get(C);z.shadowIntensity=et.intensity,z.shadowBias=et.bias,z.shadowNormalBias=et.normalBias,z.shadowRadius=et.radius,z.shadowMapSize=et.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=Z,y++}_++}else if(C.isRectAreaLight){const q=t.get(C);q.color.copy(B).multiplyScalar(G),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=q,m++}else if(C.isPointLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){const et=C.shadow,z=e.get(C);z.shadowIntensity=et.intensity,z.shadowBias=et.bias,z.shadowNormalBias=et.normalBias,z.shadowRadius=et.radius,z.shadowMapSize=et.mapSize,z.shadowCameraNear=et.camera.near,z.shadowCameraFar=et.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=C.shadow.matrix,E++}n.point[g]=q,g++}else if(C.isHemisphereLight){const q=t.get(C);q.skyColor.copy(C.color).multiplyScalar(G),q.groundColor.copy(C.groundColor).multiplyScalar(G),n.hemi[p]=q,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==w||P.numPointShadows!==E||P.numSpotShadows!==y||P.numSpotMaps!==F||P.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+F-R,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=T,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=w,P.numPointShadows=E,P.numSpotShadows=y,P.numSpotMaps=F,P.numLightProbes=T,n.version=Hm++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const E=l[p];if(E.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(E.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Pc(s){const t=new Wm(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function qm(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Pc(s),t.set(i,[a])):r>=o.length?(a=new Pc(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Xm extends wi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ym extends wi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const $m=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Km=`uniform sampler2D shadow_pass;
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
}`;function jm(s,t,e){let n=new wa;const i=new St,r=new St,o=new pe,a=new Xm({depthPacking:Gh}),c=new Ym,l={},h=e.maxTextureSize,u={[ni]:je,[je]:ni,[yn]:yn},f=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:$m,fragmentShader:Km}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ie;g.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new I(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vl;let p=this.type;this.render=function(R,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const S=s.getRenderTarget(),x=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),B=s.state;B.setBlending(ti),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const G=p!==Dn&&this.type===Dn,X=p===Dn&&this.type!==Dn;for(let Z=0,q=R.length;Z<q;Z++){const et=R[Z],z=et.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const tt=z.getFrameExtents();if(i.multiply(tt),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/tt.x),i.x=r.x*tt.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/tt.y),i.y=r.y*tt.y,z.mapSize.y=r.y)),z.map===null||G===!0||X===!0){const xt=this.type!==Dn?{minFilter:gn,magFilter:gn}:{};z.map!==null&&z.map.dispose(),z.map=new Si(i.x,i.y,xt),z.map.texture.name=et.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const st=z.getViewportCount();for(let xt=0;xt<st;xt++){const Gt=z.getViewport(xt);o.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),B.viewport(o),z.updateMatrices(et,xt),n=z.getFrustum(),y(T,P,z.camera,et,this.type)}z.isPointLightShadow!==!0&&this.type===Dn&&w(z,P),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,x,C)};function w(R,T){const P=t.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Si(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(T,null,P,f,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(T,null,P,d,_,null)}function E(R,T,P,S){let x=null;const C=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)x=C;else if(x=P.isPointLight===!0?c:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=x.uuid,G=T.uuid;let X=l[B];X===void 0&&(X={},l[B]=X);let Z=X[G];Z===void 0&&(Z=x.clone(),X[G]=Z,T.addEventListener("dispose",F)),x=Z}if(x.visible=T.visible,x.wireframe=T.wireframe,S===Dn?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:u[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=s.properties.get(x);B.light=P}return x}function y(R,T,P,S,x){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===Dn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const G=t.update(R),X=R.material;if(Array.isArray(X)){const Z=G.groups;for(let q=0,et=Z.length;q<et;q++){const z=Z[q],tt=X[z.materialIndex];if(tt&&tt.visible){const st=E(R,tt,S,x);R.onBeforeShadow(s,R,T,P,G,st,z),s.renderBufferDirect(P,null,G,st,R,z),R.onAfterShadow(s,R,T,P,G,st,z)}}}else if(X.visible){const Z=E(R,X,S,x);R.onBeforeShadow(s,R,T,P,G,Z,null),s.renderBufferDirect(P,null,G,Z,R,null),R.onAfterShadow(s,R,T,P,G,Z,null)}}const B=R.children;for(let G=0,X=B.length;G<X;G++)y(B[G],T,P,S,x)}function F(R){R.target.removeEventListener("dispose",F);for(const P in l){const S=l[P],x=R.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const Zm={[Po]:Lo,[Io]:No,[Do]:Oo,[ji]:Uo,[Lo]:Po,[No]:Io,[Oo]:Do,[Uo]:ji};function Jm(s,t){function e(){let D=!1;const dt=new pe;let W=null;const Q=new pe(0,0,0,0);return{setMask:function(mt){W!==mt&&!D&&(s.colorMask(mt,mt,mt,mt),W=mt)},setLocked:function(mt){D=mt},setClear:function(mt,ft,zt,ge,Te){Te===!0&&(mt*=ge,ft*=ge,zt*=ge),dt.set(mt,ft,zt,ge),Q.equals(dt)===!1&&(s.clearColor(mt,ft,zt,ge),Q.copy(dt))},reset:function(){D=!1,W=null,Q.set(-1,0,0,0)}}}function n(){let D=!1,dt=!1,W=null,Q=null,mt=null;return{setReversed:function(ft){if(dt!==ft){const zt=t.get("EXT_clip_control");dt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);const ge=mt;mt=null,this.setClear(ge)}dt=ft},getReversed:function(){return dt},setTest:function(ft){ft?pt(s.DEPTH_TEST):Nt(s.DEPTH_TEST)},setMask:function(ft){W!==ft&&!D&&(s.depthMask(ft),W=ft)},setFunc:function(ft){if(dt&&(ft=Zm[ft]),Q!==ft){switch(ft){case Po:s.depthFunc(s.NEVER);break;case Lo:s.depthFunc(s.ALWAYS);break;case Io:s.depthFunc(s.LESS);break;case ji:s.depthFunc(s.LEQUAL);break;case Do:s.depthFunc(s.EQUAL);break;case Uo:s.depthFunc(s.GEQUAL);break;case No:s.depthFunc(s.GREATER);break;case Oo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=ft}},setLocked:function(ft){D=ft},setClear:function(ft){mt!==ft&&(dt&&(ft=1-ft),s.clearDepth(ft),mt=ft)},reset:function(){D=!1,W=null,Q=null,mt=null,dt=!1}}}function i(){let D=!1,dt=null,W=null,Q=null,mt=null,ft=null,zt=null,ge=null,Te=null;return{setTest:function(oe){D||(oe?pt(s.STENCIL_TEST):Nt(s.STENCIL_TEST))},setMask:function(oe){dt!==oe&&!D&&(s.stencilMask(oe),dt=oe)},setFunc:function(oe,Ue,sn){(W!==oe||Q!==Ue||mt!==sn)&&(s.stencilFunc(oe,Ue,sn),W=oe,Q=Ue,mt=sn)},setOp:function(oe,Ue,sn){(ft!==oe||zt!==Ue||ge!==sn)&&(s.stencilOp(oe,Ue,sn),ft=oe,zt=Ue,ge=sn)},setLocked:function(oe){D=oe},setClear:function(oe){Te!==oe&&(s.clearStencil(oe),Te=oe)},reset:function(){D=!1,dt=null,W=null,Q=null,mt=null,ft=null,zt=null,ge=null,Te=null}}}const r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,w=null,E=null,y=null,F=null,R=null,T=new ne(0,0,0),P=0,S=!1,x=null,C=null,B=null,G=null,X=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,et=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(z)[1]),q=et>=1):z.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),q=et>=2);let tt=null,st={};const xt=s.getParameter(s.SCISSOR_BOX),Gt=s.getParameter(s.VIEWPORT),ie=new pe().fromArray(xt),K=new pe().fromArray(Gt);function at(D,dt,W,Q){const mt=new Uint8Array(4),ft=s.createTexture();s.bindTexture(D,ft),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let zt=0;zt<W;zt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(dt+zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return ft}const wt={};wt[s.TEXTURE_2D]=at(s.TEXTURE_2D,s.TEXTURE_2D,1),wt[s.TEXTURE_CUBE_MAP]=at(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[s.TEXTURE_2D_ARRAY]=at(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),wt[s.TEXTURE_3D]=at(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(s.DEPTH_TEST),o.setFunc(ji),Jt(!1),Qt(Na),pt(s.CULL_FACE),O(ti);function pt(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Nt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Bt(D,dt){return u[D]!==dt?(s.bindFramebuffer(D,dt),u[D]=dt,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=dt),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function Kt(D,dt){let W=d,Q=!1;if(D){W=f.get(dt),W===void 0&&(W=[],f.set(dt,W));const mt=D.textures;if(W.length!==mt.length||W[0]!==s.COLOR_ATTACHMENT0){for(let ft=0,zt=mt.length;ft<zt;ft++)W[ft]=s.COLOR_ATTACHMENT0+ft;W.length=mt.length,Q=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,Q=!0);Q&&s.drawBuffers(W)}function Ot(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const Ht={[gi]:s.FUNC_ADD,[ph]:s.FUNC_SUBTRACT,[mh]:s.FUNC_REVERSE_SUBTRACT};Ht[gh]=s.MIN,Ht[_h]=s.MAX;const ye={[vh]:s.ZERO,[xh]:s.ONE,[Mh]:s.SRC_COLOR,[Ro]:s.SRC_ALPHA,[Th]:s.SRC_ALPHA_SATURATE,[Eh]:s.DST_COLOR,[Sh]:s.DST_ALPHA,[yh]:s.ONE_MINUS_SRC_COLOR,[Co]:s.ONE_MINUS_SRC_ALPHA,[bh]:s.ONE_MINUS_DST_COLOR,[wh]:s.ONE_MINUS_DST_ALPHA,[Ah]:s.CONSTANT_COLOR,[Rh]:s.ONE_MINUS_CONSTANT_COLOR,[Ch]:s.CONSTANT_ALPHA,[Ph]:s.ONE_MINUS_CONSTANT_ALPHA};function O(D,dt,W,Q,mt,ft,zt,ge,Te,oe){if(D===ti){_===!0&&(Nt(s.BLEND),_=!1);return}if(_===!1&&(pt(s.BLEND),_=!0),D!==fh){if(D!==m||oe!==S){if((p!==gi||y!==gi)&&(s.blendEquation(s.FUNC_ADD),p=gi,y=gi),oe)switch(D){case qi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ao:s.blendFunc(s.ONE,s.ONE);break;case Oa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case qi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ao:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Oa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,E=null,F=null,R=null,T.set(0,0,0),P=0,m=D,S=oe}return}mt=mt||dt,ft=ft||W,zt=zt||Q,(dt!==p||mt!==y)&&(s.blendEquationSeparate(Ht[dt],Ht[mt]),p=dt,y=mt),(W!==w||Q!==E||ft!==F||zt!==R)&&(s.blendFuncSeparate(ye[W],ye[Q],ye[ft],ye[zt]),w=W,E=Q,F=ft,R=zt),(ge.equals(T)===!1||Te!==P)&&(s.blendColor(ge.r,ge.g,ge.b,Te),T.copy(ge),P=Te),m=D,S=!1}function De(D,dt){D.side===yn?Nt(s.CULL_FACE):pt(s.CULL_FACE);let W=D.side===je;dt&&(W=!W),Jt(W),D.blending===qi&&D.transparent===!1?O(ti):O(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const Q=D.stencilWrite;a.setTest(Q),Q&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ce(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?pt(s.SAMPLE_ALPHA_TO_COVERAGE):Nt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(D){x!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),x=D)}function Qt(D){D!==uh?(pt(s.CULL_FACE),D!==C&&(D===Na?s.cullFace(s.BACK):D===dh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Nt(s.CULL_FACE),C=D}function Rt(D){D!==B&&(q&&s.lineWidth(D),B=D)}function ce(D,dt,W){D?(pt(s.POLYGON_OFFSET_FILL),(G!==dt||X!==W)&&(s.polygonOffset(dt,W),G=dt,X=W)):Nt(s.POLYGON_OFFSET_FILL)}function It(D){D?pt(s.SCISSOR_TEST):Nt(s.SCISSOR_TEST)}function b(D){D===void 0&&(D=s.TEXTURE0+Z-1),tt!==D&&(s.activeTexture(D),tt=D)}function v(D,dt,W){W===void 0&&(tt===null?W=s.TEXTURE0+Z-1:W=tt);let Q=st[W];Q===void 0&&(Q={type:void 0,texture:void 0},st[W]=Q),(Q.type!==D||Q.texture!==dt)&&(tt!==W&&(s.activeTexture(W),tt=W),s.bindTexture(D,dt||wt[D]),Q.type=D,Q.texture=dt)}function k(){const D=st[tt];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ft(D){ie.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),ie.copy(D))}function yt(D){K.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),K.copy(D))}function te(D,dt){let W=l.get(dt);W===void 0&&(W=new WeakMap,l.set(dt,W));let Q=W.get(D);Q===void 0&&(Q=s.getUniformBlockIndex(dt,D.name),W.set(D,Q))}function Wt(D,dt){const Q=l.get(dt).get(D);c.get(dt)!==Q&&(s.uniformBlockBinding(dt,Q,D.__bindingPointIndex),c.set(dt,Q))}function ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},tt=null,st={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,w=null,E=null,y=null,F=null,R=null,T=new ne(0,0,0),P=0,S=!1,x=null,C=null,B=null,G=null,X=null,ie.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pt,disable:Nt,bindFramebuffer:Bt,drawBuffers:Kt,useProgram:Ot,setBlending:O,setMaterial:De,setFlipSided:Jt,setCullFace:Qt,setLineWidth:Rt,setPolygonOffset:ce,setScissorTest:It,activeTexture:b,bindTexture:v,unbindTexture:k,compressedTexImage2D:J,compressedTexImage3D:nt,texImage2D:Mt,texImage3D:Dt,updateUBOMapping:te,uniformBlockBinding:Wt,texStorage2D:ee,texStorage3D:ot,texSubImage2D:$,texSubImage3D:Et,compressedTexSubImage2D:lt,compressedTexSubImage3D:gt,scissor:Ft,viewport:yt,reset:ue}}function Lc(s,t,e,n){const i=Qm(n);switch(e){case Tl:return s*t;case Rl:return s*t;case Cl:return s*t*2;case Pl:return s*t/i.components*i.byteLength;case xa:return s*t/i.components*i.byteLength;case Ll:return s*t*2/i.components*i.byteLength;case Ma:return s*t*2/i.components*i.byteLength;case Al:return s*t*3/i.components*i.byteLength;case mn:return s*t*4/i.components*i.byteLength;case ya:return s*t*4/i.components*i.byteLength;case Mr:case yr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Sr:case wr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ko:case Ho:return Math.max(s,16)*Math.max(t,8)/4;case zo:case Go:return Math.max(s,8)*Math.max(t,8)/2;case Vo:case Wo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case qo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case $o:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case jo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Zo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ta:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ea:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case na:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ia:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case sa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ra:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Er:case oa:case aa:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Il:case ca:return Math.ceil(s/4)*Math.ceil(t/4)*8;case la:case ha:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qm(s){switch(s){case Bn:case wl:return{byteLength:1,components:1};case Cs:case El:case Ps:return{byteLength:2,components:1};case _a:case va:return{byteLength:2,components:4};case yi:case ga:case Nn:return{byteLength:4,components:1};case bl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function t0(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new St,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return d?new OffscreenCanvas(b,v):Pr("canvas")}function _(b,v,k){let J=1;const nt=It(b);if((nt.width>k||nt.height>k)&&(J=k/Math.max(nt.width,nt.height)),J<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const $=Math.floor(J*nt.width),Et=Math.floor(J*nt.height);u===void 0&&(u=g($,Et));const lt=v?g($,Et):u;return lt.width=$,lt.height=Et,lt.getContext("2d").drawImage(b,0,0,$,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+$+"x"+Et+")."),lt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){s.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(b,v,k,J,nt=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let $=v;if(v===s.RED&&(k===s.FLOAT&&($=s.R32F),k===s.HALF_FLOAT&&($=s.R16F),k===s.UNSIGNED_BYTE&&($=s.R8)),v===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.R8UI),k===s.UNSIGNED_SHORT&&($=s.R16UI),k===s.UNSIGNED_INT&&($=s.R32UI),k===s.BYTE&&($=s.R8I),k===s.SHORT&&($=s.R16I),k===s.INT&&($=s.R32I)),v===s.RG&&(k===s.FLOAT&&($=s.RG32F),k===s.HALF_FLOAT&&($=s.RG16F),k===s.UNSIGNED_BYTE&&($=s.RG8)),v===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.RG8UI),k===s.UNSIGNED_SHORT&&($=s.RG16UI),k===s.UNSIGNED_INT&&($=s.RG32UI),k===s.BYTE&&($=s.RG8I),k===s.SHORT&&($=s.RG16I),k===s.INT&&($=s.RG32I)),v===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.RGB8UI),k===s.UNSIGNED_SHORT&&($=s.RGB16UI),k===s.UNSIGNED_INT&&($=s.RGB32UI),k===s.BYTE&&($=s.RGB8I),k===s.SHORT&&($=s.RGB16I),k===s.INT&&($=s.RGB32I)),v===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.RGBA8UI),k===s.UNSIGNED_SHORT&&($=s.RGBA16UI),k===s.UNSIGNED_INT&&($=s.RGBA32UI),k===s.BYTE&&($=s.RGBA8I),k===s.SHORT&&($=s.RGBA16I),k===s.INT&&($=s.RGBA32I)),v===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),v===s.RGBA){const Et=nt?Fr:re.getTransfer(J);k===s.FLOAT&&($=s.RGBA32F),k===s.HALF_FLOAT&&($=s.RGBA16F),k===s.UNSIGNED_BYTE&&($=Et===fe?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function y(b,v){let k;return b?v===null||v===yi||v===Qi?k=s.DEPTH24_STENCIL8:v===Nn?k=s.DEPTH32F_STENCIL8:v===Cs&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===yi||v===Qi?k=s.DEPTH_COMPONENT24:v===Nn?k=s.DEPTH_COMPONENT32F:v===Cs&&(k=s.DEPTH_COMPONENT16),k}function F(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==gn&&b.minFilter!==Sn?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function R(b){const v=b.target;v.removeEventListener("dispose",R),P(v),v.isVideoTexture&&h.delete(v)}function T(b){const v=b.target;v.removeEventListener("dispose",T),x(v)}function P(b){const v=n.get(b);if(v.__webglInit===void 0)return;const k=b.source,J=f.get(k);if(J){const nt=J[v.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&S(b),Object.keys(J).length===0&&f.delete(k)}n.remove(b)}function S(b){const v=n.get(b);s.deleteTexture(v.__webglTexture);const k=b.source,J=f.get(k);delete J[v.__cacheKey],o.memory.textures--}function x(b){const v=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let nt=0;nt<v.__webglFramebuffer[J].length;nt++)s.deleteFramebuffer(v.__webglFramebuffer[J][nt]);else s.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)s.deleteFramebuffer(v.__webglFramebuffer[J]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=b.textures;for(let J=0,nt=k.length;J<nt;J++){const $=n.get(k[J]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(k[J])}n.remove(b)}let C=0;function B(){C=0}function G(){const b=C;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),C+=1,b}function X(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function Z(b,v){const k=n.get(b);if(b.isVideoTexture&&Rt(b),b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){const J=b.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,b,v);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+v)}function q(b,v){const k=n.get(b);if(b.version>0&&k.__version!==b.version){K(k,b,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+v)}function et(b,v){const k=n.get(b);if(b.version>0&&k.__version!==b.version){K(k,b,v);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+v)}function z(b,v){const k=n.get(b);if(b.version>0&&k.__version!==b.version){at(k,b,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+v)}const tt={[Rs]:s.REPEAT,[vi]:s.CLAMP_TO_EDGE,[Bo]:s.MIRRORED_REPEAT},st={[gn]:s.NEAREST,[zh]:s.NEAREST_MIPMAP_NEAREST,[Fs]:s.NEAREST_MIPMAP_LINEAR,[Sn]:s.LINEAR,[zr]:s.LINEAR_MIPMAP_NEAREST,[xi]:s.LINEAR_MIPMAP_LINEAR},xt={[Vh]:s.NEVER,[Kh]:s.ALWAYS,[Wh]:s.LESS,[Ul]:s.LEQUAL,[qh]:s.EQUAL,[$h]:s.GEQUAL,[Xh]:s.GREATER,[Yh]:s.NOTEQUAL};function Gt(b,v){if(v.type===Nn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Sn||v.magFilter===zr||v.magFilter===Fs||v.magFilter===xi||v.minFilter===Sn||v.minFilter===zr||v.minFilter===Fs||v.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,tt[v.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,tt[v.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,tt[v.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,st[v.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,st[v.minFilter]),v.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,xt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===gn||v.minFilter!==Fs&&v.minFilter!==xi||v.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ie(b,v){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",R));const J=v.source;let nt=f.get(J);nt===void 0&&(nt={},f.set(J,nt));const $=X(v);if($!==b.__cacheKey){nt[$]===void 0&&(nt[$]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),nt[$].usedTimes++;const Et=nt[b.__cacheKey];Et!==void 0&&(nt[b.__cacheKey].usedTimes--,Et.usedTimes===0&&S(v)),b.__cacheKey=$,b.__webglTexture=nt[$].texture}return k}function K(b,v,k){let J=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=s.TEXTURE_3D);const nt=ie(b,v),$=v.source;e.bindTexture(J,b.__webglTexture,s.TEXTURE0+k);const Et=n.get($);if($.version!==Et.__version||nt===!0){e.activeTexture(s.TEXTURE0+k);const lt=re.getPrimaries(re.workingColorSpace),gt=v.colorSpace===Qn?null:re.getPrimaries(v.colorSpace),ee=v.colorSpace===Qn||lt===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ot=_(v.image,!1,i.maxTextureSize);ot=ce(v,ot);const Mt=r.convert(v.format,v.colorSpace),Dt=r.convert(v.type);let Ft=E(v.internalFormat,Mt,Dt,v.colorSpace,v.isVideoTexture);Gt(J,v);let yt;const te=v.mipmaps,Wt=v.isVideoTexture!==!0,ue=Et.__version===void 0||nt===!0,D=$.dataReady,dt=F(v,ot);if(v.isDepthTexture)Ft=y(v.format===ts,v.type),ue&&(Wt?e.texStorage2D(s.TEXTURE_2D,1,Ft,ot.width,ot.height):e.texImage2D(s.TEXTURE_2D,0,Ft,ot.width,ot.height,0,Mt,Dt,null));else if(v.isDataTexture)if(te.length>0){Wt&&ue&&e.texStorage2D(s.TEXTURE_2D,dt,Ft,te[0].width,te[0].height);for(let W=0,Q=te.length;W<Q;W++)yt=te[W],Wt?D&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,yt.width,yt.height,Mt,Dt,yt.data):e.texImage2D(s.TEXTURE_2D,W,Ft,yt.width,yt.height,0,Mt,Dt,yt.data);v.generateMipmaps=!1}else Wt?(ue&&e.texStorage2D(s.TEXTURE_2D,dt,Ft,ot.width,ot.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ot.width,ot.height,Mt,Dt,ot.data)):e.texImage2D(s.TEXTURE_2D,0,Ft,ot.width,ot.height,0,Mt,Dt,ot.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Wt&&ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Ft,te[0].width,te[0].height,ot.depth);for(let W=0,Q=te.length;W<Q;W++)if(yt=te[W],v.format!==mn)if(Mt!==null)if(Wt){if(D)if(v.layerUpdates.size>0){const mt=Lc(yt.width,yt.height,v.format,v.type);for(const ft of v.layerUpdates){const zt=yt.data.subarray(ft*mt/yt.data.BYTES_PER_ELEMENT,(ft+1)*mt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,ft,yt.width,yt.height,1,Mt,zt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,yt.width,yt.height,ot.depth,Mt,yt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,W,Ft,yt.width,yt.height,ot.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,yt.width,yt.height,ot.depth,Mt,Dt,yt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,W,Ft,yt.width,yt.height,ot.depth,0,Mt,Dt,yt.data)}else{Wt&&ue&&e.texStorage2D(s.TEXTURE_2D,dt,Ft,te[0].width,te[0].height);for(let W=0,Q=te.length;W<Q;W++)yt=te[W],v.format!==mn?Mt!==null?Wt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,W,0,0,yt.width,yt.height,Mt,yt.data):e.compressedTexImage2D(s.TEXTURE_2D,W,Ft,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?D&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,yt.width,yt.height,Mt,Dt,yt.data):e.texImage2D(s.TEXTURE_2D,W,Ft,yt.width,yt.height,0,Mt,Dt,yt.data)}else if(v.isDataArrayTexture)if(Wt){if(ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Ft,ot.width,ot.height,ot.depth),D)if(v.layerUpdates.size>0){const W=Lc(ot.width,ot.height,v.format,v.type);for(const Q of v.layerUpdates){const mt=ot.data.subarray(Q*W/ot.data.BYTES_PER_ELEMENT,(Q+1)*W/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,ot.width,ot.height,1,Mt,Dt,mt)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Mt,Dt,ot.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ft,ot.width,ot.height,ot.depth,0,Mt,Dt,ot.data);else if(v.isData3DTexture)Wt?(ue&&e.texStorage3D(s.TEXTURE_3D,dt,Ft,ot.width,ot.height,ot.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Mt,Dt,ot.data)):e.texImage3D(s.TEXTURE_3D,0,Ft,ot.width,ot.height,ot.depth,0,Mt,Dt,ot.data);else if(v.isFramebufferTexture){if(ue)if(Wt)e.texStorage2D(s.TEXTURE_2D,dt,Ft,ot.width,ot.height);else{let W=ot.width,Q=ot.height;for(let mt=0;mt<dt;mt++)e.texImage2D(s.TEXTURE_2D,mt,Ft,W,Q,0,Mt,Dt,null),W>>=1,Q>>=1}}else if(te.length>0){if(Wt&&ue){const W=It(te[0]);e.texStorage2D(s.TEXTURE_2D,dt,Ft,W.width,W.height)}for(let W=0,Q=te.length;W<Q;W++)yt=te[W],Wt?D&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,Mt,Dt,yt):e.texImage2D(s.TEXTURE_2D,W,Ft,Mt,Dt,yt);v.generateMipmaps=!1}else if(Wt){if(ue){const W=It(ot);e.texStorage2D(s.TEXTURE_2D,dt,Ft,W.width,W.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Mt,Dt,ot)}else e.texImage2D(s.TEXTURE_2D,0,Ft,Mt,Dt,ot);m(v)&&p(J),Et.__version=$.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function at(b,v,k){if(v.image.length!==6)return;const J=ie(b,v),nt=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+k);const $=n.get(nt);if(nt.version!==$.__version||J===!0){e.activeTexture(s.TEXTURE0+k);const Et=re.getPrimaries(re.workingColorSpace),lt=v.colorSpace===Qn?null:re.getPrimaries(v.colorSpace),gt=v.colorSpace===Qn||Et===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const ee=v.isCompressedTexture||v.image[0].isCompressedTexture,ot=v.image[0]&&v.image[0].isDataTexture,Mt=[];for(let Q=0;Q<6;Q++)!ee&&!ot?Mt[Q]=_(v.image[Q],!0,i.maxCubemapSize):Mt[Q]=ot?v.image[Q].image:v.image[Q],Mt[Q]=ce(v,Mt[Q]);const Dt=Mt[0],Ft=r.convert(v.format,v.colorSpace),yt=r.convert(v.type),te=E(v.internalFormat,Ft,yt,v.colorSpace),Wt=v.isVideoTexture!==!0,ue=$.__version===void 0||J===!0,D=nt.dataReady;let dt=F(v,Dt);Gt(s.TEXTURE_CUBE_MAP,v);let W;if(ee){Wt&&ue&&e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,te,Dt.width,Dt.height);for(let Q=0;Q<6;Q++){W=Mt[Q].mipmaps;for(let mt=0;mt<W.length;mt++){const ft=W[mt];v.format!==mn?Ft!==null?Wt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,0,0,ft.width,ft.height,Ft,ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,te,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,0,0,ft.width,ft.height,Ft,yt,ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,te,ft.width,ft.height,0,Ft,yt,ft.data)}}}else{if(W=v.mipmaps,Wt&&ue){W.length>0&&dt++;const Q=It(Mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,te,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ot){Wt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Mt[Q].width,Mt[Q].height,Ft,yt,Mt[Q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,te,Mt[Q].width,Mt[Q].height,0,Ft,yt,Mt[Q].data);for(let mt=0;mt<W.length;mt++){const zt=W[mt].image[Q].image;Wt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,0,0,zt.width,zt.height,Ft,yt,zt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,te,zt.width,zt.height,0,Ft,yt,zt.data)}}else{Wt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ft,yt,Mt[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,te,Ft,yt,Mt[Q]);for(let mt=0;mt<W.length;mt++){const ft=W[mt];Wt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,0,0,Ft,yt,ft.image[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,te,Ft,yt,ft.image[Q])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),$.__version=nt.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function wt(b,v,k,J,nt,$){const Et=r.convert(k.format,k.colorSpace),lt=r.convert(k.type),gt=E(k.internalFormat,Et,lt,k.colorSpace),ee=n.get(v),ot=n.get(k);if(ot.__renderTarget=v,!ee.__hasExternalTextures){const Mt=Math.max(1,v.width>>$),Dt=Math.max(1,v.height>>$);nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?e.texImage3D(nt,$,gt,Mt,Dt,v.depth,0,Et,lt,null):e.texImage2D(nt,$,gt,Mt,Dt,0,Et,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,b),Qt(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,nt,ot.__webglTexture,0,Jt(v)):(nt===s.TEXTURE_2D||nt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,nt,ot.__webglTexture,$),e.bindFramebuffer(s.FRAMEBUFFER,null)}function pt(b,v,k){if(s.bindRenderbuffer(s.RENDERBUFFER,b),v.depthBuffer){const J=v.depthTexture,nt=J&&J.isDepthTexture?J.type:null,$=y(v.stencilBuffer,nt),Et=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=Jt(v);Qt(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,$,v.width,v.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,$,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,$,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,b)}else{const J=v.textures;for(let nt=0;nt<J.length;nt++){const $=J[nt],Et=r.convert($.format,$.colorSpace),lt=r.convert($.type),gt=E($.internalFormat,Et,lt,$.colorSpace),ee=Jt(v);k&&Qt(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,gt,v.width,v.height):Qt(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,gt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,gt,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Nt(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(v.depthTexture);J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const nt=J.__webglTexture,$=Jt(v);if(v.depthTexture.format===Xi)Qt(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0);else if(v.depthTexture.format===ts)Qt(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Bt(b){const v=n.get(b),k=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const J=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){const nt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",nt)};J.addEventListener("dispose",nt),v.__depthDisposeCallback=nt}v.__boundDepthTexture=J}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Nt(v.__webglFramebuffer,b)}else if(k){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=s.createRenderbuffer(),pt(v.__webglDepthbuffer[J],b,!1);else{const nt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,$)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),pt(v.__webglDepthbuffer,b,!1);else{const J=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,nt=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,nt),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,nt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(b,v,k){const J=n.get(b);v!==void 0&&wt(J.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Bt(b)}function Ot(b){const v=b.texture,k=n.get(b),J=n.get(v);b.addEventListener("dispose",T);const nt=b.textures,$=b.isWebGLCubeRenderTarget===!0,Et=nt.length>1;if(Et||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=v.version,o.memory.textures++),$){k.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[lt]=[];for(let gt=0;gt<v.mipmaps.length;gt++)k.__webglFramebuffer[lt][gt]=s.createFramebuffer()}else k.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let lt=0;lt<v.mipmaps.length;lt++)k.__webglFramebuffer[lt]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Et)for(let lt=0,gt=nt.length;lt<gt;lt++){const ee=n.get(nt[lt]);ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture(),o.memory.textures++)}if(b.samples>0&&Qt(b)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let lt=0;lt<nt.length;lt++){const gt=nt[lt];k.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[lt]);const ee=r.convert(gt.format,gt.colorSpace),ot=r.convert(gt.type),Mt=E(gt.internalFormat,ee,ot,gt.colorSpace,b.isXRRenderTarget===!0),Dt=Jt(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,Mt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,k.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),pt(k.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),Gt(s.TEXTURE_CUBE_MAP,v);for(let lt=0;lt<6;lt++)if(v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)wt(k.__webglFramebuffer[lt][gt],b,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,gt);else wt(k.__webglFramebuffer[lt],b,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(v)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let lt=0,gt=nt.length;lt<gt;lt++){const ee=nt[lt],ot=n.get(ee);e.bindTexture(s.TEXTURE_2D,ot.__webglTexture),Gt(s.TEXTURE_2D,ee),wt(k.__webglFramebuffer,b,ee,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,0),m(ee)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(lt=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,J.__webglTexture),Gt(lt,v),v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)wt(k.__webglFramebuffer[gt],b,v,s.COLOR_ATTACHMENT0,lt,gt);else wt(k.__webglFramebuffer,b,v,s.COLOR_ATTACHMENT0,lt,0);m(v)&&p(lt),e.unbindTexture()}b.depthBuffer&&Bt(b)}function Ht(b){const v=b.textures;for(let k=0,J=v.length;k<J;k++){const nt=v[k];if(m(nt)){const $=w(b),Et=n.get(nt).__webglTexture;e.bindTexture($,Et),p($),e.unbindTexture()}}}const ye=[],O=[];function De(b){if(b.samples>0){if(Qt(b)===!1){const v=b.textures,k=b.width,J=b.height;let nt=s.COLOR_BUFFER_BIT;const $=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=n.get(b),lt=v.length>1;if(lt)for(let gt=0;gt<v.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let gt=0;gt<v.length;gt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(nt|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(nt|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[gt]);const ee=n.get(v[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,k,J,0,0,k,J,nt,s.NEAREST),c===!0&&(ye.length=0,O.length=0,ye.push(s.COLOR_ATTACHMENT0+gt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ye.push($),O.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ye))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let gt=0;gt<v.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,Et.__webglColorRenderbuffer[gt]);const ee=n.get(v[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,ee,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const v=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Jt(b){return Math.min(i.maxSamples,b.samples)}function Qt(b){const v=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Rt(b){const v=o.render.frame;h.get(b)!==v&&(h.set(b,v),b.update())}function ce(b,v){const k=b.colorSpace,J=b.format,nt=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==ns&&k!==Qn&&(re.getTransfer(k)===fe?(J!==mn||nt!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function It(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=B,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=et,this.setTextureCube=z,this.rebindTextures=Kt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Qt}function e0(s,t){function e(n,i=Qn){let r;const o=re.getTransfer(i);if(n===Bn)return s.UNSIGNED_BYTE;if(n===_a)return s.UNSIGNED_SHORT_4_4_4_4;if(n===va)return s.UNSIGNED_SHORT_5_5_5_1;if(n===bl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===wl)return s.BYTE;if(n===El)return s.SHORT;if(n===Cs)return s.UNSIGNED_SHORT;if(n===ga)return s.INT;if(n===yi)return s.UNSIGNED_INT;if(n===Nn)return s.FLOAT;if(n===Ps)return s.HALF_FLOAT;if(n===Tl)return s.ALPHA;if(n===Al)return s.RGB;if(n===mn)return s.RGBA;if(n===Rl)return s.LUMINANCE;if(n===Cl)return s.LUMINANCE_ALPHA;if(n===Xi)return s.DEPTH_COMPONENT;if(n===ts)return s.DEPTH_STENCIL;if(n===Pl)return s.RED;if(n===xa)return s.RED_INTEGER;if(n===Ll)return s.RG;if(n===Ma)return s.RG_INTEGER;if(n===ya)return s.RGBA_INTEGER;if(n===Mr||n===yr||n===Sr||n===wr)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zo||n===ko||n===Go||n===Ho)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Go)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vo||n===Wo||n===qo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vo||n===Wo)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qo)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xo||n===Yo||n===$o||n===Ko||n===jo||n===Zo||n===Jo||n===Qo||n===ta||n===ea||n===na||n===ia||n===sa||n===ra)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xo)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yo)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$o)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ko)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jo)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zo)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jo)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qo)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ta)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ea)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===na)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ia)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ra)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Er||n===oa||n===aa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Er)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===aa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Il||n===ca||n===la||n===ha)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Er)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ca)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===la)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ha)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class n0 extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ut extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const i0={type:"move"};class mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(i0)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ut;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const s0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r0=`
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

}`;class o0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new ke,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ii({vertexShader:s0,fragmentShader:r0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new I(new Ke(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class a0 extends is{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const _=new o0,m=e.getContextAttributes();let p=null,w=null;const E=[],y=[],F=new St;let R=null;const T=new $e;T.viewport=new pe;const P=new $e;P.viewport=new pe;const S=[T,P],x=new n0;let C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let at=E[K];return at===void 0&&(at=new mo,E[K]=at),at.getTargetRaySpace()},this.getControllerGrip=function(K){let at=E[K];return at===void 0&&(at=new mo,E[K]=at),at.getGripSpace()},this.getHand=function(K){let at=E[K];return at===void 0&&(at=new mo,E[K]=at),at.getHandSpace()};function G(K){const at=y.indexOf(K.inputSource);if(at===-1)return;const wt=E[at];wt!==void 0&&(wt.update(K.inputSource,K.frame,l||o),wt.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",Z);for(let K=0;K<E.length;K++){const at=y[K];at!==null&&(y[K]=null,E[K].disconnect(at))}C=null,B=null,_.reset(),t.setRenderTarget(p),d=null,f=null,u=null,i=null,w=null,ie.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",X),i.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(F),i.renderState.layers===void 0){const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,at),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new Si(d.framebufferWidth,d.framebufferHeight,{format:mn,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,wt=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?ts:Xi,wt=m.stencil?Qi:yi);const Nt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Nt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new Si(f.textureWidth,f.textureHeight,{format:mn,type:Bn,depthTexture:new Yl(f.textureWidth,f.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ie.setContext(i),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(K){for(let at=0;at<K.removed.length;at++){const wt=K.removed[at],pt=y.indexOf(wt);pt>=0&&(y[pt]=null,E[pt].disconnect(wt))}for(let at=0;at<K.added.length;at++){const wt=K.added[at];let pt=y.indexOf(wt);if(pt===-1){for(let Bt=0;Bt<E.length;Bt++)if(Bt>=y.length){y.push(wt),pt=Bt;break}else if(y[Bt]===null){y[Bt]=wt,pt=Bt;break}if(pt===-1)break}const Nt=E[pt];Nt&&Nt.connect(wt)}}const q=new A,et=new A;function z(K,at,wt){q.setFromMatrixPosition(at.matrixWorld),et.setFromMatrixPosition(wt.matrixWorld);const pt=q.distanceTo(et),Nt=at.projectionMatrix.elements,Bt=wt.projectionMatrix.elements,Kt=Nt[14]/(Nt[10]-1),Ot=Nt[14]/(Nt[10]+1),Ht=(Nt[9]+1)/Nt[5],ye=(Nt[9]-1)/Nt[5],O=(Nt[8]-1)/Nt[0],De=(Bt[8]+1)/Bt[0],Jt=Kt*O,Qt=Kt*De,Rt=pt/(-O+De),ce=Rt*-O;if(at.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ce),K.translateZ(Rt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Nt[10]===-1)K.projectionMatrix.copy(at.projectionMatrix),K.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const It=Kt+Rt,b=Ot+Rt,v=Jt-ce,k=Qt+(pt-ce),J=Ht*Ot/b*It,nt=ye*Ot/b*It;K.projectionMatrix.makePerspective(v,k,J,nt,It,b),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function tt(K,at){at===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(at.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let at=K.near,wt=K.far;_.texture!==null&&(_.depthNear>0&&(at=_.depthNear),_.depthFar>0&&(wt=_.depthFar)),x.near=P.near=T.near=at,x.far=P.far=T.far=wt,(C!==x.near||B!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,B=x.far),T.layers.mask=K.layers.mask|2,P.layers.mask=K.layers.mask|4,x.layers.mask=T.layers.mask|P.layers.mask;const pt=K.parent,Nt=x.cameras;tt(x,pt);for(let Bt=0;Bt<Nt.length;Bt++)tt(Nt[Bt],pt);Nt.length===2?z(x,T,P):x.projectionMatrix.copy(T.projectionMatrix),st(K,x,pt)};function st(K,at,wt){wt===null?K.matrix.copy(at.matrixWorld):(K.matrix.copy(wt.matrixWorld),K.matrix.invert(),K.matrix.multiply(at.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(at.projectionMatrix),K.projectionMatrixInverse.copy(at.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Cr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let xt=null;function Gt(K,at){if(h=at.getViewerPose(l||o),g=at,h!==null){const wt=h.views;d!==null&&(t.setRenderTargetFramebuffer(w,d.framebuffer),t.setRenderTarget(w));let pt=!1;wt.length!==x.cameras.length&&(x.cameras.length=0,pt=!0);for(let Bt=0;Bt<wt.length;Bt++){const Kt=wt[Bt];let Ot=null;if(d!==null)Ot=d.getViewport(Kt);else{const ye=u.getViewSubImage(f,Kt);Ot=ye.viewport,Bt===0&&(t.setRenderTargetTextures(w,ye.colorTexture,f.ignoreDepthValues?void 0:ye.depthStencilTexture),t.setRenderTarget(w))}let Ht=S[Bt];Ht===void 0&&(Ht=new $e,Ht.layers.enable(Bt),Ht.viewport=new pe,S[Bt]=Ht),Ht.matrix.fromArray(Kt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Kt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),Bt===0&&(x.matrix.copy(Ht.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),pt===!0&&x.cameras.push(Ht)}const Nt=i.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const Bt=u.getDepthInformation(wt[0]);Bt&&Bt.isValid&&Bt.texture&&_.init(t,Bt,i.renderState)}}for(let wt=0;wt<E.length;wt++){const pt=y[wt],Nt=E[wt];pt!==null&&Nt!==void 0&&Nt.update(pt,at,l||o)}xt&&xt(K,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}const ie=new Xl;ie.setAnimationLoop(Gt),this.setAnimationLoop=function(K){xt=K},this.dispose=function(){}}}const ui=new wn,c0=new ve;function l0(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Vl(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,w,E,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=t.get(p),E=w.envMap,y=w.envMapRotation;E&&(m.envMap.value=E,ui.copy(y),ui.x*=-1,ui.y*=-1,ui.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),m.envMapRotation.value.setFromMatrix4(c0.makeRotationFromEuler(ui)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function h0(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,E){const y=E.program;n.uniformBlockBinding(w,y)}function l(w,E){let y=i[w.id];y===void 0&&(g(w),y=h(w),i[w.id]=y,w.addEventListener("dispose",m));const F=E.program;n.updateUBOMapping(w,F);const R=t.render.frame;r[w.id]!==R&&(f(w),r[w.id]=R)}function h(w){const E=u();w.__bindingPointIndex=E;const y=s.createBuffer(),F=w.__size,R=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,F,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,y),y}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const E=i[w.id],y=w.uniforms,F=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let R=0,T=y.length;R<T;R++){const P=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,x=P.length;S<x;S++){const C=P[S];if(d(C,R,S,F)===!0){const B=C.__offset,G=Array.isArray(C.value)?C.value:[C.value];let X=0;for(let Z=0;Z<G.length;Z++){const q=G[Z],et=_(q);typeof q=="number"||typeof q=="boolean"?(C.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,B+X,C.__data)):q.isMatrix3?(C.__data[0]=q.elements[0],C.__data[1]=q.elements[1],C.__data[2]=q.elements[2],C.__data[3]=0,C.__data[4]=q.elements[3],C.__data[5]=q.elements[4],C.__data[6]=q.elements[5],C.__data[7]=0,C.__data[8]=q.elements[6],C.__data[9]=q.elements[7],C.__data[10]=q.elements[8],C.__data[11]=0):(q.toArray(C.__data,X),X+=et.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(w,E,y,F){const R=w.value,T=E+"_"+y;if(F[T]===void 0)return typeof R=="number"||typeof R=="boolean"?F[T]=R:F[T]=R.clone(),!0;{const P=F[T];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return F[T]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(w){const E=w.uniforms;let y=0;const F=16;for(let T=0,P=E.length;T<P;T++){const S=Array.isArray(E[T])?E[T]:[E[T]];for(let x=0,C=S.length;x<C;x++){const B=S[x],G=Array.isArray(B.value)?B.value:[B.value];for(let X=0,Z=G.length;X<Z;X++){const q=G[X],et=_(q),z=y%F,tt=z%et.boundary,st=z+tt;y+=tt,st!==0&&F-st<et.storage&&(y+=F-st),B.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=et.storage}}}const R=y%F;return R>0&&(y+=F-R),w.__size=y,w.__cache={},this}function _(w){const E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function m(w){const E=w.target;E.removeEventListener("dispose",m);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function p(){for(const w in i)s.deleteBuffer(i[w]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class u0{constructor(t={}){const{canvas:e=Zh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const w=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=ei,this.toneMappingExposure=1;const y=this;let F=!1,R=0,T=0,P=null,S=-1,x=null;const C=new pe,B=new pe;let G=null;const X=new ne(0);let Z=0,q=e.width,et=e.height,z=1,tt=null,st=null;const xt=new pe(0,0,q,et),Gt=new pe(0,0,q,et);let ie=!1;const K=new wa;let at=!1,wt=!1;const pt=new ve,Nt=new ve,Bt=new A,Kt=new pe,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function ye(){return P===null?z:1}let O=n;function De(M,U){return e.getContext(M,U)}try{const M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ma}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),O===null){const U="webgl2";if(O=De(U,M),O===null)throw De(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Jt,Qt,Rt,ce,It,b,v,k,J,nt,$,Et,lt,gt,ee,ot,Mt,Dt,Ft,yt,te,Wt,ue,D;function dt(){Jt=new gp(O),Jt.init(),Wt=new e0(O,Jt),Qt=new lp(O,Jt,t,Wt),Rt=new Jm(O,Jt),Qt.reverseDepthBuffer&&f&&Rt.buffers.depth.setReversed(!0),ce=new xp(O),It=new Fm,b=new t0(O,Jt,Rt,It,Qt,Wt,ce),v=new up(y),k=new mp(y),J=new Eu(O),ue=new ap(O,J),nt=new _p(O,J,ce,ue),$=new yp(O,nt,J,ce),Ft=new Mp(O,Qt,b),ot=new hp(It),Et=new Om(y,v,k,Jt,Qt,ue,ot),lt=new l0(y,It),gt=new zm,ee=new qm(Jt),Dt=new op(y,v,k,Rt,$,d,c),Mt=new jm(y,$,Qt),D=new h0(O,ce,Qt,Rt),yt=new cp(O,Jt,ce),te=new vp(O,Jt,ce),ce.programs=Et.programs,y.capabilities=Qt,y.extensions=Jt,y.properties=It,y.renderLists=gt,y.shadowMap=Mt,y.state=Rt,y.info=ce}dt();const W=new a0(y,O);this.xr=W,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const M=Jt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Jt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(M){M!==void 0&&(z=M,this.setSize(q,et,!1))},this.getSize=function(M){return M.set(q,et)},this.setSize=function(M,U,H=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=M,et=U,e.width=Math.floor(M*z),e.height=Math.floor(U*z),H===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(q*z,et*z).floor()},this.setDrawingBufferSize=function(M,U,H){q=M,et=U,z=H,e.width=Math.floor(M*H),e.height=Math.floor(U*H),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(xt)},this.setViewport=function(M,U,H,V){M.isVector4?xt.set(M.x,M.y,M.z,M.w):xt.set(M,U,H,V),Rt.viewport(C.copy(xt).multiplyScalar(z).round())},this.getScissor=function(M){return M.copy(Gt)},this.setScissor=function(M,U,H,V){M.isVector4?Gt.set(M.x,M.y,M.z,M.w):Gt.set(M,U,H,V),Rt.scissor(B.copy(Gt).multiplyScalar(z).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(M){Rt.setScissorTest(ie=M)},this.setOpaqueSort=function(M){tt=M},this.setTransparentSort=function(M){st=M},this.getClearColor=function(M){return M.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(M=!0,U=!0,H=!0){let V=0;if(M){let N=!1;if(P!==null){const ct=P.texture.format;N=ct===ya||ct===Ma||ct===xa}if(N){const ct=P.texture.type,_t=ct===Bn||ct===yi||ct===Cs||ct===Qi||ct===_a||ct===va,bt=Dt.getClearColor(),Tt=Dt.getClearAlpha(),Vt=bt.r,Yt=bt.g,At=bt.b;_t?(g[0]=Vt,g[1]=Yt,g[2]=At,g[3]=Tt,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=Vt,_[1]=Yt,_[2]=At,_[3]=Tt,O.clearBufferiv(O.COLOR,0,_))}else V|=O.COLOR_BUFFER_BIT}U&&(V|=O.DEPTH_BUFFER_BIT),H&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),gt.dispose(),ee.dispose(),It.dispose(),v.dispose(),k.dispose(),$.dispose(),ue.dispose(),D.dispose(),Et.dispose(),W.dispose(),W.removeEventListener("sessionstart",ri),W.removeEventListener("sessionend",rs),j.stop()};function Q(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const M=ce.autoReset,U=Mt.enabled,H=Mt.autoUpdate,V=Mt.needsUpdate,N=Mt.type;dt(),ce.autoReset=M,Mt.enabled=U,Mt.autoUpdate=H,Mt.needsUpdate=V,Mt.type=N}function ft(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function zt(M){const U=M.target;U.removeEventListener("dispose",zt),ge(U)}function ge(M){Te(M),It.remove(M)}function Te(M){const U=It.get(M).programs;U!==void 0&&(U.forEach(function(H){Et.releaseProgram(H)}),M.isShaderMaterial&&Et.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,H,V,N,ct){U===null&&(U=Ot);const _t=N.isMesh&&N.matrixWorld.determinant()<0,bt=Os(M,U,H,V,N);Rt.setMaterial(V,_t);let Tt=H.index,Vt=1;if(V.wireframe===!0){if(Tt=nt.getWireframeAttribute(H),Tt===void 0)return;Vt=2}const Yt=H.drawRange,At=H.attributes.position;let ae=Yt.start*Vt,_e=(Yt.start+Yt.count)*Vt;ct!==null&&(ae=Math.max(ae,ct.start*Vt),_e=Math.min(_e,(ct.start+ct.count)*Vt)),Tt!==null?(ae=Math.max(ae,0),_e=Math.min(_e,Tt.count)):At!=null&&(ae=Math.max(ae,0),_e=Math.min(_e,At.count));const xe=_e-ae;if(xe<0||xe===1/0)return;ue.setup(N,V,bt,H,Tt);let We,le=yt;if(Tt!==null&&(We=J.get(Tt),le=te,le.setIndex(We)),N.isMesh)V.wireframe===!0?(Rt.setLineWidth(V.wireframeLinewidth*ye()),le.setMode(O.LINES)):le.setMode(O.TRIANGLES);else if(N.isLine){let Ct=V.linewidth;Ct===void 0&&(Ct=1),Rt.setLineWidth(Ct*ye()),N.isLineSegments?le.setMode(O.LINES):N.isLineLoop?le.setMode(O.LINE_LOOP):le.setMode(O.LINE_STRIP)}else N.isPoints?le.setMode(O.POINTS):N.isSprite&&le.setMode(O.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)le.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))le.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ct=N._multiDrawStarts,bn=N._multiDrawCounts,he=N._multiDrawCount,cn=Tt?J.get(Tt).bytesPerElement:1,bi=It.get(V).currentProgram.getUniforms();for(let Je=0;Je<he;Je++)bi.setValue(O,"_gl_DrawID",Je),le.render(Ct[Je]/cn,bn[Je])}else if(N.isInstancedMesh)le.renderInstances(ae,xe,N.count);else if(H.isInstancedBufferGeometry){const Ct=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,bn=Math.min(H.instanceCount,Ct);le.renderInstances(ae,xe,bn)}else le.render(ae,xe)};function oe(M,U,H){M.transparent===!0&&M.side===yn&&M.forceSinglePass===!1?(M.side=je,M.needsUpdate=!0,se(M,U,H),M.side=ni,M.needsUpdate=!0,se(M,U,H),M.side=yn):se(M,U,H)}this.compile=function(M,U,H=null){H===null&&(H=M),p=ee.get(H),p.init(U),E.push(p),H.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),M!==H&&M.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const V=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ct=N.material;if(ct)if(Array.isArray(ct))for(let _t=0;_t<ct.length;_t++){const bt=ct[_t];oe(bt,H,N),V.add(bt)}else oe(ct,H,N),V.add(ct)}),E.pop(),p=null,V},this.compileAsync=function(M,U,H=null){const V=this.compile(M,U,H);return new Promise(N=>{function ct(){if(V.forEach(function(_t){It.get(_t).currentProgram.isReady()&&V.delete(_t)}),V.size===0){N(M);return}setTimeout(ct,10)}Jt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Ue=null;function sn(M){Ue&&Ue(M)}function ri(){j.stop()}function rs(){j.start()}const j=new Xl;j.setAnimationLoop(sn),typeof self<"u"&&j.setContext(self),this.setAnimationLoop=function(M){Ue=M,W.setAnimationLoop(M),M===null?j.stop():j.start()},W.addEventListener("sessionstart",ri),W.addEventListener("sessionend",rs),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,U,P),p=ee.get(M,E.length),p.init(U),E.push(p),Nt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(Nt),wt=this.localClippingEnabled,at=ot.init(this.clippingPlanes,wt),m=gt.get(M,w.length),m.init(),w.push(m),W.enabled===!0&&W.isPresenting===!0){const ct=y.xr.getDepthSensingMesh();ct!==null&&ht(ct,U,-1/0,y.sortObjects)}ht(M,U,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(tt,st),Ht=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Ht&&Dt.addToRenderList(m,M),this.info.render.frame++,at===!0&&ot.beginShadows();const H=p.state.shadowsArray;Mt.render(H,M,U),at===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const ct=U.cameras;if(N.length>0)for(let _t=0,bt=ct.length;_t<bt;_t++){const Tt=ct[_t];jt(V,N,M,Tt)}Ht&&Dt.render(M);for(let _t=0,bt=ct.length;_t<bt;_t++){const Tt=ct[_t];vt(m,M,Tt,Tt.viewport)}}else N.length>0&&jt(V,N,M,U),Ht&&Dt.render(M),vt(m,M,U);P!==null&&(b.updateMultisampleRenderTarget(P),b.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(y,M,U),ue.resetDefaultState(),S=-1,x=null,E.pop(),E.length>0?(p=E[E.length-1],at===!0&&ot.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function ht(M,U,H,V){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||K.intersectsSprite(M)){V&&Kt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Nt);const _t=$.update(M),bt=M.material;bt.visible&&m.push(M,_t,bt,H,Kt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||K.intersectsObject(M))){const _t=$.update(M),bt=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Kt.copy(M.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Kt.copy(_t.boundingSphere.center)),Kt.applyMatrix4(M.matrixWorld).applyMatrix4(Nt)),Array.isArray(bt)){const Tt=_t.groups;for(let Vt=0,Yt=Tt.length;Vt<Yt;Vt++){const At=Tt[Vt],ae=bt[At.materialIndex];ae&&ae.visible&&m.push(M,_t,ae,H,Kt.z,At)}}else bt.visible&&m.push(M,_t,bt,H,Kt.z,null)}}const ct=M.children;for(let _t=0,bt=ct.length;_t<bt;_t++)ht(ct[_t],U,H,V)}function vt(M,U,H,V){const N=M.opaque,ct=M.transmissive,_t=M.transparent;p.setupLightsView(H),at===!0&&ot.setGlobalState(y.clippingPlanes,H),V&&Rt.viewport(C.copy(V)),N.length>0&&Xt(N,U,H),ct.length>0&&Xt(ct,U,H),_t.length>0&&Xt(_t,U,H),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function jt(M,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Si(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?Ps:Bn,minFilter:xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const ct=p.state.transmissionRenderTarget[V.id],_t=V.viewport||C;ct.setSize(_t.z,_t.w);const bt=y.getRenderTarget();y.setRenderTarget(ct),y.getClearColor(X),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),Ht&&Dt.render(H);const Tt=y.toneMapping;y.toneMapping=ei;const Vt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),at===!0&&ot.setGlobalState(y.clippingPlanes,V),Xt(M,H,V),b.updateMultisampleRenderTarget(ct),b.updateRenderTargetMipmap(ct),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let At=0,ae=U.length;At<ae;At++){const _e=U[At],xe=_e.object,We=_e.geometry,le=_e.material,Ct=_e.group;if(le.side===yn&&xe.layers.test(V.layers)){const bn=le.side;le.side=je,le.needsUpdate=!0,Se(xe,H,V,We,le,Ct),le.side=bn,le.needsUpdate=!0,Yt=!0}}Yt===!0&&(b.updateMultisampleRenderTarget(ct),b.updateRenderTargetMipmap(ct))}y.setRenderTarget(bt),y.setClearColor(X,Z),Vt!==void 0&&(V.viewport=Vt),y.toneMapping=Tt}function Xt(M,U,H){const V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ct=M.length;N<ct;N++){const _t=M[N],bt=_t.object,Tt=_t.geometry,Vt=V===null?_t.material:V,Yt=_t.group;bt.layers.test(H.layers)&&Se(bt,U,H,Tt,Vt,Yt)}}function Se(M,U,H,V,N,ct){M.onBeforeRender(y,U,H,V,N,ct),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(y,U,H,V,M,ct),N.transparent===!0&&N.side===yn&&N.forceSinglePass===!1?(N.side=je,N.needsUpdate=!0,y.renderBufferDirect(H,U,V,N,M,ct),N.side=ni,N.needsUpdate=!0,y.renderBufferDirect(H,U,V,N,M,ct),N.side=yn):y.renderBufferDirect(H,U,V,N,M,ct),M.onAfterRender(y,U,H,V,N,ct)}function se(M,U,H){U.isScene!==!0&&(U=Ot);const V=It.get(M),N=p.state.lights,ct=p.state.shadowsArray,_t=N.state.version,bt=Et.getParameters(M,N.state,ct,U,H),Tt=Et.getProgramCacheKey(bt);let Vt=V.programs;V.environment=M.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(M.isMeshStandardMaterial?k:v).get(M.envMap||V.environment),V.envMapRotation=V.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Vt===void 0&&(M.addEventListener("dispose",zt),Vt=new Map,V.programs=Vt);let Yt=Vt.get(Tt);if(Yt!==void 0){if(V.currentProgram===Yt&&V.lightsStateVersion===_t)return os(M,bt),Yt}else bt.uniforms=Et.getUniforms(M),M.onBeforeCompile(bt,y),Yt=Et.acquireProgram(bt,Tt),Vt.set(Tt,Yt),V.uniforms=bt.uniforms;const At=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(At.clippingPlanes=ot.uniform),os(M,bt),V.needsLights=ch(M),V.lightsStateVersion=_t,V.needsLights&&(At.ambientLightColor.value=N.state.ambient,At.lightProbe.value=N.state.probe,At.directionalLights.value=N.state.directional,At.directionalLightShadows.value=N.state.directionalShadow,At.spotLights.value=N.state.spot,At.spotLightShadows.value=N.state.spotShadow,At.rectAreaLights.value=N.state.rectArea,At.ltc_1.value=N.state.rectAreaLTC1,At.ltc_2.value=N.state.rectAreaLTC2,At.pointLights.value=N.state.point,At.pointLightShadows.value=N.state.pointShadow,At.hemisphereLights.value=N.state.hemi,At.directionalShadowMap.value=N.state.directionalShadowMap,At.directionalShadowMatrix.value=N.state.directionalShadowMatrix,At.spotShadowMap.value=N.state.spotShadowMap,At.spotLightMatrix.value=N.state.spotLightMatrix,At.spotLightMap.value=N.state.spotLightMap,At.pointShadowMap.value=N.state.pointShadowMap,At.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Yt,V.uniformsList=null,Yt}function Ve(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=br.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function os(M,U){const H=It.get(M);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Os(M,U,H,V,N){U.isScene!==!0&&(U=Ot),b.resetTextureUnits();const ct=U.fog,_t=V.isMeshStandardMaterial?U.environment:null,bt=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ns,Tt=(V.isMeshStandardMaterial?k:v).get(V.envMap||_t),Vt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Yt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),At=!!H.morphAttributes.position,ae=!!H.morphAttributes.normal,_e=!!H.morphAttributes.color;let xe=ei;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(xe=y.toneMapping);const We=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,le=We!==void 0?We.length:0,Ct=It.get(V),bn=p.state.lights;if(at===!0&&(wt===!0||M!==x)){const rn=M===x&&V.id===S;ot.setState(V,M,rn)}let he=!1;V.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==bn.state.version||Ct.outputColorSpace!==bt||N.isBatchedMesh&&Ct.batching===!1||!N.isBatchedMesh&&Ct.batching===!0||N.isBatchedMesh&&Ct.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ct.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ct.instancing===!1||!N.isInstancedMesh&&Ct.instancing===!0||N.isSkinnedMesh&&Ct.skinning===!1||!N.isSkinnedMesh&&Ct.skinning===!0||N.isInstancedMesh&&Ct.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ct.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ct.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ct.instancingMorph===!1&&N.morphTexture!==null||Ct.envMap!==Tt||V.fog===!0&&Ct.fog!==ct||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==ot.numPlanes||Ct.numIntersection!==ot.numIntersection)||Ct.vertexAlphas!==Vt||Ct.vertexTangents!==Yt||Ct.morphTargets!==At||Ct.morphNormals!==ae||Ct.morphColors!==_e||Ct.toneMapping!==xe||Ct.morphTargetsCount!==le)&&(he=!0):(he=!0,Ct.__version=V.version);let cn=Ct.currentProgram;he===!0&&(cn=se(V,U,N));let bi=!1,Je=!1,as=!1;const Me=cn.getUniforms(),vn=Ct.uniforms;if(Rt.useProgram(cn.program)&&(bi=!0,Je=!0,as=!0),V.id!==S&&(S=V.id,Je=!0),bi||x!==M){Rt.buffers.depth.getReversed()?(pt.copy(M.projectionMatrix),Qh(pt),tu(pt),Me.setValue(O,"projectionMatrix",pt)):Me.setValue(O,"projectionMatrix",M.projectionMatrix),Me.setValue(O,"viewMatrix",M.matrixWorldInverse);const zn=Me.map.cameraPosition;zn!==void 0&&zn.setValue(O,Bt.setFromMatrixPosition(M.matrixWorld)),Qt.logarithmicDepthBuffer&&Me.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Me.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),x!==M&&(x=M,Je=!0,as=!0)}if(N.isSkinnedMesh){Me.setOptional(O,N,"bindMatrix"),Me.setOptional(O,N,"bindMatrixInverse");const rn=N.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Me.setValue(O,"boneTexture",rn.boneTexture,b))}N.isBatchedMesh&&(Me.setOptional(O,N,"batchingTexture"),Me.setValue(O,"batchingTexture",N._matricesTexture,b),Me.setOptional(O,N,"batchingIdTexture"),Me.setValue(O,"batchingIdTexture",N._indirectTexture,b),Me.setOptional(O,N,"batchingColorTexture"),N._colorsTexture!==null&&Me.setValue(O,"batchingColorTexture",N._colorsTexture,b));const cs=H.morphAttributes;if((cs.position!==void 0||cs.normal!==void 0||cs.color!==void 0)&&Ft.update(N,H,cn),(Je||Ct.receiveShadow!==N.receiveShadow)&&(Ct.receiveShadow=N.receiveShadow,Me.setValue(O,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(vn.envMap.value=Tt,vn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(vn.envMapIntensity.value=U.environmentIntensity),Je&&(Me.setValue(O,"toneMappingExposure",y.toneMappingExposure),Ct.needsLights&&ah(vn,as),ct&&V.fog===!0&&lt.refreshFogUniforms(vn,ct),lt.refreshMaterialUniforms(vn,V,z,et,p.state.transmissionRenderTarget[M.id]),br.upload(O,Ve(Ct),vn,b)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(br.upload(O,Ve(Ct),vn,b),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Me.setValue(O,"center",N.center),Me.setValue(O,"modelViewMatrix",N.modelViewMatrix),Me.setValue(O,"normalMatrix",N.normalMatrix),Me.setValue(O,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const rn=V.uniformsGroups;for(let zn=0,kn=rn.length;zn<kn;zn++){const Ua=rn[zn];D.update(Ua,cn),D.bind(Ua,cn)}}return cn}function ah(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function ch(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,U,H){It.get(M.texture).__webglTexture=U,It.get(M.depthTexture).__webglTexture=H;const V=It.get(M);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){const H=It.get(M);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,H=0){P=M,R=U,T=H;let V=!0,N=null,ct=!1,_t=!1;if(M){const Tt=It.get(M);if(Tt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(O.FRAMEBUFFER,null),V=!1;else if(Tt.__webglFramebuffer===void 0)b.setupRenderTarget(M);else if(Tt.__hasExternalTextures)b.rebindTextures(M,It.get(M.texture).__webglTexture,It.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const At=M.depthTexture;if(Tt.__boundDepthTexture!==At){if(At!==null&&It.has(At)&&(M.width!==At.image.width||M.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(M)}}const Vt=M.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(_t=!0);const Yt=It.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Yt[U])?N=Yt[U][H]:N=Yt[U],ct=!0):M.samples>0&&b.useMultisampledRTT(M)===!1?N=It.get(M).__webglMultisampledFramebuffer:Array.isArray(Yt)?N=Yt[H]:N=Yt,C.copy(M.viewport),B.copy(M.scissor),G=M.scissorTest}else C.copy(xt).multiplyScalar(z).floor(),B.copy(Gt).multiplyScalar(z).floor(),G=ie;if(Rt.bindFramebuffer(O.FRAMEBUFFER,N)&&V&&Rt.drawBuffers(M,N),Rt.viewport(C),Rt.scissor(B),Rt.setScissorTest(G),ct){const Tt=It.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,Tt.__webglTexture,H)}else if(_t){const Tt=It.get(M.texture),Vt=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Tt.__webglTexture,H||0,Vt)}S=-1},this.readRenderTargetPixels=function(M,U,H,V,N,ct,_t){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=It.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_t!==void 0&&(bt=bt[_t]),bt){Rt.bindFramebuffer(O.FRAMEBUFFER,bt);try{const Tt=M.texture,Vt=Tt.format,Yt=Tt.type;if(!Qt.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-V&&H>=0&&H<=M.height-N&&O.readPixels(U,H,V,N,Wt.convert(Vt),Wt.convert(Yt),ct)}finally{const Tt=P!==null?It.get(P).__webglFramebuffer:null;Rt.bindFramebuffer(O.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(M,U,H,V,N,ct,_t){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=It.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_t!==void 0&&(bt=bt[_t]),bt){const Tt=M.texture,Vt=Tt.format,Yt=Tt.type;if(!Qt.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=M.width-V&&H>=0&&H<=M.height-N){Rt.bindFramebuffer(O.FRAMEBUFFER,bt);const At=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,At),O.bufferData(O.PIXEL_PACK_BUFFER,ct.byteLength,O.STREAM_READ),O.readPixels(U,H,V,N,Wt.convert(Vt),Wt.convert(Yt),0);const ae=P!==null?It.get(P).__webglFramebuffer:null;Rt.bindFramebuffer(O.FRAMEBUFFER,ae);const _e=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Jh(O,_e,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,At),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ct),O.deleteBuffer(At),O.deleteSync(_e),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,U=null,H=0){M.isTexture!==!0&&(ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1]);const V=Math.pow(2,-H),N=Math.floor(M.image.width*V),ct=Math.floor(M.image.height*V),_t=U!==null?U.x:0,bt=U!==null?U.y:0;b.setTexture2D(M,0),O.copyTexSubImage2D(O.TEXTURE_2D,H,0,0,_t,bt,N,ct),Rt.unbindTexture()},this.copyTextureToTexture=function(M,U,H=null,V=null,N=0){M.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,M=arguments[1],U=arguments[2],N=arguments[3]||0,H=null);let ct,_t,bt,Tt,Vt,Yt,At,ae,_e;const xe=M.isCompressedTexture?M.mipmaps[N]:M.image;H!==null?(ct=H.max.x-H.min.x,_t=H.max.y-H.min.y,bt=H.isBox3?H.max.z-H.min.z:1,Tt=H.min.x,Vt=H.min.y,Yt=H.isBox3?H.min.z:0):(ct=xe.width,_t=xe.height,bt=xe.depth||1,Tt=0,Vt=0,Yt=0),V!==null?(At=V.x,ae=V.y,_e=V.z):(At=0,ae=0,_e=0);const We=Wt.convert(U.format),le=Wt.convert(U.type);let Ct;U.isData3DTexture?(b.setTexture3D(U,0),Ct=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(b.setTexture2DArray(U,0),Ct=O.TEXTURE_2D_ARRAY):(b.setTexture2D(U,0),Ct=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);const bn=O.getParameter(O.UNPACK_ROW_LENGTH),he=O.getParameter(O.UNPACK_IMAGE_HEIGHT),cn=O.getParameter(O.UNPACK_SKIP_PIXELS),bi=O.getParameter(O.UNPACK_SKIP_ROWS),Je=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,xe.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,xe.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Tt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Vt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Yt);const as=M.isDataArrayTexture||M.isData3DTexture,Me=U.isDataArrayTexture||U.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const vn=It.get(M),cs=It.get(U),rn=It.get(vn.__renderTarget),zn=It.get(cs.__renderTarget);Rt.bindFramebuffer(O.READ_FRAMEBUFFER,rn.__webglFramebuffer),Rt.bindFramebuffer(O.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let kn=0;kn<bt;kn++)as&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,It.get(M).__webglTexture,N,Yt+kn),M.isDepthTexture?(Me&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,It.get(U).__webglTexture,N,_e+kn),O.blitFramebuffer(Tt,Vt,ct,_t,At,ae,ct,_t,O.DEPTH_BUFFER_BIT,O.NEAREST)):Me?O.copyTexSubImage3D(Ct,N,At,ae,_e+kn,Tt,Vt,ct,_t):O.copyTexSubImage2D(Ct,N,At,ae,_e+kn,Tt,Vt,ct,_t);Rt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Me?M.isDataTexture||M.isData3DTexture?O.texSubImage3D(Ct,N,At,ae,_e,ct,_t,bt,We,le,xe.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(Ct,N,At,ae,_e,ct,_t,bt,We,xe.data):O.texSubImage3D(Ct,N,At,ae,_e,ct,_t,bt,We,le,xe):M.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,N,At,ae,ct,_t,We,le,xe.data):M.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,N,At,ae,xe.width,xe.height,We,xe.data):O.texSubImage2D(O.TEXTURE_2D,N,At,ae,ct,_t,We,le,xe);O.pixelStorei(O.UNPACK_ROW_LENGTH,bn),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,he),O.pixelStorei(O.UNPACK_SKIP_PIXELS,cn),O.pixelStorei(O.UNPACK_SKIP_ROWS,bi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Je),N===0&&U.generateMipmaps&&O.generateMipmap(Ct),Rt.unbindTexture()},this.copyTextureToTexture3D=function(M,U,H=null,V=null,N=0){return M.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,M=arguments[2],U=arguments[3],N=arguments[4]||0),ws('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,U,H,V,N)},this.initRenderTarget=function(M){It.get(M).__webglFramebuffer===void 0&&b.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?b.setTextureCube(M,0):M.isData3DTexture?b.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?b.setTexture2DArray(M,0):b.setTexture2D(M,0),Rt.unbindTexture()},this.resetState=function(){R=0,T=0,P=null,Rt.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}class bs{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ne(t),this.density=e}clone(){return new bs(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class d0 extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Jl extends wi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Lr=new A,Ir=new A,Ic=new ve,ps=new Sa,sr=new Us,go=new A,Dc=new A;class f0 extends Le{constructor(t=new Ie,e=new Jl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Lr.fromBufferAttribute(e,i-1),Ir.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Lr.distanceTo(Ir);t.setAttribute("lineDistance",new we(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(i),sr.radius+=r,t.ray.intersectsSphere(sr)===!1)return;Ic.copy(i).invert(),ps.copy(t.ray).applyMatrix4(Ic);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const p=h.getX(_),w=h.getX(_+1),E=rr(this,t,ps,c,p,w);E&&e.push(E)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(d),p=rr(this,t,ps,c,_,m);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const p=rr(this,t,ps,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=rr(this,t,ps,c,g-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function rr(s,t,e,n,i,r){const o=s.geometry.attributes.position;if(Lr.fromBufferAttribute(o,i),Ir.fromBufferAttribute(o,r),e.distanceSqToSegment(Lr,Ir,go,Dc)>n)return;go.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(go);if(!(c<t.near||c>t.far))return{distance:c,point:Dc.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Uc=new A,Nc=new A;class p0 extends f0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Uc.fromBufferAttribute(e,i),Nc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Uc.distanceTo(Nc);t.setAttribute("lineDistance",new we(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ba extends wi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Oc=new ve,da=new Sa,or=new Us,ar=new A;class Ql extends Le{constructor(t=new Ie,e=new ba){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(i),or.radius+=r,t.ray.intersectsSphere(or)===!1)return;Oc.copy(i).invert(),da.copy(t.ray).applyMatrix4(Oc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=l.getX(g);ar.fromBufferAttribute(u,m),Fc(ar,m,c,i,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)ar.fromBufferAttribute(u,g),Fc(ar,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Fc(s,t,e,n,i,r,o){const a=da.distanceSqToPoint(s);if(a<e){const c=new A;da.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ns extends ke{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new St:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,i=[],r=[],o=[],a=new A,c=new ve;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Oe(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Oe(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ta extends En{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new St){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class m0 extends Ta{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Aa(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const cr=new A,_o=new Aa,vo=new Aa,xo=new Aa;class g0 extends En{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new A){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(cr.subVectors(i[0],i[1]).add(i[0]),l=cr);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(cr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=cr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),_o.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),vo.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),xo.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(_o.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),vo.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),xo.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(_o.calc(c),vo.calc(c),xo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new A().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Bc(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function _0(s,t){const e=1-s;return e*e*t}function v0(s,t){return 2*(1-s)*s*t}function x0(s,t){return s*s*t}function Ts(s,t,e,n){return _0(s,t)+v0(s,e)+x0(s,n)}function M0(s,t){const e=1-s;return e*e*e*t}function y0(s,t){const e=1-s;return 3*e*e*s*t}function S0(s,t){return 3*(1-s)*s*s*t}function w0(s,t){return s*s*s*t}function As(s,t,e,n,i){return M0(s,t)+y0(s,e)+S0(s,n)+w0(s,i)}class th extends En{constructor(t=new St,e=new St,n=new St,i=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new St){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(As(t,i.x,r.x,o.x,a.x),As(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class E0 extends En{constructor(t=new A,e=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new A){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(As(t,i.x,r.x,o.x,a.x),As(t,i.y,r.y,o.y,a.y),As(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class eh extends En{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class b0 extends En{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nh extends En{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ts(t,i.x,r.x,o.x),Ts(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class T0 extends En{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ts(t,i.x,r.x,o.x),Ts(t,i.y,r.y,o.y),Ts(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ih extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Bc(a,c.x,l.x,h.x,u.x),Bc(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new St().fromArray(i))}return this}}var zc=Object.freeze({__proto__:null,ArcCurve:m0,CatmullRomCurve3:g0,CubicBezierCurve:th,CubicBezierCurve3:E0,EllipseCurve:Ta,LineCurve:eh,LineCurve3:b0,QuadraticBezierCurve:nh,QuadraticBezierCurve3:T0,SplineCurve:ih});class A0 extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new zc[i.type]().fromJSON(i))}return this}}class R0 extends A0{constructor(t){super(),this.type="Path",this.currentPoint=new St,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new eh(this.currentPoint.clone(),new St(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new nh(this.currentPoint.clone(),new St(t,e),new St(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new th(this.currentPoint.clone(),new St(t,e),new St(n,i),new St(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ih(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){const l=new Ta(t,e,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ra extends Ie{constructor(t=[new St(0,-.5),new St(.5,0),new St(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Oe(i,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new A,f=new St,d=new A,g=new A,_=new A;let m=0,p=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let w=0;w<=e;w++){const E=n+w*h*i,y=Math.sin(E),F=Math.cos(E);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*y,u.y=t[R].y,u.z=t[R].x*F,o.push(u.x,u.y,u.z),f.x=w/e,f.y=R/(t.length-1),a.push(f.x,f.y);const T=c[3*R+0]*y,P=c[3*R+1],S=c[3*R+0]*F;l.push(T,P,S)}}for(let w=0;w<e;w++)for(let E=0;E<t.length-1;E++){const y=E+w*t.length,F=y,R=y+t.length,T=y+t.length+1,P=y+1;r.push(F,R,P),r.push(T,P,R)}this.setIndex(r),this.setAttribute("position",new we(o,3)),this.setAttribute("uv",new we(a,2)),this.setAttribute("normal",new we(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ra(t.points,t.segments,t.phiStart,t.phiLength)}}class Ca extends Ra{constructor(t=1,e=1,n=4,i=8){const r=new R0;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new Ca(t.radius,t.length,t.capSegments,t.radialSegments)}}class Pa extends Ie{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new A,h=new St;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(a,3)),this.setAttribute("uv",new we(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pa(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class kt extends Ie{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;w(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new we(u,3)),this.setAttribute("normal",new we(f,3)),this.setAttribute("uv",new we(d,2));function w(){const y=new A,F=new A;let R=0;const T=(e-t)/n;for(let P=0;P<=r;P++){const S=[],x=P/r,C=x*(e-t)+t;for(let B=0;B<=i;B++){const G=B/i,X=G*c+a,Z=Math.sin(X),q=Math.cos(X);F.x=C*Z,F.y=-x*n+m,F.z=C*q,u.push(F.x,F.y,F.z),y.set(Z,T,q).normalize(),f.push(y.x,y.y,y.z),d.push(G,1-x),S.push(g++)}_.push(S)}for(let P=0;P<i;P++)for(let S=0;S<r;S++){const x=_[S][P],C=_[S+1][P],B=_[S+1][P+1],G=_[S][P+1];(t>0||S!==0)&&(h.push(x,C,G),R+=3),(e>0||S!==r-1)&&(h.push(C,B,G),R+=3)}l.addGroup(p,R,0),p+=R}function E(y){const F=g,R=new St,T=new A;let P=0;const S=y===!0?t:e,x=y===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,m*x,0),f.push(0,x,0),d.push(.5,.5),g++;const C=g;for(let B=0;B<=i;B++){const X=B/i*c+a,Z=Math.cos(X),q=Math.sin(X);T.x=S*q,T.y=m*x,T.z=S*Z,u.push(T.x,T.y,T.z),f.push(0,x,0),R.x=Z*.5+.5,R.y=q*.5*x+.5,d.push(R.x,R.y),g++}for(let B=0;B<i;B++){const G=F+B,X=C+B;y===!0?h.push(X,X+1,G):h.push(X+1,X,G),P+=3}l.addGroup(p,P,y===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Dr extends kt{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Dr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class en extends Ie{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new A,f=new A,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const w=[],E=p/n;let y=0;p===0&&o===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let F=0;F<=e;F++){const R=F/e;u.x=-t*Math.cos(i+R*r)*Math.sin(o+E*a),u.y=t*Math.cos(o+E*a),u.z=t*Math.sin(i+R*r)*Math.sin(o+E*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(R+y,1-E),w.push(l++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){const E=h[p][w+1],y=h[p][w],F=h[p+1][w],R=h[p+1][w+1];(p!==0||o>0)&&d.push(E,y,R),(p!==n-1||c<Math.PI)&&d.push(y,F,R)}this.setIndex(d),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(_,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new en(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class nn extends Ie{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new A,u=new A,f=new A;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const _=g/i*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const _=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,w=(i+1)*d+g;o.push(_,m,w),o.push(m,p,w)}this.setIndex(o),this.setAttribute("position",new we(a,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Lt extends wi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dl,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class La extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Mo=new ve,kc=new A,Gc=new A;class sh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wa,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;kc.setFromMatrixPosition(t.matrixWorld),e.position.copy(kc),Gc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gc),e.updateMatrixWorld(),Mo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Mo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class C0 extends sh{constructor(){super(new $e(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Cr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class P0 extends La{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new C0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Hc=new ve,ms=new A,yo=new A;class L0 extends sh{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new pe(2,1,1,1),new pe(0,1,1,1),new pe(3,1,1,1),new pe(1,1,1,1),new pe(3,0,1,1),new pe(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ms.setFromMatrixPosition(t.matrixWorld),n.position.copy(ms),yo.copy(n.position),yo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(yo),n.updateMatrixWorld(),i.makeTranslation(-ms.x,-ms.y,-ms.z),Hc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hc)}}class Ur extends La{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new L0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class I0 extends La{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class D0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Vc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Vc(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ma);function rh(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Ie;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const u=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Wc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);const g=Wc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Wc(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Ze(o,e,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){const _=h.getComponent(f,g);a.setComponent(f+u,g,_)}}else o.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function $i(s,t){return s+Math.random()*(t-s)}function Ee(s){s.traverse(t=>{t.isMesh&&(t.castShadow=!0)})}function qc(s,t){const e=new Ut,n=new I(new it(1,.5,2.1),s);n.position.y=.25,e.add(n);const i=new I(new it(.9,.12,2),t);i.position.y=.56,e.add(i);const r=new I(new it(1,.6,.08),s);r.position.set(0,.8,-1.05),e.add(r);for(const[o,a]of[[-.45,-.95],[.45,-.95],[-.45,.95],[.45,.95]]){const c=new I(new kt(.03,.03,.5,6),s);c.position.set(o,0,a),e.add(c)}return Ee(e),e}function U0(s,t){const e=new Ut,n=new I(new it(.9,.1,2.2),s);n.position.y=.9,n.rotation.x=$i(-.05,.05),e.add(n);const i=new I(new kt(.08,.12,.9,8),s);i.position.y=.45,e.add(i);const r=new I(new kt(.03,.03,1.8,6),s);r.position.set(.6,2.8,0),r.rotation.z=-.3,e.add(r);const o=new I(new it(.4,.08,.3),t);return o.position.set(.2,2.6,0),e.add(o),Ee(e),e}function N0(s,t){const e=new Ut,n=new I(new it(.8,2,2.2),s);n.position.y=1,e.add(n);for(let i=0;i<3;i++){const r=new I(new it(.3,.04,.03),t);r.position.set(0,.4+i*.65,1.12),e.add(r)}return Ee(e),e}function O0(s,t){const e=new Ut,n=new I(new it(1.8,.9,.7),s);n.position.y=.45,e.add(n);const i=new I(new it(.6,.04,.5),t);i.position.set(.4,.92,0),e.add(i);for(const[r,o]of[[.25,-.1],[.55,-.1],[.25,.1],[.55,.1]]){const a=new I(new kt(.08,.08,.02,12),t);a.position.set(r,.94,o),e.add(a)}return Ee(e),e}function Xc(s){const t=new Ut,e=new I(new it(1.4,2.2,.4),s);e.position.y=1.1,t.add(e);for(let n=0;n<4;n++){const i=new I(new it(1.36,.03,.38),s);i.position.set(0,.3+n*.5,0),t.add(i)}return Ee(t),t}function F0(s,t){const e=new Ut,n=new I(new kt(.25,.3,.5,8),s);n.position.y=.25,e.add(n);const i=new I(new it(.6,.1,1.6),t);i.position.set(0,.65,.1),i.rotation.x=-.2,e.add(i);const r=new I(new it(.08,.06,.5),s);return r.position.set(.35,.75,.1),e.add(r),Ee(e),e}function B0(s,t){const e=new Ut,n=new I(new it(1,.3,2.1),s);n.position.y=.15,e.add(n);const i=new I(new it(.85,.08,1.9),t);i.position.y=.34,e.add(i);for(const r of[-.5,.5]){const o=new I(new it(.9,.02,.06),s);o.position.set(0,.4,r),e.add(o)}return Ee(e),e}function z0(s,t){const e=new Ut,n=new I(new it(.7,.1,.8),t);n.position.set(0,.7,0),e.add(n);const i=new I(new it(.7,1,.1),t);i.position.set(0,1.2,-.4),i.rotation.x=.15,e.add(i);const r=new I(new kt(.2,.25,.7,8),s);r.position.y=.35,e.add(r);const o=new I(new kt(.08,.08,.15,8),s);return o.position.set(0,1.75,-.45),e.add(o),Ee(e),e}function Yc(s,t){const e=new Ut,n=new I(new it(1,.08,1),s);n.position.y=.04,e.add(n);const i=new I(new kt(.02,.02,1,6),s);i.rotation.z=Math.PI/2,i.position.set(0,2,-.5),e.add(i);const r=new I(new Ke(.9,1.6),t);return r.position.set(0,1.2,-.48),e.add(r),Ee(e),e}function lr(s,t){const e=new Ut,n=new I(new it(.5,.06,.5),s);n.position.y=.55,e.add(n);const i=new I(new it(.5,.7,.06),s);i.position.set(0,.9,-.22),e.add(i);const r=new nn(.28,.03,8,16);for(const o of[-.28,.28]){const a=new I(r,t);a.position.set(o,.28,-.1),a.rotation.y=Math.PI/2,e.add(a)}return Ee(e),e}function $c(s){const t=new Ut,e=new I(new kt(.02,.02,2,6),s);e.position.y=1,t.add(e);const n=new I(new kt(.2,.2,.04,8),s);n.position.y=.02,t.add(n);const i=new I(new nn(.06,.015,6,8,Math.PI),s);return i.position.set(0,2,0),t.add(i),Ee(t),t}function hr(s,t){const e=new Ut,n=new I(new it(.5,.4,.06),s);n.position.y=1.5,e.add(n);const i=new I(new Ke(.44,.34),t);i.position.set(0,1.5,.035),e.add(i);const r=new I(new kt(.03,.03,1.5,6),s);return r.position.y=.75,e.add(r),Ee(e),e}function ur(s,t){const e=new Ut,n=new I(new it(1.2,.06,.7),s);n.position.y=.76,e.add(n);for(const[i,r]of[[-.55,-.3],[.55,-.3],[-.55,.3],[.55,.3]]){const o=new I(new it(.06,.76,.06),t);o.position.set(i,.38,r),e.add(o)}for(let i=0;i<3;i++){const r=new I(new Ke(.2,.28),s);r.position.set($i(-.3,.3),.8,$i(-.2,.2)),r.rotation.x=-Math.PI/2,r.rotation.z=$i(-.5,.5),e.add(r)}return Ee(e),e}function dr(s){const t=new Ut,e=new I(new it(.6,.12,.45),s);e.position.y=.85,t.add(e);const n=new I(new it(.15,.85,.15),s);n.position.y=.425,t.add(n);const i=new I(new kt(.02,.02,.2,6),s);return i.position.set(0,1,-.15),t.add(i),Ee(t),t}function Ln(s){const t=new Ut,e=new I(new kt(.18,.22,.45,10),s);return e.position.y=.225,t.add(e),Ee(t),t}function gs(s,t){const e=new Ut,n=new I(new it(.55,2,.5),s);n.position.y=1,e.add(n);const i=new I(new it(.04,.15,.03),t);return i.position.set(.22,1.2,.26),e.add(i),Ee(e),e}function Kc(s,t){const e=new Ut,n=new I(new it(1.6,.35,.7),s);n.position.y=.35,e.add(n);const i=new I(new it(1.6,.5,.15),s);i.position.set(0,.75,-.28),e.add(i);for(const r of[-.75,.75]){const o=new I(new it(.15,.4,.7),s);o.position.set(r,.55,0),e.add(o)}return Ee(e),e}function k0(s,t,e){const n=new Ut,i=new I(new kt(.055,.055,.2,10),t);i.rotation.z=Math.PI/2,n.add(i);for(const o of[-1,1]){const a=new I(new kt(.07,.07,.07,10),e);a.rotation.z=Math.PI/2,a.position.x=o*.11,n.add(a)}const r=new I(new it(.05,.1,.1),s);return r.position.y=.008,n.add(r),Ee(n),n}function G0(s){const t=new Ut,e=new I(new kt(.035,.035,.78,8),s);e.rotation.z=Math.PI/2,t.add(e);const n=new I(new nn(.09,.032,6,12,Math.PI*1.2),s);n.position.set(-.39,.02,0),n.rotation.z=-.6,t.add(n);const i=new I(new it(.16,.035,.09),s);return i.position.set(.44,0,0),i.rotation.z=.22,t.add(i),Ee(t),t}function H0(s,t){const e=new Ut,n=new I(new kt(.05,.05,.17,10),s);e.add(n);const i=new I(new kt(.022,.035,.05,8),s);i.position.y=.11,e.add(i);const r=new I(new kt(.026,.026,.028,8),t);return r.position.y=.145,e.add(r),Ee(e),e}function V0(s,t){const e=new Ut,n=new I(new kt(.075,.075,.24,12),s);n.rotation.z=Math.PI/2,e.add(n);const i=new I(new kt(.079,.079,.05,12),t);i.rotation.z=Math.PI/2,e.add(i);const r=new I(new kt(.035,.035,.03,8),t);return r.rotation.z=Math.PI/2,r.position.x=.13,e.add(r),Ee(e),e}function W0(s,t,e){const n=new Ut,i=new it(e*.94,.16,.08);for(let r=0;r<5;r++){const o=new I(i,s);o.position.set(0,.45+r*.42,$i(-.03,.03)),o.rotation.z=$i(-.05,.05),n.add(o)}for(const r of[.7,-.7]){const o=new I(new it(e*1.02,.11,.06),t);o.position.set(0,1.35,.06),o.rotation.z=r,n.add(o)}return Ee(n),n}const qt=256;function _n(s=qt){const t=document.createElement("canvas");t.width=s,t.height=s;const e=t.getContext("2d");if(!e)throw new Error("2D canvas context is unavailable");return e}function rt(s,t){return s+Math.random()*(t-s)}function si(s,t){const e=s.getImageData(0,0,s.canvas.width,s.canvas.height),n=e.data;for(let i=0;i<n.length;i+=4){const r=(Math.random()-.5)*t;n[i]+=r,n[i+1]+=r,n[i+2]+=r}s.putImageData(e,0,0)}function He(s,t,e,n,i,r,o){const a=s.canvas.width;for(let c=0;c<t;c++){const l=rt(0,a),h=rt(0,a),u=rt(r,o),f=s.createRadialGradient(l,h,0,l,h,u);f.addColorStop(0,e.replace("ALPHA",rt(n,i).toFixed(3))),f.addColorStop(1,e.replace("ALPHA","0")),s.fillStyle=f,s.fillRect(l-u,h-u,u*2,u*2)}}function Ei(s,t=1,e=1,n=!0){const i=new Ns(s.canvas);return i.wrapS=Rs,i.wrapT=Rs,i.repeat.set(t,e),i.anisotropy=2,n&&(i.colorSpace=Pe),i}function q0(){const s=_n();s.fillStyle="#5a5e56",s.fillRect(0,0,qt,qt),He(s,80,"rgba(255,255,255,ALPHA)",.02,.07,8,52),He(s,60,"rgba(0,0,0,ALPHA)",.05,.16,10,60);for(let t=0;t<24;t++){const e=rt(2,11),n=rt(60,220),i=s.createLinearGradient(0,0,0,n);i.addColorStop(0,`rgba(12,10,8,${rt(.18,.4).toFixed(3)})`),i.addColorStop(1,"rgba(12,10,8,0)"),s.fillStyle=i,s.save(),s.translate(rt(0,qt),rt(-20,qt*.4)),s.fillRect(-e/2,0,e,n),s.restore()}s.strokeStyle="rgba(0,0,0,0.4)",s.lineWidth=1;for(let t=0;t<14;t++){s.beginPath();let e=rt(0,qt),n=rt(0,qt);s.moveTo(e,n);for(let i=0;i<6;i++)e+=rt(-26,26),n+=rt(-26,26),s.lineTo(e,n);s.stroke()}return si(s,30),Ei(s,2,2)}function X0(){const s=_n();s.fillStyle="#151517",s.fillRect(0,0,qt,qt);const t=qt/4;for(let e=0;e<qt;e+=t)for(let n=0;n<qt;n+=t){const r=((n+e)/t%2===0?30:20)+rt(-4,6);s.fillStyle=`rgb(${r.toFixed(0)},${r.toFixed(0)},${(r+2).toFixed(0)})`,s.fillRect(n+1,e+1,t-2,t-2),s.strokeStyle="rgba(0,0,0,0.75)",s.lineWidth=2,s.strokeRect(n+.5,e+.5,t-1,t-1)}return He(s,90,"rgba(0,0,0,ALPHA)",.08,.28,6,40),He(s,30,"rgba(60,45,25,ALPHA)",.04,.12,8,34),si(s,26),Ei(s,1,1)}function Y0(){const s=_n();s.fillStyle="#141416",s.fillRect(0,0,qt,qt);const t=qt/2;for(let e=0;e<qt;e+=t)for(let n=0;n<qt;n+=t)s.strokeStyle="rgba(0,0,0,0.8)",s.lineWidth=3,s.strokeRect(n+1.5,e+1.5,t-3,t-3);return He(s,70,"rgba(40,30,18,ALPHA)",.05,.2,12,50),He(s,40,"rgba(0,0,0,ALPHA)",.1,.3,10,44),si(s,22),Ei(s,1,1)}function $0(){const s=_n();s.fillStyle="#3b2f26",s.fillRect(0,0,qt,qt),He(s,60,"rgba(120,60,20,ALPHA)",.06,.24,8,44),He(s,50,"rgba(0,0,0,ALPHA)",.08,.26,6,30),s.strokeStyle="rgba(190,180,165,0.22)",s.lineWidth=1;for(let t=0;t<40;t++){const e=rt(0,qt),n=rt(0,qt);s.beginPath(),s.moveTo(e,n),s.lineTo(e+rt(-40,40),n+rt(-6,6)),s.stroke()}for(let t=18;t<qt;t+=52)for(let e=14;e<qt;e+=46)s.fillStyle="rgba(150,140,125,0.5)",s.beginPath(),s.arc(e,t,3.2,0,Math.PI*2),s.fill(),s.fillStyle="rgba(0,0,0,0.5)",s.beginPath(),s.arc(e+1,t+1,2,0,Math.PI*2),s.fill();return si(s,22),Ei(s,1,1)}function K0(){const s=_n(128);s.clearRect(0,0,128,128);const t=(n,i,r,o)=>{const a=s.createRadialGradient(n,i,0,n,i,r);a.addColorStop(0,`rgba(96,4,6,${o})`),a.addColorStop(.6,`rgba(66,2,4,${o*.75})`),a.addColorStop(1,"rgba(40,0,0,0)"),s.fillStyle=a,s.fillRect(n-r,i-r,r*2,r*2)};t(64,64,42,.95);for(let n=0;n<22;n++){const i=rt(0,Math.PI*2),r=rt(20,58);t(64+Math.cos(i)*r,64+Math.sin(i)*r,rt(3,12),rt(.4,.85))}for(let n=0;n<6;n++)s.strokeStyle=`rgba(70,3,5,${rt(.25,.55).toFixed(2)})`,s.lineWidth=rt(2,7),s.beginPath(),s.moveTo(64,64),s.lineTo(rt(0,128),rt(0,128)),s.stroke();const e=new Ns(s.canvas);return e.colorSpace=Pe,e}function j0(s){const e=_n(512);e.clearRect(0,0,512,512),e.textAlign="center",e.textBaseline="middle",e.font='bold 84px Georgia, "Times New Roman", serif';const n=s.split(" "),i=[];let r="";for(const l of n){const h=r?`${r} ${l}`:l;e.measureText(h).width>452&&r?(i.push(r),r=l):r=h}r&&i.push(r);const o=96,a=512/2-(i.length-1)*o/2;for(let l=0;l<3;l++)e.fillStyle=`rgba(${94-l*8},4,6,${.5-l*.12})`,i.forEach((h,u)=>{e.fillText(h,512/2+(l-1)*2,a+u*o+(l-1)*2)});e.fillStyle="rgba(80,3,5,0.6)";for(let l=0;l<40;l++){const h=i[Math.floor(Math.random()*i.length)],u=i.indexOf(h),f=a+u*o,d=rt(512*.18,512*.82),g=rt(10,70);e.globalAlpha=rt(.12,.4),e.fillRect(d,f+rt(16,30),rt(1.5,5),g)}e.globalAlpha=1,e.globalCompositeOperation="destination-out";for(let l=0;l<130;l++)e.beginPath(),e.arc(rt(0,512),rt(0,512),rt(1,6),0,Math.PI*2),e.fill();e.globalCompositeOperation="source-over";const c=new Ns(e.canvas);return c.colorSpace=Pe,c}function Z0(){const s=_n();s.fillStyle="#1b1c1e",s.fillRect(0,0,qt,qt),He(s,70,"rgba(0,0,0,ALPHA)",.1,.35,10,60),He(s,40,"rgba(70,66,58,ALPHA)",.05,.16,8,40),He(s,18,"rgba(30,26,20,ALPHA)",.08,.24,14,48),s.strokeStyle="rgba(0,0,0,0.55)";for(let t=0;t<18;t++){s.lineWidth=rt(1,2.6),s.beginPath();let e=rt(0,qt),n=rt(0,qt);s.moveTo(e,n);for(let i=0;i<5;i++)e+=rt(-34,34),n+=rt(-34,34),s.lineTo(e,n);s.stroke()}for(let t=0;t<260;t++)s.fillStyle=`rgba(${rt(60,120).toFixed(0)},${rt(58,112).toFixed(0)},${rt(50,100).toFixed(0)},0.35)`,s.fillRect(rt(0,qt),rt(0,qt),rt(1,2.6),rt(1,2.6));return si(s,34),Ei(s,1,1)}function J0(){const s=_n();s.fillStyle="#2c2b28",s.fillRect(0,0,qt,qt),He(s,70,"rgba(0,0,0,ALPHA)",.08,.26,10,58),He(s,50,"rgba(150,146,132,ALPHA)",.02,.08,8,44),s.strokeStyle="rgba(0,0,0,0.5)",s.lineWidth=3;for(const t of[qt/2])s.beginPath(),s.moveTo(0,t),s.lineTo(qt,t),s.stroke();for(let t=0;t<20;t++)s.fillStyle=`rgba(18,22,16,${rt(.06,.2).toFixed(3)})`,s.fillRect(rt(0,qt),qt-rt(20,90),rt(4,16),rt(20,90));for(let t=0;t<16;t++)s.fillStyle=`rgba(20,16,10,${rt(.08,.24).toFixed(3)})`,s.fillRect(rt(0,qt),0,rt(2,9),rt(30,150));return si(s,26),Ei(s,1,1)}function jc(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d");if(!n)throw new Error("2D canvas context is unavailable");const i=n.createLinearGradient(0,0,0,512);i.addColorStop(0,"#05070f"),i.addColorStop(.45,"#0a0f1c"),i.addColorStop(.72,"#161a24"),i.addColorStop(.88,"#2a2119"),i.addColorStop(1,"#0b0a09"),n.fillStyle=i,n.fillRect(0,0,1024,512);for(let l=0;l<420;l++){const h=rt(0,317.44),u=1-h/(512*.7);n.fillStyle=`rgba(220,226,255,${(rt(.15,.75)*u).toFixed(3)})`;const f=rt(.7,1.9);n.fillRect(rt(0,1024),h,f,f)}const r=1024*.24,o=512*.24,a=n.createRadialGradient(r,o,0,r,o,96);a.addColorStop(0,"rgba(226,232,255,0.5)"),a.addColorStop(.35,"rgba(180,196,235,0.15)"),a.addColorStop(1,"rgba(120,140,200,0)"),n.fillStyle=a,n.fillRect(r-96,o-96,192,192),n.fillStyle="#e8ecff",n.beginPath(),n.arc(r,o,26,0,Math.PI*2),n.fill(),n.fillStyle="rgba(150,160,190,0.4)";for(let l=0;l<7;l++)n.beginPath(),n.arc(r+rt(-14,14),o+rt(-14,14),rt(2,7),0,Math.PI*2),n.fill();for(let l=0;l<90;l++){const h=rt(0,1024),u=rt(512*.5,512*.78),f=rt(60,240);n.fillStyle=`rgba(24,26,32,${rt(.05,.2).toFixed(3)})`,n.beginPath(),n.ellipse(h,u,f,rt(8,26),0,0,Math.PI*2),n.fill()}const c=new Ns(e);return c.colorSpace=Pe,c.mapping=Ar,c}function Q0(){const s=_n();s.fillStyle="#241f19",s.fillRect(0,0,qt,qt),He(s,80,"rgba(12,9,6,ALPHA)",.1,.34,10,60),He(s,60,"rgba(74,62,44,ALPHA)",.04,.16,8,46);for(let t=0;t<14;t++){const e=rt(0,qt);s.fillStyle=`rgba(14,16,18,${rt(.1,.26).toFixed(3)})`,s.fillRect(0,e,qt,rt(2,7))}for(let t=0;t<200;t++)s.fillStyle=`rgba(${rt(40,80).toFixed(0)},${rt(36,70).toFixed(0)},${rt(28,56).toFixed(0)},0.4)`,s.fillRect(rt(0,qt),rt(0,qt),rt(1,3),rt(1,3));return si(s,30),Ei(s,1,1)}function tg(){const s=_n(64),t=s.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,0.9)"),t.addColorStop(.35,"rgba(255,255,255,0.28)"),t.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=t,s.fillRect(0,0,64,64);const e=new Ns(s.canvas);return e.colorSpace=Pe,e}function eg(){const t=_n(640),e=640/2,n=640*.47,i=t.createRadialGradient(e,n,10,e,n,640*.72);i.addColorStop(0,"#3a0507"),i.addColorStop(.5,"#160203"),i.addColorStop(1,"#000000"),t.fillStyle=i,t.fillRect(0,0,640,640);const r=640*.62,o=640*.46,a=t.createRadialGradient(e,n-r*.15,12,e,n,r*.72);a.addColorStop(0,"#cdc3ae"),a.addColorStop(.55,"#8d8272"),a.addColorStop(1,"#2a241f"),t.save(),t.beginPath(),t.ellipse(e,n,o/2,r/2,0,0,Math.PI*2),t.fillStyle=a,t.fill(),t.clip();for(let u=0;u<220;u++){const f=rt(0,640),d=rt(0,640),g=rt(4,34),_=t.createRadialGradient(f,d,0,f,d,g),m=Math.random()<.6;_.addColorStop(0,m?`rgba(20,12,10,${rt(.1,.4).toFixed(2)})`:`rgba(180,150,120,${rt(.05,.2).toFixed(2)})`),_.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=_,t.fillRect(f-g,d-g,g*2,g*2)}for(let u=0;u<26;u++){const f=rt(e-o*.45,e+o*.45),d=rt(n-r*.4,n+r*.1),g=rt(30,200),_=rt(3,12),m=t.createLinearGradient(0,d,0,d+g);m.addColorStop(0,`rgba(120,4,8,${rt(.5,.9).toFixed(2)})`),m.addColorStop(1,"rgba(70,0,4,0)"),t.fillStyle=m,t.fillRect(f,d,_,g)}for(const u of[-1,1]){const f=e+u*o*.24,d=n-r*.16,g=o*.17,_=r*.14;t.beginPath(),t.ellipse(f,d,g,_,u*.18,0,Math.PI*2),t.fillStyle="#080404",t.fill(),t.strokeStyle="rgba(130,10,10,0.85)",t.lineWidth=7,t.stroke();const m=t.createRadialGradient(f,d,1,f,d,g*.95);m.addColorStop(0,"#fff2e8"),m.addColorStop(.25,"#ff3b23"),m.addColorStop(.6,"rgba(140,0,0,0.85)"),m.addColorStop(1,"rgba(60,0,0,0)"),t.fillStyle=m,t.beginPath(),t.arc(f,d,g*.92,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(f,d,g*.18,0,Math.PI*2),t.fillStyle="#120000",t.fill(),t.strokeStyle="rgba(30,4,4,0.8)",t.lineWidth=2;for(let p=0;p<7;p++){const w=rt(0,Math.PI*2);t.beginPath(),t.moveTo(f+Math.cos(w)*g,d+Math.sin(w)*_),t.lineTo(f+Math.cos(w)*g*rt(1.3,2.1),d+Math.sin(w)*_*rt(1.3,2.1)),t.stroke()}}const c=n+r*.2,l=o*.66;t.beginPath(),t.ellipse(e,c,l/2,r*.17,0,0,Math.PI*2),t.fillStyle="#0a0103",t.fill(),t.strokeStyle="rgba(120,12,14,0.9)",t.lineWidth=6,t.stroke();const h=11;for(let u=0;u<h;u++){const f=u/(h-1),d=e-l/2+f*l,g=Math.sin(u*2.7)*.28+1,_=r*.075*g;t.beginPath(),t.moveTo(d-l/(h*1.5),c-r*.16),t.lineTo(d+l/(h*1.5),c-r*.16),t.lineTo(d,c-r*.16+_),t.closePath(),t.fillStyle=u%3===0?"#8e8265":"#d6ccac",t.fill(),t.beginPath(),t.moveTo(d-l/(h*1.5),c+r*.16),t.lineTo(d+l/(h*1.5),c+r*.16),t.lineTo(d,c+r*.16-_*1.05),t.closePath(),t.fillStyle=u%4===0?"#7d7052":"#c9bfa0",t.fill()}t.restore(),t.strokeStyle="rgba(255,240,230,0.05)",t.lineWidth=1;for(let u=0;u<40;u++){t.beginPath();const f=rt(0,640),d=rt(0,640);t.moveTo(f,d),t.lineTo(f+rt(-90,90),d+rt(-90,90)),t.stroke()}return si(t,30),t.canvas.toDataURL("image/png")}const Y=4,de=3.5,ki=.2,Mi=1.7,fn=["#############+##############","#..........................#","#.#######.###+####.#######.#","#.#ttttt#.#uuuuuu#.#vvvvv#.#","#.#ttttt#.#uuuuuu#.#vvvvv#.#","#.#ttttt#.#uuuuuu#.#vvvvv#.#","#.###+###.###+####.###+###.#","#..........................#","#.###+###.###+####.###+###.#","#.#yyyyy#.#xxxxxx#.#zzzzz#.#","#.#yyyyy#.#xxxxxx#.#zzzzz#.#","#.#yyyyy#.#xxxxxx#.#zzzzz#.#","#.###+###.###+####.###+###.#","#wwwwwwwwwwwwwwwwwwwwwwwwww#","#wwwwwwwwwwwwwwwwwwwwwwwwww#","##+#########################","#aaa#.#bb#cc#.#dd#ee#.#ffff#","#aaa+.+bb#cc+.+dd#ee+.+ffff#","#aaa#.#bb#cc#.#dd#ee#.#ffff#","##+##.#+##+##.#+##+##.##+###","#..........................#","##+##.#+##+##.#+##+##.##+###","#ggg#.#hh#ii#.#jj#kk#.#mmmm#","#ggg+.+hh#ii+.+jj#kk+.+mmmm#","#ggg#.#hh#ii#.#jj#kk#.#mmmm#","#ggg+.+hh#ii+.+jj#kk+.+mmmm#","#ggg#.#hh#ii#.#jj#kk#.#mmmm#","##+##.#+##+##.#+##+##.##+###","#..........................#","##+##.#+##+##.#+##+##.##+###","#nnn#.#oo#pp#.#qq#rr#.#ssss#","#nnn+.+oo#pp+.+qq#rr+.+ssss#","#nnn#.#oo#pp#.#qq#rr#.#ssss#","#####+###############+######","#..........................#","##+##.#+##+##.#+##+##.##+###","#AAA#.#BB#CC#.#DD#EE#.#FFFF#","#AAA#.#BB#CC#.#DD#EE#.#FFFF#","#AAA#.#BB#CC#.#DD#EE#.#FFFF#","##+##.#+##+##.#+##+##.##+###","#GGG#.#HH#II#.#JJ#KK#.#LLLL#","#GGG#.#HH#II#.#JJ#KK#.#LLLL#","#GGG#.#HH#II#.#JJ#KK#.#LLLL#","##+##.#+##+##.#+##+##.##+###","#..........................#","##+##.#+##+##.#+##+##.##+###","#MMM#.#NN#OO#.#PP#QQ#.#RRRR#","#MMM#.#NN#OO#.#PP#QQ#.#RRRR#","#MMM#.#NN#OO#.#PP#QQ#.#RRRR#","##+##.#+##+##.#+##+##.##+###","#..........................#","##+##.#+##+##.#+##+##.##+###","#SSS#.#TT#UU#.#VV#WW#.#XXXX#","#SSS#.#TT#UU#.#VV#WW#.#XXXX#","#SSS#.#TT#UU#.#VV#WW#.#XXXX#","##+##.#+##+##.#+##+##.##+###","#..........................#","############################"],dn=15,fa=dn-1,ng=[{row:35,col:5},{row:35,col:20}];function ig(s){return s<dn?-1:s<=34||s<=36?1:s<=42?2:s<=48?3:(s<=54,4)}function sg(s){switch(s){case-1:return"HOVLI";case 1:return"1-QAVAT";case 2:return"2-QAVAT";case 3:return"CHUQUR PODVAL";case 4:return"3-QAVAT";default:return""}}const me=28,ze=58,oh={a:{name:"QABULXONA",subtitle:"Chiqish eshigi shu yerda"},b:{name:"TELEFON MARKAZI",subtitle:"Simlar uzilgan — faqat shitirlash eshitiladi"},c:{name:"HAMSHIRA XONASI",subtitle:"Kimdir hozirgina chiqib ketgan"},d:{name:"XONA 201",subtitle:"Karavotlar bo‘sh emas"},e:{name:"XONA 202",subtitle:"Devorda tirnoq izlari"},f:{name:"OMBORXONA",subtitle:"Eshik tashqaridan qulflangan"},g:{name:"KUTUBXONA",subtitle:"Har bir bemorning ismi yozilgan"},h:{name:"OPERATSIYA XONASI",subtitle:"Qon hali qurimagan"},i:{name:"INTENSIV TERAPIYA",subtitle:"Monitorlar jim"},j:{name:"RENTGEN XONASI",subtitle:"Suratlar devorga mixlangan"},k:{name:"LABORATORIYA",subtitle:"Namunalar hali ham sovuq"},m:{name:"GENERATOR XONASI",subtitle:"Elektr shu yerdan boshqariladi"},n:{name:"XONA 101",subtitle:"Kundaliklar yirtilgan"},o:{name:"MORGNIY",subtitle:"Bu yerda hamma narsa sovuq"},p:{name:"ARXIV",subtitle:"Hujjatlar yoqib yuborilgan"},q:{name:"DUSH XONASI",subtitle:"Kranlardan qon oqadi"},r:{name:"OSHXONA",subtitle:"Idishlar hali yuvilmagan"},s:{name:"XONA 102",subtitle:"Deraza tashqarisida hech narsa yo‘q"},t:{name:"PODSTANSIYA",subtitle:"Asosiy darvoza quvvati shu yerdan o‘tadi"},u:{name:"DARVOZA MAYDONI",subtitle:"Qochish yo‘li shu yerda tugaydi"},v:{name:"QABRISTON",subtitle:"Kasalxona o‘liklarini shu yerga ko‘mishardi"},w:{name:"HOVLI",subtitle:"Kasalxona ortidagi bo‘sh hovli"},x:{name:"AVTOTURARGOH",subtitle:"Tez yordam mashinasi hali ham shu yerda"},y:{name:"QO‘RIQXONA",subtitle:"Chiroq yonib turgan edi — kim yoqqan?"},z:{name:"KREMATORIY",subtitle:"Bu yerda hech narsa qolmadi"},A:{name:"BOSH SHIFOKOR XONASI",subtitle:"Protokol 7 shu yerda imzolangan"},B:{name:"KIR YUVISH XONASI",subtitle:"Mashinada hali ham qonli kiyimlar"},C:{name:"OSHXONA",subtitle:"Ovqat hech qachon tarqatilmagan"},D:{name:"BOLALAR PALATASI",subtitle:"O‘yinchoqlar devor bo‘ylab tizilgan"},E:{name:"KUZATUV XONASI",subtitle:"Bir tomonlama oyna — kim kimni kuzatgan?"},F:{name:"IBODATXONA",subtitle:"Xoch teskari osilgan"},G:{name:"FIZIOTERAPIYA",subtitle:"Tayanchlar hali ham shu yerda"},H:{name:"STOMATOLOGIYA XONASI",subtitle:"Kreslo qonli"},I:{name:"KO‘Z KLINIKASI",subtitle:"Ko‘zoynaklar javonda qolgan"},J:{name:"TERAPIYA XONASI",subtitle:"Kundalik daftarlar yirtilgan"},K:{name:"ANESTEZIYA XONASI",subtitle:"Gaz ballonlari bo‘sh"},L:{name:"OMBORXONA 2",subtitle:"Yopiq qutilar — hech kim ochmagan"},M:{name:"QOZONXONA",subtitle:"Qozonlar hali ham issiq"},N:{name:"NASOS XONASI",subtitle:"Quvurlar titraydi"},O:{name:"TUNEL",subtitle:"Bu yo‘l qayerga olib boradi?"},P:{name:"LABORATORIYA 7",subtitle:"Namunalar hali ham tirik"},Q:{name:"INKUBATOR XONASI",subtitle:"Kichkina qo‘llar shisha ortida"},R:{name:"MORGNIY 2",subtitle:"O‘ttiz yetti tortma — biri ochiq"},S:{name:"IZOLYATOR",subtitle:"Bu xonada hech kim bir kundan ortiq qolmagan"},T:{name:"ELEKTROTERAPIYA",subtitle:"Kresloda hali ham qayish bog‘langan"},U:{name:"GIDROTERAPIYA",subtitle:"Hammomdagi suv qizil"},V:{name:"XODIMLAR XONASI",subtitle:"Choy hali ham iliq"},W:{name:"KONSILIUM XONASI",subtitle:"Yig‘ilish bayonnomasi oxirigacha yozilgan"},X:{name:"TOMGA CHIQISH",subtitle:"Eshik ochiq — tashqarida faqat yomg‘ir"}},rg=new Set(["t","u","v","w","x","y","z"]),Zn={row:28,col:5},Yn={row:17,col:25},Gi={row:16,col:2},$n={row:24,col:25},fr={row:0,col:13},Kn={row:4,col:5},Hi={row:10,col:5},So=[{row:24,col:7},{row:31,col:8},{row:31,col:16}],wo={row:18,col:23},_s={row:47,col:3},Zc=[{row:17,col:13},{row:23,col:15},{row:37,col:15}],og=[{row:18,col:21},{row:20,col:8},{row:24,col:11},{row:17,col:19},{row:31,col:9},{row:7,col:14}],Jc="q",Eo=[{row:31,col:7},{row:16,col:24},{row:17,col:18},{row:24,col:10},{row:23,col:15},{row:17,col:7},{row:31,col:10},{row:24,col:1},{row:4,col:20},{row:10,col:22},{row:10,col:13},{row:37,col:2},{row:37,col:7},{row:37,col:15},{row:47,col:15},{row:47,col:2},{row:47,col:24},{row:53,col:2},{row:53,col:7},{row:53,col:15}],Qc=[{row:22,col:8,face:"north",text:"SIZ QILDINGIZ"},{row:22,col:25,face:"north",text:"OZOD BO‘LMADIM"},{row:30,col:8,face:"north",text:"№37"},{row:30,col:16,face:"north",text:"YANA QAYTDINGMI"},{row:14,col:6,face:"south",text:"CHIQISH YO‘Q"},{row:14,col:20,face:"south",text:"U TASHQARIDA HAM BOR"},{row:10,col:20,face:"west",text:"KUYDI"},{row:4,col:24,face:"east",text:"DARVOZA SIZNI KUTADI"},{row:36,col:1,face:"north",text:"PROTOKOL 7"},{row:46,col:3,face:"east",text:"YIGIRMA YETTINCHI"},{row:47,col:23,face:"west",text:"MENI QIDIRMANG"},{row:52,col:1,face:"north",text:"UCHINCHI QAVAT"},{row:56,col:21,face:"south",text:"TOM YOPILGAN"}],bo=[{row:1,col:1},{row:1,col:26},{row:7,col:9},{row:7,col:18},{row:13,col:1},{row:13,col:26}],tl=[{row:17,col:5},{row:17,col:21},{row:20,col:9},{row:20,col:18},{row:28,col:5},{row:28,col:21},{row:17,col:13},{row:24,col:13},{row:1,col:5},{row:1,col:22},{row:7,col:9},{row:13,col:15},{row:34,col:13},{row:44,col:5},{row:44,col:21},{row:50,col:13},{row:56,col:5},{row:56,col:21}],el=[{room:"o",count:3},{room:"h",count:2},{room:"i",count:2},{room:"q",count:2},{room:"p",count:1},{room:"e",count:1},{room:"x",count:2},{room:"v",count:1},{room:"u",count:1},{room:"P",count:3},{room:"D",count:2},{room:"R",count:2},{room:"H",count:1},{room:"F",count:1},{room:"M",count:1},{room:"S",count:2},{room:"U",count:1}],pa=/^[a-zA-Z]$/;function ag(){if(fn.length!==ze)throw new Error(`Layout has ${fn.length} rows, expected ${ze}`);fn.forEach((o,a)=>{if(o.length!==me)throw new Error(`Layout row ${a} is ${o.length} chars, expected ${me}`)});const s=fn.map(o=>Array.from(o,a=>a==="#"?0:1)),t=new Int16Array(ze*me).fill(-1),e=new Map;for(let o=0;o<ze;o++)for(let a=0;a<me;a++){const c=fn[o][a];if(!pa.test(c))continue;const l=e.get(c);l?(l.row1=Math.min(l.row1,o),l.row2=Math.max(l.row2,o),l.col1=Math.min(l.col1,a),l.col2=Math.max(l.col2,a)):e.set(c,{row1:o,row2:o,col1:a,col2:a})}const n=Array.from(e.keys()).sort(),i=[],r=new Map;n.forEach((o,a)=>{const c=oh[o];if(!c)throw new Error(`Room '${o}' has no ROOM_META entry`);const l=e.get(o);r.set(o,a),i.push({index:a,...c,...l,outdoor:rg.has(o)})});for(let o=0;o<ze;o++)for(let a=0;a<me;a++){const c=fn[o][a],l=r.get(c);t[o*me+a]=l===void 0?-1:l}return{grid:s,roomIndexByCell:t,rooms:i,indexByChar:r}}function nl(s,t){if(!Ye(s,Zn.row,Zn.col))throw new Error(`Player spawn (${Zn.row},${Zn.col}) is inside a wall`);const e=new Uint8Array(ze*me),n=[Zn.row*me+Zn.col];e[n[0]]=1;let i=0;for(;i<n.length;){const r=n[i++],o=Math.floor(r/me),a=r%me;for(const[c,l]of[[1,0],[-1,0],[0,1],[0,-1]]){const h=o+c,u=a+l;if(!Ye(s,h,u))continue;const f=h*me+u;e[f]||(e[f]=1,n.push(f))}}for(const[r,o,a]of t)if(!e[r*me+o])throw new Error(`${a} at (${r},${o}) cannot be reached from the spawn point`)}function di(s,t,e,n,i){if(t<0||t>=ze||e<0||e>=me)throw new Error(`${i} at (${t},${e}) is outside the plan`);if(s[t][e]===0)throw new Error(`${i} at (${t},${e}) is inside a wall`);s[t][e]=n}function Ye(s,t,e){return t<0||t>=ze||e<0||e>=me?!1:s[t][e]!==0}function cg(s,t,e){const n=t.find(r=>{var o;return r.name===((o=oh[e])==null?void 0:o.name)});if(!n)throw new Error(`Cannot find room '${e}' to board up`);const i=[];for(let r=n.row1-1;r<=n.row2+1;r++)if(!(r<0||r>=s.length))for(let o=n.col1-1;o<=n.col2+1;o++){if(o<0||o>=me||s[r][o]!=="+")continue;[[1,0],[-1,0],[0,1],[0,-1]].some(([c,l])=>{const h=r+c,u=o+l;return h>=n.row1&&h<=n.row2&&u>=n.col1&&u<=n.col2})&&i.push({row:r,col:o})}return i}function pr(s,t,e){const n=Math.round(t/Y),i=Math.round(e/Y);return i<0||i>=s.length||n<0||n>=s[0].length?!1:s[i][n]!==0}function lg(s,t){return Math.round(t/Y)<=fa}function vs(s,t,e=Mi){return new A(t*Y,e,s*Y)}function il(s){const{grid:t,roomIndexByCell:e,rooms:n,indexByChar:i}=ag(),r=2,o=3,a=4,c=5,l=6,h=7,u=8;nl(t,[[Yn.row,Yn.col,"Monster spawn"],[Gi.row,Gi.col,"Exit"],[$n.row,$n.col,"Breaker"],[fr.row,fr.col,"Main gate"],[Kn.row,Kn.col,"Substation"],[Hi.row,Hi.col,"Gate keycard"],[wo.row,wo.col,"Breaker fuse"],[_s.row,_s.col,"Crowbar"],...Zc.map(j=>[j.row,j.col,"Spare battery"]),...bo.map(j=>[j.row,j.col,"Lamp post"]),...So.map((j,ht)=>[j.row,j.col,`Key ${ht+1}`]),...Eo.map((j,ht)=>[j.row,j.col,`Note ${ht+1}`]),...Qc.map(j=>[j.row,j.col,"Wall scrawl"]),...el.map(j=>{const ht=i.get(j.room),vt=ht===void 0?void 0:n[ht];if(!vt)throw new Error(`Corpse room '${j.room}' does not exist in the plan`);return[vt.row1,vt.col1,`Corpse room ${j.room}`]})]),di(t,Yn.row,Yn.col,a,"Monster spawn"),di(t,Gi.row,Gi.col,o,"Exit"),di(t,$n.row,$n.col,l,"Breaker"),di(t,Kn.row,Kn.col,u,"Substation"),di(t,Hi.row,Hi.col,h,"Gate keycard"),So.forEach((j,ht)=>di(t,j.row,j.col,r,`Key ${ht+1}`)),Eo.forEach((j,ht)=>di(t,j.row,j.col,c,`Note ${ht+1}`));const f=cg(fn,n,Jc);if(f.length===0)throw new Error(`Room '${Jc}' has no doorways to board up`);for(const j of f)t[j.row][j.col]=0;nl(t,[[_s.row,_s.col,"Crowbar (door boarded up)"]]);const d=q0(),g=new Lt({map:d,bumpMap:d,bumpScale:.06,roughness:.95,metalness:.04}),_=J0();_.repeat.set(2,2);const m=new Lt({map:_,bumpMap:_,bumpScale:.1,roughness:1,metalness:.02}),p=X0();p.repeat.set(me,ze-dn);const w=new Lt({map:p,roughness:1,metalness:0}),E=Y0();E.repeat.set(me/2,(ze-dn)/2);const y=new Lt({map:E,roughness:1,metalness:0}),F=Z0();F.repeat.set(me/2,dn/2);const R=new Lt({map:F,roughness:1,metalness:.02}),T=Q0();T.repeat.set(3,1);const P=new Lt({map:T,roughness:1,metalness:0}),S=new Lt({map:$0(),roughness:.55,metalness:.5}),x=new Lt({color:2763306,emissive:16718362,emissiveIntensity:1.4,metalness:.9,roughness:.25}),C=new Lt({color:12170147,roughness:.85,metalness:.05}),B=new Lt({color:3092788,roughness:.45,metalness:.75}),G=new Lt({color:4928032,roughness:.92,metalness:.35}),X=new Lt({color:2437178,roughness:1,metalness:0}),Z=new Lt({color:6048324,roughness:.9,metalness:0}),q=new Lt({color:4864038,roughness:1,metalness:0}),et=new Lt({color:5460814,roughness:.95,metalness:.03}),z=new Lt({color:856342,roughness:.22,metalness:.6,transparent:!0,opacity:.65}),tt=new Lt({color:9248543,roughness:.7,metalness:.2}),st=new Lt({color:1316378,emissive:16767392,emissiveIntensity:.05,roughness:.5,metalness:.4}),xt=new Lt({color:1711135,emissive:14191130,emissiveIntensity:.9,roughness:.5,metalness:.4});new Lt({color:10474728,emissive:3066111,emissiveIntensity:1.4,roughness:.18,metalness:.1,transparent:!0,opacity:.72});const Gt=new Lt({color:9056028,emissive:4723208,emissiveIntensity:.55,roughness:.55,metalness:.55}),ie=new Lt({color:1909030,emissive:997918,emissiveIntensity:.7,roughness:.5,metalness:.5}),K=new Lt({map:K0(),transparent:!0,opacity:.9,roughness:1,metalness:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),at=new Lt({color:14209725,emissive:9075274,emissiveIntensity:.45,roughness:.9,metalness:0,side:yn}),wt=new Lt({color:16761402,emissive:16752640,emissiveIntensity:1.2,roughness:.25,metalness:.9}),pt=new Lt({color:3133695,emissive:41727,emissiveIntensity:1.6,roughness:.3,metalness:.5}),Nt=new Lt({color:1052688,emissive:16773842,emissiveIntensity:.12,roughness:.4}),Bt=new Lt({color:3817285,roughness:.5,metalness:.7}),Kt=new Lt({color:9052192,emissive:5570560,emissiveIntensity:.6,roughness:.6,metalness:.3}),Ot=new Ut,Ht=[];let ye=0;const O=new Ke(me*Y,dn*Y),De=new I(O,R);De.rotation.x=-Math.PI/2,De.position.set(me*Y/2-Y/2,0,dn*Y/2-Y/2),De.receiveShadow=!0,s.add(De);const Jt=new I(new Ke(26*Y,2*Y),P);Jt.rotation.x=-Math.PI/2,Jt.position.set(13.5*Y,.01,13.5*Y),Jt.receiveShadow=!0,s.add(Jt);const Qt=new Ke(me*Y,(ze-dn)*Y),Rt=new I(Qt,w);Rt.rotation.x=-Math.PI/2,Rt.position.set(me*Y/2-Y/2,0,(dn+ze-1)/2*Y),Rt.receiveShadow=!0,s.add(Rt);const ce=new I(Qt,y);ce.rotation.x=Math.PI/2,ce.position.set(Rt.position.x,de,Rt.position.z),s.add(ce);const It=new it(Y,de,ki),b=new it(ki,de,Y),v=[],k=[];for(let j=0;j<ze;j++)for(let ht=0;ht<me;ht++){if(!Ye(t,j,ht))continue;const vt=ht*Y,jt=j*Y,Xt=j<=fa?k:v,Se=[{dr:-1,dc:0,geo:It,pos:[vt,de/2,jt-Y/2+ki/2]},{dr:1,dc:0,geo:It,pos:[vt,de/2,jt+Y/2-ki/2]},{dr:0,dc:-1,geo:b,pos:[vt-Y/2+ki/2,de/2,jt]},{dr:0,dc:1,geo:b,pos:[vt+Y/2-ki/2,de/2,jt]}];for(const se of Se){if(Ye(t,j+se.dr,ht+se.dc))continue;const Ve=se.geo.clone();Ve.translate(se.pos[0],se.pos[1],se.pos[2]),Xt.push(Ve)}}const J=[],nt=(j,ht)=>{const vt=rh(j,!1);if(vt){const jt=new I(vt,ht);jt.castShadow=!0,jt.receiveShadow=!0,s.add(jt),J.push(jt);return}for(const jt of j){const Xt=new I(jt,ht);Xt.castShadow=!0,Xt.receiveShadow=!0,s.add(Xt),J.push(Xt)}};nt(v,g),nt(k,m);for(let j=0;j<ze;j++)for(let ht=0;ht<me;ht++){if(fn[j][ht]!=="+")continue;const vt=(Ye(t,j-1,ht)||Ye(t,j+1,ht))&&!(Ye(t,j,ht-1)||Ye(t,j,ht+1));ug(Ot,ht*Y,j*Y,vt,B)}for(let j=dn;j<ze;j++)for(let ht=0;ht<me;ht++){const vt=fn[j][ht],jt=pa.test(vt),Xt=vt===".",Se=ht*Y,se=j*Y;(jt||Xt)&&(jt&&Math.random()<.55?fg(Ot,Se,se,vt,{boneMat:C,metalMat:B,rustMat:G,fabricMat:X,woodMat:q,glassMat:z},Ht):Xt&&Math.random()<.45&&pg(Ot,Se,se,sl(t,j,ht),{boneMat:C,metalMat:B,rustMat:G,fabricMat:X,woodMat:q},Ht),Math.random()<(jt?.22:.42)&&xs(Ot,K,Se,se),Xt&&Math.random()<.42&&Rg(Ot,Se,se,G,q,X),Xt&&Math.random()<.28&&Cg(Ot,Se,se),Xt&&Math.random()<.12&&Pg(Ot,B,X,Se,se),Xt&&Math.random()<.15&&Lg(Ot,B,Se,se),Math.random()<(Xt?.55:.18)&&(Ag(Ot,B,Nt,Se,se),ye++))}const $={metalMat:B,rustMat:G,woodMat:q,boneMat:C,stoneMat:et,glassMat:z,paintMat:tt};for(let j=0;j<=fa;j++)for(let ht=0;ht<me;ht++){const vt=fn[j][ht];if(vt==="#"||vt==="+"||!pa.test(vt)&&vt!==".")continue;const jt=ht*Y,Xt=j*Y,Se=sl(t,j,ht);if(vt==="v"){const se=jt+Pt(-1.1,1.1),Ve=Xt+Pt(-1.1,1.1);if(mg(Ot,et,se,Ve),Ht.push({x:se,z:Ve,r:.45}),Math.random()<.22){const os=jt+Pt(-1.4,1.4),Os=Xt+Pt(-1.4,1.4);ol(Ot,q,os,Os),Ht.push({x:os,z:Os,r:.55})}}else if(vt==="x"){if(Math.random()<.34){const se=jt+Pt(-.9,.9),Ve=Xt+Pt(-.9,.9);vg(Ot,$,se,Ve,Math.random()<.5),Ht.push({x:se,z:Ve,r:1.5})}}else if(vt==="w"||vt==="."){if(Math.random()<.18&&rl(Ot,$,jt,Xt,Se),Math.random()<.12){const se=jt+Pt(-1.2,1.2),Ve=Xt+Pt(-1.2,1.2);ol(Ot,q,se,Ve),Ht.push({x:se,z:Ve,r:.55})}Math.random()<.08&&xs(Ot,K,jt+Pt(-.8,.8),Xt+Pt(-.8,.8))}else vt==="u"?Math.random()<.22&&(gg(Ot,$,jt,Xt),Ht.push({x:jt,z:Xt,r:1.1})):vt==="t"||vt==="z"?Math.random()<.2&&(_g(Ot,$,jt,Xt),Ht.push({x:jt,z:Xt,r:.5})):vt==="y"&&Math.random()<.3&&rl(Ot,$,jt,Xt,Se);Math.random()<.1&&xs(Ot,K,jt,Xt)}for(const j of bo)xg(Ot,B,st,j.col*Y,j.row*Y);const Et=[];for(let j=0;j<tl.length;j++){const ht=tl[j];if(!Ye(t,ht.row,ht.col))continue;const vt=ht.col*Y,jt=ht.row*Y,Xt=j%2===0?Nr(B,X):Ia(B,G);Xt.position.set(vt,0,jt),Xt.rotation.y=Math.random()*Math.PI*2,Xt.traverse(Se=>{Se.isMesh&&(Se.castShadow=!0,Se.receiveShadow=!0)}),Ot.add(Xt),Et.push(new A(vt,Mi,jt)),Ht.push({x:vt,z:jt,r:j%2===0?1.05:.6})}for(const j of el){const ht=i.get(j.room);if(ht===void 0)throw new Error(`Corpse room '${j.room}' does not exist in the plan`);const vt=n[ht];for(let jt=0;jt<j.count;jt++){const Xt=vt.row1+Math.floor(Math.random()*(vt.row2-vt.row1+1)),Se=vt.col1+Math.floor(Math.random()*(vt.col2-vt.col1+1));if(!Ye(t,Xt,Se))continue;const se=Eg(X,C,Z);se.position.set(Se*Y+(Math.random()-.5)*1.4,0,Xt*Y+(Math.random()-.5)*1.4),se.rotation.y=Math.random()*Math.PI*2,Ot.add(se),xs(Ot,K,Se*Y,Xt*Y)}}for(const j of Qc)Tg(Ot,j.row,j.col,j.face,j0(j.text));for(let j=0;j<6;j++)xs(Ot,K,Yn.col*Y+(Math.random()-.5)*7,Yn.row*Y+(Math.random()-.5)*3);const lt=Gi.col*Y,gt=Gi.row*Y,ee=new A(lt,Mi,gt),ot=new I(new it(Y*.95,de,.34),new Lt({color:1776414,roughness:.8,metalness:.6}));ot.position.set(lt,de/2,gt-Y/2),s.add(ot);const Mt=new it(Y*.74,de*.86,.22);Mt.translate(Y*.37,0,0);const Dt=new I(Mt,S);Dt.position.set(lt-Y*.37,de*.47,gt-Y/2+.16),Dt.castShadow=!0,s.add(Dt);const Ft=new I(new it(.3,.24,.14),x);Ft.position.set(lt+Y*.24,de*.47,gt-Y/2+.3),s.add(Ft);const yt=new I(new it(Y*.6,.09,.09),B);yt.position.set(lt,de*.52,gt-Y/2+.34),s.add(yt);const te=fr.col*Y,Wt=fr.row*Y,ue=new A(te,Mi,Wt),D=new Ut;D.position.set(te,0,Wt);const dt=new it(.34,de+.5,.34);for(const j of[-1,1]){const ht=new I(dt,B);ht.position.set(j*(Y/2-.12),(de+.5)/2,0),D.add(ht)}const W=new it(Y/2-.12,de*.9,.14),Q=[];for(const j of[-1,1]){const ht=new Ut;ht.position.set(j*.05,0,0);const vt=new I(W,S);vt.position.set(j*(Y/2-.12)/2,de*.45,0),vt.castShadow=!0,ht.add(vt),ht.userData.sign=j,D.add(ht),Q.push(ht)}const mt=new I(new it(Y-.2,.1,.1),B);mt.position.set(0,de*.92,0),D.add(mt);const ft=new I(new it(.36,.28,.16),x);ft.position.set(0,de*.55,-.24),D.add(ft),s.add(D);const zt=Sg(Bt,Kt);zt.position.set($n.col*Y,0,$n.row*Y),s.add(zt);const ge=wg(Bt,Kt,B,G);ge.position.set(Kn.col*Y,0,Kn.row*Y),s.add(ge);const Te=[];So.forEach((j,ht)=>{const vt=Mg(wt);vt.position.set(j.col*Y,1.1,j.row*Y),vt.userData.pickupIndex=ht,vt.userData.itemId="key",s.add(vt),Te.push(vt.position.clone())});const oe=[],Ue=yg(pt,B);Ue.position.set(Hi.col*Y,1.15,Hi.row*Y),Ue.userData.pickupIndex=0,Ue.userData.itemId="card",s.add(Ue),oe.push(Ue.position.clone());const sn=[];Eo.forEach((j,ht)=>{const vt=new I(new Ke(.42,.56),at);vt.rotation.x=-Math.PI/2.35,vt.position.set(j.col*Y+.3,.85,j.row*Y-.3),vt.userData.isNote=!0,vt.userData.noteIndex=ht,vt.userData.pickupIndex=ht,s.add(vt),sn.push(new A(j.col*Y,1,j.row*Y))});const ri=(j,ht,vt,jt=.95)=>{vt.position.set(ht.col*Y,jt,ht.row*Y),vt.userData.itemId=j,s.add(vt)};ri("fuse",wo,k0(xt,z,B)),ri("crowbar",_s,G0(Gt),.9);for(const j of Zc)ri("battery",j,V0(ie,B),.9);og.forEach((j,ht)=>{const vt=H0(z,B);vt.rotation.y=ht*1.3,ri("bottle",j,vt,.9)});for(const j of f){const ht=W0(q,G,Y);ht.position.set(j.col*Y,0,j.row*Y),ht.rotation.y=j.col%2===0?0:Math.PI/2,ht.userData.isBoardedDoor=!0,s.add(ht)}const rs=dg(Ot);return s.add(rs),{grid:t,walls:J,floor:Rt,ceiling:ce,keyPositions:Te,notePositions:sn,exitPosition:ee,monsterSpawn:vs(Yn.row,Yn.col,1.5),playerSpawn:vs(Zn.row,Zn.col),exitDoor:Dt,exitLock:Ft,breakerPosition:vs($n.row,$n.col,1.2),breakerMesh:zt,props:rs,fluorescentMaterials:ye>0?[Nt]:[],rooms:n,roomIndexByCell:e,plan:fn,cols:me,rows:ze,gatePosition:ue,gateLeaves:Q,gateLock:ft,substationPosition:vs(Kn.row,Kn.col,1.2),substationMesh:ge,cardPositions:oe,outdoorLampPositions:bo.map(j=>vs(j.row,j.col,4.35)),lampMaterials:[st],hidingSpots:Et,colliders:Ht}}function hg(s,t,e){const n=Math.round(t/Y),i=Math.round(e/Y);return i<0||i>=s.rows||n<0||n>=s.cols?-1:s.roomIndexByCell[i*s.cols+n]}function Pt(s,t){return s+Math.random()*(t-s)}function sl(s,t,e){const n=[];return Ye(s,t-1,e)&&n.push([-1,0]),Ye(s,t+1,e)&&n.push([1,0]),Ye(s,t,e-1)&&n.push([0,-1]),Ye(s,t,e+1)&&n.push([0,1]),n}function ug(s,t,e,n,i){const r=new it(.18,de,.18),o=new it(Y-.2,.28,.22);if(n){for(const c of[-1,1]){const l=new I(r,i);l.position.set(t+c*(Y/2-.09),de/2,e),s.add(l)}const a=new I(o,i);a.position.set(t,de-.14,e),s.add(a)}else{for(const c of[-1,1]){const l=new I(r,i);l.position.set(t,de/2,e+c*(Y/2-.09)),s.add(l)}const a=new I(o,i);a.position.set(t,de-.14,e),a.rotation.y=Math.PI/2,s.add(a)}}function dg(s){const t=new Map;s.updateMatrixWorld(!0),s.traverse(n=>{if(!n.isMesh)return;const i=n,r=Array.isArray(i.material)?i.material[0]:i.material,o=i.geometry.clone();o.applyMatrix4(i.matrixWorld);for(const c of Object.keys(o.attributes))c!=="position"&&c!=="normal"&&c!=="uv"&&o.deleteAttribute(c);const a=t.get(r);a?a.push(o):t.set(r,[o])});const e=new Ut;for(const[n,i]of t){const r=rh(i,!1);if(!r)return s;const o=new I(r,n);o.castShadow=!0,o.receiveShadow=!0,e.add(o)}return e.children.length>0?e:s}function fg(s,t,e,n,i,r){const o=Math.random();let a,c=0;"dDnsS".includes(n)?o<.4?(a=qc(i.metalMat,i.fabricMat),c=1):o<.6?(a=gs(i.metalMat,i.rustMat),c=.5):o<.8?a=Ln(i.metalMat):a=$c(i.metalMat):"hiI".includes(n)?o<.35?(a=U0(i.metalMat,i.fabricMat),c=1):o<.55?(a=hr(i.metalMat,i.glassMat),c=.4):o<.75?a=$c(i.metalMat):a=Ln(i.metalMat):"ooO".includes(n)?o<.5?(a=N0(i.metalMat,i.rustMat),c=.8):o<.75?(a=Nr(i.metalMat,i.fabricMat),c=1):a=Ln(i.metalMat):"rC".includes(n)?o<.4?(a=O0(i.metalMat,i.rustMat),c=.8):o<.6?(a=Un(i.rustMat,i.metalMat),c=.45):o<.8?(a=Jn(i.woodMat),c=.5):a=Ln(i.metalMat):n==="g"?o<.5?(a=Xc(i.woodMat),c=.7):o<.75?(a=ur(i.woodMat,i.metalMat),c=.6):(a=Kc(i.fabricMat,i.woodMat),c=.8):"HI".includes(n)?o<.5?(a=F0(i.metalMat,i.fabricMat),c=.7):o<.75?(a=hr(i.metalMat,i.glassMat),c=.4):a=dr(i.metalMat):n==="S"?o<.5?(a=B0(i.metalMat,i.fabricMat),c=1):o<.75?(a=gs(i.metalMat,i.rustMat),c=.5):(a=ur(i.woodMat,i.metalMat),c=.6):n==="T"?o<.5?(a=z0(i.metalMat,i.fabricMat),c=.7):o<.75?(a=hr(i.metalMat,i.glassMat),c=.4):a=Ln(i.metalMat):n==="q"?o<.5?(a=Yc(i.metalMat,i.fabricMat),c=.6):o<.75?a=dr(i.metalMat):a=Ln(i.metalMat):n==="U"?o<.5?(a=Yc(i.metalMat,i.fabricMat),c=.6):o<.75?a=dr(i.metalMat):(a=Un(i.rustMat,i.metalMat),c=.45):"mMPN".includes(n)?o<.3?(a=Un(i.rustMat,i.metalMat),c=.45):o<.5?a=Tr(i.metalMat,i.rustMat):o<.7?(a=Jn(i.woodMat),c=.5):(a=lr(i.metalMat,i.rustMat),c=.6):"fpL".includes(n)?o<.35?(a=Jn(i.woodMat),c=.5):o<.55?(a=gs(i.metalMat,i.rustMat),c=.5):o<.75?(a=Xc(i.woodMat),c=.7):(a=Un(i.rustMat,i.metalMat),c=.45):"AEVW".includes(n)?o<.4?(a=ur(i.woodMat,i.metalMat),c=.6):o<.6?(a=Kc(i.fabricMat,i.woodMat),c=.8):o<.8?(a=gs(i.metalMat,i.rustMat),c=.5):a=Ln(i.metalMat):n==="D"?o<.3?(a=qc(i.metalMat,i.fabricMat),c=1):o<.5?(a=Jn(i.woodMat),c=.5):o<.7?(a=lr(i.metalMat,i.rustMat),c=.6):a=Ln(i.metalMat):"kPQ".includes(n)?o<.3?(a=ur(i.woodMat,i.metalMat),c=.6):o<.5?(a=hr(i.metalMat,i.glassMat),c=.4):o<.7?a=dr(i.metalMat):a=Ln(i.metalMat):"tuyz".includes(n)?o<.3?(a=Un(i.rustMat,i.metalMat),c=.45):o<.5?(a=Jn(i.woodMat),c=.5):o<.7?a=Tr(i.metalMat,i.rustMat):(a=lr(i.metalMat,i.rustMat),c=.6):o<.2?(a=Nr(i.metalMat,i.fabricMat),c=1):o<.34?(a=lr(i.metalMat,i.rustMat),c=.6):o<.5?(a=Un(i.rustMat,i.metalMat),c=.45):o<.64?(a=Jn(i.woodMat),c=.5):o<.78?a=Da(i.boneMat):o<.9?a=Tr(i.metalMat,i.rustMat):(a=gs(i.metalMat,i.rustMat),c=.6);const l=t+(Math.random()-.5)*2,h=e+(Math.random()-.5)*2;a.position.x=l,a.position.z=h,a.rotation.y=Math.random()*Math.PI*2,a.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),c>0&&r.push({x:l,z:h,r:c}),s.add(a)}function pg(s,t,e,n,i,r){const o=[[1,0],[-1,0],[0,1],[0,-1]].filter(g=>!n.some(([_,m])=>_===g[0]&&m===g[1])),a=1.3,c=o.length>0?o[Math.floor(Math.random()*o.length)]:[0,0],l=t+c[1]*a+(c[1]===0?(Math.random()-.5)*2:0),h=e+c[0]*a+(c[0]===0?(Math.random()-.5)*2:0),u=Math.random();let f,d=0;u<.2?(f=Nr(i.metalMat,i.fabricMat),d=1):u<.34?(f=Ia(i.metalMat,i.rustMat),d=.6):u<.5?(f=Un(i.rustMat,i.metalMat),d=.45):u<.64?(f=Jn(i.woodMat),d=.5):u<.78?f=Da(i.boneMat):u<.9?f=Tr(i.metalMat,i.rustMat):(f=bg(i.metalMat,i.rustMat),d=.6),f.position.x+=l,f.position.z+=h,f.rotation.y=Math.random()*Math.PI*2,f.traverse(g=>{g.isMesh&&(g.castShadow=!0,g.receiveShadow=!0)}),d>0&&r.push({x:l,z:h,r:d}),s.add(f)}function rl(s,t,e,n,i){const r=[[1,0],[-1,0],[0,1],[0,-1]].filter(u=>!i.some(([f,d])=>f===u[0]&&d===u[1])),o=r.length>0?r[Math.floor(Math.random()*r.length)]:[0,0],a=e+o[1]*1.3+(o[1]===0?Pt(-1.4,1.4):0),c=n+o[0]*1.3+(o[0]===0?Pt(-1.4,1.4):0),l=Math.random();let h;l<.3?h=Jn(t.woodMat):l<.55?h=Un(t.rustMat,t.metalMat):l<.75?h=Da(t.boneMat):h=Ia(t.metalMat,t.rustMat),h.position.set(a,0,c),h.rotation.y=Math.random()*Math.PI*2,h.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),s.add(h)}function mg(s,t,e,n){const i=new I(new it(Pt(.5,.75),Pt(.7,1.1),.16),t);i.position.set(e,i.geometry.parameters.height/2,n),i.rotation.set(Pt(-.09,.09),Pt(-.5,.5),Pt(-.12,.12)),i.castShadow=!0,i.receiveShadow=!0,s.add(i);const r=new I(new it(1.1,.16,2),t);r.position.set(e,.06,n+1.05),r.rotation.y=Pt(-.3,.3),s.add(r)}function ol(s,t,e,n){const i=new I(new kt(.11,.2,Pt(2.6,3.8),6),t);i.position.set(e,i.geometry.parameters.height/2,n),i.rotation.z=Pt(-.08,.08),i.castShadow=!0,s.add(i);const r=2+Math.floor(Math.random()*3);for(let o=0;o<r;o++){const a=new I(new kt(.03,.07,Pt(.9,1.7),5),t),c=o/r*Math.PI*2+Pt(-.4,.4);a.position.set(e+Math.cos(c)*.4,Pt(1.8,3),n+Math.sin(c)*.4),a.rotation.set(Pt(-.6,.6),c,Pt(.7,1.1)),s.add(a)}}function gg(s,t,e,n){const i=new I(new it(Pt(1.4,2.4),.9,.55),t.stoneMat);i.position.set(e+Pt(-.8,.8),.45,n+Pt(-.8,.8)),i.rotation.y=Math.random()<.5?0:Math.PI/2,i.castShadow=!0,i.receiveShadow=!0,s.add(i);const r=new I(new it(i.geometry.parameters.width*.9,.2,.58),t.paintMat);r.position.copy(i.position),r.position.y=.72,r.rotation.y=i.rotation.y,s.add(r)}function _g(s,t,e,n){const i=Un(t.rustMat,t.metalMat);i.position.set(e+Pt(-1.1,1.1),0,n+Pt(-1.1,1.1)),i.rotation.y=Math.random()*Math.PI*2,i.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),s.add(i)}function vg(s,t,e,n,i){const r=new Ut,o=new I(new it(1.9,.72,4.2),t.rustMat);o.position.y=.62,r.add(o);const a=new I(new it(1.72,.66,2.1),t.metalMat);a.position.set(0,1.24,-.2),r.add(a);const c=new I(new it(1.6,.5,.08),t.glassMat);c.position.set(0,1.26,-1.22),r.add(c);const l=new I(new it(1.66,.08,2),t.glassMat);l.position.set(0,1.58,-.2),r.add(l);const h=new kt(.34,.34,.22,10);h.rotateZ(Math.PI/2);for(const u of[-1,1])for(const f of[-1.4,1.4]){const d=new I(h,t.metalMat);d.position.set(u,.34,f),r.add(d)}r.position.set(e,0,n),r.rotation.y=Pt(-Math.PI,Math.PI),i&&(r.rotation.z=Math.PI,r.position.y=1,r.scale.setScalar(.9)),r.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),s.add(r)}function xg(s,t,e,n,i){const r=new Ut,o=new I(new kt(.09,.13,4.6,8),t);o.position.y=2.3,r.add(o);const a=new I(new it(.9,.09,.09),t);a.position.set(.42,4.52,0),r.add(a);const c=new I(new it(.6,.16,.32),e);c.position.set(.78,4.42,0),r.add(c),r.position.set(n,0,i),r.rotation.y=Pt(-.4,.4),r.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),s.add(r)}function Mg(s){const t=new Ut,e=new I(new nn(.19,.045,8,18),s),n=new I(new it(.06,.44,.06),s);n.position.y=-.3;const i=new I(new it(.16,.07,.06),s);return i.position.set(.08,-.48,0),t.add(e,n,i),t.userData.isKey=!0,t}function yg(s,t){const e=new Ut,n=new I(new it(.34,.02,.52),s);n.position.y=.02,e.add(n);const i=new I(new it(.34,.026,.09),t);i.position.set(0,.045,-.14),e.add(i);const r=new I(new nn(.05,.012,6,12),t);return r.position.set(0,.05,.3),e.add(r),e.userData.isCard=!0,e}function Sg(s,t){const e=new Ut,n=new I(new it(1.1,1.7,.5),s);n.position.y=1.7,n.castShadow=!0,e.add(n);const i=new I(new it(.86,1.36,.06),new Lt({color:1316378,roughness:.7,metalness:.4}));i.position.set(0,1.74,.28),e.add(i);const r=new I(new it(.16,.5,.16),t);r.position.set(0,1.6,.36),r.rotation.x=-.6,r.userData.isBreakerLever=!0,e.add(r);const o=new I(new en(.07,10,10),new Lt({color:3342336,emissive:16720384,emissiveIntensity:2}));return o.position.set(0,2.28,.33),o.userData.isBreakerLamp=!0,e.add(o),e}function wg(s,t,e,n){const i=new Ut,r=new I(new it(2.6,.22,2.2),new Lt({color:3815992,roughness:1,metalness:0}));r.position.y=.11,r.receiveShadow=!0,i.add(r);for(const h of[-.66,.66]){const u=new I(new kt(.42,.42,1.5,12),e);u.position.set(h,.97,0),u.castShadow=!0,i.add(u);const f=new I(new kt(.46,.46,.14,12),n);f.position.set(h,1.78,0),i.add(f);for(let d=0;d<3;d++){const g=new I(new kt(.06,.09,.34,6),n);g.position.set(h+(d-1)*.22,2,0),i.add(g)}}const o=new I(new it(.7,1.5,.42),s);o.position.set(0,.97,1.3),o.castShadow=!0,i.add(o);const a=new I(new it(.14,.46,.14),t);a.position.set(0,.9,1.54),a.rotation.x=-.6,a.userData.isSubstationLever=!0,i.add(a);const c=new I(new en(.065,10,10),new Lt({color:3342336,emissive:16720384,emissiveIntensity:2}));c.position.set(0,1.55,1.54),c.userData.isSubstationLamp=!0,i.add(c);const l=new I(new it(.7,.5,.05),new Lt({color:13214247,emissive:3812352,emissiveIntensity:.4,roughness:.8}));return l.position.set(0,1.95,1.32),i.add(l),i.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),i}function Eg(s,t,e){const n=new Ut,i=new I(new it(.52,.26,.78),s);i.position.y=.13,n.add(i);const r=new I(new en(.16,10,8),e);r.position.set(0,.15,-.5),n.add(r);for(const a of[-1,1]){const c=new I(new it(.14,.14,.6),e);c.position.set(a*.36,.08,-.06),c.rotation.y=a*.6,n.add(c);const l=new I(new it(.17,.17,.68),s);l.position.set(a*.14,.09,.7),l.rotation.y=a*.12,n.add(l)}const o=new I(new it(.3,.04,.12),t);return o.position.set(.08,.28,.06),o.rotation.y=.4,n.add(o),n}function Nr(s,t){const e=new Ut,n=new I(new it(.8,.12,1.9),t);n.position.y=.72;const i=new I(new it(.84,.06,1.94),s);i.position.y=.64,e.add(n,i);const r=[[-.34,-.82],[.34,-.82],[-.34,.82],[.34,.82]];for(const[a,c]of r){const l=new I(new it(.06,.64,.06),s);l.position.set(a,.32,c),e.add(l)}const o=new kt(.08,.08,.05,8);o.rotateZ(Math.PI/2);for(const[a,c]of r){const l=new I(o,s);l.position.set(a,.06,c),e.add(l)}return e.rotation.y+=(Math.random()-.5)*.6,e}function Ia(s,t){const e=new Ut,n=new I(new it(.56,.08,.56),t);n.position.y=.52;const i=new I(new it(.56,.6,.08),t);i.position.set(0,.82,-.26),e.add(n,i);const r=new nn(.32,.045,6,20);for(const a of[-.34,.34]){const c=new I(r,s);c.position.set(a,.34,0),c.rotation.y=Math.PI/2,e.add(c)}const o=new nn(.09,.03,6,12);for(const a of[-.24,.24]){const c=new I(o,s);c.position.set(a,.09,.28),c.rotation.y=Math.PI/2,e.add(c)}return e}function Un(s,t){const e=new Ut,n=new I(new kt(.32,.32,.9,12),s);n.position.y=.45,e.add(n);for(const i of[.24,.66]){const r=new I(new nn(.33,.025,5,14),t);r.position.y=i,r.rotation.x=Math.PI/2,e.add(r)}return e}function Jn(s){const t=new Ut,e=.5+Math.random()*.3,n=new I(new it(e,e,e),s);if(n.position.y=e/2,n.rotation.y=Math.random()*.5,t.add(n),Math.random()<.4){const i=n.clone();i.position.y=e*1.5,i.rotation.y=Math.random()*Math.PI,t.add(i)}return t}function Da(s){const t=new Ut;for(let n=0;n<7;n++){const i=new I(new Ca(.035,.28+Math.random()*.2,3,6),s);i.position.set((Math.random()-.5)*.7,.05+Math.random()*.06,(Math.random()-.5)*.7),i.rotation.set(Math.PI/2,0,Math.random()*Math.PI),t.add(i)}const e=new I(new en(.13,8,8),s);return e.position.set((Math.random()-.5)*.4,.13,(Math.random()-.5)*.4),t.add(e),t}function Tr(s,t){const e=new Ut,n=new kt(.055,.055,3.6,8);n.rotateZ(Math.PI/2);for(let i=0;i<2;i++){const r=new I(n,i===0?s:t);r.position.set(0,de-.3-i*.22,0),r.rotation.y=Math.random()<.5?0:Math.PI/2,e.add(r)}return e}function bg(s,t){const e=new Ut,n=new I(new it(.9,2,.5),s);n.position.y=1,e.add(n);const i=new I(new it(.38,1.8,.06),t);return i.position.set(-.22,1,.28),i.rotation.y=-.35,e.add(i),e}function xs(s,t,e,n){const i=new I(new Ke(1.8,1.8),t);i.rotation.x=-Math.PI/2,i.rotation.z=Math.random()*Math.PI*2,i.position.set(e+(Math.random()-.5)*1.8,.015,n+(Math.random()-.5)*1.8),s.add(i)}function Tg(s,t,e,n,i){const r=new Lt({map:i,transparent:!0,roughness:1,metalness:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}),o=new I(new Ke(2.9,2.9),r),a=e*Y,c=t*Y;n==="north"?o.position.set(a,1.9,c-Y/2+.12):n==="south"?(o.position.set(a,1.9,c+Y/2-.12),o.rotation.y=Math.PI):n==="west"?(o.position.set(a-Y/2+.12,1.9,c),o.rotation.y=Math.PI/2):(o.position.set(a+Y/2-.12,1.9,c),o.rotation.y=-Math.PI/2),s.add(o)}function Ag(s,t,e,n,i){const r=new I(new it(1.5,.12,.34),t);r.position.set(n,de-.12,i),s.add(r);const o=new I(new it(1.34,.06,.2),e);o.position.set(n,de-.2,i),s.add(o)}function Rg(s,t,e,n,i,r){const o=1+Math.floor(Math.random()*3);for(let a=0;a<o;a++){const c=Math.random();let l;c<.35?l=new I(new it(Pt(.5,1.2),.04,Pt(.5,.9)),new Lt({color:9078656,roughness:1})):c<.65?l=new I(new it(Pt(.15,.5),.06,Pt(.06,.12)),n):(l=new I(new Ke(Pt(.18,.38),Pt(.24,.42)),r),l.rotation.x=-Math.PI/2),l.position.set(t+Pt(-1.2,1.2),.02+a*.005,e+Pt(-1.2,1.2)),l.rotation.y=Pt(0,Math.PI*2),l.receiveShadow=!0,s.add(l)}}function Cg(s,t,e){const n=Pt(.6,1.8),i=new Pa(n,16),r=new Lt({color:658964,roughness:.08,metalness:.55,transparent:!0,opacity:Pt(.35,.55)}),o=new I(i,r);o.rotation.x=-Math.PI/2,o.position.set(t+Pt(-.8,.8),.008,e+Pt(-.8,.8)),o.receiveShadow=!0,s.add(o)}function Pg(s,t,e,n,i){const r=new Ut;for(const a of[-.32,.32]){const c=new I(new it(.06,.08,1.8),t);c.position.set(a,.22,0),r.add(c)}for(const a of[-.6,0,.6]){const c=new I(new it(.7,.05,.06),t);c.position.set(0,.22,a),r.add(c)}for(const[a,c]of[[-.28,-.7],[.28,-.7],[-.28,.7],[.28,.7]]){const l=new I(new kt(.025,.025,.22,6),t);l.position.set(a,.11,c),l.rotation.z=Pt(-.25,.25),r.add(l)}const o=new I(new it(.58,.06,1.6),e);o.position.set(Pt(-.08,.08),.28,Pt(-.08,.08)),o.rotation.y=Pt(-.15,.15),r.add(o),r.position.set(n,0,i),r.rotation.y=Pt(0,Math.PI*2),r.traverse(a=>{a.castShadow=!0}),s.add(r)}function Lg(s,t,e,n){const i=new I(new kt(.01,.01,Pt(.5,1.4),4),t);i.position.set(e+Pt(-.5,.5),de-Pt(.3,.7),n+Pt(-.5,.5)),i.rotation.z=Pt(-.15,.15),i.rotation.x=Pt(-.15,.15),s.add(i)}const Ig=3.2,Dg=5.7,Ug=2,mr=.0022,Ms=.42,al=9,cl=.075,Ng=.7,Og=8,gr=100,Fg=25,Bg=17,ll=.9,zg=4,kg=2.1,Gg=2.7;class Hg{constructor(t){L(this,"camera");L(this,"position");L(this,"velocity",new A);L(this,"onFootstep",null);L(this,"yaw",0);L(this,"pitch",0);L(this,"headBobPhase",0);L(this,"isMoving",!1);L(this,"isRunning",!1);L(this,"isCrouched",!1);L(this,"currentHeight",Mi);L(this,"stamina",gr);L(this,"staminaIdle",0);L(this,"stepAccumulator",0);L(this,"lookSensitivity",1);L(this,"grid",[]);L(this,"colliders",[]);L(this,"keys",new Set);L(this,"joystickInput",{x:0,y:0});L(this,"touchLookActive",!1);L(this,"lookTouchId",null);L(this,"lastTouchX",0);L(this,"lastTouchY",0);L(this,"keyboardReady",!1);L(this,"mouseLookReady",!1);L(this,"joystickReady",!1);L(this,"mobileLookReady",!1);this.camera=t,this.position=new A}init(t,e){this.grid=t,this.position.copy(e),this.camera.position.copy(this.position),this.yaw=0,this.pitch=0}reset(t,e){this.init(t,e),this.keys.clear(),this.joystickInput.x=0,this.joystickInput.y=0,this.stamina=gr,this.staminaIdle=ll,this.stepAccumulator=0,this.headBobPhase=0,this.isRunning=!1,this.isCrouched=!1,this.currentHeight=Mi,this.isMoving=!1,this.touchLookActive=!1,this.lookTouchId=null}setLookSensitivity(t){this.lookSensitivity=Math.max(.4,Math.min(2.5,t))}setColliders(t){this.colliders=t}setupKeyboard(){this.keyboardReady||(this.keyboardReady=!0,document.addEventListener("keydown",t=>{this.keys.add(t.code),(t.code==="ControlLeft"||t.code==="ControlRight")&&(this.isCrouched=!0)}),document.addEventListener("keyup",t=>{this.keys.delete(t.code),(t.code==="ControlLeft"||t.code==="ControlRight")&&(this.isCrouched=!1)}),window.addEventListener("blur",()=>{this.keys.clear(),this.isRunning=!1}))}setupMouseLook(){this.mouseLookReady||(this.mouseLookReady=!0,document.addEventListener("mousemove",t=>{document.pointerLockElement&&(this.yaw-=t.movementX*mr*this.lookSensitivity,this.pitch-=t.movementY*mr*this.lookSensitivity,this.clampPitch())}))}setupMobileLook(t){if(this.mobileLookReady)return;this.mobileLookReady=!0,t.addEventListener("touchstart",n=>{for(let i=0;i<n.changedTouches.length;i++){const r=n.changedTouches[i];if(r.clientX>window.innerWidth*.32){this.touchLookActive=!0,this.lookTouchId=r.identifier,this.lastTouchX=r.clientX,this.lastTouchY=r.clientY;break}}},{passive:!0}),t.addEventListener("touchmove",n=>{if(!(!this.touchLookActive||this.lookTouchId===null))for(let i=0;i<n.touches.length;i++){const r=n.touches[i];if(r.identifier!==this.lookTouchId)continue;const o=r.clientX-this.lastTouchX,a=r.clientY-this.lastTouchY;this.yaw-=o*mr*2*this.lookSensitivity,this.pitch-=a*mr*2*this.lookSensitivity,this.clampPitch(),this.lastTouchX=r.clientX,this.lastTouchY=r.clientY;break}},{passive:!0});const e=n=>{for(let i=0;i<n.changedTouches.length;i++)if(n.changedTouches[i].identifier===this.lookTouchId){this.touchLookActive=!1,this.lookTouchId=null;break}};t.addEventListener("touchend",e,{passive:!0}),t.addEventListener("touchcancel",e,{passive:!0})}setupJoystick(){if(this.joystickReady)return;this.joystickReady=!0;const t=document.getElementById("joystick-base"),e=document.getElementById("joystick-stick");if(!t||!e)return;let n=null,i=0,r=0;const o=38,a=()=>{n=null,e.style.transform="translate(0, 0)",this.joystickInput.x=0,this.joystickInput.y=0},c=u=>{if(n!==null)return;u.preventDefault(),n=u.changedTouches[0].identifier;const d=t.getBoundingClientRect();i=d.left+d.width/2,r=d.top+d.height/2},l=u=>{if(n!==null)for(let f=0;f<u.touches.length;f++){const d=u.touches[f];if(d.identifier!==n)continue;u.preventDefault();let g=d.clientX-i,_=d.clientY-r;const m=Math.sqrt(g*g+_*_);m>o&&(g=g/m*o,_=_/m*o),e.style.transform=`translate(${g}px, ${_}px)`,this.joystickInput.x=Math.abs(g)<6?0:g/o,this.joystickInput.y=Math.abs(_)<6?0:_/o;break}},h=u=>{if(n!==null){for(let f=0;f<u.changedTouches.length;f++)if(u.changedTouches[f].identifier===n){a();break}}};t.addEventListener("touchstart",c,{passive:!1}),document.addEventListener("touchmove",l,{passive:!1}),document.addEventListener("touchend",h,{passive:!0}),document.addEventListener("touchcancel",h,{passive:!0})}setRunning(t){this.isRunning=t}setCrouching(t){this.isCrouched=t}get facing(){return this.yaw}get crouching(){return this.isCrouched}get staminaRatio(){return this.stamina/gr}get sprinting(){return this.isRunning&&this.isMoving&&this.stamina>0}clampPitch(){this.pitch=Math.max(-Math.PI/2.5,Math.min(Math.PI/2.5,this.pitch))}update(t){var p;const e=new A(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),n=new A(Math.cos(this.yaw),0,-Math.sin(this.yaw)),i=new A;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&i.add(e),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&i.sub(e),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&i.sub(n),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&i.add(n),(Math.abs(this.joystickInput.x)>.08||Math.abs(this.joystickInput.y)>.08)&&(i.add(e.clone().multiplyScalar(-this.joystickInput.y)),i.add(n.clone().multiplyScalar(this.joystickInput.x))),this.isMoving=i.lengthSq()>.01,this.isMoving&&i.normalize();const r=this.isRunning&&this.isMoving&&this.stamina>zg;r&&this.stamina>0?(this.stamina=Math.max(0,this.stamina-Fg*t),this.staminaIdle=0):(this.staminaIdle+=t,this.staminaIdle>ll&&(this.stamina=Math.min(gr,this.stamina+Bg*t)));const o=r&&this.stamina>0,a=this.isCrouched?Ug:o?Dg:Ig;this.velocity.copy(i).multiplyScalar(a);const c=this.position.clone();c.x+=this.velocity.x*t,c.z+=this.velocity.z*t;const l=[[Ms,0],[-Ms,0],[0,Ms],[0,-Ms]];let h=!0;for(const[w,E]of l)if(!pr(this.grid,c.x+w,this.position.z+E)){h=!1;break}h&&(this.position.x=c.x);let u=!0;for(const[w,E]of l)if(!pr(this.grid,this.position.x+w,c.z+E)){u=!1;break}u&&(this.position.z=c.z),this.resolveColliders();const f=this.isCrouched?Ng:Mi;this.currentHeight+=(f-this.currentHeight)*Math.min(1,t*Og);let d=0;if(this.isMoving){const w=o?al*1.45:al,E=(o?cl*1.35:cl)*(this.isCrouched?.3:1);this.headBobPhase+=t*w,this.position.y=this.currentHeight+Math.sin(this.headBobPhase)*E,d=Math.sin(this.headBobPhase*.5)*(o?.035:.02)*(this.isCrouched?.3:1)}else this.headBobPhase=0,this.position.y+=(this.currentHeight-this.position.y)*Math.min(1,t*6);const g=Math.hypot(this.velocity.x,this.velocity.z)*t;this.stepAccumulator+=g;const _=o?Gg:kg;this.stepAccumulator>=_&&(this.stepAccumulator=0,(p=this.onFootstep)==null||p.call(this,o)),this.camera.position.copy(this.position);const m=new A(this.position.x-Math.sin(this.yaw)*Math.cos(this.pitch),this.position.y+Math.sin(this.pitch),this.position.z-Math.cos(this.yaw)*Math.cos(this.pitch));this.camera.lookAt(m),this.camera.rotation.z+=d}resolveColliders(){for(const t of this.colliders){const e=this.position.x-t.x,n=this.position.z-t.z,i=t.r+Ms,r=e*e+n*n;if(r>=i*i)continue;const o=Math.sqrt(r);if(o<1e-4){this.position.x+=i;continue}const a=(i-o)/o,c=this.position.x+e*a,l=this.position.z+n*a;pr(this.grid,c,this.position.z)&&(this.position.x=c),pr(this.grid,this.position.x,l)&&(this.position.z=l)}}getForwardXZ(){return new St(-Math.sin(this.yaw),-Math.cos(this.yaw))}getGridPos(){return{row:Math.round(this.position.z/Y),col:Math.round(this.position.x/Y)}}}function xn(s,t,e){return t<0||t>=s.length||e<0||e>=s[0].length?!1:s[t][e]!==0}function Vg(s){if(s.length<=2)return s;const t=[s[0]];for(let e=1;e<s.length-1;e++){const n=t[t.length-1],i=s[e],r=s[e+1],o=n.row===i.row&&i.row===r.row,a=n.col===i.col&&i.col===r.col;!o&&!a&&t.push(i)}return t.push(s[s.length-1]),t}const Wg=[[1,0],[-1,0],[0,1],[0,-1]];function qg(s,t,e){const n=s.length,i=s[0].length;if(!xn(s,t.row,t.col))return[];if(!xn(s,e.row,e.col))return[];const r=t.row*i+t.col,o=e.row*i+e.col;if(r===o)return[];const a=new Int32Array(n*i).fill(-1),c=new Uint8Array(n*i),l=[r];c[r]=1;let h=0,u=!1;for(;h<l.length;){const g=l[h++];if(g===o){u=!0;break}const _=Math.floor(g/i),m=g%i;for(const[p,w]of Wg){const E=_+p,y=m+w;if(!xn(s,E,y))continue;const F=E*i+y;c[F]||(c[F]=1,a[F]=g,l.push(F))}}if(!u)return[];const f=[];let d=o;for(;d!==r;)if(f.push({row:Math.floor(d/i),col:d%i}),d=a[d],d<0)return[];return f.reverse(),Vg(f)}const Xg=1.5,Yg=2.2,$g=3.5,Kg=12,jg=9,Zg=4.5,Jg=5,_r=7,Qg=1.35,t_=.5,e_=.35,n_=.45;function i_(s,t,e){const n=Math.PI*2;let i=(t-s)%n;return i>Math.PI&&(i-=n),i<-Math.PI&&(i+=n),s+i*e}class s_{constructor(t,e){L(this,"mesh");L(this,"onGrowl",null);L(this,"grid");L(this,"position");L(this,"path",[]);L(this,"pathIndex",0);L(this,"repathTimer",0);L(this,"state","patrol");L(this,"target",new A);L(this,"lastKnown",new A);L(this,"memoryTimer",0);L(this,"stunTimer",0);L(this,"growlCooldown",0);L(this,"aggression",1);L(this,"animPhase",0);L(this,"patrolPoints",[]);L(this,"patrolIndex",0);L(this,"colliders",[]);L(this,"torso");L(this,"headPivot");L(this,"jaw");L(this,"leftArmPivot");L(this,"rightArmPivot");L(this,"leftLegPivot");L(this,"rightLegPivot");L(this,"eyeLight");L(this,"mirrorLight",null);L(this,"boneSaw",null);this.grid=t,this.position=e.clone(),this.mesh=new Ut;const n=new Lt({color:12103840,roughness:.78,metalness:.03,emissive:4465176,emissiveIntensity:2.2}),i=new Lt({color:4864570,roughness:1,metalness:0}),r=new Lt({color:2491914,roughness:1}),o=new Lt({color:14208942,roughness:.7}),a=new Lt({color:16768220,emissive:16720418,emissiveIntensity:6}),c=new Lt({color:13222574,roughness:.92,metalness:0,emissive:1707272,emissiveIntensity:.55}),l=new Lt({color:6033936,roughness:.55,metalness:.05,emissive:1836034,emissiveIntensity:.4});new Lt({color:15261896,roughness:.6,metalness:.02,emissive:2761752,emissiveIntensity:.8});const h=new Lt({color:10134184,roughness:.3,metalness:.85,emissive:1316634,emissiveIntensity:.5});this.torso=new I(new kt(.34,.44,1.35,10),n),this.torso.position.y=1.28,this.torso.rotation.x=.2,this.torso.castShadow=!0,this.mesh.add(this.torso);const u=new I(new en(.46,12,10),n);u.position.set(0,1.88,-.02),u.scale.set(1.35,.55,.62),u.castShadow=!0,this.mesh.add(u);for(let z=0;z<4;z++){const tt=new I(new nn(.34-z*.035,.026,6,16),i);tt.position.set(0,1.72-z*.2,-.02),tt.rotation.x=Math.PI/2+.2,tt.scale.set(1,1,.6),this.mesh.add(tt)}const f=z=>{const tt=new I(new it(.26,1.32,.05),c);tt.position.set(z*.19,1.24,.26),tt.rotation.z=z*.06,tt.castShadow=!0,this.mesh.add(tt);const st=new I(new it(.2,.5,.052),l);st.position.set(z*.17,.92,.265),st.rotation.z=z*.08,this.mesh.add(st)};f(-1),f(1);const d=new I(new it(.74,1.34,.06),c);d.position.set(0,1.26,-.3),d.castShadow=!0,this.mesh.add(d);const g=new I(new kt(.52,.6,.4,12,1,!0),c);g.position.y=1.78,g.castShadow=!0,this.mesh.add(g);const _=new I(new en(.24,10,8),l);_.position.set(0,1.42,-.04),_.scale.set(1.1,.8,.7),this.mesh.add(_);const m=(z,tt)=>{const st=new Ut,xt=new I(new kt(.022,.022,.17,7),l);st.add(xt);const Gt=new I(new kt(.005,.005,.12,5),h);Gt.position.y=.14,st.add(Gt),st.position.set(0,tt,.06),st.rotation.z=z,st.rotation.x=.3,this.mesh.add(st)};m(-.5,1.62),m(.4,1.52),m(-.2,1.4),m(.62,1.34),m(-.75,1.28),this.headPivot=new Ut,this.headPivot.position.set(0,2,0),this.mesh.add(this.headPivot);const p=new I(new en(.3,12,10),n);p.position.set(0,.28,-.08),p.scale.set(.86,1.35,1),p.castShadow=!0,this.headPivot.add(p);const w=new I(new it(.42,.07,.1),i);w.position.set(0,.4,-.26),w.rotation.x=-.25,this.headPivot.add(w),this.jaw=new I(new it(.3,.26,.3),r),this.jaw.position.set(0,-.06,-.22),this.jaw.castShadow=!0,this.headPivot.add(this.jaw);const E=new Dr(.022,.075,4);for(let z=0;z<7;z++){const tt=-.115+z*.038,st=new I(E,o);st.position.set(tt,.12,-.31),st.rotation.x=Math.PI,this.headPivot.add(st);const xt=new I(E,o);xt.position.set(tt,-.02,-.33),this.headPivot.add(xt)}const y=new en(.075,10,10);for(const z of[-.13,.13]){const tt=new I(new en(.1,8,8),i);tt.position.set(z,.33,-.28),tt.scale.set(1,1,.5),this.headPivot.add(tt);const st=new I(y,a);st.position.set(z,.33,-.33),st.scale.set(.85,1.15,.85),this.headPivot.add(st)}this.eyeLight=new Ur(16722458,2,14),this.eyeLight.position.set(0,.35,-.34),this.headPivot.add(this.eyeLight);const F=new Dr(.032,.22,5),R=1.76,T=1.7,P=z=>{const tt=new Ut;tt.position.set(z*.5,R,.04),tt.rotation.z=z*.1;const st=new I(new kt(.085,.115,T,8),n);st.position.y=-T/2,st.castShadow=!0,tt.add(st);const xt=new I(new en(.1,8,7),i);xt.position.y=-T*.52,tt.add(xt);for(const Gt of[-.055,0,.055]){const ie=new I(F,o);ie.position.set(Gt,-T-.08,.02),ie.rotation.x=Math.PI,tt.add(ie)}return this.mesh.add(tt),tt};this.leftArmPivot=P(-1),this.rightArmPivot=P(1);const S=new Ut;S.position.set(.02,-.72,.08);const x=new I(new kt(.17,.17,.028,18),h);x.rotation.z=Math.PI/2,x.position.set(.05,-.12,0),S.add(x);const C=new I(new it(.22,.06,.07),l);C.position.set(-.16,-.1,0),S.add(C),this.boneSaw=S,this.rightArmPivot.add(S);const B=new I(new nn(.27,.018,5,14),c);B.position.set(0,.3,.12),B.rotation.y=Math.PI/2,B.rotation.z=.25,this.headPivot.add(B);const G=new I(new kt(.085,.085,.03,12),h);G.rotation.x=Math.PI/2,G.position.set(0,.5,-.24),this.headPivot.add(G);const X=new I(new nn(.29,.02,5,14),c);X.rotation.y=Math.PI/2,X.position.y=.48,this.headPivot.add(X);const Z=new Ur(13625087,.7,5);Z.position.set(0,.5,-.3),this.headPivot.add(Z),this.mirrorLight=Z;const q=.92,et=z=>{const tt=new Ut;tt.position.set(z*.19,q,0);const st=new I(new kt(.11,.13,q,8),n);st.position.y=-q/2,st.castShadow=!0,tt.add(st);const xt=new I(new it(.19,.11,.34),i);return xt.position.set(0,-q+.03,-.06),tt.add(xt),this.mesh.add(tt),tt};this.leftLegPivot=et(-1),this.rightLegPivot=et(1),this.mesh.position.copy(this.position),this.buildPatrolPoints()}buildPatrolPoints(){const t=[];for(let e=1;e<this.grid.length-1;e++)for(let n=1;n<this.grid[0].length-1;n++){if(this.grid[e][n]!==1)continue;(xn(this.grid,e-1,n)?1:0)+(xn(this.grid,e+1,n)?1:0)+(xn(this.grid,e,n-1)?1:0)+(xn(this.grid,e,n+1)?1:0)<=2&&t.push(new A(n*Y,1.5,e*Y))}t.length===0&&t.push(new A(8*Y,1.5,8*Y));for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}this.patrolPoints=t.slice(0,Math.min(t.length,8)),this.patrolIndex=0}addToScene(t){t.add(this.mesh)}setVisible(t){this.mesh.visible=t}setColliders(t){this.colliders=t}resolveColliders(){for(const t of this.colliders){const e=this.position.x-t.x,n=this.position.z-t.z,i=t.r+t_,r=e*e+n*n;if(r>=i*i)continue;const o=Math.sqrt(r);if(o<1e-4){this.position.x+=i;continue}const a=(i-o)/o,c=this.position.x+e*a,l=this.position.z+n*a;xn(this.grid,Math.round(this.position.z/Y),Math.round(c/Y))&&(this.position.x=c),xn(this.grid,Math.round(l/Y),Math.round(this.position.x/Y))&&(this.position.z=l)}}hasLineOfSight(t){const e=t.x-this.position.x,n=t.z-this.position.z,i=Math.hypot(e,n);if(i>Kg*this.aggression)return!1;const r=Math.ceil(i/(Y*.4)),o=e/r,a=n/r;for(let c=1;c<r;c++){const l=Math.round((this.position.x+o*c)/Y),h=Math.round((this.position.z+a*c)/Y);if(h<0||h>=this.grid.length||l<0||l>=this.grid[0].length||this.grid[h][l]===0)return!1}return!0}gridOf(t){return{row:Math.round(t.z/Y),col:Math.round(t.x/Y)}}repath(t){const e=this.gridOf(this.position),n=this.gridOf(t),i=qg(this.grid,e,n);i.length>0&&(this.path=i,this.pathIndex=0)}distanceTo(t){return this.position.distanceTo(t)}get currentPosition(){return this.position}get isChasing(){return this.state==="chase"&&this.stunTimer<=0}get stateName(){return this.state}setAggression(t){this.aggression=Math.max(.7,Math.min(1.6,t))}stun(t){this.stunTimer=Math.max(this.stunTimer,t),this.state="investigate",this.memoryTimer=_r,this.lastKnown.copy(this.position),this.path=[],this.pathIndex=0}goInvestigateAt(t){this.state="investigate",this.memoryTimer=_r*1.5,this.lastKnown.copy(t),this.path=[],this.pathIndex=0,this.stunTimer=0}update(t,e,n,i=!1){var _;this.growlCooldown=Math.max(0,this.growlCooldown-t);const r=Math.hypot(e.x-this.position.x,e.z-this.position.z);if(this.stunTimer>0)return this.stunTimer-=t,this.animate(t,.4),this.mesh.position.copy(this.position),{caught:!1};const o=i?!1:this.hasLineOfSight(e),c=r<(i?2.2:n?jg:Zg);if(o)this.state!=="chase"&&this.growlCooldown<=0&&(this.growlCooldown=7,(_=this.onGrowl)==null||_.call(this)),this.state="chase",this.lastKnown.copy(e),this.memoryTimer=Jg;else if(this.state==="chase")this.memoryTimer-=t,this.memoryTimer<=0&&(this.state="investigate",this.memoryTimer=_r);else if(c)this.lastKnown.copy(e),this.state="investigate",this.memoryTimer=_r;else if(this.state==="investigate"){this.memoryTimer-=t;const m=Math.hypot(this.position.x-this.lastKnown.x,this.position.z-this.lastKnown.z)<1.1;(this.memoryTimer<=0||m)&&(this.state="patrol",this.path=[])}if(this.state==="chase")this.target.copy(e);else if(this.state==="investigate")this.target.copy(this.lastKnown);else{const m=this.patrolPoints[this.patrolIndex]??this.position;this.target.copy(m),this.position.distanceTo(m)<1.2&&(this.patrolIndex=(this.patrolIndex+1)%this.patrolPoints.length,this.path=[])}this.target.y=this.position.y;const h=(this.state==="chase"?$g:this.state==="investigate"?Yg:Xg)*this.aggression*(1+Math.sin(this.animPhase*.3)*.06);if(this.repathTimer-=t,this.repathTimer<=0){this.repathTimer=e_;const m=this.gridOf(this.target),p=this.gridOf(this.position),w=this.path.some(y=>y.row===m.row&&y.col===m.col),E=m.row===p.row&&m.col===p.col;!w&&!E&&this.repath(this.target)}let u=this.target.x-this.position.x,f=this.target.z-this.position.z;const d=this.path[this.pathIndex];if(d){const m=d.col*Y,p=d.row*Y;u=m-this.position.x,f=p-this.position.z,Math.hypot(u,f)<n_&&this.pathIndex++}const g=Math.hypot(u,f);if(g>.01){const m=u/g,p=f/g,w=this.position.x+m*h*t,E=this.position.z+p*h*t;xn(this.grid,Math.round(E/Y),Math.round(w/Y))?(this.position.x=w,this.position.z=E,this.resolveColliders()):(this.path=[],this.pathIndex=0);const y=Math.atan2(m,p);this.mesh.rotation.y=i_(this.mesh.rotation.y,y,Math.min(1,t*7))}return this.animate(t,this.state==="chase"?1:.45),this.mesh.position.copy(this.position),{caught:r<Qg}}animate(t,e){this.animPhase+=t*(6+e*6);const n=Math.sin(this.animPhase)*(.04+e*.1),i=Math.sin(this.animPhase)*(.25+e*.45);if(this.torso.position.y=1.22+n,this.torso.rotation.z=Math.sin(this.animPhase*.5)*(.02+e*.05),this.torso.rotation.x=.2+e*.13,this.headPivot.position.y=2+n,this.headPivot.rotation.z=Math.sin(this.animPhase*.35)*(.04+e*.07),this.headPivot.rotation.x=Math.abs(Math.sin(this.animPhase*.5))*.06*e,this.jaw.rotation.x=.1+e*.18+Math.abs(Math.sin(this.animPhase*.85))*.09,this.leftArmPivot.rotation.x=i,this.rightArmPivot.rotation.x=-i,this.leftLegPivot.rotation.x=-i*.8,this.rightLegPivot.rotation.x=i*.8,this.boneSaw&&(this.boneSaw.rotation.x=-i*.7,this.boneSaw.rotation.z=Math.sin(this.animPhase*.5)*.1),this.mirrorLight){const r=Math.random()<.06?.15:.55+Math.sin(this.animPhase*2.3)*.2;this.mirrorLight.intensity=r+e*.5}this.eyeLight.intensity=.6+e*1.6+Math.sin(this.animPhase*3)*.25*e}reset(t){this.position.copy(t),this.mesh.position.copy(this.position),this.state="patrol",this.path=[],this.pathIndex=0,this.repathTimer=0,this.memoryTimer=0,this.stunTimer=0,this.growlCooldown=0,this.patrolIndex=0,this.aggression=1,this.animPhase=0,this.mesh.rotation.set(0,0,0),this.torso.rotation.set(.2,0,0),this.headPivot.rotation.set(0,0,0),this.leftArmPivot.rotation.set(0,0,-.1),this.rightArmPivot.rotation.set(0,0,.1),this.leftLegPivot.rotation.set(0,0,0),this.rightLegPivot.rotation.set(0,0,0),this.patrolPoints.length===0&&this.buildPatrolPoints()}}const vr=420,an=26,hl=3.4,ys=1400,xr=24,ul=16;class r_{constructor(t){L(this,"scene");L(this,"ambientLight");L(this,"flickerLights",[]);L(this,"fluorescents",[]);L(this,"fogDensity",.08);L(this,"danger",0);L(this,"powerOn",!1);L(this,"powerLevel",0);L(this,"blackoutUntil",0);L(this,"eventTimer",0);L(this,"nextEventTime",18);L(this,"onJumpscare",()=>{});L(this,"onCreepySound",()=>{});L(this,"flashlight",null);L(this,"flashlightTarget",null);L(this,"fillLight",null);L(this,"dust",null);L(this,"dustSpeeds",null);L(this,"dustEnabled",!0);L(this,"outdoors",!1);L(this,"outdoorLevel",0);L(this,"rain",null);L(this,"rainSpeeds",null);L(this,"rainLengths",null);L(this,"rainEnabled",!0);L(this,"rainLevel",0);L(this,"lightning",0);L(this,"lightningTimer",6);L(this,"onLightning",null);this.scene=t,this.ambientLight=new I0(4016732,.95),t.fog=new bs(659222,this.fogDensity),t.background=jc(),this.attachToScene(),this.createDust(),this.createRain()}setCallbacks(t,e){this.onJumpscare=t,this.onCreepySound=e}setOutdoors(t){this.outdoors=t}setRainEnabled(t){this.rainEnabled=t,this.rain&&!t&&(this.rain.visible=!1)}attachToScene(){this.ambientLight.parent||this.scene.add(this.ambientLight),this.dust&&!this.dust.parent&&this.scene.add(this.dust),this.rain&&!this.rain.parent&&this.scene.add(this.rain),this.scene.background instanceof ke||(this.scene.background=jc())}addFlickerLight(t,e){t.intensity=e,t.userData.baseIntensity=e,this.flickerLights.push(t),this.scene.add(t)}createWallLight(t,e,n,i=16755302,r=!1){const o=new Ur(i,.8,8);return o.position.set(t,e,n),o.castShadow=r,r&&(o.shadow.mapSize.width=256,o.shadow.mapSize.height=256,o.shadow.bias=-.01),o}setFluorescentMaterials(t){this.fluorescents=[...t]}createFlashlight(t){this.flashlight&&t.remove(this.flashlight),this.flashlightTarget&&t.remove(this.flashlightTarget),this.fillLight&&t.remove(this.fillLight);const e=new P0(16774368,5.5,44,Math.PI/3.2,.35,.85);e.castShadow=!0,e.shadow.mapSize.width=512,e.shadow.mapSize.height=512,e.shadow.bias=-.0018,e.position.set(.16,-.12,0),t.add(e),e.target.position.set(0,0,-1),t.add(e.target);const n=new Ur(13162734,1.15,11,1.8);return t.add(n),this.flashlight=e,this.flashlightTarget=e.target,this.fillLight=n,e}get flashlightRef(){return this.flashlight}setDanger(t){this.danger=Math.max(0,Math.min(1,t))}setPower(t){this.powerOn=t}blackout(t){this.blackoutUntil=performance.now()+t}setDustEnabled(t){this.dustEnabled=t,this.dust&&(this.dust.visible=t)}update(t,e,n){var m;const i=performance.now()<this.blackoutUntil,r=this.powerOn&&!i?1:0;this.powerLevel+=(r-this.powerLevel)*Math.min(1,t*(i?3.5:.55));const o=.55+this.powerLevel*.6;this.outdoorLevel+=((this.outdoors?1:0)-this.outdoorLevel)*Math.min(1,t*1.6),this.rainLevel+=((this.outdoors&&this.rainEnabled?1:0)-this.rainLevel)*Math.min(1,t*1.2);for(const p of this.flickerLights){const w=(p.userData.baseIntensity||.5)*o;Math.random()<.02?p.intensity=w*(.25+Math.random()*.5):Math.random()<.05?p.intensity=w*(.85+Math.random()*.4):p.intensity+=(w-p.intensity)*t*8}const a=.22+this.powerLevel*1.3;for(const p of this.fluorescents)Math.random()<.012?p.emissiveIntensity=a*.08:Math.random()<.03?p.emissiveIntensity=a*1.6:p.emissiveIntensity+=(a-p.emissiveIntensity)*t*6;const c=.024-this.powerLevel*.01+e*.008+this.danger*.018,l=.018+this.danger*.015,h=c+(l-c)*this.outdoorLevel;if(this.fogDensity+=(h-this.fogDensity)*t*.7,this.scene.fog instanceof bs){this.scene.fog.density=this.fogDensity;const p=this.scene.fog.color,w=.04+this.danger*.08,E=.045,y=.06+this.danger*.03,F=.07+this.danger*.06,R=.085,T=.11+this.danger*.02;p.setRGB(w+(F-w)*this.outdoorLevel,E+(R-E)*this.outdoorLevel,y+(T-y)*this.outdoorLevel)}this.rainLevel>.4&&(this.lightningTimer-=t,this.lightningTimer<=0&&(this.lightningTimer=6+Math.random()*13,this.lightning=1,(m=this.onLightning)==null||m.call(this))),this.lightning>0&&(this.lightning=Math.max(0,this.lightning-t*3.2));const u=this.lightning>.55?this.lightning:this.lightning*.55,f=.95+this.powerLevel*.35,d=1.1+this.powerLevel*.15,g=f+(d-f)*this.outdoorLevel,_=Math.sin(performance.now()*7e-4)*.03+this.danger*.07;this.ambientLight.intensity=(i?.04:g+_)+u*2.6,this.ambientLight.color.setRGB(.06+this.outdoorLevel*.04+u*.5,.1+this.outdoorLevel*.06+u*.55,.15+this.outdoorLevel*.12+u*.7),this.updateDust(t,n),this.updateRain(t,n),this.eventTimer+=t,this.eventTimer>=this.nextEventTime&&(this.eventTimer=0,this.nextEventTime=14+Math.random()*22,this.danger<.4&&this.triggerRandomEvent())}createDust(){const t=new Float32Array(vr*3);this.dustSpeeds=new Float32Array(vr);for(let i=0;i<vr;i++)t[i*3]=(Math.random()-.5)*an*2,t[i*3+1]=Math.random()*hl,t[i*3+2]=(Math.random()-.5)*an*2,this.dustSpeeds[i]=.02+Math.random()*.09;const e=new Ie;e.setAttribute("position",new Ze(t,3));const n=new ba({map:tg(),color:14209728,size:.07,sizeAttenuation:!0,transparent:!0,opacity:.42,depthWrite:!1,blending:Ao});this.dust=new Ql(e,n),this.dust.frustumCulled=!1,this.dust.visible=this.dustEnabled,this.scene.add(this.dust)}updateDust(t,e){if(!this.dust||!this.dustSpeeds||!this.dustEnabled)return;const n=this.dust.geometry.getAttribute("position"),i=n.array,r=this.dust.position;for(let o=0;o<vr;o++){const a=this.dustSpeeds[o];i[o*3+1]+=a*t,i[o*3]+=Math.sin((i[o*3+1]+o)*.5)*t*.12,i[o*3+1]>hl&&(i[o*3+1]=0,i[o*3]=(Math.random()-.5)*an*2,i[o*3+2]=(Math.random()-.5)*an*2),i[o*3]-r.x>an&&(i[o*3]-=an*2),i[o*3]-r.x<-an&&(i[o*3]+=an*2),i[o*3+2]-r.z>an&&(i[o*3+2]-=an*2),i[o*3+2]-r.z<-an&&(i[o*3+2]+=an*2)}n.needsUpdate=!0,e&&this.dust.position.set(e.position.x,0,e.position.z)}createRain(){const t=new Float32Array(ys*6);this.rainSpeeds=new Float32Array(ys),this.rainLengths=new Float32Array(ys);for(let i=0;i<ys;i++){const r=(Math.random()-.5)*xr*2,o=Math.random()*ul,a=(Math.random()-.5)*xr*2,c=.5+Math.random()*.9;t[i*6]=r,t[i*6+1]=o,t[i*6+2]=a,t[i*6+3]=r+.05,t[i*6+4]=o-c,t[i*6+5]=a,this.rainSpeeds[i]=15+Math.random()*12,this.rainLengths[i]=c}const e=new Ie;e.setAttribute("position",new Ze(t,3));const n=new Jl({color:11058388,transparent:!0,opacity:.3,depthWrite:!1,fog:!1});this.rain=new p0(e,n),this.rain.frustumCulled=!1,this.rain.visible=!1,this.scene.add(this.rain)}updateRain(t,e){if(!this.rain||!this.rainSpeeds||!this.rainLengths)return;if(this.rainLevel<.02||!e){this.rain.visible=!1;return}this.rain.visible=!0;const n=this.rain.material;n.opacity=.3*this.rainLevel;const i=this.rain.geometry.getAttribute("position"),r=i.array,o=1.6,a=this.rain.position;for(let c=0;c<ys;c++){const h=this.rainSpeeds[c]*t;if(r[c*6+1]-=h,r[c*6+4]-=h,r[c*6]+=o*t,r[c*6+3]+=o*t,r[c*6+4]<0){const u=a.x+(Math.random()-.5)*xr*2,f=a.z+(Math.random()-.5)*xr*2,d=ul*(.6+Math.random()*.4);r[c*6]=u,r[c*6+1]=d,r[c*6+2]=f,r[c*6+3]=u+.05,r[c*6+4]=d-this.rainLengths[c],r[c*6+5]=f}}i.needsUpdate=!0,this.rain.position.set(e.position.x,0,e.position.z)}triggerRandomEvent(){const t=Math.random();if(t<.35){this.onCreepySound();const e=this.ambientLight.intensity;this.ambientLight.intensity=0,window.setTimeout(()=>{this.ambientLight.intensity=e*.4,window.setTimeout(()=>{this.ambientLight.intensity=e},450)},280)}else if(t<.65)this.onCreepySound();else if(t<.85){for(const e of this.flickerLights){const n=e.userData.baseIntensity||1;e.intensity=n*3,window.setTimeout(()=>{e.intensity=0,window.setTimeout(()=>{e.intensity=n},180)},90)}this.onCreepySound()}else this.onJumpscare()}reset(){var t;this.eventTimer=0,this.nextEventTime=18,this.fogDensity=.08,this.danger=0,this.powerOn=!1,this.powerLevel=0,this.blackoutUntil=0,this.outdoors=!1,this.outdoorLevel=0,this.rainLevel=0,this.lightning=0,this.lightningTimer=6,this.scene.fog instanceof bs&&(this.scene.fog.density=this.fogDensity,this.scene.fog.color.set(659222));for(const e of this.flickerLights)(t=e.parent)==null||t.remove(e);this.flickerLights=[],this.fluorescents=[],this.ambientLight.intensity=.6,this.ambientLight.color.set(2767440),this.rain&&(this.rain.visible=!1,this.rain.position.set(0,0,0)),this.dust&&this.dust.position.set(0,0,0),this.attachToScene()}}class o_{constructor(){L(this,"ctx",null);L(this,"masterGain",null);L(this,"ambienceGain",null);L(this,"ambienceOsc",null);L(this,"ambienceOsc2",null);L(this,"windSource",null);L(this,"rainSource",null);L(this,"rainGain",null);L(this,"isInitialized",!1);L(this,"ambienceRunning",!1);L(this,"muted",!1);L(this,"volume",.5)}async init(){this.isInitialized||(this.ctx=new AudioContext,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.muted?0:this.volume,this.masterGain.connect(this.ctx.destination),this.ambienceGain=this.ctx.createGain(),this.ambienceGain.gain.value=0,this.ambienceGain.connect(this.masterGain),this.isInitialized=!0)}resume(){var t;((t=this.ctx)==null?void 0:t.state)==="suspended"&&this.ctx.resume()}suspend(){var t;((t=this.ctx)==null?void 0:t.state)==="running"&&this.ctx.suspend()}setMuted(t){this.muted=t,this.masterGain&&(this.masterGain.gain.value=t?0:this.volume)}get isMuted(){return this.muted}setVolume(t){this.volume=Math.max(0,Math.min(1,t)),this.masterGain&&!this.muted&&(this.masterGain.gain.value=this.volume)}startAmbience(){!this.ctx||!this.ambienceGain||(this.ambienceRunning||(this.buildAmbienceGraph(),this.ambienceRunning=!0),this.ambienceGain.gain.setTargetAtTime(.3,this.ctx.currentTime,1.2))}buildAmbienceGraph(){if(!this.ctx||!this.ambienceGain)return;this.ambienceOsc=this.ctx.createOscillator(),this.ambienceOsc.type="sawtooth",this.ambienceOsc.frequency.value=38;const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.value=190,this.ambienceOsc.connect(t),t.connect(this.ambienceGain),this.ambienceOsc.start(),this.ambienceOsc2=this.ctx.createOscillator(),this.ambienceOsc2.type="sine",this.ambienceOsc2.frequency.value=213;const e=this.ctx.createBiquadFilter();e.type="bandpass",e.frequency.value=300,e.Q.value=22;const n=this.ctx.createGain();n.gain.value=.09,this.ambienceOsc2.connect(e),e.connect(n),n.connect(this.ambienceGain),this.ambienceOsc2.start();const r=this.ctx.createBuffer(1,this.ctx.sampleRate*4,this.ctx.sampleRate),o=r.getChannelData(0);for(let l=0;l<o.length;l++)o[l]=(Math.random()*2-1)*.4;this.windSource=this.ctx.createBufferSource(),this.windSource.buffer=r,this.windSource.loop=!0;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=340;const c=this.ctx.createGain();c.gain.value=.45,this.windSource.connect(a),a.connect(c),c.connect(this.ambienceGain),this.windSource.start()}stopAmbience(){!this.ctx||!this.ambienceGain||this.ambienceGain.gain.setTargetAtTime(0,this.ctx.currentTime,1)}playCreepySound(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.createOscillator(),e=this.ctx.createGain(),n=this.ctx.createBiquadFilter();t.type=Math.random()>.5?"sine":"triangle",t.frequency.value=100+Math.random()*400,n.type="bandpass",n.frequency.value=200+Math.random()*600,n.Q.value=10+Math.random()*30,e.gain.value=0,t.connect(n),n.connect(e),e.connect(this.masterGain);const i=this.ctx.currentTime;e.gain.setTargetAtTime(.07+Math.random()*.05,i,.3),e.gain.setTargetAtTime(0,i+1+Math.random()*2,.5),t.frequency.setTargetAtTime(t.frequency.value+(Math.random()-.5)*100,i+.5,1),t.start(i),t.stop(i+4)}playGrowl(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="sawtooth",e.frequency.setValueAtTime(120,t),e.frequency.exponentialRampToValueAtTime(46,t+.9);const n=this.ctx.createOscillator();n.type="sine",n.frequency.value=17;const i=this.ctx.createGain();i.gain.value=22,n.connect(i),i.connect(e.frequency);const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=520;const o=this.ctx.createGain();o.gain.value=0,o.gain.setTargetAtTime(.35,t,.04),o.gain.setTargetAtTime(0,t+.85,.35),e.connect(r),r.connect(o),o.connect(this.masterGain),e.start(t),n.start(t),e.stop(t+1.6),n.stop(t+1.6)}playDamage(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="triangle",e.frequency.setValueAtTime(180,t),e.frequency.exponentialRampToValueAtTime(38,t+.35);const n=this.ctx.createGain();n.gain.value=.45,n.gain.setTargetAtTime(0,t+.25,.15),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.7);const i=Math.floor(this.ctx.sampleRate*.25),r=this.ctx.createBuffer(1,i,this.ctx.sampleRate),o=r.getChannelData(0);for(let l=0;l<i;l++)o[l]=(Math.random()*2-1)*Math.exp(-l/(i*.12));const a=this.ctx.createBufferSource();a.buffer=r;const c=this.ctx.createGain();c.gain.value=.3,a.connect(c),c.connect(this.masterGain),a.start(t)}playFootstep(t=.3){if(!this.ctx||!this.masterGain)return;const e=Math.floor(this.ctx.sampleRate*.12),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let c=0;c<e;c++)i[c]=(Math.random()*2-1)*Math.exp(-c/(e*.09));const r=this.ctx.createBufferSource();r.buffer=n;const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.value=380+Math.random()*220;const a=this.ctx.createGain();a.gain.value=t,r.connect(o),o.connect(a),a.connect(this.masterGain),r.start()}playGlassShatter(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=Math.floor(this.ctx.sampleRate*.35),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let c=0;c<e;c++)i[c]=(Math.random()*2-1)*Math.exp(-c/(e*.14));const r=this.ctx.createBufferSource();r.buffer=n;const o=this.ctx.createBiquadFilter();o.type="highpass",o.frequency.value=3e3;const a=this.ctx.createGain();a.gain.value=.5,r.connect(o),o.connect(a),a.connect(this.masterGain),r.start(t);for(let c=0;c<9;c++){const l=this.ctx.createOscillator(),h=this.ctx.createGain();l.type="triangle",l.frequency.value=2400+Math.random()*3600,h.gain.value=0,l.connect(h),h.connect(this.masterGain);const u=t+Math.random()*.28;h.gain.setValueAtTime(1e-4,u),h.gain.exponentialRampToValueAtTime(.06+Math.random()*.05,u+.008),h.gain.exponentialRampToValueAtTime(1e-4,u+.12+Math.random()*.25),l.start(u),l.stop(u+.5)}}playNote(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=Math.floor(this.ctx.sampleRate*.3),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let c=0;c<e;c++)i[c]=(Math.random()*2-1)*(1-c/e);const r=this.ctx.createBufferSource();r.buffer=n;const o=this.ctx.createBiquadFilter();o.type="highpass",o.frequency.value=2200;const a=this.ctx.createGain();a.gain.value=.16,r.connect(o),o.connect(a),a.connect(this.masterGain),r.start(t),[784,1046].forEach((c,l)=>{const h=this.ctx.createOscillator(),u=this.ctx.createGain();h.type="sine",h.frequency.value=c,u.gain.value=0,h.connect(u),u.connect(this.masterGain);const f=t+.08+l*.12;u.gain.setTargetAtTime(.08,f,.02),u.gain.setTargetAtTime(0,f+.3,.1),h.start(f),h.stop(f+.7)})}playKeyPickup(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime;[523,659,784,1047].forEach((e,n)=>{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.value=e,r.gain.value=0,i.connect(r),r.connect(this.masterGain);const o=t+n*.1;r.gain.setTargetAtTime(.15,o,.01),r.gain.setTargetAtTime(0,o+.15,.05),i.start(o),i.stop(o+.3)})}playJumpscare(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=1.5,n=this.ctx.createOscillator();n.type="sawtooth",n.frequency.value=80;const i=this.ctx.createWaveShaper(),r=new Float32Array(256);for(let f=0;f<256;f++){const d=f/128-1;r[f]=(Math.PI+100)*d/(Math.PI+100*Math.abs(d))}i.curve=r;const o=this.ctx.createGain();o.gain.value=.4,n.connect(i),i.connect(o),o.connect(this.masterGain),n.frequency.setTargetAtTime(210,t+.1,.2),o.gain.setTargetAtTime(0,t+.8,.3),n.start(t),n.stop(t+e);const a=Math.floor(this.ctx.sampleRate*e),c=this.ctx.createBuffer(1,a,this.ctx.sampleRate),l=c.getChannelData(0);for(let f=0;f<a;f++)l[f]=Math.random()*2-1;const h=this.ctx.createBufferSource();h.buffer=c;const u=this.ctx.createGain();u.gain.value=.2,u.gain.setTargetAtTime(0,t+.5,.3),h.connect(u),u.connect(this.masterGain),h.start(t),h.stop(t+e)}playDoorUnlock(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="square",e.frequency.value=1e3,n.gain.value=.15,e.connect(n),n.connect(this.masterGain),n.gain.setTargetAtTime(0,t+.02,.01),e.start(t),e.stop(t+.05);const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sawtooth",i.frequency.value=150,r.gain.value=.1,i.connect(r),r.connect(this.masterGain),i.frequency.setTargetAtTime(80,t+.1,.5),r.gain.setTargetAtTime(0,t+.3,.3),i.start(t+.05),i.stop(t+1.5)}playHeartbeat(t=.6){if(!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,n=.08+Math.max(0,Math.min(1,t))*.26;for(let i=0;i<2;i++){const r=e+i*.3,o=this.ctx.createOscillator();o.type="sine",o.frequency.setValueAtTime(62,r),o.frequency.exponentialRampToValueAtTime(34,r+.16);const a=this.ctx.createGain();a.gain.value=0,o.connect(a),a.connect(this.masterGain),a.gain.setTargetAtTime(n,r,.01),a.gain.setTargetAtTime(0,r+.1,.05),o.start(r),o.stop(r+.3)}}playWhisper(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=Math.floor(this.ctx.sampleRate*1.4),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let c=0;c<e;c++){const l=Math.sin(c/e*Math.PI);i[c]=(Math.random()*2-1)*l}const r=this.ctx.createBufferSource();r.buffer=n;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(880,t),o.frequency.linearRampToValueAtTime(1750,t+1.2),o.Q.value=9;const a=this.ctx.createGain();a.gain.value=.13,r.connect(o),o.connect(a),a.connect(this.masterGain),r.start(t)}playPowerOn(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="square",e.frequency.setValueAtTime(140,t),e.frequency.exponentialRampToValueAtTime(40,t+.18);const n=this.ctx.createGain();n.gain.value=.3,n.gain.setTargetAtTime(0,t+.12,.08),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.5);const i=this.ctx.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(38,t+.1),i.frequency.linearRampToValueAtTime(58,t+2.2);const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=420;const o=this.ctx.createGain();o.gain.value=0,o.gain.setTargetAtTime(.16,t+.15,.4),o.gain.setTargetAtTime(0,t+2.6,.9),i.connect(r),r.connect(o),o.connect(this.masterGain),i.start(t+.1),i.stop(t+4);const a=this.ctx.createOscillator();a.type="square",a.frequency.value=118;const c=this.ctx.createGain();c.gain.value=0,c.gain.setTargetAtTime(.03,t+.4,.6),c.gain.setTargetAtTime(0,t+3.4,1.2),a.connect(c),c.connect(this.masterGain),a.start(t+.4),a.stop(t+5.5)}setRaining(t){var e;if(!(!this.ctx||!this.masterGain)){if(!this.rainSource){const i=this.ctx.createBuffer(1,this.ctx.sampleRate*3,this.ctx.sampleRate),r=i.getChannelData(0);for(let c=0;c<r.length;c++)r[c]=(Math.random()*2-1)*.5;this.rainSource=this.ctx.createBufferSource(),this.rainSource.buffer=i,this.rainSource.loop=!0;const o=this.ctx.createBiquadFilter();o.type="highpass",o.frequency.value=1400;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=6200,this.rainGain=this.ctx.createGain(),this.rainGain.gain.value=0,this.rainSource.connect(o),o.connect(a),a.connect(this.rainGain),this.rainGain.connect(this.masterGain),this.rainSource.start()}(e=this.rainGain)==null||e.gain.setTargetAtTime(t?.24:0,this.ctx.currentTime,t?.8:1.6)}}playThunder(t=.6){if(!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,n=.15+(1-t)*1.1,i=.12+t*.22,r=Math.floor(this.ctx.sampleRate*3.2),o=this.ctx.createBuffer(1,r,this.ctx.sampleRate),a=o.getChannelData(0);for(let p=0;p<r;p++){const w=p/r,E=Math.exp(-w*2.2)*(.6+.4*Math.sin(w*40));a[p]=(Math.random()*2-1)*E}const c=this.ctx.createBufferSource();c.buffer=o;const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(320,e+n),l.frequency.linearRampToValueAtTime(90,e+n+2.6);const h=this.ctx.createGain();h.gain.value=0,h.gain.setTargetAtTime(i,e+n,.12),h.gain.setTargetAtTime(0,e+n+1.9,.8),c.connect(l),l.connect(h),h.connect(this.masterGain),c.start(e+n);const u=Math.floor(this.ctx.sampleRate*.4),f=this.ctx.createBuffer(1,u,this.ctx.sampleRate),d=f.getChannelData(0);for(let p=0;p<u;p++)d[p]=(Math.random()*2-1)*Math.exp(-p/(u*.08));const g=this.ctx.createBufferSource();g.buffer=f;const _=this.ctx.createBiquadFilter();_.type="bandpass",_.frequency.value=900,_.Q.value=.7;const m=this.ctx.createGain();m.gain.value=i*.5,g.connect(_),_.connect(m),m.connect(this.masterGain),g.start(e+n)}playGateUnlock(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="square",e.frequency.setValueAtTime(46,t),e.frequency.linearRampToValueAtTime(96,t+1.4);const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=380;const i=this.ctx.createGain();i.gain.value=0,i.gain.setTargetAtTime(.12,t,.25),i.gain.setTargetAtTime(0,t+1.7,.4),e.connect(n),n.connect(i),i.connect(this.masterGain),e.start(t),e.stop(t+3);const r=Math.floor(this.ctx.sampleRate*1.6),o=this.ctx.createBuffer(1,r,this.ctx.sampleRate),a=o.getChannelData(0);for(let u=0;u<r;u++)a[u]=(Math.random()*2-1)*(.4+.6*Math.abs(Math.sin(u/900)));const c=this.ctx.createBufferSource();c.buffer=o;const l=this.ctx.createBiquadFilter();l.type="bandpass",l.frequency.value=2400,l.Q.value=1.4;const h=this.ctx.createGain();h.gain.value=.05,c.connect(l),l.connect(h),h.connect(this.masterGain),c.start(t+.2)}destroy(){var t,e,n,i,r;try{(t=this.ambienceOsc)==null||t.stop(),(e=this.ambienceOsc2)==null||e.stop(),(n=this.windSource)==null||n.stop(),(i=this.rainSource)==null||i.stop()}catch{}(r=this.ctx)==null||r.close(),this.isInitialized=!1,this.ambienceRunning=!1}}const Ki={key:{name:"Kalit",icon:"🔑",hint:"Qabulxonadagi eshik uchun",usable:!1,perSlot:1},card:{name:"Darvoza kartasi",icon:"💳",hint:"Asosiy darvoza uchun",usable:!1,perSlot:1},fuse:{name:"Saqlagich",icon:"🔌",hint:"Generator shchoti uchun",usable:!1,perSlot:1},crowbar:{name:"Lom",icon:"🔨",hint:"Tiqilib qolgan eshik uchun",usable:!1,perSlot:1},battery:{name:"Batareya",icon:"🔋",hint:"Fonarchani quvvatlaydi",usable:!0,perSlot:3},bottle:{name:"Shisha",icon:"🍺",hint:"Ovoz chiqarish uchun otish mumkin",usable:!0,perSlot:5},acid:{name:"Kislota",icon:"☠️",hint:"Metallni eritadi",usable:!1,perSlot:1},ignition:{name:"Kalit (mashina)",icon:"🔑",hint:"Tez yordam mashinasi uchun",usable:!1,perSlot:1},boltcutters:{name:"Qaychi",icon:"✂️",hint:"Zanjirlarni kesish uchun",usable:!1,perSlot:1},uv:{name:"UV chiroq",icon:"🩹",hint:"Yashirin yozuvlarni ochish",usable:!1,perSlot:1}};class a_{constructor(t,e=6){L(this,"counts",new Map);L(this,"root");L(this,"slots",[]);L(this,"onUse",null);if(this.root=t,!!this.root)for(let n=0;n<e;n++){const i=document.createElement("button");i.type="button",i.className="inv-slot empty",i.addEventListener("click",()=>this.handleSlotClick(n)),this.slots.push(i),this.root.appendChild(i)}}add(t,e=1){this.counts.set(t,(this.counts.get(t)??0)+e),this.render()}count(t){return this.counts.get(t)??0}has(t,e=1){return this.count(t)>=e}take(t,e=1){const n=this.count(t);if(n<e)return!1;const i=n-e;return i===0?this.counts.delete(t):this.counts.set(t,i),this.render(),!0}clear(){this.counts.clear(),this.render()}get totalKeys(){return this.count("key")}slotContents(){const t=[];for(const[e,n]of this.counts){const i=Ki[e].perSlot,r=Math.ceil(n/i);for(let o=0;o<r;o++){if(t.length>=this.slots.length)return t;t.push({id:e,index:o})}}return t}render(){if(!this.root)return;const t=this.slotContents(),e=new Map;t.forEach((n,i)=>{e.has(n.id)||e.set(n.id,i)}),this.slots.forEach((n,i)=>{const r=t[i];if(n.className="inv-slot",n.replaceChildren(),!r){n.classList.add("empty"),n.disabled=!0;return}const o=Ki[r.id],a=this.count(r.id),c=o.perSlot,l=Math.min(c,a-r.index*c);n.disabled=!1,n.classList.toggle("usable",o.usable),n.classList.add(`inv-${r.id}`),n.title=`${o.name} — ${o.hint}`,n.setAttribute("aria-label",`${o.name}: ${o.hint}`);const h=document.createElement("span");if(h.className="inv-icon",h.textContent=o.icon,n.appendChild(h),c>1&&l>1){const u=document.createElement("span");u.className="inv-count",u.textContent=String(l),n.appendChild(u)}}),this.root.classList.toggle("has-items",t.length>0)}handleSlotClick(t){var n;const e=this.slotContents()[t];e&&Ki[e.id].usable&&((n=this.onUse)==null||n.call(this,e.id))}}const jn=17,fi=11,dl=[{name:"TASHQI HUDUD",sub:"hovli va darvoza",row1:0,row2:14},{name:"1-QAVAT",sub:"qabulxona",row1:15,row2:21},{name:"OPERATSIYA",sub:"jarrohlik qavati",row1:22,row2:28},{name:"PODVAL",sub:"morgniy va arxiv",row1:29,row2:33},{name:"2-QAVAT",sub:"bosh shifokor",row1:34,row2:43},{name:"CHUQUR PODVAL",sub:"laboratoriya 7",row1:44,row2:51},{name:"3-QAVAT",sub:"izolyator",row1:52,row2:57}],Xe=10,Ss=4.2,c_=70,fl=14,Ne={wall:"#0d1015",fence:"#1d222a",ground:"#2a3123",corridor:"#3b424e",indoorRoom:"#4f4438",outdoorRoom:"#343c2b",doorway:"#91783a",key:"#ffb32e",note:"#7fd0ff",card:"#b47cff",exit:"#39d07a",gate:"#ff5252",power:"#ffd645",player:"#f2ecda",monster:"#ff2b2b",unknown:"rgba(3,4,6,0.9)"},l_={key:Ne.key,card:Ne.card,note:Ne.note,power:Ne.power,exit:Ne.exit,gate:Ne.gate};class h_{constructor(t){L(this,"panel");L(this,"canvas");L(this,"ctx");L(this,"levelLabel");L(this,"subLabel");L(this,"staticLayer");L(this,"staticCtx");L(this,"map",null);L(this,"explored",new Uint8Array(0));L(this,"lastDraw",-1/0);L(this,"collapsed",!1);L(this,"cellPx",8);L(this,"staticReady",!1);this.panel=t,this.canvas=document.createElement("canvas"),this.canvas.className="minimap-canvas",this.ctx=this.canvas.getContext("2d"),this.levelLabel=document.createElement("span"),this.levelLabel.className="minimap-level",this.subLabel=document.createElement("span"),this.subLabel.className="minimap-sub";const e=document.createElement("div");e.className="minimap-titles",e.append(this.levelLabel,this.subLabel);const n=document.createElement("button");n.className="minimap-toggle",n.type="button",n.setAttribute("aria-label","Xaritani yigishtirish"),n.textContent="–",n.addEventListener("click",()=>this.toggle());const i=document.createElement("div");i.className="minimap-head",i.append(e,n),t.append(i,this.canvas),this.staticLayer=document.createElement("canvas"),this.staticCtx=this.staticLayer.getContext("2d")}attach(t){this.map=t,this.explored=new Uint8Array(t.rows*t.cols),this.staticReady=!1,this.lastDraw=-1/0,this.layoutCanvas()}setCollapsed(t){this.collapsed=t,this.panel.classList.toggle("collapsed",t);const e=this.panel.querySelector(".minimap-toggle");e&&(e.textContent=t?"+":"–")}toggle(){this.setCollapsed(!this.collapsed)}relayout(){this.layoutCanvas(),this.lastDraw=-1/0}buildStaticLayer(){const t=this.map;this.staticLayer.width=t.cols*Xe,this.staticLayer.height=t.rows*Xe;const e=this.staticCtx;e.clearRect(0,0,this.staticLayer.width,this.staticLayer.height);for(let n=0;n<t.rows;n++){const i=t.plan[n]??"";for(let r=0;r<t.cols;r++){const o=i[r]??"#",a=n===0||n===t.rows-1||r===0||r===t.cols-1;let c;o==="#"?c=a?Ne.fence:Ne.wall:o==="+"?c=Ne.doorway:o==="."?c=n<=fl?Ne.ground:Ne.corridor:c=n<=fl?Ne.outdoorRoom:Ne.indoorRoom,e.fillStyle=c,e.fillRect(r*Xe,n*Xe,Xe,Xe),o!=="#"&&o!=="+"&&(e.fillStyle="rgba(0,0,0,0.16)",e.fillRect(r*Xe,n*Xe+Xe-2,Xe,2))}}this.staticReady=!0}layoutCanvas(){const t=this.panel.getBoundingClientRect().width||190,e=Math.max(120,t-20),n=Math.max(70,window.innerHeight*.3),i=jn/fi;let r=e,o=r/i;o>n&&(o=n,r=o*i);const a=Math.min(window.devicePixelRatio||1,2);this.canvas.width=Math.round(r*a),this.canvas.height=Math.round(o*a),this.canvas.style.width=`${Math.round(r)}px`,this.canvas.style.height=`${Math.round(o)}px`,this.ctx.setTransform(a,0,0,a,0,0),this.ctx.imageSmoothingEnabled=!1,this.cellPx=r/jn}markExplored(t,e){const n=this.map,i=e/Y,r=t/Y,o=Math.floor(i-Ss),a=Math.ceil(i+Ss),c=Math.floor(r-Ss),l=Math.ceil(r+Ss);for(let h=o;h<=a;h++)if(!(h<0||h>=n.rows))for(let u=c;u<=l;u++)u<0||u>=n.cols||Math.hypot(h-i,u-r)>Ss||(this.explored[h*n.cols+u]=1)}update(t,e=!1){const n=this.map;if(!n||this.collapsed)return;const i=performance.now();if(!e&&i-this.lastDraw<c_)return;this.lastDraw=i,this.staticReady||this.buildStaticLayer(),this.markExplored(t.player.x,t.player.z);const r=t.player.z/Y,o=t.player.x/Y,a=this.cellPx,c=jn*a,l=fi*a,h=this.ctx,u=Math.round(Math.min(Math.max(r-fi/2,0),n.rows-fi)),f=Math.round(Math.min(Math.max(o-jn/2,0),n.cols-jn)),d=P=>(P/Y-f)*a,g=P=>(P/Y-u)*a,_=(P,S,x=1)=>{const C=P/Y-f,B=S/Y-u;return C>=-x&&C<=jn+x&&B>=-x&&B<=fi+x};h.clearRect(0,0,c,l),h.drawImage(this.staticLayer,f*Xe,u*Xe,jn*Xe,fi*Xe,0,0,c,l),h.fillStyle=Ne.unknown;for(let P=0;P<fi;P++){const S=u+P;if(S<0||S>=n.rows){h.fillRect(0,P*a,c,a+.8);continue}for(let x=0;x<jn;x++){const C=f+x;if(C<0||C>=n.cols){h.fillRect(x*a,P*a,a+.8,a+.8);continue}this.explored[S*n.cols+C]||h.fillRect(x*a,P*a,a+.8,a+.8)}}const m=(P,S,x,C)=>{_(P,S)&&(h.beginPath(),h.arc(d(P),g(S),C,0,Math.PI*2),h.fillStyle=x,h.fill())};for(const P of t.marks)m(P.x,P.z,l_[P.kind]??Ne.key,P.kind==="note"?2:2.7);if(t.monster&&_(t.monster.x,t.monster.z)){const P=d(t.monster.x),S=g(t.monster.z),x=3.4+Math.sin(i/130)*1.3;h.beginPath(),h.arc(P,S,x+3.6,0,Math.PI*2),h.fillStyle=t.chased?"rgba(255,40,40,0.34)":"rgba(255,40,40,0.16)",h.fill(),h.beginPath(),h.arc(P,S,x,0,Math.PI*2),h.fillStyle=Ne.monster,h.fill()}const p=d(t.player.x),w=g(t.player.z),E=.42,y=a*2.6,F=-Math.PI/2-t.player.yaw;h.beginPath(),h.moveTo(p,w),h.arc(p,w,y,F-E,F+E,!1),h.closePath(),h.fillStyle="rgba(255,244,214,0.24)",h.fill(),h.beginPath(),h.arc(p,w,3,0,Math.PI*2),h.fillStyle=Ne.player,h.fill(),h.lineWidth=1.2,h.strokeStyle="#0a0c11",h.stroke();const R=Math.round(r),T=dl.find(P=>R>=P.row1&&R<=P.row2)??dl[0];this.levelLabel.textContent!==T.name&&(this.levelLabel.textContent=T.name,this.subLabel.textContent=T.sub)}}const pl=2.3,ml="dark-asylum.settings",To="dark-asylum.best-time",gl=100,u_=22,d_=2.6,In=3,Vi=20,f_=.4,p_=2.4,_l=[{title:"Kirish jurnali — Ren",text:"Mening ismim Doktor Elias Ren. Yigirma yil shu devorlar ichida jarrohlik qildim. Ular menga aytishdi: bu bemorlar boshqacha. Men ishonmadim. 1987-yil 4-noyabrda men Protokol 7 ni imzoladim va o'sha imzo hali ham qonayapti."},{title:"Ro'yxat",text:"Biz ularning ismlarini yozmadik. Faqat raqamlar: №29, №31, №37. Eng oxirgisi eng kattasi edi. Va eng jim. U meni tanigan birinchi kishi edi — va oxirgisi bo'lib qoldi."},{title:"Qorong'ulik",text:`№31 bir kechada sochlari oqarib ketdi. U qichqirmadi. Faqat "u eshikdan chiqadi" deb takrorladi. Biz uni zanjirlab qo'ydik. Men zanjirni men tanladim — bu men tanlagan oxirgi narsa edi.`},{title:"Kuzatuv",text:`№37 ni ushlab turish uchun to'rt kishi kerak bo'ldi. U bizga qaramadi. U doim devorga qaradi — go'yo u orqasidan kelayotgan narsani ko'rgan edi. Bitta kechqurun u menga qaradi va "Ren, sen ham birimiz" dedi.`},{title:"Rentgen",text:"Suratda uning suyaklari boshqacha edi. Men o'sha plyonkani ko'rganimdan keyin ikki kun uxlamadim. Uch kundan keyin kasalxonani yopishdi. Lekin yopish hech narsani tashqarida qoldirmadi."},{title:"Yoqish",text:"Bosh shifokor hujjatlarni yoqib yubordi. Men ham imzo chekdim. Hammasiga men imzo chekdim. Eshiklarni men qulfladim. Va kalitni o'zim cho'ntamga qo'ydim — go'yo bu xavfsizlik edi."},{title:"4-noyabr, soat 23:47",text:"O'sha kecha hech kim chiqmadi. Faqat u chiqdi. Va u chiqqanida kasalxona jim bo'lib qoldi. Men eshitdim — koridorda yurgan ovoz meni tanigan ovoz edi. U mening ismimni bilardi."},{title:"Uyg'onish",text:"Ertalab men o'z xonamda uyg'ondim. Deraza mixlangan. Telefon o'lik. Ko'zguda o'zimni ko'rdim — va bir soniya ko'zguda meni ko'rgan narsa men emas edim. Shu kundan boshlab bu yerdaman."},{title:"Qabriston",text:"Kasalxona o'liklarini shu yerga ko'mishardi. Toshda ism yo'q — faqat raqam. Eng katta qabrda raqam ham yo'q, chunki u hech qachon ko'milgan emas. Uning qabri bo'sh. U hali yuryapti."},{title:"Krematoriy hisoboti",text:"Kul orasida suyak qolmaydi. Faqat tishlar qoladi. Va ularning hammasi — bir xil o'lchamda. Hammasi bir odamniki. Men o'sha tishlarni sanadim. Yetmish ikkita. Bitta ko'p."},{title:"Tez yordam daftari",text:"Men kasalxonaga qaytib kelmadim. Lekin mashina o'zi qaytdi. Eshiklari ochiq, ichida hech kim yo'q. Va u yomg'ir ichida qaytdi. Haydovchi o'rindig'ida iliq edi."},{title:"Bosh shifokor xonasi",text:"Men Protokol 7 ni imzoladim. Eshikni qulfladim. Lekin men qulflagan eshik emas — men o'zim qulflangan edim. Kalit hali ham cho'ntamda. Uni olib tashlashga kuchim yetmadi."},{title:"Kir yuvish xonasi",text:"Kiyimlar hali ham qurimagan. Ular bugun yuvilgan. Men kasalxonada yolg'iz emasman — kimdir bu yerda hali ham ishlaydi. Va u mening xalatimni kiygan."},{title:"Bolalar palatasi",text:"Yigirma to'qqiz, o'ttiz bir, o'ttiz yetti. Ular raqam emas edi. Ular mening xatolarim edi, va ularning hammasi bir xil ovozda chaqirardi. Ovoz menga qaragan edi — va ismimni aytdi."},{title:"Laboratoriya 7",text:"Namunalar shisha ichida qimirlaydi. Ular hali ham tirik. Ular meni taniydi — va ular meni kutishadi. Men o'sha shishalarni o'zim to'ldirgandim. Men o'sha ignalarni o'zim kiritgandim."},{title:"Qozonxona",text:"Qozonlar hali ham issiq. Kimdir o't yoqib turadi. Pastdan ovoz keladi — go'yo kimdir zinapoyani ko'tarib kelayotgandek. Va u qadam ovozi mening qadamlarim bilan bir xil."},{title:"O'ttiz yettinchi tortma",text:"Morgniyning pastki qavatida o'ttiz yetti tortma bor. O'ttiz oltitasi band. Oxirgisi ochiq — va u mening o'lchamimda. Men hech qachon bu yerdan chiqmaganman. Men u yerdan hech qachon chiqmaganman."},{title:"Izolyator",text:"Uchinchi qavatdagi izolyatorda faqat bitta karavot bor va u devorga mahkamlangan. Ichkaridan tirnalgan izlar eshikning yarim bo'yidan baland emas. Demak u bola edi. Yoki u emaklagan. Yoki ikkalasi ham."},{title:"Elektroterapiya jurnali",text:"№37 ga kuniga uch marta muolaja berildi. Muolaja ishlamadi — u faqat kuchaydi. Oxirgi sessiyada u kresloni uzib tashladi va qayishni o'zi bilan olib ketdi. Muolajani men bergandim. Men o'z qo'lim bilan."},{title:"Tomdagi yozuv",text:"Tomga chiqish eshigi hech qachon qulflanmagan — bu yerdan chiqish mumkin edi. Faqat men qulfni ichkaridan sindirdim, chunki u tomdan ham pastga tushardi. Endi u men bilan birga shu binoda. Va u chiqishni yopishni biladi."}],m_={MORGNIY:"scare","OPERATSIYA XONASI":"whisper","DUSH XONASI":"scare","RENTGEN XONASI":"whisper","GENERATOR XONASI":"blackout","XONA 202":"whisper",ARXIV:"blackout",QABRISTON:"whisper",KREMATORIY:"blackout","QO‘RIQXONA":"scare",PODSTANSIYA:"blackout","DARVOZA MAYDONI":"whisper",AVTOTURARGOH:"whisper","BOSH SHIFOKOR XONASI":"whisper","BOLALAR PALATASI":"scare",IBODATXONA:"blackout","KUZATUV XONASI":"whisper","LABORATORIYA 7":"scare",QOZONXONA:"blackout","INKUBATOR XONASI":"scare",IZOLYATOR:"scare",ELEKTROTERAPIYA:"whisper",GIDROTERAPIYA:"scare","TOMGA CHIQISH":"blackout","MORGNIY 2":"scare",TUNEL:"whisper"};class g_{constructor(){L(this,"renderer",null);L(this,"scene",null);L(this,"camera",null);L(this,"player",null);L(this,"monster",null);L(this,"effects",null);L(this,"audio",null);L(this,"mapInfo",null);L(this,"keys",[]);L(this,"notes",[]);L(this,"cards",[]);L(this,"keysCollected",0);L(this,"notesCollected",0);L(this,"cardCollected",!1);L(this,"substationOn",!1);L(this,"exitOpened",!1);L(this,"gateOpened",!1);L(this,"gateSwing",0);L(this,"gateNoticeCooldown",0);L(this,"wasOutdoors",!1);L(this,"outdoorLights",[]);L(this,"flashlight",null);L(this,"flashlightOn",!0);L(this,"flashlightBattery",100);L(this,"health",gl);L(this,"invulnerable",0);L(this,"danger",0);L(this,"heartbeatTimer",0);L(this,"lockedNoticeCooldown",0);L(this,"shakeAmount",0);L(this,"shakeTime",0);L(this,"shakeDuration",1);L(this,"state","loading");L(this,"phase","power");L(this,"powerOn",!1);L(this,"currentRoomIndex",-1);L(this,"visitedRooms",new Set);L(this,"scriptedScares",new Set);L(this,"elapsed",0);L(this,"scratch",new A);L(this,"clock",new D0);L(this,"animationId",0);L(this,"settings",{sensitivity:1,quality:"high",muted:!1});L(this,"loadingBar",null);L(this,"loadingText",null);L(this,"loadingScreen",null);L(this,"startScreen",null);L(this,"hud",null);L(this,"mobileControls",null);L(this,"jumpscareOverlay",null);L(this,"minimapPanel",null);L(this,"minimap",null);L(this,"keyTaken",new Set);L(this,"noteTaken",new Set);L(this,"cardTaken",new Set);L(this,"minimapState",{player:{x:0,z:0,yaw:0},monster:null,chased:!1,marks:[]});L(this,"inventory",null);L(this,"interactPrompt",null);L(this,"interactLabel",null);L(this,"handButton",null);L(this,"pickups",[]);L(this,"boardedDoors",[]);L(this,"interaction",null);L(this,"interactionTimer",0);L(this,"marksDirty",!0);L(this,"gameoverScreen",null);L(this,"winScreen",null);L(this,"pauseMenu",null);L(this,"hudMessage",null);L(this,"noteToast",null);L(this,"noteToastTitle",null);L(this,"noteToastText",null);L(this,"dangerVignette",null);L(this,"damageFlash",null);L(this,"lightningFlash",null);L(this,"lightningTimeout",null);L(this,"objectiveText",null);L(this,"noteCount",null);L(this,"roomBanner",null);L(this,"roomBannerName",null);L(this,"roomBannerSubtitle",null);L(this,"hudMessageTimeout",null);L(this,"noteToastTimeout",null);L(this,"roomBannerTimeout",null);L(this,"damageTimeout",null);L(this,"stairTransition",null);L(this,"stairFloorName",null);L(this,"stairCooldown",0);L(this,"currentFloor",1);L(this,"gameLoop",()=>{var n,i,r;if(this.state!=="playing")return;this.animationId=requestAnimationFrame(this.gameLoop);const t=Math.min(this.clock.getDelta(),.05);if(this.isPortraitBlocked())return;if(this.elapsed+=t,(n=this.player)==null||n.update(t),this.monster&&this.player){const o=this.player.crouching&&this.isNearHidingSpot();this.monster.update(t,this.player.position,this.player.sprinting,o).caught&&this.hitByMonster()}const e=this.keysCollected/In;(i=this.effects)==null||i.update(t,e,this.camera),this.updateInteraction(t),this.checkExitDoor(),this.checkSubstation(),this.checkMainGate(),this.checkOutdoors(),this.updateRoomBanner(),this.checkStairTransition(t),this.updateBattery(t),this.updateDanger(t),this.animatePickups(t),this.animateGate(t),this.updateHUD(),this.updateMinimap(),this.applyShake(t),(r=this.renderer)==null||r.render(this.scene,this.camera)})}async init(){var e,n,i;this.cacheDom(),this.prepareJumpscareFace(),this.settings=this.loadSettings(),this.syncSettingsUI(),this.setLoadingProgress(8,"Kasalxona eshigi ochilmoqda..."),await this.yieldToBrowser();const t=document.getElementById("game-canvas");this.renderer=new u0({canvas:t,antialias:!1,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=xl,this.renderer.toneMapping=yl,this.renderer.toneMappingExposure=1.35,this.renderer.outputColorSpace=Pe,this.setLoadingProgress(20,"Xonalar qurilmoqda..."),await this.yieldToBrowser(),this.scene=new d0,this.camera=new $e(72,window.innerWidth/window.innerHeight,.08,90),this.scene.add(this.camera),this.mapInfo=il(this.scene),this.setLoadingProgress(55,"Ovoz tizimi yuklanmoqda..."),await this.yieldToBrowser(),this.audio=new o_,this.audio.setMuted(this.settings.muted),this.setLoadingProgress(65,"Effektlar tayyorlanmoqda..."),await this.yieldToBrowser(),this.effects=new r_(this.scene),this.effects.setFluorescentMaterials(this.mapInfo.fluorescentMaterials),this.flashlight=this.effects.createFlashlight(this.camera),this.effects.setCallbacks(()=>this.triggerJumpscare(),()=>{var r;return(r=this.audio)==null?void 0:r.playCreepySound()}),this.effects.onLightning=()=>this.onLightning(),this.addMapLights(),this.player=new Hg(this.camera),this.player.init(this.mapInfo.grid,this.mapInfo.playerSpawn),this.player.setColliders(this.mapInfo.colliders),this.player.setupKeyboard(),this.player.setupMouseLook(),this.player.setupJoystick(),this.player.setLookSensitivity(this.settings.sensitivity),this.player.onFootstep=r=>{var o;return(o=this.audio)==null?void 0:o.playFootstep(r?.34:.2)},this.collectPickups(),this.setLoadingProgress(85,"Biror narsa uyg'onmoqda..."),await this.yieldToBrowser(),this.monster=new s_(this.mapInfo.grid,this.mapInfo.monsterSpawn),this.monster.addToScene(this.scene),this.monster.setColliders(this.mapInfo.colliders),this.monster.onGrowl=()=>{var r;return(r=this.audio)==null?void 0:r.playGrowl()},this.minimapPanel&&!this.minimap&&(this.minimap=new h_(this.minimapPanel)),(e=this.minimap)==null||e.attach(this.mapInfo),this.applyQuality(),this.setLoadingProgress(100,"Tayyor!"),await this.delay(400),this.setupEvents(),this.updateBestTimeUI(),this.updateObjective(),(n=this.loadingScreen)==null||n.classList.add("hidden"),(i=this.startScreen)==null||i.classList.remove("hidden"),this.state="menu"}cacheDom(){const t=e=>document.getElementById(e);this.loadingBar=t("loading-bar"),this.loadingText=t("loading-text"),this.loadingScreen=t("loading-screen"),this.startScreen=t("start-screen"),this.hud=t("game-hud"),this.mobileControls=t("mobile-controls"),this.jumpscareOverlay=t("jumpscare-overlay"),this.minimapPanel=t("minimap-panel"),this.interactPrompt=t("interact-prompt"),this.interactLabel=t("interact-label"),this.handButton=t("hand-btn"),this.inventory=new a_(t("inventory")),this.inventory.onUse=e=>this.useItem(e),this.gameoverScreen=t("gameover-screen"),this.winScreen=t("win-screen"),this.pauseMenu=t("pause-menu"),this.hudMessage=t("hud-message"),this.noteToast=t("note-toast"),this.noteToastTitle=t("note-toast-title"),this.noteToastText=t("note-toast-text"),this.dangerVignette=t("danger-vignette"),this.damageFlash=t("damage-flash"),this.lightningFlash=t("lightning-flash"),this.objectiveText=t("objective-text"),this.noteCount=t("note-count"),this.roomBanner=t("room-banner"),this.roomBannerName=t("room-banner-name"),this.roomBannerSubtitle=t("room-banner-subtitle"),this.stairTransition=t("stair-transition"),this.stairFloorName=t("stair-floor-name")}yieldToBrowser(){return new Promise(t=>window.requestAnimationFrame(()=>window.setTimeout(t,0)))}isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}defaultQuality(){return this.isTouchDevice()?"medium":"high"}loadSettings(){const t={sensitivity:1,quality:this.defaultQuality(),muted:!1};try{const e=localStorage.getItem(ml);if(!e)return t;const n=JSON.parse(e);return{sensitivity:typeof n.sensitivity=="number"?n.sensitivity:t.sensitivity,quality:n.quality==="low"||n.quality==="medium"||n.quality==="high"?n.quality:t.quality,muted:typeof n.muted=="boolean"?n.muted:t.muted}}catch{return t}}saveSettings(){try{localStorage.setItem(ml,JSON.stringify(this.settings))}catch{}}syncSettingsUI(){document.querySelectorAll(".setting-sensitivity").forEach(t=>{t.value=String(this.settings.sensitivity)}),document.querySelectorAll(".setting-quality").forEach(t=>{t.value=this.settings.quality}),document.querySelectorAll(".setting-muted").forEach(t=>{t.checked=this.settings.muted})}applyQuality(){var n,i,r;if(!this.renderer)return;const t=window.devicePixelRatio||1,e=this.settings.quality==="low"?1:this.settings.quality==="medium"?1.5:2;this.renderer.setPixelRatio(Math.min(t,e)),this.renderer.shadowMap.enabled=this.settings.quality!=="low",(n=this.effects)==null||n.setDustEnabled(this.settings.quality!=="low"),(i=this.effects)==null||i.setRainEnabled(this.settings.quality!=="low"),(r=this.scene)==null||r.traverse(o=>{if(!(o instanceof I))return;const a=Array.isArray(o.material)?o.material:[o.material];for(const c of a)c.needsUpdate=!0})}addMapLights(){if(!this.mapInfo||!this.effects)return;const t=this.settings.quality==="low"?8:this.settings.quality==="medium"?12:18;for(const i of this.mapInfo.keyPositions){const r=this.effects.createWallLight(i.x,2.6,i.z,16755502);r.distance=8,this.effects.addFlickerLight(r,1.1)}const e=[];for(let i=dn;i<this.mapInfo.grid.length;i++)for(let r=0;r<this.mapInfo.grid[0].length;r++)this.mapInfo.grid[i][r]!==0&&e.push([i,r]);for(let i=e.length-1;i>0;i--){const r=Math.floor(Math.random()*(i+1));[e[i],e[r]]=[e[r],e[i]]}const n=Math.max(1,Math.floor(e.length/t));for(let i=0;i<t&&i*n<e.length;i++){const[r,o]=e[i*n],a=this.effects.createWallLight(o*Y+(Math.random()-.5),3.05,r*Y+(Math.random()-.5),16756838);a.distance=10,this.effects.addFlickerLight(a,.72)}}lightOutdoorLamps(){if(!this.mapInfo||!this.effects||this.outdoorLights.length>0)return;const t=this.settings.quality==="low"?3:this.settings.quality==="medium"?4:6;for(const e of this.mapInfo.outdoorLampPositions.slice(0,t)){const n=this.effects.createWallLight(e.x,e.y,e.z,16767392);n.distance=18,this.effects.addFlickerLight(n,.95),this.outdoorLights.push(n)}}setupEvents(){var r,o,a,c,l,h,u,f;(r=document.getElementById("start-btn"))==null||r.addEventListener("click",()=>void this.startGame()),(o=document.getElementById("retry-btn"))==null||o.addEventListener("click",()=>this.restartGame()),(a=document.getElementById("replay-btn"))==null||a.addEventListener("click",()=>this.restartGame()),(c=document.getElementById("pause-btn"))==null||c.addEventListener("click",()=>this.pauseGame()),(l=document.getElementById("resume-btn"))==null||l.addEventListener("click",()=>this.resumeGame()),(h=document.getElementById("pause-restart-btn"))==null||h.addEventListener("click",()=>this.restartGame());const t=document.getElementById("run-btn");t==null||t.addEventListener("pointerdown",d=>{var g;d.preventDefault(),(g=this.player)==null||g.setRunning(!0),t.classList.add("active")});for(const d of["pointerup","pointercancel","pointerleave"])t==null||t.addEventListener(d,()=>{var g;(g=this.player)==null||g.setRunning(!1),t.classList.remove("active")});(u=document.getElementById("flashlight-btn"))==null||u.addEventListener("click",d=>{d.stopPropagation(),this.toggleFlashlight()});const e=document.getElementById("hand-btn");e==null||e.addEventListener("pointerdown",d=>{d.preventDefault(),d.stopPropagation(),this.interact()}),(f=document.getElementById("throw-btn"))==null||f.addEventListener("pointerdown",d=>{d.preventDefault(),d.stopPropagation(),this.throwBottle()});const n=document.getElementById("crouch-btn");n==null||n.addEventListener("pointerdown",d=>{var g;d.preventDefault(),(g=this.player)==null||g.setCrouching(!0),n.classList.add("active")});for(const d of["pointerup","pointercancel","pointerleave"])n==null||n.addEventListener(d,()=>{var g;(g=this.player)==null||g.setCrouching(!1),n.classList.remove("active")});document.addEventListener("keydown",d=>{var g,_,m;d.code==="KeyF"&&this.state==="playing"&&this.toggleFlashlight(),d.code==="KeyM"&&this.state==="playing"&&((g=this.minimap)==null||g.toggle()),d.code==="KeyE"&&this.state==="playing"&&this.interact(),d.code==="KeyB"&&this.state==="playing"&&this.throwBottle(),d.code==="ShiftLeft"&&this.state==="playing"&&((_=this.player)==null||_.setRunning(!0)),(d.code==="ControlLeft"||d.code==="ControlRight")&&this.state==="playing"&&((m=this.player)==null||m.setCrouching(!0)),d.code==="Escape"&&(this.state==="playing"?this.pauseGame():this.state==="paused"&&this.resumeGame())}),document.addEventListener("keyup",d=>{var g,_;d.code==="ShiftLeft"&&((g=this.player)==null||g.setRunning(!1)),(d.code==="ControlLeft"||d.code==="ControlRight")&&((_=this.player)==null||_.setCrouching(!1))});const i=document.getElementById("game-canvas");i==null||i.addEventListener("click",()=>{this.state==="playing"&&!this.isTouchDevice()&&i.requestPointerLock()}),window.addEventListener("resize",()=>this.onResize()),window.addEventListener("orientationchange",()=>{window.setTimeout(()=>this.onResize(),120)}),document.querySelectorAll(".setting-sensitivity").forEach(d=>{d.addEventListener("input",()=>{var g;this.settings.sensitivity=Number(d.value),(g=this.player)==null||g.setLookSensitivity(this.settings.sensitivity),this.syncSettingsUI(),this.saveSettings()})}),document.querySelectorAll(".setting-quality").forEach(d=>{d.addEventListener("change",()=>{this.settings.quality=d.value,this.applyQuality(),this.syncSettingsUI(),this.saveSettings()})}),document.querySelectorAll(".setting-muted").forEach(d=>{d.addEventListener("change",()=>{var g;this.settings.muted=d.checked,(g=this.audio)==null||g.setMuted(this.settings.muted),this.syncSettingsUI(),this.saveSettings()})})}async startGame(){var t,e,n,i,r,o,a,c;(t=this.startScreen)==null||t.classList.add("hidden"),(e=this.pauseMenu)==null||e.classList.add("hidden"),(n=this.hud)==null||n.classList.remove("hidden"),this.isTouchDevice()&&(document.body.classList.add("touch-device"),(i=this.mobileControls)==null||i.classList.remove("hidden"),(r=this.player)==null||r.setupMobileLook(document.getElementById("game-canvas")),await this.lockLandscape()),await((o=this.audio)==null?void 0:o.init()),(a=this.audio)==null||a.resume(),(c=this.audio)==null||c.startAmbience(),this.elapsed=0,this.state="playing",this.clock.getDelta(),this.showMessage("Narsalarni qo'l bilan oling (E). Shchotga esa saqlagich kerak.",6e3),this.gameLoop()}checkStairTransition(t){if(this.stairCooldown>0){this.stairCooldown-=t;return}if(!this.player||!this.mapInfo)return;const e=Math.round(this.player.position.x/Y),n=Math.round(this.player.position.z/Y);if(!ng.some(o=>o.row===n&&o.col===e))return;const r=ig(n);r!==this.currentFloor&&(this.stairCooldown=3,this.currentFloor=r,this.triggerFloorTransition(r))}triggerFloorTransition(t){var n;if(!this.stairTransition||!this.stairFloorName)return;const e=sg(t);e&&(this.stairFloorName.textContent=e,this.stairTransition.classList.add("show"),(n=this.monster)==null||n.setVisible(!1),window.setTimeout(()=>{var i;(i=this.stairTransition)==null||i.classList.remove("show"),window.setTimeout(()=>{var r;(r=this.monster)==null||r.setVisible(!0)},500)},1800))}pauseGame(){var t,e,n;this.state==="playing"&&(this.state="paused",cancelAnimationFrame(this.animationId),(t=this.player)==null||t.setRunning(!1),(e=this.audio)==null||e.suspend(),(n=this.pauseMenu)==null||n.classList.remove("hidden"))}resumeGame(){var t,e;this.state==="paused"&&((t=this.pauseMenu)==null||t.classList.add("hidden"),(e=this.audio)==null||e.resume(),this.clock.getDelta(),this.state="playing",this.gameLoop())}restartGame(){var t,e,n,i,r,o,a,c,l,h;for(const u of[this.gameoverScreen,this.winScreen,this.pauseMenu,this.jumpscareOverlay])u==null||u.classList.add("hidden");if((t=this.hud)==null||t.classList.add("hidden"),(e=this.mobileControls)==null||e.classList.add("hidden"),(n=this.roomBanner)==null||n.classList.remove("show"),this.dangerVignette&&(this.dangerVignette.style.opacity="0"),this.resetRunState(),this.scene&&this.camera){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.add(this.camera),this.mapInfo=il(this.scene),(i=this.minimap)==null||i.attach(this.mapInfo),(r=this.player)==null||r.reset(this.mapInfo.grid,this.mapInfo.playerSpawn),(o=this.player)==null||o.setColliders(this.mapInfo.colliders),(a=this.effects)==null||a.reset(),(c=this.effects)==null||c.setFluorescentMaterials(this.mapInfo.fluorescentMaterials),(l=this.monster)==null||l.setColliders(this.mapInfo.colliders),this.effects&&(this.flashlight=this.effects.createFlashlight(this.camera)),this.collectPickups(),(h=this.monster)==null||h.reset(this.mapInfo.monsterSpawn),this.addMapLights(),this.applyQuality()}this.startGame()}resetRunState(){var a,c,l,h,u,f,d,g,_,m;this.keysCollected=0,this.notesCollected=0,this.cardCollected=!1,(a=this.inventory)==null||a.clear(),this.pickups.length=0,this.boardedDoors=[],this.interaction=null,this.marksDirty=!0,this.substationOn=!1,this.exitOpened=!1,this.gateOpened=!1,this.gateSwing=0,this.gateNoticeCooldown=0,this.wasOutdoors=!1,this.outdoorLights=[],this.flashlightBattery=100,this.flashlightOn=!0,this.health=gl,this.invulnerable=0,this.danger=0,this.heartbeatTimer=0,this.shakeTime=0,this.elapsed=0,this.phase="power",this.powerOn=!1,this.currentRoomIndex=-1,this.visitedRooms.clear(),this.scriptedScares.clear(),this.keyTaken.clear(),this.noteTaken.clear(),this.cardTaken.clear(),this.flashlight&&(this.flashlight.intensity=5);const t=(c=this.mapInfo)==null?void 0:c.exitLock.material;t instanceof Lt&&(t.emissive.set(16718362),t.emissiveIntensity=1.4);const e=(l=this.mapInfo)==null?void 0:l.breakerMesh.children.find(p=>p.userData.isBreakerLever);e&&(e.rotation.x=-.6);const n=(h=this.mapInfo)==null?void 0:h.breakerMesh.children.find(p=>p.userData.isBreakerLamp),i=n instanceof I?n.material:null;i instanceof Lt&&i.emissive.set(16720384);for(let p=1;p<=In;p++)(u=document.getElementById(`key-${p}`))==null||u.classList.remove("collected");(f=document.getElementById("card-icon"))==null||f.classList.remove("collected"),(d=document.getElementById("power-icon"))==null||d.classList.remove("collected"),(g=this.lightningFlash)==null||g.classList.remove("show"),(_=this.effects)==null||_.setOutdoors(!1),(m=this.audio)==null||m.setRaining(!1);const r=document.getElementById("battery-bar");r&&(r.style.width="100%",r.classList.remove("low","charging"));const o=document.getElementById("stamina-bar");o&&(o.style.width="100%",o.classList.remove("low")),this.updateObjective(),this.updateHUD()}collectPickups(){var t;this.keys=[],this.notes=[],this.cards=[],this.pickups.length=0,this.boardedDoors=[],(t=this.scene)==null||t.traverse(e=>{e.userData.isKey&&this.keys.push(e),e.userData.isNote&&this.notes.push(e),e.userData.isCard&&this.cards.push(e),e.userData.isBoardedDoor&&this.boardedDoors.push(e);const n=e.userData.itemId;if(typeof n=="string"&&e.parent)this.pickups.push({object:e,kind:"item",noteIndex:-1,item:n,label:`${Ki[n].name} olish`});else if(e.userData.isNote){const i=typeof e.userData.noteIndex=="number"?e.userData.noteIndex:-1;this.pickups.push({object:e,kind:"note",noteIndex:i,item:"key",label:"Qaydni oqish"})}}),this.marksDirty=!0}restorePower(){var t,e,n,i;this.powerOn=!0,this.phase="keys",(t=this.effects)==null||t.setPower(!0),(e=this.monster)==null||e.setAggression(1.28),(n=this.audio)==null||n.playPowerOn(),this.addShake(.55,1.1),(i=this.mapInfo)==null||i.breakerMesh.traverse(r=>{if(r.userData.isBreakerLever&&(r.rotation.x=.6),r.userData.isBreakerLamp&&r instanceof I){const o=r.material;o instanceof Lt&&(o.emissive.set(2293606),o.emissiveIntensity=2.4)}}),this.showMessage("Elektr yoqildi. Kasalxona ham uyg'ondi.",4200),this.updateObjective()}updateRoomBanner(){if(!this.player||!this.mapInfo)return;const t=hg(this.mapInfo,this.player.position.x,this.player.position.z);if(t===this.currentRoomIndex||(this.currentRoomIndex=t,t<0))return;const e=this.mapInfo.rooms[t];e&&(this.showRoomBanner(e),this.visitedRooms.has(t)||(this.visitedRooms.add(t),this.triggerRoomScare(e.name)))}showRoomBanner(t){this.roomBanner&&(this.roomBannerName&&(this.roomBannerName.textContent=t.name),this.roomBannerSubtitle&&(this.roomBannerSubtitle.textContent=t.subtitle),this.roomBanner.classList.add("show"),this.roomBannerTimeout&&window.clearTimeout(this.roomBannerTimeout),this.roomBannerTimeout=window.setTimeout(()=>{var e;(e=this.roomBanner)==null||e.classList.remove("show")},3600))}triggerRoomScare(t){var n,i,r;const e=m_[t];!e||this.scriptedScares.has(t)||(this.scriptedScares.add(t),e==="whisper"?((n=this.audio)==null||n.playWhisper(),this.addShake(.12,.5)):e==="scare"?this.triggerJumpscare():((i=this.effects)==null||i.blackout(1500),(r=this.audio)==null||r.playWhisper()))}updateInteraction(t){var a,c;if(this.interactionTimer-=t,this.interactionTimer>0||(this.interactionTimer=.1,this.interaction=null,!this.player||!this.mapInfo))return;const e=this.player.position;let n=null,i=pl;for(const l of this.pickups){l.object.getWorldPosition(this.scratch);const h=Math.hypot(this.scratch.x-e.x,this.scratch.z-e.z);h>=i||(i=h,n={kind:"pickup",label:l.label,pickup:l})}const r=this.nearestBoardedDoor();r&&r.distance<i&&(i=r.distance,n={kind:"boards",label:(a=this.inventory)!=null&&a.has("crowbar")?"Lom bilan ochish":"Eshik mixlangan"});const o=Math.hypot(this.mapInfo.breakerPosition.x-e.x,this.mapInfo.breakerPosition.z-e.z);!this.powerOn&&o<i&&(n={kind:"breaker",label:(c=this.inventory)!=null&&c.has("fuse")?"Saqlagichni o'rnatish":"Saqlagich kerak"}),this.interaction=n}nearestBoardedDoor(){if(!this.player||this.boardedDoors.length===0)return null;const t=this.player.position;let e=null;for(const n of this.boardedDoors){const i=Math.hypot(n.position.x-t.x,n.position.z-t.z);i>pl||(!e||i<e.distance)&&(e={object:n,distance:i})}return e}interact(){var e,n;const t=this.interaction;if(t){if(t.kind==="pickup"){this.takePickup(t.pickup);return}if(t.kind==="boards"){if(!((e=this.inventory)!=null&&e.has("crowbar"))){this.showMessage("Eshik mixlangan. Lom kerak.",2600);return}this.pryBoardedDoor();return}if(!((n=this.inventory)!=null&&n.has("fuse"))){this.showMessage("Shchotda saqlagich yo'q. Ombxonadan toping.",3200);return}this.inventory.take("fuse"),this.restorePower()}}takePickup(t){var r,o,a,c,l,h,u;const e=this.pickups.indexOf(t);if(e>=0&&this.pickups.splice(e,1),(r=t.object.parent)==null||r.remove(t.object),this.interaction=null,t.kind==="note"){t.noteIndex>=0&&this.noteTaken.add(t.noteIndex),this.notesCollected++,(o=this.audio)==null||o.playNote(),this.showNote(t.noteIndex),this.marksDirty=!0;return}const n=typeof t.object.userData.pickupIndex=="number"?t.object.userData.pickupIndex:-1;if(n>=0&&(t.item==="key"&&this.keyTaken.add(n),t.item==="card"&&this.cardTaken.add(n)),(a=this.audio)==null||a.playKeyPickup(),(c=this.inventory)==null||c.add(t.item),this.marksDirty=!0,t.item==="key"){this.keysCollected=((l=this.inventory)==null?void 0:l.totalKeys)??0,this.keysCollected>0&&((h=document.getElementById(`key-${this.keysCollected}`))==null||h.classList.add("collected")),this.showMessage(`Kalit ${this.keysCollected}/${In} topildi`,2200),this.updateObjective(),this.keysCollected>=In&&this.unlockExit();return}if(t.item==="card"){this.cardCollected=!0,(u=document.getElementById("card-icon"))==null||u.classList.add("collected"),this.showMessage("Darvoza kartasi topildi",2600),this.unlockGate(),this.updateObjective();return}const i=Ki[t.item];this.showMessage(`${i.name} olindi — ${i.hint}`,3e3),this.updateObjective()}pryBoardedDoor(){var e,n,i;const t=this.mapInfo;if(!(!t||this.boardedDoors.length===0)){for(const r of this.boardedDoors){const o=Math.round(r.position.z/Y),a=Math.round(r.position.x/Y);((e=t.grid[o])==null?void 0:e[a])===0&&(t.grid[o][a]=1),(n=r.parent)==null||n.remove(r)}this.boardedDoors=[],(i=this.audio)==null||i.playDoorUnlock(),this.addShake(.18,.5),this.showMessage("Mixlar chiqdi — dush xonasi ochildi",3200),this.updateObjective()}}useItem(t){var n,i;if(t==="battery"){if(!((n=this.inventory)!=null&&n.take("battery")))return;this.flashlightBattery=Math.min(100,this.flashlightBattery+45),(i=this.audio)==null||i.playKeyPickup(),this.showMessage("Batareya almashtirildi",2e3);return}if(t==="bottle"){this.throwBottle();return}const e=Ki[t];this.showMessage(`${e.name}: ${e.hint}`,2600)}throwBottle(){var c,l,h;if(!this.player||!this.monster||!this.scene||!((c=this.inventory)!=null&&c.take("bottle")))return;const t=new A;(l=this.camera)==null||l.getWorldPosition(t);const e=new A;(h=this.camera)==null||h.getWorldDirection(e);const n=new I(new en(.07,8,8),new Lt({color:10475720,roughness:.15,transparent:!0,opacity:.7}));n.position.copy(t).addScaledVector(e,.5),this.scene.add(n);const i=e.clone().multiplyScalar(11);i.y=4.2;let r=!1;const o=1/60,a=()=>{var d,g,_;if(r)return;i.y-=14*o,n.position.addScaledVector(i,o),n.rotation.x+=9*o,n.rotation.z+=7*o;const u=.08,f=n.position.length()>260;if(n.position.y<=u||f){r=!0;const m=n.position.clone();(d=this.scene)==null||d.remove(n),n.material.dispose(),n.geometry.dispose(),(g=this.audio)==null||g.playGlassShatter(),this.spawnShardBurst(m),(_=this.monster)==null||_.goInvestigateAt(m),this.showMessage("Shisha sinadi — u ovozga qaradi",2200)}else requestAnimationFrame(a)};requestAnimationFrame(a)}spawnShardBurst(t){if(!this.scene)return;const e=14,n=new Float32Array(e*3),i=[];for(let u=0;u<e;u++)n[u*3]=t.x,n[u*3+1]=Math.max(.05,t.y),n[u*3+2]=t.z,i.push(new A((Math.random()-.5)*4,2+Math.random()*3,(Math.random()-.5)*4));const r=new Ie;r.setAttribute("position",new Ze(n,3));const o=new ba({color:13627108,size:.07,transparent:!0,opacity:.95,depthWrite:!1}),a=new Ql(r,o);this.scene.add(a);let c=0;const l=1/60,h=()=>{var d;c+=l;const u=a.geometry.getAttribute("position"),f=u.array;for(let g=0;g<e;g++)i[g].y-=12*l,f[g*3]+=i[g].x*l,f[g*3+1]=Math.max(.03,f[g*3+1]+i[g].y*l),f[g*3+2]+=i[g].z*l;u.needsUpdate=!0,o.opacity=Math.max(0,.95-c*1.1),c<1.1?requestAnimationFrame(h):((d=this.scene)==null||d.remove(a),r.dispose(),o.dispose())};requestAnimationFrame(h)}unlockExit(){var t,e;this.phase="escape",((t=this.mapInfo)==null?void 0:t.exitLock.material)instanceof Lt&&(this.mapInfo.exitLock.material.emissive.set(2293606),this.mapInfo.exitLock.material.emissiveIntensity=2.2),(e=this.audio)==null||e.playDoorUnlock(),this.showMessage("Barcha kalitlar topildi — qabulxonaga yuguring!",4e3),this.updateObjective()}checkExitDoor(){if(!this.player||!this.mapInfo)return;if(this.player.position.distanceTo(this.mapInfo.exitPosition)>2.4){this.lockedNoticeCooldown=0;return}if(this.exitOpened)return;const e=this.powerOn?this.keysCollected<In?`Eshik qulflangan — ${In-this.keysCollected} ta kalit kerak`:null:"Eshik elektrsiz ochilmaydi — generatorni toping";if(e){this.lockedNoticeCooldown<=0&&(this.lockedNoticeCooldown=3,this.showMessage(e,2400));return}this.openExitDoor()}openExitDoor(){var e,n,i;this.exitOpened=!0,this.phase="outside";const t=(e=this.mapInfo)==null?void 0:e.exitDoor;t&&(t.rotation.y=-1.2),((n=this.mapInfo)==null?void 0:n.exitLock.material)instanceof Lt&&(this.mapInfo.exitLock.material.emissive.set(2293606),this.mapInfo.exitLock.material.emissiveIntensity=2.2),(i=this.audio)==null||i.playDoorUnlock(),this.addShake(.2,.7),this.showMessage("Eshik ochildi. Hovliga chiqing — asosiy darvoza shimolda.",4600),this.updateObjective()}checkOutdoors(){var e,n;if(!this.player)return;const t=lg(this.player.position.x,this.player.position.z);t!==this.wasOutdoors&&(this.wasOutdoors=t,(e=this.effects)==null||e.setOutdoors(t),(n=this.audio)==null||n.setRaining(t),t&&this.showMessage("Tashqarida. Yomg‘ir yog‘adi va osmon ochiq.",4200))}onLightning(){var e;(e=this.audio)==null||e.playThunder(.3+Math.random()*.6);const t=this.lightningFlash;t&&(t.classList.add("show"),this.lightningTimeout&&window.clearTimeout(this.lightningTimeout),this.lightningTimeout=window.setTimeout(()=>t.classList.remove("show"),150),window.setTimeout(()=>{t.classList.add("show"),window.setTimeout(()=>t.classList.remove("show"),80)},230))}checkSubstation(){this.substationOn||!this.player||!this.mapInfo||this.player.position.distanceTo(this.mapInfo.substationPosition)>2.4||this.restoreSubstation()}restoreSubstation(){var t,e,n,i;this.substationOn=!0,(t=this.audio)==null||t.playPowerOn(),this.addShake(.5,1.1),(e=this.mapInfo)==null||e.substationMesh.traverse(r=>{if(r.userData.isSubstationLever&&(r.rotation.x=.6),r.userData.isSubstationLamp&&r instanceof I){const o=r.material;o instanceof Lt&&(o.emissive.set(2293606),o.emissiveIntensity=2.4)}}),this.lightOutdoorLamps();for(const r of((n=this.mapInfo)==null?void 0:n.lampMaterials)??[])r.emissiveIntensity=1.5;(i=document.getElementById("power-icon"))==null||i.classList.add("collected"),this.showMessage("Podstansiya ishga tushdi — darvoza motori quvvat oldi.",4400),this.unlockGate(),this.updateObjective()}unlockGate(){if(this.substationOn){if(!this.cardCollected){this.showMessage("Darvoza motori ishlaydi — endi karta kerak.",3600);return}this.openMainGate()}}openMainGate(){var t;this.gateOpened||!this.mapInfo||(this.gateOpened=!0,this.phase="gate",this.mapInfo.gateLock.material instanceof Lt&&(this.mapInfo.gateLock.material.emissive.set(2293606),this.mapInfo.gateLock.material.emissiveIntensity=2.2),(t=this.audio)==null||t.playGateUnlock(),this.addShake(.65,1.5),this.showMessage("ASOSIY DARVOZA OCHILDI — yuguring!",5200),this.updateObjective())}animateGate(t){if(!this.gateOpened||!this.mapInfo||this.gateSwing>=1)return;this.gateSwing=Math.min(1,this.gateSwing+t*.7);const e=this.gateSwing*1.55;for(const n of this.mapInfo.gateLeaves){const i=n.userData.sign??1;n.rotation.y=-i*e}}checkMainGate(){if(!this.player||!this.mapInfo)return;if(this.player.position.distanceTo(this.mapInfo.gatePosition)>3.6){this.gateNoticeCooldown=0;return}if(this.gateOpened){this.onWin();return}const e=this.substationOn?"Darvoza qulflangan — qo‘riqxonadan kartani toping":"Darvoza motori quvvatsiz — podstansiyani yoqing";this.gateNoticeCooldown<=0&&(this.gateNoticeCooldown=3,this.showMessage(e,2600))}hitByMonster(){var t,e;this.state!=="playing"||this.invulnerable>0||(this.health=Math.max(0,this.health-u_),this.invulnerable=d_,(t=this.audio)==null||t.playDamage(),this.flashDamage(),this.addShake(.5,.5),(e=this.monster)==null||e.stun(3.2),this.health<=0?this.onPlayerCaught():this.showMessage(`Yaralandingiz — ${this.health}%`,1800))}addShake(t,e){this.shakeAmount=t,this.shakeDuration=Math.max(.1,e),this.shakeTime=this.shakeDuration}applyShake(t){if(this.shakeTime<=0||!this.camera)return;this.shakeTime-=t;const e=Math.max(0,this.shakeTime/this.shakeDuration),n=this.shakeAmount*e;this.camera.position.x+=(Math.random()-.5)*n,this.camera.position.y+=(Math.random()-.5)*n*.7,this.camera.rotation.z+=(Math.random()-.5)*n*.08}flashDamage(){this.damageFlash&&(this.damageFlash.classList.add("show"),this.damageTimeout&&window.clearTimeout(this.damageTimeout),this.damageTimeout=window.setTimeout(()=>{var t;(t=this.damageFlash)==null||t.classList.remove("show")},320))}updateBattery(t){this.invulnerable>0&&(this.invulnerable-=t);const e=!this.flashlightOn&&this.flashlightBattery<100;this.flashlightOn?(this.flashlightBattery=Math.max(0,this.flashlightBattery-f_*t),this.flashlightBattery<=0&&(this.flashlightOn=!1,this.flashlight&&(this.flashlight.intensity=0),this.showMessage("Batareya tugadi — qorong'uda quvvatlanadi",3e3))):e&&(this.flashlightBattery=Math.min(100,this.flashlightBattery+p_*t));const n=document.getElementById("battery-bar");n&&(n.style.width=`${this.flashlightBattery.toFixed(1)}%`,n.classList.toggle("low",this.flashlightBattery<25&&!e),n.classList.toggle("charging",e))}updateDanger(t){var o,a;if(!this.monster||!this.player)return;const e=this.monster.distanceTo(this.player.position),n=1-Math.min(1,Math.max(0,(e-2.5)/13)),i=this.monster.isChasing?.35:0,r=Math.min(1,n*.75+i);this.danger+=(r-this.danger)*Math.min(1,t*2.5),(o=this.effects)==null||o.setDanger(this.danger),this.dangerVignette&&(this.dangerVignette.style.opacity=(this.danger*.9).toFixed(3)),this.lockedNoticeCooldown>0&&(this.lockedNoticeCooldown-=t),this.gateNoticeCooldown>0&&(this.gateNoticeCooldown-=t),this.heartbeatTimer-=t,this.danger>.22&&this.heartbeatTimer<=0&&(this.heartbeatTimer=1.15-this.danger*.72,(a=this.audio)==null||a.playHeartbeat(this.danger))}animatePickups(t){for(const e of this.pickups){if(e.kind!=="item")continue;const n=e.object;n.rotation.y+=t*(e.item==="key"?1.5:1.1),n.position.y=.95+Math.sin(this.elapsed*1.8+n.position.x)*.1}}updateMinimap(){var e;if(!this.minimap||!this.mapInfo||!this.player)return;const t=this.minimapState;t.player.x=this.player.position.x,t.player.z=this.player.position.z,t.player.yaw=this.player.facing,this.monster?(t.monster=t.monster??{x:0,z:0},t.monster.x=this.monster.currentPosition.x,t.monster.z=this.monster.currentPosition.z):t.monster=null,t.chased=((e=this.monster)==null?void 0:e.isChasing)??!1,this.marksDirty&&this.rebuildMarks(),this.minimap.update(t)}rebuildMarks(){const t=this.mapInfo;if(!t)return;const e=[];t.keyPositions.forEach((n,i)=>{this.keyTaken.has(i)||e.push({x:n.x,z:n.z,kind:"key"})}),t.cardPositions.forEach((n,i)=>{this.cardTaken.has(i)||e.push({x:n.x,z:n.z,kind:"card"})}),t.notePositions.forEach((n,i)=>{this.noteTaken.has(i)||e.push({x:n.x,z:n.z,kind:"note"})}),this.powerOn||e.push({x:t.breakerPosition.x,z:t.breakerPosition.z,kind:"power"}),this.substationOn||e.push({x:t.substationPosition.x,z:t.substationPosition.z,kind:"power"}),this.exitOpened||e.push({x:t.exitPosition.x,z:t.exitPosition.z,kind:"exit"}),this.gateOpened||e.push({x:t.gatePosition.x,z:t.gatePosition.z,kind:"gate"}),this.minimapState.marks=e,this.marksDirty=!1}updateHUD(){var l;if(!this.player)return;const t=document.getElementById("stamina-bar");if(t){const h=this.player.staminaRatio;t.style.width=`${(h*100).toFixed(1)}%`,t.classList.toggle("low",h<.25)}this.noteCount&&(this.noteCount.textContent=`${this.notesCollected}/${Vi}`);const e=this.player.crouching,n=e&&this.isNearHidingSpot(),i=document.getElementById("crouch-vignette"),r=document.getElementById("hidden-indicator"),o=document.getElementById("crouch-btn");i&&i.classList.toggle("show",e),r&&r.classList.toggle("show",n),o&&o.classList.toggle("crouch-active",e);const a=this.interaction,c=a!==null;this.interactPrompt&&(this.interactPrompt.classList.toggle("show",c),a&&this.interactLabel&&(this.interactLabel.textContent=a.label),this.interactPrompt.classList.toggle("blocked",(a==null?void 0:a.kind)==="breaker"&&!(((l=this.inventory)==null?void 0:l.has("fuse"))??!1))),this.handButton&&(this.handButton.disabled=!c,this.handButton.classList.toggle("active",c))}updateObjective(){var t;if(this.objectiveText)if(this.powerOn)if(this.keysCollected<In)this.objectiveText.textContent=`Kalitlar ${this.keysCollected}/${In} — kasalxonani qidiring`,this.phase="keys";else if(!this.exitOpened)this.objectiveText.textContent="Chiqish eshigi ochilmoqda — qabulxonaga boring",this.phase="escape";else if(!this.cardCollected||!this.substationOn){const e=this.cardCollected?"✓":"—",n=this.substationOn?"✓":"—";this.objectiveText.textContent=`Tashqarida: karta ${e} · podstansiya ${n}`,this.phase="outside"}else this.objectiveText.textContent="Asosiy darvoza ochildi — shimolga yuguring!",this.phase="gate";else{const e=(t=this.inventory)!=null&&t.has("fuse")?"saqlagich bor":"saqlagich omborxonada";this.objectiveText.textContent=`Shchotga quvvat bering — ${e}`,this.phase="power"}}showMessage(t,e=2600){this.hudMessage&&(this.hudMessage.textContent=t,this.hudMessage.classList.add("show"),this.hudMessageTimeout&&window.clearTimeout(this.hudMessageTimeout),this.hudMessageTimeout=window.setTimeout(()=>{var n;(n=this.hudMessage)==null||n.classList.remove("show")},e))}showNote(t){const e=t>=0&&t<_l.length?t:this.notesCollected-1,n=_l[e];!n||!this.noteToast||(this.noteToastTitle&&(this.noteToastTitle.textContent=`Qayd ${this.notesCollected}/${Vi} — ${n.title}`),this.noteToastText&&(this.noteToastText.textContent=n.text),this.noteToast.classList.add("show"),this.noteToastTimeout&&window.clearTimeout(this.noteToastTimeout),this.noteToastTimeout=window.setTimeout(()=>{var i;(i=this.noteToast)==null||i.classList.remove("show")},8e3))}toggleFlashlight(){if(!this.flashlightOn&&this.flashlightBattery<=0){this.showMessage("Batareya yo'q — biroz kutib turing",1800);return}this.flashlightOn=!this.flashlightOn,this.flashlight&&(this.flashlight.intensity=this.flashlightOn?5:0)}prepareJumpscareFace(){const t=document.getElementById("jumpscare-face");if(t)try{t.style.backgroundImage=`url(${eg()})`}catch{}}triggerJumpscare(){var t,e;this.state==="playing"&&(this.state="jumpscare",(t=this.jumpscareOverlay)==null||t.classList.remove("hidden"),(e=this.audio)==null||e.playJumpscare(),this.addShake(.35,.9),window.setTimeout(()=>{var n;(n=this.jumpscareOverlay)==null||n.classList.add("hidden"),this.state==="jumpscare"&&(this.state="playing",this.clock.getDelta(),this.gameLoop())},1400))}onPlayerCaught(){var t,e,n,i;this.state==="gameover"||this.state==="win"||(this.state="gameover",(t=this.audio)==null||t.stopAmbience(),(e=this.audio)==null||e.setRaining(!1),(n=this.audio)==null||n.playJumpscare(),(i=this.jumpscareOverlay)==null||i.classList.remove("hidden"),cancelAnimationFrame(this.animationId),window.setTimeout(()=>{var a,c,l,h,u,f;(a=this.jumpscareOverlay)==null||a.classList.add("hidden"),(c=this.hud)==null||c.classList.add("hidden"),(l=this.mobileControls)==null||l.classList.add("hidden"),(h=this.roomBanner)==null||h.classList.remove("show"),this.dangerVignette&&(this.dangerVignette.style.opacity="0");const r=document.getElementById("gameover-text");r&&(r.textContent=this.phase==="power"?"Qorong'u sizni yutdi. Saqlagichni o'rnatganingizda yorug'lik sizni qutqarardi. U bir vaqtlar sizning bemoringiz edi — endi u shifokor.":this.phase==="keys"?"U sizni tanidi, Ren. U doim sizni tanigan edi. Kasalxona endi ko'rinadi — va u ham sizni ko'rdi.":this.phase==="escape"?"Kalitlar cho'ntangizda qoldi. U eshikni yopishni biladi — u ko'p yillardan beri shu erda eshiklarni yopadi.":"Siz tashqariga chiqdingiz — lekin darvoza hali ham qulflangan edi. Podstansiyani yondirish kerak edi. U sizni yomg'ir ostida kutdi.");const o=document.getElementById("gameover-stats");o&&(o.textContent=`Kalitlar: ${this.keysCollected}/${In} · Karta: ${this.cardCollected?"✓":"—"} · Podstansiya: ${this.substationOn?"✓":"—"} · Qaydlar: ${this.notesCollected}/${Vi} · Xonalar: ${this.visitedRooms.size}/${((u=this.mapInfo)==null?void 0:u.rooms.length)??0}`),(f=this.gameoverScreen)==null||f.classList.remove("hidden")},2e3))}onWin(){var i,r,o,a,c,l,h;if(this.state==="win"||this.state==="gameover")return;this.state="win",(i=this.audio)==null||i.stopAmbience(),(r=this.audio)==null||r.setRaining(!1),cancelAnimationFrame(this.animationId),(o=this.hud)==null||o.classList.add("hidden"),(a=this.mobileControls)==null||a.classList.add("hidden"),(c=this.roomBanner)==null||c.classList.remove("show"),this.dangerVignette&&(this.dangerVignette.style.opacity="0");const t=Math.floor(this.elapsed),e=document.getElementById("win-time");e&&(e.textContent=`Vaqt: ${this.formatTime(t)}`);const n=document.getElementById("win-stats");if(n){const u=this.notesCollected>=Vi?"Endi hammasi ma'lum: Protokol 7 ni imzolagan odam o'zi imzo edi. Siz uni yaratdingiz, va u sizni eslab qoldi. Darvoza ochiq, yomg'ir tugadi — lekin u hali ham devorlar ichida turibdi.":`Siz ${Vi-this.notesCollected} ta qaydni o'qimadingiz. Haqiqat shu devorlarda qoldi.`;n.textContent=`${u} · Qaydlar: ${this.notesCollected}/${Vi} · Kartalar: ${this.cardCollected?"✓":"—"}/1 · Podstansiya: ${this.substationOn?"✓":"—"} · Xonalar: ${this.visitedRooms.size}/${((l=this.mapInfo)==null?void 0:l.rooms.length)??0} · Eng yaxshi vaqt: ${this.formatTime(this.saveBestTime(t))}`}(h=this.winScreen)==null||h.classList.remove("hidden")}formatTime(t){const e=Math.floor(t/60),n=t%60;return`${e}:${n.toString().padStart(2,"0")}`}saveBestTime(t){let e=t;try{const n=Number(localStorage.getItem(To));Number.isFinite(n)&&n>0&&(e=Math.min(n,t)),localStorage.setItem(To,String(e))}catch{}return this.updateBestTimeUI(),e}updateBestTimeUI(){const t=document.getElementById("best-time");if(t)try{const e=Number(localStorage.getItem(To));t.textContent=Number.isFinite(e)&&e>0?this.formatTime(e):"—"}catch{t.textContent="—"}}isPortraitBlocked(){return document.body.classList.contains("touch-device")?window.innerHeight>window.innerWidth:!1}async lockLandscape(){try{const t=screen.orientation;t&&typeof t.lock=="function"&&await t.lock("landscape")}catch{}}onResize(){var t;!this.camera||!this.renderer||(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),(t=this.minimap)==null||t.relayout())}setLoadingProgress(t,e){this.loadingBar&&(this.loadingBar.style.width=`${t}%`),this.loadingText&&(this.loadingText.textContent=e)}delay(t){return new Promise(e=>window.setTimeout(e,t))}isNearHidingSpot(){if(!this.player||!this.mapInfo)return!1;for(const t of this.mapInfo.hidingSpots)if(this.player.position.distanceTo(t)<2.2)return!0;return!1}}window.__DARK_ASYLUM_BOOTED=!0;document.body.classList.remove("unbooted");("ontouchstart"in window||navigator.maxTouchPoints>0)&&document.body.classList.add("touch-device");"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});const __=new g_;__.init().catch(s=>{console.error("Game initialization failed:",s);const t=document.getElementById("loading-text");t&&(t.textContent="Xatolik yuz berdi! Qayta yuklang.",t.style.color="#ff0000")});

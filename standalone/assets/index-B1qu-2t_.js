var eu=Object.defineProperty;var nu=(s,t,e)=>t in s?eu(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var R=(s,t,e)=>nu(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wa="170",iu=0,dc=1,su=2,ah=1,ch=2,kn=3,hi=0,$e=1,nn=2,ci=0,es=1,Vs=2,fc=3,pc=4,ou=5,bi=100,ru=101,au=102,cu=103,lu=104,hu=200,uu=201,du=202,fu=203,na=204,ia=205,pu=206,mu=207,gu=208,vu=209,yu=210,_u=211,xu=212,Mu=213,wu=214,sa=0,oa=1,ra=2,ss=3,aa=4,ca=5,la=6,ha=7,lh=0,Su=1,bu=2,li=0,Tu=1,Eu=2,Au=3,hh=4,Ru=5,Cu=6,Lu=7,uh=300,os=301,rs=302,Qo=303,ua=304,ar=306,$s=1e3,Ei=1001,da=1002,yn=1003,Pu=1004,so=1005,Tn=1006,hr=1007,Ai=1008,Wn=1009,dh=1010,fh=1011,js=1012,qa=1013,Ri=1014,Gn=1015,Js=1016,Xa=1017,Ya=1018,as=1020,ph=35902,mh=1021,gh=1022,vn=1023,vh=1024,yh=1025,ns=1026,cs=1027,_h=1028,Ka=1029,xh=1030,$a=1031,ja=1033,qo=33776,Xo=33777,Yo=33778,Ko=33779,fa=35840,pa=35841,ma=35842,ga=35843,va=36196,ya=37492,_a=37496,xa=37808,Ma=37809,wa=37810,Sa=37811,ba=37812,Ta=37813,Ea=37814,Aa=37815,Ra=37816,Ca=37817,La=37818,Pa=37819,Ia=37820,Da=37821,$o=36492,Ua=36494,Oa=36495,Mh=36283,Na=36284,za=36285,Fa=36286,Iu=3200,Du=3201,wh=0,Uu=1,ai="",Ie="srgb",ps="srgb-linear",cr="linear",de="srgb",Oi=7680,mc=519,Ou=512,Nu=513,zu=514,Sh=515,Fu=516,ku=517,Bu=518,Gu=519,gc=35044,vc="300 es",Hn=2e3,tr=2001;class ms{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yc=1234567;const Ws=Math.PI/180,ls=180/Math.PI;function gs(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[s&255]+Fe[s>>8&255]+Fe[s>>16&255]+Fe[s>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function De(s,t,e){return Math.max(t,Math.min(e,s))}function Za(s,t){return(s%t+t)%t}function Hu(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Vu(s,t,e){return s!==t?(e-s)/(t-s):0}function qs(s,t,e){return(1-e)*s+e*t}function Wu(s,t,e,n){return qs(s,t,1-Math.exp(-e*n))}function qu(s,t=1){return t-Math.abs(Za(s,t*2)-t)}function Xu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Yu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Ku(s,t){return s+Math.floor(Math.random()*(t-s+1))}function $u(s,t){return s+Math.random()*(t-s)}function ju(s){return s*(.5-Math.random())}function Zu(s){s!==void 0&&(yc=s);let t=yc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ju(s){return s*Ws}function Qu(s){return s*ls}function td(s){return(s&s-1)===0&&s!==0}function ed(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function nd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function id(s,t,e,n,i){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),l=o((t+n)/2),h=r((t+n)/2),u=o((t-n)/2),d=r((t-n)/2),f=o((n-t)/2),m=r((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*m,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*m,a*l);break;case"ZYZ":s.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Qi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function He(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const _c={DEG2RAD:Ws,RAD2DEG:ls,generateUUID:gs,clamp:De,euclideanModulo:Za,mapLinear:Hu,inverseLerp:Vu,lerp:qs,damp:Wu,pingpong:qu,smoothstep:Xu,smootherstep:Yu,randInt:Ku,randFloat:$u,randFloatSpread:ju,seededRandom:Zu,degToRad:Ju,radToDeg:Qu,isPowerOfTwo:td,ceilPowerOfTwo:ed,floorPowerOfTwo:nd,setQuaternionFromProperEuler:id,normalize:He,denormalize:Qi};class Ut{constructor(t=0,e=0){Ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,n,i,o,r,a,c,l){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l)}set(t,e,n,i,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],v=i[0],g=i[3],p=i[6],b=i[1],E=i[4],S=i[7],k=i[2],L=i[5],I=i[8];return o[0]=r*v+a*b+c*k,o[3]=r*g+a*E+c*L,o[6]=r*p+a*S+c*I,o[1]=l*v+h*b+u*k,o[4]=l*g+h*E+u*L,o[7]=l*p+h*S+u*I,o[2]=d*v+f*b+m*k,o[5]=d*g+f*E+m*L,o[8]=d*p+f*S+m*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*o*h+n*a*c+i*o*l-i*r*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,d=a*c-h*o,f=l*o-r*c,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=u*v,t[1]=(i*l-h*n)*v,t[2]=(a*n-i*r)*v,t[3]=d*v,t[4]=(h*e-i*c)*v,t[5]=(i*o-a*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(r*e-n*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-i*l,i*c,-i*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ur.makeScale(t,e)),this}rotate(t){return this.premultiply(ur.makeRotation(-t)),this}translate(t,e){return this.premultiply(ur.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ur=new Kt;function bh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function er(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function sd(){const s=er("canvas");return s.style.display="block",s}const xc={};function Bs(s){s in xc||(xc[s]=!0,console.warn(s))}function od(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function rd(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ad(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ne={enabled:!0,workingColorSpace:ps,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(s.r=Vn(s.r),s.g=Vn(s.g),s.b=Vn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ai?cr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Vn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function is(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Mc=[.64,.33,.3,.6,.15,.06],wc=[.2126,.7152,.0722],Sc=[.3127,.329],bc=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tc=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[ps]:{primaries:Mc,whitePoint:Sc,transfer:cr,toXYZ:bc,fromXYZ:Tc,luminanceCoefficients:wc,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:Mc,whitePoint:Sc,transfer:de,toXYZ:bc,fromXYZ:Tc,luminanceCoefficients:wc,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}});let Ni;class cd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ni===void 0&&(Ni=er("canvas")),Ni.width=t.width,Ni.height=t.height;const n=Ni.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=er("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=Vn(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vn(e[n]/255)*255):e[n]=Vn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ld=0;class Th{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=gs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(dr(i[r].image)):o.push(dr(i[r]))}else o=dr(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function dr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?cd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hd=0;class Ge extends ms{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=Ei,i=Ei,o=Tn,r=Ai,a=vn,c=Wn,l=Ge.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=gs(),this.name="",this.source=new Th(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $s:t.x=t.x-Math.floor(t.x);break;case Ei:t.x=t.x<0?0:1;break;case da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $s:t.y=t.y-Math.floor(t.y);break;case Ei:t.y=t.y<0?0:1;break;case da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=uh;Ge.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,i=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,S=(f+1)/2,k=(p+1)/2,L=(h+d)/4,I=(u+v)/4,D=(m+g)/4;return E>S&&E>k?E<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(E),i=L/n,o=I/n):S>k?S<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(S),n=L/i,o=D/i):k<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(k),n=I/o,i=D/o),this.set(n,i,o,e),this}let b=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(u-v)/b,this.z=(d-h)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ud extends ms{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Ge(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Th(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends ud{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Eh extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dd extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qs{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=o[r+0],f=o[r+1],m=o[r+2],v=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=v;return}if(u!==v||c!==d||l!==f||h!==m){let g=1-a;const p=c*d+l*f+h*m+u*v,b=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const k=Math.sqrt(E),L=Math.atan2(k,p*b);g=Math.sin(g*L)/k,a=Math.sin(a*L)/k}const S=a*b;if(c=c*g+d*S,l=l*g+f*S,h=h*g+m*S,u=u*g+v*S,g===1-a){const k=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=k,l*=k,h*=k,u*=k}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,o,r){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=o[r],d=o[r+1],f=o[r+2],m=o[r+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(o/2),d=c(n/2),f=c(i/2),m=c(o/2);switch(r){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(o-l)*f,this._z=(r-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(o+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(o-l)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(r-i)/f,this._x=(o+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+i*l-o*c,this._y=i*h+r*c+o*a-n*l,this._z=o*h+r*l+n*c-i*a,this._w=r*h-n*a-i*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ec.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ec.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*i-a*n),h=2*(a*e-o*i),u=2*(o*n-r*e);return this.x=e+c*l+r*u-a*h,this.y=n+c*h+a*l-o*u,this.z=i+c*u+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=i*c-o*a,this.y=o*r-n*c,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fr.copy(this).projectOnVector(t),this.sub(fr)}reflect(t){return this.sub(fr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fr=new C,Ec=new Qs;class vs{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,hn):hn.fromBufferAttribute(o,r),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oo.copy(n.boundingBox)),oo.applyMatrix4(t.matrixWorld),this.union(oo)}const i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(As),ro.subVectors(this.max,As),zi.subVectors(t.a,As),Fi.subVectors(t.b,As),ki.subVectors(t.c,As),Yn.subVectors(Fi,zi),Kn.subVectors(ki,Fi),fi.subVectors(zi,ki);let e=[0,-Yn.z,Yn.y,0,-Kn.z,Kn.y,0,-fi.z,fi.y,Yn.z,0,-Yn.x,Kn.z,0,-Kn.x,fi.z,0,-fi.x,-Yn.y,Yn.x,0,-Kn.y,Kn.x,0,-fi.y,fi.x,0];return!pr(e,zi,Fi,ki,ro)||(e=[1,0,0,0,1,0,0,0,1],!pr(e,zi,Fi,ki,ro))?!1:(ao.crossVectors(Yn,Kn),e=[ao.x,ao.y,ao.z],pr(e,zi,Fi,ki,ro))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const In=[new C,new C,new C,new C,new C,new C,new C,new C],hn=new C,oo=new vs,zi=new C,Fi=new C,ki=new C,Yn=new C,Kn=new C,fi=new C,As=new C,ro=new C,ao=new C,pi=new C;function pr(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){pi.fromArray(s,o);const a=i.x*Math.abs(pi.x)+i.y*Math.abs(pi.y)+i.z*Math.abs(pi.z),c=t.dot(pi),l=e.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const fd=new vs,Rs=new C,mr=new C;class to{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):fd.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rs.subVectors(t,this.center);const e=Rs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Rs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rs.copy(t.center).add(mr)),this.expandByPoint(Rs.copy(t.center).sub(mr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new C,gr=new C,co=new C,$n=new C,vr=new C,lo=new C,yr=new C;class Ja{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){gr.copy(t).add(e).multiplyScalar(.5),co.copy(e).sub(t).normalize(),$n.copy(this.origin).sub(gr);const o=t.distanceTo(e)*.5,r=-this.direction.dot(co),a=$n.dot(this.direction),c=-$n.dot(co),l=$n.lengthSq(),h=Math.abs(1-r*r);let u,d,f,m;if(h>0)if(u=r*c-a,d=r*a-c,m=o*h,u>=0)if(d>=-m)if(d<=m){const v=1/h;u*=v,d*=v,f=u*(u+r*d+2*a)+d*(r*u+d+2*c)+l}else d=o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d=-o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-c),o),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-o,-c),o),f=d*(d+2*c)+l):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-c),o),f=-u*u+d*(d+2*c)+l);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(gr).addScaledVector(co,d),f}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const n=Dn.dot(this.direction),i=Dn.dot(Dn)-n*n,o=t.radius*t.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,i,o){vr.subVectors(e,t),lo.subVectors(n,t),yr.crossVectors(vr,lo);let r=this.direction.dot(yr),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;$n.subVectors(this.origin,t);const c=a*this.direction.dot(lo.crossVectors($n,lo));if(c<0)return null;const l=a*this.direction.dot(vr.cross($n));if(l<0||c+l>r)return null;const h=-a*$n.dot(yr);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,n,i,o,r,a,c,l,h,u,d,f,m,v,g){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,l,h,u,d,f,m,v,g)}set(t,e,n,i,o,r,a,c,l,h,u,d,f,m,v,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=o,p[5]=r,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Bi.setFromMatrixColumn(t,0).length(),o=1/Bi.setFromMatrixColumn(t,1).length(),r=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,f=r*u,m=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=m+f*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,m=l*h,v=l*u;e[0]=d+v*a,e[4]=m*a-f,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=f*a-m,e[6]=v+d*a,e[10]=r*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,m=l*h,v=l*u;e[0]=d-v*a,e[4]=-r*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=r*h,e[9]=v-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const d=r*h,f=r*u,m=a*h,v=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,f=r*l,m=a*c,v=a*l;e[0]=c*h,e[4]=v-d*u,e[8]=m*u+f,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-v*u}else if(t.order==="XZY"){const d=r*c,f=r*l,m=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=r*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pd,t,md)}lookAt(t,e,n){const i=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),jn.crossVectors(n,tn),jn.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),jn.crossVectors(n,tn)),jn.normalize(),ho.crossVectors(tn,jn),i[0]=jn.x,i[4]=ho.x,i[8]=tn.x,i[1]=jn.y,i[5]=ho.y,i[9]=tn.y,i[2]=jn.z,i[6]=ho.z,i[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],b=n[3],E=n[7],S=n[11],k=n[15],L=i[0],I=i[4],D=i[8],w=i[12],_=i[1],P=i[5],V=i[9],N=i[13],Z=i[2],st=i[6],tt=i[10],rt=i[14],H=i[3],ot=i[7],pt=i[11],Lt=i[15];return o[0]=r*L+a*_+c*Z+l*H,o[4]=r*I+a*P+c*st+l*ot,o[8]=r*D+a*V+c*tt+l*pt,o[12]=r*w+a*N+c*rt+l*Lt,o[1]=h*L+u*_+d*Z+f*H,o[5]=h*I+u*P+d*st+f*ot,o[9]=h*D+u*V+d*tt+f*pt,o[13]=h*w+u*N+d*rt+f*Lt,o[2]=m*L+v*_+g*Z+p*H,o[6]=m*I+v*P+g*st+p*ot,o[10]=m*D+v*V+g*tt+p*pt,o[14]=m*w+v*N+g*rt+p*Lt,o[3]=b*L+E*_+S*Z+k*H,o[7]=b*I+E*P+S*st+k*ot,o[11]=b*D+E*V+S*tt+k*pt,o[15]=b*w+E*N+S*rt+k*Lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],v=t[7],g=t[11],p=t[15];return m*(+o*c*u-i*l*u-o*a*d+n*l*d+i*a*f-n*c*f)+v*(+e*c*f-e*l*d+o*r*d-i*r*f+i*l*h-o*c*h)+g*(+e*l*u-e*a*f-o*r*u+n*r*f+o*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*d+i*r*u-n*r*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],v=t[13],g=t[14],p=t[15],b=u*g*l-v*d*l+v*c*f-a*g*f-u*c*p+a*d*p,E=m*d*l-h*g*l-m*c*f+r*g*f+h*c*p-r*d*p,S=h*v*l-m*u*l+m*a*f-r*v*f-h*a*p+r*u*p,k=m*u*c-h*v*c-m*a*d+r*v*d+h*a*g-r*u*g,L=e*b+n*E+i*S+o*k;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return t[0]=b*I,t[1]=(v*d*o-u*g*o-v*i*f+n*g*f+u*i*p-n*d*p)*I,t[2]=(a*g*o-v*c*o+v*i*l-n*g*l-a*i*p+n*c*p)*I,t[3]=(u*c*o-a*d*o-u*i*l+n*d*l+a*i*f-n*c*f)*I,t[4]=E*I,t[5]=(h*g*o-m*d*o+m*i*f-e*g*f-h*i*p+e*d*p)*I,t[6]=(m*c*o-r*g*o-m*i*l+e*g*l+r*i*p-e*c*p)*I,t[7]=(r*d*o-h*c*o+h*i*l-e*d*l-r*i*f+e*c*f)*I,t[8]=S*I,t[9]=(m*u*o-h*v*o-m*n*f+e*v*f+h*n*p-e*u*p)*I,t[10]=(r*v*o-m*a*o+m*n*l-e*v*l-r*n*p+e*a*p)*I,t[11]=(h*a*o-r*u*o-h*n*l+e*u*l+r*n*f-e*a*f)*I,t[12]=k*I,t[13]=(h*v*i-m*u*i+m*n*d-e*v*d-h*n*g+e*u*g)*I,t[14]=(m*a*i-r*v*i-m*n*c+e*v*c+r*n*g-e*a*g)*I,t[15]=(r*u*i-h*a*i+h*n*c-e*u*c-r*n*d+e*a*d)*I,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*r,0,l*c-i*a,h*c+i*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,u=a+a,d=o*l,f=o*h,m=o*u,v=r*h,g=r*u,p=a*u,b=c*l,E=c*h,S=c*u,k=n.x,L=n.y,I=n.z;return i[0]=(1-(v+p))*k,i[1]=(f+S)*k,i[2]=(m-E)*k,i[3]=0,i[4]=(f-S)*L,i[5]=(1-(d+p))*L,i[6]=(g+b)*L,i[7]=0,i[8]=(m+E)*I,i[9]=(g-b)*I,i[10]=(1-(d+v))*I,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=Bi.set(i[0],i[1],i[2]).length();const r=Bi.set(i[4],i[5],i[6]).length(),a=Bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],un.copy(this);const l=1/o,h=1/r,u=1/a;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,e.setFromRotationMatrix(un),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,i,o,r,a=Hn){const c=this.elements,l=2*o/(e-t),h=2*o/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,m;if(a===Hn)f=-(r+o)/(r-o),m=-2*r*o/(r-o);else if(a===tr)f=-r/(r-o),m=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=Hn){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(r-o),d=(e+t)*l,f=(n+i)*h;let m,v;if(a===Hn)m=(r+o)*u,v=-2*u;else if(a===tr)m=o*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Bi=new C,un=new me,pd=new C(0,0,0),md=new C(1,1,1),jn=new C,ho=new C,tn=new C,Ac=new me,Rc=new Qs;class An{constructor(t=0,e=0,n=0,i=An.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],r=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(De(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-De(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(De(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-De(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ac.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ac,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rc.setFromEuler(this),this.setFromQuaternion(Rc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}An.DEFAULT_ORDER="XYZ";class Ah{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gd=0;const Cc=new C,Gi=new Qs,Un=new me,uo=new C,Cs=new C,vd=new C,yd=new Qs,Lc=new C(1,0,0),Pc=new C(0,1,0),Ic=new C(0,0,1),Dc={type:"added"},_d={type:"removed"},Hi={type:"childadded",child:null},_r={type:"childremoved",child:null};class Ue extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new C,e=new An,n=new Qs,i=new C(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new me},normalMatrix:{value:new Kt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(Lc,t)}rotateY(t){return this.rotateOnAxis(Pc,t)}rotateZ(t){return this.rotateOnAxis(Ic,t)}translateOnAxis(t,e){return Cc.copy(t).applyQuaternion(this.quaternion),this.position.add(Cc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lc,t)}translateY(t){return this.translateOnAxis(Pc,t)}translateZ(t){return this.translateOnAxis(Ic,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?uo.copy(t):uo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Cs,uo,this.up):Un.lookAt(uo,Cs,this.up),this.quaternion.setFromRotationMatrix(Un),i&&(Un.extractRotation(i.matrixWorld),Gi.setFromRotationMatrix(Un),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_d),_r.child=t,this.dispatchEvent(_r),_r.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,t,vd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,yd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),m=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ue.DEFAULT_UP=new C(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new C,On=new C,xr=new C,Nn=new C,Vi=new C,Wi=new C,Uc=new C,Mr=new C,wr=new C,Sr=new C,br=new pe,Tr=new pe,Er=new pe;class gn{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),dn.subVectors(t,e),i.cross(dn);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){dn.subVectors(i,e),On.subVectors(n,e),xr.subVectors(t,e);const r=dn.dot(dn),a=dn.dot(On),c=dn.dot(xr),l=On.dot(On),h=On.dot(xr),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,m=(r*h-a*c)*d;return o.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,i,o,r,a,c){return this.getBarycoord(t,e,n,i,Nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Nn.x),c.addScaledVector(r,Nn.y),c.addScaledVector(a,Nn.z),c)}static getInterpolatedAttribute(t,e,n,i,o,r){return br.setScalar(0),Tr.setScalar(0),Er.setScalar(0),br.fromBufferAttribute(t,e),Tr.fromBufferAttribute(t,n),Er.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(br,o.x),r.addScaledVector(Tr,o.y),r.addScaledVector(Er,o.z),r}static isFrontFacing(t,e,n,i){return dn.subVectors(n,e),On.subVectors(t,e),dn.cross(On).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),dn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return gn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let r,a;Vi.subVectors(i,n),Wi.subVectors(o,n),Mr.subVectors(t,n);const c=Vi.dot(Mr),l=Wi.dot(Mr);if(c<=0&&l<=0)return e.copy(n);wr.subVectors(t,i);const h=Vi.dot(wr),u=Wi.dot(wr);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(Vi,r);Sr.subVectors(t,o);const f=Vi.dot(Sr),m=Wi.dot(Sr);if(m>=0&&f<=m)return e.copy(o);const v=f*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Wi,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Uc.subVectors(o,i),a=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(Uc,a);const p=1/(g+v+d);return r=v*p,a=d*p,e.copy(n).addScaledVector(Vi,r).addScaledVector(Wi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},fo={h:0,s:0,l:0};function Ar(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ee{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=Za(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Ar(r,o,t+1/3),this.g=Ar(r,o,t),this.b=Ar(r,o,t-1/3)}return ne.toWorkingColorSpace(this,i),this}setStyle(t,e=Ie){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const n=Rh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return ne.fromWorkingColorSpace(ke.copy(this),t),Math.round(De(ke.r*255,0,255))*65536+Math.round(De(ke.g*255,0,255))*256+Math.round(De(ke.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(ke.copy(this),e);const n=ke.r,i=ke.g,o=ke.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case n:c=(i-o)/u+(i<o?6:0);break;case i:c=(o-n)/u+2;break;case o:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Ie){ne.fromWorkingColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,i=ke.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(fo);const n=qs(Zn.h,fo.h,e),i=qs(Zn.s,fo.s,e),o=qs(Zn.l,fo.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new ee;ee.NAMES=Rh;let xd=0;class Li extends ms{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=gs(),this.name="",this.blending=es,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=na,this.blendDst=ia,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==na&&(n.blendSrc=this.blendSrc),this.blendDst!==ia&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qa extends Li{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new C,po=new Ut;class Be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=gc,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)po.fromBufferAttribute(this,e),po.applyMatrix3(t),this.setXY(e,po.x,po.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),i=He(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),i=He(i,this.array),o=He(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gc&&(t.usage=this.usage),t}}class Ch extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Lh extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _e extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Md=0;const on=new me,Rr=new Ue,qi=new C,en=new vs,Ls=new vs,Le=new C;class Ae extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bh(t)?Lh:Ch)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Kt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return Rr.lookAt(t),Rr.updateMatrix(),this.applyMatrix4(Rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,o=t.length;i<o;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new _e(n,3))}else{for(let n=0,i=e.count;n<i;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];en.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new to);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Ls.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(en.min,Ls.min),en.expandByPoint(Le),Le.addVectors(en.max,Ls.max),en.expandByPoint(Le)):(en.expandByPoint(Ls.min),en.expandByPoint(Ls.max))}en.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)Le.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(Le));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Le.fromBufferAttribute(a,l),c&&(qi.fromBufferAttribute(t,l),Le.add(qi)),i=Math.max(i,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new C,c[D]=new C;const l=new C,h=new C,u=new C,d=new Ut,f=new Ut,m=new Ut,v=new C,g=new C;function p(D,w,_){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,_),d.fromBufferAttribute(o,D),f.fromBufferAttribute(o,w),m.fromBufferAttribute(o,_),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),a[D].add(v),a[w].add(v),a[_].add(v),c[D].add(g),c[w].add(g),c[_].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let D=0,w=b.length;D<w;++D){const _=b[D],P=_.start,V=_.count;for(let N=P,Z=P+V;N<Z;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const E=new C,S=new C,k=new C,L=new C;function I(D){k.fromBufferAttribute(i,D),L.copy(k);const w=a[D];E.copy(w),E.sub(k.multiplyScalar(k.dot(w))).normalize(),S.crossVectors(L,w);const P=S.dot(c[D])<0?-1:1;r.setXYZW(D,E.x,E.y,E.z,P)}for(let D=0,w=b.length;D<w;++D){const _=b[D],P=_.start,V=_.count;for(let N=P,Z=P+V;N<Z;N+=3)I(t.getX(N+0)),I(t.getX(N+1)),I(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new C,o=new C,r=new C,a=new C,c=new C,l=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),o.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Be(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],u=o[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oc=new me,mi=new Ja,mo=new to,Nc=new C,go=new C,vo=new C,yo=new C,Cr=new C,_o=new C,zc=new C,xo=new C;class A extends Ue{constructor(t=new Ae,e=new Qa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){_o.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],u=o[c];h!==0&&(Cr.fromBufferAttribute(u,t),r?_o.addScaledVector(Cr,h):_o.addScaledVector(Cr.sub(e),h))}e.add(_o)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(o),mi.copy(t.ray).recast(t.near),!(mo.containsPoint(mi.origin)===!1&&(mi.intersectSphere(mo,Nc)===null||mi.origin.distanceToSquared(Nc)>(t.far-t.near)**2))&&(Oc.copy(o).invert(),mi.copy(t.ray).applyMatrix4(Oc),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,n){let i;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=r[g.materialIndex],b=Math.max(g.start,f.start),E=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let S=b,k=E;S<k;S+=3){const L=a.getX(S),I=a.getX(S+1),D=a.getX(S+2);i=Mo(this,p,t,n,l,h,u,L,I,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const b=a.getX(g),E=a.getX(g+1),S=a.getX(g+2);i=Mo(this,r,t,n,l,h,u,b,E,S),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=r[g.materialIndex],b=Math.max(g.start,f.start),E=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let S=b,k=E;S<k;S+=3){const L=S,I=S+1,D=S+2;i=Mo(this,p,t,n,l,h,u,L,I,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const b=g,E=g+1,S=g+2;i=Mo(this,r,t,n,l,h,u,b,E,S),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function wd(s,t,e,n,i,o,r,a){let c;if(t.side===$e?c=n.intersectTriangle(r,o,i,!0,a):c=n.intersectTriangle(i,o,r,t.side===hi,a),c===null)return null;xo.copy(a),xo.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(xo);return l<e.near||l>e.far?null:{distance:l,point:xo.clone(),object:s}}function Mo(s,t,e,n,i,o,r,a,c,l){s.getVertexPosition(a,go),s.getVertexPosition(c,vo),s.getVertexPosition(l,yo);const h=wd(s,t,e,n,go,vo,yo,zc);if(h){const u=new C;gn.getBarycoord(zc,go,vo,yo,u),i&&(h.uv=gn.getInterpolatedAttribute(i,a,c,l,u,new Ut)),o&&(h.uv1=gn.getInterpolatedAttribute(o,a,c,l,u,new Ut)),r&&(h.normal=gn.getInterpolatedAttribute(r,a,c,l,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new C,materialIndex:0};gn.getNormal(go,vo,yo,d.normal),h.face=d,h.barycoord=u}return h}class X extends Ae{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,r,o,0),m("z","y","x",1,-1,n,e,-t,r,o,1),m("x","z","y",1,1,t,n,e,i,r,2),m("x","z","y",1,-1,t,n,-e,i,r,3),m("x","y","z",1,-1,t,e,n,i,o,4),m("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(c),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(u,2));function m(v,g,p,b,E,S,k,L,I,D,w){const _=S/I,P=k/D,V=S/2,N=k/2,Z=L/2,st=I+1,tt=D+1;let rt=0,H=0;const ot=new C;for(let pt=0;pt<tt;pt++){const Lt=pt*P-N;for(let Vt=0;Vt<st;Vt++){const Qt=Vt*_-V;ot[v]=Qt*b,ot[g]=Lt*E,ot[p]=Z,l.push(ot.x,ot.y,ot.z),ot[v]=0,ot[g]=0,ot[p]=L>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(Vt/I),u.push(1-pt/D),rt+=1}}for(let pt=0;pt<D;pt++)for(let Lt=0;Lt<I;Lt++){const Vt=d+Lt+st*pt,Qt=d+Lt+st*(pt+1),nt=d+(Lt+1)+st*(pt+1),dt=d+(Lt+1)+st*pt;c.push(Vt,Qt,dt),c.push(Qt,nt,dt),H+=6}a.addGroup(f,H,w),f+=H,d+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new X(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hs(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ve(s){const t={};for(let e=0;e<s.length;e++){const n=hs(s[e]);for(const i in n)t[i]=n[i]}return t}function Sd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ph(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const bd={clone:hs,merge:Ve};var Td=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ed=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends Li{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Td,this.fragmentShader=Ed,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=Sd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ih extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new C,Fc=new Ut,kc=new Ut;class Ke extends Ih{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ls*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Jn.x,Jn.y).multiplyScalar(-t/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-t/Jn.z)}getViewSize(t,e){return this.getViewBounds(t,Fc,kc),e.subVectors(kc,Fc)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*i/c,e-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Xi=-90,Yi=1;class Ad extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ke(Xi,Yi,t,e);i.layers=this.layers,this.add(i);const o=new Ke(Xi,Yi,t,e);o.layers=this.layers,this.add(o);const r=new Ke(Xi,Yi,t,e);r.layers=this.layers,this.add(r);const a=new Ke(Xi,Yi,t,e);a.layers=this.layers,this.add(a);const c=new Ke(Xi,Yi,t,e);c.layers=this.layers,this.add(c);const l=new Ke(Xi,Yi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Dh extends Ge{constructor(t,e,n,i,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:os,super(t,e,n,i,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rd extends Ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Dh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new X(5,5,5),o=new ui({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:ci});o.uniforms.tEquirect.value=e;const r=new A(i,o),a=e.minFilter;return e.minFilter===Ai&&(e.minFilter=Tn),new Ad(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}}const Lr=new C,Cd=new C,Ld=new Kt;class wi{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Lr.subVectors(n,e).cross(Cd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Lr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ld.getNormalMatrix(t),i=this.coplanarPoint(Lr).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new to,wo=new C;class tc{constructor(t=new wi,e=new wi,n=new wi,i=new wi,o=new wi,r=new wi){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){const n=this.planes,i=t.elements,o=i[0],r=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],v=i[10],g=i[11],p=i[12],b=i[13],E=i[14],S=i[15];if(n[0].setComponents(c-o,d-l,g-f,S-p).normalize(),n[1].setComponents(c+o,d+l,g+f,S+p).normalize(),n[2].setComponents(c+r,d+h,g+m,S+b).normalize(),n[3].setComponents(c-r,d-h,g-m,S-b).normalize(),n[4].setComponents(c-a,d-u,g-v,S-E).normalize(),e===Hn)n[5].setComponents(c+a,d+u,g+v,S+E).normalize();else if(e===tr)n[5].setComponents(a,u,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(wo.x=i.normal.x>0?t.max.x:t.min.x,wo.y=i.normal.y>0?t.max.y:t.min.y,wo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(wo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Uh(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function Pd(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const v=u[f];s.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:o,update:r}}class Ee extends Ae{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){const b=p*d-r;for(let E=0;E<l;E++){const S=E*u-o;m.push(S,-b,0),v.push(0,0,1),g.push(E/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){const E=b+l*p,S=b+l*(p+1),k=b+1+l*(p+1),L=b+1+l*p;f.push(E,S,L),f.push(S,k,L)}this.setIndex(f),this.setAttribute("position",new _e(m,3)),this.setAttribute("normal",new _e(v,3)),this.setAttribute("uv",new _e(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.width,t.height,t.widthSegments,t.heightSegments)}}var Id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dd=`#ifdef USE_ALPHAHASH
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
#endif`,Ud=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Od=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fd=`#ifdef USE_AOMAP
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
#endif`,kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bd=`#ifdef USE_BATCHING
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
#endif`,Gd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qd=`#ifdef USE_IRIDESCENCE
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
#endif`,Xd=`#ifdef USE_BUMPMAP
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
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ef=`#define PI 3.141592653589793
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
} // validated`,nf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sf=`vec3 transformedNormal = objectNormal;
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
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lf="gl_FragColor = linearToOutputTexel( gl_FragColor );",hf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uf=`#ifdef USE_ENVMAP
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
#endif`,df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ff=`#ifdef USE_ENVMAP
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
#endif`,pf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mf=`#ifdef USE_ENVMAP
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
#endif`,gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_f=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xf=`#ifdef USE_GRADIENTMAP
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
}`,Mf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bf=`uniform bool receiveShadow;
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
#endif`,Tf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lf=`PhysicalMaterial material;
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
#endif`,Pf=`struct PhysicalMaterial {
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
}`,If=`
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
#endif`,Df=`#if defined( RE_IndirectDiffuse )
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
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Of=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hf=`#if defined( USE_POINTS_UV )
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
#endif`,Vf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`#ifdef USE_MORPHTARGETS
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
#endif`,$f=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ep=`#ifdef USE_NORMALMAP
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
#endif`,np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ap=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vp=`float getShadowMask() {
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
}`,yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_p=`#ifdef USE_SKINNING
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
#endif`,xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mp=`#ifdef USE_SKINNING
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
#endif`,wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ep=`#ifdef USE_TRANSMISSION
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
#endif`,Ap=`#ifdef USE_TRANSMISSION
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
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dp=`uniform sampler2D t2D;
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
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`#include <common>
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
}`,kp=`#if DEPTH_PACKING == 3200
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
}`,Bp=`#define DISTANCE
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
}`,Gp=`#define DISTANCE
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`uniform float scale;
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
}`,qp=`uniform vec3 diffuse;
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
}`,Xp=`#include <common>
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
}`,Yp=`uniform vec3 diffuse;
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
}`,Kp=`#define LAMBERT
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
}`,$p=`#define LAMBERT
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
}`,jp=`#define MATCAP
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
}`,Zp=`#define MATCAP
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
}`,Jp=`#define NORMAL
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
}`,Qp=`#define NORMAL
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
}`,tm=`#define PHONG
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
}`,em=`#define PHONG
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
}`,nm=`#define STANDARD
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
}`,im=`#define STANDARD
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
}`,sm=`#define TOON
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
}`,om=`#define TOON
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
}`,rm=`uniform float size;
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
}`,am=`uniform vec3 diffuse;
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
}`,cm=`#include <common>
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
}`,lm=`uniform vec3 color;
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
}`,hm=`uniform float rotation;
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
}`,um=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Id,alphahash_pars_fragment:Dd,alphamap_fragment:Ud,alphamap_pars_fragment:Od,alphatest_fragment:Nd,alphatest_pars_fragment:zd,aomap_fragment:Fd,aomap_pars_fragment:kd,batching_pars_vertex:Bd,batching_vertex:Gd,begin_vertex:Hd,beginnormal_vertex:Vd,bsdfs:Wd,iridescence_fragment:qd,bumpmap_pars_fragment:Xd,clipping_planes_fragment:Yd,clipping_planes_pars_fragment:Kd,clipping_planes_pars_vertex:$d,clipping_planes_vertex:jd,color_fragment:Zd,color_pars_fragment:Jd,color_pars_vertex:Qd,color_vertex:tf,common:ef,cube_uv_reflection_fragment:nf,defaultnormal_vertex:sf,displacementmap_pars_vertex:of,displacementmap_vertex:rf,emissivemap_fragment:af,emissivemap_pars_fragment:cf,colorspace_fragment:lf,colorspace_pars_fragment:hf,envmap_fragment:uf,envmap_common_pars_fragment:df,envmap_pars_fragment:ff,envmap_pars_vertex:pf,envmap_physical_pars_fragment:Tf,envmap_vertex:mf,fog_vertex:gf,fog_pars_vertex:vf,fog_fragment:yf,fog_pars_fragment:_f,gradientmap_pars_fragment:xf,lightmap_pars_fragment:Mf,lights_lambert_fragment:wf,lights_lambert_pars_fragment:Sf,lights_pars_begin:bf,lights_toon_fragment:Ef,lights_toon_pars_fragment:Af,lights_phong_fragment:Rf,lights_phong_pars_fragment:Cf,lights_physical_fragment:Lf,lights_physical_pars_fragment:Pf,lights_fragment_begin:If,lights_fragment_maps:Df,lights_fragment_end:Uf,logdepthbuf_fragment:Of,logdepthbuf_pars_fragment:Nf,logdepthbuf_pars_vertex:zf,logdepthbuf_vertex:Ff,map_fragment:kf,map_pars_fragment:Bf,map_particle_fragment:Gf,map_particle_pars_fragment:Hf,metalnessmap_fragment:Vf,metalnessmap_pars_fragment:Wf,morphinstance_vertex:qf,morphcolor_vertex:Xf,morphnormal_vertex:Yf,morphtarget_pars_vertex:Kf,morphtarget_vertex:$f,normal_fragment_begin:jf,normal_fragment_maps:Zf,normal_pars_fragment:Jf,normal_pars_vertex:Qf,normal_vertex:tp,normalmap_pars_fragment:ep,clearcoat_normal_fragment_begin:np,clearcoat_normal_fragment_maps:ip,clearcoat_pars_fragment:sp,iridescence_pars_fragment:op,opaque_fragment:rp,packing:ap,premultiplied_alpha_fragment:cp,project_vertex:lp,dithering_fragment:hp,dithering_pars_fragment:up,roughnessmap_fragment:dp,roughnessmap_pars_fragment:fp,shadowmap_pars_fragment:pp,shadowmap_pars_vertex:mp,shadowmap_vertex:gp,shadowmask_pars_fragment:vp,skinbase_vertex:yp,skinning_pars_vertex:_p,skinning_vertex:xp,skinnormal_vertex:Mp,specularmap_fragment:wp,specularmap_pars_fragment:Sp,tonemapping_fragment:bp,tonemapping_pars_fragment:Tp,transmission_fragment:Ep,transmission_pars_fragment:Ap,uv_pars_fragment:Rp,uv_pars_vertex:Cp,uv_vertex:Lp,worldpos_vertex:Pp,background_vert:Ip,background_frag:Dp,backgroundCube_vert:Up,backgroundCube_frag:Op,cube_vert:Np,cube_frag:zp,depth_vert:Fp,depth_frag:kp,distanceRGBA_vert:Bp,distanceRGBA_frag:Gp,equirect_vert:Hp,equirect_frag:Vp,linedashed_vert:Wp,linedashed_frag:qp,meshbasic_vert:Xp,meshbasic_frag:Yp,meshlambert_vert:Kp,meshlambert_frag:$p,meshmatcap_vert:jp,meshmatcap_frag:Zp,meshnormal_vert:Jp,meshnormal_frag:Qp,meshphong_vert:tm,meshphong_frag:em,meshphysical_vert:nm,meshphysical_frag:im,meshtoon_vert:sm,meshtoon_frag:om,points_vert:rm,points_frag:am,shadow_vert:cm,shadow_frag:lm,sprite_vert:hm,sprite_frag:um},St={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Sn={basic:{uniforms:Ve([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Ve([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new ee(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Ve([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Ve([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Ve([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new ee(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Ve([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Ve([St.points,St.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Ve([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Ve([St.common,St.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Ve([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Ve([St.sprite,St.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Ve([St.common,St.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Ve([St.lights,St.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Sn.physical={uniforms:Ve([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const So={r:0,b:0,g:0},vi=new An,dm=new me;function fm(s,t,e,n,i,o,r){const a=new ee(0);let c=o===!0?0:1,l,h,u=null,d=0,f=null;function m(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?e:t).get(E)),E}function v(b){let E=!1;const S=m(b);S===null?p(a,c):S&&S.isColor&&(p(S,1),E=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,r):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(b,E){const S=m(E);S&&(S.isCubeTexture||S.mapping===ar)?(h===void 0&&(h=new A(new X(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:hs(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),vi.copy(E.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(dm.makeRotationFromEuler(vi)),h.material.toneMapped=ne.getTransfer(S.colorSpace)!==de,(u!==S||d!==S.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,f=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new A(new Ee(2,2),new ui({name:"BackgroundMaterial",uniforms:hs(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ne.getTransfer(S.colorSpace)!==de,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,E){b.getRGB(So,Ph(s)),n.buffers.color.setClear(So.r,So.g,So.b,E,r)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),c=E,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:v,addToRenderList:g}}function pm(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let o=i,r=!1;function a(_,P,V,N,Z){let st=!1;const tt=u(N,V,P);o!==tt&&(o=tt,l(o.object)),st=f(_,N,V,Z),st&&m(_,N,V,Z),Z!==null&&t.update(Z,s.ELEMENT_ARRAY_BUFFER),(st||r)&&(r=!1,S(_,P,V,N),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function c(){return s.createVertexArray()}function l(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function u(_,P,V){const N=V.wireframe===!0;let Z=n[_.id];Z===void 0&&(Z={},n[_.id]=Z);let st=Z[P.id];st===void 0&&(st={},Z[P.id]=st);let tt=st[N];return tt===void 0&&(tt=d(c()),st[N]=tt),tt}function d(_){const P=[],V=[],N=[];for(let Z=0;Z<e;Z++)P[Z]=0,V[Z]=0,N[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:N,object:_,attributes:{},index:null}}function f(_,P,V,N){const Z=o.attributes,st=P.attributes;let tt=0;const rt=V.getAttributes();for(const H in rt)if(rt[H].location>=0){const pt=Z[H];let Lt=st[H];if(Lt===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(Lt=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(Lt=_.instanceColor)),pt===void 0||pt.attribute!==Lt||Lt&&pt.data!==Lt.data)return!0;tt++}return o.attributesNum!==tt||o.index!==N}function m(_,P,V,N){const Z={},st=P.attributes;let tt=0;const rt=V.getAttributes();for(const H in rt)if(rt[H].location>=0){let pt=st[H];pt===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(pt=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(pt=_.instanceColor));const Lt={};Lt.attribute=pt,pt&&pt.data&&(Lt.data=pt.data),Z[H]=Lt,tt++}o.attributes=Z,o.attributesNum=tt,o.index=N}function v(){const _=o.newAttributes;for(let P=0,V=_.length;P<V;P++)_[P]=0}function g(_){p(_,0)}function p(_,P){const V=o.newAttributes,N=o.enabledAttributes,Z=o.attributeDivisors;V[_]=1,N[_]===0&&(s.enableVertexAttribArray(_),N[_]=1),Z[_]!==P&&(s.vertexAttribDivisor(_,P),Z[_]=P)}function b(){const _=o.newAttributes,P=o.enabledAttributes;for(let V=0,N=P.length;V<N;V++)P[V]!==_[V]&&(s.disableVertexAttribArray(V),P[V]=0)}function E(_,P,V,N,Z,st,tt){tt===!0?s.vertexAttribIPointer(_,P,V,Z,st):s.vertexAttribPointer(_,P,V,N,Z,st)}function S(_,P,V,N){v();const Z=N.attributes,st=V.getAttributes(),tt=P.defaultAttributeValues;for(const rt in st){const H=st[rt];if(H.location>=0){let ot=Z[rt];if(ot===void 0&&(rt==="instanceMatrix"&&_.instanceMatrix&&(ot=_.instanceMatrix),rt==="instanceColor"&&_.instanceColor&&(ot=_.instanceColor)),ot!==void 0){const pt=ot.normalized,Lt=ot.itemSize,Vt=t.get(ot);if(Vt===void 0)continue;const Qt=Vt.buffer,nt=Vt.type,dt=Vt.bytesPerElement,It=nt===s.INT||nt===s.UNSIGNED_INT||ot.gpuType===qa;if(ot.isInterleavedBufferAttribute){const ft=ot.data,zt=ft.stride,Gt=ot.offset;if(ft.isInstancedInterleavedBuffer){for(let Wt=0;Wt<H.locationSize;Wt++)p(H.location+Wt,ft.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Wt=0;Wt<H.locationSize;Wt++)g(H.location+Wt);s.bindBuffer(s.ARRAY_BUFFER,Qt);for(let Wt=0;Wt<H.locationSize;Wt++)E(H.location+Wt,Lt/H.locationSize,nt,pt,zt*dt,(Gt+Lt/H.locationSize*Wt)*dt,It)}else{if(ot.isInstancedBufferAttribute){for(let ft=0;ft<H.locationSize;ft++)p(H.location+ft,ot.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let ft=0;ft<H.locationSize;ft++)g(H.location+ft);s.bindBuffer(s.ARRAY_BUFFER,Qt);for(let ft=0;ft<H.locationSize;ft++)E(H.location+ft,Lt/H.locationSize,nt,pt,Lt*dt,Lt/H.locationSize*ft*dt,It)}}else if(tt!==void 0){const pt=tt[rt];if(pt!==void 0)switch(pt.length){case 2:s.vertexAttrib2fv(H.location,pt);break;case 3:s.vertexAttrib3fv(H.location,pt);break;case 4:s.vertexAttrib4fv(H.location,pt);break;default:s.vertexAttrib1fv(H.location,pt)}}}}b()}function k(){D();for(const _ in n){const P=n[_];for(const V in P){const N=P[V];for(const Z in N)h(N[Z].object),delete N[Z];delete P[V]}delete n[_]}}function L(_){if(n[_.id]===void 0)return;const P=n[_.id];for(const V in P){const N=P[V];for(const Z in N)h(N[Z].object),delete N[Z];delete P[V]}delete n[_.id]}function I(_){for(const P in n){const V=n[P];if(V[_.id]===void 0)continue;const N=V[_.id];for(const Z in N)h(N[Z].object),delete N[Z];delete V[_.id]}}function D(){w(),r=!0,o!==i&&(o=i,l(o.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:w,dispose:k,releaseStatesOfGeometry:L,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:g,disableUnusedAttributes:b}}function mm(s,t,e){let n;function i(l){n=l}function o(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)r(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v]*d[v];e.update(m,n,1)}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function gm(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(I){return!(I!==vn&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const D=I===Js&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Wn&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Gn&&!D)}function c(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=m>0,L=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:k,maxSamples:L}}function vm(s){const t=this;let e=null,n=0,i=!1,o=!1;const r=new wi,a=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||o&&!g)o?h(null):l();else{const b=o?0:n,E=b*4;let S=p.clippingState||null;c.value=S,S=h(m,d,E,f);for(let k=0;k!==E;++k)S[k]=e[k];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=c.value,m!==!0||g===null){const p=f+v*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,S=f;E!==v;++E,S+=4)r.copy(u[E]).applyMatrix4(b,a),r.normal.toArray(g,S),g[S+3]=r.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function ym(s){let t=new WeakMap;function e(r,a){return a===Qo?r.mapping=os:a===ua&&(r.mapping=rs),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Qo||a===ua)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Rd(c.height);return l.fromEquirectangularTexture(s,r),t.set(r,l),r.addEventListener("dispose",i),e(l.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class _m extends Ih{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ts=4,Bc=[.125,.215,.35,.446,.526,.582],Ti=20,Pr=new _m,Gc=new ee;let Ir=null,Dr=0,Ur=0,Or=!1;const Si=(1+Math.sqrt(5))/2,Ki=1/Si,Hc=[new C(-Si,Ki,0),new C(Si,Ki,0),new C(-Ki,0,Si),new C(Ki,0,Si),new C(0,Si,-Ki),new C(0,Si,Ki),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Vc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ir=this._renderer.getRenderTarget(),Dr=this._renderer.getActiveCubeFace(),Ur=this._renderer.getActiveMipmapLevel(),Or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ir,Dr,Ur),this._renderer.xr.enabled=Or,t.scissorTest=!1,bo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ir=this._renderer.getRenderTarget(),Dr=this._renderer.getActiveCubeFace(),Ur=this._renderer.getActiveMipmapLevel(),Or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Js,format:vn,colorSpace:ps,depthBuffer:!1},i=Wc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wc(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xm(o)),this._blurMaterial=Mm(o,t,e)}return i}_compileMaterial(t){const e=new A(this._lodPlanes[0],t);this._renderer.compile(e,Pr)}_sceneToCubeUV(t,e,n,i){const a=new Ke(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Gc),h.toneMapping=li,h.autoClear=!1;const f=new Qa({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),m=new A(new X,f);let v=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,v=!0):(f.color.copy(Gc),v=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):b===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const E=this._cubeSize;bo(i,b*E,p>2?E:0,E,E),h.setRenderTarget(i),v&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===os||t.mapping===rs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qc());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new A(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;bo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,Pr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Hc[(i-o-1)%Hc.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new A(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Ti-1),v=o/m,g=isFinite(o)?1+Math.floor(h*v):Ti;g>Ti&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ti}`);const p=[];let b=0;for(let I=0;I<Ti;++I){const D=I/v,w=Math.exp(-D*D/2);p.push(w),I===0?b+=w:I<g&&(b+=2*w)}for(let I=0;I<p.length;I++)p[I]=p[I]/b;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=m,d.mipInt.value=E-n;const S=this._sizeLods[i],k=3*S*(i>E-ts?i-E+ts:0),L=4*(this._cubeSize-S);bo(e,k,L,3*S,2*S),c.setRenderTarget(e),c.render(u,Pr)}}function xm(s){const t=[],e=[],n=[];let i=s;const o=s-ts+1+Bc.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);e.push(a);let c=1/a;r>s-ts?c=Bc[r-s+ts-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,v=3,g=2,p=1,b=new Float32Array(v*m*f),E=new Float32Array(g*m*f),S=new Float32Array(p*m*f);for(let L=0;L<f;L++){const I=L%3*2/3-1,D=L>2?0:-1,w=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];b.set(w,v*m*L),E.set(d,g*m*L);const _=[L,L,L,L,L,L];S.set(_,p*m*L)}const k=new Ae;k.setAttribute("position",new Be(b,v)),k.setAttribute("uv",new Be(E,g)),k.setAttribute("faceIndex",new Be(S,p)),t.push(k),i>ts&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wc(s,t,e){const n=new Ci(s,t,e);return n.texture.mapping=ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bo(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Mm(s,t,e){const n=new Float32Array(Ti),i=new C(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ec(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function qc(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Xc(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function ec(){return`

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
	`}function wm(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Qo||c===ua,h=c===os||c===rs;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Vc(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Vc(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Sm(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Bs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function bm(s,t,e,n){const i={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const v=d.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)t.remove(v[g])}d.removeEventListener("dispose",r),delete i[d.id];const f=o.get(d);f&&(t.remove(f),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const m in d)t.update(d[m],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const v=f[m];for(let g=0,p=v.length;g<p;g++)t.update(v[g],s.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,m=u.attributes.position;let v=0;if(f!==null){const b=f.array;v=f.version;for(let E=0,S=b.length;E<S;E+=3){const k=b[E+0],L=b[E+1],I=b[E+2];d.push(k,L,L,I,I,k)}}else if(m!==void 0){const b=m.array;v=m.version;for(let E=0,S=b.length/3-1;E<S;E+=3){const k=E+0,L=E+1,I=E+2;d.push(k,L,L,I,I,k)}}else return;const g=new(bh(d)?Lh:Ch)(d,1);g.version=v;const p=o.get(u);p&&t.remove(p),o.set(u,g)}function h(u){const d=o.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Tm(s,t,e){let n;function i(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,f){s.drawElements(n,f,o,d*r),e.update(f,n,1)}function l(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,o,d*r,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,v){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/r,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,o,d,0,v,0,m);let p=0;for(let b=0;b<m;b++)p+=f[b]*v[b];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Em(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Am(s,t,e){const n=new WeakMap,i=new pe;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let _=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",_)};var f=_;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let S=0;m===!0&&(S=1),v===!0&&(S=2),g===!0&&(S=3);let k=a.attributes.position.count*S,L=1;k>t.maxTextureSize&&(L=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const I=new Float32Array(k*L*4*u),D=new Eh(I,k,L,u);D.type=Gn,D.needsUpdate=!0;const w=S*4;for(let P=0;P<u;P++){const V=p[P],N=b[P],Z=E[P],st=k*L*4*P;for(let tt=0;tt<V.count;tt++){const rt=tt*w;m===!0&&(i.fromBufferAttribute(V,tt),I[st+rt+0]=i.x,I[st+rt+1]=i.y,I[st+rt+2]=i.z,I[st+rt+3]=0),v===!0&&(i.fromBufferAttribute(N,tt),I[st+rt+4]=i.x,I[st+rt+5]=i.y,I[st+rt+6]=i.z,I[st+rt+7]=0),g===!0&&(i.fromBufferAttribute(Z,tt),I[st+rt+8]=i.x,I[st+rt+9]=i.y,I[st+rt+10]=i.z,I[st+rt+11]=Z.itemSize===4?i.w:1)}}d={count:u,texture:D,size:new Ut(k,L)},n.set(a,d),a.addEventListener("dispose",_)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const v=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(s,"morphTargetBaseInfluence",v),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:o}}function Rm(s,t,e,n){let i=new WeakMap;function o(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function r(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class Oh extends Ge{constructor(t,e,n,i,o,r,a,c,l,h=ns){if(h!==ns&&h!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ns&&(n=Ri),n===void 0&&h===cs&&(n=as),super(null,i,o,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:yn,this.minFilter=c!==void 0?c:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Nh=new Ge,Yc=new Oh(1,1),zh=new Eh,Fh=new dd,kh=new Dh,Kc=[],$c=[],jc=new Float32Array(16),Zc=new Float32Array(9),Jc=new Float32Array(4);function ys(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=Kc[i];if(o===void 0&&(o=new Float32Array(i),Kc[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function Re(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ce(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function lr(s,t){let e=$c[t];e===void 0&&(e=new Int32Array(t),$c[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Cm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Lm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2fv(this.addr,t),Ce(e,t)}}function Pm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;s.uniform3fv(this.addr,t),Ce(e,t)}}function Im(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4fv(this.addr,t),Ce(e,t)}}function Dm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Jc.set(n),s.uniformMatrix2fv(this.addr,!1,Jc),Ce(e,n)}}function Um(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Zc.set(n),s.uniformMatrix3fv(this.addr,!1,Zc),Ce(e,n)}}function Om(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;jc.set(n),s.uniformMatrix4fv(this.addr,!1,jc),Ce(e,n)}}function Nm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function zm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2iv(this.addr,t),Ce(e,t)}}function Fm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3iv(this.addr,t),Ce(e,t)}}function km(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4iv(this.addr,t),Ce(e,t)}}function Bm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Gm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2uiv(this.addr,t),Ce(e,t)}}function Hm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3uiv(this.addr,t),Ce(e,t)}}function Vm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4uiv(this.addr,t),Ce(e,t)}}function Wm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(Yc.compareFunction=Sh,o=Yc):o=Nh,e.setTexture2D(t||o,i)}function qm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Fh,i)}function Xm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||kh,i)}function Ym(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||zh,i)}function Km(s){switch(s){case 5126:return Cm;case 35664:return Lm;case 35665:return Pm;case 35666:return Im;case 35674:return Dm;case 35675:return Um;case 35676:return Om;case 5124:case 35670:return Nm;case 35667:case 35671:return zm;case 35668:case 35672:return Fm;case 35669:case 35673:return km;case 5125:return Bm;case 36294:return Gm;case 36295:return Hm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return qm;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return Ym}}function $m(s,t){s.uniform1fv(this.addr,t)}function jm(s,t){const e=ys(t,this.size,2);s.uniform2fv(this.addr,e)}function Zm(s,t){const e=ys(t,this.size,3);s.uniform3fv(this.addr,e)}function Jm(s,t){const e=ys(t,this.size,4);s.uniform4fv(this.addr,e)}function Qm(s,t){const e=ys(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function t0(s,t){const e=ys(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function e0(s,t){const e=ys(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function n0(s,t){s.uniform1iv(this.addr,t)}function i0(s,t){s.uniform2iv(this.addr,t)}function s0(s,t){s.uniform3iv(this.addr,t)}function o0(s,t){s.uniform4iv(this.addr,t)}function r0(s,t){s.uniform1uiv(this.addr,t)}function a0(s,t){s.uniform2uiv(this.addr,t)}function c0(s,t){s.uniform3uiv(this.addr,t)}function l0(s,t){s.uniform4uiv(this.addr,t)}function h0(s,t,e){const n=this.cache,i=t.length,o=lr(e,i);Re(n,o)||(s.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Nh,o[r])}function u0(s,t,e){const n=this.cache,i=t.length,o=lr(e,i);Re(n,o)||(s.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Fh,o[r])}function d0(s,t,e){const n=this.cache,i=t.length,o=lr(e,i);Re(n,o)||(s.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||kh,o[r])}function f0(s,t,e){const n=this.cache,i=t.length,o=lr(e,i);Re(n,o)||(s.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||zh,o[r])}function p0(s){switch(s){case 5126:return $m;case 35664:return jm;case 35665:return Zm;case 35666:return Jm;case 35674:return Qm;case 35675:return t0;case 35676:return e0;case 5124:case 35670:return n0;case 35667:case 35671:return i0;case 35668:case 35672:return s0;case 35669:case 35673:return o0;case 5125:return r0;case 36294:return a0;case 36295:return c0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return f0}}class m0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Km(e.type)}}class g0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=p0(e.type)}}class v0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const Nr=/(\w+)(\])?(\[|\.)?/g;function Qc(s,t){s.seq.push(t),s.map[t.id]=t}function y0(s,t,e){const n=s.name,i=n.length;for(Nr.lastIndex=0;;){const o=Nr.exec(n),r=Nr.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===i){Qc(e,l===void 0?new m0(a,s,t):new g0(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new v0(a),Qc(e,u)),e=u}}}class jo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),r=t.getUniformLocation(e,o.name);y0(o,r,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function tl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const _0=37297;let x0=0;function M0(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const el=new Kt;function w0(s){ne._getMatrix(el,ne.workingColorSpace,s);const t=`mat3( ${el.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(s)){case cr:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function nl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+M0(s.getShaderSource(t),r)}else return i}function S0(s,t){const e=w0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function b0(s,t){let e;switch(t){case Tu:e="Linear";break;case Eu:e="Reinhard";break;case Au:e="Cineon";break;case hh:e="ACESFilmic";break;case Cu:e="AgX";break;case Lu:e="Neutral";break;case Ru:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const To=new C;function T0(){ne.getLuminanceCoefficients(To);const s=To.x.toFixed(4),t=To.y.toFixed(4),e=To.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function A0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function R0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function Gs(s){return s!==""}function il(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const C0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ka(s){return s.replace(C0,P0)}const L0=new Map;function P0(s,t){let e=jt[t];if(e===void 0){const n=L0.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ka(e)}const I0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ol(s){return s.replace(I0,D0)}function D0(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function rl(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function U0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ah?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ch?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function O0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case os:case rs:t="ENVMAP_TYPE_CUBE";break;case ar:t="ENVMAP_TYPE_CUBE_UV";break}return t}function N0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case rs:t="ENVMAP_MODE_REFRACTION";break}return t}function z0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case lh:t="ENVMAP_BLENDING_MULTIPLY";break;case Su:t="ENVMAP_BLENDING_MIX";break;case bu:t="ENVMAP_BLENDING_ADD";break}return t}function F0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function k0(s,t,e,n){const i=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=U0(e),l=O0(e),h=N0(e),u=z0(e),d=F0(e),f=E0(e),m=A0(o),v=i.createProgram();let g,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Gs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Gs).join(`
`),p.length>0&&(p+=`
`)):(g=[rl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),p=[rl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?jt.tonemapping_pars_fragment:"",e.toneMapping!==li?b0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,S0("linearToOutputTexel",e.outputColorSpace),T0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gs).join(`
`)),r=ka(r),r=il(r,e),r=sl(r,e),a=ka(a),a=il(a,e),a=sl(a,e),r=ol(r),a=ol(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=b+g+r,S=b+p+a,k=tl(i,i.VERTEX_SHADER,E),L=tl(i,i.FRAGMENT_SHADER,S);i.attachShader(v,k),i.attachShader(v,L),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function I(P){if(s.debug.checkShaderErrors){const V=i.getProgramInfoLog(v).trim(),N=i.getShaderInfoLog(k).trim(),Z=i.getShaderInfoLog(L).trim();let st=!0,tt=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(st=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,k,L);else{const rt=nl(i,k,"vertex"),H=nl(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+rt+`
`+H)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(N===""||Z==="")&&(tt=!1);tt&&(P.diagnostics={runnable:st,programLog:V,vertexShader:{log:N,prefix:g},fragmentShader:{log:Z,prefix:p}})}i.deleteShader(k),i.deleteShader(L),D=new jo(i,v),w=R0(i,v)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(v,_0)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=x0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=k,this.fragmentShader=L,this}let B0=0;class G0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new H0(t),e.set(t,n)),n}}class H0{constructor(t){this.id=B0++,this.code=t,this.usedTimes=0}}function V0(s,t,e,n,i,o,r){const a=new Ah,c=new G0,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return l.add(w),w===0?"uv":`uv${w}`}function g(w,_,P,V,N){const Z=V.fog,st=N.geometry,tt=w.isMeshStandardMaterial?V.environment:null,rt=(w.isMeshStandardMaterial?e:t).get(w.envMap||tt),H=rt&&rt.mapping===ar?rt.image.height:null,ot=m[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const pt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Lt=pt!==void 0?pt.length:0;let Vt=0;st.morphAttributes.position!==void 0&&(Vt=1),st.morphAttributes.normal!==void 0&&(Vt=2),st.morphAttributes.color!==void 0&&(Vt=3);let Qt,nt,dt,It;if(ot){const se=Sn[ot];Qt=se.vertexShader,nt=se.fragmentShader}else Qt=w.vertexShader,nt=w.fragmentShader,c.update(w),dt=c.getVertexShaderID(w),It=c.getFragmentShaderID(w);const ft=s.getRenderTarget(),zt=s.state.buffers.depth.getReversed(),Gt=N.isInstancedMesh===!0,Wt=N.isBatchedMesh===!0,ie=!!w.map,$t=!!w.matcap,he=!!rt,F=!!w.aoMap,Oe=!!w.lightMap,Yt=!!w.bumpMap,Zt=!!w.normalMap,B=!!w.displacementMap,it=!!w.emissiveMap,mt=!!w.metalnessMap,T=!!w.roughnessMap,y=w.anisotropy>0,G=w.clearcoat>0,$=w.dispersion>0,et=w.iridescence>0,Q=w.sheen>0,Ct=w.transmission>0,vt=y&&!!w.anisotropyMap,yt=G&&!!w.clearcoatMap,kt=G&&!!w.clearcoatNormalMap,ut=G&&!!w.clearcoatRoughnessMap,wt=et&&!!w.iridescenceMap,Ft=et&&!!w.iridescenceThicknessMap,Bt=Q&&!!w.sheenColorMap,Rt=Q&&!!w.sheenRoughnessMap,Jt=!!w.specularMap,qt=!!w.specularColorMap,ce=!!w.specularIntensityMap,O=Ct&&!!w.transmissionMap,bt=Ct&&!!w.thicknessMap,J=!!w.gradientMap,at=!!w.alphaMap,At=w.alphaTest>0,xt=!!w.alphaHash,Ht=!!w.extensions;let ye=li;w.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(ye=s.toneMapping);const be={shaderID:ot,shaderType:w.type,shaderName:w.name,vertexShader:Qt,fragmentShader:nt,defines:w.defines,customVertexShaderID:dt,customFragmentShaderID:It,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Wt,batchingColor:Wt&&N._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&N.instanceColor!==null,instancingMorph:Gt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ft===null?s.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:ps,alphaToCoverage:!!w.alphaToCoverage,map:ie,matcap:$t,envMap:he,envMapMode:he&&rt.mapping,envMapCubeUVHeight:H,aoMap:F,lightMap:Oe,bumpMap:Yt,normalMap:Zt,displacementMap:d&&B,emissiveMap:it,normalMapObjectSpace:Zt&&w.normalMapType===Uu,normalMapTangentSpace:Zt&&w.normalMapType===wh,metalnessMap:mt,roughnessMap:T,anisotropy:y,anisotropyMap:vt,clearcoat:G,clearcoatMap:yt,clearcoatNormalMap:kt,clearcoatRoughnessMap:ut,dispersion:$,iridescence:et,iridescenceMap:wt,iridescenceThicknessMap:Ft,sheen:Q,sheenColorMap:Bt,sheenRoughnessMap:Rt,specularMap:Jt,specularColorMap:qt,specularIntensityMap:ce,transmission:Ct,transmissionMap:O,thicknessMap:bt,gradientMap:J,opaque:w.transparent===!1&&w.blending===es&&w.alphaToCoverage===!1,alphaMap:at,alphaTest:At,alphaHash:xt,combine:w.combine,mapUv:ie&&v(w.map.channel),aoMapUv:F&&v(w.aoMap.channel),lightMapUv:Oe&&v(w.lightMap.channel),bumpMapUv:Yt&&v(w.bumpMap.channel),normalMapUv:Zt&&v(w.normalMap.channel),displacementMapUv:B&&v(w.displacementMap.channel),emissiveMapUv:it&&v(w.emissiveMap.channel),metalnessMapUv:mt&&v(w.metalnessMap.channel),roughnessMapUv:T&&v(w.roughnessMap.channel),anisotropyMapUv:vt&&v(w.anisotropyMap.channel),clearcoatMapUv:yt&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:kt&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&v(w.sheenRoughnessMap.channel),specularMapUv:Jt&&v(w.specularMap.channel),specularColorMapUv:qt&&v(w.specularColorMap.channel),specularIntensityMapUv:ce&&v(w.specularIntensityMap.channel),transmissionMapUv:O&&v(w.transmissionMap.channel),thicknessMapUv:bt&&v(w.thicknessMap.channel),alphaMapUv:at&&v(w.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(Zt||y),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!st.attributes.uv&&(ie||at),fog:!!Z,useFog:w.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:zt,skinning:N.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:Vt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:ye,decodeVideoTexture:ie&&w.map.isVideoTexture===!0&&ne.getTransfer(w.map.colorSpace)===de,decodeVideoTextureEmissive:it&&w.emissiveMap.isVideoTexture===!0&&ne.getTransfer(w.emissiveMap.colorSpace)===de,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===nn,flipSided:w.side===$e,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ht&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&w.extensions.multiDraw===!0||Wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function p(w){const _=[];if(w.shaderID?_.push(w.shaderID):(_.push(w.customVertexShaderID),_.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)_.push(P),_.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(b(_,w),E(_,w),_.push(s.outputColorSpace)),_.push(w.customProgramCacheKey),_.join()}function b(w,_){w.push(_.precision),w.push(_.outputColorSpace),w.push(_.envMapMode),w.push(_.envMapCubeUVHeight),w.push(_.mapUv),w.push(_.alphaMapUv),w.push(_.lightMapUv),w.push(_.aoMapUv),w.push(_.bumpMapUv),w.push(_.normalMapUv),w.push(_.displacementMapUv),w.push(_.emissiveMapUv),w.push(_.metalnessMapUv),w.push(_.roughnessMapUv),w.push(_.anisotropyMapUv),w.push(_.clearcoatMapUv),w.push(_.clearcoatNormalMapUv),w.push(_.clearcoatRoughnessMapUv),w.push(_.iridescenceMapUv),w.push(_.iridescenceThicknessMapUv),w.push(_.sheenColorMapUv),w.push(_.sheenRoughnessMapUv),w.push(_.specularMapUv),w.push(_.specularColorMapUv),w.push(_.specularIntensityMapUv),w.push(_.transmissionMapUv),w.push(_.thicknessMapUv),w.push(_.combine),w.push(_.fogExp2),w.push(_.sizeAttenuation),w.push(_.morphTargetsCount),w.push(_.morphAttributeCount),w.push(_.numDirLights),w.push(_.numPointLights),w.push(_.numSpotLights),w.push(_.numSpotLightMaps),w.push(_.numHemiLights),w.push(_.numRectAreaLights),w.push(_.numDirLightShadows),w.push(_.numPointLightShadows),w.push(_.numSpotLightShadows),w.push(_.numSpotLightShadowsWithMaps),w.push(_.numLightProbes),w.push(_.shadowMapType),w.push(_.toneMapping),w.push(_.numClippingPlanes),w.push(_.numClipIntersection),w.push(_.depthPacking)}function E(w,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),w.push(a.mask)}function S(w){const _=m[w.type];let P;if(_){const V=Sn[_];P=bd.clone(V.uniforms)}else P=w.uniforms;return P}function k(w,_){let P;for(let V=0,N=h.length;V<N;V++){const Z=h[V];if(Z.cacheKey===_){P=Z,++P.usedTimes;break}}return P===void 0&&(P=new k0(s,_,w,o),h.push(P)),P}function L(w){if(--w.usedTimes===0){const _=h.indexOf(w);h[_]=h[h.length-1],h.pop(),w.destroy()}}function I(w){c.remove(w)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:S,acquireProgram:k,releaseProgram:L,releaseShaderCache:I,programs:h,dispose:D}}function W0(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,c){s.get(r)[a]=c}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function q0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function al(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function cl(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(u,d,f,m,v,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=v,p.group=g),t++,p}function a(u,d,f,m,v,g){const p=r(u,d,f,m,v,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,m,v,g){const p=r(u,d,f,m,v,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||q0),n.length>1&&n.sort(d||al),i.length>1&&i.sort(d||al)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:a,unshift:c,finish:h,sort:l}}function X0(){let s=new WeakMap;function t(n,i){const o=s.get(n);let r;return o===void 0?(r=new cl,s.set(n,[r])):i>=o.length?(r=new cl,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function Y0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new ee};break;case"SpotLight":e={position:new C,direction:new C,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function K0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let $0=0;function j0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Z0(s){const t=new Y0,e=K0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const i=new C,o=new me,r=new me;function a(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,b=0,E=0,S=0,k=0,L=0,I=0;l.sort(j0);for(let w=0,_=l.length;w<_;w++){const P=l[w],V=P.color,N=P.intensity,Z=P.distance,st=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=V.r*N,u+=V.g*N,d+=V.b*N;else if(P.isLightProbe){for(let tt=0;tt<9;tt++)n.probe[tt].addScaledVector(P.sh.coefficients[tt],N);I++}else if(P.isDirectionalLight){const tt=t.get(P);if(tt.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const rt=P.shadow,H=e.get(P);H.shadowIntensity=rt.intensity,H.shadowBias=rt.bias,H.shadowNormalBias=rt.normalBias,H.shadowRadius=rt.radius,H.shadowMapSize=rt.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=st,n.directionalShadowMatrix[f]=P.shadow.matrix,b++}n.directional[f]=tt,f++}else if(P.isSpotLight){const tt=t.get(P);tt.position.setFromMatrixPosition(P.matrixWorld),tt.color.copy(V).multiplyScalar(N),tt.distance=Z,tt.coneCos=Math.cos(P.angle),tt.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),tt.decay=P.decay,n.spot[v]=tt;const rt=P.shadow;if(P.map&&(n.spotLightMap[k]=P.map,k++,rt.updateMatrices(P),P.castShadow&&L++),n.spotLightMatrix[v]=rt.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=rt.intensity,H.shadowBias=rt.bias,H.shadowNormalBias=rt.normalBias,H.shadowRadius=rt.radius,H.shadowMapSize=rt.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=st,S++}v++}else if(P.isRectAreaLight){const tt=t.get(P);tt.color.copy(V).multiplyScalar(N),tt.halfWidth.set(P.width*.5,0,0),tt.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=tt,g++}else if(P.isPointLight){const tt=t.get(P);if(tt.color.copy(P.color).multiplyScalar(P.intensity),tt.distance=P.distance,tt.decay=P.decay,P.castShadow){const rt=P.shadow,H=e.get(P);H.shadowIntensity=rt.intensity,H.shadowBias=rt.bias,H.shadowNormalBias=rt.normalBias,H.shadowRadius=rt.radius,H.shadowMapSize=rt.mapSize,H.shadowCameraNear=rt.camera.near,H.shadowCameraFar=rt.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=st,n.pointShadowMatrix[m]=P.shadow.matrix,E++}n.point[m]=tt,m++}else if(P.isHemisphereLight){const tt=t.get(P);tt.skyColor.copy(P.color).multiplyScalar(N),tt.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[p]=tt,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==m||D.spotLength!==v||D.rectAreaLength!==g||D.hemiLength!==p||D.numDirectionalShadows!==b||D.numPointShadows!==E||D.numSpotShadows!==S||D.numSpotMaps!==k||D.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+k-L,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=I,D.directionalLength=f,D.pointLength=m,D.spotLength=v,D.rectAreaLength=g,D.hemiLength=p,D.numDirectionalShadows=b,D.numPointShadows=E,D.numSpotShadows=S,D.numSpotMaps=k,D.numLightProbes=I,n.version=$0++)}function c(l,h){let u=0,d=0,f=0,m=0,v=0;const g=h.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){const E=l[p];if(E.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),u++}else if(E.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),f++}else if(E.isRectAreaLight){const S=n.rectArea[m];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(g),r.identity(),o.copy(E.matrixWorld),o.premultiply(g),r.extractRotation(o),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),m++}else if(E.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(g),d++}else if(E.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:n}}function ll(s){const t=new Z0(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function J0(s){let t=new WeakMap;function e(i,o=0){const r=t.get(i);let a;return r===void 0?(a=new ll(s),t.set(i,[a])):o>=r.length?(a=new ll(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Q0 extends Li{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tg extends Li{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ng=`uniform sampler2D shadow_pass;
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
}`;function ig(s,t,e){let n=new tc;const i=new Ut,o=new Ut,r=new pe,a=new Q0({depthPacking:Du}),c=new tg,l={},h=e.maxTextureSize,u={[hi]:$e,[$e]:hi,[nn]:nn},d=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:eg,fragmentShader:ng}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ae;m.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new A(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ah;let p=this.type;this.render=function(L,I,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;const w=s.getRenderTarget(),_=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),V=s.state;V.setBlending(ci),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const N=p!==kn&&this.type===kn,Z=p===kn&&this.type!==kn;for(let st=0,tt=L.length;st<tt;st++){const rt=L[st],H=rt.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const ot=H.getFrameExtents();if(i.multiply(ot),o.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/ot.x),i.x=o.x*ot.x,H.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/ot.y),i.y=o.y*ot.y,H.mapSize.y=o.y)),H.map===null||N===!0||Z===!0){const Lt=this.type!==kn?{minFilter:yn,magFilter:yn}:{};H.map!==null&&H.map.dispose(),H.map=new Ci(i.x,i.y,Lt),H.map.texture.name=rt.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const pt=H.getViewportCount();for(let Lt=0;Lt<pt;Lt++){const Vt=H.getViewport(Lt);r.set(o.x*Vt.x,o.y*Vt.y,o.x*Vt.z,o.y*Vt.w),V.viewport(r),H.updateMatrices(rt,Lt),n=H.getFrustum(),S(I,D,H.camera,rt,this.type)}H.isPointLightShadow!==!0&&this.type===kn&&b(H,D),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(w,_,P)};function b(L,I){const D=t.update(v);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,f.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ci(i.x,i.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(I,null,D,d,v,null),f.uniforms.shadow_pass.value=L.mapPass.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(I,null,D,f,v,null)}function E(L,I,D,w){let _=null;const P=D.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(P!==void 0)_=P;else if(_=D.isPointLight===!0?c:a,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const V=_.uuid,N=I.uuid;let Z=l[V];Z===void 0&&(Z={},l[V]=Z);let st=Z[N];st===void 0&&(st=_.clone(),Z[N]=st,I.addEventListener("dispose",k)),_=st}if(_.visible=I.visible,_.wireframe=I.wireframe,w===kn?_.side=I.shadowSide!==null?I.shadowSide:I.side:_.side=I.shadowSide!==null?I.shadowSide:u[I.side],_.alphaMap=I.alphaMap,_.alphaTest=I.alphaTest,_.map=I.map,_.clipShadows=I.clipShadows,_.clippingPlanes=I.clippingPlanes,_.clipIntersection=I.clipIntersection,_.displacementMap=I.displacementMap,_.displacementScale=I.displacementScale,_.displacementBias=I.displacementBias,_.wireframeLinewidth=I.wireframeLinewidth,_.linewidth=I.linewidth,D.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const V=s.properties.get(_);V.light=D}return _}function S(L,I,D,w,_){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&_===kn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,L.matrixWorld);const N=t.update(L),Z=L.material;if(Array.isArray(Z)){const st=N.groups;for(let tt=0,rt=st.length;tt<rt;tt++){const H=st[tt],ot=Z[H.materialIndex];if(ot&&ot.visible){const pt=E(L,ot,w,_);L.onBeforeShadow(s,L,I,D,N,pt,H),s.renderBufferDirect(D,null,N,pt,L,H),L.onAfterShadow(s,L,I,D,N,pt,H)}}}else if(Z.visible){const st=E(L,Z,w,_);L.onBeforeShadow(s,L,I,D,N,st,null),s.renderBufferDirect(D,null,N,st,L,null),L.onAfterShadow(s,L,I,D,N,st,null)}}const V=L.children;for(let N=0,Z=V.length;N<Z;N++)S(V[N],I,D,w,_)}function k(L){L.target.removeEventListener("dispose",k);for(const D in l){const w=l[D],_=L.target.uuid;_ in w&&(w[_].dispose(),delete w[_])}}}const sg={[sa]:oa,[ra]:la,[aa]:ha,[ss]:ca,[oa]:sa,[la]:ra,[ha]:aa,[ca]:ss};function og(s,t){function e(){let O=!1;const bt=new pe;let J=null;const at=new pe(0,0,0,0);return{setMask:function(At){J!==At&&!O&&(s.colorMask(At,At,At,At),J=At)},setLocked:function(At){O=At},setClear:function(At,xt,Ht,ye,be){be===!0&&(At*=ye,xt*=ye,Ht*=ye),bt.set(At,xt,Ht,ye),at.equals(bt)===!1&&(s.clearColor(At,xt,Ht,ye),at.copy(bt))},reset:function(){O=!1,J=null,at.set(-1,0,0,0)}}}function n(){let O=!1,bt=!1,J=null,at=null,At=null;return{setReversed:function(xt){if(bt!==xt){const Ht=t.get("EXT_clip_control");bt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);const ye=At;At=null,this.setClear(ye)}bt=xt},getReversed:function(){return bt},setTest:function(xt){xt?ft(s.DEPTH_TEST):zt(s.DEPTH_TEST)},setMask:function(xt){J!==xt&&!O&&(s.depthMask(xt),J=xt)},setFunc:function(xt){if(bt&&(xt=sg[xt]),at!==xt){switch(xt){case sa:s.depthFunc(s.NEVER);break;case oa:s.depthFunc(s.ALWAYS);break;case ra:s.depthFunc(s.LESS);break;case ss:s.depthFunc(s.LEQUAL);break;case aa:s.depthFunc(s.EQUAL);break;case ca:s.depthFunc(s.GEQUAL);break;case la:s.depthFunc(s.GREATER);break;case ha:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}at=xt}},setLocked:function(xt){O=xt},setClear:function(xt){At!==xt&&(bt&&(xt=1-xt),s.clearDepth(xt),At=xt)},reset:function(){O=!1,J=null,at=null,At=null,bt=!1}}}function i(){let O=!1,bt=null,J=null,at=null,At=null,xt=null,Ht=null,ye=null,be=null;return{setTest:function(se){O||(se?ft(s.STENCIL_TEST):zt(s.STENCIL_TEST))},setMask:function(se){bt!==se&&!O&&(s.stencilMask(se),bt=se)},setFunc:function(se,ze,Je){(J!==se||at!==ze||At!==Je)&&(s.stencilFunc(se,ze,Je),J=se,at=ze,At=Je)},setOp:function(se,ze,Je){(xt!==se||Ht!==ze||ye!==Je)&&(s.stencilOp(se,ze,Je),xt=se,Ht=ze,ye=Je)},setLocked:function(se){O=se},setClear:function(se){be!==se&&(s.clearStencil(se),be=se)},reset:function(){O=!1,bt=null,J=null,at=null,At=null,xt=null,Ht=null,ye=null,be=null}}}const o=new e,r=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,b=null,E=null,S=null,k=null,L=null,I=new ee(0,0,0),D=0,w=!1,_=null,P=null,V=null,N=null,Z=null;const st=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let tt=!1,rt=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(H)[1]),tt=rt>=1):H.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),tt=rt>=2);let ot=null,pt={};const Lt=s.getParameter(s.SCISSOR_BOX),Vt=s.getParameter(s.VIEWPORT),Qt=new pe().fromArray(Lt),nt=new pe().fromArray(Vt);function dt(O,bt,J,at){const At=new Uint8Array(4),xt=s.createTexture();s.bindTexture(O,xt),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<J;Ht++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(bt,0,s.RGBA,1,1,at,0,s.RGBA,s.UNSIGNED_BYTE,At):s.texImage2D(bt+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,At);return xt}const It={};It[s.TEXTURE_2D]=dt(s.TEXTURE_2D,s.TEXTURE_2D,1),It[s.TEXTURE_CUBE_MAP]=dt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),It[s.TEXTURE_2D_ARRAY]=dt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),It[s.TEXTURE_3D]=dt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ft(s.DEPTH_TEST),r.setFunc(ss),Yt(!1),Zt(dc),ft(s.CULL_FACE),F(ci);function ft(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function zt(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function Gt(O,bt){return u[O]!==bt?(s.bindFramebuffer(O,bt),u[O]=bt,O===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=bt),O===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=bt),!0):!1}function Wt(O,bt){let J=f,at=!1;if(O){J=d.get(bt),J===void 0&&(J=[],d.set(bt,J));const At=O.textures;if(J.length!==At.length||J[0]!==s.COLOR_ATTACHMENT0){for(let xt=0,Ht=At.length;xt<Ht;xt++)J[xt]=s.COLOR_ATTACHMENT0+xt;J.length=At.length,at=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,at=!0);at&&s.drawBuffers(J)}function ie(O){return m!==O?(s.useProgram(O),m=O,!0):!1}const $t={[bi]:s.FUNC_ADD,[ru]:s.FUNC_SUBTRACT,[au]:s.FUNC_REVERSE_SUBTRACT};$t[cu]=s.MIN,$t[lu]=s.MAX;const he={[hu]:s.ZERO,[uu]:s.ONE,[du]:s.SRC_COLOR,[na]:s.SRC_ALPHA,[yu]:s.SRC_ALPHA_SATURATE,[gu]:s.DST_COLOR,[pu]:s.DST_ALPHA,[fu]:s.ONE_MINUS_SRC_COLOR,[ia]:s.ONE_MINUS_SRC_ALPHA,[vu]:s.ONE_MINUS_DST_COLOR,[mu]:s.ONE_MINUS_DST_ALPHA,[_u]:s.CONSTANT_COLOR,[xu]:s.ONE_MINUS_CONSTANT_COLOR,[Mu]:s.CONSTANT_ALPHA,[wu]:s.ONE_MINUS_CONSTANT_ALPHA};function F(O,bt,J,at,At,xt,Ht,ye,be,se){if(O===ci){v===!0&&(zt(s.BLEND),v=!1);return}if(v===!1&&(ft(s.BLEND),v=!0),O!==ou){if(O!==g||se!==w){if((p!==bi||S!==bi)&&(s.blendEquation(s.FUNC_ADD),p=bi,S=bi),se)switch(O){case es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vs:s.blendFunc(s.ONE,s.ONE);break;case fc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case pc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vs:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case fc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case pc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,E=null,k=null,L=null,I.set(0,0,0),D=0,g=O,w=se}return}At=At||bt,xt=xt||J,Ht=Ht||at,(bt!==p||At!==S)&&(s.blendEquationSeparate($t[bt],$t[At]),p=bt,S=At),(J!==b||at!==E||xt!==k||Ht!==L)&&(s.blendFuncSeparate(he[J],he[at],he[xt],he[Ht]),b=J,E=at,k=xt,L=Ht),(ye.equals(I)===!1||be!==D)&&(s.blendColor(ye.r,ye.g,ye.b,be),I.copy(ye),D=be),g=O,w=!1}function Oe(O,bt){O.side===nn?zt(s.CULL_FACE):ft(s.CULL_FACE);let J=O.side===$e;bt&&(J=!J),Yt(J),O.blending===es&&O.transparent===!1?F(ci):F(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),o.setMask(O.colorWrite);const at=O.stencilWrite;a.setTest(at),at&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),it(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ft(s.SAMPLE_ALPHA_TO_COVERAGE):zt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(O){_!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),_=O)}function Zt(O){O!==iu?(ft(s.CULL_FACE),O!==P&&(O===dc?s.cullFace(s.BACK):O===su?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):zt(s.CULL_FACE),P=O}function B(O){O!==V&&(tt&&s.lineWidth(O),V=O)}function it(O,bt,J){O?(ft(s.POLYGON_OFFSET_FILL),(N!==bt||Z!==J)&&(s.polygonOffset(bt,J),N=bt,Z=J)):zt(s.POLYGON_OFFSET_FILL)}function mt(O){O?ft(s.SCISSOR_TEST):zt(s.SCISSOR_TEST)}function T(O){O===void 0&&(O=s.TEXTURE0+st-1),ot!==O&&(s.activeTexture(O),ot=O)}function y(O,bt,J){J===void 0&&(ot===null?J=s.TEXTURE0+st-1:J=ot);let at=pt[J];at===void 0&&(at={type:void 0,texture:void 0},pt[J]=at),(at.type!==O||at.texture!==bt)&&(ot!==J&&(s.activeTexture(J),ot=J),s.bindTexture(O,bt||It[O]),at.type=O,at.texture=bt)}function G(){const O=pt[ot];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function yt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function kt(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function wt(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ft(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Bt(O){Qt.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),Qt.copy(O))}function Rt(O){nt.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),nt.copy(O))}function Jt(O,bt){let J=l.get(bt);J===void 0&&(J=new WeakMap,l.set(bt,J));let at=J.get(O);at===void 0&&(at=s.getUniformBlockIndex(bt,O.name),J.set(O,at))}function qt(O,bt){const at=l.get(bt).get(O);c.get(bt)!==at&&(s.uniformBlockBinding(bt,at,O.__bindingPointIndex),c.set(bt,at))}function ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ot=null,pt={},u={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,b=null,E=null,S=null,k=null,L=null,I=new ee(0,0,0),D=0,w=!1,_=null,P=null,V=null,N=null,Z=null,Qt.set(0,0,s.canvas.width,s.canvas.height),nt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:ft,disable:zt,bindFramebuffer:Gt,drawBuffers:Wt,useProgram:ie,setBlending:F,setMaterial:Oe,setFlipSided:Yt,setCullFace:Zt,setLineWidth:B,setPolygonOffset:it,setScissorTest:mt,activeTexture:T,bindTexture:y,unbindTexture:G,compressedTexImage2D:$,compressedTexImage3D:et,texImage2D:wt,texImage3D:Ft,updateUBOMapping:Jt,uniformBlockBinding:qt,texStorage2D:kt,texStorage3D:ut,texSubImage2D:Q,texSubImage3D:Ct,compressedTexSubImage2D:vt,compressedTexSubImage3D:yt,scissor:Bt,viewport:Rt,reset:ce}}function hl(s,t,e,n){const i=rg(n);switch(e){case mh:return s*t;case vh:return s*t;case yh:return s*t*2;case _h:return s*t/i.components*i.byteLength;case Ka:return s*t/i.components*i.byteLength;case xh:return s*t*2/i.components*i.byteLength;case $a:return s*t*2/i.components*i.byteLength;case gh:return s*t*3/i.components*i.byteLength;case vn:return s*t*4/i.components*i.byteLength;case ja:return s*t*4/i.components*i.byteLength;case qo:case Xo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Yo:case Ko:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case pa:case ga:return Math.max(s,16)*Math.max(t,8)/4;case fa:case ma:return Math.max(s,8)*Math.max(t,8)/2;case va:case ya:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case _a:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case wa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ba:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ra:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case La:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Pa:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ia:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Da:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case $o:case Ua:case Oa:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Mh:case Na:return Math.ceil(s/4)*Math.ceil(t/4)*8;case za:case Fa:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rg(s){switch(s){case Wn:case dh:return{byteLength:1,components:1};case js:case fh:case Js:return{byteLength:2,components:1};case Xa:case Ya:return{byteLength:2,components:4};case Ri:case qa:case Gn:return{byteLength:4,components:1};case ph:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function ag(s,t,e,n,i,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ut,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,y){return f?new OffscreenCanvas(T,y):er("canvas")}function v(T,y,G){let $=1;const et=mt(T);if((et.width>G||et.height>G)&&($=G/Math.max(et.width,et.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Q=Math.floor($*et.width),Ct=Math.floor($*et.height);u===void 0&&(u=m(Q,Ct));const vt=y?m(Q,Ct):u;return vt.width=Q,vt.height=Ct,vt.getContext("2d").drawImage(T,0,0,Q,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Q+"x"+Ct+")."),vt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),T;return T}function g(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(T,y,G,$,et=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=y;if(y===s.RED&&(G===s.FLOAT&&(Q=s.R32F),G===s.HALF_FLOAT&&(Q=s.R16F),G===s.UNSIGNED_BYTE&&(Q=s.R8)),y===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(Q=s.R8UI),G===s.UNSIGNED_SHORT&&(Q=s.R16UI),G===s.UNSIGNED_INT&&(Q=s.R32UI),G===s.BYTE&&(Q=s.R8I),G===s.SHORT&&(Q=s.R16I),G===s.INT&&(Q=s.R32I)),y===s.RG&&(G===s.FLOAT&&(Q=s.RG32F),G===s.HALF_FLOAT&&(Q=s.RG16F),G===s.UNSIGNED_BYTE&&(Q=s.RG8)),y===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(Q=s.RG8UI),G===s.UNSIGNED_SHORT&&(Q=s.RG16UI),G===s.UNSIGNED_INT&&(Q=s.RG32UI),G===s.BYTE&&(Q=s.RG8I),G===s.SHORT&&(Q=s.RG16I),G===s.INT&&(Q=s.RG32I)),y===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),G===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),G===s.UNSIGNED_INT&&(Q=s.RGB32UI),G===s.BYTE&&(Q=s.RGB8I),G===s.SHORT&&(Q=s.RGB16I),G===s.INT&&(Q=s.RGB32I)),y===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),G===s.UNSIGNED_INT&&(Q=s.RGBA32UI),G===s.BYTE&&(Q=s.RGBA8I),G===s.SHORT&&(Q=s.RGBA16I),G===s.INT&&(Q=s.RGBA32I)),y===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),y===s.RGBA){const Ct=et?cr:ne.getTransfer($);G===s.FLOAT&&(Q=s.RGBA32F),G===s.HALF_FLOAT&&(Q=s.RGBA16F),G===s.UNSIGNED_BYTE&&(Q=Ct===de?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function S(T,y){let G;return T?y===null||y===Ri||y===as?G=s.DEPTH24_STENCIL8:y===Gn?G=s.DEPTH32F_STENCIL8:y===js&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ri||y===as?G=s.DEPTH_COMPONENT24:y===Gn?G=s.DEPTH_COMPONENT32F:y===js&&(G=s.DEPTH_COMPONENT16),G}function k(T,y){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==yn&&T.minFilter!==Tn?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function L(T){const y=T.target;y.removeEventListener("dispose",L),D(y),y.isVideoTexture&&h.delete(y)}function I(T){const y=T.target;y.removeEventListener("dispose",I),_(y)}function D(T){const y=n.get(T);if(y.__webglInit===void 0)return;const G=T.source,$=d.get(G);if($){const et=$[y.__cacheKey];et.usedTimes--,et.usedTimes===0&&w(T),Object.keys($).length===0&&d.delete(G)}n.remove(T)}function w(T){const y=n.get(T);s.deleteTexture(y.__webglTexture);const G=T.source,$=d.get(G);delete $[y.__cacheKey],r.memory.textures--}function _(T){const y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let et=0;et<y.__webglFramebuffer[$].length;et++)s.deleteFramebuffer(y.__webglFramebuffer[$][et]);else s.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)s.deleteFramebuffer(y.__webglFramebuffer[$]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const G=T.textures;for(let $=0,et=G.length;$<et;$++){const Q=n.get(G[$]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),r.memory.textures--),n.remove(G[$])}n.remove(T)}let P=0;function V(){P=0}function N(){const T=P;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),P+=1,T}function Z(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function st(T,y){const G=n.get(T);if(T.isVideoTexture&&B(T),T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(G,T,y);return}}e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+y)}function tt(T,y){const G=n.get(T);if(T.version>0&&G.__version!==T.version){nt(G,T,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+y)}function rt(T,y){const G=n.get(T);if(T.version>0&&G.__version!==T.version){nt(G,T,y);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+y)}function H(T,y){const G=n.get(T);if(T.version>0&&G.__version!==T.version){dt(G,T,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+y)}const ot={[$s]:s.REPEAT,[Ei]:s.CLAMP_TO_EDGE,[da]:s.MIRRORED_REPEAT},pt={[yn]:s.NEAREST,[Pu]:s.NEAREST_MIPMAP_NEAREST,[so]:s.NEAREST_MIPMAP_LINEAR,[Tn]:s.LINEAR,[hr]:s.LINEAR_MIPMAP_NEAREST,[Ai]:s.LINEAR_MIPMAP_LINEAR},Lt={[Ou]:s.NEVER,[Gu]:s.ALWAYS,[Nu]:s.LESS,[Sh]:s.LEQUAL,[zu]:s.EQUAL,[Bu]:s.GEQUAL,[Fu]:s.GREATER,[ku]:s.NOTEQUAL};function Vt(T,y){if(y.type===Gn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Tn||y.magFilter===hr||y.magFilter===so||y.magFilter===Ai||y.minFilter===Tn||y.minFilter===hr||y.minFilter===so||y.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,ot[y.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,ot[y.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,ot[y.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,pt[y.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,pt[y.minFilter]),y.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,Lt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===yn||y.minFilter!==so&&y.minFilter!==Ai||y.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Qt(T,y){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",L));const $=y.source;let et=d.get($);et===void 0&&(et={},d.set($,et));const Q=Z(y);if(Q!==T.__cacheKey){et[Q]===void 0&&(et[Q]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,G=!0),et[Q].usedTimes++;const Ct=et[T.__cacheKey];Ct!==void 0&&(et[T.__cacheKey].usedTimes--,Ct.usedTimes===0&&w(y)),T.__cacheKey=Q,T.__webglTexture=et[Q].texture}return G}function nt(T,y,G){let $=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=s.TEXTURE_3D);const et=Qt(T,y),Q=y.source;e.bindTexture($,T.__webglTexture,s.TEXTURE0+G);const Ct=n.get(Q);if(Q.version!==Ct.__version||et===!0){e.activeTexture(s.TEXTURE0+G);const vt=ne.getPrimaries(ne.workingColorSpace),yt=y.colorSpace===ai?null:ne.getPrimaries(y.colorSpace),kt=y.colorSpace===ai||vt===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let ut=v(y.image,!1,i.maxTextureSize);ut=it(y,ut);const wt=o.convert(y.format,y.colorSpace),Ft=o.convert(y.type);let Bt=E(y.internalFormat,wt,Ft,y.colorSpace,y.isVideoTexture);Vt($,y);let Rt;const Jt=y.mipmaps,qt=y.isVideoTexture!==!0,ce=Ct.__version===void 0||et===!0,O=Q.dataReady,bt=k(y,ut);if(y.isDepthTexture)Bt=S(y.format===cs,y.type),ce&&(qt?e.texStorage2D(s.TEXTURE_2D,1,Bt,ut.width,ut.height):e.texImage2D(s.TEXTURE_2D,0,Bt,ut.width,ut.height,0,wt,Ft,null));else if(y.isDataTexture)if(Jt.length>0){qt&&ce&&e.texStorage2D(s.TEXTURE_2D,bt,Bt,Jt[0].width,Jt[0].height);for(let J=0,at=Jt.length;J<at;J++)Rt=Jt[J],qt?O&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,Rt.width,Rt.height,wt,Ft,Rt.data):e.texImage2D(s.TEXTURE_2D,J,Bt,Rt.width,Rt.height,0,wt,Ft,Rt.data);y.generateMipmaps=!1}else qt?(ce&&e.texStorage2D(s.TEXTURE_2D,bt,Bt,ut.width,ut.height),O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ut.width,ut.height,wt,Ft,ut.data)):e.texImage2D(s.TEXTURE_2D,0,Bt,ut.width,ut.height,0,wt,Ft,ut.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){qt&&ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,bt,Bt,Jt[0].width,Jt[0].height,ut.depth);for(let J=0,at=Jt.length;J<at;J++)if(Rt=Jt[J],y.format!==vn)if(wt!==null)if(qt){if(O)if(y.layerUpdates.size>0){const At=hl(Rt.width,Rt.height,y.format,y.type);for(const xt of y.layerUpdates){const Ht=Rt.data.subarray(xt*At/Rt.data.BYTES_PER_ELEMENT,(xt+1)*At/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,xt,Rt.width,Rt.height,1,wt,Ht)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,Rt.width,Rt.height,ut.depth,wt,Rt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,Bt,Rt.width,Rt.height,ut.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?O&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,Rt.width,Rt.height,ut.depth,wt,Ft,Rt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,J,Bt,Rt.width,Rt.height,ut.depth,0,wt,Ft,Rt.data)}else{qt&&ce&&e.texStorage2D(s.TEXTURE_2D,bt,Bt,Jt[0].width,Jt[0].height);for(let J=0,at=Jt.length;J<at;J++)Rt=Jt[J],y.format!==vn?wt!==null?qt?O&&e.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,Rt.width,Rt.height,wt,Rt.data):e.compressedTexImage2D(s.TEXTURE_2D,J,Bt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?O&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,Rt.width,Rt.height,wt,Ft,Rt.data):e.texImage2D(s.TEXTURE_2D,J,Bt,Rt.width,Rt.height,0,wt,Ft,Rt.data)}else if(y.isDataArrayTexture)if(qt){if(ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,bt,Bt,ut.width,ut.height,ut.depth),O)if(y.layerUpdates.size>0){const J=hl(ut.width,ut.height,y.format,y.type);for(const at of y.layerUpdates){const At=ut.data.subarray(at*J/ut.data.BYTES_PER_ELEMENT,(at+1)*J/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,at,ut.width,ut.height,1,wt,Ft,At)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,wt,Ft,ut.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Bt,ut.width,ut.height,ut.depth,0,wt,Ft,ut.data);else if(y.isData3DTexture)qt?(ce&&e.texStorage3D(s.TEXTURE_3D,bt,Bt,ut.width,ut.height,ut.depth),O&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,wt,Ft,ut.data)):e.texImage3D(s.TEXTURE_3D,0,Bt,ut.width,ut.height,ut.depth,0,wt,Ft,ut.data);else if(y.isFramebufferTexture){if(ce)if(qt)e.texStorage2D(s.TEXTURE_2D,bt,Bt,ut.width,ut.height);else{let J=ut.width,at=ut.height;for(let At=0;At<bt;At++)e.texImage2D(s.TEXTURE_2D,At,Bt,J,at,0,wt,Ft,null),J>>=1,at>>=1}}else if(Jt.length>0){if(qt&&ce){const J=mt(Jt[0]);e.texStorage2D(s.TEXTURE_2D,bt,Bt,J.width,J.height)}for(let J=0,at=Jt.length;J<at;J++)Rt=Jt[J],qt?O&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,wt,Ft,Rt):e.texImage2D(s.TEXTURE_2D,J,Bt,wt,Ft,Rt);y.generateMipmaps=!1}else if(qt){if(ce){const J=mt(ut);e.texStorage2D(s.TEXTURE_2D,bt,Bt,J.width,J.height)}O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,wt,Ft,ut)}else e.texImage2D(s.TEXTURE_2D,0,Bt,wt,Ft,ut);g(y)&&p($),Ct.__version=Q.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function dt(T,y,G){if(y.image.length!==6)return;const $=Qt(T,y),et=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+G);const Q=n.get(et);if(et.version!==Q.__version||$===!0){e.activeTexture(s.TEXTURE0+G);const Ct=ne.getPrimaries(ne.workingColorSpace),vt=y.colorSpace===ai?null:ne.getPrimaries(y.colorSpace),yt=y.colorSpace===ai||Ct===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const kt=y.isCompressedTexture||y.image[0].isCompressedTexture,ut=y.image[0]&&y.image[0].isDataTexture,wt=[];for(let at=0;at<6;at++)!kt&&!ut?wt[at]=v(y.image[at],!0,i.maxCubemapSize):wt[at]=ut?y.image[at].image:y.image[at],wt[at]=it(y,wt[at]);const Ft=wt[0],Bt=o.convert(y.format,y.colorSpace),Rt=o.convert(y.type),Jt=E(y.internalFormat,Bt,Rt,y.colorSpace),qt=y.isVideoTexture!==!0,ce=Q.__version===void 0||$===!0,O=et.dataReady;let bt=k(y,Ft);Vt(s.TEXTURE_CUBE_MAP,y);let J;if(kt){qt&&ce&&e.texStorage2D(s.TEXTURE_CUBE_MAP,bt,Jt,Ft.width,Ft.height);for(let at=0;at<6;at++){J=wt[at].mipmaps;for(let At=0;At<J.length;At++){const xt=J[At];y.format!==vn?Bt!==null?qt?O&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,At,0,0,xt.width,xt.height,Bt,xt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,At,Jt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,At,0,0,xt.width,xt.height,Bt,Rt,xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,At,Jt,xt.width,xt.height,0,Bt,Rt,xt.data)}}}else{if(J=y.mipmaps,qt&&ce){J.length>0&&bt++;const at=mt(wt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,bt,Jt,at.width,at.height)}for(let at=0;at<6;at++)if(ut){qt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,wt[at].width,wt[at].height,Bt,Rt,wt[at].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Jt,wt[at].width,wt[at].height,0,Bt,Rt,wt[at].data);for(let At=0;At<J.length;At++){const Ht=J[At].image[at].image;qt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,At+1,0,0,Ht.width,Ht.height,Bt,Rt,Ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,At+1,Jt,Ht.width,Ht.height,0,Bt,Rt,Ht.data)}}else{qt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Bt,Rt,wt[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Jt,Bt,Rt,wt[at]);for(let At=0;At<J.length;At++){const xt=J[At];qt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,At+1,0,0,Bt,Rt,xt.image[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,At+1,Jt,Bt,Rt,xt.image[at])}}}g(y)&&p(s.TEXTURE_CUBE_MAP),Q.__version=et.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function It(T,y,G,$,et,Q){const Ct=o.convert(G.format,G.colorSpace),vt=o.convert(G.type),yt=E(G.internalFormat,Ct,vt,G.colorSpace),kt=n.get(y),ut=n.get(G);if(ut.__renderTarget=y,!kt.__hasExternalTextures){const wt=Math.max(1,y.width>>Q),Ft=Math.max(1,y.height>>Q);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,Q,yt,wt,Ft,y.depth,0,Ct,vt,null):e.texImage2D(et,Q,yt,wt,Ft,0,Ct,vt,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),Zt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,et,ut.__webglTexture,0,Yt(y)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,et,ut.__webglTexture,Q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(T,y,G){if(s.bindRenderbuffer(s.RENDERBUFFER,T),y.depthBuffer){const $=y.depthTexture,et=$&&$.isDepthTexture?$.type:null,Q=S(y.stencilBuffer,et),Ct=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=Yt(y);Zt(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,vt,Q,y.width,y.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,vt,Q,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Q,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,T)}else{const $=y.textures;for(let et=0;et<$.length;et++){const Q=$[et],Ct=o.convert(Q.format,Q.colorSpace),vt=o.convert(Q.type),yt=E(Q.internalFormat,Ct,vt,Q.colorSpace),kt=Yt(y);G&&Zt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,yt,y.width,y.height):Zt(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt,yt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,yt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function zt(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(y.depthTexture);$.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),st(y.depthTexture,0);const et=$.__webglTexture,Q=Yt(y);if(y.depthTexture.format===ns)Zt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(y.depthTexture.format===cs)Zt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Gt(T){const y=n.get(T),G=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const $=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){const et=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",et)};$.addEventListener("dispose",et),y.__depthDisposeCallback=et}y.__boundDepthTexture=$}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");zt(y.__webglFramebuffer,T)}else if(G){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=s.createRenderbuffer(),ft(y.__webglDepthbuffer[$],T,!1);else{const et=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),ft(y.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,et)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(T,y,G){const $=n.get(T);y!==void 0&&It($.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Gt(T)}function ie(T){const y=T.texture,G=n.get(T),$=n.get(y);T.addEventListener("dispose",I);const et=T.textures,Q=T.isWebGLCubeRenderTarget===!0,Ct=et.length>1;if(Ct||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=y.version,r.memory.textures++),Q){G.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[vt]=[];for(let yt=0;yt<y.mipmaps.length;yt++)G.__webglFramebuffer[vt][yt]=s.createFramebuffer()}else G.__webglFramebuffer[vt]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let vt=0;vt<y.mipmaps.length;vt++)G.__webglFramebuffer[vt]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Ct)for(let vt=0,yt=et.length;vt<yt;vt++){const kt=n.get(et[vt]);kt.__webglTexture===void 0&&(kt.__webglTexture=s.createTexture(),r.memory.textures++)}if(T.samples>0&&Zt(T)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let vt=0;vt<et.length;vt++){const yt=et[vt];G.__webglColorRenderbuffer[vt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[vt]);const kt=o.convert(yt.format,yt.colorSpace),ut=o.convert(yt.type),wt=E(yt.internalFormat,kt,ut,yt.colorSpace,T.isXRRenderTarget===!0),Ft=Yt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft,wt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,G.__webglColorRenderbuffer[vt])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),ft(G.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Vt(s.TEXTURE_CUBE_MAP,y);for(let vt=0;vt<6;vt++)if(y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)It(G.__webglFramebuffer[vt][yt],T,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,yt);else It(G.__webglFramebuffer[vt],T,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);g(y)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let vt=0,yt=et.length;vt<yt;vt++){const kt=et[vt],ut=n.get(kt);e.bindTexture(s.TEXTURE_2D,ut.__webglTexture),Vt(s.TEXTURE_2D,kt),It(G.__webglFramebuffer,T,kt,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,0),g(kt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let vt=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(vt=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(vt,$.__webglTexture),Vt(vt,y),y.mipmaps&&y.mipmaps.length>0)for(let yt=0;yt<y.mipmaps.length;yt++)It(G.__webglFramebuffer[yt],T,y,s.COLOR_ATTACHMENT0,vt,yt);else It(G.__webglFramebuffer,T,y,s.COLOR_ATTACHMENT0,vt,0);g(y)&&p(vt),e.unbindTexture()}T.depthBuffer&&Gt(T)}function $t(T){const y=T.textures;for(let G=0,$=y.length;G<$;G++){const et=y[G];if(g(et)){const Q=b(T),Ct=n.get(et).__webglTexture;e.bindTexture(Q,Ct),p(Q),e.unbindTexture()}}}const he=[],F=[];function Oe(T){if(T.samples>0){if(Zt(T)===!1){const y=T.textures,G=T.width,$=T.height;let et=s.COLOR_BUFFER_BIT;const Q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=n.get(T),vt=y.length>1;if(vt)for(let yt=0;yt<y.length;yt++)e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let yt=0;yt<y.length;yt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),vt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[yt]);const kt=n.get(y[yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,kt,0)}s.blitFramebuffer(0,0,G,$,0,0,G,$,et,s.NEAREST),c===!0&&(he.length=0,F.length=0,he.push(s.COLOR_ATTACHMENT0+yt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(he.push(Q),F.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),vt)for(let yt=0;yt<y.length;yt++){e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[yt]);const kt=n.get(y[yt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,kt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const y=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Yt(T){return Math.min(i.maxSamples,T.samples)}function Zt(T){const y=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function B(T){const y=r.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function it(T,y){const G=T.colorSpace,$=T.format,et=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==ps&&G!==ai&&(ne.getTransfer(G)===de?($!==vn||et!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),y}function mt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=V,this.setTexture2D=st,this.setTexture2DArray=tt,this.setTexture3D=rt,this.setTextureCube=H,this.rebindTextures=Wt,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=It,this.useMultisampledRTT=Zt}function cg(s,t){function e(n,i=ai){let o;const r=ne.getTransfer(i);if(n===Wn)return s.UNSIGNED_BYTE;if(n===Xa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ya)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ph)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===dh)return s.BYTE;if(n===fh)return s.SHORT;if(n===js)return s.UNSIGNED_SHORT;if(n===qa)return s.INT;if(n===Ri)return s.UNSIGNED_INT;if(n===Gn)return s.FLOAT;if(n===Js)return s.HALF_FLOAT;if(n===mh)return s.ALPHA;if(n===gh)return s.RGB;if(n===vn)return s.RGBA;if(n===vh)return s.LUMINANCE;if(n===yh)return s.LUMINANCE_ALPHA;if(n===ns)return s.DEPTH_COMPONENT;if(n===cs)return s.DEPTH_STENCIL;if(n===_h)return s.RED;if(n===Ka)return s.RED_INTEGER;if(n===xh)return s.RG;if(n===$a)return s.RG_INTEGER;if(n===ja)return s.RGBA_INTEGER;if(n===qo||n===Xo||n===Yo||n===Ko)if(r===de)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===qo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===qo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ko)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fa||n===pa||n===ma||n===ga)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===fa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ma)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ga)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===va||n===ya||n===_a)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===va||n===ya)return r===de?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===_a)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xa||n===Ma||n===wa||n===Sa||n===ba||n===Ta||n===Ea||n===Aa||n===Ra||n===Ca||n===La||n===Pa||n===Ia||n===Da)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===xa)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ma)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wa)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sa)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ba)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ta)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ea)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Aa)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ra)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ca)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===La)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pa)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ia)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Da)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$o||n===Ua||n===Oa)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===$o)return r===de?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ua)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oa)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mh||n===Na||n===za||n===Fa)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===$o)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Na)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===za)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fa)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===as?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class lg extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Pt extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hg={type:"move"};class zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,n),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hg)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ug=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dg=`
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

}`;class fg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ge,o=t.properties.get(i);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ui({vertexShader:ug,fragmentShader:dg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new A(new Ee(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pg extends ms{constructor(t,e){super();const n=this;let i=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const v=new fg,g=e.getContextAttributes();let p=null,b=null;const E=[],S=[],k=new Ut;let L=null;const I=new Ke;I.viewport=new pe;const D=new Ke;D.viewport=new pe;const w=[I,D],_=new lg;let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let dt=E[nt];return dt===void 0&&(dt=new zr,E[nt]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(nt){let dt=E[nt];return dt===void 0&&(dt=new zr,E[nt]=dt),dt.getGripSpace()},this.getHand=function(nt){let dt=E[nt];return dt===void 0&&(dt=new zr,E[nt]=dt),dt.getHandSpace()};function N(nt){const dt=S.indexOf(nt.inputSource);if(dt===-1)return;const It=E[dt];It!==void 0&&(It.update(nt.inputSource,nt.frame,l||r),It.dispatchEvent({type:nt.type,data:nt.inputSource}))}function Z(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",st);for(let nt=0;nt<E.length;nt++){const dt=S[nt];dt!==null&&(S[nt]=null,E[nt].disconnect(dt))}P=null,V=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,b=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){o=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(nt){l=nt},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(nt){if(i=nt,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",st),g.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(k),i.renderState.layers===void 0){const dt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(i,e,dt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Ci(f.framebufferWidth,f.framebufferHeight,{format:vn,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let dt=null,It=null,ft=null;g.depth&&(ft=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=g.stencil?cs:ns,It=g.stencil?as:Ri);const zt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:o};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(zt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Ci(d.textureWidth,d.textureHeight,{format:vn,type:Wn,depthTexture:new Oh(d.textureWidth,d.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(a),Qt.setContext(i),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function st(nt){for(let dt=0;dt<nt.removed.length;dt++){const It=nt.removed[dt],ft=S.indexOf(It);ft>=0&&(S[ft]=null,E[ft].disconnect(It))}for(let dt=0;dt<nt.added.length;dt++){const It=nt.added[dt];let ft=S.indexOf(It);if(ft===-1){for(let Gt=0;Gt<E.length;Gt++)if(Gt>=S.length){S.push(It),ft=Gt;break}else if(S[Gt]===null){S[Gt]=It,ft=Gt;break}if(ft===-1)break}const zt=E[ft];zt&&zt.connect(It)}}const tt=new C,rt=new C;function H(nt,dt,It){tt.setFromMatrixPosition(dt.matrixWorld),rt.setFromMatrixPosition(It.matrixWorld);const ft=tt.distanceTo(rt),zt=dt.projectionMatrix.elements,Gt=It.projectionMatrix.elements,Wt=zt[14]/(zt[10]-1),ie=zt[14]/(zt[10]+1),$t=(zt[9]+1)/zt[5],he=(zt[9]-1)/zt[5],F=(zt[8]-1)/zt[0],Oe=(Gt[8]+1)/Gt[0],Yt=Wt*F,Zt=Wt*Oe,B=ft/(-F+Oe),it=B*-F;if(dt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(it),nt.translateZ(B),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),zt[10]===-1)nt.projectionMatrix.copy(dt.projectionMatrix),nt.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const mt=Wt+B,T=ie+B,y=Yt-it,G=Zt+(ft-it),$=$t*ie/T*mt,et=he*ie/T*mt;nt.projectionMatrix.makePerspective(y,G,$,et,mt,T),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function ot(nt,dt){dt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(dt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(i===null)return;let dt=nt.near,It=nt.far;v.texture!==null&&(v.depthNear>0&&(dt=v.depthNear),v.depthFar>0&&(It=v.depthFar)),_.near=D.near=I.near=dt,_.far=D.far=I.far=It,(P!==_.near||V!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),P=_.near,V=_.far),I.layers.mask=nt.layers.mask|2,D.layers.mask=nt.layers.mask|4,_.layers.mask=I.layers.mask|D.layers.mask;const ft=nt.parent,zt=_.cameras;ot(_,ft);for(let Gt=0;Gt<zt.length;Gt++)ot(zt[Gt],ft);zt.length===2?H(_,I,D):_.projectionMatrix.copy(I.projectionMatrix),pt(nt,_,ft)};function pt(nt,dt,It){It===null?nt.matrix.copy(dt.matrixWorld):(nt.matrix.copy(It.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(dt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(dt.projectionMatrix),nt.projectionMatrixInverse.copy(dt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=ls*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(nt){c=nt,d!==null&&(d.fixedFoveation=nt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=nt)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let Lt=null;function Vt(nt,dt){if(h=dt.getViewerPose(l||r),m=dt,h!==null){const It=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let ft=!1;It.length!==_.cameras.length&&(_.cameras.length=0,ft=!0);for(let Gt=0;Gt<It.length;Gt++){const Wt=It[Gt];let ie=null;if(f!==null)ie=f.getViewport(Wt);else{const he=u.getViewSubImage(d,Wt);ie=he.viewport,Gt===0&&(t.setRenderTargetTextures(b,he.colorTexture,d.ignoreDepthValues?void 0:he.depthStencilTexture),t.setRenderTarget(b))}let $t=w[Gt];$t===void 0&&($t=new Ke,$t.layers.enable(Gt),$t.viewport=new pe,w[Gt]=$t),$t.matrix.fromArray(Wt.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Wt.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(ie.x,ie.y,ie.width,ie.height),Gt===0&&(_.matrix.copy($t.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ft===!0&&_.cameras.push($t)}const zt=i.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const Gt=u.getDepthInformation(It[0]);Gt&&Gt.isValid&&Gt.texture&&v.init(t,Gt,i.renderState)}}for(let It=0;It<E.length;It++){const ft=S[It],zt=E[It];ft!==null&&zt!==void 0&&zt.update(ft,dt,l||r)}Lt&&Lt(nt,dt),dt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:dt}),m=null}const Qt=new Uh;Qt.setAnimationLoop(Vt),this.setAnimationLoop=function(nt){Lt=nt},this.dispose=function(){}}}const yi=new An,mg=new me;function gg(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ph(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,b,E,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(g,p):p.isMeshToonMaterial?(o(g,p),u(g,p)):p.isMeshPhongMaterial?(o(g,p),h(g,p)):p.isMeshStandardMaterial?(o(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,S)):p.isMeshMatcapMaterial?(o(g,p),m(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),v(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,b,E):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===$e&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===$e&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const b=t.get(p),E=b.envMap,S=b.envMapRotation;E&&(g.envMap.value=E,yi.copy(S),yi.x*=-1,yi.y*=-1,yi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),g.envMapRotation.value.setFromMatrix4(mg.makeRotationFromEuler(yi)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,b,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=E*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const b=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function vg(s,t,e,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,E){const S=E.program;n.uniformBlockBinding(b,S)}function l(b,E){let S=i[b.id];S===void 0&&(m(b),S=h(b),i[b.id]=S,b.addEventListener("dispose",g));const k=E.program;n.updateUBOMapping(b,k);const L=t.render.frame;o[b.id]!==L&&(d(b),o[b.id]=L)}function h(b){const E=u();b.__bindingPointIndex=E;const S=s.createBuffer(),k=b.__size,L=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,k,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,S),S}function u(){for(let b=0;b<a;b++)if(r.indexOf(b)===-1)return r.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const E=i[b.id],S=b.uniforms,k=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let L=0,I=S.length;L<I;L++){const D=Array.isArray(S[L])?S[L]:[S[L]];for(let w=0,_=D.length;w<_;w++){const P=D[w];if(f(P,L,w,k)===!0){const V=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let Z=0;for(let st=0;st<N.length;st++){const tt=N[st],rt=v(tt);typeof tt=="number"||typeof tt=="boolean"?(P.__data[0]=tt,s.bufferSubData(s.UNIFORM_BUFFER,V+Z,P.__data)):tt.isMatrix3?(P.__data[0]=tt.elements[0],P.__data[1]=tt.elements[1],P.__data[2]=tt.elements[2],P.__data[3]=0,P.__data[4]=tt.elements[3],P.__data[5]=tt.elements[4],P.__data[6]=tt.elements[5],P.__data[7]=0,P.__data[8]=tt.elements[6],P.__data[9]=tt.elements[7],P.__data[10]=tt.elements[8],P.__data[11]=0):(tt.toArray(P.__data,Z),Z+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,E,S,k){const L=b.value,I=E+"_"+S;if(k[I]===void 0)return typeof L=="number"||typeof L=="boolean"?k[I]=L:k[I]=L.clone(),!0;{const D=k[I];if(typeof L=="number"||typeof L=="boolean"){if(D!==L)return k[I]=L,!0}else if(D.equals(L)===!1)return D.copy(L),!0}return!1}function m(b){const E=b.uniforms;let S=0;const k=16;for(let I=0,D=E.length;I<D;I++){const w=Array.isArray(E[I])?E[I]:[E[I]];for(let _=0,P=w.length;_<P;_++){const V=w[_],N=Array.isArray(V.value)?V.value:[V.value];for(let Z=0,st=N.length;Z<st;Z++){const tt=N[Z],rt=v(tt),H=S%k,ot=H%rt.boundary,pt=H+ot;S+=ot,pt!==0&&k-pt<rt.storage&&(S+=k-pt),V.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=rt.storage}}}const L=S%k;return L>0&&(S+=k-L),b.__size=S,b.__cache={},this}function v(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function g(b){const E=b.target;E.removeEventListener("dispose",g);const S=r.indexOf(E.__bindingPointIndex);r.splice(S,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete o[E.id]}function p(){for(const b in i)s.deleteBuffer(i[b]);r=[],i={},o={}}return{bind:c,update:l,dispose:p}}class yg{constructor(t={}){const{canvas:e=sd(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const b=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=li,this.toneMappingExposure=1;const S=this;let k=!1,L=0,I=0,D=null,w=-1,_=null;const P=new pe,V=new pe;let N=null;const Z=new ee(0);let st=0,tt=e.width,rt=e.height,H=1,ot=null,pt=null;const Lt=new pe(0,0,tt,rt),Vt=new pe(0,0,tt,rt);let Qt=!1;const nt=new tc;let dt=!1,It=!1;const ft=new me,zt=new me,Gt=new C,Wt=new pe,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function he(){return D===null?H:1}let F=n;function Oe(M,z){return e.getContext(M,z)}try{const M={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wa}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",xt,!1),F===null){const z="webgl2";if(F=Oe(z,M),F===null)throw Oe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Yt,Zt,B,it,mt,T,y,G,$,et,Q,Ct,vt,yt,kt,ut,wt,Ft,Bt,Rt,Jt,qt,ce,O;function bt(){Yt=new Sm(F),Yt.init(),qt=new cg(F,Yt),Zt=new gm(F,Yt,t,qt),B=new og(F,Yt),Zt.reverseDepthBuffer&&d&&B.buffers.depth.setReversed(!0),it=new Em(F),mt=new W0,T=new ag(F,Yt,B,mt,Zt,qt,it),y=new ym(S),G=new wm(S),$=new Pd(F),ce=new pm(F,$),et=new bm(F,$,it,ce),Q=new Rm(F,et,$,it),Bt=new Am(F,Zt,T),ut=new vm(mt),Ct=new V0(S,y,G,Yt,Zt,ce,ut),vt=new gg(S,mt),yt=new X0,kt=new J0(Yt),Ft=new fm(S,y,G,B,Q,f,c),wt=new ig(S,Q,Zt),O=new vg(F,it,Zt,B),Rt=new mm(F,Yt,it),Jt=new Tm(F,Yt,it),it.programs=Ct.programs,S.capabilities=Zt,S.extensions=Yt,S.properties=mt,S.renderLists=yt,S.shadowMap=wt,S.state=B,S.info=it}bt();const J=new pg(S,F);this.xr=J,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const M=Yt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Yt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(tt,rt,!1))},this.getSize=function(M){return M.set(tt,rt)},this.setSize=function(M,z,q=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}tt=M,rt=z,e.width=Math.floor(M*H),e.height=Math.floor(z*H),q===!0&&(e.style.width=M+"px",e.style.height=z+"px"),this.setViewport(0,0,M,z)},this.getDrawingBufferSize=function(M){return M.set(tt*H,rt*H).floor()},this.setDrawingBufferSize=function(M,z,q){tt=M,rt=z,H=q,e.width=Math.floor(M*q),e.height=Math.floor(z*q),this.setViewport(0,0,M,z)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(Lt)},this.setViewport=function(M,z,q,Y){M.isVector4?Lt.set(M.x,M.y,M.z,M.w):Lt.set(M,z,q,Y),B.viewport(P.copy(Lt).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(Vt)},this.setScissor=function(M,z,q,Y){M.isVector4?Vt.set(M.x,M.y,M.z,M.w):Vt.set(M,z,q,Y),B.scissor(V.copy(Vt).multiplyScalar(H).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(M){B.setScissorTest(Qt=M)},this.setOpaqueSort=function(M){ot=M},this.setTransparentSort=function(M){pt=M},this.getClearColor=function(M){return M.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(M=!0,z=!0,q=!0){let Y=0;if(M){let x=!1;if(D!==null){const U=D.texture.format;x=U===ja||U===$a||U===Ka}if(x){const U=D.texture.type,W=U===Wn||U===Ri||U===js||U===as||U===Xa||U===Ya,ct=Ft.getClearColor(),ht=Ft.getClearAlpha(),Mt=ct.r,_t=ct.g,Et=ct.b;W?(m[0]=Mt,m[1]=_t,m[2]=Et,m[3]=ht,F.clearBufferuiv(F.COLOR,0,m)):(v[0]=Mt,v[1]=_t,v[2]=Et,v[3]=ht,F.clearBufferiv(F.COLOR,0,v))}else Y|=F.COLOR_BUFFER_BIT}z&&(Y|=F.DEPTH_BUFFER_BIT),q&&(Y|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),yt.dispose(),kt.dispose(),mt.dispose(),y.dispose(),G.dispose(),Q.dispose(),ce.dispose(),O.dispose(),Ct.dispose(),J.dispose(),J.removeEventListener("sessionstart",xs),J.removeEventListener("sessionend",Ms),xn.stop()};function at(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const M=it.autoReset,z=wt.enabled,q=wt.autoUpdate,Y=wt.needsUpdate,x=wt.type;bt(),it.autoReset=M,wt.enabled=z,wt.autoUpdate=q,wt.needsUpdate=Y,wt.type=x}function xt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ht(M){const z=M.target;z.removeEventListener("dispose",Ht),ye(z)}function ye(M){be(M),mt.remove(M)}function be(M){const z=mt.get(M).programs;z!==void 0&&(z.forEach(function(q){Ct.releaseProgram(q)}),M.isShaderMaterial&&Ct.releaseShaderCache(M))}this.renderBufferDirect=function(M,z,q,Y,x,U){z===null&&(z=ie);const W=x.isMesh&&x.matrixWorld.determinant()<0,ct=bs(M,z,q,Y,x);B.setMaterial(Y,W);let ht=q.index,Mt=1;if(Y.wireframe===!0){if(ht=et.getWireframeAttribute(q),ht===void 0)return;Mt=2}const _t=q.drawRange,Et=q.attributes.position;let te=_t.start*Mt,le=(_t.start+_t.count)*Mt;U!==null&&(te=Math.max(te,U.start*Mt),le=Math.min(le,(U.start+U.count)*Mt)),ht!==null?(te=Math.max(te,0),le=Math.min(le,ht.count)):Et!=null&&(te=Math.max(te,0),le=Math.min(le,Et.count));const ge=le-te;if(ge<0||ge===1/0)return;ce.setup(x,Y,ct,q,ht);let qe,oe=Rt;if(ht!==null&&(qe=$.get(ht),oe=Jt,oe.setIndex(qe)),x.isMesh)Y.wireframe===!0?(B.setLineWidth(Y.wireframeLinewidth*he()),oe.setMode(F.LINES)):oe.setMode(F.TRIANGLES);else if(x.isLine){let Ot=Y.linewidth;Ot===void 0&&(Ot=1),B.setLineWidth(Ot*he()),x.isLineSegments?oe.setMode(F.LINES):x.isLineLoop?oe.setMode(F.LINE_LOOP):oe.setMode(F.LINE_STRIP)}else x.isPoints?oe.setMode(F.POINTS):x.isSprite&&oe.setMode(F.TRIANGLES);if(x.isBatchedMesh)if(x._multiDrawInstances!==null)oe.renderMultiDrawInstances(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount,x._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))oe.renderMultiDraw(x._multiDrawStarts,x._multiDrawCounts,x._multiDrawCount);else{const Ot=x._multiDrawStarts,Pn=x._multiDrawCounts,re=x._multiDrawCount,ln=ht?$.get(ht).bytesPerElement:1,Ui=mt.get(Y).currentProgram.getUniforms();for(let Qe=0;Qe<re;Qe++)Ui.setValue(F,"_gl_DrawID",Qe),oe.render(Ot[Qe]/ln,Pn[Qe])}else if(x.isInstancedMesh)oe.renderInstances(te,ge,x.count);else if(q.isInstancedBufferGeometry){const Ot=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Pn=Math.min(q.instanceCount,Ot);oe.renderInstances(te,ge,Pn)}else oe.render(te,ge)};function se(M,z,q){M.transparent===!0&&M.side===nn&&M.forceSinglePass===!1?(M.side=$e,M.needsUpdate=!0,di(M,z,q),M.side=hi,M.needsUpdate=!0,di(M,z,q),M.side=nn):di(M,z,q)}this.compile=function(M,z,q=null){q===null&&(q=M),p=kt.get(q),p.init(z),E.push(p),q.traverseVisible(function(x){x.isLight&&x.layers.test(z.layers)&&(p.pushLight(x),x.castShadow&&p.pushShadow(x))}),M!==q&&M.traverseVisible(function(x){x.isLight&&x.layers.test(z.layers)&&(p.pushLight(x),x.castShadow&&p.pushShadow(x))}),p.setupLights();const Y=new Set;return M.traverse(function(x){if(!(x.isMesh||x.isPoints||x.isLine||x.isSprite))return;const U=x.material;if(U)if(Array.isArray(U))for(let W=0;W<U.length;W++){const ct=U[W];se(ct,q,x),Y.add(ct)}else se(U,q,x),Y.add(U)}),E.pop(),p=null,Y},this.compileAsync=function(M,z,q=null){const Y=this.compile(M,z,q);return new Promise(x=>{function U(){if(Y.forEach(function(W){mt.get(W).currentProgram.isReady()&&Y.delete(W)}),Y.size===0){x(M);return}setTimeout(U,10)}Yt.get("KHR_parallel_shader_compile")!==null?U():setTimeout(U,10)})};let ze=null;function Je(M){ze&&ze(M)}function xs(){xn.stop()}function Ms(){xn.start()}const xn=new Uh;xn.setAnimationLoop(Je),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(M){ze=M,J.setAnimationLoop(M),M===null?xn.stop():xn.start()},J.addEventListener("sessionstart",xs),J.addEventListener("sessionend",Ms),this.render=function(M,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(z),z=J.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,z,D),p=kt.get(M,E.length),p.init(z),E.push(p),zt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),nt.setFromProjectionMatrix(zt),It=this.localClippingEnabled,dt=ut.init(this.clippingPlanes,It),g=yt.get(M,b.length),g.init(),b.push(g),J.enabled===!0&&J.isPresenting===!0){const U=S.xr.getDepthSensingMesh();U!==null&&ws(U,z,-1/0,S.sortObjects)}ws(M,z,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(ot,pt),$t=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,$t&&Ft.addToRenderList(g,M),this.info.render.frame++,dt===!0&&ut.beginShadows();const q=p.state.shadowsArray;wt.render(q,M,z),dt===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=g.opaque,x=g.transmissive;if(p.setupLights(),z.isArrayCamera){const U=z.cameras;if(x.length>0)for(let W=0,ct=U.length;W<ct;W++){const ht=U[W];eo(Y,x,M,ht)}$t&&Ft.render(M);for(let W=0,ct=U.length;W<ct;W++){const ht=U[W];Ln(g,M,ht,ht.viewport)}}else x.length>0&&eo(Y,x,M,z),$t&&Ft.render(M),Ln(g,M,z);D!==null&&(T.updateMultisampleRenderTarget(D),T.updateRenderTargetMipmap(D)),M.isScene===!0&&M.onAfterRender(S,M,z),ce.resetDefaultState(),w=-1,_=null,E.pop(),E.length>0?(p=E[E.length-1],dt===!0&&ut.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function ws(M,z,q,Y){if(M.visible===!1)return;if(M.layers.test(z.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(z);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||nt.intersectsSprite(M)){Y&&Wt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(zt);const W=Q.update(M),ct=M.material;ct.visible&&g.push(M,W,ct,q,Wt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||nt.intersectsObject(M))){const W=Q.update(M),ct=M.material;if(Y&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Wt.copy(M.boundingSphere.center)):(W.boundingSphere===null&&W.computeBoundingSphere(),Wt.copy(W.boundingSphere.center)),Wt.applyMatrix4(M.matrixWorld).applyMatrix4(zt)),Array.isArray(ct)){const ht=W.groups;for(let Mt=0,_t=ht.length;Mt<_t;Mt++){const Et=ht[Mt],te=ct[Et.materialIndex];te&&te.visible&&g.push(M,W,te,q,Wt.z,Et)}}else ct.visible&&g.push(M,W,ct,q,Wt.z,null)}}const U=M.children;for(let W=0,ct=U.length;W<ct;W++)ws(U[W],z,q,Y)}function Ln(M,z,q,Y){const x=M.opaque,U=M.transmissive,W=M.transparent;p.setupLightsView(q),dt===!0&&ut.setGlobalState(S.clippingPlanes,q),Y&&B.viewport(P.copy(Y)),x.length>0&&Pi(x,z,q),U.length>0&&Pi(U,z,q),W.length>0&&Pi(W,z,q),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function eo(M,z,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Ci(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?Js:Wn,minFilter:Ai,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const U=p.state.transmissionRenderTarget[Y.id],W=Y.viewport||P;U.setSize(W.z,W.w);const ct=S.getRenderTarget();S.setRenderTarget(U),S.getClearColor(Z),st=S.getClearAlpha(),st<1&&S.setClearColor(16777215,.5),S.clear(),$t&&Ft.render(q);const ht=S.toneMapping;S.toneMapping=li;const Mt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),dt===!0&&ut.setGlobalState(S.clippingPlanes,Y),Pi(M,q,Y),T.updateMultisampleRenderTarget(U),T.updateRenderTargetMipmap(U),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let _t=!1;for(let Et=0,te=z.length;Et<te;Et++){const le=z[Et],ge=le.object,qe=le.geometry,oe=le.material,Ot=le.group;if(oe.side===nn&&ge.layers.test(Y.layers)){const Pn=oe.side;oe.side=$e,oe.needsUpdate=!0,Ss(ge,q,Y,qe,oe,Ot),oe.side=Pn,oe.needsUpdate=!0,_t=!0}}_t===!0&&(T.updateMultisampleRenderTarget(U),T.updateRenderTargetMipmap(U))}S.setRenderTarget(ct),S.setClearColor(Z,st),Mt!==void 0&&(Y.viewport=Mt),S.toneMapping=ht}function Pi(M,z,q){const Y=z.isScene===!0?z.overrideMaterial:null;for(let x=0,U=M.length;x<U;x++){const W=M[x],ct=W.object,ht=W.geometry,Mt=Y===null?W.material:Y,_t=W.group;ct.layers.test(q.layers)&&Ss(ct,z,q,ht,Mt,_t)}}function Ss(M,z,q,Y,x,U){M.onBeforeRender(S,z,q,Y,x,U),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),x.onBeforeRender(S,z,q,Y,M,U),x.transparent===!0&&x.side===nn&&x.forceSinglePass===!1?(x.side=$e,x.needsUpdate=!0,S.renderBufferDirect(q,z,Y,x,M,U),x.side=hi,x.needsUpdate=!0,S.renderBufferDirect(q,z,Y,x,M,U),x.side=nn):S.renderBufferDirect(q,z,Y,x,M,U),M.onAfterRender(S,z,q,Y,x,U)}function di(M,z,q){z.isScene!==!0&&(z=ie);const Y=mt.get(M),x=p.state.lights,U=p.state.shadowsArray,W=x.state.version,ct=Ct.getParameters(M,x.state,U,z,q),ht=Ct.getProgramCacheKey(ct);let Mt=Y.programs;Y.environment=M.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(M.isMeshStandardMaterial?G:y).get(M.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&M.envMap===null?z.environmentRotation:M.envMapRotation,Mt===void 0&&(M.addEventListener("dispose",Ht),Mt=new Map,Y.programs=Mt);let _t=Mt.get(ht);if(_t!==void 0){if(Y.currentProgram===_t&&Y.lightsStateVersion===W)return Di(M,ct),_t}else ct.uniforms=Ct.getUniforms(M),M.onBeforeCompile(ct,S),_t=Ct.acquireProgram(ct,ht),Mt.set(ht,_t),Y.uniforms=ct.uniforms;const Et=Y.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Et.clippingPlanes=ut.uniform),Di(M,ct),Y.needsLights=io(M),Y.lightsStateVersion=W,Y.needsLights&&(Et.ambientLightColor.value=x.state.ambient,Et.lightProbe.value=x.state.probe,Et.directionalLights.value=x.state.directional,Et.directionalLightShadows.value=x.state.directionalShadow,Et.spotLights.value=x.state.spot,Et.spotLightShadows.value=x.state.spotShadow,Et.rectAreaLights.value=x.state.rectArea,Et.ltc_1.value=x.state.rectAreaLTC1,Et.ltc_2.value=x.state.rectAreaLTC2,Et.pointLights.value=x.state.point,Et.pointLightShadows.value=x.state.pointShadow,Et.hemisphereLights.value=x.state.hemi,Et.directionalShadowMap.value=x.state.directionalShadowMap,Et.directionalShadowMatrix.value=x.state.directionalShadowMatrix,Et.spotShadowMap.value=x.state.spotShadowMap,Et.spotLightMatrix.value=x.state.spotLightMatrix,Et.spotLightMap.value=x.state.spotLightMap,Et.pointShadowMap.value=x.state.pointShadowMap,Et.pointShadowMatrix.value=x.state.pointShadowMatrix),Y.currentProgram=_t,Y.uniformsList=null,_t}function Ii(M){if(M.uniformsList===null){const z=M.currentProgram.getUniforms();M.uniformsList=jo.seqWithValue(z.seq,M.uniforms)}return M.uniformsList}function Di(M,z){const q=mt.get(M);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function bs(M,z,q,Y,x){z.isScene!==!0&&(z=ie),T.resetTextureUnits();const U=z.fog,W=Y.isMeshStandardMaterial?z.environment:null,ct=D===null?S.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ps,ht=(Y.isMeshStandardMaterial?G:y).get(Y.envMap||W),Mt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,_t=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Et=!!q.morphAttributes.position,te=!!q.morphAttributes.normal,le=!!q.morphAttributes.color;let ge=li;Y.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ge=S.toneMapping);const qe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,oe=qe!==void 0?qe.length:0,Ot=mt.get(Y),Pn=p.state.lights;if(dt===!0&&(It===!0||M!==_)){const sn=M===_&&Y.id===w;ut.setState(Y,M,sn)}let re=!1;Y.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Pn.state.version||Ot.outputColorSpace!==ct||x.isBatchedMesh&&Ot.batching===!1||!x.isBatchedMesh&&Ot.batching===!0||x.isBatchedMesh&&Ot.batchingColor===!0&&x.colorTexture===null||x.isBatchedMesh&&Ot.batchingColor===!1&&x.colorTexture!==null||x.isInstancedMesh&&Ot.instancing===!1||!x.isInstancedMesh&&Ot.instancing===!0||x.isSkinnedMesh&&Ot.skinning===!1||!x.isSkinnedMesh&&Ot.skinning===!0||x.isInstancedMesh&&Ot.instancingColor===!0&&x.instanceColor===null||x.isInstancedMesh&&Ot.instancingColor===!1&&x.instanceColor!==null||x.isInstancedMesh&&Ot.instancingMorph===!0&&x.morphTexture===null||x.isInstancedMesh&&Ot.instancingMorph===!1&&x.morphTexture!==null||Ot.envMap!==ht||Y.fog===!0&&Ot.fog!==U||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==ut.numPlanes||Ot.numIntersection!==ut.numIntersection)||Ot.vertexAlphas!==Mt||Ot.vertexTangents!==_t||Ot.morphTargets!==Et||Ot.morphNormals!==te||Ot.morphColors!==le||Ot.toneMapping!==ge||Ot.morphTargetsCount!==oe)&&(re=!0):(re=!0,Ot.__version=Y.version);let ln=Ot.currentProgram;re===!0&&(ln=di(Y,z,x));let Ui=!1,Qe=!1,Ts=!1;const ve=ln.getUniforms(),Mn=Ot.uniforms;if(B.useProgram(ln.program)&&(Ui=!0,Qe=!0,Ts=!0),Y.id!==w&&(w=Y.id,Qe=!0),Ui||_!==M){B.buffers.depth.getReversed()?(ft.copy(M.projectionMatrix),rd(ft),ad(ft),ve.setValue(F,"projectionMatrix",ft)):ve.setValue(F,"projectionMatrix",M.projectionMatrix),ve.setValue(F,"viewMatrix",M.matrixWorldInverse);const qn=ve.map.cameraPosition;qn!==void 0&&qn.setValue(F,Gt.setFromMatrixPosition(M.matrixWorld)),Zt.logarithmicDepthBuffer&&ve.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ve.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),_!==M&&(_=M,Qe=!0,Ts=!0)}if(x.isSkinnedMesh){ve.setOptional(F,x,"bindMatrix"),ve.setOptional(F,x,"bindMatrixInverse");const sn=x.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),ve.setValue(F,"boneTexture",sn.boneTexture,T))}x.isBatchedMesh&&(ve.setOptional(F,x,"batchingTexture"),ve.setValue(F,"batchingTexture",x._matricesTexture,T),ve.setOptional(F,x,"batchingIdTexture"),ve.setValue(F,"batchingIdTexture",x._indirectTexture,T),ve.setOptional(F,x,"batchingColorTexture"),x._colorsTexture!==null&&ve.setValue(F,"batchingColorTexture",x._colorsTexture,T));const Es=q.morphAttributes;if((Es.position!==void 0||Es.normal!==void 0||Es.color!==void 0)&&Bt.update(x,q,ln),(Qe||Ot.receiveShadow!==x.receiveShadow)&&(Ot.receiveShadow=x.receiveShadow,ve.setValue(F,"receiveShadow",x.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Mn.envMap.value=ht,Mn.flipEnvMap.value=ht.isCubeTexture&&ht.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&(Mn.envMapIntensity.value=z.environmentIntensity),Qe&&(ve.setValue(F,"toneMappingExposure",S.toneMappingExposure),Ot.needsLights&&no(Mn,Ts),U&&Y.fog===!0&&vt.refreshFogUniforms(Mn,U),vt.refreshMaterialUniforms(Mn,Y,H,rt,p.state.transmissionRenderTarget[M.id]),jo.upload(F,Ii(Ot),Mn,T)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(jo.upload(F,Ii(Ot),Mn,T),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ve.setValue(F,"center",x.center),ve.setValue(F,"modelViewMatrix",x.modelViewMatrix),ve.setValue(F,"normalMatrix",x.normalMatrix),ve.setValue(F,"modelMatrix",x.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const sn=Y.uniformsGroups;for(let qn=0,Xn=sn.length;qn<Xn;qn++){const uc=sn[qn];O.update(uc,ln),O.bind(uc,ln)}}return ln}function no(M,z){M.ambientLightColor.needsUpdate=z,M.lightProbe.needsUpdate=z,M.directionalLights.needsUpdate=z,M.directionalLightShadows.needsUpdate=z,M.pointLights.needsUpdate=z,M.pointLightShadows.needsUpdate=z,M.spotLights.needsUpdate=z,M.spotLightShadows.needsUpdate=z,M.rectAreaLights.needsUpdate=z,M.hemisphereLights.needsUpdate=z}function io(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,z,q){mt.get(M.texture).__webglTexture=z,mt.get(M.depthTexture).__webglTexture=q;const Y=mt.get(M);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,z){const q=mt.get(M);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(M,z=0,q=0){D=M,L=z,I=q;let Y=!0,x=null,U=!1,W=!1;if(M){const ht=mt.get(M);if(ht.__useDefaultFramebuffer!==void 0)B.bindFramebuffer(F.FRAMEBUFFER,null),Y=!1;else if(ht.__webglFramebuffer===void 0)T.setupRenderTarget(M);else if(ht.__hasExternalTextures)T.rebindTextures(M,mt.get(M.texture).__webglTexture,mt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Et=M.depthTexture;if(ht.__boundDepthTexture!==Et){if(Et!==null&&mt.has(Et)&&(M.width!==Et.image.width||M.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(M)}}const Mt=M.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(W=!0);const _t=mt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(_t[z])?x=_t[z][q]:x=_t[z],U=!0):M.samples>0&&T.useMultisampledRTT(M)===!1?x=mt.get(M).__webglMultisampledFramebuffer:Array.isArray(_t)?x=_t[q]:x=_t,P.copy(M.viewport),V.copy(M.scissor),N=M.scissorTest}else P.copy(Lt).multiplyScalar(H).floor(),V.copy(Vt).multiplyScalar(H).floor(),N=Qt;if(B.bindFramebuffer(F.FRAMEBUFFER,x)&&Y&&B.drawBuffers(M,x),B.viewport(P),B.scissor(V),B.setScissorTest(N),U){const ht=mt.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+z,ht.__webglTexture,q)}else if(W){const ht=mt.get(M.texture),Mt=z||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,ht.__webglTexture,q||0,Mt)}w=-1},this.readRenderTargetPixels=function(M,z,q,Y,x,U,W){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ct=mt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&W!==void 0&&(ct=ct[W]),ct){B.bindFramebuffer(F.FRAMEBUFFER,ct);try{const ht=M.texture,Mt=ht.format,_t=ht.type;if(!Zt.textureFormatReadable(Mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Zt.textureTypeReadable(_t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=M.width-Y&&q>=0&&q<=M.height-x&&F.readPixels(z,q,Y,x,qt.convert(Mt),qt.convert(_t),U)}finally{const ht=D!==null?mt.get(D).__webglFramebuffer:null;B.bindFramebuffer(F.FRAMEBUFFER,ht)}}},this.readRenderTargetPixelsAsync=async function(M,z,q,Y,x,U,W){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ct=mt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&W!==void 0&&(ct=ct[W]),ct){const ht=M.texture,Mt=ht.format,_t=ht.type;if(!Zt.textureFormatReadable(Mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Zt.textureTypeReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=M.width-Y&&q>=0&&q<=M.height-x){B.bindFramebuffer(F.FRAMEBUFFER,ct);const Et=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Et),F.bufferData(F.PIXEL_PACK_BUFFER,U.byteLength,F.STREAM_READ),F.readPixels(z,q,Y,x,qt.convert(Mt),qt.convert(_t),0);const te=D!==null?mt.get(D).__webglFramebuffer:null;B.bindFramebuffer(F.FRAMEBUFFER,te);const le=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await od(F,le,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Et),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,U),F.deleteBuffer(Et),F.deleteSync(le),U}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,z=null,q=0){M.isTexture!==!0&&(Bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,M=arguments[1]);const Y=Math.pow(2,-q),x=Math.floor(M.image.width*Y),U=Math.floor(M.image.height*Y),W=z!==null?z.x:0,ct=z!==null?z.y:0;T.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,W,ct,x,U),B.unbindTexture()},this.copyTextureToTexture=function(M,z,q=null,Y=null,x=0){M.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,M=arguments[1],z=arguments[2],x=arguments[3]||0,q=null);let U,W,ct,ht,Mt,_t,Et,te,le;const ge=M.isCompressedTexture?M.mipmaps[x]:M.image;q!==null?(U=q.max.x-q.min.x,W=q.max.y-q.min.y,ct=q.isBox3?q.max.z-q.min.z:1,ht=q.min.x,Mt=q.min.y,_t=q.isBox3?q.min.z:0):(U=ge.width,W=ge.height,ct=ge.depth||1,ht=0,Mt=0,_t=0),Y!==null?(Et=Y.x,te=Y.y,le=Y.z):(Et=0,te=0,le=0);const qe=qt.convert(z.format),oe=qt.convert(z.type);let Ot;z.isData3DTexture?(T.setTexture3D(z,0),Ot=F.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(T.setTexture2DArray(z,0),Ot=F.TEXTURE_2D_ARRAY):(T.setTexture2D(z,0),Ot=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment);const Pn=F.getParameter(F.UNPACK_ROW_LENGTH),re=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ln=F.getParameter(F.UNPACK_SKIP_PIXELS),Ui=F.getParameter(F.UNPACK_SKIP_ROWS),Qe=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ge.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ge.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ht),F.pixelStorei(F.UNPACK_SKIP_ROWS,Mt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,_t);const Ts=M.isDataArrayTexture||M.isData3DTexture,ve=z.isDataArrayTexture||z.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const Mn=mt.get(M),Es=mt.get(z),sn=mt.get(Mn.__renderTarget),qn=mt.get(Es.__renderTarget);B.bindFramebuffer(F.READ_FRAMEBUFFER,sn.__webglFramebuffer),B.bindFramebuffer(F.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Xn=0;Xn<ct;Xn++)Ts&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,mt.get(M).__webglTexture,x,_t+Xn),M.isDepthTexture?(ve&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,mt.get(z).__webglTexture,x,le+Xn),F.blitFramebuffer(ht,Mt,U,W,Et,te,U,W,F.DEPTH_BUFFER_BIT,F.NEAREST)):ve?F.copyTexSubImage3D(Ot,x,Et,te,le+Xn,ht,Mt,U,W):F.copyTexSubImage2D(Ot,x,Et,te,le+Xn,ht,Mt,U,W);B.bindFramebuffer(F.READ_FRAMEBUFFER,null),B.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ve?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(Ot,x,Et,te,le,U,W,ct,qe,oe,ge.data):z.isCompressedArrayTexture?F.compressedTexSubImage3D(Ot,x,Et,te,le,U,W,ct,qe,ge.data):F.texSubImage3D(Ot,x,Et,te,le,U,W,ct,qe,oe,ge):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,x,Et,te,U,W,qe,oe,ge.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,x,Et,te,ge.width,ge.height,qe,ge.data):F.texSubImage2D(F.TEXTURE_2D,x,Et,te,U,W,qe,oe,ge);F.pixelStorei(F.UNPACK_ROW_LENGTH,Pn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,re),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ln),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ui),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Qe),x===0&&z.generateMipmaps&&F.generateMipmap(Ot),B.unbindTexture()},this.copyTextureToTexture3D=function(M,z,q=null,Y=null,x=0){return M.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,M=arguments[2],z=arguments[3],x=arguments[4]||0),Bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,z,q,Y,x)},this.initRenderTarget=function(M){mt.get(M).__webglFramebuffer===void 0&&T.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?T.setTextureCube(M,0):M.isData3DTexture?T.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?T.setTexture2DArray(M,0):T.setTexture2D(M,0),B.unbindTexture()},this.resetState=function(){L=0,I=0,D=null,B.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class Xs{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ee(t),this.density=e}clone(){return new Xs(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class _g extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Bh extends Li{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const nr=new C,ir=new C,ul=new me,Ps=new Ja,Eo=new to,Fr=new C,dl=new C;class xg extends Ue{constructor(t=new Ae,e=new Bh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)nr.fromBufferAttribute(e,i-1),ir.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=nr.distanceTo(ir);t.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(i),Eo.radius+=o,t.ray.intersectsSphere(Eo)===!1)return;ul.copy(i).invert(),Ps.copy(t.ray).applyMatrix4(ul);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let v=f,g=m-1;v<g;v+=l){const p=h.getX(v),b=h.getX(v+1),E=Ao(this,t,Ps,c,p,b);E&&e.push(E)}if(this.isLineLoop){const v=h.getX(m-1),g=h.getX(f),p=Ao(this,t,Ps,c,v,g);p&&e.push(p)}}else{const f=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let v=f,g=m-1;v<g;v+=l){const p=Ao(this,t,Ps,c,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=Ao(this,t,Ps,c,m-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Ao(s,t,e,n,i,o){const r=s.geometry.attributes.position;if(nr.fromBufferAttribute(r,i),ir.fromBufferAttribute(r,o),e.distanceSqToSegment(nr,ir,Fr,dl)>n)return;Fr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Fr);if(!(c<t.near||c>t.far))return{distance:c,point:dl.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const fl=new C,pl=new C;class Mg extends xg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,o=e.count;i<o;i+=2)fl.fromBufferAttribute(e,i),pl.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+fl.distanceTo(pl);t.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sr extends Li{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ml=new me,Ba=new Ja,Ro=new to,Co=new C;class Ga extends Ue{constructor(t=new Ae,e=new sr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(i),Ro.radius+=o,t.ray.intersectsSphere(Ro)===!1)return;ml.copy(i).invert(),Ba.copy(t.ray).applyMatrix4(ml);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let m=d,v=f;m<v;m++){const g=l.getX(m);Co.fromBufferAttribute(u,g),gl(Co,g,c,i,t,e,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let m=d,v=f;m<v;m++)Co.fromBufferAttribute(u,m),gl(Co,m,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function gl(s,t,e,n,i,o,r){const a=Ba.distanceSqToPoint(s);if(a<e){const c=new C;Ba.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class _s extends Ge{constructor(t,e,n,i,o,r,a,c,l){super(t,e,n,i,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(o-1);const h=n[i],d=n[i+1]-h,f=(r-h)/d;return(i+f)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const r=this.getPoint(i),a=this.getPoint(o),c=e||(r.isVector2?new Ut:new C);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,i=[],o=[],r=[],a=new C,c=new me;for(let f=0;f<=t;f++){const m=f/t;i[f]=this.getTangentAt(m,new C)}o[0]=new C,r[0]=new C;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),r[0].crossVectors(i[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(De(i[f-1].dot(i[f]),-1,1));o[f].applyMatrix4(c.makeRotationAxis(a,m))}r[f].crossVectors(i[f],o[f])}if(e===!0){let f=Math.acos(De(o[0].dot(o[t]),-1,1));f/=t,i[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let m=1;m<=t;m++)o[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),r[m].crossVectors(i[m],o[m])}return{tangents:i,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class nc extends Rn{constructor(t=0,e=0,n=1,i=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Ut){const n=e,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(r?o=0:o=i),this.aClockwise===!0&&!r&&(o===i?o=-i:o=o-i);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class wg extends nc{constructor(t,e,n,i,o,r){super(t,e,n,n,i,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function ic(){let s=0,t=0,e=0,n=0;function i(o,r,a,c){s=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){i(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,u){let d=(r-o)/l-(a-o)/(l+h)+(a-r)/h,f=(a-r)/h-(c-r)/(h+u)+(c-a)/u;d*=h,f*=h,i(r,a,d,f)},calc:function(o){const r=o*o,a=r*o;return s+t*o+e*r+n*a}}}const Lo=new C,kr=new ic,Br=new ic,Gr=new ic;class Sg extends Rn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){const n=e,i=this.points,o=i.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%o]:(Lo.subVectors(i[0],i[1]).add(i[0]),l=Lo);const u=i[a%o],d=i[(a+1)%o];if(this.closed||a+2<o?h=i[(a+2)%o]:(Lo.subVectors(i[o-1],i[o-2]).add(i[o-1]),h=Lo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),kr.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,v,g),Br.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,v,g),Gr.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(kr.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Br.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Gr.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(kr.calc(c),Br.calc(c),Gr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vl(s,t,e,n,i){const o=(n-t)*.5,r=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*s+e}function bg(s,t){const e=1-s;return e*e*t}function Tg(s,t){return 2*(1-s)*s*t}function Eg(s,t){return s*s*t}function Ys(s,t,e,n){return bg(s,t)+Tg(s,e)+Eg(s,n)}function Ag(s,t){const e=1-s;return e*e*e*t}function Rg(s,t){const e=1-s;return 3*e*e*s*t}function Cg(s,t){return 3*(1-s)*s*s*t}function Lg(s,t){return s*s*s*t}function Ks(s,t,e,n,i){return Ag(s,t)+Rg(s,e)+Cg(s,n)+Lg(s,i)}class Gh extends Rn{constructor(t=new Ut,e=new Ut,n=new Ut,i=new Ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Ut){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Ks(t,i.x,o.x,r.x,a.x),Ks(t,i.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pg extends Rn{constructor(t=new C,e=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Ks(t,i.x,o.x,r.x,a.x),Ks(t,i.y,o.y,r.y,a.y),Ks(t,i.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Hh extends Rn{constructor(t=new Ut,e=new Ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ig extends Rn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vh extends Rn{constructor(t=new Ut,e=new Ut,n=new Ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ut){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(Ys(t,i.x,o.x,r.x),Ys(t,i.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dg extends Rn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(Ys(t,i.x,o.x,r.x),Ys(t,i.y,o.y,r.y),Ys(t,i.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wh extends Rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ut){const n=e,i=this.points,o=(i.length-1)*t,r=Math.floor(o),a=o-r,c=i[r===0?r:r-1],l=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(vl(a,c.x,l.x,h.x,u.x),vl(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Ut().fromArray(i))}return this}}var yl=Object.freeze({__proto__:null,ArcCurve:wg,CatmullRomCurve3:Sg,CubicBezierCurve:Gh,CubicBezierCurve3:Pg,EllipseCurve:nc,LineCurve:Hh,LineCurve3:Ig,QuadraticBezierCurve:Vh,QuadraticBezierCurve3:Dg,SplineCurve:Wh});class Ug extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const r=i[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const r=o[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new yl[i.type]().fromJSON(i))}return this}}class Og extends Ug{constructor(t){super(),this.type="Path",this.currentPoint=new Ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Hh(this.currentPoint.clone(),new Ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const o=new Vh(this.currentPoint.clone(),new Ut(t,e),new Ut(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,r){const a=new Gh(this.currentPoint.clone(),new Ut(t,e),new Ut(n,i),new Ut(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Wh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,o,r),this}absarc(t,e,n,i,o,r){return this.absellipse(t,e,n,n,i,o,r),this}ellipse(t,e,n,i,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,o,r,a,c),this}absellipse(t,e,n,i,o,r,a,c){const l=new nc(t,e,n,i,o,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class sc extends Ae{constructor(t=[new Ut(0,-.5),new Ut(.5,0),new Ut(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=De(i,0,Math.PI*2);const o=[],r=[],a=[],c=[],l=[],h=1/e,u=new C,d=new Ut,f=new C,m=new C,v=new C;let g=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:g=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-g,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:g=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(m)}for(let b=0;b<=e;b++){const E=n+b*h*i,S=Math.sin(E),k=Math.cos(E);for(let L=0;L<=t.length-1;L++){u.x=t[L].x*S,u.y=t[L].y,u.z=t[L].x*k,r.push(u.x,u.y,u.z),d.x=b/e,d.y=L/(t.length-1),a.push(d.x,d.y);const I=c[3*L+0]*S,D=c[3*L+1],w=c[3*L+0]*k;l.push(I,D,w)}}for(let b=0;b<e;b++)for(let E=0;E<t.length-1;E++){const S=E+b*t.length,k=S,L=S+t.length,I=S+t.length+1,D=S+1;o.push(k,L,D),o.push(I,D,L)}this.setIndex(o),this.setAttribute("position",new _e(r,3)),this.setAttribute("uv",new _e(a,2)),this.setAttribute("normal",new _e(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sc(t.points,t.segments,t.phiStart,t.phiLength)}}class oc extends sc{constructor(t=1,e=1,n=4,i=8){const o=new Og;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new oc(t.radius,t.length,t.capSegments,t.radialSegments)}}class us extends Ae{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new C,h=new Ut;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new _e(r,3)),this.setAttribute("normal",new _e(a,3)),this.setAttribute("uv",new _e(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Dt extends Ae{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),o=Math.floor(o);const h=[],u=[],d=[],f=[];let m=0;const v=[],g=n/2;let p=0;b(),r===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new _e(u,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(f,2));function b(){const S=new C,k=new C;let L=0;const I=(e-t)/n;for(let D=0;D<=o;D++){const w=[],_=D/o,P=_*(e-t)+t;for(let V=0;V<=i;V++){const N=V/i,Z=N*c+a,st=Math.sin(Z),tt=Math.cos(Z);k.x=P*st,k.y=-_*n+g,k.z=P*tt,u.push(k.x,k.y,k.z),S.set(st,I,tt).normalize(),d.push(S.x,S.y,S.z),f.push(N,1-_),w.push(m++)}v.push(w)}for(let D=0;D<i;D++)for(let w=0;w<o;w++){const _=v[w][D],P=v[w+1][D],V=v[w+1][D+1],N=v[w][D+1];(t>0||w!==0)&&(h.push(_,P,N),L+=3),(e>0||w!==o-1)&&(h.push(P,V,N),L+=3)}l.addGroup(p,L,0),p+=L}function E(S){const k=m,L=new Ut,I=new C;let D=0;const w=S===!0?t:e,_=S===!0?1:-1;for(let V=1;V<=i;V++)u.push(0,g*_,0),d.push(0,_,0),f.push(.5,.5),m++;const P=m;for(let V=0;V<=i;V++){const Z=V/i*c+a,st=Math.cos(Z),tt=Math.sin(Z);I.x=w*tt,I.y=g*_,I.z=w*st,u.push(I.x,I.y,I.z),d.push(0,_,0),L.x=st*.5+.5,L.y=tt*.5*_+.5,f.push(L.x,L.y),m++}for(let V=0;V<i;V++){const N=k+V,Z=P+V;S===!0?h.push(Z,Z+1,N):h.push(Z+1,Z,N),D+=3}l.addGroup(p,D,S===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ds extends Dt{constructor(t=1,e=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new ds(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class We extends Ae{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const h=[],u=new C,d=new C,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){const b=[],E=p/n;let S=0;p===0&&r===0?S=.5/e:p===n&&c===Math.PI&&(S=-.5/e);for(let k=0;k<=e;k++){const L=k/e;u.x=-t*Math.cos(i+L*o)*Math.sin(r+E*a),u.y=t*Math.cos(r+E*a),u.z=t*Math.sin(i+L*o)*Math.sin(r+E*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(L+S,1-E),b.push(l++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){const E=h[p][b+1],S=h[p][b],k=h[p+1][b],L=h[p+1][b+1];(p!==0||r>0)&&f.push(E,S,L),(p!==n-1||c<Math.PI)&&f.push(S,k,L)}this.setIndex(f),this.setAttribute("position",new _e(m,3)),this.setAttribute("normal",new _e(v,3)),this.setAttribute("uv",new _e(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new We(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class je extends Ae{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],c=[],l=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const v=m/i*o,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(v),u.y=(t+e*Math.cos(g))*Math.sin(v),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const v=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,b=(i+1)*f+m;r.push(v,g,b),r.push(g,p,b)}this.setIndex(r),this.setAttribute("position",new _e(a,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class gt extends Li{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wh,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class rc extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Hr=new me,_l=new C,xl=new C;class qh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tc,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;_l.setFromMatrixPosition(t.matrixWorld),e.position.copy(_l),xl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xl),e.updateMatrixWorld(),Hr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ng extends qh{constructor(){super(new Ke(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ls*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(n!==e.fov||i!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=i,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class zg extends rc{constructor(t,e,n=0,i=Math.PI/3,o=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.distance=n,this.angle=i,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new Ng}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ml=new me,Is=new C,Vr=new C;class Fg extends qh{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ut(4,2),this._viewportCount=6,this._viewports=[new pe(2,1,1,1),new pe(0,1,1,1),new pe(3,1,1,1),new pe(1,1,1,1),new pe(3,0,1,1),new pe(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Is.setFromMatrixPosition(t.matrixWorld),n.position.copy(Is),Vr.copy(n.position),Vr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Vr),n.updateMatrixWorld(),i.makeTranslation(-Is.x,-Is.y,-Is.z),Ml.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ml)}}class Zs extends rc{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Fg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class kg extends rc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=wl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function wl(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wa);function ac(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),o={},r={},a=s[0].morphTargetsRelative,c=new Ae;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=s[d].attributes.position.count}c.setIndex(u)}for(const h in o){const u=Sl(o[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in r){const u=r[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<r[h].length;++v)f.push(r[h][v][d]);const m=Sl(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Sl(s){let t,e,n,i=-1,o=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new Be(r,e,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){const v=h.getComponent(d,m);a.setComponent(d+u,m,v)}}else r.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}const Tt=256;function Ze(s=Tt){const t=document.createElement("canvas");t.width=s,t.height=s;const e=t.getContext("2d");if(!e)throw new Error("2D canvas context is unavailable");return e}function K(s,t){return s+Math.random()*(t-s)}function _n(s,t){const e=s.getImageData(0,0,s.canvas.width,s.canvas.height),n=e.data;for(let i=0;i<n.length;i+=4){const o=(Math.random()-.5)*t;n[i]+=o,n[i+1]+=o,n[i+2]+=o}s.putImageData(e,0,0)}function Se(s,t,e,n,i,o,r){const a=s.canvas.width;for(let c=0;c<t;c++){const l=K(0,a),h=K(0,a),u=K(o,r),d=s.createRadialGradient(l,h,0,l,h,u);d.addColorStop(0,e.replace("ALPHA",K(n,i).toFixed(3))),d.addColorStop(1,e.replace("ALPHA","0")),s.fillStyle=d,s.fillRect(l-u,h-u,u*2,u*2)}}function Cn(s,t=1,e=1,n=!0){const i=new _s(s.canvas);return i.wrapS=$s,i.wrapT=$s,i.repeat.set(t,e),i.anisotropy=2,n&&(i.colorSpace=Ie),i}function Gg(){const s=Ze(),t=Tt*.4;s.fillStyle="#6b6558",s.fillRect(0,0,Tt,t),Se(s,50,"rgba(255,255,255,ALPHA)",.02,.06,8,44),Se(s,40,"rgba(0,0,0,ALPHA)",.06,.18,10,50);for(let i=0;i<18;i++){const o=K(2,8),r=K(40,140),a=s.createLinearGradient(0,0,0,r);a.addColorStop(0,`rgba(18,28,14,${K(.2,.5).toFixed(3)})`),a.addColorStop(1,"rgba(18,28,14,0)"),s.fillStyle=a,s.save(),s.translate(K(0,Tt),K(-10,Tt*.25)),s.fillRect(-o/2,0,o,r),s.restore()}for(let i=0;i<5;i++){const o=K(10,Tt-10),r=K(10,t-10),a=K(-.4,.4),c=K(20,60);s.strokeStyle=`rgba(40,30,22,${K(.3,.6).toFixed(2)})`,s.lineWidth=K(1,2.5);for(let l=0;l<3;l++){s.beginPath();const h=l*3-3;s.moveTo(o+h,r),s.lineTo(o+h+Math.cos(a)*c,r+Math.sin(a)*c),s.stroke()}}for(let i=0;i<8;i++){const o=K(0,Tt),r=K(0,t),a=K(12,36),c=K(8,24);s.fillStyle=`rgba(${K(80,100).toFixed(0)},${K(75,95).toFixed(0)},${K(60,80).toFixed(0)},${K(.12,.3).toFixed(3)})`,s.fillRect(o,r,a,c),s.strokeStyle="rgba(0,0,0,0.2)",s.lineWidth=1,s.strokeRect(o,r,a,c)}const e=12,n=16;for(let i=t;i<Tt;i+=e)for(let o=0;o<Tt;o+=n){const r=K(62,82);s.fillStyle=`rgb(${r.toFixed(0)},${(r+K(2,8)).toFixed(0)},${(r-4).toFixed(0)})`,s.fillRect(o+1,i+1,n-2,e-2),s.strokeStyle=`rgba(20,18,14,${K(.5,.8).toFixed(2)})`,s.lineWidth=1.5,s.strokeRect(o+.5,i+.5,n-1,e-1)}Se(s,35,"rgba(30,25,18,ALPHA)",.08,.25,4,16);for(let i=0;i<20;i++){const o=K(2,10),r=K(60,200),a=s.createLinearGradient(0,0,0,r);a.addColorStop(0,`rgba(12,10,8,${K(.15,.35).toFixed(3)})`),a.addColorStop(1,"rgba(12,10,8,0)"),s.fillStyle=a,s.save(),s.translate(K(0,Tt),K(-20,Tt*.3)),s.fillRect(-o/2,0,o,r),s.restore()}s.strokeStyle="rgba(0,0,0,0.35)",s.lineWidth=1;for(let i=0;i<12;i++){s.beginPath();let o=K(0,Tt),r=K(0,Tt);s.moveTo(o,r);for(let a=0;a<5;a++)o+=K(-22,22),r+=K(-22,22),s.lineTo(o,r);s.stroke()}return _n(s,28),Cn(s,2,2)}function Hg(){const s=Ze();s.fillStyle="#151517",s.fillRect(0,0,Tt,Tt);const t=Tt/4;for(let e=0;e<Tt;e+=t)for(let n=0;n<Tt;n+=t){const o=((n+e)/t%2===0?30:20)+K(-4,6);s.fillStyle=`rgb(${o.toFixed(0)},${o.toFixed(0)},${(o+2).toFixed(0)})`,s.fillRect(n+1,e+1,t-2,t-2),s.strokeStyle="rgba(0,0,0,0.75)",s.lineWidth=2,s.strokeRect(n+.5,e+.5,t-1,t-1)}return Se(s,90,"rgba(0,0,0,ALPHA)",.08,.28,6,40),Se(s,30,"rgba(60,45,25,ALPHA)",.04,.12,8,34),_n(s,26),Cn(s,1,1)}function Vg(){const s=Ze();s.fillStyle="#141416",s.fillRect(0,0,Tt,Tt);const t=Tt/2;for(let e=0;e<Tt;e+=t)for(let n=0;n<Tt;n+=t)s.strokeStyle="rgba(0,0,0,0.8)",s.lineWidth=3,s.strokeRect(n+1.5,e+1.5,t-3,t-3);return Se(s,70,"rgba(40,30,18,ALPHA)",.05,.2,12,50),Se(s,40,"rgba(0,0,0,ALPHA)",.1,.3,10,44),_n(s,22),Cn(s,1,1)}function bl(){const s=Ze();s.fillStyle="#3b2f26",s.fillRect(0,0,Tt,Tt),Se(s,60,"rgba(120,60,20,ALPHA)",.06,.24,8,44),Se(s,50,"rgba(0,0,0,ALPHA)",.08,.26,6,30),s.strokeStyle="rgba(190,180,165,0.22)",s.lineWidth=1;for(let t=0;t<40;t++){const e=K(0,Tt),n=K(0,Tt);s.beginPath(),s.moveTo(e,n),s.lineTo(e+K(-40,40),n+K(-6,6)),s.stroke()}for(let t=18;t<Tt;t+=52)for(let e=14;e<Tt;e+=46)s.fillStyle="rgba(150,140,125,0.5)",s.beginPath(),s.arc(e,t,3.2,0,Math.PI*2),s.fill(),s.fillStyle="rgba(0,0,0,0.5)",s.beginPath(),s.arc(e+1,t+1,2,0,Math.PI*2),s.fill();return _n(s,22),Cn(s,1,1)}function Wg(){const s=Ze(128);s.clearRect(0,0,128,128);const t=(n,i,o,r)=>{const a=s.createRadialGradient(n,i,0,n,i,o);a.addColorStop(0,`rgba(96,4,6,${r})`),a.addColorStop(.6,`rgba(66,2,4,${r*.75})`),a.addColorStop(1,"rgba(40,0,0,0)"),s.fillStyle=a,s.fillRect(n-o,i-o,o*2,o*2)};t(64,64,42,.95);for(let n=0;n<22;n++){const i=K(0,Math.PI*2),o=K(20,58);t(64+Math.cos(i)*o,64+Math.sin(i)*o,K(3,12),K(.4,.85))}for(let n=0;n<6;n++)s.strokeStyle=`rgba(70,3,5,${K(.25,.55).toFixed(2)})`,s.lineWidth=K(2,7),s.beginPath(),s.moveTo(64,64),s.lineTo(K(0,128),K(0,128)),s.stroke();const e=new _s(s.canvas);return e.colorSpace=Ie,e}function Xh(s,t,e,n){const i=Math.min(t,e);s.clearRect(0,0,t,e),s.save(),s.globalCompositeOperation="source-over",s.globalAlpha=1,s.textAlign="center",s.textBaseline="middle",s.font='bold 84px Georgia, "Times New Roman", serif';const o=n.split(" "),r=[];let a="";for(const h of o){const u=a?`${a} ${h}`:h;s.measureText(u).width>i-60&&a?(r.push(a),a=h):a=u}a&&r.push(a);const c=96,l=i/2-(r.length-1)*c/2;for(let h=0;h<3;h++)s.fillStyle=`rgba(${94-h*8},4,6,${.5-h*.12})`,r.forEach((u,d)=>{s.fillText(u,i/2+(h-1)*2,l+d*c+(h-1)*2)});s.fillStyle="rgba(80,3,5,0.6)";for(let h=0;h<40;h++){const u=r[Math.floor(Math.random()*r.length)],d=r.indexOf(u),f=l+d*c,m=K(i*.18,i*.82),v=K(10,70);s.globalAlpha=K(.12,.4),s.fillRect(m,f+K(16,30),K(1.5,5),v)}s.globalAlpha=1,s.globalCompositeOperation="destination-out";for(let h=0;h<130;h++)s.beginPath(),s.arc(K(0,i),K(0,i),K(1,6),0,Math.PI*2),s.fill();s.restore()}function qg(s){const e=Ze(512);Xh(e,512,512,s);const n=new _s(e.canvas);return n.colorSpace=Ie,n}function Xg(){const s=Ze();s.fillStyle="#726d5d",s.fillRect(0,0,Tt,Tt),Se(s,55,"rgba(70,58,36,ALPHA)",.05,.2,5,30),Se(s,30,"rgba(20,18,14,ALPHA)",.06,.22,6,34);for(let t=0;t<46;t++){const e=K(0,Tt);s.strokeStyle=`rgba(0,0,0,${K(.07,.26).toFixed(3)})`,s.lineWidth=K(1,3.4),s.beginPath(),s.moveTo(-4,e);for(let n=0;n<=Tt+4;n+=16)s.lineTo(n,e+K(-7,7));s.stroke(),s.strokeStyle=`rgba(215,208,186,${K(.04,.14).toFixed(3)})`,s.lineWidth=1,s.beginPath(),s.moveTo(-4,e-1.6);for(let n=0;n<=Tt+4;n+=16)s.lineTo(n,e-1.6+K(-7,7));s.stroke()}for(let t=0;t<12;t++){const e=K(Tt*.1,Tt*.9),n=K(Tt*.1,Tt*.9),i=K(7,30),o=s.createRadialGradient(e,n,1,e,n,i);o.addColorStop(0,`rgba(74,6,9,${K(.5,.88).toFixed(2)})`),o.addColorStop(.6,`rgba(58,4,8,${K(.2,.4).toFixed(2)})`),o.addColorStop(1,"rgba(44,3,6,0)"),s.fillStyle=o,s.beginPath(),s.arc(e,n,i,0,Math.PI*2),s.fill(),s.fillStyle=`rgba(60,4,8,${K(.25,.5).toFixed(2)})`,s.fillRect(e+K(-3,3),n,K(1.5,3),K(6,22))}return _n(s,26),Cn(s,1,1)}function Yg(){const s=Ze();s.fillStyle="#6a6e72",s.fillRect(0,0,Tt,Tt);for(let e=0;e<260;e++){s.strokeStyle=`rgba(${K(200,255).toFixed(0)},${K(205,255).toFixed(0)},255,${K(.02,.07).toFixed(3)})`,s.lineWidth=1;const n=K(0,Tt);s.beginPath(),s.moveTo(0,n),s.lineTo(Tt,n+K(-1.5,1.5)),s.stroke()}const t=26;for(let e=0;e<Tt;e+=t)s.fillStyle="rgba(20,22,24,0.42)",s.fillRect(0,e,Tt,5),s.fillStyle="rgba(232,238,244,0.16)",s.fillRect(0,e+5,Tt,3);Se(s,40,"rgba(96,54,24,ALPHA)",.08,.32,5,32);for(let e=0;e<34;e++)s.fillStyle=`rgba(40,42,44,${K(.3,.6).toFixed(2)})`,s.beginPath(),s.arc(K(6,Tt-6),K(6,Tt-6),K(1.2,2.4),0,Math.PI*2),s.fill();return _n(s,22),Cn(s,2,1)}function Kg(){const s=Ze();s.fillStyle="#b9b09a",s.fillRect(0,0,Tt,Tt),Se(s,40,"rgba(96,80,50,ALPHA)",.05,.22,5,30),s.fillStyle="rgba(52,64,74,0.75)",s.fillRect(18,16,Tt-36,16),s.fillStyle="rgba(236,232,220,0.9)",s.fillRect(24,22,96,4);for(let t=0;t<14;t++){const e=52+t*13;s.fillStyle=`rgba(34,30,24,${K(.35,.72).toFixed(2)})`;let n=20;const i=Tt-40;for(;n<i;){const o=K(8,34);if(n+o>i)break;s.fillRect(n,e,o,4),n+=o+K(5,11)}}return s.strokeStyle="rgba(120,20,20,0.55)",s.lineWidth=3,s.beginPath(),s.arc(Tt*.72,Tt*.78,34,0,Math.PI*2),s.stroke(),s.strokeStyle="rgba(78,58,34,0.3)",s.lineWidth=6,s.beginPath(),s.arc(Tt*.24,Tt*.3,26,0,Math.PI*2),s.stroke(),_n(s,20),Cn(s,1,1)}function $g(){const s=Ze();s.fillStyle="#1b1c1e",s.fillRect(0,0,Tt,Tt),Se(s,70,"rgba(0,0,0,ALPHA)",.1,.35,10,60),Se(s,40,"rgba(70,66,58,ALPHA)",.05,.16,8,40),Se(s,18,"rgba(30,26,20,ALPHA)",.08,.24,14,48),s.strokeStyle="rgba(0,0,0,0.55)";for(let t=0;t<18;t++){s.lineWidth=K(1,2.6),s.beginPath();let e=K(0,Tt),n=K(0,Tt);s.moveTo(e,n);for(let i=0;i<5;i++)e+=K(-34,34),n+=K(-34,34),s.lineTo(e,n);s.stroke()}for(let t=0;t<260;t++)s.fillStyle=`rgba(${K(60,120).toFixed(0)},${K(58,112).toFixed(0)},${K(50,100).toFixed(0)},0.35)`,s.fillRect(K(0,Tt),K(0,Tt),K(1,2.6),K(1,2.6));return _n(s,34),Cn(s,1,1)}function jg(){const s=Ze();s.fillStyle="#2c2b28",s.fillRect(0,0,Tt,Tt),Se(s,70,"rgba(0,0,0,ALPHA)",.08,.26,10,58),Se(s,50,"rgba(150,146,132,ALPHA)",.02,.08,8,44),s.strokeStyle="rgba(0,0,0,0.5)",s.lineWidth=3;for(const t of[Tt/2])s.beginPath(),s.moveTo(0,t),s.lineTo(Tt,t),s.stroke();for(let t=0;t<20;t++)s.fillStyle=`rgba(18,22,16,${K(.06,.2).toFixed(3)})`,s.fillRect(K(0,Tt),Tt-K(20,90),K(4,16),K(20,90));for(let t=0;t<16;t++)s.fillStyle=`rgba(20,16,10,${K(.08,.24).toFixed(3)})`,s.fillRect(K(0,Tt),0,K(2,9),K(30,150));return _n(s,26),Cn(s,1,1)}function Tl(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d");if(!n)throw new Error("2D canvas context is unavailable");const i=n.createLinearGradient(0,0,0,512);i.addColorStop(0,"#05070f"),i.addColorStop(.45,"#0a0f1c"),i.addColorStop(.72,"#161a24"),i.addColorStop(.88,"#2a2119"),i.addColorStop(1,"#0b0a09"),n.fillStyle=i,n.fillRect(0,0,1024,512);for(let l=0;l<420;l++){const h=K(0,317.44),u=1-h/(512*.7);n.fillStyle=`rgba(220,226,255,${(K(.15,.75)*u).toFixed(3)})`;const d=K(.7,1.9);n.fillRect(K(0,1024),h,d,d)}const o=1024*.24,r=512*.24,a=n.createRadialGradient(o,r,0,o,r,96);a.addColorStop(0,"rgba(226,232,255,0.5)"),a.addColorStop(.35,"rgba(180,196,235,0.15)"),a.addColorStop(1,"rgba(120,140,200,0)"),n.fillStyle=a,n.fillRect(o-96,r-96,192,192),n.fillStyle="#e8ecff",n.beginPath(),n.arc(o,r,26,0,Math.PI*2),n.fill(),n.fillStyle="rgba(150,160,190,0.4)";for(let l=0;l<7;l++)n.beginPath(),n.arc(o+K(-14,14),r+K(-14,14),K(2,7),0,Math.PI*2),n.fill();for(let l=0;l<90;l++){const h=K(0,1024),u=K(512*.5,512*.78),d=K(60,240);n.fillStyle=`rgba(24,26,32,${K(.05,.2).toFixed(3)})`,n.beginPath(),n.ellipse(h,u,d,K(8,26),0,0,Math.PI*2),n.fill()}const c=new _s(e);return c.colorSpace=Ie,c.mapping=Qo,c}function Zg(){const s=Ze();s.fillStyle="#241f19",s.fillRect(0,0,Tt,Tt),Se(s,80,"rgba(12,9,6,ALPHA)",.1,.34,10,60),Se(s,60,"rgba(74,62,44,ALPHA)",.04,.16,8,46);for(let t=0;t<14;t++){const e=K(0,Tt);s.fillStyle=`rgba(14,16,18,${K(.1,.26).toFixed(3)})`,s.fillRect(0,e,Tt,K(2,7))}for(let t=0;t<200;t++)s.fillStyle=`rgba(${K(40,80).toFixed(0)},${K(36,70).toFixed(0)},${K(28,56).toFixed(0)},0.4)`,s.fillRect(K(0,Tt),K(0,Tt),K(1,3),K(1,3));return _n(s,30),Cn(s,1,1)}function El(){const s=Ze(64),t=s.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,0.9)"),t.addColorStop(.35,"rgba(255,255,255,0.28)"),t.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=t,s.fillRect(0,0,64,64);const e=new _s(s.canvas);return e.colorSpace=Ie,e}function Jg(){const t=Ze(640),e=640/2,n=640*.47,i=t.createRadialGradient(e,n,10,e,n,640*.72);i.addColorStop(0,"#3a0507"),i.addColorStop(.5,"#160203"),i.addColorStop(1,"#000000"),t.fillStyle=i,t.fillRect(0,0,640,640);const o=640*.62,r=640*.46,a=t.createRadialGradient(e,n-o*.15,12,e,n,o*.72);a.addColorStop(0,"#cdc3ae"),a.addColorStop(.55,"#8d8272"),a.addColorStop(1,"#2a241f"),t.save(),t.beginPath(),t.ellipse(e,n,r/2,o/2,0,0,Math.PI*2),t.fillStyle=a,t.fill(),t.clip();for(let u=0;u<220;u++){const d=K(0,640),f=K(0,640),m=K(4,34),v=t.createRadialGradient(d,f,0,d,f,m),g=Math.random()<.6;v.addColorStop(0,g?`rgba(20,12,10,${K(.1,.4).toFixed(2)})`:`rgba(180,150,120,${K(.05,.2).toFixed(2)})`),v.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=v,t.fillRect(d-m,f-m,m*2,m*2)}for(let u=0;u<26;u++){const d=K(e-r*.45,e+r*.45),f=K(n-o*.4,n+o*.1),m=K(30,200),v=K(3,12),g=t.createLinearGradient(0,f,0,f+m);g.addColorStop(0,`rgba(120,4,8,${K(.5,.9).toFixed(2)})`),g.addColorStop(1,"rgba(70,0,4,0)"),t.fillStyle=g,t.fillRect(d,f,v,m)}for(const u of[-1,1]){const d=e+u*r*.24,f=n-o*.16,m=r*.17,v=o*.14;t.beginPath(),t.ellipse(d,f,m,v,u*.18,0,Math.PI*2),t.fillStyle="#080404",t.fill(),t.strokeStyle="rgba(130,10,10,0.85)",t.lineWidth=7,t.stroke();const g=t.createRadialGradient(d,f,1,d,f,m*.95);g.addColorStop(0,"#fff2e8"),g.addColorStop(.25,"#ff3b23"),g.addColorStop(.6,"rgba(140,0,0,0.85)"),g.addColorStop(1,"rgba(60,0,0,0)"),t.fillStyle=g,t.beginPath(),t.arc(d,f,m*.92,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(d,f,m*.18,0,Math.PI*2),t.fillStyle="#120000",t.fill(),t.strokeStyle="rgba(30,4,4,0.8)",t.lineWidth=2;for(let p=0;p<7;p++){const b=K(0,Math.PI*2);t.beginPath(),t.moveTo(d+Math.cos(b)*m,f+Math.sin(b)*v),t.lineTo(d+Math.cos(b)*m*K(1.3,2.1),f+Math.sin(b)*v*K(1.3,2.1)),t.stroke()}}const c=n+o*.2,l=r*.66;t.beginPath(),t.ellipse(e,c,l/2,o*.17,0,0,Math.PI*2),t.fillStyle="#0a0103",t.fill(),t.strokeStyle="rgba(120,12,14,0.9)",t.lineWidth=6,t.stroke();const h=11;for(let u=0;u<h;u++){const d=u/(h-1),f=e-l/2+d*l,m=Math.sin(u*2.7)*.28+1,v=o*.075*m;t.beginPath(),t.moveTo(f-l/(h*1.5),c-o*.16),t.lineTo(f+l/(h*1.5),c-o*.16),t.lineTo(f,c-o*.16+v),t.closePath(),t.fillStyle=u%3===0?"#8e8265":"#d6ccac",t.fill(),t.beginPath(),t.moveTo(f-l/(h*1.5),c+o*.16),t.lineTo(f+l/(h*1.5),c+o*.16),t.lineTo(f,c+o*.16-v*1.05),t.closePath(),t.fillStyle=u%4===0?"#7d7052":"#c9bfa0",t.fill()}t.restore(),t.strokeStyle="rgba(255,240,230,0.05)",t.lineWidth=1;for(let u=0;u<40;u++){t.beginPath();const d=K(0,640),f=K(0,640);t.moveTo(d,f),t.lineTo(d+K(-90,90),f+K(-90,90)),t.stroke()}return _n(t,30),t.canvas.toDataURL("image/png")}function Xt(s,t){return s+Math.random()*(t-s)}let Wr=null;function Qg(){return Wr||(Wr=new gt({map:Xg(),roughness:.95,metalness:.02})),Wr}let qr=null;function tv(){return qr||(qr=new gt({color:11122362,roughness:.3,metalness:.05,transparent:!0,opacity:.5})),qr}function xe(s){s.traverse(t=>{t.isMesh&&(t.castShadow=!0)})}function Al(s,t,e=s){const n=new Pt,i=new X(1.02,.06,2.12),o=new A(i,e);o.position.y=.44,n.add(o);for(const h of[-.5,.5]){const u=new A(new X(.05,.14,2.12),e);u.position.set(h,.51,0),n.add(u)}const r=new A(new X(.92,.14,2),Qg());r.position.set(Xt(-.02,.02),.56,Xt(-.02,.02)),r.rotation.z=Xt(-.015,.015),r.castShadow=!0,n.add(r);for(const[h,u]of[[-.52,-.5],[.52,-.5],[-.52,.5],[.52,.5]]){const d=new A(new X(.07,Xt(.16,.3),.09),e);d.position.set(h+Math.sign(h)*.03,.4,u+Xt(-.06,.06)),d.rotation.z=Math.sign(h)*Xt(.15,.5),n.add(d)}const a=(h,u)=>{const d=new A(new Dt(.035,.035,1,8),e);d.rotation.z=Math.PI/2,d.position.set(0,.5+u,h),n.add(d);for(let f=-2;f<=2;f++){const m=new A(new Dt(.022,.022,u,6),e);m.position.set(f*.22,.5+u/2,h),n.add(m)}};a(-1.06,.62),a(1.06,.34);const c=new A(new X(.86,.06,Xt(.4,.7)),t);c.position.set(Xt(-.05,.05),.63,Xt(.5,.75)),c.rotation.y=Xt(-.2,.2),n.add(c);const l=new A(new X(.56,.1,.3),t);l.position.set(Xt(-.08,.08),.65,-.72),l.rotation.y=Xt(-.3,.3),n.add(l);for(const[h,u]of[[-.44,-.94],[.44,-.94],[-.44,.94],[.44,.94]]){const d=new A(new Dt(.03,.03,.44,6),e);d.position.set(h,.22,u),d.rotation.z=Xt(-.06,.06),n.add(d);const f=new A(new Dt(.06,.06,.05,8),s);f.rotation.z=Math.PI/2,f.position.set(h,.055,u),n.add(f);const m=new A(new Dt(.012,.012,.26,6),s);m.position.set(h,.44,u+(u>0?-.14:.14)),m.rotation.x=Xt(-.3,.3),n.add(m)}return xe(n),n}function ev(s,t){const e=new Pt,n=new A(new X(.9,.1,2.2),s);n.position.y=.9,n.rotation.x=Xt(-.05,.05),e.add(n);const i=new A(new Dt(.08,.12,.9,8),s);i.position.y=.45,e.add(i);const o=new A(new Dt(.03,.03,1.8,6),s);o.position.set(.6,2.8,0),o.rotation.z=-.3,e.add(o);const r=new A(new X(.4,.08,.3),t);return r.position.set(.2,2.6,0),e.add(r),xe(e),e}function nv(s,t){const e=new Pt,n=new A(new X(.8,2,2.2),s);n.position.y=1,e.add(n);for(let i=0;i<3;i++){const o=new A(new X(.3,.04,.03),t);o.position.set(0,.4+i*.65,1.12),e.add(o)}return xe(e),e}function iv(s,t){const e=new Pt,n=new A(new X(1.8,.9,.7),s);n.position.y=.45,e.add(n);const i=new A(new X(.6,.04,.5),t);i.position.set(.4,.92,0),e.add(i);for(const[o,r]of[[.25,-.1],[.55,-.1],[.25,.1],[.55,.1]]){const a=new A(new Dt(.08,.08,.02,12),t);a.position.set(o,.94,r),e.add(a)}return xe(e),e}function Rl(s){const t=new Pt,e=new A(new X(1.4,2.2,.4),s);e.position.y=1.1,t.add(e);for(let n=0;n<4;n++){const i=new A(new X(1.36,.03,.38),s);i.position.set(0,.3+n*.5,0),t.add(i)}return xe(t),t}function sv(s,t){const e=new Pt,n=new A(new Dt(.25,.3,.5,8),s);n.position.y=.25,e.add(n);const i=new A(new X(.6,.1,1.6),t);i.position.set(0,.65,.1),i.rotation.x=-.2,e.add(i);const o=new A(new X(.08,.06,.5),s);return o.position.set(.35,.75,.1),e.add(o),xe(e),e}function ov(s,t){const e=new Pt,n=new A(new X(1,.3,2.1),s);n.position.y=.15,e.add(n);const i=new A(new X(.85,.08,1.9),t);i.position.y=.34,e.add(i);for(const o of[-.5,.5]){const r=new A(new X(.9,.02,.06),s);r.position.set(0,.4,o),e.add(r)}return xe(e),e}function rv(s,t){const e=new Pt,n=new A(new X(.7,.1,.8),t);n.position.set(0,.7,0),e.add(n);const i=new A(new X(.7,1,.1),t);i.position.set(0,1.2,-.4),i.rotation.x=.15,e.add(i);const o=new A(new Dt(.2,.25,.7,8),s);o.position.y=.35,e.add(o);const r=new A(new Dt(.08,.08,.15,8),s);return r.position.set(0,1.75,-.45),e.add(r),xe(e),e}function Cl(s,t){const e=new Pt,n=new A(new X(1,.08,1),s);n.position.y=.04,e.add(n);const i=new A(new Dt(.02,.02,1,6),s);i.rotation.z=Math.PI/2,i.position.set(0,2,-.5),e.add(i);const o=new A(new Ee(.9,1.6),t);return o.position.set(0,1.2,-.48),e.add(o),xe(e),e}function Po(s,t){const e=new Pt,n=new A(new X(.5,.06,.5),s);n.position.y=.55,e.add(n);const i=new A(new X(.5,.7,.06),s);i.position.set(0,.9,-.22),e.add(i);const o=new je(.28,.03,8,16);for(const r of[-.28,.28]){const a=new A(o,t);a.position.set(r,.28,-.1),a.rotation.y=Math.PI/2,e.add(a)}return xe(e),e}function Ll(s,t){const e=new Pt,n=new A(new Dt(.02,.02,2,6),s);n.position.y=1,e.add(n);const i=new A(new Dt(.2,.2,.04,8),s);i.position.y=.02,e.add(i);for(let a=0;a<4;a++){const c=a/4*Math.PI*2+.4,l=new A(new X(.05,.03,.2),s);l.position.set(Math.cos(c)*.16,.035,Math.sin(c)*.16),l.rotation.y=-c,e.add(l);const h=new A(new Dt(.035,.035,.03,8),s);h.rotation.z=Math.PI/2,h.position.set(Math.cos(c)*.26,.035,Math.sin(c)*.26),e.add(h)}for(const a of[-.07,.07]){const c=new A(new je(.06,.012,6,8,Math.PI),s);c.position.set(a,2,0),e.add(c)}const o=new A(new X(.24,Xt(.22,.34),.08),tv());o.position.set(Xt(-.05,.05),1.78,Xt(-.03,.03)),o.rotation.z=Xt(-.16,.16),e.add(o);const r=new A(new Dt(.008,.008,.9,5),s);return r.position.set(o.position.x+.04,1.25,o.position.z),r.rotation.z=Xt(-.08,.08),e.add(r),e.rotation.z=Xt(-.1,.1),e.rotation.x=Xt(-.07,.07),xe(e),e}function av(s,t){const e=new Pt,n=new A(new X(.42,.05,.3),s);n.position.set(0,.14,0),n.rotation.z=Xt(1.1,1.5),n.rotation.y=Xt(0,Math.PI),e.add(n);for(let o=0;o<4;o++){const r=Xt(0,Math.PI*2),a=Xt(.16,.44),c=new A(new X(Xt(.02,.035),.012,Xt(.14,.24)),s);c.position.set(Math.cos(r)*a,.014,Math.sin(r)*a),c.rotation.y=Xt(0,Math.PI),e.add(c)}const i=new A(new Dt(.014,.014,.11,8),t);return i.rotation.z=Math.PI/2,i.rotation.y=Xt(0,Math.PI),i.position.set(Xt(-.3,.3),.016,Xt(-.3,.3)),e.add(i),xe(e),e}function cv(s,t){const e=new Pt,n=2+Math.floor(Math.random()*3);for(let i=0;i<n;i++){const o=Xt(.028,.045),r=Xt(.1,.17),a=new Pt,c=new A(new Dt(o,o*.94,r,8),s);c.position.y=r/2,a.add(c);const l=new A(new Dt(o*.8,o*.8,.018,8),t);l.position.y=r+.009,a.add(l);const h=Math.random()<.55,u=Xt(0,Math.PI*2),d=Xt(0,.5);h?(a.rotation.z=Math.PI/2,a.rotation.y=u,a.position.set(Math.cos(u)*d,o,Math.sin(u)*d)):(a.rotation.z=Xt(-.25,.25),a.position.set(Math.cos(u)*d,0,Math.sin(u)*d)),e.add(a)}return xe(e),e}function Io(s,t){const e=new Pt,n=new A(new X(.5,.4,.06),s);n.position.y=1.5,e.add(n);const i=new A(new Ee(.44,.34),t);i.position.set(0,1.5,.035),e.add(i);const o=new A(new Dt(.03,.03,1.5,6),s);return o.position.y=.75,e.add(o),xe(e),e}function Do(s,t){const e=new Pt,n=new A(new X(1.2,.06,.7),s);n.position.y=.76,e.add(n);for(const[i,o]of[[-.55,-.3],[.55,-.3],[-.55,.3],[.55,.3]]){const r=new A(new X(.06,.76,.06),t);r.position.set(i,.38,o),e.add(r)}for(let i=0;i<3;i++){const o=new A(new Ee(.2,.28),s);o.position.set(Xt(-.3,.3),.8,Xt(-.2,.2)),o.rotation.x=-Math.PI/2,o.rotation.z=Xt(-.5,.5),e.add(o)}return xe(e),e}function Uo(s){const t=new Pt,e=new A(new X(.6,.12,.45),s);e.position.y=.85,t.add(e);const n=new A(new X(.15,.85,.15),s);n.position.y=.425,t.add(n);const i=new A(new Dt(.02,.02,.2,6),s);return i.position.set(0,1,-.15),t.add(i),xe(t),t}function zn(s){const t=new Pt,e=new A(new Dt(.18,.22,.45,10),s);return e.position.y=.225,t.add(e),xe(t),t}function Ds(s,t){const e=new Pt,n=new A(new X(.55,2,.5),s);n.position.y=1,e.add(n);const i=new A(new X(.04,.15,.03),t);return i.position.set(.22,1.2,.26),e.add(i),xe(e),e}function Pl(s,t){const e=new Pt,n=new A(new X(1.6,.35,.7),s);n.position.y=.35,e.add(n);const i=new A(new X(1.6,.5,.15),s);i.position.set(0,.75,-.28),e.add(i);for(const o of[-.75,.75]){const r=new A(new X(.15,.4,.7),s);r.position.set(o,.55,0),e.add(r)}return xe(e),e}function lv(s,t,e){const n=new Pt,i=new A(new Dt(.055,.055,.2,10),t);i.rotation.z=Math.PI/2,n.add(i);for(const r of[-1,1]){const a=new A(new Dt(.07,.07,.07,10),e);a.rotation.z=Math.PI/2,a.position.x=r*.11,n.add(a)}const o=new A(new X(.05,.1,.1),s);return o.position.y=.008,n.add(o),xe(n),n}function hv(s){const t=new Pt,e=new A(new Dt(.035,.035,.78,8),s);e.rotation.z=Math.PI/2,t.add(e);const n=new A(new je(.09,.032,6,12,Math.PI*1.2),s);n.position.set(-.39,.02,0),n.rotation.z=-.6,t.add(n);const i=new A(new X(.16,.035,.09),s);return i.position.set(.44,0,0),i.rotation.z=.22,t.add(i),xe(t),t}function Il(s,t){const e=new Pt,n=new A(new Dt(.05,.05,.17,10),s);e.add(n);const i=new A(new Dt(.022,.035,.05,8),s);i.position.y=.11,e.add(i);const o=new A(new Dt(.026,.026,.028,8),t);return o.position.y=.145,e.add(o),xe(e),e}function Dl(s,t){const e=new Pt,n=new A(new Dt(.075,.075,.24,12),s);n.rotation.z=Math.PI/2,e.add(n);const i=new A(new Dt(.079,.079,.05,12),t);i.rotation.z=Math.PI/2,e.add(i);const o=new A(new Dt(.035,.035,.03,8),t);return o.rotation.z=Math.PI/2,o.position.x=.13,e.add(o),xe(e),e}function uv(s,t,e){const n=new Pt,i=new X(e*.94,.16,.08);for(let o=0;o<5;o++){const r=new A(i,s);r.position.set(0,.45+o*.42,Xt(-.03,.03)),r.rotation.z=Xt(-.05,.05),n.add(r)}for(const o of[.7,-.7]){const r=new A(new X(e*1.02,.11,.06),t);r.position.set(0,1.35,.06),r.rotation.z=o,n.add(r)}return xe(n),n}const or=3.5,Yh=4;function ae(s,t){return s+Math.random()*(t-s)}function Kh(s){s.traverse(t=>{t.isMesh&&(t.castShadow=!0)})}function $h(s){return s.some(([t])=>t===0)}function jh(s,t){return(Math.abs(Math.floor(s)*73856093)^Math.abs(Math.floor(t)*19349663))%2===0?1:-1}function dv(s,t,e,n,i,o){const r=$h(o),a=jh(n,i)*1.55,c=or-.28,l=new A(new X(Yh,.46,.5),t);r||(l.rotation.y=Math.PI/2),l.position.set(r?n:n+a,c,r?i+a:i),s.add(l);for(const u of[-1.1,1.1]){const d=new A(new X(.16,.54,.58),e);d.position.copy(l.position),d.rotation.y=l.rotation.y,r?d.position.x+=u:d.position.z+=u,s.add(d)}const h=new A(new X(.44,.03,.34),e);h.position.set(l.position.x,c-.24,l.position.z),h.rotation.y=l.rotation.y,s.add(h)}function fv(s,t,e,n,i,o){const r=$h(o),a=-jh(n,i)*1.6,c=or-.22,l=r?n:n+a,h=r?i+a:i;for(let d=0;d<2;d++){const f=new A(new Dt(d===0?.075:.05,d===0?.075:.05,Yh,8),d===0?e:t);r?f.rotation.z=Math.PI/2:f.rotation.x=Math.PI/2,f.position.set(l,c-d*.15,h),s.add(f)}const u=new A(new X(.06,.4,.34),t);if(r||(u.rotation.y=Math.PI/2),u.position.set(l,c-.07,h),s.add(u),Math.random()<.4){const d=new A(new je(.11,.02,6,10),e);d.rotation.y=r?Math.PI/2:0,d.position.set(l+(r?0:.16),c-.05,h+(r?.16:0)),s.add(d)}}function pv(s,t,e,n){const i=e+ae(-1.3,1.3),o=n+ae(-1.3,1.3),r=ae(.5,1.1),a=or-.1-r,c=new A(new Dt(.022,.022,r+.3,5),t);c.position.set(i,or-.1-r/2,o),c.rotation.z=ae(-.22,.22),c.rotation.x=ae(-.18,.18),s.add(c);for(let l=0;l<4;l++){const h=l/4*Math.PI*2+ae(-.4,.4),u=new A(new Dt(.006,.004,ae(.1,.22),4),t);u.position.set(i+Math.cos(h)*.03,a-ae(.05,.1),o+Math.sin(h)*.03),u.rotation.z=Math.cos(h)*ae(.5,1.1),u.rotation.x=Math.sin(h)*ae(.5,1.1),s.add(u)}}function mv(s,t,e,n){const i=2+Math.floor(Math.random()*2);for(let r=0;r<i;r++){const a=new A(new Ee(ae(.24,.36),ae(.32,.45)),t);a.rotation.x=-Math.PI/2,a.rotation.z=ae(0,Math.PI*2),a.position.set(e+ae(-1.5,1.5),.012+r*.004,n+ae(-1.5,1.5)),s.add(a)}const o=new A(new X(.3,.02,.4),t);o.rotation.y=ae(0,Math.PI*2),o.position.set(e+ae(-1.4,1.4),.02,n+ae(-1.4,1.4)),s.add(o)}function Ul(s,t,e,n){const i=ae(.35,1),o=e+ae(-1.1,1.1),r=n+ae(-1.1,1.1),a=new A(new us(i,18),t);a.rotation.x=-Math.PI/2,a.position.set(o,.012,r),s.add(a);for(let c=0;c<4;c++){const l=ae(0,Math.PI*2),h=i+ae(.1,.7),u=new A(new us(ae(.05,.16),10),t);u.rotation.x=-Math.PI/2,u.position.set(o+Math.cos(l)*h,.013,r+Math.sin(l)*h),s.add(u)}}function gv(s,t,e,n,i){const o=av(t,e);o.position.set(n+ae(-1.3,1.3),0,i+ae(-1.3,1.3)),o.rotation.y=ae(0,Math.PI*2),s.add(o),Kh(o)}function vv(s,t,e,n,i){const o=cv(t,e);o.position.set(n+ae(-1.3,1.3),0,i+ae(-1.3,1.3)),o.rotation.y=ae(0,Math.PI*2),s.add(o),Kh(o)}const Zh="dark-asylum.language";function yv(){try{const e=localStorage.getItem(Zh);if(e==="uz"||e==="en"||e==="ru")return e}catch{}const t=(typeof navigator<"u"&&navigator.language||"uz").toLowerCase();return t.startsWith("ru")?"ru":t.startsWith("en")?"en":"uz"}let fs=yv();const Jh=[];function _v(){return fs}function xv(s){if(s!==fs){fs=s;try{localStorage.setItem(Zh,s)}catch{}cc(),document.documentElement.lang=s;for(const t of Jh)t(s)}}function Ol(s){Jh.push(s)}function Te(s){return s[fs]}const Mv={"loading.title":{uz:"DARK ASYLUM",en:"DARK ASYLUM",ru:"DARK ASYLUM"},"loading.subtitle":{uz:"PROTOKOL 7",en:"PROTOCOL 7",ru:"ПРОТОКОЛ 7"},"loading.text":{uz:"Yuklanmoqda...",en:"Loading...",ru:"Загрузка..."},"loading.1":{uz:"Kasalxona eshigi ochilmoqda...",en:"Opening the asylum door...",ru:"Дверь больницы открывается..."},"loading.2":{uz:"Xonalar qurilmoqda...",en:"Building the rooms...",ru:"Строятся палаты..."},"loading.3":{uz:"Ovoz tizimi yuklanmoqda...",en:"Loading the audio system...",ru:"Загружается звук..."},"loading.4":{uz:"Effektlar tayyorlanmoqda...",en:"Preparing the effects...",ru:"Готовятся эффекты..."},"loading.5":{uz:"Biror narsa uyg'onmoqda...",en:"Something is waking up...",ru:"Что-то просыпается..."},"loading.6":{uz:"Tayyor!",en:"Ready!",ru:"Готово!"},"loading.failed":{uz:"Xatolik yuz berdi! Qayta yuklang.",en:"Something went wrong. Reload the page.",ru:"Произошла ошибка. Перезагрузите страницу."},"menu.eyebrow":{uz:"QO'RSINCHLI O'YIN",en:"HORROR GAME",ru:"ХОРРОР-ИГРА"},"menu.title":{uz:"DARK ASYLUM",en:"DARK ASYLUM",ru:"DARK ASYLUM"},"menu.story":{uz:"Siz Doktor Elias Ren — Protokol 7 ni imzolagan oxirgi jarroh. 1987-yil 4-noyabrda bemorlar bir xonaga yopildi, kasalxona qulflandi va hech kim chiqmadi. Siz ertalab yolg'iz uyg'ondingiz, eshiklar bog'langan, va koridorlardagi tovushlar sizni tanigan ovozda chaqiryapti. U sizni eslaydi. U sizni kutmoqda. Uchta kalitni toping, saqlagichni ulang va darvozadan chiqib ketishdan oldin u sizni topmasin.",en:"You are Dr Elias Ren - the last surgeon to sign Protocol 7. On 4 November 1987 the patients were sealed into one room, the hospital was locked, and nobody came out. You woke alone this morning: the doors are chained and the sounds in the corridors call you in a voice you know. He remembers you. He is waiting for you. Find three keys, restore the breaker, and get through the gate before he finds you first.",ru:"Вы — доктор Элиас Рен, последний хирург, подписавший Протокол 7. 4 ноября 1987 года пациентов заперли в одной палате, больницу закрыли, и никто не вышел. Сегодня утром вы проснулись один: двери в цепях, а голоса в коридорах зовут вас знакомым голосом. Он помнит вас. Он ждёт вас. Найдите три ключа, восстановите питание и уйдите через ворота раньше, чем он найдёт вас."},"menu.start":{uz:"BOSHLASH",en:"START",ru:"НАЧАТЬ"},"menu.sensitivity":{uz:"Sezgirlilik",en:"Sensitivity",ru:"Чувствительность"},"menu.graphics":{uz:"Grafika",en:"Graphics",ru:"Графика"},"menu.sound":{uz:"Ovoz",en:"Sound",ru:"Звук"},"menu.language":{uz:"Til",en:"Language",ru:"Язык"},"menu.quality.low":{uz:"Past",en:"Low",ru:"Низкое"},"menu.quality.medium":{uz:"O'rta",en:"Medium",ru:"Среднее"},"menu.quality.high":{uz:"Yuqori",en:"High",ru:"Высокое"},"menu.bestTime":{uz:"Eng yaxshi vaqt",en:"Best time",ru:"Лучшее время"},"menu.controls":{uz:"WASD — harakat · SHIFT — yugurish · E — olish · B — shisha otish · C — egilish · F — chiroq · M — xarita",en:"WASD — move · SHIFT — run · E — take · B — throw bottle · C — crouch · F — flashlight · M — map",ru:"WASD — движение · SHIFT — бег · E — взять · B — бросить бутылку · C — присесть · F — фонарь · M — карта"},"menu.controlsTouch":{uz:"Chap barmoq — yurish · O‘ng barmoq — qarash · Tugmalar: qo‘l, egilish, chiroq, yugurish",en:"Left thumb — move · Right thumb — look · Buttons: hand, crouch, light, run",ru:"Левый палец — движение · Правый палец — обзор · Кнопки: рука, присесть, фонарь, бег"},"rotate.title":{uz:"GORIZONTAL HOLATGA O‘GIRING",en:"ROTATE TO LANDSCAPE",ru:"ПОВЕРНИТЕ УСТРОЙСТВО"},"rotate.text":{uz:"Telefonni yoniga burang — o‘yin faqat gorizontal holatda ishlaydi.",en:"Turn your phone sideways — the game only runs in landscape.",ru:"Поверните телефон набок — игра работает только горизонтально."},"hud.notes":{uz:"Qaydlar",en:"Notes",ru:"Записки"},"hud.paused":{uz:"TO'XTATILDI",en:"PAUSED",ru:"ПАУЗА"},"hud.resume":{uz:"DAVOM ETISH",en:"RESUME",ru:"ПРОДОЛЖИТЬ"},"hud.restart":{uz:"QAYTA BOSHLASH",en:"RESTART",ru:"НАЧАТЬ ЗАНОВО"},"hud.pause":{uz:"To‘xtatish",en:"Pause",ru:"Пауза"},"hud.hidden":{uz:"Yashiringan",en:"Hidden",ru:"Вы спрятались"},"hud.stamina":{uz:"Chidamlilik",en:"Stamina",ru:"Выносливость"},"hud.battery":{uz:"Fonar quvvati",en:"Flashlight battery",ru:"Заряд фонаря"},"hud.mapToggle":{uz:"Xaritani yig‘ishtirish",en:"Collapse the map",ru:"Свернуть карту"},"hud.throw":{uz:"Shisha otish",en:"Throw a bottle",ru:"Бросить бутылку"},"over.eyebrow":{uz:"O'YIN TUGADI",en:"GAME OVER",ru:"ИГРА ОКОНЧЕНА"},"over.title":{uz:"QORONG'U",en:"DARKNESS",ru:"ТЕМНОТА"},"over.retry":{uz:"QAYTA URINISH",en:"TRY AGAIN",ru:"ПОПРОБОВАТЬ СНОВА"},"over.power":{uz:"Qorong'u sizni yutdi. Saqlagichni o'rnatganingizda yorug'lik sizni qutqarardi. U bir vaqtlar sizning bemoringiz edi — endi u shifokor.",en:"The dark swallowed you. With the breaker restored, the light would have saved you. He was your patient once — now he is the doctor.",ru:"Тьма поглотила вас. Если бы вы вставили предохранитель, свет спас бы вас. Когда-то он был вашим пациентом — теперь врач он."},"over.keys":{uz:"U sizni tanidi, Ren. U doim sizni tanigan edi. Kasalxona endi ko'rinadi — va u ham sizni ko'rdi.",en:"He recognised you, Ren. He always had. The hospital is awake now — and so is he.",ru:"Он узнал вас, Рен. Он всегда вас узнавал. Больница теперь видит — и он тоже увидел вас."},"over.escape":{uz:"Kalitlar cho'ntangizda qoldi. U eshikni yopishni biladi — u ko'p yillardan beri shu erda eshiklarni yopadi.",en:"The keys stayed in your pocket. He knows how to close a door — he has been closing them here for years.",ru:"Ключи остались у вас в кармане. Он умеет закрывать двери — он закрывает их здесь много лет."},"over.outside":{uz:"Siz tashqariga chiqdingiz — lekin darvoza hali ham qulflangan edi. Podstansiyani yondirish kerak edi. U sizni yomg'ir ostida kutdi.",en:"You made it outside — but the gate was still locked. The substation had to be powered first. He waited for you in the rain.",ru:"Вы вышли наружу — но ворота всё ещё были заперты. Сначала нужно было запустить подстанцию. Он ждал вас под дождём."},"over.stats":{uz:"Kalitlar: {keys}/{total} · Karta: {card} · Podstansiya: {power} · Qaydlar: {notes}/{notesTotal} · Xonalar: {rooms}/{roomsTotal}",en:"Keys: {keys}/{total} · Card: {card} · Substation: {power} · Notes: {notes}/{notesTotal} · Rooms: {rooms}/{roomsTotal}",ru:"Ключи: {keys}/{total} · Карта: {card} · Подстанция: {power} · Записки: {notes}/{notesTotal} · Комнаты: {rooms}/{roomsTotal}"},"win.eyebrow":{uz:"Qochdingiz",en:"You escaped",ru:"Вы сбежали"},"win.title":{uz:"OZODLIK",en:"FREEDOM",ru:"СВОБОДА"},"win.story":{uz:"Siz kasalxonadan chiqdingiz. Lekin u hali ham turibdi.",en:"You are out of the hospital. But it is still standing.",ru:"Вы вышли из больницы. Но она всё ещё стоит."},"win.replay":{uz:"QAYTA O'YNASH",en:"PLAY AGAIN",ru:"ИГРАТЬ СНОВА"},"win.time":{uz:"Vaqt: {time}",en:"Time: {time}",ru:"Время: {time}"},"win.notesAll":{uz:"Endi hammasi ma'lum: Protokol 7 ni imzolagan odam o'zi imzo edi. Siz uni yaratdingiz, va u sizni eslab qoldi. Darvoza ochiq, yomg'ir tugadi — lekin u hali ham devorlar ichida turibdi.",en:"Now it all fits: the man who signed Protocol 7 was the signature. You made him, and he remembered you. The gate is open and the rain has stopped — but he is still inside those walls.",ru:"Теперь всё сходится: человек, подписавший Протокол 7, и был подписью. Вы создали его, и он запомнил вас. Ворота открыты, дождь кончился — но он всё ещё внутри этих стен."},"win.notesMissed":{uz:"Siz {missed} ta qaydni o'qimadingiz. Haqiqat shu devorlarda qoldi.",en:"You never read {missed} of the notes. The truth stayed in those walls.",ru:"Вы не прочитали {missed} записок. Правда осталась в этих стенах."},"win.stats":{uz:"{ending} · Qaydlar: {notes}/{notesTotal} · Kartalar: {card}/1 · Podstansiya: {power} · Xonalar: {rooms}/{roomsTotal} · Eng yaxshi vaqt: {best}",en:"{ending} · Notes: {notes}/{notesTotal} · Cards: {card}/1 · Substation: {power} · Rooms: {rooms}/{roomsTotal} · Best time: {best}",ru:"{ending} · Записки: {notes}/{notesTotal} · Карты: {card}/1 · Подстанция: {power} · Комнаты: {rooms}/{roomsTotal} · Лучшее время: {best}"},"intro.skip":{uz:"INTRODAN O‘TISH ▸▸",en:"SKIP INTRO ▸▸",ru:"ПРОПУСТИТЬ ▸▸"},"intro.tapeLabel":{uz:"AUDIO TAPE #0 — DR. ARIS",en:"AUDIO TAPE #0 — DR. ARIS",ru:"АУДИОПЛЁНКА №0 — Д-Р АРИС"},"intro.narration":{uz:"1987-yil 4-noyabr. Bemor №404. Xotirani o'chirish kursi tugallandi. Bemor o'zini begunoh tergovchi deb biladi. U hali bilmaydi... u tergov qilayotgan dahshat — o'z aybi.",en:"November 4th, 1987. Subject 404. Memory ablation therapy complete. The subject believes he is an innocent investigator. He does not yet know... that the horror he investigates is his own guilt.",ru:"4 ноября 1987 года. Пациент №404. Курс стирания памяти завершён. Пациент считает себя невиновным следователем. Он ещё не знает... что ужас, который он расследует, — его собственная вина."},"intro.wall":{uz:"ESLAMANG. U SHU YERDA.",en:"DO NOT REMEMBER. HE IS HERE.",ru:"НЕ ВСПОМИНАЙ. ОН ЗДЕСЬ."},"intro.whisper":{uz:"4-noyabr... O'sha ovoz... kim gapirdi? U qaytishidan oldin chiqish yo'lini topishim kerak.",en:"November 4th... That voice... who was speaking? I must find a way out before he returns.",ru:"4 ноября... Этот голос... кто говорил? Я должен найти выход, пока он не вернулся."},"obj.power.withFuse":{uz:"Shchotga quvvat bering — saqlagich bor",en:"Power the breaker — you have the fuse",ru:"Подайте питание на щиток — предохранитель у вас"},"obj.power.noFuse":{uz:"Shchotga quvvat bering — saqlagich omborxonada",en:"Power the breaker — the fuse is in the store room",ru:"Подайте питание на щиток — предохранитель в кладовой"},"obj.keys":{uz:"Kalitlar {keys}/{total} — kasalxonani qidiring",en:"Keys {keys}/{total} — search the hospital",ru:"Ключи {keys}/{total} — обыщите больницу"},"obj.escape":{uz:"Chiqish eshigi ochilmoqda — qabulxonaga boring",en:"The exit is unlocking — get to reception",ru:"Выход открывается — идите в приёмную"},"obj.outside":{uz:"Tashqarida: karta {card} · podstansiya {power}",en:"Outside: card {card} · substation {power}",ru:"Снаружи: карта {card} · подстанция {power}"},"obj.gate":{uz:"Asosiy darvoza ochildi — shimolga yuguring!",en:"The main gate is open — run north!",ru:"Главные ворота открыты — бегите на север!"},"act.take":{uz:"{item} olish",en:"Take the {item}",ru:"Взять: {item}"},"act.readNote":{uz:"Qaydni oqish",en:"Read the note",ru:"Прочитать записку"},"act.pry":{uz:"Lom bilan ochish",en:"Pry it open with the crowbar",ru:"Вскрыть ломом"},"act.boarded":{uz:"Eshik mixlangan",en:"The door is boarded shut",ru:"Дверь заколочена"},"act.installFuse":{uz:"Saqlagichni o'rnatish",en:"Install the fuse",ru:"Вставить предохранитель"},"act.needFuse":{uz:"Saqlagich kerak",en:"A fuse is needed",ru:"Нужен предохранитель"},"msg.controlsTouch":{uz:"Joystick bilan harakatlaning — 3 ta kalitni toping!",en:"Move with the joystick — find the three keys!",ru:"Двигайтесь джойстиком — найдите три ключа!"},"msg.controlsDesktop":{uz:"Narsalarni qo'l bilan oling (E). Shchotga esa saqlagich kerak.",en:"Everything is picked up by hand (E). The breaker needs a fuse.",ru:"Предметы берутся вручную (E). Для щитка нужен предохранитель."},"msg.powerOn":{uz:"Elektr yoqildi. Kasalxona ham uyg'ondi.",en:"The power is on. So is the hospital.",ru:"Питание включено. Больница тоже проснулась."},"msg.boarded":{uz:"Eshik mixlangan. Lom kerak.",en:"The door is boarded shut. You need a crowbar.",ru:"Дверь заколочена. Нужен лом."},"msg.noFuse":{uz:"Shchotda saqlagich yo'q. Ombxonadan toping.",en:"There is no fuse in the breaker. Look in the store room.",ru:"В щитке нет предохранителя. Ищите в кладовой."},"msg.keyFound":{uz:"Kalit {keys}/{total} topildi",en:"Key {keys}/{total} found",ru:"Найден ключ {keys}/{total}"},"msg.cardFound":{uz:"Darvoza kartasi topildi",en:"The gate keycard is yours",ru:"Найдена карта от ворот"},"msg.itemTaken":{uz:"{item} olindi — {hint}",en:"{item} taken — {hint}",ru:"{item} получено — {hint}"},"msg.itemUsed":{uz:"{item}: {hint}",en:"{item}: {hint}",ru:"{item}: {hint}"},"msg.pried":{uz:"Mixlar chiqdi — dush xonasi ochildi",en:"The boards came away — the shower room is open",ru:"Доски сняты — душевая открыта"},"msg.battery":{uz:"Batareya almashtirildi",en:"Battery replaced",ru:"Батарея заменена"},"msg.glass":{uz:"Shisha sinadi — u ovozga qaradi",en:"The glass shattered — he looked at the noise",ru:"Стекло разбилось — он пошёл на звук"},"msg.allKeys":{uz:"Barcha kalitlar topildi — qabulxonaga yuguring!",en:"All keys found — run for reception!",ru:"Все ключи найдены — бегите в приёмную!"},"msg.exitUnpowered":{uz:"Eshik elektrsiz ochilmaydi — generatorni toping",en:"The door has no power — find the generator",ru:"Дверь без питания — найдите генератор"},"msg.exitLocked":{uz:"Eshik qulflangan — {left} ta kalit kerak",en:"The door is locked — {left} more keys needed",ru:"Дверь заперта — нужно ещё {left} ключа"},"msg.exitOpen":{uz:"Eshik ochildi. Hovliga chiqing — asosiy darvoza shimolda.",en:"The door is open. Head outside — the main gate is north.",ru:"Дверь открыта. Выходите во двор — главные ворота на севере."},"msg.outdoors":{uz:"Tashqarida. Yomg'ir yog'adi va osmon ochiq.",en:"Outside. It is raining and the sky is open.",ru:"Снаружи. Идёт дождь, небо открыто."},"msg.substationOn":{uz:"Podstansiya ishga tushdi — darvoza motori quvvat oldi.",en:"The substation is running — the gate motor has power.",ru:"Подстанция запущена — мотор ворот под питанием."},"msg.gateNeedsCard":{uz:"Darvoza motori ishlaydi — endi karta kerak.",en:"The gate motor runs — now it needs the card.",ru:"Мотор ворот работает — теперь нужна карта."},"msg.gateNoPower":{uz:"Darvoza motori quvvatsiz — podstansiyani yoqing",en:"The gate motor is dead — start the substation",ru:"Мотор ворот без питания — запустите подстанцию"},"msg.gateLocked":{uz:"Darvoza qulflangan — qo‘riqxonadan kartani toping",en:"The gate is locked — find the card in the guard post",ru:"Ворота заперты — найдите карту в сторожке"},"msg.gateOpen":{uz:"ASOSIY DARVOZA OCHILDI — yuguring!",en:"THE MAIN GATE IS OPEN — RUN!",ru:"ГЛАВНЫЕ ВОРОТА ОТКРЫТЫ — БЕГИТЕ!"},"msg.hurt":{uz:"Yaralandingiz — {health}%",en:"You are hurt — {health}%",ru:"Вы ранены — {health}%"},"msg.batteryDead":{uz:"Batareya tugadi — qorong'uda quvvatlanadi",en:"The battery is dead — it recharges in the dark",ru:"Батарея села — она заряжается в темноте"},"msg.noBattery":{uz:"Batareya yo'q — biroz kutib turing",en:"No battery left — wait a moment",ru:"Батареи нет — подождите немного"},"msg.note":{uz:"Qayd {notes}/{total} — {title}",en:"Note {notes}/{total} — {title}",ru:"Записка {notes}/{total} — {title}"},"floor.outside":{uz:"HOVLI",en:"GROUNDS",ru:"ДВОР"},"floor.1":{uz:"1-QAVAT",en:"FLOOR 1",ru:"1 ЭТАЖ"},"floor.2":{uz:"2-QAVAT",en:"FLOOR 2",ru:"2 ЭТАЖ"},"floor.3":{uz:"CHUQUR PODVAL",en:"DEEP BASEMENT",ru:"ГЛУБОКИЙ ПОДВАЛ"},"floor.4":{uz:"3-QAVAT",en:"FLOOR 3",ru:"3 ЭТАЖ"},"floor.1.sub":{uz:"qabulxona",en:"reception",ru:"приёмная"},"floor.2.sub":{uz:"bosh shifokor",en:"chief surgeon",ru:"главный врач"},"floor.3.sub":{uz:"laboratoriya",en:"laboratory",ru:"лаборатория"},"floor.4.sub":{uz:"izolyator",en:"isolation ward",ru:"изолятор"},"floor.outside.sub":{uz:"hovli",en:"the yard",ru:"двор"},"act.doorOpen":{uz:"Eshikni ochish",en:"Open the door",ru:"Открыть дверь"},"act.doorClose":{uz:"Eshikni yopish",en:"Close the door",ru:"Закрыть дверь"},"act.drawer":{uz:"Tortmani tortish",en:"Pull the drawer",ru:"Выдвинуть ящик"},"act.drawerKey":{uz:"Tortmani tortish — kalit bor",en:"Pull the drawer — a key is in there",ru:"Выдвинуть ящик — там ключ"},"act.drawerShut":{uz:"Tortmani yopish",en:"Push the drawer shut",ru:"Закрыть ящик"},"act.takeKey":{uz:"Kalitni olish",en:"Take the key",ru:"Взять ключ"},"act.takeLoot":{uz:"Ichidagini olish",en:"Take what is inside",ru:"Забрать содержимое"},"act.lockerEnter":{uz:"Shkafga kirib yashirinish",en:"Climb into the locker",ru:"Забраться в шкаф"},"act.lockerLeave":{uz:"Shkafdan chiqish",en:"Climb back out",ru:"Выбраться из шкафа"},"msg.drawerLoot":{uz:"Tortmada bor edi: {item}",en:"There was something in the drawer: {item}",ru:"В ящике было: {item}"},"msg.lockerIn":{uz:"Shkafda yashirindingiz — Aris sizni sezmaydi",en:"Hidden in the locker — Aris cannot see you",ru:"Вы спрятались в шкафу — Арис вас не видит"},"msg.lockerOut":{uz:"Shkafdan chiqdingiz",en:"You climbed back out",ru:"Вы выбрались из шкафа"},"lift.title":{uz:"LIFT PANELI",en:"LIFT PANEL",ru:"ПАНЕЛЬ ЛИФТА"},"lift.location":{uz:"JOYLASHUV",en:"LOCATION",ru:"МЕСТО"},"lift.enter":{uz:"Avval lift ichiga kiring",en:"Step inside the lift first",ru:"Сначала войдите в лифт"},"lift.alreadyHere":{uz:"Lift shu qavatda turibdi",en:"The lift is already on this floor",ru:"Лифт уже на этом этаже"},"lift.arrived":{uz:"Yetib keldik: {floor}",en:"Arrived at {floor}",ru:"Прибытие: {floor}"},"lift.ambush":{uz:"Eshik oldida kimdir kutib turibdi...",en:"Something is waiting at the doors...",ru:"Кто-то ждёт у дверей..."},"item.key.name":{uz:"Kalit",en:"Key",ru:"Ключ"},"item.key.hint":{uz:"Qabulxonadagi eshik uchun",en:"For the reception door",ru:"Для двери в приёмной"},"item.card.name":{uz:"Darvoza kartasi",en:"Gate keycard",ru:"Карта от ворот"},"item.card.hint":{uz:"Asosiy darvoza uchun",en:"For the main gate",ru:"Для главных ворот"},"item.fuse.name":{uz:"Saqlagich",en:"Fuse",ru:"Предохранитель"},"item.fuse.hint":{uz:"Generator shchoti uchun",en:"For the generator breaker",ru:"Для щитка генератора"},"item.crowbar.name":{uz:"Lom",en:"Crowbar",ru:"Лом"},"item.crowbar.hint":{uz:"Tiqilib qolgan eshik uchun",en:"For the door that is nailed shut",ru:"Для заколоченной двери"},"item.battery.name":{uz:"Batareya",en:"Battery",ru:"Батарея"},"item.battery.hint":{uz:"Fonarchani quvvatlaydi",en:"Recharges the flashlight",ru:"Питает фонарь"},"item.bottle.name":{uz:"Shisha",en:"Bottle",ru:"Бутылка"},"item.bottle.hint":{uz:"Ovoz chiqarish uchun otish mumkin",en:"Throw it to make a noise",ru:"Бросьте, чтобы создать шум"},"item.acid.name":{uz:"Kislota",en:"Acid",ru:"Кислота"},"item.acid.hint":{uz:"Metallni eritadi",en:"Dissolves metal",ru:"Растворяет металл"},"item.ignition.name":{uz:"Kalit (mashina)",en:"Ignition key",ru:"Ключ зажигания"},"item.ignition.hint":{uz:"Tez yordam mashinasi uchun",en:"For the ambulance",ru:"Для машины скорой помощи"},"item.boltcutters.name":{uz:"Qaychi",en:"Bolt cutters",ru:"Кусачки"},"item.boltcutters.hint":{uz:"Zanjirlarni kesish uchun",en:"Cuts chains",ru:"Перерезают цепи"},"item.uv.name":{uz:"UV chiroq",en:"UV lamp",ru:"УФ-лампа"},"item.uv.hint":{uz:"Yashirin yozuvlarni ochish",en:"Reveals hidden writing",ru:"Проявляет скрытые надписи"}},Nl=new Set;function lt(s,t){const e=Mv[s];if(!e)return Nl.has(s)||(Nl.add(s),console.warn(`[i18n] missing key: ${s}`)),s;let n=e[fs];if(t)for(const i of Object.keys(t))n=n.split(`{${i}}`).join(String(t[i]));return n}function cc(s=document){s.querySelectorAll("[data-i18n]").forEach(i=>{const o=i.dataset.i18n;if(!o)return;const r=lt(o),a=i.dataset.i18nAttr;a?i.setAttribute(a,r):i.textContent=r}),s.querySelectorAll("[data-i18n-title]").forEach(i=>{const o=i.dataset.i18nTitle;o&&i.setAttribute("title",lt(o))}),s.querySelectorAll("[data-i18n-placeholder]").forEach(i=>{const o=i.dataset.i18nPlaceholder;o&&i.setAttribute("placeholder",lt(o))}),document.documentElement.lang=fs}const zl=[{title:{uz:"Kirish jurnali — Ren",en:"Admission log — Ren",ru:"Журнал приёма — Рен"},text:{uz:"Mening ismim Doktor Elias Ren. Yigirma yil shu devorlar ichida jarrohlik qildim. Ular menga aytishdi: bu bemorlar boshqacha. Men ishonmadim. 1987-yil 4-noyabrda men Protokol 7 ni imzoladim va o'sha imzo hali ham qonayapti.",en:"My name is Dr Elias Ren. I cut into people inside these walls for twenty years. They told me these patients were different. I did not believe them. On 4 November 1987 I signed Protocol 7, and that signature is still bleeding.",ru:"Меня зовут доктор Элиас Рен. Двадцать лет я оперировал людей в этих стенах. Мне говорили, что эти пациенты другие. Я не поверил. 4 ноября 1987 года я подписал Протокол 7, и эта подпись до сих пор кровоточит."}},{title:{uz:"Ro'yxat",en:"The register",ru:"Реестр"},text:{uz:"Biz ularning ismlarini yozmadik. Faqat raqamlar: №29, №31, №37. Eng oxirgisi eng kattasi edi. Va eng jim. U meni tanigan birinchi kishi edi — va oxirgisi bo'lib qoldi.",en:"We never wrote down their names. Only numbers: No.29, No.31, No.37. The last one was the biggest. And the quietest. He was the first person to recognise me — and the last.",ru:"Мы не записывали их имена. Только номера: №29, №31, №37. Последний был самым крупным. И самым тихим. Он первым меня узнал — и последним."}},{title:{uz:"Qorong'ulik",en:"Darkness",ru:"Темнота"},text:{uz:`№31 bir kechada sochlari oqarib ketdi. U qichqirmadi. Faqat "u eshikdan chiqadi" deb takrorladi. Biz uni zanjirlab qo'ydik. Men zanjirni men tanladim — bu men tanlagan oxirgi narsa edi.`,en:'No.31 went white-haired in a single night. He did not scream. He only repeated, "he comes out of the door". We chained him. I chose the chain — it was the last thing I ever chose.',ru:"№31 поседел за одну ночь. Он не кричал. Он только повторял: «он выходит из двери». Мы заковали его. Цепь выбирал я — это было последнее, что я выбрал."}},{title:{uz:"Kuzatuv",en:"Observation",ru:"Наблюдение"},text:{uz:`№37 ni ushlab turish uchun to'rt kishi kerak bo'ldi. U bizga qaramadi. U doim devorga qaradi — go'yo u orqasidan kelayotgan narsani ko'rgan edi. Bitta kechqurun u menga qaradi va "Ren, sen ham birimiz" dedi.`,en:'It took four of us to hold No.37 down. He never looked at us. He always looked at the wall — as if he could see what was coming up behind him. One evening he looked at me and said, "Ren, you are one of us too."',ru:"Чтобы удержать №37, понадобились четверо. Он не смотрел на нас. Он всегда смотрел в стену — будто видел то, что поднимается у него за спиной. Однажды вечером он посмотрел на меня и сказал: «Рен, ты тоже один из нас»."}},{title:{uz:"Rentgen",en:"X-ray",ru:"Рентген"},text:{uz:"Suratda uning suyaklari boshqacha edi. Men o'sha plyonkani ko'rganimdan keyin ikki kun uxlamadim. Uch kundan keyin kasalxonani yopishdi. Lekin yopish hech narsani tashqarida qoldirmadi.",en:"In the film his bones were wrong. I did not sleep for two days after I looked at it. Three days later they closed the hospital. But closing it did not leave anything outside.",ru:"На снимке его кости были неправильными. После этого снимка я не спал два дня. Через три дня больницу закрыли. Но закрытие ничего не оставило снаружи."}},{title:{uz:"Yoqish",en:"The burning",ru:"Сожжение"},text:{uz:"Bosh shifokor hujjatlarni yoqib yubordi. Men ham imzo chekdim. Hammasiga men imzo chekdim. Eshiklarni men qulfladim. Va kalitni o'zim cho'ntamga qo'ydim — go'yo bu xavfsizlik edi.",en:"The chief surgeon burned the records. I signed for that too. I signed for all of it. I locked the doors. And I put the key in my own pocket — as if that were safety.",ru:"Главный врач сжёг документы. Я подписал и это. Я подписал всё. Я запер двери. И положил ключ в свой карман — будто это была безопасность."}},{title:{uz:"4-noyabr, soat 23:47",en:"4 November, 23:47",ru:"4 ноября, 23:47"},text:{uz:"O'sha kecha hech kim chiqmadi. Faqat u chiqdi. Va u chiqqanida kasalxona jim bo'lib qoldi. Men eshitdim — koridorda yurgan ovoz meni tanigan ovoz edi. U mening ismimni bilardi.",en:"Nobody came out that night. Only he did. And when he came out the hospital went quiet. I heard it — the footsteps in the corridor were footsteps that knew me. He knew my name.",ru:"В ту ночь никто не вышел. Вышел только он. И когда он вышел, больница затихла. Я услышал — шаги в коридоре знали меня. Он знал моё имя."}},{title:{uz:"Uyg'onish",en:"Waking",ru:"Пробуждение"},text:{uz:"Ertalab men o'z xonamda uyg'ondim. Deraza mixlangan. Telefon o'lik. Ko'zguda o'zimni ko'rdim — va bir soniya ko'zguda meni ko'rgan narsa men emas edim. Shu kundan boshlab bu yerdaman.",en:"In the morning I woke in my own room. The window was boarded. The telephone was dead. I looked at myself in the mirror — and for one second the thing looking back was not me. I have been here since that day.",ru:"Утром я проснулся в своей комнате. Окно заколочено. Телефон мёртв. Я взглянул на себя в зеркало — и на одну секунду то, что смотрело на меня, было не мной. С того дня я здесь."}},{title:{uz:"Qabriston",en:"The graveyard",ru:"Кладбище"},text:{uz:"Kasalxona o'liklarini shu yerga ko'mishardi. Toshda ism yo'q — faqat raqam. Eng katta qabrda raqam ham yo'q, chunki u hech qachon ko'milgan emas. Uning qabri bo'sh. U hali yuryapti.",en:"The hospital buried its dead here. There is no name on the stones — only a number. The biggest grave has no number at all, because he was never buried. His grave is empty. He is still walking.",ru:"Здесь больница хоронила своих мёртвых. На камнях нет имён — только номера. На самой большой могиле нет и номера, потому что его никогда не хоронили. Его могила пуста. Он всё ещё ходит."}},{title:{uz:"Krematoriy hisoboti",en:"Crematorium report",ru:"Отчёт крематория"},text:{uz:"Kul orasida suyak qolmaydi. Faqat tishlar qoladi. Va ularning hammasi — bir xil o'lchamda. Hammasi bir odamniki. Men o'sha tishlarni sanadim. Yetmish ikkita. Bitta ko'p.",en:"Bone does not survive the ash. Only teeth do. And every one of them is the same size. All of them belong to one person. I counted those teeth. Seventy-two. One too many.",ru:"Кости не переживают пепел. Остаются только зубы. И все они одного размера. Все принадлежат одному человеку. Я пересчитал эти зубы. Семьдесят два. На один слишком много."}},{title:{uz:"Tez yordam daftari",en:"Ambulance logbook",ru:"Журнал скорой"},text:{uz:"Men kasalxonaga qaytib kelmadim. Lekin mashina o'zi qaytdi. Eshiklari ochiq, ichida hech kim yo'q. Va u yomg'ir ichida qaytdi. Haydovchi o'rindig'ida iliq edi.",en:"I never came back to the hospital. But the ambulance did, on its own. Doors open, nobody inside. And it came back through the rain. The driver’s seat was still warm.",ru:"Я не возвращался в больницу. Но машина вернулась сама. Двери открыты, внутри никого. И она вернулась под дождём. Водительское сиденье было тёплым."}},{title:{uz:"Bosh shifokor xonasi",en:"Chief surgeon's office",ru:"Кабинет главврача"},text:{uz:"Men Protokol 7 ni imzoladim. Eshikni qulfladim. Lekin men qulflagan eshik emas — men o'zim qulflangan edim. Kalit hali ham cho'ntamda. Uni olib tashlashga kuchim yetmadi.",en:"I signed Protocol 7. I locked the door. But it was not the door I locked — it was myself. The key is still in my pocket. I have never had the strength to take it out.",ru:"Я подписал Протокол 7. Я запер дверь. Но запер я не дверь — я запер себя. Ключ всё ещё в кармане. У меня так и не хватило сил его вынуть."}},{title:{uz:"Kir yuvish xonasi",en:"The laundry",ru:"Прачечная"},text:{uz:"Kiyimlar hali ham qurimagan. Ular bugun yuvilgan. Men kasalxonada yolg'iz emasman — kimdir bu yerda hali ham ishlaydi. Va u mening xalatimni kiygan.",en:"The clothes are still damp. They were washed today. I am not alone in this hospital — someone still works here. And he is wearing my coat.",ru:"Одежда ещё влажная. Её стирали сегодня. Я не один в этой больнице — кто-то здесь всё ещё работает. И он носит мой халат."}},{title:{uz:"Bolalar palatasi",en:"Children's ward",ru:"Детское отделение"},text:{uz:"Yigirma to'qqiz, o'ttiz bir, o'ttiz yetti. Ular raqam emas edi. Ular mening xatolarim edi, va ularning hammasi bir xil ovozda chaqirardi. Ovoz menga qaragan edi — va ismimni aytdi.",en:"Twenty-nine, thirty-one, thirty-seven. They were not numbers. They were my mistakes, and all of them called out in the same voice. The voice turned towards me — and said my name.",ru:"Двадцать девять, тридцать один, тридцать семь. Это были не номера. Это были мои ошибки, и все они звали одним голосом. Голос повернулся ко мне — и назвал моё имя."}},{title:{uz:"Laboratoriya 7",en:"Laboratory 7",ru:"Лаборатория 7"},text:{uz:"Namunalar shisha ichida qimirlaydi. Ular hali ham tirik. Ular meni taniydi — va ular meni kutishadi. Men o'sha shishalarni o'zim to'ldirgandim. Men o'sha ignalarni o'zim kiritgandim.",en:"The samples move inside the glass. They are still alive. They know me — and they are waiting for me. I filled those vials myself. I pushed those needles in myself.",ru:"Образцы шевелятся в стекле. Они всё ещё живы. Они меня знают — и они меня ждут. Я сам наполнил эти пробирки. Я сам вводил эти иглы."}},{title:{uz:"Qozonxona",en:"Boiler room",ru:"Котельная"},text:{uz:"Qozonlar hali ham issiq. Kimdir o't yoqib turadi. Pastdan ovoz keladi — go'yo kimdir zinapoyani ko'tarib kelayotgandek. Va u qadam ovozi mening qadamlarim bilan bir xil.",en:"The boilers are still hot. Someone keeps the fire going. There is a sound from below — like someone carrying a staircase. And those footsteps sound exactly like mine.",ru:"Котлы всё ещё горячие. Кто-то поддерживает огонь. Снизу слышен звук — будто кто-то несёт лестницу. И эти шаги звучат точно как мои."}},{title:{uz:"O'ttiz yettinchi tortma",en:"The thirty-seventh drawer",ru:"Тридцать седьмой ящик"},text:{uz:"Morgniyning pastki qavatida o'ttiz yetti tortma bor. O'ttiz oltitasi band. Oxirgisi ochiq — va u mening o'lchamimda. Men hech qachon bu yerdan chiqmaganman. Men u yerdan hech qachon chiqmaganman.",en:"There are thirty-seven drawers in the basement morgue. Thirty-six are occupied. The last one is open — and it is my size. I have never left this place. I have never left that drawer.",ru:"В подвальном морге тридцать семь ящиков. Тридцать шесть заняты. Последний открыт — и он моего размера. Я никогда не покидал это место. Я никогда не покидал тот ящик."}},{title:{uz:"Izolyator",en:"Isolation ward",ru:"Изолятор"},text:{uz:"Uchinchi qavatdagi izolyatorda faqat bitta karavot bor va u devorga mahkamlangan. Ichkaridan tirnalgan izlar eshikning yarim bo'yidan baland emas. Demak u bola edi. Yoki u emaklagan. Yoki ikkalasi ham.",en:"The isolation ward on the third floor has a single bed, bolted to the wall. The scratches on the inside do not reach above halfway up the door. So he was a child. Or he was crawling. Or both.",ru:"В изоляторе на третьем этаже одна кровать, привинченная к стене. Царапины изнутри не поднимаются выше середины двери. Значит, он был ребёнком. Или он полз. Или и то и другое."}},{title:{uz:"Elektroterapiya jurnali",en:"Electrotherapy journal",ru:"Журнал электротерапии"},text:{uz:"№37 ga kuniga uch marta muolaja berildi. Muolaja ishlamadi — u faqat kuchaydi. Oxirgi sessiyada u kresloni uzib tashladi va qayishni o'zi bilan olib ketdi. Muolajani men bergandim. Men o'z qo'lim bilan.",en:"No.37 was treated three times a day. The treatment never worked — it only made him stronger. In the last session he tore the chair off the floor and took the strap with him. I gave those treatments. With my own hands.",ru:"№37 лечили трижды в день. Лечение не работало — он становился только сильнее. На последнем сеансе он вырвал кресло из пола и унёс ремень с собой. Эти процедуры проводил я. Своими руками."}},{title:{uz:"Tomdagi yozuv",en:"Writing on the roof",ru:"Надпись на крыше"},text:{uz:"Tomga chiqish eshigi hech qachon qulflanmagan — bu yerdan chiqish mumkin edi. Faqat men qulfni ichkaridan sindirdim, chunki u tomdan ham pastga tushardi. Endi u men bilan birga shu binoda. Va u chiqishni yopishni biladi.",en:"The roof door was never locked — you could have walked out this way. But I broke the lock from the inside, because he came down off the roof too. Now he is in this building with me. And he knows how to close an exit.",ru:"Дверь на крышу никогда не запиралась — отсюда можно было выйти. Но я сломал замок изнутри, потому что он спускался и с крыши. Теперь он в этом здании вместе со мной. И он умеет закрывать выход."}}],Fl=[{row:22,col:8,face:"north",text:{uz:"SIZ QILDINGIZ",en:"YOU DID THIS",ru:"ЭТО СДЕЛАЛИ ВЫ"}},{row:22,col:25,face:"north",text:{uz:"OZOD BO'LMADIM",en:"I WAS NEVER FREE",ru:"Я НЕ СТАЛ СВОБОДНЫМ"}},{row:30,col:8,face:"north",text:{uz:"№37",en:"No.37",ru:"№37"}},{row:30,col:16,face:"north",text:{uz:"YANA QAYTDINGMI",en:"YOU CAME BACK AGAIN",ru:"ТЫ СНОВА ВЕРНУЛСЯ"}},{row:14,col:6,face:"south",text:{uz:"CHIQISH YO'Q",en:"NO WAY OUT",ru:"ВЫХОДА НЕТ"}},{row:14,col:20,face:"south",text:{uz:"U TASHQARIDA HAM BOR",en:"HE IS OUTSIDE TOO",ru:"ОН ЕСТЬ И СНАРУЖИ"}},{row:10,col:20,face:"west",text:{uz:"KUYDI",en:"IT BURNED",ru:"СГОРЕЛО"}},{row:4,col:24,face:"east",text:{uz:"DARVOZA SIZNI KUTADI",en:"THE GATE WAITS FOR YOU",ru:"ВОРОТА ЖДУТ ВАС"}},{row:36,col:1,face:"north",text:{uz:"PROTOKOL 7",en:"PROTOCOL 7",ru:"ПРОТОКОЛ 7"}},{row:46,col:3,face:"east",text:{uz:"YIGIRMA YETTINCHI",en:"THE TWENTY-SEVENTH",ru:"ДВАДЦАТЬ СЕДЬМОЙ"}},{row:47,col:23,face:"west",text:{uz:"MENI QIDIRMANG",en:"DO NOT LOOK FOR ME",ru:"НЕ ИЩИТЕ МЕНЯ"}},{row:52,col:1,face:"north",text:{uz:"UCHINCHI QAVAT",en:"THIRD FLOOR",ru:"ТРЕТИЙ ЭТАЖ"}},{row:56,col:21,face:"south",text:{uz:"TOM YOPILGAN",en:"THE ROOF IS SHUT",ru:"КРЫША ЗАКРЫТА"}}],wv={a:{name:{uz:"QABULXONA",en:"RECEPTION",ru:"ПРИЁМНАЯ"},subtitle:{uz:"Chiqish eshigi shu yerda",en:"The exit door is here",ru:"Здесь выходная дверь"}},b:{name:{uz:"TELEFON MARKAZI",en:"SWITCHBOARD",ru:"ТЕЛЕФОННЫЙ УЗЕЛ"},subtitle:{uz:"Simlar uzilgan — faqat shitirlash eshitiladi",en:"The lines are cut — only static comes through",ru:"Провода обрезаны — слышен только треск"}},c:{name:{uz:"HAMSHIRA XONASI",en:"NURSES' STATION",ru:"ПОСТ МЕДСЕСТРЫ"},subtitle:{uz:"Kimdir hozirgina chiqib ketgan",en:"Someone just stepped out",ru:"Кто-то только что вышел"}},d:{name:{uz:"XONA 201",en:"ROOM 201",ru:"ПАЛАТА 201"},subtitle:{uz:"Karavotlar bo'sh emas",en:"The beds are not empty",ru:"Кровати не пусты"}},e:{name:{uz:"XONA 202",en:"ROOM 202",ru:"ПАЛАТА 202"},subtitle:{uz:"Devorda tirnoq izlari",en:"Scratch marks on the wall",ru:"На стене следы ногтей"}},f:{name:{uz:"OMBORXONA",en:"STORE ROOM",ru:"КЛАДОВАЯ"},subtitle:{uz:"Eshik tashqaridan qulflangan",en:"The door is locked from the outside",ru:"Дверь заперта снаружи"}},g:{name:{uz:"KUTUBXONA",en:"LIBRARY",ru:"БИБЛИОТЕКА"},subtitle:{uz:"Har bir bemorning ismi yozilgan",en:"Every patient's name is written down",ru:"Записано имя каждого пациента"}},h:{name:{uz:"OPERATSIYA XONASI",en:"OPERATING THEATRE",ru:"ОПЕРАЦИОННАЯ"},subtitle:{uz:"Qon hali qurimagan",en:"The blood has not dried yet",ru:"Кровь ещё не высохла"}},i:{name:{uz:"INTENSIV TERAPIYA",en:"INTENSIVE CARE",ru:"РЕАНИМАЦИЯ"},subtitle:{uz:"Monitorlar jim",en:"The monitors are silent",ru:"Мониторы молчат"}},j:{name:{uz:"RENTGEN XONASI",en:"X-RAY ROOM",ru:"РЕНТГЕН-КАБИНЕТ"},subtitle:{uz:"Suratlar devorga mixlangan",en:"The films are nailed to the wall",ru:"Снимки прибиты к стене"}},k:{name:{uz:"LABORATORIYA",en:"LABORATORY",ru:"ЛАБОРАТОРИЯ"},subtitle:{uz:"Namunalar hali ham sovuq",en:"The samples are still cold",ru:"Образцы всё ещё холодные"}},m:{name:{uz:"GENERATOR XONASI",en:"GENERATOR ROOM",ru:"ГЕНЕРАТОРНАЯ"},subtitle:{uz:"Elektr shu yerdan boshqariladi",en:"The power is controlled from here",ru:"Отсюда управляют электричеством"}},n:{name:{uz:"XONA 101",en:"ROOM 101",ru:"ПАЛАТА 101"},subtitle:{uz:"Kundaliklar yirtilgan",en:"The diaries are torn up",ru:"Дневники разорваны"}},o:{name:{uz:"MORGNIY",en:"MORGUE",ru:"МОРГ"},subtitle:{uz:"Bu yerda hamma narsa sovuq",en:"Everything here is cold",ru:"Здесь всё холодное"}},p:{name:{uz:"ARXIV",en:"ARCHIVE",ru:"АРХИВ"},subtitle:{uz:"Hujjatlar yoqib yuborilgan",en:"The records were burned",ru:"Документы сожжены"}},q:{name:{uz:"DUSH XONASI",en:"SHOWER ROOM",ru:"ДУШЕВАЯ"},subtitle:{uz:"Kranlardan qon oqadi",en:"Blood runs from the taps",ru:"Из кранов течёт кровь"}},r:{name:{uz:"OSHXONA",en:"KITCHEN",ru:"КУХНЯ"},subtitle:{uz:"Idishlar hali yuvilmagan",en:"The dishes are still unwashed",ru:"Посуда ещё не вымыта"}},s:{name:{uz:"XONA 102",en:"ROOM 102",ru:"ПАЛАТА 102"},subtitle:{uz:"Deraza tashqarisida hech narsa yo'q",en:"There is nothing outside the window",ru:"За окном ничего нет"}},t:{name:{uz:"PODSTANSIYA",en:"SUBSTATION",ru:"ПОДСТАНЦИЯ"},subtitle:{uz:"Asosiy darvoza quvvati shu yerdan o'tadi",en:"The main gate draws its power from here",ru:"Отсюда питаются главные ворота"}},u:{name:{uz:"DARVOZA MAYDONI",en:"GATE YARD",ru:"ПЛОЩАДКА У ВОРОТ"},subtitle:{uz:"Qochish yo'li shu yerda tugaydi",en:"The way out ends here",ru:"Здесь заканчивается путь наружу"}},v:{name:{uz:"QABRISTON",en:"GRAVEYARD",ru:"КЛАДБИЩЕ"},subtitle:{uz:"Kasalxona o'liklarini shu yerga ko'mishardi",en:"The hospital used to bury its dead here",ru:"Здесь хоронили умерших из больницы"}},w:{name:{uz:"HOVLI",en:"COURTYARD",ru:"ДВОР"},subtitle:{uz:"Kasalxona ortidagi bo'sh hovli",en:"An empty yard behind the hospital",ru:"Пустой двор за больницей"}},x:{name:{uz:"AVTOTURARGOH",en:"PARKING LOT",ru:"ПАРКОВКА"},subtitle:{uz:"Tez yordam mashinasi hali ham shu yerda",en:"The ambulance is still here",ru:"Машина скорой всё ещё здесь"}},y:{name:{uz:"QO'RIQXONA",en:"GUARD POST",ru:"СТОРОЖКА"},subtitle:{uz:"Chiroq yonib turgan edi — kim yoqqan?",en:"The light was on — who lit it?",ru:"Свет горел — кто его включил?"}},z:{name:{uz:"KREMATORIY",en:"CREMATORIUM",ru:"КРЕМАТОРИЙ"},subtitle:{uz:"Bu yerda hech narsa qolmadi",en:"Nothing is left here",ru:"Здесь ничего не осталось"}},A:{name:{uz:"BOSH SHIFOKOR XONASI",en:"CHIEF SURGEON'S OFFICE",ru:"КАБИНЕТ ГЛАВВРАЧА"},subtitle:{uz:"Protokol 7 shu yerda imzolangan",en:"Protocol 7 was signed in this room",ru:"Здесь был подписан Протокол 7"}},B:{name:{uz:"KIR YUVISH XONASI",en:"LAUNDRY",ru:"ПРАЧЕЧНАЯ"},subtitle:{uz:"Mashinada hali ham qonli kiyimlar",en:"Bloody clothes are still in the machine",ru:"В машине всё ещё окровавленная одежда"}},C:{name:{uz:"OSHXONA",en:"CANTEEN",ru:"СТОЛОВАЯ"},subtitle:{uz:"Ovqat hech qachon tarqatilmagan",en:"The food was never handed out",ru:"Еду так и не раздали"}},D:{name:{uz:"BOLALAR PALATASI",en:"CHILDREN'S WARD",ru:"ДЕТСКОЕ ОТДЕЛЕНИЕ"},subtitle:{uz:"O'yinchoqlar devor bo'ylab tizilgan",en:"The toys are lined up along the wall",ru:"Игрушки выстроены вдоль стены"}},E:{name:{uz:"KUZATUV XONASI",en:"OBSERVATION ROOM",ru:"СМОТРОВАЯ"},subtitle:{uz:"Bir tomonlama oyna — kim kimni kuzatgan?",en:"A one-way mirror — who was watching whom?",ru:"Одностороннее зеркало — кто за кем наблюдал?"}},F:{name:{uz:"IBODATXONA",en:"CHAPEL",ru:"ЧАСОВНЯ"},subtitle:{uz:"Xoch teskari osilgan",en:"The cross hangs upside down",ru:"Крест висит перевёрнутым"}},G:{name:{uz:"FIZIOTERAPIYA",en:"PHYSIOTHERAPY",ru:"ФИЗИОТЕРАПИЯ"},subtitle:{uz:"Tayanchlar hali ham shu yerda",en:"The walking frames are still here",ru:"Ходунки всё ещё здесь"}},H:{name:{uz:"STOMATOLOGIYA XONASI",en:"DENTAL SURGERY",ru:"СТОМАТОЛОГИЯ"},subtitle:{uz:"Kreslo qonli",en:"The chair is bloody",ru:"Кресло в крови"}},I:{name:{uz:"KO'Z KLINIKASI",en:"EYE CLINIC",ru:"ГЛАЗНОЙ КАБИНЕТ"},subtitle:{uz:"Ko'zoynaklar javonda qolgan",en:"Glasses left behind on the shelf",ru:"Очки остались на полке"}},J:{name:{uz:"TERAPIYA XONASI",en:"THERAPY ROOM",ru:"КАБИНЕТ ТЕРАПИИ"},subtitle:{uz:"Kundalik daftarlar yirtilgan",en:"The casebooks are torn apart",ru:"Журналы наблюдений разорваны"}},K:{name:{uz:"ANESTEZIYA XONASI",en:"ANAESTHESIA ROOM",ru:"Наркозная"},subtitle:{uz:"Gaz ballonlari bo'sh",en:"The gas cylinders are empty",ru:"Газовые баллоны пусты"}},L:{name:{uz:"OMBORXONA 2",en:"STORE ROOM 2",ru:"КЛАДОВАЯ 2"},subtitle:{uz:"Yopiq qutilar — hech kim ochmagan",en:"Sealed crates — nobody has opened them",ru:"Запечатанные ящики — их никто не открывал"}},M:{name:{uz:"QOZONXONA",en:"BOILER ROOM",ru:"КОТЕЛЬНАЯ"},subtitle:{uz:"Qozonlar hali ham issiq",en:"The boilers are still warm",ru:"Котлы всё ещё горячие"}},N:{name:{uz:"NASOS XONASI",en:"PUMP ROOM",ru:"НАСОСНАЯ"},subtitle:{uz:"Quvurlar titraydi",en:"The pipes are shaking",ru:"Трубы дрожат"}},O:{name:{uz:"TUNEL",en:"TUNNEL",ru:"ТОННЕЛЬ"},subtitle:{uz:"Bu yo'l qayerga olib boradi?",en:"Where does this lead?",ru:"Куда ведёт этот путь?"}},P:{name:{uz:"LABORATORIYA 7",en:"LABORATORY 7",ru:"ЛАБОРАТОРИЯ 7"},subtitle:{uz:"Namunalar hali ham tirik",en:"The samples are still alive",ru:"Образцы всё ещё живы"}},Q:{name:{uz:"INKUBATOR XONASI",en:"INCUBATOR ROOM",ru:"ПАЛАТА ИНКУБАТОРОВ"},subtitle:{uz:"Kichkina qo'llar shisha ortida",en:"Small hands behind the glass",ru:"Маленькие руки за стеклом"}},R:{name:{uz:"MORGNIY 2",en:"MORGUE 2",ru:"МОРГ 2"},subtitle:{uz:"O'ttiz yetti tortma — biri ochiq",en:"Thirty-seven drawers — one is open",ru:"Тридцать семь ящиков — один открыт"}},S:{name:{uz:"IZOLYATOR",en:"ISOLATION WARD",ru:"ИЗОЛЯТОР"},subtitle:{uz:"Bu xonada hech kim bir kundan ortiq qolmagan",en:"Nobody stayed in this room longer than a day",ru:"Никто не оставался в этой палате дольше суток"}},T:{name:{uz:"ELEKTROTERAPIYA",en:"ELECTROTHERAPY",ru:"ЭЛЕКТРОТЕРАПИЯ"},subtitle:{uz:"Kresloda hali ham qayish bog'langan",en:"A strap is still tied to the chair",ru:"На кресле всё ещё ремень"}},U:{name:{uz:"GIDROTERAPIYA",en:"HYDROTHERAPY",ru:"ГИДРОТЕРАПИЯ"},subtitle:{uz:"Hammomdagi suv qizil",en:"The bath water is red",ru:"Вода в ванне красная"}},V:{name:{uz:"XODIMLAR XONASI",en:"STAFF ROOM",ru:"КОМНАТА ПЕРСОНАЛА"},subtitle:{uz:"Choy hali ham iliq",en:"The tea is still warm",ru:"Чай всё ещё тёплый"}},W:{name:{uz:"KONSILIUM XONASI",en:"CONSULTATION ROOM",ru:"КОНСИЛИУМ"},subtitle:{uz:"Yig'ilish bayonnomasi oxirigacha yozilgan",en:"The minutes were written to the end",ru:"Протокол совещания дописан до конца"}},X:{name:{uz:"TOMGA CHIQISH",en:"ROOF ACCESS",ru:"ВЫХОД НА КРЫШУ"},subtitle:{uz:"Eshik ochiq — tashqarida faqat yomg'ir",en:"The door is open — only rain outside",ru:"Дверь открыта — снаружи только дождь"}}},Hs=14,bn=[{id:"b1",landingRow:44,cageRow:43,label:{uz:"B1",en:"B1",ru:"Б1"},name:{uz:"B1 PODVAL",en:"B1 BASEMENT",ru:"Б1 ПОДВАЛ"},sub:{uz:"qozonxona va morgniy",en:"boiler room and morgue",ru:"котельная и морг"}},{id:"f1",landingRow:28,cageRow:27,label:{uz:"1Q",en:"1F",ru:"1Э"},name:{uz:"1-QAVAT QABULXONA",en:"1F CLINIC LOBBY",ru:"1 ЭТАЖ ПРИЁМНАЯ"},sub:{uz:"qabulxona va dorixona",en:"reception and pharmacy",ru:"приёмная и аптека"}},{id:"f2",landingRow:34,cageRow:33,label:{uz:"2Q",en:"2F",ru:"2Э"},name:{uz:"2-QAVAT PALATALAR",en:"2F PATIENT WARDS",ru:"2 ЭТАЖ ПАЛАТЫ"},sub:{uz:"palatalar va kir yuvish",en:"wards and laundry",ru:"палаты и прачечная"}},{id:"f3",landingRow:50,cageRow:49,label:{uz:"3Q",en:"3F",ru:"3Э"},name:{uz:"3-QAVAT DIREKTOR QANOTI",en:"3F DIRECTOR WING",ru:"3 ЭТАЖ КРЫЛО ДИРЕКТОРА"},sub:{uz:"izolyator va elektroterapiya",en:"isolation and electrotherapy",ru:"изолятор и электротерапия"}},{id:"roof",landingRow:7,cageRow:6,label:{uz:"VASH",en:"ROOF",ru:"КРШ"},name:{uz:"TOM — QOCHISH DARVOZASI",en:"ROOF — ESCAPE GATE",ru:"КРЫША — ВОРОТА ПОБЕГА"},sub:{uz:"yomg'ir va qochish yo'li",en:"rain and the way out",ru:"дождь и путь наружу"}}],kl=1,Bl=.6,Xr=2.5,Gl=.7,Us=1.25,rn=3.5,we=3,Qn=3.7;function Sv(s,t,e=4){const n=bn,i=Hs*e,o=Qn/2-.06,r=[],a=[],c=new Pt;c.position.set(i,0,n[kl].cageRow*e),s.add(c);const l=new gt({color:2303018,roughness:.82,metalness:.7}),h=new A(new X(rn,.14,Qn),l);h.position.y=.07,h.receiveShadow=!0,c.add(h);const u=new A(new X(rn-.3,.02,Qn-.3),new gt({color:3816514,roughness:.5,metalness:.9}));u.position.y=.15,u.receiveShadow=!0,c.add(u);const d=new A(new X(rn,.12,Qn),new gt({color:1776672,roughness:.9,metalness:.6}));d.position.y=we,d.castShadow=!0,c.add(d);for(const B of[-1,1]){const it=Tv(t.iron,Qn,we,.55);it.position.set(B*(rn/2),we/2,0),it.rotation.y=Math.PI/2,c.add(it)}const f=new A(new X(rn,we,.12),new gt({color:1645086,roughness:.85,metalness:.7}));f.position.set(0,we/2,-Qn/2+.06),f.receiveShadow=!0,c.add(f);const m=new Dt(.1,.1,we,8);for(const B of[-1,1])for(const it of[-1,1]){const mt=new A(m,t.darkIron);mt.position.set(B*(rn/2-.06),we/2,it*(Qn/2-.06)),mt.castShadow=!0,c.add(mt)}const v=new A(new X(rn+.24,.16,Qn+.24),t.darkIron);v.position.y=we+.08,v.castShadow=!0,c.add(v);const g=new Pt;g.position.set(0,0,o),c.add(g);const p=rn/2+.05,b=we-.5,E=Hl(t.iron,t.darkIron,p,b,.42,!1);E.position.set(-rn/2,.2,0),g.add(E);const S=Hl(t.iron,t.darkIron,p,b,.42,!0);S.position.set(rn/2,.2,0),g.add(S);const k=new A(new X(rn+.14,.09,.13),t.brass);k.position.set(0,we-.28,o),c.add(k);const L=[],I=[];for(let B=0;B<2;B++){const it=B===0?-.85:.85,mt=new A(new Dt(.012,.012,.42,4),t.darkIron);mt.position.set(it,we-.3,0),c.add(mt);const T=new A(new ds(.2,.16,10,1,!0),new gt({color:2895155,roughness:.7,metalness:.75,side:nn}));T.position.set(it,we-.52,0),c.add(T);const y=new A(new We(.075,10,8),new gt({color:16770733,emissive:16761418,emissiveIntensity:1.1,roughness:.4}));y.position.set(it,we-.6,0),y.userData.bulbPhase=B*1.7,c.add(y),L.push(y);const G=new Zs(16763256,1.5,9,2);G.position.set(it,we-.64,0),c.add(G),I.push(G)}const D=new Pt;D.position.set(rn/2-.09,1.45,0),D.rotation.y=-Math.PI/2,c.add(D);const w=new A(new X(.62,1.4,.09),new gt({color:1316120,roughness:.55,metalness:.8}));w.castShadow=!0,D.add(w);const _=new A(new X(.7,1.5,.05),t.brass);_.position.z=-.035,D.add(_);for(const B of[.64,-.64]){const it=new A(new Dt(.026,.026,.06,6),t.brass);it.position.set(0,B,.06),it.rotation.x=Math.PI/2,D.add(it)}const P=No(.2,.62,(B,it)=>{Oo(B),B.fillStyle="#c9a227",B.font='bold 15px "Courier New", monospace',B.textAlign="center",B.textBaseline="middle";const mt=it.split("|");mt.forEach((T,y)=>{B.fillText(T,B.canvas.width/2,(y+.5)*(B.canvas.height/mt.length))})}),V=new A(new Ee(.16,.5),new gt({map:P.texture,transparent:!0,roughness:.5,metalness:.2,depthWrite:!1}));V.position.set(-.2,-.02,.055),D.add(V);const N=n.slice().reverse();P.text={uz:N.map(B=>B.label.uz).join("|"),en:N.map(B=>B.label.en).join("|"),ru:N.map(B=>B.label.ru).join("|")},P.repaint();const Z=No(.42,.15,(B,it)=>{Oo(B),B.fillStyle="rgba(12,12,14,0.92)",B.fillRect(0,0,B.canvas.width,B.canvas.height),B.strokeStyle="#c9a227",B.lineWidth=3,B.strokeRect(3,3,B.canvas.width-6,B.canvas.height-6),B.fillStyle="#f2d675",B.font='bold 22px "Courier New", monospace',B.textAlign="center",B.textBaseline="middle",B.fillText(it,B.canvas.width/2,B.canvas.height/2+1)}),st=new A(new Ee(.4,.14),new gt({map:Z.texture,transparent:!0,emissive:16767108,emissiveIntensity:.3,roughness:.5,depthWrite:!1}));st.position.set(.08,.52,.06),D.add(st);const tt=[],rt=.26,H=.2;n.forEach((B,it)=>{const mt=n.length-1-it,T=rt-mt*H,y=new Pt;y.position.set(.1,T,.05),D.add(y);const G=new A(new Dt(.052,.056,.03,12),t.brass);G.rotation.x=Math.PI/2,y.add(G);const $=new gt({color:2763568,roughness:.45,metalness:.6,emissive:0,emissiveIntensity:0}),et=new A(new Dt(.04,.04,.05,12),$);et.rotation.x=Math.PI/2,et.position.z=.022,et.userData.isElevatorButton=!0,et.userData.deckIndex=it,y.add(et);const Q=new gt({color:1710620,emissive:0,emissiveIntensity:0,roughness:.4}),Ct=new A(new us(.013,10),Q);Ct.position.set(.048,T,.056),D.add(Ct);const vt=No(.12,.05,(kt,ut)=>{Oo(kt),kt.fillStyle="#d9cfae",kt.font='bold 14px "Courier New", monospace',kt.textAlign="center",kt.textBaseline="middle",kt.fillText(ut,kt.canvas.width/2,kt.canvas.height/2+1)});vt.text=B.label,vt.repaint();const yt=new A(new Ee(.1,.042),new gt({map:vt.texture,transparent:!0,roughness:.6,depthWrite:!1}));yt.position.set(-.09,T,.057),D.add(yt),tt.push({deckIndex:it,node:y,cap:et,lampMat:Q})});const ot=new X(.16,we+.5,.3),pt=new X(e,.26,.36),Lt=new X(.2,.32,.11),Vt=new X(e-.2,we+.7,.12),Qt=new We(.037,8,8);n.forEach(B=>{const it=new Pt;it.position.set(i,0,B.cageRow*e+e/2-.02),s.add(it);for(const $ of[-1,1]){const et=new A(ot,t.iron);et.position.set($*(e/2-.12),(we+.5)/2,.1),et.castShadow=!0,it.add(et)}const mt=new A(pt,t.darkIron);mt.position.set(0,we+.3,.12),mt.castShadow=!0,it.add(mt);const T=No(1.6,.32,($,et)=>{Oo($),$.fillStyle="rgba(14,14,16,0.94)",$.fillRect(0,0,$.canvas.width,$.canvas.height),$.strokeStyle="#b8912e",$.lineWidth=4,$.strokeRect(4,4,$.canvas.width-8,$.canvas.height-8),$.textAlign="center",$.textBaseline="middle";const[Q,Ct]=et.split("|");$.fillStyle="#f4dc9a",$.font='bold 34px "Courier New", monospace',$.fillText(Q??"",$.canvas.width/2,$.canvas.height*.36),$.fillStyle="#bfae84",$.font='19px "Courier New", monospace',$.fillText(Ct??"",$.canvas.width/2,$.canvas.height*.72)});T.text={uz:`${B.name.uz}|${B.sub.uz}`,en:`${B.name.en}|${B.sub.en}`,ru:`${B.name.ru}|${B.sub.ru}`},T.repaint();const y=new A(new Ee(1.6,.32),new gt({map:T.texture,transparent:!0,emissive:3813138,emissiveIntensity:.75,roughness:.6,depthWrite:!1}));y.position.set(0,we+.3,.32),it.add(y);for(const $ of[-1,1]){const et=new A(Lt,t.brass);et.position.set($*(e/2-.02),1.35,.06),it.add(et);const Q=new gt({color:1315860,emissive:16726814,emissiveIntensity:3,roughness:.35}),Ct=new A(Qt,Q);Ct.position.set($*(e/2-.02),1.35,.14),it.add(Ct),a.push(Q)}const G=new A(Vt,t.rust);G.position.set(i,(we+.7)/2,(B.cageRow-.5)*e+.1),G.receiveShadow=!0,s.add(G)});let nt=kl,dt="idle",It=0,ft=0,zt=nt,Gt=!1,Wt=!1,ie=0;const $t=new C(i,1.55,n[nt].cageRow*e),he=()=>{const B=Math.max(.05,It);E.scale.x=B,S.scale.x=B};he();const F=B=>{for(const it of tt){const mt=it.deckIndex===B;it.lampMat.emissive.set(mt?16761418:0),it.lampMat.emissiveIntensity=mt?2.6:0;const T=it.cap.material;T.emissive.set(mt?7031314:0),T.emissiveIntensity=mt?.9:0}},Oe=(B,it,mt,T)=>{const y=tt.find(G=>G.deckIndex===B);y&&(y.lampMat.emissive.set(it),y.lampMat.emissiveIntensity=mt,window.setTimeout(()=>F(nt),T))},Yt=(B,it)=>{var mt;nt=B,zt=B,c.position.z=n[B].cageRow*e,$t.set(i,1.55,n[B].cageRow*e),F(B),Z.text=n[B].label,Z.repaint(),(mt=it==null?void 0:it.onTeleport)==null||mt.call(it,B)},Zt={cage:c,gate:g,panel:D,buttons:tt,plates:r,landingLamps:a,centre:$t,get deck(){return nt},get moving(){return dt!=="idle"},get powered(){return Wt},setDeck:Yt,currentDeck:()=>nt,isLocked:()=>dt!=="idle",isInside:B=>Math.abs(B.x-$t.x)<2&&Math.abs(B.z-$t.z)<2.2,startTravel(B,it){var mt;return dt!=="idle"?!1:B===nt?(Oe(B,16761418,1.6,280),!1):(zt=B,Gt=!1,ft=0,dt="closing",(mt=it.onGateClank)==null||mt.call(it),Oe(B,16747069,2.4,460),!0)},setPower(B){if(B!==Wt){Wt=B;for(const it of a)it.emissive.set(B?4652922:16726814)}},relocalize(){for(const B of r)B.repaint()},update(B,it){var mt,T,y,G,$,et,Q,Ct,vt;if(ie+=B,dt==="closing"){ft+=B,It=Math.min(1,ft/Bl),he(),ft>=Bl&&(dt="moving",ft=0,(mt=it.onMotorStart)==null||mt.call(it));return}if(dt==="moving"){ft+=B,!Gt&&ft>=Us&&(Gt=!0,Yt(zt,it),(T=it.flicker)==null||T.call(it,.08),(y=it.shake)==null||y.call(it,.34,.4));const yt=Math.max(0,1-Math.abs(ft/Xr-.5)*2);(G=it.shake)==null||G.call(it,.06+yt*.1,B*2.2);const kt=ft<Us?_c.lerp(1,.04,ft/Us):_c.lerp(.04,1,Math.min(1,(ft-Us)/.7));for(let wt=0;wt<L.length;wt++){const Ft=L[wt].material,Bt=ft<Us+.3?.3+Math.random()*.7:.88+Math.sin(ie*7+wt*1.7)*.12,Rt=kt*Bt;Ft.emissiveIntensity=.12+Rt*1.35,I[wt].intensity=.15+Rt*1.55}($=it.flicker)==null||$.call(it,.35+kt*.7);const ut=1-Math.abs(ft/Xr-.5);c.rotation.z=Math.sin(ie*2.4)*.022*ut,c.rotation.x=Math.sin(ie*1.9+.8)*.016*ut,ft>=Xr&&(dt="opening",ft=0,c.rotation.set(0,0,0),(et=it.onDing)==null||et.call(it),(Q=it.shake)==null||Q.call(it,.16,.32),(Ct=it.flicker)==null||Ct.call(it,1.1));return}if(dt==="opening"){ft+=B,It=1-Math.min(1,ft/Gl),he(),ft>=Gl&&(It=0,he(),dt="idle",(vt=it.onArrive)==null||vt.call(it,nt));return}for(let yt=0;yt<L.length;yt++){const kt=L[yt].material,ut=Math.random()<.012?.3:0,wt=Math.max(ut,.9+Math.sin(ie*2.1+yt*1.7)*.08);kt.emissiveIntensity=.12+wt*1.3,I[yt].intensity=.2+wt*1.4}c.rotation.z*=.9,c.rotation.x*=.9}};return Yt(nt),Zt}function bv(s){s.relocalize()}function Oo(s){s.clearRect(0,0,s.canvas.width,s.canvas.height)}function Tv(s,t,e,n){const i=new Pt,o=Math.max(3,Math.round(t/n));for(let a=0;a<=o;a++){const c=new A(new X(.045,e,.045),s);c.position.set((a/o-.5)*t,e/2,0),c.castShadow=!0,i.add(c)}const r=Math.max(2,Math.round(e/.55));for(let a=0;a<=r;a++){const c=new A(new X(t,.04,.04),s);c.position.set(0,a/r*e,0),i.add(c)}for(const a of[1,-1]){const c=new A(new X(Math.hypot(t,e)*.98,.03,.03),s);c.position.set(0,e/2,0),c.rotation.z=a*Math.atan2(e,t),i.add(c)}return i}function Hl(s,t,e,n,i,o){const r=new Pt,a=o?-1:1;for(const l of[.06,n]){const h=new A(new X(e,.06,.06),t);h.position.set(a*e*.5,l,0),r.add(h)}const c=Math.max(4,Math.round(e/i));for(let l=0;l<=c;l++){const h=new A(new X(.035,n-.08,.035),s);h.position.set(a*(l/c)*e,n/2,0),r.add(h)}for(let l=0;l<c;l++){const h=l/c*e,u=(l+1)/c*e,d=new A(new X(Math.hypot(u-h,n-.2)*1.02,.028,.028),s);d.position.set(a*(h+u)*.5,n/2,0),d.rotation.z=a*Math.atan2(n-.2,u-h)*(l%2===0?1:-1),r.add(d)}return r}function No(s,t,e){const n=document.createElement("canvas");n.width=Math.max(64,Math.round(s*240)),n.height=Math.max(40,Math.round(t*240));const i=n.getContext("2d"),o=new _s(n);o.anisotropy=4;const r={texture:o,text:{uz:"",en:"",ru:""},repaint:()=>{i&&(e(i,Te(r.text)),o.needsUpdate=!0)}};return r.repaint(),r}const Ev=.4;function Av(s,t,e,n){const i=s-.34,o=2.35,r=.09,a=[],c=new X(i,o,r);c.translate(i/2,o/2+.03,0),a.push(c);for(const g of[o*.34,o*.73]){const p=new X(i-.3,o*.26,r+.02);p.translate(i/2,g,0),a.push(p)}const l=new Dt(.026,.026,.17,8);l.rotateZ(Math.PI/2),l.translate(i-.15,1.02,r/2+.05),a.push(l);const h=new Dt(.055,.055,.02,10);h.rotateX(Math.PI/2),h.translate(i-.15,1.02,r/2+.005),a.push(h);const u=ac(a,!1),d=new A(u??c,t);d.castShadow=!0,d.receiveShadow=!0,d.userData.isDoorLeaf=!0;const f=new Pt;f.add(d);const m=s/2,v=new vs(new C(-m,0,-.34),new C(m,o,.34));return{row:0,col:0,vertical:n,hinge:f,leaf:d,baseYaw:0,open:0,target:0,swung:!1,box:v,centre:new C}}function Qh(s){s.traverse(t=>{t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)})}function Rv(s,t,e,n,i){const o=n/2,r=.17;s.vertical?s.hinge.position.set(t-o+r,0,e):s.hinge.position.set(t,0,e-o+r),s.baseYaw=i,s.hinge.rotation.y=i,s.centre.set(t,1.2,e),s.box.min.set(s.vertical?t-o:t-.34,0,s.vertical?e-.34:e-o),s.box.max.set(s.vertical?t+o:t+.34,2.35,s.vertical?e+.34:e+o)}function Cv(s,t){if(s.open===s.target)return!1;const n=t*2.6;return s.open<s.target?s.open=Math.min(s.target,s.open+n):s.open=Math.max(s.target,s.open-n),s.hinge.rotation.y=s.baseYaw-Math.PI/2*tu(s.open),s.open!==s.target}function Lv(s,t){const e=new Pt,n=new A(new X(1.35,.07,.74),s);n.position.y=.78,e.add(n);const i=new A(new X(1.15,.42,.64),s);i.position.set(0,.53,-.02),e.add(i);for(const[l,h]of[[-.6,-.3],[.6,-.3],[-.6,.3],[.6,.3]]){const u=new A(new X(.07,.32,.07),t);u.position.set(l,.16,h),e.add(u)}const o=new Pt,r=new A(new X(1.05,.3,.06),s);r.position.set(0,.53,.32),o.add(r);const a=new A(new X(.92,.06,.5),s);a.position.set(0,.48,.05),o.add(a);for(const l of[-1,1]){const h=new A(new X(.05,.22,.5),s);h.position.set(l*.46,.57,.05),o.add(h)}const c=new A(new X(.26,.05,.05),t);return c.position.set(0,.53,.36),o.add(c),e.add(o),Qh(e),{group:e,drawer:o,centre:new C}}function Pv(s,t){if(s.slide===s.target)return!1;const e=1/.35,n=t*e;return s.slide<s.target?s.slide=Math.min(s.target,s.slide+n):s.slide=Math.max(s.target,s.slide-n),s.drawer.position.copy(s.travel).multiplyScalar(Ev*s.slide),s.slide!==s.target}function Iv(s,t){const e=new Pt,n=.8,i=2.05,o=.6,r=.06,a=new Pt,c=new A(new X(n,i,r),s);c.position.set(0,i/2,-o/2),a.add(c);for(const m of[-1,1]){const v=new A(new X(r,i,o),s);v.position.set(m*(n/2-r/2),i/2,0),a.add(v)}for(const m of[r/2,i-r/2]){const v=new A(new X(n,r,o),s);v.position.set(0,m,0),a.add(v)}const l=new A(new X(n-r*2,.04,o-r),s);l.position.set(0,1.15,.02),a.add(l);const h=new A(new X(n-.1,.08,o-.1),t);h.position.set(0,.04,0),a.add(h),e.add(a);const u=new Pt,d=new A(new X(n-r,i-.06,.05),s);d.position.set((n-r)/2,i/2,.03),u.add(d);for(let m=0;m<3;m++){const v=new A(new X(.34,.035,.06),t);v.position.set((n-r)/2,i-.4-m*.09,.03),u.add(v)}const f=new A(new X(.05,.22,.05),t);return f.position.set(n-r-.1,i/2,.08),u.add(f),u.position.set(-n/2+r/2,0,o/2-.02),e.add(u),Qh(e),{group:e,door:u,inside:new C(0,0,-.02),outside:new C(0,0,o/2+1.1)}}function Dv(s,t){if(s.open===s.target)return!1;const n=t*3.2;return s.open<s.target?s.open=Math.min(s.target,s.open+n):s.open=Math.max(s.target,s.open-n),s.door.rotation.y=-Math.PI*.62*tu(s.open),s.open!==s.target}function tu(s){const t=Math.max(0,Math.min(1,s));return t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2}const j=4,ue=3.5,$i=.2,En=1.7,mn=["#############+##############","#..........................#","#.#######.###+####.#######.#","#.#ttttt#.#uuuuuu#.#vvvvv#.#","#.#ttttt#.#uuuuuu#.#vvvvv#.#","#.#ttttt#.#uuuuuu#.#vvvvv#.#","#.###+###.###+####.###+###.#","#..........................#","#.###+###.###+####.###+###.#","#.#yyyyy#.#xxxxxx#.#zzzzz#.#","#.#yyyyy#.#xxxxxx#.#zzzzz#.#","#.#yyyyy#.#xxxxxx#.#zzzzz#.#","#.###+###.###+####.###+###.#","#wwwwwwwwwwwwwwwwwwwwwwwwww#","#wwwwwwwwwwwwwwwwwwwwwwwwww#","##+#########################","#aaa#.#bb#cc#.#dd#ee#.#ffff#","#aaa+.+bb#cc+.+dd#ee+.+ffff#","#aaa#.#bb#cc#.#dd#ee#.#ffff#","##+##.#+##+##.#+##+##.##+###","#..........................#","##+##.#+##+##.#+##+##.##+###","#ggg#.#hh#ii#.#jj#kk#.#mmmm#","#ggg+.+hh#ii+.+jj#kk+.+mmmm#","#ggg#.#hh#ii#.#jj#kk#.#mmmm#","#ggg+.+hh#ii+.+jj#kk+.+mmmm#","#ggg#.#hh#ii#.#jj#kk#.#mmmm#","##+##.#+##+##.#+##+##.##+###","#..........................#","##+##.#+##+##.#+##+##.##+###","#nnn#.#oo#pp#.#qq#rr#.#ssss#","#nnn+.+oo#pp+.+qq#rr+.+ssss#","#nnn#.#oo#pp#.#qq#rr#.#ssss#","#####+###############+######","#..........................#","##+##.#+##+##.#+##+##.##+###","#AAA#.#BB#CC#.#DD#EE#.#FFFF#","#AAA#.#BB#CC#.#DD#EE#.#FFFF#","#AAA#.#BB#CC#.#DD#EE#.#FFFF#","##+##.#+##+##.#+##+##.##+###","#GGG#.#HH#II#.#JJ#KK#.#LLLL#","#GGG#.#HH#II#.#JJ#KK#.#LLLL#","#GGG#.#HH#II#.#JJ#KK#.#LLLL#","##+##.#+##+##.#+##+##.##+###","#..........................#","##+##.#+##+##.#+##+##.##+###","#MMM#.#NN#OO#.#PP#QQ#.#RRRR#","#MMM#.#NN#OO#.#PP#QQ#.#RRRR#","#MMM#.#NN#OO#.#PP#QQ#.#RRRR#","##+##.#+##+##.#+##+##.##+###","#..........................#","##+##.#+##+##.#+##+##.##+###","#SSS#.#TT#UU#.#VV#WW#.#XXXX#","#SSS#.#TT#UU#.#VV#WW#.#XXXX#","#SSS#.#TT#UU#.#VV#WW#.#XXXX#","##+##.#+##+##.#+##+##.##+###","#..........................#","############################"],pn=15,Ha=pn-1;function Vl(s){return s<0||s>=Pe?-1:s<pn?4:s<=33?1:s<=43?2:s<=49?0:3}function zo(s){const t=bn[s];return t?Te(t.name):""}const fe=28,Pe=58;let Zo=null;const Uv=new Set(["t","u","v","w","x","y","z"]),oi={row:28,col:10},ti={row:17,col:25},ei={row:16,col:2},ni={row:24,col:25},ji={row:0,col:13},ii={row:4,col:5},Zi={row:10,col:5},Yr=[{row:24,col:7},{row:31,col:8},{row:31,col:16}],Ov=[{row:24,col:7,yaw:0,loot:"key"},{row:31,col:8,yaw:Math.PI/2,loot:"key"},{row:31,col:16,yaw:0,loot:"key"},{row:23,col:8,yaw:-Math.PI/2,loot:"battery"},{row:41,col:24,yaw:0,loot:"bottle"},{row:52,col:8,yaw:Math.PI,loot:"battery"},{row:31,col:24,yaw:0,loot:"bottle"}],Nv=[{row:20,col:4,dz:-1.35,dx:0,yaw:0},{row:20,col:12,dz:-1.35,dx:0,yaw:0},{row:28,col:22,dz:-1.35,dx:0,yaw:0},{row:34,col:6,dz:-1.35,dx:0,yaw:0},{row:44,col:12,dz:-1.35,dx:0,yaw:0},{row:50,col:8,dz:-1.35,dx:0,yaw:0},{row:7,col:11,dz:-1.35,dx:0,yaw:0},{row:1,col:8,dz:-1.35,dx:0,yaw:0}],Kr={row:18,col:23},Os={row:47,col:3},Wl=[{row:17,col:13},{row:23,col:15},{row:37,col:15}],zv=[{row:18,col:21},{row:20,col:8},{row:24,col:11},{row:17,col:19},{row:31,col:9},{row:7,col:14}],ql="q",$r=[{row:31,col:7},{row:16,col:24},{row:17,col:18},{row:24,col:10},{row:23,col:15},{row:17,col:7},{row:31,col:10},{row:24,col:1},{row:4,col:20},{row:10,col:22},{row:10,col:13},{row:37,col:2},{row:37,col:7},{row:37,col:15},{row:47,col:15},{row:47,col:2},{row:47,col:24},{row:53,col:2},{row:53,col:7},{row:53,col:15}],jr=[{row:1,col:1},{row:1,col:26},{row:7,col:9},{row:7,col:18},{row:13,col:1},{row:13,col:26}],Xl=[{row:17,col:5},{row:17,col:21},{row:20,col:9},{row:20,col:18},{row:28,col:5},{row:28,col:21},{row:17,col:13},{row:24,col:13},{row:1,col:5},{row:1,col:22},{row:7,col:9},{row:13,col:15},{row:34,col:13},{row:44,col:5},{row:44,col:21},{row:50,col:13},{row:56,col:5},{row:56,col:21}],Yl=[{room:"o",count:3},{room:"h",count:2},{room:"i",count:2},{room:"q",count:2},{room:"p",count:1},{room:"e",count:1},{room:"x",count:2},{room:"v",count:1},{room:"u",count:1},{room:"P",count:3},{room:"D",count:2},{room:"R",count:2},{room:"H",count:1},{room:"F",count:1},{room:"M",count:1},{room:"S",count:2},{room:"U",count:1}];function Fv(s){var t;for(const e of s.wallTexts){const n=e.texture.image,i=(t=n==null?void 0:n.getContext)==null?void 0:t.call(n,"2d");!n||!i||(Xh(i,n.width,n.height,Te(e.text)),e.texture.needsUpdate=!0)}}const Va=/^[a-zA-Z]$/;function kv(){if(mn.length!==Pe)throw new Error(`Layout has ${mn.length} rows, expected ${Pe}`);mn.forEach((r,a)=>{if(r.length!==fe)throw new Error(`Layout row ${a} is ${r.length} chars, expected ${fe}`)});const s=mn.map(r=>Array.from(r,a=>a==="#"?0:1)),t=new Int16Array(Pe*fe).fill(-1),e=new Map;for(let r=0;r<Pe;r++)for(let a=0;a<fe;a++){const c=mn[r][a];if(!Va.test(c))continue;const l=e.get(c);l?(l.row1=Math.min(l.row1,r),l.row2=Math.max(l.row2,r),l.col1=Math.min(l.col1,a),l.col2=Math.max(l.col2,a)):e.set(c,{row1:r,row2:r,col1:a,col2:a})}const n=Array.from(e.keys()).sort(),i=[],o=new Map;n.forEach((r,a)=>{const c=wv[r];if(!c)throw new Error(`Room '${r}' has no ROOM_META entry`);const l=e.get(r);o.set(r,a),i.push({index:a,key:r,...c,...l,outdoor:Uv.has(r)})});for(let r=0;r<Pe;r++)for(let a=0;a<fe;a++){const c=mn[r][a],l=o.get(c);t[r*fe+a]=l===void 0?-1:l}return{grid:s,roomIndexByCell:t,rooms:i,indexByChar:o}}function Zr(s,t){if(!Ye(s,oi.row,oi.col))throw new Error(`Player spawn (${oi.row},${oi.col}) is inside a wall`);const e=new Uint8Array(Pe*fe),n=[oi.row*fe+oi.col];e[n[0]]=1;let i=0;for(;i<n.length;){const o=n[i++],r=Math.floor(o/fe),a=o%fe;for(const[c,l]of[[1,0],[-1,0],[0,1],[0,-1]]){const h=r+c,u=a+l;if(!Ye(s,h,u))continue;const d=h*fe+u;e[d]||(e[d]=1,n.push(d))}}for(const[o,r,a]of t)if(!e[o*fe+r])throw new Error(`${a} at (${o},${r}) cannot be reached from the spawn point`)}function _i(s,t,e,n,i){if(t<0||t>=Pe||e<0||e>=fe)throw new Error(`${i} at (${t},${e}) is outside the plan`);if(s[t][e]===0)throw new Error(`${i} at (${t},${e}) is inside a wall`);s[t][e]=n}function Ye(s,t,e){return t<0||t>=Pe||e<0||e>=fe?!1:s[t][e]!==0}function Bv(s,t,e){const n=t.find(o=>o.key===e);if(!n)throw new Error(`Cannot find room '${e}' to board up`);const i=[];for(let o=n.row1-1;o<=n.row2+1;o++)if(!(o<0||o>=s.length))for(let r=n.col1-1;r<=n.col2+1;r++){if(r<0||r>=fe||s[o][r]!=="+")continue;[[1,0],[-1,0],[0,1],[0,-1]].some(([c,l])=>{const h=o+c,u=r+l;return h>=n.row1&&h<=n.row2&&u>=n.col1&&u<=n.col2})&&i.push({row:o,col:r})}return i}function xi(s,t,e){const n=Math.round(t/j),i=Math.round(e/j);return i<0||i>=s.length||n<0||n>=s[0].length?!1:s[i][n]!==0}function Gv(s,t){return Math.round(t/j)<=Ha}function Ns(s,t,e=En){return new C(t*j,e,s*j)}function Kl(s){Zo=null;const t=Hv(s),e=Zo;if(Zo=null,!e)throw new Error("buildWorld: the fixtures were never constructed");const n=t;return Object.assign(n,e),n}function Hv(s){const{grid:t,roomIndexByCell:e,rooms:n,indexByChar:i}=kv(),o=2,r=3,a=4,c=5,l=6,h=7,u=8,d=9;Zr(t,[[ti.row,ti.col,"Monster spawn"],[ei.row,ei.col,"Exit"],[ni.row,ni.col,"Breaker"],[ji.row,ji.col,"Main gate"],[ii.row,ii.col,"Substation"],[Zi.row,Zi.col,"Gate keycard"],[Kr.row,Kr.col,"Breaker fuse"],[Os.row,Os.col,"Crowbar"],...Wl.map(x=>[x.row,x.col,"Spare battery"]),...jr.map(x=>[x.row,x.col,"Lamp post"]),...Yr.map((x,U)=>[x.row,x.col,`Key ${U+1}`]),...$r.map((x,U)=>[x.row,x.col,`Note ${U+1}`]),...Fl.map(x=>[x.row,x.col,"Wall scrawl"]),...Yl.map(x=>{const U=i.get(x.room),W=U===void 0?void 0:n[U];if(!W)throw new Error(`Corpse room '${x.room}' does not exist in the plan`);return[W.row1,W.col1,`Corpse room ${x.room}`]})]),_i(t,ti.row,ti.col,a,"Monster spawn"),_i(t,ei.row,ei.col,r,"Exit"),_i(t,ni.row,ni.col,l,"Breaker"),_i(t,ii.row,ii.col,u,"Substation"),_i(t,Zi.row,Zi.col,h,"Gate keycard"),Yr.forEach((x,U)=>_i(t,x.row,x.col,o,`Key ${U+1}`)),$r.forEach((x,U)=>_i(t,x.row,x.col,c,`Note ${U+1}`));const f=Bv(mn,n,ql);if(f.length===0)throw new Error(`Room '${ql}' has no doorways to board up`);for(const x of f)t[x.row][x.col]=0;Zr(t,[[Os.row,Os.col,"Crowbar (door boarded up)"]]);for(const x of bn){const U=x.cageRow,W=Hs;if(U<0||U>=Pe||W<0||W>=fe)throw new Error(`Elevator shaft ${x.id} at (${U},${W}) is outside the plan`);t[U][W]=d}Zr(t,bn.map(x=>[x.cageRow,Hs,`Elevator shaft ${x.id}`]));const m=Gg(),v=new gt({map:m,bumpMap:m,bumpScale:.06,roughness:.95,metalness:.04}),g=jg();g.repeat.set(2,2);const p=new gt({map:g,bumpMap:g,bumpScale:.1,roughness:1,metalness:.02}),b=Hg();b.repeat.set(fe,Pe-pn);const E=new gt({map:b,roughness:1,metalness:0}),S=Vg();S.repeat.set(fe/2,(Pe-pn)/2);const k=new gt({map:S,roughness:1,metalness:0}),L=$g();L.repeat.set(fe/2,pn/2);const I=new gt({map:L,roughness:1,metalness:.02}),D=Zg();D.repeat.set(3,1);const w=new gt({map:D,roughness:1,metalness:0}),_=new gt({map:bl(),roughness:.55,metalness:.5}),P=new gt({color:2763306,emissive:16718362,emissiveIntensity:1.4,metalness:.9,roughness:.25}),V=new gt({color:12170147,roughness:.85,metalness:.05}),N=new gt({color:3092788,roughness:.45,metalness:.75}),Z=new gt({color:4928032,roughness:.92,metalness:.35}),st=new gt({color:2437178,roughness:1,metalness:0}),tt=new gt({color:6048324,roughness:.9,metalness:0}),rt=new gt({color:4864038,roughness:1,metalness:0}),H=new gt({color:5460814,roughness:.95,metalness:.03}),ot=new gt({color:856342,roughness:.22,metalness:.6,transparent:!0,opacity:.65}),pt=new gt({color:9248543,roughness:.7,metalness:.2}),Lt=new gt({color:1316378,emissive:16767392,emissiveIntensity:.05,roughness:.5,metalness:.4}),Vt=new gt({color:1381912,roughness:.55,metalness:.85});new gt({color:2763824,roughness:.5,metalness:.9});const Qt=new gt({color:10124083,roughness:.35,metalness:.82});new gt({color:16757575,emissive:16747034,emissiveIntensity:0,roughness:.45,metalness:.25}),new gt({color:9050650,emissive:16722452,emissiveIntensity:.4,roughness:.5,metalness:.4}),new gt({color:1722922,emissive:3407718,emissiveIntensity:.25,roughness:.5,metalness:.3}),new gt({color:16774096,emissive:16765818,emissiveIntensity:0,roughness:.5,metalness:0,transparent:!0,opacity:.8});const nt=new gt({color:1711135,emissive:14191130,emissiveIntensity:.9,roughness:.5,metalness:.4});new gt({color:10474728,emissive:3066111,emissiveIntensity:1.4,roughness:.18,metalness:.1,transparent:!0,opacity:.72});const dt=new gt({color:9056028,emissive:4723208,emissiveIntensity:.55,roughness:.55,metalness:.55}),It=new gt({color:1909030,emissive:997918,emissiveIntensity:.7,roughness:.5,metalness:.5}),ft=new gt({map:Wg(),transparent:!0,opacity:.9,roughness:1,metalness:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),zt=new gt({color:14209725,emissive:9075274,emissiveIntensity:.45,roughness:.9,metalness:0,side:nn}),Gt=new gt({color:16761402,emissive:16752640,emissiveIntensity:1.2,roughness:.25,metalness:.9}),Wt=new gt({color:3133695,emissive:41727,emissiveIntensity:1.6,roughness:.3,metalness:.5}),ie=new gt({color:1052688,emissive:16773842,emissiveIntensity:.12,roughness:.4}),$t=new gt({map:Yg(),color:10133670,roughness:.42,metalness:.78}),he=new gt({map:Kg(),roughness:.95,metalness:0,side:nn}),F=new gt({color:3802119,roughness:.07,metalness:.45,transparent:!0,opacity:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}),Oe=new gt({color:4860440,roughness:.25,metalness:.1,transparent:!0,opacity:.8}),Yt=new gt({color:3817285,roughness:.5,metalness:.7}),Zt=new gt({color:9052192,emissive:5570560,emissiveIntensity:.6,roughness:.6,metalness:.3}),B=new Pt,it=[];let mt=0;const T=new Ee(fe*j,pn*j),y=new A(T,I);y.rotation.x=-Math.PI/2,y.position.set(fe*j/2-j/2,0,pn*j/2-j/2),y.receiveShadow=!0,s.add(y);const G=new A(new Ee(26*j,2*j),w);G.rotation.x=-Math.PI/2,G.position.set(13.5*j,.01,13.5*j),G.receiveShadow=!0,s.add(G);const $=new Ee(fe*j,(Pe-pn)*j),et=new A($,E);et.rotation.x=-Math.PI/2,et.position.set(fe*j/2-j/2,0,(pn+Pe-1)/2*j),et.receiveShadow=!0,s.add(et);const Q=new A($,k);Q.rotation.x=Math.PI/2,Q.position.set(et.position.x,ue,et.position.z),s.add(Q);const Ct=new X(j,ue,$i),vt=new X($i,ue,j),yt=[],kt=[];for(let x=0;x<Pe;x++)for(let U=0;U<fe;U++){if(!Ye(t,x,U))continue;const W=U*j,ct=x*j,ht=x<=Ha?kt:yt,Mt=[{dr:-1,dc:0,geo:Ct,pos:[W,ue/2,ct-j/2+$i/2]},{dr:1,dc:0,geo:Ct,pos:[W,ue/2,ct+j/2-$i/2]},{dr:0,dc:-1,geo:vt,pos:[W-j/2+$i/2,ue/2,ct]},{dr:0,dc:1,geo:vt,pos:[W+j/2-$i/2,ue/2,ct]}];for(const _t of Mt){if(Ye(t,x+_t.dr,U+_t.dc))continue;const Et=_t.geo.clone();Et.translate(_t.pos[0],_t.pos[1],_t.pos[2]),ht.push(Et)}}const ut=[],wt=(x,U)=>{const W=ac(x,!1);if(W){const ct=new A(W,U);ct.castShadow=!0,ct.receiveShadow=!0,s.add(ct),ut.push(ct);return}for(const ct of x){const ht=new A(ct,U);ht.castShadow=!0,ht.receiveShadow=!0,s.add(ht),ut.push(ht)}};wt(yt,v),wt(kt,p);const Ft=new C(0,1,0),Bt=[],Rt=[],Jt=[],qt=new gt({map:bl(),roughness:.72,metalness:.28}),ce=new Set([`${ji.row}:${ji.col}`,`${ei.row}:${ei.col}`]);for(const x of f)ce.add(`${x.row}:${x.col}`);Zo={elevator:Sv(s,{iron:N,darkIron:Vt,brass:Qt,rust:Z},j),elevatorCol:Hs,doors:Bt,desks:Rt,lockers:Jt};for(const x of bn){const U=Hs*j,W=x.cageRow*j;it.push({x:U-1.7,z:W,r:.5}),it.push({x:U+1.7,z:W,r:.5}),it.push({x:U,z:W-1.85,r:1.05})}for(let x=0;x<Pe;x++)for(let U=0;U<fe;U++){if(mn[x][U]!=="+")continue;const W=(Ye(t,x-1,U)||Ye(t,x+1,U))&&!(Ye(t,x,U-1)||Ye(t,x,U+1));if(Wv(B,U*j,x*j,W,N),ce.has(`${x}:${U}`))continue;const ct=Av(j,qt,N,W);ct.row=x,ct.col=U,Rv(ct,U*j,x*j,j,W?0:-Math.PI/2),s.add(ct.hinge),Bt.push(ct)}const bt=new Map;for(const x of Ov){const U=Lv(rt,N);U.group.position.set(x.col*j,0,x.row*j),U.group.rotation.y=x.yaw,s.add(U.group),bt.set(`${x.row}:${x.col}`,Rt.length),Rt.push({row:x.row,col:x.col,group:U.group,drawer:U.drawer,slide:0,target:0,opened:!1,travel:new C(0,0,1),centre:new C(x.col*j,1,x.row*j),loot:null,lootKind:x.loot,lootIndex:-1}),it.push({x:x.col*j,z:x.row*j,r:.8})}for(const x of Rt){if(x.lootKind==="key")continue;const U=x.lootKind==="battery"?Dl(It,N):Il(ot,N);U.position.set(0,.58,.05),U.userData.isDrawerLoot=!0,x.drawer.add(U),x.loot=U}for(const x of Nv){const U=Iv(N,Z),W=x.col*j+x.dx,ct=x.row*j+x.dz;U.group.position.set(W,0,ct),U.group.rotation.y=x.yaw,s.add(U.group);const ht=U.inside.clone().applyAxisAngle(Ft,x.yaw).add(U.group.position),Mt=U.outside.clone().applyAxisAngle(Ft,x.yaw).add(U.group.position);Jt.push({row:x.row,col:x.col,group:U.group,door:U.door,open:0,target:0,opened:!1,inside:ht,yaw:x.yaw+Math.PI,outside:Mt,centre:new C(W,1.1,ct)}),it.push({x:W,z:ct,r:.6})}for(let x=pn;x<Pe;x++)for(let U=0;U<fe;U++){const W=mn[x][U],ct=Va.test(W),ht=W===".",Mt=U*j,_t=x*j;if(ct||ht)if(ct&&Math.random()<.55?Xv(B,Mt,_t,W,{boneMat:V,metalMat:N,rustMat:Z,fabricMat:st,woodMat:rt,glassMat:ot},it):ht&&Math.random()<.45&&Yv(B,Mt,_t,Jr(t,x,U),{boneMat:V,metalMat:N,rustMat:Z,fabricMat:st,woodMat:rt},it),Math.random()<(ct?.22:.42)&&zs(B,ft,Mt,_t),ht&&Math.random()<.42&&ay(B,Mt,_t,Z,rt,st),ht&&Math.random()<.28&&cy(B,Mt,_t),ht&&Math.random()<.12&&ly(B,N,st,Mt,_t),ht&&Math.random()<.15&&hy(B,N,Mt,_t),Math.random()<(ht?.55:.18)&&(ry(B,N,ie,Mt,_t),mt++),ht){const Et=Jr(t,x,U);Math.random()<.22&&dv(B,$t,Z,Mt,_t,Et),Math.random()<.18&&fv(B,N,Z,Mt,_t,Et),Math.random()<.14&&pv(B,N,Mt,_t),Math.random()<.14&&mv(B,he,Mt,_t),Math.random()<.09&&gv(B,N,ot,Mt,_t),Math.random()<.1&&vv(B,Oe,N,Mt,_t),Math.random()<.2&&Ul(B,F,Mt,_t)}else Math.random()<.14&&Ul(B,F,Mt,_t)}const J={metalMat:N,rustMat:Z,woodMat:rt,boneMat:V,stoneMat:H,glassMat:ot,paintMat:pt};for(let x=0;x<=Ha;x++)for(let U=0;U<fe;U++){const W=mn[x][U];if(W==="#"||W==="+"||!Va.test(W)&&W!==".")continue;const ct=U*j,ht=x*j,Mt=Jr(t,x,U);if(W==="v"){const _t=ct+Nt(-1.1,1.1),Et=ht+Nt(-1.1,1.1);if(Kv(B,H,_t,Et),it.push({x:_t,z:Et,r:.45}),Math.random()<.22){const te=ct+Nt(-1.4,1.4),le=ht+Nt(-1.4,1.4);jl(B,rt,te,le),it.push({x:te,z:le,r:.55})}}else if(W==="x"){if(Math.random()<.34){const _t=ct+Nt(-.9,.9),Et=ht+Nt(-.9,.9);Zv(B,J,_t,Et,Math.random()<.5),it.push({x:_t,z:Et,r:1.5})}}else if(W==="w"||W==="."){if(Math.random()<.18&&$l(B,J,ct,ht,Mt),Math.random()<.12){const _t=ct+Nt(-1.2,1.2),Et=ht+Nt(-1.2,1.2);jl(B,rt,_t,Et),it.push({x:_t,z:Et,r:.55})}Math.random()<.08&&zs(B,ft,ct+Nt(-.8,.8),ht+Nt(-.8,.8))}else W==="u"?Math.random()<.22&&($v(B,J,ct,ht),it.push({x:ct,z:ht,r:1.1})):W==="t"||W==="z"?Math.random()<.2&&(jv(B,J,ct,ht),it.push({x:ct,z:ht,r:.5})):W==="y"&&Math.random()<.3&&$l(B,J,ct,ht,Mt);Math.random()<.1&&zs(B,ft,ct,ht)}for(const x of jr)Jv(B,N,Lt,x.col*j,x.row*j);const at=[];for(let x=0;x<Xl.length;x++){const U=Xl[x];if(!Ye(t,U.row,U.col))continue;const W=U.col*j,ct=U.row*j,ht=x%2===0?rr(N,st):lc(N,Z);ht.position.set(W,0,ct),ht.rotation.y=Math.random()*Math.PI*2,ht.traverse(Mt=>{Mt.isMesh&&(Mt.castShadow=!0,Mt.receiveShadow=!0)}),B.add(ht),at.push(new C(W,En,ct)),it.push({x:W,z:ct,r:x%2===0?1.05:.6})}for(const x of Yl){const U=i.get(x.room);if(U===void 0)throw new Error(`Corpse room '${x.room}' does not exist in the plan`);const W=n[U];for(let ct=0;ct<x.count;ct++){const ht=W.row1+Math.floor(Math.random()*(W.row2-W.row1+1)),Mt=W.col1+Math.floor(Math.random()*(W.col2-W.col1+1));if(!Ye(t,ht,Mt))continue;const _t=iy(st,V,tt);_t.position.set(Mt*j+(Math.random()-.5)*1.4,0,ht*j+(Math.random()-.5)*1.4),_t.rotation.y=Math.random()*Math.PI*2,B.add(_t),zs(B,ft,Mt*j,ht*j)}}const At=[];for(const x of Fl){const U=qg(Te(x.text));At.push({texture:U,text:x.text}),oy(B,x.row,x.col,x.face,U)}for(let x=0;x<6;x++)zs(B,ft,ti.col*j+(Math.random()-.5)*7,ti.row*j+(Math.random()-.5)*3);const xt=ei.col*j,Ht=ei.row*j,ye=new C(xt,En,Ht),be=new A(new X(j*.95,ue,.34),new gt({color:1776414,roughness:.8,metalness:.6}));be.position.set(xt,ue/2,Ht-j/2),s.add(be);const se=new X(j*.74,ue*.86,.22);se.translate(j*.37,0,0);const ze=new A(se,_);ze.position.set(xt-j*.37,ue*.47,Ht-j/2+.16),ze.castShadow=!0,s.add(ze);const Je=new A(new X(.3,.24,.14),P);Je.position.set(xt+j*.24,ue*.47,Ht-j/2+.3),s.add(Je);const xs=new A(new X(j*.6,.09,.09),N);xs.position.set(xt,ue*.52,Ht-j/2+.34),s.add(xs);const Ms=ji.col*j,xn=ji.row*j,ws=new C(Ms,En,xn),Ln=new Pt;Ln.position.set(Ms,0,xn);const eo=new X(.34,ue+.5,.34);for(const x of[-1,1]){const U=new A(eo,N);U.position.set(x*(j/2-.12),(ue+.5)/2,0),Ln.add(U)}const Pi=new X(j/2-.12,ue*.9,.14),Ss=[];for(const x of[-1,1]){const U=new Pt;U.position.set(x*.05,0,0);const W=new A(Pi,_);W.position.set(x*(j/2-.12)/2,ue*.45,0),W.castShadow=!0,U.add(W),U.userData.sign=x,Ln.add(U),Ss.push(U)}const di=new A(new X(j-.2,.1,.1),N);di.position.set(0,ue*.92,0),Ln.add(di);const Ii=new A(new X(.36,.28,.16),P);Ii.position.set(0,ue*.55,-.24),Ln.add(Ii),s.add(Ln);const Di=ey(Yt,Zt);Di.position.set(ni.col*j,0,ni.row*j),s.add(Di);const bs=ny(Yt,Zt,N,Z);bs.position.set(ii.col*j,0,ii.row*j),s.add(bs);const no=[];Yr.forEach((x,U)=>{const W=Qv(Gt);W.position.set(x.col*j,1.1,x.row*j),W.userData.pickupIndex=U,W.userData.itemId="key",s.add(W),no.push(W.position.clone())});const io=[],M=ty(Wt,N);M.position.set(Zi.col*j,1.15,Zi.row*j),M.userData.pickupIndex=0,M.userData.itemId="card",s.add(M),io.push(M.position.clone());const z=[];$r.forEach((x,U)=>{const W=new A(new Ee(.42,.56),zt);W.rotation.x=-Math.PI/2.35,W.position.set(x.col*j+.3,.85,x.row*j-.3),W.userData.isNote=!0,W.userData.noteIndex=U,W.userData.pickupIndex=U,s.add(W),z.push(new C(x.col*j,1,x.row*j))});const q=(x,U,W,ct=.95)=>{W.position.set(U.col*j,ct,U.row*j),W.userData.itemId=x,s.add(W)};q("fuse",Kr,lv(nt,ot,N)),q("crowbar",Os,hv(dt),.9);for(const x of Wl)q("battery",x,Dl(It,N),.9);zv.forEach((x,U)=>{const W=Il(ot,N);W.rotation.y=U*1.3,q("bottle",x,W,.9)});for(const x of f){const U=uv(rt,Z,j);U.position.set(x.col*j,0,x.row*j),U.rotation.y=x.col%2===0?0:Math.PI/2,U.userData.isBoardedDoor=!0,s.add(U)}const Y=qv(B);return s.add(Y),{wallTexts:At,grid:t,walls:ut,floor:et,ceiling:Q,keyPositions:no,notePositions:z,exitPosition:ye,monsterSpawn:Ns(ti.row,ti.col,1.5),playerSpawn:Ns(oi.row,oi.col),exitDoor:ze,exitLock:Je,breakerPosition:Ns(ni.row,ni.col,1.2),breakerMesh:Di,props:Y,fluorescentMaterials:mt>0?[ie]:[],rooms:n,roomIndexByCell:e,plan:mn,cols:fe,rows:Pe,gatePosition:ws,gateLeaves:Ss,gateLock:Ii,substationPosition:Ns(ii.row,ii.col,1.2),substationMesh:bs,cardPositions:io,outdoorLampPositions:jr.map(x=>Ns(x.row,x.col,4.35)),lampMaterials:[Lt],hidingSpots:at,colliders:it}}function Vv(s,t,e){const n=Math.round(t/j),i=Math.round(e/j);return i<0||i>=s.rows||n<0||n>=s.cols?-1:s.roomIndexByCell[i*s.cols+n]}function Nt(s,t){return s+Math.random()*(t-s)}function Jr(s,t,e){const n=[];return Ye(s,t-1,e)&&n.push([-1,0]),Ye(s,t+1,e)&&n.push([1,0]),Ye(s,t,e-1)&&n.push([0,-1]),Ye(s,t,e+1)&&n.push([0,1]),n}function Wv(s,t,e,n,i){const o=new X(.18,ue,.18),r=new X(j-.2,.28,.22);if(n){for(const c of[-1,1]){const l=new A(o,i);l.position.set(t+c*(j/2-.09),ue/2,e),s.add(l)}const a=new A(r,i);a.position.set(t,ue-.14,e),s.add(a)}else{for(const c of[-1,1]){const l=new A(o,i);l.position.set(t,ue/2,e+c*(j/2-.09)),s.add(l)}const a=new A(r,i);a.position.set(t,ue-.14,e),a.rotation.y=Math.PI/2,s.add(a)}}function qv(s){const t=new Map;s.updateMatrixWorld(!0),s.traverse(n=>{if(!n.isMesh)return;const i=n,o=Array.isArray(i.material)?i.material[0]:i.material,r=i.geometry.clone();r.applyMatrix4(i.matrixWorld);for(const c of Object.keys(r.attributes))c!=="position"&&c!=="normal"&&c!=="uv"&&r.deleteAttribute(c);const a=t.get(o);a?a.push(r):t.set(o,[r])});const e=new Pt;for(const[n,i]of t){const o=ac(i,!1);if(!o)return s;const r=new A(o,n);r.castShadow=!0,r.receiveShadow=!0,e.add(r)}return e.children.length>0?e:s}function Xv(s,t,e,n,i,o){const r=Math.random();let a,c=0;"dDnsS".includes(n)?r<.4?(a=Al(i.metalMat,i.fabricMat),c=1):r<.6?(a=Ds(i.metalMat,i.rustMat),c=.5):r<.8?a=zn(i.metalMat):a=Ll(i.metalMat):"hiI".includes(n)?r<.35?(a=ev(i.metalMat,i.fabricMat),c=1):r<.55?(a=Io(i.metalMat,i.glassMat),c=.4):r<.75?a=Ll(i.metalMat):a=zn(i.metalMat):"ooO".includes(n)?r<.5?(a=nv(i.metalMat,i.rustMat),c=.8):r<.75?(a=rr(i.metalMat,i.fabricMat),c=1):a=zn(i.metalMat):"rC".includes(n)?r<.4?(a=iv(i.metalMat,i.rustMat),c=.8):r<.6?(a=Bn(i.rustMat,i.metalMat),c=.45):r<.8?(a=ri(i.woodMat),c=.5):a=zn(i.metalMat):n==="g"?r<.5?(a=Rl(i.woodMat),c=.7):r<.75?(a=Do(i.woodMat,i.metalMat),c=.6):(a=Pl(i.fabricMat,i.woodMat),c=.8):"HI".includes(n)?r<.5?(a=sv(i.metalMat,i.fabricMat),c=.7):r<.75?(a=Io(i.metalMat,i.glassMat),c=.4):a=Uo(i.metalMat):n==="S"?r<.5?(a=ov(i.metalMat,i.fabricMat),c=1):r<.75?(a=Ds(i.metalMat,i.rustMat),c=.5):(a=Do(i.woodMat,i.metalMat),c=.6):n==="T"?r<.5?(a=rv(i.metalMat,i.fabricMat),c=.7):r<.75?(a=Io(i.metalMat,i.glassMat),c=.4):a=zn(i.metalMat):n==="q"?r<.5?(a=Cl(i.metalMat,i.fabricMat),c=.6):r<.75?a=Uo(i.metalMat):a=zn(i.metalMat):n==="U"?r<.5?(a=Cl(i.metalMat,i.fabricMat),c=.6):r<.75?a=Uo(i.metalMat):(a=Bn(i.rustMat,i.metalMat),c=.45):"mMPN".includes(n)?r<.3?(a=Bn(i.rustMat,i.metalMat),c=.45):r<.5?a=Jo(i.metalMat,i.rustMat):r<.7?(a=ri(i.woodMat),c=.5):(a=Po(i.metalMat,i.rustMat),c=.6):"fpL".includes(n)?r<.35?(a=ri(i.woodMat),c=.5):r<.55?(a=Ds(i.metalMat,i.rustMat),c=.5):r<.75?(a=Rl(i.woodMat),c=.7):(a=Bn(i.rustMat,i.metalMat),c=.45):"AEVW".includes(n)?r<.4?(a=Do(i.woodMat,i.metalMat),c=.6):r<.6?(a=Pl(i.fabricMat,i.woodMat),c=.8):r<.8?(a=Ds(i.metalMat,i.rustMat),c=.5):a=zn(i.metalMat):n==="D"?r<.3?(a=Al(i.metalMat,i.fabricMat),c=1):r<.5?(a=ri(i.woodMat),c=.5):r<.7?(a=Po(i.metalMat,i.rustMat),c=.6):a=zn(i.metalMat):"kPQ".includes(n)?r<.3?(a=Do(i.woodMat,i.metalMat),c=.6):r<.5?(a=Io(i.metalMat,i.glassMat),c=.4):r<.7?a=Uo(i.metalMat):a=zn(i.metalMat):"tuyz".includes(n)?r<.3?(a=Bn(i.rustMat,i.metalMat),c=.45):r<.5?(a=ri(i.woodMat),c=.5):r<.7?a=Jo(i.metalMat,i.rustMat):(a=Po(i.metalMat,i.rustMat),c=.6):r<.2?(a=rr(i.metalMat,i.fabricMat),c=1):r<.34?(a=Po(i.metalMat,i.rustMat),c=.6):r<.5?(a=Bn(i.rustMat,i.metalMat),c=.45):r<.64?(a=ri(i.woodMat),c=.5):r<.78?a=hc(i.boneMat):r<.9?a=Jo(i.metalMat,i.rustMat):(a=Ds(i.metalMat,i.rustMat),c=.6);const l=t+(Math.random()-.5)*2,h=e+(Math.random()-.5)*2;a.position.x=l,a.position.z=h,a.rotation.y=Math.random()*Math.PI*2,a.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),c>0&&o.push({x:l,z:h,r:c}),s.add(a)}function Yv(s,t,e,n,i,o){const r=[[1,0],[-1,0],[0,1],[0,-1]].filter(m=>!n.some(([v,g])=>v===m[0]&&g===m[1])),a=1.3,c=r.length>0?r[Math.floor(Math.random()*r.length)]:[0,0],l=t+c[1]*a+(c[1]===0?(Math.random()-.5)*2:0),h=e+c[0]*a+(c[0]===0?(Math.random()-.5)*2:0),u=Math.random();let d,f=0;u<.2?(d=rr(i.metalMat,i.fabricMat),f=1):u<.34?(d=lc(i.metalMat,i.rustMat),f=.6):u<.5?(d=Bn(i.rustMat,i.metalMat),f=.45):u<.64?(d=ri(i.woodMat),f=.5):u<.78?d=hc(i.boneMat):u<.9?d=Jo(i.metalMat,i.rustMat):(d=sy(i.metalMat,i.rustMat),f=.6),d.position.x+=l,d.position.z+=h,d.rotation.y=Math.random()*Math.PI*2,d.traverse(m=>{m.isMesh&&(m.castShadow=!0,m.receiveShadow=!0)}),f>0&&o.push({x:l,z:h,r:f}),s.add(d)}function $l(s,t,e,n,i){const o=[[1,0],[-1,0],[0,1],[0,-1]].filter(u=>!i.some(([d,f])=>d===u[0]&&f===u[1])),r=o.length>0?o[Math.floor(Math.random()*o.length)]:[0,0],a=e+r[1]*1.3+(r[1]===0?Nt(-1.4,1.4):0),c=n+r[0]*1.3+(r[0]===0?Nt(-1.4,1.4):0),l=Math.random();let h;l<.3?h=ri(t.woodMat):l<.55?h=Bn(t.rustMat,t.metalMat):l<.75?h=hc(t.boneMat):h=lc(t.metalMat,t.rustMat),h.position.set(a,0,c),h.rotation.y=Math.random()*Math.PI*2,h.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),s.add(h)}function Kv(s,t,e,n){const i=new A(new X(Nt(.5,.75),Nt(.7,1.1),.16),t);i.position.set(e,i.geometry.parameters.height/2,n),i.rotation.set(Nt(-.09,.09),Nt(-.5,.5),Nt(-.12,.12)),i.castShadow=!0,i.receiveShadow=!0,s.add(i);const o=new A(new X(1.1,.16,2),t);o.position.set(e,.06,n+1.05),o.rotation.y=Nt(-.3,.3),s.add(o)}function jl(s,t,e,n){const i=new A(new Dt(.11,.2,Nt(2.6,3.8),6),t);i.position.set(e,i.geometry.parameters.height/2,n),i.rotation.z=Nt(-.08,.08),i.castShadow=!0,s.add(i);const o=2+Math.floor(Math.random()*3);for(let r=0;r<o;r++){const a=new A(new Dt(.03,.07,Nt(.9,1.7),5),t),c=r/o*Math.PI*2+Nt(-.4,.4);a.position.set(e+Math.cos(c)*.4,Nt(1.8,3),n+Math.sin(c)*.4),a.rotation.set(Nt(-.6,.6),c,Nt(.7,1.1)),s.add(a)}}function $v(s,t,e,n){const i=new A(new X(Nt(1.4,2.4),.9,.55),t.stoneMat);i.position.set(e+Nt(-.8,.8),.45,n+Nt(-.8,.8)),i.rotation.y=Math.random()<.5?0:Math.PI/2,i.castShadow=!0,i.receiveShadow=!0,s.add(i);const o=new A(new X(i.geometry.parameters.width*.9,.2,.58),t.paintMat);o.position.copy(i.position),o.position.y=.72,o.rotation.y=i.rotation.y,s.add(o)}function jv(s,t,e,n){const i=Bn(t.rustMat,t.metalMat);i.position.set(e+Nt(-1.1,1.1),0,n+Nt(-1.1,1.1)),i.rotation.y=Math.random()*Math.PI*2,i.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),s.add(i)}function Zv(s,t,e,n,i){const o=new Pt,r=new A(new X(1.9,.72,4.2),t.rustMat);r.position.y=.62,o.add(r);const a=new A(new X(1.72,.66,2.1),t.metalMat);a.position.set(0,1.24,-.2),o.add(a);const c=new A(new X(1.6,.5,.08),t.glassMat);c.position.set(0,1.26,-1.22),o.add(c);const l=new A(new X(1.66,.08,2),t.glassMat);l.position.set(0,1.58,-.2),o.add(l);const h=new Dt(.34,.34,.22,10);h.rotateZ(Math.PI/2);for(const u of[-1,1])for(const d of[-1.4,1.4]){const f=new A(h,t.metalMat);f.position.set(u,.34,d),o.add(f)}o.position.set(e,0,n),o.rotation.y=Nt(-Math.PI,Math.PI),i&&(o.rotation.z=Math.PI,o.position.y=1,o.scale.setScalar(.9)),o.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),s.add(o)}function Jv(s,t,e,n,i){const o=new Pt,r=new A(new Dt(.09,.13,4.6,8),t);r.position.y=2.3,o.add(r);const a=new A(new X(.9,.09,.09),t);a.position.set(.42,4.52,0),o.add(a);const c=new A(new X(.6,.16,.32),e);c.position.set(.78,4.42,0),o.add(c),o.position.set(n,0,i),o.rotation.y=Nt(-.4,.4),o.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),s.add(o)}function Qv(s){const t=new Pt,e=new A(new je(.19,.045,8,18),s),n=new A(new X(.06,.44,.06),s);n.position.y=-.3;const i=new A(new X(.16,.07,.06),s);return i.position.set(.08,-.48,0),t.add(e,n,i),t.userData.isKey=!0,t}function ty(s,t){const e=new Pt,n=new A(new X(.34,.02,.52),s);n.position.y=.02,e.add(n);const i=new A(new X(.34,.026,.09),t);i.position.set(0,.045,-.14),e.add(i);const o=new A(new je(.05,.012,6,12),t);return o.position.set(0,.05,.3),e.add(o),e.userData.isCard=!0,e}function ey(s,t){const e=new Pt,n=new A(new X(1.1,1.7,.5),s);n.position.y=1.7,n.castShadow=!0,e.add(n);const i=new A(new X(.86,1.36,.06),new gt({color:1316378,roughness:.7,metalness:.4}));i.position.set(0,1.74,.28),e.add(i);const o=new A(new X(.16,.5,.16),t);o.position.set(0,1.6,.36),o.rotation.x=-.6,o.userData.isBreakerLever=!0,e.add(o);const r=new A(new We(.07,10,10),new gt({color:3342336,emissive:16720384,emissiveIntensity:2}));return r.position.set(0,2.28,.33),r.userData.isBreakerLamp=!0,e.add(r),e}function ny(s,t,e,n){const i=new Pt,o=new A(new X(2.6,.22,2.2),new gt({color:3815992,roughness:1,metalness:0}));o.position.y=.11,o.receiveShadow=!0,i.add(o);for(const h of[-.66,.66]){const u=new A(new Dt(.42,.42,1.5,12),e);u.position.set(h,.97,0),u.castShadow=!0,i.add(u);const d=new A(new Dt(.46,.46,.14,12),n);d.position.set(h,1.78,0),i.add(d);for(let f=0;f<3;f++){const m=new A(new Dt(.06,.09,.34,6),n);m.position.set(h+(f-1)*.22,2,0),i.add(m)}}const r=new A(new X(.7,1.5,.42),s);r.position.set(0,.97,1.3),r.castShadow=!0,i.add(r);const a=new A(new X(.14,.46,.14),t);a.position.set(0,.9,1.54),a.rotation.x=-.6,a.userData.isSubstationLever=!0,i.add(a);const c=new A(new We(.065,10,10),new gt({color:3342336,emissive:16720384,emissiveIntensity:2}));c.position.set(0,1.55,1.54),c.userData.isSubstationLamp=!0,i.add(c);const l=new A(new X(.7,.5,.05),new gt({color:13214247,emissive:3812352,emissiveIntensity:.4,roughness:.8}));return l.position.set(0,1.95,1.32),i.add(l),i.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),i}function iy(s,t,e){const n=new Pt,i=new A(new X(.52,.26,.78),s);i.position.y=.13,n.add(i);const o=new A(new We(.16,10,8),e);o.position.set(0,.15,-.5),n.add(o);for(const a of[-1,1]){const c=new A(new X(.14,.14,.6),e);c.position.set(a*.36,.08,-.06),c.rotation.y=a*.6,n.add(c);const l=new A(new X(.17,.17,.68),s);l.position.set(a*.14,.09,.7),l.rotation.y=a*.12,n.add(l)}const r=new A(new X(.3,.04,.12),t);return r.position.set(.08,.28,.06),r.rotation.y=.4,n.add(r),n}function rr(s,t){const e=new Pt,n=new A(new X(.8,.12,1.9),t);n.position.y=.72;const i=new A(new X(.84,.06,1.94),s);i.position.y=.64,e.add(n,i);const o=[[-.34,-.82],[.34,-.82],[-.34,.82],[.34,.82]];for(const[a,c]of o){const l=new A(new X(.06,.64,.06),s);l.position.set(a,.32,c),e.add(l)}const r=new Dt(.08,.08,.05,8);r.rotateZ(Math.PI/2);for(const[a,c]of o){const l=new A(r,s);l.position.set(a,.06,c),e.add(l)}return e.rotation.y+=(Math.random()-.5)*.6,e}function lc(s,t){const e=new Pt,n=new A(new X(.56,.08,.56),t);n.position.y=.52;const i=new A(new X(.56,.6,.08),t);i.position.set(0,.82,-.26),e.add(n,i);const o=new je(.32,.045,6,20);for(const a of[-.34,.34]){const c=new A(o,s);c.position.set(a,.34,0),c.rotation.y=Math.PI/2,e.add(c)}const r=new je(.09,.03,6,12);for(const a of[-.24,.24]){const c=new A(r,s);c.position.set(a,.09,.28),c.rotation.y=Math.PI/2,e.add(c)}return e}function Bn(s,t){const e=new Pt,n=new A(new Dt(.32,.32,.9,12),s);n.position.y=.45,e.add(n);for(const i of[.24,.66]){const o=new A(new je(.33,.025,5,14),t);o.position.y=i,o.rotation.x=Math.PI/2,e.add(o)}return e}function ri(s){const t=new Pt,e=.5+Math.random()*.3,n=new A(new X(e,e,e),s);if(n.position.y=e/2,n.rotation.y=Math.random()*.5,t.add(n),Math.random()<.4){const i=n.clone();i.position.y=e*1.5,i.rotation.y=Math.random()*Math.PI,t.add(i)}return t}function hc(s){const t=new Pt;for(let n=0;n<7;n++){const i=new A(new oc(.035,.28+Math.random()*.2,3,6),s);i.position.set((Math.random()-.5)*.7,.05+Math.random()*.06,(Math.random()-.5)*.7),i.rotation.set(Math.PI/2,0,Math.random()*Math.PI),t.add(i)}const e=new A(new We(.13,8,8),s);return e.position.set((Math.random()-.5)*.4,.13,(Math.random()-.5)*.4),t.add(e),t}function Jo(s,t){const e=new Pt,n=new Dt(.055,.055,3.6,8);n.rotateZ(Math.PI/2);for(let i=0;i<2;i++){const o=new A(n,i===0?s:t);o.position.set(0,ue-.3-i*.22,0),o.rotation.y=Math.random()<.5?0:Math.PI/2,e.add(o)}return e}function sy(s,t){const e=new Pt,n=new A(new X(.9,2,.5),s);n.position.y=1,e.add(n);const i=new A(new X(.38,1.8,.06),t);return i.position.set(-.22,1,.28),i.rotation.y=-.35,e.add(i),e}function zs(s,t,e,n){const i=new A(new Ee(1.8,1.8),t);i.rotation.x=-Math.PI/2,i.rotation.z=Math.random()*Math.PI*2,i.position.set(e+(Math.random()-.5)*1.8,.015,n+(Math.random()-.5)*1.8),s.add(i)}function oy(s,t,e,n,i){const o=new gt({map:i,transparent:!0,roughness:1,metalness:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}),r=new A(new Ee(2.9,2.9),o),a=e*j,c=t*j;n==="north"?r.position.set(a,1.9,c-j/2+.12):n==="south"?(r.position.set(a,1.9,c+j/2-.12),r.rotation.y=Math.PI):n==="west"?(r.position.set(a-j/2+.12,1.9,c),r.rotation.y=Math.PI/2):(r.position.set(a+j/2-.12,1.9,c),r.rotation.y=-Math.PI/2),s.add(r)}function ry(s,t,e,n,i){const o=new A(new X(1.5,.12,.34),t);o.position.set(n,ue-.12,i),s.add(o);const r=new A(new X(1.34,.06,.2),e);r.position.set(n,ue-.2,i),s.add(r)}function ay(s,t,e,n,i,o){const r=1+Math.floor(Math.random()*3);for(let a=0;a<r;a++){const c=Math.random();let l;c<.35?l=new A(new X(Nt(.5,1.2),.04,Nt(.5,.9)),new gt({color:9078656,roughness:1})):c<.65?l=new A(new X(Nt(.15,.5),.06,Nt(.06,.12)),n):(l=new A(new Ee(Nt(.18,.38),Nt(.24,.42)),o),l.rotation.x=-Math.PI/2),l.position.set(t+Nt(-1.2,1.2),.02+a*.005,e+Nt(-1.2,1.2)),l.rotation.y=Nt(0,Math.PI*2),l.receiveShadow=!0,s.add(l)}}function cy(s,t,e){const n=Nt(.6,1.8),i=new us(n,16),o=new gt({color:658964,roughness:.08,metalness:.55,transparent:!0,opacity:Nt(.35,.55)}),r=new A(i,o);r.rotation.x=-Math.PI/2,r.position.set(t+Nt(-.8,.8),.008,e+Nt(-.8,.8)),r.receiveShadow=!0,s.add(r)}function ly(s,t,e,n,i){const o=new Pt;for(const a of[-.32,.32]){const c=new A(new X(.06,.08,1.8),t);c.position.set(a,.22,0),o.add(c)}for(const a of[-.6,0,.6]){const c=new A(new X(.7,.05,.06),t);c.position.set(0,.22,a),o.add(c)}for(const[a,c]of[[-.28,-.7],[.28,-.7],[-.28,.7],[.28,.7]]){const l=new A(new Dt(.025,.025,.22,6),t);l.position.set(a,.11,c),l.rotation.z=Nt(-.25,.25),o.add(l)}const r=new A(new X(.58,.06,1.6),e);r.position.set(Nt(-.08,.08),.28,Nt(-.08,.08)),r.rotation.y=Nt(-.15,.15),o.add(r),o.position.set(n,0,i),o.rotation.y=Nt(0,Math.PI*2),o.traverse(a=>{a.castShadow=!0}),s.add(o)}function hy(s,t,e,n){const i=new A(new Dt(.01,.01,Nt(.5,1.4),4),t);i.position.set(e+Nt(-.5,.5),ue-Nt(.3,.7),n+Nt(-.5,.5)),i.rotation.z=Nt(-.15,.15),i.rotation.x=Nt(-.15,.15),s.add(i)}const uy=3.2,dy=5.7,fy=2,Fo=.0022,Fn=.42,Zl=9,Jl=.075,py=.7,my=8,ko=100,gy=25,vy=17,Ql=.9,yy=4,_y=2.1,xy=2.7;class My{constructor(t){R(this,"camera");R(this,"position");R(this,"velocity",new C);R(this,"onFootstep",null);R(this,"yaw",0);R(this,"pitch",0);R(this,"headBobPhase",0);R(this,"isMoving",!1);R(this,"isRunning",!1);R(this,"isCrouched",!1);R(this,"currentHeight",En);R(this,"stamina",ko);R(this,"staminaIdle",0);R(this,"stepAccumulator",0);R(this,"lookSensitivity",1);R(this,"grid",[]);R(this,"colliders",[]);R(this,"blockers",[]);R(this,"keys",new Set);R(this,"joystickInput",{x:0,y:0});R(this,"mobileTouchReady",!1);R(this,"joystickTouchId",null);R(this,"joystickCenterX",0);R(this,"joystickCenterY",0);R(this,"joystickKnob",null);R(this,"joystickKnobBase",null);R(this,"joystickWrap",null);R(this,"lookTouchId",null);R(this,"lastLookX",0);R(this,"lastLookY",0);R(this,"keyboardReady",!1);R(this,"mouseLookReady",!1);R(this,"inputDisabled",!1);this.camera=t,this.position=new C}init(t,e){this.grid=t,this.position.copy(e),this.camera.position.copy(this.position),this.yaw=0,this.pitch=0}reset(t,e){this.init(t,e),this.keys.clear(),this.joystickInput.x=0,this.joystickInput.y=0,this.stamina=ko,this.staminaIdle=Ql,this.stepAccumulator=0,this.headBobPhase=0,this.isRunning=!1,this.isCrouched=!1,this.currentHeight=En,this.isMoving=!1,this.joystickTouchId=null,this.joystickInput.x=0,this.joystickInput.y=0,this.lookTouchId=null}setLookSensitivity(t){this.lookSensitivity=Math.max(.4,Math.min(2.5,t))}setColliders(t){this.colliders=t}setBlockers(t){this.blockers=t}teleport(t,e){this.position.x=t,this.position.z=e,this.velocity.set(0,0,0),this.keys.clear(),this.applyCamera()}place(t,e,n){this.teleport(t,e),this.yaw=n,this.pitch=0,this.applyCamera()}applyCamera(){this.camera.position.copy(this.position);const t=new C(this.position.x-Math.sin(this.yaw)*Math.cos(this.pitch),this.position.y+Math.sin(this.pitch),this.position.z-Math.cos(this.yaw)*Math.cos(this.pitch));this.camera.lookAt(t)}setupKeyboard(){this.keyboardReady||(this.keyboardReady=!0,document.addEventListener("keydown",t=>{this.keys.add(t.code),(t.code==="ControlLeft"||t.code==="ControlRight")&&(this.isCrouched=!0)}),document.addEventListener("keyup",t=>{this.keys.delete(t.code),(t.code==="ControlLeft"||t.code==="ControlRight")&&(this.isCrouched=!1)}),window.addEventListener("blur",()=>{this.keys.clear(),this.isRunning=!1}))}setupMouseLook(){this.mouseLookReady||(this.mouseLookReady=!0,document.addEventListener("mousemove",t=>{!document.pointerLockElement||this.inputDisabled||(this.yaw-=t.movementX*Fo*this.lookSensitivity,this.pitch-=t.movementY*Fo*this.lookSensitivity,this.clampPitch())}))}setupMobileTouch(t){if(this.mobileTouchReady)return;this.mobileTouchReady=!0;const e=document.createElement("div");e.id="dynamic-joystick",e.innerHTML='<div id="dj-base"></div><div id="dj-stick"></div>',document.body.appendChild(e),this.joystickWrap=e,this.joystickKnobBase=e.querySelector("#dj-base"),this.joystickKnob=e.querySelector("#dj-stick");const n=50,i=8,o=.5,r=c=>{c.preventDefault()};t.addEventListener("touchstart",r,{passive:!1}),t.addEventListener("touchmove",r,{passive:!1}),t.addEventListener("touchend",r,{passive:!1}),t.addEventListener("touchcancel",r,{passive:!1}),t.addEventListener("touchstart",c=>{for(let l=0;l<c.changedTouches.length;l++){const h=c.changedTouches[l],u=window.innerWidth*o;this.inputDisabled||(h.clientX<u&&this.joystickTouchId===null?(this.joystickTouchId=h.identifier,this.joystickCenterX=h.clientX,this.joystickCenterY=h.clientY,this.joystickWrap&&(this.joystickWrap.style.left=`${h.clientX-55}px`,this.joystickWrap.style.top=`${h.clientY-55}px`,this.joystickWrap.style.opacity="1"),this.joystickKnob&&(this.joystickKnob.style.transform="translate(0,0)")):h.clientX>=u&&this.lookTouchId===null&&(this.lookTouchId=h.identifier,this.lastLookX=h.clientX,this.lastLookY=h.clientY))}},{passive:!1}),t.addEventListener("touchmove",c=>{if(!this.inputDisabled)for(let l=0;l<c.touches.length;l++){const h=c.touches[l];if(h.identifier===this.joystickTouchId){let u=h.clientX-this.joystickCenterX,d=h.clientY-this.joystickCenterY;const f=Math.sqrt(u*u+d*d);f>n&&(u=u/f*n,d=d/f*n),this.joystickKnob&&(this.joystickKnob.style.transform=`translate(${u}px, ${d}px)`),this.joystickInput.x=Math.abs(u)<i?0:u/n,this.joystickInput.y=Math.abs(d)<i?0:d/n}if(h.identifier===this.lookTouchId){const u=h.clientX-this.lastLookX,d=h.clientY-this.lastLookY;this.yaw-=u*Fo*2*this.lookSensitivity,this.pitch-=d*Fo*2*this.lookSensitivity,this.clampPitch(),this.lastLookX=h.clientX,this.lastLookY=h.clientY}}},{passive:!1});const a=c=>{for(let l=0;l<c.changedTouches.length;l++){const h=c.changedTouches[l];h.identifier===this.joystickTouchId&&(this.joystickTouchId=null,this.joystickInput.x=0,this.joystickInput.y=0,this.joystickKnob&&(this.joystickKnob.style.transform="translate(0,0)"),this.joystickWrap&&(this.joystickWrap.style.opacity="0")),h.identifier===this.lookTouchId&&(this.lookTouchId=null)}};t.addEventListener("touchend",a,{passive:!1}),t.addEventListener("touchcancel",a,{passive:!1})}setRunning(t){this.isRunning=t}setCrouching(t){this.isCrouched=t}get facing(){return this.yaw}get crouching(){return this.isCrouched}get staminaRatio(){return this.stamina/ko}get sprinting(){return this.isRunning&&this.isMoving&&this.stamina>0}clampPitch(){this.pitch=Math.max(-Math.PI/2.5,Math.min(Math.PI/2.5,this.pitch))}update(t){var g;if(this.inputDisabled)return;const e=new C(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),n=new C(Math.cos(this.yaw),0,-Math.sin(this.yaw)),i=new C;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&i.add(e),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&i.sub(e),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&i.sub(n),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&i.add(n),(Math.abs(this.joystickInput.x)>.08||Math.abs(this.joystickInput.y)>.08)&&(i.add(e.clone().multiplyScalar(-this.joystickInput.y)),i.add(n.clone().multiplyScalar(this.joystickInput.x))),this.isMoving=i.lengthSq()>.01,this.isMoving&&i.normalize();const o=this.isRunning&&this.isMoving&&this.stamina>yy;o&&this.stamina>0?(this.stamina=Math.max(0,this.stamina-gy*t),this.staminaIdle=0):(this.staminaIdle+=t,this.staminaIdle>Ql&&(this.stamina=Math.min(ko,this.stamina+vy*t)));const r=o&&this.stamina>0,a=this.isCrouched?fy:r?dy:uy;this.velocity.copy(i).multiplyScalar(a);const c=this.position.clone();c.x+=this.velocity.x*t,c.z+=this.velocity.z*t;const l=[[Fn,0],[-Fn,0],[0,Fn],[0,-Fn]];let h=!0;for(const[p,b]of l)if(!xi(this.grid,c.x+p,this.position.z+b)){h=!1;break}h&&(this.position.x=c.x);let u=!0;for(const[p,b]of l)if(!xi(this.grid,this.position.x+p,c.z+b)){u=!1;break}u&&(this.position.z=c.z),this.resolveColliders(),this.resolveBlockers();const d=this.isCrouched?py:En;this.currentHeight+=(d-this.currentHeight)*Math.min(1,t*my);let f=0;if(this.isMoving){const p=r?Zl*1.45:Zl,b=(r?Jl*1.35:Jl)*(this.isCrouched?.3:1);this.headBobPhase+=t*p,this.position.y=this.currentHeight+Math.sin(this.headBobPhase)*b,f=Math.sin(this.headBobPhase*.5)*(r?.035:.02)*(this.isCrouched?.3:1)}else this.headBobPhase=0,this.position.y+=(this.currentHeight-this.position.y)*Math.min(1,t*6);const m=Math.hypot(this.velocity.x,this.velocity.z)*t;this.stepAccumulator+=m;const v=r?xy:_y;this.stepAccumulator>=v&&(this.stepAccumulator=0,(g=this.onFootstep)==null||g.call(this,r)),this.applyCamera(),this.camera.rotation.z+=f}resolveBlockers(){for(const t of this.blockers){const e=t.min.x-Fn,n=t.max.x+Fn,i=t.min.z-Fn,o=t.max.z+Fn,{x:r,z:a}=this.position;if(r<=e||r>=n||a<=i||a>=o)continue;const c=r-e,l=n-r,h=a-i,u=o-a,d=Math.min(c,l,h,u);let f=r,m=a;d===c?f=e:d===l?f=n:d===h?m=i:m=o,xi(this.grid,f,a)?this.position.x=f:xi(this.grid,r,m)?this.position.z=m:xi(this.grid,f,m)&&(this.position.x=f,this.position.z=m)}}resolveColliders(){for(const t of this.colliders){const e=this.position.x-t.x,n=this.position.z-t.z,i=t.r+Fn,o=e*e+n*n;if(o>=i*i)continue;const r=Math.sqrt(o);if(r<1e-4){this.position.x+=i;continue}const a=(i-r)/r,c=this.position.x+e*a,l=this.position.z+n*a;xi(this.grid,c,this.position.z)&&(this.position.x=c),xi(this.grid,this.position.x,l)&&(this.position.z=l)}}getForwardXZ(){return new Ut(-Math.sin(this.yaw),-Math.cos(this.yaw))}getGridPos(){return{row:Math.round(this.position.z/j),col:Math.round(this.position.x/j)}}}function wn(s,t,e){return t<0||t>=s.length||e<0||e>=s[0].length?!1:s[t][e]!==0}function wy(s){if(s.length<=2)return s;const t=[s[0]];for(let e=1;e<s.length-1;e++){const n=t[t.length-1],i=s[e],o=s[e+1],r=n.row===i.row&&i.row===o.row,a=n.col===i.col&&i.col===o.col;!r&&!a&&t.push(i)}return t.push(s[s.length-1]),t}const Sy=[[1,0],[-1,0],[0,1],[0,-1]];function by(s,t,e){const n=s.length,i=s[0].length;if(!wn(s,t.row,t.col))return[];if(!wn(s,e.row,e.col))return[];const o=t.row*i+t.col,r=e.row*i+e.col;if(o===r)return[];const a=new Int32Array(n*i).fill(-1),c=new Uint8Array(n*i),l=[o];c[o]=1;let h=0,u=!1;for(;h<l.length;){const m=l[h++];if(m===r){u=!0;break}const v=Math.floor(m/i),g=m%i;for(const[p,b]of Sy){const E=v+p,S=g+b;if(!wn(s,E,S))continue;const k=E*i+S;c[k]||(c[k]=1,a[k]=m,l.push(k))}}if(!u)return[];const d=[];let f=r;for(;f!==o;)if(d.push({row:Math.floor(f/i),col:f%i}),f=a[f],f<0)return[];return d.reverse(),wy(d)}const Ty=1.5,Ey=2.2,Ay=3.5,Ry=12,Cy=9,Ly=4.5,Py=5,Bo=7,Iy=1.35,Dy=.5,Uy=.35,Oy=.45;function Ny(s,t,e){const n=Math.PI*2;let i=(t-s)%n;return i>Math.PI&&(i-=n),i<-Math.PI&&(i+=n),s+i*e}class zy{constructor(t,e){R(this,"mesh");R(this,"onGrowl",null);R(this,"grid");R(this,"position");R(this,"path",[]);R(this,"pathIndex",0);R(this,"repathTimer",0);R(this,"state","patrol");R(this,"target",new C);R(this,"lastKnown",new C);R(this,"memoryTimer",0);R(this,"stunTimer",0);R(this,"growlCooldown",0);R(this,"aggression",1);R(this,"animPhase",0);R(this,"patrolPoints",[]);R(this,"patrolIndex",0);R(this,"colliders",[]);R(this,"torso");R(this,"headPivot");R(this,"jaw");R(this,"leftArmPivot");R(this,"rightArmPivot");R(this,"leftLegPivot");R(this,"rightLegPivot");R(this,"eyeLight");R(this,"mirrorLight",null);R(this,"boneSaw",null);this.grid=t,this.position=e.clone(),this.mesh=new Pt;const n=new gt({color:12103840,roughness:.78,metalness:.03,emissive:4465176,emissiveIntensity:2.2}),i=new gt({color:4864570,roughness:1,metalness:0}),o=new gt({color:2491914,roughness:1}),r=new gt({color:14208942,roughness:.7}),a=new gt({color:16768220,emissive:16720418,emissiveIntensity:6}),c=new gt({color:13222574,roughness:.92,metalness:0,emissive:1707272,emissiveIntensity:.55}),l=new gt({color:6033936,roughness:.55,metalness:.05,emissive:1836034,emissiveIntensity:.4});new gt({color:15261896,roughness:.6,metalness:.02,emissive:2761752,emissiveIntensity:.8});const h=new gt({color:10134184,roughness:.3,metalness:.85,emissive:1316634,emissiveIntensity:.5});this.torso=new A(new Dt(.34,.44,1.35,10),n),this.torso.position.y=1.28,this.torso.rotation.x=.2,this.torso.castShadow=!0,this.mesh.add(this.torso);const u=new A(new We(.46,12,10),n);u.position.set(0,1.88,-.02),u.scale.set(1.35,.55,.62),u.castShadow=!0,this.mesh.add(u);for(let H=0;H<4;H++){const ot=new A(new je(.34-H*.035,.026,6,16),i);ot.position.set(0,1.72-H*.2,-.02),ot.rotation.x=Math.PI/2+.2,ot.scale.set(1,1,.6),this.mesh.add(ot)}const d=H=>{const ot=new A(new X(.26,1.32,.05),c);ot.position.set(H*.19,1.24,.26),ot.rotation.z=H*.06,ot.castShadow=!0,this.mesh.add(ot);const pt=new A(new X(.2,.5,.052),l);pt.position.set(H*.17,.92,.265),pt.rotation.z=H*.08,this.mesh.add(pt)};d(-1),d(1);const f=new A(new X(.74,1.34,.06),c);f.position.set(0,1.26,-.3),f.castShadow=!0,this.mesh.add(f);const m=new A(new Dt(.52,.6,.4,12,1,!0),c);m.position.y=1.78,m.castShadow=!0,this.mesh.add(m);const v=new A(new We(.24,10,8),l);v.position.set(0,1.42,-.04),v.scale.set(1.1,.8,.7),this.mesh.add(v);const g=(H,ot)=>{const pt=new Pt,Lt=new A(new Dt(.022,.022,.17,7),l);pt.add(Lt);const Vt=new A(new Dt(.005,.005,.12,5),h);Vt.position.y=.14,pt.add(Vt),pt.position.set(0,ot,.06),pt.rotation.z=H,pt.rotation.x=.3,this.mesh.add(pt)};g(-.5,1.62),g(.4,1.52),g(-.2,1.4),g(.62,1.34),g(-.75,1.28),this.headPivot=new Pt,this.headPivot.position.set(0,2,0),this.mesh.add(this.headPivot);const p=new A(new We(.3,12,10),n);p.position.set(0,.28,-.08),p.scale.set(.86,1.35,1),p.castShadow=!0,this.headPivot.add(p);const b=new A(new X(.42,.07,.1),i);b.position.set(0,.4,-.26),b.rotation.x=-.25,this.headPivot.add(b),this.jaw=new A(new X(.3,.26,.3),o),this.jaw.position.set(0,-.06,-.22),this.jaw.castShadow=!0,this.headPivot.add(this.jaw);const E=new ds(.022,.075,4);for(let H=0;H<7;H++){const ot=-.115+H*.038,pt=new A(E,r);pt.position.set(ot,.12,-.31),pt.rotation.x=Math.PI,this.headPivot.add(pt);const Lt=new A(E,r);Lt.position.set(ot,-.02,-.33),this.headPivot.add(Lt)}const S=new We(.075,10,10);for(const H of[-.13,.13]){const ot=new A(new We(.1,8,8),i);ot.position.set(H,.33,-.28),ot.scale.set(1,1,.5),this.headPivot.add(ot);const pt=new A(S,a);pt.position.set(H,.33,-.33),pt.scale.set(.85,1.15,.85),this.headPivot.add(pt)}this.eyeLight=new Zs(16722458,2,14),this.eyeLight.position.set(0,.35,-.34),this.headPivot.add(this.eyeLight);const k=new ds(.032,.22,5),L=1.76,I=1.7,D=H=>{const ot=new Pt;ot.position.set(H*.5,L,.04),ot.rotation.z=H*.1;const pt=new A(new Dt(.085,.115,I,8),n);pt.position.y=-I/2,pt.castShadow=!0,ot.add(pt);const Lt=new A(new We(.1,8,7),i);Lt.position.y=-I*.52,ot.add(Lt);for(const Vt of[-.055,0,.055]){const Qt=new A(k,r);Qt.position.set(Vt,-I-.08,.02),Qt.rotation.x=Math.PI,ot.add(Qt)}return this.mesh.add(ot),ot};this.leftArmPivot=D(-1),this.rightArmPivot=D(1);const w=new Pt;w.position.set(.02,-.72,.08);const _=new A(new Dt(.17,.17,.028,18),h);_.rotation.z=Math.PI/2,_.position.set(.05,-.12,0),w.add(_);const P=new A(new X(.22,.06,.07),l);P.position.set(-.16,-.1,0),w.add(P),this.boneSaw=w,this.rightArmPivot.add(w);const V=new A(new je(.27,.018,5,14),c);V.position.set(0,.3,.12),V.rotation.y=Math.PI/2,V.rotation.z=.25,this.headPivot.add(V);const N=new A(new Dt(.085,.085,.03,12),h);N.rotation.x=Math.PI/2,N.position.set(0,.5,-.24),this.headPivot.add(N);const Z=new A(new je(.29,.02,5,14),c);Z.rotation.y=Math.PI/2,Z.position.y=.48,this.headPivot.add(Z);const st=new Zs(13625087,.7,5);st.position.set(0,.5,-.3),this.headPivot.add(st),this.mirrorLight=st;const tt=.92,rt=H=>{const ot=new Pt;ot.position.set(H*.19,tt,0);const pt=new A(new Dt(.11,.13,tt,8),n);pt.position.y=-tt/2,pt.castShadow=!0,ot.add(pt);const Lt=new A(new X(.19,.11,.34),i);return Lt.position.set(0,-tt+.03,-.06),ot.add(Lt),this.mesh.add(ot),ot};this.leftLegPivot=rt(-1),this.rightLegPivot=rt(1),this.mesh.position.copy(this.position),this.buildPatrolPoints()}buildPatrolPoints(){const t=[];for(let e=1;e<this.grid.length-1;e++)for(let n=1;n<this.grid[0].length-1;n++){if(this.grid[e][n]!==1)continue;(wn(this.grid,e-1,n)?1:0)+(wn(this.grid,e+1,n)?1:0)+(wn(this.grid,e,n-1)?1:0)+(wn(this.grid,e,n+1)?1:0)<=2&&t.push(new C(n*j,1.5,e*j))}t.length===0&&t.push(new C(8*j,1.5,8*j));for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}this.patrolPoints=t.slice(0,Math.min(t.length,8)),this.patrolIndex=0}addToScene(t){t.add(this.mesh)}setVisible(t){this.mesh.visible=t}setColliders(t){this.colliders=t}resolveColliders(){for(const t of this.colliders){const e=this.position.x-t.x,n=this.position.z-t.z,i=t.r+Dy,o=e*e+n*n;if(o>=i*i)continue;const r=Math.sqrt(o);if(r<1e-4){this.position.x+=i;continue}const a=(i-r)/r,c=this.position.x+e*a,l=this.position.z+n*a;wn(this.grid,Math.round(this.position.z/j),Math.round(c/j))&&(this.position.x=c),wn(this.grid,Math.round(l/j),Math.round(this.position.x/j))&&(this.position.z=l)}}hasLineOfSight(t){const e=t.x-this.position.x,n=t.z-this.position.z,i=Math.hypot(e,n);if(i>Ry*this.aggression)return!1;const o=Math.ceil(i/(j*.4)),r=e/o,a=n/o;for(let c=1;c<o;c++){const l=Math.round((this.position.x+r*c)/j),h=Math.round((this.position.z+a*c)/j);if(h<0||h>=this.grid.length||l<0||l>=this.grid[0].length||this.grid[h][l]===0)return!1}return!0}gridOf(t){return{row:Math.round(t.z/j),col:Math.round(t.x/j)}}repath(t){const e=this.gridOf(this.position),n=this.gridOf(t),i=by(this.grid,e,n);i.length>0&&(this.path=i,this.pathIndex=0)}distanceTo(t){return this.position.distanceTo(t)}get currentPosition(){return this.position}get isChasing(){return this.state==="chase"&&this.stunTimer<=0}get stateName(){return this.state}setAggression(t){this.aggression=Math.max(.7,Math.min(1.6,t))}stun(t){this.stunTimer=Math.max(this.stunTimer,t),this.state="investigate",this.memoryTimer=Bo,this.lastKnown.copy(this.position),this.path=[],this.pathIndex=0}goInvestigateAt(t){this.state="investigate",this.memoryTimer=Bo*1.5,this.lastKnown.copy(t),this.path=[],this.pathIndex=0,this.stunTimer=0}update(t,e,n,i=!1){var v;this.growlCooldown=Math.max(0,this.growlCooldown-t);const o=Math.hypot(e.x-this.position.x,e.z-this.position.z);if(this.stunTimer>0)return this.stunTimer-=t,this.animate(t,.4),this.mesh.position.copy(this.position),{caught:!1};const r=i?!1:this.hasLineOfSight(e),c=o<(i?2.2:n?Cy:Ly);if(r)this.state!=="chase"&&this.growlCooldown<=0&&(this.growlCooldown=7,(v=this.onGrowl)==null||v.call(this)),this.state="chase",this.lastKnown.copy(e),this.memoryTimer=Py;else if(this.state==="chase")this.memoryTimer-=t,this.memoryTimer<=0&&(this.state="investigate",this.memoryTimer=Bo);else if(c)this.lastKnown.copy(e),this.state="investigate",this.memoryTimer=Bo;else if(this.state==="investigate"){this.memoryTimer-=t;const g=Math.hypot(this.position.x-this.lastKnown.x,this.position.z-this.lastKnown.z)<1.1;(this.memoryTimer<=0||g)&&(this.state="patrol",this.path=[])}if(this.state==="chase")this.target.copy(e);else if(this.state==="investigate")this.target.copy(this.lastKnown);else{const g=this.patrolPoints[this.patrolIndex]??this.position;this.target.copy(g),this.position.distanceTo(g)<1.2&&(this.patrolIndex=(this.patrolIndex+1)%this.patrolPoints.length,this.path=[])}this.target.y=this.position.y;const h=(this.state==="chase"?Ay:this.state==="investigate"?Ey:Ty)*this.aggression*(1+Math.sin(this.animPhase*.3)*.06);if(this.repathTimer-=t,this.repathTimer<=0){this.repathTimer=Uy;const g=this.gridOf(this.target),p=this.gridOf(this.position),b=this.path.some(S=>S.row===g.row&&S.col===g.col),E=g.row===p.row&&g.col===p.col;!b&&!E&&this.repath(this.target)}let u=this.target.x-this.position.x,d=this.target.z-this.position.z;const f=this.path[this.pathIndex];if(f){const g=f.col*j,p=f.row*j;u=g-this.position.x,d=p-this.position.z,Math.hypot(u,d)<Oy&&this.pathIndex++}const m=Math.hypot(u,d);if(m>.01){const g=u/m,p=d/m,b=this.position.x+g*h*t,E=this.position.z+p*h*t;wn(this.grid,Math.round(E/j),Math.round(b/j))?(this.position.x=b,this.position.z=E,this.resolveColliders()):(this.path=[],this.pathIndex=0);const S=Math.atan2(g,p);this.mesh.rotation.y=Ny(this.mesh.rotation.y,S,Math.min(1,t*7))}return this.animate(t,this.state==="chase"?1:.45),this.mesh.position.copy(this.position),{caught:o<Iy}}animate(t,e){this.animPhase+=t*(6+e*6);const n=Math.sin(this.animPhase)*(.04+e*.1),i=Math.sin(this.animPhase)*(.25+e*.45);if(this.torso.position.y=1.22+n,this.torso.rotation.z=Math.sin(this.animPhase*.5)*(.02+e*.05),this.torso.rotation.x=.2+e*.13,this.headPivot.position.y=2+n,this.headPivot.rotation.z=Math.sin(this.animPhase*.35)*(.04+e*.07),this.headPivot.rotation.x=Math.abs(Math.sin(this.animPhase*.5))*.06*e,this.jaw.rotation.x=.1+e*.18+Math.abs(Math.sin(this.animPhase*.85))*.09,this.leftArmPivot.rotation.x=i,this.rightArmPivot.rotation.x=-i,this.leftLegPivot.rotation.x=-i*.8,this.rightLegPivot.rotation.x=i*.8,this.boneSaw&&(this.boneSaw.rotation.x=-i*.7,this.boneSaw.rotation.z=Math.sin(this.animPhase*.5)*.1),this.mirrorLight){const o=Math.random()<.06?.15:.55+Math.sin(this.animPhase*2.3)*.2;this.mirrorLight.intensity=o+e*.5}this.eyeLight.intensity=.6+e*1.6+Math.sin(this.animPhase*3)*.25*e}reset(t){this.position.copy(t),this.mesh.position.copy(this.position),this.state="patrol",this.path=[],this.pathIndex=0,this.repathTimer=0,this.memoryTimer=0,this.stunTimer=0,this.growlCooldown=0,this.patrolIndex=0,this.aggression=1,this.animPhase=0,this.mesh.rotation.set(0,0,0),this.torso.rotation.set(.2,0,0),this.headPivot.rotation.set(0,0,0),this.leftArmPivot.rotation.set(0,0,-.1),this.rightArmPivot.rotation.set(0,0,.1),this.leftLegPivot.rotation.set(0,0,0),this.rightLegPivot.rotation.set(0,0,0),this.patrolPoints.length===0&&this.buildPatrolPoints()}}const Go=680,an=26,Ho=3.4,Vo=150,cn=15,th=7.5,Fs=1400,Wo=24,eh=16;class Fy{constructor(t){R(this,"scene");R(this,"ambientLight");R(this,"ambientFloor",0);R(this,"flickerLights",[]);R(this,"fluorescents",[]);R(this,"fogDensity",.08);R(this,"danger",0);R(this,"powerOn",!1);R(this,"powerLevel",0);R(this,"blackoutUntil",0);R(this,"eventTimer",0);R(this,"nextEventTime",18);R(this,"onJumpscare",()=>{});R(this,"onCreepySound",()=>{});R(this,"flashlight",null);R(this,"flashlightTarget",null);R(this,"fillLight",null);R(this,"dust",null);R(this,"dustSpeeds",null);R(this,"dustEnabled",!0);R(this,"motes",null);R(this,"moteSpeeds",null);R(this,"beam",null);R(this,"beamMaterials",[]);R(this,"beamTime",0);R(this,"onFluorescentBuzz",null);R(this,"buzzCooldown",0);R(this,"outdoors",!1);R(this,"outdoorLevel",0);R(this,"rain",null);R(this,"rainSpeeds",null);R(this,"rainLengths",null);R(this,"rainEnabled",!0);R(this,"rainLevel",0);R(this,"lightning",0);R(this,"lightningTimer",6);R(this,"onLightning",null);this.scene=t,this.ambientLight=new kg(4016732,.95),t.fog=new Xs(659222,this.fogDensity),t.background=Tl(),this.attachToScene(),this.createDust(),this.createMotes(),this.createRain()}setCallbacks(t,e){this.onJumpscare=t,this.onCreepySound=e}setOutdoors(t){this.outdoors=t}setRainEnabled(t){this.rainEnabled=t,this.rain&&!t&&(this.rain.visible=!1)}attachToScene(){this.ambientLight.parent||this.scene.add(this.ambientLight),this.dust&&!this.dust.parent&&this.scene.add(this.dust),this.motes&&!this.motes.parent&&this.scene.add(this.motes),this.rain&&!this.rain.parent&&this.scene.add(this.rain),this.scene.background instanceof Ge||(this.scene.background=Tl())}addFlickerLight(t,e){t.intensity=e,t.userData.baseIntensity=e,this.flickerLights.push(t),this.scene.add(t)}createWallLight(t,e,n,i=16755302,o=!1){const r=new Zs(i,.8,8);return r.position.set(t,e,n),r.castShadow=o,o&&(r.shadow.mapSize.width=256,r.shadow.mapSize.height=256,r.shadow.bias=-.01),r}setFluorescentMaterials(t){this.fluorescents=[...t]}createFlashlight(t){this.flashlight&&t.remove(this.flashlight),this.flashlightTarget&&t.remove(this.flashlightTarget),this.fillLight&&t.remove(this.fillLight);const e=new zg(16774368,5.5,44,Math.PI/3.2,.55,.85);e.castShadow=!0,e.shadow.mapSize.width=512,e.shadow.mapSize.height=512,e.shadow.bias=-.0018,e.position.set(.16,-.12,0),t.add(e),e.target.position.set(0,0,-1),t.add(e.target);const n=new Zs(13162734,1.15,11,1.8);return t.add(n),this.flashlight=e,this.flashlightTarget=e.target,this.fillLight=n,this.createBeam(t),e}createBeam(t){this.beam&&t.remove(this.beam),this.beamMaterials=[];const e=new Pt,n=[{radius:2.5,length:th,alpha:.2},{radius:4,length:th*.72,alpha:.09}];for(const i of n){const o=new ds(i.radius,i.length,18,5,!0);o.rotateX(Math.PI/2),o.translate(0,0,-i.length/2);const r=o.getAttribute("position"),a=new Float32Array(r.count*4);for(let h=0;h<r.count;h++){const u=r.getZ(h),d=Math.max(0,Math.min(1,-u/i.length)),f=.85+Math.sin(u*1.7+r.getX(h)*2.3)*.15;a[h*4]=1,a[h*4+1]=.96,a[h*4+2]=.88,a[h*4+3]=Math.pow(1-d,1.6)*d*4*f}o.setAttribute("color",new Be(a,4));const c=new Qa({vertexColors:!0,transparent:!0,opacity:i.alpha,depthWrite:!1,blending:Vs,side:nn,fog:!1});this.beamMaterials.push(c);const l=new A(o,c);l.renderOrder=2,e.add(l)}e.position.set(.16,-.12,0),e.visible=!1,t.add(e),this.beam=e}get flashlightRef(){return this.flashlight}setDanger(t){this.danger=Math.max(0,Math.min(1,t))}setPower(t){this.powerOn=t}blackout(t){this.blackoutUntil=performance.now()+t}setDustEnabled(t){this.dustEnabled=t,this.dust&&(this.dust.visible=t),this.motes&&(this.motes.visible=t)}setAmbientFloor(t){this.ambientFloor=Math.max(0,t),performance.now()>=this.blackoutUntil&&this.ambientLight.intensity<this.ambientFloor&&(this.ambientLight.intensity=this.ambientFloor)}update(t,e,n){var g,p;const i=performance.now()<this.blackoutUntil,o=this.powerOn&&!i?1:0;this.powerLevel+=(o-this.powerLevel)*Math.min(1,t*(i?3.5:.55));const r=.55+this.powerLevel*.6;this.outdoorLevel+=((this.outdoors?1:0)-this.outdoorLevel)*Math.min(1,t*1.6),this.rainLevel+=((this.outdoors&&this.rainEnabled?1:0)-this.rainLevel)*Math.min(1,t*1.2);for(const b of this.flickerLights){const E=(b.userData.baseIntensity||.5)*r;Math.random()<.02?b.intensity=E*(.25+Math.random()*.5):Math.random()<.05?b.intensity=E*(.85+Math.random()*.4):b.intensity+=(E-b.intensity)*t*8}const a=.22+this.powerLevel*1.3;this.buzzCooldown-=t;for(const b of this.fluorescents)Math.random()<.012?(b.emissiveIntensity=a*.08,this.buzzCooldown<=0&&(this.buzzCooldown=2.5+Math.random()*5,(g=this.onFluorescentBuzz)==null||g.call(this))):Math.random()<.03?b.emissiveIntensity=a*1.6:b.emissiveIntensity+=(a-b.emissiveIntensity)*t*6;const c=.024-this.powerLevel*.01+e*.008+this.danger*.018,l=.018+this.danger*.015,h=c+(l-c)*this.outdoorLevel;if(this.fogDensity+=(h-this.fogDensity)*t*.7,this.scene.fog instanceof Xs){this.scene.fog.density=this.fogDensity;const b=this.scene.fog.color,E=.04+this.danger*.08,S=.045,k=.06+this.danger*.03,L=.07+this.danger*.06,I=.085,D=.11+this.danger*.02;b.setRGB(E+(L-E)*this.outdoorLevel,S+(I-S)*this.outdoorLevel,k+(D-k)*this.outdoorLevel)}this.rainLevel>.4&&(this.lightningTimer-=t,this.lightningTimer<=0&&(this.lightningTimer=6+Math.random()*13,this.lightning=1,(p=this.onLightning)==null||p.call(this))),this.lightning>0&&(this.lightning=Math.max(0,this.lightning-t*3.2));const u=this.lightning>.55?this.lightning:this.lightning*.55,d=.95+this.powerLevel*.35,f=1.1+this.powerLevel*.15,m=d+(f-d)*this.outdoorLevel,v=Math.sin(performance.now()*7e-4)*.03+this.danger*.07;if(this.ambientLight.intensity=(i?.04:Math.max(this.ambientFloor,m+v))+u*2.6,this.ambientLight.color.setRGB(.06+this.outdoorLevel*.04+u*.5,.1+this.outdoorLevel*.06+u*.55,.15+this.outdoorLevel*.12+u*.7),this.beam){const b=this.flashlight?this.flashlight.intensity:0;if(this.beam.visible=b>.05,this.beam.visible){this.beamTime+=t;const E=Math.min(1,b/5.5)*(this.outdoors?.35:1),S=.92+Math.sin(this.beamTime*5.5)*.08;for(let k=0;k<this.beamMaterials.length;k++){const L=k===0?.2:.09;this.beamMaterials[k].opacity=L*E*S}}}this.updateDust(t,n),this.updateMotes(t,n),this.updateRain(t,n),this.eventTimer+=t,this.eventTimer>=this.nextEventTime&&(this.eventTimer=0,this.nextEventTime=14+Math.random()*22,this.danger<.4&&this.triggerRandomEvent())}createDust(){const t=new Float32Array(Go*3);this.dustSpeeds=new Float32Array(Go);for(let i=0;i<Go;i++)t[i*3]=(Math.random()-.5)*an*2,t[i*3+1]=Math.random()*Ho,t[i*3+2]=(Math.random()-.5)*an*2,this.dustSpeeds[i]=.02+Math.random()*.09;const e=new Ae;e.setAttribute("position",new Be(t,3));const n=new sr({map:El(),color:15788244,size:.11,sizeAttenuation:!0,transparent:!0,opacity:.55,depthWrite:!1,blending:Vs});this.dust=new Ga(e,n),this.dust.frustumCulled=!1,this.dust.visible=this.dustEnabled,this.scene.add(this.dust)}updateDust(t,e){if(!this.dust||!this.dustSpeeds||!this.dustEnabled)return;const n=this.dust.geometry.getAttribute("position"),i=n.array,o=this.dust.position;for(let r=0;r<Go;r++){const a=this.dustSpeeds[r];i[r*3+1]+=a*t,i[r*3]+=Math.sin((i[r*3+1]+r)*.5)*t*.12,i[r*3+1]>Ho&&(i[r*3+1]=0,i[r*3]=(Math.random()-.5)*an*2,i[r*3+2]=(Math.random()-.5)*an*2),i[r*3]-o.x>an&&(i[r*3]-=an*2),i[r*3]-o.x<-an&&(i[r*3]+=an*2),i[r*3+2]-o.z>an&&(i[r*3+2]-=an*2),i[r*3+2]-o.z<-an&&(i[r*3+2]+=an*2)}n.needsUpdate=!0,e&&this.dust.position.set(e.position.x,0,e.position.z)}createMotes(){const t=new Float32Array(Vo*3);this.moteSpeeds=new Float32Array(Vo);for(let i=0;i<Vo;i++)t[i*3]=(Math.random()-.5)*cn*2,t[i*3+1]=Math.random()*Ho,t[i*3+2]=(Math.random()-.5)*cn*2,this.moteSpeeds[i]=.05+Math.random()*.16;const e=new Ae;e.setAttribute("position",new Be(t,3));const n=new sr({map:El(),color:16774104,size:.19,sizeAttenuation:!0,transparent:!0,opacity:.7,depthWrite:!1,blending:Vs});this.motes=new Ga(e,n),this.motes.frustumCulled=!1,this.motes.visible=this.dustEnabled,this.scene.add(this.motes)}updateMotes(t,e){if(!this.motes||!this.moteSpeeds||!this.dustEnabled)return;const n=this.motes.geometry.getAttribute("position"),i=n.array,o=this.motes.position;for(let c=0;c<Vo;c++){const l=this.moteSpeeds[c];i[c*3+1]+=l*t,i[c*3]+=Math.sin((i[c*3+1]+c*.7)*.35)*t*.2,i[c*3+2]+=Math.cos((i[c*3+1]+c*1.3)*.3)*t*.15,i[c*3+1]>Ho&&(i[c*3+1]=0,i[c*3]=(Math.random()-.5)*cn*2,i[c*3+2]=(Math.random()-.5)*cn*2),i[c*3]-o.x>cn&&(i[c*3]-=cn*2),i[c*3]-o.x<-cn&&(i[c*3]+=cn*2),i[c*3+2]-o.z>cn&&(i[c*3+2]-=cn*2),i[c*3+2]-o.z<-cn&&(i[c*3+2]+=cn*2)}n.needsUpdate=!0;const r=this.motes.material,a=performance.now()*.001;r.opacity=.45+Math.sin(a*1.7)*.18+Math.sin(a*4.3)*.1,r.size=.17+Math.sin(a*2.9)*.035,e&&this.motes.position.set(e.position.x,0,e.position.z)}createRain(){const t=new Float32Array(Fs*6);this.rainSpeeds=new Float32Array(Fs),this.rainLengths=new Float32Array(Fs);for(let i=0;i<Fs;i++){const o=(Math.random()-.5)*Wo*2,r=Math.random()*eh,a=(Math.random()-.5)*Wo*2,c=.5+Math.random()*.9;t[i*6]=o,t[i*6+1]=r,t[i*6+2]=a,t[i*6+3]=o+.05,t[i*6+4]=r-c,t[i*6+5]=a,this.rainSpeeds[i]=15+Math.random()*12,this.rainLengths[i]=c}const e=new Ae;e.setAttribute("position",new Be(t,3));const n=new Bh({color:11058388,transparent:!0,opacity:.3,depthWrite:!1,fog:!1});this.rain=new Mg(e,n),this.rain.frustumCulled=!1,this.rain.visible=!1,this.scene.add(this.rain)}updateRain(t,e){if(!this.rain||!this.rainSpeeds||!this.rainLengths)return;if(this.rainLevel<.02||!e){this.rain.visible=!1;return}this.rain.visible=!0;const n=this.rain.material;n.opacity=.3*this.rainLevel;const i=this.rain.geometry.getAttribute("position"),o=i.array,r=1.6,a=this.rain.position;for(let c=0;c<Fs;c++){const h=this.rainSpeeds[c]*t;if(o[c*6+1]-=h,o[c*6+4]-=h,o[c*6]+=r*t,o[c*6+3]+=r*t,o[c*6+4]<0){const u=a.x+(Math.random()-.5)*Wo*2,d=a.z+(Math.random()-.5)*Wo*2,f=eh*(.6+Math.random()*.4);o[c*6]=u,o[c*6+1]=f,o[c*6+2]=d,o[c*6+3]=u+.05,o[c*6+4]=f-this.rainLengths[c],o[c*6+5]=d}}i.needsUpdate=!0,this.rain.position.set(e.position.x,0,e.position.z)}triggerRandomEvent(){const t=Math.random();if(t<.35){this.onCreepySound();const e=this.ambientLight.intensity;this.ambientLight.intensity=0,window.setTimeout(()=>{this.ambientLight.intensity=e*.4,window.setTimeout(()=>{this.ambientLight.intensity=e},450)},280)}else if(t<.65)this.onCreepySound();else if(t<.85){for(const e of this.flickerLights){const n=e.userData.baseIntensity||1;e.intensity=n*3,window.setTimeout(()=>{e.intensity=0,window.setTimeout(()=>{e.intensity=n},180)},90)}this.onCreepySound()}else this.onJumpscare()}reset(){var t;this.eventTimer=0,this.nextEventTime=18,this.fogDensity=.08,this.danger=0,this.powerOn=!1,this.powerLevel=0,this.blackoutUntil=0,this.outdoors=!1,this.outdoorLevel=0,this.rainLevel=0,this.lightning=0,this.lightningTimer=6,this.scene.fog instanceof Xs&&(this.scene.fog.density=this.fogDensity,this.scene.fog.color.set(659222));for(const e of this.flickerLights)(t=e.parent)==null||t.remove(e);this.flickerLights=[],this.fluorescents=[],this.ambientLight.intensity=.6,this.ambientLight.color.set(2767440),this.rain&&(this.rain.visible=!1,this.rain.position.set(0,0,0)),this.dust&&this.dust.position.set(0,0,0),this.motes&&this.motes.position.set(0,0,0),this.buzzCooldown=0,this.beamTime=0,this.attachToScene()}}class ky{constructor(){R(this,"ctx",null);R(this,"masterGain",null);R(this,"ambienceGain",null);R(this,"ambienceOsc",null);R(this,"ambienceOsc2",null);R(this,"windSource",null);R(this,"rainSource",null);R(this,"rainGain",null);R(this,"isInitialized",!1);R(this,"ambienceRunning",!1);R(this,"muted",!1);R(this,"volume",.5)}async init(){this.isInitialized||(this.ctx=new AudioContext,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.muted?0:this.volume,this.masterGain.connect(this.ctx.destination),this.ambienceGain=this.ctx.createGain(),this.ambienceGain.gain.value=0,this.ambienceGain.connect(this.masterGain),this.isInitialized=!0)}resume(){var t;((t=this.ctx)==null?void 0:t.state)==="suspended"&&this.ctx.resume()}get isRunning(){var t;return((t=this.ctx)==null?void 0:t.state)==="running"}unlock(){const t=this.ctx;return t?t.state==="running"?Promise.resolve(!0):t.resume().then(()=>t.state==="running",()=>!1):Promise.resolve(!1)}suspend(){var t;((t=this.ctx)==null?void 0:t.state)==="running"&&this.ctx.suspend()}setMuted(t){this.muted=t,this.masterGain&&(this.masterGain.gain.value=t?0:this.volume)}get isMuted(){return this.muted}setVolume(t){this.volume=Math.max(0,Math.min(1,t)),this.masterGain&&!this.muted&&(this.masterGain.gain.value=this.volume)}startAmbience(){!this.ctx||!this.ambienceGain||(this.ambienceRunning||(this.buildAmbienceGraph(),this.ambienceRunning=!0),this.ambienceGain.gain.setTargetAtTime(.3,this.ctx.currentTime,1.2))}buildAmbienceGraph(){if(!this.ctx||!this.ambienceGain)return;this.ambienceOsc=this.ctx.createOscillator(),this.ambienceOsc.type="sawtooth",this.ambienceOsc.frequency.value=38;const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.value=190,this.ambienceOsc.connect(t),t.connect(this.ambienceGain),this.ambienceOsc.start(),this.ambienceOsc2=this.ctx.createOscillator(),this.ambienceOsc2.type="sine",this.ambienceOsc2.frequency.value=213;const e=this.ctx.createBiquadFilter();e.type="bandpass",e.frequency.value=300,e.Q.value=22;const n=this.ctx.createGain();n.gain.value=.09,this.ambienceOsc2.connect(e),e.connect(n),n.connect(this.ambienceGain),this.ambienceOsc2.start();const o=this.ctx.createBuffer(1,this.ctx.sampleRate*4,this.ctx.sampleRate),r=o.getChannelData(0);for(let l=0;l<r.length;l++)r[l]=(Math.random()*2-1)*.4;this.windSource=this.ctx.createBufferSource(),this.windSource.buffer=o,this.windSource.loop=!0;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=340;const c=this.ctx.createGain();c.gain.value=.45,this.windSource.connect(a),a.connect(c),c.connect(this.ambienceGain),this.windSource.start()}stopAmbience(){!this.ctx||!this.ambienceGain||this.ambienceGain.gain.setTargetAtTime(0,this.ctx.currentTime,1)}playCreepySound(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.createOscillator(),e=this.ctx.createGain(),n=this.ctx.createBiquadFilter();t.type=Math.random()>.5?"sine":"triangle",t.frequency.value=100+Math.random()*400,n.type="bandpass",n.frequency.value=200+Math.random()*600,n.Q.value=10+Math.random()*30,e.gain.value=0,t.connect(n),n.connect(e),e.connect(this.masterGain);const i=this.ctx.currentTime;e.gain.setTargetAtTime(.07+Math.random()*.05,i,.3),e.gain.setTargetAtTime(0,i+1+Math.random()*2,.5),t.frequency.setTargetAtTime(t.frequency.value+(Math.random()-.5)*100,i+.5,1),t.start(i),t.stop(i+4)}playGrowl(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="sawtooth",e.frequency.setValueAtTime(120,t),e.frequency.exponentialRampToValueAtTime(46,t+.9);const n=this.ctx.createOscillator();n.type="sine",n.frequency.value=17;const i=this.ctx.createGain();i.gain.value=22,n.connect(i),i.connect(e.frequency);const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.value=520;const r=this.ctx.createGain();r.gain.value=0,r.gain.setTargetAtTime(.35,t,.04),r.gain.setTargetAtTime(0,t+.85,.35),e.connect(o),o.connect(r),r.connect(this.masterGain),e.start(t),n.start(t),e.stop(t+1.6),n.stop(t+1.6)}playDamage(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="triangle",e.frequency.setValueAtTime(180,t),e.frequency.exponentialRampToValueAtTime(38,t+.35);const n=this.ctx.createGain();n.gain.value=.45,n.gain.setTargetAtTime(0,t+.25,.15),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.7);const i=Math.floor(this.ctx.sampleRate*.25),o=this.ctx.createBuffer(1,i,this.ctx.sampleRate),r=o.getChannelData(0);for(let l=0;l<i;l++)r[l]=(Math.random()*2-1)*Math.exp(-l/(i*.12));const a=this.ctx.createBufferSource();a.buffer=o;const c=this.ctx.createGain();c.gain.value=.3,a.connect(c),c.connect(this.masterGain),a.start(t)}playFootstep(t=.3){if(!this.ctx||!this.masterGain)return;const e=Math.floor(this.ctx.sampleRate*.12),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let c=0;c<e;c++)i[c]=(Math.random()*2-1)*Math.exp(-c/(e*.09));const o=this.ctx.createBufferSource();o.buffer=n;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=380+Math.random()*220;const a=this.ctx.createGain();a.gain.value=t,o.connect(r),r.connect(a),a.connect(this.masterGain),o.start()}playElectricBuzz(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=.16+Math.random()*.14,n=this.ctx.createOscillator();n.type="square",n.frequency.value=96+Math.random()*14;const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.value=1400;const o=this.ctx.createGain();o.gain.value=0,o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(.06,t+.012),o.gain.linearRampToValueAtTime(.02,t+e*.6),o.gain.linearRampToValueAtTime(0,t+e),n.connect(i),i.connect(o),o.connect(this.masterGain),n.start(t),n.stop(t+e);const r=5+Math.floor(Math.random()*5);for(let a=0;a<r;a++){const c=t+Math.random()*e,l=this.ctx.createOscillator(),h=this.ctx.createGain();l.type="sawtooth",l.frequency.value=900+Math.random()*2600,h.gain.value=0,h.gain.setValueAtTime(.035,c),h.gain.exponentialRampToValueAtTime(1e-4,c+.02),l.connect(h),h.connect(this.masterGain),l.start(c),l.stop(c+.03)}}playGlassShatter(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=Math.floor(this.ctx.sampleRate*.35),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let c=0;c<e;c++)i[c]=(Math.random()*2-1)*Math.exp(-c/(e*.14));const o=this.ctx.createBufferSource();o.buffer=n;const r=this.ctx.createBiquadFilter();r.type="highpass",r.frequency.value=3e3;const a=this.ctx.createGain();a.gain.value=.5,o.connect(r),r.connect(a),a.connect(this.masterGain),o.start(t);for(let c=0;c<9;c++){const l=this.ctx.createOscillator(),h=this.ctx.createGain();l.type="triangle",l.frequency.value=2400+Math.random()*3600,h.gain.value=0,l.connect(h),h.connect(this.masterGain);const u=t+Math.random()*.28;h.gain.setValueAtTime(1e-4,u),h.gain.exponentialRampToValueAtTime(.06+Math.random()*.05,u+.008),h.gain.exponentialRampToValueAtTime(1e-4,u+.12+Math.random()*.25),l.start(u),l.stop(u+.5)}}playNote(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=Math.floor(this.ctx.sampleRate*.3),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let c=0;c<e;c++)i[c]=(Math.random()*2-1)*(1-c/e);const o=this.ctx.createBufferSource();o.buffer=n;const r=this.ctx.createBiquadFilter();r.type="highpass",r.frequency.value=2200;const a=this.ctx.createGain();a.gain.value=.16,o.connect(r),r.connect(a),a.connect(this.masterGain),o.start(t),[784,1046].forEach((c,l)=>{const h=this.ctx.createOscillator(),u=this.ctx.createGain();h.type="sine",h.frequency.value=c,u.gain.value=0,h.connect(u),u.connect(this.masterGain);const d=t+.08+l*.12;u.gain.setTargetAtTime(.08,d,.02),u.gain.setTargetAtTime(0,d+.3,.1),h.start(d),h.stop(d+.7)})}playKeyPickup(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime;[523,659,784,1047].forEach((e,n)=>{const i=this.ctx.createOscillator(),o=this.ctx.createGain();i.type="sine",i.frequency.value=e,o.gain.value=0,i.connect(o),o.connect(this.masterGain);const r=t+n*.1;o.gain.setTargetAtTime(.15,r,.01),o.gain.setTargetAtTime(0,r+.15,.05),i.start(r),i.stop(r+.3)})}playJumpscare(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=1.5,n=this.ctx.createOscillator();n.type="sawtooth",n.frequency.value=80;const i=this.ctx.createWaveShaper(),o=new Float32Array(256);for(let d=0;d<256;d++){const f=d/128-1;o[d]=(Math.PI+100)*f/(Math.PI+100*Math.abs(f))}i.curve=o;const r=this.ctx.createGain();r.gain.value=.4,n.connect(i),i.connect(r),r.connect(this.masterGain),n.frequency.setTargetAtTime(210,t+.1,.2),r.gain.setTargetAtTime(0,t+.8,.3),n.start(t),n.stop(t+e);const a=Math.floor(this.ctx.sampleRate*e),c=this.ctx.createBuffer(1,a,this.ctx.sampleRate),l=c.getChannelData(0);for(let d=0;d<a;d++)l[d]=Math.random()*2-1;const h=this.ctx.createBufferSource();h.buffer=c;const u=this.ctx.createGain();u.gain.value=.2,u.gain.setTargetAtTime(0,t+.5,.3),h.connect(u),u.connect(this.masterGain),h.start(t),h.stop(t+e)}playDoorUnlock(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="square",e.frequency.value=1e3,n.gain.value=.15,e.connect(n),n.connect(this.masterGain),n.gain.setTargetAtTime(0,t+.02,.01),e.start(t),e.stop(t+.05);const i=this.ctx.createOscillator(),o=this.ctx.createGain();i.type="sawtooth",i.frequency.value=150,o.gain.value=.1,i.connect(o),o.connect(this.masterGain),i.frequency.setTargetAtTime(80,t+.1,.5),o.gain.setTargetAtTime(0,t+.3,.3),i.start(t+.05),i.stop(t+1.5)}playDoorSwing(t){if(!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,n=t?.55:.42,i=this.ctx.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(t?110:210,e),i.frequency.linearRampToValueAtTime(t?215:105,e+n);const o=this.ctx.createOscillator();o.type="sine",o.frequency.value=t?9:13;const r=this.ctx.createGain();r.gain.value=22,o.connect(r),r.connect(i.frequency);const a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.value=620,a.Q.value=3.2;const c=this.ctx.createGain();c.gain.value=0,i.connect(a),a.connect(c),c.connect(this.masterGain),c.gain.setTargetAtTime(t?.11:.09,e,.04),c.gain.setTargetAtTime(0,e+n-.08,.05),i.start(e),i.stop(e+n),o.start(e),o.stop(e+n);const l=this.ctx.createOscillator();l.type="square",l.frequency.setValueAtTime(190,e+n),l.frequency.exponentialRampToValueAtTime(58,e+n+.1);const h=this.ctx.createGain();h.gain.value=0,l.connect(h),h.connect(this.masterGain),h.gain.setTargetAtTime(.14,e+n,.006),h.gain.setTargetAtTime(0,e+n+.04,.04),l.start(e+n),l.stop(e+n+.3)}playDrawerSlide(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=.45,n=Math.floor(this.ctx.sampleRate*e),i=this.ctx.createBuffer(1,n,this.ctx.sampleRate),o=i.getChannelData(0);for(let l=0;l<n;l++){const h=Math.random()<.35?1:.45;o[l]=(Math.random()*2-1)*h}const r=this.ctx.createBufferSource();r.buffer=i,r.playbackRate.value=.8;const a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(340,t),a.frequency.linearRampToValueAtTime(760,t+e),a.Q.value=1.1;const c=this.ctx.createGain();c.gain.value=0,r.connect(a),a.connect(c),c.connect(this.masterGain),c.gain.setTargetAtTime(.09,t,.03),c.gain.setTargetAtTime(0,t+e-.06,.03),r.start(t),r.stop(t+e)}playLockerDoor(t){if(!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(t?420:560,e),n.frequency.linearRampToValueAtTime(t?700:380,e+.3);const i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.value=1400,i.Q.value=5;const o=this.ctx.createGain();o.gain.value=0,n.connect(i),i.connect(o),o.connect(this.masterGain),o.gain.setTargetAtTime(.05,e,.05),o.gain.setTargetAtTime(0,e+.24,.05),n.start(e),n.stop(e+.34);for(const[r,a]of[[1,.13],[2.4,.06],[4.1,.03]]){const c=this.ctx.createOscillator();c.type="sine",c.frequency.value=232*r;const l=this.ctx.createGain();l.gain.value=0,c.connect(l),l.connect(this.masterGain),l.gain.setTargetAtTime(a,e+.26,.004),l.gain.setTargetAtTime(0,e+.3,.13),c.start(e+.26),c.stop(e+.9)}}playElevatorGate(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=Math.floor(this.ctx.sampleRate*.55),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let h=0;h<e;h++){const u=h/e;i[h]=(Math.random()*2-1)*(.4+.6*Math.sin(u*Math.PI))}const o=this.ctx.createBufferSource();o.buffer=n,o.playbackRate.value=1.4;const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.value=2400,r.Q.value=1.2;const a=this.ctx.createGain();a.gain.value=.18,o.connect(r),r.connect(a),a.connect(this.masterGain),o.start(t),o.stop(t+.55);const c=this.ctx.createOscillator();c.type="square",c.frequency.setValueAtTime(320,t+.5),c.frequency.exponentialRampToValueAtTime(70,t+.62);const l=this.ctx.createGain();l.gain.value=0,c.connect(l),l.connect(this.masterGain),l.gain.setTargetAtTime(.24,t+.5,.006),l.gain.setTargetAtTime(0,t+.58,.05),c.start(t+.5),c.stop(t+.9)}playElevatorMotor(t=2.6){if(!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(46,e),n.frequency.linearRampToValueAtTime(58,e+t*.5),n.frequency.linearRampToValueAtTime(44,e+t);const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.value=320;const o=this.ctx.createGain();o.gain.value=0,n.connect(i),i.connect(o),o.connect(this.masterGain),o.gain.setTargetAtTime(.16,e,.12),o.gain.setTargetAtTime(0,e+t-.35,.14),n.start(e),n.stop(e+t);const r=Math.floor(this.ctx.sampleRate*t),a=this.ctx.createBuffer(1,r,this.ctx.sampleRate),c=a.getChannelData(0);for(let m=0;m<r;m++)c[m]=Math.random()*2-1;const l=this.ctx.createBufferSource();l.buffer=a,l.loop=!0;const h=this.ctx.createBiquadFilter();h.type="bandpass",h.frequency.value=1450,h.Q.value=3.5;const u=this.ctx.createOscillator();u.type="square",u.frequency.value=13;const d=this.ctx.createGain();d.gain.value=520,u.connect(d),d.connect(h.frequency);const f=this.ctx.createGain();f.gain.value=0,l.connect(h),h.connect(f),f.connect(this.masterGain),f.gain.setTargetAtTime(.06,e,.15),f.gain.setTargetAtTime(0,e+t-.35,.14),l.start(e),l.stop(e+t),u.start(e),u.stop(e+t)}playElevatorDing(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=[{ratio:1,gain:.2,decay:1.5},{ratio:2.76,gain:.09,decay:.9},{ratio:5.4,gain:.045,decay:.45}];for(const n of e){const i=this.ctx.createOscillator();i.type="sine",i.frequency.value=1046*n.ratio;const o=this.ctx.createGain();o.gain.value=0,i.connect(o),o.connect(this.masterGain),o.gain.setTargetAtTime(n.gain,t,.005),o.gain.setTargetAtTime(0,t+.02,n.decay/3),i.start(t),i.stop(t+n.decay)}}playHeartbeat(t=.6){if(!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,n=.08+Math.max(0,Math.min(1,t))*.26;for(let i=0;i<2;i++){const o=e+i*.3,r=this.ctx.createOscillator();r.type="sine",r.frequency.setValueAtTime(62,o),r.frequency.exponentialRampToValueAtTime(34,o+.16);const a=this.ctx.createGain();a.gain.value=0,r.connect(a),a.connect(this.masterGain),a.gain.setTargetAtTime(n,o,.01),a.gain.setTargetAtTime(0,o+.1,.05),r.start(o),r.stop(o+.3)}}playWhisper(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=Math.floor(this.ctx.sampleRate*1.4),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let c=0;c<e;c++){const l=Math.sin(c/e*Math.PI);i[c]=(Math.random()*2-1)*l}const o=this.ctx.createBufferSource();o.buffer=n;const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(880,t),r.frequency.linearRampToValueAtTime(1750,t+1.2),r.Q.value=9;const a=this.ctx.createGain();a.gain.value=.13,o.connect(r),r.connect(a),a.connect(this.masterGain),o.start(t)}playPowerOn(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="square",e.frequency.setValueAtTime(140,t),e.frequency.exponentialRampToValueAtTime(40,t+.18);const n=this.ctx.createGain();n.gain.value=.3,n.gain.setTargetAtTime(0,t+.12,.08),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.5);const i=this.ctx.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(38,t+.1),i.frequency.linearRampToValueAtTime(58,t+2.2);const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.value=420;const r=this.ctx.createGain();r.gain.value=0,r.gain.setTargetAtTime(.16,t+.15,.4),r.gain.setTargetAtTime(0,t+2.6,.9),i.connect(o),o.connect(r),r.connect(this.masterGain),i.start(t+.1),i.stop(t+4);const a=this.ctx.createOscillator();a.type="square",a.frequency.value=118;const c=this.ctx.createGain();c.gain.value=0,c.gain.setTargetAtTime(.03,t+.4,.6),c.gain.setTargetAtTime(0,t+3.4,1.2),a.connect(c),c.connect(this.masterGain),a.start(t+.4),a.stop(t+5.5)}setRaining(t){var e;if(!(!this.ctx||!this.masterGain)){if(!this.rainSource){const i=this.ctx.createBuffer(1,this.ctx.sampleRate*3,this.ctx.sampleRate),o=i.getChannelData(0);for(let c=0;c<o.length;c++)o[c]=(Math.random()*2-1)*.5;this.rainSource=this.ctx.createBufferSource(),this.rainSource.buffer=i,this.rainSource.loop=!0;const r=this.ctx.createBiquadFilter();r.type="highpass",r.frequency.value=1400;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=6200,this.rainGain=this.ctx.createGain(),this.rainGain.gain.value=0,this.rainSource.connect(r),r.connect(a),a.connect(this.rainGain),this.rainGain.connect(this.masterGain),this.rainSource.start()}(e=this.rainGain)==null||e.gain.setTargetAtTime(t?.24:0,this.ctx.currentTime,t?.8:1.6)}}playThunder(t=.6){if(!this.ctx||!this.masterGain)return;const e=this.ctx.currentTime,n=.15+(1-t)*1.1,i=.12+t*.22,o=Math.floor(this.ctx.sampleRate*3.2),r=this.ctx.createBuffer(1,o,this.ctx.sampleRate),a=r.getChannelData(0);for(let p=0;p<o;p++){const b=p/o,E=Math.exp(-b*2.2)*(.6+.4*Math.sin(b*40));a[p]=(Math.random()*2-1)*E}const c=this.ctx.createBufferSource();c.buffer=r;const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(320,e+n),l.frequency.linearRampToValueAtTime(90,e+n+2.6);const h=this.ctx.createGain();h.gain.value=0,h.gain.setTargetAtTime(i,e+n,.12),h.gain.setTargetAtTime(0,e+n+1.9,.8),c.connect(l),l.connect(h),h.connect(this.masterGain),c.start(e+n);const u=Math.floor(this.ctx.sampleRate*.4),d=this.ctx.createBuffer(1,u,this.ctx.sampleRate),f=d.getChannelData(0);for(let p=0;p<u;p++)f[p]=(Math.random()*2-1)*Math.exp(-p/(u*.08));const m=this.ctx.createBufferSource();m.buffer=d;const v=this.ctx.createBiquadFilter();v.type="bandpass",v.frequency.value=900,v.Q.value=.7;const g=this.ctx.createGain();g.gain.value=i*.5,m.connect(v),v.connect(g),g.connect(this.masterGain),m.start(e+n)}playGateUnlock(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="square",e.frequency.setValueAtTime(46,t),e.frequency.linearRampToValueAtTime(96,t+1.4);const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=380;const i=this.ctx.createGain();i.gain.value=0,i.gain.setTargetAtTime(.12,t,.25),i.gain.setTargetAtTime(0,t+1.7,.4),e.connect(n),n.connect(i),i.connect(this.masterGain),e.start(t),e.stop(t+3);const o=Math.floor(this.ctx.sampleRate*1.6),r=this.ctx.createBuffer(1,o,this.ctx.sampleRate),a=r.getChannelData(0);for(let u=0;u<o;u++)a[u]=(Math.random()*2-1)*(.4+.6*Math.abs(Math.sin(u/900)));const c=this.ctx.createBufferSource();c.buffer=r;const l=this.ctx.createBiquadFilter();l.type="bandpass",l.frequency.value=2400,l.Q.value=1.4;const h=this.ctx.createGain();h.gain.value=.05,c.connect(l),l.connect(h),h.connect(this.masterGain),c.start(t+.2)}destroy(){var t,e,n,i,o;try{(t=this.ambienceOsc)==null||t.stop(),(e=this.ambienceOsc2)==null||e.stop(),(n=this.windSource)==null||n.stop(),(i=this.rainSource)==null||i.stop()}catch{}(o=this.ctx)==null||o.close(),this.isInitialized=!1,this.ambienceRunning=!1}}const Qr={key:{get name(){return lt("item.key.name")},icon:"🔑",get hint(){return lt("item.key.hint")},usable:!1,perSlot:1},card:{get name(){return lt("item.card.name")},icon:"💳",get hint(){return lt("item.card.hint")},usable:!1,perSlot:1},fuse:{get name(){return lt("item.fuse.name")},icon:"🔌",get hint(){return lt("item.fuse.hint")},usable:!1,perSlot:1},crowbar:{get name(){return lt("item.crowbar.name")},icon:"🔨",get hint(){return lt("item.crowbar.hint")},usable:!1,perSlot:1},battery:{get name(){return lt("item.battery.name")},icon:"🔋",get hint(){return lt("item.battery.hint")},usable:!0,perSlot:3},bottle:{get name(){return lt("item.bottle.name")},icon:"🍺",get hint(){return lt("item.bottle.hint")},usable:!0,perSlot:5},acid:{get name(){return lt("item.acid.name")},icon:"☠️",get hint(){return lt("item.acid.hint")},usable:!1,perSlot:1},ignition:{get name(){return lt("item.ignition.name")},icon:"🔑",get hint(){return lt("item.ignition.hint")},usable:!1,perSlot:1},boltcutters:{get name(){return lt("item.boltcutters.name")},icon:"✂️",get hint(){return lt("item.boltcutters.hint")},usable:!1,perSlot:1},uv:{get name(){return lt("item.uv.name")},icon:"🩹",get hint(){return lt("item.uv.hint")},usable:!1,perSlot:1}};class By{constructor(t,e=6){R(this,"counts",new Map);R(this,"root");R(this,"slots",[]);R(this,"onUse",null);if(this.root=t,!!this.root)for(let n=0;n<e;n++){const i=document.createElement("button");i.type="button",i.className="inv-slot empty",i.addEventListener("click",()=>this.handleSlotClick(n)),this.slots.push(i),this.root.appendChild(i)}}add(t,e=1){this.counts.set(t,(this.counts.get(t)??0)+e),this.render()}count(t){return this.counts.get(t)??0}has(t,e=1){return this.count(t)>=e}take(t,e=1){const n=this.count(t);if(n<e)return!1;const i=n-e;return i===0?this.counts.delete(t):this.counts.set(t,i),this.render(),!0}clear(){this.counts.clear(),this.render()}get totalKeys(){return this.count("key")}slotContents(){const t=[];for(const[e,n]of this.counts){const i=Qr[e].perSlot,o=Math.ceil(n/i);for(let r=0;r<o;r++){if(t.length>=this.slots.length)return t;t.push({id:e,index:r})}}return t}render(){if(!this.root)return;const t=this.slotContents(),e=new Map;t.forEach((n,i)=>{e.has(n.id)||e.set(n.id,i)}),this.slots.forEach((n,i)=>{const o=t[i];if(n.className="inv-slot",n.replaceChildren(),!o){n.classList.add("empty"),n.disabled=!0;return}const r=Qr[o.id],a=this.count(o.id),c=r.perSlot,l=Math.min(c,a-o.index*c);n.disabled=!1,n.classList.toggle("usable",r.usable),n.classList.add(`inv-${o.id}`),n.title=`${r.name} — ${r.hint}`,n.setAttribute("aria-label",`${r.name}: ${r.hint}`);const h=document.createElement("span");if(h.className="inv-icon",h.textContent=r.icon,n.appendChild(h),c>1&&l>1){const u=document.createElement("span");u.className="inv-count",u.textContent=String(l),n.appendChild(u)}}),this.root.classList.toggle("has-items",t.length>0)}handleSlotClick(t){var n;const e=this.slotContents()[t];e&&Qr[e.id].usable&&((n=this.onUse)==null||n.call(this,e.id))}}const si=17,Mi=11,nh=[{name:{uz:"TOM",en:"ROOFTOP",ru:"КРЫША"},sub:{uz:"hovli va darvoza",en:"yard and gate",ru:"двор и ворота"},row1:0,row2:14},{name:{uz:"1-QAVAT",en:"FLOOR 1",ru:"1 ЭТАЖ"},sub:{uz:"qabulxona",en:"reception",ru:"приёмная"},row1:15,row2:33},{name:{uz:"2-QAVAT",en:"FLOOR 2",ru:"2 ЭТАЖ"},sub:{uz:"palatalar",en:"patient wards",ru:"палаты"},row1:34,row2:43},{name:{uz:"B1 PODVAL",en:"B1 BASEMENT",ru:"Б1 ПОДВАЛ"},sub:{uz:"qozonxona va morgniy",en:"boiler room and morgue",ru:"котельная и морг"},row1:44,row2:49},{name:{uz:"3-QAVAT",en:"FLOOR 3",ru:"3 ЭТАЖ"},sub:{uz:"izolyator",en:"isolation ward",ru:"изолятор"},row1:50,row2:57}],Xe=10,ks=4.2,Gy=70,ih=14,Ne={wall:"#0d1015",fence:"#1d222a",ground:"#2a3123",corridor:"#3b424e",indoorRoom:"#4f4438",outdoorRoom:"#343c2b",doorway:"#91783a",key:"#ffb32e",note:"#7fd0ff",card:"#b47cff",exit:"#39d07a",gate:"#ff5252",power:"#ffd645",player:"#f2ecda",monster:"#ff2b2b",unknown:"rgba(3,4,6,0.9)"},Hy={key:Ne.key,card:Ne.card,note:Ne.note,power:Ne.power,exit:Ne.exit,gate:Ne.gate};class Vy{constructor(t){R(this,"panel");R(this,"canvas");R(this,"ctx");R(this,"levelLabel");R(this,"subLabel");R(this,"staticLayer");R(this,"staticCtx");R(this,"map",null);R(this,"explored",new Uint8Array(0));R(this,"lastDraw",-1/0);R(this,"collapsed",!1);R(this,"cellPx",8);R(this,"staticReady",!1);this.panel=t,this.canvas=document.createElement("canvas"),this.canvas.className="minimap-canvas",this.ctx=this.canvas.getContext("2d"),this.levelLabel=document.createElement("span"),this.levelLabel.className="minimap-level",this.subLabel=document.createElement("span"),this.subLabel.className="minimap-sub";const e=document.createElement("div");e.className="minimap-titles",e.append(this.levelLabel,this.subLabel);const n=document.createElement("button");n.className="minimap-toggle",n.type="button",n.setAttribute("aria-label","Xaritani yigishtirish"),n.textContent="–",n.addEventListener("click",()=>this.toggle());const i=document.createElement("div");i.className="minimap-head",i.append(e,n),t.append(i,this.canvas),this.staticLayer=document.createElement("canvas"),this.staticCtx=this.staticLayer.getContext("2d")}attach(t){this.map=t,this.explored=new Uint8Array(t.rows*t.cols),this.staticReady=!1,this.lastDraw=-1/0,this.layoutCanvas()}setCollapsed(t){this.collapsed=t,this.panel.classList.toggle("collapsed",t);const e=this.panel.querySelector(".minimap-toggle");e&&(e.textContent=t?"+":"–")}toggle(){this.setCollapsed(!this.collapsed)}relayout(){this.layoutCanvas(),this.lastDraw=-1/0}buildStaticLayer(){const t=this.map;this.staticLayer.width=t.cols*Xe,this.staticLayer.height=t.rows*Xe;const e=this.staticCtx;e.clearRect(0,0,this.staticLayer.width,this.staticLayer.height);for(let n=0;n<t.rows;n++){const i=t.plan[n]??"";for(let o=0;o<t.cols;o++){const r=i[o]??"#",a=n===0||n===t.rows-1||o===0||o===t.cols-1;let c;r==="#"?c=a?Ne.fence:Ne.wall:r==="+"?c=Ne.doorway:r==="."?c=n<=ih?Ne.ground:Ne.corridor:c=n<=ih?Ne.outdoorRoom:Ne.indoorRoom,e.fillStyle=c,e.fillRect(o*Xe,n*Xe,Xe,Xe),r!=="#"&&r!=="+"&&(e.fillStyle="rgba(0,0,0,0.16)",e.fillRect(o*Xe,n*Xe+Xe-2,Xe,2))}}this.staticReady=!0}layoutCanvas(){const t=this.panel.getBoundingClientRect().width||190,e=Math.max(120,t-20),n=Math.max(70,window.innerHeight*.3),i=si/Mi;let o=e,r=o/i;r>n&&(r=n,o=r*i);const a=Math.min(window.devicePixelRatio||1,2);this.canvas.width=Math.round(o*a),this.canvas.height=Math.round(r*a),this.canvas.style.width=`${Math.round(o)}px`,this.canvas.style.height=`${Math.round(r)}px`,this.ctx.setTransform(a,0,0,a,0,0),this.ctx.imageSmoothingEnabled=!1,this.cellPx=o/si}markExplored(t,e){const n=this.map,i=e/j,o=t/j,r=Math.floor(i-ks),a=Math.ceil(i+ks),c=Math.floor(o-ks),l=Math.ceil(o+ks);for(let h=r;h<=a;h++)if(!(h<0||h>=n.rows))for(let u=c;u<=l;u++)u<0||u>=n.cols||Math.hypot(h-i,u-o)>ks||(this.explored[h*n.cols+u]=1)}update(t,e=!1){const n=this.map;if(!n||this.collapsed)return;const i=performance.now();if(!e&&i-this.lastDraw<Gy)return;this.lastDraw=i,this.staticReady||this.buildStaticLayer(),this.markExplored(t.player.x,t.player.z);const o=t.player.z/j,r=t.player.x/j,a=this.cellPx,c=si*a,l=Mi*a,h=this.ctx,u=Math.round(Math.min(Math.max(o-Mi/2,0),n.rows-Mi)),d=Math.round(Math.min(Math.max(r-si/2,0),n.cols-si)),f=w=>(w/j-d)*a,m=w=>(w/j-u)*a,v=(w,_,P=1)=>{const V=w/j-d,N=_/j-u;return V>=-P&&V<=si+P&&N>=-P&&N<=Mi+P};h.clearRect(0,0,c,l),h.drawImage(this.staticLayer,d*Xe,u*Xe,si*Xe,Mi*Xe,0,0,c,l),h.fillStyle=Ne.unknown;for(let w=0;w<Mi;w++){const _=u+w;if(_<0||_>=n.rows){h.fillRect(0,w*a,c,a+.8);continue}for(let P=0;P<si;P++){const V=d+P;if(V<0||V>=n.cols){h.fillRect(P*a,w*a,a+.8,a+.8);continue}this.explored[_*n.cols+V]||h.fillRect(P*a,w*a,a+.8,a+.8)}}const g=(w,_,P,V)=>{v(w,_)&&(h.beginPath(),h.arc(f(w),m(_),V,0,Math.PI*2),h.fillStyle=P,h.fill())};for(const w of t.marks)g(w.x,w.z,Hy[w.kind]??Ne.key,w.kind==="note"?2:2.7);if(t.monster&&v(t.monster.x,t.monster.z)){const w=f(t.monster.x),_=m(t.monster.z),P=3.4+Math.sin(i/130)*1.3;h.beginPath(),h.arc(w,_,P+3.6,0,Math.PI*2),h.fillStyle=t.chased?"rgba(255,40,40,0.34)":"rgba(255,40,40,0.16)",h.fill(),h.beginPath(),h.arc(w,_,P,0,Math.PI*2),h.fillStyle=Ne.monster,h.fill()}const p=f(t.player.x),b=m(t.player.z),E=.42,S=a*2.6,k=-Math.PI/2-t.player.yaw;h.beginPath(),h.moveTo(p,b),h.arc(p,b,S,k-E,k+E,!1),h.closePath(),h.fillStyle="rgba(255,244,214,0.24)",h.fill(),h.beginPath(),h.arc(p,b,3,0,Math.PI*2),h.fillStyle=Ne.player,h.fill(),h.lineWidth=1.2,h.strokeStyle="#0a0c11",h.stroke();const L=Math.round(o),I=nh.find(w=>L>=w.row1&&L<=w.row2)??nh[0],D=Te(I.name);this.levelLabel.textContent!==D&&(this.levelLabel.textContent=D,this.subLabel.textContent=Te(I.sub))}}const Wy=2.4,qy=30,sh=2.3,oh="dark-asylum.settings",ta="dark-asylum.best-time",rh=100,Xy=22,Yy=2.6,fn=3,Ji=20,Ky=.4,$y=2.4,jy=5e3,ea=.85,Zy={o:"scare",h:"whisper",q:"scare",j:"whisper",m:"blackout",e:"whisper",p:"blackout",v:"whisper",z:"blackout",y:"scare",t:"blackout",u:"whisper",x:"whisper",A:"whisper",D:"scare",F:"blackout",E:"whisper",P:"scare",M:"blackout",Q:"scare",S:"scare",T:"whisper",U:"scare",X:"blackout",R:"scare",O:"whisper"};class Jy{constructor(){R(this,"renderer",null);R(this,"scene",null);R(this,"camera",null);R(this,"player",null);R(this,"monster",null);R(this,"effects",null);R(this,"audio",null);R(this,"mapInfo",null);R(this,"keys",[]);R(this,"notes",[]);R(this,"cards",[]);R(this,"keysCollected",0);R(this,"notesCollected",0);R(this,"cardCollected",!1);R(this,"substationOn",!1);R(this,"exitOpened",!1);R(this,"gateOpened",!1);R(this,"gateSwing",0);R(this,"gateNoticeCooldown",0);R(this,"wasOutdoors",!1);R(this,"outdoorLights",[]);R(this,"flashlight",null);R(this,"flashlightOn",!0);R(this,"flashlightBattery",100);R(this,"health",rh);R(this,"invulnerable",0);R(this,"danger",0);R(this,"heartbeatTimer",0);R(this,"lockedNoticeCooldown",0);R(this,"shakeAmount",0);R(this,"shakeTime",0);R(this,"shakeDuration",1);R(this,"state","loading");R(this,"phase","power");R(this,"powerOn",!1);R(this,"currentRoomIndex",-1);R(this,"visitedRooms",new Set);R(this,"scriptedScares",new Set);R(this,"elapsed",0);R(this,"scratch",new C);R(this,"clock",new Bg);R(this,"animationId",0);R(this,"settings",{sensitivity:1,quality:"high",muted:!1});R(this,"loadingBar",null);R(this,"loadingText",null);R(this,"loadingScreen",null);R(this,"startScreen",null);R(this,"hud",null);R(this,"mobileControls",null);R(this,"jumpscareOverlay",null);R(this,"minimapPanel",null);R(this,"minimap",null);R(this,"keyTaken",new Set);R(this,"noteTaken",new Set);R(this,"cardTaken",new Set);R(this,"minimapState",{player:{x:0,z:0,yaw:0},monster:null,chased:!1,marks:[]});R(this,"inventory",null);R(this,"interactPrompt",null);R(this,"interactLabel",null);R(this,"handButton",null);R(this,"pickups",[]);R(this,"boardedDoors",[]);R(this,"interaction",null);R(this,"interactionTimer",0);R(this,"marksDirty",!0);R(this,"gameoverScreen",null);R(this,"winScreen",null);R(this,"pauseMenu",null);R(this,"hudMessage",null);R(this,"noteToast",null);R(this,"noteToastTitle",null);R(this,"noteToastText",null);R(this,"dangerVignette",null);R(this,"damageFlash",null);R(this,"lightningFlash",null);R(this,"lightningTimeout",null);R(this,"objectiveText",null);R(this,"noteCount",null);R(this,"roomBanner",null);R(this,"roomBannerName",null);R(this,"roomBannerSubtitle",null);R(this,"hudMessageTimeout",null);R(this,"noteToastTimeout",null);R(this,"roomBannerTimeout",null);R(this,"damageTimeout",null);R(this,"stairTransition",null);R(this,"stairFloorName",null);R(this,"currentFloor",1);R(this,"elevator",null);R(this,"liftPanel",null);R(this,"liftFloorButtons",[]);R(this,"liftLocationText",null);R(this,"liftArriveTimeout",null);R(this,"inLift",!1);R(this,"doors",[]);R(this,"desks",[]);R(this,"lockers",[]);R(this,"fixtureTarget",null);R(this,"fixturePrompt",null);R(this,"fixtureLabel",null);R(this,"hidingInLocker",null);R(this,"lockerView",null);R(this,"lockerTimeout",null);R(this,"liftHooks",{onGateClank:()=>{var t;return(t=this.audio)==null?void 0:t.playElevatorGate()},onMotorStart:()=>{var t;return(t=this.audio)==null?void 0:t.playElevatorMotor()},onDing:()=>{var t;return(t=this.audio)==null?void 0:t.playElevatorDing()},onTeleport:t=>this.onLiftTeleport(t),onArrive:t=>this.onLiftArrive(t),shake:(t,e)=>this.addShake(t,e),flicker:t=>{var e;return(e=this.effects)==null?void 0:e.setAmbientFloor(ea*t)}});R(this,"introActive",!1);R(this,"introSkipRequested",!1);R(this,"introFinished",!1);R(this,"introWatchdogId",null);R(this,"introRenderId",null);R(this,"introLastProgress",0);R(this,"introEyelid",null);R(this,"introTypewriter",null);R(this,"introTypewriterLabel",null);R(this,"introTypewriterText",null);R(this,"skipIntroBtn",null);R(this,"introSkipHandler",null);R(this,"introRenderTick",()=>{var t;this.introRenderId=requestAnimationFrame(this.introRenderTick),!(!this.renderer||!this.scene||!this.camera)&&((t=this.effects)==null||t.update(1/60,0,this.camera),this.renderer.render(this.scene,this.camera))});R(this,"gameLoop",()=>{var n,i,o,r;if(this.state!=="playing")return;this.animationId=requestAnimationFrame(this.gameLoop);const t=Math.min(this.clock.getDelta(),.05);if(this.isPortraitBlocked())return;if(this.elapsed+=t,this.updateDoors(t),this.updateFixtures(t),(n=this.player)==null||n.update(t),this.monster&&this.player&&!((i=this.elevator)!=null&&i.isLocked())){const a=this.hidingInLocker!==null||this.player.crouching&&this.isNearHidingSpot();this.monster.update(t,this.player.position,this.player.sprinting,a).caught&&this.hitByMonster()}const e=this.keysCollected/fn;(o=this.effects)==null||o.update(t,e,this.camera),this.updateInteraction(t),this.checkExitDoor(),this.checkSubstation(),this.checkMainGate(),this.checkOutdoors(),this.updateRoomBanner(),this.updateElevator(t),this.updateBattery(t),this.updateDanger(t),this.animatePickups(t),this.animateGate(t),this.updateHUD(),this.syncFixtureButton(),this.updateMinimap(),this.applyShake(t),(r=this.renderer)==null||r.render(this.scene,this.camera)})}async init(){var i,o,r,a,c;this.cacheDom(),this.prepareJumpscareFace(),this.settings=this.loadSettings(),this.syncSettingsUI(),this.installLanguageUI(),this.installRotateGuard(),this.installLiftUI(),this.installFixtures(),this.installAudioUnlock(),this.setLoadingProgress(8,lt("loading.1")),await this.yieldToBrowser();const t=document.getElementById("game-canvas");this.renderer=new yg({canvas:t,antialias:!1,powerPreference:"high-performance"});const e=((i=window.visualViewport)==null?void 0:i.width)??window.innerWidth,n=((o=window.visualViewport)==null?void 0:o.height)??window.innerHeight;this.renderer.setSize(e,n,!1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ch,this.renderer.toneMapping=hh,this.renderer.toneMappingExposure=1.35,this.renderer.outputColorSpace=Ie,this.setLoadingProgress(20,lt("loading.2")),await this.yieldToBrowser(),this.scene=new _g,this.camera=new Ke(72,window.innerWidth/window.innerHeight,.08,90),this.scene.add(this.camera);try{this.mapInfo=Kl(this.scene)}catch(l){throw console.error("[buildWorld] failed:",l),l}this.bindFixtures(),this.currentFloor=Vl(this.mapInfo.playerSpawn.z/j),this.liftLocationText&&(this.liftLocationText.textContent=zo(this.currentFloor)),this.setLoadingProgress(55,lt("loading.3")),await this.yieldToBrowser(),this.audio=new ky,this.audio.setMuted(this.settings.muted),this.setLoadingProgress(65,lt("loading.4")),await this.yieldToBrowser(),this.effects=new Fy(this.scene),this.effects.setFluorescentMaterials(this.mapInfo.fluorescentMaterials),this.flashlight=this.effects.createFlashlight(this.camera),this.effects.setCallbacks(()=>this.triggerJumpscare(),()=>{var l;return(l=this.audio)==null?void 0:l.playCreepySound()}),this.effects.onLightning=()=>this.onLightning(),this.effects.onFluorescentBuzz=()=>{var l;return(l=this.audio)==null?void 0:l.playElectricBuzz()},this.addMapLights(),this.player=new My(this.camera),this.player.init(this.mapInfo.grid,this.mapInfo.playerSpawn),this.player.setColliders(this.mapInfo.colliders),this.player.setupKeyboard(),this.player.setupMouseLook(),this.player.setLookSensitivity(this.settings.sensitivity),this.player.onFootstep=l=>{var h;return(h=this.audio)==null?void 0:h.playFootstep(l?.34:.2)},this.collectPickups(),this.setLoadingProgress(85,lt("loading.5")),await this.yieldToBrowser(),this.monster=new zy(this.mapInfo.grid,this.mapInfo.monsterSpawn),this.monster.addToScene(this.scene),this.monster.setColliders(this.mapInfo.colliders),this.monster.onGrowl=()=>{var l;return(l=this.audio)==null?void 0:l.playGrowl()},this.minimapPanel&&!this.minimap&&(this.minimap=new Vy(this.minimapPanel)),(r=this.minimap)==null||r.attach(this.mapInfo),this.applyQuality(),this.setLoadingProgress(100,lt("loading.6")),await this.delay(400),this.setupEvents(),this.updateBestTimeUI(),this.updateObjective(),(a=this.loadingScreen)==null||a.classList.add("hidden"),(c=this.startScreen)==null||c.classList.remove("hidden"),this.state="menu"}cacheDom(){var e,n;const t=i=>document.getElementById(i);this.loadingBar=t("loading-bar"),this.loadingText=t("loading-text"),this.loadingScreen=t("loading-screen"),this.startScreen=t("start-screen"),this.hud=t("game-hud"),this.mobileControls=t("mobile-controls"),this.jumpscareOverlay=t("jumpscare-overlay"),this.minimapPanel=t("minimap-panel"),this.interactPrompt=t("interact-prompt"),this.interactLabel=t("interact-label"),this.handButton=t("hand-btn"),this.inventory=new By(t("inventory")),this.inventory.onUse=i=>this.useItem(i),this.gameoverScreen=t("gameover-screen"),this.winScreen=t("win-screen"),this.pauseMenu=t("pause-menu"),this.hudMessage=t("hud-message"),this.noteToast=t("note-toast"),this.noteToastTitle=t("note-toast-title"),this.noteToastText=t("note-toast-text"),this.dangerVignette=t("danger-vignette"),this.damageFlash=t("damage-flash"),this.lightningFlash=t("lightning-flash"),this.objectiveText=t("objective-text"),this.noteCount=t("note-count"),this.roomBanner=t("room-banner"),this.roomBannerName=t("room-banner-name"),this.roomBannerSubtitle=t("room-banner-subtitle"),this.stairTransition=t("stair-transition"),this.stairFloorName=t("stair-floor-name"),this.liftPanel=t("lift-panel"),this.liftLocationText=t("lift-location-text"),this.fixturePrompt=t("fixture-prompt"),this.fixtureLabel=t("fixture-label"),this.lockerView=t("locker-view"),this.introEyelid=t("intro-eyelid"),this.introTypewriter=t("intro-typewriter"),this.introTypewriterLabel=(e=t("intro-typewriter"))==null?void 0:e.querySelector(".typewriter-label"),this.introTypewriterText=(n=t("intro-typewriter"))==null?void 0:n.querySelector(".typewriter-text"),this.skipIntroBtn=t("skip-intro")}yieldToBrowser(){return new Promise(t=>window.requestAnimationFrame(()=>window.setTimeout(t,0)))}isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}defaultQuality(){return this.isTouchDevice()?"medium":"high"}loadSettings(){const t={sensitivity:1,quality:this.defaultQuality(),muted:!1};try{const e=localStorage.getItem(oh);if(!e)return t;const n=JSON.parse(e);return{sensitivity:typeof n.sensitivity=="number"?n.sensitivity:t.sensitivity,quality:n.quality==="low"||n.quality==="medium"||n.quality==="high"?n.quality:t.quality,muted:typeof n.muted=="boolean"?n.muted:t.muted}}catch{return t}}saveSettings(){try{localStorage.setItem(oh,JSON.stringify(this.settings))}catch{}}syncSettingsUI(){document.querySelectorAll(".setting-sensitivity").forEach(t=>{t.value=String(this.settings.sensitivity)}),document.querySelectorAll(".setting-quality").forEach(t=>{t.value=this.settings.quality}),document.querySelectorAll(".setting-muted").forEach(t=>{t.checked=this.settings.muted})}applyQuality(){var n,i,o;if(!this.renderer)return;const t=window.devicePixelRatio||1,e=this.settings.quality==="low"?1:this.settings.quality==="medium"?1.5:2;this.renderer.setPixelRatio(Math.min(t,e)),this.renderer.shadowMap.enabled=this.settings.quality!=="low",(n=this.effects)==null||n.setDustEnabled(this.settings.quality!=="low"),(i=this.effects)==null||i.setRainEnabled(this.settings.quality!=="low"),(o=this.scene)==null||o.traverse(r=>{if(!(r instanceof A))return;const a=Array.isArray(r.material)?r.material:[r.material];for(const c of a)c.needsUpdate=!0})}addMapLights(){if(!this.mapInfo||!this.effects)return;const t=this.settings.quality==="low"?8:this.settings.quality==="medium"?12:18;for(const i of this.mapInfo.keyPositions){const o=this.effects.createWallLight(i.x,2.6,i.z,16755502);o.distance=8,this.effects.addFlickerLight(o,1.1)}const e=[];for(let i=pn;i<this.mapInfo.grid.length;i++)for(let o=0;o<this.mapInfo.grid[0].length;o++)this.mapInfo.grid[i][o]!==0&&e.push([i,o]);for(let i=e.length-1;i>0;i--){const o=Math.floor(Math.random()*(i+1));[e[i],e[o]]=[e[o],e[i]]}const n=Math.max(1,Math.floor(e.length/t));for(let i=0;i<t&&i*n<e.length;i++){const[o,r]=e[i*n],a=this.effects.createWallLight(r*j+(Math.random()-.5),3.05,o*j+(Math.random()-.5),16756838);a.distance=10,this.effects.addFlickerLight(a,.72)}}lightOutdoorLamps(){if(!this.mapInfo||!this.effects||this.outdoorLights.length>0)return;const t=this.settings.quality==="low"?3:this.settings.quality==="medium"?4:6;for(const e of this.mapInfo.outdoorLampPositions.slice(0,t)){const n=this.effects.createWallLight(e.x,e.y,e.z,16767392);n.distance=18,this.effects.addFlickerLight(n,.95),this.outdoorLights.push(n)}}setupEvents(){var o,r,a,c,l,h,u,d,f;(o=document.getElementById("start-btn"))==null||o.addEventListener("click",()=>void this.startGame()),(r=document.getElementById("retry-btn"))==null||r.addEventListener("click",()=>this.restartGame()),(a=document.getElementById("replay-btn"))==null||a.addEventListener("click",()=>this.restartGame()),(c=document.getElementById("pause-btn"))==null||c.addEventListener("click",()=>this.pauseGame()),(l=document.getElementById("resume-btn"))==null||l.addEventListener("click",()=>this.resumeGame()),(h=document.getElementById("pause-restart-btn"))==null||h.addEventListener("click",()=>this.restartGame());const t=document.getElementById("run-btn");t==null||t.addEventListener("pointerdown",m=>{var v;m.preventDefault(),(v=this.player)==null||v.setRunning(!0),t.classList.add("active")});for(const m of["pointerup","pointercancel","pointerleave"])t==null||t.addEventListener(m,()=>{var v;(v=this.player)==null||v.setRunning(!1),t.classList.remove("active")});(u=document.getElementById("flashlight-btn"))==null||u.addEventListener("click",m=>{m.stopPropagation(),this.toggleFlashlight()});const e=document.getElementById("hand-btn");e==null||e.addEventListener("pointerdown",m=>{m.preventDefault(),m.stopPropagation(),this.interact()}),(d=document.getElementById("throw-btn"))==null||d.addEventListener("pointerdown",m=>{m.preventDefault(),m.stopPropagation(),this.throwBottle()});const n=document.getElementById("crouch-btn");n==null||n.addEventListener("pointerdown",m=>{var v;m.preventDefault(),(v=this.player)==null||v.setCrouching(!0),n.classList.add("active")});for(const m of["pointerup","pointercancel","pointerleave"])n==null||n.addEventListener(m,()=>{var v;(v=this.player)==null||v.setCrouching(!1),n.classList.remove("active")});document.addEventListener("keydown",m=>{var v,g,p;m.code==="KeyF"&&this.state==="playing"&&this.toggleFlashlight(),m.code==="KeyM"&&this.state==="playing"&&((v=this.minimap)==null||v.toggle()),m.code==="KeyE"&&this.state==="playing"&&this.interact(),m.code==="KeyB"&&this.state==="playing"&&this.throwBottle(),m.code==="ShiftLeft"&&this.state==="playing"&&((g=this.player)==null||g.setRunning(!0)),(m.code==="ControlLeft"||m.code==="ControlRight")&&this.state==="playing"&&((p=this.player)==null||p.setCrouching(!0)),m.code==="Escape"&&(this.state==="playing"?this.pauseGame():this.state==="paused"&&this.resumeGame())}),document.addEventListener("keyup",m=>{var v,g;m.code==="ShiftLeft"&&((v=this.player)==null||v.setRunning(!1)),(m.code==="ControlLeft"||m.code==="ControlRight")&&((g=this.player)==null||g.setCrouching(!1))});const i=document.getElementById("game-canvas");i==null||i.addEventListener("click",()=>{this.state==="playing"&&!this.isTouchDevice()&&i.requestPointerLock()}),window.addEventListener("resize",()=>this.onResize()),window.addEventListener("orientationchange",()=>{window.setTimeout(()=>this.onResize(),120)}),(f=window.visualViewport)==null||f.addEventListener("resize",()=>this.onResize()),document.querySelectorAll(".setting-sensitivity").forEach(m=>{m.addEventListener("input",()=>{var v;this.settings.sensitivity=Number(m.value),(v=this.player)==null||v.setLookSensitivity(this.settings.sensitivity),this.syncSettingsUI(),this.saveSettings()})}),document.querySelectorAll(".setting-quality").forEach(m=>{m.addEventListener("change",()=>{this.settings.quality=m.value,this.applyQuality(),this.syncSettingsUI(),this.saveSettings()})}),document.querySelectorAll(".setting-muted").forEach(m=>{m.addEventListener("change",()=>{var v;this.settings.muted=m.checked,(v=this.audio)==null||v.setMuted(this.settings.muted),this.syncSettingsUI(),this.saveSettings()})})}async typewriterEffect(t,e,n=38){t.textContent="";const i=document.createElement("span");i.className="typewriter-cursor",t.appendChild(i);for(let o=0;o<e.length;o++){if(this.introSkipRequested){t.textContent=e,i.remove();return}t.insertBefore(document.createTextNode(e[o]),i),this.introAlive(),await this.delay(n+(Math.random()*20-10))}await this.delay(600),i.remove()}playTapeClick(){var u;const t=(u=this.audio)==null?void 0:u.ctx;if(!t)return;const e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="square",n.frequency.value=80,i.gain.setValueAtTime(.12,e),i.gain.exponentialRampToValueAtTime(.001,e+.08),n.connect(i).connect(t.destination),n.start(e),n.stop(e+.1);const o=t.sampleRate*4,r=t.createBuffer(1,o,t.sampleRate),a=r.getChannelData(0);for(let d=0;d<o;d++)a[d]=(Math.random()*2-1)*.015;const c=t.createBufferSource();c.buffer=r;const l=t.createGain();l.gain.setValueAtTime(0,e+.1),l.gain.linearRampToValueAtTime(.06,e+.3),l.gain.linearRampToValueAtTime(0,e+4);const h=t.createBiquadFilter();h.type="highpass",h.frequency.value=3e3,c.connect(h).connect(l).connect(t.destination),c.start(e+.1),c.stop(e+4)}playIntroRain(){var l;const t=(l=this.audio)==null?void 0:l.ctx;if(!t)return;const e=t.currentTime,n=t.sampleRate*8,i=t.createBuffer(1,n,t.sampleRate),o=i.getChannelData(0);for(let h=0;h<n;h++)o[h]=Math.random()*2-1;const r=t.createBufferSource();r.buffer=i,r.loop=!0;const a=t.createGain();a.gain.setValueAtTime(0,e),a.gain.linearRampToValueAtTime(.08,e+2);const c=t.createBiquadFilter();c.type="lowpass",c.frequency.value=800,r.connect(c).connect(a).connect(t.destination),r.start(e),a.gain.linearRampToValueAtTime(0,e+6),r.stop(e+6.5)}playGasp(){var l;const t=(l=this.audio)==null?void 0:l.ctx;if(!t)return;const e=t.currentTime,n=t.sampleRate*.5,i=t.createBuffer(1,n,t.sampleRate),o=i.getChannelData(0);for(let h=0;h<n;h++)o[h]=Math.random()*2-1;const r=t.createBufferSource();r.buffer=i;const a=t.createGain();a.gain.setValueAtTime(0,e),a.gain.linearRampToValueAtTime(.15,e+.05),a.gain.exponentialRampToValueAtTime(.001,e+.5);const c=t.createBiquadFilter();c.type="bandpass",c.frequency.value=1200,c.Q.value=2,r.connect(c).connect(a).connect(t.destination),r.start(e),r.stop(e+.55)}playHeartbeatPulse(){var n;const t=(n=this.audio)==null?void 0:n.ctx;if(!t)return;const e=t.currentTime;for(let i=0;i<2;i++){const o=e+i*.25,r=t.createOscillator(),a=t.createGain();r.type="sine",r.frequency.setValueAtTime(55,o),r.frequency.exponentialRampToValueAtTime(35,o+.18),a.gain.setValueAtTime(.25,o),a.gain.exponentialRampToValueAtTime(.001,o+.2),r.connect(a).connect(t.destination),r.start(o),r.stop(o+.22)}}startIntroRendering(){this.introRenderId===null&&(this.introRenderId=requestAnimationFrame(this.introRenderTick))}stopIntroRendering(){this.introRenderId!==null&&(cancelAnimationFrame(this.introRenderId),this.introRenderId=null)}introAlive(){this.introLastProgress=performance.now()}async introDelay(t){let n=0;for(;n<t&&!this.introFinished;)await this.delay(Math.min(50,t-n)),n+=50,this.introAlive()}armIntroWatchdog(){this.clearIntroWatchdog(),this.introAlive(),this.introWatchdogId=window.setInterval(()=>{if(!this.introActive){this.clearIntroWatchdog();return}performance.now()-this.introLastProgress>jy&&this.forceEndIntro("failsafe")},250)}clearIntroWatchdog(){this.introWatchdogId!==null&&(window.clearInterval(this.introWatchdogId),this.introWatchdogId=null)}killOverlay(t){t&&(t.classList.add("hidden"),t.classList.remove("open","in-cutscene"),t.style.display="none",t.style.opacity="0",t.style.visibility="hidden",t.style.pointerEvents="none")}reviveOverlay(t){t&&(t.classList.remove("hidden","open"),t.style.display="",t.style.opacity="",t.style.visibility="",t.style.pointerEvents="")}forceEndIntro(t){var n,i,o,r,a;if(this.introFinished)return;this.introFinished=!0,this.introActive=!1,this.introSkipRequested=!0,this.clearIntroWatchdog(),this.stopIntroRendering(),this.skipIntroBtn&&this.introSkipHandler&&this.skipIntroBtn.removeEventListener("click",this.introSkipHandler),this.introSkipHandler=null,this.killOverlay(this.introEyelid),this.killOverlay(this.introTypewriter),this.killOverlay(this.skipIntroBtn),document.body.classList.remove("in-cutscene");const e=(n=this.mapInfo)==null?void 0:n.playerSpawn;if(this.mapInfo&&e&&((i=this.player)==null||i.reset(this.mapInfo.grid,e),this.camera&&(this.camera.position.set(e.x,En,e.z),this.camera.rotation.set(0,0,0),this.camera.updateMatrixWorld(!0))),(o=this.effects)==null||o.setAmbientFloor(ea),this.flashlightOn=!0,this.flashlightBattery=Math.max(this.flashlightBattery,60),this.flashlight&&(this.flashlight.visible=!0,this.flashlight.intensity=Math.max(this.flashlight.intensity,3.8)),this.player&&(this.player.inputDisabled=!1),(r=this.hud)==null||r.classList.remove("hidden"),this.isTouchDevice()){(a=this.mobileControls)==null||a.classList.remove("hidden");const c=document.getElementById("dynamic-joystick");c&&(c.classList.remove("hidden"),c.style.display="")}t==="failsafe"&&this.state!=="playing"&&this.beginPlay()}async runIntroCutscene(){var r,a,c;if(this.introFinished=!1,this.introActive=!0,this.introSkipRequested=!1,this.player&&(this.player.inputDisabled=!0),(r=this.hud)==null||r.classList.add("hidden"),(a=this.mobileControls)==null||a.classList.add("hidden"),document.body.classList.add("in-cutscene"),this.reviveOverlay(this.introEyelid),this.reviveOverlay(this.introTypewriter),this.reviveOverlay(this.skipIntroBtn),this.startIntroRendering(),this.armIntroWatchdog(),this.introSkipHandler=()=>{this.forceEndIntro("skipped")},(c=this.skipIntroBtn)==null||c.addEventListener("click",this.introSkipHandler),this.introTypewriterLabel&&(this.introTypewriterLabel.textContent=lt("intro.tapeLabel")),await this.introDelay(800),this.introFinished||(this.playIntroRain(),await this.introDelay(600),this.introFinished)||(this.playTapeClick(),await this.introDelay(1200),this.introFinished))return;const t=lt("intro.narration");if(await this.typewriterEffect(this.introTypewriterText,t,42),this.introAlive(),this.introFinished||(this.introSkipRequested||await this.introDelay(1200),this.introAlive(),this.introFinished)||(this.introTypewriter.style.transition="opacity 0.8s ease",this.introTypewriter.style.opacity="0",await this.introDelay(900),this.introAlive(),this.introFinished))return;this.introTypewriter.classList.add("hidden"),this.introTypewriter.style.opacity="",this.introTypewriter.style.transition="";const e=async(l,h)=>{this.introEyelid.classList.add("open"),await this.introDelay(l),this.introAlive(),this.introEyelid.classList.remove("open"),await this.introDelay(h),this.introAlive()};if(await e(700,500),this.introFinished||(await e(600,400),this.introFinished)||(this.introEyelid.classList.add("open"),this.playGasp(),await this.introDelay(400),this.introAlive(),this.introFinished))return;if(this.player&&this.camera&&this.mapInfo){const l=this.mapInfo.playerSpawn.clone();this.player.init(this.mapInfo.grid,l),this.player.setColliders(this.mapInfo.colliders),this.camera.position.set(l.x,.65,l.z);const h=new C(l.x,l.y+5,l.z);this.camera.lookAt(h),this.camera.rotation.z=.15}if(await this.introDelay(300),this.introAlive(),this.killOverlay(this.introEyelid),await this.introDelay(800),this.introAlive(),this.introFinished)return;const n=2200,i=performance.now(),o=this.camera.position.clone();await new Promise(l=>{const h=()=>{if(this.introAlive(),this.introFinished){l();return}const u=performance.now()-i,d=Math.min(1,u/n),f=d<.5?2*d*d:1-Math.pow(-2*d+2,2)/2,m=.65+(En-.65)*f,v=Math.sin(d*Math.PI*3)*.08*(1-d),g=Math.cos(d*Math.PI*2.5)*.06*(1-d);this.camera.position.set(o.x+v,m,o.z+g);const p=-Math.PI/2.5,E=p+(0-p)*f,S=new C(this.camera.position.x-Math.sin(0)*Math.cos(E),this.camera.position.y+Math.sin(E),this.camera.position.z-Math.cos(0)*Math.cos(E));if(this.camera.lookAt(S),this.camera.rotation.z=.15*(1-f),d<1&&!this.introSkipRequested)requestAnimationFrame(h);else{if(this.player&&this.mapInfo&&this.camera){const k=this.mapInfo.playerSpawn;this.player.reset(this.mapInfo.grid,k),this.camera.position.set(k.x,En,k.z),this.camera.rotation.set(0,0,0)}l()}};requestAnimationFrame(h)}),this.introAlive(),!this.introFinished&&(this.playHeartbeatPulse(),this.showMessage(lt("intro.wall"),3500),await this.introDelay(2e3),this.introAlive(),!this.introFinished&&(this.introSkipRequested||(this.showMessage(lt("intro.whisper"),4500),await this.introDelay(2500),this.introAlive()),this.forceEndIntro("finished")))}async startGame(){var t,e,n,i,o,r;(t=this.startScreen)==null||t.classList.add("hidden"),(e=this.pauseMenu)==null||e.classList.add("hidden"),await((n=this.audio)==null?void 0:n.init()),(i=this.audio)==null||i.resume(),await((o=this.audio)==null?void 0:o.unlock()),this.isTouchDevice()&&(document.body.classList.add("touch-device"),(r=this.player)==null||r.setupMobileTouch(document.getElementById("game-canvas")),await this.lockLandscape());try{await this.runIntroCutscene()}catch(a){console.error("Intro cutscene failed - starting gameplay directly:",a)}finally{this.forceEndIntro("failsafe")}this.beginPlay()}beginPlay(){var t,e,n;this.state==="playing"||this.state==="gameover"||this.state==="win"||((t=this.hud)==null||t.classList.remove("hidden"),this.isTouchDevice()&&((e=this.mobileControls)==null||e.classList.remove("hidden")),(n=this.audio)==null||n.unlock().then(i=>{var o;i&&((o=this.audio)==null||o.startAmbience())}),this.elapsed=0,this.state="playing",this.clock.getDelta(),this.isTouchDevice()?this.showMessage(lt("msg.controlsTouch"),5e3):this.showMessage(lt("msg.controlsDesktop"),6e3),this.gameLoop())}installLiftUI(){const t=document.getElementById("lift-floors");if(!(!t||!this.liftPanel)){t.textContent="",this.liftFloorButtons=[];for(let e=bn.length-1;e>=0;e--){const n=bn[e],i=document.createElement("button");i.type="button",i.className="lift-floor-btn",i.dataset.deck=String(e);const o=document.createElement("span");o.className="lift-floor-cap",o.textContent=Te(n.label);const r=document.createElement("span");r.className="lift-floor-name",r.textContent=Te(n.name),i.append(o,r),i.addEventListener("click",()=>this.rideLift(e)),t.appendChild(i),this.liftFloorButtons.push(i)}Ol(()=>{this.elevator&&bv(this.elevator);for(const e of this.liftFloorButtons){const n=bn[Number(e.dataset.deck)];if(!n)continue;const i=e.querySelector(".lift-floor-cap"),o=e.querySelector(".lift-floor-name");i&&(i.textContent=Te(n.label)),o&&(o.textContent=Te(n.name))}this.refreshLiftButtons(),this.liftLocationText&&(this.liftLocationText.textContent=zo(this.currentFloor))}),this.refreshLiftButtons()}}refreshLiftButtons(){if(!this.elevator)return;const t=this.elevator.deck,e=this.elevator.isLocked();for(const n of this.liftFloorButtons)n.classList.toggle("active",Number(n.dataset.deck)===t),n.disabled=e}updateDoors(t){var n,i;const e=(n=this.monster)==null?void 0:n.currentPosition;if(e)for(const o of this.doors)o.target>.5||Math.hypot(o.centre.x-e.x,o.centre.z-e.z)>2.4||(o.target=1,o.open=Math.min(o.open,.55),o.swung||(o.swung=!0,(i=this.audio)==null||i.playDoorSwing(!0)))}updateElevator(t){var n;const e=this.elevator;e&&(e.update(t,this.liftHooks),e.setPower(this.powerOn),this.player&&(this.inLift=e.isInside(this.player.position),(n=this.liftPanel)==null||n.classList.toggle("show",this.inLift&&!e.isLocked())))}rideLift(t){var n;const e=this.elevator;if(!(!e||!this.player)){if(!e.isInside(this.player.position)){this.showMessage(lt("lift.enter"),2600);return}if(t===e.deck){this.showMessage(lt("lift.alreadyHere"),1800);return}e.startTravel(t,this.liftHooks)&&(this.player.inputDisabled=!0,this.player.setRunning(!1),this.player.setCrouching(!1),(n=this.liftPanel)==null||n.classList.remove("show"))}}onLiftTeleport(t){var n;this.onLiftFloorChange(t);const e=this.elevator;!e||!this.player||(this.player.teleport(e.centre.x,e.centre.z+.7),(n=this.monster)==null||n.setVisible(!1))}onLiftArrive(t){var i,o;const e=this.elevator;if((i=this.effects)==null||i.setAmbientFloor(ea),this.player&&(this.player.inputDisabled=!1),this.refreshLiftButtons(),this.monster&&(this.monster.setVisible(!0),e)){const r=this.monster.currentPosition;Math.hypot(r.x-e.centre.x,r.z-e.centre.z)<13&&((o=this.audio)==null||o.playHeartbeat(1),this.addShake(.55,.9),this.showMessage(lt("lift.ambush"),3400))}const n=bn[t];n&&this.showMessage(lt("lift.arrived",{floor:Te(n.name)}),2600)}onLiftFloorChange(t){const e=bn[t];e&&(this.currentFloor=t,this.liftLocationText&&(this.liftLocationText.textContent=Te(e.name)),this.refreshLiftButtons(),this.stairTransition&&this.stairFloorName&&(this.stairFloorName.textContent=Te(e.name),this.stairTransition.classList.add("show"),this.liftArriveTimeout&&window.clearTimeout(this.liftArriveTimeout),this.liftArriveTimeout=window.setTimeout(()=>{var n;(n=this.stairTransition)==null||n.classList.remove("show")},1400)))}installFixtures(){var t,e,n;(t=this.fixturePrompt)==null||t.addEventListener("click",i=>{i.preventDefault(),this.useFixture()}),window.addEventListener("keydown",i=>{i.code!=="KeyF"||i.repeat||this.fixtureTarget&&(i.preventDefault(),this.useFixture())}),(e=this.handButton)==null||e.addEventListener("pointerdown",()=>{this.interaction!==null||!this.fixtureTarget||this.useFixture()}),(n=this.fixturePrompt)==null||n.classList.remove("show")}syncFixtureButton(){const t=this.handButton;if(!t||this.interaction!==null)return;const e=this.fixtureTarget!==null;t.disabled=!e,t.classList.toggle("active",e)}installAudioUnlock(){const t=()=>{var e;(e=this.audio)==null||e.unlock().then(n=>{var i;n&&(this.state==="playing"&&((i=this.audio)==null||i.startAmbience()),document.removeEventListener("pointerdown",t,!0),document.removeEventListener("keydown",t,!0),document.removeEventListener("touchstart",t,!0))})};document.addEventListener("pointerdown",t,!0),document.addEventListener("keydown",t,!0),document.addEventListener("touchstart",t,!0)}bindFixtures(){var e;const t=this.mapInfo;t&&(this.elevator=t.elevator,this.doors=t.doors,this.desks=t.desks,this.lockers=t.lockers,this.fixtureTarget=null,this.hidingInLocker=null,(e=this.lockerView)==null||e.classList.remove("show"),document.body.classList.remove("in-locker"),this.stashKeysInDesks())}stashKeysInDesks(){var i;const t=this.scene;if(!t||this.desks.length===0)return;const e=[];t.traverse(o=>{o.userData.itemId==="key"&&e.push(o)});const n=new C;for(const o of e){o.getWorldPosition(n);let r=null,a=3.2;for(const l of this.desks){const h=Math.hypot(l.centre.x-n.x,l.centre.z-n.z);h>=a||(a=h,r=l)}if(!r)continue;const c=typeof o.userData.pickupIndex=="number"?o.userData.pickupIndex:-1;(i=o.parent)==null||i.remove(o),delete o.userData.itemId,delete o.userData.pickupIndex,o.userData.isKey=!1,o.userData.isDrawerLoot=!0,o.position.set(0,.6,.05),o.rotation.set(0,0,Math.PI/2),r.drawer.add(o),r.loot=o,r.lootKind="key",r.lootIndex=c}}updateFixtures(t){var r,a;if(!this.player)return;const e=this.player.position,n=((r=this.monster)==null?void 0:r.currentPosition)??null,i=[];for(const c of this.doors){if(Math.hypot(c.centre.x-e.x,c.centre.z-e.z)>qy){c.hinge.visible=!1;continue}c.hinge.visible=!0,n&&!c.swung&&Math.hypot(c.centre.x-n.x,c.centre.z-n.z)<2.4&&(c.swung=!0,c.target=1),Cv(c,t),c.open<.35&&c.target<.5&&i.push(c.box)}this.player.setBlockers(i);for(const c of this.desks)Pv(c,t);for(const c of this.lockers)Dv(c,t);let o=null;if(this.hidingInLocker)o={kind:"locker",label:lt("act.lockerLeave"),locker:this.hidingInLocker};else{let c=Wy;for(const l of this.doors){const h=Math.hypot(l.centre.x-e.x,l.centre.z-e.z);h>=c||(c=h,o={kind:"door",label:l.target>.5?lt("act.doorClose"):lt("act.doorOpen"),door:l})}for(const l of this.desks){const h=Math.hypot(l.centre.x-e.x,l.centre.z-e.z);h>=c||(c=h,o={kind:"drawer",label:this.drawerLabel(l),desk:l})}for(const l of this.lockers){const h=Math.hypot(l.centre.x-e.x,l.centre.z-e.z);h>=c||(c=h,o={kind:"locker",label:lt("act.lockerEnter"),locker:l})}}this.fixtureTarget=o,(a=this.fixturePrompt)==null||a.classList.toggle("show",o!==null),o&&this.fixtureLabel&&(this.fixtureLabel.textContent=o.label)}drawerLabel(t){return t.opened?t.loot?t.lootKind==="key"?lt("act.takeKey"):lt("act.takeLoot"):t.slide>.5?lt("act.drawerShut"):lt("act.drawer"):t.lootKind==="key"?lt("act.drawerKey"):lt("act.drawer")}useFixture(){var e,n,i;const t=this.fixtureTarget;if(t){if(t.kind==="door"){const o=t.door.target<.5;t.door.target=o?1:0,t.door.swung=!0,(e=this.audio)==null||e.playDoorSwing(o);return}if(t.kind==="drawer"){const o=t.desk;if(!o.opened){o.opened=!0,o.target=1,(n=this.audio)==null||n.playDrawerSlide();return}if(o.loot){this.takeDrawerLoot(o);return}o.target=o.target>.5?0:1,(i=this.audio)==null||i.playDrawerSlide();return}this.hidingInLocker?this.leaveLocker():this.enterLocker(t.locker)}}takeDrawerLoot(t){var o,r,a,c,l,h,u,d;const e=t.lootKind,n=t.lootIndex;if((r=(o=t.loot)==null?void 0:o.parent)==null||r.remove(t.loot),t.loot=null,e==="key"){(a=this.inventory)==null||a.add("key"),this.keysCollected=((c=this.inventory)==null?void 0:c.totalKeys)??this.keysCollected+1,n>=0&&this.keyTaken.add(n),this.marksDirty=!0,(l=document.getElementById(`key-${this.keysCollected}`))==null||l.classList.add("collected"),(h=this.audio)==null||h.playKeyPickup(),this.showMessage(lt("msg.keyFound",{keys:this.keysCollected,total:fn}),2400),this.updateObjective(),this.keysCollected>=fn&&this.unlockExit();return}const i=e==="battery"?"battery":"bottle";(u=this.inventory)==null||u.add(i),(d=this.audio)==null||d.playKeyPickup(),this.showMessage(lt("msg.drawerLoot",{item:lt(`item.${i}.name`)}),2400)}enterLocker(t){var e,n;!this.player||this.hidingInLocker||(t.target=1,(e=this.audio)==null||e.playLockerDoor(!0),this.hidingInLocker=t,this.player.inputDisabled=!0,this.player.place(t.inside.x,t.inside.z,t.yaw),(n=this.lockerView)==null||n.classList.add("show"),document.body.classList.add("in-locker"),this.showMessage(lt("msg.lockerIn"),2600),this.lockerTimeout&&window.clearTimeout(this.lockerTimeout),this.lockerTimeout=window.setTimeout(()=>{var i;t.target=0,(i=this.audio)==null||i.playLockerDoor(!1)},700))}leaveLocker(){var e,n;const t=this.hidingInLocker;!t||!this.player||(this.lockerTimeout&&window.clearTimeout(this.lockerTimeout),this.hidingInLocker=null,t.target=1,(e=this.audio)==null||e.playLockerDoor(!0),this.player.inputDisabled=!1,this.player.teleport(t.outside.x,t.outside.z),(n=this.lockerView)==null||n.classList.remove("show"),document.body.classList.remove("in-locker"),this.showMessage(lt("msg.lockerOut"),1800))}pauseGame(){var t,e,n;this.state==="playing"&&(this.state="paused",cancelAnimationFrame(this.animationId),(t=this.player)==null||t.setRunning(!1),(e=this.audio)==null||e.suspend(),(n=this.pauseMenu)==null||n.classList.remove("hidden"))}resumeGame(){var t,e;this.state==="paused"&&((t=this.pauseMenu)==null||t.classList.add("hidden"),(e=this.audio)==null||e.resume(),this.clock.getDelta(),this.state="playing",this.gameLoop())}restartGame(){var t,e,n,i,o,r,a,c,l,h;for(const u of[this.gameoverScreen,this.winScreen,this.pauseMenu,this.jumpscareOverlay])u==null||u.classList.add("hidden");if((t=this.hud)==null||t.classList.add("hidden"),(e=this.mobileControls)==null||e.classList.add("hidden"),(n=this.roomBanner)==null||n.classList.remove("show"),this.dangerVignette&&(this.dangerVignette.style.opacity="0"),this.resetRunState(),this.scene&&this.camera){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0]);this.scene.add(this.camera),this.mapInfo=Kl(this.scene),this.bindFixtures(),this.currentFloor=Vl(this.mapInfo.playerSpawn.z/j),this.liftLocationText&&(this.liftLocationText.textContent=zo(this.currentFloor)),this.player&&(this.player.inputDisabled=!1),this.refreshLiftButtons(),(i=this.minimap)==null||i.attach(this.mapInfo),(o=this.player)==null||o.reset(this.mapInfo.grid,this.mapInfo.playerSpawn),(r=this.player)==null||r.setColliders(this.mapInfo.colliders),(a=this.effects)==null||a.reset(),(c=this.effects)==null||c.setFluorescentMaterials(this.mapInfo.fluorescentMaterials),(l=this.monster)==null||l.setColliders(this.mapInfo.colliders),this.effects&&(this.flashlight=this.effects.createFlashlight(this.camera)),this.collectPickups(),(h=this.monster)==null||h.reset(this.mapInfo.monsterSpawn),this.addMapLights(),this.applyQuality()}this.startGame()}resetRunState(){var a,c,l,h,u,d,f,m,v,g;this.keysCollected=0,this.notesCollected=0,this.cardCollected=!1,(a=this.inventory)==null||a.clear(),this.pickups.length=0,this.boardedDoors=[],this.interaction=null,this.marksDirty=!0,this.substationOn=!1,this.exitOpened=!1,this.gateOpened=!1,this.gateSwing=0,this.gateNoticeCooldown=0,this.wasOutdoors=!1,this.outdoorLights=[],this.flashlightBattery=100,this.flashlightOn=!0,this.health=rh,this.invulnerable=0,this.danger=0,this.heartbeatTimer=0,this.shakeTime=0,this.elapsed=0,this.phase="power",this.powerOn=!1,this.currentRoomIndex=-1,this.visitedRooms.clear(),this.scriptedScares.clear(),this.keyTaken.clear(),this.noteTaken.clear(),this.cardTaken.clear(),this.flashlight&&(this.flashlight.intensity=5);const t=(c=this.mapInfo)==null?void 0:c.exitLock.material;t instanceof gt&&(t.emissive.set(16718362),t.emissiveIntensity=1.4);const e=(l=this.mapInfo)==null?void 0:l.breakerMesh.children.find(p=>p.userData.isBreakerLever);e&&(e.rotation.x=-.6);const n=(h=this.mapInfo)==null?void 0:h.breakerMesh.children.find(p=>p.userData.isBreakerLamp),i=n instanceof A?n.material:null;i instanceof gt&&i.emissive.set(16720384);for(let p=1;p<=fn;p++)(u=document.getElementById(`key-${p}`))==null||u.classList.remove("collected");(d=document.getElementById("card-icon"))==null||d.classList.remove("collected"),(f=document.getElementById("power-icon"))==null||f.classList.remove("collected"),(m=this.lightningFlash)==null||m.classList.remove("show"),(v=this.effects)==null||v.setOutdoors(!1),(g=this.audio)==null||g.setRaining(!1);const o=document.getElementById("battery-bar");o&&(o.style.width="100%",o.classList.remove("low","charging"));const r=document.getElementById("stamina-bar");r&&(r.style.width="100%",r.classList.remove("low")),this.updateObjective(),this.updateHUD()}collectPickups(){var t;this.keys=[],this.notes=[],this.cards=[],this.pickups.length=0,this.boardedDoors=[],(t=this.scene)==null||t.traverse(e=>{e.userData.isKey&&this.keys.push(e),e.userData.isNote&&this.notes.push(e),e.userData.isCard&&this.cards.push(e),e.userData.isBoardedDoor&&this.boardedDoors.push(e);const n=e.userData.itemId;if(typeof n=="string"&&e.parent)this.pickups.push({object:e,kind:"item",noteIndex:-1,item:n,label:lt("act.take",{item:lt(`item.${n}.name`)})});else if(e.userData.isNote){const i=typeof e.userData.noteIndex=="number"?e.userData.noteIndex:-1;this.pickups.push({object:e,kind:"note",noteIndex:i,item:"key",label:lt("act.readNote")})}}),this.marksDirty=!0}restorePower(){var t,e,n,i;this.powerOn=!0,this.phase="keys",(t=this.effects)==null||t.setPower(!0),(e=this.monster)==null||e.setAggression(1.28),(n=this.audio)==null||n.playPowerOn(),this.addShake(.55,1.1),(i=this.mapInfo)==null||i.breakerMesh.traverse(o=>{if(o.userData.isBreakerLever&&(o.rotation.x=.6),o.userData.isBreakerLamp&&o instanceof A){const r=o.material;r instanceof gt&&(r.emissive.set(2293606),r.emissiveIntensity=2.4)}}),this.showMessage(lt("msg.powerOn"),4200),this.updateObjective()}updateRoomBanner(){if(!this.player||!this.mapInfo)return;const t=Vv(this.mapInfo,this.player.position.x,this.player.position.z);if(t===this.currentRoomIndex||(this.currentRoomIndex=t,t<0))return;const e=this.mapInfo.rooms[t];e&&(this.showRoomBanner(e),this.visitedRooms.has(t)||(this.visitedRooms.add(t),this.triggerRoomScare(e)))}showRoomBanner(t){this.roomBanner&&(this.roomBannerName&&(this.roomBannerName.textContent=Te(t.name)),this.roomBannerSubtitle&&(this.roomBannerSubtitle.textContent=Te(t.subtitle)),this.roomBanner.classList.add("show"),this.roomBannerTimeout&&window.clearTimeout(this.roomBannerTimeout),this.roomBannerTimeout=window.setTimeout(()=>{var e;(e=this.roomBanner)==null||e.classList.remove("show")},3600))}triggerRoomScare(t){var n,i,o;const e=Zy[t.key];!e||this.scriptedScares.has(t.key)||(this.scriptedScares.add(t.key),e==="whisper"?((n=this.audio)==null||n.playWhisper(),this.addShake(.12,.5)):e==="scare"?this.triggerJumpscare():((i=this.effects)==null||i.blackout(1500),(o=this.audio)==null||o.playWhisper()))}updateInteraction(t){var a,c;if(this.interactionTimer-=t,this.interactionTimer>0||(this.interactionTimer=.1,this.interaction=null,!this.player||!this.mapInfo))return;const e=this.player.position;let n=null,i=sh;for(const l of this.pickups){l.object.getWorldPosition(this.scratch);const h=Math.hypot(this.scratch.x-e.x,this.scratch.z-e.z);h>=i||(i=h,n={kind:"pickup",label:l.label,pickup:l})}const o=this.nearestBoardedDoor();o&&o.distance<i&&(i=o.distance,n={kind:"boards",label:(a=this.inventory)!=null&&a.has("crowbar")?lt("act.pry"):lt("act.boarded")});const r=Math.hypot(this.mapInfo.breakerPosition.x-e.x,this.mapInfo.breakerPosition.z-e.z);!this.powerOn&&r<i&&(n={kind:"breaker",label:(c=this.inventory)!=null&&c.has("fuse")?lt("act.installFuse"):lt("act.needFuse")}),this.interaction=n}nearestBoardedDoor(){if(!this.player||this.boardedDoors.length===0)return null;const t=this.player.position;let e=null;for(const n of this.boardedDoors){const i=Math.hypot(n.position.x-t.x,n.position.z-t.z);i>sh||(!e||i<e.distance)&&(e={object:n,distance:i})}return e}interact(){var e,n;const t=this.interaction;if(t){if(t.kind==="pickup"){this.takePickup(t.pickup);return}if(t.kind==="boards"){if(!((e=this.inventory)!=null&&e.has("crowbar"))){this.showMessage(lt("msg.boarded"),2600);return}this.pryBoardedDoor();return}if(!((n=this.inventory)!=null&&n.has("fuse"))){this.showMessage(lt("msg.noFuse"),3200);return}this.inventory.take("fuse"),this.restorePower()}}takePickup(t){var i,o,r,a,c,l,h;const e=this.pickups.indexOf(t);if(e>=0&&this.pickups.splice(e,1),(i=t.object.parent)==null||i.remove(t.object),this.interaction=null,t.kind==="note"){t.noteIndex>=0&&this.noteTaken.add(t.noteIndex),this.notesCollected++,(o=this.audio)==null||o.playNote(),this.showNote(t.noteIndex),this.marksDirty=!0;return}const n=typeof t.object.userData.pickupIndex=="number"?t.object.userData.pickupIndex:-1;if(n>=0&&(t.item==="key"&&this.keyTaken.add(n),t.item==="card"&&this.cardTaken.add(n)),(r=this.audio)==null||r.playKeyPickup(),(a=this.inventory)==null||a.add(t.item),this.marksDirty=!0,t.item==="key"){this.keysCollected=((c=this.inventory)==null?void 0:c.totalKeys)??0,this.keysCollected>0&&((l=document.getElementById(`key-${this.keysCollected}`))==null||l.classList.add("collected")),this.showMessage(lt("msg.keyFound",{keys:this.keysCollected,total:fn}),2200),this.updateObjective(),this.keysCollected>=fn&&this.unlockExit();return}if(t.item==="card"){this.cardCollected=!0,(h=document.getElementById("card-icon"))==null||h.classList.add("collected"),this.showMessage(lt("msg.cardFound"),2600),this.unlockGate(),this.updateObjective();return}this.showMessage(lt("msg.itemTaken",{item:lt(`item.${t.item}.name`),hint:lt(`item.${t.item}.hint`)}),3e3),this.updateObjective()}pryBoardedDoor(){var e,n,i;const t=this.mapInfo;if(!(!t||this.boardedDoors.length===0)){for(const o of this.boardedDoors){const r=Math.round(o.position.z/j),a=Math.round(o.position.x/j);((e=t.grid[r])==null?void 0:e[a])===0&&(t.grid[r][a]=1),(n=o.parent)==null||n.remove(o)}this.boardedDoors=[],(i=this.audio)==null||i.playDoorUnlock(),this.addShake(.18,.5),this.showMessage(lt("msg.pried"),3200),this.updateObjective()}}useItem(t){var e,n;if(t==="battery"){if(!((e=this.inventory)!=null&&e.take("battery")))return;this.flashlightBattery=Math.min(100,this.flashlightBattery+45),(n=this.audio)==null||n.playKeyPickup(),this.showMessage(lt("msg.battery"),2e3);return}if(t==="bottle"){this.throwBottle();return}this.showMessage(lt("msg.itemUsed",{item:lt(`item.${t}.name`),hint:lt(`item.${t}.hint`)}),2600)}throwBottle(){var c,l,h;if(!this.player||!this.monster||!this.scene||!((c=this.inventory)!=null&&c.take("bottle")))return;const t=new C;(l=this.camera)==null||l.getWorldPosition(t);const e=new C;(h=this.camera)==null||h.getWorldDirection(e);const n=new A(new We(.07,8,8),new gt({color:10475720,roughness:.15,transparent:!0,opacity:.7}));n.position.copy(t).addScaledVector(e,.5),this.scene.add(n);const i=e.clone().multiplyScalar(11);i.y=4.2;let o=!1;const r=1/60,a=()=>{var f,m,v;if(o)return;i.y-=14*r,n.position.addScaledVector(i,r),n.rotation.x+=9*r,n.rotation.z+=7*r;const u=.08,d=n.position.length()>260;if(n.position.y<=u||d){o=!0;const g=n.position.clone();(f=this.scene)==null||f.remove(n),n.material.dispose(),n.geometry.dispose(),(m=this.audio)==null||m.playGlassShatter(),this.spawnShardBurst(g),(v=this.monster)==null||v.goInvestigateAt(g),this.showMessage(lt("msg.glass"),2200)}else requestAnimationFrame(a)};requestAnimationFrame(a)}spawnShardBurst(t){if(!this.scene)return;const e=14,n=new Float32Array(e*3),i=[];for(let u=0;u<e;u++)n[u*3]=t.x,n[u*3+1]=Math.max(.05,t.y),n[u*3+2]=t.z,i.push(new C((Math.random()-.5)*4,2+Math.random()*3,(Math.random()-.5)*4));const o=new Ae;o.setAttribute("position",new Be(n,3));const r=new sr({color:13627108,size:.07,transparent:!0,opacity:.95,depthWrite:!1}),a=new Ga(o,r);this.scene.add(a);let c=0;const l=1/60,h=()=>{var f;c+=l;const u=a.geometry.getAttribute("position"),d=u.array;for(let m=0;m<e;m++)i[m].y-=12*l,d[m*3]+=i[m].x*l,d[m*3+1]=Math.max(.03,d[m*3+1]+i[m].y*l),d[m*3+2]+=i[m].z*l;u.needsUpdate=!0,r.opacity=Math.max(0,.95-c*1.1),c<1.1?requestAnimationFrame(h):((f=this.scene)==null||f.remove(a),o.dispose(),r.dispose())};requestAnimationFrame(h)}unlockExit(){var t,e;this.phase="escape",((t=this.mapInfo)==null?void 0:t.exitLock.material)instanceof gt&&(this.mapInfo.exitLock.material.emissive.set(2293606),this.mapInfo.exitLock.material.emissiveIntensity=2.2),(e=this.audio)==null||e.playDoorUnlock(),this.showMessage(lt("msg.allKeys"),4e3),this.updateObjective()}checkExitDoor(){if(!this.player||!this.mapInfo)return;if(this.player.position.distanceTo(this.mapInfo.exitPosition)>2.4){this.lockedNoticeCooldown=0;return}if(this.exitOpened)return;const e=this.powerOn?this.keysCollected<fn?lt("msg.exitLocked",{left:fn-this.keysCollected}):null:lt("msg.exitUnpowered");if(e){this.lockedNoticeCooldown<=0&&(this.lockedNoticeCooldown=3,this.showMessage(e,2400));return}this.openExitDoor()}openExitDoor(){var e,n,i;this.exitOpened=!0,this.phase="outside";const t=(e=this.mapInfo)==null?void 0:e.exitDoor;t&&(t.rotation.y=-1.2),((n=this.mapInfo)==null?void 0:n.exitLock.material)instanceof gt&&(this.mapInfo.exitLock.material.emissive.set(2293606),this.mapInfo.exitLock.material.emissiveIntensity=2.2),(i=this.audio)==null||i.playDoorUnlock(),this.addShake(.2,.7),this.showMessage(lt("msg.exitOpen"),4600),this.updateObjective()}checkOutdoors(){var e,n;if(!this.player)return;const t=Gv(this.player.position.x,this.player.position.z);t!==this.wasOutdoors&&(this.wasOutdoors=t,(e=this.effects)==null||e.setOutdoors(t),(n=this.audio)==null||n.setRaining(t),t&&this.showMessage(lt("msg.outdoors"),4200))}onLightning(){var e;(e=this.audio)==null||e.playThunder(.3+Math.random()*.6);const t=this.lightningFlash;t&&(t.classList.add("show"),this.lightningTimeout&&window.clearTimeout(this.lightningTimeout),this.lightningTimeout=window.setTimeout(()=>t.classList.remove("show"),150),window.setTimeout(()=>{t.classList.add("show"),window.setTimeout(()=>t.classList.remove("show"),80)},230))}checkSubstation(){this.substationOn||!this.player||!this.mapInfo||this.player.position.distanceTo(this.mapInfo.substationPosition)>2.4||this.restoreSubstation()}restoreSubstation(){var t,e,n,i;this.substationOn=!0,(t=this.audio)==null||t.playPowerOn(),this.addShake(.5,1.1),(e=this.mapInfo)==null||e.substationMesh.traverse(o=>{if(o.userData.isSubstationLever&&(o.rotation.x=.6),o.userData.isSubstationLamp&&o instanceof A){const r=o.material;r instanceof gt&&(r.emissive.set(2293606),r.emissiveIntensity=2.4)}}),this.lightOutdoorLamps();for(const o of((n=this.mapInfo)==null?void 0:n.lampMaterials)??[])o.emissiveIntensity=1.5;(i=document.getElementById("power-icon"))==null||i.classList.add("collected"),this.showMessage(lt("msg.substationOn"),4400),this.unlockGate(),this.updateObjective()}unlockGate(){if(this.substationOn){if(!this.cardCollected){this.showMessage(lt("msg.gateNeedsCard"),3600);return}this.openMainGate()}}openMainGate(){var t;this.gateOpened||!this.mapInfo||(this.gateOpened=!0,this.phase="gate",this.mapInfo.gateLock.material instanceof gt&&(this.mapInfo.gateLock.material.emissive.set(2293606),this.mapInfo.gateLock.material.emissiveIntensity=2.2),(t=this.audio)==null||t.playGateUnlock(),this.addShake(.65,1.5),this.showMessage(lt("msg.gateOpen"),5200),this.updateObjective())}animateGate(t){if(!this.gateOpened||!this.mapInfo||this.gateSwing>=1)return;this.gateSwing=Math.min(1,this.gateSwing+t*.7);const e=this.gateSwing*1.55;for(const n of this.mapInfo.gateLeaves){const i=n.userData.sign??1;n.rotation.y=-i*e}}checkMainGate(){if(!this.player||!this.mapInfo)return;if(this.player.position.distanceTo(this.mapInfo.gatePosition)>3.6){this.gateNoticeCooldown=0;return}if(this.gateOpened){this.onWin();return}const e=this.substationOn?lt("msg.gateLocked"):lt("msg.gateNoPower");this.gateNoticeCooldown<=0&&(this.gateNoticeCooldown=3,this.showMessage(e,2600))}hitByMonster(){var t,e;this.state!=="playing"||this.invulnerable>0||(this.health=Math.max(0,this.health-Xy),this.invulnerable=Yy,(t=this.audio)==null||t.playDamage(),this.flashDamage(),this.addShake(.5,.5),(e=this.monster)==null||e.stun(3.2),this.health<=0?this.onPlayerCaught():this.showMessage(lt("msg.hurt",{health:this.health}),1800))}addShake(t,e){this.shakeAmount=t,this.shakeDuration=Math.max(.1,e),this.shakeTime=this.shakeDuration}applyShake(t){if(this.shakeTime<=0||!this.camera)return;this.shakeTime-=t;const e=Math.max(0,this.shakeTime/this.shakeDuration),n=this.shakeAmount*e;this.camera.position.x+=(Math.random()-.5)*n,this.camera.position.y+=(Math.random()-.5)*n*.7,this.camera.rotation.z+=(Math.random()-.5)*n*.08}flashDamage(){this.damageFlash&&(this.damageFlash.classList.add("show"),this.damageTimeout&&window.clearTimeout(this.damageTimeout),this.damageTimeout=window.setTimeout(()=>{var t;(t=this.damageFlash)==null||t.classList.remove("show")},320))}updateBattery(t){this.invulnerable>0&&(this.invulnerable-=t);const e=!this.flashlightOn&&this.flashlightBattery<100;this.flashlightOn?(this.flashlightBattery=Math.max(0,this.flashlightBattery-Ky*t),this.flashlightBattery<=0&&(this.flashlightOn=!1,this.flashlight&&(this.flashlight.intensity=0),this.showMessage(lt("msg.batteryDead"),3e3))):e&&(this.flashlightBattery=Math.min(100,this.flashlightBattery+$y*t));const n=document.getElementById("battery-bar");n&&(n.style.width=`${this.flashlightBattery.toFixed(1)}%`,n.classList.toggle("low",this.flashlightBattery<25&&!e),n.classList.toggle("charging",e))}updateDanger(t){var r,a;if(!this.monster||!this.player)return;const e=this.monster.distanceTo(this.player.position),n=1-Math.min(1,Math.max(0,(e-2.5)/13)),i=this.monster.isChasing?.35:0,o=Math.min(1,n*.75+i);this.danger+=(o-this.danger)*Math.min(1,t*2.5),(r=this.effects)==null||r.setDanger(this.danger),this.dangerVignette&&(this.dangerVignette.style.opacity=(this.danger*.9).toFixed(3)),this.lockedNoticeCooldown>0&&(this.lockedNoticeCooldown-=t),this.gateNoticeCooldown>0&&(this.gateNoticeCooldown-=t),this.heartbeatTimer-=t,this.danger>.22&&this.heartbeatTimer<=0&&(this.heartbeatTimer=1.15-this.danger*.72,(a=this.audio)==null||a.playHeartbeat(this.danger))}animatePickups(t){for(const e of this.pickups){if(e.kind!=="item")continue;const n=e.object;n.rotation.y+=t*(e.item==="key"?1.5:1.1),n.position.y=.95+Math.sin(this.elapsed*1.8+n.position.x)*.1}}updateMinimap(){var e;if(!this.minimap||!this.mapInfo||!this.player)return;const t=this.minimapState;t.player.x=this.player.position.x,t.player.z=this.player.position.z,t.player.yaw=this.player.facing,this.monster?(t.monster=t.monster??{x:0,z:0},t.monster.x=this.monster.currentPosition.x,t.monster.z=this.monster.currentPosition.z):t.monster=null,t.chased=((e=this.monster)==null?void 0:e.isChasing)??!1,this.marksDirty&&this.rebuildMarks(),this.minimap.update(t)}rebuildMarks(){const t=this.mapInfo;if(!t)return;const e=[];t.keyPositions.forEach((n,i)=>{this.keyTaken.has(i)||e.push({x:n.x,z:n.z,kind:"key"})}),t.cardPositions.forEach((n,i)=>{this.cardTaken.has(i)||e.push({x:n.x,z:n.z,kind:"card"})}),t.notePositions.forEach((n,i)=>{this.noteTaken.has(i)||e.push({x:n.x,z:n.z,kind:"note"})}),this.powerOn||e.push({x:t.breakerPosition.x,z:t.breakerPosition.z,kind:"power"}),this.substationOn||e.push({x:t.substationPosition.x,z:t.substationPosition.z,kind:"power"}),this.exitOpened||e.push({x:t.exitPosition.x,z:t.exitPosition.z,kind:"exit"}),this.gateOpened||e.push({x:t.gatePosition.x,z:t.gatePosition.z,kind:"gate"}),this.minimapState.marks=e,this.marksDirty=!1}updateHUD(){var l;if(!this.player)return;const t=document.getElementById("stamina-bar");if(t){const h=this.player.staminaRatio;t.style.width=`${(h*100).toFixed(1)}%`,t.classList.toggle("low",h<.25)}this.noteCount&&(this.noteCount.textContent=`${this.notesCollected}/${Ji}`);const e=this.player.crouching,n=e&&this.isNearHidingSpot(),i=document.getElementById("crouch-vignette"),o=document.getElementById("hidden-indicator"),r=document.getElementById("crouch-btn");i&&i.classList.toggle("show",e),o&&o.classList.toggle("show",n),r&&r.classList.toggle("crouch-active",e);const a=this.interaction,c=a!==null;this.interactPrompt&&(this.interactPrompt.classList.toggle("show",c),a&&this.interactLabel&&(this.interactLabel.textContent=a.label),this.interactPrompt.classList.toggle("blocked",(a==null?void 0:a.kind)==="breaker"&&!(((l=this.inventory)==null?void 0:l.has("fuse"))??!1))),this.handButton&&(this.handButton.disabled=!c,this.handButton.classList.toggle("active",c))}updateObjective(){var t;if(this.objectiveText)if(!this.powerOn)this.objectiveText.textContent=lt((t=this.inventory)!=null&&t.has("fuse")?"obj.power.withFuse":"obj.power.noFuse"),this.phase="power";else if(this.keysCollected<fn)this.objectiveText.textContent=lt("obj.keys",{keys:this.keysCollected,total:fn}),this.phase="keys";else if(!this.exitOpened)this.objectiveText.textContent=lt("obj.escape"),this.phase="escape";else if(!this.cardCollected||!this.substationOn){const e=this.cardCollected?"✓":"—",n=this.substationOn?"✓":"—";this.objectiveText.textContent=lt("obj.outside",{card:e,power:n}),this.phase="outside"}else this.objectiveText.textContent=lt("obj.gate"),this.phase="gate"}showMessage(t,e=2600){this.hudMessage&&(this.hudMessage.textContent=t,this.hudMessage.classList.add("show"),this.hudMessageTimeout&&window.clearTimeout(this.hudMessageTimeout),this.hudMessageTimeout=window.setTimeout(()=>{var n;(n=this.hudMessage)==null||n.classList.remove("show")},e))}showNote(t){const e=t>=0&&t<zl.length?t:this.notesCollected-1,n=zl[e];!n||!this.noteToast||(this.noteToastTitle&&(this.noteToastTitle.textContent=lt("msg.note",{notes:this.notesCollected,total:Ji,title:Te(n.title)})),this.noteToastText&&(this.noteToastText.textContent=Te(n.text)),this.noteToast.classList.add("show"),this.noteToastTimeout&&window.clearTimeout(this.noteToastTimeout),this.noteToastTimeout=window.setTimeout(()=>{var i;(i=this.noteToast)==null||i.classList.remove("show")},8e3))}toggleFlashlight(){if(!this.flashlightOn&&this.flashlightBattery<=0){this.showMessage(lt("msg.noBattery"),1800);return}this.flashlightOn=!this.flashlightOn,this.flashlight&&(this.flashlight.intensity=this.flashlightOn?5:0)}prepareJumpscareFace(){const t=document.getElementById("jumpscare-face");if(t)try{t.style.backgroundImage=`url(${Jg()})`}catch{}}triggerJumpscare(){var t,e;this.state==="playing"&&(this.state="jumpscare",(t=this.jumpscareOverlay)==null||t.classList.remove("hidden"),(e=this.audio)==null||e.playJumpscare(),this.addShake(.35,.9),window.setTimeout(()=>{var n;(n=this.jumpscareOverlay)==null||n.classList.add("hidden"),this.state==="jumpscare"&&(this.state="playing",this.clock.getDelta(),this.gameLoop())},1400))}onPlayerCaught(){var t,e,n,i;this.state==="gameover"||this.state==="win"||(this.state="gameover",(t=this.audio)==null||t.stopAmbience(),(e=this.audio)==null||e.setRaining(!1),(n=this.audio)==null||n.playJumpscare(),(i=this.jumpscareOverlay)==null||i.classList.remove("hidden"),cancelAnimationFrame(this.animationId),window.setTimeout(()=>{var a,c,l,h,u,d;(a=this.jumpscareOverlay)==null||a.classList.add("hidden"),(c=this.hud)==null||c.classList.add("hidden"),(l=this.mobileControls)==null||l.classList.add("hidden"),(h=this.roomBanner)==null||h.classList.remove("show"),this.dangerVignette&&(this.dangerVignette.style.opacity="0");const o=document.getElementById("gameover-text");o&&(o.textContent=this.phase==="power"?lt("over.power"):this.phase==="keys"?lt("over.keys"):this.phase==="escape"?lt("over.escape"):lt("over.outside"));const r=document.getElementById("gameover-stats");r&&(r.textContent=lt("over.stats",{keys:this.keysCollected,total:fn,card:this.cardCollected?"✓":"—",power:this.substationOn?"✓":"—",notes:this.notesCollected,notesTotal:Ji,rooms:this.visitedRooms.size,roomsTotal:((u=this.mapInfo)==null?void 0:u.rooms.length)??0})),(d=this.gameoverScreen)==null||d.classList.remove("hidden")},2e3))}onWin(){var i,o,r,a,c,l,h;if(this.state==="win"||this.state==="gameover")return;this.state="win",(i=this.audio)==null||i.stopAmbience(),(o=this.audio)==null||o.setRaining(!1),cancelAnimationFrame(this.animationId),(r=this.hud)==null||r.classList.add("hidden"),(a=this.mobileControls)==null||a.classList.add("hidden"),(c=this.roomBanner)==null||c.classList.remove("show"),this.dangerVignette&&(this.dangerVignette.style.opacity="0");const t=Math.floor(this.elapsed),e=document.getElementById("win-time");e&&(e.textContent=lt("win.time",{time:this.formatTime(t)}));const n=document.getElementById("win-stats");if(n){const u=this.notesCollected>=Ji?lt("win.notesAll"):lt("win.notesMissed",{missed:Ji-this.notesCollected});n.textContent=lt("win.stats",{ending:u,notes:this.notesCollected,notesTotal:Ji,card:this.cardCollected?"✓":"—",power:this.substationOn?"✓":"—",rooms:this.visitedRooms.size,roomsTotal:((l=this.mapInfo)==null?void 0:l.rooms.length)??0,best:this.formatTime(this.saveBestTime(t))})}(h=this.winScreen)==null||h.classList.remove("hidden")}formatTime(t){const e=Math.floor(t/60),n=t%60;return`${e}:${n.toString().padStart(2,"0")}`}saveBestTime(t){let e=t;try{const n=Number(localStorage.getItem(ta));Number.isFinite(n)&&n>0&&(e=Math.min(n,t)),localStorage.setItem(ta,String(e))}catch{}return this.updateBestTimeUI(),e}updateBestTimeUI(){const t=document.getElementById("best-time");if(t)try{const e=Number(localStorage.getItem(ta));t.textContent=Number.isFinite(e)&&e>0?this.formatTime(e):"—"}catch{t.textContent="—"}}isPortraitBlocked(){return document.body.classList.contains("touch-device")?window.innerHeight>window.innerWidth:!1}async lockLandscape(){try{const t=screen.orientation;t&&typeof t.lock=="function"&&await t.lock("landscape")}catch{}}onResize(){var n,i,o;if(!this.camera||!this.renderer)return;const t=((n=window.visualViewport)==null?void 0:n.width)??window.innerWidth,e=((i=window.visualViewport)==null?void 0:i.height)??window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e,!1),(o=this.minimap)==null||o.relayout()}setLoadingProgress(t,e){this.loadingBar&&(this.loadingBar.style.width=`${t}%`),this.loadingText&&(this.loadingText.textContent=e)}delay(t){return new Promise(e=>window.setTimeout(e,t))}isNearHidingSpot(){if(!this.player||!this.mapInfo)return!1;for(const t of this.mapInfo.hidingSpots)if(this.player.position.distanceTo(t)<2.2)return!0;return!1}installLanguageUI(){cc(),this.refreshLanguageButtons();const t=Array.from(document.querySelectorAll(".lang-btn"));for(const e of t)e.addEventListener("click",()=>{const n=e.dataset.lang;(n==="uz"||n==="en"||n==="ru")&&xv(n)});Ol(()=>this.onLanguageChanged())}refreshLanguageButtons(){const t=_v();for(const e of Array.from(document.querySelectorAll(".lang-btn")))e.classList.toggle("active",e.dataset.lang===t)}onLanguageChanged(){var e;this.refreshLanguageButtons(),this.updateObjective(),this.mapInfo&&Fv(this.mapInfo);const t=(e=this.mapInfo)==null?void 0:e.rooms[this.currentRoomIndex];t&&(this.roomBannerName&&(this.roomBannerName.textContent=Te(t.name)),this.roomBannerSubtitle&&(this.roomBannerSubtitle.textContent=Te(t.subtitle))),this.stairFloorName&&(this.stairFloorName.textContent=zo(this.currentFloor))}installRotateGuard(){const t=document.getElementById("rotate-overlay");if(!t)return;const e=()=>{const n=this.isPortraitBlocked();t.classList.toggle("hidden",!n),n&&this.lockLandscape()};e(),window.addEventListener("resize",e),window.addEventListener("orientationchange",e)}}window.__DARK_ASYLUM_BOOTED=!0;document.body.classList.remove("unbooted");cc();("ontouchstart"in window||navigator.maxTouchPoints>0)&&document.body.classList.add("touch-device");"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});const Qy=new Jy;Qy.init().catch(s=>{console.error("Game initialization failed:",s);const t=document.getElementById("loading-text");if(t){const e=s instanceof Error?`${s.message}
${s.stack??""}`:String(s);t.textContent=e.slice(0,200),t.style.color="#ff0000",t.style.fontSize="11px",t.style.wordBreak="break-all"}});

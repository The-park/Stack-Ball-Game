var Bh=Object.defineProperty;var zh=(r,e,t)=>e in r?Bh(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Sa=(r,e,t)=>zh(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jo="160",kh=0,wa=1,Hh=2,Ec=1,Tc=2,An=3,qn=0,Pt=1,tn=2,Rn=0,Vn=1,Uo=2,Ea=3,Ta=4,Gh=5,si=100,Vh=101,Wh=102,Aa=103,Ca=104,qh=200,Xh=201,Yh=202,jh=203,Oo=204,Bo=205,Zh=206,$h=207,Kh=208,Jh=209,Qh=210,eu=211,tu=212,nu=213,iu=214,su=0,ru=1,ou=2,yr=3,au=4,lu=5,cu=6,hu=7,Qo=0,uu=1,du=2,Pn=0,Ac=1,Cc=2,Rc=3,Pc=4,fu=5,Lc=6,Ic=300,Wi=301,qi=302,zo=303,ko=304,Ir=306,ys=1e3,nn=1001,Ho=1002,Ft=1003,Ra=1004,Wr=1005,wt=1006,pu=1007,Ms=1008,Wn=1009,mu=1010,_u=1011,ea=1012,Dc=1013,zn=1014,kn=1015,Ln=1016,Nc=1017,Fc=1018,ai=1020,gu=1021,sn=1023,vu=1024,xu=1025,li=1026,Xi=1027,yu=1028,Uc=1029,Mu=1030,Oc=1031,Bc=1033,qr=33776,Xr=33777,Yr=33778,jr=33779,Pa=35840,La=35841,Ia=35842,Da=35843,zc=36196,Na=37492,Fa=37496,Ua=37808,Oa=37809,Ba=37810,za=37811,ka=37812,Ha=37813,Ga=37814,Va=37815,Wa=37816,qa=37817,Xa=37818,Ya=37819,ja=37820,Za=37821,Zr=36492,$a=36494,Ka=36495,bu=36283,Ja=36284,Qa=36285,el=36286,kc=3e3,ci=3001,Su=3200,wu=3201,ta=0,Eu=1,$t="",St="srgb",In="srgb-linear",na="display-p3",Dr="display-p3-linear",Mr="linear",nt="srgb",br="rec709",Sr="p3",pi=7680,tl=519,Tu=512,Au=513,Cu=514,Hc=515,Ru=516,Pu=517,Lu=518,Iu=519,Go=35044,nl="300 es",Vo=1035,Cn=2e3,wr=2001;class Zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let il=1234567;const ps=Math.PI/180,bs=180/Math.PI;function pn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[r&255]+At[r>>8&255]+At[r>>16&255]+At[r>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function Et(r,e,t){return Math.max(e,Math.min(t,r))}function ia(r,e){return(r%e+e)%e}function Du(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Nu(r,e,t){return r!==e?(t-r)/(e-r):0}function ms(r,e,t){return(1-t)*r+t*e}function Fu(r,e,t,n){return ms(r,e,1-Math.exp(-t*n))}function Uu(r,e=1){return e-Math.abs(ia(r,e*2)-e)}function Ou(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Bu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function zu(r,e){return r+Math.floor(Math.random()*(e-r+1))}function ku(r,e){return r+Math.random()*(e-r)}function Hu(r){return r*(.5-Math.random())}function Gu(r){r!==void 0&&(il=r);let e=il+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vu(r){return r*ps}function Wu(r){return r*bs}function Wo(r){return(r&r-1)===0&&r!==0}function qu(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Er(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Xu(r,e,t,n,i){const s=Math.cos,o=Math.sin,l=s(t/2),c=o(t/2),u=s((e+n)/2),d=o((e+n)/2),a=s((e-n)/2),h=o((e-n)/2),f=s((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":r.set(l*d,c*a,c*h,l*u);break;case"YZY":r.set(c*h,l*d,c*a,l*u);break;case"ZXZ":r.set(c*a,c*h,l*d,l*u);break;case"XZX":r.set(l*d,c*m,c*f,l*u);break;case"YXY":r.set(c*f,l*d,c*m,l*u);break;case"ZYZ":r.set(c*m,c*f,l*d,l*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function dn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Je(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Rt={DEG2RAD:ps,RAD2DEG:bs,generateUUID:pn,clamp:Et,euclideanModulo:ia,mapLinear:Du,inverseLerp:Nu,lerp:ms,damp:Fu,pingpong:Uu,smoothstep:Ou,smootherstep:Bu,randInt:zu,randFloat:ku,randFloatSpread:Hu,seededRandom:Gu,degToRad:Vu,radToDeg:Wu,isPowerOfTwo:Wo,ceilPowerOfTwo:qu,floorPowerOfTwo:Er,setQuaternionFromProperEuler:Xu,normalize:Je,denormalize:dn};class te{constructor(e=0,t=0){te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,n,i,s,o,l,c,u){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,l,c,u)}set(e,t,n,i,s,o,l,c,u){const d=this.elements;return d[0]=e,d[1]=i,d[2]=l,d[3]=t,d[4]=s,d[5]=c,d[6]=n,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],l=n[3],c=n[6],u=n[1],d=n[4],a=n[7],h=n[2],f=n[5],m=n[8],g=i[0],_=i[3],p=i[6],x=i[1],v=i[4],y=i[7],C=i[2],E=i[5],R=i[8];return s[0]=o*g+l*x+c*C,s[3]=o*_+l*v+c*E,s[6]=o*p+l*y+c*R,s[1]=u*g+d*x+a*C,s[4]=u*_+d*v+a*E,s[7]=u*p+d*y+a*R,s[2]=h*g+f*x+m*C,s[5]=h*_+f*v+m*E,s[8]=h*p+f*y+m*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],l=e[5],c=e[6],u=e[7],d=e[8];return t*o*d-t*l*u-n*s*d+n*l*c+i*s*u-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],l=e[5],c=e[6],u=e[7],d=e[8],a=d*o-l*u,h=l*c-d*s,f=u*s-o*c,m=t*a+n*h+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=a*g,e[1]=(i*u-d*n)*g,e[2]=(l*n-i*o)*g,e[3]=h*g,e[4]=(d*t-i*c)*g,e[5]=(i*s-l*t)*g,e[6]=f*g,e[7]=(n*c-u*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,l){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*o+u*l)+o+e,-i*u,i*c,-i*(-u*o+c*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply($r.makeScale(e,t)),this}rotate(e){return this.premultiply($r.makeRotation(-e)),this}translate(e,t){return this.premultiply($r.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $r=new qe;function Gc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Tr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Yu(){const r=Tr("canvas");return r.style.display="block",r}const sl={};function _s(r){r in sl||(sl[r]=!0,console.warn(r))}const rl=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ol=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fs={[In]:{transfer:Mr,primaries:br,toReference:r=>r,fromReference:r=>r},[St]:{transfer:nt,primaries:br,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Dr]:{transfer:Mr,primaries:Sr,toReference:r=>r.applyMatrix3(ol),fromReference:r=>r.applyMatrix3(rl)},[na]:{transfer:nt,primaries:Sr,toReference:r=>r.convertSRGBToLinear().applyMatrix3(ol),fromReference:r=>r.applyMatrix3(rl).convertLinearToSRGB()}},ju=new Set([In,Dr]),Ke={enabled:!0,_workingColorSpace:In,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!ju.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Fs[e].toReference,i=Fs[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Fs[r].primaries},getTransfer:function(r){return r===$t?Mr:Fs[r].transfer}};function Gi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Kr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let mi;class Vc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{mi===void 0&&(mi=Tr("canvas")),mi.width=e.width,mi.height=e.height;const n=mi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Tr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Gi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gi(t[n]/255)*255):t[n]=Gi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zu=0;class Wc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=pn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,l=i.length;o<l;o++)i[o].isDataTexture?s.push(Jr(i[o].image)):s.push(Jr(i[o]))}else s=Jr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Jr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Vc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $u=0;class zt extends Zi{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=nn,i=nn,s=wt,o=Ms,l=sn,c=Wn,u=zt.DEFAULT_ANISOTROPY,d=$t){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=pn(),this.name="",this.source=new Wc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(_s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===ci?St:$t),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ic)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ys:e.x=e.x-Math.floor(e.x);break;case nn:e.x=e.x<0?0:1;break;case Ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ys:e.y=e.y-Math.floor(e.y);break;case nn:e.y=e.y<0?0:1;break;case Ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===St?ci:kc}set encoding(e){_s("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ci?St:$t}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Ic;zt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,i=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,u=c[0],d=c[4],a=c[8],h=c[1],f=c[5],m=c[9],g=c[2],_=c[6],p=c[10];if(Math.abs(d-h)<.01&&Math.abs(a-g)<.01&&Math.abs(m-_)<.01){if(Math.abs(d+h)<.1&&Math.abs(a+g)<.1&&Math.abs(m+_)<.1&&Math.abs(u+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,y=(f+1)/2,C=(p+1)/2,E=(d+h)/4,R=(a+g)/4,B=(m+_)/4;return v>y&&v>C?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=E/n,s=R/n):y>C?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=B/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=R/s,i=B/s),this.set(n,i,s,t),this}let x=Math.sqrt((_-m)*(_-m)+(a-g)*(a-g)+(h-d)*(h-d));return Math.abs(x)<.001&&(x=1),this.x=(_-m)/x,this.y=(a-g)/x,this.z=(h-d)/x,this.w=Math.acos((u+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ku extends Zi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(_s("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ci?St:$t),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new zt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class on extends Ku{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class qc extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ju extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let $i=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,l){let c=n[i+0],u=n[i+1],d=n[i+2],a=n[i+3];const h=s[o+0],f=s[o+1],m=s[o+2],g=s[o+3];if(l===0){e[t+0]=c,e[t+1]=u,e[t+2]=d,e[t+3]=a;return}if(l===1){e[t+0]=h,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(a!==g||c!==h||u!==f||d!==m){let _=1-l;const p=c*h+u*f+d*m+a*g,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const C=Math.sqrt(v),E=Math.atan2(C,p*x);_=Math.sin(_*E)/C,l=Math.sin(l*E)/C}const y=l*x;if(c=c*_+h*y,u=u*_+f*y,d=d*_+m*y,a=a*_+g*y,_===1-l){const C=1/Math.sqrt(c*c+u*u+d*d+a*a);c*=C,u*=C,d*=C,a*=C}}e[t]=c,e[t+1]=u,e[t+2]=d,e[t+3]=a}static multiplyQuaternionsFlat(e,t,n,i,s,o){const l=n[i],c=n[i+1],u=n[i+2],d=n[i+3],a=s[o],h=s[o+1],f=s[o+2],m=s[o+3];return e[t]=l*m+d*a+c*f-u*h,e[t+1]=c*m+d*h+u*a-l*f,e[t+2]=u*m+d*f+l*h-c*a,e[t+3]=d*m-l*a-c*h-u*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,l=Math.cos,c=Math.sin,u=l(n/2),d=l(i/2),a=l(s/2),h=c(n/2),f=c(i/2),m=c(s/2);switch(o){case"XYZ":this._x=h*d*a+u*f*m,this._y=u*f*a-h*d*m,this._z=u*d*m+h*f*a,this._w=u*d*a-h*f*m;break;case"YXZ":this._x=h*d*a+u*f*m,this._y=u*f*a-h*d*m,this._z=u*d*m-h*f*a,this._w=u*d*a+h*f*m;break;case"ZXY":this._x=h*d*a-u*f*m,this._y=u*f*a+h*d*m,this._z=u*d*m+h*f*a,this._w=u*d*a-h*f*m;break;case"ZYX":this._x=h*d*a-u*f*m,this._y=u*f*a+h*d*m,this._z=u*d*m-h*f*a,this._w=u*d*a+h*f*m;break;case"YZX":this._x=h*d*a+u*f*m,this._y=u*f*a+h*d*m,this._z=u*d*m-h*f*a,this._w=u*d*a-h*f*m;break;case"XZY":this._x=h*d*a-u*f*m,this._y=u*f*a-h*d*m,this._z=u*d*m+h*f*a,this._w=u*d*a+h*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],l=t[5],c=t[9],u=t[2],d=t[6],a=t[10],h=n+l+a;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-c)*f,this._y=(s-u)*f,this._z=(o-i)*f}else if(n>l&&n>a){const f=2*Math.sqrt(1+n-l-a);this._w=(d-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+u)/f}else if(l>a){const f=2*Math.sqrt(1+l-n-a);this._w=(s-u)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+d)/f}else{const f=2*Math.sqrt(1+a-n-l);this._w=(o-i)/f,this._x=(s+u)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,l=t._x,c=t._y,u=t._z,d=t._w;return this._x=n*d+o*l+i*u-s*c,this._y=i*d+o*c+s*l-n*u,this._z=s*d+o*u+n*c-i*l,this._w=o*d-n*l-i*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let l=o*e._w+n*e._x+i*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-l*l;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const u=Math.sqrt(c),d=Math.atan2(u,l),a=Math.sin((1-t)*d)/u,h=Math.sin(t*d)/u;return this._w=o*a+this._w*h,this._x=n*a+this._x*h,this._y=i*a+this._y*h,this._z=s*a+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(al.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(al.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,l=e.z,c=e.w,u=2*(o*i-l*n),d=2*(l*t-s*i),a=2*(s*n-o*t);return this.x=t+c*u+o*a-l*d,this.y=n+c*d+l*u-s*a,this.z=i+c*a+s*d-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,l=t.y,c=t.z;return this.x=i*c-s*l,this.y=s*o-n*c,this.z=n*l-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qr.copy(this).projectOnVector(e),this.sub(Qr)}reflect(e){return this.sub(Qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qr=new N,al=new $i;class Ps{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,Kt):Kt.fromBufferAttribute(s,o),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Us.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Us.copy(n.boundingBox)),Us.applyMatrix4(e.matrixWorld),this.union(Us)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(es),Os.subVectors(this.max,es),_i.subVectors(e.a,es),gi.subVectors(e.b,es),vi.subVectors(e.c,es),Dn.subVectors(gi,_i),Nn.subVectors(vi,gi),$n.subVectors(_i,vi);let t=[0,-Dn.z,Dn.y,0,-Nn.z,Nn.y,0,-$n.z,$n.y,Dn.z,0,-Dn.x,Nn.z,0,-Nn.x,$n.z,0,-$n.x,-Dn.y,Dn.x,0,-Nn.y,Nn.x,0,-$n.y,$n.x,0];return!eo(t,_i,gi,vi,Os)||(t=[1,0,0,0,1,0,0,0,1],!eo(t,_i,gi,vi,Os))?!1:(Bs.crossVectors(Dn,Nn),t=[Bs.x,Bs.y,Bs.z],eo(t,_i,gi,vi,Os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gn=[new N,new N,new N,new N,new N,new N,new N,new N],Kt=new N,Us=new Ps,_i=new N,gi=new N,vi=new N,Dn=new N,Nn=new N,$n=new N,es=new N,Os=new N,Bs=new N,Kn=new N;function eo(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Kn.fromArray(r,s);const l=i.x*Math.abs(Kn.x)+i.y*Math.abs(Kn.y)+i.z*Math.abs(Kn.z),c=e.dot(Kn),u=t.dot(Kn),d=n.dot(Kn);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>l)return!1}return!0}const Qu=new Ps,ts=new N,to=new N;let Nr=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ts.subVectors(e,this.center);const t=ts.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ts,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(to.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ts.copy(e.center).add(to)),this.expandByPoint(ts.copy(e.center).sub(to))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const vn=new N,no=new N,zs=new N,Fn=new N,io=new N,ks=new N,so=new N;let Xc=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){no.copy(e).add(t).multiplyScalar(.5),zs.copy(t).sub(e).normalize(),Fn.copy(this.origin).sub(no);const s=e.distanceTo(t)*.5,o=-this.direction.dot(zs),l=Fn.dot(this.direction),c=-Fn.dot(zs),u=Fn.lengthSq(),d=Math.abs(1-o*o);let a,h,f,m;if(d>0)if(a=o*c-l,h=o*l-c,m=s*d,a>=0)if(h>=-m)if(h<=m){const g=1/d;a*=g,h*=g,f=a*(a+o*h+2*l)+h*(o*a+h+2*c)+u}else h=s,a=Math.max(0,-(o*h+l)),f=-a*a+h*(h+2*c)+u;else h=-s,a=Math.max(0,-(o*h+l)),f=-a*a+h*(h+2*c)+u;else h<=-m?(a=Math.max(0,-(-o*s+l)),h=a>0?-s:Math.min(Math.max(-s,-c),s),f=-a*a+h*(h+2*c)+u):h<=m?(a=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+u):(a=Math.max(0,-(o*s+l)),h=a>0?s:Math.min(Math.max(-s,-c),s),f=-a*a+h*(h+2*c)+u);else h=o>0?-s:s,a=Math.max(0,-(o*h+l)),f=-a*a+h*(h+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,a),i&&i.copy(no).addScaledVector(zs,h),f}intersectSphere(e,t){vn.subVectors(e.center,this.origin);const n=vn.dot(this.direction),i=vn.dot(vn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),l=n-o,c=n+o;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,l,c;const u=1/this.direction.x,d=1/this.direction.y,a=1/this.direction.z,h=this.origin;return u>=0?(n=(e.min.x-h.x)*u,i=(e.max.x-h.x)*u):(n=(e.max.x-h.x)*u,i=(e.min.x-h.x)*u),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),a>=0?(l=(e.min.z-h.z)*a,c=(e.max.z-h.z)*a):(l=(e.max.z-h.z)*a,c=(e.min.z-h.z)*a),n>c||l>i)||((l>n||n!==n)&&(n=l),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,n,i,s){io.subVectors(t,e),ks.subVectors(n,e),so.crossVectors(io,ks);let o=this.direction.dot(so),l;if(o>0){if(i)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Fn.subVectors(this.origin,e);const c=l*this.direction.dot(ks.crossVectors(Fn,ks));if(c<0)return null;const u=l*this.direction.dot(io.cross(Fn));if(u<0||c+u>o)return null;const d=-l*Fn.dot(so);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class lt{constructor(e,t,n,i,s,o,l,c,u,d,a,h,f,m,g,_){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,l,c,u,d,a,h,f,m,g,_)}set(e,t,n,i,s,o,l,c,u,d,a,h,f,m,g,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=l,p[13]=c,p[2]=u,p[6]=d,p[10]=a,p[14]=h,p[3]=f,p[7]=m,p[11]=g,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/xi.setFromMatrixColumn(e,0).length(),s=1/xi.setFromMatrixColumn(e,1).length(),o=1/xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),l=Math.sin(n),c=Math.cos(i),u=Math.sin(i),d=Math.cos(s),a=Math.sin(s);if(e.order==="XYZ"){const h=o*d,f=o*a,m=l*d,g=l*a;t[0]=c*d,t[4]=-c*a,t[8]=u,t[1]=f+m*u,t[5]=h-g*u,t[9]=-l*c,t[2]=g-h*u,t[6]=m+f*u,t[10]=o*c}else if(e.order==="YXZ"){const h=c*d,f=c*a,m=u*d,g=u*a;t[0]=h+g*l,t[4]=m*l-f,t[8]=o*u,t[1]=o*a,t[5]=o*d,t[9]=-l,t[2]=f*l-m,t[6]=g+h*l,t[10]=o*c}else if(e.order==="ZXY"){const h=c*d,f=c*a,m=u*d,g=u*a;t[0]=h-g*l,t[4]=-o*a,t[8]=m+f*l,t[1]=f+m*l,t[5]=o*d,t[9]=g-h*l,t[2]=-o*u,t[6]=l,t[10]=o*c}else if(e.order==="ZYX"){const h=o*d,f=o*a,m=l*d,g=l*a;t[0]=c*d,t[4]=m*u-f,t[8]=h*u+g,t[1]=c*a,t[5]=g*u+h,t[9]=f*u-m,t[2]=-u,t[6]=l*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,f=o*u,m=l*c,g=l*u;t[0]=c*d,t[4]=g-h*a,t[8]=m*a+f,t[1]=a,t[5]=o*d,t[9]=-l*d,t[2]=-u*d,t[6]=f*a+m,t[10]=h-g*a}else if(e.order==="XZY"){const h=o*c,f=o*u,m=l*c,g=l*u;t[0]=c*d,t[4]=-a,t[8]=u*d,t[1]=h*a+g,t[5]=o*d,t[9]=f*a-m,t[2]=m*a-f,t[6]=l*d,t[10]=g*a+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ed,e,td)}lookAt(e,t,n){const i=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Un.crossVectors(n,Ht),Un.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Un.crossVectors(n,Ht)),Un.normalize(),Hs.crossVectors(Ht,Un),i[0]=Un.x,i[4]=Hs.x,i[8]=Ht.x,i[1]=Un.y,i[5]=Hs.y,i[9]=Ht.y,i[2]=Un.z,i[6]=Hs.z,i[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],l=n[4],c=n[8],u=n[12],d=n[1],a=n[5],h=n[9],f=n[13],m=n[2],g=n[6],_=n[10],p=n[14],x=n[3],v=n[7],y=n[11],C=n[15],E=i[0],R=i[4],B=i[8],b=i[12],w=i[1],F=i[5],H=i[9],O=i[13],P=i[2],L=i[6],I=i[10],j=i[14],V=i[3],G=i[7],Q=i[11],K=i[15];return s[0]=o*E+l*w+c*P+u*V,s[4]=o*R+l*F+c*L+u*G,s[8]=o*B+l*H+c*I+u*Q,s[12]=o*b+l*O+c*j+u*K,s[1]=d*E+a*w+h*P+f*V,s[5]=d*R+a*F+h*L+f*G,s[9]=d*B+a*H+h*I+f*Q,s[13]=d*b+a*O+h*j+f*K,s[2]=m*E+g*w+_*P+p*V,s[6]=m*R+g*F+_*L+p*G,s[10]=m*B+g*H+_*I+p*Q,s[14]=m*b+g*O+_*j+p*K,s[3]=x*E+v*w+y*P+C*V,s[7]=x*R+v*F+y*L+C*G,s[11]=x*B+v*H+y*I+C*Q,s[15]=x*b+v*O+y*j+C*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],l=e[5],c=e[9],u=e[13],d=e[2],a=e[6],h=e[10],f=e[14],m=e[3],g=e[7],_=e[11],p=e[15];return m*(+s*c*a-i*u*a-s*l*h+n*u*h+i*l*f-n*c*f)+g*(+t*c*f-t*u*h+s*o*h-i*o*f+i*u*d-s*c*d)+_*(+t*u*a-t*l*f-s*o*a+n*o*f+s*l*d-n*u*d)+p*(-i*l*d-t*c*a+t*l*h+i*o*a-n*o*h+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],l=e[5],c=e[6],u=e[7],d=e[8],a=e[9],h=e[10],f=e[11],m=e[12],g=e[13],_=e[14],p=e[15],x=a*_*u-g*h*u+g*c*f-l*_*f-a*c*p+l*h*p,v=m*h*u-d*_*u-m*c*f+o*_*f+d*c*p-o*h*p,y=d*g*u-m*a*u+m*l*f-o*g*f-d*l*p+o*a*p,C=m*a*c-d*g*c-m*l*h+o*g*h+d*l*_-o*a*_,E=t*x+n*v+i*y+s*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=x*R,e[1]=(g*h*s-a*_*s-g*i*f+n*_*f+a*i*p-n*h*p)*R,e[2]=(l*_*s-g*c*s+g*i*u-n*_*u-l*i*p+n*c*p)*R,e[3]=(a*c*s-l*h*s-a*i*u+n*h*u+l*i*f-n*c*f)*R,e[4]=v*R,e[5]=(d*_*s-m*h*s+m*i*f-t*_*f-d*i*p+t*h*p)*R,e[6]=(m*c*s-o*_*s-m*i*u+t*_*u+o*i*p-t*c*p)*R,e[7]=(o*h*s-d*c*s+d*i*u-t*h*u-o*i*f+t*c*f)*R,e[8]=y*R,e[9]=(m*a*s-d*g*s-m*n*f+t*g*f+d*n*p-t*a*p)*R,e[10]=(o*g*s-m*l*s+m*n*u-t*g*u-o*n*p+t*l*p)*R,e[11]=(d*l*s-o*a*s-d*n*u+t*a*u+o*n*f-t*l*f)*R,e[12]=C*R,e[13]=(d*g*i-m*a*i+m*n*h-t*g*h-d*n*_+t*a*_)*R,e[14]=(m*l*i-o*g*i-m*n*c+t*g*c+o*n*_-t*l*_)*R,e[15]=(o*a*i-d*l*i+d*n*c-t*a*c-o*n*h+t*l*h)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,l=e.y,c=e.z,u=s*o,d=s*l;return this.set(u*o+n,u*l-i*c,u*c+i*l,0,u*l+i*c,d*l+n,d*c-i*o,0,u*c-i*l,d*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,l=t._z,c=t._w,u=s+s,d=o+o,a=l+l,h=s*u,f=s*d,m=s*a,g=o*d,_=o*a,p=l*a,x=c*u,v=c*d,y=c*a,C=n.x,E=n.y,R=n.z;return i[0]=(1-(g+p))*C,i[1]=(f+y)*C,i[2]=(m-v)*C,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(h+p))*E,i[6]=(_+x)*E,i[7]=0,i[8]=(m+v)*R,i[9]=(_-x)*R,i[10]=(1-(h+g))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=xi.set(i[0],i[1],i[2]).length();const o=xi.set(i[4],i[5],i[6]).length(),l=xi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Jt.copy(this);const u=1/s,d=1/o,a=1/l;return Jt.elements[0]*=u,Jt.elements[1]*=u,Jt.elements[2]*=u,Jt.elements[4]*=d,Jt.elements[5]*=d,Jt.elements[6]*=d,Jt.elements[8]*=a,Jt.elements[9]*=a,Jt.elements[10]*=a,t.setFromRotationMatrix(Jt),n.x=s,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,o,l=Cn){const c=this.elements,u=2*s/(t-e),d=2*s/(n-i),a=(t+e)/(t-e),h=(n+i)/(n-i);let f,m;if(l===Cn)f=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(l===wr)f=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=u,c[4]=0,c[8]=a,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,l=Cn){const c=this.elements,u=1/(t-e),d=1/(n-i),a=1/(o-s),h=(t+e)*u,f=(n+i)*d;let m,g;if(l===Cn)m=(o+s)*a,g=-2*a;else if(l===wr)m=s*a,g=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=g,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xi=new N,Jt=new lt,ed=new N(0,0,0),td=new N(1,1,1),Un=new N,Hs=new N,Ht=new N,ll=new lt,cl=new $i;class Fr{constructor(e=0,t=0,n=0,i=Fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],l=i[8],c=i[1],u=i[5],d=i[9],a=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,f),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-a,s),this._z=0);break;case"ZXY":this._x=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-a,f),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-a,s)):(this._x=0,this._y=Math.atan2(l,f));break;case"XZY":this._z=Math.asin(-Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ll.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ll,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cl.setFromEuler(this),this.setFromQuaternion(cl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fr.DEFAULT_ORDER="XYZ";class Yc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nd=0;const hl=new N,yi=new $i,xn=new lt,Gs=new N,ns=new N,id=new N,sd=new $i,ul=new N(1,0,0),dl=new N(0,1,0),fl=new N(0,0,1),rd={type:"added"},od={type:"removed"};class gt extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new N,t=new Fr,n=new $i,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new lt},normalMatrix:{value:new qe}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(ul,e)}rotateY(e){return this.rotateOnAxis(dl,e)}rotateZ(e){return this.rotateOnAxis(fl,e)}translateOnAxis(e,t){return hl.copy(e).applyQuaternion(this.quaternion),this.position.add(hl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ul,e)}translateY(e){return this.translateOnAxis(dl,e)}translateZ(e){return this.translateOnAxis(fl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gs.copy(e):Gs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(ns,Gs,this.up):xn.lookAt(Gs,ns,this.up),this.quaternion.setFromRotationMatrix(xn),i&&(xn.extractRotation(i.matrixWorld),yi.setFromRotationMatrix(xn),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(od)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,e,id),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,sd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const l=i[s];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){const a=c[u];s(e.shapes,a)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(s(e.materials,this.material[c]));i.material=l}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];i.animations.push(s(e.animations,c))}}if(t){const l=o(e.geometries),c=o(e.materials),u=o(e.textures),d=o(e.images),a=o(e.shapes),h=o(e.skeletons),f=o(e.animations),m=o(e.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),a.length>0&&(n.shapes=a),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(l){const c=[];for(const u in l){const d=l[u];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}gt.DEFAULT_UP=new N(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new N,yn=new N,ro=new N,Mn=new N,Mi=new N,bi=new N,pl=new N,oo=new N,ao=new N,lo=new N;let Vs=!1;class Zt{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Qt.subVectors(e,t),i.cross(Qt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Qt.subVectors(i,t),yn.subVectors(n,t),ro.subVectors(e,t);const o=Qt.dot(Qt),l=Qt.dot(yn),c=Qt.dot(ro),u=yn.dot(yn),d=yn.dot(ro),a=o*u-l*l;if(a===0)return s.set(0,0,0),null;const h=1/a,f=(u*c-l*d)*h,m=(o*d-l*c)*h;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getUV(e,t,n,i,s,o,l,c){return Vs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vs=!0),this.getInterpolation(e,t,n,i,s,o,l,c)}static getInterpolation(e,t,n,i,s,o,l,c){return this.getBarycoord(e,t,n,i,Mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Mn.x),c.addScaledVector(o,Mn.y),c.addScaledVector(l,Mn.z),c)}static isFrontFacing(e,t,n,i){return Qt.subVectors(n,t),yn.subVectors(e,t),Qt.cross(yn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),Qt.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Vs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vs=!0),Zt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Zt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,l;Mi.subVectors(i,n),bi.subVectors(s,n),oo.subVectors(e,n);const c=Mi.dot(oo),u=bi.dot(oo);if(c<=0&&u<=0)return t.copy(n);ao.subVectors(e,i);const d=Mi.dot(ao),a=bi.dot(ao);if(d>=0&&a<=d)return t.copy(i);const h=c*a-d*u;if(h<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(Mi,o);lo.subVectors(e,s);const f=Mi.dot(lo),m=bi.dot(lo);if(m>=0&&f<=m)return t.copy(s);const g=f*u-c*m;if(g<=0&&u>=0&&m<=0)return l=u/(u-m),t.copy(n).addScaledVector(bi,l);const _=d*m-f*a;if(_<=0&&a-d>=0&&f-m>=0)return pl.subVectors(s,i),l=(a-d)/(a-d+(f-m)),t.copy(i).addScaledVector(pl,l);const p=1/(_+g+h);return o=g*p,l=h*p,t.copy(n).addScaledVector(Mi,o).addScaledVector(bi,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function co(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=ia(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=co(o,s,e+1/3),this.g=co(o,s,e),this.b=co(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=St){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],l=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const n=jc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return Ke.fromWorkingColorSpace(Ct.copy(this),e),Math.round(Et(Ct.r*255,0,255))*65536+Math.round(Et(Ct.g*255,0,255))*256+Math.round(Et(Ct.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Ct.copy(this),t);const n=Ct.r,i=Ct.g,s=Ct.b,o=Math.max(n,i,s),l=Math.min(n,i,s);let c,u;const d=(l+o)/2;if(l===o)c=0,u=0;else{const a=o-l;switch(u=d<=.5?a/(o+l):a/(2-o-l),o){case n:c=(i-s)/a+(i<s?6:0);break;case i:c=(s-n)/a+2;break;case s:c=(n-i)/a+4;break}c/=6}return e.h=c,e.s=u,e.l=d,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=St){Ke.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,i=Ct.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(Ws);const n=ms(On.h,Ws.h,t),i=ms(On.s,Ws.s,t),s=ms(On.l,Ws.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Te;Te.NAMES=jc;let ad=0,Xn=class extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=pn(),this.name="",this.type="Material",this.blending=Vn,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oo,this.blendDst=Bo,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vn&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oo&&(n.blendSrc=this.blendSrc),this.blendDst!==Bo&&(n.blendDst=this.blendDst),this.blendEquation!==si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const l in s){const c=s[l];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class di extends Xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new N,qs=new te;class Wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Go,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qs.fromBufferAttribute(this,t),qs.applyMatrix3(e),this.setXY(t,qs.x,qs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Je(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),s=Je(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Go&&(e.usage=this.usage),e}}class Zc extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $c extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ld=0;const Yt=new lt,ho=new gt,Si=new N,Gt=new Ps,is=new Ps,bt=new N;class Ot extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gc(e)?$c:Zc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return ho.lookAt(e),ho.updateMatrix(),this.applyMatrix4(ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];is.setFromBufferAttribute(l),this.morphTargetsRelative?(bt.addVectors(Gt.min,is.min),Gt.expandByPoint(bt),bt.addVectors(Gt.max,is.max),Gt.expandByPoint(bt)):(Gt.expandByPoint(is.min),Gt.expandByPoint(is.max))}Gt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(bt));if(t)for(let s=0,o=t.length;s<o;s++){const l=t[s],c=this.morphTargetsRelative;for(let u=0,d=l.count;u<d;u++)bt.fromBufferAttribute(l,u),c&&(Si.fromBufferAttribute(e,u),bt.add(Si)),i=Math.max(i,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,l=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*l),4));const c=this.getAttribute("tangent").array,u=[],d=[];for(let w=0;w<l;w++)u[w]=new N,d[w]=new N;const a=new N,h=new N,f=new N,m=new te,g=new te,_=new te,p=new N,x=new N;function v(w,F,H){a.fromArray(i,w*3),h.fromArray(i,F*3),f.fromArray(i,H*3),m.fromArray(o,w*2),g.fromArray(o,F*2),_.fromArray(o,H*2),h.sub(a),f.sub(a),g.sub(m),_.sub(m);const O=1/(g.x*_.y-_.x*g.y);isFinite(O)&&(p.copy(h).multiplyScalar(_.y).addScaledVector(f,-g.y).multiplyScalar(O),x.copy(f).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar(O),u[w].add(p),u[F].add(p),u[H].add(p),d[w].add(x),d[F].add(x),d[H].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let w=0,F=y.length;w<F;++w){const H=y[w],O=H.start,P=H.count;for(let L=O,I=O+P;L<I;L+=3)v(n[L+0],n[L+1],n[L+2])}const C=new N,E=new N,R=new N,B=new N;function b(w){R.fromArray(s,w*3),B.copy(R);const F=u[w];C.copy(F),C.sub(R.multiplyScalar(R.dot(F))).normalize(),E.crossVectors(B,F);const O=E.dot(d[w])<0?-1:1;c[w*4]=C.x,c[w*4+1]=C.y,c[w*4+2]=C.z,c[w*4+3]=O}for(let w=0,F=y.length;w<F;++w){const H=y[w],O=H.start,P=H.count;for(let L=O,I=O+P;L<I;L+=3)b(n[L+0]),b(n[L+1]),b(n[L+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new N,s=new N,o=new N,l=new N,c=new N,u=new N,d=new N,a=new N;if(e)for(let h=0,f=e.count;h<f;h+=3){const m=e.getX(h+0),g=e.getX(h+1),_=e.getX(h+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,_),d.subVectors(o,s),a.subVectors(i,s),d.cross(a),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),u.fromBufferAttribute(n,_),l.add(d),c.add(d),u.add(d),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(_,u.x,u.y,u.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,s),a.subVectors(i,s),d.cross(a),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(l,c){const u=l.array,d=l.itemSize,a=l.normalized,h=new u.constructor(c.length*d);let f=0,m=0;for(let g=0,_=c.length;g<_;g++){l.isInterleavedBufferAttribute?f=c[g]*l.data.stride+l.offset:f=c[g]*d;for(let p=0;p<d;p++)h[m++]=u[f++]}return new Wt(h,d,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,n=this.index.array,i=this.attributes;for(const l in i){const c=i[l],u=e(c,n);t.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const c=[],u=s[l];for(let d=0,a=u.length;d<a;d++){const h=u[d],f=e(h,n);c.push(f)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const u=o[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],d=[];for(let a=0,h=u.length;a<h;a++){const f=u[a];d.push(f.toJSON(e.data))}d.length>0&&(i[c]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const d=i[u];this.setAttribute(u,d.clone(t))}const s=e.morphAttributes;for(const u in s){const d=[],a=s[u];for(let h=0,f=a.length;h<f;h++)d.push(a[h].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const a=o[u];this.addGroup(a.start,a.count,a.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ml=new lt,Jn=new Xc,Xs=new Nr,_l=new N,wi=new N,Ei=new N,Ti=new N,uo=new N,Ys=new N,js=new te,Zs=new te,$s=new te,gl=new N,vl=new N,xl=new N,Ks=new N,Js=new N;class Ye extends gt{constructor(e=new Ot,t=new di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(s&&l){Ys.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const d=l[c],a=s[c];d!==0&&(uo.fromBufferAttribute(a,e),o?Ys.addScaledVector(uo,d):Ys.addScaledVector(uo.sub(t),d))}t.add(Ys)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(s),Jn.copy(e.ray).recast(e.near),!(Xs.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Xs,_l)===null||Jn.origin.distanceToSquared(_l)>(e.far-e.near)**2))&&(ml.copy(s).invert(),Jn.copy(e.ray).applyMatrix4(ml),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Jn)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,l=s.index,c=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,a=s.attributes.normal,h=s.groups,f=s.drawRange;if(l!==null)if(Array.isArray(o))for(let m=0,g=h.length;m<g;m++){const _=h[m],p=o[_.materialIndex],x=Math.max(_.start,f.start),v=Math.min(l.count,Math.min(_.start+_.count,f.start+f.count));for(let y=x,C=v;y<C;y+=3){const E=l.getX(y),R=l.getX(y+1),B=l.getX(y+2);i=Qs(this,p,e,n,u,d,a,E,R,B),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let _=m,p=g;_<p;_+=3){const x=l.getX(_),v=l.getX(_+1),y=l.getX(_+2);i=Qs(this,o,e,n,u,d,a,x,v,y),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,g=h.length;m<g;m++){const _=h[m],p=o[_.materialIndex],x=Math.max(_.start,f.start),v=Math.min(c.count,Math.min(_.start+_.count,f.start+f.count));for(let y=x,C=v;y<C;y+=3){const E=y,R=y+1,B=y+2;i=Qs(this,p,e,n,u,d,a,E,R,B),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let _=m,p=g;_<p;_+=3){const x=_,v=_+1,y=_+2;i=Qs(this,o,e,n,u,d,a,x,v,y),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}}}function cd(r,e,t,n,i,s,o,l){let c;if(e.side===Pt?c=n.intersectTriangle(o,s,i,!0,l):c=n.intersectTriangle(i,s,o,e.side===qn,l),c===null)return null;Js.copy(l),Js.applyMatrix4(r.matrixWorld);const u=t.ray.origin.distanceTo(Js);return u<t.near||u>t.far?null:{distance:u,point:Js.clone(),object:r}}function Qs(r,e,t,n,i,s,o,l,c,u){r.getVertexPosition(l,wi),r.getVertexPosition(c,Ei),r.getVertexPosition(u,Ti);const d=cd(r,e,t,n,wi,Ei,Ti,Ks);if(d){i&&(js.fromBufferAttribute(i,l),Zs.fromBufferAttribute(i,c),$s.fromBufferAttribute(i,u),d.uv=Zt.getInterpolation(Ks,wi,Ei,Ti,js,Zs,$s,new te)),s&&(js.fromBufferAttribute(s,l),Zs.fromBufferAttribute(s,c),$s.fromBufferAttribute(s,u),d.uv1=Zt.getInterpolation(Ks,wi,Ei,Ti,js,Zs,$s,new te),d.uv2=d.uv1),o&&(gl.fromBufferAttribute(o,l),vl.fromBufferAttribute(o,c),xl.fromBufferAttribute(o,u),d.normal=Zt.getInterpolation(Ks,wi,Ei,Ti,gl,vl,xl,new N),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const a={a:l,b:c,c:u,normal:new N,materialIndex:0};Zt.getNormal(wi,Ei,Ti,a.normal),d.face=a}return d}class Yn extends Ot{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const l=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],u=[],d=[],a=[];let h=0,f=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(a,2));function m(g,_,p,x,v,y,C,E,R,B,b){const w=y/R,F=C/B,H=y/2,O=C/2,P=E/2,L=R+1,I=B+1;let j=0,V=0;const G=new N;for(let Q=0;Q<I;Q++){const K=Q*F-O;for(let Z=0;Z<L;Z++){const Y=Z*w-H;G[g]=Y*x,G[_]=K*v,G[p]=P,u.push(G.x,G.y,G.z),G[g]=0,G[_]=0,G[p]=E>0?1:-1,d.push(G.x,G.y,G.z),a.push(Z/R),a.push(1-Q/B),j+=1}}for(let Q=0;Q<B;Q++)for(let K=0;K<R;K++){const Z=h+K+L*Q,Y=h+K+L*(Q+1),ee=h+(K+1)+L*(Q+1),he=h+(K+1)+L*Q;c.push(Z,Y,he),c.push(Y,ee,he),V+=6}l.addGroup(f,V,b),f+=V,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Nt(r){const e={};for(let t=0;t<r.length;t++){const n=Yi(r[t]);for(const i in n)e[i]=n[i]}return e}function hd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Kc(r){return r.getRenderTarget()===null?r.outputColorSpace:Ke.workingColorSpace}const Ss={clone:Yi,merge:Nt};var ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ut extends Xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ud,this.fragmentShader=dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=hd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Jc extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Cn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vt extends Jc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ps*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/u,i*=o.width/c,n*=o.height/u}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ai=-90,Ci=1;class fd extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Vt(Ai,Ci,e,t);i.layers=this.layers,this.add(i);const s=new Vt(Ai,Ci,e,t);s.layers=this.layers,this.add(s);const o=new Vt(Ai,Ci,e,t);o.layers=this.layers,this.add(o);const l=new Vt(Ai,Ci,e,t);l.layers=this.layers,this.add(l);const c=new Vt(Ai,Ci,e,t);c.layers=this.layers,this.add(c);const u=new Vt(Ai,Ci,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,l,c]=t;for(const u of t)this.remove(u);if(e===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,c,u,d]=this.children,a=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,l),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,u),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(a,h,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Qc extends zt{constructor(e,t,n,i,s,o,l,c,u,d){e=e!==void 0?e:[],t=t!==void 0?t:Wi,super(e,t,n,i,s,o,l,c,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pd extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(_s("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ci?St:$t),this.texture=new Qc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Yn(5,5,5),s=new Ut({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:Rn});s.uniforms.tEquirect.value=t;const o=new Ye(i,s),l=t.minFilter;return t.minFilter===Ms&&(t.minFilter=wt),new fd(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const fo=new N,md=new N,_d=new qe;class ni{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=fo.subVectors(n,t).cross(md.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(fo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_d.getNormalMatrix(e),i=this.coplanarPoint(fo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new Nr,er=new N;class sa{constructor(e=new ni,t=new ni,n=new ni,i=new ni,s=new ni,o=new ni){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(s),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Cn){const n=this.planes,i=e.elements,s=i[0],o=i[1],l=i[2],c=i[3],u=i[4],d=i[5],a=i[6],h=i[7],f=i[8],m=i[9],g=i[10],_=i[11],p=i[12],x=i[13],v=i[14],y=i[15];if(n[0].setComponents(c-s,h-u,_-f,y-p).normalize(),n[1].setComponents(c+s,h+u,_+f,y+p).normalize(),n[2].setComponents(c+o,h+d,_+m,y+x).normalize(),n[3].setComponents(c-o,h-d,_-m,y-x).normalize(),n[4].setComponents(c-l,h-a,_-g,y-v).normalize(),t===Cn)n[5].setComponents(c+l,h+a,_+g,y+v).normalize();else if(t===wr)n[5].setComponents(l,a,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(e){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(er.x=i.normal.x>0?e.max.x:e.min.x,er.y=i.normal.y>0?e.max.y:e.min.y,er.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eh(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function gd(r,e){const t=e.isWebGL2,n=new WeakMap;function i(u,d){const a=u.array,h=u.usage,f=a.byteLength,m=r.createBuffer();r.bindBuffer(d,m),r.bufferData(d,a,h),u.onUploadCallback();let g;if(a instanceof Float32Array)g=r.FLOAT;else if(a instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(a instanceof Int16Array)g=r.SHORT;else if(a instanceof Uint32Array)g=r.UNSIGNED_INT;else if(a instanceof Int32Array)g=r.INT;else if(a instanceof Int8Array)g=r.BYTE;else if(a instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:m,type:g,bytesPerElement:a.BYTES_PER_ELEMENT,version:u.version,size:f}}function s(u,d,a){const h=d.array,f=d._updateRange,m=d.updateRanges;if(r.bindBuffer(a,u),f.count===-1&&m.length===0&&r.bufferSubData(a,0,h),m.length!==0){for(let g=0,_=m.length;g<_;g++){const p=m[g];t?r.bufferSubData(a,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count):r.bufferSubData(a,p.start*h.BYTES_PER_ELEMENT,h.subarray(p.start,p.start+p.count))}d.clearUpdateRanges()}f.count!==-1&&(t?r.bufferSubData(a,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):r.bufferSubData(a,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1),d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function l(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=n.get(u);d&&(r.deleteBuffer(d.buffer),n.delete(u))}function c(u,d){if(u.isGLBufferAttribute){const h=n.get(u);(!h||h.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const a=n.get(u);if(a===void 0)n.set(u,i(u,d));else if(a.version<u.version){if(a.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(a.buffer,u,d),a.version=u.version}}return{get:o,remove:l,update:c}}class Ur extends Ot{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,l=Math.floor(n),c=Math.floor(i),u=l+1,d=c+1,a=e/l,h=t/c,f=[],m=[],g=[],_=[];for(let p=0;p<d;p++){const x=p*h-o;for(let v=0;v<u;v++){const y=v*a-s;m.push(y,-x,0),g.push(0,0,1),_.push(v/l),_.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<l;x++){const v=x+u*p,y=x+u*(p+1),C=x+1+u*(p+1),E=x+1+u*p;f.push(v,y,E),f.push(y,C,E)}this.setIndex(f),this.setAttribute("position",new mt(m,3)),this.setAttribute("normal",new mt(g,3)),this.setAttribute("uv",new mt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.width,e.height,e.widthSegments,e.heightSegments)}}var vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xd=`#ifdef USE_ALPHAHASH
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
#endif`,yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Md=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wd=`#ifdef USE_AOMAP
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
#endif`,Ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Td=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Cd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ld=`#ifdef USE_IRIDESCENCE
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
#endif`,Id=`#ifdef USE_BUMPMAP
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
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Hd=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Gd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vd=`vec3 transformedNormal = objectNormal;
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
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,$d=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ef=`#ifdef USE_ENVMAP
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
#endif`,tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,of=`#ifdef USE_GRADIENTMAP
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
}`,af=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uf=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,df=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,ff=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gf=`PhysicalMaterial material;
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
#endif`,vf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,xf=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,yf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ef=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Tf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Af=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rf=`#if defined( USE_POINTS_UV )
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
#endif`,Pf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,If=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Df=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Nf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ff=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Uf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Of=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hf=`#ifdef USE_NORMALMAP
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
#endif`,Gf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,jf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$f=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ip=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rp=`#ifdef USE_SKINNING
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
#endif`,op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ap=`#ifdef USE_SKINNING
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
#endif`,lp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,up=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dp=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xp=`uniform sampler2D t2D;
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
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`#include <common>
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
}`,Ep=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,Tp=`#define DISTANCE
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
}`,Ap=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ip=`#include <common>
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
}`,Dp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Np=`#define LAMBERT
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
}`,Fp=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Up=`#define MATCAP
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
}`,Op=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Bp=`#define NORMAL
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
}`,zp=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kp=`#define PHONG
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
}`,Hp=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Gp=`#define STANDARD
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
}`,Vp=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Wp=`#define TOON
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
}`,qp=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Xp=`uniform float size;
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
}`,Yp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,jp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Zp=`uniform vec3 color;
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
}`,$p=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Kp=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,He={alphahash_fragment:vd,alphahash_pars_fragment:xd,alphamap_fragment:yd,alphamap_pars_fragment:Md,alphatest_fragment:bd,alphatest_pars_fragment:Sd,aomap_fragment:wd,aomap_pars_fragment:Ed,batching_pars_vertex:Td,batching_vertex:Ad,begin_vertex:Cd,beginnormal_vertex:Rd,bsdfs:Pd,iridescence_fragment:Ld,bumpmap_pars_fragment:Id,clipping_planes_fragment:Dd,clipping_planes_pars_fragment:Nd,clipping_planes_pars_vertex:Fd,clipping_planes_vertex:Ud,color_fragment:Od,color_pars_fragment:Bd,color_pars_vertex:zd,color_vertex:kd,common:Hd,cube_uv_reflection_fragment:Gd,defaultnormal_vertex:Vd,displacementmap_pars_vertex:Wd,displacementmap_vertex:qd,emissivemap_fragment:Xd,emissivemap_pars_fragment:Yd,colorspace_fragment:jd,colorspace_pars_fragment:Zd,envmap_fragment:$d,envmap_common_pars_fragment:Kd,envmap_pars_fragment:Jd,envmap_pars_vertex:Qd,envmap_physical_pars_fragment:df,envmap_vertex:ef,fog_vertex:tf,fog_pars_vertex:nf,fog_fragment:sf,fog_pars_fragment:rf,gradientmap_pars_fragment:of,lightmap_fragment:af,lightmap_pars_fragment:lf,lights_lambert_fragment:cf,lights_lambert_pars_fragment:hf,lights_pars_begin:uf,lights_toon_fragment:ff,lights_toon_pars_fragment:pf,lights_phong_fragment:mf,lights_phong_pars_fragment:_f,lights_physical_fragment:gf,lights_physical_pars_fragment:vf,lights_fragment_begin:xf,lights_fragment_maps:yf,lights_fragment_end:Mf,logdepthbuf_fragment:bf,logdepthbuf_pars_fragment:Sf,logdepthbuf_pars_vertex:wf,logdepthbuf_vertex:Ef,map_fragment:Tf,map_pars_fragment:Af,map_particle_fragment:Cf,map_particle_pars_fragment:Rf,metalnessmap_fragment:Pf,metalnessmap_pars_fragment:Lf,morphcolor_vertex:If,morphnormal_vertex:Df,morphtarget_pars_vertex:Nf,morphtarget_vertex:Ff,normal_fragment_begin:Uf,normal_fragment_maps:Of,normal_pars_fragment:Bf,normal_pars_vertex:zf,normal_vertex:kf,normalmap_pars_fragment:Hf,clearcoat_normal_fragment_begin:Gf,clearcoat_normal_fragment_maps:Vf,clearcoat_pars_fragment:Wf,iridescence_pars_fragment:qf,opaque_fragment:Xf,packing:Yf,premultiplied_alpha_fragment:jf,project_vertex:Zf,dithering_fragment:$f,dithering_pars_fragment:Kf,roughnessmap_fragment:Jf,roughnessmap_pars_fragment:Qf,shadowmap_pars_fragment:ep,shadowmap_pars_vertex:tp,shadowmap_vertex:np,shadowmask_pars_fragment:ip,skinbase_vertex:sp,skinning_pars_vertex:rp,skinning_vertex:op,skinnormal_vertex:ap,specularmap_fragment:lp,specularmap_pars_fragment:cp,tonemapping_fragment:hp,tonemapping_pars_fragment:up,transmission_fragment:dp,transmission_pars_fragment:fp,uv_pars_fragment:pp,uv_pars_vertex:mp,uv_vertex:_p,worldpos_vertex:gp,background_vert:vp,background_frag:xp,backgroundCube_vert:yp,backgroundCube_frag:Mp,cube_vert:bp,cube_frag:Sp,depth_vert:wp,depth_frag:Ep,distanceRGBA_vert:Tp,distanceRGBA_frag:Ap,equirect_vert:Cp,equirect_frag:Rp,linedashed_vert:Pp,linedashed_frag:Lp,meshbasic_vert:Ip,meshbasic_frag:Dp,meshlambert_vert:Np,meshlambert_frag:Fp,meshmatcap_vert:Up,meshmatcap_frag:Op,meshnormal_vert:Bp,meshnormal_frag:zp,meshphong_vert:kp,meshphong_frag:Hp,meshphysical_vert:Gp,meshphysical_frag:Vp,meshtoon_vert:Wp,meshtoon_frag:qp,points_vert:Xp,points_frag:Yp,shadow_vert:jp,shadow_frag:Zp,sprite_vert:$p,sprite_frag:Kp},ce={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},un={basic:{uniforms:Nt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Nt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Te(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Nt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Nt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Nt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Te(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Nt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Nt([ce.points,ce.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Nt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Nt([ce.common,ce.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Nt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Nt([ce.sprite,ce.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Nt([ce.common,ce.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Nt([ce.lights,ce.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};un.physical={uniforms:Nt([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const tr={r:0,b:0,g:0};function Jp(r,e,t,n,i,s,o){const l=new Te(0);let c=s===!0?0:1,u,d,a=null,h=0,f=null;function m(_,p){let x=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?g(l,c):v&&v.isColor&&(g(v,1),x=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ir)?(d===void 0&&(d=new Ye(new Yn(1,1,1),new Ut({name:"BackgroundCubeMaterial",uniforms:Yi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=Ke.getTransfer(v.colorSpace)!==nt,(a!==v||h!==v.version||f!==r.toneMapping)&&(d.material.needsUpdate=!0,a=v,h=v.version,f=r.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new Ye(new Ur(2,2),new Ut({name:"BackgroundMaterial",uniforms:Yi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=Ke.getTransfer(v.colorSpace)!==nt,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(a!==v||h!==v.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,a=v,h=v.version,f=r.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function g(_,p){_.getRGB(tr,Kc(r)),n.buffers.color.setClear(tr.r,tr.g,tr.b,p,o)}return{getClearColor:function(){return l},setClearColor:function(_,p=1){l.set(_),c=p,g(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,g(l,c)},render:m}}function Qp(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,l={},c=_(null);let u=c,d=!1;function a(P,L,I,j,V){let G=!1;if(o){const Q=g(j,I,L);u!==Q&&(u=Q,f(u.object)),G=p(P,j,I,V),G&&x(P,j,I,V)}else{const Q=L.wireframe===!0;(u.geometry!==j.id||u.program!==I.id||u.wireframe!==Q)&&(u.geometry=j.id,u.program=I.id,u.wireframe=Q,G=!0)}V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),(G||d)&&(d=!1,B(P,L,I,j),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function m(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function g(P,L,I){const j=I.wireframe===!0;let V=l[P.id];V===void 0&&(V={},l[P.id]=V);let G=V[L.id];G===void 0&&(G={},V[L.id]=G);let Q=G[j];return Q===void 0&&(Q=_(h()),G[j]=Q),Q}function _(P){const L=[],I=[],j=[];for(let V=0;V<i;V++)L[V]=0,I[V]=0,j[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:j,object:P,attributes:{},index:null}}function p(P,L,I,j){const V=u.attributes,G=L.attributes;let Q=0;const K=I.getAttributes();for(const Z in K)if(K[Z].location>=0){const ee=V[Z];let he=G[Z];if(he===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(he=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(he=P.instanceColor)),ee===void 0||ee.attribute!==he||he&&ee.data!==he.data)return!0;Q++}return u.attributesNum!==Q||u.index!==j}function x(P,L,I,j){const V={},G=L.attributes;let Q=0;const K=I.getAttributes();for(const Z in K)if(K[Z].location>=0){let ee=G[Z];ee===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor));const he={};he.attribute=ee,ee&&ee.data&&(he.data=ee.data),V[Z]=he,Q++}u.attributes=V,u.attributesNum=Q,u.index=j}function v(){const P=u.newAttributes;for(let L=0,I=P.length;L<I;L++)P[L]=0}function y(P){C(P,0)}function C(P,L){const I=u.newAttributes,j=u.enabledAttributes,V=u.attributeDivisors;I[P]=1,j[P]===0&&(r.enableVertexAttribArray(P),j[P]=1),V[P]!==L&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,L),V[P]=L)}function E(){const P=u.newAttributes,L=u.enabledAttributes;for(let I=0,j=L.length;I<j;I++)L[I]!==P[I]&&(r.disableVertexAttribArray(I),L[I]=0)}function R(P,L,I,j,V,G,Q){Q===!0?r.vertexAttribIPointer(P,L,I,V,G):r.vertexAttribPointer(P,L,I,j,V,G)}function B(P,L,I,j){if(n.isWebGL2===!1&&(P.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const V=j.attributes,G=I.getAttributes(),Q=L.defaultAttributeValues;for(const K in G){const Z=G[K];if(Z.location>=0){let Y=V[K];if(Y===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){const ee=Y.normalized,he=Y.itemSize,Me=t.get(Y);if(Me===void 0)continue;const _e=Me.buffer,Le=Me.type,Ue=Me.bytesPerElement,Se=n.isWebGL2===!0&&(Le===r.INT||Le===r.UNSIGNED_INT||Y.gpuType===Dc);if(Y.isInterleavedBufferAttribute){const Ne=Y.data,D=Ne.stride,ae=Y.offset;if(Ne.isInstancedInterleavedBuffer){for(let J=0;J<Z.locationSize;J++)C(Z.location+J,Ne.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let J=0;J<Z.locationSize;J++)y(Z.location+J);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let J=0;J<Z.locationSize;J++)R(Z.location+J,he/Z.locationSize,Le,ee,D*Ue,(ae+he/Z.locationSize*J)*Ue,Se)}else{if(Y.isInstancedBufferAttribute){for(let Ne=0;Ne<Z.locationSize;Ne++)C(Z.location+Ne,Y.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Ne=0;Ne<Z.locationSize;Ne++)y(Z.location+Ne);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let Ne=0;Ne<Z.locationSize;Ne++)R(Z.location+Ne,he/Z.locationSize,Le,ee,he*Ue,he/Z.locationSize*Ne*Ue,Se)}}else if(Q!==void 0){const ee=Q[K];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(Z.location,ee);break;case 3:r.vertexAttrib3fv(Z.location,ee);break;case 4:r.vertexAttrib4fv(Z.location,ee);break;default:r.vertexAttrib1fv(Z.location,ee)}}}}E()}function b(){H();for(const P in l){const L=l[P];for(const I in L){const j=L[I];for(const V in j)m(j[V].object),delete j[V];delete L[I]}delete l[P]}}function w(P){if(l[P.id]===void 0)return;const L=l[P.id];for(const I in L){const j=L[I];for(const V in j)m(j[V].object),delete j[V];delete L[I]}delete l[P.id]}function F(P){for(const L in l){const I=l[L];if(I[P.id]===void 0)continue;const j=I[P.id];for(const V in j)m(j[V].object),delete j[V];delete I[P.id]}}function H(){O(),d=!0,u!==c&&(u=c,f(u.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:a,reset:H,resetDefaultState:O,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:y,disableUnusedAttributes:E}}function em(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}function l(d,a){r.drawArrays(s,d,a),t.update(a,s,1)}function c(d,a,h){if(h===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,d,a,h),t.update(a,s,h)}function u(d,a,h){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<h;m++)this.render(d[m],a[m]);else{f.multiDrawArraysWEBGL(s,d,0,a,0,h);let m=0;for(let g=0;g<h;g++)m+=a[g];t.update(m,s,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function tm(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let l=t.precision!==void 0?t.precision:"highp";const c=s(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const u=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,a=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,y=o||e.has("OES_texture_float"),C=v&&y,E=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:s,precision:l,logarithmicDepthBuffer:d,maxTextures:a,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:E}}function nm(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new ni,l=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(a,h){const f=a.length!==0||h||n!==0||i;return i=h,n=a.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(a,h){t=d(a,h,0)},this.setState=function(a,h,f){const m=a.clippingPlanes,g=a.clipIntersection,_=a.clipShadows,p=r.get(a);if(!i||m===null||m.length===0||s&&!_)s?d(null):u();else{const x=s?0:n,v=x*4;let y=p.clippingState||null;c.value=y,y=d(m,h,v,f);for(let C=0;C!==v;++C)y[C]=t[C];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(a,h,f,m){const g=a!==null?a.length:0;let _=null;if(g!==0){if(_=c.value,m!==!0||_===null){const p=f+g*4,x=h.matrixWorldInverse;l.getNormalMatrix(x),(_===null||_.length<p)&&(_=new Float32Array(p));for(let v=0,y=f;v!==g;++v,y+=4)o.copy(a[v]).applyMatrix4(x,l),o.normal.toArray(_,y),_[y+3]=o.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}function im(r){let e=new WeakMap;function t(o,l){return l===zo?o.mapping=Wi:l===ko&&(o.mapping=qi),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===zo||l===ko)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new pd(c.height/2);return u.fromEquirectangularTexture(r,o),e.set(o,u),o.addEventListener("dispose",i),t(u.texture,o.mapping)}else return null}}return o}function i(o){const l=o.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ra extends Jc{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,l=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,l-=d*this.view.offsetY,c=l-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Bi=4,yl=[.125,.215,.35,.446,.526,.582],ri=20,po=new ra,Ml=new Te;let mo=null,_o=0,go=0;const ii=(1+Math.sqrt(5))/2,Ri=1/ii,bl=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,ii,Ri),new N(0,ii,-Ri),new N(Ri,0,ii),new N(-Ri,0,ii),new N(ii,Ri,0),new N(-ii,Ri,0)];class qo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){mo=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),go=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=El(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mo,_o,go),e.scissorTest=!1,nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wi||e.mapping===qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mo=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),go=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:Ln,format:sn,colorSpace:In,depthBuffer:!1},i=Sl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sm(s)),this._blurMaterial=rm(s,e,t)}return i}_compileMaterial(e){const t=new Ye(this._lodPlanes[0],e);this._renderer.compile(t,po)}_sceneToCubeUV(e,t,n,i){const l=new Vt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,a=d.autoClear,h=d.toneMapping;d.getClearColor(Ml),d.toneMapping=Pn,d.autoClear=!1;const f=new di({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),m=new Ye(new Yn,f);let g=!1;const _=e.background;_?_.isColor&&(f.color.copy(_),e.background=null,g=!0):(f.color.copy(Ml),g=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(l.up.set(0,c[p],0),l.lookAt(u[p],0,0)):x===1?(l.up.set(0,0,c[p]),l.lookAt(0,u[p],0)):(l.up.set(0,c[p],0),l.lookAt(0,0,u[p]));const v=this._cubeSize;nr(i,x*v,p>2?v:0,v,v),d.setRenderTarget(i),g&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=h,d.autoClear=a,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Wi||e.mapping===qi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=El()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ye(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;nr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,po)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=bl[(i-1)%bl.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,l){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,a=new Ye(this._lodPlanes[i],u),h=u.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ri-1),g=s/m,_=isFinite(s)?1+Math.floor(d*g):ri;_>ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ri}`);const p=[];let x=0;for(let R=0;R<ri;++R){const B=R/g,b=Math.exp(-B*B/2);p.push(b),R===0?x+=b:R<_&&(x+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/x;h.envMap.value=e.texture,h.samples.value=_,h.weights.value=p,h.latitudinal.value=o==="latitudinal",l&&(h.poleAxis.value=l);const{_lodMax:v}=this;h.dTheta.value=m,h.mipInt.value=v-n;const y=this._sizeLods[i],C=3*y*(i>v-Bi?i-v+Bi:0),E=4*(this._cubeSize-y);nr(t,C,E,3*y,2*y),c.setRenderTarget(t),c.render(a,po)}}function sm(r){const e=[],t=[],n=[];let i=r;const s=r-Bi+1+yl.length;for(let o=0;o<s;o++){const l=Math.pow(2,i);t.push(l);let c=1/l;o>r-Bi?c=yl[o-r+Bi-1]:o===0&&(c=0),n.push(c);const u=1/(l-2),d=-u,a=1+u,h=[d,d,a,d,a,a,d,d,a,a,d,a],f=6,m=6,g=3,_=2,p=1,x=new Float32Array(g*m*f),v=new Float32Array(_*m*f),y=new Float32Array(p*m*f);for(let E=0;E<f;E++){const R=E%3*2/3-1,B=E>2?0:-1,b=[R,B,0,R+2/3,B,0,R+2/3,B+1,0,R,B,0,R+2/3,B+1,0,R,B+1,0];x.set(b,g*m*E),v.set(h,_*m*E);const w=[E,E,E,E,E,E];y.set(w,p*m*E)}const C=new Ot;C.setAttribute("position",new Wt(x,g)),C.setAttribute("uv",new Wt(v,_)),C.setAttribute("faceIndex",new Wt(y,p)),e.push(C),i>Bi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Sl(r,e,t){const n=new on(r,e,t);return n.texture.mapping=Ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function rm(r,e,t){const n=new Float32Array(ri),i=new N(0,1,0);return new Ut({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:oa(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function wl(){return new Ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oa(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function El(){return new Ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function oa(){return`

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
	`}function om(r){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const c=l.mapping,u=c===zo||c===ko,d=c===Wi||c===qi;if(u||d)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let a=e.get(l);return t===null&&(t=new qo(r)),a=u?t.fromEquirectangular(l,a):t.fromCubemap(l,a),e.set(l,a),a.texture}else{if(e.has(l))return e.get(l).texture;{const a=l.image;if(u&&a&&a.height>0||d&&a&&i(a)){t===null&&(t=new qo(r));const h=u?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,h),l.addEventListener("dispose",s),h.texture}else return null}}}return l}function i(l){let c=0;const u=6;for(let d=0;d<u;d++)l[d]!==void 0&&c++;return c===u}function s(l){const c=l.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function am(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function lm(r,e,t,n){const i={},s=new WeakMap;function o(a){const h=a.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);for(const m in h.morphAttributes){const g=h.morphAttributes[m];for(let _=0,p=g.length;_<p;_++)e.remove(g[_])}h.removeEventListener("dispose",o),delete i[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function l(a,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function c(a){const h=a.attributes;for(const m in h)e.update(h[m],r.ARRAY_BUFFER);const f=a.morphAttributes;for(const m in f){const g=f[m];for(let _=0,p=g.length;_<p;_++)e.update(g[_],r.ARRAY_BUFFER)}}function u(a){const h=[],f=a.index,m=a.attributes.position;let g=0;if(f!==null){const x=f.array;g=f.version;for(let v=0,y=x.length;v<y;v+=3){const C=x[v+0],E=x[v+1],R=x[v+2];h.push(C,E,E,R,R,C)}}else if(m!==void 0){const x=m.array;g=m.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const C=v+0,E=v+1,R=v+2;h.push(C,E,E,R,R,C)}}else return;const _=new(Gc(h)?$c:Zc)(h,1);_.version=g;const p=s.get(a);p&&e.remove(p),s.set(a,_)}function d(a){const h=s.get(a);if(h){const f=a.index;f!==null&&h.version<f.version&&u(a)}else u(a);return s.get(a)}return{get:l,update:c,getWireframeAttribute:d}}function cm(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let l,c;function u(f){l=f.type,c=f.bytesPerElement}function d(f,m){r.drawElements(s,m,l,f*c),t.update(m,s,1)}function a(f,m,g){if(g===0)return;let _,p;if(i)_=r,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,m,l,f*c,g),t.update(m,s,g)}function h(f,m,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<g;p++)this.render(f[p]/c,m[p]);else{_.multiDrawElementsWEBGL(s,m,0,l,f,0,g);let p=0;for(let x=0;x<g;x++)p+=m[x];t.update(p,s,1)}}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=a,this.renderMultiDraw=h}function hm(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,l){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=l*(s/3);break;case r.LINES:t.lines+=l*(s/2);break;case r.LINE_STRIP:t.lines+=l*(s-1);break;case r.LINE_LOOP:t.lines+=l*s;break;case r.POINTS:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function um(r,e){return r[0]-e[0]}function dm(r,e){return Math.abs(e[1])-Math.abs(r[1])}function fm(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new rt,l=[];for(let u=0;u<8;u++)l[u]=[u,0];function c(u,d,a){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const f=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=f!==void 0?f.length:0;let g=s.get(d);if(g===void 0||g.count!==m){let P=function(){H.dispose(),s.delete(d),d.removeEventListener("dispose",P)};g!==void 0&&g.texture.dispose();const x=d.morphAttributes.position!==void 0,v=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,C=d.morphAttributes.position||[],E=d.morphAttributes.normal||[],R=d.morphAttributes.color||[];let B=0;x===!0&&(B=1),v===!0&&(B=2),y===!0&&(B=3);let b=d.attributes.position.count*B,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const F=new Float32Array(b*w*4*m),H=new qc(F,b,w,m);H.type=kn,H.needsUpdate=!0;const O=B*4;for(let L=0;L<m;L++){const I=C[L],j=E[L],V=R[L],G=b*w*4*L;for(let Q=0;Q<I.count;Q++){const K=Q*O;x===!0&&(o.fromBufferAttribute(I,Q),F[G+K+0]=o.x,F[G+K+1]=o.y,F[G+K+2]=o.z,F[G+K+3]=0),v===!0&&(o.fromBufferAttribute(j,Q),F[G+K+4]=o.x,F[G+K+5]=o.y,F[G+K+6]=o.z,F[G+K+7]=0),y===!0&&(o.fromBufferAttribute(V,Q),F[G+K+8]=o.x,F[G+K+9]=o.y,F[G+K+10]=o.z,F[G+K+11]=V.itemSize===4?o.w:1)}}g={count:m,texture:H,size:new te(b,w)},s.set(d,g),d.addEventListener("dispose",P)}let _=0;for(let x=0;x<h.length;x++)_+=h[x];const p=d.morphTargetsRelative?1:1-_;a.getUniforms().setValue(r,"morphTargetBaseInfluence",p),a.getUniforms().setValue(r,"morphTargetInfluences",h),a.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),a.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const f=h===void 0?0:h.length;let m=n[d.id];if(m===void 0||m.length!==f){m=[];for(let v=0;v<f;v++)m[v]=[v,0];n[d.id]=m}for(let v=0;v<f;v++){const y=m[v];y[0]=v,y[1]=h[v]}m.sort(dm);for(let v=0;v<8;v++)v<f&&m[v][1]?(l[v][0]=m[v][0],l[v][1]=m[v][1]):(l[v][0]=Number.MAX_SAFE_INTEGER,l[v][1]=0);l.sort(um);const g=d.morphAttributes.position,_=d.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const y=l[v],C=y[0],E=y[1];C!==Number.MAX_SAFE_INTEGER&&E?(g&&d.getAttribute("morphTarget"+v)!==g[C]&&d.setAttribute("morphTarget"+v,g[C]),_&&d.getAttribute("morphNormal"+v)!==_[C]&&d.setAttribute("morphNormal"+v,_[C]),i[v]=E,p+=E):(g&&d.hasAttribute("morphTarget"+v)===!0&&d.deleteAttribute("morphTarget"+v),_&&d.hasAttribute("morphNormal"+v)===!0&&d.deleteAttribute("morphNormal"+v),i[v]=0)}const x=d.morphTargetsRelative?1:1-p;a.getUniforms().setValue(r,"morphTargetBaseInfluence",x),a.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function pm(r,e,t,n){let i=new WeakMap;function s(c){const u=n.render.frame,d=c.geometry,a=e.get(c,d);if(i.get(a)!==u&&(e.update(a),i.set(a,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),i.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;i.get(h)!==u&&(h.update(),i.set(h,u))}return a}function o(){i=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class th extends zt{constructor(e,t,n,i,s,o,l,c,u,d){if(d=d!==void 0?d:li,d!==li&&d!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===li&&(n=zn),n===void 0&&d===Xi&&(n=ai),super(null,i,s,o,l,c,d,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:Ft,this.minFilter=c!==void 0?c:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const nh=new zt,ih=new th(1,1);ih.compareFunction=Hc;const sh=new qc,rh=new Ju,oh=new Qc,Tl=[],Al=[],Cl=new Float32Array(16),Rl=new Float32Array(9),Pl=new Float32Array(4);function Ki(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Tl[i];if(s===void 0&&(s=new Float32Array(i),Tl[i]=s),e!==0){n.toArray(s,0);for(let o=1,l=0;o!==e;++o)l+=t,r[o].toArray(s,l)}return s}function vt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function xt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Or(r,e){let t=Al[e];t===void 0&&(t=new Int32Array(e),Al[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function mm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function _m(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;r.uniform2fv(this.addr,e),xt(t,e)}}function gm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;r.uniform3fv(this.addr,e),xt(t,e)}}function vm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;r.uniform4fv(this.addr,e),xt(t,e)}}function xm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;Pl.set(n),r.uniformMatrix2fv(this.addr,!1,Pl),xt(t,n)}}function ym(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;Rl.set(n),r.uniformMatrix3fv(this.addr,!1,Rl),xt(t,n)}}function Mm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;Cl.set(n),r.uniformMatrix4fv(this.addr,!1,Cl),xt(t,n)}}function bm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Sm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;r.uniform2iv(this.addr,e),xt(t,e)}}function wm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;r.uniform3iv(this.addr,e),xt(t,e)}}function Em(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;r.uniform4iv(this.addr,e),xt(t,e)}}function Tm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Am(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;r.uniform2uiv(this.addr,e),xt(t,e)}}function Cm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;r.uniform3uiv(this.addr,e),xt(t,e)}}function Rm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;r.uniform4uiv(this.addr,e),xt(t,e)}}function Pm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?ih:nh;t.setTexture2D(e||s,i)}function Lm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||rh,i)}function Im(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||oh,i)}function Dm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||sh,i)}function Nm(r){switch(r){case 5126:return mm;case 35664:return _m;case 35665:return gm;case 35666:return vm;case 35674:return xm;case 35675:return ym;case 35676:return Mm;case 5124:case 35670:return bm;case 35667:case 35671:return Sm;case 35668:case 35672:return wm;case 35669:case 35673:return Em;case 5125:return Tm;case 36294:return Am;case 36295:return Cm;case 36296:return Rm;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return Lm;case 35680:case 36300:case 36308:case 36293:return Im;case 36289:case 36303:case 36311:case 36292:return Dm}}function Fm(r,e){r.uniform1fv(this.addr,e)}function Um(r,e){const t=Ki(e,this.size,2);r.uniform2fv(this.addr,t)}function Om(r,e){const t=Ki(e,this.size,3);r.uniform3fv(this.addr,t)}function Bm(r,e){const t=Ki(e,this.size,4);r.uniform4fv(this.addr,t)}function zm(r,e){const t=Ki(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function km(r,e){const t=Ki(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Hm(r,e){const t=Ki(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Gm(r,e){r.uniform1iv(this.addr,e)}function Vm(r,e){r.uniform2iv(this.addr,e)}function Wm(r,e){r.uniform3iv(this.addr,e)}function qm(r,e){r.uniform4iv(this.addr,e)}function Xm(r,e){r.uniform1uiv(this.addr,e)}function Ym(r,e){r.uniform2uiv(this.addr,e)}function jm(r,e){r.uniform3uiv(this.addr,e)}function Zm(r,e){r.uniform4uiv(this.addr,e)}function $m(r,e,t){const n=this.cache,i=e.length,s=Or(t,i);vt(n,s)||(r.uniform1iv(this.addr,s),xt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||nh,s[o])}function Km(r,e,t){const n=this.cache,i=e.length,s=Or(t,i);vt(n,s)||(r.uniform1iv(this.addr,s),xt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||rh,s[o])}function Jm(r,e,t){const n=this.cache,i=e.length,s=Or(t,i);vt(n,s)||(r.uniform1iv(this.addr,s),xt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||oh,s[o])}function Qm(r,e,t){const n=this.cache,i=e.length,s=Or(t,i);vt(n,s)||(r.uniform1iv(this.addr,s),xt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||sh,s[o])}function e_(r){switch(r){case 5126:return Fm;case 35664:return Um;case 35665:return Om;case 35666:return Bm;case 35674:return zm;case 35675:return km;case 35676:return Hm;case 5124:case 35670:return Gm;case 35667:case 35671:return Vm;case 35668:case 35672:return Wm;case 35669:case 35673:return qm;case 5125:return Xm;case 36294:return Ym;case 36295:return jm;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return $m;case 35679:case 36299:case 36307:return Km;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return Qm}}class t_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Nm(t.type)}}class n_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=e_(t.type)}}class i_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const l=i[s];l.setValue(e,t[l.id],n)}}}const vo=/(\w+)(\])?(\[|\.)?/g;function Ll(r,e){r.seq.push(e),r.map[e.id]=e}function s_(r,e,t){const n=r.name,i=n.length;for(vo.lastIndex=0;;){const s=vo.exec(n),o=vo.lastIndex;let l=s[1];const c=s[2]==="]",u=s[3];if(c&&(l=l|0),u===void 0||u==="["&&o+2===i){Ll(t,u===void 0?new t_(l,r,e):new n_(l,r,e));break}else{let a=t.map[l];a===void 0&&(a=new i_(l),Ll(t,a)),t=a}}}class xr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);s_(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const l=t[s],c=n[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Il(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const r_=37297;let o_=0;function a_(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}function l_(r){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(r);let n;switch(e===t?n="":e===Sr&&t===br?n="LinearDisplayP3ToLinearSRGB":e===br&&t===Sr&&(n="LinearSRGBToLinearDisplayP3"),r){case In:case Dr:return[n,"LinearTransferOETF"];case St:case na:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Dl(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+a_(r.getShaderSource(e),o)}else return i}function c_(r,e){const t=l_(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function h_(r,e){let t;switch(e){case Ac:t="Linear";break;case Cc:t="Reinhard";break;case Rc:t="OptimizedCineon";break;case Pc:t="ACESFilmic";break;case Lc:t="AgX";break;case fu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function u_(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zi).join(`
`)}function d_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(zi).join(`
`)}function f_(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function p_(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let l=1;s.type===r.FLOAT_MAT2&&(l=2),s.type===r.FLOAT_MAT3&&(l=3),s.type===r.FLOAT_MAT4&&(l=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:l}}return t}function zi(r){return r!==""}function Nl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const m_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xo(r){return r.replace(m_,g_)}const __=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function g_(r,e){let t=He[e];if(t===void 0){const n=__.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xo(t)}const v_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ul(r){return r.replace(v_,x_)}function x_(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ol(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function y_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ec?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Tc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===An&&(e="SHADOWMAP_TYPE_VSM"),e}function M_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Wi:case qi:e="ENVMAP_TYPE_CUBE";break;case Ir:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b_(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case qi:e="ENVMAP_MODE_REFRACTION";break}return e}function S_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Qo:e="ENVMAP_BLENDING_MULTIPLY";break;case uu:e="ENVMAP_BLENDING_MIX";break;case du:e="ENVMAP_BLENDING_ADD";break}return e}function w_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function E_(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,l=t.fragmentShader;const c=y_(t),u=M_(t),d=b_(t),a=S_(t),h=w_(t),f=t.isWebGL2?"":u_(t),m=d_(t),g=f_(s),_=i.createProgram();let p,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zi).join(`
`),p.length>0&&(p+=`
`),x=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zi).join(`
`),x.length>0&&(x+=`
`)):(p=[Ol(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zi).join(`
`),x=[f,Ol(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+a:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?He.tonemapping_pars_fragment:"",t.toneMapping!==Pn?h_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,c_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zi).join(`
`)),o=Xo(o),o=Nl(o,t),o=Fl(o,t),l=Xo(l),l=Nl(l,t),l=Fl(l,t),o=Ul(o),l=Ul(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=v+p+o,C=v+x+l,E=Il(i,i.VERTEX_SHADER,y),R=Il(i,i.FRAGMENT_SHADER,C);i.attachShader(_,E),i.attachShader(_,R),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function B(H){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),P=i.getShaderInfoLog(E).trim(),L=i.getShaderInfoLog(R).trim();let I=!0,j=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(I=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,E,R);else{const V=Dl(i,E,"vertex"),G=Dl(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+O+`
`+V+`
`+G)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(P===""||L==="")&&(j=!1);j&&(H.diagnostics={runnable:I,programLog:O,vertexShader:{log:P,prefix:p},fragmentShader:{log:L,prefix:x}})}i.deleteShader(E),i.deleteShader(R),b=new xr(i,_),w=p_(i,_)}let b;this.getUniforms=function(){return b===void 0&&B(this),b};let w;this.getAttributes=function(){return w===void 0&&B(this),w};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(_,r_)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=o_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=R,this}let T_=0;class A_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new C_(e),t.set(e,n)),n}}class C_{constructor(e){this.id=T_++,this.code=e,this.usedTimes=0}}function R_(r,e,t,n,i,s,o){const l=new Yc,c=new A_,u=[],d=i.isWebGL2,a=i.logarithmicDepthBuffer,h=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return b===0?"uv":`uv${b}`}function _(b,w,F,H,O){const P=H.fog,L=O.geometry,I=b.isMeshStandardMaterial?H.environment:null,j=(b.isMeshStandardMaterial?t:e).get(b.envMap||I),V=j&&j.mapping===Ir?j.image.height:null,G=m[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const Q=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,K=Q!==void 0?Q.length:0;let Z=0;L.morphAttributes.position!==void 0&&(Z=1),L.morphAttributes.normal!==void 0&&(Z=2),L.morphAttributes.color!==void 0&&(Z=3);let Y,ee,he,Me;if(G){const Lt=un[G];Y=Lt.vertexShader,ee=Lt.fragmentShader}else Y=b.vertexShader,ee=b.fragmentShader,c.update(b),he=c.getVertexShaderID(b),Me=c.getFragmentShaderID(b);const _e=r.getRenderTarget(),Le=O.isInstancedMesh===!0,Ue=O.isBatchedMesh===!0,Se=!!b.map,Ne=!!b.matcap,D=!!j,ae=!!b.aoMap,J=!!b.lightMap,oe=!!b.bumpMap,$=!!b.normalMap,Ee=!!b.displacementMap,pe=!!b.emissiveMap,T=!!b.metalnessMap,S=!!b.roughnessMap,k=b.anisotropy>0,re=b.clearcoat>0,ie=b.iridescence>0,ne=b.sheen>0,be=b.transmission>0,ue=k&&!!b.anisotropyMap,xe=re&&!!b.clearcoatMap,Ce=re&&!!b.clearcoatNormalMap,Be=re&&!!b.clearcoatRoughnessMap,se=ie&&!!b.iridescenceMap,je=ie&&!!b.iridescenceThicknessMap,Xe=ne&&!!b.sheenColorMap,Fe=ne&&!!b.sheenRoughnessMap,Ae=!!b.specularMap,ye=!!b.specularColorMap,ke=!!b.specularIntensityMap,$e=be&&!!b.transmissionMap,ct=be&&!!b.thicknessMap,Ve=!!b.gradientMap,le=!!b.alphaMap,U=b.alphaTest>0,de=!!b.alphaHash,fe=!!b.extensions,Ie=!!L.attributes.uv1,Re=!!L.attributes.uv2,Qe=!!L.attributes.uv3;let et=Pn;return b.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(et=r.toneMapping),{isWebGL2:d,shaderID:G,shaderType:b.type,shaderName:b.name,vertexShader:Y,fragmentShader:ee,defines:b.defines,customVertexShaderID:he,customFragmentShaderID:Me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Ue,instancing:Le,instancingColor:Le&&O.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:_e===null?r.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:In,map:Se,matcap:Ne,envMap:D,envMapMode:D&&j.mapping,envMapCubeUVHeight:V,aoMap:ae,lightMap:J,bumpMap:oe,normalMap:$,displacementMap:h&&Ee,emissiveMap:pe,normalMapObjectSpace:$&&b.normalMapType===Eu,normalMapTangentSpace:$&&b.normalMapType===ta,metalnessMap:T,roughnessMap:S,anisotropy:k,anisotropyMap:ue,clearcoat:re,clearcoatMap:xe,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Be,iridescence:ie,iridescenceMap:se,iridescenceThicknessMap:je,sheen:ne,sheenColorMap:Xe,sheenRoughnessMap:Fe,specularMap:Ae,specularColorMap:ye,specularIntensityMap:ke,transmission:be,transmissionMap:$e,thicknessMap:ct,gradientMap:Ve,opaque:b.transparent===!1&&b.blending===Vn,alphaMap:le,alphaTest:U,alphaHash:de,combine:b.combine,mapUv:Se&&g(b.map.channel),aoMapUv:ae&&g(b.aoMap.channel),lightMapUv:J&&g(b.lightMap.channel),bumpMapUv:oe&&g(b.bumpMap.channel),normalMapUv:$&&g(b.normalMap.channel),displacementMapUv:Ee&&g(b.displacementMap.channel),emissiveMapUv:pe&&g(b.emissiveMap.channel),metalnessMapUv:T&&g(b.metalnessMap.channel),roughnessMapUv:S&&g(b.roughnessMap.channel),anisotropyMapUv:ue&&g(b.anisotropyMap.channel),clearcoatMapUv:xe&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:je&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&g(b.sheenRoughnessMap.channel),specularMapUv:Ae&&g(b.specularMap.channel),specularColorMapUv:ye&&g(b.specularColorMap.channel),specularIntensityMapUv:ke&&g(b.specularIntensityMap.channel),transmissionMapUv:$e&&g(b.transmissionMap.channel),thicknessMapUv:ct&&g(b.thicknessMap.channel),alphaMapUv:le&&g(b.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&($||k),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:Re,vertexUv3s:Qe,pointsUvs:O.isPoints===!0&&!!L.attributes.uv&&(Se||le),fog:!!P,useFog:b.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:a,skinning:O.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Z,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:et,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Se&&b.map.isVideoTexture===!0&&Ke.getTransfer(b.map.colorSpace)===nt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===tn,flipSided:b.side===Pt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:fe&&b.extensions.derivatives===!0,extensionFragDepth:fe&&b.extensions.fragDepth===!0,extensionDrawBuffers:fe&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:fe&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)w.push(F),w.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(x(w,b),v(w,b),w.push(r.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function x(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function v(b,w){l.disableAll(),w.isWebGL2&&l.enable(0),w.supportsVertexTextures&&l.enable(1),w.instancing&&l.enable(2),w.instancingColor&&l.enable(3),w.matcap&&l.enable(4),w.envMap&&l.enable(5),w.normalMapObjectSpace&&l.enable(6),w.normalMapTangentSpace&&l.enable(7),w.clearcoat&&l.enable(8),w.iridescence&&l.enable(9),w.alphaTest&&l.enable(10),w.vertexColors&&l.enable(11),w.vertexAlphas&&l.enable(12),w.vertexUv1s&&l.enable(13),w.vertexUv2s&&l.enable(14),w.vertexUv3s&&l.enable(15),w.vertexTangents&&l.enable(16),w.anisotropy&&l.enable(17),w.alphaHash&&l.enable(18),w.batching&&l.enable(19),b.push(l.mask),l.disableAll(),w.fog&&l.enable(0),w.useFog&&l.enable(1),w.flatShading&&l.enable(2),w.logarithmicDepthBuffer&&l.enable(3),w.skinning&&l.enable(4),w.morphTargets&&l.enable(5),w.morphNormals&&l.enable(6),w.morphColors&&l.enable(7),w.premultipliedAlpha&&l.enable(8),w.shadowMapEnabled&&l.enable(9),w.useLegacyLights&&l.enable(10),w.doubleSided&&l.enable(11),w.flipSided&&l.enable(12),w.useDepthPacking&&l.enable(13),w.dithering&&l.enable(14),w.transmission&&l.enable(15),w.sheen&&l.enable(16),w.opaque&&l.enable(17),w.pointsUvs&&l.enable(18),w.decodeVideoTexture&&l.enable(19),b.push(l.mask)}function y(b){const w=m[b.type];let F;if(w){const H=un[w];F=Ss.clone(H.uniforms)}else F=b.uniforms;return F}function C(b,w){let F;for(let H=0,O=u.length;H<O;H++){const P=u[H];if(P.cacheKey===w){F=P,++F.usedTimes;break}}return F===void 0&&(F=new E_(r,w,b,s),u.push(F)),F}function E(b){if(--b.usedTimes===0){const w=u.indexOf(b);u[w]=u[u.length-1],u.pop(),b.destroy()}}function R(b){c.remove(b)}function B(){c.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:y,acquireProgram:C,releaseProgram:E,releaseShaderCache:R,programs:u,dispose:B}}function P_(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,l){r.get(s)[o]=l}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function L_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Bl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function zl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(a,h,f,m,g,_){let p=r[e];return p===void 0?(p={id:a.id,object:a,geometry:h,material:f,groupOrder:m,renderOrder:a.renderOrder,z:g,group:_},r[e]=p):(p.id=a.id,p.object=a,p.geometry=h,p.material=f,p.groupOrder=m,p.renderOrder=a.renderOrder,p.z=g,p.group=_),e++,p}function l(a,h,f,m,g,_){const p=o(a,h,f,m,g,_);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(a,h,f,m,g,_){const p=o(a,h,f,m,g,_);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function u(a,h){t.length>1&&t.sort(a||L_),n.length>1&&n.sort(h||Bl),i.length>1&&i.sort(h||Bl)}function d(){for(let a=e,h=r.length;a<h;a++){const f=r[a];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function I_(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new zl,r.set(n,[o])):i>=s.length?(o=new zl,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function D_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Te};break;case"SpotLight":t={position:new N,direction:new N,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function N_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let F_=0;function U_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function O_(r,e){const t=new D_,n=N_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new N);const s=new N,o=new lt,l=new lt;function c(d,a){let h=0,f=0,m=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let g=0,_=0,p=0,x=0,v=0,y=0,C=0,E=0,R=0,B=0,b=0;d.sort(U_);const w=a===!0?Math.PI:1;for(let H=0,O=d.length;H<O;H++){const P=d[H],L=P.color,I=P.intensity,j=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=L.r*I*w,f+=L.g*I*w,m+=L.b*I*w;else if(P.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(P.sh.coefficients[G],I);b++}else if(P.isDirectionalLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){const Q=P.shadow,K=n.get(P);K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,i.directionalShadow[g]=K,i.directionalShadowMap[g]=V,i.directionalShadowMatrix[g]=P.shadow.matrix,y++}i.directional[g]=G,g++}else if(P.isSpotLight){const G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(L).multiplyScalar(I*w),G.distance=j,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,i.spot[p]=G;const Q=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,Q.updateMatrices(P),P.castShadow&&B++),i.spotLightMatrix[p]=Q.matrix,P.castShadow){const K=n.get(P);K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,i.spotShadow[p]=K,i.spotShadowMap[p]=V,E++}p++}else if(P.isRectAreaLight){const G=t.get(P);G.color.copy(L).multiplyScalar(I),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),i.rectArea[x]=G,x++}else if(P.isPointLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity*w),G.distance=P.distance,G.decay=P.decay,P.castShadow){const Q=P.shadow,K=n.get(P);K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,K.shadowCameraNear=Q.camera.near,K.shadowCameraFar=Q.camera.far,i.pointShadow[_]=K,i.pointShadowMap[_]=V,i.pointShadowMatrix[_]=P.shadow.matrix,C++}i.point[_]=G,_++}else if(P.isHemisphereLight){const G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(I*w),G.groundColor.copy(P.groundColor).multiplyScalar(I*w),i.hemi[v]=G,v++}}x>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=m;const F=i.hash;(F.directionalLength!==g||F.pointLength!==_||F.spotLength!==p||F.rectAreaLength!==x||F.hemiLength!==v||F.numDirectionalShadows!==y||F.numPointShadows!==C||F.numSpotShadows!==E||F.numSpotMaps!==R||F.numLightProbes!==b)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=x,i.point.length=_,i.hemi.length=v,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=E+R-B,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=b,F.directionalLength=g,F.pointLength=_,F.spotLength=p,F.rectAreaLength=x,F.hemiLength=v,F.numDirectionalShadows=y,F.numPointShadows=C,F.numSpotShadows=E,F.numSpotMaps=R,F.numLightProbes=b,i.version=F_++)}function u(d,a){let h=0,f=0,m=0,g=0,_=0;const p=a.matrixWorldInverse;for(let x=0,v=d.length;x<v;x++){const y=d[x];if(y.isDirectionalLight){const C=i.directional[h];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),h++}else if(y.isSpotLight){const C=i.spot[m];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const C=i.rectArea[g];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(p),l.identity(),o.copy(y.matrixWorld),o.premultiply(p),l.extractRotation(o),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(l),C.halfHeight.applyMatrix4(l),g++}else if(y.isPointLight){const C=i.point[f];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const C=i.hemi[_];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(p),_++}}}return{setup:c,setupView:u,state:i}}function kl(r,e){const t=new O_(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(a){n.push(a)}function l(a){i.push(a)}function c(a){t.setup(n,a)}function u(a){t.setupView(n,a)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:u,pushLight:o,pushShadow:l}}function B_(r,e){let t=new WeakMap;function n(s,o=0){const l=t.get(s);let c;return l===void 0?(c=new kl(r,e),t.set(s,[c])):o>=l.length?(c=new kl(r,e),l.push(c)):c=l[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class z_ extends Xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class k_ extends Xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const H_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G_=`uniform sampler2D shadow_pass;
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
}`;function V_(r,e,t){let n=new sa;const i=new te,s=new te,o=new rt,l=new z_({depthPacking:wu}),c=new k_,u={},d=t.maxTextureSize,a={[qn]:Pt,[Pt]:qn,[tn]:tn},h=new Ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:H_,fragmentShader:G_}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ot;m.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ye(m,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ec;let p=this.type;this.render=function(E,R,B){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||E.length===0)return;const b=r.getRenderTarget(),w=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),H=r.state;H.setBlending(Rn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const O=p!==An&&this.type===An,P=p===An&&this.type!==An;for(let L=0,I=E.length;L<I;L++){const j=E[L],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const G=V.getFrameExtents();if(i.multiply(G),s.copy(V.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/G.x),i.x=s.x*G.x,V.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/G.y),i.y=s.y*G.y,V.mapSize.y=s.y)),V.map===null||O===!0||P===!0){const K=this.type!==An?{minFilter:Ft,magFilter:Ft}:{};V.map!==null&&V.map.dispose(),V.map=new on(i.x,i.y,K),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const Q=V.getViewportCount();for(let K=0;K<Q;K++){const Z=V.getViewport(K);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),H.viewport(o),V.updateMatrices(j,K),n=V.getFrustum(),y(R,B,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===An&&x(V,B),V.needsUpdate=!1}p=this.type,_.needsUpdate=!1,r.setRenderTarget(b,w,F)};function x(E,R){const B=e.update(g);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new on(i.x,i.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(R,null,B,h,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(R,null,B,f,g,null)}function v(E,R,B,b){let w=null;const F=B.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(F!==void 0)w=F;else if(w=B.isPointLight===!0?c:l,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const H=w.uuid,O=R.uuid;let P=u[H];P===void 0&&(P={},u[H]=P);let L=P[O];L===void 0&&(L=w.clone(),P[O]=L,R.addEventListener("dispose",C)),w=L}if(w.visible=R.visible,w.wireframe=R.wireframe,b===An?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:a[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,B.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const H=r.properties.get(w);H.light=B}return w}function y(E,R,B,b,w){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===An)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld);const O=e.update(E),P=E.material;if(Array.isArray(P)){const L=O.groups;for(let I=0,j=L.length;I<j;I++){const V=L[I],G=P[V.materialIndex];if(G&&G.visible){const Q=v(E,G,b,w);E.onBeforeShadow(r,E,R,B,O,Q,V),r.renderBufferDirect(B,null,O,Q,E,V),E.onAfterShadow(r,E,R,B,O,Q,V)}}}else if(P.visible){const L=v(E,P,b,w);E.onBeforeShadow(r,E,R,B,O,L,null),r.renderBufferDirect(B,null,O,L,E,null),E.onAfterShadow(r,E,R,B,O,L,null)}}const H=E.children;for(let O=0,P=H.length;O<P;O++)y(H[O],R,B,b,w)}function C(E){E.target.removeEventListener("dispose",C);for(const B in u){const b=u[B],w=E.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}function W_(r,e,t){const n=t.isWebGL2;function i(){let U=!1;const de=new rt;let fe=null;const Ie=new rt(0,0,0,0);return{setMask:function(Re){fe!==Re&&!U&&(r.colorMask(Re,Re,Re,Re),fe=Re)},setLocked:function(Re){U=Re},setClear:function(Re,Qe,et,yt,Lt){Lt===!0&&(Re*=yt,Qe*=yt,et*=yt),de.set(Re,Qe,et,yt),Ie.equals(de)===!1&&(r.clearColor(Re,Qe,et,yt),Ie.copy(de))},reset:function(){U=!1,fe=null,Ie.set(-1,0,0,0)}}}function s(){let U=!1,de=null,fe=null,Ie=null;return{setTest:function(Re){Re?Ue(r.DEPTH_TEST):Se(r.DEPTH_TEST)},setMask:function(Re){de!==Re&&!U&&(r.depthMask(Re),de=Re)},setFunc:function(Re){if(fe!==Re){switch(Re){case su:r.depthFunc(r.NEVER);break;case ru:r.depthFunc(r.ALWAYS);break;case ou:r.depthFunc(r.LESS);break;case yr:r.depthFunc(r.LEQUAL);break;case au:r.depthFunc(r.EQUAL);break;case lu:r.depthFunc(r.GEQUAL);break;case cu:r.depthFunc(r.GREATER);break;case hu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}fe=Re}},setLocked:function(Re){U=Re},setClear:function(Re){Ie!==Re&&(r.clearDepth(Re),Ie=Re)},reset:function(){U=!1,de=null,fe=null,Ie=null}}}function o(){let U=!1,de=null,fe=null,Ie=null,Re=null,Qe=null,et=null,yt=null,Lt=null;return{setTest:function(tt){U||(tt?Ue(r.STENCIL_TEST):Se(r.STENCIL_TEST))},setMask:function(tt){de!==tt&&!U&&(r.stencilMask(tt),de=tt)},setFunc:function(tt,It,an){(fe!==tt||Ie!==It||Re!==an)&&(r.stencilFunc(tt,It,an),fe=tt,Ie=It,Re=an)},setOp:function(tt,It,an){(Qe!==tt||et!==It||yt!==an)&&(r.stencilOp(tt,It,an),Qe=tt,et=It,yt=an)},setLocked:function(tt){U=tt},setClear:function(tt){Lt!==tt&&(r.clearStencil(tt),Lt=tt)},reset:function(){U=!1,de=null,fe=null,Ie=null,Re=null,Qe=null,et=null,yt=null,Lt=null}}}const l=new i,c=new s,u=new o,d=new WeakMap,a=new WeakMap;let h={},f={},m=new WeakMap,g=[],_=null,p=!1,x=null,v=null,y=null,C=null,E=null,R=null,B=null,b=new Te(0,0,0),w=0,F=!1,H=null,O=null,P=null,L=null,I=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,G=0;const Q=r.getParameter(r.VERSION);Q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Q)[1]),V=G>=1):Q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),V=G>=2);let K=null,Z={};const Y=r.getParameter(r.SCISSOR_BOX),ee=r.getParameter(r.VIEWPORT),he=new rt().fromArray(Y),Me=new rt().fromArray(ee);function _e(U,de,fe,Ie){const Re=new Uint8Array(4),Qe=r.createTexture();r.bindTexture(U,Qe),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let et=0;et<fe;et++)n&&(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)?r.texImage3D(de,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,Re):r.texImage2D(de+et,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Re);return Qe}const Le={};Le[r.TEXTURE_2D]=_e(r.TEXTURE_2D,r.TEXTURE_2D,1),Le[r.TEXTURE_CUBE_MAP]=_e(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Le[r.TEXTURE_2D_ARRAY]=_e(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Le[r.TEXTURE_3D]=_e(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Ue(r.DEPTH_TEST),c.setFunc(yr),pe(!1),T(wa),Ue(r.CULL_FACE),$(Rn);function Ue(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function Se(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function Ne(U,de){return f[U]!==de?(r.bindFramebuffer(U,de),f[U]=de,n&&(U===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=de),U===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=de)),!0):!1}function D(U,de){let fe=g,Ie=!1;if(U)if(fe=m.get(de),fe===void 0&&(fe=[],m.set(de,fe)),U.isWebGLMultipleRenderTargets){const Re=U.texture;if(fe.length!==Re.length||fe[0]!==r.COLOR_ATTACHMENT0){for(let Qe=0,et=Re.length;Qe<et;Qe++)fe[Qe]=r.COLOR_ATTACHMENT0+Qe;fe.length=Re.length,Ie=!0}}else fe[0]!==r.COLOR_ATTACHMENT0&&(fe[0]=r.COLOR_ATTACHMENT0,Ie=!0);else fe[0]!==r.BACK&&(fe[0]=r.BACK,Ie=!0);Ie&&(t.isWebGL2?r.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function ae(U){return _!==U?(r.useProgram(U),_=U,!0):!1}const J={[si]:r.FUNC_ADD,[Vh]:r.FUNC_SUBTRACT,[Wh]:r.FUNC_REVERSE_SUBTRACT};if(n)J[Aa]=r.MIN,J[Ca]=r.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(J[Aa]=U.MIN_EXT,J[Ca]=U.MAX_EXT)}const oe={[qh]:r.ZERO,[Xh]:r.ONE,[Yh]:r.SRC_COLOR,[Oo]:r.SRC_ALPHA,[Qh]:r.SRC_ALPHA_SATURATE,[Kh]:r.DST_COLOR,[Zh]:r.DST_ALPHA,[jh]:r.ONE_MINUS_SRC_COLOR,[Bo]:r.ONE_MINUS_SRC_ALPHA,[Jh]:r.ONE_MINUS_DST_COLOR,[$h]:r.ONE_MINUS_DST_ALPHA,[eu]:r.CONSTANT_COLOR,[tu]:r.ONE_MINUS_CONSTANT_COLOR,[nu]:r.CONSTANT_ALPHA,[iu]:r.ONE_MINUS_CONSTANT_ALPHA};function $(U,de,fe,Ie,Re,Qe,et,yt,Lt,tt){if(U===Rn){p===!0&&(Se(r.BLEND),p=!1);return}if(p===!1&&(Ue(r.BLEND),p=!0),U!==Gh){if(U!==x||tt!==F){if((v!==si||E!==si)&&(r.blendEquation(r.FUNC_ADD),v=si,E=si),tt)switch(U){case Vn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Uo:r.blendFunc(r.ONE,r.ONE);break;case Ea:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ta:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Vn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Uo:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ea:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ta:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,C=null,R=null,B=null,b.set(0,0,0),w=0,x=U,F=tt}return}Re=Re||de,Qe=Qe||fe,et=et||Ie,(de!==v||Re!==E)&&(r.blendEquationSeparate(J[de],J[Re]),v=de,E=Re),(fe!==y||Ie!==C||Qe!==R||et!==B)&&(r.blendFuncSeparate(oe[fe],oe[Ie],oe[Qe],oe[et]),y=fe,C=Ie,R=Qe,B=et),(yt.equals(b)===!1||Lt!==w)&&(r.blendColor(yt.r,yt.g,yt.b,Lt),b.copy(yt),w=Lt),x=U,F=!1}function Ee(U,de){U.side===tn?Se(r.CULL_FACE):Ue(r.CULL_FACE);let fe=U.side===Pt;de&&(fe=!fe),pe(fe),U.blending===Vn&&U.transparent===!1?$(Rn):$(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),l.setMask(U.colorWrite);const Ie=U.stencilWrite;u.setTest(Ie),Ie&&(u.setMask(U.stencilWriteMask),u.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),u.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),k(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Ue(r.SAMPLE_ALPHA_TO_COVERAGE):Se(r.SAMPLE_ALPHA_TO_COVERAGE)}function pe(U){H!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),H=U)}function T(U){U!==kh?(Ue(r.CULL_FACE),U!==O&&(U===wa?r.cullFace(r.BACK):U===Hh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Se(r.CULL_FACE),O=U}function S(U){U!==P&&(V&&r.lineWidth(U),P=U)}function k(U,de,fe){U?(Ue(r.POLYGON_OFFSET_FILL),(L!==de||I!==fe)&&(r.polygonOffset(de,fe),L=de,I=fe)):Se(r.POLYGON_OFFSET_FILL)}function re(U){U?Ue(r.SCISSOR_TEST):Se(r.SCISSOR_TEST)}function ie(U){U===void 0&&(U=r.TEXTURE0+j-1),K!==U&&(r.activeTexture(U),K=U)}function ne(U,de,fe){fe===void 0&&(K===null?fe=r.TEXTURE0+j-1:fe=K);let Ie=Z[fe];Ie===void 0&&(Ie={type:void 0,texture:void 0},Z[fe]=Ie),(Ie.type!==U||Ie.texture!==de)&&(K!==fe&&(r.activeTexture(fe),K=fe),r.bindTexture(U,de||Le[U]),Ie.type=U,Ie.texture=de)}function be(){const U=Z[K];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ue(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Be(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function je(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xe(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(U){he.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),he.copy(U))}function $e(U){Me.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Me.copy(U))}function ct(U,de){let fe=a.get(de);fe===void 0&&(fe=new WeakMap,a.set(de,fe));let Ie=fe.get(U);Ie===void 0&&(Ie=r.getUniformBlockIndex(de,U.name),fe.set(U,Ie))}function Ve(U,de){const Ie=a.get(de).get(U);d.get(de)!==Ie&&(r.uniformBlockBinding(de,Ie,U.__bindingPointIndex),d.set(de,Ie))}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},K=null,Z={},f={},m=new WeakMap,g=[],_=null,p=!1,x=null,v=null,y=null,C=null,E=null,R=null,B=null,b=new Te(0,0,0),w=0,F=!1,H=null,O=null,P=null,L=null,I=null,he.set(0,0,r.canvas.width,r.canvas.height),Me.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),u.reset()}return{buffers:{color:l,depth:c,stencil:u},enable:Ue,disable:Se,bindFramebuffer:Ne,drawBuffers:D,useProgram:ae,setBlending:$,setMaterial:Ee,setFlipSided:pe,setCullFace:T,setLineWidth:S,setPolygonOffset:k,setScissorTest:re,activeTexture:ie,bindTexture:ne,unbindTexture:be,compressedTexImage2D:ue,compressedTexImage3D:xe,texImage2D:Ae,texImage3D:ye,updateUBOMapping:ct,uniformBlockBinding:Ve,texStorage2D:Xe,texStorage3D:Fe,texSubImage2D:Ce,texSubImage3D:Be,compressedTexSubImage2D:se,compressedTexSubImage3D:je,scissor:ke,viewport:$e,reset:le}}function q_(r,e,t,n,i,s,o){const l=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let a;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,S){return f?new OffscreenCanvas(T,S):Tr("canvas")}function g(T,S,k,re){let ie=1;if((T.width>re||T.height>re)&&(ie=re/Math.max(T.width,T.height)),ie<1||S===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ne=S?Er:Math.floor,be=ne(ie*T.width),ue=ne(ie*T.height);a===void 0&&(a=m(be,ue));const xe=k?m(be,ue):a;return xe.width=be,xe.height=ue,xe.getContext("2d").drawImage(T,0,0,be,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+be+"x"+ue+")."),xe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function _(T){return Wo(T.width)&&Wo(T.height)}function p(T){return l?!1:T.wrapS!==nn||T.wrapT!==nn||T.minFilter!==Ft&&T.minFilter!==wt}function x(T,S){return T.generateMipmaps&&S&&T.minFilter!==Ft&&T.minFilter!==wt}function v(T){r.generateMipmap(T)}function y(T,S,k,re,ie=!1){if(l===!1)return S;if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ne=S;if(S===r.RED&&(k===r.FLOAT&&(ne=r.R32F),k===r.HALF_FLOAT&&(ne=r.R16F),k===r.UNSIGNED_BYTE&&(ne=r.R8)),S===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(ne=r.R8UI),k===r.UNSIGNED_SHORT&&(ne=r.R16UI),k===r.UNSIGNED_INT&&(ne=r.R32UI),k===r.BYTE&&(ne=r.R8I),k===r.SHORT&&(ne=r.R16I),k===r.INT&&(ne=r.R32I)),S===r.RG&&(k===r.FLOAT&&(ne=r.RG32F),k===r.HALF_FLOAT&&(ne=r.RG16F),k===r.UNSIGNED_BYTE&&(ne=r.RG8)),S===r.RGBA){const be=ie?Mr:Ke.getTransfer(re);k===r.FLOAT&&(ne=r.RGBA32F),k===r.HALF_FLOAT&&(ne=r.RGBA16F),k===r.UNSIGNED_BYTE&&(ne=be===nt?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(ne=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(ne=r.RGB5_A1)}return(ne===r.R16F||ne===r.R32F||ne===r.RG16F||ne===r.RG32F||ne===r.RGBA16F||ne===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function C(T,S,k){return x(T,k)===!0||T.isFramebufferTexture&&T.minFilter!==Ft&&T.minFilter!==wt?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function E(T){return T===Ft||T===Ra||T===Wr?r.NEAREST:r.LINEAR}function R(T){const S=T.target;S.removeEventListener("dispose",R),b(S),S.isVideoTexture&&d.delete(S)}function B(T){const S=T.target;S.removeEventListener("dispose",B),F(S)}function b(T){const S=n.get(T);if(S.__webglInit===void 0)return;const k=T.source,re=h.get(k);if(re){const ie=re[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&w(T),Object.keys(re).length===0&&h.delete(k)}n.remove(T)}function w(T){const S=n.get(T);r.deleteTexture(S.__webglTexture);const k=T.source,re=h.get(k);delete re[S.__cacheKey],o.memory.textures--}function F(T){const S=T.texture,k=n.get(T),re=n.get(S);if(re.__webglTexture!==void 0&&(r.deleteTexture(re.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(k.__webglFramebuffer[ie]))for(let ne=0;ne<k.__webglFramebuffer[ie].length;ne++)r.deleteFramebuffer(k.__webglFramebuffer[ie][ne]);else r.deleteFramebuffer(k.__webglFramebuffer[ie]);k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer[ie])}else{if(Array.isArray(k.__webglFramebuffer))for(let ie=0;ie<k.__webglFramebuffer.length;ie++)r.deleteFramebuffer(k.__webglFramebuffer[ie]);else r.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&r.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ie=0;ie<k.__webglColorRenderbuffer.length;ie++)k.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(k.__webglColorRenderbuffer[ie]);k.__webglDepthRenderbuffer&&r.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ie=0,ne=S.length;ie<ne;ie++){const be=n.get(S[ie]);be.__webglTexture&&(r.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(S[ie])}n.remove(S),n.remove(T)}let H=0;function O(){H=0}function P(){const T=H;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),H+=1,T}function L(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function I(T,S){const k=n.get(T);if(T.isVideoTexture&&Ee(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const re=T.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(k,T,S);return}}t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+S)}function j(T,S){const k=n.get(T);if(T.version>0&&k.__version!==T.version){he(k,T,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+S)}function V(T,S){const k=n.get(T);if(T.version>0&&k.__version!==T.version){he(k,T,S);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+S)}function G(T,S){const k=n.get(T);if(T.version>0&&k.__version!==T.version){Me(k,T,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+S)}const Q={[ys]:r.REPEAT,[nn]:r.CLAMP_TO_EDGE,[Ho]:r.MIRRORED_REPEAT},K={[Ft]:r.NEAREST,[Ra]:r.NEAREST_MIPMAP_NEAREST,[Wr]:r.NEAREST_MIPMAP_LINEAR,[wt]:r.LINEAR,[pu]:r.LINEAR_MIPMAP_NEAREST,[Ms]:r.LINEAR_MIPMAP_LINEAR},Z={[Tu]:r.NEVER,[Iu]:r.ALWAYS,[Au]:r.LESS,[Hc]:r.LEQUAL,[Cu]:r.EQUAL,[Lu]:r.GEQUAL,[Ru]:r.GREATER,[Pu]:r.NOTEQUAL};function Y(T,S,k){if(k?(r.texParameteri(T,r.TEXTURE_WRAP_S,Q[S.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,Q[S.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,Q[S.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,K[S.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,K[S.minFilter])):(r.texParameteri(T,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(T,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(S.wrapS!==nn||S.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(T,r.TEXTURE_MAG_FILTER,E(S.magFilter)),r.texParameteri(T,r.TEXTURE_MIN_FILTER,E(S.minFilter)),S.minFilter!==Ft&&S.minFilter!==wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,Z[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Ft||S.minFilter!==Wr&&S.minFilter!==Ms||S.type===kn&&e.has("OES_texture_float_linear")===!1||l===!1&&S.type===Ln&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(T,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function ee(T,S){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",R));const re=S.source;let ie=h.get(re);ie===void 0&&(ie={},h.set(re,ie));const ne=L(S);if(ne!==T.__cacheKey){ie[ne]===void 0&&(ie[ne]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ie[ne].usedTimes++;const be=ie[T.__cacheKey];be!==void 0&&(ie[T.__cacheKey].usedTimes--,be.usedTimes===0&&w(S)),T.__cacheKey=ne,T.__webglTexture=ie[ne].texture}return k}function he(T,S,k){let re=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=r.TEXTURE_3D);const ie=ee(T,S),ne=S.source;t.bindTexture(re,T.__webglTexture,r.TEXTURE0+k);const be=n.get(ne);if(ne.version!==be.__version||ie===!0){t.activeTexture(r.TEXTURE0+k);const ue=Ke.getPrimaries(Ke.workingColorSpace),xe=S.colorSpace===$t?null:Ke.getPrimaries(S.colorSpace),Ce=S.colorSpace===$t||ue===xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Be=p(S)&&_(S.image)===!1;let se=g(S.image,Be,!1,i.maxTextureSize);se=pe(S,se);const je=_(se)||l,Xe=s.convert(S.format,S.colorSpace);let Fe=s.convert(S.type),Ae=y(S.internalFormat,Xe,Fe,S.colorSpace,S.isVideoTexture);Y(re,S,je);let ye;const ke=S.mipmaps,$e=l&&S.isVideoTexture!==!0&&Ae!==zc,ct=be.__version===void 0||ie===!0,Ve=C(S,se,je);if(S.isDepthTexture)Ae=r.DEPTH_COMPONENT,l?S.type===kn?Ae=r.DEPTH_COMPONENT32F:S.type===zn?Ae=r.DEPTH_COMPONENT24:S.type===ai?Ae=r.DEPTH24_STENCIL8:Ae=r.DEPTH_COMPONENT16:S.type===kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===li&&Ae===r.DEPTH_COMPONENT&&S.type!==ea&&S.type!==zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=zn,Fe=s.convert(S.type)),S.format===Xi&&Ae===r.DEPTH_COMPONENT&&(Ae=r.DEPTH_STENCIL,S.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ai,Fe=s.convert(S.type))),ct&&($e?t.texStorage2D(r.TEXTURE_2D,1,Ae,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,Ae,se.width,se.height,0,Xe,Fe,null));else if(S.isDataTexture)if(ke.length>0&&je){$e&&ct&&t.texStorage2D(r.TEXTURE_2D,Ve,Ae,ke[0].width,ke[0].height);for(let le=0,U=ke.length;le<U;le++)ye=ke[le],$e?t.texSubImage2D(r.TEXTURE_2D,le,0,0,ye.width,ye.height,Xe,Fe,ye.data):t.texImage2D(r.TEXTURE_2D,le,Ae,ye.width,ye.height,0,Xe,Fe,ye.data);S.generateMipmaps=!1}else $e?(ct&&t.texStorage2D(r.TEXTURE_2D,Ve,Ae,se.width,se.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,se.width,se.height,Xe,Fe,se.data)):t.texImage2D(r.TEXTURE_2D,0,Ae,se.width,se.height,0,Xe,Fe,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){$e&&ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ve,Ae,ke[0].width,ke[0].height,se.depth);for(let le=0,U=ke.length;le<U;le++)ye=ke[le],S.format!==sn?Xe!==null?$e?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,ye.width,ye.height,se.depth,Xe,ye.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,le,Ae,ye.width,ye.height,se.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,ye.width,ye.height,se.depth,Xe,Fe,ye.data):t.texImage3D(r.TEXTURE_2D_ARRAY,le,Ae,ye.width,ye.height,se.depth,0,Xe,Fe,ye.data)}else{$e&&ct&&t.texStorage2D(r.TEXTURE_2D,Ve,Ae,ke[0].width,ke[0].height);for(let le=0,U=ke.length;le<U;le++)ye=ke[le],S.format!==sn?Xe!==null?$e?t.compressedTexSubImage2D(r.TEXTURE_2D,le,0,0,ye.width,ye.height,Xe,ye.data):t.compressedTexImage2D(r.TEXTURE_2D,le,Ae,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage2D(r.TEXTURE_2D,le,0,0,ye.width,ye.height,Xe,Fe,ye.data):t.texImage2D(r.TEXTURE_2D,le,Ae,ye.width,ye.height,0,Xe,Fe,ye.data)}else if(S.isDataArrayTexture)$e?(ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ve,Ae,se.width,se.height,se.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Xe,Fe,se.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ae,se.width,se.height,se.depth,0,Xe,Fe,se.data);else if(S.isData3DTexture)$e?(ct&&t.texStorage3D(r.TEXTURE_3D,Ve,Ae,se.width,se.height,se.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Xe,Fe,se.data)):t.texImage3D(r.TEXTURE_3D,0,Ae,se.width,se.height,se.depth,0,Xe,Fe,se.data);else if(S.isFramebufferTexture){if(ct)if($e)t.texStorage2D(r.TEXTURE_2D,Ve,Ae,se.width,se.height);else{let le=se.width,U=se.height;for(let de=0;de<Ve;de++)t.texImage2D(r.TEXTURE_2D,de,Ae,le,U,0,Xe,Fe,null),le>>=1,U>>=1}}else if(ke.length>0&&je){$e&&ct&&t.texStorage2D(r.TEXTURE_2D,Ve,Ae,ke[0].width,ke[0].height);for(let le=0,U=ke.length;le<U;le++)ye=ke[le],$e?t.texSubImage2D(r.TEXTURE_2D,le,0,0,Xe,Fe,ye):t.texImage2D(r.TEXTURE_2D,le,Ae,Xe,Fe,ye);S.generateMipmaps=!1}else $e?(ct&&t.texStorage2D(r.TEXTURE_2D,Ve,Ae,se.width,se.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Xe,Fe,se)):t.texImage2D(r.TEXTURE_2D,0,Ae,Xe,Fe,se);x(S,je)&&v(re),be.__version=ne.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Me(T,S,k){if(S.image.length!==6)return;const re=ee(T,S),ie=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+k);const ne=n.get(ie);if(ie.version!==ne.__version||re===!0){t.activeTexture(r.TEXTURE0+k);const be=Ke.getPrimaries(Ke.workingColorSpace),ue=S.colorSpace===$t?null:Ke.getPrimaries(S.colorSpace),xe=S.colorSpace===$t||be===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ce=S.isCompressedTexture||S.image[0].isCompressedTexture,Be=S.image[0]&&S.image[0].isDataTexture,se=[];for(let le=0;le<6;le++)!Ce&&!Be?se[le]=g(S.image[le],!1,!0,i.maxCubemapSize):se[le]=Be?S.image[le].image:S.image[le],se[le]=pe(S,se[le]);const je=se[0],Xe=_(je)||l,Fe=s.convert(S.format,S.colorSpace),Ae=s.convert(S.type),ye=y(S.internalFormat,Fe,Ae,S.colorSpace),ke=l&&S.isVideoTexture!==!0,$e=ne.__version===void 0||re===!0;let ct=C(S,je,Xe);Y(r.TEXTURE_CUBE_MAP,S,Xe);let Ve;if(Ce){ke&&$e&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ct,ye,je.width,je.height);for(let le=0;le<6;le++){Ve=se[le].mipmaps;for(let U=0;U<Ve.length;U++){const de=Ve[U];S.format!==sn?Fe!==null?ke?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,U,0,0,de.width,de.height,Fe,de.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,U,ye,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,U,0,0,de.width,de.height,Fe,Ae,de.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,U,ye,de.width,de.height,0,Fe,Ae,de.data)}}}else{Ve=S.mipmaps,ke&&$e&&(Ve.length>0&&ct++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ct,ye,se[0].width,se[0].height));for(let le=0;le<6;le++)if(Be){ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,se[le].width,se[le].height,Fe,Ae,se[le].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ye,se[le].width,se[le].height,0,Fe,Ae,se[le].data);for(let U=0;U<Ve.length;U++){const fe=Ve[U].image[le].image;ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,U+1,0,0,fe.width,fe.height,Fe,Ae,fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,U+1,ye,fe.width,fe.height,0,Fe,Ae,fe.data)}}else{ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Fe,Ae,se[le]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ye,Fe,Ae,se[le]);for(let U=0;U<Ve.length;U++){const de=Ve[U];ke?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,U+1,0,0,Fe,Ae,de.image[le]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,U+1,ye,Fe,Ae,de.image[le])}}}x(S,Xe)&&v(r.TEXTURE_CUBE_MAP),ne.__version=ie.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function _e(T,S,k,re,ie,ne){const be=s.convert(k.format,k.colorSpace),ue=s.convert(k.type),xe=y(k.internalFormat,be,ue,k.colorSpace);if(!n.get(S).__hasExternalTextures){const Be=Math.max(1,S.width>>ne),se=Math.max(1,S.height>>ne);ie===r.TEXTURE_3D||ie===r.TEXTURE_2D_ARRAY?t.texImage3D(ie,ne,xe,Be,se,S.depth,0,be,ue,null):t.texImage2D(ie,ne,xe,Be,se,0,be,ue,null)}t.bindFramebuffer(r.FRAMEBUFFER,T),$(S)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,ie,n.get(k).__webglTexture,0,oe(S)):(ie===r.TEXTURE_2D||ie>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,re,ie,n.get(k).__webglTexture,ne),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(T,S,k){if(r.bindRenderbuffer(r.RENDERBUFFER,T),S.depthBuffer&&!S.stencilBuffer){let re=l===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(k||$(S)){const ie=S.depthTexture;ie&&ie.isDepthTexture&&(ie.type===kn?re=r.DEPTH_COMPONENT32F:ie.type===zn&&(re=r.DEPTH_COMPONENT24));const ne=oe(S);$(S)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,re,S.width,S.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,re,S.width,S.height)}else r.renderbufferStorage(r.RENDERBUFFER,re,S.width,S.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,T)}else if(S.depthBuffer&&S.stencilBuffer){const re=oe(S);k&&$(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,re,r.DEPTH24_STENCIL8,S.width,S.height):$(S)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,r.DEPTH24_STENCIL8,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,T)}else{const re=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ie=0;ie<re.length;ie++){const ne=re[ie],be=s.convert(ne.format,ne.colorSpace),ue=s.convert(ne.type),xe=y(ne.internalFormat,be,ue,ne.colorSpace),Ce=oe(S);k&&$(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,xe,S.width,S.height):$(S)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,xe,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,xe,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ue(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),I(S.depthTexture,0);const re=n.get(S.depthTexture).__webglTexture,ie=oe(S);if(S.depthTexture.format===li)$(S)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,re,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,re,0);else if(S.depthTexture.format===Xi)$(S)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,re,0,ie):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Se(T){const S=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ue(S.__webglFramebuffer,T)}else if(k){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]=r.createRenderbuffer(),Le(S.__webglDepthbuffer[re],T,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),Le(S.__webglDepthbuffer,T,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(T,S,k){const re=n.get(T);S!==void 0&&_e(re.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Se(T)}function D(T){const S=T.texture,k=n.get(T),re=n.get(S);T.addEventListener("dispose",B),T.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture()),re.__version=S.version,o.memory.textures++);const ie=T.isWebGLCubeRenderTarget===!0,ne=T.isWebGLMultipleRenderTargets===!0,be=_(T)||l;if(ie){k.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(l&&S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[ue]=[];for(let xe=0;xe<S.mipmaps.length;xe++)k.__webglFramebuffer[ue][xe]=r.createFramebuffer()}else k.__webglFramebuffer[ue]=r.createFramebuffer()}else{if(l&&S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let ue=0;ue<S.mipmaps.length;ue++)k.__webglFramebuffer[ue]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(ne)if(i.drawBuffers){const ue=T.texture;for(let xe=0,Ce=ue.length;xe<Ce;xe++){const Be=n.get(ue[xe]);Be.__webglTexture===void 0&&(Be.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&T.samples>0&&$(T)===!1){const ue=ne?S:[S];k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let xe=0;xe<ue.length;xe++){const Ce=ue[xe];k.__webglColorRenderbuffer[xe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[xe]);const Be=s.convert(Ce.format,Ce.colorSpace),se=s.convert(Ce.type),je=y(Ce.internalFormat,Be,se,Ce.colorSpace,T.isXRRenderTarget===!0),Xe=oe(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,Xe,je,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,k.__webglColorRenderbuffer[xe])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Le(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ie){t.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture),Y(r.TEXTURE_CUBE_MAP,S,be);for(let ue=0;ue<6;ue++)if(l&&S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)_e(k.__webglFramebuffer[ue][xe],T,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,xe);else _e(k.__webglFramebuffer[ue],T,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);x(S,be)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const ue=T.texture;for(let xe=0,Ce=ue.length;xe<Ce;xe++){const Be=ue[xe],se=n.get(Be);t.bindTexture(r.TEXTURE_2D,se.__webglTexture),Y(r.TEXTURE_2D,Be,be),_e(k.__webglFramebuffer,T,Be,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,0),x(Be,be)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let ue=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(l?ue=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,re.__webglTexture),Y(ue,S,be),l&&S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)_e(k.__webglFramebuffer[xe],T,S,r.COLOR_ATTACHMENT0,ue,xe);else _e(k.__webglFramebuffer,T,S,r.COLOR_ATTACHMENT0,ue,0);x(S,be)&&v(ue),t.unbindTexture()}T.depthBuffer&&Se(T)}function ae(T){const S=_(T)||l,k=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let re=0,ie=k.length;re<ie;re++){const ne=k[re];if(x(ne,S)){const be=T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ue=n.get(ne).__webglTexture;t.bindTexture(be,ue),v(be),t.unbindTexture()}}}function J(T){if(l&&T.samples>0&&$(T)===!1){const S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],k=T.width,re=T.height;let ie=r.COLOR_BUFFER_BIT;const ne=[],be=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=n.get(T),xe=T.isWebGLMultipleRenderTargets===!0;if(xe)for(let Ce=0;Ce<S.length;Ce++)t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Ce=0;Ce<S.length;Ce++){ne.push(r.COLOR_ATTACHMENT0+Ce),T.depthBuffer&&ne.push(be);const Be=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(Be===!1&&(T.depthBuffer&&(ie|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&(ie|=r.STENCIL_BUFFER_BIT)),xe&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ue.__webglColorRenderbuffer[Ce]),Be===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[be]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[be])),xe){const se=n.get(S[Ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,se,0)}r.blitFramebuffer(0,0,k,re,0,0,k,re,ie,r.NEAREST),u&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),xe)for(let Ce=0;Ce<S.length;Ce++){t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,ue.__webglColorRenderbuffer[Ce]);const Be=n.get(S[Ce]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,Be,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function oe(T){return Math.min(i.maxSamples,T.samples)}function $(T){const S=n.get(T);return l&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ee(T){const S=o.render.frame;d.get(T)!==S&&(d.set(T,S),T.update())}function pe(T,S){const k=T.colorSpace,re=T.format,ie=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Vo||k!==In&&k!==$t&&(Ke.getTransfer(k)===nt?l===!1?e.has("EXT_sRGB")===!0&&re===sn?(T.format=Vo,T.minFilter=wt,T.generateMipmaps=!1):S=Vc.sRGBToLinear(S):(re!==sn||ie!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}this.allocateTextureUnit=P,this.resetTextureUnits=O,this.setTexture2D=I,this.setTexture2DArray=j,this.setTexture3D=V,this.setTextureCube=G,this.rebindTextures=Ne,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=$}function X_(r,e,t){const n=t.isWebGL2;function i(s,o=$t){let l;const c=Ke.getTransfer(o);if(s===Wn)return r.UNSIGNED_BYTE;if(s===Nc)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Fc)return r.UNSIGNED_SHORT_5_5_5_1;if(s===mu)return r.BYTE;if(s===_u)return r.SHORT;if(s===ea)return r.UNSIGNED_SHORT;if(s===Dc)return r.INT;if(s===zn)return r.UNSIGNED_INT;if(s===kn)return r.FLOAT;if(s===Ln)return n?r.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(s===gu)return r.ALPHA;if(s===sn)return r.RGBA;if(s===vu)return r.LUMINANCE;if(s===xu)return r.LUMINANCE_ALPHA;if(s===li)return r.DEPTH_COMPONENT;if(s===Xi)return r.DEPTH_STENCIL;if(s===Vo)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(s===yu)return r.RED;if(s===Uc)return r.RED_INTEGER;if(s===Mu)return r.RG;if(s===Oc)return r.RG_INTEGER;if(s===Bc)return r.RGBA_INTEGER;if(s===qr||s===Xr||s===Yr||s===jr)if(c===nt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===qr)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xr)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yr)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===jr)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===qr)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xr)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yr)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===jr)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Pa||s===La||s===Ia||s===Da)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Pa)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===La)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ia)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Da)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zc)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Na||s===Fa)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Na)return c===nt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Fa)return c===nt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ua||s===Oa||s===Ba||s===za||s===ka||s===Ha||s===Ga||s===Va||s===Wa||s===qa||s===Xa||s===Ya||s===ja||s===Za)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Ua)return c===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Oa)return c===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ba)return c===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===za)return c===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ka)return c===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ha)return c===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ga)return c===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Va)return c===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Wa)return c===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===qa)return c===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xa)return c===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ya)return c===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ja)return c===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Za)return c===nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Zr||s===$a||s===Ka)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Zr)return c===nt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===$a)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ka)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===bu||s===Ja||s===Qa||s===el)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Zr)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Ja)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Qa)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===el)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ai?n?r.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Y_ extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Hn extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j_={type:"move"};class xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const l=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const _=t.getJointPose(g,n),p=this._getHandJoint(u,g);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const d=u.joints["index-finger-tip"],a=u.joints["thumb-tip"],h=d.position.distanceTo(a.position),f=.02,m=.005;u.inputState.pinching&&h>f+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=f-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(j_)))}return l!==null&&(l.visible=i!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Hn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Z_ extends Zi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,l="local-floor",c=1,u=null,d=null,a=null,h=null,f=null,m=null;const g=t.getContextAttributes();let _=null,p=null;const x=[],v=[],y=new te;let C=null;const E=new Vt;E.layers.enable(1),E.viewport=new rt;const R=new Vt;R.layers.enable(2),R.viewport=new rt;const B=[E,R],b=new Y_;b.layers.enable(1),b.layers.enable(2);let w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=x[Y];return ee===void 0&&(ee=new xo,x[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=x[Y];return ee===void 0&&(ee=new xo,x[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=x[Y];return ee===void 0&&(ee=new xo,x[Y]=ee),ee.getHandSpace()};function H(Y){const ee=v.indexOf(Y.inputSource);if(ee===-1)return;const he=x[ee];he!==void 0&&(he.update(Y.inputSource,Y.frame,u||o),he.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",P);for(let Y=0;Y<x.length;Y++){const ee=v[Y];ee!==null&&(v[Y]=null,x[Y].disconnect(ee))}w=null,F=null,e.setRenderTarget(_),f=null,h=null,a=null,i=null,p=null,Z.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){l=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return a},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",O),i.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(y),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new on(f.framebufferWidth,f.framebufferHeight,{format:sn,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ee=null,he=null,Me=null;g.depth&&(Me=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=g.stencil?Xi:li,he=g.stencil?ai:zn);const _e={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};a=new XRWebGLBinding(i,t),h=a.createProjectionLayer(_e),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),p=new on(h.textureWidth,h.textureHeight,{format:sn,type:Wn,depthTexture:new th(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Le=e.properties.get(p);Le.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await i.requestReferenceSpace(l),Z.setContext(i),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(Y){for(let ee=0;ee<Y.removed.length;ee++){const he=Y.removed[ee],Me=v.indexOf(he);Me>=0&&(v[Me]=null,x[Me].disconnect(he))}for(let ee=0;ee<Y.added.length;ee++){const he=Y.added[ee];let Me=v.indexOf(he);if(Me===-1){for(let Le=0;Le<x.length;Le++)if(Le>=v.length){v.push(he),Me=Le;break}else if(v[Le]===null){v[Le]=he,Me=Le;break}if(Me===-1)break}const _e=x[Me];_e&&_e.connect(he)}}const L=new N,I=new N;function j(Y,ee,he){L.setFromMatrixPosition(ee.matrixWorld),I.setFromMatrixPosition(he.matrixWorld);const Me=L.distanceTo(I),_e=ee.projectionMatrix.elements,Le=he.projectionMatrix.elements,Ue=_e[14]/(_e[10]-1),Se=_e[14]/(_e[10]+1),Ne=(_e[9]+1)/_e[5],D=(_e[9]-1)/_e[5],ae=(_e[8]-1)/_e[0],J=(Le[8]+1)/Le[0],oe=Ue*ae,$=Ue*J,Ee=Me/(-ae+J),pe=Ee*-ae;ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(pe),Y.translateZ(Ee),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const T=Ue+Ee,S=Se+Ee,k=oe-pe,re=$+(Me-pe),ie=Ne*Se/S*T,ne=D*Se/S*T;Y.projectionMatrix.makePerspective(k,re,ie,ne,T,S),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function V(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;b.near=R.near=E.near=Y.near,b.far=R.far=E.far=Y.far,(w!==b.near||F!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,F=b.far);const ee=Y.parent,he=b.cameras;V(b,ee);for(let Me=0;Me<he.length;Me++)V(he[Me],ee);he.length===2?j(b,E,R):b.projectionMatrix.copy(E.projectionMatrix),G(Y,b,ee)};function G(Y,ee,he){he===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(he.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=bs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(Y){c=Y,h!==null&&(h.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)};let Q=null;function K(Y,ee){if(d=ee.getViewerPose(u||o),m=ee,d!==null){const he=d.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let Me=!1;he.length!==b.cameras.length&&(b.cameras.length=0,Me=!0);for(let _e=0;_e<he.length;_e++){const Le=he[_e];let Ue=null;if(f!==null)Ue=f.getViewport(Le);else{const Ne=a.getViewSubImage(h,Le);Ue=Ne.viewport,_e===0&&(e.setRenderTargetTextures(p,Ne.colorTexture,h.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(p))}let Se=B[_e];Se===void 0&&(Se=new Vt,Se.layers.enable(_e),Se.viewport=new rt,B[_e]=Se),Se.matrix.fromArray(Le.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(Le.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),_e===0&&(b.matrix.copy(Se.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Me===!0&&b.cameras.push(Se)}}for(let he=0;he<x.length;he++){const Me=v[he],_e=x[he];Me!==null&&_e!==void 0&&_e.update(Me,ee,u||o)}Q&&Q(Y,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),m=null}const Z=new eh;Z.setAnimationLoop(K),this.setAnimationLoop=function(Y){Q=Y},this.dispose=function(){}}}function $_(r,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,Kc(r)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function i(_,p,x,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(_,p):p.isMeshToonMaterial?(s(_,p),a(_,p)):p.isMeshPhongMaterial?(s(_,p),d(_,p)):p.isMeshStandardMaterial?(s(_,p),h(_,p),p.isMeshPhysicalMaterial&&f(_,p,y)):p.isMeshMatcapMaterial?(s(_,p),m(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),g(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&l(_,p)):p.isPointsMaterial?c(_,p,x,v):p.isSpriteMaterial?u(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Pt&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Pt&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(_.envMap.value=x,_.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap){_.lightMap.value=p.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,_.lightMapTransform)}p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function l(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function c(_,p,x,v){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*x,_.scale.value=v*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function d(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function a(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function h(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),e.get(p).envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function f(_,p,x){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pt&&_.clearcoatNormalScale.value.negate())),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=x.texture,_.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,p){p.matcap&&(_.matcap.value=p.matcap)}function g(_,p){const x=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(x.matrixWorld),_.nearDistance.value=x.shadow.camera.near,_.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function K_(r,e,t,n){let i={},s={},o=[];const l=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function u(x,v){let y=i[x.id];y===void 0&&(m(x),y=d(x),i[x.id]=y,x.addEventListener("dispose",_));const C=v.program;n.updateUBOMapping(x,C);const E=e.render.frame;s[x.id]!==E&&(h(x),s[x.id]=E)}function d(x){const v=a();x.__bindingPointIndex=v;const y=r.createBuffer(),C=x.__size,E=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,C,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y}function a(){for(let x=0;x<l;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=i[x.id],y=x.uniforms,C=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let E=0,R=y.length;E<R;E++){const B=Array.isArray(y[E])?y[E]:[y[E]];for(let b=0,w=B.length;b<w;b++){const F=B[b];if(f(F,E,b,C)===!0){const H=F.__offset,O=Array.isArray(F.value)?F.value:[F.value];let P=0;for(let L=0;L<O.length;L++){const I=O[L],j=g(I);typeof I=="number"||typeof I=="boolean"?(F.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,H+P,F.__data)):I.isMatrix3?(F.__data[0]=I.elements[0],F.__data[1]=I.elements[1],F.__data[2]=I.elements[2],F.__data[3]=0,F.__data[4]=I.elements[3],F.__data[5]=I.elements[4],F.__data[6]=I.elements[5],F.__data[7]=0,F.__data[8]=I.elements[6],F.__data[9]=I.elements[7],F.__data[10]=I.elements[8],F.__data[11]=0):(I.toArray(F.__data,P),P+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,v,y,C){const E=x.value,R=v+"_"+y;if(C[R]===void 0)return typeof E=="number"||typeof E=="boolean"?C[R]=E:C[R]=E.clone(),!0;{const B=C[R];if(typeof E=="number"||typeof E=="boolean"){if(B!==E)return C[R]=E,!0}else if(B.equals(E)===!1)return B.copy(E),!0}return!1}function m(x){const v=x.uniforms;let y=0;const C=16;for(let R=0,B=v.length;R<B;R++){const b=Array.isArray(v[R])?v[R]:[v[R]];for(let w=0,F=b.length;w<F;w++){const H=b[w],O=Array.isArray(H.value)?H.value:[H.value];for(let P=0,L=O.length;P<L;P++){const I=O[P],j=g(I),V=y%C;V!==0&&C-V<j.boundary&&(y+=C-V),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=j.storage}}}const E=y%C;return E>0&&(y+=C-E),x.__size=y,x.__cache={},this}function g(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function _(x){const v=x.target;v.removeEventListener("dispose",_);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:c,update:u,dispose:p}}class ah{constructor(e={}){const{canvas:t=Yu(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:a=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const f=new Uint32Array(4),m=new Int32Array(4);let g=null,_=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this._useLegacyLights=!1,this.toneMapping=Pn,this.toneMappingExposure=1;const v=this;let y=!1,C=0,E=0,R=null,B=-1,b=null;const w=new rt,F=new rt;let H=null;const O=new Te(0);let P=0,L=t.width,I=t.height,j=1,V=null,G=null;const Q=new rt(0,0,L,I),K=new rt(0,0,L,I);let Z=!1;const Y=new sa;let ee=!1,he=!1,Me=null;const _e=new lt,Le=new te,Ue=new N,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return R===null?j:1}let D=n;function ae(A,z){for(let q=0;q<A.length;q++){const X=A[q],W=t.getContext(X,z);if(W!==null)return W}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:a};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jo}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",de,!1),D===null){const z=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&z.shift(),D=ae(z,A),D===null)throw ae(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let J,oe,$,Ee,pe,T,S,k,re,ie,ne,be,ue,xe,Ce,Be,se,je,Xe,Fe,Ae,ye,ke,$e;function ct(){J=new am(D),oe=new tm(D,J,e),J.init(oe),ye=new X_(D,J,oe),$=new W_(D,J,oe),Ee=new hm(D),pe=new P_,T=new q_(D,J,$,pe,oe,ye,Ee),S=new im(v),k=new om(v),re=new gd(D,oe),ke=new Qp(D,J,re,oe),ie=new lm(D,re,Ee,ke),ne=new pm(D,ie,re,Ee),Xe=new fm(D,oe,T),Be=new nm(pe),be=new R_(v,S,k,J,oe,ke,Be),ue=new $_(v,pe),xe=new I_,Ce=new B_(J,oe),je=new Jp(v,S,k,$,ne,h,c),se=new V_(v,ne,oe),$e=new K_(D,Ee,oe,$),Fe=new em(D,J,Ee,oe),Ae=new cm(D,J,Ee,oe),Ee.programs=be.programs,v.capabilities=oe,v.extensions=J,v.properties=pe,v.renderLists=xe,v.shadowMap=se,v.state=$,v.info=Ee}ct();const Ve=new Z_(v,D);this.xr=Ve,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=J.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=J.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(L,I,!1))},this.getSize=function(A){return A.set(L,I)},this.setSize=function(A,z,q=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=A,I=z,t.width=Math.floor(A*j),t.height=Math.floor(z*j),q===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(L*j,I*j).floor()},this.setDrawingBufferSize=function(A,z,q){L=A,I=z,j=q,t.width=Math.floor(A*q),t.height=Math.floor(z*q),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,z,q,X){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,z,q,X),$.viewport(w.copy(Q).multiplyScalar(j).floor())},this.getScissor=function(A){return A.copy(K)},this.setScissor=function(A,z,q,X){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,z,q,X),$.scissor(F.copy(K).multiplyScalar(j).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(A){$.setScissorTest(Z=A)},this.setOpaqueSort=function(A){V=A},this.setTransparentSort=function(A){G=A},this.getClearColor=function(A){return A.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(A=!0,z=!0,q=!0){let X=0;if(A){let W=!1;if(R!==null){const ge=R.texture.format;W=ge===Bc||ge===Oc||ge===Uc}if(W){const ge=R.texture.type,we=ge===Wn||ge===zn||ge===ea||ge===ai||ge===Nc||ge===Fc,Pe=je.getClearColor(),De=je.getClearAlpha(),Ge=Pe.r,Oe=Pe.g,ze=Pe.b;we?(f[0]=Ge,f[1]=Oe,f[2]=ze,f[3]=De,D.clearBufferuiv(D.COLOR,0,f)):(m[0]=Ge,m[1]=Oe,m[2]=ze,m[3]=De,D.clearBufferiv(D.COLOR,0,m))}else X|=D.COLOR_BUFFER_BIT}z&&(X|=D.DEPTH_BUFFER_BIT),q&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",de,!1),xe.dispose(),Ce.dispose(),pe.dispose(),S.dispose(),k.dispose(),ne.dispose(),ke.dispose(),$e.dispose(),be.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",Lt),Ve.removeEventListener("sessionend",tt),Me&&(Me.dispose(),Me=null),It.stop()};function le(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=Ee.autoReset,z=se.enabled,q=se.autoUpdate,X=se.needsUpdate,W=se.type;ct(),Ee.autoReset=A,se.enabled=z,se.autoUpdate=q,se.needsUpdate=X,se.type=W}function de(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function fe(A){const z=A.target;z.removeEventListener("dispose",fe),Ie(z)}function Ie(A){Re(A),pe.remove(A)}function Re(A){const z=pe.get(A).programs;z!==void 0&&(z.forEach(function(q){be.releaseProgram(q)}),A.isShaderMaterial&&be.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,q,X,W,ge){z===null&&(z=Se);const we=W.isMesh&&W.matrixWorld.determinant()<0,Pe=Nh(A,z,q,X,W);$.setMaterial(X,we);let De=q.index,Ge=1;if(X.wireframe===!0){if(De=ie.getWireframeAttribute(q),De===void 0)return;Ge=2}const Oe=q.drawRange,ze=q.attributes.position;let ut=Oe.start*Ge,kt=(Oe.start+Oe.count)*Ge;ge!==null&&(ut=Math.max(ut,ge.start*Ge),kt=Math.min(kt,(ge.start+ge.count)*Ge)),De!==null?(ut=Math.max(ut,0),kt=Math.min(kt,De.count)):ze!=null&&(ut=Math.max(ut,0),kt=Math.min(kt,ze.count));const Mt=kt-ut;if(Mt<0||Mt===1/0)return;ke.setup(W,X,Pe,q,De);let _n,ot=Fe;if(De!==null&&(_n=re.get(De),ot=Ae,ot.setIndex(_n)),W.isMesh)X.wireframe===!0?($.setLineWidth(X.wireframeLinewidth*Ne()),ot.setMode(D.LINES)):ot.setMode(D.TRIANGLES);else if(W.isLine){let We=X.linewidth;We===void 0&&(We=1),$.setLineWidth(We*Ne()),W.isLineSegments?ot.setMode(D.LINES):W.isLineLoop?ot.setMode(D.LINE_LOOP):ot.setMode(D.LINE_STRIP)}else W.isPoints?ot.setMode(D.POINTS):W.isSprite&&ot.setMode(D.TRIANGLES);if(W.isBatchedMesh)ot.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)ot.renderInstances(ut,Mt,W.count);else if(q.isInstancedBufferGeometry){const We=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,kr=Math.min(q.instanceCount,We);ot.renderInstances(ut,Mt,kr)}else ot.render(ut,Mt)};function Qe(A,z,q){A.transparent===!0&&A.side===tn&&A.forceSinglePass===!1?(A.side=Pt,A.needsUpdate=!0,Ns(A,z,q),A.side=qn,A.needsUpdate=!0,Ns(A,z,q),A.side=tn):Ns(A,z,q)}this.compile=function(A,z,q=null){q===null&&(q=A),_=Ce.get(q),_.init(),x.push(_),q.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),A!==q&&A.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),_.setupLights(v._useLegacyLights);const X=new Set;return A.traverse(function(W){const ge=W.material;if(ge)if(Array.isArray(ge))for(let we=0;we<ge.length;we++){const Pe=ge[we];Qe(Pe,q,W),X.add(Pe)}else Qe(ge,q,W),X.add(ge)}),x.pop(),_=null,X},this.compileAsync=function(A,z,q=null){const X=this.compile(A,z,q);return new Promise(W=>{function ge(){if(X.forEach(function(we){pe.get(we).currentProgram.isReady()&&X.delete(we)}),X.size===0){W(A);return}setTimeout(ge,10)}J.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let et=null;function yt(A){et&&et(A)}function Lt(){It.stop()}function tt(){It.start()}const It=new eh;It.setAnimationLoop(yt),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(A){et=A,Ve.setAnimationLoop(A),A===null?It.stop():It.start()},Ve.addEventListener("sessionstart",Lt),Ve.addEventListener("sessionend",tt),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(z),z=Ve.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,z,R),_=Ce.get(A,x.length),_.init(),x.push(_),_e.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Y.setFromProjectionMatrix(_e),he=this.localClippingEnabled,ee=Be.init(this.clippingPlanes,he),g=xe.get(A,p.length),g.init(),p.push(g),an(A,z,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(V,G),this.info.render.frame++,ee===!0&&Be.beginShadows();const q=_.state.shadowsArray;if(se.render(q,A,z),ee===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),je.render(g,A),_.setupLights(v._useLegacyLights),z.isArrayCamera){const X=z.cameras;for(let W=0,ge=X.length;W<ge;W++){const we=X[W];ga(g,A,we,we.viewport)}}else ga(g,A,z);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(v,A,z),ke.resetDefaultState(),B=-1,b=null,x.pop(),x.length>0?_=x[x.length-1]:_=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function an(A,z,q,X){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){X&&Ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_e);const we=ne.update(A),Pe=A.material;Pe.visible&&g.push(A,we,Pe,q,Ue.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const we=ne.update(A),Pe=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ue.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ue.copy(we.boundingSphere.center)),Ue.applyMatrix4(A.matrixWorld).applyMatrix4(_e)),Array.isArray(Pe)){const De=we.groups;for(let Ge=0,Oe=De.length;Ge<Oe;Ge++){const ze=De[Ge],ut=Pe[ze.materialIndex];ut&&ut.visible&&g.push(A,we,ut,q,Ue.z,ze)}}else Pe.visible&&g.push(A,we,Pe,q,Ue.z,null)}}const ge=A.children;for(let we=0,Pe=ge.length;we<Pe;we++)an(ge[we],z,q,X)}function ga(A,z,q,X){const W=A.opaque,ge=A.transmissive,we=A.transparent;_.setupLightsView(q),ee===!0&&Be.setGlobalState(v.clippingPlanes,q),ge.length>0&&Dh(W,ge,z,q),X&&$.viewport(w.copy(X)),W.length>0&&Ds(W,z,q),ge.length>0&&Ds(ge,z,q),we.length>0&&Ds(we,z,q),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function Dh(A,z,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const ge=oe.isWebGL2;Me===null&&(Me=new on(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?Ln:Wn,minFilter:Ms,samples:ge?4:0})),v.getDrawingBufferSize(Le),ge?Me.setSize(Le.x,Le.y):Me.setSize(Er(Le.x),Er(Le.y));const we=v.getRenderTarget();v.setRenderTarget(Me),v.getClearColor(O),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Pe=v.toneMapping;v.toneMapping=Pn,Ds(A,q,X),T.updateMultisampleRenderTarget(Me),T.updateRenderTargetMipmap(Me);let De=!1;for(let Ge=0,Oe=z.length;Ge<Oe;Ge++){const ze=z[Ge],ut=ze.object,kt=ze.geometry,Mt=ze.material,_n=ze.group;if(Mt.side===tn&&ut.layers.test(X.layers)){const ot=Mt.side;Mt.side=Pt,Mt.needsUpdate=!0,va(ut,q,X,kt,Mt,_n),Mt.side=ot,Mt.needsUpdate=!0,De=!0}}De===!0&&(T.updateMultisampleRenderTarget(Me),T.updateRenderTargetMipmap(Me)),v.setRenderTarget(we),v.setClearColor(O,P),v.toneMapping=Pe}function Ds(A,z,q){const X=z.isScene===!0?z.overrideMaterial:null;for(let W=0,ge=A.length;W<ge;W++){const we=A[W],Pe=we.object,De=we.geometry,Ge=X===null?we.material:X,Oe=we.group;Pe.layers.test(q.layers)&&va(Pe,z,q,De,Ge,Oe)}}function va(A,z,q,X,W,ge){A.onBeforeRender(v,z,q,X,W,ge),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(v,z,q,X,A,ge),W.transparent===!0&&W.side===tn&&W.forceSinglePass===!1?(W.side=Pt,W.needsUpdate=!0,v.renderBufferDirect(q,z,X,W,A,ge),W.side=qn,W.needsUpdate=!0,v.renderBufferDirect(q,z,X,W,A,ge),W.side=tn):v.renderBufferDirect(q,z,X,W,A,ge),A.onAfterRender(v,z,q,X,W,ge)}function Ns(A,z,q){z.isScene!==!0&&(z=Se);const X=pe.get(A),W=_.state.lights,ge=_.state.shadowsArray,we=W.state.version,Pe=be.getParameters(A,W.state,ge,z,q),De=be.getProgramCacheKey(Pe);let Ge=X.programs;X.environment=A.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(A.isMeshStandardMaterial?k:S).get(A.envMap||X.environment),Ge===void 0&&(A.addEventListener("dispose",fe),Ge=new Map,X.programs=Ge);let Oe=Ge.get(De);if(Oe!==void 0){if(X.currentProgram===Oe&&X.lightsStateVersion===we)return ya(A,Pe),Oe}else Pe.uniforms=be.getUniforms(A),A.onBuild(q,Pe,v),A.onBeforeCompile(Pe,v),Oe=be.acquireProgram(Pe,De),Ge.set(De,Oe),X.uniforms=Pe.uniforms;const ze=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=Be.uniform),ya(A,Pe),X.needsLights=Uh(A),X.lightsStateVersion=we,X.needsLights&&(ze.ambientLightColor.value=W.state.ambient,ze.lightProbe.value=W.state.probe,ze.directionalLights.value=W.state.directional,ze.directionalLightShadows.value=W.state.directionalShadow,ze.spotLights.value=W.state.spot,ze.spotLightShadows.value=W.state.spotShadow,ze.rectAreaLights.value=W.state.rectArea,ze.ltc_1.value=W.state.rectAreaLTC1,ze.ltc_2.value=W.state.rectAreaLTC2,ze.pointLights.value=W.state.point,ze.pointLightShadows.value=W.state.pointShadow,ze.hemisphereLights.value=W.state.hemi,ze.directionalShadowMap.value=W.state.directionalShadowMap,ze.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ze.spotShadowMap.value=W.state.spotShadowMap,ze.spotLightMatrix.value=W.state.spotLightMatrix,ze.spotLightMap.value=W.state.spotLightMap,ze.pointShadowMap.value=W.state.pointShadowMap,ze.pointShadowMatrix.value=W.state.pointShadowMatrix),X.currentProgram=Oe,X.uniformsList=null,Oe}function xa(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=xr.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function ya(A,z){const q=pe.get(A);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function Nh(A,z,q,X,W){z.isScene!==!0&&(z=Se),T.resetTextureUnits();const ge=z.fog,we=X.isMeshStandardMaterial?z.environment:null,Pe=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:In,De=(X.isMeshStandardMaterial?k:S).get(X.envMap||we),Ge=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Oe=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),ze=!!q.morphAttributes.position,ut=!!q.morphAttributes.normal,kt=!!q.morphAttributes.color;let Mt=Pn;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Mt=v.toneMapping);const _n=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ot=_n!==void 0?_n.length:0,We=pe.get(X),kr=_.state.lights;if(ee===!0&&(he===!0||A!==b)){const Xt=A===b&&X.id===B;Be.setState(X,A,Xt)}let ht=!1;X.version===We.__version?(We.needsLights&&We.lightsStateVersion!==kr.state.version||We.outputColorSpace!==Pe||W.isBatchedMesh&&We.batching===!1||!W.isBatchedMesh&&We.batching===!0||W.isInstancedMesh&&We.instancing===!1||!W.isInstancedMesh&&We.instancing===!0||W.isSkinnedMesh&&We.skinning===!1||!W.isSkinnedMesh&&We.skinning===!0||W.isInstancedMesh&&We.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&We.instancingColor===!1&&W.instanceColor!==null||We.envMap!==De||X.fog===!0&&We.fog!==ge||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Be.numPlanes||We.numIntersection!==Be.numIntersection)||We.vertexAlphas!==Ge||We.vertexTangents!==Oe||We.morphTargets!==ze||We.morphNormals!==ut||We.morphColors!==kt||We.toneMapping!==Mt||oe.isWebGL2===!0&&We.morphTargetsCount!==ot)&&(ht=!0):(ht=!0,We.__version=X.version);let jn=We.currentProgram;ht===!0&&(jn=Ns(X,z,W));let Ma=!1,Qi=!1,Hr=!1;const Tt=jn.getUniforms(),Zn=We.uniforms;if($.useProgram(jn.program)&&(Ma=!0,Qi=!0,Hr=!0),X.id!==B&&(B=X.id,Qi=!0),Ma||b!==A){Tt.setValue(D,"projectionMatrix",A.projectionMatrix),Tt.setValue(D,"viewMatrix",A.matrixWorldInverse);const Xt=Tt.map.cameraPosition;Xt!==void 0&&Xt.setValue(D,Ue.setFromMatrixPosition(A.matrixWorld)),oe.logarithmicDepthBuffer&&Tt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Tt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Qi=!0,Hr=!0)}if(W.isSkinnedMesh){Tt.setOptional(D,W,"bindMatrix"),Tt.setOptional(D,W,"bindMatrixInverse");const Xt=W.skeleton;Xt&&(oe.floatVertexTextures?(Xt.boneTexture===null&&Xt.computeBoneTexture(),Tt.setValue(D,"boneTexture",Xt.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Tt.setOptional(D,W,"batchingTexture"),Tt.setValue(D,"batchingTexture",W._matricesTexture,T));const Gr=q.morphAttributes;if((Gr.position!==void 0||Gr.normal!==void 0||Gr.color!==void 0&&oe.isWebGL2===!0)&&Xe.update(W,q,jn),(Qi||We.receiveShadow!==W.receiveShadow)&&(We.receiveShadow=W.receiveShadow,Tt.setValue(D,"receiveShadow",W.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Zn.envMap.value=De,Zn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Qi&&(Tt.setValue(D,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&Fh(Zn,Hr),ge&&X.fog===!0&&ue.refreshFogUniforms(Zn,ge),ue.refreshMaterialUniforms(Zn,X,j,I,Me),xr.upload(D,xa(We),Zn,T)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(xr.upload(D,xa(We),Zn,T),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Tt.setValue(D,"center",W.center),Tt.setValue(D,"modelViewMatrix",W.modelViewMatrix),Tt.setValue(D,"normalMatrix",W.normalMatrix),Tt.setValue(D,"modelMatrix",W.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Xt=X.uniformsGroups;for(let Vr=0,Oh=Xt.length;Vr<Oh;Vr++)if(oe.isWebGL2){const ba=Xt[Vr];$e.update(ba,jn),$e.bind(ba,jn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return jn}function Fh(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Uh(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,z,q){pe.get(A.texture).__webglTexture=z,pe.get(A.depthTexture).__webglTexture=q;const X=pe.get(A);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=q===void 0,X.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,z){const q=pe.get(A);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,q=0){R=A,C=z,E=q;let X=!0,W=null,ge=!1,we=!1;if(A){const De=pe.get(A);De.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(D.FRAMEBUFFER,null),X=!1):De.__webglFramebuffer===void 0?T.setupRenderTarget(A):De.__hasExternalTextures&&T.rebindTextures(A,pe.get(A.texture).__webglTexture,pe.get(A.depthTexture).__webglTexture);const Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(we=!0);const Oe=pe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Oe[z])?W=Oe[z][q]:W=Oe[z],ge=!0):oe.isWebGL2&&A.samples>0&&T.useMultisampledRTT(A)===!1?W=pe.get(A).__webglMultisampledFramebuffer:Array.isArray(Oe)?W=Oe[q]:W=Oe,w.copy(A.viewport),F.copy(A.scissor),H=A.scissorTest}else w.copy(Q).multiplyScalar(j).floor(),F.copy(K).multiplyScalar(j).floor(),H=Z;if($.bindFramebuffer(D.FRAMEBUFFER,W)&&oe.drawBuffers&&X&&$.drawBuffers(A,W),$.viewport(w),$.scissor(F),$.setScissorTest(H),ge){const De=pe.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,De.__webglTexture,q)}else if(we){const De=pe.get(A.texture),Ge=z||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,De.__webglTexture,q||0,Ge)}B=-1},this.readRenderTargetPixels=function(A,z,q,X,W,ge,we){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=pe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){$.bindFramebuffer(D.FRAMEBUFFER,Pe);try{const De=A.texture,Ge=De.format,Oe=De.type;if(Ge!==sn&&ye.convert(Ge)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Oe===Ln&&(J.has("EXT_color_buffer_half_float")||oe.isWebGL2&&J.has("EXT_color_buffer_float"));if(Oe!==Wn&&ye.convert(Oe)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===kn&&(oe.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-X&&q>=0&&q<=A.height-W&&D.readPixels(z,q,X,W,ye.convert(Ge),ye.convert(Oe),ge)}finally{const De=R!==null?pe.get(R).__webglFramebuffer:null;$.bindFramebuffer(D.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(A,z,q=0){const X=Math.pow(2,-q),W=Math.floor(z.image.width*X),ge=Math.floor(z.image.height*X);T.setTexture2D(z,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,A.x,A.y,W,ge),$.unbindTexture()},this.copyTextureToTexture=function(A,z,q,X=0){const W=z.image.width,ge=z.image.height,we=ye.convert(q.format),Pe=ye.convert(q.type);T.setTexture2D(q,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,q.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,q.unpackAlignment),z.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,X,A.x,A.y,W,ge,we,Pe,z.image.data):z.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,X,A.x,A.y,z.mipmaps[0].width,z.mipmaps[0].height,we,z.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,X,A.x,A.y,we,Pe,z.image),X===0&&q.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(A,z,q,X,W=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=A.max.x-A.min.x+1,we=A.max.y-A.min.y+1,Pe=A.max.z-A.min.z+1,De=ye.convert(X.format),Ge=ye.convert(X.type);let Oe;if(X.isData3DTexture)T.setTexture3D(X,0),Oe=D.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)T.setTexture2DArray(X,0),Oe=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,X.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,X.unpackAlignment);const ze=D.getParameter(D.UNPACK_ROW_LENGTH),ut=D.getParameter(D.UNPACK_IMAGE_HEIGHT),kt=D.getParameter(D.UNPACK_SKIP_PIXELS),Mt=D.getParameter(D.UNPACK_SKIP_ROWS),_n=D.getParameter(D.UNPACK_SKIP_IMAGES),ot=q.isCompressedTexture?q.mipmaps[W]:q.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,ot.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ot.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,A.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,A.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,A.min.z),q.isDataTexture||q.isData3DTexture?D.texSubImage3D(Oe,W,z.x,z.y,z.z,ge,we,Pe,De,Ge,ot.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Oe,W,z.x,z.y,z.z,ge,we,Pe,De,ot.data)):D.texSubImage3D(Oe,W,z.x,z.y,z.z,ge,we,Pe,De,Ge,ot),D.pixelStorei(D.UNPACK_ROW_LENGTH,ze),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut),D.pixelStorei(D.UNPACK_SKIP_PIXELS,kt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Mt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,_n),W===0&&X.generateMipmaps&&D.generateMipmap(Oe),$.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?T.setTextureCube(A,0):A.isData3DTexture?T.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?T.setTexture2DArray(A,0):T.setTexture2D(A,0),$.unbindTexture()},this.resetState=function(){C=0,E=0,R=null,$.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===na?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===Dr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===St?ci:kc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ci?St:In}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class J_ extends ah{}J_.prototype.isWebGL1Renderer=!0;class aa{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=n}clone(){return new aa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class lh extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Q_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Go,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dt=new N;class Ar{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),s=Je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ar(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ch extends Xn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Pi;const ss=new N,Li=new N,Ii=new N,Di=new te,rs=new te,hh=new lt,ir=new N,os=new N,sr=new N,Hl=new te,yo=new te,Gl=new te;class eg extends gt{constructor(e=new ch){if(super(),this.isSprite=!0,this.type="Sprite",Pi===void 0){Pi=new Ot;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Q_(t,5);Pi.setIndex([0,1,2,0,2,3]),Pi.setAttribute("position",new Ar(n,3,0,!1)),Pi.setAttribute("uv",new Ar(n,2,3,!1))}this.geometry=Pi,this.material=e,this.center=new te(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Li.setFromMatrixScale(this.matrixWorld),hh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ii.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Li.multiplyScalar(-Ii.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;rr(ir.set(-.5,-.5,0),Ii,o,Li,i,s),rr(os.set(.5,-.5,0),Ii,o,Li,i,s),rr(sr.set(.5,.5,0),Ii,o,Li,i,s),Hl.set(0,0),yo.set(1,0),Gl.set(1,1);let l=e.ray.intersectTriangle(ir,os,sr,!1,ss);if(l===null&&(rr(os.set(-.5,.5,0),Ii,o,Li,i,s),yo.set(0,1),l=e.ray.intersectTriangle(ir,sr,os,!1,ss),l===null))return;const c=e.ray.origin.distanceTo(ss);c<e.near||c>e.far||t.push({distance:c,point:ss.clone(),uv:Zt.getInterpolation(ss,ir,os,sr,Hl,yo,Gl,new te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function rr(r,e,t,n,i,s){Di.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(rs.x=s*Di.x-i*Di.y,rs.y=i*Di.x+s*Di.y):rs.copy(Di),r.copy(e),r.x+=rs.x,r.y+=rs.y,r.applyMatrix4(hh)}class uh extends Xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vl=new lt,Yo=new Xc,or=new Nr,ar=new N;class tg extends gt{constructor(e=new Ot,t=new uh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(i),or.radius+=s,e.ray.intersectsSphere(or)===!1)return;Vl.copy(i).invert(),Yo.copy(e.ray).applyMatrix4(Vl);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=n.index,a=n.attributes.position;if(u!==null){const h=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=h,g=f;m<g;m++){const _=u.getX(m);ar.fromBufferAttribute(a,_),Wl(ar,_,c,i,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(a.count,o.start+o.count);for(let m=h,g=f;m<g;m++)ar.fromBufferAttribute(a,m),Wl(ar,m,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Wl(r,e,t,n,i,s,o){const l=Yo.distanceSqToPoint(r);if(l<t){const c=new N;Yo.closestPointToPoint(r,c),c.applyMatrix4(n);const u=i.ray.origin.distanceTo(c);if(u<i.near||u>i.far)return;s.push({distance:u,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,object:o})}}class ws extends zt{constructor(e,t,n,i,s,o,l,c,u){super(e,t,n,i,s,o,l,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let l=0,c=s-1,u;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),u=n[i]-o,u<0)l=i+1;else if(u>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);const d=n[i],h=n[i+1]-d,f=(o-d)/h;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),l=this.getPoint(s),c=t||(o.isVector2?new te:new N);return c.copy(l).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new N,i=[],s=[],o=[],l=new N,c=new lt;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new N)}s[0]=new N,o[0]=new N;let u=Number.MAX_VALUE;const d=Math.abs(i[0].x),a=Math.abs(i[0].y),h=Math.abs(i[0].z);d<=u&&(u=d,n.set(1,0,0)),a<=u&&(u=a,n.set(0,1,0)),h<=u&&n.set(0,0,1),l.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],l),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),l.crossVectors(i[f-1],i[f]),l.length()>Number.EPSILON){l.normalize();const m=Math.acos(Et(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(l,m))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(Et(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(l.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class la extends mn{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=l,this.aRotation=c}getPoint(e,t){const n=t||new te,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const l=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(l),u=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const d=Math.cos(this.aRotation),a=Math.sin(this.aRotation),h=c-this.aX,f=u-this.aY;c=h*d-f*a+this.aX,u=h*a+f*d+this.aY}return n.set(c,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ng extends la{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ca(){let r=0,e=0,t=0,n=0;function i(s,o,l,c){r=s,e=l,t=-3*s+3*o-2*l-c,n=2*s-2*o+l+c}return{initCatmullRom:function(s,o,l,c,u){i(o,l,u*(l-s),u*(c-o))},initNonuniformCatmullRom:function(s,o,l,c,u,d,a){let h=(o-s)/u-(l-s)/(u+d)+(l-o)/d,f=(l-o)/d-(c-o)/(d+a)+(c-l)/a;h*=d,f*=d,i(o,l,h,f)},calc:function(s){const o=s*s,l=o*s;return r+e*s+t*o+n*l}}}const lr=new N,Mo=new ca,bo=new ca,So=new ca;class ig extends mn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new N){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let l=Math.floor(o),c=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:c===0&&l===s-1&&(l=s-2,c=1);let u,d;this.closed||l>0?u=i[(l-1)%s]:(lr.subVectors(i[0],i[1]).add(i[0]),u=lr);const a=i[l%s],h=i[(l+1)%s];if(this.closed||l+2<s?d=i[(l+2)%s]:(lr.subVectors(i[s-1],i[s-2]).add(i[s-1]),d=lr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(u.distanceToSquared(a),f),g=Math.pow(a.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f);g<1e-4&&(g=1),m<1e-4&&(m=g),_<1e-4&&(_=g),Mo.initNonuniformCatmullRom(u.x,a.x,h.x,d.x,m,g,_),bo.initNonuniformCatmullRom(u.y,a.y,h.y,d.y,m,g,_),So.initNonuniformCatmullRom(u.z,a.z,h.z,d.z,m,g,_)}else this.curveType==="catmullrom"&&(Mo.initCatmullRom(u.x,a.x,h.x,d.x,this.tension),bo.initCatmullRom(u.y,a.y,h.y,d.y,this.tension),So.initCatmullRom(u.z,a.z,h.z,d.z,this.tension));return n.set(Mo.calc(c),bo.calc(c),So.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new N().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ql(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,l=r*r,c=r*l;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*l+s*r+t}function sg(r,e){const t=1-r;return t*t*e}function rg(r,e){return 2*(1-r)*r*e}function og(r,e){return r*r*e}function gs(r,e,t,n){return sg(r,e)+rg(r,t)+og(r,n)}function ag(r,e){const t=1-r;return t*t*t*e}function lg(r,e){const t=1-r;return 3*t*t*r*e}function cg(r,e){return 3*(1-r)*r*r*e}function hg(r,e){return r*r*r*e}function vs(r,e,t,n,i){return ag(r,e)+lg(r,t)+cg(r,n)+hg(r,i)}class dh extends mn{constructor(e=new te,t=new te,n=new te,i=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new te){const n=t,i=this.v0,s=this.v1,o=this.v2,l=this.v3;return n.set(vs(e,i.x,s.x,o.x,l.x),vs(e,i.y,s.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ug extends mn{constructor(e=new N,t=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new N){const n=t,i=this.v0,s=this.v1,o=this.v2,l=this.v3;return n.set(vs(e,i.x,s.x,o.x,l.x),vs(e,i.y,s.y,o.y,l.y),vs(e,i.z,s.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fh extends mn{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dg extends mn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ph extends mn{constructor(e=new te,t=new te,n=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new te){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(gs(e,i.x,s.x,o.x),gs(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fg extends mn{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(gs(e,i.x,s.x,o.x),gs(e,i.y,s.y,o.y),gs(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mh extends mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),l=s-o,c=i[o===0?o:o-1],u=i[o],d=i[o>i.length-2?i.length-1:o+1],a=i[o>i.length-3?i.length-1:o+2];return n.set(ql(l,c.x,u.x,d.x,a.x),ql(l,c.y,u.y,d.y,a.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new te().fromArray(i))}return this}}var jo=Object.freeze({__proto__:null,ArcCurve:ng,CatmullRomCurve3:ig,CubicBezierCurve:dh,CubicBezierCurve3:ug,EllipseCurve:la,LineCurve:fh,LineCurve3:dg,QuadraticBezierCurve:ph,QuadraticBezierCurve3:fg,SplineCurve:mh});class pg extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,l=this.curves[s],c=l.getLength(),u=c===0?0:1-o/c;return l.getPointAt(u,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],l=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(l);for(let u=0;u<c.length;u++){const d=c[u];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new jo[i.type]().fromJSON(i))}return this}}class Xl extends pg{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new fh(this.currentPoint.clone(),new te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new ph(this.currentPoint.clone(),new te(e,t),new te(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const l=new dh(this.currentPoint.clone(),new te(e,t),new te(n,i),new te(s,o));return this.curves.push(l),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new mh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+l,t+c,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,l,c){const u=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+u,t+d,n,i,s,o,l,c),this}absellipse(e,t,n,i,s,o,l,c){const u=new la(e,t,n,i,s,o,l,c);if(this.curves.length>0){const a=u.getPoint(0);a.equals(this.currentPoint)||this.lineTo(a.x,a.y)}this.curves.push(u);const d=u.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ha extends Ot{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],l=[],c=[],u=new N,d=new te;o.push(0,0,0),l.push(0,0,1),c.push(.5,.5);for(let a=0,h=3;a<=t;a++,h+=3){const f=n+a/t*i;u.x=e*Math.cos(f),u.y=e*Math.sin(f),o.push(u.x,u.y,u.z),l.push(0,0,1),d.x=(o[h]/e+1)/2,d.y=(o[h+1]/e+1)/2,c.push(d.x,d.y)}for(let a=1;a<=t;a++)s.push(a,a+1,0);this.setIndex(s),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class hi extends Ot{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:l,thetaLength:c};const u=this;i=Math.floor(i),s=Math.floor(s);const d=[],a=[],h=[],f=[];let m=0;const g=[],_=n/2;let p=0;x(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(f,2));function x(){const y=new N,C=new N;let E=0;const R=(t-e)/n;for(let B=0;B<=s;B++){const b=[],w=B/s,F=w*(t-e)+e;for(let H=0;H<=i;H++){const O=H/i,P=O*c+l,L=Math.sin(P),I=Math.cos(P);C.x=F*L,C.y=-w*n+_,C.z=F*I,a.push(C.x,C.y,C.z),y.set(L,R,I).normalize(),h.push(y.x,y.y,y.z),f.push(O,1-w),b.push(m++)}g.push(b)}for(let B=0;B<i;B++)for(let b=0;b<s;b++){const w=g[b][B],F=g[b+1][B],H=g[b+1][B+1],O=g[b][B+1];d.push(w,F,O),d.push(F,H,O),E+=6}u.addGroup(p,E,0),p+=E}function v(y){const C=m,E=new te,R=new N;let B=0;const b=y===!0?e:t,w=y===!0?1:-1;for(let H=1;H<=i;H++)a.push(0,_*w,0),h.push(0,w,0),f.push(.5,.5),m++;const F=m;for(let H=0;H<=i;H++){const P=H/i*c+l,L=Math.cos(P),I=Math.sin(P);R.x=b*I,R.y=_*w,R.z=b*L,a.push(R.x,R.y,R.z),h.push(0,w,0),E.x=L*.5+.5,E.y=I*.5*w+.5,f.push(E.x,E.y),m++}for(let H=0;H<i;H++){const O=C+H,P=F+H;y===!0?d.push(P,P+1,O):d.push(P+1,P,O),B+=3}u.addGroup(p,B,y===!0?1:2),p+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ua extends hi{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,l=Math.PI*2){super(0,e,t,n,i,s,o,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:l}}static fromJSON(e){return new ua(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}let _h=class extends Xl{constructor(e){super(e),this.uuid=pn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Xl().fromJSON(i))}return this}};const mg={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=gh(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let l,c,u,d,a,h,f;if(n&&(s=yg(r,e,s,t)),r.length>80*t){l=u=r[0],c=d=r[1];for(let m=t;m<i;m+=t)a=r[m],h=r[m+1],a<l&&(l=a),h<c&&(c=h),a>u&&(u=a),h>d&&(d=h);f=Math.max(u-l,d-c),f=f!==0?32767/f:0}return Es(s,o,t,l,c,f,0),o}};function gh(r,e,t,n,i){let s,o;if(i===Lg(r,e,t,n)>0)for(s=e;s<t;s+=n)o=Yl(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=Yl(s,r[s],r[s+1],o);return o&&Br(o,o.next)&&(As(o),o=o.next),o}function fi(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Br(t,t.next)||at(t.prev,t,t.next)===0)){if(As(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Es(r,e,t,n,i,s,o){if(!r)return;!o&&s&&Eg(r,n,i,s);let l=r,c,u;for(;r.prev!==r.next;){if(c=r.prev,u=r.next,s?gg(r,n,i,s):_g(r)){e.push(c.i/t|0),e.push(r.i/t|0),e.push(u.i/t|0),As(r),r=u.next,l=u.next;continue}if(r=u,r===l){o?o===1?(r=vg(fi(r),e,t),Es(r,e,t,n,i,s,2)):o===2&&xg(r,e,t,n,i,s):Es(fi(r),e,t,n,i,s,1);break}}}function _g(r){const e=r.prev,t=r,n=r.next;if(at(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,l=e.y,c=t.y,u=n.y,d=i<s?i<o?i:o:s<o?s:o,a=l<c?l<u?l:u:c<u?c:u,h=i>s?i>o?i:o:s>o?s:o,f=l>c?l>u?l:u:c>u?c:u;let m=n.next;for(;m!==e;){if(m.x>=d&&m.x<=h&&m.y>=a&&m.y<=f&&ki(i,l,s,c,o,u,m.x,m.y)&&at(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function gg(r,e,t,n){const i=r.prev,s=r,o=r.next;if(at(i,s,o)>=0)return!1;const l=i.x,c=s.x,u=o.x,d=i.y,a=s.y,h=o.y,f=l<c?l<u?l:u:c<u?c:u,m=d<a?d<h?d:h:a<h?a:h,g=l>c?l>u?l:u:c>u?c:u,_=d>a?d>h?d:h:a>h?a:h,p=Zo(f,m,e,t,n),x=Zo(g,_,e,t,n);let v=r.prevZ,y=r.nextZ;for(;v&&v.z>=p&&y&&y.z<=x;){if(v.x>=f&&v.x<=g&&v.y>=m&&v.y<=_&&v!==i&&v!==o&&ki(l,d,c,a,u,h,v.x,v.y)&&at(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=g&&y.y>=m&&y.y<=_&&y!==i&&y!==o&&ki(l,d,c,a,u,h,y.x,y.y)&&at(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=g&&v.y>=m&&v.y<=_&&v!==i&&v!==o&&ki(l,d,c,a,u,h,v.x,v.y)&&at(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=f&&y.x<=g&&y.y>=m&&y.y<=_&&y!==i&&y!==o&&ki(l,d,c,a,u,h,y.x,y.y)&&at(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function vg(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Br(i,s)&&vh(i,n,n.next,s)&&Ts(i,s)&&Ts(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),As(n),As(n.next),n=r=s),n=n.next}while(n!==r);return fi(n)}function xg(r,e,t,n,i,s){let o=r;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&Cg(o,l)){let c=xh(o,l);o=fi(o,o.next),c=fi(c,c.next),Es(o,e,t,n,i,s,0),Es(c,e,t,n,i,s,0);return}l=l.next}o=o.next}while(o!==r)}function yg(r,e,t,n){const i=[];let s,o,l,c,u;for(s=0,o=e.length;s<o;s++)l=e[s]*n,c=s<o-1?e[s+1]*n:r.length,u=gh(r,l,c,n,!1),u===u.next&&(u.steiner=!0),i.push(Ag(u));for(i.sort(Mg),s=0;s<i.length;s++)t=bg(i[s],t);return t}function Mg(r,e){return r.x-e.x}function bg(r,e){const t=Sg(r,e);if(!t)return e;const n=xh(t,r);return fi(n,n.next),fi(t,t.next)}function Sg(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>n&&(n=h,i=t.x<t.next.x?t:t.next,h===s))return i}t=t.next}while(t!==e);if(!i)return null;const l=i,c=i.x,u=i.y;let d=1/0,a;t=i;do s>=t.x&&t.x>=c&&s!==t.x&&ki(o<u?s:n,o,c,u,o<u?n:s,o,t.x,t.y)&&(a=Math.abs(o-t.y)/(s-t.x),Ts(t,r)&&(a<d||a===d&&(t.x>i.x||t.x===i.x&&wg(i,t)))&&(i=t,d=a)),t=t.next;while(t!==l);return i}function wg(r,e){return at(r.prev,r,e.prev)<0&&at(e.next,r,r.next)<0}function Eg(r,e,t,n){let i=r;do i.z===0&&(i.z=Zo(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Tg(i)}function Tg(r){let e,t,n,i,s,o,l,c,u=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,l=0,e=0;e<u&&(l++,n=n.nextZ,!!n);e++);for(c=u;l>0||c>0&&n;)l!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,l--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,u*=2}while(o>1);return r}function Zo(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Ag(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function ki(r,e,t,n,i,s,o,l){return(i-o)*(e-l)>=(r-o)*(s-l)&&(r-o)*(n-l)>=(t-o)*(e-l)&&(t-o)*(s-l)>=(i-o)*(n-l)}function Cg(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Rg(r,e)&&(Ts(r,e)&&Ts(e,r)&&Pg(r,e)&&(at(r.prev,r,e.prev)||at(r,e.prev,e))||Br(r,e)&&at(r.prev,r,r.next)>0&&at(e.prev,e,e.next)>0)}function at(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Br(r,e){return r.x===e.x&&r.y===e.y}function vh(r,e,t,n){const i=hr(at(r,e,t)),s=hr(at(r,e,n)),o=hr(at(t,n,r)),l=hr(at(t,n,e));return!!(i!==s&&o!==l||i===0&&cr(r,t,e)||s===0&&cr(r,n,e)||o===0&&cr(t,r,n)||l===0&&cr(t,e,n))}function cr(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function hr(r){return r>0?1:r<0?-1:0}function Rg(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&vh(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Ts(r,e){return at(r.prev,r,r.next)<0?at(r,e,r.next)>=0&&at(r,r.prev,e)>=0:at(r,e,r.prev)<0||at(r,r.next,e)<0}function Pg(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function xh(r,e){const t=new $o(r.i,r.x,r.y),n=new $o(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Yl(r,e,t,n){const i=new $o(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function As(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function $o(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Lg(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class xs{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return xs.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];jl(e),Zl(n,e);let o=e.length;t.forEach(jl);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Zl(n,t[c]);const l=mg.triangulate(n,i);for(let c=0;c<l.length;c+=3)s.push(l.slice(c,c+3));return s}}function jl(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Zl(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class da extends Ot{constructor(e=new _h([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let l=0,c=e.length;l<c;l++){const u=e[l];o(u)}this.setAttribute("position",new mt(i,3)),this.setAttribute("uv",new mt(s,2)),this.computeVertexNormals();function o(l){const c=[],u=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,a=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Ig;let v,y=!1,C,E,R,B;p&&(v=p.getSpacedPoints(d),y=!0,h=!1,C=p.computeFrenetFrames(d,!1),E=new N,R=new N,B=new N),h||(_=0,f=0,m=0,g=0);const b=l.extractPoints(u);let w=b.shape;const F=b.holes;if(!xs.isClockWise(w)){w=w.reverse();for(let D=0,ae=F.length;D<ae;D++){const J=F[D];xs.isClockWise(J)&&(F[D]=J.reverse())}}const O=xs.triangulateShape(w,F),P=w;for(let D=0,ae=F.length;D<ae;D++){const J=F[D];w=w.concat(J)}function L(D,ae,J){return ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(ae,J)}const I=w.length,j=O.length;function V(D,ae,J){let oe,$,Ee;const pe=D.x-ae.x,T=D.y-ae.y,S=J.x-D.x,k=J.y-D.y,re=pe*pe+T*T,ie=pe*k-T*S;if(Math.abs(ie)>Number.EPSILON){const ne=Math.sqrt(re),be=Math.sqrt(S*S+k*k),ue=ae.x-T/ne,xe=ae.y+pe/ne,Ce=J.x-k/be,Be=J.y+S/be,se=((Ce-ue)*k-(Be-xe)*S)/(pe*k-T*S);oe=ue+pe*se-D.x,$=xe+T*se-D.y;const je=oe*oe+$*$;if(je<=2)return new te(oe,$);Ee=Math.sqrt(je/2)}else{let ne=!1;pe>Number.EPSILON?S>Number.EPSILON&&(ne=!0):pe<-Number.EPSILON?S<-Number.EPSILON&&(ne=!0):Math.sign(T)===Math.sign(k)&&(ne=!0),ne?(oe=-T,$=pe,Ee=Math.sqrt(re)):(oe=pe,$=T,Ee=Math.sqrt(re/2))}return new te(oe/Ee,$/Ee)}const G=[];for(let D=0,ae=P.length,J=ae-1,oe=D+1;D<ae;D++,J++,oe++)J===ae&&(J=0),oe===ae&&(oe=0),G[D]=V(P[D],P[J],P[oe]);const Q=[];let K,Z=G.concat();for(let D=0,ae=F.length;D<ae;D++){const J=F[D];K=[];for(let oe=0,$=J.length,Ee=$-1,pe=oe+1;oe<$;oe++,Ee++,pe++)Ee===$&&(Ee=0),pe===$&&(pe=0),K[oe]=V(J[oe],J[Ee],J[pe]);Q.push(K),Z=Z.concat(K)}for(let D=0;D<_;D++){const ae=D/_,J=f*Math.cos(ae*Math.PI/2),oe=m*Math.sin(ae*Math.PI/2)+g;for(let $=0,Ee=P.length;$<Ee;$++){const pe=L(P[$],G[$],oe);_e(pe.x,pe.y,-J)}for(let $=0,Ee=F.length;$<Ee;$++){const pe=F[$];K=Q[$];for(let T=0,S=pe.length;T<S;T++){const k=L(pe[T],K[T],oe);_e(k.x,k.y,-J)}}}const Y=m+g;for(let D=0;D<I;D++){const ae=h?L(w[D],Z[D],Y):w[D];y?(R.copy(C.normals[0]).multiplyScalar(ae.x),E.copy(C.binormals[0]).multiplyScalar(ae.y),B.copy(v[0]).add(R).add(E),_e(B.x,B.y,B.z)):_e(ae.x,ae.y,0)}for(let D=1;D<=d;D++)for(let ae=0;ae<I;ae++){const J=h?L(w[ae],Z[ae],Y):w[ae];y?(R.copy(C.normals[D]).multiplyScalar(J.x),E.copy(C.binormals[D]).multiplyScalar(J.y),B.copy(v[D]).add(R).add(E),_e(B.x,B.y,B.z)):_e(J.x,J.y,a/d*D)}for(let D=_-1;D>=0;D--){const ae=D/_,J=f*Math.cos(ae*Math.PI/2),oe=m*Math.sin(ae*Math.PI/2)+g;for(let $=0,Ee=P.length;$<Ee;$++){const pe=L(P[$],G[$],oe);_e(pe.x,pe.y,a+J)}for(let $=0,Ee=F.length;$<Ee;$++){const pe=F[$];K=Q[$];for(let T=0,S=pe.length;T<S;T++){const k=L(pe[T],K[T],oe);y?_e(k.x,k.y+v[d-1].y,v[d-1].x+J):_e(k.x,k.y,a+J)}}}ee(),he();function ee(){const D=i.length/3;if(h){let ae=0,J=I*ae;for(let oe=0;oe<j;oe++){const $=O[oe];Le($[2]+J,$[1]+J,$[0]+J)}ae=d+_*2,J=I*ae;for(let oe=0;oe<j;oe++){const $=O[oe];Le($[0]+J,$[1]+J,$[2]+J)}}else{for(let ae=0;ae<j;ae++){const J=O[ae];Le(J[2],J[1],J[0])}for(let ae=0;ae<j;ae++){const J=O[ae];Le(J[0]+I*d,J[1]+I*d,J[2]+I*d)}}n.addGroup(D,i.length/3-D,0)}function he(){const D=i.length/3;let ae=0;Me(P,ae),ae+=P.length;for(let J=0,oe=F.length;J<oe;J++){const $=F[J];Me($,ae),ae+=$.length}n.addGroup(D,i.length/3-D,1)}function Me(D,ae){let J=D.length;for(;--J>=0;){const oe=J;let $=J-1;$<0&&($=D.length-1);for(let Ee=0,pe=d+_*2;Ee<pe;Ee++){const T=I*Ee,S=I*(Ee+1),k=ae+oe+T,re=ae+$+T,ie=ae+$+S,ne=ae+oe+S;Ue(k,re,ie,ne)}}}function _e(D,ae,J){c.push(D),c.push(ae),c.push(J)}function Le(D,ae,J){Se(D),Se(ae),Se(J);const oe=i.length/3,$=x.generateTopUV(n,i,oe-3,oe-2,oe-1);Ne($[0]),Ne($[1]),Ne($[2])}function Ue(D,ae,J,oe){Se(D),Se(ae),Se(oe),Se(ae),Se(J),Se(oe);const $=i.length/3,Ee=x.generateSideWallUV(n,i,$-6,$-3,$-2,$-1);Ne(Ee[0]),Ne(Ee[1]),Ne(Ee[3]),Ne(Ee[1]),Ne(Ee[2]),Ne(Ee[3])}function Se(D){i.push(c[D*3+0]),i.push(c[D*3+1]),i.push(c[D*3+2])}function Ne(D){s.push(D.x),s.push(D.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Dg(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const l=t[e.shapes[s]];n.push(l)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new jo[i.type]().fromJSON(i)),new da(n,e.options)}}const Ig={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],l=e[n*3],c=e[n*3+1],u=e[i*3],d=e[i*3+1];return[new te(s,o),new te(l,c),new te(u,d)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],l=e[t*3+1],c=e[t*3+2],u=e[n*3],d=e[n*3+1],a=e[n*3+2],h=e[i*3],f=e[i*3+1],m=e[i*3+2],g=e[s*3],_=e[s*3+1],p=e[s*3+2];return Math.abs(l-d)<Math.abs(o-u)?[new te(o,1-c),new te(u,1-a),new te(h,1-m),new te(g,1-p)]:[new te(l,1-c),new te(d,1-a),new te(f,1-m),new te(_,1-p)]}};function Dg(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Cs extends Ot{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+l,Math.PI);let u=0;const d=[],a=new N,h=new N,f=[],m=[],g=[],_=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let y=0;p===0&&o===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){const E=C/t;a.x=-e*Math.cos(i+E*s)*Math.sin(o+v*l),a.y=e*Math.cos(o+v*l),a.z=e*Math.sin(i+E*s)*Math.sin(o+v*l),m.push(a.x,a.y,a.z),h.copy(a).normalize(),g.push(h.x,h.y,h.z),_.push(E+y,1-v),x.push(u++)}d.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const v=d[p][x+1],y=d[p][x],C=d[p+1][x],E=d[p+1][x+1];(p!==0||o>0)&&f.push(v,y,E),(p!==n-1||c<Math.PI)&&f.push(y,C,E)}this.setIndex(f),this.setAttribute("position",new mt(m,3)),this.setAttribute("normal",new mt(g,3)),this.setAttribute("uv",new mt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ng extends Ut{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fn extends Xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ta,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fg extends fn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ug extends Xn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Te(16777215),this.specular=new Te(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ta,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zr extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Og extends zr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const wo=new lt,$l=new N,Kl=new N;class yh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sa,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$l.setFromMatrixPosition(e.matrixWorld),t.position.copy($l),Kl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kl),t.updateMatrixWorld(),wo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Jl=new lt,as=new N,Eo=new N;class Bg extends yh{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),as.setFromMatrixPosition(e.matrixWorld),n.position.copy(as),Eo.copy(n.position),Eo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Eo),n.updateMatrixWorld(),i.makeTranslation(-as.x,-as.y,-as.z),Jl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jl)}}class zg extends zr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Bg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class kg extends yh{constructor(){super(new ra(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ql extends zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new kg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hg extends zr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Mh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ec(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ec();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ec(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jo);const bh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ji{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Gg=new ra(-1,1,1,-1,0,1);class Vg extends Ot{constructor(){super(),this.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new mt([0,2,0,0,2,0],2))}}const Wg=new Vg;class fa{constructor(e){this._mesh=new Ye(Wg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Gg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ko extends Ji{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ut?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ss.clone(e.uniforms),this.material=new Ut({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new fa(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class tc extends Ji{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(l),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class qg extends Ji{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Xg{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new te);this._width=n.width,this._height=n.height,t=new on(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ln}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ko(bh),this.copyPass.material.blending=Rn,this.clock=new Mh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const l=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}tc!==void 0&&(o instanceof tc?n=!0:o instanceof qg&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Yg extends Ji{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Te}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const jg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ji extends Ji{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new te(e.x,e.y):new te(256,256),this.clearColor=new Te(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new on(s,o,{type:Ln}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let a=0;a<this.nMips;a++){const h=new on(s,o,{type:Ln});h.texture.name="UnrealBloomPass.h"+a,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const f=new on(s,o,{type:Ln});f.texture.name="UnrealBloomPass.v"+a,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}const l=jg;this.highPassUniforms=Ss.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ut({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let a=0;a<this.nMips;a++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[a])),this.separableBlurMaterials[a].uniforms.invSize.value=new te(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const d=bh;this.copyUniforms=Ss.clone(d.uniforms),this.blendMaterial=new Ut({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:Uo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Te,this.oldClearAlpha=1,this.basic=new di,this.fsQuad=new fa(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new te(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let l=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[c].uniforms.direction.value=ji.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=ji.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),l=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ut({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new te(.5,.5)},direction:{value:new te(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Ut({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ji.BlurDirectionX=new te(1,0);ji.BlurDirectionY=new te(0,1);const Zg={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class $g extends Ji{constructor(){super();const e=Zg;this.uniforms=Ss.clone(e.uniforms),this.material=new Ng({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new fa(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ke.getTransfer(this._outputColorSpace)===nt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ac?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Cc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Rc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Pc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Lc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Kg={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new te(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
				iterationsUsed = i;

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`};class Jg extends lh{constructor(e=null){super();const t=new Yn;t.deleteAttribute("uv");const n=new fn({side:Pt}),i=new fn;let s=5;e!==null&&e._useLegacyLights===!1&&(s=900);const o=new zg(16777215,s,28,2);o.position.set(.418,16.199,.3),this.add(o);const l=new Ye(t,n);l.position.set(-.757,13.219,.717),l.scale.set(31.713,28.305,28.591),this.add(l);const c=new Ye(t,i);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);const u=new Ye(t,i);u.position.set(-5.607,-.754,-.758),u.rotation.set(0,.994,0),u.scale.set(1.97,1.534,3.955),this.add(u);const d=new Ye(t,i);d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),this.add(d);const a=new Ye(t,i);a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),this.add(a);const h=new Ye(t,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const f=new Ye(t,i);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);const m=new Ye(t,Ni(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const g=new Ye(t,Ni(50));g.position.set(-16.109,18.021,-8.207),g.scale.set(.1,2.425,2.751),this.add(g);const _=new Ye(t,Ni(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const p=new Ye(t,Ni(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);const x=new Ye(t,Ni(20));x.position.set(3.235,11.486,-12.541),x.scale.set(2.5,2,.1),this.add(x);const v=new Ye(t,Ni(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ni(r){const e=new di;return e.color.setScalar(r),e}const Qg={uniforms:{tDiffuse:{value:null},offset:{value:1.05},darkness:{value:.55}},vertexShader:`
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}
	`,fragmentShader:`
		uniform float offset;
		uniform float darkness;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;
		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			vec2 uv = ( vUv - vec2( 0.5 ) ) * vec2( offset );
			float vig = 1.0 - smoothstep( 0.55, 1.05, dot( uv, uv ) * 0.85 );
			vec3 col = mix( texel.rgb * vec3( 1.02, 0.98, 0.99 ), texel.rgb, vig );
			col = mix( col, col * vec3( 0.92, 0.85, 0.88 ), ( 1.0 - vig ) * darkness );
			gl_FragColor = vec4( col, texel.a );
		}
	`};class e0{constructor(e){this.scene=new lh,this._skyDome=this._createSkyDome(12096255,16114175),this.scene.add(this._skyDome),this.scene.fog=new aa(15262450,12,38);const t=window.innerWidth/window.innerHeight;this.camera=new Vt(36,t,.1,300),this.camera.position.set(0,2.5,9),this.camera.lookAt(0,-1,0),this.renderer=new ah({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=St,this.renderer.toneMapping=Pn,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Tc,(e||document.getElementById("app")||document.body).appendChild(this.renderer.domElement),this._ballMesh=null,this._lookY=0,this.shakeIntensity=0,this._cameraBaseX=0,this._cameraBaseY=2.5,this._setupLights(),this._setupEnvironment(),this._setupComposer(),this._onResize=this._onResize.bind(this),window.addEventListener("resize",this._onResize)}_setupLights(){const e=new Hg(16777215,.42);this.scene.add(e);const t=new Ql(16777215,1.05);t.position.set(7,20,8),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.left=-12,t.shadow.camera.right=12,t.shadow.camera.top=12,t.shadow.camera.bottom=-12,t.shadow.normalBias=.025,t.shadow.bias=-2e-4,this.scene.add(t);const n=new Og(11979775,2893088,.32);this.scene.add(n);const i=new Ql(11060479,.22);i.position.set(-9,8,-7),this.scene.add(i)}_createSkyDome(e,t){const n=new Cs(80,32,24),i=new Ut({side:Pt,depthWrite:!1,uniforms:{uSky:{value:new Te(e)},uGround:{value:new Te(t)},uHorizon:{value:new Te(16777215)},uTime:{value:0}},vertexShader:`
				varying float vElev;
				varying vec3 vWorldPos;
				void main() {
					vec4 wp = modelMatrix * vec4(position, 1.0);
					vElev = clamp(wp.y / 60.0 + 0.5, 0.0, 1.0);
					vWorldPos = wp.xyz;
					gl_Position = projectionMatrix * viewMatrix * wp;
				}
			`,fragmentShader:`
				uniform vec3 uSky;
				uniform vec3 uGround;
				uniform vec3 uHorizon;
				uniform float uTime;
				varying float vElev;
				varying vec3 vWorldPos;
				// Soft 3D value-noise for cloud puffs.
				float hash(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
				float noise(vec3 p) {
					vec3 i = floor(p);
					vec3 f = fract(p);
					f = f * f * (3.0 - 2.0 * f);
					float n000 = hash(i);
					float n100 = hash(i + vec3(1,0,0));
					float n010 = hash(i + vec3(0,1,0));
					float n110 = hash(i + vec3(1,1,0));
					float n001 = hash(i + vec3(0,0,1));
					float n101 = hash(i + vec3(1,0,1));
					float n011 = hash(i + vec3(0,1,1));
					float n111 = hash(i + vec3(1,1,1));
					return mix(
						mix(mix(n000, n100, f.x), mix(n010, n110, f.x), f.y),
						mix(mix(n001, n101, f.x), mix(n011, n111, f.x), f.y),
						f.z
					);
				}
				void main() {
					float t = smoothstep(0.0, 1.0, vElev);
					vec3 lower = mix(uGround, uHorizon, smoothstep(0.0, 0.5, t));
					vec3 upper = mix(uHorizon, uSky, smoothstep(0.5, 1.0, t));
					vec3 base = mix(lower, upper, step(0.5, t));

					// Soft moving clouds — render across the upper 60% of the dome with
					// stronger contrast and a slightly darker tint than the sky so they read
					// as actual cloud puffs rather than a faint wash.
					vec3 p = vWorldPos * 0.06 + vec3(uTime * 0.012, 0.0, 0.0);
					float n = noise(p) * 0.55 + noise(p * 2.1) * 0.30 + noise(p * 4.3) * 0.15;
					float cloudMask = smoothstep(0.32, 0.78, n) * smoothstep(0.38, 0.80, vElev);
					vec3 cloudColor = mix(uSky, vec3(1.0), 0.55);
					vec3 col = mix(base, cloudColor, cloudMask * 0.85);
					gl_FragColor = vec4(col, 1.0);
				}
			`}),s=new Ye(n,i);return s.frustumCulled=!1,s}setSkyTheme(e,t){if(!this._skyDome)return;const n=this._skyDome.material;n.uniforms.uSky.value.setHex(e),n.uniforms.uGround.value.setHex(t),this.scene.fog&&this.scene.fog.color.setHex(t)}_setupEnvironment(){const e=new qo(this.renderer),t=new Jg(this.renderer),n=e.fromScene(t,.04).texture;this.scene.environment=n,this._envTexture=n,e.dispose()}_setupComposer(){const e=window.innerWidth,t=window.innerHeight;this.composer=new Xg(this.renderer),this.composer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.composer.setSize(e,t),this._renderPass=new Yg(this.scene,this.camera),this.composer.addPass(this._renderPass),this._bloomPass=new ji(new te(e,t),0,.85,.95),this.composer.addPass(this._bloomPass),this._fxaaPass=new Ko(Kg),this._fxaaPass.uniforms.resolution.value.set(1/e,1/t),this.composer.addPass(this._fxaaPass),this._vignettePass=new Ko(Qg),this._vignettePass.uniforms.offset.value=1.05,this._vignettePass.uniforms.darkness.value=.06,this.composer.addPass(this._vignettePass),this._outputPass=new $g,this.composer.addPass(this._outputPass)}setupCamera(e){this._ballMesh=e,this.camera.position.set(0,2.5,9),this.camera.lookAt(0,-1,0)}updateCamera(e){if(!this._ballMesh)return;const t=this._ballMesh.position.y+2.5,n=this._ballMesh.position.y-1;this._cameraBaseY+=(t-this._cameraBaseY)*.08,this._cameraBaseX=0,this.camera.position.x=this._cameraBaseX,this.camera.position.y=this._cameraBaseY,this.camera.position.z=9,this._lookY=this._lookY??0,this._lookY+=(n-this._lookY)*.075,this.camera.lookAt(0,this._lookY,0)}triggerShake(e){this.shakeIntensity=Math.min(.1,Math.max(this.shakeIntensity,e))}render(){var e,t,n;if((n=(t=(e=this._skyDome)==null?void 0:e.material)==null?void 0:t.uniforms)!=null&&n.uTime&&(this._skyDome.material.uniforms.uTime.value=performance.now()*.001),this.shakeIntensity>1e-4){const i=this.shakeIntensity,s=(Math.random()-.5)*i,o=(Math.random()-.5)*i;this.camera.position.x=this._cameraBaseX+s,this.camera.position.y=this._cameraBaseY+o,this.shakeIntensity*=.72}else this.shakeIntensity=0,this.camera.position.x=this._cameraBaseX,this.camera.position.y=this._cameraBaseY;this.composer?this.composer.render():this.renderer.render(this.scene,this.camera)}_onResize(){var i,s;const e=window.innerWidth,t=window.innerHeight,n=Math.min(window.devicePixelRatio,2);this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.renderer.setPixelRatio(n),this.composer&&(this.composer.setSize(e,t),this.composer.setPixelRatio(n)),this._fxaaPass&&this._fxaaPass.uniforms.resolution.value.set(1/e,1/t),this._bloomPass&&((s=(i=this._bloomPass).setSize)==null||s.call(i,e,t))}get scene3D(){return this.scene}get cam(){return this.camera}}class rn{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new M);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new M);const n=this.elements,i=e.x,s=e.y,o=e.z;return t.x=n[0]*i+n[1]*s+n[2]*o,t.y=n[3]*i+n[4]*s+n[5]*o,t.z=n[6]*i+n[7]*s+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new rn);const n=this.elements,i=e.elements,s=t.elements,o=n[0],l=n[1],c=n[2],u=n[3],d=n[4],a=n[5],h=n[6],f=n[7],m=n[8],g=i[0],_=i[1],p=i[2],x=i[3],v=i[4],y=i[5],C=i[6],E=i[7],R=i[8];return s[0]=o*g+l*x+c*C,s[1]=o*_+l*v+c*E,s[2]=o*p+l*y+c*R,s[3]=u*g+d*x+a*C,s[4]=u*_+d*v+a*E,s[5]=u*p+d*y+a*R,s[6]=h*g+f*x+m*C,s[7]=h*_+f*v+m*E,s[8]=h*p+f*y+m*R,t}scale(e,t){t===void 0&&(t=new rn);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new M);const n=3,i=4,s=[];let o,l;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(l=0;l<3;l++)s[o+i*l]=this.elements[o+3*l];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let c=3;const u=c;let d;const a=4;let h;do{if(o=u-c,s[o+i*o]===0){for(l=o+1;l<u;l++)if(s[o+i*l]!==0){d=a;do h=a-d,s[h+i*o]+=s[h+i*l];while(--d);break}}if(s[o+i*o]!==0)for(l=o+1;l<u;l++){const f=s[o+i*l]/s[o+i*o];d=a;do h=a-d,s[h+i*l]=h<=o?0:s[h+i*l]-s[h+i*o]*f;while(--d)}}while(--c);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new rn);const t=3,n=6,i=t0;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let l=3;const c=l;let u;const d=n;let a;do{if(s=c-l,i[s+n*s]===0){for(o=s+1;o<c;o++)if(i[s+n*o]!==0){u=d;do a=d-u,i[a+n*s]+=i[a+n*o];while(--u);break}}if(i[s+n*s]!==0)for(o=s+1;o<c;o++){const h=i[s+n*o]/i[s+n*s];u=d;do a=d-u,i[a+n*o]=a<=s?0:i[a+n*o]-i[a+n*s]*h;while(--u)}}while(--l);s=2;do{o=s-1;do{const h=i[s+n*o]/i[s+n*s];u=n;do a=n-u,i[a+n*o]=i[a+n*o]-i[a+n*s]*h;while(--u)}while(o--)}while(--s);s=2;do{const h=1/i[s+n*s];u=n;do a=n-u,i[a+n*s]=i[a+n*s]*h;while(--u)}while(s--);s=2;do{o=2;do{if(a=i[t+o+n*s],isNaN(a)||a===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,o,a)}while(o--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,o=t+t,l=n+n,c=i+i,u=t*o,d=t*l,a=t*c,h=n*l,f=n*c,m=i*c,g=s*o,_=s*l,p=s*c,x=this.elements;return x[3*0+0]=1-(h+m),x[3*0+1]=d-p,x[3*0+2]=a+_,x[3*1+0]=d+p,x[3*1+1]=1-(u+m),x[3*1+2]=f-g,x[3*2+0]=a-_,x[3*2+1]=f+g,x[3*2+2]=1-(u+h),this}transpose(e){e===void 0&&(e=new rn);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const t0=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class M{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new M);const n=e.x,i=e.y,s=e.z,o=this.x,l=this.y,c=this.z;return t.x=l*s-c*i,t.y=c*n-o*s,t.z=o*i-l*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new M(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new M(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new rn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new M);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,l=e.z;return Math.sqrt((s-t)*(s-t)+(o-n)*(o-n)+(l-i)*(l-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,l=e.z;return(s-t)*(s-t)+(o-n)*(o-n)+(l-i)*(l-i)}scale(e,t){t===void 0&&(t=new M);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new M),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new M),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new M),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=n0,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=i0;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,e)):(o.set(0,1,0),i.cross(o,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,o=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(nc),nc.almostEquals(e,t)}clone(){return new M(this.x,this.y,this.z)}}M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);const n0=new M,i0=new M,nc=new M;class qt{constructor(e){e===void 0&&(e={}),this.lowerBound=new M,this.upperBound=new M,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,o=this.upperBound,l=n;s.copy(e[0]),l&&l.vmult(s,s),o.copy(s);for(let c=1;c<e.length;c++){let u=e[c];l&&(l.vmult(u,ic),u=ic),u.x>o.x&&(o.x=u.x),u.x<s.x&&(s.x=u.x),u.y>o.y&&(o.y=u.y),u.y<s.y&&(s.y=u.y),u.z>o.z&&(o.z=u.z),u.z<s.z&&(s.z=u.z)}return t&&(t.vadd(s,s),t.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new qt().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,o=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,l=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,c=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return o&&l&&c}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,o,l,c){const u=this.lowerBound,d=this.upperBound;e.copy(u),t.set(d.x,u.y,u.z),n.set(d.x,d.y,u.z),i.set(u.x,d.y,d.z),s.set(d.x,u.y,d.z),o.set(u.x,d.y,u.z),l.set(u.x,u.y,d.z),c.copy(d)}toLocalFrame(e,t){const n=sc,i=n[0],s=n[1],o=n[2],l=n[3],c=n[4],u=n[5],d=n[6],a=n[7];this.getCorners(i,s,o,l,c,u,d,a);for(let h=0;h!==8;h++){const f=n[h];e.pointToLocal(f,f)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=sc,i=n[0],s=n[1],o=n[2],l=n[3],c=n[4],u=n[5],d=n[6],a=n[7];this.getCorners(i,s,o,l,c,u,d,a);for(let h=0;h!==8;h++){const f=n[h];e.pointToWorld(f,f)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,o=1/t.z,l=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,u=(this.lowerBound.y-n.y)*s,d=(this.upperBound.y-n.y)*s,a=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(l,c),Math.min(u,d)),Math.min(a,h)),m=Math.min(Math.min(Math.max(l,c),Math.max(u,d)),Math.max(a,h));return!(m<0||f>m)}}const ic=new M,sc=[new M,new M,new M,new M,new M,new M,new M,new M];class rc{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class Sh{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class dt{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new M),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=s0,i=r0;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new dt);const n=this.x,i=this.y,s=this.z,o=this.w,l=e.x,c=e.y,u=e.z,d=e.w;return t.x=n*d+o*l+i*u-s*c,t.y=i*d+o*c+s*l-n*u,t.z=s*d+o*u+n*c-i*l,t.w=o*d-n*l-i*c-s*u,t}inverse(e){e===void 0&&(e=new dt);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const o=1/(t*t+n*n+i*i+s*s);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new dt),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new M);const n=e.x,i=e.y,s=e.z,o=this.x,l=this.y,c=this.z,u=this.w,d=u*n+l*s-c*i,a=u*i+c*n-o*s,h=u*s+o*i-l*n,f=-o*n-l*i-c*s;return t.x=d*u+f*-o+a*-c-h*-l,t.y=a*u+f*-l+h*-o-d*-c,t.z=h*u+f*-c+d*-l-a*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const o=this.x,l=this.y,c=this.z,u=this.w;switch(t){case"YZX":const d=o*l+c*u;if(d>.499&&(n=2*Math.atan2(o,u),i=Math.PI/2,s=0),d<-.499&&(n=-2*Math.atan2(o,u),i=-Math.PI/2,s=0),n===void 0){const a=o*o,h=l*l,f=c*c;n=Math.atan2(2*l*u-2*o*c,1-2*h-2*f),i=Math.asin(2*d),s=Math.atan2(2*o*u-2*l*c,1-2*a-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),o=Math.cos(t/2),l=Math.cos(n/2),c=Math.sin(e/2),u=Math.sin(t/2),d=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*l+s*u*d,this.y=s*u*l-c*o*d,this.z=s*o*d+c*u*l,this.w=s*o*l-c*u*d):i==="YXZ"?(this.x=c*o*l+s*u*d,this.y=s*u*l-c*o*d,this.z=s*o*d-c*u*l,this.w=s*o*l+c*u*d):i==="ZXY"?(this.x=c*o*l-s*u*d,this.y=s*u*l+c*o*d,this.z=s*o*d+c*u*l,this.w=s*o*l-c*u*d):i==="ZYX"?(this.x=c*o*l-s*u*d,this.y=s*u*l+c*o*d,this.z=s*o*d-c*u*l,this.w=s*o*l+c*u*d):i==="YZX"?(this.x=c*o*l+s*u*d,this.y=s*u*l+c*o*d,this.z=s*o*d-c*u*l,this.w=s*o*l-c*u*d):i==="XZY"&&(this.x=c*o*l-s*u*d,this.y=s*u*l-c*o*d,this.z=s*o*d+c*u*l,this.w=s*o*l+c*u*d),this}clone(){return new dt(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new dt);const i=this.x,s=this.y,o=this.z,l=this.w;let c=e.x,u=e.y,d=e.z,a=e.w,h,f,m,g,_;return f=i*c+s*u+o*d+l*a,f<0&&(f=-f,c=-c,u=-u,d=-d,a=-a),1-f>1e-6?(h=Math.acos(f),m=Math.sin(h),g=Math.sin((1-t)*h)/m,_=Math.sin(t*h)/m):(g=1-t,_=t),n.x=g*i+_*c,n.y=g*s+_*u,n.z=g*o+_*d,n.w=g*l+_*a,n}integrate(e,t,n,i){i===void 0&&(i=new dt);const s=e.x*n.x,o=e.y*n.y,l=e.z*n.z,c=this.x,u=this.y,d=this.z,a=this.w,h=t*.5;return i.x+=h*(s*a+o*d-l*u),i.y+=h*(o*a+l*c-s*d),i.z+=h*(l*a+s*u-o*c),i.w+=h*(-s*c-o*u-l*d),i}}const s0=new M,r0=new M,o0={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class ve{constructor(e){e===void 0&&(e={}),this.id=ve.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}ve.idCounter=0;ve.types=o0;class Ze{constructor(e){e===void 0&&(e={}),this.position=new M,this.quaternion=new dt,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Ze.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Ze.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new M),n.vsub(e,i),t.conjugate(oc),oc.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new M),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new M),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new M),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const oc=new dt;class Vi extends ve{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=e;super({type:ve.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new M;for(let s=0;s!==e.length;s++){const o=e[s],l=o.length;for(let c=0;c!==l;c++){const u=(c+1)%l;t[o[c]].vsub(t[o[u]],i),i.normalize();let d=!1;for(let a=0;a!==n.length;a++)if(n[a].almostEquals(i)||n[a].almostEquals(i)){d=!0;break}d||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new M;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];Vi.computeNormal(i,s,o,t)}static computeNormal(e,t,n,i){const s=new M,o=new M;t.vsub(e,o),n.vsub(t,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,o,l,c,u){const d=new M;let a=-1,h=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){d.copy(n.faceNormals[m]),s.vmult(d,d);const g=d.dot(o);g>h&&(h=g,a=m)}const f=[];for(let m=0;m<n.faces[a].length;m++){const g=n.vertices[n.faces[a][m]],_=new M;_.copy(g),s.vmult(_,_),i.vadd(_,_),f.push(_)}a>=0&&this.clipFaceAgainstHull(o,e,t,f,l,c,u)}findSeparatingAxis(e,t,n,i,s,o,l,c){const u=new M,d=new M,a=new M,h=new M,f=new M,m=new M;let g=Number.MAX_VALUE;const _=this;if(_.uniqueAxes)for(let p=0;p!==_.uniqueAxes.length;p++){n.vmult(_.uniqueAxes[p],u);const x=_.testSepAxis(u,e,t,n,i,s);if(x===!1)return!1;x<g&&(g=x,o.copy(u))}else{const p=l?l.length:_.faces.length;for(let x=0;x<p;x++){const v=l?l[x]:x;u.copy(_.faceNormals[v]),n.vmult(u,u);const y=_.testSepAxis(u,e,t,n,i,s);if(y===!1)return!1;y<g&&(g=y,o.copy(u))}}if(e.uniqueAxes)for(let p=0;p!==e.uniqueAxes.length;p++){s.vmult(e.uniqueAxes[p],d);const x=_.testSepAxis(d,e,t,n,i,s);if(x===!1)return!1;x<g&&(g=x,o.copy(d))}else{const p=c?c.length:e.faces.length;for(let x=0;x<p;x++){const v=c?c[x]:x;d.copy(e.faceNormals[v]),s.vmult(d,d);const y=_.testSepAxis(d,e,t,n,i,s);if(y===!1)return!1;y<g&&(g=y,o.copy(d))}}for(let p=0;p!==_.uniqueEdges.length;p++){n.vmult(_.uniqueEdges[p],h);for(let x=0;x!==e.uniqueEdges.length;x++)if(s.vmult(e.uniqueEdges[x],f),h.cross(f,m),!m.almostZero()){m.normalize();const v=_.testSepAxis(m,e,t,n,i,s);if(v===!1)return!1;v<g&&(g=v,o.copy(m))}}return i.vsub(t,a),a.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,i,s,o){const l=this;Vi.project(l,e,n,i,To),Vi.project(t,e,s,o,Ao);const c=To[0],u=To[1],d=Ao[0],a=Ao[1];if(c<a||d<u)return!1;const h=c-a,f=d-u;return h<f?h:f}calculateLocalInertia(e,t){const n=new M,i=new M;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,l=n.z-i.z;t.x=1/12*e*(2*o*2*o+2*l*2*l),t.y=1/12*e*(2*s*2*s+2*l*2*l),t.z=1/12*e*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,o,l){const c=new M,u=new M,d=new M,a=new M,h=new M,f=new M,m=new M,g=new M,_=this,p=[],x=i,v=p;let y=-1,C=Number.MAX_VALUE;for(let w=0;w<_.faces.length;w++){c.copy(_.faceNormals[w]),n.vmult(c,c);const F=c.dot(e);F<C&&(C=F,y=w)}if(y<0)return;const E=_.faces[y];E.connectedFaces=[];for(let w=0;w<_.faces.length;w++)for(let F=0;F<_.faces[w].length;F++)E.indexOf(_.faces[w][F])!==-1&&w!==y&&E.connectedFaces.indexOf(w)===-1&&E.connectedFaces.push(w);const R=E.length;for(let w=0;w<R;w++){const F=_.vertices[E[w]],H=_.vertices[E[(w+1)%R]];F.vsub(H,u),d.copy(u),n.vmult(d,d),t.vadd(d,d),a.copy(this.faceNormals[y]),n.vmult(a,a),t.vadd(a,a),d.cross(a,h),h.negate(h),f.copy(F),n.vmult(f,f),t.vadd(f,f);const O=E.connectedFaces[w];m.copy(this.faceNormals[O]);const P=this.getPlaneConstantOfFace(O);g.copy(m),n.vmult(g,g);const L=P-g.dot(t);for(this.clipFaceAgainstPlane(x,v,g,L);x.length;)x.shift();for(;v.length;)x.push(v.shift())}m.copy(this.faceNormals[y]);const B=this.getPlaneConstantOfFace(y);g.copy(m),n.vmult(g,g);const b=B-g.dot(t);for(let w=0;w<x.length;w++){let F=g.dot(x[w])+b;if(F<=s&&(console.log(`clamped: depth=${F} to minDist=${s}`),F=s),F<=o){const H=x[w];if(F<=1e-6){const O={point:H,normal:g,depth:F};l.push(O)}}}}clipFaceAgainstPlane(e,t,n,i){let s,o;const l=e.length;if(l<2)return t;let c=e[e.length-1],u=e[0];s=n.dot(c)+i;for(let d=0;d<l;d++){if(u=e[d],o=n.dot(u)+i,s<0)if(o<0){const a=new M;a.copy(u),t.push(a)}else{const a=new M;c.lerp(u,s/(s-o),a),t.push(a)}else if(o<0){const a=new M;c.lerp(u,s/(s-o),a),t.push(a),t.push(u)}c=u,s=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new M);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let o,l,c,u,d,a,h=new M;for(let f=0;f<s.length;f++){h.copy(s[f]),t.vmult(h,h),e.vadd(h,h);const m=h;(o===void 0||m.x<o)&&(o=m.x),(u===void 0||m.x>u)&&(u=m.x),(l===void 0||m.y<l)&&(l=m.y),(d===void 0||m.y>d)&&(d=m.y),(c===void 0||m.z<c)&&(c=m.z),(a===void 0||m.z>a)&&(a=m.z)}n.set(o,l,c),i.set(u,d,a)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new M);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const o=i[s];t.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];t.vmult(o,o)}}if(e)for(let s=0;s<n;s++){const o=i[s];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=new M;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let l=i[o];const c=t[n[o][0]],u=new M;e.vsub(c,u);const d=l.dot(u),a=new M;s.vsub(c,a);const h=l.dot(a);if(d<0&&h>0||d>0&&h<0)return!1}return-1}static project(e,t,n,i,s){const o=e.vertices.length,l=a0;let c=0,u=0;const d=l0,a=e.vertices;d.setZero(),Ze.vectorToLocalFrame(n,i,t,l),Ze.pointToLocalFrame(n,i,d,d);const h=d.dot(l);u=c=a[0].dot(l);for(let f=1;f<o;f++){const m=a[f].dot(l);m>c&&(c=m),m<u&&(u=m)}if(u-=h,c-=h,u>c){const f=u;u=c,c=f}s[0]=c,s[1]=u}}const To=[],Ao=[];new M;const a0=new M,l0=new M;class Ls extends ve{constructor(e){super({type:ve.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=M,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],l=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new Vi({vertices:s,faces:o,axes:l});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new M),Ls.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)Bn.set(s[o][0],s[o][1],s[o][2]),t.vmult(Bn,Bn),e.vadd(Bn,Bn),n(Bn.x,Bn.y,Bn.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;ln[0].set(s.x,s.y,s.z),ln[1].set(-s.x,s.y,s.z),ln[2].set(-s.x,-s.y,s.z),ln[3].set(-s.x,-s.y,-s.z),ln[4].set(s.x,-s.y,-s.z),ln[5].set(s.x,s.y,-s.z),ln[6].set(-s.x,s.y,-s.z),ln[7].set(s.x,-s.y,s.z);const o=ln[0];t.vmult(o,o),e.vadd(o,o),i.copy(o),n.copy(o);for(let l=1;l<8;l++){const c=ln[l];t.vmult(c,c),e.vadd(c,c);const u=c.x,d=c.y,a=c.z;u>i.x&&(i.x=u),d>i.y&&(i.y=d),a>i.z&&(i.z=a),u<n.x&&(n.x=u),d<n.y&&(n.y=d),a<n.z&&(n.z=a)}}}const Bn=new M,ln=[new M,new M,new M,new M,new M,new M,new M,new M],pa={DYNAMIC:1,STATIC:2,KINEMATIC:4},ma={AWAKE:0,SLEEPY:1,SLEEPING:2};class me extends Sh{constructor(e){e===void 0&&(e={}),super(),this.id=me.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new M,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new M,this.force=new M;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?me.STATIC:me.DYNAMIC,typeof e.type==typeof me.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=me.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new dt,this.initQuaternion=new dt,this.previousQuaternion=new dt,this.interpolatedQuaternion=new dt,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new M,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new rn,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new rn,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new M(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new M(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new qt,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=me.AWAKE,this.wakeUpAfterNarrowphase=!1,e===me.SLEEPING&&this.dispatchEvent(me.wakeupEvent)}sleep(){this.sleepState=me.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===me.AWAKE&&n<i?(this.sleepState=me.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(me.sleepyEvent)):t===me.SLEEPY&&n>i?this.wakeUp():t===me.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(me.sleepEvent))}}updateSolveMassProperties(){this.sleepState===me.SLEEPING||this.type===me.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new M),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new M),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new M,s=new dt;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const o=e[s];o.updateBoundingSphereRadius();const l=t[s].length(),c=o.boundingSphereRadius;l+c>i&&(i=l+c)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=c0,o=h0,l=this.quaternion,c=this.aabb,u=u0;for(let d=0;d!==i;d++){const a=e[d];l.vmult(t[d],s),s.vadd(this.position,s),l.mult(n[d],o),a.calculateWorldAABB(s,o,u.lowerBound,u.upperBound),d===0?c.copy(u):c.extend(u)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=d0,i=f0;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new M),this.type!==me.DYNAMIC)return;this.sleepState===me.SLEEPING&&this.wakeUp();const n=p0;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new M),this.type!==me.DYNAMIC)return;const n=m0,i=_0;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===me.DYNAMIC&&(this.sleepState===me.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new M),this.type!==me.DYNAMIC)return;this.sleepState===me.SLEEPING&&this.wakeUp();const n=t,i=g0;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=v0;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new M),this.type!==me.DYNAMIC)return;const n=x0,i=y0;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=M0;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Ls.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new M;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===me.DYNAMIC||this.type===me.KINEMATIC)||this.sleepState===me.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,l=this.force,c=this.torque,u=this.quaternion,d=this.invMass,a=this.invInertiaWorld,h=this.linearFactor,f=d*e;i.x+=l.x*f*h.x,i.y+=l.y*f*h.y,i.z+=l.z*f*h.z;const m=a.elements,g=this.angularFactor,_=c.x*g.x,p=c.y*g.y,x=c.z*g.z;s.x+=e*(m[0]*_+m[1]*p+m[2]*x),s.y+=e*(m[3]*_+m[4]*p+m[5]*x),s.z+=e*(m[6]*_+m[7]*p+m[8]*x),o.x+=i.x*e,o.y+=i.y*e,o.z+=i.z*e,u.integrate(this.angularVelocity,e,this.angularFactor,u),t&&(n?u.normalizeFast():u.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}me.idCounter=0;me.COLLIDE_EVENT_NAME="collide";me.DYNAMIC=pa.DYNAMIC;me.STATIC=pa.STATIC;me.KINEMATIC=pa.KINEMATIC;me.AWAKE=ma.AWAKE;me.SLEEPY=ma.SLEEPY;me.SLEEPING=ma.SLEEPING;me.wakeupEvent={type:"wakeup"};me.sleepyEvent={type:"sleepy"};me.sleepEvent={type:"sleep"};const c0=new M,h0=new dt,u0=new qt,d0=new rn,f0=new rn;new rn;const p0=new M,m0=new M,_0=new M,g0=new M,v0=new M,x0=new M,y0=new M,M0=new M;class wh{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&me.STATIC||e.sleepState===me.SLEEPING)&&(t.type&me.STATIC||t.sleepState===me.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=b0;t.position.vsub(e.position,s);const o=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<o&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=S0,i=w0,s=E0,o=e.length;for(let l=0;l!==o;l++)i[l]=e[l],s[l]=t[l];e.length=0,t.length=0;for(let l=0;l!==o;l++){const c=i[l].id,u=s[l].id,d=c<u?`${c},${u}`:`${u},${c}`;n[d]=l,n.keys.push(d)}for(let l=0;l!==n.keys.length;l++){const c=n.keys.pop(),u=n[c];e.push(i[u]),t.push(s[u]),delete n[c]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new M;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const b0=new M;new M;new dt;new M;const S0={keys:[]},w0=[],E0=[];new M;new M;new M;class T0 extends wh{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let o,l;for(let c=0;c!==s;c++)for(let u=0;u!==c;u++)o=i[c],l=i[u],this.needBroadphaseCollision(o,l)&&this.intersectionTest(o,l,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class Cr{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,o,l){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=l}}let Eh,Th,Ah,Ch,Rh,Ph,Lh;const _a={CLOSEST:1,ANY:2,ALL:4};Eh=ve.types.SPHERE;Th=ve.types.PLANE;Ah=ve.types.BOX;Ch=ve.types.CYLINDER;Rh=ve.types.CONVEXPOLYHEDRON;Ph=ve.types.HEIGHTFIELD;Lh=ve.types.TRIMESH;class pt{get[Eh](){return this._intersectSphere}get[Th](){return this._intersectPlane}get[Ah](){return this._intersectBox}get[Ch](){return this._intersectConvex}get[Rh](){return this._intersectConvex}get[Ph](){return this._intersectHeightfield}get[Lh](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new M),t===void 0&&(t=new M),this.from=e.clone(),this.to=t.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=pt.ANY,this.result=new Cr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||pt.ANY,this.result=t.result||new Cr,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(ac),Co.length=0,e.broadphase.aabbQuery(e,ac,Co),this.intersectBodies(Co),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const i=A0,s=C0;for(let o=0,l=e.shapes.length;o<l;o++){const c=e.shapes[o];if(!(n&&!c.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],s),e.quaternion.vmult(e.shapeOffsets[o],i),i.vadd(e.position,i),this.intersectShape(c,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(G0(s,this.direction,n)>e.boundingSphereRadius)return;const l=this[e.type];l&&l.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const o=this.from,l=this.to,c=this.direction,u=new M(0,0,1);t.vmult(u,u);const d=new M;o.vsub(n,d);const a=d.dot(u);l.vsub(n,d);const h=d.dot(u);if(a*h>0||o.distanceTo(l)<a)return;const f=u.dot(c);if(Math.abs(f)<this.precision)return;const m=new M,g=new M,_=new M;o.vsub(n,m);const p=-u.dot(m)/f;c.scale(p,g),o.vadd(g,_),this.reportIntersection(u,_,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const o=R0;o.from.copy(this.from),o.to.copy(this.to),Ze.pointToLocalFrame(n,t,o.from,o.from),Ze.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();const l=P0;let c,u,d,a;c=u=0,d=a=e.data.length-1;const h=new qt;o.getAABB(h),e.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,l,!0),c=Math.max(c,l[0]),u=Math.max(u,l[1]),e.getIndexOfPosition(h.upperBound.x,h.upperBound.y,l,!0),d=Math.min(d,l[0]+1),a=Math.min(a,l[1]+1);for(let f=c;f<d;f++)for(let m=u;m<a;m++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,m,h),!!h.overlapsRay(o)){if(e.getConvexTrianglePillar(f,m,!1),Ze.pointToWorldFrame(n,t,e.pillarOffset,ur),this._intersectConvex(e.pillarConvex,t,ur,i,s,lc),this.result.shouldStop)return;e.getConvexTrianglePillar(f,m,!0),Ze.pointToWorldFrame(n,t,e.pillarOffset,ur),this._intersectConvex(e.pillarConvex,t,ur,i,s,lc)}}}_intersectSphere(e,t,n,i,s){const o=this.from,l=this.to,c=e.radius,u=(l.x-o.x)**2+(l.y-o.y)**2+(l.z-o.z)**2,d=2*((l.x-o.x)*(o.x-n.x)+(l.y-o.y)*(o.y-n.y)+(l.z-o.z)*(o.z-n.z)),a=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,h=d**2-4*u*a,f=L0,m=I0;if(!(h<0))if(h===0)o.lerp(l,h,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1);else{const g=(-d-Math.sqrt(h))/(2*u),_=(-d+Math.sqrt(h))/(2*u);if(g>=0&&g<=1&&(o.lerp(l,g,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1)),this.result.shouldStop)return;_>=0&&_<=1&&(o.lerp(l,_,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1))}}_intersectConvex(e,t,n,i,s,o){const l=D0,c=cc,u=o&&o.faceList||null,d=e.faces,a=e.vertices,h=e.faceNormals,f=this.direction,m=this.from,g=this.to,_=m.distanceTo(g),p=u?u.length:d.length,x=this.result;for(let v=0;!x.shouldStop&&v<p;v++){const y=u?u[v]:v,C=d[y],E=h[y],R=t,B=n;c.copy(a[C[0]]),R.vmult(c,c),c.vadd(B,c),c.vsub(m,c),R.vmult(E,l);const b=f.dot(l);if(Math.abs(b)<this.precision)continue;const w=l.dot(c)/b;if(!(w<0)){f.scale(w,Bt),Bt.vadd(m,Bt),en.copy(a[C[0]]),R.vmult(en,en),B.vadd(en,en);for(let F=1;!x.shouldStop&&F<C.length-1;F++){cn.copy(a[C[F]]),hn.copy(a[C[F+1]]),R.vmult(cn,cn),R.vmult(hn,hn),B.vadd(cn,cn),B.vadd(hn,hn);const H=Bt.distanceTo(m);!(pt.pointInTriangle(Bt,en,cn,hn)||pt.pointInTriangle(Bt,cn,en,hn))||H>_||this.reportIntersection(l,Bt,s,i,y)}}}}_intersectTrimesh(e,t,n,i,s,o){const l=N0,c=k0,u=H0,d=cc,a=F0,h=U0,f=O0,m=z0,g=B0,_=e.indices;e.vertices;const p=this.from,x=this.to,v=this.direction;u.position.copy(n),u.quaternion.copy(t),Ze.vectorToLocalFrame(n,t,v,a),Ze.pointToLocalFrame(n,t,p,h),Ze.pointToLocalFrame(n,t,x,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,h.x*=e.scale.x,h.y*=e.scale.y,h.z*=e.scale.z,f.vsub(h,a),a.normalize();const y=h.distanceSquared(f);e.tree.rayQuery(this,u,c);for(let C=0,E=c.length;!this.result.shouldStop&&C!==E;C++){const R=c[C];e.getNormal(R,l),e.getVertex(_[R*3],en),en.vsub(h,d);const B=a.dot(l),b=l.dot(d)/B;if(b<0)continue;a.scale(b,Bt),Bt.vadd(h,Bt),e.getVertex(_[R*3+1],cn),e.getVertex(_[R*3+2],hn);const w=Bt.distanceSquared(h);!(pt.pointInTriangle(Bt,cn,en,hn)||pt.pointInTriangle(Bt,en,cn,hn))||w>y||(Ze.vectorToWorldFrame(t,l,g),Ze.pointToWorldFrame(n,t,Bt,m),this.reportIntersection(g,m,s,i,R))}c.length=0}reportIntersection(e,t,n,i,s){const o=this.from,l=this.to,c=o.distanceTo(t),u=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(u.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case pt.ALL:this.hasHit=!0,u.set(o,l,e,t,n,i,c),u.hasHit=!0,this.callback(u);break;case pt.CLOSEST:(c<u.distance||!u.hasHit)&&(this.hasHit=!0,u.hasHit=!0,u.set(o,l,e,t,n,i,c));break;case pt.ANY:this.hasHit=!0,u.hasHit=!0,u.set(o,l,e,t,n,i,c),u.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,oi),n.vsub(t,ls),e.vsub(t,Ro);const s=oi.dot(oi),o=oi.dot(ls),l=oi.dot(Ro),c=ls.dot(ls),u=ls.dot(Ro);let d,a;return(d=c*l-o*u)>=0&&(a=s*u-o*l)>=0&&d+a<s*c-o*o}}pt.CLOSEST=_a.CLOSEST;pt.ANY=_a.ANY;pt.ALL=_a.ALL;const ac=new qt,Co=[],ls=new M,Ro=new M,A0=new M,C0=new dt,Bt=new M,en=new M,cn=new M,hn=new M;new M;new Cr;const lc={faceList:[0]},ur=new M,R0=new pt,P0=[],L0=new M,I0=new M,D0=new M;new M;new M;const cc=new M,N0=new M,F0=new M,U0=new M,O0=new M,B0=new M,z0=new M;new qt;const k0=[],H0=new Ze,oi=new M,dr=new M;function G0(r,e,t){t.vsub(r,oi);const n=oi.dot(e);return e.scale(n,dr),dr.vadd(r,dr),t.distanceTo(dr)}class Hi extends wh{static checkBounds(e,t,n){let i,s;n===0?(i=e.position.x,s=t.position.x):n===1?(i=e.position.y,s=t.position.y):n===2&&(i=e.position.z,s=t.position.z);const o=e.boundingRadius,l=t.boundingRadius,c=i+o;return s-l<c}static insertionSortX(e){for(let t=1,n=e.length;t<n;t++){const i=e[t];let s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)e[s+1]=e[s];e[s+1]=i}return e}static insertionSortY(e){for(let t=1,n=e.length;t<n;t++){const i=e[t];let s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)e[s+1]=e[s];e[s+1]=i}return e}static insertionSortZ(e){for(let t=1,n=e.length;t<n;t++){const i=e[t];let s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)e[s+1]=e[s];e[s+1]=i}return e}constructor(e){super(),this.axisList=[],this.world=null,this.axisIndex=0;const t=this.axisList;this._addBodyHandler=n=>{t.push(n.body)},this._removeBodyHandler=n=>{const i=t.indexOf(n.body);i!==-1&&t.splice(i,1)},e&&this.setWorld(e)}setWorld(e){this.axisList.length=0;for(let t=0;t<e.bodies.length;t++)this.axisList.push(e.bodies[t]);e.removeEventListener("addBody",this._addBodyHandler),e.removeEventListener("removeBody",this._removeBodyHandler),e.addEventListener("addBody",this._addBodyHandler),e.addEventListener("removeBody",this._removeBodyHandler),this.world=e,this.dirty=!0}collisionPairs(e,t,n){const i=this.axisList,s=i.length,o=this.axisIndex;let l,c;for(this.dirty&&(this.sortList(),this.dirty=!1),l=0;l!==s;l++){const u=i[l];for(c=l+1;c<s;c++){const d=i[c];if(this.needBroadphaseCollision(u,d)){if(!Hi.checkBounds(u,d,o))break;this.intersectionTest(u,d,t,n)}}}}sortList(){const e=this.axisList,t=this.axisIndex,n=e.length;for(let i=0;i!==n;i++){const s=e[i];s.aabbNeedsUpdate&&s.updateAABB()}t===0?Hi.insertionSortX(e):t===1?Hi.insertionSortY(e):t===2&&Hi.insertionSortZ(e)}autoDetectAxis(){let e=0,t=0,n=0,i=0,s=0,o=0;const l=this.axisList,c=l.length,u=1/c;for(let f=0;f!==c;f++){const m=l[f],g=m.position.x;e+=g,t+=g*g;const _=m.position.y;n+=_,i+=_*_;const p=m.position.z;s+=p,o+=p*p}const d=t-e*e*u,a=i-n*n*u,h=o-s*s*u;d>a?d>h?this.axisIndex=0:this.axisIndex=2:a>h?this.axisIndex=1:this.axisIndex=2}aabbQuery(e,t,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const o=this.axisList;t.lowerBound[s],t.upperBound[s];for(let l=0;l<o.length;l++){const c=o[l];c.aabbNeedsUpdate&&c.updateAABB(),c.aabb.overlaps(t)&&n.push(c)}return n}}class V0{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class hc{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Is{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Is.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new hc,this.jacobianElementB=new hc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*e-i*t-o*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return e.spatial.dot(s)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,l=n.angularVelocity,c=i.angularVelocity;return e.multiplyVectors(s,l)+t.multiplyVectors(o,c)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,l=n.wlambda,c=i.wlambda;return e.multiplyVectors(s,l)+t.multiplyVectors(o,c)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,l=i.force,c=i.torque,u=n.invMassSolve,d=i.invMassSolve;return s.scale(u,uc),l.scale(d,dc),n.invInertiaWorldSolve.vmult(o,fc),i.invInertiaWorldSolve.vmult(c,pc),e.multiplyVectors(uc,fc)+t.multiplyVectors(dc,pc)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,l=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve;let u=s+o;return l.vmult(e.rotational,fr),u+=fr.dot(e.rotational),c.vmult(t.rotational,fr),u+=fr.dot(t.rotational),u}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=W0;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,o),i.wlambda.addScaledVector(e,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(e,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Is.idCounter=0;const uc=new M,dc=new M,fc=new M,pc=new M,fr=new M,W0=new M;class q0 extends Is{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,l=this.rj,c=X0,u=Y0,d=i.velocity,a=i.angularVelocity;i.force,i.torque;const h=s.velocity,f=s.angularVelocity;s.force,s.torque;const m=j0,g=this.jacobianElementA,_=this.jacobianElementB,p=this.ni;o.cross(p,c),l.cross(p,u),p.negate(g.spatial),c.negate(g.rotational),_.spatial.copy(p),_.rotational.copy(u),m.copy(s.position),m.vadd(l,m),m.vsub(i.position,m),m.vsub(o,m);const x=p.dot(m),v=this.restitution+1,y=v*h.dot(p)-v*d.dot(p)+f.dot(u)-a.dot(c),C=this.computeGiMf();return-x*t-y*n-e*C}getImpactVelocityAlongNormal(){const e=Z0,t=$0,n=K0,i=J0,s=Q0;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const X0=new M,Y0=new M,j0=new M,Z0=new M,$0=new M,K0=new M,J0=new M,Q0=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class mc extends Is{constructor(e,t,n){super(e,t,-n,n),this.ri=new M,this.rj=new M,this.t=new M}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=ev,o=tv,l=this.t;n.cross(l,s),i.cross(l,o);const c=this.jacobianElementA,u=this.jacobianElementB;l.negate(c.spatial),s.negate(c.rotational),u.spatial.copy(l),u.rotational.copy(o);const d=this.computeGW(),a=this.computeGiMf();return-d*t-e*a}}const ev=new M,tv=new M;class ui{constructor(e,t,n){n=V0.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=ui.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}ui.idCounter=0;class Gn{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=Gn.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}Gn.idCounter=0;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new pt;new M;new M;new M;new M(1,0,0),new M(0,1,0),new M(0,0,1);new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class Po extends ve{constructor(e){if(super({type:ve.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new M);const n=2*e*this.radius*this.radius/5;return t.x=n,t.y=n,t.z=n,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,n,i){const s=this.radius,o=["x","y","z"];for(let l=0;l<o.length;l++){const c=o[l];n[c]=e[c]-s,i[c]=e[c]+s}}}new M;new M;new M;new M;new M;new M;new M;new M;new M;class nv extends Vi{constructor(e,t,n,i){if(e===void 0&&(e=1),t===void 0&&(t=1),n===void 0&&(n=1),i===void 0&&(i=8),e<0)throw new Error("The cylinder radiusTop cannot be negative.");if(t<0)throw new Error("The cylinder radiusBottom cannot be negative.");const s=i,o=[],l=[],c=[],u=[],d=[],a=Math.cos,h=Math.sin;o.push(new M(-t*h(0),-n*.5,t*a(0))),u.push(0),o.push(new M(-e*h(0),n*.5,e*a(0))),d.push(1);for(let m=0;m<s;m++){const g=2*Math.PI/s*(m+1),_=2*Math.PI/s*(m+.5);m<s-1?(o.push(new M(-t*h(g),-n*.5,t*a(g))),u.push(2*m+2),o.push(new M(-e*h(g),n*.5,e*a(g))),d.push(2*m+3),c.push([2*m,2*m+1,2*m+3,2*m+2])):c.push([2*m,2*m+1,1,0]),(s%2===1||m<s/2)&&l.push(new M(-h(_),0,a(_)))}c.push(u),l.push(new M(0,1,0));const f=[];for(let m=0;m<d.length;m++)f.push(d[d.length-m-1]);c.push(f),super({vertices:o,faces:c,axes:l}),this.type=ve.types.CYLINDER,this.radiusTop=e,this.radiusBottom=t,this.height=n,this.numSegments=i}}new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new qt;new M;new qt;new M;new M;new M;new M;new M;new M;new M;new qt;new M;new Ze;new qt;class iv{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class sv extends iv{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,l=o.length,c=t.bodies,u=c.length,d=e;let a,h,f,m,g,_;if(l!==0)for(let y=0;y!==u;y++)c[y].updateSolveMassProperties();const p=ov,x=av,v=rv;p.length=l,x.length=l,v.length=l;for(let y=0;y!==l;y++){const C=o[y];v[y]=0,x[y]=C.computeB(d),p[y]=1/C.computeC()}if(l!==0){for(let E=0;E!==u;E++){const R=c[E],B=R.vlambda,b=R.wlambda;B.set(0,0,0),b.set(0,0,0)}for(n=0;n!==i;n++){m=0;for(let E=0;E!==l;E++){const R=o[E];a=x[E],h=p[E],_=v[E],g=R.computeGWlambda(),f=h*(a-g-R.eps*_),_+f<R.minForce?f=R.minForce-_:_+f>R.maxForce&&(f=R.maxForce-_),v[E]+=f,m+=f>0?f:-f,R.addToWlambda(f)}if(m*m<s)break}for(let E=0;E!==u;E++){const R=c[E],B=R.velocity,b=R.angularVelocity;R.vlambda.vmul(R.linearFactor,R.vlambda),B.vadd(R.vlambda,B),R.wlambda.vmul(R.angularFactor,R.wlambda),b.vadd(R.wlambda,b)}let y=o.length;const C=1/d;for(;y--;)o[y].multiplier=v[y]*C}return n}}const rv=[],ov=[],av=[];class lv{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class cv extends lv{constructor(){super(...arguments),this.type=M}constructObject(){return new M}}const it={sphereSphere:ve.types.SPHERE,spherePlane:ve.types.SPHERE|ve.types.PLANE,boxBox:ve.types.BOX|ve.types.BOX,sphereBox:ve.types.SPHERE|ve.types.BOX,planeBox:ve.types.PLANE|ve.types.BOX,convexConvex:ve.types.CONVEXPOLYHEDRON,sphereConvex:ve.types.SPHERE|ve.types.CONVEXPOLYHEDRON,planeConvex:ve.types.PLANE|ve.types.CONVEXPOLYHEDRON,boxConvex:ve.types.BOX|ve.types.CONVEXPOLYHEDRON,sphereHeightfield:ve.types.SPHERE|ve.types.HEIGHTFIELD,boxHeightfield:ve.types.BOX|ve.types.HEIGHTFIELD,convexHeightfield:ve.types.CONVEXPOLYHEDRON|ve.types.HEIGHTFIELD,sphereParticle:ve.types.PARTICLE|ve.types.SPHERE,planeParticle:ve.types.PLANE|ve.types.PARTICLE,boxParticle:ve.types.BOX|ve.types.PARTICLE,convexParticle:ve.types.PARTICLE|ve.types.CONVEXPOLYHEDRON,cylinderCylinder:ve.types.CYLINDER,sphereCylinder:ve.types.SPHERE|ve.types.CYLINDER,planeCylinder:ve.types.PLANE|ve.types.CYLINDER,boxCylinder:ve.types.BOX|ve.types.CYLINDER,convexCylinder:ve.types.CONVEXPOLYHEDRON|ve.types.CYLINDER,heightfieldCylinder:ve.types.HEIGHTFIELD|ve.types.CYLINDER,particleCylinder:ve.types.PARTICLE|ve.types.CYLINDER,sphereTrimesh:ve.types.SPHERE|ve.types.TRIMESH,planeTrimesh:ve.types.PLANE|ve.types.TRIMESH};class hv{get[it.sphereSphere](){return this.sphereSphere}get[it.spherePlane](){return this.spherePlane}get[it.boxBox](){return this.boxBox}get[it.sphereBox](){return this.sphereBox}get[it.planeBox](){return this.planeBox}get[it.convexConvex](){return this.convexConvex}get[it.sphereConvex](){return this.sphereConvex}get[it.planeConvex](){return this.planeConvex}get[it.boxConvex](){return this.boxConvex}get[it.sphereHeightfield](){return this.sphereHeightfield}get[it.boxHeightfield](){return this.boxHeightfield}get[it.convexHeightfield](){return this.convexHeightfield}get[it.sphereParticle](){return this.sphereParticle}get[it.planeParticle](){return this.planeParticle}get[it.boxParticle](){return this.boxParticle}get[it.convexParticle](){return this.convexParticle}get[it.cylinderCylinder](){return this.convexConvex}get[it.sphereCylinder](){return this.sphereConvex}get[it.planeCylinder](){return this.planeConvex}get[it.boxCylinder](){return this.boxConvex}get[it.convexCylinder](){return this.convexConvex}get[it.heightfieldCylinder](){return this.heightfieldCylinder}get[it.particleCylinder](){return this.particleCylinder}get[it.sphereTrimesh](){return this.sphereTrimesh}get[it.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new cv,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,o){let l;this.contactPointPool.length?(l=this.contactPointPool.pop(),l.bi=e,l.bj=t):l=new q0(e,t),l.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const c=this.currentContactMaterial;l.restitution=c.restitution,l.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const u=n.material||e.material,d=i.material||t.material;return u&&d&&u.restitution>=0&&d.restitution>=0&&(l.restitution=u.restitution*d.restitution),l.si=s||n,l.sj=o||i,l}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,o=e.sj,l=this.world,c=this.currentContactMaterial;let u=c.friction;const d=s.material||n.material,a=o.material||i.material;if(d&&a&&d.friction>=0&&a.friction>=0&&(u=d.friction*a.friction),u>0){const h=u*(l.frictionGravity||l.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const m=this.frictionEquationPool,g=m.length?m.pop():new mc(n,i,h*f),_=m.length?m.pop():new mc(n,i,h*f);return g.bi=_.bi=n,g.bj=_.bj=i,g.minForce=_.minForce=-h*f,g.maxForce=_.maxForce=h*f,g.ri.copy(e.ri),g.rj.copy(e.rj),_.ri.copy(e.ri),_.rj.copy(e.rj),e.ni.tangents(g.t,_.t),g.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,l.dt),_.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,l.dt),g.enabled=_.enabled=e.enabled,t.push(g,_),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];ei.setZero(),Fi.setZero(),Ui.setZero();const s=t.bi;t.bj;for(let l=0;l!==e;l++)t=this.result[this.result.length-1-l],t.bi!==s?(ei.vadd(t.ni,ei),Fi.vadd(t.ri,Fi),Ui.vadd(t.rj,Ui)):(ei.vsub(t.ni,ei),Fi.vadd(t.rj,Fi),Ui.vadd(t.ri,Ui));const o=1/e;Fi.scale(o,n.ri),Ui.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),ei.normalize(),ei.tangents(n.t,i.t)}getContacts(e,t,n,i,s,o,l){this.contactPointPool=s,this.frictionEquationPool=l,this.result=i,this.frictionResult=o;const c=fv,u=pv,d=uv,a=dv;for(let h=0,f=e.length;h!==f;h++){const m=e[h],g=t[h];let _=null;m.material&&g.material&&(_=n.getContactMaterial(m.material,g.material)||null);const p=m.type&me.KINEMATIC&&g.type&me.STATIC||m.type&me.STATIC&&g.type&me.KINEMATIC||m.type&me.KINEMATIC&&g.type&me.KINEMATIC;for(let x=0;x<m.shapes.length;x++){m.quaternion.mult(m.shapeOrientations[x],c),m.quaternion.vmult(m.shapeOffsets[x],d),d.vadd(m.position,d);const v=m.shapes[x];for(let y=0;y<g.shapes.length;y++){g.quaternion.mult(g.shapeOrientations[y],u),g.quaternion.vmult(g.shapeOffsets[y],a),a.vadd(g.position,a);const C=g.shapes[y];if(!(v.collisionFilterMask&C.collisionFilterGroup&&C.collisionFilterMask&v.collisionFilterGroup)||d.distanceTo(a)>v.boundingSphereRadius+C.boundingSphereRadius)continue;let E=null;v.material&&C.material&&(E=n.getContactMaterial(v.material,C.material)||null),this.currentContactMaterial=E||_||n.defaultContactMaterial;const R=v.type|C.type,B=this[R];if(B){let b=!1;v.type<C.type?b=B.call(this,v,C,d,a,c,u,m,g,v,C,p):b=B.call(this,C,v,a,d,u,c,g,m,v,C,p),b&&p&&(n.shapeOverlapKeeper.set(v.id,C.id),n.bodyOverlapKeeper.set(m.id,g.id))}}}}}sphereSphere(e,t,n,i,s,o,l,c,u,d,a){if(a)return n.distanceSquared(i)<(e.radius+t.radius)**2;const h=this.createContactEquation(l,c,e,t,u,d);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(e.radius,h.ri),h.rj.scale(-t.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(l.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(c.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(e,t,n,i,s,o,l,c,u,d,a){const h=this.createContactEquation(l,c,e,t,u,d);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(e.radius,h.ri),n.vsub(i,pr),h.ni.scale(h.ni.dot(pr),_c),pr.vsub(_c,h.rj),-pr.dot(h.ni)<=e.radius){if(a)return!0;const f=h.ri,m=h.rj;f.vadd(n,f),f.vsub(l.position,f),m.vadd(i,m),m.vsub(c.position,m),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(e,t,n,i,s,o,l,c,u,d,a){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,o,l,c,e,t,a)}sphereBox(e,t,n,i,s,o,l,c,u,d,a){const h=this.v3pool,f=kv;n.vsub(i,mr),t.getSideNormals(f,o);const m=e.radius;let g=!1;const _=Gv,p=Vv,x=Wv;let v=null,y=0,C=0,E=0,R=null;for(let I=0,j=f.length;I!==j&&g===!1;I++){const V=Ov;V.copy(f[I]);const G=V.length();V.normalize();const Q=mr.dot(V);if(Q<G+m&&Q>0){const K=Bv,Z=zv;K.copy(f[(I+1)%3]),Z.copy(f[(I+2)%3]);const Y=K.length(),ee=Z.length();K.normalize(),Z.normalize();const he=mr.dot(K),Me=mr.dot(Z);if(he<Y&&he>-Y&&Me<ee&&Me>-ee){const _e=Math.abs(Q-G-m);if((R===null||_e<R)&&(R=_e,C=he,E=Me,v=G,_.copy(V),p.copy(K),x.copy(Z),y++,a))return!0}}}if(y){g=!0;const I=this.createContactEquation(l,c,e,t,u,d);_.scale(-m,I.ri),I.ni.copy(_),I.ni.negate(I.ni),_.scale(v,_),p.scale(C,p),_.vadd(p,_),x.scale(E,x),_.vadd(x,I.rj),I.ri.vadd(n,I.ri),I.ri.vsub(l.position,I.ri),I.rj.vadd(i,I.rj),I.rj.vsub(c.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}let B=h.get();const b=Hv;for(let I=0;I!==2&&!g;I++)for(let j=0;j!==2&&!g;j++)for(let V=0;V!==2&&!g;V++)if(B.set(0,0,0),I?B.vadd(f[0],B):B.vsub(f[0],B),j?B.vadd(f[1],B):B.vsub(f[1],B),V?B.vadd(f[2],B):B.vsub(f[2],B),i.vadd(B,b),b.vsub(n,b),b.lengthSquared()<m*m){if(a)return!0;g=!0;const G=this.createContactEquation(l,c,e,t,u,d);G.ri.copy(b),G.ri.normalize(),G.ni.copy(G.ri),G.ri.scale(m,G.ri),G.rj.copy(B),G.ri.vadd(n,G.ri),G.ri.vsub(l.position,G.ri),G.rj.vadd(i,G.rj),G.rj.vsub(c.position,G.rj),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}h.release(B),B=null;const w=h.get(),F=h.get(),H=h.get(),O=h.get(),P=h.get(),L=f.length;for(let I=0;I!==L&&!g;I++)for(let j=0;j!==L&&!g;j++)if(I%3!==j%3){f[j].cross(f[I],w),w.normalize(),f[I].vadd(f[j],F),H.copy(n),H.vsub(F,H),H.vsub(i,H);const V=H.dot(w);w.scale(V,O);let G=0;for(;G===I%3||G===j%3;)G++;P.copy(n),P.vsub(O,P),P.vsub(F,P),P.vsub(i,P);const Q=Math.abs(V),K=P.length();if(Q<f[G].length()&&K<m){if(a)return!0;g=!0;const Z=this.createContactEquation(l,c,e,t,u,d);F.vadd(O,Z.rj),Z.rj.copy(Z.rj),P.negate(Z.ni),Z.ni.normalize(),Z.ri.copy(Z.rj),Z.ri.vadd(i,Z.ri),Z.ri.vsub(n,Z.ri),Z.ri.normalize(),Z.ri.scale(m,Z.ri),Z.ri.vadd(n,Z.ri),Z.ri.vsub(l.position,Z.ri),Z.rj.vadd(i,Z.rj),Z.rj.vsub(c.position,Z.rj),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult)}}h.release(w,F,H,O,P)}planeBox(e,t,n,i,s,o,l,c,u,d,a){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,o,l,c,e,t,a)}convexConvex(e,t,n,i,s,o,l,c,u,d,a,h,f){const m=rx;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,o,m,h,f)){const g=[],_=ox;e.clipAgainstHull(n,s,t,i,o,m,-100,100,g);let p=0;for(let x=0;x!==g.length;x++){if(a)return!0;const v=this.createContactEquation(l,c,e,t,u,d),y=v.ri,C=v.rj;m.negate(v.ni),g[x].normal.negate(_),_.scale(g[x].depth,_),g[x].point.vadd(_,y),C.copy(g[x].point),y.vsub(n,y),C.vsub(i,C),y.vadd(n,y),y.vsub(l.position,y),C.vadd(i,C),C.vsub(c.position,C),this.result.push(v),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(e,t,n,i,s,o,l,c,u,d,a){const h=this.v3pool;n.vsub(i,qv);const f=t.faceNormals,m=t.faces,g=t.vertices,_=e.radius;let p=!1;for(let x=0;x!==g.length;x++){const v=g[x],y=Zv;o.vmult(v,y),i.vadd(y,y);const C=jv;if(y.vsub(n,C),C.lengthSquared()<_*_){if(a)return!0;p=!0;const E=this.createContactEquation(l,c,e,t,u,d);E.ri.copy(C),E.ri.normalize(),E.ni.copy(E.ri),E.ri.scale(_,E.ri),y.vsub(i,E.rj),E.ri.vadd(n,E.ri),E.ri.vsub(l.position,E.ri),E.rj.vadd(i,E.rj),E.rj.vsub(c.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);return}}for(let x=0,v=m.length;x!==v&&p===!1;x++){const y=f[x],C=m[x],E=$v;o.vmult(y,E);const R=Kv;o.vmult(g[C[0]],R),R.vadd(i,R);const B=Jv;E.scale(-_,B),n.vadd(B,B);const b=Qv;B.vsub(R,b);const w=b.dot(E),F=ex;if(n.vsub(R,F),w<0&&F.dot(E)>0){const H=[];for(let O=0,P=C.length;O!==P;O++){const L=h.get();o.vmult(g[C[O]],L),i.vadd(L,L),H.push(L)}if(Uv(H,E,n)){if(a)return!0;p=!0;const O=this.createContactEquation(l,c,e,t,u,d);E.scale(-_,O.ri),E.negate(O.ni);const P=h.get();E.scale(-w,P);const L=h.get();E.scale(-_,L),n.vsub(i,O.rj),O.rj.vadd(L,O.rj),O.rj.vadd(P,O.rj),O.rj.vadd(i,O.rj),O.rj.vsub(c.position,O.rj),O.ri.vadd(n,O.ri),O.ri.vsub(l.position,O.ri),h.release(P),h.release(L),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult);for(let I=0,j=H.length;I!==j;I++)h.release(H[I]);return}else for(let O=0;O!==C.length;O++){const P=h.get(),L=h.get();o.vmult(g[C[(O+1)%C.length]],P),o.vmult(g[C[(O+2)%C.length]],L),i.vadd(P,P),i.vadd(L,L);const I=Xv;L.vsub(P,I);const j=Yv;I.unit(j);const V=h.get(),G=h.get();n.vsub(P,G);const Q=G.dot(j);j.scale(Q,V),V.vadd(P,V);const K=h.get();if(V.vsub(n,K),Q>0&&Q*Q<I.lengthSquared()&&K.lengthSquared()<_*_){if(a)return!0;const Z=this.createContactEquation(l,c,e,t,u,d);V.vsub(i,Z.rj),V.vsub(n,Z.ni),Z.ni.normalize(),Z.ni.scale(_,Z.ri),Z.rj.vadd(i,Z.rj),Z.rj.vsub(c.position,Z.rj),Z.ri.vadd(n,Z.ri),Z.ri.vsub(l.position,Z.ri),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult);for(let Y=0,ee=H.length;Y!==ee;Y++)h.release(H[Y]);h.release(P),h.release(L),h.release(V),h.release(K),h.release(G);return}h.release(P),h.release(L),h.release(V),h.release(K),h.release(G)}for(let O=0,P=H.length;O!==P;O++)h.release(H[O])}}}planeConvex(e,t,n,i,s,o,l,c,u,d,a){const h=tx,f=nx;f.set(0,0,1),s.vmult(f,f);let m=0;const g=ix;for(let _=0;_!==t.vertices.length;_++)if(h.copy(t.vertices[_]),o.vmult(h,h),i.vadd(h,h),h.vsub(n,g),f.dot(g)<=0){if(a)return!0;const x=this.createContactEquation(l,c,e,t,u,d),v=sx;f.scale(f.dot(g),v),h.vsub(v,v),v.vsub(n,x.ri),x.ni.copy(f),h.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(l.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(c.position,x.rj),this.result.push(x),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(e,t,n,i,s,o,l,c,u,d,a){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,o,l,c,e,t,a)}sphereHeightfield(e,t,n,i,s,o,l,c,u,d,a){const h=t.data,f=e.radius,m=t.elementSize,g=vx,_=gx;Ze.pointToLocalFrame(i,o,n,_);let p=Math.floor((_.x-f)/m)-1,x=Math.ceil((_.x+f)/m)+1,v=Math.floor((_.y-f)/m)-1,y=Math.ceil((_.y+f)/m)+1;if(x<0||y<0||p>h.length||v>h[0].length)return;p<0&&(p=0),x<0&&(x=0),v<0&&(v=0),y<0&&(y=0),p>=h.length&&(p=h.length-1),x>=h.length&&(x=h.length-1),y>=h[0].length&&(y=h[0].length-1),v>=h[0].length&&(v=h[0].length-1);const C=[];t.getRectMinMax(p,v,x,y,C);const E=C[0],R=C[1];if(_.z-f>R||_.z+f<E)return;const B=this.result;for(let b=p;b<x;b++)for(let w=v;w<y;w++){const F=B.length;let H=!1;if(t.getConvexTrianglePillar(b,w,!1),Ze.pointToWorldFrame(i,o,t.pillarOffset,g),n.distanceTo(g)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(H=this.sphereConvex(e,t.pillarConvex,n,g,s,o,l,c,e,t,a)),a&&H||(t.getConvexTrianglePillar(b,w,!0),Ze.pointToWorldFrame(i,o,t.pillarOffset,g),n.distanceTo(g)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(H=this.sphereConvex(e,t.pillarConvex,n,g,s,o,l,c,e,t,a)),a&&H))return!0;if(B.length-F>2)return}}boxHeightfield(e,t,n,i,s,o,l,c,u,d,a){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,o,l,c,e,t,a)}convexHeightfield(e,t,n,i,s,o,l,c,u,d,a){const h=t.data,f=t.elementSize,m=e.boundingSphereRadius,g=mx,_=_x,p=px;Ze.pointToLocalFrame(i,o,n,p);let x=Math.floor((p.x-m)/f)-1,v=Math.ceil((p.x+m)/f)+1,y=Math.floor((p.y-m)/f)-1,C=Math.ceil((p.y+m)/f)+1;if(v<0||C<0||x>h.length||y>h[0].length)return;x<0&&(x=0),v<0&&(v=0),y<0&&(y=0),C<0&&(C=0),x>=h.length&&(x=h.length-1),v>=h.length&&(v=h.length-1),C>=h[0].length&&(C=h[0].length-1),y>=h[0].length&&(y=h[0].length-1);const E=[];t.getRectMinMax(x,y,v,C,E);const R=E[0],B=E[1];if(!(p.z-m>B||p.z+m<R))for(let b=x;b<v;b++)for(let w=y;w<C;w++){let F=!1;if(t.getConvexTrianglePillar(b,w,!1),Ze.pointToWorldFrame(i,o,t.pillarOffset,g),n.distanceTo(g)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(F=this.convexConvex(e,t.pillarConvex,n,g,s,o,l,c,null,null,a,_,null)),a&&F||(t.getConvexTrianglePillar(b,w,!0),Ze.pointToWorldFrame(i,o,t.pillarOffset,g),n.distanceTo(g)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(F=this.convexConvex(e,t.pillarConvex,n,g,s,o,l,c,null,null,a,_,null)),a&&F))return!0}}sphereParticle(e,t,n,i,s,o,l,c,u,d,a){const h=hx;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=e.radius*e.radius){if(a)return!0;const m=this.createContactEquation(c,l,t,e,u,d);h.normalize(),m.rj.copy(h),m.rj.scale(e.radius,m.rj),m.ni.copy(h),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(e,t,n,i,s,o,l,c,u,d,a){const h=ax;h.set(0,0,1),l.quaternion.vmult(h,h);const f=lx;if(i.vsub(l.position,f),h.dot(f)<=0){if(a)return!0;const g=this.createContactEquation(c,l,t,e,u,d);g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0);const _=cx;h.scale(h.dot(i),_),i.vsub(_,_),g.rj.copy(_),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}boxParticle(e,t,n,i,s,o,l,c,u,d,a){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,o,l,c,e,t,a)}convexParticle(e,t,n,i,s,o,l,c,u,d,a){let h=-1;const f=dx,m=fx;let g=null;const _=ux;if(_.copy(i),_.vsub(n,_),s.conjugate(gc),gc.vmult(_,_),e.pointIsInside(_)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let p=0,x=e.faces.length;p!==x;p++){const v=[e.worldVertices[e.faces[p][0]]],y=e.worldFaceNormals[p];i.vsub(v[0],vc);const C=-y.dot(vc);if(g===null||Math.abs(C)<Math.abs(g)){if(a)return!0;g=C,h=p,f.copy(y)}}if(h!==-1){const p=this.createContactEquation(c,l,t,e,u,d);f.scale(g,m),m.vadd(i,m),m.vsub(n,m),p.rj.copy(m),f.negate(p.ni),p.ri.set(0,0,0);const x=p.ri,v=p.rj;x.vadd(i,x),x.vsub(c.position,x),v.vadd(n,v),v.vsub(l.position,v),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,o,l,c,u,d,a){return this.convexHeightfield(t,e,i,n,o,s,c,l,u,d,a)}particleCylinder(e,t,n,i,s,o,l,c,u,d,a){return this.convexParticle(t,e,i,n,o,s,c,l,u,d,a)}sphereTrimesh(e,t,n,i,s,o,l,c,u,d,a){const h=bv,f=Sv,m=wv,g=Ev,_=Tv,p=Av,x=Lv,v=Mv,y=xv,C=Iv;Ze.pointToLocalFrame(i,o,n,_);const E=e.radius;x.lowerBound.set(_.x-E,_.y-E,_.z-E),x.upperBound.set(_.x+E,_.y+E,_.z+E),t.getTrianglesInAABB(x,C);const R=yv,B=e.radius*e.radius;for(let O=0;O<C.length;O++)for(let P=0;P<3;P++)if(t.getVertex(t.indices[C[O]*3+P],R),R.vsub(_,y),y.lengthSquared()<=B){if(v.copy(R),Ze.pointToWorldFrame(i,o,v,R),R.vsub(n,y),a)return!0;let L=this.createContactEquation(l,c,e,t,u,d);L.ni.copy(y),L.ni.normalize(),L.ri.copy(L.ni),L.ri.scale(e.radius,L.ri),L.ri.vadd(n,L.ri),L.ri.vsub(l.position,L.ri),L.rj.copy(R),L.rj.vsub(c.position,L.rj),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)}for(let O=0;O<C.length;O++)for(let P=0;P<3;P++){t.getVertex(t.indices[C[O]*3+P],h),t.getVertex(t.indices[C[O]*3+(P+1)%3],f),f.vsub(h,m),_.vsub(f,p);const L=p.dot(m);_.vsub(h,p);let I=p.dot(m);if(I>0&&L<0&&(_.vsub(h,p),g.copy(m),g.normalize(),I=p.dot(g),g.scale(I,p),p.vadd(h,p),p.distanceTo(_)<e.radius)){if(a)return!0;const V=this.createContactEquation(l,c,e,t,u,d);p.vsub(_,V.ni),V.ni.normalize(),V.ni.scale(e.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(l.position,V.ri),Ze.pointToWorldFrame(i,o,p,p),p.vsub(c.position,V.rj),Ze.vectorToWorldFrame(o,V.ni,V.ni),Ze.vectorToWorldFrame(o,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}const b=Cv,w=Rv,F=Pv,H=vv;for(let O=0,P=C.length;O!==P;O++){t.getTriangleVertices(C[O],b,w,F),t.getNormal(C[O],H),_.vsub(b,p);let L=p.dot(H);if(H.scale(L,p),_.vsub(p,p),L=p.distanceTo(_),pt.pointInTriangle(p,b,w,F)&&L<e.radius){if(a)return!0;let I=this.createContactEquation(l,c,e,t,u,d);p.vsub(_,I.ni),I.ni.normalize(),I.ni.scale(e.radius,I.ri),I.ri.vadd(n,I.ri),I.ri.vsub(l.position,I.ri),Ze.pointToWorldFrame(i,o,p,p),p.vsub(c.position,I.rj),Ze.vectorToWorldFrame(o,I.ni,I.ni),Ze.vectorToWorldFrame(o,I.ri,I.ri),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}}C.length=0}planeTrimesh(e,t,n,i,s,o,l,c,u,d,a){const h=new M,f=mv;f.set(0,0,1),s.vmult(f,f);for(let m=0;m<t.vertices.length/3;m++){t.getVertex(m,h);const g=new M;g.copy(h),Ze.pointToWorldFrame(i,o,g,h);const _=_v;if(h.vsub(n,_),f.dot(_)<=0){if(a)return!0;const x=this.createContactEquation(l,c,e,t,u,d);x.ni.copy(f);const v=gv;f.scale(_.dot(f),v),h.vsub(v,v),x.ri.copy(v),x.ri.vsub(l.position,x.ri),x.rj.copy(h),x.rj.vsub(c.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const ei=new M,Fi=new M,Ui=new M,uv=new M,dv=new M,fv=new dt,pv=new dt,mv=new M,_v=new M,gv=new M,vv=new M,xv=new M;new M;const yv=new M,Mv=new M,bv=new M,Sv=new M,wv=new M,Ev=new M,Tv=new M,Av=new M,Cv=new M,Rv=new M,Pv=new M,Lv=new qt,Iv=[],pr=new M,_c=new M,Dv=new M,Nv=new M,Fv=new M;function Uv(r,e,t){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],l=Dv;r[(s+1)%i].vsub(o,l);const c=Nv;l.cross(e,c);const u=Fv;t.vsub(o,u);const d=c.dot(u);if(n===null||d>0&&n===!0||d<=0&&n===!1){n===null&&(n=d>0);continue}else return!1}return!0}const mr=new M,Ov=new M,Bv=new M,zv=new M,kv=[new M,new M,new M,new M,new M,new M],Hv=new M,Gv=new M,Vv=new M,Wv=new M,qv=new M,Xv=new M,Yv=new M,jv=new M,Zv=new M,$v=new M,Kv=new M,Jv=new M,Qv=new M,ex=new M;new M;new M;const tx=new M,nx=new M,ix=new M,sx=new M,rx=new M,ox=new M,ax=new M,lx=new M,cx=new M,hx=new M,gc=new dt,ux=new M;new M;const dx=new M,vc=new M,fx=new M,px=new M,mx=new M,_x=[0],gx=new M,vx=new M;class xc{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,o=i.length;let l=0;for(let c=0;c<s;c++){let u=!1;const d=n[c];for(;d>i[l];)l++;u=d===i[l],u||yc(e,d)}l=0;for(let c=0;c<o;c++){let u=!1;const d=i[c];for(;d>n[l];)l++;u=n[l]===d,u||yc(t,d)}}}function yc(r,e){r.push((e&4294901760)>>16,e&65535)}const Lo=(r,e)=>r<e?`${r}-${e}`:`${e}-${r}`;class xx{constructor(){this.data={keys:[]}}get(e,t){const n=Lo(e,t);return this.data[n]}set(e,t,n){const i=Lo(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=Lo(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class yx extends Sh{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new T0,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new sv,this.constraints=[],this.narrowphase=new hv(this),this.collisionMatrix=new rc,this.collisionMatrixPrevious=new rc,this.bodyOverlapKeeper=new xc,this.shapeOverlapKeeper=new xc,this.contactmaterials=[],this.contactMaterialTable=new xx,this.defaultMaterial=new Gn("default"),this.defaultContactMaterial=new ui(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof Cr?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=pt.ALL,n.from=e,n.to=t,n.callback=i,Io.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=pt.ANY,n.from=e,n.to=t,n.result=i,Io.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=pt.CLOSEST,n.from=e,n.to=t,n.result=i,Io.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof me&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=_t.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=_t.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(_t.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let l=0;l!==this.bodies.length;l++){const c=this.bodies[l];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=Ex,i=Tx,s=this.bodies.length,o=this.bodies,l=this.solver,c=this.gravity,u=this.doProfiling,d=this.profile,a=me.DYNAMIC;let h=-1/0;const f=this.constraints,m=wx;c.length();const g=c.x,_=c.y,p=c.z;let x=0;for(u&&(h=_t.now()),x=0;x!==s;x++){const O=o[x];if(O.type===a){const P=O.force,L=O.mass;P.x+=L*g,P.y+=L*_,P.z+=L*p}}for(let O=0,P=this.subsystems.length;O!==P;O++)this.subsystems[O].update();u&&(h=_t.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),u&&(d.broadphase=_t.now()-h);let v=f.length;for(x=0;x!==v;x++){const O=f[x];if(!O.collideConnected)for(let P=n.length-1;P>=0;P-=1)(O.bodyA===n[P]&&O.bodyB===i[P]||O.bodyB===n[P]&&O.bodyA===i[P])&&(n.splice(P,1),i.splice(P,1))}this.collisionMatrixTick(),u&&(h=_t.now());const y=Sx,C=t.length;for(x=0;x!==C;x++)y.push(t[x]);t.length=0;const E=this.frictionEquations.length;for(x=0;x!==E;x++)m.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,y,this.frictionEquations,m),u&&(d.narrowphase=_t.now()-h),u&&(h=_t.now()),x=0;x<this.frictionEquations.length;x++)l.addEquation(this.frictionEquations[x]);const R=t.length;for(let O=0;O!==R;O++){const P=t[O],L=P.bi,I=P.bj,j=P.si,V=P.sj;let G;if(L.material&&I.material?G=this.getContactMaterial(L.material,I.material)||this.defaultContactMaterial:G=this.defaultContactMaterial,G.friction,L.material&&I.material&&(L.material.friction>=0&&I.material.friction>=0&&L.material.friction*I.material.friction,L.material.restitution>=0&&I.material.restitution>=0&&(P.restitution=L.material.restitution*I.material.restitution)),l.addEquation(P),L.allowSleep&&L.type===me.DYNAMIC&&L.sleepState===me.SLEEPING&&I.sleepState===me.AWAKE&&I.type!==me.STATIC){const Q=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),K=I.sleepSpeedLimit**2;Q>=K*2&&(L.wakeUpAfterNarrowphase=!0)}if(I.allowSleep&&I.type===me.DYNAMIC&&I.sleepState===me.SLEEPING&&L.sleepState===me.AWAKE&&L.type!==me.STATIC){const Q=L.velocity.lengthSquared()+L.angularVelocity.lengthSquared(),K=L.sleepSpeedLimit**2;Q>=K*2&&(I.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(L,I,!0),this.collisionMatrixPrevious.get(L,I)||(cs.body=I,cs.contact=P,L.dispatchEvent(cs),cs.body=L,I.dispatchEvent(cs)),this.bodyOverlapKeeper.set(L.id,I.id),this.shapeOverlapKeeper.set(j.id,V.id)}for(this.emitContactEvents(),u&&(d.makeContactConstraints=_t.now()-h,h=_t.now()),x=0;x!==s;x++){const O=o[x];O.wakeUpAfterNarrowphase&&(O.wakeUp(),O.wakeUpAfterNarrowphase=!1)}for(v=f.length,x=0;x!==v;x++){const O=f[x];O.update();for(let P=0,L=O.equations.length;P!==L;P++){const I=O.equations[P];l.addEquation(I)}}l.solve(e,this),u&&(d.solve=_t.now()-h),l.removeAllEquations();const B=Math.pow;for(x=0;x!==s;x++){const O=o[x];if(O.type&a){const P=B(1-O.linearDamping,e),L=O.velocity;L.scale(P,L);const I=O.angularVelocity;if(I){const j=B(1-O.angularDamping,e);I.scale(j,I)}}}this.dispatchEvent(bx),u&&(h=_t.now());const w=this.stepnumber%(this.quatNormalizeSkip+1)===0,F=this.quatNormalizeFast;for(x=0;x!==s;x++)o[x].integrate(e,w,F);this.clearForces(),this.broadphase.dirty=!0,u&&(d.integrate=_t.now()-h),this.stepnumber+=1,this.dispatchEvent(Mx);let H=!0;if(this.allowSleep)for(H=!1,x=0;x!==s;x++){const O=o[x];O.sleepTick(this.time),O.sleepState!==me.SLEEPING&&(H=!0)}this.hasActiveBodies=H}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(bn,Sn),e){for(let s=0,o=bn.length;s<o;s+=2)hs.bodyA=this.getBodyById(bn[s]),hs.bodyB=this.getBodyById(bn[s+1]),this.dispatchEvent(hs);hs.bodyA=hs.bodyB=null}if(t){for(let s=0,o=Sn.length;s<o;s+=2)us.bodyA=this.getBodyById(Sn[s]),us.bodyB=this.getBodyById(Sn[s+1]),this.dispatchEvent(us);us.bodyA=us.bodyB=null}bn.length=Sn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(bn,Sn),n){for(let s=0,o=bn.length;s<o;s+=2){const l=this.getShapeById(bn[s]),c=this.getShapeById(bn[s+1]);wn.shapeA=l,wn.shapeB=c,l&&(wn.bodyA=l.body),c&&(wn.bodyB=c.body),this.dispatchEvent(wn)}wn.bodyA=wn.bodyB=wn.shapeA=wn.shapeB=null}if(i){for(let s=0,o=Sn.length;s<o;s+=2){const l=this.getShapeById(Sn[s]),c=this.getShapeById(Sn[s+1]);En.shapeA=l,En.shapeB=c,l&&(En.bodyA=l.body),c&&(En.bodyB=c.body),this.dispatchEvent(En)}En.bodyA=En.bodyB=En.shapeA=En.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new qt;const Io=new pt,_t=globalThis.performance||{};if(!_t.now){let r=Date.now();_t.timing&&_t.timing.navigationStart&&(r=_t.timing.navigationStart),_t.now=()=>Date.now()-r}new M;const Mx={type:"postStep"},bx={type:"preStep"},cs={type:me.COLLIDE_EVENT_NAME,body:null,contact:null},Sx=[],wx=[],Ex=[],Tx=[],bn=[],Sn=[],hs={type:"beginContact",bodyA:null,bodyB:null},us={type:"endContact",bodyA:null,bodyB:null},wn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},En={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class Ax{constructor(){this._world=new yx({gravity:new M(0,-22,0)}),this._world.broadphase=new Hi(this._world),this._world.allowSleep=!1,this._world.solver.iterations=20,this.ballMaterial=new Gn("ball"),this.softSlabMaterial=new Gn("softSlab"),this.hardSlabMaterial=new Gn("hardSlab"),this.poleMaterial=new Gn("pole"),this._world.poleMaterial=this.poleMaterial;const e=new ui(this.ballMaterial,this.softSlabMaterial,{friction:0,restitution:0});this._world.addContactMaterial(e);const t=new ui(this.ballMaterial,this.hardSlabMaterial,{friction:0,restitution:0});this._world.addContactMaterial(t),this._world.addContactMaterial(new ui(this.ballMaterial,this.poleMaterial,{friction:0,restitution:0}))}step(e){this._world.step(1/120,e,8)}createBallBody(e,t){const n=new me({mass:1,shape:new Po(e),material:this.ballMaterial});return n.position.set(t.x,t.y,t.z),n.linearDamping=0,n.angularDamping=1,n.allowSleep=!1,this._world.addBody(n),n}createSlabBody(e,t,n,i,s){const o=new me({mass:0,shape:new Ls(new M(e,t,n))});return o.position.set(i.x,i.y,i.z),s&&o.quaternion.set(s.x,s.y,s.z,s.w),this._world.addBody(o),o}createPoleBody(e,t){const n=t*.5,i=new me({mass:0,material:this.poleMaterial}),s=new nv(e,e,t,16),o=new dt;return o.setFromEuler(0,0,Math.PI/2),i.addShape(s,new M(0,0,0),o),i.addShape(new Po(e),new M(0,n,0)),i.addShape(new Po(e),new M(0,-n,0)),this._world.addBody(i),i}removeBody(e){e&&this._world.removeBody(e)}get world(){return this._world}}class Cx{constructor(e){this.canvas=e,this.isPointerDown=!1,this.isDragging=!1,this.activePointerId=null,this.lastX=0,this._deltaX=0,this.sensitivity=.0055,this.inertia=0,this.inertiaDamping=.88,this._indicatorHideTimer=null,this.rotationIndicator=document.createElement("div"),this.rotationIndicator.style.cssText=`
			position:fixed;
			left:50%;
			top:72%;
			transform:translate(-50%,-50%) scale(0.9);
			width:64px;
			height:64px;
			border:2px solid rgba(255,107,157,0.85);
			border-radius:50%;
			display:flex;
			align-items:center;
			justify-content:center;
			color:rgba(196,69,105,0.95);
			background:rgba(255,255,255,0.55);
			backdrop-filter:blur(8px);
			-webkit-backdrop-filter:blur(8px);
			font-size:28px;
			font-weight:900;
			opacity:0;
			pointer-events:none;
			z-index:40;
			box-shadow:0 6px 20px rgba(255,107,157,0.18);
			transition:opacity 0.15s ease, transform 0.15s ease;
		`,this.rotationIndicator.textContent="↻",document.body.appendChild(this.rotationIndicator),this._onPointerDown=this._onPointerDown.bind(this),this._onPointerMove=this._onPointerMove.bind(this),this._onPointerUp=this._onPointerUp.bind(this),this._onPointerCancel=this._onPointerCancel.bind(this),this._onKeyDown=this._onKeyDown.bind(this),this._onWindowBlur=this._onWindowBlur.bind(this),window.addEventListener("pointerdown",this._onPointerDown,{passive:!0}),window.addEventListener("pointermove",this._onPointerMove,{passive:!0}),window.addEventListener("pointerup",this._onPointerUp),window.addEventListener("pointercancel",this._onPointerCancel),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("blur",this._onWindowBlur)}_onPointerDown(e){e.pointerType==="mouse"&&e.button!==0||this._isFromCanvasEvent(e)&&(this.activePointerId=e.pointerId??null,this.isPointerDown=!0,this.isDragging=!0,this.lastX=e.clientX,this.inertia=0)}_onPointerMove(e){if(this.activePointerId!==null&&e.pointerId!==this.activePointerId)return;if(e.pointerType==="mouse"&&this.isDragging&&!(e.buttons&1)){this._clearPointerState();return}if(!this.isDragging)return;const t=(e.clientX-this.lastX)*this.sensitivity;this._deltaX=t,this.inertia=t,this.lastX=e.clientX,Math.abs(t)>1e-4&&this._showRotationIndicator(t>0?1:-1)}_onPointerUp(e){e.pointerType==="mouse"&&e.button!==0||this.activePointerId!==null&&e.pointerId!==this.activePointerId||this._clearPointerState()}_onPointerCancel(){this._clearPointerState()}_onKeyDown(e){e.key==="ArrowLeft"&&(this.inertia=-.022,this._showRotationIndicator(-1)),e.key==="ArrowRight"&&(this.inertia=.022,this._showRotationIndicator(1))}_onWindowBlur(){this._clearPointerState()}_isFromCanvasEvent(e){if(!this.canvas||!e)return!0;const t=typeof e.clientX=="number"?e.clientX:null,n=typeof e.clientY=="number"?e.clientY:null;if(typeof t=="number"&&typeof n=="number"){const i=this.canvas.getBoundingClientRect();return t>=i.left&&t<=i.right&&n>=i.top&&n<=i.bottom}return!0}_clearPointerState(){this.isPointerDown=!1,this.isDragging=!1,this.activePointerId=null,this._deltaX=0}cancelPress(){this._clearPointerState()}_showRotationIndicator(e){this.rotationIndicator&&(this.rotationIndicator.textContent=e>0?"↻":"↺",this.rotationIndicator.style.opacity="1",this.rotationIndicator.style.transform="translate(-50%,-50%) scale(1)",this._indicatorHideTimer&&clearTimeout(this._indicatorHideTimer),this._indicatorHideTimer=setTimeout(()=>{this.rotationIndicator.style.opacity="0",this.rotationIndicator.style.transform="translate(-50%,-50%) scale(0.9)"},180))}update(){this.isDragging||(this.inertia*=this.inertiaDamping),Math.abs(this.inertia)<1e-4&&(this.inertia=0),this._deltaX=this.isDragging?this._deltaX:this.inertia}get rotation(){return this._deltaX}get isPressing(){return this.isPointerDown}}const Rx="modulepreload",Px=function(r,e){return new URL(r,e).href},Mc={},_r=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=Promise.allSettled(t.map(u=>{if(u=Px(u,n),u in Mc)return;Mc[u]=!0;const d=u.endsWith(".css"),a=d?'[rel="stylesheet"]':"";if(!!n)for(let m=o.length-1;m>=0;m--){const g=o[m];if(g.href===u&&(!d||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${a}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":Rx,d||(f.as="script"),f.crossOrigin="",f.href=u,c&&f.setAttribute("nonce",c),document.head.appendChild(f),d)return new Promise((m,g)=>{f.addEventListener("load",m),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})},ti=.4,Tn=.55,Lx=2,Do=7.5,Ix=11,Oi=180,bc=220,Dx=200;class Nx{constructor(e,t,n=1){this.scene=e,this._scene=e,this.physics=t,this._visualZOffset=.85,this._baseScale=1;const i=new Cs(ti,32,24),s=new Fg({color:1989592,roughness:.42,metalness:0,emissive:729216,emissiveIntensity:.06,envMapIntensity:.22,clearcoat:.85,clearcoatRoughness:.08});this.mesh=new Ye(i,s),this.mesh.castShadow=!0,this.mesh.receiveShadow=!1,this.mesh.position.set(0,Tn,this._visualZOffset),this.mesh.scale.setScalar(this._baseScale),this._visualY=Tn,this._smoothedVelY=0,this._baseSpriteColor=new Te(1989592),this._landingTintColor=this._baseSpriteColor.clone(),this._landingTintTimer=0,e.add(this.mesh);const o=this._createShadowTexture(),l=new Ur(ti*2.4,ti*2.4),c=new di({map:o,color:1053720,transparent:!0,opacity:.32,depthWrite:!1,depthTest:!0});this._shadow=new Ye(l,c),this._shadow.rotation.x=-Math.PI/2,this._shadow.renderOrder=998,e.add(this._shadow),this.body=this.physics.createBallBody(ti,{x:0,y:Tn,z:0}),this._particles=null,this.isAlive=!0,this._dieAnimId=null,this._lastVelY=0,this._preImpactVelY=0,this._lastContactY=Tn,this._fallHeight=0,this._state="idle",this._stateTimer=0,this._squashTimer=0,this._fallSpeed=0,this._BALL_RADIUS=ti,this._lastTrail=0,this._hardContactLockUntil=0,this._lastBounceAt=0,this._lastLandingType="",this._lastLandingHintAt=0,this._lastContactResolveAt=0,this._idlePhase=Math.random()*Math.PI*2,this._isBreakInputActive=()=>!1,this._recentHits=new Map,this._stuckLow=!1,this._onCollide=u=>{var _,p,x;const d=performance.now(),a=u.body,h=a.userData;if(!h||!h.type||h.type!=="soft_slab"&&h.type!=="hard_slab")return;let f=0;try{f=((p=(_=u.contact)==null?void 0:_.getImpactVelocityAlongNormal)==null?void 0:p.call(_))??0}catch{f=this._lastVelY||0}this._preImpactVelY=f<0?f:this._lastVelY||0;const m=h.type==="hard_slab";if(this._emitLandingHint(m?"hard":"soft"),m&&this._scene&&this._particles){const v=new N(0,this.body.position.y,this._visualZOffset);this._particles.burst(v,new Te(16726072),12)}const g=h.slab?`slab:${h.slab.uid}`:null;if(!(this._isRecent(`body:${a.id}`)||g&&this._isRecent(g)))if(this._lastContactY=this.body.position.y,this._fallHeight=0,h.type==="soft_slab"){const v=this.body.velocity.y<=1,y=!!((x=this._isBreakInputActive)!=null&&x.call(this));v&&y?(this._markRecent(`body:${a.id}`,Oi),g&&this._markRecent(g,Oi),this._pendingBounce=!1,this._pendingBounceSpeed=0,this._squashTimer=.08,_r(()=>Promise.resolve().then(()=>vr),void 0,import.meta.url).then(C=>{var E;(E=C.GameManager.instance)==null||E.onSoftHit(h)})):(this._markRecent(`body:${a.id}`,Oi),this._queueBounce(this._computeBounceSpeed(this.body.position.y,this._preImpactVelY,!1)),this._squashTimer=.1)}else h.type==="hard_slab"&&(this._markRecent(`body:${a.id}`,Oi),g&&this._markRecent(g,Oi),this._hardContactLockUntil=d+bc,this._queueBounce(this._computeBounceSpeed(this.body.position.y,this._preImpactVelY,!0)),this._squashTimer=.12,_r(()=>Promise.resolve().then(()=>vr),void 0,import.meta.url).then(v=>{var y;(y=v.GameManager.instance)==null||y.onHardHit(h)}))},this.body.addEventListener("collide",this._onCollide),this._pendingBounce=!1,this._pendingBounceSpeed=0,this._postStepHandler&&this.physics.world.removeEventListener("postStep",this._postStepHandler),this._postStepHandler=()=>{this.body.position.x=0,this.body.position.z=0,this.body.velocity.x=0,this.body.velocity.z=0,this.body.angularVelocity.set(0,0,0),this._pendingBounce&&(this.body.velocity.y=this._pendingBounceSpeed,this.body.position.y+=.022,this._pendingBounce=!1,this._lastBounceAt=performance.now()),this.body.position.y>4&&(this.body.position.y=4,this.body.velocity.y>0&&(this.body.velocity.y=0))},this.physics.world.addEventListener("postStep",this._postStepHandler)}_createBallSpriteTexture(){const t=document.createElement("canvas");t.width=256,t.height=256;const n=t.getContext("2d"),i=256*.5,s=256*.5,o=256*.45;n.clearRect(0,0,256,256);const l=n.createRadialGradient(i-o*.28,s-o*.25,o*.12,i,s,o);l.addColorStop(0,"#FFFFFF"),l.addColorStop(.55,"#FF8DB3"),l.addColorStop(1,"#C44569"),n.fillStyle=l,n.beginPath(),n.arc(i,s,o,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(255,224,236,0.28)",n.lineWidth=o*.1,n.beginPath(),n.arc(i,s,o*.92,Math.PI*.1,Math.PI*.95),n.stroke(),n.fillStyle="rgba(255,255,255,0.55)",n.beginPath(),n.ellipse(i-o*.28,s-o*.22,o*.2,o*.17,-.35,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.95)",n.beginPath(),n.ellipse(i-o*.03,s-o*.35,o*.16,o*.11,0,0,Math.PI*2),n.fill();const c=new ws(t);return c.needsUpdate=!0,c.minFilter=wt,c.magFilter=wt,c}_createShadowTexture(){const t=document.createElement("canvas");t.width=128,t.height=128;const n=t.getContext("2d"),i=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);i.addColorStop(0,"rgba(0,0,0,0.85)"),i.addColorStop(.55,"rgba(0,0,0,0.35)"),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,128,128);const s=new ws(t);return s.minFilter=wt,s.magFilter=wt,s}_applyScale(e,t){this.mesh.scale.set(this._baseScale*e,this._baseScale*t,this._baseScale*e)}_emitLandingHint(e){const t=performance.now();e===this._lastLandingType&&t-this._lastLandingHintAt<140||(this._lastLandingType=e,this._lastLandingHintAt=t,_r(()=>Promise.resolve().then(()=>vr),void 0,import.meta.url).then(n=>{var i,s;(s=(i=n.GameManager.instance)==null?void 0:i.notifyLandingType)==null||s.call(i,e)}),this._landingTintColor.setHex(e==="soft"?4063101:16726072),this._landingTintTimer=.45)}_computeBounceSpeed(e,t,n){var f,m,g;const i=Math.abs(((g=(m=(f=this.physics)==null?void 0:f.world)==null?void 0:m.gravity)==null?void 0:g.y)??22),s=Math.max(.6,3.4-e),o=Math.min(Lx,s),l=Math.sqrt(2*i*o),c=Math.max(0,-Math.min(0,t||0)),d=(n?Rt.lerp(.78,.55,Rt.clamp(c/14,0,1)):Rt.lerp(.52,.42,Rt.clamp(c/14,0,1)))*c,a=n?Do*.7:Do*.45,h=Math.min(l,Math.max(d,a));return Rt.clamp(h,Do*.42,Ix)}_queueBounce(e){const t=performance.now();if(t-this._lastBounceAt<90){this._pendingBounce=!0,this._pendingBounceSpeed=Math.max(this._pendingBounceSpeed*.92,e*.9);return}this._pendingBounce=!0,this._pendingBounceSpeed=e,this._lastBounceAt=t}_isRecent(e){const t=performance.now(),n=this._recentHits.get(e);return n?n<=t?(this._recentHits.delete(e),!1):!0:!1}_markRecent(e,t=Oi){this._recentHits.set(e,performance.now()+t)}_getActiveSlabContacts(){var n,i,s,o,l;const e=(s=(i=(n=this.physics)==null?void 0:n.world)==null?void 0:i.narrowphase)==null?void 0:s.contactEquations,t={hasSoft:!1,hasHard:!1,softUserData:null,hardUserData:null};if(!e||e.length===0)return t;for(const c of e){const u=c.bi,d=c.bj;if(u!==this.body&&d!==this.body)continue;const a=u===this.body?d:u;((o=a==null?void 0:a.userData)==null?void 0:o.type)==="soft_slab"&&(t.hasSoft=!0,t.softUserData||(t.softUserData=a.userData)),((l=a==null?void 0:a.userData)==null?void 0:l.type)==="hard_slab"&&(t.hasHard=!0,t.hardUserData||(t.hardUserData=a.userData))}return t}setBreakInputSource(e){this._isBreakInputActive=typeof e=="function"?e:()=>!1}_canBreakSoftSlab(e=!1){var n;return!!((n=this._isBreakInputActive)!=null&&n.call(this))&&!e?!0:(performance.now()<this._hardContactLockUntil,!1)}_resolveStuckContact(){const e=performance.now();if(e-this._lastContactResolveAt<130||e-this._lastBounceAt<Dx)return;const t=this._getActiveSlabContacts();if(!t.hasSoft&&!t.hasHard){this._stuckLow=!1;return}const n=Math.abs(this.body.velocity.y);if(!this._stuckLow&&n<.14&&(this._stuckLow=!0),this._stuckLow&&n>.32&&(this._stuckLow=!1),!this._stuckLow)return;if(t.hasHard&&(this._hardContactLockUntil=Math.max(this._hardContactLockUntil,e+bc)),t.hasSoft&&this._canBreakSoftSlab(t.hasHard)){this._pendingBounce=!1,this._pendingBounceSpeed=0,this._squashTimer=.08,this._lastContactResolveAt=e,_r(()=>Promise.resolve().then(()=>vr),void 0,import.meta.url).then(s=>{var o;(o=s.GameManager.instance)==null||o.onSoftHit(t.softUserData)});return}this._queueBounce(this._computeBounceSpeed(this.body.position.y,-2.5,!0)),this._lastContactResolveAt=e}update(e){this.body.position.x=0,this.body.position.z=0,this.body.velocity.x=0,this.body.velocity.z=0,this.body.angularVelocity.set(0,0,0),this.mesh.position.x=0,this.mesh.position.z=this._visualZOffset,this._resolveStuckContact();const t=Rt.clamp(e*14,0,1);this._visualY=Rt.lerp(this._visualY,this.body.position.y,t),this.mesh.position.y=this._visualY,this._fallHeight=Math.max(0,this._lastContactY-this.body.position.y),this._shadow.position.set(0,this.body.position.y-ti-.04,this._visualZOffset);const n=Rt.clamp((this._fallHeight||0)/4,0,1),i=Rt.lerp(1,.55,n),s=Rt.lerp(.42,.1,n);if(this._shadow.scale.setScalar(i),this._shadow.material.opacity=s,this._updateAnimation(e),this._landingTintTimer>0){this._landingTintTimer-=e;const o=Math.max(0,this._landingTintTimer/.45);this.mesh.material.color.copy(this._baseSpriteColor).lerp(this._landingTintColor,o*.95)}else this.mesh.material.color.copy(this._baseSpriteColor);this._lastVelY=this.body.velocity.y,this._smoothedVelY=Rt.lerp(this._smoothedVelY,this.body.velocity.y,.22)}_updateAnimation(e){this._stateTimer+=e;const t=this._smoothedVelY;if(this.mesh.rotation.y+=e*(.95+Math.min(8,Math.abs(t))*.08),this._squashTimer>0){this._squashTimer-=e;const n=1-this._squashTimer/.12,i=Math.sin(Math.max(0,Math.min(1,n))*Math.PI),s=1+.18*i,o=1-.15*i;this._applyScale(s,o),this.mesh.position.y=this._visualY,this._state="squash";return}this._applyScale(1,1),this.mesh.position.y=this._visualY,this._state="idle"}_spawnTrailParticle(){const e=performance.now();if(e-(this._lastTrail||0)<90)return;this._lastTrail=e;const t=.05+Math.random()*.06,n=new Cs(t,6,6),i=[16777215,11981055,7314687,3832063],s=i[Math.floor(Math.random()*i.length)],o=new di({color:s,transparent:!0,opacity:.55,depthWrite:!1,blending:Vn}),l=new Ye(n,o),c=this._BALL_RADIUS+.1+Math.random()*.3;l.position.set(this.mesh.position.x+(Math.random()-.5)*.15,this.mesh.position.y+c,this.mesh.position.z+(Math.random()-.5)*.15),this._scene.add(l);const u=e,d=140+Math.random()*80,a=l.position.y,h=()=>{const f=performance.now()-u;if(f>=d){this._scene.remove(l),n.dispose(),o.dispose();return}const m=f/d;l.position.y=a+m*.4,l.material.opacity=.55*(1-m),l.scale.setScalar(1-m*.5),requestAnimationFrame(h)};requestAnimationFrame(h)}die(){if(!this.isAlive)return;this.isAlive=!1,this.body.velocity.set(0,0,0),this.body.angularVelocity.set(0,0,0),this.body.type=me.STATIC,this.body.updateMassProperties();const e=250,t=performance.now();this._dieAnimId&&cancelAnimationFrame(this._dieAnimId);const n=i=>{const s=Math.min(1,(i-t)/e),o=Math.max(0,1-s);this._applyScale(o,o),s<1?this._dieAnimId=requestAnimationFrame(n):this._dieAnimId=null};this._dieAnimId=requestAnimationFrame(n)}reset(e){this.body.position.set(0,Tn,0),this.body.velocity.set(0,0,0),this.body.angularVelocity.set(0,0,0),this.body.type=me.DYNAMIC,this.body.updateMassProperties(),this.body.wakeUp(),this._dieAnimId&&(cancelAnimationFrame(this._dieAnimId),this._dieAnimId=null),this.mesh.position.set(0,Tn,this._visualZOffset),this.mesh.rotation.set(0,0,0),this._applyScale(1,1),this._shadow.position.set(0,Tn-ti-.04,this._visualZOffset),this._shadow.scale.setScalar(1),this._shadow.material.opacity=.32,this.isAlive=!0,this._state="idle",this._stateTimer=0,this._squashTimer=0,this._fallSpeed=0,this._fallHeight=0,this._lastContactY=Tn,this._visualY=Tn,this._smoothedVelY=0,this._lastVelY=0,this._preImpactVelY=0,this._pendingBounce=!1,this._pendingBounceSpeed=0,this._hardContactLockUntil=0,this._lastBounceAt=0,this._lastLandingType="",this._lastLandingHintAt=0,this._lastContactResolveAt=0,this._idlePhase=Math.random()*Math.PI*2,this._landingTintTimer=0,this._stuckLow=!1,this._recentHits.clear(),this.mesh.material.color.copy(this._baseSpriteColor)}dispose(e,t){var n,i;this._dieAnimId&&(cancelAnimationFrame(this._dieAnimId),this._dieAnimId=null),this.body.removeEventListener("collide",this._onCollide),e.remove(this.mesh),e.remove(this._shadow),t&&this.body&&t.removeBody(this.body),this._postStepHandler&&((n=t==null?void 0:t.removeEventListener)==null||n.call(t,"postStep",this._postStepHandler)),(i=this.mesh.geometry)!=null&&i.dispose&&this.mesh.geometry.dispose(),this.mesh.material.map&&this.mesh.material.map.dispose(),this.mesh.material.dispose(),this._shadow.geometry.dispose(),this._shadow.material.map&&this._shadow.material.map.dispose(),this._shadow.material.dispose()}}const Sc=[{primary:16765440,secondary:16758784,sky:3809135,ground:13982266},{primary:16735324,secondary:16726072,sky:16765567,ground:16771529},{primary:5227511,secondary:2733814,sky:16757145,ground:16769234},{primary:6732650,secondary:5025616,sky:12887295,ground:15721471},{primary:16747109,secondary:16740419,sky:10479103,ground:14217983},{primary:12216520,secondary:11225020,sky:16769154,ground:16773570},{primary:2541274,secondary:48340,sky:16758457,ground:16767450},{primary:15483002,secondary:14162784,sky:12050943,ground:14479359},{primary:16762930,secondary:16757504,sky:10485714,ground:13500395},{primary:5099745,secondary:2541274,sky:16754376,ground:16764896}];function Fx(r){const e=Math.max(0,Math.min(Sc.length-1,(r|0)-1));return Sc[e]}const Ih=657930,Ux=5,No=.18,ds=1.7;function Fo(r,e,t){return new te(Rt.lerp(r.x,e.x,t),Rt.lerp(r.y,e.y,t))}const Ox=4;function Bx(r,e,t,n,i,s){const o=new _h;o.moveTo(n*Math.cos(r),n*Math.sin(r)),o.absarc(0,0,n,r,e,!1),o.lineTo(t*Math.cos(e),t*Math.sin(e)),o.absarc(0,0,t,e,r,!0),o.lineTo(n*Math.cos(r),n*Math.sin(r));const l=new da(o,{depth:i,bevelEnabled:!1,curveSegments:Ox,steps:1});l.rotateX(-Math.PI/2),l.translate(0,i*.5,0),l.computeVertexNormals();const c=s===Ih,u=new Te(s),d=new fn({color:s,roughness:c?.55:.5,metalness:c?0:.02,emissive:c?0:u.clone().multiplyScalar(.06),emissiveIntensity:c?0:.05,envMapIntensity:.45,flatShading:!1});return new Ye(l,d)}function zx(r,e,t){const n=new Array(r).fill(!0),i=((e|0)%r+r)%r,s=Math.max(1,Math.min(r-2,t|0));for(let o=0;o<s;o++)n[(i+o)%r]=!1;return n}let kx=0;class Hx{constructor(e,t,n,i,s,o,l){this.scene=e,this.world=t,this.physics=n,this.yPosition=i,this.towerGroup=l,this.uid=++kx,this.isBroken=!1,this.debris=[],this.pieces=[];const c=o==null?void 0:o.levelTheme;this.softPrimary=(c==null?void 0:c.primary)??16767293,this.softSecondary=(c==null?void 0:c.secondary)??16761095,this.softColor=this.softPrimary;const u=Math.max(3,(o==null?void 0:o.spotsPerSide)??4),d=Math.max(.05,(o==null?void 0:o.poleRadius)??.22),a=Math.max(.08,(o==null?void 0:o.poleGap)??.18),h=Math.max(.3,d+a),f=Ux*u,m=((o==null?void 0:o.dangerStart)??0)|0,g=Math.max(2,Math.min(f-4,((o==null?void 0:o.dangerWidth)??6)|0)),_=zx(f,m,g),p=(o==null?void 0:o.levelRotationOffset)??0,x=Math.PI*2/f,v=p-Math.PI/2;for(let y=0;y<f;y++){const C=v+y*x,E=C+x,R=_[y],B=s+y&1?this.softSecondary:this.softPrimary,b=R?B:Ih,w=R?this.physics.softSlabMaterial:this.physics.hardSlabMaterial,F=Bx(C,E,h,ds,No,b);F.castShadow=!0,F.receiveShadow=!0,F.position.y=i,this.towerGroup.add(F);const H=new te(Math.cos(C)*ds,Math.sin(C)*ds),O=new te(Math.cos(E)*ds,Math.sin(E)*ds),P=new te(Math.cos(C)*h,Math.sin(C)*h),L=new te(Math.cos(E)*h,Math.sin(E)*h),I=this._buildSpotBody(H,O,P,L,w);I.userData={type:R?"soft_slab":"hard_slab",slab:this,yPosition:i,spotIndex:y};const j=C+x*.5;this.world.addBody(I),this.pieces.push({mesh:F,body:I,color:b,spotLocalAngle:j})}}updateActiveSpot(e){if(this.isBroken)return;const t=Math.PI*2,n=Math.PI/2;let i=0,s=1/0;const o=new Array(this.pieces.length);for(let c=0;c<this.pieces.length;c++){const d=((this.pieces[c].spotLocalAngle-e)%t+t)%t;let a=Math.abs(d-n);a>Math.PI&&(a=t-a),o[c]=a,a<s&&(s=a,i=c)}const l=this._lastActiveIdx;l!==void 0&&l!==i&&o[l]!==void 0&&o[l]-s<.015&&(i=l),this._lastActiveIdx=i;for(let c=0;c<this.pieces.length;c++){const u=this.pieces[c];u.body&&(u.body.collisionFilterMask=c===i?-1:0)}}_buildSpotBody(e,t,n,i,s){const o=Fo(e,t,.5),l=Fo(n,i,.5),c=Fo(o,l,.5),u=t.clone().sub(e),d=u.length();u.normalize();const a=o.distanceTo(l),h=new me({mass:0,material:s}),f=Math.max(.05,d*.43),m=No*.5,g=Math.max(.05,a*.44),_=new Ls(new M(f,m,g));h.addShape(_),h.position.set(c.x,this.yPosition,c.y);const p=Math.atan2(u.y,u.x);return h.quaternion.setFromAxisAngle(new M(0,1,0),p),h}syncBodiesToTower(){if(this.isBroken)return;this._tmpVec3||(this._tmpVec3=new N,this._tmpQuat=new $i);const e=this._tmpVec3,t=this._tmpQuat;for(const n of this.pieces)!n.body||!n.mesh||(n.mesh.getWorldPosition(e),n.mesh.getWorldQuaternion(t),n.body.position.set(e.x,e.y,e.z),n.body.quaternion.set(t.x,t.y,t.z,t.w),n.body.aabbNeedsUpdate=!0)}breakWholeSlab(e){if(!this.isBroken){this.isBroken=!0;for(const t of this.pieces)t.body&&(this.world.removeBody(t.body),t.body=null);for(const t of this.pieces){if(!t.mesh)continue;const n=new N;if(t.mesh.getWorldPosition(n),Math.random()<.9){const i=new Yn(.36+Math.random()*.24,No,.22+Math.random()*.18),s=new Ug({color:t.color,flatShading:!0}),o=new Ye(i,s);o.position.copy(n),o.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),this.scene.add(o);const l=Math.atan2(n.z,n.x)+(Math.random()-.5)*.4,c=4+Math.random()*4;this.debris.push({mesh:o,vx:Math.cos(l)*c,vy:1.6+Math.random()*2.8,vz:Math.sin(l)*c,rotX:(Math.random()-.5)*10,rotZ:(Math.random()-.5)*10,life:.8+Math.random()*.5})}this.towerGroup.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),t.mesh=null}if(e){const t=new N(0,this.yPosition,0);e.burst(t,new Te(this.softColor),8)}}}animateDebris(e){for(let t=this.debris.length-1;t>=0;t--){const n=this.debris[t];n.mesh.position.x+=n.vx*e,n.mesh.position.y+=n.vy*e,n.mesh.position.z+=n.vz*e,n.vy-=20*e,n.mesh.rotation.x+=n.rotX*e,n.mesh.rotation.z+=n.rotZ*e,n.life-=e,n.life<.3&&(n.mesh.material.opacity=n.life/.3,n.mesh.material.transparent=!0),n.life<=0&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.debris.splice(t,1))}}dispose(){for(const e of this.pieces)e.body&&this.world.removeBody(e.body),e.mesh&&(this.towerGroup.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose());this.pieces=[];for(const e of this.debris)this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose();this.debris=[]}}const Gx=.22;function Vx(r){const e=Math.max(1,Math.min(r,10)),t=Math.min(11,5+Math.floor(e*.6)),n=Math.min(3,1+Math.floor((e-1)*.3));return{slabCount:40+e*3,rotationSpeed:.06+e*.015,spotsPerSide:4,dangerWidth:t,spiralShift:n,poleRadius:.28,poleGap:.02,levelTheme:Fx(e)}}class Wx{constructor(e,t,n){this.scene=e,this.world=t,this.physics=n,this.towerGroup=new Hn,e.add(this.towerGroup),this.slabs=[],this.slabsBroken=0,this.totalSlabs=0,this.autoRotationSpeed=0,this.particleSystem=null}buildLevel(e){var d;for(const a of this.slabs)a.dispose();this.slabs=[],this.slabsBroken=0,this.totalSlabs=e.slabCount,this.autoRotationSpeed=(Math.random()<.5?-1:1)*(e.rotationSpeed??.15);const t=(e.spotsPerSide??4)*5,n=Math.max(2,Math.min(t-4,(e.dangerWidth??6)|0)),i=Math.max(0,(e.spiralShift??1)|0),s=Math.floor(Math.random()*t),o=Math.random()<.5?1:-1;for(let a=0;a<e.slabCount;a++){const h=-(a*Gx),f=(a*7+3)%5-2,m=((s+o*a*i+f)%t+t)%t,g={...e,levelRotationOffset:0,dangerStart:m},_=new Hx(this.scene,this.world,this.physics,h,a,g,this.towerGroup);this.slabs.push(_)}this.currentTheme=e.levelTheme;const l=s+(n-1)/2,c=2*Math.PI/t,u=-Math.PI/2+(l+.5)*c;this.towerGroup.rotation.y=u+Math.PI/2,this.towerGroup.updateMatrixWorld(!0);for(const a of this.slabs)a.syncBodiesToTower(),(d=a.updateActiveSpot)==null||d.call(a,this.towerGroup.rotation.y)}update(e,t,n=0){var u;const i=this.breakInputActive?0:this.autoRotationSpeed,s=(t||0)+i*e;this.towerGroup.rotation.y+=s;const o=Math.abs(s)>1e-6;this.towerGroup.updateMatrixWorld(!0);const l=2,c=this.towerGroup.rotation.y;for(const d of this.slabs){if(o){const a=d.yPosition-n;a>=-4&&a<=l&&d.syncBodiesToTower()}(u=d.updateActiveSpot)==null||u.call(d,c),d.animateDebris(e)}}onSoftHit(e){const t=e.slab;return!t||t.isBroken?!1:(t.breakWholeSlab(this.particleSystem),this.slabsBroken++,!0)}allDone(){return this.slabsBroken>=this.totalSlabs}dispose(){for(const e of this.slabs)e.dispose();this.slabs=[],this.scene.remove(this.towerGroup)}}const gr=10;class qx{constructor(e,t){this.scene=e;const n=.28,i=new hi(n,n,gr,24),s=new fn({color:16777215,roughness:.4,metalness:0,emissive:0,emissiveIntensity:0});s.fog=!0,this.mesh=new Ye(i,s),this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,this.mesh.position.set(0,.55+gr*.5,0),this.scene.add(this.mesh),this.halo=null,this._haloTargetY=0}update(e,t=.016){if(!this.mesh)return;const n=e-.4,i=e+gr;this.mesh.position.y=(i+n)*.5,this.mesh.scale.y=(i-n)/gr}}const st={IDLE:"IDLE",PLAYING:"PLAYING",PAUSED:"PAUSED",DEAD:"DEAD",WIN:"WIN",FINAL_WIN:"FINAL_WIN"};function Rr(r){return Vx(r)}const Lr=class Lr{constructor(e,t,n,i,s,o){this.ball=e,this.tower=t,this.pole=n,this.hud=i,this.audio=s,this.audioManager=s,this.particles=o,this.state=st.IDLE,this.score=0,this.level=1,this.totalLevels=10,this.renderer=null,this._comboCount=0,this._comboMultiplier=1,this._lastSoftHitAt=0,this._comboTimeoutMs=1850,this._maxCombo=0,this._levelStartedAt=0,this._levelStats=this._freshLevelStats(),this._lastHardHitAt=0,this._sequenceRunning=!1,this._sequenceCancelled=!1,this._sequenceMeshes=[],this._sequenceRafs=new Set,this._hardHitsThisLevel=0,this._maxHardHitsBeforeFail=3,this.tower.particleSystem=this.particles,Lr.instance=this}_freshLevelStats(){return{broken:0,perfectSoft:0,hardHits:0,ms:0,maxCombo:0}}start(){var t,n,i,s;this.state=st.PLAYING,this._comboCount=0,this._comboMultiplier=1,this._lastSoftHitAt=0,this._maxCombo=0,this._hardHitsThisLevel=0,this._maxHardHitsBeforeFail=this.level<=3?3:1,this._levelStartedAt=performance.now(),this._levelStats=this._freshLevelStats();const e=(t=this.tower)==null?void 0:t.currentTheme;e&&((n=this.renderer)!=null&&n.setSkyTheme)&&this.renderer.setSkyTheme(e.sky,e.ground),this.hud.showPlayingUI(this.score,this.level,this.tower.totalSlabs),(s=(i=this.hud).updateCombo)==null||s.call(i,0,1,0)}tick(e=performance.now()){var t,n;this.state===st.PLAYING&&this._comboCount>0&&e-this._lastSoftHitAt>this._comboTimeoutMs&&(this._comboCount=0,this._comboMultiplier=1,(n=(t=this.hud).updateCombo)==null||n.call(t,0,1,0))}notifyLandingType(e){var t,n;this.state===st.PLAYING&&((n=(t=this.hud).showLandingHint)==null||n.call(t,e))}onSoftHit(e){var n,i,s;if(this.state!==st.PLAYING)return;if(this.tower.onSoftHit(e)){const o=performance.now();o-this._lastSoftHitAt<=this._comboTimeoutMs?this._comboCount+=1:this._comboCount=1,this._lastSoftHitAt=o,this._comboMultiplier=Math.min(4,1+Math.floor(Math.max(0,this._comboCount-1)/4));const l=3*this._comboMultiplier;this.score+=l,this._levelStats.broken+=1,this._levelStats.perfectSoft+=1,this._comboCount>this._maxCombo&&(this._maxCombo=this._comboCount,this._levelStats.maxCombo=this._maxCombo),this.hud.updateProgress(this.tower.slabsBroken,this.tower.totalSlabs,this.score),(i=(n=this.hud).updateCombo)==null||i.call(n,this._comboCount,this._comboMultiplier,l);const c=Rt.clamp(Math.abs(this.ball.body.velocity.y)/12,.7,1.5);(s=this.audioManager)==null||s.play("break",c),this.tower.allDone()&&this._levelComplete()}}onHardHit(e){var n,i,s,o,l,c,u;if(this.state!==st.PLAYING)return;const t=performance.now();t-(this._lastHardHitAt||0)<180||(this._lastHardHitAt=t,this._comboCount=0,this._comboMultiplier=1,this._lastSoftHitAt=0,this._levelStats.hardHits+=1,this._hardHitsThisLevel+=1,(n=this.audioManager)==null||n.play("bounce"),(s=(i=this.renderer)==null?void 0:i.triggerShake)==null||s.call(i,.05),(l=(o=this.hud).flashDanger)==null||l.call(o),this.score=Math.max(0,this.score-3),this.hud.updateProgress(this.tower.slabsBroken,this.tower.totalSlabs,this.score),(u=(c=this.hud).updateCombo)==null||u.call(c,0,1,0),this._hardHitsThisLevel>=this._maxHardHitsBeforeFail&&this._failLevel())}_failLevel(){var e,t,n,i,s,o,l,c,u;this.state!==st.DEAD&&(this.state=st.DEAD,(t=(e=this.audioManager)==null?void 0:e.duckBGM)==null||t.call(e,.35,400,1200),(n=this.audioManager)==null||n.play("death"),(s=(i=this.renderer)==null?void 0:i.triggerShake)==null||s.call(i,.1),(l=(o=this.ball).die)==null||l.call(o),(u=(c=this.hud).showGameOver)==null||u.call(c,this.score))}togglePause(){var e,t,n,i;return this.state===st.PLAYING?(this.state=st.PAUSED,(t=(e=this.hud).showPauseScreen)==null||t.call(e),!0):this.state===st.PAUSED?(this.state=st.PLAYING,(i=(n=this.hud).hidePauseScreen)==null||i.call(n),!1):null}restart(){this._cancelCompletionSequence(),this._cleanupAllSlabs(),this._comboCount=0,this._comboMultiplier=1,this._lastSoftHitAt=0,this.ball.reset(this.level),this.tower.buildLevel(Rr(this.level)),this.start()}nextLevel(){var e,t;if(this._cancelCompletionSequence(),this._cleanupAllSlabs(),this._comboCount=0,this._comboMultiplier=1,this._lastSoftHitAt=0,this.level>=this.totalLevels){this.state=st.FINAL_WIN,(t=(e=this.hud).showFinalVictory)==null||t.call(e,this.score,this.totalLevels);return}this.level+=1,this.ball.reset(this.level),this.tower.buildLevel(Rr(this.level)),this.start()}_cleanupAllSlabs(){var e,t;for(const n of this.tower.slabs){for(const i of n.debris)this.tower.scene.remove(i.mesh),(e=i.mesh.geometry)==null||e.dispose(),(t=i.mesh.material)==null||t.dispose();n.debris=[]}}async _levelComplete(){var e,t,n;if(!this._sequenceRunning){this.state=st.WIN,this._levelStats.ms=performance.now()-this._levelStartedAt,(t=(e=this.audioManager)==null?void 0:e.duckBGM)==null||t.call(e,.55,250,1500),(n=this.audioManager)==null||n.play("win"),this._sequenceRunning=!0,this._sequenceCancelled=!1;try{await this._runLevelCompleteSequence()}catch(i){console.error("Error in level complete sequence:",i),this._sequenceCancelled||this.hud.showLevelComplete(this.score,this.level,this.totalLevels,1,this._levelStats)}finally{this._sequenceRunning=!1}}}_isCancelled(){return this._sequenceCancelled}async _runLevelCompleteSequence(){const e=this.tower.scene;if(!e){this.hud.showLevelComplete(this.score,this.level,this.totalLevels,1,this._levelStats);return}const n=-(this.tower.totalSlabs*.62)-.4-.8,i=n-1.8,s=i-2.4;if(this._spawnConfettiBurst(e,this.ball.mesh.position.y+.2),this._isCancelled())return;const o=this._createCheckeredPlatform();o.position.set(0,n,0),e.add(o),this._sequenceMeshes.push(o);const l=this._createMultiplierWheel();l.group.position.set(0,i,0),e.add(l.group),this._sequenceMeshes.push(l.group);const c=this._createWheelPointer();if(c.position.set(0,i+.36,l.radius+.1),e.add(c),this._sequenceMeshes.push(c),await this._spinWheel(l.group,2e3),this._isCancelled()||(await this._animateBallToY(i+.75,900),this._isCancelled()))return;const u=this._getWedgeUnderPointer(l.group.rotation.y,l.multipliers.length),d=l.multipliers[u]||1;this.score+=d,this.hud.updateProgress(this.tower.slabsBroken,this.tower.totalSlabs,this.score);const a=this._createCup();a.position.set(0,s,0),e.add(a),this._sequenceMeshes.push(a),await this._animateBallToY(s+.45,900),!this._isCancelled()&&(this._spawnConfettiBurst(e,s+.8),this.hud.showLevelComplete(this.score,this.level,this.totalLevels,d,this._levelStats))}_spawnConfettiBurst(e,t){const n=[16699242,8377542,8898808,16758689,13809407,16777215,16747955],i=[];for(let c=0;c<60;c++){const u=new Ye(new Yn(.09,.03,.05),new di({color:n[c%n.length],transparent:!0,opacity:1}));u.position.set((Math.random()-.5)*3.2,t+Math.random()*.6,(Math.random()-.5)*3.2),e.add(u),this._sequenceMeshes.push(u),i.push({mesh:u,vx:(Math.random()-.5)*2.2,vy:3+Math.random()*3,vz:(Math.random()-.5)*2.2,life:1.6+Math.random()*.6})}let s=performance.now(),o=0;const l=c=>{if(this._sequenceCancelled){this._sequenceRafs.delete(o);return}const u=Math.min((c-s)/1e3,.033);s=c;let d=!1;for(const a of i)a.life<=0||!a.mesh.parent||(d=!0,a.life-=u,a.vy-=8*u,a.mesh.position.x+=a.vx*u,a.mesh.position.y+=a.vy*u,a.mesh.position.z+=a.vz*u,a.mesh.rotation.x+=u*7,a.mesh.rotation.z+=u*5,a.mesh.material.opacity=Math.max(0,a.life/1.2));d?(o=requestAnimationFrame(l),this._sequenceRafs.add(o)):this._sequenceRafs.delete(o)};o=requestAnimationFrame(l),this._sequenceRafs.add(o)}_createCheckeredPlatform(){const t=document.createElement("canvas");t.width=128,t.height=128;const n=t.getContext("2d"),i=128/8;for(let c=0;c<8;c++)for(let u=0;u<8;u++)n.fillStyle=(u+c)%2===0?"#FFEEF3":"#FFC4D6",n.fillRect(u*i,c*i,i,i);const s=new ws(t);s.wrapS=ys,s.wrapT=ys,s.repeat.set(2,2);const o=new Ye(new hi(2.35,2.35,.24,36),new fn({map:s,color:16777215,roughness:.5,metalness:.05})),l=this._makeTextSprite("!","#C44569",128,'bold 84px "Bricolage Grotesque", Arial');return l.position.set(0,.22,0),o.add(l),o}_createMultiplierWheel(){const e=new Hn,t=2,n=8,i=[1,2,3,4,5,6,4,3],s=[16757690,12247551,16768954,12255177,15186687,16759539,16777146,16762070],o=new Ye(new hi(t+.16,t+.16,.22,40),new fn({color:12862825,roughness:.45,metalness:.18}));e.add(o);for(let l=0;l<n;l++){const c=l/n*Math.PI*2,u=Math.PI*2/n,d=new Ye(new ha(t,28,c,u),new fn({color:s[l],side:tn,roughness:.35,metalness:.05,emissive:new Te(s[l]).multiplyScalar(.15)}));d.rotation.x=-Math.PI/2,d.position.y=.12,e.add(d);const a=c+u*.5,h=this._makeTextSprite(`x${i[l]}`,"#3A2C3A",160,'bold 56px "Bricolage Grotesque", Arial');h.position.set(Math.cos(a)*1.2,.24,Math.sin(a)*1.2),e.add(h)}return{group:e,multipliers:i,radius:t}}_createWheelPointer(){const e=new Hn,t=new Ye(new ua(.22,.5,4),new fn({color:16739229,emissive:16739229,emissiveIntensity:.45,roughness:.4}));return t.rotation.x=Math.PI,t.rotation.y=Math.PI/4,e.add(t),e}_makeTextSprite(e,t="#ffffff",n=256,i="bold 64px Arial"){const s=document.createElement("canvas");s.width=n,s.height=n;const o=s.getContext("2d");o.clearRect(0,0,n,n),o.font=i,o.textAlign="center",o.textBaseline="alphabetic",o.fillStyle=t;const l=String(e).split(`
`),c=Math.round(n*.24),u=c*l.length;let d=n*.5-u*.5+c*.78;for(const m of l)o.fillText(m,n/2,d),d+=c;const a=new ws(s),h=new ch({map:a,transparent:!0}),f=new eg(h);return f.scale.set(.8,.8,.8),f}_spinWheel(e,t=2e3){return new Promise(n=>{const i=performance.now();let s=i,o,l=!1;const c=u=>{if(this._sequenceCancelled){l=!0,this._sequenceRafs.delete(o),n();return}if(l)return;const d=Math.min((u-i)/t,1),a=Math.min((u-s)/1e3,.033);s=u;const h=Rt.lerp(12,.6,d);e.rotation.y+=h*a,d<1?(o=requestAnimationFrame(c),this._sequenceRafs.add(o)):(l=!0,this._sequenceRafs.delete(o),n())};o=requestAnimationFrame(c),this._sequenceRafs.add(o),setTimeout(()=>{l||(l=!0,cancelAnimationFrame(o),this._sequenceRafs.delete(o),n())},t+1500)})}_getWedgeUnderPointer(e,t){const n=Math.PI*2,i=n/t,s=Math.PI/2;let o=0,l=1/0;for(let c=0;c<t;c++){const u=((-((c+.5)*i)-e)%n+n)%n;let d=Math.abs(u-s);d>Math.PI&&(d=n-d),d<l&&(l=d,o=c)}return o}_animateBallToY(e,t=900){return new Promise(n=>{const i=this.ball.body.position.y,s=performance.now();let o,l=!1;const c=u=>{if(this._sequenceCancelled){l=!0,this._sequenceRafs.delete(o),n();return}if(l)return;const d=Math.min((u-s)/t,1),a=1-Math.pow(1-d,3),h=Rt.lerp(i,e,a);this.ball.body.position.set(0,h,0),this.ball.body.velocity.set(0,0,0),this.ball.mesh.position.set(0,h,0),d<1?(o=requestAnimationFrame(c),this._sequenceRafs.add(o)):(l=!0,this._sequenceRafs.delete(o),n())};o=requestAnimationFrame(c),this._sequenceRafs.add(o),setTimeout(()=>{l||(l=!0,cancelAnimationFrame(o),this._sequenceRafs.delete(o),this.ball.body.position.set(0,e,0),this.ball.body.velocity.set(0,0,0),this.ball.mesh.position.set(0,e,0),n())},t+1500)})}_createCup(){const e=new Hn,t=new Ye(new hi(.55,.92,2.2,24,1,!0),new fn({color:16739229,side:tn,roughness:.4,metalness:.18,emissive:12862825,emissiveIntensity:.18}));e.add(t);const n=this._makeTextSprite(`${this.level}
/${this.totalLevels}`,"#ffffff",256,'bold 58px "Bricolage Grotesque", Arial');return n.position.set(0,.2,.95),e.add(n),e}_cancelCompletionSequence(){this._sequenceCancelled=!0;for(const e of this._sequenceRafs)cancelAnimationFrame(e);this._sequenceRafs.clear(),this._clearCompletionSequence()}_clearCompletionSequence(){var n;const e=this.tower.scene,t=i=>{var s;i&&((s=i.map)!=null&&s.dispose&&i.map.dispose(),i.dispose&&i.dispose())};for(const i of this._sequenceMeshes)i!=null&&i.parent&&i.parent.remove(i),(n=i==null?void 0:i.traverse)==null||n.call(i,s=>{var o;(o=s.geometry)!=null&&o.dispose&&s.geometry.dispose(),Array.isArray(s.material)?s.material.forEach(t):t(s.material)});this._sequenceMeshes=[],e&&(this.ball.mesh.position.x=0,this.ball.mesh.position.z=0)}};Sa(Lr,"instance",null);let Rs=Lr;const vr=Object.freeze(Object.defineProperty({__proto__:null,GameManager:Rs,GameState:st,default:Rs,getLevelConfig:Rr},Symbol.toStringTag,{value:"Module"})),jt=1500;function Xx(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.45,"rgba(255,255,255,0.5)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);const i=new ws(e);return i.minFilter=wt,i.magFilter=wt,i}class Yx{constructor(e){this.scene=e,this.positions=new Float32Array(jt*3),this.colors=new Float32Array(jt*3),this.velocities=new Float32Array(jt*3),this.life=new Float32Array(jt),this.active=new Uint8Array(jt),this._freeStack=new Int32Array(jt),this._freeStackTop=jt;for(let t=0;t<jt;t+=1)this._freeStack[t]=jt-1-t;this.geometry=new Ot,this.positionAttr=new Wt(this.positions,3),this.colorAttr=new Wt(this.colors,3),this.geometry.setAttribute("position",this.positionAttr),this.geometry.setAttribute("color",this.colorAttr),this.geometry.setDrawRange(0,jt),this._softTexture=Xx(),this.material=new uh({size:.1,map:this._softTexture,vertexColors:!0,transparent:!0,opacity:.65,depthWrite:!1,sizeAttenuation:!0,blending:Vn}),this.points=new tg(this.geometry,this.material),this.scene.add(this.points)}_findFreeIndex(){return this._freeStackTop<=0?-1:(this._freeStackTop-=1,this._freeStack[this._freeStackTop])}_releaseIndex(e){this._freeStackTop>=jt||(this._freeStack[this._freeStackTop]=e,this._freeStackTop+=1)}burst(e,t,n=20,i=!1){const s=new Te(t),o=i?1.9:.85,l=i?8:3.6,c=i?4.5:2.2;for(let u=0;u<n;u+=1){const d=this._findFreeIndex();if(d===-1)break;this.active[d]=1,this.life[d]=i?.9+Math.random()*.35:.45+Math.random()*.3;const a=d*3;this.positions[a]=e.x+(Math.random()-.5)*.18,this.positions[a+1]=e.y+.05,this.positions[a+2]=e.z+(Math.random()-.5)*.18;const h=Math.random()*Math.PI*2,f=Math.acos(2*Math.random()-1),m=Math.sin(f)*Math.cos(h),g=Math.abs(Math.cos(f)),_=Math.sin(f)*Math.sin(h),p=l+Math.random()*(i?4.2:2.4);this.velocities[a]=m*p*o,this.velocities[a+1]=g*p+c,this.velocities[a+2]=_*p*o,this.colors[a]=s.r,this.colors[a+1]=s.g,this.colors[a+2]=s.b}this.positionAttr.needsUpdate=!0,this.colorAttr.needsUpdate=!0}update(e){for(let n=0;n<jt;n+=1){if(!this.active[n])continue;this.life[n]-=e;const i=n*3;if(this.life[n]<=0){this.active[n]=0,this.positions[i+1]=-9999,this._releaseIndex(n);continue}this.velocities[i]*=.985,this.velocities[i+1]=this.velocities[i+1]*.985-13.5*e,this.velocities[i+2]*=.985,this.positions[i]+=this.velocities[i]*e,this.positions[i+1]+=this.velocities[i+1]*e,this.positions[i+2]+=this.velocities[i+2]*e}this.positionAttr.needsUpdate=!0}dispose(){this.scene.remove(this.points),this.geometry.dispose(),this.material.dispose()}}class jx{constructor(e){this.uiLayer=e,this.root=e,this._injectStyles(),this.root.innerHTML=`
  <div class="sbp-control-pill" id="sbp-controls">
    <button id="sbp-pause" class="sbp-ctrl-btn" aria-label="Pause" title="Pause">
      <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
        <rect x="3" y="2" width="3.5" height="12" rx="1" fill="currentColor"/>
        <rect x="9.5" y="2" width="3.5" height="12" rx="1" fill="currentColor"/>
      </svg>
    </button>
    <button id="sbp-mute" class="sbp-ctrl-btn" aria-label="Mute" title="Mute">
      <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
        <path d="M2 6h2.5l4-3v10l-4-3H2z" fill="currentColor"/>
        <path d="M11 5.5c1 1 1 4 0 5" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      </svg>
    </button>
  </div>

  <div id="sbp-bar-wrap" class="sbp-bar-wrap">
    <div id="sbp-lv-left" class="sbp-level-pill">1</div>
    <div class="sbp-progress-shell"><div id="sbp-bar" class="sbp-progress-fill"></div></div>
    <div id="sbp-lv-right" class="sbp-level-pill">2</div>
  </div>

  <div id="sbp-landing-hint" class="sbp-landing-hint">SAFE LANDING</div>
  <div id="sbp-break-mode" class="sbp-break-mode">PRESS &amp; HOLD</div>

  <div id="sbp-combo-wrap" class="sbp-combo-wrap" data-tier="idle">
    <div class="sbp-combo-label">COMBO</div>
    <div id="sbp-combo-value" class="sbp-combo-value">x1</div>
  </div>

  <div id="sbp-combo-toast" class="sbp-combo-toast">+3</div>

  <div id="sbp-score-wrap" class="sbp-score-wrap">
    <div class="sbp-score-caption">SCORE</div>
    <div id="sbp-score" class="sbp-score-value">0</div>
  </div>

  <div id="sbp-overlay" class="sbp-overlay"></div>
`,this._lvLeft=document.getElementById("sbp-lv-left"),this._lvRight=document.getElementById("sbp-lv-right"),this._bar=document.getElementById("sbp-bar"),this._score=document.getElementById("sbp-score"),this._scoreWrap=document.getElementById("sbp-score-wrap"),this._overlay=document.getElementById("sbp-overlay"),this._landingHint=document.getElementById("sbp-landing-hint"),this._breakMode=document.getElementById("sbp-break-mode"),this._comboWrap=document.getElementById("sbp-combo-wrap"),this._comboValue=document.getElementById("sbp-combo-value"),this._comboToast=document.getElementById("sbp-combo-toast"),this._pauseBtn=document.getElementById("sbp-pause"),this._muteBtn=document.getElementById("sbp-mute"),this._landingHintTimer=null,this._comboTimer=null,this._comboToastTimer=null,this._lastTier="idle",this._pauseBtn.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("game:pause-toggle"))}),this._muteBtn.addEventListener("click",t=>{t.currentTarget.classList.toggle("is-on"),window.dispatchEvent(new CustomEvent("game:mute-toggle"))})}_injectStyles(){if(document.getElementById("sbp-hud-style"))return;const e=document.createElement("style");e.id="sbp-hud-style",e.textContent=`
      :root {
        --sbp-glass-bg: rgba(255,255,255,0.92);
        --sbp-glass-border: rgba(255,255,255,0.7);
        --sbp-shadow-soft: rgba(15,20,35,0.18);
        --sbp-primary: #3A78FF;
        --sbp-primary-light: #6F9CFF;
        --sbp-secondary: #FFD93D;
        --sbp-accent: #1F2733;
      }

      .sbp-control-pill{
        position:absolute;
        bottom:max(18px,env(safe-area-inset-bottom,0px));
        left:max(14px,env(safe-area-inset-left,0px));
        display:flex;
        gap:4px;
        background:rgba(255,255,255,0.85);
        backdrop-filter:blur(12px);
        -webkit-backdrop-filter:blur(12px);
        border:none;
        border-radius:999px;
        padding:4px;
        box-shadow:0 4px 12px rgba(15,20,35,0.15);
        pointer-events:none;
        opacity:0;
        z-index:21;
        transition:opacity 0.25s ease;
      }
      .sbp-ctrl-btn{
        width:30px;height:30px;
        border:none;border-radius:50%;
        background:transparent;color:var(--sbp-accent);
        cursor:pointer;
        display:flex;align-items:center;justify-content:center;
        transition:all 0.18s ease;
      }
      .sbp-ctrl-btn:hover{transform:scale(1.08);}
      .sbp-ctrl-btn.is-on{
        background:linear-gradient(135deg,var(--sbp-primary),var(--sbp-primary-light));
        color:#fff;
        box-shadow:0 4px 10px rgba(58,120,255,0.35);
      }

      .sbp-bar-wrap{
        position:absolute;
        top:max(18px,env(safe-area-inset-top,0px));
        left:50%;
        transform:translateX(-50%);
        display:flex;
        align-items:center;
        gap:10px;
        pointer-events:none;
        z-index:20;
        padding:0;
        border-radius:0;
        border:none;
        background:transparent;
        box-shadow:none;
        backdrop-filter:none;
        -webkit-backdrop-filter:none;
      }

      .sbp-level-pill{
        width:32px;height:32px;
        border-radius:50%;
        background:#3A78FF;
        color:#FFFFFF;
        display:flex;align-items:center;justify-content:center;
        font-size:14px;font-weight:800;letter-spacing:0.3px;
        box-shadow:0 2px 6px rgba(0,0,0,0.18);
      }

      .sbp-progress-shell{
        width:180px;height:6px;
        border-radius:999px;overflow:hidden;
        background:rgba(255,255,255,0.45);
      }
      .sbp-progress-fill{
        width:0%;height:100%;border-radius:999px;
        background:#3A78FF;
        transition:width 0.4s cubic-bezier(0.4,0,0.2,1);
      }
      .sbp-progress-fill::after{display:none;}
      @keyframes sbpShimmer{0%{transform:translateX(-100%);}100%{transform:translateX(100%);}}

      .sbp-score-wrap{
        position:absolute;
        left:50%;
        top:calc(max(18px,env(safe-area-inset-top,0px)) + 56px);
        transform:translateX(-50%);
        display:flex;flex-direction:column;align-items:center;
        pointer-events:none;z-index:12;
        transition:opacity 0.3s ease;
      }
      .sbp-score-wrap.is-dim{opacity:0.85;}

      .sbp-score-caption{display:none;}
      .sbp-score-value{
        color:#FFFFFF;
        font-family:"Bricolage Grotesque","Outfit",sans-serif;
        font-size:clamp(40px,9vw,76px);
        font-weight:900;letter-spacing:-1px;line-height:0.9;
        -webkit-text-stroke:4px #1F2733;
        paint-order:stroke fill;
        text-shadow:0 4px 10px rgba(0,0,0,0.30), 0 0 2px rgba(0,0,0,0.55);
        transition:transform 0.12s ease-out;
      }

      .sbp-landing-hint{
        position:absolute;
        top:calc(max(20px,env(safe-area-inset-top,0px)) + 92px);
        left:50%;
        transform:translateX(-50%) scale(0.92);
        min-width:120px;
        padding:6px 16px;
        border-radius:999px;
        border:1.5px solid rgba(255,255,255,0.7);
        background:rgba(255,255,255,0.92);
        color:#1F2733;
        text-align:center;
        font-size:12px;font-weight:900;letter-spacing:1.6px;
        opacity:0;pointer-events:none;z-index:22;
        box-shadow:0 4px 12px rgba(0,0,0,0.18);
        transition:opacity 0.14s ease, transform 0.14s ease, background 0.14s ease, border-color 0.14s ease, color 0.14s ease;
      }
      .sbp-landing-hint.is-soft{
        background:linear-gradient(130deg,#FFD200,#FFB800);
        color:#1F2733;
        border-color:rgba(0,0,0,0.25);
      }
      .sbp-landing-hint.is-hard{
        background:linear-gradient(130deg,#1F2733,#0A0A0A);
        color:#FFFFFF;
        border-color:rgba(255,255,255,0.7);
      }
      .sbp-landing-hint.is-soft{
        background:linear-gradient(130deg,rgba(186,255,201,0.85),rgba(186,225,255,0.7));
        border-color:rgba(126,246,225,0.85);
        color:#1f5c3f;
      }
      .sbp-landing-hint.is-hard{
        background:linear-gradient(130deg,rgba(255,107,157,0.85),rgba(254,194,96,0.75));
        border-color:rgba(255,107,157,0.85);
        color:#ffffff;
      }

      .sbp-break-mode{display:none;}
      .sbp-break-mode.is-active{
        opacity:1;
        transform:translateX(-50%) scale(1.04);
        background:linear-gradient(135deg,rgba(255,141,179,0.92),rgba(254,194,96,0.85));
        color:#ffffff;
        border-color:rgba(255,255,255,0.8);
        box-shadow:0 6px 18px rgba(255,107,157,0.35);
      }

      .sbp-combo-wrap{
        position:absolute;
        right:max(14px,env(safe-area-inset-right,0px));
        top:calc(max(18px,env(safe-area-inset-top,0px)) + 38px);
        width:auto;
        border-radius:14px;
        border:none;
        background:transparent;
        backdrop-filter:none;
        box-shadow:none;
        padding:0;
        pointer-events:none;
        z-index:20;
        opacity:0;
        transition:opacity 0.25s ease, transform 0.25s ease;
      }
      /* Show only when active (count > 1) */
      .sbp-combo-wrap[data-tier="pink"],
      .sbp-combo-wrap[data-tier="amber"],
      .sbp-combo-wrap[data-tier="gold"]{ opacity: 1; }
      .sbp-combo-wrap[data-tier="pink"]{box-shadow:0 8px 26px rgba(255,107,157,0.45);}
      .sbp-combo-wrap[data-tier="amber"]{box-shadow:0 8px 26px rgba(254,194,96,0.55);border-color:rgba(254,194,96,0.85);}
      .sbp-combo-wrap[data-tier="gold"]{box-shadow:0 8px 30px rgba(255,215,0,0.7);border-color:rgba(255,215,0,0.9);}
      .sbp-combo-wrap.sbp-bloom{animation:sbpBloom 380ms cubic-bezier(.2,.8,.2,1);}
      @keyframes sbpBloom{0%{transform:scale(1)}40%{transform:scale(1.18)}100%{transform:scale(1)}}

      .sbp-combo-label{display:none;}
      .sbp-combo-value{
        color:rgba(255,255,255,0.96);
        font-family:"Bricolage Grotesque","Outfit",sans-serif;
        font-size:32px;font-weight:900;line-height:1;text-align:right;
        -webkit-text-stroke:1.5px rgba(0,0,0,0.55);
        text-shadow:0 3px 8px rgba(0,0,0,0.2);
        transition:transform 0.15s cubic-bezier(0.4,0,0.2,1);
      }
      .sbp-combo-wrap[data-tier="amber"] .sbp-combo-value{color:#E07B00;}
      .sbp-combo-wrap[data-tier="gold"]  .sbp-combo-value{color:#B8860B;}

      .sbp-combo-toast{
        position:absolute;top:34%;left:50%;
        transform:translate(-50%,-82%) scale(0.92);
        padding:10px 18px;border-radius:999px;
        border:2px solid rgba(255,215,0,0.7);
        background:linear-gradient(135deg,rgba(255,107,157,0.95),rgba(254,194,96,0.95));
        color:#FFFFFF;
        font-size:18px;font-weight:900;letter-spacing:1.2px;
        opacity:0;pointer-events:none;z-index:21;
        box-shadow:0 8px 28px rgba(255,107,157,0.4), 0 0 20px rgba(255,215,0,0.3);
        transition:opacity 0.2s ease, transform 0.2s ease;
      }

      .sbp-overlay{
        position:absolute;inset:0;
        display:flex;align-items:center;justify-content:center;
        pointer-events:none;z-index:25;
        background:rgba(15,20,30,0.42);
        backdrop-filter:blur(6px);
        opacity:0;transition:opacity 0.4s ease;
      }
      .sbp-overlay.show{opacity:1;}

      .sbp-card{
        position:relative;
        width:min(88vw,460px);
        border-radius:28px;
        border:3px solid rgba(255,255,255,0.85);
        background:rgba(255,255,255,0.96);
        box-shadow:0 20px 60px rgba(196,69,105,0.25), 0 8px 32px rgba(255,107,157,0.18);
        backdrop-filter:blur(12px);
        padding:24px 24px 22px;
        color:#3A2C3A;
        text-align:center;
        animation:sbpFloatIn 320ms cubic-bezier(.2,.8,.2,1);
        overflow:hidden;
      }
      .sbp-card::after{
        content:'';position:absolute;inset:0;border-radius:inherit;
        background:linear-gradient(115deg,transparent 35%,rgba(255,255,255,0.55) 50%,transparent 65%);
        transform:translateX(-130%);
        animation:sbpRibbon 980ms 280ms ease-out forwards;
        pointer-events:none;
      }
      @keyframes sbpRibbon{to{transform:translateX(130%);}}
      @keyframes sbpFloatIn{
        0%{opacity:0; transform:translateY(14px) scale(0.98);}
        100%{opacity:1; transform:translateY(0) scale(1);}
      }

      .sbp-title{
        font-family:"Bricolage Grotesque","Space Grotesk","Segoe UI",sans-serif;
        font-weight:800;letter-spacing:1.2px;
        background:linear-gradient(135deg,var(--sbp-primary),var(--sbp-accent));
        -webkit-background-clip:text;background-clip:text;
        -webkit-text-fill-color:transparent;color:var(--sbp-accent);
      }

      .sbp-stats{
        margin-top:14px;
        display:grid;grid-template-columns:repeat(2,minmax(0,1fr));
        gap:8px 14px;
        font-size:13px;font-weight:700;
      }
      .sbp-stat-row{
        display:flex;justify-content:space-between;
        padding:8px 12px;
        border-radius:14px;
        background:rgba(255,196,214,0.18);
        border:1px solid rgba(255,141,179,0.25);
      }
      .sbp-stat-row span:first-child{color:rgba(58,44,58,0.6);letter-spacing:0.6px;text-transform:uppercase;font-size:11px;}
      .sbp-stat-row span:last-child{color:var(--sbp-accent);font-weight:800;}

      .sbp-chip-row{
        margin-top:16px;display:flex;justify-content:center;gap:10px;flex-wrap:wrap;
      }
      .sbp-chip{
        padding:8px 14px;border-radius:999px;
        border:1px solid rgba(255,141,179,0.4);
        background:rgba(255,255,255,0.7);
        color:var(--sbp-accent);
        font-size:12px;font-weight:800;letter-spacing:0.8px;
      }

      .sbp-primary-btn{
        margin-top:18px;border:none;border-radius:999px;
        padding:13px 26px;cursor:pointer;
        color:#fff;font-size:15px;font-weight:800;letter-spacing:1px;
        background:linear-gradient(135deg,var(--sbp-primary),var(--sbp-primary-light));
        box-shadow:0 10px 22px rgba(255,107,157,0.4);
        transition:transform 0.18s ease, box-shadow 0.18s ease;
      }
      .sbp-primary-btn:hover{transform:translateY(-2px);box-shadow:0 14px 28px rgba(255,107,157,0.5);}

      .sbp-tap-pulse{
        margin-top:14px;font-size:13px;letter-spacing:2.6px;
        color:rgba(196,69,105,0.78);font-weight:800;
        animation:sbpTapPulse 1.4s ease-in-out infinite;
      }
      @keyframes sbpTapPulse{
        0%,100%{opacity:0.55;transform:translateY(0);}
        50%{opacity:1;transform:translateY(-2px);}
      }

      @media (max-width:640px){
        .sbp-bar-wrap{padding:6px 10px; gap:8px;}
        .sbp-level-pill{width:30px; height:30px; font-size:13px;}
        .sbp-progress-shell{width:150px;}
        .sbp-landing-hint{top:calc(max(12px,env(safe-area-inset-top,0px)) + 56px); font-size:11px; padding:7px 14px;}
        .sbp-break-mode{bottom:calc(max(20px,env(safe-area-inset-bottom,0px)) + 14px); font-size:10px; padding:6px 13px;}
        .sbp-combo-wrap{padding:0;}
        .sbp-combo-value{font-size:26px;}
        .sbp-card{width:min(92vw,420px); border-radius:20px; padding:20px 16px 18px;}
        .sbp-ctrl-btn{width:28px;height:28px;}
        .sbp-stats{grid-template-columns:1fr 1fr;}
        /* Score-bar top position scales with safe-area; smaller font on small screens. */
        .sbp-score-wrap{
          top:calc(max(14px,env(safe-area-inset-top,0px)) + 46px);
          transform:translateX(-50%);
        }
        .sbp-score-value{font-size:clamp(34px,8vw,64px); -webkit-text-stroke:3.5px #1F2733;}
      }
    `,document.head.appendChild(e)}showPlayingUI(e,t,n){this._lvLeft.textContent=t,this._lvRight.textContent=t+1,this._bar.style.width="0%",this._score.textContent=e,this.updateCombo(0,1,0),this.setBreakMode(!1),this._landingHint&&(this._landingHint.style.opacity="0",this._landingHint.style.transform="translateX(-50%) scale(0.92)",this._landingHint.classList.remove("is-soft","is-hard")),this._overlay.innerHTML="",this._overlay.style.background="transparent",this._overlay.style.pointerEvents="none",this._overlay.classList.remove("show")}showLandingHint(e){if(!this._landingHint)return;const t=e==="soft";this._landingHint.textContent=t?"SAFE LANDING":"DANGER",this._landingHint.classList.toggle("is-soft",t),this._landingHint.classList.toggle("is-hard",!t),this._landingHint.style.opacity="1",this._landingHint.style.transform="translateX(-50%) scale(1)",this._landingHintTimer&&clearTimeout(this._landingHintTimer),this._landingHintTimer=setTimeout(()=>{this._landingHint.style.opacity="0",this._landingHint.style.transform="translateX(-50%) scale(0.94)"},900)}setBreakMode(e){this._breakMode&&this._breakMode.classList.toggle("is-active",!!e)}setControlsVisible(e){const t=document.getElementById("sbp-controls");if(!t)return;const n=!!e;this._lastControlsVisible!==n&&(this._lastControlsVisible=n,t.style.opacity=n?"1":"0",t.style.pointerEvents=n?"auto":"none",t.style.transform=n?"translateY(0)":"translateY(-6px)")}setMuteState(e){this._muteBtn&&this._muteBtn.classList.toggle("is-on",!!e)}updateCombo(e,t=1,n=0){if(!this._comboWrap||!this._comboValue)return;const i=Math.max(0,e|0),s=Math.max(1,t|0),o=i>1,l=s>=4?"gold":s>=3?"amber":s>=2?"pink":"idle";this._comboWrap.dataset.tier=l,l!==this._lastTier&&(this._comboWrap.classList.remove("sbp-bloom"),this._comboWrap.offsetWidth,this._comboWrap.classList.add("sbp-bloom")),this._lastTier=l,this._comboValue.textContent=`x${s}`,this._comboValue.style.transform=o?"scale(1.08)":"scale(1)",this._scoreWrap&&this._scoreWrap.classList.toggle("is-dim",o),this._comboTimer&&clearTimeout(this._comboTimer),this._comboTimer=setTimeout(()=>{this._comboValue.style.transform="scale(1)"},140),n>0&&this._comboToast&&(this._comboToast.textContent=`+${n}`,this._comboToast.style.opacity="1",this._comboToast.style.transform="translate(-50%,-96%) scale(1)",this._comboToastTimer&&clearTimeout(this._comboToastTimer),this._comboToastTimer=setTimeout(()=>{this._comboToast.style.opacity="0",this._comboToast.style.transform="translate(-50%,-82%) scale(0.92)"},340))}updateProgress(e,t,n){const i=t>0?e/t*100:0;this._bar.style.width=i+"%",this._score.textContent=n,this._score.style.transform="scale(1.08)",setTimeout(()=>{this._score.style.transform="scale(1)"},120)}_overlayShow(){this._overlay.style.pointerEvents="auto",this._overlay.classList.add("show")}showGameOver(e){this._overlayShow(),this._overlay.style.background="rgba(255,107,157,0.18)",this._overlay.innerHTML=`
      <div class="sbp-card">
        <div class="sbp-title" style="font-size:38px;">Level Failed</div>
        <div style="margin-top:10px;font-size:14px;letter-spacing:2.5px;color:#888;">SCORE</div>
        <div style="font-size:54px;font-weight:900;line-height:1;margin-top:4px;color:#3A2C3A;">${e}</div>
        <button id="sbp-retry-btn" class="sbp-primary-btn">Try Again</button>
      </div>`;const t=this._overlay.querySelector("#sbp-retry-btn");t==null||t.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("game:restart"))})}showLevelComplete(e,t,n,i=1,s={}){this._overlayShow(),this._overlay.style.background="rgba(255,107,157,0.16)";const o=Math.max(0,s.broken|0),l=Math.max(0,s.maxCombo|0),c=Math.max(0,s.hardHits|0),u=Math.max(0,(s.ms||0)/1e3).toFixed(1);this._overlay.innerHTML=`
      <div class="sbp-card">
        <div class="sbp-title" style="font-size:42px;">Level Complete</div>
        <div style="margin-top:6px;font-size:18px;font-weight:800;color:#FF6B9D;letter-spacing:1px;">x${i} BONUS</div>
        <div style="margin-top:10px;font-size:14px;letter-spacing:2.5px;color:#888;">SCORE</div>
        <div style="font-size:48px;font-weight:900;line-height:1;color:#3A2C3A;">${e}</div>
        <div class="sbp-stats">
          <div class="sbp-stat-row"><span>Broken</span><span>${o}</span></div>
          <div class="sbp-stat-row"><span>Best Combo</span><span>x${l}</span></div>
          <div class="sbp-stat-row"><span>Time</span><span>${u}s</span></div>
          <div class="sbp-stat-row"><span>Mistakes</span><span>${c}</span></div>
        </div>
        <div style="margin-top:16px;font-size:18px;font-weight:800;color:#3A2C3A;">${t}/${n}</div>
        <div class="sbp-tap-pulse">TAP TO CONTINUE</div>
      </div>`;const d=()=>{window.dispatchEvent(new CustomEvent("game:next")),this._overlay.removeEventListener("pointerdown",d)};this._overlay.addEventListener("pointerdown",d)}showFinalVictory(e,t){this._overlayShow(),this._overlay.style.background="linear-gradient(180deg, rgba(255,196,214,0.55), rgba(254,194,96,0.4))",this._overlay.innerHTML=`
      <div class="sbp-card">
        <div class="sbp-title" style="font-size:46px;">You Win!</div>
        <div style="margin-top:6px;font-size:14px;letter-spacing:2.5px;color:#888;">${t}/${t} CLEARED</div>
        <div style="margin-top:14px;font-size:14px;letter-spacing:2.5px;color:#888;">FINAL SCORE</div>
        <div style="font-size:64px;font-weight:900;line-height:1;color:#3A2C3A;">${e}</div>
        <button id="sbp-final-btn" class="sbp-primary-btn">Play Again</button>
      </div>`;const n=this._overlay.querySelector("#sbp-final-btn");n==null||n.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("game:final-restart"))})}showStartScreen(){this._overlayShow(),this._overlay.style.background="rgba(255,196,214,0.32)",this._overlay.innerHTML=`
      <div class="sbp-card">
        <div class="sbp-title" style="font-size:54px;line-height:0.92;">Stack Ball</div>
        <div style="margin-top:10px;font-size:14px;letter-spacing:3px;color:#888;font-weight:700;">SOFT FLOW · FAST DROP</div>
        <div class="sbp-chip-row">
          <div class="sbp-chip">DRAG TO ROTATE</div>
          <div class="sbp-chip">HOLD TO BREAK</div>
          <div class="sbp-chip">BUILD COMBO</div>
        </div>
        <div class="sbp-tap-pulse">TAP ANYWHERE TO PLAY</div>
      </div>`}showPauseScreen(){this._overlayShow(),this._overlay.style.background="rgba(255,196,214,0.42)",this._overlay.innerHTML=`
      <div class="sbp-card">
        <div class="sbp-title" style="font-size:42px;">Paused</div>
        <button id="sbp-resume-btn" class="sbp-primary-btn">Resume</button>
      </div>`;const e=this._overlay.querySelector("#sbp-resume-btn");e==null||e.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("game:pause-toggle"))})}hidePauseScreen(){this._overlay.innerHTML="",this._overlay.style.background="transparent",this._overlay.style.pointerEvents="none",this._overlay.classList.remove("show")}flashDanger(){const e=document.createElement("div");e.style.cssText=`
      position:absolute;inset:0;
      background:radial-gradient(circle at 50% 60%, rgba(255,107,157,0.35), rgba(254,194,96,0.0));
      pointer-events:none;opacity:1;
      transition:opacity 0.45s ease-out;z-index:30;
    `,this.root.appendChild(e),requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.style.opacity="0"})}),setTimeout(()=>e.remove(),500)}}var fs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Pr={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(r){(function(){var e=function(){this.init()};e.prototype={init:function(){var a=this||t;return a._counter=1e3,a._html5AudioPool=[],a.html5PoolSize=10,a._codecs={},a._howls=[],a._muted=!1,a._volume=1,a._canPlayEvent="canplaythrough",a._navigator=typeof window<"u"&&window.navigator?window.navigator:null,a.masterGain=null,a.noAudio=!1,a.usingWebAudio=!0,a.autoSuspend=!0,a.ctx=null,a.autoUnlock=!0,a._setup(),a},volume:function(a){var h=this||t;if(a=parseFloat(a),h.ctx||d(),typeof a<"u"&&a>=0&&a<=1){if(h._volume=a,h._muted)return h;h.usingWebAudio&&h.masterGain.gain.setValueAtTime(a,t.ctx.currentTime);for(var f=0;f<h._howls.length;f++)if(!h._howls[f]._webAudio)for(var m=h._howls[f]._getSoundIds(),g=0;g<m.length;g++){var _=h._howls[f]._soundById(m[g]);_&&_._node&&(_._node.volume=_._volume*a)}return h}return h._volume},mute:function(a){var h=this||t;h.ctx||d(),h._muted=a,h.usingWebAudio&&h.masterGain.gain.setValueAtTime(a?0:h._volume,t.ctx.currentTime);for(var f=0;f<h._howls.length;f++)if(!h._howls[f]._webAudio)for(var m=h._howls[f]._getSoundIds(),g=0;g<m.length;g++){var _=h._howls[f]._soundById(m[g]);_&&_._node&&(_._node.muted=a?!0:_._muted)}return h},stop:function(){for(var a=this||t,h=0;h<a._howls.length;h++)a._howls[h].stop();return a},unload:function(){for(var a=this||t,h=a._howls.length-1;h>=0;h--)a._howls[h].unload();return a.usingWebAudio&&a.ctx&&typeof a.ctx.close<"u"&&(a.ctx.close(),a.ctx=null,d()),a},codecs:function(a){return(this||t)._codecs[a.replace(/^x-/,"")]},_setup:function(){var a=this||t;if(a.state=a.ctx&&a.ctx.state||"suspended",a._autoSuspend(),!a.usingWebAudio)if(typeof Audio<"u")try{var h=new Audio;typeof h.oncanplaythrough>"u"&&(a._canPlayEvent="canplay")}catch{a.noAudio=!0}else a.noAudio=!0;try{var h=new Audio;h.muted&&(a.noAudio=!0)}catch{}return a.noAudio||a._setupCodecs(),a},_setupCodecs:function(){var a=this||t,h=null;try{h=typeof Audio<"u"?new Audio:null}catch{return a}if(!h||typeof h.canPlayType!="function")return a;var f=h.canPlayType("audio/mpeg;").replace(/^no$/,""),m=a._navigator?a._navigator.userAgent:"",g=m.match(/OPR\/(\d+)/g),_=g&&parseInt(g[0].split("/")[1],10)<33,p=m.indexOf("Safari")!==-1&&m.indexOf("Chrome")===-1,x=m.match(/Version\/(.*?) /),v=p&&x&&parseInt(x[1],10)<15;return a._codecs={mp3:!!(!_&&(f||h.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!f,opus:!!h.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!h.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!h.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(h.canPlayType('audio/wav; codecs="1"')||h.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!h.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!h.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(h.canPlayType("audio/x-m4a;")||h.canPlayType("audio/m4a;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(h.canPlayType("audio/x-m4b;")||h.canPlayType("audio/m4b;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(h.canPlayType("audio/x-mp4;")||h.canPlayType("audio/mp4;")||h.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!v&&h.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!v&&h.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!h.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(h.canPlayType("audio/x-flac;")||h.canPlayType("audio/flac;")).replace(/^no$/,"")},a},_unlockAudio:function(){var a=this||t;if(!(a._audioUnlocked||!a.ctx)){a._audioUnlocked=!1,a.autoUnlock=!1,!a._mobileUnloaded&&a.ctx.sampleRate!==44100&&(a._mobileUnloaded=!0,a.unload()),a._scratchBuffer=a.ctx.createBuffer(1,1,22050);var h=function(f){for(;a._html5AudioPool.length<a.html5PoolSize;)try{var m=new Audio;m._unlocked=!0,a._releaseHtml5Audio(m)}catch{a.noAudio=!0;break}for(var g=0;g<a._howls.length;g++)if(!a._howls[g]._webAudio)for(var _=a._howls[g]._getSoundIds(),p=0;p<_.length;p++){var x=a._howls[g]._soundById(_[p]);x&&x._node&&!x._node._unlocked&&(x._node._unlocked=!0,x._node.load())}a._autoResume();var v=a.ctx.createBufferSource();v.buffer=a._scratchBuffer,v.connect(a.ctx.destination),typeof v.start>"u"?v.noteOn(0):v.start(0),typeof a.ctx.resume=="function"&&a.ctx.resume(),v.onended=function(){v.disconnect(0),a._audioUnlocked=!0,document.removeEventListener("touchstart",h,!0),document.removeEventListener("touchend",h,!0),document.removeEventListener("click",h,!0),document.removeEventListener("keydown",h,!0);for(var y=0;y<a._howls.length;y++)a._howls[y]._emit("unlock")}};return document.addEventListener("touchstart",h,!0),document.addEventListener("touchend",h,!0),document.addEventListener("click",h,!0),document.addEventListener("keydown",h,!0),a}},_obtainHtml5Audio:function(){var a=this||t;if(a._html5AudioPool.length)return a._html5AudioPool.pop();var h=new Audio().play();return h&&typeof Promise<"u"&&(h instanceof Promise||typeof h.then=="function")&&h.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(a){var h=this||t;return a._unlocked&&h._html5AudioPool.push(a),h},_autoSuspend:function(){var a=this;if(!(!a.autoSuspend||!a.ctx||typeof a.ctx.suspend>"u"||!t.usingWebAudio)){for(var h=0;h<a._howls.length;h++)if(a._howls[h]._webAudio){for(var f=0;f<a._howls[h]._sounds.length;f++)if(!a._howls[h]._sounds[f]._paused)return a}return a._suspendTimer&&clearTimeout(a._suspendTimer),a._suspendTimer=setTimeout(function(){if(a.autoSuspend){a._suspendTimer=null,a.state="suspending";var m=function(){a.state="suspended",a._resumeAfterSuspend&&(delete a._resumeAfterSuspend,a._autoResume())};a.ctx.suspend().then(m,m)}},3e4),a}},_autoResume:function(){var a=this;if(!(!a.ctx||typeof a.ctx.resume>"u"||!t.usingWebAudio))return a.state==="running"&&a.ctx.state!=="interrupted"&&a._suspendTimer?(clearTimeout(a._suspendTimer),a._suspendTimer=null):a.state==="suspended"||a.state==="running"&&a.ctx.state==="interrupted"?(a.ctx.resume().then(function(){a.state="running";for(var h=0;h<a._howls.length;h++)a._howls[h]._emit("resume")}),a._suspendTimer&&(clearTimeout(a._suspendTimer),a._suspendTimer=null)):a.state==="suspending"&&(a._resumeAfterSuspend=!0),a}};var t=new e,n=function(a){var h=this;if(!a.src||a.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}h.init(a)};n.prototype={init:function(a){var h=this;return t.ctx||d(),h._autoplay=a.autoplay||!1,h._format=typeof a.format!="string"?a.format:[a.format],h._html5=a.html5||!1,h._muted=a.mute||!1,h._loop=a.loop||!1,h._pool=a.pool||5,h._preload=typeof a.preload=="boolean"||a.preload==="metadata"?a.preload:!0,h._rate=a.rate||1,h._sprite=a.sprite||{},h._src=typeof a.src!="string"?a.src:[a.src],h._volume=a.volume!==void 0?a.volume:1,h._xhr={method:a.xhr&&a.xhr.method?a.xhr.method:"GET",headers:a.xhr&&a.xhr.headers?a.xhr.headers:null,withCredentials:a.xhr&&a.xhr.withCredentials?a.xhr.withCredentials:!1},h._duration=0,h._state="unloaded",h._sounds=[],h._endTimers={},h._queue=[],h._playLock=!1,h._onend=a.onend?[{fn:a.onend}]:[],h._onfade=a.onfade?[{fn:a.onfade}]:[],h._onload=a.onload?[{fn:a.onload}]:[],h._onloaderror=a.onloaderror?[{fn:a.onloaderror}]:[],h._onplayerror=a.onplayerror?[{fn:a.onplayerror}]:[],h._onpause=a.onpause?[{fn:a.onpause}]:[],h._onplay=a.onplay?[{fn:a.onplay}]:[],h._onstop=a.onstop?[{fn:a.onstop}]:[],h._onmute=a.onmute?[{fn:a.onmute}]:[],h._onvolume=a.onvolume?[{fn:a.onvolume}]:[],h._onrate=a.onrate?[{fn:a.onrate}]:[],h._onseek=a.onseek?[{fn:a.onseek}]:[],h._onunlock=a.onunlock?[{fn:a.onunlock}]:[],h._onresume=[],h._webAudio=t.usingWebAudio&&!h._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(h),h._autoplay&&h._queue.push({event:"play",action:function(){h.play()}}),h._preload&&h._preload!=="none"&&h.load(),h},load:function(){var a=this,h=null;if(t.noAudio){a._emit("loaderror",null,"No audio support.");return}typeof a._src=="string"&&(a._src=[a._src]);for(var f=0;f<a._src.length;f++){var m,g;if(a._format&&a._format[f])m=a._format[f];else{if(g=a._src[f],typeof g!="string"){a._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}m=/^data:audio\/([^;,]+);/i.exec(g),m||(m=/\.([^.]+)$/.exec(g.split("?",1)[0])),m&&(m=m[1].toLowerCase())}if(m||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),m&&t.codecs(m)){h=a._src[f];break}}if(!h){a._emit("loaderror",null,"No codec support for selected audio sources.");return}return a._src=h,a._state="loading",window.location.protocol==="https:"&&h.slice(0,5)==="http:"&&(a._html5=!0,a._webAudio=!1),new i(a),a._webAudio&&o(a),a},play:function(a,h){var f=this,m=null;if(typeof a=="number")m=a,a=null;else{if(typeof a=="string"&&f._state==="loaded"&&!f._sprite[a])return null;if(typeof a>"u"&&(a="__default",!f._playLock)){for(var g=0,_=0;_<f._sounds.length;_++)f._sounds[_]._paused&&!f._sounds[_]._ended&&(g++,m=f._sounds[_]._id);g===1?a=null:m=null}}var p=m?f._soundById(m):f._inactiveSound();if(!p)return null;if(m&&!a&&(a=p._sprite||"__default"),f._state!=="loaded"){p._sprite=a,p._ended=!1;var x=p._id;return f._queue.push({event:"play",action:function(){f.play(x)}}),x}if(m&&!p._paused)return h||f._loadQueue("play"),p._id;f._webAudio&&t._autoResume();var v=Math.max(0,p._seek>0?p._seek:f._sprite[a][0]/1e3),y=Math.max(0,(f._sprite[a][0]+f._sprite[a][1])/1e3-v),C=y*1e3/Math.abs(p._rate),E=f._sprite[a][0]/1e3,R=(f._sprite[a][0]+f._sprite[a][1])/1e3;p._sprite=a,p._ended=!1;var B=function(){p._paused=!1,p._seek=v,p._start=E,p._stop=R,p._loop=!!(p._loop||f._sprite[a][2])};if(v>=R){f._ended(p);return}var b=p._node;if(f._webAudio){var w=function(){f._playLock=!1,B(),f._refreshBuffer(p);var P=p._muted||f._muted?0:p._volume;b.gain.setValueAtTime(P,t.ctx.currentTime),p._playStart=t.ctx.currentTime,typeof b.bufferSource.start>"u"?p._loop?b.bufferSource.noteGrainOn(0,v,86400):b.bufferSource.noteGrainOn(0,v,y):p._loop?b.bufferSource.start(0,v,86400):b.bufferSource.start(0,v,y),C!==1/0&&(f._endTimers[p._id]=setTimeout(f._ended.bind(f,p),C)),h||setTimeout(function(){f._emit("play",p._id),f._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?w():(f._playLock=!0,f.once("resume",w),f._clearTimer(p._id))}else{var F=function(){b.currentTime=v,b.muted=p._muted||f._muted||t._muted||b.muted,b.volume=p._volume*t.volume(),b.playbackRate=p._rate;try{var P=b.play();if(P&&typeof Promise<"u"&&(P instanceof Promise||typeof P.then=="function")?(f._playLock=!0,B(),P.then(function(){f._playLock=!1,b._unlocked=!0,h?f._loadQueue():f._emit("play",p._id)}).catch(function(){f._playLock=!1,f._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),p._ended=!0,p._paused=!0})):h||(f._playLock=!1,B(),f._emit("play",p._id)),b.playbackRate=p._rate,b.paused){f._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}a!=="__default"||p._loop?f._endTimers[p._id]=setTimeout(f._ended.bind(f,p),C):(f._endTimers[p._id]=function(){f._ended(p),b.removeEventListener("ended",f._endTimers[p._id],!1)},b.addEventListener("ended",f._endTimers[p._id],!1))}catch(L){f._emit("playerror",p._id,L)}};b.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(b.src=f._src,b.load());var H=window&&window.ejecta||!b.readyState&&t._navigator.isCocoonJS;if(b.readyState>=3||H)F();else{f._playLock=!0,f._state="loading";var O=function(){f._state="loaded",F(),b.removeEventListener(t._canPlayEvent,O,!1)};b.addEventListener(t._canPlayEvent,O,!1),f._clearTimer(p._id)}}return p._id},pause:function(a){var h=this;if(h._state!=="loaded"||h._playLock)return h._queue.push({event:"pause",action:function(){h.pause(a)}}),h;for(var f=h._getSoundIds(a),m=0;m<f.length;m++){h._clearTimer(f[m]);var g=h._soundById(f[m]);if(g&&!g._paused&&(g._seek=h.seek(f[m]),g._rateSeek=0,g._paused=!0,h._stopFade(f[m]),g._node))if(h._webAudio){if(!g._node.bufferSource)continue;typeof g._node.bufferSource.stop>"u"?g._node.bufferSource.noteOff(0):g._node.bufferSource.stop(0),h._cleanBuffer(g._node)}else(!isNaN(g._node.duration)||g._node.duration===1/0)&&g._node.pause();arguments[1]||h._emit("pause",g?g._id:null)}return h},stop:function(a,h){var f=this;if(f._state!=="loaded"||f._playLock)return f._queue.push({event:"stop",action:function(){f.stop(a)}}),f;for(var m=f._getSoundIds(a),g=0;g<m.length;g++){f._clearTimer(m[g]);var _=f._soundById(m[g]);_&&(_._seek=_._start||0,_._rateSeek=0,_._paused=!0,_._ended=!0,f._stopFade(m[g]),_._node&&(f._webAudio?_._node.bufferSource&&(typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),f._cleanBuffer(_._node)):(!isNaN(_._node.duration)||_._node.duration===1/0)&&(_._node.currentTime=_._start||0,_._node.pause(),_._node.duration===1/0&&f._clearSound(_._node))),h||f._emit("stop",_._id))}return f},mute:function(a,h){var f=this;if(f._state!=="loaded"||f._playLock)return f._queue.push({event:"mute",action:function(){f.mute(a,h)}}),f;if(typeof h>"u")if(typeof a=="boolean")f._muted=a;else return f._muted;for(var m=f._getSoundIds(h),g=0;g<m.length;g++){var _=f._soundById(m[g]);_&&(_._muted=a,_._interval&&f._stopFade(_._id),f._webAudio&&_._node?_._node.gain.setValueAtTime(a?0:_._volume,t.ctx.currentTime):_._node&&(_._node.muted=t._muted?!0:a),f._emit("mute",_._id))}return f},volume:function(){var a=this,h=arguments,f,m;if(h.length===0)return a._volume;if(h.length===1||h.length===2&&typeof h[1]>"u"){var g=a._getSoundIds(),_=g.indexOf(h[0]);_>=0?m=parseInt(h[0],10):f=parseFloat(h[0])}else h.length>=2&&(f=parseFloat(h[0]),m=parseInt(h[1],10));var p;if(typeof f<"u"&&f>=0&&f<=1){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"volume",action:function(){a.volume.apply(a,h)}}),a;typeof m>"u"&&(a._volume=f),m=a._getSoundIds(m);for(var x=0;x<m.length;x++)p=a._soundById(m[x]),p&&(p._volume=f,h[2]||a._stopFade(m[x]),a._webAudio&&p._node&&!p._muted?p._node.gain.setValueAtTime(f,t.ctx.currentTime):p._node&&!p._muted&&(p._node.volume=f*t.volume()),a._emit("volume",p._id))}else return p=m?a._soundById(m):a._sounds[0],p?p._volume:0;return a},fade:function(a,h,f,m){var g=this;if(g._state!=="loaded"||g._playLock)return g._queue.push({event:"fade",action:function(){g.fade(a,h,f,m)}}),g;a=Math.min(Math.max(0,parseFloat(a)),1),h=Math.min(Math.max(0,parseFloat(h)),1),f=parseFloat(f),g.volume(a,m);for(var _=g._getSoundIds(m),p=0;p<_.length;p++){var x=g._soundById(_[p]);if(x){if(m||g._stopFade(_[p]),g._webAudio&&!x._muted){var v=t.ctx.currentTime,y=v+f/1e3;x._volume=a,x._node.gain.setValueAtTime(a,v),x._node.gain.linearRampToValueAtTime(h,y)}g._startFadeInterval(x,a,h,f,_[p],typeof m>"u")}}return g},_startFadeInterval:function(a,h,f,m,g,_){var p=this,x=h,v=f-h,y=Math.abs(v/.01),C=Math.max(4,y>0?m/y:m),E=Date.now();a._fadeTo=f,a._interval=setInterval(function(){var R=(Date.now()-E)/m;E=Date.now(),x+=v*R,x=Math.round(x*100)/100,v<0?x=Math.max(f,x):x=Math.min(f,x),p._webAudio?a._volume=x:p.volume(x,a._id,!0),_&&(p._volume=x),(f<h&&x<=f||f>h&&x>=f)&&(clearInterval(a._interval),a._interval=null,a._fadeTo=null,p.volume(f,a._id),p._emit("fade",a._id))},C)},_stopFade:function(a){var h=this,f=h._soundById(a);return f&&f._interval&&(h._webAudio&&f._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(f._interval),f._interval=null,h.volume(f._fadeTo,a),f._fadeTo=null,h._emit("fade",a)),h},loop:function(){var a=this,h=arguments,f,m,g;if(h.length===0)return a._loop;if(h.length===1)if(typeof h[0]=="boolean")f=h[0],a._loop=f;else return g=a._soundById(parseInt(h[0],10)),g?g._loop:!1;else h.length===2&&(f=h[0],m=parseInt(h[1],10));for(var _=a._getSoundIds(m),p=0;p<_.length;p++)g=a._soundById(_[p]),g&&(g._loop=f,a._webAudio&&g._node&&g._node.bufferSource&&(g._node.bufferSource.loop=f,f&&(g._node.bufferSource.loopStart=g._start||0,g._node.bufferSource.loopEnd=g._stop,a.playing(_[p])&&(a.pause(_[p],!0),a.play(_[p],!0)))));return a},rate:function(){var a=this,h=arguments,f,m;if(h.length===0)m=a._sounds[0]._id;else if(h.length===1){var g=a._getSoundIds(),_=g.indexOf(h[0]);_>=0?m=parseInt(h[0],10):f=parseFloat(h[0])}else h.length===2&&(f=parseFloat(h[0]),m=parseInt(h[1],10));var p;if(typeof f=="number"){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"rate",action:function(){a.rate.apply(a,h)}}),a;typeof m>"u"&&(a._rate=f),m=a._getSoundIds(m);for(var x=0;x<m.length;x++)if(p=a._soundById(m[x]),p){a.playing(m[x])&&(p._rateSeek=a.seek(m[x]),p._playStart=a._webAudio?t.ctx.currentTime:p._playStart),p._rate=f,a._webAudio&&p._node&&p._node.bufferSource?p._node.bufferSource.playbackRate.setValueAtTime(f,t.ctx.currentTime):p._node&&(p._node.playbackRate=f);var v=a.seek(m[x]),y=(a._sprite[p._sprite][0]+a._sprite[p._sprite][1])/1e3-v,C=y*1e3/Math.abs(p._rate);(a._endTimers[m[x]]||!p._paused)&&(a._clearTimer(m[x]),a._endTimers[m[x]]=setTimeout(a._ended.bind(a,p),C)),a._emit("rate",p._id)}}else return p=a._soundById(m),p?p._rate:a._rate;return a},seek:function(){var a=this,h=arguments,f,m;if(h.length===0)a._sounds.length&&(m=a._sounds[0]._id);else if(h.length===1){var g=a._getSoundIds(),_=g.indexOf(h[0]);_>=0?m=parseInt(h[0],10):a._sounds.length&&(m=a._sounds[0]._id,f=parseFloat(h[0]))}else h.length===2&&(f=parseFloat(h[0]),m=parseInt(h[1],10));if(typeof m>"u")return 0;if(typeof f=="number"&&(a._state!=="loaded"||a._playLock))return a._queue.push({event:"seek",action:function(){a.seek.apply(a,h)}}),a;var p=a._soundById(m);if(p)if(typeof f=="number"&&f>=0){var x=a.playing(m);x&&a.pause(m,!0),p._seek=f,p._ended=!1,a._clearTimer(m),!a._webAudio&&p._node&&!isNaN(p._node.duration)&&(p._node.currentTime=f);var v=function(){x&&a.play(m,!0),a._emit("seek",m)};if(x&&!a._webAudio){var y=function(){a._playLock?setTimeout(y,0):v()};setTimeout(y,0)}else v()}else if(a._webAudio){var C=a.playing(m)?t.ctx.currentTime-p._playStart:0,E=p._rateSeek?p._rateSeek-p._seek:0;return p._seek+(E+C*Math.abs(p._rate))}else return p._node.currentTime;return a},playing:function(a){var h=this;if(typeof a=="number"){var f=h._soundById(a);return f?!f._paused:!1}for(var m=0;m<h._sounds.length;m++)if(!h._sounds[m]._paused)return!0;return!1},duration:function(a){var h=this,f=h._duration,m=h._soundById(a);return m&&(f=h._sprite[m._sprite][1]/1e3),f},state:function(){return this._state},unload:function(){for(var a=this,h=a._sounds,f=0;f<h.length;f++)h[f]._paused||a.stop(h[f]._id),a._webAudio||(a._clearSound(h[f]._node),h[f]._node.removeEventListener("error",h[f]._errorFn,!1),h[f]._node.removeEventListener(t._canPlayEvent,h[f]._loadFn,!1),h[f]._node.removeEventListener("ended",h[f]._endFn,!1),t._releaseHtml5Audio(h[f]._node)),delete h[f]._node,a._clearTimer(h[f]._id);var m=t._howls.indexOf(a);m>=0&&t._howls.splice(m,1);var g=!0;for(f=0;f<t._howls.length;f++)if(t._howls[f]._src===a._src||a._src.indexOf(t._howls[f]._src)>=0){g=!1;break}return s&&g&&delete s[a._src],t.noAudio=!1,a._state="unloaded",a._sounds=[],a=null,null},on:function(a,h,f,m){var g=this,_=g["_on"+a];return typeof h=="function"&&_.push(m?{id:f,fn:h,once:m}:{id:f,fn:h}),g},off:function(a,h,f){var m=this,g=m["_on"+a],_=0;if(typeof h=="number"&&(f=h,h=null),h||f)for(_=0;_<g.length;_++){var p=f===g[_].id;if(h===g[_].fn&&p||!h&&p){g.splice(_,1);break}}else if(a)m["_on"+a]=[];else{var x=Object.keys(m);for(_=0;_<x.length;_++)x[_].indexOf("_on")===0&&Array.isArray(m[x[_]])&&(m[x[_]]=[])}return m},once:function(a,h,f){var m=this;return m.on(a,h,f,1),m},_emit:function(a,h,f){for(var m=this,g=m["_on"+a],_=g.length-1;_>=0;_--)(!g[_].id||g[_].id===h||a==="load")&&(setTimeout((function(p){p.call(this,h,f)}).bind(m,g[_].fn),0),g[_].once&&m.off(a,g[_].fn,g[_].id));return m._loadQueue(a),m},_loadQueue:function(a){var h=this;if(h._queue.length>0){var f=h._queue[0];f.event===a&&(h._queue.shift(),h._loadQueue()),a||f.action()}return h},_ended:function(a){var h=this,f=a._sprite;if(!h._webAudio&&a._node&&!a._node.paused&&!a._node.ended&&a._node.currentTime<a._stop)return setTimeout(h._ended.bind(h,a),100),h;var m=!!(a._loop||h._sprite[f][2]);if(h._emit("end",a._id),!h._webAudio&&m&&h.stop(a._id,!0).play(a._id),h._webAudio&&m){h._emit("play",a._id),a._seek=a._start||0,a._rateSeek=0,a._playStart=t.ctx.currentTime;var g=(a._stop-a._start)*1e3/Math.abs(a._rate);h._endTimers[a._id]=setTimeout(h._ended.bind(h,a),g)}return h._webAudio&&!m&&(a._paused=!0,a._ended=!0,a._seek=a._start||0,a._rateSeek=0,h._clearTimer(a._id),h._cleanBuffer(a._node),t._autoSuspend()),!h._webAudio&&!m&&h.stop(a._id,!0),h},_clearTimer:function(a){var h=this;if(h._endTimers[a]){if(typeof h._endTimers[a]!="function")clearTimeout(h._endTimers[a]);else{var f=h._soundById(a);f&&f._node&&f._node.removeEventListener("ended",h._endTimers[a],!1)}delete h._endTimers[a]}return h},_soundById:function(a){for(var h=this,f=0;f<h._sounds.length;f++)if(a===h._sounds[f]._id)return h._sounds[f];return null},_inactiveSound:function(){var a=this;a._drain();for(var h=0;h<a._sounds.length;h++)if(a._sounds[h]._ended)return a._sounds[h].reset();return new i(a)},_drain:function(){var a=this,h=a._pool,f=0,m=0;if(!(a._sounds.length<h)){for(m=0;m<a._sounds.length;m++)a._sounds[m]._ended&&f++;for(m=a._sounds.length-1;m>=0;m--){if(f<=h)return;a._sounds[m]._ended&&(a._webAudio&&a._sounds[m]._node&&a._sounds[m]._node.disconnect(0),a._sounds.splice(m,1),f--)}}},_getSoundIds:function(a){var h=this;if(typeof a>"u"){for(var f=[],m=0;m<h._sounds.length;m++)f.push(h._sounds[m]._id);return f}else return[a]},_refreshBuffer:function(a){var h=this;return a._node.bufferSource=t.ctx.createBufferSource(),a._node.bufferSource.buffer=s[h._src],a._panner?a._node.bufferSource.connect(a._panner):a._node.bufferSource.connect(a._node),a._node.bufferSource.loop=a._loop,a._loop&&(a._node.bufferSource.loopStart=a._start||0,a._node.bufferSource.loopEnd=a._stop||0),a._node.bufferSource.playbackRate.setValueAtTime(a._rate,t.ctx.currentTime),h},_cleanBuffer:function(a){var h=this,f=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!a.bufferSource)return h;if(t._scratchBuffer&&a.bufferSource&&(a.bufferSource.onended=null,a.bufferSource.disconnect(0),f))try{a.bufferSource.buffer=t._scratchBuffer}catch{}return a.bufferSource=null,h},_clearSound:function(a){var h=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);h||(a.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var i=function(a){this._parent=a,this.init()};i.prototype={init:function(){var a=this,h=a._parent;return a._muted=h._muted,a._loop=h._loop,a._volume=h._volume,a._rate=h._rate,a._seek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,h._sounds.push(a),a.create(),a},create:function(){var a=this,h=a._parent,f=t._muted||a._muted||a._parent._muted?0:a._volume;return h._webAudio?(a._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),a._node.gain.setValueAtTime(f,t.ctx.currentTime),a._node.paused=!0,a._node.connect(t.masterGain)):t.noAudio||(a._node=t._obtainHtml5Audio(),a._errorFn=a._errorListener.bind(a),a._node.addEventListener("error",a._errorFn,!1),a._loadFn=a._loadListener.bind(a),a._node.addEventListener(t._canPlayEvent,a._loadFn,!1),a._endFn=a._endListener.bind(a),a._node.addEventListener("ended",a._endFn,!1),a._node.src=h._src,a._node.preload=h._preload===!0?"auto":h._preload,a._node.volume=f*t.volume(),a._node.load()),a},reset:function(){var a=this,h=a._parent;return a._muted=h._muted,a._loop=h._loop,a._volume=h._volume,a._rate=h._rate,a._seek=0,a._rateSeek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,a},_errorListener:function(){var a=this;a._parent._emit("loaderror",a._id,a._node.error?a._node.error.code:0),a._node.removeEventListener("error",a._errorFn,!1)},_loadListener:function(){var a=this,h=a._parent;h._duration=Math.ceil(a._node.duration*10)/10,Object.keys(h._sprite).length===0&&(h._sprite={__default:[0,h._duration*1e3]}),h._state!=="loaded"&&(h._state="loaded",h._emit("load"),h._loadQueue()),a._node.removeEventListener(t._canPlayEvent,a._loadFn,!1)},_endListener:function(){var a=this,h=a._parent;h._duration===1/0&&(h._duration=Math.ceil(a._node.duration*10)/10,h._sprite.__default[1]===1/0&&(h._sprite.__default[1]=h._duration*1e3),h._ended(a)),a._node.removeEventListener("ended",a._endFn,!1)}};var s={},o=function(a){var h=a._src;if(s[h]){a._duration=s[h].duration,u(a);return}if(/^data:[^;]+;base64,/.test(h)){for(var f=atob(h.split(",")[1]),m=new Uint8Array(f.length),g=0;g<f.length;++g)m[g]=f.charCodeAt(g);c(m.buffer,a)}else{var _=new XMLHttpRequest;_.open(a._xhr.method,h,!0),_.withCredentials=a._xhr.withCredentials,_.responseType="arraybuffer",a._xhr.headers&&Object.keys(a._xhr.headers).forEach(function(p){_.setRequestHeader(p,a._xhr.headers[p])}),_.onload=function(){var p=(_.status+"")[0];if(p!=="0"&&p!=="2"&&p!=="3"){a._emit("loaderror",null,"Failed loading audio file with status: "+_.status+".");return}c(_.response,a)},_.onerror=function(){a._webAudio&&(a._html5=!0,a._webAudio=!1,a._sounds=[],delete s[h],a.load())},l(_)}},l=function(a){try{a.send()}catch{a.onerror()}},c=function(a,h){var f=function(){h._emit("loaderror",null,"Decoding audio data failed.")},m=function(g){g&&h._sounds.length>0?(s[h._src]=g,u(h,g)):f()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(a).then(m).catch(f):t.ctx.decodeAudioData(a,m,f)},u=function(a,h){h&&!a._duration&&(a._duration=h.duration),Object.keys(a._sprite).length===0&&(a._sprite={__default:[0,a._duration*1e3]}),a._state!=="loaded"&&(a._state="loaded",a._emit("load"),a._loadQueue())},d=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var a=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),h=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),f=h?parseInt(h[1],10):null;if(a&&f&&f<9){var m=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!m&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};r.Howler=t,r.Howl=n,typeof fs<"u"?(fs.HowlerGlobal=e,fs.Howler=t,fs.Howl=n,fs.Sound=i):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=i)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var i=n._howls.length-1;i>=0;i--)n._howls[i].stereo(t);return n},HowlerGlobal.prototype.pos=function(t,n,i){var s=this;if(!s.ctx||!s.ctx.listener)return s;if(n=typeof n!="number"?s._pos[1]:n,i=typeof i!="number"?s._pos[2]:i,typeof t=="number")s._pos=[t,n,i],typeof s.ctx.listener.positionX<"u"?(s.ctx.listener.positionX.setTargetAtTime(s._pos[0],Howler.ctx.currentTime,.1),s.ctx.listener.positionY.setTargetAtTime(s._pos[1],Howler.ctx.currentTime,.1),s.ctx.listener.positionZ.setTargetAtTime(s._pos[2],Howler.ctx.currentTime,.1)):s.ctx.listener.setPosition(s._pos[0],s._pos[1],s._pos[2]);else return s._pos;return s},HowlerGlobal.prototype.orientation=function(t,n,i,s,o,l){var c=this;if(!c.ctx||!c.ctx.listener)return c;var u=c._orientation;if(n=typeof n!="number"?u[1]:n,i=typeof i!="number"?u[2]:i,s=typeof s!="number"?u[3]:s,o=typeof o!="number"?u[4]:o,l=typeof l!="number"?u[5]:l,typeof t=="number")c._orientation=[t,n,i,s,o,l],typeof c.ctx.listener.forwardX<"u"?(c.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),c.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),c.ctx.listener.forwardZ.setTargetAtTime(i,Howler.ctx.currentTime,.1),c.ctx.listener.upX.setTargetAtTime(s,Howler.ctx.currentTime,.1),c.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),c.ctx.listener.upZ.setTargetAtTime(l,Howler.ctx.currentTime,.1)):c.ctx.listener.setOrientation(t,n,i,s,o,l);else return u;return c},Howl.prototype.init=function(t){return function(n){var i=this;return i._orientation=n.orientation||[1,0,0],i._stereo=n.stereo||null,i._pos=n.pos||null,i._pannerAttr={coneInnerAngle:typeof n.coneInnerAngle<"u"?n.coneInnerAngle:360,coneOuterAngle:typeof n.coneOuterAngle<"u"?n.coneOuterAngle:360,coneOuterGain:typeof n.coneOuterGain<"u"?n.coneOuterGain:0,distanceModel:typeof n.distanceModel<"u"?n.distanceModel:"inverse",maxDistance:typeof n.maxDistance<"u"?n.maxDistance:1e4,panningModel:typeof n.panningModel<"u"?n.panningModel:"HRTF",refDistance:typeof n.refDistance<"u"?n.refDistance:1,rolloffFactor:typeof n.rolloffFactor<"u"?n.rolloffFactor:1},i._onstereo=n.onstereo?[{fn:n.onstereo}]:[],i._onpos=n.onpos?[{fn:n.onpos}]:[],i._onorientation=n.onorientation?[{fn:n.onorientation}]:[],t.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,n){var i=this;if(!i._webAudio)return i;if(i._state!=="loaded")return i._queue.push({event:"stereo",action:function(){i.stereo(t,n)}}),i;var s=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof n>"u")if(typeof t=="number")i._stereo=t,i._pos=[t,0,0];else return i._stereo;for(var o=i._getSoundIds(n),l=0;l<o.length;l++){var c=i._soundById(o[l]);if(c)if(typeof t=="number")c._stereo=t,c._pos=[t,0,0],c._node&&(c._pannerAttr.panningModel="equalpower",(!c._panner||!c._panner.pan)&&e(c,s),s==="spatial"?typeof c._panner.positionX<"u"?(c._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),c._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),c._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):c._panner.setPosition(t,0,0):c._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),i._emit("stereo",c._id);else return c._stereo}return i},Howl.prototype.pos=function(t,n,i,s){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(t,n,i,s)}}),o;if(n=typeof n!="number"?0:n,i=typeof i!="number"?-.5:i,typeof s>"u")if(typeof t=="number")o._pos=[t,n,i];else return o._pos;for(var l=o._getSoundIds(s),c=0;c<l.length;c++){var u=o._soundById(l[c]);if(u)if(typeof t=="number")u._pos=[t,n,i],u._node&&((!u._panner||u._panner.pan)&&e(u,"spatial"),typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(i,Howler.ctx.currentTime)):u._panner.setPosition(t,n,i)),o._emit("pos",u._id);else return u._pos}return o},Howl.prototype.orientation=function(t,n,i,s){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(t,n,i,s)}}),o;if(n=typeof n!="number"?o._orientation[1]:n,i=typeof i!="number"?o._orientation[2]:i,typeof s>"u")if(typeof t=="number")o._orientation=[t,n,i];else return o._orientation;for(var l=o._getSoundIds(s),c=0;c<l.length;c++){var u=o._soundById(l[c]);if(u)if(typeof t=="number")u._orientation=[t,n,i],u._node&&(u._panner||(u._pos||(u._pos=o._pos||[0,0,-.5]),e(u,"spatial")),typeof u._panner.orientationX<"u"?(u._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),u._panner.orientationZ.setValueAtTime(i,Howler.ctx.currentTime)):u._panner.setOrientation(t,n,i)),o._emit("orientation",u._id);else return u._orientation}return o},Howl.prototype.pannerAttr=function(){var t=this,n=arguments,i,s,o;if(!t._webAudio)return t;if(n.length===0)return t._pannerAttr;if(n.length===1)if(typeof n[0]=="object")i=n[0],typeof s>"u"&&(i.pannerAttr||(i.pannerAttr={coneInnerAngle:i.coneInnerAngle,coneOuterAngle:i.coneOuterAngle,coneOuterGain:i.coneOuterGain,distanceModel:i.distanceModel,maxDistance:i.maxDistance,refDistance:i.refDistance,rolloffFactor:i.rolloffFactor,panningModel:i.panningModel}),t._pannerAttr={coneInnerAngle:typeof i.pannerAttr.coneInnerAngle<"u"?i.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof i.pannerAttr.coneOuterAngle<"u"?i.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof i.pannerAttr.coneOuterGain<"u"?i.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof i.pannerAttr.distanceModel<"u"?i.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof i.pannerAttr.maxDistance<"u"?i.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof i.pannerAttr.refDistance<"u"?i.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof i.pannerAttr.rolloffFactor<"u"?i.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof i.pannerAttr.panningModel<"u"?i.pannerAttr.panningModel:t._panningModel});else return o=t._soundById(parseInt(n[0],10)),o?o._pannerAttr:t._pannerAttr;else n.length===2&&(i=n[0],s=parseInt(n[1],10));for(var l=t._getSoundIds(s),c=0;c<l.length;c++)if(o=t._soundById(l[c]),o){var u=o._pannerAttr;u={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:u.coneInnerAngle,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:u.coneOuterAngle,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:u.coneOuterGain,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:u.distanceModel,maxDistance:typeof i.maxDistance<"u"?i.maxDistance:u.maxDistance,refDistance:typeof i.refDistance<"u"?i.refDistance:u.refDistance,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:u.rolloffFactor,panningModel:typeof i.panningModel<"u"?i.panningModel:u.panningModel};var d=o._panner;d||(o._pos||(o._pos=t._pos||[0,0,-.5]),e(o,"spatial"),d=o._panner),d.coneInnerAngle=u.coneInnerAngle,d.coneOuterAngle=u.coneOuterAngle,d.coneOuterGain=u.coneOuterGain,d.distanceModel=u.distanceModel,d.maxDistance=u.maxDistance,d.refDistance=u.refDistance,d.rolloffFactor=u.rolloffFactor,d.panningModel=u.panningModel}return t},Sound.prototype.init=function(t){return function(){var n=this,i=n._parent;n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,t.call(this),n._stereo?i.stereo(n._stereo):n._pos&&i.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var n=this,i=n._parent;return n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,n._stereo?i.stereo(n._stereo):n._pos?i.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,i._refreshBuffer(n)),t.call(this)}}(Sound.prototype.reset);var e=function(t,n){n=n||"spatial",n==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()})(Pr);Pr.Howler.autoUnlock=!0;const wc="stackball:muted";class Zx{constructor(){var n;this.sounds={},this._bgmStarted=!1,this._unlocked=!1;let e=!1;try{e=((n=window.localStorage)==null?void 0:n.getItem(wc))==="1"}catch{}this._muted=e,this._ctx=null,this._masterGain=null,this._bgmGain=null,this._bgmNodes=[],this._bgmActive=!1,this._bgmDuckTimer=null,this._loadIfPresent("break","/sounds/break.mp3",{volume:.5}),this._loadIfPresent("bounce","/sounds/bounce.mp3",{volume:.45}),this._loadIfPresent("death","/sounds/death.mp3",{volume:.65}),this._loadIfPresent("win","/sounds/win.mp3",{volume:.55}),this._loadIfPresent("bgm","/sounds/bgm.mp3",{loop:!0,volume:.25}),this._unlockAudio=this._unlockAudio.bind(this);const t={once:!0,passive:!0};window.addEventListener("touchstart",this._unlockAudio,t),window.addEventListener("pointerdown",this._unlockAudio,t),window.addEventListener("keydown",this._unlockAudio,{once:!0})}async _loadIfPresent(e,t,n={}){this.sounds[e]=void 0;try{if(!(await fetch(t,{method:"HEAD"})).ok){this.sounds[e]=null;return}}catch{this.sounds[e]=null;return}this._loadSound(e,t,n)}_loadSound(e,t,n={}){try{const i=new Pr.Howl({src:[t],preload:!0,onloaderror:()=>{this.sounds[e]=null},onplayerror:()=>{this.sounds[e]=null},...n});this.sounds[e]=i}catch{this.sounds[e]=null}}_ensureCtx(){if(this._ctx)return this._ctx;const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;try{this._ctx=new e,this._masterGain=this._ctx.createGain(),this._masterGain.gain.value=this._muted?0:1,this._masterGain.connect(this._ctx.destination)}catch{this._ctx=null}return this._ctx}_unlockAudio(){if(this._unlocked)return;this._unlocked=!0;const e=this._ensureCtx();e&&e.state==="suspended"&&e.resume().catch(()=>{})}play(e,t=1){var i;const n=this.sounds[e];if(n)try{const s=n.play();if(s!==void 0&&t!==1){const o=Math.max(.7,Math.min(1.5,t));(i=n.rate)==null||i.call(n,o,s)}return}catch{}this._synthFallback(e,t)}_synthFallback(e,t=1){const n=this._ensureCtx();if(!n||!this._masterGain)return;n.state==="suspended"&&n.resume().catch(()=>{});const i=this._masterGain,s=Math.max(.6,Math.min(2,t));switch(e){case"break":return this._synthBreak(n,i,s);case"bounce":return this._synthBounce(n,i,s);case"death":return this._synthDeath(n,i);case"win":return this._synthWin(n,i);default:return}}_synthBreak(e,t,n){const i=[1,1.125,1.25,1.5,1.6666666666666667];this._breakStep=((this._breakStep??-1)+1)%i.length;const s=i[this._breakStep],o=e.currentTime,l=Math.max(.85,Math.min(1.25,n))*s,c=e.createGain();c.gain.setValueAtTime(0,o),c.gain.linearRampToValueAtTime(.3,o+.005),c.gain.exponentialRampToValueAtTime(.001,o+.18),c.connect(t);const u=e.createOscillator();u.type="triangle",u.frequency.setValueAtTime(880*l,o),u.frequency.exponentialRampToValueAtTime(660*l,o+.15);const d=e.createGain();d.gain.value=.65,u.connect(d).connect(c),u.start(o),u.stop(o+.2);const a=e.createOscillator();a.type="sine",a.frequency.value=1320*l;const h=e.createGain();h.gain.setValueAtTime(0,o),h.gain.linearRampToValueAtTime(.1,o+.004),h.gain.exponentialRampToValueAtTime(.001,o+.1),a.connect(h).connect(c),a.start(o),a.stop(o+.12)}_synthBounce(e,t,n){const i=e.currentTime,s=e.createGain();s.gain.setValueAtTime(0,i),s.gain.linearRampToValueAtTime(.42,i+.004),s.gain.exponentialRampToValueAtTime(.001,i+.13),s.connect(t);const o=e.createOscillator();o.type="sine",o.frequency.setValueAtTime(110,i),o.frequency.exponentialRampToValueAtTime(80,i+.1),o.connect(s),o.start(i),o.stop(i+.14);const l=e.createBuffer(1,Math.floor(e.sampleRate*.012),e.sampleRate),c=l.getChannelData(0);for(let h=0;h<c.length;h+=1)c[h]=Math.random()*2-1;const u=e.createBufferSource();u.buffer=l;const d=e.createBiquadFilter();d.type="lowpass",d.frequency.value=320;const a=e.createGain();a.gain.value=.18,u.connect(d).connect(a).connect(s),u.start(i),u.stop(i+.014)}_synthDeath(e,t){const n=e.currentTime,i=e.createGain();i.gain.setValueAtTime(0,n),i.gain.linearRampToValueAtTime(.3,n+.04),i.gain.exponentialRampToValueAtTime(.001,n+.55),i.connect(t);const s=e.createOscillator();s.type="triangle",s.frequency.setValueAtTime(440,n),s.frequency.exponentialRampToValueAtTime(220,n+.2),s.frequency.exponentialRampToValueAtTime(110,n+.5),s.connect(i),s.start(n),s.stop(n+.55);const o=e.createOscillator();o.type="sine",o.frequency.setValueAtTime(220,n),o.frequency.exponentialRampToValueAtTime(55,n+.5);const l=e.createGain();l.gain.value=.45,o.connect(l).connect(i),o.start(n),o.stop(n+.55)}_synthWin(e,t){const n=e.currentTime;[523.25,659.25,783.99,1046.5].forEach((s,o)=>{const l=n+o*.085,c=e.createOscillator();c.type="triangle",c.frequency.value=s;const u=e.createGain();u.gain.setValueAtTime(1e-4,l),u.gain.exponentialRampToValueAtTime(.32,l+.012),u.gain.exponentialRampToValueAtTime(.001,l+.22),c.connect(u).connect(t),c.start(l),c.stop(l+.24)})}startBGM(){if(this._bgmStarted)return;this._bgmStarted=!0;const e=this.sounds.bgm;if(e)try{e.play();return}catch{}this._startSynthBGM()}_startSynthBGM(){if(this._bgmActive)return;const e=this._ensureCtx();if(!e||!this._masterGain)return;const t=e.createGain();t.gain.value=0,t.gain.linearRampToValueAtTime(.085,e.currentTime+2),t.connect(this._masterGain),this._bgmGain=t;const n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=380,n.Q.value=.7;const i=e.createOscillator();i.frequency.value=.05;const s=e.createGain();s.gain.value=120,i.connect(s).connect(n.frequency),i.start();const o=[];[131,196,262,392].forEach((l,c)=>{const u=e.createOscillator();u.type="sine",u.frequency.value=l;const d=e.createGain();d.gain.value=c===0?.55:c===3?.1:.22,u.connect(d).connect(n),u.start(),o.push(u,d)}),n.connect(t),this._bgmNodes=[...o,i,s,n,t],this._bgmActive=!0}stopBGM(){var t,n;const e=this.sounds.bgm;if(e)try{e.stop()}catch{}if(this._bgmActive){for(const i of this._bgmNodes){try{(t=i.stop)==null||t.call(i)}catch{}try{(n=i.disconnect)==null||n.call(i)}catch{}}this._bgmNodes=[],this._bgmActive=!1}this._bgmGain=null,this._bgmStarted=!1}duckBGM(e=.35,t=400,n=800){const i=t+n,s=this.sounds.bgm;if(s&&this._bgmStarted)try{s.volume(.25*e),this._bgmDuckTimer&&clearTimeout(this._bgmDuckTimer),this._bgmDuckTimer=setTimeout(()=>{try{s.volume(.25)}catch{}},i)}catch{}if(this._bgmGain&&this._ctx){const o=this._ctx.currentTime,l=this._bgmGain.gain,c=l.value,u=.085;try{l.cancelScheduledValues(o),l.setValueAtTime(c,o),l.linearRampToValueAtTime(u*e,o+t/1e3),l.linearRampToValueAtTime(u,o+i/1e3)}catch{}}}setMuted(e){var t;this._muted=!!e;try{Pr.Howler.mute(this._muted)}catch{}this._masterGain&&(this._masterGain.gain.value=this._muted?0:1);try{(t=window.localStorage)==null||t.setItem(wc,this._muted?"1":"0")}catch{}}toggleMute(){return this.setMuted(!this._muted),this._muted}isMuted(){return!!this._muted}}console.log("%c✨ STACK BALL PRO v5.0 — MULTI-AGENT POLISH ✨","color: #FF6B9D; font-weight: bold; font-size: 18px;");console.log("%c🎯 Physics, design, audio, UX, QA passes applied","color: #C44569; font-weight: bold;");function $x(){const r=globalThis==null?void 0:globalThis.performance;if(!r)return;const e=()=>{},t=["mark","measure","clearMarks","clearMeasures"];for(const i of t)if(typeof r[i]!="function")try{Object.defineProperty(r,i,{value:e,writable:!0,configurable:!0})}catch{try{r[i]=e}catch{}}const n=globalThis==null?void 0:globalThis.ugt;if(n&&typeof n=="object"&&typeof n.clearMarks!="function")try{n.clearMarks=e}catch{}}async function Kx(){var p,x;$x();const r=document.getElementById("app"),e=document.getElementById("ui"),t=new e0(r),n=new Ax,i=new Cx(t.renderer.domElement),s=new Zx,o=new Yx(t.scene3D),l=new qx(t.scene3D,n),c=new Wx(t.scene3D,n.world,n),u=new Nx(t.scene3D,n,1);u._particles=o;const d=new jx(e);c.particleSystem=o,c.buildLevel(Rr(1));const a=new Rs(u,c,l,d,s,o);window.__gm=a,u.setBreakInputSource(()=>a.state===st.PLAYING&&i.isPressing),a.renderer=t,(p=s.isMuted)!=null&&p.call(s)&&((x=d.setMuteState)==null||x.call(d,!0)),t.setupCamera(u.mesh),window.addEventListener("game:restart",()=>a.restart()),window.addEventListener("game:next",()=>a.nextLevel()),window.addEventListener("game:final-restart",()=>{a.level=1,a.score=0,a.restart()}),window.addEventListener("game:pause-toggle",()=>a.togglePause()),window.addEventListener("game:mute-toggle",()=>{var y;const v=s.toggleMute();(y=d.setMuteState)==null||y.call(d,v)}),window.addEventListener("keydown",v=>{var y;if((v.key==="p"||v.key==="P"||v.key==="Escape")&&(a.state===st.PLAYING||a.state===st.PAUSED)&&a.togglePause(),v.key==="m"||v.key==="M"){const C=s.toggleMute();(y=d.setMuteState)==null||y.call(d,C)}}),d.showStartScreen();const h=[t.renderer.domElement,window],f=["pointerup","mouseup","touchend"],m=v=>{var C;const y=v==null?void 0:v.target;if(!(y&&y.closest&&y.closest(".sbp-control-pill"))&&a.state===st.IDLE){a.start(),(C=i.cancelPress)==null||C.call(i),s.startBGM();for(const E of h)for(const R of f)E.removeEventListener(R,m)}};for(const v of h)for(const y of f)v.addEventListener(y,m);const g=new Mh;function _(){var y,C,E,R;requestAnimationFrame(_);const v=Math.min(g.getDelta(),.05);i.update(),(y=d.setBreakMode)==null||y.call(d,a.state===st.PLAYING&&i.isPressing),a.state===st.PLAYING?(c.breakInputActive=i.isPressing,c.update(v,i.rotation,u.body.position.y),n.step(v),u.update(v),(C=a.tick)==null||C.call(a)):a.state===st.WIN&&c.update(v,0,u.body.position.y),(E=l.update)==null||E.call(l,u.mesh.position.y,v),(R=d.setControlsVisible)==null||R.call(d,a.state===st.PLAYING||a.state===st.PAUSED),o.update(v),t.updateCamera(v),t.render()}_()}Kx().catch(console.error);

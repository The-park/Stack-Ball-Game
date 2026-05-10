var ih=Object.defineProperty;var sh=(r,e,t)=>e in r?ih(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Jo=(r,e,t)=>sh(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lo="160",rh=0,ea=1,oh=2,Ql=1,Jl=2,wn=3,Gn=0,Ct=1,en=2,Tn=0,ri=1,lr=2,ta=3,na=4,ah=5,ni=100,lh=101,ch=102,ia=103,sa=104,hh=200,uh=201,dh=202,fh=203,vo=204,xo=205,ph=206,mh=207,_h=208,gh=209,vh=210,xh=211,yh=212,Mh=213,bh=214,Sh=0,wh=1,Eh=2,cr=3,Th=4,Ah=5,Ch=6,Rh=7,Io=0,Ph=1,Lh=2,An=0,ec=1,tc=2,nc=3,ic=4,Ih=5,sc=6,rc=300,Hi=301,Gi=302,yo=303,Mo=304,Mr=306,ps=1e3,tn=1001,bo=1002,Ft=1003,ra=1004,Ir=1005,bt=1006,Dh=1007,ms=1008,Hn=1009,Fh=1010,Nh=1011,Do=1012,oc=1013,Bn=1014,On=1015,Cn=1016,ac=1017,lc=1018,oi=1020,Uh=1021,nn=1023,Bh=1024,Oh=1025,ai=1026,Vi=1027,zh=1028,cc=1029,kh=1030,hc=1031,uc=1033,Dr=33776,Fr=33777,Nr=33778,Ur=33779,oa=35840,aa=35841,la=35842,ca=35843,dc=36196,ha=37492,ua=37496,da=37808,fa=37809,pa=37810,ma=37811,_a=37812,ga=37813,va=37814,xa=37815,ya=37816,Ma=37817,ba=37818,Sa=37819,wa=37820,Ea=37821,Br=36492,Ta=36494,Aa=36495,Hh=36283,Ca=36284,Ra=36285,Pa=36286,fc=3e3,li=3001,Gh=3200,Vh=3201,Fo=0,Wh=1,$t="",Mt="srgb",Pn="srgb-linear",No="display-p3",br="display-p3-linear",hr="linear",et="srgb",ur="rec709",dr="p3",di=7680,La=519,qh=512,Xh=513,Yh=514,pc=515,jh=516,$h=517,Kh=518,Zh=519,So=35044,Ia="300 es",wo=1035,En=2e3,fr=2001;class Xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Da=1234567;const hs=Math.PI/180,_s=180/Math.PI;function Rn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[r&255]+wt[r>>8&255]+wt[r>>16&255]+wt[r>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function At(r,e,t){return Math.max(e,Math.min(t,r))}function Uo(r,e){return(r%e+e)%e}function Qh(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Jh(r,e,t){return r!==e?(t-r)/(e-r):0}function us(r,e,t){return(1-t)*r+t*e}function eu(r,e,t,n){return us(r,e,1-Math.exp(-t*n))}function tu(r,e=1){return e-Math.abs(Uo(r,e*2)-e)}function nu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function iu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function su(r,e){return r+Math.floor(Math.random()*(e-r+1))}function ru(r,e){return r+Math.random()*(e-r)}function ou(r){return r*(.5-Math.random())}function au(r){r!==void 0&&(Da=r);let e=Da+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lu(r){return r*hs}function cu(r){return r*_s}function Eo(r){return(r&r-1)===0&&r!==0}function hu(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function pr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function uu(r,e,t,n,i){const s=Math.cos,o=Math.sin,l=s(t/2),h=o(t/2),u=s((e+n)/2),f=o((e+n)/2),a=s((e-n)/2),c=o((e-n)/2),d=s((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":r.set(l*f,h*a,h*c,l*u);break;case"YZY":r.set(h*c,l*f,h*a,l*u);break;case"ZXZ":r.set(h*a,h*c,l*f,l*u);break;case"XZX":r.set(l*f,h*m,h*d,l*u);break;case"YXY":r.set(h*d,l*f,h*m,l*u);break;case"ZYZ":r.set(h*m,h*d,l*f,l*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function un(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ke(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Tt={DEG2RAD:hs,RAD2DEG:_s,generateUUID:Rn,clamp:At,euclideanModulo:Uo,mapLinear:Qh,inverseLerp:Jh,lerp:us,damp:eu,pingpong:tu,smoothstep:nu,smootherstep:iu,randInt:su,randFloat:ru,randFloatSpread:ou,seededRandom:au,degToRad:lu,radToDeg:cu,isPowerOfTwo:Eo,ceilPowerOfTwo:hu,floorPowerOfTwo:pr,setQuaternionFromProperEuler:uu,normalize:Ke,denormalize:un};class _e{constructor(e=0,t=0){_e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,i,s,o,l,h,u){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,l,h,u)}set(e,t,n,i,s,o,l,h,u){const f=this.elements;return f[0]=e,f[1]=i,f[2]=l,f[3]=t,f[4]=s,f[5]=h,f[6]=n,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],l=n[3],h=n[6],u=n[1],f=n[4],a=n[7],c=n[2],d=n[5],m=n[8],g=i[0],_=i[3],p=i[6],v=i[1],x=i[4],b=i[7],A=i[2],E=i[5],C=i[8];return s[0]=o*g+l*v+h*A,s[3]=o*_+l*x+h*E,s[6]=o*p+l*b+h*C,s[1]=u*g+f*v+a*A,s[4]=u*_+f*x+a*E,s[7]=u*p+f*b+a*C,s[2]=c*g+d*v+m*A,s[5]=c*_+d*x+m*E,s[8]=c*p+d*b+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],l=e[5],h=e[6],u=e[7],f=e[8];return t*o*f-t*l*u-n*s*f+n*l*h+i*s*u-i*o*h}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],l=e[5],h=e[6],u=e[7],f=e[8],a=f*o-l*u,c=l*h-f*s,d=u*s-o*h,m=t*a+n*c+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=a*g,e[1]=(i*u-f*n)*g,e[2]=(l*n-i*o)*g,e[3]=c*g,e[4]=(f*t-i*h)*g,e[5]=(i*s-l*t)*g,e[6]=d*g,e[7]=(n*h-u*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,l){const h=Math.cos(s),u=Math.sin(s);return this.set(n*h,n*u,-n*(h*o+u*l)+o+e,-i*u,i*h,-i*(-u*o+h*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Or.makeScale(e,t)),this}rotate(e){return this.premultiply(Or.makeRotation(-e)),this}translate(e,t){return this.premultiply(Or.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Or=new Ge;function mc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function mr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function du(){const r=mr("canvas");return r.style.display="block",r}const Fa={};function ds(r){r in Fa||(Fa[r]=!0,console.warn(r))}const Na=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ua=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ts={[Pn]:{transfer:hr,primaries:ur,toReference:r=>r,fromReference:r=>r},[Mt]:{transfer:et,primaries:ur,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[br]:{transfer:hr,primaries:dr,toReference:r=>r.applyMatrix3(Ua),fromReference:r=>r.applyMatrix3(Na)},[No]:{transfer:et,primaries:dr,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Ua),fromReference:r=>r.applyMatrix3(Na).convertLinearToSRGB()}},fu=new Set([Pn,br]),je={enabled:!0,_workingColorSpace:Pn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!fu.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Ts[e].toReference,i=Ts[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Ts[r].primaries},getTransfer:function(r){return r===$t?hr:Ts[r].transfer}};function zi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let fi;class _c{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fi===void 0&&(fi=mr("canvas")),fi.width=e.width,fi.height=e.height;const n=fi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=zi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zi(t[n]/255)*255):t[n]=zi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pu=0;class gc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=Rn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,l=i.length;o<l;o++)i[o].isDataTexture?s.push(kr(i[o].image)):s.push(kr(i[o]))}else s=kr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function kr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_c.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mu=0;class Ot extends Xi{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=tn,i=tn,s=bt,o=ms,l=nn,h=Hn,u=Ot.DEFAULT_ANISOTROPY,f=$t){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Rn(),this.name="",this.source=new gc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=h,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(ds("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===li?Mt:$t),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ps:e.x=e.x-Math.floor(e.x);break;case tn:e.x=e.x<0?0:1;break;case bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ps:e.y=e.y-Math.floor(e.y);break;case tn:e.y=e.y<0?0:1;break;case bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ds("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Mt?li:fc}set encoding(e){ds("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===li?Mt:$t}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=rc;Ot.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,i=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const h=e.elements,u=h[0],f=h[4],a=h[8],c=h[1],d=h[5],m=h[9],g=h[2],_=h[6],p=h[10];if(Math.abs(f-c)<.01&&Math.abs(a-g)<.01&&Math.abs(m-_)<.01){if(Math.abs(f+c)<.1&&Math.abs(a+g)<.1&&Math.abs(m+_)<.1&&Math.abs(u+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,b=(d+1)/2,A=(p+1)/2,E=(f+c)/4,C=(a+g)/4,B=(m+_)/4;return x>b&&x>A?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=E/n,s=C/n):b>A?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=E/i,s=B/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=C/s,i=B/s),this.set(n,i,s,t),this}let v=Math.sqrt((_-m)*(_-m)+(a-g)*(a-g)+(c-f)*(c-f));return Math.abs(v)<.001&&(v=1),this.x=(_-m)/v,this.y=(a-g)/v,this.z=(c-f)/v,this.w=Math.acos((u+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _u extends Xi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(ds("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===li?Mt:$t),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ot(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rn extends _u{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class vc extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gu extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Yi=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,l){let h=n[i+0],u=n[i+1],f=n[i+2],a=n[i+3];const c=s[o+0],d=s[o+1],m=s[o+2],g=s[o+3];if(l===0){e[t+0]=h,e[t+1]=u,e[t+2]=f,e[t+3]=a;return}if(l===1){e[t+0]=c,e[t+1]=d,e[t+2]=m,e[t+3]=g;return}if(a!==g||h!==c||u!==d||f!==m){let _=1-l;const p=h*c+u*d+f*m+a*g,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const A=Math.sqrt(x),E=Math.atan2(A,p*v);_=Math.sin(_*E)/A,l=Math.sin(l*E)/A}const b=l*v;if(h=h*_+c*b,u=u*_+d*b,f=f*_+m*b,a=a*_+g*b,_===1-l){const A=1/Math.sqrt(h*h+u*u+f*f+a*a);h*=A,u*=A,f*=A,a*=A}}e[t]=h,e[t+1]=u,e[t+2]=f,e[t+3]=a}static multiplyQuaternionsFlat(e,t,n,i,s,o){const l=n[i],h=n[i+1],u=n[i+2],f=n[i+3],a=s[o],c=s[o+1],d=s[o+2],m=s[o+3];return e[t]=l*m+f*a+h*d-u*c,e[t+1]=h*m+f*c+u*a-l*d,e[t+2]=u*m+f*d+l*c-h*a,e[t+3]=f*m-l*a-h*c-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,l=Math.cos,h=Math.sin,u=l(n/2),f=l(i/2),a=l(s/2),c=h(n/2),d=h(i/2),m=h(s/2);switch(o){case"XYZ":this._x=c*f*a+u*d*m,this._y=u*d*a-c*f*m,this._z=u*f*m+c*d*a,this._w=u*f*a-c*d*m;break;case"YXZ":this._x=c*f*a+u*d*m,this._y=u*d*a-c*f*m,this._z=u*f*m-c*d*a,this._w=u*f*a+c*d*m;break;case"ZXY":this._x=c*f*a-u*d*m,this._y=u*d*a+c*f*m,this._z=u*f*m+c*d*a,this._w=u*f*a-c*d*m;break;case"ZYX":this._x=c*f*a-u*d*m,this._y=u*d*a+c*f*m,this._z=u*f*m-c*d*a,this._w=u*f*a+c*d*m;break;case"YZX":this._x=c*f*a+u*d*m,this._y=u*d*a+c*f*m,this._z=u*f*m-c*d*a,this._w=u*f*a-c*d*m;break;case"XZY":this._x=c*f*a-u*d*m,this._y=u*d*a-c*f*m,this._z=u*f*m+c*d*a,this._w=u*f*a+c*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],l=t[5],h=t[9],u=t[2],f=t[6],a=t[10],c=n+l+a;if(c>0){const d=.5/Math.sqrt(c+1);this._w=.25/d,this._x=(f-h)*d,this._y=(s-u)*d,this._z=(o-i)*d}else if(n>l&&n>a){const d=2*Math.sqrt(1+n-l-a);this._w=(f-h)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+u)/d}else if(l>a){const d=2*Math.sqrt(1+l-n-a);this._w=(s-u)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(h+f)/d}else{const d=2*Math.sqrt(1+a-n-l);this._w=(o-i)/d,this._x=(s+u)/d,this._y=(h+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,l=t._x,h=t._y,u=t._z,f=t._w;return this._x=n*f+o*l+i*u-s*h,this._y=i*f+o*h+s*l-n*u,this._z=s*f+o*u+n*h-i*l,this._w=o*f-n*l-i*h-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let l=o*e._w+n*e._x+i*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const h=1-l*l;if(h<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const u=Math.sqrt(h),f=Math.atan2(u,l),a=Math.sin((1-t)*f)/u,c=Math.sin(t*f)/u;return this._w=o*a+this._w*c,this._x=n*a+this._x*c,this._y=i*a+this._y*c,this._z=s*a+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ba.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ba.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,l=e.z,h=e.w,u=2*(o*i-l*n),f=2*(l*t-s*i),a=2*(s*n-o*t);return this.x=t+h*u+o*a-l*f,this.y=n+h*f+l*u-s*a,this.z=i+h*a+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,l=t.y,h=t.z;return this.x=i*h-s*l,this.y=s*o-n*h,this.z=n*l-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hr.copy(this).projectOnVector(e),this.sub(Hr)}reflect(e){return this.sub(Hr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hr=new U,Ba=new Yi;class Ms{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,Kt):Kt.fromBufferAttribute(s,o),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),As.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),As.copy(n.boundingBox)),As.applyMatrix4(e.matrixWorld),this.union(As)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zi),Cs.subVectors(this.max,Zi),pi.subVectors(e.a,Zi),mi.subVectors(e.b,Zi),_i.subVectors(e.c,Zi),Ln.subVectors(mi,pi),In.subVectors(_i,mi),Yn.subVectors(pi,_i);let t=[0,-Ln.z,Ln.y,0,-In.z,In.y,0,-Yn.z,Yn.y,Ln.z,0,-Ln.x,In.z,0,-In.x,Yn.z,0,-Yn.x,-Ln.y,Ln.x,0,-In.y,In.x,0,-Yn.y,Yn.x,0];return!Gr(t,pi,mi,_i,Cs)||(t=[1,0,0,0,1,0,0,0,1],!Gr(t,pi,mi,_i,Cs))?!1:(Rs.crossVectors(Ln,In),t=[Rs.x,Rs.y,Rs.z],Gr(t,pi,mi,_i,Cs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pn=[new U,new U,new U,new U,new U,new U,new U,new U],Kt=new U,As=new Ms,pi=new U,mi=new U,_i=new U,Ln=new U,In=new U,Yn=new U,Zi=new U,Cs=new U,Rs=new U,jn=new U;function Gr(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){jn.fromArray(r,s);const l=i.x*Math.abs(jn.x)+i.y*Math.abs(jn.y)+i.z*Math.abs(jn.z),h=e.dot(jn),u=t.dot(jn),f=n.dot(jn);if(Math.max(-Math.max(h,u,f),Math.min(h,u,f))>l)return!1}return!0}const vu=new Ms,Qi=new U,Vr=new U;let Sr=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):vu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);const t=Qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Qi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(Vr)),this.expandByPoint(Qi.copy(e.center).sub(Vr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const mn=new U,Wr=new U,Ps=new U,Dn=new U,qr=new U,Ls=new U,Xr=new U;let xc=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.origin).addScaledVector(this.direction,t),mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Wr.copy(e).add(t).multiplyScalar(.5),Ps.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(Wr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ps),l=Dn.dot(this.direction),h=-Dn.dot(Ps),u=Dn.lengthSq(),f=Math.abs(1-o*o);let a,c,d,m;if(f>0)if(a=o*h-l,c=o*l-h,m=s*f,a>=0)if(c>=-m)if(c<=m){const g=1/f;a*=g,c*=g,d=a*(a+o*c+2*l)+c*(o*a+c+2*h)+u}else c=s,a=Math.max(0,-(o*c+l)),d=-a*a+c*(c+2*h)+u;else c=-s,a=Math.max(0,-(o*c+l)),d=-a*a+c*(c+2*h)+u;else c<=-m?(a=Math.max(0,-(-o*s+l)),c=a>0?-s:Math.min(Math.max(-s,-h),s),d=-a*a+c*(c+2*h)+u):c<=m?(a=0,c=Math.min(Math.max(-s,-h),s),d=c*(c+2*h)+u):(a=Math.max(0,-(o*s+l)),c=a>0?s:Math.min(Math.max(-s,-h),s),d=-a*a+c*(c+2*h)+u);else c=o>0?-s:s,a=Math.max(0,-(o*c+l)),d=-a*a+c*(c+2*h)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,a),i&&i.copy(Wr).addScaledVector(Ps,c),d}intersectSphere(e,t){mn.subVectors(e.center,this.origin);const n=mn.dot(this.direction),i=mn.dot(mn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),l=n-o,h=n+o;return h<0?null:l<0?this.at(h,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,l,h;const u=1/this.direction.x,f=1/this.direction.y,a=1/this.direction.z,c=this.origin;return u>=0?(n=(e.min.x-c.x)*u,i=(e.max.x-c.x)*u):(n=(e.max.x-c.x)*u,i=(e.min.x-c.x)*u),f>=0?(s=(e.min.y-c.y)*f,o=(e.max.y-c.y)*f):(s=(e.max.y-c.y)*f,o=(e.min.y-c.y)*f),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),a>=0?(l=(e.min.z-c.z)*a,h=(e.max.z-c.z)*a):(l=(e.max.z-c.z)*a,h=(e.min.z-c.z)*a),n>h||l>i)||((l>n||n!==n)&&(n=l),(h<i||i!==i)&&(i=h),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,n,i,s){qr.subVectors(t,e),Ls.subVectors(n,e),Xr.crossVectors(qr,Ls);let o=this.direction.dot(Xr),l;if(o>0){if(i)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Dn.subVectors(this.origin,e);const h=l*this.direction.dot(Ls.crossVectors(Dn,Ls));if(h<0)return null;const u=l*this.direction.dot(qr.cross(Dn));if(u<0||h+u>o)return null;const f=-l*Dn.dot(Xr);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class lt{constructor(e,t,n,i,s,o,l,h,u,f,a,c,d,m,g,_){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,l,h,u,f,a,c,d,m,g,_)}set(e,t,n,i,s,o,l,h,u,f,a,c,d,m,g,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=l,p[13]=h,p[2]=u,p[6]=f,p[10]=a,p[14]=c,p[3]=d,p[7]=m,p[11]=g,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/gi.setFromMatrixColumn(e,0).length(),s=1/gi.setFromMatrixColumn(e,1).length(),o=1/gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),l=Math.sin(n),h=Math.cos(i),u=Math.sin(i),f=Math.cos(s),a=Math.sin(s);if(e.order==="XYZ"){const c=o*f,d=o*a,m=l*f,g=l*a;t[0]=h*f,t[4]=-h*a,t[8]=u,t[1]=d+m*u,t[5]=c-g*u,t[9]=-l*h,t[2]=g-c*u,t[6]=m+d*u,t[10]=o*h}else if(e.order==="YXZ"){const c=h*f,d=h*a,m=u*f,g=u*a;t[0]=c+g*l,t[4]=m*l-d,t[8]=o*u,t[1]=o*a,t[5]=o*f,t[9]=-l,t[2]=d*l-m,t[6]=g+c*l,t[10]=o*h}else if(e.order==="ZXY"){const c=h*f,d=h*a,m=u*f,g=u*a;t[0]=c-g*l,t[4]=-o*a,t[8]=m+d*l,t[1]=d+m*l,t[5]=o*f,t[9]=g-c*l,t[2]=-o*u,t[6]=l,t[10]=o*h}else if(e.order==="ZYX"){const c=o*f,d=o*a,m=l*f,g=l*a;t[0]=h*f,t[4]=m*u-d,t[8]=c*u+g,t[1]=h*a,t[5]=g*u+c,t[9]=d*u-m,t[2]=-u,t[6]=l*h,t[10]=o*h}else if(e.order==="YZX"){const c=o*h,d=o*u,m=l*h,g=l*u;t[0]=h*f,t[4]=g-c*a,t[8]=m*a+d,t[1]=a,t[5]=o*f,t[9]=-l*f,t[2]=-u*f,t[6]=d*a+m,t[10]=c-g*a}else if(e.order==="XZY"){const c=o*h,d=o*u,m=l*h,g=l*u;t[0]=h*f,t[4]=-a,t[8]=u*f,t[1]=c*a+g,t[5]=o*f,t[9]=d*a-m,t[2]=m*a-d,t[6]=l*f,t[10]=g*a+c}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xu,e,yu)}lookAt(e,t,n){const i=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Fn.crossVectors(n,kt),Fn.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Fn.crossVectors(n,kt)),Fn.normalize(),Is.crossVectors(kt,Fn),i[0]=Fn.x,i[4]=Is.x,i[8]=kt.x,i[1]=Fn.y,i[5]=Is.y,i[9]=kt.y,i[2]=Fn.z,i[6]=Is.z,i[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],l=n[4],h=n[8],u=n[12],f=n[1],a=n[5],c=n[9],d=n[13],m=n[2],g=n[6],_=n[10],p=n[14],v=n[3],x=n[7],b=n[11],A=n[15],E=i[0],C=i[4],B=i[8],M=i[12],w=i[1],F=i[5],z=i[9],N=i[13],P=i[2],L=i[6],I=i[10],j=i[14],k=i[3],H=i[7],K=i[11],Z=i[15];return s[0]=o*E+l*w+h*P+u*k,s[4]=o*C+l*F+h*L+u*H,s[8]=o*B+l*z+h*I+u*K,s[12]=o*M+l*N+h*j+u*Z,s[1]=f*E+a*w+c*P+d*k,s[5]=f*C+a*F+c*L+d*H,s[9]=f*B+a*z+c*I+d*K,s[13]=f*M+a*N+c*j+d*Z,s[2]=m*E+g*w+_*P+p*k,s[6]=m*C+g*F+_*L+p*H,s[10]=m*B+g*z+_*I+p*K,s[14]=m*M+g*N+_*j+p*Z,s[3]=v*E+x*w+b*P+A*k,s[7]=v*C+x*F+b*L+A*H,s[11]=v*B+x*z+b*I+A*K,s[15]=v*M+x*N+b*j+A*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],l=e[5],h=e[9],u=e[13],f=e[2],a=e[6],c=e[10],d=e[14],m=e[3],g=e[7],_=e[11],p=e[15];return m*(+s*h*a-i*u*a-s*l*c+n*u*c+i*l*d-n*h*d)+g*(+t*h*d-t*u*c+s*o*c-i*o*d+i*u*f-s*h*f)+_*(+t*u*a-t*l*d-s*o*a+n*o*d+s*l*f-n*u*f)+p*(-i*l*f-t*h*a+t*l*c+i*o*a-n*o*c+n*h*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],l=e[5],h=e[6],u=e[7],f=e[8],a=e[9],c=e[10],d=e[11],m=e[12],g=e[13],_=e[14],p=e[15],v=a*_*u-g*c*u+g*h*d-l*_*d-a*h*p+l*c*p,x=m*c*u-f*_*u-m*h*d+o*_*d+f*h*p-o*c*p,b=f*g*u-m*a*u+m*l*d-o*g*d-f*l*p+o*a*p,A=m*a*h-f*g*h-m*l*c+o*g*c+f*l*_-o*a*_,E=t*v+n*x+i*b+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=v*C,e[1]=(g*c*s-a*_*s-g*i*d+n*_*d+a*i*p-n*c*p)*C,e[2]=(l*_*s-g*h*s+g*i*u-n*_*u-l*i*p+n*h*p)*C,e[3]=(a*h*s-l*c*s-a*i*u+n*c*u+l*i*d-n*h*d)*C,e[4]=x*C,e[5]=(f*_*s-m*c*s+m*i*d-t*_*d-f*i*p+t*c*p)*C,e[6]=(m*h*s-o*_*s-m*i*u+t*_*u+o*i*p-t*h*p)*C,e[7]=(o*c*s-f*h*s+f*i*u-t*c*u-o*i*d+t*h*d)*C,e[8]=b*C,e[9]=(m*a*s-f*g*s-m*n*d+t*g*d+f*n*p-t*a*p)*C,e[10]=(o*g*s-m*l*s+m*n*u-t*g*u-o*n*p+t*l*p)*C,e[11]=(f*l*s-o*a*s-f*n*u+t*a*u+o*n*d-t*l*d)*C,e[12]=A*C,e[13]=(f*g*i-m*a*i+m*n*c-t*g*c-f*n*_+t*a*_)*C,e[14]=(m*l*i-o*g*i-m*n*h+t*g*h+o*n*_-t*l*_)*C,e[15]=(o*a*i-f*l*i+f*n*h-t*a*h-o*n*c+t*l*c)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,l=e.y,h=e.z,u=s*o,f=s*l;return this.set(u*o+n,u*l-i*h,u*h+i*l,0,u*l+i*h,f*l+n,f*h-i*o,0,u*h-i*l,f*h+i*o,s*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,l=t._z,h=t._w,u=s+s,f=o+o,a=l+l,c=s*u,d=s*f,m=s*a,g=o*f,_=o*a,p=l*a,v=h*u,x=h*f,b=h*a,A=n.x,E=n.y,C=n.z;return i[0]=(1-(g+p))*A,i[1]=(d+b)*A,i[2]=(m-x)*A,i[3]=0,i[4]=(d-b)*E,i[5]=(1-(c+p))*E,i[6]=(_+v)*E,i[7]=0,i[8]=(m+x)*C,i[9]=(_-v)*C,i[10]=(1-(c+g))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=gi.set(i[0],i[1],i[2]).length();const o=gi.set(i[4],i[5],i[6]).length(),l=gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Zt.copy(this);const u=1/s,f=1/o,a=1/l;return Zt.elements[0]*=u,Zt.elements[1]*=u,Zt.elements[2]*=u,Zt.elements[4]*=f,Zt.elements[5]*=f,Zt.elements[6]*=f,Zt.elements[8]*=a,Zt.elements[9]*=a,Zt.elements[10]*=a,t.setFromRotationMatrix(Zt),n.x=s,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,o,l=En){const h=this.elements,u=2*s/(t-e),f=2*s/(n-i),a=(t+e)/(t-e),c=(n+i)/(n-i);let d,m;if(l===En)d=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(l===fr)d=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=u,h[4]=0,h[8]=a,h[12]=0,h[1]=0,h[5]=f,h[9]=c,h[13]=0,h[2]=0,h[6]=0,h[10]=d,h[14]=m,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,i,s,o,l=En){const h=this.elements,u=1/(t-e),f=1/(n-i),a=1/(o-s),c=(t+e)*u,d=(n+i)*f;let m,g;if(l===En)m=(o+s)*a,g=-2*a;else if(l===fr)m=s*a,g=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=2*u,h[4]=0,h[8]=0,h[12]=-c,h[1]=0,h[5]=2*f,h[9]=0,h[13]=-d,h[2]=0,h[6]=0,h[10]=g,h[14]=-m,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gi=new U,Zt=new lt,xu=new U(0,0,0),yu=new U(1,1,1),Fn=new U,Is=new U,kt=new U,Oa=new lt,za=new Yi;class wr{constructor(e=0,t=0,n=0,i=wr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],l=i[8],h=i[1],u=i[5],f=i[9],a=i[2],c=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-At(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-a,s),this._z=0);break;case"ZXY":this._x=Math.asin(At(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-a,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,d),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-a,s)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Oa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return za.setFromEuler(this),this.setFromQuaternion(za,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wr.DEFAULT_ORDER="XYZ";class yc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mu=0;const ka=new U,vi=new Yi,_n=new lt,Ds=new U,Ji=new U,bu=new U,Su=new Yi,Ha=new U(1,0,0),Ga=new U(0,1,0),Va=new U(0,0,1),wu={type:"added"},Eu={type:"removed"};class pt extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new U,t=new wr,n=new Yi,i=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ge}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(Ha,e)}rotateY(e){return this.rotateOnAxis(Ga,e)}rotateZ(e){return this.rotateOnAxis(Va,e)}translateOnAxis(e,t){return ka.copy(e).applyQuaternion(this.quaternion),this.position.add(ka.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ha,e)}translateY(e){return this.translateOnAxis(Ga,e)}translateZ(e){return this.translateOnAxis(Va,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ds.copy(e):Ds.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Ji,Ds,this.up):_n.lookAt(Ds,Ji,this.up),this.quaternion.setFromRotationMatrix(_n),i&&(_n.extractRotation(i.matrixWorld),vi.setFromRotationMatrix(_n),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(wu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Eu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,e,bu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,Su,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const l=i[s];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let u=0,f=h.length;u<f;u++){const a=h[u];s(e.shapes,a)}else s(e.shapes,h)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,u=this.material.length;h<u;h++)l.push(s(e.materials,this.material[h]));i.material=l}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];i.animations.push(s(e.animations,h))}}if(t){const l=o(e.geometries),h=o(e.materials),u=o(e.textures),f=o(e.images),a=o(e.shapes),c=o(e.skeletons),d=o(e.animations),m=o(e.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),a.length>0&&(n.shapes=a),c.length>0&&(n.skeletons=c),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(l){const h=[];for(const u in l){const f=l[u];delete f.metadata,h.push(f)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}pt.DEFAULT_UP=new U(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new U,gn=new U,Yr=new U,vn=new U,xi=new U,yi=new U,Wa=new U,jr=new U,$r=new U,Kr=new U;let Fs=!1;class jt{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Qt.subVectors(e,t),i.cross(Qt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Qt.subVectors(i,t),gn.subVectors(n,t),Yr.subVectors(e,t);const o=Qt.dot(Qt),l=Qt.dot(gn),h=Qt.dot(Yr),u=gn.dot(gn),f=gn.dot(Yr),a=o*u-l*l;if(a===0)return s.set(0,0,0),null;const c=1/a,d=(u*h-l*f)*c,m=(o*f-l*h)*c;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getUV(e,t,n,i,s,o,l,h){return Fs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fs=!0),this.getInterpolation(e,t,n,i,s,o,l,h)}static getInterpolation(e,t,n,i,s,o,l,h){return this.getBarycoord(e,t,n,i,vn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,vn.x),h.addScaledVector(o,vn.y),h.addScaledVector(l,vn.z),h)}static isFrontFacing(e,t,n,i){return Qt.subVectors(n,t),gn.subVectors(e,t),Qt.cross(gn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Qt.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Fs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fs=!0),jt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,l;xi.subVectors(i,n),yi.subVectors(s,n),jr.subVectors(e,n);const h=xi.dot(jr),u=yi.dot(jr);if(h<=0&&u<=0)return t.copy(n);$r.subVectors(e,i);const f=xi.dot($r),a=yi.dot($r);if(f>=0&&a<=f)return t.copy(i);const c=h*a-f*u;if(c<=0&&h>=0&&f<=0)return o=h/(h-f),t.copy(n).addScaledVector(xi,o);Kr.subVectors(e,s);const d=xi.dot(Kr),m=yi.dot(Kr);if(m>=0&&d<=m)return t.copy(s);const g=d*u-h*m;if(g<=0&&u>=0&&m<=0)return l=u/(u-m),t.copy(n).addScaledVector(yi,l);const _=f*m-d*a;if(_<=0&&a-f>=0&&d-m>=0)return Wa.subVectors(s,i),l=(a-f)/(a-f+(d-m)),t.copy(i).addScaledVector(Wa,l);const p=1/(_+g+c);return o=g*p,l=c*p,t.copy(n).addScaledVector(xi,o).addScaledVector(yi,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function Zr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=Uo(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Zr(o,s,e+1/3),this.g=Zr(o,s,e),this.b=Zr(o,s,e-1/3)}return je.toWorkingColorSpace(this,i),this}setStyle(e,t=Mt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],l=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const n=Mc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return je.fromWorkingColorSpace(Et.copy(this),e),Math.round(At(Et.r*255,0,255))*65536+Math.round(At(Et.g*255,0,255))*256+Math.round(At(Et.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Et.copy(this),t);const n=Et.r,i=Et.g,s=Et.b,o=Math.max(n,i,s),l=Math.min(n,i,s);let h,u;const f=(l+o)/2;if(l===o)h=0,u=0;else{const a=o-l;switch(u=f<=.5?a/(o+l):a/(2-o-l),o){case n:h=(i-s)/a+(i<s?6:0);break;case i:h=(s-n)/a+2;break;case s:h=(n-i)/a+4;break}h/=6}return e.h=h,e.s=u,e.l=f,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Mt){je.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,n=Et.g,i=Et.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(Ns);const n=us(Nn.h,Ns.h,t),i=us(Nn.s,Ns.s,t),s=us(Nn.l,Ns.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new ye;ye.NAMES=Mc;let Tu=0,Vn=class extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=ri,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vo,this.blendDst=xo,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=La,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vo&&(n.blendSrc=this.blendSrc),this.blendDst!==xo&&(n.blendDst=this.blendDst),this.blendEquation!==ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==La&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const l in s){const h=s[l];delete h.metadata,o.push(h)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class ui extends Vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new U,Us=new _e;class Vt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=So,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Us.fromBufferAttribute(this,t),Us.applyMatrix3(e),this.setXY(t,Us.x,Us.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=un(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=un(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=un(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),s=Ke(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==So&&(e.usage=this.usage),e}}class bc extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sc extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Au=0;const Xt=new lt,Qr=new pt,Mi=new U,Ht=new Ms,es=new Ms,yt=new U;class Ut extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mc(e)?Sc:bc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ge().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return Qr.lookAt(e),Qr.updateMatrix(),this.applyMatrix4(Qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];es.setFromBufferAttribute(l),this.morphTargetsRelative?(yt.addVectors(Ht.min,es.min),Ht.expandByPoint(yt),yt.addVectors(Ht.max,es.max),Ht.expandByPoint(yt)):(Ht.expandByPoint(es.min),Ht.expandByPoint(es.max))}Ht.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)yt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(yt));if(t)for(let s=0,o=t.length;s<o;s++){const l=t[s],h=this.morphTargetsRelative;for(let u=0,f=l.count;u<f;u++)yt.fromBufferAttribute(l,u),h&&(Mi.fromBufferAttribute(e,u),yt.add(Mi)),i=Math.max(i,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,l=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*l),4));const h=this.getAttribute("tangent").array,u=[],f=[];for(let w=0;w<l;w++)u[w]=new U,f[w]=new U;const a=new U,c=new U,d=new U,m=new _e,g=new _e,_=new _e,p=new U,v=new U;function x(w,F,z){a.fromArray(i,w*3),c.fromArray(i,F*3),d.fromArray(i,z*3),m.fromArray(o,w*2),g.fromArray(o,F*2),_.fromArray(o,z*2),c.sub(a),d.sub(a),g.sub(m),_.sub(m);const N=1/(g.x*_.y-_.x*g.y);isFinite(N)&&(p.copy(c).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(N),v.copy(d).multiplyScalar(g.x).addScaledVector(c,-_.x).multiplyScalar(N),u[w].add(p),u[F].add(p),u[z].add(p),f[w].add(v),f[F].add(v),f[z].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let w=0,F=b.length;w<F;++w){const z=b[w],N=z.start,P=z.count;for(let L=N,I=N+P;L<I;L+=3)x(n[L+0],n[L+1],n[L+2])}const A=new U,E=new U,C=new U,B=new U;function M(w){C.fromArray(s,w*3),B.copy(C);const F=u[w];A.copy(F),A.sub(C.multiplyScalar(C.dot(F))).normalize(),E.crossVectors(B,F);const N=E.dot(f[w])<0?-1:1;h[w*4]=A.x,h[w*4+1]=A.y,h[w*4+2]=A.z,h[w*4+3]=N}for(let w=0,F=b.length;w<F;++w){const z=b[w],N=z.start,P=z.count;for(let L=N,I=N+P;L<I;L+=3)M(n[L+0]),M(n[L+1]),M(n[L+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let c=0,d=n.count;c<d;c++)n.setXYZ(c,0,0,0);const i=new U,s=new U,o=new U,l=new U,h=new U,u=new U,f=new U,a=new U;if(e)for(let c=0,d=e.count;c<d;c+=3){const m=e.getX(c+0),g=e.getX(c+1),_=e.getX(c+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,_),f.subVectors(o,s),a.subVectors(i,s),f.cross(a),l.fromBufferAttribute(n,m),h.fromBufferAttribute(n,g),u.fromBufferAttribute(n,_),l.add(f),h.add(f),u.add(f),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(g,h.x,h.y,h.z),n.setXYZ(_,u.x,u.y,u.z)}else for(let c=0,d=t.count;c<d;c+=3)i.fromBufferAttribute(t,c+0),s.fromBufferAttribute(t,c+1),o.fromBufferAttribute(t,c+2),f.subVectors(o,s),a.subVectors(i,s),f.cross(a),n.setXYZ(c+0,f.x,f.y,f.z),n.setXYZ(c+1,f.x,f.y,f.z),n.setXYZ(c+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(l,h){const u=l.array,f=l.itemSize,a=l.normalized,c=new u.constructor(h.length*f);let d=0,m=0;for(let g=0,_=h.length;g<_;g++){l.isInterleavedBufferAttribute?d=h[g]*l.data.stride+l.offset:d=h[g]*f;for(let p=0;p<f;p++)c[m++]=u[d++]}return new Vt(c,f,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,n=this.index.array,i=this.attributes;for(const l in i){const h=i[l],u=e(h,n);t.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const h=[],u=s[l];for(let f=0,a=u.length;f<a;f++){const c=u[f],d=e(c,n);h.push(d)}t.morphAttributes[l]=h}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const u in h)h[u]!==void 0&&(e[u]=h[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const u=n[h];e.data.attributes[h]=u.toJSON(e.data)}const i={};let s=!1;for(const h in this.morphAttributes){const u=this.morphAttributes[h],f=[];for(let a=0,c=u.length;a<c;a++){const d=u[a];f.push(d.toJSON(e.data))}f.length>0&&(i[h]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const f=i[u];this.setAttribute(u,f.clone(t))}const s=e.morphAttributes;for(const u in s){const f=[],a=s[u];for(let c=0,d=a.length;c<d;c++)f.push(a[c].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const a=o[u];this.addGroup(a.start,a.count,a.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qa=new lt,$n=new xc,Bs=new Sr,Xa=new U,bi=new U,Si=new U,wi=new U,Jr=new U,Os=new U,zs=new _e,ks=new _e,Hs=new _e,Ya=new U,ja=new U,$a=new U,Gs=new U,Vs=new U;class We extends pt{constructor(e=new Ut,t=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(s&&l){Os.set(0,0,0);for(let h=0,u=s.length;h<u;h++){const f=l[h],a=s[h];f!==0&&(Jr.fromBufferAttribute(a,e),o?Os.addScaledVector(Jr,f):Os.addScaledVector(Jr.sub(t),f))}t.add(Os)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(s),$n.copy(e.ray).recast(e.near),!(Bs.containsPoint($n.origin)===!1&&($n.intersectSphere(Bs,Xa)===null||$n.origin.distanceToSquared(Xa)>(e.far-e.near)**2))&&(qa.copy(s).invert(),$n.copy(e.ray).applyMatrix4(qa),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$n)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,l=s.index,h=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,a=s.attributes.normal,c=s.groups,d=s.drawRange;if(l!==null)if(Array.isArray(o))for(let m=0,g=c.length;m<g;m++){const _=c[m],p=o[_.materialIndex],v=Math.max(_.start,d.start),x=Math.min(l.count,Math.min(_.start+_.count,d.start+d.count));for(let b=v,A=x;b<A;b+=3){const E=l.getX(b),C=l.getX(b+1),B=l.getX(b+2);i=Ws(this,p,e,n,u,f,a,E,C,B),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let _=m,p=g;_<p;_+=3){const v=l.getX(_),x=l.getX(_+1),b=l.getX(_+2);i=Ws(this,o,e,n,u,f,a,v,x,b),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}else if(h!==void 0)if(Array.isArray(o))for(let m=0,g=c.length;m<g;m++){const _=c[m],p=o[_.materialIndex],v=Math.max(_.start,d.start),x=Math.min(h.count,Math.min(_.start+_.count,d.start+d.count));for(let b=v,A=x;b<A;b+=3){const E=b,C=b+1,B=b+2;i=Ws(this,p,e,n,u,f,a,E,C,B),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),g=Math.min(h.count,d.start+d.count);for(let _=m,p=g;_<p;_+=3){const v=_,x=_+1,b=_+2;i=Ws(this,o,e,n,u,f,a,v,x,b),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}}}function Cu(r,e,t,n,i,s,o,l){let h;if(e.side===Ct?h=n.intersectTriangle(o,s,i,!0,l):h=n.intersectTriangle(i,s,o,e.side===Gn,l),h===null)return null;Vs.copy(l),Vs.applyMatrix4(r.matrixWorld);const u=t.ray.origin.distanceTo(Vs);return u<t.near||u>t.far?null:{distance:u,point:Vs.clone(),object:r}}function Ws(r,e,t,n,i,s,o,l,h,u){r.getVertexPosition(l,bi),r.getVertexPosition(h,Si),r.getVertexPosition(u,wi);const f=Cu(r,e,t,n,bi,Si,wi,Gs);if(f){i&&(zs.fromBufferAttribute(i,l),ks.fromBufferAttribute(i,h),Hs.fromBufferAttribute(i,u),f.uv=jt.getInterpolation(Gs,bi,Si,wi,zs,ks,Hs,new _e)),s&&(zs.fromBufferAttribute(s,l),ks.fromBufferAttribute(s,h),Hs.fromBufferAttribute(s,u),f.uv1=jt.getInterpolation(Gs,bi,Si,wi,zs,ks,Hs,new _e),f.uv2=f.uv1),o&&(Ya.fromBufferAttribute(o,l),ja.fromBufferAttribute(o,h),$a.fromBufferAttribute(o,u),f.normal=jt.getInterpolation(Gs,bi,Si,wi,Ya,ja,$a,new U),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const a={a:l,b:h,c:u,normal:new U,materialIndex:0};jt.getNormal(bi,Si,wi,a.normal),f.face=a}return f}class Wn extends Ut{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const l=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const h=[],u=[],f=[],a=[];let c=0,d=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(h),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(f,3)),this.setAttribute("uv",new mt(a,2));function m(g,_,p,v,x,b,A,E,C,B,M){const w=b/C,F=A/B,z=b/2,N=A/2,P=E/2,L=C+1,I=B+1;let j=0,k=0;const H=new U;for(let K=0;K<I;K++){const Z=K*F-N;for(let $=0;$<L;$++){const X=$*w-z;H[g]=X*v,H[_]=Z*x,H[p]=P,u.push(H.x,H.y,H.z),H[g]=0,H[_]=0,H[p]=E>0?1:-1,f.push(H.x,H.y,H.z),a.push($/C),a.push(1-K/B),j+=1}}for(let K=0;K<B;K++)for(let Z=0;Z<C;Z++){const $=c+Z+L*K,X=c+Z+L*(K+1),Q=c+(Z+1)+L*(K+1),ae=c+(Z+1)+L*K;h.push($,X,ae),h.push(X,Q,ae),k+=6}l.addGroup(d,k,M),d+=k,c+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Dt(r){const e={};for(let t=0;t<r.length;t++){const n=Wi(r[t]);for(const i in n)e[i]=n[i]}return e}function Ru(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function wc(r){return r.getRenderTarget()===null?r.outputColorSpace:je.workingColorSpace}const gs={clone:Wi,merge:Dt};var Pu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nt extends Vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pu,this.fragmentShader=Lu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.uniformsGroups=Ru(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ec extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=En}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Gt extends Ec{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,u=o.fullHeight;s+=o.offsetX*i/h,t-=o.offsetY*n/u,i*=o.width/h,n*=o.height/u}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ei=-90,Ti=1;class Iu extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Gt(Ei,Ti,e,t);i.layers=this.layers,this.add(i);const s=new Gt(Ei,Ti,e,t);s.layers=this.layers,this.add(s);const o=new Gt(Ei,Ti,e,t);o.layers=this.layers,this.add(o);const l=new Gt(Ei,Ti,e,t);l.layers=this.layers,this.add(l);const h=new Gt(Ei,Ti,e,t);h.layers=this.layers,this.add(h);const u=new Gt(Ei,Ti,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,l,h]=t;for(const u of t)this.remove(u);if(e===En)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,h,u,f]=this.children,a=e.getRenderTarget(),c=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,l),e.setRenderTarget(n,3,i),e.render(t,h),e.setRenderTarget(n,4,i),e.render(t,u),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,f),e.setRenderTarget(a,c,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Tc extends Ot{constructor(e,t,n,i,s,o,l,h,u,f){e=e!==void 0?e:[],t=t!==void 0?t:Hi,super(e,t,n,i,s,o,l,h,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Du extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ds("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===li?Mt:$t),this.texture=new Tc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Wn(5,5,5),s=new Nt({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:Tn});s.uniforms.tEquirect.value=t;const o=new We(i,s),l=t.minFilter;return t.minFilter===ms&&(t.minFilter=bt),new Iu(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const eo=new U,Fu=new U,Nu=new Ge;class ei{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=eo.subVectors(n,t).cross(Fu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(eo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Nu.getNormalMatrix(e),i=this.coplanarPoint(eo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kn=new Sr,qs=new U;class Bo{constructor(e=new ei,t=new ei,n=new ei,i=new ei,s=new ei,o=new ei){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(s),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En){const n=this.planes,i=e.elements,s=i[0],o=i[1],l=i[2],h=i[3],u=i[4],f=i[5],a=i[6],c=i[7],d=i[8],m=i[9],g=i[10],_=i[11],p=i[12],v=i[13],x=i[14],b=i[15];if(n[0].setComponents(h-s,c-u,_-d,b-p).normalize(),n[1].setComponents(h+s,c+u,_+d,b+p).normalize(),n[2].setComponents(h+o,c+f,_+m,b+v).normalize(),n[3].setComponents(h-o,c-f,_-m,b-v).normalize(),n[4].setComponents(h-l,c-a,_-g,b-x).normalize(),t===En)n[5].setComponents(h+l,c+a,_+g,b+x).normalize();else if(t===fr)n[5].setComponents(l,a,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(e){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(qs.x=i.normal.x>0?e.max.x:e.min.x,qs.y=i.normal.y>0?e.max.y:e.min.y,qs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ac(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Uu(r,e){const t=e.isWebGL2,n=new WeakMap;function i(u,f){const a=u.array,c=u.usage,d=a.byteLength,m=r.createBuffer();r.bindBuffer(f,m),r.bufferData(f,a,c),u.onUploadCallback();let g;if(a instanceof Float32Array)g=r.FLOAT;else if(a instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(a instanceof Int16Array)g=r.SHORT;else if(a instanceof Uint32Array)g=r.UNSIGNED_INT;else if(a instanceof Int32Array)g=r.INT;else if(a instanceof Int8Array)g=r.BYTE;else if(a instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:m,type:g,bytesPerElement:a.BYTES_PER_ELEMENT,version:u.version,size:d}}function s(u,f,a){const c=f.array,d=f._updateRange,m=f.updateRanges;if(r.bindBuffer(a,u),d.count===-1&&m.length===0&&r.bufferSubData(a,0,c),m.length!==0){for(let g=0,_=m.length;g<_;g++){const p=m[g];t?r.bufferSubData(a,p.start*c.BYTES_PER_ELEMENT,c,p.start,p.count):r.bufferSubData(a,p.start*c.BYTES_PER_ELEMENT,c.subarray(p.start,p.start+p.count))}f.clearUpdateRanges()}d.count!==-1&&(t?r.bufferSubData(a,d.offset*c.BYTES_PER_ELEMENT,c,d.offset,d.count):r.bufferSubData(a,d.offset*c.BYTES_PER_ELEMENT,c.subarray(d.offset,d.offset+d.count)),d.count=-1),f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function l(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=n.get(u);f&&(r.deleteBuffer(f.buffer),n.delete(u))}function h(u,f){if(u.isGLBufferAttribute){const c=n.get(u);(!c||c.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const a=n.get(u);if(a===void 0)n.set(u,i(u,f));else if(a.version<u.version){if(a.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(a.buffer,u,f),a.version=u.version}}return{get:o,remove:l,update:h}}class Er extends Ut{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,l=Math.floor(n),h=Math.floor(i),u=l+1,f=h+1,a=e/l,c=t/h,d=[],m=[],g=[],_=[];for(let p=0;p<f;p++){const v=p*c-o;for(let x=0;x<u;x++){const b=x*a-s;m.push(b,-v,0),g.push(0,0,1),_.push(x/l),_.push(1-p/h)}}for(let p=0;p<h;p++)for(let v=0;v<l;v++){const x=v+u*p,b=v+u*(p+1),A=v+1+u*(p+1),E=v+1+u*p;d.push(x,b,E),d.push(b,A,E)}this.setIndex(d),this.setAttribute("position",new mt(m,3)),this.setAttribute("normal",new mt(g,3)),this.setAttribute("uv",new mt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ou=`#ifdef USE_ALPHAHASH
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
#endif`,zu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ku=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Gu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vu=`#ifdef USE_AOMAP
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
#endif`,Wu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qu=`#ifdef USE_BATCHING
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
#endif`,Xu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Yu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ju=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$u=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ku=`#ifdef USE_IRIDESCENCE
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
#endif`,Zu=`#ifdef USE_BUMPMAP
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
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,od=`#define PI 3.141592653589793
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
} // validated`,ad=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ld=`vec3 transformedNormal = objectNormal;
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
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ud=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fd="gl_FragColor = linearToOutputTexel( gl_FragColor );",pd=`
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
}`,md=`#ifdef USE_ENVMAP
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
#endif`,_d=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gd=`#ifdef USE_ENVMAP
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
#endif`,vd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xd=`#ifdef USE_ENVMAP
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
#endif`,yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Md=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wd=`#ifdef USE_GRADIENTMAP
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
}`,Ed=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ad=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rd=`uniform bool receiveShadow;
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
#endif`,Pd=`#ifdef USE_ENVMAP
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
#endif`,Ld=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nd=`PhysicalMaterial material;
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
#endif`,Ud=`struct PhysicalMaterial {
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
}`,Bd=`
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
#endif`,Od=`#if defined( RE_IndirectDiffuse )
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
#endif`,zd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Vd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Wd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yd=`#if defined( USE_POINTS_UV )
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
#endif`,jd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$d=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zd=`#ifdef USE_MORPHNORMALS
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
#endif`,Qd=`#ifdef USE_MORPHTARGETS
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
#endif`,Jd=`#ifdef USE_MORPHTARGETS
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
#endif`,ef=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,of=`#ifdef USE_NORMALMAP
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
#endif`,af=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,df=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ff=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_f=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bf=`float getShadowMask() {
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
}`,Sf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wf=`#ifdef USE_SKINNING
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
#endif`,Ef=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tf=`#ifdef USE_SKINNING
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
#endif`,Af=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lf=`#ifdef USE_TRANSMISSION
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
#endif`,If=`#ifdef USE_TRANSMISSION
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
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Of=`uniform sampler2D t2D;
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
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`#include <common>
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
}`,Wf=`#if DEPTH_PACKING == 3200
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
}`,qf=`#define DISTANCE
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
}`,Xf=`#define DISTANCE
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
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$f=`uniform float scale;
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
}`,Kf=`uniform vec3 diffuse;
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
}`,Zf=`#include <common>
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
}`,Qf=`uniform vec3 diffuse;
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
}`,Jf=`#define LAMBERT
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
}`,ep=`#define LAMBERT
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
}`,tp=`#define MATCAP
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
}`,np=`#define MATCAP
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
}`,ip=`#define NORMAL
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
}`,sp=`#define NORMAL
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
}`,rp=`#define PHONG
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
}`,op=`#define PHONG
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
}`,ap=`#define STANDARD
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
}`,lp=`#define STANDARD
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
}`,cp=`#define TOON
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
}`,hp=`#define TOON
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
}`,up=`uniform float size;
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
}`,dp=`uniform vec3 diffuse;
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
}`,fp=`#include <common>
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
}`,pp=`uniform vec3 color;
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
}`,mp=`uniform float rotation;
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
}`,_p=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:Bu,alphahash_pars_fragment:Ou,alphamap_fragment:zu,alphamap_pars_fragment:ku,alphatest_fragment:Hu,alphatest_pars_fragment:Gu,aomap_fragment:Vu,aomap_pars_fragment:Wu,batching_pars_vertex:qu,batching_vertex:Xu,begin_vertex:Yu,beginnormal_vertex:ju,bsdfs:$u,iridescence_fragment:Ku,bumpmap_pars_fragment:Zu,clipping_planes_fragment:Qu,clipping_planes_pars_fragment:Ju,clipping_planes_pars_vertex:ed,clipping_planes_vertex:td,color_fragment:nd,color_pars_fragment:id,color_pars_vertex:sd,color_vertex:rd,common:od,cube_uv_reflection_fragment:ad,defaultnormal_vertex:ld,displacementmap_pars_vertex:cd,displacementmap_vertex:hd,emissivemap_fragment:ud,emissivemap_pars_fragment:dd,colorspace_fragment:fd,colorspace_pars_fragment:pd,envmap_fragment:md,envmap_common_pars_fragment:_d,envmap_pars_fragment:gd,envmap_pars_vertex:vd,envmap_physical_pars_fragment:Pd,envmap_vertex:xd,fog_vertex:yd,fog_pars_vertex:Md,fog_fragment:bd,fog_pars_fragment:Sd,gradientmap_pars_fragment:wd,lightmap_fragment:Ed,lightmap_pars_fragment:Td,lights_lambert_fragment:Ad,lights_lambert_pars_fragment:Cd,lights_pars_begin:Rd,lights_toon_fragment:Ld,lights_toon_pars_fragment:Id,lights_phong_fragment:Dd,lights_phong_pars_fragment:Fd,lights_physical_fragment:Nd,lights_physical_pars_fragment:Ud,lights_fragment_begin:Bd,lights_fragment_maps:Od,lights_fragment_end:zd,logdepthbuf_fragment:kd,logdepthbuf_pars_fragment:Hd,logdepthbuf_pars_vertex:Gd,logdepthbuf_vertex:Vd,map_fragment:Wd,map_pars_fragment:qd,map_particle_fragment:Xd,map_particle_pars_fragment:Yd,metalnessmap_fragment:jd,metalnessmap_pars_fragment:$d,morphcolor_vertex:Kd,morphnormal_vertex:Zd,morphtarget_pars_vertex:Qd,morphtarget_vertex:Jd,normal_fragment_begin:ef,normal_fragment_maps:tf,normal_pars_fragment:nf,normal_pars_vertex:sf,normal_vertex:rf,normalmap_pars_fragment:of,clearcoat_normal_fragment_begin:af,clearcoat_normal_fragment_maps:lf,clearcoat_pars_fragment:cf,iridescence_pars_fragment:hf,opaque_fragment:uf,packing:df,premultiplied_alpha_fragment:ff,project_vertex:pf,dithering_fragment:mf,dithering_pars_fragment:_f,roughnessmap_fragment:gf,roughnessmap_pars_fragment:vf,shadowmap_pars_fragment:xf,shadowmap_pars_vertex:yf,shadowmap_vertex:Mf,shadowmask_pars_fragment:bf,skinbase_vertex:Sf,skinning_pars_vertex:wf,skinning_vertex:Ef,skinnormal_vertex:Tf,specularmap_fragment:Af,specularmap_pars_fragment:Cf,tonemapping_fragment:Rf,tonemapping_pars_fragment:Pf,transmission_fragment:Lf,transmission_pars_fragment:If,uv_pars_fragment:Df,uv_pars_vertex:Ff,uv_vertex:Nf,worldpos_vertex:Uf,background_vert:Bf,background_frag:Of,backgroundCube_vert:zf,backgroundCube_frag:kf,cube_vert:Hf,cube_frag:Gf,depth_vert:Vf,depth_frag:Wf,distanceRGBA_vert:qf,distanceRGBA_frag:Xf,equirect_vert:Yf,equirect_frag:jf,linedashed_vert:$f,linedashed_frag:Kf,meshbasic_vert:Zf,meshbasic_frag:Qf,meshlambert_vert:Jf,meshlambert_frag:ep,meshmatcap_vert:tp,meshmatcap_frag:np,meshnormal_vert:ip,meshnormal_frag:sp,meshphong_vert:rp,meshphong_frag:op,meshphysical_vert:ap,meshphysical_frag:lp,meshtoon_vert:cp,meshtoon_frag:hp,points_vert:up,points_frag:dp,shadow_vert:fp,shadow_frag:pp,sprite_vert:mp,sprite_frag:_p},se={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},hn={basic:{uniforms:Dt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Dt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ye(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Dt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Dt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Dt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new ye(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Dt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Dt([se.points,se.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Dt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Dt([se.common,se.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Dt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Dt([se.sprite,se.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Dt([se.common,se.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Dt([se.lights,se.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};hn.physical={uniforms:Dt([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Xs={r:0,b:0,g:0};function gp(r,e,t,n,i,s,o){const l=new ye(0);let h=s===!0?0:1,u,f,a=null,c=0,d=null;function m(_,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?g(l,h):x&&x.isColor&&(g(x,1),v=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Mr)?(f===void 0&&(f=new We(new Wn(1,1,1),new Nt({name:"BackgroundCubeMaterial",uniforms:Wi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=x,f.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,f.material.toneMapped=je.getTransfer(x.colorSpace)!==et,(a!==x||c!==x.version||d!==r.toneMapping)&&(f.material.needsUpdate=!0,a=x,c=x.version,d=r.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new We(new Er(2,2),new Nt({name:"BackgroundMaterial",uniforms:Wi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=je.getTransfer(x.colorSpace)!==et,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(a!==x||c!==x.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,a=x,c=x.version,d=r.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function g(_,p){_.getRGB(Xs,wc(r)),n.buffers.color.setClear(Xs.r,Xs.g,Xs.b,p,o)}return{getClearColor:function(){return l},setClearColor:function(_,p=1){l.set(_),h=p,g(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(_){h=_,g(l,h)},render:m}}function vp(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,l={},h=_(null);let u=h,f=!1;function a(P,L,I,j,k){let H=!1;if(o){const K=g(j,I,L);u!==K&&(u=K,d(u.object)),H=p(P,j,I,k),H&&v(P,j,I,k)}else{const K=L.wireframe===!0;(u.geometry!==j.id||u.program!==I.id||u.wireframe!==K)&&(u.geometry=j.id,u.program=I.id,u.wireframe=K,H=!0)}k!==null&&t.update(k,r.ELEMENT_ARRAY_BUFFER),(H||f)&&(f=!1,B(P,L,I,j),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(P){return n.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function m(P){return n.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function g(P,L,I){const j=I.wireframe===!0;let k=l[P.id];k===void 0&&(k={},l[P.id]=k);let H=k[L.id];H===void 0&&(H={},k[L.id]=H);let K=H[j];return K===void 0&&(K=_(c()),H[j]=K),K}function _(P){const L=[],I=[],j=[];for(let k=0;k<i;k++)L[k]=0,I[k]=0,j[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:j,object:P,attributes:{},index:null}}function p(P,L,I,j){const k=u.attributes,H=L.attributes;let K=0;const Z=I.getAttributes();for(const $ in Z)if(Z[$].location>=0){const Q=k[$];let ae=H[$];if(ae===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor)),Q===void 0||Q.attribute!==ae||ae&&Q.data!==ae.data)return!0;K++}return u.attributesNum!==K||u.index!==j}function v(P,L,I,j){const k={},H=L.attributes;let K=0;const Z=I.getAttributes();for(const $ in Z)if(Z[$].location>=0){let Q=H[$];Q===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor));const ae={};ae.attribute=Q,Q&&Q.data&&(ae.data=Q.data),k[$]=ae,K++}u.attributes=k,u.attributesNum=K,u.index=j}function x(){const P=u.newAttributes;for(let L=0,I=P.length;L<I;L++)P[L]=0}function b(P){A(P,0)}function A(P,L){const I=u.newAttributes,j=u.enabledAttributes,k=u.attributeDivisors;I[P]=1,j[P]===0&&(r.enableVertexAttribArray(P),j[P]=1),k[P]!==L&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,L),k[P]=L)}function E(){const P=u.newAttributes,L=u.enabledAttributes;for(let I=0,j=L.length;I<j;I++)L[I]!==P[I]&&(r.disableVertexAttribArray(I),L[I]=0)}function C(P,L,I,j,k,H,K){K===!0?r.vertexAttribIPointer(P,L,I,k,H):r.vertexAttribPointer(P,L,I,j,k,H)}function B(P,L,I,j){if(n.isWebGL2===!1&&(P.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const k=j.attributes,H=I.getAttributes(),K=L.defaultAttributeValues;for(const Z in H){const $=H[Z];if($.location>=0){let X=k[Z];if(X===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(X=P.instanceColor)),X!==void 0){const Q=X.normalized,ae=X.itemSize,pe=t.get(X);if(pe===void 0)continue;const me=pe.buffer,Ie=pe.type,Fe=pe.bytesPerElement,Te=n.isWebGL2===!0&&(Ie===r.INT||Ie===r.UNSIGNED_INT||X.gpuType===oc);if(X.isInterleavedBufferAttribute){const qe=X.data,G=qe.stride,Rt=X.offset;if(qe.isInstancedInterleavedBuffer){for(let be=0;be<$.locationSize;be++)A($.location+be,qe.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=qe.meshPerAttribute*qe.count)}else for(let be=0;be<$.locationSize;be++)b($.location+be);r.bindBuffer(r.ARRAY_BUFFER,me);for(let be=0;be<$.locationSize;be++)C($.location+be,ae/$.locationSize,Ie,Q,G*Fe,(Rt+ae/$.locationSize*be)*Fe,Te)}else{if(X.isInstancedBufferAttribute){for(let qe=0;qe<$.locationSize;qe++)A($.location+qe,X.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let qe=0;qe<$.locationSize;qe++)b($.location+qe);r.bindBuffer(r.ARRAY_BUFFER,me);for(let qe=0;qe<$.locationSize;qe++)C($.location+qe,ae/$.locationSize,Ie,Q,ae*Fe,ae/$.locationSize*qe*Fe,Te)}}else if(K!==void 0){const Q=K[Z];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv($.location,Q);break;case 3:r.vertexAttrib3fv($.location,Q);break;case 4:r.vertexAttrib4fv($.location,Q);break;default:r.vertexAttrib1fv($.location,Q)}}}}E()}function M(){z();for(const P in l){const L=l[P];for(const I in L){const j=L[I];for(const k in j)m(j[k].object),delete j[k];delete L[I]}delete l[P]}}function w(P){if(l[P.id]===void 0)return;const L=l[P.id];for(const I in L){const j=L[I];for(const k in j)m(j[k].object),delete j[k];delete L[I]}delete l[P.id]}function F(P){for(const L in l){const I=l[L];if(I[P.id]===void 0)continue;const j=I[P.id];for(const k in j)m(j[k].object),delete j[k];delete I[P.id]}}function z(){N(),f=!0,u!==h&&(u=h,d(u.object))}function N(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:a,reset:z,resetDefaultState:N,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:b,disableUnusedAttributes:E}}function xp(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}function l(f,a){r.drawArrays(s,f,a),t.update(a,s,1)}function h(f,a,c){if(c===0)return;let d,m;if(i)d=r,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,f,a,c),t.update(a,s,c)}function u(f,a,c){if(c===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c;m++)this.render(f[m],a[m]);else{d.multiDrawArraysWEBGL(s,f,0,a,0,c);let m=0;for(let g=0;g<c;g++)m+=a[g];t.update(m,s,1)}}this.setMode=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=u}function yp(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let l=t.precision!==void 0?t.precision:"highp";const h=s(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=o||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,a=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),c=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=c>0,b=o||e.has("OES_texture_float"),A=x&&b,E=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:s,precision:l,logarithmicDepthBuffer:f,maxTextures:a,maxVertexTextures:c,maxTextureSize:d,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:A,maxSamples:E}}function Mp(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new ei,l=new Ge,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(a,c){const d=a.length!==0||c||n!==0||i;return i=c,n=a.length,d},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(a,c){t=f(a,c,0)},this.setState=function(a,c,d){const m=a.clippingPlanes,g=a.clipIntersection,_=a.clipShadows,p=r.get(a);if(!i||m===null||m.length===0||s&&!_)s?f(null):u();else{const v=s?0:n,x=v*4;let b=p.clippingState||null;h.value=b,b=f(m,c,x,d);for(let A=0;A!==x;++A)b[A]=t[A];p.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function u(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(a,c,d,m){const g=a!==null?a.length:0;let _=null;if(g!==0){if(_=h.value,m!==!0||_===null){const p=d+g*4,v=c.matrixWorldInverse;l.getNormalMatrix(v),(_===null||_.length<p)&&(_=new Float32Array(p));for(let x=0,b=d;x!==g;++x,b+=4)o.copy(a[x]).applyMatrix4(v,l),o.normal.toArray(_,b),_[b+3]=o.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}function bp(r){let e=new WeakMap;function t(o,l){return l===yo?o.mapping=Hi:l===Mo&&(o.mapping=Gi),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===yo||l===Mo)if(e.has(o)){const h=e.get(o).texture;return t(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const u=new Du(h.height/2);return u.fromEquirectangularTexture(r,o),e.set(o,u),o.addEventListener("dispose",i),t(u.texture,o.mapping)}else return null}}return o}function i(o){const l=o.target;l.removeEventListener("dispose",i);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Oo extends Ec{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,l=i+t,h=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,l-=f*this.view.offsetY,h=l-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ui=4,Ka=[.125,.215,.35,.446,.526,.582],ii=20,to=new Oo,Za=new ye;let no=null,io=0,so=0;const ti=(1+Math.sqrt(5))/2,Ai=1/ti,Qa=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,ti,Ai),new U(0,ti,-Ai),new U(Ai,0,ti),new U(-Ai,0,ti),new U(ti,Ai,0),new U(-ti,Ai,0)];class To{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){no=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),so=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=el(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(no,io,so),e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),no=this._renderer.getRenderTarget(),io=this._renderer.getActiveCubeFace(),so=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bt,minFilter:bt,generateMipmaps:!1,type:Cn,format:nn,colorSpace:Pn,depthBuffer:!1},i=Ja(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ja(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sp(s)),this._blurMaterial=wp(s,e,t)}return i}_compileMaterial(e){const t=new We(this._lodPlanes[0],e);this._renderer.compile(t,to)}_sceneToCubeUV(e,t,n,i){const l=new Gt(90,1,t,n),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,a=f.autoClear,c=f.toneMapping;f.getClearColor(Za),f.toneMapping=An,f.autoClear=!1;const d=new ui({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),m=new We(new Wn,d);let g=!1;const _=e.background;_?_.isColor&&(d.color.copy(_),e.background=null,g=!0):(d.color.copy(Za),g=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(l.up.set(0,h[p],0),l.lookAt(u[p],0,0)):v===1?(l.up.set(0,0,h[p]),l.lookAt(0,u[p],0)):(l.up.set(0,h[p],0),l.lookAt(0,0,u[p]));const x=this._cubeSize;Ys(i,v*x,p>2?x:0,x,x),f.setRenderTarget(i),g&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=c,f.autoClear=a,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Hi||e.mapping===Gi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=el());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new We(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const h=this._cubeSize;Ys(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(o,to)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Qa[(i-1)%Qa.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,l){const h=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,a=new We(this._lodPlanes[i],u),c=u.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ii-1),g=s/m,_=isFinite(s)?1+Math.floor(f*g):ii;_>ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ii}`);const p=[];let v=0;for(let C=0;C<ii;++C){const B=C/g,M=Math.exp(-B*B/2);p.push(M),C===0?v+=M:C<_&&(v+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;c.envMap.value=e.texture,c.samples.value=_,c.weights.value=p,c.latitudinal.value=o==="latitudinal",l&&(c.poleAxis.value=l);const{_lodMax:x}=this;c.dTheta.value=m,c.mipInt.value=x-n;const b=this._sizeLods[i],A=3*b*(i>x-Ui?i-x+Ui:0),E=4*(this._cubeSize-b);Ys(t,A,E,3*b,2*b),h.setRenderTarget(t),h.render(a,to)}}function Sp(r){const e=[],t=[],n=[];let i=r;const s=r-Ui+1+Ka.length;for(let o=0;o<s;o++){const l=Math.pow(2,i);t.push(l);let h=1/l;o>r-Ui?h=Ka[o-r+Ui-1]:o===0&&(h=0),n.push(h);const u=1/(l-2),f=-u,a=1+u,c=[f,f,a,f,a,a,f,f,a,a,f,a],d=6,m=6,g=3,_=2,p=1,v=new Float32Array(g*m*d),x=new Float32Array(_*m*d),b=new Float32Array(p*m*d);for(let E=0;E<d;E++){const C=E%3*2/3-1,B=E>2?0:-1,M=[C,B,0,C+2/3,B,0,C+2/3,B+1,0,C,B,0,C+2/3,B+1,0,C,B+1,0];v.set(M,g*m*E),x.set(c,_*m*E);const w=[E,E,E,E,E,E];b.set(w,p*m*E)}const A=new Ut;A.setAttribute("position",new Vt(v,g)),A.setAttribute("uv",new Vt(x,_)),A.setAttribute("faceIndex",new Vt(b,p)),e.push(A),i>Ui&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ja(r,e,t){const n=new rn(r,e,t);return n.texture.mapping=Mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function wp(r,e,t){const n=new Float32Array(ii),i=new U(0,1,0);return new Nt({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zo(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function el(){return new Nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zo(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function tl(){return new Nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function zo(){return`

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
	`}function Ep(r){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const h=l.mapping,u=h===yo||h===Mo,f=h===Hi||h===Gi;if(u||f)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let a=e.get(l);return t===null&&(t=new To(r)),a=u?t.fromEquirectangular(l,a):t.fromCubemap(l,a),e.set(l,a),a.texture}else{if(e.has(l))return e.get(l).texture;{const a=l.image;if(u&&a&&a.height>0||f&&a&&i(a)){t===null&&(t=new To(r));const c=u?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,c),l.addEventListener("dispose",s),c.texture}else return null}}}return l}function i(l){let h=0;const u=6;for(let f=0;f<u;f++)l[f]!==void 0&&h++;return h===u}function s(l){const h=l.target;h.removeEventListener("dispose",s);const u=e.get(h);u!==void 0&&(e.delete(h),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Tp(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ap(r,e,t,n){const i={},s=new WeakMap;function o(a){const c=a.target;c.index!==null&&e.remove(c.index);for(const m in c.attributes)e.remove(c.attributes[m]);for(const m in c.morphAttributes){const g=c.morphAttributes[m];for(let _=0,p=g.length;_<p;_++)e.remove(g[_])}c.removeEventListener("dispose",o),delete i[c.id];const d=s.get(c);d&&(e.remove(d),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function l(a,c){return i[c.id]===!0||(c.addEventListener("dispose",o),i[c.id]=!0,t.memory.geometries++),c}function h(a){const c=a.attributes;for(const m in c)e.update(c[m],r.ARRAY_BUFFER);const d=a.morphAttributes;for(const m in d){const g=d[m];for(let _=0,p=g.length;_<p;_++)e.update(g[_],r.ARRAY_BUFFER)}}function u(a){const c=[],d=a.index,m=a.attributes.position;let g=0;if(d!==null){const v=d.array;g=d.version;for(let x=0,b=v.length;x<b;x+=3){const A=v[x+0],E=v[x+1],C=v[x+2];c.push(A,E,E,C,C,A)}}else if(m!==void 0){const v=m.array;g=m.version;for(let x=0,b=v.length/3-1;x<b;x+=3){const A=x+0,E=x+1,C=x+2;c.push(A,E,E,C,C,A)}}else return;const _=new(mc(c)?Sc:bc)(c,1);_.version=g;const p=s.get(a);p&&e.remove(p),s.set(a,_)}function f(a){const c=s.get(a);if(c){const d=a.index;d!==null&&c.version<d.version&&u(a)}else u(a);return s.get(a)}return{get:l,update:h,getWireframeAttribute:f}}function Cp(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let l,h;function u(d){l=d.type,h=d.bytesPerElement}function f(d,m){r.drawElements(s,m,l,d*h),t.update(m,s,1)}function a(d,m,g){if(g===0)return;let _,p;if(i)_=r,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,m,l,d*h,g),t.update(m,s,g)}function c(d,m,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<g;p++)this.render(d[p]/h,m[p]);else{_.multiDrawElementsWEBGL(s,m,0,l,d,0,g);let p=0;for(let v=0;v<g;v++)p+=m[v];t.update(p,s,1)}}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=a,this.renderMultiDraw=c}function Rp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,l){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=l*(s/3);break;case r.LINES:t.lines+=l*(s/2);break;case r.LINE_STRIP:t.lines+=l*(s-1);break;case r.LINE_LOOP:t.lines+=l*s;break;case r.POINTS:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Pp(r,e){return r[0]-e[0]}function Lp(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Ip(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new it,l=[];for(let u=0;u<8;u++)l[u]=[u,0];function h(u,f,a){const c=u.morphTargetInfluences;if(e.isWebGL2===!0){const d=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,m=d!==void 0?d.length:0;let g=s.get(f);if(g===void 0||g.count!==m){let P=function(){z.dispose(),s.delete(f),f.removeEventListener("dispose",P)};g!==void 0&&g.texture.dispose();const v=f.morphAttributes.position!==void 0,x=f.morphAttributes.normal!==void 0,b=f.morphAttributes.color!==void 0,A=f.morphAttributes.position||[],E=f.morphAttributes.normal||[],C=f.morphAttributes.color||[];let B=0;v===!0&&(B=1),x===!0&&(B=2),b===!0&&(B=3);let M=f.attributes.position.count*B,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const F=new Float32Array(M*w*4*m),z=new vc(F,M,w,m);z.type=On,z.needsUpdate=!0;const N=B*4;for(let L=0;L<m;L++){const I=A[L],j=E[L],k=C[L],H=M*w*4*L;for(let K=0;K<I.count;K++){const Z=K*N;v===!0&&(o.fromBufferAttribute(I,K),F[H+Z+0]=o.x,F[H+Z+1]=o.y,F[H+Z+2]=o.z,F[H+Z+3]=0),x===!0&&(o.fromBufferAttribute(j,K),F[H+Z+4]=o.x,F[H+Z+5]=o.y,F[H+Z+6]=o.z,F[H+Z+7]=0),b===!0&&(o.fromBufferAttribute(k,K),F[H+Z+8]=o.x,F[H+Z+9]=o.y,F[H+Z+10]=o.z,F[H+Z+11]=k.itemSize===4?o.w:1)}}g={count:m,texture:z,size:new _e(M,w)},s.set(f,g),f.addEventListener("dispose",P)}let _=0;for(let v=0;v<c.length;v++)_+=c[v];const p=f.morphTargetsRelative?1:1-_;a.getUniforms().setValue(r,"morphTargetBaseInfluence",p),a.getUniforms().setValue(r,"morphTargetInfluences",c),a.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),a.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}else{const d=c===void 0?0:c.length;let m=n[f.id];if(m===void 0||m.length!==d){m=[];for(let x=0;x<d;x++)m[x]=[x,0];n[f.id]=m}for(let x=0;x<d;x++){const b=m[x];b[0]=x,b[1]=c[x]}m.sort(Lp);for(let x=0;x<8;x++)x<d&&m[x][1]?(l[x][0]=m[x][0],l[x][1]=m[x][1]):(l[x][0]=Number.MAX_SAFE_INTEGER,l[x][1]=0);l.sort(Pp);const g=f.morphAttributes.position,_=f.morphAttributes.normal;let p=0;for(let x=0;x<8;x++){const b=l[x],A=b[0],E=b[1];A!==Number.MAX_SAFE_INTEGER&&E?(g&&f.getAttribute("morphTarget"+x)!==g[A]&&f.setAttribute("morphTarget"+x,g[A]),_&&f.getAttribute("morphNormal"+x)!==_[A]&&f.setAttribute("morphNormal"+x,_[A]),i[x]=E,p+=E):(g&&f.hasAttribute("morphTarget"+x)===!0&&f.deleteAttribute("morphTarget"+x),_&&f.hasAttribute("morphNormal"+x)===!0&&f.deleteAttribute("morphNormal"+x),i[x]=0)}const v=f.morphTargetsRelative?1:1-p;a.getUniforms().setValue(r,"morphTargetBaseInfluence",v),a.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:h}}function Dp(r,e,t,n){let i=new WeakMap;function s(h){const u=n.render.frame,f=h.geometry,a=e.get(h,f);if(i.get(a)!==u&&(e.update(a),i.set(a,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),i.get(h)!==u&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),i.set(h,u))),h.isSkinnedMesh){const c=h.skeleton;i.get(c)!==u&&(c.update(),i.set(c,u))}return a}function o(){i=new WeakMap}function l(h){const u=h.target;u.removeEventListener("dispose",l),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class Cc extends Ot{constructor(e,t,n,i,s,o,l,h,u,f){if(f=f!==void 0?f:ai,f!==ai&&f!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===ai&&(n=Bn),n===void 0&&f===Vi&&(n=oi),super(null,i,s,o,l,h,f,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:Ft,this.minFilter=h!==void 0?h:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Rc=new Ot,Pc=new Cc(1,1);Pc.compareFunction=pc;const Lc=new vc,Ic=new gu,Dc=new Tc,nl=[],il=[],sl=new Float32Array(16),rl=new Float32Array(9),ol=new Float32Array(4);function ji(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=nl[i];if(s===void 0&&(s=new Float32Array(i),nl[i]=s),e!==0){n.toArray(s,0);for(let o=1,l=0;o!==e;++o)l+=t,r[o].toArray(s,l)}return s}function _t(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function gt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Tr(r,e){let t=il[e];t===void 0&&(t=new Int32Array(e),il[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Fp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Np(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;r.uniform2fv(this.addr,e),gt(t,e)}}function Up(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;r.uniform3fv(this.addr,e),gt(t,e)}}function Bp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;r.uniform4fv(this.addr,e),gt(t,e)}}function Op(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(_t(t,n))return;ol.set(n),r.uniformMatrix2fv(this.addr,!1,ol),gt(t,n)}}function zp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(_t(t,n))return;rl.set(n),r.uniformMatrix3fv(this.addr,!1,rl),gt(t,n)}}function kp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(_t(t,n))return;sl.set(n),r.uniformMatrix4fv(this.addr,!1,sl),gt(t,n)}}function Hp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Gp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;r.uniform2iv(this.addr,e),gt(t,e)}}function Vp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;r.uniform3iv(this.addr,e),gt(t,e)}}function Wp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;r.uniform4iv(this.addr,e),gt(t,e)}}function qp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Xp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;r.uniform2uiv(this.addr,e),gt(t,e)}}function Yp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;r.uniform3uiv(this.addr,e),gt(t,e)}}function jp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;r.uniform4uiv(this.addr,e),gt(t,e)}}function $p(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Pc:Rc;t.setTexture2D(e||s,i)}function Kp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ic,i)}function Zp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Dc,i)}function Qp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Lc,i)}function Jp(r){switch(r){case 5126:return Fp;case 35664:return Np;case 35665:return Up;case 35666:return Bp;case 35674:return Op;case 35675:return zp;case 35676:return kp;case 5124:case 35670:return Hp;case 35667:case 35671:return Gp;case 35668:case 35672:return Vp;case 35669:case 35673:return Wp;case 5125:return qp;case 36294:return Xp;case 36295:return Yp;case 36296:return jp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return Kp;case 35680:case 36300:case 36308:case 36293:return Zp;case 36289:case 36303:case 36311:case 36292:return Qp}}function em(r,e){r.uniform1fv(this.addr,e)}function tm(r,e){const t=ji(e,this.size,2);r.uniform2fv(this.addr,t)}function nm(r,e){const t=ji(e,this.size,3);r.uniform3fv(this.addr,t)}function im(r,e){const t=ji(e,this.size,4);r.uniform4fv(this.addr,t)}function sm(r,e){const t=ji(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function rm(r,e){const t=ji(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function om(r,e){const t=ji(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function am(r,e){r.uniform1iv(this.addr,e)}function lm(r,e){r.uniform2iv(this.addr,e)}function cm(r,e){r.uniform3iv(this.addr,e)}function hm(r,e){r.uniform4iv(this.addr,e)}function um(r,e){r.uniform1uiv(this.addr,e)}function dm(r,e){r.uniform2uiv(this.addr,e)}function fm(r,e){r.uniform3uiv(this.addr,e)}function pm(r,e){r.uniform4uiv(this.addr,e)}function mm(r,e,t){const n=this.cache,i=e.length,s=Tr(t,i);_t(n,s)||(r.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Rc,s[o])}function _m(r,e,t){const n=this.cache,i=e.length,s=Tr(t,i);_t(n,s)||(r.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ic,s[o])}function gm(r,e,t){const n=this.cache,i=e.length,s=Tr(t,i);_t(n,s)||(r.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Dc,s[o])}function vm(r,e,t){const n=this.cache,i=e.length,s=Tr(t,i);_t(n,s)||(r.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Lc,s[o])}function xm(r){switch(r){case 5126:return em;case 35664:return tm;case 35665:return nm;case 35666:return im;case 35674:return sm;case 35675:return rm;case 35676:return om;case 5124:case 35670:return am;case 35667:case 35671:return lm;case 35668:case 35672:return cm;case 35669:case 35673:return hm;case 5125:return um;case 36294:return dm;case 36295:return fm;case 36296:return pm;case 35678:case 36198:case 36298:case 36306:case 35682:return mm;case 35679:case 36299:case 36307:return _m;case 35680:case 36300:case 36308:case 36293:return gm;case 36289:case 36303:case 36311:case 36292:return vm}}class ym{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jp(t.type)}}class Mm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xm(t.type)}}class bm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const l=i[s];l.setValue(e,t[l.id],n)}}}const ro=/(\w+)(\])?(\[|\.)?/g;function al(r,e){r.seq.push(e),r.map[e.id]=e}function Sm(r,e,t){const n=r.name,i=n.length;for(ro.lastIndex=0;;){const s=ro.exec(n),o=ro.lastIndex;let l=s[1];const h=s[2]==="]",u=s[3];if(h&&(l=l|0),u===void 0||u==="["&&o+2===i){al(t,u===void 0?new ym(l,r,e):new Mm(l,r,e));break}else{let a=t.map[l];a===void 0&&(a=new bm(l),al(t,a)),t=a}}}class ar{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Sm(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const l=t[s],h=n[l.id];h.needsUpdate!==!1&&l.setValue(e,h.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ll(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const wm=37297;let Em=0;function Tm(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}function Am(r){const e=je.getPrimaries(je.workingColorSpace),t=je.getPrimaries(r);let n;switch(e===t?n="":e===dr&&t===ur?n="LinearDisplayP3ToLinearSRGB":e===ur&&t===dr&&(n="LinearSRGBToLinearDisplayP3"),r){case Pn:case br:return[n,"LinearTransferOETF"];case Mt:case No:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function cl(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Tm(r.getShaderSource(e),o)}else return i}function Cm(r,e){const t=Am(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Rm(r,e){let t;switch(e){case ec:t="Linear";break;case tc:t="Reinhard";break;case nc:t="OptimizedCineon";break;case ic:t="ACESFilmic";break;case sc:t="AgX";break;case Ih:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Pm(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bi).join(`
`)}function Lm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Bi).join(`
`)}function Im(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Dm(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let l=1;s.type===r.FLOAT_MAT2&&(l=2),s.type===r.FLOAT_MAT3&&(l=3),s.type===r.FLOAT_MAT4&&(l=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:l}}return t}function Bi(r){return r!==""}function hl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ul(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ao(r){return r.replace(Fm,Um)}const Nm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Um(r,e){let t=Ue[e];if(t===void 0){const n=Nm.get(e);if(n!==void 0)t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ao(t)}const Bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dl(r){return r.replace(Bm,Om)}function Om(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function fl(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zm(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ql?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Jl?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===wn&&(e="SHADOWMAP_TYPE_VSM"),e}function km(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Hi:case Gi:e="ENVMAP_TYPE_CUBE";break;case Mr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hm(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Gi:e="ENVMAP_MODE_REFRACTION";break}return e}function Gm(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Io:e="ENVMAP_BLENDING_MULTIPLY";break;case Ph:e="ENVMAP_BLENDING_MIX";break;case Lh:e="ENVMAP_BLENDING_ADD";break}return e}function Vm(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Wm(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,l=t.fragmentShader;const h=zm(t),u=km(t),f=Hm(t),a=Gm(t),c=Vm(t),d=t.isWebGL2?"":Pm(t),m=Lm(t),g=Im(s),_=i.createProgram();let p,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Bi).join(`
`),p.length>0&&(p+=`
`),v=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Bi).join(`
`),v.length>0&&(v+=`
`)):(p=[fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bi).join(`
`),v=[d,fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+a:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==An?"#define TONE_MAPPING":"",t.toneMapping!==An?Ue.tonemapping_pars_fragment:"",t.toneMapping!==An?Rm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Cm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bi).join(`
`)),o=Ao(o),o=hl(o,t),o=ul(o,t),l=Ao(l),l=hl(l,t),l=ul(l,t),o=dl(o),l=dl(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ia?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ia?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const b=x+p+o,A=x+v+l,E=ll(i,i.VERTEX_SHADER,b),C=ll(i,i.FRAGMENT_SHADER,A);i.attachShader(_,E),i.attachShader(_,C),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function B(z){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(_).trim(),P=i.getShaderInfoLog(E).trim(),L=i.getShaderInfoLog(C).trim();let I=!0,j=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(I=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,E,C);else{const k=cl(i,E,"vertex"),H=cl(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+k+`
`+H)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(P===""||L==="")&&(j=!1);j&&(z.diagnostics={runnable:I,programLog:N,vertexShader:{log:P,prefix:p},fragmentShader:{log:L,prefix:v}})}i.deleteShader(E),i.deleteShader(C),M=new ar(i,_),w=Dm(i,_)}let M;this.getUniforms=function(){return M===void 0&&B(this),M};let w;this.getAttributes=function(){return w===void 0&&B(this),w};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(_,wm)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Em++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=C,this}let qm=0;class Xm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ym(e),t.set(e,n)),n}}class Ym{constructor(e){this.id=qm++,this.code=e,this.usedTimes=0}}function jm(r,e,t,n,i,s,o){const l=new yc,h=new Xm,u=[],f=i.isWebGL2,a=i.logarithmicDepthBuffer,c=i.vertexTextures;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function _(M,w,F,z,N){const P=z.fog,L=N.geometry,I=M.isMeshStandardMaterial?z.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||I),k=j&&j.mapping===Mr?j.image.height:null,H=m[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const K=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Z=K!==void 0?K.length:0;let $=0;L.morphAttributes.position!==void 0&&($=1),L.morphAttributes.normal!==void 0&&($=2),L.morphAttributes.color!==void 0&&($=3);let X,Q,ae,pe;if(H){const Pt=hn[H];X=Pt.vertexShader,Q=Pt.fragmentShader}else X=M.vertexShader,Q=M.fragmentShader,h.update(M),ae=h.getVertexShaderID(M),pe=h.getFragmentShaderID(M);const me=r.getRenderTarget(),Ie=N.isInstancedMesh===!0,Fe=N.isBatchedMesh===!0,Te=!!M.map,qe=!!M.matcap,G=!!j,Rt=!!M.aoMap,be=!!M.lightMap,Pe=!!M.bumpMap,ge=!!M.normalMap,st=!!M.displacementMap,Be=!!M.emissiveMap,R=!!M.metalnessMap,S=!!M.roughnessMap,W=M.anisotropy>0,te=M.clearcoat>0,ee=M.iridescence>0,ne=M.sheen>0,ve=M.transmission>0,le=W&&!!M.anisotropyMap,de=te&&!!M.clearcoatMap,Ee=te&&!!M.clearcoatNormalMap,Oe=te&&!!M.clearcoatRoughnessMap,J=ee&&!!M.iridescenceMap,$e=ee&&!!M.iridescenceThicknessMap,Ve=ne&&!!M.sheenColorMap,Re=ne&&!!M.sheenRoughnessMap,Me=!!M.specularMap,fe=!!M.specularColorMap,Ne=!!M.specularIntensityMap,Ye=ve&&!!M.transmissionMap,ot=ve&&!!M.thicknessMap,ke=!!M.gradientMap,ie=!!M.alphaMap,D=M.alphaTest>0,re=!!M.alphaHash,oe=!!M.extensions,Ae=!!L.attributes.uv1,Se=!!L.attributes.uv2,Ze=!!L.attributes.uv3;let Qe=An;return M.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Qe=r.toneMapping),{isWebGL2:f,shaderID:H,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:Q,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:pe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Fe,instancing:Ie,instancingColor:Ie&&N.instanceColor!==null,supportsVertexTextures:c,outputColorSpace:me===null?r.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Pn,map:Te,matcap:qe,envMap:G,envMapMode:G&&j.mapping,envMapCubeUVHeight:k,aoMap:Rt,lightMap:be,bumpMap:Pe,normalMap:ge,displacementMap:c&&st,emissiveMap:Be,normalMapObjectSpace:ge&&M.normalMapType===Wh,normalMapTangentSpace:ge&&M.normalMapType===Fo,metalnessMap:R,roughnessMap:S,anisotropy:W,anisotropyMap:le,clearcoat:te,clearcoatMap:de,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Oe,iridescence:ee,iridescenceMap:J,iridescenceThicknessMap:$e,sheen:ne,sheenColorMap:Ve,sheenRoughnessMap:Re,specularMap:Me,specularColorMap:fe,specularIntensityMap:Ne,transmission:ve,transmissionMap:Ye,thicknessMap:ot,gradientMap:ke,opaque:M.transparent===!1&&M.blending===ri,alphaMap:ie,alphaTest:D,alphaHash:re,combine:M.combine,mapUv:Te&&g(M.map.channel),aoMapUv:Rt&&g(M.aoMap.channel),lightMapUv:be&&g(M.lightMap.channel),bumpMapUv:Pe&&g(M.bumpMap.channel),normalMapUv:ge&&g(M.normalMap.channel),displacementMapUv:st&&g(M.displacementMap.channel),emissiveMapUv:Be&&g(M.emissiveMap.channel),metalnessMapUv:R&&g(M.metalnessMap.channel),roughnessMapUv:S&&g(M.roughnessMap.channel),anisotropyMapUv:le&&g(M.anisotropyMap.channel),clearcoatMapUv:de&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Re&&g(M.sheenRoughnessMap.channel),specularMapUv:Me&&g(M.specularMap.channel),specularColorMapUv:fe&&g(M.specularColorMap.channel),specularIntensityMapUv:Ne&&g(M.specularIntensityMap.channel),transmissionMapUv:Ye&&g(M.transmissionMap.channel),thicknessMapUv:ot&&g(M.thicknessMap.channel),alphaMapUv:ie&&g(M.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ge||W),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:Ae,vertexUv2s:Se,vertexUv3s:Ze,pointsUvs:N.isPoints===!0&&!!L.attributes.uv&&(Te||ie),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:a,skinning:N.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:$,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:Qe,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Te&&M.map.isVideoTexture===!0&&je.getTransfer(M.map.colorSpace)===et,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===en,flipSided:M.side===Ct,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:oe&&M.extensions.derivatives===!0,extensionFragDepth:oe&&M.extensions.fragDepth===!0,extensionDrawBuffers:oe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const F in M.defines)w.push(F),w.push(M.defines[F]);return M.isRawShaderMaterial===!1&&(v(w,M),x(w,M),w.push(r.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function v(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function x(M,w){l.disableAll(),w.isWebGL2&&l.enable(0),w.supportsVertexTextures&&l.enable(1),w.instancing&&l.enable(2),w.instancingColor&&l.enable(3),w.matcap&&l.enable(4),w.envMap&&l.enable(5),w.normalMapObjectSpace&&l.enable(6),w.normalMapTangentSpace&&l.enable(7),w.clearcoat&&l.enable(8),w.iridescence&&l.enable(9),w.alphaTest&&l.enable(10),w.vertexColors&&l.enable(11),w.vertexAlphas&&l.enable(12),w.vertexUv1s&&l.enable(13),w.vertexUv2s&&l.enable(14),w.vertexUv3s&&l.enable(15),w.vertexTangents&&l.enable(16),w.anisotropy&&l.enable(17),w.alphaHash&&l.enable(18),w.batching&&l.enable(19),M.push(l.mask),l.disableAll(),w.fog&&l.enable(0),w.useFog&&l.enable(1),w.flatShading&&l.enable(2),w.logarithmicDepthBuffer&&l.enable(3),w.skinning&&l.enable(4),w.morphTargets&&l.enable(5),w.morphNormals&&l.enable(6),w.morphColors&&l.enable(7),w.premultipliedAlpha&&l.enable(8),w.shadowMapEnabled&&l.enable(9),w.useLegacyLights&&l.enable(10),w.doubleSided&&l.enable(11),w.flipSided&&l.enable(12),w.useDepthPacking&&l.enable(13),w.dithering&&l.enable(14),w.transmission&&l.enable(15),w.sheen&&l.enable(16),w.opaque&&l.enable(17),w.pointsUvs&&l.enable(18),w.decodeVideoTexture&&l.enable(19),M.push(l.mask)}function b(M){const w=m[M.type];let F;if(w){const z=hn[w];F=gs.clone(z.uniforms)}else F=M.uniforms;return F}function A(M,w){let F;for(let z=0,N=u.length;z<N;z++){const P=u[z];if(P.cacheKey===w){F=P,++F.usedTimes;break}}return F===void 0&&(F=new Wm(r,w,M,s),u.push(F)),F}function E(M){if(--M.usedTimes===0){const w=u.indexOf(M);u[w]=u[u.length-1],u.pop(),M.destroy()}}function C(M){h.remove(M)}function B(){h.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:b,acquireProgram:A,releaseProgram:E,releaseShaderCache:C,programs:u,dispose:B}}function $m(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,l){r.get(s)[o]=l}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Km(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function pl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ml(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(a,c,d,m,g,_){let p=r[e];return p===void 0?(p={id:a.id,object:a,geometry:c,material:d,groupOrder:m,renderOrder:a.renderOrder,z:g,group:_},r[e]=p):(p.id=a.id,p.object=a,p.geometry=c,p.material=d,p.groupOrder=m,p.renderOrder=a.renderOrder,p.z=g,p.group=_),e++,p}function l(a,c,d,m,g,_){const p=o(a,c,d,m,g,_);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function h(a,c,d,m,g,_){const p=o(a,c,d,m,g,_);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function u(a,c){t.length>1&&t.sort(a||Km),n.length>1&&n.sort(c||pl),i.length>1&&i.sort(c||pl)}function f(){for(let a=e,c=r.length;a<c;a++){const d=r[a];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:h,finish:f,sort:u}}function Zm(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new ml,r.set(n,[o])):i>=s.length?(o=new ml,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Qm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ye};break;case"SpotLight":t={position:new U,direction:new U,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new U,halfWidth:new U,halfHeight:new U};break}return r[e.id]=t,t}}}function Jm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let e_=0;function t_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function n_(r,e){const t=new Qm,n=Jm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new U);const s=new U,o=new lt,l=new lt;function h(f,a){let c=0,d=0,m=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let g=0,_=0,p=0,v=0,x=0,b=0,A=0,E=0,C=0,B=0,M=0;f.sort(t_);const w=a===!0?Math.PI:1;for(let z=0,N=f.length;z<N;z++){const P=f[z],L=P.color,I=P.intensity,j=P.distance,k=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=L.r*I*w,d+=L.g*I*w,m+=L.b*I*w;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],I);M++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity*w),P.castShadow){const K=P.shadow,Z=n.get(P);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,i.directionalShadow[g]=Z,i.directionalShadowMap[g]=k,i.directionalShadowMatrix[g]=P.shadow.matrix,b++}i.directional[g]=H,g++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(L).multiplyScalar(I*w),H.distance=j,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[p]=H;const K=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,K.updateMatrices(P),P.castShadow&&B++),i.spotLightMatrix[p]=K.matrix,P.castShadow){const Z=n.get(P);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,i.spotShadow[p]=Z,i.spotShadowMap[p]=k,E++}p++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(L).multiplyScalar(I),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[v]=H,v++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity*w),H.distance=P.distance,H.decay=P.decay,P.castShadow){const K=P.shadow,Z=n.get(P);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,i.pointShadow[_]=Z,i.pointShadowMap[_]=k,i.pointShadowMatrix[_]=P.shadow.matrix,A++}i.point[_]=H,_++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(I*w),H.groundColor.copy(P.groundColor).multiplyScalar(I*w),i.hemi[x]=H,x++}}v>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=m;const F=i.hash;(F.directionalLength!==g||F.pointLength!==_||F.spotLength!==p||F.rectAreaLength!==v||F.hemiLength!==x||F.numDirectionalShadows!==b||F.numPointShadows!==A||F.numSpotShadows!==E||F.numSpotMaps!==C||F.numLightProbes!==M)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=v,i.point.length=_,i.hemi.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=E+C-B,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=M,F.directionalLength=g,F.pointLength=_,F.spotLength=p,F.rectAreaLength=v,F.hemiLength=x,F.numDirectionalShadows=b,F.numPointShadows=A,F.numSpotShadows=E,F.numSpotMaps=C,F.numLightProbes=M,i.version=e_++)}function u(f,a){let c=0,d=0,m=0,g=0,_=0;const p=a.matrixWorldInverse;for(let v=0,x=f.length;v<x;v++){const b=f[v];if(b.isDirectionalLight){const A=i.directional[c];A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),c++}else if(b.isSpotLight){const A=i.spot[m];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const A=i.rectArea[g];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),l.identity(),o.copy(b.matrixWorld),o.premultiply(p),l.extractRotation(o),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(l),A.halfHeight.applyMatrix4(l),g++}else if(b.isPointLight){const A=i.point[d];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){const A=i.hemi[_];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(p),_++}}}return{setup:h,setupView:u,state:i}}function _l(r,e){const t=new n_(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(a){n.push(a)}function l(a){i.push(a)}function h(a){t.setup(n,a)}function u(a){t.setupView(n,a)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:h,setupLightsView:u,pushLight:o,pushShadow:l}}function i_(r,e){let t=new WeakMap;function n(s,o=0){const l=t.get(s);let h;return l===void 0?(h=new _l(r,e),t.set(s,[h])):o>=l.length?(h=new _l(r,e),l.push(h)):h=l[o],h}function i(){t=new WeakMap}return{get:n,dispose:i}}class s_ extends Vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class r_ extends Vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const o_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a_=`uniform sampler2D shadow_pass;
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
}`;function l_(r,e,t){let n=new Bo;const i=new _e,s=new _e,o=new it,l=new s_({depthPacking:Vh}),h=new r_,u={},f=t.maxTextureSize,a={[Gn]:Ct,[Ct]:Gn,[en]:en},c=new Nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:o_,fragmentShader:a_}),d=c.clone();d.defines.HORIZONTAL_PASS=1;const m=new Ut;m.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new We(m,c),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ql;let p=this.type;this.render=function(E,C,B){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||E.length===0)return;const M=r.getRenderTarget(),w=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Tn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const N=p!==wn&&this.type===wn,P=p===wn&&this.type!==wn;for(let L=0,I=E.length;L<I;L++){const j=E[L],k=j.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const H=k.getFrameExtents();if(i.multiply(H),s.copy(k.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/H.x),i.x=s.x*H.x,k.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/H.y),i.y=s.y*H.y,k.mapSize.y=s.y)),k.map===null||N===!0||P===!0){const Z=this.type!==wn?{minFilter:Ft,magFilter:Ft}:{};k.map!==null&&k.map.dispose(),k.map=new rn(i.x,i.y,Z),k.map.texture.name=j.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const K=k.getViewportCount();for(let Z=0;Z<K;Z++){const $=k.getViewport(Z);o.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),z.viewport(o),k.updateMatrices(j,Z),n=k.getFrustum(),b(C,B,k.camera,j,this.type)}k.isPointLightShadow!==!0&&this.type===wn&&v(k,B),k.needsUpdate=!1}p=this.type,_.needsUpdate=!1,r.setRenderTarget(M,w,F)};function v(E,C){const B=e.update(g);c.defines.VSM_SAMPLES!==E.blurSamples&&(c.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,c.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new rn(i.x,i.y)),c.uniforms.shadow_pass.value=E.map.texture,c.uniforms.resolution.value=E.mapSize,c.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(C,null,B,c,g,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(C,null,B,d,g,null)}function x(E,C,B,M){let w=null;const F=B.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(F!==void 0)w=F;else if(w=B.isPointLight===!0?h:l,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const z=w.uuid,N=C.uuid;let P=u[z];P===void 0&&(P={},u[z]=P);let L=P[N];L===void 0&&(L=w.clone(),P[N]=L,C.addEventListener("dispose",A)),w=L}if(w.visible=C.visible,w.wireframe=C.wireframe,M===wn?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:a[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,B.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const z=r.properties.get(w);z.light=B}return w}function b(E,C,B,M,w){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===wn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld);const N=e.update(E),P=E.material;if(Array.isArray(P)){const L=N.groups;for(let I=0,j=L.length;I<j;I++){const k=L[I],H=P[k.materialIndex];if(H&&H.visible){const K=x(E,H,M,w);E.onBeforeShadow(r,E,C,B,N,K,k),r.renderBufferDirect(B,null,N,K,E,k),E.onAfterShadow(r,E,C,B,N,K,k)}}}else if(P.visible){const L=x(E,P,M,w);E.onBeforeShadow(r,E,C,B,N,L,null),r.renderBufferDirect(B,null,N,L,E,null),E.onAfterShadow(r,E,C,B,N,L,null)}}const z=E.children;for(let N=0,P=z.length;N<P;N++)b(z[N],C,B,M,w)}function A(E){E.target.removeEventListener("dispose",A);for(const B in u){const M=u[B],w=E.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function c_(r,e,t){const n=t.isWebGL2;function i(){let D=!1;const re=new it;let oe=null;const Ae=new it(0,0,0,0);return{setMask:function(Se){oe!==Se&&!D&&(r.colorMask(Se,Se,Se,Se),oe=Se)},setLocked:function(Se){D=Se},setClear:function(Se,Ze,Qe,vt,Pt){Pt===!0&&(Se*=vt,Ze*=vt,Qe*=vt),re.set(Se,Ze,Qe,vt),Ae.equals(re)===!1&&(r.clearColor(Se,Ze,Qe,vt),Ae.copy(re))},reset:function(){D=!1,oe=null,Ae.set(-1,0,0,0)}}}function s(){let D=!1,re=null,oe=null,Ae=null;return{setTest:function(Se){Se?Fe(r.DEPTH_TEST):Te(r.DEPTH_TEST)},setMask:function(Se){re!==Se&&!D&&(r.depthMask(Se),re=Se)},setFunc:function(Se){if(oe!==Se){switch(Se){case Sh:r.depthFunc(r.NEVER);break;case wh:r.depthFunc(r.ALWAYS);break;case Eh:r.depthFunc(r.LESS);break;case cr:r.depthFunc(r.LEQUAL);break;case Th:r.depthFunc(r.EQUAL);break;case Ah:r.depthFunc(r.GEQUAL);break;case Ch:r.depthFunc(r.GREATER);break;case Rh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}oe=Se}},setLocked:function(Se){D=Se},setClear:function(Se){Ae!==Se&&(r.clearDepth(Se),Ae=Se)},reset:function(){D=!1,re=null,oe=null,Ae=null}}}function o(){let D=!1,re=null,oe=null,Ae=null,Se=null,Ze=null,Qe=null,vt=null,Pt=null;return{setTest:function(Je){D||(Je?Fe(r.STENCIL_TEST):Te(r.STENCIL_TEST))},setMask:function(Je){re!==Je&&!D&&(r.stencilMask(Je),re=Je)},setFunc:function(Je,Lt,on){(oe!==Je||Ae!==Lt||Se!==on)&&(r.stencilFunc(Je,Lt,on),oe=Je,Ae=Lt,Se=on)},setOp:function(Je,Lt,on){(Ze!==Je||Qe!==Lt||vt!==on)&&(r.stencilOp(Je,Lt,on),Ze=Je,Qe=Lt,vt=on)},setLocked:function(Je){D=Je},setClear:function(Je){Pt!==Je&&(r.clearStencil(Je),Pt=Je)},reset:function(){D=!1,re=null,oe=null,Ae=null,Se=null,Ze=null,Qe=null,vt=null,Pt=null}}}const l=new i,h=new s,u=new o,f=new WeakMap,a=new WeakMap;let c={},d={},m=new WeakMap,g=[],_=null,p=!1,v=null,x=null,b=null,A=null,E=null,C=null,B=null,M=new ye(0,0,0),w=0,F=!1,z=null,N=null,P=null,L=null,I=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,H=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(K)[1]),k=H>=1):K.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),k=H>=2);let Z=null,$={};const X=r.getParameter(r.SCISSOR_BOX),Q=r.getParameter(r.VIEWPORT),ae=new it().fromArray(X),pe=new it().fromArray(Q);function me(D,re,oe,Ae){const Se=new Uint8Array(4),Ze=r.createTexture();r.bindTexture(D,Ze),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qe=0;Qe<oe;Qe++)n&&(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)?r.texImage3D(re,0,r.RGBA,1,1,Ae,0,r.RGBA,r.UNSIGNED_BYTE,Se):r.texImage2D(re+Qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Se);return Ze}const Ie={};Ie[r.TEXTURE_2D]=me(r.TEXTURE_2D,r.TEXTURE_2D,1),Ie[r.TEXTURE_CUBE_MAP]=me(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ie[r.TEXTURE_2D_ARRAY]=me(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ie[r.TEXTURE_3D]=me(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),h.setClear(1),u.setClear(0),Fe(r.DEPTH_TEST),h.setFunc(cr),Be(!1),R(ea),Fe(r.CULL_FACE),ge(Tn);function Fe(D){c[D]!==!0&&(r.enable(D),c[D]=!0)}function Te(D){c[D]!==!1&&(r.disable(D),c[D]=!1)}function qe(D,re){return d[D]!==re?(r.bindFramebuffer(D,re),d[D]=re,n&&(D===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=re),D===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=re)),!0):!1}function G(D,re){let oe=g,Ae=!1;if(D)if(oe=m.get(re),oe===void 0&&(oe=[],m.set(re,oe)),D.isWebGLMultipleRenderTargets){const Se=D.texture;if(oe.length!==Se.length||oe[0]!==r.COLOR_ATTACHMENT0){for(let Ze=0,Qe=Se.length;Ze<Qe;Ze++)oe[Ze]=r.COLOR_ATTACHMENT0+Ze;oe.length=Se.length,Ae=!0}}else oe[0]!==r.COLOR_ATTACHMENT0&&(oe[0]=r.COLOR_ATTACHMENT0,Ae=!0);else oe[0]!==r.BACK&&(oe[0]=r.BACK,Ae=!0);Ae&&(t.isWebGL2?r.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function Rt(D){return _!==D?(r.useProgram(D),_=D,!0):!1}const be={[ni]:r.FUNC_ADD,[lh]:r.FUNC_SUBTRACT,[ch]:r.FUNC_REVERSE_SUBTRACT};if(n)be[ia]=r.MIN,be[sa]=r.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(be[ia]=D.MIN_EXT,be[sa]=D.MAX_EXT)}const Pe={[hh]:r.ZERO,[uh]:r.ONE,[dh]:r.SRC_COLOR,[vo]:r.SRC_ALPHA,[vh]:r.SRC_ALPHA_SATURATE,[_h]:r.DST_COLOR,[ph]:r.DST_ALPHA,[fh]:r.ONE_MINUS_SRC_COLOR,[xo]:r.ONE_MINUS_SRC_ALPHA,[gh]:r.ONE_MINUS_DST_COLOR,[mh]:r.ONE_MINUS_DST_ALPHA,[xh]:r.CONSTANT_COLOR,[yh]:r.ONE_MINUS_CONSTANT_COLOR,[Mh]:r.CONSTANT_ALPHA,[bh]:r.ONE_MINUS_CONSTANT_ALPHA};function ge(D,re,oe,Ae,Se,Ze,Qe,vt,Pt,Je){if(D===Tn){p===!0&&(Te(r.BLEND),p=!1);return}if(p===!1&&(Fe(r.BLEND),p=!0),D!==ah){if(D!==v||Je!==F){if((x!==ni||E!==ni)&&(r.blendEquation(r.FUNC_ADD),x=ni,E=ni),Je)switch(D){case ri:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case lr:r.blendFunc(r.ONE,r.ONE);break;case ta:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case na:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ri:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case lr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case ta:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case na:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,A=null,C=null,B=null,M.set(0,0,0),w=0,v=D,F=Je}return}Se=Se||re,Ze=Ze||oe,Qe=Qe||Ae,(re!==x||Se!==E)&&(r.blendEquationSeparate(be[re],be[Se]),x=re,E=Se),(oe!==b||Ae!==A||Ze!==C||Qe!==B)&&(r.blendFuncSeparate(Pe[oe],Pe[Ae],Pe[Ze],Pe[Qe]),b=oe,A=Ae,C=Ze,B=Qe),(vt.equals(M)===!1||Pt!==w)&&(r.blendColor(vt.r,vt.g,vt.b,Pt),M.copy(vt),w=Pt),v=D,F=!1}function st(D,re){D.side===en?Te(r.CULL_FACE):Fe(r.CULL_FACE);let oe=D.side===Ct;re&&(oe=!oe),Be(oe),D.blending===ri&&D.transparent===!1?ge(Tn):ge(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),h.setFunc(D.depthFunc),h.setTest(D.depthTest),h.setMask(D.depthWrite),l.setMask(D.colorWrite);const Ae=D.stencilWrite;u.setTest(Ae),Ae&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),W(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Fe(r.SAMPLE_ALPHA_TO_COVERAGE):Te(r.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){z!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),z=D)}function R(D){D!==rh?(Fe(r.CULL_FACE),D!==N&&(D===ea?r.cullFace(r.BACK):D===oh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Te(r.CULL_FACE),N=D}function S(D){D!==P&&(k&&r.lineWidth(D),P=D)}function W(D,re,oe){D?(Fe(r.POLYGON_OFFSET_FILL),(L!==re||I!==oe)&&(r.polygonOffset(re,oe),L=re,I=oe)):Te(r.POLYGON_OFFSET_FILL)}function te(D){D?Fe(r.SCISSOR_TEST):Te(r.SCISSOR_TEST)}function ee(D){D===void 0&&(D=r.TEXTURE0+j-1),Z!==D&&(r.activeTexture(D),Z=D)}function ne(D,re,oe){oe===void 0&&(Z===null?oe=r.TEXTURE0+j-1:oe=Z);let Ae=$[oe];Ae===void 0&&(Ae={type:void 0,texture:void 0},$[oe]=Ae),(Ae.type!==D||Ae.texture!==re)&&(Z!==oe&&(r.activeTexture(oe),Z=oe),r.bindTexture(D,re||Ie[D]),Ae.type=D,Ae.texture=re)}function ve(){const D=$[Z];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function le(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $e(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ve(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(D){ae.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),ae.copy(D))}function Ye(D){pe.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),pe.copy(D))}function ot(D,re){let oe=a.get(re);oe===void 0&&(oe=new WeakMap,a.set(re,oe));let Ae=oe.get(D);Ae===void 0&&(Ae=r.getUniformBlockIndex(re,D.name),oe.set(D,Ae))}function ke(D,re){const Ae=a.get(re).get(D);f.get(re)!==Ae&&(r.uniformBlockBinding(re,Ae,D.__bindingPointIndex),f.set(re,Ae))}function ie(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},Z=null,$={},d={},m=new WeakMap,g=[],_=null,p=!1,v=null,x=null,b=null,A=null,E=null,C=null,B=null,M=new ye(0,0,0),w=0,F=!1,z=null,N=null,P=null,L=null,I=null,ae.set(0,0,r.canvas.width,r.canvas.height),pe.set(0,0,r.canvas.width,r.canvas.height),l.reset(),h.reset(),u.reset()}return{buffers:{color:l,depth:h,stencil:u},enable:Fe,disable:Te,bindFramebuffer:qe,drawBuffers:G,useProgram:Rt,setBlending:ge,setMaterial:st,setFlipSided:Be,setCullFace:R,setLineWidth:S,setPolygonOffset:W,setScissorTest:te,activeTexture:ee,bindTexture:ne,unbindTexture:ve,compressedTexImage2D:le,compressedTexImage3D:de,texImage2D:Me,texImage3D:fe,updateUBOMapping:ot,uniformBlockBinding:ke,texStorage2D:Ve,texStorage3D:Re,texSubImage2D:Ee,texSubImage3D:Oe,compressedTexSubImage2D:J,compressedTexSubImage3D:$e,scissor:Ne,viewport:Ye,reset:ie}}function h_(r,e,t,n,i,s,o){const l=i.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let a;const c=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,S){return d?new OffscreenCanvas(R,S):mr("canvas")}function g(R,S,W,te){let ee=1;if((R.width>te||R.height>te)&&(ee=te/Math.max(R.width,R.height)),ee<1||S===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ne=S?pr:Math.floor,ve=ne(ee*R.width),le=ne(ee*R.height);a===void 0&&(a=m(ve,le));const de=W?m(ve,le):a;return de.width=ve,de.height=le,de.getContext("2d").drawImage(R,0,0,ve,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ve+"x"+le+")."),de}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function _(R){return Eo(R.width)&&Eo(R.height)}function p(R){return l?!1:R.wrapS!==tn||R.wrapT!==tn||R.minFilter!==Ft&&R.minFilter!==bt}function v(R,S){return R.generateMipmaps&&S&&R.minFilter!==Ft&&R.minFilter!==bt}function x(R){r.generateMipmap(R)}function b(R,S,W,te,ee=!1){if(l===!1)return S;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ne=S;if(S===r.RED&&(W===r.FLOAT&&(ne=r.R32F),W===r.HALF_FLOAT&&(ne=r.R16F),W===r.UNSIGNED_BYTE&&(ne=r.R8)),S===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(ne=r.R8UI),W===r.UNSIGNED_SHORT&&(ne=r.R16UI),W===r.UNSIGNED_INT&&(ne=r.R32UI),W===r.BYTE&&(ne=r.R8I),W===r.SHORT&&(ne=r.R16I),W===r.INT&&(ne=r.R32I)),S===r.RG&&(W===r.FLOAT&&(ne=r.RG32F),W===r.HALF_FLOAT&&(ne=r.RG16F),W===r.UNSIGNED_BYTE&&(ne=r.RG8)),S===r.RGBA){const ve=ee?hr:je.getTransfer(te);W===r.FLOAT&&(ne=r.RGBA32F),W===r.HALF_FLOAT&&(ne=r.RGBA16F),W===r.UNSIGNED_BYTE&&(ne=ve===et?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(ne=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(ne=r.RGB5_A1)}return(ne===r.R16F||ne===r.R32F||ne===r.RG16F||ne===r.RG32F||ne===r.RGBA16F||ne===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function A(R,S,W){return v(R,W)===!0||R.isFramebufferTexture&&R.minFilter!==Ft&&R.minFilter!==bt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function E(R){return R===Ft||R===ra||R===Ir?r.NEAREST:r.LINEAR}function C(R){const S=R.target;S.removeEventListener("dispose",C),M(S),S.isVideoTexture&&f.delete(S)}function B(R){const S=R.target;S.removeEventListener("dispose",B),F(S)}function M(R){const S=n.get(R);if(S.__webglInit===void 0)return;const W=R.source,te=c.get(W);if(te){const ee=te[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(R),Object.keys(te).length===0&&c.delete(W)}n.remove(R)}function w(R){const S=n.get(R);r.deleteTexture(S.__webglTexture);const W=R.source,te=c.get(W);delete te[S.__cacheKey],o.memory.textures--}function F(R){const S=R.texture,W=n.get(R),te=n.get(S);if(te.__webglTexture!==void 0&&(r.deleteTexture(te.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(W.__webglFramebuffer[ee]))for(let ne=0;ne<W.__webglFramebuffer[ee].length;ne++)r.deleteFramebuffer(W.__webglFramebuffer[ee][ne]);else r.deleteFramebuffer(W.__webglFramebuffer[ee]);W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer[ee])}else{if(Array.isArray(W.__webglFramebuffer))for(let ee=0;ee<W.__webglFramebuffer.length;ee++)r.deleteFramebuffer(W.__webglFramebuffer[ee]);else r.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&r.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let ee=0;ee<W.__webglColorRenderbuffer.length;ee++)W.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(W.__webglColorRenderbuffer[ee]);W.__webglDepthRenderbuffer&&r.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ee=0,ne=S.length;ee<ne;ee++){const ve=n.get(S[ee]);ve.__webglTexture&&(r.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(S[ee])}n.remove(S),n.remove(R)}let z=0;function N(){z=0}function P(){const R=z;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),z+=1,R}function L(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function I(R,S){const W=n.get(R);if(R.isVideoTexture&&st(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const te=R.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(W,R,S);return}}t.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+S)}function j(R,S){const W=n.get(R);if(R.version>0&&W.__version!==R.version){ae(W,R,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+S)}function k(R,S){const W=n.get(R);if(R.version>0&&W.__version!==R.version){ae(W,R,S);return}t.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+S)}function H(R,S){const W=n.get(R);if(R.version>0&&W.__version!==R.version){pe(W,R,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+S)}const K={[ps]:r.REPEAT,[tn]:r.CLAMP_TO_EDGE,[bo]:r.MIRRORED_REPEAT},Z={[Ft]:r.NEAREST,[ra]:r.NEAREST_MIPMAP_NEAREST,[Ir]:r.NEAREST_MIPMAP_LINEAR,[bt]:r.LINEAR,[Dh]:r.LINEAR_MIPMAP_NEAREST,[ms]:r.LINEAR_MIPMAP_LINEAR},$={[qh]:r.NEVER,[Zh]:r.ALWAYS,[Xh]:r.LESS,[pc]:r.LEQUAL,[Yh]:r.EQUAL,[Kh]:r.GEQUAL,[jh]:r.GREATER,[$h]:r.NOTEQUAL};function X(R,S,W){if(W?(r.texParameteri(R,r.TEXTURE_WRAP_S,K[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,K[S.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,K[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,Z[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,Z[S.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(S.wrapS!==tn||S.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,E(S.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,E(S.minFilter)),S.minFilter!==Ft&&S.minFilter!==bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,$[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Ft||S.minFilter!==Ir&&S.minFilter!==ms||S.type===On&&e.has("OES_texture_float_linear")===!1||l===!1&&S.type===Cn&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(R,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Q(R,S){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",C));const te=S.source;let ee=c.get(te);ee===void 0&&(ee={},c.set(te,ee));const ne=L(S);if(ne!==R.__cacheKey){ee[ne]===void 0&&(ee[ne]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ee[ne].usedTimes++;const ve=ee[R.__cacheKey];ve!==void 0&&(ee[R.__cacheKey].usedTimes--,ve.usedTimes===0&&w(S)),R.__cacheKey=ne,R.__webglTexture=ee[ne].texture}return W}function ae(R,S,W){let te=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=r.TEXTURE_3D);const ee=Q(R,S),ne=S.source;t.bindTexture(te,R.__webglTexture,r.TEXTURE0+W);const ve=n.get(ne);if(ne.version!==ve.__version||ee===!0){t.activeTexture(r.TEXTURE0+W);const le=je.getPrimaries(je.workingColorSpace),de=S.colorSpace===$t?null:je.getPrimaries(S.colorSpace),Ee=S.colorSpace===$t||le===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Oe=p(S)&&_(S.image)===!1;let J=g(S.image,Oe,!1,i.maxTextureSize);J=Be(S,J);const $e=_(J)||l,Ve=s.convert(S.format,S.colorSpace);let Re=s.convert(S.type),Me=b(S.internalFormat,Ve,Re,S.colorSpace,S.isVideoTexture);X(te,S,$e);let fe;const Ne=S.mipmaps,Ye=l&&S.isVideoTexture!==!0&&Me!==dc,ot=ve.__version===void 0||ee===!0,ke=A(S,J,$e);if(S.isDepthTexture)Me=r.DEPTH_COMPONENT,l?S.type===On?Me=r.DEPTH_COMPONENT32F:S.type===Bn?Me=r.DEPTH_COMPONENT24:S.type===oi?Me=r.DEPTH24_STENCIL8:Me=r.DEPTH_COMPONENT16:S.type===On&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ai&&Me===r.DEPTH_COMPONENT&&S.type!==Do&&S.type!==Bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Bn,Re=s.convert(S.type)),S.format===Vi&&Me===r.DEPTH_COMPONENT&&(Me=r.DEPTH_STENCIL,S.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=oi,Re=s.convert(S.type))),ot&&(Ye?t.texStorage2D(r.TEXTURE_2D,1,Me,J.width,J.height):t.texImage2D(r.TEXTURE_2D,0,Me,J.width,J.height,0,Ve,Re,null));else if(S.isDataTexture)if(Ne.length>0&&$e){Ye&&ot&&t.texStorage2D(r.TEXTURE_2D,ke,Me,Ne[0].width,Ne[0].height);for(let ie=0,D=Ne.length;ie<D;ie++)fe=Ne[ie],Ye?t.texSubImage2D(r.TEXTURE_2D,ie,0,0,fe.width,fe.height,Ve,Re,fe.data):t.texImage2D(r.TEXTURE_2D,ie,Me,fe.width,fe.height,0,Ve,Re,fe.data);S.generateMipmaps=!1}else Ye?(ot&&t.texStorage2D(r.TEXTURE_2D,ke,Me,J.width,J.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,J.width,J.height,Ve,Re,J.data)):t.texImage2D(r.TEXTURE_2D,0,Me,J.width,J.height,0,Ve,Re,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ye&&ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ke,Me,Ne[0].width,Ne[0].height,J.depth);for(let ie=0,D=Ne.length;ie<D;ie++)fe=Ne[ie],S.format!==nn?Ve!==null?Ye?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,J.depth,Ve,fe.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ie,Me,fe.width,fe.height,J.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,J.depth,Ve,Re,fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ie,Me,fe.width,fe.height,J.depth,0,Ve,Re,fe.data)}else{Ye&&ot&&t.texStorage2D(r.TEXTURE_2D,ke,Me,Ne[0].width,Ne[0].height);for(let ie=0,D=Ne.length;ie<D;ie++)fe=Ne[ie],S.format!==nn?Ve!==null?Ye?t.compressedTexSubImage2D(r.TEXTURE_2D,ie,0,0,fe.width,fe.height,Ve,fe.data):t.compressedTexImage2D(r.TEXTURE_2D,ie,Me,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(r.TEXTURE_2D,ie,0,0,fe.width,fe.height,Ve,Re,fe.data):t.texImage2D(r.TEXTURE_2D,ie,Me,fe.width,fe.height,0,Ve,Re,fe.data)}else if(S.isDataArrayTexture)Ye?(ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ke,Me,J.width,J.height,J.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Ve,Re,J.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Me,J.width,J.height,J.depth,0,Ve,Re,J.data);else if(S.isData3DTexture)Ye?(ot&&t.texStorage3D(r.TEXTURE_3D,ke,Me,J.width,J.height,J.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Ve,Re,J.data)):t.texImage3D(r.TEXTURE_3D,0,Me,J.width,J.height,J.depth,0,Ve,Re,J.data);else if(S.isFramebufferTexture){if(ot)if(Ye)t.texStorage2D(r.TEXTURE_2D,ke,Me,J.width,J.height);else{let ie=J.width,D=J.height;for(let re=0;re<ke;re++)t.texImage2D(r.TEXTURE_2D,re,Me,ie,D,0,Ve,Re,null),ie>>=1,D>>=1}}else if(Ne.length>0&&$e){Ye&&ot&&t.texStorage2D(r.TEXTURE_2D,ke,Me,Ne[0].width,Ne[0].height);for(let ie=0,D=Ne.length;ie<D;ie++)fe=Ne[ie],Ye?t.texSubImage2D(r.TEXTURE_2D,ie,0,0,Ve,Re,fe):t.texImage2D(r.TEXTURE_2D,ie,Me,Ve,Re,fe);S.generateMipmaps=!1}else Ye?(ot&&t.texStorage2D(r.TEXTURE_2D,ke,Me,J.width,J.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ve,Re,J)):t.texImage2D(r.TEXTURE_2D,0,Me,Ve,Re,J);v(S,$e)&&x(te),ve.__version=ne.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function pe(R,S,W){if(S.image.length!==6)return;const te=Q(R,S),ee=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+W);const ne=n.get(ee);if(ee.version!==ne.__version||te===!0){t.activeTexture(r.TEXTURE0+W);const ve=je.getPrimaries(je.workingColorSpace),le=S.colorSpace===$t?null:je.getPrimaries(S.colorSpace),de=S.colorSpace===$t||ve===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ee=S.isCompressedTexture||S.image[0].isCompressedTexture,Oe=S.image[0]&&S.image[0].isDataTexture,J=[];for(let ie=0;ie<6;ie++)!Ee&&!Oe?J[ie]=g(S.image[ie],!1,!0,i.maxCubemapSize):J[ie]=Oe?S.image[ie].image:S.image[ie],J[ie]=Be(S,J[ie]);const $e=J[0],Ve=_($e)||l,Re=s.convert(S.format,S.colorSpace),Me=s.convert(S.type),fe=b(S.internalFormat,Re,Me,S.colorSpace),Ne=l&&S.isVideoTexture!==!0,Ye=ne.__version===void 0||te===!0;let ot=A(S,$e,Ve);X(r.TEXTURE_CUBE_MAP,S,Ve);let ke;if(Ee){Ne&&Ye&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ot,fe,$e.width,$e.height);for(let ie=0;ie<6;ie++){ke=J[ie].mipmaps;for(let D=0;D<ke.length;D++){const re=ke[D];S.format!==nn?Re!==null?Ne?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,D,0,0,re.width,re.height,Re,re.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,D,fe,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,D,0,0,re.width,re.height,Re,Me,re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,D,fe,re.width,re.height,0,Re,Me,re.data)}}}else{ke=S.mipmaps,Ne&&Ye&&(ke.length>0&&ot++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ot,fe,J[0].width,J[0].height));for(let ie=0;ie<6;ie++)if(Oe){Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,J[ie].width,J[ie].height,Re,Me,J[ie].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,fe,J[ie].width,J[ie].height,0,Re,Me,J[ie].data);for(let D=0;D<ke.length;D++){const oe=ke[D].image[ie].image;Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,D+1,0,0,oe.width,oe.height,Re,Me,oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,D+1,fe,oe.width,oe.height,0,Re,Me,oe.data)}}else{Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Re,Me,J[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,fe,Re,Me,J[ie]);for(let D=0;D<ke.length;D++){const re=ke[D];Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,D+1,0,0,Re,Me,re.image[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,D+1,fe,Re,Me,re.image[ie])}}}v(S,Ve)&&x(r.TEXTURE_CUBE_MAP),ne.__version=ee.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function me(R,S,W,te,ee,ne){const ve=s.convert(W.format,W.colorSpace),le=s.convert(W.type),de=b(W.internalFormat,ve,le,W.colorSpace);if(!n.get(S).__hasExternalTextures){const Oe=Math.max(1,S.width>>ne),J=Math.max(1,S.height>>ne);ee===r.TEXTURE_3D||ee===r.TEXTURE_2D_ARRAY?t.texImage3D(ee,ne,de,Oe,J,S.depth,0,ve,le,null):t.texImage2D(ee,ne,de,Oe,J,0,ve,le,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),ge(S)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,ee,n.get(W).__webglTexture,0,Pe(S)):(ee===r.TEXTURE_2D||ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,ee,n.get(W).__webglTexture,ne),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ie(R,S,W){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer&&!S.stencilBuffer){let te=l===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(W||ge(S)){const ee=S.depthTexture;ee&&ee.isDepthTexture&&(ee.type===On?te=r.DEPTH_COMPONENT32F:ee.type===Bn&&(te=r.DEPTH_COMPONENT24));const ne=Pe(S);ge(S)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,te,S.width,S.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,te,S.width,S.height)}else r.renderbufferStorage(r.RENDERBUFFER,te,S.width,S.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(S.depthBuffer&&S.stencilBuffer){const te=Pe(S);W&&ge(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,te,r.DEPTH24_STENCIL8,S.width,S.height):ge(S)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,r.DEPTH24_STENCIL8,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const te=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0;ee<te.length;ee++){const ne=te[ee],ve=s.convert(ne.format,ne.colorSpace),le=s.convert(ne.type),de=b(ne.internalFormat,ve,le,ne.colorSpace),Ee=Pe(S);W&&ge(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,de,S.width,S.height):ge(S)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ee,de,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,de,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Fe(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),I(S.depthTexture,0);const te=n.get(S.depthTexture).__webglTexture,ee=Pe(S);if(S.depthTexture.format===ai)ge(S)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0);else if(S.depthTexture.format===Vi)ge(S)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Te(R){const S=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Fe(S.__webglFramebuffer,R)}else if(W){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]=r.createRenderbuffer(),Ie(S.__webglDepthbuffer[te],R,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),Ie(S.__webglDepthbuffer,R,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function qe(R,S,W){const te=n.get(R);S!==void 0&&me(te.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&Te(R)}function G(R){const S=R.texture,W=n.get(R),te=n.get(S);R.addEventListener("dispose",B),R.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=S.version,o.memory.textures++);const ee=R.isWebGLCubeRenderTarget===!0,ne=R.isWebGLMultipleRenderTargets===!0,ve=_(R)||l;if(ee){W.__webglFramebuffer=[];for(let le=0;le<6;le++)if(l&&S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[le]=[];for(let de=0;de<S.mipmaps.length;de++)W.__webglFramebuffer[le][de]=r.createFramebuffer()}else W.__webglFramebuffer[le]=r.createFramebuffer()}else{if(l&&S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)W.__webglFramebuffer[le]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(ne)if(i.drawBuffers){const le=R.texture;for(let de=0,Ee=le.length;de<Ee;de++){const Oe=n.get(le[de]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&R.samples>0&&ge(R)===!1){const le=ne?S:[S];W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let de=0;de<le.length;de++){const Ee=le[de];W.__webglColorRenderbuffer[de]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[de]);const Oe=s.convert(Ee.format,Ee.colorSpace),J=s.convert(Ee.type),$e=b(Ee.internalFormat,Oe,J,Ee.colorSpace,R.isXRRenderTarget===!0),Ve=Pe(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve,$e,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,W.__webglColorRenderbuffer[de])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Ie(W.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ee){t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),X(r.TEXTURE_CUBE_MAP,S,ve);for(let le=0;le<6;le++)if(l&&S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)me(W.__webglFramebuffer[le][de],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,de);else me(W.__webglFramebuffer[le],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);v(S,ve)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const le=R.texture;for(let de=0,Ee=le.length;de<Ee;de++){const Oe=le[de],J=n.get(Oe);t.bindTexture(r.TEXTURE_2D,J.__webglTexture),X(r.TEXTURE_2D,Oe,ve),me(W.__webglFramebuffer,R,Oe,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,0),v(Oe,ve)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(l?le=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,te.__webglTexture),X(le,S,ve),l&&S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)me(W.__webglFramebuffer[de],R,S,r.COLOR_ATTACHMENT0,le,de);else me(W.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,le,0);v(S,ve)&&x(le),t.unbindTexture()}R.depthBuffer&&Te(R)}function Rt(R){const S=_(R)||l,W=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let te=0,ee=W.length;te<ee;te++){const ne=W[te];if(v(ne,S)){const ve=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,le=n.get(ne).__webglTexture;t.bindTexture(ve,le),x(ve),t.unbindTexture()}}}function be(R){if(l&&R.samples>0&&ge(R)===!1){const S=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],W=R.width,te=R.height;let ee=r.COLOR_BUFFER_BIT;const ne=[],ve=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=n.get(R),de=R.isWebGLMultipleRenderTargets===!0;if(de)for(let Ee=0;Ee<S.length;Ee++)t.bindFramebuffer(r.FRAMEBUFFER,le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Ee=0;Ee<S.length;Ee++){ne.push(r.COLOR_ATTACHMENT0+Ee),R.depthBuffer&&ne.push(ve);const Oe=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Oe===!1&&(R.depthBuffer&&(ee|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ee|=r.STENCIL_BUFFER_BIT)),de&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]),Oe===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ve]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ve])),de){const J=n.get(S[Ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,J,0)}r.blitFramebuffer(0,0,W,te,0,0,W,te,ee,r.NEAREST),u&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),de)for(let Ee=0;Ee<S.length;Ee++){t.bindFramebuffer(r.FRAMEBUFFER,le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,le.__webglColorRenderbuffer[Ee]);const Oe=n.get(S[Ee]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,Oe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Pe(R){return Math.min(i.maxSamples,R.samples)}function ge(R){const S=n.get(R);return l&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function st(R){const S=o.render.frame;f.get(R)!==S&&(f.set(R,S),R.update())}function Be(R,S){const W=R.colorSpace,te=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===wo||W!==Pn&&W!==$t&&(je.getTransfer(W)===et?l===!1?e.has("EXT_sRGB")===!0&&te===nn?(R.format=wo,R.minFilter=bt,R.generateMipmaps=!1):S=_c.sRGBToLinear(S):(te!==nn||ee!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),S}this.allocateTextureUnit=P,this.resetTextureUnits=N,this.setTexture2D=I,this.setTexture2DArray=j,this.setTexture3D=k,this.setTextureCube=H,this.rebindTextures=qe,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ge}function u_(r,e,t){const n=t.isWebGL2;function i(s,o=$t){let l;const h=je.getTransfer(o);if(s===Hn)return r.UNSIGNED_BYTE;if(s===ac)return r.UNSIGNED_SHORT_4_4_4_4;if(s===lc)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Fh)return r.BYTE;if(s===Nh)return r.SHORT;if(s===Do)return r.UNSIGNED_SHORT;if(s===oc)return r.INT;if(s===Bn)return r.UNSIGNED_INT;if(s===On)return r.FLOAT;if(s===Cn)return n?r.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(s===Uh)return r.ALPHA;if(s===nn)return r.RGBA;if(s===Bh)return r.LUMINANCE;if(s===Oh)return r.LUMINANCE_ALPHA;if(s===ai)return r.DEPTH_COMPONENT;if(s===Vi)return r.DEPTH_STENCIL;if(s===wo)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(s===zh)return r.RED;if(s===cc)return r.RED_INTEGER;if(s===kh)return r.RG;if(s===hc)return r.RG_INTEGER;if(s===uc)return r.RGBA_INTEGER;if(s===Dr||s===Fr||s===Nr||s===Ur)if(h===et)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Dr)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fr)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Nr)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ur)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Dr)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fr)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Nr)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ur)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===oa||s===aa||s===la||s===ca)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===oa)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===aa)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===la)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ca)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dc)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ha||s===ua)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===ha)return h===et?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===ua)return h===et?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===da||s===fa||s===pa||s===ma||s===_a||s===ga||s===va||s===xa||s===ya||s===Ma||s===ba||s===Sa||s===wa||s===Ea)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===da)return h===et?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fa)return h===et?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===pa)return h===et?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ma)return h===et?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===_a)return h===et?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ga)return h===et?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===va)return h===et?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===xa)return h===et?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ya)return h===et?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ma)return h===et?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ba)return h===et?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Sa)return h===et?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===wa)return h===et?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ea)return h===et?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Br||s===Ta||s===Aa)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Br)return h===et?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ta)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Aa)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Hh||s===Ca||s===Ra||s===Pa)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Br)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Ca)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ra)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Pa)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===oi?n?r.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class d_ extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zn extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f_={type:"move"};class oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const l=this._targetRay,h=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const _=t.getJointPose(g,n),p=this._getHandJoint(u,g);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const f=u.joints["index-finger-tip"],a=u.joints["thumb-tip"],c=f.position.distanceTo(a.position),d=.02,m=.005;u.inputState.pinching&&c>d+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&c<=d-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(f_)))}return l!==null&&(l.visible=i!==null),h!==null&&(h.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class p_ extends Xi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,l="local-floor",h=1,u=null,f=null,a=null,c=null,d=null,m=null;const g=t.getContextAttributes();let _=null,p=null;const v=[],x=[],b=new _e;let A=null;const E=new Gt;E.layers.enable(1),E.viewport=new it;const C=new Gt;C.layers.enable(2),C.viewport=new it;const B=[E,C],M=new d_;M.layers.enable(1),M.layers.enable(2);let w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=v[X];return Q===void 0&&(Q=new oo,v[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=v[X];return Q===void 0&&(Q=new oo,v[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=v[X];return Q===void 0&&(Q=new oo,v[X]=Q),Q.getHandSpace()};function z(X){const Q=x.indexOf(X.inputSource);if(Q===-1)return;const ae=v[Q];ae!==void 0&&(ae.update(X.inputSource,X.frame,u||o),ae.dispatchEvent({type:X.type,data:X.inputSource}))}function N(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",P);for(let X=0;X<v.length;X++){const Q=x[X];Q!==null&&(x[X]=null,v[X].disconnect(Q))}w=null,F=null,e.setRenderTarget(_),d=null,c=null,a=null,i=null,p=null,$.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){l=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return c!==null?c:d},this.getBinding=function(){return a},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",N),i.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new rn(d.framebufferWidth,d.framebufferHeight,{format:nn,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Q=null,ae=null,pe=null;g.depth&&(pe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=g.stencil?Vi:ai,ae=g.stencil?oi:Bn);const me={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};a=new XRWebGLBinding(i,t),c=a.createProjectionLayer(me),i.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),p=new rn(c.textureWidth,c.textureHeight,{format:nn,type:Hn,depthTexture:new Cc(c.textureWidth,c.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Ie=e.properties.get(p);Ie.__ignoreDepthValues=c.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(h),u=null,o=await i.requestReferenceSpace(l),$.setContext(i),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(X){for(let Q=0;Q<X.removed.length;Q++){const ae=X.removed[Q],pe=x.indexOf(ae);pe>=0&&(x[pe]=null,v[pe].disconnect(ae))}for(let Q=0;Q<X.added.length;Q++){const ae=X.added[Q];let pe=x.indexOf(ae);if(pe===-1){for(let Ie=0;Ie<v.length;Ie++)if(Ie>=x.length){x.push(ae),pe=Ie;break}else if(x[Ie]===null){x[Ie]=ae,pe=Ie;break}if(pe===-1)break}const me=v[pe];me&&me.connect(ae)}}const L=new U,I=new U;function j(X,Q,ae){L.setFromMatrixPosition(Q.matrixWorld),I.setFromMatrixPosition(ae.matrixWorld);const pe=L.distanceTo(I),me=Q.projectionMatrix.elements,Ie=ae.projectionMatrix.elements,Fe=me[14]/(me[10]-1),Te=me[14]/(me[10]+1),qe=(me[9]+1)/me[5],G=(me[9]-1)/me[5],Rt=(me[8]-1)/me[0],be=(Ie[8]+1)/Ie[0],Pe=Fe*Rt,ge=Fe*be,st=pe/(-Rt+be),Be=st*-Rt;Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Be),X.translateZ(st),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const R=Fe+st,S=Te+st,W=Pe-Be,te=ge+(pe-Be),ee=qe*Te/S*R,ne=G*Te/S*R;X.projectionMatrix.makePerspective(W,te,ee,ne,R,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function k(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;M.near=C.near=E.near=X.near,M.far=C.far=E.far=X.far,(w!==M.near||F!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,F=M.far);const Q=X.parent,ae=M.cameras;k(M,Q);for(let pe=0;pe<ae.length;pe++)k(ae[pe],Q);ae.length===2?j(M,E,C):M.projectionMatrix.copy(E.projectionMatrix),H(X,M,Q)};function H(X,Q,ae){ae===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(ae.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=_s*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(c===null&&d===null))return h},this.setFoveation=function(X){h=X,c!==null&&(c.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)};let K=null;function Z(X,Q){if(f=Q.getViewerPose(u||o),m=Q,f!==null){const ae=f.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let pe=!1;ae.length!==M.cameras.length&&(M.cameras.length=0,pe=!0);for(let me=0;me<ae.length;me++){const Ie=ae[me];let Fe=null;if(d!==null)Fe=d.getViewport(Ie);else{const qe=a.getViewSubImage(c,Ie);Fe=qe.viewport,me===0&&(e.setRenderTargetTextures(p,qe.colorTexture,c.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(p))}let Te=B[me];Te===void 0&&(Te=new Gt,Te.layers.enable(me),Te.viewport=new it,B[me]=Te),Te.matrix.fromArray(Ie.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Ie.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),me===0&&(M.matrix.copy(Te.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),pe===!0&&M.cameras.push(Te)}}for(let ae=0;ae<v.length;ae++){const pe=x[ae],me=v[ae];pe!==null&&me!==void 0&&me.update(pe,Q,u||o)}K&&K(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}const $=new Ac;$.setAnimationLoop(Z),this.setAnimationLoop=function(X){K=X},this.dispose=function(){}}}function m_(r,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,wc(r)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function i(_,p,v,x,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(_,p):p.isMeshToonMaterial?(s(_,p),a(_,p)):p.isMeshPhongMaterial?(s(_,p),f(_,p)):p.isMeshStandardMaterial?(s(_,p),c(_,p),p.isMeshPhysicalMaterial&&d(_,p,b)):p.isMeshMatcapMaterial?(s(_,p),m(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),g(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&l(_,p)):p.isPointsMaterial?h(_,p,v,x):p.isSpriteMaterial?u(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Ct&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Ct&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(_.envMap.value=v,_.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap){_.lightMap.value=p.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,_.lightMapTransform)}p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function l(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function h(_,p,v,x){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*v,_.scale.value=x*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function f(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function a(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function c(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),e.get(p).envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function d(_,p,v){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ct&&_.clearcoatNormalScale.value.negate())),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=v.texture,_.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,p){p.matcap&&(_.matcap.value=p.matcap)}function g(_,p){const v=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(v.matrixWorld),_.nearDistance.value=v.shadow.camera.near,_.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function __(r,e,t,n){let i={},s={},o=[];const l=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(v,x){const b=x.program;n.uniformBlockBinding(v,b)}function u(v,x){let b=i[v.id];b===void 0&&(m(v),b=f(v),i[v.id]=b,v.addEventListener("dispose",_));const A=x.program;n.updateUBOMapping(v,A);const E=e.render.frame;s[v.id]!==E&&(c(v),s[v.id]=E)}function f(v){const x=a();v.__bindingPointIndex=x;const b=r.createBuffer(),A=v.__size,E=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,A,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,b),b}function a(){for(let v=0;v<l;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(v){const x=i[v.id],b=v.uniforms,A=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let E=0,C=b.length;E<C;E++){const B=Array.isArray(b[E])?b[E]:[b[E]];for(let M=0,w=B.length;M<w;M++){const F=B[M];if(d(F,E,M,A)===!0){const z=F.__offset,N=Array.isArray(F.value)?F.value:[F.value];let P=0;for(let L=0;L<N.length;L++){const I=N[L],j=g(I);typeof I=="number"||typeof I=="boolean"?(F.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,z+P,F.__data)):I.isMatrix3?(F.__data[0]=I.elements[0],F.__data[1]=I.elements[1],F.__data[2]=I.elements[2],F.__data[3]=0,F.__data[4]=I.elements[3],F.__data[5]=I.elements[4],F.__data[6]=I.elements[5],F.__data[7]=0,F.__data[8]=I.elements[6],F.__data[9]=I.elements[7],F.__data[10]=I.elements[8],F.__data[11]=0):(I.toArray(F.__data,P),P+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(v,x,b,A){const E=v.value,C=x+"_"+b;if(A[C]===void 0)return typeof E=="number"||typeof E=="boolean"?A[C]=E:A[C]=E.clone(),!0;{const B=A[C];if(typeof E=="number"||typeof E=="boolean"){if(B!==E)return A[C]=E,!0}else if(B.equals(E)===!1)return B.copy(E),!0}return!1}function m(v){const x=v.uniforms;let b=0;const A=16;for(let C=0,B=x.length;C<B;C++){const M=Array.isArray(x[C])?x[C]:[x[C]];for(let w=0,F=M.length;w<F;w++){const z=M[w],N=Array.isArray(z.value)?z.value:[z.value];for(let P=0,L=N.length;P<L;P++){const I=N[P],j=g(I),k=b%A;k!==0&&A-k<j.boundary&&(b+=A-k),z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=b,b+=j.storage}}}const E=b%A;return E>0&&(b+=A-E),v.__size=b,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function _(v){const x=v.target;x.removeEventListener("dispose",_);const b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:h,update:u,dispose:p}}class Fc{constructor(e={}){const{canvas:t=du(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:a=!1}=e;this.isWebGLRenderer=!0;let c;n!==null?c=n.getContextAttributes().alpha:c=o;const d=new Uint32Array(4),m=new Int32Array(4);let g=null,_=null;const p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this._useLegacyLights=!1,this.toneMapping=An,this.toneMappingExposure=1;const x=this;let b=!1,A=0,E=0,C=null,B=-1,M=null;const w=new it,F=new it;let z=null;const N=new ye(0);let P=0,L=t.width,I=t.height,j=1,k=null,H=null;const K=new it(0,0,L,I),Z=new it(0,0,L,I);let $=!1;const X=new Bo;let Q=!1,ae=!1,pe=null;const me=new lt,Ie=new _e,Fe=new U,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return C===null?j:1}let G=n;function Rt(T,O){for(let q=0;q<T.length;q++){const Y=T[q],V=t.getContext(Y,O);if(V!==null)return V}return null}try{const T={alpha:!0,depth:i,stencil:s,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:a};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lo}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",re,!1),G===null){const O=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&O.shift(),G=Rt(O,T),G===null)throw Rt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let be,Pe,ge,st,Be,R,S,W,te,ee,ne,ve,le,de,Ee,Oe,J,$e,Ve,Re,Me,fe,Ne,Ye;function ot(){be=new Tp(G),Pe=new yp(G,be,e),be.init(Pe),fe=new u_(G,be,Pe),ge=new c_(G,be,Pe),st=new Rp(G),Be=new $m,R=new h_(G,be,ge,Be,Pe,fe,st),S=new bp(x),W=new Ep(x),te=new Uu(G,Pe),Ne=new vp(G,be,te,Pe),ee=new Ap(G,te,st,Ne),ne=new Dp(G,ee,te,st),Ve=new Ip(G,Pe,R),Oe=new Mp(Be),ve=new jm(x,S,W,be,Pe,Ne,Oe),le=new m_(x,Be),de=new Zm,Ee=new i_(be,Pe),$e=new gp(x,S,W,ge,ne,c,h),J=new l_(x,ne,Pe),Ye=new __(G,st,Pe,ge),Re=new xp(G,be,st,Pe),Me=new Cp(G,be,st,Pe),st.programs=ve.programs,x.capabilities=Pe,x.extensions=be,x.properties=Be,x.renderLists=de,x.shadowMap=J,x.state=ge,x.info=st}ot();const ke=new p_(x,G);this.xr=ke,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=be.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=be.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(T){T!==void 0&&(j=T,this.setSize(L,I,!1))},this.getSize=function(T){return T.set(L,I)},this.setSize=function(T,O,q=!0){if(ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=T,I=O,t.width=Math.floor(T*j),t.height=Math.floor(O*j),q===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(L*j,I*j).floor()},this.setDrawingBufferSize=function(T,O,q){L=T,I=O,j=q,t.width=Math.floor(T*q),t.height=Math.floor(O*q),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(K)},this.setViewport=function(T,O,q,Y){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,O,q,Y),ge.viewport(w.copy(K).multiplyScalar(j).floor())},this.getScissor=function(T){return T.copy(Z)},this.setScissor=function(T,O,q,Y){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,O,q,Y),ge.scissor(F.copy(Z).multiplyScalar(j).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(T){ge.setScissorTest($=T)},this.setOpaqueSort=function(T){k=T},this.setTransparentSort=function(T){H=T},this.getClearColor=function(T){return T.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(T=!0,O=!0,q=!0){let Y=0;if(T){let V=!1;if(C!==null){const he=C.texture.format;V=he===uc||he===hc||he===cc}if(V){const he=C.texture.type,xe=he===Hn||he===Bn||he===Do||he===oi||he===ac||he===lc,we=$e.getClearColor(),Ce=$e.getClearAlpha(),ze=we.r,Le=we.g,De=we.b;xe?(d[0]=ze,d[1]=Le,d[2]=De,d[3]=Ce,G.clearBufferuiv(G.COLOR,0,d)):(m[0]=ze,m[1]=Le,m[2]=De,m[3]=Ce,G.clearBufferiv(G.COLOR,0,m))}else Y|=G.COLOR_BUFFER_BIT}O&&(Y|=G.DEPTH_BUFFER_BIT),q&&(Y|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",re,!1),de.dispose(),Ee.dispose(),Be.dispose(),S.dispose(),W.dispose(),ne.dispose(),Ne.dispose(),Ye.dispose(),ve.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",Pt),ke.removeEventListener("sessionend",Je),pe&&(pe.dispose(),pe=null),Lt.stop()};function ie(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=st.autoReset,O=J.enabled,q=J.autoUpdate,Y=J.needsUpdate,V=J.type;ot(),st.autoReset=T,J.enabled=O,J.autoUpdate=q,J.needsUpdate=Y,J.type=V}function re(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function oe(T){const O=T.target;O.removeEventListener("dispose",oe),Ae(O)}function Ae(T){Se(T),Be.remove(T)}function Se(T){const O=Be.get(T).programs;O!==void 0&&(O.forEach(function(q){ve.releaseProgram(q)}),T.isShaderMaterial&&ve.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,q,Y,V,he){O===null&&(O=Te);const xe=V.isMesh&&V.matrixWorld.determinant()<0,we=Jc(T,O,q,Y,V);ge.setMaterial(Y,xe);let Ce=q.index,ze=1;if(Y.wireframe===!0){if(Ce=ee.getWireframeAttribute(q),Ce===void 0)return;ze=2}const Le=q.drawRange,De=q.attributes.position;let ct=Le.start*ze,zt=(Le.start+Le.count)*ze;he!==null&&(ct=Math.max(ct,he.start*ze),zt=Math.min(zt,(he.start+he.count)*ze)),Ce!==null?(ct=Math.max(ct,0),zt=Math.min(zt,Ce.count)):De!=null&&(ct=Math.max(ct,0),zt=Math.min(zt,De.count));const xt=zt-ct;if(xt<0||xt===1/0)return;Ne.setup(V,Y,we,q,Ce);let fn,rt=Re;if(Ce!==null&&(fn=te.get(Ce),rt=Me,rt.setIndex(fn)),V.isMesh)Y.wireframe===!0?(ge.setLineWidth(Y.wireframeLinewidth*qe()),rt.setMode(G.LINES)):rt.setMode(G.TRIANGLES);else if(V.isLine){let He=Y.linewidth;He===void 0&&(He=1),ge.setLineWidth(He*qe()),V.isLineSegments?rt.setMode(G.LINES):V.isLineLoop?rt.setMode(G.LINE_LOOP):rt.setMode(G.LINE_STRIP)}else V.isPoints?rt.setMode(G.POINTS):V.isSprite&&rt.setMode(G.TRIANGLES);if(V.isBatchedMesh)rt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)rt.renderInstances(ct,xt,V.count);else if(q.isInstancedBufferGeometry){const He=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Cr=Math.min(q.instanceCount,He);rt.renderInstances(ct,xt,Cr)}else rt.render(ct,xt)};function Ze(T,O,q){T.transparent===!0&&T.side===en&&T.forceSinglePass===!1?(T.side=Ct,T.needsUpdate=!0,Es(T,O,q),T.side=Gn,T.needsUpdate=!0,Es(T,O,q),T.side=en):Es(T,O,q)}this.compile=function(T,O,q=null){q===null&&(q=T),_=Ee.get(q),_.init(),v.push(_),q.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(_.pushLight(V),V.castShadow&&_.pushShadow(V))}),T!==q&&T.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(_.pushLight(V),V.castShadow&&_.pushShadow(V))}),_.setupLights(x._useLegacyLights);const Y=new Set;return T.traverse(function(V){const he=V.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){const we=he[xe];Ze(we,q,V),Y.add(we)}else Ze(he,q,V),Y.add(he)}),v.pop(),_=null,Y},this.compileAsync=function(T,O,q=null){const Y=this.compile(T,O,q);return new Promise(V=>{function he(){if(Y.forEach(function(xe){Be.get(xe).currentProgram.isReady()&&Y.delete(xe)}),Y.size===0){V(T);return}setTimeout(he,10)}be.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Qe=null;function vt(T){Qe&&Qe(T)}function Pt(){Lt.stop()}function Je(){Lt.start()}const Lt=new Ac;Lt.setAnimationLoop(vt),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(T){Qe=T,ke.setAnimationLoop(T),T===null?Lt.stop():Lt.start()},ke.addEventListener("sessionstart",Pt),ke.addEventListener("sessionend",Je),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(O),O=ke.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,O,C),_=Ee.get(T,v.length),_.init(),v.push(_),me.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),X.setFromProjectionMatrix(me),ae=this.localClippingEnabled,Q=Oe.init(this.clippingPlanes,ae),g=de.get(T,p.length),g.init(),p.push(g),on(T,O,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(k,H),this.info.render.frame++,Q===!0&&Oe.beginShadows();const q=_.state.shadowsArray;if(J.render(q,T,O),Q===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),$e.render(g,T),_.setupLights(x._useLegacyLights),O.isArrayCamera){const Y=O.cameras;for(let V=0,he=Y.length;V<he;V++){const xe=Y[V];Yo(g,T,xe,xe.viewport)}}else Yo(g,T,O);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(x,T,O),Ne.resetDefaultState(),B=-1,M=null,v.pop(),v.length>0?_=v[v.length-1]:_=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function on(T,O,q,Y){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)_.pushLight(T),T.castShadow&&_.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){Y&&Fe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(me);const xe=ne.update(T),we=T.material;we.visible&&g.push(T,xe,we,q,Fe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||X.intersectsObject(T))){const xe=ne.update(T),we=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Fe.copy(T.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Fe.copy(xe.boundingSphere.center)),Fe.applyMatrix4(T.matrixWorld).applyMatrix4(me)),Array.isArray(we)){const Ce=xe.groups;for(let ze=0,Le=Ce.length;ze<Le;ze++){const De=Ce[ze],ct=we[De.materialIndex];ct&&ct.visible&&g.push(T,xe,ct,q,Fe.z,De)}}else we.visible&&g.push(T,xe,we,q,Fe.z,null)}}const he=T.children;for(let xe=0,we=he.length;xe<we;xe++)on(he[xe],O,q,Y)}function Yo(T,O,q,Y){const V=T.opaque,he=T.transmissive,xe=T.transparent;_.setupLightsView(q),Q===!0&&Oe.setGlobalState(x.clippingPlanes,q),he.length>0&&Qc(V,he,O,q),Y&&ge.viewport(w.copy(Y)),V.length>0&&ws(V,O,q),he.length>0&&ws(he,O,q),xe.length>0&&ws(xe,O,q),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Qc(T,O,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const he=Pe.isWebGL2;pe===null&&(pe=new rn(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?Cn:Hn,minFilter:ms,samples:he?4:0})),x.getDrawingBufferSize(Ie),he?pe.setSize(Ie.x,Ie.y):pe.setSize(pr(Ie.x),pr(Ie.y));const xe=x.getRenderTarget();x.setRenderTarget(pe),x.getClearColor(N),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const we=x.toneMapping;x.toneMapping=An,ws(T,q,Y),R.updateMultisampleRenderTarget(pe),R.updateRenderTargetMipmap(pe);let Ce=!1;for(let ze=0,Le=O.length;ze<Le;ze++){const De=O[ze],ct=De.object,zt=De.geometry,xt=De.material,fn=De.group;if(xt.side===en&&ct.layers.test(Y.layers)){const rt=xt.side;xt.side=Ct,xt.needsUpdate=!0,jo(ct,q,Y,zt,xt,fn),xt.side=rt,xt.needsUpdate=!0,Ce=!0}}Ce===!0&&(R.updateMultisampleRenderTarget(pe),R.updateRenderTargetMipmap(pe)),x.setRenderTarget(xe),x.setClearColor(N,P),x.toneMapping=we}function ws(T,O,q){const Y=O.isScene===!0?O.overrideMaterial:null;for(let V=0,he=T.length;V<he;V++){const xe=T[V],we=xe.object,Ce=xe.geometry,ze=Y===null?xe.material:Y,Le=xe.group;we.layers.test(q.layers)&&jo(we,O,q,Ce,ze,Le)}}function jo(T,O,q,Y,V,he){T.onBeforeRender(x,O,q,Y,V,he),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(x,O,q,Y,T,he),V.transparent===!0&&V.side===en&&V.forceSinglePass===!1?(V.side=Ct,V.needsUpdate=!0,x.renderBufferDirect(q,O,Y,V,T,he),V.side=Gn,V.needsUpdate=!0,x.renderBufferDirect(q,O,Y,V,T,he),V.side=en):x.renderBufferDirect(q,O,Y,V,T,he),T.onAfterRender(x,O,q,Y,V,he)}function Es(T,O,q){O.isScene!==!0&&(O=Te);const Y=Be.get(T),V=_.state.lights,he=_.state.shadowsArray,xe=V.state.version,we=ve.getParameters(T,V.state,he,O,q),Ce=ve.getProgramCacheKey(we);let ze=Y.programs;Y.environment=T.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(T.isMeshStandardMaterial?W:S).get(T.envMap||Y.environment),ze===void 0&&(T.addEventListener("dispose",oe),ze=new Map,Y.programs=ze);let Le=ze.get(Ce);if(Le!==void 0){if(Y.currentProgram===Le&&Y.lightsStateVersion===xe)return Ko(T,we),Le}else we.uniforms=ve.getUniforms(T),T.onBuild(q,we,x),T.onBeforeCompile(we,x),Le=ve.acquireProgram(we,Ce),ze.set(Ce,Le),Y.uniforms=we.uniforms;const De=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=Oe.uniform),Ko(T,we),Y.needsLights=th(T),Y.lightsStateVersion=xe,Y.needsLights&&(De.ambientLightColor.value=V.state.ambient,De.lightProbe.value=V.state.probe,De.directionalLights.value=V.state.directional,De.directionalLightShadows.value=V.state.directionalShadow,De.spotLights.value=V.state.spot,De.spotLightShadows.value=V.state.spotShadow,De.rectAreaLights.value=V.state.rectArea,De.ltc_1.value=V.state.rectAreaLTC1,De.ltc_2.value=V.state.rectAreaLTC2,De.pointLights.value=V.state.point,De.pointLightShadows.value=V.state.pointShadow,De.hemisphereLights.value=V.state.hemi,De.directionalShadowMap.value=V.state.directionalShadowMap,De.directionalShadowMatrix.value=V.state.directionalShadowMatrix,De.spotShadowMap.value=V.state.spotShadowMap,De.spotLightMatrix.value=V.state.spotLightMatrix,De.spotLightMap.value=V.state.spotLightMap,De.pointShadowMap.value=V.state.pointShadowMap,De.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=Le,Y.uniformsList=null,Le}function $o(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=ar.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Ko(T,O){const q=Be.get(T);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function Jc(T,O,q,Y,V){O.isScene!==!0&&(O=Te),R.resetTextureUnits();const he=O.fog,xe=Y.isMeshStandardMaterial?O.environment:null,we=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Pn,Ce=(Y.isMeshStandardMaterial?W:S).get(Y.envMap||xe),ze=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Le=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),De=!!q.morphAttributes.position,ct=!!q.morphAttributes.normal,zt=!!q.morphAttributes.color;let xt=An;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(xt=x.toneMapping);const fn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,rt=fn!==void 0?fn.length:0,He=Be.get(Y),Cr=_.state.lights;if(Q===!0&&(ae===!0||T!==M)){const qt=T===M&&Y.id===B;Oe.setState(Y,T,qt)}let at=!1;Y.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Cr.state.version||He.outputColorSpace!==we||V.isBatchedMesh&&He.batching===!1||!V.isBatchedMesh&&He.batching===!0||V.isInstancedMesh&&He.instancing===!1||!V.isInstancedMesh&&He.instancing===!0||V.isSkinnedMesh&&He.skinning===!1||!V.isSkinnedMesh&&He.skinning===!0||V.isInstancedMesh&&He.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&He.instancingColor===!1&&V.instanceColor!==null||He.envMap!==Ce||Y.fog===!0&&He.fog!==he||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Oe.numPlanes||He.numIntersection!==Oe.numIntersection)||He.vertexAlphas!==ze||He.vertexTangents!==Le||He.morphTargets!==De||He.morphNormals!==ct||He.morphColors!==zt||He.toneMapping!==xt||Pe.isWebGL2===!0&&He.morphTargetsCount!==rt)&&(at=!0):(at=!0,He.__version=Y.version);let qn=He.currentProgram;at===!0&&(qn=Es(Y,O,V));let Zo=!1,Ki=!1,Rr=!1;const St=qn.getUniforms(),Xn=He.uniforms;if(ge.useProgram(qn.program)&&(Zo=!0,Ki=!0,Rr=!0),Y.id!==B&&(B=Y.id,Ki=!0),Zo||M!==T){St.setValue(G,"projectionMatrix",T.projectionMatrix),St.setValue(G,"viewMatrix",T.matrixWorldInverse);const qt=St.map.cameraPosition;qt!==void 0&&qt.setValue(G,Fe.setFromMatrixPosition(T.matrixWorld)),Pe.logarithmicDepthBuffer&&St.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&St.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Ki=!0,Rr=!0)}if(V.isSkinnedMesh){St.setOptional(G,V,"bindMatrix"),St.setOptional(G,V,"bindMatrixInverse");const qt=V.skeleton;qt&&(Pe.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),St.setValue(G,"boneTexture",qt.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(St.setOptional(G,V,"batchingTexture"),St.setValue(G,"batchingTexture",V._matricesTexture,R));const Pr=q.morphAttributes;if((Pr.position!==void 0||Pr.normal!==void 0||Pr.color!==void 0&&Pe.isWebGL2===!0)&&Ve.update(V,q,qn),(Ki||He.receiveShadow!==V.receiveShadow)&&(He.receiveShadow=V.receiveShadow,St.setValue(G,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Xn.envMap.value=Ce,Xn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Ki&&(St.setValue(G,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&eh(Xn,Rr),he&&Y.fog===!0&&le.refreshFogUniforms(Xn,he),le.refreshMaterialUniforms(Xn,Y,j,I,pe),ar.upload(G,$o(He),Xn,R)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ar.upload(G,$o(He),Xn,R),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&St.setValue(G,"center",V.center),St.setValue(G,"modelViewMatrix",V.modelViewMatrix),St.setValue(G,"normalMatrix",V.normalMatrix),St.setValue(G,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const qt=Y.uniformsGroups;for(let Lr=0,nh=qt.length;Lr<nh;Lr++)if(Pe.isWebGL2){const Qo=qt[Lr];Ye.update(Qo,qn),Ye.bind(Qo,qn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qn}function eh(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function th(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,O,q){Be.get(T.texture).__webglTexture=O,Be.get(T.depthTexture).__webglTexture=q;const Y=Be.get(T);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,O){const q=Be.get(T);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,q=0){C=T,A=O,E=q;let Y=!0,V=null,he=!1,xe=!1;if(T){const Ce=Be.get(T);Ce.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(G.FRAMEBUFFER,null),Y=!1):Ce.__webglFramebuffer===void 0?R.setupRenderTarget(T):Ce.__hasExternalTextures&&R.rebindTextures(T,Be.get(T.texture).__webglTexture,Be.get(T.depthTexture).__webglTexture);const ze=T.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(xe=!0);const Le=Be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Le[O])?V=Le[O][q]:V=Le[O],he=!0):Pe.isWebGL2&&T.samples>0&&R.useMultisampledRTT(T)===!1?V=Be.get(T).__webglMultisampledFramebuffer:Array.isArray(Le)?V=Le[q]:V=Le,w.copy(T.viewport),F.copy(T.scissor),z=T.scissorTest}else w.copy(K).multiplyScalar(j).floor(),F.copy(Z).multiplyScalar(j).floor(),z=$;if(ge.bindFramebuffer(G.FRAMEBUFFER,V)&&Pe.drawBuffers&&Y&&ge.drawBuffers(T,V),ge.viewport(w),ge.scissor(F),ge.setScissorTest(z),he){const Ce=Be.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ce.__webglTexture,q)}else if(xe){const Ce=Be.get(T.texture),ze=O||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ce.__webglTexture,q||0,ze)}B=-1},this.readRenderTargetPixels=function(T,O,q,Y,V,he,xe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(we=we[xe]),we){ge.bindFramebuffer(G.FRAMEBUFFER,we);try{const Ce=T.texture,ze=Ce.format,Le=Ce.type;if(ze!==nn&&fe.convert(ze)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Le===Cn&&(be.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&be.has("EXT_color_buffer_float"));if(Le!==Hn&&fe.convert(Le)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===On&&(Pe.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-Y&&q>=0&&q<=T.height-V&&G.readPixels(O,q,Y,V,fe.convert(ze),fe.convert(Le),he)}finally{const Ce=C!==null?Be.get(C).__webglFramebuffer:null;ge.bindFramebuffer(G.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(T,O,q=0){const Y=Math.pow(2,-q),V=Math.floor(O.image.width*Y),he=Math.floor(O.image.height*Y);R.setTexture2D(O,0),G.copyTexSubImage2D(G.TEXTURE_2D,q,0,0,T.x,T.y,V,he),ge.unbindTexture()},this.copyTextureToTexture=function(T,O,q,Y=0){const V=O.image.width,he=O.image.height,xe=fe.convert(q.format),we=fe.convert(q.type);R.setTexture2D(q,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment),O.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Y,T.x,T.y,V,he,xe,we,O.image.data):O.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Y,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,xe,O.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,Y,T.x,T.y,xe,we,O.image),Y===0&&q.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(T,O,q,Y,V=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=T.max.x-T.min.x+1,xe=T.max.y-T.min.y+1,we=T.max.z-T.min.z+1,Ce=fe.convert(Y.format),ze=fe.convert(Y.type);let Le;if(Y.isData3DTexture)R.setTexture3D(Y,0),Le=G.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)R.setTexture2DArray(Y,0),Le=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const De=G.getParameter(G.UNPACK_ROW_LENGTH),ct=G.getParameter(G.UNPACK_IMAGE_HEIGHT),zt=G.getParameter(G.UNPACK_SKIP_PIXELS),xt=G.getParameter(G.UNPACK_SKIP_ROWS),fn=G.getParameter(G.UNPACK_SKIP_IMAGES),rt=q.isCompressedTexture?q.mipmaps[V]:q.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,rt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,rt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,T.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,T.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,T.min.z),q.isDataTexture||q.isData3DTexture?G.texSubImage3D(Le,V,O.x,O.y,O.z,he,xe,we,Ce,ze,rt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Le,V,O.x,O.y,O.z,he,xe,we,Ce,rt.data)):G.texSubImage3D(Le,V,O.x,O.y,O.z,he,xe,we,Ce,ze,rt),G.pixelStorei(G.UNPACK_ROW_LENGTH,De),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ct),G.pixelStorei(G.UNPACK_SKIP_PIXELS,zt),G.pixelStorei(G.UNPACK_SKIP_ROWS,xt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,fn),V===0&&Y.generateMipmaps&&G.generateMipmap(Le),ge.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){A=0,E=0,C=null,ge.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===No?"display-p3":"srgb",t.unpackColorSpace=je.workingColorSpace===br?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Mt?li:fc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===li?Mt:Pn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class g_ extends Fc{}g_.prototype.isWebGL1Renderer=!0;class ko{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ye(e),this.near=t,this.far=n}clone(){return new ko(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Nc extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class v_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=So,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const It=new U;class _r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),s=Ke(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new _r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Uc extends Vn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ci;const ts=new U,Ri=new U,Pi=new U,Li=new _e,ns=new _e,Bc=new lt,js=new U,is=new U,$s=new U,gl=new _e,ao=new _e,vl=new _e;class x_ extends pt{constructor(e=new Uc){if(super(),this.isSprite=!0,this.type="Sprite",Ci===void 0){Ci=new Ut;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new v_(t,5);Ci.setIndex([0,1,2,0,2,3]),Ci.setAttribute("position",new _r(n,3,0,!1)),Ci.setAttribute("uv",new _r(n,2,3,!1))}this.geometry=Ci,this.material=e,this.center=new _e(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ri.setFromMatrixScale(this.matrixWorld),Bc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Pi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ri.multiplyScalar(-Pi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Ks(js.set(-.5,-.5,0),Pi,o,Ri,i,s),Ks(is.set(.5,-.5,0),Pi,o,Ri,i,s),Ks($s.set(.5,.5,0),Pi,o,Ri,i,s),gl.set(0,0),ao.set(1,0),vl.set(1,1);let l=e.ray.intersectTriangle(js,is,$s,!1,ts);if(l===null&&(Ks(is.set(-.5,.5,0),Pi,o,Ri,i,s),ao.set(0,1),l=e.ray.intersectTriangle(js,$s,is,!1,ts),l===null))return;const h=e.ray.origin.distanceTo(ts);h<e.near||h>e.far||t.push({distance:h,point:ts.clone(),uv:jt.getInterpolation(ts,js,is,$s,gl,ao,vl,new _e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ks(r,e,t,n,i,s){Li.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(ns.x=s*Li.x-i*Li.y,ns.y=i*Li.x+s*Li.y):ns.copy(Li),r.copy(e),r.x+=ns.x,r.y+=ns.y,r.applyMatrix4(Bc)}class Oc extends Vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xl=new lt,Co=new xc,Zs=new Sr,Qs=new U;class y_ extends pt{constructor(e=new Ut,t=new Oc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(i),Zs.radius+=s,e.ray.intersectsSphere(Zs)===!1)return;xl.copy(i).invert(),Co.copy(e.ray).applyMatrix4(xl);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,u=n.index,a=n.attributes.position;if(u!==null){const c=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=c,g=d;m<g;m++){const _=u.getX(m);Qs.fromBufferAttribute(a,_),yl(Qs,_,h,i,e,t,this)}}else{const c=Math.max(0,o.start),d=Math.min(a.count,o.start+o.count);for(let m=c,g=d;m<g;m++)Qs.fromBufferAttribute(a,m),yl(Qs,m,h,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function yl(r,e,t,n,i,s,o){const l=Co.distanceSqToPoint(r);if(l<t){const h=new U;Co.closestPointToPoint(r,h),h.applyMatrix4(n);const u=i.ray.origin.distanceTo(h);if(u<i.near||u>i.far)return;s.push({distance:u,distanceToRay:Math.sqrt(l),point:h,index:e,face:null,object:o})}}class vs extends Ot{constructor(e,t,n,i,s,o,l,h,u){super(e,t,n,i,s,o,l,h,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ho extends Ut{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],l=[],h=[],u=new U,f=new _e;o.push(0,0,0),l.push(0,0,1),h.push(.5,.5);for(let a=0,c=3;a<=t;a++,c+=3){const d=n+a/t*i;u.x=e*Math.cos(d),u.y=e*Math.sin(d),o.push(u.x,u.y,u.z),l.push(0,0,1),f.x=(o[c]/e+1)/2,f.y=(o[c+1]/e+1)/2,h.push(f.x,f.y)}for(let a=1;a<=t;a++)s.push(a,a+1,0);this.setIndex(s),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ci extends Ut{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,l=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:l,thetaLength:h};const u=this;i=Math.floor(i),s=Math.floor(s);const f=[],a=[],c=[],d=[];let m=0;const g=[],_=n/2;let p=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(f),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(d,2));function v(){const b=new U,A=new U;let E=0;const C=(t-e)/n;for(let B=0;B<=s;B++){const M=[],w=B/s,F=w*(t-e)+e;for(let z=0;z<=i;z++){const N=z/i,P=N*h+l,L=Math.sin(P),I=Math.cos(P);A.x=F*L,A.y=-w*n+_,A.z=F*I,a.push(A.x,A.y,A.z),b.set(L,C,I).normalize(),c.push(b.x,b.y,b.z),d.push(N,1-w),M.push(m++)}g.push(M)}for(let B=0;B<i;B++)for(let M=0;M<s;M++){const w=g[M][B],F=g[M+1][B],z=g[M+1][B+1],N=g[M][B+1];f.push(w,F,N),f.push(F,z,N),E+=6}u.addGroup(p,E,0),p+=E}function x(b){const A=m,E=new _e,C=new U;let B=0;const M=b===!0?e:t,w=b===!0?1:-1;for(let z=1;z<=i;z++)a.push(0,_*w,0),c.push(0,w,0),d.push(.5,.5),m++;const F=m;for(let z=0;z<=i;z++){const P=z/i*h+l,L=Math.cos(P),I=Math.sin(P);C.x=M*I,C.y=_*w,C.z=M*L,a.push(C.x,C.y,C.z),c.push(0,w,0),E.x=L*.5+.5,E.y=I*.5*w+.5,d.push(E.x,E.y),m++}for(let z=0;z<i;z++){const N=A+z,P=F+z;b===!0?f.push(P,P+1,N):f.push(P+1,P,N),B+=3}u.addGroup(p,B,b===!0?1:2),p+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Go extends ci{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,l=Math.PI*2){super(0,e,t,n,i,s,o,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:l}}static fromJSON(e){return new Go(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xs extends Ut{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const h=Math.min(o+l,Math.PI);let u=0;const f=[],a=new U,c=new U,d=[],m=[],g=[],_=[];for(let p=0;p<=n;p++){const v=[],x=p/n;let b=0;p===0&&o===0?b=.5/t:p===n&&h===Math.PI&&(b=-.5/t);for(let A=0;A<=t;A++){const E=A/t;a.x=-e*Math.cos(i+E*s)*Math.sin(o+x*l),a.y=e*Math.cos(o+x*l),a.z=e*Math.sin(i+E*s)*Math.sin(o+x*l),m.push(a.x,a.y,a.z),c.copy(a).normalize(),g.push(c.x,c.y,c.z),_.push(E+b,1-x),v.push(u++)}f.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const x=f[p][v+1],b=f[p][v],A=f[p+1][v],E=f[p+1][v+1];(p!==0||o>0)&&d.push(x,b,E),(p!==n-1||h<Math.PI)&&d.push(b,A,E)}this.setIndex(d),this.setAttribute("position",new mt(m,3)),this.setAttribute("normal",new mt(g,3)),this.setAttribute("uv",new mt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class M_ extends Nt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dn extends Vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fo,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class b_ extends dn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class S_ extends Vn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ye(16777215),this.specular=new ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fo,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ar extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class w_ extends Ar{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const lo=new lt,Ml=new U,bl=new U;class zc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bo,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ml.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ml),bl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bl),t.updateMatrixWorld(),lo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Sl=new lt,ss=new U,co=new U;class E_ extends zc{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ss.setFromMatrixPosition(e.matrixWorld),n.position.copy(ss),co.copy(n.position),co.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(co),n.updateMatrixWorld(),i.makeTranslation(-ss.x,-ss.y,-ss.z),Sl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sl)}}class T_ extends Ar{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new E_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class A_ extends zc{constructor(){super(new Oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wl extends Ar{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new A_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class C_ extends Ar{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class kc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=El(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=El();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function El(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lo);const Hc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class $i{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const R_=new Oo(-1,1,1,-1,0,1);class P_ extends Ut{constructor(){super(),this.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new mt([0,2,0,0,2,0],2))}}const L_=new P_;class Vo{constructor(e){this._mesh=new We(L_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,R_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ro extends $i{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Nt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=gs.clone(e.uniforms),this.material=new Nt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Vo(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Tl extends $i{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(l),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class I_ extends $i{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class D_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new _e);this._width=n.width,this._height=n.height,t=new rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Cn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ro(Hc),this.copyPass.material.blending=Tn,this.clock=new kc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const l=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Tl!==void 0&&(o instanceof Tl?n=!0:o instanceof I_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new _e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class F_ extends $i{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ye}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const N_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ye(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class qi extends $i{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new _e(e.x,e.y):new _e(256,256),this.clearColor=new ye(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new rn(s,o,{type:Cn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let a=0;a<this.nMips;a++){const c=new rn(s,o,{type:Cn});c.texture.name="UnrealBloomPass.h"+a,c.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(c);const d=new rn(s,o,{type:Cn});d.texture.name="UnrealBloomPass.v"+a,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}const l=N_;this.highPassUniforms=gs.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Nt({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const h=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let a=0;a<this.nMips;a++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(h[a])),this.separableBlurMaterials[a].uniforms.invSize.value=new _e(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const f=Hc;this.copyUniforms=gs.clone(f.uniforms),this.blendMaterial=new Nt({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:lr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ye,this.oldClearAlpha=1,this.basic=new ui,this.fsQuad=new Vo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new _e(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let l=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this.fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[h].uniforms.direction.value=qi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=qi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this.fsQuad.render(e),l=this.renderTargetsVertical[h];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Nt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new _e(.5,.5)},direction:{value:new _e(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Nt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}qi.BlurDirectionX=new _e(1,0);qi.BlurDirectionY=new _e(0,1);const U_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class B_ extends $i{constructor(){super();const e=U_;this.uniforms=gs.clone(e.uniforms),this.material=new M_({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Vo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===et&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ec?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===tc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===nc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ic?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===sc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const O_={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new _e(1/1024,1/512)}},vertexShader:`

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
	`};class z_ extends Nc{constructor(e=null){super();const t=new Wn;t.deleteAttribute("uv");const n=new dn({side:Ct}),i=new dn;let s=5;e!==null&&e._useLegacyLights===!1&&(s=900);const o=new T_(16777215,s,28,2);o.position.set(.418,16.199,.3),this.add(o);const l=new We(t,n);l.position.set(-.757,13.219,.717),l.scale.set(31.713,28.305,28.591),this.add(l);const h=new We(t,i);h.position.set(-10.906,2.009,1.846),h.rotation.set(0,-.195,0),h.scale.set(2.328,7.905,4.651),this.add(h);const u=new We(t,i);u.position.set(-5.607,-.754,-.758),u.rotation.set(0,.994,0),u.scale.set(1.97,1.534,3.955),this.add(u);const f=new We(t,i);f.position.set(6.167,.857,7.803),f.rotation.set(0,.561,0),f.scale.set(3.927,6.285,3.687),this.add(f);const a=new We(t,i);a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),this.add(a);const c=new We(t,i);c.position.set(2.291,-.756,-2.621),c.rotation.set(0,-.286,0),c.scale.set(1.546,1.552,1.496),this.add(c);const d=new We(t,i);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const m=new We(t,Ii(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const g=new We(t,Ii(50));g.position.set(-16.109,18.021,-8.207),g.scale.set(.1,2.425,2.751),this.add(g);const _=new We(t,Ii(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const p=new We(t,Ii(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);const v=new We(t,Ii(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);const x=new We(t,Ii(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ii(r){const e=new ui;return e.color.setScalar(r),e}const k_={uniforms:{tDiffuse:{value:null},offset:{value:1.05},darkness:{value:.55}},vertexShader:`
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
	`};class H_{constructor(e){this.scene=new Nc,this._skyDome=this._createSkyDome(12096255,16114175),this.scene.add(this._skyDome),this.scene.fog=new ko(15262450,12,38);const t=window.innerWidth/window.innerHeight;this.camera=new Gt(34,t,.1,300),this.camera.position.set(0,2.5,10),this.camera.lookAt(0,-1.5,0),this.renderer=new Fc({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=Mt,this.renderer.toneMapping=An,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Jl,(e||document.getElementById("app")||document.body).appendChild(this.renderer.domElement),this._ballMesh=null,this._lookY=0,this.shakeIntensity=0,this._cameraBaseX=0,this._cameraBaseY=2.5,this._setupLights(),this._setupEnvironment(),this._setupComposer(),this._onResize=this._onResize.bind(this),window.addEventListener("resize",this._onResize)}_setupLights(){const e=new C_(16777215,.42);this.scene.add(e);const t=new wl(16777215,1.05);t.position.set(7,20,8),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.left=-12,t.shadow.camera.right=12,t.shadow.camera.top=12,t.shadow.camera.bottom=-12,t.shadow.normalBias=.025,t.shadow.bias=-2e-4,this.scene.add(t);const n=new w_(11979775,2893088,.32);this.scene.add(n);const i=new wl(11060479,.22);i.position.set(-9,8,-7),this.scene.add(i)}_createSkyDome(e,t){const n=new xs(80,32,24),i=new Nt({side:Ct,depthWrite:!1,uniforms:{uSky:{value:new ye(e)},uGround:{value:new ye(t)},uHorizon:{value:new ye(16777215)},uTime:{value:0}},vertexShader:`
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
			`}),s=new We(n,i);return s.frustumCulled=!1,s}setSkyTheme(e,t){if(!this._skyDome)return;const n=this._skyDome.material;n.uniforms.uSky.value.setHex(e),n.uniforms.uGround.value.setHex(t),this.scene.fog&&this.scene.fog.color.setHex(t)}_setupEnvironment(){const e=new To(this.renderer),t=new z_(this.renderer),n=e.fromScene(t,.04).texture;this.scene.environment=n,this._envTexture=n,e.dispose()}_setupComposer(){const e=window.innerWidth,t=window.innerHeight;this.composer=new D_(this.renderer),this.composer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.composer.setSize(e,t),this._renderPass=new F_(this.scene,this.camera),this.composer.addPass(this._renderPass),this._bloomPass=new qi(new _e(e,t),0,.85,.95),this.composer.addPass(this._bloomPass),this._fxaaPass=new Ro(O_),this._fxaaPass.uniforms.resolution.value.set(1/e,1/t),this.composer.addPass(this._fxaaPass),this._vignettePass=new Ro(k_),this._vignettePass.uniforms.offset.value=1.05,this._vignettePass.uniforms.darkness.value=.06,this.composer.addPass(this._vignettePass),this._outputPass=new B_,this.composer.addPass(this._outputPass)}setupCamera(e){this._ballMesh=e,this.camera.position.set(0,2.5,10),this.camera.lookAt(0,-1.5,0)}updateCamera(e){if(!this._ballMesh)return;const t=this._ballMesh.position.y+2.5,n=this._ballMesh.position.y-1.5;this._cameraBaseY+=(t-this._cameraBaseY)*.08,this._cameraBaseX=0,this.camera.position.x=this._cameraBaseX,this.camera.position.y=this._cameraBaseY,this.camera.position.z=10,this._lookY=this._lookY??0,this._lookY+=(n-this._lookY)*.075,this.camera.lookAt(0,this._lookY,0)}triggerShake(e){this.shakeIntensity=Math.min(.1,Math.max(this.shakeIntensity,e))}render(){var e,t,n;if((n=(t=(e=this._skyDome)==null?void 0:e.material)==null?void 0:t.uniforms)!=null&&n.uTime&&(this._skyDome.material.uniforms.uTime.value=performance.now()*.001),this.shakeIntensity>1e-4){const i=this.shakeIntensity,s=(Math.random()-.5)*i,o=(Math.random()-.5)*i;this.camera.position.x=this._cameraBaseX+s,this.camera.position.y=this._cameraBaseY+o,this.shakeIntensity*=.72}else this.shakeIntensity=0,this.camera.position.x=this._cameraBaseX,this.camera.position.y=this._cameraBaseY;this.composer?this.composer.render():this.renderer.render(this.scene,this.camera)}_onResize(){var i,s;const e=window.innerWidth,t=window.innerHeight,n=Math.min(window.devicePixelRatio,2);this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.renderer.setPixelRatio(n),this.composer&&(this.composer.setSize(e,t),this.composer.setPixelRatio(n)),this._fxaaPass&&this._fxaaPass.uniforms.resolution.value.set(1/e,1/t),this._bloomPass&&((s=(i=this._bloomPass).setSize)==null||s.call(i,e,t))}get scene3D(){return this.scene}get cam(){return this.camera}}class sn{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new y);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new y);const n=this.elements,i=e.x,s=e.y,o=e.z;return t.x=n[0]*i+n[1]*s+n[2]*o,t.y=n[3]*i+n[4]*s+n[5]*o,t.z=n[6]*i+n[7]*s+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new sn);const n=this.elements,i=e.elements,s=t.elements,o=n[0],l=n[1],h=n[2],u=n[3],f=n[4],a=n[5],c=n[6],d=n[7],m=n[8],g=i[0],_=i[1],p=i[2],v=i[3],x=i[4],b=i[5],A=i[6],E=i[7],C=i[8];return s[0]=o*g+l*v+h*A,s[1]=o*_+l*x+h*E,s[2]=o*p+l*b+h*C,s[3]=u*g+f*v+a*A,s[4]=u*_+f*x+a*E,s[5]=u*p+f*b+a*C,s[6]=c*g+d*v+m*A,s[7]=c*_+d*x+m*E,s[8]=c*p+d*b+m*C,t}scale(e,t){t===void 0&&(t=new sn);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new y);const n=3,i=4,s=[];let o,l;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(l=0;l<3;l++)s[o+i*l]=this.elements[o+3*l];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let h=3;const u=h;let f;const a=4;let c;do{if(o=u-h,s[o+i*o]===0){for(l=o+1;l<u;l++)if(s[o+i*l]!==0){f=a;do c=a-f,s[c+i*o]+=s[c+i*l];while(--f);break}}if(s[o+i*o]!==0)for(l=o+1;l<u;l++){const d=s[o+i*l]/s[o+i*o];f=a;do c=a-f,s[c+i*l]=c<=o?0:s[c+i*l]-s[c+i*o]*d;while(--f)}}while(--h);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new sn);const t=3,n=6,i=G_;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let l=3;const h=l;let u;const f=n;let a;do{if(s=h-l,i[s+n*s]===0){for(o=s+1;o<h;o++)if(i[s+n*o]!==0){u=f;do a=f-u,i[a+n*s]+=i[a+n*o];while(--u);break}}if(i[s+n*s]!==0)for(o=s+1;o<h;o++){const c=i[s+n*o]/i[s+n*s];u=f;do a=f-u,i[a+n*o]=a<=s?0:i[a+n*o]-i[a+n*s]*c;while(--u)}}while(--l);s=2;do{o=s-1;do{const c=i[s+n*o]/i[s+n*s];u=n;do a=n-u,i[a+n*o]=i[a+n*o]-i[a+n*s]*c;while(--u)}while(o--)}while(--s);s=2;do{const c=1/i[s+n*s];u=n;do a=n-u,i[a+n*s]=i[a+n*s]*c;while(--u)}while(s--);s=2;do{o=2;do{if(a=i[t+o+n*s],isNaN(a)||a===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,o,a)}while(o--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,o=t+t,l=n+n,h=i+i,u=t*o,f=t*l,a=t*h,c=n*l,d=n*h,m=i*h,g=s*o,_=s*l,p=s*h,v=this.elements;return v[3*0+0]=1-(c+m),v[3*0+1]=f-p,v[3*0+2]=a+_,v[3*1+0]=f+p,v[3*1+1]=1-(u+m),v[3*1+2]=d-g,v[3*2+0]=a-_,v[3*2+1]=d+g,v[3*2+2]=1-(u+c),this}transpose(e){e===void 0&&(e=new sn);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const G_=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class y{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new y);const n=e.x,i=e.y,s=e.z,o=this.x,l=this.y,h=this.z;return t.x=l*s-h*i,t.y=h*n-o*s,t.z=o*i-l*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new y(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new y(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new sn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new y);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,l=e.z;return Math.sqrt((s-t)*(s-t)+(o-n)*(o-n)+(l-i)*(l-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,l=e.z;return(s-t)*(s-t)+(o-n)*(o-n)+(l-i)*(l-i)}scale(e,t){t===void 0&&(t=new y);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new y),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new y),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new y),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=V_,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=W_;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,e)):(o.set(0,1,0),i.cross(o,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,o=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Al),Al.almostEquals(e,t)}clone(){return new y(this.x,this.y,this.z)}}y.ZERO=new y(0,0,0);y.UNIT_X=new y(1,0,0);y.UNIT_Y=new y(0,1,0);y.UNIT_Z=new y(0,0,1);const V_=new y,W_=new y,Al=new y;class Wt{constructor(e){e===void 0&&(e={}),this.lowerBound=new y,this.upperBound=new y,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,o=this.upperBound,l=n;s.copy(e[0]),l&&l.vmult(s,s),o.copy(s);for(let h=1;h<e.length;h++){let u=e[h];l&&(l.vmult(u,Cl),u=Cl),u.x>o.x&&(o.x=u.x),u.x<s.x&&(s.x=u.x),u.y>o.y&&(o.y=u.y),u.y<s.y&&(s.y=u.y),u.z>o.z&&(o.z=u.z),u.z<s.z&&(s.z=u.z)}return t&&(t.vadd(s,s),t.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new Wt().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,o=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,l=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,h=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return o&&l&&h}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,o,l,h){const u=this.lowerBound,f=this.upperBound;e.copy(u),t.set(f.x,u.y,u.z),n.set(f.x,f.y,u.z),i.set(u.x,f.y,f.z),s.set(f.x,u.y,f.z),o.set(u.x,f.y,u.z),l.set(u.x,u.y,f.z),h.copy(f)}toLocalFrame(e,t){const n=Rl,i=n[0],s=n[1],o=n[2],l=n[3],h=n[4],u=n[5],f=n[6],a=n[7];this.getCorners(i,s,o,l,h,u,f,a);for(let c=0;c!==8;c++){const d=n[c];e.pointToLocal(d,d)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=Rl,i=n[0],s=n[1],o=n[2],l=n[3],h=n[4],u=n[5],f=n[6],a=n[7];this.getCorners(i,s,o,l,h,u,f,a);for(let c=0;c!==8;c++){const d=n[c];e.pointToWorld(d,d)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,o=1/t.z,l=(this.lowerBound.x-n.x)*i,h=(this.upperBound.x-n.x)*i,u=(this.lowerBound.y-n.y)*s,f=(this.upperBound.y-n.y)*s,a=(this.lowerBound.z-n.z)*o,c=(this.upperBound.z-n.z)*o,d=Math.max(Math.max(Math.min(l,h),Math.min(u,f)),Math.min(a,c)),m=Math.min(Math.min(Math.max(l,h),Math.max(u,f)),Math.max(a,c));return!(m<0||d>m)}}const Cl=new y,Rl=[new y,new y,new y,new y,new y,new y,new y,new y];class Pl{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class Gc{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class ht{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new y),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=q_,i=X_;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new ht);const n=this.x,i=this.y,s=this.z,o=this.w,l=e.x,h=e.y,u=e.z,f=e.w;return t.x=n*f+o*l+i*u-s*h,t.y=i*f+o*h+s*l-n*u,t.z=s*f+o*u+n*h-i*l,t.w=o*f-n*l-i*h-s*u,t}inverse(e){e===void 0&&(e=new ht);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const o=1/(t*t+n*n+i*i+s*s);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new ht),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new y);const n=e.x,i=e.y,s=e.z,o=this.x,l=this.y,h=this.z,u=this.w,f=u*n+l*s-h*i,a=u*i+h*n-o*s,c=u*s+o*i-l*n,d=-o*n-l*i-h*s;return t.x=f*u+d*-o+a*-h-c*-l,t.y=a*u+d*-l+c*-o-f*-h,t.z=c*u+d*-h+f*-l-a*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const o=this.x,l=this.y,h=this.z,u=this.w;switch(t){case"YZX":const f=o*l+h*u;if(f>.499&&(n=2*Math.atan2(o,u),i=Math.PI/2,s=0),f<-.499&&(n=-2*Math.atan2(o,u),i=-Math.PI/2,s=0),n===void 0){const a=o*o,c=l*l,d=h*h;n=Math.atan2(2*l*u-2*o*h,1-2*c-2*d),i=Math.asin(2*f),s=Math.atan2(2*o*u-2*l*h,1-2*a-2*d)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),o=Math.cos(t/2),l=Math.cos(n/2),h=Math.sin(e/2),u=Math.sin(t/2),f=Math.sin(n/2);return i==="XYZ"?(this.x=h*o*l+s*u*f,this.y=s*u*l-h*o*f,this.z=s*o*f+h*u*l,this.w=s*o*l-h*u*f):i==="YXZ"?(this.x=h*o*l+s*u*f,this.y=s*u*l-h*o*f,this.z=s*o*f-h*u*l,this.w=s*o*l+h*u*f):i==="ZXY"?(this.x=h*o*l-s*u*f,this.y=s*u*l+h*o*f,this.z=s*o*f+h*u*l,this.w=s*o*l-h*u*f):i==="ZYX"?(this.x=h*o*l-s*u*f,this.y=s*u*l+h*o*f,this.z=s*o*f-h*u*l,this.w=s*o*l+h*u*f):i==="YZX"?(this.x=h*o*l+s*u*f,this.y=s*u*l+h*o*f,this.z=s*o*f-h*u*l,this.w=s*o*l-h*u*f):i==="XZY"&&(this.x=h*o*l-s*u*f,this.y=s*u*l-h*o*f,this.z=s*o*f+h*u*l,this.w=s*o*l+h*u*f),this}clone(){return new ht(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new ht);const i=this.x,s=this.y,o=this.z,l=this.w;let h=e.x,u=e.y,f=e.z,a=e.w,c,d,m,g,_;return d=i*h+s*u+o*f+l*a,d<0&&(d=-d,h=-h,u=-u,f=-f,a=-a),1-d>1e-6?(c=Math.acos(d),m=Math.sin(c),g=Math.sin((1-t)*c)/m,_=Math.sin(t*c)/m):(g=1-t,_=t),n.x=g*i+_*h,n.y=g*s+_*u,n.z=g*o+_*f,n.w=g*l+_*a,n}integrate(e,t,n,i){i===void 0&&(i=new ht);const s=e.x*n.x,o=e.y*n.y,l=e.z*n.z,h=this.x,u=this.y,f=this.z,a=this.w,c=t*.5;return i.x+=c*(s*a+o*f-l*u),i.y+=c*(o*a+l*h-s*f),i.z+=c*(l*a+s*u-o*h),i.w+=c*(-s*h-o*u-l*f),i}}const q_=new y,X_=new y,Y_={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class ue{constructor(e){e===void 0&&(e={}),this.id=ue.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}ue.idCounter=0;ue.types=Y_;class Xe{constructor(e){e===void 0&&(e={}),this.position=new y,this.quaternion=new ht,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Xe.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Xe.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new y),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new y),n.vsub(e,i),t.conjugate(Ll),Ll.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new y),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new y),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new y),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const Ll=new ht;class ki extends ue{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=e;super({type:ue.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new y;for(let s=0;s!==e.length;s++){const o=e[s],l=o.length;for(let h=0;h!==l;h++){const u=(h+1)%l;t[o[h]].vsub(t[o[u]],i),i.normalize();let f=!1;for(let a=0;a!==n.length;a++)if(n[a].almostEquals(i)||n[a].almostEquals(i)){f=!0;break}f||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new y;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];ki.computeNormal(i,s,o,t)}static computeNormal(e,t,n,i){const s=new y,o=new y;t.vsub(e,o),n.vsub(t,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,o,l,h,u){const f=new y;let a=-1,c=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){f.copy(n.faceNormals[m]),s.vmult(f,f);const g=f.dot(o);g>c&&(c=g,a=m)}const d=[];for(let m=0;m<n.faces[a].length;m++){const g=n.vertices[n.faces[a][m]],_=new y;_.copy(g),s.vmult(_,_),i.vadd(_,_),d.push(_)}a>=0&&this.clipFaceAgainstHull(o,e,t,d,l,h,u)}findSeparatingAxis(e,t,n,i,s,o,l,h){const u=new y,f=new y,a=new y,c=new y,d=new y,m=new y;let g=Number.MAX_VALUE;const _=this;if(_.uniqueAxes)for(let p=0;p!==_.uniqueAxes.length;p++){n.vmult(_.uniqueAxes[p],u);const v=_.testSepAxis(u,e,t,n,i,s);if(v===!1)return!1;v<g&&(g=v,o.copy(u))}else{const p=l?l.length:_.faces.length;for(let v=0;v<p;v++){const x=l?l[v]:v;u.copy(_.faceNormals[x]),n.vmult(u,u);const b=_.testSepAxis(u,e,t,n,i,s);if(b===!1)return!1;b<g&&(g=b,o.copy(u))}}if(e.uniqueAxes)for(let p=0;p!==e.uniqueAxes.length;p++){s.vmult(e.uniqueAxes[p],f);const v=_.testSepAxis(f,e,t,n,i,s);if(v===!1)return!1;v<g&&(g=v,o.copy(f))}else{const p=h?h.length:e.faces.length;for(let v=0;v<p;v++){const x=h?h[v]:v;f.copy(e.faceNormals[x]),s.vmult(f,f);const b=_.testSepAxis(f,e,t,n,i,s);if(b===!1)return!1;b<g&&(g=b,o.copy(f))}}for(let p=0;p!==_.uniqueEdges.length;p++){n.vmult(_.uniqueEdges[p],c);for(let v=0;v!==e.uniqueEdges.length;v++)if(s.vmult(e.uniqueEdges[v],d),c.cross(d,m),!m.almostZero()){m.normalize();const x=_.testSepAxis(m,e,t,n,i,s);if(x===!1)return!1;x<g&&(g=x,o.copy(m))}}return i.vsub(t,a),a.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,i,s,o){const l=this;ki.project(l,e,n,i,ho),ki.project(t,e,s,o,uo);const h=ho[0],u=ho[1],f=uo[0],a=uo[1];if(h<a||f<u)return!1;const c=h-a,d=f-u;return c<d?c:d}calculateLocalInertia(e,t){const n=new y,i=new y;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,l=n.z-i.z;t.x=1/12*e*(2*o*2*o+2*l*2*l),t.y=1/12*e*(2*s*2*s+2*l*2*l),t.z=1/12*e*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,o,l){const h=new y,u=new y,f=new y,a=new y,c=new y,d=new y,m=new y,g=new y,_=this,p=[],v=i,x=p;let b=-1,A=Number.MAX_VALUE;for(let w=0;w<_.faces.length;w++){h.copy(_.faceNormals[w]),n.vmult(h,h);const F=h.dot(e);F<A&&(A=F,b=w)}if(b<0)return;const E=_.faces[b];E.connectedFaces=[];for(let w=0;w<_.faces.length;w++)for(let F=0;F<_.faces[w].length;F++)E.indexOf(_.faces[w][F])!==-1&&w!==b&&E.connectedFaces.indexOf(w)===-1&&E.connectedFaces.push(w);const C=E.length;for(let w=0;w<C;w++){const F=_.vertices[E[w]],z=_.vertices[E[(w+1)%C]];F.vsub(z,u),f.copy(u),n.vmult(f,f),t.vadd(f,f),a.copy(this.faceNormals[b]),n.vmult(a,a),t.vadd(a,a),f.cross(a,c),c.negate(c),d.copy(F),n.vmult(d,d),t.vadd(d,d);const N=E.connectedFaces[w];m.copy(this.faceNormals[N]);const P=this.getPlaneConstantOfFace(N);g.copy(m),n.vmult(g,g);const L=P-g.dot(t);for(this.clipFaceAgainstPlane(v,x,g,L);v.length;)v.shift();for(;x.length;)v.push(x.shift())}m.copy(this.faceNormals[b]);const B=this.getPlaneConstantOfFace(b);g.copy(m),n.vmult(g,g);const M=B-g.dot(t);for(let w=0;w<v.length;w++){let F=g.dot(v[w])+M;if(F<=s&&(console.log(`clamped: depth=${F} to minDist=${s}`),F=s),F<=o){const z=v[w];if(F<=1e-6){const N={point:z,normal:g,depth:F};l.push(N)}}}}clipFaceAgainstPlane(e,t,n,i){let s,o;const l=e.length;if(l<2)return t;let h=e[e.length-1],u=e[0];s=n.dot(h)+i;for(let f=0;f<l;f++){if(u=e[f],o=n.dot(u)+i,s<0)if(o<0){const a=new y;a.copy(u),t.push(a)}else{const a=new y;h.lerp(u,s/(s-o),a),t.push(a)}else if(o<0){const a=new y;h.lerp(u,s/(s-o),a),t.push(a),t.push(u)}h=u,s=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new y);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new y);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let o,l,h,u,f,a,c=new y;for(let d=0;d<s.length;d++){c.copy(s[d]),t.vmult(c,c),e.vadd(c,c);const m=c;(o===void 0||m.x<o)&&(o=m.x),(u===void 0||m.x>u)&&(u=m.x),(l===void 0||m.y<l)&&(l=m.y),(f===void 0||m.y>f)&&(f=m.y),(h===void 0||m.z<h)&&(h=m.z),(a===void 0||m.z>a)&&(a=m.z)}n.set(o,l,h),i.set(u,f,a)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new y);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const o=i[s];t.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];t.vmult(o,o)}}if(e)for(let s=0;s<n;s++){const o=i[s];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=new y;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let l=i[o];const h=t[n[o][0]],u=new y;e.vsub(h,u);const f=l.dot(u),a=new y;s.vsub(h,a);const c=l.dot(a);if(f<0&&c>0||f>0&&c<0)return!1}return-1}static project(e,t,n,i,s){const o=e.vertices.length,l=j_;let h=0,u=0;const f=$_,a=e.vertices;f.setZero(),Xe.vectorToLocalFrame(n,i,t,l),Xe.pointToLocalFrame(n,i,f,f);const c=f.dot(l);u=h=a[0].dot(l);for(let d=1;d<o;d++){const m=a[d].dot(l);m>h&&(h=m),m<u&&(u=m)}if(u-=c,h-=c,u>h){const d=u;u=h,h=d}s[0]=h,s[1]=u}}const ho=[],uo=[];new y;const j_=new y,$_=new y;class bs extends ue{constructor(e){super({type:ue.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=y,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],l=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],h=new ki({vertices:s,faces:o,axes:l});this.convexPolyhedronRepresentation=h,h.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new y),bs.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)Un.set(s[o][0],s[o][1],s[o][2]),t.vmult(Un,Un),e.vadd(Un,Un),n(Un.x,Un.y,Un.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;an[0].set(s.x,s.y,s.z),an[1].set(-s.x,s.y,s.z),an[2].set(-s.x,-s.y,s.z),an[3].set(-s.x,-s.y,-s.z),an[4].set(s.x,-s.y,-s.z),an[5].set(s.x,s.y,-s.z),an[6].set(-s.x,s.y,-s.z),an[7].set(s.x,-s.y,s.z);const o=an[0];t.vmult(o,o),e.vadd(o,o),i.copy(o),n.copy(o);for(let l=1;l<8;l++){const h=an[l];t.vmult(h,h),e.vadd(h,h);const u=h.x,f=h.y,a=h.z;u>i.x&&(i.x=u),f>i.y&&(i.y=f),a>i.z&&(i.z=a),u<n.x&&(n.x=u),f<n.y&&(n.y=f),a<n.z&&(n.z=a)}}}const Un=new y,an=[new y,new y,new y,new y,new y,new y,new y,new y],Wo={DYNAMIC:1,STATIC:2,KINEMATIC:4},qo={AWAKE:0,SLEEPY:1,SLEEPING:2};class ce extends Gc{constructor(e){e===void 0&&(e={}),super(),this.id=ce.idCounter++,this.index=-1,this.world=null,this.vlambda=new y,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new y,this.previousPosition=new y,this.interpolatedPosition=new y,this.initPosition=new y,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new y,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new y,this.force=new y;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?ce.STATIC:ce.DYNAMIC,typeof e.type==typeof ce.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=ce.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new y,this.quaternion=new ht,this.initQuaternion=new ht,this.previousQuaternion=new ht,this.interpolatedQuaternion=new ht,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new y,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new y,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new y,this.invInertia=new y,this.invInertiaWorld=new sn,this.invMassSolve=0,this.invInertiaSolve=new y,this.invInertiaWorldSolve=new sn,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new y(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new y(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Wt,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new y,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=ce.AWAKE,this.wakeUpAfterNarrowphase=!1,e===ce.SLEEPING&&this.dispatchEvent(ce.wakeupEvent)}sleep(){this.sleepState=ce.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===ce.AWAKE&&n<i?(this.sleepState=ce.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(ce.sleepyEvent)):t===ce.SLEEPY&&n>i?this.wakeUp():t===ce.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ce.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ce.SLEEPING||this.type===ce.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new y),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new y),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new y),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new y),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new y,s=new ht;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const o=e[s];o.updateBoundingSphereRadius();const l=t[s].length(),h=o.boundingSphereRadius;l+h>i&&(i=l+h)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=K_,o=Z_,l=this.quaternion,h=this.aabb,u=Q_;for(let f=0;f!==i;f++){const a=e[f];l.vmult(t[f],s),s.vadd(this.position,s),l.mult(n[f],o),a.calculateWorldAABB(s,o,u.lowerBound,u.upperBound),f===0?h.copy(u):h.extend(u)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=J_,i=eg;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new y),this.type!==ce.DYNAMIC)return;this.sleepState===ce.SLEEPING&&this.wakeUp();const n=tg;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new y),this.type!==ce.DYNAMIC)return;const n=ng,i=ig;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===ce.DYNAMIC&&(this.sleepState===ce.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new y),this.type!==ce.DYNAMIC)return;this.sleepState===ce.SLEEPING&&this.wakeUp();const n=t,i=sg;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=rg;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new y),this.type!==ce.DYNAMIC)return;const n=og,i=ag;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=lg;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),bs.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new y;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ce.DYNAMIC||this.type===ce.KINEMATIC)||this.sleepState===ce.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,l=this.force,h=this.torque,u=this.quaternion,f=this.invMass,a=this.invInertiaWorld,c=this.linearFactor,d=f*e;i.x+=l.x*d*c.x,i.y+=l.y*d*c.y,i.z+=l.z*d*c.z;const m=a.elements,g=this.angularFactor,_=h.x*g.x,p=h.y*g.y,v=h.z*g.z;s.x+=e*(m[0]*_+m[1]*p+m[2]*v),s.y+=e*(m[3]*_+m[4]*p+m[5]*v),s.z+=e*(m[6]*_+m[7]*p+m[8]*v),o.x+=i.x*e,o.y+=i.y*e,o.z+=i.z*e,u.integrate(this.angularVelocity,e,this.angularFactor,u),t&&(n?u.normalizeFast():u.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ce.idCounter=0;ce.COLLIDE_EVENT_NAME="collide";ce.DYNAMIC=Wo.DYNAMIC;ce.STATIC=Wo.STATIC;ce.KINEMATIC=Wo.KINEMATIC;ce.AWAKE=qo.AWAKE;ce.SLEEPY=qo.SLEEPY;ce.SLEEPING=qo.SLEEPING;ce.wakeupEvent={type:"wakeup"};ce.sleepyEvent={type:"sleepy"};ce.sleepEvent={type:"sleep"};const K_=new y,Z_=new ht,Q_=new Wt,J_=new sn,eg=new sn;new sn;const tg=new y,ng=new y,ig=new y,sg=new y,rg=new y,og=new y,ag=new y,lg=new y;class Vc{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&ce.STATIC||e.sleepState===ce.SLEEPING)&&(t.type&ce.STATIC||t.sleepState===ce.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=cg;t.position.vsub(e.position,s);const o=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<o&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=hg,i=ug,s=dg,o=e.length;for(let l=0;l!==o;l++)i[l]=e[l],s[l]=t[l];e.length=0,t.length=0;for(let l=0;l!==o;l++){const h=i[l].id,u=s[l].id,f=h<u?`${h},${u}`:`${u},${h}`;n[f]=l,n.keys.push(f)}for(let l=0;l!==n.keys.length;l++){const h=n.keys.pop(),u=n[h];e.push(i[u]),t.push(s[u]),delete n[h]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new y;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const cg=new y;new y;new ht;new y;const hg={keys:[]},ug=[],dg=[];new y;new y;new y;class fg extends Vc{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let o,l;for(let h=0;h!==s;h++)for(let u=0;u!==h;u++)o=i[h],l=i[u],this.needBroadphaseCollision(o,l)&&this.intersectionTest(o,l,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class gr{constructor(){this.rayFromWorld=new y,this.rayToWorld=new y,this.hitNormalWorld=new y,this.hitPointWorld=new y,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,o,l){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=l}}let Wc,qc,Xc,Yc,jc,$c,Kc;const Xo={CLOSEST:1,ANY:2,ALL:4};Wc=ue.types.SPHERE;qc=ue.types.PLANE;Xc=ue.types.BOX;Yc=ue.types.CYLINDER;jc=ue.types.CONVEXPOLYHEDRON;$c=ue.types.HEIGHTFIELD;Kc=ue.types.TRIMESH;class dt{get[Wc](){return this._intersectSphere}get[qc](){return this._intersectPlane}get[Xc](){return this._intersectBox}get[Yc](){return this._intersectConvex}get[jc](){return this._intersectConvex}get[$c](){return this._intersectHeightfield}get[Kc](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new y),t===void 0&&(t=new y),this.from=e.clone(),this.to=t.clone(),this.direction=new y,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=dt.ANY,this.result=new gr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||dt.ANY,this.result=t.result||new gr,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Il),fo.length=0,e.broadphase.aabbQuery(e,Il,fo),this.intersectBodies(fo),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const i=pg,s=mg;for(let o=0,l=e.shapes.length;o<l;o++){const h=e.shapes[o];if(!(n&&!h.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],s),e.quaternion.vmult(e.shapeOffsets[o],i),i.vadd(e.position,i),this.intersectShape(h,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(Rg(s,this.direction,n)>e.boundingSphereRadius)return;const l=this[e.type];l&&l.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const o=this.from,l=this.to,h=this.direction,u=new y(0,0,1);t.vmult(u,u);const f=new y;o.vsub(n,f);const a=f.dot(u);l.vsub(n,f);const c=f.dot(u);if(a*c>0||o.distanceTo(l)<a)return;const d=u.dot(h);if(Math.abs(d)<this.precision)return;const m=new y,g=new y,_=new y;o.vsub(n,m);const p=-u.dot(m)/d;h.scale(p,g),o.vadd(g,_),this.reportIntersection(u,_,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const o=_g;o.from.copy(this.from),o.to.copy(this.to),Xe.pointToLocalFrame(n,t,o.from,o.from),Xe.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();const l=gg;let h,u,f,a;h=u=0,f=a=e.data.length-1;const c=new Wt;o.getAABB(c),e.getIndexOfPosition(c.lowerBound.x,c.lowerBound.y,l,!0),h=Math.max(h,l[0]),u=Math.max(u,l[1]),e.getIndexOfPosition(c.upperBound.x,c.upperBound.y,l,!0),f=Math.min(f,l[0]+1),a=Math.min(a,l[1]+1);for(let d=h;d<f;d++)for(let m=u;m<a;m++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(d,m,c),!!c.overlapsRay(o)){if(e.getConvexTrianglePillar(d,m,!1),Xe.pointToWorldFrame(n,t,e.pillarOffset,Js),this._intersectConvex(e.pillarConvex,t,Js,i,s,Dl),this.result.shouldStop)return;e.getConvexTrianglePillar(d,m,!0),Xe.pointToWorldFrame(n,t,e.pillarOffset,Js),this._intersectConvex(e.pillarConvex,t,Js,i,s,Dl)}}}_intersectSphere(e,t,n,i,s){const o=this.from,l=this.to,h=e.radius,u=(l.x-o.x)**2+(l.y-o.y)**2+(l.z-o.z)**2,f=2*((l.x-o.x)*(o.x-n.x)+(l.y-o.y)*(o.y-n.y)+(l.z-o.z)*(o.z-n.z)),a=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-h**2,c=f**2-4*u*a,d=vg,m=xg;if(!(c<0))if(c===0)o.lerp(l,c,d),d.vsub(n,m),m.normalize(),this.reportIntersection(m,d,s,i,-1);else{const g=(-f-Math.sqrt(c))/(2*u),_=(-f+Math.sqrt(c))/(2*u);if(g>=0&&g<=1&&(o.lerp(l,g,d),d.vsub(n,m),m.normalize(),this.reportIntersection(m,d,s,i,-1)),this.result.shouldStop)return;_>=0&&_<=1&&(o.lerp(l,_,d),d.vsub(n,m),m.normalize(),this.reportIntersection(m,d,s,i,-1))}}_intersectConvex(e,t,n,i,s,o){const l=yg,h=Fl,u=o&&o.faceList||null,f=e.faces,a=e.vertices,c=e.faceNormals,d=this.direction,m=this.from,g=this.to,_=m.distanceTo(g),p=u?u.length:f.length,v=this.result;for(let x=0;!v.shouldStop&&x<p;x++){const b=u?u[x]:x,A=f[b],E=c[b],C=t,B=n;h.copy(a[A[0]]),C.vmult(h,h),h.vadd(B,h),h.vsub(m,h),C.vmult(E,l);const M=d.dot(l);if(Math.abs(M)<this.precision)continue;const w=l.dot(h)/M;if(!(w<0)){d.scale(w,Bt),Bt.vadd(m,Bt),Jt.copy(a[A[0]]),C.vmult(Jt,Jt),B.vadd(Jt,Jt);for(let F=1;!v.shouldStop&&F<A.length-1;F++){ln.copy(a[A[F]]),cn.copy(a[A[F+1]]),C.vmult(ln,ln),C.vmult(cn,cn),B.vadd(ln,ln),B.vadd(cn,cn);const z=Bt.distanceTo(m);!(dt.pointInTriangle(Bt,Jt,ln,cn)||dt.pointInTriangle(Bt,ln,Jt,cn))||z>_||this.reportIntersection(l,Bt,s,i,b)}}}}_intersectTrimesh(e,t,n,i,s,o){const l=Mg,h=Ag,u=Cg,f=Fl,a=bg,c=Sg,d=wg,m=Tg,g=Eg,_=e.indices;e.vertices;const p=this.from,v=this.to,x=this.direction;u.position.copy(n),u.quaternion.copy(t),Xe.vectorToLocalFrame(n,t,x,a),Xe.pointToLocalFrame(n,t,p,c),Xe.pointToLocalFrame(n,t,v,d),d.x*=e.scale.x,d.y*=e.scale.y,d.z*=e.scale.z,c.x*=e.scale.x,c.y*=e.scale.y,c.z*=e.scale.z,d.vsub(c,a),a.normalize();const b=c.distanceSquared(d);e.tree.rayQuery(this,u,h);for(let A=0,E=h.length;!this.result.shouldStop&&A!==E;A++){const C=h[A];e.getNormal(C,l),e.getVertex(_[C*3],Jt),Jt.vsub(c,f);const B=a.dot(l),M=l.dot(f)/B;if(M<0)continue;a.scale(M,Bt),Bt.vadd(c,Bt),e.getVertex(_[C*3+1],ln),e.getVertex(_[C*3+2],cn);const w=Bt.distanceSquared(c);!(dt.pointInTriangle(Bt,ln,Jt,cn)||dt.pointInTriangle(Bt,Jt,ln,cn))||w>b||(Xe.vectorToWorldFrame(t,l,g),Xe.pointToWorldFrame(n,t,Bt,m),this.reportIntersection(g,m,s,i,C))}h.length=0}reportIntersection(e,t,n,i,s){const o=this.from,l=this.to,h=o.distanceTo(t),u=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(u.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case dt.ALL:this.hasHit=!0,u.set(o,l,e,t,n,i,h),u.hasHit=!0,this.callback(u);break;case dt.CLOSEST:(h<u.distance||!u.hasHit)&&(this.hasHit=!0,u.hasHit=!0,u.set(o,l,e,t,n,i,h));break;case dt.ANY:this.hasHit=!0,u.hasHit=!0,u.set(o,l,e,t,n,i,h),u.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,si),n.vsub(t,rs),e.vsub(t,po);const s=si.dot(si),o=si.dot(rs),l=si.dot(po),h=rs.dot(rs),u=rs.dot(po);let f,a;return(f=h*l-o*u)>=0&&(a=s*u-o*l)>=0&&f+a<s*h-o*o}}dt.CLOSEST=Xo.CLOSEST;dt.ANY=Xo.ANY;dt.ALL=Xo.ALL;const Il=new Wt,fo=[],rs=new y,po=new y,pg=new y,mg=new ht,Bt=new y,Jt=new y,ln=new y,cn=new y;new y;new gr;const Dl={faceList:[0]},Js=new y,_g=new dt,gg=[],vg=new y,xg=new y,yg=new y;new y;new y;const Fl=new y,Mg=new y,bg=new y,Sg=new y,wg=new y,Eg=new y,Tg=new y;new Wt;const Ag=[],Cg=new Xe,si=new y,er=new y;function Rg(r,e,t){t.vsub(r,si);const n=si.dot(e);return e.scale(n,er),er.vadd(r,er),t.distanceTo(er)}class Oi extends Vc{static checkBounds(e,t,n){let i,s;n===0?(i=e.position.x,s=t.position.x):n===1?(i=e.position.y,s=t.position.y):n===2&&(i=e.position.z,s=t.position.z);const o=e.boundingRadius,l=t.boundingRadius,h=i+o;return s-l<h}static insertionSortX(e){for(let t=1,n=e.length;t<n;t++){const i=e[t];let s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)e[s+1]=e[s];e[s+1]=i}return e}static insertionSortY(e){for(let t=1,n=e.length;t<n;t++){const i=e[t];let s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)e[s+1]=e[s];e[s+1]=i}return e}static insertionSortZ(e){for(let t=1,n=e.length;t<n;t++){const i=e[t];let s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)e[s+1]=e[s];e[s+1]=i}return e}constructor(e){super(),this.axisList=[],this.world=null,this.axisIndex=0;const t=this.axisList;this._addBodyHandler=n=>{t.push(n.body)},this._removeBodyHandler=n=>{const i=t.indexOf(n.body);i!==-1&&t.splice(i,1)},e&&this.setWorld(e)}setWorld(e){this.axisList.length=0;for(let t=0;t<e.bodies.length;t++)this.axisList.push(e.bodies[t]);e.removeEventListener("addBody",this._addBodyHandler),e.removeEventListener("removeBody",this._removeBodyHandler),e.addEventListener("addBody",this._addBodyHandler),e.addEventListener("removeBody",this._removeBodyHandler),this.world=e,this.dirty=!0}collisionPairs(e,t,n){const i=this.axisList,s=i.length,o=this.axisIndex;let l,h;for(this.dirty&&(this.sortList(),this.dirty=!1),l=0;l!==s;l++){const u=i[l];for(h=l+1;h<s;h++){const f=i[h];if(this.needBroadphaseCollision(u,f)){if(!Oi.checkBounds(u,f,o))break;this.intersectionTest(u,f,t,n)}}}}sortList(){const e=this.axisList,t=this.axisIndex,n=e.length;for(let i=0;i!==n;i++){const s=e[i];s.aabbNeedsUpdate&&s.updateAABB()}t===0?Oi.insertionSortX(e):t===1?Oi.insertionSortY(e):t===2&&Oi.insertionSortZ(e)}autoDetectAxis(){let e=0,t=0,n=0,i=0,s=0,o=0;const l=this.axisList,h=l.length,u=1/h;for(let d=0;d!==h;d++){const m=l[d],g=m.position.x;e+=g,t+=g*g;const _=m.position.y;n+=_,i+=_*_;const p=m.position.z;s+=p,o+=p*p}const f=t-e*e*u,a=i-n*n*u,c=o-s*s*u;f>a?f>c?this.axisIndex=0:this.axisIndex=2:a>c?this.axisIndex=1:this.axisIndex=2}aabbQuery(e,t,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const o=this.axisList;t.lowerBound[s],t.upperBound[s];for(let l=0;l<o.length;l++){const h=o[l];h.aabbNeedsUpdate&&h.updateAABB(),h.aabb.overlaps(t)&&n.push(h)}return n}}class Pg{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class Nl{constructor(){this.spatial=new y,this.rotational=new y}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Ss{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Ss.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Nl,this.jacobianElementB=new Nl,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*e-i*t-o*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return e.spatial.dot(s)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,l=n.angularVelocity,h=i.angularVelocity;return e.multiplyVectors(s,l)+t.multiplyVectors(o,h)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,l=n.wlambda,h=i.wlambda;return e.multiplyVectors(s,l)+t.multiplyVectors(o,h)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,l=i.force,h=i.torque,u=n.invMassSolve,f=i.invMassSolve;return s.scale(u,Ul),l.scale(f,Bl),n.invInertiaWorldSolve.vmult(o,Ol),i.invInertiaWorldSolve.vmult(h,zl),e.multiplyVectors(Ul,Ol)+t.multiplyVectors(Bl,zl)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,l=n.invInertiaWorldSolve,h=i.invInertiaWorldSolve;let u=s+o;return l.vmult(e.rotational,tr),u+=tr.dot(e.rotational),h.vmult(t.rotational,tr),u+=tr.dot(t.rotational),u}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=Lg;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,o),i.wlambda.addScaledVector(e,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(e,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Ss.idCounter=0;const Ul=new y,Bl=new y,Ol=new y,zl=new y,tr=new y,Lg=new y;class Ig extends Ss{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new y,this.rj=new y,this.ni=new y}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,l=this.rj,h=Dg,u=Fg,f=i.velocity,a=i.angularVelocity;i.force,i.torque;const c=s.velocity,d=s.angularVelocity;s.force,s.torque;const m=Ng,g=this.jacobianElementA,_=this.jacobianElementB,p=this.ni;o.cross(p,h),l.cross(p,u),p.negate(g.spatial),h.negate(g.rotational),_.spatial.copy(p),_.rotational.copy(u),m.copy(s.position),m.vadd(l,m),m.vsub(i.position,m),m.vsub(o,m);const v=p.dot(m),x=this.restitution+1,b=x*c.dot(p)-x*f.dot(p)+d.dot(u)-a.dot(h),A=this.computeGiMf();return-v*t-b*n-e*A}getImpactVelocityAlongNormal(){const e=Ug,t=Bg,n=Og,i=zg,s=kg;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const Dg=new y,Fg=new y,Ng=new y,Ug=new y,Bg=new y,Og=new y,zg=new y,kg=new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;class kl extends Ss{constructor(e,t,n){super(e,t,-n,n),this.ri=new y,this.rj=new y,this.t=new y}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=Hg,o=Gg,l=this.t;n.cross(l,s),i.cross(l,o);const h=this.jacobianElementA,u=this.jacobianElementB;l.negate(h.spatial),s.negate(h.rotational),u.spatial.copy(l),u.rotational.copy(o);const f=this.computeGW(),a=this.computeGiMf();return-f*t-e*a}}const Hg=new y,Gg=new y;class hi{constructor(e,t,n){n=Pg.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=hi.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}hi.idCounter=0;class kn{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=kn.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}kn.idCounter=0;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new dt;new y;new y;new y;new y(1,0,0),new y(0,1,0),new y(0,0,1);new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;class mo extends ue{constructor(e){if(super({type:ue.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new y);const n=2*e*this.radius*this.radius/5;return t.x=n,t.y=n,t.z=n,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,n,i){const s=this.radius,o=["x","y","z"];for(let l=0;l<o.length;l++){const h=o[l];n[h]=e[h]-s,i[h]=e[h]+s}}}new y;new y;new y;new y;new y;new y;new y;new y;new y;class Vg extends ki{constructor(e,t,n,i){if(e===void 0&&(e=1),t===void 0&&(t=1),n===void 0&&(n=1),i===void 0&&(i=8),e<0)throw new Error("The cylinder radiusTop cannot be negative.");if(t<0)throw new Error("The cylinder radiusBottom cannot be negative.");const s=i,o=[],l=[],h=[],u=[],f=[],a=Math.cos,c=Math.sin;o.push(new y(-t*c(0),-n*.5,t*a(0))),u.push(0),o.push(new y(-e*c(0),n*.5,e*a(0))),f.push(1);for(let m=0;m<s;m++){const g=2*Math.PI/s*(m+1),_=2*Math.PI/s*(m+.5);m<s-1?(o.push(new y(-t*c(g),-n*.5,t*a(g))),u.push(2*m+2),o.push(new y(-e*c(g),n*.5,e*a(g))),f.push(2*m+3),h.push([2*m,2*m+1,2*m+3,2*m+2])):h.push([2*m,2*m+1,1,0]),(s%2===1||m<s/2)&&l.push(new y(-c(_),0,a(_)))}h.push(u),l.push(new y(0,1,0));const d=[];for(let m=0;m<f.length;m++)d.push(f[f.length-m-1]);h.push(d),super({vertices:o,faces:h,axes:l}),this.type=ue.types.CYLINDER,this.radiusTop=e,this.radiusBottom=t,this.height=n,this.numSegments=i}}new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new Wt;new y;new Wt;new y;new y;new y;new y;new y;new y;new y;new Wt;new y;new Xe;new Wt;class Wg{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class qg extends Wg{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,l=o.length,h=t.bodies,u=h.length,f=e;let a,c,d,m,g,_;if(l!==0)for(let b=0;b!==u;b++)h[b].updateSolveMassProperties();const p=Yg,v=jg,x=Xg;p.length=l,v.length=l,x.length=l;for(let b=0;b!==l;b++){const A=o[b];x[b]=0,v[b]=A.computeB(f),p[b]=1/A.computeC()}if(l!==0){for(let E=0;E!==u;E++){const C=h[E],B=C.vlambda,M=C.wlambda;B.set(0,0,0),M.set(0,0,0)}for(n=0;n!==i;n++){m=0;for(let E=0;E!==l;E++){const C=o[E];a=v[E],c=p[E],_=x[E],g=C.computeGWlambda(),d=c*(a-g-C.eps*_),_+d<C.minForce?d=C.minForce-_:_+d>C.maxForce&&(d=C.maxForce-_),x[E]+=d,m+=d>0?d:-d,C.addToWlambda(d)}if(m*m<s)break}for(let E=0;E!==u;E++){const C=h[E],B=C.velocity,M=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),B.vadd(C.vlambda,B),C.wlambda.vmul(C.angularFactor,C.wlambda),M.vadd(C.wlambda,M)}let b=o.length;const A=1/f;for(;b--;)o[b].multiplier=x[b]*A}return n}}const Xg=[],Yg=[],jg=[];class $g{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class Kg extends $g{constructor(){super(...arguments),this.type=y}constructObject(){return new y}}const tt={sphereSphere:ue.types.SPHERE,spherePlane:ue.types.SPHERE|ue.types.PLANE,boxBox:ue.types.BOX|ue.types.BOX,sphereBox:ue.types.SPHERE|ue.types.BOX,planeBox:ue.types.PLANE|ue.types.BOX,convexConvex:ue.types.CONVEXPOLYHEDRON,sphereConvex:ue.types.SPHERE|ue.types.CONVEXPOLYHEDRON,planeConvex:ue.types.PLANE|ue.types.CONVEXPOLYHEDRON,boxConvex:ue.types.BOX|ue.types.CONVEXPOLYHEDRON,sphereHeightfield:ue.types.SPHERE|ue.types.HEIGHTFIELD,boxHeightfield:ue.types.BOX|ue.types.HEIGHTFIELD,convexHeightfield:ue.types.CONVEXPOLYHEDRON|ue.types.HEIGHTFIELD,sphereParticle:ue.types.PARTICLE|ue.types.SPHERE,planeParticle:ue.types.PLANE|ue.types.PARTICLE,boxParticle:ue.types.BOX|ue.types.PARTICLE,convexParticle:ue.types.PARTICLE|ue.types.CONVEXPOLYHEDRON,cylinderCylinder:ue.types.CYLINDER,sphereCylinder:ue.types.SPHERE|ue.types.CYLINDER,planeCylinder:ue.types.PLANE|ue.types.CYLINDER,boxCylinder:ue.types.BOX|ue.types.CYLINDER,convexCylinder:ue.types.CONVEXPOLYHEDRON|ue.types.CYLINDER,heightfieldCylinder:ue.types.HEIGHTFIELD|ue.types.CYLINDER,particleCylinder:ue.types.PARTICLE|ue.types.CYLINDER,sphereTrimesh:ue.types.SPHERE|ue.types.TRIMESH,planeTrimesh:ue.types.PLANE|ue.types.TRIMESH};class Zg{get[tt.sphereSphere](){return this.sphereSphere}get[tt.spherePlane](){return this.spherePlane}get[tt.boxBox](){return this.boxBox}get[tt.sphereBox](){return this.sphereBox}get[tt.planeBox](){return this.planeBox}get[tt.convexConvex](){return this.convexConvex}get[tt.sphereConvex](){return this.sphereConvex}get[tt.planeConvex](){return this.planeConvex}get[tt.boxConvex](){return this.boxConvex}get[tt.sphereHeightfield](){return this.sphereHeightfield}get[tt.boxHeightfield](){return this.boxHeightfield}get[tt.convexHeightfield](){return this.convexHeightfield}get[tt.sphereParticle](){return this.sphereParticle}get[tt.planeParticle](){return this.planeParticle}get[tt.boxParticle](){return this.boxParticle}get[tt.convexParticle](){return this.convexParticle}get[tt.cylinderCylinder](){return this.convexConvex}get[tt.sphereCylinder](){return this.sphereConvex}get[tt.planeCylinder](){return this.planeConvex}get[tt.boxCylinder](){return this.boxConvex}get[tt.convexCylinder](){return this.convexConvex}get[tt.heightfieldCylinder](){return this.heightfieldCylinder}get[tt.particleCylinder](){return this.particleCylinder}get[tt.sphereTrimesh](){return this.sphereTrimesh}get[tt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Kg,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,o){let l;this.contactPointPool.length?(l=this.contactPointPool.pop(),l.bi=e,l.bj=t):l=new Ig(e,t),l.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const h=this.currentContactMaterial;l.restitution=h.restitution,l.setSpookParams(h.contactEquationStiffness,h.contactEquationRelaxation,this.world.dt);const u=n.material||e.material,f=i.material||t.material;return u&&f&&u.restitution>=0&&f.restitution>=0&&(l.restitution=u.restitution*f.restitution),l.si=s||n,l.sj=o||i,l}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,o=e.sj,l=this.world,h=this.currentContactMaterial;let u=h.friction;const f=s.material||n.material,a=o.material||i.material;if(f&&a&&f.friction>=0&&a.friction>=0&&(u=f.friction*a.friction),u>0){const c=u*(l.frictionGravity||l.gravity).length();let d=n.invMass+i.invMass;d>0&&(d=1/d);const m=this.frictionEquationPool,g=m.length?m.pop():new kl(n,i,c*d),_=m.length?m.pop():new kl(n,i,c*d);return g.bi=_.bi=n,g.bj=_.bj=i,g.minForce=_.minForce=-c*d,g.maxForce=_.maxForce=c*d,g.ri.copy(e.ri),g.rj.copy(e.rj),_.ri.copy(e.ri),_.rj.copy(e.rj),e.ni.tangents(g.t,_.t),g.setSpookParams(h.frictionEquationStiffness,h.frictionEquationRelaxation,l.dt),_.setSpookParams(h.frictionEquationStiffness,h.frictionEquationRelaxation,l.dt),g.enabled=_.enabled=e.enabled,t.push(g,_),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Zn.setZero(),Di.setZero(),Fi.setZero();const s=t.bi;t.bj;for(let l=0;l!==e;l++)t=this.result[this.result.length-1-l],t.bi!==s?(Zn.vadd(t.ni,Zn),Di.vadd(t.ri,Di),Fi.vadd(t.rj,Fi)):(Zn.vsub(t.ni,Zn),Di.vadd(t.rj,Di),Fi.vadd(t.ri,Fi));const o=1/e;Di.scale(o,n.ri),Fi.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Zn.normalize(),Zn.tangents(n.t,i.t)}getContacts(e,t,n,i,s,o,l){this.contactPointPool=s,this.frictionEquationPool=l,this.result=i,this.frictionResult=o;const h=e0,u=t0,f=Qg,a=Jg;for(let c=0,d=e.length;c!==d;c++){const m=e[c],g=t[c];let _=null;m.material&&g.material&&(_=n.getContactMaterial(m.material,g.material)||null);const p=m.type&ce.KINEMATIC&&g.type&ce.STATIC||m.type&ce.STATIC&&g.type&ce.KINEMATIC||m.type&ce.KINEMATIC&&g.type&ce.KINEMATIC;for(let v=0;v<m.shapes.length;v++){m.quaternion.mult(m.shapeOrientations[v],h),m.quaternion.vmult(m.shapeOffsets[v],f),f.vadd(m.position,f);const x=m.shapes[v];for(let b=0;b<g.shapes.length;b++){g.quaternion.mult(g.shapeOrientations[b],u),g.quaternion.vmult(g.shapeOffsets[b],a),a.vadd(g.position,a);const A=g.shapes[b];if(!(x.collisionFilterMask&A.collisionFilterGroup&&A.collisionFilterMask&x.collisionFilterGroup)||f.distanceTo(a)>x.boundingSphereRadius+A.boundingSphereRadius)continue;let E=null;x.material&&A.material&&(E=n.getContactMaterial(x.material,A.material)||null),this.currentContactMaterial=E||_||n.defaultContactMaterial;const C=x.type|A.type,B=this[C];if(B){let M=!1;x.type<A.type?M=B.call(this,x,A,f,a,h,u,m,g,x,A,p):M=B.call(this,A,x,a,f,u,h,g,m,x,A,p),M&&p&&(n.shapeOverlapKeeper.set(x.id,A.id),n.bodyOverlapKeeper.set(m.id,g.id))}}}}}sphereSphere(e,t,n,i,s,o,l,h,u,f,a){if(a)return n.distanceSquared(i)<(e.radius+t.radius)**2;const c=this.createContactEquation(l,h,e,t,u,f);i.vsub(n,c.ni),c.ni.normalize(),c.ri.copy(c.ni),c.rj.copy(c.ni),c.ri.scale(e.radius,c.ri),c.rj.scale(-t.radius,c.rj),c.ri.vadd(n,c.ri),c.ri.vsub(l.position,c.ri),c.rj.vadd(i,c.rj),c.rj.vsub(h.position,c.rj),this.result.push(c),this.createFrictionEquationsFromContact(c,this.frictionResult)}spherePlane(e,t,n,i,s,o,l,h,u,f,a){const c=this.createContactEquation(l,h,e,t,u,f);if(c.ni.set(0,0,1),o.vmult(c.ni,c.ni),c.ni.negate(c.ni),c.ni.normalize(),c.ni.scale(e.radius,c.ri),n.vsub(i,nr),c.ni.scale(c.ni.dot(nr),Hl),nr.vsub(Hl,c.rj),-nr.dot(c.ni)<=e.radius){if(a)return!0;const d=c.ri,m=c.rj;d.vadd(n,d),d.vsub(l.position,d),m.vadd(i,m),m.vsub(h.position,m),this.result.push(c),this.createFrictionEquationsFromContact(c,this.frictionResult)}}boxBox(e,t,n,i,s,o,l,h,u,f,a){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,o,l,h,e,t,a)}sphereBox(e,t,n,i,s,o,l,h,u,f,a){const c=this.v3pool,d=A0;n.vsub(i,ir),t.getSideNormals(d,o);const m=e.radius;let g=!1;const _=R0,p=P0,v=L0;let x=null,b=0,A=0,E=0,C=null;for(let I=0,j=d.length;I!==j&&g===!1;I++){const k=w0;k.copy(d[I]);const H=k.length();k.normalize();const K=ir.dot(k);if(K<H+m&&K>0){const Z=E0,$=T0;Z.copy(d[(I+1)%3]),$.copy(d[(I+2)%3]);const X=Z.length(),Q=$.length();Z.normalize(),$.normalize();const ae=ir.dot(Z),pe=ir.dot($);if(ae<X&&ae>-X&&pe<Q&&pe>-Q){const me=Math.abs(K-H-m);if((C===null||me<C)&&(C=me,A=ae,E=pe,x=H,_.copy(k),p.copy(Z),v.copy($),b++,a))return!0}}}if(b){g=!0;const I=this.createContactEquation(l,h,e,t,u,f);_.scale(-m,I.ri),I.ni.copy(_),I.ni.negate(I.ni),_.scale(x,_),p.scale(A,p),_.vadd(p,_),v.scale(E,v),_.vadd(v,I.rj),I.ri.vadd(n,I.ri),I.ri.vsub(l.position,I.ri),I.rj.vadd(i,I.rj),I.rj.vsub(h.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}let B=c.get();const M=C0;for(let I=0;I!==2&&!g;I++)for(let j=0;j!==2&&!g;j++)for(let k=0;k!==2&&!g;k++)if(B.set(0,0,0),I?B.vadd(d[0],B):B.vsub(d[0],B),j?B.vadd(d[1],B):B.vsub(d[1],B),k?B.vadd(d[2],B):B.vsub(d[2],B),i.vadd(B,M),M.vsub(n,M),M.lengthSquared()<m*m){if(a)return!0;g=!0;const H=this.createContactEquation(l,h,e,t,u,f);H.ri.copy(M),H.ri.normalize(),H.ni.copy(H.ri),H.ri.scale(m,H.ri),H.rj.copy(B),H.ri.vadd(n,H.ri),H.ri.vsub(l.position,H.ri),H.rj.vadd(i,H.rj),H.rj.vsub(h.position,H.rj),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}c.release(B),B=null;const w=c.get(),F=c.get(),z=c.get(),N=c.get(),P=c.get(),L=d.length;for(let I=0;I!==L&&!g;I++)for(let j=0;j!==L&&!g;j++)if(I%3!==j%3){d[j].cross(d[I],w),w.normalize(),d[I].vadd(d[j],F),z.copy(n),z.vsub(F,z),z.vsub(i,z);const k=z.dot(w);w.scale(k,N);let H=0;for(;H===I%3||H===j%3;)H++;P.copy(n),P.vsub(N,P),P.vsub(F,P),P.vsub(i,P);const K=Math.abs(k),Z=P.length();if(K<d[H].length()&&Z<m){if(a)return!0;g=!0;const $=this.createContactEquation(l,h,e,t,u,f);F.vadd(N,$.rj),$.rj.copy($.rj),P.negate($.ni),$.ni.normalize(),$.ri.copy($.rj),$.ri.vadd(i,$.ri),$.ri.vsub(n,$.ri),$.ri.normalize(),$.ri.scale(m,$.ri),$.ri.vadd(n,$.ri),$.ri.vsub(l.position,$.ri),$.rj.vadd(i,$.rj),$.rj.vsub(h.position,$.rj),this.result.push($),this.createFrictionEquationsFromContact($,this.frictionResult)}}c.release(w,F,z,N,P)}planeBox(e,t,n,i,s,o,l,h,u,f,a){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,o,l,h,e,t,a)}convexConvex(e,t,n,i,s,o,l,h,u,f,a,c,d){const m=X0;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,o,m,c,d)){const g=[],_=Y0;e.clipAgainstHull(n,s,t,i,o,m,-100,100,g);let p=0;for(let v=0;v!==g.length;v++){if(a)return!0;const x=this.createContactEquation(l,h,e,t,u,f),b=x.ri,A=x.rj;m.negate(x.ni),g[v].normal.negate(_),_.scale(g[v].depth,_),g[v].point.vadd(_,b),A.copy(g[v].point),b.vsub(n,b),A.vsub(i,A),b.vadd(n,b),b.vsub(l.position,b),A.vadd(i,A),A.vsub(h.position,A),this.result.push(x),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(e,t,n,i,s,o,l,h,u,f,a){const c=this.v3pool;n.vsub(i,I0);const d=t.faceNormals,m=t.faces,g=t.vertices,_=e.radius;let p=!1;for(let v=0;v!==g.length;v++){const x=g[v],b=U0;o.vmult(x,b),i.vadd(b,b);const A=N0;if(b.vsub(n,A),A.lengthSquared()<_*_){if(a)return!0;p=!0;const E=this.createContactEquation(l,h,e,t,u,f);E.ri.copy(A),E.ri.normalize(),E.ni.copy(E.ri),E.ri.scale(_,E.ri),b.vsub(i,E.rj),E.ri.vadd(n,E.ri),E.ri.vsub(l.position,E.ri),E.rj.vadd(i,E.rj),E.rj.vsub(h.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);return}}for(let v=0,x=m.length;v!==x&&p===!1;v++){const b=d[v],A=m[v],E=B0;o.vmult(b,E);const C=O0;o.vmult(g[A[0]],C),C.vadd(i,C);const B=z0;E.scale(-_,B),n.vadd(B,B);const M=k0;B.vsub(C,M);const w=M.dot(E),F=H0;if(n.vsub(C,F),w<0&&F.dot(E)>0){const z=[];for(let N=0,P=A.length;N!==P;N++){const L=c.get();o.vmult(g[A[N]],L),i.vadd(L,L),z.push(L)}if(S0(z,E,n)){if(a)return!0;p=!0;const N=this.createContactEquation(l,h,e,t,u,f);E.scale(-_,N.ri),E.negate(N.ni);const P=c.get();E.scale(-w,P);const L=c.get();E.scale(-_,L),n.vsub(i,N.rj),N.rj.vadd(L,N.rj),N.rj.vadd(P,N.rj),N.rj.vadd(i,N.rj),N.rj.vsub(h.position,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(l.position,N.ri),c.release(P),c.release(L),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let I=0,j=z.length;I!==j;I++)c.release(z[I]);return}else for(let N=0;N!==A.length;N++){const P=c.get(),L=c.get();o.vmult(g[A[(N+1)%A.length]],P),o.vmult(g[A[(N+2)%A.length]],L),i.vadd(P,P),i.vadd(L,L);const I=D0;L.vsub(P,I);const j=F0;I.unit(j);const k=c.get(),H=c.get();n.vsub(P,H);const K=H.dot(j);j.scale(K,k),k.vadd(P,k);const Z=c.get();if(k.vsub(n,Z),K>0&&K*K<I.lengthSquared()&&Z.lengthSquared()<_*_){if(a)return!0;const $=this.createContactEquation(l,h,e,t,u,f);k.vsub(i,$.rj),k.vsub(n,$.ni),$.ni.normalize(),$.ni.scale(_,$.ri),$.rj.vadd(i,$.rj),$.rj.vsub(h.position,$.rj),$.ri.vadd(n,$.ri),$.ri.vsub(l.position,$.ri),this.result.push($),this.createFrictionEquationsFromContact($,this.frictionResult);for(let X=0,Q=z.length;X!==Q;X++)c.release(z[X]);c.release(P),c.release(L),c.release(k),c.release(Z),c.release(H);return}c.release(P),c.release(L),c.release(k),c.release(Z),c.release(H)}for(let N=0,P=z.length;N!==P;N++)c.release(z[N])}}}planeConvex(e,t,n,i,s,o,l,h,u,f,a){const c=G0,d=V0;d.set(0,0,1),s.vmult(d,d);let m=0;const g=W0;for(let _=0;_!==t.vertices.length;_++)if(c.copy(t.vertices[_]),o.vmult(c,c),i.vadd(c,c),c.vsub(n,g),d.dot(g)<=0){if(a)return!0;const v=this.createContactEquation(l,h,e,t,u,f),x=q0;d.scale(d.dot(g),x),c.vsub(x,x),x.vsub(n,v.ri),v.ni.copy(d),c.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(l.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(h.position,v.rj),this.result.push(v),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(e,t,n,i,s,o,l,h,u,f,a){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,o,l,h,e,t,a)}sphereHeightfield(e,t,n,i,s,o,l,h,u,f,a){const c=t.data,d=e.radius,m=t.elementSize,g=rv,_=sv;Xe.pointToLocalFrame(i,o,n,_);let p=Math.floor((_.x-d)/m)-1,v=Math.ceil((_.x+d)/m)+1,x=Math.floor((_.y-d)/m)-1,b=Math.ceil((_.y+d)/m)+1;if(v<0||b<0||p>c.length||x>c[0].length)return;p<0&&(p=0),v<0&&(v=0),x<0&&(x=0),b<0&&(b=0),p>=c.length&&(p=c.length-1),v>=c.length&&(v=c.length-1),b>=c[0].length&&(b=c[0].length-1),x>=c[0].length&&(x=c[0].length-1);const A=[];t.getRectMinMax(p,x,v,b,A);const E=A[0],C=A[1];if(_.z-d>C||_.z+d<E)return;const B=this.result;for(let M=p;M<v;M++)for(let w=x;w<b;w++){const F=B.length;let z=!1;if(t.getConvexTrianglePillar(M,w,!1),Xe.pointToWorldFrame(i,o,t.pillarOffset,g),n.distanceTo(g)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(z=this.sphereConvex(e,t.pillarConvex,n,g,s,o,l,h,e,t,a)),a&&z||(t.getConvexTrianglePillar(M,w,!0),Xe.pointToWorldFrame(i,o,t.pillarOffset,g),n.distanceTo(g)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(z=this.sphereConvex(e,t.pillarConvex,n,g,s,o,l,h,e,t,a)),a&&z))return!0;if(B.length-F>2)return}}boxHeightfield(e,t,n,i,s,o,l,h,u,f,a){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,o,l,h,e,t,a)}convexHeightfield(e,t,n,i,s,o,l,h,u,f,a){const c=t.data,d=t.elementSize,m=e.boundingSphereRadius,g=nv,_=iv,p=tv;Xe.pointToLocalFrame(i,o,n,p);let v=Math.floor((p.x-m)/d)-1,x=Math.ceil((p.x+m)/d)+1,b=Math.floor((p.y-m)/d)-1,A=Math.ceil((p.y+m)/d)+1;if(x<0||A<0||v>c.length||b>c[0].length)return;v<0&&(v=0),x<0&&(x=0),b<0&&(b=0),A<0&&(A=0),v>=c.length&&(v=c.length-1),x>=c.length&&(x=c.length-1),A>=c[0].length&&(A=c[0].length-1),b>=c[0].length&&(b=c[0].length-1);const E=[];t.getRectMinMax(v,b,x,A,E);const C=E[0],B=E[1];if(!(p.z-m>B||p.z+m<C))for(let M=v;M<x;M++)for(let w=b;w<A;w++){let F=!1;if(t.getConvexTrianglePillar(M,w,!1),Xe.pointToWorldFrame(i,o,t.pillarOffset,g),n.distanceTo(g)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(F=this.convexConvex(e,t.pillarConvex,n,g,s,o,l,h,null,null,a,_,null)),a&&F||(t.getConvexTrianglePillar(M,w,!0),Xe.pointToWorldFrame(i,o,t.pillarOffset,g),n.distanceTo(g)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(F=this.convexConvex(e,t.pillarConvex,n,g,s,o,l,h,null,null,a,_,null)),a&&F))return!0}}sphereParticle(e,t,n,i,s,o,l,h,u,f,a){const c=Z0;if(c.set(0,0,1),i.vsub(n,c),c.lengthSquared()<=e.radius*e.radius){if(a)return!0;const m=this.createContactEquation(h,l,t,e,u,f);c.normalize(),m.rj.copy(c),m.rj.scale(e.radius,m.rj),m.ni.copy(c),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(e,t,n,i,s,o,l,h,u,f,a){const c=j0;c.set(0,0,1),l.quaternion.vmult(c,c);const d=$0;if(i.vsub(l.position,d),c.dot(d)<=0){if(a)return!0;const g=this.createContactEquation(h,l,t,e,u,f);g.ni.copy(c),g.ni.negate(g.ni),g.ri.set(0,0,0);const _=K0;c.scale(c.dot(i),_),i.vsub(_,_),g.rj.copy(_),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}boxParticle(e,t,n,i,s,o,l,h,u,f,a){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,o,l,h,e,t,a)}convexParticle(e,t,n,i,s,o,l,h,u,f,a){let c=-1;const d=J0,m=ev;let g=null;const _=Q0;if(_.copy(i),_.vsub(n,_),s.conjugate(Gl),Gl.vmult(_,_),e.pointIsInside(_)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let p=0,v=e.faces.length;p!==v;p++){const x=[e.worldVertices[e.faces[p][0]]],b=e.worldFaceNormals[p];i.vsub(x[0],Vl);const A=-b.dot(Vl);if(g===null||Math.abs(A)<Math.abs(g)){if(a)return!0;g=A,c=p,d.copy(b)}}if(c!==-1){const p=this.createContactEquation(h,l,t,e,u,f);d.scale(g,m),m.vadd(i,m),m.vsub(n,m),p.rj.copy(m),d.negate(p.ni),p.ri.set(0,0,0);const v=p.ri,x=p.rj;v.vadd(i,v),v.vsub(h.position,v),x.vadd(n,x),x.vsub(l.position,x),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,o,l,h,u,f,a){return this.convexHeightfield(t,e,i,n,o,s,h,l,u,f,a)}particleCylinder(e,t,n,i,s,o,l,h,u,f,a){return this.convexParticle(t,e,i,n,o,s,h,l,u,f,a)}sphereTrimesh(e,t,n,i,s,o,l,h,u,f,a){const c=c0,d=h0,m=u0,g=d0,_=f0,p=p0,v=v0,x=l0,b=o0,A=x0;Xe.pointToLocalFrame(i,o,n,_);const E=e.radius;v.lowerBound.set(_.x-E,_.y-E,_.z-E),v.upperBound.set(_.x+E,_.y+E,_.z+E),t.getTrianglesInAABB(v,A);const C=a0,B=e.radius*e.radius;for(let N=0;N<A.length;N++)for(let P=0;P<3;P++)if(t.getVertex(t.indices[A[N]*3+P],C),C.vsub(_,b),b.lengthSquared()<=B){if(x.copy(C),Xe.pointToWorldFrame(i,o,x,C),C.vsub(n,b),a)return!0;let L=this.createContactEquation(l,h,e,t,u,f);L.ni.copy(b),L.ni.normalize(),L.ri.copy(L.ni),L.ri.scale(e.radius,L.ri),L.ri.vadd(n,L.ri),L.ri.vsub(l.position,L.ri),L.rj.copy(C),L.rj.vsub(h.position,L.rj),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)}for(let N=0;N<A.length;N++)for(let P=0;P<3;P++){t.getVertex(t.indices[A[N]*3+P],c),t.getVertex(t.indices[A[N]*3+(P+1)%3],d),d.vsub(c,m),_.vsub(d,p);const L=p.dot(m);_.vsub(c,p);let I=p.dot(m);if(I>0&&L<0&&(_.vsub(c,p),g.copy(m),g.normalize(),I=p.dot(g),g.scale(I,p),p.vadd(c,p),p.distanceTo(_)<e.radius)){if(a)return!0;const k=this.createContactEquation(l,h,e,t,u,f);p.vsub(_,k.ni),k.ni.normalize(),k.ni.scale(e.radius,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(l.position,k.ri),Xe.pointToWorldFrame(i,o,p,p),p.vsub(h.position,k.rj),Xe.vectorToWorldFrame(o,k.ni,k.ni),Xe.vectorToWorldFrame(o,k.ri,k.ri),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}}const M=m0,w=_0,F=g0,z=r0;for(let N=0,P=A.length;N!==P;N++){t.getTriangleVertices(A[N],M,w,F),t.getNormal(A[N],z),_.vsub(M,p);let L=p.dot(z);if(z.scale(L,p),_.vsub(p,p),L=p.distanceTo(_),dt.pointInTriangle(p,M,w,F)&&L<e.radius){if(a)return!0;let I=this.createContactEquation(l,h,e,t,u,f);p.vsub(_,I.ni),I.ni.normalize(),I.ni.scale(e.radius,I.ri),I.ri.vadd(n,I.ri),I.ri.vsub(l.position,I.ri),Xe.pointToWorldFrame(i,o,p,p),p.vsub(h.position,I.rj),Xe.vectorToWorldFrame(o,I.ni,I.ni),Xe.vectorToWorldFrame(o,I.ri,I.ri),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}}A.length=0}planeTrimesh(e,t,n,i,s,o,l,h,u,f,a){const c=new y,d=n0;d.set(0,0,1),s.vmult(d,d);for(let m=0;m<t.vertices.length/3;m++){t.getVertex(m,c);const g=new y;g.copy(c),Xe.pointToWorldFrame(i,o,g,c);const _=i0;if(c.vsub(n,_),d.dot(_)<=0){if(a)return!0;const v=this.createContactEquation(l,h,e,t,u,f);v.ni.copy(d);const x=s0;d.scale(_.dot(d),x),c.vsub(x,x),v.ri.copy(x),v.ri.vsub(l.position,v.ri),v.rj.copy(c),v.rj.vsub(h.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const Zn=new y,Di=new y,Fi=new y,Qg=new y,Jg=new y,e0=new ht,t0=new ht,n0=new y,i0=new y,s0=new y,r0=new y,o0=new y;new y;const a0=new y,l0=new y,c0=new y,h0=new y,u0=new y,d0=new y,f0=new y,p0=new y,m0=new y,_0=new y,g0=new y,v0=new Wt,x0=[],nr=new y,Hl=new y,y0=new y,M0=new y,b0=new y;function S0(r,e,t){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],l=y0;r[(s+1)%i].vsub(o,l);const h=M0;l.cross(e,h);const u=b0;t.vsub(o,u);const f=h.dot(u);if(n===null||f>0&&n===!0||f<=0&&n===!1){n===null&&(n=f>0);continue}else return!1}return!0}const ir=new y,w0=new y,E0=new y,T0=new y,A0=[new y,new y,new y,new y,new y,new y],C0=new y,R0=new y,P0=new y,L0=new y,I0=new y,D0=new y,F0=new y,N0=new y,U0=new y,B0=new y,O0=new y,z0=new y,k0=new y,H0=new y;new y;new y;const G0=new y,V0=new y,W0=new y,q0=new y,X0=new y,Y0=new y,j0=new y,$0=new y,K0=new y,Z0=new y,Gl=new ht,Q0=new y;new y;const J0=new y,Vl=new y,ev=new y,tv=new y,nv=new y,iv=[0],sv=new y,rv=new y;class Wl{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,o=i.length;let l=0;for(let h=0;h<s;h++){let u=!1;const f=n[h];for(;f>i[l];)l++;u=f===i[l],u||ql(e,f)}l=0;for(let h=0;h<o;h++){let u=!1;const f=i[h];for(;f>n[l];)l++;u=n[l]===f,u||ql(t,f)}}}function ql(r,e){r.push((e&4294901760)>>16,e&65535)}const _o=(r,e)=>r<e?`${r}-${e}`:`${e}-${r}`;class ov{constructor(){this.data={keys:[]}}get(e,t){const n=_o(e,t);return this.data[n]}set(e,t,n){const i=_o(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=_o(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class av extends Gc{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new y,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new y,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new fg,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new qg,this.constraints=[],this.narrowphase=new Zg(this),this.collisionMatrix=new Pl,this.collisionMatrixPrevious=new Pl,this.bodyOverlapKeeper=new Wl,this.shapeOverlapKeeper=new Wl,this.contactmaterials=[],this.contactMaterialTable=new ov,this.defaultMaterial=new kn("default"),this.defaultContactMaterial=new hi(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof gr?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=dt.ALL,n.from=e,n.to=t,n.callback=i,go.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=dt.ANY,n.from=e,n.to=t,n.result=i,go.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=dt.CLOSEST,n.from=e,n.to=t,n.result=i,go.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof ce&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=ft.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=ft.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(ft.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let l=0;l!==this.bodies.length;l++){const h=this.bodies[l];h.previousPosition.lerp(h.position,o,h.interpolatedPosition),h.previousQuaternion.slerp(h.quaternion,o,h.interpolatedQuaternion),h.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=dv,i=fv,s=this.bodies.length,o=this.bodies,l=this.solver,h=this.gravity,u=this.doProfiling,f=this.profile,a=ce.DYNAMIC;let c=-1/0;const d=this.constraints,m=uv;h.length();const g=h.x,_=h.y,p=h.z;let v=0;for(u&&(c=ft.now()),v=0;v!==s;v++){const N=o[v];if(N.type===a){const P=N.force,L=N.mass;P.x+=L*g,P.y+=L*_,P.z+=L*p}}for(let N=0,P=this.subsystems.length;N!==P;N++)this.subsystems[N].update();u&&(c=ft.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),u&&(f.broadphase=ft.now()-c);let x=d.length;for(v=0;v!==x;v++){const N=d[v];if(!N.collideConnected)for(let P=n.length-1;P>=0;P-=1)(N.bodyA===n[P]&&N.bodyB===i[P]||N.bodyB===n[P]&&N.bodyA===i[P])&&(n.splice(P,1),i.splice(P,1))}this.collisionMatrixTick(),u&&(c=ft.now());const b=hv,A=t.length;for(v=0;v!==A;v++)b.push(t[v]);t.length=0;const E=this.frictionEquations.length;for(v=0;v!==E;v++)m.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,b,this.frictionEquations,m),u&&(f.narrowphase=ft.now()-c),u&&(c=ft.now()),v=0;v<this.frictionEquations.length;v++)l.addEquation(this.frictionEquations[v]);const C=t.length;for(let N=0;N!==C;N++){const P=t[N],L=P.bi,I=P.bj,j=P.si,k=P.sj;let H;if(L.material&&I.material?H=this.getContactMaterial(L.material,I.material)||this.defaultContactMaterial:H=this.defaultContactMaterial,H.friction,L.material&&I.material&&(L.material.friction>=0&&I.material.friction>=0&&L.material.friction*I.material.friction,L.material.restitution>=0&&I.material.restitution>=0&&(P.restitution=L.material.restitution*I.material.restitution)),l.addEquation(P),L.allowSleep&&L.type===ce.DYNAMIC&&L.sleepState===ce.SLEEPING&&I.sleepState===ce.AWAKE&&I.type!==ce.STATIC){const K=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),Z=I.sleepSpeedLimit**2;K>=Z*2&&(L.wakeUpAfterNarrowphase=!0)}if(I.allowSleep&&I.type===ce.DYNAMIC&&I.sleepState===ce.SLEEPING&&L.sleepState===ce.AWAKE&&L.type!==ce.STATIC){const K=L.velocity.lengthSquared()+L.angularVelocity.lengthSquared(),Z=L.sleepSpeedLimit**2;K>=Z*2&&(I.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(L,I,!0),this.collisionMatrixPrevious.get(L,I)||(os.body=I,os.contact=P,L.dispatchEvent(os),os.body=L,I.dispatchEvent(os)),this.bodyOverlapKeeper.set(L.id,I.id),this.shapeOverlapKeeper.set(j.id,k.id)}for(this.emitContactEvents(),u&&(f.makeContactConstraints=ft.now()-c,c=ft.now()),v=0;v!==s;v++){const N=o[v];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(x=d.length,v=0;v!==x;v++){const N=d[v];N.update();for(let P=0,L=N.equations.length;P!==L;P++){const I=N.equations[P];l.addEquation(I)}}l.solve(e,this),u&&(f.solve=ft.now()-c),l.removeAllEquations();const B=Math.pow;for(v=0;v!==s;v++){const N=o[v];if(N.type&a){const P=B(1-N.linearDamping,e),L=N.velocity;L.scale(P,L);const I=N.angularVelocity;if(I){const j=B(1-N.angularDamping,e);I.scale(j,I)}}}this.dispatchEvent(cv),u&&(c=ft.now());const w=this.stepnumber%(this.quatNormalizeSkip+1)===0,F=this.quatNormalizeFast;for(v=0;v!==s;v++)o[v].integrate(e,w,F);this.clearForces(),this.broadphase.dirty=!0,u&&(f.integrate=ft.now()-c),this.stepnumber+=1,this.dispatchEvent(lv);let z=!0;if(this.allowSleep)for(z=!1,v=0;v!==s;v++){const N=o[v];N.sleepTick(this.time),N.sleepState!==ce.SLEEPING&&(z=!0)}this.hasActiveBodies=z}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(xn,yn),e){for(let s=0,o=xn.length;s<o;s+=2)as.bodyA=this.getBodyById(xn[s]),as.bodyB=this.getBodyById(xn[s+1]),this.dispatchEvent(as);as.bodyA=as.bodyB=null}if(t){for(let s=0,o=yn.length;s<o;s+=2)ls.bodyA=this.getBodyById(yn[s]),ls.bodyB=this.getBodyById(yn[s+1]),this.dispatchEvent(ls);ls.bodyA=ls.bodyB=null}xn.length=yn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(xn,yn),n){for(let s=0,o=xn.length;s<o;s+=2){const l=this.getShapeById(xn[s]),h=this.getShapeById(xn[s+1]);Mn.shapeA=l,Mn.shapeB=h,l&&(Mn.bodyA=l.body),h&&(Mn.bodyB=h.body),this.dispatchEvent(Mn)}Mn.bodyA=Mn.bodyB=Mn.shapeA=Mn.shapeB=null}if(i){for(let s=0,o=yn.length;s<o;s+=2){const l=this.getShapeById(yn[s]),h=this.getShapeById(yn[s+1]);bn.shapeA=l,bn.shapeB=h,l&&(bn.bodyA=l.body),h&&(bn.bodyB=h.body),this.dispatchEvent(bn)}bn.bodyA=bn.bodyB=bn.shapeA=bn.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Wt;const go=new dt,ft=globalThis.performance||{};if(!ft.now){let r=Date.now();ft.timing&&ft.timing.navigationStart&&(r=ft.timing.navigationStart),ft.now=()=>Date.now()-r}new y;const lv={type:"postStep"},cv={type:"preStep"},os={type:ce.COLLIDE_EVENT_NAME,body:null,contact:null},hv=[],uv=[],dv=[],fv=[],xn=[],yn=[],as={type:"beginContact",bodyA:null,bodyB:null},ls={type:"endContact",bodyA:null,bodyB:null},Mn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},bn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class pv{constructor(){this._world=new av({gravity:new y(0,-22,0)}),this._world.broadphase=new Oi(this._world),this._world.allowSleep=!1,this._world.solver.iterations=20,this.ballMaterial=new kn("ball"),this.softSlabMaterial=new kn("softSlab"),this.hardSlabMaterial=new kn("hardSlab"),this.poleMaterial=new kn("pole"),this._world.poleMaterial=this.poleMaterial;const e=new hi(this.ballMaterial,this.softSlabMaterial,{friction:0,restitution:0});this._world.addContactMaterial(e);const t=new hi(this.ballMaterial,this.hardSlabMaterial,{friction:0,restitution:0});this._world.addContactMaterial(t),this._world.addContactMaterial(new hi(this.ballMaterial,this.poleMaterial,{friction:0,restitution:0}))}step(e){this._world.step(1/120,e,8)}createBallBody(e,t){const n=new ce({mass:1,shape:new mo(e),material:this.ballMaterial});return n.position.set(t.x,t.y,t.z),n.linearDamping=0,n.angularDamping=1,n.allowSleep=!1,this._world.addBody(n),n}createSlabBody(e,t,n,i,s){const o=new ce({mass:0,shape:new bs(new y(e,t,n))});return o.position.set(i.x,i.y,i.z),s&&o.quaternion.set(s.x,s.y,s.z,s.w),this._world.addBody(o),o}createPoleBody(e,t){const n=t*.5,i=new ce({mass:0,material:this.poleMaterial}),s=new Vg(e,e,t,16),o=new ht;return o.setFromEuler(0,0,Math.PI/2),i.addShape(s,new y(0,0,0),o),i.addShape(new mo(e),new y(0,n,0)),i.addShape(new mo(e),new y(0,-n,0)),this._world.addBody(i),i}removeBody(e){e&&this._world.removeBody(e)}get world(){return this._world}}class mv{constructor(e){this.canvas=e,this.isPointerDown=!1,this.isDragging=!1,this.activePointerId=null,this.lastX=0,this._deltaX=0,this.sensitivity=.0055,this.inertia=0,this.inertiaDamping=.88,this._indicatorHideTimer=null,this.rotationIndicator=document.createElement("div"),this.rotationIndicator.style.cssText=`
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
		`,this.rotationIndicator.textContent="↻",document.body.appendChild(this.rotationIndicator),this._onPointerDown=this._onPointerDown.bind(this),this._onPointerMove=this._onPointerMove.bind(this),this._onPointerUp=this._onPointerUp.bind(this),this._onPointerCancel=this._onPointerCancel.bind(this),this._onKeyDown=this._onKeyDown.bind(this),this._onWindowBlur=this._onWindowBlur.bind(this),window.addEventListener("pointerdown",this._onPointerDown,{passive:!0}),window.addEventListener("pointermove",this._onPointerMove,{passive:!0}),window.addEventListener("pointerup",this._onPointerUp),window.addEventListener("pointercancel",this._onPointerCancel),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("blur",this._onWindowBlur)}_onPointerDown(e){e.pointerType==="mouse"&&e.button!==0||this._isFromCanvasEvent(e)&&(this.activePointerId=e.pointerId??null,this.isPointerDown=!0,this.isDragging=!0,this.lastX=e.clientX,this.inertia=0)}_onPointerMove(e){if(this.activePointerId!==null&&e.pointerId!==this.activePointerId)return;if(e.pointerType==="mouse"&&this.isDragging&&!(e.buttons&1)){this._clearPointerState();return}if(!this.isDragging)return;const t=(e.clientX-this.lastX)*this.sensitivity;this._deltaX=t,this.inertia=t,this.lastX=e.clientX,Math.abs(t)>1e-4&&this._showRotationIndicator(t>0?1:-1)}_onPointerUp(e){e.pointerType==="mouse"&&e.button!==0||this.activePointerId!==null&&e.pointerId!==this.activePointerId||this._clearPointerState()}_onPointerCancel(){this._clearPointerState()}_onKeyDown(e){e.key==="ArrowLeft"&&(this.inertia=-.022,this._showRotationIndicator(-1)),e.key==="ArrowRight"&&(this.inertia=.022,this._showRotationIndicator(1))}_onWindowBlur(){this._clearPointerState()}_isFromCanvasEvent(e){if(!this.canvas||!e)return!0;const t=typeof e.clientX=="number"?e.clientX:null,n=typeof e.clientY=="number"?e.clientY:null;if(typeof t=="number"&&typeof n=="number"){const i=this.canvas.getBoundingClientRect();return t>=i.left&&t<=i.right&&n>=i.top&&n<=i.bottom}return!0}_clearPointerState(){this.isPointerDown=!1,this.isDragging=!1,this.activePointerId=null,this._deltaX=0}cancelPress(){this._clearPointerState()}_showRotationIndicator(e){this.rotationIndicator&&(this.rotationIndicator.textContent=e>0?"↻":"↺",this.rotationIndicator.style.opacity="1",this.rotationIndicator.style.transform="translate(-50%,-50%) scale(1)",this._indicatorHideTimer&&clearTimeout(this._indicatorHideTimer),this._indicatorHideTimer=setTimeout(()=>{this.rotationIndicator.style.opacity="0",this.rotationIndicator.style.transform="translate(-50%,-50%) scale(0.9)"},180))}update(){this.isDragging||(this.inertia*=this.inertiaDamping),Math.abs(this.inertia)<1e-4&&(this.inertia=0),this._deltaX=this.isDragging?this._deltaX:this.inertia}get rotation(){return this._deltaX}get isPressing(){return this.isPointerDown}}const _v="modulepreload",gv=function(r,e){return new URL(r,e).href},Xl={},sr=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),h=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=Promise.allSettled(t.map(u=>{if(u=gv(u,n),u in Xl)return;Xl[u]=!0;const f=u.endsWith(".css"),a=f?'[rel="stylesheet"]':"";if(!!n)for(let m=o.length-1;m>=0;m--){const g=o[m];if(g.href===u&&(!f||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${a}`))return;const d=document.createElement("link");if(d.rel=f?"stylesheet":_v,f||(d.as="script"),d.crossOrigin="",d.href=u,h&&d.setAttribute("nonce",h),document.head.appendChild(d),f)return new Promise((m,g)=>{d.addEventListener("load",m),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})},Qn=.4,Sn=.55,vv=2.6,Yl=6.6,xv=12.5,Ni=180,jl=220,yv=200;class Mv{constructor(e,t,n=1){this.scene=e,this._scene=e,this.physics=t,this._visualZOffset=0,this._baseScale=1;const i=new xs(Qn,32,24),s=new b_({color:3832063,roughness:.46,metalness:0,emissive:1720234,emissiveIntensity:.06,envMapIntensity:.22,clearcoat:.65,clearcoatRoughness:.18});this.mesh=new We(i,s),this.mesh.castShadow=!0,this.mesh.receiveShadow=!1,this.mesh.position.set(0,Sn,0),this.mesh.scale.setScalar(this._baseScale),this._visualY=Sn,this._smoothedVelY=0,this._baseSpriteColor=new ye(3832063),this._landingTintColor=this._baseSpriteColor.clone(),this._landingTintTimer=0,e.add(this.mesh);const o=this._createShadowTexture(),l=new Er(Qn*2.4,Qn*2.4),h=new ui({map:o,color:1053720,transparent:!0,opacity:.32,depthWrite:!1,depthTest:!0});this._shadow=new We(l,h),this._shadow.rotation.x=-Math.PI/2,this._shadow.renderOrder=998,e.add(this._shadow),this.body=this.physics.createBallBody(Qn,{x:0,y:Sn,z:0}),this.isAlive=!0,this._dieAnimId=null,this._lastVelY=0,this._preImpactVelY=0,this._lastContactY=Sn,this._fallHeight=0,this._state="idle",this._stateTimer=0,this._squashTimer=0,this._fallSpeed=0,this._BALL_RADIUS=Qn,this._lastTrail=0,this._hardContactLockUntil=0,this._lastBounceAt=0,this._lastLandingType="",this._lastLandingHintAt=0,this._lastContactResolveAt=0,this._idlePhase=Math.random()*Math.PI*2,this._isBreakInputActive=()=>!1,this._recentHits=new Map,this._stuckLow=!1,this._onCollide=u=>{var g,_,p;const f=performance.now(),a=u.body,c=a.userData;if(!c||!c.type||c.type!=="soft_slab"&&c.type!=="hard_slab")return;let d=0;try{d=((_=(g=u.contact)==null?void 0:g.getImpactVelocityAlongNormal)==null?void 0:_.call(g))??0}catch{d=this._lastVelY||0}this._preImpactVelY=d<0?d:this._lastVelY||0,this._emitLandingHint(c.type==="soft_slab"?"soft":"hard");const m=c.slab?`slab:${c.slab.uid}`:null;if(!(this._isRecent(`body:${a.id}`)||m&&this._isRecent(m)))if(this._lastContactY=this.body.position.y,this._fallHeight=0,c.type==="soft_slab"){const v=this.body.velocity.y<=1,x=!!((p=this._isBreakInputActive)!=null&&p.call(this));v&&x?(this._markRecent(`body:${a.id}`,Ni),m&&this._markRecent(m,Ni),this._pendingBounce=!1,this._pendingBounceSpeed=0,this._squashTimer=.08,sr(()=>Promise.resolve().then(()=>or),void 0,import.meta.url).then(b=>{var A;(A=b.GameManager.instance)==null||A.onSoftHit(c)})):(this._markRecent(`body:${a.id}`,Ni),this._queueBounce(this._computeBounceSpeed(this.body.position.y,this._preImpactVelY,!1)),this._squashTimer=.1)}else c.type==="hard_slab"&&(this._markRecent(`body:${a.id}`,Ni),m&&this._markRecent(m,Ni),this._hardContactLockUntil=f+jl,this._queueBounce(this._computeBounceSpeed(this.body.position.y,this._preImpactVelY,!0)),this._squashTimer=.12,sr(()=>Promise.resolve().then(()=>or),void 0,import.meta.url).then(v=>{var x;(x=v.GameManager.instance)==null||x.onHardHit(c)}))},this.body.addEventListener("collide",this._onCollide),this._pendingBounce=!1,this._pendingBounceSpeed=0,this._postStepHandler&&this.physics.world.removeEventListener("postStep",this._postStepHandler),this._postStepHandler=()=>{this.body.position.x=0,this.body.position.z=0,this.body.velocity.x=0,this.body.velocity.z=0,this.body.angularVelocity.set(0,0,0),this._pendingBounce&&(this.body.velocity.y=this._pendingBounceSpeed,this.body.position.y+=.022,this._pendingBounce=!1,this._lastBounceAt=performance.now()),this.body.position.y>4&&(this.body.position.y=4,this.body.velocity.y>0&&(this.body.velocity.y=0))},this.physics.world.addEventListener("postStep",this._postStepHandler)}_createBallSpriteTexture(){const t=document.createElement("canvas");t.width=256,t.height=256;const n=t.getContext("2d"),i=256*.5,s=256*.5,o=256*.45;n.clearRect(0,0,256,256);const l=n.createRadialGradient(i-o*.28,s-o*.25,o*.12,i,s,o);l.addColorStop(0,"#FFFFFF"),l.addColorStop(.55,"#FF8DB3"),l.addColorStop(1,"#C44569"),n.fillStyle=l,n.beginPath(),n.arc(i,s,o,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(255,224,236,0.28)",n.lineWidth=o*.1,n.beginPath(),n.arc(i,s,o*.92,Math.PI*.1,Math.PI*.95),n.stroke(),n.fillStyle="rgba(255,255,255,0.55)",n.beginPath(),n.ellipse(i-o*.28,s-o*.22,o*.2,o*.17,-.35,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255,255,255,0.95)",n.beginPath(),n.ellipse(i-o*.03,s-o*.35,o*.16,o*.11,0,0,Math.PI*2),n.fill();const h=new vs(t);return h.needsUpdate=!0,h.minFilter=bt,h.magFilter=bt,h}_createShadowTexture(){const t=document.createElement("canvas");t.width=128,t.height=128;const n=t.getContext("2d"),i=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);i.addColorStop(0,"rgba(0,0,0,0.85)"),i.addColorStop(.55,"rgba(0,0,0,0.35)"),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,128,128);const s=new vs(t);return s.minFilter=bt,s.magFilter=bt,s}_applyScale(e,t){this.mesh.scale.set(this._baseScale*e,this._baseScale*t,this._baseScale*e)}_emitLandingHint(e){const t=performance.now();e===this._lastLandingType&&t-this._lastLandingHintAt<140||(this._lastLandingType=e,this._lastLandingHintAt=t,sr(()=>Promise.resolve().then(()=>or),void 0,import.meta.url).then(n=>{var i,s;(s=(i=n.GameManager.instance)==null?void 0:i.notifyLandingType)==null||s.call(i,e)}),this._landingTintColor.setHex(e==="soft"?10485712:16765594),this._landingTintTimer=.22)}_computeBounceSpeed(e,t,n){var d,m,g;const i=Math.abs(((g=(m=(d=this.physics)==null?void 0:d.world)==null?void 0:m.gravity)==null?void 0:g.y)??22),s=Math.max(.6,3.4-e),o=Math.min(vv,s),l=Math.sqrt(2*i*o),h=Math.max(0,-Math.min(0,t||0)),f=(n?Tt.lerp(.55,.38,Tt.clamp(h/14,0,1)):Tt.lerp(.5,.4,Tt.clamp(h/14,0,1)))*h,a=Yl*.55,c=Math.min(l,Math.max(f,a));return Tt.clamp(c,Yl*.5,xv)}_queueBounce(e){const t=performance.now();if(t-this._lastBounceAt<90){this._pendingBounce=!0,this._pendingBounceSpeed=Math.max(this._pendingBounceSpeed*.92,e*.9);return}this._pendingBounce=!0,this._pendingBounceSpeed=e,this._lastBounceAt=t}_isRecent(e){const t=performance.now(),n=this._recentHits.get(e);return n?n<=t?(this._recentHits.delete(e),!1):!0:!1}_markRecent(e,t=Ni){this._recentHits.set(e,performance.now()+t)}_getActiveSlabContacts(){var n,i,s,o,l;const e=(s=(i=(n=this.physics)==null?void 0:n.world)==null?void 0:i.narrowphase)==null?void 0:s.contactEquations,t={hasSoft:!1,hasHard:!1,softUserData:null,hardUserData:null};if(!e||e.length===0)return t;for(const h of e){const u=h.bi,f=h.bj;if(u!==this.body&&f!==this.body)continue;const a=u===this.body?f:u;((o=a==null?void 0:a.userData)==null?void 0:o.type)==="soft_slab"&&(t.hasSoft=!0,t.softUserData||(t.softUserData=a.userData)),((l=a==null?void 0:a.userData)==null?void 0:l.type)==="hard_slab"&&(t.hasHard=!0,t.hardUserData||(t.hardUserData=a.userData))}return t}setBreakInputSource(e){this._isBreakInputActive=typeof e=="function"?e:()=>!1}_canBreakSoftSlab(e=!1){var n;return!!((n=this._isBreakInputActive)!=null&&n.call(this))&&!e?!0:(performance.now()<this._hardContactLockUntil,!1)}_resolveStuckContact(){const e=performance.now();if(e-this._lastContactResolveAt<130||e-this._lastBounceAt<yv)return;const t=this._getActiveSlabContacts();if(!t.hasSoft&&!t.hasHard){this._stuckLow=!1;return}const n=Math.abs(this.body.velocity.y);if(!this._stuckLow&&n<.14&&(this._stuckLow=!0),this._stuckLow&&n>.32&&(this._stuckLow=!1),!this._stuckLow)return;if(t.hasHard&&(this._hardContactLockUntil=Math.max(this._hardContactLockUntil,e+jl)),t.hasSoft&&this._canBreakSoftSlab(t.hasHard)){this._pendingBounce=!1,this._pendingBounceSpeed=0,this._squashTimer=.08,this._lastContactResolveAt=e,sr(()=>Promise.resolve().then(()=>or),void 0,import.meta.url).then(s=>{var o;(o=s.GameManager.instance)==null||o.onSoftHit(t.softUserData)});return}this._queueBounce(this._computeBounceSpeed(this.body.position.y,-2.5,!0)),this._lastContactResolveAt=e}update(e){this.body.position.x=0,this.body.position.z=0,this.body.velocity.x=0,this.body.velocity.z=0,this.body.angularVelocity.set(0,0,0),this.mesh.position.x=0,this.mesh.position.z=0,this._resolveStuckContact();const t=Tt.clamp(e*14,0,1);this._visualY=Tt.lerp(this._visualY,this.body.position.y,t),this.mesh.position.y=this._visualY,this._fallHeight=Math.max(0,this._lastContactY-this.body.position.y),this._shadow.position.set(this.body.position.x,this.body.position.y-Qn-.04,this.body.position.z);const n=Tt.clamp((this._fallHeight||0)/4,0,1),i=Tt.lerp(1,.55,n),s=Tt.lerp(.42,.1,n);if(this._shadow.scale.setScalar(i),this._shadow.material.opacity=s,this._updateAnimation(e),this._landingTintTimer>0){this._landingTintTimer-=e;const o=Math.max(0,this._landingTintTimer/.22);this.mesh.material.color.copy(this._baseSpriteColor).lerp(this._landingTintColor,o*.6)}else this.mesh.material.color.copy(this._baseSpriteColor);this._lastVelY=this.body.velocity.y,this._smoothedVelY=Tt.lerp(this._smoothedVelY,this.body.velocity.y,.22)}_updateAnimation(e){this._stateTimer+=e;const t=this._smoothedVelY;if(this.mesh.rotation.y+=e*(.95+Math.min(8,Math.abs(t))*.08),this._squashTimer>0){this._squashTimer-=e;const n=1-this._squashTimer/.12,i=Math.sin(Math.max(0,Math.min(1,n))*Math.PI),s=1+.18*i,o=1-.15*i;this._applyScale(s,o),this.mesh.position.y=this._visualY,this._state="squash";return}this._applyScale(1,1),this.mesh.position.y=this._visualY,this._state="idle"}_spawnTrailParticle(){const e=performance.now();if(e-(this._lastTrail||0)<90)return;this._lastTrail=e;const t=.05+Math.random()*.06,n=new xs(t,6,6),i=[16777215,11981055,7314687,3832063],s=i[Math.floor(Math.random()*i.length)],o=new ui({color:s,transparent:!0,opacity:.55,depthWrite:!1,blending:ri}),l=new We(n,o),h=this._BALL_RADIUS+.1+Math.random()*.3;l.position.set(this.mesh.position.x+(Math.random()-.5)*.15,this.mesh.position.y+h,this.mesh.position.z+(Math.random()-.5)*.15),this._scene.add(l);const u=e,f=140+Math.random()*80,a=l.position.y,c=()=>{const d=performance.now()-u;if(d>=f){this._scene.remove(l),n.dispose(),o.dispose();return}const m=d/f;l.position.y=a+m*.4,l.material.opacity=.55*(1-m),l.scale.setScalar(1-m*.5),requestAnimationFrame(c)};requestAnimationFrame(c)}die(){if(!this.isAlive)return;this.isAlive=!1,this.body.velocity.set(0,0,0),this.body.angularVelocity.set(0,0,0),this.body.type=ce.STATIC,this.body.updateMassProperties();const e=250,t=performance.now();this._dieAnimId&&cancelAnimationFrame(this._dieAnimId);const n=i=>{const s=Math.min(1,(i-t)/e),o=Math.max(0,1-s);this._applyScale(o,o),s<1?this._dieAnimId=requestAnimationFrame(n):this._dieAnimId=null};this._dieAnimId=requestAnimationFrame(n)}reset(e){this.body.position.set(0,Sn,0),this.body.velocity.set(0,0,0),this.body.angularVelocity.set(0,0,0),this.body.type=ce.DYNAMIC,this.body.updateMassProperties(),this.body.wakeUp(),this._dieAnimId&&(cancelAnimationFrame(this._dieAnimId),this._dieAnimId=null),this.mesh.position.set(0,Sn,0),this.mesh.rotation.set(0,0,0),this._applyScale(1,1),this._shadow.position.set(0,Sn-Qn-.04,0),this._shadow.scale.setScalar(1),this._shadow.material.opacity=.32,this.isAlive=!0,this._state="idle",this._stateTimer=0,this._squashTimer=0,this._fallSpeed=0,this._fallHeight=0,this._lastContactY=Sn,this._visualY=Sn,this._smoothedVelY=0,this._lastVelY=0,this._preImpactVelY=0,this._pendingBounce=!1,this._pendingBounceSpeed=0,this._hardContactLockUntil=0,this._lastBounceAt=0,this._lastLandingType="",this._lastLandingHintAt=0,this._lastContactResolveAt=0,this._idlePhase=Math.random()*Math.PI*2,this._landingTintTimer=0,this._stuckLow=!1,this._recentHits.clear(),this.mesh.material.color.copy(this._baseSpriteColor)}dispose(e,t){var n,i;this._dieAnimId&&(cancelAnimationFrame(this._dieAnimId),this._dieAnimId=null),this.body.removeEventListener("collide",this._onCollide),e.remove(this.mesh),e.remove(this._shadow),t&&this.body&&t.removeBody(this.body),this._postStepHandler&&((n=t==null?void 0:t.removeEventListener)==null||n.call(t,"postStep",this._postStepHandler)),(i=this.mesh.geometry)!=null&&i.dispose&&this.mesh.geometry.dispose(),this.mesh.material.map&&this.mesh.material.map.dispose(),this.mesh.material.dispose(),this._shadow.geometry.dispose(),this._shadow.material.map&&this._shadow.material.map.dispose(),this._shadow.material.dispose()}}const $l=[{primary:16765440,secondary:16758784,sky:12096255,ground:16114175},{primary:16735324,secondary:16726072,sky:16765567,ground:16771529},{primary:5227511,secondary:2733814,sky:16757145,ground:16769234},{primary:6732650,secondary:5025616,sky:12887295,ground:15721471},{primary:16747109,secondary:16740419,sky:10479103,ground:14217983},{primary:12216520,secondary:11225020,sky:16769154,ground:16773570},{primary:2541274,secondary:48340,sky:16758457,ground:16767450},{primary:15483002,secondary:14162784,sky:12050943,ground:14479359},{primary:16762930,secondary:16757504,sky:10485714,ground:13500395},{primary:5099745,secondary:2541274,sky:16754376,ground:16764896}];function bv(r){const e=Math.max(0,Math.min($l.length-1,(r|0)-1));return $l[e]}const Zc=2764084,fs=5,Po=.3,Sv=1.7;function Kl(r,e){const t=[];for(let n=0;n<fs;n++){const i=e+n/fs*Math.PI*2-Math.PI/2;t.push(new _e(Math.cos(i)*r,Math.sin(i)*r))}return t}function Jn(r,e,t){return new _e(Tt.lerp(r.x,e.x,t),Tt.lerp(r.y,e.y,t))}function wv(r,e,t,n,i){const s=Po*.5,o=[[r.x,s,r.y],[e.x,s,e.y],[t.x,s,t.y],[n.x,s,n.y],[r.x,-s,r.y],[e.x,-s,e.y],[t.x,-s,t.y],[n.x,-s,n.y]],l=[];for(const d of o)l.push(d[0],d[1],d[2]);const h=[0,1,2,0,2,3,4,6,5,4,7,6,0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0],u=new Ut;u.setAttribute("position",new mt(l,3)),u.setIndex(h),u.computeVertexNormals();const f=i===Zc,a=new ye(i),c=new dn({color:i,roughness:f?.78:.5,metalness:f?0:.02,emissive:f?1379091:a.clone().multiplyScalar(.06),emissiveIntensity:f?.02:.05,envMapIntensity:.45,flatShading:!0});return new We(u,c)}function Ev(r,e,t){const n=new Array(r).fill(!0),i=((e|0)%r+r)%r,s=Math.max(1,Math.min(r-2,t|0));for(let o=0;o<s;o++)n[(i+o)%r]=!1;return n}let Tv=0;class Av{constructor(e,t,n,i,s,o,l){this.scene=e,this.world=t,this.physics=n,this.yPosition=i,this.towerGroup=l,this.uid=++Tv,this.isBroken=!1,this.debris=[],this.pieces=[];const h=o==null?void 0:o.levelTheme;this.softPrimary=(h==null?void 0:h.primary)??16767293,this.softSecondary=(h==null?void 0:h.secondary)??16761095,this.softColor=this.softPrimary;const u=Math.max(3,(o==null?void 0:o.spotsPerSide)??4),f=Math.max(.05,(o==null?void 0:o.poleRadius)??.22),a=Math.max(.08,(o==null?void 0:o.poleGap)??.18),c=Math.max(.3,f+a),d=fs*u,m=((o==null?void 0:o.dangerStart)??0)|0,g=Math.max(2,Math.min(d-4,((o==null?void 0:o.dangerWidth)??6)|0)),_=Ev(d,m,g),p=(o==null?void 0:o.levelRotationOffset)??0,v=Kl(Sv,p),x=Kl(c,p);let b=0;for(let A=0;A<fs;A++){const E=(A+1)%fs,C=v[A],B=v[E],M=x[A],w=x[E];for(let F=0;F<u;F++){const z=F/u,N=(F+1)/u,P=Jn(C,B,z),L=Jn(C,B,N),I=Jn(M,w,z),j=Jn(M,w,N),k=_[b],H=s+b&1?this.softSecondary:this.softPrimary,K=k?H:Zc,Z=k?this.physics.softSlabMaterial:this.physics.hardSlabMaterial,$=wv(P,L,j,I,K);$.castShadow=!0,$.receiveShadow=!0,$.position.y=i,this.towerGroup.add($);const X=this._buildSpotBody(P,L,I,j,Z);X.userData={type:k?"soft_slab":"hard_slab",slab:this,yPosition:i,spotIndex:b};const Q=p-Math.PI/2+(2*b+1)*Math.PI/(2*d);this.world.addBody(X),this.pieces.push({mesh:$,body:X,color:K,spotLocalAngle:Q}),b++}}}updateActiveSpot(e){if(this.isBroken)return;const t=Math.PI*2,n=Math.PI/2;let i=0,s=1/0;for(let o=0;o<this.pieces.length;o++){const h=((this.pieces[o].spotLocalAngle-e)%t+t)%t;let u=Math.abs(h-n);u>Math.PI&&(u=t-u),u<s&&(s=u,i=o)}for(let o=0;o<this.pieces.length;o++){const l=this.pieces[o];l.body&&(l.body.collisionFilterMask=o===i?-1:0)}}_buildSpotBody(e,t,n,i,s){const o=Jn(e,t,.5),l=Jn(n,i,.5),h=Jn(o,l,.5),u=t.clone().sub(e),f=u.length();u.normalize();const a=o.distanceTo(l),c=new ce({mass:0,material:s}),d=Math.max(.05,f*.43),m=Po*.5,g=Math.max(.05,a*.44),_=new bs(new y(d,m,g));c.addShape(_),c.position.set(h.x,this.yPosition,h.y);const p=Math.atan2(u.y,u.x);return c.quaternion.setFromAxisAngle(new y(0,1,0),p),c}syncBodiesToTower(){if(this.isBroken)return;this._tmpVec3||(this._tmpVec3=new U,this._tmpQuat=new Yi);const e=this._tmpVec3,t=this._tmpQuat;for(const n of this.pieces)!n.body||!n.mesh||(n.mesh.getWorldPosition(e),n.mesh.getWorldQuaternion(t),n.body.position.set(e.x,e.y,e.z),n.body.quaternion.set(t.x,t.y,t.z,t.w),n.body.aabbNeedsUpdate=!0)}breakWholeSlab(e){if(!this.isBroken){this.isBroken=!0;for(const t of this.pieces)t.body&&(this.world.removeBody(t.body),t.body=null);for(const t of this.pieces){if(!t.mesh)continue;const n=new U;if(t.mesh.getWorldPosition(n),Math.random()<.9){const i=new Wn(.36+Math.random()*.24,Po,.22+Math.random()*.18),s=new S_({color:t.color,flatShading:!0}),o=new We(i,s);o.position.copy(n),o.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),this.scene.add(o);const l=Math.atan2(n.z,n.x)+(Math.random()-.5)*.4,h=4+Math.random()*4;this.debris.push({mesh:o,vx:Math.cos(l)*h,vy:1.6+Math.random()*2.8,vz:Math.sin(l)*h,rotX:(Math.random()-.5)*10,rotZ:(Math.random()-.5)*10,life:.8+Math.random()*.5})}this.towerGroup.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),t.mesh=null}if(e){const t=new U(0,this.yPosition,0);e.burst(t,new ye(this.softColor),25)}}}animateDebris(e){for(let t=this.debris.length-1;t>=0;t--){const n=this.debris[t];n.mesh.position.x+=n.vx*e,n.mesh.position.y+=n.vy*e,n.mesh.position.z+=n.vz*e,n.vy-=20*e,n.mesh.rotation.x+=n.rotX*e,n.mesh.rotation.z+=n.rotZ*e,n.life-=e,n.life<.3&&(n.mesh.material.opacity=n.life/.3,n.mesh.material.transparent=!0),n.life<=0&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.debris.splice(t,1))}}dispose(){for(const e of this.pieces)e.body&&this.world.removeBody(e.body),e.mesh&&(this.towerGroup.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose());this.pieces=[];for(const e of this.debris)this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose();this.debris=[]}}const Cv=.4;function Rv(r){const e=Math.max(1,Math.min(r,10)),t=Math.min(11,5+Math.floor(e*.6));return{slabCount:28+e*2,rotationSpeed:0,spotsPerSide:4,dangerWidth:t,poleRadius:.16,poleGap:.14,levelTheme:bv(e)}}class Pv{constructor(e,t,n){this.scene=e,this.world=t,this.physics=n,this.towerGroup=new zn,e.add(this.towerGroup),this.slabs=[],this.slabsBroken=0,this.totalSlabs=0,this.autoRotationSpeed=0,this.particleSystem=null}buildLevel(e){var h;for(const u of this.slabs)u.dispose();this.slabs=[],this.slabsBroken=0,this.totalSlabs=e.slabCount,this.autoRotationSpeed=0;const t=(e.spotsPerSide??4)*5,n=Math.max(2,Math.min(t-4,(e.dangerWidth??6)|0)),i={...e,levelRotationOffset:0,dangerStart:Math.floor(Math.random()*t)};for(let u=0;u<e.slabCount;u++){const f=-(u*Cv),a=new Av(this.scene,this.world,this.physics,f,u,i,this.towerGroup);this.slabs.push(a)}this.currentTheme=e.levelTheme;const s=i.dangerStart+(n-1)/2,o=2*Math.PI/t,l=-Math.PI/2+(s+.5)*o;this.towerGroup.rotation.y=l+Math.PI/2,this.towerGroup.updateMatrixWorld(!0);for(const u of this.slabs)u.syncBodiesToTower(),(h=u.updateActiveSpot)==null||h.call(u,this.towerGroup.rotation.y)}update(e,t,n=0){var h;const i=(t||0)+this.autoRotationSpeed*e;this.towerGroup.rotation.y+=i;const s=Math.abs(i)>1e-6;this.towerGroup.updateMatrixWorld(!0);const o=2,l=this.towerGroup.rotation.y;for(const u of this.slabs){if(s){const f=u.yPosition-n;f>=-4&&f<=o&&u.syncBodiesToTower()}(h=u.updateActiveSpot)==null||h.call(u,l),u.animateDebris(e)}}onSoftHit(e){const t=e.slab;return!t||t.isBroken?!1:(t.breakWholeSlab(this.particleSystem),this.slabsBroken++,!0)}allDone(){return this.slabsBroken>=this.totalSlabs}dispose(){for(const e of this.slabs)e.dispose();this.slabs=[],this.scene.remove(this.towerGroup)}}const rr=10;class Lv{constructor(e,t){this.scene=e;const n=.16,i=new ci(n,n,rr,24),s=new dn({color:16777215,roughness:.4,metalness:0,emissive:0,emissiveIntensity:0});s.fog=!0,this.mesh=new We(i,s),this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,this.mesh.position.set(0,.55+rr*.5,0),this.scene.add(this.mesh),this.halo=null,this._haloTargetY=0}update(e,t=.016){if(!this.mesh)return;const n=e-.4,i=e+rr;this.mesh.position.y=(i+n)*.5,this.mesh.scale.y=(i-n)/rr}}const nt={IDLE:"IDLE",PLAYING:"PLAYING",PAUSED:"PAUSED",DEAD:"DEAD",WIN:"WIN",FINAL_WIN:"FINAL_WIN"};function vr(r){return Rv(r)}const yr=class yr{constructor(e,t,n,i,s,o){this.ball=e,this.tower=t,this.pole=n,this.hud=i,this.audio=s,this.audioManager=s,this.particles=o,this.state=nt.IDLE,this.score=0,this.level=1,this.totalLevels=10,this.renderer=null,this._comboCount=0,this._comboMultiplier=1,this._lastSoftHitAt=0,this._comboTimeoutMs=1850,this._maxCombo=0,this._levelStartedAt=0,this._levelStats=this._freshLevelStats(),this._lastHardHitAt=0,this._sequenceRunning=!1,this._sequenceCancelled=!1,this._sequenceMeshes=[],this._sequenceRafs=new Set,this._hardHitsThisLevel=0,this._maxHardHitsBeforeFail=5,this.tower.particleSystem=this.particles,yr.instance=this}_freshLevelStats(){return{broken:0,perfectSoft:0,hardHits:0,ms:0,maxCombo:0}}start(){var t,n,i,s;this.state=nt.PLAYING,this._comboCount=0,this._comboMultiplier=1,this._lastSoftHitAt=0,this._maxCombo=0,this._hardHitsThisLevel=0,this._levelStartedAt=performance.now(),this._levelStats=this._freshLevelStats();const e=(t=this.tower)==null?void 0:t.currentTheme;e&&((n=this.renderer)!=null&&n.setSkyTheme)&&this.renderer.setSkyTheme(e.sky,e.ground),this.hud.showPlayingUI(this.score,this.level,this.tower.totalSlabs),(s=(i=this.hud).updateCombo)==null||s.call(i,0,1,0)}tick(e=performance.now()){var t,n;this.state===nt.PLAYING&&this._comboCount>0&&e-this._lastSoftHitAt>this._comboTimeoutMs&&(this._comboCount=0,this._comboMultiplier=1,(n=(t=this.hud).updateCombo)==null||n.call(t,0,1,0))}notifyLandingType(e){var t,n;this.state===nt.PLAYING&&((n=(t=this.hud).showLandingHint)==null||n.call(t,e))}onSoftHit(e){var n,i,s;if(this.state!==nt.PLAYING)return;if(this.tower.onSoftHit(e)){const o=performance.now();o-this._lastSoftHitAt<=this._comboTimeoutMs?this._comboCount+=1:this._comboCount=1,this._lastSoftHitAt=o,this._comboMultiplier=Math.min(4,1+Math.floor(Math.max(0,this._comboCount-1)/4));const l=3*this._comboMultiplier;this.score+=l,this._levelStats.broken+=1,this._levelStats.perfectSoft+=1,this._comboCount>this._maxCombo&&(this._maxCombo=this._comboCount,this._levelStats.maxCombo=this._maxCombo),this.hud.updateProgress(this.tower.slabsBroken,this.tower.totalSlabs,this.score),(i=(n=this.hud).updateCombo)==null||i.call(n,this._comboCount,this._comboMultiplier,l);const h=Tt.clamp(Math.abs(this.ball.body.velocity.y)/12,.7,1.5);(s=this.audioManager)==null||s.play("break",h),this.tower.allDone()&&this._levelComplete()}}onHardHit(e){var n,i,s,o,l,h,u;if(this.state!==nt.PLAYING)return;const t=performance.now();t-(this._lastHardHitAt||0)<180||(this._lastHardHitAt=t,this._comboCount=0,this._comboMultiplier=1,this._lastSoftHitAt=0,this._levelStats.hardHits+=1,this._hardHitsThisLevel+=1,(n=this.audioManager)==null||n.play("bounce"),(s=(i=this.renderer)==null?void 0:i.triggerShake)==null||s.call(i,.05),(l=(o=this.hud).flashDanger)==null||l.call(o),this.score=Math.max(0,this.score-3),this.hud.updateProgress(this.tower.slabsBroken,this.tower.totalSlabs,this.score),(u=(h=this.hud).updateCombo)==null||u.call(h,0,1,0),this._hardHitsThisLevel>=this._maxHardHitsBeforeFail&&this._failLevel())}_failLevel(){var e,t,n,i,s,o,l,h,u;this.state!==nt.DEAD&&(this.state=nt.DEAD,(t=(e=this.audioManager)==null?void 0:e.duckBGM)==null||t.call(e,.35,400,1200),(n=this.audioManager)==null||n.play("death"),(s=(i=this.renderer)==null?void 0:i.triggerShake)==null||s.call(i,.1),(l=(o=this.ball).die)==null||l.call(o),(u=(h=this.hud).showGameOver)==null||u.call(h,this.score))}togglePause(){var e,t,n,i;return this.state===nt.PLAYING?(this.state=nt.PAUSED,(t=(e=this.hud).showPauseScreen)==null||t.call(e),!0):this.state===nt.PAUSED?(this.state=nt.PLAYING,(i=(n=this.hud).hidePauseScreen)==null||i.call(n),!1):null}restart(){this._cancelCompletionSequence(),this._cleanupAllSlabs(),this._comboCount=0,this._comboMultiplier=1,this._lastSoftHitAt=0,this.ball.reset(this.level),this.tower.buildLevel(vr(this.level)),this.start()}nextLevel(){var e,t;if(this._cancelCompletionSequence(),this._cleanupAllSlabs(),this._comboCount=0,this._comboMultiplier=1,this._lastSoftHitAt=0,this.level>=this.totalLevels){this.state=nt.FINAL_WIN,(t=(e=this.hud).showFinalVictory)==null||t.call(e,this.score,this.totalLevels);return}this.level+=1,this.ball.reset(this.level),this.tower.buildLevel(vr(this.level)),this.start()}_cleanupAllSlabs(){var e,t;for(const n of this.tower.slabs){for(const i of n.debris)this.tower.scene.remove(i.mesh),(e=i.mesh.geometry)==null||e.dispose(),(t=i.mesh.material)==null||t.dispose();n.debris=[]}}async _levelComplete(){var e,t,n;if(!this._sequenceRunning){this.state=nt.WIN,this._levelStats.ms=performance.now()-this._levelStartedAt,(t=(e=this.audioManager)==null?void 0:e.duckBGM)==null||t.call(e,.55,250,1500),(n=this.audioManager)==null||n.play("win"),this._sequenceRunning=!0,this._sequenceCancelled=!1;try{await this._runLevelCompleteSequence()}catch(i){console.error("Error in level complete sequence:",i),this._sequenceCancelled||this.hud.showLevelComplete(this.score,this.level,this.totalLevels,1,this._levelStats)}finally{this._sequenceRunning=!1}}}_isCancelled(){return this._sequenceCancelled}async _runLevelCompleteSequence(){const e=this.tower.scene;if(!e){this.hud.showLevelComplete(this.score,this.level,this.totalLevels,1,this._levelStats);return}const n=-(this.tower.totalSlabs*.62)-.4-.8,i=n-1.8,s=i-2.4;if(this._spawnConfettiBurst(e,this.ball.mesh.position.y+.2),this._isCancelled())return;const o=this._createCheckeredPlatform();o.position.set(0,n,0),e.add(o),this._sequenceMeshes.push(o);const l=this._createMultiplierWheel();l.group.position.set(0,i,0),e.add(l.group),this._sequenceMeshes.push(l.group);const h=this._createWheelPointer();if(h.position.set(0,i+.36,l.radius+.1),e.add(h),this._sequenceMeshes.push(h),await this._spinWheel(l.group,2e3),this._isCancelled()||(await this._animateBallToY(i+.75,900),this._isCancelled()))return;const u=this._getWedgeUnderPointer(l.group.rotation.y,l.multipliers.length),f=l.multipliers[u]||1;this.score+=f,this.hud.updateProgress(this.tower.slabsBroken,this.tower.totalSlabs,this.score);const a=this._createCup();a.position.set(0,s,0),e.add(a),this._sequenceMeshes.push(a),await this._animateBallToY(s+.45,900),!this._isCancelled()&&(this._spawnConfettiBurst(e,s+.8),this.hud.showLevelComplete(this.score,this.level,this.totalLevels,f,this._levelStats))}_spawnConfettiBurst(e,t){const n=[16699242,8377542,8898808,16758689,13809407,16777215,16747955],i=[];for(let h=0;h<60;h++){const u=new We(new Wn(.09,.03,.05),new ui({color:n[h%n.length],transparent:!0,opacity:1}));u.position.set((Math.random()-.5)*3.2,t+Math.random()*.6,(Math.random()-.5)*3.2),e.add(u),this._sequenceMeshes.push(u),i.push({mesh:u,vx:(Math.random()-.5)*2.2,vy:3+Math.random()*3,vz:(Math.random()-.5)*2.2,life:1.6+Math.random()*.6})}let s=performance.now(),o=0;const l=h=>{if(this._sequenceCancelled){this._sequenceRafs.delete(o);return}const u=Math.min((h-s)/1e3,.033);s=h;let f=!1;for(const a of i)a.life<=0||!a.mesh.parent||(f=!0,a.life-=u,a.vy-=8*u,a.mesh.position.x+=a.vx*u,a.mesh.position.y+=a.vy*u,a.mesh.position.z+=a.vz*u,a.mesh.rotation.x+=u*7,a.mesh.rotation.z+=u*5,a.mesh.material.opacity=Math.max(0,a.life/1.2));f?(o=requestAnimationFrame(l),this._sequenceRafs.add(o)):this._sequenceRafs.delete(o)};o=requestAnimationFrame(l),this._sequenceRafs.add(o)}_createCheckeredPlatform(){const t=document.createElement("canvas");t.width=128,t.height=128;const n=t.getContext("2d"),i=128/8;for(let h=0;h<8;h++)for(let u=0;u<8;u++)n.fillStyle=(u+h)%2===0?"#FFEEF3":"#FFC4D6",n.fillRect(u*i,h*i,i,i);const s=new vs(t);s.wrapS=ps,s.wrapT=ps,s.repeat.set(2,2);const o=new We(new ci(2.35,2.35,.24,36),new dn({map:s,color:16777215,roughness:.5,metalness:.05})),l=this._makeTextSprite("!","#C44569",128,'bold 84px "Bricolage Grotesque", Arial');return l.position.set(0,.22,0),o.add(l),o}_createMultiplierWheel(){const e=new zn,t=2,n=8,i=[1,2,3,4,5,6,4,3],s=[16757690,12247551,16768954,12255177,15186687,16759539,16777146,16762070],o=new We(new ci(t+.16,t+.16,.22,40),new dn({color:12862825,roughness:.45,metalness:.18}));e.add(o);for(let l=0;l<n;l++){const h=l/n*Math.PI*2,u=Math.PI*2/n,f=new We(new Ho(t,28,h,u),new dn({color:s[l],side:en,roughness:.35,metalness:.05,emissive:new ye(s[l]).multiplyScalar(.15)}));f.rotation.x=-Math.PI/2,f.position.y=.12,e.add(f);const a=h+u*.5,c=this._makeTextSprite(`x${i[l]}`,"#3A2C3A",160,'bold 56px "Bricolage Grotesque", Arial');c.position.set(Math.cos(a)*1.2,.24,Math.sin(a)*1.2),e.add(c)}return{group:e,multipliers:i,radius:t}}_createWheelPointer(){const e=new zn,t=new We(new Go(.22,.5,4),new dn({color:16739229,emissive:16739229,emissiveIntensity:.45,roughness:.4}));return t.rotation.x=Math.PI,t.rotation.y=Math.PI/4,e.add(t),e}_makeTextSprite(e,t="#ffffff",n=256,i="bold 64px Arial"){const s=document.createElement("canvas");s.width=n,s.height=n;const o=s.getContext("2d");o.clearRect(0,0,n,n),o.font=i,o.textAlign="center",o.textBaseline="alphabetic",o.fillStyle=t;const l=String(e).split(`
`),h=Math.round(n*.24),u=h*l.length;let f=n*.5-u*.5+h*.78;for(const m of l)o.fillText(m,n/2,f),f+=h;const a=new vs(s),c=new Uc({map:a,transparent:!0}),d=new x_(c);return d.scale.set(.8,.8,.8),d}_spinWheel(e,t=2e3){return new Promise(n=>{const i=performance.now();let s=i,o,l=!1;const h=u=>{if(this._sequenceCancelled){l=!0,this._sequenceRafs.delete(o),n();return}if(l)return;const f=Math.min((u-i)/t,1),a=Math.min((u-s)/1e3,.033);s=u;const c=Tt.lerp(12,.6,f);e.rotation.y+=c*a,f<1?(o=requestAnimationFrame(h),this._sequenceRafs.add(o)):(l=!0,this._sequenceRafs.delete(o),n())};o=requestAnimationFrame(h),this._sequenceRafs.add(o),setTimeout(()=>{l||(l=!0,cancelAnimationFrame(o),this._sequenceRafs.delete(o),n())},t+1500)})}_getWedgeUnderPointer(e,t){const n=Math.PI*2,i=n/t,s=Math.PI/2;let o=0,l=1/0;for(let h=0;h<t;h++){const u=((-((h+.5)*i)-e)%n+n)%n;let f=Math.abs(u-s);f>Math.PI&&(f=n-f),f<l&&(l=f,o=h)}return o}_animateBallToY(e,t=900){return new Promise(n=>{const i=this.ball.body.position.y,s=performance.now();let o,l=!1;const h=u=>{if(this._sequenceCancelled){l=!0,this._sequenceRafs.delete(o),n();return}if(l)return;const f=Math.min((u-s)/t,1),a=1-Math.pow(1-f,3),c=Tt.lerp(i,e,a);this.ball.body.position.set(0,c,0),this.ball.body.velocity.set(0,0,0),this.ball.mesh.position.set(0,c,0),f<1?(o=requestAnimationFrame(h),this._sequenceRafs.add(o)):(l=!0,this._sequenceRafs.delete(o),n())};o=requestAnimationFrame(h),this._sequenceRafs.add(o),setTimeout(()=>{l||(l=!0,cancelAnimationFrame(o),this._sequenceRafs.delete(o),this.ball.body.position.set(0,e,0),this.ball.body.velocity.set(0,0,0),this.ball.mesh.position.set(0,e,0),n())},t+1500)})}_createCup(){const e=new zn,t=new We(new ci(.55,.92,2.2,24,1,!0),new dn({color:16739229,side:en,roughness:.4,metalness:.18,emissive:12862825,emissiveIntensity:.18}));e.add(t);const n=this._makeTextSprite(`${this.level}
/${this.totalLevels}`,"#ffffff",256,'bold 58px "Bricolage Grotesque", Arial');return n.position.set(0,.2,.95),e.add(n),e}_cancelCompletionSequence(){this._sequenceCancelled=!0;for(const e of this._sequenceRafs)cancelAnimationFrame(e);this._sequenceRafs.clear(),this._clearCompletionSequence()}_clearCompletionSequence(){var n;const e=this.tower.scene,t=i=>{var s;i&&((s=i.map)!=null&&s.dispose&&i.map.dispose(),i.dispose&&i.dispose())};for(const i of this._sequenceMeshes)i!=null&&i.parent&&i.parent.remove(i),(n=i==null?void 0:i.traverse)==null||n.call(i,s=>{var o;(o=s.geometry)!=null&&o.dispose&&s.geometry.dispose(),Array.isArray(s.material)?s.material.forEach(t):t(s.material)});this._sequenceMeshes=[],e&&(this.ball.mesh.position.x=0,this.ball.mesh.position.z=0)}};Jo(yr,"instance",null);let ys=yr;const or=Object.freeze(Object.defineProperty({__proto__:null,GameManager:ys,GameState:nt,default:ys,getLevelConfig:vr},Symbol.toStringTag,{value:"Module"})),Yt=1500;function Iv(){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.45,"rgba(255,255,255,0.5)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);const i=new vs(e);return i.minFilter=bt,i.magFilter=bt,i}class Dv{constructor(e){this.scene=e,this.positions=new Float32Array(Yt*3),this.colors=new Float32Array(Yt*3),this.velocities=new Float32Array(Yt*3),this.life=new Float32Array(Yt),this.active=new Uint8Array(Yt),this._freeStack=new Int32Array(Yt),this._freeStackTop=Yt;for(let t=0;t<Yt;t+=1)this._freeStack[t]=Yt-1-t;this.geometry=new Ut,this.positionAttr=new Vt(this.positions,3),this.colorAttr=new Vt(this.colors,3),this.geometry.setAttribute("position",this.positionAttr),this.geometry.setAttribute("color",this.colorAttr),this.geometry.setDrawRange(0,Yt),this._softTexture=Iv(),this.material=new Oc({size:.18,map:this._softTexture,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,sizeAttenuation:!0,blending:lr}),this.points=new y_(this.geometry,this.material),this.scene.add(this.points)}_findFreeIndex(){return this._freeStackTop<=0?-1:(this._freeStackTop-=1,this._freeStack[this._freeStackTop])}_releaseIndex(e){this._freeStackTop>=Yt||(this._freeStack[this._freeStackTop]=e,this._freeStackTop+=1)}burst(e,t,n=20,i=!1){const s=new ye(t),o=i?1.9:.85,l=i?8:3.6,h=i?4.5:2.2;for(let u=0;u<n;u+=1){const f=this._findFreeIndex();if(f===-1)break;this.active[f]=1,this.life[f]=i?.9+Math.random()*.35:.45+Math.random()*.3;const a=f*3;this.positions[a]=e.x+(Math.random()-.5)*.18,this.positions[a+1]=e.y+.05,this.positions[a+2]=e.z+(Math.random()-.5)*.18;const c=Math.random()*Math.PI*2,d=Math.acos(2*Math.random()-1),m=Math.sin(d)*Math.cos(c),g=Math.abs(Math.cos(d)),_=Math.sin(d)*Math.sin(c),p=l+Math.random()*(i?4.2:2.4);this.velocities[a]=m*p*o,this.velocities[a+1]=g*p+h,this.velocities[a+2]=_*p*o,this.colors[a]=s.r,this.colors[a+1]=s.g,this.colors[a+2]=s.b}this.positionAttr.needsUpdate=!0,this.colorAttr.needsUpdate=!0}update(e){for(let n=0;n<Yt;n+=1){if(!this.active[n])continue;this.life[n]-=e;const i=n*3;if(this.life[n]<=0){this.active[n]=0,this.positions[i+1]=-9999,this._releaseIndex(n);continue}this.velocities[i]*=.985,this.velocities[i+1]=this.velocities[i+1]*.985-13.5*e,this.velocities[i+2]*=.985,this.positions[i]+=this.velocities[i]*e,this.positions[i+1]+=this.velocities[i+1]*e,this.positions[i+2]+=this.velocities[i+2]*e}this.positionAttr.needsUpdate=!0}dispose(){this.scene.remove(this.points),this.geometry.dispose(),this.material.dispose()}}class Fv{constructor(e){this.uiLayer=e,this.root=e,this._injectStyles(),this.root.innerHTML=`
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
        -webkit-text-stroke:3px #2A2D34;
        paint-order:stroke fill;
        text-shadow:0 4px 10px rgba(0,0,0,0.30), 0 0 2px rgba(0,0,0,0.55);
        transition:transform 0.12s ease-out;
      }

      .sbp-landing-hint{display:none;}
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
        .sbp-score-value{font-size:clamp(34px,8vw,64px); -webkit-text-stroke:2.5px #2A2D34;}
      }
    `,document.head.appendChild(e)}showPlayingUI(e,t,n){this._lvLeft.textContent=t,this._lvRight.textContent=t+1,this._bar.style.width="0%",this._score.textContent=e,this.updateCombo(0,1,0),this.setBreakMode(!1),this._landingHint&&(this._landingHint.style.opacity="0",this._landingHint.style.transform="translateX(-50%) scale(0.92)",this._landingHint.classList.remove("is-soft","is-hard")),this._overlay.innerHTML="",this._overlay.style.background="transparent",this._overlay.style.pointerEvents="none",this._overlay.classList.remove("show")}showLandingHint(e){if(!this._landingHint)return;const t=e==="soft";this._landingHint.textContent=t?"SAFE LANDING":"DANGER",this._landingHint.classList.toggle("is-soft",t),this._landingHint.classList.toggle("is-hard",!t),this._landingHint.style.opacity="1",this._landingHint.style.transform="translateX(-50%) scale(1)",this._landingHintTimer&&clearTimeout(this._landingHintTimer),this._landingHintTimer=setTimeout(()=>{this._landingHint.style.opacity="0",this._landingHint.style.transform="translateX(-50%) scale(0.94)"},900)}setBreakMode(e){this._breakMode&&this._breakMode.classList.toggle("is-active",!!e)}setControlsVisible(e){const t=document.getElementById("sbp-controls");if(!t)return;const n=!!e;this._lastControlsVisible!==n&&(this._lastControlsVisible=n,t.style.opacity=n?"1":"0",t.style.pointerEvents=n?"auto":"none",t.style.transform=n?"translateY(0)":"translateY(-6px)")}setMuteState(e){this._muteBtn&&this._muteBtn.classList.toggle("is-on",!!e)}updateCombo(e,t=1,n=0){if(!this._comboWrap||!this._comboValue)return;const i=Math.max(0,e|0),s=Math.max(1,t|0),o=i>1,l=s>=4?"gold":s>=3?"amber":s>=2?"pink":"idle";this._comboWrap.dataset.tier=l,l!==this._lastTier&&(this._comboWrap.classList.remove("sbp-bloom"),this._comboWrap.offsetWidth,this._comboWrap.classList.add("sbp-bloom")),this._lastTier=l,this._comboValue.textContent=`x${s}`,this._comboValue.style.transform=o?"scale(1.08)":"scale(1)",this._scoreWrap&&this._scoreWrap.classList.toggle("is-dim",o),this._comboTimer&&clearTimeout(this._comboTimer),this._comboTimer=setTimeout(()=>{this._comboValue.style.transform="scale(1)"},140),n>0&&this._comboToast&&(this._comboToast.textContent=`+${n}`,this._comboToast.style.opacity="1",this._comboToast.style.transform="translate(-50%,-96%) scale(1)",this._comboToastTimer&&clearTimeout(this._comboToastTimer),this._comboToastTimer=setTimeout(()=>{this._comboToast.style.opacity="0",this._comboToast.style.transform="translate(-50%,-82%) scale(0.92)"},340))}updateProgress(e,t,n){const i=t>0?e/t*100:0;this._bar.style.width=i+"%",this._score.textContent=n,this._score.style.transform="scale(1.08)",setTimeout(()=>{this._score.style.transform="scale(1)"},120)}_overlayShow(){this._overlay.style.pointerEvents="auto",this._overlay.classList.add("show")}showGameOver(e){this._overlayShow(),this._overlay.style.background="rgba(255,107,157,0.18)",this._overlay.innerHTML=`
      <div class="sbp-card">
        <div class="sbp-title" style="font-size:38px;">Level Failed</div>
        <div style="margin-top:10px;font-size:14px;letter-spacing:2.5px;color:#888;">SCORE</div>
        <div style="font-size:54px;font-weight:900;line-height:1;margin-top:4px;color:#3A2C3A;">${e}</div>
        <button id="sbp-retry-btn" class="sbp-primary-btn">Try Again</button>
      </div>`;const t=this._overlay.querySelector("#sbp-retry-btn");t==null||t.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("game:restart"))})}showLevelComplete(e,t,n,i=1,s={}){this._overlayShow(),this._overlay.style.background="rgba(255,107,157,0.16)";const o=Math.max(0,s.broken|0),l=Math.max(0,s.maxCombo|0),h=Math.max(0,s.hardHits|0),u=Math.max(0,(s.ms||0)/1e3).toFixed(1);this._overlay.innerHTML=`
      <div class="sbp-card">
        <div class="sbp-title" style="font-size:42px;">Level Complete</div>
        <div style="margin-top:6px;font-size:18px;font-weight:800;color:#FF6B9D;letter-spacing:1px;">x${i} BONUS</div>
        <div style="margin-top:10px;font-size:14px;letter-spacing:2.5px;color:#888;">SCORE</div>
        <div style="font-size:48px;font-weight:900;line-height:1;color:#3A2C3A;">${e}</div>
        <div class="sbp-stats">
          <div class="sbp-stat-row"><span>Broken</span><span>${o}</span></div>
          <div class="sbp-stat-row"><span>Best Combo</span><span>x${l}</span></div>
          <div class="sbp-stat-row"><span>Time</span><span>${u}s</span></div>
          <div class="sbp-stat-row"><span>Mistakes</span><span>${h}</span></div>
        </div>
        <div style="margin-top:16px;font-size:18px;font-weight:800;color:#3A2C3A;">${t}/${n}</div>
        <div class="sbp-tap-pulse">TAP TO CONTINUE</div>
      </div>`;const f=()=>{window.dispatchEvent(new CustomEvent("game:next")),this._overlay.removeEventListener("pointerdown",f)};this._overlay.addEventListener("pointerdown",f)}showFinalVictory(e,t){this._overlayShow(),this._overlay.style.background="linear-gradient(180deg, rgba(255,196,214,0.55), rgba(254,194,96,0.4))",this._overlay.innerHTML=`
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
    `,this.root.appendChild(e),requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.style.opacity="0"})}),setTimeout(()=>e.remove(),500)}}var cs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xr={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(r){(function(){var e=function(){this.init()};e.prototype={init:function(){var a=this||t;return a._counter=1e3,a._html5AudioPool=[],a.html5PoolSize=10,a._codecs={},a._howls=[],a._muted=!1,a._volume=1,a._canPlayEvent="canplaythrough",a._navigator=typeof window<"u"&&window.navigator?window.navigator:null,a.masterGain=null,a.noAudio=!1,a.usingWebAudio=!0,a.autoSuspend=!0,a.ctx=null,a.autoUnlock=!0,a._setup(),a},volume:function(a){var c=this||t;if(a=parseFloat(a),c.ctx||f(),typeof a<"u"&&a>=0&&a<=1){if(c._volume=a,c._muted)return c;c.usingWebAudio&&c.masterGain.gain.setValueAtTime(a,t.ctx.currentTime);for(var d=0;d<c._howls.length;d++)if(!c._howls[d]._webAudio)for(var m=c._howls[d]._getSoundIds(),g=0;g<m.length;g++){var _=c._howls[d]._soundById(m[g]);_&&_._node&&(_._node.volume=_._volume*a)}return c}return c._volume},mute:function(a){var c=this||t;c.ctx||f(),c._muted=a,c.usingWebAudio&&c.masterGain.gain.setValueAtTime(a?0:c._volume,t.ctx.currentTime);for(var d=0;d<c._howls.length;d++)if(!c._howls[d]._webAudio)for(var m=c._howls[d]._getSoundIds(),g=0;g<m.length;g++){var _=c._howls[d]._soundById(m[g]);_&&_._node&&(_._node.muted=a?!0:_._muted)}return c},stop:function(){for(var a=this||t,c=0;c<a._howls.length;c++)a._howls[c].stop();return a},unload:function(){for(var a=this||t,c=a._howls.length-1;c>=0;c--)a._howls[c].unload();return a.usingWebAudio&&a.ctx&&typeof a.ctx.close<"u"&&(a.ctx.close(),a.ctx=null,f()),a},codecs:function(a){return(this||t)._codecs[a.replace(/^x-/,"")]},_setup:function(){var a=this||t;if(a.state=a.ctx&&a.ctx.state||"suspended",a._autoSuspend(),!a.usingWebAudio)if(typeof Audio<"u")try{var c=new Audio;typeof c.oncanplaythrough>"u"&&(a._canPlayEvent="canplay")}catch{a.noAudio=!0}else a.noAudio=!0;try{var c=new Audio;c.muted&&(a.noAudio=!0)}catch{}return a.noAudio||a._setupCodecs(),a},_setupCodecs:function(){var a=this||t,c=null;try{c=typeof Audio<"u"?new Audio:null}catch{return a}if(!c||typeof c.canPlayType!="function")return a;var d=c.canPlayType("audio/mpeg;").replace(/^no$/,""),m=a._navigator?a._navigator.userAgent:"",g=m.match(/OPR\/(\d+)/g),_=g&&parseInt(g[0].split("/")[1],10)<33,p=m.indexOf("Safari")!==-1&&m.indexOf("Chrome")===-1,v=m.match(/Version\/(.*?) /),x=p&&v&&parseInt(v[1],10)<15;return a._codecs={mp3:!!(!_&&(d||c.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!d,opus:!!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(c.canPlayType('audio/wav; codecs="1"')||c.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!c.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!c.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(c.canPlayType("audio/x-m4a;")||c.canPlayType("audio/m4a;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(c.canPlayType("audio/x-m4b;")||c.canPlayType("audio/m4b;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(c.canPlayType("audio/x-mp4;")||c.canPlayType("audio/mp4;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!x&&c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!x&&c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!c.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(c.canPlayType("audio/x-flac;")||c.canPlayType("audio/flac;")).replace(/^no$/,"")},a},_unlockAudio:function(){var a=this||t;if(!(a._audioUnlocked||!a.ctx)){a._audioUnlocked=!1,a.autoUnlock=!1,!a._mobileUnloaded&&a.ctx.sampleRate!==44100&&(a._mobileUnloaded=!0,a.unload()),a._scratchBuffer=a.ctx.createBuffer(1,1,22050);var c=function(d){for(;a._html5AudioPool.length<a.html5PoolSize;)try{var m=new Audio;m._unlocked=!0,a._releaseHtml5Audio(m)}catch{a.noAudio=!0;break}for(var g=0;g<a._howls.length;g++)if(!a._howls[g]._webAudio)for(var _=a._howls[g]._getSoundIds(),p=0;p<_.length;p++){var v=a._howls[g]._soundById(_[p]);v&&v._node&&!v._node._unlocked&&(v._node._unlocked=!0,v._node.load())}a._autoResume();var x=a.ctx.createBufferSource();x.buffer=a._scratchBuffer,x.connect(a.ctx.destination),typeof x.start>"u"?x.noteOn(0):x.start(0),typeof a.ctx.resume=="function"&&a.ctx.resume(),x.onended=function(){x.disconnect(0),a._audioUnlocked=!0,document.removeEventListener("touchstart",c,!0),document.removeEventListener("touchend",c,!0),document.removeEventListener("click",c,!0),document.removeEventListener("keydown",c,!0);for(var b=0;b<a._howls.length;b++)a._howls[b]._emit("unlock")}};return document.addEventListener("touchstart",c,!0),document.addEventListener("touchend",c,!0),document.addEventListener("click",c,!0),document.addEventListener("keydown",c,!0),a}},_obtainHtml5Audio:function(){var a=this||t;if(a._html5AudioPool.length)return a._html5AudioPool.pop();var c=new Audio().play();return c&&typeof Promise<"u"&&(c instanceof Promise||typeof c.then=="function")&&c.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(a){var c=this||t;return a._unlocked&&c._html5AudioPool.push(a),c},_autoSuspend:function(){var a=this;if(!(!a.autoSuspend||!a.ctx||typeof a.ctx.suspend>"u"||!t.usingWebAudio)){for(var c=0;c<a._howls.length;c++)if(a._howls[c]._webAudio){for(var d=0;d<a._howls[c]._sounds.length;d++)if(!a._howls[c]._sounds[d]._paused)return a}return a._suspendTimer&&clearTimeout(a._suspendTimer),a._suspendTimer=setTimeout(function(){if(a.autoSuspend){a._suspendTimer=null,a.state="suspending";var m=function(){a.state="suspended",a._resumeAfterSuspend&&(delete a._resumeAfterSuspend,a._autoResume())};a.ctx.suspend().then(m,m)}},3e4),a}},_autoResume:function(){var a=this;if(!(!a.ctx||typeof a.ctx.resume>"u"||!t.usingWebAudio))return a.state==="running"&&a.ctx.state!=="interrupted"&&a._suspendTimer?(clearTimeout(a._suspendTimer),a._suspendTimer=null):a.state==="suspended"||a.state==="running"&&a.ctx.state==="interrupted"?(a.ctx.resume().then(function(){a.state="running";for(var c=0;c<a._howls.length;c++)a._howls[c]._emit("resume")}),a._suspendTimer&&(clearTimeout(a._suspendTimer),a._suspendTimer=null)):a.state==="suspending"&&(a._resumeAfterSuspend=!0),a}};var t=new e,n=function(a){var c=this;if(!a.src||a.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}c.init(a)};n.prototype={init:function(a){var c=this;return t.ctx||f(),c._autoplay=a.autoplay||!1,c._format=typeof a.format!="string"?a.format:[a.format],c._html5=a.html5||!1,c._muted=a.mute||!1,c._loop=a.loop||!1,c._pool=a.pool||5,c._preload=typeof a.preload=="boolean"||a.preload==="metadata"?a.preload:!0,c._rate=a.rate||1,c._sprite=a.sprite||{},c._src=typeof a.src!="string"?a.src:[a.src],c._volume=a.volume!==void 0?a.volume:1,c._xhr={method:a.xhr&&a.xhr.method?a.xhr.method:"GET",headers:a.xhr&&a.xhr.headers?a.xhr.headers:null,withCredentials:a.xhr&&a.xhr.withCredentials?a.xhr.withCredentials:!1},c._duration=0,c._state="unloaded",c._sounds=[],c._endTimers={},c._queue=[],c._playLock=!1,c._onend=a.onend?[{fn:a.onend}]:[],c._onfade=a.onfade?[{fn:a.onfade}]:[],c._onload=a.onload?[{fn:a.onload}]:[],c._onloaderror=a.onloaderror?[{fn:a.onloaderror}]:[],c._onplayerror=a.onplayerror?[{fn:a.onplayerror}]:[],c._onpause=a.onpause?[{fn:a.onpause}]:[],c._onplay=a.onplay?[{fn:a.onplay}]:[],c._onstop=a.onstop?[{fn:a.onstop}]:[],c._onmute=a.onmute?[{fn:a.onmute}]:[],c._onvolume=a.onvolume?[{fn:a.onvolume}]:[],c._onrate=a.onrate?[{fn:a.onrate}]:[],c._onseek=a.onseek?[{fn:a.onseek}]:[],c._onunlock=a.onunlock?[{fn:a.onunlock}]:[],c._onresume=[],c._webAudio=t.usingWebAudio&&!c._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(c),c._autoplay&&c._queue.push({event:"play",action:function(){c.play()}}),c._preload&&c._preload!=="none"&&c.load(),c},load:function(){var a=this,c=null;if(t.noAudio){a._emit("loaderror",null,"No audio support.");return}typeof a._src=="string"&&(a._src=[a._src]);for(var d=0;d<a._src.length;d++){var m,g;if(a._format&&a._format[d])m=a._format[d];else{if(g=a._src[d],typeof g!="string"){a._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}m=/^data:audio\/([^;,]+);/i.exec(g),m||(m=/\.([^.]+)$/.exec(g.split("?",1)[0])),m&&(m=m[1].toLowerCase())}if(m||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),m&&t.codecs(m)){c=a._src[d];break}}if(!c){a._emit("loaderror",null,"No codec support for selected audio sources.");return}return a._src=c,a._state="loading",window.location.protocol==="https:"&&c.slice(0,5)==="http:"&&(a._html5=!0,a._webAudio=!1),new i(a),a._webAudio&&o(a),a},play:function(a,c){var d=this,m=null;if(typeof a=="number")m=a,a=null;else{if(typeof a=="string"&&d._state==="loaded"&&!d._sprite[a])return null;if(typeof a>"u"&&(a="__default",!d._playLock)){for(var g=0,_=0;_<d._sounds.length;_++)d._sounds[_]._paused&&!d._sounds[_]._ended&&(g++,m=d._sounds[_]._id);g===1?a=null:m=null}}var p=m?d._soundById(m):d._inactiveSound();if(!p)return null;if(m&&!a&&(a=p._sprite||"__default"),d._state!=="loaded"){p._sprite=a,p._ended=!1;var v=p._id;return d._queue.push({event:"play",action:function(){d.play(v)}}),v}if(m&&!p._paused)return c||d._loadQueue("play"),p._id;d._webAudio&&t._autoResume();var x=Math.max(0,p._seek>0?p._seek:d._sprite[a][0]/1e3),b=Math.max(0,(d._sprite[a][0]+d._sprite[a][1])/1e3-x),A=b*1e3/Math.abs(p._rate),E=d._sprite[a][0]/1e3,C=(d._sprite[a][0]+d._sprite[a][1])/1e3;p._sprite=a,p._ended=!1;var B=function(){p._paused=!1,p._seek=x,p._start=E,p._stop=C,p._loop=!!(p._loop||d._sprite[a][2])};if(x>=C){d._ended(p);return}var M=p._node;if(d._webAudio){var w=function(){d._playLock=!1,B(),d._refreshBuffer(p);var P=p._muted||d._muted?0:p._volume;M.gain.setValueAtTime(P,t.ctx.currentTime),p._playStart=t.ctx.currentTime,typeof M.bufferSource.start>"u"?p._loop?M.bufferSource.noteGrainOn(0,x,86400):M.bufferSource.noteGrainOn(0,x,b):p._loop?M.bufferSource.start(0,x,86400):M.bufferSource.start(0,x,b),A!==1/0&&(d._endTimers[p._id]=setTimeout(d._ended.bind(d,p),A)),c||setTimeout(function(){d._emit("play",p._id),d._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?w():(d._playLock=!0,d.once("resume",w),d._clearTimer(p._id))}else{var F=function(){M.currentTime=x,M.muted=p._muted||d._muted||t._muted||M.muted,M.volume=p._volume*t.volume(),M.playbackRate=p._rate;try{var P=M.play();if(P&&typeof Promise<"u"&&(P instanceof Promise||typeof P.then=="function")?(d._playLock=!0,B(),P.then(function(){d._playLock=!1,M._unlocked=!0,c?d._loadQueue():d._emit("play",p._id)}).catch(function(){d._playLock=!1,d._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),p._ended=!0,p._paused=!0})):c||(d._playLock=!1,B(),d._emit("play",p._id)),M.playbackRate=p._rate,M.paused){d._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}a!=="__default"||p._loop?d._endTimers[p._id]=setTimeout(d._ended.bind(d,p),A):(d._endTimers[p._id]=function(){d._ended(p),M.removeEventListener("ended",d._endTimers[p._id],!1)},M.addEventListener("ended",d._endTimers[p._id],!1))}catch(L){d._emit("playerror",p._id,L)}};M.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(M.src=d._src,M.load());var z=window&&window.ejecta||!M.readyState&&t._navigator.isCocoonJS;if(M.readyState>=3||z)F();else{d._playLock=!0,d._state="loading";var N=function(){d._state="loaded",F(),M.removeEventListener(t._canPlayEvent,N,!1)};M.addEventListener(t._canPlayEvent,N,!1),d._clearTimer(p._id)}}return p._id},pause:function(a){var c=this;if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"pause",action:function(){c.pause(a)}}),c;for(var d=c._getSoundIds(a),m=0;m<d.length;m++){c._clearTimer(d[m]);var g=c._soundById(d[m]);if(g&&!g._paused&&(g._seek=c.seek(d[m]),g._rateSeek=0,g._paused=!0,c._stopFade(d[m]),g._node))if(c._webAudio){if(!g._node.bufferSource)continue;typeof g._node.bufferSource.stop>"u"?g._node.bufferSource.noteOff(0):g._node.bufferSource.stop(0),c._cleanBuffer(g._node)}else(!isNaN(g._node.duration)||g._node.duration===1/0)&&g._node.pause();arguments[1]||c._emit("pause",g?g._id:null)}return c},stop:function(a,c){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"stop",action:function(){d.stop(a)}}),d;for(var m=d._getSoundIds(a),g=0;g<m.length;g++){d._clearTimer(m[g]);var _=d._soundById(m[g]);_&&(_._seek=_._start||0,_._rateSeek=0,_._paused=!0,_._ended=!0,d._stopFade(m[g]),_._node&&(d._webAudio?_._node.bufferSource&&(typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),d._cleanBuffer(_._node)):(!isNaN(_._node.duration)||_._node.duration===1/0)&&(_._node.currentTime=_._start||0,_._node.pause(),_._node.duration===1/0&&d._clearSound(_._node))),c||d._emit("stop",_._id))}return d},mute:function(a,c){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"mute",action:function(){d.mute(a,c)}}),d;if(typeof c>"u")if(typeof a=="boolean")d._muted=a;else return d._muted;for(var m=d._getSoundIds(c),g=0;g<m.length;g++){var _=d._soundById(m[g]);_&&(_._muted=a,_._interval&&d._stopFade(_._id),d._webAudio&&_._node?_._node.gain.setValueAtTime(a?0:_._volume,t.ctx.currentTime):_._node&&(_._node.muted=t._muted?!0:a),d._emit("mute",_._id))}return d},volume:function(){var a=this,c=arguments,d,m;if(c.length===0)return a._volume;if(c.length===1||c.length===2&&typeof c[1]>"u"){var g=a._getSoundIds(),_=g.indexOf(c[0]);_>=0?m=parseInt(c[0],10):d=parseFloat(c[0])}else c.length>=2&&(d=parseFloat(c[0]),m=parseInt(c[1],10));var p;if(typeof d<"u"&&d>=0&&d<=1){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"volume",action:function(){a.volume.apply(a,c)}}),a;typeof m>"u"&&(a._volume=d),m=a._getSoundIds(m);for(var v=0;v<m.length;v++)p=a._soundById(m[v]),p&&(p._volume=d,c[2]||a._stopFade(m[v]),a._webAudio&&p._node&&!p._muted?p._node.gain.setValueAtTime(d,t.ctx.currentTime):p._node&&!p._muted&&(p._node.volume=d*t.volume()),a._emit("volume",p._id))}else return p=m?a._soundById(m):a._sounds[0],p?p._volume:0;return a},fade:function(a,c,d,m){var g=this;if(g._state!=="loaded"||g._playLock)return g._queue.push({event:"fade",action:function(){g.fade(a,c,d,m)}}),g;a=Math.min(Math.max(0,parseFloat(a)),1),c=Math.min(Math.max(0,parseFloat(c)),1),d=parseFloat(d),g.volume(a,m);for(var _=g._getSoundIds(m),p=0;p<_.length;p++){var v=g._soundById(_[p]);if(v){if(m||g._stopFade(_[p]),g._webAudio&&!v._muted){var x=t.ctx.currentTime,b=x+d/1e3;v._volume=a,v._node.gain.setValueAtTime(a,x),v._node.gain.linearRampToValueAtTime(c,b)}g._startFadeInterval(v,a,c,d,_[p],typeof m>"u")}}return g},_startFadeInterval:function(a,c,d,m,g,_){var p=this,v=c,x=d-c,b=Math.abs(x/.01),A=Math.max(4,b>0?m/b:m),E=Date.now();a._fadeTo=d,a._interval=setInterval(function(){var C=(Date.now()-E)/m;E=Date.now(),v+=x*C,v=Math.round(v*100)/100,x<0?v=Math.max(d,v):v=Math.min(d,v),p._webAudio?a._volume=v:p.volume(v,a._id,!0),_&&(p._volume=v),(d<c&&v<=d||d>c&&v>=d)&&(clearInterval(a._interval),a._interval=null,a._fadeTo=null,p.volume(d,a._id),p._emit("fade",a._id))},A)},_stopFade:function(a){var c=this,d=c._soundById(a);return d&&d._interval&&(c._webAudio&&d._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(d._interval),d._interval=null,c.volume(d._fadeTo,a),d._fadeTo=null,c._emit("fade",a)),c},loop:function(){var a=this,c=arguments,d,m,g;if(c.length===0)return a._loop;if(c.length===1)if(typeof c[0]=="boolean")d=c[0],a._loop=d;else return g=a._soundById(parseInt(c[0],10)),g?g._loop:!1;else c.length===2&&(d=c[0],m=parseInt(c[1],10));for(var _=a._getSoundIds(m),p=0;p<_.length;p++)g=a._soundById(_[p]),g&&(g._loop=d,a._webAudio&&g._node&&g._node.bufferSource&&(g._node.bufferSource.loop=d,d&&(g._node.bufferSource.loopStart=g._start||0,g._node.bufferSource.loopEnd=g._stop,a.playing(_[p])&&(a.pause(_[p],!0),a.play(_[p],!0)))));return a},rate:function(){var a=this,c=arguments,d,m;if(c.length===0)m=a._sounds[0]._id;else if(c.length===1){var g=a._getSoundIds(),_=g.indexOf(c[0]);_>=0?m=parseInt(c[0],10):d=parseFloat(c[0])}else c.length===2&&(d=parseFloat(c[0]),m=parseInt(c[1],10));var p;if(typeof d=="number"){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"rate",action:function(){a.rate.apply(a,c)}}),a;typeof m>"u"&&(a._rate=d),m=a._getSoundIds(m);for(var v=0;v<m.length;v++)if(p=a._soundById(m[v]),p){a.playing(m[v])&&(p._rateSeek=a.seek(m[v]),p._playStart=a._webAudio?t.ctx.currentTime:p._playStart),p._rate=d,a._webAudio&&p._node&&p._node.bufferSource?p._node.bufferSource.playbackRate.setValueAtTime(d,t.ctx.currentTime):p._node&&(p._node.playbackRate=d);var x=a.seek(m[v]),b=(a._sprite[p._sprite][0]+a._sprite[p._sprite][1])/1e3-x,A=b*1e3/Math.abs(p._rate);(a._endTimers[m[v]]||!p._paused)&&(a._clearTimer(m[v]),a._endTimers[m[v]]=setTimeout(a._ended.bind(a,p),A)),a._emit("rate",p._id)}}else return p=a._soundById(m),p?p._rate:a._rate;return a},seek:function(){var a=this,c=arguments,d,m;if(c.length===0)a._sounds.length&&(m=a._sounds[0]._id);else if(c.length===1){var g=a._getSoundIds(),_=g.indexOf(c[0]);_>=0?m=parseInt(c[0],10):a._sounds.length&&(m=a._sounds[0]._id,d=parseFloat(c[0]))}else c.length===2&&(d=parseFloat(c[0]),m=parseInt(c[1],10));if(typeof m>"u")return 0;if(typeof d=="number"&&(a._state!=="loaded"||a._playLock))return a._queue.push({event:"seek",action:function(){a.seek.apply(a,c)}}),a;var p=a._soundById(m);if(p)if(typeof d=="number"&&d>=0){var v=a.playing(m);v&&a.pause(m,!0),p._seek=d,p._ended=!1,a._clearTimer(m),!a._webAudio&&p._node&&!isNaN(p._node.duration)&&(p._node.currentTime=d);var x=function(){v&&a.play(m,!0),a._emit("seek",m)};if(v&&!a._webAudio){var b=function(){a._playLock?setTimeout(b,0):x()};setTimeout(b,0)}else x()}else if(a._webAudio){var A=a.playing(m)?t.ctx.currentTime-p._playStart:0,E=p._rateSeek?p._rateSeek-p._seek:0;return p._seek+(E+A*Math.abs(p._rate))}else return p._node.currentTime;return a},playing:function(a){var c=this;if(typeof a=="number"){var d=c._soundById(a);return d?!d._paused:!1}for(var m=0;m<c._sounds.length;m++)if(!c._sounds[m]._paused)return!0;return!1},duration:function(a){var c=this,d=c._duration,m=c._soundById(a);return m&&(d=c._sprite[m._sprite][1]/1e3),d},state:function(){return this._state},unload:function(){for(var a=this,c=a._sounds,d=0;d<c.length;d++)c[d]._paused||a.stop(c[d]._id),a._webAudio||(a._clearSound(c[d]._node),c[d]._node.removeEventListener("error",c[d]._errorFn,!1),c[d]._node.removeEventListener(t._canPlayEvent,c[d]._loadFn,!1),c[d]._node.removeEventListener("ended",c[d]._endFn,!1),t._releaseHtml5Audio(c[d]._node)),delete c[d]._node,a._clearTimer(c[d]._id);var m=t._howls.indexOf(a);m>=0&&t._howls.splice(m,1);var g=!0;for(d=0;d<t._howls.length;d++)if(t._howls[d]._src===a._src||a._src.indexOf(t._howls[d]._src)>=0){g=!1;break}return s&&g&&delete s[a._src],t.noAudio=!1,a._state="unloaded",a._sounds=[],a=null,null},on:function(a,c,d,m){var g=this,_=g["_on"+a];return typeof c=="function"&&_.push(m?{id:d,fn:c,once:m}:{id:d,fn:c}),g},off:function(a,c,d){var m=this,g=m["_on"+a],_=0;if(typeof c=="number"&&(d=c,c=null),c||d)for(_=0;_<g.length;_++){var p=d===g[_].id;if(c===g[_].fn&&p||!c&&p){g.splice(_,1);break}}else if(a)m["_on"+a]=[];else{var v=Object.keys(m);for(_=0;_<v.length;_++)v[_].indexOf("_on")===0&&Array.isArray(m[v[_]])&&(m[v[_]]=[])}return m},once:function(a,c,d){var m=this;return m.on(a,c,d,1),m},_emit:function(a,c,d){for(var m=this,g=m["_on"+a],_=g.length-1;_>=0;_--)(!g[_].id||g[_].id===c||a==="load")&&(setTimeout((function(p){p.call(this,c,d)}).bind(m,g[_].fn),0),g[_].once&&m.off(a,g[_].fn,g[_].id));return m._loadQueue(a),m},_loadQueue:function(a){var c=this;if(c._queue.length>0){var d=c._queue[0];d.event===a&&(c._queue.shift(),c._loadQueue()),a||d.action()}return c},_ended:function(a){var c=this,d=a._sprite;if(!c._webAudio&&a._node&&!a._node.paused&&!a._node.ended&&a._node.currentTime<a._stop)return setTimeout(c._ended.bind(c,a),100),c;var m=!!(a._loop||c._sprite[d][2]);if(c._emit("end",a._id),!c._webAudio&&m&&c.stop(a._id,!0).play(a._id),c._webAudio&&m){c._emit("play",a._id),a._seek=a._start||0,a._rateSeek=0,a._playStart=t.ctx.currentTime;var g=(a._stop-a._start)*1e3/Math.abs(a._rate);c._endTimers[a._id]=setTimeout(c._ended.bind(c,a),g)}return c._webAudio&&!m&&(a._paused=!0,a._ended=!0,a._seek=a._start||0,a._rateSeek=0,c._clearTimer(a._id),c._cleanBuffer(a._node),t._autoSuspend()),!c._webAudio&&!m&&c.stop(a._id,!0),c},_clearTimer:function(a){var c=this;if(c._endTimers[a]){if(typeof c._endTimers[a]!="function")clearTimeout(c._endTimers[a]);else{var d=c._soundById(a);d&&d._node&&d._node.removeEventListener("ended",c._endTimers[a],!1)}delete c._endTimers[a]}return c},_soundById:function(a){for(var c=this,d=0;d<c._sounds.length;d++)if(a===c._sounds[d]._id)return c._sounds[d];return null},_inactiveSound:function(){var a=this;a._drain();for(var c=0;c<a._sounds.length;c++)if(a._sounds[c]._ended)return a._sounds[c].reset();return new i(a)},_drain:function(){var a=this,c=a._pool,d=0,m=0;if(!(a._sounds.length<c)){for(m=0;m<a._sounds.length;m++)a._sounds[m]._ended&&d++;for(m=a._sounds.length-1;m>=0;m--){if(d<=c)return;a._sounds[m]._ended&&(a._webAudio&&a._sounds[m]._node&&a._sounds[m]._node.disconnect(0),a._sounds.splice(m,1),d--)}}},_getSoundIds:function(a){var c=this;if(typeof a>"u"){for(var d=[],m=0;m<c._sounds.length;m++)d.push(c._sounds[m]._id);return d}else return[a]},_refreshBuffer:function(a){var c=this;return a._node.bufferSource=t.ctx.createBufferSource(),a._node.bufferSource.buffer=s[c._src],a._panner?a._node.bufferSource.connect(a._panner):a._node.bufferSource.connect(a._node),a._node.bufferSource.loop=a._loop,a._loop&&(a._node.bufferSource.loopStart=a._start||0,a._node.bufferSource.loopEnd=a._stop||0),a._node.bufferSource.playbackRate.setValueAtTime(a._rate,t.ctx.currentTime),c},_cleanBuffer:function(a){var c=this,d=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!a.bufferSource)return c;if(t._scratchBuffer&&a.bufferSource&&(a.bufferSource.onended=null,a.bufferSource.disconnect(0),d))try{a.bufferSource.buffer=t._scratchBuffer}catch{}return a.bufferSource=null,c},_clearSound:function(a){var c=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);c||(a.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var i=function(a){this._parent=a,this.init()};i.prototype={init:function(){var a=this,c=a._parent;return a._muted=c._muted,a._loop=c._loop,a._volume=c._volume,a._rate=c._rate,a._seek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,c._sounds.push(a),a.create(),a},create:function(){var a=this,c=a._parent,d=t._muted||a._muted||a._parent._muted?0:a._volume;return c._webAudio?(a._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),a._node.gain.setValueAtTime(d,t.ctx.currentTime),a._node.paused=!0,a._node.connect(t.masterGain)):t.noAudio||(a._node=t._obtainHtml5Audio(),a._errorFn=a._errorListener.bind(a),a._node.addEventListener("error",a._errorFn,!1),a._loadFn=a._loadListener.bind(a),a._node.addEventListener(t._canPlayEvent,a._loadFn,!1),a._endFn=a._endListener.bind(a),a._node.addEventListener("ended",a._endFn,!1),a._node.src=c._src,a._node.preload=c._preload===!0?"auto":c._preload,a._node.volume=d*t.volume(),a._node.load()),a},reset:function(){var a=this,c=a._parent;return a._muted=c._muted,a._loop=c._loop,a._volume=c._volume,a._rate=c._rate,a._seek=0,a._rateSeek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,a},_errorListener:function(){var a=this;a._parent._emit("loaderror",a._id,a._node.error?a._node.error.code:0),a._node.removeEventListener("error",a._errorFn,!1)},_loadListener:function(){var a=this,c=a._parent;c._duration=Math.ceil(a._node.duration*10)/10,Object.keys(c._sprite).length===0&&(c._sprite={__default:[0,c._duration*1e3]}),c._state!=="loaded"&&(c._state="loaded",c._emit("load"),c._loadQueue()),a._node.removeEventListener(t._canPlayEvent,a._loadFn,!1)},_endListener:function(){var a=this,c=a._parent;c._duration===1/0&&(c._duration=Math.ceil(a._node.duration*10)/10,c._sprite.__default[1]===1/0&&(c._sprite.__default[1]=c._duration*1e3),c._ended(a)),a._node.removeEventListener("ended",a._endFn,!1)}};var s={},o=function(a){var c=a._src;if(s[c]){a._duration=s[c].duration,u(a);return}if(/^data:[^;]+;base64,/.test(c)){for(var d=atob(c.split(",")[1]),m=new Uint8Array(d.length),g=0;g<d.length;++g)m[g]=d.charCodeAt(g);h(m.buffer,a)}else{var _=new XMLHttpRequest;_.open(a._xhr.method,c,!0),_.withCredentials=a._xhr.withCredentials,_.responseType="arraybuffer",a._xhr.headers&&Object.keys(a._xhr.headers).forEach(function(p){_.setRequestHeader(p,a._xhr.headers[p])}),_.onload=function(){var p=(_.status+"")[0];if(p!=="0"&&p!=="2"&&p!=="3"){a._emit("loaderror",null,"Failed loading audio file with status: "+_.status+".");return}h(_.response,a)},_.onerror=function(){a._webAudio&&(a._html5=!0,a._webAudio=!1,a._sounds=[],delete s[c],a.load())},l(_)}},l=function(a){try{a.send()}catch{a.onerror()}},h=function(a,c){var d=function(){c._emit("loaderror",null,"Decoding audio data failed.")},m=function(g){g&&c._sounds.length>0?(s[c._src]=g,u(c,g)):d()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(a).then(m).catch(d):t.ctx.decodeAudioData(a,m,d)},u=function(a,c){c&&!a._duration&&(a._duration=c.duration),Object.keys(a._sprite).length===0&&(a._sprite={__default:[0,a._duration*1e3]}),a._state!=="loaded"&&(a._state="loaded",a._emit("load"),a._loadQueue())},f=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var a=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),c=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=c?parseInt(c[1],10):null;if(a&&d&&d<9){var m=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!m&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};r.Howler=t,r.Howl=n,typeof cs<"u"?(cs.HowlerGlobal=e,cs.Howler=t,cs.Howl=n,cs.Sound=i):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=i)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var i=n._howls.length-1;i>=0;i--)n._howls[i].stereo(t);return n},HowlerGlobal.prototype.pos=function(t,n,i){var s=this;if(!s.ctx||!s.ctx.listener)return s;if(n=typeof n!="number"?s._pos[1]:n,i=typeof i!="number"?s._pos[2]:i,typeof t=="number")s._pos=[t,n,i],typeof s.ctx.listener.positionX<"u"?(s.ctx.listener.positionX.setTargetAtTime(s._pos[0],Howler.ctx.currentTime,.1),s.ctx.listener.positionY.setTargetAtTime(s._pos[1],Howler.ctx.currentTime,.1),s.ctx.listener.positionZ.setTargetAtTime(s._pos[2],Howler.ctx.currentTime,.1)):s.ctx.listener.setPosition(s._pos[0],s._pos[1],s._pos[2]);else return s._pos;return s},HowlerGlobal.prototype.orientation=function(t,n,i,s,o,l){var h=this;if(!h.ctx||!h.ctx.listener)return h;var u=h._orientation;if(n=typeof n!="number"?u[1]:n,i=typeof i!="number"?u[2]:i,s=typeof s!="number"?u[3]:s,o=typeof o!="number"?u[4]:o,l=typeof l!="number"?u[5]:l,typeof t=="number")h._orientation=[t,n,i,s,o,l],typeof h.ctx.listener.forwardX<"u"?(h.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),h.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),h.ctx.listener.forwardZ.setTargetAtTime(i,Howler.ctx.currentTime,.1),h.ctx.listener.upX.setTargetAtTime(s,Howler.ctx.currentTime,.1),h.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),h.ctx.listener.upZ.setTargetAtTime(l,Howler.ctx.currentTime,.1)):h.ctx.listener.setOrientation(t,n,i,s,o,l);else return u;return h},Howl.prototype.init=function(t){return function(n){var i=this;return i._orientation=n.orientation||[1,0,0],i._stereo=n.stereo||null,i._pos=n.pos||null,i._pannerAttr={coneInnerAngle:typeof n.coneInnerAngle<"u"?n.coneInnerAngle:360,coneOuterAngle:typeof n.coneOuterAngle<"u"?n.coneOuterAngle:360,coneOuterGain:typeof n.coneOuterGain<"u"?n.coneOuterGain:0,distanceModel:typeof n.distanceModel<"u"?n.distanceModel:"inverse",maxDistance:typeof n.maxDistance<"u"?n.maxDistance:1e4,panningModel:typeof n.panningModel<"u"?n.panningModel:"HRTF",refDistance:typeof n.refDistance<"u"?n.refDistance:1,rolloffFactor:typeof n.rolloffFactor<"u"?n.rolloffFactor:1},i._onstereo=n.onstereo?[{fn:n.onstereo}]:[],i._onpos=n.onpos?[{fn:n.onpos}]:[],i._onorientation=n.onorientation?[{fn:n.onorientation}]:[],t.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,n){var i=this;if(!i._webAudio)return i;if(i._state!=="loaded")return i._queue.push({event:"stereo",action:function(){i.stereo(t,n)}}),i;var s=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof n>"u")if(typeof t=="number")i._stereo=t,i._pos=[t,0,0];else return i._stereo;for(var o=i._getSoundIds(n),l=0;l<o.length;l++){var h=i._soundById(o[l]);if(h)if(typeof t=="number")h._stereo=t,h._pos=[t,0,0],h._node&&(h._pannerAttr.panningModel="equalpower",(!h._panner||!h._panner.pan)&&e(h,s),s==="spatial"?typeof h._panner.positionX<"u"?(h._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),h._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):h._panner.setPosition(t,0,0):h._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),i._emit("stereo",h._id);else return h._stereo}return i},Howl.prototype.pos=function(t,n,i,s){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(t,n,i,s)}}),o;if(n=typeof n!="number"?0:n,i=typeof i!="number"?-.5:i,typeof s>"u")if(typeof t=="number")o._pos=[t,n,i];else return o._pos;for(var l=o._getSoundIds(s),h=0;h<l.length;h++){var u=o._soundById(l[h]);if(u)if(typeof t=="number")u._pos=[t,n,i],u._node&&((!u._panner||u._panner.pan)&&e(u,"spatial"),typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(i,Howler.ctx.currentTime)):u._panner.setPosition(t,n,i)),o._emit("pos",u._id);else return u._pos}return o},Howl.prototype.orientation=function(t,n,i,s){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(t,n,i,s)}}),o;if(n=typeof n!="number"?o._orientation[1]:n,i=typeof i!="number"?o._orientation[2]:i,typeof s>"u")if(typeof t=="number")o._orientation=[t,n,i];else return o._orientation;for(var l=o._getSoundIds(s),h=0;h<l.length;h++){var u=o._soundById(l[h]);if(u)if(typeof t=="number")u._orientation=[t,n,i],u._node&&(u._panner||(u._pos||(u._pos=o._pos||[0,0,-.5]),e(u,"spatial")),typeof u._panner.orientationX<"u"?(u._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),u._panner.orientationZ.setValueAtTime(i,Howler.ctx.currentTime)):u._panner.setOrientation(t,n,i)),o._emit("orientation",u._id);else return u._orientation}return o},Howl.prototype.pannerAttr=function(){var t=this,n=arguments,i,s,o;if(!t._webAudio)return t;if(n.length===0)return t._pannerAttr;if(n.length===1)if(typeof n[0]=="object")i=n[0],typeof s>"u"&&(i.pannerAttr||(i.pannerAttr={coneInnerAngle:i.coneInnerAngle,coneOuterAngle:i.coneOuterAngle,coneOuterGain:i.coneOuterGain,distanceModel:i.distanceModel,maxDistance:i.maxDistance,refDistance:i.refDistance,rolloffFactor:i.rolloffFactor,panningModel:i.panningModel}),t._pannerAttr={coneInnerAngle:typeof i.pannerAttr.coneInnerAngle<"u"?i.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof i.pannerAttr.coneOuterAngle<"u"?i.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof i.pannerAttr.coneOuterGain<"u"?i.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof i.pannerAttr.distanceModel<"u"?i.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof i.pannerAttr.maxDistance<"u"?i.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof i.pannerAttr.refDistance<"u"?i.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof i.pannerAttr.rolloffFactor<"u"?i.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof i.pannerAttr.panningModel<"u"?i.pannerAttr.panningModel:t._panningModel});else return o=t._soundById(parseInt(n[0],10)),o?o._pannerAttr:t._pannerAttr;else n.length===2&&(i=n[0],s=parseInt(n[1],10));for(var l=t._getSoundIds(s),h=0;h<l.length;h++)if(o=t._soundById(l[h]),o){var u=o._pannerAttr;u={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:u.coneInnerAngle,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:u.coneOuterAngle,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:u.coneOuterGain,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:u.distanceModel,maxDistance:typeof i.maxDistance<"u"?i.maxDistance:u.maxDistance,refDistance:typeof i.refDistance<"u"?i.refDistance:u.refDistance,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:u.rolloffFactor,panningModel:typeof i.panningModel<"u"?i.panningModel:u.panningModel};var f=o._panner;f||(o._pos||(o._pos=t._pos||[0,0,-.5]),e(o,"spatial"),f=o._panner),f.coneInnerAngle=u.coneInnerAngle,f.coneOuterAngle=u.coneOuterAngle,f.coneOuterGain=u.coneOuterGain,f.distanceModel=u.distanceModel,f.maxDistance=u.maxDistance,f.refDistance=u.refDistance,f.rolloffFactor=u.rolloffFactor,f.panningModel=u.panningModel}return t},Sound.prototype.init=function(t){return function(){var n=this,i=n._parent;n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,t.call(this),n._stereo?i.stereo(n._stereo):n._pos&&i.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var n=this,i=n._parent;return n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,n._stereo?i.stereo(n._stereo):n._pos?i.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,i._refreshBuffer(n)),t.call(this)}}(Sound.prototype.reset);var e=function(t,n){n=n||"spatial",n==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()})(xr);xr.Howler.autoUnlock=!0;const Zl="stackball:muted";class Nv{constructor(){var n;this.sounds={},this._bgmStarted=!1,this._unlocked=!1;let e=!1;try{e=((n=window.localStorage)==null?void 0:n.getItem(Zl))==="1"}catch{}this._muted=e,this._ctx=null,this._masterGain=null,this._bgmGain=null,this._bgmNodes=[],this._bgmActive=!1,this._bgmDuckTimer=null,this._loadIfPresent("break","/sounds/break.mp3",{volume:.5}),this._loadIfPresent("bounce","/sounds/bounce.mp3",{volume:.45}),this._loadIfPresent("death","/sounds/death.mp3",{volume:.65}),this._loadIfPresent("win","/sounds/win.mp3",{volume:.55}),this._loadIfPresent("bgm","/sounds/bgm.mp3",{loop:!0,volume:.25}),this._unlockAudio=this._unlockAudio.bind(this);const t={once:!0,passive:!0};window.addEventListener("touchstart",this._unlockAudio,t),window.addEventListener("pointerdown",this._unlockAudio,t),window.addEventListener("keydown",this._unlockAudio,{once:!0})}async _loadIfPresent(e,t,n={}){this.sounds[e]=void 0;try{if(!(await fetch(t,{method:"HEAD"})).ok){this.sounds[e]=null;return}}catch{this.sounds[e]=null;return}this._loadSound(e,t,n)}_loadSound(e,t,n={}){try{const i=new xr.Howl({src:[t],preload:!0,onloaderror:()=>{this.sounds[e]=null},onplayerror:()=>{this.sounds[e]=null},...n});this.sounds[e]=i}catch{this.sounds[e]=null}}_ensureCtx(){if(this._ctx)return this._ctx;const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;try{this._ctx=new e,this._masterGain=this._ctx.createGain(),this._masterGain.gain.value=this._muted?0:1,this._masterGain.connect(this._ctx.destination)}catch{this._ctx=null}return this._ctx}_unlockAudio(){if(this._unlocked)return;this._unlocked=!0;const e=this._ensureCtx();e&&e.state==="suspended"&&e.resume().catch(()=>{})}play(e,t=1){var i;const n=this.sounds[e];if(n)try{const s=n.play();if(s!==void 0&&t!==1){const o=Math.max(.7,Math.min(1.5,t));(i=n.rate)==null||i.call(n,o,s)}return}catch{}this._synthFallback(e,t)}_synthFallback(e,t=1){const n=this._ensureCtx();if(!n||!this._masterGain)return;n.state==="suspended"&&n.resume().catch(()=>{});const i=this._masterGain,s=Math.max(.6,Math.min(2,t));switch(e){case"break":return this._synthBreak(n,i,s);case"bounce":return this._synthBounce(n,i,s);case"death":return this._synthDeath(n,i);case"win":return this._synthWin(n,i);default:return}}_synthBreak(e,t,n){const i=e.currentTime,s=Math.max(.85,Math.min(1.25,n)),o=e.createGain();o.gain.setValueAtTime(0,i),o.gain.linearRampToValueAtTime(.3,i+.005),o.gain.exponentialRampToValueAtTime(.001,i+.18),o.connect(t);const l=e.createOscillator();l.type="triangle",l.frequency.setValueAtTime(880*s,i),l.frequency.exponentialRampToValueAtTime(660*s,i+.15);const h=e.createGain();h.gain.value=.65,l.connect(h).connect(o),l.start(i),l.stop(i+.2);const u=e.createOscillator();u.type="sine",u.frequency.value=1760*s;const f=e.createGain();f.gain.setValueAtTime(0,i),f.gain.linearRampToValueAtTime(.18,i+.004),f.gain.exponentialRampToValueAtTime(.001,i+.1),u.connect(f).connect(o),u.start(i),u.stop(i+.12)}_synthBounce(e,t,n){const i=e.currentTime,s=e.createGain();s.gain.setValueAtTime(0,i),s.gain.linearRampToValueAtTime(.42,i+.004),s.gain.exponentialRampToValueAtTime(.001,i+.13),s.connect(t);const o=e.createOscillator();o.type="sine",o.frequency.setValueAtTime(110,i),o.frequency.exponentialRampToValueAtTime(80,i+.1),o.connect(s),o.start(i),o.stop(i+.14);const l=e.createBuffer(1,Math.floor(e.sampleRate*.012),e.sampleRate),h=l.getChannelData(0);for(let c=0;c<h.length;c+=1)h[c]=Math.random()*2-1;const u=e.createBufferSource();u.buffer=l;const f=e.createBiquadFilter();f.type="lowpass",f.frequency.value=320;const a=e.createGain();a.gain.value=.18,u.connect(f).connect(a).connect(s),u.start(i),u.stop(i+.014)}_synthDeath(e,t){const n=e.currentTime,i=e.createGain();i.gain.setValueAtTime(0,n),i.gain.linearRampToValueAtTime(.3,n+.04),i.gain.exponentialRampToValueAtTime(.001,n+.55),i.connect(t);const s=e.createOscillator();s.type="triangle",s.frequency.setValueAtTime(440,n),s.frequency.exponentialRampToValueAtTime(220,n+.2),s.frequency.exponentialRampToValueAtTime(110,n+.5),s.connect(i),s.start(n),s.stop(n+.55);const o=e.createOscillator();o.type="sine",o.frequency.setValueAtTime(220,n),o.frequency.exponentialRampToValueAtTime(55,n+.5);const l=e.createGain();l.gain.value=.45,o.connect(l).connect(i),o.start(n),o.stop(n+.55)}_synthWin(e,t){const n=e.currentTime;[523.25,659.25,783.99,1046.5].forEach((s,o)=>{const l=n+o*.085,h=e.createOscillator();h.type="triangle",h.frequency.value=s;const u=e.createGain();u.gain.setValueAtTime(1e-4,l),u.gain.exponentialRampToValueAtTime(.32,l+.012),u.gain.exponentialRampToValueAtTime(.001,l+.22),h.connect(u).connect(t),h.start(l),h.stop(l+.24)})}startBGM(){if(this._bgmStarted)return;this._bgmStarted=!0;const e=this.sounds.bgm;if(e)try{e.play();return}catch{}this._startSynthBGM()}_startSynthBGM(){if(this._bgmActive)return;const e=this._ensureCtx();if(!e||!this._masterGain)return;const t=e.createGain();t.gain.value=0,t.gain.linearRampToValueAtTime(.045,e.currentTime+2),t.connect(this._masterGain),this._bgmGain=t;const n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=380,n.Q.value=.7;const i=e.createOscillator();i.frequency.value=.05;const s=e.createGain();s.gain.value=120,i.connect(s).connect(n.frequency),i.start();const o=[];[131,196,262,392].forEach((l,h)=>{const u=e.createOscillator();u.type="sine",u.frequency.value=l;const f=e.createGain();f.gain.value=h===0?.55:h===3?.1:.22,u.connect(f).connect(n),u.start(),o.push(u,f)}),n.connect(t),this._bgmNodes=[...o,i,s,n,t],this._bgmActive=!0}stopBGM(){var t,n;const e=this.sounds.bgm;if(e)try{e.stop()}catch{}if(this._bgmActive){for(const i of this._bgmNodes){try{(t=i.stop)==null||t.call(i)}catch{}try{(n=i.disconnect)==null||n.call(i)}catch{}}this._bgmNodes=[],this._bgmActive=!1}this._bgmGain=null,this._bgmStarted=!1}duckBGM(e=.35,t=400,n=800){const i=t+n,s=this.sounds.bgm;if(s&&this._bgmStarted)try{s.volume(.25*e),this._bgmDuckTimer&&clearTimeout(this._bgmDuckTimer),this._bgmDuckTimer=setTimeout(()=>{try{s.volume(.25)}catch{}},i)}catch{}if(this._bgmGain&&this._ctx){const o=this._ctx.currentTime,l=this._bgmGain.gain,h=l.value,u=.045;try{l.cancelScheduledValues(o),l.setValueAtTime(h,o),l.linearRampToValueAtTime(u*e,o+t/1e3),l.linearRampToValueAtTime(u,o+i/1e3)}catch{}}}setMuted(e){var t;this._muted=!!e;try{xr.Howler.mute(this._muted)}catch{}this._masterGain&&(this._masterGain.gain.value=this._muted?0:1);try{(t=window.localStorage)==null||t.setItem(Zl,this._muted?"1":"0")}catch{}}toggleMute(){return this.setMuted(!this._muted),this._muted}isMuted(){return!!this._muted}}console.log("%c✨ STACK BALL PRO v5.0 — MULTI-AGENT POLISH ✨","color: #FF6B9D; font-weight: bold; font-size: 18px;");console.log("%c🎯 Physics, design, audio, UX, QA passes applied","color: #C44569; font-weight: bold;");function Uv(){const r=globalThis==null?void 0:globalThis.performance;if(!r)return;const e=()=>{},t=["mark","measure","clearMarks","clearMeasures"];for(const i of t)if(typeof r[i]!="function")try{Object.defineProperty(r,i,{value:e,writable:!0,configurable:!0})}catch{try{r[i]=e}catch{}}const n=globalThis==null?void 0:globalThis.ugt;if(n&&typeof n=="object"&&typeof n.clearMarks!="function")try{n.clearMarks=e}catch{}}async function Bv(){var p,v;Uv();const r=document.getElementById("app"),e=document.getElementById("ui"),t=new H_(r),n=new pv,i=new mv(t.renderer.domElement),s=new Nv,o=new Dv(t.scene3D),l=new Lv(t.scene3D,n),h=new Pv(t.scene3D,n.world,n),u=new Mv(t.scene3D,n,1),f=new Fv(e);h.particleSystem=o,h.buildLevel(vr(1));const a=new ys(u,h,l,f,s,o);window.__gm=a,u.setBreakInputSource(()=>a.state===nt.PLAYING&&i.isPressing),a.renderer=t,(p=s.isMuted)!=null&&p.call(s)&&((v=f.setMuteState)==null||v.call(f,!0)),t.setupCamera(u.mesh),window.addEventListener("game:restart",()=>a.restart()),window.addEventListener("game:next",()=>a.nextLevel()),window.addEventListener("game:final-restart",()=>{a.level=1,a.score=0,a.restart()}),window.addEventListener("game:pause-toggle",()=>a.togglePause()),window.addEventListener("game:mute-toggle",()=>{var b;const x=s.toggleMute();(b=f.setMuteState)==null||b.call(f,x)}),window.addEventListener("keydown",x=>{var b;if((x.key==="p"||x.key==="P"||x.key==="Escape")&&(a.state===nt.PLAYING||a.state===nt.PAUSED)&&a.togglePause(),x.key==="m"||x.key==="M"){const A=s.toggleMute();(b=f.setMuteState)==null||b.call(f,A)}}),f.showStartScreen();const c=[t.renderer.domElement,window],d=["pointerup","mouseup","touchend"],m=x=>{var A;const b=x==null?void 0:x.target;if(!(b&&b.closest&&b.closest(".sbp-control-pill"))&&a.state===nt.IDLE){a.start(),(A=i.cancelPress)==null||A.call(i),s.startBGM();for(const E of c)for(const C of d)E.removeEventListener(C,m)}};for(const x of c)for(const b of d)x.addEventListener(b,m);const g=new kc;function _(){var b,A,E,C;requestAnimationFrame(_);const x=Math.min(g.getDelta(),.05);i.update(),(b=f.setBreakMode)==null||b.call(f,a.state===nt.PLAYING&&i.isPressing),a.state===nt.PLAYING?(n.step(x),u.update(x),h.update(x,i.rotation,u.body.position.y),(A=a.tick)==null||A.call(a)):a.state===nt.WIN&&h.update(x,0,u.body.position.y),(E=l.update)==null||E.call(l,u.mesh.position.y,x),(C=f.setControlsVisible)==null||C.call(f,a.state===nt.PLAYING||a.state===nt.PAUSED),o.update(x),t.updateCamera(x),t.render()}_()}Bv().catch(console.error);

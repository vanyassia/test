(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kl="178",ws={ROTATE:0,DOLLY:1,PAN:2},Mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xd=0,_c=1,vd=2,cu=1,hu=2,ti=3,Ei=0,nn=1,Ie=2,ii=0,Es=1,Rs=2,xc=3,vc=4,yd=5,Gi=100,Md=101,Sd=102,bd=103,wd=104,Ed=200,Td=201,Ad=202,Rd=203,Wa=204,Xa=205,Cd=206,Pd=207,Ld=208,Dd=209,Id=210,Ud=211,zd=212,Nd=213,Fd=214,Ya=0,qa=1,ja=2,Cs=3,Za=4,Ka=5,$a=6,Ja=7,uu=0,kd=1,Od=2,wi=0,du=1,fu=2,pu=3,Ol=4,mu=5,gu=6,_u=7,yc="attached",Bd="detached",xu=300,Ps=301,Ls=302,Qa=303,tl=304,Do=306,Ti=1e3,Wi=1001,el=1002,_n=1003,Vd=1004,Tr=1005,Gn=1006,Go=1007,Si=1008,Wn=1009,vu=1010,yu=1011,pr=1012,Bl=1013,ji=1014,Nn=1015,Hn=1016,Vl=1017,Gl=1018,mr=1020,Mu=35902,Su=1021,bu=1022,An=1023,gr=1026,_r=1027,Hl=1028,Wl=1029,wu=1030,Xl=1031,Yl=1033,fo=33776,po=33777,mo=33778,go=33779,nl=35840,il=35841,sl=35842,rl=35843,ol=36196,al=37492,ll=37496,cl=37808,hl=37809,ul=37810,dl=37811,fl=37812,pl=37813,ml=37814,gl=37815,_l=37816,xl=37817,vl=37818,yl=37819,Ml=37820,Sl=37821,_o=36492,bl=36494,wl=36495,Eu=36283,El=36284,Tl=36285,Al=36286,Gd=3200,Hd=3201,Tu=0,Wd=1,ei="",He="srgb",Ds="srgb-linear",So="linear",me="srgb",es=7680,Mc=519,Xd=512,Yd=513,qd=514,Au=515,jd=516,Zd=517,Kd=518,$d=519,Rl=35044,Sc="300 es",ni=2e3,bo=2001;class $i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bc=1234567;const ar=Math.PI/180,Is=180/Math.PI;function Fn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[s&255]+Ye[s>>8&255]+Ye[s>>16&255]+Ye[s>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function ee(s,t,e){return Math.max(t,Math.min(e,s))}function ql(s,t){return(s%t+t)%t}function Jd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Qd(s,t,e){return s!==t?(e-s)/(t-s):0}function lr(s,t,e){return(1-e)*s+e*t}function tf(s,t,e,n){return lr(s,t,1-Math.exp(-e*n))}function ef(s,t=1){return t-Math.abs(ql(s,t*2)-t)}function nf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function sf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function rf(s,t){return s+Math.floor(Math.random()*(t-s+1))}function of(s,t){return s+Math.random()*(t-s)}function af(s){return s*(.5-Math.random())}function lf(s){s!==void 0&&(bc=s);let t=bc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function cf(s){return s*ar}function hf(s){return s*Is}function uf(s){return(s&s-1)===0&&s!==0}function df(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ff(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function pf(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),h=r((t+n)/2),c=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*c,l*u,l*d,a*h);break;case"YZY":s.set(l*d,a*c,l*u,a*h);break;case"ZXZ":s.set(l*u,l*d,a*c,a*h);break;case"XZX":s.set(a*c,l*g,l*f,a*h);break;case"YXY":s.set(l*f,a*c,l*g,a*h);break;case"ZYZ":s.set(l*g,l*f,a*c,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function zn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ge(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const xo={DEG2RAD:ar,RAD2DEG:Is,generateUUID:Fn,clamp:ee,euclideanModulo:ql,mapLinear:Jd,inverseLerp:Qd,lerp:lr,damp:tf,pingpong:ef,smoothstep:nf,smootherstep:sf,randInt:rf,randFloat:of,randFloatSpread:af,seededRandom:lf,degToRad:cf,radToDeg:hf,isPowerOfTwo:uf,ceilPowerOfTwo:df,floorPowerOfTwo:ff,setQuaternionFromProperEuler:pf,normalize:ge,denormalize:zn};class ${constructor(t=0,e=0){$.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class sn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],h=n[i+1],c=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||h!==f||c!==g){let m=1-a;const p=l*d+h*f+c*g+u*_,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const E=Math.sqrt(v),b=Math.atan2(E,p*y);m=Math.sin(m*b)/E,a=Math.sin(a*b)/E}const x=a*y;if(l=l*m+d*x,h=h*m+f*x,c=c*m+g*x,u=u*m+_*x,m===1-a){const E=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=E,h*=E,c*=E,u*=E}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],h=n[i+2],c=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+c*u+l*f-h*d,t[e+1]=l*g+c*d+h*u-a*f,t[e+2]=h*g+c*f+a*d-l*u,t[e+3]=c*g-a*u-l*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),c=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*c*u+h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u-d*f*g;break;case"YXZ":this._x=d*c*u+h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u+d*f*g;break;case"ZXY":this._x=d*c*u-h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u-d*f*g;break;case"ZYX":this._x=d*c*u-h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u+d*f*g;break;case"YZX":this._x=d*c*u+h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u-d*f*g;break;case"XZY":this._x=d*c*u-h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],c=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(c-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+h)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-h)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,c=e._w;return this._x=n*c+o*a+i*h-r*l,this._y=i*c+o*l+r*a-n*h,this._z=r*c+o*h+n*l-i*a,this._w=o*c-n*a-i*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const h=Math.sqrt(l),c=Math.atan2(h,a),u=Math.sin((1-e)*c)/h,d=Math.sin(e*c)/h;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*i-a*n),c=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*h+o*u-a*c,this.y=n+l*c+a*h-r*u,this.z=i+l*u+r*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ho.copy(this).projectOnVector(t),this.sub(Ho)}reflect(t){return this.sub(Ho.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ho=new R,wc=new sn;class Qt{constructor(t,e,n,i,r,o,a,l,h){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,h)}set(t,e,n,i,r,o,a,l,h){const c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=n,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],c=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],v=i[4],x=i[7],E=i[2],b=i[5],T=i[8];return r[0]=o*_+a*y+l*E,r[3]=o*m+a*v+l*b,r[6]=o*p+a*x+l*T,r[1]=h*_+c*y+u*E,r[4]=h*m+c*v+u*b,r[7]=h*p+c*x+u*T,r[2]=d*_+f*y+g*E,r[5]=d*m+f*v+g*b,r[8]=d*p+f*x+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*a*h-n*r*c+n*a*l+i*r*h-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=c*o-a*h,d=a*l-c*r,f=h*r-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*h-c*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(c*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*l-h*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-i*h,i*l,-i*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Wo.makeScale(t,e)),this}rotate(t){return this.premultiply(Wo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wo=new Qt;function Ru(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function wo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function mf(){const s=wo("canvas");return s.style.display="block",s}const Ec={};function Ts(s){s in Ec||(Ec[s]=!0,console.warn(s))}function gf(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function _f(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function xf(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Tc=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ac=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vf(){const s={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===me&&(i.r=si(i.r),i.g=si(i.g),i.b=si(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===me&&(i.r=As(i.r),i.g=As(i.g),i.b=As(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ei?So:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ts("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ts("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ds]:{primaries:t,whitePoint:n,transfer:So,toXYZ:Tc,fromXYZ:Ac,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:n,transfer:me,toXYZ:Tc,fromXYZ:Ac,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),s}const he=vf();function si(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function As(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ns;class yf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ns===void 0&&(ns=wo("canvas")),ns.width=t.width,ns.height=t.height;const i=ns.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ns}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=wo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=si(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Mf=0;class jl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Fn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Xo(i[o].image)):r.push(Xo(i[o]))}else r=Xo(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Xo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?yf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sf=0;const Yo=new R;class Ze extends $i{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=Wi,i=Wi,r=Gn,o=Si,a=An,l=Wn,h=Ze.DEFAULT_ANISOTROPY,c=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Fn(),this.name="",this.source=new jl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yo).x}get height(){return this.source.getSize(Yo).y}get depth(){return this.source.getSize(Yo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ti:t.x=t.x-Math.floor(t.x);break;case Wi:t.x=t.x<0?0:1;break;case el:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ti:t.y=t.y-Math.floor(t.y);break;case Wi:t.y=t.y<0?0:1;break;case el:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=xu;Ze.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,i=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,h=l[0],c=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(h+1)/2,x=(f+1)/2,E=(p+1)/2,b=(c+d)/4,T=(u+_)/4,L=(g+m)/4;return v>x&&v>E?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=b/n,r=T/n):x>E?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=b/i,r=L/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=T/r,i=L/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-c)*(d-c));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-c)/y,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bf extends $i{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new Ze(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new jl(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends bf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Cu extends Ze{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wf extends Ze{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ai{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ar.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(t.matrixWorld),this.union(Ar)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),Rr.subVectors(this.max,Ws),is.subVectors(t.a,Ws),ss.subVectors(t.b,Ws),rs.subVectors(t.c,Ws),li.subVectors(ss,is),ci.subVectors(rs,ss),Li.subVectors(is,rs);let e=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Li.z,Li.y,li.z,0,-li.x,ci.z,0,-ci.x,Li.z,0,-Li.x,-li.y,li.x,0,-ci.y,ci.x,0,-Li.y,Li.x,0];return!qo(e,is,ss,rs,Rr)||(e=[1,0,0,0,1,0,0,0,1],!qo(e,is,ss,rs,Rr))?!1:(Cr.crossVectors(li,ci),e=[Cr.x,Cr.y,Cr.z],qo(e,is,ss,rs,Rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const qn=[new R,new R,new R,new R,new R,new R,new R,new R],Ln=new R,Ar=new Ai,is=new R,ss=new R,rs=new R,li=new R,ci=new R,Li=new R,Ws=new R,Rr=new R,Cr=new R,Di=new R;function qo(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Di.fromArray(s,r);const a=i.x*Math.abs(Di.x)+i.y*Math.abs(Di.y)+i.z*Math.abs(Di.z),l=t.dot(Di),h=e.dot(Di),c=n.dot(Di);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}const Ef=new Ai,Xs=new R,jo=new R;class Ri{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ef.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);const e=Xs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Xs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(jo)),this.expandByPoint(Xs.copy(t.center).sub(jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const jn=new R,Zo=new R,Pr=new R,hi=new R,Ko=new R,Lr=new R,$o=new R;class Io{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Zo.copy(t).add(e).multiplyScalar(.5),Pr.copy(e).sub(t).normalize(),hi.copy(this.origin).sub(Zo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Pr),a=hi.dot(this.direction),l=-hi.dot(Pr),h=hi.lengthSq(),c=Math.abs(1-o*o);let u,d,f,g;if(c>0)if(u=o*l-a,d=o*a-l,g=r*c,u>=0)if(d>=-g)if(d<=g){const _=1/c;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+h}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+h):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Zo).addScaledVector(Pr,d),f}intersectSphere(t,e){jn.subVectors(t.center,this.origin);const n=jn.dot(this.direction),i=jn.dot(jn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,i=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,i=(t.min.x-d.x)*h),c>=0?(r=(t.min.y-d.y)*c,o=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,o=(t.min.y-d.y)*c),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,n,i,r){Ko.subVectors(e,t),Lr.subVectors(n,t),$o.crossVectors(Ko,Lr);let o=this.direction.dot($o),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,t);const l=a*this.direction.dot(Lr.crossVectors(hi,Lr));if(l<0)return null;const h=a*this.direction.dot(Ko.cross(hi));if(h<0||l+h>o)return null;const c=-a*hi.dot($o);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,n,i,r,o,a,l,h,c,u,d,f,g,_,m){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,h,c,u,d,f,g,_,m)}set(t,e,n,i,r,o,a,l,h,c,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=h,p[6]=c,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/os.setFromMatrixColumn(t,0).length(),r=1/os.setFromMatrixColumn(t,1).length(),o=1/os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),h=Math.sin(i),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*c,f=o*u,g=a*c,_=a*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=f+g*h,e[5]=d-_*h,e[9]=-a*l,e[2]=_-d*h,e[6]=g+f*h,e[10]=o*l}else if(t.order==="YXZ"){const d=l*c,f=l*u,g=h*c,_=h*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*h,e[1]=o*u,e[5]=o*c,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*c,f=l*u,g=h*c,_=h*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*c,e[9]=_-d*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*c,f=o*u,g=a*c,_=a*u;e[0]=l*c,e[4]=g*h-f,e[8]=d*h+_,e[1]=l*u,e[5]=_*h+d,e[9]=f*h-g,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*h,g=a*l,_=a*h;e[0]=l*c,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*c,e[9]=-a*c,e[2]=-h*c,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*h,g=a*l,_=a*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=d*u+_,e[5]=o*c,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*c,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tf,t,Af)}lookAt(t,e,n){const i=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),ui.crossVectors(n,fn),ui.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),ui.crossVectors(n,fn)),ui.normalize(),Dr.crossVectors(fn,ui),i[0]=ui.x,i[4]=Dr.x,i[8]=fn.x,i[1]=ui.y,i[5]=Dr.y,i[9]=fn.y,i[2]=ui.z,i[6]=Dr.z,i[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],c=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],v=n[7],x=n[11],E=n[15],b=i[0],T=i[4],L=i[8],S=i[12],M=i[1],P=i[5],N=i[9],U=i[13],W=i[2],B=i[6],V=i[10],K=i[14],X=i[3],ot=i[7],xt=i[11],Tt=i[15];return r[0]=o*b+a*M+l*W+h*X,r[4]=o*T+a*P+l*B+h*ot,r[8]=o*L+a*N+l*V+h*xt,r[12]=o*S+a*U+l*K+h*Tt,r[1]=c*b+u*M+d*W+f*X,r[5]=c*T+u*P+d*B+f*ot,r[9]=c*L+u*N+d*V+f*xt,r[13]=c*S+u*U+d*K+f*Tt,r[2]=g*b+_*M+m*W+p*X,r[6]=g*T+_*P+m*B+p*ot,r[10]=g*L+_*N+m*V+p*xt,r[14]=g*S+_*U+m*K+p*Tt,r[3]=y*b+v*M+x*W+E*X,r[7]=y*T+v*P+x*B+E*ot,r[11]=y*L+v*N+x*V+E*xt,r[15]=y*S+v*U+x*K+E*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*h*u-r*a*d+n*h*d+i*a*f-n*l*f)+_*(+e*l*f-e*h*d+r*o*d-i*o*f+i*h*c-r*l*c)+m*(+e*h*u-e*a*f-r*o*u+n*o*f+r*a*c-n*h*c)+p*(-i*a*c-e*l*u+e*a*d+i*o*u-n*o*d+n*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=u*m*h-_*d*h+_*l*f-a*m*f-u*l*p+a*d*p,v=g*d*h-c*m*h-g*l*f+o*m*f+c*l*p-o*d*p,x=c*_*h-g*u*h+g*a*f-o*_*f-c*a*p+o*u*p,E=g*u*l-c*_*l-g*a*d+o*_*d+c*a*m-o*u*m,b=e*y+n*v+i*x+r*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=y*T,t[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*T,t[2]=(a*m*r-_*l*r+_*i*h-n*m*h-a*i*p+n*l*p)*T,t[3]=(u*l*r-a*d*r-u*i*h+n*d*h+a*i*f-n*l*f)*T,t[4]=v*T,t[5]=(c*m*r-g*d*r+g*i*f-e*m*f-c*i*p+e*d*p)*T,t[6]=(g*l*r-o*m*r-g*i*h+e*m*h+o*i*p-e*l*p)*T,t[7]=(o*d*r-c*l*r+c*i*h-e*d*h-o*i*f+e*l*f)*T,t[8]=x*T,t[9]=(g*u*r-c*_*r-g*n*f+e*_*f+c*n*p-e*u*p)*T,t[10]=(o*_*r-g*a*r+g*n*h-e*_*h-o*n*p+e*a*p)*T,t[11]=(c*a*r-o*u*r-c*n*h+e*u*h+o*n*f-e*a*f)*T,t[12]=E*T,t[13]=(c*_*i-g*u*i+g*n*d-e*_*d-c*n*m+e*u*m)*T,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*T,t[15]=(o*u*i-c*a*i+c*n*l-e*u*l-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,h=r*o,c=r*a;return this.set(h*o+n,h*a-i*l,h*l+i*a,0,h*a+i*l,c*a+n,c*l-i*o,0,h*l-i*a,c*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,c=o+o,u=a+a,d=r*h,f=r*c,g=r*u,_=o*c,m=o*u,p=a*u,y=l*h,v=l*c,x=l*u,E=n.x,b=n.y,T=n.z;return i[0]=(1-(_+p))*E,i[1]=(f+x)*E,i[2]=(g-v)*E,i[3]=0,i[4]=(f-x)*b,i[5]=(1-(d+p))*b,i[6]=(m+y)*b,i[7]=0,i[8]=(g+v)*T,i[9]=(m-y)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=os.set(i[0],i[1],i[2]).length();const o=os.set(i[4],i[5],i[6]).length(),a=os.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Dn.copy(this);const h=1/r,c=1/o,u=1/a;return Dn.elements[0]*=h,Dn.elements[1]*=h,Dn.elements[2]*=h,Dn.elements[4]*=c,Dn.elements[5]*=c,Dn.elements[6]*=c,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,e.setFromRotationMatrix(Dn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=ni){const l=this.elements,h=2*r/(e-t),c=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(a===ni)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===bo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ni){const l=this.elements,h=1/(e-t),c=1/(n-i),u=1/(o-r),d=(e+t)*h,f=(n+i)*c;let g,_;if(a===ni)g=(o+r)*u,_=-2*u;else if(a===bo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const os=new R,Dn=new jt,Tf=new R(0,0,0),Af=new R(1,1,1),ui=new R,Dr=new R,fn=new R,Rc=new jt,Cc=new sn;class Ke{constructor(t=0,e=0,n=0,i=Ke.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],h=i[5],c=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cc.setFromEuler(this),this.setFromQuaternion(Cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ke.DEFAULT_ORDER="XYZ";class Pu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rf=0;const Pc=new R,as=new sn,Zn=new jt,Ir=new R,Ys=new R,Cf=new R,Pf=new sn,Lc=new R(1,0,0),Dc=new R(0,1,0),Ic=new R(0,0,1),Uc={type:"added"},Lf={type:"removed"},ls={type:"childadded",child:null},Jo={type:"childremoved",child:null};class Le extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new R,e=new Ke,n=new sn,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new jt},normalMatrix:{value:new Qt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(Lc,t)}rotateY(t){return this.rotateOnAxis(Dc,t)}rotateZ(t){return this.rotateOnAxis(Ic,t)}translateOnAxis(t,e){return Pc.copy(t).applyQuaternion(this.quaternion),this.position.add(Pc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lc,t)}translateY(t){return this.translateOnAxis(Dc,t)}translateZ(t){return this.translateOnAxis(Ic,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ir.copy(t):Ir.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Ys,Ir,this.up):Zn.lookAt(Ir,Ys,this.up),this.quaternion.setFromRotationMatrix(Zn),i&&(Zn.extractRotation(i.matrixWorld),as.setFromRotationMatrix(Zn),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uc),ls.child=t,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lf),Jo.child=t,this.dispatchEvent(Jo),Jo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uc),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,t,Cf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,Pf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const u=l[h];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const h in a){const c=a[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Le.DEFAULT_UP=new R(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new R,Kn=new R,Qo=new R,$n=new R,cs=new R,hs=new R,zc=new R,ta=new R,ea=new R,na=new R,ia=new de,sa=new de,ra=new de;class Tn{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),In.subVectors(t,e),i.cross(In);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){In.subVectors(i,e),Kn.subVectors(n,e),Qo.subVectors(t,e);const o=In.dot(In),a=In.dot(Kn),l=In.dot(Qo),h=Kn.dot(Kn),c=Kn.dot(Qo),u=o*h-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(h*l-a*c)*d,g=(o*c-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return ia.setScalar(0),sa.setScalar(0),ra.setScalar(0),ia.fromBufferAttribute(t,e),sa.fromBufferAttribute(t,n),ra.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ia,r.x),o.addScaledVector(sa,r.y),o.addScaledVector(ra,r.z),o}static isFrontFacing(t,e,n,i){return In.subVectors(n,e),Kn.subVectors(t,e),In.cross(Kn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),In.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Tn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;cs.subVectors(i,n),hs.subVectors(r,n),ta.subVectors(t,n);const l=cs.dot(ta),h=hs.dot(ta);if(l<=0&&h<=0)return e.copy(n);ea.subVectors(t,i);const c=cs.dot(ea),u=hs.dot(ea);if(c>=0&&u<=c)return e.copy(i);const d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(n).addScaledVector(cs,o);na.subVectors(t,r);const f=cs.dot(na),g=hs.dot(na);if(g>=0&&f<=g)return e.copy(r);const _=f*h-l*g;if(_<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(hs,a);const m=c*g-f*u;if(m<=0&&u-c>=0&&f-g>=0)return zc.subVectors(r,i),a=(u-c)/(u-c+(f-g)),e.copy(i).addScaledVector(zc,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(cs,o).addScaledVector(hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function oa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=ql(t,1),e=ee(e,0,1),n=ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=oa(o,r,t+1/3),this.g=oa(o,r,t),this.b=oa(o,r,t-1/3)}return he.colorSpaceToWorking(this,i),this}setStyle(t,e=He){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){const n=Lu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return he.workingToColorSpace(qe.copy(this),t),Math.round(ee(qe.r*255,0,255))*65536+Math.round(ee(qe.g*255,0,255))*256+Math.round(ee(qe.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(qe.copy(this),e);const n=qe.r,i=qe.g,r=qe.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,h;const c=(a+o)/2;if(a===o)l=0,h=0;else{const u=o-a;switch(h=c<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=He){he.workingToColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,i=qe.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(Ur);const n=lr(di.h,Ur.h,e),i=lr(di.s,Ur.s,e),r=lr(di.l,Ur.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new dt;dt.NAMES=Lu;let Df=0;class Ji extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=Es,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Xa&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ne extends Ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.combine=uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ze=new R,zr=new $;let If=0;class De{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:If++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rl,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zr.fromBufferAttribute(this,e),zr.applyMatrix3(t),this.setXY(e,zr.x,zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rl&&(t.usage=this.usage),t}}class Zl extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Du extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Uf=0;const Sn=new jt,aa=new Le,us=new R,pn=new Ai,qs=new Ai,Ge=new R;class Ae extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ru(t)?Du:Zl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,n){return Sn.makeTranslation(t,e,n),this.applyMatrix4(Sn),this}scale(t,e,n){return Sn.makeScale(t,e,n),this.applyMatrix4(Sn),this}lookAt(t){return aa.lookAt(t),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new le(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(pn.min,qs.min),pn.expandByPoint(Ge),Ge.addVectors(pn.max,qs.max),pn.expandByPoint(Ge)):(pn.expandByPoint(qs.min),pn.expandByPoint(qs.max))}pn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ge.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ge));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)Ge.fromBufferAttribute(a,h),l&&(us.fromBufferAttribute(t,h),Ge.add(us)),i=Math.max(i,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new R,l[L]=new R;const h=new R,c=new R,u=new R,d=new $,f=new $,g=new $,_=new R,m=new R;function p(L,S,M){h.fromBufferAttribute(n,L),c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),c.sub(h),u.sub(h),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(c,-g.x).multiplyScalar(P),a[L].add(_),a[S].add(_),a[M].add(_),l[L].add(m),l[S].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let L=0,S=y.length;L<S;++L){const M=y[L],P=M.start,N=M.count;for(let U=P,W=P+N;U<W;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const v=new R,x=new R,E=new R,b=new R;function T(L){E.fromBufferAttribute(i,L),b.copy(E);const S=a[L];v.copy(S),v.sub(E.multiplyScalar(E.dot(S))).normalize(),x.crossVectors(b,S);const P=x.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,P)}for(let L=0,S=y.length;L<S;++L){const M=y[L],P=M.start,N=M.count;for(let U=P,W=P+N;U<W;U+=3)T(t.getX(U+0)),T(t.getX(U+1)),T(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new R,r=new R,o=new R,a=new R,l=new R,h=new R,c=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),c.subVectors(o,r),u.subVectors(i,r),c.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,m),a.add(c),l.add(c),h.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),c.subVectors(o,r),u.subVectors(i,r),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,l){const h=a.array,c=a.itemSize,u=a.normalized,d=new h.constructor(l.length*c);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*c;for(let p=0;p<c;p++)d[g++]=h[f++]}return new De(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],h=t(l,n);e.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const l=[],h=r[a];for(let c=0,u=h.length;c<u;c++){const d=h[c],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){const f=h[u];c.push(f.toJSON(t.data))}c.length>0&&(i[l]=c,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const h in i){const c=i[h];this.setAttribute(h,c.clone(e))}const r=t.morphAttributes;for(const h in r){const c=[],u=r[h];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,c=o.length;h<c;h++){const u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nc=new jt,Ii=new Io,Nr=new Ri,Fc=new R,Fr=new R,kr=new R,Or=new R,la=new R,Br=new R,kc=new R,Vr=new R;class re extends Le{constructor(t=new Ae,e=new Ne){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Br.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const c=a[l],u=r[l];c!==0&&(la.fromBufferAttribute(u,t),o?Br.addScaledVector(la,c):Br.addScaledVector(la.sub(e),c))}e.add(Br)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(r),Ii.copy(t.ray).recast(t.near),!(Nr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Nr,Fc)===null||Ii.origin.distanceToSquared(Fc)>(t.far-t.near)**2))&&(Nc.copy(r).invert(),Ii.copy(t.ray).applyMatrix4(Nc),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,E=v;x<E;x+=3){const b=a.getX(x),T=a.getX(x+1),L=a.getX(x+2);i=Gr(this,p,t,n,h,c,u,b,T,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);i=Gr(this,o,t,n,h,c,u,y,v,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,E=v;x<E;x+=3){const b=x,T=x+1,L=x+2;i=Gr(this,p,t,n,h,c,u,b,T,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,v=m+1,x=m+2;i=Gr(this,o,t,n,h,c,u,y,v,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function zf(s,t,e,n,i,r,o,a){let l;if(t.side===nn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Ei,a),l===null)return null;Vr.copy(a),Vr.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Vr);return h<e.near||h>e.far?null:{distance:h,point:Vr.clone(),object:s}}function Gr(s,t,e,n,i,r,o,a,l,h){s.getVertexPosition(a,Fr),s.getVertexPosition(l,kr),s.getVertexPosition(h,Or);const c=zf(s,t,e,n,Fr,kr,Or,kc);if(c){const u=new R;Tn.getBarycoord(kc,Fr,kr,Or,u),i&&(c.uv=Tn.getInterpolatedAttribute(i,a,l,h,u,new $)),r&&(c.uv1=Tn.getInterpolatedAttribute(r,a,l,h,u,new $)),o&&(c.normal=Tn.getInterpolatedAttribute(o,a,l,h,u,new R),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:h,normal:new R,materialIndex:0};Tn.getNormal(Fr,kr,Or,d.normal),c.face=d,c.barycoord=u}return c}class xn extends Ae{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],h=[],c=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new le(h,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(u,2));function g(_,m,p,y,v,x,E,b,T,L,S){const M=x/T,P=E/L,N=x/2,U=E/2,W=b/2,B=T+1,V=L+1;let K=0,X=0;const ot=new R;for(let xt=0;xt<V;xt++){const Tt=xt*P-U;for(let Zt=0;Zt<B;Zt++){const Xt=Zt*M-N;ot[_]=Xt*y,ot[m]=Tt*v,ot[p]=W,h.push(ot.x,ot.y,ot.z),ot[_]=0,ot[m]=0,ot[p]=b>0?1:-1,c.push(ot.x,ot.y,ot.z),u.push(Zt/T),u.push(1-xt/L),K+=1}}for(let xt=0;xt<L;xt++)for(let Tt=0;Tt<T;Tt++){const Zt=d+Tt+B*xt,Xt=d+Tt+B*(xt+1),j=d+(Tt+1)+B*(xt+1),lt=d+(Tt+1)+B*xt;l.push(Zt,Xt,lt),l.push(Xt,j,lt),X+=6}a.addGroup(f,X,S),f+=X,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Us(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function tn(s){const t={};for(let e=0;e<s.length;e++){const n=Us(s[e]);for(const i in n)t[i]=n[i]}return t}function Nf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Iu(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const xr={clone:Us,merge:tn};var Ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class We extends Ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ff,this.fragmentShader=kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=Nf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Uu extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fi=new R,Oc=new $,Bc=new $;class ln extends Uu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Is*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fi.x,fi.y).multiplyScalar(-t/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-t/fi.z)}getViewSize(t,e){return this.getViewBounds(t,Oc,Bc),e.subVectors(Bc,Oc)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ar*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/h,i*=o.width/l,n*=o.height/h}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ds=-90,fs=1;class Of extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ln(ds,fs,t,e);i.layers=this.layers,this.add(i);const r=new ln(ds,fs,t,e);r.layers=this.layers,this.add(r);const o=new ln(ds,fs,t,e);o.layers=this.layers,this.add(o);const a=new ln(ds,fs,t,e);a.layers=this.layers,this.add(a);const l=new ln(ds,fs,t,e);l.layers=this.layers,this.add(l);const h=new ln(ds,fs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const h of e)this.remove(h);if(t===ni)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,h,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,c),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class zu extends Ze{constructor(t=[],e=Ps,n,i,r,o,a,l,h,c){super(t,e,n,i,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Bf extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new zu(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xn(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:ii});r.uniforms.tEquirect.value=e;const o=new re(i,r),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=Gn),new Of(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class en extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vf={type:"move"};class ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(h,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),f=.02,g=.005;h.inputState.pinching&&d>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vf)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new en;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Kl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new dt(t),this.density=e}clone(){return new Kl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Nu extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ke,this.environmentIntensity=1,this.environmentRotation=new Ke,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Gf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Rl,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Je=new R;class Eo{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=zn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Eo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Fu extends Ji{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ps;const js=new R,ms=new R,gs=new R,_s=new $,Zs=new $,ku=new jt,Hr=new R,Ks=new R,Wr=new R,Vc=new $,ha=new $,Gc=new $;class Hf extends Le{constructor(t=new Fu){if(super(),this.isSprite=!0,this.type="Sprite",ps===void 0){ps=new Ae;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Gf(e,5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute("position",new Eo(n,3,0,!1)),ps.setAttribute("uv",new Eo(n,2,3,!1))}this.geometry=ps,this.material=t,this.center=new $(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ms.setFromMatrixScale(this.matrixWorld),ku.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ms.multiplyScalar(-gs.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Xr(Hr.set(-.5,-.5,0),gs,o,ms,i,r),Xr(Ks.set(.5,-.5,0),gs,o,ms,i,r),Xr(Wr.set(.5,.5,0),gs,o,ms,i,r),Vc.set(0,0),ha.set(1,0),Gc.set(1,1);let a=t.ray.intersectTriangle(Hr,Ks,Wr,!1,js);if(a===null&&(Xr(Ks.set(-.5,.5,0),gs,o,ms,i,r),ha.set(0,1),a=t.ray.intersectTriangle(Hr,Wr,Ks,!1,js),a===null))return;const l=t.ray.origin.distanceTo(js);l<t.near||l>t.far||e.push({distance:l,point:js.clone(),uv:Tn.getInterpolation(js,Hr,Ks,Wr,Vc,ha,Gc,new $),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Xr(s,t,e,n,i,r){_s.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Zs.x=r*_s.x-i*_s.y,Zs.y=i*_s.x+r*_s.y):Zs.copy(_s),s.copy(t),s.x+=Zs.x,s.y+=Zs.y,s.applyMatrix4(ku)}const Hc=new R,Wc=new de,Xc=new de,Wf=new R,Yc=new jt,Yr=new R,ua=new Ri,qc=new jt,da=new Io;class Xf extends re{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yc,this.bindMatrix=new jt,this.bindMatrixInverse=new jt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ai),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Yr),this.boundingBox.expandByPoint(Yr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ri),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Yr),this.boundingSphere.expandByPoint(Yr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ua.copy(this.boundingSphere),ua.applyMatrix4(i),t.ray.intersectsSphere(ua)!==!1&&(qc.copy(i).invert(),da.copy(t.ray).applyMatrix4(qc),!(this.boundingBox!==null&&da.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,da)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new de,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===yc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Bd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Wc.fromBufferAttribute(i.attributes.skinIndex,t),Xc.fromBufferAttribute(i.attributes.skinWeight,t),Hc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=Xc.getComponent(r);if(o!==0){const a=Wc.getComponent(r);Yc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Wf.copy(Hc).applyMatrix4(Yc),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Ou extends Le{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Bu extends Ze{constructor(t=null,e=1,n=1,i,r,o,a,l,h=_n,c=_n,u,d){super(null,o,a,l,h,c,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jc=new jt,Yf=new jt;class $l{constructor(t=[],e=[]){this.uuid=Fn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new jt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new jt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:Yf;jc.multiplyMatrices(a,e[r]),jc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new $l(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Bu(e,t,t,An,Nn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Ou),this.bones.push(o),this.boneInverses.push(new jt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Zc extends De{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const xs=new jt,Kc=new jt,qr=[],$c=new Ai,qf=new jt,$s=new re,Js=new Ri;class Vu extends re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Zc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,qf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),$c.copy(t.boundingBox).applyMatrix4(xs),this.boundingBox.union($c)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ri),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),Js.copy(t.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(Js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if($s.geometry=this.geometry,$s.material=this.material,$s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(n),t.ray.intersectsSphere(Js)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,xs),Kc.multiplyMatrices(n,xs),$s.matrixWorld=Kc,$s.raycast(t,qr);for(let o=0,a=qr.length;o<a;o++){const l=qr[o];l.instanceId=r,l.object=this,e.push(l)}qr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Zc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bu(new Float32Array(i*this.count),i,this.count,Hl,Nn));const r=this.morphTexture.source.data.data;let o=0;for(let h=0;h<n.length;h++)o+=n[h];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const fa=new R,jf=new R,Zf=new Qt;class yi{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=fa.subVectors(n,e).cross(jf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Zf.getNormalMatrix(t),i=this.coplanarPoint(fa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Ri,Kf=new $(.5,.5),jr=new R;class Jl{constructor(t=new yi,e=new yi,n=new yi,i=new yi,r=new yi,o=new yi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ni){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],h=i[4],c=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],y=i[13],v=i[14],x=i[15];if(n[0].setComponents(l-r,d-h,m-f,x-p).normalize(),n[1].setComponents(l+r,d+h,m+f,x+p).normalize(),n[2].setComponents(l+o,d+c,m+g,x+y).normalize(),n[3].setComponents(l-o,d-c,m-g,x-y).normalize(),n[4].setComponents(l-a,d-u,m-_,x-v).normalize(),e===ni)n[5].setComponents(l+a,d+u,m+_,x+v).normalize();else if(e===bo)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){Ui.center.set(0,0,0);const e=Kf.distanceTo(t.center);return Ui.radius=.7071067811865476+e,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(jr.x=i.normal.x>0?t.max.x:t.min.x,jr.y=i.normal.y>0?t.max.y:t.min.y,jr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(jr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $f extends Ji{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const To=new R,Ao=new R,Jc=new jt,Qs=new Io,Zr=new Ri,pa=new R,Qc=new R;class Jf extends Le{constructor(t=new Ae,e=new $f){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)To.fromBufferAttribute(e,i-1),Ao.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=To.distanceTo(Ao);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(i),Zr.radius+=r,t.ray.intersectsSphere(Zr)===!1)return;Jc.copy(i).invert(),Qs.copy(t.ray).applyMatrix4(Jc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=h){const p=c.getX(_),y=c.getX(_+1),v=Kr(this,t,Qs,l,p,y,_);v&&e.push(v)}if(this.isLineLoop){const _=c.getX(g-1),m=c.getX(f),p=Kr(this,t,Qs,l,_,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=h){const p=Kr(this,t,Qs,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=Kr(this,t,Qs,l,g-1,f,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Kr(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(To.fromBufferAttribute(a,i),Ao.fromBufferAttribute(a,r),e.distanceSqToSegment(To,Ao,pa,Qc)>n)return;pa.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(pa);if(!(h<t.near||h>t.far))return{distance:h,point:Qc.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const th=new R,eh=new R;class Qf extends Jf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)th.fromBufferAttribute(e,i),eh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+th.distanceTo(eh);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zi extends Ze{constructor(t,e,n,i,r,o,a,l,h){super(t,e,n,i,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gu extends Ze{constructor(t,e,n=ji,i,r,o,a=_n,l=_n,h,c=gr,u=1){if(c!==gr&&c!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,i,r,o,a,l,c,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new jl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Sr extends Ae{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],h=new R,c=new $;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;h.x=t*Math.cos(f),h.y=t*Math.sin(f),o.push(h.x,h.y,h.z),a.push(0,0,1),c.x=(o[d]/t+1)/2,c.y=(o[d+1]/t+1)/2,l.push(c.x,c.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(a,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ri extends Ae{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const h=this;i=Math.floor(i),r=Math.floor(r);const c=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(c),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(f,2));function y(){const x=new R,E=new R;let b=0;const T=(e-t)/n;for(let L=0;L<=r;L++){const S=[],M=L/r,P=M*(e-t)+t;for(let N=0;N<=i;N++){const U=N/i,W=U*l+a,B=Math.sin(W),V=Math.cos(W);E.x=P*B,E.y=-M*n+m,E.z=P*V,u.push(E.x,E.y,E.z),x.set(B,T,V).normalize(),d.push(x.x,x.y,x.z),f.push(U,1-M),S.push(g++)}_.push(S)}for(let L=0;L<i;L++)for(let S=0;S<r;S++){const M=_[S][L],P=_[S+1][L],N=_[S+1][L+1],U=_[S][L+1];(t>0||S!==0)&&(c.push(M,P,U),b+=3),(e>0||S!==r-1)&&(c.push(P,N,U),b+=3)}h.addGroup(p,b,0),p+=b}function v(x){const E=g,b=new $,T=new R;let L=0;const S=x===!0?t:e,M=x===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const P=g;for(let N=0;N<=i;N++){const W=N/i*l+a,B=Math.cos(W),V=Math.sin(W);T.x=S*V,T.y=m*M,T.z=S*B,u.push(T.x,T.y,T.z),d.push(0,M,0),b.x=B*.5+.5,b.y=V*.5*M+.5,f.push(b.x,b.y),g++}for(let N=0;N<i;N++){const U=E+N,W=P+N;x===!0?c.push(W,W+1,U):c.push(W+1,W,U),L+=3}h.addGroup(p,L,x===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ri(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Uo extends ri{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Uo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ql extends Ae{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),h(n),c(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const v=new R,x=new R,E=new R;for(let b=0;b<e.length;b+=3)f(e[b+0],v),f(e[b+1],x),f(e[b+2],E),l(v,x,E,y)}function l(y,v,x,E){const b=E+1,T=[];for(let L=0;L<=b;L++){T[L]=[];const S=y.clone().lerp(x,L/b),M=v.clone().lerp(x,L/b),P=b-L;for(let N=0;N<=P;N++)N===0&&L===b?T[L][N]=S:T[L][N]=S.clone().lerp(M,N/P)}for(let L=0;L<b;L++)for(let S=0;S<2*(b-L)-1;S++){const M=Math.floor(S/2);S%2===0?(d(T[L][M+1]),d(T[L+1][M]),d(T[L][M])):(d(T[L][M+1]),d(T[L+1][M+1]),d(T[L+1][M]))}}function h(y){const v=new R;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(y),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function c(){const y=new R;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];const x=m(y)/2/Math.PI+.5,E=p(y)/Math.PI+.5;o.push(x,1-E)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const v=o[y+0],x=o[y+2],E=o[y+4],b=Math.max(v,x,E),T=Math.min(v,x,E);b>.9&&T<.1&&(v<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),E<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,v){const x=y*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function g(){const y=new R,v=new R,x=new R,E=new R,b=new $,T=new $,L=new $;for(let S=0,M=0;S<r.length;S+=9,M+=6){y.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),b.set(o[M+0],o[M+1]),T.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),E.copy(y).add(v).add(x).divideScalar(3);const P=m(E);_(b,M+0,y,P),_(T,M+2,v,P),_(L,M+4,x,P)}}function _(y,v,x,E){E<0&&y.x===1&&(o[v]=y.x-1),x.x===0&&x.z===0&&(o[v]=E/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ql(t.vertices,t.indices,t.radius,t.details)}}class Xn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,h;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),h=n[i]-o,h<0)a=i+1;else if(h>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const c=n[i],d=n[i+1]-c,f=(o-c)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new $:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new R,i=[],r=[],o=[],a=new R,l=new jt;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let h=Number.MAX_VALUE;const c=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);c<=h&&(h=c,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),d<=h&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ee(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(ee(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class tc extends Xn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new $){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=h-this.aY;l=d*c-f*u+this.aX,h=d*u+f*c+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class t0 extends tc{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ec(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){i(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,c,u){let d=(o-r)/h-(a-r)/(h+c)+(a-o)/c,f=(a-o)/c-(l-o)/(c+u)+(l-a)/u;d*=c,f*=c,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const $r=new R,ma=new ec,ga=new ec,_a=new ec;class e0 extends Xn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,c;this.closed||a>0?h=i[(a-1)%r]:($r.subVectors(i[0],i[1]).add(i[0]),h=$r);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?c=i[(a+2)%r]:($r.subVectors(i[r-1],i[r-2]).add(i[r-1]),c=$r),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(c),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ma.initNonuniformCatmullRom(h.x,u.x,d.x,c.x,g,_,m),ga.initNonuniformCatmullRom(h.y,u.y,d.y,c.y,g,_,m),_a.initNonuniformCatmullRom(h.z,u.z,d.z,c.z,g,_,m)}else this.curveType==="catmullrom"&&(ma.initCatmullRom(h.x,u.x,d.x,c.x,this.tension),ga.initCatmullRom(h.y,u.y,d.y,c.y,this.tension),_a.initCatmullRom(h.z,u.z,d.z,c.z,this.tension));return n.set(ma.calc(l),ga.calc(l),_a.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function nh(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function n0(s,t){const e=1-s;return e*e*t}function i0(s,t){return 2*(1-s)*s*t}function s0(s,t){return s*s*t}function cr(s,t,e,n){return n0(s,t)+i0(s,e)+s0(s,n)}function r0(s,t){const e=1-s;return e*e*e*t}function o0(s,t){const e=1-s;return 3*e*e*s*t}function a0(s,t){return 3*(1-s)*s*s*t}function l0(s,t){return s*s*s*t}function hr(s,t,e,n,i){return r0(s,t)+o0(s,e)+a0(s,n)+l0(s,i)}class Hu extends Xn{constructor(t=new $,e=new $,n=new $,i=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new $){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(hr(t,i.x,r.x,o.x,a.x),hr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class c0 extends Xn{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(hr(t,i.x,r.x,o.x,a.x),hr(t,i.y,r.y,o.y,a.y),hr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Wu extends Xn{constructor(t=new $,e=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new $){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class h0 extends Xn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xu extends Xn{constructor(t=new $,e=new $,n=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new $){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(cr(t,i.x,r.x,o.x),cr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class u0 extends Xn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(cr(t,i.x,r.x,o.x),cr(t,i.y,r.y,o.y),cr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yu extends Xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new $){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],h=i[o],c=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(nh(a,l.x,h.x,c.x,u.x),nh(a,l.y,h.y,c.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new $().fromArray(i))}return this}}var Cl=Object.freeze({__proto__:null,ArcCurve:t0,CatmullRomCurve3:e0,CubicBezierCurve:Hu,CubicBezierCurve3:c0,EllipseCurve:tc,LineCurve:Wu,LineCurve3:h0,QuadraticBezierCurve:Xu,QuadraticBezierCurve3:u0,SplineCurve:Yu});class d0 extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){const c=l[h];n&&n.equals(c)||(e.push(c),n=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Cl[i.type]().fromJSON(i))}return this}}class ih extends d0{constructor(t){super(),this.type="Path",this.currentPoint=new $,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Wu(this.currentPoint.clone(),new $(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Xu(this.currentPoint.clone(),new $(t,e),new $(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new Hu(this.currentPoint.clone(),new $(t,e),new $(n,i),new $(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Yu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+h,e+c,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const h=new tc(t,e,n,i,r,o,a,l);if(this.curves.length>0){const u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);const c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class qu extends ih{constructor(t){super(t),this.uuid=Fn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ih().fromJSON(i))}return this}}function f0(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=ju(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,h;if(n&&(r=x0(s,t,r,e)),s.length>80*e){a=1/0,l=1/0;let c=-1/0,u=-1/0;for(let d=e;d<i;d+=e){const f=s[d],g=s[d+1];f<a&&(a=f),g<l&&(l=g),f>c&&(c=f),g>u&&(u=g)}h=Math.max(c-a,u-l),h=h!==0?32767/h:0}return vr(r,o,e,a,l,h,0),o}function ju(s,t,e,n,i){let r;if(i===C0(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=sh(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=sh(o/n|0,s[o],s[o+1],r);return r&&zs(r,r.next)&&(Mr(r),r=r.next),r}function Ki(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(zs(e,e.next)||Ce(e.prev,e,e.next)===0)){if(Mr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function vr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&b0(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,h=s.next;if(r?m0(s,n,i,r):p0(s)){t.push(l.i,s.i,h.i),Mr(s),s=h.next,a=h.next;continue}if(s=h,s===a){o?o===1?(s=g0(Ki(s),t),vr(s,t,e,n,i,r,2)):o===2&&_0(s,t,e,n,i,r):vr(Ki(s),t,e,n,i,r,1);break}}}function p0(s){const t=s.prev,e=s,n=s.next;if(Ce(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,h=n.y,c=Math.min(i,r,o),u=Math.min(a,l,h),d=Math.max(i,r,o),f=Math.max(a,l,h);let g=n.next;for(;g!==t;){if(g.x>=c&&g.x<=d&&g.y>=u&&g.y<=f&&sr(i,a,r,l,o,h,g.x,g.y)&&Ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function m0(s,t,e,n){const i=s.prev,r=s,o=s.next;if(Ce(i,r,o)>=0)return!1;const a=i.x,l=r.x,h=o.x,c=i.y,u=r.y,d=o.y,f=Math.min(a,l,h),g=Math.min(c,u,d),_=Math.max(a,l,h),m=Math.max(c,u,d),p=Pl(f,g,t,e,n),y=Pl(_,m,t,e,n);let v=s.prevZ,x=s.nextZ;for(;v&&v.z>=p&&x&&x.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&sr(a,c,l,u,h,d,v.x,v.y)&&Ce(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&sr(a,c,l,u,h,d,x.x,x.y)&&Ce(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&sr(a,c,l,u,h,d,v.x,v.y)&&Ce(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&sr(a,c,l,u,h,d,x.x,x.y)&&Ce(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function g0(s,t){let e=s;do{const n=e.prev,i=e.next.next;!zs(n,i)&&Ku(n,e,e.next,i)&&yr(n,i)&&yr(i,n)&&(t.push(n.i,e.i,i.i),Mr(e),Mr(e.next),e=s=i),e=e.next}while(e!==s);return Ki(e)}function _0(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&T0(o,a)){let l=$u(o,a);o=Ki(o,o.next),l=Ki(l,l.next),vr(o,t,e,n,i,r,0),vr(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function x0(s,t,e,n){const i=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,h=ju(s,a,l,n,!1);h===h.next&&(h.steiner=!0),i.push(E0(h))}i.sort(v0);for(let r=0;r<i.length;r++)e=y0(i[r],e);return e}function v0(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function y0(s,t){const e=M0(s,t);if(!e)return t;const n=$u(e,s);return Ki(n,n.next),Ki(e,e.next)}function M0(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,o;if(zs(s,e))return e;do{if(zs(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,h=o.y;let c=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Zu(i<h?n:r,i,l,h,i<h?r:n,i,e.x,e.y)){const u=Math.abs(i-e.y)/(n-e.x);yr(e,s)&&(u<c||u===c&&(e.x>o.x||e.x===o.x&&S0(o,e)))&&(o=e,c=u)}e=e.next}while(e!==a);return o}function S0(s,t){return Ce(s.prev,s,t.prev)<0&&Ce(t.next,s,s.next)<0}function b0(s,t,e,n){let i=s;do i.z===0&&(i.z=Pl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,w0(i)}function w0(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let h=0;h<e&&(a++,o=o.nextZ,!!o);h++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function Pl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function E0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Zu(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function sr(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&Zu(s,t,e,n,i,r,o,a)}function T0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!A0(s,t)&&(yr(s,t)&&yr(t,s)&&R0(s,t)&&(Ce(s.prev,s,t.prev)||Ce(s,t.prev,t))||zs(s,t)&&Ce(s.prev,s,s.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function zs(s,t){return s.x===t.x&&s.y===t.y}function Ku(s,t,e,n){const i=Qr(Ce(s,t,e)),r=Qr(Ce(s,t,n)),o=Qr(Ce(e,n,s)),a=Qr(Ce(e,n,t));return!!(i!==r&&o!==a||i===0&&Jr(s,e,t)||r===0&&Jr(s,n,t)||o===0&&Jr(e,s,n)||a===0&&Jr(e,t,n))}function Jr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Qr(s){return s>0?1:s<0?-1:0}function A0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Ku(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function yr(s,t){return Ce(s.prev,s,s.next)<0?Ce(s,t,s.next)>=0&&Ce(s,s.prev,t)>=0:Ce(s,t,s.prev)<0||Ce(s,s.next,t)<0}function R0(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function $u(s,t){const e=Ll(s.i,s.x,s.y),n=Ll(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function sh(s,t,e,n){const i=Ll(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Mr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ll(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function C0(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class P0{static triangulate(t,e,n=2){return f0(t,e,n)}}class Ss{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Ss.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];rh(t),oh(n,t);let o=t.length;e.forEach(rh);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,oh(n,e[l]);const a=P0.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function rh(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function oh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class nc extends Ae{constructor(t=new qu([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const h=t[a];o(h)}this.setAttribute("position",new le(i,3)),this.setAttribute("uv",new le(r,2)),this.computeVertexNormals();function o(a){const l=[],h=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:L0;let v,x=!1,E,b,T,L;p&&(v=p.getSpacedPoints(c),x=!0,d=!1,E=p.computeFrenetFrames(c,!1),b=new R,T=new R,L=new R),d||(m=0,f=0,g=0,_=0);const S=a.extractPoints(h);let M=S.shape;const P=S.holes;if(!Ss.isClockWise(M)){M=M.reverse();for(let C=0,ct=P.length;C<ct;C++){const et=P[C];Ss.isClockWise(et)&&(P[C]=et.reverse())}}function U(C){const et=10000000000000001e-36;let ht=C[0];for(let Z=1;Z<=C.length;Z++){const vt=Z%C.length,nt=C[vt],yt=nt.x-ht.x,Ft=nt.y-ht.y,D=yt*yt+Ft*Ft,w=Math.max(Math.abs(nt.x),Math.abs(nt.y),Math.abs(ht.x),Math.abs(ht.y)),O=et*w*w;if(D<=O){C.splice(vt,1),Z--;continue}ht=nt}}U(M),P.forEach(U);const W=P.length,B=M;for(let C=0;C<W;C++){const ct=P[C];M=M.concat(ct)}function V(C,ct,et){return ct||console.error("THREE.ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(ct,et)}const K=M.length;function X(C,ct,et){let ht,Z,vt;const nt=C.x-ct.x,yt=C.y-ct.y,Ft=et.x-C.x,D=et.y-C.y,w=nt*nt+yt*yt,O=nt*D-yt*Ft;if(Math.abs(O)>Number.EPSILON){const Y=Math.sqrt(w),Q=Math.sqrt(Ft*Ft+D*D),q=ct.x-yt/Y,Ut=ct.y+nt/Y,pt=et.x-D/Q,Pt=et.y+Ft/Q,zt=((pt-q)*D-(Pt-Ut)*Ft)/(nt*D-yt*Ft);ht=q+nt*zt-C.x,Z=Ut+yt*zt-C.y;const tt=ht*ht+Z*Z;if(tt<=2)return new $(ht,Z);vt=Math.sqrt(tt/2)}else{let Y=!1;nt>Number.EPSILON?Ft>Number.EPSILON&&(Y=!0):nt<-Number.EPSILON?Ft<-Number.EPSILON&&(Y=!0):Math.sign(yt)===Math.sign(D)&&(Y=!0),Y?(ht=-yt,Z=nt,vt=Math.sqrt(w)):(ht=nt,Z=yt,vt=Math.sqrt(w/2))}return new $(ht/vt,Z/vt)}const ot=[];for(let C=0,ct=B.length,et=ct-1,ht=C+1;C<ct;C++,et++,ht++)et===ct&&(et=0),ht===ct&&(ht=0),ot[C]=X(B[C],B[et],B[ht]);const xt=[];let Tt,Zt=ot.concat();for(let C=0,ct=W;C<ct;C++){const et=P[C];Tt=[];for(let ht=0,Z=et.length,vt=Z-1,nt=ht+1;ht<Z;ht++,vt++,nt++)vt===Z&&(vt=0),nt===Z&&(nt=0),Tt[ht]=X(et[ht],et[vt],et[nt]);xt.push(Tt),Zt=Zt.concat(Tt)}let Xt;if(m===0)Xt=Ss.triangulateShape(B,P);else{const C=[],ct=[];for(let et=0;et<m;et++){const ht=et/m,Z=f*Math.cos(ht*Math.PI/2),vt=g*Math.sin(ht*Math.PI/2)+_;for(let nt=0,yt=B.length;nt<yt;nt++){const Ft=V(B[nt],ot[nt],vt);Ct(Ft.x,Ft.y,-Z),ht===0&&C.push(Ft)}for(let nt=0,yt=W;nt<yt;nt++){const Ft=P[nt];Tt=xt[nt];const D=[];for(let w=0,O=Ft.length;w<O;w++){const Y=V(Ft[w],Tt[w],vt);Ct(Y.x,Y.y,-Z),ht===0&&D.push(Y)}ht===0&&ct.push(D)}}Xt=Ss.triangulateShape(C,ct)}const j=Xt.length,lt=g+_;for(let C=0;C<K;C++){const ct=d?V(M[C],Zt[C],lt):M[C];x?(T.copy(E.normals[0]).multiplyScalar(ct.x),b.copy(E.binormals[0]).multiplyScalar(ct.y),L.copy(v[0]).add(T).add(b),Ct(L.x,L.y,L.z)):Ct(ct.x,ct.y,0)}for(let C=1;C<=c;C++)for(let ct=0;ct<K;ct++){const et=d?V(M[ct],Zt[ct],lt):M[ct];x?(T.copy(E.normals[C]).multiplyScalar(et.x),b.copy(E.binormals[C]).multiplyScalar(et.y),L.copy(v[C]).add(T).add(b),Ct(L.x,L.y,L.z)):Ct(et.x,et.y,u/c*C)}for(let C=m-1;C>=0;C--){const ct=C/m,et=f*Math.cos(ct*Math.PI/2),ht=g*Math.sin(ct*Math.PI/2)+_;for(let Z=0,vt=B.length;Z<vt;Z++){const nt=V(B[Z],ot[Z],ht);Ct(nt.x,nt.y,u+et)}for(let Z=0,vt=P.length;Z<vt;Z++){const nt=P[Z];Tt=xt[Z];for(let yt=0,Ft=nt.length;yt<Ft;yt++){const D=V(nt[yt],Tt[yt],ht);x?Ct(D.x,D.y+v[c-1].y,v[c-1].x+et):Ct(D.x,D.y,u+et)}}}It(),_t();function It(){const C=i.length/3;if(d){let ct=0,et=K*ct;for(let ht=0;ht<j;ht++){const Z=Xt[ht];bt(Z[2]+et,Z[1]+et,Z[0]+et)}ct=c+m*2,et=K*ct;for(let ht=0;ht<j;ht++){const Z=Xt[ht];bt(Z[0]+et,Z[1]+et,Z[2]+et)}}else{for(let ct=0;ct<j;ct++){const et=Xt[ct];bt(et[2],et[1],et[0])}for(let ct=0;ct<j;ct++){const et=Xt[ct];bt(et[0]+K*c,et[1]+K*c,et[2]+K*c)}}n.addGroup(C,i.length/3-C,0)}function _t(){const C=i.length/3;let ct=0;st(B,ct),ct+=B.length;for(let et=0,ht=P.length;et<ht;et++){const Z=P[et];st(Z,ct),ct+=Z.length}n.addGroup(C,i.length/3-C,1)}function st(C,ct){let et=C.length;for(;--et>=0;){const ht=et;let Z=et-1;Z<0&&(Z=C.length-1);for(let vt=0,nt=c+m*2;vt<nt;vt++){const yt=K*vt,Ft=K*(vt+1),D=ct+ht+yt,w=ct+Z+yt,O=ct+Z+Ft,Y=ct+ht+Ft;ae(D,w,O,Y)}}}function Ct(C,ct,et){l.push(C),l.push(ct),l.push(et)}function bt(C,ct,et){ne(C),ne(ct),ne(et);const ht=i.length/3,Z=y.generateTopUV(n,i,ht-3,ht-2,ht-1);Vt(Z[0]),Vt(Z[1]),Vt(Z[2])}function ae(C,ct,et,ht){ne(C),ne(ct),ne(ht),ne(ct),ne(et),ne(ht);const Z=i.length/3,vt=y.generateSideWallUV(n,i,Z-6,Z-3,Z-2,Z-1);Vt(vt[0]),Vt(vt[1]),Vt(vt[3]),Vt(vt[1]),Vt(vt[2]),Vt(vt[3])}function ne(C){i.push(l[C*3+0]),i.push(l[C*3+1]),i.push(l[C*3+2])}function Vt(C){r.push(C.x),r.push(C.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return D0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Cl[i.type]().fromJSON(i)),new nc(n,t.options)}}const L0={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],h=t[i*3],c=t[i*3+1];return[new $(r,o),new $(a,l),new $(h,c)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[n*3],c=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-c)<Math.abs(o-h)?[new $(o,1-l),new $(h,1-u),new $(d,1-g),new $(_,1-p)]:[new $(a,1-l),new $(c,1-u),new $(f,1-g),new $(m,1-p)]}};function D0(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class zo extends Ql{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new zo(t.radius,t.detail)}}class oe extends Ae{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),h=a+1,c=l+1,u=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<c;p++){const y=p*d-o;for(let v=0;v<h;v++){const x=v*u-r;g.push(x,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const v=y+h*p,x=y+h*(p+1),E=y+1+h*(p+1),b=y+1+h*p;f.push(v,x,b),f.push(x,E,b)}this.setIndex(f),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.width,t.height,t.widthSegments,t.heightSegments)}}class oi extends Ae{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let h=0;const c=[],u=new R,d=new R,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],v=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let E=0;E<=e;E++){const b=E/e;u.x=-t*Math.cos(i+b*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+b*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(b+x,1-v),y.push(h++)}c.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const v=c[p][y+1],x=c[p][y],E=c[p+1][y],b=c[p+1][y+1];(p!==0||o>0)&&f.push(v,x,b),(p!==n-1||l<Math.PI)&&f.push(x,E,b)}this.setIndex(f),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class No extends Ae{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],h=[],c=new R,u=new R,d=new R;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),c.x=t*Math.cos(_),c.y=t*Math.sin(_),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(g/i),h.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,y=(i+1)*f+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new No(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class I0 extends We{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ut extends Ji{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tu,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class U0 extends Ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class z0 extends Ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Fo extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class N0 extends Fo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const xa=new jt,ah=new R,lh=new R;class ic{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jl,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ah.setFromMatrixPosition(t.matrixWorld),e.position.copy(ah),lh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lh),e.updateMatrixWorld(),xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class F0 extends ic{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Is*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class va extends Fo{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new F0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const ch=new jt,tr=new R,ya=new R;class k0 extends ic{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),tr.setFromMatrixPosition(t.matrixWorld),n.position.copy(tr),ya.copy(n.position),ya.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ya),n.updateMatrixWorld(),i.makeTranslation(-tr.x,-tr.y,-tr.z),ch.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ch)}}class Jn extends Fo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new k0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class sc extends Uu{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class O0 extends ic{constructor(){super(new sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hh extends Fo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new O0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class B0 extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ju{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class uh{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ee(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class V0 extends $i{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function dh(s,t,e,n){const i=G0(n);switch(e){case Su:return s*t;case Hl:return s*t/i.components*i.byteLength;case Wl:return s*t/i.components*i.byteLength;case wu:return s*t*2/i.components*i.byteLength;case Xl:return s*t*2/i.components*i.byteLength;case bu:return s*t*3/i.components*i.byteLength;case An:return s*t*4/i.components*i.byteLength;case Yl:return s*t*4/i.components*i.byteLength;case fo:case po:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case mo:case go:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case il:case rl:return Math.max(s,16)*Math.max(t,8)/4;case nl:case sl:return Math.max(s,8)*Math.max(t,8)/2;case ol:case al:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ll:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case cl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case hl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ul:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case dl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case fl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case pl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ml:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case gl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case _l:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case xl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case vl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case yl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ml:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Sl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case _o:case bl:case wl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Eu:case El:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Tl:case Al:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function G0(s){switch(s){case Wn:case vu:return{byteLength:1,components:1};case pr:case yu:case Hn:return{byteLength:2,components:1};case Vl:case Gl:return{byteLength:2,components:4};case ji:case Bl:case Nn:return{byteLength:4,components:1};case Mu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qu(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function H0(s){const t=new WeakMap;function e(a,l){const h=a.array,c=a.usage,u=h.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,h,c),a.onUploadCallback();let f;if(h instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=s.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=s.SHORT;else if(h instanceof Uint32Array)f=s.UNSIGNED_INT;else if(h instanceof Int32Array)f=s.INT;else if(h instanceof Int8Array)f=s.BYTE;else if(h instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,h){const c=l.array,u=l.updateRanges;if(s.bindBuffer(h,a),u.length===0)s.bufferSubData(h,0,c);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(h,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:i,remove:r,update:o}}var W0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,X0=`#ifdef USE_ALPHAHASH
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
#endif`,Y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K0=`#ifdef USE_AOMAP
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
#endif`,$0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J0=`#ifdef USE_BATCHING
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
#endif`,Q0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,np=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ip=`#ifdef USE_IRIDESCENCE
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
#endif`,sp=`#ifdef USE_BUMPMAP
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
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fp=`#define PI 3.141592653589793
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
} // validated`,pp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mp=`vec3 transformedNormal = objectNormal;
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
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sp=`#ifdef USE_ENVMAP
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
#endif`,bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lp=`#ifdef USE_GRADIENTMAP
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
}`,Dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zp=`uniform bool receiveShadow;
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
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vp=`PhysicalMaterial material;
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
#endif`,Gp=`struct PhysicalMaterial {
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
}`,Hp=`
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
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qp=`#if defined( USE_POINTS_UV )
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
#endif`,tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
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
#endif`,om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dm=`#ifdef USE_NORMALMAP
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
#endif`,fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rm=`float getShadowMask() {
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
}`,Cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pm=`#ifdef USE_SKINNING
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
#endif`,Lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dm=`#ifdef USE_SKINNING
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
#endif`,Im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fm=`#ifdef USE_TRANSMISSION
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
#endif`,km=`#ifdef USE_TRANSMISSION
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wm=`uniform sampler2D t2D;
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
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`#include <common>
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
}`,Km=`#if DEPTH_PACKING == 3200
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
}`,$m=`#define DISTANCE
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
}`,Jm=`#define DISTANCE
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`uniform float scale;
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#include <common>
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
}`,sg=`uniform vec3 diffuse;
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
}`,rg=`#define LAMBERT
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
}`,og=`#define LAMBERT
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
}`,ag=`#define MATCAP
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
}`,lg=`#define MATCAP
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
}`,cg=`#define NORMAL
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
}`,hg=`#define NORMAL
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
}`,ug=`#define PHONG
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
}`,dg=`#define PHONG
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
}`,fg=`#define STANDARD
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
}`,pg=`#define STANDARD
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
}`,mg=`#define TOON
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
}`,gg=`#define TOON
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
}`,_g=`uniform float size;
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
}`,xg=`uniform vec3 diffuse;
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
}`,vg=`#include <common>
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
}`,yg=`uniform vec3 color;
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
}`,Mg=`uniform float rotation;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:W0,alphahash_pars_fragment:X0,alphamap_fragment:Y0,alphamap_pars_fragment:q0,alphatest_fragment:j0,alphatest_pars_fragment:Z0,aomap_fragment:K0,aomap_pars_fragment:$0,batching_pars_vertex:J0,batching_vertex:Q0,begin_vertex:tp,beginnormal_vertex:ep,bsdfs:np,iridescence_fragment:ip,bumpmap_pars_fragment:sp,clipping_planes_fragment:rp,clipping_planes_pars_fragment:op,clipping_planes_pars_vertex:ap,clipping_planes_vertex:lp,color_fragment:cp,color_pars_fragment:hp,color_pars_vertex:up,color_vertex:dp,common:fp,cube_uv_reflection_fragment:pp,defaultnormal_vertex:mp,displacementmap_pars_vertex:gp,displacementmap_vertex:_p,emissivemap_fragment:xp,emissivemap_pars_fragment:vp,colorspace_fragment:yp,colorspace_pars_fragment:Mp,envmap_fragment:Sp,envmap_common_pars_fragment:bp,envmap_pars_fragment:wp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Np,envmap_vertex:Tp,fog_vertex:Ap,fog_pars_vertex:Rp,fog_fragment:Cp,fog_pars_fragment:Pp,gradientmap_pars_fragment:Lp,lightmap_pars_fragment:Dp,lights_lambert_fragment:Ip,lights_lambert_pars_fragment:Up,lights_pars_begin:zp,lights_toon_fragment:Fp,lights_toon_pars_fragment:kp,lights_phong_fragment:Op,lights_phong_pars_fragment:Bp,lights_physical_fragment:Vp,lights_physical_pars_fragment:Gp,lights_fragment_begin:Hp,lights_fragment_maps:Wp,lights_fragment_end:Xp,logdepthbuf_fragment:Yp,logdepthbuf_pars_fragment:qp,logdepthbuf_pars_vertex:jp,logdepthbuf_vertex:Zp,map_fragment:Kp,map_pars_fragment:$p,map_particle_fragment:Jp,map_particle_pars_fragment:Qp,metalnessmap_fragment:tm,metalnessmap_pars_fragment:em,morphinstance_vertex:nm,morphcolor_vertex:im,morphnormal_vertex:sm,morphtarget_pars_vertex:rm,morphtarget_vertex:om,normal_fragment_begin:am,normal_fragment_maps:lm,normal_pars_fragment:cm,normal_pars_vertex:hm,normal_vertex:um,normalmap_pars_fragment:dm,clearcoat_normal_fragment_begin:fm,clearcoat_normal_fragment_maps:pm,clearcoat_pars_fragment:mm,iridescence_pars_fragment:gm,opaque_fragment:_m,packing:xm,premultiplied_alpha_fragment:vm,project_vertex:ym,dithering_fragment:Mm,dithering_pars_fragment:Sm,roughnessmap_fragment:bm,roughnessmap_pars_fragment:wm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:Tm,shadowmap_vertex:Am,shadowmask_pars_fragment:Rm,skinbase_vertex:Cm,skinning_pars_vertex:Pm,skinning_vertex:Lm,skinnormal_vertex:Dm,specularmap_fragment:Im,specularmap_pars_fragment:Um,tonemapping_fragment:zm,tonemapping_pars_fragment:Nm,transmission_fragment:Fm,transmission_pars_fragment:km,uv_pars_fragment:Om,uv_pars_vertex:Bm,uv_vertex:Vm,worldpos_vertex:Gm,background_vert:Hm,background_frag:Wm,backgroundCube_vert:Xm,backgroundCube_frag:Ym,cube_vert:qm,cube_frag:jm,depth_vert:Zm,depth_frag:Km,distanceRGBA_vert:$m,distanceRGBA_frag:Jm,equirect_vert:Qm,equirect_frag:tg,linedashed_vert:eg,linedashed_frag:ng,meshbasic_vert:ig,meshbasic_frag:sg,meshlambert_vert:rg,meshlambert_frag:og,meshmatcap_vert:ag,meshmatcap_frag:lg,meshnormal_vert:cg,meshnormal_frag:hg,meshphong_vert:ug,meshphong_frag:dg,meshphysical_vert:fg,meshphysical_frag:pg,meshtoon_vert:mg,meshtoon_frag:gg,points_vert:_g,points_frag:xg,shadow_vert:vg,shadow_frag:yg,sprite_vert:Mg,sprite_frag:Sg},gt={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Vn={basic:{uniforms:tn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:tn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new dt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:tn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:tn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:tn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new dt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:tn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:tn([gt.points,gt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:tn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:tn([gt.common,gt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:tn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:tn([gt.sprite,gt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:tn([gt.common,gt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:tn([gt.lights,gt.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Vn.physical={uniforms:tn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new $(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new $},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const to={r:0,b:0,g:0},zi=new Ke,bg=new jt;function wg(s,t,e,n,i,r,o){const a=new dt(0);let l=r===!0?0:1,h,c,u=null,d=0,f=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?e:t).get(x)),x}function _(v){let x=!1;const E=g(v);E===null?p(a,l):E&&E.isColor&&(p(E,1),x=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(v,x){const E=g(x);E&&(E.isCubeTexture||E.mapping===Do)?(c===void 0&&(c=new re(new xn(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:Us(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),zi.copy(x.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bg.makeRotationFromEuler(zi)),c.material.toneMapped=he.getTransfer(E.colorSpace)!==me,(u!==E||d!==E.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(h===void 0&&(h=new re(new oe(2,2),new We({name:"BackgroundMaterial",uniforms:Us(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=E,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=he.getTransfer(E.colorSpace)!==me,E.matrixAutoUpdate===!0&&E.updateMatrix(),h.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null))}function p(v,x){v.getRGB(to,Iu(s)),n.buffers.color.setClear(to.r,to.g,to.b,x,o)}function y(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:m,dispose:y}}function Eg(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(M,P,N,U,W){let B=!1;const V=u(U,N,P);r!==V&&(r=V,h(r.object)),B=f(M,U,N,W),B&&g(M,U,N,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,x(M,P,N,U),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return s.createVertexArray()}function h(M){return s.bindVertexArray(M)}function c(M){return s.deleteVertexArray(M)}function u(M,P,N){const U=N.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let B=W[P.id];B===void 0&&(B={},W[P.id]=B);let V=B[U];return V===void 0&&(V=d(l()),B[U]=V),V}function d(M){const P=[],N=[],U=[];for(let W=0;W<e;W++)P[W]=0,N[W]=0,U[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:U,object:M,attributes:{},index:null}}function f(M,P,N,U){const W=r.attributes,B=P.attributes;let V=0;const K=N.getAttributes();for(const X in K)if(K[X].location>=0){const xt=W[X];let Tt=B[X];if(Tt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(Tt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(Tt=M.instanceColor)),xt===void 0||xt.attribute!==Tt||Tt&&xt.data!==Tt.data)return!0;V++}return r.attributesNum!==V||r.index!==U}function g(M,P,N,U){const W={},B=P.attributes;let V=0;const K=N.getAttributes();for(const X in K)if(K[X].location>=0){let xt=B[X];xt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor));const Tt={};Tt.attribute=xt,xt&&xt.data&&(Tt.data=xt.data),W[X]=Tt,V++}r.attributes=W,r.attributesNum=V,r.index=U}function _(){const M=r.newAttributes;for(let P=0,N=M.length;P<N;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const N=r.newAttributes,U=r.enabledAttributes,W=r.attributeDivisors;N[M]=1,U[M]===0&&(s.enableVertexAttribArray(M),U[M]=1),W[M]!==P&&(s.vertexAttribDivisor(M,P),W[M]=P)}function y(){const M=r.newAttributes,P=r.enabledAttributes;for(let N=0,U=P.length;N<U;N++)P[N]!==M[N]&&(s.disableVertexAttribArray(N),P[N]=0)}function v(M,P,N,U,W,B,V){V===!0?s.vertexAttribIPointer(M,P,N,W,B):s.vertexAttribPointer(M,P,N,U,W,B)}function x(M,P,N,U){_();const W=U.attributes,B=N.getAttributes(),V=P.defaultAttributeValues;for(const K in B){const X=B[K];if(X.location>=0){let ot=W[K];if(ot===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(ot=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(ot=M.instanceColor)),ot!==void 0){const xt=ot.normalized,Tt=ot.itemSize,Zt=t.get(ot);if(Zt===void 0)continue;const Xt=Zt.buffer,j=Zt.type,lt=Zt.bytesPerElement,It=j===s.INT||j===s.UNSIGNED_INT||ot.gpuType===Bl;if(ot.isInterleavedBufferAttribute){const _t=ot.data,st=_t.stride,Ct=ot.offset;if(_t.isInstancedInterleavedBuffer){for(let bt=0;bt<X.locationSize;bt++)p(X.location+bt,_t.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let bt=0;bt<X.locationSize;bt++)m(X.location+bt);s.bindBuffer(s.ARRAY_BUFFER,Xt);for(let bt=0;bt<X.locationSize;bt++)v(X.location+bt,Tt/X.locationSize,j,xt,st*lt,(Ct+Tt/X.locationSize*bt)*lt,It)}else{if(ot.isInstancedBufferAttribute){for(let _t=0;_t<X.locationSize;_t++)p(X.location+_t,ot.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let _t=0;_t<X.locationSize;_t++)m(X.location+_t);s.bindBuffer(s.ARRAY_BUFFER,Xt);for(let _t=0;_t<X.locationSize;_t++)v(X.location+_t,Tt/X.locationSize,j,xt,Tt*lt,Tt/X.locationSize*_t*lt,It)}}else if(V!==void 0){const xt=V[K];if(xt!==void 0)switch(xt.length){case 2:s.vertexAttrib2fv(X.location,xt);break;case 3:s.vertexAttrib3fv(X.location,xt);break;case 4:s.vertexAttrib4fv(X.location,xt);break;default:s.vertexAttrib1fv(X.location,xt)}}}}y()}function E(){L();for(const M in n){const P=n[M];for(const N in P){const U=P[N];for(const W in U)c(U[W].object),delete U[W];delete P[N]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const N in P){const U=P[N];for(const W in U)c(U[W].object),delete U[W];delete P[N]}delete n[M.id]}function T(M){for(const P in n){const N=n[P];if(N[M.id]===void 0)continue;const U=N[M.id];for(const W in U)c(U[W].object),delete U[W];delete N[M.id]}}function L(){S(),o=!0,r!==i&&(r=i,h(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Tg(s,t,e){let n;function i(h){n=h}function r(h,c){s.drawArrays(n,h,c),e.update(c,n,1)}function o(h,c,u){u!==0&&(s.drawArraysInstanced(n,h,c,u),e.update(c,n,u))}function a(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,c,0,u);let f=0;for(let g=0;g<u;g++)f+=c[g];e.update(f,n,1)}function l(h,c,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)o(h[g],c[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,c,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=c[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ag(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==An&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const L=T===Hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Wn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Nn&&!L)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:E,maxSamples:b}}function Rg(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new yi,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=c(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?c(null):h();else{const y=r?0:n,v=y*4;let x=p.clippingState||null;l.value=x,x=c(g,d,v,f);for(let E=0;E!==v;++E)x[E]=e[E];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=f;v!==_;++v,x+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Cg(s){let t=new WeakMap;function e(o,a){return a===Qa?o.mapping=Ps:a===tl&&(o.mapping=Ls),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qa||a===tl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new Bf(l.height);return h.fromEquirectangularTexture(s,o),t.set(o,h),o.addEventListener("dispose",i),e(h.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const bs=4,fh=[.125,.215,.35,.446,.526,.582],Hi=20,Ma=new sc,ph=new dt;let Sa=null,ba=0,wa=0,Ea=!1;const Vi=(1+Math.sqrt(5))/2,vs=1/Vi,mh=[new R(-Vi,vs,0),new R(Vi,vs,0),new R(-vs,0,Vi),new R(vs,0,Vi),new R(0,Vi,-vs),new R(0,Vi,vs),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Pg=new R;class Dl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=Pg}=r;Sa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sa,ba,wa),this._renderer.xr.enabled=Ea,t.scissorTest=!1,eo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ps||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Hn,format:An,colorSpace:Ds,depthBuffer:!1},i=gh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lg(r)),this._blurMaterial=Dg(r,t,e)}return i}_compileMaterial(t){const e=new re(this._lodPlanes[0],t);this._renderer.compile(e,Ma)}_sceneToCubeUV(t,e,n,i,r){const l=new ln(90,1,e,n),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(ph),u.toneMapping=wi,u.autoClear=!1;const g=new Ne({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),_=new re(new xn,g);let m=!1;const p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,m=!0):(g.color.copy(ph),m=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,h[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+c[y],r.y,r.z)):v===1?(l.up.set(0,0,h[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+c[y],r.z)):(l.up.set(0,h[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+c[y]));const x=this._cubeSize;eo(i,v*x,y>2?x:0,x,x),u.setRenderTarget(i),m&&u.render(_,l),u.render(t,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ps||t.mapping===Ls;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_h());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new re(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;eo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ma)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=mh[(i-r-1)%mh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new re(this._lodPlanes[i],h),d=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Hi-1),_=r/g,m=isFinite(r)?1+Math.floor(c*_):Hi;m>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);const p=[];let y=0;for(let T=0;T<Hi;++T){const L=T/_,S=Math.exp(-L*L/2);p.push(S),T===0?y+=S:T<m&&(y+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const x=this._sizeLods[i],E=3*x*(i>v-bs?i-v+bs:0),b=4*(this._cubeSize-x);eo(e,E,b,3*x,2*x),l.setRenderTarget(e),l.render(u,Ma)}}function Lg(s){const t=[],e=[],n=[];let i=s;const r=s-bs+1+fh.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-bs?l=fh[o-s+bs-1]:o===0&&(l=0),n.push(l);const h=1/(a-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),v=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let b=0;b<f;b++){const T=b%3*2/3-1,L=b>2?0:-1,S=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];y.set(S,_*g*b),v.set(d,m*g*b);const M=[b,b,b,b,b,b];x.set(M,p*g*b)}const E=new Ae;E.setAttribute("position",new De(y,_)),E.setAttribute("uv",new De(v,m)),E.setAttribute("faceIndex",new De(x,p)),t.push(E),i>bs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function gh(s,t,e){const n=new Rn(s,t,e);return n.texture.mapping=Do,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function eo(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Dg(s,t,e){const n=new Float32Array(Hi),i=new R(0,1,0);return new We({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:rc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function _h(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function xh(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function rc(){return`

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
	`}function Ig(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,h=l===Qa||l===tl,c=l===Ps||l===Ls;if(h||c){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Dl(s)),u=h?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return h&&f&&f.height>0||c&&f&&i(f)?(e===null&&(e=new Dl(s)),u=h?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const h=6;for(let c=0;c<h;c++)a[c]!==void 0&&l++;return l===h}function r(a){const l=a.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ug(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ts("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function zg(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],s.ARRAY_BUFFER)}function h(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let v=0,x=y.length;v<x;v+=3){const E=y[v+0],b=y[v+1],T=y[v+2];d.push(E,b,b,T,T,E)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const E=v+0,b=v+1,T=v+2;d.push(E,b,b,T,T,E)}}else return;const m=new(Ru(d)?Du:Zl)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function c(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:c}}function Ng(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function h(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function c(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)h(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Fg(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function kg(s,t,e){const n=new WeakMap,i=new de;function r(o,a,l){const h=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=c!==void 0?c.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let E=a.attributes.position.count*x,b=1;E>t.maxTextureSize&&(b=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const T=new Float32Array(E*b*4*u),L=new Cu(T,E,b,u);L.type=Nn,L.needsUpdate=!0;const S=x*4;for(let P=0;P<u;P++){const N=p[P],U=y[P],W=v[P],B=E*b*4*P;for(let V=0;V<N.count;V++){const K=V*S;g===!0&&(i.fromBufferAttribute(N,V),T[B+K+0]=i.x,T[B+K+1]=i.y,T[B+K+2]=i.z,T[B+K+3]=0),_===!0&&(i.fromBufferAttribute(U,V),T[B+K+4]=i.x,T[B+K+5]=i.y,T[B+K+6]=i.z,T[B+K+7]=0),m===!0&&(i.fromBufferAttribute(W,V),T[B+K+8]=i.x,T[B+K+9]=i.y,T[B+K+10]=i.z,T[B+K+11]=W.itemSize===4?i.w:1)}}d={count:u,texture:L,size:new $(E,b)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<h.length;m++)g+=h[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",h)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Og(s,t,e,n){let i=new WeakMap;function r(l){const h=n.render.frame,c=l.geometry,u=t.get(l,c);if(i.get(u)!==h&&(t.update(u),i.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==h&&(d.update(),i.set(d,h))}return u}function o(){i=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}const td=new Ze,vh=new Gu(1,1),ed=new Cu,nd=new wf,id=new zu,yh=[],Mh=[],Sh=new Float32Array(16),bh=new Float32Array(9),wh=new Float32Array(4);function Os(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=yh[i];if(r===void 0&&(r=new Float32Array(i),yh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Be(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ve(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ko(s,t){let e=Mh[t];e===void 0&&(e=new Int32Array(t),Mh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Bg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Vg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2fv(this.addr,t),Ve(e,t)}}function Gg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;s.uniform3fv(this.addr,t),Ve(e,t)}}function Hg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4fv(this.addr,t),Ve(e,t)}}function Wg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(Be(e,n))return;wh.set(n),s.uniformMatrix2fv(this.addr,!1,wh),Ve(e,n)}}function Xg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(Be(e,n))return;bh.set(n),s.uniformMatrix3fv(this.addr,!1,bh),Ve(e,n)}}function Yg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(Be(e,n))return;Sh.set(n),s.uniformMatrix4fv(this.addr,!1,Sh),Ve(e,n)}}function qg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function jg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2iv(this.addr,t),Ve(e,t)}}function Zg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3iv(this.addr,t),Ve(e,t)}}function Kg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4iv(this.addr,t),Ve(e,t)}}function $g(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Jg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2uiv(this.addr,t),Ve(e,t)}}function Qg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3uiv(this.addr,t),Ve(e,t)}}function t_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4uiv(this.addr,t),Ve(e,t)}}function e_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(vh.compareFunction=Au,r=vh):r=td,e.setTexture2D(t||r,i)}function n_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||nd,i)}function i_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||id,i)}function s_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ed,i)}function r_(s){switch(s){case 5126:return Bg;case 35664:return Vg;case 35665:return Gg;case 35666:return Hg;case 35674:return Wg;case 35675:return Xg;case 35676:return Yg;case 5124:case 35670:return qg;case 35667:case 35671:return jg;case 35668:case 35672:return Zg;case 35669:case 35673:return Kg;case 5125:return $g;case 36294:return Jg;case 36295:return Qg;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return n_;case 35680:case 36300:case 36308:case 36293:return i_;case 36289:case 36303:case 36311:case 36292:return s_}}function o_(s,t){s.uniform1fv(this.addr,t)}function a_(s,t){const e=Os(t,this.size,2);s.uniform2fv(this.addr,e)}function l_(s,t){const e=Os(t,this.size,3);s.uniform3fv(this.addr,e)}function c_(s,t){const e=Os(t,this.size,4);s.uniform4fv(this.addr,e)}function h_(s,t){const e=Os(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function u_(s,t){const e=Os(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function d_(s,t){const e=Os(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function f_(s,t){s.uniform1iv(this.addr,t)}function p_(s,t){s.uniform2iv(this.addr,t)}function m_(s,t){s.uniform3iv(this.addr,t)}function g_(s,t){s.uniform4iv(this.addr,t)}function __(s,t){s.uniform1uiv(this.addr,t)}function x_(s,t){s.uniform2uiv(this.addr,t)}function v_(s,t){s.uniform3uiv(this.addr,t)}function y_(s,t){s.uniform4uiv(this.addr,t)}function M_(s,t,e){const n=this.cache,i=t.length,r=ko(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||td,r[o])}function S_(s,t,e){const n=this.cache,i=t.length,r=ko(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||nd,r[o])}function b_(s,t,e){const n=this.cache,i=t.length,r=ko(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||id,r[o])}function w_(s,t,e){const n=this.cache,i=t.length,r=ko(e,i);Be(n,r)||(s.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ed,r[o])}function E_(s){switch(s){case 5126:return o_;case 35664:return a_;case 35665:return l_;case 35666:return c_;case 35674:return h_;case 35675:return u_;case 35676:return d_;case 5124:case 35670:return f_;case 35667:case 35671:return p_;case 35668:case 35672:return m_;case 35669:case 35673:return g_;case 5125:return __;case 36294:return x_;case 36295:return v_;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return M_;case 35679:case 36299:case 36307:return S_;case 35680:case 36300:case 36308:case 36293:return b_;case 36289:case 36303:case 36311:case 36292:return w_}}class T_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=r_(e.type)}}class A_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=E_(e.type)}}class R_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function Eh(s,t){s.seq.push(t),s.map[t.id]=t}function C_(s,t,e){const n=s.name,i=n.length;for(Ta.lastIndex=0;;){const r=Ta.exec(n),o=Ta.lastIndex;let a=r[1];const l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===i){Eh(e,h===void 0?new T_(a,s,t):new A_(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new R_(a),Eh(e,u)),e=u}}}class vo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);C_(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Th(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const P_=37297;let L_=0;function D_(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Ah=new Qt;function I_(s){he._getMatrix(Ah,he.workingColorSpace,s);const t=`mat3( ${Ah.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(s)){case So:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Rh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+D_(s.getShaderSource(t),o)}else return i}function U_(s,t){const e=I_(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function z_(s,t){let e;switch(t){case du:e="Linear";break;case fu:e="Reinhard";break;case pu:e="Cineon";break;case Ol:e="ACESFilmic";break;case gu:e="AgX";break;case _u:e="Neutral";break;case mu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const no=new R;function N_(){he.getLuminanceCoefficients(no);const s=no.x.toFixed(4),t=no.y.toFixed(4),e=no.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function k_(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function O_(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function rr(s){return s!==""}function Ch(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ph(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const B_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Il(s){return s.replace(B_,G_)}const V_=new Map;function G_(s,t){let e=te[t];if(e===void 0){const n=V_.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Il(e)}const H_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lh(s){return s.replace(H_,W_)}function W_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Dh(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function X_(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===cu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===hu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ti&&(t="SHADOWMAP_TYPE_VSM"),t}function Y_(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ps:case Ls:t="ENVMAP_TYPE_CUBE";break;case Do:t="ENVMAP_TYPE_CUBE_UV";break}return t}function q_(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ls:t="ENVMAP_MODE_REFRACTION";break}return t}function j_(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case uu:t="ENVMAP_BLENDING_MULTIPLY";break;case kd:t="ENVMAP_BLENDING_MIX";break;case Od:t="ENVMAP_BLENDING_ADD";break}return t}function Z_(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function K_(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=X_(e),h=Y_(e),c=q_(e),u=j_(e),d=Z_(e),f=F_(e),g=k_(r),_=i.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(rr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(rr).join(`
`),p.length>0&&(p+=`
`)):(m=[Dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),p=[Dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wi?"#define TONE_MAPPING":"",e.toneMapping!==wi?te.tonemapping_pars_fragment:"",e.toneMapping!==wi?z_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,U_("linearToOutputTexel",e.outputColorSpace),N_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rr).join(`
`)),o=Il(o),o=Ch(o,e),o=Ph(o,e),a=Il(a),a=Ch(a,e),a=Ph(a,e),o=Lh(o),a=Lh(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+m+o,x=y+p+a,E=Th(i,i.VERTEX_SHADER,v),b=Th(i,i.FRAGMENT_SHADER,x);i.attachShader(_,E),i.attachShader(_,b),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(P){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(_).trim(),U=i.getShaderInfoLog(E).trim(),W=i.getShaderInfoLog(b).trim();let B=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,E,b);else{const K=Rh(i,E,"vertex"),X=Rh(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+K+`
`+X)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(U===""||W==="")&&(V=!1);V&&(P.diagnostics={runnable:B,programLog:N,vertexShader:{log:U,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(E),i.deleteShader(b),L=new vo(i,_),S=O_(i,_)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,P_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=L_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=b,this}let $_=0;class J_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Q_(t),e.set(t,n)),n}}class Q_{constructor(t){this.id=$_++,this.code=t,this.usedTimes=0}}function t1(s,t,e,n,i,r,o){const a=new Pu,l=new J_,h=new Set,c=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return h.add(S),S===0?"uv":`uv${S}`}function m(S,M,P,N,U){const W=N.fog,B=U.geometry,V=S.isMeshStandardMaterial?N.environment:null,K=(S.isMeshStandardMaterial?e:t).get(S.envMap||V),X=K&&K.mapping===Do?K.image.height:null,ot=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const xt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Tt=xt!==void 0?xt.length:0;let Zt=0;B.morphAttributes.position!==void 0&&(Zt=1),B.morphAttributes.normal!==void 0&&(Zt=2),B.morphAttributes.color!==void 0&&(Zt=3);let Xt,j,lt,It;if(ot){const pe=Vn[ot];Xt=pe.vertexShader,j=pe.fragmentShader}else Xt=S.vertexShader,j=S.fragmentShader,l.update(S),lt=l.getVertexShaderID(S),It=l.getFragmentShaderID(S);const _t=s.getRenderTarget(),st=s.state.buffers.depth.getReversed(),Ct=U.isInstancedMesh===!0,bt=U.isBatchedMesh===!0,ae=!!S.map,ne=!!S.matcap,Vt=!!K,C=!!S.aoMap,ct=!!S.lightMap,et=!!S.bumpMap,ht=!!S.normalMap,Z=!!S.displacementMap,vt=!!S.emissiveMap,nt=!!S.metalnessMap,yt=!!S.roughnessMap,Ft=S.anisotropy>0,D=S.clearcoat>0,w=S.dispersion>0,O=S.iridescence>0,Y=S.sheen>0,Q=S.transmission>0,q=Ft&&!!S.anisotropyMap,Ut=D&&!!S.clearcoatMap,pt=D&&!!S.clearcoatNormalMap,Pt=D&&!!S.clearcoatRoughnessMap,zt=O&&!!S.iridescenceMap,tt=O&&!!S.iridescenceThicknessMap,wt=Y&&!!S.sheenColorMap,Ht=Y&&!!S.sheenRoughnessMap,Gt=!!S.specularMap,mt=!!S.specularColorMap,Kt=!!S.specularIntensityMap,z=Q&&!!S.transmissionMap,Mt=Q&&!!S.thicknessMap,it=!!S.gradientMap,At=!!S.alphaMap,rt=S.alphaTest>0,J=!!S.alphaHash,Lt=!!S.extensions;let $t=wi;S.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&($t=s.toneMapping);const be={shaderID:ot,shaderType:S.type,shaderName:S.name,vertexShader:Xt,fragmentShader:j,defines:S.defines,customVertexShaderID:lt,customFragmentShaderID:It,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:bt,batchingColor:bt&&U._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&U.instanceColor!==null,instancingMorph:Ct&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:_t===null?s.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Ds,alphaToCoverage:!!S.alphaToCoverage,map:ae,matcap:ne,envMap:Vt,envMapMode:Vt&&K.mapping,envMapCubeUVHeight:X,aoMap:C,lightMap:ct,bumpMap:et,normalMap:ht,displacementMap:d&&Z,emissiveMap:vt,normalMapObjectSpace:ht&&S.normalMapType===Wd,normalMapTangentSpace:ht&&S.normalMapType===Tu,metalnessMap:nt,roughnessMap:yt,anisotropy:Ft,anisotropyMap:q,clearcoat:D,clearcoatMap:Ut,clearcoatNormalMap:pt,clearcoatRoughnessMap:Pt,dispersion:w,iridescence:O,iridescenceMap:zt,iridescenceThicknessMap:tt,sheen:Y,sheenColorMap:wt,sheenRoughnessMap:Ht,specularMap:Gt,specularColorMap:mt,specularIntensityMap:Kt,transmission:Q,transmissionMap:z,thicknessMap:Mt,gradientMap:it,opaque:S.transparent===!1&&S.blending===Es&&S.alphaToCoverage===!1,alphaMap:At,alphaTest:rt,alphaHash:J,combine:S.combine,mapUv:ae&&_(S.map.channel),aoMapUv:C&&_(S.aoMap.channel),lightMapUv:ct&&_(S.lightMap.channel),bumpMapUv:et&&_(S.bumpMap.channel),normalMapUv:ht&&_(S.normalMap.channel),displacementMapUv:Z&&_(S.displacementMap.channel),emissiveMapUv:vt&&_(S.emissiveMap.channel),metalnessMapUv:nt&&_(S.metalnessMap.channel),roughnessMapUv:yt&&_(S.roughnessMap.channel),anisotropyMapUv:q&&_(S.anisotropyMap.channel),clearcoatMapUv:Ut&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:pt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&_(S.sheenRoughnessMap.channel),specularMapUv:Gt&&_(S.specularMap.channel),specularColorMapUv:mt&&_(S.specularColorMap.channel),specularIntensityMapUv:Kt&&_(S.specularIntensityMap.channel),transmissionMapUv:z&&_(S.transmissionMap.channel),thicknessMapUv:Mt&&_(S.thicknessMap.channel),alphaMapUv:At&&_(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ht||Ft),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(ae||At),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:st,skinning:U.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Zt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:$t,decodeVideoTexture:ae&&S.map.isVideoTexture===!0&&he.getTransfer(S.map.colorSpace)===me,decodeVideoTextureEmissive:vt&&S.emissiveMap.isVideoTexture===!0&&he.getTransfer(S.emissiveMap.colorSpace)===me,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ie,flipSided:S.side===nn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Lt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&S.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return be.vertexUv1s=h.has(1),be.vertexUv2s=h.has(2),be.vertexUv3s=h.has(3),h.clear(),be}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(y(M,S),v(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const M=g[S.type];let P;if(M){const N=Vn[M];P=xr.clone(N.uniforms)}else P=S.uniforms;return P}function E(S,M){let P;for(let N=0,U=c.length;N<U;N++){const W=c[N];if(W.cacheKey===M){P=W,++P.usedTimes;break}}return P===void 0&&(P=new K_(s,M,S,r),c.push(P)),P}function b(S){if(--S.usedTimes===0){const M=c.indexOf(S);c[M]=c[c.length-1],c.pop(),S.destroy()}}function T(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:E,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:L}}function e1(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function n1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ih(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Uh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function h(u,d){e.length>1&&e.sort(u||n1),n.length>1&&n.sort(d||Ih),i.length>1&&i.sort(d||Ih)}function c(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:c,sort:h}}function i1(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Uh,s.set(n,[o])):i>=r.length?(o=new Uh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function s1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new dt};break;case"SpotLight":e={position:new R,direction:new R,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":e={color:new dt,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function r1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let o1=0;function a1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function l1(s){const t=new s1,e=r1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new R);const i=new R,r=new jt,o=new jt;function a(h){let c=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,v=0,x=0,E=0,b=0,T=0;h.sort(a1);for(let S=0,M=h.length;S<M;S++){const P=h[S],N=P.color,U=P.intensity,W=P.distance,B=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=N.r*U,u+=N.g*U,d+=N.b*U;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],U);T++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,X=e.get(P);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=V,f++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(N).multiplyScalar(U),V.distance=W,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[_]=V;const K=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,K.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[_]=K.matrix,P.castShadow){const X=e.get(P);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=B,x++}_++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(N).multiplyScalar(U),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const K=P.shadow,X=e.get(P);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,X.shadowCameraNear=K.camera.near,X.shadowCameraFar=K.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=P.shadow.matrix,v++}n.point[g]=V,g++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(U),V.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[p]=V,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==y||L.numPointShadows!==v||L.numSpotShadows!==x||L.numSpotMaps!==E||L.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+E-b,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=y,L.numPointShadows=v,L.numSpotShadows=x,L.numSpotMaps=E,L.numLightProbes=T,n.version=o1++)}function l(h,c){let u=0,d=0,f=0,g=0,_=0;const m=c.matrixWorldInverse;for(let p=0,y=h.length;p<y;p++){const v=h[p];if(v.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(v.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function zh(s){const t=new l1(s),e=[],n=[];function i(c){h.camera=c,e.length=0,n.length=0}function r(c){e.push(c)}function o(c){n.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function c1(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new zh(s),t.set(i,[a])):r>=o.length?(a=new zh(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const h1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u1=`uniform sampler2D shadow_pass;
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
}`;function d1(s,t,e){let n=new Jl;const i=new $,r=new $,o=new de,a=new U0({depthPacking:Hd}),l=new z0,h={},c=e.maxTextureSize,u={[Ei]:nn,[nn]:Ei,[Ie]:Ie},d=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:h1,fragmentShader:u1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ae;g.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new re(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cu;let p=this.type;this.render=function(b,T,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const S=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),N=s.state;N.setBlending(ii),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=p!==ti&&this.type===ti,W=p===ti&&this.type!==ti;for(let B=0,V=b.length;B<V;B++){const K=b[B],X=K.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const ot=X.getFrameExtents();if(i.multiply(ot),r.copy(X.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(r.x=Math.floor(c/ot.x),i.x=r.x*ot.x,X.mapSize.x=r.x),i.y>c&&(r.y=Math.floor(c/ot.y),i.y=r.y*ot.y,X.mapSize.y=r.y)),X.map===null||U===!0||W===!0){const Tt=this.type!==ti?{minFilter:_n,magFilter:_n}:{};X.map!==null&&X.map.dispose(),X.map=new Rn(i.x,i.y,Tt),X.map.texture.name=K.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const xt=X.getViewportCount();for(let Tt=0;Tt<xt;Tt++){const Zt=X.getViewport(Tt);o.set(r.x*Zt.x,r.y*Zt.y,r.x*Zt.z,r.y*Zt.w),N.viewport(o),X.updateMatrices(K,Tt),n=X.getFrustum(),x(T,L,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===ti&&y(X,L),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,M,P)};function y(b,T){const L=t.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Rn(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(T,null,L,d,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(T,null,L,f,_,null)}function v(b,T,L,S){let M=null;const P=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)M=P;else if(M=L.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const N=M.uuid,U=T.uuid;let W=h[N];W===void 0&&(W={},h[N]=W);let B=W[U];B===void 0&&(B=M.clone(),W[U]=B,T.addEventListener("dispose",E)),M=B}if(M.visible=T.visible,M.wireframe=T.wireframe,S===ti?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=s.properties.get(M);N.light=L}return M}function x(b,T,L,S,M){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===ti)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const U=t.update(b),W=b.material;if(Array.isArray(W)){const B=U.groups;for(let V=0,K=B.length;V<K;V++){const X=B[V],ot=W[X.materialIndex];if(ot&&ot.visible){const xt=v(b,ot,S,M);b.onBeforeShadow(s,b,T,L,U,xt,X),s.renderBufferDirect(L,null,U,xt,b,X),b.onAfterShadow(s,b,T,L,U,xt,X)}}}else if(W.visible){const B=v(b,W,S,M);b.onBeforeShadow(s,b,T,L,U,B,null),s.renderBufferDirect(L,null,U,B,b,null),b.onAfterShadow(s,b,T,L,U,B,null)}}const N=b.children;for(let U=0,W=N.length;U<W;U++)x(N[U],T,L,S,M)}function E(b){b.target.removeEventListener("dispose",E);for(const L in h){const S=h[L],M=b.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const f1={[Ya]:qa,[ja]:$a,[Za]:Ja,[Cs]:Ka,[qa]:Ya,[$a]:ja,[Ja]:Za,[Ka]:Cs};function p1(s,t){function e(){let z=!1;const Mt=new de;let it=null;const At=new de(0,0,0,0);return{setMask:function(rt){it!==rt&&!z&&(s.colorMask(rt,rt,rt,rt),it=rt)},setLocked:function(rt){z=rt},setClear:function(rt,J,Lt,$t,be){be===!0&&(rt*=$t,J*=$t,Lt*=$t),Mt.set(rt,J,Lt,$t),At.equals(Mt)===!1&&(s.clearColor(rt,J,Lt,$t),At.copy(Mt))},reset:function(){z=!1,it=null,At.set(-1,0,0,0)}}}function n(){let z=!1,Mt=!1,it=null,At=null,rt=null;return{setReversed:function(J){if(Mt!==J){const Lt=t.get("EXT_clip_control");J?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),Mt=J;const $t=rt;rt=null,this.setClear($t)}},getReversed:function(){return Mt},setTest:function(J){J?_t(s.DEPTH_TEST):st(s.DEPTH_TEST)},setMask:function(J){it!==J&&!z&&(s.depthMask(J),it=J)},setFunc:function(J){if(Mt&&(J=f1[J]),At!==J){switch(J){case Ya:s.depthFunc(s.NEVER);break;case qa:s.depthFunc(s.ALWAYS);break;case ja:s.depthFunc(s.LESS);break;case Cs:s.depthFunc(s.LEQUAL);break;case Za:s.depthFunc(s.EQUAL);break;case Ka:s.depthFunc(s.GEQUAL);break;case $a:s.depthFunc(s.GREATER);break;case Ja:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}At=J}},setLocked:function(J){z=J},setClear:function(J){rt!==J&&(Mt&&(J=1-J),s.clearDepth(J),rt=J)},reset:function(){z=!1,it=null,At=null,rt=null,Mt=!1}}}function i(){let z=!1,Mt=null,it=null,At=null,rt=null,J=null,Lt=null,$t=null,be=null;return{setTest:function(pe){z||(pe?_t(s.STENCIL_TEST):st(s.STENCIL_TEST))},setMask:function(pe){Mt!==pe&&!z&&(s.stencilMask(pe),Mt=pe)},setFunc:function(pe,Pn,Yn){(it!==pe||At!==Pn||rt!==Yn)&&(s.stencilFunc(pe,Pn,Yn),it=pe,At=Pn,rt=Yn)},setOp:function(pe,Pn,Yn){(J!==pe||Lt!==Pn||$t!==Yn)&&(s.stencilOp(pe,Pn,Yn),J=pe,Lt=Pn,$t=Yn)},setLocked:function(pe){z=pe},setClear:function(pe){be!==pe&&(s.clearStencil(pe),be=pe)},reset:function(){z=!1,Mt=null,it=null,At=null,rt=null,J=null,Lt=null,$t=null,be=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,h=new WeakMap;let c={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,v=null,x=null,E=null,b=null,T=new dt(0,0,0),L=0,S=!1,M=null,P=null,N=null,U=null,W=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,K=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=K>=2);let ot=null,xt={};const Tt=s.getParameter(s.SCISSOR_BOX),Zt=s.getParameter(s.VIEWPORT),Xt=new de().fromArray(Tt),j=new de().fromArray(Zt);function lt(z,Mt,it,At){const rt=new Uint8Array(4),J=s.createTexture();s.bindTexture(z,J),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Lt=0;Lt<it;Lt++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(Mt,0,s.RGBA,1,1,At,0,s.RGBA,s.UNSIGNED_BYTE,rt):s.texImage2D(Mt+Lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,rt);return J}const It={};It[s.TEXTURE_2D]=lt(s.TEXTURE_2D,s.TEXTURE_2D,1),It[s.TEXTURE_CUBE_MAP]=lt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),It[s.TEXTURE_2D_ARRAY]=lt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),It[s.TEXTURE_3D]=lt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_t(s.DEPTH_TEST),o.setFunc(Cs),et(!1),ht(_c),_t(s.CULL_FACE),C(ii);function _t(z){c[z]!==!0&&(s.enable(z),c[z]=!0)}function st(z){c[z]!==!1&&(s.disable(z),c[z]=!1)}function Ct(z,Mt){return u[z]!==Mt?(s.bindFramebuffer(z,Mt),u[z]=Mt,z===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Mt),z===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Mt),!0):!1}function bt(z,Mt){let it=f,At=!1;if(z){it=d.get(Mt),it===void 0&&(it=[],d.set(Mt,it));const rt=z.textures;if(it.length!==rt.length||it[0]!==s.COLOR_ATTACHMENT0){for(let J=0,Lt=rt.length;J<Lt;J++)it[J]=s.COLOR_ATTACHMENT0+J;it.length=rt.length,At=!0}}else it[0]!==s.BACK&&(it[0]=s.BACK,At=!0);At&&s.drawBuffers(it)}function ae(z){return g!==z?(s.useProgram(z),g=z,!0):!1}const ne={[Gi]:s.FUNC_ADD,[Md]:s.FUNC_SUBTRACT,[Sd]:s.FUNC_REVERSE_SUBTRACT};ne[bd]=s.MIN,ne[wd]=s.MAX;const Vt={[Ed]:s.ZERO,[Td]:s.ONE,[Ad]:s.SRC_COLOR,[Wa]:s.SRC_ALPHA,[Id]:s.SRC_ALPHA_SATURATE,[Ld]:s.DST_COLOR,[Cd]:s.DST_ALPHA,[Rd]:s.ONE_MINUS_SRC_COLOR,[Xa]:s.ONE_MINUS_SRC_ALPHA,[Dd]:s.ONE_MINUS_DST_COLOR,[Pd]:s.ONE_MINUS_DST_ALPHA,[Ud]:s.CONSTANT_COLOR,[zd]:s.ONE_MINUS_CONSTANT_COLOR,[Nd]:s.CONSTANT_ALPHA,[Fd]:s.ONE_MINUS_CONSTANT_ALPHA};function C(z,Mt,it,At,rt,J,Lt,$t,be,pe){if(z===ii){_===!0&&(st(s.BLEND),_=!1);return}if(_===!1&&(_t(s.BLEND),_=!0),z!==yd){if(z!==m||pe!==S){if((p!==Gi||x!==Gi)&&(s.blendEquation(s.FUNC_ADD),p=Gi,x=Gi),pe)switch(z){case Es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rs:s.blendFunc(s.ONE,s.ONE);break;case xc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case xc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}y=null,v=null,E=null,b=null,T.set(0,0,0),L=0,m=z,S=pe}return}rt=rt||Mt,J=J||it,Lt=Lt||At,(Mt!==p||rt!==x)&&(s.blendEquationSeparate(ne[Mt],ne[rt]),p=Mt,x=rt),(it!==y||At!==v||J!==E||Lt!==b)&&(s.blendFuncSeparate(Vt[it],Vt[At],Vt[J],Vt[Lt]),y=it,v=At,E=J,b=Lt),($t.equals(T)===!1||be!==L)&&(s.blendColor($t.r,$t.g,$t.b,be),T.copy($t),L=be),m=z,S=!1}function ct(z,Mt){z.side===Ie?st(s.CULL_FACE):_t(s.CULL_FACE);let it=z.side===nn;Mt&&(it=!it),et(it),z.blending===Es&&z.transparent===!1?C(ii):C(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const At=z.stencilWrite;a.setTest(At),At&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),vt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?_t(s.SAMPLE_ALPHA_TO_COVERAGE):st(s.SAMPLE_ALPHA_TO_COVERAGE)}function et(z){M!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),M=z)}function ht(z){z!==xd?(_t(s.CULL_FACE),z!==P&&(z===_c?s.cullFace(s.BACK):z===vd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):st(s.CULL_FACE),P=z}function Z(z){z!==N&&(V&&s.lineWidth(z),N=z)}function vt(z,Mt,it){z?(_t(s.POLYGON_OFFSET_FILL),(U!==Mt||W!==it)&&(s.polygonOffset(Mt,it),U=Mt,W=it)):st(s.POLYGON_OFFSET_FILL)}function nt(z){z?_t(s.SCISSOR_TEST):st(s.SCISSOR_TEST)}function yt(z){z===void 0&&(z=s.TEXTURE0+B-1),ot!==z&&(s.activeTexture(z),ot=z)}function Ft(z,Mt,it){it===void 0&&(ot===null?it=s.TEXTURE0+B-1:it=ot);let At=xt[it];At===void 0&&(At={type:void 0,texture:void 0},xt[it]=At),(At.type!==z||At.texture!==Mt)&&(ot!==it&&(s.activeTexture(it),ot=it),s.bindTexture(z,Mt||It[z]),At.type=z,At.texture=Mt)}function D(){const z=xt[ot];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Y(){try{s.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{s.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ut(){try{s.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pt(){try{s.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pt(){try{s.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function zt(){try{s.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function tt(){try{s.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function wt(z){Xt.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Xt.copy(z))}function Ht(z){j.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),j.copy(z))}function Gt(z,Mt){let it=h.get(Mt);it===void 0&&(it=new WeakMap,h.set(Mt,it));let At=it.get(z);At===void 0&&(At=s.getUniformBlockIndex(Mt,z.name),it.set(z,At))}function mt(z,Mt){const At=h.get(Mt).get(z);l.get(Mt)!==At&&(s.uniformBlockBinding(Mt,At,z.__bindingPointIndex),l.set(Mt,At))}function Kt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},ot=null,xt={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,v=null,x=null,E=null,b=null,T=new dt(0,0,0),L=0,S=!1,M=null,P=null,N=null,U=null,W=null,Xt.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:_t,disable:st,bindFramebuffer:Ct,drawBuffers:bt,useProgram:ae,setBlending:C,setMaterial:ct,setFlipSided:et,setCullFace:ht,setLineWidth:Z,setPolygonOffset:vt,setScissorTest:nt,activeTexture:yt,bindTexture:Ft,unbindTexture:D,compressedTexImage2D:w,compressedTexImage3D:O,texImage2D:zt,texImage3D:tt,updateUBOMapping:Gt,uniformBlockBinding:mt,texStorage2D:pt,texStorage3D:Pt,texSubImage2D:Y,texSubImage3D:Q,compressedTexSubImage2D:q,compressedTexSubImage3D:Ut,scissor:wt,viewport:Ht,reset:Kt}}function m1(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new $,c=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,w){return f?new OffscreenCanvas(D,w):wo("canvas")}function _(D,w,O){let Y=1;const Q=Ft(D);if((Q.width>O||Q.height>O)&&(Y=O/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const q=Math.floor(Y*Q.width),Ut=Math.floor(Y*Q.height);u===void 0&&(u=g(q,Ut));const pt=w?g(q,Ut):u;return pt.width=q,pt.height=Ut,pt.getContext("2d").drawImage(D,0,0,q,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Ut+")."),pt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){s.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(D,w,O,Y,Q=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let q=w;if(w===s.RED&&(O===s.FLOAT&&(q=s.R32F),O===s.HALF_FLOAT&&(q=s.R16F),O===s.UNSIGNED_BYTE&&(q=s.R8)),w===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.R8UI),O===s.UNSIGNED_SHORT&&(q=s.R16UI),O===s.UNSIGNED_INT&&(q=s.R32UI),O===s.BYTE&&(q=s.R8I),O===s.SHORT&&(q=s.R16I),O===s.INT&&(q=s.R32I)),w===s.RG&&(O===s.FLOAT&&(q=s.RG32F),O===s.HALF_FLOAT&&(q=s.RG16F),O===s.UNSIGNED_BYTE&&(q=s.RG8)),w===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.RG8UI),O===s.UNSIGNED_SHORT&&(q=s.RG16UI),O===s.UNSIGNED_INT&&(q=s.RG32UI),O===s.BYTE&&(q=s.RG8I),O===s.SHORT&&(q=s.RG16I),O===s.INT&&(q=s.RG32I)),w===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.RGB8UI),O===s.UNSIGNED_SHORT&&(q=s.RGB16UI),O===s.UNSIGNED_INT&&(q=s.RGB32UI),O===s.BYTE&&(q=s.RGB8I),O===s.SHORT&&(q=s.RGB16I),O===s.INT&&(q=s.RGB32I)),w===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),O===s.UNSIGNED_INT&&(q=s.RGBA32UI),O===s.BYTE&&(q=s.RGBA8I),O===s.SHORT&&(q=s.RGBA16I),O===s.INT&&(q=s.RGBA32I)),w===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),w===s.RGBA){const Ut=Q?So:he.getTransfer(Y);O===s.FLOAT&&(q=s.RGBA32F),O===s.HALF_FLOAT&&(q=s.RGBA16F),O===s.UNSIGNED_BYTE&&(q=Ut===me?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(D,w){let O;return D?w===null||w===ji||w===mr?O=s.DEPTH24_STENCIL8:w===Nn?O=s.DEPTH32F_STENCIL8:w===pr&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ji||w===mr?O=s.DEPTH_COMPONENT24:w===Nn?O=s.DEPTH_COMPONENT32F:w===pr&&(O=s.DEPTH_COMPONENT16),O}function E(D,w){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==_n&&D.minFilter!==Gn?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function b(D){const w=D.target;w.removeEventListener("dispose",b),L(w),w.isVideoTexture&&c.delete(w)}function T(D){const w=D.target;w.removeEventListener("dispose",T),M(w)}function L(D){const w=n.get(D);if(w.__webglInit===void 0)return;const O=D.source,Y=d.get(O);if(Y){const Q=Y[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(D),Object.keys(Y).length===0&&d.delete(O)}n.remove(D)}function S(D){const w=n.get(D);s.deleteTexture(w.__webglTexture);const O=D.source,Y=d.get(O);delete Y[w.__cacheKey],o.memory.textures--}function M(D){const w=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(w.__webglFramebuffer[Y]))for(let Q=0;Q<w.__webglFramebuffer[Y].length;Q++)s.deleteFramebuffer(w.__webglFramebuffer[Y][Q]);else s.deleteFramebuffer(w.__webglFramebuffer[Y]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[Y])}else{if(Array.isArray(w.__webglFramebuffer))for(let Y=0;Y<w.__webglFramebuffer.length;Y++)s.deleteFramebuffer(w.__webglFramebuffer[Y]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Y=0;Y<w.__webglColorRenderbuffer.length;Y++)w.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[Y]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const O=D.textures;for(let Y=0,Q=O.length;Y<Q;Y++){const q=n.get(O[Y]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(O[Y])}n.remove(D)}let P=0;function N(){P=0}function U(){const D=P;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),P+=1,D}function W(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function B(D,w){const O=n.get(D);if(D.isVideoTexture&&nt(D),D.isRenderTargetTexture===!1&&D.version>0&&O.__version!==D.version){const Y=D.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{It(O,D,w);return}}e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+w)}function V(D,w){const O=n.get(D);if(D.version>0&&O.__version!==D.version){It(O,D,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+w)}function K(D,w){const O=n.get(D);if(D.version>0&&O.__version!==D.version){It(O,D,w);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+w)}function X(D,w){const O=n.get(D);if(D.version>0&&O.__version!==D.version){_t(O,D,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+w)}const ot={[Ti]:s.REPEAT,[Wi]:s.CLAMP_TO_EDGE,[el]:s.MIRRORED_REPEAT},xt={[_n]:s.NEAREST,[Vd]:s.NEAREST_MIPMAP_NEAREST,[Tr]:s.NEAREST_MIPMAP_LINEAR,[Gn]:s.LINEAR,[Go]:s.LINEAR_MIPMAP_NEAREST,[Si]:s.LINEAR_MIPMAP_LINEAR},Tt={[Xd]:s.NEVER,[$d]:s.ALWAYS,[Yd]:s.LESS,[Au]:s.LEQUAL,[qd]:s.EQUAL,[Kd]:s.GEQUAL,[jd]:s.GREATER,[Zd]:s.NOTEQUAL};function Zt(D,w){if(w.type===Nn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Gn||w.magFilter===Go||w.magFilter===Tr||w.magFilter===Si||w.minFilter===Gn||w.minFilter===Go||w.minFilter===Tr||w.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,ot[w.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,ot[w.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,ot[w.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,xt[w.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,xt[w.minFilter]),w.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,Tt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===_n||w.minFilter!==Tr&&w.minFilter!==Si||w.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(D,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Xt(D,w){let O=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",b));const Y=w.source;let Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));const q=W(w);if(q!==D.__cacheKey){Q[q]===void 0&&(Q[q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[q].usedTimes++;const Ut=Q[D.__cacheKey];Ut!==void 0&&(Q[D.__cacheKey].usedTimes--,Ut.usedTimes===0&&S(w)),D.__cacheKey=q,D.__webglTexture=Q[q].texture}return O}function j(D,w,O){return Math.floor(Math.floor(D/O)/w)}function lt(D,w,O,Y){const q=D.updateRanges;if(q.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,O,Y,w.data);else{q.sort((tt,wt)=>tt.start-wt.start);let Ut=0;for(let tt=1;tt<q.length;tt++){const wt=q[Ut],Ht=q[tt],Gt=wt.start+wt.count,mt=j(Ht.start,w.width,4),Kt=j(wt.start,w.width,4);Ht.start<=Gt+1&&mt===Kt&&j(Ht.start+Ht.count-1,w.width,4)===mt?wt.count=Math.max(wt.count,Ht.start+Ht.count-wt.start):(++Ut,q[Ut]=Ht)}q.length=Ut+1;const pt=s.getParameter(s.UNPACK_ROW_LENGTH),Pt=s.getParameter(s.UNPACK_SKIP_PIXELS),zt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let tt=0,wt=q.length;tt<wt;tt++){const Ht=q[tt],Gt=Math.floor(Ht.start/4),mt=Math.ceil(Ht.count/4),Kt=Gt%w.width,z=Math.floor(Gt/w.width),Mt=mt,it=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Kt),s.pixelStorei(s.UNPACK_SKIP_ROWS,z),e.texSubImage2D(s.TEXTURE_2D,0,Kt,z,Mt,it,O,Y,w.data)}D.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,pt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Pt),s.pixelStorei(s.UNPACK_SKIP_ROWS,zt)}}function It(D,w,O){let Y=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Y=s.TEXTURE_3D);const Q=Xt(D,w),q=w.source;e.bindTexture(Y,D.__webglTexture,s.TEXTURE0+O);const Ut=n.get(q);if(q.version!==Ut.__version||Q===!0){e.activeTexture(s.TEXTURE0+O);const pt=he.getPrimaries(he.workingColorSpace),Pt=w.colorSpace===ei?null:he.getPrimaries(w.colorSpace),zt=w.colorSpace===ei||pt===Pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let tt=_(w.image,!1,i.maxTextureSize);tt=yt(w,tt);const wt=r.convert(w.format,w.colorSpace),Ht=r.convert(w.type);let Gt=v(w.internalFormat,wt,Ht,w.colorSpace,w.isVideoTexture);Zt(Y,w);let mt;const Kt=w.mipmaps,z=w.isVideoTexture!==!0,Mt=Ut.__version===void 0||Q===!0,it=q.dataReady,At=E(w,tt);if(w.isDepthTexture)Gt=x(w.format===_r,w.type),Mt&&(z?e.texStorage2D(s.TEXTURE_2D,1,Gt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,Gt,tt.width,tt.height,0,wt,Ht,null));else if(w.isDataTexture)if(Kt.length>0){z&&Mt&&e.texStorage2D(s.TEXTURE_2D,At,Gt,Kt[0].width,Kt[0].height);for(let rt=0,J=Kt.length;rt<J;rt++)mt=Kt[rt],z?it&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,mt.width,mt.height,wt,Ht,mt.data):e.texImage2D(s.TEXTURE_2D,rt,Gt,mt.width,mt.height,0,wt,Ht,mt.data);w.generateMipmaps=!1}else z?(Mt&&e.texStorage2D(s.TEXTURE_2D,At,Gt,tt.width,tt.height),it&&lt(w,tt,wt,Ht)):e.texImage2D(s.TEXTURE_2D,0,Gt,tt.width,tt.height,0,wt,Ht,tt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){z&&Mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,Gt,Kt[0].width,Kt[0].height,tt.depth);for(let rt=0,J=Kt.length;rt<J;rt++)if(mt=Kt[rt],w.format!==An)if(wt!==null)if(z){if(it)if(w.layerUpdates.size>0){const Lt=dh(mt.width,mt.height,w.format,w.type);for(const $t of w.layerUpdates){const be=mt.data.subarray($t*Lt/mt.data.BYTES_PER_ELEMENT,($t+1)*Lt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,$t,mt.width,mt.height,1,wt,be)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,mt.width,mt.height,tt.depth,wt,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,rt,Gt,mt.width,mt.height,tt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?it&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,mt.width,mt.height,tt.depth,wt,Ht,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,rt,Gt,mt.width,mt.height,tt.depth,0,wt,Ht,mt.data)}else{z&&Mt&&e.texStorage2D(s.TEXTURE_2D,At,Gt,Kt[0].width,Kt[0].height);for(let rt=0,J=Kt.length;rt<J;rt++)mt=Kt[rt],w.format!==An?wt!==null?z?it&&e.compressedTexSubImage2D(s.TEXTURE_2D,rt,0,0,mt.width,mt.height,wt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,rt,Gt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?it&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,mt.width,mt.height,wt,Ht,mt.data):e.texImage2D(s.TEXTURE_2D,rt,Gt,mt.width,mt.height,0,wt,Ht,mt.data)}else if(w.isDataArrayTexture)if(z){if(Mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,Gt,tt.width,tt.height,tt.depth),it)if(w.layerUpdates.size>0){const rt=dh(tt.width,tt.height,w.format,w.type);for(const J of w.layerUpdates){const Lt=tt.data.subarray(J*rt/tt.data.BYTES_PER_ELEMENT,(J+1)*rt/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,tt.width,tt.height,1,wt,Ht,Lt)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,wt,Ht,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Gt,tt.width,tt.height,tt.depth,0,wt,Ht,tt.data);else if(w.isData3DTexture)z?(Mt&&e.texStorage3D(s.TEXTURE_3D,At,Gt,tt.width,tt.height,tt.depth),it&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,wt,Ht,tt.data)):e.texImage3D(s.TEXTURE_3D,0,Gt,tt.width,tt.height,tt.depth,0,wt,Ht,tt.data);else if(w.isFramebufferTexture){if(Mt)if(z)e.texStorage2D(s.TEXTURE_2D,At,Gt,tt.width,tt.height);else{let rt=tt.width,J=tt.height;for(let Lt=0;Lt<At;Lt++)e.texImage2D(s.TEXTURE_2D,Lt,Gt,rt,J,0,wt,Ht,null),rt>>=1,J>>=1}}else if(Kt.length>0){if(z&&Mt){const rt=Ft(Kt[0]);e.texStorage2D(s.TEXTURE_2D,At,Gt,rt.width,rt.height)}for(let rt=0,J=Kt.length;rt<J;rt++)mt=Kt[rt],z?it&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,wt,Ht,mt):e.texImage2D(s.TEXTURE_2D,rt,Gt,wt,Ht,mt);w.generateMipmaps=!1}else if(z){if(Mt){const rt=Ft(tt);e.texStorage2D(s.TEXTURE_2D,At,Gt,rt.width,rt.height)}it&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,wt,Ht,tt)}else e.texImage2D(s.TEXTURE_2D,0,Gt,wt,Ht,tt);m(w)&&p(Y),Ut.__version=q.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function _t(D,w,O){if(w.image.length!==6)return;const Y=Xt(D,w),Q=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+O);const q=n.get(Q);if(Q.version!==q.__version||Y===!0){e.activeTexture(s.TEXTURE0+O);const Ut=he.getPrimaries(he.workingColorSpace),pt=w.colorSpace===ei?null:he.getPrimaries(w.colorSpace),Pt=w.colorSpace===ei||Ut===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const zt=w.isCompressedTexture||w.image[0].isCompressedTexture,tt=w.image[0]&&w.image[0].isDataTexture,wt=[];for(let J=0;J<6;J++)!zt&&!tt?wt[J]=_(w.image[J],!0,i.maxCubemapSize):wt[J]=tt?w.image[J].image:w.image[J],wt[J]=yt(w,wt[J]);const Ht=wt[0],Gt=r.convert(w.format,w.colorSpace),mt=r.convert(w.type),Kt=v(w.internalFormat,Gt,mt,w.colorSpace),z=w.isVideoTexture!==!0,Mt=q.__version===void 0||Y===!0,it=Q.dataReady;let At=E(w,Ht);Zt(s.TEXTURE_CUBE_MAP,w);let rt;if(zt){z&&Mt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,At,Kt,Ht.width,Ht.height);for(let J=0;J<6;J++){rt=wt[J].mipmaps;for(let Lt=0;Lt<rt.length;Lt++){const $t=rt[Lt];w.format!==An?Gt!==null?z?it&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Lt,0,0,$t.width,$t.height,Gt,$t.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Lt,Kt,$t.width,$t.height,0,$t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Lt,0,0,$t.width,$t.height,Gt,mt,$t.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Lt,Kt,$t.width,$t.height,0,Gt,mt,$t.data)}}}else{if(rt=w.mipmaps,z&&Mt){rt.length>0&&At++;const J=Ft(wt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,At,Kt,J.width,J.height)}for(let J=0;J<6;J++)if(tt){z?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,wt[J].width,wt[J].height,Gt,mt,wt[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Kt,wt[J].width,wt[J].height,0,Gt,mt,wt[J].data);for(let Lt=0;Lt<rt.length;Lt++){const be=rt[Lt].image[J].image;z?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Lt+1,0,0,be.width,be.height,Gt,mt,be.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Lt+1,Kt,be.width,be.height,0,Gt,mt,be.data)}}else{z?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Gt,mt,wt[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Kt,Gt,mt,wt[J]);for(let Lt=0;Lt<rt.length;Lt++){const $t=rt[Lt];z?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Lt+1,0,0,Gt,mt,$t.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Lt+1,Kt,Gt,mt,$t.image[J])}}}m(w)&&p(s.TEXTURE_CUBE_MAP),q.__version=Q.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function st(D,w,O,Y,Q,q){const Ut=r.convert(O.format,O.colorSpace),pt=r.convert(O.type),Pt=v(O.internalFormat,Ut,pt,O.colorSpace),zt=n.get(w),tt=n.get(O);if(tt.__renderTarget=w,!zt.__hasExternalTextures){const wt=Math.max(1,w.width>>q),Ht=Math.max(1,w.height>>q);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,q,Pt,wt,Ht,w.depth,0,Ut,pt,null):e.texImage2D(Q,q,Pt,wt,Ht,0,Ut,pt,null)}e.bindFramebuffer(s.FRAMEBUFFER,D),vt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,Q,tt.__webglTexture,0,Z(w)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,Q,tt.__webglTexture,q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ct(D,w,O){if(s.bindRenderbuffer(s.RENDERBUFFER,D),w.depthBuffer){const Y=w.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,q=x(w.stencilBuffer,Q),Ut=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=Z(w);vt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,q,w.width,w.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,q,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,q,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ut,s.RENDERBUFFER,D)}else{const Y=w.textures;for(let Q=0;Q<Y.length;Q++){const q=Y[Q],Ut=r.convert(q.format,q.colorSpace),pt=r.convert(q.type),Pt=v(q.internalFormat,Ut,pt,q.colorSpace),zt=Z(w);O&&vt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,zt,Pt,w.width,w.height):vt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,zt,Pt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Pt,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function bt(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(w.depthTexture);Y.__renderTarget=w,(!Y.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),B(w.depthTexture,0);const Q=Y.__webglTexture,q=Z(w);if(w.depthTexture.format===gr)vt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(w.depthTexture.format===_r)vt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ae(D){const w=n.get(D),O=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const Y=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Y){const Q=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),w.__depthDisposeCallback=Q}w.__boundDepthTexture=Y}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const Y=D.texture.mipmaps;Y&&Y.length>0?bt(w.__webglFramebuffer[0],D):bt(w.__webglFramebuffer,D)}else if(O){w.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[Y]),w.__webglDepthbuffer[Y]===void 0)w.__webglDepthbuffer[Y]=s.createRenderbuffer(),Ct(w.__webglDepthbuffer[Y],D,!1);else{const Q=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=w.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,q)}}else{const Y=D.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Ct(w.__webglDepthbuffer,D,!1);else{const Q=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,q)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ne(D,w,O){const Y=n.get(D);w!==void 0&&st(Y.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&ae(D)}function Vt(D){const w=D.texture,O=n.get(D),Y=n.get(w);D.addEventListener("dispose",T);const Q=D.textures,q=D.isWebGLCubeRenderTarget===!0,Ut=Q.length>1;if(Ut||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=w.version,o.memory.textures++),q){O.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(w.mipmaps&&w.mipmaps.length>0){O.__webglFramebuffer[pt]=[];for(let Pt=0;Pt<w.mipmaps.length;Pt++)O.__webglFramebuffer[pt][Pt]=s.createFramebuffer()}else O.__webglFramebuffer[pt]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){O.__webglFramebuffer=[];for(let pt=0;pt<w.mipmaps.length;pt++)O.__webglFramebuffer[pt]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Ut)for(let pt=0,Pt=Q.length;pt<Pt;pt++){const zt=n.get(Q[pt]);zt.__webglTexture===void 0&&(zt.__webglTexture=s.createTexture(),o.memory.textures++)}if(D.samples>0&&vt(D)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let pt=0;pt<Q.length;pt++){const Pt=Q[pt];O.__webglColorRenderbuffer[pt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[pt]);const zt=r.convert(Pt.format,Pt.colorSpace),tt=r.convert(Pt.type),wt=v(Pt.internalFormat,zt,tt,Pt.colorSpace,D.isXRRenderTarget===!0),Ht=Z(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht,wt,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,O.__webglColorRenderbuffer[pt])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Ct(O.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Zt(s.TEXTURE_CUBE_MAP,w);for(let pt=0;pt<6;pt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Pt=0;Pt<w.mipmaps.length;Pt++)st(O.__webglFramebuffer[pt][Pt],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Pt);else st(O.__webglFramebuffer[pt],D,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(w)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let pt=0,Pt=Q.length;pt<Pt;pt++){const zt=Q[pt],tt=n.get(zt);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),Zt(s.TEXTURE_2D,zt),st(O.__webglFramebuffer,D,zt,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,0),m(zt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let pt=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(pt=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(pt,Y.__webglTexture),Zt(pt,w),w.mipmaps&&w.mipmaps.length>0)for(let Pt=0;Pt<w.mipmaps.length;Pt++)st(O.__webglFramebuffer[Pt],D,w,s.COLOR_ATTACHMENT0,pt,Pt);else st(O.__webglFramebuffer,D,w,s.COLOR_ATTACHMENT0,pt,0);m(w)&&p(pt),e.unbindTexture()}D.depthBuffer&&ae(D)}function C(D){const w=D.textures;for(let O=0,Y=w.length;O<Y;O++){const Q=w[O];if(m(Q)){const q=y(D),Ut=n.get(Q).__webglTexture;e.bindTexture(q,Ut),p(q),e.unbindTexture()}}}const ct=[],et=[];function ht(D){if(D.samples>0){if(vt(D)===!1){const w=D.textures,O=D.width,Y=D.height;let Q=s.COLOR_BUFFER_BIT;const q=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ut=n.get(D),pt=w.length>1;if(pt)for(let zt=0;zt<w.length;zt++)e.bindFramebuffer(s.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const Pt=D.texture.mipmaps;Pt&&Pt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let zt=0;zt<w.length;zt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),pt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ut.__webglColorRenderbuffer[zt]);const tt=n.get(w[zt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,tt,0)}s.blitFramebuffer(0,0,O,Y,0,0,O,Y,Q,s.NEAREST),l===!0&&(ct.length=0,et.length=0,ct.push(s.COLOR_ATTACHMENT0+zt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ct.push(q),et.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,et)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ct))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pt)for(let zt=0;zt<w.length;zt++){e.bindFramebuffer(s.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.RENDERBUFFER,Ut.__webglColorRenderbuffer[zt]);const tt=n.get(w[zt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.TEXTURE_2D,tt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const w=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Z(D){return Math.min(i.maxSamples,D.samples)}function vt(D){const w=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function nt(D){const w=o.render.frame;c.get(D)!==w&&(c.set(D,w),D.update())}function yt(D,w){const O=D.colorSpace,Y=D.format,Q=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||O!==Ds&&O!==ei&&(he.getTransfer(O)===me?(Y!==An||Q!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),w}function Ft(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.setTexture2D=B,this.setTexture2DArray=V,this.setTexture3D=K,this.setTextureCube=X,this.rebindTextures=ne,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=st,this.useMultisampledRTT=vt}function g1(s,t){function e(n,i=ei){let r;const o=he.getTransfer(i);if(n===Wn)return s.UNSIGNED_BYTE;if(n===Vl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Gl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Mu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===vu)return s.BYTE;if(n===yu)return s.SHORT;if(n===pr)return s.UNSIGNED_SHORT;if(n===Bl)return s.INT;if(n===ji)return s.UNSIGNED_INT;if(n===Nn)return s.FLOAT;if(n===Hn)return s.HALF_FLOAT;if(n===Su)return s.ALPHA;if(n===bu)return s.RGB;if(n===An)return s.RGBA;if(n===gr)return s.DEPTH_COMPONENT;if(n===_r)return s.DEPTH_STENCIL;if(n===Hl)return s.RED;if(n===Wl)return s.RED_INTEGER;if(n===wu)return s.RG;if(n===Xl)return s.RG_INTEGER;if(n===Yl)return s.RGBA_INTEGER;if(n===fo||n===po||n===mo||n===go)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nl||n===il||n===sl||n===rl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ol||n===al||n===ll)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ol||n===al)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ll)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===vl||n===yl||n===Ml||n===Sl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ul)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ml)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_l)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ml)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sl)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_o||n===bl||n===wl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_o)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eu||n===El||n===Tl||n===Al)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_o)return r.COMPRESSED_RED_RGTC1_EXT;if(n===El)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Tl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const _1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x1=`
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

}`;class v1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ze,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new We({vertexShader:_1,fragmentShader:x1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new oe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class y1 extends $i{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,h=null,c=null,u=null,d=null,f=null,g=null;const _=new v1,m=e.getContextAttributes();let p=null,y=null;const v=[],x=[],E=new $;let b=null;const T=new ln;T.viewport=new de;const L=new ln;L.viewport=new de;const S=[T,L],M=new B0;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let lt=v[j];return lt===void 0&&(lt=new ca,v[j]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(j){let lt=v[j];return lt===void 0&&(lt=new ca,v[j]=lt),lt.getGripSpace()},this.getHand=function(j){let lt=v[j];return lt===void 0&&(lt=new ca,v[j]=lt),lt.getHandSpace()};function U(j){const lt=x.indexOf(j.inputSource);if(lt===-1)return;const It=v[lt];It!==void 0&&(It.update(j.inputSource,j.frame,h||o),It.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",B);for(let j=0;j<v.length;j++){const lt=x[j];lt!==null&&(x[j]=null,v[j].disconnect(lt))}P=null,N=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,y=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(j){h=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",W),i.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(E),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let It=null,_t=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,It=m.stencil?_r:gr,_t=m.stencil?mr:ji);const Ct={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Ct),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Rn(d.textureWidth,d.textureHeight,{format:An,type:Wn,depthTexture:new Gu(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,It),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const It={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,It),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Rn(f.framebufferWidth,f.framebufferHeight,{format:An,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await i.requestReferenceSpace(a),Xt.setContext(i),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function B(j){for(let lt=0;lt<j.removed.length;lt++){const It=j.removed[lt],_t=x.indexOf(It);_t>=0&&(x[_t]=null,v[_t].disconnect(It))}for(let lt=0;lt<j.added.length;lt++){const It=j.added[lt];let _t=x.indexOf(It);if(_t===-1){for(let Ct=0;Ct<v.length;Ct++)if(Ct>=x.length){x.push(It),_t=Ct;break}else if(x[Ct]===null){x[Ct]=It,_t=Ct;break}if(_t===-1)break}const st=v[_t];st&&st.connect(It)}}const V=new R,K=new R;function X(j,lt,It){V.setFromMatrixPosition(lt.matrixWorld),K.setFromMatrixPosition(It.matrixWorld);const _t=V.distanceTo(K),st=lt.projectionMatrix.elements,Ct=It.projectionMatrix.elements,bt=st[14]/(st[10]-1),ae=st[14]/(st[10]+1),ne=(st[9]+1)/st[5],Vt=(st[9]-1)/st[5],C=(st[8]-1)/st[0],ct=(Ct[8]+1)/Ct[0],et=bt*C,ht=bt*ct,Z=_t/(-C+ct),vt=Z*-C;if(lt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(vt),j.translateZ(Z),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),st[10]===-1)j.projectionMatrix.copy(lt.projectionMatrix),j.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const nt=bt+Z,yt=ae+Z,Ft=et-vt,D=ht+(_t-vt),w=ne*ae/yt*nt,O=Vt*ae/yt*nt;j.projectionMatrix.makePerspective(Ft,D,w,O,nt,yt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ot(j,lt){lt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(lt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let lt=j.near,It=j.far;_.texture!==null&&(_.depthNear>0&&(lt=_.depthNear),_.depthFar>0&&(It=_.depthFar)),M.near=L.near=T.near=lt,M.far=L.far=T.far=It,(P!==M.near||N!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,N=M.far),T.layers.mask=j.layers.mask|2,L.layers.mask=j.layers.mask|4,M.layers.mask=T.layers.mask|L.layers.mask;const _t=j.parent,st=M.cameras;ot(M,_t);for(let Ct=0;Ct<st.length;Ct++)ot(st[Ct],_t);st.length===2?X(M,T,L):M.projectionMatrix.copy(T.projectionMatrix),xt(j,M,_t)};function xt(j,lt,It){It===null?j.matrix.copy(lt.matrixWorld):(j.matrix.copy(It.matrixWorld),j.matrix.invert(),j.matrix.multiply(lt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(lt.projectionMatrix),j.projectionMatrixInverse.copy(lt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Is*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Tt=null;function Zt(j,lt){if(c=lt.getViewerPose(h||o),g=lt,c!==null){const It=c.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let _t=!1;It.length!==M.cameras.length&&(M.cameras.length=0,_t=!0);for(let bt=0;bt<It.length;bt++){const ae=It[bt];let ne=null;if(f!==null)ne=f.getViewport(ae);else{const C=u.getViewSubImage(d,ae);ne=C.viewport,bt===0&&(t.setRenderTargetTextures(y,C.colorTexture,C.depthStencilTexture),t.setRenderTarget(y))}let Vt=S[bt];Vt===void 0&&(Vt=new ln,Vt.layers.enable(bt),Vt.viewport=new de,S[bt]=Vt),Vt.matrix.fromArray(ae.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(ae.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(ne.x,ne.y,ne.width,ne.height),bt===0&&(M.matrix.copy(Vt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),_t===!0&&M.cameras.push(Vt)}const st=i.enabledFeatures;if(st&&st.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const bt=u.getDepthInformation(It[0]);bt&&bt.isValid&&bt.texture&&_.init(t,bt,i.renderState)}}for(let It=0;It<v.length;It++){const _t=x[It],st=v[It];_t!==null&&st!==void 0&&st.update(_t,lt,h||o)}Tt&&Tt(j,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),g=null}const Xt=new Qu;Xt.setAnimationLoop(Zt),this.setAnimationLoop=function(j){Tt=j},this.dispose=function(){}}}const Ni=new Ke,M1=new jt;function S1(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Iu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,v):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),v=y.envMap,x=y.envMapRotation;v&&(m.envMap.value=v,Ni.copy(x),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),m.envMapRotation.value.setFromMatrix4(M1.makeRotationFromEuler(Ni)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function b1(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const x=v.program;n.uniformBlockBinding(y,x)}function h(y,v){let x=i[y.id];x===void 0&&(g(y),x=c(y),i[y.id]=x,y.addEventListener("dispose",m));const E=v.program;n.updateUBOMapping(y,E);const b=t.render.frame;r[y.id]!==b&&(d(y),r[y.id]=b)}function c(y){const v=u();y.__bindingPointIndex=v;const x=s.createBuffer(),E=y.__size,b=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,E,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,x),x}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=i[y.id],x=y.uniforms,E=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let b=0,T=x.length;b<T;b++){const L=Array.isArray(x[b])?x[b]:[x[b]];for(let S=0,M=L.length;S<M;S++){const P=L[S];if(f(P,b,S,E)===!0){const N=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let B=0;B<U.length;B++){const V=U[B],K=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,N+W,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,W),W+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,v,x,E){const b=y.value,T=v+"_"+x;if(E[T]===void 0)return typeof b=="number"||typeof b=="boolean"?E[T]=b:E[T]=b.clone(),!0;{const L=E[T];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return E[T]=b,!0}else if(L.equals(b)===!1)return L.copy(b),!0}return!1}function g(y){const v=y.uniforms;let x=0;const E=16;for(let T=0,L=v.length;T<L;T++){const S=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,P=S.length;M<P;M++){const N=S[M],U=Array.isArray(N.value)?N.value:[N.value];for(let W=0,B=U.length;W<B;W++){const V=U[W],K=_(V),X=x%E,ot=X%K.boundary,xt=X+ot;x+=ot,xt!==0&&E-xt<K.storage&&(x+=E-xt),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=K.storage}}}const b=x%E;return b>0&&(x+=E-b),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:h,dispose:p}}class w1{constructor(t={}){const{canvas:e=mf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let E=!1;this._outputColorSpace=He;let b=0,T=0,L=null,S=-1,M=null;const P=new de,N=new de;let U=null;const W=new dt(0);let B=0,V=e.width,K=e.height,X=1,ot=null,xt=null;const Tt=new de(0,0,V,K),Zt=new de(0,0,V,K);let Xt=!1;const j=new Jl;let lt=!1,It=!1;const _t=new jt,st=new jt,Ct=new R,bt=new de,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function Vt(){return L===null?X:1}let C=n;function ct(A,F){return e.getContext(A,F)}try{const A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${kl}`),e.addEventListener("webglcontextlost",At,!1),e.addEventListener("webglcontextrestored",rt,!1),e.addEventListener("webglcontextcreationerror",J,!1),C===null){const F="webgl2";if(C=ct(F,A),C===null)throw ct(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let et,ht,Z,vt,nt,yt,Ft,D,w,O,Y,Q,q,Ut,pt,Pt,zt,tt,wt,Ht,Gt,mt,Kt,z;function Mt(){et=new Ug(C),et.init(),mt=new g1(C,et),ht=new Ag(C,et,t,mt),Z=new p1(C,et),ht.reverseDepthBuffer&&d&&Z.buffers.depth.setReversed(!0),vt=new Fg(C),nt=new e1,yt=new m1(C,et,Z,nt,ht,mt,vt),Ft=new Cg(x),D=new Ig(x),w=new H0(C),Kt=new Eg(C,w),O=new zg(C,w,vt,Kt),Y=new Og(C,O,w,vt),wt=new kg(C,ht,yt),Pt=new Rg(nt),Q=new t1(x,Ft,D,et,ht,Kt,Pt),q=new S1(x,nt),Ut=new i1,pt=new c1(et),tt=new wg(x,Ft,D,Z,Y,f,l),zt=new d1(x,Y,ht),z=new b1(C,vt,ht,Z),Ht=new Tg(C,et,vt),Gt=new Ng(C,et,vt),vt.programs=Q.programs,x.capabilities=ht,x.extensions=et,x.properties=nt,x.renderLists=Ut,x.shadowMap=zt,x.state=Z,x.info=vt}Mt();const it=new y1(x,C);this.xr=it,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const A=et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(V,K,!1))},this.getSize=function(A){return A.set(V,K)},this.setSize=function(A,F,G=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,K=F,e.width=Math.floor(A*X),e.height=Math.floor(F*X),G===!0&&(e.style.width=A+"px",e.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(V*X,K*X).floor()},this.setDrawingBufferSize=function(A,F,G){V=A,K=F,X=G,e.width=Math.floor(A*G),e.height=Math.floor(F*G),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(Tt)},this.setViewport=function(A,F,G,H){A.isVector4?Tt.set(A.x,A.y,A.z,A.w):Tt.set(A,F,G,H),Z.viewport(P.copy(Tt).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(Zt)},this.setScissor=function(A,F,G,H){A.isVector4?Zt.set(A.x,A.y,A.z,A.w):Zt.set(A,F,G,H),Z.scissor(N.copy(Zt).multiplyScalar(X).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(A){Z.setScissorTest(Xt=A)},this.setOpaqueSort=function(A){ot=A},this.setTransparentSort=function(A){xt=A},this.getClearColor=function(A){return A.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(A=!0,F=!0,G=!0){let H=0;if(A){let k=!1;if(L!==null){const at=L.texture.format;k=at===Yl||at===Xl||at===Wl}if(k){const at=L.texture.type,St=at===Wn||at===ji||at===pr||at===mr||at===Vl||at===Gl,Dt=tt.getClearColor(),Et=tt.getClearAlpha(),Wt=Dt.r,Yt=Dt.g,kt=Dt.b;St?(g[0]=Wt,g[1]=Yt,g[2]=kt,g[3]=Et,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Wt,_[1]=Yt,_[2]=kt,_[3]=Et,C.clearBufferiv(C.COLOR,0,_))}else H|=C.COLOR_BUFFER_BIT}F&&(H|=C.DEPTH_BUFFER_BIT),G&&(H|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",At,!1),e.removeEventListener("webglcontextrestored",rt,!1),e.removeEventListener("webglcontextcreationerror",J,!1),tt.dispose(),Ut.dispose(),pt.dispose(),nt.dispose(),Ft.dispose(),D.dispose(),Y.dispose(),Kt.dispose(),z.dispose(),Q.dispose(),it.dispose(),it.removeEventListener("sessionstart",hc),it.removeEventListener("sessionend",uc),Ci.stop()};function At(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function rt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=vt.autoReset,F=zt.enabled,G=zt.autoUpdate,H=zt.needsUpdate,k=zt.type;Mt(),vt.autoReset=A,zt.enabled=F,zt.autoUpdate=G,zt.needsUpdate=H,zt.type=k}function J(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Lt(A){const F=A.target;F.removeEventListener("dispose",Lt),$t(F)}function $t(A){be(A),nt.remove(A)}function be(A){const F=nt.get(A).programs;F!==void 0&&(F.forEach(function(G){Q.releaseProgram(G)}),A.isShaderMaterial&&Q.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,G,H,k,at){F===null&&(F=ae);const St=k.isMesh&&k.matrixWorld.determinant()<0,Dt=dd(A,F,G,H,k);Z.setMaterial(H,St);let Et=G.index,Wt=1;if(H.wireframe===!0){if(Et=O.getWireframeAttribute(G),Et===void 0)return;Wt=2}const Yt=G.drawRange,kt=G.attributes.position;let se=Yt.start*Wt,_e=(Yt.start+Yt.count)*Wt;at!==null&&(se=Math.max(se,at.start*Wt),_e=Math.min(_e,(at.start+at.count)*Wt)),Et!==null?(se=Math.max(se,0),_e=Math.min(_e,Et.count)):kt!=null&&(se=Math.max(se,0),_e=Math.min(_e,kt.count));const Pe=_e-se;if(Pe<0||Pe===1/0)return;Kt.setup(k,H,Dt,G,Et);let we,ye=Ht;if(Et!==null&&(we=w.get(Et),ye=Gt,ye.setIndex(we)),k.isMesh)H.wireframe===!0?(Z.setLineWidth(H.wireframeLinewidth*Vt()),ye.setMode(C.LINES)):ye.setMode(C.TRIANGLES);else if(k.isLine){let Bt=H.linewidth;Bt===void 0&&(Bt=1),Z.setLineWidth(Bt*Vt()),k.isLineSegments?ye.setMode(C.LINES):k.isLineLoop?ye.setMode(C.LINE_LOOP):ye.setMode(C.LINE_STRIP)}else k.isPoints?ye.setMode(C.POINTS):k.isSprite&&ye.setMode(C.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Ts("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ye.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Bt=k._multiDrawStarts,Re=k._multiDrawCounts,ue=k._multiDrawCount,un=Et?w.get(Et).bytesPerElement:1,ts=nt.get(H).currentProgram.getUniforms();for(let dn=0;dn<ue;dn++)ts.setValue(C,"_gl_DrawID",dn),ye.render(Bt[dn]/un,Re[dn])}else if(k.isInstancedMesh)ye.renderInstances(se,Pe,k.count);else if(G.isInstancedBufferGeometry){const Bt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Re=Math.min(G.instanceCount,Bt);ye.renderInstances(se,Pe,Re)}else ye.render(se,Pe)};function pe(A,F,G){A.transparent===!0&&A.side===Ie&&A.forceSinglePass===!1?(A.side=nn,A.needsUpdate=!0,Er(A,F,G),A.side=Ei,A.needsUpdate=!0,Er(A,F,G),A.side=Ie):Er(A,F,G)}this.compile=function(A,F,G=null){G===null&&(G=A),p=pt.get(G),p.init(F),v.push(p),G.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),A!==G&&A.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const H=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const at=k.material;if(at)if(Array.isArray(at))for(let St=0;St<at.length;St++){const Dt=at[St];pe(Dt,G,k),H.add(Dt)}else pe(at,G,k),H.add(at)}),p=v.pop(),H},this.compileAsync=function(A,F,G=null){const H=this.compile(A,F,G);return new Promise(k=>{function at(){if(H.forEach(function(St){nt.get(St).currentProgram.isReady()&&H.delete(St)}),H.size===0){k(A);return}setTimeout(at,10)}et.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Pn=null;function Yn(A){Pn&&Pn(A)}function hc(){Ci.stop()}function uc(){Ci.start()}const Ci=new Qu;Ci.setAnimationLoop(Yn),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(A){Pn=A,it.setAnimationLoop(A),A===null?Ci.stop():Ci.start()},it.addEventListener("sessionstart",hc),it.addEventListener("sessionend",uc),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(F),F=it.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,F,L),p=pt.get(A,v.length),p.init(F),v.push(p),st.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),j.setFromProjectionMatrix(st),It=this.localClippingEnabled,lt=Pt.init(this.clippingPlanes,It),m=Ut.get(A,y.length),m.init(),y.push(m),it.enabled===!0&&it.isPresenting===!0){const at=x.xr.getDepthSensingMesh();at!==null&&Bo(at,F,-1/0,x.sortObjects)}Bo(A,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ot,xt),ne=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,ne&&tt.addToRenderList(m,A),this.info.render.frame++,lt===!0&&Pt.beginShadows();const G=p.state.shadowsArray;zt.render(G,A,F),lt===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,k=m.transmissive;if(p.setupLights(),F.isArrayCamera){const at=F.cameras;if(k.length>0)for(let St=0,Dt=at.length;St<Dt;St++){const Et=at[St];fc(H,k,A,Et)}ne&&tt.render(A);for(let St=0,Dt=at.length;St<Dt;St++){const Et=at[St];dc(m,A,Et,Et.viewport)}}else k.length>0&&fc(H,k,A,F),ne&&tt.render(A),dc(m,A,F);L!==null&&T===0&&(yt.updateMultisampleRenderTarget(L),yt.updateRenderTargetMipmap(L)),A.isScene===!0&&A.onAfterRender(x,A,F),Kt.resetDefaultState(),S=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],lt===!0&&Pt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Bo(A,F,G,H){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){H&&bt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(st);const St=Y.update(A),Dt=A.material;Dt.visible&&m.push(A,St,Dt,G,bt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){const St=Y.update(A),Dt=A.material;if(H&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),bt.copy(A.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),bt.copy(St.boundingSphere.center)),bt.applyMatrix4(A.matrixWorld).applyMatrix4(st)),Array.isArray(Dt)){const Et=St.groups;for(let Wt=0,Yt=Et.length;Wt<Yt;Wt++){const kt=Et[Wt],se=Dt[kt.materialIndex];se&&se.visible&&m.push(A,St,se,G,bt.z,kt)}}else Dt.visible&&m.push(A,St,Dt,G,bt.z,null)}}const at=A.children;for(let St=0,Dt=at.length;St<Dt;St++)Bo(at[St],F,G,H)}function dc(A,F,G,H){const k=A.opaque,at=A.transmissive,St=A.transparent;p.setupLightsView(G),lt===!0&&Pt.setGlobalState(x.clippingPlanes,G),H&&Z.viewport(P.copy(H)),k.length>0&&wr(k,F,G),at.length>0&&wr(at,F,G),St.length>0&&wr(St,F,G),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function fc(A,F,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Rn(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Hn:Wn,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const at=p.state.transmissionRenderTarget[H.id],St=H.viewport||P;at.setSize(St.z*x.transmissionResolutionScale,St.w*x.transmissionResolutionScale);const Dt=x.getRenderTarget(),Et=x.getActiveCubeFace(),Wt=x.getActiveMipmapLevel();x.setRenderTarget(at),x.getClearColor(W),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear(),ne&&tt.render(G);const Yt=x.toneMapping;x.toneMapping=wi;const kt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),lt===!0&&Pt.setGlobalState(x.clippingPlanes,H),wr(A,G,H),yt.updateMultisampleRenderTarget(at),yt.updateRenderTargetMipmap(at),et.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let _e=0,Pe=F.length;_e<Pe;_e++){const we=F[_e],ye=we.object,Bt=we.geometry,Re=we.material,ue=we.group;if(Re.side===Ie&&ye.layers.test(H.layers)){const un=Re.side;Re.side=nn,Re.needsUpdate=!0,pc(ye,G,H,Bt,Re,ue),Re.side=un,Re.needsUpdate=!0,se=!0}}se===!0&&(yt.updateMultisampleRenderTarget(at),yt.updateRenderTargetMipmap(at))}x.setRenderTarget(Dt,Et,Wt),x.setClearColor(W,B),kt!==void 0&&(H.viewport=kt),x.toneMapping=Yt}function wr(A,F,G){const H=F.isScene===!0?F.overrideMaterial:null;for(let k=0,at=A.length;k<at;k++){const St=A[k],Dt=St.object,Et=St.geometry,Wt=St.group;let Yt=St.material;Yt.allowOverride===!0&&H!==null&&(Yt=H),Dt.layers.test(G.layers)&&pc(Dt,F,G,Et,Yt,Wt)}}function pc(A,F,G,H,k,at){A.onBeforeRender(x,F,G,H,k,at),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(x,F,G,H,A,at),k.transparent===!0&&k.side===Ie&&k.forceSinglePass===!1?(k.side=nn,k.needsUpdate=!0,x.renderBufferDirect(G,F,H,k,A,at),k.side=Ei,k.needsUpdate=!0,x.renderBufferDirect(G,F,H,k,A,at),k.side=Ie):x.renderBufferDirect(G,F,H,k,A,at),A.onAfterRender(x,F,G,H,k,at)}function Er(A,F,G){F.isScene!==!0&&(F=ae);const H=nt.get(A),k=p.state.lights,at=p.state.shadowsArray,St=k.state.version,Dt=Q.getParameters(A,k.state,at,F,G),Et=Q.getProgramCacheKey(Dt);let Wt=H.programs;H.environment=A.isMeshStandardMaterial?F.environment:null,H.fog=F.fog,H.envMap=(A.isMeshStandardMaterial?D:Ft).get(A.envMap||H.environment),H.envMapRotation=H.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Wt===void 0&&(A.addEventListener("dispose",Lt),Wt=new Map,H.programs=Wt);let Yt=Wt.get(Et);if(Yt!==void 0){if(H.currentProgram===Yt&&H.lightsStateVersion===St)return gc(A,Dt),Yt}else Dt.uniforms=Q.getUniforms(A),A.onBeforeCompile(Dt,x),Yt=Q.acquireProgram(Dt,Et),Wt.set(Et,Yt),H.uniforms=Dt.uniforms;const kt=H.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=Pt.uniform),gc(A,Dt),H.needsLights=pd(A),H.lightsStateVersion=St,H.needsLights&&(kt.ambientLightColor.value=k.state.ambient,kt.lightProbe.value=k.state.probe,kt.directionalLights.value=k.state.directional,kt.directionalLightShadows.value=k.state.directionalShadow,kt.spotLights.value=k.state.spot,kt.spotLightShadows.value=k.state.spotShadow,kt.rectAreaLights.value=k.state.rectArea,kt.ltc_1.value=k.state.rectAreaLTC1,kt.ltc_2.value=k.state.rectAreaLTC2,kt.pointLights.value=k.state.point,kt.pointLightShadows.value=k.state.pointShadow,kt.hemisphereLights.value=k.state.hemi,kt.directionalShadowMap.value=k.state.directionalShadowMap,kt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,kt.spotShadowMap.value=k.state.spotShadowMap,kt.spotLightMatrix.value=k.state.spotLightMatrix,kt.spotLightMap.value=k.state.spotLightMap,kt.pointShadowMap.value=k.state.pointShadowMap,kt.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=Yt,H.uniformsList=null,Yt}function mc(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=vo.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function gc(A,F){const G=nt.get(A);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function dd(A,F,G,H,k){F.isScene!==!0&&(F=ae),yt.resetTextureUnits();const at=F.fog,St=H.isMeshStandardMaterial?F.environment:null,Dt=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ds,Et=(H.isMeshStandardMaterial?D:Ft).get(H.envMap||St),Wt=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Yt=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),kt=!!G.morphAttributes.position,se=!!G.morphAttributes.normal,_e=!!G.morphAttributes.color;let Pe=wi;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Pe=x.toneMapping);const we=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ye=we!==void 0?we.length:0,Bt=nt.get(H),Re=p.state.lights;if(lt===!0&&(It===!0||A!==M)){const $e=A===M&&H.id===S;Pt.setState(H,A,$e)}let ue=!1;H.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Re.state.version||Bt.outputColorSpace!==Dt||k.isBatchedMesh&&Bt.batching===!1||!k.isBatchedMesh&&Bt.batching===!0||k.isBatchedMesh&&Bt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Bt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Bt.instancing===!1||!k.isInstancedMesh&&Bt.instancing===!0||k.isSkinnedMesh&&Bt.skinning===!1||!k.isSkinnedMesh&&Bt.skinning===!0||k.isInstancedMesh&&Bt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Bt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Bt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Bt.instancingMorph===!1&&k.morphTexture!==null||Bt.envMap!==Et||H.fog===!0&&Bt.fog!==at||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==Pt.numPlanes||Bt.numIntersection!==Pt.numIntersection)||Bt.vertexAlphas!==Wt||Bt.vertexTangents!==Yt||Bt.morphTargets!==kt||Bt.morphNormals!==se||Bt.morphColors!==_e||Bt.toneMapping!==Pe||Bt.morphTargetsCount!==ye)&&(ue=!0):(ue=!0,Bt.__version=H.version);let un=Bt.currentProgram;ue===!0&&(un=Er(H,F,k));let ts=!1,dn=!1,Hs=!1;const Ee=un.getUniforms(),yn=Bt.uniforms;if(Z.useProgram(un.program)&&(ts=!0,dn=!0,Hs=!0),H.id!==S&&(S=H.id,dn=!0),ts||M!==A){Z.buffers.depth.getReversed()?(_t.copy(A.projectionMatrix),_f(_t),xf(_t),Ee.setValue(C,"projectionMatrix",_t)):Ee.setValue(C,"projectionMatrix",A.projectionMatrix),Ee.setValue(C,"viewMatrix",A.matrixWorldInverse);const rn=Ee.map.cameraPosition;rn!==void 0&&rn.setValue(C,Ct.setFromMatrixPosition(A.matrixWorld)),ht.logarithmicDepthBuffer&&Ee.setValue(C,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ee.setValue(C,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,dn=!0,Hs=!0)}if(k.isSkinnedMesh){Ee.setOptional(C,k,"bindMatrix"),Ee.setOptional(C,k,"bindMatrixInverse");const $e=k.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),Ee.setValue(C,"boneTexture",$e.boneTexture,yt))}k.isBatchedMesh&&(Ee.setOptional(C,k,"batchingTexture"),Ee.setValue(C,"batchingTexture",k._matricesTexture,yt),Ee.setOptional(C,k,"batchingIdTexture"),Ee.setValue(C,"batchingIdTexture",k._indirectTexture,yt),Ee.setOptional(C,k,"batchingColorTexture"),k._colorsTexture!==null&&Ee.setValue(C,"batchingColorTexture",k._colorsTexture,yt));const Mn=G.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&wt.update(k,G,un),(dn||Bt.receiveShadow!==k.receiveShadow)&&(Bt.receiveShadow=k.receiveShadow,Ee.setValue(C,"receiveShadow",k.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(yn.envMap.value=Et,yn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&F.environment!==null&&(yn.envMapIntensity.value=F.environmentIntensity),dn&&(Ee.setValue(C,"toneMappingExposure",x.toneMappingExposure),Bt.needsLights&&fd(yn,Hs),at&&H.fog===!0&&q.refreshFogUniforms(yn,at),q.refreshMaterialUniforms(yn,H,X,K,p.state.transmissionRenderTarget[A.id]),vo.upload(C,mc(Bt),yn,yt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(vo.upload(C,mc(Bt),yn,yt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ee.setValue(C,"center",k.center),Ee.setValue(C,"modelViewMatrix",k.modelViewMatrix),Ee.setValue(C,"normalMatrix",k.normalMatrix),Ee.setValue(C,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const $e=H.uniformsGroups;for(let rn=0,Vo=$e.length;rn<Vo;rn++){const Pi=$e[rn];z.update(Pi,un),z.bind(Pi,un)}}return un}function fd(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function pd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,F,G){const H=nt.get(A);H.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),nt.get(A.texture).__webglTexture=F,nt.get(A.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:G,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,F){const G=nt.get(A);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0};const md=C.createFramebuffer();this.setRenderTarget=function(A,F=0,G=0){L=A,b=F,T=G;let H=!0,k=null,at=!1,St=!1;if(A){const Et=nt.get(A);if(Et.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(C.FRAMEBUFFER,null),H=!1;else if(Et.__webglFramebuffer===void 0)yt.setupRenderTarget(A);else if(Et.__hasExternalTextures)yt.rebindTextures(A,nt.get(A.texture).__webglTexture,nt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const kt=A.depthTexture;if(Et.__boundDepthTexture!==kt){if(kt!==null&&nt.has(kt)&&(A.width!==kt.image.width||A.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");yt.setupDepthRenderbuffer(A)}}const Wt=A.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(St=!0);const Yt=nt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Yt[F])?k=Yt[F][G]:k=Yt[F],at=!0):A.samples>0&&yt.useMultisampledRTT(A)===!1?k=nt.get(A).__webglMultisampledFramebuffer:Array.isArray(Yt)?k=Yt[G]:k=Yt,P.copy(A.viewport),N.copy(A.scissor),U=A.scissorTest}else P.copy(Tt).multiplyScalar(X).floor(),N.copy(Zt).multiplyScalar(X).floor(),U=Xt;if(G!==0&&(k=md),Z.bindFramebuffer(C.FRAMEBUFFER,k)&&H&&Z.drawBuffers(A,k),Z.viewport(P),Z.scissor(N),Z.setScissorTest(U),at){const Et=nt.get(A.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,Et.__webglTexture,G)}else if(St){const Et=nt.get(A.texture),Wt=F;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Et.__webglTexture,G,Wt)}else if(A!==null&&G!==0){const Et=nt.get(A.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Et.__webglTexture,G)}S=-1},this.readRenderTargetPixels=function(A,F,G,H,k,at,St,Dt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=nt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et){Z.bindFramebuffer(C.FRAMEBUFFER,Et);try{const Wt=A.textures[Dt],Yt=Wt.format,kt=Wt.type;if(!ht.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-H&&G>=0&&G<=A.height-k&&(A.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Dt),C.readPixels(F,G,H,k,mt.convert(Yt),mt.convert(kt),at))}finally{const Wt=L!==null?nt.get(L).__webglFramebuffer:null;Z.bindFramebuffer(C.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(A,F,G,H,k,at,St,Dt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=nt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&St!==void 0&&(Et=Et[St]),Et)if(F>=0&&F<=A.width-H&&G>=0&&G<=A.height-k){Z.bindFramebuffer(C.FRAMEBUFFER,Et);const Wt=A.textures[Dt],Yt=Wt.format,kt=Wt.type;if(!ht.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,se),C.bufferData(C.PIXEL_PACK_BUFFER,at.byteLength,C.STREAM_READ),A.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Dt),C.readPixels(F,G,H,k,mt.convert(Yt),mt.convert(kt),0);const _e=L!==null?nt.get(L).__webglFramebuffer:null;Z.bindFramebuffer(C.FRAMEBUFFER,_e);const Pe=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await gf(C,Pe,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,se),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,at),C.deleteBuffer(se),C.deleteSync(Pe),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,F=null,G=0){const H=Math.pow(2,-G),k=Math.floor(A.image.width*H),at=Math.floor(A.image.height*H),St=F!==null?F.x:0,Dt=F!==null?F.y:0;yt.setTexture2D(A,0),C.copyTexSubImage2D(C.TEXTURE_2D,G,0,0,St,Dt,k,at),Z.unbindTexture()};const gd=C.createFramebuffer(),_d=C.createFramebuffer();this.copyTextureToTexture=function(A,F,G=null,H=null,k=0,at=null){at===null&&(k!==0?(Ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=k,k=0):at=0);let St,Dt,Et,Wt,Yt,kt,se,_e,Pe;const we=A.isCompressedTexture?A.mipmaps[at]:A.image;if(G!==null)St=G.max.x-G.min.x,Dt=G.max.y-G.min.y,Et=G.isBox3?G.max.z-G.min.z:1,Wt=G.min.x,Yt=G.min.y,kt=G.isBox3?G.min.z:0;else{const Mn=Math.pow(2,-k);St=Math.floor(we.width*Mn),Dt=Math.floor(we.height*Mn),A.isDataArrayTexture?Et=we.depth:A.isData3DTexture?Et=Math.floor(we.depth*Mn):Et=1,Wt=0,Yt=0,kt=0}H!==null?(se=H.x,_e=H.y,Pe=H.z):(se=0,_e=0,Pe=0);const ye=mt.convert(F.format),Bt=mt.convert(F.type);let Re;F.isData3DTexture?(yt.setTexture3D(F,0),Re=C.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(yt.setTexture2DArray(F,0),Re=C.TEXTURE_2D_ARRAY):(yt.setTexture2D(F,0),Re=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);const ue=C.getParameter(C.UNPACK_ROW_LENGTH),un=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ts=C.getParameter(C.UNPACK_SKIP_PIXELS),dn=C.getParameter(C.UNPACK_SKIP_ROWS),Hs=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,we.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,we.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Wt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Yt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,kt);const Ee=A.isDataArrayTexture||A.isData3DTexture,yn=F.isDataArrayTexture||F.isData3DTexture;if(A.isDepthTexture){const Mn=nt.get(A),$e=nt.get(F),rn=nt.get(Mn.__renderTarget),Vo=nt.get($e.__renderTarget);Z.bindFramebuffer(C.READ_FRAMEBUFFER,rn.__webglFramebuffer),Z.bindFramebuffer(C.DRAW_FRAMEBUFFER,Vo.__webglFramebuffer);for(let Pi=0;Pi<Et;Pi++)Ee&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,nt.get(A).__webglTexture,k,kt+Pi),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,nt.get(F).__webglTexture,at,Pe+Pi)),C.blitFramebuffer(Wt,Yt,St,Dt,se,_e,St,Dt,C.DEPTH_BUFFER_BIT,C.NEAREST);Z.bindFramebuffer(C.READ_FRAMEBUFFER,null),Z.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(k!==0||A.isRenderTargetTexture||nt.has(A)){const Mn=nt.get(A),$e=nt.get(F);Z.bindFramebuffer(C.READ_FRAMEBUFFER,gd),Z.bindFramebuffer(C.DRAW_FRAMEBUFFER,_d);for(let rn=0;rn<Et;rn++)Ee?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Mn.__webglTexture,k,kt+rn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Mn.__webglTexture,k),yn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,$e.__webglTexture,at,Pe+rn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,$e.__webglTexture,at),k!==0?C.blitFramebuffer(Wt,Yt,St,Dt,se,_e,St,Dt,C.COLOR_BUFFER_BIT,C.NEAREST):yn?C.copyTexSubImage3D(Re,at,se,_e,Pe+rn,Wt,Yt,St,Dt):C.copyTexSubImage2D(Re,at,se,_e,Wt,Yt,St,Dt);Z.bindFramebuffer(C.READ_FRAMEBUFFER,null),Z.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else yn?A.isDataTexture||A.isData3DTexture?C.texSubImage3D(Re,at,se,_e,Pe,St,Dt,Et,ye,Bt,we.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(Re,at,se,_e,Pe,St,Dt,Et,ye,we.data):C.texSubImage3D(Re,at,se,_e,Pe,St,Dt,Et,ye,Bt,we):A.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,at,se,_e,St,Dt,ye,Bt,we.data):A.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,at,se,_e,we.width,we.height,ye,we.data):C.texSubImage2D(C.TEXTURE_2D,at,se,_e,St,Dt,ye,Bt,we);C.pixelStorei(C.UNPACK_ROW_LENGTH,ue),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,un),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ts),C.pixelStorei(C.UNPACK_SKIP_ROWS,dn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Hs),at===0&&F.generateMipmaps&&C.generateMipmap(Re),Z.unbindTexture()},this.copyTextureToTexture3D=function(A,F,G=null,H=null,k=0){return Ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,F,G,H,k)},this.initRenderTarget=function(A){nt.get(A).__webglFramebuffer===void 0&&yt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?yt.setTextureCube(A,0):A.isData3DTexture?yt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?yt.setTexture2DArray(A,0):yt.setTexture2D(A,0),Z.unbindTexture()},this.resetState=function(){b=0,T=0,L=null,Z.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}function sd(s){let t=s>>>0;return function(){t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}class Xe{constructor(t=1){this.next=sd(t)}float(t=0,e=1){return t+(e-t)*this.next()}int(t,e){return Math.floor(this.float(t,e+1))}pick(t){return t[Math.floor(this.next()*t.length)]}chance(t){return this.next()<t}sign(){return this.next()<.5?-1:1}gauss(t=0,e=1){const n=Math.max(1e-9,this.next()),i=this.next();return t+e*Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*i)}}const fe=(s,t,e)=>s<t?t:s>e?e:s,io=(s,t,e)=>s+(t-s)*e,Ot=(s,t,e)=>{const n=fe((e-s)/(t-s),0,1);return n*n*(3-2*n)},ur=s=>{for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;return s};function Xi(s,t,e){let n=s*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967295}function E1(s,t,e,n,i){const r=Math.floor(s),o=Math.floor(t),a=s-r,l=t-o,h=a*a*(3-2*a),c=l*l*(3-2*l),u=p=>(p%e+e)%e,d=p=>(p%n+n)%n,f=Xi(u(r),d(o),i),g=Xi(u(r+1),d(o),i),_=Xi(u(r),d(o+1),i),m=Xi(u(r+1),d(o+1),i);return f+(g-f)*h+(_-f)*c+(f-g-_+m)*h*c}function Se(s,t,e,n=4,i=0,r=1){let o=0,a=.5,l=e,h=0;for(let c=0;c<n;c++){const u=Math.max(1,Math.round(l*r));o+=a*E1(s*l,t*u,l,u,i+c*17),h+=a,l*=2,a*=.5}return o/h}function hn(s,t=s){const e=document.createElement("canvas");return e.width=s,e.height=t,e}function kn(s,{srgb:t=!0,repeat:e=!0,anisotropy:n=8}={}){const i=new Zi(s);return t&&(i.colorSpace=He),e&&(i.wrapS=i.wrapT=Ti),i.anisotropy=n,i.generateMipmaps=!0,i.minFilter=Si,i.needsUpdate=!0,i}class ai{constructor(t,e=t){this.w=t,this.h=e,this.col=new Float32Array(t*e*3),this.hgt=new Float32Array(t*e),this.rough=new Float32Array(t*e).fill(.8)}forEach(t){const{w:e,h:n}=this;for(let i=0;i<n;i++)for(let r=0;r<e;r++)t(r,i,i*e+r,r/e,i/n)}setCol(t,e,n,i){this.col[t*3]=e,this.col[t*3+1]=n,this.col[t*3+2]=i}mulCol(t,e){this.col[t*3]*=e,this.col[t*3+1]*=e,this.col[t*3+2]*=e}mixCol(t,e,n,i,r){this.col[t*3]+=(e-this.col[t*3])*r,this.col[t*3+1]+=(n-this.col[t*3+1])*r,this.col[t*3+2]+=(i-this.col[t*3+2])*r}colorCanvas(){const t=hn(this.w,this.h),e=t.getContext("2d"),n=e.createImageData(this.w,this.h);for(let i=0;i<this.w*this.h;i++)n.data[i*4]=fe(this.col[i*3],0,1)*255,n.data[i*4+1]=fe(this.col[i*3+1],0,1)*255,n.data[i*4+2]=fe(this.col[i*3+2],0,1)*255,n.data[i*4+3]=255;return e.putImageData(n,0,0),t}roughCanvas(){const t=hn(this.w,this.h),e=t.getContext("2d"),n=e.createImageData(this.w,this.h);for(let i=0;i<this.w*this.h;i++){const r=fe(this.rough[i],0,1)*255;n.data[i*4]=r,n.data[i*4+1]=r,n.data[i*4+2]=r,n.data[i*4+3]=255}return e.putImageData(n,0,0),t}normalCanvas(t=2){const{w:e,h:n,hgt:i}=this,r=hn(e,n),o=r.getContext("2d"),a=o.createImageData(e,n),l=(h,c)=>i[(c+n)%n*e+(h+e)%e];for(let h=0;h<n;h++)for(let c=0;c<e;c++){const u=(l(c+1,h)-l(c-1,h))*t,d=(l(c,h+1)-l(c,h-1))*t,f=Math.hypot(u,d,1),g=(h*e+c)*4;a.data[g]=(-u/f*.5+.5)*255,a.data[g+1]=(d/f*.5+.5)*255,a.data[g+2]=(1/f*.5+.5)*255,a.data[g+3]=255}return o.putImageData(a,0,0),r}textures(t=2){return{map:kn(this.colorCanvas()),roughnessMap:kn(this.roughCanvas(),{srgb:!1}),normalMap:kn(this.normalCanvas(t),{srgb:!1})}}}const qi=s=>{const t=new dt(s);return[t.r,t.g,t.b]};function Aa({seed:s=1,base:t="#6b3b2e",alt:e="#4a2a22",mortar:n="#7b7468",soot:i=.35,size:r=512}={}){const o=new ai(r),a=new Xe(s),l=20,h=6,c=qi(t),u=qi(e),d=qi(n),f=[];for(let _=0;_<l;_++){f.push([]);for(let m=0;m<=h;m++){const p=a.next(),y=a.float(.75,1.15),v=a.chance(.08)?.55:1;f[_].push([(c[0]+(u[0]-c[0])*p)*y*v,(c[1]+(u[1]-c[1])*p)*y*v,(c[2]+(u[2]-c[2])*p)*y*v,a.next()])}}const g=.13;return o.forEach((_,m,p,y,v)=>{const x=v*l,E=Math.floor(x),b=x-E,T=E%2?.5:0,L=y*h+T,S=Math.floor(L),M=L-S,P=f[E][S%(h+1)===h?0:S%h],N=Math.min(b,1-b),U=Math.min(M,1-M)*3.33,W=N<g*.5||U<g*.5,B=Se(y,v,32,3,s),V=Se(y,v,4,4,s+9);if(W)o.setCol(p,d[0]*(.7+B*.5),d[1]*(.7+B*.5),d[2]*(.7+B*.5)),o.hgt[p]=.1+B*.1,o.rough[p]=.95;else{const X=Se(y,v,64,2,s+P[3]*100)>.68?.7:1,ot=(.82+B*.36)*X;o.setCol(p,P[0]*ot,P[1]*ot,P[2]*ot);const xt=fe(Math.min(N,U*.3)*8,0,1);o.hgt[p]=.55+xt*.3+B*.15-(X<1?.25:0),o.rough[p]=.78+B*.15}const K=fe((V-.45)*2.2,0,1)*i;o.mulCol(p,1-K*.65)}),o.textures(3.5)}function Ra({seed:s=2,tint:t="#8a8778",size:e=512,flaking:n=.5}={}){const i=new ai(e),r=qi(t),o=qi("#5a3328");i.forEach((h,c,u,d,f)=>{const g=Se(d,f,24,4,s),_=Se(d,f,3,4,s+3),m=Se(d,f*.5,4,3,s+7,2),p=Se(d,f,5,5,s+11),y=.78+g*.32-fe(m-.55,0,1)*.8;if(i.setCol(u,r[0]*y,r[1]*y,r[2]*y),i.hgt[u]=.6+g*.25,i.rough[u]=.88+g*.08,p>1-n*.35){const v=f*40,x=Math.floor(v),E=d*12+(x%2?.5:0),b=v-x,T=E-Math.floor(E),L=Math.min(b,1-b)<.08||Math.min(T,1-T)<.03,S=.7+Xi(Math.floor(E),x,s)*.4;L?i.setCol(u,.33,.31,.28):i.setCol(u,o[0]*S,o[1]*S,o[2]*S),i.hgt[u]=L?.2:.35,i.rough[u]=.9}else p>1-n*.35-.02&&(i.mulCol(u,.6),i.hgt[u]=.75);i.mulCol(u,.85+_*.3)});const a=new Xe(s*31),l=e;for(let h=0;h<7;h++){let c=a.float(0,l),u=a.float(0,l),d=a.float(0,Math.PI*2);const f=a.int(40,160);for(let g=0;g<f;g++){d+=a.float(-.5,.5),c=(c+Math.cos(d)+l)%l,u=(u+Math.sin(d)+l)%l;const _=Math.floor(u)*l+Math.floor(c);i.mulCol(_,.45),i.hgt[_]=.2}}return i.textures(2.5)}function Nh({seed:s=3,tint:t="#77766f",size:e=512,panels:n=2,joint:i=.006,stains:r=.5}={}){const o=new ai(e),a=qi(t);o.forEach((c,u,d,f,g)=>{const _=Se(f,g,32,4,s),m=Se(f,g,3,4,s+5),p=Se(f,g,6,4,s+8);let y=.8+_*.3+(m-.5)*.35;y-=fe((p-.6)*3,0,1)*.35*r,o.setCol(d,a[0]*y,a[1]*y,a[2]*y),o.hgt[d]=.6+_*.3,o.rough[d]=.82+_*.12-fe((p-.6)*3,0,1)*.25*r;const v=f*n%1,x=g*n%1;Math.min(v,1-v,x,1-x)<i*n&&(o.mulCol(d,.55),o.hgt[d]=.1,o.rough[d]=.95),Se(f,g,128,1,s+2)>.82&&(o.hgt[d]-=.2,o.mulCol(d,.8))});const l=new Xe(s*13),h=e;for(let c=0;c<6;c++){let u=l.float(0,h),d=l.float(0,h),f=l.float(0,Math.PI*2);const g=l.int(60,220);for(let _=0;_<g;_++){f+=l.float(-.35,.35),u=(u+Math.cos(f)+h)%h,d=(d+Math.sin(f)+h)%h;const m=Math.floor(d)*h+Math.floor(u);o.mulCol(m,.4),o.hgt[m]=.05,o.rough[m]=.6}}return o.textures(2.5)}function T1({seed:s=4,size:t=256}={}){const e=new ai(t);return e.forEach((n,i,r,o,a)=>{const l=Se(o,a,64,2,s),h=Se(o,a,4,4,s+1),c=Math.min(a*4%1,1-a*4%1)<.012,u=.16+l*.08+h*.06;e.setCol(r,u*.95,u,u*1.05),e.hgt[r]=l*.6+(c?.4:0),e.rough[r]=h>.62?.25:.85+l*.1}),e.textures(3)}function A1({seed:s=5,size:t=256,paint:e="#2d3236"}={}){const n=new ai(t),i=qi(e);return n.forEach((r,o,a,l,h)=>{const c=Se(l,h,16,5,s),u=Se(l,h,6,4,s+4),d=fe((u-.45)*4,0,1),f=.8+c*.4;n.setCol(a,i[0]*f,i[1]*f,i[2]*f),n.mixCol(a,.32*f,.15*f,.07*f,d),n.hgt[a]=c*.3+d*.3,n.rough[a]=.5+d*.45}),n.textures(2)}function R1({seed:s=6,size:t=256}={}){const e=new ai(t),n=4;return e.forEach((i,r,o,a,l)=>{const h=Math.floor(a*n),c=a*n-h,u=Se(a*.2+h*.37,l,2,3,s+h)*.5+Math.sin(l*40+Se(a,l,8,3,s)*6+h)*.1,d=.6+Xi(h,0,s)*.35,f=(.35+u*.25)*d;e.setCol(o,f*.9,f*.78,f*.62);const g=Math.min(c,1-c)<.03;g&&e.mulCol(o,.3),e.hgt[o]=g?0:.5+u*.3,e.rough[o]=.85}),e.textures(2)}function C1({seed:s=7,size:t=256}={}){const e=new ai(t);return e.forEach((n,i,r,o,a)=>{const l=Se(o,a,8,5,s),h=Se(o*.5,a,6,3,s+3,3),c=fe(.95-fe((l-.5)*1.8,0,1)*.45-fe((h-.55)*2,0,1)*.3,0,1);e.setCol(r,c,c*.98,c*.95),e.hgt[r]=l,e.rough[r]=.4+(1-c)*.9}),e.textures(1.5)}function P1({extent:s=88,size:t=2048,roadHalf:e=4,seed:n=9}={}){const i=t,r=i/s,o=hn(i),a=o.getContext("2d"),l=hn(i),h=l.getContext("2d"),c=v=>(v+s/2)*r,u=a.createImageData(i,i),d=h.createImageData(i,i);for(let v=0;v<i;v++)for(let x=0;x<i;x++){const E=x/i,b=v/i,T=Se(E,b,256,2,n),L=Se(E,b,12,4,n+1),S=Se(E,b,22,4,n+2),M=fe((S-.56)*6,0,1);let P=.15+T*.07+(L-.5)*.06;P*=1-M*.35;const N=(v*i+x)*4;u.data[N]=P*255*.95,u.data[N+1]=P*255*.98,u.data[N+2]=P*255*1.04,u.data[N+3]=255;const U=fe(.62+T*.25-(L-.5)*.3-M*.58,.04,1);d.data[N]=d.data[N+1]=d.data[N+2]=U*255,d.data[N+3]=255}a.putImageData(u,0,0),h.putImageData(d,0,0);const f=new Xe(n);for(let v=0;v<26;v++){const x=f.float(-s/2,s/2),E=f.float(-e+.5,e-.5),b=f.chance(.5),T=b?x:E,L=b?E:x;a.fillStyle=`rgba(${f.int(20,34)},${f.int(20,34)},${f.int(22,36)},0.7)`,a.fillRect(c(T),c(L),f.float(1,4)*r,f.float(.6,2)*r)}const g=(v,x,E)=>{a.save(),a.globalAlpha=E,a.fillStyle=x,v(),a.restore()},_=(v,x)=>{a.beginPath(),a.moveTo(v,x);let E=f.float(0,Math.PI*2);for(let b=0;b<30;b++)E+=f.float(-.6,.6),v+=Math.cos(E)*r*.15,x+=Math.sin(E)*r*.15,a.lineTo(v,x);a.stroke()},m=e+3.5;for(const v of[!0,!1]){for(let x=-s/2;x<s/2;x+=.5){if(Math.abs(x)<m)continue;const E=Se((x+50)/100,v?.2:.7,24,3,n+5),b=fe(.15+E*.5,0,.55);for(const T of[-.12,.12])g(()=>{v?a.fillRect(c(x),c(T-.05),.5*r,.1*r):a.fillRect(c(T-.05),c(x),.1*r,.5*r)},"#9c8a4a",b)}for(const x of[-1,1])g(()=>{v?a.fillRect(c(x*m-(x>0?0:.4)),c(x>0?0:-e),.4*r,e*r):a.fillRect(c(x>0?-e:0),c(x*m-(x>0?0:.4)),e*r,.4*r)},"#b8b6ae",.18)}for(const v of[-1,1])for(let x=-e+.4;x<e-.4;x+=.9){const E=.1+f.float(0,.16);g(()=>a.fillRect(c(v*(e+1.8)-1.3),c(x),2.6*r,.5*r),"#c4c2b8",E),g(()=>a.fillRect(c(x),c(v*(e+1.8)-1.3),.5*r,2.6*r),"#c4c2b8",E)}a.strokeStyle="rgba(5,5,6,0.45)",a.lineWidth=Math.max(1,r*.03);for(let v=0;v<80;v++){const x=f.float(-s/2,s/2),E=f.float(-e,e);f.chance(.5)?_(c(x),c(E)):_(c(E),c(x))}for(let v=0;v<40;v++){const x=f.float(-s/2,s/2),E=f.float(-e+1,e-1),b=f.chance(.5),T=a.createRadialGradient(0,0,0,0,0,f.float(.4,1.2)*r);T.addColorStop(0,"rgba(6,6,8,0.55)"),T.addColorStop(1,"rgba(6,6,8,0)"),a.save(),a.translate(c(b?x:E),c(b?E:x)),a.scale(1,f.float(.5,1)),a.fillStyle=T,a.beginPath(),a.arc(0,0,1.2*r,0,Math.PI*2),a.fill(),a.restore()}for(const v of[-1,1]){const x=a.createLinearGradient(0,c(v*e),0,c(v*(e-.7)));x.addColorStop(0,"rgba(0,0,0,0.45)"),x.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=x,a.fillRect(0,Math.min(c(v*e),c(v*(e-.7))),i,.7*r);const E=a.createLinearGradient(c(v*e),0,c(v*(e-.7)),0);E.addColorStop(0,"rgba(0,0,0,0.45)"),E.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=E,a.fillRect(Math.min(c(v*e),c(v*(e-.7))),0,.7*r,i),h.fillStyle="rgba(20,20,20,0.85)",h.fillRect(0,Math.min(c(v*e),c(v*(e-.45))),i,.45*r),h.fillRect(Math.min(c(v*e),c(v*(e-.45))),0,.45*r,i)}for(const[v,x]of[[-18,1.6],[12,-1.8],[1.5,18],[-1.2,-22],[28,1.2]]){a.fillStyle="#16161a",a.beginPath(),a.arc(c(v),c(x),.36*r,0,Math.PI*2),a.fill(),a.strokeStyle="rgba(70,70,74,0.8)",a.lineWidth=r*.03;for(let E=.1;E<.36;E+=.08)a.beginPath(),a.arc(c(v),c(x),E*r,0,Math.PI*2),a.stroke();h.fillStyle="rgba(70,70,70,1)",h.beginPath(),h.arc(c(v),c(x),.36*r,0,Math.PI*2),h.fill()}a.strokeStyle="rgba(4,4,5,0.5)",a.lineWidth=r*.22;for(const v of[0,1.6])a.beginPath(),a.moveTo(c(-14),c(-1.2+v*.6)),a.bezierCurveTo(c(-6),c(-1.5+v*.6),c(0),c(-2+v*.5),c(4.5+v*.3),c(-5.2+v*.6)),a.stroke();const p=kn(o,{repeat:!1,anisotropy:16}),y=kn(l,{srgb:!1,repeat:!1,anisotropy:16});return{map:p,roughnessMap:y}}function L1({seed:s=10,size:t=256}={}){const e=new ai(t);return e.forEach((n,i,r,o,a)=>{e.hgt[r]=Se(o,a,48,3,s)*.8}),kn(e.normalCanvas(2),{srgb:!1})}function D1(){const s=[],t=e=>{const n=hn(128,192),i=n.getContext("2d");e(i,128,192),s.push(kn(n,{repeat:!1,anisotropy:4}))};return t((e,n,i)=>{const r=e.createRadialGradient(n*.7,i*.45,4,n*.7,i*.45,i*.7);r.addColorStop(0,"#ffd59a"),r.addColorStop(.35,"#b9783d"),r.addColorStop(1,"#2a1a10"),e.fillStyle=r,e.fillRect(0,0,n,i),e.fillStyle="rgba(20,12,8,0.85)",e.fillRect(0,i*.72,n*.55,i*.28),e.fillRect(n*.1,i*.12,n*.3,i*.35),e.fillStyle="rgba(30,18,10,0.6)",e.fillRect(0,0,n*.18,i),e.fillRect(n*.86,0,n*.14,i)}),t((e,n,i)=>{const r=e.createLinearGradient(0,0,0,i);r.addColorStop(0,"#d9a868"),r.addColorStop(1,"#5a3a1c"),e.fillStyle=r,e.fillRect(0,0,n,i),e.fillStyle="rgba(40,26,14,0.75)";for(let o=0;o<i*.6;o+=9)e.fillRect(0,o,n,5);e.fillStyle="rgba(15,10,6,0.6)",e.fillRect(n*.55,i*.62,n*.3,i*.38)}),t((e,n,i)=>{const r=e.createRadialGradient(n*.35,i*.7,4,n*.35,i*.7,i*.8);r.addColorStop(0,"#9fb8d0"),r.addColorStop(.4,"#3f566b"),r.addColorStop(1,"#0d1218"),e.fillStyle=r,e.fillRect(0,0,n,i),e.fillStyle="rgba(5,8,10,0.8)",e.fillRect(n*.5,i*.5,n*.5,i*.5),e.fillStyle="rgba(10,14,18,0.7)",e.fillRect(0,0,n,i*.08)}),s}function dr(s="diner"){const n=hn(512,256),i=n.getContext("2d");if(s==="diner"){const r=i.createLinearGradient(0,0,0,256);r.addColorStop(0,"#f1c98a"),r.addColorStop(.5,"#b07a42"),r.addColorStop(1,"#3a2414"),i.fillStyle=r,i.fillRect(0,0,512,256);for(let o=60;o<512;o+=110){const a=i.createRadialGradient(o,30,2,o,30,60);a.addColorStop(0,"rgba(255,240,200,1)"),a.addColorStop(1,"rgba(255,200,120,0)"),i.fillStyle=a,i.fillRect(o-60,0,120,100)}i.fillStyle="#2a1810",i.fillRect(0,256*.62,512,256*.08),i.fillStyle="#1b0f0a",i.fillRect(0,256*.7,512,256*.3);for(let o=30;o<512;o+=70)i.fillStyle="#120a06",i.fillRect(o,256*.74,6,256*.26),i.beginPath(),i.ellipse(o+3,256*.74,18,6,0,0,Math.PI*2),i.fill();i.fillStyle="rgba(70,6,6,0.75)";for(let o=0;o<7;o++)i.beginPath(),i.ellipse(120+o*22,120+o%3*18,9,14,.3,0,Math.PI*2),i.fill();i.fillRect(130,130,120,6),i.fillStyle="rgba(60,4,4,0.5)",i.fillRect(110,140,14,90),i.fillRect(196,136,10,70)}else if(s==="dinerBack"){const r=i.createLinearGradient(0,0,0,256);r.addColorStop(0,"#d9b48a"),r.addColorStop(1,"#6a4a30"),i.fillStyle=r,i.fillRect(0,0,512,256),i.strokeStyle="rgba(60,40,25,0.35)";for(let o=0;o<256;o+=14)i.beginPath(),i.moveTo(0,o),i.lineTo(512,o),i.stroke();i.fillStyle="#1a120c",i.fillRect(512*.36,256*.3,512*.28,256*.28),i.fillStyle="#ffdca0",i.fillRect(512*.38,256*.32,512*.24,256*.04);for(let o=0;o<3;o++){i.fillStyle="#2a1e16",i.fillRect(512*.05+o*512*.1,256*.08,512*.08,256*.16),i.fillStyle="#c9b08a";for(let a=0;a<5;a++)i.fillRect(512*.06+o*512*.1,256*.1+a*6,512*.05,2)}i.fillStyle="#7a1a14",i.fillRect(512*.72,256*.1,512*.2,256*.12),i.fillStyle="rgba(80,8,6,0.85)",i.beginPath(),i.ellipse(512*.8,256*.5,30,18,.4,0,Math.PI*2),i.fill();for(let o=0;o<9;o++)i.fillRect(512*.78+o*4-16,256*.5,3,30+o*37%50)}else if(s==="pharmacy"){i.fillStyle="#9fb3a6",i.fillRect(0,0,512,256);for(let r=30;r<256;r+=48){i.fillStyle="#3a4a42",i.fillRect(0,r,512,6);for(let o=0;o<512;o+=10)i.fillStyle=`hsl(${o*7%360},20%,${30+o*13%30}%)`,i.fillRect(o,r-18,8,18)}i.fillStyle="rgba(10,15,12,0.75)",i.fillRect(0,256*.75,512,256*.25)}else{const r=i.createRadialGradient(256,20,5,256,60,307.2);r.addColorStop(0,"#d6b27a"),r.addColorStop(1,"#1a130c"),i.fillStyle=r,i.fillRect(0,0,512,256),i.fillStyle="rgba(10,8,6,0.85)",i.fillRect(40,256*.5,120,256*.5),i.fillRect(300,256*.6,160,256*.4)}return kn(n,{repeat:!1,anisotropy:8})}function Fh(s,{fg:t="#c9b48a",bg:e="#1b1712",w:n=512,h:i=96,font:r="bold 64px Georgia, serif",glow:o=!1}={}){const a=hn(n,i),l=a.getContext("2d");l.fillStyle=e,l.fillRect(0,0,n,i);for(let h=0;h<40;h++)l.fillStyle=`rgba(0,0,0,${Math.random()*.15})`,l.fillRect(Math.random()*n,0,Math.random()*8+1,i);l.font=r,l.textAlign="center",l.textBaseline="middle",o&&(l.shadowColor=t,l.shadowBlur=16),l.fillStyle=t,l.fillText(s,n/2,i/2+4),l.shadowBlur=0,l.globalCompositeOperation="multiply";for(let h=0;h<200;h++){const c=100+Math.random()*155;l.fillStyle=`rgb(${c},${c},${c})`,l.fillRect(Math.random()*n,Math.random()*i,Math.random()*20,Math.random()*6)}return kn(a,{repeat:!1})}function oc(s,t){const e=hn(s),n=e.getContext("2d");return n.fillStyle="#000",n.fillRect(0,0,s,s),t(n,s),e}function kh(s=1){const t=new Xe(s),e=oc(256,(n,i)=>{const r=t.int(6,11);for(let o=0;o<r;o++){const a=i/2+t.gauss(0,i*.12),l=i/2+t.gauss(0,i*.12),h=t.float(i*.08,i*.24),c=n.createRadialGradient(a,l,h*.2,a,l,h);c.addColorStop(0,"rgba(255,255,255,1)"),c.addColorStop(.8,"rgba(255,255,255,0.95)"),c.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=c,n.beginPath(),n.arc(a,l,h,0,Math.PI*2),n.fill()}for(let o=0;o<40;o++){const a=t.float(0,Math.PI*2),l=t.float(i*.25,i*.47);n.fillStyle="rgba(255,255,255,0.9)",n.beginPath(),n.arc(i/2+Math.cos(a)*l,i/2+Math.sin(a)*l,t.float(1,4),0,Math.PI*2),n.fill()}});return Bs(e)}function I1(s=2){const t=new Xe(s),e=hn(128,512),n=e.getContext("2d");n.fillStyle="#000",n.fillRect(0,0,128,512);for(let r=0;r<18;r++){const o=64+t.gauss(0,14);n.strokeStyle=`rgba(255,255,255,${t.float(.35,.9)})`,n.lineWidth=t.float(2,12),n.beginPath(),n.moveTo(o,0);let a=o;for(let l=0;l<512&&(a+=t.gauss(0,1.6),!(l>300+t.float(0,200)));l+=16)n.lineTo(a,l);n.stroke()}for(let r=0;r<30;r++)n.fillStyle="rgba(255,255,255,0.85)",n.beginPath(),n.arc(64+t.gauss(0,24),t.float(0,512),t.float(1,5),0,Math.PI*2),n.fill();const i=n.createLinearGradient(0,0,0,40);return i.addColorStop(0,"rgba(0,0,0,1)"),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,128,40),Bs(e)}function U1(s=3){const t=new Xe(s),e=oc(256,(n,i)=>{n.fillStyle="rgba(255,255,255,1)",n.beginPath(),n.arc(i/2,i/2,i*.12,0,Math.PI*2),n.fill();for(let r=0;r<70;r++){const o=t.float(0,Math.PI*2),a=Math.abs(t.gauss(0,i*.2)),l=Math.max(1,i*.05*(1-a/(i*.5))*t.float(.2,1)),h=i/2+Math.cos(o)*a,c=i/2+Math.sin(o)*a;n.beginPath(),n.ellipse(h,c,l*1.8,l,o,0,Math.PI*2),n.fill()}for(let r=0;r<9;r++){const o=i/2+t.gauss(0,i*.12);n.fillRect(o,i/2,t.float(1.5,4),t.float(i*.1,i*.45))}});return Bs(e)}function z1(s=4){const t=new Xe(s),e=oc(256,(n,i)=>{n.fillStyle="rgba(255,255,255,0.9)";for(let r=0;r<4;r++){n.save(),n.translate(t.float(50,200),t.float(60,190)),n.rotate(t.float(-.5,.5)),n.beginPath(),n.ellipse(0,0,16,20,0,0,Math.PI*2),n.fill();for(let o=0;o<4;o++)n.save(),n.translate(-12+o*8,-18),n.rotate(-.15+o*.1),n.fillRect(-3,-22,6,22),n.restore();n.save(),n.translate(16,-2),n.rotate(.9),n.fillRect(-3,-16,6,16),n.restore(),n.globalAlpha=.5,n.fillRect(-12,0,24,t.float(20,60)),n.globalAlpha=1,n.restore()}});return Bs(e)}function Oh(s,{color:t="#b8b2a2",w:e=512,h:n=160,seed:i=5}={}){const r=new Xe(i),o=hn(e,n),a=o.getContext("2d");a.font=`bold ${Math.floor(n*.42)}px Impact, "Arial Black", sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillStyle=t,a.save(),a.translate(e/2,n/2),a.rotate(r.float(-.05,.05)),a.fillText(s,0,0),a.restore(),a.fillStyle=t;for(let h=0;h<14;h++)a.fillRect(r.float(e*.1,e*.9),n*.6,2,r.float(6,n*.35));a.globalCompositeOperation="destination-out";for(let h=0;h<260;h++)a.fillStyle=`rgba(0,0,0,${r.float(.2,.8)})`,a.fillRect(r.float(0,e),r.float(0,n),r.float(1,8),r.float(1,4));return kn(o,{repeat:!1})}function Bs(s){const t=new Zi(s);return t.colorSpace=ei,t.anisotropy=4,t.needsUpdate=!0,t}function N1(){const s=hn(64),t=s.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,64,64),t.fillStyle="#fff";for(let n=0;n<64;n+=16)t.fillRect(n,0,4,64),t.fillRect(0,n,64,3);const e=Bs(s);return e.wrapS=e.wrapT=Ti,e}function F1(){const s=hn(64),t=s.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,64,64),t.strokeStyle="#fff",t.lineWidth=3,t.beginPath(),t.moveTo(0,0),t.lineTo(64,64),t.moveTo(64,0),t.lineTo(0,64),t.stroke();const e=Bs(s);return e.wrapS=e.wrapT=Ti,e}function k1({seed:s=81,size:t=256}={}){const e=new ai(t),n=10;return e.forEach((i,r,o,a,l)=>{const h=Math.floor(l*n),c=l*n-h,u=a*8+(h%2?.5:0),d=Math.floor(u),f=u-d,g=.13+Xi(d,h,s)*.06+Se(a,l,32,2,s)*.04,_=c<.08||Math.min(f,1-f)<.03;e.setCol(o,g*.95,g,g*1.08),_&&e.mulCol(o,.5),e.hgt[o]=_?.1:.5+c*.4,e.rough[o]=.55+Se(a,l,8,3,s+2)*.35}),e.textures(3)}function O1(){const s=hn(128),t=s.getContext("2d");for(let e=0;e<8;e++)for(let n=0;n<8;n++)t.fillStyle=(n+e)%2?"#2a2622":"#8c857a",t.fillRect(n*16,e*16,16,16);t.fillStyle="rgba(40,20,10,0.35)";for(let e=0;e<30;e++)t.fillRect(Math.random()*128,Math.random()*128,Math.random()*20,Math.random()*20);return kn(s)}const B1=`
  varying vec3 vWPos;
  float wHash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float wNoise(vec3 x) {
    vec3 i = floor(x); vec3 f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(wHash(i), wHash(i + vec3(1,0,0)), f.x), mix(wHash(i + vec3(0,1,0)), wHash(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(wHash(i + vec3(0,0,1)), wHash(i + vec3(1,0,1)), f.x), mix(wHash(i + vec3(0,1,1)), wHash(i + vec3(1,1,1)), f.x), f.y), f.z);
  }
`;function fr(s,{strength:t=1,wetBase:e=.4,streaks:n=1,key:i="w"}={}){return s.onBeforeCompile=r=>{r.uniforms.uWeather={value:new R(t,e,n)},r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
        {
          vec4 wp = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            wp = instanceMatrix * wp;
          #endif
          vWPos = (modelMatrix * wp).xyz;
        }`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uWeather;
${B1}`).replace("#include <map_fragment>",`#include <map_fragment>
        float wBig = wNoise(vWPos * 0.35) * 0.6 + wNoise(vWPos * 1.3) * 0.4;
        float wStreak = wNoise(vec3(vWPos.x * 2.3, vWPos.y * 0.12, vWPos.z * 2.3));
        float splash = 1.0 - smoothstep(0.0, 1.4, vWPos.y);
        float grime = clamp((wBig - 0.45) * 1.6, 0.0, 1.0) * 0.45 + smoothstep(0.55, 0.9, wStreak) * 0.35 * uWeather.z + splash * 0.35;
        diffuseColor.rgb *= 1.0 - grime * uWeather.x * 0.75;
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.92, 1.0, 0.95), splash * 0.5);
        `).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, roughnessFactor * (1.0 - uWeather.y), splash);
        roughnessFactor *= mix(1.0, 0.75, smoothstep(0.6, 0.95, wStreak) * uWeather.z);
        `)},s.customProgramCacheKey=()=>`weather-${i}`,s}function bn(s,t,e=t){for(const n of Object.values(s))n&&n.isTexture&&n.repeat.set(t,e);return s}let Ca=null;function V1(){if(Ca)return Ca;const s={},t={};t.brickRed=bn(Aa({seed:11,base:"#6a3a2c",alt:"#43261e",mortar:"#6f6a60"}),1/1.5),t.brickDark=bn(Aa({seed:12,base:"#463630",alt:"#2a211e",mortar:"#5a5650",soot:.5}),1/1.5),t.brickOchre=bn(Aa({seed:13,base:"#6d5440",alt:"#4b3a2c",mortar:"#77736a"}),1/1.5),t.plasterGrey=bn(Ra({seed:21,tint:"#7d7f78",flaking:.6}),1/3),t.plasterGreen=bn(Ra({seed:22,tint:"#66706a",flaking:.5}),1/3),t.plasterBeige=bn(Ra({seed:23,tint:"#857a69",flaking:.7}),1/3),t.concrete=bn(Nh({seed:31,tint:"#6e6d68",panels:2}),1/3),t.sidewalk=bn(Nh({seed:32,tint:"#5c5b57",panels:2,joint:.008,stains:.9}),1/3),t.roof=bn(T1({seed:41}),1/4),t.rust=bn(A1({seed:51}),1),t.wood=bn(R1({seed:61}),1),t.grime=C1({seed:71});const e=(o,a={})=>fr(new ut({map:o.map,normalMap:o.normalMap,roughnessMap:o.roughnessMap,normalScale:new $(.9,.9),roughness:1,metalness:0,...a.mat}),{key:a.key,...a.w});s.brickRed=e(t.brickRed,{key:"br"}),s.brickDark=e(t.brickDark,{key:"bd"}),s.brickOchre=e(t.brickOchre,{key:"bo"}),s.plasterGrey=e(t.plasterGrey,{key:"pg"}),s.plasterGreen=e(t.plasterGreen,{key:"pgr"}),s.plasterBeige=e(t.plasterBeige,{key:"pb"}),s.concrete=e(t.concrete,{key:"co"}),s.trim=e(t.concrete,{key:"tr",mat:{color:new dt("#9a968c")},w:{strength:1.2}}),s.sidewalk=e(t.sidewalk,{key:"sw",w:{wetBase:0,streaks:0,strength:.6},mat:{color:new dt("#c4c3be"),roughness:.72,envMapIntensity:1.3}}),s.curb=e(t.concrete,{key:"cu",w:{wetBase:.5,streaks:0,strength:.7},mat:{color:new dt("#9b9a95")}}),s.roof=new ut({map:t.roof.map,normalMap:t.roof.normalMap,roughnessMap:t.roof.roughnessMap,roughness:1});const n=P1({extent:88,size:2048,roadHalf:4}),i=L1();i.repeat.set(44,44),s.road=new ut({map:n.map,roughnessMap:n.roughnessMap,normalMap:i,normalScale:new $(.3,.3),roughness:1,metalness:0,envMapIntensity:1.4}),s.metalRust=new ut({map:t.rust.map,normalMap:t.rust.normalMap,roughnessMap:t.rust.roughnessMap,metalness:.75,roughness:1}),s.metalDark=new ut({color:"#2a2d30",metalness:.8,roughness:.55,map:t.grime.map}),s.metalPole=new ut({color:"#30353a",metalness:.7,roughness:.5,map:t.grime.map}),s.wood=new ut({map:t.wood.map,normalMap:t.wood.normalMap,roughness:.9}),s.woodBoard=fr(new ut({map:t.wood.map,normalMap:t.wood.normalMap,roughness:.92,color:"#a59a88"}),{key:"wb",strength:.8}),s.glass=new ut({color:"#0d1217",metalness:.1,roughness:.08,envMapIntensity:1.6}),s.glassDirty=new ut({color:"#141a1e",metalness:.1,roughness:.35,map:t.grime.map,envMapIntensity:1.2}),s.windowFrame=new ut({color:"#ffffff",roughness:.7,map:t.grime.map}),s.windowFrameLight=new ut({color:"#77746a",roughness:.75,map:t.grime.map}),s.door=new ut({color:"#2b2622",roughness:.65,map:t.grime.map}),s.shutter=new ut({map:t.rust.map,roughnessMap:t.rust.roughnessMap,color:"#8d8f8a",metalness:.6,roughness:1}),s.darkInterior=new ut({color:"#07080a",roughness:1}),s.fabricAwning=new ut({color:"#3b1e1c",roughness:.95,map:t.grime.map,side:Ie}),s.fabricAwning2=new ut({color:"#203029",roughness:.95,map:t.grime.map,side:Ie}),s.tarp=new ut({color:"#2b3a40",roughness:.6,side:Ie}),s.rubber=new ut({color:"#141414",roughness:.85}),s.plasticBag=new ut({color:"#0d0e10",roughness:.28,metalness:0}),s.plasticBagGrey=new ut({color:"#2c2f2e",roughness:.35}),s.paper=new ut({color:"#4e4c46",roughness:.9,side:Ie}),s.cardboard=new ut({color:"#5e4a33",roughness:.95,map:t.grime.map}),s.sandbag=new ut({color:"#4d4636",roughness:1,normalMap:t.wood.normalMap}),s.barrierConcrete=e(t.concrete,{key:"jb",mat:{color:new dt("#b0ada4")}}),s.stripeRed=new ut({color:"#5a1d18",roughness:.7}),s.stripeWhite=new ut({color:"#8f8c84",roughness:.7}),s.tape=new ut({color:"#7a6a2a",roughness:.5,side:Ie}),s.chainLink=new ut({color:"#4c4f50",metalness:.8,roughness:.5,alphaMap:F1(),alphaTest:.4,side:Ie}),s.chainLink.alphaMap.repeat.set(26,14),s.grate=new ut({map:t.rust.map,color:"#6a6660",metalness:.7,roughness:.8,alphaMap:N1(),alphaTest:.5,side:Ie}),s.burnt=new ut({color:"#121110",roughness:.95,metalness:.3,map:t.rust.map}),s.lampWarm=new Ne({color:new dt(1,.72,.42).multiplyScalar(4)}),s.lampCold=new Ne({color:new dt(.75,.85,1).multiplyScalar(4)}),s.lampDead=new ut({color:"#2a2a26",roughness:.3}),s.amber=new Ne({color:new dt(1,.55,.1).multiplyScalar(3)}),s.signalOff=new ut({color:"#141210",roughness:.3}),t.interiors=D1(),s.interiors=t.interiors.map(o=>new Ne({map:o,color:new dt(1.15,1.15,1.15)}));const r={color:"#2a0504",roughness:.14,metalness:0,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4};return s.bloodPool=[1,2,3].map(o=>new ut({...r,alphaMap:kh(o)})),s.bloodSmear=[1,2].map(o=>new ut({...r,color:"#2e0605",roughness:.3,alphaMap:I1(o)})),s.bloodSplat=[1,2,3].map(o=>new ut({...r,color:"#350706",roughness:.35,alphaMap:U1(o+4)})),s.bloodDry=new ut({...r,color:"#241210",roughness:.7,alphaMap:kh(9)}),s.handprints=new ut({...r,color:"#3a0807",roughness:.5,alphaMap:z1(4)}),t.slate=bn(k1({seed:81}),1/2),s.slate=new ut({map:t.slate.map,normalMap:t.slate.normalMap,roughnessMap:t.slate.roughnessMap,roughness:1,metalness:.05,side:Ie}),s.roofGravel=new ut({map:t.roof.map,normalMap:t.roof.normalMap,color:"#9a968e",roughness:.95}),s.dinerBack=new Ne({map:dr("dinerBack"),color:new dt(1.05,.95,.85)}),s.pharmacyBack=new Ne({map:dr("pharmacy"),color:new dt(.32,.38,.36)}),s.tileFloor=new ut({map:O1(),roughness:.35,metalness:0}),s.tileFloor.map.repeat.set(4,2),s.interiorWall=new ut({color:"#6a5a48",roughness:.9,map:t.grime.map}),s.vinyl=new ut({color:"#4a1414",roughness:.45,map:t.grime.map}),s.lampStrip=new Ne({color:new dt(1,.85,.6).multiplyScalar(3)}),s.lampStripCold=new Ne({color:new dt(.5,.65,.6).multiplyScalar(.9)}),s.cache=t,Ca=s,s}function G1(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Ae;let h=0;for(let c=0;c<s.length;++c){const u=s[c];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,f,c),h+=f}}if(e){let c=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+c);c+=s[d].attributes.position.count}l.setIndex(u)}for(const c in r){const u=Bh(r[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(const c in o){const u=o[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[c].length;++_)f.push(o[c][_][d]);const g=Bh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function Bh(s){let t,e,n,i=-1,r=0;for(let h=0;h<s.length;++h){const c=s[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=c.gpuType),i!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*e}const o=new t(r),a=new De(o,e,n);let l=0;for(let h=0;h<s.length;++h){const c=s[h];if(c.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=c.count;d<f;d++)for(let g=0;g<e;g++){const _=c.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(c.array,l);l+=c.count*e}return i!==void 0&&(a.gpuType=i),a}function rd(s,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count;let o=0;const a=Object.keys(s.attributes),l={},h={},c=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let y=0,v=a.length;y<v;y++){const x=a[y],E=s.attributes[x];l[x]=new E.constructor(new E.array.constructor(E.count*E.itemSize),E.itemSize,E.normalized);const b=s.morphAttributes[x];b&&(h[x]||(h[x]=[]),b.forEach((T,L)=>{const S=new T.array.constructor(T.count*T.itemSize);h[x][L]=new T.constructor(S,T.itemSize,T.normalized)}))}const f=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),m=f*_;for(let y=0;y<r;y++){const v=n?n.getX(y):y;let x="";for(let E=0,b=a.length;E<b;E++){const T=a[E],L=s.getAttribute(T),S=L.itemSize;for(let M=0;M<S;M++)x+=`${~~(L[u[M]](v)*_+m)},`}if(x in e)c.push(e[x]);else{for(let E=0,b=a.length;E<b;E++){const T=a[E],L=s.getAttribute(T),S=s.morphAttributes[T],M=L.itemSize,P=l[T],N=h[T];for(let U=0;U<M;U++){const W=u[U],B=d[U];if(P[B](o,L[W](v)),S)for(let V=0,K=S.length;V<K;V++)N[V][B](o,S[V][W](v))}}e[x]=o,c.push(o),o++}}const p=s.clone();for(const y in s.attributes){const v=l[y];if(p.setAttribute(y,new v.constructor(v.array.slice(0,o*v.itemSize),v.itemSize,v.normalized)),y in h)for(let x=0;x<h[y].length;x++){const E=h[y][x];p.morphAttributes[y][x]=new E.constructor(E.array.slice(0,o*E.itemSize),E.itemSize,E.normalized)}}return p.setIndex(c),p}const Vh=new jt,Gh=new sn,Hh=new Ke,H1=new R,W1=new R;function Me(s,{x:t=0,y:e=0,z:n=0,rx:i=0,ry:r=0,rz:o=0,sx:a=1,sy:l=1,sz:h=1}={}){return Hh.set(i,r,o),Gh.setFromEuler(Hh),Vh.compose(W1.set(t,e,n),Gh,H1.set(a,l,h)),s.applyMatrix4(Vh),s}function I(s,t,e,n){return Me(new xn(s,t,e),n)}function Jt(s,t,e,n,i,r=!1){return Me(new ri(s,t,e,n,1,r),i)}function X1(s){const t=s.attributes.position,e=s.attributes.normal;let n=s.attributes.uv;n||(n=new De(new Float32Array(t.count*2),2),s.setAttribute("uv",n));for(let i=0;i<t.count;i++){const r=Math.abs(e.getX(i)),o=Math.abs(e.getY(i)),a=Math.abs(e.getZ(i)),l=t.getX(i),h=t.getY(i),c=t.getZ(i);o>=r&&o>=a?n.setXY(i,l,c):r>=a?n.setXY(i,c*Math.sign(e.getX(i)||1)*-1,h):n.setXY(i,l*Math.sign(e.getZ(i)||1),h)}return n.needsUpdate=!0,s}function Y1(s){for(const t of s){if(!t.index){const e=new Uint32Array(t.attributes.position.count);for(let n=0;n<e.length;n++)e[n]=n;t.setIndex(new De(e,1))}t.attributes.uv||t.setAttribute("uv",new De(new Float32Array(t.attributes.position.count*2),2));for(const e of Object.keys(t.attributes))["position","normal","uv"].includes(e)||t.deleteAttribute(e)}}class q1{constructor(){this.map=new Map}add(t,e){return this.map.has(t)||this.map.set(t,[]),this.map.get(t).push(e),e}build(t,{worldUV:e=[],castShadow:n=!0,receiveShadow:i=!0,noShadow:r=[]}={}){const o=new en;for(const[a,l]of this.map){if(!l.length)continue;Y1(l);const h=G1(l,!1);e.includes(a)&&X1(h),h.computeBoundingSphere();const c=t[a];if(!c)throw new Error(`Missing material ${a}`);const u=new re(h,c);u.castShadow=n&&!r.includes(a),u.receiveShadow=i,u.name=`merged-${a}`,o.add(u);for(const d of l)d.dispose()}return o}}class j1{constructor(){this.map=new Map}add(t,e,n){this.map.has(t)||this.map.set(t,{matrices:[],colors:[]});const i=this.map.get(t);i.matrices.push(e.clone()),i.colors.push(n?n.clone():null)}build(t){const e=new en;for(const[n,i]of this.map){const r=t[n];if(!r)throw new Error(`Missing instance def ${n}`);const o=new Vu(r.geometry,r.material,i.matrices.length);if(i.matrices.forEach((a,l)=>o.setMatrixAt(l,a)),i.colors.some(a=>a)){const a=new dt(1,1,1);i.colors.forEach((l,h)=>o.setColorAt(h,l||a))}o.instanceMatrix.needsUpdate=!0,o.castShadow=!!r.castShadow,o.receiveShadow=r.receiveShadow!==!1,o.computeBoundingSphere(),o.name=`inst-${n}`,e.add(o)}return e}}const so={minX:-36,maxX:36,minZ:-32,maxZ:32},Ul=4,vi=.15,Ns=[{id:"B1",x0:-19,x1:-7,z0:-19,z1:-7,floors:3,mat:"brickRed",front:["s","e"],shop:{side:"s",kind:"diner",sign:"ALL NIGHT DINER"},cornice:!0,win:{arch:!0,frame:"#3b2f26"},fireEscape:{side:"n"},roofKit:["ac","ac","vent","hatch","chimney"]},{id:"B2",x0:-28,x1:-19,z0:-17,z1:-7,floors:4,mat:"plasterGrey",front:["s"],shop:{side:"s",kind:"boarded",sign:"HOTEL ARGYLE",blade:!0},fireEscape:{side:"n"},oriel:!0,parapet:1.3,win:{tall:!0,frame:"#8a8576"},roofKit:["tank-small","vent","antenna","ac"]},{id:"B3",x0:-36,x1:-28,z0:-18,z1:-7,floors:2,mat:"brickDark",front:["s"],shop:{side:"s",kind:"shutter",sign:"PAWN & LOAN"},stepped:!0,parapet:.7,win:{pair:!0,frame:"#2c2a26"},roofKit:["skylight","vent","dish"]},{id:"B4",x0:-31,x1:-17,z0:-32,z1:-25,floors:3,mat:"plasterBeige",front:["n"],fireEscape:{side:"s"},win:{frame:"#2d3a30"},roofKit:["ac","chimney","vent","hatch"]},{id:"B5",x0:7,x1:15,z0:-20,z1:-7,floors:3,mat:"brickOchre",front:["s","w"],shop:{side:"s",kind:"broken",sign:"LIQUOR"},fireEscape:{side:"e"},win:{arch:!0,frame:"#262626"},cornice:!0,roofKit:["ac","vent","chimney","dish"]},{id:"B6",x0:18.5,x1:28,z0:-18,z1:-7,floors:2,mat:"plasterGreen",front:["s"],shop:{side:"s",kind:"boarded",sign:"DELI · GROCERY"},win:{pair:!0,frame:"#5a4a3a"},parapet:1.1,backDoor:{side:"w",at:5.2,lamp:"flicker"},roofKit:["ac","ac","vent"]},{id:"B7",x0:28,x1:36,z0:-22,z1:-7,floors:4,mat:"brickRed",front:["s"],shop:{side:"s",kind:"shutter",sign:"HARDWARE"},setback:{side:"s",depth:3},win:{tall:!0,frame:"#1f2a24"},roofKit:["tank","hatch","vent","camp"]},{id:"B8",x0:8,x1:24,z0:-32,z1:-27,floors:2,mat:"concrete",front:["s"],garage:{side:"s",at:9,lit:!0},sign:{side:"s",text:"AUTO REPAIR",at:3.5},roofKit:["vent","vent","skylight","skylight"]},{id:"B9",x0:26,x1:36,z0:-32,z1:-24,floors:3,mat:"plasterGrey",front:["s"],roofKit:["tank-small","ac","chimney","antenna"],win:{pair:!0}},{id:"B10",x0:18,x1:27,z0:7,z1:17,floors:2,mat:"brickDark",front:["n"],shop:{side:"n",kind:"broken",sign:"LAUNDROMAT"},fireEscape:{side:"s"},win:{pair:!0,frame:"#3a3026"},roofKit:["ac","vent","vent"]},{id:"B11",x0:27,x1:36,z0:7,z1:19,floors:3,mat:"plasterBeige",front:["n"],shop:{side:"n",kind:"shutter",sign:"CHECK CASHING"},balconies:{side:"w"},win:{frame:"#878274"},parapet:1.2,roofKit:["ac","hatch","dish"]},{id:"B12",x0:8,x1:23,z0:22,z1:32,floors:3,mat:"brickRed",front:["w"],fireEscape:{side:"n"},roofKit:["tank","ac","vent","chimney","shed"],win:{arch:!0,frame:"#2b3328"}},{id:"B13",x0:23,x1:36,z0:23,z1:32,floors:2,mat:"concrete",front:["n"],garage:{side:"n",at:6.5,lit:!1},roof:"sawtooth",roofKit:[]},{id:"B14",x0:-17,x1:-7,z0:7,z1:19,floors:4,mat:"plasterGreen",front:["n","e"],shop:{side:"n",kind:"pharmacy",sign:"PHARMACY"},balconies:{side:"e"},setback:{side:"n",depth:2.4},win:{frame:"#8e8a7e"},roofKit:["ac","hatch","vent","antenna"]},{id:"B15",x0:-30,x1:-20,z0:7,z1:15,floors:3,mat:"brickRed",front:["n"],recess:{side:"n"},cornice:!0,roof:"mansard",roofKit:["chimney"],win:{arch:!0,frame:"#2a221c"}},{id:"B16",x0:-36,x1:-30,z0:7,z1:20,floors:2,mat:"brickDark",front:["n"],shop:{side:"n",kind:"shutter",sign:"TAILOR"},roof:"gable",roofKit:["chimney"],tvWindow:!0},{id:"B17",x0:-32,x1:-10,z0:26,z1:32,floors:3,mat:"plasterGrey",front:["n"],fireEscape:{side:"n"},roofKit:["ac","chimney","tank-small","vent","chairs"],win:{pair:!0,frame:"#3a3a36"},courtLight:!0}],Bn=3.2;function od(s){return s.gH?s.gH:s.shop||s.garage?4.2:3.4}function Z1(s){const t={mansard:2.7,gable:2.6,sawtooth:1.7}[s.roof]??s.parapet??.9;return Fs(s)+t}function Fs(s){return od(s)+(s.floors-1)*Bn}function ce(s,t){const e=Math.abs(t)<Ul,n=Math.abs(s)<Ul;return e||n?0:vi}const ac=[];function Cn(s,t,e,n,i=0,r=""){ac.push({type:"box",cx:s,cz:t,hx:e,hz:n,rot:i,cos:Math.cos(i),sin:Math.sin(i),r:Math.hypot(e,n),tag:r})}function vn(s,t,e,n=""){ac.push({type:"circle",cx:s,cz:t,r:e,tag:n})}function K1(){for(const s of Ns)Cn((s.x0+s.x1)/2,(s.z0+s.z1)/2,(s.x1-s.x0)/2,(s.z1-s.z0)/2,0,"building")}function Oo(s,t,e,n,i=null){let r=0,o=0,a=!1;for(const l of ac){if(i&&!i(l))continue;const h=s-l.cx,c=t-l.cz;if(l.type==="circle"){const y=Math.hypot(h,c),v=l.r+e-y;v>0&&y>1e-5&&(r+=h/y*v,o+=c/y*v,a=!0);continue}if(h*h+c*c>(l.r+e)*(l.r+e))continue;const u=h*l.cos-c*l.sin,d=h*l.sin+c*l.cos,f=Math.abs(u)-l.hx,g=Math.abs(d)-l.hz;let _=0,m=0,p=0;if(f>0||g>0){const y=Math.max(f,0),v=Math.max(g,0),x=Math.hypot(y,v);if(x>=e)continue;_=y/(x||1)*Math.sign(u),m=v/(x||1)*Math.sign(d),p=e-x}else f>g?(_=Math.sign(u)||1,p=e-f):(m=Math.sign(d)||1,p=e-g);r+=(_*l.cos+m*l.sin)*p,o+=(-_*l.sin+m*l.cos)*p,a=!0}return a?(n.x=r,n.z=o,n):null}function Pa(s,t,e=0){return Oo(s,t,e,{x:0,z:0})!==null}function $1(s,t,e,n,i,r){const o=Math.hypot(e-s,n-t),a=Math.max(2,Math.ceil(o/.25)),l={x:0,z:0};for(let h=0;h<=a;h++){const c=h/a;if(Oo(s+(e-s)*c,t+(n-t)*c,i,l,r))return!1}return!0}function J1(){const s=[],t=(i,r,o="")=>s.push({x:i,z:r,tag:o}),e=[-34,-28,-22,-16,-10,-5.4,5.4,10,16,22,28,34];for(const i of e)t(i,-5.4,"sidewalk"),t(i,5.4,"sidewalk"),t(i,-1.8,"road"),t(i,1.8,"road");t(0,-1.8,"road"),t(0,1.8,"road");const n=[-30,-24,-18,-12,12,18,24,30];for(const i of n)t(-5.4,i,"sidewalk"),t(5.4,i,"sidewalk"),t(-1.8,i,"road"),t(1.8,i,"road");return t(-1.8,-6.5,"road"),t(1.8,-6.5,"road"),t(-1.8,6.5,"road"),t(1.8,6.5,"road"),t(16.75,-9.5,"alley"),t(16.75,-15,"alley"),t(16.75,-21.5,"alley"),t(11,-23.5,"yard"),t(21,-23.5,"yard"),t(26,-22.5,"yard"),t(25,-26,"yard"),t(-11.5,-22,"lot"),t(-11.5,-28,"lot"),t(-15,-22.5,"lot"),t(-24,-22,"yard"),t(-33,-21.5,"yard"),t(11,11,"lot"),t(15,14.5,"lot"),t(10.5,20,"lane"),t(17,20,"lane"),t(24,20.5,"lane"),t(31,21,"lane"),t(-18.5,10,"alley"),t(-18.5,15.5,"alley"),t(-15,22.5,"court"),t(-21,21,"court"),t(-26.5,22.5,"court"),t(-26,17.5,"court"),t(-33,23,"court"),t(-9,22.5,"court"),s}const Fi=.32,je=new jt,On=new sn,ki=new R,Oi=new R,La=new R(0,1,0);function ys(s,t){const e=new jt,n=s._yOff||0;let i;return t==="s"?(e.makeRotationY(0).setPosition(s.x0,n,s.z1),i=s.x1-s.x0):t==="n"?(e.makeRotationY(Math.PI).setPosition(s.x1,n,s.z0),i=s.x1-s.x0):t==="e"?(e.makeRotationY(Math.PI/2).setPosition(s.x1,n,s.z1),i=s.z1-s.z0):(e.makeRotationY(-Math.PI/2).setPosition(s.x0,n,s.z0),i=s.z1-s.z0),{m:e,length:i,side:t}}function Q1(s,t){let e=0,n=0;const i=s._yOff||0;for(const r of Ns){if(r===s||r.id===s.id||r.id===s._parent||Fs(r)<i+1)continue;let o=!1,a=0;t==="e"&&Math.abs(r.x0-s.x1)<.01||t==="w"&&Math.abs(r.x1-s.x0)<.01?(a=Math.min(s.z1,r.z1)-Math.max(s.z0,r.z0),o=!0):(t==="n"&&Math.abs(r.z1-s.z0)<.01||t==="s"&&Math.abs(r.z0-s.z1)<.01)&&(a=Math.min(s.x1,r.x1)-Math.max(s.x0,r.x0),o=!0),o&&a>.5&&(e+=a,n=Math.max(n,Fs(r)-i))}return{cover:e,h:n}}class tx{constructor(t,e,n,i){this.bucket=t,this.inst=e,this.M=n,this.lights=i,this.extraMeshes=new en,this.decalHooks=[],this.litWindows=[],this.litShops=[],this.lamps=[],this.signs=[],this.interiorDecals=[]}buildAll(){for(const t of Ns){if(!t.setback){this.build(t);continue}const e={...t,floors:t.floors-1,roofKit:["vent","ac"],setback:null,roof:null,_terrace:t.setback},n={...t,id:t.id+"T",_parent:t.id,floors:1,gH:Bn,shop:null,garage:null,recess:null,cornice:!1,fireEscape:null,balconies:null,oriel:!1,backDoor:null,setback:null,_yOff:Fs(e),front:t.front},i=t.setback.depth;t.setback.side==="s"&&(n.z1-=i),t.setback.side==="n"&&(n.z0+=i),t.setback.side==="e"&&(n.x1-=i),t.setback.side==="w"&&(n.x0+=i),this.build(e),this.build(n)}return this.extraMeshes}build(t){const e=new Xe(t.id.split("").reduce((a,l)=>a*31+l.charCodeAt(0),7)),n=Fs(t),i=od(t),r=t.mat;t._H=n;for(const a of["n","s","e","w"]){const l=ys(t,a),h=Q1(t,a),c=t.front.includes(a),u=a==="e"||a==="w",d=u?Fi:0,f=u?l.length-Fi:l.length;if(h.cover>l.length*.6){this.wallBox(l,r,d,f,0,n),n-h.h>2&&e.chance(.6)&&this.ghostSign(l,(d+f)/2,h.h+(n-h.h)/2,Math.min(5,f-d-1),e);continue}this.facade(t,l,{a0:d,a1:f,H:n,gH:i,isFront:c,wallKey:r,rng:e})}const o=t._yOff||0;this.roof(t,n+o,e);for(const a of[].concat(t.fireEscape||[]))this.fireEscape(t,ys(t,a.side),i,e);t.balconies&&this.balconies(t,ys(t,t.balconies.side),i,e),o||this.drainpipes(t,n,e)}wallBox(t,e,n,i,r,o,a=Fi,l=0){if(i-n<.01||o-r<.01)return;const h=I(i-n,o-r,a,{x:(n+i)/2,y:(r+o)/2,z:-a/2+l});h.applyMatrix4(t.m),this.bucket.add(e,h)}addLocal(t,e,n){e.applyMatrix4(n.m),this.bucket.add(t,e)}instLocal(t,e,n,i,r,o,a,l,h=0,c){On.setFromAxisAngle(La,h),je.compose(ki.set(n,i,r),On,Oi.set(o,a,l)),je.premultiply(e.m),this.inst.add(t,je,c)}facade(t,e,{a0:n,a1:i,H:r,gH:o,isFront:a,wallKey:l,rng:h}){const c=i-n,u=l.startsWith("brick"),d=t.shop&&t.shop.side===e.side,f=t.garage&&t.garage.side===e.side,g=t.recess&&t.recess.side===e.side,_=!a,m=t.win||{},p=Math.max(1,Math.round((c-1)/(_||m.pair?3.4:2.9))),y=c/p,v=Math.min(m.pair?.8:1.25,y*(m.pair?.27:.46)),x=m.tall?2.05:1.7,E=m.tall?.7:.9,b=t.oriel&&e.side===t.front[0]&&p>=3?Math.floor(p/2):-1,T=[0,o];for(let S=1;S<t.floors;S++)T.push(o+S*Bn);T[t.floors]=r;const L=[];if(d)this.storefront(t,e,n,i,o,h,L);else if(f){const S=t.garage.at;L.push({a0:S-2,a1:S+2,y0:0,y1:3.2,kind:"garage",lit:t.garage.lit}),L.push({a0:S+3.2,a1:S+4.2,y0:0,y1:2.2,kind:"door"});for(let M=n+1.2;M<i-1.5;M+=2.4)Math.abs(M+.6-S)<2.8||Math.abs(M+.6-(S+3.7))<1.4||L.push({a0:M,a1:M+1.4,y0:2.6,y1:3.4,kind:"window",small:!0})}else if(g){const S=(n+i)/2;L.push({a0:S-1.3,a1:S+1.3,y0:0,y1:2.9,kind:"recess"});for(let M=0;M<p;M++){const P=n+y*(M+.5);Math.abs(P-S)<2.2||L.push({a0:P-v/2,a1:P+v/2,y0:1.1,y1:1.1+x,kind:"window"})}}else{const S=_?h.int(0,p-1):Math.floor(p/2);for(let M=0;M<p;M++){const P=n+y*(M+.5);M===S&&(a||h.chance(.7))?L.push({a0:P-.55,a1:P+.55,y0:0,y1:2.3,kind:"door"}):(!_||h.chance(.6))&&L.push({a0:P-v/2,a1:P+v/2,y0:1.1,y1:1.1+x,kind:"window",ground:!0})}if(t.backDoor&&t.backDoor.side===e.side){const M=t.backDoor.at;for(let P=L.length-1;P>=0;P--)L[P].a1>M-1.4&&L[P].a0<M+1.4&&L.splice(P,1);L.push({a0:M-.5,a1:M+.5,y0:0,y1:2.25,kind:"door",lamp:t.backDoor.lamp})}}d?this.wallBox(e,l,n,i,3.75,o):this.floorWall(e,l,n,i,0,o,L,t,h,0);for(let S=1;S<t.floors;S++){const M=T[S],P=T[S+1],N=[];for(let U=0;U<p;U++){const W=n+y*(U+.5);if(U===b||_&&h.chance(.15))continue;const B=_?v*(m.pair?1.3:.85):v;if(m.pair&&!_)for(const V of[-1,1])N.push({a0:W+V*(B/2+.14)-B/2,a1:W+V*(B/2+.14)+B/2,y0:M+E,y1:M+E+x,kind:"window"});else N.push({a0:W-B/2,a1:W+B/2,y0:M+E,y1:M+E+x,kind:"window"})}this.floorWall(e,l,n,i,M,P,N,t,h,S),u&&!_&&this.addLocal("trim",I(c+.06,.14,.08,{x:(n+i)/2,y:M,z:.04}),e)}if(b>=0&&this.orielBay(t,e,n+y*(b+.5),y*.82,T[1],r-.4,l,h),_&&this.rearClutter(t,e,n,i,r,o,h),d||this.addLocal("concrete",I(c+.04,.55,.06,{x:(n+i)/2,y:.27+.15,z:.03}),e),t.cornice&&!_){this.addLocal("trim",I(c+.5,.25,.45,{x:(n+i)/2,y:r-.35,z:.22}),e),this.addLocal("trim",I(c+.3,.12,.25,{x:(n+i)/2,y:r-.55,z:.12}),e);for(let S=n+.4;S<i;S+=.9)this.instLocal("bracket",e,S,r-.62,.16,1,1,1)}h.chance(.55)&&this.decalHooks.push({f:e,a:n+h.float(.15,.85)*c,y:h.float(1.2,2.1),kind:"graffiti",side:e.side,b:t.id})}orielBay(t,e,n,i,r,o,a,l){this.addLocal(a,I(i,o-r,.62,{x:n,y:(r+o)/2,z:.62/2}),e),this.addLocal("trim",I(i+.2,.2,.62+.12,{x:n,y:o+.1,z:.62/2}),e),this.addLocal("trim",I(i+.12,.35,.62+.08,{x:n,y:r-.1,z:.62/2}),e);for(let c=r;c<o-1;c+=Bn){const u=c+.8+.85,d=l.chance(.25),f=new dt(1,.92,.8).multiplyScalar(l.float(.6,.95));this.instLocal(d?"interior0":"glass",e,n,u,.62+.012,i*.62,1.7,1,0,d?f:null),this.instLocal("frame",e,n,u,.62+.03,i*.62,1.7,1,0,this.frameColor(t)),this.instLocal("sill",e,n,u-.9,.62+.08,i*.7,1,1),d&&this.litWindows.push({f:e,cx:n,cy:u,b:t.id});for(const g of[-1,1])On.setFromAxisAngle(La,g*Math.PI/2),je.compose(ki.set(n+g*i/2+g*.012,u,.62/2),On,Oi.set(.36,1.6,1)).premultiply(e.m),this.inst.add("glassDirty",je)}}rearClutter(t,e,n,i,r,o,a){const l=i-n;for(let c=0;c<Math.max(1,Math.round(l/6));c++){const u=n+a.float(.6,l-.6);je.compose(ki.set(u,r/2,.1),On.identity(),Oi.set(.8,r,.8)).premultiply(e.m),this.inst.add("pipe",je)}const h=n+a.float(.8,l-.8);this.addLocal("metalDark",I(.55,.75,.18,{x:h,y:1.5,z:.09}),e),this.addLocal("metalRust",I(.06,1.2,.06,{x:h+.15,y:.6,z:.05}),e);for(let c=0;c<2;c++){const u=n+a.float(.8,l-.8),d=a.float(2.2,Math.max(2.3,o-.4));this.addLocal("metalDark",I(.45,.35,.3,{x:u,y:d,z:.15}),e),this.addLocal("metalDark",I(.5,.06,.4,{x:u,y:d+.2,z:.18,rx:.3}),e)}}frameColor(t){return t._frameCol||(t._frameCol=new dt(t.win&&t.win.frame?t.win.frame:"#3a3832")),t._frameCol}floorWall(t,e,n,i,r,o,a,l,h,c){a.sort((d,f)=>d.a0-f.a0);let u=n;for(const d of a)this.wallBox(t,e,u,d.a0,r,o),this.wallBox(t,e,d.a0,d.a1,r,d.y0),this.wallBox(t,e,d.a0,d.a1,d.y1,o),u=d.a1,this.fillOpening(t,d,l,h,c);this.wallBox(t,e,u,i,r,o)}fillOpening(t,e,n,i,r){const o=e.a1-e.a0,a=e.y1-e.y0,l=(e.a0+e.a1)/2,h=(e.y0+e.y1)/2,c=n.mat.startsWith("brick");if(e.kind==="window"){const u=i.next(),d=r===0?.04:.16;let f;const g=r===1&&t.side==="n"&&(n.tvWindow&&!n._tv||n.courtLight&&!n._court&&l>14);if(g){f="lit";const m=!!n.tvWindow;m?n._tv=!0:n._court=!0,this.instLocal(`interior${m?2:0}`,t,l,h,-.2,o,a,1,0,new dt(1,1,1)),this.litWindows.push({f:t,cx:l,cy:h,variant:m?2:0,b:n.id,story:m?"tv":"spill"})}else u<d?f="lit":u<d+.12?f="broken":u<d+.2&&r<=1?f="boarded":f="dark";if(!(f==="lit"&&g))if(f==="lit"){const m=i.chance(.18)?2:i.int(0,1),p=i.float(.55,1),y=new dt(p,p*i.float(.88,1),p*i.float(.8,1));this.instLocal(`interior${m}`,t,l,h,-.2,o,a,1,0,y),this.litWindows.push({f:t,cx:l,cy:h,variant:m,b:n.id})}else f==="broken"?(this.instLocal("void",t,l,h,-.26,o,a,1),this.instLocal("shard",t,e.a0+o*.22,e.y1-a*.18,-.19,o*.42,a*.32,1,0)):this.instLocal(i.chance(.3)?"glassDirty":"glass",t,l,h,-.18,o,a,1);this.instLocal(e.small?"frameSimple":"frame",t,l,h,-.16,o,a,1,0,this.frameColor(n)),this.instLocal("sill",t,l,e.y0-.04,.05,o+.18,1,1),c&&n.win&&n.win.arch&&!e.small?this.instLocal("archLintel",t,l,e.y1,.02,o+.2,o*.5+.12,1):c?this.instLocal("lintel",t,l,e.y1+.1,.015,o+.24,1,1):e.small||this.instLocal("surround",t,l,h,0,o,a,1),f==="boarded"&&this.boards(t,l,h,o,a,i,.03),r===0&&f!=="boarded"&&i.chance(.55)&&this.instLocal("bars",t,l,h,.03,o,a,1);const _=!n.front.includes(t.side);r>=1&&f!=="boarded"&&i.chance(_?.3:.1)&&this.instLocal("acUnit",t,l,e.y0+.25,.18,1,1,1),r>=1&&f==="dark"&&i.chance(.25)&&this.instLocal("curtain",t,l-o*.22,h,-.17,o*.45,a*.95,1)}else if(e.kind==="door")this.instLocal("door",t,l,h,-.16,o,a,1),this.instLocal("doorFrame",t,l,h,-.12,o,a,1),this.addLocal("concrete",I(o+.6,.12,.45,{x:l,y:.2,z:.2}),t),e.lamp&&this.lamps.push({f:t,cx:l,y:e.y1+.45,mode:e.lamp,b:n.id});else if(e.kind==="garage"){const u=e.lit?1.15:0;this.instLocal("shutterPanel",t,l,(e.y1+u)/2,-.12,o,e.y1-u,1),e.lit&&(this.instLocal("garageInterior",t,l,u/2+.02,-.6,o,u+.04,1),this.lamps.push({f:t,cx:l,y:.6,z:1.2,mode:"garage",b:n.id})),this.addLocal("metalDark",I(o+.2,.25,.25,{x:l,y:e.y1+.12,z:.02}),t)}else if(e.kind==="recess"){this.instLocal("void",t,l,h,-Fi-1.6,o,a,1),this.addLocal("trim",I(o+.4,.35,.12,{x:l,y:e.y1+.17,z:.05}),t);for(const u of[-1,1])this.addLocal(n.mat,I(.2,a,1.6,{x:l+u*(o/2-.1),y:h,z:-Fi-.8}),t);this.addLocal("concrete",I(o,.2,1.6,{x:l,y:a+.1,z:-Fi-.8}),t);for(let u=-o/2+.15;u<o/2;u+=.16)this.addLocal("metalRust",I(.025,a-.3,.025,{x:l+u,y:a/2,z:-Fi-.4,rx:u>.3?-.25:0}),t)}}boards(t,e,n,i,r,o,a){const l=Math.max(3,Math.round(r/.32));for(let h=0;h<l;h++){if(o.chance(.15))continue;const c=n-r/2+(h+.5)*(r/l);On.setFromAxisAngle(new R(0,0,1),o.float(-.12,.12)),je.compose(ki.set(e+o.float(-.05,.05),c,a+.02),On,Oi.set(i+.3,.2,.025)),je.premultiply(t.m),this.inst.add("plank",je)}}storefront(t,e,n,i,r,o,a){const l=t.shop,h=i-n,c=3.05,u=Math.max(2,Math.round(h/3.4)),d=h/u,f=Math.floor(u/2),g=t.mat;for(let _=0;_<=u;_++){const m=n+_*d,p=_===0||_===u?.5:.35,y=Math.max(n,m-p/2),v=Math.min(i,m+p/2);this.wallBox(e,g,y,v,0,c)}this.wallBox(e,g,n,i,c,3.75),this.addLocal("trim",I(h+.1,.12,.2,{x:(n+i)/2,y:c+.02,z:.06}),e),this.addLocal("trim",I(h+.1,.12,.25,{x:(n+i)/2,y:3.78,z:.08}),e),l.sign&&this.signs.push({f:e,a:(n+i)/2,y:(c+3.75)/2,w:Math.min(h-1.2,7.5),h:.55,text:l.sign,kind:l.kind,blade:l.blade,b:t.id});for(let _=0;_<u;_++){const m=n+_*d+(_===0?.25:.175),p=n+(_+1)*d-(_===u-1?.25:.175),y=p-m,v=(m+p)/2;if(_===f){const x=Math.min(1.3,y*.5);this.wallBox(e,g,m,v-x/2,0,.5),this.wallBox(e,g,v+x/2,p,0,.5),this.shopGlass(e,l,m,v-x/2,.5,c-.1,o,t),this.shopGlass(e,l,v+x/2,p,.5,c-.1,o,t),l.kind==="diner"||l.kind==="pharmacy"?this.instLocal("shopGlassClear",e,v,1.2,-.7,x,2.4,1):this.instLocal("door",e,v,1.2,-.7,x,2.4,1),this.wallBox(e,"trim",v-x/2,v+x/2,2.4,c,.7);for(const E of[-1,1])this.addLocal("trim",I(.05,2.4,.7,{x:v+E*x/2,y:1.2,z:-.35}),e)}else this.wallBox(e,g,m,p,0,.5),this.shopGlass(e,l,m,p,.5,c-.1,o,t)}if((l.kind==="diner"||l.kind==="pharmacy")&&this.shopRoom(t,e,n,i,l.kind,o),l.kind==="diner"||l.kind==="pharmacy"){const _=new oe(h-.6,1.5,1,1);Me(_,{x:(n+i)/2,y:c+0,z:.68,rx:-Math.PI/2+.5}),this.addLocal(l.kind==="diner"?"fabricAwning":"fabricAwning2",_,e),this.addLocal(l.kind==="diner"?"fabricAwning":"fabricAwning2",Me(new oe(h-.6,.25),{x:(n+i)/2,y:c-.53,z:1.31}),e)}}shopRoom(t,e,n,i,r,o){const l=i-n-.7,h=(n+i)/2,c=r==="diner",u=c?"dinerBack":"pharmacyBack";this.addLocal(u,Me(new oe(l,3),{x:h,y:1.65,z:-3.6}),e),this.addLocal("tileFloor",Me(new oe(l,3.6),{x:h,y:.16,z:-3.6/2,rx:-Math.PI/2}),e),this.addLocal("interiorWall",Me(new oe(l,3.6),{x:h,y:3.1,z:-3.6/2,rx:Math.PI/2}),e);for(const d of[-1,1])this.addLocal("interiorWall",Me(new oe(3.6,3),{x:h+d*l/2,y:1.65,z:-3.6/2,ry:-d*Math.PI/2}),e);for(let d=0;d<3;d++)this.addLocal(c?"lampStrip":"lampStripCold",I(l*.22,.04,.16,{x:h-l*.33+d*l*.33,y:3.06,z:-3.6*.45}),e);if(c){const d=l*.62;this.addLocal("door",I(d,1,.55,{x:h+l*.1,y:.66,z:-3.6+1}),e),this.addLocal("metalPole",I(d+.1,.05,.7,{x:h+l*.1,y:1.18,z:-3.6+1}),e);for(let f=0;f<6;f++){const g=h+l*.1-d/2+.4+f*((d-.8)/5);if(f===3){this.addLocal("metalPole",Jt(.04,.04,.7,6,{x:g+.3,y:.3,z:-3.6+2,rz:Math.PI/2-.2}),e),this.addLocal("vinyl",Jt(.19,.19,.08,12,{x:g+.7,y:.3,z:-3.6+2.05,rz:Math.PI/2}),e);continue}this.addLocal("metalPole",Jt(.035,.05,.7,6,{x:g,y:.5,z:-3.6+1.65}),e),this.addLocal("vinyl",Jt(.19,.19,.09,12,{x:g,y:.88,z:-3.6+1.65}),e)}for(let f=0;f<2;f++){const g=h-l*.36+f*l*.3;this.addLocal("vinyl",I(1.4,.5,.5,{x:g,y:.45,z:-.85}),e),this.addLocal("vinyl",I(1.4,.75,.15,{x:g,y:.95,z:-1.05}),e),this.addLocal("metalPole",I(1.2,.05,.7,{x:g,y:.92,z:-.35}),e)}this.interiorDecals.push({f:e,x:h-.6,z:-1.8,size:1.6})}else{for(let d=0;d<3;d++)this.addLocal("metalDark",I(l*.7,1.6,.4,{x:h,y:.96,z:-1.2-d*.8,rz:0}),e);this.addLocal("metalDark",I(1.6,.4,1.6,{x:h-l*.2,y:.36,z:-1,ry:.4}),e)}}shopGlass(t,e,n,i,r,o,a,l){const h=i-n,c=o-r,u=(n+i)/2,d=(r+o)/2;if(e.kind==="diner")this.instLocal("shopGlassClear",t,u,d,-.12,h,c,1),this.litShops.push({f:t,cx:u,cy:d,w:h,b:l.id});else if(e.kind==="pharmacy")this.instLocal("shopGlassClear",t,u,d,-.12,h,c,1);else if(e.kind==="boarded")this.instLocal("void",t,u,d,-.3,h,c,1),this.boards(t,u,d,h,c,a,-.02);else if(e.kind==="shutter"){const f=a.float(.55,1);this.instLocal("void",t,u,d,-.3,h,c,1),this.instLocal("shutterPanel",t,u,o-c*f/2,-.08,h,c*f,1)}else this.instLocal("void",t,u,d,-.3,h,c,1),this.instLocal("shard",t,n+h*.2,o-c*.15,-.14,h*.35,c*.3,1),this.instLocal("shard",t,i-h*.15,r+c*.2,-.14,h*.25,c*.4,1);this.instLocal("frameSimple",t,u,d,-.1,h,c,1)}ghostSign(t,e,n,i,r){this.decalHooks.push({f:t,a:e,y:n,w:i,kind:"ghost",seed:r.int(1,99)})}roof(t,e,n){const{x0:i,x1:r,z0:o,z1:a}=t,l=r-i,h=a-o,c=(i+r)/2,u=(o+a)/2,d=t.mat;if(t.roof==="mansard")return this.mansard(t,e,n);if(t.roof==="gable")return this.gable(t,e,n);if(t.roof==="sawtooth")return this.sawtooth(t,e,n);this.bucket.add(n.chance(.5)?"roof":"roofGravel",I(l-.1,.2,h-.1,{x:c,y:e-.08,z:u}));const f=t.parapet??.9,g=.25;this.bucket.add(d,I(l,f,g,{x:c,y:e+f/2,z:o+g/2})),this.bucket.add(d,I(l,f,g,{x:c,y:e+f/2,z:a-g/2})),this.bucket.add(d,I(g,f,h-2*g,{x:i+g/2,y:e+f/2,z:u})),this.bucket.add(d,I(g,f,h-2*g,{x:r-g/2,y:e+f/2,z:u}));const _=.36;this.bucket.add("trim",I(l+.08,.08,_,{x:c,y:e+f+.04,z:o+g/2})),this.bucket.add("trim",I(l+.08,.08,_,{x:c,y:e+f+.04,z:a-g/2})),this.bucket.add("trim",I(_,.08,h,{x:i+g/2,y:e+f+.04,z:u})),this.bucket.add("trim",I(_,.08,h,{x:r-g/2,y:e+f+.04,z:u}));for(let b=i+2;b<r-1;b+=5)this.bucket.add("metalRust",I(.2,.15,.5,{x:b,y:e+.1,z:a+.1}));const m=t.front[0],p=ys(t,m);p.m.elements[13]=0;const y=p.length;if(t.cornice&&!t._yOff&&(this.addLocal(d,I(y*.4,.8,g,{x:y/2,y:e+f+.4,z:-g/2}),p),this.addLocal("trim",I(y*.4+.1,.08,_,{x:y/2,y:e+f+.84,z:-g/2}),p)),t.stepped)for(let b=1;b<=3;b++){const T=y*(1-b*.22);this.addLocal(d,I(T,.55,g,{x:y/2,y:e+f+.55*(b-.5),z:-g/2}),p),this.addLocal("trim",I(T+.1,.07,_,{x:y/2,y:e+f+.55*b,z:-g/2}),p)}if(t._terrace){for(let b=0;b<3;b++)this.bucket.add("wood",I(.9,.5,.45,{x:i+1.5+b*2.6,y:e+.25,z:t._terrace.side==="s"?a-.7:o+.7}));for(let b=0;b<2;b++)this.bucket.add("metalDark",I(.5,.45,.5,{x:c+n.float(-2,2),y:e+.25,z:t._terrace.side==="s"?a-1.8:o+1.8,ry:n.float(0,2)}))}const v=[];if(t._terrace){const b=t._terrace;v.push(b.side==="s"?{x:c,z:a-b.depth/2,w:l,d:b.depth}:{x:c,z:o+b.depth/2,w:l,d:b.depth})}const x=(b,T)=>{for(let L=0;L<40;L++){const S=n.float(i+1+b/2,r-1-b/2),M=n.float(o+1+T/2,a-1-T/2);if(v.every(P=>Math.abs(P.x-S)>(P.w+b)/2+.5||Math.abs(P.z-M)>(P.d+T)/2+.5))return v.push({x:S,z:M,w:b,d:T}),{x:S,z:M}}return null},E=e+.02;for(const b of t.roofKit||[])this.roofItem(b,t,E,x,n,d);n.chance(.75)&&this.bucket.add("metalRust",Jt(.06,.06,l-1.2,8,{x:c,y:E+.18,z:o+.7,rz:Math.PI/2})),n.chance(.5)&&this.bucket.add("metalDark",Jt(.04,.04,h-1.2,6,{x:r-.6,y:E+.12,z:u,rx:Math.PI/2}));for(let b=0;b<4;b++)this.bucket.add(n.pick(["cardboard","wood","plasticBag"]),I(n.float(.3,.8),n.float(.08,.2),n.float(.3,.6),{x:n.float(i+1,r-1),y:E+.08,z:n.float(o+1,a-1),ry:n.float(0,3)}))}roofItem(t,e,n,i,r,o){if(t==="ac"){const a=i(1.6,1.2);if(!a)return;this.bucket.add("metalDark",I(1.5,.95,1.1,{x:a.x,y:n+.5,z:a.z})),this.bucket.add("rubber",Jt(.4,.4,.05,16,{x:a.x,y:n+1,z:a.z})),this.bucket.add("metalRust",I(1.6,.1,1.2,{x:a.x,y:n+.05,z:a.z})),this.bucket.add("metalDark",I(.35,.35,Math.max(.5,Math.abs(a.z-e.z0)-.8),{x:a.x+.4,y:n+.2,z:(a.z+e.z0+.6)/2}))}else if(t==="vent"){const a=i(.6,.6);if(!a)return;this.bucket.add("metalDark",Jt(.14,.14,1,10,{x:a.x,y:n+.5,z:a.z})),this.bucket.add("metalDark",Jt(.28,.2,.18,12,{x:a.x,y:n+1.08,z:a.z}))}else if(t==="hatch"){const a=i(2.2,2.6);if(!a)return;this.bucket.add(o,I(2,2.5,2.4,{x:a.x,y:n+1.25,z:a.z})),this.bucket.add("trim",I(2.15,.12,2.55,{x:a.x,y:n+2.55,z:a.z})),this.bucket.add("door",I(.9,2,.06,{x:a.x,y:n+1,z:a.z+1.22}))}else if(t==="chimney"){const a=i(.9,.9);if(!a)return;this.bucket.add("brickDark",I(.8,2,.8,{x:a.x,y:n+1,z:a.z})),this.bucket.add("trim",I(.95,.12,.95,{x:a.x,y:n+2.05,z:a.z})),this.bucket.add("metalDark",Jt(.12,.12,.5,8,{x:a.x+.15,y:n+2.3,z:a.z}))}else if(t==="tank"||t==="tank-small"){const a=t==="tank"?1.5:1,l=i(a*2+.6,a*2+.6);if(!l)return;const h=t==="tank"?2.4:1.6,c=t==="tank"?3:2.2;for(const[u,d]of[[-1,-1],[1,-1],[-1,1],[1,1]])this.bucket.add("metalRust",I(.14,h,.14,{x:l.x+u*a*.7,y:n+h/2,z:l.z+d*a*.7}));for(const u of[-1,1])this.bucket.add("metalRust",I(a*1.5,.05,.05,{x:l.x,y:n+h*.5,z:l.z+u*a*.7,rz:u*.5}));this.bucket.add("metalRust",I(a*1.6,.12,a*1.6,{x:l.x,y:n+h,z:l.z})),this.bucket.add("wood",Jt(a,a*1.04,c,20,{x:l.x,y:n+h+c/2,z:l.z}));for(let u=.3;u<c;u+=.7)this.bucket.add("metalDark",Jt(a*1.04+.02,a*1.04+.02,.05,20,{x:l.x,y:n+h+u,z:l.z}));this.bucket.add("roof",new Uo(a*1.08,.9,20).translate(l.x,n+h+c+.45,l.z));for(let u=0;u<h+c;u+=.3)this.bucket.add("metalRust",I(.4,.03,.03,{x:l.x,y:n+u,z:l.z+a+.15}))}else if(t==="skylight"){const a=i(1.8,1.4);if(!a)return;this.bucket.add("metalDark",I(1.7,.35,1.3,{x:a.x,y:n+.18,z:a.z})),this.bucket.add("glassDirty",I(1.5,.08,1.1,{x:a.x,y:n+.4,z:a.z,rx:.12}))}else if(t==="antenna"){const a=i(.5,.5);if(!a)return;this.bucket.add("metalPole",Jt(.03,.04,4.5,6,{x:a.x,y:n+2.25,z:a.z}));for(let l=0;l<4;l++)this.bucket.add("metalPole",I(1.2-l*.2,.025,.025,{x:a.x,y:n+3+l*.4,z:a.z,ry:.4}))}else if(t==="dish"){const a=i(1,1);if(!a)return;const l=new oi(.45,14,6,0,Math.PI*2,0,.9);Me(l,{x:a.x,y:n+.9,z:a.z,rx:1.1,ry:r.float(0,6)}),this.bucket.add("metalPole",l),this.bucket.add("metalPole",Jt(.04,.04,.9,6,{x:a.x,y:n+.45,z:a.z}))}else if(t==="shed"){const a=i(2.6,2);if(!a)return;this.bucket.add("woodBoard",I(2.4,2,1.8,{x:a.x,y:n+1,z:a.z})),this.bucket.add("metalRust",I(2.7,.06,2.1,{x:a.x,y:n+2.08,z:a.z,rx:.08}))}else if(t==="chairs"){const a=i(2.4,2);if(!a)return;for(let l=0;l<3;l++)this.bucket.add("metalDark",I(.5,.5,.5,{x:a.x-.8+l*.8,y:n+.25,z:a.z,ry:r.float(-.6,.6),rz:l===2?1.4:0}));this.bucket.add("rubber",Jt(.3,.3,.6,10,{x:a.x,y:n+.3,z:a.z+.8}))}else if(t==="camp"){const a=i(4,3.4);if(!a)return;const l=new ri(1.25,1.25,2.6,3,1,!0);l.rotateZ(Math.PI/2),l.rotateY(.3),l.translate(a.x,n+.62,a.z),this.bucket.add("tarp",l);for(let h=0;h<3;h++)this.bucket.add("metalRust",Jt(.28,.28,.85,12,{x:a.x+1.6,y:n+.43,z:a.z-1+h*.62}));this.bucket.add("cardboard",I(1.8,.18,.9,{x:a.x-1.3,y:n+.1,z:a.z+1.2,ry:.4})),this.lamps.push({mode:"lantern",pos:new R(a.x-.4,n+.35,a.z+1.1),b:e.id})}}mansard(t,e,n){const{x0:i,x1:r,z0:o,z1:a}=t,l=1.2,h=2.5,c=.12,u=(E,b,T)=>[E,b,T],d=[u(i-c,e,o-c),u(r+c,e,o-c),u(r+c,e,a+c),u(i-c,e,a+c)],f=[u(i+l,e+h,o+l),u(r-l,e+h,o+l),u(r-l,e+h,a-l),u(i+l,e+h,a-l)],g=[];for(let E=0;E<4;E++){const b=(E+1)%4;g.push(...d[E],...f[b],...d[b],...d[E],...f[E],...f[b])}g.push(...f[0],...f[2],...f[1],...f[0],...f[3],...f[2]);const _=new Ae;_.setAttribute("position",new le(g,3)),_.computeVertexNormals(),this.bucket.add("slate",_);const m=ys(t,t.front[0]),p=m.length,y=Math.max(2,Math.round(p/3));for(let E=0;E<y;E++){const b=p/y*(E+.5);this.addLocal(t.mat,I(1.1,1.5,1,{x:b,y:e+.95,z:-.55}),m);const T=new ri(.78,.78,1.1,3,1);T.rotateX(Math.PI/2),T.rotateZ(Math.PI),T.scale(.95,.55,1),T.translate(b,e+1.95,-.55-.05),this.addLocal("slate",T,m);const L=n.chance(.3),S=new dt(1,.9,.75).multiplyScalar(n.float(.5,.9));this.instLocal(L?"interior1":"glass",m,b,e+.95,-.55+.51,.62,1,1,0,L?S:null),this.instLocal("frame",m,b,e+.95,-.55+.53,.62,1,1,0,this.frameColor(t)),L&&this.litWindows.push({f:m,cx:b,cy:e+.95,b:t.id})}const v=(i+r)/2,x=(o+a)/2;this.bucket.add("brickDark",I(.8,1.6,.8,{x:v+2.2,y:e+h+.8,z:x})),this.bucket.add("trim",I(.95,.12,.95,{x:v+2.2,y:e+h+1.65,z:x})),this.bucket.add("metalRust",I(r-i-2*l,.12,.12,{x:v,y:e+h+.06,z:o+l}))}gable(t,e,n){const{x0:i,x1:r,z0:o,z1:a}=t,l=2.4,h=.25,c=(i+r)/2,u=Math.atan2(l,(r-i)/2+h),d=Math.hypot((r-i)/2+h,l);for(const g of[-1,1])this.bucket.add("slate",I(d,.12,a-o+2*h,{x:c+g*((r-i)/2+h)/2,y:e+l/2,z:(o+a)/2,rz:-g*u}));this.bucket.add("metalDark",I(.2,.14,a-o+2*h,{x:c,y:e+l+.05,z:(o+a)/2}));for(const g of[o+.01,a-.01]){const _=new Ae;_.setAttribute("position",new le([i,e,g,r,e,g,c,e+l,g,r,e,g,i,e,g,c,e+l,g],3)),_.computeVertexNormals(),_.setAttribute("uv",new le([0,0,1,0,.5,1,1,0,0,0,.5,1],2)),this.bucket.add(t.mat,_)}const f=ys(t,t.front[0]);this.instLocal("glass",f,f.length/2,e+.9,-.12,.7,.9,1),this.instLocal("frame",f,f.length/2,e+.9,-.1,.7,.9,1,0,this.frameColor(t)),this.bucket.add("brickDark",I(.7,2.2,.7,{x:i+1.4,y:e+1.9,z:o+4}))}sawtooth(t,e,n){const{x0:i,x1:r,z0:o,z1:a}=t,l=Math.max(2,Math.round((a-o)/3)),h=(a-o)/l,c=1.5;this.bucket.add("roof",I(r-i,.2,a-o,{x:(i+r)/2,y:e-.08,z:(o+a)/2}));for(let u=0;u<l;u++){const d=o+u*h,f=Math.hypot(h,c),g=Math.atan2(c,h);this.bucket.add("metalRust",I(r-i,.08,f,{x:(i+r)/2,y:e+c/2,z:d+h/2,rx:g})),je.compose(ki.set((i+r)/2,e+c/2,d+.02),On.setFromAxisAngle(La,Math.PI),Oi.set(r-i-.2,c-.15,1)),this.inst.add(n.chance(.3)?"void":"glassDirty",je);for(let _=i+1;_<r;_+=1.3)this.bucket.add("metalDark",I(.06,c,.06,{x:_,y:e+c/2,z:d+.02}));this.bucket.add(t.mat,I(.25,c,h,{x:i+.12,y:e+c/2,z:d+h/2})),this.bucket.add(t.mat,I(.25,c,h,{x:r-.12,y:e+c/2,z:d+h/2}))}}fireEscape(t,e,n,i){const r=e.length,o=Math.min(4.2,r*.5),a=(r-o)/2+i.float(-.8,.8),l=1.15;for(let h=1;h<t.floors;h++){const c=n+(h-1)*Bn+.1;this.addLocal("grate",Me(new oe(o,l),{x:a+o/2,y:c,z:l/2+.05,rx:-Math.PI/2}),e),this.addLocal("metalRust",I(o,.06,.05,{x:a+o/2,y:c,z:l+.05}),e),this.addLocal("metalRust",I(o,.04,.04,{x:a+o/2,y:c+.95,z:l+.05}),e),this.addLocal("metalRust",I(o,.03,.03,{x:a+o/2,y:c+.5,z:l+.05}),e);for(const u of[0,1]){const d=a+u*o;this.addLocal("metalRust",I(.04,.04,l,{x:d,y:c+.95,z:l/2+.05}),e),this.addLocal("metalRust",I(.04,.95,.04,{x:d,y:c+.47,z:l+.05}),e)}for(let u=a+.3;u<a+o;u+=.3)this.addLocal("metalRust",I(.018,.95,.018,{x:u,y:c+.47,z:l+.05}),e);for(const u of[.2,.8])this.addLocal("metalRust",I(.05,.05,1.3,{x:a+o*u,y:c-.45,z:.55,rx:.6}),e);if(h>1){const u=c-Bn,d=Math.hypot(o*.75,Bn),f=Math.atan2(Bn,o*.75),g=a+o*.125+o*.75/2;for(const _ of[.25,.75])this.addLocal("metalRust",I(d,.12,.04,{x:g,y:(c+u)/2,z:_,rz:h%2?f:-f}),e);for(let _=0;_<10;_++){const m=(_+.5)/10,p=h%2?g-o*.75/2+m*o*.75:g+o*.75/2-m*o*.75;this.addLocal("grate",I(.22,.02,.5,{x:p,y:u+m*Bn,z:.5}),e)}}else{const u=a+o-.5;for(const d of[-.2,.2])this.addLocal("metalRust",I(.04,2.6,.04,{x:u+d,y:c-1.3,z:l-.1,rz:.06}),e);for(let d=.2;d<2.6;d+=.3)this.addLocal("metalRust",I(.4,.03,.03,{x:u-d*.06,y:c-d,z:l-.1}),e)}}}balconies(t,e,n,i){const r=e.length,o=Math.max(1,Math.round(r/4.5));for(let a=1;a<t.floors;a++)for(let l=0;l<o;l++){if(i.chance(.25))continue;const h=r/o*(l+.5),c=n+(a-1)*Bn+.05,u=2.4,d=1;this.addLocal("concrete",I(u,.16,d,{x:h,y:c,z:d/2}),e),this.addLocal("metalDark",I(u,.05,.05,{x:h,y:c+1,z:d}),e);for(const f of[-1,1])this.addLocal("metalDark",I(.05,.05,d,{x:h+f*u/2,y:c+1,z:d/2}),e);for(let f=-u/2;f<=u/2+.01;f+=.15)this.addLocal("metalDark",I(.02,1,.02,{x:h+f,y:c+.5,z:d}),e);i.chance(.5)&&this.addLocal("metalDark",I(.45,.45,.45,{x:h+i.float(-.6,.6),y:c+.3,z:.45,ry:i.float(0,1)}),e),i.chance(.35)&&this.addLocal("tarp",Me(new oe(.9,1.2,1,1),{x:h+i.float(-.4,.4),y:c+.45,z:d+.04,rz:i.float(-.1,.1)}),e)}}drainpipes(t,e,n){const i=[[t.x0+.15,t.z1+.12],[t.x1-.15,t.z1+.12],[t.x0+.15,t.z0-.12],[t.x1-.15,t.z0-.12]];for(const[r,o]of i)n.chance(.55)&&(Ns.some(a=>a!==t&&r>a.x0-.2&&r<a.x1+.2&&o>a.z0-.2&&o<a.z1+.2)||(je.compose(ki.set(r,e/2,o),On.identity(),Oi.set(1,e,1)),this.inst.add("pipe",je),this.bucket.add("metalRust",I(.18,.25,.25,{x:r,y:e+.1,z:o})),je.compose(ki.set(r,.3,o+Math.sign(o-(t.z0+t.z1)/2)*.12),On.setFromAxisAngle(new R(1,0,0),Math.PI/2*Math.sign(o-(t.z0+t.z1)/2)),Oi.set(1,.35,1)),this.inst.add("pipe",je)))}}function ex(s,t){const e=new oe(1,1),n=(()=>{const m=[];return m.push(I(1,.06,.08,{y:.5-.06/2})),m.push(I(1,.06,.08,{y:-.5+.06/2})),m.push(I(.06,1,.08,{x:.5-.06/2})),m.push(I(.06,1,.08,{x:-.5+.06/2})),m.push(I(.04,1,.05,{})),m.push(I(1,.04,.05,{y:.12})),pi(m)})(),i=pi([I(1,.05,.06,{y:.5-.05/2}),I(1,.05,.06,{y:-.5+.05/2}),I(.05,1,.06,{x:.5-.05/2}),I(.05,1,.06,{x:-.5+.05/2})]),r=pi([I(1.1,.08,.1,{y:.5}),I(.08,1,.1,{x:.53}),I(.08,1,.1,{x:-.53})]),o=pi([I(1.24,.12,.05,{y:.56}),I(1.24,.12,.05,{y:-.56}),I(.12,1.2,.05,{x:.56}),I(.12,1.2,.05,{x:-.56})]),a=(()=>{const m=new Ae;return m.setAttribute("position",new le([-.5,.5,0,.5,.5,0,-.5,-.5,0,.5,.5,0,.1,-.1,0,-.1,.2,0],3)),m.computeVertexNormals(),m})(),l=pi([I(.7,.42,.55,{}),I(.6,.3,.02,{z:.28})]),h=new ri(.055,.055,1,8),c=pi([I(.14,.32,.3,{}),I(.16,.06,.34,{y:.15})]),u=(()=>{const m=[];for(let y=0;y<9;y++){const v=Math.PI*((y+.5)/9);m.push(I(.16,.2,.05,{x:Math.cos(v)*.5,y:Math.sin(v)*.8+.02,rz:v-Math.PI/2}))}return m.push(I(.12,.24,.06,{y:.84})),pi(m)})(),d=(()=>{const m=[];for(let p=0;p<6;p++)m.push(I(.018,1,.018,{x:-.42+p*.168}));return m.push(I(1,.02,.02,{y:.45}),I(1,.02,.02,{y:-.45})),pi(m)})(),f=new xn(1,.08,.2),g=new xn(1,.2,.05),_=new xn(1,1,1);return{glass:{geometry:e,material:s.glass},glassDirty:{geometry:e,material:s.glassDirty},shopGlassClear:{geometry:e,material:t.shopGlass},interior0:{geometry:e,material:s.interiors[0]},interior1:{geometry:e,material:s.interiors[1]},interior2:{geometry:e,material:s.interiors[2]},dinerInterior:{geometry:e,material:t.diner},pharmacyInterior:{geometry:e,material:t.pharmacy},garageInterior:{geometry:e,material:t.garage},shopDoorGlass:{geometry:e,material:t.diner},void:{geometry:e,material:s.darkInterior},shard:{geometry:a,material:s.glass},curtain:{geometry:e,material:t.curtain},frame:{geometry:n,material:s.windowFrame,castShadow:!1},frameSimple:{geometry:i,material:s.windowFrame},doorFrame:{geometry:r,material:s.windowFrame},door:{geometry:e,material:s.door},sill:{geometry:f,material:s.trim,castShadow:!0},lintel:{geometry:g,material:s.trim},surround:{geometry:o,material:s.trim},plank:{geometry:_,material:s.woodBoard,castShadow:!0},shutterPanel:{geometry:e,material:t.shutter},acUnit:{geometry:l,material:s.metalDark,castShadow:!0},pipe:{geometry:h,material:s.metalRust,castShadow:!0},bracket:{geometry:c,material:s.trim},archLintel:{geometry:u,material:s.trim},bars:{geometry:d,material:s.metalDark,castShadow:!1}}}function pi(s){const t=[],e=[],n=[];let i=0;for(const o of s){const a=o.attributes.position,l=o.attributes.normal;for(let c=0;c<a.count;c++)t.push(a.getX(c),a.getY(c),a.getZ(c)),e.push(l.getX(c),l.getY(c),l.getZ(c));const h=o.index.array;for(let c=0;c<h.length;c++)n.push(h[c]+i);i+=a.count}const r=new Ae;return r.setAttribute("position",new le(t,3)),r.setAttribute("normal",new le(e,3)),r.setIndex(n),r}const Qe=new Uint8Array(512);(function(){const t=sd(1337),e=new Uint8Array(256);for(let n=0;n<256;n++)e[n]=n;for(let n=255;n>0;n--){const i=Math.floor(t()*(n+1)),r=e[n];e[n]=e[i],e[i]=r}for(let n=0;n<512;n++)Qe[n]=e[n&255]})();const Da=s=>s*s*s*(s*(s*6-15)+10);function mi(s,t,e,n){const i=s&15,r=i<8?t:e,o=i<4?e:i===12||i===14?t:n;return((i&1)===0?r:-r)+((i&2)===0?o:-o)}function Oe(s,t,e){const n=Math.floor(s)&255,i=Math.floor(t)&255,r=Math.floor(e)&255;s-=Math.floor(s),t-=Math.floor(t),e-=Math.floor(e);const o=Da(s),a=Da(t),l=Da(e),h=Qe[n]+i,c=Qe[h]+r,u=Qe[h+1]+r,d=Qe[n+1]+i,f=Qe[d]+r,g=Qe[d+1]+r,_=(m,p,y)=>m+y*(p-m);return _(_(_(mi(Qe[c],s,t,e),mi(Qe[f],s-1,t,e),o),_(mi(Qe[u],s,t-1,e),mi(Qe[g],s-1,t-1,e),o),a),_(_(mi(Qe[c+1],s,t,e-1),mi(Qe[f+1],s-1,t,e-1),o),_(mi(Qe[u+1],s,t-1,e-1),mi(Qe[g+1],s-1,t-1,e-1),o),a),l)}const ie=new Xe(4242);class nx{constructor(t){this.bucket=t,this.m=new jt}at(t,e,n,i=0,r=0,o=0,a=1){const l=new sn().setFromEuler(new Ke(r,i,o,"YXZ"));return this.m.compose(new R(t,e,n),l,new R(a,a,a)),this}add(t,e){return e.applyMatrix4(this.m),this.bucket.add(t,e),e}}function or(s,t,e=.03){const n=new qu(s.map(([r,o])=>new $(r,o))),i=new nc(n,{depth:t,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelSegments:2,curveSegments:4});return i.rotateY(-Math.PI/2),i.translate(t/2,0,0),i}const ix=[[-2.3,.3],[2.22,.3],[2.33,.48],[2.3,.72],[2,.82],[.95,.9],[-1.55,.93],[-2.22,.9],[-2.33,.6]],sx=[[.98,.88],[.18,1.36],[-.95,1.38],[-1.62,.92]],rx=[[-2.45,.34],[2.35,.34],[2.48,.55],[2.45,.95],[2.1,1.08],[-2.45,1.08]],ox=[[2.08,1.06],[1.45,1.92],[1.2,2.08],[-2.45,2.1],[-2.45,1.06]];function wn(s,t,e){const{kind:n="sedan",color:i="carGrey"}=e,r=n==="burnt",o=r?"burnt":i,a=n==="van"||n==="ambulance"?1.95:1.78,l=r?-.12:0,h=[],c=(m,p)=>h.push([m,p]);if(n==="van"||n==="ambulance"){c(o,or(rx,a-.06)),c(o,or(ox.map(([m,p])=>[m,p]),a-.1,.02)),c("glass",Me(new oe(a-.4,.75),{y:1.5,z:1.79,rx:-.9}));for(const m of[-1,1])c(e.smashed?"darkInterior":"glass",Me(new oe(.75,.55),{x:m*(a/2-.02),y:1.55,z:1.25,ry:m*Math.PI/2}));if(n==="ambulance"){for(const m of[-1,1])c("stripeRed",I(.02,.18,4.6,{x:m*(a/2-.02),y:1.1,z:-.1})),c("stripeRed",I(.02,.5,.5,{x:m*(a/2-.02),y:1.55,z:-1}));c("metalDark",I(1.3,.12,.3,{y:2.18,z:1})),c("lensRed",I(.5,.1,.26,{x:.35,y:2.22,z:1})),c("lensRed",I(.5,.1,.26,{x:-.35,y:2.22,z:1}))}if(e.rearOpen){for(const m of[-1,1])c(o,I(.05,1.55,.9,{x:m*(a/2+.35),y:1.15,z:-2.45-.35,ry:m*.9}));c("darkInterior",Me(new oe(a-.25,1.6),{y:1.2,z:-2.46,ry:Math.PI}))}}else{c(o,or(ix,a-.06)),c(r||e.smashed?"darkInterior":"glass",or(sx,a-.32,.015)),c(o,I(a-.3,.05,1.08,{y:1.38,z:-.4}));for(const m of[-1,1])c(o,I(.06,.6,.08,{x:m*(a/2-.16),y:1.13,z:.6,rx:-.95})),c(o,I(.06,.48,.1,{x:m*(a/2-.16),y:1.14,z:-.33})),c(o,I(.06,.58,.1,{x:m*(a/2-.16),y:1.13,z:-1.3,rx:.85}));if(n==="police"&&!r){for(const m of[-1,1])c("stripeWhite",I(.02,.42,1.9,{x:m*(a/2+.01),y:.62,z:-.2}));c("metalDark",I(1.2,.12,.3,{y:1.47,z:-.35})),c("lensRed",I(.45,.1,.26,{x:.33,y:1.5,z:-.35})),c("lensBlue",I(.45,.1,.26,{x:-.33,y:1.5,z:-.35}))}n==="taxi"&&!r&&c("signBox",I(.75,.22,.25,{y:1.52,z:-.35}))}const u=n==="van"||n==="ambulance"?2.45:2.3;if(c(r?"burnt":"rubber",I(a-.1,.16,.14,{y:.42,z:u+.04})),c(r?"burnt":"rubber",I(a-.1,.16,.14,{y:.42,z:-u-.04})),!r){for(const m of[-1,1])c("headlight",I(.32,.14,.04,{x:m*.6,y:.66,z:u+.02})),c("taillight",I(.3,.12,.04,{x:m*.62,y:.72,z:-u-.02}));c("plate",I(.5,.12,.02,{y:.45,z:-u-.12}))}const d=n==="van"||n==="ambulance"?1.6:1.38;for(const m of[-1,1])for(const p of[-1,1]){const y=p*(a/2-.12);r||c("rubber",Jt(.33,.33,.22,18,{x:y,y:.33,z:m*d,rz:Math.PI/2})),c("metalDark",Jt(.2,.2,.24,12,{x:y,y:r?.22:.33,z:m*d,rz:Math.PI/2})),c("darkInterior",Jt(.36,.36,.2,14,{x:y-p*.02,y:.4,z:m*d,rz:Math.PI/2},!0))}for(const m of e.doors||[]){const p=m.side,y=m.front?.45:-.55;c("darkInterior",Me(new oe(1,.95),{x:p*(a/2+.005),y:.88,z:y-.5,ry:p*Math.PI/2}));const v=m.angle??.9,x=y,E=I(.07,.9,1,{z:-.5});Me(E,{x:p*(a/2),y:.85,z:x,ry:p*v}),c(o,E),c("glass",Me(I(.02,.38,.8,{z:-.5,y:.45}),{x:p*(a/2),y:.85,z:x,ry:p*v}))}e.trunkOpen&&n!=="van"&&c(o,I(a-.2,.05,.9,{y:1.25,z:-1.9,rx:-1}));const f=e.y??ce(e.x,e.z),g=new jt,_=new sn().setFromEuler(new Ke(e.rx||0,e.yaw||0,e.flipped?Math.PI:e.rz||0,"YXZ"));g.compose(new R(e.x,f+l+(e.flipped?1.43:0)+(e.dy||0),e.z),_,new R(1,1,1));for(const[m,p]of h)p.applyMatrix4(g),s.bucket.add(m,p);return Cn(e.x,e.z,a/2+.05,u+.1,e.yaw||0,"car"),g}function Bi(s,t,e,n,i="on",r=0){const o=ce(t,e),a=6.2;return s.at(t,o,e,n,r,0),s.add("metalPole",Jt(.07,.11,a,10,{y:a/2})),s.add("metalPole",Jt(.16,.18,.5,10,{y:.25})),s.add("metalPole",I(.06,.06,1.7,{y:a-.1,z:.85})),s.add("metalPole",I(.05,.05,.8,{y:a-.35,z:.4,rx:.6})),s.add("metalPole",I(.34,.14,.62,{y:a-.12,z:1.75})),s.add(i==="dead"||i==="broken"?"lampDead":"lampWarm",I(.26,.02,.5,{y:a-.2,z:1.75})),vn(t,e,.22,"pole"),new R(0,a-.25,1.75).applyMatrix4(s.m)}function ax(s,t,e,n,i,r){const o=ce(t,e);s.at(t,o,e,n),s.add("metalPole",Jt(.1,.13,6,10,{y:3})),s.add("metalPole",I(.08,.08,i,{y:5.8,z:i/2}));const a=[];for(const l of[.55,.92]){const h=i*l;s.add("metalDark",I(.36,1,.3,{y:5.25,z:h})),s.add("metalDark",I(.4,.06,.2,{y:5.8,z:h}));for(let c=0;c<3;c++){s.add("metalDark",I(.26,.04,.2,{x:.18,y:5.58-c*.31+.12,z:h,ry:Math.PI/2}));const u=new Sr(.1,14);Me(u,{x:.155,y:5.58-c*.31,z:h,ry:Math.PI/2}),u.applyMatrix4(s.m),a.push({geo:u,slot:c})}}vn(t,e,.25,"pole"),r.push(...a)}function Ia(s,t,e,n,i={}){const r=or([[-.3,0],[.3,0],[.3,.08],[.12,.3],[.1,.81],[-.1,.81],[-.12,.3],[-.3,.08]],3,.01);r.rotateY(Math.PI/2),r.translate(0,0,1.5-1.5),s.at(t,ce(t,e),e,n,0,i.tilt||0),s.add("barrierConcrete",r),i.stripe&&s.add("stripeRed",I(.215,.12,2.9,{y:.55,x:0})),Cn(t,e,.32,1.55,n,"barrier")}function Wh(s,t,e,n,i=!1){s.at(t,ce(t,e)+(i?.12:0),e,n,0,i?Math.PI/2-.1:0);for(const r of[-.8,.8])s.add("wood",I(.06,1,.06,{x:r,y:.5,z:.22,rx:-.25})),s.add("wood",I(.06,1,.06,{x:r,y:.5,z:-.22,rx:.25}));for(let r=0;r<6;r++)s.add(r%2?"stripeWhite":"stripeRed",I(.3,.22,.04,{x:-.75+r*.3,y:.92,z:0}));i||Cn(t,e,.9,.3,n,"barrier")}function Xh(s,t,e,n,i,r){const o=ce(t,e),a=Math.round(i/.6);for(let l=0;l<r;l++)for(let h=0;h<a-l%2;h++){if(l===r-1&&ie.chance(.2))continue;const c=new oi(.5,10,6);c.scale(.62,.32,.38),s.at(t,o,e,n),s.add("sandbag",Me(c,{x:-i/2+.3+h*.6+l%2*.3+ie.float(-.03,.03),y:.08+l*.15,z:ie.float(-.03,.03),ry:ie.float(-.1,.1)}))}Cn(t,e,i/2,.25,n,"sandbags")}function Ua(s,t,e,n,i=!0){s.at(t,ce(t,e),e,n),s.add("dumpster",I(1.9,1.05,1.15,{y:.65})),s.add("metalDark",I(2,.08,1.2,{y:1.15})),s.add("dumpster",I(.95,.05,1.2,{x:-.48,y:1.2})),s.add("dumpster",I(.95,.05,1.2,i?{x:.48,y:1.55,z:-.75,rx:-1.3}:{x:.48,y:1.2}));for(const r of[-.8,.8])for(const o of[-.45,.45])s.add("rubber",Jt(.07,.07,.06,8,{x:r,y:.07,z:o,rx:Math.PI/2}));Cn(t,e,1,.62,n,"dumpster")}function er(s,t,e,n=!1,i=0){const r=ce(t,e);n?(s.at(t,r+.3,e,i,0,Math.PI/2),s.add("metalDark",Jt(.3,.27,.9,14,{},!0)),s.at(t,r,e,i),s.add("metalDark",Jt(.33,.33,.05,14,{x:.9,y:.03,z:.4}))):(s.at(t,r,e,i),s.add("metalDark",Jt(.3,.27,.9,14,{y:.45})),s.add("metalDark",Jt(.33,.33,.06,14,{y:.92}))),vn(t,e,.35,"bin")}function gi(s,t,e,n,i=.8){const r=ce(t,e);for(let o=0;o<n;o++){const a=new zo(.32,2),l=a.attributes.position,h=ie.float(0,100);for(let u=0;u<l.count;u++){const d=l.getX(u),f=l.getY(u),g=l.getZ(u),_=1+Oe(d*4+h,f*4,g*4)*.25;l.setXYZ(u,d*_,Math.max(f*_*.8,-.18),g*_)}a.computeVertexNormals();const c=ie.float(.75,1.2);s.at(t+ie.float(-i,i),r+.17*c,e+ie.float(-i,i),ie.float(0,6),0,0,c),s.add(ie.chance(.7)?"plasticBag":"plasticBagGrey",a)}vn(t,e,i*.8+.2,"bags")}function mn(s,t,e,n,i,r=["chunk","paper","can","brick"]){for(let o=0;o<i;o++){const a=ie.float(0,Math.PI*2),l=Math.sqrt(ie.next())*n,h=t+Math.cos(a)*l,c=e+Math.sin(a)*l,u=ce(h,c),d=ie.pick(r);s.at(h,u,c,ie.float(0,6)),d==="chunk"?s.add("concrete",I(ie.float(.08,.3),ie.float(.05,.15),ie.float(.08,.25),{y:.04,rx:ie.float(-.3,.3)})):d==="brick"?s.add("brickRed",I(.22,.07,.1,{y:.035,rz:ie.float(-.2,.2)})):d==="paper"?s.add("paper",Me(new oe(ie.float(.2,.35),ie.float(.25,.4)),{y:.012,rx:-Math.PI/2+ie.float(-.08,.08)})):d==="can"?s.add("metalPole",Jt(.033,.033,.12,8,{y:.033,rz:Math.PI/2})):d==="glass"?s.add("glass",Me(new oe(ie.float(.05,.15),ie.float(.05,.12)),{y:.01,rx:-Math.PI/2})):d==="shell"&&s.add("brass",Jt(.006,.006,.045,5,{y:.008,rz:Math.PI/2}))}}function _i(s,t,e,n,i,r="up"){const o=ce(t,e);if(r==="down"){s.at(t,o+.05,e,n,-Math.PI/2+.06),s.add("chainLink",Me(new oe(i,2),{y:1})),s.add("metalRust",Jt(.03,.03,i,6,{y:1.95,rz:Math.PI/2}));return}const a=r==="lean"?.35:0;s.at(t,o,e,n,a),s.add("chainLink",Me(new oe(i,2),{y:1.05})),s.add("metalRust",Jt(.03,.03,i,6,{y:2.05,rz:Math.PI/2}));for(const l of[-1,1])s.add("metalRust",Jt(.04,.04,2.1,6,{x:l*i/2,y:1.05}));a||Cn(t,e,i/2,.08,n,"fence")}function za(s,t,e){s.at(t,ce(t,e),e,ie.float(0,6)),s.add("hydrant",Jt(.12,.14,.62,12,{y:.31})),s.add("hydrant",Jt(.15,.15,.06,12,{y:.06})),s.add("hydrant",new oi(.13,12,6,0,Math.PI*2,0,Math.PI/2).translate(0,.62,0)),s.add("hydrant",Jt(.05,.05,.38,8,{y:.42,rz:Math.PI/2})),vn(t,e,.22,"hydrant")}function Na(s,t,e,n,i=!1){s.at(t,ce(t,e)+(i?.1:0),e,n,i?-1.45:0);for(let r=0;r<3;r++)s.add("wood",I(1.8,.04,.12,{y:.45,z:-.15+r*.15}));for(let r=0;r<2;r++)s.add("wood",I(1.8,.12,.04,{y:.65+r*.17,z:-.25,rx:-.15}));for(const r of[-.75,.75])s.add("metalDark",I(.05,.45,.45,{x:r,y:.22}));Cn(t,e,.95,.35,n,"bench")}function Fa(s,t,e,n,i){s.at(t,ce(t,e)+(i?.25:0),e,n,i?1.5:0),s.add("newsBox",I(.5,1,.45,{y:.5})),s.add("glass",I(.4,.3,.02,{y:.75,z:.23})),vn(t,e,.4,"newsbox")}function Yh(s,t,e,n){s.at(t,ce(t,e)+.45,e,n,0,Math.PI/2-.05);const i=[];for(let r=0;r<=5;r++)i.push(I(.012,.012,.9,{x:-.25+r*.1,y:.5}),I(.012,.45,.012,{x:-.25+r*.1,y:.75,z:.45}));for(let r=0;r<=4;r++)i.push(I(.5,.012,.012,{y:.5+r*.1,z:.45}),I(.012,.012,.9,{x:-.25,y:.5+r*.1}),I(.012,.012,.9,{x:.25,y:.5+r*.1}));i.push(I(.55,.03,.03,{y:1,z:-.5}));for(const r of i)s.add("metalPole",r);for(const r of[-.22,.22])for(const o of[-.38,.38])s.add("rubber",Jt(.05,.05,.03,8,{x:r,y:.06,z:o,rz:Math.PI/2}));vn(t,e,.6,"cart")}function ro(s,t,e,n,i=!1){if(s.at(t,ce(t,e),e,n),i){s.add("suitcase",I(.7,.1,.45,{y:.05})),s.add("suitcase",I(.7,.1,.45,{y:.1,z:-.3,rx:-1.8}));for(let r=0;r<4;r++)s.add(ie.pick(["clothA","clothB","paper"]),Me(new oe(ie.float(.3,.5),ie.float(.3,.5)),{x:ie.float(-.6,.6),y:.012+r*.003,z:ie.float(.3,.9),rx:-Math.PI/2,rz:ie.float(0,3)}))}else s.add("suitcase",I(.7,.45,.22,{y:.11,rx:Math.PI/2})),s.add("rubber",I(.2,.03,.03,{y:.24,z:.36}))}function qh(s,t,e,n){s.at(t,ce(t,e)+.03,e,n,-Math.PI/2);for(const i of[-.55,.55])s.add("rubber",new No(.33,.025,6,20).translate(i,.35,0));s.add("metalRust",I(1,.03,.03,{y:.55,rz:.05})),s.add("metalRust",I(.03,.5,.03,{x:-.1,y:.45,rz:.4})),s.add("metalRust",I(.7,.03,.03,{x:.2,y:.4,rz:-.5}))}function nr(s,t,e,n=!0){s.at(t,ce(t,e)+(n?.1:.33),e,ie.float(0,6),n?Math.PI/2:0),s.add("rubber",new No(.26,.1,8,18))}function jh(s,t,e,n){s.at(t,ce(t,e),e,n);for(let i=0;i<7;i++)s.add("wood",I(.12,.02,1.2,{x:-.5+i*.166,y:.13}));for(const i of[-.5,0,.5])s.add("wood",I(1.2,.1,.1,{y:.06,z:i}))}function ir(s,t,e,n,i=.6){s.at(t,ce(t,e),e,n),s.add("wood",I(i,i,i,{y:i/2})),vn(t,e,i*.7,"crate")}function lx(s,t,e,n){s.at(t,ce(t,e),e,ie.float(0,6)),s.add("burnt",Jt(.29,.29,.88,16,{y:.44},!0)),s.add("burnt",new Sr(.28,14).rotateX(-Math.PI/2).translate(0,.62,0)),vn(t,e,.36,"drum")}function cx(s,t,e,n){const i=ce(t,e);s.at(t,i,e,n);for(let r=0;r<3;r++){const o=r/3*Math.PI*2;s.add("metalDark",I(.04,2.2,.04,{x:Math.cos(o)*.35,y:1.05,z:Math.sin(o)*.35,rz:Math.cos(o)*.17,rx:-Math.sin(o)*.17}))}return s.add("metalDark",I(.6,.45,.25,{y:2.3,rx:.35})),s.add("lampCold",Me(new oe(.5,.36),{y:2.33,z:.13,rx:.35})),vn(t,e,.5,"flood"),new R(0,2.33,.2).applyMatrix4(s.m)}function Zh(s,t,e,n,i,r=.95){const o=Math.hypot(n-t,i-e),a=Math.atan2(n-t,i-e),l=new oe(.07,o,1,8),h=l.attributes.position;for(let c=0;c<h.count;c++){const u=h.getY(c)/o+.5;h.setZ(c,-Math.sin(u*Math.PI)*.25)}l.rotateX(-Math.PI/2),l.computeVertexNormals(),s.at((t+n)/2,ce(t,e)+r,(e+i)/2,a,0,0),s.add("tape",l)}function hx(s,t,e,n,i){const r=ce(t,e);s.at(t,r,e,0),s.add("metalRust",Jt(.04,.04,2.4,6,{y:1.2})),s.at(n,r,i,0),s.add("metalRust",Jt(.04,.04,2.4,6,{y:1.2}));const o=Math.hypot(n-t,i-e),a=Math.atan2(n-t,i-e);s.at((t+n)/2,r+2.3,(e+i)/2,a),s.add("metalDark",Jt(.008,.008,o,4,{rx:Math.PI/2}));for(let l=0;l<5;l++){const h=(l+.5)/5-.5,c=ie.float(.5,.9),u=ie.float(.5,.9);s.add(ie.pick(["clothA","clothB","tarp"]),Me(new oe(c,u,2,2),{z:h*o,y:-u/2-.02-Math.sin((h+.5)*Math.PI)*.15,ry:Math.PI/2+ie.float(-.2,.2)}))}}function Kh(s,t,e,n){s.at(t,ce(t,e),e,n,0,.1),s.add("mattress",I(1.4,.2,1.95,{y:.12}))}function Te(s,t,e,n,i,r,o=0,a=1,l=0){const h=ce(n,i),c=e==="pool"?t.bloodPool:e==="smear"?t.bloodSmear:e==="dry"?[t.bloodDry]:t.bloodSplat,u=c[l%c.length],d=new oe(r*a,r),f=new re(d,u);return f.rotation.set(-Math.PI/2,0,o),f.position.set(n,h+.006+l*7e-4,i),f.receiveShadow=!0,f.renderOrder=1,s.add(f),f}function $h(s,t,e,n,i,r,o,a){const l=new re(new oe(r,o),t);return l.position.set(e,n,i),l.rotation.y=a,l.receiveShadow=!0,l.renderOrder=1,s.add(l),l}function ux(s,t,e){const n=new nx(s),i={lamps:[],signals:[],flood:null,embers:null,hazards:[]},r={carGrey:new ut({color:"#4a4e52",metalness:.6,roughness:.42,map:t.cache.grime.map}),carBlack:new ut({color:"#141518",metalness:.6,roughness:.35,map:t.cache.grime.map}),carMaroon:new ut({color:"#3b1616",metalness:.55,roughness:.45,map:t.cache.grime.map}),carBlue:new ut({color:"#253141",metalness:.55,roughness:.45,map:t.cache.grime.map}),carTaxi:new ut({color:"#6b5a24",metalness:.5,roughness:.5,map:t.cache.grime.map}),carWhite:new ut({color:"#8d8c86",metalness:.5,roughness:.5,map:t.cache.grime.map}),lensRed:new ut({color:"#3a0a0a",roughness:.2,emissive:"#2a0000",emissiveIntensity:.3}),lensBlue:new ut({color:"#0a1530",roughness:.2}),headlight:new ut({color:"#8a8c88",roughness:.15,metalness:.3}),taillight:new ut({color:"#4a0c0a",roughness:.2}),plate:new ut({color:"#77756a",roughness:.6}),signBox:new ut({color:"#6a6250",roughness:.5}),dumpster:new ut({color:"#28382e",metalness:.5,roughness:.7,map:t.cache.rust.map}),hydrant:new ut({color:"#4a1a14",metalness:.4,roughness:.6,map:t.cache.grime.map}),newsBox:new ut({color:"#2a3442",metalness:.4,roughness:.6,map:t.cache.grime.map}),suitcase:new ut({color:"#2a2622",roughness:.5}),clothA:new ut({color:"#4a4440",roughness:.95,side:Ie}),clothB:new ut({color:"#3a2a2e",roughness:.95,side:Ie}),mattress:new ut({color:"#6a6252",roughness:.95,map:t.cache.grime.map}),brass:new ut({color:"#6a5428",metalness:.9,roughness:.35})};i.lamps.push({pos:Bi(n,-20,-4.55,0,"on"),state:"on",id:"westN"}),i.lamps.push({pos:Bi(n,8.5,4.55,Math.PI,"flicker"),state:"flicker",id:"interSE"}),i.lamps.push({pos:Bi(n,24,4.55,Math.PI,"on"),state:"on",id:"pool"}),i.lamps.push({pos:Bi(n,-4.55,22,Math.PI/2,"dead",0),state:"dead",id:"crossS"}),i.lamps.push({pos:Bi(n,-30.5,4.55,Math.PI,"dead",.22),state:"dead",id:"darkCorner"}),i.lamps.push({pos:Bi(n,30,-4.55,0,"on"),state:"on",id:"eastN"}),i.lamps.push({pos:Bi(n,4.55,-24,-Math.PI/2,"dead"),state:"dead",id:"crossN"}),ax(n,-4.7,4.7,Math.PI/2,4.6,i.signals),n.at(5.6,ce(5.6,-5.6),-5.6,1.23,0,.95),n.add("metalPole",Jt(.1,.13,6,10,{y:3})),n.add("metalPole",I(.08,.08,3.2,{y:5.8,z:1.6})),n.add("metalDark",I(.36,1,.3,{y:5.25,z:2.6})),vn(5.6,-5.6,.3,"pole"),wn(n,t,{kind:"police",color:"carBlack",x:4.6,z:-3.3,yaw:2.35,doors:[{side:1,front:!0,angle:1}],smashed:!0}),mn(n,5.5,-4,2.2,40,["glass","glass","chunk","paper","shell"]),mn(n,2,-2,1.4,14,["shell","shell","glass"]),Te(e,t,"smear",6.1,-2,1.4,2.2,.6,1),Te(e,t,"splat",5.9,-2.6,.9,.3,1,2),Ia(n,-2.3,14,Math.PI/2+.15,{stripe:!0}),Ia(n,1,14.3,Math.PI/2-.1),Ia(n,5.6,13.6,Math.PI/2+.6,{tilt:0}),wn(n,t,{kind:"sedan",color:"carBlue",x:2.4,z:17,yaw:.35,flipped:!0,smashed:!0}),Wh(n,-1.1,12.6,.1,!0),Wh(n,3.4,12.5,-.2,!1),Xh(n,-3.7,15.6,.1,2.4,3),Xh(n,-6,13.6,Math.PI/2,1.8,2),i.flood={pos:cx(n,-5.6,11.3,.7),target:new R(0,.4,13.6)},Zh(n,-3.5,13.2,3.4,12.6),Zh(n,3.4,12.6,5.7,12.3,.9),mn(n,.8,13,3.5,70,["shell","shell","shell","paper","chunk","can"]),ir(n,-5,16.4,.4,.55),ir(n,-5.1,17.1,.1,.45),Te(e,t,"pool",1,11.6,2.2,0,1,0),Te(e,t,"dry",-3.3,16.9,1.6,.5,1,1),Te(e,t,"smear",-1.6,12.2,1.2,1.2,.6,2),wn(n,t,{kind:"van",color:"carWhite",x:-24.5,z:-2.3,yaw:-1.45,rearOpen:!1,doors:[{side:-1,front:!0,angle:1.1}]}),wn(n,t,{kind:"sedan",color:"carMaroon",x:-28.5,z:2.4,yaw:Math.PI/2+.08,doors:[{side:1,front:!1,angle:.8}],trunkOpen:!0}),ro(n,-27,3.6,.6,!0),ro(n,-25.6,3,1.9,!1);const o=wn(n,t,{kind:"taxi",color:"carTaxi",x:19,z:-2.2,yaw:-Math.PI/2-.25,smashed:!1,doors:[{side:-1,front:!1,angle:1.2}]});for(const[l,h]of[[.62,-2.33],[-.62,-2.33],[.6,2.33],[-.6,2.33]])i.hazards.push(new R(l,.7,h).applyMatrix4(o));wn(n,t,{kind:"sedan",color:"carBlue",x:-9.5,z:2.6,yaw:Math.PI/2+.35,doors:[{side:-1,front:!0,angle:1}]}),wn(n,t,{kind:"burnt",x:33,z:-2.3,yaw:-Math.PI/2+.1}),wn(n,t,{kind:"sedan",color:"carGrey",x:2.5,z:-26,yaw:.05}),wn(n,t,{kind:"sedan",color:"carBlack",x:-2.4,z:27.5,yaw:Math.PI-.1,smashed:!0}),wn(n,t,{kind:"ambulance",color:"carWhite",x:27.6,z:1.7,yaw:Math.PI/2+.12,rearOpen:!0,doors:[{side:1,front:!0,angle:.9}]}),n.at(23.9,0,1,.4,0,1.45),n.add("metalPole",I(.6,.05,1.9,{y:.35})),n.add("mattress",I(.55,.1,1.8,{y:.42}));for(const l of[-.25,.25])for(const h of[-.8,.8])n.add("metalPole",Jt(.02,.02,.35,5,{x:l,y:.17,z:h}));Cn(23.9,1,.45,1,.4,"stretcher"),ro(n,24.8,-.4,1.2,!1),mn(n,24.4,.8,1.6,20,["paper","paper","glass"]),Te(e,t,"pool",24.3,.3,2,.5,1,1),Te(e,t,"smear",25.2,1.9,1.6,1.3,.35,0),n.at(14,.15,6.35,0);for(const l of[-1.6,1.6])n.add("metalPole",I(.08,2.4,.08,{x:l,y:1.2,z:.4}));for(const l of[-1.6,1.6])n.add("metalPole",I(.08,2.4,.08,{x:l,y:1.2,z:-.4}));n.add("metalDark",I(3.4,.08,1.2,{y:2.42})),n.add("glass",I(1.5,1.6,.02,{x:-.8,y:1.3,z:.45})),n.add("wood",I(2.4,.05,.4,{y:.48,z:.2})),n.add("metalDark",I(.05,.45,.35,{x:-1,y:.24,z:.2})),n.add("metalDark",I(.05,.45,.35,{x:1,y:.24,z:.2})),n.add("signBox",I(.06,1.6,1,{x:1.62,y:1.4,z:0})),Cn(14,6.35,1.7,.5,0,"shelter"),mn(n,14.6,5.6,1.4,34,["glass","glass","glass","paper"]),Yh(n,-14.6,-4.6,.7),mn(n,-13.6,-4.4,1.1,14,["can","can","paper"]),Te(e,t,"pool",-12.1,-5.3,1.8,.3,1,1),Te(e,t,"smear",-15.45,-1.47,2.9,-.723,.16,0),Te(e,t,"smear",-13.55,-3.62,2.9,-.723,.16,1),Te(e,t,"splat",-17.6,.3,1,0,1,0),Ua(n,15.95,-18.4,Math.PI/2,!0),gi(n,17.6,-16.9,4,.5),gi(n,15.7,-9,3,.4),Kh(n,18,-19.5,.3),Te(e,t,"pool",16.8,-12.7,2.4,.4,1,2),Te(e,t,"splat",17.4,-11.4,1.2,1.1,1,0),Te(e,t,"smear",16.6,-10.1,1.1,.1,.4,1),$h(e,t.handprints,18.49,1.2,-11.8,1.3,1.3,-Math.PI/2);for(let l=0;l<14;l++){const h=l/13,c=16.5+Math.sin(l*.5)*.25+(l%2?.14:-.14),u=-11+l*.62,d=l<7?c:c+(l-6)*.55,f=l<7?u:-11+6*.62+(l-6)*.18,g=Te(e,t,"splat",d,f,.24,l<7?0:-1.2,.55,l);g.material=t.bloodSplat[l%3].clone(),g.material.opacity=.9*(1-h*.85)}$h(e,t.bloodSplat[1],15.01,.9,-13.2,1.4,1.4,Math.PI/2),Ua(n,22.5,-21.2,.05,!1),jh(n,25.8,-25.5,.3),jh(n,25.6,-25.4,.1),ir(n,9.5,-21,.2,.7),ir(n,10.2,-21.2,.6,.5),nr(n,12.5,-21,!0),nr(n,13,-20.6,!0),gi(n,21,-20.5,3,.6),Te(e,t,"dry",17.2,-25.8,1.4,0,1,0),wn(n,t,{kind:"burnt",x:-12,z:-26,yaw:.6}),_i(n,-7.4,-24,Math.PI/2,3,"up"),_i(n,-7.4,-29,Math.PI/2,3,"lean"),_i(n,-8.3,-21,Math.PI/2+.2,3,"down"),nr(n,-14.5,-29.5,!0),nr(n,-15,-29,!1),mn(n,-12,-26,3,30,["chunk","paper","brick","can"]),_i(n,9,7.4,0,3.6,"up"),_i(n,13,7.4,0,3.6,"down"),_i(n,16.6,7.4,.05,3.4,"lean"),_i(n,7.4,10.5,Math.PI/2,3.6,"up"),_i(n,7.4,16,Math.PI/2,3.6,"down"),wn(n,t,{kind:"burnt",x:14.5,z:11.6,yaw:.9,y:.15});for(let l=0;l<4;l++){const h=new zo(1,2),c=h.attributes.position;for(let f=0;f<c.count;f++){const g=c.getY(f);c.setY(f,Math.max(0,g)*.45);const _=1+Oe(c.getX(f)*2+l,g*2,c.getZ(f)*2)*.3;c.setX(f,c.getX(f)*_),c.setZ(f,c.getZ(f)*_)}h.computeVertexNormals();const u=[9.8,16.2,11,15.8][l],d=[15.5,16,9.6,9][l];n.at(u,.15,d,l,0,0,1.2+l*.2),n.add("rubble",h),vn(u,d,1.1+l*.2,"rubble")}mn(n,12.5,12.5,4.5,60,["chunk","chunk","brick","brick","paper"]),nr(n,10.4,13,!0),Ua(n,27,20.8,0,!0),gi(n,29,20.4,4,.6),er(n,19.5,21.6,!0,.4),hx(n,-28.5,17.5,-21.5,18.2),lx(n,-23.5,21.5),i.embers=new R(-23.5,.75,21.5),Na(n,-13.5,20.2,.3,!0),qh(n,-16,24.6,1.1),Kh(n,-30.5,24,1.4),ir(n,-12.2,24.8,.2,.6),mn(n,-20,22,5,40,["paper","can","chunk"]),Te(e,t,"pool",-21.3,24,1.8,1.2,1,0),Te(e,t,"smear",-19.6,22,1,2,.4,0),er(n,-34.6,5.6,!1),er(n,-33.8,6.2,!0,2.2),gi(n,-35,6.3,3,.5),Te(e,t,"dry",-31.6,5.2,1.8,.4,1,0),Fa(n,-29,6.3,2.6,!0),Yh(n,-33,4.6,-.6),mn(n,-32.5,5.5,2.2,22,["paper","can","glass","chunk"]),ro(n,-29.8,5,2,!0),za(n,-6,-6.2),za(n,26,5),za(n,-6,26),Na(n,12.5,-6.4,Math.PI,!1),Na(n,-22,6.4,0,!0),Fa(n,-6.3,6.3,.3,!0),Fa(n,6.2,-6.4,Math.PI,!1),gi(n,-8,6.5,3,.5),gi(n,27.5,-6.5,4,.6),gi(n,6.4,20.5,3,.5),er(n,10.5,6.4,!0,1),er(n,-26.5,-6.5,!1),mn(n,0,0,14,45,["paper","can","chunk","chunk"]),mn(n,20,0,12,24,["paper","can","chunk"]),mn(n,-20,0,12,24,["paper","can","glass","chunk"]),qh(n,21.5,6,2.2),Te(e,t,"splat",22.8,5.6,.9,0,1,1),Te(e,t,"dry",-1,-1,1.4,.8,1,0),Te(e,t,"smear",8,-1.2,1,1.4,.5,1),Te(e,t,"dry",5.3,19,1.3,1,1,2),Te(e,t,"splat",-18,9.2,.9,.5,1,2);const a=new ut({color:"#4a4744",roughness:.95,map:t.cache.concrete.map});return{fx:i,materials:{...r,rubble:a}}}const dx=["slate","roofGravel","brickRed","brickDark","brickOchre","plasterGrey","plasterGreen","plasterBeige","concrete","trim","sidewalk","curb","roof","barrierConcrete","yardAsphalt","dirt","cobble"];function fx(s,t){K1();const e=new en;e.name="city";const n=new q1,i=new j1,r=new en;r.name="decals";const o={neon:[],windowLights:[]},a=new re(new oe(88,88),t.road);a.rotation.x=-Math.PI/2,a.receiveShadow=!0,a.name="road",e.add(a);const l=new re(new oe(500,500),new ut({color:"#0e0f11",roughness:.55,metalness:0}));l.rotation.x=-Math.PI/2,l.position.y=-.03,l.receiveShadow=!0,e.add(l);const h=44,c=Ul;for(const S of[-1,1])for(const M of[-1,1]){const P=S*(c+h)/2,N=M*(c+h)/2;n.add("sidewalk",I(h-c,vi,h-c,{x:P,y:vi/2,z:N})),n.add("curb",I(h-c,vi+.004,.28,{x:P,y:(vi+.004)/2,z:M*(c+.14)})),n.add("curb",I(.28,vi+.004,h-c,{x:S*(c+.14),y:(vi+.004)/2,z:N}))}const u=(S,M,P,N,U)=>n.add(S,I(P-M,.012,U-N,{x:(M+P)/2,y:vi+.006,z:(N+U)/2}));u("yardAsphalt",15,18.5,-24,-7),u("yardAsphalt",7,28,-27,-20),u("yardAsphalt",24,26,-32,-27),u("dirt",-16,-7,-32,-19),u("yardAsphalt",-36,-16,-25,-17.2),u("dirt",7,18,7,18),u("yardAsphalt",7,36,18,23),u("cobble",-20,-17,7,19),u("cobble",-32,-7,19,26),u("cobble",-30,-17,15,19);const d=new tx(n,i,t);d.buildAll();const f={diner:new Ne({map:dr("diner"),color:new dt(1.25,1.15,1.05)}),pharmacy:new Ne({map:dr("pharmacy"),color:new dt(.32,.38,.36)}),garage:new Ne({map:dr("garage"),color:new dt(1.1,1,.9)}),curtain:new ut({color:"#2a2420",roughness:.95,map:t.cache.grime.map}),shopGlass:new ut({color:"#0b0e10",metalness:.2,roughness:.06,transparent:!0,opacity:.22,envMapIntensity:2,depthWrite:!1}),shutter:fr(new ut({map:px(),color:"#8a8b86",metalness:.6,roughness:.7}),{key:"shut",strength:.8})};for(const S of d.signs){const M=S.kind==="diner",P=Fh(S.text,{fg:M?"#e86a4a":"#9a8f78",bg:M?"#140c0a":"#15130f",glow:M}),N=M?new ut({map:P,emissiveMap:P,emissive:new dt(1,.35,.25),emissiveIntensity:1.6,roughness:.4}):new ut({map:P,roughness:.7}),U=new re(new oe(S.w,S.h),N);if(U.position.set(S.a,S.y,.04),U.applyMatrix4(S.f.m),e.add(U),M&&o.neon.push({mat:N,base:1.6}),S.blade){const W=mx(S.text),B=new ut({map:W,roughness:.6,metalness:.2}),V=new re(new xn(.12,4.2,.9),[t.metalDark,t.metalDark,t.metalDark,t.metalDark,B,B]);V.rotation.y=Math.PI/2,V.position.set(.9,7,.7),V.applyMatrix4(S.f.m),V.castShadow=!0,e.add(V)}}const g=[["THEY HEAR YOU","#a8a296"],["DEAD INSIDE","#7a1810"],["NO EXIT","#9c968a"],["EVAC 6TH ST →","#a39d90"],["GOD LEFT","#8a1a12"],["DONT OPEN","#a8a296"],["QUARANTINE","#8f8a7e"]],_=new Xe(77);let m=0;for(const S of d.decalHooks)if(S.kind==="graffiti"){const[M,P]=g[m++%g.length],N=new ut({map:Oh(M,{color:P,seed:m}),transparent:!0,depthWrite:!1,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2}),U=new re(new oe(2.4,.75),N);U.position.set(S.a,S.y,.012),U.rotation.z=_.float(-.04,.04),U.applyMatrix4(S.f.m),U.renderOrder=2,r.add(U)}else if(S.kind==="ghost"){const M=["FURNITURE · STORAGE","MODERN BAKERY","ROOMS BY THE WEEK","COLD BEER"][S.seed%4],P=Fh(M,{fg:"#8c8270",bg:"#000000",w:1024,h:192,font:"bold 120px Georgia, serif"}),N=new ut({map:P,transparent:!0,opacity:.32,depthWrite:!1,roughness:.9,blending:Rs}),U=new re(new oe(S.w,S.w*.19),N);U.position.set(S.a,S.y,.012),U.applyMatrix4(S.f.m),r.add(U)}const p=Ns.find(S=>S.id==="B7"),y=Oh("HELP  7 ALIVE",{color:"#b9b4a8",w:1024,h:256,seed:3}),v=new re(new oe(6.6,1.65),new ut({map:y,transparent:!0,depthWrite:!1,roughness:.9}));v.rotation.set(-Math.PI/2,0,Math.PI/2),v.position.set((p.x0+p.x1)/2+1.2,Fs(p)+.03,(p.z0+p.z1)/2+2),r.add(v);for(const S of d.interiorDecals){const M=new re(new oe(S.size,S.size),t.bloodPool[2]);M.position.set(S.x,.17,S.z),M.rotation.x=-Math.PI/2,M.applyMatrix4(S.f.m),r.add(M)}const x=ux(n,t,r),E={yardAsphalt:fr(new ut({map:t.cache.concrete.map,normalMap:t.cache.concrete.normalMap,roughnessMap:t.cache.roof.roughnessMap,color:"#5b5a58",roughness:.9}),{key:"ya",wetBase:0,streaks:0,strength:.8}),dirt:new ut({map:t.cache.plasterBeige.map,normalMap:t.cache.concrete.normalMap,color:"#4a4236",roughness:.97}),cobble:fr(new ut({map:t.cache.brickDark.map,normalMap:t.cache.brickDark.normalMap,roughnessMap:t.cache.brickDark.roughnessMap,color:"#8c8a88",roughness:.9}),{key:"cb",wetBase:0,streaks:0,strength:.7})},b=n.build({...t,...x.materials,...E},{worldUV:dx,noShadow:["sidewalk","curb","yardAsphalt","dirt","cobble","paper","tape","glass"]});e.add(b);const T=i.build(ex(t,f));e.add(T),e.add(r),e.add(gx()),o.windowLights=d.litWindows,o.litShops=d.litShops;const L=d.lamps;return Object.assign(o,x.fx),o.lamps=[...x.fx.lamps,...L],s.add(e),{group:e,fx:o,factory:d}}function px(){const s=document.createElement("canvas");s.width=64,s.height=256;const t=s.getContext("2d");for(let n=0;n<256;n+=8){const i=t.createLinearGradient(0,n,0,n+8);i.addColorStop(0,"#8a8a86"),i.addColorStop(.7,"#5a5a56"),i.addColorStop(1,"#2a2a28"),t.fillStyle=i,t.fillRect(0,n,64,8)}for(let n=0;n<80;n++)t.fillStyle=`rgba(${90+Math.random()*40},${40+Math.random()*20},20,${Math.random()*.5})`,t.fillRect(Math.random()*64,Math.random()*256,Math.random()*10,Math.random()*20);const e=new Zi(s);return e.colorSpace=He,e}function mx(s){const t=document.createElement("canvas");t.width=128,t.height=600;const e=t.getContext("2d");e.fillStyle="#16120e",e.fillRect(0,0,128,600),e.strokeStyle="#4a3e30",e.lineWidth=6,e.strokeRect(6,6,116,588),e.fillStyle="#9a8a6a",e.font="bold 54px Georgia, serif",e.textAlign="center";const n=s.replace(/\s+/g,"").split("");n.forEach((r,o)=>e.fillText(r,64,70+o*(500/n.length)));const i=new Zi(t);return i.colorSpace=He,i}function gx(){const s=new en;s.name="backdrop";const t=document.createElement("canvas");t.width=256,t.height=512;const e=t.getContext("2d");e.fillStyle="#000",e.fillRect(0,0,256,512);const n=new Xe(901);for(let m=8;m<512;m+=24)for(let p=8;p<256;p+=20)if(n.chance(.05)){const y=n.float(.5,1);e.fillStyle=n.chance(.15)?`rgba(120,150,170,${y})`:`rgba(255,${170+n.int(0,40)},${90+n.int(0,40)},${y})`,e.fillRect(p,m,10,14)}const i=new Zi(t);i.colorSpace=He,i.wrapS=i.wrapT=Ti;const r=new ut({color:"#101215",roughness:.9,emissive:new dt(.55,.45,.35),emissiveMap:i}),o=new xn(1,1,1);o.translate(0,.5,0);const a=70,l=new Vu(o,r,a),h=new jt;let c=0;for(;c<a;){const m=c%4,p=n.float(-80,80);if(Math.abs(p)<8)continue;const y=n.float(47,85),v=n.float(8,18),x=n.float(8,16),E=n.float(8,14)+(y-45)*n.float(.2,.55);let b,T;m===0?[b,T]=[p,-y-6]:m===1?[b,T]=[p,y+6]:m===2?[b,T]=[-y-8,p]:[b,T]=[y+8,p],h.compose(new R(b,0,T),new sn,new R(v,E,x)),l.setMatrixAt(c++,h)}l.instanceMatrix.needsUpdate=!0,s.add(l);const u=document.createElement("canvas");u.width=u.height=128;const d=u.getContext("2d"),f=d.createRadialGradient(64,64,0,64,64,64);f.addColorStop(0,"rgba(255,120,50,0.55)"),f.addColorStop(.4,"rgba(160,60,30,0.22)"),f.addColorStop(1,"rgba(0,0,0,0)"),d.fillStyle=f,d.fillRect(0,0,128,128);const g=new Zi(u);g.colorSpace=He;const _=new Hf(new Fu({map:g,blending:Rs,depthWrite:!1,fog:!1,transparent:!0,opacity:.6}));return _.position.set(90,8,-130),_.scale.set(110,45,1),_.name="fireGlow",s.add(_),s}const xe={skin:0,cloth:1,blood:2,leather:3,eye:4,hair:5,bone:6,denim:7,cavity:8,knit:9},_x=`
  varying vec2 vSurf;
  varying vec3 vObj;
  float zh(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float zn(vec3 x) {
    vec3 i = floor(x); vec3 f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(zh(i), zh(i + vec3(1,0,0)), f.x), mix(zh(i + vec3(0,1,0)), zh(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(zh(i + vec3(0,0,1)), zh(i + vec3(1,0,1)), f.x), mix(zh(i + vec3(0,1,1)), zh(i + vec3(1,1,1)), f.x), f.y), f.z);
  }
  vec3 zPerturb(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection) {
    vec3 vSigmaX = normalize(dFdx(surf_pos.xyz));
    vec3 vSigmaY = normalize(dFdy(surf_pos.xyz));
    vec3 vN = surf_norm;
    vec3 R1 = cross(vSigmaY, vN);
    vec3 R2 = cross(vN, vSigmaX);
    float fDet = dot(vSigmaX, R1) * faceDirection;
    vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
    return normalize(abs(fDet) * surf_norm - vGrad);
  }
  float zHeight(float kind, vec3 p, out float rmul) {
    rmul = 1.0;
    if (kind < 0.5) { // skin: pores, wrinkles, lesions
      float h = zn(p * 260.0) * 0.25 + zn(p * 60.0) * 0.6 + zn(p * 18.0) * 0.4;
      rmul = 0.85 + zn(p * 30.0) * 0.3;
      return h * 0.6;
    } else if (kind < 1.5 || (kind > 6.5 && kind < 7.5) || kind > 8.5) { // fabric weave
      float w = kind > 8.5 ? 140.0 : 420.0;
      float weave = sin(p.x * w + p.y * w * 0.9) * sin(p.y * w - p.z * w * 0.8);
      float folds = zn(p * vec3(14.0, 40.0, 14.0));
      return weave * 0.12 + folds * 1.2 + zn(p * 90.0) * 0.25;
    } else if (kind < 2.5) { // clotted blood
      return zn(p * 120.0) * 0.5;
    } else if (kind < 3.5) { // leather / rubber
      rmul = 0.8 + zn(p * 50.0) * 0.4;
      return zn(p * 200.0) * 0.15 + zn(p * 30.0) * 0.4;
    } else if (kind < 5.5 && kind > 4.5) { // hair strands
      return sin(p.x * 900.0 + zn(p * 40.0) * 8.0) * 0.12 + zn(p * 80.0) * 0.5;
    } else if (kind < 6.5 && kind > 5.5) {
      return zn(p * 150.0) * 0.3;
    }
    return 0.0;
  }
`;function xx(){const s=new ut({vertexColors:!0,roughness:.8,metalness:0,color:new dt(.52,.52,.52)});return s.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aSurf;
varying vec2 vSurf;
varying vec3 vObj;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSurf = aSurf;
vObj = position;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
${_x}`).replace("#include <color_fragment>",`#include <color_fragment>
        float zKind = floor(vSurf.y + 0.5);
        float zRm;
        float zH = zHeight(zKind, vObj, zRm);
        float zM = zn(vObj * 9.0);
        float zM2 = zn(vObj * 23.0 + 4.0);
        if (zKind < 0.5) {
          // livor mortis, bruising and grey-green decay blotches
          diffuseColor.rgb *= 0.72 + 0.38 * zM2;
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.7, 0.85, 0.62), smoothstep(0.55, 0.85, zM) * 0.55);
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.75, 0.55, 0.7), smoothstep(0.7, 0.9, zM2) * 0.5);
          // capillary veins
          float vein = 1.0 - smoothstep(0.0, 0.025, abs(zn(vObj * 38.0) - 0.5));
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.72, 0.7, 0.8), vein * smoothstep(0.45, 0.7, zM) * 0.6);
        } else if (zKind < 1.5 || zKind > 6.5) {
          // dirt and dried stains on fabric
          diffuseColor.rgb *= 0.8 + 0.25 * zM2;
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.12, 0.03, 0.02), smoothstep(0.78, 0.92, zM) * 0.7);
          diffuseColor.rgb *= 0.9 + zH * 0.12;
        } else if (zKind > 1.5 && zKind < 2.5) {
          diffuseColor.rgb *= 0.75 + 0.4 * zM2;
        }
        `).replace("#include <roughnessmap_fragment>","float roughnessFactor = clamp(vSurf.x * zRm, 0.04, 1.0);").replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        {
          float amp = zKind > 1.5 && zKind < 2.5 ? 0.6 : (zKind > 3.5 && zKind < 4.5 ? 0.0 : 1.0);
          float zFade = 1.0 - smoothstep(3.0, 16.0, length(vViewPosition));
          vec2 dH = vec2(dFdx(zH), dFdy(zH)) * amp * 0.16 * zFade;
          normal = zPerturb(-vViewPosition, normal, dH, faceDirection);
        }`)},s.customProgramCacheKey=()=>"zombie-skin-v1",s}const Rt=s=>{const t=new dt(s);return[t.r,t.g,t.b]},on=(s,t)=>[s[0]*t,s[1]*t,s[2]*t],ke=(s,t,e)=>[s[0]+(t[0]-s[0])*e,s[1]+(t[1]-s[1])*e,s[2]+(t[2]-s[2])*e],vx=["#6f7466","#776d57","#636a70","#5c4c40","#463a31","#6a6a55","#7a7468","#6a5a4c","#5d6458"].map(Rt),yx=Rt("#4a0806"),Mx=Rt("#2a0f0b"),Sx=Rt("#5a1410"),ft={charcoal:Rt("#2b2b2c"),denim:Rt("#3a4452"),denimDark:Rt("#262d38"),olive:Rt("#424632"),khaki:Rt("#5f5843"),maroon:Rt("#4a2224"),grey:Rt("#56585a"),beige:Rt("#7a705e"),dirtyWhite:Rt("#8c887c"),navy:Rt("#1f2633"),brown:Rt("#3d2e24"),bottle:Rt("#26352d"),mustard:Rt("#6a5a2c"),teal:Rt("#2d4a48"),black:Rt("#18181a"),hivis:Rt("#5d6130"),rust:Rt("#5c3420"),plum:Rt("#3b2a36")},bx={height:1.75,legLen:1,armLen:1,shoulderW:1,hipW:1,torsoW:1,torsoD:1,torsoLen:1,waist:1,belly:0,bust:0,limbR:1,legR:1,armR:1,neckW:1.1,neckLen:1,headW:1,headScale:1,gaunt:.15,bony:.6,curl:.45,nose:1,missingTeeth:.2,handScale:1,footScale:1,deltoid:1,armSpread:.16,stump:null,stumpAt:1,seed:1};class Ms{constructor(t){Object.assign(this,t),this.skin=t.skin,this.seed=t.seed||1}shoeFor(t){return t>0?this.shoes.L:this.shoes.R}n(t,e,n=0){return Oe(t.x*e+this.seed*3.7+n,t.y*e+n*.3,t.z*e-this.seed)}skinAt(t,e=0){const n=this.n(t,6)*.5+.5;let i=ke(this.skin,on(this.skin,.6),Ot(.5,.85,n)*(.5+this.decay*.5));i=ke(i,Rt("#3f3a44"),Ot(.7,.95,this.n(t,9,7)*.5+.5)*(.5+e)),i=ke(i,Rt("#4a5238"),Ot(.6,.9,this.n(t,4,17)*.5+.5)*this.decay*.5),i=ke(i,Rt("#2e2620"),Ot(.65,.9,this.n(t,14,23)*.5+.5)*.45),i=on(i,.8+.2*Ot(.2,1,t.y)),i=[i[0]*.95,i[1]*1.04,i[2]*.84];const r=this.n(t,11,41);if(r>.5-this.decay*.12)return{col:ke(Rt("#3a1612"),Rt("#4a3a22"),this.n(t,30,3)*.5+.5),rough:.5,kind:xe.blood,inflate:-.002};r>.4-this.decay*.12&&(i=ke(i,Rt("#3b2a24"),.6));const o=this.n(t,20,31)>.45;return{col:i,rough:o?.35:.62,kind:xe.skin,inflate:0}}bloodAt(t,e=!0){return{col:e?on(yx,.8+this.n(t,30)*.4):Mx,rough:e?.22:.65,kind:xe.blood,inflate:.001}}wound(t,e=-.003){const n=this.n(t,40)*.5+.5;return{col:ke(Sx,Rt("#1a0505"),n),rough:.18,kind:xe.blood,inflate:e}}cloth(t,e,n){const i=t.color,r=this.n(e,5,2)*.5+.5;let o=ke(i,on(i,.6),Ot(.6,.9,r));return o=ke(o,Rt("#2a2018"),Ot(.35,.75,this.n(e,7,51))*.45),o=on(o,.75+.25*Ot(.3,1.2,e.y)),t.stripe&&t.stripeFn&&t.stripeFn(e)&&(o=t.stripe),{col:o,rough:t.rough||.88,kind:t.kind??xe.cloth,inflate:n}}surface(t,e){const n=e.p,i=this.blood;switch(t){case"torso":{const r=.84+e.s*.76,o=e.front,a=e.lat,l=this.top,h=this.bottom,c=this.n({x:n.x*1.6,y:n.y*.12,z:n.z*1.6},22,5),u=i.chest*Ot(.1,.5,o)*Ot(.95,1.42,r+c*.35)*(1-Ot(1.47,1.5,r))*(c>-.05?1:.3),d=l?this.neckline(l,r,o,a):0,f=l?l.hem+this.n(n,14)*.025*(1+l.torn):9;if(l&&r>=f&&r<=d){const g=this.n(n,9,11)*.5+.5;if(g>1-l.torn*.38)return g>1-l.torn*.38+.03?this.gashOrSkin(n,r):{col:on(l.color,.5),rough:.95,kind:xe.cloth,inflate:l.inflate*.5};if(u>.4)return this.bloodAt(n,u>.75&&this.n(n,12,8)>0);if(l.open&&o>.82&&Math.abs(a)<.2+this.n(n,10)*.05)return this.cloth({color:l.inner||ft.dirtyWhite,kind:xe.cloth},n,l.inflate*.4);if(this.vest&&r>1&&r<1.43&&!(o>.85&&Math.abs(a)<.15)){const m=Math.abs(r-1.12)<.018||Math.abs(r-1.3)<.018&&Math.abs(o)>.2;return{col:m?Rt("#8a8a80"):on(this.vest,.85+this.n(n,6)*.2),rough:m?.4:.8,kind:xe.cloth,inflate:l.inflate+.006}}const _=l.inflate*(1+.25*this.n(n,6,5))+(r<f+.03?.004:0);return this.cloth(l,n,_)}return h&&r<h.waist+this.n(n,10)*.01?r>h.waist-.03&&h.belt?{col:ft.black,rough:.45,kind:xe.leather,inflate:h.inflate+.004}:i.legs>.4&&o>0&&this.n(n,7,4)>.1?this.bloodAt(n,!1):this.cloth(h,n,h.inflate):u>.4?this.bloodAt(n,u>.7):this.bites&&this.bites.includes("neck")&&r>1.47&&r<1.56&&a>.2&&o>-.3?this.wound(n,-.004):this.skinAt(n)}case"arm":{const r=this.top,o=r?r.sleeve+this.n(n,16)*.035*(1+r.torn*2):-1;if(e.s<o){if(this.n(n,11,21)*.5+.5>1-r.torn*.3)return this.gashOrSkin(n,0);const l=e.s>o-.04?.004:0;return this.cloth(r,n,r.inflate*.75+l)}return this.bites&&this.bites.includes(e.side>0?"armL":"armR")&&e.s>.6&&e.s<.75&&e.front>-.2?this.wound(n,-.004):i.hands>.3&&e.s>.8&&this.n(n,12,6)>.1-i.hands*.6?this.bloodAt(n,!1):this.skinAt(n)}case"hand":{if(i.hands>0&&(!e.finger||e.s>.25)&&this.n(n,25,9)>.35-i.hands)return this.bloodAt(n,i.hands>.6);const r=this.skinAt(n,.3);return e.finger&&e.s>.85&&(r.col=ke(r.col,Rt("#2c2620"),.6)),r}case"leg":{const r=this.bottom;if(e.stump&&e.s>e.sEnd-.05)return this.wound(n,0);const o=r?r.length+this.n(n,14)*.03*(1+r.torn*2):-1;if(e.s<o){const a=this.n(n,8,31)*.5+.5,l=Math.exp(-Math.pow((e.s-.5)/.08,2));if(a>1-r.torn*(.25+l*.35))return this.gashOrSkin(n,0);if(i.legs>0&&this.n(n,6,13)>.3-i.legs*.5)return this.bloodAt(n,!1);const h=r.inflate*(e.s>o-.05?1.3:1)*(r.type==="cargo"&&e.s>.25&&e.s<.4&&Math.cos(e.theta)*e.side>.6?2.2:1);return this.cloth(r,n,h)}return i.legs>.3&&this.n(n,9,15)>.2?this.bloodAt(n,!1):this.skinAt(n,.2)}case"foot":{const r=e.shoe;if(r==="none"){const l=this.skinAt(n,.4);return l.col=ke(l.col,Rt("#2a2420"),.45),l}const o=Math.sin(e.theta)<-.55,a=this.shoes.color||ft.black;return r==="sneaker"?o?{col:Rt("#6e6a60"),rough:.8,kind:xe.leather,inflate:.002}:{col:on(a,.85+this.n(n,20)*.3),rough:.75,kind:xe.cloth,inflate:0}:r==="boot"?{col:o?ft.black:on(a,.8+this.n(n,15)*.3),rough:.55,kind:xe.leather,inflate:0}:{col:o?ft.black:Rt("#141212"),rough:.35,kind:xe.leather,inflate:0}}case"head":{const{x:r,y:o,z:a}=e,l=Math.abs(r);if(a>.045&&l<.028-Math.abs(o-e.mouthY)*.4&&Math.abs(o-e.mouthY)<.0065)return{col:[.05,.01,.008],rough:.3,kind:xe.cavity,inflate:0};const h=this.headwear,c=this.skinAt(n,.15);if(h&&(h.type==="short"||h.type==="long"||h.type==="patchy")){const f=Ot(-.06,.06,e.hair+this.n(n,60)*.03)*(h.type==="patchy"?Ot(-.2,.1,this.n(n,25,3))*.85:1);if(f>.5)return{col:ke(c.col,on(h.color,.75+this.n(n,30)*.3),f),rough:.75,kind:xe.hair,inflate:.0015*f};c.col=ke(c.col,h.color,f*.8)}const u=Math.exp(-((l-.032)**2+(o-.012)**2)/45e-5);c.col=ke(c.col,Rt("#2e2a2c"),fe(u*1.15*(a>.03?1:0),0,.85)),a>.05&&l<.026&&Math.abs(o-e.mouthY)<.011&&(c.col=ke(c.col,Rt("#2e2224"),.55));const d=this.blood.mouth*Math.exp(-((r*.6)**2+(o-e.mouthY+.02)**2)/.0012)*(a>.02?1:0);return d>.35+this.n(n,40)*.2?this.bloodAt(n,d>.7):this.bites&&this.bites.includes("cheek")&&r>.035&&o<-.01&&o>-.06&&a>.02?this.wound(n,-.003):this.skull&&r<-.04&&o>.03&&a<.04&&a>-.06?{col:Rt("#8e8572"),rough:.5,kind:xe.bone,inflate:-.002}:this.skull&&r<-.035&&o>.02&&a<.05&&a>-.07?this.wound(n,-.001):c}case"eye":{const r=Ot(.75,.95,e.n.z),o=ke(Rt("#86836f"),Rt("#6c7576"),r*.7);return{col:this.eyeRed?ke(o,Rt("#7a2a24"),(1-r)*.35):o,rough:.12,kind:xe.eye,inflate:0}}case"tooth":return{col:on(Rt("#8a7a58"),.6+e.hsh*.5),rough:.4,kind:xe.bone,inflate:0};case"ear":return this.skinAt(n,.3);case"headwear":{const r=this.headwear;return r.type==="hood"?this.cloth(this.top,n,0):r.type==="beanie"?{col:on(r.color,.85+this.n(n,20)*.2),rough:.95,kind:xe.knit,inflate:0}:{col:on(r.color,.8+this.n(n,30)*.3),rough:.7,kind:xe.hair,inflate:0}}case"rag":return{col:on(this.top?this.top.color:ft.grey,.7+this.n(n,10)*.2),rough:.95,kind:xe.cloth,inflate:0};default:return this.skinAt(n)}}neckline(t,e,n,i){return t.collar==="v"?1.47-(n>.5&&Math.abs(i)<.45?(1-Math.abs(i)/.45)*.1:0):t.collar==="scoop"?1.46-(n>.3?n*.05:0):t.collar==="high"?1.53:t.collar==="tank"?n>.2||n<-.6?1.38+Math.abs(i)*.08:1.45:1.47-(n>.4?.012:0)}gashOrSkin(t,e){return this.n(t,30,41)>.3?this.wound(t,-.002):this.skinAt(t,.4)}}function ka(s,t,e={}){const n=new Xe(t*7919+13),i={...bx,seed:t},r=n.pick(vx);let o;const a=e.female??(s==="shambler"||s==="restless"||s==="crawler"?n.chance(.4):!1),l={skin:r,seed:t,decay:n.float(.3,.8),bites:[],blood:{mouth:n.float(.3,1),chest:n.float(0,.5),hands:n.float(.2,.8),legs:0}};switch(n.chance(.5)&&l.bites.push(n.pick(["neck","armL","armR","cheek"])),a&&Object.assign(i,{height:n.float(1.6,1.71),shoulderW:.87,hipW:1.1,torsoW:.88,torsoD:.95,waist:.84,bust:n.float(.5,.9),limbR:.86,neckW:.85,headW:.95,headScale:.96,handScale:.9,footScale:.9,deltoid:.9}),s){case"shambler":{a||Object.assign(i,{height:n.float(1.7,1.84),belly:n.float(0,.012),limbR:n.float(.94,1.05)}),Object.assign(i,{gaunt:.2,bony:.6,curl:n.float(.35,.65),nose:n.float(.7,1),missingTeeth:.25});const h=n.pick(["tshirt","shirt","shirt","sweater"]),c=h==="tshirt"?{type:"tshirt",color:n.pick([ft.grey,ft.dirtyWhite,ft.maroon,ft.bottle,ft.charcoal]),sleeve:.28,hem:.98,collar:"crew",torn:n.float(.25,.5),inflate:.007}:h==="shirt"?{type:"shirt",color:n.pick([ft.dirtyWhite,Rt("#5d6670"),ft.beige,Rt("#6a5a5a")]),sleeve:n.pick([.97,.75]),hem:.95,collar:"v",torn:n.float(.25,.45),inflate:.008,open:n.chance(.4),inner:ft.dirtyWhite}:{type:"sweater",color:n.pick([ft.olive,ft.plum,ft.brown]),sleeve:.96,hem:.97,collar:"crew",torn:n.float(.3,.5),inflate:.012,kind:xe.knit,rough:.97},u=a&&n.chance(.5);o=new Ms({...l,top:c,bottom:u?{type:"skirt",color:n.pick([ft.charcoal,ft.navy,ft.khaki]),length:.3,waist:1.06,torn:.3,inflate:.014}:{type:"jeans",color:n.pick([ft.denim,ft.denimDark,ft.khaki,ft.charcoal]),length:.99,waist:1.04,torn:n.float(.15,.35),inflate:.007,kind:xe.denim,belt:n.chance(.5)},shoes:{L:"sneaker",R:"sneaker",color:n.pick([ft.grey,ft.dirtyWhite,ft.black])},headwear:a?{type:"long",color:n.pick([Rt("#2a2018"),Rt("#1a1612"),Rt("#4a3a28")])}:n.chance(.9)?{type:n.chance(.2)?"patchy":"short",color:n.pick([Rt("#2a2420"),Rt("#1c1a18"),Rt("#4a463e")])}:null}),n.chance(.35)&&(o.shoes[n.chance(.5)?"L":"R"]="none"),c.torn>.3&&(o.rags=[0,1].map(()=>({angle:n.float(0,Math.PI*2),y:0,len:n.float(.08,.18),width:n.float(.04,.07)}))),n.chance(.3)&&(o.shoes.L=o.shoes.R="dress");break}case"heavy":{Object.assign(i,{height:n.float(1.8,1.92),shoulderW:n.float(1.22,1.32),hipW:1.22,torsoW:n.float(1.36,1.48),torsoD:n.float(1.4,1.55),waist:1.2,belly:n.float(.03,.05),limbR:n.float(1.3,1.42),legR:1.08,armR:1.1,neckW:1.45,neckLen:.72,headW:1.08,headScale:1.05,legLen:.95,armLen:.98,deltoid:1.12,gaunt:0,bony:.15,curl:.3,armSpread:.24,missingTeeth:.15,handScale:1.12,footScale:1.1});const h=n.pick([ft.olive,ft.brown,ft.charcoal,ft.rust]);o=new Ms({...l,top:{type:"jacket",color:h,sleeve:.97,hem:.88,collar:"high",torn:n.float(.1,.25),inflate:.03,open:n.chance(.5),inner:n.pick([ft.dirtyWhite,ft.grey,ft.maroon]),rough:.8},bottom:{type:"cargo",color:n.pick([ft.khaki,ft.charcoal,ft.navy]),length:.99,waist:1.04,torn:.15,inflate:.014},shoes:{L:"boot",R:"boot",color:Rt("#3a2a1e")},headwear:n.chance(.55)?{type:"beanie",color:n.pick([ft.charcoal,ft.navy,ft.maroon])}:n.chance(.5)?{type:"short",color:Rt("#252220")}:null,vest:n.chance(.45)?ft.hivis:null}),o.blood.chest=n.float(.4,.9);break}case"gaunt":{Object.assign(i,{height:n.float(1.84,1.96),legLen:1.08,armLen:n.float(1.1,1.16),shoulderW:.92,hipW:.88,torsoW:.78,torsoD:.74,torsoLen:1.06,waist:.76,limbR:n.float(.62,.7),neckW:.74,neckLen:1.22,headW:.92,gaunt:n.float(.85,1),bony:1.35,curl:n.float(.7,.95),nose:n.float(.2,.6),missingTeeth:.45,handScale:1.12,footScale:1.02,deltoid:.85}),o=new Ms({...l,skin:ke(r,Rt("#7c827d"),.3),decay:n.float(.7,1),top:{type:"rags",color:n.pick([ft.dirtyWhite,ft.grey,ft.beige]),sleeve:n.chance(.5)?0:.25,hem:1.12,collar:"tank",torn:n.float(.65,.85),inflate:.004},bottom:{type:"trousers",color:n.pick([ft.charcoal,ft.brown,ft.khaki]),length:n.float(.55,.7),waist:1.05,torn:.55,inflate:.008},shoes:{L:"none",R:"none"},headwear:n.chance(.7)?{type:"patchy",color:Rt("#2a2622")}:null,rags:[0,1,2,3].map(h=>({angle:h/4*Math.PI*2+n.float(-.4,.4),y:.13,len:n.float(.12,.28),width:n.float(.03,.06)})),skull:n.chance(.4),eyeRed:!0}),o.blood.mouth=n.float(.6,1);break}case"restless":{a||Object.assign(i,{height:n.float(1.7,1.8),torsoW:.93,limbR:.92,shoulderW:.98}),Object.assign(i,{gaunt:.3,bony:.7,curl:n.float(.4,.6),missingTeeth:.15});const h=n.pick([ft.charcoal,ft.bottle,ft.maroon,ft.navy,ft.grey]);o=new Ms({...l,top:{type:"hoodie",color:h,sleeve:.97,hem:.94,collar:"high",torn:n.float(.15,.3),inflate:.017,rough:.95,kind:xe.knit},bottom:{type:"track",color:n.pick([ft.black,ft.navy,ft.charcoal]),length:.99,waist:1.04,torn:.2,inflate:.01,stripe:Rt("#5a5a56"),stripeFn:c=>Math.abs(Math.abs(c.x)-(.09+.085))<.008},shoes:{L:"sneaker",R:"sneaker",color:n.pick([ft.dirtyWhite,ft.grey])},headwear:{type:"hood"}}),o.blood.hands=n.float(.6,1),o.blood.mouth=n.float(.7,1);break}case"crawler":{Object.assign(i,{height:n.float(1.62,1.78),gaunt:.35,bony:.8,curl:.55,missingTeeth:.35}),n.chance(.6)&&Object.assign(i,{stump:n.chance(.5)?"L":"R",stumpAt:n.float(.55,.72)}),o=new Ms({...l,decay:n.float(.6,1),top:{type:"sweater",color:n.pick([ft.grey,ft.plum,ft.teal,ft.beige]),sleeve:.95,hem:.98,collar:"crew",torn:n.float(.45,.65),inflate:.01,kind:xe.knit,rough:.97},bottom:{type:"trousers",color:n.pick([ft.denimDark,ft.charcoal,ft.khaki]),length:.98,waist:1.04,torn:.5,inflate:.008,kind:xe.denim},shoes:{L:"sneaker",R:"none",color:ft.grey},headwear:a?{type:"long",color:Rt("#2a2018")}:n.chance(.5)?{type:"short",color:Rt("#22201c")}:null}),o.blood.legs=n.float(.5,.9),o.blood.chest=n.float(.3,.7),o.rags=[0,1,2].map(()=>({angle:n.float(0,Math.PI*2),y:.02,len:n.float(.1,.22),width:n.float(.04,.08)}));break}case"corpse":{const h=n.pick(["#8a7666","#6a5444","#9a8676","#4e3c2e"].map(Rt)),c=e.role||n.pick(["civilian","office","nurse"]),u={civilian:{type:"tshirt",color:n.pick([ft.grey,ft.maroon,ft.bottle]),sleeve:.28,hem:.98,collar:"crew",torn:.25,inflate:.007},office:{type:"shirt",color:Rt("#7a7e86"),sleeve:.97,hem:.96,collar:"v",torn:.2,inflate:.008,open:!1},nurse:{type:"scrubs",color:ft.teal,sleeve:.3,hem:.95,collar:"v",torn:.2,inflate:.01},police:{type:"uniform",color:ft.navy,sleeve:.97,hem:.95,collar:"crew",torn:.15,inflate:.012,rough:.7},soldier:{type:"uniform",color:ft.olive,sleeve:.97,hem:.92,collar:"high",torn:.15,inflate:.02,rough:.85}},d={civilian:{type:"jeans",color:ft.denim,length:.99,waist:1.04,torn:.2,inflate:.007,kind:xe.denim},office:{type:"slacks",color:ft.charcoal,length:.99,waist:1.05,torn:.1,inflate:.008,belt:!0},nurse:{type:"scrubs",color:ft.teal,length:.99,waist:1.05,torn:.15,inflate:.012},police:{type:"slacks",color:ft.navy,length:.99,waist:1.04,torn:.1,inflate:.01,belt:!0},soldier:{type:"cargo",color:ft.olive,length:.99,waist:1.04,torn:.1,inflate:.014,belt:!0}};o=new Ms({...l,skin:ke(h,Rt("#76766f"),.4),decay:.15,top:u[c],bottom:d[c],shoes:{L:c==="police"||c==="soldier"?"boot":"sneaker",R:c==="police"||c==="soldier"?"boot":"sneaker",color:ft.black},headwear:n.chance(.95)?{type:a?"long":"short",color:n.pick([Rt("#2a2018"),Rt("#3a2c1e"),Rt("#141210")])}:null,bites:["neck","armL"],blood:{mouth:.1,chest:n.float(.6,1),hands:.5,legs:.3}}),e.gutted&&(o.blood.chest=1),Object.assign(i,{gaunt:.1,bony:.4,curl:.3});break}default:throw new Error(`Unknown archetype ${s}`)}return{type:s,P:i,outfit:o,female:a}}const zl=["hips","spine","chest","neck","head","jaw","clavL","upperArmL","foreArmL","handL","clavR","upperArmR","foreArmR","handR","thighL","shinL","footL","thighR","shinR","footR"],Nt=Object.fromEntries(zl.map((s,t)=>[s,t])),Oa={spine:"hips",chest:"spine",neck:"chest",head:"neck",jaw:"head",clavL:"chest",upperArmL:"clavL",foreArmL:"upperArmL",handL:"foreArmL",clavR:"chest",upperArmR:"clavR",foreArmR:"upperArmR",handR:"foreArmR",thighL:"hips",shinL:"thighL",footL:"shinL",thighR:"hips",shinR:"thighR",footR:"shinR"},qt=(s=0,t=0,e=0)=>new R(s,t,e);function wx(s){const t={},n=.43*s.legLen,i=.43*s.legLen,r=.08+n+i,o=.09*s.hipW;t.hips=qt(0,r+.05,0),t.spine=t.hips.clone().add(qt(0,.1,0)),t.chest=t.spine.clone().add(qt(0,.2*s.torsoLen,0)),t.neck=t.chest.clone().add(qt(0,.17*s.torsoLen,-.01)),t.head=t.neck.clone().add(qt(0,.088*s.neckLen,.014)),t.jaw=t.head.clone().add(qt(0,.062*s.headScale,.004));const a=s.armSpread;for(const[l,h]of[[1,"L"],[-1,"R"]]){t["clav"+h]=t.chest.clone().add(qt(.025*l,.12*s.torsoLen,0)),t["upperArm"+h]=t["clav"+h].clone().add(qt(.165*s.shoulderW*l,-.005,-.012));const c=qt(Math.sin(a)*l,-Math.cos(a),0);t["foreArm"+h]=t["upperArm"+h].clone().addScaledVector(c,.29*s.armLen),t["hand"+h]=t["foreArm"+h].clone().addScaledVector(c,.26*s.armLen),t["thigh"+h]=qt(o*l,r,0),t["shin"+h]=qt(o*l*.97,r-n,.005),t["foot"+h]=qt(o*l*.95,.08,0)}return{J:t,hipJY:r,ankleY:.08,thighLen:n,shinLen:i,yShift:r-.94,armDirAngle:a}}class Ex{constructor(){this.pos=[],this.col=[],this.surf=[],this.si=[],this.sw=[],this.idx=[]}get count(){return this.pos.length/3}vertex(t,e,n,i,r){this.pos.push(t.x,t.y,t.z),this.col.push(e[0],e[1],e[2]),this.surf.push(n,i);const o=r.filter(l=>l[1]>1e-4).sort((l,h)=>h[1]-l[1]).slice(0,4);let a=0;for(const l of o)a+=l[1];for(let l=0;l<4;l++)this.si.push(o[l]?o[l][0]:0),this.sw.push(o[l]?o[l][1]/a:0);return this.count-1}tri(t,e,n){this.idx.push(t,e,n)}}function Tx(s,t){const e=Math.cos(s),n=Math.sin(s);return[Math.sign(e)*Math.pow(Math.abs(e),2/t),Math.sign(n)*Math.pow(Math.abs(n),2/t)]}function cn(s,t,e){if(t<=s[0].t)return s[0][e];const n=s.length;if(t>=s[n-1].t)return s[n-1][e];let i=0;for(;i<n-2&&t>s[i+1].t;)i++;const r=s[Math.max(0,i-1)],o=s[i],a=s[i+1],l=s[Math.min(n-1,i+2)],h=(t-o.t)/(a.t-o.t),c=(a[e]-r[e])/(a.t-r.t||1)*(a.t-o.t),u=(l[e]-o[e])/(l.t-o.t||1)*(a.t-o.t),d=h*h,f=d*h;return(2*f-3*d+1)*o[e]+(f-2*d+h)*c+(-2*f+3*d)*a[e]+(f-d)*u}const oo=new R,Qn=new R;function Qi(s,t,e,{surface:n,shape:i,part:r,side:o=0}){const a=s.count,l=t[1].c.clone().sub(t[0].c),h=t[0].N.clone().cross(t[0].B).dot(l);for(let c=0;c<t.length;c++){const u=t[c];for(let d=0;d<e;d++){const f=d/e*Math.PI*2,[g,_]=Tx(f,u.e||2),m=i?i(u,f):1;oo.copy(u.N).multiplyScalar(g*u.rx*m).addScaledVector(u.B,_*u.ry*m),u.ox&&oo.addScaledVector(u.N,u.ox),u.oy&&oo.addScaledVector(u.B,u.oy),Qn.copy(u.c).add(oo);const p={part:r,side:o,s:u.s,theta:f,front:Math.sin(f),lat:Math.cos(f),p:Qn,x:Qn.x,y:Qn.y,z:Qn.z,ring:c,nr:t.length},y=n(p);if(y.inflate){const x=Qn.clone().sub(u.c),E=x.length()||1;Qn.copy(u.c).addScaledVector(x,(E+y.inflate)/E)}const v=typeof u.w=="function"?u.w(Qn,f):u.w;s.vertex(Qn,y.col,y.rough,y.kind,v)}}for(let c=0;c<t.length-1;c++)for(let u=0;u<e;u++){const d=a+c*e+u,f=a+c*e+(u+1)%e,g=a+(c+1)*e+u,_=a+(c+1)*e+(u+1)%e;h<0?(s.tri(d,g,f),s.tri(f,g,_)):(s.tri(d,f,g),s.tri(f,_,g))}}function Vs(s,t,e,n=4){const i=[],r=s[0],o=s[s.length-1],a=s[1].c.clone().sub(r.c).normalize(),l=o.c.clone().sub(s[s.length-2].c).normalize();if(t>0)for(let h=n;h>=1;h--){const c=h/n,u=Math.max(.03,Math.sqrt(1-c*c*.995));i.push({...r,c:r.c.clone().addScaledVector(a,-t*c),rx:r.rx*u,ry:r.ry*u,s:r.s-.001*h})}if(i.push(...s),e>0)for(let h=1;h<=n;h++){const c=h/n,u=Math.max(.03,Math.sqrt(1-c*c*.995));i.push({...o,c:o.c.clone().addScaledVector(l,e*c),rx:o.rx*u,ry:o.ry*u,s:o.s+.001*h})}return i}function Nl(s,t){const e=new R().crossVectors(t,s).normalize(),n=new R().crossVectors(s,e).normalize();return{N:e,B:n}}const bi=(s,t,e)=>[[s,1-e],[t,e]];function Ax(s,t,e,n){const i=e.yShift,r=t.torsoLen,o=t.torsoW,a=t.torsoD,l=t.shoulderW,h=t.hipW,c=(y,v,x,E,b)=>({t:y,rx:v,rz:x,oz:E,e:b}),u=y=>y<=1.04?y:1.04+(y-1.04)*r,d=[c(.84,.12*h,.085*a,-.004,2.2),c(.9,.152*h,.1*a,-.012,2.4),c(.97,.162*h,.108*a,-.016,2.5),c(1.04,.15*Yi(h,o,.5),.1*a,-.004,2.4),c(1.11,.138*o*t.waist,(.096+t.belly*.6)*a,.004+t.belly*.5,2.3),c(1.18,.142*o,(.1+t.belly*.45)*a,.006+t.belly*.35,2.4),c(1.25,.155*o,(.106+t.belly*.1)*a,.012,2.6),c(1.32,.166*Yi(o,l,.5),(.11+t.bust*.02)*a,.014+t.bust*.012,2.8),c(1.38,.172*Yi(o,l,.7),.105*a,.008,2.9),c(1.425,.175*l,.094*a,-.004,2.8),c(1.46,.148*l,.082*a,-.01,2.5),c(1.49,.095*Yi(l,t.neckW,.5),.072*t.neckW,-.01,2.2),c(1.515,.07*t.neckW,.064*t.neckW,-.006,2.05),c(1.545,.06*t.neckW,.058*t.neckW,-.003,2),c(1.575,.055*t.neckW,.055*t.neckW,.004,2),c(1.6,.045,.045,.01,2)],f=.84,g=1.6,_=54,m=[];for(let y=0;y<=_;y++){const v=f+(g-f)*y/_,x=u(v)+i,E=(v-f)/(g-f),T={c:qt(0,x,cn(d,v,"oz")),N:qt(1,0,0),B:qt(0,0,1),rx:cn(d,v,"rx"),ry:cn(d,v,"rz"),e:cn(d,v,"e"),s:E,yr:v};T.w=L=>{const S=L.y-i;let M;if(S<1.03?M=[[Nt.hips,1]]:S<1.11?M=bi(Nt.hips,Nt.spine,Ot(1.03,1.11,S)):S<1.2?M=[[Nt.spine,1]]:S<1.28?M=bi(Nt.spine,Nt.chest,Ot(1.2,1.28,S)):S<1.47?M=[[Nt.chest,1]]:S<1.52?M=bi(Nt.chest,Nt.neck,Ot(1.47,1.52,S)):S<1.575?M=[[Nt.neck,1]]:M=bi(Nt.neck,Nt.head,Ot(1.575,1.6,S)),S>1.33&&S<1.5&&Math.abs(L.x)>.09){const P=Ot(.09,.17,Math.abs(L.x))*(1-Ot(1.46,1.5,S))*Ot(1.33,1.4,S)*.6,N=L.x>0?Nt.clavL:Nt.clavR;M=M.map(([U,W])=>[U,W*(1-P)]),M.push([N,P])}if(S<.92){const P=(1-Ot(.84,.92,S))*.35,N=L.x>0?Nt.thighL:Nt.thighR;M=M.map(([U,W])=>[U,W*(1-P)]),M.push([N,P])}return M},m.push(T)}const p=(y,v)=>{const x=y.yr,E=Math.sin(v),b=Math.cos(v);let T=1;if(E<0&&(T+=.035*Ot(1.24,1.32,x)*(1-Ot(1.38,1.44,x))*Math.pow(Math.abs(b),.5)*-E,T-=.04*Math.exp(-Math.pow(b/.12,2))*Ot(1,1.1,x)*(1-Ot(1.42,1.47,x))),E>0){const L=Math.exp(-Math.pow((Math.abs(b)-.45)/.3,2))*Ot(1.24,1.3,x)*(1-Ot(1.36,1.42,x));T+=L*(.03+t.bust*.14)*E,T+=.025*Math.exp(-Math.pow((x-1.435)/.012,2))*E*Ot(.1,.5,Math.abs(b))*t.bony}if(t.gaunt>0){const L=Ot(1.1,1.16,x)*(1-Ot(1.36,1.41,x)),S=(x+.05*E)/.024,M=Math.pow(.5+.5*Math.cos(S*Math.PI*2),3);T+=t.gaunt*L*(M*.05-.035)*(.4+.6*Math.max(E,0)+.3*Math.abs(b));const P=Math.exp(-Math.pow((x-1.06)/.05,2));E>0&&(T-=t.gaunt*P*.12*E),T+=t.gaunt*.06*Math.exp(-Math.pow((x-.99)/.025,2))*Math.exp(-Math.pow((Math.abs(b)-.7)/.2,2))}return T};Qi(s,Vs(m,.06,0,4),40,{surface:y=>n.surface("torso",y),shape:p,part:"torso"})}function Yi(s,t,e){return s+(t-s)*e}function Rx(s,t,e,n,i,r){const o=i>0?"L":"R",a=r["thigh"+o],l=r["foot"+o],h=a.y-l.y,c=t.limbR*t.legR,u=Yi(c,1,.55),d=[{t:-.08,rx:.075*c,rz:.088*c,oz:-.012},{t:0,rx:.088*c,rz:.094*c,oz:-.016},{t:.12,rx:.084*c,rz:.088*c,oz:-.002},{t:.3,rx:.073*c,rz:.076*c,oz:.004},{t:.45,rx:.056*u,rz:.058*u,oz:.004},{t:.5,rx:.051*u,rz:.056*u,oz:.009},{t:.56,rx:.049*u,rz:.052*u,oz:.002},{t:.66,rx:.053*c,rz:.06*c,oz:-.014},{t:.8,rx:.041*c,rz:.045*c,oz:-.006},{t:.93,rx:.032*u,rz:.035*u,oz:-.002},{t:1,rx:.03*u,rz:.032*u,oz:0}],f=t.stump&&t.stump===o?t.stumpAt:1,g=40,_=[],m=-.08,p=f,y=e.thighLen/h;for(let x=0;x<=g;x++){const E=m+(p-m)*x/g,b=a.y-E*h,T=fe((a.y-b)/h,0,1),L=a.x+(l.x-a.x)*T,M={c:qt(L,a.y-E*h,cn(d,E,"oz")+(E>y?.005:0)),N:qt(1,0,0),B:qt(0,0,1),rx:cn(d,E,"rx"),ry:cn(d,E,"rz"),e:2,s:E};M.w=P=>{const N=(a.y-P.y)/h;let U;return N<.06?U=[[Nt.hips,.4*(1-Ot(-.08,.06,N))],[Nt["thigh"+o],1-.4*(1-Ot(-.08,.06,N))]]:N<y-.06?U=[[Nt["thigh"+o],1]]:N<y+.06?U=bi(Nt["thigh"+o],Nt["shin"+o],Ot(y-.06,y+.06,N)):N<.95?U=[[Nt["shin"+o],1]]:U=bi(Nt["shin"+o],Nt["foot"+o],Ot(.95,1.02,N)*.5),U},_.push(M)}const v=(x,E)=>{const b=Math.cos(E)*i;let T=1;return x.s<.35&&b<0&&(T-=.08*-b*(1-Ot(.1,.35,x.s))),T+=.05*Math.exp(-Math.pow((x.s-y)/.03,2))*Math.max(0,Math.sin(E))*t.bony,T+=.03*Ot(.6,.7,x.s)*Math.exp(-Math.pow(Math.cos(E)/.3,2))*Math.max(0,Math.sin(E))*t.bony,T};Qi(s,Vs(_,0,f<1?.035:.02,4),22,{surface:x=>n.surface("leg",{...x,side:i,stump:f<1,sEnd:p}),shape:v,part:"leg",side:i})}function Cx(s,t,e,n,i,r){const o=i>0?"L":"R",a=r["upperArm"+o],l=r["hand"+o],h=r["foreArm"+o],c=l.clone().sub(a).normalize(),u=l.distanceTo(a),d=h.distanceTo(a)/u,{N:f,B:g}=Nl(c,qt(0,0,1)),_=t.limbR*t.armR,m=Yi(_,1,.55),p=[{t:0,rx:.047*_*t.deltoid,rz:.053*_*t.deltoid},{t:.1,rx:.048*_,rz:.051*_},{t:.3,rx:.041*_,rz:.045*_},{t:d-.06,rx:.035*m,rz:.037*m},{t:d,rx:.034*m,rz:.036*m},{t:d+.1,rx:.038*_,rz:.036*_},{t:.8,rx:.031*_,rz:.026*_},{t:.97,rx:.026*m,rz:.019*m},{t:1,rx:.025*m,rz:.018*m}],y=34,v=[],x=.05;for(let b=0;b<=y;b++){const T=x+(1-x)*b/y,S={c:a.clone().addScaledVector(c,T*u),N:f.clone().multiplyScalar(i),B:g,rx:cn(p,T,"rx"),ry:cn(p,T,"rz"),e:2,s:T};S.w=M=>{const P=M.clone().sub(a).dot(c)/u;if(P<.14){const N=Ot(-.12,.14,P);return[[Nt["clav"+o],(1-N)*.7],[Nt.chest,(1-N)*.15],[Nt["upperArm"+o],N+(1-N)*.15]]}return P<d-.06?[[Nt["upperArm"+o],1]]:P<d+.06?bi(Nt["upperArm"+o],Nt["foreArm"+o],Ot(d-.06,d+.06,P)):P<.94?[[Nt["foreArm"+o],1]]:bi(Nt["foreArm"+o],Nt["hand"+o],Ot(.94,1.02,P)*.6)},v.push(S)}const E=(b,T)=>{let L=1;return L+=.12*Math.exp(-Math.pow((b.s-d)/.035,2))*Math.max(0,-Math.sin(T))*t.bony,L+=.08*Math.exp(-Math.pow((b.s-.97)/.025,2))*Math.max(0,Math.cos(T))*t.bony,L};Qi(s,Vs(v,.05*_*t.deltoid,.01,5),20,{surface:b=>n.surface("arm",{...b,side:i,elbowS:d}),shape:E,part:"arm",side:i}),Px(s,t,n,i,l,c)}function Px(s,t,e,n,i,r){const o=n>0?"L":"R",a=Nt["hand"+o],l=qt(n,0,0).addScaledVector(r,-r.x*n).normalize(),h=l.clone().negate(),c=qt(0,0,1),u=t.handScale,d=.095*u,f=t.limbR*t.armR,g=Yi(f,1,.6),_=b=>e.surface("hand",{...b,side:n}),m=[],p=[{t:0,w:.026,h:.018},{t:.25,w:.038,h:.02},{t:.7,w:.044,h:.017},{t:1,w:.043,h:.014}];for(let b=0;b<=8;b++){const T=b/8;m.push({c:i.clone().addScaledVector(r,T*d),N:l,B:c,rx:cn(p,T,"h")*g,ry:cn(p,T,"w")*u,e:2.6,s:T,w:T<.15?[[a,.7],[Nt["foreArm"+o],.3]]:[[a,1]]})}Qi(s,Vs(m,0,.012,3),14,{surface:_,part:"hand",side:n});const y=i.clone().addScaledVector(r,d*.98),v=[{off:.03,len:.078},{off:.01,len:.086},{off:-.01,len:.08},{off:-.029,len:.064}];for(let b=0;b<v.length;b++){const T=v[b],L=t.curl*(.8+.4*(b*37%10)/10),S=y.clone().addScaledVector(c,T.off*u).addScaledVector(r,-Math.abs(T.off)*.15),M=[.45,.32,.23].map(P=>P*T.len*u);Jh(s,S,r,h,c,M,L,.0085*g*(b===3?.88:1),a,_)}const x=i.clone().addScaledVector(r,d*.28).addScaledVector(c,.03*u).addScaledVector(h,.008),E=r.clone().multiplyScalar(.55).addScaledVector(c,.7).addScaledVector(h,.35).normalize();Jh(s,x,E,h,c.clone().cross(E).normalize(),[.04*u,.032*u],t.curl*.6,.0105*g,a,_)}function Jh(s,t,e,n,i,r,o,a,l,h,c,u){const d=[t.clone()];let f=e.clone();const g=new R().crossVectors(e,n).normalize();let _=t.clone();for(let b=0;b<r.length;b++)f.applyAxisAngle(g,o*(b===0?.6:1)),_=_.clone().addScaledVector(f,r[b]),d.push(_);const m=[],p=3;for(let b=0;b<d.length-1;b++)for(let T=0;T<p;T++){const L=T/p,S=d[b].clone().lerp(d[b+1],L),M=d[b+1].clone().sub(d[b]).normalize(),{N:P,B:N}=Nl(M,g),U=(b+L)/(d.length-1),W=T===0&&b>0?1.12:1;m.push({c:S,N:P,B:N,rx:a*(1-U*.28)*W,ry:a*(1-U*.22)*W,e:2,s:U,w:[[l,1]]})}const y=d[d.length-1],v=y.clone().sub(d[d.length-2]).normalize(),{N:x,B:E}=Nl(v,g);m.push({c:y,N:x,B:E,rx:a*.7,ry:a*.75,e:2,s:1,w:[[l,1]]}),Qi(s,Vs(m,0,a*.9,3),7,{surface:b=>h({...b,finger:!0}),part:"hand"})}function Lx(s,t,e,n,i){const r=n>0?"L":"R",o=i["foot"+r],a=e.shoeFor(n),l=a==="none"?0:a==="boot"?.012:.008,h=t.footScale,c=[{t:-.065,w:.03,h:.032,y:.045},{t:-.04,w:.04,h:.045,y:.05},{t:0,w:.043,h:.05,y:.055},{t:.05,w:.046,h:.042,y:.045},{t:.1,w:.05,h:.032,y:.034},{t:.15,w:.05,h:.024,y:.026},{t:.185,w:.044,h:.019,y:.021}],u=[],d=18;for(let g=0;g<=d;g++){const _=-.065+.25*g/d,m=_*h;u.push({c:qt(o.x+n*.004+m*.06*n,cn(c,_,"y"),o.z+m),N:qt(1,0,0),B:qt(0,1,0),rx:cn(c,_,"w")*h+l,ry:cn(c,_,"h")+l*.8,e:a==="none"?2.2:3.2,s:g/d,w:_<-.01&&g<4?[[Nt["foot"+r],.85],[Nt["shin"+r],.15]]:[[Nt["foot"+r],1]]})}const f=(g,_)=>{let m=1;const p=Math.sin(_);return p<-.3&&(m*=1-(Math.abs(p)-.3)*.12),a==="none"&&g.s>.78&&(m*=1+.12*Math.max(0,Math.cos(Math.cos(_)*9)*p)),m};Qi(s,Vs(u,.02,.02,3),16,{surface:g=>e.surface("foot",{...g,side:n,shoe:a}),shape:f,part:"foot",side:n})}function ad(s,t,e=0){const n=t.gaunt,i=.074*t.headW,r=.107,o=.097;let a=s.x*(i+e),l=s.y*(r+e),h=s.z*(o+e);if(s.y>0&&(a*=1+.07*s.y*(s.z<.3?1:.6)),s.y<-.1){const u=Ot(-.1,-1,s.y);a*=1-.22*u*(.6+.4*Math.max(s.z,0)),s.z<.2&&(h=h*(1-.45*u)+.01*u)}if(s.z>.2&&s.y>-.92&&(h*=.94),e>0)return qt(a,l,h);const c=Ot(.35,.85,s.z);if(c>0){const u=a,d=l,f=(p,y,v)=>Math.exp(-(p*p+y*y)/(v*v)),g=f(Math.abs(u)-.032,d-.012,.019);h-=g*(.013+n*.008)*c,h+=f(Math.abs(u)-.03,d-.034,.02)*.006*c;const _=fe((.022-d)/.055,0,1);d<.025&&d>-.04&&(h+=Math.exp(-Math.pow(u/(.009+.008*_),2))*(.004+_*.02)*t.nose*c),h+=f(Math.abs(u)-.012,d+.03,.007)*.006*c*t.nose,a+=Math.sign(u)*f(Math.abs(u)-.05,d+.008,.016)*.005*c;const m=f(Math.abs(u)-.045,d+.042,.02);a-=Math.sign(u)*m*(.004+n*.01),h-=m*(.004+n*.006)*c,h-=f(u*.45,d+.056,.006)*.005*c,h+=f(u*.5,d+.048,.008)*.003*c,h+=f(u*.8,d+.098,.015)*.007*c}return Math.abs(s.x)>.6&&s.y>-.1&&s.y<.5&&s.z>0&&(a-=Math.sign(s.x)*.004*(1+n)),qt(a,l,h)}function Dx(s,t,e,n){const i=t.headScale,r=e.head.clone().add(qt(0,.085*i,.018*i)),o=new oi(1,48,36);o.deleteAttribute("normal"),o.deleteAttribute("uv");const a=rd(o),l=a.attributes.position,h=s.count,c=-.054,u=new R;for(let g=0;g<l.count;g++){u.set(l.getX(g),l.getY(g),l.getZ(g)).normalize();const _=ad(u,t),m=_.clone().multiplyScalar(i).add(r),p=1-Ot(c-.006,c+.004,_.y),y=Ot(-.03,.01,_.z),v=p*y,x=(1-Ot(-.11,-.07,_.y))*(1-y)*.5,E=[[Nt.head,Math.max(0,1-v-x)],[Nt.jaw,v],[Nt.neck,x]],b=n.surface("head",{p:m,lp:_,d:u,x:_.x,y:_.y,z:_.z,mouthY:c,hair:u.y-ld(u)});s.vertex(m,b.col,b.rough,b.kind,E)}const d=a.index.array;for(let g=0;g<d.length;g+=3)s.tri(h+d[g],h+d[g+1],h+d[g+2]);for(const g of[-1,1]){const _=r.clone().add(qt(.032*g*t.headW,.011,.063-t.gaunt*.006).multiplyScalar(i));ao(s,_,qt(.0112,.0102,.0105).multiplyScalar(i),12,9,[[Nt.head,1]],(m,p)=>n.surface("eye",{n:m,s:g,p}))}ao(s,r.clone().add(qt(0,-.058,.055).multiplyScalar(i)),qt(.028,.02,.03).multiplyScalar(i),10,8,[[Nt.head,.5],[Nt.jaw,.5]],()=>({col:[.06,.012,.01],rough:.4,kind:xe.cavity}));const f=t.seed;for(const[g,_,m]of[[0,Nt.head,-.049],[1,Nt.jaw,-.062]])for(let p=-4;p<=4;p++){const y=Math.abs(Math.sin((p+11)*12.9898+f*78.233+g*3.1)*43758.5453)%1;if(y<t.missingTeeth)continue;const v=p/4.5*.95,x=r.clone().add(qt(Math.sin(v)*.024,m+(g?.004:-.004),.052+Math.cos(v)*.022).multiplyScalar(i)),E=qt(.0042+y*.001,.0075+y*.003,.004).multiplyScalar(i);ao(s,x,E,5,4,[[_,1]],(b,T)=>n.surface("tooth",{hsh:y,p:T}))}for(const g of[-1,1]){const _=r.clone().add(qt(.074*g*t.headW*1.03,0,-.008).multiplyScalar(i));ao(s,_,qt(.009,.03,.019).multiplyScalar(i),9,7,[[Nt.head,1]],(m,p)=>n.surface("ear",{p}),qt(0,0,-.25*g))}return n.headwear&&Ix(s,t,r,n),r}function ld(s){return(s.z>.4?.44-(s.z-.4)*.1:s.z>-.3?.12+(s.z+.3)*.2:-.35-(-.3-s.z)*.2)+Math.abs(s.x)*(s.z>.3?.2:0)}function Ix(s,t,e,n){const i=n.headwear,r=t.headScale,o=new oi(1,32,24);o.deleteAttribute("normal"),o.deleteAttribute("uv");const a=rd(o),l=a.attributes.position,h=new Uint8Array(l.count),c=new Int32Array(l.count).fill(-1),u=new R,d=[];for(let g=0;g<l.count;g++){u.set(l.getX(g),l.getY(g),l.getZ(g)).normalize();let _=!1,m=.006,p=0,y=0;if(i.type==="short"||i.type==="long"||i.type==="patchy"?(_=u.y>ld(u)+.16,m=.003+Math.max(0,u.y)*.003,i.type==="long"&&u.z<.1&&u.y>-.6&&(_=!0,m=.008),i.type==="patchy"&&(_=_&&Oe(u.x*5+t.seed,u.y*5,u.z*5)>-.05)):i.type==="beanie"?(_=u.y>.12-(u.z<0?.15:0),m=.012):i.type==="hood"&&(_=!(u.z>.42&&Math.abs(u.x)<.78&&u.y<.62&&u.y>-.95)&&u.y>-.9,m=.03+Math.max(0,-u.z)*.012,u.y>.5&&u.z<.2&&(p=(u.y-.5)*.03,y=-(u.y-.5)*.04),u.y<-.4&&(m+=(-u.y-.4)*.05)),!_)continue;h[g]=1;const v=ad(u,t,m);v.y+=p,v.z+=y,i.type==="long"&&u.z<.1&&u.y<0&&(v.y-=Math.pow(-u.y,1.3)*.08,v.z-=.012,v.x*=1.05);const x=v.multiplyScalar(r).add(e),E=v.y/r,b=i.type==="hood"?Ot(-.02,-.1,E)*.6:i.type==="long"?Ot(-.03,-.12,E)*.5:0,T=n.surface("headwear",{d:u,p:x});d.push([g,x,T,[[Nt.head,1-b],[Nt.neck,b*.6],[Nt.chest,b*.4]]])}for(const[g,_,m,p]of d)c[g]=s.vertex(_,m.col,m.rough,m.kind,p);const f=a.index.array;for(let g=0;g<f.length;g+=3){const _=f[g],m=f[g+1],p=f[g+2];h[_]&&h[m]&&h[p]&&s.tri(c[_],c[m],c[p])}if(i.type==="beanie"){const g=[];for(let _=0;_<=1;_++)g.push({c:e.clone().add(qt(0,(.03+_*.03)*r,-.006*r)),N:qt(1,0,0),B:qt(0,0,1),rx:.088*r*t.headW,ry:.104*r,e:2,s:_,w:[[Nt.head,1]]});Qi(s,g,32,{surface:_=>n.surface("headwear",{cuff:!0,p:_.p}),part:"headwear"})}}function ao(s,t,e,n,i,r,o,a){const l=s.count,h=a?new Ke(a.x,a.y,a.z):null;for(let c=0;c<=i;c++){const d=c/i*Math.PI;for(let f=0;f<n;f++){const g=f/n*Math.PI*2,_=qt(Math.sin(d)*Math.cos(g),Math.cos(d),Math.sin(d)*Math.sin(g)),m=qt(_.x*e.x,_.y*e.y,_.z*e.z);h&&m.applyEuler(h),m.add(t);const p=o(_,m);s.vertex(m,p.col,p.rough,p.kind,r)}}for(let c=0;c<i;c++)for(let u=0;u<n;u++){const d=l+c*n+u,f=l+c*n+(u+1)%n,g=l+(c+1)*n+u,_=l+(c+1)*n+(u+1)%n;s.tri(d,f,g),s.tri(f,_,g)}}function Ux(s,t,e,n,i){if(n.rags)for(const r of n.rags){const o=r.angle,a=i.hips.y+r.y,l=.16*t.torsoW+.02,h=.11*t.torsoD+.02,c=qt(Math.cos(o)*l,a,Math.sin(o)*h),u=qt(-Math.sin(o),0,Math.cos(o)),d=qt(Math.cos(o),0,Math.sin(o)),f=s.count,g=6;for(let _=0;_<=g;_++){const m=_/g,p=r.width*(1-m*.6),y=c.clone().add(qt(0,-m*r.len,0)).addScaledVector(d,m*.03);for(const v of[-1,1]){const x=y.clone().addScaledVector(u,v*p/2+Math.sin(m*7+o)*.01),E=x.y,b=x.x>0?Nt.thighL:Nt.thighR,T=Ot(i.hips.y-.02,i.hips.y-.25,E)*.5,L=n.surface("rag",{t:m,p:x});s.vertex(x,L.col,L.rough,L.kind,[[Nt.hips,1-T],[b,T]])}}for(let _=0;_<g;_++){const m=f+_*2;s.tri(m,m+2,m+1),s.tri(m+1,m+2,m+3),s.tri(m,m+1,m+2),s.tri(m+1,m+3,m+2)}}}function Ba(s,t,e){const n=wx(s),i=n.J,r=new Ex;Ax(r,s,n,t);for(const _ of[1,-1])Rx(r,s,n,t,_,i),Cx(r,s,n,t,_,i),s.stump&&s.stump===(_>0?"L":"R")||Lx(r,s,t,_,i);const o=Dx(r,s,i,t);Ux(r,s,n,t,i);const a=o.y+.112*s.headScale+(t.headwear&&t.headwear.type==="hood"?.03:0),l=s.height/a,h=new Ae,c=new Float32Array(r.pos.length);for(let _=0;_<r.pos.length;_++)c[_]=r.pos[_]*l;h.setAttribute("position",new De(c,3)),h.setAttribute("color",new De(new Float32Array(r.col),3)),h.setAttribute("aSurf",new De(new Float32Array(r.surf),2)),h.setAttribute("skinIndex",new Zl(r.si,4)),h.setAttribute("skinWeight",new le(r.sw,4)),h.setIndex(r.idx),h.computeVertexNormals(),h.computeBoundingSphere();const u={},d=[];for(const _ of zl){const m=new Ou;m.name=_,u[_]=m,d.push(m)}for(const _ of zl){const m=u[_],p=i[_].clone().multiplyScalar(l);Oa[_]?(u[Oa[_]].add(m),m.position.copy(p.sub(i[Oa[_]].clone().multiplyScalar(l)))):m.position.copy(p)}const f=new Xf(h,e);f.add(u.hips),f.updateMatrixWorld(!0);const g=new $l(d);return f.bind(g),f.frustumCulled=!1,{mesh:f,bones:u,scale:l,layout:{hipJY:n.hipJY*l,thighLen:n.thighLen*l,shinLen:n.shinLen*l,ankleY:n.ankleY*l,upperArm:.29*s.armLen*l,foreArm:.26*s.armLen*l,height:s.height}}}const lo=new Ke,co=new sn,Qh=new sn,tu=new R;new R;new R;new R;const zx=new R,Nx=new R,Fx=new R,eu=new R,kx=new R;class br{constructor(t){this.mesh=t.mesh,this.b=t.bones,this.layout=t.layout,this.rest={};for(const[n,i]of Object.entries(this.b))this.rest[n]=i.position.clone();this.dir={};const e=(n,i)=>this.dir[n]=this.b[i].position.clone().normalize();for(const n of["L","R"])e("thigh"+n,"shin"+n),e("shin"+n,"foot"+n),e("upperArm"+n,"foreArm"+n),e("foreArm"+n,"hand"+n);this.len={};for(const n of["L","R"])this.len["thigh"+n]=this.b["shin"+n].position.length(),this.len["shin"+n]=this.b["foot"+n].position.length(),this.len["upperArm"+n]=this.b["foreArm"+n].position.length(),this.len["foreArm"+n]=this.b["hand"+n].position.length()}reset(){for(const[t,e]of Object.entries(this.b))e.quaternion.identity(),e.position.copy(this.rest[t])}rot(t,e=0,n=0,i=0){lo.set(e,n,i,"XYZ"),this.b[t].quaternion.setFromEuler(lo)}addRot(t,e=0,n=0,i=0){lo.set(e,n,i,"XYZ"),co.setFromEuler(lo),this.b[t].quaternion.multiply(co)}aim(t,e){const n=this.b[t];n.parent.getWorldQuaternion(co),tu.copy(e).normalize().applyQuaternion(co.invert()),n.quaternion.setFromUnitVectors(this.dir[t],tu)}twoBone(t,e,n,i){const r=this.len[t],o=this.len[e],a=this.b[t];a.parent.updateWorldMatrix(!0,!1);const l=a.getWorldPosition(zx),h=Nx.copy(n).sub(l),c=h.length(),u=Math.min(Math.max(c,Math.abs(r-o)+.001),(r+o)*.9995);h.divideScalar(c||1);const d=Fx.copy(l).addScaledVector(h,u),f=Math.min(1,Math.max(-1,(r*r+u*u-o*o)/(2*r*u))),g=Math.sqrt(1-f*f),_=kx.copy(i).sub(l);_.addScaledVector(h,-_.dot(h)),_.lengthSq()<1e-8&&_.set(0,0,1),_.normalize();const m=eu.copy(l).addScaledVector(h,f*r).addScaledVector(_,g*r);this.aim(t,m.sub(l)),a.updateMatrixWorld(!0);const p=this.b[e].getWorldPosition(eu);return this.aim(e,d.sub(p)),this.b[e].updateMatrixWorld(!0),c/(r+o)}setWorldQuat(t,e){const n=this.b[t];n.parent.getWorldQuaternion(Qh),n.quaternion.copy(Qh.invert().multiply(e))}}const Ox=s=>s*s*(3-2*s);class cd{constructor(t){this.o={stepLen:.35,spread:.11,swing:[.42,.42],start:[0,.5],height:[.05,.05],nominalSpeed:.45,forwardBias:0,settleRate:1.2,reach:.9,...t},this.phase=0,this.phaseRate=0,this.limbs=[0,1].map(e=>({side:e===0?1:-1,plant:new R,start:new R,target:new R,pos:new R,yaw:0,startYaw:0,targetYaw:0,swinging:!1,t:0,lift:0})),this._ideal=new R}ideal(t,e,n,i,r=0){const o=this.limbs[t],a=this.o.spread*o.side,l=Math.sin(n),h=Math.cos(n),c=this.o.forwardBias+r;return i.set(e.x+h*a+l*c,0,e.z-l*a+h*c),i.y=ce(i.x,i.z),i}reset(t,e){for(let n=0;n<2;n++){const i=this.limbs[n];this.ideal(n,t,e,i.plant),i.pos.copy(i.plant),i.yaw=e,i.swinging=!1}}update(t,e,n,i){const r=this.o,o=r.stepLen*2;let a=i*t/o,l=!1;for(let c=0;c<2;c++){const u=this.limbs[c];if(u.swinging)l=!0;else{this.ideal(c,e,n,this._ideal);const d=u.plant.x-this._ideal.x,f=u.plant.z-this._ideal.z;(d*d+f*f>(i<.05?.035:.25)||Math.abs(ur(u.yaw-n))>.6)&&(l=!0)}}l&&(a=Math.max(a,t*r.settleRate)),this.phaseRate=t>0?a/t:0,this.phase=(this.phase+a)%1;const h=Math.min(1.2,i/Math.max(.05,r.nominalSpeed));for(let c=0;c<2;c++){const u=this.limbs[c],d=((this.phase-r.start[c])%1+1)%1,f=d<r.swing[c];if(f&&!u.swinging?(u.swinging=!0,u.start.copy(u.plant),u.startYaw=u.yaw):!f&&u.swinging&&(u.swinging=!1,u.plant.copy(u.target),u.yaw=u.targetYaw),u.swinging){u.t=d/r.swing[c];const g=(1-u.t)*r.swing[c],_=this.phaseRate>1e-4?g/this.phaseRate:0,m=(1-r.swing[c])*o,p=i*_+m/2*Math.min(1,h);this.ideal(c,e,n,u.target,p),u.targetYaw=n;const y=Ox(u.t);u.pos.lerpVectors(u.start,u.target,y),u.lift=Math.sin(Math.PI*u.t)*r.height[c]*Math.max(.35,Math.min(1,h+.3)),u.pos.y+=u.lift,u.curYaw=u.startYaw+ur(u.targetYaw-u.startYaw)*y}else u.pos.copy(u.plant),u.lift=0,u.curYaw=u.yaw,u.t=0}}stanceWeight(t){const e=this.o;return((this.phase-e.start[t])%1+1)%1<e.swing[t]?0:1}}const nu=new R,Ro=new R,En=new R,Co=new sn,Po=new Ke,Un=new R,Ue=(s,t)=>Oe(s,t*1.37,t*.71)*1.6;function Bx(s,t){const e=(n,i)=>t.float(n,i);switch(s){case"shambler":{const n=t.chance(.7)?t.chance(.5)?0:1:-1;return{stepLen:e(.3,.36),spread:e(.1,.13),nominalSpeed:e(.38,.48),swing:n<0?[.42,.42]:n===0?[.5,.36]:[.36,.5],start:[0,.5],height:n<0?[.05,.05]:n===0?[.015,.05]:[.05,.015],limp:n,hipFactor:.95,bob:.025,sway:.035,roll:.07,spine:e(.3,.45),chest:e(.15,.28),neck:e(-.1,.12),headRoll:e(-.4,.4),shoulderDrop:e(-.18,.18),arm:{pitch:e(-.35,.05),abduct:e(0,.12),elbow:e(.15,.5),swing:.12,reach:t.chance(.3)?e(.5,1):0,asym:e(-.4,.4)},jaw:e(.05,.25),twitch:.15,kneeOut:.12,turnRate:1.3,lookRate:.25}}case"heavy":return{stepLen:e(.28,.32),spread:e(.15,.18),nominalSpeed:e(.3,.36),swing:[.38,.38],start:[0,.5],height:[.045,.045],limp:-1,hipFactor:.92,bob:.03,sway:.075,roll:.09,yawTwist:.12,spine:e(.1,.18),chest:e(.1,.18),neck:e(.25,.4),headRoll:e(-.15,.15),shoulderDrop:0,arm:{pitch:e(-.15,.05),abduct:e(.2,.3),elbow:e(.2,.35),swing:.18,reach:0,asym:e(-.2,.2)},jaw:e(.1,.3),twitch:.05,kneeOut:.3,turnRate:.9,lookRate:.15};case"gaunt":return{stepLen:e(.38,.44),spread:e(.08,.1),nominalSpeed:e(.45,.55),swing:[.46,.46],start:[0,.5],height:[.085,.085],limp:-1,hipFactor:.955,bob:.03,sway:.03,roll:.05,jitter:.35,spine:e(.45,.58),chest:e(.3,.42),neck:e(-.55,-.4),headRoll:e(-.3,.3),shoulderDrop:e(-.1,.1),arm:{pitch:e(-.5,-.25),abduct:e(.05,.15),elbow:e(.3,.6),swing:.1,reach:t.chance(.4)?e(.3,.7):0,asym:e(-.5,.5)},jaw:e(.2,.4),twitch:.8,kneeOut:.08,turnRate:1.6,lookRate:.35};case"restless":return{stepLen:e(.42,.5),spread:e(.09,.11),nominalSpeed:e(1.2,1.5),swing:[.4,.4],start:[0,.5],height:[.09,.09],limp:-1,hipFactor:.93,bob:.035,sway:.03,roll:.05,spine:e(.32,.42),chest:e(.15,.25),neck:e(-.45,-.3),headRoll:e(-.1,.1),shoulderDrop:0,arm:{pitch:e(-.6,-.3),abduct:e(.08,.16),elbow:e(.5,.8),swing:.25,reach:e(.6,1),asym:e(-.3,.3)},jaw:e(.25,.45),twitch:.4,kneeOut:.1,turnRate:3.2,lookRate:1,burst:!0};default:throw new Error(s)}}class Vx{constructor(t,e,n,i){this.rig=new br(t),this.type=e,this.s=n,this.seed=i.float(0,100),this.gait=new cd({stepLen:n.stepLen,spread:n.spread,swing:n.swing,start:n.start,height:n.height,nominalSpeed:n.nominalSpeed,settleRate:1/Math.max(.5,n.stepLen*2/n.nominalSpeed)*1.1}),this.gait.phase=i.float(0,1),this.armSwing=[0,0],this.lookYaw=0,this.lookPitch=0,this.groundAvg=0,this.action=null,this.actionBlend=0,this.crouch=0,this.lean=0}reset(t,e){this.gait.reset(t,e),this.groundAvg=ce(t.x,t.z)}update(t,e){const{rig:n,s:i}=this,r=e.time+this.seed;n.reset();const o=e.speed;this.gait.update(t,e.pos,e.yaw,o);const a=this.gait,l=a.phase*Math.PI*2,h=fe(o/i.nominalSpeed,0,1.3),c=Ot(.02,.15,o),u=n.layout,d=u.thighLen+u.shinLen,f=a.limbs,g=(f[0].plant.y+f[1].plant.y)*.5;this.groundAvg+=(g-this.groundAvg)*Math.min(1,t*6);const _=e.action?1:0;e.action&&(this.action=e.action),this.actionBlend+=(_-this.actionBlend)*Math.min(1,t*2.5);const m=this.actionBlend,p=this.action,y=p==="crouchFeed"?1:0;this.crouch+=(y-this.crouch)*Math.min(1,t*1.5);const v=(i.burst?h*.25:0)+(p==="peer"?.35*m:0)+(p==="paw"?.1*m:0);this.lean+=(v-this.lean)*Math.min(1,t*3);const x=f[0].swinging?0:f[1].swinging?1:-1,E=i.bob*c*Math.cos(l*2)*h,b=io(i.hipFactor,.5,this.crouch);let T=this.groundAvg+u.ankleY+d*b-E-.02,L=0;i.limp>=0&&(L=!f[i.limp].swinging&&f[1-i.limp].swinging?.035*c:0,T-=L);const S=Math.sin(r*1.3)*.006,M=Ue(r*.25,this.seed)*(p==="sway"?.05:.018)*(1-c),P=-i.sway*Math.sin(l)*c*h+M,N=n.b.hips;N.position.set(P,T+S,-.02*this.crouch-this.lean*.05);const U=(x===0?-1:x===1?1:0)*i.roll*c*.6+(i.limp>=0?(i.limp===0?-1:1)*L*2:0),W=(i.yawTwist||.06)*Math.sin(l)*c;n.rot("hips",.05+this.crouch*.5+this.lean*.3,W,U*.6);const B=i.jitter?Ue(r*6,this.seed+3)*i.jitter*.05:0,V=i.twitch?Math.pow(Math.max(0,Ue(r*.9,this.seed+9)),6)*i.twitch*3:0,K=i.spine+this.lean*.6+this.crouch*.25+Math.sin(r*1.3)*.015+E*.5,X=i.chest+this.crouch*.2+B;n.rot("spine",K,-W*.6,-U*.4+P*.8),n.rot("chest",X,-W*.6+V*.2,-U*.3);const ot=.05+this.crouch*.5+this.lean*.3+K+X,xt=Math.min(1,t*(i.burst?9:3));this.lookYaw+=((e.lookYaw||0)-this.lookYaw)*xt,this.lookPitch+=((e.lookPitch||0)-this.lookPitch)*xt;const Tt=i.neck-ot*.55+this.lookPitch*.4+V*.15;n.rot("neck",Tt,this.lookYaw*.4,i.headRoll*.4),n.rot("head",-ot*.2+this.lookPitch*.6+B*2,this.lookYaw*.6+V*.5,i.headRoll*.6+V*.3+B);const Zt=i.jaw+Math.max(0,Ue(r*.7,this.seed+5))*.35+(p==="paw"||p==="bang"?.2:0);n.rot("jaw",fe(Zt,0,.55),0,0);const Xt=i.arm;for(let st=0;st<2;st++){const Ct=st===0?1:-1,bt=st===0?"L":"R",ae=-Math.sin(l+(st===0?0:Math.PI))*Xt.swing*c*h;this.armSwing[st]+=(ae-this.armSwing[st])*Math.min(1,t*4);const ne=Xt.asym*Ct;let Vt=-ot*.85+Xt.pitch+this.armSwing[st]-Xt.reach*(1.15+ne*.4)+Ue(r*.4,this.seed+st)*.06,C=Xt.abduct+Xt.reach*.05+Math.max(0,ne)*.05,ct=Xt.elbow+Xt.reach*.1+Math.max(0,-this.armSwing[st])*.3,et=0,ht=0;if(p&&m>.01){let vt=Vt,nt=ct,yt=C;if(p==="paw"){const Ft=Math.sin(r*2.4+st*2.1);vt=-ot*.85-1.75+Ft*.22,nt=.55+Ft*.25,yt=.05,et=.15}else if(p==="bang"){const Ft=(r*.9+st*.37)%1,D=Ft<.25?Ft/.25:1-(Ft-.25)/.75;vt=st===1?-ot*.85-1.2-D*1.2:-ot*.85-1.4,nt=st===1?1.1-D*.8:.6,yt=.1}else if(p==="peer")vt=-ot*.85-.9+Math.sin(r*.8+st)*.1,nt=.25,yt=.15;else if(p==="crouchFeed"){const Ft=Math.max(0,Math.sin(r*.9+st*2.5));vt=-ot*.85-.75-Ft*.3,nt=.4+Ft*.6,yt=.18}else p==="sway"&&(vt=-ot*.85+.05+Ue(r*.3,st+20)*.08,nt=.1,yt=.03);Vt=io(Vt,vt,m),ct=io(ct,nt,m),C=io(C,yt,m)}const Z=(i.shoulderDrop||0)*Ct;n.rot("clav"+bt,0,et*Ct-this.armSwing[st]*.2*Ct,ht+(Xt.reach*.05+(p==="paw"?.12*m:0))*Ct-Math.max(0,Z)*Ct),n.rot("upperArm"+bt,Vt,0,C*Ct),n.rot("foreArm"+bt,-ct,.2*Ct,0),n.rot("hand"+bt,.15+Ue(r*.5,st+7)*.1,0,-.1*Ct)}const j=e.object;j.updateMatrixWorld(!0);let lt=0;for(let st=0;st<2;st++){n.b[st===0?"thighL":"thighR"].getWorldPosition(En),Un.copy(f[st].pos),Un.y+=u.ankleY;const Ct=(n.len[st===0?"thighL":"thighR"]+n.len[st===0?"shinL":"shinR"])*.985,bt=Math.hypot(Un.x-En.x,Un.z-En.z),ae=En.y-Un.y;Math.hypot(bt,ae)>Ct&&Ct>bt&&(lt=Math.max(lt,ae-Math.sqrt(Ct*Ct-bt*bt)))}lt>0&&(this.hipDrop=Math.max(this.hipDrop||0,lt)),this.hipDrop=(this.hipDrop||0)*Math.max(0,1-t*3),this.hipDrop>1e-4&&(N.position.y-=Math.max(lt,this.hipDrop),j.updateMatrixWorld(!0));const It=Math.sin(e.yaw),_t=Math.cos(e.yaw);for(let st=0;st<2;st++){const Ct=st===0?"L":"R",bt=st===0?1:-1,ae=f[st];n.b["thigh"+Ct].getWorldPosition(En);const ne=i.limp===st;let Vt=0;if(ae.swinging){const C=ae.t;Vt=ne?.35:.55*Math.sin(Math.PI*Math.min(1,C*1.6))*(1-C)-.3*Math.sin(Math.PI*C)*C}Un.copy(ae.pos),Un.y+=u.ankleY+Math.max(0,Math.sin(Vt))*.05,Ro.set(En.x+It*1+_t*bt*i.kneeOut,En.y-.2,En.z+_t*1-It*bt*i.kneeOut),n.twoBone("thigh"+Ct,"shin"+Ct,Un,Ro),Po.set(Vt,ae.curYaw??e.yaw,0,"YXZ"),Co.setFromEuler(Po),n.setWorldQuat("foot"+Ct,Co)}}}class Gx{constructor(t,e){this.rig=new br(t),this.seed=e.float(0,100);const n=this.rig.layout;this.chestFwd=n.height*.3,this.hands=new cd({stepLen:e.float(.22,.27),spread:.24,swing:[.4,.4],start:[0,.5],height:[.09,.09],nominalSpeed:.2,forwardBias:this.chestFwd+.18,settleRate:.6}),this.lookYaw=0}reset(t,e){this.hands.reset(t,e)}speedFactor(){const t=this.hands.phase;return .35+.9*(.5-.5*Math.cos(t%.5/.5*Math.PI*2))}update(t,e){const{rig:n}=this,i=e.time+this.seed;n.reset();const r=e.speed;this.hands.update(t,e.pos,e.yaw,r);const o=this.hands,a=o.phase*Math.PI*2,l=Ot(.01,.08,r),h=ce(e.pos.x,e.pos.z),c=n.layout.height/1.75,u=1.32,d=Math.sin(a)*.12*l;n.b.hips.position.set(Math.sin(a)*.02,h+.13*c,0),n.rot("hips",u,Math.sin(a)*.06,d*.5);const f=1-l;n.rot("spine",-.22-Math.sin(i*1.1)*.02+f*.12,-Math.sin(a)*.12,-d),n.rot("chest",-.24+f*.1,-Math.sin(a)*.1,-d*.5),this.lookYaw+=((e.lookYaw||0)-this.lookYaw)*Math.min(1,t*2),n.rot("neck",-.55+f*.3,this.lookYaw*.4,0),n.rot("head",-.35+f*.4+Ue(i*.5,this.seed)*.1,this.lookYaw*.6+Ue(i*.3,this.seed+2)*.2,Ue(i*.4,this.seed+4)*.2),n.rot("jaw",.15+Math.max(0,Ue(i*.8,this.seed+6))*.4,0,0);for(let m=0;m<2;m++){const p=m===0?"L":"R",y=m===0?1:-1;n.rot("thigh"+p,.12+Ue(i*.5,m+30)*.05+Math.sin(a+m*Math.PI)*.05*l,.1*y,.12*y),n.rot("shin"+p,.18+Ue(i*.4,m+40)*.08,0,0),n.rot("foot"+p,.9,0,0)}e.object.updateMatrixWorld(!0);const g=Math.sin(e.yaw),_=Math.cos(e.yaw);for(let m=0;m<2;m++){const p=m===0?"L":"R",y=m===0?1:-1,v=o.limbs[m],x=v.swinging?Math.sin(Math.PI*v.t):0;n.rot("clav"+p,-.2*x-.1,.25*x*y,.1*y),n.b["clav"+p].updateMatrixWorld(!0),n.b["upperArm"+p].getWorldPosition(En),Un.copy(v.pos),Un.y+=.03*c,Ro.set(En.x+_*y*.6-g*.3,En.y+.5,En.z-g*y*.6-_*.3),n.twoBone("upperArm"+p,"foreArm"+p,Un,Ro),Po.set(-Math.PI/2+.25+x*.4,e.yaw,0,"YXZ"),Co.setFromEuler(Po),n.setWorldQuat("hand"+p,Co),n.addRot("hand"+p,0,0,y*(Math.PI/2-.3))}}}class Hx{constructor(t,e){this.rig=new br(t),this.seed=e.float(0,100),this.nextTear=e.float(2,5),this.tearT=-1}reset(){}update(t,e){const{rig:n}=this,i=e.time+this.seed;n.reset(),this.nextTear-=t,this.nextTear<=0&&this.tearT<0&&(this.tearT=0);let r=0;if(this.tearT>=0){this.tearT+=t;const u=this.tearT;r=u<.35?Ot(0,.35,u):1-Ot(.6,1.6,u),u>1.6&&(this.tearT=-1,this.nextTear=3+Math.abs(Ue(i,this.seed))*5)}const o=Math.sin(i*7.5)*.5+.5,a=Ue(i*.6,this.seed+1),l=ce(e.pos.x,e.pos.z);for(let u=0;u<2;u++){const d=u===0?"L":"R",f=u===0?1:-1;n.rot("thigh"+d,-.55-.1*u,.1*f,.14*f),n.rot("shin"+d,2.05,0,-.05*f),n.rot("foot"+d,.65,0,0)}const h=.42+a*.06-r*.3;n.rot("hips",h*.6,0,0),n.rot("spine",h*.7+Math.sin(i*1.4)*.02,a*.05,0),n.rot("chest",h*.6-r*.1,a*.08,0),n.rot("neck",.3+a*.12-r*.7,Ue(i*1.5,this.seed+3)*.1,0),n.rot("head",.25-r*.4+o*.05,Ue(i*2,this.seed+4)*.15+r*Math.sin(i*20)*.08,0),n.rot("jaw",.12+o*.25+r*.15,0,0);const c=h*.6+h*.7+h*.6;for(let u=0;u<2;u++){const d=u===0?"L":"R",f=u===0?1:-1,g=u===1?Math.max(r,Math.max(0,Ue(i*.5,this.seed+8))*.6):0;n.rot("clav"+d,0,0,.05*f),n.rot("upperArm"+d,-c*.9-.65+g*.2+Math.sin(i*1.1+u)*.05,0,(.22-g*.1)*f),n.rot("foreArm"+d,-(.55+g*1.2),.3*f,0),n.rot("hand"+d,.3,0,0)}n.b.hips.position.y=0,Lo(n,e.object,l,["shinL","shinR"],.045*(n.layout.height/1.75))}}class Wx{constructor(t,e,n=!1){this.rig=new br(t),this.seed=e.float(0,100),this.faceUp=n,this.evt=null,this.wait=e.float(1,4)}reset(){}update(t,e){const{rig:n}=this,i=e.time+this.seed;if(n.reset(),this.wait-=t,!this.evt&&this.wait<=0){const c=["reach","head","twitch","reach","drag"];this.evt={kind:c[Math.floor(Math.abs(Ue(i,this.seed))*4.99)%c.length],t:0,dur:1.8+Math.abs(Ue(i*3,2))*2}}let r=0,o="";if(this.evt){this.evt.t+=t;const c=this.evt.t/this.evt.dur;r=Math.sin(Math.PI*fe(c,0,1)),r=r*r*(3-2*r),o=this.evt.kind,c>=1&&(this.evt=null,this.wait=3+Math.abs(Ue(i*.7,this.seed+1))*6)}const a=ce(e.pos.x,e.pos.z),l=n.layout.height/1.75,h=Math.sin(i*.9)*.01;if(this.faceUp){n.rot("hips",-Math.PI/2+.06,0,-.06),n.rot("spine",.04+h,0,0),n.rot("chest",.05+(o==="head"?r*.25:0),0,0),n.rot("neck",.15+(o==="head"?r*.4:0),-.6+(o==="head"?r*.5:0),0),n.rot("head",.1,-.5,-.2),n.rot("jaw",.25+(o==="head"?r*.3:0),0,0);const c=o==="reach"||o==="drag"?r:0;n.rot("upperArmR",-.15-c*1.6,0,-.5+c*.3),n.rot("foreArmR",-.3-c*.4,0,0),n.rot("handR",c*.4,0,0),n.rot("upperArmL",.1,0,.7),n.rot("foreArmL",-.4,0,0),n.rot("thighL",-.1+(o==="twitch"?Math.sin(i*16)*r*.06:0),0,.15),n.rot("shinL",.1,0,0),n.rot("thighR",-.45,0,-.2),n.rot("shinR",.9,0,0),n.rot("footL",-.6,0,.3),n.rot("footR",-.3,0,-.3),n.b.hips.position.set(0,0,0),Lo(n,e.object,a,["chest","hips","head"],.1*l)}else{n.rot("hips",Math.PI/2-.04,0,.08),n.rot("spine",-.05-(o==="head"?r*.12:0)+h,0,0),n.rot("chest",-.04-(o==="head"?r*.15:0),0,0),n.rot("neck",-.2-(o==="head"?r*.6:0),.5-(o==="head"?r*.4:0),0),n.rot("head",-.1-(o==="head"?r*.3:0),.7-(o==="head"?r*.5:0),.3),n.rot("jaw",.1+(o==="head"?r*.4:0),0,0);const c=o==="reach"?r:o==="drag"?r*.7:0;n.rot("upperArmL",-2.7-c*.25,0,.35-c*.15),n.rot("foreArmL",-.25-c*.7+(o==="drag"?Math.sin(this.evt?this.evt.t*3:0)*.3:0),0,0),n.rot("handL",.2+c*.6,0,-.3),n.rot("upperArmR",-.5+(o==="twitch"?r*.3:0),0,-.55),n.rot("foreArmR",-1.6,.2,0),n.rot("handR",.4,0,0),n.rot("thighL",.05+(o==="twitch"?Math.sin(i*18)*r*.08:0),0,.12),n.rot("shinL",.25+(o==="drag"?r*.5:0),0,0),n.rot("thighR",-.1,0,-.1),n.rot("shinR",.6,0,0),n.rot("footL",1.2,0,0),n.rot("footR",1,0,0),n.b.hips.position.set(0,0,0),Lo(n,e.object,a,["chest","hips","shinL","shinR"],.1*l)}}}function Xx(s,t,e,n){const i=new br(s);i.reset();const r=i.layout.height/1.75;return e==="back"?(i.rot("hips",-Math.PI/2+.04,0,.05),i.rot("spine",.02,0,.04),i.rot("chest",.03,0,0),i.rot("neck",.1,.9,0),i.rot("head",0,.5,.1),i.rot("jaw",.35,0,0),i.rot("upperArmL",-.3,0,1.1),i.rot("foreArmL",-.6,0,0),i.rot("upperArmR",-.1,0,-.35),i.rot("foreArmR",-.2,0,0),i.rot("thighL",-.08,0,.18),i.rot("thighR",-.5,0,-.35),i.rot("shinR",1,0,0),i.rot("footL",-.5,0,.5),i.rot("footR",-.4,0,-.4)):e==="front"?(i.rot("hips",Math.PI/2-.03,.05,.1),i.rot("neck",-.15,1,0),i.rot("head",0,.4,.3),i.rot("upperArmL",-2.6,0,.6),i.rot("foreArmL",-.4,0,0),i.rot("upperArmR",-.3,0,-.5),i.rot("foreArmR",-1.3,0,0),i.rot("thighL",.05,0,.2),i.rot("shinL",.2,0,0),i.rot("thighR",-.3,0,-.15),i.rot("shinR",1.1,0,0),i.rot("footL",1.2,0,0),i.rot("footR",1.1,0,0)):(i.rot("hips",-.45,0,.05),i.rot("spine",.25,0,.08),i.rot("chest",.25,0,.1),i.rot("neck",.4,.3,.3),i.rot("head",.35,.2,.4),i.rot("jaw",.3,0,0),i.rot("thighL",-1.35,0,.25),i.rot("shinL",.6,0,0),i.rot("thighR",-1.3,0,-.2),i.rot("shinR",1.3,0,0),i.rot("footL",-.3,0,0),i.rot("upperArmL",.1,0,.25),i.rot("foreArmL",-.5,0,0),i.rot("upperArmR",-.2,0,-.3),i.rot("foreArmR",-1,0,0)),i.b.hips.position.set(0,0,0),Lo(i,t,n,e==="sit"?["hips","footL","footR","handL","handR"]:["hips","chest","head","shinL","shinR","footL","footR","handL","handR","foreArmL","foreArmR"],(e==="sit"?.06:.08)*r,!0),i}function Lo(s,t,e,n,i,r=!0){t.updateMatrixWorld(!0);let o=1/0;for(const a of n)s.b[a].getWorldPosition(nu),o=r?Math.min(o,nu.y):o;s.b.hips.position.y+=e+i-o,s.b.hips.updateMatrixWorld(!0)}function Yx(s){s.updateMatrixWorld(!0),s.skeleton.update();const t=s.geometry,e=t.attributes.position,n=new Float32Array(e.count*3),i=new R;for(let o=0;o<e.count;o++)i.fromBufferAttribute(e,o),s.applyBoneTransform(o,i),n[o*3]=i.x,n[o*3+1]=i.y,n[o*3+2]=i.z;const r=new Ae;return r.setAttribute("position",new De(n,3)),r.setAttribute("color",t.attributes.color),r.setAttribute("aSurf",t.attributes.aSurf),r.setIndex(t.index),r.computeVertexNormals(),r.computeBoundingSphere(),r}const Va={x:0,z:0};class Ga{constructor({id:t,type:e,body:n,animator:i,rng:r,behavior:o,nav:a,stations:l,radius:h}){this.id=t,this.type=e,this.body=n,this.anim=i,this.rng=r,this.behavior=o,this.nav=a,this.stations=l,this.radius=h??(e==="heavy"?.42:e==="crawler"?.45:.33),this.object=new en,this.object.name=`zombie-${e}-${t}`,this.object.add(n.mesh),n.mesh.castShadow=!0,n.mesh.receiveShadow=!0,this.pos=new R,this.yaw=0,this.speed=0,this.desiredSpeed=0,this.state="walk",this.timer=0,this.node=null,this.prevId=-1,this.target=new R,this.offset=new $(r.float(-.7,.7),r.float(-.7,.7)),this.lookYaw=0,this.lookPitch=0,this.lookTimer=0,this.action=null,this.station=null,this.avoidSide=r.sign(),this.time=r.float(0,50),this.burstTimer=r.float(0,2),this.bursting=!1,this.static=o!=="wander",this.stuck=0,this.lastPos=new R,this.style=i.s||{},this.travelled=0}place(t,e,n){this.pos.set(t,0,e),this.yaw=n,this.object.position.set(t,0,e),this.object.rotation.y=n,this.object.updateMatrixWorld(!0),this.anim.reset(this.pos,n),this.lastPos.copy(this.pos)}startWander(){this.node=this.nav.nearest(this.pos.x,this.pos.z),this.setTarget(this.node)}setTarget(t){this.node=t;let e=t.x+this.offset.x,n=t.z+this.offset.y;Pa(e,n,this.radius+.05)&&(e=t.x,n=t.z),this.target.set(e,0,n)}baseSpeed(){const t=this.style.nominalSpeed||.4;return this.type==="crawler"?.19*this.anim.speedFactor():this.style.burst?this.bursting?t:0:t*(.9+.2*Oe(this.time*.1,this.id,3))}step(t,e){if(this.time+=t,this.behavior!=="wander")return;const n=this.rng;if(this.timer-=t,this.action=null,this.state==="walk"){const i=this.target.x-this.pos.x,r=this.target.z-this.pos.z,o=Math.hypot(i,r);if(this.station?o<.25&&(this.state="action",this.timer=n.float(this.station.dur[0],this.station.dur[1])):o<.7&&this.arrive(e),this.style.burst&&(this.burstTimer-=t,this.burstTimer<=0&&(this.bursting=!this.bursting,this.burstTimer=this.bursting?n.float(1,2.6):n.float(.6,2),!this.bursting&&n.chance(.35)))){const a=this.nav.next(this.node,-1,n,!0);this.prevId=this.node.id,this.setTarget(a)}this.desiredSpeed=this.state==="walk"?this.baseSpeed():0,this.station&&o<1.2&&(this.desiredSpeed*=fe(o/1.2,.25,1)),this.steer(t,e)}else this.state==="pause"?(this.desiredSpeed=0,this.action=this.idleAction||null,this.steer(t,e,!0),this.timer<=0&&(this.state="walk")):this.state==="action"&&(this.desiredSpeed=0,this.action=this.station.action,this.turnToward(this.station.yaw,t,1.5),this.steer(t,e,!0),this.timer<=0&&!(this.station.sticky&&this.stickyOwner)?this.leaveStation():this.timer<=0&&(this.timer=n.float(this.station.dur[0],this.station.dur[1])));this.updateLook(t,e)}arrive(t){const e=this.rng;if(!this.station&&e.chance(.2)){const i=t.freeStationNear(this.pos,9);if(i){this.claimStation(i);return}}e.chance(this.type==="restless"?.1:.22)&&(this.state="pause",this.timer=e.float(1.5,5),this.idleAction=this.type!=="restless"&&e.chance(.35)?"sway":null,this.idleAction&&(this.timer=e.float(8,20)));const n=this.nav.next(this.node,this.prevId,e);this.prevId=this.node.id,this.setTarget(n)}claimStation(t,e=!1){t.owner=this,this.station=t,this.stickyOwner=e,this.target.set(t.x,0,t.z),this.state="walk"}leaveStation(){this.station.owner=null,this.station.cooldown=10,this.station=null,this.state="walk";const t=this.nav.nearest(this.pos.x,this.pos.z);this.prevId=-1,this.setTarget(this.nav.next(t,-1,this.rng))}turnToward(t,e,n){const i=ur(t-this.yaw),r=n*e;this.yaw+=fe(i,-r,r)}steer(t,e,n=!1){let i=0,r=0;if(!n){const d=this.target.x-this.pos.x,f=this.target.z-this.pos.z,g=Math.hypot(d,f)||1;i=d/g,r=f/g;const _=Math.min(1.4,g);if(Pa(this.pos.x+i*_,this.pos.z+r*_,this.radius)){let m=!1;for(const p of[.45,.9,1.35]){for(const y of[this.avoidSide,-this.avoidSide]){const v=Math.cos(p*y),x=Math.sin(p*y),E=i*v-r*x,b=i*x+r*v;if(!Pa(this.pos.x+E*_,this.pos.z+b*_,this.radius)){i=E,r=b,this.avoidSide=y,m=!0;break}}if(m)break}}}let o=0,a=0;for(const d of e.agents){if(d===this)continue;const f=this.pos.x-d.pos.x,g=this.pos.z-d.pos.z,_=this.radius+d.radius+.25,m=f*f+g*g;if(m<_*_&&m>1e-6){const p=Math.sqrt(m),y=(_-p)/_;o+=f/p*y,a+=g/p*y}}if(!n){const d=Math.atan2(i+o*.6,r+a*.6),f=this.style.turnRate||1.3;this.turnToward(d,t,f);const g=Math.abs(ur(d-this.yaw));this.desiredSpeed*=fe(1-g/1.4,.15,1)}const l=this.style.burst?4:1.2;this.speed+=fe(this.desiredSpeed-this.speed,-l*t*1.5,l*t),this.speed<.005&&this.desiredSpeed===0&&(this.speed=0);const h=Math.sin(this.yaw),c=Math.cos(this.yaw);this.pos.x+=h*this.speed*t+o*.5*t,this.pos.z+=c*this.speed*t+a*.5*t,Oo(this.pos.x,this.pos.z,this.radius,Va)&&(this.pos.x+=Va.x,this.pos.z+=Va.z),this.pos.x=fe(this.pos.x,so.minX+.6,so.maxX-.6),this.pos.z=fe(this.pos.z,so.minZ+.6,so.maxZ-.6);const u=Math.hypot(this.pos.x-this.lastPos.x,this.pos.z-this.lastPos.z);if(this.travelled+=u,!n&&this.desiredSpeed>.1&&u<this.desiredSpeed*t*.2?this.stuck+=t:this.stuck=Math.max(0,this.stuck-t),this.stuck>3)if(this.stuck=0,this.station)this.leaveStation();else{const d=this.nav.nearest(this.pos.x,this.pos.z);this.setTarget(this.nav.next(d,-1,this.rng,!0))}this.lastPos.copy(this.pos)}updateLook(t,e){if(this.lookTimer-=t,this.lookTimer>0)return;const n=this.rng,i=this.style.lookRate||.3,r=this.state!=="walk"||this.speed<.05,o=n.chance(.35)?e.pointOfInterest(this):null;if(o){const a=ur(Math.atan2(o.x-this.pos.x,o.z-this.pos.z)-this.yaw);this.lookYaw=fe(a,-1.1,1.1),this.lookPitch=n.float(-.1,.1)}else{const a=r?1.1:.35;this.lookYaw=n.float(-a,a),this.lookPitch=n.float(-.25,.15)}this.lookTimer=(r?n.float(.8,2.5):n.float(2,5))/(i*2.5+.2),(this.action==="paw"||this.action==="bang"||this.action==="peer")&&(this.lookYaw*=.2)}animate(t){this.behavior==="wander"&&(this.object.position.set(this.pos.x,0,this.pos.z),this.object.rotation.y=this.yaw),this.anim.update(t,{time:this.time,pos:this.pos,yaw:this.yaw,speed:this.speed,object:this.object,lookYaw:this.lookYaw,lookPitch:this.lookPitch,action:this.action})}}class qx{constructor(t){this.nodes=t.map((e,n)=>({id:n,x:e.x,z:e.z,tag:e.tag,edges:[]}))}build({clearance:t=.42,maxDist:e=9.5}={}){const n=this.nodes,i=[];for(let r=0;r<n.length;r++)for(let o=r+1;o<n.length;o++){const a=Math.hypot(n[r].x-n[o].x,n[r].z-n[o].z);a>e||a<.5||$1(n[r].x,n[r].z,n[o].x,n[o].z,t)&&i.push([r,o,a])}i.sort((r,o)=>r[2]-o[2]);for(const[r,o,a]of i){const l=n[r],h=n[o];let c=!1;for(const u of n){if(u===l||u===h)continue;const d=((u.x-l.x)*(h.x-l.x)+(u.z-l.z)*(h.z-l.z))/(a*a);if(d<=.05||d>=.95)continue;const f=l.x+(h.x-l.x)*d,g=l.z+(h.z-l.z)*d;if(Math.hypot(u.x-f,u.z-g)<1.2){c=!0;break}}c||(l.edges.push(o),h.edges.push(r))}return this.connected=this.nodes.filter(r=>r.edges.length>0),this}nearest(t,e,n){let i=null,r=1/0;for(const o of this.connected){if(n&&!n(o))continue;const a=(o.x-t)**2+(o.z-e)**2;a<r&&(r=a,i=o)}return i}next(t,e,n,i=!1){const r=t.edges.filter(o=>i||o!==e||t.edges.length===1);return this.nodes[n.pick(r.length?r:t.edges)]}edgeCount(){return this.nodes.reduce((t,e)=>t+e.edges.length,0)/2}}const jx=[{id:"alleyVictim",x:16.75,z:-12.35,yaw:0,pose:"back",role:"civilian",gutted:!0},{id:"sidewalk",x:-12.4,z:-5,yaw:-Math.PI*.62,pose:"front",role:"office"},{id:"checkpointCop",x:1.2,z:11.9,yaw:Math.PI*.85,pose:"back",role:"police"},{id:"soldier",x:-3.4,z:16.6,yaw:Math.PI,pose:"sit",role:"soldier"},{id:"courtyard",x:-21.6,z:24.4,yaw:.4,pose:"front",role:"nurse"}],iu=[{type:"shambler",mode:"kneel",x:15.9,z:-12.95,yaw:Math.PI*.5},{type:"gaunt",mode:"crouch",x:17.62,z:-13.15,yaw:-Math.PI*.5+.15}],su=[{type:"shambler",x:-32.2,z:5.1,yaw:Math.PI*.55,faceUp:!1},{type:"crawler",x:-27.5,z:19.5,yaw:-.6,faceUp:!0}],Zx=[{id:"dinerWindow",x:-15.2,z:-6.35,yaw:Math.PI,action:"paw",dur:[14,30],sticky:!0},{id:"dinerWindow2",x:-9.6,z:-6.35,yaw:Math.PI,action:"paw",dur:[8,16]},{id:"garageDoor",x:17.2,z:-26.2,yaw:Math.PI,action:"bang",dur:[12,25],sticky:!0},{id:"policeCar",x:7.6,z:-3,yaw:-2.2,action:"peer",dur:[8,16]},{id:"streetlightPool",x:24.2,z:3.6,yaw:-.4,action:"sway",dur:[10,22]},{id:"overBody",x:-12,z:-3.6,yaw:Math.PI*.9,action:"peer",dur:[6,12]},{id:"intersection",x:-.6,z:.9,yaw:2.4,action:"sway",dur:[8,15]},{id:"checkpoint",x:2.6,z:10.6,yaw:.2,action:"peer",dur:[6,12]},{id:"courtyardBody",x:-20.6,z:23,yaw:2.2,action:"peer",dur:[8,14]},{id:"vanDoors",x:-24.2,z:-.6,yaw:-Math.PI/2,action:"peer",dur:[6,12]}],Kx=[{type:"shambler",x:-15.2,z:-6.35,station:"dinerWindow"},{type:"shambler",x:17.2,z:-26.2,station:"garageDoor"},{type:"shambler",x:-2,z:-1.8},{type:"shambler",x:10,z:5.4},{type:"shambler",x:-22,z:1.8},{type:"shambler",x:5.4,z:24},{type:"shambler",x:-18.5,z:15},{type:"shambler",x:28,z:-5.4},{type:"shambler",x:-5.4,z:-24},{type:"heavy",x:1.8,z:6.5},{type:"heavy",x:-28,z:-5.4},{type:"heavy",x:22,z:20.5},{type:"heavy",x:11,z:-23.5},{type:"heavy",x:-26.5,z:22.5},{type:"gaunt",x:24.2,z:3.6,station:"streetlightPool"},{type:"gaunt",x:-10,z:5.4},{type:"gaunt",x:5.4,z:-12},{type:"gaunt",x:16,z:-1.8},{type:"gaunt",x:-1.8,z:24},{type:"restless",x:7.6,z:-3,station:"policeCar"},{type:"restless",x:-16,z:-1.8},{type:"restless",x:22,z:-5.4},{type:"restless",x:-5.4,z:12},{type:"restless",x:-24,z:-22},{type:"crawler",x:11,z:11},{type:"crawler",x:10,z:-1.8},{type:"crawler",x:-15,z:22.5},{type:"crawler",x:31,z:21}],xi=1/60;class $x{constructor(t){this.scene=t,this.group=new en,this.group.name="population",t.add(this.group),this.material=xx(),this.agents=[],this.corpses=[],this.stations=Zx.map(e=>({...e,owner:null,cooldown:0})),this.acc=0,this.simTime=0,this.seedCounter=100}buildCorpses(){for(const t of jx){const e=ka("corpse",this.seedCounter++,{role:t.role,gutted:t.gutted}),n=Ba(e.P,e.outfit,this.material),i=new en;i.position.set(t.x,0,t.z),i.rotation.y=t.yaw,i.add(n.mesh);const r=ce(t.x,t.z);Xx(n,i,t.pose,r);const o=Yx(n.mesh),a=new re(o,this.material);a.castShadow=!0,a.receiveShadow=!0,i.remove(n.mesh),n.mesh.geometry.dispose(),i.add(a),i.name=`corpse-${t.id}`,this.group.add(i),this.corpses.push(i);const l=t.pose==="sit"?.5:.95,h=t.pose==="sit"?.25:t.pose==="back"?-.45:.45;Cn(t.x+Math.sin(t.yaw)*h,t.z+Math.cos(t.yaw)*h,.38,l,t.yaw,"body")}for(const t of iu)vn(t.x,t.z,.45,"feeder");for(const t of su){const e=t.faceUp?-.45:.55;Cn(t.x+Math.sin(t.yaw)*e,t.z+Math.cos(t.yaw)*e,.4,1.05,t.yaw,"prone")}}buildNav(){this.nav=new qx(J1()).build()}makeAgent(t,e,n){const i=ka(t,this.seedCounter++),r=Ba(i.P,i.outfit,this.material);let o;return n==="kneel"?o=new Hx(r,e):n==="prone"?o=null:t==="crawler"?o=new Gx(r,e):o=new Vx(r,t,Bx(t,e),e),{spec:i,body:r,animator:o}}spawnAll(){let t=0;for(const e of Kx){const n=new Xe(1e3+t*17),{body:i,animator:r}=this.makeAgent(e.type,n,"wander"),o=new Ga({id:t++,type:e.type,body:i,animator:r,rng:n,behavior:"wander",nav:this.nav,stations:this.stations}),a=this.nav.nearest(e.x,e.z),l=e.station&&this.stations.find(h=>h.id===e.station);l?(o.place(l.x,l.z,l.yaw),o.startWander(),o.claimStation(l,!0),o.state="action",o.timer=n.float(l.dur[0],l.dur[1])):(o.place(a.x+o.offset.x*.5,a.z+o.offset.y*.5,n.float(-Math.PI,Math.PI)),o.startWander(),o.setTarget(this.nav.next(a,-1,n))),this.add(o)}for(const e of iu){const n=new Xe(5e3+t*13),i=e.mode==="kneel"?"kneel":"wander",{body:r,animator:o}=this.makeAgent(e.type,n,i),a=new Ga({id:t++,type:e.type,body:r,animator:o,rng:n,behavior:"feed",nav:this.nav,stations:this.stations});a.place(e.x,e.z,e.yaw),e.mode==="crouch"&&(a.action="crouchFeed"),a.feeding=!0,this.add(a)}for(const e of su){const n=new Xe(7e3+t*11),i=ka(e.type,this.seedCounter++),r=Ba(i.P,i.outfit,this.material),o=new Wx(r,n,e.faceUp),a=new Ga({id:t++,type:e.type,body:r,animator:o,rng:n,behavior:"prone",nav:this.nav,stations:this.stations});a.place(e.x,e.z,e.yaw),a.prone=!0,this.add(a)}}add(t){this.agents.push(t),this.group.add(t.object)}freeStationNear(t,e){const n=this.stations.filter(i=>!i.owner&&i.cooldown<=0&&Math.hypot(i.x-t.x,i.z-t.z)<e);return n.length?n[Math.floor(Math.random()*n.length)]:null}pointOfInterest(t){let e=null,n=64;for(const i of this.agents){if(i===t)continue;const r=(i.pos.x-t.pos.x)**2+(i.pos.z-t.pos.z)**2;r<n&&(n=r,e=i.pos)}return e}update(t){this.acc+=Math.min(t,.25);let e=0;for(;this.acc>=xi&&e<12;)this.stepSim(xi),this.acc-=xi,e++;e===12&&(this.acc=0);for(const n of this.agents)n.animate(Math.min(t,.1))}stepSim(t){this.simTime+=t;for(const e of this.stations)e.cooldown>0&&(e.cooldown-=t);for(const e of this.agents)e.step(t,this)}advance(t){const e=Math.round(t/xi);for(let n=0;n<e;n++)if(this.stepSim(xi),n%4===0)for(const i of this.agents)i.animate(xi*4)}diagnostics(){const t={maxPenetration:0,penetrating:0,minPairDist:1/0,overlappingPairs:0,travelled:{},positions:[]},e={x:0,z:0},n=this.agents.filter(i=>i.behavior==="wander");for(const i of n){if(Oo(i.pos.x,i.pos.z,i.radius*.6,e,r=>r.tag!=="bags")){const r=Math.hypot(e.x,e.z);t.maxPenetration=Math.max(t.maxPenetration,r),r>.05&&t.penetrating++}t.travelled[i.id]=+i.travelled.toFixed(2),t.positions.push([i.id,i.type,+i.pos.x.toFixed(2),+i.pos.z.toFixed(2),i.state,i.action||""])}for(let i=0;i<this.agents.length;i++)for(let r=i+1;r<this.agents.length;r++){const o=this.agents[i],a=this.agents[r];if(o.behavior!=="wander"&&a.behavior!=="wander")continue;const l=Math.hypot(o.pos.x-a.pos.x,o.pos.z-a.pos.z);t.minPairDist=Math.min(t.minPairDist,l),l<(o.radius+a.radius)*.6&&t.overlappingPairs++}return t}gaitDiagnostics(t=6){const e=this.agents.filter(g=>g.behavior==="wander"&&g.type!=="crawler"),n=this.agents.filter(g=>g.behavior==="wander"&&g.type==="crawler"),i=new R,r=new Map;let o=0,a=0,l=0,h=1/0,c=-1/0,u=0,d=0;const f=Math.round(t*60);for(let g=0;g<f;g++){this.stepSim(xi);for(const _ of this.agents)_.animate(xi);for(const _ of e){const m=_.anim.gait.limbs;for(let p=0;p<2;p++){_.body.bones[p===0?"footL":"footR"].getWorldPosition(i);const v=_.id*2+p,x=!m[p].swinging;if(x&&r.has(v)&&r.get(v).planted){const E=r.get(v),b=Math.hypot(i.x-E.x,i.z-E.z);o+=b,a=Math.max(a,b),l++;const T=i.y-ce(i.x,i.z)-_.anim.rig.layout.ankleY;h=Math.min(h,T),c=Math.max(c,T)}r.set(v,{x:i.x,z:i.z,planted:x})}}for(const _ of n){const m=_.anim.hands.limbs;for(let p=0;p<2;p++){_.body.bones[p===0?"handL":"handR"].getWorldPosition(i);const y=1e3+_.id*2+p,v=!m[p].swinging;if(v&&r.has(y)&&r.get(y).planted){const x=r.get(y);u+=Math.hypot(i.x-x.x,i.z-x.z),d++}r.set(y,{x:i.x,z:i.z,planted:v})}}}return{plantedFootSamples:l,meanPlantedDriftPerFrameMm:l?o/l*1e3:0,maxPlantedDriftPerFrameMm:a*1e3,soleHeightRangeCm:[h*100,c*100],crawlerPlantedHandDriftPerFrameMm:d?u/d*1e3:0}}summary(){const t={},e={};for(const n of this.agents){t[n.type]=(t[n.type]||0)+1;const i=n.behavior==="wander"?`${n.state}${n.action?":"+n.action:""}`:n.behavior;e[i]=(e[i]||0)+1}return{count:this.agents.length,corpses:this.corpses.length,types:t,behaviors:e,navNodes:this.nav.connected.length,navEdges:this.nav.edgeCount()}}}const Jx=new dt("#ffb36b"),Qx=new dt("#ffa65a");function tv(s,t,e,n,i){const r=s.y-t,o=new Uo(e,r,24,1,!0);o.translate(0,-r/2,0);const a=new We({transparent:!0,depthWrite:!1,blending:Rs,side:Ie,uniforms:{uColor:{value:new dt(n)},uH:{value:r},uStrength:{value:i}},vertexShader:`varying float vY; varying vec3 vN; varying vec3 vV;
      void main() { vY = -position.y; vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 uColor; uniform float uH; uniform float uStrength; varying float vY; varying vec3 vN; varying vec3 vV;
      void main() { float t = clamp(vY / uH, 0.0, 1.0); float edge = pow(abs(dot(vN, vV)), 1.5);
        float a = (1.0 - t) * (1.0 - t) * edge * uStrength; gl_FragColor = vec4(uColor * a, a); }`}),l=new re(o,a);return l.position.copy(s),l.renderOrder=4,l.name="lightCone",l}class ev{constructor(t,e,n){this.scene=t,this.dynamic=[],this.group=new en,this.group.name="lighting",t.add(this.group),this.hemi=new N0("#5d7096","#211c15",2),this.group.add(this.hemi);const i=new hh("#a3b8e0",2.4);i.position.set(-45,70,38),i.target.position.set(0,0,0),i.castShadow=!0,i.shadow.mapSize.set(2048,2048);const r=i.shadow.camera;r.left=-52,r.right=52,r.top=52,r.bottom=-52,r.near=20,r.far=180,i.shadow.bias=-4e-4,i.shadow.normalBias=.04,i.shadow.radius=3,this.moon=i,this.group.add(i,i.target);const o=new hh("#5d6f92",.45);o.position.set(40,30,-30),this.group.add(o);for(const h of e.lamps.filter(c=>c.pos&&c.state)){if(h.state==="dead")continue;const c=h.id==="pool",u=new va(Qx,h.id==="pool"?750:520,36,1,.6,2);u.position.copy(h.pos),u.target.position.set(h.pos.x,0,h.pos.z),c&&(u.castShadow=!0,u.shadow.mapSize.set(1024,1024),u.shadow.bias=-8e-4,u.shadow.normalBias=.03,u.shadow.camera.near=.5,u.shadow.camera.far=20),this.group.add(u,u.target);const d=tv(h.pos,0,3.2,"#ffb36b",.09);this.group.add(d),h.state==="flicker"&&this.dynamic.push({kind:"flicker",light:u,base:u.intensity,seed:3.1,depth:.9,cone:d})}const a=e.lamps.find(h=>h.mode==="flicker"&&h.f);if(a){const h=new R(a.cx,a.y,.35).applyMatrix4(a.f.m),c=new Ne({color:new dt(1,.8,.55).multiplyScalar(5)}),u=new re(new oi(.07,10,8),c);u.position.copy(h);const d=new re(new ri(.12,.05,.12,8,1,!0),n.metalDark);d.position.copy(h).add(new R(0,.08,0));const f=new re(new xn(.04,.04,.4),n.metalDark);f.position.copy(new R(a.cx,a.y+.1,.18).applyMatrix4(a.f.m)),f.quaternion.setFromRotationMatrix(a.f.m),this.group.add(u,d,f);const g=new va("#ffcf94",48,16,1.25,.75,2);g.position.copy(h).add(new R(0,-.05,0));const _=new R(0,0,1).applyMatrix4(new jt().extractRotation(a.f.m));g.target.position.copy(h).addScaledVector(_,1.6).setY(0),g.castShadow=!0,g.shadow.mapSize.set(1024,1024),g.shadow.bias=-6e-4,g.shadow.normalBias=.02,g.shadow.camera.near=.2,g.shadow.camera.far=14,this.group.add(g,g.target);const m=new Jn("#ffbf80",22,9,2);m.position.copy(h).addScaledVector(_,1.8).setY(3.6),this.group.add(m),this.dynamic.push({kind:"bulb",light:g,base:g.intensity,mat:c,baseColor:c.color.clone(),seed:7.7,extra:m,extraBase:m.intensity})}const l=e.lamps.find(h=>h.mode==="garage");if(l){const h=new R(l.cx,.9,-1).applyMatrix4(l.f.m),c=new Jn("#ffbd7a",30,10,2);c.position.copy(h),this.group.add(c),this.dynamic.push({kind:"flicker",light:c,base:c.intensity,seed:1.9,depth:.15})}if(e.litShops&&e.litShops.length){const h=new R;for(const u of e.litShops)h.add(new R(u.cx,1.8,-.8).applyMatrix4(u.f.m));h.divideScalar(e.litShops.length);const c=new Jn(Jx,95,16,2);c.position.copy(h),this.group.add(c),this.diner=c}if(e.flood){const h=new va("#cfdcff",150,26,.55,.6,2);h.position.copy(e.flood.pos),h.target.position.copy(e.flood.target),h.castShadow=!1,h.shadow.mapSize.set(1024,1024),h.shadow.bias=-6e-4,h.shadow.camera.near=.3,h.shadow.camera.far=24,this.group.add(h,h.target),this.dynamic.push({kind:"flicker",light:h,base:h.intensity,seed:11.3,depth:.08})}if(e.embers){const h=new Jn("#ff6a2a",12,7,2);h.position.copy(e.embers),this.group.add(h);const c=new re(new Sr(.26,12),new Ne({color:new dt(1,.35,.1).multiplyScalar(2.2)}));c.rotation.x=-Math.PI/2,c.position.copy(e.embers).add(new R(0,-.12,0)),this.group.add(c),this.dynamic.push({kind:"embers",light:h,base:h.intensity,mat:c.material,baseColor:c.material.color.clone(),seed:5.5})}if(e.signals&&e.signals.length){const h=n.amber,c=n.signalOff,u=new en,d=new R;for(const g of e.signals){const _=new re(g.geo,g.slot===1?h:c);u.add(_),g.slot===1&&(g.geo.computeBoundingSphere(),d.copy(g.geo.boundingSphere.center))}this.group.add(u);const f=new Jn("#ffa030",12,10,2);f.position.copy(d).add(new R(.4,0,0)),this.group.add(f),this.dynamic.push({kind:"blink",light:f,base:f.intensity,mat:h,baseColor:h.color.clone(),period:1.4,seed:0})}if(e.hazards&&e.hazards.length){const h=new Ne({color:new dt(1,.5,.1).multiplyScalar(3)});for(const d of e.hazards){const f=new re(new xn(.16,.08,.08),h);f.position.copy(d),this.group.add(f)}const c=e.hazards[0].clone().lerp(e.hazards[1],.5),u=new Jn("#ff9030",8,8,2);u.position.copy(c).add(new R(0,.3,0)),this.group.add(u),this.dynamic.push({kind:"blink",light:u,base:u.intensity,mat:h,baseColor:h.color.clone(),period:1.05,seed:.4})}for(const h of e.lamps.filter(c=>c.mode==="lantern")){const c=new Jn("#ffb060",7,7,2);c.position.copy(h.pos).add(new R(0,.3,0));const u=new re(new ri(.07,.08,.2,8),new Ne({color:new dt(1,.7,.35).multiplyScalar(3)}));u.position.copy(h.pos).add(new R(0,.1,0)),this.group.add(c,u),this.dynamic.push({kind:"embers",light:c,base:c.intensity,mat:u.material,baseColor:u.material.color.clone(),seed:9.1})}for(const h of(e.windowLights||[]).filter(c=>c.story)){const c=new R(h.cx,h.cy-.2,1.1).applyMatrix4(h.f.m);if(h.story==="tv"){const u=new Jn("#8fb2e0",26,15,2);u.position.copy(c),this.group.add(u),this.dynamic.push({kind:"tv",light:u,base:u.intensity,seed:4.4})}else{const u=new Jn("#ffb878",32,15,2);u.position.copy(c),this.group.add(u)}}this.neon=e.neon||[],this.time=0}update(t){this.time+=t;const e=this.time;for(const n of this.dynamic)if(n.kind==="flicker"){const i=Oe(e*2.3,n.seed,0),r=Oe(e*17,n.seed,3)>.25&&Oe(e*.6,n.seed,9)>.1?1:0,o=1-n.depth*(r*.85+Math.max(0,-i)*.3);n.light.intensity=n.base*o,n.cone&&(n.cone.material.uniforms.uStrength.value=.09*o)}else if(n.kind==="bulb"){const i=Oe(e*.45,n.seed,1)>.18,r=Oe(e*22,n.seed,2);let o=1;i&&(o=r>.1?.12:r>-.2?.55:1),o*=.92+Oe(e*4,n.seed,5)*.12,n.light.intensity=n.base*o,n.mat.color.copy(n.baseColor).multiplyScalar(.15+o*.85),n.extra&&(n.extra.intensity=n.extraBase*(.3+o*.7))}else if(n.kind==="embers"){const i=.65+Oe(e*3.1,n.seed,0)*.35+Oe(e*9,n.seed,1)*.15;n.light.intensity=n.base*i,n.mat.color.copy(n.baseColor).multiplyScalar(.6+i*.4)}else if(n.kind==="tv"){const i=Math.floor(e*1.7+Oe(e*.3,n.seed,0)*2),r=.45+.55*(.5+.5*Math.sin(i*12.9898));n.light.intensity=n.base*r*(.92+Oe(e*30,n.seed,1)*.08)}else if(n.kind==="blink"){const i=(e+n.seed)%n.period/n.period,r=i<.5?Math.min(1,i*12):Math.max(0,1-(i-.5)*10);n.light.intensity=n.base*r,n.mat.color.copy(n.baseColor).multiplyScalar(.06+r*.94)}for(const n of this.neon){const i=Oe(e*.8,21,0)>.3&&Oe(e*25,22,0)>0;n.mat.emissiveIntensity=i?n.base*.15:n.base*(.9+Oe(e*3,23,0)*.1)}}}const yo=new dt("#1a212c");function nv(s,t){s.fog=new Kl(yo,.0115),s.background=yo.clone();const e=new We({side:nn,depthWrite:!1,fog:!1,uniforms:{top:{value:new dt("#04060a")},horizon:{value:yo.clone()},glow:{value:new dt("#2a2220")}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform vec3 top; uniform vec3 horizon; uniform vec3 glow;
      varying vec3 vDir;
      void main() {
        float h = clamp(vDir.y, 0.0, 1.0);
        vec3 c = mix(horizon, top, pow(h, 0.45));
        c += glow * exp(-h * 12.0) * 0.6;
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`}),n=new re(new oi(300,32,16),e);n.name="sky",s.add(n);const i=new Dl(t),r=new Nu;r.background=new dt("#06080b");const o=(l,h,c,u)=>{const d=new re(new oe(u[0],u[1]),new Ne({color:new dt(l).multiplyScalar(h),side:Ie}));d.position.copy(c),d.lookAt(0,0,0),r.add(d)};o("#ffae60",2.2,new R(6,4,3),[1.5,.6]),o("#ffae60",1.8,new R(-7,4,-2),[1.2,.5]),o("#ffd2a0",1.2,new R(2,2,-8),[3,1.2]),o("#9ab4d8",.7,new R(0,10,0),[20,20]),o("#30384a",1,new R(0,3,9),[14,4]),o("#1a2028",1,new R(-9,3,4),[10,6]);const a=i.fromScene(r,.04);s.environment=a.texture,s.environmentIntensity=.55,i.dispose()}class iv{constructor(t,e=9e3){const n=new Ae,i=new Float32Array(e*2*3),r=new Float32Array(e*2);for(let a=0;a<e;a++){const l=Math.random()*90-45,h=Math.random()*40,c=Math.random()*90-45;for(let u=0;u<2;u++)i.set([l,h,c],(a*2+u)*3),r[a*2+u]=u}n.setAttribute("position",new De(i,3)),n.setAttribute("aEnd",new De(r,1)),this.uniforms={uTime:{value:0},uColor:{value:new dt("#8a9ab0")},fogColor:{value:yo},fogDensity:{value:.0115}};const o=new We({uniforms:this.uniforms,transparent:!0,depthWrite:!1,vertexShader:`
        attribute float aEnd;
        uniform float uTime;
        varying float vA;
        varying float vFog;
        void main() {
          vec3 p = position;
          float speed = 11.0 + fract(p.x * 13.1 + p.z * 7.7) * 4.0;
          p.y = mod(p.y - uTime * speed, 40.0);
          p.x += p.y * 0.04;
          p.y -= aEnd * 0.35;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          vA = (1.0 - aEnd * 0.9) * smoothstep(0.0, 2.0, p.y);
          vFog = exp(-0.0115 * 0.0115 * dot(mv.xyz, mv.xyz) * 6.0);
        }`,fragmentShader:`
        uniform vec3 uColor;
        varying float vA;
        varying float vFog;
        void main() {
          gl_FragColor = vec4(uColor, vA * 0.07 * vFog);
          #include <colorspace_fragment>
        }`});this.mesh=new Qf(n,o),this.mesh.frustumCulled=!1,this.mesh.name="rain",t.add(this.mesh)}update(t){this.uniforms.uTime.value+=t}}class sv{constructor(t){const e=document.createElement("canvas");e.width=e.height=256;const n=e.getContext("2d");n.fillStyle="#000",n.fillRect(0,0,256,256);for(let i=0;i<70;i++){const r=Math.random()*256,o=Math.random()*256,a=20+Math.random()*60;for(const l of[-256,0,256])for(const h of[-256,0,256]){const c=n.createRadialGradient(r+l,o+h,0,r+l,o+h,a);c.addColorStop(0,"rgba(255,255,255,0.22)"),c.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=c,n.fillRect(r+l-a,o+h-a,a*2,a*2)}}this.tex=new Zi(e),this.tex.wrapS=this.tex.wrapT=Ti,this.layers=[];for(const[i,r,o]of[[.35,.12,5],[1.1,.06,3.5]]){const a=this.tex.clone();a.repeat.set(o,o),a.needsUpdate=!0;const l=new re(new oe(84,76),new Ne({color:"#56637a",alphaMap:a,transparent:!0,opacity:r,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.y=i,l.renderOrder=3,l.name="mist",t.add(l),this.layers.push(a)}}update(t){this.layers[0].offset.x+=t*.004,this.layers[0].offset.y+=t*.0015,this.layers[1].offset.x-=t*.003}}const Mo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Gs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const rv=new sc(-1,1,1,-1,0,1);class ov extends Ae{constructor(){super(),this.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new le([0,2,0,0,2,0],2))}}const av=new ov;class lc{constructor(t){this._mesh=new re(av,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,rv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class hd extends Gs{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof We?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=xr.clone(t.uniforms),this.material=new We({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new lc(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ru extends Gs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class lv extends Gs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class cv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new $);this._width=n.width,this._height=n.height,e=new Rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Hn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hd(Mo),this.copyPass.material.blending=ii,this.clock=new Ju}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ru!==void 0&&(o instanceof ru?n=!0:o instanceof lv&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new $);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class hv extends Gs{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new dt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const uv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new dt(0)},defaultOpacity:{value:0}},vertexShader:`

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

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ks extends Gs{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new $(t.x,t.y):new $(256,256),this.clearColor=new dt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Rn(r,o,{type:Hn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){const u=new Rn(r,o,{type:Hn});u.texture.name="UnrealBloomPass.h"+c,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new Rn(r,o,{type:Hn});d.texture.name="UnrealBloomPass.v"+c,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=uv;this.highPassUniforms=xr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new We({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new $(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=xr.clone(Mo.uniforms),this.blendMaterial=new We({uniforms:this.copyUniforms,vertexShader:Mo.vertexShader,fragmentShader:Mo.fragmentShader,blending:Rs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new dt,this._oldClearAlpha=1,this._basic=new Ne,this._fsQuad=new lc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new $(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ks.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ks.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new We({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new $(.5,.5)},direction:{value:new $(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(t){return new We({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ks.BlurDirectionX=new $(1,0);ks.BlurDirectionY=new $(0,1);const ho={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class dv extends Gs{constructor(){super(),this.uniforms=xr.clone(ho.uniforms),this.material=new I0({name:ho.name,uniforms:this.uniforms,vertexShader:ho.vertexShader,fragmentShader:ho.fragmentShader}),this._fsQuad=new lc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},he.getTransfer(this._outputColorSpace)===me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===du?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===fu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===pu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ol?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===gu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===_u?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===mu&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const fv={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:.42},uGrain:{value:.035},uRes:{value:new $(1,1)}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime, uVignette, uGrain;
    uniform vec2 uRes;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec3 c = texture2D(tDiffuse, vUv).rgb;
      float l = dot(c, vec3(0.299, 0.587, 0.114));
      // split tone: cold shadows, slightly warm highlights, mild desaturation
      vec3 shadowTint = vec3(0.86, 0.95, 1.08);
      vec3 highTint = vec3(1.05, 1.0, 0.93);
      c *= mix(shadowTint, highTint, smoothstep(0.05, 0.6, l));
      c = mix(vec3(l), c, 0.86);
      // gentle toe lift so darks stay readable
      c = c + vec3(0.012, 0.014, 0.018) * (1.0 - smoothstep(0.0, 0.25, l));
      // vignette
      vec2 d = vUv - 0.5;
      d.x *= uRes.x / uRes.y;
      float v = smoothstep(0.95, 0.25, length(d));
      c *= mix(1.0 - uVignette, 1.0, v);
      // grain
      float g = hash(vUv * uRes + fract(uTime * 13.7) * 100.0) - 0.5;
      c += g * uGrain * (0.6 + 0.4 * (1.0 - l));
      gl_FragColor = vec4(c, 1.0);
    }`};function pv(s,t,e){const n=s.getDrawingBufferSize(new $),i=new Rn(n.x,n.y,{type:Hn,samples:4}),r=new cv(s,i);r.addPass(new hv(t,e));const o=new ks(new $(n.x/2,n.y/2),.38,.55,.92);r.addPass(o),r.addPass(new dv);const a=new hd(fv);return r.addPass(a),{composer:r,bloom:o,grade:a,setSize(l,h,c){r.setPixelRatio(c),r.setSize(l,h),a.uniforms.uRes.value.set(l*c,h*c)},render(l){a.uniforms.uTime.value+=l,r.render(l)}}}const ou={type:"change"},cc={type:"start"},ud={type:"end"},uo=new Io,au=new yi,mv=Math.cos(70*xo.DEG2RAD),Fe=new R,an=2*Math.PI,ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ha=1e-6;class gv extends V0{constructor(t,e=null){super(t,e),this.state=ve.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ws.ROTATE,MIDDLE:ws.DOLLY,RIGHT:ws.PAN},this.touches={ONE:Mi.ROTATE,TWO:Mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new sn,this._lastTargetPosition=new R,this._quat=new sn().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new uh,this._sphericalDelta=new uh,this._scale=1,this._panOffset=new R,this._rotateStart=new $,this._rotateEnd=new $,this._rotateDelta=new $,this._panStart=new $,this._panEnd=new $,this._panDelta=new $,this._dollyStart=new $,this._dollyEnd=new $,this._dollyDelta=new $,this._dollyDirection=new R,this._mouse=new $,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xv.bind(this),this._onPointerDown=_v.bind(this),this._onPointerUp=vv.bind(this),this._onContextMenu=Tv.bind(this),this._onMouseWheel=Sv.bind(this),this._onKeyDown=bv.bind(this),this._onTouchStart=wv.bind(this),this._onTouchMove=Ev.bind(this),this._onMouseDown=yv.bind(this),this._onMouseMove=Mv.bind(this),this._interceptControlDown=Av.bind(this),this._interceptControlUp=Rv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ou),this.update(),this.state=ve.NONE}update(t=null){const e=this.object.position;Fe.copy(e).sub(this.target),Fe.applyQuaternion(this._quat),this._spherical.setFromVector3(Fe),this.autoRotate&&this.state===ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),i<-Math.PI?i+=an:i>Math.PI&&(i-=an),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Fe.setFromSpherical(this._spherical),Fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Fe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const h=new R(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(a),this.object.updateMatrixWorld(),o=Fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(uo.origin.copy(this.object.position),uo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uo.direction))<mv?this.object.lookAt(this.target):(au.setFromNormalAndCoplanarPoint(this.object.up,this.target),uo.intersectPlane(au,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ha||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ha||this._lastTargetPosition.distanceToSquared(this.target)>Ha?(this.dispatchEvent(ou),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?an/60*this.autoRotateSpeed*t:an/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Fe.setFromMatrixColumn(e,0),Fe.multiplyScalar(-t),this._panOffset.add(Fe)}_panUp(t,e){this.screenSpacePanning===!0?Fe.setFromMatrixColumn(e,1):(Fe.setFromMatrixColumn(e,0),Fe.crossVectors(this.object.up,Fe)),Fe.multiplyScalar(t),this._panOffset.add(Fe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Fe.copy(i).sub(this.target);let r=Fe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new $,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function _v(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function xv(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function vv(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ud),this.state=ve.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function yv(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ws.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ve.DOLLY;break;case ws.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ve.ROTATE}break;case ws.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ve.PAN}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(cc)}function Mv(s){switch(this.state){case ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Sv(s){this.enabled===!1||this.enableZoom===!1||this.state!==ve.NONE||(s.preventDefault(),this.dispatchEvent(cc),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(ud))}function bv(s){this.enabled!==!1&&this._handleKeyDown(s)}function wv(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Mi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ve.TOUCH_ROTATE;break;case Mi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ve.TOUCH_PAN;break;default:this.state=ve.NONE}break;case 2:switch(this.touches.TWO){case Mi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ve.TOUCH_DOLLY_PAN;break;case Mi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ve.TOUCH_DOLLY_ROTATE;break;default:this.state=ve.NONE}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(cc)}function Ev(s){switch(this._trackPointer(s),this.state){case ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ve.NONE}}function Tv(s){this.enabled!==!1&&s.preventDefault()}function Av(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Rv(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Fl={overview:{pos:[11.5,20.5,22.5],target:[8.5,.4,-9]},opposite:{pos:[-14,30,-44],target:[0,1,2]},street:{pos:[-3.5,1.7,9.5],target:[8,1.5,-6]},feeding:{pos:[17.2,3.4,-6.4],target:[16.8,.6,-12.7]},aerial:{pos:[.5,70,22],target:[0,0,-1]},overviewPortrait:{pos:[13.5,33,30],target:[11.5,.4,-9.5]}};class Cv{constructor(t,e){this.camera=t,this.controls=new gv(t,e);const n=this.controls;n.enableDamping=!0,n.dampingFactor=.07,n.rotateSpeed=.55,n.zoomSpeed=.9,n.panSpeed=.75,n.screenSpacePanning=!1,n.minDistance=3,n.maxDistance=95,n.minPolarAngle=.12,n.maxPolarAngle=1.46,n.zoomToCursor=!0,n.touches={ONE:Mi.ROTATE,TWO:Mi.DOLLY_PAN},this.bounds={minX:-32,maxX:32,minZ:-29,maxZ:29,minY:.3,maxY:8},this.boxes=Ns.map(i=>({x0:i.x0-.35,x1:i.x1+.35,z0:i.z0-.35,z1:i.z1+.35,h:Z1(i)+.6})),this._dir=new R,this.setView("overview")}setView(t){const e=Fl[t]||Fl.overview;this.camera.position.set(...e.pos),this.controls.target.set(...e.target),this.controls.update()}set(t,e){this.camera.position.copy(t),this.controls.target.copy(e),this.controls.update()}inside(t){for(const e of this.boxes)if(t.x>e.x0&&t.x<e.x1&&t.z>e.z0&&t.z<e.z1&&t.y<e.h)return!0;return!1}update(){const t=this.controls,e=t.target,n=this.bounds,i=xo.clamp(e.x,n.minX,n.maxX),r=xo.clamp(e.z,n.minZ,n.maxZ),o=xo.clamp(e.y,n.minY,n.maxY);if(i!==e.x||o!==e.y||r!==e.z){const h=i-e.x,c=o-e.y,u=r-e.z;e.set(i,o,r),this.camera.position.x+=h,this.camera.position.y+=c,this.camera.position.z+=u}t.update();const a=this.camera.position,l=ce(a.x,a.z)+.45;if(a.y<l&&(a.y=l),this.inside(a)&&!this.inside(e)){this._dir.copy(a).sub(e);let h=0,c=1;for(let u=0;u<14;u++){const d=(h+c)/2,f=this._dir.clone().multiplyScalar(d).add(e);this.inside(f)?c=d:h=d}a.copy(this._dir.multiplyScalar(h).add(e))}}}class Pv{constructor(t){this.container=t,this.renderer=new w1({antialias:!1,powerPreference:"high-performance",stencil:!1}),this.renderer.outputColorSpace=He,this.renderer.toneMapping=Ol,this.renderer.toneMappingExposure=1.55,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=hu,this.renderer.info.autoReset=!1,this.pixelRatio=Math.min(window.devicePixelRatio||1,1.75),this.renderer.setPixelRatio(this.pixelRatio),t.appendChild(this.renderer.domElement),this.scene=new Nu,this.camera=new ln(38,1,.1,420),this.clock=new Ju,this.frameTimes=[],this.paused=!1}async init(t=()=>{}){const e=async(n,i)=>(t(n),await new Promise(r=>setTimeout(r,0)),i());this.materials=await e("materials",()=>V1()),nv(this.scene,this.renderer),this.city=await e("city",()=>fx(this.scene,this.materials)),this.population=new $x(this.scene),await e("bodies",()=>this.population.buildCorpses()),await e("navigation",()=>this.population.buildNav()),await e("zombies",()=>this.population.spawnAll()),this.lighting=new ev(this.scene,this.city.fx,this.materials),this.rain=new iv(this.scene),this.mist=new sv(this.scene),this.rig=new Cv(this.camera,this.renderer.domElement),this.post=pv(this.renderer,this.scene,this.camera),this.resize(),window.addEventListener("resize",()=>this.resize()),this.population.update(1/60),this.renderer.compile(this.scene,this.camera)}resize(){const t=this.container.clientWidth||window.innerWidth,e=this.container.clientHeight||window.innerHeight;this.camera.aspect=t/e,this.camera.fov=t/e<.8?52:38,this.camera.updateProjectionMatrix(),!this.framed&&this.rig&&(this.framed=!0,t/e<.8&&this.rig.setView("overviewPortrait")),this.renderer.setSize(t,e,!1),this.post.setSize(t,e,this.pixelRatio)}start(){this.renderer.setAnimationLoop(()=>this.frame())}frame(){const t=this.clock.getDelta(),e=Math.min(t,.1);this.frameTimes.push(t),this.frameTimes.length>120&&this.frameTimes.shift(),this.paused||(this.population.update(e),this.lighting.update(e),this.rain.update(e)),this.rig.update(),this.renderer.info.reset(),this.post.render(e),this.mist&&this.mist.update(e)}stats(){const t=this.frameTimes,e=t.reduce((i,r)=>i+r,0)/Math.max(1,t.length),n=this.renderer.info;return{fps:e>0?1/e:0,avgFrameMs:e*1e3,drawCalls:n.render.calls,triangles:n.render.triangles,geometries:n.memory.geometries,textures:n.memory.textures}}views(){return Object.keys(Fl)}}const Lv=document.getElementById("app"),lu=document.getElementById("fade"),gn=new Pv(Lv);gn.init().then(()=>{gn.start(),requestAnimationFrame(()=>lu&&lu.classList.add("done")),window.__diorama={app:gn,setView:s=>gn.rig.setView(s),setCamera:(s,t)=>{gn.rig.camera.position.set(s[0],s[1],s[2]),gn.rig.controls.target.set(t[0],t[1],t[2]),gn.rig.controls.update()},summary:()=>gn.population.summary(),diagnostics:()=>gn.population.diagnostics(),gait:s=>gn.population.gaitDiagnostics(s),advance:s=>gn.population.advance(s),stats:()=>gn.stats(),pause:s=>gn.paused=s},window.__ready=!0}).catch(s=>{console.error(s),window.__initError=String(s&&s.stack?s.stack:s)});

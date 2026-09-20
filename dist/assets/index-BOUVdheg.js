(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const fl="180",Xh=0,$l=1,Yh=2,gu=1,_u=2,ii=3,xi=0,un=1,ri=2,ai=0,dr=1,Zs=2,Jl=3,Zl=4,qh=5,Ni=100,Kh=101,$h=102,Jh=103,Zh=104,jh=200,Qh=201,ef=202,tf=203,pa=204,ma=205,nf=206,rf=207,sf=208,of=209,af=210,lf=211,cf=212,uf=213,hf=214,ga=0,_a=1,va=2,mr=3,xa=4,Ma=5,Sa=6,ya=7,vu=0,ff=1,df=2,vi=0,xu=1,Mu=2,Su=3,dl=4,yu=5,Eu=6,Tu=7,bu=300,gr=301,_r=302,Ea=303,Ta=304,fo=306,js=1e3,Fi=1001,ba=1002,Dn=1003,pf=1004,ms=1005,Gn=1006,wo=1007,Bi=1008,qn=1009,Au=1010,wu=1011,Zr=1012,pl=1013,zi=1014,si=1015,li=1016,ml=1017,gl=1018,jr=1020,Ru=35902,Cu=35899,Pu=1021,Iu=1022,Ln=1023,Qr=1026,es=1027,Lu=1028,_l=1029,Du=1030,vl=1031,xl=1033,Gs=33776,Vs=33777,Ws=33778,Xs=33779,Aa=35840,wa=35841,Ra=35842,Ca=35843,Pa=36196,Ia=37492,La=37496,Da=37808,Ua=37809,Na=37810,Oa=37811,Fa=37812,Ba=37813,za=37814,ka=37815,Ha=37816,Ga=37817,Va=37818,Wa=37819,Xa=37820,Ya=37821,qa=36492,Ka=36494,$a=36495,Ja=36283,Za=36284,ja=36285,Qa=36286,mf=3200,gf=3201,Uu=0,_f=1,_i="",_n="srgb",vr="srgb-linear",Qs="linear",ot="srgb",qi=7680,jl=519,vf=512,xf=513,Mf=514,Nu=515,Sf=516,yf=517,Ef=518,Tf=519,Ql=35044,ec="300 es",Vn=2e3,eo=2001;class Tr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tc=1234567;const Xr=Math.PI/180,xr=180/Math.PI;function Vi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function Ml(n,e){return(n%e+e)%e}function bf(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Af(n,e,t){return n!==e?(t-n)/(e-n):0}function Yr(n,e,t){return(1-t)*n+t*e}function wf(n,e,t,i){return Yr(n,e,1-Math.exp(-t*i))}function Rf(n,e=1){return e-Math.abs(Ml(n,e*2)-e)}function Cf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Pf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function If(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Lf(n,e){return n+Math.random()*(e-n)}function Df(n){return n*(.5-Math.random())}function Uf(n){n!==void 0&&(tc=n);let e=tc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nf(n){return n*Xr}function Of(n){return n*xr}function Ff(n){return(n&n-1)===0&&n!==0}function Bf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function zf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function kf(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*f,c*h,a*l);break;case"YZY":n.set(c*h,a*u,c*f,a*l);break;case"ZXZ":n.set(c*f,c*h,a*u,a*l);break;case"XZX":n.set(a*u,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*u,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function lr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function tn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Tt={DEG2RAD:Xr,RAD2DEG:xr,generateUUID:Vi,clamp:Qe,euclideanModulo:Ml,mapLinear:bf,inverseLerp:Af,lerp:Yr,damp:wf,pingpong:Rf,smoothstep:Cf,smootherstep:Pf,randInt:If,randFloat:Lf,randFloatSpread:Df,seededRandom:Uf,degToRad:Nf,radToDeg:Of,isPowerOfTwo:Ff,ceilPowerOfTwo:Bf,floorPowerOfTwo:zf,setQuaternionFromProperEuler:kf,normalize:tn,denormalize:lr};class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class br{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(f!==x||c!==h||l!==p||u!==g){let m=1-a;const d=c*h+l*p+u*g+f*x,b=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const w=Math.sqrt(y),A=Math.atan2(w,d*b);m=Math.sin(m*A)/w,a=Math.sin(a*A)/w}const v=a*b;if(c=c*m+h*v,l=l*m+p*v,u=u*m+g*v,f=f*m+x*v,m===1-a){const w=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=w,l*=w,u*=w,f*=w}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+c*p-l*h,e[t+1]=c*g+u*h+l*f-a*p,e[t+2]=l*g+u*p+a*h-c*f,e[t+3]=u*g-a*f-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),f=a(s/2),h=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"YZX":this._x=h*u*f+l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f-h*p*g;break;case"XZY":this._x=h*u*f-l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,i=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+c*l+o*f-a*u,this.y=i+c*u+a*l-s*f,this.z=r+c*f+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ro.copy(this).projectOnVector(e),this.sub(Ro)}reflect(e){return this.sub(Ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ro=new C,nc=new br;class Ze{constructor(e,t,i,r,s,o,a,c,l){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],x=r[0],m=r[3],d=r[6],b=r[1],y=r[4],v=r[7],w=r[2],A=r[5],P=r[8];return s[0]=o*x+a*b+c*w,s[3]=o*m+a*y+c*A,s[6]=o*d+a*v+c*P,s[1]=l*x+u*b+f*w,s[4]=l*m+u*y+f*A,s[7]=l*d+u*v+f*P,s[2]=h*x+p*b+g*w,s[5]=h*m+p*y+g*A,s[8]=h*d+p*v+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,h=a*c-u*s,p=l*s-o*c,g=t*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(r*l-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Co.makeScale(e,t)),this}rotate(e){return this.premultiply(Co.makeRotation(-e)),this}translate(e,t){return this.premultiply(Co.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Co=new Ze;function Ou(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function to(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hf(){const n=to("canvas");return n.style.display="block",n}const ic={};function ts(n){n in ic||(ic[n]=!0,console.warn(n))}function Gf(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const rc=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sc=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vf(){const n={enabled:!0,workingColorSpace:vr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ot&&(r.r=ci(r.r),r.g=ci(r.g),r.b=ci(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(r.r=pr(r.r),r.g=pr(r.g),r.b=pr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===_i?Qs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ts("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ts("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[vr]:{primaries:e,whitePoint:i,transfer:Qs,toXYZ:rc,fromXYZ:sc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:rc,fromXYZ:sc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),n}const it=Vf();function ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function pr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ki;class Wf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ki===void 0&&(Ki=to("canvas")),Ki.width=e.width,Ki.height=e.height;const r=Ki.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ki}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=to("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ci(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ci(t[i]/255)*255):t[i]=ci(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xf=0;class Sl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Po(r[o].image)):s.push(Po(r[o]))}else s=Po(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Po(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yf=0;const Io=new C;class sn extends Tr{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,i=Fi,r=Fi,s=Gn,o=Bi,a=Ln,c=qn,l=sn.DEFAULT_ANISOTROPY,u=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Vi(),this.name="",this.source=new Sl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Io).x}get height(){return this.source.getSize(Io).y}get depth(){return this.source.getSize(Io).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case js:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case js:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=bu;sn.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,i=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],p=c[5],g=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,v=(p+1)/2,w=(d+1)/2,A=(u+h)/4,P=(f+x)/4,L=(g+m)/4;return y>v&&y>w?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=P/i):v>w?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=A/r,s=L/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=P/s,r=L/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-x)/b,this.z=(h-u)/b,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qf extends Tr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new sn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Sl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends qf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Fu extends sn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kf extends sn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hs{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(s,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gs.copy(i.boundingBox)),gs.applyMatrix4(e.matrixWorld),this.union(gs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),_s.subVectors(this.max,Or),$i.subVectors(e.a,Or),Ji.subVectors(e.b,Or),Zi.subVectors(e.c,Or),hi.subVectors(Ji,$i),fi.subVectors(Zi,Ji),Ai.subVectors($i,Zi);let t=[0,-hi.z,hi.y,0,-fi.z,fi.y,0,-Ai.z,Ai.y,hi.z,0,-hi.x,fi.z,0,-fi.x,Ai.z,0,-Ai.x,-hi.y,hi.x,0,-fi.y,fi.x,0,-Ai.y,Ai.x,0];return!Lo(t,$i,Ji,Zi,_s)||(t=[1,0,0,0,1,0,0,0,1],!Lo(t,$i,Ji,Zi,_s))?!1:(vs.crossVectors(hi,fi),t=[vs.x,vs.y,vs.z],Lo(t,$i,Ji,Zi,_s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const jn=[new C,new C,new C,new C,new C,new C,new C,new C],Rn=new C,gs=new hs,$i=new C,Ji=new C,Zi=new C,hi=new C,fi=new C,Ai=new C,Or=new C,_s=new C,vs=new C,wi=new C;function Lo(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){wi.fromArray(n,s);const a=r.x*Math.abs(wi.x)+r.y*Math.abs(wi.y)+r.z*Math.abs(wi.z),c=e.dot(wi),l=t.dot(wi),u=i.dot(wi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const $f=new hs,Fr=new C,Do=new C;class po{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):$f.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);const t=Fr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Fr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Do.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(Do)),this.expandByPoint(Fr.copy(e.center).sub(Do))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Qn=new C,Uo=new C,xs=new C,di=new C,No=new C,Ms=new C,Oo=new C;class yl{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Uo.copy(e).add(t).multiplyScalar(.5),xs.copy(t).sub(e).normalize(),di.copy(this.origin).sub(Uo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(xs),a=di.dot(this.direction),c=-di.dot(xs),l=di.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*c-a,h=o*a-c,g=s*u,f>=0)if(h>=-g)if(h<=g){const x=1/u;f*=x,h*=x,p=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+h*(h+2*c)+l);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Uo).addScaledVector(xs,h),p}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),r=Qn.dot(Qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,i,r,s){No.subVectors(t,e),Ms.subVectors(i,e),Oo.crossVectors(No,Ms);let o=this.direction.dot(Oo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);const c=a*this.direction.dot(Ms.crossVectors(di,Ms));if(c<0)return null;const l=a*this.direction.dot(No.cross(di));if(l<0||c+l>o)return null;const u=-a*di.dot(Oo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,i,r,s,o,a,c,l,u,f,h,p,g,x,m){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,f,h,p,g,x,m)}set(e,t,i,r,s,o,a,c,l,u,f,h,p,g,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ji.setFromMatrixColumn(e,0).length(),s=1/ji.setFromMatrixColumn(e,1).length(),o=1/ji.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,x=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=p+g*l,t[5]=h-x*l,t[9]=-a*c,t[2]=x-h*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,p=c*f,g=l*u,x=l*f;t[0]=h+x*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=x+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,p=c*f,g=l*u,x=l*f;t[0]=h-x*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,x=a*f;t[0]=c*u,t[4]=g*l-p,t[8]=h*l+x,t[1]=c*f,t[5]=x*l+h,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*f+g,t[10]=h-x*f}else if(e.order==="XZY"){const h=o*c,p=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+x,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jf,e,Zf)}lookAt(e,t,i){const r=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),pi.crossVectors(i,mn),pi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),pi.crossVectors(i,mn)),pi.normalize(),Ss.crossVectors(mn,pi),r[0]=pi.x,r[4]=Ss.x,r[8]=mn.x,r[1]=pi.y,r[5]=Ss.y,r[9]=mn.y,r[2]=pi.z,r[6]=Ss.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],x=i[6],m=i[10],d=i[14],b=i[3],y=i[7],v=i[11],w=i[15],A=r[0],P=r[4],L=r[8],E=r[12],M=r[1],I=r[5],B=r[9],V=r[13],$=r[2],k=r[6],K=r[10],Q=r[14],X=r[3],pe=r[7],_e=r[11],be=r[15];return s[0]=o*A+a*M+c*$+l*X,s[4]=o*P+a*I+c*k+l*pe,s[8]=o*L+a*B+c*K+l*_e,s[12]=o*E+a*V+c*Q+l*be,s[1]=u*A+f*M+h*$+p*X,s[5]=u*P+f*I+h*k+p*pe,s[9]=u*L+f*B+h*K+p*_e,s[13]=u*E+f*V+h*Q+p*be,s[2]=g*A+x*M+m*$+d*X,s[6]=g*P+x*I+m*k+d*pe,s[10]=g*L+x*B+m*K+d*_e,s[14]=g*E+x*V+m*Q+d*be,s[3]=b*A+y*M+v*$+w*X,s[7]=b*P+y*I+v*k+w*pe,s[11]=b*L+y*B+v*K+w*_e,s[15]=b*E+y*V+v*Q+w*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15];return g*(+s*c*f-r*l*f-s*a*h+i*l*h+r*a*p-i*c*p)+x*(+t*c*p-t*l*h+s*o*h-r*o*p+r*l*u-s*c*u)+m*(+t*l*f-t*a*p-s*o*f+i*o*p+s*a*u-i*l*u)+d*(-r*a*u-t*c*f+t*a*h+r*o*f-i*o*h+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],b=f*m*l-x*h*l+x*c*p-a*m*p-f*c*d+a*h*d,y=g*h*l-u*m*l-g*c*p+o*m*p+u*c*d-o*h*d,v=u*x*l-g*f*l+g*a*p-o*x*p-u*a*d+o*f*d,w=g*f*c-u*x*c-g*a*h+o*x*h+u*a*m-o*f*m,A=t*b+i*y+r*v+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return e[0]=b*P,e[1]=(x*h*s-f*m*s-x*r*p+i*m*p+f*r*d-i*h*d)*P,e[2]=(a*m*s-x*c*s+x*r*l-i*m*l-a*r*d+i*c*d)*P,e[3]=(f*c*s-a*h*s-f*r*l+i*h*l+a*r*p-i*c*p)*P,e[4]=y*P,e[5]=(u*m*s-g*h*s+g*r*p-t*m*p-u*r*d+t*h*d)*P,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*d-t*c*d)*P,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*p+t*c*p)*P,e[8]=v*P,e[9]=(g*f*s-u*x*s-g*i*p+t*x*p+u*i*d-t*f*d)*P,e[10]=(o*x*s-g*a*s+g*i*l-t*x*l-o*i*d+t*a*d)*P,e[11]=(u*a*s-o*f*s-u*i*l+t*f*l+o*i*p-t*a*p)*P,e[12]=w*P,e[13]=(u*x*r-g*f*r+g*i*h-t*x*h-u*i*m+t*f*m)*P,e[14]=(g*a*r-o*x*r-g*i*c+t*x*c+o*i*m-t*a*m)*P,e[15]=(o*f*r-u*a*r+u*i*c-t*f*c-o*i*h+t*a*h)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,f=a+a,h=s*l,p=s*u,g=s*f,x=o*u,m=o*f,d=a*f,b=c*l,y=c*u,v=c*f,w=i.x,A=i.y,P=i.z;return r[0]=(1-(x+d))*w,r[1]=(p+v)*w,r[2]=(g-y)*w,r[3]=0,r[4]=(p-v)*A,r[5]=(1-(h+d))*A,r[6]=(m+b)*A,r[7]=0,r[8]=(g+y)*P,r[9]=(m-b)*P,r[10]=(1-(h+x))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ji.set(r[0],r[1],r[2]).length();const o=ji.set(r[4],r[5],r[6]).length(),a=ji.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const l=1/s,u=1/o,f=1/a;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=f,Cn.elements[9]*=f,Cn.elements[10]*=f,t.setFromRotationMatrix(Cn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Vn,c=!1){const l=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r);let g,x;if(c)g=s/(o-s),x=o*s/(o-s);else if(a===Vn)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===eo)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Vn,c=!1){const l=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,x;if(c)g=1/(o-s),x=o/(o-s);else if(a===Vn)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===eo)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ji=new C,Cn=new gt,Jf=new C(0,0,0),Zf=new C(1,1,1),pi=new C,Ss=new C,mn=new C,oc=new gt,ac=new br;class wn{constructor(e=0,t=0,i=0,r=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return oc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ac.setFromEuler(this),this.setFromQuaternion(ac,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class El{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jf=0;const lc=new C,Qi=new br,ei=new gt,ys=new C,Br=new C,Qf=new C,ed=new br,cc=new C(1,0,0),uc=new C(0,1,0),hc=new C(0,0,1),fc={type:"added"},td={type:"removed"},er={type:"childadded",child:null},Fo={type:"childremoved",child:null};class kt extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new C,t=new wn,i=new br,r=new C(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ze}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new El,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(cc,e)}rotateY(e){return this.rotateOnAxis(uc,e)}rotateZ(e){return this.rotateOnAxis(hc,e)}translateOnAxis(e,t){return lc.copy(e).applyQuaternion(this.quaternion),this.position.add(lc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cc,e)}translateY(e){return this.translateOnAxis(uc,e)}translateZ(e){return this.translateOnAxis(hc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ys.copy(e):ys.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Br,ys,this.up):ei.lookAt(ys,Br,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Qi.setFromRotationMatrix(ei),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fc),er.child=e,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(td),Fo.child=e,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fc),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,e,Qf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,ed,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new C(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new C,ti=new C,Bo=new C,ni=new C,tr=new C,nr=new C,dc=new C,zo=new C,ko=new C,Ho=new C,Go=new lt,Vo=new lt,Wo=new lt;class In{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Pn.subVectors(e,t),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Pn.subVectors(r,t),ti.subVectors(i,t),Bo.subVectors(e,t);const o=Pn.dot(Pn),a=Pn.dot(ti),c=Pn.dot(Bo),l=ti.dot(ti),u=ti.dot(Bo),f=o*l-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ni.x),c.addScaledVector(o,ni.y),c.addScaledVector(a,ni.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Go.setScalar(0),Vo.setScalar(0),Wo.setScalar(0),Go.fromBufferAttribute(e,t),Vo.fromBufferAttribute(e,i),Wo.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Go,s.x),o.addScaledVector(Vo,s.y),o.addScaledVector(Wo,s.z),o}static isFrontFacing(e,t,i,r){return Pn.subVectors(i,t),ti.subVectors(e,t),Pn.cross(ti).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Pn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return In.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;tr.subVectors(r,i),nr.subVectors(s,i),zo.subVectors(e,i);const c=tr.dot(zo),l=nr.dot(zo);if(c<=0&&l<=0)return t.copy(i);ko.subVectors(e,r);const u=tr.dot(ko),f=nr.dot(ko);if(u>=0&&f<=u)return t.copy(r);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(tr,o);Ho.subVectors(e,s);const p=tr.dot(Ho),g=nr.dot(Ho);if(g>=0&&p<=g)return t.copy(s);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(nr,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return dc.subVectors(s,r),a=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(dc,a);const d=1/(m+x+h);return o=x*d,a=h*d,t.copy(i).addScaledVector(tr,o).addScaledVector(nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},Es={h:0,s:0,l:0};function Xo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=it.workingColorSpace){if(e=Ml(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Xo(o,s,e+1/3),this.g=Xo(o,s,e),this.b=Xo(o,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=_n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_n){const i=Bu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return it.workingToColorSpace(Jt.copy(this),e),Math.round(Qe(Jt.r*255,0,255))*65536+Math.round(Qe(Jt.g*255,0,255))*256+Math.round(Qe(Jt.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Jt.copy(this),t);const i=Jt.r,r=Jt.g,s=Jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=_n){it.workingToColorSpace(Jt.copy(this),e);const t=Jt.r,i=Jt.g,r=Jt.b;return e!==_n?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(Es);const i=Yr(mi.h,Es.h,t),r=Yr(mi.s,Es.s,t),s=Yr(mi.l,Es.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new $e;$e.NAMES=Bu;let nd=0;class Ar extends Tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=dr,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pa,this.blendDst=ma,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pa&&(i.blendSrc=this.blendSrc),this.blendDst!==ma&&(i.blendDst=this.blendDst),this.blendEquation!==Ni&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==mr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wi extends Ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new C,Ts=new le;let id=0;class Nn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:id++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ql,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ts.fromBufferAttribute(this,t),Ts.applyMatrix3(e),this.setXY(t,Ts.x,Ts.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=lr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=lr(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=lr(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=lr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=lr(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ql&&(e.usage=this.usage),e}}class zu extends Nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ku extends Nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class _t extends Nn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let rd=0;const Tn=new gt,Yo=new kt,ir=new C,gn=new hs,zr=new hs,Bt=new C;class an extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ou(e)?ku:zu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,i){return Tn.makeTranslation(e,t,i),this.applyMatrix4(Tn),this}scale(e,t,i){return Tn.makeScale(e,t,i),this.applyMatrix4(Tn),this}lookAt(e){return Yo.lookAt(e),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _t(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(gn.min,zr.min),gn.expandByPoint(Bt),Bt.addVectors(gn.max,zr.max),gn.expandByPoint(Bt)):(gn.expandByPoint(zr.min),gn.expandByPoint(zr.max))}gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Bt.fromBufferAttribute(a,l),c&&(ir.fromBufferAttribute(e,l),Bt.add(ir)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<i.count;L++)a[L]=new C,c[L]=new C;const l=new C,u=new C,f=new C,h=new le,p=new le,g=new le,x=new C,m=new C;function d(L,E,M){l.fromBufferAttribute(i,L),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,L),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,M),u.sub(l),f.sub(l),p.sub(h),g.sub(h);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),a[L].add(x),a[E].add(x),a[M].add(x),c[L].add(m),c[E].add(m),c[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,E=b.length;L<E;++L){const M=b[L],I=M.start,B=M.count;for(let V=I,$=I+B;V<$;V+=3)d(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const y=new C,v=new C,w=new C,A=new C;function P(L){w.fromBufferAttribute(r,L),A.copy(w);const E=a[L];y.copy(E),y.sub(w.multiplyScalar(w.dot(E))).normalize(),v.crossVectors(A,E);const I=v.dot(c[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,I)}for(let L=0,E=b.length;L<E;++L){const M=b[L],I=M.start,B=M.count;for(let V=I,$=I+B;V<$;V+=3)P(e.getX(V+0)),P(e.getX(V+1)),P(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new C,s=new C,o=new C,a=new C,c=new C,l=new C,u=new C,f=new C;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*u;for(let d=0;d<u;d++)h[g++]=l[p++]}return new Nn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new an,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],p=e(h,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pc=new gt,Ri=new yl,bs=new po,mc=new C,As=new C,ws=new C,Rs=new C,qo=new C,Cs=new C,gc=new C,Ps=new C;class St extends kt{constructor(e=new an,t=new Wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Cs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(qo.fromBufferAttribute(f,e),o?Cs.addScaledVector(qo,u):Cs.addScaledVector(qo.sub(t),u))}t.add(Cs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bs.copy(i.boundingSphere),bs.applyMatrix4(s),Ri.copy(e.ray).recast(e.near),!(bs.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(bs,mc)===null||Ri.origin.distanceToSquared(mc)>(e.far-e.near)**2))&&(pc.copy(s).invert(),Ri.copy(e.ray).applyMatrix4(pc),!(i.boundingBox!==null&&Ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],d=o[m.materialIndex],b=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,w=y;v<w;v+=3){const A=a.getX(v),P=a.getX(v+1),L=a.getX(v+2);r=Is(this,d,e,i,l,u,f,A,P,L),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const b=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);r=Is(this,o,e,i,l,u,f,b,y,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],d=o[m.materialIndex],b=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,w=y;v<w;v+=3){const A=v,P=v+1,L=v+2;r=Is(this,d,e,i,l,u,f,A,P,L),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const b=m,y=m+1,v=m+2;r=Is(this,o,e,i,l,u,f,b,y,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function sd(n,e,t,i,r,s,o,a){let c;if(e.side===un?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===xi,a),c===null)return null;Ps.copy(a),Ps.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ps);return l<t.near||l>t.far?null:{distance:l,point:Ps.clone(),object:n}}function Is(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,As),n.getVertexPosition(c,ws),n.getVertexPosition(l,Rs);const u=sd(n,e,t,i,As,ws,Rs,gc);if(u){const f=new C;In.getBarycoord(gc,As,ws,Rs,f),r&&(u.uv=In.getInterpolatedAttribute(r,a,c,l,f,new le)),s&&(u.uv1=In.getInterpolatedAttribute(s,a,c,l,f,new le)),o&&(u.normal=In.getInterpolatedAttribute(o,a,c,l,f,new C),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new C,materialIndex:0};In.getNormal(As,ws,Rs,h.normal),u.face=h,u.barycoord=f}return u}class wr extends an{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(f,2));function g(x,m,d,b,y,v,w,A,P,L,E){const M=v/P,I=w/L,B=v/2,V=w/2,$=A/2,k=P+1,K=L+1;let Q=0,X=0;const pe=new C;for(let _e=0;_e<K;_e++){const be=_e*I-V;for(let Xe=0;Xe<k;Xe++){const z=Xe*M-B;pe[x]=z*b,pe[m]=be*y,pe[d]=$,l.push(pe.x,pe.y,pe.z),pe[x]=0,pe[m]=0,pe[d]=A>0?1:-1,u.push(pe.x,pe.y,pe.z),f.push(Xe/P),f.push(1-_e/L),Q+=1}}for(let _e=0;_e<L;_e++)for(let be=0;be<P;be++){const Xe=h+be+k*_e,z=h+be+k*(_e+1),ce=h+(be+1)+k*(_e+1),de=h+(be+1)+k*_e;c.push(Xe,z,de),c.push(z,ce,de),X+=6}a.addGroup(p,X,E),p+=X,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function nn(n){const e={};for(let t=0;t<n.length;t++){const i=Mr(n[t]);for(const r in i)e[r]=i[r]}return e}function od(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Hu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const ns={clone:Mr,merge:nn};var ad=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends Ar{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ad,this.fragmentShader=ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=od(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Gu extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gi=new C,_c=new le,vc=new le;class cn extends Gu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xr*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,_c,vc),t.subVectors(vc,_c)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rr=-90,sr=1;class cd extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new cn(rr,sr,e,t);r.layers=this.layers,this.add(r);const s=new cn(rr,sr,e,t);s.layers=this.layers,this.add(s);const o=new cn(rr,sr,e,t);o.layers=this.layers,this.add(o);const a=new cn(rr,sr,e,t);a.layers=this.layers,this.add(a);const c=new cn(rr,sr,e,t);c.layers=this.layers,this.add(c);const l=new cn(rr,sr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Vu extends sn{constructor(e=[],t=gr,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ud extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Vu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wr(5,5,5),s=new rn({name:"CubemapFromEquirect",uniforms:Mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:ai});s.uniforms.tEquirect.value=t;const o=new St(r,s),a=t.minFilter;return t.minFilter===Bi&&(t.minFilter=Gn),new cd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Yt extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hd={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),d=this._getHandJoint(l,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hd)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Yt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Tl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new $e(e),this.density=t}clone(){return new Tl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class fd extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $o=new C,dd=new C,pd=new Ze;class Li{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=$o.subVectors(i,t).cross(dd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta($o),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||pd.getNormalMatrix(e),r=this.coplanarPoint($o).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new po,md=new le(.5,.5),Ls=new C;class bl{constructor(e=new Li,t=new Li,i=new Li,r=new Li,s=new Li,o=new Li){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],f=s[5],h=s[6],p=s[7],g=s[8],x=s[9],m=s[10],d=s[11],b=s[12],y=s[13],v=s[14],w=s[15];if(r[0].setComponents(l-o,p-u,d-g,w-b).normalize(),r[1].setComponents(l+o,p+u,d+g,w+b).normalize(),r[2].setComponents(l+a,p+f,d+x,w+y).normalize(),r[3].setComponents(l-a,p-f,d-x,w-y).normalize(),i)r[4].setComponents(c,h,m,v).normalize(),r[5].setComponents(l-c,p-h,d-m,w-v).normalize();else if(r[4].setComponents(l-c,p-h,d-m,w-v).normalize(),t===Vn)r[5].setComponents(l+c,p+h,d+m,w+v).normalize();else if(t===eo)r[5].setComponents(c,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){Ci.center.set(0,0,0);const t=md.distanceTo(e.center);return Ci.radius=.7071067811865476+t,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ls.x=r.normal.x>0?e.max.x:e.min.x,Ls.y=r.normal.y>0?e.max.y:e.min.y,Ls.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wu extends Ar{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const no=new C,io=new C,xc=new gt,kr=new yl,Ds=new po,Jo=new C,Mc=new C;class gd extends kt{constructor(e=new an,t=new Wu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)no.fromBufferAttribute(t,r-1),io.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=no.distanceTo(io);e.setAttribute("lineDistance",new _t(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere),Ds.applyMatrix4(r),Ds.radius+=s,e.ray.intersectsSphere(Ds)===!1)return;xc.copy(r).invert(),kr.copy(e.ray).applyMatrix4(xc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){const d=u.getX(x),b=u.getX(x+1),y=Us(this,e,kr,c,d,b,x);y&&t.push(y)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(p),d=Us(this,e,kr,c,x,m,g-1);d&&t.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=l){const d=Us(this,e,kr,c,x,x+1,x);d&&t.push(d)}if(this.isLineLoop){const x=Us(this,e,kr,c,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Us(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(no.fromBufferAttribute(a,r),io.fromBufferAttribute(a,s),t.distanceSqToSegment(no,io,Jo,Mc)>i)return;Jo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Jo);if(!(l<e.near||l>e.far))return{distance:l,point:Mc.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Sc=new C,yc=new C;class _d extends gd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Sc.fromBufferAttribute(t,r),yc.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Sc.distanceTo(yc);e.setAttribute("lineDistance",new _t(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vd extends sn{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xu extends sn{constructor(e,t,i=zi,r,s,o,a=Dn,c=Dn,l,u=Qr,f=1){if(u!==Qr&&u!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Yu extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class mo extends an{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],p=[];let g=0;const x=[],m=i/2;let d=0;b(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new _t(f,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(p,2));function b(){const v=new C,w=new C;let A=0;const P=(t-e)/i;for(let L=0;L<=s;L++){const E=[],M=L/s,I=M*(t-e)+e;for(let B=0;B<=r;B++){const V=B/r,$=V*c+a,k=Math.sin($),K=Math.cos($);w.x=I*k,w.y=-M*i+m,w.z=I*K,f.push(w.x,w.y,w.z),v.set(k,P,K).normalize(),h.push(v.x,v.y,v.z),p.push(V,1-M),E.push(g++)}x.push(E)}for(let L=0;L<r;L++)for(let E=0;E<s;E++){const M=x[E][L],I=x[E+1][L],B=x[E+1][L+1],V=x[E][L+1];(e>0||E!==0)&&(u.push(M,I,V),A+=3),(t>0||E!==s-1)&&(u.push(I,B,V),A+=3)}l.addGroup(d,A,0),d+=A}function y(v){const w=g,A=new le,P=new C;let L=0;const E=v===!0?e:t,M=v===!0?1:-1;for(let B=1;B<=r;B++)f.push(0,m*M,0),h.push(0,M,0),p.push(.5,.5),g++;const I=g;for(let B=0;B<=r;B++){const $=B/r*c+a,k=Math.cos($),K=Math.sin($);P.x=E*K,P.y=m*M,P.z=E*k,f.push(P.x,P.y,P.z),h.push(0,M,0),A.x=k*.5+.5,A.y=K*.5*M+.5,p.push(A.x,A.y),g++}for(let B=0;B<r;B++){const V=w+B,$=I+B;v===!0?u.push($,$+1,V):u.push($+1,$,V),L+=3}l.addGroup(d,L,v===!0?1:2),d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Al extends mo{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Al(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class go extends an{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new _t(s,3)),this.setAttribute("normal",new _t(s.slice(),3)),this.setAttribute("uv",new _t(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const y=new C,v=new C,w=new C;for(let A=0;A<t.length;A+=3)p(t[A+0],y),p(t[A+1],v),p(t[A+2],w),c(y,v,w,b)}function c(b,y,v,w){const A=w+1,P=[];for(let L=0;L<=A;L++){P[L]=[];const E=b.clone().lerp(v,L/A),M=y.clone().lerp(v,L/A),I=A-L;for(let B=0;B<=I;B++)B===0&&L===A?P[L][B]=E:P[L][B]=E.clone().lerp(M,B/I)}for(let L=0;L<A;L++)for(let E=0;E<2*(A-L)-1;E++){const M=Math.floor(E/2);E%2===0?(h(P[L][M+1]),h(P[L+1][M]),h(P[L][M])):(h(P[L][M+1]),h(P[L+1][M+1]),h(P[L+1][M]))}}function l(b){const y=new C;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(b),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function u(){const b=new C;for(let y=0;y<s.length;y+=3){b.x=s[y+0],b.y=s[y+1],b.z=s[y+2];const v=m(b)/2/Math.PI+.5,w=d(b)/Math.PI+.5;o.push(v,1-w)}g(),f()}function f(){for(let b=0;b<o.length;b+=6){const y=o[b+0],v=o[b+2],w=o[b+4],A=Math.max(y,v,w),P=Math.min(y,v,w);A>.9&&P<.1&&(y<.2&&(o[b+0]+=1),v<.2&&(o[b+2]+=1),w<.2&&(o[b+4]+=1))}}function h(b){s.push(b.x,b.y,b.z)}function p(b,y){const v=b*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){const b=new C,y=new C,v=new C,w=new C,A=new le,P=new le,L=new le;for(let E=0,M=0;E<s.length;E+=9,M+=6){b.set(s[E+0],s[E+1],s[E+2]),y.set(s[E+3],s[E+4],s[E+5]),v.set(s[E+6],s[E+7],s[E+8]),A.set(o[M+0],o[M+1]),P.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),w.copy(b).add(y).add(v).divideScalar(3);const I=m(w);x(A,M+0,b,I),x(P,M+2,y,I),x(L,M+4,v,I)}}function x(b,y,v,w){w<0&&b.x===1&&(o[y]=b.x-1),v.x===0&&v.z===0&&(o[y]=w/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function d(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.vertices,e.indices,e.radius,e.details)}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new le:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new C,r=[],s=[],o=[],a=new C,c=new gt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new C)}s[0]=new C,o[0]=new C;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Qe(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Qe(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class wl extends Jn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new le){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,p=l-this.aY;c=h*u-p*f+this.aX,l=h*f+p*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class xd extends wl{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Rl(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,f){let h=(o-s)/l-(a-s)/(l+u)+(a-o)/u,p=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,p*=u,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Ns=new C,Zo=new Rl,jo=new Rl,Qo=new Rl;class Md extends Jn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new C){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(Ns.subVectors(r[0],r[1]).add(r[0]),l=Ns);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Ns.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ns),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Zo.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,x,m),jo.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,x,m),Qo.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Zo.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),jo.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),Qo.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return i.set(Zo.calc(c),jo.calc(c),Qo.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new C().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ec(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function Sd(n,e){const t=1-n;return t*t*e}function yd(n,e){return 2*(1-n)*n*e}function Ed(n,e){return n*n*e}function qr(n,e,t,i){return Sd(n,e)+yd(n,t)+Ed(n,i)}function Td(n,e){const t=1-n;return t*t*t*e}function bd(n,e){const t=1-n;return 3*t*t*n*e}function Ad(n,e){return 3*(1-n)*n*n*e}function wd(n,e){return n*n*n*e}function Kr(n,e,t,i,r){return Td(n,e)+bd(n,t)+Ad(n,i)+wd(n,r)}class qu extends Jn{constructor(e=new le,t=new le,i=new le,r=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new le){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Kr(e,r.x,s.x,o.x,a.x),Kr(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rd extends Jn{constructor(e=new C,t=new C,i=new C,r=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new C){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Kr(e,r.x,s.x,o.x,a.x),Kr(e,r.y,s.y,o.y,a.y),Kr(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ku extends Jn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cd extends Jn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $u extends Jn{constructor(e=new le,t=new le,i=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new le){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(qr(e,r.x,s.x,o.x),qr(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pd extends Jn{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(qr(e,r.x,s.x,o.x),qr(e,r.y,s.y,o.y),qr(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ju extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(Ec(a,c.x,l.x,u.x,f.x),Ec(a,c.y,l.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new le().fromArray(r))}return this}}var el=Object.freeze({__proto__:null,ArcCurve:xd,CatmullRomCurve3:Md,CubicBezierCurve:qu,CubicBezierCurve3:Rd,EllipseCurve:wl,LineCurve:Ku,LineCurve3:Cd,QuadraticBezierCurve:$u,QuadraticBezierCurve3:Pd,SplineCurve:Ju});class Id extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new el[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new el[r.type]().fromJSON(r))}return this}}class Tc extends Id{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Ku(this.currentPoint.clone(),new le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new $u(this.currentPoint.clone(),new le(e,t),new le(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new qu(this.currentPoint.clone(),new le(e,t),new le(i,r),new le(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Ju(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){const l=new wl(e,t,i,r,s,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Zu extends Tc{constructor(e){super(e),this.uuid=Vi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Tc().fromJSON(r))}return this}}function Ld(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=ju(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(i&&(s=Fd(n,e,s,t)),n.length>80*t){a=1/0,c=1/0;let u=-1/0,f=-1/0;for(let h=t;h<r;h+=t){const p=n[h],g=n[h+1];p<a&&(a=p),g<c&&(c=g),p>u&&(u=p),g>f&&(f=g)}l=Math.max(u-a,f-c),l=l!==0?32767/l:0}return is(s,o,t,a,c,l,0),o}function ju(n,e,t,i,r){let s;if(r===Kd(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=bc(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=bc(o/i|0,n[o],n[o+1],s);return s&&Sr(s,s.next)&&(ss(s),s=s.next),s}function ki(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Sr(t,t.next)||yt(t.prev,t,t.next)===0)){if(ss(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function is(n,e,t,i,r,s,o){if(!n)return;!o&&s&&Gd(n,i,r,s);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(s?Ud(n,i,r,s):Dd(n)){e.push(c.i,n.i,l.i),ss(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Nd(ki(n),e),is(n,e,t,i,r,s,2)):o===2&&Od(n,e,t,i,r,s):is(ki(n),e,t,i,r,s,1);break}}}function Dd(n){const e=n.prev,t=n,i=n.next;if(yt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,l=i.y,u=Math.min(r,s,o),f=Math.min(a,c,l),h=Math.max(r,s,o),p=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=p&&Gr(r,a,s,c,o,l,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ud(n,e,t,i){const r=n.prev,s=n,o=n.next;if(yt(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,u=r.y,f=s.y,h=o.y,p=Math.min(a,c,l),g=Math.min(u,f,h),x=Math.max(a,c,l),m=Math.max(u,f,h),d=tl(p,g,e,t,i),b=tl(x,m,e,t,i);let y=n.prevZ,v=n.nextZ;for(;y&&y.z>=d&&v&&v.z<=b;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Gr(a,u,c,f,l,h,y.x,y.y)&&yt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Gr(a,u,c,f,l,h,v.x,v.y)&&yt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=d;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&Gr(a,u,c,f,l,h,y.x,y.y)&&yt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=b;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Gr(a,u,c,f,l,h,v.x,v.y)&&yt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Nd(n,e){let t=n;do{const i=t.prev,r=t.next.next;!Sr(i,r)&&eh(i,t,t.next,r)&&rs(i,r)&&rs(r,i)&&(e.push(i.i,t.i,r.i),ss(t),ss(t.next),t=n=r),t=t.next}while(t!==n);return ki(t)}function Od(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Xd(o,a)){let c=th(o,a);o=ki(o,o.next),c=ki(c,c.next),is(o,e,t,i,r,s,0),is(c,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function Fd(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=ju(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push(Wd(l))}r.sort(Bd);for(let s=0;s<r.length;s++)t=zd(r[s],t);return t}function Bd(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function zd(n,e){const t=kd(n,e);if(!t)return e;const i=th(t,n);return ki(i,i.next),ki(t,t.next)}function kd(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(Sr(n,t))return t;do{if(Sr(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>s&&(s=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Qu(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)){const f=Math.abs(r-t.y)/(i-t.x);rs(t,n)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&Hd(o,t)))&&(o=t,u=f)}t=t.next}while(t!==a);return o}function Hd(n,e){return yt(n.prev,n,e.prev)<0&&yt(e.next,n,n.next)<0}function Gd(n,e,t,i){let r=n;do r.z===0&&(r.z=tl(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Vd(r)}function Vd(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function tl(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Wd(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Qu(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Gr(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&Qu(n,e,t,i,r,s,o,a)}function Xd(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Yd(n,e)&&(rs(n,e)&&rs(e,n)&&qd(n,e)&&(yt(n.prev,n,e.prev)||yt(n,e.prev,e))||Sr(n,e)&&yt(n.prev,n,n.next)>0&&yt(e.prev,e,e.next)>0)}function yt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Sr(n,e){return n.x===e.x&&n.y===e.y}function eh(n,e,t,i){const r=Fs(yt(n,e,t)),s=Fs(yt(n,e,i)),o=Fs(yt(t,i,n)),a=Fs(yt(t,i,e));return!!(r!==s&&o!==a||r===0&&Os(n,t,e)||s===0&&Os(n,i,e)||o===0&&Os(t,n,i)||a===0&&Os(t,e,i))}function Os(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Fs(n){return n>0?1:n<0?-1:0}function Yd(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&eh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function rs(n,e){return yt(n.prev,n,n.next)<0?yt(n,e,n.next)>=0&&yt(n,n.prev,e)>=0:yt(n,e,n.prev)<0||yt(n,n.next,e)<0}function qd(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function th(n,e){const t=nl(n.i,n.x,n.y),i=nl(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function bc(n,e,t,i){const r=nl(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ss(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function nl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Kd(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class $d{static triangulate(e,t,i=2){return Ld(e,t,i)}}class cr{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return cr.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Ac(e),wc(i,e);let o=e.length;t.forEach(Ac);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,wc(i,t[c]);const a=$d.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Ac(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function wc(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Cl extends an{constructor(e=new Zu([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new _t(r,3)),this.setAttribute("uv",new _t(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Jd;let y,v=!1,w,A,P,L;d&&(y=d.getSpacedPoints(u),v=!0,h=!1,w=d.computeFrenetFrames(u,!1),A=new C,P=new C,L=new C),h||(m=0,p=0,g=0,x=0);const E=a.extractPoints(l);let M=E.shape;const I=E.holes;if(!cr.isClockWise(M)){M=M.reverse();for(let ie=0,ee=I.length;ie<ee;ie++){const j=I[ie];cr.isClockWise(j)&&(I[ie]=j.reverse())}}function V(ie){const j=10000000000000001e-36;let Z=ie[0];for(let me=1;me<=ie.length;me++){const se=me%ie.length,ge=ie[se],qe=ge.x-Z.x,Ye=ge.y-Z.y,T=qe*qe+Ye*Ye,_=Math.max(Math.abs(ge.x),Math.abs(ge.y),Math.abs(Z.x),Math.abs(Z.y)),F=j*_*_;if(T<=F){ie.splice(se,1),me--;continue}Z=ge}}V(M),I.forEach(V);const $=I.length,k=M;for(let ie=0;ie<$;ie++){const ee=I[ie];M=M.concat(ee)}function K(ie,ee,j){return ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(ee,j)}const Q=M.length;function X(ie,ee,j){let Z,me,se;const ge=ie.x-ee.x,qe=ie.y-ee.y,Ye=j.x-ie.x,T=j.y-ie.y,_=ge*ge+qe*qe,F=ge*T-qe*Ye;if(Math.abs(F)>Number.EPSILON){const W=Math.sqrt(_),ne=Math.sqrt(Ye*Ye+T*T),Y=ee.x-qe/W,Ne=ee.y+ge/W,fe=j.x-T/ne,Le=j.y+Ye/ne,De=((fe-Y)*T-(Le-Ne)*Ye)/(ge*T-qe*Ye);Z=Y+ge*De-ie.x,me=Ne+qe*De-ie.y;const oe=Z*Z+me*me;if(oe<=2)return new le(Z,me);se=Math.sqrt(oe/2)}else{let W=!1;ge>Number.EPSILON?Ye>Number.EPSILON&&(W=!0):ge<-Number.EPSILON?Ye<-Number.EPSILON&&(W=!0):Math.sign(qe)===Math.sign(T)&&(W=!0),W?(Z=-qe,me=ge,se=Math.sqrt(_)):(Z=ge,me=qe,se=Math.sqrt(_/2))}return new le(Z/se,me/se)}const pe=[];for(let ie=0,ee=k.length,j=ee-1,Z=ie+1;ie<ee;ie++,j++,Z++)j===ee&&(j=0),Z===ee&&(Z=0),pe[ie]=X(k[ie],k[j],k[Z]);const _e=[];let be,Xe=pe.concat();for(let ie=0,ee=$;ie<ee;ie++){const j=I[ie];be=[];for(let Z=0,me=j.length,se=me-1,ge=Z+1;Z<me;Z++,se++,ge++)se===me&&(se=0),ge===me&&(ge=0),be[Z]=X(j[Z],j[se],j[ge]);_e.push(be),Xe=Xe.concat(be)}let z;if(m===0)z=cr.triangulateShape(k,I);else{const ie=[],ee=[];for(let j=0;j<m;j++){const Z=j/m,me=p*Math.cos(Z*Math.PI/2),se=g*Math.sin(Z*Math.PI/2)+x;for(let ge=0,qe=k.length;ge<qe;ge++){const Ye=K(k[ge],pe[ge],se);Ee(Ye.x,Ye.y,-me),Z===0&&ie.push(Ye)}for(let ge=0,qe=$;ge<qe;ge++){const Ye=I[ge];be=_e[ge];const T=[];for(let _=0,F=Ye.length;_<F;_++){const W=K(Ye[_],be[_],se);Ee(W.x,W.y,-me),Z===0&&T.push(W)}Z===0&&ee.push(T)}}z=cr.triangulateShape(ie,ee)}const ce=z.length,de=g+x;for(let ie=0;ie<Q;ie++){const ee=h?K(M[ie],Xe[ie],de):M[ie];v?(P.copy(w.normals[0]).multiplyScalar(ee.x),A.copy(w.binormals[0]).multiplyScalar(ee.y),L.copy(y[0]).add(P).add(A),Ee(L.x,L.y,L.z)):Ee(ee.x,ee.y,0)}for(let ie=1;ie<=u;ie++)for(let ee=0;ee<Q;ee++){const j=h?K(M[ee],Xe[ee],de):M[ee];v?(P.copy(w.normals[ie]).multiplyScalar(j.x),A.copy(w.binormals[ie]).multiplyScalar(j.y),L.copy(y[ie]).add(P).add(A),Ee(L.x,L.y,L.z)):Ee(j.x,j.y,f/u*ie)}for(let ie=m-1;ie>=0;ie--){const ee=ie/m,j=p*Math.cos(ee*Math.PI/2),Z=g*Math.sin(ee*Math.PI/2)+x;for(let me=0,se=k.length;me<se;me++){const ge=K(k[me],pe[me],Z);Ee(ge.x,ge.y,f+j)}for(let me=0,se=I.length;me<se;me++){const ge=I[me];be=_e[me];for(let qe=0,Ye=ge.length;qe<Ye;qe++){const T=K(ge[qe],be[qe],Z);v?Ee(T.x,T.y+y[u-1].y,y[u-1].x+j):Ee(T.x,T.y,f+j)}}}U(),q();function U(){const ie=r.length/3;if(h){let ee=0,j=Q*ee;for(let Z=0;Z<ce;Z++){const me=z[Z];we(me[2]+j,me[1]+j,me[0]+j)}ee=u+m*2,j=Q*ee;for(let Z=0;Z<ce;Z++){const me=z[Z];we(me[0]+j,me[1]+j,me[2]+j)}}else{for(let ee=0;ee<ce;ee++){const j=z[ee];we(j[2],j[1],j[0])}for(let ee=0;ee<ce;ee++){const j=z[ee];we(j[0]+Q*u,j[1]+Q*u,j[2]+Q*u)}}i.addGroup(ie,r.length/3-ie,0)}function q(){const ie=r.length/3;let ee=0;re(k,ee),ee+=k.length;for(let j=0,Z=I.length;j<Z;j++){const me=I[j];re(me,ee),ee+=me.length}i.addGroup(ie,r.length/3-ie,1)}function re(ie,ee){let j=ie.length;for(;--j>=0;){const Z=j;let me=j-1;me<0&&(me=ie.length-1);for(let se=0,ge=u+m*2;se<ge;se++){const qe=Q*se,Ye=Q*(se+1),T=ee+Z+qe,_=ee+me+qe,F=ee+me+Ye,W=ee+Z+Ye;tt(T,_,F,W)}}}function Ee(ie,ee,j){c.push(ie),c.push(ee),c.push(j)}function we(ie,ee,j){ht(ie),ht(ee),ht(j);const Z=r.length/3,me=b.generateTopUV(i,r,Z-3,Z-2,Z-1);R(me[0]),R(me[1]),R(me[2])}function tt(ie,ee,j,Z){ht(ie),ht(ee),ht(Z),ht(ee),ht(j),ht(Z);const me=r.length/3,se=b.generateSideWallUV(i,r,me-6,me-3,me-2,me-1);R(se[0]),R(se[1]),R(se[3]),R(se[1]),R(se[2]),R(se[3])}function ht(ie){r.push(c[ie*3+0]),r.push(c[ie*3+1]),r.push(c[ie*3+2])}function R(ie){s.push(ie.x),s.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Zd(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new el[r.type]().fromJSON(r)),new Cl(i,e.options)}}const Jd={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new le(s,o),new le(a,c),new le(l,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[r*3],p=e[r*3+1],g=e[r*3+2],x=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new le(o,1-c),new le(l,1-f),new le(h,1-g),new le(x,1-d)]:[new le(a,1-c),new le(u,1-f),new le(p,1-g),new le(m,1-d)]}};function Zd(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Pl extends go{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Pl(e.radius,e.detail)}}class _o extends go{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _o(e.radius,e.detail)}}class Rr extends an{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,f=e/a,h=t/c,p=[],g=[],x=[],m=[];for(let d=0;d<u;d++){const b=d*h-o;for(let y=0;y<l;y++){const v=y*f-s;g.push(v,-b,0),x.push(0,0,1),m.push(y/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let b=0;b<a;b++){const y=b+l*d,v=b+l*(d+1),w=b+1+l*(d+1),A=b+1+l*d;p.push(y,v,A),p.push(v,w,A)}this.setIndex(p),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(x,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.widthSegments,e.heightSegments)}}class ro extends an{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new C,h=new C,p=[],g=[],x=[],m=[];for(let d=0;d<=i;d++){const b=[],y=d/i;let v=0;d===0&&o===0?v=.5/t:d===i&&c===Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){const A=w/t;f.x=-e*Math.cos(r+A*s)*Math.sin(o+y*a),f.y=e*Math.cos(o+y*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+y*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(A+v,1-y),b.push(l++)}u.push(b)}for(let d=0;d<i;d++)for(let b=0;b<t;b++){const y=u[d][b+1],v=u[d][b],w=u[d+1][b],A=u[d+1][b+1];(d!==0||o>0)&&p.push(y,v,A),(d!==i-1||c<Math.PI)&&p.push(v,w,A)}this.setIndex(p),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(x,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vo extends an{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new C,f=new C,h=new C;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const x=g/r*s,m=p/i*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),h.subVectors(f,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/r),l.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const x=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,d=(r+1)*(p-1)+g,b=(r+1)*p+g;o.push(x,m,b),o.push(m,d,b)}this.setIndex(o),this.setAttribute("position",new _t(a,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class jd extends rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nh extends Ar{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uu,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qd extends nh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ep extends Ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tp extends Ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Il extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class np extends Il{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ea=new gt,Rc=new C,Cc=new C;class ih{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=qn,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bl,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Rc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rc),Cc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cc),t.updateMatrixWorld(),ea.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ea,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ea)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ip extends ih{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=xr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class rp extends Il{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new ip}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Pc=new gt,Hr=new C,ta=new C;class sp extends ih{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Hr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Hr),ta.copy(i.position),ta.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ta),i.updateMatrixWorld(),r.makeTranslation(-Hr.x,-Hr.y,-Hr.z),Pc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pc,i.coordinateSystem,i.reversedDepth)}}class Di extends Il{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new sp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class rh extends Gu{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class op extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ap{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ic=new gt;class sh{constructor(e,t,i=0,r=1/0){this.ray=new yl(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new El,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ic.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ic),this}intersectObject(e,t=!0,i=[]){return il(e,this,i,t),i.sort(Lc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)il(e[r],this,i,t);return i.sort(Lc),i}}function Lc(n,e){return n.distance-e.distance}function il(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)il(s[o],e,t,!0)}}function Dc(n,e,t,i){const r=lp(i);switch(t){case Pu:return n*e;case Lu:return n*e/r.components*r.byteLength;case _l:return n*e/r.components*r.byteLength;case Du:return n*e*2/r.components*r.byteLength;case vl:return n*e*2/r.components*r.byteLength;case Iu:return n*e*3/r.components*r.byteLength;case Ln:return n*e*4/r.components*r.byteLength;case xl:return n*e*4/r.components*r.byteLength;case Gs:case Vs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ws:case Xs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wa:case Ca:return Math.max(n,16)*Math.max(e,8)/4;case Aa:case Ra:return Math.max(n,8)*Math.max(e,8)/2;case Pa:case Ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case La:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ua:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Na:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ba:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case za:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ka:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ha:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Va:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Wa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Xa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ya:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case qa:case Ka:case $a:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ja:case Za:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ja:case Qa:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lp(n){switch(n){case qn:case Au:return{byteLength:1,components:1};case Zr:case wu:case li:return{byteLength:2,components:1};case ml:case gl:return{byteLength:2,components:4};case zi:case pl:case si:return{byteLength:4,components:1};case Ru:case Cu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fl);function oh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function cp(n){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,f=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const u=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const x=f[p];n.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var up=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hp=`#ifdef USE_ALPHAHASH
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
#endif`,fp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gp=`#ifdef USE_AOMAP
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
#endif`,_p=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vp=`#ifdef USE_BATCHING
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
#endif`,xp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ep=`#ifdef USE_IRIDESCENCE
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
#endif`,Tp=`#ifdef USE_BUMPMAP
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
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Dp=`#define PI 3.141592653589793
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
} // validated`,Up=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Np=`vec3 transformedNormal = objectNormal;
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
#endif`,Op=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wp=`#ifdef USE_ENVMAP
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
#endif`,Xp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$p=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zp=`#ifdef USE_GRADIENTMAP
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
}`,jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tm=`uniform bool receiveShadow;
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
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,am=`PhysicalMaterial material;
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
#endif`,lm=`struct PhysicalMaterial {
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
}`,cm=`
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
#endif`,um=`#if defined( RE_IndirectDiffuse )
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
#endif`,hm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xm=`#if defined( USE_POINTS_UV )
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
#endif`,Mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Em=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bm=`#ifdef USE_MORPHTARGETS
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
#endif`,Am=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lm=`#ifdef USE_NORMALMAP
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
#endif`,Dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Om=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,Ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Km=`float getShadowMask() {
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
}`,$m=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jm=`#ifdef USE_SKINNING
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
#endif`,Zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jm=`#ifdef USE_SKINNING
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
#endif`,Qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i0=`#ifdef USE_TRANSMISSION
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
#endif`,r0=`#ifdef USE_TRANSMISSION
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u0=`uniform sampler2D t2D;
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`#include <common>
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
}`,g0=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_0=`#define DISTANCE
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
}`,v0=`#define DISTANCE
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`uniform float scale;
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
}`,y0=`uniform vec3 diffuse;
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
}`,E0=`#include <common>
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
}`,T0=`uniform vec3 diffuse;
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
}`,b0=`#define LAMBERT
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
}`,A0=`#define LAMBERT
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
}`,w0=`#define MATCAP
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
}`,R0=`#define MATCAP
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
}`,C0=`#define NORMAL
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
}`,P0=`#define NORMAL
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
}`,I0=`#define PHONG
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
}`,L0=`#define PHONG
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
}`,D0=`#define STANDARD
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
}`,U0=`#define STANDARD
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
}`,N0=`#define TOON
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
}`,O0=`#define TOON
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
}`,F0=`uniform float size;
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
}`,B0=`uniform vec3 diffuse;
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
}`,z0=`#include <common>
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
}`,k0=`uniform vec3 color;
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
}`,H0=`uniform float rotation;
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
}`,G0=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:up,alphahash_pars_fragment:hp,alphamap_fragment:fp,alphamap_pars_fragment:dp,alphatest_fragment:pp,alphatest_pars_fragment:mp,aomap_fragment:gp,aomap_pars_fragment:_p,batching_pars_vertex:vp,batching_vertex:xp,begin_vertex:Mp,beginnormal_vertex:Sp,bsdfs:yp,iridescence_fragment:Ep,bumpmap_pars_fragment:Tp,clipping_planes_fragment:bp,clipping_planes_pars_fragment:Ap,clipping_planes_pars_vertex:wp,clipping_planes_vertex:Rp,color_fragment:Cp,color_pars_fragment:Pp,color_pars_vertex:Ip,color_vertex:Lp,common:Dp,cube_uv_reflection_fragment:Up,defaultnormal_vertex:Np,displacementmap_pars_vertex:Op,displacementmap_vertex:Fp,emissivemap_fragment:Bp,emissivemap_pars_fragment:zp,colorspace_fragment:kp,colorspace_pars_fragment:Hp,envmap_fragment:Gp,envmap_common_pars_fragment:Vp,envmap_pars_fragment:Wp,envmap_pars_vertex:Xp,envmap_physical_pars_fragment:nm,envmap_vertex:Yp,fog_vertex:qp,fog_pars_vertex:Kp,fog_fragment:$p,fog_pars_fragment:Jp,gradientmap_pars_fragment:Zp,lightmap_pars_fragment:jp,lights_lambert_fragment:Qp,lights_lambert_pars_fragment:em,lights_pars_begin:tm,lights_toon_fragment:im,lights_toon_pars_fragment:rm,lights_phong_fragment:sm,lights_phong_pars_fragment:om,lights_physical_fragment:am,lights_physical_pars_fragment:lm,lights_fragment_begin:cm,lights_fragment_maps:um,lights_fragment_end:hm,logdepthbuf_fragment:fm,logdepthbuf_pars_fragment:dm,logdepthbuf_pars_vertex:pm,logdepthbuf_vertex:mm,map_fragment:gm,map_pars_fragment:_m,map_particle_fragment:vm,map_particle_pars_fragment:xm,metalnessmap_fragment:Mm,metalnessmap_pars_fragment:Sm,morphinstance_vertex:ym,morphcolor_vertex:Em,morphnormal_vertex:Tm,morphtarget_pars_vertex:bm,morphtarget_vertex:Am,normal_fragment_begin:wm,normal_fragment_maps:Rm,normal_pars_fragment:Cm,normal_pars_vertex:Pm,normal_vertex:Im,normalmap_pars_fragment:Lm,clearcoat_normal_fragment_begin:Dm,clearcoat_normal_fragment_maps:Um,clearcoat_pars_fragment:Nm,iridescence_pars_fragment:Om,opaque_fragment:Fm,packing:Bm,premultiplied_alpha_fragment:zm,project_vertex:km,dithering_fragment:Hm,dithering_pars_fragment:Gm,roughnessmap_fragment:Vm,roughnessmap_pars_fragment:Wm,shadowmap_pars_fragment:Xm,shadowmap_pars_vertex:Ym,shadowmap_vertex:qm,shadowmask_pars_fragment:Km,skinbase_vertex:$m,skinning_pars_vertex:Jm,skinning_vertex:Zm,skinnormal_vertex:jm,specularmap_fragment:Qm,specularmap_pars_fragment:e0,tonemapping_fragment:t0,tonemapping_pars_fragment:n0,transmission_fragment:i0,transmission_pars_fragment:r0,uv_pars_fragment:s0,uv_pars_vertex:o0,uv_vertex:a0,worldpos_vertex:l0,background_vert:c0,background_frag:u0,backgroundCube_vert:h0,backgroundCube_frag:f0,cube_vert:d0,cube_frag:p0,depth_vert:m0,depth_frag:g0,distanceRGBA_vert:_0,distanceRGBA_frag:v0,equirect_vert:x0,equirect_frag:M0,linedashed_vert:S0,linedashed_frag:y0,meshbasic_vert:E0,meshbasic_frag:T0,meshlambert_vert:b0,meshlambert_frag:A0,meshmatcap_vert:w0,meshmatcap_frag:R0,meshnormal_vert:C0,meshnormal_frag:P0,meshphong_vert:I0,meshphong_frag:L0,meshphysical_vert:D0,meshphysical_frag:U0,meshtoon_vert:N0,meshtoon_frag:O0,points_vert:F0,points_frag:B0,shadow_vert:z0,shadow_frag:k0,sprite_vert:H0,sprite_frag:G0},Me={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},kn={basic:{uniforms:nn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:nn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new $e(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:nn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:nn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:nn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new $e(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:nn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:nn([Me.points,Me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:nn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:nn([Me.common,Me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:nn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:nn([Me.sprite,Me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:nn([Me.common,Me.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:nn([Me.lights,Me.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};kn.physical={uniforms:nn([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Bs={r:0,b:0,g:0},Pi=new wn,V0=new gt;function W0(n,e,t,i,r,s,o){const a=new $e(0);let c=s===!0?0:1,l,u,f=null,h=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function x(y){let v=!1;const w=g(y);w===null?d(a,c):w&&w.isColor&&(d(w,1),v=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,v){const w=g(v);w&&(w.isCubeTexture||w.mapping===fo)?(u===void 0&&(u=new St(new wr(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Mr(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Pi.copy(v.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(V0.makeRotationFromEuler(Pi)),u.material.toneMapped=it.getTransfer(w.colorSpace)!==ot,(f!==w||h!==w.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=w,h=w.version,p=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new St(new Rr(2,2),new rn({name:"BackgroundMaterial",uniforms:Mr(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=it.getTransfer(w.colorSpace)!==ot,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||h!==w.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,f=w,h=w.version,p=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function d(y,v){y.getRGB(Bs,Hu(n)),i.buffers.color.setClear(Bs.r,Bs.g,Bs.b,v,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,d(a,c)},render:x,addToRenderList:m,dispose:b}}function X0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,I,B,V,$){let k=!1;const K=f(V,B,I);s!==K&&(s=K,l(s.object)),k=p(M,V,B,$),k&&g(M,V,B,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(M,I,B,V),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,I,B){const V=B.wireframe===!0;let $=i[M.id];$===void 0&&($={},i[M.id]=$);let k=$[I.id];k===void 0&&(k={},$[I.id]=k);let K=k[V];return K===void 0&&(K=h(c()),k[V]=K),K}function h(M){const I=[],B=[],V=[];for(let $=0;$<t;$++)I[$]=0,B[$]=0,V[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:V,object:M,attributes:{},index:null}}function p(M,I,B,V){const $=s.attributes,k=I.attributes;let K=0;const Q=B.getAttributes();for(const X in Q)if(Q[X].location>=0){const _e=$[X];let be=k[X];if(be===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(be=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(be=M.instanceColor)),_e===void 0||_e.attribute!==be||be&&_e.data!==be.data)return!0;K++}return s.attributesNum!==K||s.index!==V}function g(M,I,B,V){const $={},k=I.attributes;let K=0;const Q=B.getAttributes();for(const X in Q)if(Q[X].location>=0){let _e=k[X];_e===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor));const be={};be.attribute=_e,_e&&_e.data&&(be.data=_e.data),$[X]=be,K++}s.attributes=$,s.attributesNum=K,s.index=V}function x(){const M=s.newAttributes;for(let I=0,B=M.length;I<B;I++)M[I]=0}function m(M){d(M,0)}function d(M,I){const B=s.newAttributes,V=s.enabledAttributes,$=s.attributeDivisors;B[M]=1,V[M]===0&&(n.enableVertexAttribArray(M),V[M]=1),$[M]!==I&&(n.vertexAttribDivisor(M,I),$[M]=I)}function b(){const M=s.newAttributes,I=s.enabledAttributes;for(let B=0,V=I.length;B<V;B++)I[B]!==M[B]&&(n.disableVertexAttribArray(B),I[B]=0)}function y(M,I,B,V,$,k,K){K===!0?n.vertexAttribIPointer(M,I,B,$,k):n.vertexAttribPointer(M,I,B,V,$,k)}function v(M,I,B,V){x();const $=V.attributes,k=B.getAttributes(),K=I.defaultAttributeValues;for(const Q in k){const X=k[Q];if(X.location>=0){let pe=$[Q];if(pe===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor)),pe!==void 0){const _e=pe.normalized,be=pe.itemSize,Xe=e.get(pe);if(Xe===void 0)continue;const z=Xe.buffer,ce=Xe.type,de=Xe.bytesPerElement,U=ce===n.INT||ce===n.UNSIGNED_INT||pe.gpuType===pl;if(pe.isInterleavedBufferAttribute){const q=pe.data,re=q.stride,Ee=pe.offset;if(q.isInstancedInterleavedBuffer){for(let we=0;we<X.locationSize;we++)d(X.location+we,q.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let we=0;we<X.locationSize;we++)m(X.location+we);n.bindBuffer(n.ARRAY_BUFFER,z);for(let we=0;we<X.locationSize;we++)y(X.location+we,be/X.locationSize,ce,_e,re*de,(Ee+be/X.locationSize*we)*de,U)}else{if(pe.isInstancedBufferAttribute){for(let q=0;q<X.locationSize;q++)d(X.location+q,pe.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let q=0;q<X.locationSize;q++)m(X.location+q);n.bindBuffer(n.ARRAY_BUFFER,z);for(let q=0;q<X.locationSize;q++)y(X.location+q,be/X.locationSize,ce,_e,be*de,be/X.locationSize*q*de,U)}}else if(K!==void 0){const _e=K[Q];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(X.location,_e);break;case 3:n.vertexAttrib3fv(X.location,_e);break;case 4:n.vertexAttrib4fv(X.location,_e);break;default:n.vertexAttrib1fv(X.location,_e)}}}}b()}function w(){L();for(const M in i){const I=i[M];for(const B in I){const V=I[B];for(const $ in V)u(V[$].object),delete V[$];delete I[B]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const I=i[M.id];for(const B in I){const V=I[B];for(const $ in V)u(V[$].object),delete V[$];delete I[B]}delete i[M.id]}function P(M){for(const I in i){const B=i[I];if(B[M.id]===void 0)continue;const V=B[M.id];for(const $ in V)u(V[$].object),delete V[$];delete B[M.id]}}function L(){E(),o=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function Y0(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,f){f!==0&&(n.drawArraysInstanced(i,l,u,f),t.update(u,i,f))}function a(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];t.update(p,i,1)}function c(l,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x]*h[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function q0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Ln&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const L=P===li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==qn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==si&&!L)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:w,maxSamples:A}}function K0(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Li,a=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const b=s?0:i,y=b*4;let v=d.clippingState||null;c.value=v,v=u(g,h,y,p);for(let w=0;w!==y;++w)v[w]=t[w];d.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const d=p+x*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,v=p;y!==x;++y,v+=4)o.copy(f[y]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function $0(n){let e=new WeakMap;function t(o,a){return a===Ea?o.mapping=gr:a===Ta&&(o.mapping=_r),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ea||a===Ta)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new ud(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ur=4,Uc=[.125,.215,.35,.446,.526,.582],Oi=20,na=new rh,Nc=new $e;let ia=null,ra=0,sa=0,oa=!1;const Ui=(1+Math.sqrt(5))/2,or=1/Ui,Oc=[new C(-Ui,or,0),new C(Ui,or,0),new C(-or,0,Ui),new C(or,0,Ui),new C(0,Ui,-or),new C(0,Ui,or),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],J0=new C;class Fc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=J0}=s;ia=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ia,ra,sa),this._renderer.xr.enabled=oa,e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gr||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ia=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:li,format:Ln,colorSpace:vr,depthBuffer:!1},r=Bc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z0(s)),this._blurMaterial=j0(s,e,t)}return r}_compileMaterial(e){const t=new St(this._lodPlanes[0],e);this._renderer.compile(t,na)}_sceneToCubeUV(e,t,i,r,s){const c=new cn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Nc),f.toneMapping=vi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const x=new Wi({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),m=new St(new wr,x);let d=!1;const b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,d=!0):(x.color.copy(Nc),d=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[y],s.y,s.z)):v===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[y]));const w=this._cubeSize;zs(r,v*w,y>2?w:0,w,w),f.setRenderTarget(r),d&&f.render(m,c),f.render(e,c)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===gr||e.mapping===_r;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;zs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,na)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Oc[(r-s-1)%Oc.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new St(this._lodPlanes[r],l),h=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Oi-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Oi;m>Oi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);const d=[];let b=0;for(let P=0;P<Oi;++P){const L=P/x,E=Math.exp(-L*L/2);d.push(E),P===0?b+=E:P<m&&(b+=2*E)}for(let P=0;P<d.length;P++)d[P]=d[P]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;const v=this._sizeLods[r],w=3*v*(r>y-ur?r-y+ur:0),A=4*(this._cubeSize-v);zs(t,w,A,3*v,2*v),c.setRenderTarget(t),c.render(f,na)}}function Z0(n){const e=[],t=[],i=[];let r=n;const s=n-ur+1+Uc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-ur?c=Uc[o-n+ur-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,x=3,m=2,d=1,b=new Float32Array(x*g*p),y=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let A=0;A<p;A++){const P=A%3*2/3-1,L=A>2?0:-1,E=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];b.set(E,x*g*A),y.set(h,m*g*A);const M=[A,A,A,A,A,A];v.set(M,d*g*A)}const w=new an;w.setAttribute("position",new Nn(b,x)),w.setAttribute("uv",new Nn(y,m)),w.setAttribute("faceIndex",new Nn(v,d)),e.push(w),r>ur&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Bc(n,e,t){const i=new Un(n,e,t);return i.texture.mapping=fo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function j0(n,e,t){const i=new Float32Array(Oi),r=new C(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ll(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function zc(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ll(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function kc(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Ll(){return`

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
	`}function Q0(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ea||c===Ta,u=c===gr||c===_r;if(l||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Fc(n)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Fc(n)),f=l?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function eg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ts("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function tg(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function l(f){const h=[],p=f.index,g=f.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let y=0,v=b.length;y<v;y+=3){const w=b[y+0],A=b[y+1],P=b[y+2];h.push(w,A,A,P,P,w)}}else if(g!==void 0){const b=g.array;x=g.version;for(let y=0,v=b.length/3-1;y<v;y+=3){const w=y+0,A=y+1,P=y+2;h.push(w,A,A,P,P,w)}}else return;const m=new(Ou(h)?ku:zu)(h,1);m.version=x;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function ng(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function l(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,h*o,g),t.update(p,i,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function f(h,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)l(h[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,g);let d=0;for(let b=0;b<g;b++)d+=p[b]*x[b];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function ig(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function rg(n,e,t){const i=new WeakMap,r=new lt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let M=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let w=a.attributes.position.count*v,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const P=new Float32Array(w*A*4*f),L=new Fu(P,w,A,f);L.type=si,L.needsUpdate=!0;const E=v*4;for(let I=0;I<f;I++){const B=d[I],V=b[I],$=y[I],k=w*A*4*I;for(let K=0;K<B.count;K++){const Q=K*E;g===!0&&(r.fromBufferAttribute(B,K),P[k+Q+0]=r.x,P[k+Q+1]=r.y,P[k+Q+2]=r.z,P[k+Q+3]=0),x===!0&&(r.fromBufferAttribute(V,K),P[k+Q+4]=r.x,P[k+Q+5]=r.y,P[k+Q+6]=r.z,P[k+Q+7]=0),m===!0&&(r.fromBufferAttribute($,K),P[k+Q+8]=r.x,P[k+Q+9]=r.y,P[k+Q+10]=r.z,P[k+Q+11]=$.itemSize===4?r.w:1)}}h={count:f,texture:L,size:new le(w,A)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function sg(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const ah=new sn,Hc=new Xu(1,1),lh=new Fu,ch=new Kf,uh=new Vu,Gc=[],Vc=[],Wc=new Float32Array(16),Xc=new Float32Array(9),Yc=new Float32Array(4);function Cr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Gc[r];if(s===void 0&&(s=new Float32Array(r),Gc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function xo(n,e){let t=Vc[e];t===void 0&&(t=new Int32Array(e),Vc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function og(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),Ft(t,e)}}function lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),Ft(t,e)}}function cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),Ft(t,e)}}function ug(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,i))return;Yc.set(i),n.uniformMatrix2fv(this.addr,!1,Yc),Ft(t,i)}}function hg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,i))return;Xc.set(i),n.uniformMatrix3fv(this.addr,!1,Xc),Ft(t,i)}}function fg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,i))return;Wc.set(i),n.uniformMatrix4fv(this.addr,!1,Wc),Ft(t,i)}}function dg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),Ft(t,e)}}function mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),Ft(t,e)}}function gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),Ft(t,e)}}function _g(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function vg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),Ft(t,e)}}function xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),Ft(t,e)}}function Mg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),Ft(t,e)}}function Sg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Hc.compareFunction=Nu,s=Hc):s=ah,t.setTexture2D(e||s,r)}function yg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ch,r)}function Eg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||uh,r)}function Tg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||lh,r)}function bg(n){switch(n){case 5126:return og;case 35664:return ag;case 35665:return lg;case 35666:return cg;case 35674:return ug;case 35675:return hg;case 35676:return fg;case 5124:case 35670:return dg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return _g;case 36294:return vg;case 36295:return xg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Tg}}function Ag(n,e){n.uniform1fv(this.addr,e)}function wg(n,e){const t=Cr(e,this.size,2);n.uniform2fv(this.addr,t)}function Rg(n,e){const t=Cr(e,this.size,3);n.uniform3fv(this.addr,t)}function Cg(n,e){const t=Cr(e,this.size,4);n.uniform4fv(this.addr,t)}function Pg(n,e){const t=Cr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ig(n,e){const t=Cr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Lg(n,e){const t=Cr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Dg(n,e){n.uniform1iv(this.addr,e)}function Ug(n,e){n.uniform2iv(this.addr,e)}function Ng(n,e){n.uniform3iv(this.addr,e)}function Og(n,e){n.uniform4iv(this.addr,e)}function Fg(n,e){n.uniform1uiv(this.addr,e)}function Bg(n,e){n.uniform2uiv(this.addr,e)}function zg(n,e){n.uniform3uiv(this.addr,e)}function kg(n,e){n.uniform4uiv(this.addr,e)}function Hg(n,e,t){const i=this.cache,r=e.length,s=xo(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ah,s[o])}function Gg(n,e,t){const i=this.cache,r=e.length,s=xo(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ch,s[o])}function Vg(n,e,t){const i=this.cache,r=e.length,s=xo(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||uh,s[o])}function Wg(n,e,t){const i=this.cache,r=e.length,s=xo(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||lh,s[o])}function Xg(n){switch(n){case 5126:return Ag;case 35664:return wg;case 35665:return Rg;case 35666:return Cg;case 35674:return Pg;case 35675:return Ig;case 35676:return Lg;case 5124:case 35670:return Dg;case 35667:case 35671:return Ug;case 35668:case 35672:return Ng;case 35669:case 35673:return Og;case 5125:return Fg;case 36294:return Bg;case 36295:return zg;case 36296:return kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Gg;case 35680:case 36300:case 36308:case 36293:return Vg;case 36289:case 36303:case 36311:case 36292:return Wg}}class Yg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=bg(t.type)}}class qg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xg(t.type)}}class Kg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const aa=/(\w+)(\])?(\[|\.)?/g;function qc(n,e){n.seq.push(e),n.map[e.id]=e}function $g(n,e,t){const i=n.name,r=i.length;for(aa.lastIndex=0;;){const s=aa.exec(i),o=aa.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){qc(t,l===void 0?new Yg(a,n,e):new qg(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Kg(a),qc(t,f)),t=f}}}class Ys{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);$g(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Kc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Jg=37297;let Zg=0;function jg(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const $c=new Ze;function Qg(n){it._getMatrix($c,it.workingColorSpace,n);const e=`mat3( ${$c.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case Qs:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Jc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+jg(n.getShaderSource(e),a)}else return s}function e_(n,e){const t=Qg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function t_(n,e){let t;switch(e){case xu:t="Linear";break;case Mu:t="Reinhard";break;case Su:t="Cineon";break;case dl:t="ACESFilmic";break;case Eu:t="AgX";break;case Tu:t="Neutral";break;case yu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ks=new C;function n_(){it.getLuminanceCoefficients(ks);const n=ks.x.toFixed(4),e=ks.y.toFixed(4),t=ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function r_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function s_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Vr(n){return n!==""}function Zc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const o_=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(n){return n.replace(o_,l_)}const a_=new Map;function l_(n,e){let t=je[e];if(t===void 0){const i=a_.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return rl(t)}const c_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qc(n){return n.replace(c_,u_)}function u_(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function eu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function h_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===gu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===_u?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function f_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case gr:case _r:e="ENVMAP_TYPE_CUBE";break;case fo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function d_(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===_r&&(e="ENVMAP_MODE_REFRACTION"),e}function p_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vu:e="ENVMAP_BLENDING_MULTIPLY";break;case ff:e="ENVMAP_BLENDING_MIX";break;case df:e="ENVMAP_BLENDING_ADD";break}return e}function m_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function g_(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=h_(t),l=f_(t),u=d_(t),f=p_(t),h=m_(t),p=i_(t),g=r_(s),x=r.createProgram();let m,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vr).join(`
`),d.length>0&&(d+=`
`)):(m=[eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),d=[eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?je.tonemapping_pars_fragment:"",t.toneMapping!==vi?t_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,e_("linearToOutputTexel",t.outputColorSpace),n_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vr).join(`
`)),o=rl(o),o=Zc(o,t),o=jc(o,t),a=rl(a),a=Zc(a,t),a=jc(a,t),o=Qc(o),a=Qc(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=b+m+o,v=b+d+a,w=Kc(r,r.VERTEX_SHADER,y),A=Kc(r,r.FRAGMENT_SHADER,v);r.attachShader(x,w),r.attachShader(x,A),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function P(I){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(x)||"",V=r.getShaderInfoLog(w)||"",$=r.getShaderInfoLog(A)||"",k=B.trim(),K=V.trim(),Q=$.trim();let X=!0,pe=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,w,A);else{const _e=Jc(r,w,"vertex"),be=Jc(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+_e+`
`+be)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(K===""||Q==="")&&(pe=!1);pe&&(I.diagnostics={runnable:X,programLog:k,vertexShader:{log:K,prefix:m},fragmentShader:{log:Q,prefix:d}})}r.deleteShader(w),r.deleteShader(A),L=new Ys(r,x),E=s_(r,x)}let L;this.getUniforms=function(){return L===void 0&&P(this),L};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,Jg)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=A,this}let __=0;class v_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new x_(e),t.set(e,i)),i}}class x_{constructor(e){this.id=__++,this.code=e,this.usedTimes=0}}function M_(n,e,t,i,r,s,o){const a=new El,c=new v_,l=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,I,B,V){const $=B.fog,k=V.geometry,K=E.isMeshStandardMaterial?B.environment:null,Q=(E.isMeshStandardMaterial?t:e).get(E.envMap||K),X=Q&&Q.mapping===fo?Q.image.height:null,pe=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const _e=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,be=_e!==void 0?_e.length:0;let Xe=0;k.morphAttributes.position!==void 0&&(Xe=1),k.morphAttributes.normal!==void 0&&(Xe=2),k.morphAttributes.color!==void 0&&(Xe=3);let z,ce,de,U;if(pe){const st=kn[pe];z=st.vertexShader,ce=st.fragmentShader}else z=E.vertexShader,ce=E.fragmentShader,c.update(E),de=c.getVertexShaderID(E),U=c.getFragmentShaderID(E);const q=n.getRenderTarget(),re=n.state.buffers.depth.getReversed(),Ee=V.isInstancedMesh===!0,we=V.isBatchedMesh===!0,tt=!!E.map,ht=!!E.matcap,R=!!Q,ie=!!E.aoMap,ee=!!E.lightMap,j=!!E.bumpMap,Z=!!E.normalMap,me=!!E.displacementMap,se=!!E.emissiveMap,ge=!!E.metalnessMap,qe=!!E.roughnessMap,Ye=E.anisotropy>0,T=E.clearcoat>0,_=E.dispersion>0,F=E.iridescence>0,W=E.sheen>0,ne=E.transmission>0,Y=Ye&&!!E.anisotropyMap,Ne=T&&!!E.clearcoatMap,fe=T&&!!E.clearcoatNormalMap,Le=T&&!!E.clearcoatRoughnessMap,De=F&&!!E.iridescenceMap,oe=F&&!!E.iridescenceThicknessMap,Te=W&&!!E.sheenColorMap,Ve=W&&!!E.sheenRoughnessMap,Oe=!!E.specularMap,Se=!!E.specularColorMap,Je=!!E.specularIntensityMap,D=ne&&!!E.transmissionMap,he=ne&&!!E.thicknessMap,ve=!!E.gradientMap,Ce=!!E.alphaMap,ae=E.alphaTest>0,te=!!E.alphaHash,Ue=!!E.extensions;let Ke=vi;E.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ke=n.toneMapping);const ft={shaderID:pe,shaderType:E.type,shaderName:E.name,vertexShader:z,fragmentShader:ce,defines:E.defines,customVertexShaderID:de,customFragmentShaderID:U,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:we,batchingColor:we&&V._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&V.instanceColor!==null,instancingMorph:Ee&&V.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:q===null?n.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:vr,alphaToCoverage:!!E.alphaToCoverage,map:tt,matcap:ht,envMap:R,envMapMode:R&&Q.mapping,envMapCubeUVHeight:X,aoMap:ie,lightMap:ee,bumpMap:j,normalMap:Z,displacementMap:h&&me,emissiveMap:se,normalMapObjectSpace:Z&&E.normalMapType===_f,normalMapTangentSpace:Z&&E.normalMapType===Uu,metalnessMap:ge,roughnessMap:qe,anisotropy:Ye,anisotropyMap:Y,clearcoat:T,clearcoatMap:Ne,clearcoatNormalMap:fe,clearcoatRoughnessMap:Le,dispersion:_,iridescence:F,iridescenceMap:De,iridescenceThicknessMap:oe,sheen:W,sheenColorMap:Te,sheenRoughnessMap:Ve,specularMap:Oe,specularColorMap:Se,specularIntensityMap:Je,transmission:ne,transmissionMap:D,thicknessMap:he,gradientMap:ve,opaque:E.transparent===!1&&E.blending===dr&&E.alphaToCoverage===!1,alphaMap:Ce,alphaTest:ae,alphaHash:te,combine:E.combine,mapUv:tt&&x(E.map.channel),aoMapUv:ie&&x(E.aoMap.channel),lightMapUv:ee&&x(E.lightMap.channel),bumpMapUv:j&&x(E.bumpMap.channel),normalMapUv:Z&&x(E.normalMap.channel),displacementMapUv:me&&x(E.displacementMap.channel),emissiveMapUv:se&&x(E.emissiveMap.channel),metalnessMapUv:ge&&x(E.metalnessMap.channel),roughnessMapUv:qe&&x(E.roughnessMap.channel),anisotropyMapUv:Y&&x(E.anisotropyMap.channel),clearcoatMapUv:Ne&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:fe&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&x(E.sheenRoughnessMap.channel),specularMapUv:Oe&&x(E.specularMap.channel),specularColorMapUv:Se&&x(E.specularColorMap.channel),specularIntensityMapUv:Je&&x(E.specularIntensityMap.channel),transmissionMapUv:D&&x(E.transmissionMap.channel),thicknessMapUv:he&&x(E.thicknessMap.channel),alphaMapUv:Ce&&x(E.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Z||Ye),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!k.attributes.uv&&(tt||Ce),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:re,skinning:V.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,decodeVideoTexture:tt&&E.map.isVideoTexture===!0&&it.getTransfer(E.map.colorSpace)===ot,decodeVideoTextureEmissive:se&&E.emissiveMap.isVideoTexture===!0&&it.getTransfer(E.emissiveMap.colorSpace)===ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ri,flipSided:E.side===un,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ue&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&E.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function d(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)M.push(I),M.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(b(M,E),y(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function b(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){const M=g[E.type];let I;if(M){const B=kn[M];I=ns.clone(B.uniforms)}else I=E.uniforms;return I}function w(E,M){let I;for(let B=0,V=u.length;B<V;B++){const $=u[B];if($.cacheKey===M){I=$,++I.usedTimes;break}}return I===void 0&&(I=new g_(n,M,E,s),u.push(I)),I}function A(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function P(E){c.remove(E)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:w,releaseProgram:A,releaseShaderCache:P,programs:u,dispose:L}}function S_(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function y_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function tu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function nu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,g,x,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=x,d.group=m),e++,d}function a(f,h,p,g,x,m){const d=o(f,h,p,g,x,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function c(f,h,p,g,x,m){const d=o(f,h,p,g,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function l(f,h){t.length>1&&t.sort(f||y_),i.length>1&&i.sort(h||tu),r.length>1&&r.sort(h||tu)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function E_(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new nu,n.set(i,[o])):r>=s.length?(o=new nu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function T_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new $e};break;case"SpotLight":t={position:new C,direction:new C,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function b_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let A_=0;function w_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function R_(n){const e=new T_,t=b_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new C);const r=new C,s=new gt,o=new gt;function a(l){let u=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,b=0,y=0,v=0,w=0,A=0,P=0;l.sort(w_);for(let E=0,M=l.length;E<M;E++){const I=l[E],B=I.color,V=I.intensity,$=I.distance,k=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=B.r*V,f+=B.g*V,h+=B.b*V;else if(I.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(I.sh.coefficients[K],V);P++}else if(I.isDirectionalLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Q=I.shadow,X=t.get(I);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=I.shadow.matrix,b++}i.directional[p]=K,p++}else if(I.isSpotLight){const K=e.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(B).multiplyScalar(V),K.distance=$,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,i.spot[x]=K;const Q=I.shadow;if(I.map&&(i.spotLightMap[w]=I.map,w++,Q.updateMatrices(I),I.castShadow&&A++),i.spotLightMatrix[x]=Q.matrix,I.castShadow){const X=t.get(I);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=k,v++}x++}else if(I.isRectAreaLight){const K=e.get(I);K.color.copy(B).multiplyScalar(V),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=K,m++}else if(I.isPointLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),K.distance=I.distance,K.decay=I.decay,I.castShadow){const Q=I.shadow,X=t.get(I);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,X.shadowCameraNear=Q.camera.near,X.shadowCameraFar=Q.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=I.shadow.matrix,y++}i.point[g]=K,g++}else if(I.isHemisphereLight){const K=e.get(I);K.skyColor.copy(I.color).multiplyScalar(V),K.groundColor.copy(I.groundColor).multiplyScalar(V),i.hemi[d]=K,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==d||L.numDirectionalShadows!==b||L.numPointShadows!==y||L.numSpotShadows!==v||L.numSpotMaps!==w||L.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+w-A,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,L.directionalLength=p,L.pointLength=g,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=d,L.numDirectionalShadows=b,L.numPointShadows=y,L.numSpotShadows=v,L.numSpotMaps=w,L.numLightProbes=P,i.version=A_++)}function c(l,u){let f=0,h=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let d=0,b=l.length;d<b;d++){const y=l[d];if(y.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(y.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const v=i.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function iu(n){const e=new R_(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function C_(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new iu(n),e.set(r,[a])):s>=o.length?(a=new iu(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const P_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I_=`uniform sampler2D shadow_pass;
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
}`;function L_(n,e,t){let i=new bl;const r=new le,s=new le,o=new lt,a=new ep({depthPacking:gf}),c=new tp,l={},u=t.maxTextureSize,f={[xi]:un,[un]:xi,[ri]:ri},h=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:P_,fragmentShader:I_}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new an;g.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new St(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gu;let d=this.type;this.render=function(A,P,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),B=n.state;B.setBlending(ai),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const V=d!==ii&&this.type===ii,$=d===ii&&this.type!==ii;for(let k=0,K=A.length;k<K;k++){const Q=A[k],X=Q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const pe=X.getFrameExtents();if(r.multiply(pe),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/pe.x),r.x=s.x*pe.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/pe.y),r.y=s.y*pe.y,X.mapSize.y=s.y)),X.map===null||V===!0||$===!0){const be=this.type!==ii?{minFilter:Dn,magFilter:Dn}:{};X.map!==null&&X.map.dispose(),X.map=new Un(r.x,r.y,be),X.map.texture.name=Q.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const _e=X.getViewportCount();for(let be=0;be<_e;be++){const Xe=X.getViewport(be);o.set(s.x*Xe.x,s.y*Xe.y,s.x*Xe.z,s.y*Xe.w),B.viewport(o),X.updateMatrices(Q,be),i=X.getFrustum(),v(P,L,X.camera,Q,this.type)}X.isPointLightShadow!==!0&&this.type===ii&&b(X,L),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(E,M,I)};function b(A,P){const L=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Un(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(P,null,L,h,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(P,null,L,p,x,null)}function y(A,P,L,E){let M=null;const I=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)M=I;else if(M=L.isPointLight===!0?c:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const B=M.uuid,V=P.uuid;let $=l[B];$===void 0&&($={},l[B]=$);let k=$[V];k===void 0&&(k=M.clone(),$[V]=k,P.addEventListener("dispose",w)),M=k}if(M.visible=P.visible,M.wireframe=P.wireframe,E===ii?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:f[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=n.properties.get(M);B.light=L}return M}function v(A,P,L,E,M){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===ii)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const V=e.update(A),$=A.material;if(Array.isArray($)){const k=V.groups;for(let K=0,Q=k.length;K<Q;K++){const X=k[K],pe=$[X.materialIndex];if(pe&&pe.visible){const _e=y(A,pe,E,M);A.onBeforeShadow(n,A,P,L,V,_e,X),n.renderBufferDirect(L,null,V,_e,A,X),A.onAfterShadow(n,A,P,L,V,_e,X)}}}else if($.visible){const k=y(A,$,E,M);A.onBeforeShadow(n,A,P,L,V,k,null),n.renderBufferDirect(L,null,V,k,A,null),A.onAfterShadow(n,A,P,L,V,k,null)}}const B=A.children;for(let V=0,$=B.length;V<$;V++)v(B[V],P,L,E,M)}function w(A){A.target.removeEventListener("dispose",w);for(const L in l){const E=l[L],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const D_={[ga]:_a,[va]:Sa,[xa]:ya,[mr]:Ma,[_a]:ga,[Sa]:va,[ya]:xa,[Ma]:mr};function U_(n,e){function t(){let D=!1;const he=new lt;let ve=null;const Ce=new lt(0,0,0,0);return{setMask:function(ae){ve!==ae&&!D&&(n.colorMask(ae,ae,ae,ae),ve=ae)},setLocked:function(ae){D=ae},setClear:function(ae,te,Ue,Ke,ft){ft===!0&&(ae*=Ke,te*=Ke,Ue*=Ke),he.set(ae,te,Ue,Ke),Ce.equals(he)===!1&&(n.clearColor(ae,te,Ue,Ke),Ce.copy(he))},reset:function(){D=!1,ve=null,Ce.set(-1,0,0,0)}}}function i(){let D=!1,he=!1,ve=null,Ce=null,ae=null;return{setReversed:function(te){if(he!==te){const Ue=e.get("EXT_clip_control");te?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),he=te;const Ke=ae;ae=null,this.setClear(Ke)}},getReversed:function(){return he},setTest:function(te){te?q(n.DEPTH_TEST):re(n.DEPTH_TEST)},setMask:function(te){ve!==te&&!D&&(n.depthMask(te),ve=te)},setFunc:function(te){if(he&&(te=D_[te]),Ce!==te){switch(te){case ga:n.depthFunc(n.NEVER);break;case _a:n.depthFunc(n.ALWAYS);break;case va:n.depthFunc(n.LESS);break;case mr:n.depthFunc(n.LEQUAL);break;case xa:n.depthFunc(n.EQUAL);break;case Ma:n.depthFunc(n.GEQUAL);break;case Sa:n.depthFunc(n.GREATER);break;case ya:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ce=te}},setLocked:function(te){D=te},setClear:function(te){ae!==te&&(he&&(te=1-te),n.clearDepth(te),ae=te)},reset:function(){D=!1,ve=null,Ce=null,ae=null,he=!1}}}function r(){let D=!1,he=null,ve=null,Ce=null,ae=null,te=null,Ue=null,Ke=null,ft=null;return{setTest:function(st){D||(st?q(n.STENCIL_TEST):re(n.STENCIL_TEST))},setMask:function(st){he!==st&&!D&&(n.stencilMask(st),he=st)},setFunc:function(st,Zn,Bn){(ve!==st||Ce!==Zn||ae!==Bn)&&(n.stencilFunc(st,Zn,Bn),ve=st,Ce=Zn,ae=Bn)},setOp:function(st,Zn,Bn){(te!==st||Ue!==Zn||Ke!==Bn)&&(n.stencilOp(st,Zn,Bn),te=st,Ue=Zn,Ke=Bn)},setLocked:function(st){D=st},setClear:function(st){ft!==st&&(n.clearStencil(st),ft=st)},reset:function(){D=!1,he=null,ve=null,Ce=null,ae=null,te=null,Ue=null,Ke=null,ft=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap;let u={},f={},h=new WeakMap,p=[],g=null,x=!1,m=null,d=null,b=null,y=null,v=null,w=null,A=null,P=new $e(0,0,0),L=0,E=!1,M=null,I=null,B=null,V=null,$=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Q=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),K=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),K=Q>=2);let pe=null,_e={};const be=n.getParameter(n.SCISSOR_BOX),Xe=n.getParameter(n.VIEWPORT),z=new lt().fromArray(be),ce=new lt().fromArray(Xe);function de(D,he,ve,Ce){const ae=new Uint8Array(4),te=n.createTexture();n.bindTexture(D,te),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<ve;Ue++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,Ce,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(he+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return te}const U={};U[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),U[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),U[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),q(n.DEPTH_TEST),o.setFunc(mr),j(!1),Z($l),q(n.CULL_FACE),ie(ai);function q(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function re(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function Ee(D,he){return f[D]!==he?(n.bindFramebuffer(D,he),f[D]=he,D===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=he),D===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=he),!0):!1}function we(D,he){let ve=p,Ce=!1;if(D){ve=h.get(he),ve===void 0&&(ve=[],h.set(he,ve));const ae=D.textures;if(ve.length!==ae.length||ve[0]!==n.COLOR_ATTACHMENT0){for(let te=0,Ue=ae.length;te<Ue;te++)ve[te]=n.COLOR_ATTACHMENT0+te;ve.length=ae.length,Ce=!0}}else ve[0]!==n.BACK&&(ve[0]=n.BACK,Ce=!0);Ce&&n.drawBuffers(ve)}function tt(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const ht={[Ni]:n.FUNC_ADD,[Kh]:n.FUNC_SUBTRACT,[$h]:n.FUNC_REVERSE_SUBTRACT};ht[Jh]=n.MIN,ht[Zh]=n.MAX;const R={[jh]:n.ZERO,[Qh]:n.ONE,[ef]:n.SRC_COLOR,[pa]:n.SRC_ALPHA,[af]:n.SRC_ALPHA_SATURATE,[sf]:n.DST_COLOR,[nf]:n.DST_ALPHA,[tf]:n.ONE_MINUS_SRC_COLOR,[ma]:n.ONE_MINUS_SRC_ALPHA,[of]:n.ONE_MINUS_DST_COLOR,[rf]:n.ONE_MINUS_DST_ALPHA,[lf]:n.CONSTANT_COLOR,[cf]:n.ONE_MINUS_CONSTANT_COLOR,[uf]:n.CONSTANT_ALPHA,[hf]:n.ONE_MINUS_CONSTANT_ALPHA};function ie(D,he,ve,Ce,ae,te,Ue,Ke,ft,st){if(D===ai){x===!0&&(re(n.BLEND),x=!1);return}if(x===!1&&(q(n.BLEND),x=!0),D!==qh){if(D!==m||st!==E){if((d!==Ni||v!==Ni)&&(n.blendEquation(n.FUNC_ADD),d=Ni,v=Ni),st)switch(D){case dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zs:n.blendFunc(n.ONE,n.ONE);break;case Jl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Jl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,y=null,w=null,A=null,P.set(0,0,0),L=0,m=D,E=st}return}ae=ae||he,te=te||ve,Ue=Ue||Ce,(he!==d||ae!==v)&&(n.blendEquationSeparate(ht[he],ht[ae]),d=he,v=ae),(ve!==b||Ce!==y||te!==w||Ue!==A)&&(n.blendFuncSeparate(R[ve],R[Ce],R[te],R[Ue]),b=ve,y=Ce,w=te,A=Ue),(Ke.equals(P)===!1||ft!==L)&&(n.blendColor(Ke.r,Ke.g,Ke.b,ft),P.copy(Ke),L=ft),m=D,E=!1}function ee(D,he){D.side===ri?re(n.CULL_FACE):q(n.CULL_FACE);let ve=D.side===un;he&&(ve=!ve),j(ve),D.blending===dr&&D.transparent===!1?ie(ai):ie(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const Ce=D.stencilWrite;a.setTest(Ce),Ce&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),se(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?q(n.SAMPLE_ALPHA_TO_COVERAGE):re(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(D){M!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),M=D)}function Z(D){D!==Xh?(q(n.CULL_FACE),D!==I&&(D===$l?n.cullFace(n.BACK):D===Yh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):re(n.CULL_FACE),I=D}function me(D){D!==B&&(K&&n.lineWidth(D),B=D)}function se(D,he,ve){D?(q(n.POLYGON_OFFSET_FILL),(V!==he||$!==ve)&&(n.polygonOffset(he,ve),V=he,$=ve)):re(n.POLYGON_OFFSET_FILL)}function ge(D){D?q(n.SCISSOR_TEST):re(n.SCISSOR_TEST)}function qe(D){D===void 0&&(D=n.TEXTURE0+k-1),pe!==D&&(n.activeTexture(D),pe=D)}function Ye(D,he,ve){ve===void 0&&(pe===null?ve=n.TEXTURE0+k-1:ve=pe);let Ce=_e[ve];Ce===void 0&&(Ce={type:void 0,texture:void 0},_e[ve]=Ce),(Ce.type!==D||Ce.texture!==he)&&(pe!==ve&&(n.activeTexture(ve),pe=ve),n.bindTexture(D,he||U[D]),Ce.type=D,Ce.texture=he)}function T(){const D=_e[pe];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{n.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{n.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{n.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{n.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{n.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{n.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{n.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(D){z.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),z.copy(D))}function Ve(D){ce.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ce.copy(D))}function Oe(D,he){let ve=l.get(he);ve===void 0&&(ve=new WeakMap,l.set(he,ve));let Ce=ve.get(D);Ce===void 0&&(Ce=n.getUniformBlockIndex(he,D.name),ve.set(D,Ce))}function Se(D,he){const Ce=l.get(he).get(D);c.get(he)!==Ce&&(n.uniformBlockBinding(he,Ce,D.__bindingPointIndex),c.set(he,Ce))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},pe=null,_e={},f={},h=new WeakMap,p=[],g=null,x=!1,m=null,d=null,b=null,y=null,v=null,w=null,A=null,P=new $e(0,0,0),L=0,E=!1,M=null,I=null,B=null,V=null,$=null,z.set(0,0,n.canvas.width,n.canvas.height),ce.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:q,disable:re,bindFramebuffer:Ee,drawBuffers:we,useProgram:tt,setBlending:ie,setMaterial:ee,setFlipSided:j,setCullFace:Z,setLineWidth:me,setPolygonOffset:se,setScissorTest:ge,activeTexture:qe,bindTexture:Ye,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:De,texImage3D:oe,updateUBOMapping:Oe,uniformBlockBinding:Se,texStorage2D:fe,texStorage3D:Le,texSubImage2D:W,texSubImage3D:ne,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ne,scissor:Te,viewport:Ve,reset:Je}}function N_(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new le,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return p?new OffscreenCanvas(T,_):to("canvas")}function x(T,_,F){let W=1;const ne=Ye(T);if((ne.width>F||ne.height>F)&&(W=F/Math.max(ne.width,ne.height)),W<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(W*ne.width),Ne=Math.floor(W*ne.height);f===void 0&&(f=g(Y,Ne));const fe=_?g(Y,Ne):f;return fe.width=Y,fe.height=Ne,fe.getContext("2d").drawImage(T,0,0,Y,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Y+"x"+Ne+")."),fe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){n.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(T,_,F,W,ne=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=_;if(_===n.RED&&(F===n.FLOAT&&(Y=n.R32F),F===n.HALF_FLOAT&&(Y=n.R16F),F===n.UNSIGNED_BYTE&&(Y=n.R8)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.R8UI),F===n.UNSIGNED_SHORT&&(Y=n.R16UI),F===n.UNSIGNED_INT&&(Y=n.R32UI),F===n.BYTE&&(Y=n.R8I),F===n.SHORT&&(Y=n.R16I),F===n.INT&&(Y=n.R32I)),_===n.RG&&(F===n.FLOAT&&(Y=n.RG32F),F===n.HALF_FLOAT&&(Y=n.RG16F),F===n.UNSIGNED_BYTE&&(Y=n.RG8)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RG8UI),F===n.UNSIGNED_SHORT&&(Y=n.RG16UI),F===n.UNSIGNED_INT&&(Y=n.RG32UI),F===n.BYTE&&(Y=n.RG8I),F===n.SHORT&&(Y=n.RG16I),F===n.INT&&(Y=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),F===n.UNSIGNED_INT&&(Y=n.RGB32UI),F===n.BYTE&&(Y=n.RGB8I),F===n.SHORT&&(Y=n.RGB16I),F===n.INT&&(Y=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),F===n.UNSIGNED_INT&&(Y=n.RGBA32UI),F===n.BYTE&&(Y=n.RGBA8I),F===n.SHORT&&(Y=n.RGBA16I),F===n.INT&&(Y=n.RGBA32I)),_===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),_===n.RGBA){const Ne=ne?Qs:it.getTransfer(W);F===n.FLOAT&&(Y=n.RGBA32F),F===n.HALF_FLOAT&&(Y=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Y=Ne===ot?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(T,_){let F;return T?_===null||_===zi||_===jr?F=n.DEPTH24_STENCIL8:_===si?F=n.DEPTH32F_STENCIL8:_===Zr&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===zi||_===jr?F=n.DEPTH_COMPONENT24:_===si?F=n.DEPTH_COMPONENT32F:_===Zr&&(F=n.DEPTH_COMPONENT16),F}function w(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Dn&&T.minFilter!==Gn?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function A(T){const _=T.target;_.removeEventListener("dispose",A),L(_),_.isVideoTexture&&u.delete(_)}function P(T){const _=T.target;_.removeEventListener("dispose",P),M(_)}function L(T){const _=i.get(T);if(_.__webglInit===void 0)return;const F=T.source,W=h.get(F);if(W){const ne=W[_.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&E(T),Object.keys(W).length===0&&h.delete(F)}i.remove(T)}function E(T){const _=i.get(T);n.deleteTexture(_.__webglTexture);const F=T.source,W=h.get(F);delete W[_.__cacheKey],o.memory.textures--}function M(T){const _=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let ne=0;ne<_.__webglFramebuffer[W].length;ne++)n.deleteFramebuffer(_.__webglFramebuffer[W][ne]);else n.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)n.deleteFramebuffer(_.__webglFramebuffer[W]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=T.textures;for(let W=0,ne=F.length;W<ne;W++){const Y=i.get(F[W]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(F[W])}i.remove(T)}let I=0;function B(){I=0}function V(){const T=I;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),I+=1,T}function $(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function k(T,_){const F=i.get(T);if(T.isVideoTexture&&ge(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){const W=T.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(F,T,_);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function K(T,_){const F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){U(F,T,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function Q(T,_){const F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){U(F,T,_);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function X(T,_){const F=i.get(T);if(T.version>0&&F.__version!==T.version){q(F,T,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}const pe={[js]:n.REPEAT,[Fi]:n.CLAMP_TO_EDGE,[ba]:n.MIRRORED_REPEAT},_e={[Dn]:n.NEAREST,[pf]:n.NEAREST_MIPMAP_NEAREST,[ms]:n.NEAREST_MIPMAP_LINEAR,[Gn]:n.LINEAR,[wo]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},be={[vf]:n.NEVER,[Tf]:n.ALWAYS,[xf]:n.LESS,[Nu]:n.LEQUAL,[Mf]:n.EQUAL,[Ef]:n.GEQUAL,[Sf]:n.GREATER,[yf]:n.NOTEQUAL};function Xe(T,_){if(_.type===si&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Gn||_.magFilter===wo||_.magFilter===ms||_.magFilter===Bi||_.minFilter===Gn||_.minFilter===wo||_.minFilter===ms||_.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,pe[_.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,pe[_.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,pe[_.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,_e[_.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,_e[_.minFilter]),_.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,be[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Dn||_.minFilter!==ms&&_.minFilter!==Bi||_.type===si&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function z(T,_){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",A));const W=_.source;let ne=h.get(W);ne===void 0&&(ne={},h.set(W,ne));const Y=$(_);if(Y!==T.__cacheKey){ne[Y]===void 0&&(ne[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ne[Y].usedTimes++;const Ne=ne[T.__cacheKey];Ne!==void 0&&(ne[T.__cacheKey].usedTimes--,Ne.usedTimes===0&&E(_)),T.__cacheKey=Y,T.__webglTexture=ne[Y].texture}return F}function ce(T,_,F){return Math.floor(Math.floor(T/F)/_)}function de(T,_,F,W){const Y=T.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,F,W,_.data);else{Y.sort((oe,Te)=>oe.start-Te.start);let Ne=0;for(let oe=1;oe<Y.length;oe++){const Te=Y[Ne],Ve=Y[oe],Oe=Te.start+Te.count,Se=ce(Ve.start,_.width,4),Je=ce(Te.start,_.width,4);Ve.start<=Oe+1&&Se===Je&&ce(Ve.start+Ve.count-1,_.width,4)===Se?Te.count=Math.max(Te.count,Ve.start+Ve.count-Te.start):(++Ne,Y[Ne]=Ve)}Y.length=Ne+1;const fe=n.getParameter(n.UNPACK_ROW_LENGTH),Le=n.getParameter(n.UNPACK_SKIP_PIXELS),De=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let oe=0,Te=Y.length;oe<Te;oe++){const Ve=Y[oe],Oe=Math.floor(Ve.start/4),Se=Math.ceil(Ve.count/4),Je=Oe%_.width,D=Math.floor(Oe/_.width),he=Se,ve=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Je),n.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,Je,D,he,ve,F,W,_.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,fe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Le),n.pixelStorei(n.UNPACK_SKIP_ROWS,De)}}function U(T,_,F){let W=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=n.TEXTURE_3D);const ne=z(T,_),Y=_.source;t.bindTexture(W,T.__webglTexture,n.TEXTURE0+F);const Ne=i.get(Y);if(Y.version!==Ne.__version||ne===!0){t.activeTexture(n.TEXTURE0+F);const fe=it.getPrimaries(it.workingColorSpace),Le=_.colorSpace===_i?null:it.getPrimaries(_.colorSpace),De=_.colorSpace===_i||fe===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let oe=x(_.image,!1,r.maxTextureSize);oe=qe(_,oe);const Te=s.convert(_.format,_.colorSpace),Ve=s.convert(_.type);let Oe=y(_.internalFormat,Te,Ve,_.colorSpace,_.isVideoTexture);Xe(W,_);let Se;const Je=_.mipmaps,D=_.isVideoTexture!==!0,he=Ne.__version===void 0||ne===!0,ve=Y.dataReady,Ce=w(_,oe);if(_.isDepthTexture)Oe=v(_.format===es,_.type),he&&(D?t.texStorage2D(n.TEXTURE_2D,1,Oe,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Oe,oe.width,oe.height,0,Te,Ve,null));else if(_.isDataTexture)if(Je.length>0){D&&he&&t.texStorage2D(n.TEXTURE_2D,Ce,Oe,Je[0].width,Je[0].height);for(let ae=0,te=Je.length;ae<te;ae++)Se=Je[ae],D?ve&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Se.width,Se.height,Te,Ve,Se.data):t.texImage2D(n.TEXTURE_2D,ae,Oe,Se.width,Se.height,0,Te,Ve,Se.data);_.generateMipmaps=!1}else D?(he&&t.texStorage2D(n.TEXTURE_2D,Ce,Oe,oe.width,oe.height),ve&&de(_,oe,Te,Ve)):t.texImage2D(n.TEXTURE_2D,0,Oe,oe.width,oe.height,0,Te,Ve,oe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){D&&he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Oe,Je[0].width,Je[0].height,oe.depth);for(let ae=0,te=Je.length;ae<te;ae++)if(Se=Je[ae],_.format!==Ln)if(Te!==null)if(D){if(ve)if(_.layerUpdates.size>0){const Ue=Dc(Se.width,Se.height,_.format,_.type);for(const Ke of _.layerUpdates){const ft=Se.data.subarray(Ke*Ue/Se.data.BYTES_PER_ELEMENT,(Ke+1)*Ue/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,Ke,Se.width,Se.height,1,Te,ft)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Se.width,Se.height,oe.depth,Te,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Oe,Se.width,Se.height,oe.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ve&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Se.width,Se.height,oe.depth,Te,Ve,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Oe,Se.width,Se.height,oe.depth,0,Te,Ve,Se.data)}else{D&&he&&t.texStorage2D(n.TEXTURE_2D,Ce,Oe,Je[0].width,Je[0].height);for(let ae=0,te=Je.length;ae<te;ae++)Se=Je[ae],_.format!==Ln?Te!==null?D?ve&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,Se.width,Se.height,Te,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Oe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ve&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Se.width,Se.height,Te,Ve,Se.data):t.texImage2D(n.TEXTURE_2D,ae,Oe,Se.width,Se.height,0,Te,Ve,Se.data)}else if(_.isDataArrayTexture)if(D){if(he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Oe,oe.width,oe.height,oe.depth),ve)if(_.layerUpdates.size>0){const ae=Dc(oe.width,oe.height,_.format,_.type);for(const te of _.layerUpdates){const Ue=oe.data.subarray(te*ae/oe.data.BYTES_PER_ELEMENT,(te+1)*ae/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,oe.width,oe.height,1,Te,Ve,Ue)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Te,Ve,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,oe.width,oe.height,oe.depth,0,Te,Ve,oe.data);else if(_.isData3DTexture)D?(he&&t.texStorage3D(n.TEXTURE_3D,Ce,Oe,oe.width,oe.height,oe.depth),ve&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Te,Ve,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,oe.width,oe.height,oe.depth,0,Te,Ve,oe.data);else if(_.isFramebufferTexture){if(he)if(D)t.texStorage2D(n.TEXTURE_2D,Ce,Oe,oe.width,oe.height);else{let ae=oe.width,te=oe.height;for(let Ue=0;Ue<Ce;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,Oe,ae,te,0,Te,Ve,null),ae>>=1,te>>=1}}else if(Je.length>0){if(D&&he){const ae=Ye(Je[0]);t.texStorage2D(n.TEXTURE_2D,Ce,Oe,ae.width,ae.height)}for(let ae=0,te=Je.length;ae<te;ae++)Se=Je[ae],D?ve&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Te,Ve,Se):t.texImage2D(n.TEXTURE_2D,ae,Oe,Te,Ve,Se);_.generateMipmaps=!1}else if(D){if(he){const ae=Ye(oe);t.texStorage2D(n.TEXTURE_2D,Ce,Oe,ae.width,ae.height)}ve&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Ve,oe)}else t.texImage2D(n.TEXTURE_2D,0,Oe,Te,Ve,oe);m(_)&&d(W),Ne.__version=Y.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function q(T,_,F){if(_.image.length!==6)return;const W=z(T,_),ne=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+F);const Y=i.get(ne);if(ne.version!==Y.__version||W===!0){t.activeTexture(n.TEXTURE0+F);const Ne=it.getPrimaries(it.workingColorSpace),fe=_.colorSpace===_i?null:it.getPrimaries(_.colorSpace),Le=_.colorSpace===_i||Ne===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const De=_.isCompressedTexture||_.image[0].isCompressedTexture,oe=_.image[0]&&_.image[0].isDataTexture,Te=[];for(let te=0;te<6;te++)!De&&!oe?Te[te]=x(_.image[te],!0,r.maxCubemapSize):Te[te]=oe?_.image[te].image:_.image[te],Te[te]=qe(_,Te[te]);const Ve=Te[0],Oe=s.convert(_.format,_.colorSpace),Se=s.convert(_.type),Je=y(_.internalFormat,Oe,Se,_.colorSpace),D=_.isVideoTexture!==!0,he=Y.__version===void 0||W===!0,ve=ne.dataReady;let Ce=w(_,Ve);Xe(n.TEXTURE_CUBE_MAP,_);let ae;if(De){D&&he&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Je,Ve.width,Ve.height);for(let te=0;te<6;te++){ae=Te[te].mipmaps;for(let Ue=0;Ue<ae.length;Ue++){const Ke=ae[Ue];_.format!==Ln?Oe!==null?D?ve&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue,0,0,Ke.width,Ke.height,Oe,Ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue,Je,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue,0,0,Ke.width,Ke.height,Oe,Se,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue,Je,Ke.width,Ke.height,0,Oe,Se,Ke.data)}}}else{if(ae=_.mipmaps,D&&he){ae.length>0&&Ce++;const te=Ye(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ce,Je,te.width,te.height)}for(let te=0;te<6;te++)if(oe){D?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Te[te].width,Te[te].height,Oe,Se,Te[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,Te[te].width,Te[te].height,0,Oe,Se,Te[te].data);for(let Ue=0;Ue<ae.length;Ue++){const ft=ae[Ue].image[te].image;D?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue+1,0,0,ft.width,ft.height,Oe,Se,ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue+1,Je,ft.width,ft.height,0,Oe,Se,ft.data)}}else{D?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Oe,Se,Te[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,Oe,Se,Te[te]);for(let Ue=0;Ue<ae.length;Ue++){const Ke=ae[Ue];D?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue+1,0,0,Oe,Se,Ke.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue+1,Je,Oe,Se,Ke.image[te])}}}m(_)&&d(n.TEXTURE_CUBE_MAP),Y.__version=ne.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function re(T,_,F,W,ne,Y){const Ne=s.convert(F.format,F.colorSpace),fe=s.convert(F.type),Le=y(F.internalFormat,Ne,fe,F.colorSpace),De=i.get(_),oe=i.get(F);if(oe.__renderTarget=_,!De.__hasExternalTextures){const Te=Math.max(1,_.width>>Y),Ve=Math.max(1,_.height>>Y);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,Y,Le,Te,Ve,_.depth,0,Ne,fe,null):t.texImage2D(ne,Y,Le,Te,Ve,0,Ne,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),se(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,ne,oe.__webglTexture,0,me(_)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,ne,oe.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(T,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,T),_.depthBuffer){const W=_.depthTexture,ne=W&&W.isDepthTexture?W.type:null,Y=v(_.stencilBuffer,ne),Ne=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=me(_);se(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,Y,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,Y,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Y,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ne,n.RENDERBUFFER,T)}else{const W=_.textures;for(let ne=0;ne<W.length;ne++){const Y=W[ne],Ne=s.convert(Y.format,Y.colorSpace),fe=s.convert(Y.type),Le=y(Y.internalFormat,Ne,fe,Y.colorSpace),De=me(_);F&&se(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Le,_.width,_.height):se(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,Le,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Le,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(_.depthTexture);W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),k(_.depthTexture,0);const ne=W.__webglTexture,Y=me(_);if(_.depthTexture.format===Qr)se(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(_.depthTexture.format===es)se(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function tt(T){const _=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const W=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){const ne=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",ne)};W.addEventListener("dispose",ne),_.__depthDisposeCallback=ne}_.__boundDepthTexture=W}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const W=T.texture.mipmaps;W&&W.length>0?we(_.__webglFramebuffer[0],T):we(_.__webglFramebuffer,T)}else if(F){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=n.createRenderbuffer(),Ee(_.__webglDepthbuffer[W],T,!1);else{const ne=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,Y)}}else{const W=T.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Ee(_.__webglDepthbuffer,T,!1);else{const ne=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(T,_,F){const W=i.get(T);_!==void 0&&re(W.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&tt(T)}function R(T){const _=T.texture,F=i.get(T),W=i.get(_);T.addEventListener("dispose",P);const ne=T.textures,Y=T.isWebGLCubeRenderTarget===!0,Ne=ne.length>1;if(Ne||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=_.version,o.memory.textures++),Y){F.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[fe]=[];for(let Le=0;Le<_.mipmaps.length;Le++)F.__webglFramebuffer[fe][Le]=n.createFramebuffer()}else F.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let fe=0;fe<_.mipmaps.length;fe++)F.__webglFramebuffer[fe]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Ne)for(let fe=0,Le=ne.length;fe<Le;fe++){const De=i.get(ne[fe]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&se(T)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let fe=0;fe<ne.length;fe++){const Le=ne[fe];F.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[fe]);const De=s.convert(Le.format,Le.colorSpace),oe=s.convert(Le.type),Te=y(Le.internalFormat,De,oe,Le.colorSpace,T.isXRRenderTarget===!0),Ve=me(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,Te,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,F.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Xe(n.TEXTURE_CUBE_MAP,_);for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0)for(let Le=0;Le<_.mipmaps.length;Le++)re(F.__webglFramebuffer[fe][Le],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le);else re(F.__webglFramebuffer[fe],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(_)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let fe=0,Le=ne.length;fe<Le;fe++){const De=ne[fe],oe=i.get(De);let Te=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Te=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Te,oe.__webglTexture),Xe(Te,De),re(F.__webglFramebuffer,T,De,n.COLOR_ATTACHMENT0+fe,Te,0),m(De)&&d(Te)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(fe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,W.__webglTexture),Xe(fe,_),_.mipmaps&&_.mipmaps.length>0)for(let Le=0;Le<_.mipmaps.length;Le++)re(F.__webglFramebuffer[Le],T,_,n.COLOR_ATTACHMENT0,fe,Le);else re(F.__webglFramebuffer,T,_,n.COLOR_ATTACHMENT0,fe,0);m(_)&&d(fe),t.unbindTexture()}T.depthBuffer&&tt(T)}function ie(T){const _=T.textures;for(let F=0,W=_.length;F<W;F++){const ne=_[F];if(m(ne)){const Y=b(T),Ne=i.get(ne).__webglTexture;t.bindTexture(Y,Ne),d(Y),t.unbindTexture()}}}const ee=[],j=[];function Z(T){if(T.samples>0){if(se(T)===!1){const _=T.textures,F=T.width,W=T.height;let ne=n.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ne=i.get(T),fe=_.length>1;if(fe)for(let De=0;De<_.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const Le=T.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let De=0;De<_.length;De++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ne.__webglColorRenderbuffer[De]);const oe=i.get(_[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,F,W,0,0,F,W,ne,n.NEAREST),c===!0&&(ee.length=0,j.length=0,ee.push(n.COLOR_ATTACHMENT0+De),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ee.push(Y),j.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,j)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let De=0;De<_.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,Ne.__webglColorRenderbuffer[De]);const oe=i.get(_[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const _=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function me(T){return Math.min(r.maxSamples,T.samples)}function se(T){const _=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ge(T){const _=o.render.frame;u.get(T)!==_&&(u.set(T,_),T.update())}function qe(T,_){const F=T.colorSpace,W=T.format,ne=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==vr&&F!==_i&&(it.getTransfer(F)===ot?(W!==Ln||ne!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function Ye(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.setTexture2D=k,this.setTexture2DArray=K,this.setTexture3D=Q,this.setTextureCube=X,this.rebindTextures=ht,this.setupRenderTarget=R,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=re,this.useMultisampledRTT=se}function O_(n,e){function t(i,r=_i){let s;const o=it.getTransfer(r);if(i===qn)return n.UNSIGNED_BYTE;if(i===ml)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ru)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Cu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Au)return n.BYTE;if(i===wu)return n.SHORT;if(i===Zr)return n.UNSIGNED_SHORT;if(i===pl)return n.INT;if(i===zi)return n.UNSIGNED_INT;if(i===si)return n.FLOAT;if(i===li)return n.HALF_FLOAT;if(i===Pu)return n.ALPHA;if(i===Iu)return n.RGB;if(i===Ln)return n.RGBA;if(i===Qr)return n.DEPTH_COMPONENT;if(i===es)return n.DEPTH_STENCIL;if(i===Lu)return n.RED;if(i===_l)return n.RED_INTEGER;if(i===Du)return n.RG;if(i===vl)return n.RG_INTEGER;if(i===xl)return n.RGBA_INTEGER;if(i===Gs||i===Vs||i===Ws||i===Xs)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Gs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Gs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ws)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Aa||i===wa||i===Ra||i===Ca)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Aa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ra)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ca)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pa||i===Ia||i===La)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Pa||i===Ia)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===La)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Da||i===Ua||i===Na||i===Oa||i===Fa||i===Ba||i===za||i===ka||i===Ha||i===Ga||i===Va||i===Wa||i===Xa||i===Ya)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Da)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ua)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Na)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oa)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fa)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ba)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===za)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ka)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ha)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ga)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Va)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wa)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xa)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ya)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qa||i===Ka||i===$a)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===qa)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ka)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$a)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ja||i===Za||i===ja||i===Qa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ja)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Za)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ja)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===jr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const F_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B_=`
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

}`;class z_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Yu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new rn({vertexShader:F_,fragmentShader:B_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new Rr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class k_ extends Tr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new z_,d={},b=t.getContextAttributes();let y=null,v=null;const w=[],A=[],P=new le;let L=null;const E=new cn;E.viewport=new lt;const M=new cn;M.viewport=new lt;const I=[E,M],B=new op;let V=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let q=w[U];return q===void 0&&(q=new Ko,w[U]=q),q.getTargetRaySpace()},this.getControllerGrip=function(U){let q=w[U];return q===void 0&&(q=new Ko,w[U]=q),q.getGripSpace()},this.getHand=function(U){let q=w[U];return q===void 0&&(q=new Ko,w[U]=q),q.getHandSpace()};function k(U){const q=A.indexOf(U.inputSource);if(q===-1)return;const re=w[q];re!==void 0&&(re.update(U.inputSource,U.frame,l||o),re.dispatchEvent({type:U.type,data:U.inputSource}))}function K(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",Q);for(let U=0;U<w.length;U++){const q=A[U];q!==null&&(A[U]=null,w[U].disconnect(q))}V=null,$=null,m.reset();for(const U in d)delete d[U];e.setRenderTarget(y),p=null,h=null,f=null,r=null,v=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",K),r.addEventListener("inputsourceschange",Q),b.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Ee=null,we=null;b.depth&&(we=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=b.stencil?es:Qr,Ee=b.stencil?jr:zi);const tt={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(tt),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Un(h.textureWidth,h.textureHeight,{format:Ln,type:qn,depthTexture:new Xu(h.textureWidth,h.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const re={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Un(p.framebufferWidth,p.framebufferHeight,{format:Ln,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),de.setContext(r),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(U){for(let q=0;q<U.removed.length;q++){const re=U.removed[q],Ee=A.indexOf(re);Ee>=0&&(A[Ee]=null,w[Ee].disconnect(re))}for(let q=0;q<U.added.length;q++){const re=U.added[q];let Ee=A.indexOf(re);if(Ee===-1){for(let tt=0;tt<w.length;tt++)if(tt>=A.length){A.push(re),Ee=tt;break}else if(A[tt]===null){A[tt]=re,Ee=tt;break}if(Ee===-1)break}const we=w[Ee];we&&we.connect(re)}}const X=new C,pe=new C;function _e(U,q,re){X.setFromMatrixPosition(q.matrixWorld),pe.setFromMatrixPosition(re.matrixWorld);const Ee=X.distanceTo(pe),we=q.projectionMatrix.elements,tt=re.projectionMatrix.elements,ht=we[14]/(we[10]-1),R=we[14]/(we[10]+1),ie=(we[9]+1)/we[5],ee=(we[9]-1)/we[5],j=(we[8]-1)/we[0],Z=(tt[8]+1)/tt[0],me=ht*j,se=ht*Z,ge=Ee/(-j+Z),qe=ge*-j;if(q.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(qe),U.translateZ(ge),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),we[10]===-1)U.projectionMatrix.copy(q.projectionMatrix),U.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const Ye=ht+ge,T=R+ge,_=me-qe,F=se+(Ee-qe),W=ie*R/T*Ye,ne=ee*R/T*Ye;U.projectionMatrix.makePerspective(_,F,W,ne,Ye,T),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function be(U,q){q===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(q.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;let q=U.near,re=U.far;m.texture!==null&&(m.depthNear>0&&(q=m.depthNear),m.depthFar>0&&(re=m.depthFar)),B.near=M.near=E.near=q,B.far=M.far=E.far=re,(V!==B.near||$!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),V=B.near,$=B.far),B.layers.mask=U.layers.mask|6,E.layers.mask=B.layers.mask&3,M.layers.mask=B.layers.mask&5;const Ee=U.parent,we=B.cameras;be(B,Ee);for(let tt=0;tt<we.length;tt++)be(we[tt],Ee);we.length===2?_e(B,E,M):B.projectionMatrix.copy(E.projectionMatrix),Xe(U,B,Ee)};function Xe(U,q,re){re===null?U.matrix.copy(q.matrixWorld):(U.matrix.copy(re.matrixWorld),U.matrix.invert(),U.matrix.multiply(q.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(q.projectionMatrix),U.projectionMatrixInverse.copy(q.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=xr*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(U){c=U,h!==null&&(h.fixedFoveation=U),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=U)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(U){return d[U]};let z=null;function ce(U,q){if(u=q.getViewerPose(l||o),g=q,u!==null){const re=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Ee=!1;re.length!==B.cameras.length&&(B.cameras.length=0,Ee=!0);for(let R=0;R<re.length;R++){const ie=re[R];let ee=null;if(p!==null)ee=p.getViewport(ie);else{const Z=f.getViewSubImage(h,ie);ee=Z.viewport,R===0&&(e.setRenderTargetTextures(v,Z.colorTexture,Z.depthStencilTexture),e.setRenderTarget(v))}let j=I[R];j===void 0&&(j=new cn,j.layers.enable(R),j.viewport=new lt,I[R]=j),j.matrix.fromArray(ie.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(ie.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(ee.x,ee.y,ee.width,ee.height),R===0&&(B.matrix.copy(j.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ee===!0&&B.cameras.push(j)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const R=f.getDepthInformation(re[0]);R&&R.isValid&&R.texture&&m.init(R,r.renderState)}if(we&&we.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let R=0;R<re.length;R++){const ie=re[R].camera;if(ie){let ee=d[ie];ee||(ee=new Yu,d[ie]=ee);const j=f.getCameraImage(ie);ee.sourceTexture=j}}}}for(let re=0;re<w.length;re++){const Ee=A[re],we=w[re];Ee!==null&&we!==void 0&&we.update(Ee,q,l||o)}z&&z(U,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),g=null}const de=new oh;de.setAnimationLoop(ce),this.setAnimationLoop=function(U){z=U},this.dispose=function(){}}}const Ii=new wn,H_=new gt;function G_(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Hu(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,b,y,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,b,y):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===un&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===un&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const b=e.get(d),y=b.envMap,v=b.envMapRotation;y&&(m.envMap.value=y,Ii.copy(v),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),m.envMapRotation.value.setFromMatrix4(H_.makeRotationFromEuler(Ii)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,b,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=y*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===un&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const b=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function V_(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,y){const v=y.program;i.uniformBlockBinding(b,v)}function l(b,y){let v=r[b.id];v===void 0&&(g(b),v=u(b),r[b.id]=v,b.addEventListener("dispose",m));const w=y.program;i.updateUBOMapping(b,w);const A=e.render.frame;s[b.id]!==A&&(h(b),s[b.id]=A)}function u(b){const y=f();b.__bindingPointIndex=y;const v=n.createBuffer(),w=b.__size,A=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,w,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const y=r[b.id],v=b.uniforms,w=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,P=v.length;A<P;A++){const L=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,M=L.length;E<M;E++){const I=L[E];if(p(I,A,E,w)===!0){const B=I.__offset,V=Array.isArray(I.value)?I.value:[I.value];let $=0;for(let k=0;k<V.length;k++){const K=V[k],Q=x(K);typeof K=="number"||typeof K=="boolean"?(I.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,B+$,I.__data)):K.isMatrix3?(I.__data[0]=K.elements[0],I.__data[1]=K.elements[1],I.__data[2]=K.elements[2],I.__data[3]=0,I.__data[4]=K.elements[3],I.__data[5]=K.elements[4],I.__data[6]=K.elements[5],I.__data[7]=0,I.__data[8]=K.elements[6],I.__data[9]=K.elements[7],I.__data[10]=K.elements[8],I.__data[11]=0):(K.toArray(I.__data,$),$+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,y,v,w){const A=b.value,P=y+"_"+v;if(w[P]===void 0)return typeof A=="number"||typeof A=="boolean"?w[P]=A:w[P]=A.clone(),!0;{const L=w[P];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return w[P]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(b){const y=b.uniforms;let v=0;const w=16;for(let P=0,L=y.length;P<L;P++){const E=Array.isArray(y[P])?y[P]:[y[P]];for(let M=0,I=E.length;M<I;M++){const B=E[M],V=Array.isArray(B.value)?B.value:[B.value];for(let $=0,k=V.length;$<k;$++){const K=V[$],Q=x(K),X=v%w,pe=X%Q.boundary,_e=X+pe;v+=pe,_e!==0&&w-_e<Q.storage&&(v+=w-_e),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=Q.storage}}}const A=v%w;return A>0&&(v+=w-A),b.__size=v,b.__cache={},this}function x(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function m(b){const y=b.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:c,update:l,dispose:d}}class W_{constructor(e={}){const{canvas:t=Hf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const b=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let w=!1;this._outputColorSpace=_n;let A=0,P=0,L=null,E=-1,M=null;const I=new lt,B=new lt;let V=null;const $=new $e(0);let k=0,K=t.width,Q=t.height,X=1,pe=null,_e=null;const be=new lt(0,0,K,Q),Xe=new lt(0,0,K,Q);let z=!1;const ce=new bl;let de=!1,U=!1;const q=new gt,re=new C,Ee=new lt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function ht(){return L===null?X:1}let R=i;function ie(S,N){return t.getContext(S,N)}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fl}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",ae,!1),R===null){const N="webgl2";if(R=ie(N,S),R===null)throw ie(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ee,j,Z,me,se,ge,qe,Ye,T,_,F,W,ne,Y,Ne,fe,Le,De,oe,Te,Ve,Oe,Se,Je;function D(){ee=new eg(R),ee.init(),Oe=new O_(R,ee),j=new q0(R,ee,e,Oe),Z=new U_(R,ee),j.reversedDepthBuffer&&h&&Z.buffers.depth.setReversed(!0),me=new ig(R),se=new S_,ge=new N_(R,ee,Z,se,j,Oe,me),qe=new $0(v),Ye=new Q0(v),T=new cp(R),Se=new X0(R,T),_=new tg(R,T,me,Se),F=new sg(R,_,T,me),oe=new rg(R,j,ge),fe=new K0(se),W=new M_(v,qe,Ye,ee,j,Se,fe),ne=new G_(v,se),Y=new E_,Ne=new C_(ee),De=new W0(v,qe,Ye,Z,F,p,c),Le=new L_(v,F,j),Je=new V_(R,me,j,Z),Te=new Y0(R,ee,me),Ve=new ng(R,ee,me),me.programs=W.programs,v.capabilities=j,v.extensions=ee,v.properties=se,v.renderLists=Y,v.shadowMap=Le,v.state=Z,v.info=me}D();const he=new k_(v,R);this.xr=he,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const S=ee.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ee.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(K,Q,!1))},this.getSize=function(S){return S.set(K,Q)},this.setSize=function(S,N,H=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=S,Q=N,t.width=Math.floor(S*X),t.height=Math.floor(N*X),H===!0&&(t.style.width=S+"px",t.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(K*X,Q*X).floor()},this.setDrawingBufferSize=function(S,N,H){K=S,Q=N,X=H,t.width=Math.floor(S*H),t.height=Math.floor(N*H),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(be)},this.setViewport=function(S,N,H,G){S.isVector4?be.set(S.x,S.y,S.z,S.w):be.set(S,N,H,G),Z.viewport(I.copy(be).multiplyScalar(X).round())},this.getScissor=function(S){return S.copy(Xe)},this.setScissor=function(S,N,H,G){S.isVector4?Xe.set(S.x,S.y,S.z,S.w):Xe.set(S,N,H,G),Z.scissor(B.copy(Xe).multiplyScalar(X).round())},this.getScissorTest=function(){return z},this.setScissorTest=function(S){Z.setScissorTest(z=S)},this.setOpaqueSort=function(S){pe=S},this.setTransparentSort=function(S){_e=S},this.getClearColor=function(S){return S.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,H=!0){let G=0;if(S){let O=!1;if(L!==null){const ue=L.texture.format;O=ue===xl||ue===vl||ue===_l}if(O){const ue=L.texture.type,ye=ue===qn||ue===zi||ue===Zr||ue===jr||ue===ml||ue===gl,Ie=De.getClearColor(),Ae=De.getClearAlpha(),Ge=Ie.r,We=Ie.g,Be=Ie.b;ye?(g[0]=Ge,g[1]=We,g[2]=Be,g[3]=Ae,R.clearBufferuiv(R.COLOR,0,g)):(x[0]=Ge,x[1]=We,x[2]=Be,x[3]=Ae,R.clearBufferiv(R.COLOR,0,x))}else G|=R.COLOR_BUFFER_BIT}N&&(G|=R.DEPTH_BUFFER_BIT),H&&(G|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),De.dispose(),Y.dispose(),Ne.dispose(),se.dispose(),qe.dispose(),Ye.dispose(),F.dispose(),Se.dispose(),Je.dispose(),W.dispose(),he.dispose(),he.removeEventListener("sessionstart",Bn),he.removeEventListener("sessionend",Vl),Ti.stop()};function ve(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const S=me.autoReset,N=Le.enabled,H=Le.autoUpdate,G=Le.needsUpdate,O=Le.type;D(),me.autoReset=S,Le.enabled=N,Le.autoUpdate=H,Le.needsUpdate=G,Le.type=O}function ae(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function te(S){const N=S.target;N.removeEventListener("dispose",te),Ue(N)}function Ue(S){Ke(S),se.remove(S)}function Ke(S){const N=se.get(S).programs;N!==void 0&&(N.forEach(function(H){W.releaseProgram(H)}),S.isShaderMaterial&&W.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,H,G,O,ue){N===null&&(N=we);const ye=O.isMesh&&O.matrixWorld.determinant()<0,Ie=zh(S,N,H,G,O);Z.setMaterial(G,ye);let Ae=H.index,Ge=1;if(G.wireframe===!0){if(Ae=_.getWireframeAttribute(H),Ae===void 0)return;Ge=2}const We=H.drawRange,Be=H.attributes.position;let nt=We.start*Ge,at=(We.start+We.count)*Ge;ue!==null&&(nt=Math.max(nt,ue.start*Ge),at=Math.min(at,(ue.start+ue.count)*Ge)),Ae!==null?(nt=Math.max(nt,0),at=Math.min(at,Ae.count)):Be!=null&&(nt=Math.max(nt,0),at=Math.min(at,Be.count));const Et=at-nt;if(Et<0||Et===1/0)return;Se.setup(O,G,Ie,H,Ae);let dt,ut=Te;if(Ae!==null&&(dt=T.get(Ae),ut=Ve,ut.setIndex(dt)),O.isMesh)G.wireframe===!0?(Z.setLineWidth(G.wireframeLinewidth*ht()),ut.setMode(R.LINES)):ut.setMode(R.TRIANGLES);else if(O.isLine){let ze=G.linewidth;ze===void 0&&(ze=1),Z.setLineWidth(ze*ht()),O.isLineSegments?ut.setMode(R.LINES):O.isLineLoop?ut.setMode(R.LINE_LOOP):ut.setMode(R.LINE_STRIP)}else O.isPoints?ut.setMode(R.POINTS):O.isSprite&&ut.setMode(R.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ts("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))ut.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const ze=O._multiDrawStarts,xt=O._multiDrawCounts,rt=O._multiDrawCount,dn=Ae?T.get(Ae).bytesPerElement:1,Yi=se.get(G).currentProgram.getUniforms();for(let pn=0;pn<rt;pn++)Yi.setValue(R,"_gl_DrawID",pn),ut.render(ze[pn]/dn,xt[pn])}else if(O.isInstancedMesh)ut.renderInstances(nt,Et,O.count);else if(H.isInstancedBufferGeometry){const ze=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,xt=Math.min(H.instanceCount,ze);ut.renderInstances(nt,Et,xt)}else ut.render(nt,Et)};function ft(S,N,H){S.transparent===!0&&S.side===ri&&S.forceSinglePass===!1?(S.side=un,S.needsUpdate=!0,ps(S,N,H),S.side=xi,S.needsUpdate=!0,ps(S,N,H),S.side=ri):ps(S,N,H)}this.compile=function(S,N,H=null){H===null&&(H=S),d=Ne.get(H),d.init(N),y.push(d),H.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),S!==H&&S.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();const G=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ue=O.material;if(ue)if(Array.isArray(ue))for(let ye=0;ye<ue.length;ye++){const Ie=ue[ye];ft(Ie,H,O),G.add(Ie)}else ft(ue,H,O),G.add(ue)}),d=y.pop(),G},this.compileAsync=function(S,N,H=null){const G=this.compile(S,N,H);return new Promise(O=>{function ue(){if(G.forEach(function(ye){se.get(ye).currentProgram.isReady()&&G.delete(ye)}),G.size===0){O(S);return}setTimeout(ue,10)}ee.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let st=null;function Zn(S){st&&st(S)}function Bn(){Ti.stop()}function Vl(){Ti.start()}const Ti=new oh;Ti.setAnimationLoop(Zn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(S){st=S,he.setAnimationLoop(S),S===null?Ti.stop():Ti.start()},he.addEventListener("sessionstart",Bn),he.addEventListener("sessionend",Vl),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(N),N=he.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,N,L),d=Ne.get(S,y.length),d.init(N),y.push(d),q.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ce.setFromProjectionMatrix(q,Vn,N.reversedDepth),U=this.localClippingEnabled,de=fe.init(this.clippingPlanes,U),m=Y.get(S,b.length),m.init(),b.push(m),he.enabled===!0&&he.isPresenting===!0){const ue=v.xr.getDepthSensingMesh();ue!==null&&bo(ue,N,-1/0,v.sortObjects)}bo(S,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(pe,_e),tt=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,tt&&De.addToRenderList(m,S),this.info.render.frame++,de===!0&&fe.beginShadows();const H=d.state.shadowsArray;Le.render(H,S,N),de===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,O=m.transmissive;if(d.setupLights(),N.isArrayCamera){const ue=N.cameras;if(O.length>0)for(let ye=0,Ie=ue.length;ye<Ie;ye++){const Ae=ue[ye];Xl(G,O,S,Ae)}tt&&De.render(S);for(let ye=0,Ie=ue.length;ye<Ie;ye++){const Ae=ue[ye];Wl(m,S,Ae,Ae.viewport)}}else O.length>0&&Xl(G,O,S,N),tt&&De.render(S),Wl(m,S,N);L!==null&&P===0&&(ge.updateMultisampleRenderTarget(L),ge.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(v,S,N),Se.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(d=y[y.length-1],de===!0&&fe.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function bo(S,N,H,G){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ce.intersectsSprite(S)){G&&Ee.setFromMatrixPosition(S.matrixWorld).applyMatrix4(q);const ye=F.update(S),Ie=S.material;Ie.visible&&m.push(S,ye,Ie,H,Ee.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ce.intersectsObject(S))){const ye=F.update(S),Ie=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ee.copy(S.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ee.copy(ye.boundingSphere.center)),Ee.applyMatrix4(S.matrixWorld).applyMatrix4(q)),Array.isArray(Ie)){const Ae=ye.groups;for(let Ge=0,We=Ae.length;Ge<We;Ge++){const Be=Ae[Ge],nt=Ie[Be.materialIndex];nt&&nt.visible&&m.push(S,ye,nt,H,Ee.z,Be)}}else Ie.visible&&m.push(S,ye,Ie,H,Ee.z,null)}}const ue=S.children;for(let ye=0,Ie=ue.length;ye<Ie;ye++)bo(ue[ye],N,H,G)}function Wl(S,N,H,G){const O=S.opaque,ue=S.transmissive,ye=S.transparent;d.setupLightsView(H),de===!0&&fe.setGlobalState(v.clippingPlanes,H),G&&Z.viewport(I.copy(G)),O.length>0&&ds(O,N,H),ue.length>0&&ds(ue,N,H),ye.length>0&&ds(ye,N,H),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Xl(S,N,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[G.id]===void 0&&(d.state.transmissionRenderTarget[G.id]=new Un(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?li:qn,minFilter:Bi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const ue=d.state.transmissionRenderTarget[G.id],ye=G.viewport||I;ue.setSize(ye.z*v.transmissionResolutionScale,ye.w*v.transmissionResolutionScale);const Ie=v.getRenderTarget(),Ae=v.getActiveCubeFace(),Ge=v.getActiveMipmapLevel();v.setRenderTarget(ue),v.getClearColor($),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),tt&&De.render(H);const We=v.toneMapping;v.toneMapping=vi;const Be=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),d.setupLightsView(G),de===!0&&fe.setGlobalState(v.clippingPlanes,G),ds(S,H,G),ge.updateMultisampleRenderTarget(ue),ge.updateRenderTargetMipmap(ue),ee.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let at=0,Et=N.length;at<Et;at++){const dt=N[at],ut=dt.object,ze=dt.geometry,xt=dt.material,rt=dt.group;if(xt.side===ri&&ut.layers.test(G.layers)){const dn=xt.side;xt.side=un,xt.needsUpdate=!0,Yl(ut,H,G,ze,xt,rt),xt.side=dn,xt.needsUpdate=!0,nt=!0}}nt===!0&&(ge.updateMultisampleRenderTarget(ue),ge.updateRenderTargetMipmap(ue))}v.setRenderTarget(Ie,Ae,Ge),v.setClearColor($,k),Be!==void 0&&(G.viewport=Be),v.toneMapping=We}function ds(S,N,H){const G=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ue=S.length;O<ue;O++){const ye=S[O],Ie=ye.object,Ae=ye.geometry,Ge=ye.group;let We=ye.material;We.allowOverride===!0&&G!==null&&(We=G),Ie.layers.test(H.layers)&&Yl(Ie,N,H,Ae,We,Ge)}}function Yl(S,N,H,G,O,ue){S.onBeforeRender(v,N,H,G,O,ue),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(v,N,H,G,S,ue),O.transparent===!0&&O.side===ri&&O.forceSinglePass===!1?(O.side=un,O.needsUpdate=!0,v.renderBufferDirect(H,N,G,O,S,ue),O.side=xi,O.needsUpdate=!0,v.renderBufferDirect(H,N,G,O,S,ue),O.side=ri):v.renderBufferDirect(H,N,G,O,S,ue),S.onAfterRender(v,N,H,G,O,ue)}function ps(S,N,H){N.isScene!==!0&&(N=we);const G=se.get(S),O=d.state.lights,ue=d.state.shadowsArray,ye=O.state.version,Ie=W.getParameters(S,O.state,ue,N,H),Ae=W.getProgramCacheKey(Ie);let Ge=G.programs;G.environment=S.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(S.isMeshStandardMaterial?Ye:qe).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Ge===void 0&&(S.addEventListener("dispose",te),Ge=new Map,G.programs=Ge);let We=Ge.get(Ae);if(We!==void 0){if(G.currentProgram===We&&G.lightsStateVersion===ye)return Kl(S,Ie),We}else Ie.uniforms=W.getUniforms(S),S.onBeforeCompile(Ie,v),We=W.acquireProgram(Ie,Ae),Ge.set(Ae,We),G.uniforms=Ie.uniforms;const Be=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Be.clippingPlanes=fe.uniform),Kl(S,Ie),G.needsLights=Hh(S),G.lightsStateVersion=ye,G.needsLights&&(Be.ambientLightColor.value=O.state.ambient,Be.lightProbe.value=O.state.probe,Be.directionalLights.value=O.state.directional,Be.directionalLightShadows.value=O.state.directionalShadow,Be.spotLights.value=O.state.spot,Be.spotLightShadows.value=O.state.spotShadow,Be.rectAreaLights.value=O.state.rectArea,Be.ltc_1.value=O.state.rectAreaLTC1,Be.ltc_2.value=O.state.rectAreaLTC2,Be.pointLights.value=O.state.point,Be.pointLightShadows.value=O.state.pointShadow,Be.hemisphereLights.value=O.state.hemi,Be.directionalShadowMap.value=O.state.directionalShadowMap,Be.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Be.spotShadowMap.value=O.state.spotShadowMap,Be.spotLightMatrix.value=O.state.spotLightMatrix,Be.spotLightMap.value=O.state.spotLightMap,Be.pointShadowMap.value=O.state.pointShadowMap,Be.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=We,G.uniformsList=null,We}function ql(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=Ys.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Kl(S,N){const H=se.get(S);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function zh(S,N,H,G,O){N.isScene!==!0&&(N=we),ge.resetTextureUnits();const ue=N.fog,ye=G.isMeshStandardMaterial?N.environment:null,Ie=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:vr,Ae=(G.isMeshStandardMaterial?Ye:qe).get(G.envMap||ye),Ge=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,We=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Be=!!H.morphAttributes.position,nt=!!H.morphAttributes.normal,at=!!H.morphAttributes.color;let Et=vi;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Et=v.toneMapping);const dt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ut=dt!==void 0?dt.length:0,ze=se.get(G),xt=d.state.lights;if(de===!0&&(U===!0||S!==M)){const Qt=S===M&&G.id===E;fe.setState(G,S,Qt)}let rt=!1;G.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==xt.state.version||ze.outputColorSpace!==Ie||O.isBatchedMesh&&ze.batching===!1||!O.isBatchedMesh&&ze.batching===!0||O.isBatchedMesh&&ze.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&ze.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&ze.instancing===!1||!O.isInstancedMesh&&ze.instancing===!0||O.isSkinnedMesh&&ze.skinning===!1||!O.isSkinnedMesh&&ze.skinning===!0||O.isInstancedMesh&&ze.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ze.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ze.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ze.instancingMorph===!1&&O.morphTexture!==null||ze.envMap!==Ae||G.fog===!0&&ze.fog!==ue||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==fe.numPlanes||ze.numIntersection!==fe.numIntersection)||ze.vertexAlphas!==Ge||ze.vertexTangents!==We||ze.morphTargets!==Be||ze.morphNormals!==nt||ze.morphColors!==at||ze.toneMapping!==Et||ze.morphTargetsCount!==ut)&&(rt=!0):(rt=!0,ze.__version=G.version);let dn=ze.currentProgram;rt===!0&&(dn=ps(G,N,O));let Yi=!1,pn=!1,Nr=!1;const Mt=dn.getUniforms(),yn=ze.uniforms;if(Z.useProgram(dn.program)&&(Yi=!0,pn=!0,Nr=!0),G.id!==E&&(E=G.id,pn=!0),Yi||M!==S){Z.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Mt.setValue(R,"projectionMatrix",S.projectionMatrix),Mt.setValue(R,"viewMatrix",S.matrixWorldInverse);const ln=Mt.map.cameraPosition;ln!==void 0&&ln.setValue(R,re.setFromMatrixPosition(S.matrixWorld)),j.logarithmicDepthBuffer&&Mt.setValue(R,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Mt.setValue(R,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,pn=!0,Nr=!0)}if(O.isSkinnedMesh){Mt.setOptional(R,O,"bindMatrix"),Mt.setOptional(R,O,"bindMatrixInverse");const Qt=O.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),Mt.setValue(R,"boneTexture",Qt.boneTexture,ge))}O.isBatchedMesh&&(Mt.setOptional(R,O,"batchingTexture"),Mt.setValue(R,"batchingTexture",O._matricesTexture,ge),Mt.setOptional(R,O,"batchingIdTexture"),Mt.setValue(R,"batchingIdTexture",O._indirectTexture,ge),Mt.setOptional(R,O,"batchingColorTexture"),O._colorsTexture!==null&&Mt.setValue(R,"batchingColorTexture",O._colorsTexture,ge));const En=H.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&oe.update(O,H,dn),(pn||ze.receiveShadow!==O.receiveShadow)&&(ze.receiveShadow=O.receiveShadow,Mt.setValue(R,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(yn.envMap.value=Ae,yn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(yn.envMapIntensity.value=N.environmentIntensity),pn&&(Mt.setValue(R,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&kh(yn,Nr),ue&&G.fog===!0&&ne.refreshFogUniforms(yn,ue),ne.refreshMaterialUniforms(yn,G,X,Q,d.state.transmissionRenderTarget[S.id]),Ys.upload(R,ql(ze),yn,ge)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ys.upload(R,ql(ze),yn,ge),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Mt.setValue(R,"center",O.center),Mt.setValue(R,"modelViewMatrix",O.modelViewMatrix),Mt.setValue(R,"normalMatrix",O.normalMatrix),Mt.setValue(R,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Qt=G.uniformsGroups;for(let ln=0,Ao=Qt.length;ln<Ao;ln++){const bi=Qt[ln];Je.update(bi,dn),Je.bind(bi,dn)}}return dn}function kh(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Hh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,N,H){const G=se.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),se.get(S.texture).__webglTexture=N,se.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const H=se.get(S);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0};const Gh=R.createFramebuffer();this.setRenderTarget=function(S,N=0,H=0){L=S,A=N,P=H;let G=!0,O=null,ue=!1,ye=!1;if(S){const Ae=se.get(S);if(Ae.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(R.FRAMEBUFFER,null),G=!1;else if(Ae.__webglFramebuffer===void 0)ge.setupRenderTarget(S);else if(Ae.__hasExternalTextures)ge.rebindTextures(S,se.get(S.texture).__webglTexture,se.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Be=S.depthTexture;if(Ae.__boundDepthTexture!==Be){if(Be!==null&&se.has(Be)&&(S.width!==Be.image.width||S.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(S)}}const Ge=S.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(ye=!0);const We=se.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(We[N])?O=We[N][H]:O=We[N],ue=!0):S.samples>0&&ge.useMultisampledRTT(S)===!1?O=se.get(S).__webglMultisampledFramebuffer:Array.isArray(We)?O=We[H]:O=We,I.copy(S.viewport),B.copy(S.scissor),V=S.scissorTest}else I.copy(be).multiplyScalar(X).floor(),B.copy(Xe).multiplyScalar(X).floor(),V=z;if(H!==0&&(O=Gh),Z.bindFramebuffer(R.FRAMEBUFFER,O)&&G&&Z.drawBuffers(S,O),Z.viewport(I),Z.scissor(B),Z.setScissorTest(V),ue){const Ae=se.get(S.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ae.__webglTexture,H)}else if(ye){const Ae=N;for(let Ge=0;Ge<S.textures.length;Ge++){const We=se.get(S.textures[Ge]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ge,We.__webglTexture,H,Ae)}}else if(S!==null&&H!==0){const Ae=se.get(S.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ae.__webglTexture,H)}E=-1},this.readRenderTargetPixels=function(S,N,H,G,O,ue,ye,Ie=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=se.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){Z.bindFramebuffer(R.FRAMEBUFFER,Ae);try{const Ge=S.textures[Ie],We=Ge.format,Be=Ge.type;if(!j.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-G&&H>=0&&H<=S.height-O&&(S.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ie),R.readPixels(N,H,G,O,Oe.convert(We),Oe.convert(Be),ue))}finally{const Ge=L!==null?se.get(L).__webglFramebuffer:null;Z.bindFramebuffer(R.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(S,N,H,G,O,ue,ye,Ie=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=se.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae)if(N>=0&&N<=S.width-G&&H>=0&&H<=S.height-O){Z.bindFramebuffer(R.FRAMEBUFFER,Ae);const Ge=S.textures[Ie],We=Ge.format,Be=Ge.type;if(!j.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,nt),R.bufferData(R.PIXEL_PACK_BUFFER,ue.byteLength,R.STREAM_READ),S.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ie),R.readPixels(N,H,G,O,Oe.convert(We),Oe.convert(Be),0);const at=L!==null?se.get(L).__webglFramebuffer:null;Z.bindFramebuffer(R.FRAMEBUFFER,at);const Et=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Gf(R,Et,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,nt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ue),R.deleteBuffer(nt),R.deleteSync(Et),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,H=0){const G=Math.pow(2,-H),O=Math.floor(S.image.width*G),ue=Math.floor(S.image.height*G),ye=N!==null?N.x:0,Ie=N!==null?N.y:0;ge.setTexture2D(S,0),R.copyTexSubImage2D(R.TEXTURE_2D,H,0,0,ye,Ie,O,ue),Z.unbindTexture()};const Vh=R.createFramebuffer(),Wh=R.createFramebuffer();this.copyTextureToTexture=function(S,N,H=null,G=null,O=0,ue=null){ue===null&&(O!==0?(ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=O,O=0):ue=0);let ye,Ie,Ae,Ge,We,Be,nt,at,Et;const dt=S.isCompressedTexture?S.mipmaps[ue]:S.image;if(H!==null)ye=H.max.x-H.min.x,Ie=H.max.y-H.min.y,Ae=H.isBox3?H.max.z-H.min.z:1,Ge=H.min.x,We=H.min.y,Be=H.isBox3?H.min.z:0;else{const En=Math.pow(2,-O);ye=Math.floor(dt.width*En),Ie=Math.floor(dt.height*En),S.isDataArrayTexture?Ae=dt.depth:S.isData3DTexture?Ae=Math.floor(dt.depth*En):Ae=1,Ge=0,We=0,Be=0}G!==null?(nt=G.x,at=G.y,Et=G.z):(nt=0,at=0,Et=0);const ut=Oe.convert(N.format),ze=Oe.convert(N.type);let xt;N.isData3DTexture?(ge.setTexture3D(N,0),xt=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(ge.setTexture2DArray(N,0),xt=R.TEXTURE_2D_ARRAY):(ge.setTexture2D(N,0),xt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const rt=R.getParameter(R.UNPACK_ROW_LENGTH),dn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Yi=R.getParameter(R.UNPACK_SKIP_PIXELS),pn=R.getParameter(R.UNPACK_SKIP_ROWS),Nr=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,dt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,dt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ge),R.pixelStorei(R.UNPACK_SKIP_ROWS,We),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Be);const Mt=S.isDataArrayTexture||S.isData3DTexture,yn=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const En=se.get(S),Qt=se.get(N),ln=se.get(En.__renderTarget),Ao=se.get(Qt.__renderTarget);Z.bindFramebuffer(R.READ_FRAMEBUFFER,ln.__webglFramebuffer),Z.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ao.__webglFramebuffer);for(let bi=0;bi<Ae;bi++)Mt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,se.get(S).__webglTexture,O,Be+bi),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,se.get(N).__webglTexture,ue,Et+bi)),R.blitFramebuffer(Ge,We,ye,Ie,nt,at,ye,Ie,R.DEPTH_BUFFER_BIT,R.NEAREST);Z.bindFramebuffer(R.READ_FRAMEBUFFER,null),Z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(O!==0||S.isRenderTargetTexture||se.has(S)){const En=se.get(S),Qt=se.get(N);Z.bindFramebuffer(R.READ_FRAMEBUFFER,Vh),Z.bindFramebuffer(R.DRAW_FRAMEBUFFER,Wh);for(let ln=0;ln<Ae;ln++)Mt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,En.__webglTexture,O,Be+ln):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,En.__webglTexture,O),yn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Qt.__webglTexture,ue,Et+ln):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Qt.__webglTexture,ue),O!==0?R.blitFramebuffer(Ge,We,ye,Ie,nt,at,ye,Ie,R.COLOR_BUFFER_BIT,R.NEAREST):yn?R.copyTexSubImage3D(xt,ue,nt,at,Et+ln,Ge,We,ye,Ie):R.copyTexSubImage2D(xt,ue,nt,at,Ge,We,ye,Ie);Z.bindFramebuffer(R.READ_FRAMEBUFFER,null),Z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else yn?S.isDataTexture||S.isData3DTexture?R.texSubImage3D(xt,ue,nt,at,Et,ye,Ie,Ae,ut,ze,dt.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(xt,ue,nt,at,Et,ye,Ie,Ae,ut,dt.data):R.texSubImage3D(xt,ue,nt,at,Et,ye,Ie,Ae,ut,ze,dt):S.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ue,nt,at,ye,Ie,ut,ze,dt.data):S.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ue,nt,at,dt.width,dt.height,ut,dt.data):R.texSubImage2D(R.TEXTURE_2D,ue,nt,at,ye,Ie,ut,ze,dt);R.pixelStorei(R.UNPACK_ROW_LENGTH,rt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,dn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Yi),R.pixelStorei(R.UNPACK_SKIP_ROWS,pn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Nr),ue===0&&N.generateMipmaps&&R.generateMipmap(xt),Z.unbindTexture()},this.initRenderTarget=function(S){se.get(S).__webglFramebuffer===void 0&&ge.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ge.setTextureCube(S,0):S.isData3DTexture?ge.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ge.setTexture2DArray(S,0):ge.setTexture2D(S,0),Z.unbindTexture()},this.resetState=function(){A=0,P=0,L=null,Z.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}const qs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Pr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const X_=new rh(-1,1,1,-1,0,1);class Y_ extends an{constructor(){super(),this.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new _t([0,2,0,0,2,0],2))}}const q_=new Y_;class Dl{constructor(e){this._mesh=new St(q_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,X_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class hh extends Pr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof rn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ns.clone(e.uniforms),this.material=new rn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Dl(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ru extends Pr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class K_ extends Pr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class $_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new le);this._width=i.width,this._height=i.height,t=new Un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:li}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hh(qs),this.copyPass.material.blending=ai,this.clock=new ap}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ru!==void 0&&(o instanceof ru?i=!0:o instanceof K_&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class J_ extends Pr{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new $e}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const Z_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new $e(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class yr extends Pr{constructor(e,t=1,i,r){super(),this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new $e(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Un(s,o,{type:li}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Un(s,o,{type:li});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const h=new Un(s,o,{type:li});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),s=Math.round(s/2),o=Math.round(o/2)}const a=Z_;this.highPassUniforms=ns.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new rn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new le(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ns.clone(qs.uniforms),this.blendMaterial=new rn({uniforms:this.copyUniforms,vertexShader:qs.vertexShader,fragmentShader:qs.fragmentShader,blending:Zs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new $e,this._oldClearAlpha=1,this._basic=new Wi,this._fsQuad=new Dl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new le(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=yr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=yr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new rn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new rn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}yr.BlurDirectionX=new le(1,0);yr.BlurDirectionY=new le(0,1);const Hs={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class j_ extends Pr{constructor(){super(),this.uniforms=ns.clone(Hs.uniforms),this.material=new jd({name:Hs.name,uniforms:this.uniforms,vertexShader:Hs.vertexShader,fragmentShader:Hs.fragmentShader}),this._fsQuad=new Dl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===xu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Mu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Su?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===dl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Eu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Tu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===yu&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const os={A:{id:"NF-0147",name:"林  川",hairColor:"#35291f",hairStyle:"swept",skinTone:"#c69262",glasses:!1,shirtColor:"#293e38",scarfColor:"#854739",faceShape:"tapered"},B:{id:"NF-0286",name:"周  禾",hairColor:"#a57543",hairStyle:"short",skinTone:"#ceaa80",glasses:!0,shirtColor:"#414b59",scarfColor:"#8d754b",faceShape:"round"}};function as(n=21){return()=>(n=Math.imul(n,1664525)+1013904223|0,(n>>>0)/4294967296)}const ar=as();function He(n,e={}){return new nh({color:n,roughness:.94,metalness:0,flatShading:!0,...e})}function xe(n,e,t,i,r=null){const s=new St(new wr(...e),i);return s.position.set(...t),r&&s.rotation.set(...r),s.castShadow=!0,s.receiveShadow=!0,n.add(s),s}function Wt(n,e,t,i,r,s,o=8){const a=new St(new mo(e,t,i,o),s);return a.position.set(...r),a.castShadow=!0,a.receiveShadow=!0,n.add(a),a}function ui(n,e,t){const i=document.createElement("canvas");i.width=n,i.height=e;const r=i.getContext("2d");t(r,n,e);const s=new vd(i);return s.colorSpace=_n,s.anisotropy=4,s}function vn(n,e,t,i,r,s=null,o=!1){const a=o?new Wi({map:r,transparent:!0}):He("#ffffff",{map:r}),c=new St(new Rr(e,t),a);return c.position.set(...i),s&&c.rotation.set(...s),n.add(c),c}function zn(n,{bg:e="#263830",ink:t="#c6b58b",w:i=512,h:r=512,size:s=42,serif:o=!0}={}){return ui(i,r,a=>{a.fillStyle=e,a.fillRect(0,0,i,r),a.strokeStyle=t+"55",a.lineWidth=2,a.strokeRect(18,18,i-36,r-36),a.textAlign="center",a.fillStyle=t,a.font=`${s}px ${o?"Georgia":"Microsoft YaHei"}`;const c=s*1.45;n.forEach((l,u)=>a.fillText(l,i/2,r/2+(u-(n.length-1)/2)*c+s*.35))})}function la(n="#705034"){const e=ui(512,512,t=>{t.fillStyle=n,t.fillRect(0,0,512,512);const i=as(71);for(let r=0;r<90;r++){const s=i()*512;t.strokeStyle=i()>.45?`rgba(20,9,3,${i()*.07})`:`rgba(233,193,112,${i()*.035})`,t.lineWidth=1+i()*2,t.beginPath(),t.moveTo(0,s),t.bezierCurveTo(180,s-i()*7,290,s+i()*9,512,s),t.stroke()}for(let r=0;r<512;r+=128)t.fillStyle="#1e170b55",t.fillRect(0,r,512,2)});return e.wrapS=e.wrapT=js,e.repeat.set(2,1),He("#ffffff",{map:e,roughness:.94})}function fh(n){const e=new Yt,t=He(n.shirtColor),i=He(n.skinTone),r=He(n.hairColor),s=He(n.scarfColor),o=He("#171d1c"),a=He("#181710"),c=new Yt;e.add(c);const l=Wt(c,.265,.34,.73,[0,1.13,0],t,7);l.scale.z=.58,xe(c,[.045,.7,.018],[0,1.14,.192],o);for(const y of[.88,1.08,1.29])Wt(c,.016,.016,.02,[.065,y,.21],He("#a59d79"),6).rotation.x=Math.PI/2;const u=[];for(const y of[-1,1]){const v=xe(e,[.19,.72,.22],[y*.14,.39,0],He("#272d2b"));u.push(v),xe(e,[.21,.1,.34],[y*.14,.06,.055],o)}const f=[];for(const y of[-1,1]){const v=new Yt;v.position.set(y*.28,1.43,0),c.add(v);const w=Wt(v,.115,.08,.51,[y*.047,-.24,.008],t,6);w.rotation.z=y*.18;const A=new St(new Pl(.095,0),i);A.scale.set(.72,1,.78),A.position.set(y*.09,-.51,.04),v.add(A),f.push(v)}const h=new Yt;h.position.y=1.79,c.add(h),Wt(c,.095,.1,.18,[0,1.49,0],i);const p=new St(new ro(.3,n.faceShape==="round"?8:7,4),i);p.scale.set(.89,1.02,.83),p.rotation.y=Math.PI/14,h.add(p);for(const y of[-1,1]){const v=new St(new _o(.063),i);v.position.set(y*.258,-.025,-.002),v.scale.set(.5,1,.66),h.add(v)}const g=new St(new ro(.325,7,3,0,Math.PI*2,0,Math.PI*.46),r);g.position.set(0,.07,-.03),g.rotation.z=-.06,h.add(g);const x=n.hairStyle==="swept"?[[-.2,.13,.17,.13,.29,-.22],[-.05,.18,.22,.16,.33,-.3],[.13,.2,.2,.15,.23,.2],[.235,.05,.09,.07,.34,.12]]:[[-.19,.16,.17,.1,.16,-.1],[-.06,.2,.23,.13,.18,0],[.1,.18,.23,.12,.15,.05],[.23,.06,.11,.055,.25,0]];for(const[y,v,w,A,P,L]of x){const E=new Zu;E.moveTo(-A*.62,P*.5),E.lineTo(A*.58,P*.35),E.lineTo(A*.25,-P*.5),E.lineTo(-A*.35,-P*.35),E.closePath();const M=new St(new Cl(E,{depth:.07,bevelEnabled:!1}),r);M.position.set(y,v+.025,w-.025),M.rotation.z=L,h.add(M)}const m=[];for(const y of[-1,1]){const v=xe(h,[.036,.063,.013],[y*.093,-.008,.244],a);if(m.push(v),xe(h,[.061,.012,.013],[y*.093,.055,.244],r,[0,0,y*.09]),n.glasses){const w=new St(new vo(.068,.009,4,10),o);w.position.set(y*.095,-.001,.258),h.add(w)}}n.glasses&&xe(h,[.065,.012,.014],[0,.008,.26],o);const d=new St(new Al(.022,.055,3),i);d.position.set(0,-.06,.25),d.rotation.x=Math.PI/2,h.add(d),xe(h,[.045,.008,.008],[0,-.138,.218],He("#825a42"));const b=Wt(c,.235,.245,.19,[0,1.485,.017],s,7);b.scale.z=.76,b.rotation.z=.07,xe(c,[.16,.53,.058],[.16,1.2,.23],s,[0,0,-.085]),xe(c,[.17,.12,.06],[.183,.94,.23],He(n.scarfColor),[0,0,-.085]);for(let y=0;y<3;y++)xe(c,[.026,.035,.026],[.125+y*.046,.875,.24],s);return xe(c,[.056,.65,.037],[-.217,1.15,.165],He("#615037"),[0,0,-.12]),e.userData={body:c,head:h,arms:f,eyes:m,legs:u,profile:n},e}function Q_(n,e,t,i,r,s){if(n.save(),n.translate(t,i),n.scale(r/160,s/190),n.fillStyle="#a3ac9c",n.fillRect(0,0,160,190),n.fillStyle="#829485",n.fillRect(0,135,160,55),n.fillStyle=e.shirtColor,n.beginPath(),n.moveTo(20,190),n.lineTo(28,144),n.lineTo(56,130),n.lineTo(104,130),n.lineTo(135,146),n.lineTo(145,190),n.fill(),n.fillStyle=e.skinTone,n.beginPath(),n.moveTo(40,49),n.lineTo(66,30),n.lineTo(106,36),n.lineTo(122,68),n.lineTo(117,110),n.lineTo(94,133),n.lineTo(66,129),n.lineTo(44,105),n.fill(),n.fillStyle=e.hairColor,n.beginPath(),n.moveTo(35,86),n.lineTo(30,45),n.lineTo(48,17),n.lineTo(92,10),n.lineTo(128,32),n.lineTo(129,77),n.lineTo(114,64),e.hairStyle==="swept"?(n.lineTo(101,42),n.lineTo(90,77),n.lineTo(72,72),n.lineTo(73,50),n.lineTo(51,83)):(n.lineTo(107,48),n.lineTo(99,64),n.lineTo(66,53),n.lineTo(49,66)),n.closePath(),n.fill(),n.fillStyle="#242720",n.fillRect(61,81,7,14),n.fillRect(95,81,7,14),e.glasses){n.strokeStyle="#26322f",n.lineWidth=3;for(const o of[65,100])n.beginPath(),n.arc(o,87,14,0,Math.PI*2),n.stroke();n.beginPath(),n.moveTo(79,86),n.lineTo(86,86),n.stroke()}n.fillStyle="#885f47",n.fillRect(78,112,10,2),n.fillStyle=e.scarfColor,n.beginPath(),n.moveTo(45,125),n.lineTo(115,128),n.lineTo(121,148),n.lineTo(44,153),n.fill(),n.fillRect(94,144,19,46),n.restore()}function dh(n){const e=new Yt;xe(e,[.4,.252,.007],[0,0,0],He("#d9d3b8"));const t=ui(1024,640,(i,r,s)=>{i.fillStyle="#ded8bc",i.fillRect(0,0,r,s),i.fillStyle="#304e45",i.fillRect(0,0,r,125),i.fillStyle="#e6dab0",i.font="27px Georgia",i.fillText("NIGHTFALL PUBLIC LIBRARY",42,56),i.font="22px Microsoft YaHei",i.fillText("夜阑图书馆 · 借阅证",43,97),Q_(i,n,47,169,260,315),i.fillStyle="#384b42",i.font="48px Microsoft YaHei",i.fillText(n.name,362,243),i.font="22px monospace",i.fillText("READER / "+n.id,362,300),i.strokeStyle="#879079",i.beginPath(),i.moveTo(362,334),i.lineTo(963,334),i.stroke(),i.font="23px Microsoft YaHei",i.fillText("有效至 2027.09.30",362,408);const o=as(93);for(let a=365;a<934;a+=7){const c=o()>.5?4:2;i.fillStyle="#394039",i.fillRect(a,490,c,56)}i.font="17px monospace",i.fillText("READER CARD",365,578),i.strokeStyle="#aaa587",i.strokeRect(19,144,r-38,s-167)});return vn(e,.396,.248,[0,0,.004],t),e}function ev(n,e,t,i,r){for(const s of i.filter(o=>o.visible&&o.page===r)){const[o,a,c,l]=s.uvRect;n.save(),n.translate(o*e,a*t),n.scale(c*e,l*t),s.type==="scratch"?(n.strokeStyle="#b4b19a",n.lineWidth=.025,n.beginPath(),n.moveTo(.06,.83),n.lineTo(.46,.49),n.lineTo(.91,.13),n.moveTo(.24,.79),n.lineTo(.67,.39),n.stroke()):s.type==="stain"?(n.fillStyle="#73503642",n.strokeStyle="#78553865",n.lineWidth=.05,n.beginPath(),n.ellipse(.5,.5,.44,.37,-.2,0,Math.PI*2),n.fill(),n.stroke()):s.type==="corner_fold"?(n.fillStyle="#162e2d",n.beginPath(),n.moveTo(1,0),n.lineTo(0,1),n.lineTo(1,1),n.closePath(),n.fill(),n.fillStyle="#a7a486",n.beginPath(),n.moveTo(.96,.04),n.lineTo(.06,.96),n.lineTo(.09,.12),n.closePath(),n.fill(),n.strokeStyle="#d4c9a5",n.lineWidth=.018,n.stroke()):s.type==="tear"&&(n.fillStyle="#ad9f81",n.beginPath(),n.moveTo(1,0),n.lineTo(.67,.22),n.lineTo(.71,.39),n.lineTo(.36,.54),n.lineTo(.4,.72),n.lineTo(0,1),n.lineTo(1,1),n.closePath(),n.fill(),n.strokeStyle="#efe3c7",n.lineWidth=.025,n.stroke()),n.restore()}}function ph(n,e,t){const i=e.intersectObject(n,!0)[0];if(!i?.uv)return null;const r=n.userData.damageHotspots.find(s=>{const[o,a,c,l]=s.uvRect;return s.enabled&&s.page===t&&s.surface===i.object&&i.uv.x>=o&&i.uv.x<=o+c&&1-i.uv.y>=a&&1-i.uv.y<=a+l});return r?{...r,uv:i.uv.clone()}:null}function Mo(n={}){const e=n.damageProfile||[],t=new Yt,i=He(n.coverColor||"#233f3d"),r=He("#b6a170");xe(t,[.416,.555,.057],[0,0,0],He("#c7bda1"));for(let l=0;l<3;l++)xe(t,[.417,.552,.001],[0,0,-.018+l*.018],He(l%3===0?"#a89b7e":"#d0c4a6"));xe(t,[.445,.583,.015],[0,0,-.04],i),xe(t,[.029,.583,.087],[-.218,0,0],i);for(const l of[-.215,-.193,.185,.21])xe(t,[.033,.01,.09],[-.219,l,0],r);const s=new Yt;s.position.set(-.22,0,.041),t.add(s),xe(s,[.444,.583,.014],[.222,0,0],i);const o=ui(640,840,(l,u,f)=>{if(l.fillStyle=n.coverColor||"#233f3d",l.fillRect(0,0,u,f),l.strokeStyle="#b3a16f",l.lineWidth=3,l.strokeRect(32,32,u-64,f-64),l.lineWidth=1,l.strokeRect(43,43,u-86,f-86),l.fillStyle="#c7b687",l.textAlign="center",l.font="17px Georgia",l.fillText(n.personal?"":"THE NIGHTFALL COLLECTION",u/2,93),l.font="52px Georgia",l.fillText(n.englishTitle?.[0]||"THE MIDNIGHT",u/2,205),l.font=n.englishTitle?"52px Georgia":"70px Georgia",l.fillText(n.englishTitle?.[1]||"ATLAS",u/2,290),l.font="24px Microsoft YaHei",l.fillText(n.title||"午 夜 图 谱",u/2,346),l.save(),l.translate(u/2,523),l.strokeStyle="#b6a271",n.art==="lighthouse")l.lineWidth=3,l.beginPath(),l.moveTo(-43,110),l.lineTo(-25,-61),l.lineTo(25,-61),l.lineTo(43,110),l.closePath(),l.stroke(),l.strokeRect(-32,-87,64,26),l.beginPath(),l.moveTo(-42,-89),l.lineTo(0,-117),l.lineTo(42,-89),l.moveTo(-120,-55),l.lineTo(-36,-76),l.moveTo(36,-76),l.lineTo(120,-55),l.moveTo(-105,113),l.lineTo(105,113),l.stroke();else if(n.art==="rain")for(let h=0;h<7;h++)l.strokeRect(-112+h*32,45-h%3*27,24,80+h%3*27),l.beginPath(),l.moveTo(-105+h*33,-110),l.lineTo(-116+h*33,-62),l.stroke();else if(["port","city","plant","gear"].includes(n.art)){if(l.lineWidth=3,l.beginPath(),n.art==="plant"){l.moveTo(0,120),l.lineTo(0,-115);for(let h=-80;h<90;h+=40)l.moveTo(0,h+20),l.quadraticCurveTo(-90,h-35,-55,h-40),l.quadraticCurveTo(-10,h-45,0,h+20),l.moveTo(0,h),l.quadraticCurveTo(90,h-40,55,h-50),l.quadraticCurveTo(10,h-45,0,h)}else if(n.art==="gear"){for(let h=0;h<48;h++){const p=h*Math.PI/24,g=h%4<2?96:116,x=Math.cos(p)*g,m=Math.sin(p)*g;h?l.lineTo(x,m):l.moveTo(x,m)}l.closePath(),l.moveTo(40,0),l.arc(0,0,40,0,Math.PI*2),l.moveTo(-140,-120),l.lineTo(140,-120)}else{for(let h=0;h<4;h++){const p=-120+h*65,g=-60+h%2*25;l.rect(p,g,50,130-g);for(let x=0;x<3;x++)l.rect(p+10,g+15+x*30,12,16)}l.moveTo(-145,85),l.lineTo(145,85),n.art==="port"&&(l.moveTo(-140,105),l.lineTo(-100,125),l.lineTo(85,125),l.lineTo(135,100),l.moveTo(-60,100),l.lineTo(-60,-115),l.lineTo(130,-85))}l.stroke()}else{for(const h of[103,113,142])l.beginPath(),l.arc(0,0,h,0,Math.PI*2),l.stroke();for(let h=0;h<8;h++)l.save(),l.rotate(h*Math.PI/4),l.beginPath(),l.moveTo(0,-122),l.lineTo(18,-23),l.lineTo(0,0),l.lineTo(-18,-23),l.closePath(),l.stroke(),l.restore();l.fillStyle="#c6b27b",l.beginPath(),l.arc(0,0,7,0,Math.PI*2),l.fill()}l.restore(),l.font="20px Georgia",l.fillText("E L I A S   W R E N",u/2,742)}),a=vn(s,.438,.575,[.222,0,.0076],o);vn(s,.432,.57,[.222,0,-.0076],zn(n.personal?["","夜航",""]:["✧","NIGHTFALL","COLLECTION"],{bg:"#9b9a7a",ink:"#4a604e",size:36}),[0,Math.PI,0]);const c=Array.from({length:n.content?.length||3},(l,u)=>u).map(l=>ui(640,840,(u,f,h)=>{if(u.fillStyle="#dfd4b7",u.fillRect(0,0,f,h),u.fillStyle="#526052",u.textAlign="center",u.font="18px Georgia",u.fillText(n.englishTitle?.join(" ")||"THE MIDNIGHT ATLAS",f/2,76),u.fillRect(57,98,f-114,1),n.content){u.fillStyle="#414a40",u.font="30px Microsoft YaHei",u.fillText(n.title,f/2,175),u.textAlign="left",u.font="27px Microsoft YaHei",(n.content[l].match(/.{1,17}/gu)||[]).forEach((x,m)=>u.fillText(x,90,285+m*54)),u.textAlign="center",u.font="18px Georgia",u.fillText(String(l+1),f/2,790);return}u.font="38px Georgia",u.fillText(["A map of quiet places","Windows after midnight","The way home"][l],f/2,161),u.font="23px Microsoft YaHei",u.fillText(["安 静 之 地 的 地 图","午 夜 之 后 的 窗","回 家 的 路"][l],f/2,211),u.strokeStyle="#6a7964",u.lineWidth=2,u.beginPath(),u.arc(320,390,122,0,Math.PI*2),u.stroke();const p=[[250,302],[295,340],[390,325],[370,425],[290,467],[238,417],[250,302]];u.beginPath(),p.forEach(([g,x],m)=>m?u.lineTo(g,x):u.moveTo(g,x)),u.stroke(),p.forEach(([g,x])=>{u.beginPath(),u.arc(g,x,4,0,Math.PI*2),u.fill()}),u.font="21px Georgia",["Some places can only be found","after the last light has gone out.","Follow the rain. Remember the way home."].forEach((g,x)=>u.fillText(g,f/2,601+x*36)),u.font="18px Microsoft YaHei",u.fillText(["沿着雨声，记住回家的路。","每一扇亮着的窗，都有人在等待。","灯光熄灭以前，沿原路返回。"][l],f/2,733),u.font="18px Georgia",u.fillText(`—  ${String(7+l).padStart(2,"0")}  —`,f/2,795)}));if(t.userData.pages=c,t.userData.page=vn(t,.407,.545,[0,0,.0305],c[0]),vn(t,.438,.577,[0,0,-.048],zn(["NIGHTFALL PRESS","","A map for the hours","between dusk and dawn.","","0147 / ARCHIVES"],{bg:"#233f3d",size:29}),[0,Math.PI,0]),t.userData.cover=s,t.userData.front=a,n.content){const l=ui(128,768,(u,f,h)=>{u.fillStyle=n.coverColor||"#233f3d",u.fillRect(0,0,f,h),u.fillStyle="#d2c5a2",u.font="64px Microsoft YaHei",u.textAlign="center",[...n.title].forEach((p,g)=>u.fillText(p,f/2,220+g*85))});vn(t,.088,.57,[-.235,0,0],l,[0,-Math.PI/2,0])}return t.userData.cleanPages=[o,...c].map(l=>{const u=document.createElement("canvas");return u.width=l.image.width,u.height=l.image.height,u.getContext("2d").drawImage(l.image,0,0),u}),mh(t,e),t}function mh(n,e){const t=n.userData.front;[t.material.map,...n.userData.pages].forEach((i,r)=>{const s=i.image,o=s.getContext("2d");o.drawImage(n.userData.cleanPages[r],0,0),ev(o,s.width,s.height,e,r),i.needsUpdate=!0}),n.userData.damageHotspots=e.filter(i=>i.visible&&["scratch","stain","tear","corner_fold"].includes(i.type)).map(i=>({damageId:i.id,type:i.type,page:i.page,uvRect:i.uvRect,enabled:!0,surface:i.page===0?t:n.userData.page}))}const tv={WAITING:{START:"CUSTOMER_ENTERING"},CUSTOMER_ENTERING:{ARRIVE:"CUSTOMER_TALKING"},CUSTOMER_TALKING:{PLACE_ITEMS:"ITEMS_PLACED"},ITEMS_PLACED:{PICK_ID:"ID_HELD",PICK_BOOK:"BOOK_HELD"},ID_HELD:{RETURN_ID:"ITEMS_PLACED"},BOOK_INSPECT:{EXIT_INSPECT:"BOOK_HELD"},BOOK_HELD:{PUT_BOOK:"ITEMS_PLACED",INSPECT_AGAIN:"BOOK_INSPECT",BORROW:"BORROW_COMMIT",REJECT:"REJECT_COMMIT"},BORROW_COMMIT:{RESPOND:"CUSTOMER_RESPONSE"},REJECT_COMMIT:{RESPOND:"CUSTOMER_RESPONSE"},CUSTOMER_RESPONSE:{LEAVE:"CUSTOMER_LEAVING"},CUSTOMER_LEAVING:{COMPLETE:"TRANSACTION_COMPLETE"},TRANSACTION_COMPLETE:{}},nv={RETURN_WAITING:{START:"RETURN_CUSTOMER_ENTERING"},RETURN_CUSTOMER_ENTERING:{ARRIVE:"RETURN_CUSTOMER_TALKING"},RETURN_CUSTOMER_TALKING:{PLACE_ITEMS:"RETURN_BOOK_PLACED"},RETURN_BOOK_PLACED:{PICK_BOOK:"RETURN_BOOK_HELD"},RETURN_BOOK_HELD:{PUT_BOOK:"RETURN_BOOK_PLACED",INSPECT_AGAIN:"RETURN_BOOK_INSPECT",ACCEPT:"RETURN_ACCEPTED"},RETURN_BOOK_INSPECT:{EXIT_INSPECT:"RETURN_BOOK_HELD",SELECT_DAMAGE:"RETURN_DAMAGE_SELECTED"},RETURN_DAMAGE_SELECTED:{BEGIN_DIALOGUE:"RETURN_DAMAGE_DIALOGUE"},RETURN_DAMAGE_DIALOGUE:{SHOW_DECISION:"RETURN_DECISION"},RETURN_DECISION:{CHARGE:"RETURN_BOOK_HELD",WAIVE:"RETURN_BOOK_HELD"},RETURN_ACCEPTED:{RESPOND:"RETURN_CUSTOMER_RESPONSE"},RETURN_CUSTOMER_RESPONSE:{LEAVE:"RETURN_CUSTOMER_LEAVING"},RETURN_CUSTOMER_LEAVING:{COMPLETE:"RETURN_COMPLETE"},RETURN_COMPLETE:{}};class gh{constructor({type:e="borrow",customerId:t,actualIdentityMatch:i,bookId:r,bookInstanceId:s,damageProfile:o=[],existingDamageBeforeLoan:a=[]}){this.type=e,this.bookId=r,this.bookInstanceId=s,this.damageDecisions=[],this.damageProfile=o,this.existingDamageBeforeLoan=a,this.selectedDamageId=null,this.customerId=t,this.actualIdentityMatch=i,this.state=e==="return"?"RETURN_WAITING":"WAITING",this.checklist=null,this.cardReturned=!1,this.decision=null,this.record=null}get phase(){return this.type!=="return"?this.state:this.state==="RETURN_BOOK_PLACED"?"ITEMS_PLACED":this.state==="RETURN_COMPLETE"?"TRANSACTION_COMPLETE":this.state.slice(7)}dispatch(e,t){if(e==="PICK_ID"&&this.cardReturned)return!1;const i=(this.type==="return"?nv:tv)[this.state]?.[e];if(!i)return!1;if(e==="SELECT_DAMAGE"){if(!this.damageProfile.some(r=>r.id===t&&r.visible))return!1;this.selectedDamageId=t}if(this.state=i,e==="RETURN_ID"&&(this.cardReturned=!0),["CHARGE","WAIVE"].includes(e)){const r=this.damageProfile.find(u=>u.id===this.selectedDamageId),s=r.causedDuringLoan??!this.existingDamageBeforeLoan.includes(r.id),o=e.toLowerCase(),a=o==="charge"===s,c={damageId:r.id,decision:o,isCorrect:a,reason:a?null:s?"missed_new_damage":"charged_existing_damage"},l=this.damageDecisions.findIndex(u=>u.damageId===r.id);l<0?this.damageDecisions.push(c):this.damageDecisions[l]=c}if(["BORROW","REJECT","ACCEPT"].includes(e)&&(this.decision=e.toLowerCase()),e==="COMPLETE")if(this.type==="return"){const r=this.damageProfile.filter(a=>a.visible),s=r.some(a=>a.causedDuringLoan??!this.existingDamageBeforeLoan.includes(a.id)),o=r.flatMap(a=>{const c=a.causedDuringLoan??!this.existingDamageBeforeLoan.includes(a.id),l=this.damageDecisions.find(u=>u.damageId===a.id)?.decision==="charge";return c===l?[]:[{damageId:a.id,reason:c?"missed_new_damage":"charged_existing_damage"}]});this.record=Object.freeze({transactionType:"return",customerId:this.customerId,bookId:this.bookId,bookInstanceId:this.bookInstanceId,actualDamagePresent:r.length>0,actualDamageResponsibility:s,selectedDamageId:this.selectedDamageId,finalDecision:this.decision,damageDecisions:structuredClone(this.damageDecisions),isCorrect:o.length===0,reason:o[0]?.reason??null,errors:o,timestamp:new Date().toISOString()})}else this.record=Object.freeze({transactionType:"borrow",customerId:this.customerId,bookId:this.bookId,bookInstanceId:this.bookInstanceId,actualIdentityMatch:this.actualIdentityMatch,playerChecklistIdentity:this.checklist,finalDecision:this.decision,isCorrect:this.decision==="borrow"===this.actualIdentityMatch,timestamp:new Date().toISOString()});return!0}}const Ul={A:{customerId:"return-reader-01",book:{id:"distant-lighthouse",title:"远方的灯塔",englishTitle:["THE DISTANT","LIGHTHOUSE"],art:"lighthouse",damageProfile:[{id:"scratch_cover_01",type:"scratch",location:"front_cover",page:0,severity:1,visible:!0,uvRect:[.65,.71,.2,.1]}]},existingDamageBeforeLoan:[]},B:{customerId:"return-reader-02",book:{id:"city-rain",title:"城市里的雨",englishTitle:["RAIN IN","THE CITY"],art:"rain",damageProfile:[]},existingDamageBeforeLoan:[]}},{damageProfile:Dv,...sl}=Ul.A.book,{damageProfile:Uv,...ol}=Ul.B.book,_h={[sl.id]:sl,[ol.id]:ol},iv={id:"fold_corner_01",type:"corner_fold",location:"front_cover_bottom_right",page:0,uvRect:[.78,.82,.2,.16],active:!0,createdAt:"BEFORE_GAME"},rv={id:"coffee_stain_01",type:"stain",location:"page_3",page:3,uvRect:[.56,.36,.29,.23],active:!0,createdAt:"CURRENT_LOAN"};class so{constructor(e,t,i=[]){this.instanceId=e,this.definitionId=t,this.status="IN_LIBRARY",this.holderCustomerId=null,this.damages=structuredClone(i),this.existingDamageBeforeLoan=[]}visualDamages(){return this.damages.filter(e=>e.active).map(({id:e,type:t,location:i,page:r,uvRect:s})=>({id:e,type:t,location:i,page:r,uvRect:[...s],visible:!0}))}}const Nl=[{type:"borrow",customerId:"lin_zhou",bookInstanceId:"book_lighthouse_001",delayBefore:0,greeting:"晚上好，我想借这本。"},{type:"borrow",customerId:"zhou_ning",bookInstanceId:"book_city_rain_001",delayBefore:5,greeting:"晚上好，我想借这本书。"},{type:"return",customerId:"lin_zhou",bookInstanceId:"book_lighthouse_001",delayBefore:10,greeting:"你好，我来还刚才那本书。",beforeArrival:{addDamage:[rv]},damageReplies:{fold_corner_01:["这个吗？","我借的时候就已经这样了。"],coffee_stain_01:["啊……","喝东西的时候不小心碰到了。"]}}];class sv{constructor(){this.books=new Map([["book_lighthouse_001",new so("book_lighthouse_001",sl.id,[iv])],["book_city_rain_001",new so("book_city_rain_001",ol.id)]]),this.index=0,this.records=[],this.active=null}begin(){if(this.active)return this.active;const e=Nl[this.index];if(!e)return null;const t=this.books.get(e.bookInstanceId);if(e.type==="return"&&(t.status!=="ON_LOAN"||t.holderCustomerId!==e.customerId))return this.index++,this.begin();for(const i of e.beforeArrival?.addDamage||[])t.damages.some(r=>r.id===i.id)||t.damages.push(structuredClone(i));return e.type==="return"&&(t.status="IN_RETURN_TRANSACTION"),this.active={step:e,book:t,definition:_h[t.definitionId],transaction:new gh({type:e.type,customerId:e.customerId,bookId:t.definitionId,bookInstanceId:t.instanceId,actualIdentityMatch:!0,damageProfile:t.visualDamages(),existingDamageBeforeLoan:[...t.existingDamageBeforeLoan]})},this.active}complete(e){if(!this.active||e!==this.active.transaction||!e.record)return!1;const{book:t,step:i}=this.active;return i.type==="borrow"&&e.decision==="borrow"?(t.existingDamageBeforeLoan=t.damages.filter(r=>r.active).map(r=>r.id),t.status="ON_LOAN",t.holderCustomerId=i.customerId):(t.status="IN_LIBRARY",t.holderCustomerId=null),this.index++,this.records.push(e.record),this.active=null,!0}}const Ol=[{id:"literature",label:["LITERATURE","文学"],position:[-4,0,-2.6]},{id:"history",label:["HISTORY","历史"],position:[4,0,-2.8]},{id:"nature",label:["NATURE","自然"],position:[-4.2,0,.7]},{id:"science",label:["SCIENCE","科普"],position:[4.4,0,.4]}],al=[{..._h["distant-lighthouse"],category:"literature",content:["他离开家乡很多年，再回到海边时，灯塔仍在黄昏准时亮起。守灯人递给他一杯热茶，谁也没有先说话。","风把信纸吹向窗边。他压住纸角，想起母亲曾说，海上的灯不问归期，只负责在天黑以后等着。","船越走越远，故乡缩成一道细线。他终于明白，留在岸上的那些日子，也会陪着人一起远行。"]},{id:"before-rain-ends",title:"雨停之前",englishTitle:["BEFORE THE","RAIN ENDS"],category:"literature",art:"rain",coverColor:"#40525d",content:["她把伞靠在窗边，坐回熟悉的位置。街上的行人渐渐稀少，玻璃映着她的脸，也映着对面那扇亮灯的窗。","那封信一直留在抽屉里。雨停之前，她又读了一遍开头，终于在空白的纸上写下第一句话。","窗外有人收起了伞。她端着温热的杯子，想起很久以前，他们也是这样并排等过一场雨。"]},{id:"harbour-years",title:"港口年代",englishTitle:["HARBOUR","YEARS"],category:"history",art:"port",coverColor:"#594433",content:["十九世纪末，旧港扩建了第一座石砌码头。船运账册中的货物数量，记录着这座城市从渔村到商埠的变化。","本章对照一九二三年的港区地图与海关档案，整理仓库、铁路和船坞的位置，复原当时码头的日常运作。","工人留下的口述记录补充了报纸未曾提及的生活。潮汐时刻表、工资簿和家书，共同构成港口的历史。"]},{id:"old-city-archive",title:"旧城档案",englishTitle:["OLD CITY","ARCHIVES"],category:"history",art:"city",coverColor:"#807660",content:["这张测绘图完成于一九三一年。街巷的旧称标注在建筑轮廓旁，与今日路名对照，可以辨认城市扩张的方向。","市政会议纪要记载了供水系统的修建经过。工程分为三期，先沿主街铺设，再逐步进入居民密集的支路。","修复老建筑时，门牌、砖印与住户档案互相印证。它们让一栋普通房屋重新获得了准确的年代和姓名。"]},{id:"woodland-notes",title:"林间观察",englishTitle:["WOODLAND","NOTES"],category:"nature",art:"plant",coverColor:"#324a38",content:["蕨类常生长在阴湿的林下。翻看成熟叶片的背面，可以见到排列整齐的孢子囊群，它们并不是虫卵。","清晨是观察林鸟的好时段。保持安静，先听鸣声，再辨认喙形与尾羽；记录时间、天气和树木所在的位置。","落叶下的菌丝分解枯枝，让养分回到土壤。观察时轻轻拨开表层，结束后将落叶盖回，保留原来的湿度。"]},{id:"light-machines",title:"光与机械",englishTitle:["LIGHT &","MACHINES"],category:"science",art:"gear",coverColor:"#3f505d",content:["光通过凸透镜时会发生折射。将屏幕缓缓移到焦点附近，可以得到清晰的倒立像，这也是相机成像的基础。","两只啮合齿轮的转速与齿数成反比。小齿轮带动大齿轮时，输出转速降低，而传递的转矩相应增大。","测量杠杆两端的力臂，可以预测平衡的位置。支点不是力的来源，它改变的是施力的方向与所需的大小。"]}],ov=[[-2.94,.849,-2.42],[-2.68,.058,-2.13],[-1.46,.058,-2.05],[.85,.058,-3.45],[3.62,.058,-1.05],[1.95,.058,-.18]];class av{books=new Map;slots=[];taskBookIds=[];heldBookId=null;result=null;constructor(){al.forEach((e,t)=>{const i=`shelving_${e.id}`;this.taskBookIds.push(i),this.books.set(i,{...new so(i,e.id),category:e.category,location:{type:"scattered",position:ov[t]}})});for(const e of Ol){const t=al.find(i=>i.category===e.id);for(let i=0;i<6;i++){const r={slotId:`${e.id}_${i}`,shelfId:e.id,category:e.id,localPosition:[-.49+i%3*.49,i<3?.73:1.57,.075],localRotation:[0,Math.PI/2,0],occupantBookId:null};if([0,2,4].includes(i)){const s=`shelf_${r.slotId}`;r.occupantBookId=s,this.books.set(s,{...new so(s,t.id),category:t.category,location:{type:"shelf",shelfId:e.id,slotId:r.slotId}})}this.slots.push(r)}}}pickup(e){const t=this.books.get(e);if(!t||this.heldBookId)return!1;const i=this.slots.find(r=>r.occupantBookId===e);return i&&(i.occupantBookId=null),t.location={type:"held"},this.heldBookId=e,this.result=null,!0}removeFromShelf(e){return this.getBookLocation(e)?.type==="shelf"&&this.pickup(e)}place(e,t,i){const r=this.slots.find(s=>s.slotId===i&&s.shelfId===t);if(!r||r.occupantBookId||e!==this.heldBookId||!this.books.has(e))return!1;if(r.occupantBookId=e,this.books.get(e).location={type:"shelf",shelfId:t,slotId:i},this.heldBookId=null,this.isTaskComplete()){const s=this.getFinalLayout(),o=s.filter(a=>a.isCorrect).length;this.result={taskBookIds:[...this.taskBookIds],finalPlacements:s,correctPlacementCount:o,wrongPlacementCount:s.length-o,completedAt:new Date().toISOString()}}return!0}getBookLocation(e){return this.books.get(e)?.location}getPendingBooks(){return this.taskBookIds.filter(e=>this.getBookLocation(e).type!=="shelf")}isTaskComplete(){return!this.heldBookId&&!this.getPendingBooks().length}getFinalLayout(){return[...this.books.keys()].flatMap(e=>{const t=this.books.get(e),i=t.location;if(i.type!=="shelf")return[];const r=this.slots.find(s=>s.slotId===i.slotId);return[{bookId:e,actualCategory:t.category,shelfId:r.shelfId,shelfCategory:r.category,slotId:r.slotId,isCorrect:t.category===r.category}]})}}function lv(n,{returnMode:e=!1}={}){const t=new Map,i=[],r=la("#483326"),s=la("#62462e");He("#262521");const o=He("#292b25"),a=He("#8e7750",{metalness:.45,roughness:.48}),c=He("#675f48"),l=He("#293e3b"),u=He("#152737");xe(n,[11,.16,10],[0,-.08,-.9],la("#4a4031"));for(let z=-5;z<5;z+=.54)xe(n,[.008,.006,9.5],[z,.008,-.9],He("#262c28"));xe(n,[11,.18,10],[0,3.65,-.9],He("#292a22")),xe(n,[.2,3.8,9.5],[-5.25,1.8,-.9],c),xe(n,[.2,3.8,9.5],[5.25,1.8,-.9],c),xe(n,[10.5,3.8,.2],[0,1.8,3.95],c);for(const z of[-4.25,4.25])xe(n,[1.95,3.8,.24],[z,1.8,-4.4],c),xe(n,[1.96,.94,.26],[z,.48,-4.22],l);xe(n,[7,.14,.23],[0,.07,-4.45],l),xe(n,[7,.33,.23],[0,3.49,-4.45],r);const f=new Qd({color:"#9baab0",transparent:!0,opacity:.055,roughness:.3,metalness:.05,depthWrite:!1});xe(n,[7,3.25,.025],[0,1.77,-4.48],f).castShadow=!1;for(const z of[-3.5,-2.32,-1.16,0,1.16,2.32,3.5])xe(n,[.085,3.02,.17],[z,1.96,-4.31],o);for(const z of[.15,1.14,3.39])xe(n,[7.15,.075,.16],[0,z,-4.3],o);const h=new Yt;h.position.set(2.35,.52,-4.21),n.add(h);for(const z of[0,1.08])xe(h,[.065,2.81,.1],[z,1.405,0],r);for(const z of[0,2.81])xe(h,[1.15,.065,.1],[.54,z,0],r);xe(h,[.04,.43,.04],[.9,1.18,.095],a);const p=vn(h,.36,.2,[.54,1.8,.062],zn(["OPEN LATE"],{w:512,h:256,bg:"#283f37",ink:"#c7b68a",size:42}));for(const z of[-4.6,-2.45,2.45,4.6])xe(n,[.11,.18,8.6],[z,3.49,-.6],r);for(const z of[-3.7,-.5,2])xe(n,[10,.14,.14],[0,3.48,z],r);function g(z,ce,de=1.65,U=2.62,q){const re=new Yt;re.position.set(z,0,ce),n.add(re),t.set(q.id,re),xe(re,[.6,.035,.12],[0,2.4,.35],o),xe(re,[.48,.008,.09],[0,2.378,.35],He("#c9b488",{emissive:"#d8b882",emissiveIntensity:.65}));const Ee=new Di("#e5cca6",1.8,3.5,2);Ee.position.set(0,2.23,1.02),re.add(Ee),i.push([Ee,Ee.intensity]),xe(re,[de,U,.1],[0,U/2,-.18],He("#302920"));for(const we of[-1,1])xe(re,[.09,U,.49],[we*(de/2),U/2,.02],r);for(const we of[.4,1.24,2.08])xe(re,[de+.12,.085,.53],[0,we,.03],r);xe(re,[de+.18,.12,.57],[0,2.13,.03],r),vn(re,.74,.19,[0,2.25,.308],zn(q.label,{w:512,h:192,bg:"#302d25",ink:"#b6a079",size:40}))}Ol.forEach(z=>g(z.position[0],z.position[2],1.65,2.16,z)),xe(n,[1.42,.085,.78],[-2.55,.76,-2.45],r);for(const z of[-3.1,-2])for(const ce of[-2.7,-2.2])xe(n,[.055,.73,.055],[z,.37,ce],o);for(const z of[-3.35,-1.82]){xe(n,[.39,.065,.4],[z,.43,-2.15],r),xe(n,[.38,.38,.055],[z,.7,-2.32],r);for(const ce of[-.15,.15])for(const de of[-.14,.14])xe(n,[.038,.4,.038],[z+ce,.21,-2.15+de],o)}function x(z,ce,de,U=1){Wt(n,.16*U,.19*U,.045*U,[z,ce,de],a),Wt(n,.018*U,.021*U,.47*U,[z,ce+.245*U,de],a);const q=Wt(n,.115*U,.27*U,.18*U,[z,ce+.56*U,de],He("#2b5142",{roughness:.48}),12);Wt(n,.2*U,.2*U,.012,[z,ce+.475*U,de],He("#ffe3a2",{emissive:"#ffd27a",emissiveIntensity:2.2}),12);const re=new Di("#ffd098",2.5*U,2.5*U,2);return re.position.set(z,ce+.42*U,de),n.add(re),de<0&&i.push([re,re.intensity]),q}x(-2.55,.82,-2.48,.75);function m(z,ce,de=1){const U=new Yt;U.position.set(z,0,ce),U.scale.setScalar(de),n.add(U),Wt(U,.2,.14,.32,[0,.18,0],He("#564735")),Wt(U,.013,.018,.68,[0,.63,0],He("#384631"),6);for(let q=0;q<6;q++){const re=new St(new _o(.27),He(q%2?"#394e34":"#2d4738")),Ee=q*2.4;re.scale.set(.42,1,.18),re.position.set(Math.cos(Ee)*.18,.48+q*.046,Math.sin(Ee)*.15),re.rotation.set(Math.sin(Ee)*.7,0,Math.cos(Ee)*.65),U.add(re)}}m(-3.45,-3.55,1.16),m(3.48,-3.5,.95),xe(n,[5.45,.16,1.82],[0,.97,1.31],s),xe(n,[5.25,.83,.12],[0,.47,.44],r),xe(n,[5.5,.043,.045],[0,1.025,2.2],a);for(const z of[-2.68,2.68])xe(n,[.08,.87,1.77],[z,.49,1.3],r);x(-1.73,1.063,.36,.88);const d=xe(n,[1.39,.012,.79],[0,1.057,1.19],He("#293d38")),b=new Yt;b.position.set(-1.14,1.055,.87),n.add(b),xe(b,[.69,.044,.65],[0,.022,0],r);for(const z of[-.335,.335])xe(b,[.035,.13,.65],[z,.073,0],r);xe(b,[.69,.13,.035],[0,.073,-.305],r),xe(b,[.69,.09,.035],[0,.052,.305],r);const y=vn(b,.35,.063,[0,.055,.324],zn([e?"归 还":"待 处 理"],{w:512,h:128,bg:"#b9ad89",ink:"#3b4438",size:48})),v=new Yt;v.position.set(1.22,1.056,.84),n.add(v);const w=He("#242e2c",{roughness:.55});xe(v,[.64,.075,.69],[0,.037,0],w),xe(v,[.44,.025,.45],[0,.086,.065],He("#364b3f",{roughness:.35})),xe(v,[.13,.34,.12],[.17,.21,-.22],w),xe(v,[.57,.25,.22],[0,.47,-.2],w,[-.12,0,0]);const A=vn(v,.44,.155,[0,.474,-.077],zn(["TERMINAL 03","READY"],{w:768,h:256,bg:"#263d2c",ink:"#9dcf89",size:45}),[-.12,0,0],!0),P=xe(v,[.035,.013,.008],[.24,.398,-.075],He("#bbd78b",{emissive:"#a5dd6b",emissiveIntensity:1.4})),L=xe(v,[.43,.003,.008],[0,.101,.08],He("#a9db81",{emissive:"#80c36b",emissiveIntensity:1}));L.visible=!1;const E=new Yt;E.position.set(-.08,1.075,1.83),E.rotation.set(-Math.PI/2,0,-.035),n.add(E),xe(E,[.57,.34,.023],[0,0,0],r),vn(E,.51,.295,[0,0,.013],ui(768,448,(z,ce,de)=>{z.fillStyle="#b5aa87",z.fillRect(0,0,ce,de),z.fillStyle="#545b49",z.font="29px Georgia",z.fillText("NIGHT SHIFT LOG",45,63),z.font="18px Microsoft YaHei",z.fillText("夜间借阅登记",45,104),z.strokeStyle="#6c766244";for(let U=153;U<de-20;U+=42)z.beginPath(),z.moveTo(45,U),z.lineTo(ce-45,U),z.stroke();for(const U of[198,440,588])z.beginPath(),z.moveTo(U,127),z.lineTo(U,de-27),z.stroke()}));const M=Wt(n,.008,.008,.27,[.34,1.079,1.82],He("#222f2c"),6);M.rotation.z=Math.PI/2,M.rotation.y=.19;const I=Wt(n,.08,.066,.16,[1.88,1.14,1.36],He("#bcac88"),12);Wt(n,.068,.068,.002,[1.88,1.223,1.36],He("#312820"),12);const B=new St(new vo(.055,.013,5,12),I.material);B.position.set(1.965,1.16,1.36),n.add(B);for(let z=0;z<3;z++){const ce=xe(n,[.52,.072,.33],[-1.95,1.09+z*.078,1.59],He(["#48514a","#65473c","#3b4b50"][z]));ce.rotation.y=z*.09,vn(n,.42,.047,[-1.94,1.095+z*.078,1.762],zn([["QUIET PLACES","ASTRONOMY","NIGHT ARCHIVES"][z]],{w:512,h:100,bg:["#48514a","#65473c","#3b4b50"][z],ink:"#b6a986",size:38}))}xe(n,[30,.1,24],[0,-.11,-12],He("#142536",{roughness:.3,metalness:.12})),xe(n,[8,5,1.8],[-.7,2.3,-13],He("#243c51",{emissive:"#1b344e",emissiveIntensity:.4})),xe(n,[8.4,.22,2],[-.7,4.85,-13],He("#18232c")),xe(n,[3.7,6.8,2],[7,3.2,-16],u),xe(n,[3.8,4.6,2],[-8,2.2,-14],u);for(let z=-3.9;z<3;z+=1.15)for(const ce of[.9,2.25,3.65]){const de=ar()>.55,U=He(de?"#b59859":"#213945",de?{emissive:"#b27e35",emissiveIntensity:.6}:{emissive:"#1f394c",emissiveIntensity:.3});xe(n,[.64,.84,.04],[z,ce,-12.075],U),xe(n,[.035,.84,.05],[z,ce,-12.03],o),xe(n,[.65,.035,.05],[z,ce,-12.03],o)}const V=ui(128,512,(z,ce,de)=>{const U=z.createLinearGradient(0,0,0,de);U.addColorStop(0,"#e6be7600"),U.addColorStop(.35,"#e6be7688"),U.addColorStop(.8,"#bba77955"),U.addColorStop(1,"#bfa77b00"),z.fillStyle=U;const q=as(51);for(let re=0;re<de;re+=4+q()*10){const Ee=12+q()*85;z.globalAlpha=.15+q()*.8,z.fillRect((ce-Ee)/2+(q()-.5)*20,re,Ee,2+q()*3)}});for(const[z,ce]of[[-2.7,-7],[2.8,-8],[6,-11],[-6,-10]]){Wt(n,.045,.07,2.78,[z,1.39,ce],o,7),xe(n,[.3,.09,.31],[z,2.82,ce],o),xe(n,[.22,.18,.22],[z,2.7,ce],He("#f5d49b",{emissive:"#ffcf82",emissiveIntensity:2.6}));const de=new Di("#ffc77f",6,4.5,2);de.position.set(z,2.6,ce),n.add(de);const U=new St(new Rr(1,5),new Wi({map:V,transparent:!0,opacity:.55,depthWrite:!1,blending:Zs}));U.rotation.x=-Math.PI/2,U.position.set(z,-.045,ce+1.5),n.add(U)}for(const[z,ce]of[[-3.9,-7.5],[4.4,-8.8],[-1.7,-10.5]]){Wt(n,.04,.12,3.4,[z,1.7,ce],He("#17292d"),5);for(let de=0;de<7;de++){const U=de*2.7,q=Wt(n,.009,.035,.85,[z+Math.cos(U)*.23,1.6+de*.21,ce+Math.sin(U)*.2],He("#1a2c2f"),5);q.rotation.z=Math.cos(U)*.8,q.rotation.x=Math.sin(U)*.6}}const $=500,k=new Float32Array($*6),K=new Float32Array($);for(let z=0;z<$;z++){const ce=z*6;k[ce]=(ar()-.5)*20,k[ce+1]=ar()*7,k[ce+2]=-4.7-ar()*13,k[ce+3]=k[ce]+.025,k[ce+4]=k[ce+1]+.13+ar()*.12,k[ce+5]=k[ce+2],K[z]=2.2+ar()*2.6}const Q=new an;Q.setAttribute("position",new Nn(k,3));const X=new _d(Q,new Wu({color:"#85a9bb",transparent:!0,opacity:.12,depthWrite:!1}));n.add(X);const pe=ui(512,512,(z,ce,de)=>{const U=as(9);z.strokeStyle="#c6d5dd";for(let q=0;q<110;q++){z.globalAlpha=.035+U()*.12,z.lineWidth=.4+U()*.8;const re=U()*ce,Ee=U()*de;z.beginPath(),z.moveTo(re,Ee),z.lineTo(re-2,Ee+12+U()*58),z.stroke()}});vn(n,6.85,2.8,[0,1.95,-4.18],pe,null,!0),n.add(new np("#8b9caa","#3b3020",.26));const _e=new rp("#ffd3a0",11,8,Math.PI/3,.75,1.5);_e.position.set(-1.25,3.28,1.4),_e.target.position.set(0,1.05,.15),_e.castShadow=!0,_e.shadow.mapSize.set(1024,1024),_e.shadow.bias=-3e-4,_e.shadow.normalBias=.025,n.add(_e,_e.target);const be=new Di("#ffe0b4",1.9,4,2);be.position.set(.9,2.3,1.2),n.add(be);const Xe=new Di("#93b7d5",4.5,5,2);Xe.position.set(0,2.6,-2.9),n.add(Xe);for(const[z,ce]of[[-1.2,.9],[1.8,-2.6],[-2.8,-3.1]])if(xe(n,[.87,.07,.37],[z,3.42,ce],o),xe(n,[.73,.016,.26],[z,3.376,ce],He("#ead6a2",{emissive:"#ffd39a",emissiveIntensity:1.3})),ce<0){const de=new Di("#f5bd78",2.2,4,2);de.position.set(z,3.22,ce),n.add(de),i.push([de,de.intensity])}return{door:h,scanner:v,reject:b,screen:A,scanLine:L,led:P,mat:d,sortingShelves:t,closed:!1,setReadingProgress(z){i.forEach(([ce,de])=>ce.intensity=de*(1-.05*z))},setClosed(z=1){this.closed||(p.material.map.dispose(),p.material.map=zn(["CLOSED"],{w:512,h:256,bg:"#283f37",ink:"#c7b68a",size:48}),this.closed=!0),i.forEach(([ce,de])=>ce.intensity=de*(1-.2*z))},setReturnMode(z){const ce=y.material.map;y.material.map=zn([z?"归 还":"待 处 理"],{w:512,h:128,bg:"#b9ad89",ink:"#3b4438",size:48}),ce.dispose()},update(z,ce){for(let de=0;de<$;de++){const U=de*6,q=K[de]*z;k[U+1]-=q,k[U+4]-=q,k[U+4]<0&&(k[U+1]+=7,k[U+4]+=7)}Q.attributes.position.needsUpdate=!0,L.visible&&(L.position.z=.07+Math.sin(ce*13)*.19)},setScanner(z){const ce=A.material.map;A.material.map=zn([z?"借 阅 完 成":"READY / 待机"],{w:768,h:256,bg:z?"#4d613e":"#263d2c",ink:z?"#eff4bf":"#9dcf89",size:45}),ce.dispose()}}}class cv{constructor(){this.ctx=null,this.muted=!1,this.master=null,this.ambience=null,this.ambienceVolume=.28,this.layers=[]}async start(){if(this.ctx){await this.ctx.resume();return}this.ctx=new AudioContext;const e=this.ctx;this.master=e.createGain(),this.master.gain.value=this.muted?0:.5,this.master.connect(e.destination),this.ambience=e.createGain(),this.ambience.gain.value=this.ambienceVolume,this.ambience.connect(this.master);const t=e.createBuffer(1,e.sampleRate*4,e.sampleRate),i=t.getChannelData(0);let r=0;for(let f=0;f<i.length;f++){const h=Math.random()*2-1;r=(r+.018*h)/1.02,i[f]=r*3+h*.08}const s=e.createBufferSource();s.buffer=t,s.loop=!0;const o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=2400;const a=e.createGain();a.gain.value=.06,s.connect(o).connect(a).connect(this.ambience),s.start();const c=e.createOscillator();c.type="sine",c.frequency.value=62;const l=e.createGain();l.gain.value=.003,c.connect(l).connect(this.ambience),c.start();const u=new URL("audio/",document.baseURI);this.loading=Promise.allSettled([this.loadLayer(new URL("indoor-rain-508962.mp3",u),.12,1550,47,-.08),this.loadLayer(new URL("room-tone-192529.mp3",u),.075,620,71,.08)]).then(f=>(f.some(h=>h.status==="fulfilled")&&(a.gain.setTargetAtTime(0,e.currentTime,1.5),l.gain.setTargetAtTime(0,e.currentTime,1.5)),f))}async loadLayer(e,t,i,r,s){const o=await fetch(e,{signal:AbortSignal.timeout(5e3)});if(!o.ok)throw new Error(`Audio unavailable: ${o.status}`);const a=await this.ctx.decodeAudioData(await o.arrayBuffer()),c=this.prepareLoop(a),l=this.ctx,u=l.createBufferSource();u.buffer=c,u.loop=!0;const f=l.createBiquadFilter();f.type="lowpass",f.frequency.value=i;const h=l.createGain();h.gain.value=0;const p=l.createStereoPanner();p.pan.value=s,u.connect(f).connect(h).connect(p).connect(this.ambience);const g=l.createOscillator(),x=l.createGain();g.frequency.value=1/r,x.gain.value=t*.18,g.connect(x).connect(h.gain),h.gain.setTargetAtTime(t,l.currentTime,2),u.start(0,Math.random()*c.duration),g.start(),this.layers.push({url:e,source:u,volume:h,filter:f,modulation:g})}prepareLoop(e){const t=Math.min(Math.floor(e.sampleRate*.7),Math.floor(e.length/4)),i=this.ctx.createBuffer(e.numberOfChannels,e.length-t,e.sampleRate);let r=0,s=0;for(let c=0;c<i.numberOfChannels;c++){const l=e.getChannelData(c),u=i.getChannelData(c);for(let f=0;f<u.length;f++){const h=f/t*Math.PI/2;u[f]=f<t?l[e.length-t+f]*Math.cos(h)+l[f]*Math.sin(h):l[f],r+=u[f]*u[f],s=Math.max(s,Math.abs(u[f]))}}const o=Math.sqrt(r/(i.length*i.numberOfChannels)),a=Math.min(.18/Math.max(o,1e-4),.65/Math.max(s,1e-4));for(let c=0;c<i.numberOfChannels;c++){const l=i.getChannelData(c);for(let u=0;u<l.length;u++)l[u]*=a}return i}setAmbienceVolume(e){this.ambienceVolume=Math.min(1,Math.max(0,Number(e)||0)),this.ambience&&this.ambience.gain.setTargetAtTime(this.ambienceVolume,this.ctx.currentTime,.15)}toggle(){return this.muted=!this.muted,this.master&&this.master.gain.setTargetAtTime(this.muted?0:.5,this.ctx.currentTime,.15),!this.muted}tone(e,t=.13,i=.12,r=0){if(!this.ctx)return;const s=this.ctx,o=s.currentTime+r,a=s.createOscillator(),c=s.createGain();a.type="sine",a.frequency.value=e,c.gain.setValueAtTime(0,o),c.gain.linearRampToValueAtTime(i,o+.008),c.gain.exponentialRampToValueAtTime(.001,o+t),a.connect(c).connect(this.master),a.start(o),a.stop(o+t+.02)}bell(){this.tone(1318,.75,.05),this.tone(1760,.7,.025,.12)}scan(){this.tone(1174,.14,.15),this.tone(1568,.25,.1,.095)}paper(e=.09){if(!this.ctx)return;const t=this.ctx,i=t.createBuffer(1,t.sampleRate*.16,t.sampleRate),r=i.getChannelData(0);for(let a=0;a<r.length;a++)r[a]=(Math.random()*2-1)*(1-a/r.length)*e;const s=t.createBufferSource();s.buffer=i;const o=t.createBiquadFilter();o.type="bandpass",o.frequency.value=1350,s.connect(o).connect(this.master),s.start()}tap(){this.tone(175,.09,.025)}}const uv={title:"夜航",englishTitle:["NIGHT","PASSAGE"],coverColor:"#35414a",art:"rain",personal:!0,content:["末班车驶过桥面，雨水沿着车窗缓缓落下。靠窗的旅人收好车票，看见河对岸还有一盏灯亮着。","小巷里的店铺关了门，屋檐替晚归的人留下一小块干燥的地方。他站在那里，等一阵雨过去。","港口的船早已停稳，水面把岸边的灯拉得很长。有人把围巾叠好，放在明天要带走的行李上。","回家的路并不远。经过最后一个路口时，他放慢了脚步，想起桌上留着半杯茶，和一本尚未读完的书。"]};class hv{times=["21:47","21:51","21:55","21:58","22:00"];readPages=new Set;readingEvents=[];page=0;dwell=0;get advances(){return this.readPages.size}get time(){return this.times[Math.min(this.advances,4)]}get ready(){return this.advances>=4}update(e,t){return e!==this.page&&(this.page=e,this.dwell=0),e<1||e>4||this.readPages.has(e)||(this.dwell+=t,this.dwell<2)?!1:(this.readPages.add(e),!0)}}const fv=[[-2.725,2.725,.4,2.22],[-3.26,-1.84,-2.84,-2.06],[-3.55,-3.15,-2.5,-1.95],[-2.02,-1.62,-2.5,-1.95],[-3.7,-3.2,-3.8,-3.3],[3.23,3.73,-3.75,-3.25],...Ol.map(n=>[n.position[0]-.88,n.position[0]+.88,n.position[2]-.24,n.position[2]+.3])];function su(n,e){return n>-5.05+.21&&n<5.05-.21&&e>-4.05+.21&&e<3.8-.21&&!fv.some(([i,r,s,o])=>n>i-.21&&n<r+.21&&e>s-.21&&e<o+.21)}function dv(n,e,t,i,r){const s=Math.hypot(t,i);if(!s)return!1;const o=1.45*Math.min(r,.05)/s,a=(Math.cos(e)*i-Math.sin(e)*t)*o,c=(-Math.cos(e)*t-Math.sin(e)*i)*o,l=n.x,u=n.z;return su(n.x+a,n.z)&&(n.x+=a),su(n.x,n.z+c)&&(n.z+=c),n.x!==l||n.z!==u}function pv(n,e,t){const i=new Map,r=[],s=new Wi({transparent:!0,opacity:0,depthWrite:!1});for(const o of t.slots){const a=e.get(o.shelfId),c=xe(a,[.43,.75,.02],[o.localPosition[0],o.localPosition[1]+.08,.34],s);c.castShadow=c.receiveShadow=!1,c.userData.slotId=o.slotId,r.push(c)}for(const o of t.books.values()){const a=al.find(l=>l.id===o.definitionId),c=Mo(a);if(c.userData.shelvingBookId=o.instanceId,i.set(o.instanceId,c),o.location.type==="shelf"){const l=t.slots.find(u=>u.slotId===o.location.slotId);e.get(l.shelfId).add(c),c.position.fromArray(l.localPosition),c.rotation.set(...l.localRotation)}else n.add(c),c.position.fromArray(o.location.position),c.rotation.set(-Math.PI/2,0,.15*(i.size%3-1))}return{books:i,slotTargets:r}}const J=n=>document.getElementById(n),Kn=new URLSearchParams(location.search),oo=Kn.get("dev")==="1",vh=Kn.get("touch")==="1";let hn=vh||matchMedia("(pointer: coarse)").matches;hn&&document.body.classList.add("touch-mode");const ao=Kn.get("mode");let mt="DAY_COUNTER",Mi=!1,Xt=null;const Zt=new hv,pt=new av,Wn=new Set,$n={forward:0,sideways:0};let xn=null;window.addEventListener("pointerdown",n=>{vh||!["mouse","touch"].includes(n.pointerType)||(hn=n.pointerType==="touch",document.body.classList.toggle("touch-mode",hn),hn||($n.forward=$n.sideways=0,xn=null))},!0);const jt=()=>mt.startsWith("NIGHT_"),on=()=>mt==="DAY_COUNTER"?ke.phase:qt==="OBJECT_INSPECT"?"BOOK_INSPECT":Mi||pt.heldBookId?"BOOK_HELD":"ITEMS_PLACED";let Si=Kn.get("case")==="B"?"B":"A";const Ir=Kn.get("mode")==="memory",Xn=Ir?new sv:null;let Mn=Xn?.begin(),Rt=Kn.get("mode")==="return";const Wr=Ul[Si],xh={lin_zhou:{...os.A,id:"lin_zhou",name:"林舟",hairStyle:"short",shirtColor:"#34463c"},zhou_ning:{...os.B,id:"zhou_ning",name:"周宁"}};let Hn=Ir?xh[Mn.step.customerId]:os[Si],At=null,lo=null,Fl=null,ll=0;const Mh=6,Sh=250;let On=!1,Pe=!1,bn=null,Fn=!1,zt=!1,fn=0,qt="COUNTER_FREE",ls="free",oi=0,yh=0,Eh=0,Hi=0;const Lr=[.42,-.22,-1.05],fs=[-.12,-.35,.08];let $r=0,Jr=0,Ks=0,$s=0,hr=0,fr=0,Pt=0,It=0,en=0,ou=performance.now(),au,cl,ul=!1,lu,cu,uu;const hu=new Set;let fu=37,du=53,pu=0;const An=new le(0,0),ca=Tt.degToRad(5),ua=Tt.degToRad(3),ct=new cv,Js=[],wt=new fd;wt.background=new $e("#152e45");wt.fog=new Tl("#142a38",.022);const Fe=new cn(67,innerWidth/innerHeight,.035,48);Fe.position.set(0,1.67,2.64);Fe.rotation.order="YXZ";Fe.rotation.x=-.12;wt.add(Fe);let Lt;try{Lt=new W_({antialias:!0,powerPreference:"high-performance"})}catch(n){throw J("fatal").hidden=!1,J("fatal").textContent="无法创建 3D 画面。请使用支持 WebGL 2 的桌面浏览器，并开启硬件加速。",n}Lt.setSize(innerWidth,innerHeight);Lt.setPixelRatio(Math.min(devicePixelRatio,hn?1:1.5));Lt.shadowMap.enabled=!0;Lt.shadowMap.type=_u;Lt.toneMapping=dl;Lt.toneMappingExposure=.88;J("game").appendChild(Lt.domElement);const Dr=new $_(Lt);Dr.addPass(new J_(wt,Fe));Dr.addPass(new yr(new le(innerWidth,innerHeight),.15,.45,1.25));Dr.addPass(new j_);const Th=new hh({uniforms:{tDiffuse:{value:null},uTime:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform sampler2D tDiffuse;uniform float uTime;varying vec2 vUv;void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;float n=fract(sin(dot(vUv*vec2(1300.,800.)+mod(uTime,10.),vec2(12.9898,78.233)))*43758.5453);c+=(n-.5)*.018;gl_FragColor=vec4(c,1.);}"});Dr.addPass(Th);const Kt=lv(wt,{returnMode:Rt}),hl=pv(wt,Kt.sortingShelves,pt),So=Mo(uv),Bl=[.7,1.105,1.69];So.position.fromArray(Bl);So.rotation.set(-Math.PI/2,0,-.09);wt.add(So);const Yn=new Di("#fff0d0",1.3,1.65,2);Yn.position.set(-.25,.22,.12);Fe.add(Yn);let et=fh(Hn);wt.add(et);et.position.set(2.9,0,-4.85);et.visible=!1;let cs=Ir?Hn:os.A,bt=dh(cs),Re=Mo(Ir?{...Mn.definition,damageProfile:Mn.book.visualDamages()}:Rt?Wr.book:void 0);const ha=new Map([[Hn.id,{person:et,card:bt}]]),fa=new Map(Ir?[[Mn.book.instanceId,Re]]:[]);wt.add(bt,Re);bt.visible=!1;Re.visible=!1;const yo=new C(.35,1.073,1.2),Ur=new C(-.36,1.098,1.08),Gi=new wn(-Math.PI/2,0,-.065);bt.position.copy(yo);bt.rotation.copy(Gi);Re.position.copy(Ur);Re.rotation.copy(Gi);let ke=Mn?.transaction||new gh({type:Rt?"return":"borrow",customerId:Rt?Wr.customerId:os[Si].id,bookId:Rt?Wr.book.id:"midnight-atlas",damageProfile:Rt?Wr.book.damageProfile:[],existingDamageBeforeLoan:Rt?Wr.existingDamageBeforeLoan:[],actualIdentityMatch:Si==="A"});const mv=new Wi({transparent:!0,opacity:0,depthWrite:!1}),yi={};function Xi(n,e,t){const i=xe(wt,e,t,mv);return i.castShadow=!1,i.receiveShadow=!1,i.userData.name=n,yi[n]=i,i}Xi("card",[.44,.08,.29],yo.toArray());Xi("book",[.48,.12,.62],Ur.toArray());Xi("bookSlot",[.5,.1,.63],Ur.toArray());Xi("scanner",[.64,.57,.68],[1.22,1.32,.84]);Xi("reject",[.7,.18,.66],[-1.14,1.14,.87]);yi.return=yi.reject;Rt&&(yi.return.userData.name="return");Xi("customer",[.75,1.25,.45],[0,1.2,-.03]);Xi("personalBook",[.47,.12,.61],Bl);const gv={photo:[47/1024,169/640,260/1024,315/640],name:[350/1024,185/640,610/1024,130/640],date:[350/1024,355/640,610/1024,90/640]},Er=new sh;function _v(n){et.removeFromParent(),bt.removeFromParent(),Re.removeFromParent(),et.visible=bt.visible=Re.visible=!1,Mn=n,ke=n.transaction,Rt=ke.type==="return",Hn=xh[n.step.customerId],cs=Hn,ha.has(Hn.id)||ha.set(Hn.id,{person:fh(Hn),card:dh(cs)}),{person:et,card:bt}=ha.get(Hn.id),fa.has(n.book.instanceId)||fa.set(n.book.instanceId,Mo(n.definition)),Re=fa.get(n.book.instanceId),mh(Re,n.book.visualDamages()),wt.add(et,bt,Re),et.visible=bt.visible=Re.visible=!1,et.position.set(2.9,0,-4.85),et.rotation.set(0,0,0),bt.position.copy(yo),bt.rotation.copy(Gi),Re.position.copy(Ur),Re.rotation.copy(Gi),Re.userData.cover.rotation.y=0,fn=0,Fn=zt=ul=!1,At=lo=Fl=bn=null,Pt=It=0,Yn.position.set(-.25,.22,.12),yi.reject.userData.name=Rt?"return":"reject",Kt.setReturnMode(Rt),Kt.setScanner(!1),J("complete").querySelector("p").textContent=Rt?"本次还书处理已记录":"本次借阅处理已记录",Vt()}function Dt(n,e){return new Promise(t=>{Js.push({elapsed:0,duration:n,update:e,resolve:t})})}function vt(n){return Dt(n,()=>{})}const Nt=n=>n*n*(3-2*n);async function Sn(n,e=.7,t="face"){if(qt=n,ls=n==="DIALOGUE_FOCUS"?t:"free",n==="DIALOGUE_FOCUS"){const o=et.userData.head.getWorldPosition(new C);o.y-=.12,t==="damage"&&(o.x+=.07);const a=o.x-Fe.position.x,c=Fe.position.z-o.z;yh=Math.atan2(-a,c),Eh=Math.atan2(o.y-1.67,Math.hypot(a,c))+.12}const i=oi,r=Hi,s=n==="DIALOGUE_FOCUS"?1:0;await Dt(e,o=>{oi=Tt.lerp(i,s,Nt(o)),Hi=r*(1-Nt(o))})}async function da(n,e,t=.5){ls=n;const i=Hi,r=Tt.degToRad(e);await Dt(t,s=>Hi=Tt.lerp(i,r,Nt(s)))}async function Ht(n,e,t,i,r=.32){e.attach(n);const s=n.position.clone(),o=n.quaternion.clone(),a=new C(...t),c=new br().setFromEuler(new wn(...i));await Dt(r,l=>{const u=Nt(l);n.position.lerpVectors(s,a,u),n.quaternion.slerpQuaternions(o,c,u)})}function Ut(n,e="访客",t=3.5){clearTimeout(cl),J("dialogue").hidden=!1,J("dialogue").querySelector("p").textContent=n,J("dialogue").querySelector(".speaker").textContent=e,cl=setTimeout(()=>J("dialogue").hidden=!0,t*1e3)}function Ei(n,e=2500){clearTimeout(au),J("toast").textContent=n,J("toast").hidden=!1,au=setTimeout(()=>J("toast").hidden=!0,e)}function vv(n){J("task-title").textContent=n,clearTimeout(lu),J("task").hidden=!1,lu=setTimeout(()=>J("task").hidden=!0,2800)}function Vt(){const n=on();n!==uu&&(clearTimeout(cu),J("inspect-help").hidden=!0,uu=n,["BOOK_HELD","BOOK_INSPECT","ID_HELD"].includes(n)&&!hu.has(n)&&(hu.add(n),J("inspect-help").hidden=!1,J("inspect-help").innerHTML=n==="BOOK_INSPECT"?"<span>左键拖动</span>旋转 <span>滚轮</span>翻页 <span>R</span>回到手中":n==="BOOK_HELD"?"<span>R</span>仔细查看 <span>左键</span>点击目标使用":"点击证件信息提问 · 点击顾客递还",cu=setTimeout(()=>J("inspect-help").hidden=!0,5e3)))}async function us(n,e){const t=et.userData.arms[n],i=t.rotation.x;await Dt(.28,r=>{t.rotation.x=Tt.lerp(i,-1,Nt(r))}),await e(),await Dt(.28,r=>{t.rotation.x=-1*(1-Nt(r))})}async function co(n,e){const t=et.position.clone(),i=new C(...n),r=i.x-t.x,s=i.z-t.z,o=Math.atan2(r,s),a=et.rotation.y;await Dt(.25,c=>et.rotation.y=Tt.lerp(a,o,Nt(c))),await Dt(e,c=>{et.position.lerpVectors(t,i,c);const l=Math.sin(c*e*8);et.userData.body.position.y=Math.abs(l)*.015,et.userData.legs[0].rotation.x=l*.28,et.userData.legs[1].rotation.x=-l*.28,et.userData.arms[0].rotation.x=-l*.14,et.userData.arms[1].rotation.x=l*.14}),et.userData.legs.forEach(c=>c.rotation.x=0),et.userData.arms.forEach(c=>c.rotation.x=0)}async function xv(){if(!On){if(On=!0,Pe=!0,await ct.start().catch(()=>Ei("当前浏览器未启用声音，画面与操作仍可继续。")),J("welcome").hidden=!0,document.body.classList.add("mobile-playing"),J("settings").hidden=!0,J("opening").hidden=!1,setTimeout(()=>J("opening").hidden=!0,2e3),J("reticle").hidden=!1,await vt(1.3),ao==="closing")return Ch();if(ao==="shelving"){Kt.setClosed(),[1,2,3,4].forEach(n=>Zt.readPages.add(n)),document.querySelector(".clock").textContent="22:00",Fe.position.set(3.15,1.85,2.65),Ih();return}await bh()}}async function bh(){Pe=!0,ke.dispatch("START"),ct.bell(),et.visible=!0,await Dt(.5,e=>Kt.door.rotation.y=-Nt(e)*.95),await co([1.8,0,-3.3],.75),await Dt(.5,e=>Kt.door.rotation.y=-(1-Nt(e))*.95),await co([0,0,-.03],2.35);const n=et.rotation.y;await Dt(.6,e=>{et.rotation.y=n*(1-Nt(e))}),ke.dispatch("ARRIVE"),vv(Rt?"处理还书":"处理借阅"),await Sn("DIALOGUE_FOCUS"),Ut(Mn?.step.greeting||(Rt?"你好，我来还书。":"晚上好，我想借这本书。")),await vt(1.4),await Promise.all([da("book",-2),us(0,async()=>{Re.visible=!0,Re.position.set(-.25,1.18,.34),Re.rotation.set(-.9,0,.1),await Ht(Re,wt,Ur.toArray(),Gi.toArray().slice(0,3),.38),ct.tap()})]),Rt||(await da("face",0,.35),Ut("这是我的借阅证。"),await Promise.all([da("card",-2),us(1,async()=>{bt.visible=!0,bt.position.set(.25,1.2,.4),bt.rotation.set(-1,0,-.1),await Ht(bt,wt,yo.toArray(),Gi.toArray().slice(0,3),.3),ct.paper()})])),await vt(.7),await Sn("COUNTER_FREE",.5),ke.dispatch("PLACE_ITEMS"),Pe=!1,Vt()}async function Mv(n){const e=n==="card"?"PICK_ID":"PICK_BOOK";ke.dispatch(e)&&(Pe=!0,bn=null,J("dialogue").hidden=!0,Vt(),ct.paper(),n==="card"?await Ht(bt,Fe,[.33,-.12,-.78],[0,-.04,0]):(Pt=It=0,await Ht(Re,Fe,Lr,fs)),Pe=!1)}async function uo(){Fn=!1,fn=0;const n=Re.userData.cover.rotation.y;await Dt(.3,e=>Re.userData.cover.rotation.y=n*(1-Nt(e)))}async function Ah(){(mt==="DAY_COUNTER"?!ke.dispatch("EXIT_INSPECT"):on()!=="BOOK_INSPECT")||(Pe=!0,zt=!1,At=null,Pt=It=0,Vt(),Fn&&await uo(),await Ht(Re,Fe,Lr,fs),qt=jt()?"FREE_LOOK":"COUNTER_FREE",Pe=!1,Vt(),mt==="CLOSING_READING"&&Zt.ready&&await Ev())}async function Sv(){ke.dispatch("PUT_BOOK")&&(Pe=!0,ct.tap(),await Ht(Re,wt,Ur.toArray(),Gi.toArray().slice(0,3)),Pe=!1,Vt())}async function wh(){(mt==="DAY_COUNTER"?!ke.dispatch("INSPECT_AGAIN"):on()!=="BOOK_HELD")||(Pe=!0,qt="OBJECT_INSPECT",Vt(),ct.paper(),await Ht(Re,Fe,[.12,mt==="CLOSING_READING"?-.13:-.025,-1.35],[.02,-.07,.015]),Pe=!1)}async function zl(n){if(on()!=="BOOK_INSPECT"||Pe)return;const e=Tt.clamp(fn+n,0,Re.userData.pages.length);e!==fn&&(Pe=!0,Pt=It=0,zt=!1,At=null,ct.paper(),e===0?await uo():(Re.userData.page.material.map=Re.userData.pages[e-1],Fn||await Dt(.38,t=>Re.userData.cover.rotation.y=-Nt(t)*Math.PI*.94),Fn=!0,fn=e,await vt(.16)),Pe=!1)}async function mu(n){ke.dispatch(n==="borrow"?"BORROW":"REJECT")&&(Pe=!0,Vt(),await Ht(Re,wt,n==="borrow"?[1.22,1.205,.87]:[-1.14,1.155,.87],[-Math.PI/2,0,n==="borrow"?0:.04],.36),ct.tap(),n==="borrow"?(Kt.scanLine.visible=!0,await vt(.33),ct.scan(),Kt.setScanner(!0),Kt.scanLine.visible=!1,ls="scan-pause",await vt(.25)):(ls="reject-pause",Ut("这样啊……"),await vt(.3)),ke.dispatch("RESPOND"),await Sn("DIALOGUE_FOCUS",n==="borrow"?.7:.8),n==="borrow"&&(Ut("谢谢。"),await vt(.65),Ut("晚上辛苦了。")),n==="reject"&&(await Dt(.25,e=>et.userData.head.rotation.y=-e*.24),await vt(.5),await Dt(.25,e=>et.userData.head.rotation.y=-(1-e)*.24),Ut("那算了。")),await vt(1.1),ke.cardReturned||await us(1,async()=>{await Ht(bt,wt,[.25,1.2,.2],[-.7,0,0],.3),bt.visible=!1}),n==="borrow"&&await us(0,async()=>{await Ht(Re,wt,[-.25,1.1,.22],[0,0,.06],.4),et.attach(Re)}),await Rh())}async function Rh(){if(await Sn("COUNTER_FREE",.5),ke.dispatch("LEAVE"),Vt(),await co([1.85,0,-3.1],2.3),await Dt(.5,n=>Kt.door.rotation.y=-Nt(n)*.95),ct.bell(),await co([2.9,0,-4.95],1),et.visible=!1,ke.decision==="borrow"&&(Re.visible=!1),await Dt(.6,n=>Kt.door.rotation.y=-(1-Nt(n))*.95),ke.dispatch("COMPLETE"),bv(),Vt(),J("dialogue").hidden=!0,Xn){Xn.complete(ke);const n=Nl[Xn.index];if(n){await vt(n.delayBefore);const e=Xn.begin();if(e){_v(e),await bh();return}}}Pe=!1,J("complete").hidden=!1,setTimeout(()=>J("complete").hidden=!0,3e3),J("dialogue").hidden=!0,Gt(Ch())}async function Ch(){await vt(2.5),mt="CLOSING_READING",Pe=!1,document.querySelector(".clock").textContent=Zt.time,J("complete").hidden=!0,Ei("离闭馆还有一会儿。")}async function yv(){Mi||mt!=="CLOSING_READING"||(Re=So,Mi=!0,Fn=!1,fn=0,Pt=It=0,Pe=!0,ct.paper(),await Ht(Re,Fe,Lr,fs),Pe=!1,Vt())}async function Ph(){Pe=!0,await Ht(Re,wt,Bl,[-Math.PI/2,0,-.09],.45),ct.paper(.018),Mi=!1,Pe=!1,Vt()}async function Ev(){await Ph(),Pe=!0,Ut("好了，下班了。","你",2),await vt(2.7),mt="CLOSING_TRANSITION",Kt.setClosed(0),ct.tone(185,.07,.015),await Dt(.6,e=>Kt.setClosed(Nt(e)));const n=Fe.position.clone();ct.paper(.016),await Dt(1,e=>{Fe.position.y=n.y+.18*Nt(e),Fe.position.z=n.z+.08*Nt(e)}),Ih()}function Ih(){mt="NIGHT_FREE_ROAM",qt="FREE_LOOK",oi=0,Yn.position.set(0,.18,-.35),Yn.intensity=1.5,Yn.distance=2.4,Wn.clear(),Pe=!1,Ei("WASD 行走 · 点击画面环顾 · R 查看手中的书")}async function kl(){if(Pe||!Xt)return;const n=Xt;if(pt.heldBookId){if(n.slot&&!n.slot.occupantBookId){const e=pt.heldBookId,t=n.slot;Pe=!0;const i=Kt.sortingShelves.get(t.shelfId),r=[...t.localPosition];r[2]+=.2,await Ht(Re,i,r,t.localRotation,.22),await Ht(Re,i,t.localPosition,t.localRotation,.16),pt.place(e,t.shelfId,t.slotId),ct.paper(.018),ct.tone(110,.07,.006),Pe=!1,pt.isTaskComplete()&&(mt="NIGHT_SHELVING_COMPLETE",Ei("书都收起来了。",1400)),Vt()}}else{const e=n.bookId||n.slot?.occupantBookId;if(!pt.pickup(e))return;mt==="NIGHT_SHELVING_COMPLETE"&&(J("toast").hidden=!0),Re=hl.books.get(e),Pe=!0,mt="NIGHT_SHELVING",fn=0,Fn=!1,Pt=It=0,ct.paper(.022),await Ht(Re,Fe,Lr,fs),Pe=!1,Vt()}}function Eo(){if(Xt=null,J("interact").hidden=!0,J("reticle").hidden=qt==="OBJECT_INSPECT"||!J("settings").hidden,J("reticle").style.left="50%",J("reticle").style.top="50%",Lt.domElement.style.cursor="default",!Pe&&qt==="FREE_LOOK"&&J("settings").hidden){Er.setFromCamera(new le,Fe);const e=new C(Fe.position.x,.8,Fe.position.z),t=Er.intersectObjects(wt.children.filter(i=>i!==Fe&&!Object.values(yi).includes(i)),!0);for(const i of t){let r=i.object,s=!0,o;for(;r;)s&&=r.visible,o||=r.userData.shelvingBookId,r=r.parent;if(!s)continue;if(i.distance>2.4||e.distanceTo(i.point)>1.5)break;const a=pt.slots.find(c=>c.slotId===i.object.userData.slotId);if((a||o)&&(Xt={slot:a,bookId:o,distance:e.distanceTo(i.point)}),Xt||!i.object.material?.transparent)break}}const n=Xt&&(pt.heldBookId?Xt.slot&&!Xt.slot.occupantBookId:Xt.bookId||Xt.slot?.occupantBookId);J("reticle").classList.toggle("hot",!!n)}function Hl(){return mt!=="DAY_COUNTER"||!Rt||ke.phase!=="BOOK_INSPECT"||Pe||!J("settings").hidden?null:(Er.setFromCamera(An,Fe),ph(Re,Er,fn))}async function Tv(n){if(!n||!ke.dispatch("SELECT_DAMAGE",n.damageId))return;lo={rotation:Re.rotation.toArray().slice(0,3),quaternion:Re.quaternion.toArray(),page:fn},Pe=!0,At=null,zt=!1,Pt=It=0,Vt(),ct.paper(.018),Fl=n;const e=Re.position.clone(),t=Fn?new C(.78,-.32,-1.55):new C(.55,-.22,-1.35),i=new C(0,0,1).transformDirection(n.surface.matrixWorld),r=Fe.getWorldPosition(new C).sub(Lh(n)).normalize();ll=Math.max(0,i.dot(r)*.85);const s=t.clone();t.copy(e);for(let l=1;l<=16&&(Re.position.lerpVectors(e,s,l/16),!!Dh(n,ll));l++)t.copy(Re.position);Re.position.copy(e);const o=Yn.position.clone(),a=new C(t.x,.18,-.55);await Dt(.4,l=>{Re.position.lerpVectors(e,t,Nt(l)),Yn.position.lerpVectors(o,a,Nt(l))}),ke.dispatch("BEGIN_DIALOGUE"),await Sn("DIALOGUE_FOCUS",.7,"damage"),Ut({scratch:"这里的封面为什么有一道划痕？",stain:"这一页上的污渍是怎么回事？",tear:"这一页怎么破了？",corner_fold:"这里为什么折了？"}[n.type],"你"),await vt(1.6);const c=Mn?.step.damageReplies?.[n.damageId];Ut(c?.[0]||"啊……这个。"),await vt(.5),Ut(c?.[1]||"可能是不小心碰到哪里了。"),await vt(1.5),c||Ut("抱歉。"),await vt(.5),ke.dispatch("SHOW_DECISION"),Pe=!1,J("damage-choice").hidden=!1,J("damage-choice").querySelector("button").focus()}function Lh(n){Re.updateWorldMatrix(!0,!0);const e=n.surface.geometry.parameters;return n.surface.localToWorld(new C((n.uv.x-.5)*e.width,(n.uv.y-.5)*e.height,0))}function Dh(n,e=0){if(!n)return!1;const t=Lh(n),i=Fe.getWorldPosition(new C),r=new C(0,0,1).transformDirection(n.surface.matrixWorld).dot(i.clone().sub(t).normalize()),s=new sh(i,t.clone().sub(i).normalize()),o=t.clone().project(Fe);return r>=e&&Math.abs(o.x)<.94&&Math.abs(o.y)<.9&&ph(Re,s,fn)?.damageId===n.damageId}async function Uh(n){if(!(Pe||!J("settings").hidden||!ke.dispatch(n.toUpperCase()))){if(Pe=!0,J("damage-choice").hidden=!0,Vt(),n==="charge"?(Ut("这属于借阅期间造成的损坏，需要赔偿。","你"),await vt(1.8),Ut("好吧，我明白了。"),ct.paper(.035)):n==="waive"&&Ut("谢谢。"),n!=="accept"){await vt(1.1),Fn&&await uo(),await Ht(Re,Fe,Lr,fs),Yn.position.set(-.25,.22,.12),await Sn("COUNTER_FREE",.5),Pe=!1,Vt();return}Fn&&await uo(),await Ht(Re,wt,[-1.14,1.155,.87],[-Math.PI/2,0,.04],.4),Yn.position.set(-.25,.22,.12),ct.tap(),ke.dispatch("RESPOND"),n==="accept"&&(await Sn("DIALOGUE_FOCUS"),Ut("谢谢。")),await vt(1.1),await Rh()}}function bv(){if(!(ul||!ke.record)){ul=!0;try{const n=JSON.parse(localStorage.getItem("nightfall-transactions")||"[]"),e=Array.isArray(n)?n:[];e.push(ke.record),localStorage.setItem("nightfall-transactions",JSON.stringify(e.slice(-100)))}catch{Ei("本次处理已记录于当前会话；浏览器未允许本地保存。")}oo&&console.info("Nightfall transaction",ke.record)}}function Av(){return Pe||!On||!J("settings").hidden||!J("card-choice").hidden?[]:mt==="CLOSING_READING"?qt==="OBJECT_INSPECT"?[]:["personalBook"]:mt!=="DAY_COUNTER"?[]:ke.phase==="ITEMS_PLACED"?Rt||ke.cardReturned?["book"]:["card","book"]:ke.phase==="ID_HELD"?["customer"]:ke.phase==="BOOK_HELD"?Rt?["return","bookSlot"]:["scanner","reject","bookSlot"]:[]}const wv={card:"拿起",book:"拿起",customer:"递还证件",bookSlot:"放下",scanner:"放到借书机 · 借出",reject:"放入暂存盘 · 拒借",return:"放入归还托盘 · 收书",personalBook:"拿起 / 放下"};function To(){if(jt())return Eo();const n=Av();Er.setFromCamera(An,Fe),bn=Er.intersectObjects(n.map(r=>yi[r]),!1)[0]?.object.userData.name||null;const t=(An.x+1)*innerWidth/2,i=(1-An.y)*innerHeight/2;J("reticle").style.left=`${t}px`,J("reticle").style.top=`${i}px`,J("reticle").classList.toggle("hot",!!bn),J("reticle").hidden=!On||!J("settings").hidden||on().endsWith("INSPECT")||mt==="DAY_COUNTER"&&ke.phase==="TRANSACTION_COMPLETE",J("interact").hidden=!bn,bn&&(J("interact").querySelector("span").textContent=bn==="personalBook"?Mi?"放下":"拿起":wv[bn],J("interact").style.left=`${Math.min(t+19,innerWidth-265)}px`,J("interact").style.top=`${Math.min(i+19,innerHeight-90)}px`),Lt.domElement.style.cursor=on()==="BOOK_INSPECT"?zt?"grabbing":Hl()?"pointer":"grab":bn?"pointer":"default"}async function Gl(){if(Pe||!bn)return;const n=bn;n==="personalBook"?await(Mi?Ph():yv()):n==="card"||n==="book"?await Mv(n):n==="customer"?(clearTimeout(cl),J("dialogue").hidden=!0,J("card-choice").hidden=!1,J("return-card").focus()):n==="bookSlot"?await Sv():n==="scanner"?await mu("borrow"):n==="reject"?await mu("reject"):n==="return"&&await Uh("accept")}function Gt(n){n.catch(e=>{console.error(e),Pe=!1,qt=ke.phase==="BOOK_INSPECT"?"OBJECT_INSPECT":"COUNTER_FREE",oi=Hi=0,Ei("操作遇到问题，请刷新后重试。")})}function Rv(){if(J("card-fields").hidden=ke.phase!=="ID_HELD"||Pe||!J("settings").hidden||!J("card-choice").hidden,!J("card-fields").hidden)for(const n of J("card-fields").children){const[e,t,i,r]=gv[n.dataset.field],s=[[e,t],[e+i,t],[e,t+r],[e+i,t+r]].map(([c,l])=>{const u=bt.localToWorld(new C((c-.5)*.396,(.5-l)*.248,.005)).project(Fe);return[(u.x+1)*innerWidth/2,(1-u.y)*innerHeight/2]}),o=s.map(c=>c[0]),a=s.map(c=>c[1]);Object.assign(n.style,{left:`${Math.min(...o)}px`,top:`${Math.min(...a)}px`,width:`${Math.max(...o)-Math.min(...o)}px`,height:`${Math.max(...a)-Math.min(...a)}px`})}}async function Cv(n){if(Pe||ke.phase!=="ID_HELD"||!J("card-choice").hidden||!J("settings").hidden)return;const e={photo:["这张照片和你现在看起来不太一样。",Si==="A"?"是我，照片是前几年拍的。那时头发短一些。":"借阅证上……是以前的照片。我最近换了发型。"],name:["请问，证件上的姓名是你的名字吗？",`上面写的是${cs.name}。`],date:["这张借阅证的有效期，你确认过吗？","上个月续过期了，有效期印在证件上。"]};e[n]&&(Pe=!0,await Sn("DIALOGUE_FOCUS"),Ut(e[n][0],"你"),await vt(1.6),Ut(e[n][1]),await vt(1.4),await Sn("COUNTER_FREE",.5),Pe=!1)}async function Pv(){Pe||!ke.dispatch("RETURN_ID")||(Pe=!0,J("card-choice").hidden=!0,Vt(),ct.paper(),await Promise.all([Sn("DIALOGUE_FOCUS"),us(1,async()=>{await Ht(bt,wt,[.25,1.2,.2],[-.7,0,0],.4),bt.visible=!1})]),Ut("谢谢。"),await vt(.65),await Sn("COUNTER_FREE",.5),Pe=!1)}J("card-fields").querySelectorAll("button").forEach(n=>n.addEventListener("click",()=>Gt(Cv(n.dataset.field))));J("return-card").addEventListener("click",()=>Gt(Pv()));J("keep-card").addEventListener("click",()=>Gt((async()=>{Pe||(Pe=!0,J("card-choice").hidden=!0,await Sn("DIALOGUE_FOCUS"),Ut("嗯，你问吧。"),await vt(.8),await Sn("COUNTER_FREE",.5),Pe=!1)})()));J("settings-open").addEventListener("click",()=>J("settings").hidden=!1);J("settings-close").addEventListener("click",()=>{J("settings").hidden=!0,jt()&&Nh()});J("start").addEventListener("click",()=>Gt(xv()));J("sound").addEventListener("click",()=>{J("sound").textContent=`声音 · ${ct.toggle()?"开":"关"}`});J("ambience-volume").addEventListener("input",n=>ct.setAmbienceVolume(n.target.value/100));J("again").addEventListener("click",()=>location.reload());J("case-label").textContent=Rt?"练习还书访客":"练习借书访客";J("case-label").parentElement.hidden=Ir||["closing","shelving"].includes(ao);J("complete").querySelector("p").textContent=Rt?"本次还书处理已记录":"本次借阅处理已记录";document.querySelectorAll("[data-mode]").forEach(n=>{n.setAttribute("aria-pressed",String(n.dataset.mode===(ao||"borrow"))),n.addEventListener("click",()=>{Kn.set("mode",n.dataset.mode),location.search=Kn.toString()})});document.querySelectorAll("[data-decision]").forEach(n=>n.addEventListener("click",()=>Gt(Uh(n.dataset.decision))));document.querySelectorAll("[data-case]").forEach(n=>{n.setAttribute("aria-pressed",String(n.dataset.case===Si)),n.addEventListener("click",()=>{n.dataset.case!==Si&&(Kn.set("case",n.dataset.case),location.search=Kn.toString())})});window.addEventListener("keydown",n=>{if(n.ctrlKey||n.metaKey||n.altKey)return;const e=n.code==="KeyR"?"r":n.key.toLowerCase();if(jt()&&J("settings").hidden&&document.pointerLockElement===Lt.domElement&&["KeyW","KeyA","KeyS","KeyD"].includes(n.code)&&(Wn.add(n.code),n.preventDefault()),!J("settings").hidden){e==="escape"&&(J("settings").hidden=!0,n.preventDefault());return}!On||Pe||n.repeat||["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)||(["r","escape"].includes(e)&&n.preventDefault(),e==="escape"&&(Wn.clear(),document.pointerLockElement&&document.exitPointerLock(),J("card-choice").hidden?J("settings").hidden=!1:J("card-choice").hidden=!0,zt=!1,At=null,Pt=It=0),e==="r"&&J("card-choice").hidden&&Gt(on()==="BOOK_INSPECT"?Ah():wh()))});window.addEventListener("keyup",n=>Wn.delete(n.code));function Nh(){hn||Lt.domElement.requestPointerLock()?.catch(()=>Ei("点击画面继续环顾。"))}document.addEventListener("pointerlockchange",()=>{Wn.clear(),At=null,zt=!1,Pt=It=0,!hn&&jt()&&!document.pointerLockElement&&On&&(J("settings").hidden=!1)});window.addEventListener("pointermove",n=>{if(!(!J("settings").hidden||!J("card-choice").hidden)){if(hn&&n.pointerType==="touch"&&xn?.pointerId===n.pointerId){const e=n.clientX-hr,t=n.clientY-fr;Math.hypot(n.clientX-xn.x,n.clientY-xn.y)>6&&(xn.moved=!0),on()==="BOOK_INSPECT"?(zt=xn.moved,It=e*.005,Pt=t*.005,Re.rotateY(It),Re.rotateX(Pt)):jt()?(Fe.rotation.y-=e*.002,Fe.rotation.x=Tt.clamp(Fe.rotation.x-t*.002,-1.35,1.25)):($r=Tt.clamp($r-e*.002,-ca,ca),Jr=Tt.clamp(Jr-t*.002,-ua,ua)),hr=n.clientX,fr=n.clientY;return}if(jt()){if(document.pointerLockElement!==Lt.domElement||Pe)return;qt==="OBJECT_INSPECT"?At&&(n.movementX||n.movementY)&&(zt=!0,It=n.movementX*.005,Pt=n.movementY*.005,Re.rotateY(It),Re.rotateX(Pt)):qt==="FREE_LOOK"&&(Fe.rotation.y-=n.movementX*.002,Fe.rotation.x=Tt.clamp(Fe.rotation.x-n.movementY*.002,-1.35,1.25));return}if(An.set(n.clientX/innerWidth*2-1,1-n.clientY/innerHeight*2),on()==="BOOK_INSPECT"){if(At&&!Pe){const e=Math.hypot(n.clientX-At.x,n.clientY-At.y);(e>Mh||e>0&&performance.now()-At.time>Sh)&&(zt=!0)}zt&&!Pe&&(It=(n.clientX-hr)*.005,Pt=(n.clientY-fr)*.005,Re.rotateY(It),Re.rotateX(Pt))}else $r=-An.x*ca,Jr=An.y*ua;hr=n.clientX,fr=n.clientY}});Lt.domElement.addEventListener("pointerdown",n=>{if(!(!J("settings").hidden||!J("card-choice").hidden)&&n.button===0){if(hn&&n.pointerType==="touch"&&(xn={x:n.clientX,y:n.clientY,moved:!1,pointerId:n.pointerId},hr=n.clientX,fr=n.clientY),!hn&&jt()&&document.pointerLockElement!==Lt.domElement){Nh();return}if(on()==="BOOK_INSPECT"&&!Pe)An.set(n.clientX/innerWidth*2-1,1-n.clientY/innerHeight*2),At={x:n.clientX,y:n.clientY,time:performance.now(),pointerId:n.pointerId,damageId:Hl()?.damageId},zt=!1,Pt=It=0,hr=n.clientX,fr=n.clientY,jt()||Lt.domElement.setPointerCapture(n.pointerId);else{if(hn&&n.pointerType==="touch")return;if(jt()){Eo(),Gt(kl());return}An.set(n.clientX/innerWidth*2-1,1-n.clientY/innerHeight*2),To(),Gt(Gl())}}});Lt.domElement.addEventListener("wheel",n=>{on()!=="BOOK_INSPECT"||!J("settings").hidden||(n.preventDefault(),n.deltaY&&Gt(zl(Math.sign(n.deltaY))))},{passive:!1});window.addEventListener("pointerup",n=>{if(hn&&n.pointerType==="touch"&&xn?.pointerId===n.pointerId&&(!xn.moved&&on()!=="BOOK_INSPECT"&&(An.set(n.clientX/innerWidth*2-1,1-n.clientY/innerHeight*2),jt()?(Eo(),Gt(kl())):(To(),Gt(Gl()))),xn=null),At?.pointerId===n.pointerId){if(!zt&&performance.now()-At.time<=Sh&&Math.hypot(n.clientX-At.x,n.clientY-At.y)<=Mh){An.set(n.clientX/innerWidth*2-1,1-n.clientY/innerHeight*2);const e=Hl();e&&e.damageId===At.damageId&&Gt(Tv(e))}At=null,zt=!1}});window.addEventListener("pointercancel",n=>{xn?.pointerId===n.pointerId&&(xn=null),At?.pointerId===n.pointerId&&(At=null,zt=!1,Pt=It=0)});window.addEventListener("blur",()=>{Wn.clear(),$n.forward=$n.sideways=0,xn=null,At=null,zt=!1,Pt=It=0});function Iv(){!On||Pe||!J("settings").hidden||(An.set(0,0),jt()?(Eo(),Gt(kl())):(To(),Gt(Gl())))}function Lv(){!On||Pe||!J("settings").hidden||Gt(on()==="BOOK_INSPECT"?Ah():wh())}J("mobile-action").addEventListener("click",Iv);J("mobile-inspect").addEventListener("click",Lv);J("mobile-prev").addEventListener("click",()=>Gt(zl(-1)));J("mobile-next").addEventListener("click",()=>Gt(zl(1)));let ho=null;function Oh(n){const e=J("mobile-stick").getBoundingClientRect(),t=n.clientX-(e.left+e.width/2),i=n.clientY-(e.top+e.height/2),r=Math.hypot(t,i),s=42,o=r>s?s/r:1;$n.sideways=t*o/s,$n.forward=-i*o/s,J("mobile-stick").firstElementChild.style.transform=`translate(${t*o}px, ${i*o}px)`}J("mobile-stick").addEventListener("pointerdown",n=>{ho=n.pointerId;try{J("mobile-stick").setPointerCapture(n.pointerId)}catch{}Oh(n)});J("mobile-stick").addEventListener("pointermove",n=>{n.pointerId===ho&&Oh(n)});function Fh(n){n.pointerId===ho&&(ho=null,$n.forward=$n.sideways=0,J("mobile-stick").firstElementChild.style.transform="translate(0, 0)")}J("mobile-stick").addEventListener("pointerup",Fh);J("mobile-stick").addEventListener("pointercancel",Fh);window.addEventListener("resize",()=>{Fe.aspect=innerWidth/innerHeight,Fe.updateProjectionMatrix(),Lt.setSize(innerWidth,innerHeight),Dr.setSize(innerWidth,innerHeight)});oo&&(J("dev-panel").hidden=!1,window.library={get night(){return structuredClone({gamePhase:mt,cameraMode:qt,position:Fe.position.toArray(),yaw:Fe.rotation.y,pitch:Fe.rotation.x,pointerLocked:!!document.pointerLockElement,heldBookId:pt.heldBookId,heldCategory:pt.books.get(pt.heldBookId)?.category,hoveredSlot:Xt?.slot,hoveredBook:Xt?.bookId,distance:Xt?.distance,pending:pt.getPendingBooks(),result:pt.result,slots:pt.slots,books:[...pt.books.values()],time:Zt.time,page:Zt.page,dwell:Zt.dwell,advances:Zt.advances,closingReady:Zt.ready,closed:Kt.closed,personalHeld:Mi})},nightPosition(n){return(hl.books.get(n)||hl.slotTargets.find(t=>t.userData.slotId===n))?.getWorldPosition(new C).toArray()},get state(){return ke.state},get busy(){return Pe},get checklist(){return ke.checklist},get record(){return ke.record},get bookOpen(){return Fn},get bookPage(){return fn},get cardReturned(){return ke.cardReturned},get bookRotation(){return Re.rotation.toArray().slice(0,3)},get bookQuaternion(){return Re.quaternion.toArray()},get damageDecisions(){return structuredClone(ke.damageDecisions)},get memory(){return Xn?structuredClone({index:Xn.index,completed:Xn.records.length,book:Mn.book,books:[...Xn.books.values()],profile:Hn,photoProfile:cs,meshId:Re.uuid,personId:et.uuid}):null},get selectedDamageVisible(){return Dh(Fl,ll)},get inspectionSnapshot(){return lo&&structuredClone(lo)},projectDamage(n){const e=Re.userData.damageHotspots.find(c=>c.damageId===n&&c.page===fn&&c.enabled);if(!e)return null;const[t,i,r,s]=e.uvRect,o=e.surface.geometry.parameters,a=e.surface.localToWorld(new C((t+r/2-.5)*o.width,(.5-i-s/2)*o.height,0)).project(Fe);return{x:(a.x+1)*innerWidth/2,y:(1-a.y)*innerHeight/2}},project(n){const e=yi[n];if(!e)return null;const t=e.getWorldPosition(new C).project(Fe);return{x:(t.x+1)*innerWidth/2,y:(1-t.y)*innerHeight/2}},get cameraAngles(){return{yaw:Ks,pitch:$s}},get cameraShot(){return{mode:qt,beat:ls,blend:oi,handPitch:Hi,fov:Fe.fov,z:Fe.position.z}},get drawCalls(){return Lt.info.render.calls}});function Bh(n){requestAnimationFrame(Bh);const e=Math.min((n-ou)/1e3,.05);ou=n,en+=e;for(let i=Js.length-1;i>=0;i--){const r=Js[i];r.elapsed+=e;const s=Math.min(r.elapsed/r.duration,1);r.update(s),s>=1&&(Js.splice(i,1),r.resolve())}if(Kt.update(e,en),On&&en>fu&&(Pe||ct.paper(.009),fu=en+37),On&&en>du&&(Pe||ct.tone(134,.12,.008),du=en+53),!jt()&&mt!=="CLOSING_TRANSITION"&&qt!=="OBJECT_INSPECT"){const i=1-Math.exp(-8*e),r=yh+Tt.clamp($r*.6,-Tt.degToRad(2.5),Tt.degToRad(2.5)),s=Eh+Hi+Tt.clamp(Jr*.6,-Tt.degToRad(2),Tt.degToRad(2));Ks=Tt.lerp(Ks,Tt.lerp($r,r,oi),i),$s=Tt.lerp($s,Tt.lerp(Jr,s,oi),i),Fe.rotation.y=Ks,Fe.rotation.x=-.12+$s}const t=67-5*oi;if(Fe.fov!==t&&(Fe.fov=t,Fe.updateProjectionMatrix()),!jt()&&mt!=="CLOSING_TRANSITION"&&(Fe.position.z=2.64-.03*oi,Fe.position.y=1.67+Math.sin(en*.8)*9e-4),mt==="CLOSING_READING"){const i=qt==="OBJECT_INSPECT"&&!Pe&&J("settings").hidden&&!zt?fn:0;if(Zt.update(i,e)){const r=document.querySelector(".clock");r.textContent=Zt.time,r.animate([{opacity:.3},{opacity:1}],{duration:600}),Kt.setReadingProgress(Zt.advances/4),Zt.ready&&Ei("已经到闭馆时间了。")}}if(jt()&&(mt==="NIGHT_FREE_ROAM"&&pt.getPendingBooks().length&&(mt="NIGHT_SHELVING"),!Pe&&qt==="FREE_LOOK"&&J("settings").hidden&&(hn||document.pointerLockElement))){const i=Number(Wn.has("KeyW"))-Number(Wn.has("KeyS"))+$n.forward,r=Number(Wn.has("KeyD"))-Number(Wn.has("KeyA"))+$n.sideways,s=dv(Fe.position,Fe.rotation.y,i,r,e);s&&en>pu&&(ct.tone(115,.09,.014),ct.paper(.006),pu=en+.57),s&&pt.heldBookId&&(Re.position.y=Lr[1]+Math.sin(en*6)*.003)}if(et.visible){et.userData.body.position.y=Math.sin(en*1.3)*.004,Pe||(et.userData.head.rotation.z=Math.sin(en*.55)*.018,et.userData.body.rotation.z=Math.sin(en*.64)*.006);const i=en%4.8,r=i>4.6&&i<4.75?.1:1;et.userData.eyes.forEach(s=>s.scale.y=r)}if(on()==="BOOK_INSPECT"&&!zt&&!At&&!Pe&&J("settings").hidden){Re.rotateY(It*e*45),Re.rotateX(Pt*e*45);const i=Math.exp(-8*e);It*=i,Pt*=i}if(Th.uniforms.uTime.value=en,hn&&On){const i=on()==="BOOK_INSPECT",r=Mi||pt.heldBookId||ke.phase==="BOOK_HELD"||ke.phase==="RETURN_BOOK_HELD";J("mobile-stick").hidden=J("mobile-action").hidden=!jt(),J("mobile-inspect").disabled=!r&&!i,J("mobile-prev").hidden=J("mobile-next").hidden=!i,J("mobile-action").textContent=Xt||bn?"使用":"观察"}wt.updateMatrixWorld(),Rv(),To(),Dr.render(),oo&&(J("dev-panel").textContent=`DEV · ${ke.type} ${Si}
${ke.state}
`+(Rt?`损坏: ${ke.record?.actualDamagePresent??"—"}
责任: ${ke.record?.actualDamageResponsibility??"—"}`:`身份: ${ke.actualIdentityMatch?"MATCH":"MISMATCH"}
勾选: ${ke.checklist??"NULL"}`)+`
操作: ${ke.decision??"—"}
正确: ${ke.record?.isCorrect??"—"}`+(Xn?`
交易: ${Nl.indexOf(Mn.step)+1} / 3
副本: ${Mn.book.instanceId}
持有人: ${Mn.book.holderCustomerId??"—"}
损坏: ${Mn.book.damages.map(i=>i.id+":"+i.createdAt).join(", ")}
决定: ${JSON.stringify(ke.damageDecisions)}`:"")),oo&&mt!=="DAY_COUNTER"&&(J("dev-panel").textContent=`${mt} / ${qt}
${Zt.time} · page ${fn} · dwell ${Zt.dwell.toFixed(1)} · advances ${Zt.advances} · ready ${Zt.ready}
held ${pt.heldBookId||"—"} / ${pt.books.get(pt.heldBookId)?.category||"—"}
slot ${Xt?.slot?.slotId||"—"} · occupied ${Xt?.slot?.occupantBookId||"—"}
pending ${pt.getPendingBooks().length} · correct ${pt.getFinalLayout().filter(i=>i.isCorrect).length} · wrong ${pt.getFinalLayout().filter(i=>!i.isCorrect).length}
position ${Fe.position.toArray().map(i=>i.toFixed(2)).join(", ")} · reach ${Xt?.distance?.toFixed(2)||"—"}`)}requestAnimationFrame(Bh);

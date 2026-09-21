(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const bl="180",ad=0,hc=1,ld=2,Nh=1,Uh=2,ai=3,Ti=0,gn=1,ci=2,ui=0,Ts=1,co=2,uc=3,dc=4,cd=5,Bi=100,hd=101,ud=102,dd=103,fd=104,pd=200,md=201,gd=202,_d=203,wa=204,Ra=205,vd=206,xd=207,Md=208,Sd=209,Ed=210,yd=211,Td=212,bd=213,Ad=214,Ca=0,Pa=1,Ia=2,ws=3,La=4,Da=5,Na=6,Ua=7,Oh=0,wd=1,Rd=2,Si=0,Fh=1,Bh=2,kh=3,Al=4,zh=5,Hh=6,Gh=7,Vh=300,Rs=301,Cs=302,Oa=303,Fa=304,To=306,ho=1e3,zi=1001,Ba=1002,zn=1003,Cd=1004,wr=1005,Kn=1006,ko=1007,Hi=1008,Zn=1009,Wh=1010,Xh=1011,cr=1012,wl=1013,Gi=1014,hi=1015,di=1016,Rl=1017,Cl=1018,hr=1020,qh=35902,Yh=35899,Kh=1021,$h=1022,Bn=1023,ur=1026,dr=1027,Jh=1028,Pl=1029,Zh=1030,Il=1031,Ll=1033,eo=33776,to=33777,no=33778,io=33779,ka=35840,za=35841,Ha=35842,Ga=35843,Va=36196,Wa=37492,Xa=37496,qa=37808,Ya=37809,Ka=37810,$a=37811,Ja=37812,Za=37813,ja=37814,Qa=37815,el=37816,tl=37817,nl=37818,il=37819,sl=37820,rl=37821,ol=36492,al=36494,ll=36495,cl=36283,hl=36284,ul=36285,dl=36286,Pd=3200,Id=3201,jh=0,Ld=1,Mi="",yn="srgb",Ps="srgb-linear",uo="linear",pt="srgb",es=7680,fc=519,Dd=512,Nd=513,Ud=514,Qh=515,Od=516,Fd=517,Bd=518,kd=519,pc=35044,mc="300 es",$n=2e3,fo=2001;class Os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gc=1234567;const nr=Math.PI/180,Is=180/Math.PI;function $i(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function Dl(n,e){return(n%e+e)%e}function zd(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Hd(n,e,t){return n!==e?(t-n)/(e-n):0}function ir(n,e,t){return(1-t)*n+t*e}function Gd(n,e,t,i){return ir(n,e,1-Math.exp(-t*i))}function Vd(n,e=1){return e-Math.abs(Dl(n,e*2)-e)}function Wd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Xd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function qd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Yd(n,e){return n+Math.random()*(e-n)}function Kd(n){return n*(.5-Math.random())}function $d(n){n!==void 0&&(gc=n);let e=gc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jd(n){return n*nr}function Zd(n){return n*Is}function jd(n){return(n&n-1)===0&&n!==0}function Qd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ef(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tf(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),h=r((e+i)/2),c=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*c,l*u,l*d,a*h);break;case"YZY":n.set(l*d,a*c,l*u,a*h);break;case"ZXZ":n.set(l*u,l*d,a*c,a*h);break;case"XZX":n.set(a*c,l*g,l*p,a*h);break;case"YXY":n.set(l*p,a*c,l*g,a*h);break;case"ZYZ":n.set(l*g,l*p,a*c,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function an(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const lt={DEG2RAD:nr,RAD2DEG:Is,generateUUID:$i,clamp:Qe,euclideanModulo:Dl,mapLinear:zd,inverseLerp:Hd,lerp:ir,damp:Gd,pingpong:Vd,smoothstep:Wd,smootherstep:Xd,randInt:qd,randFloat:Yd,randFloatSpread:Kd,seededRandom:$d,degToRad:Jd,radToDeg:Zd,isPowerOfTwo:jd,ceilPowerOfTwo:Qd,floorPowerOfTwo:ef,setQuaternionFromProperEuler:tf,normalize:an,denormalize:gs};class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],h=i[s+1],c=i[s+2],u=i[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=h,e[t+2]=c,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||h!==p||c!==g){let m=1-a;const f=l*d+h*p+c*g+u*v,T=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const R=Math.sqrt(E),A=Math.atan2(R,f*T);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const _=a*T;if(l=l*m+d*_,h=h*m+p*_,c=c*m+g*_,u=u*m+v*_,m===1-a){const R=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=R,h*=R,c*=R,u*=R}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],h=i[s+2],c=i[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+c*u+l*p-h*d,e[t+1]=l*g+c*d+h*u-a*p,e[t+2]=h*g+c*p+a*d-l*u,e[t+3]=c*g-a*u-l*d-h*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,h=a(i/2),c=a(s/2),u=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*c*u+h*p*g,this._y=h*p*u-d*c*g,this._z=h*c*g+d*p*u,this._w=h*c*u-d*p*g;break;case"YXZ":this._x=d*c*u+h*p*g,this._y=h*p*u-d*c*g,this._z=h*c*g-d*p*u,this._w=h*c*u+d*p*g;break;case"ZXY":this._x=d*c*u-h*p*g,this._y=h*p*u+d*c*g,this._z=h*c*g+d*p*u,this._w=h*c*u-d*p*g;break;case"ZYX":this._x=d*c*u-h*p*g,this._y=h*p*u+d*c*g,this._z=h*c*g-d*p*u,this._w=h*c*u+d*p*g;break;case"YZX":this._x=d*c*u+h*p*g,this._y=h*p*u+d*c*g,this._z=h*c*g-d*p*u,this._w=h*c*u-d*p*g;break;case"XZY":this._x=d*c*u-h*p*g,this._y=h*p*u-d*c*g,this._z=h*c*g+d*p*u,this._w=h*c*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],h=t[2],c=t[6],u=t[10],d=i+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(r-h)*p,this._z=(o-s)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(c-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+h)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(r-h)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+h)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,h=t._z,c=t._w;return this._x=i*c+o*a+s*h-r*l,this._y=s*c+o*l+r*a-i*h,this._z=r*c+o*h+i*l-s*a,this._w=o*c-i*a-s*l-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const h=Math.sqrt(l),c=Math.atan2(h,a),u=Math.sin((1-t)*c)/h,d=Math.sin(t*c)/h;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,i=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_c.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_c.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,h=2*(o*s-a*i),c=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*h+o*u-a*c,this.y=i+l*c+a*h-r*u,this.z=s+l*u+r*c-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zo.copy(this).projectOnVector(e),this.sub(zo)}reflect(e){return this.sub(zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zo=new C,_c=new Fs;class Ze{constructor(e,t,i,s,r,o,a,l,h){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,h)}set(e,t,i,s,r,o,a,l,h){const c=this.elements;return c[0]=e,c[1]=s,c[2]=a,c[3]=t,c[4]=r,c[5]=l,c[6]=i,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],c=i[4],u=i[7],d=i[2],p=i[5],g=i[8],v=s[0],m=s[3],f=s[6],T=s[1],E=s[4],_=s[7],R=s[2],A=s[5],w=s[8];return r[0]=o*v+a*T+l*R,r[3]=o*m+a*E+l*A,r[6]=o*f+a*_+l*w,r[1]=h*v+c*T+u*R,r[4]=h*m+c*E+u*A,r[7]=h*f+c*_+u*w,r[2]=d*v+p*T+g*R,r[5]=d*m+p*E+g*A,r[8]=d*f+p*_+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],c=e[8];return t*o*c-t*a*h-i*r*c+i*a*l+s*r*h-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],c=e[8],u=c*o-a*h,d=a*l-c*r,p=h*r-o*l,g=t*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*h-c*i)*v,e[2]=(a*i-s*o)*v,e[3]=d*v,e[4]=(c*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(i*l-h*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*o+h*a)+o+e,-s*h,s*l,-s*(-h*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ho.makeScale(e,t)),this}rotate(e){return this.premultiply(Ho.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ho.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ho=new Ze;function eu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function po(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nf(){const n=po("canvas");return n.style.display="block",n}const vc={};function fr(n){n in vc||(vc[n]=!0,console.warn(n))}function sf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const xc=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mc=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rf(){const n={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pt&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?uo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ps]:{primaries:e,whitePoint:i,transfer:uo,toXYZ:xc,fromXYZ:Mc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:xc,fromXYZ:Mc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),n}const rt=rf();function fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ts;class of{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ts===void 0&&(ts=po("canvas")),ts.width=e.width,ts.height=e.height;const s=ts.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ts}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=po("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fi(t[i]/255)*255):t[i]=fi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let af=0;class Nl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=$i(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Go(s[o].image)):r.push(Go(s[o]))}else r=Go(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Go(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?of.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lf=0;const Vo=new C;class hn extends Os{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,i=zi,s=zi,r=Kn,o=Hi,a=Bn,l=Zn,h=hn.DEFAULT_ANISOTROPY,c=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=$i(),this.name="",this.source=new Nl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vo).x}get height(){return this.source.getSize(Vo).y}get depth(){return this.source.getSize(Vo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ho:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case Ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ho:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case Ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Vh;hn.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,i=0,s=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,h=l[0],c=l[4],u=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(h+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(h+1)/2,_=(p+1)/2,R=(f+1)/2,A=(c+d)/4,w=(u+v)/4,P=(g+m)/4;return E>_&&E>R?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=A/i,r=w/i):_>R?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=A/s,r=P/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=w/r,s=P/r),this.set(i,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-c)*(d-c));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-v)/T,this.z=(d-c)/T,this.w=Math.acos((h+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cf extends Os{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new hn(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Nl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends cf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class tu extends hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hf extends hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zn,this.minFilter=zn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sr{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(r,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rr.copy(i.boundingBox)),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),Cr.subVectors(this.max,Ys),ns.subVectors(e.a,Ys),is.subVectors(e.b,Ys),ss.subVectors(e.c,Ys),pi.subVectors(is,ns),mi.subVectors(ss,is),Pi.subVectors(ns,ss);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Pi.z,Pi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Pi.z,0,-Pi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Pi.y,Pi.x,0];return!Wo(t,ns,is,ss,Cr)||(t=[1,0,0,0,1,0,0,0,1],!Wo(t,ns,is,ss,Cr))?!1:(Pr.crossVectors(pi,mi),t=[Pr.x,Pr.y,Pr.z],Wo(t,ns,is,ss,Cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ni=[new C,new C,new C,new C,new C,new C,new C,new C],Nn=new C,Rr=new Sr,ns=new C,is=new C,ss=new C,pi=new C,mi=new C,Pi=new C,Ys=new C,Cr=new C,Pr=new C,Ii=new C;function Wo(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ii.fromArray(n,r);const a=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=e.dot(Ii),h=t.dot(Ii),c=i.dot(Ii);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}const uf=new Sr,Ks=new C,Xo=new C;class bo{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):uf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);const t=Ks.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ks,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(Xo)),this.expandByPoint(Ks.copy(e.center).sub(Xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ii=new C,qo=new C,Ir=new C,gi=new C,Yo=new C,Lr=new C,Ko=new C;class Ul{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){qo.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(qo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ir),a=gi.dot(this.direction),l=-gi.dot(Ir),h=gi.lengthSq(),c=Math.abs(1-o*o);let u,d,p,g;if(c>0)if(u=o*l-a,d=o*a-l,g=r*c,u>=0)if(d>=-g)if(d<=g){const v=1/c;u*=v,d*=v,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+h}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+h;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+h;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+h):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+h):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+h);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(qo).addScaledVector(Ir,d),p}intersectSphere(e,t){ii.subVectors(e.center,this.origin);const i=ii.dot(this.direction),s=ii.dot(ii)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(i=(e.min.x-d.x)*h,s=(e.max.x-d.x)*h):(i=(e.max.x-d.x)*h,s=(e.min.x-d.x)*h),c>=0?(r=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(r=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,i,s,r){Yo.subVectors(t,e),Lr.subVectors(i,e),Ko.crossVectors(Yo,Lr);let o=this.direction.dot(Ko),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,e);const l=a*this.direction.dot(Lr.crossVectors(gi,Lr));if(l<0)return null;const h=a*this.direction.dot(Yo.cross(gi));if(h<0||l+h>o)return null;const c=-a*gi.dot(Ko);return c<0?null:this.at(c/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,t,i,s,r,o,a,l,h,c,u,d,p,g,v,m){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,h,c,u,d,p,g,v,m)}set(e,t,i,s,r,o,a,l,h,c,u,d,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=h,f[6]=c,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/rs.setFromMatrixColumn(e,0).length(),r=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*c,p=o*u,g=a*c,v=a*u;t[0]=l*c,t[4]=-l*u,t[8]=h,t[1]=p+g*h,t[5]=d-v*h,t[9]=-a*l,t[2]=v-d*h,t[6]=g+p*h,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*u,g=h*c,v=h*u;t[0]=d+v*a,t[4]=g*a-p,t[8]=o*h,t[1]=o*u,t[5]=o*c,t[9]=-a,t[2]=p*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*u,g=h*c,v=h*u;t[0]=d-v*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*c,t[9]=v-d*a,t[2]=-o*h,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*u,g=a*c,v=a*u;t[0]=l*c,t[4]=g*h-p,t[8]=d*h+v,t[1]=l*u,t[5]=v*h+d,t[9]=p*h-g,t[2]=-h,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*h,g=a*l,v=a*h;t[0]=l*c,t[4]=v-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*c,t[9]=-a*c,t[2]=-h*c,t[6]=p*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=o*l,p=o*h,g=a*l,v=a*h;t[0]=l*c,t[4]=-u,t[8]=h*c,t[1]=d*u+v,t[5]=o*c,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*c,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(df,e,ff)}lookAt(e,t,i){const s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),_i.crossVectors(i,Sn),_i.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),_i.crossVectors(i,Sn)),_i.normalize(),Dr.crossVectors(Sn,_i),s[0]=_i.x,s[4]=Dr.x,s[8]=Sn.x,s[1]=_i.y,s[5]=Dr.y,s[9]=Sn.y,s[2]=_i.z,s[6]=Dr.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],c=i[1],u=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],T=i[3],E=i[7],_=i[11],R=i[15],A=s[0],w=s[4],P=s[8],M=s[12],S=s[1],L=s[5],F=s[9],W=s[13],J=s[2],k=s[6],$=s[10],Q=s[14],q=s[3],fe=s[7],Ee=s[11],we=s[15];return r[0]=o*A+a*S+l*J+h*q,r[4]=o*w+a*L+l*k+h*fe,r[8]=o*P+a*F+l*$+h*Ee,r[12]=o*M+a*W+l*Q+h*we,r[1]=c*A+u*S+d*J+p*q,r[5]=c*w+u*L+d*k+p*fe,r[9]=c*P+u*F+d*$+p*Ee,r[13]=c*M+u*W+d*Q+p*we,r[2]=g*A+v*S+m*J+f*q,r[6]=g*w+v*L+m*k+f*fe,r[10]=g*P+v*F+m*$+f*Ee,r[14]=g*M+v*W+m*Q+f*we,r[3]=T*A+E*S+_*J+R*q,r[7]=T*w+E*L+_*k+R*fe,r[11]=T*P+E*F+_*$+R*Ee,r[15]=T*M+E*W+_*Q+R*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],h=e[13],c=e[2],u=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+r*l*u-s*h*u-r*a*d+i*h*d+s*a*p-i*l*p)+v*(+t*l*p-t*h*d+r*o*d-s*o*p+s*h*c-r*l*c)+m*(+t*h*u-t*a*p-r*o*u+i*o*p+r*a*c-i*h*c)+f*(-s*a*c-t*l*u+t*a*d+s*o*u-i*o*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],h=e[7],c=e[8],u=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],T=u*m*h-v*d*h+v*l*p-a*m*p-u*l*f+a*d*f,E=g*d*h-c*m*h-g*l*p+o*m*p+c*l*f-o*d*f,_=c*v*h-g*u*h+g*a*p-o*v*p-c*a*f+o*u*f,R=g*u*l-c*v*l-g*a*d+o*v*d+c*a*m-o*u*m,A=t*T+i*E+s*_+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=T*w,e[1]=(v*d*r-u*m*r-v*s*p+i*m*p+u*s*f-i*d*f)*w,e[2]=(a*m*r-v*l*r+v*s*h-i*m*h-a*s*f+i*l*f)*w,e[3]=(u*l*r-a*d*r-u*s*h+i*d*h+a*s*p-i*l*p)*w,e[4]=E*w,e[5]=(c*m*r-g*d*r+g*s*p-t*m*p-c*s*f+t*d*f)*w,e[6]=(g*l*r-o*m*r-g*s*h+t*m*h+o*s*f-t*l*f)*w,e[7]=(o*d*r-c*l*r+c*s*h-t*d*h-o*s*p+t*l*p)*w,e[8]=_*w,e[9]=(g*u*r-c*v*r-g*i*p+t*v*p+c*i*f-t*u*f)*w,e[10]=(o*v*r-g*a*r+g*i*h-t*v*h-o*i*f+t*a*f)*w,e[11]=(c*a*r-o*u*r-c*i*h+t*u*h+o*i*p-t*a*p)*w,e[12]=R*w,e[13]=(c*v*s-g*u*s+g*i*d-t*v*d-c*i*m+t*u*m)*w,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*m-t*a*m)*w,e[15]=(o*u*s-c*a*s+c*i*l-t*u*l-o*i*d+t*a*d)*w,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,h=r*o,c=r*a;return this.set(h*o+i,h*a-s*l,h*l+s*a,0,h*a+s*l,c*a+i,c*l-s*o,0,h*l-s*a,c*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,h=r+r,c=o+o,u=a+a,d=r*h,p=r*c,g=r*u,v=o*c,m=o*u,f=a*u,T=l*h,E=l*c,_=l*u,R=i.x,A=i.y,w=i.z;return s[0]=(1-(v+f))*R,s[1]=(p+_)*R,s[2]=(g-E)*R,s[3]=0,s[4]=(p-_)*A,s[5]=(1-(d+f))*A,s[6]=(m+T)*A,s[7]=0,s[8]=(g+E)*w,s[9]=(m-T)*w,s[10]=(1-(d+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=rs.set(s[0],s[1],s[2]).length();const o=rs.set(s[4],s[5],s[6]).length(),a=rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Un.copy(this);const h=1/r,c=1/o,u=1/a;return Un.elements[0]*=h,Un.elements[1]*=h,Un.elements[2]*=h,Un.elements[4]*=c,Un.elements[5]*=c,Un.elements[6]*=c,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,t.setFromRotationMatrix(Un),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=$n,l=!1){const h=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),p=(i+s)/(i-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===$n)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===fo)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=u,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=v,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=$n,l=!1){const h=this.elements,c=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),p=-(i+s)/(i-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===$n)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===fo)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=u,h[9]=0,h[13]=p,h[2]=0,h[6]=0,h[10]=g,h[14]=v,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const rs=new C,Un=new Tt,df=new C(0,0,0),ff=new C(1,1,1),_i=new C,Dr=new C,Sn=new C,Sc=new Tt,Ec=new Fs;class Dn{constructor(e=0,t=0,i=0,s=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],c=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ec.setFromEuler(this),this.setFromQuaternion(Ec,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class Ol{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pf=0;const yc=new C,os=new Fs,si=new Tt,Nr=new C,$s=new C,mf=new C,gf=new Fs,Tc=new C(1,0,0),bc=new C(0,1,0),Ac=new C(0,0,1),wc={type:"added"},_f={type:"removed"},as={type:"childadded",child:null},$o={type:"childremoved",child:null};class Jt extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new C,t=new Dn,i=new Fs,s=new C(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ze}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(Tc,e)}rotateY(e){return this.rotateOnAxis(bc,e)}rotateZ(e){return this.rotateOnAxis(Ac,e)}translateOnAxis(e,t){return yc.copy(e).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tc,e)}translateY(e){return this.translateOnAxis(bc,e)}translateZ(e){return this.translateOnAxis(Ac,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Nr.copy(e):Nr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt($s,Nr,this.up):si.lookAt(Nr,$s,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),os.setFromRotationMatrix(si),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wc),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_f),$o.child=e,this.dispatchEvent($o),$o.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wc),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,mf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,gf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){const u=l[h];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),h=o(e.textures),c=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const h in a){const c=a[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Jt.DEFAULT_UP=new C(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new C,ri=new C,Jo=new C,oi=new C,ls=new C,cs=new C,Rc=new C,Zo=new C,jo=new C,Qo=new C,ea=new _t,ta=new _t,na=new _t;class Fn{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),On.subVectors(e,t),s.cross(On);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){On.subVectors(s,t),ri.subVectors(i,t),Jo.subVectors(e,t);const o=On.dot(On),a=On.dot(ri),l=On.dot(Jo),h=ri.dot(ri),c=ri.dot(Jo),u=o*h-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(h*l-a*c)*d,g=(o*c-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return ea.setScalar(0),ta.setScalar(0),na.setScalar(0),ea.fromBufferAttribute(e,t),ta.fromBufferAttribute(e,i),na.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ea,r.x),o.addScaledVector(ta,r.y),o.addScaledVector(na,r.z),o}static isFrontFacing(e,t,i,s){return On.subVectors(i,t),ri.subVectors(e,t),On.cross(ri).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),On.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Fn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ls.subVectors(s,i),cs.subVectors(r,i),Zo.subVectors(e,i);const l=ls.dot(Zo),h=cs.dot(Zo);if(l<=0&&h<=0)return t.copy(i);jo.subVectors(e,s);const c=ls.dot(jo),u=cs.dot(jo);if(c>=0&&u<=c)return t.copy(s);const d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(ls,o);Qo.subVectors(e,r);const p=ls.dot(Qo),g=cs.dot(Qo);if(g>=0&&p<=g)return t.copy(r);const v=p*h-l*g;if(v<=0&&h>=0&&g<=0)return a=h/(h-g),t.copy(i).addScaledVector(cs,a);const m=c*g-p*u;if(m<=0&&u-c>=0&&p-g>=0)return Rc.subVectors(r,s),a=(u-c)/(u-c+(p-g)),t.copy(s).addScaledVector(Rc,a);const f=1/(m+v+d);return o=v*f,a=d*f,t.copy(i).addScaledVector(ls,o).addScaledVector(cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function ia(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=rt.workingColorSpace){if(e=Dl(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ia(o,r,e+1/3),this.g=ia(o,r,e),this.b=ia(o,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=yn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){const i=nu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return rt.workingToColorSpace(sn.copy(this),e),Math.round(Qe(sn.r*255,0,255))*65536+Math.round(Qe(sn.g*255,0,255))*256+Math.round(Qe(sn.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(sn.copy(this),t);const i=sn.r,s=sn.g,r=sn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,h;const c=(a+o)/2;if(a===o)l=0,h=0;else{const u=o-a;switch(h=c<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=h,e.l=c,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=yn){rt.workingToColorSpace(sn.copy(this),e);const t=sn.r,i=sn.g,s=sn.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(Ur);const i=ir(vi.h,Ur.h,t),s=ir(vi.s,Ur.s,t),r=ir(vi.l,Ur.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new $e;$e.NAMES=nu;let vf=0;class Bs extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=Ts,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wa,this.blendDst=Ra,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ra&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ji extends Bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new C,Or=new he;let xf=0;class Gn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pc,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gs(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gs(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gs(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),s=an(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pc&&(e.usage=this.usage),e}}class iu extends Gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class su extends Gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class bt extends Gn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Mf=0;const Rn=new Tt,sa=new Jt,hs=new C,En=new Sr,Js=new Sr,qt=new C;class un extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eu(e)?su:iu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,i){return Rn.makeTranslation(e,t,i),this.applyMatrix4(Rn),this}scale(e,t,i){return Rn.makeScale(e,t,i),this.applyMatrix4(Rn),this}lookAt(e){return sa.lookAt(e),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new bt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];En.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Js.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(En.min,Js.min),En.expandByPoint(qt),qt.addVectors(En.max,Js.max),En.expandByPoint(qt)):(En.expandByPoint(Js.min),En.expandByPoint(Js.max))}En.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(qt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)qt.fromBufferAttribute(a,h),l&&(hs.fromBufferAttribute(e,h),qt.add(hs)),s=Math.max(s,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new C,l[P]=new C;const h=new C,c=new C,u=new C,d=new he,p=new he,g=new he,v=new C,m=new C;function f(P,M,S){h.fromBufferAttribute(i,P),c.fromBufferAttribute(i,M),u.fromBufferAttribute(i,S),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),c.sub(h),u.sub(h),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(L),a[P].add(v),a[M].add(v),a[S].add(v),l[P].add(m),l[M].add(m),l[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,M=T.length;P<M;++P){const S=T[P],L=S.start,F=S.count;for(let W=L,J=L+F;W<J;W+=3)f(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const E=new C,_=new C,R=new C,A=new C;function w(P){R.fromBufferAttribute(s,P),A.copy(R);const M=a[P];E.copy(M),E.sub(R.multiplyScalar(R.dot(M))).normalize(),_.crossVectors(A,M);const L=_.dot(l[P])<0?-1:1;o.setXYZW(P,E.x,E.y,E.z,L)}for(let P=0,M=T.length;P<M;++P){const S=T[P],L=S.start,F=S.count;for(let W=L,J=L+F;W<J;W+=3)w(e.getX(W+0)),w(e.getX(W+1)),w(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new C,r=new C,o=new C,a=new C,l=new C,h=new C,c=new C,u=new C;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),c.subVectors(o,r),u.subVectors(s,r),c.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),h.fromBufferAttribute(i,m),a.add(c),l.add(c),h.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,r),u.subVectors(s,r),c.cross(u),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){const h=a.array,c=a.itemSize,u=a.normalized,d=new h.constructor(l.length*c);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*c;for(let f=0;f<c;f++)d[g++]=h[p++]}return new Gn(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new un,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],h=e(l,i);t.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const l=[],h=r[a];for(let c=0,u=h.length;c<u;c++){const d=h[c],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const h=i[l];e.data.attributes[l]=h.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){const p=h[u];c.push(p.toJSON(e.data))}c.length>0&&(s[l]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const h in s){const c=s[h];this.setAttribute(h,c.clone(t))}const r=e.morphAttributes;for(const h in r){const c=[],u=r[h];for(let d=0,p=u.length;d<p;d++)c.push(u[d].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,c=o.length;h<c;h++){const u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cc=new Tt,Li=new Ul,Fr=new bo,Pc=new C,Br=new C,kr=new C,zr=new C,ra=new C,Hr=new C,Ic=new C,Gr=new C;class Ct extends Jt{constructor(e=new un,t=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Hr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const c=a[l],u=r[l];c!==0&&(ra.fromBufferAttribute(u,e),o?Hr.addScaledVector(ra,c):Hr.addScaledVector(ra.sub(t),c))}t.add(Hr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(r),Li.copy(e.ray).recast(e.near),!(Fr.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Fr,Pc)===null||Li.origin.distanceToSquared(Pc)>(e.far-e.near)**2))&&(Cc.copy(r).invert(),Li.copy(e.ray).applyMatrix4(Cc),!(i.boundingBox!==null&&Li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=T,R=E;_<R;_+=3){const A=a.getX(_),w=a.getX(_+1),P=a.getX(_+2);s=Vr(this,f,e,i,h,c,u,A,w,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const T=a.getX(m),E=a.getX(m+1),_=a.getX(m+2);s=Vr(this,o,e,i,h,c,u,T,E,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=T,R=E;_<R;_+=3){const A=_,w=_+1,P=_+2;s=Vr(this,f,e,i,h,c,u,A,w,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const T=m,E=m+1,_=m+2;s=Vr(this,o,e,i,h,c,u,T,E,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Sf(n,e,t,i,s,r,o,a){let l;if(e.side===gn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ti,a),l===null)return null;Gr.copy(a),Gr.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Gr);return h<t.near||h>t.far?null:{distance:h,point:Gr.clone(),object:n}}function Vr(n,e,t,i,s,r,o,a,l,h){n.getVertexPosition(a,Br),n.getVertexPosition(l,kr),n.getVertexPosition(h,zr);const c=Sf(n,e,t,i,Br,kr,zr,Ic);if(c){const u=new C;Fn.getBarycoord(Ic,Br,kr,zr,u),s&&(c.uv=Fn.getInterpolatedAttribute(s,a,l,h,u,new he)),r&&(c.uv1=Fn.getInterpolatedAttribute(r,a,l,h,u,new he)),o&&(c.normal=Fn.getInterpolatedAttribute(o,a,l,h,u,new C),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:h,normal:new C,materialIndex:0};Fn.getNormal(Br,kr,zr,d.normal),c.face=d,c.barycoord=u}return c}class ks extends un{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],h=[],c=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new bt(h,3)),this.setAttribute("normal",new bt(c,3)),this.setAttribute("uv",new bt(u,2));function g(v,m,f,T,E,_,R,A,w,P,M){const S=_/w,L=R/P,F=_/2,W=R/2,J=A/2,k=w+1,$=P+1;let Q=0,q=0;const fe=new C;for(let Ee=0;Ee<$;Ee++){const we=Ee*L-W;for(let B=0;B<k;B++){const re=B*S-F;fe[v]=re*T,fe[m]=we*E,fe[f]=J,h.push(fe.x,fe.y,fe.z),fe[v]=0,fe[m]=0,fe[f]=A>0?1:-1,c.push(fe.x,fe.y,fe.z),u.push(B/w),u.push(1-Ee/P),Q+=1}}for(let Ee=0;Ee<P;Ee++)for(let we=0;we<w;we++){const B=d+we+k*Ee,re=d+we+k*(Ee+1),xe=d+(we+1)+k*(Ee+1),se=d+(we+1)+k*Ee;l.push(B,re,se),l.push(re,xe,se),q+=6}a.addGroup(p,q,M),p+=q,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const i=Ls(n[t]);for(const s in i)e[s]=i[s]}return e}function Ef(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ru(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const pr={clone:Ls,merge:ln};var yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends Bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yf,this.fragmentShader=Tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=Ef(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ou extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new C,Lc=new he,Dc=new he;class pn extends ou{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,Lc,Dc),t.subVectors(Dc,Lc)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/h,s*=o.width/l,i*=o.height/h}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const us=-90,ds=1;class bf extends Jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(us,ds,e,t);s.layers=this.layers,this.add(s);const r=new pn(us,ds,e,t);r.layers=this.layers,this.add(r);const o=new pn(us,ds,e,t);o.layers=this.layers,this.add(o);const a=new pn(us,ds,e,t);a.layers=this.layers,this.add(a);const l=new pn(us,ds,e,t);l.layers=this.layers,this.add(l);const h=new pn(us,ds,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const h of t)this.remove(h);if(e===$n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,h,c]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,h),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,c),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class au extends hn{constructor(e=[],t=Rs,i,s,r,o,a,l,h,c){super(e,t,i,s,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Af extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new au(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ks(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:ui});r.uniforms.tEquirect.value=t;const o=new Ct(s,r),a=t.minFilter;return t.minFilter===Hi&&(t.minFilter=Kn),new bf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Ft extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wf={type:"move"};class oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),f=this._getHandJoint(h,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),p=.02,g=.005;h.inputState.pinching&&d>p+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=p-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ft;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Fl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new $e(e),this.density=t}clone(){return new Fl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Rf extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const aa=new C,Cf=new C,Pf=new Ze;class Oi{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=aa.subVectors(i,t).cross(Cf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(aa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Pf.getNormalMatrix(e),s=this.coplanarPoint(aa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new bo,If=new he(.5,.5),Wr=new C;class Bl{constructor(e=new Oi,t=new Oi,i=new Oi,s=new Oi,r=new Oi,o=new Oi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$n,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],h=r[3],c=r[4],u=r[5],d=r[6],p=r[7],g=r[8],v=r[9],m=r[10],f=r[11],T=r[12],E=r[13],_=r[14],R=r[15];if(s[0].setComponents(h-o,p-c,f-g,R-T).normalize(),s[1].setComponents(h+o,p+c,f+g,R+T).normalize(),s[2].setComponents(h+a,p+u,f+v,R+E).normalize(),s[3].setComponents(h-a,p-u,f-v,R-E).normalize(),i)s[4].setComponents(l,d,m,_).normalize(),s[5].setComponents(h-l,p-d,f-m,R-_).normalize();else if(s[4].setComponents(h-l,p-d,f-m,R-_).normalize(),t===$n)s[5].setComponents(h+l,p+d,f+m,R+_).normalize();else if(t===fo)s[5].setComponents(l,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){Di.center.set(0,0,0);const t=If.distanceTo(e.center);return Di.radius=.7071067811865476+t,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Wr.x=s.normal.x>0?e.max.x:e.min.x,Wr.y=s.normal.y>0?e.max.y:e.min.y,Wr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lu extends Bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mo=new C,go=new C,Nc=new Tt,Zs=new Ul,Xr=new bo,la=new C,Uc=new C;class Lf extends Jt{constructor(e=new un,t=new lu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)mo.fromBufferAttribute(t,s-1),go.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=mo.distanceTo(go);e.setAttribute("lineDistance",new bt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(s),Xr.radius+=r,e.ray.intersectsSphere(Xr)===!1)return;Nc.copy(s).invert(),Zs.copy(e.ray).applyMatrix4(Nc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,c=i.index,d=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=h){const f=c.getX(v),T=c.getX(v+1),E=qr(this,e,Zs,l,f,T,v);E&&t.push(E)}if(this.isLineLoop){const v=c.getX(g-1),m=c.getX(p),f=qr(this,e,Zs,l,v,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=h){const f=qr(this,e,Zs,l,v,v+1,v);f&&t.push(f)}if(this.isLineLoop){const v=qr(this,e,Zs,l,g-1,p,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function qr(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(mo.fromBufferAttribute(a,s),go.fromBufferAttribute(a,r),t.distanceSqToSegment(mo,go,la,Uc)>i)return;la.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(la);if(!(h<e.near||h>e.far))return{distance:h,point:Uc.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Oc=new C,Fc=new C;class Df extends Lf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Oc.fromBufferAttribute(t,s),Fc.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Oc.distanceTo(Fc);e.setAttribute("lineDistance",new bt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nf extends hn{constructor(e,t,i,s,r,o,a,l,h){super(e,t,i,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cu extends hn{constructor(e,t,i=Gi,s,r,o,a=zn,l=zn,h,c=ur,u=1){if(c!==ur&&c!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,o,a,l,c,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class hu extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ao extends un{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const h=this;s=Math.floor(s),r=Math.floor(r);const c=[],u=[],d=[],p=[];let g=0;const v=[],m=i/2;let f=0;T(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(c),this.setAttribute("position",new bt(u,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(p,2));function T(){const _=new C,R=new C;let A=0;const w=(t-e)/i;for(let P=0;P<=r;P++){const M=[],S=P/r,L=S*(t-e)+e;for(let F=0;F<=s;F++){const W=F/s,J=W*l+a,k=Math.sin(J),$=Math.cos(J);R.x=L*k,R.y=-S*i+m,R.z=L*$,u.push(R.x,R.y,R.z),_.set(k,w,$).normalize(),d.push(_.x,_.y,_.z),p.push(W,1-S),M.push(g++)}v.push(M)}for(let P=0;P<s;P++)for(let M=0;M<r;M++){const S=v[M][P],L=v[M+1][P],F=v[M+1][P+1],W=v[M][P+1];(e>0||M!==0)&&(c.push(S,L,W),A+=3),(t>0||M!==r-1)&&(c.push(L,F,W),A+=3)}h.addGroup(f,A,0),f+=A}function E(_){const R=g,A=new he,w=new C;let P=0;const M=_===!0?e:t,S=_===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),g++;const L=g;for(let F=0;F<=s;F++){const J=F/s*l+a,k=Math.cos(J),$=Math.sin(J);w.x=M*$,w.y=m*S,w.z=M*k,u.push(w.x,w.y,w.z),d.push(0,S,0),A.x=k*.5+.5,A.y=$*.5*S+.5,p.push(A.x,A.y),g++}for(let F=0;F<s;F++){const W=R+F,J=L+F;_===!0?c.push(J,J+1,W):c.push(J+1,J,W),P+=3}h.addGroup(f,P,_===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kl extends Ao{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new kl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wo extends un{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),h(i),c(),this.setAttribute("position",new bt(r,3)),this.setAttribute("normal",new bt(r.slice(),3)),this.setAttribute("uv",new bt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(T){const E=new C,_=new C,R=new C;for(let A=0;A<t.length;A+=3)p(t[A+0],E),p(t[A+1],_),p(t[A+2],R),l(E,_,R,T)}function l(T,E,_,R){const A=R+1,w=[];for(let P=0;P<=A;P++){w[P]=[];const M=T.clone().lerp(_,P/A),S=E.clone().lerp(_,P/A),L=A-P;for(let F=0;F<=L;F++)F===0&&P===A?w[P][F]=M:w[P][F]=M.clone().lerp(S,F/L)}for(let P=0;P<A;P++)for(let M=0;M<2*(A-P)-1;M++){const S=Math.floor(M/2);M%2===0?(d(w[P][S+1]),d(w[P+1][S]),d(w[P][S])):(d(w[P][S+1]),d(w[P+1][S+1]),d(w[P+1][S]))}}function h(T){const E=new C;for(let _=0;_<r.length;_+=3)E.x=r[_+0],E.y=r[_+1],E.z=r[_+2],E.normalize().multiplyScalar(T),r[_+0]=E.x,r[_+1]=E.y,r[_+2]=E.z}function c(){const T=new C;for(let E=0;E<r.length;E+=3){T.x=r[E+0],T.y=r[E+1],T.z=r[E+2];const _=m(T)/2/Math.PI+.5,R=f(T)/Math.PI+.5;o.push(_,1-R)}g(),u()}function u(){for(let T=0;T<o.length;T+=6){const E=o[T+0],_=o[T+2],R=o[T+4],A=Math.max(E,_,R),w=Math.min(E,_,R);A>.9&&w<.1&&(E<.2&&(o[T+0]+=1),_<.2&&(o[T+2]+=1),R<.2&&(o[T+4]+=1))}}function d(T){r.push(T.x,T.y,T.z)}function p(T,E){const _=T*3;E.x=e[_+0],E.y=e[_+1],E.z=e[_+2]}function g(){const T=new C,E=new C,_=new C,R=new C,A=new he,w=new he,P=new he;for(let M=0,S=0;M<r.length;M+=9,S+=6){T.set(r[M+0],r[M+1],r[M+2]),E.set(r[M+3],r[M+4],r[M+5]),_.set(r[M+6],r[M+7],r[M+8]),A.set(o[S+0],o[S+1]),w.set(o[S+2],o[S+3]),P.set(o[S+4],o[S+5]),R.copy(T).add(E).add(_).divideScalar(3);const L=m(R);v(A,S+0,T,L),v(w,S+2,E,L),v(P,S+4,_,L)}}function v(T,E,_,R){R<0&&T.x===1&&(o[E]=T.x-1),_.x===0&&_.z===0&&(o[E]=R/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function f(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.vertices,e.indices,e.radius,e.details)}}class ei{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=i[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const c=i[s],d=i[s+1]-c,p=(o-c)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new he:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new C,s=[],r=[],o=[],a=new C,l=new Tt;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let h=Number.MAX_VALUE;const c=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);c<=h&&(h=c,i.set(1,0,0)),u<=h&&(h=u,i.set(0,1,0)),d<=h&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Qe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Qe(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class zl extends ei{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new he){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=h-this.aY;l=d*c-p*u+this.aX,h=d*u+p*c+this.aY}return i.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Uf extends zl{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Hl(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,c,u){let d=(o-r)/h-(a-r)/(h+c)+(a-o)/c,p=(a-o)/c-(l-o)/(c+u)+(l-a)/u;d*=c,p*=c,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const Yr=new C,ca=new Hl,ha=new Hl,ua=new Hl;class Of extends ei{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new C){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,c;this.closed||a>0?h=s[(a-1)%r]:(Yr.subVectors(s[0],s[1]).add(s[0]),h=Yr);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:(Yr.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=Yr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(c),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ca.initNonuniformCatmullRom(h.x,u.x,d.x,c.x,g,v,m),ha.initNonuniformCatmullRom(h.y,u.y,d.y,c.y,g,v,m),ua.initNonuniformCatmullRom(h.z,u.z,d.z,c.z,g,v,m)}else this.curveType==="catmullrom"&&(ca.initCatmullRom(h.x,u.x,d.x,c.x,this.tension),ha.initCatmullRom(h.y,u.y,d.y,c.y,this.tension),ua.initCatmullRom(h.z,u.z,d.z,c.z,this.tension));return i.set(ca.calc(l),ha.calc(l),ua.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Bc(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Ff(n,e){const t=1-n;return t*t*e}function Bf(n,e){return 2*(1-n)*n*e}function kf(n,e){return n*n*e}function sr(n,e,t,i){return Ff(n,e)+Bf(n,t)+kf(n,i)}function zf(n,e){const t=1-n;return t*t*t*e}function Hf(n,e){const t=1-n;return 3*t*t*n*e}function Gf(n,e){return 3*(1-n)*n*n*e}function Vf(n,e){return n*n*n*e}function rr(n,e,t,i,s){return zf(n,e)+Hf(n,t)+Gf(n,i)+Vf(n,s)}class uu extends ei{constructor(e=new he,t=new he,i=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new he){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(rr(e,s.x,r.x,o.x,a.x),rr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Wf extends ei{constructor(e=new C,t=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new C){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(rr(e,s.x,r.x,o.x,a.x),rr(e,s.y,r.y,o.y,a.y),rr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class du extends ei{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xf extends ei{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fu extends ei{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(sr(e,s.x,r.x,o.x),sr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qf extends ei{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(sr(e,s.x,r.x,o.x),sr(e,s.y,r.y,o.y),sr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pu extends ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],c=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Bc(a,l.x,h.x,c.x,u.x),Bc(a,l.y,h.y,c.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new he().fromArray(s))}return this}}var fl=Object.freeze({__proto__:null,ArcCurve:Uf,CatmullRomCurve3:Of,CubicBezierCurve:uu,CubicBezierCurve3:Wf,EllipseCurve:zl,LineCurve:du,LineCurve3:Xf,QuadraticBezierCurve:fu,QuadraticBezierCurve3:qf,SplineCurve:pu});class Yf extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fl[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let h=0;h<l.length;h++){const c=l[h];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new fl[s.type]().fromJSON(s))}return this}}class kc extends Yf{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new du(this.currentPoint.clone(),new he(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new fu(this.currentPoint.clone(),new he(e,t),new he(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new uu(this.currentPoint.clone(),new he(e,t),new he(i,s),new he(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new pu(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+h,t+c,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const h=new zl(e,t,i,s,r,o,a,l);if(this.curves.length>0){const u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);const c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class mu extends kc{constructor(e){super(e),this.uuid=$i(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new kc().fromJSON(s))}return this}}function Kf(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=gu(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,h;if(i&&(r=Qf(n,e,r,t)),n.length>80*t){a=1/0,l=1/0;let c=-1/0,u=-1/0;for(let d=t;d<s;d+=t){const p=n[d],g=n[d+1];p<a&&(a=p),g<l&&(l=g),p>c&&(c=p),g>u&&(u=g)}h=Math.max(c-a,u-l),h=h!==0?32767/h:0}return mr(r,o,t,a,l,h,0),o}function gu(n,e,t,i,s){let r;if(s===hp(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=zc(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=zc(o/i|0,n[o],n[o+1],r);return r&&Ds(r,r.next)&&(_r(r),r=r.next),r}function Vi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ds(t,t.next)||It(t.prev,t,t.next)===0)){if(_r(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function mr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&sp(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,h=n.next;if(r?Jf(n,i,s,r):$f(n)){e.push(l.i,n.i,h.i),_r(n),n=h.next,a=h.next;continue}if(n=h,n===a){o?o===1?(n=Zf(Vi(n),e),mr(n,e,t,i,s,r,2)):o===2&&jf(n,e,t,i,s,r):mr(Vi(n),e,t,i,s,r,1);break}}}function $f(n){const e=n.prev,t=n,i=n.next;if(It(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,h=i.y,c=Math.min(s,r,o),u=Math.min(a,l,h),d=Math.max(s,r,o),p=Math.max(a,l,h);let g=i.next;for(;g!==e;){if(g.x>=c&&g.x<=d&&g.y>=u&&g.y<=p&&Qs(s,a,r,l,o,h,g.x,g.y)&&It(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Jf(n,e,t,i){const s=n.prev,r=n,o=n.next;if(It(s,r,o)>=0)return!1;const a=s.x,l=r.x,h=o.x,c=s.y,u=r.y,d=o.y,p=Math.min(a,l,h),g=Math.min(c,u,d),v=Math.max(a,l,h),m=Math.max(c,u,d),f=pl(p,g,e,t,i),T=pl(v,m,e,t,i);let E=n.prevZ,_=n.nextZ;for(;E&&E.z>=f&&_&&_.z<=T;){if(E.x>=p&&E.x<=v&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&Qs(a,c,l,u,h,d,E.x,E.y)&&It(E.prev,E,E.next)>=0||(E=E.prevZ,_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Qs(a,c,l,u,h,d,_.x,_.y)&&It(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;E&&E.z>=f;){if(E.x>=p&&E.x<=v&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&Qs(a,c,l,u,h,d,E.x,E.y)&&It(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;_&&_.z<=T;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Qs(a,c,l,u,h,d,_.x,_.y)&&It(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Zf(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Ds(i,s)&&vu(i,t,t.next,s)&&gr(i,s)&&gr(s,i)&&(e.push(i.i,t.i,s.i),_r(t),_r(t.next),t=n=s),t=t.next}while(t!==n);return Vi(t)}function jf(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ap(o,a)){let l=xu(o,a);o=Vi(o,o.next),l=Vi(l,l.next),mr(o,e,t,i,s,r,0),mr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Qf(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,h=gu(n,a,l,i,!1);h===h.next&&(h.steiner=!0),s.push(op(h))}s.sort(ep);for(let r=0;r<s.length;r++)t=tp(s[r],t);return t}function ep(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function tp(n,e){const t=np(n,e);if(!t)return e;const i=xu(t,n);return Vi(i,i.next),Vi(t,t.next)}function np(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(Ds(n,t))return t;do{if(Ds(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,h=o.y;let c=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&_u(s<h?i:r,s,l,h,s<h?r:i,s,t.x,t.y)){const u=Math.abs(s-t.y)/(i-t.x);gr(t,n)&&(u<c||u===c&&(t.x>o.x||t.x===o.x&&ip(o,t)))&&(o=t,c=u)}t=t.next}while(t!==a);return o}function ip(n,e){return It(n.prev,n,e.prev)<0&&It(e.next,n,n.next)<0}function sp(n,e,t,i){let s=n;do s.z===0&&(s.z=pl(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,rp(s)}function rp(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let h=0;h<t&&(a++,o=o.nextZ,!!o);h++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function pl(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function op(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function _u(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Qs(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&_u(n,e,t,i,s,r,o,a)}function ap(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!lp(n,e)&&(gr(n,e)&&gr(e,n)&&cp(n,e)&&(It(n.prev,n,e.prev)||It(n,e.prev,e))||Ds(n,e)&&It(n.prev,n,n.next)>0&&It(e.prev,e,e.next)>0)}function It(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ds(n,e){return n.x===e.x&&n.y===e.y}function vu(n,e,t,i){const s=$r(It(n,e,t)),r=$r(It(n,e,i)),o=$r(It(t,i,n)),a=$r(It(t,i,e));return!!(s!==r&&o!==a||s===0&&Kr(n,t,e)||r===0&&Kr(n,i,e)||o===0&&Kr(t,n,i)||a===0&&Kr(t,e,i))}function Kr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function $r(n){return n>0?1:n<0?-1:0}function lp(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&vu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function gr(n,e){return It(n.prev,n,n.next)<0?It(n,e,n.next)>=0&&It(n,n.prev,e)>=0:It(n,e,n.prev)<0||It(n,n.next,e)<0}function cp(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function xu(n,e){const t=ml(n.i,n.x,n.y),i=ml(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function zc(n,e,t,i){const s=ml(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function _r(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ml(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function hp(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class up{static triangulate(e,t,i=2){return Kf(e,t,i)}}class vs{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return vs.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Hc(e),Gc(i,e);let o=e.length;t.forEach(Hc);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Gc(i,t[l]);const a=up.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Hc(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Gc(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Gl extends un{constructor(e=new mu([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const h=e[a];o(h)}this.setAttribute("position",new bt(s,3)),this.setAttribute("uv",new bt(r,2)),this.computeVertexNormals();function o(a){const l=[],h=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:dp;let E,_=!1,R,A,w,P;f&&(E=f.getSpacedPoints(c),_=!0,d=!1,R=f.computeFrenetFrames(c,!1),A=new C,w=new C,P=new C),d||(m=0,p=0,g=0,v=0);const M=a.extractPoints(h);let S=M.shape;const L=M.holes;if(!vs.isClockWise(S)){S=S.reverse();for(let ie=0,ee=L.length;ie<ee;ie++){const j=L[ie];vs.isClockWise(j)&&(L[ie]=j.reverse())}}function W(ie){const j=10000000000000001e-36;let Z=ie[0];for(let ge=1;ge<=ie.length;ge++){const ae=ge%ie.length,_e=ie[ae],Ye=_e.x-Z.x,qe=_e.y-Z.y,b=Ye*Ye+qe*qe,x=Math.max(Math.abs(_e.x),Math.abs(_e.y),Math.abs(Z.x),Math.abs(Z.y)),O=j*x*x;if(b<=O){ie.splice(ae,1),ge--;continue}Z=_e}}W(S),L.forEach(W);const J=L.length,k=S;for(let ie=0;ie<J;ie++){const ee=L[ie];S=S.concat(ee)}function $(ie,ee,j){return ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(ee,j)}const Q=S.length;function q(ie,ee,j){let Z,ge,ae;const _e=ie.x-ee.x,Ye=ie.y-ee.y,qe=j.x-ie.x,b=j.y-ie.y,x=_e*_e+Ye*Ye,O=_e*b-Ye*qe;if(Math.abs(O)>Number.EPSILON){const X=Math.sqrt(x),ne=Math.sqrt(qe*qe+b*b),K=ee.x-Ye/X,Fe=ee.y+_e/X,me=j.x-b/ne,De=j.y+qe/ne,Ne=((me-K)*b-(De-Fe)*qe)/(_e*b-Ye*qe);Z=K+_e*Ne-ie.x,ge=Fe+Ye*Ne-ie.y;const le=Z*Z+ge*ge;if(le<=2)return new he(Z,ge);ae=Math.sqrt(le/2)}else{let X=!1;_e>Number.EPSILON?qe>Number.EPSILON&&(X=!0):_e<-Number.EPSILON?qe<-Number.EPSILON&&(X=!0):Math.sign(Ye)===Math.sign(b)&&(X=!0),X?(Z=-Ye,ge=_e,ae=Math.sqrt(x)):(Z=_e,ge=Ye,ae=Math.sqrt(x/2))}return new he(Z/ae,ge/ae)}const fe=[];for(let ie=0,ee=k.length,j=ee-1,Z=ie+1;ie<ee;ie++,j++,Z++)j===ee&&(j=0),Z===ee&&(Z=0),fe[ie]=q(k[ie],k[j],k[Z]);const Ee=[];let we,B=fe.concat();for(let ie=0,ee=J;ie<ee;ie++){const j=L[ie];we=[];for(let Z=0,ge=j.length,ae=ge-1,_e=Z+1;Z<ge;Z++,ae++,_e++)ae===ge&&(ae=0),_e===ge&&(_e=0),we[Z]=q(j[Z],j[ae],j[_e]);Ee.push(we),B=B.concat(we)}let re;if(m===0)re=vs.triangulateShape(k,L);else{const ie=[],ee=[];for(let j=0;j<m;j++){const Z=j/m,ge=p*Math.cos(Z*Math.PI/2),ae=g*Math.sin(Z*Math.PI/2)+v;for(let _e=0,Ye=k.length;_e<Ye;_e++){const qe=$(k[_e],fe[_e],ae);Oe(qe.x,qe.y,-ge),Z===0&&ie.push(qe)}for(let _e=0,Ye=J;_e<Ye;_e++){const qe=L[_e];we=Ee[_e];const b=[];for(let x=0,O=qe.length;x<O;x++){const X=$(qe[x],we[x],ae);Oe(X.x,X.y,-ge),Z===0&&b.push(X)}Z===0&&ee.push(b)}}re=vs.triangulateShape(ie,ee)}const xe=re.length,se=g+v;for(let ie=0;ie<Q;ie++){const ee=d?$(S[ie],B[ie],se):S[ie];_?(w.copy(R.normals[0]).multiplyScalar(ee.x),A.copy(R.binormals[0]).multiplyScalar(ee.y),P.copy(E[0]).add(w).add(A),Oe(P.x,P.y,P.z)):Oe(ee.x,ee.y,0)}for(let ie=1;ie<=c;ie++)for(let ee=0;ee<Q;ee++){const j=d?$(S[ee],B[ee],se):S[ee];_?(w.copy(R.normals[ie]).multiplyScalar(j.x),A.copy(R.binormals[ie]).multiplyScalar(j.y),P.copy(E[ie]).add(w).add(A),Oe(P.x,P.y,P.z)):Oe(j.x,j.y,u/c*ie)}for(let ie=m-1;ie>=0;ie--){const ee=ie/m,j=p*Math.cos(ee*Math.PI/2),Z=g*Math.sin(ee*Math.PI/2)+v;for(let ge=0,ae=k.length;ge<ae;ge++){const _e=$(k[ge],fe[ge],Z);Oe(_e.x,_e.y,u+j)}for(let ge=0,ae=L.length;ge<ae;ge++){const _e=L[ge];we=Ee[ge];for(let Ye=0,qe=_e.length;Ye<qe;Ye++){const b=$(_e[Ye],we[Ye],Z);_?Oe(b.x,b.y+E[c-1].y,E[c-1].x+j):Oe(b.x,b.y,u+j)}}}V(),Y();function V(){const ie=s.length/3;if(d){let ee=0,j=Q*ee;for(let Z=0;Z<xe;Z++){const ge=re[Z];Le(ge[2]+j,ge[1]+j,ge[0]+j)}ee=c+m*2,j=Q*ee;for(let Z=0;Z<xe;Z++){const ge=re[Z];Le(ge[0]+j,ge[1]+j,ge[2]+j)}}else{for(let ee=0;ee<xe;ee++){const j=re[ee];Le(j[2],j[1],j[0])}for(let ee=0;ee<xe;ee++){const j=re[ee];Le(j[0]+Q*c,j[1]+Q*c,j[2]+Q*c)}}i.addGroup(ie,s.length/3-ie,0)}function Y(){const ie=s.length/3;let ee=0;Me(k,ee),ee+=k.length;for(let j=0,Z=L.length;j<Z;j++){const ge=L[j];Me(ge,ee),ee+=ge.length}i.addGroup(ie,s.length/3-ie,1)}function Me(ie,ee){let j=ie.length;for(;--j>=0;){const Z=j;let ge=j-1;ge<0&&(ge=ie.length-1);for(let ae=0,_e=c+m*2;ae<_e;ae++){const Ye=Q*ae,qe=Q*(ae+1),b=ee+Z+Ye,x=ee+ge+Ye,O=ee+ge+qe,X=ee+Z+qe;tt(b,x,O,X)}}}function Oe(ie,ee,j){l.push(ie),l.push(ee),l.push(j)}function Le(ie,ee,j){xt(ie),xt(ee),xt(j);const Z=s.length/3,ge=T.generateTopUV(i,s,Z-3,Z-2,Z-1);I(ge[0]),I(ge[1]),I(ge[2])}function tt(ie,ee,j,Z){xt(ie),xt(ee),xt(Z),xt(ee),xt(j),xt(Z);const ge=s.length/3,ae=T.generateSideWallUV(i,s,ge-6,ge-3,ge-2,ge-1);I(ae[0]),I(ae[1]),I(ae[3]),I(ae[1]),I(ae[2]),I(ae[3])}function xt(ie){s.push(l[ie*3+0]),s.push(l[ie*3+1]),s.push(l[ie*3+2])}function I(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return fp(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new fl[s.type]().fromJSON(s)),new Gl(i,e.options)}}const dp={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],h=e[s*3],c=e[s*3+1];return[new he(r,o),new he(a,l),new he(h,c)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],h=e[i*3],c=e[i*3+1],u=e[i*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-c)<Math.abs(o-h)?[new he(o,1-l),new he(h,1-u),new he(d,1-g),new he(v,1-f)]:[new he(a,1-l),new he(c,1-u),new he(p,1-g),new he(m,1-f)]}};function fp(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Vl extends wo{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vl(e.radius,e.detail)}}class Ro extends wo{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ro(e.radius,e.detail)}}class zs extends un{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),h=a+1,c=l+1,u=e/a,d=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<c;f++){const T=f*d-o;for(let E=0;E<h;E++){const _=E*u-r;g.push(_,-T,0),v.push(0,0,1),m.push(E/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<a;T++){const E=T+h*f,_=T+h*(f+1),R=T+1+h*(f+1),A=T+1+h*f;p.push(E,_,A),p.push(_,R,A)}this.setIndex(p),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(v,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.widthSegments,e.heightSegments)}}class _o extends un{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let h=0;const c=[],u=new C,d=new C,p=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){const T=[],E=f/i;let _=0;f===0&&o===0?_=.5/t:f===i&&l===Math.PI&&(_=-.5/t);for(let R=0;R<=t;R++){const A=R/t;u.x=-e*Math.cos(s+A*r)*Math.sin(o+E*a),u.y=e*Math.cos(o+E*a),u.z=e*Math.sin(s+A*r)*Math.sin(o+E*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(A+_,1-E),T.push(h++)}c.push(T)}for(let f=0;f<i;f++)for(let T=0;T<t;T++){const E=c[f][T+1],_=c[f][T],R=c[f+1][T],A=c[f+1][T+1];(f!==0||o>0)&&p.push(E,_,A),(f!==i-1||l<Math.PI)&&p.push(_,R,A)}this.setIndex(p),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(v,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Co extends un{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],h=[],c=new C,u=new C,d=new C;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){const v=g/s*r,m=p/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),c.x=e*Math.cos(v),c.y=e*Math.sin(v),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(g/s),h.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){const v=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,T=(s+1)*p+g;o.push(v,m,T),o.push(m,f,T)}this.setIndex(o),this.setAttribute("position",new bt(a,3)),this.setAttribute("normal",new bt(l,3)),this.setAttribute("uv",new bt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class pp extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Mu extends Bs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jh,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mp extends Mu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class gp extends Bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _p extends Bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Wl extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class vp extends Wl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const da=new Tt,Vc=new C,Wc=new C;class Su{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bl,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Vc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vc),Wc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wc),t.updateMatrixWorld(),da.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(da,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(da)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xp extends Su{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Is*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Mp extends Wl{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new xp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Xc=new Tt,js=new C,fa=new C;class Sp extends Su{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),js.setFromMatrixPosition(e.matrixWorld),i.position.copy(js),fa.copy(i.position),fa.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(fa),i.updateMatrixWorld(),s.makeTranslation(-js.x,-js.y,-js.z),Xc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xc,i.coordinateSystem,i.reversedDepth)}}class li extends Wl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Sp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Eu extends ou{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ep extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class yp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const qc=new Tt;class Xl{constructor(e,t,i=0,s=1/0){this.ray=new Ul(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ol,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qc),this}intersectObject(e,t=!0,i=[]){return gl(e,this,i,t),i.sort(Yc),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)gl(e[s],this,i,t);return i.sort(Yc),i}}function Yc(n,e){return n.distance-e.distance}function gl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)gl(r[o],e,t,!0)}}function Kc(n,e,t,i){const s=Tp(i);switch(t){case Kh:return n*e;case Jh:return n*e/s.components*s.byteLength;case Pl:return n*e/s.components*s.byteLength;case Zh:return n*e*2/s.components*s.byteLength;case Il:return n*e*2/s.components*s.byteLength;case $h:return n*e*3/s.components*s.byteLength;case Bn:return n*e*4/s.components*s.byteLength;case Ll:return n*e*4/s.components*s.byteLength;case eo:case to:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case no:case io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case za:case Ga:return Math.max(n,16)*Math.max(e,8)/4;case ka:case Ha:return Math.max(n,8)*Math.max(e,8)/2;case Va:case Wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case $a:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Za:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ja:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case el:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case tl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case nl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case il:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case sl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case rl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ol:case al:case ll:return Math.ceil(n/4)*Math.ceil(e/4)*16;case cl:case hl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ul:case dl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tp(n){switch(n){case Zn:case Wh:return{byteLength:1,components:1};case cr:case Xh:case di:return{byteLength:2,components:1};case Rl:case Cl:return{byteLength:2,components:4};case Gi:case wl:case hi:return{byteLength:4,components:1};case qh:case Yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bl);function yu(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function bp(n){const e=new WeakMap;function t(a,l){const h=a.array,c=a.usage,u=h.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,h,c),a.onUploadCallback();let p;if(h instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)p=n.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=n.SHORT;else if(h instanceof Uint32Array)p=n.UNSIGNED_INT;else if(h instanceof Int32Array)p=n.INT;else if(h instanceof Int8Array)p=n.BYTE;else if(h instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,h){const c=l.array,u=l.updateRanges;if(n.bindBuffer(h,a),u.length===0)n.bufferSubData(h,0,c);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];n.bufferSubData(h,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=e.get(a);if(h===void 0)e.set(a,t(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var Ap=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wp=`#ifdef USE_ALPHAHASH
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
#endif`,Rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lp=`#ifdef USE_AOMAP
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
#endif`,Dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Np=`#ifdef USE_BATCHING
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
#endif`,Up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kp=`#ifdef USE_IRIDESCENCE
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
#endif`,zp=`#ifdef USE_BUMPMAP
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$p=`#define PI 3.141592653589793
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
} // validated`,Jp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zp=`vec3 transformedNormal = objectNormal;
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
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",im=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fm=`#ifdef USE_GRADIENTMAP
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
}`,pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_m=`uniform bool receiveShadow;
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
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,xm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ym=`PhysicalMaterial material;
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
#endif`,Tm=`struct PhysicalMaterial {
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
}`,bm=`
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
#endif`,Am=`#if defined( RE_IndirectDiffuse )
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
#endif`,wm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Um=`#if defined( USE_POINTS_UV )
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
#endif`,Om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,km=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`#ifdef USE_MORPHTARGETS
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
#endif`,Gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Km=`#ifdef USE_NORMALMAP
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
#endif`,$m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,t0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,h0=`float getShadowMask() {
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
}`,u0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d0=`#ifdef USE_SKINNING
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
#endif`,f0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p0=`#ifdef USE_SKINNING
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
#endif`,m0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x0=`#ifdef USE_TRANSMISSION
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
#endif`,M0=`#ifdef USE_TRANSMISSION
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
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const b0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A0=`uniform sampler2D t2D;
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
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`#include <common>
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
}`,L0=`#if DEPTH_PACKING == 3200
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
}`,D0=`#define DISTANCE
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
}`,N0=`#define DISTANCE
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
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`uniform float scale;
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
}`,B0=`uniform vec3 diffuse;
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
}`,k0=`#include <common>
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
}`,z0=`uniform vec3 diffuse;
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
}`,H0=`#define LAMBERT
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
}`,G0=`#define LAMBERT
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
}`,V0=`#define MATCAP
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
}`,W0=`#define MATCAP
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
}`,X0=`#define NORMAL
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
}`,q0=`#define NORMAL
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
}`,Y0=`#define PHONG
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
}`,K0=`#define PHONG
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
}`,$0=`#define STANDARD
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
}`,J0=`#define STANDARD
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
}`,Z0=`#define TOON
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
}`,j0=`#define TOON
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
}`,Q0=`uniform float size;
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
}`,eg=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,ng=`uniform vec3 color;
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
}`,ig=`uniform float rotation;
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
}`,sg=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Ap,alphahash_pars_fragment:wp,alphamap_fragment:Rp,alphamap_pars_fragment:Cp,alphatest_fragment:Pp,alphatest_pars_fragment:Ip,aomap_fragment:Lp,aomap_pars_fragment:Dp,batching_pars_vertex:Np,batching_vertex:Up,begin_vertex:Op,beginnormal_vertex:Fp,bsdfs:Bp,iridescence_fragment:kp,bumpmap_pars_fragment:zp,clipping_planes_fragment:Hp,clipping_planes_pars_fragment:Gp,clipping_planes_pars_vertex:Vp,clipping_planes_vertex:Wp,color_fragment:Xp,color_pars_fragment:qp,color_pars_vertex:Yp,color_vertex:Kp,common:$p,cube_uv_reflection_fragment:Jp,defaultnormal_vertex:Zp,displacementmap_pars_vertex:jp,displacementmap_vertex:Qp,emissivemap_fragment:em,emissivemap_pars_fragment:tm,colorspace_fragment:nm,colorspace_pars_fragment:im,envmap_fragment:sm,envmap_common_pars_fragment:rm,envmap_pars_fragment:om,envmap_pars_vertex:am,envmap_physical_pars_fragment:vm,envmap_vertex:lm,fog_vertex:cm,fog_pars_vertex:hm,fog_fragment:um,fog_pars_fragment:dm,gradientmap_pars_fragment:fm,lightmap_pars_fragment:pm,lights_lambert_fragment:mm,lights_lambert_pars_fragment:gm,lights_pars_begin:_m,lights_toon_fragment:xm,lights_toon_pars_fragment:Mm,lights_phong_fragment:Sm,lights_phong_pars_fragment:Em,lights_physical_fragment:ym,lights_physical_pars_fragment:Tm,lights_fragment_begin:bm,lights_fragment_maps:Am,lights_fragment_end:wm,logdepthbuf_fragment:Rm,logdepthbuf_pars_fragment:Cm,logdepthbuf_pars_vertex:Pm,logdepthbuf_vertex:Im,map_fragment:Lm,map_pars_fragment:Dm,map_particle_fragment:Nm,map_particle_pars_fragment:Um,metalnessmap_fragment:Om,metalnessmap_pars_fragment:Fm,morphinstance_vertex:Bm,morphcolor_vertex:km,morphnormal_vertex:zm,morphtarget_pars_vertex:Hm,morphtarget_vertex:Gm,normal_fragment_begin:Vm,normal_fragment_maps:Wm,normal_pars_fragment:Xm,normal_pars_vertex:qm,normal_vertex:Ym,normalmap_pars_fragment:Km,clearcoat_normal_fragment_begin:$m,clearcoat_normal_fragment_maps:Jm,clearcoat_pars_fragment:Zm,iridescence_pars_fragment:jm,opaque_fragment:Qm,packing:e0,premultiplied_alpha_fragment:t0,project_vertex:n0,dithering_fragment:i0,dithering_pars_fragment:s0,roughnessmap_fragment:r0,roughnessmap_pars_fragment:o0,shadowmap_pars_fragment:a0,shadowmap_pars_vertex:l0,shadowmap_vertex:c0,shadowmask_pars_fragment:h0,skinbase_vertex:u0,skinning_pars_vertex:d0,skinning_vertex:f0,skinnormal_vertex:p0,specularmap_fragment:m0,specularmap_pars_fragment:g0,tonemapping_fragment:_0,tonemapping_pars_fragment:v0,transmission_fragment:x0,transmission_pars_fragment:M0,uv_pars_fragment:S0,uv_pars_vertex:E0,uv_vertex:y0,worldpos_vertex:T0,background_vert:b0,background_frag:A0,backgroundCube_vert:w0,backgroundCube_frag:R0,cube_vert:C0,cube_frag:P0,depth_vert:I0,depth_frag:L0,distanceRGBA_vert:D0,distanceRGBA_frag:N0,equirect_vert:U0,equirect_frag:O0,linedashed_vert:F0,linedashed_frag:B0,meshbasic_vert:k0,meshbasic_frag:z0,meshlambert_vert:H0,meshlambert_frag:G0,meshmatcap_vert:V0,meshmatcap_frag:W0,meshnormal_vert:X0,meshnormal_frag:q0,meshphong_vert:Y0,meshphong_frag:K0,meshphysical_vert:$0,meshphysical_frag:J0,meshtoon_vert:Z0,meshtoon_frag:j0,points_vert:Q0,points_frag:eg,shadow_vert:tg,shadow_frag:ng,sprite_vert:ig,sprite_frag:sg},Se={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},qn={basic:{uniforms:ln([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:ln([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new $e(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:ln([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:ln([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:ln([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new $e(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:ln([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:ln([Se.points,Se.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:ln([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:ln([Se.common,Se.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:ln([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:ln([Se.sprite,Se.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:ln([Se.common,Se.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:ln([Se.lights,Se.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};qn.physical={uniforms:ln([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Jr={r:0,b:0,g:0},Ni=new Dn,rg=new Tt;function og(n,e,t,i,s,r,o){const a=new $e(0);let l=r===!0?0:1,h,c,u=null,d=0,p=null;function g(E){let _=E.isScene===!0?E.background:null;return _&&_.isTexture&&(_=(E.backgroundBlurriness>0?t:e).get(_)),_}function v(E){let _=!1;const R=g(E);R===null?f(a,l):R&&R.isColor&&(f(R,1),_=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,_){const R=g(_);R&&(R.isCubeTexture||R.mapping===To)?(c===void 0&&(c=new Ct(new ks(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Ls(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Ni.copy(_.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),c.material.uniforms.envMap.value=R,c.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rg.makeRotationFromEuler(Ni)),c.material.toneMapped=rt.getTransfer(R.colorSpace)!==pt,(u!==R||d!==R.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,p=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):R&&R.isTexture&&(h===void 0&&(h=new Ct(new zs(2,2),new cn({name:"BackgroundMaterial",uniforms:Ls(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=R,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=rt.getTransfer(R.colorSpace)!==pt,R.matrixAutoUpdate===!0&&R.updateMatrix(),h.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,p=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null))}function f(E,_){E.getRGB(Jr,ru(n)),i.buffers.color.setClear(Jr.r,Jr.g,Jr.b,_,o)}function T(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,_=1){a.set(E),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(a,l)},render:v,addToRenderList:m,dispose:T}}function ag(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(S,L,F,W,J){let k=!1;const $=u(W,F,L);r!==$&&(r=$,h(r.object)),k=p(S,W,F,J),k&&g(S,W,F,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,_(S,L,F,W),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return n.createVertexArray()}function h(S){return n.bindVertexArray(S)}function c(S){return n.deleteVertexArray(S)}function u(S,L,F){const W=F.wireframe===!0;let J=i[S.id];J===void 0&&(J={},i[S.id]=J);let k=J[L.id];k===void 0&&(k={},J[L.id]=k);let $=k[W];return $===void 0&&($=d(l()),k[W]=$),$}function d(S){const L=[],F=[],W=[];for(let J=0;J<t;J++)L[J]=0,F[J]=0,W[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:W,object:S,attributes:{},index:null}}function p(S,L,F,W){const J=r.attributes,k=L.attributes;let $=0;const Q=F.getAttributes();for(const q in Q)if(Q[q].location>=0){const Ee=J[q];let we=k[q];if(we===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(we=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(we=S.instanceColor)),Ee===void 0||Ee.attribute!==we||we&&Ee.data!==we.data)return!0;$++}return r.attributesNum!==$||r.index!==W}function g(S,L,F,W){const J={},k=L.attributes;let $=0;const Q=F.getAttributes();for(const q in Q)if(Q[q].location>=0){let Ee=k[q];Ee===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(Ee=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(Ee=S.instanceColor));const we={};we.attribute=Ee,Ee&&Ee.data&&(we.data=Ee.data),J[q]=we,$++}r.attributes=J,r.attributesNum=$,r.index=W}function v(){const S=r.newAttributes;for(let L=0,F=S.length;L<F;L++)S[L]=0}function m(S){f(S,0)}function f(S,L){const F=r.newAttributes,W=r.enabledAttributes,J=r.attributeDivisors;F[S]=1,W[S]===0&&(n.enableVertexAttribArray(S),W[S]=1),J[S]!==L&&(n.vertexAttribDivisor(S,L),J[S]=L)}function T(){const S=r.newAttributes,L=r.enabledAttributes;for(let F=0,W=L.length;F<W;F++)L[F]!==S[F]&&(n.disableVertexAttribArray(F),L[F]=0)}function E(S,L,F,W,J,k,$){$===!0?n.vertexAttribIPointer(S,L,F,J,k):n.vertexAttribPointer(S,L,F,W,J,k)}function _(S,L,F,W){v();const J=W.attributes,k=F.getAttributes(),$=L.defaultAttributeValues;for(const Q in k){const q=k[Q];if(q.location>=0){let fe=J[Q];if(fe===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor)),fe!==void 0){const Ee=fe.normalized,we=fe.itemSize,B=e.get(fe);if(B===void 0)continue;const re=B.buffer,xe=B.type,se=B.bytesPerElement,V=xe===n.INT||xe===n.UNSIGNED_INT||fe.gpuType===wl;if(fe.isInterleavedBufferAttribute){const Y=fe.data,Me=Y.stride,Oe=fe.offset;if(Y.isInstancedInterleavedBuffer){for(let Le=0;Le<q.locationSize;Le++)f(q.location+Le,Y.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Le=0;Le<q.locationSize;Le++)m(q.location+Le);n.bindBuffer(n.ARRAY_BUFFER,re);for(let Le=0;Le<q.locationSize;Le++)E(q.location+Le,we/q.locationSize,xe,Ee,Me*se,(Oe+we/q.locationSize*Le)*se,V)}else{if(fe.isInstancedBufferAttribute){for(let Y=0;Y<q.locationSize;Y++)f(q.location+Y,fe.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Y=0;Y<q.locationSize;Y++)m(q.location+Y);n.bindBuffer(n.ARRAY_BUFFER,re);for(let Y=0;Y<q.locationSize;Y++)E(q.location+Y,we/q.locationSize,xe,Ee,we*se,we/q.locationSize*Y*se,V)}}else if($!==void 0){const Ee=$[Q];if(Ee!==void 0)switch(Ee.length){case 2:n.vertexAttrib2fv(q.location,Ee);break;case 3:n.vertexAttrib3fv(q.location,Ee);break;case 4:n.vertexAttrib4fv(q.location,Ee);break;default:n.vertexAttrib1fv(q.location,Ee)}}}}T()}function R(){P();for(const S in i){const L=i[S];for(const F in L){const W=L[F];for(const J in W)c(W[J].object),delete W[J];delete L[F]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const F in L){const W=L[F];for(const J in W)c(W[J].object),delete W[J];delete L[F]}delete i[S.id]}function w(S){for(const L in i){const F=i[L];if(F[S.id]===void 0)continue;const W=F[S.id];for(const J in W)c(W[J].object),delete W[J];delete F[S.id]}}function P(){M(),o=!0,r!==s&&(r=s,h(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function lg(n,e,t){let i;function s(h){i=h}function r(h,c){n.drawArrays(i,h,c),t.update(c,i,1)}function o(h,c,u){u!==0&&(n.drawArraysInstanced(i,h,c,u),t.update(c,i,u))}function a(h,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,c,0,u);let p=0;for(let g=0;g<u;g++)p+=c[g];t.update(p,i,1)}function l(h,c,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)o(h[g],c[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,h,0,c,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=c[v]*d[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function cg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Bn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const P=w===di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Zn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==hi&&!P)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:_,vertexTextures:R,maxSamples:A}}function hg(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Oi,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=c(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?c(null):h();else{const T=r?0:i,E=T*4;let _=f.clippingState||null;l.value=_,_=c(g,d,E,p);for(let R=0;R!==E;++R)_[R]=t[R];f.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(u,d,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,_=p;E!==v;++E,_+=4)o.copy(u[E]).applyMatrix4(T,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function ug(n){let e=new WeakMap;function t(o,a){return a===Oa?o.mapping=Rs:a===Fa&&(o.mapping=Cs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Oa||a===Fa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new Af(l.height);return h.fromEquirectangularTexture(n,o),e.set(o,h),o.addEventListener("dispose",s),t(h.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const xs=4,$c=[.125,.215,.35,.446,.526,.582],ki=20,pa=new Eu,Jc=new $e;let ma=null,ga=0,_a=0,va=!1;const Fi=(1+Math.sqrt(5))/2,fs=1/Fi,Zc=[new C(-Fi,fs,0),new C(Fi,fs,0),new C(-fs,0,Fi),new C(fs,0,Fi),new C(0,Fi,-fs),new C(0,Fi,fs),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],dg=new C;class jc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=dg}=r;ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ma,ga,_a),this._renderer.xr.enabled=va,e.scissorTest=!1,Zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:di,format:Bn,colorSpace:Ps,depthBuffer:!1},s=Qc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qc(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fg(r)),this._blurMaterial=pg(r,e,t)}return s}_compileMaterial(e){const t=new Ct(this._lodPlanes[0],e);this._renderer.compile(t,pa)}_sceneToCubeUV(e,t,i,s,r){const l=new pn(90,1,t,i),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Jc),u.toneMapping=Si,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const v=new Ji({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),m=new Ct(new ks,v);let f=!1;const T=e.background;T?T.isColor&&(v.color.copy(T),e.background=null,f=!0):(v.color.copy(Jc),f=!0);for(let E=0;E<6;E++){const _=E%3;_===0?(l.up.set(0,h[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+c[E],r.y,r.z)):_===1?(l.up.set(0,0,h[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+c[E],r.z)):(l.up.set(0,h[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+c[E]));const R=this._cubeSize;Zr(s,_*R,E>2?R:0,R,R),u.setRenderTarget(s),f&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Rs||e.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=th()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ct(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Zr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,pa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Zc[(s-r-1)%Zc.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new Ct(this._lodPlanes[s],h),d=h.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ki-1),v=r/g,m=isFinite(r)?1+Math.floor(c*v):ki;m>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const f=[];let T=0;for(let w=0;w<ki;++w){const P=w/v,M=Math.exp(-P*P/2);f.push(M),w===0?T+=M:w<m&&(T+=2*M)}for(let w=0;w<f.length;w++)f[w]=f[w]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;const _=this._sizeLods[s],R=3*_*(s>E-xs?s-E+xs:0),A=4*(this._cubeSize-_);Zr(t,R,A,3*_,2*_),l.setRenderTarget(t),l.render(u,pa)}}function fg(n){const e=[],t=[],i=[];let s=n;const r=n-xs+1+$c.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-xs?l=$c[o-n+xs-1]:o===0&&(l=0),i.push(l);const h=1/(a-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,g=6,v=3,m=2,f=1,T=new Float32Array(v*g*p),E=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,P=A>2?0:-1,M=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];T.set(M,v*g*A),E.set(d,m*g*A);const S=[A,A,A,A,A,A];_.set(S,f*g*A)}const R=new un;R.setAttribute("position",new Gn(T,v)),R.setAttribute("uv",new Gn(E,m)),R.setAttribute("faceIndex",new Gn(_,f)),e.push(R),s>xs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Qc(n,e,t){const i=new Hn(n,e,t);return i.texture.mapping=To,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function pg(n,e,t){const i=new Float32Array(ki),s=new C(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ql(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function eh(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ql(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function th(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function ql(){return`

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
	`}function mg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,h=l===Oa||l===Fa,c=l===Rs||l===Cs;if(h||c){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new jc(n)),u=h?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return h&&p&&p.height>0||c&&p&&s(p)?(t===null&&(t=new jc(n)),u=h?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const h=6;for(let c=0;c<h;c++)a[c]!==void 0&&l++;return l===h}function r(a){const l=a.target;l.removeEventListener("dispose",r);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function gg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&fr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function _g(n,e,t,i){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function h(u){const d=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const T=p.array;v=p.version;for(let E=0,_=T.length;E<_;E+=3){const R=T[E+0],A=T[E+1],w=T[E+2];d.push(R,A,A,w,w,R)}}else if(g!==void 0){const T=g.array;v=g.version;for(let E=0,_=T.length/3-1;E<_;E+=3){const R=E+0,A=E+1,w=E+2;d.push(R,A,A,w,w,R)}}else return;const m=new(eu(d)?su:iu)(d,1);m.version=v;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function c(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&h(u)}else h(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:c}}function vg(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),t.update(p,i,1)}function h(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*o,g),t.update(p,i,g))}function c(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function u(d,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)h(d[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,v,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T]*v[T];t.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function xg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Mg(n,e,t){const i=new WeakMap,s=new _t;function r(o,a,l){const h=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let R=a.attributes.position.count*_,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const w=new Float32Array(R*A*4*u),P=new tu(w,R,A,u);P.type=hi,P.needsUpdate=!0;const M=_*4;for(let L=0;L<u;L++){const F=f[L],W=T[L],J=E[L],k=R*A*4*L;for(let $=0;$<F.count;$++){const Q=$*M;g===!0&&(s.fromBufferAttribute(F,$),w[k+Q+0]=s.x,w[k+Q+1]=s.y,w[k+Q+2]=s.z,w[k+Q+3]=0),v===!0&&(s.fromBufferAttribute(W,$),w[k+Q+4]=s.x,w[k+Q+5]=s.y,w[k+Q+6]=s.z,w[k+Q+7]=0),m===!0&&(s.fromBufferAttribute(J,$),w[k+Q+8]=s.x,w[k+Q+9]=s.y,w[k+Q+10]=s.z,w[k+Q+11]=J.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new he(R,A)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<h.length;m++)g+=h[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Sg(n,e,t,i){let s=new WeakMap;function r(l){const h=i.render.frame,c=l.geometry,u=e.get(l,c);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function o(){s=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}const Tu=new hn,nh=new cu(1,1),bu=new tu,Au=new hf,wu=new au,ih=[],sh=[],rh=new Float32Array(16),oh=new Float32Array(9),ah=new Float32Array(4);function Hs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=ih[s];if(r===void 0&&(r=new Float32Array(s),ih[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Po(n,e){let t=sh[e];t===void 0&&(t=new Int32Array(e),sh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Eg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2fv(this.addr,e),Xt(t,e)}}function Tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;n.uniform3fv(this.addr,e),Xt(t,e)}}function bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4fv(this.addr,e),Xt(t,e)}}function Ag(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;ah.set(i),n.uniformMatrix2fv(this.addr,!1,ah),Xt(t,i)}}function wg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;oh.set(i),n.uniformMatrix3fv(this.addr,!1,oh),Xt(t,i)}}function Rg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;rh.set(i),n.uniformMatrix4fv(this.addr,!1,rh),Xt(t,i)}}function Cg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2iv(this.addr,e),Xt(t,e)}}function Ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3iv(this.addr,e),Xt(t,e)}}function Lg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4iv(this.addr,e),Xt(t,e)}}function Dg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2uiv(this.addr,e),Xt(t,e)}}function Ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3uiv(this.addr,e),Xt(t,e)}}function Og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4uiv(this.addr,e),Xt(t,e)}}function Fg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(nh.compareFunction=Qh,r=nh):r=Tu,t.setTexture2D(e||r,s)}function Bg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Au,s)}function kg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||wu,s)}function zg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||bu,s)}function Hg(n){switch(n){case 5126:return Eg;case 35664:return yg;case 35665:return Tg;case 35666:return bg;case 35674:return Ag;case 35675:return wg;case 35676:return Rg;case 5124:case 35670:return Cg;case 35667:case 35671:return Pg;case 35668:case 35672:return Ig;case 35669:case 35673:return Lg;case 5125:return Dg;case 36294:return Ng;case 36295:return Ug;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return kg;case 36289:case 36303:case 36311:case 36292:return zg}}function Gg(n,e){n.uniform1fv(this.addr,e)}function Vg(n,e){const t=Hs(e,this.size,2);n.uniform2fv(this.addr,t)}function Wg(n,e){const t=Hs(e,this.size,3);n.uniform3fv(this.addr,t)}function Xg(n,e){const t=Hs(e,this.size,4);n.uniform4fv(this.addr,t)}function qg(n,e){const t=Hs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Yg(n,e){const t=Hs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Kg(n,e){const t=Hs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $g(n,e){n.uniform1iv(this.addr,e)}function Jg(n,e){n.uniform2iv(this.addr,e)}function Zg(n,e){n.uniform3iv(this.addr,e)}function jg(n,e){n.uniform4iv(this.addr,e)}function Qg(n,e){n.uniform1uiv(this.addr,e)}function e_(n,e){n.uniform2uiv(this.addr,e)}function t_(n,e){n.uniform3uiv(this.addr,e)}function n_(n,e){n.uniform4uiv(this.addr,e)}function i_(n,e,t){const i=this.cache,s=e.length,r=Po(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Tu,r[o])}function s_(n,e,t){const i=this.cache,s=e.length,r=Po(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Au,r[o])}function r_(n,e,t){const i=this.cache,s=e.length,r=Po(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||wu,r[o])}function o_(n,e,t){const i=this.cache,s=e.length,r=Po(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||bu,r[o])}function a_(n){switch(n){case 5126:return Gg;case 35664:return Vg;case 35665:return Wg;case 35666:return Xg;case 35674:return qg;case 35675:return Yg;case 35676:return Kg;case 5124:case 35670:return $g;case 35667:case 35671:return Jg;case 35668:case 35672:return Zg;case 35669:case 35673:return jg;case 5125:return Qg;case 36294:return e_;case 36295:return t_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return o_}}class l_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Hg(t.type)}}class c_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=a_(t.type)}}class h_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const xa=/(\w+)(\])?(\[|\.)?/g;function lh(n,e){n.seq.push(e),n.map[e.id]=e}function u_(n,e,t){const i=n.name,s=i.length;for(xa.lastIndex=0;;){const r=xa.exec(i),o=xa.lastIndex;let a=r[1];const l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){lh(t,h===void 0?new l_(a,n,e):new c_(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new h_(a),lh(t,u)),t=u}}}class so{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);u_(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function ch(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const d_=37297;let f_=0;function p_(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const hh=new Ze;function m_(n){rt._getMatrix(hh,rt.workingColorSpace,n);const e=`mat3( ${hh.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case uo:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function uh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+p_(n.getShaderSource(e),a)}else return r}function g_(n,e){const t=m_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function __(n,e){let t;switch(e){case Fh:t="Linear";break;case Bh:t="Reinhard";break;case kh:t="Cineon";break;case Al:t="ACESFilmic";break;case Hh:t="AgX";break;case Gh:t="Neutral";break;case zh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jr=new C;function v_(){rt.getLuminanceCoefficients(jr);const n=jr.x.toFixed(4),e=jr.y.toFixed(4),t=jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function M_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function S_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function er(n){return n!==""}function dh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const E_=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(n){return n.replace(E_,T_)}const y_=new Map;function T_(n,e){let t=je[e];if(t===void 0){const i=y_.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _l(t)}const b_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ph(n){return n.replace(b_,A_)}function A_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function w_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Nh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Uh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function R_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Rs:case Cs:e="ENVMAP_TYPE_CUBE";break;case To:e="ENVMAP_TYPE_CUBE_UV";break}return e}function C_(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Cs&&(e="ENVMAP_MODE_REFRACTION"),e}function P_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Oh:e="ENVMAP_BLENDING_MULTIPLY";break;case wd:e="ENVMAP_BLENDING_MIX";break;case Rd:e="ENVMAP_BLENDING_ADD";break}return e}function I_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function L_(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=w_(t),h=R_(t),c=C_(t),u=P_(t),d=I_(t),p=x_(t),g=M_(r),v=s.createProgram();let m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(er).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(er).join(`
`),f.length>0&&(f+=`
`)):(m=[mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),f=[mh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?je.tonemapping_pars_fragment:"",t.toneMapping!==Si?__("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,g_("linearToOutputTexel",t.outputColorSpace),v_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),o=_l(o),o=dh(o,t),o=fh(o,t),a=_l(a),a=dh(a,t),a=fh(a,t),o=ph(o),a=ph(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=T+m+o,_=T+f+a,R=ch(s,s.VERTEX_SHADER,E),A=ch(s,s.FRAGMENT_SHADER,_);s.attachShader(v,R),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(L){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(v)||"",W=s.getShaderInfoLog(R)||"",J=s.getShaderInfoLog(A)||"",k=F.trim(),$=W.trim(),Q=J.trim();let q=!0,fe=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,R,A);else{const Ee=uh(s,R,"vertex"),we=uh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+Ee+`
`+we)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):($===""||Q==="")&&(fe=!1);fe&&(L.diagnostics={runnable:q,programLog:k,vertexShader:{log:$,prefix:m},fragmentShader:{log:Q,prefix:f}})}s.deleteShader(R),s.deleteShader(A),P=new so(s,v),M=S_(s,v)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,d_)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=f_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=A,this}let D_=0;class N_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new U_(e),t.set(e,i)),i}}class U_{constructor(e){this.id=D_++,this.code=e,this.usedTimes=0}}function O_(n,e,t,i,s,r,o){const a=new Ol,l=new N_,h=new Set,c=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return h.add(M),M===0?"uv":`uv${M}`}function m(M,S,L,F,W){const J=F.fog,k=W.geometry,$=M.isMeshStandardMaterial?F.environment:null,Q=(M.isMeshStandardMaterial?t:e).get(M.envMap||$),q=Q&&Q.mapping===To?Q.image.height:null,fe=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const Ee=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,we=Ee!==void 0?Ee.length:0;let B=0;k.morphAttributes.position!==void 0&&(B=1),k.morphAttributes.normal!==void 0&&(B=2),k.morphAttributes.color!==void 0&&(B=3);let re,xe,se,V;if(fe){const ht=qn[fe];re=ht.vertexShader,xe=ht.fragmentShader}else re=M.vertexShader,xe=M.fragmentShader,l.update(M),se=l.getVertexShaderID(M),V=l.getFragmentShaderID(M);const Y=n.getRenderTarget(),Me=n.state.buffers.depth.getReversed(),Oe=W.isInstancedMesh===!0,Le=W.isBatchedMesh===!0,tt=!!M.map,xt=!!M.matcap,I=!!Q,ie=!!M.aoMap,ee=!!M.lightMap,j=!!M.bumpMap,Z=!!M.normalMap,ge=!!M.displacementMap,ae=!!M.emissiveMap,_e=!!M.metalnessMap,Ye=!!M.roughnessMap,qe=M.anisotropy>0,b=M.clearcoat>0,x=M.dispersion>0,O=M.iridescence>0,X=M.sheen>0,ne=M.transmission>0,K=qe&&!!M.anisotropyMap,Fe=b&&!!M.clearcoatMap,me=b&&!!M.clearcoatNormalMap,De=b&&!!M.clearcoatRoughnessMap,Ne=O&&!!M.iridescenceMap,le=O&&!!M.iridescenceThicknessMap,be=X&&!!M.sheenColorMap,We=X&&!!M.sheenRoughnessMap,Be=!!M.specularMap,ye=!!M.specularColorMap,Je=!!M.specularIntensityMap,D=ne&&!!M.transmissionMap,pe=ne&&!!M.thicknessMap,ve=!!M.gradientMap,Pe=!!M.alphaMap,ce=M.alphaTest>0,te=!!M.alphaHash,Ue=!!M.extensions;let Ke=Si;M.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ke=n.toneMapping);const Mt={shaderID:fe,shaderType:M.type,shaderName:M.name,vertexShader:re,fragmentShader:xe,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:V,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Le,batchingColor:Le&&W._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&W.instanceColor!==null,instancingMorph:Oe&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Y===null?n.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ps,alphaToCoverage:!!M.alphaToCoverage,map:tt,matcap:xt,envMap:I,envMapMode:I&&Q.mapping,envMapCubeUVHeight:q,aoMap:ie,lightMap:ee,bumpMap:j,normalMap:Z,displacementMap:d&&ge,emissiveMap:ae,normalMapObjectSpace:Z&&M.normalMapType===Ld,normalMapTangentSpace:Z&&M.normalMapType===jh,metalnessMap:_e,roughnessMap:Ye,anisotropy:qe,anisotropyMap:K,clearcoat:b,clearcoatMap:Fe,clearcoatNormalMap:me,clearcoatRoughnessMap:De,dispersion:x,iridescence:O,iridescenceMap:Ne,iridescenceThicknessMap:le,sheen:X,sheenColorMap:be,sheenRoughnessMap:We,specularMap:Be,specularColorMap:ye,specularIntensityMap:Je,transmission:ne,transmissionMap:D,thicknessMap:pe,gradientMap:ve,opaque:M.transparent===!1&&M.blending===Ts&&M.alphaToCoverage===!1,alphaMap:Pe,alphaTest:ce,alphaHash:te,combine:M.combine,mapUv:tt&&v(M.map.channel),aoMapUv:ie&&v(M.aoMap.channel),lightMapUv:ee&&v(M.lightMap.channel),bumpMapUv:j&&v(M.bumpMap.channel),normalMapUv:Z&&v(M.normalMap.channel),displacementMapUv:ge&&v(M.displacementMap.channel),emissiveMapUv:ae&&v(M.emissiveMap.channel),metalnessMapUv:_e&&v(M.metalnessMap.channel),roughnessMapUv:Ye&&v(M.roughnessMap.channel),anisotropyMapUv:K&&v(M.anisotropyMap.channel),clearcoatMapUv:Fe&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:me&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:le&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:be&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:We&&v(M.sheenRoughnessMap.channel),specularMapUv:Be&&v(M.specularMap.channel),specularColorMapUv:ye&&v(M.specularColorMap.channel),specularIntensityMapUv:Je&&v(M.specularIntensityMap.channel),transmissionMapUv:D&&v(M.transmissionMap.channel),thicknessMapUv:pe&&v(M.thicknessMap.channel),alphaMapUv:Pe&&v(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Z||qe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!k.attributes.uv&&(tt||Pe),fog:!!J,useFog:M.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Me,skinning:W.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:B,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,decodeVideoTexture:tt&&M.map.isVideoTexture===!0&&rt.getTransfer(M.map.colorSpace)===pt,decodeVideoTextureEmissive:ae&&M.emissiveMap.isVideoTexture===!0&&rt.getTransfer(M.emissiveMap.colorSpace)===pt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ci,flipSided:M.side===gn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ue&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&M.extensions.multiDraw===!0||Le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Mt.vertexUv1s=h.has(1),Mt.vertexUv2s=h.has(2),Mt.vertexUv3s=h.has(3),h.clear(),Mt}function f(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)S.push(L),S.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(T(S,M),E(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function T(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function E(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){const S=g[M.type];let L;if(S){const F=qn[S];L=pr.clone(F.uniforms)}else L=M.uniforms;return L}function R(M,S){let L;for(let F=0,W=c.length;F<W;F++){const J=c[F];if(J.cacheKey===S){L=J,++L.usedTimes;break}}return L===void 0&&(L=new L_(n,S,M,r),c.push(L)),L}function A(M){if(--M.usedTimes===0){const S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function w(M){l.remove(M)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:R,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:P}}function F_(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function B_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function gh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function _h(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,p,g,v,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),e++,f}function a(u,d,p,g,v,m){const f=o(u,d,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,d,p,g,v,m){const f=o(u,d,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function h(u,d){t.length>1&&t.sort(u||B_),i.length>1&&i.sort(d||gh),s.length>1&&s.sort(d||gh)}function c(){for(let u=e,d=n.length;u<d;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:c,sort:h}}function k_(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new _h,n.set(i,[o])):s>=r.length?(o=new _h,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function z_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new $e};break;case"SpotLight":t={position:new C,direction:new C,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function H_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let G_=0;function V_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function W_(n){const e=new z_,t=H_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new C);const s=new C,r=new Tt,o=new Tt;function a(h){let c=0,u=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,T=0,E=0,_=0,R=0,A=0,w=0;h.sort(V_);for(let M=0,S=h.length;M<S;M++){const L=h[M],F=L.color,W=L.intensity,J=L.distance,k=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=F.r*W,u+=F.g*W,d+=F.b*W;else if(L.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(L.sh.coefficients[$],W);w++}else if(L.isDirectionalLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,q=t.get(L);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=L.shadow.matrix,T++}i.directional[p]=$,p++}else if(L.isSpotLight){const $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(F).multiplyScalar(W),$.distance=J,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,i.spot[v]=$;const Q=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,Q.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[v]=Q.matrix,L.castShadow){const q=t.get(L);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,i.spotShadow[v]=q,i.spotShadowMap[v]=k,_++}v++}else if(L.isRectAreaLight){const $=e.get(L);$.color.copy(F).multiplyScalar(W),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=$,m++}else if(L.isPointLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){const Q=L.shadow,q=t.get(L);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,q.shadowCameraNear=Q.camera.near,q.shadowCameraFar=Q.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=L.shadow.matrix,E++}i.point[g]=$,g++}else if(L.isHemisphereLight){const $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(W),$.groundColor.copy(L.groundColor).multiplyScalar(W),i.hemi[f]=$,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==T||P.numPointShadows!==E||P.numSpotShadows!==_||P.numSpotMaps!==R||P.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=_+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,P.directionalLength=p,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=T,P.numPointShadows=E,P.numSpotShadows=_,P.numSpotMaps=R,P.numLightProbes=w,i.version=G_++)}function l(h,c){let u=0,d=0,p=0,g=0,v=0;const m=c.matrixWorldInverse;for(let f=0,T=h.length;f<T;f++){const E=h[f];if(E.isDirectionalLight){const _=i.directional[u];_.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(E.isSpotLight){const _=i.spot[p];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(E.width*.5,0,0),_.halfHeight.set(0,E.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const _=i.point[d];_.position.setFromMatrixPosition(E.matrixWorld),_.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(E.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function vh(n){const e=new W_(n),t=[],i=[];function s(c){h.camera=c,t.length=0,i.length=0}function r(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function X_(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new vh(n),e.set(s,[a])):r>=o.length?(a=new vh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y_=`uniform sampler2D shadow_pass;
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
}`;function K_(n,e,t){let i=new Bl;const s=new he,r=new he,o=new _t,a=new gp({depthPacking:Id}),l=new _p,h={},c=t.maxTextureSize,u={[Ti]:gn,[gn]:Ti,[ci]:ci},d=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:q_,fragmentShader:Y_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new un;g.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ct(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nh;let f=this.type;this.render=function(A,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ui),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const W=f!==ai&&this.type===ai,J=f===ai&&this.type!==ai;for(let k=0,$=A.length;k<$;k++){const Q=A[k],q=Q.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const fe=q.getFrameExtents();if(s.multiply(fe),r.copy(q.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/fe.x),s.x=r.x*fe.x,q.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/fe.y),s.y=r.y*fe.y,q.mapSize.y=r.y)),q.map===null||W===!0||J===!0){const we=this.type!==ai?{minFilter:zn,magFilter:zn}:{};q.map!==null&&q.map.dispose(),q.map=new Hn(s.x,s.y,we),q.map.texture.name=Q.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const Ee=q.getViewportCount();for(let we=0;we<Ee;we++){const B=q.getViewport(we);o.set(r.x*B.x,r.y*B.y,r.x*B.z,r.y*B.w),F.viewport(o),q.updateMatrices(Q,we),i=q.getFrustum(),_(w,P,q.camera,Q,this.type)}q.isPointLightShadow!==!0&&this.type===ai&&T(q,P),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,L)};function T(A,w){const P=e.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Hn(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,P,d,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,P,p,v,null)}function E(A,w,P,M){let S=null;const L=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)S=L;else if(S=P.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const F=S.uuid,W=w.uuid;let J=h[F];J===void 0&&(J={},h[F]=J);let k=J[W];k===void 0&&(k=S.clone(),J[W]=k,w.addEventListener("dispose",R)),S=k}if(S.visible=w.visible,S.wireframe=w.wireframe,M===ai?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:u[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=n.properties.get(S);F.light=P}return S}function _(A,w,P,M,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===ai)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const W=e.update(A),J=A.material;if(Array.isArray(J)){const k=W.groups;for(let $=0,Q=k.length;$<Q;$++){const q=k[$],fe=J[q.materialIndex];if(fe&&fe.visible){const Ee=E(A,fe,M,S);A.onBeforeShadow(n,A,w,P,W,Ee,q),n.renderBufferDirect(P,null,W,Ee,A,q),A.onAfterShadow(n,A,w,P,W,Ee,q)}}}else if(J.visible){const k=E(A,J,M,S);A.onBeforeShadow(n,A,w,P,W,k,null),n.renderBufferDirect(P,null,W,k,A,null),A.onAfterShadow(n,A,w,P,W,k,null)}}const F=A.children;for(let W=0,J=F.length;W<J;W++)_(F[W],w,P,M,S)}function R(A){A.target.removeEventListener("dispose",R);for(const P in h){const M=h[P],S=A.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const $_={[Ca]:Pa,[Ia]:Na,[La]:Ua,[ws]:Da,[Pa]:Ca,[Na]:Ia,[Ua]:La,[Da]:ws};function J_(n,e){function t(){let D=!1;const pe=new _t;let ve=null;const Pe=new _t(0,0,0,0);return{setMask:function(ce){ve!==ce&&!D&&(n.colorMask(ce,ce,ce,ce),ve=ce)},setLocked:function(ce){D=ce},setClear:function(ce,te,Ue,Ke,Mt){Mt===!0&&(ce*=Ke,te*=Ke,Ue*=Ke),pe.set(ce,te,Ue,Ke),Pe.equals(pe)===!1&&(n.clearColor(ce,te,Ue,Ke),Pe.copy(pe))},reset:function(){D=!1,ve=null,Pe.set(-1,0,0,0)}}}function i(){let D=!1,pe=!1,ve=null,Pe=null,ce=null;return{setReversed:function(te){if(pe!==te){const Ue=e.get("EXT_clip_control");te?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),pe=te;const Ke=ce;ce=null,this.setClear(Ke)}},getReversed:function(){return pe},setTest:function(te){te?Y(n.DEPTH_TEST):Me(n.DEPTH_TEST)},setMask:function(te){ve!==te&&!D&&(n.depthMask(te),ve=te)},setFunc:function(te){if(pe&&(te=$_[te]),Pe!==te){switch(te){case Ca:n.depthFunc(n.NEVER);break;case Pa:n.depthFunc(n.ALWAYS);break;case Ia:n.depthFunc(n.LESS);break;case ws:n.depthFunc(n.LEQUAL);break;case La:n.depthFunc(n.EQUAL);break;case Da:n.depthFunc(n.GEQUAL);break;case Na:n.depthFunc(n.GREATER);break;case Ua:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=te}},setLocked:function(te){D=te},setClear:function(te){ce!==te&&(pe&&(te=1-te),n.clearDepth(te),ce=te)},reset:function(){D=!1,ve=null,Pe=null,ce=null,pe=!1}}}function s(){let D=!1,pe=null,ve=null,Pe=null,ce=null,te=null,Ue=null,Ke=null,Mt=null;return{setTest:function(ht){D||(ht?Y(n.STENCIL_TEST):Me(n.STENCIL_TEST))},setMask:function(ht){pe!==ht&&!D&&(n.stencilMask(ht),pe=ht)},setFunc:function(ht,ti,Wn){(ve!==ht||Pe!==ti||ce!==Wn)&&(n.stencilFunc(ht,ti,Wn),ve=ht,Pe=ti,ce=Wn)},setOp:function(ht,ti,Wn){(te!==ht||Ue!==ti||Ke!==Wn)&&(n.stencilOp(ht,ti,Wn),te=ht,Ue=ti,Ke=Wn)},setLocked:function(ht){D=ht},setClear:function(ht){Mt!==ht&&(n.clearStencil(ht),Mt=ht)},reset:function(){D=!1,pe=null,ve=null,Pe=null,ce=null,te=null,Ue=null,Ke=null,Mt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,h=new WeakMap;let c={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,T=null,E=null,_=null,R=null,A=null,w=new $e(0,0,0),P=0,M=!1,S=null,L=null,F=null,W=null,J=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Q=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),$=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),$=Q>=2);let fe=null,Ee={};const we=n.getParameter(n.SCISSOR_BOX),B=n.getParameter(n.VIEWPORT),re=new _t().fromArray(we),xe=new _t().fromArray(B);function se(D,pe,ve,Pe){const ce=new Uint8Array(4),te=n.createTexture();n.bindTexture(D,te),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<ve;Ue++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(pe+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return te}const V={};V[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),V[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),V[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(n.DEPTH_TEST),o.setFunc(ws),j(!1),Z(hc),Y(n.CULL_FACE),ie(ui);function Y(D){c[D]!==!0&&(n.enable(D),c[D]=!0)}function Me(D){c[D]!==!1&&(n.disable(D),c[D]=!1)}function Oe(D,pe){return u[D]!==pe?(n.bindFramebuffer(D,pe),u[D]=pe,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=pe),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function Le(D,pe){let ve=p,Pe=!1;if(D){ve=d.get(pe),ve===void 0&&(ve=[],d.set(pe,ve));const ce=D.textures;if(ve.length!==ce.length||ve[0]!==n.COLOR_ATTACHMENT0){for(let te=0,Ue=ce.length;te<Ue;te++)ve[te]=n.COLOR_ATTACHMENT0+te;ve.length=ce.length,Pe=!0}}else ve[0]!==n.BACK&&(ve[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(ve)}function tt(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const xt={[Bi]:n.FUNC_ADD,[hd]:n.FUNC_SUBTRACT,[ud]:n.FUNC_REVERSE_SUBTRACT};xt[dd]=n.MIN,xt[fd]=n.MAX;const I={[pd]:n.ZERO,[md]:n.ONE,[gd]:n.SRC_COLOR,[wa]:n.SRC_ALPHA,[Ed]:n.SRC_ALPHA_SATURATE,[Md]:n.DST_COLOR,[vd]:n.DST_ALPHA,[_d]:n.ONE_MINUS_SRC_COLOR,[Ra]:n.ONE_MINUS_SRC_ALPHA,[Sd]:n.ONE_MINUS_DST_COLOR,[xd]:n.ONE_MINUS_DST_ALPHA,[yd]:n.CONSTANT_COLOR,[Td]:n.ONE_MINUS_CONSTANT_COLOR,[bd]:n.CONSTANT_ALPHA,[Ad]:n.ONE_MINUS_CONSTANT_ALPHA};function ie(D,pe,ve,Pe,ce,te,Ue,Ke,Mt,ht){if(D===ui){v===!0&&(Me(n.BLEND),v=!1);return}if(v===!1&&(Y(n.BLEND),v=!0),D!==cd){if(D!==m||ht!==M){if((f!==Bi||_!==Bi)&&(n.blendEquation(n.FUNC_ADD),f=Bi,_=Bi),ht)switch(D){case Ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case co:n.blendFunc(n.ONE,n.ONE);break;case uc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case co:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case uc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,E=null,R=null,A=null,w.set(0,0,0),P=0,m=D,M=ht}return}ce=ce||pe,te=te||ve,Ue=Ue||Pe,(pe!==f||ce!==_)&&(n.blendEquationSeparate(xt[pe],xt[ce]),f=pe,_=ce),(ve!==T||Pe!==E||te!==R||Ue!==A)&&(n.blendFuncSeparate(I[ve],I[Pe],I[te],I[Ue]),T=ve,E=Pe,R=te,A=Ue),(Ke.equals(w)===!1||Mt!==P)&&(n.blendColor(Ke.r,Ke.g,Ke.b,Mt),w.copy(Ke),P=Mt),m=D,M=!1}function ee(D,pe){D.side===ci?Me(n.CULL_FACE):Y(n.CULL_FACE);let ve=D.side===gn;pe&&(ve=!ve),j(ve),D.blending===Ts&&D.transparent===!1?ie(ui):ie(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const Pe=D.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ae(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Y(n.SAMPLE_ALPHA_TO_COVERAGE):Me(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(D){S!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),S=D)}function Z(D){D!==ad?(Y(n.CULL_FACE),D!==L&&(D===hc?n.cullFace(n.BACK):D===ld?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Me(n.CULL_FACE),L=D}function ge(D){D!==F&&($&&n.lineWidth(D),F=D)}function ae(D,pe,ve){D?(Y(n.POLYGON_OFFSET_FILL),(W!==pe||J!==ve)&&(n.polygonOffset(pe,ve),W=pe,J=ve)):Me(n.POLYGON_OFFSET_FILL)}function _e(D){D?Y(n.SCISSOR_TEST):Me(n.SCISSOR_TEST)}function Ye(D){D===void 0&&(D=n.TEXTURE0+k-1),fe!==D&&(n.activeTexture(D),fe=D)}function qe(D,pe,ve){ve===void 0&&(fe===null?ve=n.TEXTURE0+k-1:ve=fe);let Pe=Ee[ve];Pe===void 0&&(Pe={type:void 0,texture:void 0},Ee[ve]=Pe),(Pe.type!==D||Pe.texture!==pe)&&(fe!==ve&&(n.activeTexture(ve),fe=ve),n.bindTexture(D,pe||V[D]),Pe.type=D,Pe.texture=pe)}function b(){const D=Ee[fe];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{n.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{n.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(){try{n.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{n.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{n.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{n.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{n.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(D){re.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),re.copy(D))}function We(D){xe.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),xe.copy(D))}function Be(D,pe){let ve=h.get(pe);ve===void 0&&(ve=new WeakMap,h.set(pe,ve));let Pe=ve.get(D);Pe===void 0&&(Pe=n.getUniformBlockIndex(pe,D.name),ve.set(D,Pe))}function ye(D,pe){const Pe=h.get(pe).get(D);l.get(pe)!==Pe&&(n.uniformBlockBinding(pe,Pe,D.__bindingPointIndex),l.set(pe,Pe))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},fe=null,Ee={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,T=null,E=null,_=null,R=null,A=null,w=new $e(0,0,0),P=0,M=!1,S=null,L=null,F=null,W=null,J=null,re.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Y,disable:Me,bindFramebuffer:Oe,drawBuffers:Le,useProgram:tt,setBlending:ie,setMaterial:ee,setFlipSided:j,setCullFace:Z,setLineWidth:ge,setPolygonOffset:ae,setScissorTest:_e,activeTexture:Ye,bindTexture:qe,unbindTexture:b,compressedTexImage2D:x,compressedTexImage3D:O,texImage2D:Ne,texImage3D:le,updateUBOMapping:Be,uniformBlockBinding:ye,texStorage2D:me,texStorage3D:De,texSubImage2D:X,texSubImage3D:ne,compressedTexSubImage2D:K,compressedTexSubImage3D:Fe,scissor:be,viewport:We,reset:Je}}function Z_(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new he,c=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return p?new OffscreenCanvas(b,x):po("canvas")}function v(b,x,O){let X=1;const ne=qe(b);if((ne.width>O||ne.height>O)&&(X=O/Math.max(ne.width,ne.height)),X<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const K=Math.floor(X*ne.width),Fe=Math.floor(X*ne.height);u===void 0&&(u=g(K,Fe));const me=x?g(K,Fe):u;return me.width=K,me.height=Fe,me.getContext("2d").drawImage(b,0,0,K,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+K+"x"+Fe+")."),me}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){n.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(b,x,O,X,ne=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let K=x;if(x===n.RED&&(O===n.FLOAT&&(K=n.R32F),O===n.HALF_FLOAT&&(K=n.R16F),O===n.UNSIGNED_BYTE&&(K=n.R8)),x===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.R8UI),O===n.UNSIGNED_SHORT&&(K=n.R16UI),O===n.UNSIGNED_INT&&(K=n.R32UI),O===n.BYTE&&(K=n.R8I),O===n.SHORT&&(K=n.R16I),O===n.INT&&(K=n.R32I)),x===n.RG&&(O===n.FLOAT&&(K=n.RG32F),O===n.HALF_FLOAT&&(K=n.RG16F),O===n.UNSIGNED_BYTE&&(K=n.RG8)),x===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RG8UI),O===n.UNSIGNED_SHORT&&(K=n.RG16UI),O===n.UNSIGNED_INT&&(K=n.RG32UI),O===n.BYTE&&(K=n.RG8I),O===n.SHORT&&(K=n.RG16I),O===n.INT&&(K=n.RG32I)),x===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RGB8UI),O===n.UNSIGNED_SHORT&&(K=n.RGB16UI),O===n.UNSIGNED_INT&&(K=n.RGB32UI),O===n.BYTE&&(K=n.RGB8I),O===n.SHORT&&(K=n.RGB16I),O===n.INT&&(K=n.RGB32I)),x===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),O===n.UNSIGNED_INT&&(K=n.RGBA32UI),O===n.BYTE&&(K=n.RGBA8I),O===n.SHORT&&(K=n.RGBA16I),O===n.INT&&(K=n.RGBA32I)),x===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),x===n.RGBA){const Fe=ne?uo:rt.getTransfer(X);O===n.FLOAT&&(K=n.RGBA32F),O===n.HALF_FLOAT&&(K=n.RGBA16F),O===n.UNSIGNED_BYTE&&(K=Fe===pt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function _(b,x){let O;return b?x===null||x===Gi||x===hr?O=n.DEPTH24_STENCIL8:x===hi?O=n.DEPTH32F_STENCIL8:x===cr&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Gi||x===hr?O=n.DEPTH_COMPONENT24:x===hi?O=n.DEPTH_COMPONENT32F:x===cr&&(O=n.DEPTH_COMPONENT16),O}function R(b,x){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==zn&&b.minFilter!==Kn?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function A(b){const x=b.target;x.removeEventListener("dispose",A),P(x),x.isVideoTexture&&c.delete(x)}function w(b){const x=b.target;x.removeEventListener("dispose",w),S(x)}function P(b){const x=i.get(b);if(x.__webglInit===void 0)return;const O=b.source,X=d.get(O);if(X){const ne=X[x.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(b),Object.keys(X).length===0&&d.delete(O)}i.remove(b)}function M(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const O=b.source,X=d.get(O);delete X[x.__cacheKey],o.memory.textures--}function S(b){const x=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let ne=0;ne<x.__webglFramebuffer[X].length;ne++)n.deleteFramebuffer(x.__webglFramebuffer[X][ne]);else n.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)n.deleteFramebuffer(x.__webglFramebuffer[X]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=b.textures;for(let X=0,ne=O.length;X<ne;X++){const K=i.get(O[X]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(O[X])}i.remove(b)}let L=0;function F(){L=0}function W(){const b=L;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),L+=1,b}function J(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function k(b,x){const O=i.get(b);if(b.isVideoTexture&&_e(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){const X=b.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(O,b,x);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+x)}function $(b,x){const O=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){V(O,b,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+x)}function Q(b,x){const O=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){V(O,b,x);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+x)}function q(b,x){const O=i.get(b);if(b.version>0&&O.__version!==b.version){Y(O,b,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+x)}const fe={[ho]:n.REPEAT,[zi]:n.CLAMP_TO_EDGE,[Ba]:n.MIRRORED_REPEAT},Ee={[zn]:n.NEAREST,[Cd]:n.NEAREST_MIPMAP_NEAREST,[wr]:n.NEAREST_MIPMAP_LINEAR,[Kn]:n.LINEAR,[ko]:n.LINEAR_MIPMAP_NEAREST,[Hi]:n.LINEAR_MIPMAP_LINEAR},we={[Dd]:n.NEVER,[kd]:n.ALWAYS,[Nd]:n.LESS,[Qh]:n.LEQUAL,[Ud]:n.EQUAL,[Bd]:n.GEQUAL,[Od]:n.GREATER,[Fd]:n.NOTEQUAL};function B(b,x){if(x.type===hi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Kn||x.magFilter===ko||x.magFilter===wr||x.magFilter===Hi||x.minFilter===Kn||x.minFilter===ko||x.minFilter===wr||x.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,fe[x.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,fe[x.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,fe[x.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,Ee[x.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,Ee[x.minFilter]),x.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,we[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===zn||x.minFilter!==wr&&x.minFilter!==Hi||x.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function re(b,x){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",A));const X=x.source;let ne=d.get(X);ne===void 0&&(ne={},d.set(X,ne));const K=J(x);if(K!==b.__cacheKey){ne[K]===void 0&&(ne[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ne[K].usedTimes++;const Fe=ne[b.__cacheKey];Fe!==void 0&&(ne[b.__cacheKey].usedTimes--,Fe.usedTimes===0&&M(x)),b.__cacheKey=K,b.__webglTexture=ne[K].texture}return O}function xe(b,x,O){return Math.floor(Math.floor(b/O)/x)}function se(b,x,O,X){const K=b.updateRanges;if(K.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,O,X,x.data);else{K.sort((le,be)=>le.start-be.start);let Fe=0;for(let le=1;le<K.length;le++){const be=K[Fe],We=K[le],Be=be.start+be.count,ye=xe(We.start,x.width,4),Je=xe(be.start,x.width,4);We.start<=Be+1&&ye===Je&&xe(We.start+We.count-1,x.width,4)===ye?be.count=Math.max(be.count,We.start+We.count-be.start):(++Fe,K[Fe]=We)}K.length=Fe+1;const me=n.getParameter(n.UNPACK_ROW_LENGTH),De=n.getParameter(n.UNPACK_SKIP_PIXELS),Ne=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let le=0,be=K.length;le<be;le++){const We=K[le],Be=Math.floor(We.start/4),ye=Math.ceil(We.count/4),Je=Be%x.width,D=Math.floor(Be/x.width),pe=ye,ve=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Je),n.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,Je,D,pe,ve,O,X,x.data)}b.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,me),n.pixelStorei(n.UNPACK_SKIP_PIXELS,De),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ne)}}function V(b,x,O){let X=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=n.TEXTURE_3D);const ne=re(b,x),K=x.source;t.bindTexture(X,b.__webglTexture,n.TEXTURE0+O);const Fe=i.get(K);if(K.version!==Fe.__version||ne===!0){t.activeTexture(n.TEXTURE0+O);const me=rt.getPrimaries(rt.workingColorSpace),De=x.colorSpace===Mi?null:rt.getPrimaries(x.colorSpace),Ne=x.colorSpace===Mi||me===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let le=v(x.image,!1,s.maxTextureSize);le=Ye(x,le);const be=r.convert(x.format,x.colorSpace),We=r.convert(x.type);let Be=E(x.internalFormat,be,We,x.colorSpace,x.isVideoTexture);B(X,x);let ye;const Je=x.mipmaps,D=x.isVideoTexture!==!0,pe=Fe.__version===void 0||ne===!0,ve=K.dataReady,Pe=R(x,le);if(x.isDepthTexture)Be=_(x.format===dr,x.type),pe&&(D?t.texStorage2D(n.TEXTURE_2D,1,Be,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Be,le.width,le.height,0,be,We,null));else if(x.isDataTexture)if(Je.length>0){D&&pe&&t.texStorage2D(n.TEXTURE_2D,Pe,Be,Je[0].width,Je[0].height);for(let ce=0,te=Je.length;ce<te;ce++)ye=Je[ce],D?ve&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,ye.width,ye.height,be,We,ye.data):t.texImage2D(n.TEXTURE_2D,ce,Be,ye.width,ye.height,0,be,We,ye.data);x.generateMipmaps=!1}else D?(pe&&t.texStorage2D(n.TEXTURE_2D,Pe,Be,le.width,le.height),ve&&se(x,le,be,We)):t.texImage2D(n.TEXTURE_2D,0,Be,le.width,le.height,0,be,We,le.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){D&&pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Be,Je[0].width,Je[0].height,le.depth);for(let ce=0,te=Je.length;ce<te;ce++)if(ye=Je[ce],x.format!==Bn)if(be!==null)if(D){if(ve)if(x.layerUpdates.size>0){const Ue=Kc(ye.width,ye.height,x.format,x.type);for(const Ke of x.layerUpdates){const Mt=ye.data.subarray(Ke*Ue/ye.data.BYTES_PER_ELEMENT,(Ke+1)*Ue/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,Ke,ye.width,ye.height,1,be,Mt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,ye.width,ye.height,le.depth,be,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,Be,ye.width,ye.height,le.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ve&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,ye.width,ye.height,le.depth,be,We,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,Be,ye.width,ye.height,le.depth,0,be,We,ye.data)}else{D&&pe&&t.texStorage2D(n.TEXTURE_2D,Pe,Be,Je[0].width,Je[0].height);for(let ce=0,te=Je.length;ce<te;ce++)ye=Je[ce],x.format!==Bn?be!==null?D?ve&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,ye.width,ye.height,be,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,Be,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ve&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,ye.width,ye.height,be,We,ye.data):t.texImage2D(n.TEXTURE_2D,ce,Be,ye.width,ye.height,0,be,We,ye.data)}else if(x.isDataArrayTexture)if(D){if(pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,Be,le.width,le.height,le.depth),ve)if(x.layerUpdates.size>0){const ce=Kc(le.width,le.height,x.format,x.type);for(const te of x.layerUpdates){const Ue=le.data.subarray(te*ce/le.data.BYTES_PER_ELEMENT,(te+1)*ce/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,le.width,le.height,1,be,We,Ue)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,be,We,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,le.width,le.height,le.depth,0,be,We,le.data);else if(x.isData3DTexture)D?(pe&&t.texStorage3D(n.TEXTURE_3D,Pe,Be,le.width,le.height,le.depth),ve&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,be,We,le.data)):t.texImage3D(n.TEXTURE_3D,0,Be,le.width,le.height,le.depth,0,be,We,le.data);else if(x.isFramebufferTexture){if(pe)if(D)t.texStorage2D(n.TEXTURE_2D,Pe,Be,le.width,le.height);else{let ce=le.width,te=le.height;for(let Ue=0;Ue<Pe;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,Be,ce,te,0,be,We,null),ce>>=1,te>>=1}}else if(Je.length>0){if(D&&pe){const ce=qe(Je[0]);t.texStorage2D(n.TEXTURE_2D,Pe,Be,ce.width,ce.height)}for(let ce=0,te=Je.length;ce<te;ce++)ye=Je[ce],D?ve&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,be,We,ye):t.texImage2D(n.TEXTURE_2D,ce,Be,be,We,ye);x.generateMipmaps=!1}else if(D){if(pe){const ce=qe(le);t.texStorage2D(n.TEXTURE_2D,Pe,Be,ce.width,ce.height)}ve&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,We,le)}else t.texImage2D(n.TEXTURE_2D,0,Be,be,We,le);m(x)&&f(X),Fe.__version=K.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Y(b,x,O){if(x.image.length!==6)return;const X=re(b,x),ne=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+O);const K=i.get(ne);if(ne.version!==K.__version||X===!0){t.activeTexture(n.TEXTURE0+O);const Fe=rt.getPrimaries(rt.workingColorSpace),me=x.colorSpace===Mi?null:rt.getPrimaries(x.colorSpace),De=x.colorSpace===Mi||Fe===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Ne=x.isCompressedTexture||x.image[0].isCompressedTexture,le=x.image[0]&&x.image[0].isDataTexture,be=[];for(let te=0;te<6;te++)!Ne&&!le?be[te]=v(x.image[te],!0,s.maxCubemapSize):be[te]=le?x.image[te].image:x.image[te],be[te]=Ye(x,be[te]);const We=be[0],Be=r.convert(x.format,x.colorSpace),ye=r.convert(x.type),Je=E(x.internalFormat,Be,ye,x.colorSpace),D=x.isVideoTexture!==!0,pe=K.__version===void 0||X===!0,ve=ne.dataReady;let Pe=R(x,We);B(n.TEXTURE_CUBE_MAP,x);let ce;if(Ne){D&&pe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Je,We.width,We.height);for(let te=0;te<6;te++){ce=be[te].mipmaps;for(let Ue=0;Ue<ce.length;Ue++){const Ke=ce[Ue];x.format!==Bn?Be!==null?D?ve&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue,0,0,Ke.width,Ke.height,Be,Ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue,Je,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue,0,0,Ke.width,Ke.height,Be,ye,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue,Je,Ke.width,Ke.height,0,Be,ye,Ke.data)}}}else{if(ce=x.mipmaps,D&&pe){ce.length>0&&Pe++;const te=qe(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Je,te.width,te.height)}for(let te=0;te<6;te++)if(le){D?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,be[te].width,be[te].height,Be,ye,be[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,be[te].width,be[te].height,0,Be,ye,be[te].data);for(let Ue=0;Ue<ce.length;Ue++){const Mt=ce[Ue].image[te].image;D?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue+1,0,0,Mt.width,Mt.height,Be,ye,Mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue+1,Je,Mt.width,Mt.height,0,Be,ye,Mt.data)}}else{D?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Be,ye,be[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,Be,ye,be[te]);for(let Ue=0;Ue<ce.length;Ue++){const Ke=ce[Ue];D?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue+1,0,0,Be,ye,Ke.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue+1,Je,Be,ye,Ke.image[te])}}}m(x)&&f(n.TEXTURE_CUBE_MAP),K.__version=ne.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Me(b,x,O,X,ne,K){const Fe=r.convert(O.format,O.colorSpace),me=r.convert(O.type),De=E(O.internalFormat,Fe,me,O.colorSpace),Ne=i.get(x),le=i.get(O);if(le.__renderTarget=x,!Ne.__hasExternalTextures){const be=Math.max(1,x.width>>K),We=Math.max(1,x.height>>K);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,K,De,be,We,x.depth,0,Fe,me,null):t.texImage2D(ne,K,De,be,We,0,Fe,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),ae(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,ne,le.__webglTexture,0,ge(x)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,ne,le.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(b,x,O){if(n.bindRenderbuffer(n.RENDERBUFFER,b),x.depthBuffer){const X=x.depthTexture,ne=X&&X.isDepthTexture?X.type:null,K=_(x.stencilBuffer,ne),Fe=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=ge(x);ae(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,K,x.width,x.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,K,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,K,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Fe,n.RENDERBUFFER,b)}else{const X=x.textures;for(let ne=0;ne<X.length;ne++){const K=X[ne],Fe=r.convert(K.format,K.colorSpace),me=r.convert(K.type),De=E(K.internalFormat,Fe,me,K.colorSpace),Ne=ge(x);O&&ae(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,De,x.width,x.height):ae(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,De,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,De,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(x.depthTexture);X.__renderTarget=x,(!X.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),k(x.depthTexture,0);const ne=X.__webglTexture,K=ge(x);if(x.depthTexture.format===ur)ae(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(x.depthTexture.format===dr)ae(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function tt(b){const x=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const X=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const ne=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",ne)};X.addEventListener("dispose",ne),x.__depthDisposeCallback=ne}x.__boundDepthTexture=X}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const X=b.texture.mipmaps;X&&X.length>0?Le(x.__webglFramebuffer[0],b):Le(x.__webglFramebuffer,b)}else if(O){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=n.createRenderbuffer(),Oe(x.__webglDepthbuffer[X],b,!1);else{const ne=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,K)}}else{const X=b.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Oe(x.__webglDepthbuffer,b,!1);else{const ne=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,K)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function xt(b,x,O){const X=i.get(b);x!==void 0&&Me(X.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&tt(b)}function I(b){const x=b.texture,O=i.get(b),X=i.get(x);b.addEventListener("dispose",w);const ne=b.textures,K=b.isWebGLCubeRenderTarget===!0,Fe=ne.length>1;if(Fe||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=x.version,o.memory.textures++),K){O.__webglFramebuffer=[];for(let me=0;me<6;me++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[me]=[];for(let De=0;De<x.mipmaps.length;De++)O.__webglFramebuffer[me][De]=n.createFramebuffer()}else O.__webglFramebuffer[me]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let me=0;me<x.mipmaps.length;me++)O.__webglFramebuffer[me]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Fe)for(let me=0,De=ne.length;me<De;me++){const Ne=i.get(ne[me]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&ae(b)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let me=0;me<ne.length;me++){const De=ne[me];O.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[me]);const Ne=r.convert(De.format,De.colorSpace),le=r.convert(De.type),be=E(De.internalFormat,Ne,le,De.colorSpace,b.isXRRenderTarget===!0),We=ge(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,We,be,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,O.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Oe(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),B(n.TEXTURE_CUBE_MAP,x);for(let me=0;me<6;me++)if(x.mipmaps&&x.mipmaps.length>0)for(let De=0;De<x.mipmaps.length;De++)Me(O.__webglFramebuffer[me][De],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,De);else Me(O.__webglFramebuffer[me],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(x)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let me=0,De=ne.length;me<De;me++){const Ne=ne[me],le=i.get(Ne);let be=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(be=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,le.__webglTexture),B(be,Ne),Me(O.__webglFramebuffer,b,Ne,n.COLOR_ATTACHMENT0+me,be,0),m(Ne)&&f(be)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(me=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,X.__webglTexture),B(me,x),x.mipmaps&&x.mipmaps.length>0)for(let De=0;De<x.mipmaps.length;De++)Me(O.__webglFramebuffer[De],b,x,n.COLOR_ATTACHMENT0,me,De);else Me(O.__webglFramebuffer,b,x,n.COLOR_ATTACHMENT0,me,0);m(x)&&f(me),t.unbindTexture()}b.depthBuffer&&tt(b)}function ie(b){const x=b.textures;for(let O=0,X=x.length;O<X;O++){const ne=x[O];if(m(ne)){const K=T(b),Fe=i.get(ne).__webglTexture;t.bindTexture(K,Fe),f(K),t.unbindTexture()}}}const ee=[],j=[];function Z(b){if(b.samples>0){if(ae(b)===!1){const x=b.textures,O=b.width,X=b.height;let ne=n.COLOR_BUFFER_BIT;const K=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Fe=i.get(b),me=x.length>1;if(me)for(let Ne=0;Ne<x.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const De=b.texture.mipmaps;De&&De.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Ne=0;Ne<x.length;Ne++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ne]);const le=i.get(x[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,O,X,0,0,O,X,ne,n.NEAREST),l===!0&&(ee.length=0,j.length=0,ee.push(n.COLOR_ATTACHMENT0+Ne),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ee.push(K),j.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,j)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let Ne=0;Ne<x.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ne]);const le=i.get(x[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ge(b){return Math.min(s.maxSamples,b.samples)}function ae(b){const x=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function _e(b){const x=o.render.frame;c.get(b)!==x&&(c.set(b,x),b.update())}function Ye(b,x){const O=b.colorSpace,X=b.format,ne=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==Ps&&O!==Mi&&(rt.getTransfer(O)===pt?(X!==Bn||ne!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}function qe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(h.width=b.naturalWidth||b.width,h.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(h.width=b.displayWidth,h.height=b.displayHeight):(h.width=b.width,h.height=b.height),h}this.allocateTextureUnit=W,this.resetTextureUnits=F,this.setTexture2D=k,this.setTexture2DArray=$,this.setTexture3D=Q,this.setTextureCube=q,this.rebindTextures=xt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ae}function j_(n,e){function t(i,s=Mi){let r;const o=rt.getTransfer(s);if(i===Zn)return n.UNSIGNED_BYTE;if(i===Rl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Cl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wh)return n.BYTE;if(i===Xh)return n.SHORT;if(i===cr)return n.UNSIGNED_SHORT;if(i===wl)return n.INT;if(i===Gi)return n.UNSIGNED_INT;if(i===hi)return n.FLOAT;if(i===di)return n.HALF_FLOAT;if(i===Kh)return n.ALPHA;if(i===$h)return n.RGB;if(i===Bn)return n.RGBA;if(i===ur)return n.DEPTH_COMPONENT;if(i===dr)return n.DEPTH_STENCIL;if(i===Jh)return n.RED;if(i===Pl)return n.RED_INTEGER;if(i===Zh)return n.RG;if(i===Il)return n.RG_INTEGER;if(i===Ll)return n.RGBA_INTEGER;if(i===eo||i===to||i===no||i===io)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===to)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===no)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ka||i===za||i===Ha||i===Ga)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ha)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Va||i===Wa||i===Xa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Va||i===Wa)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Xa)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qa||i===Ya||i===Ka||i===$a||i===Ja||i===Za||i===ja||i===Qa||i===el||i===tl||i===nl||i===il||i===sl||i===rl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===qa)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ya)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ka)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$a)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ja)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Za)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ja)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qa)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===el)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===il)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ol||i===al||i===ll)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ol)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cl||i===hl||i===ul||i===dl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===cl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ul)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Q_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ev=`
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

}`;class tv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new hu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new cn({vertexShader:Q_,fragmentShader:ev,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ct(new zs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nv extends Os{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,h=null,c=null,u=null,d=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new tv,f={},T=t.getContextAttributes();let E=null,_=null;const R=[],A=[],w=new he;let P=null;const M=new pn;M.viewport=new _t;const S=new pn;S.viewport=new _t;const L=[M,S],F=new Ep;let W=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Y=R[V];return Y===void 0&&(Y=new oa,R[V]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(V){let Y=R[V];return Y===void 0&&(Y=new oa,R[V]=Y),Y.getGripSpace()},this.getHand=function(V){let Y=R[V];return Y===void 0&&(Y=new oa,R[V]=Y),Y.getHandSpace()};function k(V){const Y=A.indexOf(V.inputSource);if(Y===-1)return;const Me=R[Y];Me!==void 0&&(Me.update(V.inputSource,V.frame,h||o),Me.dispatchEvent({type:V.type,data:V.inputSource}))}function $(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",Q);for(let V=0;V<R.length;V++){const Y=A[V];Y!==null&&(A[V]=null,R[V].disconnect(Y))}W=null,J=null,m.reset();for(const V in f)delete f[V];e.setRenderTarget(E),p=null,d=null,u=null,s=null,_=null,se.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(V){h=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",$),s.addEventListener("inputsourceschange",Q),T.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Oe=null,Le=null;T.depth&&(Le=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=T.stencil?dr:ur,Oe=T.stencil?hr:Gi);const tt={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(tt),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Hn(d.textureWidth,d.textureHeight,{format:Bn,type:Zn,depthTexture:new cu(d.textureWidth,d.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Me={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Hn(p.framebufferWidth,p.framebufferHeight,{format:Bn,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),se.setContext(s),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(V){for(let Y=0;Y<V.removed.length;Y++){const Me=V.removed[Y],Oe=A.indexOf(Me);Oe>=0&&(A[Oe]=null,R[Oe].disconnect(Me))}for(let Y=0;Y<V.added.length;Y++){const Me=V.added[Y];let Oe=A.indexOf(Me);if(Oe===-1){for(let tt=0;tt<R.length;tt++)if(tt>=A.length){A.push(Me),Oe=tt;break}else if(A[tt]===null){A[tt]=Me,Oe=tt;break}if(Oe===-1)break}const Le=R[Oe];Le&&Le.connect(Me)}}const q=new C,fe=new C;function Ee(V,Y,Me){q.setFromMatrixPosition(Y.matrixWorld),fe.setFromMatrixPosition(Me.matrixWorld);const Oe=q.distanceTo(fe),Le=Y.projectionMatrix.elements,tt=Me.projectionMatrix.elements,xt=Le[14]/(Le[10]-1),I=Le[14]/(Le[10]+1),ie=(Le[9]+1)/Le[5],ee=(Le[9]-1)/Le[5],j=(Le[8]-1)/Le[0],Z=(tt[8]+1)/tt[0],ge=xt*j,ae=xt*Z,_e=Oe/(-j+Z),Ye=_e*-j;if(Y.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ye),V.translateZ(_e),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Le[10]===-1)V.projectionMatrix.copy(Y.projectionMatrix),V.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const qe=xt+_e,b=I+_e,x=ge-Ye,O=ae+(Oe-Ye),X=ie*I/b*qe,ne=ee*I/b*qe;V.projectionMatrix.makePerspective(x,O,X,ne,qe,b),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function we(V,Y){Y===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Y.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let Y=V.near,Me=V.far;m.texture!==null&&(m.depthNear>0&&(Y=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),F.near=S.near=M.near=Y,F.far=S.far=M.far=Me,(W!==F.near||J!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),W=F.near,J=F.far),F.layers.mask=V.layers.mask|6,M.layers.mask=F.layers.mask&3,S.layers.mask=F.layers.mask&5;const Oe=V.parent,Le=F.cameras;we(F,Oe);for(let tt=0;tt<Le.length;tt++)we(Le[tt],Oe);Le.length===2?Ee(F,M,S):F.projectionMatrix.copy(M.projectionMatrix),B(V,F,Oe)};function B(V,Y,Me){Me===null?V.matrix.copy(Y.matrixWorld):(V.matrix.copy(Me.matrixWorld),V.matrix.invert(),V.matrix.multiply(Y.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Y.projectionMatrix),V.projectionMatrixInverse.copy(Y.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Is*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(V){return f[V]};let re=null;function xe(V,Y){if(c=Y.getViewerPose(h||o),g=Y,c!==null){const Me=c.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let Oe=!1;Me.length!==F.cameras.length&&(F.cameras.length=0,Oe=!0);for(let I=0;I<Me.length;I++){const ie=Me[I];let ee=null;if(p!==null)ee=p.getViewport(ie);else{const Z=u.getViewSubImage(d,ie);ee=Z.viewport,I===0&&(e.setRenderTargetTextures(_,Z.colorTexture,Z.depthStencilTexture),e.setRenderTarget(_))}let j=L[I];j===void 0&&(j=new pn,j.layers.enable(I),j.viewport=new _t,L[I]=j),j.matrix.fromArray(ie.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(ie.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(ee.x,ee.y,ee.width,ee.height),I===0&&(F.matrix.copy(j.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Oe===!0&&F.cameras.push(j)}const Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();const I=u.getDepthInformation(Me[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(Le&&Le.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let I=0;I<Me.length;I++){const ie=Me[I].camera;if(ie){let ee=f[ie];ee||(ee=new hu,f[ie]=ee);const j=u.getCameraImage(ie);ee.sourceTexture=j}}}}for(let Me=0;Me<R.length;Me++){const Oe=A[Me],Le=R[Me];Oe!==null&&Le!==void 0&&Le.update(Oe,Y,h||o)}re&&re(V,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}const se=new yu;se.setAnimationLoop(xe),this.setAnimationLoop=function(V){re=V},this.dispose=function(){}}}const Ui=new Dn,iv=new Tt;function sv(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,ru(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,T,E,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),c(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,T,E):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===gn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===gn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=e.get(f),E=T.envMap,_=T.envMapRotation;E&&(m.envMap.value=E,Ui.copy(_),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(iv.makeRotationFromEuler(Ui)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,T,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=E*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===gn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function rv(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const _=E.program;i.uniformBlockBinding(T,_)}function h(T,E){let _=s[T.id];_===void 0&&(g(T),_=c(T),s[T.id]=_,T.addEventListener("dispose",m));const R=E.program;i.updateUBOMapping(T,R);const A=e.render.frame;r[T.id]!==A&&(d(T),r[T.id]=A)}function c(T){const E=u();T.__bindingPointIndex=E;const _=n.createBuffer(),R=T.__size,A=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,R,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,_),_}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const E=s[T.id],_=T.uniforms,R=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let A=0,w=_.length;A<w;A++){const P=Array.isArray(_[A])?_[A]:[_[A]];for(let M=0,S=P.length;M<S;M++){const L=P[M];if(p(L,A,M,R)===!0){const F=L.__offset,W=Array.isArray(L.value)?L.value:[L.value];let J=0;for(let k=0;k<W.length;k++){const $=W[k],Q=v($);typeof $=="number"||typeof $=="boolean"?(L.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,F+J,L.__data)):$.isMatrix3?(L.__data[0]=$.elements[0],L.__data[1]=$.elements[1],L.__data[2]=$.elements[2],L.__data[3]=0,L.__data[4]=$.elements[3],L.__data[5]=$.elements[4],L.__data[6]=$.elements[5],L.__data[7]=0,L.__data[8]=$.elements[6],L.__data[9]=$.elements[7],L.__data[10]=$.elements[8],L.__data[11]=0):($.toArray(L.__data,J),J+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,E,_,R){const A=T.value,w=E+"_"+_;if(R[w]===void 0)return typeof A=="number"||typeof A=="boolean"?R[w]=A:R[w]=A.clone(),!0;{const P=R[w];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return R[w]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(T){const E=T.uniforms;let _=0;const R=16;for(let w=0,P=E.length;w<P;w++){const M=Array.isArray(E[w])?E[w]:[E[w]];for(let S=0,L=M.length;S<L;S++){const F=M[S],W=Array.isArray(F.value)?F.value:[F.value];for(let J=0,k=W.length;J<k;J++){const $=W[J],Q=v($),q=_%R,fe=q%Q.boundary,Ee=q+fe;_+=fe,Ee!==0&&R-Ee<Q.storage&&(_+=R-Ee),F.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=Q.storage}}}const A=_%R;return A>0&&(_+=R-A),T.__size=_,T.__cache={},this}function v(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const _=o.indexOf(E.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(const T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:h,dispose:f}}class ov{constructor(e={}){const{canvas:t=nf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let R=!1;this._outputColorSpace=yn;let A=0,w=0,P=null,M=-1,S=null;const L=new _t,F=new _t;let W=null;const J=new $e(0);let k=0,$=t.width,Q=t.height,q=1,fe=null,Ee=null;const we=new _t(0,0,$,Q),B=new _t(0,0,$,Q);let re=!1;const xe=new Bl;let se=!1,V=!1;const Y=new Tt,Me=new C,Oe=new _t,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function xt(){return P===null?q:1}let I=i;function ie(y,N){return t.getContext(y,N)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bl}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",ce,!1),I===null){const N="webgl2";if(I=ie(N,y),I===null)throw ie(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ee,j,Z,ge,ae,_e,Ye,qe,b,x,O,X,ne,K,Fe,me,De,Ne,le,be,We,Be,ye,Je;function D(){ee=new gg(I),ee.init(),Be=new j_(I,ee),j=new cg(I,ee,e,Be),Z=new J_(I,ee),j.reversedDepthBuffer&&d&&Z.buffers.depth.setReversed(!0),ge=new xg(I),ae=new F_,_e=new Z_(I,ee,Z,ae,j,Be,ge),Ye=new ug(_),qe=new mg(_),b=new bp(I),ye=new ag(I,b),x=new _g(I,b,ge,ye),O=new Sg(I,x,b,ge),le=new Mg(I,j,_e),me=new hg(ae),X=new O_(_,Ye,qe,ee,j,ye,me),ne=new sv(_,ae),K=new k_,Fe=new X_(ee),Ne=new og(_,Ye,qe,Z,O,p,l),De=new K_(_,O,j),Je=new rv(I,ge,j,Z),be=new lg(I,ee,ge),We=new vg(I,ee,ge),ge.programs=X.programs,_.capabilities=j,_.extensions=ee,_.properties=ae,_.renderLists=K,_.shadowMap=De,_.state=Z,_.info=ge}D();const pe=new nv(_,I);this.xr=pe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const y=ee.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ee.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(y){y!==void 0&&(q=y,this.setSize($,Q,!1))},this.getSize=function(y){return y.set($,Q)},this.setSize=function(y,N,H=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=y,Q=N,t.width=Math.floor(y*q),t.height=Math.floor(N*q),H===!0&&(t.style.width=y+"px",t.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set($*q,Q*q).floor()},this.setDrawingBufferSize=function(y,N,H){$=y,Q=N,q=H,t.width=Math.floor(y*H),t.height=Math.floor(N*H),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(L)},this.getViewport=function(y){return y.copy(we)},this.setViewport=function(y,N,H,G){y.isVector4?we.set(y.x,y.y,y.z,y.w):we.set(y,N,H,G),Z.viewport(L.copy(we).multiplyScalar(q).round())},this.getScissor=function(y){return y.copy(B)},this.setScissor=function(y,N,H,G){y.isVector4?B.set(y.x,y.y,y.z,y.w):B.set(y,N,H,G),Z.scissor(F.copy(B).multiplyScalar(q).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(y){Z.setScissorTest(re=y)},this.setOpaqueSort=function(y){fe=y},this.setTransparentSort=function(y){Ee=y},this.getClearColor=function(y){return y.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,H=!0){let G=0;if(y){let U=!1;if(P!==null){const ue=P.texture.format;U=ue===Ll||ue===Il||ue===Pl}if(U){const ue=P.texture.type,Te=ue===Zn||ue===Gi||ue===cr||ue===hr||ue===Rl||ue===Cl,Ie=Ne.getClearColor(),Ce=Ne.getClearAlpha(),Ve=Ie.r,Xe=Ie.g,ze=Ie.b;Te?(g[0]=Ve,g[1]=Xe,g[2]=ze,g[3]=Ce,I.clearBufferuiv(I.COLOR,0,g)):(v[0]=Ve,v[1]=Xe,v[2]=ze,v[3]=Ce,I.clearBufferiv(I.COLOR,0,v))}else G|=I.COLOR_BUFFER_BIT}N&&(G|=I.DEPTH_BUFFER_BIT),H&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Ne.dispose(),K.dispose(),Fe.dispose(),ae.dispose(),Ye.dispose(),qe.dispose(),O.dispose(),ye.dispose(),Je.dispose(),X.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Wn),pe.removeEventListener("sessionend",sc),Ri.stop()};function ve(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const y=ge.autoReset,N=De.enabled,H=De.autoUpdate,G=De.needsUpdate,U=De.type;D(),ge.autoReset=y,De.enabled=N,De.autoUpdate=H,De.needsUpdate=G,De.type=U}function ce(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function te(y){const N=y.target;N.removeEventListener("dispose",te),Ue(N)}function Ue(y){Ke(y),ae.remove(y)}function Ke(y){const N=ae.get(y).programs;N!==void 0&&(N.forEach(function(H){X.releaseProgram(H)}),y.isShaderMaterial&&X.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,H,G,U,ue){N===null&&(N=Le);const Te=U.isMesh&&U.matrixWorld.determinant()<0,Ie=td(y,N,H,G,U);Z.setMaterial(G,Te);let Ce=H.index,Ve=1;if(G.wireframe===!0){if(Ce=x.getWireframeAttribute(H),Ce===void 0)return;Ve=2}const Xe=H.drawRange,ze=H.attributes.position;let nt=Xe.start*Ve,mt=(Xe.start+Xe.count)*Ve;ue!==null&&(nt=Math.max(nt,ue.start*Ve),mt=Math.min(mt,(ue.start+ue.count)*Ve)),Ce!==null?(nt=Math.max(nt,0),mt=Math.min(mt,Ce.count)):ze!=null&&(nt=Math.max(nt,0),mt=Math.min(mt,ze.count));const Nt=mt-nt;if(Nt<0||Nt===1/0)return;ye.setup(U,G,Ie,H,Ce);let yt,vt=be;if(Ce!==null&&(yt=b.get(Ce),vt=We,vt.setIndex(yt)),U.isMesh)G.wireframe===!0?(Z.setLineWidth(G.wireframeLinewidth*xt()),vt.setMode(I.LINES)):vt.setMode(I.TRIANGLES);else if(U.isLine){let He=G.linewidth;He===void 0&&(He=1),Z.setLineWidth(He*xt()),U.isLineSegments?vt.setMode(I.LINES):U.isLineLoop?vt.setMode(I.LINE_LOOP):vt.setMode(I.LINE_STRIP)}else U.isPoints?vt.setMode(I.POINTS):U.isSprite&&vt.setMode(I.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)fr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))vt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const He=U._multiDrawStarts,wt=U._multiDrawCounts,ot=U._multiDrawCount,xn=Ce?b.get(Ce).bytesPerElement:1,Qi=ae.get(G).currentProgram.getUniforms();for(let Mn=0;Mn<ot;Mn++)Qi.setValue(I,"_gl_DrawID",Mn),vt.render(He[Mn]/xn,wt[Mn])}else if(U.isInstancedMesh)vt.renderInstances(nt,Nt,U.count);else if(H.isInstancedBufferGeometry){const He=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,wt=Math.min(H.instanceCount,He);vt.renderInstances(nt,Nt,wt)}else vt.render(nt,Nt)};function Mt(y,N,H){y.transparent===!0&&y.side===ci&&y.forceSinglePass===!1?(y.side=gn,y.needsUpdate=!0,Ar(y,N,H),y.side=Ti,y.needsUpdate=!0,Ar(y,N,H),y.side=ci):Ar(y,N,H)}this.compile=function(y,N,H=null){H===null&&(H=y),f=Fe.get(H),f.init(N),E.push(f),H.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),y!==H&&y.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const G=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ue=U.material;if(ue)if(Array.isArray(ue))for(let Te=0;Te<ue.length;Te++){const Ie=ue[Te];Mt(Ie,H,U),G.add(Ie)}else Mt(ue,H,U),G.add(ue)}),f=E.pop(),G},this.compileAsync=function(y,N,H=null){const G=this.compile(y,N,H);return new Promise(U=>{function ue(){if(G.forEach(function(Te){ae.get(Te).currentProgram.isReady()&&G.delete(Te)}),G.size===0){U(y);return}setTimeout(ue,10)}ee.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let ht=null;function ti(y){ht&&ht(y)}function Wn(){Ri.stop()}function sc(){Ri.start()}const Ri=new yu;Ri.setAnimationLoop(ti),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(y){ht=y,pe.setAnimationLoop(y),y===null?Ri.stop():Ri.start()},pe.addEventListener("sessionstart",Wn),pe.addEventListener("sessionend",sc),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(N),N=pe.getCamera()),y.isScene===!0&&y.onBeforeRender(_,y,N,P),f=Fe.get(y,E.length),f.init(N),E.push(f),Y.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),xe.setFromProjectionMatrix(Y,$n,N.reversedDepth),V=this.localClippingEnabled,se=me.init(this.clippingPlanes,V),m=K.get(y,T.length),m.init(),T.push(m),pe.enabled===!0&&pe.isPresenting===!0){const ue=_.xr.getDepthSensingMesh();ue!==null&&Fo(ue,N,-1/0,_.sortObjects)}Fo(y,N,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(fe,Ee),tt=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,tt&&Ne.addToRenderList(m,y),this.info.render.frame++,se===!0&&me.beginShadows();const H=f.state.shadowsArray;De.render(H,y,N),se===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,U=m.transmissive;if(f.setupLights(),N.isArrayCamera){const ue=N.cameras;if(U.length>0)for(let Te=0,Ie=ue.length;Te<Ie;Te++){const Ce=ue[Te];oc(G,U,y,Ce)}tt&&Ne.render(y);for(let Te=0,Ie=ue.length;Te<Ie;Te++){const Ce=ue[Te];rc(m,y,Ce,Ce.viewport)}}else U.length>0&&oc(G,U,y,N),tt&&Ne.render(y),rc(m,y,N);P!==null&&w===0&&(_e.updateMultisampleRenderTarget(P),_e.updateRenderTargetMipmap(P)),y.isScene===!0&&y.onAfterRender(_,y,N),ye.resetDefaultState(),M=-1,S=null,E.pop(),E.length>0?(f=E[E.length-1],se===!0&&me.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Fo(y,N,H,G){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)H=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||xe.intersectsSprite(y)){G&&Oe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Y);const Te=O.update(y),Ie=y.material;Ie.visible&&m.push(y,Te,Ie,H,Oe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||xe.intersectsObject(y))){const Te=O.update(y),Ie=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Oe.copy(y.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Oe.copy(Te.boundingSphere.center)),Oe.applyMatrix4(y.matrixWorld).applyMatrix4(Y)),Array.isArray(Ie)){const Ce=Te.groups;for(let Ve=0,Xe=Ce.length;Ve<Xe;Ve++){const ze=Ce[Ve],nt=Ie[ze.materialIndex];nt&&nt.visible&&m.push(y,Te,nt,H,Oe.z,ze)}}else Ie.visible&&m.push(y,Te,Ie,H,Oe.z,null)}}const ue=y.children;for(let Te=0,Ie=ue.length;Te<Ie;Te++)Fo(ue[Te],N,H,G)}function rc(y,N,H,G){const U=y.opaque,ue=y.transmissive,Te=y.transparent;f.setupLightsView(H),se===!0&&me.setGlobalState(_.clippingPlanes,H),G&&Z.viewport(L.copy(G)),U.length>0&&br(U,N,H),ue.length>0&&br(ue,N,H),Te.length>0&&br(Te,N,H),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function oc(y,N,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new Hn(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?di:Zn,minFilter:Hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const ue=f.state.transmissionRenderTarget[G.id],Te=G.viewport||L;ue.setSize(Te.z*_.transmissionResolutionScale,Te.w*_.transmissionResolutionScale);const Ie=_.getRenderTarget(),Ce=_.getActiveCubeFace(),Ve=_.getActiveMipmapLevel();_.setRenderTarget(ue),_.getClearColor(J),k=_.getClearAlpha(),k<1&&_.setClearColor(16777215,.5),_.clear(),tt&&Ne.render(H);const Xe=_.toneMapping;_.toneMapping=Si;const ze=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),se===!0&&me.setGlobalState(_.clippingPlanes,G),br(y,H,G),_e.updateMultisampleRenderTarget(ue),_e.updateRenderTargetMipmap(ue),ee.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let mt=0,Nt=N.length;mt<Nt;mt++){const yt=N[mt],vt=yt.object,He=yt.geometry,wt=yt.material,ot=yt.group;if(wt.side===ci&&vt.layers.test(G.layers)){const xn=wt.side;wt.side=gn,wt.needsUpdate=!0,ac(vt,H,G,He,wt,ot),wt.side=xn,wt.needsUpdate=!0,nt=!0}}nt===!0&&(_e.updateMultisampleRenderTarget(ue),_e.updateRenderTargetMipmap(ue))}_.setRenderTarget(Ie,Ce,Ve),_.setClearColor(J,k),ze!==void 0&&(G.viewport=ze),_.toneMapping=Xe}function br(y,N,H){const G=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ue=y.length;U<ue;U++){const Te=y[U],Ie=Te.object,Ce=Te.geometry,Ve=Te.group;let Xe=Te.material;Xe.allowOverride===!0&&G!==null&&(Xe=G),Ie.layers.test(H.layers)&&ac(Ie,N,H,Ce,Xe,Ve)}}function ac(y,N,H,G,U,ue){y.onBeforeRender(_,N,H,G,U,ue),y.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(_,N,H,G,y,ue),U.transparent===!0&&U.side===ci&&U.forceSinglePass===!1?(U.side=gn,U.needsUpdate=!0,_.renderBufferDirect(H,N,G,U,y,ue),U.side=Ti,U.needsUpdate=!0,_.renderBufferDirect(H,N,G,U,y,ue),U.side=ci):_.renderBufferDirect(H,N,G,U,y,ue),y.onAfterRender(_,N,H,G,U,ue)}function Ar(y,N,H){N.isScene!==!0&&(N=Le);const G=ae.get(y),U=f.state.lights,ue=f.state.shadowsArray,Te=U.state.version,Ie=X.getParameters(y,U.state,ue,N,H),Ce=X.getProgramCacheKey(Ie);let Ve=G.programs;G.environment=y.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(y.isMeshStandardMaterial?qe:Ye).get(y.envMap||G.environment),G.envMapRotation=G.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Ve===void 0&&(y.addEventListener("dispose",te),Ve=new Map,G.programs=Ve);let Xe=Ve.get(Ce);if(Xe!==void 0){if(G.currentProgram===Xe&&G.lightsStateVersion===Te)return cc(y,Ie),Xe}else Ie.uniforms=X.getUniforms(y),y.onBeforeCompile(Ie,_),Xe=X.acquireProgram(Ie,Ce),Ve.set(Ce,Xe),G.uniforms=Ie.uniforms;const ze=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ze.clippingPlanes=me.uniform),cc(y,Ie),G.needsLights=id(y),G.lightsStateVersion=Te,G.needsLights&&(ze.ambientLightColor.value=U.state.ambient,ze.lightProbe.value=U.state.probe,ze.directionalLights.value=U.state.directional,ze.directionalLightShadows.value=U.state.directionalShadow,ze.spotLights.value=U.state.spot,ze.spotLightShadows.value=U.state.spotShadow,ze.rectAreaLights.value=U.state.rectArea,ze.ltc_1.value=U.state.rectAreaLTC1,ze.ltc_2.value=U.state.rectAreaLTC2,ze.pointLights.value=U.state.point,ze.pointLightShadows.value=U.state.pointShadow,ze.hemisphereLights.value=U.state.hemi,ze.directionalShadowMap.value=U.state.directionalShadowMap,ze.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ze.spotShadowMap.value=U.state.spotShadowMap,ze.spotLightMatrix.value=U.state.spotLightMatrix,ze.spotLightMap.value=U.state.spotLightMap,ze.pointShadowMap.value=U.state.pointShadowMap,ze.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=Xe,G.uniformsList=null,Xe}function lc(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=so.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function cc(y,N){const H=ae.get(y);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function td(y,N,H,G,U){N.isScene!==!0&&(N=Le),_e.resetTextureUnits();const ue=N.fog,Te=G.isMeshStandardMaterial?N.environment:null,Ie=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ps,Ce=(G.isMeshStandardMaterial?qe:Ye).get(G.envMap||Te),Ve=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Xe=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ze=!!H.morphAttributes.position,nt=!!H.morphAttributes.normal,mt=!!H.morphAttributes.color;let Nt=Si;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Nt=_.toneMapping);const yt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,vt=yt!==void 0?yt.length:0,He=ae.get(G),wt=f.state.lights;if(se===!0&&(V===!0||y!==S)){const on=y===S&&G.id===M;me.setState(G,y,on)}let ot=!1;G.version===He.__version?(He.needsLights&&He.lightsStateVersion!==wt.state.version||He.outputColorSpace!==Ie||U.isBatchedMesh&&He.batching===!1||!U.isBatchedMesh&&He.batching===!0||U.isBatchedMesh&&He.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&He.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&He.instancing===!1||!U.isInstancedMesh&&He.instancing===!0||U.isSkinnedMesh&&He.skinning===!1||!U.isSkinnedMesh&&He.skinning===!0||U.isInstancedMesh&&He.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&He.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&He.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&He.instancingMorph===!1&&U.morphTexture!==null||He.envMap!==Ce||G.fog===!0&&He.fog!==ue||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==me.numPlanes||He.numIntersection!==me.numIntersection)||He.vertexAlphas!==Ve||He.vertexTangents!==Xe||He.morphTargets!==ze||He.morphNormals!==nt||He.morphColors!==mt||He.toneMapping!==Nt||He.morphTargetsCount!==vt)&&(ot=!0):(ot=!0,He.__version=G.version);let xn=He.currentProgram;ot===!0&&(xn=Ar(G,N,U));let Qi=!1,Mn=!1,qs=!1;const Rt=xn.getUniforms(),An=He.uniforms;if(Z.useProgram(xn.program)&&(Qi=!0,Mn=!0,qs=!0),G.id!==M&&(M=G.id,Mn=!0),Qi||S!==y){Z.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Rt.setValue(I,"projectionMatrix",y.projectionMatrix),Rt.setValue(I,"viewMatrix",y.matrixWorldInverse);const dn=Rt.map.cameraPosition;dn!==void 0&&dn.setValue(I,Me.setFromMatrixPosition(y.matrixWorld)),j.logarithmicDepthBuffer&&Rt.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Rt.setValue(I,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,Mn=!0,qs=!0)}if(U.isSkinnedMesh){Rt.setOptional(I,U,"bindMatrix"),Rt.setOptional(I,U,"bindMatrixInverse");const on=U.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Rt.setValue(I,"boneTexture",on.boneTexture,_e))}U.isBatchedMesh&&(Rt.setOptional(I,U,"batchingTexture"),Rt.setValue(I,"batchingTexture",U._matricesTexture,_e),Rt.setOptional(I,U,"batchingIdTexture"),Rt.setValue(I,"batchingIdTexture",U._indirectTexture,_e),Rt.setOptional(I,U,"batchingColorTexture"),U._colorsTexture!==null&&Rt.setValue(I,"batchingColorTexture",U._colorsTexture,_e));const wn=H.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&le.update(U,H,xn),(Mn||He.receiveShadow!==U.receiveShadow)&&(He.receiveShadow=U.receiveShadow,Rt.setValue(I,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(An.envMap.value=Ce,An.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(An.envMapIntensity.value=N.environmentIntensity),Mn&&(Rt.setValue(I,"toneMappingExposure",_.toneMappingExposure),He.needsLights&&nd(An,qs),ue&&G.fog===!0&&ne.refreshFogUniforms(An,ue),ne.refreshMaterialUniforms(An,G,q,Q,f.state.transmissionRenderTarget[y.id]),so.upload(I,lc(He),An,_e)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(so.upload(I,lc(He),An,_e),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Rt.setValue(I,"center",U.center),Rt.setValue(I,"modelViewMatrix",U.modelViewMatrix),Rt.setValue(I,"normalMatrix",U.normalMatrix),Rt.setValue(I,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const on=G.uniformsGroups;for(let dn=0,Bo=on.length;dn<Bo;dn++){const Ci=on[dn];Je.update(Ci,xn),Je.bind(Ci,xn)}}return xn}function nd(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function id(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,N,H){const G=ae.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),ae.get(y.texture).__webglTexture=N,ae.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const H=ae.get(y);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0};const sd=I.createFramebuffer();this.setRenderTarget=function(y,N=0,H=0){P=y,A=N,w=H;let G=!0,U=null,ue=!1,Te=!1;if(y){const Ce=ae.get(y);if(Ce.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(I.FRAMEBUFFER,null),G=!1;else if(Ce.__webglFramebuffer===void 0)_e.setupRenderTarget(y);else if(Ce.__hasExternalTextures)_e.rebindTextures(y,ae.get(y.texture).__webglTexture,ae.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const ze=y.depthTexture;if(Ce.__boundDepthTexture!==ze){if(ze!==null&&ae.has(ze)&&(y.width!==ze.image.width||y.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_e.setupDepthRenderbuffer(y)}}const Ve=y.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Te=!0);const Xe=ae.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Xe[N])?U=Xe[N][H]:U=Xe[N],ue=!0):y.samples>0&&_e.useMultisampledRTT(y)===!1?U=ae.get(y).__webglMultisampledFramebuffer:Array.isArray(Xe)?U=Xe[H]:U=Xe,L.copy(y.viewport),F.copy(y.scissor),W=y.scissorTest}else L.copy(we).multiplyScalar(q).floor(),F.copy(B).multiplyScalar(q).floor(),W=re;if(H!==0&&(U=sd),Z.bindFramebuffer(I.FRAMEBUFFER,U)&&G&&Z.drawBuffers(y,U),Z.viewport(L),Z.scissor(F),Z.setScissorTest(W),ue){const Ce=ae.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ce.__webglTexture,H)}else if(Te){const Ce=N;for(let Ve=0;Ve<y.textures.length;Ve++){const Xe=ae.get(y.textures[Ve]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ve,Xe.__webglTexture,H,Ce)}}else if(y!==null&&H!==0){const Ce=ae.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ce.__webglTexture,H)}M=-1},this.readRenderTargetPixels=function(y,N,H,G,U,ue,Te,Ie=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ae.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce){Z.bindFramebuffer(I.FRAMEBUFFER,Ce);try{const Ve=y.textures[Ie],Xe=Ve.format,ze=Ve.type;if(!j.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-G&&H>=0&&H<=y.height-U&&(y.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ie),I.readPixels(N,H,G,U,Be.convert(Xe),Be.convert(ze),ue))}finally{const Ve=P!==null?ae.get(P).__webglFramebuffer:null;Z.bindFramebuffer(I.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(y,N,H,G,U,ue,Te,Ie=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=ae.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce)if(N>=0&&N<=y.width-G&&H>=0&&H<=y.height-U){Z.bindFramebuffer(I.FRAMEBUFFER,Ce);const Ve=y.textures[Ie],Xe=Ve.format,ze=Ve.type;if(!j.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,nt),I.bufferData(I.PIXEL_PACK_BUFFER,ue.byteLength,I.STREAM_READ),y.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ie),I.readPixels(N,H,G,U,Be.convert(Xe),Be.convert(ze),0);const mt=P!==null?ae.get(P).__webglFramebuffer:null;Z.bindFramebuffer(I.FRAMEBUFFER,mt);const Nt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await sf(I,Nt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,nt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ue),I.deleteBuffer(nt),I.deleteSync(Nt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,H=0){const G=Math.pow(2,-H),U=Math.floor(y.image.width*G),ue=Math.floor(y.image.height*G),Te=N!==null?N.x:0,Ie=N!==null?N.y:0;_e.setTexture2D(y,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,Te,Ie,U,ue),Z.unbindTexture()};const rd=I.createFramebuffer(),od=I.createFramebuffer();this.copyTextureToTexture=function(y,N,H=null,G=null,U=0,ue=null){ue===null&&(U!==0?(fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=U,U=0):ue=0);let Te,Ie,Ce,Ve,Xe,ze,nt,mt,Nt;const yt=y.isCompressedTexture?y.mipmaps[ue]:y.image;if(H!==null)Te=H.max.x-H.min.x,Ie=H.max.y-H.min.y,Ce=H.isBox3?H.max.z-H.min.z:1,Ve=H.min.x,Xe=H.min.y,ze=H.isBox3?H.min.z:0;else{const wn=Math.pow(2,-U);Te=Math.floor(yt.width*wn),Ie=Math.floor(yt.height*wn),y.isDataArrayTexture?Ce=yt.depth:y.isData3DTexture?Ce=Math.floor(yt.depth*wn):Ce=1,Ve=0,Xe=0,ze=0}G!==null?(nt=G.x,mt=G.y,Nt=G.z):(nt=0,mt=0,Nt=0);const vt=Be.convert(N.format),He=Be.convert(N.type);let wt;N.isData3DTexture?(_e.setTexture3D(N,0),wt=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(_e.setTexture2DArray(N,0),wt=I.TEXTURE_2D_ARRAY):(_e.setTexture2D(N,0),wt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const ot=I.getParameter(I.UNPACK_ROW_LENGTH),xn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Qi=I.getParameter(I.UNPACK_SKIP_PIXELS),Mn=I.getParameter(I.UNPACK_SKIP_ROWS),qs=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,yt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,yt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ve),I.pixelStorei(I.UNPACK_SKIP_ROWS,Xe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ze);const Rt=y.isDataArrayTexture||y.isData3DTexture,An=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const wn=ae.get(y),on=ae.get(N),dn=ae.get(wn.__renderTarget),Bo=ae.get(on.__renderTarget);Z.bindFramebuffer(I.READ_FRAMEBUFFER,dn.__webglFramebuffer),Z.bindFramebuffer(I.DRAW_FRAMEBUFFER,Bo.__webglFramebuffer);for(let Ci=0;Ci<Ce;Ci++)Rt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ae.get(y).__webglTexture,U,ze+Ci),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ae.get(N).__webglTexture,ue,Nt+Ci)),I.blitFramebuffer(Ve,Xe,Te,Ie,nt,mt,Te,Ie,I.DEPTH_BUFFER_BIT,I.NEAREST);Z.bindFramebuffer(I.READ_FRAMEBUFFER,null),Z.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(U!==0||y.isRenderTargetTexture||ae.has(y)){const wn=ae.get(y),on=ae.get(N);Z.bindFramebuffer(I.READ_FRAMEBUFFER,rd),Z.bindFramebuffer(I.DRAW_FRAMEBUFFER,od);for(let dn=0;dn<Ce;dn++)Rt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,wn.__webglTexture,U,ze+dn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,wn.__webglTexture,U),An?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,on.__webglTexture,ue,Nt+dn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,on.__webglTexture,ue),U!==0?I.blitFramebuffer(Ve,Xe,Te,Ie,nt,mt,Te,Ie,I.COLOR_BUFFER_BIT,I.NEAREST):An?I.copyTexSubImage3D(wt,ue,nt,mt,Nt+dn,Ve,Xe,Te,Ie):I.copyTexSubImage2D(wt,ue,nt,mt,Ve,Xe,Te,Ie);Z.bindFramebuffer(I.READ_FRAMEBUFFER,null),Z.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else An?y.isDataTexture||y.isData3DTexture?I.texSubImage3D(wt,ue,nt,mt,Nt,Te,Ie,Ce,vt,He,yt.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(wt,ue,nt,mt,Nt,Te,Ie,Ce,vt,yt.data):I.texSubImage3D(wt,ue,nt,mt,Nt,Te,Ie,Ce,vt,He,yt):y.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ue,nt,mt,Te,Ie,vt,He,yt.data):y.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ue,nt,mt,yt.width,yt.height,vt,yt.data):I.texSubImage2D(I.TEXTURE_2D,ue,nt,mt,Te,Ie,vt,He,yt);I.pixelStorei(I.UNPACK_ROW_LENGTH,ot),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Qi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Mn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,qs),ue===0&&N.generateMipmaps&&I.generateMipmap(wt),Z.unbindTexture()},this.initRenderTarget=function(y){ae.get(y).__webglFramebuffer===void 0&&_e.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?_e.setTextureCube(y,0):y.isData3DTexture?_e.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?_e.setTexture2DArray(y,0):_e.setTexture2D(y,0),Z.unbindTexture()},this.resetState=function(){A=0,w=0,P=null,Z.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const ro={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Gs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const av=new Eu(-1,1,1,-1,0,1);class lv extends un{constructor(){super(),this.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new bt([0,2,0,0,2,0],2))}}const cv=new lv;class Yl{constructor(e){this._mesh=new Ct(cv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,av)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ru extends Gs{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof cn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=pr.clone(e.uniforms),this.material=new cn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Yl(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class xh extends Gs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class hv extends Gs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class uv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new he);this._width=i.width,this._height=i.height,t=new Hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:di}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ru(ro),this.copyPass.material.blending=ui,this.clock=new yp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}xh!==void 0&&(o instanceof xh?i=!0:o instanceof hv&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Cu extends Gs{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new $e}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const dv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new $e(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ns extends Gs{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new he(e.x,e.y):new he(256,256),this.clearColor=new $e(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Hn(r,o,{type:di}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){const u=new Hn(r,o,{type:di});u.texture.name="UnrealBloomPass.h"+c,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new Hn(r,o,{type:di});d.texture.name="UnrealBloomPass.v"+c,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=dv;this.highPassUniforms=pr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new cn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new he(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=pr.clone(ro.uniforms),this.blendMaterial=new cn({uniforms:this.copyUniforms,vertexShader:ro.vertexShader,fragmentShader:ro.fragmentShader,blending:co,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new $e,this._oldClearAlpha=1,this._basic=new Ji,this._fsQuad=new Yl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new he(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ns.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ns.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new cn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new cn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ns.BlurDirectionX=new he(1,0);Ns.BlurDirectionY=new he(0,1);const Qr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class fv extends Gs{constructor(){super(),this.uniforms=pr.clone(Qr.uniforms),this.material=new pp({name:Qr.name,uniforms:this.uniforms,vertexShader:Qr.vertexShader,fragmentShader:Qr.fragmentShader}),this._fsQuad=new Yl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},rt.getTransfer(this._outputColorSpace)===pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Bh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===kh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Al?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Hh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Gh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===zh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Wi={A:{id:"NF-0147",name:"林  川",hairColor:"#35291f",hairStyle:"swept",skinTone:"#c69262",glasses:!1,shirtColor:"#293e38",scarfColor:"#854739",faceShape:"tapered"},B:{id:"NF-0286",name:"周  禾",hairColor:"#a57543",hairStyle:"short",skinTone:"#ceaa80",glasses:!0,shirtColor:"#414b59",scarfColor:"#8d754b",faceShape:"round"}};function Er(n=21){return()=>(n=Math.imul(n,1664525)+1013904223|0,(n>>>0)/4294967296)}const ps=Er();function ke(n,e={}){return new Mu({color:n,roughness:.94,metalness:0,flatShading:!0,...e})}function oe(n,e,t,i,s=null){const r=new Ct(new ks(...e),i);return r.position.set(...t),s&&r.rotation.set(...s),r.castShadow=!0,r.receiveShadow=!0,n.add(r),r}function Qt(n,e,t,i,s,r,o=8){const a=new Ct(new Ao(e,t,i,o),r);return a.position.set(...s),a.castShadow=!0,a.receiveShadow=!0,n.add(a),a}function Ei(n,e,t){const i=document.createElement("canvas");i.width=n,i.height=e;const s=i.getContext("2d");t(s,n,e);const r=new Nf(i);return r.colorSpace=yn,r.anisotropy=4,r}function Pn(n,e,t,i,s,r=null,o=!1){const a=o?new Ji({map:s,transparent:!0}):ke("#ffffff",{map:s}),l=new Ct(new zs(e,t),a);return l.position.set(...i),r&&l.rotation.set(...r),n.add(l),l}function Xn(n,{bg:e="#263830",ink:t="#c6b58b",w:i=512,h:s=512,size:r=42,serif:o=!0}={}){return Ei(i,s,a=>{a.fillStyle=e,a.fillRect(0,0,i,s),a.strokeStyle=t+"55",a.lineWidth=2,a.strokeRect(18,18,i-36,s-36),a.textAlign="center",a.fillStyle=t,a.font=`${r}px ${o?"Georgia":"Microsoft YaHei"}`;const l=r*1.45;n.forEach((h,c)=>a.fillText(h,i/2,s/2+(c-(n.length-1)/2)*l+r*.35))})}function Ma(n="#705034"){const e=Ei(512,512,t=>{t.fillStyle=n,t.fillRect(0,0,512,512);const i=Er(71);for(let s=0;s<90;s++){const r=i()*512;t.strokeStyle=i()>.45?`rgba(20,9,3,${i()*.07})`:`rgba(233,193,112,${i()*.035})`,t.lineWidth=1+i()*2,t.beginPath(),t.moveTo(0,r),t.bezierCurveTo(180,r-i()*7,290,r+i()*9,512,r),t.stroke()}for(let s=0;s<512;s+=128)t.fillStyle="#1e170b55",t.fillRect(0,s,512,2)});return e.wrapS=e.wrapT=ho,e.repeat.set(2,1),ke("#ffffff",{map:e,roughness:.94})}function Io(n){const e=new Ft,t=ke(n.shirtColor),i=ke(n.skinTone),s=ke(n.hairColor),r=ke(n.scarfColor),o=ke("#171d1c"),a=ke("#181710"),l=new Ft;e.add(l);const h=Qt(l,.265,.34,.73,[0,1.13,0],t,7);h.scale.z=.58,oe(l,[.045,.7,.018],[0,1.14,.192],o);for(const E of[.88,1.08,1.29])Qt(l,.016,.016,.02,[.065,E,.21],ke("#a59d79"),6).rotation.x=Math.PI/2;const c=[];for(const E of[-1,1]){const _=oe(e,[.19,.72,.22],[E*.14,.39,0],ke("#272d2b"));c.push(_),oe(e,[.21,.1,.34],[E*.14,.06,.055],o)}const u=[];for(const E of[-1,1]){const _=new Ft;_.position.set(E*.28,1.43,0),l.add(_);const R=Qt(_,.115,.08,.51,[E*.047,-.24,.008],t,6);R.rotation.z=E*.18;const A=new Ct(new Vl(.095,0),i);A.scale.set(.72,1,.78),A.position.set(E*.09,-.51,.04),_.add(A),u.push(_)}const d=new Ft;d.position.y=1.79,l.add(d),Qt(l,.095,.1,.18,[0,1.49,0],i);const p=new Ct(new _o(.3,n.faceShape==="round"?8:7,4),i);p.scale.set(.89,1.02,.83),p.rotation.y=Math.PI/14,d.add(p);for(const E of[-1,1]){const _=new Ct(new Ro(.063),i);_.position.set(E*.258,-.025,-.002),_.scale.set(.5,1,.66),d.add(_)}const g=new Ct(new _o(.325,7,3,0,Math.PI*2,0,Math.PI*.46),s);g.position.set(0,.07,-.03),g.rotation.z=-.06,d.add(g);const v=n.hairStyle==="swept"?[[-.2,.13,.17,.13,.29,-.22],[-.05,.18,.22,.16,.33,-.3],[.13,.2,.2,.15,.23,.2],[.235,.05,.09,.07,.34,.12]]:[[-.19,.16,.17,.1,.16,-.1],[-.06,.2,.23,.13,.18,0],[.1,.18,.23,.12,.15,.05],[.23,.06,.11,.055,.25,0]];for(const[E,_,R,A,w,P]of v){const M=new mu;M.moveTo(-A*.62,w*.5),M.lineTo(A*.58,w*.35),M.lineTo(A*.25,-w*.5),M.lineTo(-A*.35,-w*.35),M.closePath();const S=new Ct(new Gl(M,{depth:.07,bevelEnabled:!1}),s);S.position.set(E,_+.025,R-.025),S.rotation.z=P,d.add(S)}const m=[];for(const E of[-1,1]){const _=oe(d,[.036,.063,.013],[E*.093,-.008,.244],a);if(m.push(_),oe(d,[.061,.012,.013],[E*.093,.055,.244],s,[0,0,E*.09]),n.glasses){const R=new Ct(new Co(.068,.009,4,10),o);R.position.set(E*.095,-.001,.258),d.add(R)}}n.glasses&&oe(d,[.065,.012,.014],[0,.008,.26],o);const f=new Ct(new kl(.022,.055,3),i);f.position.set(0,-.06,.25),f.rotation.x=Math.PI/2,d.add(f),oe(d,[.045,.008,.008],[0,-.138,.218],ke("#825a42"));const T=Qt(l,.235,.245,.19,[0,1.485,.017],r,7);T.scale.z=.76,T.rotation.z=.07,oe(l,[.16,.53,.058],[.16,1.2,.23],r,[0,0,-.085]),oe(l,[.17,.12,.06],[.183,.94,.23],ke(n.scarfColor),[0,0,-.085]);for(let E=0;E<3;E++)oe(l,[.026,.035,.026],[.125+E*.046,.875,.24],r);return oe(l,[.056,.65,.037],[-.217,1.15,.165],ke("#615037"),[0,0,-.12]),e.userData={body:l,head:d,arms:u,eyes:m,legs:c,profile:n},e}function pv(n,e,t,i,s,r){if(n.save(),n.translate(t,i),n.scale(s/160,r/190),n.fillStyle="#a3ac9c",n.fillRect(0,0,160,190),n.fillStyle="#829485",n.fillRect(0,135,160,55),n.fillStyle=e.shirtColor,n.beginPath(),n.moveTo(20,190),n.lineTo(28,144),n.lineTo(56,130),n.lineTo(104,130),n.lineTo(135,146),n.lineTo(145,190),n.fill(),n.fillStyle=e.skinTone,n.beginPath(),n.moveTo(40,49),n.lineTo(66,30),n.lineTo(106,36),n.lineTo(122,68),n.lineTo(117,110),n.lineTo(94,133),n.lineTo(66,129),n.lineTo(44,105),n.fill(),n.fillStyle=e.hairColor,n.beginPath(),n.moveTo(35,86),n.lineTo(30,45),n.lineTo(48,17),n.lineTo(92,10),n.lineTo(128,32),n.lineTo(129,77),n.lineTo(114,64),e.hairStyle==="swept"?(n.lineTo(101,42),n.lineTo(90,77),n.lineTo(72,72),n.lineTo(73,50),n.lineTo(51,83)):(n.lineTo(107,48),n.lineTo(99,64),n.lineTo(66,53),n.lineTo(49,66)),n.closePath(),n.fill(),n.fillStyle="#242720",n.fillRect(61,81,7,14),n.fillRect(95,81,7,14),e.glasses){n.strokeStyle="#26322f",n.lineWidth=3;for(const o of[65,100])n.beginPath(),n.arc(o,87,14,0,Math.PI*2),n.stroke();n.beginPath(),n.moveTo(79,86),n.lineTo(86,86),n.stroke()}n.fillStyle="#885f47",n.fillRect(78,112,10,2),n.fillStyle=e.scarfColor,n.beginPath(),n.moveTo(45,125),n.lineTo(115,128),n.lineTo(121,148),n.lineTo(44,153),n.fill(),n.fillRect(94,144,19,46),n.restore()}function Pu(n){const e=new Ft;oe(e,[.4,.252,.007],[0,0,0],ke("#d9d3b8"));const t=Ei(1024,640,(i,s,r)=>{i.fillStyle="#ded8bc",i.fillRect(0,0,s,r),i.fillStyle="#304e45",i.fillRect(0,0,s,125),i.fillStyle="#e6dab0",i.font="27px Georgia",i.fillText("NIGHTFALL PUBLIC LIBRARY",42,56),i.font="22px Microsoft YaHei",i.fillText("夜阑图书馆 · 借阅证",43,97),pv(i,n,47,169,260,315),i.fillStyle="#384b42",i.font="48px Microsoft YaHei",i.fillText(n.name,362,243),i.font="22px monospace",i.fillText("READER / "+n.id,362,300),i.strokeStyle="#879079",i.beginPath(),i.moveTo(362,334),i.lineTo(963,334),i.stroke(),i.font="23px Microsoft YaHei",i.fillText("有效至 2027.09.30",362,408);const o=Er(93);for(let a=365;a<934;a+=7){const l=o()>.5?4:2;i.fillStyle="#394039",i.fillRect(a,490,l,56)}i.font="17px monospace",i.fillText("READER CARD",365,578),i.strokeStyle="#aaa587",i.strokeRect(19,144,s-38,r-167)});return Pn(e,.396,.248,[0,0,.004],t),e}function mv(n,e,t,i,s){for(const r of i.filter(o=>o.visible&&o.page===s)){const[o,a,l,h]=r.uvRect;n.save(),n.translate(o*e,a*t),n.scale(l*e,h*t),r.type==="scratch"?(n.strokeStyle="#b4b19a",n.lineWidth=.025,n.beginPath(),n.moveTo(.06,.83),n.lineTo(.46,.49),n.lineTo(.91,.13),n.moveTo(.24,.79),n.lineTo(.67,.39),n.stroke()):r.type==="stain"?(n.fillStyle="#73503642",n.strokeStyle="#78553865",n.lineWidth=.05,n.beginPath(),n.ellipse(.5,.5,.44,.37,-.2,0,Math.PI*2),n.fill(),n.stroke()):r.type==="corner_fold"?(n.fillStyle="#162e2d",n.beginPath(),n.moveTo(1,0),n.lineTo(0,1),n.lineTo(1,1),n.closePath(),n.fill(),n.fillStyle="#a7a486",n.beginPath(),n.moveTo(.96,.04),n.lineTo(.06,.96),n.lineTo(.09,.12),n.closePath(),n.fill(),n.strokeStyle="#d4c9a5",n.lineWidth=.018,n.stroke()):r.type==="tear"&&(n.fillStyle="#ad9f81",n.beginPath(),n.moveTo(1,0),n.lineTo(.67,.22),n.lineTo(.71,.39),n.lineTo(.36,.54),n.lineTo(.4,.72),n.lineTo(0,1),n.lineTo(1,1),n.closePath(),n.fill(),n.strokeStyle="#efe3c7",n.lineWidth=.025,n.stroke()),n.restore()}}function Iu(n,e,t){const i=e.intersectObject(n,!0)[0];if(!i?.uv)return null;const s=n.userData.damageHotspots.find(r=>{const[o,a,l,h]=r.uvRect;return r.enabled&&r.page===t&&r.surface===i.object&&i.uv.x>=o&&i.uv.x<=o+l&&1-i.uv.y>=a&&1-i.uv.y<=a+h});return s?{...s,uv:i.uv.clone()}:null}function Lo(n={}){const e=n.damageProfile||[],t=new Ft,i=ke(n.coverColor||"#233f3d"),s=ke("#b6a170");oe(t,[.416,.555,.057],[0,0,0],ke("#c7bda1"));for(let c=0;c<3;c++)oe(t,[.417,.552,.001],[0,0,-.018+c*.018],ke(c%3===0?"#a89b7e":"#d0c4a6"));oe(t,[.445,.583,.015],[0,0,-.04],i),oe(t,[.029,.583,.087],[-.218,0,0],i);for(const c of[-.215,-.193,.185,.21])oe(t,[.033,.01,.09],[-.219,c,0],s);const r=new Ft;r.position.set(-.22,0,.041),t.add(r),oe(r,[.444,.583,.014],[.222,0,0],i);const o=Ei(640,840,(c,u,d)=>{if(c.fillStyle=n.coverColor||"#233f3d",c.fillRect(0,0,u,d),c.strokeStyle="#b3a16f",c.lineWidth=3,n.coverStyle===1?(c.fillStyle="#d0c09b",c.globalAlpha=.17,c.fillRect(0,138,u,242),c.globalAlpha=1,c.fillRect(50,740,76,4)):n.coverStyle===2?(c.fillStyle="#101e2438",c.fillRect(48,407,u-96,255),c.strokeRect(48,407,u-96,255)):n.coverStyle===3?(c.fillStyle="#b3a16f",c.fillRect(26,40,8,d-80),c.fillRect(55,392,u-110,2)):(c.strokeRect(32,32,u-64,d-64),c.lineWidth=1,c.strokeRect(43,43,u-86,d-86)),c.fillStyle="#c7b687",c.textAlign="center",c.font="17px Georgia",c.fillText(n.personal?"":"THE NIGHTFALL COLLECTION",u/2,93),c.font="52px Georgia",c.fillText(n.englishTitle?.[0]||"THE MIDNIGHT",u/2,205,u-100),c.font=n.englishTitle?"52px Georgia":"70px Georgia",c.fillText(n.englishTitle?.[1]||"ATLAS",u/2,290,u-100),c.font="24px Microsoft YaHei",c.fillText(n.title||"午 夜 图 谱",u/2,346),c.save(),c.translate(u/2,523),n.coverSeed){const p=Er(n.coverSeed*97);c.translate((p()-.5)*55,(p()-.5)*25);const g=.7+p()*.22;c.scale(g,g),c.lineWidth=2+p()*3}if(c.strokeStyle="#b6a271",n.art==="lighthouse")c.lineWidth=3,c.beginPath(),c.moveTo(-43,110),c.lineTo(-25,-61),c.lineTo(25,-61),c.lineTo(43,110),c.closePath(),c.stroke(),c.strokeRect(-32,-87,64,26),c.beginPath(),c.moveTo(-42,-89),c.lineTo(0,-117),c.lineTo(42,-89),c.moveTo(-120,-55),c.lineTo(-36,-76),c.moveTo(36,-76),c.lineTo(120,-55),c.moveTo(-105,113),c.lineTo(105,113),c.stroke();else if(n.art==="sky"){c.fillStyle="#d9d5af",c.beginPath(),c.arc(30,-15,66,0,Math.PI*2),c.fill(),c.fillStyle=n.coverColor,c.beginPath(),c.arc(55,-35,62,0,Math.PI*2),c.fill(),c.fillStyle="#d9d5af";for(const[p,g,v]of[[-106,-85,7],[-80,25,5],[95,70,7],[120,-75,4],[-20,108,4],[-125,105,3]])c.beginPath(),c.moveTo(p,g-v*2),c.lineTo(p+v,g),c.lineTo(p,g+v*2),c.lineTo(p-v,g),c.closePath(),c.fill();c.strokeStyle="#8c9dac",c.beginPath(),c.ellipse(0,15,135,84,-.25,0,Math.PI*2),c.stroke()}else if(n.art==="rain")for(let p=0;p<7;p++)c.strokeRect(-112+p*32,45-p%3*27,24,80+p%3*27),c.beginPath(),c.moveTo(-105+p*33,-110),c.lineTo(-116+p*33,-62),c.stroke();else if(["port","city","plant","gear"].includes(n.art)){if(c.lineWidth=3,c.beginPath(),n.art==="plant"){c.moveTo(0,120),c.lineTo(0,-115);for(let p=-80;p<90;p+=40)c.moveTo(0,p+20),c.quadraticCurveTo(-90,p-35,-55,p-40),c.quadraticCurveTo(-10,p-45,0,p+20),c.moveTo(0,p),c.quadraticCurveTo(90,p-40,55,p-50),c.quadraticCurveTo(10,p-45,0,p)}else if(n.art==="gear"){for(let p=0;p<48;p++){const g=p*Math.PI/24,v=p%4<2?96:116,m=Math.cos(g)*v,f=Math.sin(g)*v;p?c.lineTo(m,f):c.moveTo(m,f)}c.closePath(),c.moveTo(40,0),c.arc(0,0,40,0,Math.PI*2),c.moveTo(-140,-120),c.lineTo(140,-120)}else{for(let p=0;p<4;p++){const g=-120+p*65,v=-60+p%2*25;c.rect(g,v,50,130-v);for(let m=0;m<3;m++)c.rect(g+10,v+15+m*30,12,16)}c.moveTo(-145,85),c.lineTo(145,85),n.art==="port"&&(c.moveTo(-140,105),c.lineTo(-100,125),c.lineTo(85,125),c.lineTo(135,100),c.moveTo(-60,100),c.lineTo(-60,-115),c.lineTo(130,-85))}c.stroke()}else{for(const p of[103,113,142])c.beginPath(),c.arc(0,0,p,0,Math.PI*2),c.stroke();for(let p=0;p<8;p++)c.save(),c.rotate(p*Math.PI/4),c.beginPath(),c.moveTo(0,-122),c.lineTo(18,-23),c.lineTo(0,0),c.lineTo(-18,-23),c.closePath(),c.stroke(),c.restore();c.fillStyle="#c6b27b",c.beginPath(),c.arc(0,0,7,0,Math.PI*2),c.fill()}c.restore(),c.font="20px Georgia",c.font=n.author?"24px Microsoft YaHei":"20px Georgia",c.fillText(n.author||"E L I A S   W R E N",u/2,742)}),a=Pn(r,.438,.575,[.222,0,.0076],o);Pn(r,.432,.57,[.222,0,-.0076],Xn(n.personal?["","夜航",""]:["✧","NIGHTFALL","COLLECTION"],{bg:"#9b9a7a",ink:"#4a604e",size:36}),[0,Math.PI,0]);const l=()=>Array.from({length:n.content?.length||3},(c,u)=>u).map(c=>Ei(640,840,(u,d,p)=>{if(u.fillStyle="#dfd4b7",u.fillRect(0,0,d,p),u.fillStyle="#526052",u.textAlign="center",u.font="18px Georgia",u.fillText(n.englishTitle?.join(" ")||"THE MIDNIGHT ATLAS",d/2,76),u.fillRect(57,98,d-114,1),n.art==="sky"){u.fillStyle="#30465b",u.font="36px Microsoft YaHei",u.fillText(["月亮的脸在变","在星空里找一把勺子","太阳和它的邻居"][c],d/2,180),u.fillStyle="#344960",u.fillRect(60,235,520,330);const v=(m,f,T,E)=>{u.fillStyle=E,u.beginPath(),u.arc(m,f,T,0,Math.PI*2),u.fill()};if(u.font="22px Microsoft YaHei",c===0)for(let m=0;m<4;m++){const f=128+m*128;v(f,370,43,"#1d2f42"),m===2&&v(f,370,43,"#e6d9ab"),(m===1||m===3)&&(u.fillStyle="#e6d9ab",u.beginPath(),u.arc(f,370,43,m===1?-Math.PI/2:Math.PI/2,m===1?Math.PI/2:Math.PI*1.5),u.closePath(),u.fill()),u.fillStyle="#dfd7bd",u.fillText(["新月","上弦月","满月","下弦月"][m],f,465)}else if(c===1){const m=[[112,425],[178,378],[251,398],[329,350],[351,442],[465,456],[491,349]];u.strokeStyle="#aabac6",u.lineWidth=3,u.beginPath(),m.forEach(([f,T],E)=>E?u.lineTo(f,T):u.moveTo(f,T)),u.lineTo(329,350),u.stroke();for(const[f,T]of m)v(f,T,7,"#eee0ac");u.fillStyle="#dfd7bd",u.fillText("北斗七星",320,520)}else{const m=["#e1b968","#afa491","#c4af85","#7ea5b6","#bd8268"],f=["太阳","水星","金星","地球","火星"];for(let T=0;T<5;T++){const E=128+T*98;v(E,375,[48,10,17,19,14][T],m[T]),u.fillStyle="#dfd7bd",u.fillText(f[T],E,465)}u.font="16px Microsoft YaHei",u.fillText("示意图：大小和距离未按比例",320,536)}u.fillStyle="#414a40",u.font="26px Microsoft YaHei",u.textAlign="left",(n.content[c].match(/.{1,18}/gu)||[]).forEach((m,f)=>u.fillText(m,83,640+f*43)),u.textAlign="center",u.font="18px Georgia",u.fillText(String(c+1),320,790);return}if(n.content){u.fillStyle="#414a40",u.font="30px Microsoft YaHei",u.fillText(n.title,d/2,175),u.textAlign="left",u.font="27px Microsoft YaHei",(n.content[c].match(/.{1,17}/gu)||[]).forEach((m,f)=>u.fillText(m,90,285+f*54)),u.textAlign="center",u.font="18px Georgia",u.fillText(String(c+1),d/2,790);return}u.font="38px Georgia",u.fillText(["A map of quiet places","Windows after midnight","The way home"][c],d/2,161),u.font="23px Microsoft YaHei",u.fillText(["安 静 之 地 的 地 图","午 夜 之 后 的 窗","回 家 的 路"][c],d/2,211),u.strokeStyle="#6a7964",u.lineWidth=2,u.beginPath(),u.arc(320,390,122,0,Math.PI*2),u.stroke();const g=[[250,302],[295,340],[390,325],[370,425],[290,467],[238,417],[250,302]];u.beginPath(),g.forEach(([v,m],f)=>f?u.lineTo(v,m):u.moveTo(v,m)),u.stroke(),g.forEach(([v,m])=>{u.beginPath(),u.arc(v,m,4,0,Math.PI*2),u.fill()}),u.font="21px Georgia",["Some places can only be found","after the last light has gone out.","Follow the rain. Remember the way home."].forEach((v,m)=>u.fillText(v,d/2,601+m*36)),u.font="18px Microsoft YaHei",u.fillText(["沿着雨声，记住回家的路。","每一扇亮着的窗，都有人在等待。","灯光熄灭以前，沿原路返回。"][c],d/2,733),u.font="18px Georgia",u.fillText(`—  ${String(7+c).padStart(2,"0")}  —`,d/2,795)})),h=n.deferPages?[]:l();if(t.userData.pages=h,t.userData.page=Pn(t,.407,.545,[0,0,.0305],h[0]||null),t.userData.preparePages=()=>{h.length||(h.push(...l()),t.userData.page.material.map=h[0],t.userData.page.material.needsUpdate=!0)},Pn(t,.438,.577,[0,0,-.048],Xn(n.content?[n.title,"",n.content[0].slice(0,16),n.content[0].slice(16,32),"",n.author||"夜阑藏书"]:["NIGHTFALL PRESS","","A map for the hours","between dusk and dawn.","","0147 / ARCHIVES"],{bg:n.coverColor||"#233f3d",size:n.content?23:29}),[0,Math.PI,0]),t.userData.cover=r,t.userData.front=a,n.content){const c=Ei(128,768,(u,d,p)=>{u.fillStyle=n.coverColor||"#233f3d",u.fillRect(0,0,d,p),u.fillStyle="#d2c5a2",u.font="64px Microsoft YaHei",u.textAlign="center",[...n.title].forEach((g,v)=>u.fillText(g,d/2,220+v*85))});Pn(t,.088,.57,[-.235,0,0],c,[0,-Math.PI/2,0])}return t.userData.cleanPages=n.deferPages?[]:[o,...h].map(c=>{const u=document.createElement("canvas");return u.width=c.image.width,u.height=c.image.height,u.getContext("2d").drawImage(c.image,0,0),u}),n.deferPages?t.userData.damageHotspots=[]:Lu(t,e),t}function Lu(n,e){const t=n.userData.front;[t.material.map,...n.userData.pages].forEach((i,s)=>{const r=i.image,o=r.getContext("2d");o.drawImage(n.userData.cleanPages[s],0,0),mv(o,r.width,r.height,e,s),i.needsUpdate=!0}),n.userData.damageHotspots=e.filter(i=>i.visible&&["scratch","stain","tear","corner_fold"].includes(i.type)).map(i=>({damageId:i.id,type:i.type,page:i.page,uvRect:i.uvRect,enabled:!0,surface:i.page===0?t:n.userData.page}))}const gv={WAITING:{START:"CUSTOMER_ENTERING"},CUSTOMER_ENTERING:{ARRIVE:"CUSTOMER_TALKING"},CUSTOMER_TALKING:{PLACE_ITEMS:"ITEMS_PLACED"},ITEMS_PLACED:{PICK_ID:"ID_HELD",PICK_BOOK:"BOOK_HELD"},ID_HELD:{RETURN_ID:"ITEMS_PLACED"},BOOK_INSPECT:{EXIT_INSPECT:"BOOK_HELD"},BOOK_HELD:{PUT_BOOK:"ITEMS_PLACED",INSPECT_AGAIN:"BOOK_INSPECT",BORROW:"BORROW_COMMIT",REJECT:"REJECT_COMMIT"},BORROW_COMMIT:{RESPOND:"CUSTOMER_RESPONSE"},REJECT_COMMIT:{RESPOND:"CUSTOMER_RESPONSE"},CUSTOMER_RESPONSE:{LEAVE:"CUSTOMER_LEAVING"},CUSTOMER_LEAVING:{COMPLETE:"TRANSACTION_COMPLETE"},TRANSACTION_COMPLETE:{}},_v={RETURN_WAITING:{START:"RETURN_CUSTOMER_ENTERING"},RETURN_CUSTOMER_ENTERING:{ARRIVE:"RETURN_CUSTOMER_TALKING"},RETURN_CUSTOMER_TALKING:{PLACE_ITEMS:"RETURN_BOOK_PLACED"},RETURN_BOOK_PLACED:{PICK_BOOK:"RETURN_BOOK_HELD"},RETURN_BOOK_HELD:{PUT_BOOK:"RETURN_BOOK_PLACED",INSPECT_AGAIN:"RETURN_BOOK_INSPECT",ACCEPT:"RETURN_ACCEPTED"},RETURN_BOOK_INSPECT:{EXIT_INSPECT:"RETURN_BOOK_HELD",SELECT_DAMAGE:"RETURN_DAMAGE_SELECTED"},RETURN_DAMAGE_SELECTED:{BEGIN_DIALOGUE:"RETURN_DAMAGE_DIALOGUE"},RETURN_DAMAGE_DIALOGUE:{SHOW_DECISION:"RETURN_DECISION"},RETURN_DECISION:{CHARGE:"RETURN_BOOK_HELD",WAIVE:"RETURN_BOOK_HELD"},RETURN_ACCEPTED:{RESPOND:"RETURN_CUSTOMER_RESPONSE"},RETURN_CUSTOMER_RESPONSE:{LEAVE:"RETURN_CUSTOMER_LEAVING"},RETURN_CUSTOMER_LEAVING:{COMPLETE:"RETURN_COMPLETE"},RETURN_COMPLETE:{}};class Du{constructor({type:e="borrow",customerId:t,actualIdentityMatch:i,bookId:s,bookInstanceId:r,damageProfile:o=[],existingDamageBeforeLoan:a=[]}){this.type=e,this.bookId=s,this.bookInstanceId=r,this.damageDecisions=[],this.damageProfile=o,this.existingDamageBeforeLoan=a,this.selectedDamageId=null,this.customerId=t,this.actualIdentityMatch=i,this.state=e==="return"?"RETURN_WAITING":"WAITING",this.checklist=null,this.cardReturned=!1,this.decision=null,this.record=null}get phase(){return this.type!=="return"?this.state:this.state==="RETURN_BOOK_PLACED"?"ITEMS_PLACED":this.state==="RETURN_COMPLETE"?"TRANSACTION_COMPLETE":this.state.slice(7)}dispatch(e,t){if(e==="PICK_ID"&&this.cardReturned)return!1;const i=(this.type==="return"?_v:gv)[this.state]?.[e];if(!i)return!1;if(e==="SELECT_DAMAGE"){if(!this.damageProfile.some(s=>s.id===t&&s.visible))return!1;this.selectedDamageId=t}if(this.state=i,e==="RETURN_ID"&&(this.cardReturned=!0),["CHARGE","WAIVE"].includes(e)){const s=this.damageProfile.find(c=>c.id===this.selectedDamageId),r=s.causedDuringLoan??!this.existingDamageBeforeLoan.includes(s.id),o=e.toLowerCase(),a=o==="charge"===r,l={damageId:s.id,decision:o,isCorrect:a,reason:a?null:r?"missed_new_damage":"charged_existing_damage"},h=this.damageDecisions.findIndex(c=>c.damageId===s.id);h<0?this.damageDecisions.push(l):this.damageDecisions[h]=l}if(["BORROW","REJECT","ACCEPT"].includes(e)&&(this.decision=e.toLowerCase()),e==="COMPLETE")if(this.type==="return"){const s=this.damageProfile.filter(a=>a.visible),r=s.some(a=>a.causedDuringLoan??!this.existingDamageBeforeLoan.includes(a.id)),o=s.flatMap(a=>{const l=a.causedDuringLoan??!this.existingDamageBeforeLoan.includes(a.id),h=this.damageDecisions.find(c=>c.damageId===a.id)?.decision==="charge";return l===h?[]:[{damageId:a.id,reason:l?"missed_new_damage":"charged_existing_damage"}]});this.record=Object.freeze({transactionType:"return",customerId:this.customerId,bookId:this.bookId,bookInstanceId:this.bookInstanceId,actualDamagePresent:s.length>0,actualDamageResponsibility:r,selectedDamageId:this.selectedDamageId,finalDecision:this.decision,damageDecisions:structuredClone(this.damageDecisions),isCorrect:o.length===0,reason:o[0]?.reason??null,errors:o,timestamp:new Date().toISOString()})}else this.record=Object.freeze({transactionType:"borrow",customerId:this.customerId,bookId:this.bookId,bookInstanceId:this.bookInstanceId,actualIdentityMatch:this.actualIdentityMatch,playerChecklistIdentity:this.checklist,finalDecision:this.decision,isCorrect:this.decision==="borrow"===this.actualIdentityMatch,timestamp:new Date().toISOString()});return!0}}const Kl={A:{customerId:"return-reader-01",book:{id:"distant-lighthouse",title:"远方的灯塔",englishTitle:["THE DISTANT","LIGHTHOUSE"],art:"lighthouse",damageProfile:[{id:"scratch_cover_01",type:"scratch",location:"front_cover",page:0,severity:1,visible:!0,uvRect:[.65,.71,.2,.1]}]},existingDamageBeforeLoan:[]},B:{customerId:"return-reader-02",book:{id:"city-rain",title:"城市里的雨",englishTitle:["RAIN IN","THE CITY"],art:"rain",damageProfile:[]},existingDamageBeforeLoan:[]}},{damageProfile:ix,...vl}=Kl.A.book,{damageProfile:sx,...xl}=Kl.B.book,Nu={[vl.id]:vl,[xl.id]:xl},vv={id:"fold_corner_01",type:"corner_fold",location:"front_cover_bottom_right",page:0,uvRect:[.78,.82,.2,.16],active:!0,createdAt:"BEFORE_GAME"},xv={id:"coffee_stain_01",type:"stain",location:"page_3",page:3,uvRect:[.56,.36,.29,.23],active:!0,createdAt:"CURRENT_LOAN"};class or{constructor(e,t,i=[]){this.instanceId=e,this.definitionId=t,this.status="IN_LIBRARY",this.holderCustomerId=null,this.damages=structuredClone(i),this.existingDamageBeforeLoan=[]}visualDamages(){return this.damages.filter(e=>e.active).map(({id:e,type:t,location:i,page:s,uvRect:r})=>({id:e,type:t,location:i,page:s,uvRect:[...r],visible:!0}))}}const $l=[{type:"borrow",customerId:"lin_zhou",bookInstanceId:"book_lighthouse_001",delayBefore:0,greeting:"晚上好，我想借这本。"},{type:"borrow",customerId:"zhou_ning",bookInstanceId:"book_city_rain_001",delayBefore:5,greeting:"晚上好，我想借这本书。"},{type:"return",customerId:"lin_zhou",bookInstanceId:"book_lighthouse_001",delayBefore:10,greeting:"你好，我来还刚才那本书。",beforeArrival:{addDamage:[xv]},damageReplies:{fold_corner_01:["这个吗？","我借的时候就已经这样了。"],coffee_stain_01:["啊……","喝东西的时候不小心碰到了。"]}}];class Mv{constructor(){this.books=new Map([["book_lighthouse_001",new or("book_lighthouse_001",vl.id,[vv])],["book_city_rain_001",new or("book_city_rain_001",xl.id)]]),this.index=0,this.records=[],this.active=null}begin(){if(this.active)return this.active;const e=$l[this.index];if(!e)return null;const t=this.books.get(e.bookInstanceId);if(e.type==="return"&&(t.status!=="ON_LOAN"||t.holderCustomerId!==e.customerId))return this.index++,this.begin();for(const i of e.beforeArrival?.addDamage||[])t.damages.some(s=>s.id===i.id)||t.damages.push(structuredClone(i));return e.type==="return"&&(t.status="IN_RETURN_TRANSACTION"),this.active={step:e,book:t,definition:Nu[t.definitionId],transaction:new Du({type:e.type,customerId:e.customerId,bookId:t.definitionId,bookInstanceId:t.instanceId,actualIdentityMatch:!0,damageProfile:t.visualDamages(),existingDamageBeforeLoan:[...t.existingDamageBeforeLoan]})},this.active}complete(e){if(!this.active||e!==this.active.transaction||!e.record)return!1;const{book:t,step:i}=this.active;return i.type==="borrow"&&e.decision==="borrow"?(t.existingDamageBeforeLoan=t.damages.filter(s=>s.active).map(s=>s.id),t.status="ON_LOAN",t.holderCustomerId=i.customerId):(t.status="IN_LIBRARY",t.holderCustomerId=null),this.index++,this.records.push(e.record),this.active=null,!0}}const Jl=[{id:"literature",label:["LITERATURE","文学"],position:[-2.1,0,3.6]},{id:"history",label:["HISTORY","历史"],position:[-.7,0,3.6]},{id:"nature",label:["NATURE","自然"],position:[.7,0,3.6]},{id:"science",label:["SCIENCE","科普"],position:[2.1,0,3.6]}],Us=[{...Nu["distant-lighthouse"],category:"literature",content:["他离开家乡很多年，再回到海边时，灯塔仍在黄昏准时亮起。守灯人递给他一杯热茶，谁也没有先说话。","风把信纸吹向窗边。他压住纸角，想起母亲曾说，海上的灯不问归期，只负责在天黑以后等着。","船越走越远，故乡缩成一道细线。他终于明白，留在岸上的那些日子，也会陪着人一起远行。"]},{id:"before-rain-ends",title:"雨停之前",englishTitle:["BEFORE THE","RAIN ENDS"],category:"literature",art:"rain",coverColor:"#40525d",content:["她把伞靠在窗边，坐回熟悉的位置。街上的行人渐渐稀少，玻璃映着她的脸，也映着对面那扇亮灯的窗。","那封信一直留在抽屉里。雨停之前，她又读了一遍开头，终于在空白的纸上写下第一句话。","窗外有人收起了伞。她端着温热的杯子，想起很久以前，他们也是这样并排等过一场雨。"]},{id:"harbour-years",title:"港口年代",englishTitle:["HARBOUR","YEARS"],category:"history",art:"port",coverColor:"#594433",content:["十九世纪末，旧港扩建了第一座石砌码头。船运账册中的货物数量，记录着这座城市从渔村到商埠的变化。","本章对照一九二三年的港区地图与海关档案，整理仓库、铁路和船坞的位置，复原当时码头的日常运作。","工人留下的口述记录补充了报纸未曾提及的生活。潮汐时刻表、工资簿和家书，共同构成港口的历史。"]},{id:"old-city-archive",title:"旧城档案",englishTitle:["OLD CITY","ARCHIVES"],category:"history",art:"city",coverColor:"#807660",content:["这张测绘图完成于一九三一年。街巷的旧称标注在建筑轮廓旁，与今日路名对照，可以辨认城市扩张的方向。","市政会议纪要记载了供水系统的修建经过。工程分为三期，先沿主街铺设，再逐步进入居民密集的支路。","修复老建筑时，门牌、砖印与住户档案互相印证。它们让一栋普通房屋重新获得了准确的年代和姓名。"]},{id:"woodland-notes",title:"林间观察",englishTitle:["WOODLAND","NOTES"],category:"nature",art:"plant",coverColor:"#324a38",content:["蕨类常生长在阴湿的林下。翻看成熟叶片的背面，可以见到排列整齐的孢子囊群，它们并不是虫卵。","清晨是观察林鸟的好时段。保持安静，先听鸣声，再辨认喙形与尾羽；记录时间、天气和树木所在的位置。","落叶下的菌丝分解枯枝，让养分回到土壤。观察时轻轻拨开表层，结束后将落叶盖回，保留原来的湿度。"]},{id:"light-machines",title:"光与机械",englishTitle:["LIGHT &","MACHINES"],category:"science",art:"gear",coverColor:"#3f505d",content:["光通过凸透镜时会发生折射。将屏幕缓缓移到焦点附近，可以得到清晰的倒立像，这也是相机成像的基础。","两只啮合齿轮的转速与齿数成反比。小齿轮带动大齿轮时，输出转速降低，而传递的转矩相应增大。","测量杠杆两端的力臂，可以预测平衡的位置。支点不是力的来源，它改变的是施力的方向与所需的大小。"]},{id:"night-sky-guide",title:"夜空图鉴",englishTitle:["A GUIDE TO","THE NIGHT SKY"],category:"science",art:"sky",coverColor:"#293c60",recommendationTags:["astronomy","science","children","beginner","illustrated"],content:["月亮不会自己发光，它反射太阳的光。每天看一看，亮的部分在慢慢改变。","把明亮的星星连起来，就像一把小勺子。找一找，北斗七星在哪里？","地球和其他行星一起绕着太阳转。太阳是一颗会自己发光的恒星。"]}],Sv={literature:[["长街来信","LETTERS / HOME","#695148","rain","沈杉","邮差把最后一封信放进门缝。她认出信封上的字，却先去厨房烧了一壶水。|信里没有解释远行的原因，只写了沿途几座小城，以及车站卖的热栗子。|她把回信折成三折，写上仍然记得的地址。第二天清晨，街口的邮筒还挂着露水。"],["河岸慢行","RIVER / WALK","#4c605c","port","许渚","河堤修好以后，老人每天多走一站。他在转弯处停下，看渡船留下的波纹。|少年问对岸有什么。他说有菜市场和旧电影院，还有一条他没有走完的路。|入冬前最后一次散步，芦苇已全白了。老人把手放进口袋，慢慢往桥的方向走。"],["雪原短歌","SNOW / SONGS","#69737b","lighthouse","顾原","雪盖住车辙，也盖住院里那把旧椅子。屋内的人挪开窗边的杯子，为一只鸟留出地方。|清晨的脚印在门外排成两行。他循着脚印去送柴，回来时已经分不清哪行属于自己。|春天从屋檐滴下第一滴水。她收起厚围巾，听见远处有人试着发动那辆沉睡的卡车。"],["末班电车","THE LAST / TRAM","#6a604a","city","唐路","售票员把零钱摊在掌心，数完又收好。今晚的末班车只载着一个抱花的乘客。|电车经过旧学校时慢了下来。乘客隔着窗指了指，说那里从前有一棵很高的树。|终点站到了，花还没有送出去。售票员关掉车灯，替他指向仍亮着灯的小路。"],["茶凉以前","BEFORE / THE TEA COOLS","#695c55","plant","林素","邻居来借梯子，坐下以后却聊起了春天。茶壶里的水快空了，梯子还靠在院墙上。|她记不清那个人的脸，只记得雨鞋在门口排得很齐，走时还把门闩轻轻带上。|多年以后搬家，她在壁橱后找到一只茶杯。杯底的缺口，像一句没有接完的话。"],["远山旅店","MOUNTAIN / INN","#585f4b","rain","陆岑","旅店的钥匙挂在木板上，每把下面都有手写的房号。老板问他要不要靠山的一间。|半夜风大，窗闩轻轻响着。他披衣起来，发现走廊尽头还放着一壶温水。|离开时他没有带走桌上的地图。有人会沿着同一条山路来，也需要知道哪里可以歇脚。"],["小院四季","FOUR / SEASONS","#5c6646","plant","周槐","春天的第一件事是修篱笆。她把新枝插在旧木旁，留下一道能看见街口的缝。|夏夜他们把饭桌搬到院里。没有人急着收碗，葡萄叶在灯下投出缓慢的影子。|冬天菜畦空了，院子显得比从前大。他扫净石阶，等邻居家的孩子来踩第一场雪。"],["异乡日记","AWAY / FROM HOME","#536073","port","程舟","新房间只有一扇朝西的窗。他把行李放下，先找到附近可以买面包的地方。|学会认路以后，他不再数经过几个路口。面包店的老板也开始记得他习惯买什么。|搬走前一晚，他在日记里写下窗外的树。一个陌生地方，原来也能慢慢成为故乡。"],["沿线灯火","LIGHTS / ALONG THE LINE","#795e48","lighthouse","闻遥","列车进山以前，窗外出现了成排的灯。她按亮手表，离约定的时间还有两个小时。|身旁的乘客睡着了。她替他扶住快掉下来的书，读到书签上一个很普通的名字。|天亮时列车靠站。她在人群里看见熟悉的外套，忽然不需要再低头确认时间。"]],history:[["石桥旧记","THE STONE / BRIDGE","#6c6350","port","方砚","桥身东侧的石刻记录了最初的建造年份。修缮报告显示，今日栏杆属于后来补建的部分。|渡口账簿保存着修桥以前的通行费用。比较汛期记录，可以理解居民为什么持续要求建桥。|桥旁的商铺曾数次更名。结合地契与旧照片，本章列出街市沿河发展的大致顺序。"],["城墙之外","BEYOND / THE WALL","#685849","city","魏衡","早期城门外分布着货栈与集市。地方志记载，运送柴米的车辆通常在天亮前到达。|城墙拆除之后，原护城河逐步改为排水渠。不同年份的地图保留了这一变化的痕迹。|本章选录三位居民的回忆，并与工程档案对读。个人记忆能补充细节，却不能独自确定年代。"],["邮路百年","A CENTURY / OF POST","#7a5546","rain","宋简","驿站以更换人马维持长途通信。道路状况和季节，会显著影响文书送达的时间。|近代邮局使用统一邮资和邮戳。信封上的转运日期，让研究者能够复原当年的运输路线。|铁路延伸后，一些旧邮路停止使用。沿线小镇留下的邮局建筑，保存着公共服务变迁的线索。"],["钟楼往事","THE OLD / CLOCK TOWER","#6c6b59","gear","钟仪","钟楼落成时，广场仍以露天市场为主。施工账单列出了石料、木架和铸钟的支出。|维修日志记录过一次停钟。机械零件的磨损程度，与当时工匠采用的保养方式有关。|后来城市开始统一报时，钟楼的实用功能逐渐减弱。它仍是老照片中辨认街区的重要标记。"],["铁路初年","EARLY / RAILWAYS","#4e5960","port","梁辙","第一段线路连接矿区与码头。货运量的增长，推动车站附近逐渐形成新的居民区。|时刻表不仅记录列车，也反映城市之间的联系。某些小站最初只在赶集日增加班次。|本章对照工人名册与家属口述，讨论铁路建设如何改变日常通勤和家庭生活。"],["纸上乡土","LOCAL / CHRONICLES","#786e59","plant","吴畴","地方志常按山川、物产和人物分类。阅读时应留意编写年代，以及编者选择材料的方式。|一份田亩清册能说明土地登记情况，却未必完整反映实际耕作。需要结合契约和水利记录。|本书保留旧地名的原字形，同时提供对应索引，便于读者追查同一地点在不同文献中的称呼。"],["市集图录","MARKET / ARCHIVE","#775e53","city","任集","画中的摊位沿街排列，招牌指向不同作坊。图像可以提示行业分布，也可能包含画家的安排。|度量衡的统一改变了交易习惯。本章展示几种旧秤砣，并说明铭文和校验印记的用途。|收市后的清扫和消防同样需要管理。街区公约记录了摊贩分担公共事务的具体办法。"],["海图沿革","CHARTING / THE COAST","#52696c","port","陶汐","早期海图常突出港湾和显著山形，供沿岸航行辨认。其比例与现代地图并不完全一致。|测量工具改进后，海岸线得到更准确的标绘。同一处岬角在不同时期图纸上有明显差别。|比较旧海图时，必须同时核对版本和坐标体系。岸线位置的变化也可能来自填海或泥沙沉积。"],["旧校年册","SCHOOL / ANNALS","#6b6158","rain","赵序","学校最初借用一栋民居授课。收支簿中的课桌采购单，提供了学生人数增长的旁证。|课程表留下了教育观念变化的痕迹。手工、算术和自然观察，在不同年份占有不同课时。|毕业合影背面的姓名，是整理校史的重要资料。辨认时应记录来源，并保留无法确认的部分。"]],nature:[["潮间带手册","BETWEEN / THE TIDES","#526b62","port","江汀","退潮后露出的岩石上，常见藤壶和帽贝。观察前应查好潮汐，留意回程可能被淹没的路径。|潮池里的生物需要应对温度与盐度变化。不要把海星带离水面，也不要随意移动遮阴的石块。|记录一种生物时，写下大小、颜色和附着位置。照片比带走标本更适合日常观察。"],["庭院来鸟","GARDEN / BIRDS","#697152","plant","乔羽","清晨先听叫声，再寻找枝叶间的轮廓。常见鸟也会因年龄与季节不同而呈现不同羽色。|观察喂食行为时保持距离。过度靠近巢穴可能让亲鸟停止返回，长焦镜头比伸手查看更合适。|记录表可以包括日期、天气和停留时间。连续观察同一处庭院，才能看出季节性的变化。"],["溪流生境","LIFE IN / THE STREAM","#466761","rain","杜溪","溪底石块之间有许多小型水生动物。水流速度、含氧量和底质共同决定它们的栖息位置。|蜉蝣与石蝇的幼体常藏在石下。短暂观察后，应把石块轻轻放回原处，避免破坏微小水域。|雨后水位可能快速上涨。采集记录不能代替安全判断，沿岸观察时应保留清楚的退路。"],["苔藓小世界","THE MOSS / WORLD","#4b6142","plant","莫青","苔藓没有真正的根，常用假根固定在表面。它们能够吸收水分，却不适合被长久泡在水中。|潮湿天气里，叶片展开，颜色显得鲜亮。干燥时收拢的姿态，是许多种类应对缺水的方式。|放大镜可以帮助辨认叶序和孢蒴。观察结束后不要刮走整片苔藓，让原有群落继续生长。"],["林地种子","WOODLAND / SEEDS","#726846","plant","叶实","翅果借助风传播，带钩的小果实可能附在动物身上。种子的外形往往与传播方式有关。|种子落地后不一定立即萌发。有些需要经历低温，或等待足够的水分和合适的光照。|把捡到的种子画在纸上，标注发现地点。不同树木果实成熟的时间，是识别树种的线索。"],["云的形状","FORMS / OF CLOUD","#627c7e","rain","白岚","积云常有清楚的轮廓和平坦的底部。空气上升冷却，水汽凝结，便形成了可见的云滴。|层云像铺开的薄毯，可能覆盖很大一片天空。云的高度与厚度，会影响地面看见的亮度。|观察云时同时记下风向和天气变化。单凭某一张云的照片，不能准确预测接下来几天的天气。"],["山径花历","TRAIL / BLOSSOMS","#795f67","plant","花芷","同一条山径，春夏开花的植物不同。海拔、坡向与遮阴，会让相近地点出现不同的花期。|辨认野花时不只看颜色，也要观察叶片、花瓣数量和生长方式。不要尝食无法确认的植物。|每月在同一地点拍照，能得到一份自己的花历。记录不必完整，持续观察比一次采集更重要。"],["湿地夜听","WETLAND / SOUNDS","#4b6258","port","芦声","日落后的湿地依然活跃。蛙鸣、昆虫和水鸟的声音，来自不同距离与不同高度。|录音时应注明地点和风向。车辆与水泵的声音也要保留记录，避免把环境噪声误认成动物。|夜间观察应沿既有步道，减少强光照射。听见声音并不意味着需要走近寻找它的来源。"],["石滩拾趣","PEBBLES / ON THE SHORE","#6f7461","lighthouse","石澄","海浪反复搬动石块，使棱角逐渐磨圆。石面的条纹与颗粒，常能提示它原先属于哪类岩石。|深浅不同的色带可能来自矿物差异，也可能是后来的裂隙填充。潮湿会让颜色显得更鲜明。|把小石头放回原处前画一张速写。标出大小与纹理，比只记一个猜测的名称更有帮助。"]],science:[["声音的形状","SHAPES / OF SOUND","#665c78","gear","卢弦","声音来自物体振动，通过空气等介质传播。敲击不同大小的杯子，可以听到音高的变化。|频率与音高有关，振幅则影响声音强弱。两个声音听起来不同，还可能因为包含不同的泛音。|回声来自声波反射。距离足够远时，反射声与原声才能被耳朵分开辨认。"],["纸桥实验","PAPER / BRIDGES","#687365","city","许构","把纸平铺在两端之间，它很容易弯曲。折成连续褶皱后，同样的纸往往能承受更大的载荷。|实验时保持跨度和纸张相同，只改变折法。每次逐步增加相同的重物，记录开始变形的位置。|纸桥不能代表所有真实桥梁，但能帮助理解截面形状如何影响刚度。比较结果时也要记录失败。"],["电路入门","FIRST / CIRCUITS","#5b6679","gear","傅环","一个简单电路需要电源、导线和用电器。回路断开时，灯泡便不能持续发光。|串联元件处于同一条电流路径。并联支路两端连接到相同节点，改变一支路不一定切断另一支路。|练习只使用低压电池和合适元件，不接触市电。连接之前确认极性，避免直接短接电池两端。"],["水的旅程","WATER / IN MOTION","#4e6b7a","rain","温澜","液态水吸热可以蒸发，水蒸气遇冷能够凝结。厨房玻璃上的小水滴，是容易观察的例子。|水在陆地、海洋和大气之间持续循环。降水的一部分汇入河流，另一部分进入土壤或重新蒸发。|同样的水量放在不同容器里，蒸发速度可能不同。表面积、温度和空气流动都会影响结果。"],["磁针与方向","MAGNETS / AND DIRECTION","#6d5e68","gear","秦向","磁针受到磁场作用，会趋向一定方向。把小磁铁靠近指南针，能观察到指针发生偏转。|地理北方与磁北方向并不总是重合。使用地图和指南针时，应了解当地磁偏角。|铁制桌面和电子设备可能干扰测量。实验时远离这些物体，多次读数后再比较结果。"],["透镜小课","LOOKING / THROUGH LENSES","#66717f","lighthouse","顾镜","透镜利用折射改变光的传播方向。凸透镜与凹透镜的外形不同，对平行光的作用也不同。|移动物体、透镜和屏幕，可以观察像的大小与方向变化。记录距离时要始终使用同一个测量基准。|不要用透镜直视太阳，也不要把聚光点对准眼睛。普通台灯已经足够用于简单成像实验。"],["杠杆与天平","LEVERS / AND BALANCE","#77634d","gear","杨衡","把尺子放在支点上，两端放置小重物。改变重物与支点的距离，会改变尺子的平衡状态。|转动效果既取决于力，也取决于力臂。讨论杠杆时，要说明施力方向与支点的位置。|天平需要先调零，再比较两侧物体。风和桌面倾斜都可能影响读数，因此应重复测量。"],["材料为什么","EVERYDAY / MATERIALS","#6d756c","city","岳质","金属、木材与塑料触摸起来不同，并不只因为温度不同。它们传递热量的能力也有差异。|材料的硬度与韧性不是一回事。玻璃较硬却容易脆裂，而某些柔软材料可以承受较大的形变。|选择材料要考虑用途、成本和使用环境。没有一种材料能在所有条件下同时表现最好。"],["长度的尺度","MEASURING / THE WORLD","#786e60","port","纪度","测量需要共同的单位。记录一张桌子的长度时，数字旁应注明使用的是米、厘米还是毫米。|尺子的最小刻度限制读数精度。换用更细的刻度，也不能消除尺子歪放和视线偏斜造成的误差。|多次测量可以发现偶然差异。写下结果时保留合理位数，并说明采用的方法和测量条件。"]]};for(const[n,e]of Object.entries(Sv))e.forEach(([t,i,s,r,o,a],l)=>Us.push({id:`${n}-collection-${l}`,title:t,englishTitle:i.split(" / "),category:n,coverColor:s,art:r,author:o,coverStyle:l%4,coverSeed:l+1,content:a.split("|")}));for(const n of Us)n.recommendationTags??=[n.category];const Mh=[[-2.94,.885,-2.42],[-2.68,.094,-2.13],[-1.46,.094,-2.05],[.85,.094,-3.45],[3.62,.094,-1.05],[1.95,.094,-.18]];class Ev{books=new Map;slots=[];taskBookIds=[];heldBookId=null;result=null;constructor(){Us.slice(0,Mh.length).forEach((t,i)=>{const s=`shelving_${t.id}`;this.taskBookIds.push(s),this.books.set(s,{...new or(s,t.id),category:t.category,location:{type:"scattered",position:Mh[i]}})});for(const t of Jl){const i=Us.filter(r=>r.category===t.id&&r.id.includes("-collection-"));let s=0;for(let r=0;r<12;r++){const o=r%3*2+(r>=6?1:0),a=Math.floor(r/3)%2,l={slotId:`${t.id}_${r}`,shelfId:t.id,category:t.id,localPosition:[-.45+o*.18,a?1.57:.73,.075],localRotation:[0,Math.PI/2,0],occupantBookId:null};if([0,2,4].includes(r)||r>=6){const h=i[s++],c=`shelf_${l.slotId}`;l.occupantBookId=c,this.books.set(c,{...new or(c,h.id),category:h.category,location:{type:"shelf",shelfId:t.id,slotId:l.slotId}})}this.slots.push(l)}}const e=this.slots.find(t=>t.slotId==="science_5");e.occupantBookId="book_night_sky_guide_001",this.books.set(e.occupantBookId,{...new or(e.occupantBookId,"night-sky-guide"),category:"science",location:{type:"shelf",shelfId:"science",slotId:e.slotId}})}pickup(e){const t=this.books.get(e);if(!t||this.heldBookId)return!1;const i=this.slots.find(s=>s.occupantBookId===e);return i&&(i.occupantBookId=null),t.location={type:"held"},this.heldBookId=e,this.result=null,!0}removeFromShelf(e){return this.getBookLocation(e)?.type==="shelf"&&this.pickup(e)}place(e,t,i){const s=this.slots.find(r=>r.slotId===i&&r.shelfId===t);if(!s||s.occupantBookId||e!==this.heldBookId||!this.books.has(e))return!1;if(s.occupantBookId=e,this.books.get(e).location={type:"shelf",shelfId:t,slotId:i},this.heldBookId=null,this.isTaskComplete()){const r=this.getFinalLayout(),o=r.filter(a=>a.isCorrect).length;this.result={taskBookIds:[...this.taskBookIds],finalPlacements:r,correctPlacementCount:o,wrongPlacementCount:r.length-o,completedAt:new Date().toISOString()}}return!0}getBookLocation(e){return this.books.get(e)?.location}getPendingBooks(){return this.taskBookIds.filter(e=>this.getBookLocation(e).type!=="shelf")}isTaskComplete(){return!this.heldBookId&&!this.getPendingBooks().length}getFinalLayout(){return[...this.books.keys()].flatMap(e=>{const t=this.books.get(e),i=t.location;if(i.type!=="shelf")return[];const s=this.slots.find(r=>r.slotId===i.slotId);return[{bookId:e,actualCategory:t.category,shelfId:s.shelfId,shelfCategory:s.category,slotId:s.slotId,isCorrect:t.category===s.category}]})}}function yv(n,{returnMode:e=!1}={}){const t=new Map,i=[],s=Ma("#483326"),r=Ma("#62462e");ke("#262521");const o=ke("#292b25"),a=ke("#8e7750",{metalness:.45,roughness:.48}),l=ke("#675f48"),h=ke("#293e3b"),c=ke("#152737");oe(n,[11,.16,10],[0,-.08,-.9],Ma("#4a4031"));for(let B=-5;B<5;B+=.54)oe(n,[.008,.006,9.5],[B,.008,-.9],ke("#262c28"));oe(n,[11,.18,10],[0,3.65,-.9],ke("#292a22")),oe(n,[.2,3.8,9.5],[-5.25,1.8,-.9],l),oe(n,[.2,3.8,9.5],[5.25,1.8,-.9],l),oe(n,[10.5,3.8,.2],[0,1.8,3.95],l);for(const B of[-4.25,4.25])oe(n,[1.95,3.8,.24],[B,1.8,-4.4],l),oe(n,[1.96,.94,.26],[B,.48,-4.22],h);oe(n,[7,.14,.23],[0,.07,-4.45],h),oe(n,[7,.33,.23],[0,3.49,-4.45],s);const u=new mp({color:"#9baab0",transparent:!0,opacity:.055,roughness:.3,metalness:.05,depthWrite:!1});oe(n,[5.85,3.25,.025],[-.575,1.77,-4.48],u).castShadow=!1;for(const B of[-3.5,-2.32,-1.16,0,1.16,2.32,3.5])oe(n,[.085,3.02,.17],[B,1.96,-4.31],o);for(const B of[.15,1.14,3.39])oe(n,[B===3.39?7.15:5.85,.075,.16],[B===3.39?0:-.575,B,-4.3],o);const d=new Ft;d.position.set(2.35,0,-4.21),n.add(d);for(const B of[0,1.08])oe(d,[.065,3.33,.1],[B,1.665,0],s);for(const B of[.04,3.33])oe(d,[1.15,.065,.1],[.54,B,0],s);oe(d,[1.02,3.2,.025],[.54,1.665,-.012],u).castShadow=!1,oe(d,[.04,.43,.04],[.9,1.7,.095],a),oe(d,[.72,.045,.06],[.54,1.05,.09],a);const p=Pn(d,.36,.2,[.54,2.32,.062],Xn(["OPEN LATE"],{w:512,h:256,bg:"#283f37",ink:"#c7b68a",size:42}));for(const B of[-4.6,-2.45,2.45,4.6])oe(n,[.11,.18,8.6],[B,3.49,-.6],s);for(const B of[-3.7,-.5,2])oe(n,[10,.14,.14],[0,3.48,B],s);function g(B,re,xe=1.65,se=2.62,V){const Y=new Ft;Y.position.set(B,0,re),Y.rotation.y=Math.PI,n.add(Y),t.set(V.id,Y),oe(Y,[.6,.035,.12],[0,2.4,.35],o),oe(Y,[.48,.008,.09],[0,2.378,.35],ke("#c9b488",{emissive:"#d8b882",emissiveIntensity:.65}));const Me=new li("#e5cca6",1.3,3.2,2);Me.position.set(0,2.23,1.02),Y.add(Me),i.push([Me,Me.intensity]),oe(Y,[xe,se,.1],[0,se/2,-.18],ke("#302920"));for(const Oe of[-1,1])oe(Y,[.09,se,.49],[Oe*(xe/2),se/2,.02],s);for(const Oe of[.4,1.24,2.08])oe(Y,[xe+.12,.085,.53],[0,Oe,.03],s);oe(Y,[xe+.18,.12,.57],[0,2.13,.03],s),Pn(Y,.74,.19,[0,2.25,.308],Xn(V.label,{w:512,h:192,bg:"#302d25",ink:"#b6a079",size:40}))}Jl.forEach(B=>g(B.position[0],B.position[2],1.14,2.16,B)),oe(n,[1.42,.085,.78],[-2.55,.76,-2.45],s);for(const B of[-3.1,-2])for(const re of[-2.7,-2.2])oe(n,[.055,.73,.055],[B,.37,re],o);for(const B of[-3.35,-1.82]){oe(n,[.39,.065,.4],[B,.43,-2.15],s),oe(n,[.38,.38,.055],[B,.7,-2.32],s);for(const re of[-.15,.15])for(const xe of[-.14,.14])oe(n,[.038,.4,.038],[B+re,.21,-2.15+xe],o)}function v(B,re,xe,se=1){Qt(n,.16*se,.19*se,.045*se,[B,re,xe],a),Qt(n,.018*se,.021*se,.47*se,[B,re+.245*se,xe],a);const V=Qt(n,.115*se,.27*se,.18*se,[B,re+.56*se,xe],ke("#2b5142",{roughness:.48}),12);Qt(n,.2*se,.2*se,.012,[B,re+.475*se,xe],ke("#ffe3a2",{emissive:"#ffd27a",emissiveIntensity:2.2}),12);const Y=new li("#ffd098",2.5*se,2.5*se,2);return Y.position.set(B,re+.42*se,xe),n.add(Y),xe<0&&i.push([Y,Y.intensity]),V}v(-2.55,.82,-2.48,.75);function m(B,re,xe=1){const se=new Ft;se.position.set(B,0,re),se.scale.setScalar(xe),n.add(se),Qt(se,.2,.14,.32,[0,.18,0],ke("#564735")),Qt(se,.013,.018,.68,[0,.63,0],ke("#384631"),6);for(let V=0;V<6;V++){const Y=new Ct(new Ro(.27),ke(V%2?"#394e34":"#2d4738")),Me=V*2.4;Y.scale.set(.42,1,.18),Y.position.set(Math.cos(Me)*.18,.48+V*.046,Math.sin(Me)*.15),Y.rotation.set(Math.sin(Me)*.7,0,Math.cos(Me)*.65),se.add(Y)}}m(-3.45,-3.55,1.16),m(3.48,-3.5,.95),oe(n,[5.45,.16,1.82],[0,.97,1.31],r),oe(n,[5.25,.83,.12],[0,.47,.44],s),oe(n,[5.5,.043,.045],[0,1.025,2.2],a);for(const B of[-2.68,2.68])oe(n,[.08,.87,1.77],[B,.49,1.3],s);v(-1.73,1.063,.36,.88);const f=oe(n,[1.39,.012,.79],[0,1.057,1.19],ke("#293d38")),T=new Ft;T.position.set(-1.14,1.055,.87),n.add(T),oe(T,[.69,.044,.65],[0,.022,0],s);for(const B of[-.335,.335])oe(T,[.035,.13,.65],[B,.073,0],s);oe(T,[.69,.13,.035],[0,.073,-.305],s),oe(T,[.69,.09,.035],[0,.052,.305],s);const E=Pn(T,.35,.063,[0,.055,.324],Xn([e?"归 还":"待 处 理"],{w:512,h:128,bg:"#b9ad89",ink:"#3b4438",size:48})),_=new Ft;_.position.set(1.22,1.056,.84),n.add(_);const R=ke("#242e2c",{roughness:.55});oe(_,[.64,.075,.69],[0,.037,0],R),oe(_,[.44,.025,.45],[0,.086,.065],ke("#364b3f",{roughness:.35})),oe(_,[.13,.34,.12],[.17,.21,-.22],R),oe(_,[.57,.25,.22],[0,.47,-.2],R,[-.12,0,0]);const A=Pn(_,.44,.155,[0,.474,-.077],Xn(["TERMINAL 03","READY"],{w:768,h:256,bg:"#263d2c",ink:"#9dcf89",size:45}),[-.12,0,0],!0),w=oe(_,[.035,.013,.008],[.24,.398,-.075],ke("#bbd78b",{emissive:"#a5dd6b",emissiveIntensity:1.4})),P=oe(_,[.43,.003,.008],[0,.101,.08],ke("#a9db81",{emissive:"#80c36b",emissiveIntensity:1}));P.visible=!1;const M=new Ft;M.position.set(-.08,1.075,1.83),M.rotation.set(-Math.PI/2,0,-.035),n.add(M),oe(M,[.57,.34,.023],[0,0,0],s),Pn(M,.51,.295,[0,0,.013],Ei(768,448,(B,re,xe)=>{B.fillStyle="#b5aa87",B.fillRect(0,0,re,xe),B.fillStyle="#545b49",B.font="29px Georgia",B.fillText("NIGHT SHIFT LOG",45,63),B.font="18px Microsoft YaHei",B.fillText("夜间借阅登记",45,104),B.strokeStyle="#6c766244";for(let se=153;se<xe-20;se+=42)B.beginPath(),B.moveTo(45,se),B.lineTo(re-45,se),B.stroke();for(const se of[198,440,588])B.beginPath(),B.moveTo(se,127),B.lineTo(se,xe-27),B.stroke()}));const S=Qt(n,.008,.008,.27,[.34,1.079,1.82],ke("#222f2c"),6);S.rotation.z=Math.PI/2,S.rotation.y=.19;const L=Qt(n,.08,.066,.16,[1.88,1.14,1.36],ke("#bcac88"),12);Qt(n,.068,.068,.002,[1.88,1.223,1.36],ke("#312820"),12);const F=new Ct(new Co(.055,.013,5,12),L.material);F.position.set(1.965,1.16,1.36),n.add(F);for(let B=0;B<3;B++){const re=oe(n,[.52,.072,.33],[-1.95,1.09+B*.078,1.59],ke(["#48514a","#65473c","#3b4b50"][B]));re.rotation.y=B*.09,Pn(n,.42,.047,[-1.94,1.095+B*.078,1.762],Xn([["QUIET PLACES","ASTRONOMY","NIGHT ARCHIVES"][B]],{w:512,h:100,bg:["#48514a","#65473c","#3b4b50"][B],ink:"#b6a986",size:38}))}oe(n,[30,.1,24],[0,-.11,-12],ke("#142536",{roughness:.3,metalness:.12})),oe(n,[8,5,1.8],[-.7,2.3,-13],ke("#243c51",{emissive:"#1b344e",emissiveIntensity:.4})),oe(n,[8.4,.22,2],[-.7,4.85,-13],ke("#18232c")),oe(n,[3.7,6.8,2],[7,3.2,-16],c),oe(n,[3.8,4.6,2],[-8,2.2,-14],c);for(let B=-3.9;B<3;B+=1.15)for(const re of[.9,2.25,3.65]){const xe=ps()>.55,se=ke(xe?"#b59859":"#213945",xe?{emissive:"#b27e35",emissiveIntensity:.6}:{emissive:"#1f394c",emissiveIntensity:.3});oe(n,[.64,.84,.04],[B,re,-12.075],se),oe(n,[.035,.84,.05],[B,re,-12.03],o),oe(n,[.65,.035,.05],[B,re,-12.03],o)}const W=Ei(128,512,(B,re,xe)=>{const se=B.createLinearGradient(0,0,0,xe);se.addColorStop(0,"#e6be7600"),se.addColorStop(.35,"#e6be7688"),se.addColorStop(.8,"#bba77955"),se.addColorStop(1,"#bfa77b00"),B.fillStyle=se;const V=Er(51);for(let Y=0;Y<xe;Y+=4+V()*10){const Me=12+V()*85;B.globalAlpha=.15+V()*.8,B.fillRect((re-Me)/2+(V()-.5)*20,Y,Me,2+V()*3)}});for(const[B,re]of[[-2.7,-7],[2.8,-8],[6,-11],[-6,-10]]){Qt(n,.045,.07,2.78,[B,1.39,re],o,7),oe(n,[.3,.09,.31],[B,2.82,re],o),oe(n,[.22,.18,.22],[B,2.7,re],ke("#f5d49b",{emissive:"#ffcf82",emissiveIntensity:2.6}));const xe=new li("#ffc77f",6,4.5,2);xe.position.set(B,2.6,re),n.add(xe);const se=new Ct(new zs(1,5),new Ji({map:W,transparent:!0,opacity:.55,depthWrite:!1,blending:co}));se.rotation.x=-Math.PI/2,se.position.set(B,-.045,re+1.5),n.add(se)}for(const[B,re]of[[-3.9,-7.5],[4.4,-8.8],[-1.7,-10.5]]){Qt(n,.04,.12,3.4,[B,1.7,re],ke("#17292d"),5);for(let xe=0;xe<7;xe++){const se=xe*2.7,V=Qt(n,.009,.035,.85,[B+Math.cos(se)*.23,1.6+xe*.21,re+Math.sin(se)*.2],ke("#1a2c2f"),5);V.rotation.z=Math.cos(se)*.8,V.rotation.x=Math.sin(se)*.6}}const J=500,k=new Float32Array(J*6),$=new Float32Array(J);for(let B=0;B<J;B++){const re=B*6;k[re]=(ps()-.5)*20,k[re+1]=ps()*7,k[re+2]=-4.7-ps()*13,k[re+3]=k[re]+.025,k[re+4]=k[re+1]+.13+ps()*.12,k[re+5]=k[re+2],$[B]=2.2+ps()*2.6}const Q=new un;Q.setAttribute("position",new Gn(k,3));const q=new Df(Q,new lu({color:"#85a9bb",transparent:!0,opacity:.12,depthWrite:!1}));n.add(q),n.add(new vp("#8b9caa","#3b3020",.26));const fe=new Mp("#ffd3a0",11,8,Math.PI/3,.75,1.5);fe.position.set(-1.25,3.28,1.4),fe.target.position.set(0,1.05,.15),fe.castShadow=!0,fe.shadow.mapSize.set(1024,1024),fe.shadow.bias=-3e-4,fe.shadow.normalBias=.025,n.add(fe,fe.target);const Ee=new li("#ffe0b4",1.9,4,2);Ee.position.set(.9,2.3,1.2),n.add(Ee);const we=new li("#93b7d5",4.5,5,2);we.position.set(0,2.6,-2.9),n.add(we);for(const[B,re]of[[-1.2,.9],[1.8,-2.6],[-2.8,-3.1]])if(oe(n,[.87,.07,.37],[B,3.42,re],o),oe(n,[.73,.016,.26],[B,3.376,re],ke("#ead6a2",{emissive:"#ffd39a",emissiveIntensity:1.3})),re<0){const xe=new li("#f5bd78",2.2,4,2);xe.position.set(B,3.22,re),n.add(xe),i.push([xe,xe.intensity])}return{door:d,scanner:_,reject:T,screen:A,scanLine:P,led:w,mat:f,sortingShelves:t,closed:!1,lockedFromOutside:!1,canExitFromInside:!0,setReadingProgress(B){i.forEach(([re,xe])=>re.intensity=xe*(1-.05*B))},setClosed(B=1){this.closed||(p.material.map.dispose(),p.material.map=Xn(["CLOSED"],{w:512,h:256,bg:"#283f37",ink:"#c7b68a",size:48}),this.closed=!0,this.lockedFromOutside=!0),i.forEach(([re,xe])=>re.intensity=xe*(1-.2*B))},setReturnMode(B){const re=E.material.map;E.material.map=Xn([B?"归 还":"待 处 理"],{w:512,h:128,bg:"#b9ad89",ink:"#3b4438",size:48}),re.dispose()},update(B,re){for(let xe=0;xe<J;xe++){const se=xe*6,V=$[xe]*B;k[se+1]-=V,k[se+4]-=V,k[se+4]<0&&(k[se+1]+=7,k[se+4]+=7)}Q.attributes.position.needsUpdate=!0,P.visible&&(P.position.z=.07+Math.sin(re*13)*.19)},setScanner(B){const re=A.material.map;A.material.map=Xn([B?"借 阅 完 成":"READY / 待机"],{w:768,h:256,bg:B?"#4d613e":"#263d2c",ink:B?"#eff4bf":"#9dcf89",size:45}),re.dispose()}}}class Tv{constructor(){this.ctx=null,this.muted=!1,this.master=null,this.ambience=null,this.ambienceVolume=.28,this.layers=[]}async start(){if(this.ctx){await this.ctx.resume();return}this.ctx=new AudioContext;const e=this.ctx;this.master=e.createGain(),this.master.gain.value=this.muted?0:.5,this.master.connect(e.destination),this.ambience=e.createGain(),this.ambience.gain.value=this.ambienceVolume,this.ambience.connect(this.master);const t=e.createBuffer(1,e.sampleRate*4,e.sampleRate),i=t.getChannelData(0);let s=0;for(let u=0;u<i.length;u++){const d=Math.random()*2-1;s=(s+.018*d)/1.02,i[u]=s*3+d*.08}const r=e.createBufferSource();r.buffer=t,r.loop=!0;const o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=2400;const a=e.createGain();a.gain.value=.06,r.connect(o).connect(a).connect(this.ambience),r.start();const l=e.createOscillator();l.type="sine",l.frequency.value=62;const h=e.createGain();h.gain.value=.003,l.connect(h).connect(this.ambience),l.start();const c=new URL("audio/",document.baseURI);this.loading=Promise.allSettled([this.loadLayer(new URL("indoor-rain-508962.mp3",c),.12,1550,47,-.08),this.loadLayer(new URL("room-tone-192529.mp3",c),.075,620,71,.08)]).then(u=>(u.some(d=>d.status==="fulfilled")&&(a.gain.setTargetAtTime(0,e.currentTime,1.5),h.gain.setTargetAtTime(0,e.currentTime,1.5)),u))}async loadLayer(e,t,i,s,r){const o=await fetch(e,{signal:AbortSignal.timeout(5e3)});if(!o.ok)throw new Error(`Audio unavailable: ${o.status}`);const a=await this.ctx.decodeAudioData(await o.arrayBuffer()),l=this.prepareLoop(a),h=this.ctx,c=h.createBufferSource();c.buffer=l,c.loop=!0;const u=h.createBiquadFilter();u.type="lowpass",u.frequency.value=i;const d=h.createGain();d.gain.value=0;const p=h.createStereoPanner();p.pan.value=r,c.connect(u).connect(d).connect(p).connect(this.ambience);const g=h.createOscillator(),v=h.createGain();g.frequency.value=1/s,v.gain.value=t*.18,g.connect(v).connect(d.gain),d.gain.setTargetAtTime(t,h.currentTime,2),c.start(0,Math.random()*l.duration),g.start(),this.layers.push({url:e,source:c,volume:d,filter:u,modulation:g})}prepareLoop(e){const t=Math.min(Math.floor(e.sampleRate*.7),Math.floor(e.length/4)),i=this.ctx.createBuffer(e.numberOfChannels,e.length-t,e.sampleRate);let s=0,r=0;for(let l=0;l<i.numberOfChannels;l++){const h=e.getChannelData(l),c=i.getChannelData(l);for(let u=0;u<c.length;u++){const d=u/t*Math.PI/2;c[u]=u<t?h[e.length-t+u]*Math.cos(d)+h[u]*Math.sin(d):h[u],s+=c[u]*c[u],r=Math.max(r,Math.abs(c[u]))}}const o=Math.sqrt(s/(i.length*i.numberOfChannels)),a=Math.min(.18/Math.max(o,1e-4),.65/Math.max(r,1e-4));for(let l=0;l<i.numberOfChannels;l++){const h=i.getChannelData(l);for(let c=0;c<h.length;c++)h[c]*=a}return i}setAmbienceVolume(e){this.ambienceVolume=Math.min(1,Math.max(0,Number(e)||0)),this.ambience&&this.ambience.gain.setTargetAtTime(this.ambienceVolume,this.ctx.currentTime,.15)}setDoorOpen(e){const t=this.layers.find(i=>String(i.url).includes("indoor-rain"));t&&(t.volume.gain.setTargetAtTime(e?.15:.12,this.ctx.currentTime,.3),t.filter.frequency.setTargetAtTime(e?2100:1550,this.ctx.currentTime,.3))}toggle(){return this.muted=!this.muted,this.master&&this.master.gain.setTargetAtTime(this.muted?0:.5,this.ctx.currentTime,.15),!this.muted}tone(e,t=.13,i=.12,s=0){if(!this.ctx)return;const r=this.ctx,o=r.currentTime+s,a=r.createOscillator(),l=r.createGain();a.type="sine",a.frequency.value=e,l.gain.setValueAtTime(0,o),l.gain.linearRampToValueAtTime(i,o+.008),l.gain.exponentialRampToValueAtTime(.001,o+t),a.connect(l).connect(this.master),a.start(o),a.stop(o+t+.02)}bell(){this.tone(1318,.75,.05),this.tone(1760,.7,.025,.12)}scan(){this.tone(1174,.14,.15),this.tone(1568,.25,.1,.095)}paper(e=.09){if(!this.ctx)return;const t=this.ctx,i=t.createBuffer(1,t.sampleRate*.16,t.sampleRate),s=i.getChannelData(0);for(let a=0;a<s.length;a++)s[a]=(Math.random()*2-1)*(1-a/s.length)*e;const r=t.createBufferSource();r.buffer=i;const o=t.createBiquadFilter();o.type="bandpass",o.frequency.value=1350,r.connect(o).connect(this.master),r.start()}tap(){this.tone(175,.09,.025)}}const bv={title:"夜航",englishTitle:["NIGHT","PASSAGE"],coverColor:"#35414a",art:"rain",personal:!0,content:["末班车驶过桥面，雨水沿着车窗缓缓落下。靠窗的旅人收好车票，看见河对岸还有一盏灯亮着。","小巷里的店铺关了门，屋檐替晚归的人留下一小块干燥的地方。他站在那里，等一阵雨过去。","港口的船早已停稳，水面把岸边的灯拉得很长。有人把围巾叠好，放在明天要带走的行李上。","回家的路并不远。经过最后一个路口时，他放慢了脚步，想起桌上留着半杯茶，和一本尚未读完的书。"]};class Av{times=["21:47","21:51","21:55","21:58","22:00"];readPages=new Set;readingEvents=[];page=0;dwell=0;get advances(){return this.readPages.size}get time(){return this.times[Math.min(this.advances,4)]}get ready(){return this.advances>=4}update(e,t){return e!==this.page&&(this.page=e,this.dwell=0),e<1||e>4||this.readPages.has(e)||(this.dwell+=t,this.dwell<2)?!1:(this.readPages.add(e),!0)}}const wv=[[-2.725,2.725,.4,2.22],[-3.26,-1.84,-2.84,-2.06],[-3.55,-3.15,-2.5,-1.95],[-2.02,-1.62,-2.5,-1.95],[-.76,-.34,-3.66,-3.24],[-3.7,-3.2,-3.8,-3.3],[3.23,3.73,-3.75,-3.25],...Jl.map(n=>[n.position[0]-.64,n.position[0]+.64,n.position[2]-.3,n.position[2]+.24])];function Ml(n,e){return n>-5.05+.21&&n<5.05-.21&&e>-4.05+.21&&e<3.8-.21&&!wv.some(([i,s,r,o])=>n>i-.21&&n<s+.21&&e>r-.21&&e<o+.21)}function Rv(n,e,t,i,s,r=()=>!1){const o=Math.hypot(t,i);if(!o)return!1;const a=1.45*Math.min(s,.05)/o,l=(Math.cos(e)*i-Math.sin(e)*t)*a,h=(-Math.cos(e)*t-Math.sin(e)*i)*a,c=n.x,u=n.z;return Ml(n.x+l,n.z)&&!r(n.x+l,n.z)&&(n.x+=l),Ml(n.x,n.z+h)&&!r(n.x,n.z+h)&&(n.z+=h),n.x!==c||n.z!==u}function Cv(n,e,t){const i=new Map,s=[],r=new Ji({transparent:!0,opacity:0,depthWrite:!1});for(const o of t.slots){const a=e.get(o.shelfId),l=oe(a,[.17,.62,.02],[o.localPosition[0],o.localPosition[1],.34],r);l.castShadow=l.receiveShadow=!1,l.userData.slotId=o.slotId,s.push(l)}for(const o of t.books.values()){const a=Us.find(h=>h.id===o.definitionId),l=Lo({...a,deferPages:!0});if(l.scale.z=1.7,l.userData.shelvingBookId=o.instanceId,i.set(o.instanceId,l),o.location.type==="shelf"){const h=t.slots.find(c=>c.slotId===o.location.slotId);e.get(h.shelfId).add(l),l.position.fromArray(h.localPosition),l.rotation.set(...h.localRotation)}else n.add(l),l.position.fromArray(o.location.position),l.rotation.set(-Math.PI/2,0,.15*(i.size%3-1))}return{books:i,slotTargets:s}}const Pv=[{id:"elder",type:"elder",name:"老人",position:[-1.82,0,-2.15],yaw:-Math.PI/2,standAt:[-1.28,0,-2.15],route:[[-1.28,-1.5],[2.85,-1.5],[2.85,-3.55]],reminder:"您好，已经闭馆了。",lines:["啊……已经这么晚了。","不好意思，我这就走。"]},{id:"headphones",type:"headphones",name:"年轻读者",position:[-.55,0,-3.45],yaw:.25,standAt:[-.55,0,-2.95],route:[[1.6,-2.95],[2.85,-3.55]],reminder:"不好意思，图书馆已经闭馆了。",lines:["啊？已经关门了吗？","抱歉，我没注意时间。"]},{id:"child",type:"child",name:"小孩",position:[-4.2,0,-.05],yaw:Math.PI/2,standAt:[-4.2,0,-.05],route:[[-3.08,-.05],[-3.08,-.8],[2.85,-.8],[2.85,-3.55]],reminder:"已经闭馆了，该回家了。",lines:["我再看最后一页。","好吧。"]}];class Iv{active=!1;dialogueTarget=null;exitApproach=null;talkDistance=1.8;constructor(){this.visitors=structuredClone(Pv).map(e=>({...e,state:"LINGERING",hasBeenNoticed:!1,hasBeenAskedToLeave:!1,hasExited:!1,hasStood:!1,standProgress:0,routeIndex:0,atDoor:!1}))}getVisitor(e){return this.visitors.find(t=>t.id===e)}getLingeringVisitors(){return this.visitors.filter(e=>!e.hasExited)}canTalkTo(e,t){const i=this.getVisitor(e);return!!(this.active&&!this.dialogueTarget&&i?.state==="LINGERING"&&Math.hypot(i.position[0]-t.x,i.position[2]-t.z)<=this.talkDistance)}notice(e){const t=this.getVisitor(e);return!this.active||!t||t.state!=="LINGERING"||t.hasBeenNoticed?!1:(t.hasBeenNoticed=!0,t.type==="child"&&(t.hasStood=!0),!0)}startLeaveSequence(e,t){if(!this.canTalkTo(e,t))return!1;this.notice(e);const i=this.getVisitor(e);return i.hasBeenAskedToLeave=!0,i.state="DIALOGUE",this.dialogueTarget=e,!0}prepare(e){const t=this.getVisitor(e);return t?.state!=="DIALOGUE"?!1:(t.state="PREPARING_TO_LEAVE",t.hasStood=!0,!0)}leave(e){const t=this.getVisitor(e);return t?.state!=="PREPARING_TO_LEAVE"?!1:(t.state="LEAVING",this.dialogueTarget=null,!0)}markExited(e){const t=this.getVisitor(e);return t?.state!=="LEAVING"||!t.atDoor?!1:(t.hasExited=!0,t.state="EXITED",this.exitApproach===e&&(this.exitApproach=null),!0)}isCleared(){return this.active&&this.visitors.every(e=>e.hasExited)}blocksPlayer(e,t){return this.visitors.some(i=>!i.hasExited&&Math.hypot(i.position[0]-e,i.position[2]-t)<.44)}standPosition(e,t){const i=this.getVisitor(e),[s,,r]=i.standAt;return[i.standAt,[s,0,r-.9],[s,0,r+.9],[s+1,0,r],[s-1,0,r]].find(o=>{if(!Ml(o[0],o[2]))return!1;const a=o[0]-i.position[0],l=o[2]-i.position[2],h=Math.max(0,Math.min(1,((t.x-i.position[0])*a+(t.z-i.position[2])*l)/(a*a+l*l||1)));return Math.hypot(i.position[0]+h*a-t.x,i.position[2]+h*l-t.z)>=.44})||[...i.position]}update(e,t){for(const i of this.visitors){if(i.hasStood&&(i.standProgress=Math.min(1,i.standProgress+e/.65)),i.state!=="LEAVING"||i.atDoor)continue;if(i.routeIndex>=i.route.length-2){if(this.exitApproach&&this.exitApproach!==i.id)continue;this.exitApproach=i.id}const[s,r]=i.route[i.routeIndex],o=s-i.position[0],a=r-i.position[2],l=Math.hypot(o,a),h=Math.min(l,e*(i.type==="elder"?.65:.85));if(l>.001){const c=i.position[0]+o/l*h,u=i.position[2]+a/l*h;if(Math.hypot(c-t.x,u-t.z)<.48||this.visitors.some(p=>p!==i&&!p.hasExited&&Math.hypot(c-p.position[0],u-p.position[2])<.5))continue;i.position[0]=c,i.position[2]=u;const d=Math.atan2(o,a);i.yaw+=Math.atan2(Math.sin(d-i.yaw),Math.cos(d-i.yaw))*Math.min(1,e*6)}l<=h+.001&&++i.routeIndex===i.route.length&&(i.atDoor=!0)}}}function Lv(n,e){const t=new Ft,i=new Map;t.visible=!1,n.add(t);const s=ke("#b9ad8e"),r=ke("#45534a"),o=ke("#403a2d"),a=oe(t,[.42,.08,.42],[-.55,.43,-3.45],o);for(const c of[-.15,.15])for(const u of[-.15,.15])oe(t,[.045,.42,.045],[-.55+c,.21,-3.45+u],o);oe(t,[.035,1.5,.035],[-1,.75,-3.55],o),oe(t,[.35,.045,.18],[-.89,1.5,-3.55],ke("#56624e")),oe(t,[.29,.01,.14],[-.89,1.472,-3.55],ke("#c4b68c",{emissive:"#bda56e",emissiveIntensity:.4}));const l=new li("#e9c99e",.8,2.3,2);l.position.set(-.78,1.4,-3.45),t.add(l);for(const c of e.visitors){const u={...Wi.A,id:c.id,name:c.name,hairStyle:"short",hairColor:c.type==="elder"?"#8f8b7d":"#302b25",glasses:c.type==="elder",shirtColor:c.type==="child"?"#675640":c.type==="elder"?"#575348":"#3b5058",scarfColor:"#746957"},d=Io(u);d.userData.clearingVisitorId=c.id,c.type==="child"&&d.scale.setScalar(.6);const p=new Ft;d.add(p);for(const f of[-1,1])oe(p,[.17,.18,.43],[f*.14,.47,.15],o),oe(p,[.16,.4,.18],[f*.14,.25,.29],o);const g=new Ft;oe(g,[.36,.045,.26],[0,0,0],r),oe(g,[.33,.018,.24],[0,.03,0],s);const v=oe(g,[.17,.008,.24],[-.085,.045,0],r);d.userData.body.add(g),g.position.set(0,.94,.36),g.rotation.x=-.15;let m;if(c.type==="headphones"){const f=new Ft;d.userData.head.add(f);const T=ke("#242b2b");oe(f,[.59,.055,.08],[0,.32,0],T);for(const E of[-1,1]){oe(f,[.055,.25,.08],[E*.28,.2,0],T);const _=oe(f,[.09,.19,.16],[E*.29,.025,0],T);E===1&&(m=_)}}t.add(d),i.set(c.id,{model:d,seatedLegs:p,readingBook:g,leaf:v,earCup:m})}function h(c,u){for(const d of e.visitors){const{model:p,seatedLegs:g,readingBook:v,leaf:m,earCup:f}=i.get(d.id);p.visible=!d.hasExited,p.position.fromArray(d.position),p.rotation.y=d.yaw;const T=d.standProgress,E=T<1,_=p.userData;for(const w of p.children)w!==_.body&&w!==g&&(w.visible=!E);g.visible=E,_.body.position.y=-(d.type==="child"?.65:.43)*(1-T)+Math.sin(u*1.15)*.003,_.body.rotation.x=(d.type==="elder"&&d.state==="LINGERING"?.13:.02)*(1-T);const R=d.state==="LINGERING"?.3:0;_.head.rotation.x+=(R-_.head.rotation.x)*Math.min(1,c*2),_.arms.forEach((w,P)=>{w.rotation.x=d.state==="LEAVING"?Math.sin(u*5+P*Math.PI)*.14:-.65*(1-T)}),_.legs.forEach((w,P)=>w.rotation.x=d.state==="LEAVING"&&!d.atDoor?Math.sin(u*5+P*Math.PI)*.22:0),m.rotation.z=Math.PI*(1-T);const A=d.type==="elder"?1.26:.94;v.position.set(.3*T,A+(.86-A)*T,.36-.32*T),v.rotation.x=-.15+1.5*T,f&&(f.position.y=.025-.2*T),_.eyes.forEach(w=>w.scale.y=d.type==="elder"&&d.state==="LINGERING"?.15:1)}}return h(1,0),{group:t,models:i,stool:a,update:h}}const Dv={id:"night_request_01",visitorId:"chen_yao",requiredTags:["astronomy","beginner","illustrated"],acceptableBookIds:["book_night_sky_guide_001"]},ms={profile:{...Wi.A,id:"chen_yao",name:"陈遥",hairStyle:"short",hairColor:"#242a2c",shirtColor:"#27373e",scarfColor:"#465150"},outsidePath:[[6,0,-5.6],[2.85,0,-5.6],[2.85,0,-4.9]],lines:[["陈遥","不好意思。"],["陈遥","我知道已经关门了。"],["陈遥","我想明天来借一本书……能不能先请你帮我推荐一本？"],["你","你想找什么样的？"],["陈遥","是给我妹妹看的。"],["陈遥","她最近总问我天上的星星为什么会亮。"],["陈遥","最好图多一点，别太难。"],["你","等一下，我找找看。"]]};class Nv{phase=null;visitorState="ABSENT";result=null;asked=!1;constructor(e,t=Dv){this.shelves=e,this.request=structuredClone(t)}startWaiting(){return this.phase?!1:(this.phase="NIGHT_RECOMMENDATION_WAIT",!0)}spawnVisitor(){return this.phase!=="NIGHT_RECOMMENDATION_WAIT"||this.visitorState!=="ABSENT"?!1:(this.visitorState="APPROACHING",!0)}startRequest(){return!["WAITING","SEARCHING"].includes(this.visitorState)||this.result||this.asked&&this.shelves.heldBookId?!1:(this.visitorState="TALKING",this.phase="NIGHT_RECOMMENDATION_REQUEST",this.asked=!0,!0)}finishRequest(){this.visitorState="SEARCHING",this.phase="NIGHT_RECOMMENDATION_SEARCH"}getCurrentRequest(){return structuredClone(this.request)}canPresent(e){return this.visitorState==="SEARCHING"&&!this.result&&!!e&&this.shelves.heldBookId===e&&this.shelves.books.has(e)}submitRecommendation(e){return this.canPresent(e)?(this.result={requestId:this.request.id,visitorId:this.request.visitorId,recommendedBookId:e,acceptableBookIds:[...this.request.acceptableBookIds],isCorrect:this.request.acceptableBookIds.includes(e),presentedAt:new Date().toISOString(),visitorExitedAt:null},this.visitorState="RESPONDING",this.phase="NIGHT_RECOMMENDATION_PRESENT",!0):!1}markVisitorExited(){return!this.result||this.result.visitorExitedAt?!1:(this.visitorState="EXITED",this.result.visitorExitedAt=new Date().toISOString(),!0)}get recommendedBookReshelved(){return!!this.result&&this.shelves.getBookLocation(this.result.recommendedBookId)?.type==="shelf"}getResult(){return structuredClone(this.result)}isComplete(){return!!this.result?.visitorExitedAt&&this.recommendedBookReshelved&&!this.shelves.heldBookId}}function Uv(n,e,{camera:t,audio:i,tween:s,wait:r,dialogue:o,focus:a,lockInput:l,run:h}){const c=Io(ms.profile);c.visible=!1,c.userData.recommendationVisitor=!0,c.position.fromArray(ms.outsidePath[0]),n.add(c);const u=new li("#9eb8d1",1.4,3,2);u.position.set(2.65,2.5,-4.65),u.visible=!1,n.add(u);let d=0,p=!1,g=0,v=0;const m=P=>P*P*(3-2*P);async function f(P,M){p=!0;const S=c.position.clone();await s(M,L=>c.position.lerpVectors(S,new C(...P),L)),p=!1}async function T(){c.visible=u.visible=!0,c.rotation.y=-Math.PI/2,await f(ms.outsidePath[1],4),await s(.5,M=>c.rotation.y=-Math.PI/2*(1-m(M))),await f(ms.outsidePath[2],1),e.visitorState="KNOCKING";const P=c.userData.arms[1];await s(.35,M=>P.rotation.x=-1.2*m(M));for(let M=0;M<3;M++){v++;const S=.016/(1+t.position.distanceTo(c.position)*.2);i.tone(165,.11,S),await s(.16,L=>P.rotation.x=-1.2-Math.sin(L*Math.PI)*.13),await r(.33)}await s(.35,M=>P.rotation.x=-1.2*(1-m(M))),e.visitorState="WAITING"}async function E(P){for(const[M,S]of P){const L=Math.max(1.5,S.length*.105);o(S,M,L),await r(L+.4)}}async function _(){e.visitorState="LEAVING",await s(.6,P=>c.userData.head.rotation.x=Math.sin(P*Math.PI)*.12),await f([2.85,0,-5.6],1),await s(.6,P=>c.rotation.y=Math.PI/2*m(P)),await f(ms.outsidePath[0],4),c.visible=u.visible=!1,e.markVisitorExited()}function R(){return Math.hypot(t.position.x-c.position.x,t.position.z-c.position.z)>1.9?!1:e.visitorState==="WAITING"&&!e.asked?!0:e.shelves.heldBookId?e.canPresent(e.shelves.heldBookId):["WAITING","SEARCHING"].includes(e.visitorState)&&!e.result}async function A(){if(!R())return;const P=e.asked,M=P?e.shelves.heldBookId:null;(M?e.submitRecommendation(M):e.startRequest())&&(l(!0),await a("DIALOGUE_FOCUS",c),M?(i.paper(.014),await r(.6),await E(e.result.isCorrect?[["陈遥","这个好像正合适。"],["陈遥","谢谢。那我明天再来借。"]]:[["陈遥","嗯……好像不是我想找的那种。"],["陈遥","不过还是谢谢你。"]])):await E(P?[["陈遥","就是给小孩子看的星空书，图多一点、别太难。"]]:ms.lines),await a("FREE_LOOK",c),l(!1),M?h(_()):e.finishRequest())}function w(P,M){e.phase&&(e.visitorState==="ABSENT"&&(d+=P,d>=5.5&&e.spawnVisitor()&&h(T())),e.isComplete()&&(e.phase="NIGHT_RECOMMENDATION_COMPLETE"),c.visible&&(c.userData.body.position.y=Math.sin(M*1.15)*.003,c.userData.legs.forEach((S,L)=>S.rotation.x=p?Math.sin(M*6+L*Math.PI)*.2:0),["WAITING","SEARCHING"].includes(e.visitorState)?(c.userData.head.rotation.y=Math.sin(M*.25)*.26,c.userData.body.rotation.z=Math.sin(M*.7)*.006):c.userData.head.rotation.y*=Math.exp(-P*5),p&&M>g&&(i.tone(105,.09,.005/(1+t.position.distanceTo(c.position))),g=M+.65)))}return{actor:c,update:w,interact:A,canInteract:R,get label(){return e.asked&&e.shelves.heldBookId?"推荐这本":"询问"},get diagnostics(){return{visitorState:e.visitorState,position:c.position.toArray(),visible:c.visible,quiet:d,knocks:v,request:e.getCurrentRequest(),result:e.getResult(),recommendedBookReshelved:e.recommendedBookReshelved}}}}const z=n=>document.getElementById(n),jn=new URLSearchParams(location.search),Ms=jn.get("dev")==="1",Uu=jn.get("touch")==="1";let _n=Uu||matchMedia("(pointer: coarse)").matches;_n&&document.body.classList.add("touch-mode");const Ss=jn.get("mode");let ct="DAY_COUNTER",bi=!1,gt=null;const en=new Av,st=new Ev,at=new Iv,_s=new Nv(st);let Sh=0,Sa=0,Eh=0,Sl=!1,vo=null,Ut=null;const In=new Set,vn={forward:0,sideways:0};let Tn=null;window.addEventListener("pointerdown",n=>{Uu||!["mouse","touch"].includes(n.pointerType)||(_n=n.pointerType==="touch",document.body.classList.toggle("touch-mode",_n),_n||(vn.forward=vn.sideways=0,Tn=null))},!0);const Ot=()=>ct.startsWith("NIGHT_"),Yt=()=>ct==="DAY_COUNTER"?Ge.phase:At==="OBJECT_INSPECT"?"BOOK_INSPECT":bi||st.heldBookId?"BOOK_HELD":"ITEMS_PLACED";let Ai=jn.get("case")==="B"?"B":"A";const Vs=jn.get("mode")==="memory",Jn=Vs?new Mv:null;let bn=Jn?.begin(),kt=jn.get("mode")==="return";const tr=Kl[Ai],Ou={lin_zhou:{...Wi.A,id:"lin_zhou",name:"林舟",hairStyle:"short",shirtColor:"#34463c"},zhou_ning:{...Wi.B,id:"zhou_ning",name:"周宁"}};let Yn=Vs?Ou[bn.step.customerId]:Wi[Ai],Bt=null,xo=null,Zl=null,El=0;const Fu=6,Bu=250;let mn=!1,Ae=!1,Cn=null,Vn=!1,tn=!1,Vt=0,At="COUNTER_FREE",vr="free",fn=0,ku=0,zu=0,Xi=0;const Ws=[.42,-.22,-1.05],yr=[-.12,-.35,.08];let ar=0,lr=0,oo=0,ao=0,Es=0,ys=0,Kt=0,$t=0,Gt=0,yh=performance.now(),Th,yl,Tl=!1,bh,Ah,wh;const Rh=new Set;let Ch=37,Ph=53,Ih=0;const Ln=new he(0,0),Ea=lt.degToRad(5),ya=lt.degToRad(3),it=new Tv,lo=[],ft=new Rf;ft.background=new $e("#152e45");ft.fog=new Fl("#142a38",.022);const de=new pn(67,innerWidth/innerHeight,.035,48);de.position.set(0,1.67,2.64);de.rotation.order="YXZ";de.rotation.x=-.12;ft.add(de);let Ht;try{Ht=new ov({antialias:!0,powerPreference:"high-performance"})}catch(n){throw z("fatal").hidden=!1,z("fatal").textContent="无法创建 3D 画面。请使用支持 WebGL 2 的桌面浏览器，并开启硬件加速。",n}Ht.setSize(innerWidth,innerHeight);Ht.setPixelRatio(Math.min(devicePixelRatio,_n?1:1.5));Ht.shadowMap.enabled=!0;Ht.shadowMap.type=Uh;Ht.toneMapping=Al;Ht.toneMappingExposure=.88;z("game").appendChild(Ht.domElement);const Zi=new uv(Ht);Zi.addPass(new Cu(ft,de));const qi=new Cu(ft,de);qi.clear=!1;qi.clearDepth=!0;const Ov=qi.render.bind(qi);qi.render=(...n)=>{const e=de.layers.mask,t=ft.background;de.layers.set(1),ft.background=null;try{Ov(...n)}finally{de.layers.mask=e,ft.background=t}};Zi.addPass(qi);Zi.addPass(new Ns(new he(innerWidth,innerHeight),.15,.45,1.25));Zi.addPass(new fv);const Hu=new Ru({uniforms:{tDiffuse:{value:null},uTime:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform sampler2D tDiffuse;uniform float uTime;varying vec2 vUv;void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;float n=fract(sin(dot(vUv*vec2(1300.,800.)+mod(uTime,10.),vec2(12.9898,78.233)))*43758.5453);c+=(n-.5)*.018;gl_FragColor=vec4(c,1.);}"});Zi.addPass(Hu);const St=yv(ft,{returnMode:kt}),Mo=Cv(ft,St.sortingShelves,st),As=Lv(ft,at),yi=Uv(ft,_s,{camera:de,audio:it,tween:ut,wait:dt,dialogue:Lt,run:Dt,focus:(n,e)=>rn(n,n==="FREE_LOOK"?.45:.55,"door",e),lockInput:n=>{Ae=n,In.clear(),vn.forward=vn.sideways=0}}),Do=Lo(bv),jl=[.7,1.105,1.69];Do.position.fromArray(jl);Do.rotation.set(-Math.PI/2,0,-.09);ft.add(Do);const kn=new li("#fff0d0",1.3,1.65,2);kn.position.set(-.25,.22,.12);de.add(kn);ft.traverse(n=>{n.isLight&&n.layers.enable(1)});let et=Io(Yn);ft.add(et);et.position.set(2.9,0,-4.85);et.visible=!1;let xr=Vs?Yn:Wi.A,Pt=Pu(xr),Re=Lo(Vs?{...bn.definition,damageProfile:bn.book.visualDamages()}:kt?tr.book:void 0);const Ta=new Map([[Yn.id,{person:et,card:Pt}]]),ba=new Map(Vs?[[bn.book.instanceId,Re]]:[]);ft.add(Pt,Re);Pt.visible=!1;Re.visible=!1;const No=new C(.35,1.073,1.2),Xs=new C(-.36,1.098,1.08),Yi=new Dn(-Math.PI/2,0,-.065);Pt.position.copy(No);Pt.rotation.copy(Yi);Re.position.copy(Xs);Re.rotation.copy(Yi);let Ge=bn?.transaction||new Du({type:kt?"return":"borrow",customerId:kt?tr.customerId:Wi[Ai].id,bookId:kt?tr.book.id:"midnight-atlas",damageProfile:kt?tr.book.damageProfile:[],existingDamageBeforeLoan:kt?tr.existingDamageBeforeLoan:[],actualIdentityMatch:Ai==="A"});const Fv=new Ji({transparent:!0,opacity:0,depthWrite:!1}),wi={};function ji(n,e,t){const i=oe(ft,e,t,Fv);return i.castShadow=!1,i.receiveShadow=!1,i.userData.name=n,wi[n]=i,i}ji("card",[.44,.08,.29],No.toArray());ji("book",[.48,.12,.62],Xs.toArray());ji("bookSlot",[.5,.1,.63],Xs.toArray());ji("scanner",[.64,.57,.68],[1.22,1.32,.84]);ji("reject",[.7,.18,.66],[-1.14,1.14,.87]);wi.return=wi.reject;kt&&(wi.return.userData.name="return");ji("customer",[.75,1.25,.45],[0,1.2,-.03]);ji("personalBook",[.47,.12,.61],jl);const Bv={photo:[47/1024,169/640,260/1024,315/640],name:[350/1024,185/640,610/1024,130/640],date:[350/1024,355/640,610/1024,90/640]},Ki=new Xl;Ki.layers.enable(1);function kv(n){et.removeFromParent(),Pt.removeFromParent(),Re.removeFromParent(),et.visible=Pt.visible=Re.visible=!1,bn=n,Ge=n.transaction,kt=Ge.type==="return",Yn=Ou[n.step.customerId],xr=Yn,Ta.has(Yn.id)||Ta.set(Yn.id,{person:Io(Yn),card:Pu(xr)}),{person:et,card:Pt}=Ta.get(Yn.id),ba.has(n.book.instanceId)||ba.set(n.book.instanceId,Lo(n.definition)),Re=ba.get(n.book.instanceId),Lu(Re,n.book.visualDamages()),ft.add(et,Pt,Re),et.visible=Pt.visible=Re.visible=!1,et.position.set(2.9,0,-4.85),et.rotation.set(0,0,0),Pt.position.copy(No),Pt.rotation.copy(Yi),Re.position.copy(Xs),Re.rotation.copy(Yi),Re.userData.cover.rotation.y=0,Vt=0,Vn=tn=Tl=!1,Bt=xo=Zl=Cn=null,Kt=$t=0,kn.position.set(-.25,.22,.12),wi.reject.userData.name=kt?"return":"reject",St.setReturnMode(kt),St.setScanner(!1),z("complete").querySelector("p").textContent=kt?"本次还书处理已记录":"本次借阅处理已记录",jt()}function ut(n,e){return new Promise(t=>{lo.push({elapsed:0,duration:n,update:e,resolve:t})})}function dt(n){return ut(n,()=>{})}const Et=n=>n*n*(3-2*n);async function rn(n,e=.7,t="face",i=et){if(Ot()){if(n==="DIALOGUE_FOCUS"){const h=i.userData.head.getWorldPosition(new C);h.y-=.08;const c=h.x-de.position.x,u=de.position.z-h.z,d=Math.atan2(-c,u);Ut={origin:de.position.clone(),startYaw:de.rotation.y,startPitch:de.rotation.x,yaw:de.rotation.y+Math.atan2(Math.sin(d-de.rotation.y),Math.cos(d-de.rotation.y)),pitch:Math.atan2(h.y-de.position.y,Math.hypot(c,u)),dx:0,dy:0,dolly:t==="door"?.01:.015},At="DIALOGUE_FOCUS"}const a=fn,l=n==="DIALOGUE_FOCUS"?1:0;await ut(e,h=>fn=lt.lerp(a,l,Et(h))),At=n,n==="FREE_LOOK"&&(de.position.copy(Ut.origin),de.rotation.set(Ut.startPitch,Ut.startYaw,0),Ut=null);return}if(At=n,vr=n==="DIALOGUE_FOCUS"?t:"free",n==="DIALOGUE_FOCUS"){const a=et.userData.head.getWorldPosition(new C);a.y-=.12,t==="damage"&&(a.x+=.07);const l=a.x-de.position.x,h=de.position.z-a.z;ku=Math.atan2(-l,h),zu=Math.atan2(a.y-1.67,Math.hypot(l,h))+.12}const s=fn,r=Xi,o=n==="DIALOGUE_FOCUS"?1:0;await ut(e,a=>{fn=lt.lerp(s,o,Et(a)),Xi=r*(1-Et(a))})}async function Aa(n,e,t=.5){vr=n;const i=Xi,s=lt.degToRad(e);await ut(t,r=>Xi=lt.lerp(i,s,Et(r)))}async function Zt(n,e,t,i,s=.32){n.traverse(h=>h.layers.set(e===de?1:0)),e.attach(n);const r=n.position.clone(),o=n.quaternion.clone(),a=new C(...t),l=new Fs().setFromEuler(new Dn(...i));await ut(s,h=>{const c=Et(h);n.position.lerpVectors(r,a,c),n.quaternion.slerpQuaternions(o,l,c)})}function Lt(n,e="访客",t=3.5){clearTimeout(yl),z("dialogue").hidden=!1,z("dialogue").querySelector("p").textContent=n,z("dialogue").querySelector(".speaker").textContent=e,yl=setTimeout(()=>z("dialogue").hidden=!0,t*1e3)}function Qn(n,e=2500){clearTimeout(Th),z("toast").textContent=n,z("toast").hidden=!1,Th=setTimeout(()=>z("toast").hidden=!0,e)}function zv(n){z("task-title").textContent=n,clearTimeout(bh),z("task").hidden=!1,bh=setTimeout(()=>z("task").hidden=!0,2800)}function jt(){const n=Yt();n!==wh&&(clearTimeout(Ah),z("inspect-help").hidden=!0,wh=n,["BOOK_HELD","BOOK_INSPECT","ID_HELD"].includes(n)&&!Rh.has(n)&&(Rh.add(n),z("inspect-help").hidden=!1,z("inspect-help").innerHTML=n==="BOOK_INSPECT"?"<span>左键拖动</span>旋转 <span>左右方向键 / 滚轮</span>翻页 <span>R</span>回到手中":n==="BOOK_HELD"?"<span>R</span>仔细查看 <span>左键</span>点击目标使用":"点击证件信息提问 · 点击顾客递还",Ah=setTimeout(()=>z("inspect-help").hidden=!0,5e3)))}async function Mr(n,e){const t=et.userData.arms[n],i=t.rotation.x;await ut(.28,s=>{t.rotation.x=lt.lerp(i,-1,Et(s))}),await e(),await ut(.28,s=>{t.rotation.x=-1*(1-Et(s))})}async function So(n,e){const t=et.position.clone(),i=new C(...n),s=i.x-t.x,r=i.z-t.z,o=Math.atan2(s,r),a=et.rotation.y;await ut(.25,l=>et.rotation.y=lt.lerp(a,o,Et(l))),await ut(e,l=>{et.position.lerpVectors(t,i,l);const h=Math.sin(l*e*8);et.userData.body.position.y=Math.abs(h)*.015,et.userData.legs[0].rotation.x=h*.28,et.userData.legs[1].rotation.x=-h*.28,et.userData.arms[0].rotation.x=-h*.14,et.userData.arms[1].rotation.x=h*.14}),et.userData.legs.forEach(l=>l.rotation.x=0),et.userData.arms.forEach(l=>l.rotation.x=0)}async function Hv(){if(!mn){if(mn=!0,Ae=!0,await it.start().catch(()=>Qn("当前浏览器未启用声音，画面与操作仍可继续。")),z("welcome").hidden=!0,document.body.classList.add("mobile-playing"),z("settings").hidden=!0,z("opening").hidden=!1,setTimeout(()=>z("opening").hidden=!0,2e3),z("reticle").hidden=!1,await dt(1.3),Ss==="closing")return Xu();if(["shelving","clearing","recommendation"].includes(Ss)){if(St.setClosed(),[1,2,3,4].forEach(n=>en.readPages.add(n)),document.querySelector(".clock").textContent="22:00",de.position.set(3.15,1.85,2.65),Yu(),["clearing","recommendation"].includes(Ss)){for(const n of st.taskBookIds){const e=st.slots.find(i=>!i.occupantBookId&&i.category===st.books.get(n).category);st.pickup(n),st.place(n,e.shelfId,e.slotId);const t=Mo.books.get(n);St.sortingShelves.get(e.shelfId).add(t),t.position.fromArray(e.localPosition),t.rotation.set(...e.localRotation)}if(Ku(),Ss==="recommendation"){for(const n of at.visitors)n.state="EXITED",n.hasExited=!0;Sl=!0,z("toast").hidden=!0,ct="NIGHT_CLEARING_COMPLETE"}}return}await Gu()}}async function Gu(){Ae=!0,Ge.dispatch("START"),it.bell(),et.visible=!0,await ut(.5,e=>St.door.rotation.y=-Et(e)*.95),await So([1.8,0,-3.3],.75),await ut(.5,e=>St.door.rotation.y=-(1-Et(e))*.95),await So([0,0,-.03],2.35);const n=et.rotation.y;await ut(.6,e=>{et.rotation.y=n*(1-Et(e))}),Ge.dispatch("ARRIVE"),zv(kt?"处理还书":"处理借阅"),await rn("DIALOGUE_FOCUS"),Lt(bn?.step.greeting||(kt?"你好，我来还书。":"晚上好，我想借这本书。")),await dt(1.4),await Promise.all([Aa("book",-2),Mr(0,async()=>{Re.visible=!0,Re.position.set(-.25,1.18,.34),Re.rotation.set(-.9,0,.1),await Zt(Re,ft,Xs.toArray(),Yi.toArray().slice(0,3),.38),it.tap()})]),kt||(await Aa("face",0,.35),Lt("这是我的借阅证。"),await Promise.all([Aa("card",-2),Mr(1,async()=>{Pt.visible=!0,Pt.position.set(.25,1.2,.4),Pt.rotation.set(-1,0,-.1),await Zt(Pt,ft,No.toArray(),Yi.toArray().slice(0,3),.3),it.paper()})])),await dt(.7),await rn("COUNTER_FREE",.5),Ge.dispatch("PLACE_ITEMS"),Ae=!1,jt()}async function Gv(n){const e=n==="card"?"PICK_ID":"PICK_BOOK";Ge.dispatch(e)&&(Ae=!0,Cn=null,z("dialogue").hidden=!0,jt(),it.paper(),n==="card"?await Zt(Pt,de,[.33,-.12,-.78],[0,-.04,0]):(Kt=$t=0,await Zt(Re,de,Ws,yr)),Ae=!1)}async function Eo(){Vn=!1,Vt=0;const n=Re.userData.cover.rotation.y;await ut(.3,e=>Re.userData.cover.rotation.y=n*(1-Et(e)))}async function Vu(){(ct==="DAY_COUNTER"?!Ge.dispatch("EXIT_INSPECT"):Yt()!=="BOOK_INSPECT")||(Ae=!0,tn=!1,Bt=null,Kt=$t=0,jt(),Vn&&await Eo(),await Zt(Re,de,Ws,yr),At=Ot()?"FREE_LOOK":"COUNTER_FREE",Ae=!1,jt(),Ot()&&ic(),ct==="CLOSING_READING"&&en.ready&&await Xv())}async function Vv(){Ge.dispatch("PUT_BOOK")&&(Ae=!0,it.tap(),await Zt(Re,ft,Xs.toArray(),Yi.toArray().slice(0,3)),Ae=!1,jt())}async function Ql(){(ct==="DAY_COUNTER"?!Ge.dispatch("INSPECT_AGAIN"):Yt()!=="BOOK_HELD")||(Ae=!0,Re.userData.preparePages(),At="OBJECT_INSPECT",document.pointerLockElement&&document.exitPointerLock(),jt(),it.paper(),await Zt(Re,de,[.12,ct==="CLOSING_READING"?-.13:-.025,-1.35],[.02,-.07,.015]),Ae=!1)}async function Tr(n){if(!mn||!z("settings").hidden||Yt()!=="BOOK_INSPECT"||Ae)return;const e=lt.clamp(Vt+n,0,Re.userData.pages.length);e!==Vt&&(Ae=!0,Kt=$t=0,tn=!1,Bt=null,it.paper(),e===0?await Eo():(Re.userData.page.material.map=Re.userData.pages[e-1],Vn||await ut(.38,t=>Re.userData.cover.rotation.y=-Et(t)*Math.PI*.94),Vn=!0,Vt=e,await dt(.16)),Ae=!1)}async function Lh(n){Ge.dispatch(n==="borrow"?"BORROW":"REJECT")&&(Ae=!0,jt(),await Zt(Re,ft,n==="borrow"?[1.22,1.205,.87]:[-1.14,1.155,.87],[-Math.PI/2,0,n==="borrow"?0:.04],.36),it.tap(),n==="borrow"?(St.scanLine.visible=!0,await dt(.33),it.scan(),St.setScanner(!0),St.scanLine.visible=!1,vr="scan-pause",await dt(.25)):(vr="reject-pause",Lt("这样啊……"),await dt(.3)),Ge.dispatch("RESPOND"),await rn("DIALOGUE_FOCUS",n==="borrow"?.7:.8),n==="borrow"&&(Lt("谢谢。"),await dt(.65),Lt("晚上辛苦了。")),n==="reject"&&(await ut(.25,e=>et.userData.head.rotation.y=-e*.24),await dt(.5),await ut(.25,e=>et.userData.head.rotation.y=-(1-e)*.24),Lt("那算了。")),await dt(1.1),Ge.cardReturned||await Mr(1,async()=>{await Zt(Pt,ft,[.25,1.2,.2],[-.7,0,0],.3),Pt.visible=!1}),n==="borrow"&&await Mr(0,async()=>{await Zt(Re,ft,[-.25,1.1,.22],[0,0,.06],.4),et.attach(Re)}),await Wu())}async function Wu(){if(await rn("COUNTER_FREE",.5),Ge.dispatch("LEAVE"),jt(),await So([1.85,0,-3.1],2.3),await ut(.5,n=>St.door.rotation.y=-Et(n)*.95),it.bell(),await So([2.9,0,-4.95],1),et.visible=!1,Ge.decision==="borrow"&&(Re.visible=!1),await ut(.6,n=>St.door.rotation.y=-(1-Et(n))*.95),Ge.dispatch("COMPLETE"),$v(),jt(),z("dialogue").hidden=!0,Jn){Jn.complete(Ge);const n=$l[Jn.index];if(n){await dt(n.delayBefore);const e=Jn.begin();if(e){kv(e),await Gu();return}}}Ae=!1,z("complete").hidden=!1,setTimeout(()=>z("complete").hidden=!0,3e3),z("dialogue").hidden=!0,Dt(Xu())}async function Xu(){await dt(2.5),ct="CLOSING_READING",Ae=!1,document.querySelector(".clock").textContent=en.time,z("complete").hidden=!0,Qn("离闭馆还有一会儿。")}async function Wv(){bi||ct!=="CLOSING_READING"||(Re=Do,bi=!0,Vn=!1,Vt=0,Kt=$t=0,Ae=!0,it.paper(),await Zt(Re,de,Ws,yr),Ae=!1,jt())}async function qu(){Ae=!0,await Zt(Re,ft,jl,[-Math.PI/2,0,-.09],.45),it.paper(.018),bi=!1,Ae=!1,jt()}async function Xv(){await qu(),Ae=!0,Lt("好了，下班了。","你",2),await dt(2.7),ct="CLOSING_TRANSITION",St.setClosed(0),it.tone(185,.07,.015),await ut(.6,e=>St.setClosed(Et(e)));const n=de.position.clone();it.paper(.016),await ut(1,e=>{de.position.y=n.y+.18*Et(e),de.position.z=n.z+.08*Et(e)}),Yu()}function Yu(){ct="NIGHT_FREE_ROAM",At="FREE_LOOK",fn=0,kn.position.set(0,.18,-.35),kn.intensity=1.5,kn.distance=2.4,kn.layers.set(1),In.clear(),Ae=!1,As.group.visible=!0,Qn("WASD 行走 · 点击画面环顾 · R 查看手中的书")}async function ec(){if(Ae||!gt)return;const n=gt;if(n.recommendation)return yi.interact();if(n.visitorId)return qv(n.visitorId);if(st.heldBookId){if(n.slot&&!n.slot.occupantBookId){const e=st.heldBookId,t=n.slot;Ae=!0;const i=St.sortingShelves.get(t.shelfId),s=[...t.localPosition];s[2]+=.2,await Zt(Re,i,s,t.localRotation,.22),await Zt(Re,i,t.localPosition,t.localRotation,.16),st.place(e,t.shelfId,t.slotId),it.paper(.018),it.tone(110,.07,.006),Ae=!1,st.isTaskComplete()&&!at.active&&(ct="NIGHT_SHELVING_COMPLETE",Qn("书都收起来了。",1400)),jt()}}else{const e=n.bookId||n.slot?.occupantBookId;if(!st.pickup(e))return;ct==="NIGHT_SHELVING_COMPLETE"&&(z("toast").hidden=!0),Re=Mo.books.get(e),Ae=!0,at.active||(ct="NIGHT_SHELVING"),Vt=0,Vn=!1,Kt=$t=0,it.paper(.022),await Zt(Re,de,Ws,yr),Ae=!1,jt()}}function Uo(){if(gt=null,z("interact").hidden=!0,z("reticle").hidden=At==="OBJECT_INSPECT"||!z("settings").hidden,z("reticle").style.left="50%",z("reticle").style.top="50%",Ht.domElement.style.cursor="default",!Ae&&At==="FREE_LOOK"&&z("settings").hidden){Ki.setFromCamera(new he,de);const e=new C(de.position.x,.8,de.position.z),t=Ki.intersectObjects(ft.children.filter(i=>i!==de&&!Object.values(wi).includes(i)),!0);for(const i of t){let s=i.object,r=!0,o,a,l;for(;s;)r&&=s.visible,o||=s.userData.shelvingBookId,a||=s.userData.clearingVisitorId,l||=s.userData.recommendationVisitor,s=s.parent;if(!r)continue;if(l){yi.canInteract()&&(gt={recommendation:!0});break}if(a){at.canTalkTo(a,de.position)&&!st.heldBookId&&(gt={visitorId:a,distance:Math.hypot(de.position.x-at.getVisitor(a).position[0],de.position.z-at.getVisitor(a).position[2])});break}if(i.object.material?.transparent&&!i.object.userData.slotId)continue;if(i.distance>2.4||e.distanceTo(i.point)>1.5)break;const h=st.slots.find(c=>c.slotId===i.object.userData.slotId);if((h||o)&&(gt={slot:h,bookId:o,distance:e.distanceTo(i.point)}),gt||!i.object.material?.transparent)break}}const n=gt&&(gt.recommendation||gt.visitorId||(st.heldBookId?gt.slot&&!gt.slot.occupantBookId:gt.bookId||gt.slot?.occupantBookId));z("reticle").classList.toggle("hot",!!n),(gt?.visitorId||gt?.recommendation)&&(z("interact").hidden=!1,z("interact").querySelector("span").textContent=gt.recommendation?yi.label:"提醒闭馆",z("interact").style.left=`${innerWidth/2+19}px`,z("interact").style.top=`${innerHeight/2+19}px`)}function Ku(){at.active=!0,ct="NIGHT_CLEARING",Qn("还有人没走吗……",1500)}async function qv(n){if(!at.startLeaveSequence(n,de.position))return;const e=at.getVisitor(n),t=As.models.get(n).model;Ae=!0,In.clear(),vn.forward=vn.sideways=0,e.type==="child"&&await dt(.65);const i=e.yaw,s=Math.atan2(de.position.x-e.position[0],de.position.z-e.position[2]),r=Math.atan2(Math.sin(s-i),Math.cos(s-i));await Promise.all([rn("DIALOGUE_FOCUS",.55,"face",t),ut(.65,l=>e.yaw=i+r*Et(l))]),Lt(e.reminder,"你",1.8),await dt(e.type==="headphones"?2.4:1.9),Lt(e.lines[0],e.name,1.8),await dt(2.3),Lt(e.lines[1],e.name,1.8),await dt(1.9),at.prepare(n),it.paper(.014),it.tone(100,.18,.007);const o=[...e.position],a=at.standPosition(n,de.position);await ut(.8,l=>{e.position=o.map((h,c)=>lt.lerp(h,a[c],Et(l)))}),await rn("FREE_LOOK",.45),at.leave(n),Ae=!1}async function Yv(n){vo=n.id,n.exiting=!0,it.tone(210,.09,.007),await ut(.5,i=>St.door.rotation.y=-.95*Et(i)),it.setDoorOpen(!0);const e=[...n.position],t=n.yaw;await ut(.25,i=>n.yaw=lt.lerp(t,Math.PI,Et(i))),await ut(2.4,i=>n.position[2]=lt.lerp(e[2],-5.5,i)),await ut(.6,i=>St.door.rotation.y=-.95*(1-Et(i))),it.setDoorOpen(!1),vo=null,await ut(.3,i=>n.yaw=lt.lerp(Math.PI,Math.PI/2,Et(i))),await ut(3.7,i=>n.position[0]=lt.lerp(2.85,6,i)),at.markExited(n.id)}function Dh(n,e){At==="DIALOGUE_FOCUS"&&Ut?(Ut.dx=lt.clamp(Ut.dx-n*.0012,-.035,.035),Ut.dy=lt.clamp(Ut.dy-e*.0012,-.026,.026)):!Ae&&At==="FREE_LOOK"&&(de.rotation.y-=n*.002,de.rotation.x=lt.clamp(de.rotation.x-e*.002,-1.35,1.25))}function tc(){return ct!=="DAY_COUNTER"||!kt||Ge.phase!=="BOOK_INSPECT"||Ae||!z("settings").hidden?null:(Ki.setFromCamera(Ln,de),Iu(Re,Ki,Vt))}async function Kv(n){if(!n||!Ge.dispatch("SELECT_DAMAGE",n.damageId))return;xo={rotation:Re.rotation.toArray().slice(0,3),quaternion:Re.quaternion.toArray(),page:Vt},Ae=!0,Bt=null,tn=!1,Kt=$t=0,jt(),it.paper(.018),Zl=n;const e=Re.position.clone(),t=Vn?new C(.78,-.32,-1.55):new C(.55,-.22,-1.35),i=new C(0,0,1).transformDirection(n.surface.matrixWorld),s=de.getWorldPosition(new C).sub($u(n)).normalize();El=Math.max(0,i.dot(s)*.85);const r=t.clone();t.copy(e);for(let h=1;h<=16&&(Re.position.lerpVectors(e,r,h/16),!!Ju(n,El));h++)t.copy(Re.position);Re.position.copy(e);const o=kn.position.clone(),a=new C(t.x,.18,-.55);await ut(.4,h=>{Re.position.lerpVectors(e,t,Et(h)),kn.position.lerpVectors(o,a,Et(h))}),Ge.dispatch("BEGIN_DIALOGUE"),await rn("DIALOGUE_FOCUS",.7,"damage"),Lt({scratch:"这里的封面为什么有一道划痕？",stain:"这一页上的污渍是怎么回事？",tear:"这一页怎么破了？",corner_fold:"这里为什么折了？"}[n.type],"你"),await dt(1.6);const l=bn?.step.damageReplies?.[n.damageId];Lt(l?.[0]||"啊……这个。"),await dt(.5),Lt(l?.[1]||"可能是不小心碰到哪里了。"),await dt(1.5),l||Lt("抱歉。"),await dt(.5),Ge.dispatch("SHOW_DECISION"),Ae=!1,z("damage-choice").hidden=!1,z("damage-choice").querySelector("button").focus()}function $u(n){Re.updateWorldMatrix(!0,!0);const e=n.surface.geometry.parameters;return n.surface.localToWorld(new C((n.uv.x-.5)*e.width,(n.uv.y-.5)*e.height,0))}function Ju(n,e=0){if(!n)return!1;const t=$u(n),i=de.getWorldPosition(new C),s=new C(0,0,1).transformDirection(n.surface.matrixWorld).dot(i.clone().sub(t).normalize()),r=new Xl(i,t.clone().sub(i).normalize());r.layers.enable(1);const o=t.clone().project(de);return s>=e&&Math.abs(o.x)<.94&&Math.abs(o.y)<.9&&Iu(Re,r,Vt)?.damageId===n.damageId}async function Zu(n){if(!(Ae||!z("settings").hidden||!Ge.dispatch(n.toUpperCase()))){if(Ae=!0,z("damage-choice").hidden=!0,jt(),n==="charge"?(Lt("这属于借阅期间造成的损坏，需要赔偿。","你"),await dt(1.8),Lt("好吧，我明白了。"),it.paper(.035)):n==="waive"&&Lt("谢谢。"),n!=="accept"){await dt(1.1),Vn&&await Eo(),await Zt(Re,de,Ws,yr),kn.position.set(-.25,.22,.12),await rn("COUNTER_FREE",.5),Ae=!1,jt();return}Vn&&await Eo(),await Zt(Re,ft,[-1.14,1.155,.87],[-Math.PI/2,0,.04],.4),kn.position.set(-.25,.22,.12),it.tap(),Ge.dispatch("RESPOND"),n==="accept"&&(await rn("DIALOGUE_FOCUS"),Lt("谢谢。")),await dt(1.1),await Wu()}}function $v(){if(!(Tl||!Ge.record)){Tl=!0;try{const n=JSON.parse(localStorage.getItem("nightfall-transactions")||"[]"),e=Array.isArray(n)?n:[];e.push(Ge.record),localStorage.setItem("nightfall-transactions",JSON.stringify(e.slice(-100)))}catch{Qn("本次处理已记录于当前会话；浏览器未允许本地保存。")}Ms&&console.info("Nightfall transaction",Ge.record)}}function Jv(){return Ae||!mn||!z("settings").hidden||!z("card-choice").hidden?[]:ct==="CLOSING_READING"?At==="OBJECT_INSPECT"?[]:["personalBook"]:ct!=="DAY_COUNTER"?[]:Ge.phase==="ITEMS_PLACED"?kt||Ge.cardReturned?["book"]:["card","book"]:Ge.phase==="ID_HELD"?["customer"]:Ge.phase==="BOOK_HELD"?kt?["return","bookSlot"]:["scanner","reject","bookSlot"]:[]}const Zv={card:"拿起",book:"拿起",customer:"递还证件",bookSlot:"放下",scanner:"放到借书机 · 借出",reject:"放入暂存盘 · 拒借",return:"放入归还托盘 · 收书",personalBook:"拿起 / 放下"};function Oo(){if(Ot())return Uo();const n=Jv();Ki.setFromCamera(Ln,de),Cn=Ki.intersectObjects(n.map(s=>wi[s]),!1)[0]?.object.userData.name||null;const t=(Ln.x+1)*innerWidth/2,i=(1-Ln.y)*innerHeight/2;z("reticle").style.left=`${t}px`,z("reticle").style.top=`${i}px`,z("reticle").classList.toggle("hot",!!Cn),z("reticle").hidden=!mn||!z("settings").hidden||Yt().endsWith("INSPECT")||ct==="DAY_COUNTER"&&Ge.phase==="TRANSACTION_COMPLETE",z("interact").hidden=!Cn,Cn&&(z("interact").querySelector("span").textContent=Cn==="personalBook"?bi?"放下":"拿起":Zv[Cn],z("interact").style.left=`${Math.min(t+19,innerWidth-265)}px`,z("interact").style.top=`${Math.min(i+19,innerHeight-90)}px`),Ht.domElement.style.cursor=Yt()==="BOOK_INSPECT"?tn?"grabbing":tc()?"pointer":"grab":Cn?"pointer":"default"}async function nc(){if(Ae||!Cn)return;const n=Cn;n==="personalBook"?await(bi?qu():Wv()):n==="card"||n==="book"?await Gv(n):n==="customer"?(clearTimeout(yl),z("dialogue").hidden=!0,z("card-choice").hidden=!1,z("return-card").focus()):n==="bookSlot"?await Vv():n==="scanner"?await Lh("borrow"):n==="reject"?await Lh("reject"):n==="return"&&await Zu("accept")}function Dt(n){n.catch(e=>{console.error(e),Ae=!1,At=Ge.phase==="BOOK_INSPECT"?"OBJECT_INSPECT":"COUNTER_FREE",fn=Xi=0,Qn("操作遇到问题，请刷新后重试。")})}function jv(){if(z("card-fields").hidden=Ge.phase!=="ID_HELD"||Ae||!z("settings").hidden||!z("card-choice").hidden,!z("card-fields").hidden)for(const n of z("card-fields").children){const[e,t,i,s]=Bv[n.dataset.field],r=[[e,t],[e+i,t],[e,t+s],[e+i,t+s]].map(([l,h])=>{const c=Pt.localToWorld(new C((l-.5)*.396,(.5-h)*.248,.005)).project(de);return[(c.x+1)*innerWidth/2,(1-c.y)*innerHeight/2]}),o=r.map(l=>l[0]),a=r.map(l=>l[1]);Object.assign(n.style,{left:`${Math.min(...o)}px`,top:`${Math.min(...a)}px`,width:`${Math.max(...o)-Math.min(...o)}px`,height:`${Math.max(...a)-Math.min(...a)}px`})}}async function Qv(n){if(Ae||Ge.phase!=="ID_HELD"||!z("card-choice").hidden||!z("settings").hidden)return;const e={photo:["这张照片和你现在看起来不太一样。",Ai==="A"?"是我，照片是前几年拍的。那时头发短一些。":"借阅证上……是以前的照片。我最近换了发型。"],name:["请问，证件上的姓名是你的名字吗？",`上面写的是${xr.name}。`],date:["这张借阅证的有效期，你确认过吗？","上个月续过期了，有效期印在证件上。"]};e[n]&&(Ae=!0,await rn("DIALOGUE_FOCUS"),Lt(e[n][0],"你"),await dt(1.6),Lt(e[n][1]),await dt(1.4),await rn("COUNTER_FREE",.5),Ae=!1)}async function ex(){Ae||!Ge.dispatch("RETURN_ID")||(Ae=!0,z("card-choice").hidden=!0,jt(),it.paper(),await Promise.all([rn("DIALOGUE_FOCUS"),Mr(1,async()=>{await Zt(Pt,ft,[.25,1.2,.2],[-.7,0,0],.4),Pt.visible=!1})]),Lt("谢谢。"),await dt(.65),await rn("COUNTER_FREE",.5),Ae=!1)}z("card-fields").querySelectorAll("button").forEach(n=>n.addEventListener("click",()=>Dt(Qv(n.dataset.field))));z("return-card").addEventListener("click",()=>Dt(ex()));z("keep-card").addEventListener("click",()=>Dt((async()=>{Ae||(Ae=!0,z("card-choice").hidden=!0,await rn("DIALOGUE_FOCUS"),Lt("嗯，你问吧。"),await dt(.8),await rn("COUNTER_FREE",.5),Ae=!1)})()));z("settings-open").addEventListener("click",()=>z("settings").hidden=!1);z("settings-close").addEventListener("click",()=>{z("settings").hidden=!0,Ot()&&At!=="OBJECT_INSPECT"&&ic()});z("start").addEventListener("click",()=>Dt(Hv()));z("sound").addEventListener("click",()=>{z("sound").textContent=`声音 · ${it.toggle()?"开":"关"}`});z("ambience-volume").addEventListener("input",n=>it.setAmbienceVolume(n.target.value/100));z("again").addEventListener("click",()=>location.reload());z("case-label").textContent=kt?"练习还书访客":"练习借书访客";z("case-label").parentElement.hidden=Vs||["closing","shelving","clearing","recommendation"].includes(Ss);z("complete").querySelector("p").textContent=kt?"本次还书处理已记录":"本次借阅处理已记录";document.querySelectorAll("[data-mode]").forEach(n=>{n.setAttribute("aria-pressed",String(n.dataset.mode===(Ss||"borrow"))),n.addEventListener("click",()=>{jn.set("mode",n.dataset.mode),location.search=jn.toString()})});document.querySelectorAll("[data-decision]").forEach(n=>n.addEventListener("click",()=>Dt(Zu(n.dataset.decision))));document.querySelectorAll("[data-case]").forEach(n=>{n.setAttribute("aria-pressed",String(n.dataset.case===Ai)),n.addEventListener("click",()=>{n.dataset.case!==Ai&&(jn.set("case",n.dataset.case),location.search=jn.toString())})});window.addEventListener("keydown",n=>{if(n.ctrlKey||n.metaKey||n.altKey)return;const e=n.code==="KeyR"?"r":n.key.toLowerCase();if(Ot()&&z("settings").hidden&&document.pointerLockElement===Ht.domElement&&["KeyW","KeyA","KeyS","KeyD"].includes(n.code)&&(In.add(n.code),n.preventDefault()),!z("settings").hidden){e==="escape"&&(z("settings").hidden=!0,n.preventDefault());return}!mn||Ae||n.repeat||["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)||(["r","escape"].includes(e)&&n.preventDefault(),e==="escape"&&(In.clear(),document.pointerLockElement&&document.exitPointerLock(),z("card-choice").hidden?z("settings").hidden=!1:z("card-choice").hidden=!0,tn=!1,Bt=null,Kt=$t=0),Yt()==="BOOK_INSPECT"&&["arrowleft","arrowright"].includes(e)&&(n.preventDefault(),Dt(Tr(e==="arrowright"?1:-1))),e==="r"&&z("card-choice").hidden&&Dt(Yt()==="BOOK_INSPECT"?Vu():Ql()))});window.addEventListener("keyup",n=>In.delete(n.code));document.addEventListener("visibilitychange",()=>en.update(0,0));function ic(){_n||Ht.domElement.requestPointerLock()?.catch(()=>Qn("点击画面继续环顾。"))}document.addEventListener("pointerlockchange",()=>{In.clear(),Bt=null,tn=!1,Kt=$t=0,!_n&&Ot()&&At!=="OBJECT_INSPECT"&&!document.pointerLockElement&&mn&&(z("settings").hidden=!1)});window.addEventListener("pointermove",n=>{if(!(!z("settings").hidden||!z("card-choice").hidden)){if(_n&&n.pointerType==="touch"&&Tn?.pointerId===n.pointerId){const e=n.clientX-Es,t=n.clientY-ys;Math.hypot(n.clientX-Tn.x,n.clientY-Tn.y)>6&&(Tn.moved=!0),Yt()==="BOOK_INSPECT"&&!Ae?(tn=Tn.moved,$t=e*.005,Kt=t*.005,Re.rotateY($t),Re.rotateX(Kt)):Ot()?Dh(e,t):(ar=lt.clamp(ar-e*.002,-Ea,Ea),lr=lt.clamp(lr-t*.002,-ya,ya)),Es=n.clientX,ys=n.clientY;return}if(Ot()&&document.pointerLockElement===Ht.domElement){Dh(n.movementX,n.movementY);return}if(!(Ot()&&At!=="OBJECT_INSPECT")){if(Ln.set(n.clientX/innerWidth*2-1,1-n.clientY/innerHeight*2),Yt()==="BOOK_INSPECT"){if(Bt&&!Ae){const e=Math.hypot(n.clientX-Bt.x,n.clientY-Bt.y);(e>Fu||e>0&&performance.now()-Bt.time>Bu)&&(tn=!0)}tn&&!Ae&&($t=(n.clientX-Es)*.005,Kt=(n.clientY-ys)*.005,Re.rotateY($t),Re.rotateX(Kt))}else ar=-Ln.x*Ea,lr=Ln.y*ya;Es=n.clientX,ys=n.clientY}}});Ht.domElement.addEventListener("pointerdown",n=>{if(!(!z("settings").hidden||!z("card-choice").hidden)&&n.button===0){if(_n&&n.pointerType==="touch"&&(Tn={x:n.clientX,y:n.clientY,moved:!1,pointerId:n.pointerId},Es=n.clientX,ys=n.clientY),!_n&&Ot()&&At!=="OBJECT_INSPECT"&&document.pointerLockElement!==Ht.domElement){ic();return}if(Yt()==="BOOK_INSPECT"&&!Ae)Ln.set(n.clientX/innerWidth*2-1,1-n.clientY/innerHeight*2),Bt={x:n.clientX,y:n.clientY,time:performance.now(),pointerId:n.pointerId,damageId:tc()?.damageId},tn=!1,Kt=$t=0,Es=n.clientX,ys=n.clientY,document.pointerLockElement||Ht.domElement.setPointerCapture(n.pointerId);else{if(_n&&n.pointerType==="touch")return;if(Ot()){Uo(),Dt(ec());return}Ln.set(n.clientX/innerWidth*2-1,1-n.clientY/innerHeight*2),Oo(),Dt(nc())}}});Ht.domElement.addEventListener("wheel",n=>{Yt()!=="BOOK_INSPECT"||!z("settings").hidden||(n.preventDefault(),n.deltaY&&Dt(Tr(Math.sign(n.deltaY))))},{passive:!1});window.addEventListener("pointerup",n=>{if(_n&&n.pointerType==="touch"&&Tn?.pointerId===n.pointerId&&(!Tn.moved&&Yt()!=="BOOK_INSPECT"&&(Ln.set(n.clientX/innerWidth*2-1,1-n.clientY/innerHeight*2),Ot()?(Uo(),Dt(ec())):(Oo(),Dt(nc()))),Tn=null),Bt?.pointerId===n.pointerId){if(!tn&&performance.now()-Bt.time<=Bu&&Math.hypot(n.clientX-Bt.x,n.clientY-Bt.y)<=Fu){Ln.set(n.clientX/innerWidth*2-1,1-n.clientY/innerHeight*2);const e=tc();e&&e.damageId===Bt.damageId&&Dt(Kv(e))}Bt=null,tn=!1}});window.addEventListener("pointercancel",n=>{Tn?.pointerId===n.pointerId&&(Tn=null),Bt?.pointerId===n.pointerId&&(Bt=null,tn=!1,Kt=$t=0)});window.addEventListener("blur",()=>{In.clear(),vn.forward=vn.sideways=0,Tn=null,Bt=null,tn=!1,Kt=$t=0});function tx(){!mn||Ae||!z("settings").hidden||(Ln.set(0,0),Ot()?(Uo(),Dt(ec())):(Oo(),Dt(nc())))}function nx(){!mn||Ae||!z("settings").hidden||Dt(Yt()==="BOOK_INSPECT"?Vu():Ql())}z("book-read").addEventListener("click",()=>{!mn||Ae||!z("settings").hidden||Dt((async()=>{await Ql(),await Tr(1)})())});z("mobile-action").addEventListener("click",tx);z("mobile-inspect").addEventListener("click",nx);z("mobile-prev").addEventListener("click",()=>Dt(Tr(-1)));z("mobile-next").addEventListener("click",()=>Dt(Tr(1)));let yo=null;function ju(n){const e=z("mobile-stick").getBoundingClientRect(),t=n.clientX-(e.left+e.width/2),i=n.clientY-(e.top+e.height/2),s=Math.hypot(t,i),r=42,o=s>r?r/s:1;vn.sideways=t*o/r,vn.forward=-i*o/r,z("mobile-stick").firstElementChild.style.transform=`translate(${t*o}px, ${i*o}px)`}z("mobile-stick").addEventListener("pointerdown",n=>{yo=n.pointerId;try{z("mobile-stick").setPointerCapture(n.pointerId)}catch{}ju(n)});z("mobile-stick").addEventListener("pointermove",n=>{n.pointerId===yo&&ju(n)});function Qu(n){n.pointerId===yo&&(yo=null,vn.forward=vn.sideways=0,z("mobile-stick").firstElementChild.style.transform="translate(0, 0)")}z("mobile-stick").addEventListener("pointerup",Qu);z("mobile-stick").addEventListener("pointercancel",Qu);window.addEventListener("resize",()=>{de.aspect=innerWidth/innerHeight,de.updateProjectionMatrix(),Ht.setSize(innerWidth,innerHeight),Zi.setSize(innerWidth,innerHeight)});Ms&&(z("dev-panel").hidden=!1,window.library={get night(){return structuredClone({gamePhase:ct,cameraMode:At,position:de.position.toArray(),yaw:de.rotation.y,pitch:de.rotation.x,pointerLocked:!!document.pointerLockElement,heldBookId:st.heldBookId,heldCategory:st.books.get(st.heldBookId)?.category,hoveredSlot:gt?.slot,hoveredBook:gt?.bookId,distance:gt?.distance,pending:st.getPendingBooks(),result:st.result,slots:st.slots,books:[...st.books.values()],time:en.time,page:en.page,dwell:en.dwell,advances:en.advances,closingReady:en.ready,closed:St.closed,personalHeld:bi,recommendation:{...yi.diagnostics,hovered:!!gt?.recommendation,heldTags:Us.find(n=>n.id===st.books.get(st.heldBookId)?.definitionId)?.recommendationTags||[]},clearing:{active:at.active,visitors:at.visitors,remaining:at.getLingeringVisitors().length,dialogueTarget:at.dialogueTarget,talkDistance:at.talkDistance,hoveredVisitor:gt?.visitorId,door:{lockedFromOutside:St.lockedFromOutside,canExitFromInside:St.canExitFromInside,angle:St.door.rotation.y,visitorId:vo}}})},nightPosition(n){if(n==="chen_yao")return yi.actor.userData.head.getWorldPosition(new C).toArray();const e=As.models.get(n)?.model;return e?e.userData.head.getWorldPosition(new C).toArray():(Mo.books.get(n)||Mo.slotTargets.find(i=>i.userData.slotId===n))?.getWorldPosition(new C).toArray()},get state(){return Ge.state},get busy(){return Ae},get checklist(){return Ge.checklist},get record(){return Ge.record},get bookOpen(){return Vn},get bookPage(){return Vt},get cardReturned(){return Ge.cardReturned},get bookRotation(){return Re.rotation.toArray().slice(0,3)},get bookQuaternion(){return Re.quaternion.toArray()},get damageDecisions(){return structuredClone(Ge.damageDecisions)},get memory(){return Jn?structuredClone({index:Jn.index,completed:Jn.records.length,book:bn.book,books:[...Jn.books.values()],profile:Yn,photoProfile:xr,meshId:Re.uuid,personId:et.uuid}):null},get selectedDamageVisible(){return Ju(Zl,El)},get inspectionSnapshot(){return xo&&structuredClone(xo)},projectDamage(n){const e=Re.userData.damageHotspots.find(l=>l.damageId===n&&l.page===Vt&&l.enabled);if(!e)return null;const[t,i,s,r]=e.uvRect,o=e.surface.geometry.parameters,a=e.surface.localToWorld(new C((t+s/2-.5)*o.width,(.5-i-r/2)*o.height,0)).project(de);return{x:(a.x+1)*innerWidth/2,y:(1-a.y)*innerHeight/2}},project(n){const e=wi[n];if(!e)return null;const t=e.getWorldPosition(new C).project(de);return{x:(t.x+1)*innerWidth/2,y:(1-t.y)*innerHeight/2}},get cameraAngles(){return{yaw:oo,pitch:ao}},get cameraShot(){return{mode:At,beat:vr,blend:fn,handPitch:Xi,fov:de.fov,z:de.position.z}},get drawCalls(){return Ht.info.render.calls}});function ed(n){requestAnimationFrame(ed);const e=(n-yh)/1e3,t=Math.min(e,.05);yh=n,Gt+=t;for(let o=lo.length-1;o>=0;o--){const a=lo[o];a.elapsed+=t;const l=Math.min(a.elapsed/a.duration,1);a.update(l),l>=1&&(lo.splice(o,1),a.resolve())}if(St.update(t,Gt),mn&&Gt>Ch&&(Ae||it.paper(.009),Ch=Gt+37),mn&&Gt>Ph&&(Ae||it.tone(134,.12,.008),Ph=Gt+53),!Ot()&&ct!=="CLOSING_TRANSITION"&&At!=="OBJECT_INSPECT"){const o=1-Math.exp(-8*t),a=ku+lt.clamp(ar*.6,-lt.degToRad(2.5),lt.degToRad(2.5)),l=zu+Xi+lt.clamp(lr*.6,-lt.degToRad(2),lt.degToRad(2));oo=lt.lerp(oo,lt.lerp(ar,a,fn),o),ao=lt.lerp(ao,lt.lerp(lr,l,fn),o),de.rotation.y=oo,de.rotation.x=-.12+ao}Ot()&&Ut&&(de.rotation.y=lt.lerp(Ut.startYaw,Ut.yaw+Ut.dx,fn),de.rotation.x=lt.lerp(Ut.startPitch,Ut.pitch+Ut.dy,fn),de.position.copy(Ut.origin).addScaledVector(new C(-Math.sin(Ut.yaw),0,-Math.cos(Ut.yaw)),Ut.dolly*fn));const i=67-(Ot()?3.5:5)*fn;if(de.fov!==i&&(de.fov=i,de.updateProjectionMatrix()),!Ot()&&ct!=="CLOSING_TRANSITION"&&(de.position.z=2.64-.03*fn,de.position.y=1.67+Math.sin(Gt*.8)*9e-4),ct==="CLOSING_READING"){const o=At==="OBJECT_INSPECT"&&!Ae&&z("settings").hidden&&!tn&&!document.hidden?Vt:0;if(en.update(o,Math.min(e,.25))){const a=document.querySelector(".clock");a.textContent=en.time,a.animate([{opacity:.3},{opacity:1}],{duration:600}),St.setReadingProgress(en.advances/4),en.ready&&Qn("已经到闭馆时间了。")}}if(Ot()){if(ct==="NIGHT_FREE_ROAM"&&st.getPendingBooks().length&&(ct="NIGHT_SHELVING"),!Ae&&At==="FREE_LOOK"&&z("settings").hidden&&(_n||document.pointerLockElement)){const o=Number(In.has("KeyW"))-Number(In.has("KeyS"))+vn.forward,a=Number(In.has("KeyD"))-Number(In.has("KeyA"))+vn.sideways,l=Rv(de.position,de.rotation.y,o,a,t,(h,c)=>at.blocksPlayer(h,c));l&&Gt>Ih&&(it.tone(115,.09,.014),it.paper(.006),Ih=Gt+.57),l&&st.heldBookId&&(Re.position.y=Ws[1]+Math.sin(Gt*6)*.003)}if(at.active||(Sa=ct==="NIGHT_SHELVING_COMPLETE"&&z("settings").hidden?Sa+t:0,Sa>=2&&Ku()),z("settings").hidden){at.update(t,de.position);for(const a of at.visitors)if(a.state==="LEAVING"&&Gt>(a.nextStep||0)){const l=Math.hypot(a.position[0]-de.position.x,a.position[2]-de.position.z);it.tone(105,.09,.008/(1+l)),a.nextStep=Gt+(a.type==="elder"?.75:.6)}const o=at.getVisitor("child");if(at.active&&!o.hasBeenNoticed&&At==="FREE_LOOK"&&Math.hypot(de.position.x-o.position[0],de.position.z-o.position[2])<1.5){const a=As.models.get("child").model.userData.head.getWorldPosition(new C);new Xl(de.position,a.clone().sub(de.position).normalize(),0,de.position.distanceTo(a)).intersectObjects(ft.children.filter(c=>c!==de&&c!==As.group),!0).some(c=>c.object.visible&&!c.object.material?.transparent)||at.notice("child")}if(!vo){const a=at.visitors.find(l=>l.atDoor&&!l.exiting&&!l.hasExited);a&&Dt(Yv(a))}at.isCleared()&&!Sl&&(Eh+=t,Eh>=1.5&&(Sl=!0,Qn("馆里已经没人了。",1500),Dt(dt(1.5).then(()=>ct="NIGHT_CLEARING_COMPLETE"))))}As.update(t,Gt),z("settings").hidden&&(ct==="NIGHT_CLEARING_COMPLETE"&&!_s.phase&&(Sh+=t,Sh>=1&&_s.startWaiting()),yi.update(t,Gt),_s.phase&&(ct=_s.phase))}if(et.visible){et.userData.body.position.y=Math.sin(Gt*1.3)*.004,Ae||(et.userData.head.rotation.z=Math.sin(Gt*.55)*.018,et.userData.body.rotation.z=Math.sin(Gt*.64)*.006);const o=Gt%4.8,a=o>4.6&&o<4.75?.1:1;et.userData.eyes.forEach(l=>l.scale.y=a)}if(Yt()==="BOOK_INSPECT"&&!tn&&!Bt&&!Ae&&z("settings").hidden){Re.rotateY($t*t*45),Re.rotateX(Kt*t*45);const o=Math.exp(-8*t);$t*=o,Kt*=o}Hu.uniforms.uTime.value=Gt;const s=Yt()==="BOOK_INSPECT",r=["BOOK_HELD","RETURN_BOOK_HELD"].includes(Yt());if(z("book-pages").hidden=!mn||!z("settings").hidden||!s&&(!r||!!document.pointerLockElement),z("book-read").hidden=s,z("book-read").disabled=Ae,z("mobile-prev").hidden=z("mobile-next").hidden=z("book-page-number").hidden=!s,z("mobile-prev").disabled=Ae||Vt===0,z("mobile-next").disabled=Ae||Vt>=Re.userData.pages.length,z("mobile-next").textContent=Vt===0?"翻开":"下一页",z("book-page-number").textContent=Vt===0?"封面":Vt+" / "+Re.userData.pages.length,_n&&mn){const o=Yt()==="BOOK_INSPECT",a=bi||st.heldBookId||Ge.phase==="BOOK_HELD"||Ge.phase==="RETURN_BOOK_HELD";z("mobile-stick").hidden=z("mobile-action").hidden=!Ot(),z("mobile-inspect").disabled=!a&&!o,z("mobile-action").textContent=gt?.recommendation?yi.label:gt?.visitorId?"提醒闭馆":gt||Cn?"使用":"观察"}if(ft.updateMatrixWorld(),jv(),Oo(),qi.enabled=Re.parent===de||Pt.parent===de,Zi.render(),Ms&&(z("dev-panel").textContent=`DEV · ${Ge.type} ${Ai}
${Ge.state}
`+(kt?`损坏: ${Ge.record?.actualDamagePresent??"—"}
责任: ${Ge.record?.actualDamageResponsibility??"—"}`:`身份: ${Ge.actualIdentityMatch?"MATCH":"MISMATCH"}
勾选: ${Ge.checklist??"NULL"}`)+`
操作: ${Ge.decision??"—"}
正确: ${Ge.record?.isCorrect??"—"}`+(Jn?`
交易: ${$l.indexOf(bn.step)+1} / 3
副本: ${bn.book.instanceId}
持有人: ${bn.book.holderCustomerId??"—"}
损坏: ${bn.book.damages.map(o=>o.id+":"+o.createdAt).join(", ")}
决定: ${JSON.stringify(Ge.damageDecisions)}`:"")),Ms&&ct!=="DAY_COUNTER"&&(z("dev-panel").textContent=`${ct} / ${At}
${en.time} · page ${Vt} · dwell ${en.dwell.toFixed(1)} · advances ${en.advances} · ready ${en.ready}
held ${st.heldBookId||"—"} / ${st.books.get(st.heldBookId)?.category||"—"}
slot ${gt?.slot?.slotId||"—"} · occupied ${gt?.slot?.occupantBookId||"—"}
pending ${st.getPendingBooks().length} · correct ${st.getFinalLayout().filter(o=>o.isCorrect).length} · wrong ${st.getFinalLayout().filter(o=>!o.isCorrect).length}
position ${de.position.toArray().map(o=>o.toFixed(2)).join(", ")} · reach ${gt?.distance?.toFixed(2)||"—"}`),Ms&&Ot()&&(z("dev-panel").textContent+=`
Remaining Visitors ${at.getLingeringVisitors().length} · target ${at.dialogueTarget||"—"} · talk ${at.talkDistance}m
${at.visitors.map(o=>`${o.id}: ${o.state} · asked ${o.hasBeenAskedToLeave} · exited ${o.hasExited}`).join(`
`)}
Door outside locked ${St.lockedFromOutside} · inside exit ${St.canExitFromInside} · angle ${St.door.rotation.y.toFixed(2)}`),Ms&&_s.phase){const o=yi.diagnostics;z("dev-panel").textContent+=`
Visitor ${o.visitorState} · knocks ${o.knocks}
Request ${o.request.id}
Required ${o.request.requiredTags.join(", ")}
Acceptable ${o.request.acceptableBookIds.join(", ")}
Held tags ${window.library.night.recommendation.heldTags.join(", ")}
Submitted ${o.result?.recommendedBookId||"—"} · Is Correct ${o.result?.isCorrect??"—"}
Visitor Exited ${!!o.result?.visitorExitedAt} · Recommended Book Reshelved ${o.recommendedBookReshelved}`}}requestAnimationFrame(ed);

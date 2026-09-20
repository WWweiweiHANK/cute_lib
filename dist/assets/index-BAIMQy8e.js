(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Tl="180",ad=0,lc=1,ld=2,Dh=1,Lh=2,ai=3,Ti=0,pn=1,ci=2,ui=0,Ts=1,lo=2,cc=3,hc=4,cd=5,Bi=100,hd=101,ud=102,dd=103,fd=104,pd=200,md=201,gd=202,_d=203,Aa=204,wa=205,vd=206,xd=207,Md=208,Sd=209,yd=210,Ed=211,Td=212,bd=213,Ad=214,Ra=0,Ca=1,Pa=2,ws=3,Ia=4,Da=5,La=6,Na=7,Nh=0,wd=1,Rd=2,yi=0,Uh=1,Oh=2,Fh=3,bl=4,Bh=5,kh=6,zh=7,Hh=300,Rs=301,Cs=302,Ua=303,Oa=304,Eo=306,co=1e3,zi=1001,Fa=1002,Bn=1003,Cd=1004,Ar=1005,Yn=1006,Bo=1007,Hi=1008,Zn=1009,Gh=1010,Vh=1011,lr=1012,Al=1013,Gi=1014,hi=1015,di=1016,wl=1017,Rl=1018,cr=1020,Wh=35902,Xh=35899,qh=1021,Yh=1022,Fn=1023,hr=1026,ur=1027,Kh=1028,Cl=1029,$h=1030,Pl=1031,Il=1033,Qr=33776,eo=33777,to=33778,no=33779,Ba=35840,ka=35841,za=35842,Ha=35843,Ga=36196,Va=37492,Wa=37496,Xa=37808,qa=37809,Ya=37810,Ka=37811,$a=37812,Ja=37813,Za=37814,ja=37815,Qa=37816,el=37817,tl=37818,nl=37819,il=37820,sl=37821,rl=36492,ol=36494,al=36495,ll=36283,cl=36284,hl=36285,ul=36286,Pd=3200,Id=3201,Jh=0,Dd=1,Si="",yn="srgb",Ps="srgb-linear",ho="linear",pt="srgb",es=7680,uc=519,Ld=512,Nd=513,Ud=514,Zh=515,Od=516,Fd=517,Bd=518,kd=519,dc=35044,fc="300 es",Kn=2e3,uo=2001;class Us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pc=1234567;const tr=Math.PI/180,Is=180/Math.PI;function $i(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function Dl(n,e){return(n%e+e)%e}function zd(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Hd(n,e,t){return n!==e?(t-n)/(e-n):0}function nr(n,e,t){return(1-t)*n+t*e}function Gd(n,e,t,i){return nr(n,e,1-Math.exp(-t*i))}function Vd(n,e=1){return e-Math.abs(Dl(n,e*2)-e)}function Wd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Xd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function qd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Yd(n,e){return n+Math.random()*(e-n)}function Kd(n){return n*(.5-Math.random())}function $d(n){n!==void 0&&(pc=n);let e=pc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jd(n){return n*tr}function Zd(n){return n*Is}function jd(n){return(n&n-1)===0&&n!==0}function Qd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ef(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tf(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),u=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*d,c*u,a*l);break;case"YZY":n.set(c*u,a*h,c*d,a*l);break;case"ZXZ":n.set(c*d,c*u,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function rn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const lt={DEG2RAD:tr,RAD2DEG:Is,generateUUID:$i,clamp:Qe,euclideanModulo:Dl,mapLinear:zd,inverseLerp:Hd,lerp:nr,damp:Gd,pingpong:Vd,smoothstep:Wd,smootherstep:Xd,randInt:qd,randFloat:Yd,randFloatSpread:Kd,seededRandom:$d,degToRad:Jd,radToDeg:Zd,isPowerOfTwo:jd,ceilPowerOfTwo:Qd,floorPowerOfTwo:ef,setQuaternionFromProperEuler:tf,normalize:rn,denormalize:gs};class ce{constructor(e=0,t=0){ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Os{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],d=i[s+3];const u=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==u||l!==p||h!==g){let m=1-a;const f=c*u+l*p+h*g+d*_,T=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const R=Math.sqrt(y),A=Math.atan2(R,f*T);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const v=a*T;if(c=c*m+u*v,l=l*m+p*v,h=h*m+g*v,d=d*m+_*v,m===1-a){const R=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=R,l*=R,h*=R,d*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],d=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*d+c*p-l*u,e[t+1]=c*g+h*u+l*d-a*p,e[t+2]=l*g+h*p+a*u-c*d,e[t+3]=h*g-a*d-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),d=a(r/2),u=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"YZX":this._x=u*h*d+l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d-u*p*g;break;case"XZY":this._x=u*h*d-l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,i=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+c*l+o*d-a*h,this.y=i+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ko.copy(this).projectOnVector(e),this.sub(ko)}reflect(e){return this.sub(ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ko=new C,mc=new Os;class Ze{constructor(e,t,i,s,r,o,a,c,l){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],_=s[0],m=s[3],f=s[6],T=s[1],y=s[4],v=s[7],R=s[2],A=s[5],w=s[8];return r[0]=o*_+a*T+c*R,r[3]=o*m+a*y+c*A,r[6]=o*f+a*v+c*w,r[1]=l*_+h*T+d*R,r[4]=l*m+h*y+d*A,r[7]=l*f+h*v+d*w,r[2]=u*_+p*T+g*R,r[5]=u*m+p*y+g*A,r[8]=u*f+p*v+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,u=a*c-h*r,p=l*r-o*c,g=t*d+i*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*l-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=u*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(zo.makeScale(e,t)),this}rotate(e){return this.premultiply(zo.makeRotation(-e)),this}translate(e,t){return this.premultiply(zo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zo=new Ze;function jh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function fo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nf(){const n=fo("canvas");return n.style.display="block",n}const gc={};function dr(n){n in gc||(gc[n]=!0,console.warn(n))}function sf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const _c=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vc=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rf(){const n={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pt&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Si?ho:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return dr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return dr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ps]:{primaries:e,whitePoint:i,transfer:ho,toXYZ:_c,fromXYZ:vc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:_c,fromXYZ:vc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),n}const rt=rf();function fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ts;class of{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ts===void 0&&(ts=fo("canvas")),ts.width=e.width,ts.height=e.height;const s=ts.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ts}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fi(t[i]/255)*255):t[i]=fi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let af=0;class Ll{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=$i(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ho(s[o].image)):r.push(Ho(s[o]))}else r=Ho(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ho(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?of.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lf=0;const Go=new C;class ln extends Us{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,i=zi,s=zi,r=Yn,o=Hi,a=Fn,c=Zn,l=ln.DEFAULT_ANISOTROPY,h=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=$i(),this.name="",this.source=new Ll(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Go).x}get height(){return this.source.getSize(Go).y}get depth(){return this.source.getSize(Go).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case co:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case Fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case co:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case Fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Hh;ln.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,i=0,s=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,v=(p+1)/2,R=(f+1)/2,A=(h+u)/4,w=(d+_)/4,P=(g+m)/4;return y>v&&y>R?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=A/i,r=w/i):v>R?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=A/s,r=P/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=w/r,s=P/r),this.set(i,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-_)/T,this.z=(u-h)/T,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cf extends Us{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new ln(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ll(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends cf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Qh extends ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hf extends ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yr{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wr.copy(i.boundingBox)),wr.applyMatrix4(e.matrixWorld),this.union(wr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),Rr.subVectors(this.max,qs),ns.subVectors(e.a,qs),is.subVectors(e.b,qs),ss.subVectors(e.c,qs),mi.subVectors(is,ns),gi.subVectors(ss,is),Pi.subVectors(ns,ss);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Pi.z,Pi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Pi.z,0,-Pi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Pi.y,Pi.x,0];return!Vo(t,ns,is,ss,Rr)||(t=[1,0,0,0,1,0,0,0,1],!Vo(t,ns,is,ss,Rr))?!1:(Cr.crossVectors(mi,gi),t=[Cr.x,Cr.y,Cr.z],Vo(t,ns,is,ss,Rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ni=[new C,new C,new C,new C,new C,new C,new C,new C],Ln=new C,wr=new yr,ns=new C,is=new C,ss=new C,mi=new C,gi=new C,Pi=new C,qs=new C,Rr=new C,Cr=new C,Ii=new C;function Vo(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ii.fromArray(n,r);const a=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),c=e.dot(Ii),l=t.dot(Ii),h=i.dot(Ii);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const uf=new yr,Ys=new C,Wo=new C;class To{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):uf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const t=Ys.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ys,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(Wo)),this.expandByPoint(Ys.copy(e.center).sub(Wo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ii=new C,Xo=new C,Pr=new C,_i=new C,qo=new C,Ir=new C,Yo=new C;class Nl{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Xo.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(Xo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Pr),a=_i.dot(this.direction),c=-_i.dot(Pr),l=_i.lengthSq(),h=Math.abs(1-o*o);let d,u,p,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,p=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Xo).addScaledVector(Pr,u),p}intersectSphere(e,t){ii.subVectors(e.center,this.origin);const i=ii.dot(this.direction),s=ii.dot(ii)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,i,s,r){qo.subVectors(t,e),Ir.subVectors(i,e),Yo.crossVectors(qo,Ir);let o=this.direction.dot(Yo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,e);const c=a*this.direction.dot(Ir.crossVectors(_i,Ir));if(c<0)return null;const l=a*this.direction.dot(qo.cross(_i));if(l<0||c+l>o)return null;const h=-a*_i.dot(Yo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,t,i,s,r,o,a,c,l,h,d,u,p,g,_,m){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,d,u,p,g,_,m)}set(e,t,i,s,r,o,a,c,l,h,d,u,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/rs.setFromMatrixColumn(e,0).length(),r=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=o*h,p=o*d,g=a*h,_=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=u-_*l,t[9]=-a*c,t[2]=_-u*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*h,p=c*d,g=l*h,_=l*d;t[0]=u+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*h,p=c*d,g=l*h,_=l*d;t[0]=u-_*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*h,p=o*d,g=a*h,_=a*d;t[0]=c*h,t[4]=g*l-p,t[8]=u*l+_,t[1]=c*d,t[5]=_*l+u,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-u*d,t[8]=g*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+_,t[5]=o*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(df,e,ff)}lookAt(e,t,i){const s=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),vi.crossVectors(i,Mn),vi.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),vi.crossVectors(i,Mn)),vi.normalize(),Dr.crossVectors(Mn,vi),s[0]=vi.x,s[4]=Dr.x,s[8]=Mn.x,s[1]=vi.y,s[5]=Dr.y,s[9]=Mn.y,s[2]=vi.z,s[6]=Dr.z,s[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],T=i[3],y=i[7],v=i[11],R=i[15],A=s[0],w=s[4],P=s[8],M=s[12],S=s[1],D=s[5],B=s[9],V=s[13],J=s[2],z=s[6],$=s[10],Q=s[14],X=s[3],ge=s[7],xe=s[11],we=s[15];return r[0]=o*A+a*S+c*J+l*X,r[4]=o*w+a*D+c*z+l*ge,r[8]=o*P+a*B+c*$+l*xe,r[12]=o*M+a*V+c*Q+l*we,r[1]=h*A+d*S+u*J+p*X,r[5]=h*w+d*D+u*z+p*ge,r[9]=h*P+d*B+u*$+p*xe,r[13]=h*M+d*V+u*Q+p*we,r[2]=g*A+_*S+m*J+f*X,r[6]=g*w+_*D+m*z+f*ge,r[10]=g*P+_*B+m*$+f*xe,r[14]=g*M+_*V+m*Q+f*we,r[3]=T*A+y*S+v*J+R*X,r[7]=T*w+y*D+v*z+R*ge,r[11]=T*P+y*B+v*$+R*xe,r[15]=T*M+y*V+v*Q+R*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*c*d-s*l*d-r*a*u+i*l*u+s*a*p-i*c*p)+_*(+t*c*p-t*l*u+r*o*u-s*o*p+s*l*h-r*c*h)+m*(+t*l*d-t*a*p-r*o*d+i*o*p+r*a*h-i*l*h)+f*(-s*a*h-t*c*d+t*a*u+s*o*d-i*o*u+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],T=d*m*l-_*u*l+_*c*p-a*m*p-d*c*f+a*u*f,y=g*u*l-h*m*l-g*c*p+o*m*p+h*c*f-o*u*f,v=h*_*l-g*d*l+g*a*p-o*_*p-h*a*f+o*d*f,R=g*d*c-h*_*c-g*a*u+o*_*u+h*a*m-o*d*m,A=t*T+i*y+s*v+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=T*w,e[1]=(_*u*r-d*m*r-_*s*p+i*m*p+d*s*f-i*u*f)*w,e[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*f+i*c*f)*w,e[3]=(d*c*r-a*u*r-d*s*l+i*u*l+a*s*p-i*c*p)*w,e[4]=y*w,e[5]=(h*m*r-g*u*r+g*s*p-t*m*p-h*s*f+t*u*f)*w,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*f-t*c*f)*w,e[7]=(o*u*r-h*c*r+h*s*l-t*u*l-o*s*p+t*c*p)*w,e[8]=v*w,e[9]=(g*d*r-h*_*r-g*i*p+t*_*p+h*i*f-t*d*f)*w,e[10]=(o*_*r-g*a*r+g*i*l-t*_*l-o*i*f+t*a*f)*w,e[11]=(h*a*r-o*d*r-h*i*l+t*d*l+o*i*p-t*a*p)*w,e[12]=R*w,e[13]=(h*_*s-g*d*s+g*i*u-t*_*u-h*i*m+t*d*m)*w,e[14]=(g*a*s-o*_*s-g*i*c+t*_*c+o*i*m-t*a*m)*w,e[15]=(o*d*s-h*a*s+h*i*c-t*d*c-o*i*u+t*a*u)*w,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,u=r*l,p=r*h,g=r*d,_=o*h,m=o*d,f=a*d,T=c*l,y=c*h,v=c*d,R=i.x,A=i.y,w=i.z;return s[0]=(1-(_+f))*R,s[1]=(p+v)*R,s[2]=(g-y)*R,s[3]=0,s[4]=(p-v)*A,s[5]=(1-(u+f))*A,s[6]=(m+T)*A,s[7]=0,s[8]=(g+y)*w,s[9]=(m-T)*w,s[10]=(1-(u+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=rs.set(s[0],s[1],s[2]).length();const o=rs.set(s[4],s[5],s[6]).length(),a=rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Nn.copy(this);const l=1/r,h=1/o,d=1/a;return Nn.elements[0]*=l,Nn.elements[1]*=l,Nn.elements[2]*=l,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=d,Nn.elements[9]*=d,Nn.elements[10]*=d,t.setFromRotationMatrix(Nn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Kn,c=!1){const l=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),p=(i+s)/(i-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===Kn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===uo)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Kn,c=!1){const l=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),p=-(i+s)/(i-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===Kn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===uo)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const rs=new C,Nn=new Tt,df=new C(0,0,0),ff=new C(1,1,1),vi=new C,Dr=new C,Mn=new C,xc=new Tt,Mc=new Os;class Dn{constructor(e=0,t=0,i=0,s=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mc.setFromEuler(this),this.setFromQuaternion(Mc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class Ul{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pf=0;const Sc=new C,os=new Os,si=new Tt,Lr=new C,Ks=new C,mf=new C,gf=new Os,yc=new C(1,0,0),Ec=new C(0,1,0),Tc=new C(0,0,1),bc={type:"added"},_f={type:"removed"},as={type:"childadded",child:null},Ko={type:"childremoved",child:null};class $t extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new C,t=new Dn,i=new Os,s=new C(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ze}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(yc,e)}rotateY(e){return this.rotateOnAxis(Ec,e)}rotateZ(e){return this.rotateOnAxis(Tc,e)}translateOnAxis(e,t){return Sc.copy(e).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yc,e)}translateY(e){return this.translateOnAxis(Ec,e)}translateZ(e){return this.translateOnAxis(Tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Lr.copy(e):Lr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Ks,Lr,this.up):si.lookAt(Lr,Ks,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),os.setFromRotationMatrix(si),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bc),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_f),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bc),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,mf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,gf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}$t.DEFAULT_UP=new C(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new C,ri=new C,$o=new C,oi=new C,ls=new C,cs=new C,Ac=new C,Jo=new C,Zo=new C,jo=new C,Qo=new _t,ea=new _t,ta=new _t;class On{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Un.subVectors(e,t),s.cross(Un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Un.subVectors(s,t),ri.subVectors(i,t),$o.subVectors(e,t);const o=Un.dot(Un),a=Un.dot(ri),c=Un.dot($o),l=ri.dot(ri),h=ri.dot($o),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,oi.x),c.addScaledVector(o,oi.y),c.addScaledVector(a,oi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Qo.setScalar(0),ea.setScalar(0),ta.setScalar(0),Qo.fromBufferAttribute(e,t),ea.fromBufferAttribute(e,i),ta.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Qo,r.x),o.addScaledVector(ea,r.y),o.addScaledVector(ta,r.z),o}static isFrontFacing(e,t,i,s){return Un.subVectors(i,t),ri.subVectors(e,t),Un.cross(ri).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Un.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return On.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ls.subVectors(s,i),cs.subVectors(r,i),Jo.subVectors(e,i);const c=ls.dot(Jo),l=cs.dot(Jo);if(c<=0&&l<=0)return t.copy(i);Zo.subVectors(e,s);const h=ls.dot(Zo),d=cs.dot(Zo);if(h>=0&&d<=h)return t.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(ls,o);jo.subVectors(e,r);const p=ls.dot(jo),g=cs.dot(jo);if(g>=0&&p<=g)return t.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(cs,a);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Ac.subVectors(r,s),a=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(Ac,a);const f=1/(m+_+u);return o=_*f,a=u*f,t.copy(i).addScaledVector(ls,o).addScaledVector(cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function na(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=rt.workingColorSpace){if(e=Dl(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=na(o,r,e+1/3),this.g=na(o,r,e),this.b=na(o,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=yn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){const i=eu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return rt.workingToColorSpace(en.copy(this),e),Math.round(Qe(en.r*255,0,255))*65536+Math.round(Qe(en.g*255,0,255))*256+Math.round(Qe(en.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(en.copy(this),t);const i=en.r,s=en.g,r=en.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=yn){rt.workingToColorSpace(en.copy(this),e);const t=en.r,i=en.g,s=en.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(Nr);const i=nr(xi.h,Nr.h,t),s=nr(xi.s,Nr.s,t),r=nr(xi.l,Nr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new $e;$e.NAMES=eu;let vf=0;class Fs extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=Ts,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Aa,this.blendDst=wa,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Aa&&(i.blendSrc=this.blendSrc),this.blendDst!==wa&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ji extends Fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new C,Ur=new ce;let xf=0;class zn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=dc,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gs(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gs(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gs(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),s=rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dc&&(e.usage=this.usage),e}}class tu extends zn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class nu extends zn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class bt extends zn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Mf=0;const Rn=new Tt,ia=new $t,hs=new C,Sn=new yr,$s=new yr,Yt=new C;class hn extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jh(e)?nu:tu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,i){return Rn.makeTranslation(e,t,i),this.applyMatrix4(Rn),this}scale(e,t,i){return Rn.makeScale(e,t,i),this.applyMatrix4(Rn),this}lookAt(e){return ia.lookAt(e),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new bt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new To);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Sn.min,$s.min),Sn.expandByPoint(Yt),Yt.addVectors(Sn.max,$s.max),Sn.expandByPoint(Yt)):(Sn.expandByPoint($s.min),Sn.expandByPoint($s.max))}Sn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Yt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Yt.fromBufferAttribute(a,l),c&&(hs.fromBufferAttribute(e,l),Yt.add(hs)),s=Math.max(s,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<i.count;P++)a[P]=new C,c[P]=new C;const l=new C,h=new C,d=new C,u=new ce,p=new ce,g=new ce,_=new C,m=new C;function f(P,M,S){l.fromBufferAttribute(i,P),h.fromBufferAttribute(i,M),d.fromBufferAttribute(i,S),u.fromBufferAttribute(r,P),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),h.sub(l),d.sub(l),p.sub(u),g.sub(u);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),a[P].add(_),a[M].add(_),a[S].add(_),c[P].add(m),c[M].add(m),c[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,M=T.length;P<M;++P){const S=T[P],D=S.start,B=S.count;for(let V=D,J=D+B;V<J;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const y=new C,v=new C,R=new C,A=new C;function w(P){R.fromBufferAttribute(s,P),A.copy(R);const M=a[P];y.copy(M),y.sub(R.multiplyScalar(R.dot(M))).normalize(),v.crossVectors(A,M);const D=v.dot(c[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,D)}for(let P=0,M=T.length;P<M;++P){const S=T[P],D=S.start,B=S.count;for(let V=D,J=D+B;V<J;V+=3)w(e.getX(V+0)),w(e.getX(V+1)),w(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const s=new C,r=new C,o=new C,a=new C,c=new C,l=new C,h=new C,d=new C;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let f=0;f<h;f++)u[g++]=l[p++]}return new zn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=e(u,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wc=new Tt,Di=new Nl,Or=new To,Rc=new C,Fr=new C,Br=new C,kr=new C,sa=new C,zr=new C,Cc=new C,Hr=new C;class Rt extends $t{constructor(e=new hn,t=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){zr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(sa.fromBufferAttribute(d,e),o?zr.addScaledVector(sa,h):zr.addScaledVector(sa.sub(t),h))}t.add(zr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere),Or.applyMatrix4(r),Di.copy(e.ray).recast(e.near),!(Or.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Or,Rc)===null||Di.origin.distanceToSquared(Rc)>(e.far-e.near)**2))&&(wc.copy(r).invert(),Di.copy(e.ray).applyMatrix4(wc),!(i.boundingBox!==null&&Di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=T,R=y;v<R;v+=3){const A=a.getX(v),w=a.getX(v+1),P=a.getX(v+2);s=Gr(this,f,e,i,l,h,d,A,w,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const T=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=Gr(this,o,e,i,l,h,d,T,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=T,R=y;v<R;v+=3){const A=v,w=v+1,P=v+2;s=Gr(this,f,e,i,l,h,d,A,w,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const T=m,y=m+1,v=m+2;s=Gr(this,o,e,i,l,h,d,T,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Sf(n,e,t,i,s,r,o,a){let c;if(e.side===pn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Ti,a),c===null)return null;Hr.copy(a),Hr.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Hr);return l<t.near||l>t.far?null:{distance:l,point:Hr.clone(),object:n}}function Gr(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,Fr),n.getVertexPosition(c,Br),n.getVertexPosition(l,kr);const h=Sf(n,e,t,i,Fr,Br,kr,Cc);if(h){const d=new C;On.getBarycoord(Cc,Fr,Br,kr,d),s&&(h.uv=On.getInterpolatedAttribute(s,a,c,l,d,new ce)),r&&(h.uv1=On.getInterpolatedAttribute(r,a,c,l,d,new ce)),o&&(h.normal=On.getInterpolatedAttribute(o,a,c,l,d,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new C,materialIndex:0};On.getNormal(Fr,Br,kr,u.normal),h.face=u,h.barycoord=d}return h}class Bs extends hn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new bt(l,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(d,2));function g(_,m,f,T,y,v,R,A,w,P,M){const S=v/w,D=R/P,B=v/2,V=R/2,J=A/2,z=w+1,$=P+1;let Q=0,X=0;const ge=new C;for(let xe=0;xe<$;xe++){const we=xe*D-V;for(let Xe=0;Xe<z;Xe++){const k=Xe*S-B;ge[_]=k*T,ge[m]=we*y,ge[f]=J,l.push(ge.x,ge.y,ge.z),ge[_]=0,ge[m]=0,ge[f]=A>0?1:-1,h.push(ge.x,ge.y,ge.z),d.push(Xe/w),d.push(1-xe/P),Q+=1}}for(let xe=0;xe<P;xe++)for(let we=0;we<w;we++){const Xe=u+we+z*xe,k=u+we+z*(xe+1),he=u+(we+1)+z*(xe+1),me=u+(we+1)+z*xe;c.push(Xe,k,me),c.push(k,he,me),X+=6}a.addGroup(p,X,M),p+=X,u+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function on(n){const e={};for(let t=0;t<n.length;t++){const i=Ds(n[t]);for(const s in i)e[s]=i[s]}return e}function yf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function iu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const fr={clone:Ds,merge:on};var Ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends Fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ef,this.fragmentShader=Tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=yf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class su extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new C,Pc=new ce,Ic=new ce;class fn extends su{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,Pc,Ic),t.subVectors(Ic,Pc)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const us=-90,ds=1;class bf extends $t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(us,ds,e,t);s.layers=this.layers,this.add(s);const r=new fn(us,ds,e,t);r.layers=this.layers,this.add(r);const o=new fn(us,ds,e,t);o.layers=this.layers,this.add(o);const a=new fn(us,ds,e,t);a.layers=this.layers,this.add(a);const c=new fn(us,ds,e,t);c.layers=this.layers,this.add(c);const l=new fn(us,ds,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===uo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ru extends ln{constructor(e=[],t=Rs,i,s,r,o,a,c,l,h){super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Af extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ru(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bs(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:ui});r.uniforms.tEquirect.value=t;const o=new Rt(s,r),a=t.minFilter;return t.minFilter===Hi&&(t.minFilter=Yn),new bf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Ut extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wf={type:"move"};class ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wf)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ut;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ol{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new $e(e),this.density=t}clone(){return new Ol(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Rf extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const oa=new C,Cf=new C,Pf=new Ze;class Oi{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=oa.subVectors(i,t).cross(Cf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(oa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Pf.getNormalMatrix(e),s=this.coplanarPoint(oa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new To,If=new ce(.5,.5),Vr=new C;class Fl{constructor(e=new Oi,t=new Oi,i=new Oi,s=new Oi,r=new Oi,o=new Oi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Kn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],p=r[7],g=r[8],_=r[9],m=r[10],f=r[11],T=r[12],y=r[13],v=r[14],R=r[15];if(s[0].setComponents(l-o,p-h,f-g,R-T).normalize(),s[1].setComponents(l+o,p+h,f+g,R+T).normalize(),s[2].setComponents(l+a,p+d,f+_,R+y).normalize(),s[3].setComponents(l-a,p-d,f-_,R-y).normalize(),i)s[4].setComponents(c,u,m,v).normalize(),s[5].setComponents(l-c,p-u,f-m,R-v).normalize();else if(s[4].setComponents(l-c,p-u,f-m,R-v).normalize(),t===Kn)s[5].setComponents(l+c,p+u,f+m,R+v).normalize();else if(t===uo)s[5].setComponents(c,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){Li.center.set(0,0,0);const t=If.distanceTo(e.center);return Li.radius=.7071067811865476+t,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Vr.x=s.normal.x>0?e.max.x:e.min.x,Vr.y=s.normal.y>0?e.max.y:e.min.y,Vr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ou extends Fs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const po=new C,mo=new C,Dc=new Tt,Js=new Nl,Wr=new To,aa=new C,Lc=new C;class Df extends $t{constructor(e=new hn,t=new ou){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)po.fromBufferAttribute(t,s-1),mo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=po.distanceTo(mo);e.setAttribute("lineDistance",new bt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wr.copy(i.boundingSphere),Wr.applyMatrix4(s),Wr.radius+=r,e.ray.intersectsSphere(Wr)===!1)return;Dc.copy(s).invert(),Js.copy(e.ray).applyMatrix4(Dc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=h.getX(_),T=h.getX(_+1),y=Xr(this,e,Js,c,f,T,_);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=Xr(this,e,Js,c,_,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const f=Xr(this,e,Js,c,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){const _=Xr(this,e,Js,c,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Xr(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(po.fromBufferAttribute(a,s),mo.fromBufferAttribute(a,r),t.distanceSqToSegment(po,mo,aa,Lc)>i)return;aa.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(aa);if(!(l<e.near||l>e.far))return{distance:l,point:Lc.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Nc=new C,Uc=new C;class Lf extends Df{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Nc.fromBufferAttribute(t,s),Uc.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Nc.distanceTo(Uc);e.setAttribute("lineDistance",new bt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nf extends ln{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class au extends ln{constructor(e,t,i=Gi,s,r,o,a=Bn,c=Bn,l,h=hr,d=1){if(h!==hr&&h!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ll(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class lu extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class bo extends hn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],p=[];let g=0;const _=[],m=i/2;let f=0;T(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new bt(d,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(p,2));function T(){const v=new C,R=new C;let A=0;const w=(t-e)/i;for(let P=0;P<=r;P++){const M=[],S=P/r,D=S*(t-e)+e;for(let B=0;B<=s;B++){const V=B/s,J=V*c+a,z=Math.sin(J),$=Math.cos(J);R.x=D*z,R.y=-S*i+m,R.z=D*$,d.push(R.x,R.y,R.z),v.set(z,w,$).normalize(),u.push(v.x,v.y,v.z),p.push(V,1-S),M.push(g++)}_.push(M)}for(let P=0;P<s;P++)for(let M=0;M<r;M++){const S=_[M][P],D=_[M+1][P],B=_[M+1][P+1],V=_[M][P+1];(e>0||M!==0)&&(h.push(S,D,V),A+=3),(t>0||M!==r-1)&&(h.push(D,B,V),A+=3)}l.addGroup(f,A,0),f+=A}function y(v){const R=g,A=new ce,w=new C;let P=0;const M=v===!0?e:t,S=v===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*S,0),u.push(0,S,0),p.push(.5,.5),g++;const D=g;for(let B=0;B<=s;B++){const J=B/s*c+a,z=Math.cos(J),$=Math.sin(J);w.x=M*$,w.y=m*S,w.z=M*z,d.push(w.x,w.y,w.z),u.push(0,S,0),A.x=z*.5+.5,A.y=$*.5*S+.5,p.push(A.x,A.y),g++}for(let B=0;B<s;B++){const V=R+B,J=D+B;v===!0?h.push(J,J+1,V):h.push(J+1,J,V),P+=3}l.addGroup(f,P,v===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bl extends bo{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Bl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ao extends hn{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new bt(r,3)),this.setAttribute("normal",new bt(r.slice(),3)),this.setAttribute("uv",new bt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(T){const y=new C,v=new C,R=new C;for(let A=0;A<t.length;A+=3)p(t[A+0],y),p(t[A+1],v),p(t[A+2],R),c(y,v,R,T)}function c(T,y,v,R){const A=R+1,w=[];for(let P=0;P<=A;P++){w[P]=[];const M=T.clone().lerp(v,P/A),S=y.clone().lerp(v,P/A),D=A-P;for(let B=0;B<=D;B++)B===0&&P===A?w[P][B]=M:w[P][B]=M.clone().lerp(S,B/D)}for(let P=0;P<A;P++)for(let M=0;M<2*(A-P)-1;M++){const S=Math.floor(M/2);M%2===0?(u(w[P][S+1]),u(w[P+1][S]),u(w[P][S])):(u(w[P][S+1]),u(w[P+1][S+1]),u(w[P+1][S]))}}function l(T){const y=new C;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(T),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){const T=new C;for(let y=0;y<r.length;y+=3){T.x=r[y+0],T.y=r[y+1],T.z=r[y+2];const v=m(T)/2/Math.PI+.5,R=f(T)/Math.PI+.5;o.push(v,1-R)}g(),d()}function d(){for(let T=0;T<o.length;T+=6){const y=o[T+0],v=o[T+2],R=o[T+4],A=Math.max(y,v,R),w=Math.min(y,v,R);A>.9&&w<.1&&(y<.2&&(o[T+0]+=1),v<.2&&(o[T+2]+=1),R<.2&&(o[T+4]+=1))}}function u(T){r.push(T.x,T.y,T.z)}function p(T,y){const v=T*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){const T=new C,y=new C,v=new C,R=new C,A=new ce,w=new ce,P=new ce;for(let M=0,S=0;M<r.length;M+=9,S+=6){T.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),A.set(o[S+0],o[S+1]),w.set(o[S+2],o[S+3]),P.set(o[S+4],o[S+5]),R.copy(T).add(y).add(v).divideScalar(3);const D=m(R);_(A,S+0,T,D),_(w,S+2,y,D),_(P,S+4,v,D)}}function _(T,y,v,R){R<0&&T.x===1&&(o[y]=T.x-1),v.x===0&&v.z===0&&(o[y]=R/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function f(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.vertices,e.indices,e.radius,e.details)}}class ei{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const h=i[s],u=i[s+1]-h,p=(o-h)/u;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ce:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new C,s=[],r=[],o=[],a=new C,c=new Tt;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),u<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Qe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Qe(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class kl extends ei{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ce){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,p=l-this.aY;c=u*h-p*d+this.aX,l=u*d+p*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Uf extends kl{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function zl(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,p*=h,s(o,a,u,p)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const qr=new C,la=new zl,ca=new zl,ha=new zl;class Of extends ei{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new C){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(qr.subVectors(s[0],s[1]).add(s[0]),l=qr);const d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(qr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=qr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),la.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,_,m),ca.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,_,m),ha.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(la.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),ca.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),ha.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return i.set(la.calc(c),ca.calc(c),ha.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Oc(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function Ff(n,e){const t=1-n;return t*t*e}function Bf(n,e){return 2*(1-n)*n*e}function kf(n,e){return n*n*e}function ir(n,e,t,i){return Ff(n,e)+Bf(n,t)+kf(n,i)}function zf(n,e){const t=1-n;return t*t*t*e}function Hf(n,e){const t=1-n;return 3*t*t*n*e}function Gf(n,e){return 3*(1-n)*n*n*e}function Vf(n,e){return n*n*n*e}function sr(n,e,t,i,s){return zf(n,e)+Hf(n,t)+Gf(n,i)+Vf(n,s)}class cu extends ei{constructor(e=new ce,t=new ce,i=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ce){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(sr(e,s.x,r.x,o.x,a.x),sr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Wf extends ei{constructor(e=new C,t=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new C){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(sr(e,s.x,r.x,o.x,a.x),sr(e,s.y,r.y,o.y,a.y),sr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hu extends ei{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xf extends ei{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uu extends ei{constructor(e=new ce,t=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ce){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ir(e,s.x,r.x,o.x),ir(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qf extends ei{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ir(e,s.x,r.x,o.x),ir(e,s.y,r.y,o.y),ir(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class du extends ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Oc(a,c.x,l.x,h.x,d.x),Oc(a,c.y,l.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ce().fromArray(s))}return this}}var dl=Object.freeze({__proto__:null,ArcCurve:Uf,CatmullRomCurve3:Of,CubicBezierCurve:cu,CubicBezierCurve3:Wf,EllipseCurve:kl,LineCurve:hu,LineCurve3:Xf,QuadraticBezierCurve:uu,QuadraticBezierCurve3:qf,SplineCurve:du});class Yf extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dl[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new dl[s.type]().fromJSON(s))}return this}}class Fc extends Yf{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new hu(this.currentPoint.clone(),new ce(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new uu(this.currentPoint.clone(),new ce(e,t),new ce(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new cu(this.currentPoint.clone(),new ce(e,t),new ce(i,s),new ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new du(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){const l=new kl(e,t,i,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class fu extends Fc{constructor(e){super(e),this.uuid=$i(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Fc().fromJSON(s))}return this}}function Kf(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=pu(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=Qf(n,e,r,t)),n.length>80*t){a=1/0,c=1/0;let h=-1/0,d=-1/0;for(let u=t;u<s;u+=t){const p=n[u],g=n[u+1];p<a&&(a=p),g<c&&(c=g),p>h&&(h=p),g>d&&(d=g)}l=Math.max(h-a,d-c),l=l!==0?32767/l:0}return pr(r,o,t,a,c,l,0),o}function pu(n,e,t,i,s){let r;if(s===hp(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Bc(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Bc(o/i|0,n[o],n[o+1],r);return r&&Ls(r,r.next)&&(gr(r),r=r.next),r}function Vi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ls(t,t.next)||Pt(t.prev,t,t.next)===0)){if(gr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function pr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&sp(n,i,s,r);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?Jf(n,i,s,r):$f(n)){e.push(c.i,n.i,l.i),gr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Zf(Vi(n),e),pr(n,e,t,i,s,r,2)):o===2&&jf(n,e,t,i,s,r):pr(Vi(n),e,t,i,s,r,1);break}}}function $f(n){const e=n.prev,t=n,i=n.next;if(Pt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,h=Math.min(s,r,o),d=Math.min(a,c,l),u=Math.max(s,r,o),p=Math.max(a,c,l);let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&js(s,a,r,c,o,l,g.x,g.y)&&Pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Jf(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Pt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,u=o.y,p=Math.min(a,c,l),g=Math.min(h,d,u),_=Math.max(a,c,l),m=Math.max(h,d,u),f=fl(p,g,e,t,i),T=fl(_,m,e,t,i);let y=n.prevZ,v=n.nextZ;for(;y&&y.z>=f&&v&&v.z<=T;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&js(a,h,c,d,l,u,y.x,y.y)&&Pt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&js(a,h,c,d,l,u,v.x,v.y)&&Pt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&js(a,h,c,d,l,u,y.x,y.y)&&Pt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=T;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&js(a,h,c,d,l,u,v.x,v.y)&&Pt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Zf(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Ls(i,s)&&gu(i,t,t.next,s)&&mr(i,s)&&mr(s,i)&&(e.push(i.i,t.i,s.i),gr(t),gr(t.next),t=n=s),t=t.next}while(t!==n);return Vi(t)}function jf(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ap(o,a)){let c=_u(o,a);o=Vi(o,o.next),c=Vi(c,c.next),pr(o,e,t,i,s,r,0),pr(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Qf(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=pu(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(op(l))}s.sort(ep);for(let r=0;r<s.length;r++)t=tp(s[r],t);return t}function ep(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function tp(n,e){const t=np(n,e);if(!t)return e;const i=_u(t,n);return Vi(i,i.next),Vi(t,t.next)}function np(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(Ls(n,t))return t;do{if(Ls(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&mu(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){const d=Math.abs(s-t.y)/(i-t.x);mr(t,n)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&ip(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function ip(n,e){return Pt(n.prev,n,e.prev)<0&&Pt(e.next,n,n.next)<0}function sp(n,e,t,i){let s=n;do s.z===0&&(s.z=fl(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,rp(s)}function rp(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function fl(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function op(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function mu(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function js(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&mu(n,e,t,i,s,r,o,a)}function ap(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!lp(n,e)&&(mr(n,e)&&mr(e,n)&&cp(n,e)&&(Pt(n.prev,n,e.prev)||Pt(n,e.prev,e))||Ls(n,e)&&Pt(n.prev,n,n.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ls(n,e){return n.x===e.x&&n.y===e.y}function gu(n,e,t,i){const s=Kr(Pt(n,e,t)),r=Kr(Pt(n,e,i)),o=Kr(Pt(t,i,n)),a=Kr(Pt(t,i,e));return!!(s!==r&&o!==a||s===0&&Yr(n,t,e)||r===0&&Yr(n,i,e)||o===0&&Yr(t,n,i)||a===0&&Yr(t,e,i))}function Yr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Kr(n){return n>0?1:n<0?-1:0}function lp(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&gu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function mr(n,e){return Pt(n.prev,n,n.next)<0?Pt(n,e,n.next)>=0&&Pt(n,n.prev,e)>=0:Pt(n,e,n.prev)<0||Pt(n,n.next,e)<0}function cp(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function _u(n,e){const t=pl(n.i,n.x,n.y),i=pl(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Bc(n,e,t,i){const s=pl(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function gr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function pl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function hp(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class up{static triangulate(e,t,i=2){return Kf(e,t,i)}}class vs{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return vs.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];kc(e),zc(i,e);let o=e.length;t.forEach(kc);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,zc(i,t[c]);const a=up.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function kc(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function zc(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Hl extends hn{constructor(e=new fu([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new bt(s,3)),this.setAttribute("uv",new bt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:dp;let y,v=!1,R,A,w,P;f&&(y=f.getSpacedPoints(h),v=!0,u=!1,R=f.computeFrenetFrames(h,!1),A=new C,w=new C,P=new C),u||(m=0,p=0,g=0,_=0);const M=a.extractPoints(l);let S=M.shape;const D=M.holes;if(!vs.isClockWise(S)){S=S.reverse();for(let ie=0,ee=D.length;ie<ee;ie++){const j=D[ie];vs.isClockWise(j)&&(D[ie]=j.reverse())}}function V(ie){const j=10000000000000001e-36;let Z=ie[0];for(let _e=1;_e<=ie.length;_e++){const oe=_e%ie.length,ve=ie[oe],Ye=ve.x-Z.x,qe=ve.y-Z.y,b=Ye*Ye+qe*qe,x=Math.max(Math.abs(ve.x),Math.abs(ve.y),Math.abs(Z.x),Math.abs(Z.y)),F=j*x*x;if(b<=F){ie.splice(oe,1),_e--;continue}Z=ve}}V(S),D.forEach(V);const J=D.length,z=S;for(let ie=0;ie<J;ie++){const ee=D[ie];S=S.concat(ee)}function $(ie,ee,j){return ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(ee,j)}const Q=S.length;function X(ie,ee,j){let Z,_e,oe;const ve=ie.x-ee.x,Ye=ie.y-ee.y,qe=j.x-ie.x,b=j.y-ie.y,x=ve*ve+Ye*Ye,F=ve*b-Ye*qe;if(Math.abs(F)>Number.EPSILON){const W=Math.sqrt(x),ne=Math.sqrt(qe*qe+b*b),Y=ee.x-Ye/W,Oe=ee.y+ve/W,pe=j.x-b/ne,Le=j.y+qe/ne,Ne=((pe-Y)*b-(Le-Oe)*qe)/(ve*b-Ye*qe);Z=Y+ve*Ne-ie.x,_e=Oe+Ye*Ne-ie.y;const ae=Z*Z+_e*_e;if(ae<=2)return new ce(Z,_e);oe=Math.sqrt(ae/2)}else{let W=!1;ve>Number.EPSILON?qe>Number.EPSILON&&(W=!0):ve<-Number.EPSILON?qe<-Number.EPSILON&&(W=!0):Math.sign(Ye)===Math.sign(b)&&(W=!0),W?(Z=-Ye,_e=ve,oe=Math.sqrt(x)):(Z=ve,_e=Ye,oe=Math.sqrt(x/2))}return new ce(Z/oe,_e/oe)}const ge=[];for(let ie=0,ee=z.length,j=ee-1,Z=ie+1;ie<ee;ie++,j++,Z++)j===ee&&(j=0),Z===ee&&(Z=0),ge[ie]=X(z[ie],z[j],z[Z]);const xe=[];let we,Xe=ge.concat();for(let ie=0,ee=J;ie<ee;ie++){const j=D[ie];we=[];for(let Z=0,_e=j.length,oe=_e-1,ve=Z+1;Z<_e;Z++,oe++,ve++)oe===_e&&(oe=0),ve===_e&&(ve=0),we[Z]=X(j[Z],j[oe],j[ve]);xe.push(we),Xe=Xe.concat(we)}let k;if(m===0)k=vs.triangulateShape(z,D);else{const ie=[],ee=[];for(let j=0;j<m;j++){const Z=j/m,_e=p*Math.cos(Z*Math.PI/2),oe=g*Math.sin(Z*Math.PI/2)+_;for(let ve=0,Ye=z.length;ve<Ye;ve++){const qe=$(z[ve],ge[ve],oe);Te(qe.x,qe.y,-_e),Z===0&&ie.push(qe)}for(let ve=0,Ye=J;ve<Ye;ve++){const qe=D[ve];we=xe[ve];const b=[];for(let x=0,F=qe.length;x<F;x++){const W=$(qe[x],we[x],oe);Te(W.x,W.y,-_e),Z===0&&b.push(W)}Z===0&&ee.push(b)}}k=vs.triangulateShape(ie,ee)}const he=k.length,me=g+_;for(let ie=0;ie<Q;ie++){const ee=u?$(S[ie],Xe[ie],me):S[ie];v?(w.copy(R.normals[0]).multiplyScalar(ee.x),A.copy(R.binormals[0]).multiplyScalar(ee.y),P.copy(y[0]).add(w).add(A),Te(P.x,P.y,P.z)):Te(ee.x,ee.y,0)}for(let ie=1;ie<=h;ie++)for(let ee=0;ee<Q;ee++){const j=u?$(S[ee],Xe[ee],me):S[ee];v?(w.copy(R.normals[ie]).multiplyScalar(j.x),A.copy(R.binormals[ie]).multiplyScalar(j.y),P.copy(y[ie]).add(w).add(A),Te(P.x,P.y,P.z)):Te(j.x,j.y,d/h*ie)}for(let ie=m-1;ie>=0;ie--){const ee=ie/m,j=p*Math.cos(ee*Math.PI/2),Z=g*Math.sin(ee*Math.PI/2)+_;for(let _e=0,oe=z.length;_e<oe;_e++){const ve=$(z[_e],ge[_e],Z);Te(ve.x,ve.y,d+j)}for(let _e=0,oe=D.length;_e<oe;_e++){const ve=D[_e];we=xe[_e];for(let Ye=0,qe=ve.length;Ye<qe;Ye++){const b=$(ve[Ye],we[Ye],Z);v?Te(b.x,b.y+y[h-1].y,y[h-1].x+j):Te(b.x,b.y,d+j)}}}N(),K();function N(){const ie=s.length/3;if(u){let ee=0,j=Q*ee;for(let Z=0;Z<he;Z++){const _e=k[Z];Pe(_e[2]+j,_e[1]+j,_e[0]+j)}ee=h+m*2,j=Q*ee;for(let Z=0;Z<he;Z++){const _e=k[Z];Pe(_e[0]+j,_e[1]+j,_e[2]+j)}}else{for(let ee=0;ee<he;ee++){const j=k[ee];Pe(j[2],j[1],j[0])}for(let ee=0;ee<he;ee++){const j=k[ee];Pe(j[0]+Q*h,j[1]+Q*h,j[2]+Q*h)}}i.addGroup(ie,s.length/3-ie,0)}function K(){const ie=s.length/3;let ee=0;se(z,ee),ee+=z.length;for(let j=0,Z=D.length;j<Z;j++){const _e=D[j];se(_e,ee),ee+=_e.length}i.addGroup(ie,s.length/3-ie,1)}function se(ie,ee){let j=ie.length;for(;--j>=0;){const Z=j;let _e=j-1;_e<0&&(_e=ie.length-1);for(let oe=0,ve=h+m*2;oe<ve;oe++){const Ye=Q*oe,qe=Q*(oe+1),b=ee+Z+Ye,x=ee+_e+Ye,F=ee+_e+qe,W=ee+Z+qe;tt(b,x,F,W)}}}function Te(ie,ee,j){c.push(ie),c.push(ee),c.push(j)}function Pe(ie,ee,j){xt(ie),xt(ee),xt(j);const Z=s.length/3,_e=T.generateTopUV(i,s,Z-3,Z-2,Z-1);I(_e[0]),I(_e[1]),I(_e[2])}function tt(ie,ee,j,Z){xt(ie),xt(ee),xt(Z),xt(ee),xt(j),xt(Z);const _e=s.length/3,oe=T.generateSideWallUV(i,s,_e-6,_e-3,_e-2,_e-1);I(oe[0]),I(oe[1]),I(oe[3]),I(oe[1]),I(oe[2]),I(oe[3])}function xt(ie){s.push(c[ie*3+0]),s.push(c[ie*3+1]),s.push(c[ie*3+2])}function I(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return fp(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new dl[s.type]().fromJSON(s)),new Hl(i,e.options)}}const dp={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],h=e[s*3+1];return[new ce(r,o),new ce(a,c),new ce(l,h)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],p=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ce(o,1-c),new ce(l,1-d),new ce(u,1-g),new ce(_,1-f)]:[new ce(a,1-c),new ce(h,1-d),new ce(p,1-g),new ce(m,1-f)]}};function fp(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Gl extends Ao{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Gl(e.radius,e.detail)}}class wo extends Ao{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new wo(e.radius,e.detail)}}class ks extends hn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,d=e/a,u=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const T=f*u-o;for(let y=0;y<l;y++){const v=y*d-r;g.push(v,-T,0),_.push(0,0,1),m.push(y/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<a;T++){const y=T+l*f,v=T+l*(f+1),R=T+1+l*(f+1),A=T+1+l*f;p.push(y,v,A),p.push(v,R,A)}this.setIndex(p),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.width,e.height,e.widthSegments,e.heightSegments)}}class go extends hn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new C,u=new C,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){const T=[],y=f/i;let v=0;f===0&&o===0?v=.5/t:f===i&&c===Math.PI&&(v=-.5/t);for(let R=0;R<=t;R++){const A=R/t;d.x=-e*Math.cos(s+A*r)*Math.sin(o+y*a),d.y=e*Math.cos(o+y*a),d.z=e*Math.sin(s+A*r)*Math.sin(o+y*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(A+v,1-y),T.push(l++)}h.push(T)}for(let f=0;f<i;f++)for(let T=0;T<t;T++){const y=h[f][T+1],v=h[f][T],R=h[f+1][T],A=h[f+1][T+1];(f!==0||o>0)&&p.push(y,v,A),(f!==i-1||c<Math.PI)&&p.push(v,R,A)}this.setIndex(p),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(_,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ro extends hn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new C,d=new C,u=new C;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/s),l.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,T=(s+1)*p+g;o.push(_,m,T),o.push(m,f,T)}this.setIndex(o),this.setAttribute("position",new bt(a,3)),this.setAttribute("normal",new bt(c,3)),this.setAttribute("uv",new bt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class pp extends an{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vu extends Fs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jh,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mp extends vu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class gp extends Fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _p extends Fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Vl extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class vp extends Vl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ua=new Tt,Hc=new C,Gc=new C;class xu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fl,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Hc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hc),Gc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gc),t.updateMatrixWorld(),ua.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ua,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ua)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xp extends xu{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Is*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Mp extends Vl{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new xp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Vc=new Tt,Zs=new C,da=new C;class Sp extends xu{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Zs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Zs),da.copy(i.position),da.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(da),i.updateMatrixWorld(),s.makeTranslation(-Zs.x,-Zs.y,-Zs.z),Vc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vc,i.coordinateSystem,i.reversedDepth)}}class li extends Vl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Sp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Mu extends su{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class yp extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ep{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Wc=new Tt;class Wl{constructor(e,t,i=0,s=1/0){this.ray=new Nl(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ul,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wc),this}intersectObject(e,t=!0,i=[]){return ml(e,this,i,t),i.sort(Xc),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)ml(e[s],this,i,t);return i.sort(Xc),i}}function Xc(n,e){return n.distance-e.distance}function ml(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)ml(r[o],e,t,!0)}}function qc(n,e,t,i){const s=Tp(i);switch(t){case qh:return n*e;case Kh:return n*e/s.components*s.byteLength;case Cl:return n*e/s.components*s.byteLength;case $h:return n*e*2/s.components*s.byteLength;case Pl:return n*e*2/s.components*s.byteLength;case Yh:return n*e*3/s.components*s.byteLength;case Fn:return n*e*4/s.components*s.byteLength;case Il:return n*e*4/s.components*s.byteLength;case Qr:case eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case to:case no:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ka:case Ha:return Math.max(n,16)*Math.max(e,8)/4;case Ba:case za:return Math.max(n,8)*Math.max(e,8)/2;case Ga:case Va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case $a:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Za:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ja:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Qa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case el:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case tl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case nl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case il:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case sl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case rl:case ol:case al:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ll:case cl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case hl:case ul:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tp(n){switch(n){case Zn:case Gh:return{byteLength:1,components:1};case lr:case Vh:case di:return{byteLength:2,components:1};case wl:case Rl:return{byteLength:2,components:4};case Gi:case Al:case hi:return{byteLength:4,components:1};case Wh:case Xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tl);function Su(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function bp(n){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,d=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const h=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ap=`#ifdef USE_ALPHAHASH
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
#endif`,Dp=`#ifdef USE_AOMAP
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
#endif`,Lp=`#ifdef USE_AOMAP
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
material.specularStrength = specularStrength;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Em=`PhysicalMaterial material;
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
#endif`,Dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lm=`#ifdef USE_MAP
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
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
}`,D0=`#if DEPTH_PACKING == 3200
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
}`,L0=`#define DISTANCE
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
}`,je={alphahash_fragment:Ap,alphahash_pars_fragment:wp,alphamap_fragment:Rp,alphamap_pars_fragment:Cp,alphatest_fragment:Pp,alphatest_pars_fragment:Ip,aomap_fragment:Dp,aomap_pars_fragment:Lp,batching_pars_vertex:Np,batching_vertex:Up,begin_vertex:Op,beginnormal_vertex:Fp,bsdfs:Bp,iridescence_fragment:kp,bumpmap_pars_fragment:zp,clipping_planes_fragment:Hp,clipping_planes_pars_fragment:Gp,clipping_planes_pars_vertex:Vp,clipping_planes_vertex:Wp,color_fragment:Xp,color_pars_fragment:qp,color_pars_vertex:Yp,color_vertex:Kp,common:$p,cube_uv_reflection_fragment:Jp,defaultnormal_vertex:Zp,displacementmap_pars_vertex:jp,displacementmap_vertex:Qp,emissivemap_fragment:em,emissivemap_pars_fragment:tm,colorspace_fragment:nm,colorspace_pars_fragment:im,envmap_fragment:sm,envmap_common_pars_fragment:rm,envmap_pars_fragment:om,envmap_pars_vertex:am,envmap_physical_pars_fragment:vm,envmap_vertex:lm,fog_vertex:cm,fog_pars_vertex:hm,fog_fragment:um,fog_pars_fragment:dm,gradientmap_pars_fragment:fm,lightmap_pars_fragment:pm,lights_lambert_fragment:mm,lights_lambert_pars_fragment:gm,lights_pars_begin:_m,lights_toon_fragment:xm,lights_toon_pars_fragment:Mm,lights_phong_fragment:Sm,lights_phong_pars_fragment:ym,lights_physical_fragment:Em,lights_physical_pars_fragment:Tm,lights_fragment_begin:bm,lights_fragment_maps:Am,lights_fragment_end:wm,logdepthbuf_fragment:Rm,logdepthbuf_pars_fragment:Cm,logdepthbuf_pars_vertex:Pm,logdepthbuf_vertex:Im,map_fragment:Dm,map_pars_fragment:Lm,map_particle_fragment:Nm,map_particle_pars_fragment:Um,metalnessmap_fragment:Om,metalnessmap_pars_fragment:Fm,morphinstance_vertex:Bm,morphcolor_vertex:km,morphnormal_vertex:zm,morphtarget_pars_vertex:Hm,morphtarget_vertex:Gm,normal_fragment_begin:Vm,normal_fragment_maps:Wm,normal_pars_fragment:Xm,normal_pars_vertex:qm,normal_vertex:Ym,normalmap_pars_fragment:Km,clearcoat_normal_fragment_begin:$m,clearcoat_normal_fragment_maps:Jm,clearcoat_pars_fragment:Zm,iridescence_pars_fragment:jm,opaque_fragment:Qm,packing:e0,premultiplied_alpha_fragment:t0,project_vertex:n0,dithering_fragment:i0,dithering_pars_fragment:s0,roughnessmap_fragment:r0,roughnessmap_pars_fragment:o0,shadowmap_pars_fragment:a0,shadowmap_pars_vertex:l0,shadowmap_vertex:c0,shadowmask_pars_fragment:h0,skinbase_vertex:u0,skinning_pars_vertex:d0,skinning_vertex:f0,skinnormal_vertex:p0,specularmap_fragment:m0,specularmap_pars_fragment:g0,tonemapping_fragment:_0,tonemapping_pars_fragment:v0,transmission_fragment:x0,transmission_pars_fragment:M0,uv_pars_fragment:S0,uv_pars_vertex:y0,uv_vertex:E0,worldpos_vertex:T0,background_vert:b0,background_frag:A0,backgroundCube_vert:w0,backgroundCube_frag:R0,cube_vert:C0,cube_frag:P0,depth_vert:I0,depth_frag:D0,distanceRGBA_vert:L0,distanceRGBA_frag:N0,equirect_vert:U0,equirect_frag:O0,linedashed_vert:F0,linedashed_frag:B0,meshbasic_vert:k0,meshbasic_frag:z0,meshlambert_vert:H0,meshlambert_frag:G0,meshmatcap_vert:V0,meshmatcap_frag:W0,meshnormal_vert:X0,meshnormal_frag:q0,meshphong_vert:Y0,meshphong_frag:K0,meshphysical_vert:$0,meshphysical_frag:J0,meshtoon_vert:Z0,meshtoon_frag:j0,points_vert:Q0,points_frag:eg,shadow_vert:tg,shadow_frag:ng,sprite_vert:ig,sprite_frag:sg},Se={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Xn={basic:{uniforms:on([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:on([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new $e(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:on([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:on([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:on([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new $e(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:on([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:on([Se.points,Se.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:on([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:on([Se.common,Se.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:on([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:on([Se.sprite,Se.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:on([Se.common,Se.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:on([Se.lights,Se.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Xn.physical={uniforms:on([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const $r={r:0,b:0,g:0},Ni=new Dn,rg=new Tt;function og(n,e,t,i,s,r,o){const a=new $e(0);let c=r===!0?0:1,l,h,d=null,u=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const R=g(y);R===null?f(a,c):R&&R.isColor&&(f(R,1),v=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,v){const R=g(v);R&&(R.isCubeTexture||R.mapping===Eo)?(h===void 0&&(h=new Rt(new Bs(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Ds(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ni.copy(v.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rg.makeRotationFromEuler(Ni)),h.material.toneMapped=rt.getTransfer(R.colorSpace)!==pt,(d!==R||u!==R.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=R,u=R.version,p=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new Rt(new ks(2,2),new an({name:"BackgroundMaterial",uniforms:Ds(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=rt.getTransfer(R.colorSpace)!==pt,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||u!==R.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=R,u=R.version,p=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function f(y,v){y.getRGB($r,iu(n)),i.buffers.color.setClear($r.r,$r.g,$r.b,v,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,f(a,c)},render:_,addToRenderList:m,dispose:T}}function ag(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(S,D,B,V,J){let z=!1;const $=d(V,B,D);r!==$&&(r=$,l(r.object)),z=p(S,V,B,J),z&&g(S,V,B,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(S,D,B,V),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function c(){return n.createVertexArray()}function l(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function d(S,D,B){const V=B.wireframe===!0;let J=i[S.id];J===void 0&&(J={},i[S.id]=J);let z=J[D.id];z===void 0&&(z={},J[D.id]=z);let $=z[V];return $===void 0&&($=u(c()),z[V]=$),$}function u(S){const D=[],B=[],V=[];for(let J=0;J<t;J++)D[J]=0,B[J]=0,V[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:V,object:S,attributes:{},index:null}}function p(S,D,B,V){const J=r.attributes,z=D.attributes;let $=0;const Q=B.getAttributes();for(const X in Q)if(Q[X].location>=0){const xe=J[X];let we=z[X];if(we===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(we=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(we=S.instanceColor)),xe===void 0||xe.attribute!==we||we&&xe.data!==we.data)return!0;$++}return r.attributesNum!==$||r.index!==V}function g(S,D,B,V){const J={},z=D.attributes;let $=0;const Q=B.getAttributes();for(const X in Q)if(Q[X].location>=0){let xe=z[X];xe===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(xe=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(xe=S.instanceColor));const we={};we.attribute=xe,xe&&xe.data&&(we.data=xe.data),J[X]=we,$++}r.attributes=J,r.attributesNum=$,r.index=V}function _(){const S=r.newAttributes;for(let D=0,B=S.length;D<B;D++)S[D]=0}function m(S){f(S,0)}function f(S,D){const B=r.newAttributes,V=r.enabledAttributes,J=r.attributeDivisors;B[S]=1,V[S]===0&&(n.enableVertexAttribArray(S),V[S]=1),J[S]!==D&&(n.vertexAttribDivisor(S,D),J[S]=D)}function T(){const S=r.newAttributes,D=r.enabledAttributes;for(let B=0,V=D.length;B<V;B++)D[B]!==S[B]&&(n.disableVertexAttribArray(B),D[B]=0)}function y(S,D,B,V,J,z,$){$===!0?n.vertexAttribIPointer(S,D,B,J,z):n.vertexAttribPointer(S,D,B,V,J,z)}function v(S,D,B,V){_();const J=V.attributes,z=B.getAttributes(),$=D.defaultAttributeValues;for(const Q in z){const X=z[Q];if(X.location>=0){let ge=J[Q];if(ge===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(ge=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(ge=S.instanceColor)),ge!==void 0){const xe=ge.normalized,we=ge.itemSize,Xe=e.get(ge);if(Xe===void 0)continue;const k=Xe.buffer,he=Xe.type,me=Xe.bytesPerElement,N=he===n.INT||he===n.UNSIGNED_INT||ge.gpuType===Al;if(ge.isInterleavedBufferAttribute){const K=ge.data,se=K.stride,Te=ge.offset;if(K.isInstancedInterleavedBuffer){for(let Pe=0;Pe<X.locationSize;Pe++)f(X.location+Pe,K.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Pe=0;Pe<X.locationSize;Pe++)m(X.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,k);for(let Pe=0;Pe<X.locationSize;Pe++)y(X.location+Pe,we/X.locationSize,he,xe,se*me,(Te+we/X.locationSize*Pe)*me,N)}else{if(ge.isInstancedBufferAttribute){for(let K=0;K<X.locationSize;K++)f(X.location+K,ge.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let K=0;K<X.locationSize;K++)m(X.location+K);n.bindBuffer(n.ARRAY_BUFFER,k);for(let K=0;K<X.locationSize;K++)y(X.location+K,we/X.locationSize,he,xe,we*me,we/X.locationSize*K*me,N)}}else if($!==void 0){const xe=$[Q];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(X.location,xe);break;case 3:n.vertexAttrib3fv(X.location,xe);break;case 4:n.vertexAttrib4fv(X.location,xe);break;default:n.vertexAttrib1fv(X.location,xe)}}}}T()}function R(){P();for(const S in i){const D=i[S];for(const B in D){const V=D[B];for(const J in V)h(V[J].object),delete V[J];delete D[B]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const B in D){const V=D[B];for(const J in V)h(V[J].object),delete V[J];delete D[B]}delete i[S.id]}function w(S){for(const D in i){const B=i[D];if(B[S.id]===void 0)continue;const V=B[S.id];for(const J in V)h(V[J].object),delete V[J];delete B[S.id]}}function P(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function lg(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,d){d!==0&&(n.drawArraysInstanced(i,l,h,d),t.update(h,i,d))}function a(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,i,1)}function c(l,h,d,u){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function cg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Fn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const P=w===di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Zn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==hi&&!P)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:R,maxSamples:A}}function hg(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Oi,a=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const T=r?0:i,y=T*4;let v=f.clippingState||null;c.value=v,v=h(g,u,y,p);for(let R=0;R!==y;++R)v[R]=t[R];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,T=u.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,v=p;y!==_;++y,v+=4)o.copy(d[y]).applyMatrix4(T,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function ug(n){let e=new WeakMap;function t(o,a){return a===Ua?o.mapping=Rs:a===Oa&&(o.mapping=Cs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ua||a===Oa)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Af(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const xs=4,Yc=[.125,.215,.35,.446,.526,.582],ki=20,fa=new Mu,Kc=new $e;let pa=null,ma=0,ga=0,_a=!1;const Fi=(1+Math.sqrt(5))/2,fs=1/Fi,$c=[new C(-Fi,fs,0),new C(Fi,fs,0),new C(-fs,0,Fi),new C(fs,0,Fi),new C(0,Fi,-fs),new C(0,Fi,fs),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],dg=new C;class Jc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=dg}=r;pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pa,ma,ga),this._renderer.xr.enabled=_a,e.scissorTest=!1,Jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:di,format:Fn,colorSpace:Ps,depthBuffer:!1},s=Zc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zc(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fg(r)),this._blurMaterial=pg(r,e,t)}return s}_compileMaterial(e){const t=new Rt(this._lodPlanes[0],e);this._renderer.compile(t,fa)}_sceneToCubeUV(e,t,i,s,r){const c=new fn(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(Kc),d.toneMapping=yi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const _=new Ji({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),m=new Rt(new Bs,_);let f=!1;const T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,f=!0):(_.color.copy(Kc),f=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[y],r.y,r.z)):v===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[y]));const R=this._cubeSize;Jr(s,v*R,y>2?R:0,R,R),d.setRenderTarget(s),f&&d.render(m,c),d.render(e,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=u,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Rs||e.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Rt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Jr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,fa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$c[(s-r-1)%$c.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Rt(this._lodPlanes[s],l),u=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ki-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ki;m>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const f=[];let T=0;for(let w=0;w<ki;++w){const P=w/_,M=Math.exp(-P*P/2);f.push(M),w===0?T+=M:w<m&&(T+=2*M)}for(let w=0;w<f.length;w++)f[w]=f[w]/T;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-i;const v=this._sizeLods[s],R=3*v*(s>y-xs?s-y+xs:0),A=4*(this._cubeSize-v);Jr(t,R,A,3*v,2*v),c.setRenderTarget(t),c.render(d,fa)}}function fg(n){const e=[],t=[],i=[];let s=n;const r=n-xs+1+Yc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-xs?c=Yc[o-n+xs-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,T=new Float32Array(_*g*p),y=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,P=A>2?0:-1,M=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];T.set(M,_*g*A),y.set(u,m*g*A);const S=[A,A,A,A,A,A];v.set(S,f*g*A)}const R=new hn;R.setAttribute("position",new zn(T,_)),R.setAttribute("uv",new zn(y,m)),R.setAttribute("faceIndex",new zn(v,f)),e.push(R),s>xs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Zc(n,e,t){const i=new kn(n,e,t);return i.texture.mapping=Eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function pg(n,e,t){const i=new Float32Array(ki),s=new C(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function jc(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Qc(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Xl(){return`

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
	`}function mg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ua||c===Oa,h=c===Rs||c===Cs;if(l||h){let d=e.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Jc(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Jc(n)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function gg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&dr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function _g(n,e,t,i){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const p in u)e.update(u[p],n.ARRAY_BUFFER)}function l(d){const u=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const T=p.array;_=p.version;for(let y=0,v=T.length;y<v;y+=3){const R=T[y+0],A=T[y+1],w=T[y+2];u.push(R,A,A,w,w,R)}}else if(g!==void 0){const T=g.array;_=g.version;for(let y=0,v=T.length/3-1;y<v;y+=3){const R=y+0,A=y+1,w=y+2;u.push(R,A,A,w,w,R)}}else return;const m=new(jh(u)?nu:tu)(u,1);m.version=_;const f=r.get(d);f&&e.remove(f),r.set(d,m)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function vg(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,p){n.drawElements(i,p,r,u*o),t.update(p,i,1)}function l(u,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,u*o,g),t.update(p,i,g))}function h(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function d(u,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)l(u[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,u,0,_,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T]*_[T];t.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function xg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Mg(n,e,t){const i=new WeakMap,s=new _t;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let R=a.attributes.position.count*v,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const w=new Float32Array(R*A*4*d),P=new Qh(w,R,A,d);P.type=hi,P.needsUpdate=!0;const M=v*4;for(let D=0;D<d;D++){const B=f[D],V=T[D],J=y[D],z=R*A*4*D;for(let $=0;$<B.count;$++){const Q=$*M;g===!0&&(s.fromBufferAttribute(B,$),w[z+Q+0]=s.x,w[z+Q+1]=s.y,w[z+Q+2]=s.z,w[z+Q+3]=0),_===!0&&(s.fromBufferAttribute(V,$),w[z+Q+4]=s.x,w[z+Q+5]=s.y,w[z+Q+6]=s.z,w[z+Q+7]=0),m===!0&&(s.fromBufferAttribute(J,$),w[z+Q+8]=s.x,w[z+Q+9]=s.y,w[z+Q+10]=s.z,w[z+Q+11]=J.itemSize===4?s.w:1)}}u={count:d,texture:P,size:new ce(R,A)},i.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Sg(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const yu=new ln,eh=new au(1,1),Eu=new Qh,Tu=new hf,bu=new ru,th=[],nh=[],ih=new Float32Array(16),sh=new Float32Array(9),rh=new Float32Array(4);function zs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=th[s];if(r===void 0&&(r=new Float32Array(s),th[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Co(n,e){let t=nh[e];t===void 0&&(t=new Int32Array(e),nh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function yg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function Tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function Ag(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;rh.set(i),n.uniformMatrix2fv(this.addr,!1,rh),qt(t,i)}}function wg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;sh.set(i),n.uniformMatrix3fv(this.addr,!1,sh),qt(t,i)}}function Rg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;ih.set(i),n.uniformMatrix4fv(this.addr,!1,ih),qt(t,i)}}function Cg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Pg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function Ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function Dg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function Lg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function Ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function Og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function Fg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(eh.compareFunction=Zh,r=eh):r=yu,t.setTexture2D(e||r,s)}function Bg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Tu,s)}function kg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||bu,s)}function zg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Eu,s)}function Hg(n){switch(n){case 5126:return yg;case 35664:return Eg;case 35665:return Tg;case 35666:return bg;case 35674:return Ag;case 35675:return wg;case 35676:return Rg;case 5124:case 35670:return Cg;case 35667:case 35671:return Pg;case 35668:case 35672:return Ig;case 35669:case 35673:return Dg;case 5125:return Lg;case 36294:return Ng;case 36295:return Ug;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return kg;case 36289:case 36303:case 36311:case 36292:return zg}}function Gg(n,e){n.uniform1fv(this.addr,e)}function Vg(n,e){const t=zs(e,this.size,2);n.uniform2fv(this.addr,t)}function Wg(n,e){const t=zs(e,this.size,3);n.uniform3fv(this.addr,t)}function Xg(n,e){const t=zs(e,this.size,4);n.uniform4fv(this.addr,t)}function qg(n,e){const t=zs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Yg(n,e){const t=zs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Kg(n,e){const t=zs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $g(n,e){n.uniform1iv(this.addr,e)}function Jg(n,e){n.uniform2iv(this.addr,e)}function Zg(n,e){n.uniform3iv(this.addr,e)}function jg(n,e){n.uniform4iv(this.addr,e)}function Qg(n,e){n.uniform1uiv(this.addr,e)}function e_(n,e){n.uniform2uiv(this.addr,e)}function t_(n,e){n.uniform3uiv(this.addr,e)}function n_(n,e){n.uniform4uiv(this.addr,e)}function i_(n,e,t){const i=this.cache,s=e.length,r=Co(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||yu,r[o])}function s_(n,e,t){const i=this.cache,s=e.length,r=Co(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Tu,r[o])}function r_(n,e,t){const i=this.cache,s=e.length,r=Co(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||bu,r[o])}function o_(n,e,t){const i=this.cache,s=e.length,r=Co(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Eu,r[o])}function a_(n){switch(n){case 5126:return Gg;case 35664:return Vg;case 35665:return Wg;case 35666:return Xg;case 35674:return qg;case 35675:return Yg;case 35676:return Kg;case 5124:case 35670:return $g;case 35667:case 35671:return Jg;case 35668:case 35672:return Zg;case 35669:case 35673:return jg;case 5125:return Qg;case 36294:return e_;case 36295:return t_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return o_}}class l_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Hg(t.type)}}class c_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=a_(t.type)}}class h_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const va=/(\w+)(\])?(\[|\.)?/g;function oh(n,e){n.seq.push(e),n.map[e.id]=e}function u_(n,e,t){const i=n.name,s=i.length;for(va.lastIndex=0;;){const r=va.exec(i),o=va.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){oh(t,l===void 0?new l_(a,n,e):new c_(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new h_(a),oh(t,d)),t=d}}}class io{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);u_(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function ah(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const d_=37297;let f_=0;function p_(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const lh=new Ze;function m_(n){rt._getMatrix(lh,rt.workingColorSpace,n);const e=`mat3( ${lh.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case ho:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ch(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+p_(n.getShaderSource(e),a)}else return r}function g_(n,e){const t=m_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function __(n,e){let t;switch(e){case Uh:t="Linear";break;case Oh:t="Reinhard";break;case Fh:t="Cineon";break;case bl:t="ACESFilmic";break;case kh:t="AgX";break;case zh:t="Neutral";break;case Bh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zr=new C;function v_(){rt.getLuminanceCoefficients(Zr);const n=Zr.x.toFixed(4),e=Zr.y.toFixed(4),t=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function M_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function S_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Qs(n){return n!==""}function hh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(n){return n.replace(y_,T_)}const E_=new Map;function T_(n,e){let t=je[e];if(t===void 0){const i=E_.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gl(t)}const b_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dh(n){return n.replace(b_,A_)}function A_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function w_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Dh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Lh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function R_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Rs:case Cs:e="ENVMAP_TYPE_CUBE";break;case Eo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function C_(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Cs&&(e="ENVMAP_MODE_REFRACTION"),e}function P_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Nh:e="ENVMAP_BLENDING_MULTIPLY";break;case wd:e="ENVMAP_BLENDING_MIX";break;case Rd:e="ENVMAP_BLENDING_ADD";break}return e}function I_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function D_(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=w_(t),l=R_(t),h=C_(t),d=P_(t),u=I_(t),p=x_(t),g=M_(r),_=s.createProgram();let m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),f.length>0&&(f+=`
`)):(m=[fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),f=[fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?je.tonemapping_pars_fragment:"",t.toneMapping!==yi?__("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,g_("linearToOutputTexel",t.outputColorSpace),v_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),o=gl(o),o=hh(o,t),o=uh(o,t),a=gl(a),a=hh(a,t),a=uh(a,t),o=dh(o),a=dh(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=T+m+o,v=T+f+a,R=ah(s,s.VERTEX_SHADER,y),A=ah(s,s.FRAGMENT_SHADER,v);s.attachShader(_,R),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(D){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(_)||"",V=s.getShaderInfoLog(R)||"",J=s.getShaderInfoLog(A)||"",z=B.trim(),$=V.trim(),Q=J.trim();let X=!0,ge=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,R,A);else{const xe=ch(s,R,"vertex"),we=ch(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+xe+`
`+we)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):($===""||Q==="")&&(ge=!1);ge&&(D.diagnostics={runnable:X,programLog:z,vertexShader:{log:$,prefix:m},fragmentShader:{log:Q,prefix:f}})}s.deleteShader(R),s.deleteShader(A),P=new io(s,_),M=S_(s,_)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,d_)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=f_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}let L_=0;class N_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new U_(e),t.set(e,i)),i}}class U_{constructor(e){this.id=L_++,this.code=e,this.usedTimes=0}}function O_(n,e,t,i,s,r,o){const a=new Ul,c=new N_,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,S,D,B,V){const J=B.fog,z=V.geometry,$=M.isMeshStandardMaterial?B.environment:null,Q=(M.isMeshStandardMaterial?t:e).get(M.envMap||$),X=Q&&Q.mapping===Eo?Q.image.height:null,ge=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const xe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,we=xe!==void 0?xe.length:0;let Xe=0;z.morphAttributes.position!==void 0&&(Xe=1),z.morphAttributes.normal!==void 0&&(Xe=2),z.morphAttributes.color!==void 0&&(Xe=3);let k,he,me,N;if(ge){const ht=Xn[ge];k=ht.vertexShader,he=ht.fragmentShader}else k=M.vertexShader,he=M.fragmentShader,c.update(M),me=c.getVertexShaderID(M),N=c.getFragmentShaderID(M);const K=n.getRenderTarget(),se=n.state.buffers.depth.getReversed(),Te=V.isInstancedMesh===!0,Pe=V.isBatchedMesh===!0,tt=!!M.map,xt=!!M.matcap,I=!!Q,ie=!!M.aoMap,ee=!!M.lightMap,j=!!M.bumpMap,Z=!!M.normalMap,_e=!!M.displacementMap,oe=!!M.emissiveMap,ve=!!M.metalnessMap,Ye=!!M.roughnessMap,qe=M.anisotropy>0,b=M.clearcoat>0,x=M.dispersion>0,F=M.iridescence>0,W=M.sheen>0,ne=M.transmission>0,Y=qe&&!!M.anisotropyMap,Oe=b&&!!M.clearcoatMap,pe=b&&!!M.clearcoatNormalMap,Le=b&&!!M.clearcoatRoughnessMap,Ne=F&&!!M.iridescenceMap,ae=F&&!!M.iridescenceThicknessMap,be=W&&!!M.sheenColorMap,Ve=W&&!!M.sheenRoughnessMap,Fe=!!M.specularMap,ye=!!M.specularColorMap,Je=!!M.specularIntensityMap,L=ne&&!!M.transmissionMap,fe=ne&&!!M.thicknessMap,Me=!!M.gradientMap,Ie=!!M.alphaMap,le=M.alphaTest>0,te=!!M.alphaHash,Ue=!!M.extensions;let Ke=yi;M.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ke=n.toneMapping);const Mt={shaderID:ge,shaderType:M.type,shaderName:M.name,vertexShader:k,fragmentShader:he,defines:M.defines,customVertexShaderID:me,customFragmentShaderID:N,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Pe,batchingColor:Pe&&V._colorsTexture!==null,instancing:Te,instancingColor:Te&&V.instanceColor!==null,instancingMorph:Te&&V.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ps,alphaToCoverage:!!M.alphaToCoverage,map:tt,matcap:xt,envMap:I,envMapMode:I&&Q.mapping,envMapCubeUVHeight:X,aoMap:ie,lightMap:ee,bumpMap:j,normalMap:Z,displacementMap:u&&_e,emissiveMap:oe,normalMapObjectSpace:Z&&M.normalMapType===Dd,normalMapTangentSpace:Z&&M.normalMapType===Jh,metalnessMap:ve,roughnessMap:Ye,anisotropy:qe,anisotropyMap:Y,clearcoat:b,clearcoatMap:Oe,clearcoatNormalMap:pe,clearcoatRoughnessMap:Le,dispersion:x,iridescence:F,iridescenceMap:Ne,iridescenceThicknessMap:ae,sheen:W,sheenColorMap:be,sheenRoughnessMap:Ve,specularMap:Fe,specularColorMap:ye,specularIntensityMap:Je,transmission:ne,transmissionMap:L,thicknessMap:fe,gradientMap:Me,opaque:M.transparent===!1&&M.blending===Ts&&M.alphaToCoverage===!1,alphaMap:Ie,alphaTest:le,alphaHash:te,combine:M.combine,mapUv:tt&&_(M.map.channel),aoMapUv:ie&&_(M.aoMap.channel),lightMapUv:ee&&_(M.lightMap.channel),bumpMapUv:j&&_(M.bumpMap.channel),normalMapUv:Z&&_(M.normalMap.channel),displacementMapUv:_e&&_(M.displacementMap.channel),emissiveMapUv:oe&&_(M.emissiveMap.channel),metalnessMapUv:ve&&_(M.metalnessMap.channel),roughnessMapUv:Ye&&_(M.roughnessMap.channel),anisotropyMapUv:Y&&_(M.anisotropyMap.channel),clearcoatMapUv:Oe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:pe&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:be&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&_(M.sheenRoughnessMap.channel),specularMapUv:Fe&&_(M.specularMap.channel),specularColorMapUv:ye&&_(M.specularColorMap.channel),specularIntensityMapUv:Je&&_(M.specularIntensityMap.channel),transmissionMapUv:L&&_(M.transmissionMap.channel),thicknessMapUv:fe&&_(M.thicknessMap.channel),alphaMapUv:Ie&&_(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Z||qe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!z.attributes.uv&&(tt||Ie),fog:!!J,useFog:M.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:se,skinning:V.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Xe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ke,decodeVideoTexture:tt&&M.map.isVideoTexture===!0&&rt.getTransfer(M.map.colorSpace)===pt,decodeVideoTextureEmissive:oe&&M.emissiveMap.isVideoTexture===!0&&rt.getTransfer(M.emissiveMap.colorSpace)===pt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ci,flipSided:M.side===pn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ue&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&M.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function f(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)S.push(D),S.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(T(S,M),y(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function T(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const S=g[M.type];let D;if(S){const B=Xn[S];D=fr.clone(B.uniforms)}else D=M.uniforms;return D}function R(M,S){let D;for(let B=0,V=h.length;B<V;B++){const J=h[B];if(J.cacheKey===S){D=J,++D.usedTimes;break}}return D===void 0&&(D=new D_(n,S,M,r),h.push(D)),D}function A(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function w(M){c.remove(M)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:R,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:P}}function F_(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function B_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ph(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,u,p,g,_,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function a(d,u,p,g,_,m){const f=o(d,u,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(d,u,p,g,_,m){const f=o(d,u,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(d,u){t.length>1&&t.sort(d||B_),i.length>1&&i.sort(u||ph),s.length>1&&s.sort(u||ph)}function h(){for(let d=e,u=n.length;d<u;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function k_(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new mh,n.set(i,[o])):s>=r.length?(o=new mh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function z_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new $e};break;case"SpotLight":t={position:new C,direction:new C,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function H_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let G_=0;function V_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function W_(n){const e=new z_,t=H_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new C);const s=new C,r=new Tt,o=new Tt;function a(l){let h=0,d=0,u=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,T=0,y=0,v=0,R=0,A=0,w=0;l.sort(V_);for(let M=0,S=l.length;M<S;M++){const D=l[M],B=D.color,V=D.intensity,J=D.distance,z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=B.r*V,d+=B.g*V,u+=B.b*V;else if(D.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(D.sh.coefficients[$],V);w++}else if(D.isDirectionalLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,X=t.get(D);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=z,i.directionalShadowMatrix[p]=D.shadow.matrix,T++}i.directional[p]=$,p++}else if(D.isSpotLight){const $=e.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(B).multiplyScalar(V),$.distance=J,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,i.spot[_]=$;const Q=D.shadow;if(D.map&&(i.spotLightMap[R]=D.map,R++,Q.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[_]=Q.matrix,D.castShadow){const X=t.get(D);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=z,v++}_++}else if(D.isRectAreaLight){const $=e.get(D);$.color.copy(B).multiplyScalar(V),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=$,m++}else if(D.isPointLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){const Q=D.shadow,X=t.get(D);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,X.shadowCameraNear=Q.camera.near,X.shadowCameraFar=Q.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=z,i.pointShadowMatrix[g]=D.shadow.matrix,y++}i.point[g]=$,g++}else if(D.isHemisphereLight){const $=e.get(D);$.skyColor.copy(D.color).multiplyScalar(V),$.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[f]=$,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==T||P.numPointShadows!==y||P.numSpotShadows!==v||P.numSpotMaps!==R||P.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=T,P.numPointShadows=y,P.numSpotShadows=v,P.numSpotMaps=R,P.numLightProbes=w,i.version=G_++)}function c(l,h){let d=0,u=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,T=l.length;f<T;f++){const y=l[f];if(y.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(y.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=i.point[u];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function gh(n){const e=new W_(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function X_(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new gh(n),e.set(s,[a])):r>=o.length?(a=new gh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const q_=`void main() {
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
}`;function K_(n,e,t){let i=new Fl;const s=new ce,r=new ce,o=new _t,a=new gp({depthPacking:Id}),c=new _p,l={},h=t.maxTextureSize,d={[Ti]:pn,[pn]:Ti,[ci]:ci},u=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:q_,fragmentShader:Y_}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new hn;g.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Rt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dh;let f=this.type;this.render=function(A,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),B=n.state;B.setBlending(ui),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const V=f!==ai&&this.type===ai,J=f===ai&&this.type!==ai;for(let z=0,$=A.length;z<$;z++){const Q=A[z],X=Q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const ge=X.getFrameExtents();if(s.multiply(ge),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ge.x),s.x=r.x*ge.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ge.y),s.y=r.y*ge.y,X.mapSize.y=r.y)),X.map===null||V===!0||J===!0){const we=this.type!==ai?{minFilter:Bn,magFilter:Bn}:{};X.map!==null&&X.map.dispose(),X.map=new kn(s.x,s.y,we),X.map.texture.name=Q.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const xe=X.getViewportCount();for(let we=0;we<xe;we++){const Xe=X.getViewport(we);o.set(r.x*Xe.x,r.y*Xe.y,r.x*Xe.z,r.y*Xe.w),B.viewport(o),X.updateMatrices(Q,we),i=X.getFrustum(),v(w,P,X.camera,Q,this.type)}X.isPointLightShadow!==!0&&this.type===ai&&T(X,P),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,D)};function T(A,w){const P=e.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new kn(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,P,u,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,P,p,_,null)}function y(A,w,P,M){let S=null;const D=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)S=D;else if(S=P.isPointLight===!0?c:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const B=S.uuid,V=w.uuid;let J=l[B];J===void 0&&(J={},l[B]=J);let z=J[V];z===void 0&&(z=S.clone(),J[V]=z,w.addEventListener("dispose",R)),S=z}if(S.visible=w.visible,S.wireframe=w.wireframe,M===ai?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:d[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=n.properties.get(S);B.light=P}return S}function v(A,w,P,M,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===ai)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const V=e.update(A),J=A.material;if(Array.isArray(J)){const z=V.groups;for(let $=0,Q=z.length;$<Q;$++){const X=z[$],ge=J[X.materialIndex];if(ge&&ge.visible){const xe=y(A,ge,M,S);A.onBeforeShadow(n,A,w,P,V,xe,X),n.renderBufferDirect(P,null,V,xe,A,X),A.onAfterShadow(n,A,w,P,V,xe,X)}}}else if(J.visible){const z=y(A,J,M,S);A.onBeforeShadow(n,A,w,P,V,z,null),n.renderBufferDirect(P,null,V,z,A,null),A.onAfterShadow(n,A,w,P,V,z,null)}}const B=A.children;for(let V=0,J=B.length;V<J;V++)v(B[V],w,P,M,S)}function R(A){A.target.removeEventListener("dispose",R);for(const P in l){const M=l[P],S=A.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const $_={[Ra]:Ca,[Pa]:La,[Ia]:Na,[ws]:Da,[Ca]:Ra,[La]:Pa,[Na]:Ia,[Da]:ws};function J_(n,e){function t(){let L=!1;const fe=new _t;let Me=null;const Ie=new _t(0,0,0,0);return{setMask:function(le){Me!==le&&!L&&(n.colorMask(le,le,le,le),Me=le)},setLocked:function(le){L=le},setClear:function(le,te,Ue,Ke,Mt){Mt===!0&&(le*=Ke,te*=Ke,Ue*=Ke),fe.set(le,te,Ue,Ke),Ie.equals(fe)===!1&&(n.clearColor(le,te,Ue,Ke),Ie.copy(fe))},reset:function(){L=!1,Me=null,Ie.set(-1,0,0,0)}}}function i(){let L=!1,fe=!1,Me=null,Ie=null,le=null;return{setReversed:function(te){if(fe!==te){const Ue=e.get("EXT_clip_control");te?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),fe=te;const Ke=le;le=null,this.setClear(Ke)}},getReversed:function(){return fe},setTest:function(te){te?K(n.DEPTH_TEST):se(n.DEPTH_TEST)},setMask:function(te){Me!==te&&!L&&(n.depthMask(te),Me=te)},setFunc:function(te){if(fe&&(te=$_[te]),Ie!==te){switch(te){case Ra:n.depthFunc(n.NEVER);break;case Ca:n.depthFunc(n.ALWAYS);break;case Pa:n.depthFunc(n.LESS);break;case ws:n.depthFunc(n.LEQUAL);break;case Ia:n.depthFunc(n.EQUAL);break;case Da:n.depthFunc(n.GEQUAL);break;case La:n.depthFunc(n.GREATER);break;case Na:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=te}},setLocked:function(te){L=te},setClear:function(te){le!==te&&(fe&&(te=1-te),n.clearDepth(te),le=te)},reset:function(){L=!1,Me=null,Ie=null,le=null,fe=!1}}}function s(){let L=!1,fe=null,Me=null,Ie=null,le=null,te=null,Ue=null,Ke=null,Mt=null;return{setTest:function(ht){L||(ht?K(n.STENCIL_TEST):se(n.STENCIL_TEST))},setMask:function(ht){fe!==ht&&!L&&(n.stencilMask(ht),fe=ht)},setFunc:function(ht,ti,Vn){(Me!==ht||Ie!==ti||le!==Vn)&&(n.stencilFunc(ht,ti,Vn),Me=ht,Ie=ti,le=Vn)},setOp:function(ht,ti,Vn){(te!==ht||Ue!==ti||Ke!==Vn)&&(n.stencilOp(ht,ti,Vn),te=ht,Ue=ti,Ke=Vn)},setLocked:function(ht){L=ht},setClear:function(ht){Mt!==ht&&(n.clearStencil(ht),Mt=ht)},reset:function(){L=!1,fe=null,Me=null,Ie=null,le=null,te=null,Ue=null,Ke=null,Mt=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,T=null,y=null,v=null,R=null,A=null,w=new $e(0,0,0),P=0,M=!1,S=null,D=null,B=null,V=null,J=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Q=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=Q>=2);let ge=null,xe={};const we=n.getParameter(n.SCISSOR_BOX),Xe=n.getParameter(n.VIEWPORT),k=new _t().fromArray(we),he=new _t().fromArray(Xe);function me(L,fe,Me,Ie){const le=new Uint8Array(4),te=n.createTexture();n.bindTexture(L,te),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<Me;Ue++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(fe+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return te}const N={};N[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),N[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),N[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(ws),j(!1),Z(lc),K(n.CULL_FACE),ie(ui);function K(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function se(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Te(L,fe){return d[L]!==fe?(n.bindFramebuffer(L,fe),d[L]=fe,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=fe),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function Pe(L,fe){let Me=p,Ie=!1;if(L){Me=u.get(fe),Me===void 0&&(Me=[],u.set(fe,Me));const le=L.textures;if(Me.length!==le.length||Me[0]!==n.COLOR_ATTACHMENT0){for(let te=0,Ue=le.length;te<Ue;te++)Me[te]=n.COLOR_ATTACHMENT0+te;Me.length=le.length,Ie=!0}}else Me[0]!==n.BACK&&(Me[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(Me)}function tt(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const xt={[Bi]:n.FUNC_ADD,[hd]:n.FUNC_SUBTRACT,[ud]:n.FUNC_REVERSE_SUBTRACT};xt[dd]=n.MIN,xt[fd]=n.MAX;const I={[pd]:n.ZERO,[md]:n.ONE,[gd]:n.SRC_COLOR,[Aa]:n.SRC_ALPHA,[yd]:n.SRC_ALPHA_SATURATE,[Md]:n.DST_COLOR,[vd]:n.DST_ALPHA,[_d]:n.ONE_MINUS_SRC_COLOR,[wa]:n.ONE_MINUS_SRC_ALPHA,[Sd]:n.ONE_MINUS_DST_COLOR,[xd]:n.ONE_MINUS_DST_ALPHA,[Ed]:n.CONSTANT_COLOR,[Td]:n.ONE_MINUS_CONSTANT_COLOR,[bd]:n.CONSTANT_ALPHA,[Ad]:n.ONE_MINUS_CONSTANT_ALPHA};function ie(L,fe,Me,Ie,le,te,Ue,Ke,Mt,ht){if(L===ui){_===!0&&(se(n.BLEND),_=!1);return}if(_===!1&&(K(n.BLEND),_=!0),L!==cd){if(L!==m||ht!==M){if((f!==Bi||v!==Bi)&&(n.blendEquation(n.FUNC_ADD),f=Bi,v=Bi),ht)switch(L){case Ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lo:n.blendFunc(n.ONE,n.ONE);break;case cc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case cc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,y=null,R=null,A=null,w.set(0,0,0),P=0,m=L,M=ht}return}le=le||fe,te=te||Me,Ue=Ue||Ie,(fe!==f||le!==v)&&(n.blendEquationSeparate(xt[fe],xt[le]),f=fe,v=le),(Me!==T||Ie!==y||te!==R||Ue!==A)&&(n.blendFuncSeparate(I[Me],I[Ie],I[te],I[Ue]),T=Me,y=Ie,R=te,A=Ue),(Ke.equals(w)===!1||Mt!==P)&&(n.blendColor(Ke.r,Ke.g,Ke.b,Mt),w.copy(Ke),P=Mt),m=L,M=!1}function ee(L,fe){L.side===ci?se(n.CULL_FACE):K(n.CULL_FACE);let Me=L.side===pn;fe&&(Me=!Me),j(Me),L.blending===Ts&&L.transparent===!1?ie(ui):ie(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const Ie=L.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),oe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):se(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(L){S!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),S=L)}function Z(L){L!==ad?(K(n.CULL_FACE),L!==D&&(L===lc?n.cullFace(n.BACK):L===ld?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):se(n.CULL_FACE),D=L}function _e(L){L!==B&&($&&n.lineWidth(L),B=L)}function oe(L,fe,Me){L?(K(n.POLYGON_OFFSET_FILL),(V!==fe||J!==Me)&&(n.polygonOffset(fe,Me),V=fe,J=Me)):se(n.POLYGON_OFFSET_FILL)}function ve(L){L?K(n.SCISSOR_TEST):se(n.SCISSOR_TEST)}function Ye(L){L===void 0&&(L=n.TEXTURE0+z-1),ge!==L&&(n.activeTexture(L),ge=L)}function qe(L,fe,Me){Me===void 0&&(ge===null?Me=n.TEXTURE0+z-1:Me=ge);let Ie=xe[Me];Ie===void 0&&(Ie={type:void 0,texture:void 0},xe[Me]=Ie),(Ie.type!==L||Ie.texture!==fe)&&(ge!==Me&&(n.activeTexture(Me),ge=Me),n.bindTexture(L,fe||N[L]),Ie.type=L,Ie.texture=fe)}function b(){const L=xe[ge];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{n.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{n.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Oe(){try{n.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{n.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{n.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(){try{n.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{n.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(L){k.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),k.copy(L))}function Ve(L){he.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),he.copy(L))}function Fe(L,fe){let Me=l.get(fe);Me===void 0&&(Me=new WeakMap,l.set(fe,Me));let Ie=Me.get(L);Ie===void 0&&(Ie=n.getUniformBlockIndex(fe,L.name),Me.set(L,Ie))}function ye(L,fe){const Ie=l.get(fe).get(L);c.get(fe)!==Ie&&(n.uniformBlockBinding(fe,Ie,L.__bindingPointIndex),c.set(fe,Ie))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ge=null,xe={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,T=null,y=null,v=null,R=null,A=null,w=new $e(0,0,0),P=0,M=!1,S=null,D=null,B=null,V=null,J=null,k.set(0,0,n.canvas.width,n.canvas.height),he.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:se,bindFramebuffer:Te,drawBuffers:Pe,useProgram:tt,setBlending:ie,setMaterial:ee,setFlipSided:j,setCullFace:Z,setLineWidth:_e,setPolygonOffset:oe,setScissorTest:ve,activeTexture:Ye,bindTexture:qe,unbindTexture:b,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:Ne,texImage3D:ae,updateUBOMapping:Fe,uniformBlockBinding:ye,texStorage2D:pe,texStorage3D:Le,texSubImage2D:W,texSubImage3D:ne,compressedTexSubImage2D:Y,compressedTexSubImage3D:Oe,scissor:be,viewport:Ve,reset:Je}}function Z_(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ce,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return p?new OffscreenCanvas(b,x):fo("canvas")}function _(b,x,F){let W=1;const ne=qe(b);if((ne.width>F||ne.height>F)&&(W=F/Math.max(ne.width,ne.height)),W<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Y=Math.floor(W*ne.width),Oe=Math.floor(W*ne.height);d===void 0&&(d=g(Y,Oe));const pe=x?g(Y,Oe):d;return pe.width=Y,pe.height=Oe,pe.getContext("2d").drawImage(b,0,0,Y,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Y+"x"+Oe+")."),pe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){n.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(b,x,F,W,ne=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=x;if(x===n.RED&&(F===n.FLOAT&&(Y=n.R32F),F===n.HALF_FLOAT&&(Y=n.R16F),F===n.UNSIGNED_BYTE&&(Y=n.R8)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.R8UI),F===n.UNSIGNED_SHORT&&(Y=n.R16UI),F===n.UNSIGNED_INT&&(Y=n.R32UI),F===n.BYTE&&(Y=n.R8I),F===n.SHORT&&(Y=n.R16I),F===n.INT&&(Y=n.R32I)),x===n.RG&&(F===n.FLOAT&&(Y=n.RG32F),F===n.HALF_FLOAT&&(Y=n.RG16F),F===n.UNSIGNED_BYTE&&(Y=n.RG8)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RG8UI),F===n.UNSIGNED_SHORT&&(Y=n.RG16UI),F===n.UNSIGNED_INT&&(Y=n.RG32UI),F===n.BYTE&&(Y=n.RG8I),F===n.SHORT&&(Y=n.RG16I),F===n.INT&&(Y=n.RG32I)),x===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),F===n.UNSIGNED_INT&&(Y=n.RGB32UI),F===n.BYTE&&(Y=n.RGB8I),F===n.SHORT&&(Y=n.RGB16I),F===n.INT&&(Y=n.RGB32I)),x===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),F===n.UNSIGNED_INT&&(Y=n.RGBA32UI),F===n.BYTE&&(Y=n.RGBA8I),F===n.SHORT&&(Y=n.RGBA16I),F===n.INT&&(Y=n.RGBA32I)),x===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),x===n.RGBA){const Oe=ne?ho:rt.getTransfer(W);F===n.FLOAT&&(Y=n.RGBA32F),F===n.HALF_FLOAT&&(Y=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Y=Oe===pt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(b,x){let F;return b?x===null||x===Gi||x===cr?F=n.DEPTH24_STENCIL8:x===hi?F=n.DEPTH32F_STENCIL8:x===lr&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Gi||x===cr?F=n.DEPTH_COMPONENT24:x===hi?F=n.DEPTH_COMPONENT32F:x===lr&&(F=n.DEPTH_COMPONENT16),F}function R(b,x){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Bn&&b.minFilter!==Yn?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function A(b){const x=b.target;x.removeEventListener("dispose",A),P(x),x.isVideoTexture&&h.delete(x)}function w(b){const x=b.target;x.removeEventListener("dispose",w),S(x)}function P(b){const x=i.get(b);if(x.__webglInit===void 0)return;const F=b.source,W=u.get(F);if(W){const ne=W[x.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(b),Object.keys(W).length===0&&u.delete(F)}i.remove(b)}function M(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const F=b.source,W=u.get(F);delete W[x.__cacheKey],o.memory.textures--}function S(b){const x=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let ne=0;ne<x.__webglFramebuffer[W].length;ne++)n.deleteFramebuffer(x.__webglFramebuffer[W][ne]);else n.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)n.deleteFramebuffer(x.__webglFramebuffer[W]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=b.textures;for(let W=0,ne=F.length;W<ne;W++){const Y=i.get(F[W]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(F[W])}i.remove(b)}let D=0;function B(){D=0}function V(){const b=D;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),D+=1,b}function J(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function z(b,x){const F=i.get(b);if(b.isVideoTexture&&ve(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&F.__version!==b.version){const W=b.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(F,b,x);return}}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function $(b,x){const F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){N(F,b,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function Q(b,x){const F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){N(F,b,x);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function X(b,x){const F=i.get(b);if(b.version>0&&F.__version!==b.version){K(F,b,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}const ge={[co]:n.REPEAT,[zi]:n.CLAMP_TO_EDGE,[Fa]:n.MIRRORED_REPEAT},xe={[Bn]:n.NEAREST,[Cd]:n.NEAREST_MIPMAP_NEAREST,[Ar]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[Bo]:n.LINEAR_MIPMAP_NEAREST,[Hi]:n.LINEAR_MIPMAP_LINEAR},we={[Ld]:n.NEVER,[kd]:n.ALWAYS,[Nd]:n.LESS,[Zh]:n.LEQUAL,[Ud]:n.EQUAL,[Bd]:n.GEQUAL,[Od]:n.GREATER,[Fd]:n.NOTEQUAL};function Xe(b,x){if(x.type===hi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Yn||x.magFilter===Bo||x.magFilter===Ar||x.magFilter===Hi||x.minFilter===Yn||x.minFilter===Bo||x.minFilter===Ar||x.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,ge[x.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,ge[x.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,ge[x.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,xe[x.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,xe[x.minFilter]),x.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,we[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Bn||x.minFilter!==Ar&&x.minFilter!==Hi||x.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function k(b,x){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",A));const W=x.source;let ne=u.get(W);ne===void 0&&(ne={},u.set(W,ne));const Y=J(x);if(Y!==b.__cacheKey){ne[Y]===void 0&&(ne[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ne[Y].usedTimes++;const Oe=ne[b.__cacheKey];Oe!==void 0&&(ne[b.__cacheKey].usedTimes--,Oe.usedTimes===0&&M(x)),b.__cacheKey=Y,b.__webglTexture=ne[Y].texture}return F}function he(b,x,F){return Math.floor(Math.floor(b/F)/x)}function me(b,x,F,W){const Y=b.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,F,W,x.data);else{Y.sort((ae,be)=>ae.start-be.start);let Oe=0;for(let ae=1;ae<Y.length;ae++){const be=Y[Oe],Ve=Y[ae],Fe=be.start+be.count,ye=he(Ve.start,x.width,4),Je=he(be.start,x.width,4);Ve.start<=Fe+1&&ye===Je&&he(Ve.start+Ve.count-1,x.width,4)===ye?be.count=Math.max(be.count,Ve.start+Ve.count-be.start):(++Oe,Y[Oe]=Ve)}Y.length=Oe+1;const pe=n.getParameter(n.UNPACK_ROW_LENGTH),Le=n.getParameter(n.UNPACK_SKIP_PIXELS),Ne=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let ae=0,be=Y.length;ae<be;ae++){const Ve=Y[ae],Fe=Math.floor(Ve.start/4),ye=Math.ceil(Ve.count/4),Je=Fe%x.width,L=Math.floor(Fe/x.width),fe=ye,Me=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Je),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Je,L,fe,Me,F,W,x.data)}b.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Le),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ne)}}function N(b,x,F){let W=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=n.TEXTURE_3D);const ne=k(b,x),Y=x.source;t.bindTexture(W,b.__webglTexture,n.TEXTURE0+F);const Oe=i.get(Y);if(Y.version!==Oe.__version||ne===!0){t.activeTexture(n.TEXTURE0+F);const pe=rt.getPrimaries(rt.workingColorSpace),Le=x.colorSpace===Si?null:rt.getPrimaries(x.colorSpace),Ne=x.colorSpace===Si||pe===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ae=_(x.image,!1,s.maxTextureSize);ae=Ye(x,ae);const be=r.convert(x.format,x.colorSpace),Ve=r.convert(x.type);let Fe=y(x.internalFormat,be,Ve,x.colorSpace,x.isVideoTexture);Xe(W,x);let ye;const Je=x.mipmaps,L=x.isVideoTexture!==!0,fe=Oe.__version===void 0||ne===!0,Me=Y.dataReady,Ie=R(x,ae);if(x.isDepthTexture)Fe=v(x.format===ur,x.type),fe&&(L?t.texStorage2D(n.TEXTURE_2D,1,Fe,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Fe,ae.width,ae.height,0,be,Ve,null));else if(x.isDataTexture)if(Je.length>0){L&&fe&&t.texStorage2D(n.TEXTURE_2D,Ie,Fe,Je[0].width,Je[0].height);for(let le=0,te=Je.length;le<te;le++)ye=Je[le],L?Me&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,ye.width,ye.height,be,Ve,ye.data):t.texImage2D(n.TEXTURE_2D,le,Fe,ye.width,ye.height,0,be,Ve,ye.data);x.generateMipmaps=!1}else L?(fe&&t.texStorage2D(n.TEXTURE_2D,Ie,Fe,ae.width,ae.height),Me&&me(x,ae,be,Ve)):t.texImage2D(n.TEXTURE_2D,0,Fe,ae.width,ae.height,0,be,Ve,ae.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){L&&fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Fe,Je[0].width,Je[0].height,ae.depth);for(let le=0,te=Je.length;le<te;le++)if(ye=Je[le],x.format!==Fn)if(be!==null)if(L){if(Me)if(x.layerUpdates.size>0){const Ue=qc(ye.width,ye.height,x.format,x.type);for(const Ke of x.layerUpdates){const Mt=ye.data.subarray(Ke*Ue/ye.data.BYTES_PER_ELEMENT,(Ke+1)*Ue/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,Ke,ye.width,ye.height,1,be,Mt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,ye.width,ye.height,ae.depth,be,ye.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,Fe,ye.width,ye.height,ae.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?Me&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,ye.width,ye.height,ae.depth,be,Ve,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,Fe,ye.width,ye.height,ae.depth,0,be,Ve,ye.data)}else{L&&fe&&t.texStorage2D(n.TEXTURE_2D,Ie,Fe,Je[0].width,Je[0].height);for(let le=0,te=Je.length;le<te;le++)ye=Je[le],x.format!==Fn?be!==null?L?Me&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,ye.width,ye.height,be,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,le,Fe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?Me&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,ye.width,ye.height,be,Ve,ye.data):t.texImage2D(n.TEXTURE_2D,le,Fe,ye.width,ye.height,0,be,Ve,ye.data)}else if(x.isDataArrayTexture)if(L){if(fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Fe,ae.width,ae.height,ae.depth),Me)if(x.layerUpdates.size>0){const le=qc(ae.width,ae.height,x.format,x.type);for(const te of x.layerUpdates){const Ue=ae.data.subarray(te*le/ae.data.BYTES_PER_ELEMENT,(te+1)*le/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,ae.width,ae.height,1,be,Ve,Ue)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,be,Ve,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,ae.width,ae.height,ae.depth,0,be,Ve,ae.data);else if(x.isData3DTexture)L?(fe&&t.texStorage3D(n.TEXTURE_3D,Ie,Fe,ae.width,ae.height,ae.depth),Me&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,be,Ve,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,ae.width,ae.height,ae.depth,0,be,Ve,ae.data);else if(x.isFramebufferTexture){if(fe)if(L)t.texStorage2D(n.TEXTURE_2D,Ie,Fe,ae.width,ae.height);else{let le=ae.width,te=ae.height;for(let Ue=0;Ue<Ie;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,Fe,le,te,0,be,Ve,null),le>>=1,te>>=1}}else if(Je.length>0){if(L&&fe){const le=qe(Je[0]);t.texStorage2D(n.TEXTURE_2D,Ie,Fe,le.width,le.height)}for(let le=0,te=Je.length;le<te;le++)ye=Je[le],L?Me&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,be,Ve,ye):t.texImage2D(n.TEXTURE_2D,le,Fe,be,Ve,ye);x.generateMipmaps=!1}else if(L){if(fe){const le=qe(ae);t.texStorage2D(n.TEXTURE_2D,Ie,Fe,le.width,le.height)}Me&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Ve,ae)}else t.texImage2D(n.TEXTURE_2D,0,Fe,be,Ve,ae);m(x)&&f(W),Oe.__version=Y.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function K(b,x,F){if(x.image.length!==6)return;const W=k(b,x),ne=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+F);const Y=i.get(ne);if(ne.version!==Y.__version||W===!0){t.activeTexture(n.TEXTURE0+F);const Oe=rt.getPrimaries(rt.workingColorSpace),pe=x.colorSpace===Si?null:rt.getPrimaries(x.colorSpace),Le=x.colorSpace===Si||Oe===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Ne=x.isCompressedTexture||x.image[0].isCompressedTexture,ae=x.image[0]&&x.image[0].isDataTexture,be=[];for(let te=0;te<6;te++)!Ne&&!ae?be[te]=_(x.image[te],!0,s.maxCubemapSize):be[te]=ae?x.image[te].image:x.image[te],be[te]=Ye(x,be[te]);const Ve=be[0],Fe=r.convert(x.format,x.colorSpace),ye=r.convert(x.type),Je=y(x.internalFormat,Fe,ye,x.colorSpace),L=x.isVideoTexture!==!0,fe=Y.__version===void 0||W===!0,Me=ne.dataReady;let Ie=R(x,Ve);Xe(n.TEXTURE_CUBE_MAP,x);let le;if(Ne){L&&fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,Je,Ve.width,Ve.height);for(let te=0;te<6;te++){le=be[te].mipmaps;for(let Ue=0;Ue<le.length;Ue++){const Ke=le[Ue];x.format!==Fn?Fe!==null?L?Me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue,0,0,Ke.width,Ke.height,Fe,Ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue,Je,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue,0,0,Ke.width,Ke.height,Fe,ye,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue,Je,Ke.width,Ke.height,0,Fe,ye,Ke.data)}}}else{if(le=x.mipmaps,L&&fe){le.length>0&&Ie++;const te=qe(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,Je,te.width,te.height)}for(let te=0;te<6;te++)if(ae){L?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,be[te].width,be[te].height,Fe,ye,be[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,be[te].width,be[te].height,0,Fe,ye,be[te].data);for(let Ue=0;Ue<le.length;Ue++){const Mt=le[Ue].image[te].image;L?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue+1,0,0,Mt.width,Mt.height,Fe,ye,Mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue+1,Je,Mt.width,Mt.height,0,Fe,ye,Mt.data)}}else{L?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Fe,ye,be[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,Fe,ye,be[te]);for(let Ue=0;Ue<le.length;Ue++){const Ke=le[Ue];L?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue+1,0,0,Fe,ye,Ke.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ue+1,Je,Fe,ye,Ke.image[te])}}}m(x)&&f(n.TEXTURE_CUBE_MAP),Y.__version=ne.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function se(b,x,F,W,ne,Y){const Oe=r.convert(F.format,F.colorSpace),pe=r.convert(F.type),Le=y(F.internalFormat,Oe,pe,F.colorSpace),Ne=i.get(x),ae=i.get(F);if(ae.__renderTarget=x,!Ne.__hasExternalTextures){const be=Math.max(1,x.width>>Y),Ve=Math.max(1,x.height>>Y);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,Y,Le,be,Ve,x.depth,0,Oe,pe,null):t.texImage2D(ne,Y,Le,be,Ve,0,Oe,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),oe(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,ne,ae.__webglTexture,0,_e(x)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,ne,ae.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(b,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,b),x.depthBuffer){const W=x.depthTexture,ne=W&&W.isDepthTexture?W.type:null,Y=v(x.stencilBuffer,ne),Oe=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=_e(x);oe(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,Y,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,Y,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Y,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Oe,n.RENDERBUFFER,b)}else{const W=x.textures;for(let ne=0;ne<W.length;ne++){const Y=W[ne],Oe=r.convert(Y.format,Y.colorSpace),pe=r.convert(Y.type),Le=y(Y.internalFormat,Oe,pe,Y.colorSpace),Ne=_e(x);F&&oe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Le,x.width,x.height):oe(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,Le,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Le,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(x.depthTexture);W.__renderTarget=x,(!W.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),z(x.depthTexture,0);const ne=W.__webglTexture,Y=_e(x);if(x.depthTexture.format===hr)oe(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(x.depthTexture.format===ur)oe(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function tt(b){const x=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const W=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){const ne=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",ne)};W.addEventListener("dispose",ne),x.__depthDisposeCallback=ne}x.__boundDepthTexture=W}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const W=b.texture.mipmaps;W&&W.length>0?Pe(x.__webglFramebuffer[0],b):Pe(x.__webglFramebuffer,b)}else if(F){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=n.createRenderbuffer(),Te(x.__webglDepthbuffer[W],b,!1);else{const ne=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,Y)}}else{const W=b.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Te(x.__webglDepthbuffer,b,!1);else{const ne=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function xt(b,x,F){const W=i.get(b);x!==void 0&&se(W.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&tt(b)}function I(b){const x=b.texture,F=i.get(b),W=i.get(x);b.addEventListener("dispose",w);const ne=b.textures,Y=b.isWebGLCubeRenderTarget===!0,Oe=ne.length>1;if(Oe||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=x.version,o.memory.textures++),Y){F.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[pe]=[];for(let Le=0;Le<x.mipmaps.length;Le++)F.__webglFramebuffer[pe][Le]=n.createFramebuffer()}else F.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let pe=0;pe<x.mipmaps.length;pe++)F.__webglFramebuffer[pe]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Oe)for(let pe=0,Le=ne.length;pe<Le;pe++){const Ne=i.get(ne[pe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&oe(b)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let pe=0;pe<ne.length;pe++){const Le=ne[pe];F.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[pe]);const Ne=r.convert(Le.format,Le.colorSpace),ae=r.convert(Le.type),be=y(Le.internalFormat,Ne,ae,Le.colorSpace,b.isXRRenderTarget===!0),Ve=_e(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,be,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,F.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Te(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Xe(n.TEXTURE_CUBE_MAP,x);for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0)for(let Le=0;Le<x.mipmaps.length;Le++)se(F.__webglFramebuffer[pe][Le],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Le);else se(F.__webglFramebuffer[pe],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(x)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let pe=0,Le=ne.length;pe<Le;pe++){const Ne=ne[pe],ae=i.get(Ne);let be=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(be=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,ae.__webglTexture),Xe(be,Ne),se(F.__webglFramebuffer,b,Ne,n.COLOR_ATTACHMENT0+pe,be,0),m(Ne)&&f(be)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(pe=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,W.__webglTexture),Xe(pe,x),x.mipmaps&&x.mipmaps.length>0)for(let Le=0;Le<x.mipmaps.length;Le++)se(F.__webglFramebuffer[Le],b,x,n.COLOR_ATTACHMENT0,pe,Le);else se(F.__webglFramebuffer,b,x,n.COLOR_ATTACHMENT0,pe,0);m(x)&&f(pe),t.unbindTexture()}b.depthBuffer&&tt(b)}function ie(b){const x=b.textures;for(let F=0,W=x.length;F<W;F++){const ne=x[F];if(m(ne)){const Y=T(b),Oe=i.get(ne).__webglTexture;t.bindTexture(Y,Oe),f(Y),t.unbindTexture()}}}const ee=[],j=[];function Z(b){if(b.samples>0){if(oe(b)===!1){const x=b.textures,F=b.width,W=b.height;let ne=n.COLOR_BUFFER_BIT;const Y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Oe=i.get(b),pe=x.length>1;if(pe)for(let Ne=0;Ne<x.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const Le=b.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Ne=0;Ne<x.length;Ne++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ne]);const ae=i.get(x[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,F,W,0,0,F,W,ne,n.NEAREST),c===!0&&(ee.length=0,j.length=0,ee.push(n.COLOR_ATTACHMENT0+Ne),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ee.push(Y),j.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,j)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Ne=0;Ne<x.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ne]);const ae=i.get(x[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const x=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function _e(b){return Math.min(s.maxSamples,b.samples)}function oe(b){const x=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ve(b){const x=o.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function Ye(b,x){const F=b.colorSpace,W=b.format,ne=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==Ps&&F!==Si&&(rt.getTransfer(F)===pt?(W!==Fn||ne!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function qe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.setTexture2D=z,this.setTexture2DArray=$,this.setTexture3D=Q,this.setTextureCube=X,this.rebindTextures=xt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=se,this.useMultisampledRTT=oe}function j_(n,e){function t(i,s=Si){let r;const o=rt.getTransfer(s);if(i===Zn)return n.UNSIGNED_BYTE;if(i===wl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Rl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Wh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Xh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gh)return n.BYTE;if(i===Vh)return n.SHORT;if(i===lr)return n.UNSIGNED_SHORT;if(i===Al)return n.INT;if(i===Gi)return n.UNSIGNED_INT;if(i===hi)return n.FLOAT;if(i===di)return n.HALF_FLOAT;if(i===qh)return n.ALPHA;if(i===Yh)return n.RGB;if(i===Fn)return n.RGBA;if(i===hr)return n.DEPTH_COMPONENT;if(i===ur)return n.DEPTH_STENCIL;if(i===Kh)return n.RED;if(i===Cl)return n.RED_INTEGER;if(i===$h)return n.RG;if(i===Pl)return n.RG_INTEGER;if(i===Il)return n.RGBA_INTEGER;if(i===Qr||i===eo||i===to||i===no)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===to)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===no)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ba||i===ka||i===za||i===Ha)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ga||i===Va||i===Wa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ga||i===Va)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Wa)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xa||i===qa||i===Ya||i===Ka||i===$a||i===Ja||i===Za||i===ja||i===Qa||i===el||i===tl||i===nl||i===il||i===sl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Xa)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qa)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ya)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ka)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$a)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ja)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Za)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ja)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qa)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===el)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===il)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rl||i===ol||i===al)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===rl)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ll||i===cl||i===hl||i===ul)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ll)return r.COMPRESSED_RED_RGTC1_EXT;if(i===cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Q_=`
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

}`;class tv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new lu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new an({vertexShader:Q_,fragmentShader:ev,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rt(new ks(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nv extends Us{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new tv,f={},T=t.getContextAttributes();let y=null,v=null;const R=[],A=[],w=new ce;let P=null;const M=new fn;M.viewport=new _t;const S=new fn;S.viewport=new _t;const D=[M,S],B=new yp;let V=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let K=R[N];return K===void 0&&(K=new ra,R[N]=K),K.getTargetRaySpace()},this.getControllerGrip=function(N){let K=R[N];return K===void 0&&(K=new ra,R[N]=K),K.getGripSpace()},this.getHand=function(N){let K=R[N];return K===void 0&&(K=new ra,R[N]=K),K.getHandSpace()};function z(N){const K=A.indexOf(N.inputSource);if(K===-1)return;const se=R[K];se!==void 0&&(se.update(N.inputSource,N.frame,l||o),se.dispatchEvent({type:N.type,data:N.inputSource}))}function $(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",Q);for(let N=0;N<R.length;N++){const K=A[N];K!==null&&(A[N]=null,R[N].disconnect(K))}V=null,J=null,m.reset();for(const N in f)delete f[N];e.setRenderTarget(y),p=null,u=null,d=null,s=null,v=null,me.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(N){if(s=N,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",$),s.addEventListener("inputsourceschange",Q),T.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Te=null,Pe=null;T.depth&&(Pe=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=T.stencil?ur:hr,Te=T.stencil?cr:Gi);const tt={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(tt),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new kn(u.textureWidth,u.textureHeight,{format:Fn,type:Zn,depthTexture:new au(u.textureWidth,u.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const se={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new kn(p.framebufferWidth,p.framebufferHeight,{format:Fn,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),me.setContext(s),me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(N){for(let K=0;K<N.removed.length;K++){const se=N.removed[K],Te=A.indexOf(se);Te>=0&&(A[Te]=null,R[Te].disconnect(se))}for(let K=0;K<N.added.length;K++){const se=N.added[K];let Te=A.indexOf(se);if(Te===-1){for(let tt=0;tt<R.length;tt++)if(tt>=A.length){A.push(se),Te=tt;break}else if(A[tt]===null){A[tt]=se,Te=tt;break}if(Te===-1)break}const Pe=R[Te];Pe&&Pe.connect(se)}}const X=new C,ge=new C;function xe(N,K,se){X.setFromMatrixPosition(K.matrixWorld),ge.setFromMatrixPosition(se.matrixWorld);const Te=X.distanceTo(ge),Pe=K.projectionMatrix.elements,tt=se.projectionMatrix.elements,xt=Pe[14]/(Pe[10]-1),I=Pe[14]/(Pe[10]+1),ie=(Pe[9]+1)/Pe[5],ee=(Pe[9]-1)/Pe[5],j=(Pe[8]-1)/Pe[0],Z=(tt[8]+1)/tt[0],_e=xt*j,oe=xt*Z,ve=Te/(-j+Z),Ye=ve*-j;if(K.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Ye),N.translateZ(ve),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),Pe[10]===-1)N.projectionMatrix.copy(K.projectionMatrix),N.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const qe=xt+ve,b=I+ve,x=_e-Ye,F=oe+(Te-Ye),W=ie*I/b*qe,ne=ee*I/b*qe;N.projectionMatrix.makePerspective(x,F,W,ne,qe,b),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function we(N,K){K===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(K.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(s===null)return;let K=N.near,se=N.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(se=m.depthFar)),B.near=S.near=M.near=K,B.far=S.far=M.far=se,(V!==B.near||J!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),V=B.near,J=B.far),B.layers.mask=N.layers.mask|6,M.layers.mask=B.layers.mask&3,S.layers.mask=B.layers.mask&5;const Te=N.parent,Pe=B.cameras;we(B,Te);for(let tt=0;tt<Pe.length;tt++)we(Pe[tt],Te);Pe.length===2?xe(B,M,S):B.projectionMatrix.copy(M.projectionMatrix),Xe(N,B,Te)};function Xe(N,K,se){se===null?N.matrix.copy(K.matrixWorld):(N.matrix.copy(se.matrixWorld),N.matrix.invert(),N.matrix.multiply(K.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(K.projectionMatrix),N.projectionMatrixInverse.copy(K.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Is*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(N){c=N,u!==null&&(u.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(N){return f[N]};let k=null;function he(N,K){if(h=K.getViewerPose(l||o),g=K,h!==null){const se=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Te=!1;se.length!==B.cameras.length&&(B.cameras.length=0,Te=!0);for(let I=0;I<se.length;I++){const ie=se[I];let ee=null;if(p!==null)ee=p.getViewport(ie);else{const Z=d.getViewSubImage(u,ie);ee=Z.viewport,I===0&&(e.setRenderTargetTextures(v,Z.colorTexture,Z.depthStencilTexture),e.setRenderTarget(v))}let j=D[I];j===void 0&&(j=new fn,j.layers.enable(I),j.viewport=new _t,D[I]=j),j.matrix.fromArray(ie.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(ie.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(ee.x,ee.y,ee.width,ee.height),I===0&&(B.matrix.copy(j.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Te===!0&&B.cameras.push(j)}const Pe=s.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const I=d.getDepthInformation(se[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(Pe&&Pe.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let I=0;I<se.length;I++){const ie=se[I].camera;if(ie){let ee=f[ie];ee||(ee=new lu,f[ie]=ee);const j=d.getCameraImage(ie);ee.sourceTexture=j}}}}for(let se=0;se<R.length;se++){const Te=A[se],Pe=R[se];Te!==null&&Pe!==void 0&&Pe.update(Te,K,l||o)}k&&k(N,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}const me=new Su;me.setAnimationLoop(he),this.setAnimationLoop=function(N){k=N},this.dispose=function(){}}}const Ui=new Dn,iv=new Tt;function sv(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,iu(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,T,y,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,T,y):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===pn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===pn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=e.get(f),y=T.envMap,v=T.envMapRotation;y&&(m.envMap.value=y,Ui.copy(v),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(iv.makeRotationFromEuler(Ui)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,T,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===pn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function rv(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,y){const v=y.program;i.uniformBlockBinding(T,v)}function l(T,y){let v=s[T.id];v===void 0&&(g(T),v=h(T),s[T.id]=v,T.addEventListener("dispose",m));const R=y.program;i.updateUBOMapping(T,R);const A=e.render.frame;r[T.id]!==A&&(u(T),r[T.id]=A)}function h(T){const y=d();T.__bindingPointIndex=y;const v=n.createBuffer(),R=T.__size,A=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,R,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(T){const y=s[T.id],v=T.uniforms,R=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,w=v.length;A<w;A++){const P=Array.isArray(v[A])?v[A]:[v[A]];for(let M=0,S=P.length;M<S;M++){const D=P[M];if(p(D,A,M,R)===!0){const B=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let J=0;for(let z=0;z<V.length;z++){const $=V[z],Q=_($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,B+J,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):($.toArray(D.__data,J),J+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,y,v,R){const A=T.value,w=y+"_"+v;if(R[w]===void 0)return typeof A=="number"||typeof A=="boolean"?R[w]=A:R[w]=A.clone(),!0;{const P=R[w];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return R[w]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(T){const y=T.uniforms;let v=0;const R=16;for(let w=0,P=y.length;w<P;w++){const M=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,D=M.length;S<D;S++){const B=M[S],V=Array.isArray(B.value)?B.value:[B.value];for(let J=0,z=V.length;J<z;J++){const $=V[J],Q=_($),X=v%R,ge=X%Q.boundary,xe=X+ge;v+=ge,xe!==0&&R-xe<Q.storage&&(v+=R-xe),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=Q.storage}}}const A=v%R;return A>0&&(v+=R-A),T.__size=v,T.__cache={},this}function _(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function m(T){const y=T.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(const T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class ov{constructor(e={}){const{canvas:t=nf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const T=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let R=!1;this._outputColorSpace=yn;let A=0,w=0,P=null,M=-1,S=null;const D=new _t,B=new _t;let V=null;const J=new $e(0);let z=0,$=t.width,Q=t.height,X=1,ge=null,xe=null;const we=new _t(0,0,$,Q),Xe=new _t(0,0,$,Q);let k=!1;const he=new Fl;let me=!1,N=!1;const K=new Tt,se=new C,Te=new _t,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function xt(){return P===null?X:1}let I=i;function ie(E,U){return t.getContext(E,U)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tl}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",le,!1),I===null){const U="webgl2";if(I=ie(U,E),I===null)throw ie(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ee,j,Z,_e,oe,ve,Ye,qe,b,x,F,W,ne,Y,Oe,pe,Le,Ne,ae,be,Ve,Fe,ye,Je;function L(){ee=new gg(I),ee.init(),Fe=new j_(I,ee),j=new cg(I,ee,e,Fe),Z=new J_(I,ee),j.reversedDepthBuffer&&u&&Z.buffers.depth.setReversed(!0),_e=new xg(I),oe=new F_,ve=new Z_(I,ee,Z,oe,j,Fe,_e),Ye=new ug(v),qe=new mg(v),b=new bp(I),ye=new ag(I,b),x=new _g(I,b,_e,ye),F=new Sg(I,x,b,_e),ae=new Mg(I,j,ve),pe=new hg(oe),W=new O_(v,Ye,qe,ee,j,ye,pe),ne=new sv(v,oe),Y=new k_,Oe=new X_(ee),Ne=new og(v,Ye,qe,Z,F,p,c),Le=new K_(v,F,j),Je=new rv(I,_e,j,Z),be=new lg(I,ee,_e),Ve=new vg(I,ee,_e),_e.programs=W.programs,v.capabilities=j,v.extensions=ee,v.properties=oe,v.renderLists=Y,v.shadowMap=Le,v.state=Z,v.info=_e}L();const fe=new nv(v,I);this.xr=fe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize($,Q,!1))},this.getSize=function(E){return E.set($,Q)},this.setSize=function(E,U,H=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=E,Q=U,t.width=Math.floor(E*X),t.height=Math.floor(U*X),H===!0&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set($*X,Q*X).floor()},this.setDrawingBufferSize=function(E,U,H){$=E,Q=U,X=H,t.width=Math.floor(E*H),t.height=Math.floor(U*H),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(we)},this.setViewport=function(E,U,H,G){E.isVector4?we.set(E.x,E.y,E.z,E.w):we.set(E,U,H,G),Z.viewport(D.copy(we).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(Xe)},this.setScissor=function(E,U,H,G){E.isVector4?Xe.set(E.x,E.y,E.z,E.w):Xe.set(E,U,H,G),Z.scissor(B.copy(Xe).multiplyScalar(X).round())},this.getScissorTest=function(){return k},this.setScissorTest=function(E){Z.setScissorTest(k=E)},this.setOpaqueSort=function(E){ge=E},this.setTransparentSort=function(E){xe=E},this.getClearColor=function(E){return E.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,H=!0){let G=0;if(E){let O=!1;if(P!==null){const ue=P.texture.format;O=ue===Il||ue===Pl||ue===Cl}if(O){const ue=P.texture.type,Ee=ue===Zn||ue===Gi||ue===lr||ue===cr||ue===wl||ue===Rl,De=Ne.getClearColor(),Re=Ne.getClearAlpha(),Ge=De.r,We=De.g,ke=De.b;Ee?(g[0]=Ge,g[1]=We,g[2]=ke,g[3]=Re,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Ge,_[1]=We,_[2]=ke,_[3]=Re,I.clearBufferiv(I.COLOR,0,_))}else G|=I.COLOR_BUFFER_BIT}U&&(G|=I.DEPTH_BUFFER_BIT),H&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Ne.dispose(),Y.dispose(),Oe.dispose(),oe.dispose(),Ye.dispose(),qe.dispose(),F.dispose(),ye.dispose(),Je.dispose(),W.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Vn),fe.removeEventListener("sessionend",nc),Ri.stop()};function Me(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=_e.autoReset,U=Le.enabled,H=Le.autoUpdate,G=Le.needsUpdate,O=Le.type;L(),_e.autoReset=E,Le.enabled=U,Le.autoUpdate=H,Le.needsUpdate=G,Le.type=O}function le(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function te(E){const U=E.target;U.removeEventListener("dispose",te),Ue(U)}function Ue(E){Ke(E),oe.remove(E)}function Ke(E){const U=oe.get(E).programs;U!==void 0&&(U.forEach(function(H){W.releaseProgram(H)}),E.isShaderMaterial&&W.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,H,G,O,ue){U===null&&(U=Pe);const Ee=O.isMesh&&O.matrixWorld.determinant()<0,De=td(E,U,H,G,O);Z.setMaterial(G,Ee);let Re=H.index,Ge=1;if(G.wireframe===!0){if(Re=x.getWireframeAttribute(H),Re===void 0)return;Ge=2}const We=H.drawRange,ke=H.attributes.position;let nt=We.start*Ge,mt=(We.start+We.count)*Ge;ue!==null&&(nt=Math.max(nt,ue.start*Ge),mt=Math.min(mt,(ue.start+ue.count)*Ge)),Re!==null?(nt=Math.max(nt,0),mt=Math.min(mt,Re.count)):ke!=null&&(nt=Math.max(nt,0),mt=Math.min(mt,ke.count));const Dt=mt-nt;if(Dt<0||Dt===1/0)return;ye.setup(O,G,De,H,Re);let Et,vt=be;if(Re!==null&&(Et=b.get(Re),vt=Ve,vt.setIndex(Et)),O.isMesh)G.wireframe===!0?(Z.setLineWidth(G.wireframeLinewidth*xt()),vt.setMode(I.LINES)):vt.setMode(I.TRIANGLES);else if(O.isLine){let ze=G.linewidth;ze===void 0&&(ze=1),Z.setLineWidth(ze*xt()),O.isLineSegments?vt.setMode(I.LINES):O.isLineLoop?vt.setMode(I.LINE_LOOP):vt.setMode(I.LINE_STRIP)}else O.isPoints?vt.setMode(I.POINTS):O.isSprite&&vt.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)dr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))vt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const ze=O._multiDrawStarts,At=O._multiDrawCounts,ot=O._multiDrawCount,vn=Re?b.get(Re).bytesPerElement:1,Qi=oe.get(G).currentProgram.getUniforms();for(let xn=0;xn<ot;xn++)Qi.setValue(I,"_gl_DrawID",xn),vt.render(ze[xn]/vn,At[xn])}else if(O.isInstancedMesh)vt.renderInstances(nt,Dt,O.count);else if(H.isInstancedBufferGeometry){const ze=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,At=Math.min(H.instanceCount,ze);vt.renderInstances(nt,Dt,At)}else vt.render(nt,Dt)};function Mt(E,U,H){E.transparent===!0&&E.side===ci&&E.forceSinglePass===!1?(E.side=pn,E.needsUpdate=!0,br(E,U,H),E.side=Ti,E.needsUpdate=!0,br(E,U,H),E.side=ci):br(E,U,H)}this.compile=function(E,U,H=null){H===null&&(H=E),f=Oe.get(H),f.init(U),y.push(f),H.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),E!==H&&E.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();const G=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ue=O.material;if(ue)if(Array.isArray(ue))for(let Ee=0;Ee<ue.length;Ee++){const De=ue[Ee];Mt(De,H,O),G.add(De)}else Mt(ue,H,O),G.add(ue)}),f=y.pop(),G},this.compileAsync=function(E,U,H=null){const G=this.compile(E,U,H);return new Promise(O=>{function ue(){if(G.forEach(function(Ee){oe.get(Ee).currentProgram.isReady()&&G.delete(Ee)}),G.size===0){O(E);return}setTimeout(ue,10)}ee.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let ht=null;function ti(E){ht&&ht(E)}function Vn(){Ri.stop()}function nc(){Ri.start()}const Ri=new Su;Ri.setAnimationLoop(ti),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(E){ht=E,fe.setAnimationLoop(E),E===null?Ri.stop():Ri.start()},fe.addEventListener("sessionstart",Vn),fe.addEventListener("sessionend",nc),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(U),U=fe.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,U,P),f=Oe.get(E,y.length),f.init(U),y.push(f),K.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),he.setFromProjectionMatrix(K,Kn,U.reversedDepth),N=this.localClippingEnabled,me=pe.init(this.clippingPlanes,N),m=Y.get(E,T.length),m.init(),T.push(m),fe.enabled===!0&&fe.isPresenting===!0){const ue=v.xr.getDepthSensingMesh();ue!==null&&Oo(ue,U,-1/0,v.sortObjects)}Oo(E,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ge,xe),tt=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,tt&&Ne.addToRenderList(m,E),this.info.render.frame++,me===!0&&pe.beginShadows();const H=f.state.shadowsArray;Le.render(H,E,U),me===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,O=m.transmissive;if(f.setupLights(),U.isArrayCamera){const ue=U.cameras;if(O.length>0)for(let Ee=0,De=ue.length;Ee<De;Ee++){const Re=ue[Ee];sc(G,O,E,Re)}tt&&Ne.render(E);for(let Ee=0,De=ue.length;Ee<De;Ee++){const Re=ue[Ee];ic(m,E,Re,Re.viewport)}}else O.length>0&&sc(G,O,E,U),tt&&Ne.render(E),ic(m,E,U);P!==null&&w===0&&(ve.updateMultisampleRenderTarget(P),ve.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(v,E,U),ye.resetDefaultState(),M=-1,S=null,y.pop(),y.length>0?(f=y[y.length-1],me===!0&&pe.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Oo(E,U,H,G){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||he.intersectsSprite(E)){G&&Te.setFromMatrixPosition(E.matrixWorld).applyMatrix4(K);const Ee=F.update(E),De=E.material;De.visible&&m.push(E,Ee,De,H,Te.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||he.intersectsObject(E))){const Ee=F.update(E),De=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Te.copy(E.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Te.copy(Ee.boundingSphere.center)),Te.applyMatrix4(E.matrixWorld).applyMatrix4(K)),Array.isArray(De)){const Re=Ee.groups;for(let Ge=0,We=Re.length;Ge<We;Ge++){const ke=Re[Ge],nt=De[ke.materialIndex];nt&&nt.visible&&m.push(E,Ee,nt,H,Te.z,ke)}}else De.visible&&m.push(E,Ee,De,H,Te.z,null)}}const ue=E.children;for(let Ee=0,De=ue.length;Ee<De;Ee++)Oo(ue[Ee],U,H,G)}function ic(E,U,H,G){const O=E.opaque,ue=E.transmissive,Ee=E.transparent;f.setupLightsView(H),me===!0&&pe.setGlobalState(v.clippingPlanes,H),G&&Z.viewport(D.copy(G)),O.length>0&&Tr(O,U,H),ue.length>0&&Tr(ue,U,H),Ee.length>0&&Tr(Ee,U,H),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function sc(E,U,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new kn(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?di:Zn,minFilter:Hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const ue=f.state.transmissionRenderTarget[G.id],Ee=G.viewport||D;ue.setSize(Ee.z*v.transmissionResolutionScale,Ee.w*v.transmissionResolutionScale);const De=v.getRenderTarget(),Re=v.getActiveCubeFace(),Ge=v.getActiveMipmapLevel();v.setRenderTarget(ue),v.getClearColor(J),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear(),tt&&Ne.render(H);const We=v.toneMapping;v.toneMapping=yi;const ke=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),me===!0&&pe.setGlobalState(v.clippingPlanes,G),Tr(E,H,G),ve.updateMultisampleRenderTarget(ue),ve.updateRenderTargetMipmap(ue),ee.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let mt=0,Dt=U.length;mt<Dt;mt++){const Et=U[mt],vt=Et.object,ze=Et.geometry,At=Et.material,ot=Et.group;if(At.side===ci&&vt.layers.test(G.layers)){const vn=At.side;At.side=pn,At.needsUpdate=!0,rc(vt,H,G,ze,At,ot),At.side=vn,At.needsUpdate=!0,nt=!0}}nt===!0&&(ve.updateMultisampleRenderTarget(ue),ve.updateRenderTargetMipmap(ue))}v.setRenderTarget(De,Re,Ge),v.setClearColor(J,z),ke!==void 0&&(G.viewport=ke),v.toneMapping=We}function Tr(E,U,H){const G=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ue=E.length;O<ue;O++){const Ee=E[O],De=Ee.object,Re=Ee.geometry,Ge=Ee.group;let We=Ee.material;We.allowOverride===!0&&G!==null&&(We=G),De.layers.test(H.layers)&&rc(De,U,H,Re,We,Ge)}}function rc(E,U,H,G,O,ue){E.onBeforeRender(v,U,H,G,O,ue),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(v,U,H,G,E,ue),O.transparent===!0&&O.side===ci&&O.forceSinglePass===!1?(O.side=pn,O.needsUpdate=!0,v.renderBufferDirect(H,U,G,O,E,ue),O.side=Ti,O.needsUpdate=!0,v.renderBufferDirect(H,U,G,O,E,ue),O.side=ci):v.renderBufferDirect(H,U,G,O,E,ue),E.onAfterRender(v,U,H,G,O,ue)}function br(E,U,H){U.isScene!==!0&&(U=Pe);const G=oe.get(E),O=f.state.lights,ue=f.state.shadowsArray,Ee=O.state.version,De=W.getParameters(E,O.state,ue,U,H),Re=W.getProgramCacheKey(De);let Ge=G.programs;G.environment=E.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(E.isMeshStandardMaterial?qe:Ye).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ge===void 0&&(E.addEventListener("dispose",te),Ge=new Map,G.programs=Ge);let We=Ge.get(Re);if(We!==void 0){if(G.currentProgram===We&&G.lightsStateVersion===Ee)return ac(E,De),We}else De.uniforms=W.getUniforms(E),E.onBeforeCompile(De,v),We=W.acquireProgram(De,Re),Ge.set(Re,We),G.uniforms=De.uniforms;const ke=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ke.clippingPlanes=pe.uniform),ac(E,De),G.needsLights=id(E),G.lightsStateVersion=Ee,G.needsLights&&(ke.ambientLightColor.value=O.state.ambient,ke.lightProbe.value=O.state.probe,ke.directionalLights.value=O.state.directional,ke.directionalLightShadows.value=O.state.directionalShadow,ke.spotLights.value=O.state.spot,ke.spotLightShadows.value=O.state.spotShadow,ke.rectAreaLights.value=O.state.rectArea,ke.ltc_1.value=O.state.rectAreaLTC1,ke.ltc_2.value=O.state.rectAreaLTC2,ke.pointLights.value=O.state.point,ke.pointLightShadows.value=O.state.pointShadow,ke.hemisphereLights.value=O.state.hemi,ke.directionalShadowMap.value=O.state.directionalShadowMap,ke.directionalShadowMatrix.value=O.state.directionalShadowMatrix,ke.spotShadowMap.value=O.state.spotShadowMap,ke.spotLightMatrix.value=O.state.spotLightMatrix,ke.spotLightMap.value=O.state.spotLightMap,ke.pointShadowMap.value=O.state.pointShadowMap,ke.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=We,G.uniformsList=null,We}function oc(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=io.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function ac(E,U){const H=oe.get(E);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function td(E,U,H,G,O){U.isScene!==!0&&(U=Pe),ve.resetTextureUnits();const ue=U.fog,Ee=G.isMeshStandardMaterial?U.environment:null,De=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ps,Re=(G.isMeshStandardMaterial?qe:Ye).get(G.envMap||Ee),Ge=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,We=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ke=!!H.morphAttributes.position,nt=!!H.morphAttributes.normal,mt=!!H.morphAttributes.color;let Dt=yi;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Dt=v.toneMapping);const Et=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,vt=Et!==void 0?Et.length:0,ze=oe.get(G),At=f.state.lights;if(me===!0&&(N===!0||E!==S)){const sn=E===S&&G.id===M;pe.setState(G,E,sn)}let ot=!1;G.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==At.state.version||ze.outputColorSpace!==De||O.isBatchedMesh&&ze.batching===!1||!O.isBatchedMesh&&ze.batching===!0||O.isBatchedMesh&&ze.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&ze.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&ze.instancing===!1||!O.isInstancedMesh&&ze.instancing===!0||O.isSkinnedMesh&&ze.skinning===!1||!O.isSkinnedMesh&&ze.skinning===!0||O.isInstancedMesh&&ze.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ze.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ze.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ze.instancingMorph===!1&&O.morphTexture!==null||ze.envMap!==Re||G.fog===!0&&ze.fog!==ue||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==pe.numPlanes||ze.numIntersection!==pe.numIntersection)||ze.vertexAlphas!==Ge||ze.vertexTangents!==We||ze.morphTargets!==ke||ze.morphNormals!==nt||ze.morphColors!==mt||ze.toneMapping!==Dt||ze.morphTargetsCount!==vt)&&(ot=!0):(ot=!0,ze.__version=G.version);let vn=ze.currentProgram;ot===!0&&(vn=br(G,U,O));let Qi=!1,xn=!1,Xs=!1;const wt=vn.getUniforms(),An=ze.uniforms;if(Z.useProgram(vn.program)&&(Qi=!0,xn=!0,Xs=!0),G.id!==M&&(M=G.id,xn=!0),Qi||S!==E){Z.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),wt.setValue(I,"projectionMatrix",E.projectionMatrix),wt.setValue(I,"viewMatrix",E.matrixWorldInverse);const un=wt.map.cameraPosition;un!==void 0&&un.setValue(I,se.setFromMatrixPosition(E.matrixWorld)),j.logarithmicDepthBuffer&&wt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&wt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,xn=!0,Xs=!0)}if(O.isSkinnedMesh){wt.setOptional(I,O,"bindMatrix"),wt.setOptional(I,O,"bindMatrixInverse");const sn=O.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),wt.setValue(I,"boneTexture",sn.boneTexture,ve))}O.isBatchedMesh&&(wt.setOptional(I,O,"batchingTexture"),wt.setValue(I,"batchingTexture",O._matricesTexture,ve),wt.setOptional(I,O,"batchingIdTexture"),wt.setValue(I,"batchingIdTexture",O._indirectTexture,ve),wt.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&wt.setValue(I,"batchingColorTexture",O._colorsTexture,ve));const wn=H.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&ae.update(O,H,vn),(xn||ze.receiveShadow!==O.receiveShadow)&&(ze.receiveShadow=O.receiveShadow,wt.setValue(I,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(An.envMap.value=Re,An.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(An.envMapIntensity.value=U.environmentIntensity),xn&&(wt.setValue(I,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&nd(An,Xs),ue&&G.fog===!0&&ne.refreshFogUniforms(An,ue),ne.refreshMaterialUniforms(An,G,X,Q,f.state.transmissionRenderTarget[E.id]),io.upload(I,oc(ze),An,ve)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(io.upload(I,oc(ze),An,ve),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&wt.setValue(I,"center",O.center),wt.setValue(I,"modelViewMatrix",O.modelViewMatrix),wt.setValue(I,"normalMatrix",O.normalMatrix),wt.setValue(I,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const sn=G.uniformsGroups;for(let un=0,Fo=sn.length;un<Fo;un++){const Ci=sn[un];Je.update(Ci,vn),Je.bind(Ci,vn)}}return vn}function nd(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function id(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,U,H){const G=oe.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),oe.get(E.texture).__webglTexture=U,oe.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const H=oe.get(E);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0};const sd=I.createFramebuffer();this.setRenderTarget=function(E,U=0,H=0){P=E,A=U,w=H;let G=!0,O=null,ue=!1,Ee=!1;if(E){const Re=oe.get(E);if(Re.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(I.FRAMEBUFFER,null),G=!1;else if(Re.__webglFramebuffer===void 0)ve.setupRenderTarget(E);else if(Re.__hasExternalTextures)ve.rebindTextures(E,oe.get(E.texture).__webglTexture,oe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ke=E.depthTexture;if(Re.__boundDepthTexture!==ke){if(ke!==null&&oe.has(ke)&&(E.width!==ke.image.width||E.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(E)}}const Ge=E.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ee=!0);const We=oe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(We[U])?O=We[U][H]:O=We[U],ue=!0):E.samples>0&&ve.useMultisampledRTT(E)===!1?O=oe.get(E).__webglMultisampledFramebuffer:Array.isArray(We)?O=We[H]:O=We,D.copy(E.viewport),B.copy(E.scissor),V=E.scissorTest}else D.copy(we).multiplyScalar(X).floor(),B.copy(Xe).multiplyScalar(X).floor(),V=k;if(H!==0&&(O=sd),Z.bindFramebuffer(I.FRAMEBUFFER,O)&&G&&Z.drawBuffers(E,O),Z.viewport(D),Z.scissor(B),Z.setScissorTest(V),ue){const Re=oe.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,Re.__webglTexture,H)}else if(Ee){const Re=U;for(let Ge=0;Ge<E.textures.length;Ge++){const We=oe.get(E.textures[Ge]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ge,We.__webglTexture,H,Re)}}else if(E!==null&&H!==0){const Re=oe.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Re.__webglTexture,H)}M=-1},this.readRenderTargetPixels=function(E,U,H,G,O,ue,Ee,De=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Re=Re[Ee]),Re){Z.bindFramebuffer(I.FRAMEBUFFER,Re);try{const Ge=E.textures[De],We=Ge.format,ke=Ge.type;if(!j.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-G&&H>=0&&H<=E.height-O&&(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+De),I.readPixels(U,H,G,O,Fe.convert(We),Fe.convert(ke),ue))}finally{const Ge=P!==null?oe.get(P).__webglFramebuffer:null;Z.bindFramebuffer(I.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(E,U,H,G,O,ue,Ee,De=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Re=Re[Ee]),Re)if(U>=0&&U<=E.width-G&&H>=0&&H<=E.height-O){Z.bindFramebuffer(I.FRAMEBUFFER,Re);const Ge=E.textures[De],We=Ge.format,ke=Ge.type;if(!j.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,nt),I.bufferData(I.PIXEL_PACK_BUFFER,ue.byteLength,I.STREAM_READ),E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+De),I.readPixels(U,H,G,O,Fe.convert(We),Fe.convert(ke),0);const mt=P!==null?oe.get(P).__webglFramebuffer:null;Z.bindFramebuffer(I.FRAMEBUFFER,mt);const Dt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await sf(I,Dt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,nt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ue),I.deleteBuffer(nt),I.deleteSync(Dt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,H=0){const G=Math.pow(2,-H),O=Math.floor(E.image.width*G),ue=Math.floor(E.image.height*G),Ee=U!==null?U.x:0,De=U!==null?U.y:0;ve.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,Ee,De,O,ue),Z.unbindTexture()};const rd=I.createFramebuffer(),od=I.createFramebuffer();this.copyTextureToTexture=function(E,U,H=null,G=null,O=0,ue=null){ue===null&&(O!==0?(dr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=O,O=0):ue=0);let Ee,De,Re,Ge,We,ke,nt,mt,Dt;const Et=E.isCompressedTexture?E.mipmaps[ue]:E.image;if(H!==null)Ee=H.max.x-H.min.x,De=H.max.y-H.min.y,Re=H.isBox3?H.max.z-H.min.z:1,Ge=H.min.x,We=H.min.y,ke=H.isBox3?H.min.z:0;else{const wn=Math.pow(2,-O);Ee=Math.floor(Et.width*wn),De=Math.floor(Et.height*wn),E.isDataArrayTexture?Re=Et.depth:E.isData3DTexture?Re=Math.floor(Et.depth*wn):Re=1,Ge=0,We=0,ke=0}G!==null?(nt=G.x,mt=G.y,Dt=G.z):(nt=0,mt=0,Dt=0);const vt=Fe.convert(U.format),ze=Fe.convert(U.type);let At;U.isData3DTexture?(ve.setTexture3D(U,0),At=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(ve.setTexture2DArray(U,0),At=I.TEXTURE_2D_ARRAY):(ve.setTexture2D(U,0),At=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const ot=I.getParameter(I.UNPACK_ROW_LENGTH),vn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Qi=I.getParameter(I.UNPACK_SKIP_PIXELS),xn=I.getParameter(I.UNPACK_SKIP_ROWS),Xs=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Et.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Et.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ge),I.pixelStorei(I.UNPACK_SKIP_ROWS,We),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ke);const wt=E.isDataArrayTexture||E.isData3DTexture,An=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const wn=oe.get(E),sn=oe.get(U),un=oe.get(wn.__renderTarget),Fo=oe.get(sn.__renderTarget);Z.bindFramebuffer(I.READ_FRAMEBUFFER,un.__webglFramebuffer),Z.bindFramebuffer(I.DRAW_FRAMEBUFFER,Fo.__webglFramebuffer);for(let Ci=0;Ci<Re;Ci++)wt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,oe.get(E).__webglTexture,O,ke+Ci),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,oe.get(U).__webglTexture,ue,Dt+Ci)),I.blitFramebuffer(Ge,We,Ee,De,nt,mt,Ee,De,I.DEPTH_BUFFER_BIT,I.NEAREST);Z.bindFramebuffer(I.READ_FRAMEBUFFER,null),Z.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||oe.has(E)){const wn=oe.get(E),sn=oe.get(U);Z.bindFramebuffer(I.READ_FRAMEBUFFER,rd),Z.bindFramebuffer(I.DRAW_FRAMEBUFFER,od);for(let un=0;un<Re;un++)wt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,wn.__webglTexture,O,ke+un):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,wn.__webglTexture,O),An?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,sn.__webglTexture,ue,Dt+un):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,sn.__webglTexture,ue),O!==0?I.blitFramebuffer(Ge,We,Ee,De,nt,mt,Ee,De,I.COLOR_BUFFER_BIT,I.NEAREST):An?I.copyTexSubImage3D(At,ue,nt,mt,Dt+un,Ge,We,Ee,De):I.copyTexSubImage2D(At,ue,nt,mt,Ge,We,Ee,De);Z.bindFramebuffer(I.READ_FRAMEBUFFER,null),Z.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else An?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(At,ue,nt,mt,Dt,Ee,De,Re,vt,ze,Et.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(At,ue,nt,mt,Dt,Ee,De,Re,vt,Et.data):I.texSubImage3D(At,ue,nt,mt,Dt,Ee,De,Re,vt,ze,Et):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ue,nt,mt,Ee,De,vt,ze,Et.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ue,nt,mt,Et.width,Et.height,vt,Et.data):I.texSubImage2D(I.TEXTURE_2D,ue,nt,mt,Ee,De,vt,ze,Et);I.pixelStorei(I.UNPACK_ROW_LENGTH,ot),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Qi),I.pixelStorei(I.UNPACK_SKIP_ROWS,xn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Xs),ue===0&&U.generateMipmaps&&I.generateMipmap(At),Z.unbindTexture()},this.initRenderTarget=function(E){oe.get(E).__webglFramebuffer===void 0&&ve.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ve.setTextureCube(E,0):E.isData3DTexture?ve.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ve.setTexture2DArray(E,0):ve.setTexture2D(E,0),Z.unbindTexture()},this.resetState=function(){A=0,w=0,P=null,Z.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const so={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Hs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const av=new Mu(-1,1,1,-1,0,1);class lv extends hn{constructor(){super(),this.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new bt([0,2,0,0,2,0],2))}}const cv=new lv;class ql{constructor(e){this._mesh=new Rt(cv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,av)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Au extends Hs{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof an?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fr.clone(e.uniforms),this.material=new an({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ql(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class _h extends Hs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class hv extends Hs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class uv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ce);this._width=i.width,this._height=i.height,t=new kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:di}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Au(so),this.copyPass.material.blending=ui,this.clock=new Ep}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}_h!==void 0&&(o instanceof _h?i=!0:o instanceof hv&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class wu extends Hs{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new $e}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const dv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new $e(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ns extends Hs{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new $e(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new kn(r,o,{type:di}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new kn(r,o,{type:di});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new kn(r,o,{type:di});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}const a=dv;this.highPassUniforms=fr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new an({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=fr.clone(so.uniforms),this.blendMaterial=new an({uniforms:this.copyUniforms,vertexShader:so.vertexShader,fragmentShader:so.fragmentShader,blending:lo,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new $e,this._oldClearAlpha=1,this._basic=new Ji,this._fsQuad=new ql(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Ns.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Ns.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new an({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new an({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ns.BlurDirectionX=new ce(1,0);Ns.BlurDirectionY=new ce(0,1);const jr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class fv extends Hs{constructor(){super(),this.uniforms=fr.clone(jr.uniforms),this.material=new pp({name:jr.name,uniforms:this.uniforms,vertexShader:jr.vertexShader,fragmentShader:jr.fragmentShader}),this._fsQuad=new ql(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},rt.getTransfer(this._outputColorSpace)===pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Uh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Oh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Fh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===bl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===kh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Bh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Wi={A:{id:"NF-0147",name:"林  川",hairColor:"#35291f",hairStyle:"swept",skinTone:"#c69262",glasses:!1,shirtColor:"#293e38",scarfColor:"#854739",faceShape:"tapered"},B:{id:"NF-0286",name:"周  禾",hairColor:"#a57543",hairStyle:"short",skinTone:"#ceaa80",glasses:!0,shirtColor:"#414b59",scarfColor:"#8d754b",faceShape:"round"}};function _r(n=21){return()=>(n=Math.imul(n,1664525)+1013904223|0,(n>>>0)/4294967296)}const ps=_r();function Be(n,e={}){return new vu({color:n,roughness:.94,metalness:0,flatShading:!0,...e})}function re(n,e,t,i,s=null){const r=new Rt(new Bs(...e),i);return r.position.set(...t),s&&r.rotation.set(...s),r.castShadow=!0,r.receiveShadow=!0,n.add(r),r}function jt(n,e,t,i,s,r,o=8){const a=new Rt(new bo(e,t,i,o),r);return a.position.set(...s),a.castShadow=!0,a.receiveShadow=!0,n.add(a),a}function pi(n,e,t){const i=document.createElement("canvas");i.width=n,i.height=e;const s=i.getContext("2d");t(s,n,e);const r=new Nf(i);return r.colorSpace=yn,r.anisotropy=4,r}function En(n,e,t,i,s,r=null,o=!1){const a=o?new Ji({map:s,transparent:!0}):Be("#ffffff",{map:s}),c=new Rt(new ks(e,t),a);return c.position.set(...i),r&&c.rotation.set(...r),n.add(c),c}function Wn(n,{bg:e="#263830",ink:t="#c6b58b",w:i=512,h:s=512,size:r=42,serif:o=!0}={}){return pi(i,s,a=>{a.fillStyle=e,a.fillRect(0,0,i,s),a.strokeStyle=t+"55",a.lineWidth=2,a.strokeRect(18,18,i-36,s-36),a.textAlign="center",a.fillStyle=t,a.font=`${r}px ${o?"Georgia":"Microsoft YaHei"}`;const c=r*1.45;n.forEach((l,h)=>a.fillText(l,i/2,s/2+(h-(n.length-1)/2)*c+r*.35))})}function xa(n="#705034"){const e=pi(512,512,t=>{t.fillStyle=n,t.fillRect(0,0,512,512);const i=_r(71);for(let s=0;s<90;s++){const r=i()*512;t.strokeStyle=i()>.45?`rgba(20,9,3,${i()*.07})`:`rgba(233,193,112,${i()*.035})`,t.lineWidth=1+i()*2,t.beginPath(),t.moveTo(0,r),t.bezierCurveTo(180,r-i()*7,290,r+i()*9,512,r),t.stroke()}for(let s=0;s<512;s+=128)t.fillStyle="#1e170b55",t.fillRect(0,s,512,2)});return e.wrapS=e.wrapT=co,e.repeat.set(2,1),Be("#ffffff",{map:e,roughness:.94})}function Po(n){const e=new Ut,t=Be(n.shirtColor),i=Be(n.skinTone),s=Be(n.hairColor),r=Be(n.scarfColor),o=Be("#171d1c"),a=Be("#181710"),c=new Ut;e.add(c);const l=jt(c,.265,.34,.73,[0,1.13,0],t,7);l.scale.z=.58,re(c,[.045,.7,.018],[0,1.14,.192],o);for(const y of[.88,1.08,1.29])jt(c,.016,.016,.02,[.065,y,.21],Be("#a59d79"),6).rotation.x=Math.PI/2;const h=[];for(const y of[-1,1]){const v=re(e,[.19,.72,.22],[y*.14,.39,0],Be("#272d2b"));h.push(v),re(e,[.21,.1,.34],[y*.14,.06,.055],o)}const d=[];for(const y of[-1,1]){const v=new Ut;v.position.set(y*.28,1.43,0),c.add(v);const R=jt(v,.115,.08,.51,[y*.047,-.24,.008],t,6);R.rotation.z=y*.18;const A=new Rt(new Gl(.095,0),i);A.scale.set(.72,1,.78),A.position.set(y*.09,-.51,.04),v.add(A),d.push(v)}const u=new Ut;u.position.y=1.79,c.add(u),jt(c,.095,.1,.18,[0,1.49,0],i);const p=new Rt(new go(.3,n.faceShape==="round"?8:7,4),i);p.scale.set(.89,1.02,.83),p.rotation.y=Math.PI/14,u.add(p);for(const y of[-1,1]){const v=new Rt(new wo(.063),i);v.position.set(y*.258,-.025,-.002),v.scale.set(.5,1,.66),u.add(v)}const g=new Rt(new go(.325,7,3,0,Math.PI*2,0,Math.PI*.46),s);g.position.set(0,.07,-.03),g.rotation.z=-.06,u.add(g);const _=n.hairStyle==="swept"?[[-.2,.13,.17,.13,.29,-.22],[-.05,.18,.22,.16,.33,-.3],[.13,.2,.2,.15,.23,.2],[.235,.05,.09,.07,.34,.12]]:[[-.19,.16,.17,.1,.16,-.1],[-.06,.2,.23,.13,.18,0],[.1,.18,.23,.12,.15,.05],[.23,.06,.11,.055,.25,0]];for(const[y,v,R,A,w,P]of _){const M=new fu;M.moveTo(-A*.62,w*.5),M.lineTo(A*.58,w*.35),M.lineTo(A*.25,-w*.5),M.lineTo(-A*.35,-w*.35),M.closePath();const S=new Rt(new Hl(M,{depth:.07,bevelEnabled:!1}),s);S.position.set(y,v+.025,R-.025),S.rotation.z=P,u.add(S)}const m=[];for(const y of[-1,1]){const v=re(u,[.036,.063,.013],[y*.093,-.008,.244],a);if(m.push(v),re(u,[.061,.012,.013],[y*.093,.055,.244],s,[0,0,y*.09]),n.glasses){const R=new Rt(new Ro(.068,.009,4,10),o);R.position.set(y*.095,-.001,.258),u.add(R)}}n.glasses&&re(u,[.065,.012,.014],[0,.008,.26],o);const f=new Rt(new Bl(.022,.055,3),i);f.position.set(0,-.06,.25),f.rotation.x=Math.PI/2,u.add(f),re(u,[.045,.008,.008],[0,-.138,.218],Be("#825a42"));const T=jt(c,.235,.245,.19,[0,1.485,.017],r,7);T.scale.z=.76,T.rotation.z=.07,re(c,[.16,.53,.058],[.16,1.2,.23],r,[0,0,-.085]),re(c,[.17,.12,.06],[.183,.94,.23],Be(n.scarfColor),[0,0,-.085]);for(let y=0;y<3;y++)re(c,[.026,.035,.026],[.125+y*.046,.875,.24],r);return re(c,[.056,.65,.037],[-.217,1.15,.165],Be("#615037"),[0,0,-.12]),e.userData={body:c,head:u,arms:d,eyes:m,legs:h,profile:n},e}function pv(n,e,t,i,s,r){if(n.save(),n.translate(t,i),n.scale(s/160,r/190),n.fillStyle="#a3ac9c",n.fillRect(0,0,160,190),n.fillStyle="#829485",n.fillRect(0,135,160,55),n.fillStyle=e.shirtColor,n.beginPath(),n.moveTo(20,190),n.lineTo(28,144),n.lineTo(56,130),n.lineTo(104,130),n.lineTo(135,146),n.lineTo(145,190),n.fill(),n.fillStyle=e.skinTone,n.beginPath(),n.moveTo(40,49),n.lineTo(66,30),n.lineTo(106,36),n.lineTo(122,68),n.lineTo(117,110),n.lineTo(94,133),n.lineTo(66,129),n.lineTo(44,105),n.fill(),n.fillStyle=e.hairColor,n.beginPath(),n.moveTo(35,86),n.lineTo(30,45),n.lineTo(48,17),n.lineTo(92,10),n.lineTo(128,32),n.lineTo(129,77),n.lineTo(114,64),e.hairStyle==="swept"?(n.lineTo(101,42),n.lineTo(90,77),n.lineTo(72,72),n.lineTo(73,50),n.lineTo(51,83)):(n.lineTo(107,48),n.lineTo(99,64),n.lineTo(66,53),n.lineTo(49,66)),n.closePath(),n.fill(),n.fillStyle="#242720",n.fillRect(61,81,7,14),n.fillRect(95,81,7,14),e.glasses){n.strokeStyle="#26322f",n.lineWidth=3;for(const o of[65,100])n.beginPath(),n.arc(o,87,14,0,Math.PI*2),n.stroke();n.beginPath(),n.moveTo(79,86),n.lineTo(86,86),n.stroke()}n.fillStyle="#885f47",n.fillRect(78,112,10,2),n.fillStyle=e.scarfColor,n.beginPath(),n.moveTo(45,125),n.lineTo(115,128),n.lineTo(121,148),n.lineTo(44,153),n.fill(),n.fillRect(94,144,19,46),n.restore()}function Ru(n){const e=new Ut;re(e,[.4,.252,.007],[0,0,0],Be("#d9d3b8"));const t=pi(1024,640,(i,s,r)=>{i.fillStyle="#ded8bc",i.fillRect(0,0,s,r),i.fillStyle="#304e45",i.fillRect(0,0,s,125),i.fillStyle="#e6dab0",i.font="27px Georgia",i.fillText("NIGHTFALL PUBLIC LIBRARY",42,56),i.font="22px Microsoft YaHei",i.fillText("夜阑图书馆 · 借阅证",43,97),pv(i,n,47,169,260,315),i.fillStyle="#384b42",i.font="48px Microsoft YaHei",i.fillText(n.name,362,243),i.font="22px monospace",i.fillText("READER / "+n.id,362,300),i.strokeStyle="#879079",i.beginPath(),i.moveTo(362,334),i.lineTo(963,334),i.stroke(),i.font="23px Microsoft YaHei",i.fillText("有效至 2027.09.30",362,408);const o=_r(93);for(let a=365;a<934;a+=7){const c=o()>.5?4:2;i.fillStyle="#394039",i.fillRect(a,490,c,56)}i.font="17px monospace",i.fillText("READER CARD",365,578),i.strokeStyle="#aaa587",i.strokeRect(19,144,s-38,r-167)});return En(e,.396,.248,[0,0,.004],t),e}function mv(n,e,t,i,s){for(const r of i.filter(o=>o.visible&&o.page===s)){const[o,a,c,l]=r.uvRect;n.save(),n.translate(o*e,a*t),n.scale(c*e,l*t),r.type==="scratch"?(n.strokeStyle="#b4b19a",n.lineWidth=.025,n.beginPath(),n.moveTo(.06,.83),n.lineTo(.46,.49),n.lineTo(.91,.13),n.moveTo(.24,.79),n.lineTo(.67,.39),n.stroke()):r.type==="stain"?(n.fillStyle="#73503642",n.strokeStyle="#78553865",n.lineWidth=.05,n.beginPath(),n.ellipse(.5,.5,.44,.37,-.2,0,Math.PI*2),n.fill(),n.stroke()):r.type==="corner_fold"?(n.fillStyle="#162e2d",n.beginPath(),n.moveTo(1,0),n.lineTo(0,1),n.lineTo(1,1),n.closePath(),n.fill(),n.fillStyle="#a7a486",n.beginPath(),n.moveTo(.96,.04),n.lineTo(.06,.96),n.lineTo(.09,.12),n.closePath(),n.fill(),n.strokeStyle="#d4c9a5",n.lineWidth=.018,n.stroke()):r.type==="tear"&&(n.fillStyle="#ad9f81",n.beginPath(),n.moveTo(1,0),n.lineTo(.67,.22),n.lineTo(.71,.39),n.lineTo(.36,.54),n.lineTo(.4,.72),n.lineTo(0,1),n.lineTo(1,1),n.closePath(),n.fill(),n.strokeStyle="#efe3c7",n.lineWidth=.025,n.stroke()),n.restore()}}function Cu(n,e,t){const i=e.intersectObject(n,!0)[0];if(!i?.uv)return null;const s=n.userData.damageHotspots.find(r=>{const[o,a,c,l]=r.uvRect;return r.enabled&&r.page===t&&r.surface===i.object&&i.uv.x>=o&&i.uv.x<=o+c&&1-i.uv.y>=a&&1-i.uv.y<=a+l});return s?{...s,uv:i.uv.clone()}:null}function Io(n={}){const e=n.damageProfile||[],t=new Ut,i=Be(n.coverColor||"#233f3d"),s=Be("#b6a170");re(t,[.416,.555,.057],[0,0,0],Be("#c7bda1"));for(let l=0;l<3;l++)re(t,[.417,.552,.001],[0,0,-.018+l*.018],Be(l%3===0?"#a89b7e":"#d0c4a6"));re(t,[.445,.583,.015],[0,0,-.04],i),re(t,[.029,.583,.087],[-.218,0,0],i);for(const l of[-.215,-.193,.185,.21])re(t,[.033,.01,.09],[-.219,l,0],s);const r=new Ut;r.position.set(-.22,0,.041),t.add(r),re(r,[.444,.583,.014],[.222,0,0],i);const o=pi(640,840,(l,h,d)=>{if(l.fillStyle=n.coverColor||"#233f3d",l.fillRect(0,0,h,d),l.strokeStyle="#b3a16f",l.lineWidth=3,l.strokeRect(32,32,h-64,d-64),l.lineWidth=1,l.strokeRect(43,43,h-86,d-86),l.fillStyle="#c7b687",l.textAlign="center",l.font="17px Georgia",l.fillText(n.personal?"":"THE NIGHTFALL COLLECTION",h/2,93),l.font="52px Georgia",l.fillText(n.englishTitle?.[0]||"THE MIDNIGHT",h/2,205),l.font=n.englishTitle?"52px Georgia":"70px Georgia",l.fillText(n.englishTitle?.[1]||"ATLAS",h/2,290),l.font="24px Microsoft YaHei",l.fillText(n.title||"午 夜 图 谱",h/2,346),l.save(),l.translate(h/2,523),l.strokeStyle="#b6a271",n.art==="lighthouse")l.lineWidth=3,l.beginPath(),l.moveTo(-43,110),l.lineTo(-25,-61),l.lineTo(25,-61),l.lineTo(43,110),l.closePath(),l.stroke(),l.strokeRect(-32,-87,64,26),l.beginPath(),l.moveTo(-42,-89),l.lineTo(0,-117),l.lineTo(42,-89),l.moveTo(-120,-55),l.lineTo(-36,-76),l.moveTo(36,-76),l.lineTo(120,-55),l.moveTo(-105,113),l.lineTo(105,113),l.stroke();else if(n.art==="sky"){l.fillStyle="#d9d5af",l.beginPath(),l.arc(30,-15,66,0,Math.PI*2),l.fill(),l.fillStyle=n.coverColor,l.beginPath(),l.arc(55,-35,62,0,Math.PI*2),l.fill(),l.fillStyle="#d9d5af";for(const[u,p,g]of[[-106,-85,7],[-80,25,5],[95,70,7],[120,-75,4],[-20,108,4],[-125,105,3]])l.beginPath(),l.moveTo(u,p-g*2),l.lineTo(u+g,p),l.lineTo(u,p+g*2),l.lineTo(u-g,p),l.closePath(),l.fill();l.strokeStyle="#8c9dac",l.beginPath(),l.ellipse(0,15,135,84,-.25,0,Math.PI*2),l.stroke()}else if(n.art==="rain")for(let u=0;u<7;u++)l.strokeRect(-112+u*32,45-u%3*27,24,80+u%3*27),l.beginPath(),l.moveTo(-105+u*33,-110),l.lineTo(-116+u*33,-62),l.stroke();else if(["port","city","plant","gear"].includes(n.art)){if(l.lineWidth=3,l.beginPath(),n.art==="plant"){l.moveTo(0,120),l.lineTo(0,-115);for(let u=-80;u<90;u+=40)l.moveTo(0,u+20),l.quadraticCurveTo(-90,u-35,-55,u-40),l.quadraticCurveTo(-10,u-45,0,u+20),l.moveTo(0,u),l.quadraticCurveTo(90,u-40,55,u-50),l.quadraticCurveTo(10,u-45,0,u)}else if(n.art==="gear"){for(let u=0;u<48;u++){const p=u*Math.PI/24,g=u%4<2?96:116,_=Math.cos(p)*g,m=Math.sin(p)*g;u?l.lineTo(_,m):l.moveTo(_,m)}l.closePath(),l.moveTo(40,0),l.arc(0,0,40,0,Math.PI*2),l.moveTo(-140,-120),l.lineTo(140,-120)}else{for(let u=0;u<4;u++){const p=-120+u*65,g=-60+u%2*25;l.rect(p,g,50,130-g);for(let _=0;_<3;_++)l.rect(p+10,g+15+_*30,12,16)}l.moveTo(-145,85),l.lineTo(145,85),n.art==="port"&&(l.moveTo(-140,105),l.lineTo(-100,125),l.lineTo(85,125),l.lineTo(135,100),l.moveTo(-60,100),l.lineTo(-60,-115),l.lineTo(130,-85))}l.stroke()}else{for(const u of[103,113,142])l.beginPath(),l.arc(0,0,u,0,Math.PI*2),l.stroke();for(let u=0;u<8;u++)l.save(),l.rotate(u*Math.PI/4),l.beginPath(),l.moveTo(0,-122),l.lineTo(18,-23),l.lineTo(0,0),l.lineTo(-18,-23),l.closePath(),l.stroke(),l.restore();l.fillStyle="#c6b27b",l.beginPath(),l.arc(0,0,7,0,Math.PI*2),l.fill()}l.restore(),l.font="20px Georgia",l.fillText("E L I A S   W R E N",h/2,742)}),a=En(r,.438,.575,[.222,0,.0076],o);En(r,.432,.57,[.222,0,-.0076],Wn(n.personal?["","夜航",""]:["✧","NIGHTFALL","COLLECTION"],{bg:"#9b9a7a",ink:"#4a604e",size:36}),[0,Math.PI,0]);const c=Array.from({length:n.content?.length||3},(l,h)=>h).map(l=>pi(640,840,(h,d,u)=>{if(h.fillStyle="#dfd4b7",h.fillRect(0,0,d,u),h.fillStyle="#526052",h.textAlign="center",h.font="18px Georgia",h.fillText(n.englishTitle?.join(" ")||"THE MIDNIGHT ATLAS",d/2,76),h.fillRect(57,98,d-114,1),n.art==="sky"){h.fillStyle="#30465b",h.font="36px Microsoft YaHei",h.fillText(["月亮的脸在变","在星空里找一把勺子","太阳和它的邻居"][l],d/2,180),h.fillStyle="#344960",h.fillRect(60,235,520,330);const g=(_,m,f,T)=>{h.fillStyle=T,h.beginPath(),h.arc(_,m,f,0,Math.PI*2),h.fill()};if(h.font="22px Microsoft YaHei",l===0)for(let _=0;_<4;_++){const m=128+_*128;g(m,370,43,"#1d2f42"),_===2&&g(m,370,43,"#e6d9ab"),(_===1||_===3)&&(h.fillStyle="#e6d9ab",h.beginPath(),h.arc(m,370,43,_===1?-Math.PI/2:Math.PI/2,_===1?Math.PI/2:Math.PI*1.5),h.closePath(),h.fill()),h.fillStyle="#dfd7bd",h.fillText(["新月","上弦月","满月","下弦月"][_],m,465)}else if(l===1){const _=[[112,425],[178,378],[251,398],[329,350],[351,442],[465,456],[491,349]];h.strokeStyle="#aabac6",h.lineWidth=3,h.beginPath(),_.forEach(([m,f],T)=>T?h.lineTo(m,f):h.moveTo(m,f)),h.lineTo(329,350),h.stroke();for(const[m,f]of _)g(m,f,7,"#eee0ac");h.fillStyle="#dfd7bd",h.fillText("北斗七星",320,520)}else{const _=["#e1b968","#afa491","#c4af85","#7ea5b6","#bd8268"],m=["太阳","水星","金星","地球","火星"];for(let f=0;f<5;f++){const T=128+f*98;g(T,375,[48,10,17,19,14][f],_[f]),h.fillStyle="#dfd7bd",h.fillText(m[f],T,465)}h.font="16px Microsoft YaHei",h.fillText("示意图：大小和距离未按比例",320,536)}h.fillStyle="#414a40",h.font="26px Microsoft YaHei",h.textAlign="left",(n.content[l].match(/.{1,18}/gu)||[]).forEach((_,m)=>h.fillText(_,83,640+m*43)),h.textAlign="center",h.font="18px Georgia",h.fillText(String(l+1),320,790);return}if(n.content){h.fillStyle="#414a40",h.font="30px Microsoft YaHei",h.fillText(n.title,d/2,175),h.textAlign="left",h.font="27px Microsoft YaHei",(n.content[l].match(/.{1,17}/gu)||[]).forEach((_,m)=>h.fillText(_,90,285+m*54)),h.textAlign="center",h.font="18px Georgia",h.fillText(String(l+1),d/2,790);return}h.font="38px Georgia",h.fillText(["A map of quiet places","Windows after midnight","The way home"][l],d/2,161),h.font="23px Microsoft YaHei",h.fillText(["安 静 之 地 的 地 图","午 夜 之 后 的 窗","回 家 的 路"][l],d/2,211),h.strokeStyle="#6a7964",h.lineWidth=2,h.beginPath(),h.arc(320,390,122,0,Math.PI*2),h.stroke();const p=[[250,302],[295,340],[390,325],[370,425],[290,467],[238,417],[250,302]];h.beginPath(),p.forEach(([g,_],m)=>m?h.lineTo(g,_):h.moveTo(g,_)),h.stroke(),p.forEach(([g,_])=>{h.beginPath(),h.arc(g,_,4,0,Math.PI*2),h.fill()}),h.font="21px Georgia",["Some places can only be found","after the last light has gone out.","Follow the rain. Remember the way home."].forEach((g,_)=>h.fillText(g,d/2,601+_*36)),h.font="18px Microsoft YaHei",h.fillText(["沿着雨声，记住回家的路。","每一扇亮着的窗，都有人在等待。","灯光熄灭以前，沿原路返回。"][l],d/2,733),h.font="18px Georgia",h.fillText(`—  ${String(7+l).padStart(2,"0")}  —`,d/2,795)}));if(t.userData.pages=c,t.userData.page=En(t,.407,.545,[0,0,.0305],c[0]),En(t,.438,.577,[0,0,-.048],Wn(["NIGHTFALL PRESS","","A map for the hours","between dusk and dawn.","","0147 / ARCHIVES"],{bg:"#233f3d",size:29}),[0,Math.PI,0]),t.userData.cover=r,t.userData.front=a,n.content){const l=pi(128,768,(h,d,u)=>{h.fillStyle=n.coverColor||"#233f3d",h.fillRect(0,0,d,u),h.fillStyle="#d2c5a2",h.font="64px Microsoft YaHei",h.textAlign="center",[...n.title].forEach((p,g)=>h.fillText(p,d/2,220+g*85))});En(t,.088,.57,[-.235,0,0],l,[0,-Math.PI/2,0])}return t.userData.cleanPages=[o,...c].map(l=>{const h=document.createElement("canvas");return h.width=l.image.width,h.height=l.image.height,h.getContext("2d").drawImage(l.image,0,0),h}),Pu(t,e),t}function Pu(n,e){const t=n.userData.front;[t.material.map,...n.userData.pages].forEach((i,s)=>{const r=i.image,o=r.getContext("2d");o.drawImage(n.userData.cleanPages[s],0,0),mv(o,r.width,r.height,e,s),i.needsUpdate=!0}),n.userData.damageHotspots=e.filter(i=>i.visible&&["scratch","stain","tear","corner_fold"].includes(i.type)).map(i=>({damageId:i.id,type:i.type,page:i.page,uvRect:i.uvRect,enabled:!0,surface:i.page===0?t:n.userData.page}))}const gv={WAITING:{START:"CUSTOMER_ENTERING"},CUSTOMER_ENTERING:{ARRIVE:"CUSTOMER_TALKING"},CUSTOMER_TALKING:{PLACE_ITEMS:"ITEMS_PLACED"},ITEMS_PLACED:{PICK_ID:"ID_HELD",PICK_BOOK:"BOOK_HELD"},ID_HELD:{RETURN_ID:"ITEMS_PLACED"},BOOK_INSPECT:{EXIT_INSPECT:"BOOK_HELD"},BOOK_HELD:{PUT_BOOK:"ITEMS_PLACED",INSPECT_AGAIN:"BOOK_INSPECT",BORROW:"BORROW_COMMIT",REJECT:"REJECT_COMMIT"},BORROW_COMMIT:{RESPOND:"CUSTOMER_RESPONSE"},REJECT_COMMIT:{RESPOND:"CUSTOMER_RESPONSE"},CUSTOMER_RESPONSE:{LEAVE:"CUSTOMER_LEAVING"},CUSTOMER_LEAVING:{COMPLETE:"TRANSACTION_COMPLETE"},TRANSACTION_COMPLETE:{}},_v={RETURN_WAITING:{START:"RETURN_CUSTOMER_ENTERING"},RETURN_CUSTOMER_ENTERING:{ARRIVE:"RETURN_CUSTOMER_TALKING"},RETURN_CUSTOMER_TALKING:{PLACE_ITEMS:"RETURN_BOOK_PLACED"},RETURN_BOOK_PLACED:{PICK_BOOK:"RETURN_BOOK_HELD"},RETURN_BOOK_HELD:{PUT_BOOK:"RETURN_BOOK_PLACED",INSPECT_AGAIN:"RETURN_BOOK_INSPECT",ACCEPT:"RETURN_ACCEPTED"},RETURN_BOOK_INSPECT:{EXIT_INSPECT:"RETURN_BOOK_HELD",SELECT_DAMAGE:"RETURN_DAMAGE_SELECTED"},RETURN_DAMAGE_SELECTED:{BEGIN_DIALOGUE:"RETURN_DAMAGE_DIALOGUE"},RETURN_DAMAGE_DIALOGUE:{SHOW_DECISION:"RETURN_DECISION"},RETURN_DECISION:{CHARGE:"RETURN_BOOK_HELD",WAIVE:"RETURN_BOOK_HELD"},RETURN_ACCEPTED:{RESPOND:"RETURN_CUSTOMER_RESPONSE"},RETURN_CUSTOMER_RESPONSE:{LEAVE:"RETURN_CUSTOMER_LEAVING"},RETURN_CUSTOMER_LEAVING:{COMPLETE:"RETURN_COMPLETE"},RETURN_COMPLETE:{}};class Iu{constructor({type:e="borrow",customerId:t,actualIdentityMatch:i,bookId:s,bookInstanceId:r,damageProfile:o=[],existingDamageBeforeLoan:a=[]}){this.type=e,this.bookId=s,this.bookInstanceId=r,this.damageDecisions=[],this.damageProfile=o,this.existingDamageBeforeLoan=a,this.selectedDamageId=null,this.customerId=t,this.actualIdentityMatch=i,this.state=e==="return"?"RETURN_WAITING":"WAITING",this.checklist=null,this.cardReturned=!1,this.decision=null,this.record=null}get phase(){return this.type!=="return"?this.state:this.state==="RETURN_BOOK_PLACED"?"ITEMS_PLACED":this.state==="RETURN_COMPLETE"?"TRANSACTION_COMPLETE":this.state.slice(7)}dispatch(e,t){if(e==="PICK_ID"&&this.cardReturned)return!1;const i=(this.type==="return"?_v:gv)[this.state]?.[e];if(!i)return!1;if(e==="SELECT_DAMAGE"){if(!this.damageProfile.some(s=>s.id===t&&s.visible))return!1;this.selectedDamageId=t}if(this.state=i,e==="RETURN_ID"&&(this.cardReturned=!0),["CHARGE","WAIVE"].includes(e)){const s=this.damageProfile.find(h=>h.id===this.selectedDamageId),r=s.causedDuringLoan??!this.existingDamageBeforeLoan.includes(s.id),o=e.toLowerCase(),a=o==="charge"===r,c={damageId:s.id,decision:o,isCorrect:a,reason:a?null:r?"missed_new_damage":"charged_existing_damage"},l=this.damageDecisions.findIndex(h=>h.damageId===s.id);l<0?this.damageDecisions.push(c):this.damageDecisions[l]=c}if(["BORROW","REJECT","ACCEPT"].includes(e)&&(this.decision=e.toLowerCase()),e==="COMPLETE")if(this.type==="return"){const s=this.damageProfile.filter(a=>a.visible),r=s.some(a=>a.causedDuringLoan??!this.existingDamageBeforeLoan.includes(a.id)),o=s.flatMap(a=>{const c=a.causedDuringLoan??!this.existingDamageBeforeLoan.includes(a.id),l=this.damageDecisions.find(h=>h.damageId===a.id)?.decision==="charge";return c===l?[]:[{damageId:a.id,reason:c?"missed_new_damage":"charged_existing_damage"}]});this.record=Object.freeze({transactionType:"return",customerId:this.customerId,bookId:this.bookId,bookInstanceId:this.bookInstanceId,actualDamagePresent:s.length>0,actualDamageResponsibility:r,selectedDamageId:this.selectedDamageId,finalDecision:this.decision,damageDecisions:structuredClone(this.damageDecisions),isCorrect:o.length===0,reason:o[0]?.reason??null,errors:o,timestamp:new Date().toISOString()})}else this.record=Object.freeze({transactionType:"borrow",customerId:this.customerId,bookId:this.bookId,bookInstanceId:this.bookInstanceId,actualIdentityMatch:this.actualIdentityMatch,playerChecklistIdentity:this.checklist,finalDecision:this.decision,isCorrect:this.decision==="borrow"===this.actualIdentityMatch,timestamp:new Date().toISOString()});return!0}}const Yl={A:{customerId:"return-reader-01",book:{id:"distant-lighthouse",title:"远方的灯塔",englishTitle:["THE DISTANT","LIGHTHOUSE"],art:"lighthouse",damageProfile:[{id:"scratch_cover_01",type:"scratch",location:"front_cover",page:0,severity:1,visible:!0,uvRect:[.65,.71,.2,.1]}]},existingDamageBeforeLoan:[]},B:{customerId:"return-reader-02",book:{id:"city-rain",title:"城市里的雨",englishTitle:["RAIN IN","THE CITY"],art:"rain",damageProfile:[]},existingDamageBeforeLoan:[]}},{damageProfile:nx,..._l}=Yl.A.book,{damageProfile:ix,...vl}=Yl.B.book,Du={[_l.id]:_l,[vl.id]:vl},vv={id:"fold_corner_01",type:"corner_fold",location:"front_cover_bottom_right",page:0,uvRect:[.78,.82,.2,.16],active:!0,createdAt:"BEFORE_GAME"},xv={id:"coffee_stain_01",type:"stain",location:"page_3",page:3,uvRect:[.56,.36,.29,.23],active:!0,createdAt:"CURRENT_LOAN"};class rr{constructor(e,t,i=[]){this.instanceId=e,this.definitionId=t,this.status="IN_LIBRARY",this.holderCustomerId=null,this.damages=structuredClone(i),this.existingDamageBeforeLoan=[]}visualDamages(){return this.damages.filter(e=>e.active).map(({id:e,type:t,location:i,page:s,uvRect:r})=>({id:e,type:t,location:i,page:s,uvRect:[...r],visible:!0}))}}const Kl=[{type:"borrow",customerId:"lin_zhou",bookInstanceId:"book_lighthouse_001",delayBefore:0,greeting:"晚上好，我想借这本。"},{type:"borrow",customerId:"zhou_ning",bookInstanceId:"book_city_rain_001",delayBefore:5,greeting:"晚上好，我想借这本书。"},{type:"return",customerId:"lin_zhou",bookInstanceId:"book_lighthouse_001",delayBefore:10,greeting:"你好，我来还刚才那本书。",beforeArrival:{addDamage:[xv]},damageReplies:{fold_corner_01:["这个吗？","我借的时候就已经这样了。"],coffee_stain_01:["啊……","喝东西的时候不小心碰到了。"]}}];class Mv{constructor(){this.books=new Map([["book_lighthouse_001",new rr("book_lighthouse_001",_l.id,[vv])],["book_city_rain_001",new rr("book_city_rain_001",vl.id)]]),this.index=0,this.records=[],this.active=null}begin(){if(this.active)return this.active;const e=Kl[this.index];if(!e)return null;const t=this.books.get(e.bookInstanceId);if(e.type==="return"&&(t.status!=="ON_LOAN"||t.holderCustomerId!==e.customerId))return this.index++,this.begin();for(const i of e.beforeArrival?.addDamage||[])t.damages.some(s=>s.id===i.id)||t.damages.push(structuredClone(i));return e.type==="return"&&(t.status="IN_RETURN_TRANSACTION"),this.active={step:e,book:t,definition:Du[t.definitionId],transaction:new Iu({type:e.type,customerId:e.customerId,bookId:t.definitionId,bookInstanceId:t.instanceId,actualIdentityMatch:!0,damageProfile:t.visualDamages(),existingDamageBeforeLoan:[...t.existingDamageBeforeLoan]})},this.active}complete(e){if(!this.active||e!==this.active.transaction||!e.record)return!1;const{book:t,step:i}=this.active;return i.type==="borrow"&&e.decision==="borrow"?(t.existingDamageBeforeLoan=t.damages.filter(s=>s.active).map(s=>s.id),t.status="ON_LOAN",t.holderCustomerId=i.customerId):(t.status="IN_LIBRARY",t.holderCustomerId=null),this.index++,this.records.push(e.record),this.active=null,!0}}const $l=[{id:"literature",label:["LITERATURE","文学"],position:[-4,0,-2.6]},{id:"history",label:["HISTORY","历史"],position:[4,0,-2.8]},{id:"nature",label:["NATURE","自然"],position:[-4.2,0,.7]},{id:"science",label:["SCIENCE","科普"],position:[4.4,0,.4]}],vr=[{...Du["distant-lighthouse"],category:"literature",content:["他离开家乡很多年，再回到海边时，灯塔仍在黄昏准时亮起。守灯人递给他一杯热茶，谁也没有先说话。","风把信纸吹向窗边。他压住纸角，想起母亲曾说，海上的灯不问归期，只负责在天黑以后等着。","船越走越远，故乡缩成一道细线。他终于明白，留在岸上的那些日子，也会陪着人一起远行。"]},{id:"before-rain-ends",title:"雨停之前",englishTitle:["BEFORE THE","RAIN ENDS"],category:"literature",art:"rain",coverColor:"#40525d",content:["她把伞靠在窗边，坐回熟悉的位置。街上的行人渐渐稀少，玻璃映着她的脸，也映着对面那扇亮灯的窗。","那封信一直留在抽屉里。雨停之前，她又读了一遍开头，终于在空白的纸上写下第一句话。","窗外有人收起了伞。她端着温热的杯子，想起很久以前，他们也是这样并排等过一场雨。"]},{id:"harbour-years",title:"港口年代",englishTitle:["HARBOUR","YEARS"],category:"history",art:"port",coverColor:"#594433",content:["十九世纪末，旧港扩建了第一座石砌码头。船运账册中的货物数量，记录着这座城市从渔村到商埠的变化。","本章对照一九二三年的港区地图与海关档案，整理仓库、铁路和船坞的位置，复原当时码头的日常运作。","工人留下的口述记录补充了报纸未曾提及的生活。潮汐时刻表、工资簿和家书，共同构成港口的历史。"]},{id:"old-city-archive",title:"旧城档案",englishTitle:["OLD CITY","ARCHIVES"],category:"history",art:"city",coverColor:"#807660",content:["这张测绘图完成于一九三一年。街巷的旧称标注在建筑轮廓旁，与今日路名对照，可以辨认城市扩张的方向。","市政会议纪要记载了供水系统的修建经过。工程分为三期，先沿主街铺设，再逐步进入居民密集的支路。","修复老建筑时，门牌、砖印与住户档案互相印证。它们让一栋普通房屋重新获得了准确的年代和姓名。"]},{id:"woodland-notes",title:"林间观察",englishTitle:["WOODLAND","NOTES"],category:"nature",art:"plant",coverColor:"#324a38",content:["蕨类常生长在阴湿的林下。翻看成熟叶片的背面，可以见到排列整齐的孢子囊群，它们并不是虫卵。","清晨是观察林鸟的好时段。保持安静，先听鸣声，再辨认喙形与尾羽；记录时间、天气和树木所在的位置。","落叶下的菌丝分解枯枝，让养分回到土壤。观察时轻轻拨开表层，结束后将落叶盖回，保留原来的湿度。"]},{id:"light-machines",title:"光与机械",englishTitle:["LIGHT &","MACHINES"],category:"science",art:"gear",coverColor:"#3f505d",content:["光通过凸透镜时会发生折射。将屏幕缓缓移到焦点附近，可以得到清晰的倒立像，这也是相机成像的基础。","两只啮合齿轮的转速与齿数成反比。小齿轮带动大齿轮时，输出转速降低，而传递的转矩相应增大。","测量杠杆两端的力臂，可以预测平衡的位置。支点不是力的来源，它改变的是施力的方向与所需的大小。"]},{id:"night-sky-guide",title:"夜空图鉴",englishTitle:["A GUIDE TO","THE NIGHT SKY"],category:"science",art:"sky",coverColor:"#293c60",recommendationTags:["astronomy","science","children","beginner","illustrated"],content:["月亮不会自己发光，它反射太阳的光。每天看一看，亮的部分在慢慢改变。","把明亮的星星连起来，就像一把小勺子。找一找，北斗七星在哪里？","地球和其他行星一起绕着太阳转。太阳是一颗会自己发光的恒星。"]}];for(const n of vr)n.recommendationTags??=[n.category];const vh=[[-2.94,.849,-2.42],[-2.68,.058,-2.13],[-1.46,.058,-2.05],[.85,.058,-3.45],[3.62,.058,-1.05],[1.95,.058,-.18]];class Sv{books=new Map;slots=[];taskBookIds=[];heldBookId=null;result=null;constructor(){vr.slice(0,vh.length).forEach((t,i)=>{const s=`shelving_${t.id}`;this.taskBookIds.push(s),this.books.set(s,{...new rr(s,t.id),category:t.category,location:{type:"scattered",position:vh[i]}})});for(const t of $l){const i=vr.find(s=>s.category===t.id);for(let s=0;s<6;s++){const r={slotId:`${t.id}_${s}`,shelfId:t.id,category:t.id,localPosition:[-.49+s%3*.49,s<3?.73:1.57,.075],localRotation:[0,Math.PI/2,0],occupantBookId:null};if([0,2,4].includes(s)){const o=`shelf_${r.slotId}`;r.occupantBookId=o,this.books.set(o,{...new rr(o,i.id),category:i.category,location:{type:"shelf",shelfId:t.id,slotId:r.slotId}})}this.slots.push(r)}}const e=this.slots.find(t=>t.slotId==="science_5");e.occupantBookId="book_night_sky_guide_001",this.books.set(e.occupantBookId,{...new rr(e.occupantBookId,"night-sky-guide"),category:"science",location:{type:"shelf",shelfId:"science",slotId:e.slotId}})}pickup(e){const t=this.books.get(e);if(!t||this.heldBookId)return!1;const i=this.slots.find(s=>s.occupantBookId===e);return i&&(i.occupantBookId=null),t.location={type:"held"},this.heldBookId=e,this.result=null,!0}removeFromShelf(e){return this.getBookLocation(e)?.type==="shelf"&&this.pickup(e)}place(e,t,i){const s=this.slots.find(r=>r.slotId===i&&r.shelfId===t);if(!s||s.occupantBookId||e!==this.heldBookId||!this.books.has(e))return!1;if(s.occupantBookId=e,this.books.get(e).location={type:"shelf",shelfId:t,slotId:i},this.heldBookId=null,this.isTaskComplete()){const r=this.getFinalLayout(),o=r.filter(a=>a.isCorrect).length;this.result={taskBookIds:[...this.taskBookIds],finalPlacements:r,correctPlacementCount:o,wrongPlacementCount:r.length-o,completedAt:new Date().toISOString()}}return!0}getBookLocation(e){return this.books.get(e)?.location}getPendingBooks(){return this.taskBookIds.filter(e=>this.getBookLocation(e).type!=="shelf")}isTaskComplete(){return!this.heldBookId&&!this.getPendingBooks().length}getFinalLayout(){return[...this.books.keys()].flatMap(e=>{const t=this.books.get(e),i=t.location;if(i.type!=="shelf")return[];const s=this.slots.find(r=>r.slotId===i.slotId);return[{bookId:e,actualCategory:t.category,shelfId:s.shelfId,shelfCategory:s.category,slotId:s.slotId,isCorrect:t.category===s.category}]})}}function yv(n,{returnMode:e=!1}={}){const t=new Map,i=[],s=xa("#483326"),r=xa("#62462e");Be("#262521");const o=Be("#292b25"),a=Be("#8e7750",{metalness:.45,roughness:.48}),c=Be("#675f48"),l=Be("#293e3b"),h=Be("#152737");re(n,[11,.16,10],[0,-.08,-.9],xa("#4a4031"));for(let k=-5;k<5;k+=.54)re(n,[.008,.006,9.5],[k,.008,-.9],Be("#262c28"));re(n,[11,.18,10],[0,3.65,-.9],Be("#292a22")),re(n,[.2,3.8,9.5],[-5.25,1.8,-.9],c),re(n,[.2,3.8,9.5],[5.25,1.8,-.9],c),re(n,[10.5,3.8,.2],[0,1.8,3.95],c);for(const k of[-4.25,4.25])re(n,[1.95,3.8,.24],[k,1.8,-4.4],c),re(n,[1.96,.94,.26],[k,.48,-4.22],l);re(n,[7,.14,.23],[0,.07,-4.45],l),re(n,[7,.33,.23],[0,3.49,-4.45],s);const d=new mp({color:"#9baab0",transparent:!0,opacity:.055,roughness:.3,metalness:.05,depthWrite:!1});re(n,[5.85,3.25,.025],[-.575,1.77,-4.48],d).castShadow=!1;for(const k of[-3.5,-2.32,-1.16,0,1.16,2.32,3.5])re(n,[.085,3.02,.17],[k,1.96,-4.31],o);for(const k of[.15,1.14,3.39])re(n,[k===3.39?7.15:5.85,.075,.16],[k===3.39?0:-.575,k,-4.3],o);const u=new Ut;u.position.set(2.35,0,-4.21),n.add(u);for(const k of[0,1.08])re(u,[.065,3.33,.1],[k,1.665,0],s);for(const k of[.04,3.33])re(u,[1.15,.065,.1],[.54,k,0],s);re(u,[1.02,3.2,.025],[.54,1.665,-.012],d).castShadow=!1,re(u,[.04,.43,.04],[.9,1.7,.095],a),re(u,[.72,.045,.06],[.54,1.05,.09],a);const p=En(u,.36,.2,[.54,2.32,.062],Wn(["OPEN LATE"],{w:512,h:256,bg:"#283f37",ink:"#c7b68a",size:42}));for(const k of[-4.6,-2.45,2.45,4.6])re(n,[.11,.18,8.6],[k,3.49,-.6],s);for(const k of[-3.7,-.5,2])re(n,[10,.14,.14],[0,3.48,k],s);function g(k,he,me=1.65,N=2.62,K){const se=new Ut;se.position.set(k,0,he),n.add(se),t.set(K.id,se),re(se,[.6,.035,.12],[0,2.4,.35],o),re(se,[.48,.008,.09],[0,2.378,.35],Be("#c9b488",{emissive:"#d8b882",emissiveIntensity:.65}));const Te=new li("#e5cca6",1.8,3.5,2);Te.position.set(0,2.23,1.02),se.add(Te),i.push([Te,Te.intensity]),re(se,[me,N,.1],[0,N/2,-.18],Be("#302920"));for(const Pe of[-1,1])re(se,[.09,N,.49],[Pe*(me/2),N/2,.02],s);for(const Pe of[.4,1.24,2.08])re(se,[me+.12,.085,.53],[0,Pe,.03],s);re(se,[me+.18,.12,.57],[0,2.13,.03],s),En(se,.74,.19,[0,2.25,.308],Wn(K.label,{w:512,h:192,bg:"#302d25",ink:"#b6a079",size:40}))}$l.forEach(k=>g(k.position[0],k.position[2],1.65,2.16,k)),re(n,[1.42,.085,.78],[-2.55,.76,-2.45],s);for(const k of[-3.1,-2])for(const he of[-2.7,-2.2])re(n,[.055,.73,.055],[k,.37,he],o);for(const k of[-3.35,-1.82]){re(n,[.39,.065,.4],[k,.43,-2.15],s),re(n,[.38,.38,.055],[k,.7,-2.32],s);for(const he of[-.15,.15])for(const me of[-.14,.14])re(n,[.038,.4,.038],[k+he,.21,-2.15+me],o)}function _(k,he,me,N=1){jt(n,.16*N,.19*N,.045*N,[k,he,me],a),jt(n,.018*N,.021*N,.47*N,[k,he+.245*N,me],a);const K=jt(n,.115*N,.27*N,.18*N,[k,he+.56*N,me],Be("#2b5142",{roughness:.48}),12);jt(n,.2*N,.2*N,.012,[k,he+.475*N,me],Be("#ffe3a2",{emissive:"#ffd27a",emissiveIntensity:2.2}),12);const se=new li("#ffd098",2.5*N,2.5*N,2);return se.position.set(k,he+.42*N,me),n.add(se),me<0&&i.push([se,se.intensity]),K}_(-2.55,.82,-2.48,.75);function m(k,he,me=1){const N=new Ut;N.position.set(k,0,he),N.scale.setScalar(me),n.add(N),jt(N,.2,.14,.32,[0,.18,0],Be("#564735")),jt(N,.013,.018,.68,[0,.63,0],Be("#384631"),6);for(let K=0;K<6;K++){const se=new Rt(new wo(.27),Be(K%2?"#394e34":"#2d4738")),Te=K*2.4;se.scale.set(.42,1,.18),se.position.set(Math.cos(Te)*.18,.48+K*.046,Math.sin(Te)*.15),se.rotation.set(Math.sin(Te)*.7,0,Math.cos(Te)*.65),N.add(se)}}m(-3.45,-3.55,1.16),m(3.48,-3.5,.95),re(n,[5.45,.16,1.82],[0,.97,1.31],r),re(n,[5.25,.83,.12],[0,.47,.44],s),re(n,[5.5,.043,.045],[0,1.025,2.2],a);for(const k of[-2.68,2.68])re(n,[.08,.87,1.77],[k,.49,1.3],s);_(-1.73,1.063,.36,.88);const f=re(n,[1.39,.012,.79],[0,1.057,1.19],Be("#293d38")),T=new Ut;T.position.set(-1.14,1.055,.87),n.add(T),re(T,[.69,.044,.65],[0,.022,0],s);for(const k of[-.335,.335])re(T,[.035,.13,.65],[k,.073,0],s);re(T,[.69,.13,.035],[0,.073,-.305],s),re(T,[.69,.09,.035],[0,.052,.305],s);const y=En(T,.35,.063,[0,.055,.324],Wn([e?"归 还":"待 处 理"],{w:512,h:128,bg:"#b9ad89",ink:"#3b4438",size:48})),v=new Ut;v.position.set(1.22,1.056,.84),n.add(v);const R=Be("#242e2c",{roughness:.55});re(v,[.64,.075,.69],[0,.037,0],R),re(v,[.44,.025,.45],[0,.086,.065],Be("#364b3f",{roughness:.35})),re(v,[.13,.34,.12],[.17,.21,-.22],R),re(v,[.57,.25,.22],[0,.47,-.2],R,[-.12,0,0]);const A=En(v,.44,.155,[0,.474,-.077],Wn(["TERMINAL 03","READY"],{w:768,h:256,bg:"#263d2c",ink:"#9dcf89",size:45}),[-.12,0,0],!0),w=re(v,[.035,.013,.008],[.24,.398,-.075],Be("#bbd78b",{emissive:"#a5dd6b",emissiveIntensity:1.4})),P=re(v,[.43,.003,.008],[0,.101,.08],Be("#a9db81",{emissive:"#80c36b",emissiveIntensity:1}));P.visible=!1;const M=new Ut;M.position.set(-.08,1.075,1.83),M.rotation.set(-Math.PI/2,0,-.035),n.add(M),re(M,[.57,.34,.023],[0,0,0],s),En(M,.51,.295,[0,0,.013],pi(768,448,(k,he,me)=>{k.fillStyle="#b5aa87",k.fillRect(0,0,he,me),k.fillStyle="#545b49",k.font="29px Georgia",k.fillText("NIGHT SHIFT LOG",45,63),k.font="18px Microsoft YaHei",k.fillText("夜间借阅登记",45,104),k.strokeStyle="#6c766244";for(let N=153;N<me-20;N+=42)k.beginPath(),k.moveTo(45,N),k.lineTo(he-45,N),k.stroke();for(const N of[198,440,588])k.beginPath(),k.moveTo(N,127),k.lineTo(N,me-27),k.stroke()}));const S=jt(n,.008,.008,.27,[.34,1.079,1.82],Be("#222f2c"),6);S.rotation.z=Math.PI/2,S.rotation.y=.19;const D=jt(n,.08,.066,.16,[1.88,1.14,1.36],Be("#bcac88"),12);jt(n,.068,.068,.002,[1.88,1.223,1.36],Be("#312820"),12);const B=new Rt(new Ro(.055,.013,5,12),D.material);B.position.set(1.965,1.16,1.36),n.add(B);for(let k=0;k<3;k++){const he=re(n,[.52,.072,.33],[-1.95,1.09+k*.078,1.59],Be(["#48514a","#65473c","#3b4b50"][k]));he.rotation.y=k*.09,En(n,.42,.047,[-1.94,1.095+k*.078,1.762],Wn([["QUIET PLACES","ASTRONOMY","NIGHT ARCHIVES"][k]],{w:512,h:100,bg:["#48514a","#65473c","#3b4b50"][k],ink:"#b6a986",size:38}))}re(n,[30,.1,24],[0,-.11,-12],Be("#142536",{roughness:.3,metalness:.12})),re(n,[8,5,1.8],[-.7,2.3,-13],Be("#243c51",{emissive:"#1b344e",emissiveIntensity:.4})),re(n,[8.4,.22,2],[-.7,4.85,-13],Be("#18232c")),re(n,[3.7,6.8,2],[7,3.2,-16],h),re(n,[3.8,4.6,2],[-8,2.2,-14],h);for(let k=-3.9;k<3;k+=1.15)for(const he of[.9,2.25,3.65]){const me=ps()>.55,N=Be(me?"#b59859":"#213945",me?{emissive:"#b27e35",emissiveIntensity:.6}:{emissive:"#1f394c",emissiveIntensity:.3});re(n,[.64,.84,.04],[k,he,-12.075],N),re(n,[.035,.84,.05],[k,he,-12.03],o),re(n,[.65,.035,.05],[k,he,-12.03],o)}const V=pi(128,512,(k,he,me)=>{const N=k.createLinearGradient(0,0,0,me);N.addColorStop(0,"#e6be7600"),N.addColorStop(.35,"#e6be7688"),N.addColorStop(.8,"#bba77955"),N.addColorStop(1,"#bfa77b00"),k.fillStyle=N;const K=_r(51);for(let se=0;se<me;se+=4+K()*10){const Te=12+K()*85;k.globalAlpha=.15+K()*.8,k.fillRect((he-Te)/2+(K()-.5)*20,se,Te,2+K()*3)}});for(const[k,he]of[[-2.7,-7],[2.8,-8],[6,-11],[-6,-10]]){jt(n,.045,.07,2.78,[k,1.39,he],o,7),re(n,[.3,.09,.31],[k,2.82,he],o),re(n,[.22,.18,.22],[k,2.7,he],Be("#f5d49b",{emissive:"#ffcf82",emissiveIntensity:2.6}));const me=new li("#ffc77f",6,4.5,2);me.position.set(k,2.6,he),n.add(me);const N=new Rt(new ks(1,5),new Ji({map:V,transparent:!0,opacity:.55,depthWrite:!1,blending:lo}));N.rotation.x=-Math.PI/2,N.position.set(k,-.045,he+1.5),n.add(N)}for(const[k,he]of[[-3.9,-7.5],[4.4,-8.8],[-1.7,-10.5]]){jt(n,.04,.12,3.4,[k,1.7,he],Be("#17292d"),5);for(let me=0;me<7;me++){const N=me*2.7,K=jt(n,.009,.035,.85,[k+Math.cos(N)*.23,1.6+me*.21,he+Math.sin(N)*.2],Be("#1a2c2f"),5);K.rotation.z=Math.cos(N)*.8,K.rotation.x=Math.sin(N)*.6}}const J=500,z=new Float32Array(J*6),$=new Float32Array(J);for(let k=0;k<J;k++){const he=k*6;z[he]=(ps()-.5)*20,z[he+1]=ps()*7,z[he+2]=-4.7-ps()*13,z[he+3]=z[he]+.025,z[he+4]=z[he+1]+.13+ps()*.12,z[he+5]=z[he+2],$[k]=2.2+ps()*2.6}const Q=new hn;Q.setAttribute("position",new zn(z,3));const X=new Lf(Q,new ou({color:"#85a9bb",transparent:!0,opacity:.12,depthWrite:!1}));n.add(X);const ge=pi(512,512,(k,he,me)=>{const N=_r(9);k.strokeStyle="#c6d5dd";for(let K=0;K<110;K++){k.globalAlpha=.035+N()*.12,k.lineWidth=.4+N()*.8;const se=N()*he,Te=N()*me;k.beginPath(),k.moveTo(se,Te),k.lineTo(se-2,Te+12+N()*58),k.stroke()}});En(n,6.85,2.8,[0,1.95,-4.18],ge,null,!0),n.add(new vp("#8b9caa","#3b3020",.26));const xe=new Mp("#ffd3a0",11,8,Math.PI/3,.75,1.5);xe.position.set(-1.25,3.28,1.4),xe.target.position.set(0,1.05,.15),xe.castShadow=!0,xe.shadow.mapSize.set(1024,1024),xe.shadow.bias=-3e-4,xe.shadow.normalBias=.025,n.add(xe,xe.target);const we=new li("#ffe0b4",1.9,4,2);we.position.set(.9,2.3,1.2),n.add(we);const Xe=new li("#93b7d5",4.5,5,2);Xe.position.set(0,2.6,-2.9),n.add(Xe);for(const[k,he]of[[-1.2,.9],[1.8,-2.6],[-2.8,-3.1]])if(re(n,[.87,.07,.37],[k,3.42,he],o),re(n,[.73,.016,.26],[k,3.376,he],Be("#ead6a2",{emissive:"#ffd39a",emissiveIntensity:1.3})),he<0){const me=new li("#f5bd78",2.2,4,2);me.position.set(k,3.22,he),n.add(me),i.push([me,me.intensity])}return{door:u,scanner:v,reject:T,screen:A,scanLine:P,led:w,mat:f,sortingShelves:t,closed:!1,lockedFromOutside:!1,canExitFromInside:!0,setReadingProgress(k){i.forEach(([he,me])=>he.intensity=me*(1-.05*k))},setClosed(k=1){this.closed||(p.material.map.dispose(),p.material.map=Wn(["CLOSED"],{w:512,h:256,bg:"#283f37",ink:"#c7b68a",size:48}),this.closed=!0,this.lockedFromOutside=!0),i.forEach(([he,me])=>he.intensity=me*(1-.2*k))},setReturnMode(k){const he=y.material.map;y.material.map=Wn([k?"归 还":"待 处 理"],{w:512,h:128,bg:"#b9ad89",ink:"#3b4438",size:48}),he.dispose()},update(k,he){for(let me=0;me<J;me++){const N=me*6,K=$[me]*k;z[N+1]-=K,z[N+4]-=K,z[N+4]<0&&(z[N+1]+=7,z[N+4]+=7)}Q.attributes.position.needsUpdate=!0,P.visible&&(P.position.z=.07+Math.sin(he*13)*.19)},setScanner(k){const he=A.material.map;A.material.map=Wn([k?"借 阅 完 成":"READY / 待机"],{w:768,h:256,bg:k?"#4d613e":"#263d2c",ink:k?"#eff4bf":"#9dcf89",size:45}),he.dispose()}}}class Ev{constructor(){this.ctx=null,this.muted=!1,this.master=null,this.ambience=null,this.ambienceVolume=.28,this.layers=[]}async start(){if(this.ctx){await this.ctx.resume();return}this.ctx=new AudioContext;const e=this.ctx;this.master=e.createGain(),this.master.gain.value=this.muted?0:.5,this.master.connect(e.destination),this.ambience=e.createGain(),this.ambience.gain.value=this.ambienceVolume,this.ambience.connect(this.master);const t=e.createBuffer(1,e.sampleRate*4,e.sampleRate),i=t.getChannelData(0);let s=0;for(let d=0;d<i.length;d++){const u=Math.random()*2-1;s=(s+.018*u)/1.02,i[d]=s*3+u*.08}const r=e.createBufferSource();r.buffer=t,r.loop=!0;const o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=2400;const a=e.createGain();a.gain.value=.06,r.connect(o).connect(a).connect(this.ambience),r.start();const c=e.createOscillator();c.type="sine",c.frequency.value=62;const l=e.createGain();l.gain.value=.003,c.connect(l).connect(this.ambience),c.start();const h=new URL("audio/",document.baseURI);this.loading=Promise.allSettled([this.loadLayer(new URL("indoor-rain-508962.mp3",h),.12,1550,47,-.08),this.loadLayer(new URL("room-tone-192529.mp3",h),.075,620,71,.08)]).then(d=>(d.some(u=>u.status==="fulfilled")&&(a.gain.setTargetAtTime(0,e.currentTime,1.5),l.gain.setTargetAtTime(0,e.currentTime,1.5)),d))}async loadLayer(e,t,i,s,r){const o=await fetch(e,{signal:AbortSignal.timeout(5e3)});if(!o.ok)throw new Error(`Audio unavailable: ${o.status}`);const a=await this.ctx.decodeAudioData(await o.arrayBuffer()),c=this.prepareLoop(a),l=this.ctx,h=l.createBufferSource();h.buffer=c,h.loop=!0;const d=l.createBiquadFilter();d.type="lowpass",d.frequency.value=i;const u=l.createGain();u.gain.value=0;const p=l.createStereoPanner();p.pan.value=r,h.connect(d).connect(u).connect(p).connect(this.ambience);const g=l.createOscillator(),_=l.createGain();g.frequency.value=1/s,_.gain.value=t*.18,g.connect(_).connect(u.gain),u.gain.setTargetAtTime(t,l.currentTime,2),h.start(0,Math.random()*c.duration),g.start(),this.layers.push({url:e,source:h,volume:u,filter:d,modulation:g})}prepareLoop(e){const t=Math.min(Math.floor(e.sampleRate*.7),Math.floor(e.length/4)),i=this.ctx.createBuffer(e.numberOfChannels,e.length-t,e.sampleRate);let s=0,r=0;for(let c=0;c<i.numberOfChannels;c++){const l=e.getChannelData(c),h=i.getChannelData(c);for(let d=0;d<h.length;d++){const u=d/t*Math.PI/2;h[d]=d<t?l[e.length-t+d]*Math.cos(u)+l[d]*Math.sin(u):l[d],s+=h[d]*h[d],r=Math.max(r,Math.abs(h[d]))}}const o=Math.sqrt(s/(i.length*i.numberOfChannels)),a=Math.min(.18/Math.max(o,1e-4),.65/Math.max(r,1e-4));for(let c=0;c<i.numberOfChannels;c++){const l=i.getChannelData(c);for(let h=0;h<l.length;h++)l[h]*=a}return i}setAmbienceVolume(e){this.ambienceVolume=Math.min(1,Math.max(0,Number(e)||0)),this.ambience&&this.ambience.gain.setTargetAtTime(this.ambienceVolume,this.ctx.currentTime,.15)}setDoorOpen(e){const t=this.layers.find(i=>String(i.url).includes("indoor-rain"));t&&(t.volume.gain.setTargetAtTime(e?.15:.12,this.ctx.currentTime,.3),t.filter.frequency.setTargetAtTime(e?2100:1550,this.ctx.currentTime,.3))}toggle(){return this.muted=!this.muted,this.master&&this.master.gain.setTargetAtTime(this.muted?0:.5,this.ctx.currentTime,.15),!this.muted}tone(e,t=.13,i=.12,s=0){if(!this.ctx)return;const r=this.ctx,o=r.currentTime+s,a=r.createOscillator(),c=r.createGain();a.type="sine",a.frequency.value=e,c.gain.setValueAtTime(0,o),c.gain.linearRampToValueAtTime(i,o+.008),c.gain.exponentialRampToValueAtTime(.001,o+t),a.connect(c).connect(this.master),a.start(o),a.stop(o+t+.02)}bell(){this.tone(1318,.75,.05),this.tone(1760,.7,.025,.12)}scan(){this.tone(1174,.14,.15),this.tone(1568,.25,.1,.095)}paper(e=.09){if(!this.ctx)return;const t=this.ctx,i=t.createBuffer(1,t.sampleRate*.16,t.sampleRate),s=i.getChannelData(0);for(let a=0;a<s.length;a++)s[a]=(Math.random()*2-1)*(1-a/s.length)*e;const r=t.createBufferSource();r.buffer=i;const o=t.createBiquadFilter();o.type="bandpass",o.frequency.value=1350,r.connect(o).connect(this.master),r.start()}tap(){this.tone(175,.09,.025)}}const Tv={title:"夜航",englishTitle:["NIGHT","PASSAGE"],coverColor:"#35414a",art:"rain",personal:!0,content:["末班车驶过桥面，雨水沿着车窗缓缓落下。靠窗的旅人收好车票，看见河对岸还有一盏灯亮着。","小巷里的店铺关了门，屋檐替晚归的人留下一小块干燥的地方。他站在那里，等一阵雨过去。","港口的船早已停稳，水面把岸边的灯拉得很长。有人把围巾叠好，放在明天要带走的行李上。","回家的路并不远。经过最后一个路口时，他放慢了脚步，想起桌上留着半杯茶，和一本尚未读完的书。"]};class bv{times=["21:47","21:51","21:55","21:58","22:00"];readPages=new Set;readingEvents=[];page=0;dwell=0;get advances(){return this.readPages.size}get time(){return this.times[Math.min(this.advances,4)]}get ready(){return this.advances>=4}update(e,t){return e!==this.page&&(this.page=e,this.dwell=0),e<1||e>4||this.readPages.has(e)||(this.dwell+=t,this.dwell<2)?!1:(this.readPages.add(e),!0)}}const Av=[[-2.725,2.725,.4,2.22],[-3.26,-1.84,-2.84,-2.06],[-3.55,-3.15,-2.5,-1.95],[-2.02,-1.62,-2.5,-1.95],[-.76,-.34,-3.66,-3.24],[-3.7,-3.2,-3.8,-3.3],[3.23,3.73,-3.75,-3.25],...$l.map(n=>[n.position[0]-.88,n.position[0]+.88,n.position[2]-.24,n.position[2]+.3])];function xl(n,e){return n>-5.05+.21&&n<5.05-.21&&e>-4.05+.21&&e<3.8-.21&&!Av.some(([i,s,r,o])=>n>i-.21&&n<s+.21&&e>r-.21&&e<o+.21)}function wv(n,e,t,i,s,r=()=>!1){const o=Math.hypot(t,i);if(!o)return!1;const a=1.45*Math.min(s,.05)/o,c=(Math.cos(e)*i-Math.sin(e)*t)*a,l=(-Math.cos(e)*t-Math.sin(e)*i)*a,h=n.x,d=n.z;return xl(n.x+c,n.z)&&!r(n.x+c,n.z)&&(n.x+=c),xl(n.x,n.z+l)&&!r(n.x,n.z+l)&&(n.z+=l),n.x!==h||n.z!==d}function Rv(n,e,t){const i=new Map,s=[],r=new Ji({transparent:!0,opacity:0,depthWrite:!1});for(const o of t.slots){const a=e.get(o.shelfId),c=re(a,[.43,.75,.02],[o.localPosition[0],o.localPosition[1]+.08,.34],r);c.castShadow=c.receiveShadow=!1,c.userData.slotId=o.slotId,s.push(c)}for(const o of t.books.values()){const a=vr.find(l=>l.id===o.definitionId),c=Io(a);if(c.userData.shelvingBookId=o.instanceId,i.set(o.instanceId,c),o.location.type==="shelf"){const l=t.slots.find(h=>h.slotId===o.location.slotId);e.get(l.shelfId).add(c),c.position.fromArray(l.localPosition),c.rotation.set(...l.localRotation)}else n.add(c),c.position.fromArray(o.location.position),c.rotation.set(-Math.PI/2,0,.15*(i.size%3-1))}return{books:i,slotTargets:s}}const Cv=[{id:"elder",type:"elder",name:"老人",position:[-1.82,0,-2.15],yaw:-Math.PI/2,standAt:[-1.28,0,-2.15],route:[[-1.28,-1.5],[2.85,-1.5],[2.85,-3.55]],reminder:"您好，已经闭馆了。",lines:["啊……已经这么晚了。","不好意思，我这就走。"]},{id:"headphones",type:"headphones",name:"年轻读者",position:[-.55,0,-3.45],yaw:.25,standAt:[-.55,0,-2.95],route:[[1.6,-2.95],[2.85,-3.55]],reminder:"不好意思，图书馆已经闭馆了。",lines:["啊？已经关门了吗？","抱歉，我没注意时间。"]},{id:"child",type:"child",name:"小孩",position:[-4.2,0,-.05],yaw:Math.PI/2,standAt:[-4.2,0,-.05],route:[[-3.08,-.05],[-3.08,-.8],[2.85,-.8],[2.85,-3.55]],reminder:"已经闭馆了，该回家了。",lines:["我再看最后一页。","好吧。"]}];class Pv{active=!1;dialogueTarget=null;exitApproach=null;talkDistance=1.8;constructor(){this.visitors=structuredClone(Cv).map(e=>({...e,state:"LINGERING",hasBeenNoticed:!1,hasBeenAskedToLeave:!1,hasExited:!1,hasStood:!1,standProgress:0,routeIndex:0,atDoor:!1}))}getVisitor(e){return this.visitors.find(t=>t.id===e)}getLingeringVisitors(){return this.visitors.filter(e=>!e.hasExited)}canTalkTo(e,t){const i=this.getVisitor(e);return!!(this.active&&!this.dialogueTarget&&i?.state==="LINGERING"&&Math.hypot(i.position[0]-t.x,i.position[2]-t.z)<=this.talkDistance)}notice(e){const t=this.getVisitor(e);return!this.active||!t||t.state!=="LINGERING"||t.hasBeenNoticed?!1:(t.hasBeenNoticed=!0,t.type==="child"&&(t.hasStood=!0),!0)}startLeaveSequence(e,t){if(!this.canTalkTo(e,t))return!1;this.notice(e);const i=this.getVisitor(e);return i.hasBeenAskedToLeave=!0,i.state="DIALOGUE",this.dialogueTarget=e,!0}prepare(e){const t=this.getVisitor(e);return t?.state!=="DIALOGUE"?!1:(t.state="PREPARING_TO_LEAVE",t.hasStood=!0,!0)}leave(e){const t=this.getVisitor(e);return t?.state!=="PREPARING_TO_LEAVE"?!1:(t.state="LEAVING",this.dialogueTarget=null,!0)}markExited(e){const t=this.getVisitor(e);return t?.state!=="LEAVING"||!t.atDoor?!1:(t.hasExited=!0,t.state="EXITED",this.exitApproach===e&&(this.exitApproach=null),!0)}isCleared(){return this.active&&this.visitors.every(e=>e.hasExited)}blocksPlayer(e,t){return this.visitors.some(i=>!i.hasExited&&Math.hypot(i.position[0]-e,i.position[2]-t)<.44)}standPosition(e,t){const i=this.getVisitor(e),[s,,r]=i.standAt;return[i.standAt,[s,0,r-.9],[s,0,r+.9],[s+1,0,r],[s-1,0,r]].find(o=>{if(!xl(o[0],o[2]))return!1;const a=o[0]-i.position[0],c=o[2]-i.position[2],l=Math.max(0,Math.min(1,((t.x-i.position[0])*a+(t.z-i.position[2])*c)/(a*a+c*c||1)));return Math.hypot(i.position[0]+l*a-t.x,i.position[2]+l*c-t.z)>=.44})||[...i.position]}update(e,t){for(const i of this.visitors){if(i.hasStood&&(i.standProgress=Math.min(1,i.standProgress+e/.65)),i.state!=="LEAVING"||i.atDoor)continue;if(i.routeIndex>=i.route.length-2){if(this.exitApproach&&this.exitApproach!==i.id)continue;this.exitApproach=i.id}const[s,r]=i.route[i.routeIndex],o=s-i.position[0],a=r-i.position[2],c=Math.hypot(o,a),l=Math.min(c,e*(i.type==="elder"?.65:.85));if(c>.001){const h=i.position[0]+o/c*l,d=i.position[2]+a/c*l;if(Math.hypot(h-t.x,d-t.z)<.48||this.visitors.some(p=>p!==i&&!p.hasExited&&Math.hypot(h-p.position[0],d-p.position[2])<.5))continue;i.position[0]=h,i.position[2]=d;const u=Math.atan2(o,a);i.yaw+=Math.atan2(Math.sin(u-i.yaw),Math.cos(u-i.yaw))*Math.min(1,e*6)}c<=l+.001&&++i.routeIndex===i.route.length&&(i.atDoor=!0)}}}function Iv(n,e){const t=new Ut,i=new Map;t.visible=!1,n.add(t);const s=Be("#b9ad8e"),r=Be("#45534a"),o=Be("#403a2d"),a=re(t,[.42,.08,.42],[-.55,.43,-3.45],o);for(const h of[-.15,.15])for(const d of[-.15,.15])re(t,[.045,.42,.045],[-.55+h,.21,-3.45+d],o);re(t,[.035,1.5,.035],[-1,.75,-3.55],o),re(t,[.35,.045,.18],[-.89,1.5,-3.55],Be("#56624e")),re(t,[.29,.01,.14],[-.89,1.472,-3.55],Be("#c4b68c",{emissive:"#bda56e",emissiveIntensity:.4}));const c=new li("#e9c99e",.8,2.3,2);c.position.set(-.78,1.4,-3.45),t.add(c);for(const h of e.visitors){const d={...Wi.A,id:h.id,name:h.name,hairStyle:"short",hairColor:h.type==="elder"?"#8f8b7d":"#302b25",glasses:h.type==="elder",shirtColor:h.type==="child"?"#675640":h.type==="elder"?"#575348":"#3b5058",scarfColor:"#746957"},u=Po(d);u.userData.clearingVisitorId=h.id,h.type==="child"&&u.scale.setScalar(.6);const p=new Ut;u.add(p);for(const f of[-1,1])re(p,[.17,.18,.43],[f*.14,.47,.15],o),re(p,[.16,.4,.18],[f*.14,.25,.29],o);const g=new Ut;re(g,[.36,.045,.26],[0,0,0],r),re(g,[.33,.018,.24],[0,.03,0],s);const _=re(g,[.17,.008,.24],[-.085,.045,0],r);u.userData.body.add(g),g.position.set(0,.94,.36),g.rotation.x=-.15;let m;if(h.type==="headphones"){const f=new Ut;u.userData.head.add(f);const T=Be("#242b2b");re(f,[.59,.055,.08],[0,.32,0],T);for(const y of[-1,1]){re(f,[.055,.25,.08],[y*.28,.2,0],T);const v=re(f,[.09,.19,.16],[y*.29,.025,0],T);y===1&&(m=v)}}t.add(u),i.set(h.id,{model:u,seatedLegs:p,readingBook:g,leaf:_,earCup:m})}function l(h,d){for(const u of e.visitors){const{model:p,seatedLegs:g,readingBook:_,leaf:m,earCup:f}=i.get(u.id);p.visible=!u.hasExited,p.position.fromArray(u.position),p.rotation.y=u.yaw;const T=u.standProgress,y=T<1,v=p.userData;for(const w of p.children)w!==v.body&&w!==g&&(w.visible=!y);g.visible=y,v.body.position.y=-(u.type==="child"?.65:.43)*(1-T)+Math.sin(d*1.15)*.003,v.body.rotation.x=(u.type==="elder"&&u.state==="LINGERING"?.13:.02)*(1-T);const R=u.state==="LINGERING"?.3:0;v.head.rotation.x+=(R-v.head.rotation.x)*Math.min(1,h*2),v.arms.forEach((w,P)=>{w.rotation.x=u.state==="LEAVING"?Math.sin(d*5+P*Math.PI)*.14:-.65*(1-T)}),v.legs.forEach((w,P)=>w.rotation.x=u.state==="LEAVING"&&!u.atDoor?Math.sin(d*5+P*Math.PI)*.22:0),m.rotation.z=Math.PI*(1-T);const A=u.type==="elder"?1.26:.94;_.position.set(.3*T,A+(.86-A)*T,.36-.32*T),_.rotation.x=-.15+1.5*T,f&&(f.position.y=.025-.2*T),v.eyes.forEach(w=>w.scale.y=u.type==="elder"&&u.state==="LINGERING"?.15:1)}}return l(1,0),{group:t,models:i,stool:a,update:l}}const Dv={id:"night_request_01",visitorId:"chen_yao",requiredTags:["astronomy","beginner","illustrated"],acceptableBookIds:["book_night_sky_guide_001"]},ms={profile:{...Wi.A,id:"chen_yao",name:"陈遥",hairStyle:"short",hairColor:"#242a2c",shirtColor:"#27373e",scarfColor:"#465150"},outsidePath:[[6,0,-5.6],[2.85,0,-5.6],[2.85,0,-4.9]],lines:[["陈遥","不好意思。"],["陈遥","我知道已经关门了。"],["陈遥","我想明天来借一本书……能不能先请你帮我推荐一本？"],["你","你想找什么样的？"],["陈遥","是给我妹妹看的。"],["陈遥","她最近总问我天上的星星为什么会亮。"],["陈遥","最好图多一点，别太难。"],["你","等一下，我找找看。"]]};class Lv{phase=null;visitorState="ABSENT";result=null;asked=!1;constructor(e,t=Dv){this.shelves=e,this.request=structuredClone(t)}startWaiting(){return this.phase?!1:(this.phase="NIGHT_RECOMMENDATION_WAIT",!0)}spawnVisitor(){return this.phase!=="NIGHT_RECOMMENDATION_WAIT"||this.visitorState!=="ABSENT"?!1:(this.visitorState="APPROACHING",!0)}startRequest(){return!["WAITING","SEARCHING"].includes(this.visitorState)||this.result||this.asked&&this.shelves.heldBookId?!1:(this.visitorState="TALKING",this.phase="NIGHT_RECOMMENDATION_REQUEST",this.asked=!0,!0)}finishRequest(){this.visitorState="SEARCHING",this.phase="NIGHT_RECOMMENDATION_SEARCH"}getCurrentRequest(){return structuredClone(this.request)}canPresent(e){return this.visitorState==="SEARCHING"&&!this.result&&!!e&&this.shelves.heldBookId===e&&this.shelves.books.has(e)}submitRecommendation(e){return this.canPresent(e)?(this.result={requestId:this.request.id,visitorId:this.request.visitorId,recommendedBookId:e,acceptableBookIds:[...this.request.acceptableBookIds],isCorrect:this.request.acceptableBookIds.includes(e),presentedAt:new Date().toISOString(),visitorExitedAt:null},this.visitorState="RESPONDING",this.phase="NIGHT_RECOMMENDATION_PRESENT",!0):!1}markVisitorExited(){return!this.result||this.result.visitorExitedAt?!1:(this.visitorState="EXITED",this.result.visitorExitedAt=new Date().toISOString(),!0)}get recommendedBookReshelved(){return!!this.result&&this.shelves.getBookLocation(this.result.recommendedBookId)?.type==="shelf"}getResult(){return structuredClone(this.result)}isComplete(){return!!this.result?.visitorExitedAt&&this.recommendedBookReshelved&&!this.shelves.heldBookId}}function Nv(n,e,{camera:t,audio:i,tween:s,wait:r,dialogue:o,focus:a,lockInput:c,run:l}){const h=Po(ms.profile);h.visible=!1,h.userData.recommendationVisitor=!0,h.position.fromArray(ms.outsidePath[0]),n.add(h);const d=new li("#9eb8d1",1.4,3,2);d.position.set(2.65,2.5,-4.65),d.visible=!1,n.add(d);let u=0,p=!1,g=0,_=0;const m=P=>P*P*(3-2*P);async function f(P,M){p=!0;const S=h.position.clone();await s(M,D=>h.position.lerpVectors(S,new C(...P),D)),p=!1}async function T(){h.visible=d.visible=!0,h.rotation.y=-Math.PI/2,await f(ms.outsidePath[1],4),await s(.5,M=>h.rotation.y=-Math.PI/2*(1-m(M))),await f(ms.outsidePath[2],1),e.visitorState="KNOCKING";const P=h.userData.arms[1];await s(.35,M=>P.rotation.x=-1.2*m(M));for(let M=0;M<3;M++){_++;const S=.016/(1+t.position.distanceTo(h.position)*.2);i.tone(165,.11,S),await s(.16,D=>P.rotation.x=-1.2-Math.sin(D*Math.PI)*.13),await r(.33)}await s(.35,M=>P.rotation.x=-1.2*(1-m(M))),e.visitorState="WAITING"}async function y(P){for(const[M,S]of P){const D=Math.max(1.5,S.length*.105);o(S,M,D),await r(D+.4)}}async function v(){e.visitorState="LEAVING",await s(.6,P=>h.userData.head.rotation.x=Math.sin(P*Math.PI)*.12),await f([2.85,0,-5.6],1),await s(.6,P=>h.rotation.y=Math.PI/2*m(P)),await f(ms.outsidePath[0],4),h.visible=d.visible=!1,e.markVisitorExited()}function R(){return Math.hypot(t.position.x-h.position.x,t.position.z-h.position.z)>1.9?!1:e.visitorState==="WAITING"&&!e.asked?!0:e.shelves.heldBookId?e.canPresent(e.shelves.heldBookId):["WAITING","SEARCHING"].includes(e.visitorState)&&!e.result}async function A(){if(!R())return;const P=e.asked,M=P?e.shelves.heldBookId:null;(M?e.submitRecommendation(M):e.startRequest())&&(c(!0),await a("DIALOGUE_FOCUS",h),M?(i.paper(.014),await r(.6),await y(e.result.isCorrect?[["陈遥","这个好像正合适。"],["陈遥","谢谢。那我明天再来借。"]]:[["陈遥","嗯……好像不是我想找的那种。"],["陈遥","不过还是谢谢你。"]])):await y(P?[["陈遥","就是给小孩子看的星空书，图多一点、别太难。"]]:ms.lines),await a("FREE_LOOK",h),c(!1),M?l(v()):e.finishRequest())}function w(P,M){e.phase&&(e.visitorState==="ABSENT"&&(u+=P,u>=5.5&&e.spawnVisitor()&&l(T())),e.isComplete()&&(e.phase="NIGHT_RECOMMENDATION_COMPLETE"),h.visible&&(h.userData.body.position.y=Math.sin(M*1.15)*.003,h.userData.legs.forEach((S,D)=>S.rotation.x=p?Math.sin(M*6+D*Math.PI)*.2:0),["WAITING","SEARCHING"].includes(e.visitorState)?(h.userData.head.rotation.y=Math.sin(M*.25)*.26,h.userData.body.rotation.z=Math.sin(M*.7)*.006):h.userData.head.rotation.y*=Math.exp(-P*5),p&&M>g&&(i.tone(105,.09,.005/(1+t.position.distanceTo(h.position))),g=M+.65)))}return{actor:h,update:w,interact:A,canInteract:R,get label(){return e.asked&&e.shelves.heldBookId?"推荐这本":"询问"},get diagnostics(){return{visitorState:e.visitorState,position:h.position.toArray(),visible:h.visible,quiet:u,knocks:_,request:e.getCurrentRequest(),result:e.getResult(),recommendedBookReshelved:e.recommendedBookReshelved}}}}const q=n=>document.getElementById(n),jn=new URLSearchParams(location.search),Ms=jn.get("dev")==="1",Lu=jn.get("touch")==="1";let mn=Lu||matchMedia("(pointer: coarse)").matches;mn&&document.body.classList.add("touch-mode");const Ss=jn.get("mode");let ct="DAY_COUNTER",bi=!1,gt=null;const tn=new bv,st=new Sv,at=new Pv,_s=new Lv(st);let xh=0,Ma=0,Mh=0,Ml=!1,_o=null,Nt=null;const Pn=new Set,_n={forward:0,sideways:0};let Tn=null;window.addEventListener("pointerdown",n=>{Lu||!["mouse","touch"].includes(n.pointerType)||(mn=n.pointerType==="touch",document.body.classList.toggle("touch-mode",mn),mn||(_n.forward=_n.sideways=0,Tn=null))},!0);const zt=()=>ct.startsWith("NIGHT_"),cn=()=>ct==="DAY_COUNTER"?He.phase:Ft==="OBJECT_INSPECT"?"BOOK_INSPECT":bi||st.heldBookId?"BOOK_HELD":"ITEMS_PLACED";let Ai=jn.get("case")==="B"?"B":"A";const Gs=jn.get("mode")==="memory",$n=Gs?new Mv:null;let bn=$n?.begin(),Ot=jn.get("mode")==="return";const er=Yl[Ai],Nu={lin_zhou:{...Wi.A,id:"lin_zhou",name:"林舟",hairStyle:"short",shirtColor:"#34463c"},zhou_ning:{...Wi.B,id:"zhou_ning",name:"周宁"}};let qn=Gs?Nu[bn.step.customerId]:Wi[Ai],Lt=null,vo=null,Jl=null,Sl=0;const Uu=6,Ou=250;let Hn=!1,Ae=!1,Cn=null,Gn=!1,Kt=!1,gn=0,Ft="COUNTER_FREE",xr="free",dn=0,Fu=0,Bu=0,Xi=0;const Vs=[.42,-.22,-1.05],Er=[-.12,-.35,.08];let or=0,ar=0,ro=0,oo=0,ys=0,Es=0,Ht=0,Gt=0,Wt=0,Sh=performance.now(),yh,yl,El=!1,Eh,Th,bh;const Ah=new Set;let wh=37,Rh=53,Ch=0;const In=new ce(0,0),Sa=lt.degToRad(5),ya=lt.degToRad(3),it=new Ev,ao=[],ft=new Rf;ft.background=new $e("#152e45");ft.fog=new Ol("#142a38",.022);const de=new fn(67,innerWidth/innerHeight,.035,48);de.position.set(0,1.67,2.64);de.rotation.order="YXZ";de.rotation.x=-.12;ft.add(de);let Vt;try{Vt=new ov({antialias:!0,powerPreference:"high-performance"})}catch(n){throw q("fatal").hidden=!1,q("fatal").textContent="无法创建 3D 画面。请使用支持 WebGL 2 的桌面浏览器，并开启硬件加速。",n}Vt.setSize(innerWidth,innerHeight);Vt.setPixelRatio(Math.min(devicePixelRatio,mn?1:1.5));Vt.shadowMap.enabled=!0;Vt.shadowMap.type=Lh;Vt.toneMapping=bl;Vt.toneMappingExposure=.88;q("game").appendChild(Vt.domElement);const Zi=new uv(Vt);Zi.addPass(new wu(ft,de));const qi=new wu(ft,de);qi.clear=!1;qi.clearDepth=!0;const Uv=qi.render.bind(qi);qi.render=(...n)=>{const e=de.layers.mask,t=ft.background;de.layers.set(1),ft.background=null;try{Uv(...n)}finally{de.layers.mask=e,ft.background=t}};Zi.addPass(qi);Zi.addPass(new Ns(new ce(innerWidth,innerHeight),.15,.45,1.25));Zi.addPass(new fv);const ku=new Au({uniforms:{tDiffuse:{value:null},uTime:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform sampler2D tDiffuse;uniform float uTime;varying vec2 vUv;void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;float n=fract(sin(dot(vUv*vec2(1300.,800.)+mod(uTime,10.),vec2(12.9898,78.233)))*43758.5453);c+=(n-.5)*.018;gl_FragColor=vec4(c,1.);}"});Zi.addPass(ku);const St=yv(ft,{returnMode:Ot}),xo=Rv(ft,St.sortingShelves,st),As=Iv(ft,at),Ei=Nv(ft,_s,{camera:de,audio:it,tween:ut,wait:dt,dialogue:It,run:Bt,focus:(n,e)=>nn(n,n==="FREE_LOOK"?.45:.55,"door",e),lockInput:n=>{Ae=n,Pn.clear(),_n.forward=_n.sideways=0}}),Do=Io(Tv),Zl=[.7,1.105,1.69];Do.position.fromArray(Zl);Do.rotation.set(-Math.PI/2,0,-.09);ft.add(Do);const Jn=new li("#fff0d0",1.3,1.65,2);Jn.position.set(-.25,.22,.12);de.add(Jn);ft.traverse(n=>{n.isLight&&n.layers.enable(1)});let et=Po(qn);ft.add(et);et.position.set(2.9,0,-4.85);et.visible=!1;let Mr=Gs?qn:Wi.A,Ct=Ru(Mr),Ce=Io(Gs?{...bn.definition,damageProfile:bn.book.visualDamages()}:Ot?er.book:void 0);const Ea=new Map([[qn.id,{person:et,card:Ct}]]),Ta=new Map(Gs?[[bn.book.instanceId,Ce]]:[]);ft.add(Ct,Ce);Ct.visible=!1;Ce.visible=!1;const Lo=new C(.35,1.073,1.2),Ws=new C(-.36,1.098,1.08),Yi=new Dn(-Math.PI/2,0,-.065);Ct.position.copy(Lo);Ct.rotation.copy(Yi);Ce.position.copy(Ws);Ce.rotation.copy(Yi);let He=bn?.transaction||new Iu({type:Ot?"return":"borrow",customerId:Ot?er.customerId:Wi[Ai].id,bookId:Ot?er.book.id:"midnight-atlas",damageProfile:Ot?er.book.damageProfile:[],existingDamageBeforeLoan:Ot?er.existingDamageBeforeLoan:[],actualIdentityMatch:Ai==="A"});const Ov=new Ji({transparent:!0,opacity:0,depthWrite:!1}),wi={};function ji(n,e,t){const i=re(ft,e,t,Ov);return i.castShadow=!1,i.receiveShadow=!1,i.userData.name=n,wi[n]=i,i}ji("card",[.44,.08,.29],Lo.toArray());ji("book",[.48,.12,.62],Ws.toArray());ji("bookSlot",[.5,.1,.63],Ws.toArray());ji("scanner",[.64,.57,.68],[1.22,1.32,.84]);ji("reject",[.7,.18,.66],[-1.14,1.14,.87]);wi.return=wi.reject;Ot&&(wi.return.userData.name="return");ji("customer",[.75,1.25,.45],[0,1.2,-.03]);ji("personalBook",[.47,.12,.61],Zl);const Fv={photo:[47/1024,169/640,260/1024,315/640],name:[350/1024,185/640,610/1024,130/640],date:[350/1024,355/640,610/1024,90/640]},Ki=new Wl;Ki.layers.enable(1);function Bv(n){et.removeFromParent(),Ct.removeFromParent(),Ce.removeFromParent(),et.visible=Ct.visible=Ce.visible=!1,bn=n,He=n.transaction,Ot=He.type==="return",qn=Nu[n.step.customerId],Mr=qn,Ea.has(qn.id)||Ea.set(qn.id,{person:Po(qn),card:Ru(Mr)}),{person:et,card:Ct}=Ea.get(qn.id),Ta.has(n.book.instanceId)||Ta.set(n.book.instanceId,Io(n.definition)),Ce=Ta.get(n.book.instanceId),Pu(Ce,n.book.visualDamages()),ft.add(et,Ct,Ce),et.visible=Ct.visible=Ce.visible=!1,et.position.set(2.9,0,-4.85),et.rotation.set(0,0,0),Ct.position.copy(Lo),Ct.rotation.copy(Yi),Ce.position.copy(Ws),Ce.rotation.copy(Yi),Ce.userData.cover.rotation.y=0,gn=0,Gn=Kt=El=!1,Lt=vo=Jl=Cn=null,Ht=Gt=0,Jn.position.set(-.25,.22,.12),wi.reject.userData.name=Ot?"return":"reject",St.setReturnMode(Ot),St.setScanner(!1),q("complete").querySelector("p").textContent=Ot?"本次还书处理已记录":"本次借阅处理已记录",Zt()}function ut(n,e){return new Promise(t=>{ao.push({elapsed:0,duration:n,update:e,resolve:t})})}function dt(n){return ut(n,()=>{})}const yt=n=>n*n*(3-2*n);async function nn(n,e=.7,t="face",i=et){if(zt()){if(n==="DIALOGUE_FOCUS"){const l=i.userData.head.getWorldPosition(new C);l.y-=.08;const h=l.x-de.position.x,d=de.position.z-l.z,u=Math.atan2(-h,d);Nt={origin:de.position.clone(),startYaw:de.rotation.y,startPitch:de.rotation.x,yaw:de.rotation.y+Math.atan2(Math.sin(u-de.rotation.y),Math.cos(u-de.rotation.y)),pitch:Math.atan2(l.y-de.position.y,Math.hypot(h,d)),dx:0,dy:0,dolly:t==="door"?.01:.015},Ft="DIALOGUE_FOCUS"}const a=dn,c=n==="DIALOGUE_FOCUS"?1:0;await ut(e,l=>dn=lt.lerp(a,c,yt(l))),Ft=n,n==="FREE_LOOK"&&(de.position.copy(Nt.origin),de.rotation.set(Nt.startPitch,Nt.startYaw,0),Nt=null);return}if(Ft=n,xr=n==="DIALOGUE_FOCUS"?t:"free",n==="DIALOGUE_FOCUS"){const a=et.userData.head.getWorldPosition(new C);a.y-=.12,t==="damage"&&(a.x+=.07);const c=a.x-de.position.x,l=de.position.z-a.z;Fu=Math.atan2(-c,l),Bu=Math.atan2(a.y-1.67,Math.hypot(c,l))+.12}const s=dn,r=Xi,o=n==="DIALOGUE_FOCUS"?1:0;await ut(e,a=>{dn=lt.lerp(s,o,yt(a)),Xi=r*(1-yt(a))})}async function ba(n,e,t=.5){xr=n;const i=Xi,s=lt.degToRad(e);await ut(t,r=>Xi=lt.lerp(i,s,yt(r)))}async function Jt(n,e,t,i,s=.32){n.traverse(l=>l.layers.set(e===de?1:0)),e.attach(n);const r=n.position.clone(),o=n.quaternion.clone(),a=new C(...t),c=new Os().setFromEuler(new Dn(...i));await ut(s,l=>{const h=yt(l);n.position.lerpVectors(r,a,h),n.quaternion.slerpQuaternions(o,c,h)})}function It(n,e="访客",t=3.5){clearTimeout(yl),q("dialogue").hidden=!1,q("dialogue").querySelector("p").textContent=n,q("dialogue").querySelector(".speaker").textContent=e,yl=setTimeout(()=>q("dialogue").hidden=!0,t*1e3)}function Qn(n,e=2500){clearTimeout(yh),q("toast").textContent=n,q("toast").hidden=!1,yh=setTimeout(()=>q("toast").hidden=!0,e)}function kv(n){q("task-title").textContent=n,clearTimeout(Eh),q("task").hidden=!1,Eh=setTimeout(()=>q("task").hidden=!0,2800)}function Zt(){const n=cn();n!==bh&&(clearTimeout(Th),q("inspect-help").hidden=!0,bh=n,["BOOK_HELD","BOOK_INSPECT","ID_HELD"].includes(n)&&!Ah.has(n)&&(Ah.add(n),q("inspect-help").hidden=!1,q("inspect-help").innerHTML=n==="BOOK_INSPECT"?"<span>左键拖动</span>旋转 <span>滚轮</span>翻页 <span>R</span>回到手中":n==="BOOK_HELD"?"<span>R</span>仔细查看 <span>左键</span>点击目标使用":"点击证件信息提问 · 点击顾客递还",Th=setTimeout(()=>q("inspect-help").hidden=!0,5e3)))}async function Sr(n,e){const t=et.userData.arms[n],i=t.rotation.x;await ut(.28,s=>{t.rotation.x=lt.lerp(i,-1,yt(s))}),await e(),await ut(.28,s=>{t.rotation.x=-1*(1-yt(s))})}async function Mo(n,e){const t=et.position.clone(),i=new C(...n),s=i.x-t.x,r=i.z-t.z,o=Math.atan2(s,r),a=et.rotation.y;await ut(.25,c=>et.rotation.y=lt.lerp(a,o,yt(c))),await ut(e,c=>{et.position.lerpVectors(t,i,c);const l=Math.sin(c*e*8);et.userData.body.position.y=Math.abs(l)*.015,et.userData.legs[0].rotation.x=l*.28,et.userData.legs[1].rotation.x=-l*.28,et.userData.arms[0].rotation.x=-l*.14,et.userData.arms[1].rotation.x=l*.14}),et.userData.legs.forEach(c=>c.rotation.x=0),et.userData.arms.forEach(c=>c.rotation.x=0)}async function zv(){if(!Hn){if(Hn=!0,Ae=!0,await it.start().catch(()=>Qn("当前浏览器未启用声音，画面与操作仍可继续。")),q("welcome").hidden=!0,document.body.classList.add("mobile-playing"),q("settings").hidden=!0,q("opening").hidden=!1,setTimeout(()=>q("opening").hidden=!0,2e3),q("reticle").hidden=!1,await dt(1.3),Ss==="closing")return Wu();if(["shelving","clearing","recommendation"].includes(Ss)){if(St.setClosed(),[1,2,3,4].forEach(n=>tn.readPages.add(n)),document.querySelector(".clock").textContent="22:00",de.position.set(3.15,1.85,2.65),qu(),["clearing","recommendation"].includes(Ss)){for(const n of st.taskBookIds){const e=st.slots.find(i=>!i.occupantBookId&&i.category===st.books.get(n).category);st.pickup(n),st.place(n,e.shelfId,e.slotId);const t=xo.books.get(n);St.sortingShelves.get(e.shelfId).add(t),t.position.fromArray(e.localPosition),t.rotation.set(...e.localRotation)}if(Yu(),Ss==="recommendation"){for(const n of at.visitors)n.state="EXITED",n.hasExited=!0;Ml=!0,q("toast").hidden=!0,ct="NIGHT_CLEARING_COMPLETE"}}return}await zu()}}async function zu(){Ae=!0,He.dispatch("START"),it.bell(),et.visible=!0,await ut(.5,e=>St.door.rotation.y=-yt(e)*.95),await Mo([1.8,0,-3.3],.75),await ut(.5,e=>St.door.rotation.y=-(1-yt(e))*.95),await Mo([0,0,-.03],2.35);const n=et.rotation.y;await ut(.6,e=>{et.rotation.y=n*(1-yt(e))}),He.dispatch("ARRIVE"),kv(Ot?"处理还书":"处理借阅"),await nn("DIALOGUE_FOCUS"),It(bn?.step.greeting||(Ot?"你好，我来还书。":"晚上好，我想借这本书。")),await dt(1.4),await Promise.all([ba("book",-2),Sr(0,async()=>{Ce.visible=!0,Ce.position.set(-.25,1.18,.34),Ce.rotation.set(-.9,0,.1),await Jt(Ce,ft,Ws.toArray(),Yi.toArray().slice(0,3),.38),it.tap()})]),Ot||(await ba("face",0,.35),It("这是我的借阅证。"),await Promise.all([ba("card",-2),Sr(1,async()=>{Ct.visible=!0,Ct.position.set(.25,1.2,.4),Ct.rotation.set(-1,0,-.1),await Jt(Ct,ft,Lo.toArray(),Yi.toArray().slice(0,3),.3),it.paper()})])),await dt(.7),await nn("COUNTER_FREE",.5),He.dispatch("PLACE_ITEMS"),Ae=!1,Zt()}async function Hv(n){const e=n==="card"?"PICK_ID":"PICK_BOOK";He.dispatch(e)&&(Ae=!0,Cn=null,q("dialogue").hidden=!0,Zt(),it.paper(),n==="card"?await Jt(Ct,de,[.33,-.12,-.78],[0,-.04,0]):(Ht=Gt=0,await Jt(Ce,de,Vs,Er)),Ae=!1)}async function So(){Gn=!1,gn=0;const n=Ce.userData.cover.rotation.y;await ut(.3,e=>Ce.userData.cover.rotation.y=n*(1-yt(e)))}async function Hu(){(ct==="DAY_COUNTER"?!He.dispatch("EXIT_INSPECT"):cn()!=="BOOK_INSPECT")||(Ae=!0,Kt=!1,Lt=null,Ht=Gt=0,Zt(),Gn&&await So(),await Jt(Ce,de,Vs,Er),Ft=zt()?"FREE_LOOK":"COUNTER_FREE",Ae=!1,Zt(),ct==="CLOSING_READING"&&tn.ready&&await Wv())}async function Gv(){He.dispatch("PUT_BOOK")&&(Ae=!0,it.tap(),await Jt(Ce,ft,Ws.toArray(),Yi.toArray().slice(0,3)),Ae=!1,Zt())}async function Gu(){(ct==="DAY_COUNTER"?!He.dispatch("INSPECT_AGAIN"):cn()!=="BOOK_HELD")||(Ae=!0,Ft="OBJECT_INSPECT",Zt(),it.paper(),await Jt(Ce,de,[.12,ct==="CLOSING_READING"?-.13:-.025,-1.35],[.02,-.07,.015]),Ae=!1)}async function jl(n){if(cn()!=="BOOK_INSPECT"||Ae)return;const e=lt.clamp(gn+n,0,Ce.userData.pages.length);e!==gn&&(Ae=!0,Ht=Gt=0,Kt=!1,Lt=null,it.paper(),e===0?await So():(Ce.userData.page.material.map=Ce.userData.pages[e-1],Gn||await ut(.38,t=>Ce.userData.cover.rotation.y=-yt(t)*Math.PI*.94),Gn=!0,gn=e,await dt(.16)),Ae=!1)}async function Ph(n){He.dispatch(n==="borrow"?"BORROW":"REJECT")&&(Ae=!0,Zt(),await Jt(Ce,ft,n==="borrow"?[1.22,1.205,.87]:[-1.14,1.155,.87],[-Math.PI/2,0,n==="borrow"?0:.04],.36),it.tap(),n==="borrow"?(St.scanLine.visible=!0,await dt(.33),it.scan(),St.setScanner(!0),St.scanLine.visible=!1,xr="scan-pause",await dt(.25)):(xr="reject-pause",It("这样啊……"),await dt(.3)),He.dispatch("RESPOND"),await nn("DIALOGUE_FOCUS",n==="borrow"?.7:.8),n==="borrow"&&(It("谢谢。"),await dt(.65),It("晚上辛苦了。")),n==="reject"&&(await ut(.25,e=>et.userData.head.rotation.y=-e*.24),await dt(.5),await ut(.25,e=>et.userData.head.rotation.y=-(1-e)*.24),It("那算了。")),await dt(1.1),He.cardReturned||await Sr(1,async()=>{await Jt(Ct,ft,[.25,1.2,.2],[-.7,0,0],.3),Ct.visible=!1}),n==="borrow"&&await Sr(0,async()=>{await Jt(Ce,ft,[-.25,1.1,.22],[0,0,.06],.4),et.attach(Ce)}),await Vu())}async function Vu(){if(await nn("COUNTER_FREE",.5),He.dispatch("LEAVE"),Zt(),await Mo([1.85,0,-3.1],2.3),await ut(.5,n=>St.door.rotation.y=-yt(n)*.95),it.bell(),await Mo([2.9,0,-4.95],1),et.visible=!1,He.decision==="borrow"&&(Ce.visible=!1),await ut(.6,n=>St.door.rotation.y=-(1-yt(n))*.95),He.dispatch("COMPLETE"),Kv(),Zt(),q("dialogue").hidden=!0,$n){$n.complete(He);const n=Kl[$n.index];if(n){await dt(n.delayBefore);const e=$n.begin();if(e){Bv(e),await zu();return}}}Ae=!1,q("complete").hidden=!1,setTimeout(()=>q("complete").hidden=!0,3e3),q("dialogue").hidden=!0,Bt(Wu())}async function Wu(){await dt(2.5),ct="CLOSING_READING",Ae=!1,document.querySelector(".clock").textContent=tn.time,q("complete").hidden=!0,Qn("离闭馆还有一会儿。")}async function Vv(){bi||ct!=="CLOSING_READING"||(Ce=Do,bi=!0,Gn=!1,gn=0,Ht=Gt=0,Ae=!0,it.paper(),await Jt(Ce,de,Vs,Er),Ae=!1,Zt())}async function Xu(){Ae=!0,await Jt(Ce,ft,Zl,[-Math.PI/2,0,-.09],.45),it.paper(.018),bi=!1,Ae=!1,Zt()}async function Wv(){await Xu(),Ae=!0,It("好了，下班了。","你",2),await dt(2.7),ct="CLOSING_TRANSITION",St.setClosed(0),it.tone(185,.07,.015),await ut(.6,e=>St.setClosed(yt(e)));const n=de.position.clone();it.paper(.016),await ut(1,e=>{de.position.y=n.y+.18*yt(e),de.position.z=n.z+.08*yt(e)}),qu()}function qu(){ct="NIGHT_FREE_ROAM",Ft="FREE_LOOK",dn=0,Jn.position.set(0,.18,-.35),Jn.intensity=1.5,Jn.distance=2.4,Pn.clear(),Ae=!1,As.group.visible=!0,Qn("WASD 行走 · 点击画面环顾 · R 查看手中的书")}async function Ql(){if(Ae||!gt)return;const n=gt;if(n.recommendation)return Ei.interact();if(n.visitorId)return Xv(n.visitorId);if(st.heldBookId){if(n.slot&&!n.slot.occupantBookId){const e=st.heldBookId,t=n.slot;Ae=!0;const i=St.sortingShelves.get(t.shelfId),s=[...t.localPosition];s[2]+=.2,await Jt(Ce,i,s,t.localRotation,.22),await Jt(Ce,i,t.localPosition,t.localRotation,.16),st.place(e,t.shelfId,t.slotId),it.paper(.018),it.tone(110,.07,.006),Ae=!1,st.isTaskComplete()&&!at.active&&(ct="NIGHT_SHELVING_COMPLETE",Qn("书都收起来了。",1400)),Zt()}}else{const e=n.bookId||n.slot?.occupantBookId;if(!st.pickup(e))return;ct==="NIGHT_SHELVING_COMPLETE"&&(q("toast").hidden=!0),Ce=xo.books.get(e),Ae=!0,at.active||(ct="NIGHT_SHELVING"),gn=0,Gn=!1,Ht=Gt=0,it.paper(.022),await Jt(Ce,de,Vs,Er),Ae=!1,Zt()}}function No(){if(gt=null,q("interact").hidden=!0,q("reticle").hidden=Ft==="OBJECT_INSPECT"||!q("settings").hidden,q("reticle").style.left="50%",q("reticle").style.top="50%",Vt.domElement.style.cursor="default",!Ae&&Ft==="FREE_LOOK"&&q("settings").hidden){Ki.setFromCamera(new ce,de);const e=new C(de.position.x,.8,de.position.z),t=Ki.intersectObjects(ft.children.filter(i=>i!==de&&!Object.values(wi).includes(i)),!0);for(const i of t){let s=i.object,r=!0,o,a,c;for(;s;)r&&=s.visible,o||=s.userData.shelvingBookId,a||=s.userData.clearingVisitorId,c||=s.userData.recommendationVisitor,s=s.parent;if(!r)continue;if(c){Ei.canInteract()&&(gt={recommendation:!0});break}if(a){at.canTalkTo(a,de.position)&&!st.heldBookId&&(gt={visitorId:a,distance:Math.hypot(de.position.x-at.getVisitor(a).position[0],de.position.z-at.getVisitor(a).position[2])});break}if(i.object.material?.transparent&&!i.object.userData.slotId)continue;if(i.distance>2.4||e.distanceTo(i.point)>1.5)break;const l=st.slots.find(h=>h.slotId===i.object.userData.slotId);if((l||o)&&(gt={slot:l,bookId:o,distance:e.distanceTo(i.point)}),gt||!i.object.material?.transparent)break}}const n=gt&&(gt.recommendation||gt.visitorId||(st.heldBookId?gt.slot&&!gt.slot.occupantBookId:gt.bookId||gt.slot?.occupantBookId));q("reticle").classList.toggle("hot",!!n),(gt?.visitorId||gt?.recommendation)&&(q("interact").hidden=!1,q("interact").querySelector("span").textContent=gt.recommendation?Ei.label:"提醒闭馆",q("interact").style.left=`${innerWidth/2+19}px`,q("interact").style.top=`${innerHeight/2+19}px`)}function Yu(){at.active=!0,ct="NIGHT_CLEARING",Qn("还有人没走吗……",1500)}async function Xv(n){if(!at.startLeaveSequence(n,de.position))return;const e=at.getVisitor(n),t=As.models.get(n).model;Ae=!0,Pn.clear(),_n.forward=_n.sideways=0,e.type==="child"&&await dt(.65);const i=e.yaw,s=Math.atan2(de.position.x-e.position[0],de.position.z-e.position[2]),r=Math.atan2(Math.sin(s-i),Math.cos(s-i));await Promise.all([nn("DIALOGUE_FOCUS",.55,"face",t),ut(.65,c=>e.yaw=i+r*yt(c))]),It(e.reminder,"你",1.8),await dt(e.type==="headphones"?2.4:1.9),It(e.lines[0],e.name,1.8),await dt(2.3),It(e.lines[1],e.name,1.8),await dt(1.9),at.prepare(n),it.paper(.014),it.tone(100,.18,.007);const o=[...e.position],a=at.standPosition(n,de.position);await ut(.8,c=>{e.position=o.map((l,h)=>lt.lerp(l,a[h],yt(c)))}),await nn("FREE_LOOK",.45),at.leave(n),Ae=!1}async function qv(n){_o=n.id,n.exiting=!0,it.tone(210,.09,.007),await ut(.5,i=>St.door.rotation.y=-.95*yt(i)),it.setDoorOpen(!0);const e=[...n.position],t=n.yaw;await ut(.25,i=>n.yaw=lt.lerp(t,Math.PI,yt(i))),await ut(2.4,i=>n.position[2]=lt.lerp(e[2],-5.5,i)),await ut(.6,i=>St.door.rotation.y=-.95*(1-yt(i))),it.setDoorOpen(!1),_o=null,await ut(.3,i=>n.yaw=lt.lerp(Math.PI,Math.PI/2,yt(i))),await ut(3.7,i=>n.position[0]=lt.lerp(2.85,6,i)),at.markExited(n.id)}function Ih(n,e){Ft==="DIALOGUE_FOCUS"&&Nt?(Nt.dx=lt.clamp(Nt.dx-n*.0012,-.035,.035),Nt.dy=lt.clamp(Nt.dy-e*.0012,-.026,.026)):!Ae&&Ft==="FREE_LOOK"&&(de.rotation.y-=n*.002,de.rotation.x=lt.clamp(de.rotation.x-e*.002,-1.35,1.25))}function ec(){return ct!=="DAY_COUNTER"||!Ot||He.phase!=="BOOK_INSPECT"||Ae||!q("settings").hidden?null:(Ki.setFromCamera(In,de),Cu(Ce,Ki,gn))}async function Yv(n){if(!n||!He.dispatch("SELECT_DAMAGE",n.damageId))return;vo={rotation:Ce.rotation.toArray().slice(0,3),quaternion:Ce.quaternion.toArray(),page:gn},Ae=!0,Lt=null,Kt=!1,Ht=Gt=0,Zt(),it.paper(.018),Jl=n;const e=Ce.position.clone(),t=Gn?new C(.78,-.32,-1.55):new C(.55,-.22,-1.35),i=new C(0,0,1).transformDirection(n.surface.matrixWorld),s=de.getWorldPosition(new C).sub(Ku(n)).normalize();Sl=Math.max(0,i.dot(s)*.85);const r=t.clone();t.copy(e);for(let l=1;l<=16&&(Ce.position.lerpVectors(e,r,l/16),!!$u(n,Sl));l++)t.copy(Ce.position);Ce.position.copy(e);const o=Jn.position.clone(),a=new C(t.x,.18,-.55);await ut(.4,l=>{Ce.position.lerpVectors(e,t,yt(l)),Jn.position.lerpVectors(o,a,yt(l))}),He.dispatch("BEGIN_DIALOGUE"),await nn("DIALOGUE_FOCUS",.7,"damage"),It({scratch:"这里的封面为什么有一道划痕？",stain:"这一页上的污渍是怎么回事？",tear:"这一页怎么破了？",corner_fold:"这里为什么折了？"}[n.type],"你"),await dt(1.6);const c=bn?.step.damageReplies?.[n.damageId];It(c?.[0]||"啊……这个。"),await dt(.5),It(c?.[1]||"可能是不小心碰到哪里了。"),await dt(1.5),c||It("抱歉。"),await dt(.5),He.dispatch("SHOW_DECISION"),Ae=!1,q("damage-choice").hidden=!1,q("damage-choice").querySelector("button").focus()}function Ku(n){Ce.updateWorldMatrix(!0,!0);const e=n.surface.geometry.parameters;return n.surface.localToWorld(new C((n.uv.x-.5)*e.width,(n.uv.y-.5)*e.height,0))}function $u(n,e=0){if(!n)return!1;const t=Ku(n),i=de.getWorldPosition(new C),s=new C(0,0,1).transformDirection(n.surface.matrixWorld).dot(i.clone().sub(t).normalize()),r=new Wl(i,t.clone().sub(i).normalize());r.layers.enable(1);const o=t.clone().project(de);return s>=e&&Math.abs(o.x)<.94&&Math.abs(o.y)<.9&&Cu(Ce,r,gn)?.damageId===n.damageId}async function Ju(n){if(!(Ae||!q("settings").hidden||!He.dispatch(n.toUpperCase()))){if(Ae=!0,q("damage-choice").hidden=!0,Zt(),n==="charge"?(It("这属于借阅期间造成的损坏，需要赔偿。","你"),await dt(1.8),It("好吧，我明白了。"),it.paper(.035)):n==="waive"&&It("谢谢。"),n!=="accept"){await dt(1.1),Gn&&await So(),await Jt(Ce,de,Vs,Er),Jn.position.set(-.25,.22,.12),await nn("COUNTER_FREE",.5),Ae=!1,Zt();return}Gn&&await So(),await Jt(Ce,ft,[-1.14,1.155,.87],[-Math.PI/2,0,.04],.4),Jn.position.set(-.25,.22,.12),it.tap(),He.dispatch("RESPOND"),n==="accept"&&(await nn("DIALOGUE_FOCUS"),It("谢谢。")),await dt(1.1),await Vu()}}function Kv(){if(!(El||!He.record)){El=!0;try{const n=JSON.parse(localStorage.getItem("nightfall-transactions")||"[]"),e=Array.isArray(n)?n:[];e.push(He.record),localStorage.setItem("nightfall-transactions",JSON.stringify(e.slice(-100)))}catch{Qn("本次处理已记录于当前会话；浏览器未允许本地保存。")}Ms&&console.info("Nightfall transaction",He.record)}}function $v(){return Ae||!Hn||!q("settings").hidden||!q("card-choice").hidden?[]:ct==="CLOSING_READING"?Ft==="OBJECT_INSPECT"?[]:["personalBook"]:ct!=="DAY_COUNTER"?[]:He.phase==="ITEMS_PLACED"?Ot||He.cardReturned?["book"]:["card","book"]:He.phase==="ID_HELD"?["customer"]:He.phase==="BOOK_HELD"?Ot?["return","bookSlot"]:["scanner","reject","bookSlot"]:[]}const Jv={card:"拿起",book:"拿起",customer:"递还证件",bookSlot:"放下",scanner:"放到借书机 · 借出",reject:"放入暂存盘 · 拒借",return:"放入归还托盘 · 收书",personalBook:"拿起 / 放下"};function Uo(){if(zt())return No();const n=$v();Ki.setFromCamera(In,de),Cn=Ki.intersectObjects(n.map(s=>wi[s]),!1)[0]?.object.userData.name||null;const t=(In.x+1)*innerWidth/2,i=(1-In.y)*innerHeight/2;q("reticle").style.left=`${t}px`,q("reticle").style.top=`${i}px`,q("reticle").classList.toggle("hot",!!Cn),q("reticle").hidden=!Hn||!q("settings").hidden||cn().endsWith("INSPECT")||ct==="DAY_COUNTER"&&He.phase==="TRANSACTION_COMPLETE",q("interact").hidden=!Cn,Cn&&(q("interact").querySelector("span").textContent=Cn==="personalBook"?bi?"放下":"拿起":Jv[Cn],q("interact").style.left=`${Math.min(t+19,innerWidth-265)}px`,q("interact").style.top=`${Math.min(i+19,innerHeight-90)}px`),Vt.domElement.style.cursor=cn()==="BOOK_INSPECT"?Kt?"grabbing":ec()?"pointer":"grab":Cn?"pointer":"default"}async function tc(){if(Ae||!Cn)return;const n=Cn;n==="personalBook"?await(bi?Xu():Vv()):n==="card"||n==="book"?await Hv(n):n==="customer"?(clearTimeout(yl),q("dialogue").hidden=!0,q("card-choice").hidden=!1,q("return-card").focus()):n==="bookSlot"?await Gv():n==="scanner"?await Ph("borrow"):n==="reject"?await Ph("reject"):n==="return"&&await Ju("accept")}function Bt(n){n.catch(e=>{console.error(e),Ae=!1,Ft=He.phase==="BOOK_INSPECT"?"OBJECT_INSPECT":"COUNTER_FREE",dn=Xi=0,Qn("操作遇到问题，请刷新后重试。")})}function Zv(){if(q("card-fields").hidden=He.phase!=="ID_HELD"||Ae||!q("settings").hidden||!q("card-choice").hidden,!q("card-fields").hidden)for(const n of q("card-fields").children){const[e,t,i,s]=Fv[n.dataset.field],r=[[e,t],[e+i,t],[e,t+s],[e+i,t+s]].map(([c,l])=>{const h=Ct.localToWorld(new C((c-.5)*.396,(.5-l)*.248,.005)).project(de);return[(h.x+1)*innerWidth/2,(1-h.y)*innerHeight/2]}),o=r.map(c=>c[0]),a=r.map(c=>c[1]);Object.assign(n.style,{left:`${Math.min(...o)}px`,top:`${Math.min(...a)}px`,width:`${Math.max(...o)-Math.min(...o)}px`,height:`${Math.max(...a)-Math.min(...a)}px`})}}async function jv(n){if(Ae||He.phase!=="ID_HELD"||!q("card-choice").hidden||!q("settings").hidden)return;const e={photo:["这张照片和你现在看起来不太一样。",Ai==="A"?"是我，照片是前几年拍的。那时头发短一些。":"借阅证上……是以前的照片。我最近换了发型。"],name:["请问，证件上的姓名是你的名字吗？",`上面写的是${Mr.name}。`],date:["这张借阅证的有效期，你确认过吗？","上个月续过期了，有效期印在证件上。"]};e[n]&&(Ae=!0,await nn("DIALOGUE_FOCUS"),It(e[n][0],"你"),await dt(1.6),It(e[n][1]),await dt(1.4),await nn("COUNTER_FREE",.5),Ae=!1)}async function Qv(){Ae||!He.dispatch("RETURN_ID")||(Ae=!0,q("card-choice").hidden=!0,Zt(),it.paper(),await Promise.all([nn("DIALOGUE_FOCUS"),Sr(1,async()=>{await Jt(Ct,ft,[.25,1.2,.2],[-.7,0,0],.4),Ct.visible=!1})]),It("谢谢。"),await dt(.65),await nn("COUNTER_FREE",.5),Ae=!1)}q("card-fields").querySelectorAll("button").forEach(n=>n.addEventListener("click",()=>Bt(jv(n.dataset.field))));q("return-card").addEventListener("click",()=>Bt(Qv()));q("keep-card").addEventListener("click",()=>Bt((async()=>{Ae||(Ae=!0,q("card-choice").hidden=!0,await nn("DIALOGUE_FOCUS"),It("嗯，你问吧。"),await dt(.8),await nn("COUNTER_FREE",.5),Ae=!1)})()));q("settings-open").addEventListener("click",()=>q("settings").hidden=!1);q("settings-close").addEventListener("click",()=>{q("settings").hidden=!0,zt()&&Zu()});q("start").addEventListener("click",()=>Bt(zv()));q("sound").addEventListener("click",()=>{q("sound").textContent=`声音 · ${it.toggle()?"开":"关"}`});q("ambience-volume").addEventListener("input",n=>it.setAmbienceVolume(n.target.value/100));q("again").addEventListener("click",()=>location.reload());q("case-label").textContent=Ot?"练习还书访客":"练习借书访客";q("case-label").parentElement.hidden=Gs||["closing","shelving","clearing","recommendation"].includes(Ss);q("complete").querySelector("p").textContent=Ot?"本次还书处理已记录":"本次借阅处理已记录";document.querySelectorAll("[data-mode]").forEach(n=>{n.setAttribute("aria-pressed",String(n.dataset.mode===(Ss||"borrow"))),n.addEventListener("click",()=>{jn.set("mode",n.dataset.mode),location.search=jn.toString()})});document.querySelectorAll("[data-decision]").forEach(n=>n.addEventListener("click",()=>Bt(Ju(n.dataset.decision))));document.querySelectorAll("[data-case]").forEach(n=>{n.setAttribute("aria-pressed",String(n.dataset.case===Ai)),n.addEventListener("click",()=>{n.dataset.case!==Ai&&(jn.set("case",n.dataset.case),location.search=jn.toString())})});window.addEventListener("keydown",n=>{if(n.ctrlKey||n.metaKey||n.altKey)return;const e=n.code==="KeyR"?"r":n.key.toLowerCase();if(zt()&&q("settings").hidden&&document.pointerLockElement===Vt.domElement&&["KeyW","KeyA","KeyS","KeyD"].includes(n.code)&&(Pn.add(n.code),n.preventDefault()),!q("settings").hidden){e==="escape"&&(q("settings").hidden=!0,n.preventDefault());return}!Hn||Ae||n.repeat||["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)||(["r","escape"].includes(e)&&n.preventDefault(),e==="escape"&&(Pn.clear(),document.pointerLockElement&&document.exitPointerLock(),q("card-choice").hidden?q("settings").hidden=!1:q("card-choice").hidden=!0,Kt=!1,Lt=null,Ht=Gt=0),e==="r"&&q("card-choice").hidden&&Bt(cn()==="BOOK_INSPECT"?Hu():Gu()))});window.addEventListener("keyup",n=>Pn.delete(n.code));function Zu(){mn||Vt.domElement.requestPointerLock()?.catch(()=>Qn("点击画面继续环顾。"))}document.addEventListener("pointerlockchange",()=>{Pn.clear(),Lt=null,Kt=!1,Ht=Gt=0,!mn&&zt()&&!document.pointerLockElement&&Hn&&(q("settings").hidden=!1)});window.addEventListener("pointermove",n=>{if(!(!q("settings").hidden||!q("card-choice").hidden)){if(mn&&n.pointerType==="touch"&&Tn?.pointerId===n.pointerId){const e=n.clientX-ys,t=n.clientY-Es;Math.hypot(n.clientX-Tn.x,n.clientY-Tn.y)>6&&(Tn.moved=!0),cn()==="BOOK_INSPECT"&&!Ae?(Kt=Tn.moved,Gt=e*.005,Ht=t*.005,Ce.rotateY(Gt),Ce.rotateX(Ht)):zt()?Ih(e,t):(or=lt.clamp(or-e*.002,-Sa,Sa),ar=lt.clamp(ar-t*.002,-ya,ya)),ys=n.clientX,Es=n.clientY;return}if(zt()){if(document.pointerLockElement!==Vt.domElement)return;Ft==="OBJECT_INSPECT"&&!Ae?Lt&&(n.movementX||n.movementY)&&(Kt=!0,Gt=n.movementX*.005,Ht=n.movementY*.005,Ce.rotateY(Gt),Ce.rotateX(Ht)):Ih(n.movementX,n.movementY);return}if(In.set(n.clientX/innerWidth*2-1,1-n.clientY/innerHeight*2),cn()==="BOOK_INSPECT"){if(Lt&&!Ae){const e=Math.hypot(n.clientX-Lt.x,n.clientY-Lt.y);(e>Uu||e>0&&performance.now()-Lt.time>Ou)&&(Kt=!0)}Kt&&!Ae&&(Gt=(n.clientX-ys)*.005,Ht=(n.clientY-Es)*.005,Ce.rotateY(Gt),Ce.rotateX(Ht))}else or=-In.x*Sa,ar=In.y*ya;ys=n.clientX,Es=n.clientY}});Vt.domElement.addEventListener("pointerdown",n=>{if(!(!q("settings").hidden||!q("card-choice").hidden)&&n.button===0){if(mn&&n.pointerType==="touch"&&(Tn={x:n.clientX,y:n.clientY,moved:!1,pointerId:n.pointerId},ys=n.clientX,Es=n.clientY),!mn&&zt()&&document.pointerLockElement!==Vt.domElement){Zu();return}if(cn()==="BOOK_INSPECT"&&!Ae)In.set(n.clientX/innerWidth*2-1,1-n.clientY/innerHeight*2),Lt={x:n.clientX,y:n.clientY,time:performance.now(),pointerId:n.pointerId,damageId:ec()?.damageId},Kt=!1,Ht=Gt=0,ys=n.clientX,Es=n.clientY,zt()||Vt.domElement.setPointerCapture(n.pointerId);else{if(mn&&n.pointerType==="touch")return;if(zt()){No(),Bt(Ql());return}In.set(n.clientX/innerWidth*2-1,1-n.clientY/innerHeight*2),Uo(),Bt(tc())}}});Vt.domElement.addEventListener("wheel",n=>{cn()!=="BOOK_INSPECT"||!q("settings").hidden||(n.preventDefault(),n.deltaY&&Bt(jl(Math.sign(n.deltaY))))},{passive:!1});window.addEventListener("pointerup",n=>{if(mn&&n.pointerType==="touch"&&Tn?.pointerId===n.pointerId&&(!Tn.moved&&cn()!=="BOOK_INSPECT"&&(In.set(n.clientX/innerWidth*2-1,1-n.clientY/innerHeight*2),zt()?(No(),Bt(Ql())):(Uo(),Bt(tc()))),Tn=null),Lt?.pointerId===n.pointerId){if(!Kt&&performance.now()-Lt.time<=Ou&&Math.hypot(n.clientX-Lt.x,n.clientY-Lt.y)<=Uu){In.set(n.clientX/innerWidth*2-1,1-n.clientY/innerHeight*2);const e=ec();e&&e.damageId===Lt.damageId&&Bt(Yv(e))}Lt=null,Kt=!1}});window.addEventListener("pointercancel",n=>{Tn?.pointerId===n.pointerId&&(Tn=null),Lt?.pointerId===n.pointerId&&(Lt=null,Kt=!1,Ht=Gt=0)});window.addEventListener("blur",()=>{Pn.clear(),_n.forward=_n.sideways=0,Tn=null,Lt=null,Kt=!1,Ht=Gt=0});function ex(){!Hn||Ae||!q("settings").hidden||(In.set(0,0),zt()?(No(),Bt(Ql())):(Uo(),Bt(tc())))}function tx(){!Hn||Ae||!q("settings").hidden||Bt(cn()==="BOOK_INSPECT"?Hu():Gu())}q("mobile-action").addEventListener("click",ex);q("mobile-inspect").addEventListener("click",tx);q("mobile-prev").addEventListener("click",()=>Bt(jl(-1)));q("mobile-next").addEventListener("click",()=>Bt(jl(1)));let yo=null;function ju(n){const e=q("mobile-stick").getBoundingClientRect(),t=n.clientX-(e.left+e.width/2),i=n.clientY-(e.top+e.height/2),s=Math.hypot(t,i),r=42,o=s>r?r/s:1;_n.sideways=t*o/r,_n.forward=-i*o/r,q("mobile-stick").firstElementChild.style.transform=`translate(${t*o}px, ${i*o}px)`}q("mobile-stick").addEventListener("pointerdown",n=>{yo=n.pointerId;try{q("mobile-stick").setPointerCapture(n.pointerId)}catch{}ju(n)});q("mobile-stick").addEventListener("pointermove",n=>{n.pointerId===yo&&ju(n)});function Qu(n){n.pointerId===yo&&(yo=null,_n.forward=_n.sideways=0,q("mobile-stick").firstElementChild.style.transform="translate(0, 0)")}q("mobile-stick").addEventListener("pointerup",Qu);q("mobile-stick").addEventListener("pointercancel",Qu);window.addEventListener("resize",()=>{de.aspect=innerWidth/innerHeight,de.updateProjectionMatrix(),Vt.setSize(innerWidth,innerHeight),Zi.setSize(innerWidth,innerHeight)});Ms&&(q("dev-panel").hidden=!1,window.library={get night(){return structuredClone({gamePhase:ct,cameraMode:Ft,position:de.position.toArray(),yaw:de.rotation.y,pitch:de.rotation.x,pointerLocked:!!document.pointerLockElement,heldBookId:st.heldBookId,heldCategory:st.books.get(st.heldBookId)?.category,hoveredSlot:gt?.slot,hoveredBook:gt?.bookId,distance:gt?.distance,pending:st.getPendingBooks(),result:st.result,slots:st.slots,books:[...st.books.values()],time:tn.time,page:tn.page,dwell:tn.dwell,advances:tn.advances,closingReady:tn.ready,closed:St.closed,personalHeld:bi,recommendation:{...Ei.diagnostics,hovered:!!gt?.recommendation,heldTags:vr.find(n=>n.id===st.books.get(st.heldBookId)?.definitionId)?.recommendationTags||[]},clearing:{active:at.active,visitors:at.visitors,remaining:at.getLingeringVisitors().length,dialogueTarget:at.dialogueTarget,talkDistance:at.talkDistance,hoveredVisitor:gt?.visitorId,door:{lockedFromOutside:St.lockedFromOutside,canExitFromInside:St.canExitFromInside,angle:St.door.rotation.y,visitorId:_o}}})},nightPosition(n){if(n==="chen_yao")return Ei.actor.userData.head.getWorldPosition(new C).toArray();const e=As.models.get(n)?.model;return e?e.userData.head.getWorldPosition(new C).toArray():(xo.books.get(n)||xo.slotTargets.find(i=>i.userData.slotId===n))?.getWorldPosition(new C).toArray()},get state(){return He.state},get busy(){return Ae},get checklist(){return He.checklist},get record(){return He.record},get bookOpen(){return Gn},get bookPage(){return gn},get cardReturned(){return He.cardReturned},get bookRotation(){return Ce.rotation.toArray().slice(0,3)},get bookQuaternion(){return Ce.quaternion.toArray()},get damageDecisions(){return structuredClone(He.damageDecisions)},get memory(){return $n?structuredClone({index:$n.index,completed:$n.records.length,book:bn.book,books:[...$n.books.values()],profile:qn,photoProfile:Mr,meshId:Ce.uuid,personId:et.uuid}):null},get selectedDamageVisible(){return $u(Jl,Sl)},get inspectionSnapshot(){return vo&&structuredClone(vo)},projectDamage(n){const e=Ce.userData.damageHotspots.find(c=>c.damageId===n&&c.page===gn&&c.enabled);if(!e)return null;const[t,i,s,r]=e.uvRect,o=e.surface.geometry.parameters,a=e.surface.localToWorld(new C((t+s/2-.5)*o.width,(.5-i-r/2)*o.height,0)).project(de);return{x:(a.x+1)*innerWidth/2,y:(1-a.y)*innerHeight/2}},project(n){const e=wi[n];if(!e)return null;const t=e.getWorldPosition(new C).project(de);return{x:(t.x+1)*innerWidth/2,y:(1-t.y)*innerHeight/2}},get cameraAngles(){return{yaw:ro,pitch:oo}},get cameraShot(){return{mode:Ft,beat:xr,blend:dn,handPitch:Xi,fov:de.fov,z:de.position.z}},get drawCalls(){return Vt.info.render.calls}});function ed(n){requestAnimationFrame(ed);const e=Math.min((n-Sh)/1e3,.05);Sh=n,Wt+=e;for(let i=ao.length-1;i>=0;i--){const s=ao[i];s.elapsed+=e;const r=Math.min(s.elapsed/s.duration,1);s.update(r),r>=1&&(ao.splice(i,1),s.resolve())}if(St.update(e,Wt),Hn&&Wt>wh&&(Ae||it.paper(.009),wh=Wt+37),Hn&&Wt>Rh&&(Ae||it.tone(134,.12,.008),Rh=Wt+53),!zt()&&ct!=="CLOSING_TRANSITION"&&Ft!=="OBJECT_INSPECT"){const i=1-Math.exp(-8*e),s=Fu+lt.clamp(or*.6,-lt.degToRad(2.5),lt.degToRad(2.5)),r=Bu+Xi+lt.clamp(ar*.6,-lt.degToRad(2),lt.degToRad(2));ro=lt.lerp(ro,lt.lerp(or,s,dn),i),oo=lt.lerp(oo,lt.lerp(ar,r,dn),i),de.rotation.y=ro,de.rotation.x=-.12+oo}zt()&&Nt&&(de.rotation.y=lt.lerp(Nt.startYaw,Nt.yaw+Nt.dx,dn),de.rotation.x=lt.lerp(Nt.startPitch,Nt.pitch+Nt.dy,dn),de.position.copy(Nt.origin).addScaledVector(new C(-Math.sin(Nt.yaw),0,-Math.cos(Nt.yaw)),Nt.dolly*dn));const t=67-(zt()?3.5:5)*dn;if(de.fov!==t&&(de.fov=t,de.updateProjectionMatrix()),!zt()&&ct!=="CLOSING_TRANSITION"&&(de.position.z=2.64-.03*dn,de.position.y=1.67+Math.sin(Wt*.8)*9e-4),ct==="CLOSING_READING"){const i=Ft==="OBJECT_INSPECT"&&!Ae&&q("settings").hidden&&!Kt?gn:0;if(tn.update(i,e)){const s=document.querySelector(".clock");s.textContent=tn.time,s.animate([{opacity:.3},{opacity:1}],{duration:600}),St.setReadingProgress(tn.advances/4),tn.ready&&Qn("已经到闭馆时间了。")}}if(zt()){if(ct==="NIGHT_FREE_ROAM"&&st.getPendingBooks().length&&(ct="NIGHT_SHELVING"),!Ae&&Ft==="FREE_LOOK"&&q("settings").hidden&&(mn||document.pointerLockElement)){const i=Number(Pn.has("KeyW"))-Number(Pn.has("KeyS"))+_n.forward,s=Number(Pn.has("KeyD"))-Number(Pn.has("KeyA"))+_n.sideways,r=wv(de.position,de.rotation.y,i,s,e,(o,a)=>at.blocksPlayer(o,a));r&&Wt>Ch&&(it.tone(115,.09,.014),it.paper(.006),Ch=Wt+.57),r&&st.heldBookId&&(Ce.position.y=Vs[1]+Math.sin(Wt*6)*.003)}if(at.active||(Ma=ct==="NIGHT_SHELVING_COMPLETE"&&q("settings").hidden?Ma+e:0,Ma>=2&&Yu()),q("settings").hidden){at.update(e,de.position);for(const s of at.visitors)if(s.state==="LEAVING"&&Wt>(s.nextStep||0)){const r=Math.hypot(s.position[0]-de.position.x,s.position[2]-de.position.z);it.tone(105,.09,.008/(1+r)),s.nextStep=Wt+(s.type==="elder"?.75:.6)}const i=at.getVisitor("child");if(at.active&&!i.hasBeenNoticed&&Ft==="FREE_LOOK"&&Math.hypot(de.position.x-i.position[0],de.position.z-i.position[2])<1.5){const s=As.models.get("child").model.userData.head.getWorldPosition(new C);new Wl(de.position,s.clone().sub(de.position).normalize(),0,de.position.distanceTo(s)).intersectObjects(ft.children.filter(a=>a!==de&&a!==As.group),!0).some(a=>a.object.visible&&!a.object.material?.transparent)||at.notice("child")}if(!_o){const s=at.visitors.find(r=>r.atDoor&&!r.exiting&&!r.hasExited);s&&Bt(qv(s))}at.isCleared()&&!Ml&&(Mh+=e,Mh>=1.5&&(Ml=!0,Qn("馆里已经没人了。",1500),Bt(dt(1.5).then(()=>ct="NIGHT_CLEARING_COMPLETE"))))}As.update(e,Wt),q("settings").hidden&&(ct==="NIGHT_CLEARING_COMPLETE"&&!_s.phase&&(xh+=e,xh>=1&&_s.startWaiting()),Ei.update(e,Wt),_s.phase&&(ct=_s.phase))}if(et.visible){et.userData.body.position.y=Math.sin(Wt*1.3)*.004,Ae||(et.userData.head.rotation.z=Math.sin(Wt*.55)*.018,et.userData.body.rotation.z=Math.sin(Wt*.64)*.006);const i=Wt%4.8,s=i>4.6&&i<4.75?.1:1;et.userData.eyes.forEach(r=>r.scale.y=s)}if(cn()==="BOOK_INSPECT"&&!Kt&&!Lt&&!Ae&&q("settings").hidden){Ce.rotateY(Gt*e*45),Ce.rotateX(Ht*e*45);const i=Math.exp(-8*e);Gt*=i,Ht*=i}if(ku.uniforms.uTime.value=Wt,mn&&Hn){const i=cn()==="BOOK_INSPECT",s=bi||st.heldBookId||He.phase==="BOOK_HELD"||He.phase==="RETURN_BOOK_HELD";q("mobile-stick").hidden=q("mobile-action").hidden=!zt(),q("mobile-inspect").disabled=!s&&!i,q("mobile-prev").hidden=q("mobile-next").hidden=!i,q("mobile-action").textContent=gt?.recommendation?Ei.label:gt?.visitorId?"提醒闭馆":gt||Cn?"使用":"观察"}if(ft.updateMatrixWorld(),Zv(),Uo(),qi.enabled=Ce.parent===de||Ct.parent===de,Zi.render(),Ms&&(q("dev-panel").textContent=`DEV · ${He.type} ${Ai}
${He.state}
`+(Ot?`损坏: ${He.record?.actualDamagePresent??"—"}
责任: ${He.record?.actualDamageResponsibility??"—"}`:`身份: ${He.actualIdentityMatch?"MATCH":"MISMATCH"}
勾选: ${He.checklist??"NULL"}`)+`
操作: ${He.decision??"—"}
正确: ${He.record?.isCorrect??"—"}`+($n?`
交易: ${Kl.indexOf(bn.step)+1} / 3
副本: ${bn.book.instanceId}
持有人: ${bn.book.holderCustomerId??"—"}
损坏: ${bn.book.damages.map(i=>i.id+":"+i.createdAt).join(", ")}
决定: ${JSON.stringify(He.damageDecisions)}`:"")),Ms&&ct!=="DAY_COUNTER"&&(q("dev-panel").textContent=`${ct} / ${Ft}
${tn.time} · page ${gn} · dwell ${tn.dwell.toFixed(1)} · advances ${tn.advances} · ready ${tn.ready}
held ${st.heldBookId||"—"} / ${st.books.get(st.heldBookId)?.category||"—"}
slot ${gt?.slot?.slotId||"—"} · occupied ${gt?.slot?.occupantBookId||"—"}
pending ${st.getPendingBooks().length} · correct ${st.getFinalLayout().filter(i=>i.isCorrect).length} · wrong ${st.getFinalLayout().filter(i=>!i.isCorrect).length}
position ${de.position.toArray().map(i=>i.toFixed(2)).join(", ")} · reach ${gt?.distance?.toFixed(2)||"—"}`),Ms&&zt()&&(q("dev-panel").textContent+=`
Remaining Visitors ${at.getLingeringVisitors().length} · target ${at.dialogueTarget||"—"} · talk ${at.talkDistance}m
${at.visitors.map(i=>`${i.id}: ${i.state} · asked ${i.hasBeenAskedToLeave} · exited ${i.hasExited}`).join(`
`)}
Door outside locked ${St.lockedFromOutside} · inside exit ${St.canExitFromInside} · angle ${St.door.rotation.y.toFixed(2)}`),Ms&&_s.phase){const i=Ei.diagnostics;q("dev-panel").textContent+=`
Visitor ${i.visitorState} · knocks ${i.knocks}
Request ${i.request.id}
Required ${i.request.requiredTags.join(", ")}
Acceptable ${i.request.acceptableBookIds.join(", ")}
Held tags ${window.library.night.recommendation.heldTags.join(", ")}
Submitted ${i.result?.recommendedBookId||"—"} · Is Correct ${i.result?.isCorrect??"—"}
Visitor Exited ${!!i.result?.visitorExitedAt} · Recommended Book Reshelved ${i.recommendedBookReshelved}`}}requestAnimationFrame(ed);

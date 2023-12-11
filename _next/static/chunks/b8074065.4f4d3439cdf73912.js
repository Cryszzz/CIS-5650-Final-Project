"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{6416:function(t,n,e){let r,a,o;e.d(n,{R3:function(){return c},_E:function(){return s}}),Float32Array,Float32Array;let i=new Map([[Float32Array,()=>new Float32Array(12)],[Float64Array,()=>new Float64Array(12)],[Array,()=>Array(12).fill(0)]]);i.get(Float32Array);let u=Float32Array;function create$3(t,n,e){let r=new u(3);return void 0!==t&&(r[0]=t,void 0!==n&&(r[1]=n,void 0!==e&&(r[2]=e))),r}function subtract$2(t,n,e){return(e=e||new u(3))[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function mulScalar$2(t,n,e){return(e=e||new u(3))[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}function inverse$3(t,n){return(n=n||new u(3))[0]=1/t[0],n[1]=1/t[1],n[2]=1/t[2],n}function cross(t,n,e){e=e||new u(3);let r=t[2]*n[0]-t[0]*n[2],a=t[0]*n[1]-t[1]*n[0];return e[0]=t[1]*n[2]-t[2]*n[1],e[1]=r,e[2]=a,e}function dot$2(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function length$2(t){let n=t[0],e=t[1],r=t[2];return Math.sqrt(n*n+e*e+r*r)}function lengthSq$2(t){let n=t[0],e=t[1],r=t[2];return n*n+e*e+r*r}function distance$1(t,n){let e=t[0]-n[0],r=t[1]-n[1],a=t[2]-n[2];return Math.sqrt(e*e+r*r+a*a)}function distanceSq$1(t,n){let e=t[0]-n[0],r=t[1]-n[1],a=t[2]-n[2];return e*e+r*r+a*a}function normalize$2(t,n){n=n||new u(3);let e=t[0],r=t[1],a=t[2],o=Math.sqrt(e*e+r*r+a*a);return o>1e-5?(n[0]=e/o,n[1]=r/o,n[2]=a/o):(n[0]=0,n[1]=0,n[2]=0),n}function copy$3(t,n){return(n=n||new u(3))[0]=t[0],n[1]=t[1],n[2]=t[2],n}function multiply$3(t,n,e){return(e=e||new u(3))[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e}function divide$1(t,n,e){return(e=e||new u(3))[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e}var c=Object.freeze({__proto__:null,create:create$3,setDefaultType:function(t){let n=u;return u=t,n},fromValues:create$3,set:function(t,n,e,r){return(r=r||new u(3))[0]=t,r[1]=n,r[2]=e,r},ceil:function(t,n){return(n=n||new u(3))[0]=Math.ceil(t[0]),n[1]=Math.ceil(t[1]),n[2]=Math.ceil(t[2]),n},floor:function(t,n){return(n=n||new u(3))[0]=Math.floor(t[0]),n[1]=Math.floor(t[1]),n[2]=Math.floor(t[2]),n},round:function(t,n){return(n=n||new u(3))[0]=Math.round(t[0]),n[1]=Math.round(t[1]),n[2]=Math.round(t[2]),n},clamp:function(t,n=0,e=1,r){return(r=r||new u(3))[0]=Math.min(e,Math.max(n,t[0])),r[1]=Math.min(e,Math.max(n,t[1])),r[2]=Math.min(e,Math.max(n,t[2])),r},add:function(t,n,e){return(e=e||new u(3))[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e},addScaled:function(t,n,e,r){return(r=r||new u(3))[0]=t[0]+n[0]*e,r[1]=t[1]+n[1]*e,r[2]=t[2]+n[2]*e,r},angle:function(t,n){let e=t[0],r=t[1],a=t[2],o=t[0],i=t[1],u=t[2],c=Math.sqrt(e*e+r*r+a*a)*Math.sqrt(o*o+i*i+u*u),l=c&&dot$2(t,n)/c;return Math.acos(l)},subtract:subtract$2,sub:subtract$2,equalsApproximately:function(t,n){return 1e-6>Math.abs(t[0]-n[0])&&1e-6>Math.abs(t[1]-n[1])&&1e-6>Math.abs(t[2]-n[2])},equals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]},lerp:function(t,n,e,r){return(r=r||new u(3))[0]=t[0]+e*(n[0]-t[0]),r[1]=t[1]+e*(n[1]-t[1]),r[2]=t[2]+e*(n[2]-t[2]),r},lerpV:function(t,n,e,r){return(r=r||new u(3))[0]=t[0]+e[0]*(n[0]-t[0]),r[1]=t[1]+e[1]*(n[1]-t[1]),r[2]=t[2]+e[2]*(n[2]-t[2]),r},max:function(t,n,e){return(e=e||new u(3))[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e},min:function(t,n,e){return(e=e||new u(3))[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e},mulScalar:mulScalar$2,scale:mulScalar$2,divScalar:function(t,n,e){return(e=e||new u(3))[0]=t[0]/n,e[1]=t[1]/n,e[2]=t[2]/n,e},inverse:inverse$3,invert:inverse$3,cross:cross,dot:dot$2,length:length$2,len:length$2,lengthSq:lengthSq$2,lenSq:lengthSq$2,distance:distance$1,dist:distance$1,distanceSq:distanceSq$1,distSq:distanceSq$1,normalize:normalize$2,negate:function(t,n){return(n=n||new u(3))[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n},copy:copy$3,clone:copy$3,multiply:multiply$3,mul:multiply$3,divide:divide$1,div:divide$1,random:function(t=1,n){n=n||new u(3);let e=2*Math.random()*Math.PI,r=2*Math.random()-1,a=Math.sqrt(1-r*r)*t;return n[0]=Math.cos(e)*a,n[1]=Math.sin(e)*a,n[2]=r*t,n},zero:function(t){return(t=t||new u(3))[0]=0,t[1]=0,t[2]=0,t},transformMat4:function(t,n,e){e=e||new u(3);let r=t[0],a=t[1],o=t[2],i=n[3]*r+n[7]*a+n[11]*o+n[15]||1;return e[0]=(n[0]*r+n[4]*a+n[8]*o+n[12])/i,e[1]=(n[1]*r+n[5]*a+n[9]*o+n[13])/i,e[2]=(n[2]*r+n[6]*a+n[10]*o+n[14])/i,e},transformMat4Upper3x3:function(t,n,e){e=e||new u(3);let r=t[0],a=t[1],o=t[2];return e[0]=r*n[0]+a*n[4]+o*n[8],e[1]=r*n[1]+a*n[5]+o*n[9],e[2]=r*n[2]+a*n[6]+o*n[10],e},transformMat3:function(t,n,e){e=e||new u(3);let r=t[0],a=t[1],o=t[2];return e[0]=r*n[0]+a*n[4]+o*n[8],e[1]=r*n[1]+a*n[5]+o*n[9],e[2]=r*n[2]+a*n[6]+o*n[10],e},transformQuat:function(t,n,e){e=e||new u(3);let r=n[0],a=n[1],o=n[2],i=2*n[3],c=t[0],l=t[1],s=t[2],f=a*s-o*l,h=o*c-r*s,M=r*l-a*c;return e[0]=c+f*i+(a*M-o*h)*2,e[1]=l+h*i+(o*f-r*M)*2,e[2]=s+M*i+(r*h-a*f)*2,e},getTranslation:function(t,n){return(n=n||new u(3))[0]=t[12],n[1]=t[13],n[2]=t[14],n},getAxis:function(t,n,e){e=e||new u(3);let r=4*n;return e[0]=t[r+0],e[1]=t[r+1],e[2]=t[r+2],e},getScaling:function(t,n){n=n||new u(3);let e=t[0],r=t[1],a=t[2],o=t[4],i=t[5],c=t[6],l=t[8],s=t[9],f=t[10];return n[0]=Math.sqrt(e*e+r*r+a*a),n[1]=Math.sqrt(o*o+i*i+c*c),n[2]=Math.sqrt(l*l+s*s+f*f),n}});let l=Float32Array;function copy$2(t,n){return(n=n||new l(16))[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function identity$1(t){return(t=t||new l(16))[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function inverse$2(t,n){n=n||new l(16);let e=t[0],r=t[1],a=t[2],o=t[3],i=t[4],u=t[5],c=t[6],s=t[7],f=t[8],h=t[9],M=t[10],$=t[11],w=t[12],d=t[13],m=t[14],v=t[15],y=M*v,p=m*$,b=c*v,q=m*s,g=c*$,x=M*s,A=a*v,S=m*o,z=a*$,_=M*o,F=a*s,R=c*o,k=f*d,T=w*h,E=i*d,j=w*u,C=i*h,D=f*u,I=e*d,N=w*r,O=e*h,P=f*r,Q=e*u,V=i*r,X=y*u+q*h+g*d-(p*u+b*h+x*d),Y=p*r+A*h+_*d-(y*r+S*h+z*d),Z=b*r+S*u+F*d-(q*r+A*u+R*d),U=x*r+z*u+R*h-(g*r+_*u+F*h),B=1/(e*X+i*Y+f*Z+w*U);return n[0]=B*X,n[1]=B*Y,n[2]=B*Z,n[3]=B*U,n[4]=B*(p*i+b*f+x*w-(y*i+q*f+g*w)),n[5]=B*(y*e+S*f+z*w-(p*e+A*f+_*w)),n[6]=B*(q*e+A*i+R*w-(b*e+S*i+F*w)),n[7]=B*(g*e+_*i+F*f-(x*e+z*i+R*f)),n[8]=B*(k*s+j*$+C*v-(T*s+E*$+D*v)),n[9]=B*(T*o+I*$+P*v-(k*o+N*$+O*v)),n[10]=B*(E*o+N*s+Q*v-(j*o+I*s+V*v)),n[11]=B*(D*o+O*s+V*$-(C*o+P*s+Q*$)),n[12]=B*(E*M+D*m+T*c-(C*m+k*c+j*M)),n[13]=B*(O*m+k*a+N*M-(I*M+P*m+T*a)),n[14]=B*(I*c+V*m+j*a-(Q*m+E*a+N*c)),n[15]=B*(Q*M+C*a+P*c-(O*c+V*M+D*a)),n}function multiply$2(t,n,e){e=e||new l(16);let r=t[0],a=t[1],o=t[2],i=t[3],u=t[4],c=t[5],s=t[6],f=t[7],h=t[8],M=t[9],$=t[10],w=t[11],d=t[12],m=t[13],v=t[14],y=t[15],p=n[0],b=n[1],q=n[2],g=n[3],x=n[4],A=n[5],S=n[6],z=n[7],_=n[8],F=n[9],R=n[10],k=n[11],T=n[12],E=n[13],j=n[14],C=n[15];return e[0]=r*p+u*b+h*q+d*g,e[1]=a*p+c*b+M*q+m*g,e[2]=o*p+s*b+$*q+v*g,e[3]=i*p+f*b+w*q+y*g,e[4]=r*x+u*A+h*S+d*z,e[5]=a*x+c*A+M*S+m*z,e[6]=o*x+s*A+$*S+v*z,e[7]=i*x+f*A+w*S+y*z,e[8]=r*_+u*F+h*R+d*k,e[9]=a*_+c*F+M*R+m*k,e[10]=o*_+s*F+$*R+v*k,e[11]=i*_+f*F+w*R+y*k,e[12]=r*T+u*E+h*j+d*C,e[13]=a*T+c*E+M*j+m*C,e[14]=o*T+s*E+$*j+v*C,e[15]=i*T+f*E+w*j+y*C,e}function axisRotation(t,n,e){e=e||new l(16);let r=t[0],a=t[1],o=t[2],i=Math.sqrt(r*r+a*a+o*o);r/=i,a/=i,o/=i;let u=r*r,c=a*a,s=o*o,f=Math.cos(n),h=Math.sin(n),M=1-f;return e[0]=u+(1-u)*f,e[1]=r*a*M+o*h,e[2]=r*o*M-a*h,e[3]=0,e[4]=r*a*M-o*h,e[5]=c+(1-c)*f,e[6]=a*o*M+r*h,e[7]=0,e[8]=r*o*M+a*h,e[9]=a*o*M-r*h,e[10]=s+(1-s)*f,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function axisRotate(t,n,e,r){r=r||new l(16);let a=n[0],o=n[1],i=n[2],u=Math.sqrt(a*a+o*o+i*i);a/=u,o/=u,i/=u;let c=a*a,s=o*o,f=i*i,h=Math.cos(e),M=Math.sin(e),$=1-h,w=c+(1-c)*h,d=a*o*$+i*M,m=a*i*$-o*M,v=a*o*$-i*M,y=s+(1-s)*h,p=o*i*$+a*M,b=a*i*$+o*M,q=o*i*$-a*M,g=f+(1-f)*h,x=t[0],A=t[1],S=t[2],z=t[3],_=t[4],F=t[5],R=t[6],k=t[7],T=t[8],E=t[9],j=t[10],C=t[11];return r[0]=w*x+d*_+m*T,r[1]=w*A+d*F+m*E,r[2]=w*S+d*R+m*j,r[3]=w*z+d*k+m*C,r[4]=v*x+y*_+p*T,r[5]=v*A+y*F+p*E,r[6]=v*S+y*R+p*j,r[7]=v*z+y*k+p*C,r[8]=b*x+q*_+g*T,r[9]=b*A+q*F+g*E,r[10]=b*S+q*R+g*j,r[11]=b*z+q*k+g*C,t!==r&&(r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r}var s=Object.freeze({__proto__:null,setDefaultType:function(t){let n=l;return l=t,n},create:function(t,n,e,r,a,o,i,u,c,s,f,h,M,$,w,d){let m=new l(16);return void 0!==t&&(m[0]=t,void 0!==n&&(m[1]=n,void 0!==e&&(m[2]=e,void 0!==r&&(m[3]=r,void 0!==a&&(m[4]=a,void 0!==o&&(m[5]=o,void 0!==i&&(m[6]=i,void 0!==u&&(m[7]=u,void 0!==c&&(m[8]=c,void 0!==s&&(m[9]=s,void 0!==f&&(m[10]=f,void 0!==h&&(m[11]=h,void 0!==M&&(m[12]=M,void 0!==$&&(m[13]=$,void 0!==w&&(m[14]=w,void 0!==d&&(m[15]=d)))))))))))))))),m},set:function(t,n,e,r,a,o,i,u,c,s,f,h,M,$,w,d,m){return(m=m||new l(16))[0]=t,m[1]=n,m[2]=e,m[3]=r,m[4]=a,m[5]=o,m[6]=i,m[7]=u,m[8]=c,m[9]=s,m[10]=f,m[11]=h,m[12]=M,m[13]=$,m[14]=w,m[15]=d,m},fromMat3:function(t,n){return(n=n||new l(16))[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=0,n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=0,n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n},fromQuat:function(t,n){n=n||new l(16);let e=t[0],r=t[1],a=t[2],o=t[3],i=e+e,u=r+r,c=a+a,s=e*i,f=r*i,h=r*u,M=a*i,$=a*u,w=a*c,d=o*i,m=o*u,v=o*c;return n[0]=1-h-w,n[1]=f+v,n[2]=M-m,n[3]=0,n[4]=f-v,n[5]=1-s-w,n[6]=$+d,n[7]=0,n[8]=M+m,n[9]=$-d,n[10]=1-s-h,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n},negate:function(t,n){return(n=n||new l(16))[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n[3]=-t[3],n[4]=-t[4],n[5]=-t[5],n[6]=-t[6],n[7]=-t[7],n[8]=-t[8],n[9]=-t[9],n[10]=-t[10],n[11]=-t[11],n[12]=-t[12],n[13]=-t[13],n[14]=-t[14],n[15]=-t[15],n},copy:copy$2,clone:copy$2,equalsApproximately:function(t,n){return 1e-6>Math.abs(t[0]-n[0])&&1e-6>Math.abs(t[1]-n[1])&&1e-6>Math.abs(t[2]-n[2])&&1e-6>Math.abs(t[3]-n[3])&&1e-6>Math.abs(t[4]-n[4])&&1e-6>Math.abs(t[5]-n[5])&&1e-6>Math.abs(t[6]-n[6])&&1e-6>Math.abs(t[7]-n[7])&&1e-6>Math.abs(t[8]-n[8])&&1e-6>Math.abs(t[9]-n[9])&&1e-6>Math.abs(t[10]-n[10])&&1e-6>Math.abs(t[11]-n[11])&&1e-6>Math.abs(t[12]-n[12])&&1e-6>Math.abs(t[13]-n[13])&&1e-6>Math.abs(t[14]-n[14])&&1e-6>Math.abs(t[15]-n[15])},equals:function(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]&&t[9]===n[9]&&t[10]===n[10]&&t[11]===n[11]&&t[12]===n[12]&&t[13]===n[13]&&t[14]===n[14]&&t[15]===n[15]},identity:identity$1,transpose:function(t,n){if((n=n||new l(16))===t){let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,n}let e=t[0],r=t[1],a=t[2],o=t[3],i=t[4],u=t[5],c=t[6],s=t[7],f=t[8],h=t[9],M=t[10],$=t[11],w=t[12],d=t[13],m=t[14],v=t[15];return n[0]=e,n[1]=i,n[2]=f,n[3]=w,n[4]=r,n[5]=u,n[6]=h,n[7]=d,n[8]=a,n[9]=c,n[10]=M,n[11]=m,n[12]=o,n[13]=s,n[14]=$,n[15]=v,n},inverse:inverse$2,determinant:function(t){let n=t[0],e=t[1],r=t[2],a=t[3],o=t[4],i=t[5],u=t[6],c=t[7],l=t[8],s=t[9],f=t[10],h=t[11],M=t[12],$=t[13],w=t[14],d=t[15],m=f*d,v=w*h,y=u*d,p=w*c,b=u*h,q=f*c,g=r*d,x=w*a,A=r*h,S=f*a,z=r*c,_=u*a;return n*(m*i+p*s+b*$-(v*i+y*s+q*$))+o*(v*e+g*s+S*$-(m*e+x*s+A*$))+l*(y*e+x*i+z*$-(p*e+g*i+_*$))+M*(q*e+A*i+_*s-(b*e+S*i+z*s))},invert:inverse$2,multiply:multiply$2,mul:multiply$2,setTranslation:function(t,n,e){return t!==(e=e||identity$1())&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11]),e[12]=n[0],e[13]=n[1],e[14]=n[2],e[15]=1,e},getTranslation:function(t,n){return(n=n||create$3())[0]=t[12],n[1]=t[13],n[2]=t[14],n},getAxis:function(t,n,e){e=e||create$3();let r=4*n;return e[0]=t[r+0],e[1]=t[r+1],e[2]=t[r+2],e},setAxis:function(t,n,e,r){r!==t&&(r=copy$2(t,r));let a=4*e;return r[a+0]=n[0],r[a+1]=n[1],r[a+2]=n[2],r},getScaling:function(t,n){n=n||create$3();let e=t[0],r=t[1],a=t[2],o=t[4],i=t[5],u=t[6],c=t[8],l=t[9],s=t[10];return n[0]=Math.sqrt(e*e+r*r+a*a),n[1]=Math.sqrt(o*o+i*i+u*u),n[2]=Math.sqrt(c*c+l*l+s*s),n},perspective:function(t,n,e,r,a){a=a||new l(16);let o=Math.tan(.5*Math.PI-.5*t);if(a[0]=o/n,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=o,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[11]=-1,a[12]=0,a[13]=0,a[15]=0,r===1/0)a[10]=-1,a[14]=-e;else{let t=1/(e-r);a[10]=r*t,a[14]=r*e*t}return a},ortho:function(t,n,e,r,a,o,i){return(i=i||new l(16))[0]=2/(n-t),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2/(r-e),i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=1/(a-o),i[11]=0,i[12]=(n+t)/(t-n),i[13]=(r+e)/(e-r),i[14]=a/(a-o),i[15]=1,i},frustum:function(t,n,e,r,a,o,i){i=i||new l(16);let u=n-t,c=r-e,s=a-o;return i[0]=2*a/u,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2*a/c,i[6]=0,i[7]=0,i[8]=(t+n)/u,i[9]=(r+e)/c,i[10]=o/s,i[11]=-1,i[12]=0,i[13]=0,i[14]=a*o/s,i[15]=0,i},aim:function(t,n,e,i){return i=i||new l(16),r=r||create$3(),a=a||create$3(),normalize$2(subtract$2(n,t,o=o||create$3()),o),normalize$2(cross(e,o,r),r),normalize$2(cross(o,r,a),a),i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=0,i[4]=a[0],i[5]=a[1],i[6]=a[2],i[7]=0,i[8]=o[0],i[9]=o[1],i[10]=o[2],i[11]=0,i[12]=t[0],i[13]=t[1],i[14]=t[2],i[15]=1,i},cameraAim:function(t,n,e,i){return i=i||new l(16),r=r||create$3(),a=a||create$3(),normalize$2(subtract$2(t,n,o=o||create$3()),o),normalize$2(cross(e,o,r),r),normalize$2(cross(o,r,a),a),i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=0,i[4]=a[0],i[5]=a[1],i[6]=a[2],i[7]=0,i[8]=o[0],i[9]=o[1],i[10]=o[2],i[11]=0,i[12]=t[0],i[13]=t[1],i[14]=t[2],i[15]=1,i},lookAt:function(t,n,e,i){return i=i||new l(16),r=r||create$3(),a=a||create$3(),normalize$2(subtract$2(t,n,o=o||create$3()),o),normalize$2(cross(e,o,r),r),normalize$2(cross(o,r,a),a),i[0]=r[0],i[1]=a[0],i[2]=o[0],i[3]=0,i[4]=r[1],i[5]=a[1],i[6]=o[1],i[7]=0,i[8]=r[2],i[9]=a[2],i[10]=o[2],i[11]=0,i[12]=-(r[0]*t[0]+r[1]*t[1]+r[2]*t[2]),i[13]=-(a[0]*t[0]+a[1]*t[1]+a[2]*t[2]),i[14]=-(o[0]*t[0]+o[1]*t[1]+o[2]*t[2]),i[15]=1,i},translation:function(t,n){return(n=n||new l(16))[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n},translate:function(t,n,e){e=e||new l(16);let r=n[0],a=n[1],o=n[2],i=t[0],u=t[1],c=t[2],s=t[3],f=t[4],h=t[5],M=t[6],$=t[7],w=t[8],d=t[9],m=t[10],v=t[11],y=t[12],p=t[13],b=t[14],q=t[15];return t!==e&&(e[0]=i,e[1]=u,e[2]=c,e[3]=s,e[4]=f,e[5]=h,e[6]=M,e[7]=$,e[8]=w,e[9]=d,e[10]=m,e[11]=v),e[12]=i*r+f*a+w*o+y,e[13]=u*r+h*a+d*o+p,e[14]=c*r+M*a+m*o+b,e[15]=s*r+$*a+v*o+q,e},rotationX:function(t,n){n=n||new l(16);let e=Math.cos(t),r=Math.sin(t);return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=e,n[6]=r,n[7]=0,n[8]=0,n[9]=-r,n[10]=e,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n},rotateX:function(t,n,e){e=e||new l(16);let r=t[4],a=t[5],o=t[6],i=t[7],u=t[8],c=t[9],s=t[10],f=t[11],h=Math.cos(n),M=Math.sin(n);return e[4]=h*r+M*u,e[5]=h*a+M*c,e[6]=h*o+M*s,e[7]=h*i+M*f,e[8]=h*u-M*r,e[9]=h*c-M*a,e[10]=h*s-M*o,e[11]=h*f-M*i,t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e},rotationY:function(t,n){n=n||new l(16);let e=Math.cos(t),r=Math.sin(t);return n[0]=e,n[1]=0,n[2]=-r,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=r,n[9]=0,n[10]=e,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n},rotateY:function(t,n,e){e=e||new l(16);let r=t[0],a=t[1],o=t[2],i=t[3],u=t[8],c=t[9],s=t[10],f=t[11],h=Math.cos(n),M=Math.sin(n);return e[0]=h*r-M*u,e[1]=h*a-M*c,e[2]=h*o-M*s,e[3]=h*i-M*f,e[8]=h*u+M*r,e[9]=h*c+M*a,e[10]=h*s+M*o,e[11]=h*f+M*i,t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e},rotationZ:function(t,n){n=n||new l(16);let e=Math.cos(t),r=Math.sin(t);return n[0]=e,n[1]=r,n[2]=0,n[3]=0,n[4]=-r,n[5]=e,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n},rotateZ:function(t,n,e){e=e||new l(16);let r=t[0],a=t[1],o=t[2],i=t[3],u=t[4],c=t[5],s=t[6],f=t[7],h=Math.cos(n),M=Math.sin(n);return e[0]=h*r+M*u,e[1]=h*a+M*c,e[2]=h*o+M*s,e[3]=h*i+M*f,e[4]=h*u-M*r,e[5]=h*c-M*a,e[6]=h*s-M*o,e[7]=h*f-M*i,t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e},axisRotation:axisRotation,rotation:axisRotation,axisRotate:axisRotate,rotate:axisRotate,scaling:function(t,n){return(n=n||new l(16))[0]=t[0],n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=t[1],n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=t[2],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n},scale:function(t,n,e){e=e||new l(16);let r=n[0],a=n[1],o=n[2];return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=r*t[3],e[4]=a*t[4],e[5]=a*t[5],e[6]=a*t[6],e[7]=a*t[7],e[8]=o*t[8],e[9]=o*t[9],e[10]=o*t[10],e[11]=o*t[11],t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e},uniformScaling:function(t,n){return(n=n||new l(16))[0]=t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=t,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=t,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n},uniformScale:function(t,n,e){return(e=e||new l(16))[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=n*t[3],e[4]=n*t[4],e[5]=n*t[5],e[6]=n*t[6],e[7]=n*t[7],e[8]=n*t[8],e[9]=n*t[9],e[10]=n*t[10],e[11]=n*t[11],t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e}});Float32Array,Float32Array}}]);
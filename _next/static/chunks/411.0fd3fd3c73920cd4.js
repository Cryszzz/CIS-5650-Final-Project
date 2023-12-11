"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[411],{3704:function(e,t,r){r.d(t,{Z:function(){return BaseDecoder}});let BaseDecoder=class BaseDecoder{async decode(e,t){let r=await this.decodeBlock(t),n=e.Predictor||1;if(1!==n){let t=!e.StripOffsets,i=t?e.TileWidth:e.ImageWidth,l=t?e.TileLength:e.RowsPerStrip||e.ImageLength;return function(e,t,r,n,i,l){if(!t||1===t)return e;for(let e=0;e<i.length;++e){if(i[e]%8!=0)throw Error("When decoding with predictor, only multiple of 8 bits are supported.");if(i[e]!==i[0])throw Error("When decoding with predictor, all samples must have the same size.")}let o=i[0]/8,a=2===l?1:i.length;for(let l=0;l<n;++l){let n;if(l*a*r*o>=e.byteLength)break;if(2===t){switch(i[0]){case 8:n=new Uint8Array(e,l*a*r*o,a*r*o);break;case 16:n=new Uint16Array(e,l*a*r*o,a*r*o/2);break;case 32:n=new Uint32Array(e,l*a*r*o,a*r*o/4);break;default:throw Error(`Predictor 2 not allowed with ${i[0]} bits per sample.`)}!function(e,t){let r=e.length-t,n=0;do{for(let r=t;r>0;r--)e[n+t]+=e[n],n++;r-=t}while(r>0)}(n,a,o)}else 3===t&&function(e,t,r){let n=0,i=e.length,l=i/r;for(;i>t;){for(let r=t;r>0;--r)e[n+t]+=e[n],++n;i-=t}let o=e.slice();for(let t=0;t<l;++t)for(let n=0;n<r;++n)e[r*t+n]=o[(r-n-1)*l+t]}(n=new Uint8Array(e,l*a*r*o,a*r*o),a,o)}return e}(r,n,i,l,e.BitsPerSample,e.PlanarConfiguration)}return r}}},7411:function(e,t,r){r.r(t),r.d(t,{default:function(){return PackbitsDecoder}});var n=r(3704);let PackbitsDecoder=class PackbitsDecoder extends n.Z{decodeBlock(e){let t=new DataView(e),r=[];for(let n=0;n<e.byteLength;++n){let e=t.getInt8(n);if(e<0){let i=t.getUint8(n+1);e=-e;for(let t=0;t<=e;++t)r.push(i);n+=1}else{for(let i=0;i<=e;++i)r.push(t.getUint8(n+i+1));n+=e+1}}return new Uint8Array(r).buffer}}}}]);
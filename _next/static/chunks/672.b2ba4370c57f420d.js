"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[672],{3704:function(e,t,r){r.d(t,{Z:function(){return BaseDecoder}});let BaseDecoder=class BaseDecoder{async decode(e,t){let r=await this.decodeBlock(t),n=e.Predictor||1;if(1!==n){let t=!e.StripOffsets,i=t?e.TileWidth:e.ImageWidth,o=t?e.TileLength:e.RowsPerStrip||e.ImageLength;return function(e,t,r,n,i,o){if(!t||1===t)return e;for(let e=0;e<i.length;++e){if(i[e]%8!=0)throw Error("When decoding with predictor, only multiple of 8 bits are supported.");if(i[e]!==i[0])throw Error("When decoding with predictor, all samples must have the same size.")}let l=i[0]/8,a=2===o?1:i.length;for(let o=0;o<n;++o){let n;if(o*a*r*l>=e.byteLength)break;if(2===t){switch(i[0]){case 8:n=new Uint8Array(e,o*a*r*l,a*r*l);break;case 16:n=new Uint16Array(e,o*a*r*l,a*r*l/2);break;case 32:n=new Uint32Array(e,o*a*r*l,a*r*l/4);break;default:throw Error(`Predictor 2 not allowed with ${i[0]} bits per sample.`)}!function(e,t){let r=e.length-t,n=0;do{for(let r=t;r>0;r--)e[n+t]+=e[n],n++;r-=t}while(r>0)}(n,a,l)}else 3===t&&function(e,t,r){let n=0,i=e.length,o=i/r;for(;i>t;){for(let r=t;r>0;--r)e[n+t]+=e[n],++n;i-=t}let l=e.slice();for(let t=0;t<o;++t)for(let n=0;n<r;++n)e[r*t+n]=l[(r-n-1)*o+t]}(n=new Uint8Array(e,o*a*r*l,a*r*l),a,l)}return e}(r,n,i,o,e.BitsPerSample,e.PlanarConfiguration)}return r}}},8672:function(e,t,r){r.r(t),r.d(t,{default:function(){return LZWDecoder}});var n=r(3704);function appendReversed(e,t){for(let r=t.length-1;r>=0;r--)e.push(t[r]);return e}let LZWDecoder=class LZWDecoder extends n.Z{decodeBlock(e){return function(e){let t;let r=new Uint16Array(4093),n=new Uint8Array(4093);for(let e=0;e<=257;e++)r[e]=4096,n[e]=e;let i=258,o=9,l=0;function initDictionary(){i=258,o=9}function getNext(e){let t=function(e,t,r){let n=t%8,i=Math.floor(t/8),o=8*(i+2)-(t+r);if(o=Math.max(0,o),i>=e.length)return console.warn("ran off the end of the buffer before finding EOI_CODE (end on input code)"),257;let l=e[i]&2**(8-n)-1,a=l<<=r-(8-n);if(i+1<e.length){let n=e[i+1]>>>o;n<<=Math.max(0,r-((i+2)*8-t)),a+=n}if(t+r-(i+1)*8>8&&i+2<e.length){let n=e[i+2]>>>(i+3)*8-(t+r);a+=n}return a}(e,l,o);return l+=o,t}function addToDictionary(e,t){return n[i]=t,r[i]=e,++i-1}function getDictionaryReversed(e){let t=[];for(let i=e;4096!==i;i=r[i])t.push(n[i]);return t}let a=[];initDictionary();let f=new Uint8Array(e),c=getNext(f);for(;257!==c;){if(256===c){for(initDictionary(),c=getNext(f);256===c;)c=getNext(f);if(257===c)break;if(c>256)throw Error(`corrupted code at scanline ${c}`);{let e=getDictionaryReversed(c);appendReversed(a,e),t=c}}else if(c<i){let e=getDictionaryReversed(c);appendReversed(a,e),addToDictionary(t,e[e.length-1]),t=c}else{let e=getDictionaryReversed(t);if(!e)throw Error(`Bogus entry. Not in dictionary, ${t} / ${i}, position: ${l}`);appendReversed(a,e),a.push(e[e.length-1]),addToDictionary(t,e[e.length-1]),t=c}i+1>=2**o&&(12===o?t=void 0:o++),c=getNext(f)}return new Uint8Array(a)}(e,!1).buffer}}}}]);
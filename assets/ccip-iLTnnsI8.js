import{B as e,g as a,s as t,d as s,i as r,c as n,a as o,e as c,H as d,b as l}from"./index-DnsJG05H.js";import"./phaser-DTYz3Cvc.js";class u extends e{constructor({callbackSelector:e,cause:t,data:s,extraData:r,sender:n,urls:o}){var c;super(t.shortMessage||"An error occurred while fetching for an offchain result.",{cause:t,metaMessages:[...t.metaMessages||[],(null==(c=t.metaMessages)?void 0:c.length)?"":[],"Offchain Gateway Call:",o&&["  Gateway URL(s):",...o.map((e=>`    ${a(e)}`))],`  Sender: ${n}`,`  Data: ${s}`,`  Callback selector: ${e}`,`  Extra data: ${r}`].flat(),name:"OffchainLookupError"})}}class i extends e{constructor({result:e,url:s}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${a(s)}`,`Response: ${t(e)}`],name:"OffchainLookupResponseMalformedError"})}}class p extends e{constructor({sender:e,to:a}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${a}`,`OffchainLookup sender address: ${e}`],name:"OffchainLookupSenderMismatchError"})}}const f="0x556f1830",h={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function m(e,{blockNumber:a,blockTag:t,data:d,to:l}){const{args:i}=s({data:d,abi:[h]}),[f,m,b,w,g]=i,{ccipRead:k}=e,x=k&&"function"==typeof(null==k?void 0:k.request)?k.request:y;try{if(!r(l,f))throw new p({sender:f,to:l});const s=await x({data:b,sender:f,urls:m}),{data:d}=await n(e,{blockNumber:a,blockTag:t,data:o([w,c([{type:"bytes"},{type:"bytes"}],[s,g])]),to:l});return d}catch(O){throw new u({callbackSelector:w,cause:O,data:d,extraData:g,sender:f,urls:m})}}async function y({data:e,sender:a,urls:s}){var r;let n=new Error("An unknown error occurred.");for(let c=0;c<s.length;c++){const u=s[c],p=u.includes("{data}")?"GET":"POST",f="POST"===p?{data:e,sender:a}:void 0,h="POST"===p?{"Content-Type":"application/json"}:{};try{const s=await fetch(u.replace("{sender}",a.toLowerCase()).replace("{data}",e),{body:JSON.stringify(f),headers:h,method:p});let o;if(o=(null==(r=s.headers.get("Content-Type"))?void 0:r.startsWith("application/json"))?(await s.json()).data:await s.text(),!s.ok){n=new d({body:f,details:(null==o?void 0:o.error)?t(o.error):s.statusText,headers:s.headers,status:s.status,url:u});continue}if(!l(o)){n=new i({result:o,url:u});continue}return o}catch(o){n=new d({body:f,details:o.message,url:u})}}throw n}export{y as ccipRequest,m as offchainLookup,h as offchainLookupAbiItem,f as offchainLookupSignature};

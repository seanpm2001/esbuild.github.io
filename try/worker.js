var ne=class{constructor(s){let p=s.v===0?s.z.length:0,d=s._.getTime(),Q=s.G.getTime();this.dev=1,this.ino=s.se,this.mode=s.v===0?32768:16384,this.nlink=1,this.uid=1,this.gid=1,this.rdev=0,this.size=p,this.blksize=4096,this.blocks=p+4095&4095,this.atimeMs=d,this.mtimeMs=d,this.ctimeMs=Q,this.birthtimeMs=Q,this.atime=s._,this.mtime=s._,this.ctime=s.G,this.birthtime=s.G}isDirectory(){return this.mode===16384}isFile(){return this.mode===32768}},$e=se("EBADF"),Me=se("EINVAL"),qe=se("EISDIR"),Ke=se("ENOENT"),Ie=se("ENOTDIR"),ae=new Map,He=new TextEncoder,Ve=new TextDecoder,fe=Ue(),Ge=3,Be=1,le="",he,ve;function Xe(l,s,F,p,d){if(l<=2)l===2?Oe(s,F,p):he(l,s,F,p,d);else throw Me}function Je(l,s,F,p,d,Q){if(l<=2)ve(l,s,F,p,d,Q);else{let i=ae.get(l);if(!i)Q($e,0,s);else if(i.te.v===1)Q(qe,0,s);else{let $=i.te.z;if(d!==null&&d!==-1){let N=$.slice(d,d+p);s.set(N,F),Q(null,N.length,s)}else{let N=$.slice(i.ne,i.ne+p);i.ne+=N.length,s.set(N,F),Q(null,N.length,s)}}}}function Qe(l){throw new Error(JSON.stringify(l)+" cannot be both a file and a directory")}function ge(l){fe.R.clear(),le="";for(let s in l){let F=Ae(Se(s)),p=fe;for(let Q=0;Q+1<F.length;Q++){let i=F[Q],$=p.R.get(i);$?$.v!==1&&Qe(i):($=Ue(),p.R.set(i,$)),p=$}let d=F[F.length-1];p.R.has(d)&&Qe(d),p.R.set(d,Ye(He.encode(l[s])))}}globalThis.fs={get writeSync(){return Xe},set writeSync(l){he=l},get read(){return Je},set read(l){ve=l},constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},open(l,s,F,p){try{let d=Fe(l),Q=Ge++;ae.set(Q,{te:d,ne:0}),p(null,Q)}catch(d){p(d,null)}},close(l,s){s(ae.delete(l)?null:$e)},write(l,s,F,p,d,Q){l<=2?(l===2?Oe(s,F,p):he(l,s,F,p,d),Q(null,p,s)):Q(Me,0,s)},readdir(l,s){try{let F=Fe(l);if(F.v!==1)throw Ie;s(null,[...F.R.keys()])}catch(F){s(F,null)}},stat(l,s){try{let F=Fe(l);s(null,new ne(F))}catch(F){s(F,null)}},lstat(l,s){try{let F=Fe(l);s(null,new ne(F))}catch(F){s(F,null)}},fstat(l,s){let F=ae.get(l);F?s(null,new ne(F.te)):s($e,null)}};function Ye(l){let s=new Date;return{v:0,se:Be++,G:s,_:s,z:l}}function Ue(){let l=new Date;return{v:1,se:Be++,G:l,_:l,R:new Map}}function Se(l){l[0]!=="/"&&(l="/"+l);let s=l.split("/");s.shift();let F=0;for(let p=0;p<s.length;p++){let d=s[p];d===".."?F&&F--:d!=="."&&d!==""&&(s[F++]=d)}return s.length=F,"/"+s.join("/")}function Ae(l){if(l=Se(l),l==="/")return[];let s=l.split("/");return s.shift(),s}function Fe(l){let s=Ae(l),F=fe;for(let p=0,d=s.length;p<d;p++){let Q=F.R.get(s[p]);if(!Q)throw Ke;if(Q.v===0){if(p+1===d)return Q;throw Ie}F=Q}return F}function se(l){let s=new Error(l);return s.code=l,s}function Oe(l,s,F){le+=Ve.decode(s===0&&F===l.length?l:l.slice(s,s+F))}var Ze=()=>{let l=new ArrayBuffer(8),s=new Float32Array(l),F=new Float64Array(l),p=new Int32Array(l),d=new BigInt64Array(l),Q=new BigUint64Array(l);return{la(i,$){return(i<0||i===0&&Object.is(i,-0))!==($<0||$===0&&Object.is($,-0))?-i:i},lb(i){return Q[0]=i,d[0]},lc(i){return s[0]=i,p[0]},ld(i){return p[0]=i,s[0]},le(i){return F[0]=i,Q[0]},lf(i){return Q[0]=i,F[0]},lg(i,$){return i<<$|i>>>32-$},lh(i,$){return i>>>$|i<<32-$},li(i,$){return(i<<$|i>>64n-$)&0xFFFFFFFFFFFFFFFFn},lj(i,$){return(i>>$|i<<64n-$)&0xFFFFFFFFFFFFFFFFn},lk(i){return i?Math.clz32(i&-i)^31:32},ll(i){let $=0;for(;i;)$++,i&=i-1;return $},lm(i){let $=Math.clz32(Number(i>>32n&0xFFFFFFFFn));return $===32&&($+=Math.clz32(Number(i&0xFFFFFFFFn))),BigInt($)},ln(i){let $=Number(i&0xFFFFFFFFn);return $?BigInt(Math.clz32($&-$)^31):($=Number(i>>32n&0xFFFFFFFFn),$?BigInt(32+Math.clz32($&-$)^31):64n)},lo(i){let $=0n;for(;i;)$++,i&=i-1n;return $},lp(i){return i=Math.trunc(i),i>=2147483647?2147483647:i<=-2147483648?-2147483648:i|0},lq(i){return i=Math.trunc(i),i>=4294967295?-1:i<=0?0:i|0},lr(i){return i=Math.trunc(i),i>=9223372036854776e3?0x7FFFFFFFFFFFFFFFn:i<=-9223372036854776e3?0x8000000000000000n:i===i?BigInt(i)&0xFFFFFFFFFFFFFFFFn:0n},ls(i){return i=Math.trunc(i),i>=18446744073709552e3?0xFFFFFFFFFFFFFFFFn:i>0?BigInt(i):0n},lt(i){return i&0x80n?i|0xFFFFFFFFFFFFFF00n:i&0xFFn},lu(i){return i&0x8000n?i|0xFFFFFFFFFFFF0000n:i&0xFFFFn},lv(i){return i&0x80000000n?i|0xFFFFFFFF00000000n:i&0xFFFFFFFFn}}},De=[{e:[["$",40,41,42,43,44,45,46,47,48,49,50,51,52,53],[106,"x",[65,"Q"]],"P"],t:["$","x",[-2,"P","Q"]]},{e:[["$",54,55,56,57,58,59,60,61,62],[106,"x",[65,"Q"]],"y","P"],t:["$","x","y",[-2,"P","Q"]]},{e:[60,"x","y","P"],i:{y:[{e:[66,"Q"],t:[58,"x",[65,[-1,"Q"]],"P"]},{e:[["$",48,49,50,51,52,53,41],"z","Q"],t:[58,"x",[45,"z","Q"],"P"]},{e:[["@",172,173],"z"],t:[58,"x","z","P"]}]}},{e:[61,"x","y","P"],i:{y:[{e:[66,"Q"],t:[59,"x",[65,[-1,"Q"]],"P"]},{e:[48,"z","Q"],t:[59,"x",[44,"z","Q"],"P"]},{e:[49,"z","Q"],t:[59,"x",[45,"z","Q"],"P"]},{e:[["$",50,51,52,53,41],"z","Q"],t:[59,"x",[47,"z","Q"],"P"]},{e:[["@",172,173],"z"],t:[59,"x","z","P"]}]}},{e:[62,"x","y","P"],i:{y:[{e:[66,"Q"],t:[54,"x",[65,[-1,"Q"]],"P"]},{e:[48,"z","Q"],t:[54,"x",[44,"z","Q"],"P"]},{e:[49,"z","Q"],t:[54,"x",[45,"z","Q"],"P"]},{e:[50,"z","Q"],t:[54,"x",[46,"z","Q"],"P"]},{e:[51,"z","Q"],t:[54,"x",[47,"z","Q"],"P"]},{e:[["$",52,53,41],"z","Q"],t:[54,"x",[40,"z","Q"],"P"]},{e:[["@",172,173],"z"],t:[54,"x","z","P"]}]}},{e:[80,"x"],i:{x:[{e:[["$",48,49],"y","P"],t:[69,[45,"y","P"]]},{e:[["$",50,51],"y","P"],t:[69,[47,"y","P"]]},{e:[["$",52,53],"y","P"],t:[69,[40,"y","P"]]},{e:[["@",172,173],"y"],t:[69,"y"]}]}},{e:[81,[49,"x","P"],[66,"Q"]],t:[70,[45,"x","P"],[65,[-1,"Q"]]],n:["Q","<=",0xFFn]},{e:[82,[49,"x","P"],[66,"Q"]],t:[71,[45,"x","P"],[65,[-1,"Q"]]],n:["Q","<=",0xFFn]},{e:[81,[51,"x","P"],[66,"Q"]],t:[70,[47,"x","P"],[65,[-1,"Q"]]],n:["Q","<=",0xFFFFn]},{e:[82,[51,"x","P"],[66,"Q"]],t:[71,[47,"x","P"],[65,[-1,"Q"]]],n:["Q","<=",0xFFFFn]},{e:[81,[53,"x","P"],[66,"Q"]],t:[70,[40,"x","P"],[65,[-1,"Q"]]],n:["Q","<=",0xFFFFFFFFn]},{e:[82,[53,"x","P"],[66,"Q"]],t:[71,[40,"x","P"],[65,[-1,"Q"]]],n:["Q","<=",0xFFFFFFFFn]},{e:[240,"x"],i:{x:[{e:[242,"y"],t:[240,"y"]},{e:[["@",69,80],"x"],t:[241,"y"]}]}},{e:[241,"x"],i:{x:[{e:[242,"y"],t:[241,"y"]},{e:[["@",69,80],"y"],t:[240,"y"]},{e:[70,"y","z"],t:[240,[71,"y","z"]]},{e:[71,"y","z"],t:[240,[70,"y","z"]]},{e:[72,"y","z"],t:[240,[78,"y","z"]]},{e:[73,"y","z"],t:[240,[79,"y","z"]]},{e:[74,"y","z"],t:[240,[76,"y","z"]]},{e:[75,"y","z"],t:[240,[77,"y","z"]]},{e:[76,"y","z"],t:[240,[74,"y","z"]]},{e:[77,"y","z"],t:[240,[75,"y","z"]]},{e:[78,"y","z"],t:[240,[72,"y","z"]]},{e:[79,"y","z"],t:[240,[73,"y","z"]]},{e:[81,"y","z"],t:[240,[82,"y","z"]]},{e:[82,"y","z"],t:[240,[81,"y","z"]]},{e:[83,"y","z"],t:[240,[89,"y","z"]]},{e:[84,"y","z"],t:[240,[90,"y","z"]]},{e:[85,"y","z"],t:[240,[87,"y","z"]]},{e:[86,"y","z"],t:[240,[88,"y","z"]]},{e:[87,"y","z"],t:[240,[85,"y","z"]]},{e:[88,"y","z"],t:[240,[86,"y","z"]]},{e:[89,"y","z"],t:[240,[83,"y","z"]]},{e:[90,"y","z"],t:[240,[84,"y","z"]]}]}},{e:[243,"x"],i:{x:[{e:[40,"y","P"],t:[245,"y","P"]}]}},{e:[244,"x"],i:{x:[{e:[41,"y","P"],t:[246,"y","P"]},{e:[66,"P"],t:[66,"P"],n:["P","<=",0x7FFFFFFFFFFFFFFFn]},{e:[["$",49,51,53],"y","P"],t:["$","y","P"]}]}},{e:[167,"x"],i:{x:[{e:[66,"P"],t:[65,[-1,"P"]]},{e:[48,"y","P"],t:[44,"y","P"]},{e:[49,"y","P"],t:[45,"y","P"]},{e:[50,"y","P"],t:[46,"y","P"]},{e:[51,"y","P"],t:[47,"y","P"]},{e:[["$",52,53,41],"y","P"],t:[40,"y","P"]},{e:[["@",172,173],"y"],t:"y"},{e:[124,[["@",172,173],"y"],[66,"P"]],t:[106,"y",[65,[-1,"P"]]]}]}},{e:[131,"x",[66,"P"]],i:{x:[{e:[66,"Q"],t:[66,[-3,"P","Q"]]},{e:[131,"y",[66,"Q"]],t:[131,"y",[66,[-3,"P","Q"]]]},{e:[49,"y","Q"],t:[49,"y","Q"],n:[["P","&",0xFFn],"===",0xFFn]},{e:[48,"y","Q"],t:[49,"y","Q"],n:["P","===",0xFFn]},{e:[51,"y","Q"],t:[51,"y","Q"],n:[["P","&",0xFFFFn],"===",0xFFFFn]},{e:[50,"y","Q"],t:[51,"y","Q"],n:["P","===",0xFFFFn]},{e:[53,"y","Q"],t:[53,"y","Q"],n:[["P","&",0xFFFFFFFFn],"===",0xFFFFFFFFn]},{e:[52,"y","Q"],t:[53,"y","Q"],n:["P","===",0xFFFFFFFFn]}]}}],et=()=>{let l=0,s=()=>"v"+l++,F=(P,I,O,U,S)=>{if(I<O.length){let r=O[I];if(typeof r=="string")N[r]=`${D}[${P}+${I+1}]`,F(P,I+1,O,U,S);else{let z=s(),o=s();R+=`var ${z}=${D}[${P}+${I+1}],${o}=${D}[${z}]&255;`,p(z,o,r,U,u=>{F(P,I+1,O,u,S)})}}else S(U)},p=(P,I,[O,...U],S,r)=>{let z=[];if(typeof O=="number")z.push(`${I}===${O}`);else{let[o,...u]=O;u.sort((g,c)=>g-c),M[o]={u:P,x:I,M:u.some(g=>L.has(g))};for(let g=0;g<u.length;g++){let c=1;for(;g+c<u.length&&u[g+c-1]+1===u[g+c];)c++;z.push(c>2?`${I}>=${u[g]}&&${I}<=${u[g+=c-1]}`:`${I}===${u[g]}`)}}S=S.concat({u:P,F:U.map(o=>typeof o=="string"?o:null)}),R+=`if(${z.join("||")}){`,F(P,0,U,S,r),R+="}"},d=(P,I,O,U,S,r)=>{for(let{e:z,i:o,t:u,n:g}of O)p(P,I,z,S,c=>{let x=Object.create(r);Q(g,x,()=>{if(o){for(let y in o)i(y,x);for(let y in o){let E=x[y],B=s();R+=`var ${B}=${D}[${E}]&255;`,d(E,B,o[y],null,c,x)}}if(u){let y=$(u,x,c.slice(),`|${D}[${v}]&-16777216`);typeof u!="string"&&(typeof u[0]=="string"?M[u[0]].M:L.has(u[0]))?(v!==y&&(R+=`${v}=${y};`),R+="continue"):R+="return "+y}})})},Q=(P,I,O)=>{if(P){let U=S=>typeof S=="string"?`${T}[${I[S]||N[S]}]&0xFFFFFFFFFFFFFFFFn`:typeof S=="bigint"?S+"n":`(${U(S[0])})${S[1]}(${U(S[2])})`;R+=`if(${U(P)}){`,O(),R+="}"}else O()},i=(P,I)=>{if(!(P in I)){let O=s();R+=`var ${O}=${N[P]};`,I[P]=O}},$=(P,I,O,U="")=>{if(typeof P=="string")return I[P]||N[P];if(P[0]===-1){let y=$(P[1],I,O);return`Number(${T}[${y}]&0xFFFFFFFFn)`}if(P[0]===-2){let y=$(P[1],I,O),E=$(P[2],I,O);return`${y}+${E}`}if(P[0]===-3){let y=P[1];typeof y=="string"&&i(y,I);let E=$(y,I,O),B=$(P[2],I,O);return R+=`${T}[${E}]&=${T}[${B}];`,E}let[S,...r]=P,z=r[r.length-1],o=((typeof z=="string"?z==="P"||z==="Q":typeof z[0]!="string"&&z[0]<0)?r.length-1:r.length)<<8,u=-1,g,c,x;for(let y=0;y<O.length;y++){let E=O[y];if(E.F.length===r.length){let B=0;for(let k=0;k<r.length;k++)r[k]===E.F[k]&&B++;B>u&&(u=B,g=y,c=E.u,x=E.F)}}if(!(typeof S=="string"&&M[S].u===c)){let y=(typeof S=="string"?`${M[S].x}|${o}`:`${S|o}`)+U;c?(O.splice(g,1),R+=`${D}[${c}]=${y};`):(c=s(),R+=`var ${c}=${t}(${y},${P.length});`)}for(let y=0;y<r.length;y++)if(x&&r[y]!==x[y]){let E=$(r[y],I,O);R+=`${D}[${c}+${y+1}]=${E};`}return c},N={},M={},A=s(),D=s(),T=s(),t=s(),v=s(),f=s(),L=new Set;for(let{e:[P]}of De)if(typeof P=="number")L.add(P);else{let[,...I]=P;for(let O of I)L.add(O)}let R=`for(;;){var ${f}=${D}[${v}]&255;`;return d(v,f,De,null,[],{}),R+=`return ${v}}`,new Function(D,T,t,v,R)},tt=l=>{let s=new DataView(l.buffer),F=()=>{let u=0,g=0,c;do c=l[o++],u|=(c&127)<<g,g+=7;while(c&128);return u>>>0},p=()=>{let u=0,g=0,c;do c=l[o++],u|=(c&127)<<g,g+=7;while(c&128);return g<32&&c&64?u|-1<<g:u},d=()=>{let u=0n,g=0n,c;do c=l[o++],u|=BigInt(c&127)<<g,g+=7n;while(c&128);return g<64&&c&64?u|~0n<<g:u},Q=()=>{let u=s.getFloat32(o,!0);return o+=4,u},i=()=>{let u=s.getFloat64(o,!0);return o+=8,u},$=(u=F())=>[...l.slice(o,o+=u)],N=(u=F())=>new TextDecoder().decode(l.slice(o,o+=u)),M=(u=l[o++])=>[F(),u===0?1/0:F()],A=()=>{let u=l[o++],g;if(u===65)g=F();else throw new Error("Unsupported constant instruction: 0x"+u.toString(16));if(l[o++]!==11)throw new Error("Expected end after constant");return g},D=()=>{let u=l[o++],g;if(u===65){let c=p();g=()=>c}else if(u===66){let c=d();g=()=>c}else if(u===67){let c=Q();g=()=>c}else if(u===68){let c=i();g=()=>c}else if(u===35){let c=F();g=x=>x[c]}else throw new Error("Unsupported constant instruction: 0x"+u.toString(16));if(l[o++]!==11)throw new Error("Expected end after constant");return g},T=[],t=[],v=[],f=[],L=[],R=[],P=[],I=[],O=[],U=new Map,S=[],r=[],z=-1,o=8;if(l.slice(0,8).join(",")!=="0,97,115,109,1,0,0,0")throw new Error("Invalid file header");for(;o+5<l.length;){let u=l[o++],g=F(),c=o+g;if(u===0){let x=N();if(t.push([x,l.slice(o,c)]),x==="name"){let y=l[o++],E=o+F();if(y===1)for(let B=0,k=p();B<k&&o<E;B++)U.set(F(),N())}}else if(u===1)for(let x=0,y=F();x<y;x++){if(l[o++]!==96)throw new Error("Invalid function type");r.push([$(),$()])}else if(u===2)for(let x=0,y=F();x<y;x++){let E=N(),B=N(),k=l[o++];if(k===0)I.push([E,B,k,F()]);else if(k===1)I.push([E,B,k,l[o++],...M()]);else if(k===2)I.push([E,B,k,...M()]);else if(k===3)I.push([E,B,k,l[o++],l[o++]]);else throw new Error("Unsupported import type: "+k)}else if(u===3){let x=F();for(let y=0;y<x;y++)R.push(F())}else if(u===4)for(let x=0,y=F();x<y;x++)S.push([l[o++],...M()]);else if(u===5)for(let x=0,y=F();x<y;x++)O.push(M());else if(u===6)for(let x=0,y=F();x<y;x++){let E=l[o++],B=l[o++],k=D();P.push([E,B,k])}else if(u===7)for(let x=0,y=F();x<y;x++){let E=N(),B=l[o++],k=F();L.push([E,B,k])}else if(u===8)z=F();else if(u===9)for(let x=0,y=F();x<y;x++){let E=l[o++];if(E===0){let B=A(),k=[];for(let G=0,X=F();G<X;G++)k.push(F());f.push([B,k])}else throw new Error("Unsupported element kind: "+E)}else if(u===10)for(let x=0,y=F();x<y;x++){let E=F()+o,B=F(),k=[];for(let G=0;G<B;G++)k.push([F(),l[o++]]);T.push([k,o,E]),o=E}else if(u===11)for(let x=0,y=F();x<y;x++){let E=l[o++],B=E&2?F():0,k=E&1?0:A(),G=F();v.push([B,k,l.slice(o,o+=G)])}else throw new Error("Unsupported section type "+u);o=c}return{h:l,p:s,g:T,C:t,y:v,$:f,P:L,d:R,b:P,S:I,O,I:U,B:z,T:S,f:r}},Re=new Map,de=class{constructor(l){Re.set(this,tt(l instanceof Uint8Array?l:new Uint8Array(l instanceof ArrayBuffer?l:l.buffer)))}},ke=(l,s)=>{if(s===125||s===124)return+l;if(s===127)return l|0;if(s===126)return BigInt(l)&0xFFFFFFFFFFFFFFFFn;throw new Error("Unsupported cast to type "+s)},ye=(l,s)=>{if(s===125||s===124)return"+"+l;if(s===127)return l+"|0";if(s===126)return`BigInt(${l})&0xFFFFFFFFFFFFFFFFn`;throw new Error("Unsupported cast to type "+s)},me=(l,s)=>{if(s===124||s===127)return l;if(s===125)return`Math.fround(${l})`;if(s===126)return`l.lb(${l})`;throw new Error("Unsupported cast to type "+s)},n=new Uint16Array(256);n[1]=520;n[26]=521;n[32]=28;n[33]=25;n[34]=29;n[35]=28;n[36]=25;n[40]=61;n[41]=61;n[42]=61;n[43]=61;n[44]=61;n[45]=61;n[46]=61;n[47]=61;n[48]=61;n[49]=61;n[50]=61;n[51]=61;n[52]=61;n[53]=61;n[54]=58;n[55]=58;n[56]=58;n[57]=58;n[58]=58;n[59]=58;n[60]=58;n[61]=58;n[62]=58;n[63]=28;n[64]=29;n[69]=13;n[70]=78;n[71]=78;n[72]=78;n[73]=206;n[74]=78;n[75]=206;n[76]=78;n[77]=206;n[78]=78;n[79]=206;n[80]=13;n[81]=78;n[82]=78;n[83]=334;n[84]=78;n[85]=334;n[86]=78;n[87]=334;n[88]=78;n[89]=334;n[90]=78;n[91]=78;n[92]=78;n[93]=78;n[94]=78;n[95]=78;n[96]=78;n[97]=78;n[98]=78;n[99]=78;n[100]=78;n[101]=78;n[102]=78;n[103]=13;n[104]=13;n[105]=13;n[106]=14;n[107]=14;n[108]=14;n[109]=14;n[110]=142;n[111]=14;n[112]=142;n[113]=14;n[114]=14;n[115]=14;n[116]=14;n[117]=14;n[118]=14;n[119]=14;n[120]=14;n[121]=13;n[122]=13;n[123]=13;n[124]=14;n[125]=14;n[126]=14;n[127]=270;n[128]=14;n[129]=270;n[130]=14;n[131]=14;n[132]=14;n[133]=14;n[134]=1038;n[135]=1038;n[136]=1038;n[137]=1038;n[138]=1038;n[139]=13;n[140]=13;n[141]=13;n[142]=13;n[143]=13;n[144]=13;n[145]=13;n[146]=14;n[147]=14;n[148]=14;n[149]=14;n[150]=14;n[151]=14;n[152]=14;n[153]=13;n[154]=13;n[155]=13;n[156]=13;n[157]=13;n[158]=13;n[159]=13;n[160]=14;n[161]=14;n[162]=14;n[163]=14;n[164]=14;n[165]=14;n[166]=14;n[167]=13;n[168]=13;n[169]=13;n[170]=13;n[171]=13;n[172]=13;n[173]=13;n[174]=13;n[175]=13;n[176]=13;n[177]=13;n[178]=525;n[179]=653;n[180]=269;n[181]=13;n[182]=525;n[183]=525;n[184]=653;n[185]=269;n[186]=13;n[187]=525;n[188]=13;n[189]=13;n[190]=13;n[191]=13;n[192]=13;n[193]=13;n[194]=13;n[195]=13;n[196]=13;var rt=new Int32Array(65536),nt=et(),lt=(l,s,F,p,d,Q,i,$,N)=>{let M=()=>{let e=0,h=0,a;do a=c[q++],e|=(a&127)<<h,h+=7;while(a&128);return e>>>0},A=()=>{let e=0,h=0,a;do a=c[q++],e|=(a&127)<<h,h+=7;while(a&128);return h<32&&a&64?e|-1<<h:e},D=()=>{let e=0n,h=0n,a;do a=c[q++],e|=BigInt(a&127)<<h,h+=7n;while(a&128);return h<64&&a&64?e|~0n<<h:e},T=()=>{let e=c[q];if(e===64)return q++,[0,0];if(e&64)return q++,[0,1];let h=M(),[a,m]=k[h];return[a.length,m.length]},t=rt,v=[],f=0,L=[],R=0,P=e=>{for(;R<e;)ie.push("s"+ ++R);return"s"+e},I=(e,h,a)=>`c.${e}[${r(h)}${a?"+"+a:""}]`,O=(e,h,a,m)=>`c.${e}[${r(h)}${a?"+"+a:""}]=${m}`,U=(e,h,a)=>`c.dv.get${e}(${r(h)}${a?"+"+a:""},1)`,S=(e,h,a,m)=>`c.dv.set${e}(${r(h)}${a?"+"+a:""},${m},1)`,r=e=>e<0?P(-e):`(${z(e)})`,z=e=>{let h=t[e];switch(h&255){case 0:return`l.lp(${r(t[e+1])})`;case 1:return`l.lq(${r(t[e+1])})`;case 2:return`l.lp(${r(t[e+1])})`;case 3:return`l.lq(${r(t[e+1])})`;case 4:return`l.lr(${r(t[e+1])})`;case 5:return`l.ls(${r(t[e+1])})`;case 6:return`l.lr(${r(t[e+1])})`;case 7:return`l.ls(${r(t[e+1])})`;case 10:return`c.u8.copyWithin(${r(t[e+1])},T=${r(t[e+2])},T+${r(t[e+3])})`;case 11:return`c.u8.fill(${r(t[e+1])},T=${r(t[e+2])},T+${r(t[e+3])})`;case 16:{let a=h>>8&65535,m=t[e+a+1],[j,C]=s[m],W=[];for(let H=1;H<=a;H++)W.push(r(t[e+H]));let ee=`f[${m}](${W})`;if(C.length<2)return ee;let J=t[e+a+2],te=[];for(let H=0;H<C.length;H++)te.push(P(J+H));return`[${te}]=${ee}`}case 17:{let a=h>>8&65535,m=t[e+a+2],[j,C]=k[m],W=[],ee=r(t[e+1]);for(let V=1;V<=a;V++)W.push(r(t[e+V+1]));let J=`t[${ee}](${W})`;if(C.length<2)return J;let te=t[e+a+3],H=[];for(let V=0;V<C.length;V++)H.push(P(te+V));return`[${H}]=${J}`}case 27:return`${r(t[e+1])}?${r(t[e+2])}:${r(t[e+3])}`;case 32:return re[t[e+1]];case 33:case 34:return`${re[t[e+2]]}=${r(t[e+1])}`;case 35:return`g[${t[e+1]}]`;case 36:return`g[${t[e+2]}]=${r(t[e+1])}`;case 40:return U("Int32",t[e+1],t[e+2]);case 245:return U("Uint32",t[e+1],t[e+2]);case 41:return U("BigUint64",t[e+1],t[e+2]);case 246:return U("BigInt64",t[e+1],t[e+2]);case 42:return U("Float32",t[e+1],t[e+2]);case 43:return U("Float64",t[e+1],t[e+2]);case 44:return I("i8",t[e+1],t[e+2]);case 45:return I("u8",t[e+1],t[e+2]);case 46:return U("Int16",t[e+1],t[e+2]);case 47:return U("Uint16",t[e+1],t[e+2]);case 48:return`BigInt(${I("i8",t[e+1],t[e+2])})&0xFFFFFFFFFFFFFFFFn`;case 49:return`BigInt(${I("u8",t[e+1],t[e+2])})`;case 50:return`BigInt(${U("Int16",t[e+1],t[e+2])})&0xFFFFFFFFFFFFFFFFn`;case 51:return`BigInt(${U("Uint16",t[e+1],t[e+2])})`;case 52:return`BigInt(${U("Int32",t[e+1],t[e+2])})&0xFFFFFFFFFFFFFFFFn`;case 53:return`BigInt(${U("Uint32",t[e+1],t[e+2])})`;case 54:return S("Int32",t[e+1],t[e+3],r(t[e+2]));case 55:return S("BigUint64",t[e+1],t[e+3],r(t[e+2]));case 56:return S("Float32",t[e+1],t[e+3],r(t[e+2]));case 57:return S("Float64",t[e+1],t[e+3],r(t[e+2]));case 58:return O("u8",t[e+1],t[e+3],r(t[e+2]));case 59:return S("Int16",t[e+1],t[e+3],r(t[e+2]));case 60:return O("u8",t[e+1],t[e+3],`Number(${r(t[e+2])}&255n)`);case 61:return S("Int16",t[e+1],t[e+3],`Number(${r(t[e+2])}&65535n)`);case 62:return S("Int32",t[e+1],t[e+3],`Number(${r(t[e+2])}&0xFFFFFFFFn)`);case 63:{if(t[e+1])throw new Error("Unsupported non-zero memory index");return"c.pc"}case 64:{if(t[e+2])throw new Error("Unsupported non-zero memory index");return`c.pg(${r(t[e+1])})`}case 65:return t[e+1]+"";case 66:return(L[t[e+1]]&0xFFFFFFFFFFFFFFFFn)+"n";case 67:return x.getFloat32(t[e+1],!0)+"";case 68:return x.getFloat64(t[e+1],!0)+"";case 240:return r(t[e+1]);case 241:return`!${r(t[e+1])}`;case 242:return`${r(t[e+1])}?1:0`;case 243:return`${r(t[e+1])}>>>0`;case 244:return`l.lb(${r(t[e+1])})`;case 69:case 80:return`${r(t[e+1])}?0:1`;case 70:case 81:case 91:case 97:return`${r(t[e+1])}===${r(t[e+2])}`;case 71:case 82:case 92:case 98:return`${r(t[e+1])}!==${r(t[e+2])}`;case 72:case 73:case 83:case 84:case 93:case 99:return`${r(t[e+1])}<${r(t[e+2])}`;case 74:case 75:case 85:case 86:case 94:case 100:return`${r(t[e+1])}>${r(t[e+2])}`;case 76:case 77:case 87:case 88:case 95:case 101:return`${r(t[e+1])}<=${r(t[e+2])}`;case 78:case 79:case 89:case 90:case 96:case 102:return`${r(t[e+1])}>=${r(t[e+2])}`;case 103:return`Math.clz32(${r(t[e+1])})`;case 104:return`l.lk(${r(t[e+1])})`;case 105:return`l.ll(${r(t[e+1])})`;case 106:return`${r(t[e+1])}+${r(t[e+2])}|0`;case 107:return`${r(t[e+1])}-${r(t[e+2])}|0`;case 108:return`Math.imul(${r(t[e+1])},${r(t[e+2])})`;case 110:case 109:return`${r(t[e+1])}/${r(t[e+2])}|0`;case 112:case 111:return`${r(t[e+1])}%${r(t[e+2])}|0`;case 113:return`${r(t[e+1])}&${r(t[e+2])}`;case 114:return`${r(t[e+1])}|${r(t[e+2])}`;case 115:return`${r(t[e+1])}^${r(t[e+2])}`;case 116:return`${r(t[e+1])}<<${r(t[e+2])}`;case 117:return`${r(t[e+1])}>>${r(t[e+2])}`;case 118:return`${r(t[e+1])}>>>${r(t[e+2])}|0`;case 119:return`l.lg(${r(t[e+1])},${r(t[e+2])})`;case 120:return`l.lh(${r(t[e+1])},${r(t[e+2])})`;case 121:return`l.lm(${r(t[e+1])})`;case 122:return`l.ln(${r(t[e+1])})`;case 123:return`l.lo(${r(t[e+1])})`;case 124:return`(${r(t[e+1])}+${r(t[e+2])})&0xFFFFFFFFFFFFFFFFn`;case 125:return`(${r(t[e+1])}-${r(t[e+2])})&0xFFFFFFFFFFFFFFFFn`;case 126:return`(${r(t[e+1])}*${r(t[e+2])})&0xFFFFFFFFFFFFFFFFn`;case 127:return`${r(t[e+1])}/${r(t[e+2])}&0xFFFFFFFFFFFFFFFFn`;case 128:return`${r(t[e+1])}/${r(t[e+2])}`;case 129:return`${r(t[e+1])}%${r(t[e+2])}&0xFFFFFFFFFFFFFFFFn`;case 130:return`${r(t[e+1])}%${r(t[e+2])}`;case 131:return`${r(t[e+1])}&${r(t[e+2])}`;case 132:return`${r(t[e+1])}|${r(t[e+2])}`;case 133:return`${r(t[e+1])}^${r(t[e+2])}`;case 134:return`${r(t[e+1])}<<${r(t[e+2])}&0xFFFFFFFFFFFFFFFFn`;case 135:return`l.lb(${r(t[e+1])})>>${r(t[e+2])}&0xFFFFFFFFFFFFFFFFn`;case 136:return`${r(t[e+1])}>>${r(t[e+2])}`;case 137:return`l.li(${r(t[e+1])},${r(t[e+2])})`;case 138:return`l.lj(${r(t[e+1])},${r(t[e+2])})`;case 139:case 153:return`Math.abs(${r(t[e+1])})`;case 140:case 154:return`-${r(t[e+1])}`;case 141:case 155:return`Math.ceil(${r(t[e+1])})`;case 142:case 156:return`Math.floor(${r(t[e+1])})`;case 143:case 157:return`Math.trunc(${r(t[e+1])})`;case 144:case 158:return`Math.round(${r(t[e+1])})`;case 145:case 159:return`Math.sqrt(${r(t[e+1])})`;case 146:case 160:return`${r(t[e+1])}+${r(t[e+2])}`;case 147:case 161:return`${r(t[e+1])}-${r(t[e+2])}`;case 148:case 162:return`${r(t[e+1])}*${r(t[e+2])}`;case 149:case 163:return`${r(t[e+1])}/${r(t[e+2])}`;case 150:case 164:return`Math.min(${r(t[e+1])},${r(t[e+2])})`;case 151:case 165:return`Math.max(${r(t[e+1])},${r(t[e+2])})`;case 152:case 166:return`l.la(${r(t[e+1])},${r(t[e+2])})`;case 167:return`Number(${r(t[e+1])}&0xFFFFFFFFn)|0`;case 168:case 169:case 170:case 171:return`Math.trunc(${r(t[e+1])})|0`;case 172:return`BigInt(${r(t[e+1])})`;case 173:return`BigInt(${r(t[e+1])}>>>0)`;case 174:case 175:case 176:case 177:return`BigInt(Math.trunc(${r(t[e+1])}))&0xFFFFFFFFFFFFFFFFn`;case 180:case 181:case 186:case 185:return`Number(${r(t[e+1])})`;case 188:return`l.lc(${r(t[e+1])})`;case 189:return`l.le(${r(t[e+1])})`;case 190:return`l.ld(${r(t[e+1])})`;case 191:return`l.lf(${r(t[e+1])})`;case 192:return`${r(t[e+1])}<<24>>24`;case 193:return`${r(t[e+1])}<<16>>16`;case 194:return`l.lt(${r(t[e+1])})`;case 195:return`l.lu(${r(t[e+1])})`;case 196:return`l.lv(${r(t[e+1])})`;default:throw"Internal error"}},o=(e,h)=>{let a=f;return t[a]=e,f+=h,a},u=(e,h=w)=>{v.push(f),t[f++]=e|256|h<<24,t[f++]=-h},g=(e=!1)=>{let h=[],a=v.length-1,m=W=>{let ee=t[W]>>8&65535;for(let J=ee-1;a>=0&&J>=0;J--){let te=-t[W+J+1],H=!1;for(let V=a;V>=0;V--){let ce=v[V];if(ce===null)continue;let Pe=t[ce];if(Pe>>>24===te){v[V]=null,H||(a=V-1),t[W+J+1]=m(ce);break}let Ee=Pe&255;if(Ee!==243&&Ee!==244)break;H=!0}}return nt(t,L,o,W)},j;for(;a>=0;){let W=a--;(j=v[W])!==null&&(v[W]=m(j))}let C;for(a=v.length-1,e&&(a>=0&&(j=v[a])!==null&&t[j]>>>24===w?(C=z(j),a--):C="s"+w,w--);a>=0;)if((j=v[a--])!==null){let W=t[j]>>>24;h.push(`${W?P(W)+"=":""}${z(j)};`)}return _+=h.reverse().join(""),L.length=0,v.length=0,f=0,C},{h:c,p:x,g:y,d:E,I:B,f:k}=i,[G,X]=k[E[$]],[K,Le,We]=y[$],re=[],be=G.length;for(let e=0;e<be;e++)re.push("a"+e);let ie=["L","T"];for(let[e,h]of K)for(let a=0;a<e;a++){let m="t"+ie.length;re.push(m),ie.push(m+(h===126?"=0n":"=0"))}let Y=256,ue=e=>{let h=b.length<Y;h?_+=`b${b.length}:`:b.length===Y&&(_+=`L=1;b${b.length}:for(;;){switch(L){case 1:`,oe=2);let a=h?-1:oe++,m=h?-1:e!==0?oe++:0,[j,C]=T();return b.push({s:j,a:!1,r:e,c:a,Q:m,o:w-j,l:C}),m},Z=(e=b.length-M()-1)=>{if(b[b.length-1].a)return;let h=b[e];if(e)if(h.r===1){if(w>h.o+h.s)for(let a=1;a<=h.s;a++)_+=`s${h.o+a}=s${w-h.s+a};`;_+=e<Y?`continue b${e};`:`L=${h.Q};continue;`}else{if(w>h.o+h.l)for(let a=1;a<=h.l;a++)_+=`s${h.o+a}=s${w-h.l+a};`;_+=e<=Y?`break b${e};`:`L=${h.c};continue;`}else if(h.l===1)_+=`return s${w};`;else if(h.l>1){let a=[];for(let m=h.l-1;m>=0;m--)a.push("s"+(w-m));_+=`return[${a}];`}else _+="return;"},b=[{s:0,a:!1,r:0,c:-1,Q:-1,o:0,l:X.length}],w=0,q=Le,oe=0,_="b0:{";for(;q<We;){let e=c[q++],h=n[e];if(h&8)if(b[b.length-1].a)h&32&&q++,h&16&&M();else{let a=h&3;if(h&1024&&(v.push(f),t[f++]=66|w+1<<24,t[f++]=L.length,L.push(63n),v.push(f),t[f++]=643|w<<24,t[f++]=-w,t[f++]=-(w+1)),w-=a,h&384)for(let m=0;m<a;m++)u(h&128?243:244,w+m+1);if(!(h&512)){h&32&&q++,v.push(f),h&4&&(e|=w+1<<24),t[f++]=e|a<<8;for(let m=1;m<=a;m++)t[f++]=-(w+m);h&16&&(t[f++]=M())}h&4&&w++,h&64&&u(242)}else switch(e){case 0:{let a=b[b.length-1];g(),a.a||(_+='"unreachable"();',a.a=!0);break}case 2:g(),ue(0)<0&&(_+="{");break;case 3:{g();let a=ue(1);_+=a<0?"for(;;){":`case ${a}:`;break}case 4:{b[b.length-1].a||u(b.length<Y?240:241);let a=g(!0),m=ue(2);_+=m<0?`if(${a}){`:`if(${a}){L=${m};continue}`;break}case 5:{g();let a=b.length-1,m=b[a];Z(a),_+=a<Y?"}else{":`case ${m.Q}:`,m.r=0,w=m.o+m.s,m.a=!1;break}case 11:{g();let a=b.length-1,m=b[a];m.r!==2&&(m.Q=0),m.r=0,Z(a),a<Y?_+="}":(m.Q&&(_+=`case ${m.Q}:`),_+=`case ${m.c}:`,a==Y&&(_+="}break}")),w=m.o+m.l,b.pop();break}case 12:g(),Z(),b[b.length-1].a=!0;break;case 13:{b[b.length-1].a||u(240);let a=g(!0);_+=`if(${a}){`,Z(),_+="}";break}case 14:{let a=g(!0);_+=`switch(${a}){`;for(let m=0,j=M();m<j;m++)_+=`case ${m}:`,Z();_+="default:",Z(),_+="}",b[b.length-1].a=!0;break}case 15:g(),Z(0),b[b.length-1].a=!0;break;case 16:{let a=M();if(!b[b.length-1].a){let[m,j]=s[a];w-=m.length,v.push(f),j.length===1&&(e|=w+1<<24),t[f++]=e|m.length<<8;for(let C=1;C<=m.length;C++)t[f++]=-(w+C);t[f++]=a,j.length>1&&(t[f++]=w+1),w+=j.length}break}case 17:{let a=M(),m=M();if(m!==0)throw new Error("Unsupported table index: "+m);if(!b[b.length-1].a){let[j,C]=k[a];w-=j.length+1,v.push(f),C.length===1&&(e|=w+1<<24),t[f++]=e|j.length<<8,t[f++]=-(w+j.length+1);for(let W=1;W<=j.length;W++)t[f++]=-(w+W);t[f++]=a,C.length>1&&(t[f++]=w+1),w+=C.length}break}case 27:{b[b.length-1].a||(u(240),w-=2,v.push(f),t[f++]=e|768|w<<24,t[f++]=-(w+2),t[f++]=-w,t[f++]=-(w+1));break}case 65:b[b.length-1].a?A():(v.push(f),t[f++]=e|++w<<24,t[f++]=A());break;case 66:b[b.length-1].a?D():(v.push(f),t[f++]=e|++w<<24,t[f++]=L.length,L.push(D()));break;case 67:b[b.length-1].a||(v.push(f),t[f++]=e|++w<<24,t[f++]=q),q+=4;break;case 68:b[b.length-1].a||(v.push(f),t[f++]=e|++w<<24,t[f++]=q),q+=8;break;case 252:if(e=c[q++],e<=7)b[b.length-1].a||u(e);else if(e===10){if(c[q++]||c[q++])throw new Error("Unsupported non-zero memory index");b[b.length-1].a||(w-=2,v.push(f),t[f++]=e|768|w<<24,t[f++]=-w,t[f++]=-(w+1),t[f++]=-(w+2))}else if(e===11){if(c[q++])throw new Error("Unsupported non-zero memory index");b[b.length-1].a||(w-=2,v.push(f),t[f++]=e|768|w<<24,t[f++]=-(w+1),t[f++]=-w,t[f++]=-(w+2))}else throw new Error("Unsupported instruction: 0xFC"+e.toString(16).padStart(2,"0"));break;default:throw new Error("Unsupported instruction: 0x"+e.toString(16).padStart(2,"0"))}}if(R>255)throw new Error("Deep stacks are not supported");let ze=JSON.stringify("wasm:"+(B.get(N)||`function[${$}]`)),Ce=`return{${ze}(${re.slice(0,be)}){var ${ie};${_}}}[${ze}]`;return new Function("f","c","t","g","l",Ce)(l,Q,F,p,d)},Ne=class{},Te=class{},st=class{},it=class{},_e=(l,s,F=new Uint8Array(s))=>{l.i8=new Int8Array(s),l.u8=F,l.dv=new DataView(s)},Ft=(l,s)=>{let F=l.pc;if(s>>>=0,F+s>l.m)return-1;if(s){let p=l.w.buffer=new ArrayBuffer((l.pc+=s)<<16),d=new Uint8Array(p);d.set(l.u8),_e(l,p,d)}return F},pe=class{constructor(l,s){let F=Re.get(l),{g:p,y:d,$:Q,P:i,d:$,b:N,S:M,O:A,B:D,T,f:t}=F,v=this.exports={},f=[],L=[],R=[],P=[],I=[],O=Ze(),U=new it,S=U.w=new Te;if(A.length>1)throw new Error(`Unsupported memory count: ${A.length}`);if(A.length>0){let[z,o]=A[0];U.m=Math.min(o,65535),U.pc=z}else U.m=0,U.pc=0;let r=U.pg=z=>Ft(U,z);S.grow=z=>{let o=r(z);if(o<0)throw new RangeError("Cannot grow past limit");return o},_e(U,S.buffer=new ArrayBuffer(U.pc<<16));for(let[z,o,u]of d){if(z!==0)throw new Error(`Invalid memory index: ${z}`);U.u8.set(u,o)}for(let z of M){let[o,u,g,c]=z,x=s[o][u];if(g===0){let y=t[c],[E,B]=y,k=[],G=[];for(let K=0;K<E.length;K++)k.push("a"+K),G.push(me("a"+K,E[K]));let X=`f(${G})`;if(B.length===1)X="return "+ye(X,B[0]);else if(B.length>1){X=`let r=${X};`;for(let K=0;K<B.length;K++)X+=`r[${K}]=${ye(`r[${K}]`,B[K])};`;X+="return r"}f.push(new Function("f","l",`return(${k})=>{${X}}`)(x,O)),L.push(y)}else if(g===3)R.push(ke(x,c)),P.push(c);else throw new Error(`Unsupported import type ${g} for "${o}"."${u}"`)}for(let[z,o,u]of N)R.push(u(R)),P.push(z);for(let z=0;z<p.length;z++){let o=f.length;L.push(t[$[z]]),f.push((...u)=>(f[o]=lt(f,L,I[0],R,O,U,F,z,o))(...u))}for(let[z,o,u]of T){let g=[];for(let c=0;c<o;c++)g.push(null);I.push(g)}for(let[z,o]of Q){if(I.length!==1)throw new Error("Multiple tables are unsupported");let u=I[0];for(let g of o)u[z++]=(...c)=>f[g](...c)}for(let[z,o,u]of i)if(o===0){let[g,c]=L[u],x=[],y=[];for(let B=0;B<g.length;B++)x.push("a"+B),y.push(ye("a"+B,g[B]));let E=`f[i](${y})`;if(c.length===1)E="return "+me(E,c[0]);else if(c.length>1){E=`let r=${E};`;for(let B=0;B<c.length;B++)E+=`r[${B}]=${me(`r[${B}]`,c[B])};`;E+="return r"}v[z]=new Function("f","i","l",`return(${x})=>{${E}}`)(f,u,O)}else if(o===2)v[z]=S;else if(o===3){let g=new Ne,c=P[u];Object.defineProperty(g,"value",{get:()=>R[u],set:x=>{R[u]=ke(x,c)}}),v[z]=g}else throw new Error(`Unsupported export type ${o} for "${z}"`);D>=0&&f[D]()}},at=async(l,s)=>{if(l instanceof de)return new pe(l,s);let F=new de(l);return{module:F,instance:new pe(F,s)}},je={Global:Ne,Instance:pe,instantiate:at,Memory:Te,Module:de,Table:st};(polywasm===1||!globalThis.WebAssembly&&polywasm!==0)&&(globalThis.WebAssembly=je,postMessage({K:"slow"}));var ut=async([l,s])=>{let F={wasmURL:URL.createObjectURL(new Blob([s],{type:"application/wasm"}))};if(l){let[p,d,Q]=l.split(".").map($=>+$);p===0&&(d===5&&Q>=20||d>=6&&d<=7||d===8&&Q<=34)||(F.worker=!1)}else F.worker=!1;return esbuild.startService?await esbuild.startService(F):(await esbuild.initialize(F),esbuild)},xe=(l,s,F)=>{if(l.formatMessages)return l.formatMessages(s,F);let p=(d,Q,i)=>{let $=d==="note"?"   ":"\x1B[1m > ";if(i&&($+=`${i.file}:${i.line}:${i.column}: `),$+=d==="error"?"\x1B[31merror:\x1B[1m ":d==="warning"?"\x1B[35mwarning:\x1B[1m ":"\x1B[1mnote:\x1B[0m ",$+=Q+`\x1B[0m
`,i){let{line:N,column:M,length:A,lineText:D}=i,T=N.toString().padStart(5);$+=`\x1B[37m${T} \u2502 ${D.slice(0,M)}\x1B[32m${D.slice(M,M+A)}\x1B[37m${D.slice(M+A)}
${" ".repeat(T.length)} \u2575 \x1B[32m${" ".repeat(M)}${A>1?"~".repeat(A):"^"}\x1B[0m
`}return $};return Promise.resolve(s.map(d=>{let Q=p(F.kind,d.text,d.location);for(let i of d.notes||[])Q+=p("note",i.text,i.location);return Q+`
`}))},we=l=>typeof l=="object"&&l?l instanceof EvalError?new Function("return "+l.message)():Array.isArray(l)?l.map(we):Object.fromEntries(Object.entries(l).map(([s,F])=>[s,we(F)])):l;onmessage=l=>{ut(l.data).then(s=>{onmessage=F=>{let p=(M,A)=>{let D=A&&A.errors,T=A&&A.warnings;!D&&!T&&(D=[{text:A+""}]),Promise.all([D?xe(s,D,{kind:"error",color:N}):[],T?xe(s,T,{kind:"warning",color:N}):[]]).then(([t,v])=>{M({N:[...t,...v].join("")})})},d=(M,A)=>{for(let D of M){let T=A.replace(D,"");if(T!==A)A=T;else{let t=D.replace(/\x1B\[[^m]*m/g,"");t!==D&&(A=A.replace(t,""))}}return M.join("")+A},Q=(M,A)=>{M.length?xe(s,M,{kind:"warning",color:N}).then(D=>A(d(D,le))):A(le)},i=we(F.data),$=postMessage,N=!0;try{i.Z==="transform"?(i.W.color===!1&&(N=!1),ge({}),s.transform(i.Y,i.W).then(({code:M,map:A,js:D,jsSourceMap:T,warnings:t,mangleCache:v,legalComments:f})=>Q(t,L=>$({ce:M!=null?M:D,ue:A!=null?A:T,X:v,de:f,N:L})),M=>p($,M))):i.Z==="build"&&(i.W.color===!1&&(N=!1),ge(i.Y),s.build(i.W).then(({warnings:M,outputFiles:A,metafile:D,mangleCache:T})=>Q(M,t=>$({fe:A,pe:D,X:T,N:t})),M=>p($,M)))}catch(M){p($,M)}},postMessage({K:"success"})}).catch(s=>{console.error(s),postMessage({K:"failure",me:s+""})})};

var Me=["conditions","dropLabels","mainFields","resolveExtensions","target"];function q(e,r,t){let o=e.trimStart(),a=/^{|^\/[*/]/.test(o),i;if(!o)return t&&(t.innerHTML=""),{};if(a)i=Ke(e);else{let p=n=>{if(i[n]!==void 0)try{i[n]=new RegExp(i[n]+"")}catch(l){throw n=n.replace(/[A-Z]/g,h=>"-"+h.toLowerCase()),new Error(`Invalid regular expression for "--${n}=": ${l.message}`)}},c=n=>{if(i[n]!==void 0)try{i[n]=+i[n]}catch(l){throw n=n.replace(/[A-Z]/g,h=>"-"+h.toLowerCase()),new Error(`Invalid number for "--${n}=": ${l.message}`)}};i=qe(e,r),c("logLimit"),c("lineLimit"),p("mangleProps"),p("reserveProps");for(let n of Me)i[n]!==void 0&&(i[n]=(i[n]+"").split(","));let u=i.supported;if(typeof u=="object"&&u!==null)for(let n in u)u[n]==="true"?u[n]=!0:u[n]==="false"&&(u[n]=!1)}let s=i.tsconfigRaw;if(s!==void 0)try{s=JSON.parse(s)}catch{}return t&&(t.innerHTML="",ze(t,a,i,s,e),Ve(t,a,i,s)),i}function ze(e,r,t,o,a){if(o===void 0&&(o={}),typeof o!="object")return;let i=o.compilerOptions;if(i===void 0&&(i={}),typeof i=="object"&&(t.loader==="ts"||t.loader==="tsx")&&typeof i.experimentalDecorators!="boolean"){let s={...t,tsconfigRaw:{...o,compilerOptions:{...i,experimentalDecorators:!0}}},p;if(r)p=Oe(s);else if(t.tsconfigRaw===void 0)p=[a,/\n/.test(a)?`
`:" ",le({tsconfigRaw:s.tsconfigRaw})].join("");else try{p=le(s)}catch{}if(p!==void 0){let c=document.createElement("a");c.href="javascript:void 0",c.textContent="Enable TS experimental decorators",c.onclick=()=>{let u=e.parentElement.querySelector("textarea");e.innerHTML="",u.value=p,u.dispatchEvent(new Event("input"))},e.append(c," ")}}}function Ve(e,r,t,o){let a,i=document.createElement("a");if(r)try{a=le(t),i.textContent="Switch to CLI syntax"}catch{}else a=Oe(o?{...t,tsconfigRaw:o}:t),i.textContent="Switch to JS syntax";a!==void 0&&(i.href="javascript:void 0",i.onclick=()=>{let s=e.parentElement.querySelector("textarea");e.innerHTML="",s.value=a,s.dispatchEvent(new Event("input"))},e.append(i))}function qe(e,r){let t=[],o=e.length,a=0,i=0,s=0;for(;s<o;){let n=s,l=a,h=s-i,f="",d=e[s];if(d===" "||d==="	"||d===`
`){s++,d===`
`&&(a++,i=s);continue}for(;s<o&&(d=e[s],!(d===" "||d==="	"||d===`
`));)if(s++,d==="\\"&&s<o)d=e[s++],d===`
`?(a++,i=s):f+=d;else if(d==="'"){let g=a,m=s-i-1;for(;s===o&&ae(e,"'",g,m,a,s-i),d=e[s++],d!=="'";){if(d==="\\"&&s<o&&e[s]!=="'"&&(d=e[s++],d===`
`)){a++,i=s;continue}d===`
`&&(a++,i=s),f+=d}}else if(d==='"'){let g=a,m=s-i-1;for(;s===o&&ae(e,'"',g,m,a,s-i),d=e[s++],d!=='"';){if(d==="\\"&&s<o&&(d=e[s++],d===`
`)){a++,i=s;continue}d===`
`&&(a++,i=s),f+=d}}else f+=d;t.push({L:f,E:l,k:h,q:s-n})}let p=[],c=Object.create(null),u=(n,l)=>(n!==n.toLowerCase()&&v(e,"Invalid CLI-style flag: "+JSON.stringify("--"+n),l.E,l.k,n.length+2),n.replace(/-(\w)/g,(h,f)=>f.toUpperCase()));for(let{L:n,...l}of t){let h=n.indexOf("=");if(n.startsWith("--")){let f=n.indexOf(":");if(f>=0&&h<0){let d=u(n.slice(2,f),l),g=n.slice(f+1);(!(d in c)||!Array.isArray(c[d]))&&(c[d]=[]),c[d].push(g)}else if(f>=0&&f<h){let d=u(n.slice(2,f),l),g=n.slice(f+1,h),m=n.slice(h+1);(!(d in c)||typeof c[d]!="object"||Array.isArray(c[d]))&&(c[d]=Object.create(null)),c[d][g]=m}else if(h>=0){let d=n.slice(h+1);c[u(n.slice(2,h),l)]=d==="true"?!0:d==="false"?!1:d}else c[u(n.slice(2),l)]=!0}else n.startsWith("-")||r===0?v(e,'All CLI-style flags must start with "--"',l.E,l.k,l.q):(c.entryPoints=p,p.push(h<0?n:{in:n.slice(h+1),out:n.slice(0,h)}))}return p.length&&(c.entryPoints=p),c}function Ke(e){let r=()=>{let f=l.v===13?"string":(l.v===10?"identifier ":"")+JSON.stringify(l.L);return v(e,`Unexpected ${f} in ${s}`,l.E,l.k,l.L.length)},t=(f,d,g)=>v(e,`Expected "${d}" after ${g} in ${s}`,f.E,f.k+f.L.length,0,"",0,0,0,d),o=(f=0)=>{for(;n<p;){let d=c,g=n-u,m=e[n];if(m===`
`){c++,u=++n;continue}if(m===" "||m==="	"){n++;continue}if(m==="/"){let L=n++;if(n<p&&e[n]==="/"){for(n++;n<p&&e[n]!==`
`;)n++;continue}if(n<p&&e[n]==="*"){for(n++;;)if(n===p&&v(e,'Expected "*/" to terminate multi-line comment',c,n-u,0,"The multi-line comment starts here:",d,g,2,"*/"),m=e[n++],m===`
`)c++,u=n;else if(m==="*"&&n<p&&e[n]==="/"){n++;break}continue}let x=0;for(;(n===p||e[n]===`
`)&&(x?v(e,'Expected "]" to terminate character class',c,n-u,0,"The character class starts here:",c,x-u,1,"]"):v(e,'Expected "/" to terminate regular expression',c,n-u,0,"The regular expression starts here:",d,g,1,"/")),m=e[n++],!(m==="/"&&!x);)m==="]"&&x?x=0:m==="["?x=n-1:m==="\\"&&n<p&&e[n]!==`
`&&n++;for(;n<p&&/\w/.test(e[n]);)n++;let T=e.slice(L,n),E;try{E=(0,eval)(T)}catch{v(e,`Invalid regular expression in ${s}`,d,g,n-L)}l={E:d,k:g,v:12,L:T,A:E};return}f&2&&v(e,`Expected end of file after ${s}`,c,n-u,0);let I="-,:[]{}()+".indexOf(m);if(I>=0){n++,l={E:d,k:g,v:I,L:m,A:m};return}if(m==="."||m>="0"&&m<="9"){let L=/^[\.\w]$/,x=n++;for(;n<p&&L.test(e[n]);)n++;let T=e.slice(x,n);if(!/\d/.test(T))n=x;else{let E=+T;E!==E&&v(e,`Invalid number "${T}" in ${s}`,d,g,n-x),l={E:d,k:g,v:12,L:T,A:E};return}}let w=/^[\w\$]$/;if(w.test(m)){let L=n++;for(;n<p&&w.test(e[n]);)n++;let x=e.slice(L,n),T=12,E=x;f&1?T=10:x==="null"?E=null:x==="true"?E=!0:x==="false"?E=!1:x==="undefined"?E=void 0:x==="Infinity"?E=1/0:x==="NaN"?E=NaN:x==="function"?T=11:T=10,l={E:d,k:g,v:T,L:x,A:E};return}if(m==='"'||m==="'"){let L=n++;for(;;)if((n===p||e[n]===`
`)&&ae(e,m,d,g,c,n-u),e[n]==="\\"&&n+1<p)n+=2,e[n-1]===`
`&&(c++,u=n);else if(e[n++]===m)break;let x=e.slice(L,n),T;try{T=(0,eval)(x)}catch{v(e,`Invalid string in ${s}`,d,g,n-L)}l={E:d,k:g,v:13,L:x,A:T};return}v(e,`Unexpected ${JSON.stringify(m)} in ${s}`,c,n-u,1)}f&2||v(e,`Unexpected end of file in ${s}`,c,n-u,0)},a=(f,d)=>{let g=/\}/g,m="";g.lastIndex=d;for(let I;I=g.exec(e);)try{let w=new Function("return {"+f+e.slice(d,I.index+1)+"}."+f);return n=I.index+1,w()}catch(w){m=": "+w.message}v(e,"Invalid function literal"+m,l.E,l.k,l.L.length)},i=()=>{if(l.v===5){let f=Object.create(null),d=Object.create(null);for(;o(1),l.v!==6;){l.v!==13&&l.v!==10&&r();let g=d[l.A];g&&v(e,`Duplicate key ${JSON.stringify(l.A)} in object literal`,l.E,l.k,l.L.length,`The original key ${JSON.stringify(l.A)} is here:`,g.E,g.k,g.L.length);let m=l,I=n,w;o(),l.v===7?w=a(m.A,I):(l.v!==2&&t(m,":","property "+JSON.stringify(m.A)),o(),l.v===11?w=a(m.A,I):w=i()),f[m.A]=w,d[m.A]=m;let L=l;if(o(),l.v===6)break;l.v!==1&&t(L,",","property "+JSON.stringify(m.A))}return f}if(l.v===3){let f=[],d=0;for(;o(),l.v!==4;)if(l.v!==1){f[d++]=i();let g=l;if(o(),l.v===4)break;l.v!==1&&t(g,",","array element")}else f.length=++d;return f}return l.v===12||l.v===13?l.A:l.v===9?(o(),+i()):l.v===0?(o(),-i()):r()},s="JSON5 value",p=e.length,c=0,u=0,n=0,l;o();let h=i();return o(2),h}function v(e,r,t,o,a,i="",s=0,p=0,c=0,u){let n=e.split(`
`),l=new Error(r);throw l.V={re:"<options>",E:t+1,k:o,q:a,oe:n[t],ae:u},i&&(l.le=[{L:i,V:{re:"<options>",E:s+1,k:p,q:c,oe:n[s]}}]),l}function ae(e,r,t,o,a,i){let s=r==='"'?"double":"single";v(e,`Failed to find the closing ${s} quote`,a,i,0,`The opening ${s} quote is here:`,t,o,1,r)}function le(e){let r=a=>/[ \t\n\\'"]/.test(a)?'"'+a.replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"':a,t=a=>a.replace(/[A-Z]/g,i=>"-"+i.toLowerCase()),o=[];for(let a in e){let i=t(a),s=e[a],p=typeof s;if(p==="string"||p==="boolean"||p==="number"||s===null)o.push(s===!0?"--"+i:`--${i}=${s}`);else if(Array.isArray(s))if(Me.includes(a))o.push(`--${i}=${s}`);else for(let c of s)o.push(a==="entryPoints"?typeof c=="object"&&c!==null&&typeof c.in=="string"&&typeof c.out=="string"?`${c.out}=${c.in}`:c:`--${i}:${c}`);else if(s instanceof RegExp)o.push(`--${i}=${s.source}`);else if(a==="tsconfigRaw")o.push(`--${i}=${JSON.stringify(s)}`);else if(p==="object"&&a!=="mangleCache"&&a!=="stdin")for(let c in s)o.push(`--${i}:${c}=${s[c]}`);else throw new Error("Not representable")}return o.map(r).join(" ")}function Oe(e){let r=(t,o,a=!0)=>{let i=typeof t;if(i==="string"){let c=t.replace(/\\/g,"\\\\").replace(/\n/g,"\\n"),u=c.split("'"),n=c.split('"');return n.length<u.length?'"'+n.join('\\"')+'"':"'"+u.join("\\'")+"'"}if(i==="boolean"||i==="number"||t instanceof RegExp)return t+"";let s=o+"  ";if(Array.isArray(t)){let c=t.every(n=>typeof n=="string"),u="[";for(let n of t)u+=u==="["?c?"":`
`+s:c?", ":s,u+=r(n,s,!1),c||(u+=`,
`);return u!=="["&&!c&&(u+=o),u+"]"}let p="{";for(let c in t){let u=t[c];p+=p==="{"?a?`
`+s:" ":a?s:", ",p+=`${/^[A-Za-z$_][A-Za-z0-9$_]*$/.test(c)?c:r(c,"")}: ${r(u,s)}`,a&&(p+=`,
`)}return p!=="{"&&(p+=a?o:" "),p+"}"};return r(e,"")}function j(e){let r=document.createElement("a");return r.className="underLink",r.href="javascript:void 0",r.target="_blank",r.textContent="Visualize this source map",r.onclick=()=>{let[t,o]=e(),a=`${t.length}\0${t}${o.length}\0${o}`;r.href="https://evanw.github.io/source-map-visualization/#"+btoa(a),setTimeout(()=>r.href="javascript:void 0")},r}function Ge(e){let r=/\/(\/)[#@] *sourceMappingURL=([^\s]+)/.exec(e);return r||(r=/\/(\*)[#@] *sourceMappingURL=((?:[^\s*]|\*[^/])+)(?:[^*]|\*[^/])*\*\//.exec(e)),r&&r[2]}function P(e,r,t){let o=Ge(r);if(t&&t.remove(),o&&o.startsWith("data:application/json;base64,")){let a;try{a=JSON.parse(atob(o.slice(29)))}catch{}a&&typeof a=="object"&&(t=j(()=>[r,JSON.stringify(a)]),e.append(t))}return t}var S=document.getElementById("outputResult"),G=document.createElement("textarea"),fe=document.createElement("textarea"),X=document.createElement("textarea"),me=document.createElement("textarea"),Z=document.createElement("textarea"),de=[],Ze=new TextEncoder,N,pe,ue=!1,Ce=e=>pe?pe.format(e):e+"",ce=e=>{let r=e.toFixed(1).split(".",2);return Ce(+r[0])+"."+r[1]},Xe=e=>e===1?"1 byte":e<1024?Ce(e)+" bytes":e<1024*1024?ce(e/1024)+" kb":e<1024*1024*1024?ce(e/(1024*1024))+" mb":ce(e/(1024*1024*1024))+" gb";C(G,!0);C(fe,!0);C(X,!0);C(me,!0);C(Z,!0);function b(e){document.body.style.paddingBottom=e.clientHeight+"px",e.style.height="0",e.style.height=e.scrollHeight+1+"px",document.body.style.paddingBottom="0"}function C(e,r){e.readOnly=r,e.spellcheck=!1,e.autocapitalize="off",e.autocomplete="off"}function Y(e){let r=`\x1B[31m\u2718 \x1B[41;31m[\x1B[41;97mERROR\x1B[41;31m]\x1B[0m \x1B[1m${e&&e.message||e}\x1B[0m`,t=e&&e.V,o=e&&e.le;if(t&&(r+=Ie(t)),o)for(let a of o)r+=`
  ${a.L}`,a.V&&(r+=Ie(a.V));return r}function Ie({re:e,E:r,k:t,q:o,oe:a,ae:i}){let p=a.length,c=o<2?"^":"~".repeat(o),u=`

    ${e}:${r}:${t}:
`;if(p>80){let n=Math.max(0,Math.min(t*2+o-80>>1,t-16,p-80)),l=a.slice(n,n+80);t=Math.max(0,t-n),o=Math.min(o,l.length-t),l.length>3&&n>0&&(l="..."+l.slice(3),t=Math.max(t,3)),l.length>3&&n+80<p&&(l=l.slice(0,l.length-3)+"...",o=Math.max(0,Math.min(o,l.length-3-t))),a=l}return u+=`\x1B[37m${r.toString().padStart(7)} \u2502 ${a.slice(0,t)}\x1B[32m${a.slice(t,t+o)}\x1B[37m${a.slice(t+o)}
`,i&&(u+=`        \u2502 ${" ".repeat(t)}\x1B[32m${c}\x1B[37m
`,c=i),u+=`        \u2575 ${" ".repeat(t)}\x1B[32m${c}\x1B[0m
`,u}function H(e,r,t){if(t!==void 0){let o=document.createElement("div");return e.textContent=t.replace(/\n$/,""),o.id=r,o.className="hasLabel",o.append(e),S.append(o),b(e),o}}function ge({ce:e,ue:r,X:t,de:o,N:a}){if(S.innerHTML="",H(G,"transformOutput",e),r?(H(Z,"sourceMap",r),N&&N.remove(),N=j(()=>[e||"",JSON.stringify(JSON.parse(r))]),Z.parentElement.append(N)):N=P(G.parentElement,e||"",N),t&&H(X,"transformMangleCache",JSON.stringify(t,null,2)),H(fe,"legalComments",o),a){let i=document.createElement("div");i.id="stderrLog",i.innerHTML=$e(a),S.append(i)}if(e===void 0&&!a){let i=document.createElement("div");i.id="outputStatus",i.textContent="(no output)",S.append(i)}}function he({fe:e,pe:r,X:t,N:o},a){if(S.innerHTML="",de.length=0,e){e.sort((i,s)=>+(i.path>s.path)-+(i.path<s.path));for(let i of e){let s=document.createElement("div"),p=document.createElement("div"),c=document.createElement("span"),u=document.createElement("textarea");if(p.className="outputPath",p.textContent=i.path.replace(/^\//,""),c.textContent=" ("+Xe(Ze.encode(i.text).length)+")",p.append(c),u.readOnly=!0,u.value=i.text.replace(/\n$/,""),C(u,!0),s.className="buildOutput hasLabel",s.append(u),i.path.endsWith(".map")){for(let n of e)if(i.path===n.path+".map"){s.append(j(()=>[n.text,JSON.stringify(JSON.parse(i.text))]));break}}else P(s,i.text,void 0);S.append(p,s),de.push(u),b(u)}}if(o){let i=document.createElement("div");i.id="stderrLog",i.innerHTML=$e(o),S.append(i)}if((!e||!e.length)&&!o){let i=document.createElement("div");i.id="outputStatus",i.textContent=a?"(no output)":"(no entry points)",S.append(i)}if(t&&H(X,"mangleCache",JSON.stringify(t,null,2)),r){let i=H(me,"metafile",JSON.stringify(r,null,2)),s=document.createElement("a");s.className="underLink",s.href="javascript:void 0",s.target="_blank",s.textContent="Analyze this metafile",s.onclick=()=>{s.href="/analyze/#"+btoa(JSON.stringify(r)),setTimeout(()=>s.href="javascript:void 0")},i.append(s)}}function U(e){e&&(ue=!1),!ue&&(S.innerHTML=`<span id="outputStatus">Loading${e?" version "+e:""}...</span>`)}function Be(e){ue=!0,S.innerHTML="";let r=document.createElement("div");r.className="problem",r.innerHTML=`\u274C Failed to load esbuild: ${e}`,S.append(r)}function $e(e){return"<span>"+e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\033\[([^m]*)m/g,(r,t)=>{switch(t){case"1":return'</span><span class="color-bold">';case"31":return'</span><span class="color-red">';case"32":return'</span><span class="color-green">';case"33":return'</span><span class="color-yellow">';case"35":return'</span><span class="color-magenta">';case"37":return'</span><span class="color-dim">';case"41;31":return'</span><span class="bg-red color-red">';case"41;97":return'</span><span class="bg-red color-white">';case"43;33":return'</span><span class="bg-yellow color-yellow">';case"43;30":return'</span><span class="bg-yellow color-black">';case"0":return"</span><span>"}throw new Error(`Unknown escape sequence: ${t}`)})+"</span>"}addEventListener("resize",()=>{if(M===0)b(G),b(Z),b(fe);else{for(let e of de)b(e);b(me)}b(X)});try{pe=new Intl.NumberFormat}catch{}var A=document.querySelector("#transformOptions textarea"),Ye=document.querySelector("#transformOptions .underLink"),$=document.querySelector("#transformInput textarea"),xe=document.querySelector("#transformInput .underLink"),Pe;function Ae(){return[A.value,$.value]}function be(e,r){(A.value!==e||$.value!==r)&&(A.value=e,$.value=r,D()),W()}function W(){b(A),b($)}function D(){let e=A.value,r=$.value;Q(),Pe=P($.parentElement,r,Pe);try{_({Z:"transform",Y:r,W:q(e,0,Ye)}).then(t=>{ge(t)},()=>{})}catch(t){ge({N:Y(t)})}if(xe.innerHTML="",!e&&!r){let t=document.createElement("a");t.href="javascript:void 0",t.textContent="Load an example...",t.onclick=Re,xe.append(t)}}function Re(){be(`--target=es6
--loader=tsx
--jsx=automatic
--minify-identifiers
--sourcemap`,`// The "tsx" loader removes type annotations
export type NamesProps = { names?: string[] }

export const NamesComponent = (props: NamesProps) => {
  // The "?." operator will be transformed for ES6
  const names = props.names?.join(' ')

  // The "tsx" loader transforms JSX syntax into JS
  return <div>Names: {names}</div>
}`)}A.oninput=()=>{b(A),D()};$.oninput=()=>{b($),D()};xe.querySelector("a").onclick=Re;addEventListener("resize",W);W();var je=Qe(),k=document.querySelector("#versionPicker select"),ee=document.createElement("option"),te;ee.textContent="Loading...";k.append(ee);k.disabled=!0;je.then(e=>{let r=e.filter(t=>!/^0\.[0-4]\.|^0\.5\.0/.test(t));k.disabled=!1,ee.remove();for(let t of r){let o=document.createElement("option");o.textContent=t,k.append(o)}k.onchange=()=>te(k.value),k.selectedIndex=-1},()=>{ee.textContent="\u274C Loading failed!"});function Ne(){return k.disabled?null:k.selectedIndex<0?"pkgurl":k.value}function ye(e){te=e}async function z(e){if(e==="pkgurl")k.selectedIndex!==-1&&(k.selectedIndex=-1,await te("pkgurl"));else{let r=await je,t=e==="latest"?r.length?0:-1:r.indexOf(e);t>=0&&k.selectedIndex!==t&&(k.selectedIndex=t,await te(r[t]))}}async function Qe(){let e=new AbortController,r=setTimeout(()=>e.abort("Timeout"),5e3);try{let t="https://data.jsdelivr.com/v1/package/npm/esbuild-wasm",o=await fetch(t,{signal:e.signal});if(o&&o.ok){clearTimeout(r);let a=(await o.json()).versions;if(a&&a.length)return console.log(`Loaded ${a.length} versions from ${t}`),a}}catch(t){console.error(t)}try{let t="https://registry.npmjs.org/esbuild-wasm",o=(await fetch(t).then(a=>a.json())).versions;if(o&&(o=Object.keys(o).reverse(),o.length))return console.log(`Loaded ${o.length} versions from ${t}`),o}catch(t){console.error(t)}throw new Error}function He(){let e=location.hash,r=atob(e.slice(1)).split("\0");if(r[0]==="t"&&r.length===4)return V(0),be(r[2],r[3]),z(r[1]),!0;if(r[0]==="b"&&r.length%3===0){let t=[];for(let o=3;o<r.length;o+=3)t.push({j:r[o]==="e",U:r[o+1],z:r[o+2]});return V(1),Te(r[2],t),z(r[1]),!0}if(location.hash!=="")try{history.replaceState({},"",location.pathname+location.search)}catch{}return!1}function Q(){let e=Ne();if(!e)return;let r;if(M===0){let[o,a]=Ae();(o||a)&&(r=["t",e,o,a])}else{let[o,a]=ve();r=["b",e,o];for(let i of a)r.push(i.j?"e":"",i.U,i.z)}let t=location.pathname+location.search;try{let o=r?"#"+btoa(r.join("\0")).replace(/=+$/,""):"";location.hash!==o&&history.replaceState({},"",o||t)}catch{if(location.hash!=="")try{history.replaceState({},"",t)}catch{}}}var R=document.querySelector("#buildOptions textarea"),_e=document.querySelector("#buildOptions .underLink"),Ee=document.getElementById("addInput"),et=document.getElementById("buildInputs"),y=[];function ve(){return[R.value,y.map(e=>({j:e.J.classList.contains("entryPoint"),U:e.D.value.trim(),z:e.H.value}))]}function Te(e,r){if(JSON.stringify([e,r])!==JSON.stringify(ve())){for(let t of y)t.J.remove();y.length=0,R.value=e;for(let t of r)we(t.j,t.U,t.z);F(),O()}ne()}function Fe(){y.length||we(!0,ke())}function ne(){b(R);for(let e of y)b(e.H)}function O(){Q();try{let e=q(R.value,1,_e),r=Array.isArray(e.entryPoints)?e.entryPoints:e.entryPoints=[],t=Object.create(null),o=Object.create(null),a;for(let i of y){let s=i.D.value.trim();if((o[s]||(o[s]=[])).push(i),s)t[s]=i.H.value,i.J.classList.contains("entryPoint")&&!r.includes(s)&&r.push(s);else{let c=e.stdin&&typeof e.stdin=="object"?e.stdin:e.stdin={};c.contents=i.H.value,"resolveDir"in c||(c.resolveDir="/")}}for(let i in o){let s=o[i];if(s.length>1){for(let p of s)p.J.classList.add("duplicate");a||(a=new Error("Duplicate input file: "+(i?JSON.stringify(i):"<stdin>")))}else s[0].J.classList.remove("duplicate")}if(a)throw a;_({Z:"build",Y:t,W:e}).then(i=>{he(i,r.length)},()=>{})}catch(e){he({N:Y(e)},-1)}for(let e of y)e.ie.innerHTML="";if(!R.value&&y.length===1&&!y[0].H.value){let e=document.createElement("a");e.href="javascript:void 0",e.textContent="Load an example...",e.onclick=()=>Te(`--bundle
--format=esm
--outfile=out.js
--sourcemap
--drop-labels:DEBUG
--minify-identifiers`,[{j:!0,U:"entry.ts",z:`// This import will be inlined by the bundler
import * as UnionFind from '@example/union-find'

// Type declarations are automatically removed
export type Graph<K, V> = Map<K, Node<K, V>>
export interface Node<K, V> {
  data: V
  edges: K[]
}

export function connectedComponents<K, V>(graph: Graph<K, V>) {
  let groups = UnionFind.create(graph.keys())
  let result = new Map<K, K[]>()

  for (let [key, { edges }] of graph)
    for (let edge of edges)
      UnionFind.union(groups, key, edge)

  // This is removed by "--drop-labels:DEBUG"
  DEBUG: console.log('Groups: ' +
    UnionFind.debugString(groups))

  for (let key of graph.keys()) {
    let group = UnionFind.find(groups, key)
    let component = result.get(group) || []
    component.push(key)
    result.set(group, component)
  }

  return [...result.values()]
}

// This is removed by "--drop-labels:DEBUG"
DEBUG: {
  let observed = JSON.stringify(
    connectedComponents(new Map([
      ['A', { data: 1, edges: ['C'] }],
      ['B', { data: 2, edges: ['B'] }],
      ['C', { data: 3, edges: ['A', 'B'] }],
      ['X', { data: -1, edges: ['Y'] }],
      ['Y', { data: -2, edges: ['X'] }],
      ['Z', { data: -3, edges: [] }],
    ])))
  let expected = '[["A","B","C"],["X","Y"],["Z"]]'
  console.assert(observed === expected,
    \`Expected \${expected} but got \${observed}\`)
}`},{j:!1,U:"node_modules/@example/union-find/index.js",z:`// See: https://en.wikipedia.org/wiki/Disjoint-set_data_structure

export function create(keys) {
  let map = new Map()
  for (let x of keys)
    map.set(x, x)
  return map
}

export function find(map, x) {
  while (map.get(x) !== x)
    map.set(x, x = map.get(map.get(x)))
  return x
}

export function union(map, a, b) {
  map.set(find(map, a), find(map, b))
}

// This is removed by tree-shaking when unused
export function debugString(map) {
  let obj = {}
  for (let [k, v] of map) {
    obj[k] = v
    while (map.get(v) !== v)
      obj[k] += ' => ' + (v = map.get(v))
  }
  return JSON.stringify(obj, null, 2)
}`},{j:!1,U:"node_modules/@example/union-find/index.d.ts",z:`// Files related to type checking are ignored by esbuild
export declare function create<T>(keys: Iterable<T>): Map<T, T>;
export declare function find<T>(map: Map<T, T>, x: T): T;
export declare function union<T>(map: Map<T, T>, a: T, b: T): void;
export declare function debugString<T>(map: Map<T, T>): string;`}]),y[0].ie.append(e)}}function ke(){if(!y.length)return"entry.js";let e=1,r="file.js";for(;y.some(t=>t.D.value.trim()===r);)r=`file${++e}.js`;return r}function F(){Ee.textContent="+ "+ke()}function we(e=!1,r="",t=""){let o=()=>{let f=p.value;if(f.endsWith(".map")){let d;try{d=JSON.parse(u.value)}catch{}if(d&&typeof d=="object"){h=j(()=>{let g="";for(let m of y)if(f===m.D.value+".map"){g=m.H.value;break}return[g,JSON.stringify(d)]}),a.append(h);return}}h=P(a,u.value,h)},a=document.createElement("div"),i=document.createElement("a"),s=document.createElement("a"),p=document.createElement("input"),c=document.createElement("div"),u=document.createElement("textarea"),n=document.createElement("div"),l={J:a,D:p,H:u,ie:n},h;return C(p,!1),C(u,!1),p.placeholder="<stdin>",p.value=r,i.className="entryToggle",i.textContent="",i.href="javascript:void 0",s.className="remove",s.textContent="\xD7",s.href="javascript:void 0",u.placeholder="(enter your code here)",u.value=t,a.className="buildInput",e&&a.classList.add("entryPoint"),c.className="hasLabel",c.append(u),n.className="underLink",a.append(i,p,s,c,n),et.insertBefore(a,Ee),p.oninput=()=>{o(),F(),O()},p.onblur=()=>{let f=p.value.trim();p.value!==f&&(p.value=f,F(),O())},u.oninput=()=>{o(),b(u),O()},i.onclick=()=>{a.classList.toggle("entryPoint"),O()},s.onclick=()=>{let f=y.indexOf(l);f<0||(y.splice(f,1),a.remove(),F(),O())},y.push(l),o(),F(),b(u),l}R.oninput=()=>{b(R),O()};Ee.onclick=()=>{let e=we(!y.length,ke());e.D.focus(),e.D.select(),O()};addEventListener("resize",ne);F();var M=0,Je=[document.getElementById("transformPanel"),document.getElementById("buildPanel")],tt=document.getElementById("modeSwitcher"),oe=tt.querySelectorAll("a");oe[0].onclick=()=>{V(0)&&(U(null),re())};oe[1].onclick=()=>{Fe(),V(1)&&(U(null),re())};function V(e){return M===e?!1:(oe[M].classList.remove("active"),Je[M].style.display="none",M=e,oe[M].classList.add("active"),Je[M].style.display="block",!0)}function re(){M===0?(W(),D()):(ne(),O())}var De=new URLSearchParams(location.search),Le=De.get("polywasm"),se=De.get("pkgurl"),nt=fetch("worker.js").then(e=>e.text()),J=null,B=null,ie=new Promise((e,r)=>{ye(t=>{let o=We(t);return o.then(e,r),ye(a=>(ie.then(i=>i.terminate()),ie=We(a),ie)),o})});async function Ue(e){let r=new AbortController,t=setTimeout(()=>r.abort("Timeout"),5e3);try{let o=await fetch(`https://cdn.jsdelivr.net/npm/${e}`,{signal:r.signal});if(o.ok)return clearTimeout(t),o}catch(o){console.error(o)}return fetch(`https://unpkg.com/${e}`)}async function We(e){let r,t,o;U(e==="pkgurl"?null:e);try{if(J&&J.ee(),B&&B.ee(),J=null,B=null,e==="pkgurl")t=fetch(new URL("lib/browser.min.js",se)),o=fetch(new URL("esbuild.wasm",se));else{let[l,h,f]=e.split(".").map(g=>+g),d=l===0&&(h<8||h===8&&f<33)?"":".min";t=Ue(`esbuild-wasm@${e}/lib/browser${d}.js`),o=Ue(`esbuild-wasm@${e}/esbuild.wasm`)}let a=l=>l.then(h=>{if(!h.ok)throw`${h.status} ${h.statusText}: ${h.url}`;return h}),i=Le==="0"||Le==="1"?Le:null,[s,p,c]=await Promise.all([nt,a(t).then(l=>l.text()),a(o).then(l=>l.arrayBuffer())]),u=[p,`
var polywasm=${i};`,s],n=URL.createObjectURL(new Blob(u,{type:"application/javascript"}));return await new Promise((l,h)=>{let f=new Worker(n);f.onmessage=d=>{if(d.data.K==="slow"){let g=document.getElementById("slowWarning");g.innerHTML="<span>\u26A0\uFE0F Processing is slow because </span><span>WebAssembly is disabled \u26A0\uFE0F</span>",g.style.display="flex";return}f.onmessage=null,d.data.K==="success"?(l(f),re()):(h(new Error("Failed to create worker")),r=d.data.me),URL.revokeObjectURL(n)},f.postMessage([e,c],[c])})}catch(a){throw Be(r||a+""),a}}function _(e){let r=(t,o)=>{J?(B&&B.ee(),B=o):(J=o,t.onmessage=a=>{t.onmessage=null,o.ge(a.data),J=null,B&&(r(t,B),B=null)},t.postMessage(o.he))};return new Promise((t,o)=>{ie.then(a=>r(a,{he:Se(e),ge:t,ee:()=>o(new Error("Task aborted"))}),o)})}var Se=e=>{if(typeof e=="function"){let r=e+"";return new EvalError("function "+e.name+r.slice(r.indexOf("(")))}return typeof e=="object"&&e?Array.isArray(e)?e.map(Se):Object.fromEntries(Object.entries(e).map(([r,t])=>[r,Se(t)])):e};He()||z(se?"pkgurl":"latest");

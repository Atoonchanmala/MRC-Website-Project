import{r as l,j as S,P as De}from"./index-WDQzgGEc.js";import{u as Oe,T as Ve,D as We,G as Ke,a as I,c as ke,b as Ne,s as Re,d as Fe,g as be}from"./DefaultPropsProvider-BN1vOYou.js";import{R as Ge}from"./index-YzFYRnT_.js";const xe=l.createContext(null);function B(){return l.useContext(xe)}const He=typeof Symbol=="function"&&Symbol.for,ze=He?Symbol.for("mui.nested"):"__THEME_NESTED__";function Be(e,t){return typeof t=="function"?t(e):{...e,...t}}function qe(e){const{children:t,theme:o}=e,s=B(),u=l.useMemo(()=>{const a=s===null?{...o}:Be(s,o);return a!=null&&(a[ze]=s!==null),a},[o,s]);return S.jsx(xe.Provider,{value:u,children:t})}const ge={};function ye(e,t,o,s=!1){return l.useMemo(()=>{const u=e&&t[e]||t;if(typeof o=="function"){const a=o(u),r=e?{...t,[e]:a}:a;return s?()=>r:r}return e?{...t,[e]:o}:{...t,...o}},[e,t,o,s])}function Te(e){const{children:t,theme:o,themeId:s}=e,u=Oe(ge),a=B()||ge,r=ye(s,u,o),g=ye(s,a,o,!0),m=r.direction==="rtl";return S.jsx(qe,{theme:g,children:S.jsx(Ve.Provider,{value:r,children:S.jsx(Ge,{value:m,children:S.jsx(We,{value:r==null?void 0:r.components,children:t})})})})}const q="mode",U="color-scheme",Ue="data-color-scheme";function Ye(e){const{defaultLightColorScheme:t="light",defaultDarkColorScheme:o="dark",modeStorageKey:s=q,colorSchemeStorageKey:u=U,attribute:a=Ue,colorSchemeNode:r="document.documentElement",nonce:g}=e||{};let m="",n=a;if(a==="class"&&(n=".%s"),a==="data"&&(n="[data-%s]"),n.startsWith(".")){const y=n.substring(1);m+=`${r}.classList.remove('${y}'.replace('%s', light), '${y}'.replace('%s', dark));
      ${r}.classList.add('${y}'.replace('%s', colorScheme));`}const C=n.match(/\[([^\]]+)\]/);if(C){const[y,M]=C[1].split("=");M||(m+=`${r}.removeAttribute('${y}'.replace('%s', light));
      ${r}.removeAttribute('${y}'.replace('%s', dark));`),m+=`
      ${r}.setAttribute('${y}'.replace('%s', colorScheme), ${M?`${M}.replace('%s', colorScheme)`:'""'});`}else m+=`${r}.setAttribute('${n}', colorScheme);`;return S.jsx("script",{suppressHydrationWarning:!0,nonce:typeof window>"u"?g:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${s}') || 'system';
  const dark = localStorage.getItem('${u}-dark') || '${o}';
  const light = localStorage.getItem('${u}-light') || '${t}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${m}
  }
} catch(e){}})();`}},"mui-color-scheme-init")}function pe(e){if(typeof window<"u"&&typeof window.matchMedia=="function"&&e==="system")return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Me(e,t){if(e.mode==="light"||e.mode==="system"&&e.systemMode==="light")return t("light");if(e.mode==="dark"||e.mode==="system"&&e.systemMode==="dark")return t("dark")}function Qe(e){return Me(e,t=>{if(t==="light")return e.lightColorScheme;if(t==="dark")return e.darkColorScheme})}function H(e,t){if(typeof window>"u")return;let o;try{o=localStorage.getItem(e)||void 0,o||localStorage.setItem(e,t)}catch{}return o||t}function Je(e){const{defaultMode:t="light",defaultLightColorScheme:o,defaultDarkColorScheme:s,supportedColorSchemes:u=[],modeStorageKey:a=q,colorSchemeStorageKey:r=U,storageWindow:g=typeof window>"u"?void 0:window}=e,m=u.join(","),n=u.length>1,[C,y]=l.useState(()=>{const c=H(a,t),i=H(`${r}-light`,o),d=H(`${r}-dark`,s);return{mode:c,systemMode:pe(c),lightColorScheme:i,darkColorScheme:d}}),[,M]=l.useState(!1),v=l.useRef(!1);l.useEffect(()=>{n&&M(!0),v.current=!0},[n]);const Y=Qe(C),E=l.useCallback(c=>{y(i=>{if(c===i.mode)return i;const d=c??t;try{localStorage.setItem(a,d)}catch{}return{...i,mode:d,systemMode:pe(d)}})},[a,t]),w=l.useCallback(c=>{c?typeof c=="string"?c&&!m.includes(c)?console.error(`\`${c}\` does not exist in \`theme.colorSchemes\`.`):y(i=>{const d={...i};return Me(i,p=>{try{localStorage.setItem(`${r}-${p}`,c)}catch{}p==="light"&&(d.lightColorScheme=c),p==="dark"&&(d.darkColorScheme=c)}),d}):y(i=>{const d={...i},p=c.light===null?o:c.light,k=c.dark===null?s:c.dark;if(p)if(!m.includes(p))console.error(`\`${p}\` does not exist in \`theme.colorSchemes\`.`);else{d.lightColorScheme=p;try{localStorage.setItem(`${r}-light`,p)}catch{}}if(k)if(!m.includes(k))console.error(`\`${k}\` does not exist in \`theme.colorSchemes\`.`);else{d.darkColorScheme=k;try{localStorage.setItem(`${r}-dark`,k)}catch{}}return d}):y(i=>{try{localStorage.setItem(`${r}-light`,o),localStorage.setItem(`${r}-dark`,s)}catch{}return{...i,lightColorScheme:o,darkColorScheme:s}})},[m,r,o,s]),j=l.useCallback(c=>{C.mode==="system"&&y(i=>{const d=c!=null&&c.matches?"dark":"light";return i.systemMode===d?i:{...i,systemMode:d}})},[C.mode]),A=l.useRef(j);return A.current=j,l.useEffect(()=>{if(typeof window.matchMedia!="function"||!n)return;const c=(...d)=>A.current(...d),i=window.matchMedia("(prefers-color-scheme: dark)");return i.addListener(c),c(i),()=>{i.removeListener(c)}},[n]),l.useEffect(()=>{if(g&&n){const c=i=>{const d=i.newValue;typeof i.key=="string"&&i.key.startsWith(r)&&(!d||m.match(d))&&(i.key.endsWith("light")&&w({light:d}),i.key.endsWith("dark")&&w({dark:d})),i.key===a&&(!d||["light","dark","system"].includes(d))&&E(d||t)};return g.addEventListener("storage",c),()=>{g.removeEventListener("storage",c)}}},[w,E,a,r,m,t,g,n]),{...C,mode:v.current||!n?C.mode:void 0,systemMode:v.current||!n?C.systemMode:void 0,colorScheme:v.current||!n?Y:void 0,setMode:E,setColorScheme:w}}const Xe="*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function Ze(e){const{themeId:t,theme:o={},modeStorageKey:s=q,colorSchemeStorageKey:u=U,disableTransitionOnChange:a=!1,defaultColorScheme:r,resolveTheme:g}=e,m={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},n=l.createContext(void 0),C=()=>l.useContext(n)||m;function y(E){var de,me,ue,he,fe;const{children:w,theme:j,modeStorageKey:A=s,colorSchemeStorageKey:c=u,disableTransitionOnChange:i=a,storageWindow:d=typeof window>"u"?void 0:window,documentNode:p=typeof document>"u"?void 0:document,colorSchemeNode:k=typeof document>"u"?void 0:document.documentElement,disableNestedContext:V=!1,disableStyleSheetGeneration:ve=!1}=E,W=l.useRef(!1),K=B(),N=l.useContext(n),R=!!N&&!V,Q=l.useMemo(()=>j||(typeof o=="function"?o():o),[j]),J=Q[t],{colorSchemes:$={},components:we={},cssVarPrefix:X,...T}=J||Q,Z=Object.keys($).filter(h=>!!$[h]).join(","),L=l.useMemo(()=>Z.split(","),[Z]),ee=typeof r=="string"?r:r.light,te=typeof r=="string"?r:r.dark,je=$[ee]&&$[te]?"system":((me=(de=$[T.defaultColorScheme])==null?void 0:de.palette)==null?void 0:me.mode)||((ue=T.palette)==null?void 0:ue.mode),{mode:Le,setMode:oe,systemMode:re,lightColorScheme:se,darkColorScheme:ne,colorScheme:Ie,setColorScheme:ce}=Je({supportedColorSchemes:L,defaultLightColorScheme:ee,defaultDarkColorScheme:te,modeStorageKey:A,colorSchemeStorageKey:c,defaultMode:je,storageWindow:d});let F=Le,b=Ie;R&&(F=N.mode,b=N.colorScheme);const le=b||T.defaultColorScheme,Pe=((he=T.generateThemeVars)==null?void 0:he.call(T))||T.vars,x={...T,components:we,colorSchemes:$,cssVarPrefix:X,vars:Pe};if(typeof x.generateSpacing=="function"&&(x.spacing=x.generateSpacing()),le){const h=$[le];h&&typeof h=="object"&&Object.keys(h).forEach(f=>{h[f]&&typeof h[f]=="object"?x[f]={...x[f],...h[f]}:x[f]=h[f]})}const P=T.colorSchemeSelector;l.useEffect(()=>{if(b&&k&&P&&P!=="media"){const h=P;let f=P;if(h==="class"&&(f=".%s"),h==="data"&&(f="[data-%s]"),h!=null&&h.startsWith("data-")&&!h.includes("%s")&&(f=`[${h}="%s"]`),f.startsWith("."))k.classList.remove(...L.map(_=>f.substring(1).replace("%s",_))),k.classList.add(f.substring(1).replace("%s",b));else{const _=f.replace("%s",b).match(/\[([^\]]+)\]/);if(_){const[Se,G]=_[1].split("=");G||L.forEach(_e=>{k.removeAttribute(Se.replace(b,_e))}),k.setAttribute(Se,G?G.replace(/"|'/g,""):"")}else k.setAttribute(f,b)}}},[b,P,k,L]),l.useEffect(()=>{let h;if(i&&W.current&&p){const f=p.createElement("style");f.appendChild(p.createTextNode(Xe)),p.head.appendChild(f),window.getComputedStyle(p.body),h=setTimeout(()=>{p.head.removeChild(f)},1)}return()=>{clearTimeout(h)}},[b,i,p]),l.useEffect(()=>(W.current=!0,()=>{W.current=!1}),[]);const Ae=l.useMemo(()=>({allColorSchemes:L,colorScheme:b,darkColorScheme:ne,lightColorScheme:se,mode:F,setColorScheme:ce,setMode:oe,systemMode:re}),[L,b,ne,se,F,ce,oe,re]);let ie=!0;(ve||T.cssVariables===!1||R&&(K==null?void 0:K.cssVarPrefix)===X)&&(ie=!1);const ae=S.jsxs(l.Fragment,{children:[S.jsx(Te,{themeId:J?t:void 0,theme:g?g(x):x,children:w}),ie&&S.jsx(Ke,{styles:((fe=x.generateStyleSheets)==null?void 0:fe.call(x))||[]})]});return R?ae:S.jsx(n.Provider,{value:Ae,children:ae})}const M=typeof r=="string"?r:r.light,v=typeof r=="string"?r:r.dark;return{CssVarsProvider:y,useColorScheme:C,getInitColorSchemeScript:E=>Ye({colorSchemeStorageKey:u,defaultLightColorScheme:M,defaultDarkColorScheme:v,modeStorageKey:s,...E})}}function Ce({theme:e,...t}){const o=I in e?e[I]:void 0;return S.jsx(Te,{...t,themeId:o?I:void 0,theme:o||e})}const D={attribute:"data-mui-color-scheme",colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:et,useColorScheme:ut,getInitColorSchemeScript:ht}=Ze({themeId:I,theme:()=>ke({cssVariables:!0}),colorSchemeStorageKey:D.colorSchemeStorageKey,modeStorageKey:D.modeStorageKey,defaultColorScheme:{light:D.defaultLightColorScheme,dark:D.defaultDarkColorScheme},resolveTheme:e=>{const t={...e,typography:Ne(e.palette,e.typography)};return t.unstable_sx=function(s){return Re({sx:s,theme:this})},t}}),tt=et;function ot({theme:e,...t}){return typeof e=="function"?S.jsx(Ce,{theme:e,...t}):"colorSchemes"in(I in e?e[I]:e)?S.jsx(tt,{theme:e,...t}):S.jsx(Ce,{theme:e,...t})}const z=typeof be({})=="function",rt=(e,t)=>({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%",...t&&!e.vars&&{colorScheme:e.palette.mode}}),st=e=>({color:(e.vars||e).palette.text.primary,...e.typography.body1,backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),Ee=(e,t=!1)=>{var a,r;const o={};t&&e.colorSchemes&&typeof e.getColorSchemeSelector=="function"&&Object.entries(e.colorSchemes).forEach(([g,m])=>{var C,y;const n=e.getColorSchemeSelector(g);n.startsWith("@")?o[n]={":root":{colorScheme:(C=m.palette)==null?void 0:C.mode}}:o[n.replace(/\s*&/,"")]={colorScheme:(y=m.palette)==null?void 0:y.mode}});let s={html:rt(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:{margin:0,...st(e),"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}},...o};const u=(r=(a=e.components)==null?void 0:a.MuiCssBaseline)==null?void 0:r.styleOverrides;return u&&(s=[s,u]),s},O="mui-ecs",nt=e=>{const t=Ee(e,!1),o=Array.isArray(t)?t[0]:t;return!e.vars&&o&&(o.html[`:root:has(${O})`]={colorScheme:e.palette.mode}),e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([s,u])=>{var r,g;const a=e.getColorSchemeSelector(s);a.startsWith("@")?o[a]={[`:root:not(:has(.${O}))`]:{colorScheme:(r=u.palette)==null?void 0:r.mode}}:o[a.replace(/\s*&/,"")]={[`&:not(:has(.${O}))`]:{colorScheme:(g=u.palette)==null?void 0:g.mode}}}),t},ct=be(z?({theme:e,enableColorScheme:t})=>Ee(e,t):({theme:e})=>nt(e));function lt(e){const t=Fe({props:e,name:"MuiCssBaseline"}),{children:o,enableColorScheme:s=!1}=t;return S.jsxs(l.Fragment,{children:[z&&S.jsx(ct,{enableColorScheme:s}),!z&&!s&&S.jsx("span",{className:O,style:{display:"none"}}),o]})}const $e=l.createContext({theme:"light",toggleTheme:()=>{},language:"EN",toggleLanguage:()=>{}}),ft=()=>l.useContext($e),it=({children:e})=>{const[t,o]=l.useState("light"),[s,u]=l.useState("EN");l.useEffect(()=>{const m=localStorage.getItem("theme");m&&o(m);const n=localStorage.getItem("language");n&&u(n)},[]);const a=()=>{o(m=>{const n=m==="light"?"dark":"light";return localStorage.setItem("theme",n),n})},r=()=>{u(m=>{const n=m==="EN"?"LA":"EN";return localStorage.setItem("language",n),n})},g=ke({});return S.jsx($e.Provider,{value:{theme:t,toggleTheme:a,language:s,toggleLanguage:r},children:S.jsxs(ot,{theme:g,children:[S.jsx(lt,{}),e]})})};it.propTypes={children:De.node.isRequired};export{it as default,ft as useTheme};

import{n as f,s as h}from"./scheduler.7a274a43.js";const e=[];function d(n,u=f){let o;const i=new Set;function r(t){if(h(n,t)&&(n=t,o)){const c=!e.length;for(const s of i)s[1](),e.push(s,n);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function b(t){r(t(n))}function _(t,c=f){const s=[t,c];return i.add(s),i.size===1&&(o=u(r,b)||f),t(n),()=>{i.delete(s),i.size===0&&o&&(o(),o=null)}}return{set:r,update:b,subscribe:_}}var a;const p=((a=globalThis.__sveltekit_nfmhxa)==null?void 0:a.base)??"/slick-portfolio-svelte";var l;const m=((l=globalThis.__sveltekit_nfmhxa)==null?void 0:l.assets)??p;export{m as a,p as b,d as w};

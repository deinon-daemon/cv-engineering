import{s as r,f as i,g as m,r as c,j as l,i as u,A as d,d as f}from"../chunks/scheduler.107c4b6e.js";import{S as p,i as _,b as g,d as h,m as $,a as v,t as C,e as b}from"../chunks/index.49aa40f3.js";import{C as w}from"../chunks/CommonPage.ca911a17.js";const x="Resumé";function A(a){let e,s='<iframe style="border: 0; width:100%; height: 500px; overflow: auto;" title="benjamin carsley - engineering resume" src="https://docs.google.com/document/d/e/2PACX-1vTQUHQwPLGCI--wKhy9H0wPUJG_FEICgjdWNgu3AiNz3_iwM3_CAadvuQqaAi80D4_W0afb72RFksNV/pub?embedded=true"></iframe>';return{c(){e=i("div"),e.innerHTML=s,this.h()},l(t){e=m(t,"DIV",{class:!0,"data-svelte-h":!0}),c(e)!=="svelte-1vb3isx"&&(e.innerHTML=s),this.h()},h(){l(e,"class","resume")},m(t,n){u(t,e,n)},p:d,d(t){t&&f(e)}}}function P(a){let e,s;return e=new w({props:{title:x,$$slots:{default:[A]},$$scope:{ctx:a}}}),{c(){g(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,n){$(e,t,n),s=!0},p(t,[n]){const o={};n&1&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){s||(v(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){b(e,t)}}}class I extends p{constructor(e){super(),_(this,e,null,P,r,{})}}export{I as component};
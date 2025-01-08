import{t as F,a as I,S as L,i as U}from"./index.49aa40f3.js";import{y as q,s as K,f as O,g as Q,h as V,d as _,j as T,i as z,A as C}from"./scheduler.107c4b6e.js";import{w as B,b as G}from"./paths.334d8644.js";function ss(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function es(e,t){F(e,1,1,()=>{t.delete(e.key)})}function ts(e,t,a,n,r,i,c,S,m,p,g,h){let v=e.length,d=i.length,u=v;const b={};for(;u--;)b[e[u].key]=u;const y=[],k=new Map,x=new Map,M=[];for(u=d;u--;){const o=h(r,i,u),l=a(o);let f=c.get(l);f?n&&M.push(()=>f.p(o,t)):(f=p(l,o),f.c()),k.set(l,y[u]=f),l in b&&x.set(l,Math.abs(u-b[l]))}const N=new Set,R=new Set;function A(o){I(o,1),o.m(S,g),c.set(o.key,o),g=o.first,d--}for(;v&&d;){const o=y[d-1],l=e[v-1],f=o.key,w=l.key;o===l?(g=o.first,v--,d--):k.has(w)?!c.has(f)||N.has(f)?A(o):R.has(w)?v--:x.get(f)>x.get(w)?(R.add(f),A(o)):(N.add(w),v--):(m(l,c),v--)}for(;v--;){const o=e[v];k.has(o.key)||m(o,c)}for(;d;)A(y[d-1]);return q(M),y}const P="@carsley-cv-engineering-theme",H=e=>{localStorage.setItem(P,JSON.stringify(e))},D=B(!1),J=e=>D.update(t=>{var n;const a=typeof e=="boolean"?e:!t;return H(a),(n=document.querySelector(":root"))==null||n.setAttribute("data-theme",a?"dark":"light"),a}),ns=()=>{const e=localStorage.getItem(P);e?J(JSON.parse(e)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?J(!0):J(!1)},j=e=>`${G}/logos/${e}`,s=(e,t)=>t?{dark:j(t),light:j(e)}:j(e),as={Airflow:s("airflow.svg"),AWS:s("aws.svg"),Azure:s("azure.svg"),Bootstrap:s("bootstrap.svg"),C:s("c.svg"),Cpp:s("cpp.svg"),Celery:s("celery.svg"),Django:s("django.svg"),Elixir:s("elixir.svg"),FastApi:s("fastapi.svg"),Flask:s("flask.svg"),GCP:s("google.svg"),Go:s("go.svg"),Kafka:s("kafka.svg"),Linux:s("linux.svg"),Neo4j:s("neo4j.svg"),NextJS:s("nextjs.svg","nextjs-dark.svg"),Nginx:s("nginx.svg"),Numpy:s("numpy.svg"),Pandas:s("pandas.svg"),Phoenix:s("phoenix.svg"),RabbitMQ:s("rabbitmq.svg"),Ruby:s("ruby.svg"),RubyOnRails:s("rails.svg"),Rust:s("rust.svg"),SageMaker:s("sagemaker.svg"),Scrapy:s("scrapy.png"),Selenium:s("selenium.svg"),Terraform:s("terraform.svg"),Docker:s("docker.svg"),Kubernetes:s("kubernetes.svg"),Csharp:s("csharp.svg"),Xamarin:s("xamarin.svg"),TypeScript:s("ts.png"),VueJs:s("vue.png"),ReactJs:s("react.svg"),Dart:s("dart.png"),Kotlin:s("kotlin.png"),Python:s("python.png"),NodeJs:s("node.png"),Deno:s("deno.png","deno-dark.svg"),Svelte:s("svelte.png"),ExpressJs:s("express.png"),JavaScript:s("js.png"),Fastify:s("fastify.svg","fastify-dark.png"),NestJs:s("nest.svg"),Quasar:s("quasar.svg"),SolidJs:s("solid.svg"),Electron:s("electron.png"),Flutter:s("flutter.svg"),Java:s("java.png"),AdonisJs:s("adonis.png"),Android:s("android.png"),Angular:s("angular.png"),PostgreSQL:s("postgres.png"),Firebase:s("firebase.png"),Sass:s("sass.png"),Unknown:s("no-img.svg"),MongoDB:s("mongodb.svg"),Redis:s("redis.svg"),Tailwind:s("tailwind.svg"),HTML:s("html.svg"),Premiere:s("premiere.svg"),Photoshop:s("photoshop.svg"),CSS:s("css.svg"),AfterEffects:s("after-effects.svg"),Illustrator:s("illustrator.svg"),Nuxt:s("nuxt.png"),Vite:s("vite.png"),Vitest:s("vitest.svg"),Jest:s("jest.png"),Unocss:s("unocss.svg"),Ruvy:s("ruvy.svg"),Postcss:s("postcss.svg")};let E;D.subscribe(e=>E=e);const os=e=>typeof e=="string"?e:E?e.dark:e.light;globalThis&&globalThis.__awaiter;function W(e){let t,a;return{c(){t=O("i"),this.h()},l(n){t=Q(n,"I",{class:!0}),V(t).forEach(_),this.h()},h(){T(t,"class",a=`${e[0]} ${e[1]}`)},m(n,r){z(n,t,r)},p(n,[r]){r&3&&a!==(a=`${n[0]} ${n[1]}`)&&T(t,"class",a)},i:C,o:C,d(n){n&&_(t)}}}function X(e,t,a){let{icon:n=void 0}=t,{classes:r=""}=t;return e.$$set=i=>{"icon"in i&&a(0,n=i.icon),"classes"in i&&a(1,r=i.classes)},[n,r]}class is extends L{constructor(t){super(),U(this,t,X,W,K,{icon:0,classes:1})}}export{as as A,is as U,J as a,es as b,ss as e,os as g,ns as o,D as t,ts as u};
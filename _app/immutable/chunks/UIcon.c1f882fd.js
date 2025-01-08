import{t as T,a as N,S as E,i as D}from"./index.49aa40f3.js";import{y as F,s as U,f as L,g as q,h as I,d as C,j as M,i as K,A as P}from"./scheduler.107c4b6e.js";import{b as Q}from"./paths.8e7ce829.js";function O(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function W(e,n){T(e,1,1,()=>{n.delete(e.key)})}function X(e,n,i,t,r,g,c,k,m,d,o,h){let v=e.length,u=g.length,f=v;const b={};for(;f--;)b[e[f].key]=f;const y=[],x=new Map,S=new Map,j=[];for(f=u;f--;){const a=h(r,g,f),l=i(a);let p=c.get(l);p?t&&j.push(()=>p.p(a,n)):(p=d(l,a),p.c()),x.set(l,y[f]=p),l in b&&S.set(l,Math.abs(f-b[l]))}const R=new Set,_=new Set;function A(a){N(a,1),a.m(k,o),c.set(a.key,a),o=a.first,u--}for(;v&&u;){const a=y[u-1],l=e[v-1],p=a.key,w=l.key;a===l?(o=a.first,v--,u--):x.has(w)?!c.has(p)||R.has(p)?A(a):_.has(w)?v--:S.get(p)>S.get(w)?(_.add(p),A(a)):(R.add(w),v--):(m(l,c),v--)}for(;v--;){const a=e[v];x.has(a.key)||m(a,c)}for(;u;)A(y[u-1]);return F(j),y}const J=e=>`${Q}/logos/${e}`,s=(e,n)=>n?{dark:J(n),light:J(e)}:J(e),Y={Airflow:s("airflow.svg"),AWS:s("aws.svg"),Azure:s("azure.svg"),Bootstrap:s("bootstrap.svg"),C:s("c.svg"),Cpp:s("cpp.svg"),Celery:s("celery.svg"),Django:s("django.svg"),Elixir:s("elixir.svg"),FastApi:s("fastapi.svg"),Flask:s("flask.svg","flask-dark.png"),GCP:s("google.svg"),Go:s("go.svg"),Kafka:s("kafka.svg","kafka-dark.png"),Linux:s("linux.svg"),Neo4j:s("neo4j.svg"),NextJS:s("nextjs.svg","nextjs-dark.svg"),Nginx:s("nginx.svg"),Numpy:s("numpy.svg"),Pandas:s("pandas.svg"),Phoenix:s("phoenix.svg"),RabbitMQ:s("rabbitmq.svg"),Ruby:s("ruby.svg"),RubyOnRails:s("rails.svg"),Rust:s("rust.svg"),SageMaker:s("sagemaker.svg"),Scrapy:s("scrapy.png"),Selenium:s("selenium.svg"),Terraform:s("terraform.svg"),Docker:s("docker.svg"),Kubernetes:s("kubernetes.svg"),Csharp:s("csharp.svg"),Xamarin:s("xamarin.svg"),TypeScript:s("ts.png"),VueJs:s("vue.png"),ReactJs:s("react.svg"),Dart:s("dart.png"),Kotlin:s("kotlin.png"),Python:s("python.png"),Puppeteer:s("puppeteer.svg"),PyTorch:s("pytorch.svg"),Transformers:s("huggingface.svg"),NodeJs:s("node.png"),Deno:s("deno.png","deno-dark.svg"),Svelte:s("svelte.png"),ExpressJs:s("express.png"),JavaScript:s("js.png"),Fastify:s("fastify.svg","fastify-dark.png"),NestJs:s("nest.svg"),Quasar:s("quasar.svg"),SolidJs:s("solid.svg"),Electron:s("electron.png"),Flutter:s("flutter.svg"),Java:s("java.png"),AdonisJs:s("adonis.png"),Android:s("android.png"),Angular:s("angular.png"),PostgreSQL:s("postgres.png"),Firebase:s("firebase.png"),Sass:s("sass.png"),Unknown:s("no-img.svg"),MongoDB:s("mongodb.svg"),Redis:s("redis.svg"),Tailwind:s("tailwind.svg"),HTML:s("html.svg"),Premiere:s("premiere.svg"),Photoshop:s("photoshop.svg"),CSS:s("css.svg"),AfterEffects:s("after-effects.svg"),Illustrator:s("illustrator.svg"),Nuxt:s("nuxt.png"),Vite:s("vite.png"),Vitest:s("vitest.svg"),Jest:s("jest.png"),Unocss:s("unocss.svg"),Ruvy:s("ruvy.svg"),Postcss:s("postcss.svg"),Columbia:s("columbia.webp"),deinon:s("deinon.png"),EcoMap:s("ecomap.svg")},Z=(e,n)=>typeof e=="string"?e:typeof e.dark=="string"&&n?e.dark:e.light;globalThis&&globalThis.__awaiter;function V(e){let n,i;return{c(){n=L("i"),this.h()},l(t){n=q(t,"I",{class:!0}),I(n).forEach(C),this.h()},h(){M(n,"class",i=`${e[0]} ${e[1]}`)},m(t,r){K(t,n,r)},p(t,[r]){r&3&&i!==(i=`${t[0]} ${t[1]}`)&&M(n,"class",i)},i:P,o:P,d(t){t&&C(n)}}}function z(e,n,i){let{icon:t=void 0}=n,{classes:r=""}=n;return e.$$set=g=>{"icon"in g&&i(0,t=g.icon),"classes"in g&&i(1,r=g.classes)},[t,r]}class $ extends E{constructor(n){super(),D(this,n,z,V,U,{icon:0,classes:1})}}export{Y as A,$ as U,O as e,Z as g,W as o,X as u};

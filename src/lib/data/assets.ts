import type { Asset } from '$lib/types';
import { base } from '$app/paths';

const gh = (file: string) => `${base}/logos/${file}`;

const a = (light: string, dark?: string): Asset =>
	dark ? { dark: gh(dark), light: gh(light) } : gh(light);

const Assets = {
	Airflow: a('airflow.svg'),
	AWS: a('aws.svg'),
	Azure: a('azure.svg'),
	Bootstrap: a('bootstrap.svg'),
	C: a('c.svg'),
	Cpp: a('cpp.svg'),
	Celery: a('celery.svg'),
	Django: a('django.svg'),
	Elixir: a('elixir.svg'),
	FastApi: a('fastapi.svg'),
	Flask: a('flask.svg', 'flask-dark.png'),
	GCP: a('google.svg'),
	Go: a('go.svg'),
	Kafka: a('kafka.svg', 'kafka-dark.png'),
	Linux: a('linux.svg'),
	Neo4j: a('neo4j.svg'),
	NextJS: a('nextjs.svg', 'nextjs-dark.svg'),
	Nginx: a('nginx.svg'),
	Numpy: a('numpy.svg'),
	Pandas: a('pandas.svg'),
	Phoenix: a('phoenix.svg'),
	RabbitMQ: a('rabbitmq.svg'),
	Ruby: a('ruby.svg'),
	RubyOnRails: a('rails.svg'),
	Rust: a('rust.svg'),
	SageMaker: a('sagemaker.svg'),
	Scrapy: a('scrapy.png'),
	Selenium: a('selenium.svg'),
	Terraform: a('terraform.svg'),
	Docker: a('docker.svg'),
	Kubernetes: a('kubernetes.svg'),
	Csharp: a('csharp.svg'),
	Xamarin: a('xamarin.svg'),
	TypeScript: a('ts.png'),
	VueJs: a('vue.png'),
	ReactJs: a('react.svg'),
	Dart: a('dart.png'),
	Kotlin: a('kotlin.png'),
	Python: a('python.png'),
	Puppeteer: a('puppeteer.svg'),
	PyTorch: a('pytorch.svg'),
	Transformers: a('huggingface.svg'),
	NodeJs: a('node.png'),
	Deno: a('deno.png', 'deno-dark.svg'),
	Svelte: a('svelte.png'),
	ExpressJs: a('express.png'),
	JavaScript: a('js.png'),
	Fastify: a('fastify.svg', 'fastify-dark.png'),
	NestJs: a('nest.svg'),
	Quasar: a('quasar.svg'),
	SolidJs: a('solid.svg'),
	Electron: a('electron.png'),
	Flutter: a('flutter.svg'),
	Java: a('java.png'),
	AdonisJs: a('adonis.png'),
	Android: a('android.png'),
	Angular: a('angular.png'),
	PostgreSQL: a('postgres.png'),
	Firebase: a('firebase.png'),
	Sass: a('sass.png'),
	Unknown: a('no-img.svg'),
	MongoDB: a('mongodb.svg'),
	Redis: a('redis.svg'),
	Tailwind: a('tailwind.svg'),
	HTML: a('html.svg'),
	Premiere: a('premiere.svg'),
	Photoshop: a('photoshop.svg'),
	CSS: a('css.svg'),
	AfterEffects: a('after-effects.svg'),
	Illustrator: a('illustrator.svg'),
	Nuxt: a('nuxt.png'),
	Vite: a('vite.png'),
	Vitest: a('vitest.svg'),
	Jest: a('jest.png'),
	Unocss: a('unocss.svg'),
	Ruvy: a('ruvy.svg'),
	Postcss: a('postcss.svg'),
	Columbia: a('columbia.webp'),
	deinon: a('deinon.png'),
	EcoMap: a('ecomap.svg')
};

export default Assets;

export const getAssetURL = (asset: Asset, currentTheme: boolean): string => {
	if (typeof asset === 'string') {
		return asset;
	} else if (typeof asset.dark === 'string' && currentTheme) {
		return asset.dark;
	} else {
		return asset.light;
	}
};

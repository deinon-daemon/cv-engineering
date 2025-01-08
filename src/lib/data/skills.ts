import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'python',
		color: 'blue',
		description:
			'Python is a versatile and powerful programming language widely used for web development, scientific computing, data analysis, and more.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'pytorch',
		color: 'orange',
		description:
			'PyTorch is an open-source machine learning library for Python that provides a flexible and dynamic deep learning framework, widely used in research and production.',
		logo: Assets.PyTorch,
		name: 'PyTorch',
		category: 'library'
	}),
	defineSkill({
		slug: 'transformers',
		color: 'green',
		description:
			'Transformers is a popular library built on top of PyTorch for natural language processing (NLP) tasks, offering pre-trained models like BERT, GPT, and more for text generation and understanding.',
		logo: Assets.Transformers,
		name: 'Transformers',
		category: 'library'
	}),
	defineSkill({
		slug: 'rust',
		color: 'red',
		description:
			'Rust is a systems programming language focused on safety, speed, and concurrency, ideal for building reliable and efficient software with modern features.',
		logo: Assets.Rust,
		name: 'Rust',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ruby',
		color: 'red',
		description:
			'Ruby is a dynamic, object-oriented programming language known for its simplicity and productivity in building web applications.',
		logo: Assets.Ruby,
		name: 'Ruby',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'rubyonrails',
		color: 'red',
		description:
			'Ruby on Rails is a full-stack web application framework written in Ruby that emphasizes convention over configuration and rapid development through built-in tools and conventions.',
		logo: Assets.RubyOnRails,
		name: 'Ruby on Rails',
		category: 'framework'
	}),
	defineSkill({
		slug: 'linux',
		color: 'green',
		description:
			'Linux is an open-source operating system kernel that serves as the foundation for various distributions used in servers, desktops, and embedded devices.',
		logo: Assets.Linux,
		name: 'Linux',
		category: 'devops'
	}),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description:
			'Docker is a containerization platform that simplifies the process of packaging, distributing, and running applications in isolated environments.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'gcp',
		color: 'blue',
		description:
			'Google Cloud Platform (GCP) provides various cloud services and infrastructure resources for developing and running applications, data storage, and machine learning solutions.',
		logo: Assets.GCP,
		name: 'GCP',
		category: 'devops'
	}),
	defineSkill({
		slug: 'aws',
		color: 'blue',
		description:
			'Amazon Web Services (AWS) is a comprehensive cloud platform offering a multitude of services including computing power, storage, databases, machine learning, and more.',
		logo: Assets.AWS,
		name: 'AWS',
		category: 'devops'
	}),
	defineSkill({
		slug: 'azure',
		color: 'blue',
		description:
			'Microsoft Azure is a cloud computing platform that offers a wide range of services for building, deploying, and managing applications and services through data centers worldwide.',
		logo: Assets.Azure,
		name: 'Azure',
		category: 'devops'
	}),
	defineSkill({
		slug: 'nextjs',
		color: 'blue',
		description:
			'Next.js is a React framework for building server-side rendered and static web applications with a focus on performance, SEO, and developer experience.',
		logo: Assets.NextJS,
		name: 'Next.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'django',
		color: 'green',
		description:
			'Django is a high-level Python web framework renowned for its simplicity, scalability, and rapid development capabilities, making it ideal for building robust web applications.',
		logo: Assets.Django,
		name: 'Django',
		category: 'framework'
	}),
	defineSkill({
		slug: 'fastapi',
		color: 'blue',
		description:
			'FastAPI is a modern Python web framework designed for high performance and ease of use in building APIs with automatic validation, serialization, and documentation.',
		logo: Assets.FastApi,
		name: 'FastAPI',
		category: 'framework'
	}),
	defineSkill({
		slug: 'elixir',
		color: 'purple',
		description:
			'Elixir is a functional programming language designed for building scalable and maintainable applications, especially in the realm of distributed systems.',
		logo: Assets.Elixir,
		name: 'Elixir',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'phoenix',
		color: 'red',
		description:
			"Phoenix is a productive web framework for Elixir that leverages the Erlang VM's concurrency and fault-tolerance capabilities to build scalable and fault-tolerant applications.",
		logo: Assets.Phoenix,
		name: 'Phoenix',
		category: 'framework'
	}),
	defineSkill({
		slug: 'puppeteer',
		color: 'blue',
		description:
			'Puppeteer is a Node.js library for controlling headless Chrome or Chromium browsers, enabling automated testing, web scraping, and other web automation tasks.',
		logo: Assets.Puppeteer,
		name: 'Puppeteer',
		category: 'library'
	}),

	defineSkill({
		slug: 'airflow',
		color: 'blue',
		description:
			'Apache Airflow is an open-source platform to programmatically author, schedule, and monitor workflows, making it easy to manage complex data pipelines.',
		logo: Assets.Airflow,
		name: 'Airflow',
		category: 'devops'
	}),
	defineSkill({
		slug: 'kubernetes',
		color: 'blue',
		description:
			'Kubernetes is a popular container orchestration platform that automates the deployment, scaling, and management of containerized applications in a cluster environment.',
		logo: Assets.Kubernetes,
		name: 'Kubernetes',
		category: 'devops'
	}),
	defineSkill({
		slug: 'terraform',
		color: 'orange',
		description:
			'Terraform is an infrastructure as code tool that enables you to define and provision cloud infrastructure resources using declarative configuration files.',
		logo: Assets.Terraform,
		name: 'Terraform',
		category: 'devops'
	}),
	defineSkill({
		slug: 'postgres',
		color: 'blue',
		description:
			'PostgreSQL is a powerful open-source relational database management system known for its robust feature set, extensibility, and support for geographic data.',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'sagemaker',
		color: 'blue',
		description:
			'Amazon SageMaker is a fully managed machine learning service that simplifies the process of building, training, and deploying ML models at scale in the cloud.',
		logo: Assets.SageMaker,
		name: 'SageMaker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'bootstrap',
		color: 'purple',
		description:
			'Bootstrap is a popular front-end framework for building responsive and modern web interfaces with pre-designed components and styles.',
		logo: Assets.Bootstrap,
		name: 'Bootstrap',
		category: 'framework'
	}),
	defineSkill({
		slug: 'c',
		color: 'blue',
		description:
			'C is a powerful and efficient programming language commonly used for system programming, embedded development, and high-performance applications.',
		logo: Assets.C,
		name: 'C',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'cpp',
		color: 'blue',
		description:
			'C++ is a versatile programming language known for its performance and support for object-oriented programming paradigms, widely used in game development, system software, and more.',
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'celery',
		color: 'green',
		description:
			'Celery is a distributed task queue system used in Python applications for handling asynchronous tasks, task scheduling, and periodic tasks with support for multiple broker systems.',
		logo: Assets.Celery,
		name: 'Celery',
		category: 'library'
	}),
	defineSkill({
		slug: 'flask',
		color: 'green',
		description:
			'Flask is a lightweight and versatile Python web framework suitable for small to large-scale applications, emphasizing simplicity and extensibility.',
		logo: Assets.Flask,
		name: 'Flask',
		category: 'framework'
	}),
	defineSkill({
		slug: 'go',
		color: 'blue',
		description:
			'Go, also known as Golang, is a statically typed, compiled programming language designed for simplicity and efficiency in building scalable and reliable software.',
		logo: Assets.Go,
		name: 'Go',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'kafka',
		color: 'blue',
		description:
			'Apache Kafka is a distributed event streaming platform used for building real-time data pipelines and streaming applications with high-throughput and fault tolerance.',
		logo: Assets.Kafka,
		name: 'Kafka',
		category: 'library'
	}),
	defineSkill({
		slug: 'neo4j',
		color: 'blue',
		description:
			'Neo4j is a graph database management system optimized for storing and querying graph data models, offering high performance for graph-based applications.',
		logo: Assets.Neo4j,
		name: 'Neo4j',
		category: 'db'
	}),
	defineSkill({
		slug: 'nginx',
		color: 'green',
		description:
			'Nginx is a high-performance web server and reverse proxy known for its scalability, speed, and efficient handling of concurrent connections.',
		logo: Assets.Nginx,
		name: 'Nginx',
		category: 'devops'
	}),
	defineSkill({
		slug: 'numpy',
		color: 'blue',
		description:
			'NumPy is a powerful library for numerical computing in Python, providing support for large multidimensional arrays, matrices, and high-level mathematical functions.',
		logo: Assets.Numpy,
		name: 'NumPy',
		category: 'library'
	}),
	defineSkill({
		slug: 'pandas',
		color: 'blue',
		description:
			'Pandas is a versatile data manipulation and analysis library for Python, offering data structures and tools for working with structured data efficiently.',
		logo: Assets.Pandas,
		name: 'Pandas',
		category: 'library'
	}),
	defineSkill({
		slug: 'rabbitmq',
		color: 'pink',
		description:
			'RabbitMQ is a robust and scalable message broker that facilitates communication between microservices, providing reliable message queueing functionality.',
		logo: Assets.RabbitMQ,
		name: 'RabbitMQ',
		category: 'library'
	}),
	defineSkill({
		slug: 'scrapy',
		color: 'blue',
		description:
			'Scrapy is a powerful web crawling and scraping framework for Python used to extract and process structured data from websites and APIs efficiently.',
		logo: Assets.Scrapy,
		name: 'Scrapy',
		category: 'library'
	}),
	defineSkill({
		slug: 'selenium',
		color: 'purple',
		description:
			'Selenium is an open-source automation testing tool used for web application testing, facilitating the automation of browsers for testing purposes.',
		logo: Assets.Selenium,
		name: 'Selenium',
		category: 'library'
	}),
	defineSkill({
		slug: 'nodejs',
		color: 'green',
		description:
			'Node.js is a server-side JavaScript runtime that allows developers to build scalable, event-driven applications and APIs using JavaScript on the server.',
		logo: Assets.NodeJs,
		name: 'Node.js',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'deno',
		color: 'black',
		description:
			'Deno is a secure runtime for JavaScript and TypeScript that offers built-in utilities, security features, and a package manager to simplify development workflows.',
		logo: Assets.Deno,
		name: 'Deno',
		category: 'framework'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description:
			'Svelte is a modern JavaScript framework known for its reactive components and efficient DOM manipulation, enabling fast and lightweight web applications.',
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}),
	defineSkill({
		slug: 'expressjs',
		color: 'blue',
		description:
			'Express.js is a minimalist and flexible Node.js web application framework suitable for building APIs, web servers, and full-stack web applications.',
		logo: Assets.ExpressJs,
		name: 'Express.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'javascript',
		color: 'yellow',
		description:
			'JavaScript is a versatile programming language used for front-end and back-end web development, enabling dynamic and interactive web content.',
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'firebase',
		color: 'orange',
		description:
			'Firebase is a comprehensive platform by Google for building mobile and web applications with features like real-time database, authentication, cloud messaging, and more.',
		logo: Assets.Firebase,
		name: 'Firebase',
		category: 'framework'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description:
			'Sass is a popular CSS extension language that simplifies styling in web development by offering features like variables, nesting, and mixins for efficient styling.',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		description:
			'MongoDB is a NoSQL database management system that provides a flexible and scalable document-based data model, commonly used in modern web applications.',
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}),
	defineSkill({
		slug: 'redis',
		color: 'red',
		description:
			'Redis is an open-source, in-memory data structure store known for its speed and versatility in caching, session storage, message brokering, and more.',
		logo: Assets.Redis,
		name: 'Redis',
		category: 'db'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'blue',
		description:
			'Tailwind CSS is a utility-first CSS framework that streamlines the process of building custom designs with a focus on efficiency and ease of use in web development.',
		logo: Assets.Tailwind,
		name: 'Tailwind CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'premiere',
		color: 'blue',
		description:
			'Adobe Premiere Pro is a powerful video editing software used for creating professional video productions, offering a range of features for editing, effects, and color correction.',
		logo: Assets.Premiere,
		name: 'Premiere Pro',
		category: 'design'
	}),
	defineSkill({
		slug: 'photoshop',
		color: 'blue',
		description:
			'Adobe Photoshop is a versatile image editing software for graphic design, photo editing, and digital art creation with features like layers, filters, and transformations.',
		logo: Assets.Photoshop,
		name: 'Photoshop',
		category: 'design'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'CSS (Cascading Style Sheets) is a styling language for HTML to control the presentation and layout of web pages, defining styles, colors, fonts, and more.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'aftereffects',
		color: 'cyan',
		description:
			'Adobe After Effects is a powerful motion graphics and visual effects software for creating animations, compositing, and visual storytelling in video projects.',
		logo: Assets.AfterEffects,
		name: 'After Effects',
		category: 'design'
	}),
	defineSkill({
		slug: 'illustrator',
		color: 'red',
		description:
			'Adobe Illustrator is a vector graphics editor used for creating scalable illustrations, logos, icons, and artwork with precision and flexibility in graphic design.',
		logo: Assets.Illustrator,
		name: 'Illustrator',
		category: 'design'
	}),
	defineSkill({
		slug: 'nuxt',
		color: 'green',
		description:
			'Nuxt.js is a progressive Vue.js framework for building server-side rendered and static web applications, offering features like routing, transitions, and modules.',
		logo: Assets.Nuxt,
		name: 'Nuxt.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'vite',
		color: 'blue',
		description:
			'Vite is a modern build tool for web development projects, providing fast and efficient development experience using native ES modules and lightweight bundling.',
		logo: Assets.Vite,
		name: 'Vite',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'vitest',
		color: 'blue',
		description:
			'Vitest is a comprehensive testing library and framework for Vue.js applications, offering powerful testing utilities and features for ensuring code quality.',
		logo: Assets.Vitest,
		name: 'Vitest',
		category: 'test'
	}),
	defineSkill({
		slug: 'jest',
		color: 'red',
		description:
			'Jest is a popular JavaScript testing framework that simplifies the process of writing and running tests for applications, providing robust testing capabilities and support.',
		logo: Assets.Jest,
		name: 'Jest',
		category: 'test'
	}),
	defineSkill({
		slug: 'unocss',
		color: 'green',
		description:
			'UnoCSS is a utility-first CSS framework for simplifying the process of styling web applications with customizable components and theming capabilities.',
		logo: Assets.Unocss,
		name: 'UnoCSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'postcss',
		color: 'blue',
		description:
			'PostCSS is a versatile tool for transforming CSS with JavaScript plugins, enabling developers to enhance and streamline their CSS workflow with automation and optimization features.',
		logo: Assets.Postcss,
		name: 'PostCSS',
		category: 'devtools'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

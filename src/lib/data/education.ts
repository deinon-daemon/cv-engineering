import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Honors Bachelor of Arts in Linguistics',
		color: 'blue',
		description:
			'Columbia University Linguistics, Honors Thesis on Language Documentation and Revitalization of txʷəlšucid and other Coastal Salish Languages',
		location: ['New York City, NY', 'Seattle, WA'],
		logo: Assets.Columbia,
		name: 'BA of Linguistics, Columbia University',
		organization: 'Columbia College, Columbia University',
		period: { from: new Date(2020, 5, 1), to: new Date(2022, 5, 1) },
		shortDescription: '',
		slug: 'linguistics-ba-columbia',
		subjects: [
			'Cognitive & Computational Linguistics',
			'Neuroscience of Language & Speech Pathology',
			'Language Documentation',
			'Acoustic Phonetics',
			'Translation Studies',
			'French',
			'Wolof',
			'Ancient & Modern Greek',
			'Python',
			'C',
			'R'
		]
	},
	{
		degree: 'Founding Engineer, Autodidacticism, On the Job Mentorship',
		color: 'red',
		description:
			"Worked directly with Founder, Pava LaPere, to design and develop multiple fullstack applications by myself, and moreover, to establish and architect the organization's GitHub & Google Cloud Infrastructure",
		location: ['New York City, NY', 'Baltimore, MD'],
		logo: Assets.EcoMap,
		name: 'Founding Engineer, Autodidact in Cloud Software Engineering',
		organization: 'EcoMap Technologies',
		period: { from: new Date(2022, 5, 1), to: new Date(2024, 11, 31) },
		shortDescription: '',
		slug: 'engineering-ecomap',
		subjects: [
			'Google Cloud Platform',
			'Linux',
			'Docker',
			'Data ETL & Warehousing',
			'postgreSQL',
			'JavaScript',
			'TypeScript',
			'React.js',
			'Next.js',
			'Ruby on Rails',
			'FastAPI',
			'React Native',
			'Rust',
			'Golang',
			'C++',
			'Elixir',
			'LLM Training & Fine Tuning',
			'Transformers',
			'PyTorch',
			'keras',
			'CUDA',
			'LlamaIndex',
			'Algorithms and Data Structures',
			'Amazon Web Services',
			'Azure Cloud'
		]
	},
	{
		degree: 'Freelance Web Developer, ML Engineering & Linguistic Consultancy',
		color: 'aquamarine',
		description: '',
		location: ['New York City, NY'],
		logo: Assets.deinon,
		name: 'Freelance Web Developer, ML Engineering & Linguistic Consultancy',
		organization: '',
		period: { from: new Date(2023, 1) },
		shortDescription: '',
		slug: 'freelance-engineering',
		subjects: [
			'Rust Wasm Fullstack Application Development',
			'Ruby on Rails MVC Application Development',
			'Elixir Phoenix & RabbitMQ Solutions Consulting',
			'Portfolio & Digital Store Front Development',
			'SvelteKit',
			'Next.js',
			'React Native for Mobile',
			'Fullstack Engineering'
		]
	}
];

export const title = 'Education & Experience';

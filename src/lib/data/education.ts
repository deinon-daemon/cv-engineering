import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Honors Bachelor of Linguistics',
		description: '',
		location: 'Tunisia',
		logo: Assets.Unknown,
		name: '',
		organization: 'ISTIC',
		period: { from: new Date(2020, 0, 1), to: new Date(2022, 5, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: [
			'Cognitive & Computational Linguistics',
			'Language Documentation',
			'Acoustic Phonetics',
			'Python',
			'C',
			'Java',
			'French',
			'Wolof',
			''
		]
	},
	{
		degree: 'Workplace Mentorship, Professional Development',
		description: '',
		location: 'USA',
		logo: Assets.Unknown,
		name: '',
		organization: 'MIT',
		period: { from: new Date(2023, 0, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	}
];

export const title = 'Education';

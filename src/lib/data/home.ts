import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Benjamin Carsley - Fullstack Application Builder, Cloud DevOps Specialist, ML Engineer';

export const name = 'Benjamin';

export const lastName = 'Carsley';

export const description =
'Fullstack Application Builder, Cloud DevOps Specialist, ML || AI Engineer'

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/deinon-daemon' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/benjamin-carsley-89a4b2239'
	},
	// {
	// 	platform: Platform.Twitter,
	// 	link: 'https://twitter.com/'
	// },
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/users/29098031/benjamin-blaustein'
	},
	{
		platform: Platform.Email,
		link: 'deinon.daemon@gmail.com'
	},
	{
		platform: Platform.Huggingface,
		link: 'https://huggingface.co/deinon-daemon'
	}
	// {
	// 	platform: Platform.Youtube,
	// 	link: 'https://www.youtube.com'
	// },
	// {
	// 	platform: Platform.Facebook,
	// 	link: 'https://www.facebook.com'
	// }
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');

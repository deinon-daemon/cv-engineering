<script lang="ts">
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { titleSuffix } from '@data/app';
	import { links, description, lastName, name, title, skills } from '@data/home';
	import { items as skillsItems } from '@data/skills';
	import { useTitle } from '$lib/utils/helpers';
	import { isBlank } from '@riadh-adrani/utils';
	import { getPlatfromIcon } from '$lib/utils';
	import { onMount } from 'svelte';

	// injecting giphy animation for dynamic bg
	//
	function getRandomInt(min: number, max: number) {
		min = Math.ceil(min); // Ensure min is included
		max = Math.floor(max); // Ensure max is included
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	const gifs: Array<string> = [
		'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXlrazY3N3h5Z2NzanJkMHVhMmJtNDlqemNtc2UzZW9nZXU2NXJhNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jHwklFMXUPnhuaYnQI/giphy.gif',
		'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3NtOGx0eHBqYWcyeWtnanRubGx5NDB3aXBsaW41b2U1bXA2eHM4eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5nJoxrHqXcUKLcb5AS/giphy.gif',
		'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTZoMzRsbHBzdGQzeWp4bWZhYnJ3bW45bmozYnBoMGpibHFlYnN1dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ee1hUiz207iqEkXIEE/giphy-downsized-large.gif',
		'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExajl1aW0zd29xYTRnMjl1NWhsNmxiYzh3YWtyMjV2Y21ocGpvdjQ1NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dx6fcvp6g8uJf8Eoih/giphy.gif',
		'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmxsZ2FoZ3l0dTFicnU2Y2l4Z2Fodzk4aWU3bGk3YjN1eWYyb292NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U5DkjJdBh2aia7fHm1/giphy-downsized-large.gif',
		'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGgxNm1taG8wanZub3hxajRuNG9wNWlueWZ0NG0wenNhdGNtNnUzNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h1ZpPhIOlYmJAQZkOu/giphy-downsized-large.gif'
	];
	let gif = gifs[getRandomInt(0, gifs.length - 1)];
	// conways
	// "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHRrNWh1ZzQxaHcxcTQyYzBkZDhvcW90MWhtMTJ0NGZkandjbGE4cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LwRYWO8caPnIGPFMAA/giphy.gif";

	onMount(() => {
		if (document) {
			const container: HTMLElement | null = document.querySelector('div#cta-container');

			const theme = document.querySelector('html')?.getAttribute('data-theme');
			//console.log('Theme: ', theme);
			if (container && container?.style) {
				container.style.background = `url(${gif}) center bottom`;
				// lmao "https://media.giphy.com/media/839DsJwSJTIo5kG6D5/giphy.gif"
				// also good https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExemdzNHpsNjh6dDlvb280bHVkYThuNHp3OTkwZTh4czhuOWNxN3I4NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qoJ9sZu2Xui9a/giphy.gif
				container.style.backgroundRepeat = 'repeat';
				container.style.zIndex = '9999';
				container.style.position = 'absolute';
				container.style.top = '0';
				container.style.left = '0';
				container.style.right = '0';
				container.style.bottom = '0';
				container.style.backgroundSize = '10%';
				document.onclick = function () {
					container.style.background = '';
					container.style.display = 'none';
				};

				setTimeout(() => {
					container.style.opacity = '0';
					container.style.transition = 'opacity 1s ease';
				}, 4000);
			}
		}
	});

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};
</script>

<svelte:head>
	<title>{useTitle(title, titleSuffix)}</title>
</svelte:head>

<div id="cta-container" class="relative z-10" />
<div
	class="col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px"
>
	<div class="md:flex-1 gap-10px">
		<MainTitle classes="md:text-left ">{name} {lastName}</MainTitle>
		<p class="text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight">
			{description}
		</p>
		<div class="row justify-center md:justify-start p-y-15px p-x-0px gap-2">
			{#each links as link}
				<a
					class="decoration-none"
					href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`}
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon={getPlatfromIcon(link.platform)} color={'var(--accent-text)'} size={'50px'} />
				</a>
			{/each}
		</div>
	</div>
	<Carrousel items={skillsItems ?? skills} />
</div>

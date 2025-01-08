<script>
	import { data, title } from '@data/resume';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
</script>

<CommonPage {title}>
	<div class="resume">
		<iframe
			style="border: 0; width:100%; height: 500px; overflow: auto;"
			title="benjamin carsley's resume"
			src="https://docs.google.com/document/d/e/2PACX-1vTQUHQwPLGCI--wKhy9H0wPUJG_FEICgjdWNgu3AiNz3_iwM3_CAadvuQqaAi80D4_W0afb72RFksNV/pub?embedded=true">
		</iframe>
	</div>
</CommonPage>

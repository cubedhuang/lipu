<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<nav class="mt-8 mx-auto max-w-prose">
	<a href="/" class="link">lipu ale</a>
</nav>

<main class="mt-8 mb-20 mx-auto prose prose-blue prose-a:link">
	<svelte:component this={data.component} />
</main>

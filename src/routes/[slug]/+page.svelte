<script lang="ts">
	import type { PageData } from './$types';

	import { formatDate } from '$lib/util';

	export let data: PageData;
</script>

<nav class="mt-12 mx-auto max-w-prose print:hidden">
	<a href="/" class="link">lipu ale</a>
</nav>

<main
	class="mt-8 mb-20 mx-auto
		prose prose-blue prose-a:link
		prose-blockquote:font-normal prose-blockquote:text-inherit prose-blockquote:not-italic
		prose-p:before:content-none prose-p:after:content-none"
>
	<h1 class="mb-0">{data.metadata.title}</h1>
	<p class="mt-2 text-sm">{formatDate(data.metadata.date)}</p>

	<svelte:component this={data.component} />
</main>

<style lang="postcss">
	.prose :global(code:not(:where(pre code))) {
		@apply before:content-none after:content-none text-green-600 text-base;
	}
</style>

<script lang="ts">
	import type { PageData } from './$types';

	import { formatDate } from '$lib/util';

	export let data: PageData;
</script>

<nav class="mt-12 mx-auto max-w-prose">
	<a href="/" class="link">lipu ale</a>
</nav>

<main
	class="mt-8 mb-20 mx-auto
		prose prose-blue prose-a:link
		prose-blockquote:font-normal prose-blockquote:text-inherit prose-blockquote:not-italic
		prose-p:before:content-none prose-p:after:content-none"
>
	<h1 class="mb-0">{data.metadata.title}</h1>
	<p class="mt-0">{formatDate(data.metadata.date)}</p>

	<svelte:component this={data.component} />
</main>

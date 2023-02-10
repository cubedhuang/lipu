<script lang="ts">
	import type { PageData } from './$types';

	import Meta from '$lib/components/Meta.svelte';

	export let data: PageData;

	function formatDate(value: string) {
		const date = new Date(value);
		const year = date.getUTCFullYear();
		const month = `${date.getUTCMonth() + 1}`.padStart(2, '0');
		const day = `${date.getUTCDate()}`.padStart(2, '0');

		return `${year}/${month}/${day}`;
	}
</script>

<Meta title="lipu tan ijo Tani" description="ni li kulupu lipu tan ijo Tani!" />

<div class="mt-16 mx-auto prose prose-lg">
	<h1>lipu tan ijo Tani!</h1>
	<p>kulupu lipu ni la, mi sitelen e ijo sona mi.</p>
</div>

<ul class="mt-8 mb-20 mx-auto max-w-prose text-lg grid sm:grid-cols-2 gap-4">
	{#each data.lipu as lipu}
		<a href="/lipu/{lipu.slug}" class="rounded-lg focus-outline">
			<li
				class="h-full p-6 rounded-lg bg-gray-50 shadow border border-gray-200
					hover:shadow-lg hover:scale-[1.02] transition"
			>
				<article class="prose prose-lg">
					<h2 class="mb-1">{lipu.title}</h2>

					<p class="my-1 text-sm text-gray-500">
						{formatDate(lipu.date)}
					</p>

					<p class="my-0">{lipu.description}</p>
				</article>
			</li>
		</a>
	{/each}
</ul>

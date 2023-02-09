<script lang="ts">
	import type { PageData } from './$types';

	import Meta from '$lib/components/Meta.svelte';

	export let data: PageData;
</script>

<Meta title="lipu tan ijo Tani" description="ni li kulupu lipu tan ijo Tani!" />

<div class="mt-16 mx-auto prose">
	<h1>lipu tan ijo Tani!</h1>
	<p>kulupu lipu ni la, mi sitelen e ijo sona mi.</p>
</div>

<ul class="mt-8 mb-20 mx-auto max-w-prose grid sm:grid-cols-2">
	{#each data.lipu as lipu}
		<a href="/lipu/{lipu.slug}" class="rounded-lg focus-outline">
			<li
				class="p-6 rounded-lg bg-gray-50 shadow border border-gray-200
					hover:shadow-lg hover:scale-[1.02] transition"
			>
				<article class="prose">
					<h2 class="mb-1">{lipu.title}</h2>

					<p class="my-1 text-sm text-gray-500">
						{lipu.date}
					</p>

					<p class="my-0">{lipu.description}</p>
				</article>
			</li>
		</a>
	{/each}
</ul>

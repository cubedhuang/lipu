<script lang="ts">
	import type { PageData } from './$types';

	import { formatDate } from '$lib/util';

	import Meta from '$lib/components/Meta.svelte';

	export let data: PageData;
</script>

<Meta title="lipu pi ilo Tani" description="ni li kulupu lipu pi ilo Tani!" />

<div class="mt-16 mx-auto prose">
	<h1>lipu pi ilo Tani!</h1>
	<p>
		kulupu lipu ni la, mi sitelen e ijo sona mi. o lukin e
		<a href="/ni" class="link">sona pi lipu ni</a>!
	</p>
</div>

<ul class="mt-8 mb-20 mx-auto max-w-prose grid sm:grid-cols-2 gap-4">
	{#each data.lipu as lipu}
		<a href="/{lipu.slug}" class="rounded-lg focus-outline">
			<li
				class="h-full p-6 rounded-lg bg-white shadow border border-gray-200
					hover:shadow-lg transition"
			>
				<article class="prose">
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

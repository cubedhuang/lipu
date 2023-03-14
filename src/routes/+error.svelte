<script lang="ts">
	import { page } from '$app/stores';

	import Meta from '$lib/components/Meta.svelte';
</script>

<Meta title="pakala" />

<div class="mt-16 mx-auto prose prose-a:link">
	<h1>pakala nanpa {$page.status}!</h1>

	{#if $page.status === 404}
		<p>lipu ni li lon ala a!</p>
	{:else}
		<p>mi pakala a! mi sona ala e ni: seme li kama pakala.</p>
	{/if}

	<p>ken la sina wile tawa <a href="/">ma kulupu</a>.</p>
</div>

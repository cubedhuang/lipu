<script>
	export let title = 'lipu';

	/** @type {string | undefined} */
	export let description = undefined;

	/** @type {string | undefined} */
	export let date = undefined;

	/** @type {boolean} */
	export let draft = false;
</script>

<svelte:head>
	<title>
		{draft ? 'pini ala | ' : ''}
		{title}
	</title>
	<meta name="og:title" content={title} />

	{#if description}
		<meta name="description" content={description} />
		<meta name="og:description" content={description} />
	{/if}

	{#if date}
		<meta name="article:published_time" content={date} />
	{/if}

	<meta name="og:type" content="website" />
	<meta name="og:site_name" content="lipu" />
</svelte:head>

<slot />

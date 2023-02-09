<script lang="ts">
	let count = 0;
</script>

<div
	class="not-prose flex w-fit rounded-lg bg-gray-50 shadow border border-gray-200"
>
	<button
		class="z-10 px-2 sitelen-pona focus-outline rounded-lg hover:bg-gray-100 transition-colors"
		on:click={() => count--}
	>
		lili
	</button>

	<p
		class="w-16 py-1 grid place-items-center bg-white border-x border-gray-200 text-center font-bold tabular-nums"
	>
		{count}
	</p>

	<button
		class="px-2 sitelen-pona focus-outline rounded-lg hover:bg-gray-100 transition-colors"
		on:click={() => count++}
	>
		suli
	</button>
</div>

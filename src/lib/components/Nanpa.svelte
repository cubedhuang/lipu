<script lang="ts">
	let count = 0;
</script>

<div
	class="not-prose flex w-fit rounded-lg bg-gray-50 shadow border border-gray-200"
>
	<button
		class="z-10 p-2 hover:bg-gray-100 font-pona focus-outline rounded-lg"
		on:click={() => count--}
	>
		lili
	</button>

	<p
		class="w-16 py-2 bg-white border-x border-gray-200 text-center font-bold tabular-nums"
	>
		{count}
	</p>

	<button
		class="p-2 hover:bg-gray-100 font-pona focus-outline rounded-lg"
		on:click={() => count++}
	>
		suli
	</button>
</div>

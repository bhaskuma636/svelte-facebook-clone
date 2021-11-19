<script>
	import Post from '$lib/components/Post.svelte'
</script>
<main>
	{#each Array(1) as _, index}
		<Post />
	{/each}
</main>
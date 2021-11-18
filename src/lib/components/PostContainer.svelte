<script>
	import Post from '$lib/components/Post.svelte'
</script>
<main>
	{#each Array(10) as _, index}
		<Post />
	{/each}
</main>
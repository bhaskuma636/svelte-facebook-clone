<script>
	import LeftSideBar from '$lib/components/LeftSideBar.svelte'
	import RightSideBar from '$lib/components/RightSideBar.svelte'
	import Stories from '$lib/components/Stories.svelte'
	import CreatePost from '$lib/components/CreatePost.svelte'
	import CreateRoom from '$lib/components/CreateRoom.svelte'
	import PostContainer from '$lib/components/PostContainer.svelte'

</script>
<main class="mx-auto lg:px-4 pt-[57px]">
	<div class="flex items-start space-x-2 justify-between">
		<div class="w-1/3 sticky top-[57px] -z-1">
			<LeftSideBar />
		</div>
		<div class="w-full lg:w-2/3">
			<Stories />
			<div class="lg:mr-6 mb-10">			
				<CreatePost />
				<CreateRoom />
				<PostContainer />
			</div>
		</div>
		<div class="w-1/3 sticky top-[57px] -z-1">
			<RightSideBar />
		</div>
	</div>
</main>
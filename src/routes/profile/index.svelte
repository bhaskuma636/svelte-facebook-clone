<script>
	import { userProfileData,profilePhoto } from '$lib/store/user'

	import Post from '$lib/components/Post.svelte'
	import Tabs from "$lib/components/Tabs.svelte";
	import PostContainer from "$lib/components/PostContainer.svelte";
	import SuggestedFrnds from "$lib/components/SuggestedFrnds.svelte";
	import Frnds from "$lib/components/Frnds.svelte";
	import EditProfile from "$lib/components/EditProfile.svelte";




	let tabItems = [
		{ label: "Posts", value: 1 },
		{ label: "About", value: 2 },
		{ label: "Friends", value: 3 },
		{ label: "Suggested", value: 4 }
	];

	let currentTab;


</script>


<main class="text-[#e4e6eb] mt-[57px] w-full">
	<div class="flex justify-center mt-[5rem] lg:-ml-10 lg:px-0 px-3">
		<div class="max-w-xl bg-gray-600 w-full  rounded-lg py-2 px-5">
			<div class="w-full flex items-center justify-start space-x-4 mr-10">		
				<div class="w-[5rem] h-[5rem] border-4 border-gray-700 rounded-full">
					<img class="w-full h-full object-cover rounded-full" src={$profilePhoto || $userProfileData?.photo} alt="img">
				</div>
				<div class="flex-1">	
					<h3 class="font-medium text-xl line-clamp-1 leading-relaxed">{$userProfileData?.name}</h3>
					<p class="italic text-gray-300 text-sm">300 Friends</p>
				</div>	
			</div>	
		</div>
	</div>

	<div class="flex justify-center mt-4 lg:-ml-10 lg:px-0 px-3">
		<div class="max-w-xl bg-[#242526] w-full  rounded-lg py-2 px-3 lg:px-5">
			<Tabs bind:activeTabValue={currentTab} items={tabItems} />
		</div>
	</div>

	{#if 1 === currentTab}
		<div class="lg:-ml-10 px-3">
  			<Post />
		</div>
	{/if}

	{#if 2 === currentTab}
		<div class="flex justify-center mt-4 lg:-ml-10 lg:px-0 px-3">
			<EditProfile />
		</div>
	{/if}

	{#if 3 === currentTab}
		<div class="flex justify-center mt-4 lg:-ml-10 lg:px-0 px-3">
			<Frnds />
		</div>
	{/if}

	{#if 4 === currentTab}
		<div class="flex justify-center mt-4 lg:-ml-10 lg:px-0 px-3">
			<SuggestedFrnds />
		</div>
	{/if}
</main>	
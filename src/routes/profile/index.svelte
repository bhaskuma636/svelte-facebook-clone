<script>
  import Tabs from "$lib/components/Tabs.svelte";
  import PostContainer from "$lib/components/PostContainer.svelte";

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
					<img class="w-full h-full object-cover rounded-full" src="https://scontent-maa2-1.xx.fbcdn.net/v/t1.6435-1/p160x160/140410108_522430372055176_3800608230781856331_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=XyFyPKOtp5AAX9GSm3b&_nc_ht=scontent-maa2-1.xx&oh=be3c3cac0f69dbb82b730a1c0bb03396&oe=61BB6A90" alt="img">
				</div>
				<div class="flex-1">	
					<h3 class="font-medium text-xl line-clamp-1 leading-relaxed">Manohar Maharshi</h3>
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
  			<PostContainer />
		</div>
	{/if}

	{#if 2 === currentTab}
	<div class="flex justify-center mt-4 lg:-ml-10 lg:px-0 px-3">
		<div class="max-w-xl bg-[#242526] w-full  rounded-lg py-2 pt-4 px-5">
			<div class="flex flex-col space-y-3">
				<div class="flex flex-col items-start space-y-1.5 w-full">	
					<label for="name" class="text-sm font-medium text-gray-400">
						<span>Display Name:</span>
						<small class="italic text-[0.7rem]">(The display name is the name visible to other members on the facebook)</small>
					</label>
					<input id="name" class="w-full py-2 px-3 rounded-lg bg-gray-600" type="text" placeholder="Name">
				</div>
				<div class="flex flex-col items-start space-y-1.5 w-full">	
					<label for="name" class="text-sm font-medium text-gray-400">
							<span>Profile Pic:</span>
							<small class="italic text-[0.7rem]">(Enter URL of the image)</small>
					</label>
					<input id="name" class="w-full py-2 px-3 rounded-lg bg-gray-600" type="url" placeholder="Profile Image ">
				</div>
				<div class="flex flex-col items-start space-y-1.5 w-full">	
					<label for="name" class="text-sm font-medium text-gray-400">
							<span>Profile Bio:</span>
							<small class="italic text-[0.7rem]">(A short description about yourself )</small>
					</label>
					<input id="name" class="w-full py-2 px-3 rounded-lg bg-gray-600" type="text" placeholder="Bio">
				</div>
				<div class="flex flex-col items-start space-y-1.5 w-full">	
					<label for="name" class="text-sm font-medium text-gray-400">
							<span>Email:</span>
							<small  class="italic text-[0.7rem]">(You can can't change email)</small>
					</label>
					<input id="name" class="w-full py-2 px-3 rounded-lg bg-gray-600" type="email" placeholder="Email">
				</div>
				<div class="flex items-center justify-end pt-1">	
					<button class="bg-[#1877f2] hover:bg-blue-600 active:transform active:scale-[0.99] py-1.5 px-5 text-white font-bold rounded-lg">Save</button>
				</div>	
			</div>
		</div>
	</div>
	{/if}

	{#if 3 === currentTab}
		<div class="flex justify-center mt-4 lg:-ml-10 lg:px-0 px-3">
			<div class="max-w-xl bg-[#242526] w-full  rounded-lg py-2 pt-4 px-5">
				<ul class="flex flex-col space-y-2.5">
					{#each Array(20) as _, index}
						<li class=" cursor-pointer flex items-center justify-start space-x-2.5 px-3 hover:bg-[#3a3b3c] rounded-lg py-1.5">
							<div class="w-8 rounded-full">
								<img class=" block rounded-full object-cover" src={`https://avatars.dicebear.com/api/avataaars/${index+20}.svg?background=dimgray`} alt="pic">
							</div>
							<p class="flex-1 font-medium text-[0.96rem] line-clamp-1">Lorem ipsum dolor sit</p>
							<div class="cursor-pointer grid place-items-center text-white rounded-full h-6 w-6 bg-[#3a3b3c]">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M20 12H4"/></svg>
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	{/if}

	{#if 4 === currentTab}
		<div class="flex justify-center mt-4 lg:-ml-10 lg:px-0 px-3">
			<div class="max-w-xl bg-[#242526] w-full  rounded-lg py-2 pt-4 px-5">
				<ul class="flex flex-col space-y-2.5 ">
					{#each Array(20) as _, index}
						<li class=" cursor-pointer flex items-center justify-start space-x-2.5 px-3 hover:bg-[#3a3b3c] rounded-lg py-1.5">
							<div class="w-8 rounded-full">
								<img class=" block rounded-full object-cover" src={`https://avatars.dicebear.com/api/avataaars/${index+20}.svg?background=dimgray`} alt="pic">
							</div>
							<p class="flex-1 font-medium text-[0.96rem] line-clamp-1">Lorem ipsum dolor sit</p>
							<div class="cursor-pointer grid place-items-center text-white rounded-full h-6 w-6 bg-[#3a3b3c]">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M12 20v-8m0 0V4m0 8h8m-8 0H4"/></svg>
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	{/if}
</main>	
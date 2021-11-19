<ul class="mt-5 flex flex-col space-y-2.5 ml-[1rem] hidden lg:flex">
	<h1 class="cursor-pointer font-medium text-[1.05rem] px-3 text-[#b0b3b8] flex items-center space-x-2">
		<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="fill-[#1877F2] mb-0.5 text-[#1877F2]"><circle cx="7" cy="5" r="3"/><path d="M10 12H5.898a3 3 0 0 0-2.976 2.628l-.641 5.124A2 2 0 0 0 4.266 22H9"/><path d="M21.719 19.752l-.64-5.124A3 3 0 0 0 18.101 12h-2.204a3 3 0 0 0-2.976 2.628l-.641 5.124A2 2 0 0 0 14.266 22h5.468a2 2 0 0 0 1.985-2.248z"/><circle cx="17" cy="5" r="3"/></svg>
		<span>Friends Suggestions</span>
	</h1>
	{#each Array(9) as _, index}
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
	<div class="flex items-center justify-center">
		<a class="text-xs text-blue-500" sveltekit:prefetch href="/profile">Show More</a>
	</div>
</ul>
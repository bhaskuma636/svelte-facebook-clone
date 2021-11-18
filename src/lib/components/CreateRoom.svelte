<ul class="hidden lg:flex  items-center space-x-3 px-4 py-2.5 bg-[#242526] rounded-md mt-4 container mx-auto max-w-lg">
	<li>
		<div class="inline-flex items-center justify-center px-4 pt-[6px] space-x-2.5 rounded-full border-2 border-[#1877F2]">
			<div>
				<i data-visualcompletion="css-img" class="hu5pjgll" style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/5zaboDASSye.png');background-position:0 -219px;background-size:auto;width:24px;height:24px;background-repeat:no-repeat;display:inline-block"></i>
			</div>
			<p class="pb-1.5 text-[#1877F2] text-base">Create Room</p>
		</div>
	</li>
	{#each Array(6) as _, index}
		<li>
			<div class="w-10 rounded-full">
				<img class=" block rounded-full object-cover" src={`https://avatars.dicebear.com/api/avataaars/${index}.svg?background=dimgray`} alt="pic">
			</div>
		</li>	
	{/each}
</ul>
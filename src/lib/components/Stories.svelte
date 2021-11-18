
	<ul class="hidden lg:flex mt-5 flex items-start space-x-3 justify-center mr-6 -z-2 w-full">
		<li class="shadow-md w-[7.1rem] h-[12rem] flex flex-col items-center rounded-lg text-white bg-[#242526]">
			<div class="flex-1">
				<img class="w-full h-full object-cover rounded-t-lg" src="https://scontent-maa2-1.xx.fbcdn.net/v/t1.6435-1/p160x160/140410108_522430372055176_3800608230781856331_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=XyFyPKOtp5AAX9GSm3b&_nc_ht=scontent-maa2-1.xx&oh=be3c3cac0f69dbb82b730a1c0bb03396&oe=61BB6A90" alt="img">
			</div>
			<div class="flex flex-col justify-between relative items-center py-2">
				<div class="bg-[#1877F2] absolute bottom-8 grid place-items-center w-8 h-8 rounded-full">
					<svg viewBox="0 0 20 20" class="h-4 w-4 fill-[#fff]"><g fill-rule="evenodd" transform="translate(-446 -350)"><g fill-rule="nonzero"><path d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z" transform="translate(354.5 159.5)"></path><path d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z" transform="translate(354.5 159.5)"></path></g></g></svg>
				</div>
				<p class="text-xs text-gray-300 pt-4">Create Story</p>
			</div>
		</li>
		{#each Array(4) as _, index}	
			<li class="shadow-md -z-1 w-[7.1rem] h-[12rem] flex flex-col items-center rounded-lg text-white bg-[#242526]">
				<img class="-z-1 absolute w-[7.1rem] h-[12rem] object-cover rounded-lg" src="https://scontent.fhyd9-1.fna.fbcdn.net/v/t39.30808-6/s280x280/257967226_3457546794387881_244368857751675820_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=535e6e&_nc_ohc=0ZYhCKdbWkEAX-C7Fw9&_nc_ht=scontent.fhyd9-1.fna&oh=4cd867cb6b3eb41398853c6d0a196b27&oe=619A8488" alt="img">
				<div class="-z-1 relative w-full h-full p-3 bg-gray-800/30 rounded-lg flex flex-col justify-between inset-0">
					<div class="w-8 rounded-full -z-1">
						<img class="-z-1 block rounded-full object-cover" src="https://scontent-maa2-1.xx.fbcdn.net/v/t1.6435-1/cp0/p40x40/94975531_833119273848577_8544913645291700224_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=1ZCczPPwCFQAX8Ba827&_nc_ht=scontent-maa2-1.xx&oh=553cad4c9424133fe9781f8776360e54&oe=61BCB17B" alt="pic">
					</div>
					<p class="line-clamp-2 -z-1 font-medium text-xs">
						5-Minute Crafts
					</p>
				</div>
			</li>
		{/each}
	</ul>
	<main class="w-full">
		<ul class="lg:hidden flex items-center space-x-3 px-4 py-2.5 bg-[#242526] rounded-md mt-4 w-full lg:container md:mx-auto lg:max-w-lg">
			<li>
				<div class="bg-[#1877F2] grid place-items-center w-10 h-10 rounded-full">
					<svg viewBox="0 0 20 20" class="h-4 w-4 fill-[#fff]"><g fill-rule="evenodd" transform="translate(-446 -350)"><g fill-rule="nonzero"><path d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z" transform="translate(354.5 159.5)"></path><path d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z" transform="translate(354.5 159.5)"></path></g></g></svg>
				</div>
			</li>
			{#each Array(5) as _, index}
				<li>
					<div class="w-10 rounded-full">
						<img class=" block rounded-full object-cover" src={`https://avatars.dicebear.com/api/avataaars/${index}.svg?background=dimgray`} alt="pic">
					</div>
				</li>	
			{/each}
		</ul>
	</main>
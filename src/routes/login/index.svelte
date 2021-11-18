<script>
	let isSignUpFormOpen = false;
	let error = false;
</script>
<main class="w-full h-screen bg-[#f0f2f5]">
	<div class="w-full h-full container mx-auto md:max-w-screen-lg md:flex items-center justify-center md:space-x-10 pt-7 md:pb-[5rem]">
		<div class="flex-1 container mx-auto text-center md:text-left w-full md:px-0 px-10 md:pt-0 py-4 pt-0">
			<div class="flex flex-col items-start w-full">
				<p class="text-[4rem] w-full text-[#1877f2] font-bold leading-tight select-none">facebook</p>
			    <h3 class="hidden md:block text-3xl text-gray-800">Facebook helps you connect and share with the people in your life.</h3>
			</div>
		</div>
		<div class="md:w-[40%] w-full shadow-xl border border-gray-300 py-9 p-5 rounded-lg flex flex-col space-y-6">
			{#if error}			
				<div class="w-full bg-red-500 -my-2 text-white px-2 py-2 rounded-lg line-clamp-1 overflow-hidden">	
					<p class="text-sm">user not found</p>
				</div>	
			{/if}
			{#if !isSignUpFormOpen}	
				<form class="flex items-center flex-col space-y-5 w-full">
					<input required class="w-full border border-gray-300 px-3 py-2.5 rounded-lg focus:outline-none focus:ring focus:ring-[#1877f2]" type="email" placeholder="Email address">
					<input required class="w-full border border-gray-300 px-3 py-2.5 rounded-lg focus:outline-none focus:ring focus:ring-[#1877f2]" type="password" placeholder="Password">
					<div class="pt-4 w-full">
					    <button class="bg-[#1877f2] hover:bg-blue-600 active:transform active:scale-[0.99] w-full py-2.5 text-xl text-white font-bold rounded-lg">Log In</button>
					</div>
				</form>
		    {:else}
				<form class="flex items-center flex-col space-y-5 w-full">
					<input required class="w-full border border-gray-300 px-3 py-2.5 rounded-lg focus:outline-none focus:ring focus:ring-[#1877f2]" type="email" placeholder="Email address">
					<input required class="w-full border border-gray-300 px-3 py-2.5 rounded-lg focus:outline-none focus:ring focus:ring-[#1877f2]" type="password" placeholder="Password">
					<input required class="w-full border border-gray-300 px-3 py-2.5 rounded-lg focus:outline-none focus:ring focus:ring-[#1877f2]" type="password" placeholder="Confirm Password">
					<div class="pt-4 w-full">
					    <button class="bg-[#1877f2] w-full py-2.5 text-xl text-white font-bold rounded-lg">Sign Up</button>
					</div>
				</form>
			{/if}
			<div class="h-0.5 w-full bg-gray-300"></div>
			<div class="w-full grid place-items-center pt-2">
			    <button on:click={() => isSignUpFormOpen = !isSignUpFormOpen} class="active:transform active:scale-[0.95] bg-[#42b72a]  px-4 py-2.5 text-md text-white font-bold rounded-lg">{ isSignUpFormOpen ? 'Already Have an Account? Login' : 'Create New Account'}</button>
			</div>
		</div>
	</div>
</main>
<script>
	import { app } from '$lib/store/firebase'
	import { user,friendsArray } from '$lib/store/user'
	import { doc, setDoc,deleteDoc  ,getFirestore,getDoc  } from "firebase/firestore";
	import { collection,onSnapshot,serverTimestamp } from "firebase/firestore";

	let isLoading = false;

	$: if($user){
		const db = getFirestore(app);
		onSnapshot(collection(db, "users", $user?.uid,"friends"), (querySnapshot) => {
			$friendsArray = [];
			querySnapshot.forEach(async(docOne) => {
				$friendsArray = [docOne.data(),...$friendsArray]
			});
		});
	}

	 const removeFrnd = async (id) => {
	 	isLoading = true;
	 	try{
			const db = getFirestore(app);
		 	await deleteDoc(doc(db, "users", $user?.uid,"friends" ,id))
	 	}catch(error){
	 		alert(error)
	 	}finally{
	 		isLoading = false
	 	}
	 }
</script>

<div class="max-w-xl bg-[#242526] w-full  rounded-lg py-2 pt-4 px-5">
	{#if isLoading}	
		<div class="flex items-center justify-center space-x-2 opacity-70">
			<svg class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
	          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
	          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
	        </svg>
	        <span>Removing...</span>
		</div>
	{/if}
	<ul class="flex flex-col space-y-2.5">
		{#each $friendsArray as item, index}
			<li class=" cursor-pointer flex items-center justify-start space-x-2.5 px-3 hover:bg-[#3a3b3c] rounded-lg py-1.5">
				<div class="w-8 rounded-full">
					<img class=" block rounded-full object-cover" src={item?.photo} alt="pic">
				</div>
				<p class="flex-1 font-medium text-[0.96rem] line-clamp-1">{item?.name}</p>
				<button disabled={isLoading} on:click={() => removeFrnd(item?.uid)} class="cursor-pointer grid place-items-center text-white rounded-full h-6 w-6 bg-[#3a3b3c]">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M20 12H4"/></svg>
				</button>
			</li>
		{:else}
			<p>No One</p>
		{/each}
	</ul>
</div>
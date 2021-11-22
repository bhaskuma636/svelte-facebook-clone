<script>
	import { app } from '$lib/store/firebase'
	import { user } from '$lib/store/user'
	import { doc, setDoc ,getFirestore,getDoc  } from "firebase/firestore";
	import { collection,onSnapshot,serverTimestamp } from "firebase/firestore";

	let suggestedFriendsArray = [];
	let isLoading = false;

	$: if($user){
		const db = getFirestore(app);
		onSnapshot(collection(db, "users"), (querySnapshot) => {
			suggestedFriendsArray = [];
			querySnapshot.forEach(async(docOne) => {
				if($user.uid != docOne.data().uid){
					suggestedFriendsArray = [docOne.data(),...suggestedFriendsArray]
				}
			});
		});
	}

	 const addToFrnds = async (item) => {
	 	isLoading = true;
		const db = getFirestore(app);
		const docSnap = await getDoc(doc(db, "users", $user?.uid,"friends",item?.uid));
		if (docSnap.exists()) {
			isLoading = false;
			alert("already a frnd")
		}else{
			try{ 		
				await setDoc(doc(db, "users", $user?.uid,"friends",item?.uid), {
				  name: item?.name,
				  email: item?.email,
				  photo: item?.photo,
				  addedAt : serverTimestamp(),
				  bio : item?.bio,
				});
				await setDoc(doc(db, "users", $user?.uid,"friends",item?.uid), {
				  uid : item?.uid,
				},{ merge: true });
				console.log("Done")
		 	}catch(error){
		 		console.log(error)
		 	}finally{
		 		isLoading = false;
		 	}
		}
	 }

</script>
<ul class="mt-5 flex flex-col space-y-2.5 ml-[1rem] hidden lg:flex">
	<h1 class="cursor-pointer font-medium text-[1.05rem] px-3 text-[#b0b3b8] flex items-center space-x-2">
		<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="fill-[#1877F2] mb-0.5 text-[#1877F2]"><circle cx="7" cy="5" r="3"/><path d="M10 12H5.898a3 3 0 0 0-2.976 2.628l-.641 5.124A2 2 0 0 0 4.266 22H9"/><path d="M21.719 19.752l-.64-5.124A3 3 0 0 0 18.101 12h-2.204a3 3 0 0 0-2.976 2.628l-.641 5.124A2 2 0 0 0 14.266 22h5.468a2 2 0 0 0 1.985-2.248z"/><circle cx="17" cy="5" r="3"/></svg>
		<span>Friends Suggestions</span>
	</h1>
	{#if isLoading}	
		<div class="flex items-center justify-center space-x-2 opacity-70">
			<svg class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
	          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
	          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
	        </svg>
	        <span>Adding...</span>
		</div>
	{/if}
	<ul class="flex flex-col space-y-2.5 ">
		{#each suggestedFriendsArray as item, index}		
			<li class=" cursor-pointer flex items-center justify-start space-x-2.5 px-3 hover:bg-[#3a3b3c] rounded-lg py-1.5">
				<div class="w-8 rounded-full">
					<img class=" block rounded-full object-cover" src={item?.photo ? item?.photo : `https://avatars.dicebear.com/api/avataaars/${index}.svg?background=dimgray`} alt="pic">
				</div>
				<p class="flex-1 font-medium text-[0.96rem] line-clamp-1">{item?.name}</p>
				<button disabled={isLoading} on:click={() => addToFrnds(item)} class="focus:outline-none cursor-pointer grid place-items-center text-white rounded-full h-6 w-6 bg-[#3a3b3c]">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M12 20v-8m0 0V4m0 8h8m-8 0H4"/></svg>
				</button>
			</li>
		{:else}
			<p class="text-center">No One</p>
		{/each}
	</ul>
	<div class="flex items-center justify-center py-5">
		<a class="text-xs text-blue-500" sveltekit:prefetch href="/profile">Show More</a>
	</div>
</ul>
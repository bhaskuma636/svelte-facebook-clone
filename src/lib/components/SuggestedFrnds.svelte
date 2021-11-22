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

<div class="max-w-xl bg-[#242526] w-full  rounded-lg py-2 pt-4 px-5">
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
			<p>No One</p>
		{/each}
	</ul>
</div>
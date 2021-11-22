<script>
	import { getAuth, signOut } from "firebase/auth";
	import { app } from '$lib/store/firebase'
	import { user,profilePhoto,userProfileData } from '$lib/store/user'
	import { goto } from '$app/navigation';
	import { doc, setDoc } from "firebase/firestore"; 
	import { getFirestore,serverTimestamp } from "firebase/firestore";

	let profileName = "";
	let profileBio = "";
	let isLoading = false;
	let errorMsg = "";

   const handleLogOut = async () => {
		const auth = getAuth(app);
		signOut(auth).then(() => {
			$user = null
			goto('/login')
			console.log("out")
		}).catch((error) => {
			console.log(error)
			alert(errorMsg)
		});
   }

   const handleSave = async () => {
   		isLoading = true;
   		errorMsg = "";
   		if($user){		
			const db = getFirestore(app);
	   		if (profileName.trim() != "") {
	   			try{
					await setDoc(doc(db, "users", $user?.uid), {
					  name: profileName,
					  updatedAt : serverTimestamp(),
					},{ merge: true });
					errorMsg = "Successfully Updated Your Profile Name"
	   			}catch(error){
	   				errorMsg = error.message;
	   				isLoading = false
	   			}finally{
	   				isLoading = false
	   			}
	   		}else if(profileBio.trim() != ""){
	   			try{
					await setDoc(doc(db, "users", $user?.uid), {
					  bio: profileBio,
					  updatedAt : serverTimestamp(),
					},{ merge: true });
					errorMsg = "Successfully Updated Your Profile Bio"
	   			}catch(error){
	   				errorMsg = error.message;
	   				isLoading = false
	   			}finally{
	   				isLoading = false
	   			}
				isLoading = false;
	   		}else if($profilePhoto.trim() != ""){
	   			try{
					await setDoc(doc(db, "users", $user?.uid), {
					  photo: $profilePhoto,
					  updatedAt : serverTimestamp(),
					},{ merge: true });
					errorMsg = "Successfully Updated Your Profile Photo"
	   			}catch(error){
	   				errorMsg = error.message;
	   				isLoading = false
	   			}finally{
					isLoading = false;
	   			}
	   		}else if(profileName.trim() != "" && profileBio.trim() != "" && $profilePhoto.trim() != ""){
				try{
					await setDoc(doc(db, "users", $user?.uid), {
					  name: profileName,
					  bio: profileBio,
					  photo: $profilePhoto,
					  updatedAt : serverTimestamp(),
					},{ merge: true });
					errorMsg = "Successfully Updated Your Profile Info"
				}catch(error){
	   				errorMsg = error.message;
	   				isLoading = false
				}finally{
					isLoading = false;
				}
	   		}else{
	   			isLoading = false;
	   			return;
	   		}
   		}
   }

	$: if (errorMsg) {
		setTimeout(() => {
			errorMsg = "";
		},3000)
	}
</script>

<div class="max-w-xl bg-[#242526] w-full  rounded-lg py-2 pt-4 px-5">
	{#if errorMsg}			
		<div class="w-full bg-red-500 mb-1 text-white px-2 py-2 rounded-lg">	
			<p class="text-sm capitalize">{errorMsg}</p>
		</div>	
	{/if}
	<div class="flex flex-col space-y-3">
		<div class="flex flex-col items-start space-y-1.5 w-full">	
			<label for="name" class="text-sm font-medium text-gray-400">
				<span>Display Name:</span>
				<small class="italic text-[0.7rem]">(The display name is the name visible to other members on the facebook)</small>
			</label>
			<input bind:value={profileName} id="name" class="focus:outline-none w-full py-2 px-3 rounded-lg bg-gray-600" type="text" placeholder={$userProfileData?.name}>
		</div>
		<div class="flex flex-col items-start space-y-1.5 w-full">	
			<label for="name" class="text-sm font-medium text-gray-400">
					<span>Profile Pic:</span>
					<small class="italic text-[0.7rem]">(Enter URL of the image)</small>
			</label>
			<input bind:value={$profilePhoto} id="name" class="focus:outline-none w-full py-2 px-3 rounded-lg bg-gray-600" type="url" placeholder={$userProfileData?.photo}>
		</div>
		<div class="flex flex-col items-start space-y-1.5 w-full">	
			<label for="name" class="text-sm font-medium text-gray-400">
					<span>Profile Bio:</span>
					<small class="italic text-[0.7rem]">(A short description about yourself )</small>
			</label>
			<input bind:value={profileBio} id="name" class="focus:outline-none w-full py-2 px-3 rounded-lg bg-gray-600" type="text" placeholder={$userProfileData?.bio}>
		</div>
		<div class="flex flex-col items-start space-y-1.5 w-full">	
			<label for="name" class="text-sm font-medium text-gray-400">
					<span>Email:</span>
					<small  class="italic text-[0.7rem]">(You can can't change email)</small>
			</label>
			<input disabled id="name" class="disabled:cursor-not-allowed focus:outline-none w-full py-2 px-3 rounded-lg bg-gray-600" type="email" placeholder={$userProfileData?.email}>
		</div>
		<div class="flex items-center space-x-2 justify-end pt-1">
			<button on:click={handleLogOut} class="hover:bg-red-600 hover:text-white active:transform active:scale-[0.99] border border-red-500 py-1 px-5 text-red-500 font-bold rounded-lg">Log out</button>	
			<button disabled={isLoading} on:click={handleSave} class="bg-[#1877f2] hover:bg-blue-600 active:transform active:scale-[0.99] py-1.5 px-5 text-white font-bold rounded-lg">{ isLoading ? 'Updating...' : 'Save'}</button>
		</div>	
	</div>
</div>
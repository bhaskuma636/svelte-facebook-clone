<script>
	import generateName from 'sillyname';
	import generate from 'ricknmortyquotes'
	import { app } from '$lib/store/firebase'
	import { user } from '$lib/store/user'
	import { goto } from '$app/navigation';
	import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
	import { getFirestore } from "firebase/firestore";
	import { doc, setDoc, serverTimestamp  } from "firebase/firestore"; 


	let isSignUpFormOpen = false;
	let errorMsg = "";
	let isLoading = false;

	let loginEmail = "";
	let loginPassword = "";

	let signUpEmail = "";
	let signUpPasswrod = "";
	let signUpConfirmPasswrod = "";


	const handleLogin = async () => {
		isLoading = true;
		errorMsg = "";
		if (loginEmail.trim() != "" && loginPassword.trim() != "") {
			const auth = getAuth(app);
	    	signInWithEmailAndPassword(auth, loginEmail, loginPassword)
			  .then((userCredential) => {
			    $user = userCredential.user;
			    goto("/")
			    isLoading = false;
			  })
			  .catch((error) => {
				console.log(error)
			  	errorMsg = error?.message
			  	isLoading = false;
			  }).finally(() => {
			  	isLoading = false;
			  })
		}else{
			isLoading = false;
			errorMsg = "";
			return;
		}
	}

	const handleSignUp = async () => {
		isLoading = true;
		errorMsg = "";
		if (signUpEmail.trim() != "" && signUpPasswrod.trim() != "" && signUpConfirmPasswrod.trim() != "") {
			if (signUpPasswrod === signUpConfirmPasswrod) {
				const auth = getAuth(app);
				createUserWithEmailAndPassword(auth, signUpEmail, signUpPasswrod)
				  .then(async (userCredential) => {
				    $user = userCredential.user;
				    if($user){
				    	const db = getFirestore(app);
						await setDoc(doc(db, "users", $user?.uid), {
						  name: $user?.displayName || generateName(),
						  email: $user?.email,
						  photo: $user?.photoURL || `https://avatars.dicebear.com/api/adventurer/${$user?.uid}.svg`,
						  createdAt : serverTimestamp(),
						  bio : generate(),
						});
						await setDoc(doc(db, "users", $user?.uid), {
						  uid : $user?.uid,
						},{ merge: true });
						errorMsg = "Account Created Successfully !!!"
						goto("/")
				    }
				    isLoading = false;
				  })
				  .catch((error) => {
				  	console.log(error)
				  	errorMsg = error;
				  	isLoading = false;
				  }).finally(() => {
				  	isLoading = false;
				  })
			}else{
				errorMsg = "Passwords didn't Match"
				isLoading = false;
				errorMsg = "";
			}
		}else{
			isLoading = false;
			errorMsg = "";
			return;
		}
	}

	$: if (errorMsg) {
		setTimeout(() => {
			errorMsg = "";
		},4000)
	}

</script>
<main class="w-full h-screen bg-[#f0f2f5] text-gray-900">
	<div class="w-full px-4 sm:px-6 md:px-0 h-full container mx-auto md:max-w-screen-lg md:flex items-center justify-center md:space-x-10 pt-7 md:pb-[5rem]">
		<div class="flex-1 container mx-auto text-center md:text-left w-full md:px-0 px-10 md:pt-0 py-4 pt-0">
			<div class="flex flex-col items-start w-full">
				<p class="text-[4rem] w-full text-[#1877f2] font-bold leading-tight select-none">facebook</p>
			    <h3 class="hidden md:block text-3xl text-gray-800">Facebook helps you connect and share with the people in your life.</h3>
			</div>
		</div>
		<div class="md:w-[40%] w-full shadow-xl border border-gray-300 py-9 p-5 rounded-lg flex flex-col space-y-6">
			{#if errorMsg}			
				<div class="w-full bg-red-500 -my-2 text-white px-2 py-2 rounded-lg">	
					<p class="text-sm">{errorMsg}</p>
				</div>	
			{/if}
			{#if !isSignUpFormOpen}	
				<form on:submit|preventDefault={handleLogin} class="flex items-center flex-col space-y-5 w-full">
					<input bind:value={loginEmail} required class="w-full border border-gray-300 px-3 py-2.5 rounded-lg focus:outline-none focus:ring focus:ring-[#1877f2] text-gray-900" type="email" placeholder="Email address">
					<input bind:value={loginPassword} required class="w-full border border-gray-300 px-3 py-2.5 rounded-lg focus:outline-none focus:ring focus:ring-[#1877f2] text-gray-900" type="password" placeholder="Password">
					<div class="pt-4 w-full">
					    <button disabled={isLoading} type="submit" class="bg-[#1877f2] hover:bg-blue-600 active:transform active:scale-[0.99] w-full py-2.5 text-xl text-white font-bold rounded-lg">{ isLoading ? 'Authenticating...' : 'Log In' }</button>
					</div>
				</form>
		    {:else}
				<form on:submit|preventDefault={handleSignUp} class="flex items-center flex-col space-y-5 w-full">
					<input bind:value={signUpEmail} required class="w-full border border-gray-300 px-3 py-2.5 rounded-lg focus:outline-none focus:ring focus:ring-[#1877f2] text-gray-900" type="email" placeholder="Email address">
					<input bind:value={signUpPasswrod} required class="w-full border border-gray-300 px-3 py-2.5 rounded-lg focus:outline-none focus:ring focus:ring-[#1877f2] text-gray-900" type="password" placeholder="Password">
					<input bind:value={signUpConfirmPasswrod} required class="w-full border border-gray-300 px-3 py-2.5 rounded-lg focus:outline-none focus:ring focus:ring-[#1877f2] text-gray-900" type="password" placeholder="Confirm Password">
					<div class="pt-4 w-full">
					    <button disabled={isLoading} type="submit" class="bg-[#1877f2] hover:bg-blue-600 active:transform active:scale-[0.99] w-full py-2.5 text-xl text-white font-bold rounded-lg">{ isLoading ? 'Authenticating...' : 'Sign Up' }</button>
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
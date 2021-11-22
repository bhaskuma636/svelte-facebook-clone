<script>
	import {onMount} from 'svelte'
	import { app } from '$lib/store/firebase'
	import { user,userProfileData } from '$lib/store/user'
	import { onAuthStateChanged,getAuth } from "firebase/auth";
	import { doc, onSnapshot, getFirestore } from "firebase/firestore";
	import { goto } from '$app/navigation';


	import "../app.css";
	import NavBar from '$lib/components/NavBar.svelte';

	let localUser = null;

	onMount(()=>{
		const auth = getAuth(app);
		onAuthStateChanged(auth, (user) => {
		  if (user) {
		    localUser = user;
		    console.log(user)
			goto("/")
		  } else {
		  	localUser = null;
		  	goto("/login")
		  }
		})
	})

	$: localUser ? $user = localUser : $user = null;

	$: if($user){
		const db = getFirestore(app);
		onSnapshot(doc(db, "users", $user?.uid), (doc) => {
		    $userProfileData = doc.data()
		});
	}
</script>

<NavBar />
<slot />
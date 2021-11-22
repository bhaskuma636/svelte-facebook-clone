<script>
	import {onMount} from 'svelte'
	import { app } from '$lib/store/firebase'
	import { user } from '$lib/store/user'
	import { onAuthStateChanged,getAuth } from "firebase/auth";
	import { goto } from '$app/navigation';

	let localUser = null;

	onMount(()=>{
		const auth = getAuth(app);
		onAuthStateChanged(auth, (user) => {
		  if (user) {
		    localUser = user;
			goto("/")
		  } else {
		  	localUser = null;
		  	goto("/login")
		  }
		})
	})

	$: localUser ? $user = localUser : $user = null;
</script>
<slot></slot>
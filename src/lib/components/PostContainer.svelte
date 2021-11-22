<script>
	import Post from '$lib/components/Post.svelte'
	import { app } from '$lib/store/firebase'
	import { user } from '$lib/store/user'
	import { doc, setDoc,deleteDoc  ,getFirestore,getDoc,query, orderBy  } from "firebase/firestore";
	import { collection,onSnapshot,serverTimestamp } from "firebase/firestore";

	let userPosts = [];

	$: if($user){
		const db = getFirestore(app);
		onSnapshot(query(collection(db, "users", $user?.uid,"posts"),orderBy("uploadTime", "asc")), (querySnapshot) => {
			userPosts = [];
			querySnapshot.forEach(async(docOne) => {
				userPosts = [docOne.data(),...userPosts]
			});
		});
	}
</script>
<main>
	{#each userPosts as item, index}
		<Post post={item} />
	{/each}
</main>
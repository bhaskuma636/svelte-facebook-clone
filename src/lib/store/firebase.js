import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAju4k-kLQgGLII2eMemLpPbijWq2WeXmU",
  authDomain: "svelte-facebook-clone.firebaseapp.com",
  projectId: "svelte-facebook-clone",
  storageBucket: "svelte-facebook-clone.appspot.com",
  messagingSenderId: "618628378835",
  appId: "1:618628378835:web:23d9896a11a3004cef6426"
};

export const app = initializeApp(firebaseConfig);
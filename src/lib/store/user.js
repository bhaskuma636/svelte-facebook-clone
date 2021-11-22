import { writable } from 'svelte/store';


export const user = writable(null);
export const userProfileData = writable(null);
export const profilePhoto = writable("");
export const friendsArray = writable([]);
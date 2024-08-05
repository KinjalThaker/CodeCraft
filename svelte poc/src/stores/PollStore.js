import { writable } from "svelte/store";

let PollStore = writable(
    [
		{
			question: 'Are you a Developer?', 
			answer1: 'Yes', 
			answer2: 'No',
			vote1: 10,
			vote2: 20,
			id: 1
		}
	]
);

export default PollStore;
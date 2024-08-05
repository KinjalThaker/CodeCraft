<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./shared/Tabs.svelte";
	import AddPolll from "./components/AddPolll.svelte";
	import PollList from "./components/PollList.svelte";

	let items = ['Polls', 'Add new poll'];
	let activeItem = 'Polls';

	let polls = [
		{
			question: 'Are you a Developer?', 
			answer1: 'Yes', 
			answer2: 'No',
			vote1: 10,
			vote2: 20,
			id: 1
		}
	];

	const tabChange = (e) => {
		activeItem = e.detail;
	}

	const addPoll = (e) => {
		let poll = e.detail;
		polls = [poll, ...polls];
		activeItem = 'Polls';
	}

	const updateVote = (e) => {
		let copyPolls = [...polls];
		let updatedPolls = copyPolls.find(poll => poll.id === e.detail.id);

		if (e.detail.option === 1) {
			updatedPolls.vote1++;
		}

		if (e.detail.option === 2) {
			updatedPolls.vote2++;
		}

		polls = copyPolls;
	}
</script>

<Header />

<main>
	<Tabs {items} {activeItem} on:tabChange={tabChange} />

	{#if activeItem === 'Polls'}
		<PollList {polls} on:vote={updateVote} />
	{:else if activeItem === 'Add new poll'}
		<AddPolll on:addPoll={addPoll} />
	{/if}
</main>

<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
		text-align: center;
	}
</style>
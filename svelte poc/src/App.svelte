<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./shared/Tabs.svelte";
	import AddPolll from "./components/AddPolll.svelte";
	import PollList from "./components/PollList.svelte";

	let items = ['Polls', 'Add new poll'];
	let activeItem = 'Polls';

	const tabChange = (e) => {
		activeItem = e.detail;
	}

	const addPoll = (e) => {
		activeItem = 'Polls';
	}
</script>

<Header />

<main>
	<Tabs {items} {activeItem} on:tabChange={tabChange} />

	{#if activeItem === 'Polls'}
		<PollList />
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
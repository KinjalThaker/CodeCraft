<script>
	import Modal from './Modal.svelte';
	import AddPersonForm from './AddPersonForm.svelte';

	let firstName = "Adam";
	let lastName = "Oxford";
	let showModal = false;

	//reactive value - it will react on the value on which it is depend on.
	$: fullName = `${firstName} ${lastName}`; //template string

	//reactive statement - in which it will react line of code instead of just a value.
	$: {
		console.log(fullName);
		console.log(beltColor);
	}

	let beltColor = "black";

	//Arrow function
	const changeColor = () => {
		beltColor = "orange";
	}

	let people = [
		{name: 'Kinjal', age: 10, beltColor:'red', id: 1},
		{name: 'Jini', age: 20, beltColor:'purple', id: 2},
		{name: 'Mini', age: 30, beltColor:'pink', id: 3},
	];

	const handleDelete = (id) => {
		people = people.filter((people) => people.id != id)
	}

	const toggleModal = () => {
		showModal = !showModal;
	}

	const addPerson = (e) => {
		let person = e.detail;
		people = [person, ...people];
		showModal = false;
	}
</script>

<Modal message="Sign up for offers." isPromo={false} {showModal} on:click={toggleModal}>
	<AddPersonForm on:addPerson={addPerson} />
</Modal>

<main>
	<div style="border:solid 1px lightgray;" class="p-2">
		<div>This block contains data binding, reactive value, reactive statement and method handling.</div>
		<h1>Hello {fullName}!</h1>
		<p style="color: {beltColor};">This is the {beltColor} belt.</p>
		<button on:click={changeColor}>Change color</button>
		<input type="text" bind:value={fullName}>
	</div>
	<div style="border:solid 1px lightgray; padding: 20px">
		{#each people as person}
			<div style="text-align: left; padding: 10px 0; float: left;">
				<div>Name: {person.name}</div>
				<div>Age: {person.age}</div>
			</div>
			<div>
				<button on:click={() => handleDelete(person.id)}>Delete</button> <!-- inline event handling -->
			</div>
			<div style="clear: both;"></div>
			<div style="border-bottom: solid 1px"></div>
			{:else}
			<div>There is no records found.</div>
		{/each}
	</div>
	<div>
		<button on:click|once={toggleModal}>Open Modal</button>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
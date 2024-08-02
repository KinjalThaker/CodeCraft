<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./shared/Tabs.svelte";
	import AddProduct from "./components/AddProduct.svelte";
	import ProductList from "./components/ProductList.svelte";

	let items = ['Products', 'Add new product'];
	let activeItem = 'Products';

	let products = [
		{name: 'Product 1', description: 'Product desc 1'}
	];

	const tabChange = (e) => {
		activeItem = e.detail;
	}

	const addProduct = (e) => {
		let product = e.detail;
		products = [product, ...products];
		activeItem = 'Products';
	}
</script>

<Header />

<main>
	<Tabs {items} {activeItem} on:tabChange={tabChange} />

	{#if activeItem === 'Products'}
		<ProductList {products} />
	{:else if activeItem === 'Add new product'}
		<AddProduct on:addProduct={addProduct} />
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
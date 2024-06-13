<script>
    import Nested from './Nested.svelte';
    import PackageInfo from './PackageInfo.svelte';

    let name = 'Svelte';
    let src = '/image.gif';
    let alt = 'Svelte is loading';
    let string = 'This string contains some <strong>HTML</strong>.';
    //Reactive assignemnt
    let counter = 0;
    //Reactive declarations
    $: doubled = counter * 2;
    let numbers = [1, 2, 3, 4, 5];
    $: updatedNumbers = numbers;

    const packageData = {
        packageName : 'Svelte',
        version : 1,
        speed : 'slow',
        website : 'https://svelte.dev'
    }
    
    //Reactive declarative statement
    $: if (counter >= 10)
    {
        alert('Exceed');
    }

    function increament()
    {
        counter += 1;
        if (counter > 10)
        {
            counter = 0;
        }
    }

    function addNumbers()
    {
        //numbers.push(numbers.length + 1);
        //numbers = numbers;

        numbers = [...numbers, numbers.length + 1];
    }
    function removeNumbers()
    {
        console.log(updatedNumbers);
        numbers.pop();
    }
</script>

<style>
    p {
        color:goldenrod;
        font-family: 'Comic Sans MS', cursive;
        font-size: 2em;
    }
    button {
        padding: 0.5rem 1rem;
        background-color: blue;
        color: white;
        font-weight: bold;
        border: none;
        border-radius: 3px;
        cursor: pointer;       
    }
</style>

<h1>Welcome {name.toUpperCase()}!</h1>
<img {src} {alt} />
<p>Trying styling paragraph.</p>
<p>{@html string}</p>
<button on:click={increament}>Click me {counter} and double is {doubled}</button>
{#if numbers.length < 10}
<button on:click={addNumbers}>Add Number</button>
{:else}
<button on:click={removeNumbers}>Remove Number</button>
{/if}
<div>{updatedNumbers}</div>
<Nested answer={10} />
<!--<PackageInfo packageName={packageData.packageName} version={packageData.version} speed={packageData.speed} website={packageData.website} />-->
<PackageInfo {...packageData} />
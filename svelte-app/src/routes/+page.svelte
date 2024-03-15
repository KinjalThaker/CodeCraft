<script>
    import Nested from './Nested.svelte';

    let name = 'Svelte';
    let src = '/image.gif';
    let alt = 'Svelte is loading';
    let string = 'This string contains some <strong>HTML</strong>.';
    //Reactive assignemnt
    let counter = 0;
    //Reactive declarations
    $: doubled = counter * 2;

    function increament()
    {
        counter += 1;
        if (counter > 10)
        {
            counter = 0;
        }
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
<Nested />
<p>{@html string}</p>
<button on:click={increament}>Click me {counter} and double is {doubled}</button>

<script>
    import Nested from './Nested.svelte';

    let name = 'Svelte';
    let src = '/image.gif';
    let alt = 'Svelte is loading';
</script>

<style>
    p {
        color:goldenrod;
        font-family: 'Comic Sans MS', cursive;
        font-size: 2em;
    }
</style>

<h1>Welcome {name.toUpperCase()}!</h1>
<img {src} {alt} />
<p>Trying styling paragraph.</p>
<Nested />

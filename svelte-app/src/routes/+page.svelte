<script>
    let name = 'Svelte';
    let src = '/image.gif';
    let alt = 'Svelte is loading';
</script>

<h1>Welcome {name.toUpperCase()}!</h1>
<img {src} {alt} />

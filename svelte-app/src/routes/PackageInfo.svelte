<script>
    export let packageName = '';
    export let version = '';
    export let speed = '';
    export let website = '';

    $: href = 'https://www.npmjs.com/package/${packageName}';
</script>

<p>
	The <code>{packageName}</code> package is {speed} fast. Download version {version} from
	<a {href}>npm</a> and <a href={website}>learn more here</a>
</p>
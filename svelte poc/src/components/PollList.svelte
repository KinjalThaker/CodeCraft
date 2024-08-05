<script>
    import Poll from "./Poll.svelte";

    export let polls;
</script>

<div class="polls">
    {#each polls as poll (poll.id)}
        <Poll {poll} on:vote />
    {/each}
</div>

<style>
    .polls {
        height: 400px;
        overflow: auto;
        text-align: center;
    }
</style>
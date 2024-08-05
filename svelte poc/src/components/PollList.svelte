<script>
    import PollStore from '../stores/PollStore';
    import Poll from "./Poll.svelte";
</script>

<div class="polls">
    {#each $PollStore as poll (poll.id)}
        <Poll {poll} />
    {/each}
</div>

<style>
    .polls {
        height: 400px;
        overflow: auto;
        text-align: center;
    }
</style>
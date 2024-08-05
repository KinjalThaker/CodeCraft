<script>
    import PollStore from "../stores/PollStore";
    
    export let poll;
    $: totalVotePerPoll = poll.vote1 + poll.vote2;
    $: percent1 = Math.floor(100 / totalVotePerPoll * poll.vote1);
    $: percent2 = Math.floor(100 / totalVotePerPoll * poll.vote2);

    const handleVote = (option, id) => {
        PollStore.update(polls => {
            let copyPolls = [...polls];
            let updatedPolls = copyPolls.find(poll => poll.id === id);

            if (option === 1) {
                updatedPolls.vote1++;
            }

            if (option === 2) {
                updatedPolls.vote2++;
            }

            return copyPolls;
        });
        
    }

    const deletePoll = (id) => {
        PollStore.update(polls => {
            return polls.filter(poll => poll.id != id);
        });
    }
</script>

<div class="poll">
    <h3>{poll.question}</h3>
    <p>Total: {totalVotePerPoll}</p>
    <div class="answer" on:click={() => handleVote(1, poll.id)}>
        <div class="percent percent1" style="width: {percent1}%;"></div>
        <div>{poll.answer1} ({poll.vote1})</div>
    </div>
    <div class="answer" on:click={() => handleVote(2, poll.id)}>
        <div class="percent percent2" style="width: {percent2}%;"></div>
        <div>{poll.answer2} ({poll.vote2})</div>
    </div>
    <div style="text-align: right;">
        <button on:click={() => deletePoll(poll.id)}>Delete</button>
    </div>
</div>

<style>
    h3 {
        font-weight: bold;
    }

    .poll {
        float: left;
        width: 40%;
        border: solid 1px #ddd;
        border-radius: 6px;
        padding: 10px;
        margin: 10px;
        text-align: left;
    }

    p {
        font-size: 13px;
    }

    .answer {
        font-size: 13px;
        /*background: rgba(235, 233, 233, 0.68);*/
        padding: 5px 10px;
        margin-top: 8px;
        position: relative;
        font-weight: bold;
    }

    .answer div {
        cursor: pointer;
    }

    .percent1 {
        height: 100%;
        background: rgba(211, 46, 46, 0.614);
        position: absolute;
        border-left: solid 5px rgba(211, 46, 46, 0.614);
    }

    .percent2 {
        height: 100%;
        background: rgba(59, 126, 12, 0.661);
        position: absolute;
        border-left: solid 5px rgba(59, 126, 12, 0.661);;
    }

    button {
        border: solid 1px #d4d1d1;
        padding: 5px 10px;
        background: #ddd;
    }

    button:hover {
        background: gray;
        color: white;
    }
</style>
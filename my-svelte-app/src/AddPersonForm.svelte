<script>
    import { createEventDispatcher } from "svelte";

    let name, age, beltColor;
    let skills = [];

    let dispatch = createEventDispatcher();

    const handleSubmit = () => {
        const person = {
            name, age, beltColor, skills: skills, id: Math.random()
        };

        dispatch('addPerson', person);
    }
</script>

<div>
    <form on:submit|preventDefault={handleSubmit}>
        <div>
            <label>Name</label>
            <input type="text" bind:value={name}>
        </div>
        <div style="padding-top: 10px;"></div>
        <div>
            <label>Age</label>
            <input type="number" bind:value={age}>
        </div>
        <div style="padding-top: 10px;"></div>
        <div>
            <label>skills</label>
            <input type="checkbox" bind:group={skills} value="fighting">fighting
            <input type="checkbox" bind:group={skills} value="shooting">shooting
            <input type="checkbox" bind:group={skills} value="running">running
        </div>
        <div style="padding-top: 10px;"></div>
        <div>
            <label>Belt Color</label>
            <select bind:value={beltColor}>
                <option value="green">green</option>
                <option value="brown">brown</option>
                <option value="yellow">yellow</option>
            </select>
        </div>
        <div style="padding-top: 10px;"></div>
        <div>
            <button>Add person</button>
        </div>
    </form>
</div>

<style>
    button {
        background: blue;
        border: solid 1px lightgray;
        padding: 10px;
        color: white;
    }
    div {
        text-align: left;
    }
</style>
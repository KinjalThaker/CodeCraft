<script>
    import PollStore from "../stores/PollStore";
    import { createEventDispatcher } from "svelte";
    
    let fields = {question: '', answer1: '', answer2: '', id: Math.random(), vote1: 0, vote2: 0}
    let errors = {question: '', answer1: '', answer2: ''}
    let valid = false;

    let dispatch = createEventDispatcher();

    const handleSubmit = () => {
        valid = true;

        if (fields.question.trim().length < 2) {
            valid = false;
            errors.question = 'Name must be 2 characters long.';
        } else {
            errors.question = '';
        }

        if (fields.answer1.trim().length < 2) {
            valid = false;
            errors.answer1 = 'Name must be 2 characters long.';
        } else {
            errors.answer1 = '';
        }

        if (fields.answer2.trim().length < 2) {
            valid = false;
            errors.answer2 = 'Name must be 2 characters long.';
        } else {
            errors.answer2 = '';
        }

        if (valid) {
            PollStore.update(newPoll => {
                return [fields, ...newPoll];
            });
            dispatch('addPoll');
        }
    }
</script>

<div>
    <form on:submit|preventDefault={handleSubmit}>
        <div class="form-field">
            <label for="question">Question</label>
            <input type="text" id="question" bind:value={fields.question}>
            <div class="error">{errors.question}</div>
        </div>
        <div class="form-field">
            <label for="answer1">Answer 1</label>
            <textarea id="answer1" bind:value={fields.answer1}></textarea>
            <div class="error">{errors.answer1}</div>
        </div>
        <div class="form-field">
            <label for="answer2">Answer 2</label>
            <textarea id="answer2" bind:value={fields.answer2}></textarea>
            <div class="error">{errors.answer2}</div>
        </div>
        <button>Add Question</button>
    </form>
</div>

<style>
    form {
        width: 400px;
        text-align: center;
        margin: 0 auto;
    }

    input {
        width: 70%;
        border-radius: 6px;
    }

    label {
        margin: 10px auto;
        text-align: left;
    }

    button {
        border: solid 1px #ddd;
        background: #d91b42;
        color: white;
        font-weight: bold;
        padding: 10px;
    }

    .form-field {
        margin: 18px auto;
    }

    .error {
        color: #d91b42;
        font-size: 11px;
        font-weight: bold;
    }
</style>
<script>
    import { createEventDispatcher } from "svelte";
    let fields = {name: '', description: ''}
    let errors = {name: ''}
    let valid = false;

    let dispatch = createEventDispatcher();

    const handleSubmit = () => {
        valid = true;

        if (fields.name.trim().length < 2) {
            valid = false;
            errors.name = 'Name must be 2 characters long.';
        } else {
            errors.name = '';
        }

        if (valid) {
            dispatch('addProduct', fields);
        }
    }
</script>

<div>
    <form on:submit|preventDefault={handleSubmit}>
        <div class="form-field">
            <label for="name">Name</label>
            <input type="text" id="name" bind:value={fields.name}>
            <div class="error">{errors.name}</div>
        </div>
        <div class="form-field">
            <label for="description">Description</label>
            <textarea id="description" bind:value={fields.description}></textarea>
        </div>
        <button>Add Product</button>
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
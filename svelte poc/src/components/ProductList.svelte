<script>
    export let products;
</script>

<div>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        <tbody>
            {#each products as product}
            <tr>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>
                    <div style="float: left;">Edit</div>
                    <div>Delete</div>
                </td>
            </tr>
            {:else}
            <tr>
                <td colspan="2">No records found.</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    table {
        width: 100%;
        border: solid 1px #ddd;
    }

    th, td {
        margin: 10px auto;
        border-bottom: solid 1px #ddd;
    }
</style>
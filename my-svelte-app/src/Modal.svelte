<script>
    export let showModal = false;
    export let isPromo = false;
    export let message = '';
</script>

{#if showModal}
    <div class="backdrop" class:promo={isPromo} on:click|self> <!-- Event forwarding -->
        <div class="modal">
            <div>{message}</div>
        </div>
    </div>
{/if}

<style>
    .backdrop {
        background: rgba(0, 0, 0, 0.8);
        width: 100%;
        height: 100%;
        position: fixed;
    }

    .modal {
        padding: 10px;
        border-radius: 10px;
        max-width: 400px;
        margin: 10% auto;
        text-align: center;
        background: white;
    }

    .promo .modal {
        background: crimson;
    }
</style>
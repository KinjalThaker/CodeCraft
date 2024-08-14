<template>
  <div v-if="showModal" class="backdrop" @click="handleClick">
        <div class="modal">
            <h1>Errors:</h1>
            <div></div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['showModal'],
    methods: {
        handleClick() {
            this.$emit('closeModal')
        }
    }
}
</script>

<style>
    .backdrop {
        background: rgba(0, 0, 0, 0.8);
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0
    }

    .modal {
        padding: 10px;
        border-radius: 10px;
        max-width: 400px;
        margin: 10% auto;
        text-align: center;
        background: white;
    }
</style>
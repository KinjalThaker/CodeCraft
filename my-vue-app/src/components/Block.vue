<template>
  <div class="block" @click="stopTimer" v-if="showBlock">
    Click me
  </div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
        return {
            showBlock: false,
            timer: null,
            reactiveTimer: 0
        }
    },
    mounted() {
        console.log('component mounted.');
        setTimeout(() => {
            this.showBlock = true
            this.setTimer()
        }, this.delay)
    },
    updated() {
        console.log('updated');
    },
    methods: {
        setTimer() {
            this.setTimer = setInterval(() => {
                this.reactiveTimer += 10
            }, 10)
        },
        stopTimer() {
            clearInterval(this.timer)
            console.log(this.reactiveTimer);
            this.$emit('endGame', this.reactiveTimer)
        }
    }
}
</script>

<style>
.block {
    width: 300px;
    line-height: 150px;
    background: rgb(20, 172, 20);
    color: white;
    text-align: center;
    margin: 10px auto;
    border-radius: 6px;
    font-weight: bold;
}
</style>
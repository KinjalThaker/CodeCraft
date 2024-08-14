<template>
  <div>{{ title }}</div>
  <div>
    <button @click="start" :disabled="isPlaying">Play</button>
  </div>
  <block v-if="isPlaying" :delay="delay" @endGame="endGame" />
  <results v-if="showResult" :score="score" />
</template>

<script>

import Block from './components/Block.vue'
import Results from './components/Results.vue'

export default {
  name: 'App',
  data() {
    return {
      title: 'My Vue app - Reactive timer.',
      isPlaying: false,
      delay: null,
      score: null,
      showResult: false
    }
  },
  components: {
    Block, Results
  },
  methods: {
    start() {
      this.isPlaying = true
      this.delay = 2000 + Math.random() * 5000
      this.showResult = false
    },
    endGame(reactiveTimer) {
      this.score = reactiveTimer
      this.showResult = true
      this.isPlaying = false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active {
  background: #3450eeee;
  color: white;
  padding: 10px;
}
</style>

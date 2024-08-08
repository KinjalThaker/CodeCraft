<template>
  <h1>{{ title }}</h1>
  <div ref="name">Template refs element</div>
  <div>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      title: 'My Vue app'
    }
  },
  methods: {
    handleClick() {
      this.$refs.name.classList.add('active')
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

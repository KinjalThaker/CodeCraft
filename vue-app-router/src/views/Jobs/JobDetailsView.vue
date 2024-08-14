<template>
  <div>Job Details</div>
  <div>{{ id }}</div>
  <div>Title: {{ job.title }}</div>
  <div>Details: {{ job.details }}</div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      job: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs/' + this.id)
    .then((res) => res.json())
    .then(data => this.job = data)
    .catch(error => console.error(error))
  }
}
</script>

<style>

</style>
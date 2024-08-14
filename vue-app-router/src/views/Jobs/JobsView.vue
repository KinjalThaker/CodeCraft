<template>
  <div>
    <h1>Job List</h1>
    <div>
      <router-link :to="{name: 'AddJob'}">
        <button>Add Job</button>
      </router-link>
    </div>
    <table>
      <thead>
        <tr>
          <th>Sr no</th>
          <th>Title</th>
          <th>Details</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="job in jobs" :key="job.id">
          <td>{{ job.id }}</td>
          <td>{{ job.title }}</td>
          <td>{{ job.title }}</td>
          <td>
            <router-link :to="{name: 'JobDetails', params: {id: job.id}}">
              <span>View</span>
            </router-link> |
            <router-link :to="{name: 'UpdateJob', params: {id: job.id}}">
              <span>Edit</span>
            </router-link> | 
            <span @click="handleDelete(job.id)">Delete</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: []
    }
  },
  methods: {
    handleDelete(jobId) {
      fetch('http://localhost:3000/jobs/' + jobId, {method: 'DELETE'})
      .then(response => {
        if (response.ok) {
          console.log('Record deleted')
          fetch('http://localhost:3000/jobs')
          .then((res) => res.json())
          .then(data => this.jobs = data)
          .catch(error => console.error(error))
        } else {
          console.log('Failed to delete record')
        }
      })
      .catch(error => console.error('Error:', error))}
  },
  mounted() {
    fetch('http://localhost:3000/jobs')
    .then((res) => res.json())
    .then(data => this.jobs = data)
    .catch(error => console.error(error))
  }
}
</script>

<style>
  table {
    width: 100%;
    border: solid 1px rgb(223, 220, 220);
  }
  th, td {
    border-bottom: solid 1px rgb(223, 220, 220);
    border-right: solid 1px rgb(223, 220, 220);
  }
</style>
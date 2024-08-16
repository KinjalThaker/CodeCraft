<template>
  <h1>Add new Job</h1>
  <div>
    <form @submit.prevent="handleSubmit">
        <div class="form-group">
            <label>Title:</label>
            <span>
                <input type="text" v-model="job.title">
                <p class="error" v-if="job.errTitle">{{ job.errTitle }}</p>
            </span>
        </div>
        <div class="form-group">
            <span>Details:</span>
            <span>
                <input type="text" v-model="job.details">
                <p class="error" v-if="errDetails">{{ job.errDetails }}</p>
            </span>
        </div>
        <div class="form-group">
            <button>Submit Job</button>
        </div>
    </form>
    <div>
        <p>{{ id }}</p>
        <p>Title: {{ job.title }}</p>
        <p>Details: {{ job.details }}</p>
    </div>
    <!--<Modal :showModal="showModal" @closeModal="closeModal" />-->
  </div>
</template>

<script>
//import Modal from '@/components/Modal.vue'
export default {
    props: ['id'],
    showModal: false,
    components: {
        //Modal
    },
    data() {
        return {
            job: {
                title: '',
                details: '',
                errTitle: '',
                errDetails: ''
            }
        }
    },
    methods: {
        handleSubmit() {
            this.job.errTitle = this.job.title.length < 2 ? 'Title at least 3 characters long.' : ''
            this.job.errDetails = this.job.details.length < 3 ? 'Details at least 3 characters long.' : ''

            if (!this.job.errTitle && !this.job.errDetails) {
                this.showModal = false
                if (this.id) {
                    fetch('http://localhost:3000/jobs/' + this.id, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            title: this.job.title,
                            details: this.job.details,
                        }),
                        })
                        .then(response => response.json())
                        .then((data) => {
                            console.log('Record updated:', data)
                            this.$router.push({name: 'Jobs'})
                        })
                        .catch(error => console.error('Error:', error));
                } else {
                    fetch('http://localhost:3000/jobs', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            title: this.job.title,
                            details: this.job.details,
                        }),
                        })
                        .then(response => response.json())
                        .then(data => {
                            console.log('Record created:', data)
                            this.$router.push({name: 'Jobs'})
                        })
                        .catch(error => console.error('Error:', error));
                    }

            } else {
                this.showModal = true
            }
        },
        closeModal() {alert('call');
            this.showModal = false
        }
    },
    mounted() {
        if (this.id) {
            fetch('http://localhost:3000/jobs/' + this.id)
            .then((res) => res.json())
            .then(data => this.job = data)
            .catch(error => console.error(error))
        }
    }
}
</script>

<style>
    .form-group {
        padding: 10px;
    }
    .form-group input {
        width: 20%;
        line-height: 25px;
        border: solid 1px lightgray;
    }
    .form-group button {
        width: 100px;
        line-height: 30px;
    }
    .error {
        color: red;
    }
</style>
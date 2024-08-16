<template>
    <div>
        <router-link :to="{name: 'BlogDetails', params: {id: blog.id}}">
            <h3>{{ blog.title }}</h3>
        </router-link>
    </div>
    <p>{{ blogSnippet }}</p>
    <div v-for="tag in blog.tags" :key="tag">
        <span># {{ tag }}</span>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    props: ['blog'],
    setup(props) {
        const blogSnippet = ref(props.blog.body.substring(0, 10) + '....')

        return { blogSnippet }
    }
}
</script>

<style>

</style>
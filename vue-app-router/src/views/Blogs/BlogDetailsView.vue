<template>
  <h1>Blog Details</h1>
  <div>{{ blog.title }}</div>
  <div>
    <p>{{ blog.body }}</p>
  </div>
</template>

<script>
import getBlog from '@/composables/getBlog.js'
import { onMounted, onUnmounted, onUpdated } from 'vue'
export default {
    props: ['id'],
    setup(props) {
        const {blog, error, loadBlog} = getBlog(props.id)

        loadBlog()

        onMounted(() => console.log('mounted'))
        onUpdated(() => console.log('updated'))
        onUnmounted(() => console.log('unmounted'))

        return {blog, error, loadBlog}
    }
}
</script>

<style>

</style>
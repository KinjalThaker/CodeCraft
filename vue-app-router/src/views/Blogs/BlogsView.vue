<template>
  <h1>Blogs</h1>
  <div v-if="blogs">
    <div v-for="blog in blogs" :key="blog.id">
        <SingleBlog :blog="blog" />
    </div>
</div>
<div v-else>
    <div>{{ error }}</div>
</div>
</template>

<script>
import SingleBlog from '@/components/Blogs/SingleBlog.vue'
import getBlogs from '@/composables/getBlogs.js'
export default {
    components: { SingleBlog },
    setup() {
        const {blogs, error, loadBlogs} = getBlogs()

        loadBlogs()

        return { blogs, error}
    }
}
</script>

<style>

</style>
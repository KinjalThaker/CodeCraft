import { ref } from "vue"
const getBlog = (id) => {
    const blog = ref([])
    const error = ref(null)
    const loadBlog = async() => {
        try {
            const data = await fetch('http://localhost:3000/blogs/' + id)
            if(!data.ok) {
                throw Error('Something went wrong while fetching the record.')
            }

            blog.value = await data.json()
        } catch (err) {
            error.value = err.message
        }
    }

    return { blog, error, loadBlog }
}

export default getBlog
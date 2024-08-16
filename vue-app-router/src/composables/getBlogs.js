import { ref } from 'vue'

const getBlogs = () => {
    const blogs = ref([])
    const error = ref(null)
    const loadBlogs = async() => {
        try {
            const data = await fetch('http://localhost:3000/blogs')
            if(!data.ok) {
                throw Error('Something went wrong while fetching the records.')
            }

            blogs.value = await data.json()
        } catch (err) {
            error.value = err.message
        }
    }

    return { blogs, error, loadBlogs }
}

export default getBlogs
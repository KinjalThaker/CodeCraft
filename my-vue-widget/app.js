const app = Vue.createApp({
    data() {
        return {
            title: 'Project title',
            url: 'https://google.com',
            isShow: true,
            books: [
                { title: 'book 1', author: 'author 1', isFav: true},
                { title: 'book 2', author: 'author 2', isFav: false},
                { title: 'book 3', author: 'author 3', isFav: true},
            ],
        }
    },
    methods: {
        toggle() {
            this.isShow = !this.isShow
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')
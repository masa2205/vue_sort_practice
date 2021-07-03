new Vue({
    el: '#app',
    data: {
        message: 'Sort Clum In Table',
        users:[],
        sort_key: "",
    },
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.users = response.data
                // console.log(response.data)
                // console.log(this.users)
            })
    },
    methods: {
        sortBy(key) {
            this.sort_key = key;
        },
    },
})
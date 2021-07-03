var app = new Vue({
    el: '#app',
    data: {
        message: 'Sort Clum In Table',
        users:[],
    },
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => this.users = response.data)
    }
})
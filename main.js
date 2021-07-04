new Vue({
    el: '#app',
    data: {
        message: 'Sort Clum In Table',
        users:[],
        sort_key: "",
        sort_asc: true,
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
            this.sort_key === key
                ?(this.sort_asc = !this.sort_asc)
                :(this.sort_asc = true);
            this.sort_key = key;
        },
        addClass(key) {
            return {
                asc: this.sort_key === key && this.sort_asc,
                desc: this.sort_key === key && !this.sort_asc,
            }
        }
    },
    computed: {
        sort_users() {
            if(this.sort_key !="") {
                let set = 1;
                // this.sort_asc ? (set=1):(set=-1);
                if(this.sort_asc ){
                    set = 1
                }else{
                    set=-1
                }
                this.users.sort((a,b) => {
                    if(a[this.sort_key]<b[this.sort_key]) return -1*set;
                    if(a[this.sort_key]>b[this.sort_key]) return 1*set;
                    return 0;
                });
                return this.users;
            }else{
                return this.users;
            }
        },
    },
})

let array = [5,3,8,9,1]
array.sort(function(a,b){
    if(a<b)return 1;
    if(a>b)return -1;
    return 0;
});
console.log(array.sort())

// const items = [
//     { name: 'Edward', number: 21 },
//     { name: 'Sharpe', number: 37 },
//     { name: 'And', number: 45 },
//     { name: 'The', number: -12 },
//     { name: 'Magnetic', number: 13 },
//     { name: 'Zeros', number: 37 }
// ];

// items.sort(function (a, b) {
//     return a.number - b.number
// });
// console.log(items.sort())

const items = [
    { name: 'Edward', number: 21 },
    { name: 'Sharpe', number: 37 },
    { name: 'And', number: 45 },
    { name: 'The', number: -12 },
    { name: 'Magnetic', number: 13 },
    { name: 'Zeros', number: 37 }
];

items.sort(function(a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
console.log(items.sort())
// API from https://www.themoviedb.org
const app = new Vue ({
    el: '#app',
    data: {
        apiKey: '043b0683a6aef848c9e881a8465a584a',
        movies: [],
        tvs: [],
        search: '',
    },
    methods: {
        getMovies() {
            axios.get('https://api.themoviedb.org/3/search/movie' , {
                params: {
                    api_key: this.apiKey,
                    query: this.search,
                }
            })
            .then(response => {
                this.movies = response.data.results;
                console.log(this.movies);
            })
            .catch(error => {
                console.log(error);
            });
        },
    },
});
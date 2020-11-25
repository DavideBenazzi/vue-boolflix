// API from https://www.themoviedb.org
const app = new Vue ({
    el: '#app',
    data: {
        apiKey: '043b0683a6aef848c9e881a8465a584a',
        movies: [],
        tvs: [],
        search: ' ',
    },
    methods: {
        /**
         * FUNCTION START SEARCH WITH FUNCTIONS GETMOVIES AND GETTVS
         */ 
        startSearch(){
            this.getMovies();
            this.getTvs();
        },
        /**
         * FUNCTION GETMOVIES FOR GET MOVIES FROM THE API
         */ 
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
        /**
         * FUNCTION GETTVS FOR GET TVS FROM THE API
         */ 
        getTvs() {
            axios.get('https://api.themoviedb.org/3/search/tv' , {
                params: {
                    api_key: this.apiKey,
                    query: this.search,
                }
            })
            .then(response => {
                this.tvs = response.data.results;
                console.log(this.tvs);
            })
            .catch(error => {
                console.log(error);
            });
        },
        /**
         * FUNCTION FOR THE STAR VOTE
         */
        starVote(vote) {
            return Math.ceil(vote / 2);
        },
    },
});
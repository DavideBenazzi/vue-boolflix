// API from https://www.themoviedb.org
const app = new Vue ({
    el: '#app',
    data: {
        apiKey: '043b0683a6aef848c9e881a8465a584a',
        movies: [],
        tvs: [],
        search: ' ',
        altPoster: 'https://www.altavod.com/assets/images/poster-placeholder.png',
        moviesGenres: [],
        tvsGenres: [],
    },
    created(){
        this.getMoviesGenres();
        this.getTvsGenres();
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
                    language: 'it-IT',
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
                    language: 'it-IT',
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
        /**
         * FUNCTION TO GET GENRES FOR MOVIES
         */
        getMoviesGenres() {
            axios.get('https://api.themoviedb.org/3/genre/movie/list' , {
                params: {
                    api_key: this.apiKey,
                    language: 'it-IT',
                }
            })
            .then(response => {
                this.moviesGenres = response.data.genres;
                console.log(this.moviesGenres);
            })
            .catch(error => {
                console.log(error);
            });
        },
        /**
         * FUNCTION TO GET GENRES FOR TVS
         */
        getTvsGenres() {
            axios.get('https://api.themoviedb.org/3/genre/tv/list' , {
                params: {
                    api_key: this.apiKey,
                    language: 'it-IT',
                }
            })
            .then(response => {
                this.tvsGenres = response.data.genres;
                console.log(this.tvsGenres);
            })
            .catch(error => {
                console.log(error);
            });
        }
    },
});
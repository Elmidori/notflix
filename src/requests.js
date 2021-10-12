const API_KEY = '9ad5df65759636321bfb8a7457b1634e';

const requests ={
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchLatest: `/movie/now_playing?api_key=${API_KEY}&language=en-US`,
    fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
    fetchCrime: `discover/movie?api_key=${API_KEY}&with_genres=80&language=en-US`
}



export default requests;
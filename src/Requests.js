 const key = '1eaa6408a9cd04cc087c75f495494eaa'

const requests = {
    random:   `https://api.themoviedb.org/3/movie/550?api_key=${key}`,
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    // requestHorror: `https://api.themoviedb.org/3/search/movie/popular?api_key=${key}&language=en-US&query=horror&page=1&include_ad`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
};

 export default requests


 

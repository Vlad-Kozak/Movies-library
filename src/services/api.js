const axios = require('axios');

const KEY = '83315ca553e38676f05e28ed10d08b23';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

function getTrending() {
  return axios.get(`/trending/movie/week?api_key=${KEY}`).then(r => r.data);
}

function getMovieByKeyword(keyword, page) {
  return axios
    .get(
      `/search/movie?api_key=${KEY}&language=en-US&query=${keyword}&page=${page}&include_adult=false`
    )
    .then(r => r.data);
}

function getMovieDetails(movieId) {
  return axios
    .get(`/movie/${movieId}?api_key=${KEY}&language=en-US`)
    .then(r => r.data);
}

function getMovieCredits(movieId) {
  return axios
    .get(`/movie/${movieId}/credits?api_key=${KEY}&language=en-US`)
    .then(r => r.data);
}

function getMovieReviews(movieId, page) {
  return axios
    .get(`/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=${page}`)
    .then(r => r.data);
}

export {
  getTrending,
  getMovieByKeyword,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};

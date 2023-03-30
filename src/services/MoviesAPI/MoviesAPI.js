import axios from 'axios';
import { API_KEY } from 'services/API_KEY/API_KEY';

const BASE_URL = 'https://api.themoviedb.org/3';
const trending = '/trending/movie/day';

async function getConfig() {
  const response = await axios.get(
    `${BASE_URL}/configuration?api_key=${API_KEY}`
  );
  return response.data;
}

async function getTrending() {
  const response = await axios.get(
    `${BASE_URL}/${trending}?api_key=${API_KEY}`
  );
  return response.data;
}

async function searchMovies(query, page) {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=true`
  );
  return response.data;
}

async function getMovieDetails(id) {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=uk-UA`
  );
  return response.data;
}

async function getMovieCredits(id) {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=uk-UA`
  );
  return response.data;
}

async function getMovieReviews(id) {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}

const MoviesAPI = {
  searchMovies,
  getTrending,
  getConfig,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};

export default MoviesAPI;

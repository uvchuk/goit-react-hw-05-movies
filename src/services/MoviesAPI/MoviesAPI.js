import axios from 'axios';
import { API_KEY } from 'services/API_KEY/API_KEY';

const BASE_URL = 'https://api.themoviedb.org/3';
const trending = '/trending/movie/day';

async function getTrending() {
  const response = await axios.get(
    `${BASE_URL}/${trending}?api_key=${API_KEY}`
  );
  return response.data;
}

async function getConfig() {
  const response = await axios.get(
    `${BASE_URL}/configuration?api_key=${API_KEY}`
  );
  return response.data;
}

async function getMovieDetails(id) {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=uk-UA`
  );
  return response.data;
}

const MoviesAPI = {
  getTrending,
  getConfig,
  getMovieDetails,
};

export default MoviesAPI;

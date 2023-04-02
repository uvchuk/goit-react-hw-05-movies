import axios from 'axios';
import { API_KEY } from 'services/MoviesAPI/API_KEY';
const BASE_URL = 'https://api.themoviedb.org/3';

export default class MoviesAPI {
  constructor() {
    this.request = '';
  }

  async getMovie(request, id) {
    switch (request) {
      case 'config':
        this.request = 'configuration';
        break;
      case 'trending':
        this.request = 'trending/movie/day';
        break;
      case 'details':
        this.request = `movie/${id}`;
        break;
      case 'credits':
        this.request = `movie/${id}/credits`;
        break;
      case 'reviews':
        this.request = `movie/${id}/reviews`;
        break;
      default:
        console.log(`No match with current request: ${request}`);
        break;
    }
    const response = await axios.get(
      `${BASE_URL}/${this.request}?api_key=${API_KEY}`
    );
    return response.data;
  }

  async searchMovies(query, page) {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
    );
    return response.data;
  }
}

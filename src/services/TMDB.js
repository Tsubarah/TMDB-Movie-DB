/**
 * Service for communicating with The Movie - DB
 */
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const adultCont = '&include_adult=false';

const FAKE_SLOW_API = false
const FAKE_SLOW_API_DELAY = 1500

/**
 * Get an endpoint
*/
const get = async (endpoint) => {
  const res = await axios.get(endpoint)

  FAKE_SLOW_API && await new Promise(r => setTimeout(r, FAKE_SLOW_API_DELAY))

  return res.data
}

const getMovie = (id) => {
  return get(`/movie/${id}?api_key=${API_KEY}${adultCont}&append_to_response=credits, vote_average`)
}

const getPerson = (id) => {
  return get(`/person/${id}?api_key=${API_KEY}${adultCont}&append_to_response=credits`)
}

const getPopularMovies = ({ queryKey }) => {
  const [_key, { page }] = queryKey
  return get(`/movie/popular?api_key=${API_KEY}${adultCont}&language=en-US&page=${page}`)
}

const discoverMovies = async ({ queryKey }) => {
  const [_key, { page, genre_id }] = queryKey;
  return get(
      `/discover/movie?api_key=${API_KEY}&language=en-US&popularity.desc${adultCont}&page=${page}&with_genres=${genre_id}`
  );
};

const getTopMovies = ({ queryKey }) => {
  const [_key, { page }] = queryKey
  return get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}${adultCont}`)
}

const getCinemaMovies = ({ queryKey }) => {
  const [_key, { page }] = queryKey
  return get(`/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}${adultCont}`)
}

const getAllGenres = ({ queryKey }) => {
  const [_key] = queryKey
  return get(`/genre/movie/list?api_key=${API_KEY}${adultCont}&language=en-US`)
}

export default {
  getMovie,
  getPopularMovies,
  getTopMovies,
  getCinemaMovies,
  getAllGenres,
  getPerson,
  discoverMovies,
}

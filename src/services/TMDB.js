/**
 * Service for communicating with The Movie - DB
 */
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const adultCont = '&include_adult=false';

/**
 * Get an endpoint
*/
const get = async (endpoint) => {
  const res = await axios.get(endpoint)

  return res.data
}

// export const getMovie = ({ queryKey }) => {
//   const [_key, { id }] = queryKey
//   return get(`/movie/${id}?api_key=${API_KEY}&language=en-US`)
// }

const getMovie = (id) => {
  return get(`/movie/${id}?api_key=${API_KEY}&append_to_response=credits`)
}

const getPerson = (id) => {
  return get(`/person/${id}?api_key=${API_KEY}&append_to_response=credits`)
}

const getPopularMovies = ({ queryKey }) => {
  const [_key, { page }] = queryKey
  return get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}${adultCont}`)
}

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
  return get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)
}

// const getPerson = ({ queryKey }) => {
//   const [_key, { id }] = queryKey
//   return get(`/person/${id}?api_key${API_KEY}&language=en-US`)
// }

export default {
  getMovie,
  getPopularMovies,
  getTopMovies,
  getCinemaMovies,
  getAllGenres,
  getPerson,
}

import { useQuery } from 'react-query'
import TMDB from '../services/TMDB'

const useTopMovies = () => {
  return useQuery('top-movies', TMDB.getTopMovies)
}

export default useTopMovies
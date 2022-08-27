import { useQuery } from 'react-query'
import TMDB from '../services/TMDB'

const useTopMovies = ({ page }) => {
  return useQuery(['top-movies', { page }], TMDB.getTopMovies)
}

export default useTopMovies
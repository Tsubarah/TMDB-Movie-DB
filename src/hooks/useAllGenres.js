import { useQuery } from 'react-query'
import TMDB from '../services/TMDB'

const useAllGenres = () => {
  return useQuery(['all-genres'], TMDB.getAllGenres)
}

export default useAllGenres
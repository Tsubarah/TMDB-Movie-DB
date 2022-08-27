import { useQuery } from 'react-query'
import TMDB from '../services/TMDB'

const useGenre = ({ page, genre_id}) => {
  return useQuery(['MoviesByGenres', { page, genre_id }], TMDB.discoverMovies)
}

export default useGenre
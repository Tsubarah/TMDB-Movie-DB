import { useQuery } from 'react-query'
import TMDB from '../services/TMDB'

const usePopularMovies = ({ page }) => {
    return useQuery(['popular-movies', { page }], TMDB.getPopularMovies)
}

export default usePopularMovies
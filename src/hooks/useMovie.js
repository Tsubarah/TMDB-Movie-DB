import { useQuery } from 'react-query'
import TMDB from '../services/TMDB'

const useMovie = (id, error) => {
	if (error) {
		throw new Error('There was an error fetching')
	}
	return useQuery(['movie', id], () => TMDB.getMovie(id))
}

export default useMovie
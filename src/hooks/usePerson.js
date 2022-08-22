import { useQuery } from 'react-query'
import TMDB from '../services/TMDB'

const usePerson = (id) => {
	return useQuery(['person', id], () => TMDB.getPerson(id))
}

export default usePerson
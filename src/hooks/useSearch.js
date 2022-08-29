import { useQuery } from 'react-query'
import TMDB from '../services/TMDB'

const useSearch = ({ query, page }) => {
    return useQuery(['search', { query, page }], TMDB.search, {
        enabled: !!query,
    })
}

export default useSearch
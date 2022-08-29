import { useSearchParams } from "react-router-dom"
import useSearch from '../hooks/useSearch'
import SearchForm from "../components/SearchForm"
import MoviesList from '../components/MoviesList'

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 })

  const page = Number(searchParams.get('page'))
  const query = searchParams.get('query') ?? ''

  const { data } = useSearch({ query, page })
  
  const handleSearch = ( query ) => {
    setSearchParams({ query, page })
  }

  return (
    <div>
      <SearchForm handleSearch={handleSearch} />
      
      {data && (
        <MoviesList movies={data} handlePage={setSearchParams} page={page} query={query} />
      )}
    </div>
  )
}

export default SearchPage
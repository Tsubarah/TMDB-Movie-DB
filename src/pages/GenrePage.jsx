import { useParams, useSearchParams } from "react-router-dom"
import { useQuery } from "react-query"
import TMDB from "../services/TMDB"

const GenrePage = () => {
  const { id } = useParams()
  const { data, error, isError, isLoading, isSuccess } = useQuery(['MoviesByGenres', { page: 1, genre: id }], TMDB.discoverMovies)

  const [searchParams, setSearchParams] = useSearchParams({ page: 1, genre: '' })

  const page = searchParams.get('page')
  const genre_id = searchParams.get('genre_id')

  console.log(id)

  console.log(data)


  return (
    <div>GenrePage</div>
  )
}

export default GenrePage
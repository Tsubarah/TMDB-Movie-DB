import { useParams } from "react-router-dom"
import { useQuery } from "react-query"
import TMDB from "../services/TMDB"

const GenrePage = () => {
  const { id } = useParams()
  const { data, error, isError, isLoading, isSuccess } = useQuery(['MoviesByGenres', { page: 1, genre: Number(id) }], TMDB.discoverMovies)

  // const [searchParams, setSearchParams] = useSearchParams({ page: 1, genre: "" })

  // const page = searchParams.get('page')
  // const genre = searchParams.get('genre')


  return (
    <div>GenrePage</div>
  )
}

export default GenrePage
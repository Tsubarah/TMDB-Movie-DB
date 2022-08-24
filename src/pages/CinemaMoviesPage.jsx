import Container from 'react-bootstrap/Container'
import TMDB from '../services/TMDB'
import { useQuery } from 'react-query'
import MoviesList from '../components/MoviesList'
import { useSearchParams } from 'react-router-dom'

const CinemaMoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 })

  const page = searchParams.get('page')

  const { data, error, isError, isLoading, isSuccess } = useQuery(['cinema-movies', { page }], TMDB.getCinemaMovies)

  return (
    <Container className="py-3">
      <h1>New Movies</h1>

      {data && 
        <MoviesList 
          data={data}
          handlePage={setSearchParams}
          page={page}
        />
      }

    </Container>
  )
}

export default CinemaMoviesPage
import Container from 'react-bootstrap/Container'
import TMDB from '../services/TMDB'
import { useQuery } from 'react-query'
import MoviesList from '../components/MoviesList'
import { useSearchParams } from 'react-router-dom'
import LoadingSpinner from '../components/Loading'

const NowPlayingMoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 })

  const page = searchParams.get('page')

  const { data, error, isError, isLoading, isSuccess } = useQuery(['cinema-movies', { page }], TMDB.getCinemaMovies)

  return (
    <Container className="py-3">
      <h1 className="text-center text-white mb-5 mt-3">New Movies</h1>

      {isLoading && 
        <LoadingSpinner />
      }

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

export default NowPlayingMoviesPage
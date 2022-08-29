import Container from 'react-bootstrap/Container'
import MoviesList from '../components/MoviesList'
import { useSearchParams } from 'react-router-dom'
import LoadingSpinner from '../components/Loading'
import usePopularMovies from '../hooks/usePopularMovies'
import Error from '../components/Error'

const PopularMoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 })

  const page = searchParams.get('page')

  const { data: movies, error, isError, isLoading } = usePopularMovies({ page })

  return (
    <Container className="py-3">
      <h1 className="text-center mb-5 mt-3">What's Popular</h1>

      {isLoading && 
        <LoadingSpinner />
      }

      {isError &&
        <Error error={error} />
      }

      {movies && 
        <MoviesList 
          movies={movies} 
          handlePage={setSearchParams} 
          page={page} 
        />}

    </Container>
  )
}

export default PopularMoviesPage
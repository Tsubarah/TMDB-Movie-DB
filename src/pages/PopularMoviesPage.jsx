import Container from 'react-bootstrap/Container'
import MoviesList from '../components/MoviesList'
import { useSearchParams } from 'react-router-dom'
import LoadingSpinner from '../components/Loading'
import usePopularMovies from '../hooks/usePopularMovies'

const PopularMoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 })

  const page = searchParams.get('page')

  const { data: movies, error, isError, isLoading } = usePopularMovies({ page })

  console.log(movies)

  return (
    <Container className="py-3">
      <h1 className="text-center mb-5 mt-3">What's Popular</h1>

      {isLoading && 
        <LoadingSpinner />
      }

      {movies && 
        <MoviesList 
          data={movies} 
          handlePage={setSearchParams} 
          page={page} 
        />}

    </Container>
  )
}

export default PopularMoviesPage
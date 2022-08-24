import Container from 'react-bootstrap/Container'
import TMDB from '../services/TMDB'
import { useQuery } from 'react-query'
import MoviesList from '../components/MoviesList'
// import useTopMovies from '../hooks/useTopMovies'
import { useSearchParams } from 'react-router-dom'

const TopMoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 })

  const page = searchParams.get('page')

  const { data, error, isError, isLoading, isSuccess } = useQuery(['top-movies', { page }], TMDB.getTopMovies)
  // const { data: topMovies, error, isError, isLoading } = useTopMovies()

  return (
    <Container className="py-3">
      <h1>Top Rated Movies</h1>

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

export default TopMoviesPage
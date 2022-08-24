import Container from 'react-bootstrap/Container'
import TMDB from '../services/TMDB'
import { useQuery } from 'react-query'
import MoviesList from '../components/MoviesList'
import { useSearchParams } from 'react-router-dom'

const PopularMoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 })

  const page = searchParams.get('page')

  const { data, error, isError, isLoading, isSuccess } = useQuery(['popular-movies', { page }], TMDB.getPopularMovies)

  console.log(data)

  return (
    <Container className="py-3">
      <h1>What's Popular</h1>

      {data && 
        <MoviesList 
          data={data} 
          handlePage={setSearchParams} 
          page={page} 
        />}

    </Container>
  )
}

export default PopularMoviesPage
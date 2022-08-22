import Container from 'react-bootstrap/Container'
import TMDB from '../services/TMDB'
import { useQuery } from 'react-query'
import { useState } from 'react'
import MoviesList from '../components/MoviesList'

const PopularMoviesPage = () => {
  const [page, setPage] = useState(2)
  const { data, error, isError, isLoading, isSuccess } = useQuery(['popular-movies', page], TMDB.getPopularMovies)

  console.log(data)

  return (
    <Container className="py-3">
      <h1>What's Popular</h1>

      {data && <MoviesList data={data.results} />}

    </Container>
  )
}

export default PopularMoviesPage
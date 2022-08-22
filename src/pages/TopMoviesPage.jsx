import Container from 'react-bootstrap/Container'
import TMDB from '../services/TMDB'
import { useQuery } from 'react-query'
import { useState } from 'react'
import MoviesList from '../components/MoviesList'
// import useTopMovies from '../hooks/useTopMovies'

const TopMoviesPage = () => {
  const [page, setPage] = useState(1)
  const { data, error, isError, isLoading, isSuccess } = useQuery(['popular-movies', page ], TMDB.getTopMovies)
  // const { data: topMovies, error, isError, isLoading } = useTopMovies()

  return (
    <Container className="py-3">
      <h1>Top Rated Movies</h1>

      {data && <MoviesList data={data.results} />}

    </Container>
  )
}

export default TopMoviesPage
import Container from 'react-bootstrap/Container'
import TMDB from '../services/TMDB'
import { useQuery } from 'react-query'
import { useState } from 'react'
import MoviesList from '../components/MoviesList'

const CinemaMoviesPage = () => {
  const [page, setPage] = useState(1)
  const { data, error, isError, isLoading, isSuccess } = useQuery(['cinema-movies', {page}], TMDB.getCinemaMovies)

  return (
    <Container className="py-3">
      <h1>New Movies</h1>

      {data && <MoviesList data={data.results} />}
      
    </Container>
  )
}

export default CinemaMoviesPage
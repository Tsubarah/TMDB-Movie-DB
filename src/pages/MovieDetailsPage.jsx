import React from 'react'
import TMDB from '../services/TMDB'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import useMovie from '../hooks/useMovie'
import MovieCard from '../components/MovieCard'
import Container from 'react-bootstrap/esm/Container'

const MovieDetailsPage = () => {
  const { id } = useParams()
  // const { data, error, isError, isLoading, isSuccess } = useQuery(['movie', id], TMDB.getMovie)
  const { data: movie, error, isError, isLoading } = useMovie(id)

  console.log(movie)

  return (
    <Container className="py-3">
      {movie && <MovieCard data={movie} />}
    </Container>
    
  )
}

export default MovieDetailsPage
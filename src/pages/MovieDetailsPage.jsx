import React from 'react'
import TMDB from '../services/TMDB'
import { useQuery } from 'react-query'

const MovieDetailsPage = () => {
  const { data, error, isError, isLoading, isSuccess } = useQuery(['movie', { id }], TMDB.getMovie)

  console.log(data)

  return (
    <div>MovieDetailsPage</div>
  )
}

export default MovieDetailsPage
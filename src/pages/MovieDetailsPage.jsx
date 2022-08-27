import React from 'react'
import { useParams } from 'react-router-dom'
import useMovie from '../hooks/useMovie'
import MovieCard from '../components/MovieCard'
import Container from 'react-bootstrap/Container'
import LoadingSpinner from '../components/Loading'
import ActorsList from '../components/ActorsList'

const MovieDetailsPage = () => {
  const { id } = useParams()

  const { data: movie, error, isError, isLoading } = useMovie(id)

  console.log(movie)

  return (
    <Container className="py-3">

      {isLoading && 
        <LoadingSpinner />
      }

      {movie && <MovieCard movie={movie} />  }
      {movie && <ActorsList actors={movie}/>  }
      
    </Container>
    
  )
}

export default MovieDetailsPage
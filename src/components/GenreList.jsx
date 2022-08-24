import ListGroup from 'react-bootstrap/ListGroup'
import { Link, useSearchParams } from 'react-router-dom'
import TMDB from '../services/TMDB'
import { useQuery } from 'react-query'
// import { useEffect } from 'react'

const GenreList = ({ data }) => {
  const { data: movies, error, isError, isLoading, isSuccess } = useQuery(['MoviesByGenres', { page: 1, genre: "" }], TMDB.discoverMovies)

  const [searchParams, setSearchParams] = useSearchParams({ page: 1, genre: "" })

  const page = searchParams.get('page')
  const genre = searchParams.get('genre')

  console.log(movies)
  
  // useEffect(() => {
  //   setSearchParams({ page: 1, genre: 16 })
  // }, [movies])

  return (
    <ListGroup>
      {data.genres.map(genre => (
        <ListGroup.Item
          action
          as={Link}
          key={genre.id}
          to={`/genre/${genre.id}`}
        >
          <h4>{genre.name}</h4>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default GenreList
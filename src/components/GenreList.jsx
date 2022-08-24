import ListGroup from 'react-bootstrap/ListGroup'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import TMDB from '../services/TMDB'
import { useQuery } from 'react-query'


const GenreList = ({ data }) => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1, genre_id: "", })
  
  const page = searchParams.get('page')
  const genre_id = searchParams.get('genre_id')
  
  const navigate = useNavigate()
  
  const { data: movies, error, isError, isLoading, isSuccess } = useQuery(['genres-list', { page, genre_id }], TMDB.discoverMovies)
  
    
  // const handleClick = (genre) => {
  //   setSearchParams({ page: page, genre_id: genre.id})}
  //   navigate(`/genre/${searchParams}`)
  // }
  
  
  return (
    <ListGroup>
      {data.genres.map(genre => (
        <ListGroup.Item
          action
          as={Link}
          key={genre.id}
          // onClick={handleClick(genre)}
          // onClick={() => {setSearchParams({ page: page, genre_id: genre.id})}}
          to={`/genre/${searchParams}`}
        >
          <h4>{genre.name}</h4>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default GenreList
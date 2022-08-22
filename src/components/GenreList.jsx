import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

const GenreList = ({ data }) => {

  console.log(data)

  return (
    <ListGroup>
      {data.genres.map(genre => (
        <ListGroup.Item
          action
          as={Link}
          key={genre.id}
          to={`/movie/${genre.id}`}
        >
          <h4>{genre.name}</h4>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default GenreList
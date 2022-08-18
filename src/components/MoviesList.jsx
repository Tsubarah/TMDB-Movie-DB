import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const MoviesList = ({ data }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500/'

  console.log(data)
  return (
    <ListGroup>
      {data.map(movie => (
        <ListGroup.Item
          action
          as={Link}
          key={movie.id}
          to={`/movie/${movie.id}`}
        >
          <div className="card-body d-flex justify-content-between">
            <Card.Img variant="top" src={BASE_URL + movie.poster_path} />
            <h4>{movie.title} ({movie.release_date})</h4>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default MoviesList
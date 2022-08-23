import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const MoviesList = ({ data }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500/'

  console.log(data)
  return (
    <div className='d-flex flex-wrap justify-content-around items-center'>
      {data.map(movie => (
        <Card className='bg-dark text-white mb-4' style={{width: '18rem'}}>
          <Card.Img variant="top" src={BASE_URL + movie.poster_path} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>
              Release date: {movie.release_date}
            </Card.Text>
          </Card.Body>
          <Button 
            as={Link}
            to={`/movie/${movie.id}`}
            variant="primary"
          >
            Read more
          </Button>
        </Card>
      ))}
    </div>
  )
}

export default MoviesList
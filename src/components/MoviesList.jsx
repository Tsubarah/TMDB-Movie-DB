import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'


const MoviesList = ({ data, handlePage, page, genre }) => {

  const BASE_URL = 'https://image.tmdb.org/t/p/w500/'

  return (
    <div>
      <div className='row gap-4 justify-content-center'>
        {data.results.map(movie => (
          <Card className='col-4 bg-dark text-white mb-4 p-4' key={movie.id} style={{width: '18rem'}}>
            <Card.Img variant="top" src={BASE_URL + movie.poster_path} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>
                <span>Release date: {movie.release_date}</span>
                <span>Rating: {movie.vote_average}</span>
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
      <Pagination page={page} handlePage={handlePage} genre={genre} totalPages={data.total_pages} />
    </div>
  )
}

export default MoviesList
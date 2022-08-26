import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import Row from 'react-bootstrap/Row'


const MoviesList = ({ data, handlePage, page, genre }) => {

  const BASE_URL = 'https://image.tmdb.org/t/p/w500/'

  return (
    <div>
      <Row className='gap-4 justify-content-center'>
        {data.results.map(movie => (
          <Card className='movie-card col-lg-3 col-md-4 col-sm-6 col-xs-12 bg-dark text-white mb-4 p-4' key={movie.id} style={{width: '18rem'}}>
            <Card.Img variant="top" src={BASE_URL + movie.poster_path} className='fluid border-radius-8'/>
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>
                <span>Release date: {movie.release_date}</span>
                <br />
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
      </Row>
      <Pagination page={page} handlePage={handlePage} genre={genre} totalPages={data.total_pages} />
    </div>
  )
}

export default MoviesList
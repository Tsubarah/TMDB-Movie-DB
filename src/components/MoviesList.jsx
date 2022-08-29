import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import Row from 'react-bootstrap/Row'


const MoviesList = ({ movies, handlePage, page, genre }) => {

  const imgUrl = 'https://image.tmdb.org/t/p/w500/'
  console.log(movies)
  
  return (
    <div>
      <Row className='gap-4 justify-content-center'>
        {movies?.results.map(movie => (
          <Card 
            className='movie-card 
                      text-center 
                      bg-dark 
                      text-white 
                      mb-4 
                      p-4' 
            key={movie.id} 
            style={{width: '20rem'}}
          >

            <Card.Img 
              variant="top" 
              src={imgUrl + movie.poster_path} 
              className='movie-list-image fluid border-radius-8'/>

            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>
                Release date: {movie.release_date}
                <br />
                Rating: {movie.vote_average}
              </Card.Text>
            </Card.Body>
            <Button 
              as={Link}
              to={`/movie/${movie.id}`}
              className="primary-btn"
            >
              Read more
            </Button>
          </Card>
        ))}
      </Row>
      <Pagination 
        page={page} 
        handlePage={handlePage} 
        genre={genre} 
        totalPages={movies.total_pages} 
      />
    </div>
  )
}

export default MoviesList
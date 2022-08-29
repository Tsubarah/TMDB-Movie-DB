import Carousel from 'better-react-carousel'
import moviePlaceholder from '../assets/images/movieImage_placeholder.png'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const CarouselGallery = ({ movies }) => {

  const imgUrl = 'https://image.tmdb.org/t/p/w500/'

  console.log(movies)

  return (
    <>
      {movies && (
        <Carousel cols={4} rows={1} gap={10}>
          {movies?.results.map((movie, i) => (
            <Carousel.Item key={i}>
              <Card 
                className='movie-card 
                          text-center 
                          bg-dark 
                          text-white 
                          mb-4 
                          p-4'  
                style={{width: '18rem', height: '38rem'}}
              >
                <Card.Img 
                  variant="top" 
                  src={imgUrl + movie.poster_path} 
                  className='fluid border-radius-8'
                />
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
                  className="primary-btn"
                >
                  Read more
                </Button>
                
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  )
}

export default CarouselGallery
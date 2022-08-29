import Carousel from 'better-react-carousel'
import moviePlaceholder from '../assets/images/movieImage_placeholder.png'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const CarouselGallery = ({ movies }) => {

  const imgUrl = 'https://image.tmdb.org/t/p/w500/'

  const breakpoints = [
    {
      breakpoint: 600,
      cols: 2,
      rows: 1,
      gap: 1,
    }
  ]

  console.log(movies)

  return (
    <>
      {movies && (
        <div className="pb-5 m-auto">
          <Carousel cols={4} rows={1} gap={2} responsiveLayout={breakpoints}>
            {movies?.results.map((movie, i) => (
              <Carousel.Item key={i} className="
              col-lg-10
              col-md-12
              col-sm-8">
                <Card 
                  className='movie-card 
                            text-center 
                            bg-dark 
                            text-white 
                            m-2 
                            p-4'  
                >
                  <Card.Img 
                    variant="top" 
                    src={movie?.poster_path
                      ? `${imgUrl}${movie?.poster_path}`
                      : moviePlaceholder
                    } 
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
        </div>
      )}
    </>
  )
}

export default CarouselGallery
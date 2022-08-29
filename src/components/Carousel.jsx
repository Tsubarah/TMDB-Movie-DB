import Slider from "react-slick";
import moviePlaceholder from '../assets/images/movieImage_placeholder.png'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const Carousel = ({ movies }) => {
  
  const imgUrl = 'https://image.tmdb.org/t/p/w500/'

  const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    centerPadding: 0 + 'px',
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  }

  return (
    <Slider {...settings}>
      {movies?.results?.map((movie, i) => (
        <Card 
          key={i}
          className='movie-card 
                    text-center 
                    bg-dark 
                    text-white 
                    m-2 
                    p-4'  
        >
          <img
            className="img-fluid mb-4 border-radius-8"
            src={movie?.poster_path
              ? `${imgUrl}${movie?.poster_path}`
              : moviePlaceholder
            } 
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
      ))}
    </Slider>
  )
}

export default Carousel
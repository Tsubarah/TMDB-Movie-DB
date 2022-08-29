import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import moviePlaceholder from '../../src/assets/images/movieImage_placeholder.png'
import AccordionComponent from './AccordionComponent'

const MovieCard = ({ movie }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w500/"

	return (
    <>
      <Row className="m-auto mb-4 text-white d-flex">
        {/* Movie poster */}
        <Col lg={4} sm={12}>
            <img 
              className="movie-img img-fluid mb-4"
              variant="top" 
              src={movie?.poster_path
                ? `${imgUrl}${movie?.poster_path}`
                : moviePlaceholder
              }
            />
        </Col>

        {/* Movie description */}
        <Col lg={8}>
          <h1>
            {movie.title} 
            <span className="description fs-2">
              ({Math.round(movie.vote_average * 10) / 10})
            </span>
          </h1>

          {/* Displays if there's a release date */}
          {movie.release_date 
            ?   <p className="fs-5 pt-3">
                  Released: 
                  <span className="description">
                    {movie.release_date}
                  </span>
                </p>
            : ""
          }
          
          {/* Displays if there's an overview */}
          {movie.overview
            ? <p className="fs-5">
                Overview: 
                <span className="description">
                  {movie.overview}
                </span>
              </p>
            : ""
          }

          {/* Displays if there's genres */}
          {movie.genres.length !== 0 
            ? <p className="fs-5 mb-0">Genres:</p>
            : ""
          }

          {/* List of genres if there are */}
          <div className="genresList d-flex flex-wrap">
            {movie?.genres.map(genre => (
              <li 
                className="px-2 pb-2 fs-5"
                key={genre.id}
              >
                <p className="description mb-0">{genre.name}</p>
              </li>
            ))}
          </div>
        </Col>
        {movie &&  
          <AccordionComponent data={movie} />
        }
      </Row>
    </>
	)
}

export default MovieCard
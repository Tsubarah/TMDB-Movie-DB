import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import moviePlaceholder from '../../src/assets/images/movieImage_placeholder.png'
import Accordion from './Accordion'

const MovieCard = ({ movie }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w500/"

  console.log(movie)
	return (
    <>
      <Row className="m-auto mb-4 text-white d-flex col-lg-10 col-md-8 col-sm-6">
        {/* Movie poster */}
        <Col lg={4} sm={12}>
          <div>
            <img 
              className="movie-img img-fluid"
              variant="top" 
              src={movie?.poster_path
                ? `${imgUrl}${movie?.poster_path}`
                : moviePlaceholder
              }
            />
          </div>
        </Col>

        {/* Movie description */}
        <Col lg={8}>
          <h1>{movie.title}</h1>

          {/* Displays if there's a release date */}
          {movie.release_date 
            ?  <p><span className="fw-bold">Released:</span> {movie.release_date}</p>
            : ""
          }
          
          {/* Displays if there's an overview */}
          {movie.overview
            ? <p><span className="fw-bold">Overview:</span> {movie.overview}</p>
            : ""
          }

          {/* Displays if there's genres */}
          {movie.genres.length !== 0 
            ? <p><span className="fw-bold">Genres:</span></p>
            : ""
          }

          {/* List of genres if there are */}
          <div className="genresList d-flex">
            {movie?.genres.map(genre => (
              <li 
                className="p-2"
                key={genre.id}
              >
                <p>{genre.name}</p>
              </li>
            ))}
          </div>
        </Col>
        {movie &&  
          <Accordion data={movie} />
        }
      </Row>
    </>
	)
}

export default MovieCard
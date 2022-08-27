import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MovieCard = ({ movie }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500/'

  console.log(movie)
	return (
    <>
      <Row className="m-auto mb-4 text-white d-flex col-lg-10 col-md-8 col-sm-6">
        <Col lg={4} sm={12}>
          <div>
            <img 
              className="img-fluid"
              variant="top" 
              src={BASE_URL + movie.poster_path}  
            />
          </div>
        </Col>
        <Col lg={8}>
          <h1>{movie.title}</h1>
          <p><span className="fw-bold">Released:</span> {movie.release_date}</p>
          <p><span className="fw-bold">Overview:</span> {movie.overview}</p>
          <p><span className="fw-bold">Genres:</span></p>
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
      </Row>
    </>
	)
}

export default MovieCard
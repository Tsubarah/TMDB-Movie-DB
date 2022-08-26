import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import placeholder from '../assets/images/placeholder_img.webp'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const MovieCard = ({ data }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500/'

  console.log(data)
	return (
    <>
      <Row className="m-auto mb-4 d-flex col-10">
        <Col lg={4} sm={12}>
          <div>
            <img 
              className="img-fluid"
              variant="top" 
              src={BASE_URL + data.poster_path}  
            />
          </div>
        </Col>
        <Col lg={8}>
          <h1>{data.title}</h1>
          <p><span className="fw-bold">Released:</span> {data.release_date}</p>
          <p><span className="fw-bold">Overview:</span> {data.overview}</p>
          <p><span className="fw-bold">Genres:</span></p>
          <div className="genresList d-flex">
            {data?.genres.map(genre => (
              <li 
                className="p-2"
                key={genre.id}
              >
                {genre.name}
              </li>
            ))}
          </div>
        </Col>
      </Row>
      {/* <Card className="col-md-10 col-sm-12 m-auto mb-4">
        <div className="d-flex flex-wrap">
          <Col lg={4} sm={12}>
            <Card.Img
              className="fluid"
              variant="top" 
              src={BASE_URL + data.poster_path} 
            />
          </Col>
          <Col lg={6}>
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>
                <div>
                  <span className="fw-bold">Released:</span>
                   {data.release_date}
                </div>
                <br />
                <div>
                  <span className="d-flex flex-wrap fw-bold">Overview:</span> 
                    {data.overview}
                </div>
                <br />
              </Card.Text>
              <div>
                <span className="fw-bold">Genres:</span>
              </div>
              <div className="genresList d-flex">
                {data?.genres.map(genre => (
                  <li 
                    className="p-2"
                    key={genre.id}
                  >
                    {genre.name}
                  </li>
                ))}
              </div>
            </Card.Body>
          </Col>
        </div>
      </Card> */}

      <Card className="col-10 m-auto d-flex justify-content-center bg-secondary">
        <Col lg={6} className="m-auto">
          <Card.Body className="justify-content-center">
            <ListGroup>
            <span className="text-white"><strong>Actors:</strong></span>
              {data?.credits.cast.map(person => (
                <ListGroup.Item 
                  key={person.id}
                >
                  <div className="d-flex justify-content-between align-items-center">
                      <img 
                        className="cast-image fluid rounded-circle mw-100"
                        alt="" 
                        src={person?.profile_path
                        ? `${BASE_URL}${person.profile_path}`
                        : placeholder} 
                      />
                        <p className="pt-3">{person.name}</p>
                        <Button as={Link} to={`/person/${person.id}`}>Details</Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Col>
      </Card>
    </>
	)
}

export default MovieCard
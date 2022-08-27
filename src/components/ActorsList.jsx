import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/esm/Col'
import placeholder from '../assets/images/placeholder_img.webp'
import { Link } from 'react-router-dom'

const ActorsList = ({ actors }) => {

  const imgUrl = 'https://image.tmdb.org/t/p/w500/'

  // ÄNDRA TILL CARDS OCH INTE EN LISTA AV ACTORS
  return (
    <Card className="actors-list-wrapper col-lg-10 m-auto">
        <Col lg={4}>
          <Card.Body className="justify-content-center">
            <ListGroup>
            <span className="text-white"><strong>Actors:</strong></span>
              {actors?.credits.cast.map((person, i) => (
                <ListGroup.Item
                  className="bg-dark"
                  key={i}
                >
                  <div className="d-flex justify-content-between align-items-center">
                      <img 
                        className="cast-image fluid rounded-circle mw-100"
                        alt="" 
                        src={person?.profile_path
                        ? `${imgUrl}${person.profile_path}`
                        : placeholder} 
                      />

                      <p className="m-auto text-white text-center">{person.name}</p>

                      <Button className="actors-details-btn" as={Link} to={`/person/${person.id}`}>Details</Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Col>
      </Card>
  )
}

export default ActorsList
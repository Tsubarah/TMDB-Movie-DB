import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import placeholder from '../assets/images/placeholder_img.webp'
import { Link } from 'react-router-dom'

const ActorsList = ({ actors }) => {

  const imgUrl = 'https://image.tmdb.org/t/p/w500/'

  return (
    <ListGroup>
      {actors?.credits.cast.map((person, i) => (
        <ListGroup.Item
          className="bg-dark p-2"
          key={i}
        >
          <div className="d-flex justify-content-between align-items-center">
              <img 
                className="cast-image fluid rounded-circle mw-100"
                src={person?.profile_path
                ? `${imgUrl}${person.profile_path}`
                : placeholder} 
              />

              <p className="m-auto text-white text-center">{person.name}</p>

              <Button 
                className="actors-details-btn" 
                as={Link} 
                to={`/person/${person.id}`}
              >
                Details
              </Button>

          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default ActorsList
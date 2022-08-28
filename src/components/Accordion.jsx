import Accordion from 'react-bootstrap/Accordion'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import placeholder from '../assets/images/placeholder_img.webp'
import ActorsList from './ActorsList'

function BasicExample({ data }) {

  const imgUrl = 'https://image.tmdb.org/t/p/w500/'

  console.log(data)

  return (
    <Accordion className="col-lg-4">
      <Accordion.Item eventKey="0">
      <Accordion.Header><strong>Actors:</strong></Accordion.Header>
        <Accordion.Body className="bg-dark p-0">
            <ActorsList actors={data} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;
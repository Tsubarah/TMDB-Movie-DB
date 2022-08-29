import Accordion from 'react-bootstrap/Accordion'
import ActorsList from './ActorsList'

function AccordionComponent ({ data }) {

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

export default AccordionComponent;
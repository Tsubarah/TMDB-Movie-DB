import Card from 'react-bootstrap/Card'

const PersonCard = ({ person }) => {
	return (
		<Card className="mb-4">
			<Card.Body>
				<Card.Title>{person.name}</Card.Title>
				<Card.Text>
					<p>Born: {person.birthday}</p>
					<p>Origin: {person.place_of_birth}</p>
          <p>Work field: {person.known_for_department}</p>
          <p>{person.biography}</p>
				</Card.Text>
				{/* <Button variant="primary">Go somewhere</Button> */}
			</Card.Body>
		</Card>
	)
}

export default PersonCard
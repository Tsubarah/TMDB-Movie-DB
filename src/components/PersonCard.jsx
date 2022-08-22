import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'

const PersonCard = ({ data }) => {
	console.log(data)
	return (
		<Card className="mb-4">
			<Card.Body>
				<Card.Title>{data.name}</Card.Title>
				<Card.Text>
					<div>
						<p>Born: {data.birthday}</p>
						<p>Origin: {data.place_of_birth}</p>
						<p>Work field: {data.known_for_department}</p>
						<p>{data.biography}</p>
					</div>
					<p>Also in:</p>
						<ListGroup>
							{data.credits.cast.map(movie => (
								<ListGroup.Item
									key={movie.id}
									as={Link}
									to={`/movie/${movie.id}`}
								>
									{movie.title}
								</ListGroup.Item>
							))}
						</ListGroup>
				</Card.Text>
				{/* <Button variant="primary">Go somewhere</Button> */}
			</Card.Body>
		</Card>
	)
}

export default PersonCard
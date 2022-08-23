import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const MovieCard = ({ data }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500/'

  console.log(data)
	return (
		<Card className="container mb-4 d-flex flex-row">
			<Card.Body>
				<Card.Title>{data.title}</Card.Title>
				<Card.Text>
					<p><strong>Released:</strong> {data.release_date}</p>
					<p><strong>Overview:</strong> {data.overview}</p>
          <p><strong>Genres:</strong></p>
            <ul>
              {data.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
          <p><strong>Actors:</strong></p>
            <ListGroup>
              {data.credits.cast.map(person => (
                <ListGroup.Item 
                key={person.id}
                as={Link}
                to={`/person/${person.id}`}
                >
                  {person.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
				</Card.Text>
				{/* <Button variant="primary">Go somewhere</Button> */}
			</Card.Body>
      <Card.Img style={{
          height: '50rem', 
          width: '30rem', 
          borderRadius: "8px"
        }} 
        variant="top" 
        src={BASE_URL + data.poster_path} 
      />
		</Card>
	)
}

export default MovieCard
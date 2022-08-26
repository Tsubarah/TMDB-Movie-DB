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
          <span><strong>Released:</strong> {data.release_date}</span>
          <br />
          <span><strong>Overview:</strong> {data.overview}</span>
          <br />
				</Card.Text>
        <span><strong>Genres:</strong></span>
        <div className="genresList d-flex">
          {data.genres.map(genre => (
            <li 
              className="p-2"
              key={genre.id}
            >
              {genre.name}
            </li>
          ))}
        </div>

          <span><strong>Actors:</strong></span>
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
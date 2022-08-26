// import { Link } from 'react-router-dom'
// import ListGroup from 'react-bootstrap/ListGroup'
import placeholder from '../../src/assets/images/placeholder_img.webp'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const PersonCard = ({ person }) => {
	const imgUrl = "https://image.tmdb.org/t/p/original";

	console.log(person)
	
	return (
		<>
			<Row className="pb-5">
				<Col lg={3} md={6} sm={8} xs={10} className="m-auto">
					<div className="img-wrapper">
						<img 
							className="img-fluid" 
							src={person?.profile_path 
								? `${imgUrl}${person?.profile_path}` 
								: placeholder} />
					</div>
				</Col>
				<Col lg={9}>
					<div className="person-info h-100 d-flex flex-column justify-content-between">

						{/* Person name */}
						<div className="title-wrapper">
							<h1 className="mx-2">{person.name}</h1>
						</div>

						<div className="d-flex align-content-center">
							{person?.birthday && (
								<p>
									Born:{" "}
									<span>
										{person?.birthday}

										{person?.place_of_birth && (
											<span>
												{" "}
												in {person?.place_of_birth}
											</span>
										)}
									</span>
								</p>
							)}
						</div>
						<div className="overview-wrapper">
							<h3>Biography:</h3>
							<p>{person.biography}</p>
						</div>
					</div>
				</Col>
			</Row>

			<Row>
				{person?.credits.cast.map(movies => (
					<Col lg={2} md={3} sm={6}>
						<Card className="cast-member mb-3" key={movies.id}>
							<div>
								<Card.Img
									className="cast-img"
									variant="top"
									src={movies?.poster_path
										? `${imgUrl}${movies.poster_path}`
										: placeholder} 
									/>
							</div>
							<Card.Body>
								<Card.Title>{movies.original_title}</Card.Title>
								<Card.Text>{movies.character}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</>
	)
}

export default PersonCard
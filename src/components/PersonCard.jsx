import { Link } from 'react-router-dom'
import placeholder from '../../src/assets/images/placeholder_img.webp'
import moviePlaceholder from '../../src/assets/images/movieImage_placeholder.png'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const PersonCard = ({ person }) => {
	const imgUrl = "https://image.tmdb.org/t/p/original";

	console.log(person)
	
	return (
		<>
			<Row className="pb-5">
				{/* Image of the person */}
				<Col lg={3} md={6} sm={8} xs={12} className="mx-auto">
						<img 
							className="img-fluid mb-4" 
							src={person?.profile_path 
								? `${imgUrl}${person?.profile_path}` 
								: placeholder} 
						/>
				</Col>

				{/* Person info */}
				<Col lg={9}>
					<div className="person-info text-white h-100 d-flex flex-column">

						{/* person name */}
						<div className="title-wrapper">
							<h1>{person.name}</h1>
						</div>
						
						{/* Person birthday and place of birth */}
						<div className="d-flex align-content-center fs-5">
							{person?.birthday && (
								<p>
									Born:{" "}
									<span className="description">
										{person?.birthday}

										{person?.place_of_birth && (
											<span>
												{" "}
												in 
												<span className="description">
													{person?.place_of_birth}
												</span>
											</span>
										)}
									</span>
								</p>
							)}
						</div>

						{/* Person biography */}
						{person.biography  
							? <div>
									<h3>Biography</h3>
									<p className="description fs-5">{person.biography}</p>
								</div>
							: ""
						}
					</div>
				</Col>
			</Row>

			<Row>
				{/* A list of other movies the person been part of */}
				{person?.credits.cast.map((movies, i) => (
					<Col lg={3} md={3} sm={6} key={i}>
						<Card className="cast-movies mb-3">
								<Card.Img
									className="cast-img"
									variant="top"
									src={movies?.poster_path
										? `${imgUrl}${movies.poster_path}`
										: moviePlaceholder} 
									/>
							<Card.Body className="text-center">
								<Card.Title>{movies.original_title}</Card.Title>
								<Card.Text>{movies.character}</Card.Text>
							</Card.Body>
							<div className="p-2 d-flex justify-content-center">
								<Button 
									className="primary-btn w-100"
									as={Link}
									to={`/movie/${movies.id}`}
								>
									Read more
								</Button>
							</div>
						</Card>
					</Col>
				))}
			</Row>
		</>
	)
}

export default PersonCard
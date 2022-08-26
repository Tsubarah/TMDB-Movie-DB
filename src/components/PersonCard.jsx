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

			<Row className="gap-4">
				{person?.credits.cast.map(castMember => (
					// <Col className="mh-100" lg={2} xs={6} key={castMember.id}>
						<Card className="cast-member mb-3 col-2">
							<Card.Img
								className="overflow-hidden"
								variant="top"
								src={castMember?.poster_path
									? `${imgUrl}${castMember.poster_path}`
									: placeholder} 
								/>
							<Card.Body>
								<Card.Title>{castMember.original_title}</Card.Title>
								<Card.Text>{castMember.character}</Card.Text>
							</Card.Body>
						</Card>
					// </Col>
				))}
			</Row>
		</>
	)
}

export default PersonCard
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

const GenreList = ({ data }) => {

  console.log(data)

  return (
    <h1>lol</h1>
    // <ListGroup>
    //   {data.map(genre => (
    //     <ListGroup.Item
    //       action
    //       as={Link}
    //       key={genre.id}
    //       to={`/movie/${genre.id}`}
    //     >
    //       <div className="card-body d-flex justify-content-between">
    //         <h4>{genre.name}</h4>
    //       </div>
    //     </ListGroup.Item>
    //   ))}
    // </ListGroup>
  )
}

export default GenreList
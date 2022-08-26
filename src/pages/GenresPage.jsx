import Container from 'react-bootstrap/Container'
import TMDB from '../services/TMDB'
import { useQuery } from 'react-query'
// import ListGroup from 'react-bootstrap/ListGroup'
// import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
// import GenreList from '../components/GenreList'
import { useSearchParams } from 'react-router-dom';
import MoviesList from '../components/MoviesList';

const GenresPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1, genre_id: "", })
  const page = searchParams.get('page')
  const genre_id = searchParams.get('genre_id')

  const { data: genresData} = useQuery(['all-genres'], TMDB.getAllGenres)
  const { data, error, isError, isLoading, isSuccess } = useQuery(['MoviesByGenres', { page, genre_id }], TMDB.discoverMovies)

  

  console.log(data)

  return (
    <Container className="py-3">
      <h1>Genres</h1>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {genresData?.genres.map(genre => (
            <Dropdown.Item key={genre.id} onClick={() => {setSearchParams({ genre_id: genre.id })}}>{genre.name}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
        {isSuccess && (
          <MoviesList data={data} handlePage={setSearchParams} genre={genre_id} page={page} />
        )}
    </Container>
  )
}

export default GenresPage
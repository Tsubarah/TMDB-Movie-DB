import Container from 'react-bootstrap/Container'
import TMDB from '../services/TMDB'
import { useQuery } from 'react-query'
import GenreList from '../components/GenreList'

const GenresPage = () => {
  const { data, error, isError, isLoading, isSuccess } = useQuery(['all-genres'], TMDB.getAllGenres)

  console.log(data)

  return (
    <Container className="py-3">
      <h1>Genres</h1>

      {/* {data && <MoviesList data={data.results} />} */}
      {data && <GenreList data={data} />}

    </Container>
  )
}

export default GenresPage
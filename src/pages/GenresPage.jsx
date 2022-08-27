import { useSearchParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import MoviesList from '../components/MoviesList';
import LoadingSpinner from '../components/Loading';
import useAllGenres from '../hooks/useAllGenres';
import useGenre from '../hooks/useGenre';
import DropDownList from '../components/DropDownList';

const GenresPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1, genre_id: "", })
  const page = searchParams.get('page')
  const genre_id = searchParams.get('genre_id')

  const { data: genresData } = useAllGenres()

  const { data, error, isError, isLoading, isSuccess } = useGenre({ page, genre_id })

  console.log(data)

  return (
    <Container className="py-3">

      {isLoading && 
        <LoadingSpinner />
      }

      {isError &&
        <Error error={error} />
      }

      {data && (
        <>
          <h1 className="text-center mb-5">
            Choose your desired genre
          </h1>
          
          <div className="d-flex justify-content-center mb-5">
            <DropDownList genresData={genresData} handleGenre={setSearchParams}/>
          </div>
        </>
      )}

      {genre_id && isSuccess && (
        <MoviesList movies={data} handlePage={setSearchParams} genre={genre_id} page={page} />
      )}
    </Container>
  )
}

export default GenresPage
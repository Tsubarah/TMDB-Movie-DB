import TMDB from '../services/TMDB'
import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container'
import MoviesList from '../components/MoviesList';
import LoadingSpinner from '../components/Loading';

const GenresPage = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1, genre_id: "", })
  const page = searchParams.get('page')
  const genre_id = searchParams.get('genre_id')

  const { data: genresData} = useQuery(['all-genres'], TMDB.getAllGenres)
  const { data, error, isError, isLoading, isSuccess } = useQuery(['MoviesByGenres', { page, genre_id }], TMDB.discoverMovies)

  

  console.log(data)

  return (
    <Container className="py-3">

      {isLoading && 
        <LoadingSpinner />
      }

      {data && (
        <>
          <h1 className="text-center text-white mb-5">
            Feel free to choose the genre you wish to watch
          </h1>
          
          <div className="d-flex justify-content-center mb-5">
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                Choose genre
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {genresData?.genres.map(genre => (
                  <Dropdown.Item 
                    key={genre.id} onClick={() => {setSearchParams({ genre_id: genre.id })}}
                  >
                    {genre.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </>
      )}

      {genre_id && isSuccess && (
        <MoviesList data={data} handlePage={setSearchParams} genre={genre_id} page={page} />
      )}
    </Container>
  )
}

export default GenresPage
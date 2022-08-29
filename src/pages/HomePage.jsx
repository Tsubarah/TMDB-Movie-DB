import Container from 'react-bootstrap/Container'
import CarouselGallery from '../components/CarouselGallery'
import usePopularMovies from '../hooks/usePopularMovies'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import useTopMovies from '../hooks/useTopMovies'
import { useSearchParams } from 'react-router-dom'

const HomePage = () => {
	const [searchParams, setSearchParams] = useSearchParams({ page: 1 })

  const page = searchParams.get('page')

	const { data: popularMovies, error, isError, isLoading } = usePopularMovies({ page })

	const { data: nowPlayingMovies } = useNowPlayingMovies({ page })

	const { data: topMovies } = useTopMovies({ page })
	

	return (
		<Container className="py-3">
			<h1>Movie Time!</h1>
			<p className="text-white fs-4 pb-5">Tired of the same old movies? Then you've come to the right place. Here you can find everything between the most recent movies in the Cinema to top rated ones.</p>

			{popularMovies && 
				<>
					<h1 className="text-center pb-3">Popular Movies</h1>
					<CarouselGallery movies={popularMovies} />
				</>
			}

			{nowPlayingMovies &&
				<>
					<h1 className="text-center pb-3">In the Cinema</h1>
					<CarouselGallery movies={nowPlayingMovies} />
				</>
			}

			{nowPlayingMovies &&
				<>
					<h1 className="text-center pb-3">Top rated</h1>
					<CarouselGallery movies={topMovies} />
				</>
			}
		</Container>
	)
}

export default HomePage

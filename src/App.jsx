import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import TopMoviesPage from './pages/TopMoviesPage'
import NowPlayingMoviesPage from './pages/NowPlayingMoviesPage'
import PopularMoviesPage from './pages/PopularMoviesPage'
import GenresPage from './pages/GenresPage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import PersonDetailsPage from './pages/PersonDetailsPage'
import SearchPage from './pages/SearchPage'
import './assets/scss/App.scss'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/search" element={<SearchPage />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/news" element={<NowPlayingMoviesPage />} />
				<Route path="/top-rated" element={<TopMoviesPage />} />
				<Route path="/popular" element={<PopularMoviesPage />} />
				<Route path="/genres" element={<GenresPage />} />
				<Route path="/movie/:id" element={<MovieDetailsPage />} />
				<Route path="/person/:id" element={<PersonDetailsPage />} />
			</Routes>

			<ReactQueryDevtools />
		</div>
	)
}

export default App
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import NewMoviesPage from './pages/NewMoviesPage'
import PopularMoviesPage from './pages/PopularMoviesPage'
import TopMoviesPage from './pages/TopMoviesPage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import CharacterDetailsPage from './pages/CharacterDetailsPage'
// import './App.css';
import './assets/scss/App.scss'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<NotFound />} />
				<Route path="*" element={<NewMoviesPage />} />
				<Route path="*" element={<PopularMoviesPage />} />
				<Route path="*" element={<TopMoviesPage />} />
				<Route path="*" element={<MovieDetailsPage />} />
				<Route path="*" element={<CharacterDetailsPage />} />
			</Routes>
		</div>
	)
}

export default App
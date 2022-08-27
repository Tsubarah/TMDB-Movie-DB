import { useQuery } from "react-query"
import TMDB from "../services/TMDB"

const useNowPlayingMovies = ({ page }) => {
  return useQuery(['cinema-movies', { page }], TMDB.getCinemaMovies)
}

export default useNowPlayingMovies
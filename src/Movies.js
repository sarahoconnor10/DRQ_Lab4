// New movies component to display movie data
import MovieItem from "./MovieItem";

const Movies = (props) => {
    return props.myMovies.map(
        (movie) => {
            return <MovieItem myMovie = {movie} />
        }
         
    );
};

export default Movies;
// New Movies component to target specific movie data
// Import MovieItem
import MovieItem from "./MovieItem";

const Movies = (props) => {
    /*
        - Use map() function to seperate out each movie and return 
          for external use in MovieItem.
    */
    return props.myMovies.map(
        (movie) => {
            return <MovieItem myMovie={movie} />
        }
    );
};

export default Movies;
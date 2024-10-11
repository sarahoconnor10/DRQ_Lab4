// Functional component to be responsible
// for rendering individual movie details

const MovieItem = (props) => {
    return(
        <div>
            <h3>{props.myMovie.Title}</h3>
        </div>
    );
}

export default MovieItem;
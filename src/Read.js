//New component to hold Read content
import Movies
    from "./Movies";
import { useEffect, useState } from "react";
import axios from "axios";

const Read = () => {
    /* 
        - useEffect() ->
            - React hook
            - Ideal for synchronising component with external API's etc.
            - Helps to handle side effects within functional components
        - useState()  ->
            - React hook
            - allows you to add state variables to functional components
        - Axios       ->  
                Promise-based HTTP client used to make requests to a server.
                Allows sending of async HTTP request (.get)
        - Retreiving movie data asynchronously with axios
        - Return this data for external use.
    */
    // const movies = [
    //     {
    //         "Title": "Avengers: Infinity War",
    //         "Year": "2018",
    //         "imdbID": "tt4154756",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //     },
    //     {
    //         "Title": "Captain America: Civil War",
    //         "Year": "2016",
    //         "imdbID": "tt3498820",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    //     },
    //     {
    //         "Title": "World War Z",
    //         "Year": "2013",
    //         "imdbID": "tt0816711",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    //     }
    // ];

    const [movies, setMovies] = useState([]);

    useEffect(
        () => {
            axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
                .then((response) => {
                    console.log(response.data);
                    setMovies(response.data.movies);
                })
                .catch(
                    (error) => {
                        console.log(error)

                    }
                )
        }, []
    );

    return (
        <div>
            <Movies myMovies={movies} />
        </div>
    )
};

export default Read;
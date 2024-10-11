// Functional component to be responsible
// for rendering individual movie details
import Card from 'react-bootstrap/Card';
import { useEffect } from "react";


const MovieItem = (props) => {
    useEffect(() => {
        console.log("Movie Item:", props.mymovie);
  }, [props.mymovie]); // Only run this effect when the mymovie prop changes
    
    return(
        <div>
            <Card>
                <Card.Header>
                    {props.myMovie.Title}
                </Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myMovie.Poster}></img>
                        <footer>{props.myMovie.Year}</footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieItem;
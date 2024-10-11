// Functional component to be responsible
// for rendering individual movie details
import Card from 'react-bootstrap/Card';
import { useEffect } from "react";


const MovieItem = (props) => {
    useEffect(() => {
        console.log("Movie Item:", props.mymovie);
    }, [props.mymovie]); 

    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>
                        {props.myMovie.Title}
                    </Card.Title>
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
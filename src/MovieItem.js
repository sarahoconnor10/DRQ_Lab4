// 
/*
    Functional component to be responsible for rendering 
    individual movie details.

    - Import Card component from Bootstrap for UI
    - Import useEffect from React to manage side effects in 
      function components
 */
import Card from 'react-bootstrap/Card';
import { useEffect } from "react";


const MovieItem = (props) => {
    /*
        useEffect -> 
            - React hook
            - Ideal for synchronising component with external API's etc.
            - Helps to handle side effects within functional components
    */
    useEffect(() => {
        console.log("Movie Item:", props.mymovie);
    }, [props.mymovie]); 

    return (
        /*
            Use Bootstrap Cards to structure the output nicely.
             * blockquote = extended quotation within JSX
        */
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
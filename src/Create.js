//New component to hold Create content
import { useState } from "react";

/*
    - useState()  ->
        - React hook
        - allows you to add state variables to functional components
    - setTitle(), setYear(), setPoster() 
        - sets respective variables from input
*/

const Create = () => {
    const handleSubmit = (e) => {
        e.preventDefault(); //prevents calling multiple times
        console.log(title);
        console.log(year);
        console.log(poster);
    }
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [poster, setPoster] = useState('');

    return (
        <div>
            <h3>Hello from Create</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Add Movie Title</label>
                    <input  type="text" 
                            className = "form-control" 
                            value = {title}
                            onChange = {(e) => { setTitle(e.target.value) }}/>
                </div>
                <div>
                    <label>Add Movie Year</label>
                    <input  type="text" 
                            className = "form-control" 
                            value = {year}
                            onChange = {(e) => { setYear(e.target.value) }}/>
                </div>
                <div>
                    <label>Add Movie Poster</label>
                    <input  type="text" 
                            className = "form-control" 
                            value = {poster}
                            onChange = {(e) => { setPoster(e.target.value) }}/>
                </div>
                <div>
                    <input type="submit" value = "Add Movie"></input>
                </div>

            </form>
        </div>
    );
};

export default Create;
import logo from './logo.svg';
import './App.css';

function App() {
  return (

    /*
      Add hello world title and use Date() to display current time  
    */
    <div className="App">

      <h1>Hello World:)</h1>
      <h2>It is currently {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;

//import all necessary components

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Content from './Content.js'
import NavigationBar from './NavigationBar.js';
import Create from './Create.js';
import Read from './Read.js';
import './App.css';

function App() {
  return (
    /*
      Import NavigationBar and Route to different components
        Home -> routes to <Content />
        Create -> routes to <Create />
        Read -> routes to <Read/> 
                  links to <Movies/> 
                    links to <MovieItem/> which displays bootstrap card 
                    with each movie title, poster, and release year.        
    */
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Content from './Content.js'
import Header from './Header.js'
import Footer from './Footer.js'
import NavigationBar from './NavigationBar.js';
import Create from './Create.js';
import Read from './Read.js';

import './App.css';

function App() {
  return (

    /*
      Import NavigationBar and Route to different components
    */
    <div className="App">
      <Router>
        <NavigationBar />

        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/read" element={<Read />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

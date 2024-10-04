import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Content from './Content.js'
import Header from './Header.js'
import Footer from './Footer.js'
import NavigationBar from './NavigationBar.js';

import './App.css';

function App() {
  return (

    /*
      Add hello world title and use Date() to display current time  
    */
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/home" element={<Content />} />
          <Route path="/read" element={<h1>Read Component</h1>} />
          <Route path="/create" element={<h1>Create Component</h1>} />
        </Routes>
        <Header></Header>
        <Content></Content>
        <Footer />
      </Router>
    </div>

  );
}

export default App;

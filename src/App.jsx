import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import Projects from './components/pages/projects';
import Contact from './components/pages/Contact';
import './app.css'



function App() {
  return (
    <Router basename='react-portfolio'>
      <div className='gridContainer'>
        <div>
          <NavTabs/>
        </div>
        <div className='main-pages'>
          <Routes >
            {/* Define routes using the Route component to render different page components at different paths */}
            {/* Define a default route that will render the Home component */}
            <Route path="/" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            {/* Define a route that will have descendant routes */}
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      </Router>
  );
}


export default App;


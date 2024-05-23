import './App.css';
import React, { useState } from 'react';
import Img1 from './Assets/images.png';
import './Components/All_Style.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Companies from './Components/Placement';
import ImageSlider from './Components/ImageSlider';
import Stats from './Components/Stats';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './Components/About';

import CardSlider from './Components/CardSlider';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const cards = [
    <div className="card-content"><img src={Img1} alt=''></img></div>,
    <div className="card-content"><img src={Img1} alt=''></img></div>,
    <div className="card-content"><img src={Img1} alt=''></img></div>,
  ];
  
  return (
    <div className="App">
      <Router>
        <div className="nav" style={{ display: showNavbar ? 'flex' : 'none' }}>
          <div>
            <Link to="/"><img src={Img1} alt='Logo' /></Link>
          </div>
          <div>
            <Link className='Ancher' to="/">Home</Link>
            <Link className='Ancher' to="/programs">Programs</Link>
            <Link className='Ancher' to="/admissions">Admissions</Link>
            <Link className='Ancher' to="/testimonial">Testimonial</Link>
            <Link className='Ancher' to="/about">About</Link>
          </div>
          <Link to="/apply"><button id="register">Apply Now</button></Link>
        </div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<div>Programs Page</div>} />
          <Route path="/admissions" element={<div>Admissions Page</div>} />
          <Route path="/testimonial" element={<div>Testimonial Page</div>} />
          <Route path="/about" element={<About/>} />
          <Route path="/apply" element={<div>Apply Now Page</div>} />
        </Routes>
      </Router>
      <hr />
      <div>
        <br /><br /><br /><br /><br /><br /><br /><br />
      </div>
      <h1 style={{ fontFamily: "Times-New-Roman", fontSize: "4.5rem" }}>Archer Foundation</h1>
      <hr />
      <br />
      <ImageSlider />
      <hr />
      <br /><br />
      <Stats />
      <hr />
      <br /><br />
      <Companies/>
      <hr />
      <br /><br />
      <CardSlider cards={cards} />
      <hr />
      <br /><br />
      <Footer />
    </div>
  );
}

export default App;

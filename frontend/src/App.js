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
import TestimonialPage from './Components/TestimonialPage';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  
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
            <Link className='Ancher' to="/testimonialpage">Testimonial</Link>
            <Link className='Ancher' to="/about">About</Link>
          </div>
          <Link to="/apply"><button id="register">Apply Now</button></Link>
        </div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<div>Programs Page</div>} />
          <Route path="/admissions" element={<div>Admissions Page</div>} />
          <Route path="/testimonialpage" element={<TestimonialPage/>} />
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
      <Footer />
    </div>
  );
}

export default App;

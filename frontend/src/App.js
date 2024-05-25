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
import Type from './Components/Type';
import RegistrationForm from './Components/RegistrationForm';
import Admission from './Components/Admission';
import Program from './Components/Program';

function App() {
  const [showNavbar] = useState(true);

  return (
    <div className="App">
      <Router>
        <div className="nav" style={{ display: showNavbar ? 'flex' : 'none' }}>
          <div>
            <Link to="/"><img src={Img1} alt='Logo' /></Link>
          </div>
          <div>
            <Link className='Ancher' to="/">Home</Link>
            <Link className='Ancher' to="/program">Programs</Link>
            <Link className='Ancher' to="/admission">Admissions</Link>
            <Link className='Ancher' to="/testimonialpage">Testimonial</Link>
            <Link className='Ancher' to="/about">About</Link>
          </div>
          <Link to="/registrationform"><button id="register">Apply Now</button></Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Program/>} />
          <Route path="/admissions" element={<Admission/>} />
          <Route path="/testimonialpage" element={<TestimonialPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/registrationform" element={<main>
            <RegistrationForm />
          </main>} />
        </Routes>
      </Router>
      <div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
      
      <h1 className='Heading'>Archer Foundation</h1>
      <div className='type'>
        <Type />
      </div>
      <hr />
      <br />
      <ImageSlider />
      <hr />
      <br /><br />
      <Stats />
      <hr />
      <br /><br />
      <Companies />
      <hr />
      <br /><br />
      <Footer />
    </div>
  );
}

export default App;

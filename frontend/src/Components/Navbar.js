import React, { useState } from 'react';
import './All_Style.css';

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true); // State variable to track navbar visibility

    return (
        <div className="nav" style={{ display: showNavbar ? 'flex' : 'none' }}>
            <div>
                <a href="index.html"><h1>Archer</h1></a>
            </div>

            <div>
                <a href="index.html">Home</a>
                <a href="index.html">Programs</a>
                <a href="./Amol/courses.html" id="course">Courses</a>
                <a href="./Jahir/register.html">Admissions</a>
                <a href="Ashish/testimonial.html">Testimonial</a>
                <a href="Ashish/testimonial.html">About</a>
            </div>

            <a href="Jahir/login.html"><button id="register">Registration</button></a>
        </div>
    )   
}

export default Navbar;

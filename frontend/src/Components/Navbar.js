import React, { useState } from 'react';
import './All_Style.css';
import Img1 from '../Assets/images.png';

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true); // State variable to track navbar visibility

    return (
        <div className="nav" style={{ display: showNavbar ? 'flex' : 'none' }}>
            <div>
                <a href="index.html"><img src={Img1} alt='Logo'></img></a>
            </div>

            <div>
                <a className='Ancher' href="index.html">Home</a>
                <a className='Ancher' href="index.html">Programs</a>
                <a className='Ancher' href="register.html">Admissions</a>
                <a className='Ancher' href="Ashish/testimonial.html">Testimonial</a>
                <a className='Ancher' href="about.html">About</a>

                <br />
            </div>

            <a href="Jahir/login.html"><button id="register">Apply Now</button></a>
        </div>
    )   
}

export default Navbar;

// import React, { useState } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import { Link } from "react-router-dom";
// import { ImBlog } from "react-icons/im";
// import {
//   AiOutlineHome,
//   AiOutlineFundProjectionScreen,
//   AiOutlineUser,
// } from "react-icons/ai";
// import { CgFileDocument } from "react-icons/cg";

// function NAVBAR() {
//   const [expand, updateExpanded] = useState(false);
//   const [navColour, updateNavbar] = useState(false);

//   function scrollHandler() {
//     if (window.scrollY >= 20) {
//       updateNavbar(true);
//     } else {
//       updateNavbar(false);
//     }
//   }

//   window.addEventListener("scroll", scrollHandler);

//   return (
//     <Navbar
//       expanded={expand}
//       fixed="top"
//       expand="md"
//       className={navColour ? "sticky" : "navbar"}
//     >
//       <Container>
//         <Navbar.Brand href="https://code-asif.github.io/MyPortfolio/" className="d-flex">
//           &lt; Asif Alam /&gt;
//         </Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="responsive-navbar-nav"
//           onClick={() => {
//             updateExpanded(expand ? false : "expanded");
//           }}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ms-auto" defaultActiveKey="#home">
//             <Nav.Item>
//               <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
//                 <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/About"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <AiOutlineUser style={{ marginBottom: "2px" }} /> About
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/project"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <AiOutlineFundProjectionScreen
//                   style={{ marginBottom: "2px" }}
//                 />{" "}
//                 Projects
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/resume"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 href="https://www.credly.com/users/asif-alam.9dafc610"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <ImBlog style={{ marginBottom: "2px" }} /> Certifications
//               </Nav.Link>
//             </Nav.Item>

//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NAVBAR;

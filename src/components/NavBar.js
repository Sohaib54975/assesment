import React, { useState } from "react";
import logo from "../images/logo.png";
import "../styles/navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const [isVisible, setIsVisiblle] = useState(false);

  const toggllevisibility = () => {
    setIsVisiblle(!isVisible);
  };

  return (
    <>
      <div className="nav_bar">
        <div className="logo">
          <img src={logo} alt="Galaxy Logo" />
        </div>
        <div className="nav_pages">
          <ul>
            <li>
              <a onClick={() => scrollToSection("how-it-works")}>
                How it works
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection("why-galaxy")}>Why Galaxy</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("features")}>Features</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("contact-us")}>Contact Us</a>
            </li>
            <li className="get_app">
              <a onClick={() => scrollToSection("get-app")}>Get App</a>
            </li>
          </ul>
        </div>
        <div
          className="hamburger"
          onClick={toggllevisibility}
        >
          <RxHamburgerMenu size="27" />
        </div>
      </div>
      {/* <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
    
            <Navbar.Brand href="#home">
              <img src={logo} alt="Galaxy Logo" />
            </Navbar.Brand>
        
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
         
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="mx-3" onClick={() => scrollToSection("how-it-works")}>
                  How it works
                </Nav.Link>
                <Nav.Link className="mx-3" onClick={() => scrollToSection("why-galaxy")}>
                  Why Galaxy
                </Nav.Link>
                <Nav.Link className="mx-3"  onClick={() => scrollToSection("features")}>
                  Features
                </Nav.Link>
                <Nav.Link className="mx-3" onClick={() => scrollToSection("contact-us")}>
                  Contact Us
                </Nav.Link>
                <Nav.Link  onClick={() => scrollToSection("get-app")}>
                  Get Ap
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
      
        </Container>
      </Navbar> */}
    </>
  );
}

export default NavBar;

import React, { useState } from "react";
import logo from "../images/logo.png";
import "../styles/navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
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
  const [isHamberger, setIsHamberger] = useState(true);

  const toggllevisibility = () => {
    setIsHamberger(!isHamberger);
  };

  return (
    <>
      <div className="nav_wrapper">
        <div className="nav_bar ">
          <div className="logo">
            <img src={logo} alt="Galaxy Logo" />
          </div>
          <div className="nav_pages1">
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
          <div className="hamburger">
            {isHamberger ? (
              <RxHamburgerMenu onClick={toggllevisibility} size="27" />
            ) : (
              <RxCross2 onClick={toggllevisibility} size="27" />
            )}
          </div>
        </div>
      </div>

      <div
        className="nav_bar_resp"
        style={!isHamberger ? { display: "block" } : { display: "none" }}
      >
        <div className="logo">
          <img src={logo} alt="Galaxy Logo" />
        </div>
        <div className="menue_hd">
          <h3>Menu</h3>
        </div>
        <div className="nav_pages">
          <ul>
            <li>
              <a onClick={() => scrollToSection("how-it-works")}>
                How it works
              </a>
            </li>
            <hr className="hrz" />
            <li>
              <a onClick={() => scrollToSection("why-galaxy")}>Why Galaxy</a>
            </li>
            <hr className="hrz" />
            <li>
              <a onClick={() => scrollToSection("features")}>Features</a>
            </li>
            <hr className="hrz" />
            <li>
              <a onClick={() => scrollToSection("contact-us")}>Contact Us</a>
            </li>
            <hr className="hrz" />
            <li className="get_app">
              <a onClick={() => scrollToSection("get-app")}>Get App</a>
            </li>
            <hr className="hrz" />
            <li className="get_app">
              <a onClick={() => scrollToSection("get-app")}>Social App</a>
            </li>
          </ul>
        </div>
        <div className="nav_social_icons">
          <i className="icon fa-brands fa-facebook-f"></i>
          <i className="icon fa-brands fa-linkedin-in"></i>
          <i className="icon fa-brands fa-pinterest-p"></i>
          <i className="icon fa-brands fa-twitter"></i>
        </div>
      </div>

      {/* <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <div className="logo">
            <Navbar.Brand href="#home">
              <img src={logo} alt="Galaxy Logo" />
            </Navbar.Brand>
          </div>
          <div className="pages">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  className="mx-3"
                  onClick={() => scrollToSection("how-it-works")}
                >
                  How it works
                </Nav.Link>
                <Nav.Link
                  className="mx-3"
                  onClick={() => scrollToSection("why-galaxy")}
                >
                  Why Galaxy
                </Nav.Link>
                <Nav.Link
                  className="mx-3"
                  onClick={() => scrollToSection("features")}
                >
                  Features
                </Nav.Link>
                <Nav.Link
                  className="mx-3"
                  onClick={() => scrollToSection("contact-us")}
                >
                  Contact Us
                </Nav.Link>
                <Nav.Link onClick={() => scrollToSection("get-app")}>
                  Get Ap
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar> */}
    </>
  );
}

export default NavBar;

import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/Logo.png";
import Logo1 from "../../../Assets/Logo1.jpg"
import { FaMoon, FaSun } from "react-icons/fa";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { ToggleThemeContext } from "../../../Contexts/ThemeContext/ThemeContext";

const Header = () => {

  const {theme, setTheme} = useContext(ToggleThemeContext);
  

  return (
    <div>
      <Navbar
      collapseOnSelect
      expand="lg"
      className="shadow-lg"
      
    >
      <Container>
        {/* Logo */}
        <Link to="/" className="fw-bold text-decoration-none fs-5">
          {
            theme?
            <Image
            src={Logo}
            width="50px"
            style={{transform:'scale(1.5)'}}
          ></Image>
          :
          <Image
          src={Logo1}
          width="45px"
          className="rounded"
          ></Image>
          }
          <span className={theme? 'text-dark' : 'text-light ms-2'}> L E A D E R</span>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* pages */}
          <Nav className="mx-auto gap-4">
            <Link className="text-decoration-none text-dark" to="/courses">
              <Button variant="light">Courses</Button>
            </Link>
            <Link className="text-decoration-none text-dark" to="/faq">
              <Button className="px-4" variant="light">
                FAQ
              </Button>
            </Link>
            <Link className="text-decoration-none text-dark" to="/blog">
              <Button className="px-4" variant="light">
                Blog
              </Button>
            </Link>
          </Nav>

          {/* user */}
          <Nav className="align-items-center gap-3 my-3 my-lg-0 flex-row-reverse flex-lg-row justify-content-around">
            <div>
            
            {
              theme? 
              <FaSun onClick={() => {setTheme(false)}} role='button' className="fs-5 "/>
              :
              <FaMoon onClick={() => {setTheme(true)}} role='button' className="fs-5 "/>
            }
            </div>
            <ButtonGroup>
              <Link className="text-decoration-none me-3" to="/login">
                <Button variant={theme?'outline-dark':'outline-light'} >Login</Button>
              </Link>
              <Link className="text-decoration-none" to="/register">
                <Button variant={theme?'outline-dark':'outline-light'}>Register</Button>
              </Link>
            </ButtonGroup>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {
      !theme && <hr className="my-0"/>
    }
    </div>
    
  );
};

export default Header;


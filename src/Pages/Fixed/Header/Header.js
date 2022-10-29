import React from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/Logo.png";
import { FaMoon, FaSun } from "react-icons/fa";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      className="shadow-lg"
      variant="light"
    >
      <Container>
        {/* Logo */}
        <Link to="/" className="fw-bold text-decoration-none text-dark fs-5">
          <Image
            src={Logo}
            width="50px"
            style={{ transform: "scale(1.5)" }}
          ></Image>
          <span> L E A D E R</span>
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
          <Nav className="align-items-center gap-3">
            <FaMoon role='button' className="fs-5 "/>
            <FaSun role='button' className="fs-5 "/>
            <ButtonGroup>
              <Link className="text-decoration-none me-3" to="/login">
                <Button variant="outline-dark">Login</Button>
              </Link>
              <Link className="text-decoration-none" to="/register">
                <Button variant="outline-dark">Register</Button>
              </Link>
            </ButtonGroup>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

import React from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/Logo.png";

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
          <Nav className="mx-auto gap-5">
            <Link className="text-decoration-none text-dark" to="/courses">
              <Button variant="light">Courses</Button>
            </Link>
            <Link className="text-decoration-none text-dark" to="/faq">
            <Button className="px-4" variant="light">FAQ</Button>
            </Link>
            <Link className="text-decoration-none text-dark" to="/blog">
            <Button className="px-4" variant="light">Blog</Button>
            </Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

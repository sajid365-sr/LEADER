
import React, { useContext } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Logo.png";
import logo1 from "../../../Assets/Logo1.jpg";
import { ToggleThemeContext } from "../../../Contexts/ThemeContext/ThemeContext";
import './Footer.css'

const Footer = () => {
  const { theme } = useContext(ToggleThemeContext);

  return (
    <div className="bg-secondary bg-opacity-25 py-5">
      <Container>
        <Row>
          <Col>
            {theme ? (
              <Image
                src={logo}
                width="50px"
                style={{ transform: "scale(1.5)" }}
              ></Image>
            ) : (
              <Image src={logo1} width="55px" className="rounded"></Image>
            )}
            <span className={theme ? "text-dark fw-semibold" : "text-light ms-3 fw-semibold"}>
              L E A D E R
            </span>
            <p className="mt-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              rerum excepturi praesentium saepe tempora vel, ducimus corporis
              doloribus cumque? Debitis quo id est. Doloremque nihil adipisci
              ipsam ullam accusamus veniam quasi. Ea totam placeat aperiam
              dolorum inventore expedita obcaecati itaque!
            </p>
          </Col>

          <Col className="px-5">
          <Link className={`footerLink ${theme? 'text-dark border-dark': 'text-light'}`} to="/courses">
              Courses
            </Link>
            <Link className={`footerLink ${theme? 'text-dark border-dark': 'text-light'}`}to="/faq">
                FAQ
            </Link>
            <Link className={`footerLink ${theme? 'text-dark border-dark': 'text-light'}`}to="/blog">
                Blog
            </Link>
          </Col>

          <Col>
          <p>Need Help?</p>
          <p><Link to='/terms'>Terms of Service</Link></p>
          
              <Link className="text-decoration-none me-3" to="/login">
                Login
              </Link>
              <Link className="text-decoration-none" to="/register">
                Register
              </Link>
           
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;


import React, { useContext } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Logo.png";
import logo1 from "../../../Assets/Logo1.jpg";
import { ToggleThemeContext } from "../../../Contexts/ThemeContext/ThemeContext";
import './Footer.css';
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  const { theme } = useContext(ToggleThemeContext);

  return (
    <div className={`py-5 ${theme? "bg-secondary bg-opacity-25" : "bg-black"}`}>
      {
        !theme && <hr className="mb-5"/>
      }
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
            If you want to be a better person and also a successful person then it's high time to change your habits. Stay with us for more life-changing solutions.
            </p>
            <div className="d-flex gap-2 fs-3">
            <Link className={theme? 'text-secondary' : 'text-light'}><FaFacebookSquare/></Link>
            <Link className={theme? 'text-secondary' : 'text-light'}><FaLinkedin/></Link>
            <Link className={theme? 'text-secondary' : 'text-light'}><FaTwitterSquare/></Link>
            <Link className={theme? 'text-secondary' : 'text-light'}><FaInstagramSquare/></Link>
            </div>
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

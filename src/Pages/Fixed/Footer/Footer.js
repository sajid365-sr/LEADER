
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
    <div className={`pt-5 pb-2 ${theme? "bg-secondary bg-opacity-25" : "bg-dark"}`}>
      {
        !theme && <hr className="mb-5"/>
      }
      <Container>
        <Row>
          <Col lg='4' className="text-center text-lg-start">
            <div className="d-flex d-lg-block flex-column align-items-center gap-3">
            {theme ? (
              <Image
                src={logo}
                width="50px"
                style={{ transform: "scale(1.5)" }}
              ></Image>
            ) : (
              <Image src={logo1} width="55px" className="rounded"></Image>
            )}
            <span className={theme ? "text-dark fw-semibold" : "text-light ms-0 ms-lg-3 fw-semibold"}>
              L E A D E R
            </span>
            </div>
            <p className="mt-3">
            If you want to be a better person and also a successful person then it's high time to change your habits. Stay with us for more life-changing solutions.
            </p>
            <div className="d-flex gap-2 fs-3 justify-content-center justify-content-lg-start mb-5">
            <Link className={theme? 'text-secondary' : 'text-light'}><FaFacebookSquare/></Link>
            <Link className={theme? 'text-secondary' : 'text-light'}><FaLinkedin/></Link>
            <Link className={theme? 'text-secondary' : 'text-light'}><FaTwitterSquare/></Link>
            <Link className={theme? 'text-secondary' : 'text-light'}><FaInstagramSquare/></Link>
            </div>
          </Col>

          <Col lg='4' className="px-5">
          <Link className={`footerLink ${theme? 'text-dark border-dark': 'text-light'}`} to="/home">
              Home
            </Link>
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

          <Col lg='4' className="d-none d-lg-block">
          <p>Need Help?</p>
          <p><Link className={!theme && "text-info"} to='/terms'>Terms of Service</Link></p>
          
              <Link className={`text-decoration-none me-3 ${!theme && "text-info"}`} to="/login">
                Login
              </Link>
              <Link className={`text-decoration-none ${!theme && "text-info"}`} to="/register">
                Register
              </Link>
           
          </Col>
        </Row>
        <Row className="text-center mt-4 copyright">
          <p>&copy; 2022, All right reserved by Leader.inc</p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

import React, { useContext } from "react";
import { Image, OverlayTrigger } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/Logo.png";
import Logo1 from "../../../Assets/Logo1.jpg"
import { FaMoon, FaSun, FaUserAlt } from "react-icons/fa";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { ToggleThemeContext } from "../../../Contexts/ThemeContext/ThemeContext";
import { AuthContext } from "../../../Contexts/UserContext/UserContext";
import Tooltip from 'react-bootstrap/Tooltip';

const Header = () => {

  const {theme, setTheme} = useContext(ToggleThemeContext);
  const {user, logOut} = useContext(AuthContext);

// Tooltip
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {user.displayName}
    </Tooltip>
  );
  
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar
      collapseOnSelect
      expand="lg"
      className="shadow-lg py-2"
      
    >
      <Container>
        {/* Logo */}
        <Link to="/home" className="fw-bold text-decoration-none fs-5">
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
            <Link className="text-decoration-none text-dark" to="/home">
              <Button variant="light">Home</Button>
            </Link>
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
            
            {/* Theme toggle icons */}
            {
              theme? 
              <span  onClick={() => {setTheme(false)}} role='button' className={`${theme? 'border border-2 p-2 rounded rounded-circle':''}`}>
                <FaSun style={{fontSize:'20px'}} className="mb-1"/>
              </span>
              :
              <span onClick={() => {setTheme(true)}} role='button' className={`${theme? '':'border border-2 p-2 rounded rounded-circle'}`}>
                <FaMoon style={{fontSize:'20px'}} className="mb-1" />
              </span>
            }
            </div>

            {/* user name */}
            <>
              {user?.uid ? (
                <>
                  <span>{user?.displayName? user.displayName : 'Unknown'}</span>
                  <Button
                    className="ms-3"
                    onClick={handleLogOut}
                    variant={theme?'outline-dark':'outline-light'}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                
                <>
                  <ButtonGroup>
              <Link className="text-decoration-none me-3" to="/login">
                <Button variant={theme?'outline-dark':'outline-light'} >Login</Button>
              </Link>
              <Link className="text-decoration-none" to="/register">
                <Button variant={theme?'outline-dark':'outline-light'}>Register</Button>
              </Link>
            </ButtonGroup>
                </>
              )}
            </>

            {/* user photo */}
            
            <Link className="ms-3" to='/profile'>
              {user?.photoURL ? (
                <>
                <OverlayTrigger
                placement="bottom"
                delay={{ show: 100, hide: 400 }}
                overlay={renderTooltip}
                >

                  <Image
                    src={user.photoURL}
                    roundedCircle
                    style={{ height: "35px" }}
                  ></Image>

                </OverlayTrigger>
                </>
              ) : 
              user?.uid &&
                (
                <>
                  <FaUserAlt style={{ transform: "scale(1.3)" }} />
                </>
              )}
            </Link>
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


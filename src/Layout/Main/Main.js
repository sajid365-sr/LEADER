import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { themeColor } from "../../Contexts/ThemeContext/Theme";
import { ToggleThemeContext } from "../../Contexts/ThemeContext/ThemeContext";
import AsideLeft from "../../Pages/Fixed/AsideLeft/AsideLeft";
import Footer from "../../Pages/Fixed/Footer/Footer";
import Header from "../../Pages/Fixed/Header/Header";

const Main = () => {

  const {theme} = useContext(ToggleThemeContext);
  const {light,dark} = themeColor;
  console.log(light,dark)
  

  return (
    <div style={theme? {backgroundColor:`${light.background}`,color:`${light.foreground}`}: {backgroundColor:`${dark.background}`,color:`${dark.foreground}`}}>
      <Header></Header>
      <Container>
        <Row>
          {/* left */}
          <Col lg="4">
            <AsideLeft></AsideLeft>
          </Col>

          {/* right */}
          <Col lg="8">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;

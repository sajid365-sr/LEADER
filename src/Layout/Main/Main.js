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
      <Container className="my-5">
        <Row>
          {/* left */}
          <Col  className={!theme && "border-end border-2"} lg="3">
            <AsideLeft></AsideLeft>
          </Col>

          {/* right */}
          <Col lg="9">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;

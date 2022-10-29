import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import AsideLeft from "../../Pages/Fixed/AsideLeft/AsideLeft";
import Footer from "../../Pages/Fixed/Footer/Footer";
import Header from "../../Pages/Fixed/Header/Header";

const Main = () => {
  return (
    <>
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
    </>
  );
};

export default Main;

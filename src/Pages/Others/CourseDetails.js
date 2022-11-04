import React, { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import "./CourseDetails.css";
import { FaCheck, FaDownload } from "react-icons/fa";
import { ToggleThemeContext } from "../../Contexts/ThemeContext/ThemeContext";
import { Document, Page } from "react-pdf";

const CourseDetails = () => {
  const { theme } = useContext(ToggleThemeContext);
  const { topic, details, duration, willLearn, image, price, id } =
    useLoaderData();

  return (
    <div
      className="mx-auto bgImage rounded position-relative border"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8)0%, rgba(0, 0, 0, 0.4)100%), url(${image})`,
      }}
    >
      <FaDownload
        className="position-absolute end-0 me-4 mt-3"
        role="button"
      ></FaDownload>

      <h2 className="text-center text-light py-3 mb-0 text-decoration-underline">
        {topic}
      </h2>
      <Row className="py-5 px-3">
        <Col lg="7">
          <p className="text-white text-opacity-75 bg-secondary bg-opacity-50 p-3 rounded lead fw-semibold">
            <span className="fs-2 text-warning">"</span>
            {details}
            <span className="fs-2 text-warning">"</span>
          </p>
          <p className="text-white fs-5">
            Course Duration:{" "}
            <span className="text-warning fs-3 fw-bold">{duration}</span>
          </p>
        </Col>

        <Col lg="5">
          <h3 className="text-warning">You will learn:</h3>
          {willLearn.map((point) => (
            <p className="fs-5 text-light">
              <FaCheck className="me-2 text-warning"></FaCheck>
              {point}
            </p>
          ))}

          <Link to={`/courses/checkout/${id}`}>
          <button className="btn btn-primary w-100 fw-semibold fs-5 mt-5">Get Premium Access</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default CourseDetails;

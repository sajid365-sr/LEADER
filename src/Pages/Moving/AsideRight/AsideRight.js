import React from "react";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Course from "../../Others/Course";

const AsideRight = () => {
  const courses = useLoaderData();

  return (
    <Row>
      {courses.map((course) => (
        <Course key={course.id} cData={course}></Course>
      ))}
    </Row>
  );
};

export default AsideRight;

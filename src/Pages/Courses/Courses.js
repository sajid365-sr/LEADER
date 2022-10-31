import React from "react";
import { useLoaderData } from "react-router-dom";
import { Row } from "react-bootstrap";
import Course from "../Others/Course";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <Row>
      {courses.map((course) => (
        <Course key={course.id} cData={course}></Course>
      ))}
    </Row>
  );
};

export default Courses;

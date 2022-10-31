import React from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Course = ({ cData }) => {
  const { topic, details, enrolled, image, instructor, price, ratings, id } =
    cData;
  return (
    <Col lg='4'>
      <Card className="mb-5">
        <Card.Body>
          <Card.Img variant="top" src={image} style={{ width: "100%" }} />
          <Card.Title>{topic}</Card.Title>
          <Card.Text>
            {details.length > 100 ? (
              <>
                {details.slice(0, 100) + "..."}
                <Link to={`/course/details/${id}`}>Read More</Link>
              </>
            ) : (
              details
            )}
            <div>
              <p className="mt-1"><span className="fw-semibold">Instructor: </span>{instructor}</p>
            </div>

            <div className="d-flex justify-content-between mt-3 mb-2">
              <span className="fw-semibold">Ratings: {ratings}</span>
              <span className="fw-semibold">Enrolled: {enrolled}</span>
            </div>
            <p className="fw-semibold fs-4">{price}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Course;

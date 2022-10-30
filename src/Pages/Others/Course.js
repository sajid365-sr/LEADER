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
          <Card.Title>{topic}</Card.Title>
          <Card.Img variant="top" src={image} style={{ width: "100%" }} />
          <Card.Text>
            {details.length > 250 ? (
              <>
                {details.slice(0, 250) + "..."}
                <Link to={`/news/${id}`}>Read More</Link>
              </>
            ) : (
              details
            )}
            <div>
              <p className="mb-0">{instructor}</p>
            </div>

            <div>
              <span>Ratings: {ratings}</span>
              <span>Enrolled: {enrolled}</span>
            </div>
            <p>{price}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Course;

import React, { useContext } from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ToggleThemeContext } from "../../Contexts/ThemeContext/ThemeContext";

const Course = ({ cData }) => {
  const {theme} = useContext(ToggleThemeContext);
  const { topic, quote, enrolled, image, instructor, price, ratings, id } =
    cData;
  return (
    <Col lg="4" className="g-3">
      <Card className="mb-5 h-100">
        <Card.Body className={`position-relative p-0 ${!theme && 'text-light bg-dark'}`}>
          <Card.Img variant="top" src={image} style={{ width: "100%" }} />
          <Card.Title className={`ps-3 pt-1 ${!theme && "text-info"}`}>{topic}</Card.Title>
          <Card.Text className="px-3 pb-5">
            {/* {details.length > 100 ? (
              <>
                {details.slice(0, 100) + "..."}
                <Link to={`/course/details/${id}`}>Read More</Link>
              </>
            ) : (
              details
            )} */}
            <div>
            <p className="mb-1">{quote}</p>
            <p className="mt-1">
              <span className="fw-semibold">Instructor: </span>
              {instructor}
            </p>
            </div>

            <div className="position-absolute bottom-0 w-75">
              <div className="d-flex justify-content-between mt-3">
                <span className="fw-semibold">Ratings: {ratings}</span>
                <span className="fw-semibold">Enrolled: {enrolled}</span>
              </div>
              <p className="fw-semibold fs-4 mb-2 text-warning">{price}</p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Course;

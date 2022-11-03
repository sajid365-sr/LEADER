
import React from "react";
import { useLoaderData } from "react-router-dom";
import './CourseDetails.css';


const CourseDetails = () => {
  const { topic, details, enrolled, image, instructor, price, ratings, id } =
    useLoaderData();
  console.log(image)
  return (
    <div className="mx-auto bgImage" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9)0%, rgba(0, 0, 0, 0.2)100%), url(${image})` }}>

      <h2 className="text-center py-3 mb-0 text-decoration-underline">{topic}</h2>
      
    </div>
  );
};

export default CourseDetails;

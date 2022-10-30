import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToggleThemeContext } from "../../../Contexts/ThemeContext/ThemeContext";

const AsideLeft = () => {
  const { theme } = useContext(ToggleThemeContext);

  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);
  console.log(course);
  return (
    <div>
      <h2>Total Number of course is: {course.length}</h2>

      {
      course.map((one) => (
        <p key={one.id}>
          <Link to={`course/${one.id}`} >
            {one.topic}
          </Link>
        </p>
      ))
      }
    </div>
  );
};

export default AsideLeft;

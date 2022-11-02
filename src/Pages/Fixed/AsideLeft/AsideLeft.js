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

  
  return (
    <div>
      
      {course.map((one) => (
        <Link
          className={`d-block mb-4 text-decoration-none`}
          to={`/courses/${one.id}`}
        >
          <button
            style={{ width: "90%" }}
            className={`fw-semibold border-0 px-3 py-2 ${
              theme ? "text-dark" : "text-info bg-dark"
            }`}
          >
            {one.topic}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default AsideLeft;

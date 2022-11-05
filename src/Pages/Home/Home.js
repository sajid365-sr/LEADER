import React from "react";
import "./Home.css";

const Home = () => {
  
  return (
    <div className="main-container">
      <div className="secondary-container">
        <h1 className="text-center">We Rank the Best Courses on the Web</h1>
        <p className="text-center mt-3 text-light fw-semibold">
          “The more that you read, the more things you will know. The more that
          you learn, the more places you’ll go.”
        </p>

        <div className="input-wrap d-flex justify-content-between my-5">
          <input type="text" placeholder="Search Course" className="w-100" />
          <button className="btn btn-primary rounded-0 w-50">Search</button>
        </div>
        <div className="d-flex flex-column align-items-center">
          <p>
            <button className="btn btn-outline-info rounded-0">
              Time Management
            </button>
          </p>
          <p className="d-flex align-items-center gap-3">
            <button className="btn btn-outline-info rounded-0">
              Money Management
            </button>
            <button className="btn btn-outline-info rounded-0">
              Personal Life
            </button>
            <button className="btn btn-outline-info rounded-0">
              How to learn anything
            </button>
          </p>
          <button className="btn btn-outline-info rounded-0">
            Career Guideline
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

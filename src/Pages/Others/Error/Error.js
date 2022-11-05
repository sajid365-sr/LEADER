
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {

    const feedback = ()=>{
        toast.success('Thanks for your feedback. We will solve it as soon as possible.');
    }

    return (
        <div className="main">
      <div className="content">
        <h1>404</h1>
        <h2>OPPS! PAGE NOT FOUND</h2>
        <p>
          Sorry, the page you are looking for doesn't exist. If you think
          something is wrong, report a problem.
        </p>
        <div className="btn">
          <Link to="/home">
            <button>RETURN HOME</button>
          </Link>

          <button onClick={feedback}>REPORT PROBLEM</button>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
        </div>
      </div>
    </div>
    );
};

export default Error;
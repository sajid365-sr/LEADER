
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const cDetails = useLoaderData();
    console.log(cDetails)
    return (
        <div>
            <h2>This is Course Details page</h2>
        </div>
    );
};

export default CourseDetails;
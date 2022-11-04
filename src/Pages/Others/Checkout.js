
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            This is checkout page.
        </div>
    );
};

export default Checkout;
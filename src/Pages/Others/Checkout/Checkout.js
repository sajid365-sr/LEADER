
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { ToggleThemeContext } from '../../../Contexts/ThemeContext/ThemeContext';
import './Checkout.css'


const Checkout = () => {
    const {id, price, topic} = useLoaderData();
    const {theme} = useContext(ToggleThemeContext);

    const orderPlaced = ()=>{
        toast.success('Congratulations ! You have enrolled the course successfully.')
    }
    const orderCanceled = ()=>{
        toast.error('Order Canceled.')
    }
    
    return (
        <div className={`checkout mx-auto mt-5  pb-5 pt-3 rounded ${theme? "bg-secondary bg-opacity-10" : "bg-dark"}`}>
            <h3 className='text-center my-4'>Check Out</h3>
            <div className='d-flex align-items-center justify-content-between justify-content-lg-around'>
                <div>
                    <p className={`mb-0 fw-semibold lead ${theme? 'text-info':'text-warning'}`}>{topic}</p>
                    <p className='mb-0 fs-3'>{price}</p>
                </div>
                <div>
                <p>ID: {id}</p>
                <div className='d-flex align-items-center gap-3'> 
                    <button onClick={orderPlaced} className='btn btn-outline-primary'>Confirm</button>
                    <Link onClick={orderCanceled} to='/courses'>
                    <button className='btn btn-outline-danger'>Cancel</button>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
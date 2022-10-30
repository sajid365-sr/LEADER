

import React, { useContext } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { ToggleThemeContext } from '../../Contexts/ThemeContext/ThemeContext';


const Login = () => {
    const {theme} = useContext(ToggleThemeContext);

    const handleSubmit = (event) =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
    }


    return (
        <div>
            <Form  onSubmit={handleSubmit} style={{width:'50%'}} className={`mx-auto px-5 py-3 rounded rounded-4 ${theme? 'bg-secondary bg-opacity-10':'bg-secondary bg-opacity-50 '}`}>
            <h2 className="text-uppercase text-center mt-3 mb-4">Login</h2>
      

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          className='py-2'
          name="email"
          type="email"
          placeholder='Enter Email (ex: example@gmail.com)'
          required
        />
        <Form.Label>Your Email</Form.Label>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          className='py-2'
          name="password"
          type="password"
          placeholder='Enter Password'
          required
        />
        <Form.Label>Password</Form.Label>
      </Form.Group>


      <Button
        style={{background:'linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1))'}}
        className="me-4 fs-5 px-5 w-100 border-0 text-dark py-2 shadow-lg fw-semibold"
        type="submit"
        // disabled={!accepted}
      >
        Login
      </Button>

      <>
          <p className='text-center mt-4'>New to here? <Link className={`fw-semibold ${theme ?'text-dark' : 'text-info'}`} to="/register">Register</Link></p>
      </>

      <Form.Text className="text-danger">{}</Form.Text>
    </Form>


        </div>
    );
};

export default Login;
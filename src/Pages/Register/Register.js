
import React, { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { ToggleThemeContext } from '../../Contexts/ThemeContext/ThemeContext';


const Register = () => {
    const {theme} = useContext(ToggleThemeContext);
    const [accepted, setAccepted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        
    
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
    
        // createUser(email, password)
        //   .then((result) => {
        //     const user = result.user;
        //     console.log(user);
        //     updateUserProfile(name, photoURL);
        //     handleEmailVerification();
        //     setError("");
        //     form.reset();
        //     toast.success('Check your email to verify.');
        //     navigate('/login');
        //   })
        //   .catch((e) => {
        //     setError(e.message);
        //   });
      };
        
      const handleAccepted = (event) => {
        setAccepted(event.target.checked);
      };


    return (
        <div>
            <Form style={{width:'50%'}} className={`mx-auto px-5 py-3 rounded rounded-4 ${theme? 'bg-secondary bg-opacity-10':'bg-secondary bg-opacity-50 '}`} onSubmit={handleSubmit}>
            <h2 className="text-uppercase text-center mt-3 mb-4">Create an account</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control
          name="name"
          type="text"
          className='py-2'
          placeholder='Enter Full Name'
          required
        />
        <Form.Label>Your Name</Form.Label>
      </Form.Group>

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

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control
          className='py-2'
          name="confirm"
          type="password"
          placeholder='Re-type Password'
          required
        />
        <Form.Label>Confirm Your Password</Form.Label>
      </Form.Group>

      <Form.Group className="my-4 d-flex justify-content-center" controlId="formBasicCheckbox">
        <Form.Check
          className=''
          type="checkbox"
          onClick={handleAccepted}
          label={
            <>
              I agree all statement in <Link className={`fw-semibold ${!theme && 'text-info'}`} to="/terms">Terms of service</Link>
            </>
          }
        />
      </Form.Group>

      <Button
        style={{background:'linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1))'}}
        className="me-4 fs-5 px-5 w-100 border-0 text-dark py-2 shadow-lg fw-semibold"
        type="submit"
        disabled={!accepted}
      >
        Register
      </Button>

      <>
          <p className='text-center mt-4'>Have already an account? <Link className={`fw-semibold ${theme ?'text-dark' : 'text-info'}`} to="/login">Login here</Link></p>
      </>

      <Form.Text className="text-danger">{}</Form.Text>
    </Form>


        </div>
    );
};

export default Register;
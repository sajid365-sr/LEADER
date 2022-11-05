import React, { useContext, useState } from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { ToggleThemeContext } from "../../Contexts/ThemeContext/ThemeContext";
import facebook from "../../Assets/Icons/facebook.png";
import google from "../../Assets/Icons/google.png";
import github from "../../Assets/Icons/github.png";
import { AuthContext } from "../../Contexts/UserContext/UserContext";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import './Register.css'

const Register = () => {
  const { theme } = useContext(ToggleThemeContext);
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");
  const { providerLogin, createUser, updateUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const handleSubmit = (event) => {
    event.preventDefault();

    
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // const confirm = form.confirm.value;

    createUser(email, password)
      .then((result) => {
      
        updateUserProfile(name);
        // handleEmailVerification();
        setError("");
        form.reset();
    
        navigate('/login');
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  // google sign in
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
      
      })
      .catch((e) => console.error(e));
  };

  //   facebook sign in
  const handleFacebookSignIn = () => {
    providerLogin(facebookProvider)
      .then((result) => {
      
      })
      .catch((e) => console.error(e));
  };
  //   gitHub sign in
  const handleGitHubSignIn = () => {
    providerLogin(gitHubProvider)
      .then((result) => {
      
      })
      .catch((e) => console.error(e));
  };
// update profile
const updateUserProfile = (name) => {
    const profile = {
      displayName: name,
    };
    updateUserInfo(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <div>
      <Form
        
        className={`mx-auto px-5 py-3 my-5 rounded rounded-4 registerForm ${
          theme ? "bg-secondary bg-opacity-10" : "bg-secondary bg-opacity-50 "
        }`}
        onSubmit={handleSubmit}
      >
        <h2 className="text-uppercase text-center mt-3 mb-4">
          Create an account
        </h2>
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Control
            name="name"
            type="text"
            className="py-2"
            placeholder="Enter Full Name"
            required
          />
          <Form.Label>Your Name</Form.Label>
        </Form.Group>

        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Control
            className="py-2"
            name="email"
            type="email"
            placeholder="Enter Email (ex: example@gmail.com)"
            required
          />
          <Form.Label>Your Email</Form.Label>
        </Form.Group>

        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Control
            className="py-2"
            name="password"
            type="password"
            placeholder="Enter Password"
            required
          />
          <Form.Label>Password</Form.Label>
        </Form.Group>

        <Form.Group className="mb-1" controlId="formBasicPassword">
          <Form.Control
            className="py-2"
            name="confirm"
            type="password"
            placeholder="Re-type Password"
            required
          />
          <Form.Label>Confirm Your Password</Form.Label>
        </Form.Group>

        <Form.Group
          className="my-4 d-flex justify-content-center"
          controlId="formBasicCheckbox"
        >
          <Form.Check
            className=""
            type="checkbox"
            onClick={handleAccepted}
            label={
              <>
                I agree all statement in{" "}
                <Link
                  className={`fw-semibold ${!theme && "text-info"}`}
                  to="/terms"
                >
                  Terms of service
                </Link>
              </>
            }
          />
        </Form.Group>

        <Button
          style={{
            background:
              "linear-gradient(to right, rgb(106 97 249), rgb(213 215 78))",
          }}
          className="me-4 fs-5 px-5 w-100 border-0 text-dark py-2 shadow-lg fw-semibold"
          type="submit"
          disabled={!accepted}
        >
          Register
        </Button>

        <div className="text-center my-4">
          <p className="mb-2 fw-semibold">Or</p>
          <p className="text-secondary ">Sign Up Using</p>
          <span>
            <Image
              onClick={handleGoogleSignIn}
              src={google}
              style={{ width: "30px" }}
              role="button"
            ></Image>
          </span>
          <span>
            <Image
              onClick={handleFacebookSignIn}
              src={facebook}
              style={{ width: "30px" }}
              className="mx-3"
              role="button"
            ></Image>
          </span>
          <span>
            <Image onClick={handleGitHubSignIn} src={github} style={{ width: "30px" }} role="button"></Image>
          </span>
        </div>

        <>
          <p className="text-center mt-4">
            Have already an account?{" "}
            <Link
              className={`fw-semibold ${theme ? "text-dark" : "text-info"}`}
              to="/login"
            >
              Login here
            </Link>
          </p>
        </>

        <Form.Text className="text-danger">{error}</Form.Text>
      </Form>
    </div>
  );
};

export default Register;

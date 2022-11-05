import { Image } from "react-bootstrap";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToggleThemeContext } from "../../Contexts/ThemeContext/ThemeContext";
import facebook from "../../Assets/Icons/facebook.png";
import google from "../../Assets/Icons/google.png";
import github from "../../Assets/Icons/github.png";
import { AuthContext } from "../../Contexts/UserContext/UserContext";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import './Login.css'

const Login = () => {
  const { theme } = useContext(ToggleThemeContext);
  const { providerLogin, signIn, setLoading } = useContext(AuthContext);

  const [error, setError] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // email-password login
    signIn(email, password)
      .then((result) => {
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // google sign in
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((e) => console.error(e));
  };

  //   facebook sign in
  const handleFacebookSignIn = () => {
    providerLogin(facebookProvider)
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((e) => console.error(e));
  };
  //   gitHub sign in
  const handleGitHubSignIn = () => {
    providerLogin(gitHubProvider)
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((e) => console.error(e));
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        className={`mx-auto my-5 px-5 py-5 rounded rounded-4 loginForm ${
          theme ? "bg-secondary bg-opacity-10" : "bg-secondary bg-opacity-50 "
        }`}
      >
        <h2 className="text-uppercase text-center mt-3 mb-4">Login</h2>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className="py-2"
            name="email"
            type="email"
            placeholder="Enter Email (ex: example@gmail.com)"
            required
          />
          <Form.Label>Your Email</Form.Label>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className="py-2"
            name="password"
            type="password"
            placeholder="Enter Password"
            required
          />
          <Form.Label>Password</Form.Label>
        </Form.Group>

        <Button
          style={{
            background:
              "linear-gradient(to right, rgb(106 97 249), rgb(213 215 78))",
          }}
          className="me-4 fs-5 px-5 w-100 border-0 text-dark py-2 shadow-lg fw-semibold"
          type="submit"
        >
          Login
        </Button>

        <div className="text-center my-4">
          <p className="mb-2 fw-semibold">Or</p>
          <p className="text-secondary ">Login Using</p>
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
            <Image
              onClick={handleGitHubSignIn}
              src={github}
              style={{ width: "30px" }}
              role="button"
            ></Image>
          </span>
        </div>

        <p className="text-center mt-4">
          New to here?{" "}
          <Link
            className={`fw-semibold ${theme ? "text-dark" : "text-info"}`}
            to="/register"
          >
            Register
          </Link>
        </p>

        <p className="text-danger text-center">{error}</p>
      </Form>
    </div>
  );
};

export default Login;

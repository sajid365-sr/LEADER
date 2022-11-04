import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { ToggleThemeContext } from "../../Contexts/ThemeContext/ThemeContext";
import "./Blog.css";

const Blog = () => {
  const { theme } = useContext(ToggleThemeContext);

  return (
    <Container>
      <article
        className={`w-75 mx-auto p-5 rounded my-5 ${
          theme ? "bg-secondary bg-opacity-10" : "bg-dark"
        }`}
      >
        <h2 className={`text-center mb-5 ${theme? 'text-primary' : 'text-warning'}`}>what is `cors`?</h2>
        <p>
          <h4>Cross-Origin Resource Sharing (CORS)</h4>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources. CORS also relies on a mechanism by which browsers make a
          "preflight" request to the server hosting the cross-origin resource,
          in order to check that the server will permit the actual request. In
          that preflight, the browser sends headers that indicate the HTTP
          method and headers that will be used in the actual request.
        </p>
      </article>
      <article
        className={`w-75 mx-auto p-5 rounded my-5 ${
          theme ? "bg-secondary bg-opacity-10" : "bg-dark"
        }`}
      >
        <h2 className={`text-center mb-5 ${theme? 'text-primary' : 'text-warning'}`}>
          Why are you using `firebase`? What other options do you have to
          implement authentication?
        </h2>
        <p>
          Firebase is a set of hosting services for any type of application. It
          offers NoSQL and real-time hosting of databases, content, social
          authentication, and notifications, or services, such as a real-time
          communication server.
        </p>
        <h5>You can also choose:</h5>
        <div className="d-flex justify-content-around mt-3">
          <ol>
            <li>STYTCH</li>
            <li>Ory</li>
            <li>Supabase</li>
            <li>Okta</li>
            <li>PingIdentity</li>
          </ol>
          <ol>
            <li>Keycloak</li>
            <li>Frontegg</li>
            <li>Authress</li>
            <li>Auth0</li>
            <li>Amazon Cognito</li>
          </ol>
        </div>
      </article>
      <article
        className={`w-75 mx-auto p-5 rounded my-5 ${
          theme ? "bg-secondary bg-opacity-10" : "bg-dark"
        }`}
      >
        <h2 className={`text-center mb-5 ${theme? 'text-primary' : 'text-warning'}`}>
          How does the private route work?
        </h2>
        <p>
          Private Routes vary based on the Apps, For example, Dashboard, User
          Profile, App Settings, Home etc. In simple words, These routes can be
          accessed only after login.<br/>
          The constraints for Public and Private
          routes are that Public routes should not be accessed after login and
          Private routes should not be accessible before login.
        </p>
        <p>
          The react private route component renders child components <span className="text-danger text-opacity-75">(children) </span>
          if the user is logged in. If not logged in the user is redirected to
          the /login page with the return url passed in the location state
          property.
        </p>
      </article>
      <article
        className={`w-75 mx-auto p-5 rounded my-5 ${
          theme ? "bg-secondary bg-opacity-10" : "bg-dark"
        }`}
      >
        <h2 className={`text-center mb-5 ${theme? 'text-primary' : 'text-warning'}`}>
          What is Node? How does Node work?
        </h2>
        <p>
        Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return.<br/>
        Node.js is an open-source backend javascript runtime environment. It is used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
        </p>
        <p>
            <span className={`fw-semibold fs-5 ${theme? 'text-success' : 'text-info'}`}>Working of Node.js: </span>
            Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. <br/><br/>
            Node.js basically works on two concept <br/><br/>
            <li>Asynchronous</li>
            <li>Non-blocking I/O</li>
        </p>
      </article>
    </Container>
  );
};

export default Blog;

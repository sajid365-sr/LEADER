import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { ToggleThemeContext } from "../../Contexts/ThemeContext/ThemeContext";
import "./Blog.css";

const Blog = () => {
    const {theme} = useContext(ToggleThemeContext);

  return (
    <Container>
      <article className={`w-75 mx-auto p-5 rounded my-3 ${theme? "bg-secondary bg-opacity-10" : "bg-dark"}`}>
        <h2 className="text-center text-warning mb-3">what is `cors`?</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          magnam quidem, non saepe numquam laborum velit? Odio nesciunt officia
          expedita, totam modi, repudiandae fugit, repellendus ut beatae
          excepturi debitis consectetur pariatur? Odit itaque, rem eius
          voluptatum consequatur architecto voluptates cum similique. Quos,
          eaque. Rem a provident necessitatibus reiciendis voluptates beatae!
        </p>
      </article>
      <article></article>
      <article></article>
      <article></article>
    </Container>
  );
};

export default Blog;

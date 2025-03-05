import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4 text-primary fw-bold fade-in">
          About Me
        </h2>
        <p className="text-muted fade-in fs-5">
          A software engineer | MERN stack developer who is passionate about
          building web and mobile applications. I have experience in developing
          web applications using React, Node.js, Express, and MongoDB. I am also
          familiar with Redux, Zustand for state management, and Bootstrap for
          responsive web design. I have experience in developing mobile apps for
          Android and iOS using React Native. I am familiar with Expo. I have
          experience in developing RESTful APIs. I have experience in
          integrating third-party APIs. I have experience in deploying web apps
          to Netlify and Vercel. I have experience in deploying Node.js apps to
          Render and Vercel. I have experience in deploying MongoDB to MongoDB
          Atlas. I have experience in deploying React Native apps to Expo. I
          have experience in using Git for version control. I have experience in
          using Visual Studio Code for code editing. I have experience in using
          Postman for API testing.
        </p>
      </Container>
    </section>
  );
};

export default About;

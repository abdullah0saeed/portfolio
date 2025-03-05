import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const myName = import.meta.env.VITE_MY_NAME;

const Home = () => {
  return (
    <section id="home" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={10} className="fade-in">
            <h1 className="display-4 fw-bold text-primary">
              Hi, I'm <span className="text-secondary">{myName}</span>
            </h1>
            <p className="lead text-muted">
              A passionate developer specializing in{" "}
              <span className="fw-bold">MERN</span> stack development.
            </p>
            <a href="#projects" className="btn btn-primary btn-lg fw-bold">
              View My Work
            </a>
          </Col>
          <Col md={2} className="fade-in">
            <Card className="rounded-circle shadow-lg">
              <img
                src="/assets/formal.jpg"
                alt="Profile"
                className="img-fluid rounded-circle shadow fade-in"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;

import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-uppercase">
          My Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-white fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="text-white fw-bold">
              About
            </Nav.Link>
            <Nav.Link href="#projects" className="text-white fw-bold">
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" className="text-white fw-bold">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const myPhone = import.meta.env.VITE_MY_PHONE;

const Contact = () => {
  const handelSubmit = (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;

    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${myPhone}?text=${encodeURIComponent(
      `${name ? `Name: ${name}\n` : ""}${
        email ? `Email: ${email}\n` : ""
      }Message: ${decodeURIComponent(message)}`
    )}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank"); // Open WhatsApp in a new tab

    e.target.reset();
  };

  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center mb-4 text-primary fw-bold fade-in">
          Contact Me
        </h2>
        <Form onSubmit={(e) => handelSubmit(e)}>
          <Form.Group className="mb-3 fade-in">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3 fade-in">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group className="mb-3 fade-in">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your message"
            />
          </Form.Group>
          <Button variant="success" type="submit" className="fw-bold">
            <i className="bi bi-whatsapp me-2"></i> Send Message
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;

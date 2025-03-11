import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const myPhone = import.meta.env.VITE_MY_PHONE;
const myEmail = import.meta.env.VITE_MY_EMAIL;

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

  const handelEmail = (e) => {
    e.preventDefault();

    const name = e.target.form.elements.name.value;
    const email = e.target.form.elements.email.value;
    const message = e.target.form.elements.message.value;

    // Construct the Email URL
    const emailUrl = `mailto:
      ${myEmail}?subject=${encodeURIComponent(
      "Contact Form Submission from Portfolio"
    )}&body=${encodeURIComponent(
      `${name ? `Name: ${name}\n` : ""}${
        email ? `Email: ${email}\n` : ""
      }Message: ${decodeURIComponent(message)}`
    )}`;

    // Redirect to Email
    window.open(emailUrl, "_blank"); // Open Email in a new tab

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
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter your name"
            />
          </Form.Group>
          <Form.Group className="mb-3 fade-in">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </Form.Group>
          <Form.Group className="mb-3 fade-in">
            <Form.Label>Message</Form.Label>
            <Form.Control
              name="message"
              as="textarea"
              rows={3}
              placeholder="Enter your message"
            />
          </Form.Group>
          <Form.Group className="mb-3 fade-in justify-content-between d-flex">
            <Button variant="success" type="submit" className="fw-bold">
              <i className="bi bi-whatsapp me-2"></i> Send Message
            </Button>
            <Button
              variant="dark"
              className="fw-bold"
              onClick={(e) => handelEmail(e)}
            >
              <i class="bi bi-envelope-arrow-up-fill me-2"></i> Send Email
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;

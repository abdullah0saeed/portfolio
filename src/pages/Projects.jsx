import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Projects = () => {
  const projectList = [
    {
      title: "RentEase",
      description: `
  <p>Web app for renting businesses where users can rent items and admin is able to manage rented items.</p>
  <p>Login credentials: (for testing)</p>
  <p>username: admin, password: 123456</p>
`,
      link: "https://rental-app-front-steel.vercel.app",
    },
    {
      title: "Quizzz",
      description: `Web app for creating, editing, and taking quizzes. Users can create quizzes and take quizzes created by others`,
      link: "https://quiz0maker.netlify.app",
    },
  ];

  const containsHTML = (str) => /<[a-z][\s\S]*>/i.test(str);

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-4 text-primary fw-bold fade-in">
          My Projects
        </h2>
        <Row>
          {projectList.map((project, index) => (
            <Col md={4} key={index} className="fade-in">
              <Card className="mb-4 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-primary fw-bold">
                    {project.title}
                  </Card.Title>
                  {containsHTML(project.description) ? (
                    // Render HTML if detected
                    <Card.Text
                      dangerouslySetInnerHTML={{
                        __html: project.description,
                      }}
                    />
                  ) : (
                    // Fallback to plain text
                    <Card.Text>{project.description}</Card.Text>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    className="btn btn-primary fw-bold"
                  >
                    View Project
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;

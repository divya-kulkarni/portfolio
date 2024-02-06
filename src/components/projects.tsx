/* eslint-disable react/jsx-no-duplicate-props */
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../assets/styling/projects.css";
import fuji from "../assets/images/project/fuji.jpg";


export const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h3>My Work</h3>
      <Row className="g-4">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col
            xs={12}
            sm={9}
            md={4}
            key={idx}
            className="mb-2"
          >
            <Card
              style={{
                width: "100%",
                borderBottom: "none",
              }}
              className="mx-auto"
            >
              <Card.Header style={{padding: 0}}>
                <Card.Img variant="top" src={fuji} className="project-img" />
              </Card.Header>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

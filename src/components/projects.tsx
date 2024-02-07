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
        {Array.from({ length: 2 }).map((_, idx) => (
          <Col xs={12} sm={9} md={6} key={idx} className="mb-2">
            <img src={fuji} alt="Fuji" className="img-fluid" />
          </Col>
        ))}
      </Row>
    </div>
  );
};

/* eslint-disable react/jsx-no-duplicate-props */
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../assets/styling/projects.css";
import tns from "../assets/images/screenshots/tns.png";
import portfolio from "../assets/images/screenshots/portfolio.png";

export const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h3>Recent Work</h3>
      <Row className="g-4">
        <Col xs={12} sm={9} md={6} className="mb-2">
          <img src={tns} alt="tns" className="img-fluid" />
        </Col>
        <Col xs={12} sm={9} md={6} className="mb-2">
          <img src={portfolio} alt="portfolio" className="img-fluid" />
        </Col>
      </Row>
    </div>
  );
};

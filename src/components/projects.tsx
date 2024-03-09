import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../styling/projects.css";
import tns from "../assets/images/screenshots/tns.png";
import portfolio from "../assets/images/screenshots/portfolio.png";
import soon from "../assets/images/coming-soon.png";

export const Projects = () => {
  const getNextPage = (path: string) => {
    window.location.pathname = path;
  };
  return (
    <div className="projects" id="projects">
      <h3>Recent Work</h3>
      <Row className="g-4" style={{ paddingTop: "2rem" }}>
        <Col xs={12} md={12} className="mb-4">
          <img
            src={tns}
            alt="tns"
            className="img-fluid"
            onClick={() => getNextPage("/works/thenujastore")}
          />
        </Col>
        <Col xs={12} md={12} className="mb-4">
          <img
            src={portfolio}
            alt="portfolio"
            className="img-fluid"
            onClick={() => getNextPage("/works/portfolio")}
          />
        </Col>
        <Col xs={12} md={12} className="mb-4">
          <img
            src={soon}
            alt="portfolio"
            className="img-fluid"
            onClick={() => getNextPage("/works/thenujastore")}
          />
        </Col>
      </Row>
    </div>
  );
};

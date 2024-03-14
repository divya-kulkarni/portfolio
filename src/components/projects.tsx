import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../styling/projects.css";
import tns from "../assets/images/case-study/tns/mockups-tns.webp";
import portfolio from "../assets/images/portfolio-thumbnail.webp";
import soon from "../assets/images/case-study/tns/soon.mp4";

export const Projects = () => {
  const getNextPage = (path: string) => {
    window.location.pathname = path;
  };
  return (
    <div className="projects" id="projects">
      <h3>Recent Work</h3>
      <Row className="g-4" style={{ paddingTop: "2rem" }}>
        <Col xs={12} md={12} className="mb-4">
          <h4>01. E-commerce website for thenujastore</h4>
          <div className="hero-action">
            <a
              href="https://github.com/divya-kulkarni/thenujastore"
              className="action-btn"
              target="_blank"
              rel="noreferrer"
            >
              View on Github
            </a>
          </div>
          <img
            src={tns}
            alt="tns"
            className="img-fluid"
            onClick={() => getNextPage("/works/thenujastore")}
          />
        </Col>
        <Col xs={12} md={12} className="mb-4">
          <h4>02. Portfolio v1</h4>
          <div className="hero-action">
            <a
              href="https://github.com/divya-kulkarni/portfolio"
              className="action-btn"
              target="_blank"
              rel="noreferrer"
            >
              View on Github
            </a>
          </div>
          <img
            src={portfolio}
            alt="portfolio"
            className="img-fluid"
            onClick={() => getNextPage("/works/portfolio")}
          />
        </Col>
        <Col xs={12} md={12} className="mb-4">
          <h4>
            03. COMING SOON - Website redesign for Gastouderopvang Bizzybees
          </h4>
          <div className="wireframe-video">
            <video width="100%" autoPlay muted loop>
              <source src={soon} type="video/mp4" />
              Looks like your browser does not support videos.
            </video>
          </div>
        </Col>
      </Row>
    </div>
  );
};

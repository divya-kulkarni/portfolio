import { Container, Row, Col } from "react-bootstrap";
import "../assets/styling/hero.css";
import heroImg from "../assets/images/divya.png";
import { Contact } from "./contact";

export const Hero = () => {
  return (
    <div className="hero" id="hero">
      {/* <Container>
        <Row>
          <Col> */}
            <span className="hero-name">{`<b>I'm Divya</b>`}</span>
            <h1>{`Front-End Web Developer`}</h1>
            <p>
              Creative professional specializing in responsive design and
              frontend development for an enhanced user experience.Creative
              professional.
            </p>
            <div className="hero-action">
              <a href="something" className="action-btn">
                Say Hi 👋
              </a>
            </div>
          {/* </Col>
          {/* <Col xs={12} md={6} xl={5}>
            <span className="hero-img-container">
              <h2>hello world</h2>
            </span>
          </Col> */}
        {/* </Row> */}
      {/* </Container> */}
    </div>
  );
};

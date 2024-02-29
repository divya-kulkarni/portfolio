import { Container, Row, Col } from "react-bootstrap";
import "../styling/footer.css";
import linkedin from "../assets/images/social/linkedin.svg";
import github from "../assets/images/social/github.svg";

export const Footer = () => {
  return (
    <div className="footer">
      <Container className="footer-content">
        <Row>
          <Col>
            <div className="social">
              <a
                href="https://linkedin.com/in/div-kulkarni"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={linkedin} alt=""/>
              </a>
              <a
                href="https://github.com/divya-kulkarni"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={github} alt="" />
              </a>
            </div>
            <section className="footer-section">
              <p>{`Handcrafted by Divya © 2024`}</p>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

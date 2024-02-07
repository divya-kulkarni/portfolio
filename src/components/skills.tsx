import { Container, Row, Col } from "react-bootstrap";
import "../assets/styling/skills.css";
import navIcon3 from "../assets/images/social/nav-icon3.svg";
import typescript from "../assets/images/tech/typescript.svg";
import node from "../assets/images/tech/node.svg";
import react from "../assets/images/tech/react.svg";
import html from "../assets/images/tech/html.svg";
import css from "../assets/images/tech/css.svg";
import javascript from "../assets/images/tech/javascript.svg";
import git from "../assets/images/tech/git-icon.svg";
import aws from "../assets/images/tech/aws.svg";
import mongo from "../assets/images/tech/mongo.svg";
import jest from "../assets/images/tech/jest.svg";

export const Skills = () => {
  return (
    <div className="info-grid" id="skills">
        <div className="skill-header"></div>
      <Container>
        <Row>
          <Col className="skills">
            <Row>
              <Col xs={4} sm={3} md={3} lg={3}>
                <figure>
                  <img src={react} alt="" className="img-fluid"></img>
                  <figcaption>React</figcaption>
                </figure>
              </Col>
              <Col xs={4} sm={3} md={3} lg={3}>
                <figure>
                  <img src={html} alt="" className="img-fluid"></img>
                  <figcaption>HTML5</figcaption>
                </figure>
              </Col>
              <Col xs={4} sm={3} md={3} lg={3}>
                <figure>
                  <img src={css} alt="" className="img-fluid"></img>
                  <figcaption>CSS3</figcaption>
                </figure>
              </Col>
              <Col xs={4} sm={3} md={3} lg={3}>
                <figure>
                  <img src={javascript} alt="" className="img-fluid"></img>
                  <figcaption>JavaScript</figcaption>
                </figure>
              </Col>

              <Col xs={4} sm={3} md={3} lg={3}>
                <figure>
                  <img src={typescript} alt="" className="img-fluid"></img>
                  <figcaption>TypeScript</figcaption>
                </figure>
              </Col>
              <Col xs={4} sm={3} md={3} lg={3}>
                <figure>
                  <img src={node} alt="" className="img-fluid"></img>
                  <figcaption>Node</figcaption>
                </figure>
              </Col>
              <Col xs={4} sm={3} md={3} lg={3}>
                <figure>
                  <img src={navIcon3} alt="" className="img-fluid"></img>
                  <figcaption>Express</figcaption>
                </figure>
              </Col>
              <Col xs={4} sm={3} md={3} lg={3}>
                <figure>
                  <img src={mongo} alt="" className="img-fluid"></img>
                  <figcaption>MongoDB</figcaption>
                </figure>
              </Col>
              <Col xs={4} sm={3} md={3} lg={3}>
                <figure>
                  <img src={aws} alt="" className="img-fluid"></img>
                  <figcaption>AWS</figcaption>
                </figure>
              </Col>
              <Col xs={4} sm={3} md={3} lg={3}>
                <figure>
                  <img src={git} alt="" className="img-fluid"></img>
                  <figcaption>Git</figcaption>
                </figure>
              </Col>
              <Col xs={4} sm={3} md={3} lg={3}>
                <figure>
                  <img src={jest} alt="" className="img-fluid"></img>
                  <figcaption>Jest</figcaption>
                </figure>
              </Col>
              <Col xs={4} sm={3} md={3} lg={3}>
                <figure>
                  <img src={javascript} alt="" className="img-fluid"></img>
                  <figcaption>JavaScript</figcaption>
                </figure>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

import { Container, Row, Col } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip, { TooltipProps } from "react-bootstrap/Tooltip";
import "../styling/skills.css";
import express from "../assets/images/tech/express.svg";
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
import responsive from "../assets/images/tech/responsive.svg";

export const Skills = () => {
  const renderTooltip = (label: string, props: TooltipProps) => (
    <Tooltip id="button-tooltip" {...props}>
      {label}
    </Tooltip>
  );
  return (
    <div className="info-grid" id="skills">
      <Container>
        <Row>
          <h3>What I can do</h3>
          <Col className="skills">
            <Row>
              {skillData.map((skill) => (
                <Col xs={4} sm={3} md={3}>
                  <figure>
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 150, hide: 400 }}
                      overlay={renderTooltip(skill.name, {})}
                    >
                      <img
                        src={skill.image}
                        alt=""
                        className="img-fluid"
                        onClick={() => renderTooltip(skill.name, {})}
                      ></img>
                    </OverlayTrigger>
                  </figure>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const skillData = [
  {
    id: 1,
    name: "React",
    image: react,
  },
  {
    id: 2,
    name: "HTML5",
    image: html,
  },
  {
    id: 3,
    name: "CSS3",
    image: css,
  },
  {
    id: 4,
    name: "Javascript",
    image: javascript,
  },
  {
    id: 5,
    name: "Typescript",
    image: typescript,
  },
  {
    id: 6,
    name: "Node",
    image: node,
  },
  {
    id: 7,
    name: "Express",
    image: express,
  },
  {
    id: 8,
    name: "MongoDB",
    image: mongo,
  },
  {
    id: 9,
    name: "AWS",
    image: aws,
  },
  {
    id: 10,
    name: "Git",
    image: git,
  },
  {
    id: 11,
    name: "Jest",
    image: jest,
  },
  {
    id: 12,
    name: "Responsive Design",
    image: responsive,
  },
];

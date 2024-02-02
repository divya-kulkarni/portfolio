import { Container, Row, Col } from "react-bootstrap";
import '../assets/styling/skills.css';
import navIcon3 from '../assets/images/social/nav-icon3.svg';
import typescript from '../assets/images/tech/typescript.svg';
import node from '../assets/images/tech/node.svg';
import react from '../assets/images/tech/react.svg';
import html from '../assets/images/tech/html.svg';
import css from '../assets/images/tech/css.svg';
import javascript from '../assets/images/tech/javascript.svg';
import git from '../assets/images/tech/git-icon.svg'
import aws from '../assets/images/tech/aws.svg'
import mongo from '../assets/images/tech/mongo.svg';
import jest from '../assets/images/tech/jest.svg';

export const Skills = () => {
    return (
        <div className="skills" id='skills'>
            <Container className="skills-container">
                <Row>
                    <Col xs={3} sm={2} md={2} lg={1}>
                        <figure>
                            <img src={react} alt=""></img>
                            <figcaption>ReactJS</figcaption>
                        </figure>
                    </Col>
                    <Col xs={3} sm={2} md={2} lg={1}>
                        <figure>
                            <img src={html} alt=""></img>
                            <figcaption>HTML5</figcaption>
                        </figure>
                    </Col>
                    <Col xs={3} sm={2} md={2} lg={1}>
                        <figure>
                            <img src={css} alt=""></img>
                            <figcaption>CSS3</figcaption>
                        </figure>
                    </Col >
                    <Col xs={3} sm={2} md={2} lg={1}>
                        <figure>
                            <img src={javascript} alt=""></img>
                            <figcaption>JavaScript</figcaption>
                        </figure>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3} sm={2} md={2} lg={1}>
                        <figure>
                            <img src={typescript} alt=""></img>
                            <figcaption>TypeScript</figcaption>
                        </figure>
                    </Col>
                    <Col xs={3} sm={2} md={2} lg={1}>
                        <figure>
                            <img src={node} alt=""></img>
                            <figcaption>NodeJS</figcaption>
                        </figure>
                    </Col>
                    <Col xs={3} sm={2} md={2} lg={1}>
                        <figure>
                            <img src={navIcon3} alt=""></img>
                            <figcaption>ExppressJS</figcaption>
                        </figure>
                    </Col>
                        <figure>
                            <img src={mongo} alt=""></img>
                            <figcaption>MongoDB</figcaption>
                        </figure>
                </Row>
                <Row>
                    <Col xs={3} sm={2} md={2} lg={1}>
                        <figure>
                            <img src={aws} alt=""></img>
                            <figcaption>AWS</figcaption>
                        </figure>
                    </Col>
                    <Col xs={3} sm={2} md={2} lg={1}>
                        <figure>
                            <img src={git} alt=""></img>
                            <figcaption>Git</figcaption>
                        </figure>
                    </Col>
                    <Col xs={3} sm={2} md={2} lg={1}>
                        <figure>
                            <img src={jest} alt=""></img>
                            <figcaption>Jest</figcaption>
                        </figure>
                    </Col>
                        <figure>
                            <img src={javascript} alt=""></img>
                            <figcaption>JavaScript</figcaption>
                        </figure>
                </Row>
            </Container>
        </div>
    );
};
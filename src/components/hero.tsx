import { Container, Row, Col } from "react-bootstrap";
import '../assets/styling/hero.css';
import heroImg from '../assets/images/woman.jpg';
import resume from '../assets/resume/resume.pdf';

export const Hero = () => {
    return (
        <div className="hero" id="hero">
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <span className="hero-name">{`<b>Hi, I'm Divya</b>`}</span>
                        <h1>{`Front-End Web Developer`}</h1>
                        <p>Lorem ipsum It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <div className="hero-action">
                            <a className="action-btn" href={resume} rel="noopener noreferrer" target="_blank">Resume</a>
                            <a href="something" className="action-btn">Say Hi 👋</a> 
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <span className="hero-img-container">
                            <img src={heroImg} alt="hero-img"></img>
                        </span>
                    </Col>
                </Row>           
            </Container>
        </div>
    );
}
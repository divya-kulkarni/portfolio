import { Container, Row, Col } from "react-bootstrap";
import '../assets/styling/hero.css';
import heroImg from '../assets/images/cat.jpg';
import resume from '../assets/resume/resume.pdf';

export const Hero = () => {
    return (
        <div className="hero">
            <Container>
                <Row className="align-tems-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="hero-text">{`<b>Hi, I'm Divya</b>`}</span>
                        <h1>{`Full Stack Web Developer`}</h1>
                        <p>Lorem ipsum It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.</p>
                        <a href={resume} rel="noopener noreferrer" target="_blank">
                            <button><span>Resume</span></button>
                        </a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <span className="hero-img">
                            <img src={heroImg} alt="hero-img"></img>
                        </span>
                    </Col>
                </Row>           
            </Container>
        </div>
    );
}
import { Container, Row, Col } from "react-bootstrap";
import '../assets/styling/hero.css';
import heroImg from '../assets/images/woman.jpg';
import resume from '../assets/resume/resume.pdf';
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';

export const Hero = () => {
    return (
        <div className="hero">
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <span className="hero-name">{`<b>Hi, I'm Divya</b>`}</span>
                        <h1>{`Front-End Web Developer`}</h1>
                        <p>Lorem ipsum It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.</p>
                        <a href={resume} rel="noopener noreferrer" target="_blank">
                            <button><span>Resume</span></button>
                        </a>
                        <button className="contact-button" onClick={() => console.log('Ssup?')}><span>Say Hi 👋</span></button>
                        <div className="social">
                            <a href="#linkedin"><img src={navIcon1} alt=""></img></a>
                            <a href="#github"><img src={navIcon2} alt=""></img></a>
                            <a href="#email"><img src={navIcon3} alt=""></img></a>
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
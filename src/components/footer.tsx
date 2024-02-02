import { Container, Row, Col } from "react-bootstrap";
import '../assets/styling/footer.css';
import linkedin from '../assets/images/social/linkedin.svg';
import navIcon3 from '../assets/images/social/nav-icon3.svg';
import email from '../assets/images/social/gmail.svg';
import github from '../assets/images/social/github.svg';

export const Footer = () => {
    return (
        <div className="footer">
            <Container className="footer-content">
                <Row>
                    <Col> 
                        <div className='logo'>
                            <span><img src={navIcon3} alt=""></img></span>
                            <p>Elevating web experiences, one pixel at a time.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>   
                        <div className="social">
                            <a href="https://linkedin.com/in/div-kulkarni" rel="noopener noreferrer" target="_blank"><img src={linkedin} alt=""></img></a>
                            <a href="https://github.com/divya-kulkarni" rel="noopener noreferrer" target="_blank"><img src={github} alt=""></img></a>
                            <a href="#email"><img src={email} alt=""></img></a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <section className="footer-section">
                            <p>{`Handcrafted by Divya © 2024`}</p>
                        </section>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
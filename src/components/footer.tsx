import { Container, Row, Col } from "react-bootstrap";
import '../assets/styling/footer.css';
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';

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
                            <a href="#linkedin"><img src={navIcon1} alt=""></img></a>
                            <a href="#github"><img src={navIcon2} alt=""></img></a>
                            <a href="#email"><img src={navIcon3} alt=""></img></a>
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
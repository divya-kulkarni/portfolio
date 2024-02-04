import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from 'emailjs-com';
import '../assets/styling/contact.css';

export const Contact = () => {
    const sendEmail = (e: any) => {
        e.preventDefault();
        
        emailjs.sendForm('service_zrb63s4', 'template_q4acwkn', e.target, '07ZI4jhivAYTiqsE-')
        .then((result: { text: any; }) => {
            console.log('Email sent successfully!', result.text);
        }, (error: { text: any; }) => {
            console.log('Error sending email:', error.text);
        });
    }
    return (
        <div className="contact-container" id="contact">
            <Container fluid>
                <Row>
                    <Col md={6}>
                        <div className="about">
                            <h4>Want to know more?</h4>
                            <a href="something" className="about-btn">About Me</a> 
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="contact">
                            <h4>Interested?</h4>
                            <p>Get in touch.</p>
                            <Form onSubmit={sendEmail}>
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Control name="name" type="name" placeholder="Name" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control name="email" type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group as={Col} id="formGridQuery">
                                    <Form.Control name="message" as="textarea" rows={3}  placeholder="Your message"/>
                                </Form.Group>
                                <Button type="submit" className="contact-btn">
                                    Submit
                                </Button>
                            </Form >
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
import { Col, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import "../assets/styling/contact.css";
import { NavBar } from "./navbar";
import scatter from "../assets/images/contact-scatter.svg";
import { Footer } from "./footer";

export const Contact = () => {
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zrb63s4",
        "template_q4acwkn",
        e.target,
        "07ZI4jhivAYTiqsE-"
      )
      .then(
        (result: { text: any }) => {
          console.log("Email sent successfully!", result.text);
        },
        (error: { text: any }) => {
          console.log("Error sending email:", error.text);
        }
      );
  };
  return (
    <div className="contact-container" id="contact">
      <NavBar />
      <div className="contact">
        <h4>How can I help you?</h4>
        <h5>Thanks for taking the time to reach out.</h5>
        <Form onSubmit={sendEmail} className="contact-form">
          <Form.Group as={Col} controlId="formGridName" className="mb-4">
            <Form.Control name="name" type="name" placeholder="Name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail" className="mb-4">
            <Form.Control name="email" type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group as={Col} id="formGridQuery" className="mb-4">
            <Form.Control
              name="message"
              as="textarea"
              rows={3}
              placeholder="Your message"
            />
          </Form.Group>
          <Button type="submit" className="contact-btn">
            Submit
          </Button>
        </Form>
      </div>
     <Footer />
    </div>
  );
};

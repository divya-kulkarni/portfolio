import { Col, Form, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import emailjs from "emailjs-com";
import "../styling/contact.css";
import { NavBar } from "../components/navbar";
import { Footer } from "../components/footer";
import { useState } from "react";

export const Contact = () => {
  const errorMessage =
    "Oops, your email hit a speed bump. Could you send it to divya.kulkarni.dev@gmail.com? Thanks! 💌";
  const successMessage = "Message sent! 🚀";
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zrb63s4",
        "template_cnfx0df",
        e.target,
        "07ZI4jhivAYTiqsE-"
      )
      .then(
        (result: { text: any }) => {
          console.log("Email sent successfully!", result.text);
          setSuccessAlert(true);
          e.target.reset();
        },
        (error: { text: any }) => {
          console.log("Error sending email:", error.text);
          setErrorAlert(true);
          e.target.reset();
        }
      );
  };
  return (
    <div className="contact-container" id="contact">
      <NavBar />
      <div className="contact">
        <h4>Let's create something special!</h4>
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
          {successAlert && (
            <Alert
              variant="success"
              onClose={() => setSuccessAlert(false)}
              dismissible
            >
              {successMessage}
            </Alert>
          )}
          {errorAlert && (
            <Alert
              variant="error"
              onClose={() => setErrorAlert(false)}
              dismissible
            >
              {errorMessage}
            </Alert>
          )}
          <Button type="submit" className="contact-btn">
            Send
          </Button>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

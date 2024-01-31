import { Navbar, Container, Nav } from "react-bootstrap";
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';
import '../assets/styling/navbar.css';


export const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">DivyaDev</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
            <span className="navbar-text">
                <div className="social">
                    <a href="#linkedin"><img src={navIcon1} alt=""></img></a>
                    <a href="#github"><img src={navIcon2} alt=""></img></a>
                    <a href="#email"><img src={navIcon3} alt=""></img></a>
                </div>
            <button className="contact-button" onClick={() => console.log('Ssup?')}><span>Say Hi👋</span></button>
            </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
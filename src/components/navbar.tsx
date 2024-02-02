import { Navbar, Container, Nav } from "react-bootstrap";
import '../assets/styling/navbar.css';


export const NavBar = () => {
  const handleClickScroll = (sectionId:string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand href="#home" onClick={(e: React.MouseEvent<HTMLElement>) => handleClickScroll('hero')}>DivyaDev</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={(e: React.MouseEvent<HTMLElement>) => handleClickScroll('hero')}>Home</Nav.Link>
            <Nav.Link href="#skills" onClick={(e: React.MouseEvent<HTMLElement>) => handleClickScroll('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" onClick={(e: React.MouseEvent<HTMLElement>) => handleClickScroll('projects')}>Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
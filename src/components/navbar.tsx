import { Navbar, Container, Nav } from "react-bootstrap";
import "../assets/styling/navbar.css";
import resume from "../assets/resume/resume.pdf";

export const NavBar = () => {
  const handleClickScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const getNextPage = (path: string) => {
    window.location.pathname = path;
  };
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      sticky="top"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="/" onClick={() => getNextPage("/")}>
          Divya Kulkarni
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={() => getNextPage("/")}>
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              onClick={(e: React.MouseEvent<HTMLElement>) =>
                handleClickScroll("skills")
              }
            >
              Skills
            </Nav.Link>
            <Nav.Link href="" onClick={() => getNextPage("/about")}>
              About
            </Nav.Link>
            <Nav.Link
              href="#projects"
              onClick={(e: React.MouseEvent<HTMLElement>) =>
                handleClickScroll("projects")
              }
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={(e: React.MouseEvent<HTMLElement>) =>
                handleClickScroll("contact")
              }
            >
              Contact
            </Nav.Link>
            <Nav.Link href={resume} rel="noopener noreferrer" target="_blank">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

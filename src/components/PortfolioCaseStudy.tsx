import { NavBar } from "./navbar";
import { Col, Row } from "react-bootstrap";
import performance from "../assets/images/case-study/portfolio/performance.png";
import "../styling/portfolioCaseStudy.css";

export const PortfolioCaseStudy = () => {
  return (
    <>
      <NavBar />
      <div className="case-container">
        <h1>portfolio</h1>
        <div className="banner-img"></div>
        <h2>01. TL;DR</h2>
        <Row>
          <Col xs={6} md={2}>
            <h3>Services</h3>
            <p>Website Design</p>
            <p>Web Development</p>
          </Col>
          <Col xs={6} md={2}>
            <h3>Tech Stack </h3>
            <p>ReactJS</p>
            <p>TypeScript</p>
            <p>CSS3</p>
            <p>NodeJS</p>
            <p>React Bootstrap</p>
            <p>react-scroll-motion</p>
          </Col>
          <Col xs={12} md={8}>
            <h4>
              My portfolio website serves as a digital showcase of my skills,
              experience, and projects. Designed with simplicity and elegance in
              mind, it provides visitors with a glimpse into my capabilities as
              a developer and a professional.
            </h4>
            <div className="hero-action">
              <a
                href="https://github.com/divya-kulkarni/thenujastore"
                className="action-btn"
                target="_blank"
                rel="noreferrer"
              >
                View on Github
              </a>
            </div>
          </Col>
        </Row>
        <h2>02. Objectives</h2>
        <p>
          The primary objective of this project is to create a visually
          appealing and user-friendly platform to showcase my work and attract
          potential employers. It aims to highlight my expertise in web
          development, design, and problem-solving while providing valuable
          insights into my background and achievements.
        </p>
        <p>Challenges:</p>
        <ul>
          <li>
            <p>
              - One of the main challenges faced during development was
              achieving a balance between creativity and simplicity in the
              design.{" "}
            </p>
          </li>
          <li>
            <p>
              - This was addressed through thorough research and many design
              iterations.
            </p>
          </li>
          <li>
            <p>
              - Additionally, optimising performance and ensuring compatibility
              across different browsers and devices posed technical challenges
              that were overcome through meticulous testing and optimisation
              techniques.
            </p>
          </li>
        </ul>
        <h2>03. Design Process</h2>
        <Row>
          <Col xs={12} md={6}>
            <div className="wireframe-video">
              <ul>
                <li>
                  <p>
                    - The website features a minimalist design with a focus on
                    readability and aesthetics.
                  </p>
                </li>
                <li>
                  <p>
                    - The layout is structured to guide visitors through my
                    portfolio seamlessly, with clear navigation and prominent
                    project showcases.
                  </p>
                </li>
                <li>
                  <p>
                    - Advanced CSS techniques are employed to create visually
                    appealing animations and transitions, enhancing the user
                    experience.
                  </p>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="wireframe-video"></div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}></Col>
          <Col xs={12} md={6}></Col>
        </Row>

        <h2>04. Development</h2>
        <Row>
          <Col xs={12} md={6}>
            <div className="wireframe-video"></div>
          </Col>
          <Col xs={12} md={6}>
            <div className="wireframe-video">
              <p>
                The development process followed an iterative approach, with
                regular updates and refinements based on feedback and testing.
              </p>
              <p>Features:</p>
              <ul>
                <li>
                  <p>
                    - I started by sketching out a general structure of how I
                    wanted the website to look like.
                  </p>
                </li>
                <li>
                  <p>
                    - After implementing the basic structure, I decided to add
                    scroll-based animations to add an element of interest to the
                    landing page.
                  </p>
                </li>
                <li>
                  <p>
                    - I added a contact form and integrated it with EmailJS,
                    which sends user's messages directly to my email address.
                  </p>
                </li>
                <li>
                  <p>
                    - Then, I added tests for each component using Testing
                    Library.
                  </p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <h2>05. Outcome</h2>
        <ul>
          <li>
            <p>- The portfolio website has been successfully launched.</p>
            <p>
              Stay tuned for performance analysis as I get more feedback from
              visitors and/or employers.
            </p>
          </li>
        </ul>
        <h2>06. Next Steps</h2>
        <p>
          Following is a list of all future improvements I plan to do in this
          project:
        </p>
        <ul>
          <li>
            <p>
              - Hosting: I would like to host this website on a custom domain.
            </p>
          </li>
          <li>
            <p>
              - Immersiveness: In the next version of the portfolio, I'd like
              the user to experience my world in 3D. -
            </p>
          </li>
          <li>
            <p>
              - Performance: Website performance can be increased by using
              strategies like code splitting, lazy loading, and image
              optimization. During testing in Lighthouse, the website scored as
              follows:
            </p>
            <img src={performance} alt="performance" />
          </li>
        </ul>
      </div>
    </>
  );
};

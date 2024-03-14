import "../styling/tnsCaseStudy.css";
import banner from "../assets/images/case-study/tns/banner1.webp";
import { NavBar } from "../components/navbar";
import { Col, Row } from "react-bootstrap";
import board from "../assets/images/case-study/tns/board.mov";
import wireframe from "../assets/images/case-study/tns/wireframe.mov";
import offcanvas from "../assets/images/case-study/tns/demo.mp4";
import outcome from "../assets/images/case-study/tns/final.mp4";
import necklace from "../assets/images/case-study/tns/necklace-thumbnail.webp";

export const TnsCaseStudy = () => {
  return (
    <>
      <NavBar />
      <div className="case-container">
        <h1>thenujastore</h1>
        <div className="banner-img">
          <img
            src={banner}
            alt="devices"
            className="img-fluid align-items-center"
          />
        </div>
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
          </Col>
          <Col xs={12} md={8}>
            <h4>
              thenujastore is a blossoming Instagram-born enterprise, popular
              for its exquisite handmade resin jewelry adorned with botanical
              motifs. This is a static website designed and developed from the
              ground up.
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
        <h2>02. Problem Statement</h2>
        <p>
          Transitioning from an Instagram-centric model, thenujastore ventured
          into e-commerce, necessitating the creation of a user-friendly
          website. With no prior online presence, the challenge was to develop a
          platform from scratch. The challenge lay in crafting a seamless online
          platform from scratch, ensuring optimal user experience,
          responsiveness, and intuitive navigation.
        </p>
        <p>Challenges:</p>
        <ul>
          <li>
            <p>- Creating a website from scratch</p>
          </li>
          <li>
            <p>- Ensuring optimal user experience</p>
          </li>
          <li>
            <p>- Responsive design</p>
          </li>
          <li>
            <p>- Intuitive navigation</p>
          </li>
        </ul>
        <h2>03. Design Process</h2>
        <Row>
          <Col xs={12} md={6}>
            <div className="wireframe-video">
              <p>
                The design goal is to provide a seamless shopping experience to
                users, while mirroring the essence of this brand - clean, bright
                and youthful.
              </p>
              <p>Solutions:</p>
              <ul>
                <li>
                  <p>
                    - Responsive Layouts: Employing CSS Grid and Flexbox, I
                    crafted responsive layouts that seamlessly adapted to
                    different screen sizes.
                  </p>
                </li>
                <li>
                  <p>
                    - Navigation Enhancement: Implementing off-canvas menus for
                    smaller screens and dropdown menus for larger screens, I
                    optimized navigation for enhanced accessibility.
                  </p>
                </li>
                <li>
                  <p>
                    - Image Display: Leveraging CSS techniques like object-fit
                    and lazy loading, I ensured optimal display of product
                    images across devices.
                  </p>
                </li>
                <li>
                  <p>
                    - Interactive Elements: Integrating React Bootstrap
                    components such as Accordion and Dropdown provided a more
                    dynamic browsing experience.
                  </p>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="wireframe-video">
              <video controls width="100%" autoPlay muted loop>
                <source src={wireframe} type="video/mp4" />
                Looks like your browser does not support videos.
              </video>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <div className="wireframe-video">
              <video width="100%" autoPlay muted loop>
                <source src={offcanvas} type="video/mp4" />
                Looks like your browser does not support videos.
              </video>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <img
              src={necklace}
              alt="branding"
              className="img-fluid align-items-center"
            />
          </Col>
        </Row>

        <h2>04. Development</h2>
        <Row>
          <Col xs={12} md={6}>
            <div className="wireframe-video">
              <video width="100%" autoPlay muted loop>
                <source src={board} type="video/mp4" />
                Looks like your browser does not support videos.
              </video>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="wireframe-video">
              <p>
                As the sole developer for thenujastore's e-commerce website, I
                adopted an Agile-inspired approach, combining iterative
                development with a focus on delivering incremental features.
                Task prioritization was based on project requirements and user
                feedback, allowing for flexibility and adaptability throughout
                the development process.
              </p>
              <p>Features:</p>
              <ul>
                <li>
                  <p>- Product Listings</p>
                </li>
                <li>
                  <p>- Promotional Elements</p>
                </li>
                <li>
                  <p>- Contact & Support</p>
                </li>
                <li>
                  <p>- Responsive Design</p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="wireframe-video">
            <p>Reflection:</p>
            <ul>
              <li>
                <p>
                  - As the sole developer, I encountered challenges such as
                  managing project scope and balancing feature development with
                  time constraints.
                </p>
              </li>
              <li>
                <p>
                  - Through self-directed learning and experimentation, I
                  overcame technical hurdles and gained valuable insights into
                  frontend and backend development best practices.
                </p>
              </li>
              <li>
                <p>
                  - Collaborating with online communities and seeking feedback
                  from peers helped me address challenges effectively and
                  continuously improve my skills as a developer.
                </p>
              </li>
            </ul>
          </div>
        </Row>
        <h2>05. Outcome</h2>
        <p>
          As a frontend developer, I played a pivotal role in elevating the
          brand's online presence, delivering a sophisticated platform that will
          resonate with customers. While the website isn't live yet, who knows,
          it might catch some waves in the future!
        </p>
        <div className="wireframe-video">
          <video width="100%" autoPlay muted loop>
            <source src={outcome} type="video/mp4" />
            Looks like your browser does not support videos.
          </video>
        </div>
        <h2>06. Next Steps</h2>
        <p>
          Following is a list of all future improvements I plan to do in this
          project:
        </p>
        <ul>
          <li>
            <p>
              - Add User Sign Up and Login functionality for personalized user
              experience.
            </p>
          </li>
          <li>
            <p>
              - Launching the website and gathering user feedback for
              improvements.
            </p>
          </li>
          <li>
            <p>
              - Integrating backend functionalities for dynamic rendering of
              data.
            </p>
          </li>
          <li>
            <p>
              - Adding customer reviews and ratings to enhance user engagement.
            </p>
          </li>
          <li>
            <p>
              - Adding customer reviews and ratings to enhance user engagement.
            </p>
          </li>
          <li>
            <p>
              - Implementing SEO strategies to enhance online visibility and
              drive traffic.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

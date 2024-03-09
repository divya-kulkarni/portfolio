import { Footer } from "./footer";
import { NavBar } from "./navbar";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
// import { annotate } from "rough-notation";
import "../styling/about.css";
import myPhoto from "../assets/images/divya.png";
import fuji from "../assets/images/about/fuji.jpg";
import film from "../assets/images/about/film2.jpg";
import heart from "../assets/images/about/heart.jpg";
import paint from "../assets/images/about/painting.jpg";

export const About = () => {
  const getNextPage = (path: string) => {
    window.location.pathname = path;
  };

  function ImgCarousel() {
    return (
      <Carousel fade>
        <Carousel.Item>
          <img src={myPhoto} alt="Divya Kulkarni" />
          <Carousel.Caption>
            <h3>Yours truly</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={fuji} alt="fuji" />
          <Carousel.Caption>
            <h3>Mt Fuji: 3770m</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={film} alt="boat" />
          <Carousel.Caption>
            <h3>Boat on Ishigaki Island</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={heart} alt="heart" />
          <Carousel.Caption>
            <h3>Pen Sketch</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  return (
    <>
      <NavBar />
      <div className="about">
        <Row>
          <Col sm={12} md={6} className="carousel">
            <img src={myPhoto} alt="Divya Kulkarni" className="my-photo" />
          </Col>
          <Col sm={12} md={6} className="about-text">
            <h2>Who is Divya?</h2>
            <p>
              Hey there, welcome to my corner of the internet! 🦄
              <br />
              <br /> I'm a full stack developer from India 🇮🇳 based in the
              electric city of Tokyo, Japan. 🇯🇵
              <br />
              <br />
              With a keen interest in frontend development, I love crafting
              beautiful and intuitive user experiences that leave a lasting
              impression. When I'm not coding, you can find me exploring the
              world of acrylic painting, or wandering the streets with my film
              camera, capturing the essence of life in Japan.
            </p>
            <p>
              And of course, my love affair with Mt. Fuji 🗻 continues to
              inspire me—whether it's incorporating its beauty into my
              artwork or simply gazing at its majestic silhouette on the
              horizon.
              <br />
              <br />
              Interested in my work? Explore my portfolio and discover how I
              merge creativity with code.👩🏻‍💻
              <br />
              <br />
              Feel free to reach out if you'd like to discuss tech, art, or the
              perfect spots for admiring Mount Fuji. Check out my{" "}
              <a href="https://vsco.co/dkbose98/gallery">VSCO</a> page. 📸
            </p>
            <div className="hero-action">
              <a
                href="/contact"
                className="action-btn"
                onClick={() => getNextPage("/contact")}
              >
                Say Hi 👋
              </a>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

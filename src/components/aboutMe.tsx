import { Footer } from "./footer";
import { NavBar } from "./navbar";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import "../assets/styling/about.css";
import myPhoto from "../assets/images/divya.png";
import fuji from "../assets/images/about/fuji.jpg";
import film from "../assets/images/about/film2.jpg";
import heart from "../assets/images/about/heart.jpg";

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
          <img src={fuji} alt="fuji"/>
          <Carousel.Caption>
            <h3>Mt Fuji: 3770m</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={film} alt="boat"/>
          <Carousel.Caption>
            <h3>Boat on Ishigaki Island</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={heart} alt="heart"/>
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
          <Col sm={12} md={5}>
            <ImgCarousel />
          </Col>
          <Col sm={12} md={7}>
            <p>
              Hey there, welcome to my corner of the internet!
              <br />
              <br /> I'm a full stack developer based in the bustling city of
              Tokyo, Japan. Frontend development is my passion—I thrive on
              creating seamless and engaging user experiences that leave a
              lasting impression.
              <br />
              <br />
              With a keen interest in frontend development, I love crafting
              beautiful and intuitive user experiences that leave a lasting
              impression. When I'm not coding, you can find me exploring the
              world of acrylic painting, where every brushstroke tells a story,
              or wandering the streets with my vintage film camera, capturing
              the essence of life in Tokyo.
              <br />
              <br />
              And of course, my love affair with Mt. Fuji continues to inspire
              me—whether it's incorporating its timeless beauty into my artwork
              or simply gazing at its majestic silhouette on the horizon.
              <br />
              <br />
              Curious about my work? Feel free to browse through my portfolio
              and see how I blend creativity with code to bring ideas to life.
              Feel free to explore and drop me a line if you fancy a chat about
              tech, art, or the best spots to view Fuji-san.
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

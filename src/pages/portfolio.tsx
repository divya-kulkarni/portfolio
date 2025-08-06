import {
  Animator,
  Fade,
  FadeIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn,
  ZoomIn,
  batch,
} from "react-scroll-motion";
import { HelloWorld } from "../components/helloWorld";
import { Hero } from "../components/hero";
import { Skills } from "../components/skills";
import { Projects } from "../components/projects";
import resume from "../assets/resume/divya-resume.pdf";
import "../styling/portfolio.css";

export const Portfolio = () => {
  const getNextPage = (path: string) => {
    window.location.pathname = path;
  };

  const handleClickScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ZoomInVar = batch(StickyIn(), FadeIn(), ZoomIn());

  return (
    <>
      <ScrollContainer>
        {/* Hello World */}
        <div id="hello">
          <ScrollPage>
            <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -300))}>
              <HelloWorld />
            </Animator>
          </ScrollPage>
        </div>
        {/* Hero */}
        <ScrollPage>
          <Animator animation={ZoomInVar}>
            <Hero />
          </Animator>
        </ScrollPage>
        <Skills />
        <Projects />
        <div className="navigation">
          <h2
            onClick={(e: React.MouseEvent<HTMLElement>) =>
              handleClickScroll("hello")
            }
          >
            Home
          </h2>

          <a href="/about">
            <h2>About</h2>
          </a>
          <a href="/contact">
            <h2 onClick={() => getNextPage("/contact")}>Contact</h2>
          </a>
          <a
            className="resume"
            href={resume}
            rel="noopener noreferrer"
            target="_blank"
          >
            <h2>Resume</h2>
          </a>
        </div>
      </ScrollContainer>
    </>
  );
};

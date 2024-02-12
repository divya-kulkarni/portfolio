import {
  Animator,
  Fade,
  FadeIn,
  MoveIn,
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
import { Skills } from "./skills";
import { Projects } from "./projects";
import resume from "../assets/resume/resume.pdf";
import "../assets/styling/portfolio.css";

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
  const SlideIn = batch(StickyIn(), FadeIn(), MoveIn(0, 1000));

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
        {/* Skills */}
        <ScrollPage>
          <Animator animation={FadeIn(50, 100)}>
            <Skills />
          </Animator>
        </ScrollPage>
        {/* Projects */}
        <Projects />
        {/* Navigation */}
        <ScrollPage className="portfolio">
          <Animator animation={SlideIn}>
            <h2
              onClick={(e: React.MouseEvent<HTMLElement>) =>
                handleClickScroll("hello")
              }
            >
              Home
            </h2>
            <h2 onClick={() => getNextPage("/about")}>About</h2>
            <h2 onClick={() => getNextPage("/contact")}>Contact</h2>
            <a
              className="resume"
              href={resume}
              rel="noopener noreferrer"
              target="_blank"
            >
              <h2>Resume</h2>
            </a>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
};

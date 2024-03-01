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
import { Skills } from "./skills";
import { Projects } from "./projects";
import resume from "../assets/resume/resume.pdf";
import "../styling/portfolio.css";

const handleClickScroll = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Navigation = () => {
  return (
    <div className="navigation">
      <h2 onClick={() => handleClickScroll("home")}>Home</h2>
      <h2>About</h2>
      <h2>Contact</h2>
      <h2>Resume</h2>
    </div>
  );
};

export const Portfolio = () => {
  const getNextPage = (path: string) => {
    window.location.pathname = path;
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
      </ScrollContainer>
      <Skills />
      <Projects />
      <Navigation />
    </>
  );
};

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

export const Portfolio = () => {
  const getNextPage = (path: string) => {
    window.location.pathname = path;
  };

  const ZoomInVar = batch(StickyIn(), FadeIn(), ZoomIn());
  const SlideIn = batch(StickyIn(), FadeIn(), MoveIn(0, 1000));

  return (
    <>
      <ScrollContainer>
        {/* Page 1 */}
        <ScrollPage>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -300))}>
            <HelloWorld />
          </Animator>
        </ScrollPage>
        {/* Page 2*/}
        <ScrollPage>
          <Animator animation={ZoomInVar}>
            <Hero />
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={FadeIn(50, 100)}>
            <Skills />
            <Projects />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={FadeIn(50, 100)}>
            <Projects />
          </Animator>
        </ScrollPage>

        {/* Navigation */}
        <ScrollPage className="navigation">
          <Animator animation={SlideIn}>
            <h2 onClick={() => getNextPage("/")}>Home</h2>
            <h2>Projects</h2>
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

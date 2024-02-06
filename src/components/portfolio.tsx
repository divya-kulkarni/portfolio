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
import resume from "../assets/resume/resume.pdf";

export const Portfolio = () => {
  const getNextPage = (path: string) => {
    window.location.pathname = path;
  };

  const ZoomInVar = batch(StickyIn(), FadeIn(), ZoomIn());
  return (
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
      {/* Navigation */}
      <ScrollPage className="navigation">
        <Animator animation={StickyIn()}>
          <Animator animation={MoveIn(0, 1000)}>
            <h2 onClick={() => getNextPage("/")}>Home</h2>
          </Animator>
          <Animator animation={MoveIn(-1000, 0)}>
            <h2>Projects</h2>
          </Animator>
          <Animator animation={MoveIn(1000, 0)}>
            <h2 onClick={() => getNextPage("/about")}>About</h2>
          </Animator>
          <Animator animation={MoveIn(1000, 0)}>
            <h2 onClick={() => getNextPage("/contact")}>Contact</h2>
          </Animator>
          <Animator animation={MoveIn(0, 1000)}>
            <a
              className="resume"
              href={resume}
              rel="noopener noreferrer"
              target="_blank"
            >
              <h2>Resume</h2>
            </a>
          </Animator>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

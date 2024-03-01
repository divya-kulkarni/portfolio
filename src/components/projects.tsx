import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../styling/projects.css";
import one from "../assets/images/screenshots/tns.png";
import two from "../assets/images/screenshots/portfolio.png";
import { useRef } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

const ShowProjects = ({ id }: { id: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 200);
  return (
    <>
      <section>
        <div ref={ref} className="snap-parent-y-mandatory">
          <img src={id} alt="Project mockup" />
        </div>
        <motion.h2 style={{ y }}>{id === one ? "#001" : "#002"}</motion.h2>
      </section>
    </>
  );
};

export const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h3>Recent Work</h3>
      {[one, two].map((id) => (
        <Row>
          <Col>
            <ShowProjects id={id} />
          </Col>
        </Row>
      ))}
    </div>
  );
};

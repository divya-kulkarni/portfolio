import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "../assets/styling/projectSlide.css";

export const ProjectSlide = () => {
  const target = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: target,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  return (
    <div className="project-slide" ref={target}>
      <div className="project-content sticky top-0 flex h-screen items-center over-flow-hidden">
        <motion.div style={{ x }} className="project">
          <p className="content">1</p>
        </motion.div>
        <motion.div style={{ x }} className="project">
          <p className="content">2</p>
        </motion.div>
        <motion.div style={{ x }} className="project">
          <p className="content">3</p>
        </motion.div>
        <motion.div style={{ x }} className="project">
          <p className="content">4</p>
        </motion.div>
      </div>
    </div>
  );
};

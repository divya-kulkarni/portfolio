import { useRef } from "react";
import {
  motion,
  useScroll,
  //   useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import "../styling/experience.css";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const workExperience = [
  {
    title: "Full Stack Developer",
    company: "Denso Corporation",
    description: [
      "Developed and implemented a real-time car data monitoring system, capturing and displaying live vehicle data on a ReactJS web application.",
      "Designed an intuitive dashboard interface to visualise key metrics including speed, fuel consumption, and engine status.",
      "Created scalable and efficient RESTful APIs utilising AWS Amplify, AppSync, ECS, ECR, Lambda, SES, DynamoDB, NodeJS, ReactJS, and TypeScript.",
      "Maintained automated tests, increasing software delivery efficiency and reducing deployment errors.",
      "Provided guidance and support to junior developers, helping them navigate challenges and obstacles, fostering professional growth and development within the team.",
      "Implemented mentoring feedback system to facilitate continuous improvement and personalized guidance for mentees.",
      "Facilitated effective communication and collaboration among English and Japanese-speaking team members, resulting in a cohesive work environment.",
      "Boosted morale by organizing regular team-building activities and fostering an inclusive environment where everyone feels valued.",
    ],
    year: "Jan '22-Present",
    website: "https://www.denso.com/global/en/",
  },
  {
    title: "Student Intern",
    company: "BluePineapple",
    description: [
      "Designed and implemented a web application dedicated to streamlining souvenir exchange processes.",
      "Proficient in a range of programming languages and technologies, including ReactJS, NodeJS, and MongoDB.",
      "Managed code repositories using Git, facilitating effective collaboration among team members and ensuring version control integrity.",
      "Conducted code reviews and provided constructive feedback to team members to maintain code quality and adherence to coding standards.",
      "Implemented Agile methodologies to ensure the systematic and timely completion of projects and tasks in alignment with specified requirements.",
    ],
    year: "Dec '20-Jun '21",
    website: "https://www.bluepineapple.io/",
  },
];

function WorkExperience({ experience }: { experience: any }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 400);

  return (
    <section>
      <div ref={ref} className="exp-content">
        <h3>{experience.title}</h3>
        <a href={experience.website} rel="noopener noreferrer" target="_blank">
          <h4>{experience.company}</h4>
        </a>
        <ul>
          {experience.description.map((desc: string, index: number) => (
            <li key={index}>→ {desc}</li>
          ))}
        </ul>
      </div>
      <motion.h2 style={{ y }}>{experience.year}</motion.h2>
    </section>
  );
}

export const Experience = () => {
  return (
    <div className="experience">
      {workExperience.map((experience) => (
        <WorkExperience key={experience.title} experience={experience} />
      ))}
    </div>
  );
};

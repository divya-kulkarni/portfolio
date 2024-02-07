import { Footer } from "./footer";
import { NavBar } from "./navbar";
import "../assets/styling/about.css";
import myPhoto from '../assets/images/divya.png'

export const About = () => {
  return (
    <>
      <NavBar />
      <div className="about">
        <h1>About Me</h1>
        <img src={myPhoto} alt="Divya Kulkarni" className="my-photo" />
        <p>
          I am a software engineer with a passion for creating innovative
          applications. I have experience in full-stack development, and I am
          proficient in JavaScript, TypeScript, React, Node.js, and PostgreSQL.
          I am a quick learner and always eager to learn new technologies. I am
          looking for a role where I can grow and contribute to a team.
        </p>
      </div>
      <Footer />
    </>
  );
};

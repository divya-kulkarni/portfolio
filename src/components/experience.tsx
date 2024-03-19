import "../styling/experience.css";

export const Experience = () => {
  return (
    <div className="experience">
      <h3>Work Experience</h3>
      <div className="denso">
        <span>
          <h4>Full Stack Developer</h4>
          <h5>January 2022 - Present</h5>
        </span>
        <a
          href="https://www.denso.com/global/en/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h5>Denso Corporation</h5>
        </a>
        <ul>
          <li>
            <p>
              → Developed and implemented a real-time car data monitoring
              system, capturing and displaying live vehicle data on a ReactJS
              web application.
            </p>
          </li>
          <li>
            <p>
              → Designed an intuitive dashboard interface to visualise key
              metrics including speed, fuel consumption, and engine status.
            </p>
          </li>
          <li>
            <p>
              → Created scalable and efficient RESTful APIs utilising AWS
              Amplify, AppSync, ECS, ECR, Lambda, SES, DynamoDB, NodeJS,
              ReactJS, and TypeScript.
            </p>
          </li>
          <li>
            <p>
              → Maintained automated tests, increasing software delivery
              efficiency and reducing deployment errors.
            </p>
          </li>
          <li>
            <p>
              → Provided guidance and support to junior developers, helping them
              navigate challenges and obstacles, fostering professional growth
              and development within the team.
            </p>
          </li>
          <li>
            <p>
              → Implemented mentoring feedback system to facilitate continuous
              improvement and personalized guidance for mentees.
            </p>
          </li>
          <li>
            <p>
              → Facilitated effective communication and collaboration among
              English and Japanese-speaking team members, resulting in a
              cohesive work environment.
            </p>
          </li>
          <li>
            <p>
              → Boosted morale by organizing regular team-building activities
              and fostering an inclusive environment where everyone feels
              valued.
            </p>
          </li>
        </ul>
      </div>
      <div className="bluepineapple">
        <span>
          <h4>Student Intern</h4>
          <h5>December 2020 - June 2021</h5>
        </span>
        <a
          href="https://www.bluepineapple.io/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h5>BluePineapple</h5>
        </a>
        <ul>
          <li>
            <p>
              → Designed and implemented a web application dedicated to
              streamlining souvenir exchange processes.
            </p>
          </li>
          <li>
            <p>
              → Proficient in a range of programming languages and technologies,
              including ReactJS, NodeJS, and MongoDB.
            </p>
          </li>
          <li>
            <p>
              → Managed code repositories using Git, facilitating effective
              collaboration among team members and ensuring version control
              integrity.
            </p>
          </li>
          <li>
            <p>
              → Conducted code reviews and provided constructive feedback to
              team members to maintain code quality and adherence to coding
              standards.
            </p>
          </li>
          <li>
            <p>
              → Implemented Agile methodologies to ensure the systematic and
              timely completion of projects and tasks in alignment with
              specified requirements.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

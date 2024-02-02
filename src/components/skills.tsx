import '../assets/styling/skills.css';
import navIcon3 from '../assets/images/nav-icon3.svg';

export const Skills = () => {
    return (
        <div className="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                <div className="frontend-skills">
                    <h4>Frontend Skills</h4>
                    <span><img src={navIcon3} alt=""></img></span>
                    <span><img src={navIcon3} alt=""></img></span>
                    <span><img src={navIcon3} alt=""></img></span>
                    <span><img src={navIcon3} alt=""></img></span>
                    <span><img src={navIcon3} alt=""></img></span>
                </div>
                <div className="backend-skills">
                    <h4>Backend Skills</h4>
                    <span><img src={navIcon3} alt=""></img></span>
                    <span><img src={navIcon3} alt=""></img></span>
                    <span><img src={navIcon3} alt=""></img></span>
                    <span><img src={navIcon3} alt=""></img></span>
                    <span><img src={navIcon3} alt=""></img></span>
                </div>
                <div className="other-skills">
                    <h4>Other Skills</h4>
                    <span><img src={navIcon3} alt=""></img></span>
                    <span><img src={navIcon3} alt=""></img></span>
                    <span><img src={navIcon3} alt=""></img></span>
                    <span><img src={navIcon3} alt=""></img></span>
                    <span><img src={navIcon3} alt=""></img></span>
                </div>
            </div>
        </div>
    );
};
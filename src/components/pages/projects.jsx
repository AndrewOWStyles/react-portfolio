import React from "react";
import '../styles/projects.css';
import jobSearch from '../images/jobSearch.png';
import password from '../images/password-gen.png';
import workday from '../images/workday-schedule.png';
import { FaGithub } from 'react-icons/fa';


function About() {
  return (
    <div className="projectContainer">
      <div className="projectHeader row">
        <div className="column">
          <h1>My Projects</h1>
        </div> 
      </div>
      <div className="row">
        <div className="column">
          <div className="projectGrid">
              <div className="projectGridItem">
                <h3>
                  JobsImage Hunt
                </h3>
                <a href="https://andrewowstyles.github.io/Project-one/" target="_blank" rel="noreferrer">
                  <img className="project" src={jobSearch} alt="job search" />
                </a>
                <a  href="https://github.com/AndrewOWStyles/Project-one" target="_blank" rel="noreferrer">
                  <FaGithub className="githubIcon"/>
                </a>
              </div>
              <div className="projectGridItem">
                <h3>
                  Password Generator
                </h3>
                <a href="https://andrewowstyles.github.io/Password-Generator/" target="_blank" rel="noreferrer">
                  <img className="project" src={password} alt="password generator" />
                </a>
                <a  href="https://github.com/AndrewOWStyles/Password-Generator" target="_blank" rel="noreferrer">
                  <FaGithub className="githubIcon"/>
                </a>
              </div>
              <div className="projectGridItem">
                <h3>
                  Work Day Scheduler
                </h3>
                <a href="https://andrewowstyles.github.io/Work-Day_Scheduler/" target="_blank" rel="noreferrer">
                  <img className="project" src={workday} alt="work day schedule" />
                </a>
                <a  href="https://github.com/AndrewOWStyles/Work-Day_Scheduler" target="_blank" rel="noreferrer">
                  <FaGithub className="githubIcon"/>
                </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default About;

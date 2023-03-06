import React from 'react';
import '../styles/contact.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



function Contact() {
  const emailAddress = 'example@example.com';
  return (
    <div className="projectContainer">
    <div className="projectHeader row">
      <div className="column">
      <h1>Contact Page</h1>
      <p>
        Use the links and Information below to stay in contact with me or browse my work!
      </p>
      </div> 
    </div>
    <div className="row">
      <div className="column">
        <div className="projectGrid">
            <div className="projectGridItem">
              <h3>Github</h3>
              <a  href="https://github.com/AndrewOWStyles" target="_blank" rel="noreferrer">
                  <FaGithub className="githubIcon contactIcon"/>
              </a>
            </div>
            <div className="projectGridItem">
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="githubIcon contactIcon"/>
              </a>
            </div>
            <div className="projectGridItem">
              <h3>Email</h3>
              <a  href={`mailto:${emailAddress}`}>
                <FontAwesomeIcon className="githubIcon contactIcon" icon={faEnvelope} />
              </a>
            </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Contact;

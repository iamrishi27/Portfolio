import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <header className="header" data-aos="fade-down">
      <h1>Rushikesh Sanap</h1>
      <p>Full Stack Developer | Electronics Engineer</p>
      <a href="/SANAP_RUSHIKESH_RESUME1.pdf" download="Rushikesh_Sanap_Resume.pdf" className="resume-link">Download Resume</a>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/rushikesh-sanap-rs/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/lamrishi27" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.instagram.com/iamrishi_27/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://x.com/iamrishi_27" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </header>
  );
}

export default Home;
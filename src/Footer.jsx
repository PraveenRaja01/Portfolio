import React from 'react';
import SoundManager from './SoundManager';

function Footer() {
  const handleHover = () => {
    SoundManager.playHover();
  };

  const handleClick = () => {
    SoundManager.playClick();
  };

  return (
    <footer>
      <div className="footer-content">
        <p className="footer-brand" onMouseEnter={handleHover}>PRAVEEN<span>.</span></p>
        <p className="footer-copy">&copy; 2026 Praveen Raja. Built with passion & code.</p>
        <div className="footer-links">
          <a href="#hero" onMouseEnter={handleHover} onClick={handleClick}>Home</a>
          <a href="#projects" onMouseEnter={handleHover} onClick={handleClick}>Projects</a>
          <a href="#contact" onMouseEnter={handleHover} onClick={handleClick}>Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
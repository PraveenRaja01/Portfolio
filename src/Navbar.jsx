import React, { useState, useEffect } from 'react';
import SoundManager from './SoundManager';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll('section[id]');
      const scrollYOffset = window.scrollY + 120;

      sections.forEach((sec) => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (scrollYOffset >= top && scrollYOffset < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const toggleSound = () => {
    const nextVal = !soundEnabled;
    setSoundEnabled(nextVal);
    SoundManager.setEnabled(nextVal);
    if (nextVal) {
      setTimeout(() => {
        SoundManager.playSuccess();
      }, 50);
    }
  };

  const handleLinkHover = () => {
    SoundManager.playHover();
  };

  const handleLinkClick = () => {
    SoundManager.playClick();
    closeMenu();
  };

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-brand" onMouseEnter={handleLinkHover} onClick={handleLinkClick}>
        PRAVEEN<span>.</span>
      </div>
      <button 
        className={`hamburger ${menuOpen ? 'open' : ''}`} 
        aria-label="Toggle menu" 
        onClick={() => { SoundManager.playClick(); setMenuOpen(!menuOpen); }}
      >
        <span></span><span></span><span></span>
      </button>
      <div className={`nav-right-container ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          {['hero', 'about', 'projects', 'skills', 'experience', 'resume', 'contact'].map((link) => (
            <li key={link}>
              <a 
                href={`#${link}`} 
                onClick={handleLinkClick}
                onMouseEnter={handleLinkHover}
                className={activeSection === link ? 'active-link' : ''}
              >
                {link === 'hero' ? 'Home' : link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <button 
          className={`audio-toggle ${soundEnabled ? 'enabled' : ''}`} 
          onClick={toggleSound}
          onMouseEnter={handleLinkHover}
          aria-label="Toggle audio effects"
        >
          {soundEnabled ? '🔈 FX ON' : '🔇 FX OFF'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
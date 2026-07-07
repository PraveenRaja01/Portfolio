import React, { useMemo } from 'react';
import Terminal from './Terminal';
import SoundManager from './SoundManager';

function Hero() {
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
      animationDuration: 8 + Math.random() * 12 + 's',
      animationDelay: Math.random() * -10 + 's', // negative delay to start immediately
      size: 1 + Math.random() * 3 + 'px',
    }));
  }, []);

  const handleHover = () => {
    SoundManager.playHover();
  };

  const handleClick = () => {
    SoundManager.playClick();
  };

  return (
    <section id="hero">
      <div className="hero-bg">
        <div className="grid-overlay"></div>
        <div className="particles">
          {particles.map((p) => (
            <div 
              key={p.id} 
              className="particle" 
              style={{ 
                left: p.left, 
                top: p.top, 
                width: p.size, 
                height: p.size, 
                animationDuration: p.animationDuration, 
                animationDelay: p.animationDelay 
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="hero-grid">
        <div className="hero-content">
          <p className="hero-tag">&#9654; SYSTEM INITIALIZED</p>
          <div className="hero-title-container">
            <div className="hero-glow-blob"></div>
            <h1 className="hero-title">PRAVEEN<br /><span>RAJA</span></h1>
          </div>
          <p className="hero-subtitle">Game Developer & Programmer</p>
          <div className="hero-cta">
            <a 
              href="#projects" 
              className="btn btn-primary"
              onMouseEnter={handleHover}
              onClick={handleClick}
            >
              View My Games
            </a>
            <a 
              href="#contact" 
              className="btn btn-outline"
              onMouseEnter={handleHover}
              onClick={handleClick}
            >
              Get In Touch
            </a>
          </div>
        </div>
        <Terminal />
      </div>
    </section>
  );
}

export default Hero;
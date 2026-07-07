import React from 'react';

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// ABOUT ME</span>
          <h2>Who Am I?</h2>
        </div>
        <div className="about-text">
          <p className="about-lead">I'm a passionate <span className="highlight">Game Developer</span> who transforms ideas into immersive digital experiences.</p>
          <p>From crafting intricate game mechanics to designing captivating worlds, I bring creativity and technical expertise together. I specialize in building games that keep players engaged and coming back for more.</p>
          <p>I enjoy solving complex problems, designing engaging mechanics, and constantly learning to create better player experiences.</p>
          <div className="about-stats" style={{ justifyContent: 'center' }}>
            <div className="stat-card">
              <span className="stat-number">3+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Coding</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">∞</span>
              <span className="stat-label">Passion for Games</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
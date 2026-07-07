import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  const [modal, setModal] = useState({ open: false, url: '', title: '', isLocal: false });
  const [videoError, setVideoError] = useState(false);

  // Scroll Reveal Observer (Fade Ins and Skill Bars)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('skill-category')) {
              entry.target.querySelectorAll('.skill-fill').forEach((bar) => {
                bar.style.width = bar.dataset.width + '%';
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll('.about-avatar-frame, .about-text, .project-card, .skill-category, .timeline-item, .contact-info, .section-header, .resume-wrapper')
      .forEach((el, i) => {
        el.classList.add('fade-in');
        if (i % 3 === 1) el.classList.add('fade-in-delay-1');
        if (i % 3 === 2) el.classList.add('fade-in-delay-2');
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, []);

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeVideo();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openVideo = (url, title) => {
    const isLocal = url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg');
    setModal({ open: true, url, title, isLocal });
    setVideoError(false);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setModal({ open: false, url: '', title: '', isLocal: false });
    setVideoError(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects openVideo={openVideo} />

      {/* SKILLS */}
      <section id="skills">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">// EXPERTISE</span>
            <h2>Skills & Tools</h2>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <h3><span>&#9672;</span> Roles & Expertise</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Game Programmer</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" data-width="90"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Game System Designer</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" data-width="85"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Level Designer</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" data-width="88"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3><span>&#9672;</span> Engines & Architectures</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Unity Engine & C#</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" data-width="90"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Java </span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" data-width="100"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Mirror in Unity (Multiplayer)</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" data-width="85"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Procedural Animation</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" data-width="85"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">State Machines</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" data-width="90"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">// JOURNEY</span>
            <h2>Experience Quest Log</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-body">
                <div className="timeline-date">2025</div>
                <h3>Started Learning Game Development</h3>
                <p className="timeline-role">Self-Taught Creator</p>
                <p className="timeline-desc">Began journey into interactive media. Studied Unity, C#, design patterns, and built foundations through online resources, building multiple small prototypes.</p>
              </div>
            </div>
            <div className="timeline-item timeline-current">
              <div className="timeline-marker"></div>
              <div className="timeline-body">
                <div className="timeline-date">Present <span className="timeline-badge">Active Quest</span></div>
                <h3>Graduate Engineer Trainee</h3>
                <p className="timeline-role">Game Development Intern</p>
                <p className="timeline-desc">Developing gameplay modules, programming robust features, designing layout concepts, and publishing game titles in a professional studio setup.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESUME */}
      <section id="resume">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">// ARCHIVE</span>
            <h2>Developer Dossier</h2>
          </div>
          <div className="resume-wrapper">
            <p className="resume-desc" style={{ marginBottom: '2.5rem', color: 'var(--text-secondary)' }}>
              Download my complete professional resume detailing my technical credentials, project milestones, and academic history.
            </p>
            <a href="/Praveen_R_Resume.pdf" download className="btn btn-primary btn-resume">
              <span className="resume-icon">&#8659;</span> Download Resume
            </a>
            <p className="resume-note" style={{ marginTop: '1.2rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              PDF format &nbsp;&#183;&nbsp; Updated 2026
            </p>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />

      {/* VIDEO MODAL */}
      <div className={`video-modal ${modal.open ? 'open' : ''}`} role="dialog" aria-modal="true">
        <div className="video-backdrop" onClick={closeVideo}></div>
        <div className="video-modal-content">
          <div className="video-modal-header">
            <span className="video-modal-title">{modal.title}</span>
            <button className="video-close" onClick={closeVideo} aria-label="Close modal">&#10005;</button>
          </div>
          <div className="video-wrapper">
            {modal.isLocal ? (
              videoError ? (
                <div className="video-placeholder-container">
                  <span className="video-placeholder-icon">🎬</span>
                  <p className="video-placeholder-title">Gameplay Video Not Loaded</p>
                  <p className="video-placeholder-desc">
                    To watch this gameplay demonstration, please make sure you copy your local video file to the <strong>public/</strong> directory of this project:
                  </p>
                  <p className="video-placeholder-path">public/{modal.url}</p>
                </div>
              ) : (
                <video 
                  src={modal.url} 
                  controls 
                  playsInline 
                  autoPlay 
                  onError={() => setVideoError(true)}
                  style={{ display: 'block', width: '100%', borderRadius: '8px' }}
                />
              )
            ) : (
              <iframe 
                src={modal.url ? `${modal.url}?autoplay=1&rel=0` : ''} 
                frameBorder="0" 
                allowFullScreen 
                style={{ display: 'block', width: '100%', height: '400px', borderRadius: '8px' }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
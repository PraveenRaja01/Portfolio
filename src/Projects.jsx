import React from 'react';
import { projectsData } from './data/projects';
import SoundManager from './SoundManager';

function Projects({ openVideo }) {
  const handleHover = () => {
    SoundManager.playHover();
  };

  const handleClick = () => {
    SoundManager.playClick();
  };

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// MY WORK</span>
          <h2>Featured Projects</h2>
        </div>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div className="project-card" key={project.id}>
              <div 
                className="project-thumbnail" 
                style={{ backgroundImage: `url(.${project.thumbnail})` }}
              >
                <div 
                  className="project-overlay" 
                  onClick={() => { handleClick(); openVideo(project.video, `${project.title} — Demo`); }}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="project-icon">&#9658;</div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-number">{project.number}</div>
                <h3>{project.title}</h3>
                <p className="project-genre">{project.genre}</p>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links" style={{ display: 'flex', gap: '1rem' }}>
                  {project.playLink && (
                    <a 
                      href={project.playLink} 
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-primary"
                      onMouseEnter={handleHover}
                      onClick={handleClick}
                    >
                      &#9654; Play
                    </a>
                  )}
                  <button 
                    className="btn btn-sm btn-video" 
                    onClick={() => openVideo(project.video, `${project.title} — Demo`)}
                    onMouseEnter={handleHover}
                  >
                    &#9654; Watch Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
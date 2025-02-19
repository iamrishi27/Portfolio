import React from 'react';

function Project({ project }) {
  return (
    <div className="project">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p><strong>Technologies:</strong> {project.technologies}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
}

export default Project;
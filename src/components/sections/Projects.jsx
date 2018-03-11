import React from 'react';

import './Projects.css'

const Projects = () => {
  return (
    <section className="section-projects">
      <ul className="projects-showcase clearfix">
        {[1, 1, 1, 1, 1, 1, 1, 1].map(e =>
          <li>
            <image className="project-image">
              <img src="/me/img/mediare.png" />
            </image>
          </li>
        )}
      </ul>
    </section>
  );
};

export default Projects;

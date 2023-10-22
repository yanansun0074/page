import React from "react";
import ProjectItem from "../components/ProjectItem";
import { projectList } from "../helpers/ProjectList";

import "../styles/Project.css";

function Portfolio() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {projectList.map((project) => {
          return (
            <ProjectItem
              route={project.route}
              name={project.name}
              image={project.image}
              date={project.date}
              intro={project.intro}
              skill={project.skill}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;

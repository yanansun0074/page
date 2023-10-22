import React from "react";
// 1. get what id is in the path
import { useParams } from "react-router-dom";
// 2. Get project from projectList
import { projectList } from "../helpers/ProjectList.js";
import Meta from "../components/Meta.js";

import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  // 1.
  const { route } = useParams();
  // 2.
  const project = projectList.find((p) => p.route === route);

  // return div;

  return (
    <div className="projectDetail">
      <h1> {project.name} </h1>
      <img src={project.image} alt="project" />
      <Meta name={project.name} />
    </div>
  );
}

export default ProjectDisplay;

import React from "react";
// When onClick, navigate to another page
import { useNavigate } from "react-router-dom";

function ProjectItem({ route, image, name, intro, date, skill }) {
  // Create a function called navigate == useNavigate();
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        // Which page to go to
        // Set each projectItem's unique id in Projects.js
        // Put the unique route path after project/
        navigate("/project/" + route);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
      <p className="intro"> {intro} </p>
      <p className="date"> {date} </p>
      <p className="skill">{skill}</p>
    </div>
  );
}

export default ProjectItem;

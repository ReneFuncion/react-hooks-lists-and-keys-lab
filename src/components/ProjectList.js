import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects[0]);

  function callbackProjectItem(project) {
    const { id, name, about, technologies } = project;
    return (
      <ProjectItem
        key={id}
        name={name}
        about={about}
        technologies={technologies}
      />
    );
  }

  const myProjects = projects.map(callbackProjectItem);

  return (
    <div id="projects">
      <h2>My Projects......</h2>
      <div id="project-list">{myProjects}</div>
    </div>
  );
}

export default ProjectList;

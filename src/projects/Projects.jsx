import React from "react";
import s from "./Projects.module.scss";
import Project from "./Project";
import Title from "../Title/Title";
import Bounce from "react-reveal/Bounce";
import { projectsData } from "./projectsConstants";

console.log("projectsData", projectsData);

function Projects() {
  return (
    // <Bounce left cascade>
    <div id={"Projects"} className={s.projects}>
      <div className={s.container}>
        <Title title={"PROJECTS"} />
        <Bounce left cascade className={s.projectsItems}>
          {projectsData.map(
            ({ title, backgroundImage, codeLink, link, description }) => (
              <Project
                title={title}
                img={backgroundImage}
                codeLink={codeLink}
                link={link}
                description={description}
                key={title}
              />
            )
          )}
        </Bounce>
      </div>
    </div>
  );
}

export default Projects;

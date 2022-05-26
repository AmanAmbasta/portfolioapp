import { useEffect, useState } from "react";
import "./project.css";
import ProjectsCard from "../project-card/ProjectCard";
function Projects() {
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    if (process.env.REACT_APP_PROJECT_URL) {
      fetch(process.env.REACT_APP_PROJECT_URL)
        .then((resp) => resp.json())
        .then((list) => setProjectList([...projectList, list]));
    }
  });

  return (
    <div className="project-wrapper center-conatiner">
      <div className="heading-main">Projects</div>
      <main className="projects flex">
        {projectList.map(
          ({ projectImage, projectTitle, sourceCodeLink, previewLink }) => (
            <ProjectsCard
              projectImage={projectImage}
              projectTitle={projectTitle}
              sourceCodeLink={sourceCodeLink}
              previewLink={previewLink}
            />
          )
        )}
      </main>
    </div>
  );
}

export default Projects;

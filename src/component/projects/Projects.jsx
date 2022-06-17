import { useEffect, useState } from "react";
import "./project.css";
import ProjectsCard from "../project-card/ProjectCard";
function Projects() {
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    let url = process.env.REACT_APP_PROJECT_URL;
    fetch(url, {
      mode: "no-cors",
    })
      .then((resp) => resp.text())
      .then((list) => setProjectList([list]));
  }, []);

  return (
    <div className="project-wrapper center-conatiner">
      <div className="heading-main">Projects</div>
      <main className="projects flex">
        {projectList.map(
          ({ projectImage, projectTitle, sourceCodeLink, previewLink }, id) => (
            <ProjectsCard
              key={id}
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

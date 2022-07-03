import "./project.css";
import ProjectsCard from "../project-card/ProjectCard";
import proj from "../../projectList.json"
function Projects() {
   return (
    <div className="project-wrapper center-conatiner">
      <div className="heading-main">Projects</div>
      <main className="projects flex">
        {proj.map(
          ({ projectImage, projectTitle, sourceCodeLink, previewLink }, id) => {
            return (
              <ProjectsCard
                key={id}
                projectImage={projectImage}
                projectTitle={projectTitle}
                sourceCodeLink={sourceCodeLink}
                previewLink={previewLink}
              />
            );
          }
        )}
      </main>
    </div>
  );
}

export default Projects;

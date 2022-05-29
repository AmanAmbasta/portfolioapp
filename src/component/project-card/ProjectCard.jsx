import "./projectCard.css";
function ProjectCard({
  projectImage = "/src/assets/project.png",
  projectTitle = "demo porject",
  sourceCodeLink = "#source",
  previewLink = "#preview",
}) {
  if (projectTitle === "demo porject") {
    projectImage = "https://storage.googleapis.com/kaman-main/static-files/portfolioapp/img/demo-project.png" 
  }

  return (
    <div className="project-card-wrapper">
      <img src={projectImage} alt="" className="project-img" />
      <div className="project-info">
        <div className="project-title">{projectTitle} </div>
        <div className="action-links">
          <a href={sourceCodeLink} className="btn" title="Source code">
            <span className="material-icons material-symbols-sharp">link</span>
          </a>
          <a href={previewLink} className="btn" title="Preview">
            <span className="material-icons preview material-symbols-sharp">
              visibility
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

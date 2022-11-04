// import {
//   BackgroundImage,
//   Title,
//   Description,
//   ProjectSectionItemContainer,
// } from "./projects-section-item.styles";
import "./projects-section-item.styles.scss";

const ProjectsSectionItem = ({ project }) => {
  const { imageUrl, title, description, links } = project;

  return (
    <div className="projects-section-item-container">
      <img src={imageUrl} alt={title + " image"} />
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectsSectionItem;

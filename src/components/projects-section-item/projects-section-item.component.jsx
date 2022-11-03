import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  ProjectSectionItemContainer,
} from "./projects-section-item.styles";

const ProjectsSectionItem = ({ project }) => {
  const { imageUrl, title, route, description, links } = project;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <ProjectSectionItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Check Now</p>
      </Body>
    </ProjectSectionItemContainer>
  );
};

export default ProjectsSectionItem;

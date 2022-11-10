import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  ProjectSectionItemContainer,
  Title,
  Description,
  Links,
  LinkItem,
} from "./projects-section-item.styles";
import { FaGithub } from "react-icons/fa";

// type ProjectProps = {
//   project: Project;
// };

const ProjectsSectionItem = ({ project }) => {
  const { title, description, links } = project;

  return (
    <ProjectSectionItemContainer>
      <Title>
        <h2>{title}</h2>
      </Title>
      <Description>
        <p>{description}</p>
      </Description>
      <Links>
        <LinkItem>
          <span>github repo</span>
          <FontAwesomeIcon icon="fa-brands fa-square-github" />
        </LinkItem>
        <LinkItem>
          <span>live version</span>
          <FontAwesomeIcon icon="fa-solid fa-browser" />
        </LinkItem>
      </Links>
    </ProjectSectionItemContainer>
  );
};

export default ProjectsSectionItem;

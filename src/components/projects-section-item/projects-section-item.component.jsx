import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

import {
  ProjectSectionItemContainer,
  Title,
  Description,
  Links,
  UsedTechnologies,
} from "./projects-section-item.styles";

// type ProjectProps = {
//   project: Project;
// };

const ProjectsSectionItem = ({ project }) => {
  const { title, description, links, usedTechnologies } = project;

  return (
    <ProjectSectionItemContainer>
      <Title>
        <h2>{title}</h2>
      </Title>
      <Description>
        <p>{description}</p>
      </Description>
      <Links>
        <a target="_blank" rel="noreferrer" href={links[1]}>
          <span>github repo</span>
          <FontAwesomeIcon icon={brands("github")} />
        </a>

        <a target="_blank" rel="noreferrer" href={links[0]}>
          <span>live version</span>
          <FontAwesomeIcon icon={brands("chrome")} />
        </a>
      </Links>
      <UsedTechnologies>
        <span>stack</span>:{" " + usedTechnologies}
      </UsedTechnologies>
    </ProjectSectionItemContainer>
  );
};

export default ProjectsSectionItem;

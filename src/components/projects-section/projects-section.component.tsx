import { Key } from "react";
import ProjectsSectionItem from "../projects-section-item/projects-section-item.component";

import "./projects-section.styles.scss";

export type Project = {
  id: Key;
  title: string;
  imageUrl: string;
  description: string;
  links: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "clothing-store",
    imageUrl: "",
    description:
      "A clothing store web project which I built in my React learning journey",
    links: [
      "https://clothingstoreguizo.netlify.app/",
      "https://github.com/guizo792/clothing-store",
    ],
  },
  {
    id: 2,
    title: "tourzApp",
    imageUrl: "",
    description:
      "A web app that shows available tours details and offers booking one",
    links: [
      "https://tourzapp.herokuapp.com/",
      "https://github.com/guizo792/tourzApp",
    ],
  },
  {
    id: 3,
    title: "CRM App",
    imageUrl: "",
    description: "A classroom management and reservation application",
    links: ["", "https://github.com/guizo792/CRM-App"],
  },
  {
    id: 4,
    title: "products manager",
    imageUrl: "",
    description:
      "A web application to manage(add, delete, update, get) products",
    links: ["", "https://github.com/guizo792/products_manager"],
  },
];

const ProjectsSection = () => {
  return (
    <div className="projects-section-container">
      <h1 className="section-title">Projects</h1>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectsSectionItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;

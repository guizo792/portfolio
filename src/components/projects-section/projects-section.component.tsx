import { Key } from "react";
import ProjectsSectionItem from "../projects-section-item/projects-section-item.component";

import "./projects-section.styles.scss";

export type Project = {
  id: Key;
  title: string;
  description: string;
  links: string[];
  usedTechnologies: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "clothing-store",
    description:
      "A clothing store web project which I built in my React learning journey",
    links: [
      "https://clothingstoreguizo.netlify.app/",
      "https://github.com/guizo792/clothing-store",
    ],
    usedTechnologies:
      "typeScript | javaScript | reactJs | redux | sass | firebase",
  },
  {
    id: 2,
    title: "tourzApp",
    description:
      "A web app that shows available tours details and offers booking one",
    links: [
      "https://tourzapp.herokuapp.com/",
      "https://github.com/guizo792/tourzApp",
    ],
    usedTechnologies:
      "javaScript | nodeJs | mongoDB | mongoose| restAPI | html | css | pug",
  },
  {
    id: 3,
    title: "CRM App",
    description: "A classroom management and reservation application",
    links: ["", "https://github.com/guizo792/CRM-App"],
    usedTechnologies: "javascript | html | css | mysql | jwt",
  },
  {
    id: 4,
    title: "products manager",
    description:
      "A web application to manage(add, delete, update, get) products",
    links: ["", "https://github.com/guizo792/products_manager"],
    usedTechnologies: "java | servlet | jsp | jstl | bootstrap | tomcat",
  },
  {
    id: 5,
    title: "my portfolio",
    description: "My portfolio where I listed details about me",
    links: ["", "https://github.com/guizo792/portfolio"],
    usedTechnologies: "typeScript | javaScript | reactJs | sass",
  },
];

const ProjectsSection = () => {
  return (
    <div className="projects-section-container" id="projects">
      <h1 className="section-title education-section-title">Projects</h1>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectsSectionItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;

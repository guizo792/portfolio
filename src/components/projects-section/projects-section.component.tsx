import { Key } from "react";
import ProjectsSectionItem from "../projects-section-item/projects-section-item.component";

import "./directory.styles.scss";

export type Project = {
  id: Key;
  title: string;
  imageUrl: string;
  description: string;
  links: string[];
};

const projects: Project[] = [
  //   {
  //     id: 1,
  //     title: "tourzApp",
  //     imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  //     route: "shop/hats",
  //   },
  //   {
  //     id: 2,
  //     title: "jackets",
  //     imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  //     route: "shop/jackets",
  //   },
  //   {
  //     id: 3,
  //     title: "sneakers",
  //     imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  //     route: "shop/sneakers",
  //   },
  //   {
  //     id: 4,
  //     title: "womens",
  //     imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  //     route: "shop/womens",
  //   },
  //   {
  //     id: 5,
  //     title: "mens",
  //     imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  //     route: "shop/mens",
  //   },
];

const ProjectsSection = () => {
  return (
    <div className="directory-container">
      {projects.map((project) => (
        <ProjectsSectionItem key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsSection;

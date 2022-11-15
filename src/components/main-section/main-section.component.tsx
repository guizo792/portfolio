import { Fragment } from "react";

import HeroSection from "../hero-section/hero-section.component";
import AboutSection from "../about-section/about-section.component";
import EducationSection from "../education-section/education-section.component";
import ProjectsSection from "../projects-section/projects-section.component";
import ExperiencesSection from "../experiences-section/experiences-section.component";
import ContactSection from "../contact-section/contact-section.component";

import { MainContainer } from "./main-section.styles";
import CopyrightSection from "../copyrights-section/copyrights-section.component";

export const MainSection = () => {
  return (
    <Fragment>
      <MainContainer className="section">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <ExperiencesSection />
        <ContactSection />
        <CopyrightSection />
      </MainContainer>
    </Fragment>
  );
};

export default MainSection;

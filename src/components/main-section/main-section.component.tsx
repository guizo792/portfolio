import { Fragment } from "react";

import HeroSection from "../hero-section/hero-section.component";
import AboutSection from "../about-section/about-section.component";
import EducationSection from "../education-section/education-section.component";

import { MainContainer } from "./main-section.styles";

export const MainSection = () => {
  return (
    <Fragment>
      <MainContainer>
        <HeroSection />
        <AboutSection />
        <EducationSection />
      </MainContainer>
    </Fragment>
  );
};

export default MainSection;
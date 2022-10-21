import { Fragment } from "react";

import HeroSection from "../hero-section/hero-section.component";
import AboutSection from "../about-section/about-section.component";

import { MainContainer } from "./main-section.styles";

export const MainSection = () => {
  return (
    <Fragment>
      <MainContainer>
        <HeroSection />
        <AboutSection />
        {/* <EducationSection /> */}
      </MainContainer>
    </Fragment>
  );
};

document.querySelector(".gotop-btn")?.addEventListener("click", () =>
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
);

export default MainSection;

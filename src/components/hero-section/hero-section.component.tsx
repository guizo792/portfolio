import {
  HeroSectionContainer,
  ImageSideContainer,
  InfoSideContainer,
  InfoSideTitle,
  InfoSideTitleSecondary,
  InfoSideTitleTertiary,
} from "./hero-section.styles";

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <ImageSideContainer>
        <img src={require("../../template.png")} alt="that's me" />
      </ImageSideContainer>
      <InfoSideContainer>
        <InfoSideTitle>Hello world!</InfoSideTitle>
        <InfoSideTitleSecondary>
          <span>I am </span> <span className="name">ABDELLAH</span> GUIZOUL
        </InfoSideTitleSecondary>
        <InfoSideTitleTertiary>
          A future software engineer
        </InfoSideTitleTertiary>
      </InfoSideContainer>
    </HeroSectionContainer>
  );
};

export default HeroSection;

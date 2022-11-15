import {
  HeroSectionContainer,
  ImageSideContainer,
  InfoSideContainer,
  InfoSideTitle,
  InfoSideTitleSecondary,
  InfoSideTitleTertiary,
  Slogan,
} from "./hero-section.styles";

const HeroSection = () => {
  return (
    <HeroSectionContainer className="section">
      <ImageSideContainer>
        <img src={require("../../template.png")} alt="that's me" />
        <div className="overlay"></div>
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
      <Slogan>Enjoy your tour in my portfolio</Slogan>
    </HeroSectionContainer>
  );
};

export default HeroSection;

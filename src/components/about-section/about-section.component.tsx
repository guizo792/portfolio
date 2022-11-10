import Button from "../button/button.component";

import "./about-section.styles.scss";

const AboutSection = () => {
  return (
    <div className="about-section-container" id="about">
      <h1 className="section-title">About Me</h1>
      <div className="about-section-items">
        <p className="about-section-item">Here is a bit about me:</p>
        <p className="about-section-item">🟣 Software engineering student.</p>
        <p className="about-section-item">🟣 Passionate about IT industry.</p>
        <p className="about-section-item">
          🟣 I love experementing new things.{" "}
        </p>
        <p className="about-section-item">🟣 Always looking to learn more.</p>
      </div>
      <Button className="about-section-btn">
        <span>Let's Get In Touch</span> →
      </Button>
    </div>
  );
};

export default AboutSection;

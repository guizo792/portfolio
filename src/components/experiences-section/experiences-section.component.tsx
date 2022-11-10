import "../education-section/education-section.styles.scss";

type ExperiencesDetails = {
  year: string;
  companyName: string;
  description: string;
};

const experiencesDetails: ExperiencesDetails[] = [
  {
    year: "aug-sep 2022",
    companyName: "AFD Tech",
    description:
      "I passed a one month internship within AFDTECH enterprise as a BI developer",
  },
];

const ExperiencesSection = () => {
  return (
    <div className="education-section-container" id="experience">
      <h1 className="section-title education-section-title">Experiences</h1>
      {experiencesDetails.map((experience) => (
        <div className="education-item-container" id={experience.year}>
          <div className="education-item-insider-container">
            <div className="year-label">{experience.year}</div>
            <div className="details-side">
              <p className="school-name">{experience.companyName}</p>
              <p className="description">{experience.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperiencesSection;

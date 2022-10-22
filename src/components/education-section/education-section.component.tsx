import "./education-section.styles.scss";

type EducationDetails = {
  year: string;
  schoolName: string;
  description: string;
};

const educationDetails: EducationDetails[] = [
  {
    year: "now",
    schoolName: "Hassan II high school",
    description:
      "I took the baccalaureate in the science maths A sector in the Hassan II high school ",
  },

  {
    year: "2021",
    schoolName: "Hassan II high school",
    description:
      "I took the baccalaureate in the science maths A sector in the Hassan II high school ",
  },

  {
    year: "2019",
    schoolName: "Hassan II high school",
    description:
      "I took the baccalaureate in the science maths A sector in the Hassan II high school ",
  },
];

const EducationSection = () => {
  return (
    <div className="education-section-container">
      <h1 className="section-title education-section-title">Education</h1>
      {educationDetails.map((education) => (
        <div className="education-item-container" id={education.year}>
          <div className="education-item-insider-container">
            <div className="year-label">{education.year}</div>
            <div className="details-side">
              <p className="school-name">{education.schoolName}</p>
              <p className="description">{education.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationSection;

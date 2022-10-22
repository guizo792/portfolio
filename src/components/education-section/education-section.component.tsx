import "./education-section.styles.scss";

type EducationDetails = {
  year: string;
  schoolName: string;
  description: string;
};

const educationDetails: EducationDetails[] = [
  {
    year: "Currently",
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
      {educationDetails.map((education) => (
        <div className="education-item-container" id={education.year}>
          <div className="year-label">{education.year}</div>
          <div className="details-side">
            <p className="school-name-label">{education.schoolName}</p>
            <p className="description">{education.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationSection;

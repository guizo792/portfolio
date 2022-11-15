import "./education-section.styles.scss";

type EducationDetails = {
  year: string;
  schoolName: string;
  description: string;
};

const educationDetails: EducationDetails[] = [
  {
    year: "now",
    schoolName: "National institute of posts and telecommunications",
    description:
      "Currently I am studying in my 2nd year of software engineering at INPT Rabat",
  },

  {
    year: "2021",
    schoolName: "CPGE Bab Sahra",
    description:
      "I studied at classes preparatoires branch of Physics and engineer scinences two years",
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
    <div className="education-section-container section" id="education">
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

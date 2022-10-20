import "./main-section.styles.scss";

export const MainSection = () => {
  return (
    <div className="main-container">
      <section className="hero-section">
        <div className="image-side">
          <img src={require("../../template.png")} alt="that's me" />
        </div>
        <div className="info-side">
          <h1 className="info-side-title">Hello world!</h1>
          <h2 className="info-side-title--secondary">
            <span>I am </span> <span className="name">ABDELLAH</span> GUIZOUL
          </h2>
          <h1 className="info-side-title--tertiary ">
            A software engineering student
          </h1>
        </div>
      </section>
    </div>
  );
};

export default MainSection;

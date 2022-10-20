import "./index.scss";
function App() {
  return (
    <div className="body-container">
      <div className="nav-container">
        <div className="nav-item logo">GUIZOUL</div>
        <ul className="nav-item nav-bar-container">
          <li className="nav-bar-item">Home</li>
          <li className="nav-bar-item">Projects</li>
          <li className="nav-bar-item">Education</li>
          <li className="nav-bar-item">Experience</li>
          <li className="nav-bar-item">Blog</li>
        </ul>
        <div className="nav-item">
          <button className="nav-btn">Contact Me</button>
        </div>
      </div>
      <div className="main-container">
        <section className="hero-section">
          <div className="image-side">
            <img src={require("./template.png")} alt="that's me" />
          </div>
          <div className="info-side">
            <h1 className="info-side-title">Hello world!</h1>
            <h2 className="info-side-title--secondary">
              <span>I am </span> <span className="name">ABDELLAH</span> GUIZOUL
            </h2>
            <h1 className="info-side-title--tertiary ">
              Enjoy your tour in my portfolio
            </h1>
          </div>
        </section>
      </div>
      <div className="footer-container"></div>
    </div>
  );
}

export default App;

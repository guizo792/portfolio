import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";

import "./index.scss";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          {/*<Route path="/shop/*" element={<Shop />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/checkout" element={<Checkout />} /> */}
        </Route>
      </Routes>
      {/* <div className="main-container">
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
              A software engineering student
            </h1>
          </div>
        </section>
      </div> */}
      {/* <div className="footer-container"></div> */}
    </Fragment>
  );
}

export default App;

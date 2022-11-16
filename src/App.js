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
    </Fragment>
  );
}

document.querySelector(".gotop-btn")?.addEventListener("click", () =>
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
);

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});

export default App;

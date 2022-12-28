import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/loader/loader.component";

import "./index.scss";

const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Home = lazy(() => import("./routes/home/home.component"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          {/*<Route path="/shop/*" element={<Shop />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/checkout" element={<Checkout />} /> */}
        </Route>
      </Routes>
    </Suspense>
  );
}

document.querySelector(".gotop-btn")?.addEventListener("click", () =>
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
);

export default App;

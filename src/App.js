import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/loader/loader.component";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top.component";

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

const toTopBtn = document.querySelector(".gotop-btn");
toTopBtn?.addEventListener("click", () =>
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTopBtn.classList.add("active");
  } else {
    toTopBtn.classList.remove("active");
  }
});

export default App;

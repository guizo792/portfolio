import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainSection from "../../components/main-section/main-section.component";

const Home = () => {
  return (
    <Fragment>
      <Outlet />
      <MainSection />
    </Fragment>
  );
};

export default Home;

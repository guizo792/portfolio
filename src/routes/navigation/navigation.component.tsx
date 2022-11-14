import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { Outlet } from "react-router-dom";

import Button from "src/components/button/button.component";

import {
  NavigationContainer,
  NavLinksContainer,
  LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">GUIZOUL</LogoContainer>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <FontAwesomeIcon icon={solid("bars")} />
        </button>
        <NavLinksContainer
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <a>Home</a>
          <a href="/#about">About</a>
          <a href="/#education">Education</a>
          <a href="/#projects">Projects</a>
          <a href="/#experience">Experience</a>
        </NavLinksContainer>
        <Button>
          <a href="/#contacts">Contact Me</a>
        </Button>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

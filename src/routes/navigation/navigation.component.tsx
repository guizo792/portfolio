import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Button from "src/components/button/button.component";

import {
  NavigationContainer,
  NavLinksContainer,
  LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">GUIZOUL</LogoContainer>
        <NavLinksContainer>
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

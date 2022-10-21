import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Button from "src/components/button/button.component";

import {
  NavigationContainer,
  NavLinksContainer,
  NavLinkContainer,
  LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">GUIZOUL</LogoContainer>
        <NavLinksContainer>
          <NavLinkContainer to="/">Home</NavLinkContainer>
          <NavLinkContainer to="/">About</NavLinkContainer>
          <NavLinkContainer to="/">Education</NavLinkContainer>
          <NavLinkContainer to="/">Projects</NavLinkContainer>
          <NavLinkContainer to="/">Experience</NavLinkContainer>
          <NavLinkContainer to="/">Blog</NavLinkContainer>
        </NavLinksContainer>
        <Button>Contact Me</Button>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

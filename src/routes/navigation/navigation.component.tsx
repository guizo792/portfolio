import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
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
          {isNavExpanded ? (
            <FontAwesomeIcon icon={solid("x")} />
          ) : (
            <FontAwesomeIcon icon={solid("bars")} />
          )}
        </button>
        <div
          className={
            isNavExpanded
              ? "nav-links-container navigation-menu expanded"
              : "nav-links-container navigation-menu"
          }
        >
          <NavLinksContainer>
            <a
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              Home
            </a>
            <a
              href="/#about"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              About
            </a>
            <a
              href="/#education"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              Education
            </a>
            <a
              href="/#projects"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              Projects
            </a>
            <a
              href="/#experience"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              Experience
            </a>
          </NavLinksContainer>
          <Button
            className="nav-button"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <a href="/#contacts">Contact Me</a>
          </Button>
        </div>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;

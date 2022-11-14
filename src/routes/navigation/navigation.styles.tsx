import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;

  .hamburger {
    // removes default border on button element
    border: 0;
    height: 40px;
    width: 40px;
    padding: 0.5rem;
    border-radius: 50%;
    background-color: #283b8b;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    // positions the icon to the right and center aligns it vertically
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
    // display: none;

    &:hover {
      background-color: #2642af;
    }
  }

  // navbar.css
  @media screen and (max-width: 1090px) {
    .hamburger {
      display: block;
    }
  }
`;

export const LogoContainer = styled(Link)`
  cursor: pointer;
  font-size: 2rem;
  font-weight: normal;
  background-color: #7b2cbf;
  color: #fff;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  text-decoration: none;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  text-transform: uppercase;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  border-radius: 2px;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #9a2ff8;
    z-index: -2;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #7b2cbf;
    transition: all 0.3s;
    z-index: -1;
  }
  &:hover {
    color: #fff;
    &:before {
      width: 100%;
    }
  }

  @media only screen and (max-width: 1200px) {
    /*Tablets [601px -> 1200px]*/

    font-size: 1.8rem;
    padding: 0 1.8rem 0 1.8rem;
    height: 40px;
  }
  @media only screen and (max-width: 600px) {
    /*Big smartphones [426px -> 600px]*/

    font-size: 1.4rem;
    padding: 0 1.4rem 0 1.4rem;
    height: 30px;
  }
  @media only screen and (max-width: 425px) {
    /*Small smartphones [325px -> 425px]*/

    font-size: 1.2rem;
    padding: 0 1.2rem 0 1.2rem;
    height: 20px;
  }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  list-style: none;

  a {
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    letter-spacing: 1.2px;
    font-size: 1.8rem;
    color: #641aa5;

    // position: absolute;

    &::after {
      content: "";
      width: 0px;
      height: 0.1rem;
      display: block;
      background: #9a2ff8;
      transition: 300ms;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }

    &:hover {
      color: #9a2ff8;
      box-shadow: 0 5px 7px -3px #9a2ff898;

      &:after {
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    /*Tablets [601px -> 1200px]*/
    a {
      font-size: 1.5rem;
    }
  }
  @media only screen and (max-width: 600px) {
    /*Big smartphones [426px -> 600px]*/
    a {
      font-size: 1.2rem;
    }
  }
  @media only screen and (max-width: 425px) {
    /*Small smartphones [325px -> 425px]*/
    font-size: 0.9rem;
  }

  @media screen and (max-width: 1090px) {
    display: none;
  }
`;

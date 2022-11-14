import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  border-radius: 2px;

  a {
    text-decoration: none;
    font-size: 1.6rem;
    text-transform: uppercase;
    color: white;

    &:hover {
      color: #fff;
    }
  }

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

    font-size: 1.4rem;
    padding: 0 1.8rem 0 1.8rem;
    height: 40px;
  }
  @media only screen and (max-width: 600px) {
    /*Big smartphones [426px -> 600px]*/

    font-size: 1.2rem;
    padding: 0 1.4rem 0 1.4rem;
    height: 30px;
  }
  @media only screen and (max-width: 425px) {
    /*Small smartphones [325px -> 425px]*/

    font-size: 1rem;
    padding: 0 1.2rem 0 1.2rem;
    height: 20px;
  }
`;

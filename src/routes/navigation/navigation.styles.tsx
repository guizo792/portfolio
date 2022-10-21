import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
`;

export const LogoContainer = styled(Link)`
  cursor: pointer;
  font-size: 2rem !important;
  font-weight: normal;
  background-color: #7b2cbf;
  color: #fff;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  // font-family: "Changa";
  text-decoration: none;
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
`;

export const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  list-style: none;
`;

export const NavLinkContainer = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  letter-spacing: 0.5px;
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
`;

// .nav-container {
//   padding: 1rem 4rem 3rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 10vh;

//   .logo {
//     cursor: pointer;
//     font-size: 2rem !important;
//     font-weight: normal;
//     background-color: #7b2cbf;
//     color: #fff;
//     width: auto;
//     height: 50px;
//     letter-spacing: 0.5px;
//     line-height: 50px;
//     padding: 0 35px 0 35px;
//     // font-family: "Changa";
//   }

//   .nav-bar-container {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     gap: 2rem;
//     color: #5c1699;
//     list-style: none;

//     .nav-bar-item {
//       text-transform: uppercase;
//       text-decoration: none;
//       cursor: pointer;
//       letter-spacing: 0.5px;

//       // position: absolute;

//       &::after {
//         content: "";
//         width: 0px;
//         height: 0.1rem;
//         display: block;
//         background: #9a2ff8;
//         transition: 300ms;
//         position: relative;
//         left: 50%;
//         transform: translateX(-50%);
//       }

//       &:hover {
//         color: #9a2ff8;
//         box-shadow: 0 5px 7px -3px #9a2ff898;

//         &:after {
//           width: 100%;
//         }
//       }
//     }
//   }

// .logo,
// .nav-btn {
// min-width: 165px;
// width: auto;
// height: 50px;
// letter-spacing: 0.5px;
// line-height: 50px;
// padding: 0 35px 0 35px;
// font-size: 15px;
// text-transform: uppercase;
// color: white;
// border: none;
// cursor: pointer;
// display: flex;
// justify-content: center;
// align-items: center;
// transition: background-color 0.3s;
// position: relative;
// overflow: hidden;
// z-index: 1;

// &:after {
//   content: "";
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: #7b2cbf;
//   z-index: -2;
// }
// &:before {
//   content: "";
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 0%;
//   height: 100%;
//   background-color: #9a2ff8;
//   transition: all 0.3s;
//   z-index: -1;
// }
// &:hover {
//   color: #fff;
//   &:before {
//     width: 100%;
//   }
// }
//   }
// }

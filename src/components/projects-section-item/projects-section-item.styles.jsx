import styled from "styled-components";

// export const BackgroundImage = styled.div`
//   width: 100%;
//   height: 100%;
//   background-size: cover;
//   background-position: center;
//   background-image: ${({ imageUrl }) => `url(${imageUrl})`};
// `;

export const UsedTechnologies = styled.div`
  font-size: 1.7rem;
  letter-spacing: 0.1rem;

  span {
    font-size: 1.8rem;
    text-decoration: underline;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.4rem;
    span {
      font-size: 1.6rem;
    }
  }
`;

export const ProjectSectionItemContainer = styled.div`
  min-width: 30%;
  height: 260px;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #fff;
  border-radius: 3px;
  margin: 0 7.5px 15px;
  overflow: hidden;
  padding: 2rem;
  transition: all 0.4s;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  div {
    color: #7a2cbf;
    transition: all 0.4s;
  }

  --c: #7a2cbf; /* the color */
  --b: 0.1em; /* border length*/
  --d: 20px; /* the cube depth */

  --_s: calc(var(--d) + var(--b));
  color: var(--c);
  border: solid #0000;
  border-width: var(--b) var(--b) var(--_s) var(--_s);
  background: conic-gradient(
        at left var(--d) bottom var(--d),
        #0000 90deg,
        rgb(255 255 255 /0.3) 0 225deg,
        rgb(255 255 255 /0.6) 0
      )
      border-box,
    conic-gradient(at left var(--_s) bottom var(--_s), #0000 90deg, var(--c) 0)
      0 100% / calc(100% - var(--b)) calc(100% - var(--b)) border-box;

  background-color: #7a2cbf66;

  clip-path: polygon(
    0% var(--d),
    var(--d) 0%,
    100% 0%,
    100% calc(100% - var(--d)),
    calc(100% - var(--d)) 100%,
    0% 100%
  );

  &:hover {
    background-color: #7a2cbf88;

    clip-path: polygon(
      var(--d) 0%,
      var(--d) 0%,
      100% 0%,
      100% calc(100% - var(--d)),
      100% calc(100% - var(--d)),
      var(--d) calc(100% - var(--d))
    );

    div {
      color: #260149;

      a {
        color: #ffcf70;

        &:hover {
          color: #ff1;
        }
      }
    }

    ${UsedTechnologies} span {
      color: #ddd;
    }
  }
`;

export const Title = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #cea7ff77;
  background-color: #cea7ff77;
  opacity: 0.9;
  // position: absolute;
  border-radius: 4px;
  transition: opacity 0.3s;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 2.2rem;
    color: #260149;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 1.6rem;
  }

  @media screen and (max-width: 600px) {
    h2 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 492px) {
    h2 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const Description = styled.div`
  color: #260149;
  font-size: 1.8rem;
  letter-spacing: 0.1rem;

  @media screen and (max-width: 600px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 493px) {
    font-size: 1.2rem;
  }
`;

export const Links = styled.div`
  color: #260149;
  display: flex;
  gap: 6rem;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.75px;

  a {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    cursor: pointer;
    color: #260149;

    span {
      color: #260149;
    }

    @media screen and (max-width: 552px) {
      font-size: 1.1rem;
    }
  }
`;

// export const UsedTechnologies = styled.div`
//   font-size: 1.7rem;
//   letter-spacing: 0.1rem;

//   span {
//     font-size: 1.8rem;
//     text-decoration: underline;
//   }
// `;

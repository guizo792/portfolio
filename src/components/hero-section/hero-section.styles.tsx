import styled from "styled-components";

export const HeroSectionContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 0.69fr 0.5fr;
  // height: 69%;
`;
export const ImageSideContainer = styled.div`
  overflow: hidden;

  img {
    height: 100%;
    border: solid 0.3rem #7b2cbf;
    border-radius: 2px;
  }
`;

export const InfoSideContainer = styled.div`
  height: 100%;
  padding-left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4rem;
  border: solid 0.3rem #7b2cbf;
  border-radius: 2px;
`;

export const InfoSideTitle = styled.h1`
  font-size: 5.3rem;
  letter-spacing: 0.7rem;
  font-weight: bold;
`;

export const InfoSideTitleSecondary = styled.h2`
  font-size: 4.2rem;
  font-weight: normal;
  display: flex;
  align-items: center;
  gap: 2rem;
  letter-spacing: 0.2rem;
  flex-wrap: wrap;

  .name {
    height: 3.8rem;
    padding: 0.4rem 0;
    font-size: 3.6rem;
    color: #fff;
    background: #5b0f9e;
    box-shadow: 0 0 10px #7b2cbf, 0 0 20px #7b2cbf, 0 0 30px #7b2cbf;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const InfoSideTitleTertiary = styled.h1`
  font-size: 2.8rem;
  font-weight: normal;
  letter-spacing: 0.4rem;
`;

export const Slogan = styled.p`
  font-size: 7.2rem;
  letter-spacing: 2rem;
  align-self: center;
  justify-self: center;
  grid-column: span 2;

  font-size: 9rem;
  font-weight: 500;
  color: #7b2cbf;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
  // text-shadow: 0 0 5px #eeeeee, 0 0 10px #9554b3, 0 0 15px #9554b3, 0 0 20px #9554b3;
  text-shadow: 0 0 2px #9d4edd, 0 0 4px #9d4edd, 0 0 15px #9d4edd;
`;

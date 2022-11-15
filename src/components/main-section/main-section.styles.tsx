import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 2.8rem 4rem 0;
  // display: flex;
  // flex-direction: column;
  // align-items: center;

  display: grid;
  grid-template-rows: 1fr 0.75fr 1fr 1fr;

  @media screen and (max-width: 740px) {
    padding: 0;
  }
`;

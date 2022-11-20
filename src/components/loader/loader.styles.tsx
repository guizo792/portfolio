import styled from "styled-components";

export const LoaderOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderContainer = styled.div`
  display: inline-block;
  width: 70px;
  height: 70px;
  border: 5px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #9a2ff888;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

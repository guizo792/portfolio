import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 540px) {
    width: 280px;
  }

  h2 {
    margin: 10px 0;
  }

  button {
    margin: 1px auto;
  }

  textarea {
    background: none;
    background-color: #26014955;
    color: #ddd;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 3px;
    border-bottom: 1px solid #ddd;
    margin: 25px 0;
    transition: all 0.3s;
    padding-left: 1rem;

    &:focus {
      outline: none;

      background-color: #7b2cbf;
    }

    &::placeholder {
      color: #ddd;
    }

    @media screen and (max-width: 540px) {
      font-size: 1.4rem;
    }
  }

  input {
    @media screen and (max-width: 540px) {
      font-size: 1.4rem;
    }
  }
`;

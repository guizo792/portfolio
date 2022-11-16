import styled from "styled-components";

export const ContactSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
  align-items: center;
  padding: 1px 4rem 2rem;
  background-color: #b331f077;
  text-align: center;

  @media screen and (max-width: 540px) {
    padding: 1px 1rem 1rem;
  }
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  justify-content: center;
`;

export const Contacts = styled.div`
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
    color: #ffcf70;

    @media screen and (max-width: 900px) {
      font-size: 1.4rem;
    }

    @media screen and (max-width: 502px) {
      flex-direction: column;
    }

    &:hover {
      color: #ff1;
    }
  }
`;

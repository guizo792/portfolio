import styled, { css } from "styled-components";

const sublColor = "#ddd";
const mainColor = "#ddd";

const shrinkLabelStyles = css`
  top: -2rem;
  font-size: 1.4rem;
  color: ${mainColor};
`;

type FormInputLabelProps = {
  shrink?: boolean;
};

export const FormInputLabel = styled.label<FormInputLabelProps>`
  color: ${sublColor};
  font-size: 1.6rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
  background: none;
  background-color: #26014955;
  color: ${sublColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0.6rem;
  border-bottom: 1px solid ${sublColor};
  margin: 25px 0;
  padding-left: 1rem;
  &:focus {
    outline: none;
    background-color: #7b2cbf;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 45px 0;
`;

import { ButtonHTMLAttributes, FC } from "react";

import { BaseButton } from "./button.styles";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, ...otherProps }) => {
  return <BaseButton {...otherProps}>{children}</BaseButton>;
};

export default Button;

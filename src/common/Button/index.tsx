import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const ButtonPers = ({
  color,
  fixedWidth,
  children,
  onClick,
}: ButtonProps) => (
  <StyledButton color={color} fixedWidth={fixedWidth} onClick={onClick}>
    {children}
  </StyledButton>
);

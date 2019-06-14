import * as React from "react";
import styled, { css } from "styled-components";

interface StyledProps {
  full: Boolean;
}

const StyledButton = styled.button<StyledProps>`
  background-color: #766b5e;
  border-radius: 5px;
  color: #ece3cb;
  border: none;
  padding: 1rem;
  font-size: 20px;
  font-weight: bold;
  font-family: "TF2Font";
  cursor: pointer;

  svg {
    display: inline-block;
    vertical-align: middle;
  }

  span {
    position: relative;
    bottom: -2px;
  }

  ${props => props.full && css`
    span {
      margin-left: .5em;
    }
  `}
`;

interface Props {
  icon?: React.ReactNode;
  label?: String;
}

const Button = ({ icon, label }: Props) => (
  <StyledButton full={!!icon && !!label}>
    {icon && icon}
    {label && <span>{label}</span>}
  </StyledButton>
);

export default Button;

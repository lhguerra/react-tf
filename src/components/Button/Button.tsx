import * as React from "react";
import styled, { css } from "styled-components";

import { color, font } from "../../theme";

interface StyledProps {
  full: Boolean;
}

const StyledButton = styled.button<StyledProps>`
  background-color: ${color("sandstone")};
  border-radius: 5px;
  color: ${color("athsSpecial")};
  border: none;
  padding: 1rem;
  font-size: 20px;
  font-weight: bold;
  font-family: ${font("title")};
  cursor: pointer;

  svg {
    display: inline-block;
    vertical-align: middle;
  }

  span {
    position: relative;
    bottom: -2px;
  }

  ${props =>
    props.full &&
    css`
      span {
        margin-left: 0.5em;
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

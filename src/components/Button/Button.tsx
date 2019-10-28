import * as React from "react";
import styled, { css } from "styled-components";
import {switchProp} from 'styled-tools'

import { color, font } from "../../theme";

interface StyledProps {
  full: boolean;
  variation?: string;
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

  ${switchProp('variation', {
    cta: css`
      background-color: ${color("dune")};
      padding: .5rem 5rem;
    `
  })}
`;

interface Props {
  icon?: React.ReactNode;
  label?: string;
  variation?: string;
}

const Button = ({ icon, label, variation }: Props) => (
  <StyledButton full={!!icon && !!label} variation={variation}>
    {icon && icon}
    {label && <span>{label}</span>}
  </StyledButton>
);

export default Button;

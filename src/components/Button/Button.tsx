import * as React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
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
`;

interface Props {
  icon?: React.ReactNode;
  label?: String;
}

const Button = ({ icon, label }: Props) => (
  <StyledButton>
    {icon && icon}
    <span>{label}</span>
  </StyledButton>
);

export default Button;

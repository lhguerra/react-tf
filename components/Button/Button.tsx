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
`;

interface Props {
  icon?: React.ReactNode;
}

const Button = ({ icon }: Props) => (
  <StyledButton>{icon && icon}Click Me</StyledButton>
);

export default Button;

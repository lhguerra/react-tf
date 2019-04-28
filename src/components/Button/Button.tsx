import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";

import * as TF2Font from "../../assets/fonts/tf2build.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: TF2Font;
    src: url('${TF2Font}') format('truetype');
    font-display: fallback;
  }
`;

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
`;

interface Props {
  icon?: React.ReactNode;
}

const Button = ({ icon }: Props) => (
  <React.Fragment>
    {console.log(TF2Font)}
    <StyledButton>{icon && icon}Click Me</StyledButton>
    <GlobalStyle />
  </React.Fragment>
);

export default Button;

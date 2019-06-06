import * as React from "react";
import { configure, addDecorator } from "@storybook/react";
import * as TF2Font from "../src/assets/fonts/tf2build.ttf";
import { createGlobalStyle } from "styled-components";

// automatically import all files ending in *.stories.tsx
const req = require.context("../src/components", true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: TF2Font;
    src: url('${TF2Font}') format('truetype');
    font-display: fallback;
  }
`;

addDecorator(s => <><GlobalStyle />{s()}</>);

configure(loadStories, module);

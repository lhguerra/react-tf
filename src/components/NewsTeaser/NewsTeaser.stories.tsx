import * as React from "react";
import { storiesOf, RenderFunction } from "@storybook/react";
import styled from "styled-components";

import { color } from "../../theme";

import NewsTeaser from "./NewsTeaser";

const props = {
  title: "Checked out the blog?",
  date: "Wednesday Jan 23",
  image: {
    src: "http://lorempixel.com/500/500",
    alt: "Nice Image"
  },
  text:
    "If you haven't read the official TF2 blog, it's full of insights into our development process, links to notable community productions, and random stories about our lov of hats.Hit the button below to take a look."
};

const BackgroundDecorator = styled.div`
  background-color: ${color("silk")};
`;

const CenterDecorator = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 2rem 0;
`;

storiesOf("News Teaser", module)
  .addDecorator((story: RenderFunction) => (
    <CenterDecorator>{story()}</CenterDecorator>
  ))
  .addDecorator((story: RenderFunction) => (
    <BackgroundDecorator>{story()}</BackgroundDecorator>
  ))
  .add("Default", () => <NewsTeaser {...props} />);

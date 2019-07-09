import * as React from "react";
import { storiesOf } from "@storybook/react";
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

storiesOf("News Teaser", module).add("Default", () => (
  <NewsTeaser {...props} />
));

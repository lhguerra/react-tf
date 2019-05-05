import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
import { IoMdSettings } from "react-icons/io";

storiesOf("Button", module).add("simple button", () => (
  <Button icon={<IoMdSettings />} label="Settings" />
));

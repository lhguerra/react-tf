import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
import { IoMdSettings } from "react-icons/io";

storiesOf("Button", module)
  .add("Simple button", () => (
    <Button label="Click me" />
  ))
  .add("Button with icon", () => (
    <Button icon={<IoMdSettings />} label="Settings" />
  ))
  .add("Icon button", () => (
    <Button icon={<IoMdSettings />} />
  ))

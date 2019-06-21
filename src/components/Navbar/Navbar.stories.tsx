import * as React from "react";
import { storiesOf } from "@storybook/react";
import Navbar, { NavbarItem } from "./Navbar";
import { GoMortarBoard } from 'react-icons/go'
import { IoMdMedal, IoMdChatboxes, IoMdMegaphone, IoMdBug } from "react-icons/io";

storiesOf("Navbar", module)
  .add("Icon Navbar", () => (
    <Navbar>
      <NavbarItem><GoMortarBoard /></NavbarItem>
      <NavbarItem><IoMdMedal /></NavbarItem>
      <NavbarItem><IoMdChatboxes /></NavbarItem>
      <NavbarItem><IoMdMegaphone /></NavbarItem>
      <NavbarItem><IoMdBug /></NavbarItem>
    </Navbar>
  ))

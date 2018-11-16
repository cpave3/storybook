import React from "react";

import "../../assets/styles/index.css";

import { storiesOf } from "@storybook/react";

import Dashboard from "./components/Dashboard";

storiesOf("Yaspa Dashboard", module)
  .add("main", () => <Dashboard />);

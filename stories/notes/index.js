import React from "react";

import "../../assets/styles/index.css";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";

import CommentStream from "./components/CommentStream";

storiesOf("Note Comments", module)
  .add("Multi Threaded", () => <CommentStream sidebar={false} />)
  .add("With Sidebar", () => <CommentStream sidebar={true} />);

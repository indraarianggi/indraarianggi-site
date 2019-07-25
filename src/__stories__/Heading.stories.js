/* Dependencies */
import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"

/* Components */
import Heading from "../components/Heading/Heading"

/* Stories */
storiesOf("Components|Heading", module)
  .addDecorator(withKnobs)
  .add("default", () => <Heading value={text("Value", "Lorem ipsum dolor")} />)

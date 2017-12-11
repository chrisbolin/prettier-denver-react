import React from "react";

import { Deck, MarkdownSlides } from "spectacle";

import createTheme from "spectacle/lib/themes/default";

import slidesMarkdown from "./slides";

require("normalize.css");
require("./style.css");

const theme = createTheme(
  {
    primary: "white", // background
    secondary: "hsl(0, 0%, 10%)", // text
    tertiary: "hsl(0, 0%, 16%)",
    quarternary: "deeppink" // progress bar
  },
  {
    primary: { name: "Anonymous Pro", googleFont: true, styles: ["400", "700"] }
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["fade", "slide"]}
        transitionDuration={800}
        theme={theme}
        progress="bar"
        controls={false}
      >
        {MarkdownSlides(slidesMarkdown)}
      </Deck>
    );
  }
}

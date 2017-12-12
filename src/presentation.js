import React from "react";

import { Deck, MarkdownSlides } from "spectacle";

import createTheme from "spectacle/lib/themes/default";

import slidesMarkdown from "./slides";

require("normalize.css");
require("./style.css");

export default class Presentation extends React.Component {
  getTheme() {
    return createTheme(
      {
        primary: "white", // background
        secondary: "hsl(0, 0%, 10%)", // text
        tertiary: "hsl(0, 0%, 16%)",
        quarternary: "lightpink" // progress bar
      },
      {
        primary: {
          name: "Anonymous Pro",
          googleFont: true,
          styles: ["400", "700"]
        }
      }
    );
  }
  render() {
    return (
      <Deck
        transition={["fade", "slide"]}
        transitionDuration={800}
        theme={this.getTheme()}
        progress="bar"
        controls={false}
      >
        {MarkdownSlides(slidesMarkdown)}
      </Deck>
    );
  }
}

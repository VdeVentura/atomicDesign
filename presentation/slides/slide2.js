import React from "react";
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Appear
} from "spectacle";

export default () => (
  <Slide bgColor="primary">
    <Heading size={5} textColor="secondary">
      What is Atomic Design ?
    </Heading>
    <Appear transitionDuration="3000">
      <div>
        <Image
          src="https://media.giphy.com/media/UBEuw0gW9MbJu/giphy.gif"
          height="400px"
        />
      </div>
    </Appear>
  </Slide>
);

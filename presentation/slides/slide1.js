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
    <Heading size={1} textColor="secondary">
      Atomic Design
    </Heading>
    <Image src="http://edits.atomicdesign.bradfrost.com/images/atomic-design.svg" />
    <Appear transition="fade" transitionDuration="3000">
      <Heading size={5} lineHeight={1} textColor="secondary">
        And how easy your life could be
      </Heading>
    </Appear>
  </Slide>
);

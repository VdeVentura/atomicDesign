import React from "react";
import example from "../../assets/atomicDesign.png";
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
      What does it looks like ?
    </Heading>
    <Appear transition="fade" transitionDuration="3000">
      <Image src={example} height="500px" />
    </Appear>
  </Slide>
);

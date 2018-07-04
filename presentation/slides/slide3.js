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
    <List>
      <Appear>
        <ListItem>Atoms</ListItem>
      </Appear>
      <Appear>
        <ListItem>Molecules</ListItem>
      </Appear>
      <Appear>
        <ListItem>Organisms</ListItem>
      </Appear>
      <Appear>
        <ListItem>Templates</ListItem>
      </Appear>
      <Appear>
        <ListItem>Pages</ListItem>
      </Appear>
    </List>
  </Slide>
);

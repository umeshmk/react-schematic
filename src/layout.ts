import {Breakpoints, reactLayout} from 'react-layout';

let breakpoints: Breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

export const {Container, Flex, FlexItem, Grid, GridItem} =
  reactLayout(breakpoints);

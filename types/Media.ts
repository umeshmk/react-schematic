import { MediaKeys } from "./common";
import { Container } from "./Container";
import { Flex } from "./Flex";
import { FlexItem } from "./FlexItem";
import { Grid } from "./Grid";
import { GridItem } from "./GridItem";

type Media<T> = {
  [key in MediaKeys]?: T;
};

export type ContainerResponsive = {
  [key in keyof Container]?: Container[key] | Media<Container[key]>;
};

export type FlexResponsive = {
  [key in keyof Flex]?: Flex[key] | Media<Flex[key]>;
};

export type FlexItemResponsive = {
  [key in keyof FlexItem]?: FlexItem[key] | Media<FlexItem[key]>;
};

export type GridResponsive = {
  [key in keyof Grid]?: Grid[key] | Media<Grid[key]>;
};

export type GridItemResponsive = {
  [key in keyof GridItem]?: GridItem[key] | Media<GridItem[key]>;
};

import { Breakpoints } from ".";
import { ContainerType } from "./Container";
import { Flex } from "./Flex";
import { FlexItem } from "./FlexItem";
import { Grid } from "./Grid";
import { GridItem } from "./GridItem";

type Media<T> = {
  [key in keyof Breakpoints]?: T;
};

export type MediaQueries = Media<string>;

export type ContainerResponsive = {
  [key in keyof ContainerType]?: ContainerType[key] | Media<ContainerType[key]>;
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

import { Breakpoints } from ".";
import { ContainerType } from "./Container";
import { FlexType } from "./Flex";
import { FlexItemType } from "./FlexItem";
import { GridType } from "./Grid";
import { GridItemType } from "./GridItem";

type Media<T> = {
  [key in keyof Breakpoints]?: T;
};

export type MediaQueries = Media<string>;

export type ContainerResponsiveType = {
  [key in keyof ContainerType]?: ContainerType[key] | Media<ContainerType[key]>;
};

export type FlexResponsiveType = {
  [key in keyof FlexType]?: FlexType[key] | Media<FlexType[key]>;
};

export type FlexItemResponsiveType = {
  [key in keyof FlexItemType]?: FlexItemType[key] | Media<FlexItemType[key]>;
};

export type GridResponsiveType = {
  [key in keyof GridType]?: GridType[key] | Media<GridType[key]>;
};

export type GridItemResponsiveType = {
  [key in keyof GridItemType]?: GridItemType[key] | Media<GridItemType[key]>;
};

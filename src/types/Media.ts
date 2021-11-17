import {Breakpoints, ValidComponents} from './common';
import {ContainerType} from './Container';
import {FlexType} from './Flex';
import {FlexItemType} from './FlexItem';
import {GridType} from './Grid';
import {GridItemType} from './GridItem';
import {Spacing} from './Spacing';

export type Media<T> = {
  [key in keyof Breakpoints]?: T;
};

export type Responsive<T extends ValidComponents & Spacing> = {
  [key in keyof T]?: T[key] | Media<T[key]>;
};

export type ContainerResponsiveType = Responsive<ContainerType> &
  Responsive<Spacing>;
export type FlexResponsiveType = Responsive<FlexType> & Responsive<Spacing>;
export type FlexItemResponsiveType = Responsive<FlexItemType> &
  Responsive<Spacing>;
export type GridItemResponsiveType = Responsive<GridItemType> &
  Responsive<Spacing>;
export type GridResponsiveType = Responsive<GridType> & Responsive<Spacing>;

export type MediaQueries = Media<string>;

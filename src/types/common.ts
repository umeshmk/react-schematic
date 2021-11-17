import {ContainerType, FlexItemType, FlexType, GridItemType, GridType} from '.';

// 1st breakpoint will always be 0 - opinionated
export type Breakpoints = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export type ValidComponents =
  | GridType
  | GridItemType
  | ContainerType
  | FlexType
  | FlexItemType;

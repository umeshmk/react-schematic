import {
  ContainerType,
  FlexItemType,
  FlexType,
  GridItemType,
  GridType,
  MediaQueries,
} from '.';

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

// T = any component type but not responsive type
export type Css<T extends ValidComponents> = {
  [key in keyof T]: (v: T[key]) => string;
};

export type CreateCss = (
  css: Css<ValidComponents>,
  p: any,
  atMedia: MediaQueries
) => string;

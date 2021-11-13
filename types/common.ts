export type Gap = {
  gap?: string;
  columnGap?: string;
  rowGap?: string;
};

// 1st breakpoint will always be 0 - opinionated
export type Breakpoints = {
  xs: 0;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

// T = any component type but not responsive type
export type Css<T> = {
  [key in keyof T]: (v: T[key]) => string;
};

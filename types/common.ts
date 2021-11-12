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

export type MediaKeys = keyof Breakpoints;

export type MaxWidths = {
  // xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

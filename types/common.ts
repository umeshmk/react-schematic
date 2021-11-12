export type Media<T> = {
  xs?: T;
  md?: T;
  lg?: T;
};

export type Gap = {
  gap?: string;
  columnGap?: string;
  rowGap?: string;
};

// export type GapResponsive = {
//   [key in keyof Gap]?: Gap[key] | Media<Gap[key]>;
// };

export type MaxWidths = {
  // xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export type ContainerType = { maxWidth?: keyof MaxWidths };

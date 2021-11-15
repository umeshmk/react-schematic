// Must be (min-width) only.

import {Breakpoints, MaxWidths} from './types';

// From material UI
export const breakpoints: Breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

// for Container
export let getMaxWidths: (b: Breakpoints) => MaxWidths = (b) => ({
  // xs: 0,
  sm: b.sm,
  md: b.md,
  lg: b.lg,
  xl: b.xl,
});

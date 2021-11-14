// Must be (min-width) only.

import { createMediaQueries } from "./mediaQueries";
import { Breakpoints, MaxWidths } from "./types";

// From material UI
let breakpoints: Breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

// for Container
export let maxWidths: MaxWidths = {
  // xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

export default {
  breakpoints,
  maxWidths,
};

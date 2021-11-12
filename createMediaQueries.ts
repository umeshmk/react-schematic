// Must be (min-width) only.
// It will scale upwards to higher widths by default
// @media screen and (min-width:1200px) { .... }

import { Breakpoints, MaxWidths } from "./types";

// From material UI
let defaultBreakpoints: Breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

// for Container
export let defaultMaxWidths: MaxWidths = {
  // xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

export const createMediaQueries = (breakpoints?: Breakpoints) => {
  let mediaQueries = {};

  if (Object.values(breakpoints)[0] !== 0)
    throw new Error("First breakpoint's value must be equal 0");

  Object.keys(breakpoints || defaultBreakpoints).map((key) => {
    mediaQueries[key] = `@media screen and (min-width:${breakpoints[key]}px)`;
  });

  return mediaQueries;
};

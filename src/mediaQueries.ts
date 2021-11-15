// Must be (min-width) only.
// It will scale upwards to higher widths by default
// @media screen and (min-width:1200px) { .... }

import {Breakpoints, MediaQueries} from './types';

export const createMediaQueries = (breakpoints: Breakpoints) => {
  let mediaQueries: MediaQueries = {};

  if (Object.values(breakpoints)[0] !== 0)
    throw new Error("First breakpoint's value must be equal 0");

  Object.keys(breakpoints).map((key) => {
    // @ts-ignore
    mediaQueries[key] = `@media screen and (min-width:${breakpoints[key]}px)`;
  });

  return mediaQueries;
};

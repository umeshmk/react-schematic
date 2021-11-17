import {Css, GridType} from '../types';
import {SpacingCss} from './SpacingCss';

export const css: Css<GridType> = {
  display: (v) => `display:${v};`,
  grid: (v) => `grid:${v};`,
  gridTemplate: (v) => `grid-template :${v};`,
  gridTemplateAreas: (v) => `grid-template-areas :${v};`,
  gridTemplateColumns: (v) => `grid-template-columns:${v};`,
  gridTemplateRows: (v) => `grid-template-rows:${v};`,
  placeItems: (v) => `place-items:${v};`,
  alignItems: (v) => `align-items:${v};`,
  justifyItems: (v) => `justify-items:${v};`,
  placeContent: (v) => `place-content:${v};`,
  alignContent: (v) => `align-content:${v};`,
  justifyContent: (v) => `justify-content:${v};`,
  gridAutoColumns: (v) => `grid-auto-columns:${v};`,
  gridAutoFlow: (v) => `grid-auto-flow:${v};`,
  gridAutoRows: (v) => `grid-auto-rows:${v};`,
  gap: (v) => `grid-gap:${v};`,
  rowGap: (v) => `row-gap:${v};`,
  columnGap: (v) => `col-gap:${v};`,
  ...SpacingCss,
};

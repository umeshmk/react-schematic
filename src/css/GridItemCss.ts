import {Css, GridItemType} from '../types';
import {SpacingCss} from './SpacingCss';

export const css: Css<GridItemType> = {
  placeSelf: (v) => `place-self:${v};`,
  alignSelf: (v) => `align-self:${v};`,
  justifySelf: (v) => `justify-self:${v};`,
  gridArea: (v) => `grid-area:${v};`,
  gridColumn: (v) => `grid-column:${v};`,
  gridRow: (v) => `grid-row:${v};`,
  gridColumnStart: (v) => `grid-column-start:${v};`,
  gridRowStart: (v) => `grid-row-start:${v};`,
  gridColumnEnd: (v) => `grid-column-end:${v};`,
  gridRowEnd: (v) => `grid-row-end:${v};`,
  ...SpacingCss,
};

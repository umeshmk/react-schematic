import {Css, FlexType, Spacing} from '../types';
import {SpacingCss} from './SpacingCss';

export const css: Css<FlexType & Spacing> = {
  display: (v) => `display:${v};`,
  flexFlow: (v) => `flex-flow:${v};`,
  flexDirection: (v) => `flex-direction:${v};`,
  flexWrap: (v) => `flex-wrap:${v};`,
  alignItems: (v) => `align-items:${v};`,
  alignContent: (v) => `align-content:${v};`,
  justifyContent: (v) => `justify-content:${v};`,
  gap: (v) => `grid-gap:${v};`,
  rowGap: (v) => `row-gap:${v};`,
  columnGap: (v) => `col-gap:${v};`,
  ...SpacingCss,
};

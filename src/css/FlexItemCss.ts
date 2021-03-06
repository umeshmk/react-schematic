import {Css, FlexItemType, Spacing} from '../types';
import {SpacingCss} from './SpacingCss';

export const css: Css<FlexItemType & Spacing> = {
  flex: (v) => `flex:${v};`,
  order: (v) => `order:${v};`,
  flexGrow: (v) => `flex-grow:${v};`,
  flexShrink: (v) => `flex-shrink:${v};`,
  flexBasis: (v) => `flex-basis:${v};`,
  alignSelf: (v) => `align-self:${v};`,
  ...SpacingCss,
};

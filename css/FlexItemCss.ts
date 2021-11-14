import { Css, FlexItemType } from "../types";

export const css: Css<FlexItemType> = {
  flex: (v) => `flex:${v};`,
  order: (v) => `order:${v};`,
  flexGrow: (v) => `flex-grow:${v};`,
  flexShrink: (v) => `flex-shrink:${v};`,
  flexBasis: (v) => `flex-basis:${v};`,
  alignSelf: (v) => `align-self:${v};`,
};

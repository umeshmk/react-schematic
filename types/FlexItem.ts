import { Media } from "./common";

/**
 * FLEX ITEM
 */

export type FlexItem = {
  flex?: string;
  order?: number;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: string;
  alignSelf?:
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "baseline";
};

export type FlexItemResponsive = {
  [key in keyof FlexItem]?: FlexItem[key] | Media<FlexItem[key]>;
};

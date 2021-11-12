import { Gap } from "./common";

type Basic = {
  flexFlow?: string;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
};
type AlignItems = "flex-start" | "flex-end" | "center" | "stretch" | "baseline";

type AlignContent =
  | "normal"
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "baseline"
  | "space-around"
  | "space-evenly"
  | "space-between";

type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-around"
  | "space-between"
  | "space-evenly";

/**
 * FLEX
 */
export type Flex = Basic & {
  alignItems?: AlignItems;
  alignContent?: AlignContent;
  justifyContent?: JustifyContent;
} & Gap;

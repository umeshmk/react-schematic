import defaultValues from "../defaultValues";
import { ContainerType, Css } from "../types";

export const css: Css<ContainerType> = {
  // key = xs,sm,md....
  maxWidth: (key) => `max-width: ${defaultValues.maxWidths[key]}px;`,
};

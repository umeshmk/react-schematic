import defaultValues from "../defaultValues";
import { ContainerType, Css } from "../types";
import { createCss } from "./createCss";

const css: Css<ContainerType> = {
  // key = xs,sm,md....
  maxWidth: (key) => `max-width: ${defaultValues.maxWidths[key]}px;`,
};

export const getContainerCss = (p) => createCss(css, p);

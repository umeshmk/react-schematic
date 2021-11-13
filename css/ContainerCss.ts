import { createMediaQueries, defaultMaxWidths } from "../createMediaQueries";
import { ContainerType } from "../types";

const atMedia = createMediaQueries();

type GetCss = {
  [key in keyof ContainerType]: (v) => string;
};

const css: GetCss = {
  maxWidth: (key) => key && `max-width: ${defaultMaxWidths[key]}px;`, // key = xs,sm,md....
};

const allMediaCss = (mediaKey, p) => {
  return `${atMedia[mediaKey]} { ${css.maxWidth(p.maxWidth[mediaKey])} }`;
};

export const ContainerCss = {
  css,
  allMediaCss,
};

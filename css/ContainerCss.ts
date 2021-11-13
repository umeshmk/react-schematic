import defaultValues from "../defaultValues";
import { atMedia } from "../mediaQueries";
import { ContainerType } from "../types";

type GetCss = {
  [key in keyof ContainerType]: (v) => string;
};

const css: GetCss = {
  maxWidth: (key) => key && `max-width: ${defaultValues.maxWidths[key]}px;`, // key = xs,sm,md....
};

const allMediaCss = (mediaKey, p) => {
  return `${atMedia[mediaKey]} { ${css.maxWidth(p.maxWidth[mediaKey])} }`;
};

export const ContainerCss = {
  css,
  allMediaCss,
};

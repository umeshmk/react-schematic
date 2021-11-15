import {ContainerType, Css, MaxWidths} from '../types';

export const getCss = (maxWidths: MaxWidths) => {
  const css: Css<ContainerType> = {
    // key = xs,sm,md....
    // @ts-ignore
    maxWidth: (key) => `max-width: ${maxWidths[key]}px;`,
  };

  return css;
};

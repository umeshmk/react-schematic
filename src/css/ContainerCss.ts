import {ContainerType, Css, MaxWidths, Spacing} from '../types';
import {SpacingCss} from './SpacingCss';

export const getCss = (maxWidths: MaxWidths) => {
  const css: Css<ContainerType & Spacing> = {
    // key = xs,sm,md....
    // @ts-ignore
    maxWidth: (key) => `max-width: ${maxWidths[key]}px;`,
    ...SpacingCss,
  };

  return css;
};

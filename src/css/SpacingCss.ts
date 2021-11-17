import {Css, Spacing} from '../types';

export const SpacingCss: Css<Spacing> = {
  margin: (v) => `margin: ${v};`,
  mt: (v) => `margin-top: ${v};`,
  mb: (v) => `margin-bottom: ${v};`,
  mr: (v) => `margin-right: ${v};`,
  ml: (v) => `margin-left: ${v};`,
  mx: (v) => `margin-left: ${v};margin-right: ${v};`,
  my: (v) => `margin-top: ${v};margin-bottom: ${v};`,

  padding: (v) => `padding: ${v};`,
  pt: (v) => `padding-top: ${v};`,
  pb: (v) => `padding-bottom: ${v};`,
  pr: (v) => `padding-right: ${v};`,
  pl: (v) => `padding-left: ${v};`,
  px: (v) => `padding-left: ${v};padding-right: ${v};`,
  py: (v) => `padding-top: ${v};padding-bottom: ${v};`,
};

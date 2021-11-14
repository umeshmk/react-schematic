import {isDef, isNotObj, isObj} from '../helper';
import {CreateCss} from '../types';
// import { atMedia } from "../mediaQueries";

// p is all props of a component
// p > css ---- more props to iterate.
// so iterate over css is faster

// eg: prop='foo'
const createValidCss = (css, p) =>
  Object.keys(css)
    .map((key) => {
      let propValue = p[key];
      if (isDef(propValue) && isNotObj(propValue)) return css[key](propValue);
    })
    .join(';');

// eg: prop={{ xs:'bar', md:'foo' }}
const createValidMediaCss = (css, p, mediaKey) => {
  let mediaCss: string[] = Object.keys(css).map((key) => {
    const value = p[key];
    if (isObj(value)) {
      const mediaValue = value[mediaKey];
      if (isDef(mediaValue)) return css[key](mediaValue);
    }
  });

  return mediaCss;
};

const createValidAllMediaCss = (css, p, atMedia) =>
  Object.keys(atMedia)
    .map((mediaKey) => {
      const mediaCss = createValidMediaCss(css, p, mediaKey);
      return `${atMedia[mediaKey]} { ${mediaCss.join(';')} }`;
    })
    .join(';');

export const createCss: CreateCss = (css, p, atMedia) =>
  createValidCss(css, p) + createValidAllMediaCss(css, p, atMedia);

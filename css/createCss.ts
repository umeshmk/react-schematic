import { isDef, isNotObj, isObj } from "../helper";
import { atMedia } from "../mediaQueries";

// allProps > css ---- more props to iterate.
// so iterate over css is faster

// p is all props of a component

// eg: prop='foo'
const createValidCss = (css, p) =>
  Object.keys(css)
    .map((key) => {
      let propValue = p[key];
      if (isDef(propValue) && isNotObj(propValue)) return css[key](propValue);
    })
    .join(";");

// eg: prop={{ xs:'bar', md:'foo' }}
const createValidMediaCss = (css, p, mediaKey) => {
  let mediaCss: string[] = Object.keys(css).map((key) => {
    let prop = {
      value: p[key],
      mediaValue: p[key][mediaKey],
    };

    if (isObj(prop.value) && isDef(prop.mediaValue)) {
      return css[key](prop.mediaValue);
    }
  });

  return `${atMedia[mediaKey]} { ${mediaCss.join(";")} }`;
};

const createValidAllMediaCss = (css, p) =>
  Object.keys(atMedia)
    .map((mediaKey) => createValidMediaCss(css, p, mediaKey))
    .join(";");

export const createCss = (css, p) =>
  createValidCss(css, p) + createValidAllMediaCss(css, p);

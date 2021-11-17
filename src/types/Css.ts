// type Spacing

import {ValidComponents} from './common';
import {MediaQueries} from './Media';
import {Spacing} from './Spacing';

type ValidProps = ValidComponents & Spacing;

// T = any component type but not responsive type
export type Css<T extends ValidProps> = {
  [key in keyof T]: (v: T[key]) => string;
};

export type CreateCss = (
  css: Css<ValidProps>,
  p: any,
  atMedia: MediaQueries
) => string;

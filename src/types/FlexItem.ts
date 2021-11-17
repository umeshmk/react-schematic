/**
 * FLEX ITEM
 */

import {Spacing} from './Spacing';

export type FlexItemType = {
  flex?: string;
  order?: number;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: string;
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline';
} & Spacing;

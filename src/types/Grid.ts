import {Spacing} from './Spacing';

export type GridType = {
  // type Basic
  display?: 'grid' | 'inline-grid';
  grid?: string; // short for template & auto

  // type Template
  gridTemplate?: string;
  gridTemplateAreas?: string;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;

  // type PlaceItems
  placeItems?: string; // <align-items> / <justify-items>
  justifyItems?: 'start' | 'end' | 'center' | 'stretch';
  alignItems?: 'start' | 'end' | 'center' | 'stretch';

  // type PlaceContent
  placeContent?: string; // <align-content> / <justify-content>
  justifyContent?:
    | 'start'
    | 'end'
    | 'center'
    | 'stretch'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  alignContent?:
    | 'start'
    | 'end'
    | 'center'
    | 'stretch'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';

  // type Auto
  gridAutoFlow?: 'row' | 'column' | 'row dense' | 'column dense';
  gridAutoRows?: string;
  gridAutoColumns?: string;

  // type Gap
  gap?: string;
  columnGap?: string;
  rowGap?: string;
} & Spacing;

export type GridItemType = {
  // type Area
  gridArea?: string;
  gridColumn?: string;
  gridRow?: string;
  gridColumnStart?: string;
  gridRowStart?: string;
  gridColumnEnd?: string;
  gridRowEnd?: string;

  // type PlaceSelf
  placeSelf?: string; // <align-Self> / <justify-Self>
  justifySelf?: 'start' | 'end' | 'center' | 'stretch';
  alignSelf?: 'start' | 'end' | 'center' | 'stretch';
};

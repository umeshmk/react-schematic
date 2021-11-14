import defaultValues, {getMaxWidths} from './defaultValues';
import {
  getContainer,
  getFlex,
  getFlexItem,
  getGrid,
  getGridItem,
} from './getComponents';
import {createMediaQueries} from './mediaQueries';
import {Breakpoints} from './types';

type ReactLayout = (breakpoints?: Breakpoints) => {
  Container: React.FC;
  Grid: React.FC;
  GridItem: React.FC;
  Flex: React.FC;
  FlexItem: React.FC;
};

export const reactLayout: ReactLayout = (
  breakpoints = defaultValues.breakpoints
) => {
  const atMedia = createMediaQueries(breakpoints);
  const maxWidth = getMaxWidths(breakpoints);

  return {
    Container: getContainer(atMedia, maxWidth),
    Grid: getGrid(atMedia),
    GridItem: getGridItem(atMedia),
    Flex: getFlex(atMedia),
    FlexItem: getFlexItem(atMedia),
  };
};

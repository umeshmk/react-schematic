import {FaMobileAlt} from 'react-icons/fa';
import {MdNotInterested} from 'react-icons/md';
import {SiCsswizardry, SiStyledcomponents, SiTypescript} from 'react-icons/si';
import {FlexItemResponsiveType, GridItemResponsiveType} from 'react-layout';

/**
 * Features
 */
const icons = {
  FaMobileAlt,
  MdNotInterested,
  SiCsswizardry,
  SiStyledcomponents,
  SiTypescript,
};

const getIcon = (icon: keyof typeof icons) => icons[icon];

export const features = [
  {
    Icon: getIcon('FaMobileAlt'),
    text: 'Responsive',
    order: 2,
  },
  {
    Icon: getIcon('SiTypescript'),
    text: 'Typed',
    order: 4,
  },
  {
    Icon: getIcon('MdNotInterested'),
    text: 'Themeless',
    order: 3,
  },
  {
    Icon: getIcon('SiStyledcomponents'),
    text: 'Styled Component',
    order: 1,
  },
  {
    Icon: getIcon('SiCsswizardry'),
    text: 'Css Named Props',
    order: 5,
  },
];

/**
 * Grid items data
 */
type GridItemsData = GridItemResponsiveType & {
  text: string;
};
export const gridItemsData: GridItemsData[] = [
  {
    text: '<GridItem> 1',
    gridArea: {md: '2/2/span 1/span 1'},
  },
  {
    text: '<GridItem> 2',
  },
  {
    text: '<GridItem> 3',
  },
  {
    text: '<GridItem> 4',
  },
  {
    text: '<GridItem> 5',
    gridArea: '1/1/span 1/span 1',
  },
  {
    text: '<GridItem> 6',
  },
];

/**
 * Flex items data
 */
type FlexItemsData = FlexItemResponsiveType & {
  text: string;
};
export const flexItemsData: FlexItemsData[] = [
  {
    text: '<FlexItem> 1',
    order: 3,
  },
  {
    text: '<FlexItem> 2',
    order: 4,
    flexGrow: {xs: 1, md: 0},
  },
  {
    text: '<FlexItem> 3',
    order: 1,
  },
  {
    text: '<FlexItem 4',
    flexGrow: {xs: 1, md: 0},
  },
];

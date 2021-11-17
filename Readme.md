# React Schematic

**Build responsive react layouts using styled schematics without an overhead of any theme configuration**

[React Schematic](https://umeshmk.github.io/react-schematic/)

[React Schematic - Docs](https://umeshmk.github.io/react-schematic/docs)

### Install

```sh
npm i react-schematic
```

### Usage

```tsx
import {reactSchematic, breakpoints, Breakpoints} from 'react-schematic';

// Pass custom breakpoints as min-width
let custom: Breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

// Get responsive styled.div components
const {Container, Flex, FlexItem, Grid, GridItem} = reactSchematic(
  custom || breakpoints
);
```

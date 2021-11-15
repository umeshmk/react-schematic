import {Breakpoints, reactLayout} from 'react-layout';

let breakpoints: Breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

export const {Container, Flex, FlexItem, Grid, GridItem} =
  reactLayout(breakpoints);

export const coding = `
import {reactLayout, breakpoints, Breakpoints} from 'react-layout';

// Pass custom breakpoints 
let custom:Breakpoints = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  };

// Get responsive styled.div components 
const {Container, Flex, FlexItem, Grid, GridItem} = reactLayout(custom || breakpoints);

`;

export const codingJsx = `
<Container maxWidth={{md: 'sm', lg: 'md', xl: 'lg'}}>  
  <h1>{'<Container>'}</h1>

  <h1>{'<Grid>'}</h1>
  <Grid    
    gridTemplateColumns={{
      xs: 'repeat(1,1fr)',
      md: 'repeat(2,1fr)',
      lg: 'repeat(3,1fr)',
    }}
    gap="2rem">
    <GridItem gridArea={{md: '2/2/span 1/span 1'}}>
      <h3>{'<GridItem>'} 1</h3>
    </GridItem>
    <GridItem>
      <h3>{'<GridItem>'} 2</h3>
    </GridItem>
    <GridItem>
      <h3>{'<GridItem>'} 3</h3>
    </GridItem>
    <GridItem>
      <h3>{'<GridItem>'} 4</h3>
    </GridItem>
    <GridItem gridArea="1/1/span 1/span 1">
      <h3>{'<GridItem>'} 5</h3>
    </GridItem>
    <GridItem>
      <h3>{'<GridItem>'} 6</h3>
    </GridItem>
  </Grid>
  <h1>{'<Flex>'}</h1>
  <Flex    
    justifyContent="space-between"
    alignItems={{xs: 'stretch'}}
    alignContent={{xs: 'stretch'}}
    gap="2rem"
    flexWrap="wrap">
    <FlexItem order={3}>
      <h3>{'<FlexItem>'} 1</h3>
    </FlexItem>
    <FlexItem order={4} flexGrow={{xs: 1, md: 0}}>
      <h3>{'<FlexItem>'} 2</h3>
    </FlexItem>
    <FlexItem order={1}>
      <h3>{'<FlexItem>'} 3</h3>
    </FlexItem>
    <FlexItem flexGrow={{xs: 1, md: 0}}>
      <h3>{'<FlexItem>'} 4</h3>
    </FlexItem>
  </Flex>
</Container>
`;

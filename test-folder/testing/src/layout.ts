import {reactLayout} from 'react-layout';

let breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

export const {Container, Flex, FlexItem, Grid, GridItem} =
  reactLayout(breakpoints);

export const coding = `
let breakpoints = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  };
  
const {Container, Flex, FlexItem, Grid, GridItem} = reactLayout(breakpoints);
  
`;

export const codingJsx = `
<Container
maxWidth={{md: 'sm', lg: 'md', xl: 'lg'}}
className="container">

    <h1>{'<Container>'}</h1>

    <h1 className="gridH1">{'<Grid>'}</h1>
    <Grid
    className="grid"
    gridTemplateRows="auto auto"
    gridTemplateColumns="repeat(2,1fr)"
    gap="2rem">
        <GridItem className="grid-item" gridArea="2/2/span 1/span 1">
            <h3>{'<GridItem>'} 1</h3>
        </GridItem>
        <GridItem className="grid-item">
            <h3>{'<GridItem>'} 2</h3>
        </GridItem>
        <GridItem className="grid-item" gridArea="1/1/span 1/span 1">
            <h3>{'<GridItem>'} 3</h3>
        </GridItem>
        <GridItem className="grid-item">
            <h3>{'<GridItem>'} 4</h3>
        </GridItem>
    </Grid>
    <h1 className="flexH1">{'<Flex>'}</h1>
    <Flex className="flex" justifyContent="space-between" gap="2rem">
        <FlexItem className="flex-item" order={3}>
            <h3>{'<FlexItem>'} 1</h3>
        </FlexItem>
        <FlexItem className="flex-item" order={4}>
            <h3>{'<FlexItem>'} 2</h3>
        </FlexItem>
        <FlexItem className="flex-item" order={1}>
            <h3>{'<FlexItem>'} 3</h3>
        </FlexItem>
        <FlexItem className="flex-item">
            <h3>{'<FlexItem>'} 4</h3>
        </FlexItem>
    </Flex>
</Container>

`;

export const codingJsx2 = `
 <Container maxWidth={{md: 'sm', lg: 'md', xl: 'lg'}} >
   <h1>{'<Container>'}</h1>
   <h1>{'<Grid>'}</h1>
   <Grid     
     gridTemplateRows="auto auto"
     gridTemplateColumns="repeat(2,1fr)"
     gap="2rem">
     <GridItem gridArea="2/2/span 1/span 1">
       <h3>{'<GridItem>'} 1</h3>
     </GridItem>
     <GridItem>
       <h3>{'<GridItem>'} 2</h3>
     </GridItem>
     <GridItem gridArea="1/1/span 1/span 1">
       <h3>{'<GridItem>'} 3</h3>
     </GridItem>
     <GridItem>
       <h3>{'<GridItem>'} 4</h3>
     </GridItem>
   </Grid>
   <h1>{'<Flex>'}</h1>
   <Flex justifyContent="space-between" gap="2rem">
     <FlexItem order={3}>
       <h3>{'<FlexItem>'} 1</h3>
     </FlexItem>
     <FlexItem order={4}>
       <h3>{'<FlexItem>'} 2</h3>
     </FlexItem>
     <FlexItem order={1}>
       <h3>{'<FlexItem>'} 3</h3>
     </FlexItem>
     <FlexItem> 
       <h3>{'<FlexItem>'} 4</h3>
     </FlexItem>
   </Flex>
 </Container>
    
`;

export const coding = `
import {reactSchematic, breakpoints, Breakpoints} from 'react-schematic';

// Pass custom breakpoints as min-width
let custom:Breakpoints = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  };

// Get responsive styled.div components 
const {Container, Flex, FlexItem, Grid, GridItem} = reactSchematic(custom || breakpoints);

`;

export const codingJsx = `

export const Example = () => {
    return (
      <>
        <Container maxWidth={{md: 'sm', lg: 'md', xl: 'lg'}}>
          <h1>{'<Container>'}</h1>
  
          <h1>{'<Grid>'}</h1>
          <Grid
            gridTemplateColumns={{
              xs: 'repeat(1,1fr)',
              md: 'repeat(2,1fr)',
              lg: 'repeat(3,1fr)',
            }}              
            pt="2rem"
            pb="2rem"
            pr="2rem"
            pl="2rem"
            gap="2rem">
            {gridItemsData.map((item) => (
              <GridItem
                key={item.text}
                gridArea={item.gridArea}
                padding={{xs: '1rem', md: '2rem', lg: '3rem'}}>
                <h3>{item.text}</h3>
              </GridItem>
            ))}
          </Grid>
  
          <h1>{'<Flex>'}</h1>
          <Flex
            justifyContent="space-between"
            alignItems={{xs: 'stretch'}}
            alignContent={{xs: 'stretch'}}
            gap="2rem"
            flexWrap="wrap">
            {flexItemsData.map((item) => (
              <FlexItem
                key={item.text}
                order={item.order}
                flexGrow={item.flexGrow}>
                <h3>{item.text}</h3>
              </FlexItem>
            ))}
          </Flex>
        </Container>
      </>
    );
  };
  

`;

export const codingData = `

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

`;

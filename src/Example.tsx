import {flexItemsData, gridItemsData} from './data';
import {Container, Flex, FlexItem, Grid, GridItem} from './layout';

export const Example = () => {
  return (
    <>
      <Container maxWidth={{md: 'sm', lg: 'md', xl: 'lg'}} className="example">
        <h1>{'<Container>'}</h1>

        <h1>{'<Grid>'}</h1>
        <Grid
          className="grid"
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
          className="flex"
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

import './App.css';
import {
  coding,
  codingJsx2,
  Container,
  Flex,
  FlexItem,
  Grid,
  GridItem,
} from './layout';
import './prism.css';
import './prism.js';

function App() {
  return (
    <>
      <Container className="codebox" maxWidth="md">
        <h1 className="title">React Layout</h1>
        <div className="features">
          <ul>
            <li>Responsive</li>
            <li>Typed</li>
            <li>Themeless</li>
            <li>Styled Component</li>
          </ul>
        </div>

        <pre>
          <code className="language-tsx">{coding}</code>
        </pre>
      </Container>
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

      <Container className="codebox" maxWidth="md">
        <h1 className="title">Example</h1>
        <pre>
          <code className="language-tsx">{codingJsx2}</code>
        </pre>
      </Container>
    </>
  );
}

export default App;

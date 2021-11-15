import './App.css';
import {Example} from './Example';
import {coding, codingJsx, Container, Flex} from './layout';
import {Nav} from './Nav';
import './prism.css';
import './prism.js';

function App() {
  return (
    <>
      <Nav />
      <Container className="codebox" maxWidth="md">
        <h1 className="title">React Layout</h1>
        <div className="features">
          <Flex
            className="ul"
            flexDirection={{xs: 'column', md: 'row'}}
            justifyContent="space-between"
            alignItems="center">
            <li>Responsive</li>
            <li>Typed</li>
            <li>Themeless</li>
            <li>Styled Component</li>
            <li>Css Named Props</li>
          </Flex>
        </div>

        <pre>
          <code className="language-tsx">{coding}</code>
        </pre>
      </Container>
      <h1 className="title example">Example</h1>
      <Example />
      <Container className="codebox" maxWidth="md">
        <h1 className="title code">Code</h1>
        <pre>
          <code className="language-tsx">{codingJsx}</code>
        </pre>
      </Container>
    </>
  );
}

export default App;

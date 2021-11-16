import {useState} from 'react';
import {BsLayoutWtf} from 'react-icons/bs';
import './App.css';
import {coding, codingData, codingJsx} from './codeData';
import {features} from './data';
import {Example} from './Example';
import {Container, Flex, FlexItem} from './layout';
import {Nav} from './Nav';
import './prism.css';
import './prism.js';

function App() {
  const [codeTab, setCodeTab] = useState(1);
  return (
    <>
      <Nav />
      <Container maxWidth="md">
        <BsLayoutWtf className="logo-back" />
        <h1 className="title">
          <BsLayoutWtf className="logo" />
          <br />
          React Layout
        </h1>
        <p>
          Build responsive react layouts without an overhead of any theme
          configuration
        </p>
        <div className="features">
          <Flex
            className="ul"
            flexDirection={{xs: 'row', md: 'row'}}
            justifyContent={{xs: 'space-around', md: 'space-between'}}
            // alignItems={{xs: 'stretch', md: 'center'}}
            // alignContent={{xs: 'center'}}
            flexWrap="wrap">
            {features.map(({text, Icon, order}) => (
              <FlexItem className="li" key={text} order={order}>
                <Icon />
                {text}
              </FlexItem>
            ))}
          </Flex>
        </div>

        <pre>
          <code className="language-tsx">{coding}</code>
        </pre>
      </Container>
      <Container className="codebox" maxWidth="md">
        <h1 className="title">Example</h1>
        <Flex className="tabs" justifyContent="center">
          <div
            onClick={() => setCodeTab(1)}
            style={{opacity: `${codeTab === 1 ? '1' : '0.35'}`}}>
            Example
          </div>
          <div
            onClick={() => setCodeTab(2)}
            style={{opacity: `${codeTab === 2 ? '1' : '0.35'}`}}>
            Code
          </div>
          <div
            onClick={() => setCodeTab(3)}
            style={{opacity: `${codeTab === 3 ? '1' : '0.35'}`}}>
            Data
          </div>
        </Flex>
        <div style={{display: `${codeTab === 1 ? 'block' : 'none'}`}}>
          <Example />
        </div>
        <pre style={{display: `${codeTab === 2 ? 'block' : 'none'}`}}>
          <code className="language-tsx">{codingJsx}</code>
        </pre>
        <pre style={{display: `${codeTab === 3 ? 'block' : 'none'}`}}>
          <code className="language-tsx">{codingData}</code>
        </pre>

        {/* {codeTab && (
          <pre>
            <code className="language-tsx">{codingData}</code>
          </pre>
        )}

        {!codeTab && (
          <pre>
            <code className="language-tsx">{codingJsx}</code>
          </pre>
        )} */}
      </Container>
    </>
  );
}

export default App;

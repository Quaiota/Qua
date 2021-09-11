import { Web3ReactProvider } from '@web3-react/core';
import { Heading1 } from './UI/atom/Typography';

// @ts-ignore
function getLibrary(provider, connector) {
  // @ts-ignore
  return new Web3ReactProvider(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div>
        <Heading1>Hello Quaiota</Heading1>
      </div>
    </Web3ReactProvider>
  );
}

export default App;

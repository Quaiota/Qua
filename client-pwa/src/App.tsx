import { Web3ReactProvider } from '@web3-react/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './Auth/ProtectedRoute';
import Dashboard from './Pages/dashboard/Dashboard';
import Home from './Pages/Home';

// @ts-ignore
function getLibrary(provider, connector) {
  // @ts-ignore
  return new Web3ReactProvider(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <BrowserRouter>
        <Switch>
          <ProtectedRoute path='/dashboard' component={Dashboard} />
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </Web3ReactProvider>
  );
}

export default App;

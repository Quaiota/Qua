import { Web3ReactProvider } from '@web3-react/core';
import { createContext, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './auth/ProtectedRoute';
import { RootStore } from './mobx/rootStore';
import { iStore } from './mobx/store_interface';

import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/Home';
// @ts-ignore
function getLibrary(provider, connector) {
  // @ts-ignore
  return new Web3ReactProvider(provider);
}

export const StoreContext = createContext<iStore>({} as iStore);

export const useStore = () => useContext(StoreContext);

function App() {
  return (
    <StoreContext.Provider value={RootStore}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <BrowserRouter>
          <Switch>
            <ProtectedRoute path='/dashboard' component={Dashboard} />
            <Route exact path='/' component={Home} />
          </Switch>
        </BrowserRouter>
      </Web3ReactProvider>
    </StoreContext.Provider>
  );
}

export default App;

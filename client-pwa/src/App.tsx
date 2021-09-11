import { Web3ReactProvider } from '@web3-react/core';
import { createContext, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './Auth/ProtectedRoute';
import { RootStore } from './Mobx/rootStore';
import { iStore } from './Mobx/store_interface';
import Dashboard from './Pages/dashboard/Dashboard';
import Home from './Pages/Home';

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

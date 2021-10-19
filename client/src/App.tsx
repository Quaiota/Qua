import { Web3ReactProvider } from '@web3-react/core';
import { createContext, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './auth/ProtectedRoute';
import GlobalStyles from './GlobalStyle';
import { RootStore } from './mobx/rootStore';
import { iStore } from './mobx/store_interface';
import ConstructionSite from './pages/ConstructionSite';
import Dashboard from './pages/dashboard/Dashboard';
import Settings from './pages/dashboard/dashboardSettings/Settings';

import Home from './pages/Home';
import LitePaper from './pages/litepaper';
import OnBoard from './pages/onboarding';
import SecureAccount from './pages/onboarding/SecureAccount';
import VerifyPassword from './pages/onboarding/VerifyPassword';
import SocialWall from './pages/Social/SocialWall';
import DashboardLayout from './ui/layout/DashboardLayout';

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
        <GlobalStyles />
        <BrowserRouter>
          <Switch>
            <ProtectedRoute
              exact
              path='/dashboard'
              render={() => <h1>Hello world</h1>}
            />
            <ProtectedRoute exact path='/social' component={SocialWall} />

            <Route path='/onboarding/secure' component={SecureAccount} />
            <Route path='/onboarding/verify' component={VerifyPassword} />
            <Route exact path='/onboarding' component={OnBoard} />
            <Route exact path='/play' component={ConstructionSite} />
            <Route exact path='/litepaper' component={LitePaper} />
            <Route exact path='/' component={Home} />
          </Switch>
        </BrowserRouter>
      </Web3ReactProvider>
    </StoreContext.Provider>
  );
}

export default App;

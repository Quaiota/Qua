
import { Web3ReactProvider } from '@web3-react/core';
import { createContext, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './auth/ProtectedRoute';
import GlobalStyles from './GlobalStyle';
import { RootStore } from './mobx/rootStore';
import { iStore } from './mobx/store_interface';

import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/Home';
import OnBoard from './pages/onboarding';
import SecureAccount from './pages/onboarding/SecureAccount';
import VerifyPassword from './pages/onboarding/VerifyPassword';
import SocialWall from './pages/Social/SocialWall';

import Website from './Pages/website/Website'


// @ts-ignore
function getLibrary(provider, connector) {
  // @ts-ignore
  return new Web3ReactProvider(provider)
}

export const StoreContext = createContext<iStore>({} as iStore)

export const useStore = () => useContext(StoreContext)

function App() {
  return (
    <StoreContext.Provider value={RootStore}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <GlobalStyles />
        <BrowserRouter>
          <Switch>

            <ProtectedRoute exact path='/dashboard' component={Dashboard} />
            <ProtectedRoute exact path='/social' component={SocialWall} />
            <Route path='/onboarding/secure' component={SecureAccount} />
            <Route path='/onboarding/verify' component={VerifyPassword} />
            <Route exact path='/onboarding' component={OnBoard} />
            <Route exact path='/' component={Home} />

            <Route exact path="/" component={Website} />

          </Switch>
        </BrowserRouter>
      </Web3ReactProvider>
    </StoreContext.Provider>
  )
}

export default App

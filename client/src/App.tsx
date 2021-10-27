import { Web3ReactProvider } from '@web3-react/core'
import { createContext, lazy, Suspense, useContext } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ProtectedRoute from './auth/ProtectedRoute'
import GlobalStyles from './GlobalStyle'
import { RootStore } from './mobx/rootStore'
import { iStore } from './mobx/store_interface'
import ConstructionSite from './pages/ConstructionSite'
// import Home from './pages/Home'
import LitePaper from './pages/litepaper'
import OnBoard from './pages/onboarding'
import SocialOnBoarding from './pages/Social/SocialOnBoarding'

const SocialLayout = lazy(() => import('./ui/layout/SocialLayout'))
const DashboardLayout = lazy(() => import('./ui/layout/DashboardLayout'))

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
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
            <Switch>
              <ProtectedRoute path="/social" component={SocialLayout} />
              <ProtectedRoute exact path="/" component={DashboardLayout} />
              <ProtectedRoute
                exact
                path="/onboarding/social"
                component={SocialOnBoarding}
              />

              <Route exact path="/onboarding" component={OnBoard} />
              <Route exact path="/play" component={ConstructionSite} />
              <Route exact path="/litepaper" component={LitePaper} />
            </Switch>
          </BrowserRouter>
        </Suspense>
      </Web3ReactProvider>
    </StoreContext.Provider>
  )
}

export default App

import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './dashboard'

const Tube = React.lazy(() =>
  import('./tube').then((module) => ({
    default: module.Tube
  }))
)

const Social = React.lazy(() =>
  import('./social').then((module) => ({
    default: module.Social
  }))
)

const Music = React.lazy(() =>
  import('./music').then((module) => ({
    default: module.Music
  }))
)

export default class AdminPages extends React.Component {
  render() {
    return (
      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Switch>
            {/* dashboard page */}
            <Route exact path="/app/" component={Dashboard} />

            <Route exact path="/app/tube" component={Tube} />

            <Route exact path="/app/social" component={Social} />

            <Route exact path="/app/music" component={Music} />

            <Route exact path="/app/*" component={() => <p>404 page</p>} />
          </Switch>
        </Suspense>
      </main>
    )
  }
}

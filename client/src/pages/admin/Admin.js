import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './dashboard'
import Music from './music'
import Social from './social'
import Tube from './tube'

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

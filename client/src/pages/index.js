import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Admin from './admin'
import Website from './website'

export default class App extends React.Component {
  renderPublicPages() {
    return (
      <Switch>
        <Route exact path="/" component={Website} />
      </Switch>
    )
  }

  render() {
    return (
      // <StoreProvider>
      <Router>
        <div>
          {/* declare sub routes */}
          <Switch>
            {/* dashboard routes */}
            <Route path="/app" component={Admin} />

            {/* public pages */}
            <Route path="/" render={this.renderPublicPages} />

            {/* 404 pages */}
            <Route path="*" component={() => <p>404 page</p>} />
          </Switch>
        </div>
      </Router>
      // </StoreProvider>
    )
  }
}

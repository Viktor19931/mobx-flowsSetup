// @flow

import React from 'react'
import { Route, Switch } from 'react-router'

import AuthStore from './stores/AuthStore'
import Home from './screens/Home'
import Login from './screens/Login'

const routes = (store: AuthStore) => (
  <Switch>
    <Route
      exact
      path="/home"
      render={rp => (
        <Home
          {...rp}
          title="Home page"
          description="Home page description"
        />
      )}
    />
    <Route
      exact
      path="/"
      render={rp => <Login {...rp} store={store} />}
    />
  </Switch>
)

export default routes

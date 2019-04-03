// @flow

import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './screens/Home'
import Login from './screens/Login'

const routes = () => (
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
      render={rp => <Login {...rp} />}
    />
  </Switch>
)

export default routes

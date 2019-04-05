// @flow

import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './screens/Home'
import Login from './screens/Login'
import PrivateRoute from './components/PrivateRoute'

const routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <PrivateRoute path="/home" component={Home} />} />
  </Switch>
)

export default routes

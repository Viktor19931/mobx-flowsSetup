// @flow

import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './screens/Home'
import Login from './screens/Login'

const routes = () => (
  <Switch>
    <Route exact path="/home" component={Home} />} />
    <Route exact path="/" component={Login} />
  </Switch>
)

export default routes

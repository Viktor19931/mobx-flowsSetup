// @flow

import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './screens/Home'
import Login from './screens/Login'
import PrivateRoute from './components/PrivateRoute'

type routesProps = {}

const routes = (props: routesProps) => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/home" CustomComponent={Home} /> />
    </Switch>
  )
}

export default routes

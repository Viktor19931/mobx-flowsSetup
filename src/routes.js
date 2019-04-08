// @flow

import React from 'react'
import { Route, Switch } from 'react-router'
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react'

import Home from './screens/Home'
import Login from './screens/Login'
import PrivateRoute from './components/PrivateRoute'
import AuthStore from './stores/AuthStore'

type routesProps = {
  // auth: boolean,
}

const routes = (props: routesProps) => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} /> />
    </Switch>
  )
}

export default routes

// @flow

import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react'

import AuthStore from '../stores/AuthStore'

type PrivateRouteProps = {
  component: Component<any>,
  rest: any,
  authStore: AuthStore
}

const PrivateRoute = ({ component: Component, authStore, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
          authStore.auth === true ? 
            <Component {...props} /> : 
            <Redirect to="/" />)}
    />
  )
}

export default compose(
  inject('authStore'),
  observer
)(PrivateRoute)

// @flow

import React from 'react'
import { Route, Redirect } from 'react-router'
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react'

import AuthStore from '../stores/AuthStore'

type PrivateRouteProps = {
  CustomComponent: any,
  authStore: AuthStore,
}

const PrivateRoute = ({ CustomComponent, authStore: { auth } }: PrivateRouteProps) => {
  return (
    <Route render={props => (
      auth ? 
      <CustomComponent {...props} /> : 
      <Redirect to="/" />)} />
  )
}

export default compose(
  inject('authStore'),
  observer
)(PrivateRoute)

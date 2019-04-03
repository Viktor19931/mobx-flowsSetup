// @flow

import React, { Component } from 'react'
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react'

import routes from './routes'
import AuthStore from './stores/AuthStore'
import Loader from './components/Loader'

type AppProps = {
  authStore: AuthStore,
}

class App extends Component<AppProps> {
  render() {
    console.log('props ', this.props)
    const { authStore } = this.props
    const { isLoading } = authStore

    return isLoading ? <Loader /> : routes(authStore)
  }
}

export default compose(
  inject('authStore'),
  observer
)(App)

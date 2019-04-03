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
    const { isLoading } = this.props.authStore

    return isLoading ? <Loader /> : routes()
  }
}

export default compose(
  inject('authStore'),
  observer
)(App)

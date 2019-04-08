// @flow

import React, { Component } from 'react'
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

import Routes from './routes'
import AuthStore from './stores/AuthStore'
import Menu from './components/Menu'

type AppProps = {
  // authStore: AuthStore,
}

class App extends Component<AppProps> {
  render() {
    return (
      <>
        <DevTools />
        <Menu />
        <Routes />
      </>
    )
  }
}

export default App
  // inject('authStore'),
  // observer
// )(App)

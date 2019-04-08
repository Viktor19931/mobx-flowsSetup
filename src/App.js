// @flow

import React, { Component } from 'react'
import DevTools from 'mobx-react-devtools'

import Routes from './routes'
import Menu from './components/Menu'

type AppProps = {}

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
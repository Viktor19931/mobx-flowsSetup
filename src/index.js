// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { createBrowserHistory } from 'history'
import 'bootstrap/dist/css/bootstrap.css';

import App from './App'
import './i18n'
import AuthStore from './stores/AuthStore'
import * as serviceWorker from './serviceWorker'

export const history = createBrowserHistory()

const authStore = new AuthStore()
const stores = {
  authStore,
}

const Root = () => (
  <Provider {...stores}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
)

const rootElement = document.getElementById('root')

if (rootElement !== null) ReactDOM.render(Root(), rootElement) // fix flow

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

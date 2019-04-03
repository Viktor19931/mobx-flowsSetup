// @flow

import React, { Component } from 'react'
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react'

import AuthStore from '../../stores/AuthStore'
import { login } from '../../utils/firebase'

type LoginProps = {
  history: any,
  store: AuthStore,
}

type LoginState = {
  email: string,
  pass: string,
}

class Login extends Component<LoginProps, LoginState> {
  state = {
    email: '',
    pass: '',
  }

  handleChange = (
    event: SyntheticInputEvent<EventTarget>,
    key: string
  ) => {
    this.setState({ [key]: event.target.value })
  }

  handleSummit = () => {
    const { history, store } = this.props
    login('dffds', 'fefe')
      .then(() => {
        history.push('/home')
        store.firebaseCheckAuth()
      })
      .catch(error => store.logError(error.message))
  }

  render() {
    const { errorMsg } = this.props.store
    return (
      <div>
        <input
          type="text"
          value={this.state.email}
          onChange={(event: SyntheticInputEvent<EventTarget>) =>
            this.handleChange(event, 'email')
          }
        />
        <input
          type="password"
          value={this.state.pass}
          onChange={(event: SyntheticInputEvent<EventTarget>) =>
            this.handleChange(event, 'pass')
          }
        />
        <button type="submit" onClick={this.handleSummit}>
          {'Submit'}
        </button>
        {errorMsg !== '' && <p>{errorMsg}</p>}
      </div>
    )
  }
}

export default compose(
  inject('authStore'),
  observer
)(Login)

// @flow

import React, { Component } from 'react'
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react'

import AuthStore from '../../stores/AuthStore'
import { login } from '../../utils/firebase'

type LoginProps = {
  history: any,
  authStore: AuthStore,
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
    const { history, authStore } = this.props
    login(this.state.email, this.state.pass)
      .then(() => {
        history.push('/home')
        authStore.firebaseCheckAuth()
      })
      .catch(error => authStore.logError(error.message))
  }

  render() {
    const { errorMsg } = this.props.authStore
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

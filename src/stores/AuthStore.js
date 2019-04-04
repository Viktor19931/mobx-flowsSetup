// @flow

import { observable, decorate, action } from 'mobx'

import { firebaseAuth, logout } from '../utils/firebase'

class AuthStore {
  auth: boolean = false
  isLoading: boolean = false
  user: any = null
  errorMsg: string = ''

  firebaseCheckAuth = () => {
    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        this.auth = true
        this.isLoading = false
        this.user = user
      } else {
        this.auth = false
        this.isLoading = false
        this.user = null
      }
    })
  }

  logError = (error: string) => {
    this.errorMsg = error
  }

  logOut = () => logout()
}

decorate(AuthStore, {
  auth: observable,
  user: observable,
  isLoading: observable,
  errorMsg: observable,
  firebaseCheckAuth: action,
  logError: action,
  logOut: action,
})

export default AuthStore

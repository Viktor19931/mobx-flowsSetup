// @flow

import { observable, decorate, action } from 'mobx'

import { firebaseAuth } from '../utils/firebase'

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
}

decorate(AuthStore, {
  errorMsg: observable,
  firebaseCheckAuth: action,
  logError: action,
})

export default AuthStore

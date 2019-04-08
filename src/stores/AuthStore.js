// @flow

import { observable, decorate, action } from 'mobx'

import { firebaseAuth, logout, login } from '../utils/firebase'
import { history } from '../index'

const sleep = (time: number): Promise<any> => 
  new Promise(resolve => setTimeout(resolve, time));

class AuthStore {
  auth: boolean = false
  isLoading: boolean = false
  user: any = null
  errorMsg: string = ''

  logIn = (email: string, password: string) => {
      this.isLoading = true 
      login(email, password)
      .then(() => {
        history.push('/home')
        this.firebaseCheckAuth()
      })
      .catch(error => this.logError(error.message))
  }

  firebaseCheckAuth = () => {
    firebaseAuth().onAuthStateChanged(async(user) => {
      if (user) {
        this.auth = true
        this.isLoading = false
        this.user = user
        this.errorMsg = ''
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
  logIn: action,
  auth: observable,
  user: observable,
  isLoading: observable,
  errorMsg: observable,
  firebaseCheckAuth: action,
  logError: action,
  logOut: action,
})

export default AuthStore

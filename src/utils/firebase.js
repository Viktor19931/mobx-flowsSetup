// @flow

import * as firebase from 'firebase/app'
import "firebase/auth"
import "firebase/database"

const config = {
  apiKey: 'AIzaSyBy_OrlPpC6YkA3YGsnHFDXE3E6r5lAxso',
  authDomain: 'mobx-8b252.firebaseapp.com',
  databaseURL: 'https://mobx-8b252.firebaseio.com',
  projectId: 'mobx-8b252',
  storageBucket: 'mobx-8b252.appspot.com',
  messagingSenderId: '766358375819',
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export const auth = (email: string, pw: string) =>
  firebaseAuth().createUserWithEmailAndPassword(email, pw)

export const login = (email: string, pw: string) =>
  firebaseAuth().signInWithEmailAndPassword(email, pw)

export const logout = () =>
  firebaseAuth().signOut()

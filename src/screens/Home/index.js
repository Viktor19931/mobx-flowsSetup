// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react'

import { Title, Container, Description } from './style'
import AuthStore from './../../stores/AuthStore'

type HomeProps = {
  title: string,
  description: string,
  authStore: AuthStore
}

const Home = ({ title, description, authStore }: HomeProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Link to="/" onClick={authStore.logOut}>LogOut</Link>
    </Container>
  )
}

export default compose(
  inject('authStore'),
  observer
)(Home)

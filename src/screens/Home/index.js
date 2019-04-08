// @flow

import React from 'react'
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react'
import { withTranslation } from 'react-i18next'

import { Title, Container, Description } from './style'
import AuthStore from './../../stores/AuthStore'

type HomeProps = {
  authStore: AuthStore,
  t: any,
}

const Home = ({ t, authStore }: HomeProps) => {

  return (
    <Container>
      <Title>Home Component</Title>
      <Description>{t('Welcome to React')}</Description>
      <Description>{t('test:test')}</Description>
    </Container>
  )
}

export default compose(
  inject('authStore'),
  withTranslation(),
  observer
)(Home)

// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react'
import { withTranslation } from 'react-i18next'

import { Wrapper } from './style'
import When from '../When'
import SelectLang from './select'
import AuthStore from '../../stores/AuthStore'

type MenuProps = {
  authStore: AuthStore,
  t: any,
}

const Menu = ({ t, authStore }: MenuProps) => {
  return (
    <Wrapper>
      <When is={authStore.auth}>
        <Link to="/" onClick={authStore.logOut}>
          {t('Logout')}
        </Link>
      </When>
      <When is={!authStore.auth}>
        <Link to="/home">{t('Login')}</Link>
      </When>
      <SelectLang />
    </Wrapper>
  )
}

export default compose(
  inject('authStore'),
  withTranslation(),
  observer
)(Menu)

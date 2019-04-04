import React from 'react'
import { inject, observer } from 'mobx-react'
import { compose } from 'recompose'

import { Wrapper, Container, Div1, Div2, Div3, Div4 } from './style'

const Loader = () => {
  return (
    <Wrapper>
      <Container>
        <Div1 />
        <Div2 />
        <Div3 />
        <Div4 />
      </Container>
    </Wrapper>
  )
}

export default compose(
  inject('authStore'),
  observer
)(Loader)

// @flow

import React from 'react'

import { Title, Container, Description } from './style'

type HomeProps = {
  title: string,
  description: string,
}

const Home = ({ title, description }: HomeProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}

export default Home

import Title from 'components/Title'
import React from 'react'
import styled from 'styled-components'
import Analytics from './components/Analytics'
import Header from './components/Header'
import WalletConnect from './components/walletConnect'

const Container = styled.div`
  display: grid;
  grid-row-gap: 1.2rem;
  max-width: 100%;
  padding: 0 1rem 2.4rem 1rem;
  margin: auto;
`

const Dashboard = () => {
  return (
    <>
      <Header />
      <Container>
        <Title title="Overview" />
        <Analytics name="Tube" figure="0" />
        <Analytics name="Social" figure="0" />
        <Analytics name="Music" figure="0" />
      </Container>
      <WalletConnect />
    </>
  )
}

export default Dashboard

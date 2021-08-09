import React from 'react'
import styled from 'styled-components'
import Analytics from './components/Analytics'
import Bio from './components/Bio'
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
        <Bio />
        <Analytics
          name="Tube"
          figure="0"
          sum="Q0.00"
          time="0hrs"
          label="watch time"
        />
        <Analytics
          name="Social"
          figure="0"
          sum="Q0.00"
          time="0hrs"
          label="Activity time"
        />
        <Analytics
          name="Music"
          figure="0"
          sum="Q0.00"
          time="0hrs"
          label="Listen time"
        />
      </Container>
      <WalletConnect />
    </>
  )
}

export default Dashboard

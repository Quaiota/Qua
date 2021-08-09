import React from 'react'
import styled from 'styled-components'

const Connector = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.2rem;

  max-width: 100%;
  background: #1b1d1d;
  border-radius: 24px 24px 0px 0px;
  margin: 0 0.4rem;
`

const WalletConnect = () => {
  return <Connector>Connect your wallet</Connector>
}

export default WalletConnect

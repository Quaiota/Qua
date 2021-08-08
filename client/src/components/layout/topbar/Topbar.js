import IconNav from 'assets/Icons/nav'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  /* background: rgba(14, 15, 15, 0.8); */
  color: #fff;
  grid-area: nav;
  padding: 1.2rem;
  position: fixed;
  width: 100%;

  display: flex;
  align-items: center;
  backdrop-filter: blur(40px);

  z-index: 1;
`

const Topbar = () => {
  return (
    <Container>
      <IconNav />
    </Container>
  )
}

export default Topbar

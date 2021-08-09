import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  grid-area: sidebar;
  padding: 0.25rem;
  display: none;
  position: fixed;
  width: 248px;
  height: 100%;
  z-index: 2;

  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.02),
      rgba(255, 255, 255, 0.02)
    ),
    rgba(14, 15, 15, 0.8);
  backdrop-filter: blur(40px);
`

const Sidebar = () => {
  return (
    <Container>
      <h2>Sidebar</h2>
    </Container>
  )
}

export default Sidebar

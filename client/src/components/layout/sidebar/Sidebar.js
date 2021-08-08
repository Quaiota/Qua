import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: #9aaab7;
  grid-area: sidebar;
  padding: 0.25rem;
  display: none;
  position: fixed;
  width: 248px;
  height: 100%;
`

const Sidebar = () => {
  return (
    <Container>
      <h2>Sidebar</h2>
    </Container>
  )
}

export default Sidebar

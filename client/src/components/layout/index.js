import GlobalStyle from 'globalStyles'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Sidebar from './sidebar'
import Topbar from './topbar'

const Container = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;
  grid-template-rows: 0.1fr 1fr;
  grid-template-areas:
    'sidebar nav nav nav'
    'sidebar main main main';
  grid-gap: 0;
  transition: all 0.25s ease-in-out;
`
const Main = styled.main`
  background: #0e0f0f;
  color: white;
  grid-area: main;
  padding: 0;
  width: 100vw;
`

const Layout = ({ children, title }) => {
  useEffect(() => {
    document.title = `${title} - Quaiota`
  }, [title])

  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Topbar />
        <Sidebar />
        <Main>{children}</Main>
      </Container>
    </React.Fragment>
  )
}

export default Layout

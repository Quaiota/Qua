import React, { useEffect } from 'react'
import Sidebar from './sidebar'
import Topbar from './topbar'

const Layout = ({ children, title }) => {
  useEffect(() => {
    document.title = `${title} - Quaiota`
  }, [title])

  return (
    <div>
      <Topbar />
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}

export default Layout

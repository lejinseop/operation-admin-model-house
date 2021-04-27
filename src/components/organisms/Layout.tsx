import type { FC } from 'react'

import AppBar from './AppBar'
import Menu from './Menu'

const Layout: FC = ({ children }) => {
  return (
    <div>
      <header>
        <AppBar />
      </header>
      <main>
        <Menu />
        {children}
      </main>
    </div>
  )
}

export default Layout

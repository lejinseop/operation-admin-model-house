import type { FC } from 'react'

import AuthContext from '~/auth/AuthContext'
import createAuthProvider from '~/auth/authProvider'

const Context: FC = ({ children }) => {
  return (
    <AuthContext.Provider value={createAuthProvider()}>
      {children}
    </AuthContext.Provider>
  )
}

export default Context

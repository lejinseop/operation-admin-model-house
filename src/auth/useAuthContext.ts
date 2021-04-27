import { useContext } from 'react'

import AuthContext from './AuthContext'
import type { AuthProvider } from './AuthContext'

const useAuthProvider = (): AuthProvider => useContext(AuthContext)

export default useAuthProvider

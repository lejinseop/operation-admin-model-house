import { createContext } from 'react'
import { AuthProvider } from './types'

const defaultProvider: AuthProvider = {
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  checkAuth: () => Promise.resolve(),
  getPermissions: () => Promise.resolve(),
}

const AuthContext = createContext<AuthProvider>(defaultProvider)

export default AuthContext

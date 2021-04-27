import { createContext } from 'react'

export type AuthProvider = {
  login: () => Promise<any>
  logout: () => Promise<void>
  checkAuth: () => Promise<any>
  getPermissions: () => Promise<any>
}

const defaultProvider: AuthProvider = {
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  checkAuth: () => Promise.resolve(),
  getPermissions: () => Promise.resolve(),
}

const AuthContext = createContext<AuthProvider>(defaultProvider)

export default AuthContext

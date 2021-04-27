import { useContext } from 'react'
import AuthContext from '~/auth/AuthContext'
import { AuthProvider } from './types'

const useAuthProvider = (): AuthProvider => useContext(AuthContext)

export default useAuthProvider

import { useCallback } from 'react'

import useAuthProvider from './useAuthContext'

const useCheckAuth = () => {
  const authProvider = useAuthProvider()

  const checkAuth = useCallback(() => {
    authProvider.checkAuth().catch((error) => {
      throw error
    })
  }, [authProvider])

  return checkAuth
}

export default useCheckAuth

import { useCallback } from 'react'
import useAuthProvider from './useAuthContext'

type GetPermissions = () => Promise<any>

const useGetPermission = (): GetPermissions => {
  const authProvider = useAuthProvider()
  const getPermissions = useCallback(() => authProvider.getPermissions(), [
    authProvider,
  ])
  return getPermissions
}

export default useGetPermission

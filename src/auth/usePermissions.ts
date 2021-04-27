import { useState, useEffect } from 'react'
import useGetPermission from './useGetPermission'

interface UsePermissionsState {
  loading: boolean
  permissions?: any
  error?: any
}

const usePermssions = () => {
  const [state, setState] = useState<UsePermissionsState>({
    loading: false,
  })
  const getPermissions = useGetPermission()

  useEffect(() => {
    getPermissions()
      .then((permissions) => {
        setState({ loading: false, permissions })
      })
      .catch((error) => {
        setState({
          loading: false,
          error,
        })
      })
  }, [getPermissions, setState])

  return state
}

export default usePermssions

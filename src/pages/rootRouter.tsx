import { useState, useEffect } from 'react'
import type { FC } from 'react'
import { Switch, Route } from 'react-router-dom'

import useGetPermission from '~/auth/useGetPermission'

import Login from './Login'
import resolveChildRoutes from './resolveChildRoutes'
import type { ChildRouteElement } from './resolveChildRoutes'

const ChildRouter: FC = () => {
  const [childRoutes, setChildRoutes] = useState<ChildRouteElement[]>([])
  const getPermissions = useGetPermission()

  const initializeRoute = async () => {
    try {
      const permissions = await getPermissions()
      const childRoutes = resolveChildRoutes({ permissions })
      setChildRoutes(childRoutes)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    initializeRoute()
  }, [])

  return <Switch>{childRoutes}</Switch>
}

const RootRouter: FC = () => {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <ChildRouter />
    </Switch>
  )
}

export default RootRouter

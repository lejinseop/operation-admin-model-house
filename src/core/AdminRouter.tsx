import { FC, useState, useEffect, ComponentType, createElement } from 'react'
import { Switch, Route } from 'react-router-dom'
import { RouteElement, RoutesFunction } from '~/pages/routes'
import useGetPermission from '~/auth/useGetPermission'

interface AdminRouterProps {
  loginPage: ComponentType<any>
  children: RoutesFunction
}

const AdminRouter: FC<AdminRouterProps> = ({
  loginPage,
  children: resolveRoutes,
}) => {
  const [routes, setRoutes] = useState<RouteElement[]>([])
  const getPermissions = useGetPermission()

  const initializeResources = async () => {
    try {
      const permissions = await getPermissions()
      const routes = resolveRoutes({
        permissions,
      })
      setRoutes(routes)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    initializeResources()
  }, [])

  return (
    <Switch>
      <Route path="/login" exact render={() => createElement(loginPage)} />
      <Switch>{routes}</Switch>
    </Switch>
  )
}

export default AdminRouter

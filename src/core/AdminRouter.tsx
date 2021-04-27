import { FC, useState, useEffect, ComponentType, createElement } from 'react'
import { Switch, Route } from 'react-router-dom'
import useGetPermission from '~/auth/useGetPermission'
import { RouteElement, RoutesFunction } from '~/pages/routes'

interface AdminRouterProps {
  loginPage: ComponentType<any>
  children: RoutesFunction
}

const AdminRouter: FC<AdminRouterProps> = ({ loginPage, children }) => {
  const [computedChildren, setComputedChildren] = useState<RouteElement[]>([])
  const getPermissions = useGetPermission()

  const initializeResources = async () => {
    try {
      const permissions = await getPermissions()
      const resolveChildrenWithPermissions = children

      const childrenWithPermissions = resolveChildrenWithPermissions({
        permissions,
      })
      setComputedChildren(childrenWithPermissions)
      return childrenWithPermissions
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
      <Switch>{computedChildren}</Switch>
    </Switch>
  )
}

export default AdminRouter

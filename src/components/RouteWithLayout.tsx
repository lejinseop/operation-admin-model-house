import { FC, ComponentType, createElement } from 'react'
import { Route, RouteProps } from 'react-router-dom'
import Layout from './organisms/Layout'

interface RouteWithLayoutProps
  extends Omit<RouteProps, 'component' | 'render' | 'children'> {
  component: ComponentType<any>
  noLayout?: boolean
}

const RouteWithLayout: FC<RouteWithLayoutProps> = ({
  component,
  noLayout,
  ...other
}) => {
  if (noLayout) {
    return (
      <Route
        {...other}
        render={(routerProps) => createElement(component, { ...routerProps })}
      />
    )
  }

  return (
    <Route
      {...other}
      render={(routerProps) =>
        createElement(Layout, {}, createElement(component, { ...routerProps }))
      }
    />
  )
}

export default RouteWithLayout

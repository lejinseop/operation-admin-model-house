import { ReactElement, createElement, ComponentType, FC } from 'react'
import { Route, RouteProps } from 'react-router-dom'
import Layout from '~/components/organisms/Layout'
import Dashboard from './dashboard'
import * as member from './member'
import * as product from './product'
import NotFound from './NotFound'

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
      render={() => createElement(Layout, {}, createElement(component))}
    />
  )
}

interface RouteFunctionProps {
  permissions: any
}

export type RouteElement = ReactElement<RouteWithLayoutProps>

export type RoutesFunction = (props: RouteFunctionProps) => RouteElement[]

const routes: RoutesFunction = ({ permissions }) => {
  console.log(permissions)
  // permission check
  return [
    <RouteWithLayout exact key="/" path="/" component={Dashboard} />,
    <RouteWithLayout
      key="member-list"
      path="/member/list"
      component={member.MemberList}
    />,
    <RouteWithLayout
      key="member-show"
      path="/member/show"
      component={member.MemberShow}
    />,
    <RouteWithLayout
      key="product-list"
      path="/product/list"
      component={product.ProductList}
    />,
    <RouteWithLayout
      key="product-show"
      path="/product/show"
      component={product.ProductShow}
    />,
    <RouteWithLayout key="notFound" path="*" component={NotFound} />,
  ]
}

export default routes

import { createElement } from 'react'
import type { ReactElement, ComponentType, FC } from 'react'
import { Route } from 'react-router-dom'
import type { RouteProps } from 'react-router-dom'

import Layout from '~/components/organisms/Layout'
import Dashboard from './Dashboard'
import NotFound from './NotFound'

import { MemberList, MemberShow } from './member'
import { ProductList, ProductShow } from './product'

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

export type ChildRouteElement = ReactElement<RouteWithLayoutProps>

interface ResolveChildRoutesProps {
  permissions: any
}

export type ResolveChildRoutes = (
  props: ResolveChildRoutesProps,
) => ChildRouteElement[]

const resolveChildRoutes: ResolveChildRoutes = ({ permissions }) => {
  // permission check
  console.log(permissions)

  return [
    <RouteWithLayout exact key="/" path="/" component={Dashboard} />,
    <RouteWithLayout
      key="member-list"
      path="/member/list"
      component={MemberList}
    />,
    <RouteWithLayout
      key="member-show"
      path="/member/show"
      component={MemberShow}
    />,
    <RouteWithLayout
      key="product-list"
      path="/product/list"
      component={ProductList}
    />,
    <RouteWithLayout
      key="product-show"
      path="/product/show"
      component={ProductShow}
    />,
    <RouteWithLayout key="notFound" path="*" component={NotFound} />,
  ]
}

export default resolveChildRoutes

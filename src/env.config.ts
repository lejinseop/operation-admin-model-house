import env from 'env-var'

export const NODE_ENV = env.get('NODE_ENV').asString()
export const DEPLOY_ENV = env
  .get('REACT_APP_DEPLOY_ENV')
  .default('development')
  .asString()

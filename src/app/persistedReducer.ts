import { persistReducer } from 'redux-persist'
import createWebStorage from 'redux-persist/es/storage/createWebStorage'

import createNoopStorage from './createNoopStorage'
import rootReducer from './rootReducer'

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage()

const config = {
  key: 'root',
  storage,
  whitelist: ['inquiry'],
}

const persistedReducer = persistReducer(config, rootReducer)

export default persistedReducer

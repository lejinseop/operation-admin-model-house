import { Storage } from 'redux-persist'

const createNoopStorage = (): Storage => ({
  getItem(): Promise<string | null> {
    return Promise.resolve(null)
  },
  setItem(key: string, value: string): Promise<string> {
    return Promise.resolve(value)
  },
  removeItem(): Promise<void> {
    return Promise.resolve()
  },
})

export default createNoopStorage

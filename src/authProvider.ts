import { AuthProvider } from '~/auth/types'

interface MockUser {
  name: string
  isAdminMember: boolean
  role: string
}

const mockUser: MockUser = {
  name: 'Jane Doe',
  isAdminMember: true,
  role: 'all',
}

const createAuthProvider = (): AuthProvider => ({
  login: async () => {
    const currentUser = mockUser

    if (currentUser) {
      return currentUser
    }

    return Promise.reject(new Error('404'))
  },
  logout: async () => {
    return Promise.resolve()
  },
  checkAuth: async () => {
    const { name, isAdminMember } = mockUser
    if (name && isAdminMember) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('401'))
  },
  getPermissions: async () => {
    const currentUser = mockUser
    const { role } = currentUser

    if (!currentUser) {
      return Promise.reject(new Error('401'))
    }

    if (!role) {
      return Promise.reject(new Error('401'))
    }

    return role
  },
})

export default createAuthProvider

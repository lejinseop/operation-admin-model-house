export type AuthProvider = {
  login: () => Promise<any>
  logout: () => Promise<void>
  checkAuth: () => Promise<any>
  getPermissions: () => Promise<any>
}

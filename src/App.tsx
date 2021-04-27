import { ThemeProvider } from '@material-ui/core/styles'
import generateTheme from '~/theme'
import { BrowserRouter } from 'react-router-dom'
import createAuthProvider from '~/auth/authProvider'
import AdminContext from '~/core/AdminContext'
import AdminRouter from '~/core/AdminRouter'
import Login from '~/pages/Login'
import pageRoutes from '~/pages/routes'

function App() {
  return (
    <ThemeProvider theme={generateTheme()}>
      <BrowserRouter>
        <AdminContext authProvider={createAuthProvider()}>
          <AdminRouter loginPage={Login}>{pageRoutes}</AdminRouter>
        </AdminContext>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

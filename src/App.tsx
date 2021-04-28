import { ThemeProvider } from '@material-ui/core/styles'
import generateTheme from '~/theme'
import { BrowserRouter } from 'react-router-dom'
import AdminContext from '~/context'
import RootRouter from '~/pages/rootRouter'

function App() {
  return (
    <ThemeProvider theme={generateTheme()}>
      <BrowserRouter>
        <AdminContext>
          <RootRouter />
        </AdminContext>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

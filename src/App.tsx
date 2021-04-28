import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '~/app/store'

import AdminContext from '~/context'
import RootRouter from '~/pages/rootRouter'

import { ThemeProvider } from '@material-ui/core/styles'
import generateTheme from '~/theme'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={generateTheme()}>
        <BrowserRouter>
          <AdminContext>
            <RootRouter />
          </AdminContext>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App

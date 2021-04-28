import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from '~/app/store'

import AdminContext from '~/context'
import RootRouter from '~/pages/rootRouter'

import { ThemeProvider } from '@material-ui/core/styles'
import generateTheme from '~/theme'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={generateTheme()}>
          <BrowserRouter>
            <AdminContext>
              <RootRouter />
            </AdminContext>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App

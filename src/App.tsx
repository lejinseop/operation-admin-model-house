import { ThemeProvider } from '@material-ui/core/styles'
import generateTheme from '~/theme'

function App() {
  return (
    <ThemeProvider theme={generateTheme()}>
      <div className="App">haha</div>
    </ThemeProvider>
  )
}

export default App

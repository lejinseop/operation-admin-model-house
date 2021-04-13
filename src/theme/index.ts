import { createMuiTheme } from '@material-ui/core/styles'
import palette from './palette'
import typography from './typography'
import spacing from './spacing'

const generateTheme = () =>
  createMuiTheme({
    palette,
    typography,
    spacing,
  })

export default generateTheme

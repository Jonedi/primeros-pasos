import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@fontsource/montserrat-alternates/'
import '@fontsource/kanit'
import './index.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00AAFF',
      light: '#606060',
      dark: '#0c0c0c',
    },
    secondary: {
      main: '#CCA70A',
    },
    error: {
      main: '#2A002B',
    },
    warning: {
      main: '#F4CE2C',
    },
    info: {
      main: '#C0C0C0',
    },
  },
  typography: {
    fontFamily: "Montserrat Alternates",
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>,
)

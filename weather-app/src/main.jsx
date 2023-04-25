import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@fontsource/montserrat-alternates/'
import '@fontsource/kanit'
import './index.css'
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { SnackbarProvider } from "notistack";

const theme = createTheme({
  pallete: {},
  typography: {
    fontFamily: "Montserrat Alternates",
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <CssBaseline>
          <App />
        </CssBaseline>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>,
)

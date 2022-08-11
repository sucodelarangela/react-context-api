import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from 'pages/Login';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2A9F85'
    },
    secondary: {
      main: '#FF7070'
    },
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </StylesProvider>
  </React.StrictMode>
);
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/core/styles';
import { UsuarioProvider } from 'common/context/Usuario';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from 'routes';
import './index.css';

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
    {/* O StylesProvider vem do material-ui. A propriedade injectFirst indica que a página primeiro deve inserir o CSS do material-ui e só depois o nosso CSS. Dessa forma, o material-ui não vai sobreescrever os nossos estilos */}
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <UsuarioProvider>
          <Router />
        </UsuarioProvider>
      </ThemeProvider>
    </StylesProvider>
  </React.StrictMode>
);
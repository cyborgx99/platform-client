import React from 'react';
import { myTheme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalCSS from './styles/globalStyles';
import AppRoutes from './routes';

const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalCSS />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;

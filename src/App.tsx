import React from 'react';
import { ThemeProvider } from 'styled-components';

import AppRoutes from './routes';
import GlobalCSS from './styles/globalStyles';
import { myTheme } from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalCSS />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;

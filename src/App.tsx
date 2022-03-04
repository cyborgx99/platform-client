import React from 'react';
import { myTheme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalCSS from './styles/globalStyles';

const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalCSS />
    </ThemeProvider>
  );
};

export default App;

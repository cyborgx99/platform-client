import ApolloClientProvider from 'apollo';
import { AuthContextProvider } from 'auth';
import { envConfig, envConfigValidator } from 'enValidation';
import React from 'react';
import { ThemeProvider } from 'styled-components/macro';

import AppRoutes from './routes';
import GlobalCSS from './styles/globalStyles';
import { myTheme } from './styles/theme';

envConfigValidator(envConfig);

const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalCSS />
      <ApolloClientProvider>
        <AuthContextProvider>
          <AppRoutes />
        </AuthContextProvider>
      </ApolloClientProvider>
    </ThemeProvider>
  );
};

export default App;

import ApolloClientProvider from 'apollo';
import { AuthContextProvider } from 'auth';
import { SocketContextProvider } from 'common/socket';
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
          <SocketContextProvider>
            <AppRoutes />
          </SocketContextProvider>
        </AuthContextProvider>
      </ApolloClientProvider>
    </ThemeProvider>
  );
};

export default App;

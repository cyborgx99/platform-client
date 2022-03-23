import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { offsetLimitPagination } from '@apollo/client/utilities';
import { createUploadLink } from 'apollo-upload-client';
import React from 'react';

const client = new ApolloClient({
  link: createUploadLink({
    uri: process.env.REACT_APP_APOLLO_SERVER_URL,
    credentials: 'include',
  }),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getUsers: offsetLimitPagination(),
        },
      },
    },
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
});

const ApolloClientProvider: React.FC = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;

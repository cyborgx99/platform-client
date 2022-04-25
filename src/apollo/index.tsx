import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  split,
} from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import {
  getMainDefinition,
  offsetLimitPagination,
} from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';
import React from 'react';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_APOLLO_SERVER_URL,
  credentials: 'include',
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: process.env.REACT_APP_APOLLO_SERVER_URL_SUBSCRIPTION as string,
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
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

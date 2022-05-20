import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  FieldPolicy,
  InMemoryCache,
  split,
} from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { createUploadLink } from 'apollo-upload-client';
import { createClient } from 'graphql-ws';
import { mergeWith, omit } from 'lodash-es';
import React from 'react';

const httpLink = createUploadLink({
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
  // https://github.com/jaydenseric/apollo-upload-client/issues/221
  httpLink as unknown as ApolloLink
);

/** Concatenates incoming arrays with cached arrays for paginated queries. */
const queryWithPaginationOptions: FieldPolicy = {
  // Group query results with same args but different offset or limit into one cache.
  keyArgs: (args) => {
    const argsWithoutListParams = omit(args, 'offset', 'limit');

    return JSON.stringify(argsWithoutListParams);
  },
  merge: (existing, incoming, { variables }) => {
    if (variables?.offset === undefined || variables?.limit === undefined) {
      return incoming;
    }

    return mergeWith({}, existing, incoming, (existingArray, incomingArray) => {
      if (Array.isArray(incomingArray) && Array.isArray(existingArray)) {
        return [...existingArray.slice(0, variables.offset), ...incomingArray];
      }
      return undefined;
    });
  },
};

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getUsers: queryWithPaginationOptions,
          getLessonImages: queryWithPaginationOptions,
          getLessonContents: queryWithPaginationOptions,
        },
      },
    },
  }),
  defaultOptions: {
    query: { fetchPolicy: 'network-only' },
    watchQuery: { fetchPolicy: 'network-only', nextFetchPolicy: 'cache-first' },
  },
});

const ApolloClientProvider = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;

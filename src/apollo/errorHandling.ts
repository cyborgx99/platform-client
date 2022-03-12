import { ApolloError } from '@apollo/client';

export const handleApolloError = (error: ApolloError) => {
  if (!error) return '';
  if (
    error.networkError &&
    typeof window !== 'undefined' &&
    !window.navigator.onLine
  ) {
    return 'NO_INTERNET';
  } else if (error.networkError) {
    return 'NETWORK_ERROR';
  }
  return error.message;
};

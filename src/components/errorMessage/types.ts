import { ApolloError } from '@apollo/client';

export interface IErrorMessageProps {
  error: ApolloError | undefined;
}

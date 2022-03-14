import { ApolloError } from '@apollo/client';

export interface INewPasswordFormValues {
  password: string;
  confirmPassword: string;
}

export interface INewPasswordFormProps {
  loading: boolean;
  error: ApolloError | undefined;
}

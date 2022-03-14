import { ApolloError } from '@apollo/client';

export interface ResetPasswordLinkFormValues {
  email: string;
}

export interface IForgotPasswordFormProps {
  loading: boolean;
  error: ApolloError | undefined;
}

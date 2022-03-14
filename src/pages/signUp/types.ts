import { ApolloError } from '@apollo/client';

export interface SignUpFormValues {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface FormContentProps {
  loading: boolean;
  error: ApolloError | undefined;
}

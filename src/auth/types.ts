import { User } from 'apollo/graphql/generated.types';

export interface IAuthContext {
  user: User | undefined;
  loading: boolean;
  refetch: () => void;
}

export interface IAuthContextProviderProps {
  children: React.ReactNode;
}

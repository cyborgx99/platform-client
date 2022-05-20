import { User } from 'apollo/graphql/generated.types';

export interface IAuthContext {
  user: User | undefined;
}

export interface IAuthContextProviderProps {
  children: React.ReactNode;
}

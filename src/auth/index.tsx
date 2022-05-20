import { useQuery } from '@apollo/client';
import { GET_USER } from 'apollo/graphql';
import { Query } from 'apollo/graphql/generated.types';
import Spinner from 'components/spinner';
import React, { createContext, useContext } from 'react';

import { IAuthContext, IAuthContextProviderProps } from './types';

const AuthContext = createContext<IAuthContext>({
  user: undefined,
});

export const AuthContextProvider = ({
  children,
}: IAuthContextProviderProps) => {
  const { data, loading } = useQuery<Pick<Query, 'getUser'>>(GET_USER, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
  });

  const value: IAuthContext = {
    user: data?.getUser,
  };

  if (loading) return <Spinner type='animated' />;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

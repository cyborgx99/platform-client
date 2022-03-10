import { useQuery } from '@apollo/client';
import { GET_USER } from 'apollo/graphql';
import { Query } from 'apollo/graphql/generated.types';
import React, { createContext, useContext } from 'react';

import { IAuthContext, IAuthContextProviderProps } from './types';

const AuthContext = createContext<IAuthContext>({
  user: undefined,
  loading: true,
  refetch: () => {
    throw new Error('Called "refetch" without provider.');
  },
});

export const AuthContextProvider = ({
  children,
}: IAuthContextProviderProps) => {
  const { data, loading, refetch } = useQuery<Pick<Query, 'getUser'>>(
    GET_USER,
    {
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'network-only',
    }
  );

  const value: IAuthContext = {
    user: data?.getUser,
    loading,
    refetch,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

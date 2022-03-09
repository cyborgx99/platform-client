import { useQuery } from '@apollo/client';
import { GET_USER } from 'apollo/graphql';
import { Query } from 'apollo/graphql/generated.types';
import React, { createContext, useContext } from 'react';

import { IAuthContext, IAuthContextProviderProps } from './types';

const AuthContext = createContext<IAuthContext>({
  user: undefined,
  loading: true,
  logout: () => {
    throw new Error('Called "logout" without provider.');
  },
  refetchUser: () => {
    throw new Error('Called "logout" without provider.');
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

  const refetchUser = () => {
    refetch();
  };

  const value: IAuthContext = {
    user: data?.getUser,
    logout: () => {
      console.log('log out');
    },
    loading,
    refetchUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

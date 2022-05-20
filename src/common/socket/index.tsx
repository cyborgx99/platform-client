import { createContext, useContext } from 'react';
import React from 'react';
import { io } from 'socket.io-client';

import { ISocketContext, ISocketContextProviderProps } from './types';

// not adding any credentials as some pages can be used by unathorized users
const socket = io(`${process.env.REACT_APP_SOCKER_SERVER_URL}/notes`);

export const getSocket = () => {
  if (socket.disconnected) {
    socket.connect();
  }
  return socket;
};

const SocketContext = createContext<ISocketContext>({
  socket: getSocket(),
});
SocketContext.displayName = 'SocketContext';

export const SocketContextProvider = ({
  children,
}: ISocketContextProviderProps) => {
  const gotSocket = getSocket();
  const value: ISocketContext = {
    socket: gotSocket,
  };

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error('Cannot be rendered outside of the SocketContext');
  }
  return context;
};

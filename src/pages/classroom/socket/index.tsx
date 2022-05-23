import { createContext, useContext, useEffect, useState } from 'react';
import React from 'react';
import { io, Socket } from 'socket.io-client';

import {
  IClassroomSocketContext,
  IClassroomSocketContextProviderProps,
} from './types';

const ClassroomSocketContext = createContext<IClassroomSocketContext>({
  socket: null,
});
ClassroomSocketContext.displayName = 'ClassroomSocketContext';

export const ClassroomSocketContextProvider = ({
  children,
}: IClassroomSocketContextProviderProps) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    // not adding any credentials as some pages can be used by unathorized users
    const socketConnection = io(
      `${process.env.REACT_APP_SOCKER_SERVER_URL}/classroom`
    );
    setSocket(socketConnection);

    return () => {
      socketConnection.disconnect();
      setSocket(null);
    };
  }, []);

  const value: IClassroomSocketContext = {
    socket: socket,
  };

  return (
    <ClassroomSocketContext.Provider value={value}>
      {children}
    </ClassroomSocketContext.Provider>
  );
};

export const useSocket = () => {
  const context = useContext(ClassroomSocketContext);
  if (!context) {
    throw new Error('Cannot be rendered outside of the ClassroomSocketContext');
  }
  return context;
};

import { Socket } from 'socket.io-client';

export interface ISocketContext {
  socket: Socket;
}

export interface ISocketContextProviderProps {
  children: React.ReactNode;
}

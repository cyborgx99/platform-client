import { Socket } from 'socket.io-client';

export interface IClassroomSocketContext {
  socket: Socket | null;
}

export interface IClassroomSocketContextProviderProps {
  children: React.ReactNode;
}

import { SortOrder } from 'apollo/graphql/generated.types';

export type LimitOption = {
  label: string;
  value: number;
};

export type OrderOption = {
  label: string;
  value: SortOrder;
};

export enum SocketEmit {
  joinRoom = 'joinRoom',
  textChange = 'textChange',
  leaveRoom = 'leaveRoom',
  saveDocument = 'saveDocument',
  emitInput = 'emitInput',
}

export enum SocketOn {
  loadNotes = 'loadNotes',
  receiveChanges = 'receiveChanges',
  changeInput = 'changeInput',
  scrambledResponse = 'scrambledResponse',
  multiResponse = 'multiResponse',
}

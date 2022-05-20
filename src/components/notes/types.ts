export enum SocketEmit {
  joinRoom = 'joinRoom',
  textChange = 'textChange',
  leaveRoom = 'leaveRoom',
  saveDocument = 'saveDocument',
}

export enum SocketOn {
  loadNotes = 'loadNotes',
  receiveChanges = 'receiveChanges',
}

export interface LoadNotesData {
  notes: string;
}

export interface ReceiveChangesData {
  notes: string;
}

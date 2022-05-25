import 'quill/dist/quill.snow.css';

import { SocketEmit, SocketOn } from 'common/types';
import { useSocket } from 'pages/classroom/socket';
import Quill, { Sources, TextChangeHandler } from 'quill';
import React, { useCallback, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { QuillContainer } from './styles';
import { LoadNotesData, ReceiveChangesData } from './types';
import { quillId, toolbarOptions } from './utils';

const Notes = () => {
  const { id } = useParams<{ id: string }>();
  const quillRef = useRef<Quill | null>(null);
  const { socket } = useSocket();

  const quill = useCallback((wrapper: HTMLDivElement | null) => {
    if (!wrapper) return;

    wrapper.innerHTML = '';
    const editor = document.createElement('div');
    wrapper.append(editor);

    const quill = new Quill(editor, {
      theme: 'snow',
      modules: {
        toolbar: toolbarOptions,
      },
    });

    quill.disable();
    quill.setText('Loading...');
    quillRef.current = quill;
  }, []);

  useEffect(() => {
    if (!id || !socket) return;

    socket.once(SocketOn.loadNotes, (data: LoadNotesData) => {
      if (!quillRef.current) return;

      quillRef.current.setContents(JSON.parse(data.notes));
      quillRef.current.enable();
    });

    socket.emit(SocketEmit.joinRoom, { roomId: id });
  }, [id, socket]);

  useEffect(() => {
    if (!quillRef.current || !id) return;

    let timer: NodeJS.Timeout | null = null;

    const handleTextChange: TextChangeHandler = (
      delta,
      oldDelta,
      source: Sources
    ) => {
      if (source !== 'user' || !socket) return;

      const changeData = { roomId: id, notes: JSON.stringify(delta) };

      socket.emit(SocketEmit.textChange, changeData);

      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        if (!quillRef.current) return;

        const saveData = {
          roomId: id,
          notes: JSON.stringify(quillRef.current.getContents()),
        };

        socket.emit(SocketEmit.saveDocument, saveData);
      }, 1500);
    };

    quillRef.current.on('text-change', handleTextChange);

    return () => {
      if (!quillRef.current) return;
      quillRef.current.off('text-change', handleTextChange);
    };
  }, [id, socket]);

  useEffect(() => {
    if (!quillRef.current || !id || !socket) return;

    const handleTextChange = (data: ReceiveChangesData) => {
      if (!quillRef.current) return;

      quillRef.current.updateContents(JSON.parse(data.notes));
    };

    socket.on(SocketOn.receiveChanges, handleTextChange);

    return () => {
      socket.off(SocketOn.receiveChanges, handleTextChange);
    };
  }, [id, socket]);

  return <QuillContainer ref={quill} id={quillId} />;
};

export default Notes;

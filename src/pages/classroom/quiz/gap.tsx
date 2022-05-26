import { LessonContentSentencePart } from 'apollo/graphql/generated.types';
import { SocketEmit, SocketOn } from 'common/types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useSocket } from '../socket';
import { StyledInput } from './styles';
import { GapData, GapEmitData } from './types';

const GapPart = ({ part }: { part: LessonContentSentencePart }) => {
  const { id } = useParams<{ id: string }>();
  const { socket } = useSocket();
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!socket || !id) return;
    setValue(e.target.value);

    const data: GapEmitData = {
      roomId: id,
      value: e.target.value,
      partId: part.id,
    };

    socket.emit(SocketEmit.handleGap, data);
  };

  useEffect(() => {
    if (!id || !socket) return;

    const handleTextChange = (data: GapData) => {
      if (part.id !== data.partId) return;
      setValue(data.value);
    };

    socket.on(SocketOn.changeInput, handleTextChange);

    return () => {
      socket.off(SocketOn.changeInput, handleTextChange);
    };
  }, [id, part.id, socket]);

  const isCorrect = value.toLowerCase() === part.part.toLowerCase();

  return (
    <StyledInput
      readOnly={isCorrect}
      $isCorrect={isCorrect}
      value={value}
      onChange={onChange}
    />
  );
};

export default GapPart;

import { SocketOn } from 'common/types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useSocket } from '../socket';
import { QuizMultiAnswerButton } from './styles';
import { IQuizMultiAnswerProps } from './types';

const QuizMultiAnswer = ({ part }: IQuizMultiAnswerProps) => {
  const { id } = useParams<{ id: string }>();
  const [isAnswered, setIsAnswered] = useState(false);
  const { socket } = useSocket();

  const handleClick = () => {
    if (!socket) return;
    setIsAnswered(true);
    const data = {
      roomId: id,
      partId: part.id,
      value: true,
    };
    socket.emit('handleMulti', data);
  };

  useEffect(() => {
    if (!id || !socket) return;

    const handleChange = (data: any) => {
      if (part.id !== data.partId) return;
      setIsAnswered(data.value);
    };

    socket.on(SocketOn.multiResponse, handleChange);

    return () => {
      socket.off(SocketOn.multiResponse, handleChange);
    };
  }, [id, part.id, socket]);

  return (
    <QuizMultiAnswerButton
      $answer={isAnswered ? part.partType : 'unanswered'}
      onClick={handleClick}>
      {part.part}
    </QuizMultiAnswerButton>
  );
};

export default QuizMultiAnswer;

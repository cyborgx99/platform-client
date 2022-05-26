import { LessonContentSentencePart } from 'apollo/graphql/generated.types';
import { SocketOn } from 'common/types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useSocket } from '../socket';
import Scrambled from './scrambled';
import {
  QuizSentenceScrambleAnswerWrapper,
  QuizSentenceScrambleWrapper,
} from './styles';
import {
  IQuizSentenceScrambleProps,
  ScrambledData,
  ScrambledEmitData,
} from './types';

const QuizSentenceScramble = ({
  parts,
  text,
  sentenceId,
}: IQuizSentenceScrambleProps) => {
  const { id } = useParams<{ id: string }>();
  const { socket } = useSocket();
  const [rightOrder, setRightOrder] = useState<LessonContentSentencePart[]>([]);

  const selectedIds = rightOrder.map((part) => part.id);
  const filteredParts = parts.filter((part) => !selectedIds.includes(part.id));
  const answer = rightOrder.map((item) => item.part).join(' ');
  const isCorrect = answer === text;

  const handleAdd = (part: LessonContentSentencePart) => {
    if (!socket || !id) return;
    const data: ScrambledEmitData = {
      type: 'add',
      part,
      sentenceId,
      roomId: id,
    };
    socket.emit('handleScrambled', data);
    setRightOrder((prev) => {
      return [...prev, part];
    });
  };

  const handleRemove = (part: LessonContentSentencePart) => {
    if (!socket || isCorrect || !id) return;
    const data: ScrambledEmitData = {
      type: 'remove',
      part,
      sentenceId,
      roomId: id,
    };
    socket.emit('handleScrambled', data);
    setRightOrder((prev) => {
      return prev.filter((item) => item.id !== part.id);
    });
  };

  useEffect(() => {
    if (!id || !socket || !sentenceId) return;

    const handleChange = (data: ScrambledData) => {
      if (sentenceId !== data.sentenceId) return;

      if (data.type === 'add') {
        setRightOrder((prev) => [...prev, data.part]);
        return;
      }
      if (data.type === 'remove') {
        setRightOrder((prev) => {
          return prev.filter((item) => item.id !== data.part.id);
        });
        return;
      }
    };

    socket.on(SocketOn.scrambledResponse, handleChange);

    return () => {
      socket.off(SocketOn.scrambledResponse, handleChange);
    };
  }, [id, sentenceId, socket]);

  return (
    <>
      <QuizSentenceScrambleWrapper>
        {filteredParts.map((part) => (
          <Scrambled onClick={handleAdd} key={part.id} part={part} />
        ))}
      </QuizSentenceScrambleWrapper>
      <QuizSentenceScrambleAnswerWrapper $isCorrect={isCorrect}>
        {rightOrder.map((part) => (
          <Scrambled onClick={handleRemove} key={part.id} part={part} />
        ))}
      </QuizSentenceScrambleAnswerWrapper>
    </>
  );
};

export default QuizSentenceScramble;

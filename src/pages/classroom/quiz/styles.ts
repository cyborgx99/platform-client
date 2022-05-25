import { PartType } from 'apollo/graphql/generated.types';
import styled, { css } from 'styled-components';

export const QuizSentenceGapWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
  align-items: center;
`;

export const StyledInput = styled.input<{ $isCorrect: boolean }>`
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray.base};
  outline: none;
  ${({ $isCorrect }) => $isCorrect && styles}
`;

const styles = css`
  background-color: ${({ theme }) => theme.colors.green.light};
`;

export const QuizSentenceScrambleWrapper = styled(QuizSentenceGapWrapper)`
  min-height: 1.75rem;
`;

const correctStyles = css`
  background-color: ${({ theme }) => theme.colors.green.base};
`;

export const QuizSentenceScrambleAnswerWrapper = styled(
  QuizSentenceScrambleWrapper
)<{
  $isCorrect: boolean;
}>`
  ${({ $isCorrect }) => $isCorrect && correctStyles};
`;

export const QuizScrambled = styled.button`
  background: none;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
`;

export const QuizSentenceMultiWrapper = styled(QuizSentenceGapWrapper)``;

export const QuizMultiAnswerButton = styled(QuizScrambled)<{
  $answer: PartType | 'unanswered';
}>`
  ${({ $answer }) => {
    if ($answer === PartType.WrongAnswer)
      return css`
        border: 1px solid ${({ theme }) => theme.colors.red.base};
      `;
    if ($answer === PartType.RightAnswer)
      return css`
        border: 1px solid ${({ theme }) => theme.colors.green.base};
      `;
  }}
`;

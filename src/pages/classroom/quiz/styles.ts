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

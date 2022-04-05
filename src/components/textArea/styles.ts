import reactTextareaAutosize from 'react-textarea-autosize';
import styled, { css } from 'styled-components';

const border = css`
  border: 2px solid ${({ theme }) => theme.colors.secondary.light};
`;

const borderError = css`
  border: 2px solid ${({ theme }) => theme.colors.red.light};
`;

const outline = css`
  outline: 2px solid ${({ theme }) => theme.colors.secondary.darkest};
`;

const outlineError = css`
  outline: 2px solid ${({ theme }) => theme.colors.red.darkest};
`;

export const TextAreaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.25rem;
`;

export const StyledTextArea = styled(reactTextareaAutosize)<{
  $hasError: boolean;
}>`
  resize: none;
  width: 100%;

  padding: 0.25rem;
  border-radius: 8px;
  ${({ $hasError }) => ($hasError ? borderError : border)};

  &:focus {
    ${({ $hasError }) => ($hasError ? outlineError : outline)};
  }
`;

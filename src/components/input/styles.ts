import styled, { css } from 'styled-components';
import { SpanBase } from 'styles/globalStyles';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
`;

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

export const StyledInput = styled.input<{ $hasError: boolean }>`
  padding: 0.25rem;
  border-radius: 8px;
  ${({ $hasError }) => ($hasError ? borderError : border)};

  &:focus {
    ${({ $hasError }) => ($hasError ? outlineError : outline)};
  }
`;

export const ErrorMessage = styled(SpanBase)`
  color: ${({ theme }) => theme.colors.red.base};
`;

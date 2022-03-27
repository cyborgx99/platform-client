import styled, { css } from 'styled-components';

export const TogglerContainer = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.gray.base};
  & button + button {
    border-left: 1px solid ${({ theme }) => theme.colors.gray.base};
  }
`;

export const TogglePartButton = styled.button<{ $isActive: boolean }>`
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  text-transform: uppercase;
  flex: 1;
  color: ${({ theme }) => theme.colors.gray.darkest};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${({ theme }) => theme.colors.primary.base};
      background-color: ${({ theme }) => theme.colors.gray.lightest};
    `}
`;
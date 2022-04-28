import styled, { css } from 'styled-components';

export const TogglerContainer = styled.div`
  display: flex;
  margin: 0.4rem 0;
  flex-wrap: wrap;
  border: 1px solid ${({ theme }) => theme.colors.gray.base};

  & button + button {
    border-left: 1px solid ${({ theme }) => theme.colors.gray.base};
  }
`;

export const TogglePartButton = styled.button<{ $isActive: boolean }>`
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;
  padding: 0.35rem;
  text-transform: uppercase;
  flex: 1;
  color: ${({ theme }) => theme.colors.gray.darkest};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.yellow.base};
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${({ theme }) => theme.colors.primary.base};
      background-color: ${({ theme }) => theme.colors.gray.lightest};
    `}
`;

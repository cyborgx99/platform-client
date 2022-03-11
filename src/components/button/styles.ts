import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 0.25rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.primary.main};
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 6rem;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary.hover};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.active};
    background-color: ${({ theme }) => theme.colors.primary.active};
  }

  ${({ theme }) => theme.typography.regularText}
`;
